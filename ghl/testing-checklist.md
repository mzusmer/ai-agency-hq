# Pre-Launch Testing Checklist - Missed Call Text-Back

Complete every item on this checklist before going live with a client. Do not skip steps. This checklist works for any local service business.

---

## Before Testing

- [ ] A2P 10DLC registration is submitted (ideally approved before testing with real leads)
- [ ] GHL sub-account is fully set up for the client
- [ ] The missed call workflow is built and saved
- [ ] All custom fields are created
- [ ] The Missed Call Leads pipeline is created with all stages
- [ ] The AI agent prompt is configured with the client's business name and details
- [ ] Internal notification recipient is confirmed (owner's email and/or cell)
- [ ] Test contact is created in GHL with a real phone number you control

---

## Trigger Test

- [ ] Call the client's business number from your test phone without answering
- [ ] Confirm the missed call appears in GHL under **Conversations**
- [ ] Confirm the workflow triggered (check **Workflow History**)
- [ ] Confirm the first SMS arrived on your test phone within 30 seconds

**If SMS did not arrive:**
- Check that the workflow is set to Active
- Check that A2P is not blocking outbound messages
- Check that the From number is assigned to the workflow correctly

---

## SMS Content Test

- [ ] The business name (location name) appears in the first message
- [ ] Opt-out language is present (`Reply STOP to opt out`)
- [ ] Message frequency disclosure is present (`Msg & Data rates may apply`)
- [ ] No broken merge tags appear literally (e.g., `{{contact.first_name}}` showing as-is)
- [ ] The message reads naturally on a phone screen

---

## AI Agent Conversation Test

Run through the full conversation as if you are a customer:

- [ ] Reply to the first SMS with a realistic request (e.g., "I need a quote for lawn care" or "My AC stopped working")
- [ ] Confirm the agent responds appropriately and asks the right follow-up question
- [ ] Complete the full qualification (service needed, details, address, urgency, preferred time)
- [ ] Confirm each custom field is populated in GHL after the conversation
- [ ] Confirm the correct tags are applied (e.g., `qualified-lead`, `service-request`)
- [ ] Confirm the pipeline stage updates correctly
- [ ] Test the handoff trigger: say "Can I talk to someone?" and confirm the agent responds and flags for human

---

## No-Reply Path Test

- [ ] Call the business number without answering (trigger the workflow)
- [ ] Do NOT reply to the first SMS
- [ ] Wait for the timeout (lower the wait time to 5 minutes temporarily for testing)
- [ ] Confirm the follow-up SMS sends
- [ ] Confirm tag `no-response` is applied
- [ ] Confirm the pipeline stage moves to No Response

---

## Internal Notification Test

- [ ] Complete a full qualification conversation as the customer
- [ ] Confirm the internal notification email arrives at the owner's inbox
- [ ] Confirm the notification includes all custom field data (service needed, address, urgency, etc.)
- [ ] If SMS notification is enabled, confirm it arrives on the owner's cell
- [ ] Confirm no notification fires for an unqualified or no-reply lead

---

## Opt-Out Test

- [ ] From your test phone, reply STOP to one of the SMS messages
- [ ] Confirm GHL marks the contact as unsubscribed
- [ ] Confirm no further SMS messages are sent to that number
- [ ] Confirm the tag `dnc` is applied
- [ ] Confirm the opt-out confirmation message is sent

---

## Pipeline Test

- [ ] Open the Missed Call Leads pipeline in GHL
- [ ] Confirm the test opportunity appears after the trigger
- [ ] Confirm stages update correctly through the conversation
- [ ] Confirm Won and Lost can be set manually

---

## Final Checks Before Going Live

- [ ] Switch the workflow from Draft to **Active**
- [ ] Remove any test contacts that should not receive real messages
- [ ] Confirm the From number is the client's real registered business number
- [ ] Brief the client on how to use GHL:
  - Where to find leads (Conversations tab and Pipeline)
  - What a notification looks like and what to do when one arrives
  - How to move leads through the pipeline
  - How to mark jobs as Won

---

## Sign-Off

| Item | Date | Notes |
|---|---|---|
| Workflow built | | |
| A2P registered | | |
| Testing completed | | |
| Client briefed | | |
| Workflow activated | | |

Client name: ___________________
Industry: ___________________
Go-live date: ___________________
