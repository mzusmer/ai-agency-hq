# Missed Call Text-Back Workflow - GoHighLevel Build Guide

This is the step-by-step build guide for the core automation inside GoHighLevel. It is designed for local service businesses across any industry.

---

## Workflow Overview

**Workflow Name:** Missed Call Text-Back

**Purpose:** When someone calls the client's business line and does not get an answer, this workflow fires instantly. It sends a text within seconds, starts an AI-driven SMS conversation, qualifies the lead, and alerts the business team.

---

## Step 1: Trigger Setup

1. Go to **Automation > Workflows > Create Workflow**
2. Name the workflow: `Missed Call Text-Back`
3. Set the trigger to: **Missed Call**
4. Leave the trigger as-is (fires on any missed inbound call)

**Filters to add:**
- Contact Tag does NOT contain: `dnc`
- Contact Tag does NOT contain: `existing-client`

This prevents the workflow from re-triggering on existing clients or opted-out contacts.

---

## Step 2: First SMS (Immediate Response)

Add action: **Send SMS**

**Delay:** 0 seconds (fire immediately)

**From:** Client's registered business number (A2P 10DLC registered)

**Message:**
```
Hey {{contact.first_name}}, sorry we missed your call. This is {{location.name}}. What can we help you with today? Reply STOP to opt out. Msg & Data rates may apply.
```

**Notes:**
- Always include the business name in the first message (required for A2P compliance)
- Include opt-out instruction in the first message
- Keep it short. The goal is to get a reply.

---

## Step 3: Wait for Reply

Add action: **Wait**

**Type:** Wait for event
**Event:** Incoming SMS reply
**Timeout:** 30 minutes
**If no reply after 30 minutes:** Continue to Step 4 (no-reply path)

---

## Step 4: If/Else Branch - Did They Reply?

Add action: **If/Else**

**Condition:** Last Inbound Message contains any value

**If YES (they replied):**
Continue to the AI agent conversation path (Step 5)

**If NO (no reply within 30 minutes):**
- Send a follow-up SMS (Step 4B)
- Add tag: `no-response`
- Move to pipeline stage: **No Response**
- End workflow

**Step 4B - No Reply Follow-Up SMS:**
```
Hi {{contact.first_name}}, just checking in from {{location.name}}. We want to make sure you get taken care of. Feel free to reply here or call us back anytime.
```

---

## Step 5: AI Agent Conversation

**Option A: GHL Native AI**
- Add action: **AI Employee / Bot**
- Assign the pre-configured Lead Qualifier bot
- Set handoff condition: Human requested OR lead fully qualified

**Option B: Webhook to Claude**
- Add action: **Webhook**
- POST to your Claude agent endpoint
- Include contact ID, conversation history, and phone number in the payload
- The agent responds via GHL API

See `../ai-agent/missed-call-agent-prompt.md` for the full agent prompt.

---

## Step 6: Tag the Lead After Qualification

After the AI agent completes qualification, add the following tags based on outcomes:

| Outcome | Tag to Add |
|---|---|
| Fully qualified, appointment requested | `qualified-lead`, `appointment-requested` |
| Interested but not ready to book | `service-request` |
| Estimate or quote requested | `estimate-requested` |
| Urgent situation | `urgent` |
| Not a fit or wrong number | `not-qualified` |
| Opted out | `dnc` |

---

## Step 7: Pipeline Update

Add action: **Update Contact Field / Move Pipeline Stage**

| Situation | Pipeline Stage |
|---|---|
| Qualified and appointment requested | Appointment Requested |
| Interested, needs follow-up | Qualified |
| Replied but not yet qualified | Texted Back |
| No reply | No Response |

See `pipeline-setup.md` for full pipeline stage definitions.

---

## Step 8: Internal Notification to Business Team

When a lead is qualified (tag = `qualified-lead`):

Add action: **Send Internal Notification** or **Send Email**

**To:** Owner's email or internal team notification

**Subject:** New Qualified Lead - Action Required

**Body:**
```
You have a new qualified lead from your missed call automation.

Name: {{contact.full_name}}
Phone: {{contact.phone}}
Service Needed: {{contact.service_needed}}
Request Details: {{contact.request_details}}
Address: {{contact.service_address}}
Urgency: {{contact.urgency}}
Preferred Time: {{contact.preferred_appointment_time}}

Go to GHL to review the full conversation and confirm the next step.
```

Optional SMS alert to owner's cell:
```
NEW LEAD: {{contact.full_name}} at {{contact.phone}} needs help with {{contact.service_needed}}. Check GHL now.
```

---

## Step 9: Follow-Up Sequence for Warm Leads

For contacts tagged `service-request` (interested but not booked):

**Day 1 (4 hours after initial contact):**
```
Hi {{contact.first_name}}, just checking back in from {{location.name}}. Are you still looking for help? We would love to get you scheduled. Reply anytime.
```

**Day 3:**
```
Hey {{contact.first_name}}, {{location.name}} here. We still have openings this week. Want to get you taken care of? Just reply YES or call us directly.
```

**Day 7 (final):**
```
Last follow-up from {{location.name}}, {{contact.first_name}}. If you ever need us, we are here. Feel free to call or text anytime. Take care!
```

Add tag `follow-up-complete` after the final message.

---

## Step 10: Workflow End

- If appointment booked: end workflow (GHL calendar handles reminders)
- If follow-up sequence complete: end workflow
- If no reply: add tag `no-response` and end

---

## Notes

- Set the workflow to **Active** only after all testing is complete
- Test with your own phone number before going live with a client
- A2P 10DLC registration must be approved before any SMS goes out
- See `testing-checklist.md` for the full QA checklist
