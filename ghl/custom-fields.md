# GoHighLevel Custom Fields - Roofing Lead Data

These custom fields store roofing-specific information collected by the AI agent during the SMS qualification conversation.

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
| Roofing Address | `roofing_address` | Text | Full property address |
| Roofing Issue Description | `roofing_issue` | Text Area | What the homeowner describes |
| Repair or Replacement | `repair_or_replacement` | Dropdown | Repair, Replacement, Unknown |
| Urgency Level | `urgency_level` | Dropdown | Urgent (active leak/damage), Soon (within 2 weeks), Not urgent |
| Insurance Claim | `insurance_claim` | Dropdown | Yes, No, Maybe/Unsure |
| Storm Damage | `storm_damage` | Dropdown | Yes, No, Unknown |
| Preferred Appointment Time | `preferred_appointment_time` | Text | Whatever the contact says (e.g., "Monday morning", "This week") |
| Photos Sent | `photos_sent` | Dropdown | Yes, No, Pending |
| Lead Source | `lead_source` | Dropdown | Missed Call, Google Ad, Referral, Website, Instagram |
| AI Qualification Status | `ai_qualification_status` | Dropdown | Not Started, In Progress, Qualified, Not Qualified |
| Number of Previous Calls | `num_previous_calls` | Number | Auto-incremented by workflow |

---

## How Fields Are Populated

The AI agent extracts this information from the SMS conversation and updates the fields via:

- **GHL native AI:** Fields are updated automatically if the bot is configured to capture them
- **Webhook + Claude:** The Claude agent parses the conversation and updates fields via the GHL API (PATCH contact endpoint)

---

## Using Custom Fields in Workflows

Reference custom fields in SMS messages and notifications using merge tags:

| Field | Merge Tag |
|---|---|
| Roofing Address | `{{contact.roofing_address}}` |
| Roofing Issue | `{{contact.roofing_issue}}` |
| Repair or Replacement | `{{contact.repair_or_replacement}}` |
| Urgency Level | `{{contact.urgency_level}}` |
| Insurance Claim | `{{contact.insurance_claim}}` |
| Preferred Appointment Time | `{{contact.preferred_appointment_time}}` |

---

## Using Fields in the Internal Notification

Include all custom fields in the internal team notification so the roofing team sees a full lead summary before calling back. See `missed-call-workflow.md` Step 8 for the full notification template.

---

## Notes

- Always test custom field merge tags in a sandbox contact before going live
- Field keys are case-sensitive in GHL API calls
- If using the GHL API to update fields, the endpoint is: `PUT /contacts/{contactId}` with the fields in the `customField` object
