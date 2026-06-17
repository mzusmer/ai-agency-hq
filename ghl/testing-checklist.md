# Pre-Launch Testing Checklist - Missed Call Text-Back

Complete every item on this checklist before going live with a client. Do not skip steps.

---

## Before Testing

- [ ] A2P 10DLC registration is submitted (ideally approved)
- [ ] GHL sub-account is fully set up for the client
- [ ] The missed call workflow is built and saved
- [ ] All custom fields are created
- [ ] The pipeline is created with all stages
- [ ] The AI agent prompt is loaded (native GHL or webhook)
- [ ] Internal notification recipient is confirmed (owner's email and/or cell)
- [ ] Test contact is created in GHL with a real phone number you control

---

## Trigger Test

- [ ] Call the client's business number from your personal phone without answering
- [ ] Confirm the missed call appears in GHL under **Conversations**
- [ ] Confirm the workflow triggered (check **Workflow History** in GHL)
- [ ] Confirm the first SMS arrived on your phone within 30 seconds

**Notes:**
If the SMS did not arrive:
- Check if the workflow is set to Active
- Check if A2P is blocking outbound messages
- Check the From number is assigned to the workflow correctly

---

## SMS Content Test

- [ ] The business name is in the first message
- [ ] Opt-out language is present (`Reply STOP to opt out`)
- [ ] The message does not have typos or broken merge tags (look for `{{contact.first_name}}` appearing literally instead of a name)
- [ ] The message reads naturally on a phone screen

---

## AI Agent Conversation Test

Run through the full conversation as if you are a homeowner:

- [ ] Reply YES to the first SMS
- [ ] Confirm the agent responds appropriately
- [ ] Go through all qualification questions (name, address, issue, repair/replacement, urgency, insurance, appointment)
- [ ] Confirm each custom field is populated in GHL after the conversation
- [ ] Confirm the correct tags are applied after the conversation
- [ ] Confirm the pipeline stage updates correctly

---

## No-Reply Path Test

- [ ] Call the business number without answering (trigger the workflow)
- [ ] Do NOT reply to the first SMS
- [ ] Wait 30+ minutes (or temporarily lower the wait time to 5 minutes for testing)
- [ ] Confirm the follow-up SMS sends
- [ ] Confirm tag `No Reply - Missed Call` is applied
- [ ] Confirm the pipeline stage moves to No Response

---

## Internal Notification Test

- [ ] Complete a full qualification conversation as the homeowner
- [ ] Confirm the internal notification email arrives at the owner's inbox
- [ ] Confirm the notification includes all custom field data (name, address, issue, etc.)
- [ ] If SMS notification is enabled, confirm the SMS arrives on the owner's personal number
- [ ] Confirm the notification does not arrive for unqualified leads

---

## Opt-Out Test

- [ ] From your test phone, reply STOP to one of the SMS messages
- [ ] Confirm GHL marks the contact as unsubscribed
- [ ] Confirm no further SMS messages are sent to that number
- [ ] Confirm the tag `DNC` is applied

---

## Pipeline Test

- [ ] Open the Roofing Leads pipeline in GHL
- [ ] Confirm the test opportunity appears in the correct stage after each workflow action
- [ ] Confirm stage moves happen correctly throughout the test conversation

---

## Final Checks Before Going Live

- [ ] Switch the workflow from **Draft** to **Active**
- [ ] Remove any test contacts that should not receive real messages
- [ ] Confirm the From number is the client's real registered business number, not a test number
- [ ] Brief the client on what happens when a lead comes in (check the GHL notification, review the conversation, call the lead back)
- [ ] Walk the client through the GHL dashboard so they know where to find leads

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
Go-live date: ___________________
