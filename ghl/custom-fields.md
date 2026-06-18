# GoHighLevel Custom Fields - Local Service Lead Data

These custom fields store information collected by the AI agent during the SMS qualification conversation. They are designed to work for any local service business.

---

## How to Create Custom Fields in GHL

1. Go to **Settings > Custom Fields**
2. Click **Add Field**
3. Set the field type, label, and key
4. Click **Save**
5. Repeat for each field below

---

## Custom Fields to Create

| Field Label | Field Key | Field Type | Values / Notes |
|---|---|---|---|
| Service Needed | `service_needed` | Text | Brief description of what the customer wants |
| Request Details | `request_details` | Text Area | More detailed description of the issue or request |
| Service Address | `service_address` | Text | Property or service location address |
| Urgency | `urgency` | Dropdown | Urgent (same day / emergency), Soon (this week), Flexible |
| Preferred Appointment Time | `preferred_appointment_time` | Text | What the customer says (e.g., "Monday morning", "This week") |
| Photos Sent | `photos_sent` | Dropdown | Yes, No, Pending |
| Lead Source | `lead_source` | Dropdown | Missed Call, Chat Widget, Referral, Google Ad, Website, Social |
| Best Next Step | `best_next_step` | Dropdown | Callback, Appointment, Estimate, Quote, Information Only |
| AI Qualification Status | `ai_qualification_status` | Dropdown | Not Started, In Progress, Qualified, Not Qualified, Handed Off |

---

## How Fields Are Populated

The AI agent extracts information from the SMS conversation and updates the fields via:

- **GHL native AI:** Fields are updated automatically if the bot is configured to capture them
- **Webhook + Claude:** The Claude agent parses the conversation and updates fields via the GHL API (PATCH contact endpoint)

---

## Using Custom Fields in Workflows

Reference custom fields in SMS messages and notifications using merge tags:

| Field | Merge Tag |
|---|---|
| Service Needed | `{{contact.service_needed}}` |
| Request Details | `{{contact.request_details}}` |
| Service Address | `{{contact.service_address}}` |
| Urgency | `{{contact.urgency}}` |
| Preferred Appointment Time | `{{contact.preferred_appointment_time}}` |
| Best Next Step | `{{contact.best_next_step}}` |

---

## Using Fields in the Internal Notification

Include all custom fields in the internal team notification so the business team sees a full lead summary before calling back. See `missed-call-workflow.md` Step 8 for the full notification template.

---

## Webhook Payload Reference

If using a webhook to Claude or another AI endpoint, include these fields in the request body:

```json
{
  "contact_id": "{{contact.id}}",
  "first_name": "{{contact.first_name}}",
  "last_name": "{{contact.last_name}}",
  "phone": "{{contact.phone}}",
  "location_name": "{{location.name}}",
  "business_name": "{{location.name}}",
  "call_status": "missed",
  "message_body": "{{last_message_body}}",
  "service_needed": "{{contact.service_needed}}",
  "request_details": "{{contact.request_details}}",
  "service_address": "{{contact.service_address}}",
  "urgency": "{{contact.urgency}}",
  "preferred_appointment_time": "{{contact.preferred_appointment_time}}",
  "lead_source": "missed_call"
}
```

## Expected Return JSON from AI Endpoint

```json
{
  "reply": "The SMS message to send back to the customer",
  "contact_id": "same contact_id from the request",
  "next_action": "continue | handoff | qualify | end",
  "tags": ["qualified-lead", "urgent"],
  "pipeline_stage": "Qualified"
}
```

---

## Notes

- Field keys are case-sensitive in GHL API calls
- Always test merge tags in a sandbox contact before going live
- The `service_needed` field is the most important one for internal notifications. Make sure the AI captures it early in the conversation.
