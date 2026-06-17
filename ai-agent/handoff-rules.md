# AI Agent Handoff Rules

These rules define when the AI agent stops managing the conversation and hands it off to a human team member.

---

## What Is a Handoff?

A handoff means the AI agent:
1. Sends a closing message to the homeowner explaining a human will follow up
2. Flags the contact in GHL with the appropriate tag
3. Sends an internal notification to the roofing team
4. Stops responding to further messages in that thread

---

## When to Hand Off

### Trigger 1: Homeowner Requests a Human
If the homeowner says anything like:
- "Can I talk to someone?"
- "Can a real person call me?"
- "I want to speak to the owner"
- "Is there a human I can talk to?"

**Response:**
> "Of course! I'll let our team know to give you a call. What's the best time to reach you today or tomorrow?"

**Action:** Apply tag `Handoff Requested`, send internal notification.

---

### Trigger 2: Emergency or Safety Situation
If there is any sign of immediate danger or structural emergency.

**Response:**
> "This sounds urgent. I'm notifying our team right now to call you immediately. If there's any risk to your safety, please move to a safe location. Our team will be in touch very shortly."

**Action:** Apply tag `Urgent`, send high-priority internal notification with SMS alert to owner's cell.

---

### Trigger 3: Anger or Escalation
If the homeowner is clearly frustrated and the conversation is not improving.

**Response:**
> "I completely understand your frustration and I'm sorry for the trouble. Let me have our team reach out to you directly so we can make this right. Is there a good number and time to call you?"

**Action:** Apply tag `Escalation - Needs Human`, send internal notification.

---

### Trigger 4: Question Outside Agent Knowledge
If the homeowner asks something the agent cannot answer accurately:
- Specific material pricing or availability
- Permit requirements
- Questions about a specific crew member or past job
- Legal or insurance claim specifics

**Response:**
> "That's a great question and I want to make sure you get the right answer. Let me have someone from our team follow up with you directly on that. Is there a good time to call?"

**Action:** Apply tag `Question for Human`, note the question in the conversation or custom field, send internal notification.

---

### Trigger 5: Lead Fully Qualified
After the agent has collected all required information and the homeowner has confirmed their preferred appointment time.

This is a positive handoff. The human team confirms the appointment and prepares for the visit.

**Response:**
> "You're all set, [Name]! I've passed everything along to our team. You'll receive a confirmation soon. Is there anything else you'd like us to know before we come out?"

**Action:** Apply tag `Hot Lead - Inspection Requested`, move to pipeline stage `Estimate Scheduled`, send full lead summary notification to team.

---

## Internal Notification Content for Handoffs

Send to: Owner email + (optional) owner cell via SMS

**Subject:** Action Required: [Handoff Type] - [Contact Name]

**Body:**
```
Contact: {{contact.full_name}}
Phone: {{contact.phone}}
Address: {{contact.roofing_address}}
Issue: {{contact.roofing_issue}}
Repair/Replacement: {{contact.repair_or_replacement}}
Urgency: {{contact.urgency_level}}
Insurance: {{contact.insurance_claim}}
Preferred Time: {{contact.preferred_appointment_time}}

Handoff Reason: [Requested human / Emergency / Escalation / Question / Fully qualified]

View the full conversation in GHL: [Link to contact]
```

---

## After Handoff

- The AI agent stops sending messages to this contact
- The human team takes over from GHL Conversations
- If the human team fails to respond within 2 hours (during business hours), a reminder notification fires
- Log the outcome in the pipeline (Closed Won, Closed Lost, or still in progress)

---

## What the Human Team Does After a Handoff

1. Read the full conversation in GHL
2. Review the custom field data (address, issue, urgency, insurance, appointment time)
3. Call the homeowner to confirm details or resolve their concern
4. Update the pipeline stage and add notes
5. Schedule the inspection in the calendar if not already done
