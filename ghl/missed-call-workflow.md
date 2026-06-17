# Missed Call Text-Back Workflow - GoHighLevel Build Guide

This is the step-by-step build guide for the core automation inside GoHighLevel.

---

## Workflow Overview

**Workflow Name:** Missed Call Text-Back - Roofing

**Purpose:** When someone calls the client's business line and does not get an answer, this workflow fires instantly. It sends a text within seconds, starts an AI-driven SMS conversation, qualifies the lead, and alerts the roofing team.

---

## Step 1: Trigger Setup

1. Go to **Automation > Workflows > Create Workflow**
2. Name the workflow: `Missed Call Text-Back - Roofing`
3. Set the trigger to: **Missed Call**
4. Leave the trigger as-is (fires on any missed inbound call)

**Filters to add:**
- Contact Tag does NOT contain: `DNC` (do not contact)
- Contact Tag does NOT contain: `Existing Client`

This prevents the workflow from re-triggering on existing clients or opted-out contacts.

---

## Step 2: First SMS (Immediate Response)

Add action: **Send SMS**

**Delay:** 0 seconds (fire immediately)

**From:** Client's registered business number (A2P 10DLC registered)

**Message:**
```
Hey, this is [Business Name]! Sorry we missed your call. We want to make sure we help you out.

Are you calling about a roofing issue? Reply YES and we'll get right back to you.

Reply STOP to opt out.
```

**Notes:**
- Use the Contact's first name merge tag if available: `{{contact.first_name}}`
- Keep this first message short. The goal is to get a reply, not to overwhelm.

---

## Step 3: Wait for Reply

Add action: **Wait**

**Type:** Wait for event
**Event:** Incoming SMS reply
**Timeout:** 30 minutes
**If no reply after 30 minutes:** Continue to Step 4 (follow-up path)

---

## Step 4: If/Else Branch - Did They Reply?

Add action: **If/Else**

**Condition:** Last Inbound Message contains any value

**If YES (they replied):**
Continue to the AI agent conversation path (Step 5)

**If NO (no reply within 30 minutes):**
- Send a follow-up SMS (Step 4B)
- Add tag: `No Reply - Missed Call`
- Move to pipeline stage: **No Response**
- End workflow

**Step 4B - No Reply Follow-Up SMS:**
```
Hi {{contact.first_name}}, just checking in! We want to make sure you get taken care of. Give us a call back or reply here anytime. [Business Name]
```

---

## Step 5: AI Agent Conversation

**Option A: GHL Native AI**
- Add action: **AI Employee / Bot**
- Assign the pre-configured Roofing Lead Qualifier bot
- Set handoff condition: Human requested OR lead fully qualified

**Option B: Webhook to Claude**
- Add action: **Webhook**
- POST to your Claude agent endpoint
- Include contact ID, conversation history, and phone number in the payload
- The agent responds via GHL API

See `../ai-agent/missed-call-agent-prompt.md` for the full agent prompt.

---

## Step 6: Tag the Lead After Qualification

After the AI agent completes qualification, add the following based on outcomes:

| Outcome | Tag to Add |
|---|---|
| Fully qualified, inspection requested | `Hot Lead - Inspection Requested` |
| Interested but not ready to book | `Warm Lead - Follow Up` |
| Repair needed | `Repair Lead` |
| Replacement needed | `Replacement Lead` |
| Insurance / storm damage | `Insurance Claim` |
| Urgent (active leak, damage) | `Urgent` |
| Not a fit | `Not Qualified` |
| Opted out | `DNC` |

---

## Step 7: Pipeline Update

Add action: **Update Contact Field**

Move the contact to the appropriate pipeline stage:

| Situation | Pipeline Stage |
|---|---|
| Qualified and inspection requested | Estimate Scheduled |
| Interested, needs follow-up | Contacted |
| Just texted back but not qualified yet | Contacted |
| No reply | No Response |

See `pipeline-setup.md` for full pipeline stage definitions.

---

## Step 8: Internal Notification to Roofing Team

When a hot lead is identified (tag = `Hot Lead - Inspection Requested`):

Add action: **Send Internal Notification** or **Send Email**

**To:** Owner's email or internal team Slack/email

**Subject:** New Hot Roofing Lead - Action Required

**Body:**
```
You have a new hot roofing lead from your missed call automation.

Name: {{contact.full_name}}
Phone: {{contact.phone}}
Address: {{contact.roofing_address}}
Issue: {{contact.roofing_issue}}
Type: {{contact.repair_or_replacement}}
Urgency: {{contact.urgency_level}}
Insurance Claim: {{contact.insurance_claim}}
Preferred Time: {{contact.preferred_appointment_time}}

Go to GHL to review the full conversation and confirm the appointment.
```

Also send an SMS alert to the owner's personal cell (optional but recommended):
```
NEW HOT LEAD: {{contact.full_name}} at {{contact.phone}} needs roofing help. Check GHL now.
```

---

## Step 9: Follow-Up Sequence for Warm Leads

For contacts tagged `Warm Lead - Follow Up`:

**Day 1 (same day, 4 hours after initial contact):**
```
Hi {{contact.first_name}}, just wanted to follow up! Are you still looking for help with your roof? We'd love to get someone out to take a look. Reply anytime.
```

**Day 3:**
```
Hey {{contact.first_name}}, [Business Name] here. We still have openings this week for free roof inspections. Want to grab one? Just reply YES.
```

**Day 7:**
```
Last follow-up from us, {{contact.first_name}}. If you ever need roofing help, we're here. Feel free to call or text anytime. Take care!
```

Add tag `Follow-Up Sequence Complete` after the final message.

---

## Step 10: Workflow End

- If qualified and inspection confirmed: end workflow (GHL calendar handles reminders)
- If warm lead sequence complete: end workflow
- If no reply ever: add tag `No Reply - Missed Call` and end

---

## Notes

- This workflow should be set to **Active** only after all testing is complete
- Test with your own phone number before going live
- Make sure A2P 10DLC registration is approved before sending any SMS
- See `testing-checklist.md` for full QA checklist
