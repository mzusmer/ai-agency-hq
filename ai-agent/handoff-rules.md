# AI Agent Handoff Rules

These rules define when the AI agent stops managing the conversation and hands it off to a human team member.

---

## What Is a Handoff?

A handoff means the AI agent:
1. Sends a closing message to the customer explaining a human will follow up
2. Flags the contact in GHL with the appropriate tag
3. Sends an internal notification to the business team
4. Stops responding to further messages in that thread

---

## When to Hand Off

### Trigger 1: Customer Requests a Human
If the customer says anything like:
- "Can I talk to someone?"
- "Can a real person call me?"
- "I want to speak to the owner"
- "Is there a human I can talk to?"

**Response:**
> "Of course! I will let our team know to give you a call. What is the best time to reach you today or tomorrow?"

**Action:** Apply tag `handoff-requested`, send internal notification.

---

### Trigger 2: Emergency or Urgent Safety Situation
If there is any sign of immediate danger, safety risk, or time-sensitive emergency.

**Response:**
> "This sounds urgent. I am notifying our team right now to reach out as fast as possible. If there is any immediate risk, please take care of yourself first. Our team will be in touch very shortly."

**Action:** Apply tag `urgent`, send high-priority internal notification with optional SMS alert to owner's cell.

---

### Trigger 3: Anger or Escalation
If the customer is clearly frustrated and the conversation is not improving.

**Response:**
> "I completely understand your frustration and I'm sorry for the trouble. Let me have our team reach out to you directly so we can make this right. Is there a good time and number to call you?"

**Action:** Apply tag `escalation-needs-human`, send internal notification.

---

### Trigger 4: Question Outside Agent Knowledge
If the customer asks something the agent cannot answer accurately:
- Specific pricing or availability
- Questions about specific staff members
- Product or service details not in the agent's knowledge
- Legal, medical, or financial questions

**Response:**
> "That is a great question and I want to make sure you get the right answer. Let me have someone from our team follow up with you directly. Is there a good time to call?"

**Action:** Apply tag `question-for-human`, note the question, send internal notification.

---

### Trigger 5: Lead Fully Qualified
After the agent has collected all required information and the customer has confirmed their preferred appointment or callback time.

This is a positive handoff. The human team confirms the appointment or next step.

**Response:**
> "You are all set, {{contact.first_name}}! I have passed everything along to the team. You will hear from us soon to confirm your next step. Is there anything else you would like us to know?"

**Action:** Apply tag `qualified-lead`, move to pipeline stage `Appointment Requested`, send full lead summary notification to team.

---

## Internal Notification Content for Handoffs

Send to: Business owner email + (optional) owner cell via SMS

**Subject:** Action Required: {{handoff_type}} - {{contact.full_name}}

**Body:**
```
Contact: {{contact.full_name}}
Phone: {{contact.phone}}
Service Needed: {{contact.service_needed}}
Request Details: {{contact.request_details}}
Address: {{contact.service_address}}
Urgency: {{contact.urgency}}
Preferred Time: {{contact.preferred_appointment_time}}

Handoff Reason: [Customer requested human / Urgent / Escalation / Question / Fully qualified]

View the full conversation in GHL: [Link to contact]
```

Optional SMS to owner:
```
NEW LEAD: {{contact.full_name}} at {{contact.phone}} needs help with {{contact.service_needed}}. Check GHL now.
```

---

## After Handoff

- The AI agent stops sending messages to this contact
- The human team takes over from GHL Conversations
- If the human team fails to respond within 2 hours during business hours, a reminder notification fires
- Log the outcome in the pipeline (Won, Lost, or still in progress)

---

## What the Human Team Does After a Handoff

1. Read the full conversation in GHL
2. Review the custom field data (service needed, details, urgency, timing)
3. Call or text the customer to confirm details or resolve their concern
4. Update the pipeline stage and add notes
5. Confirm the appointment or next step if not already done
