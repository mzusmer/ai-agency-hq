# GoHighLevel Tags - Local Service Lead System

Tags classify contacts, control workflow logic, and filter the CRM. Use them consistently across all client accounts.

---

## How Tags Work in GHL

- Tags are applied to contacts (not opportunities)
- Workflows can apply tags automatically based on triggers and conditions
- Tags can be used as workflow filters and triggers
- You can search and filter contacts by tag in the CRM

---

## Master Tag List

### Lead Status Tags

| Tag | When Applied | Purpose |
|---|---|---|
| `missed-call` | When missed call workflow triggers | Identifies source of contact |
| `texted-back` | When the first SMS fires | Confirms outreach happened |
| `replied` | When contact replies to SMS | Confirms they are responsive |
| `no-response` | After all follow-ups with no reply | Flag for manual review |
| `qualified-lead` | AI agent has collected full lead details | Ready for human follow-up |
| `service-request` | Interested but not ready to book | Needs nurture |
| `estimate-requested` | Contact asked for a quote or estimate | High priority |
| `appointment-requested` | Contact asked to be scheduled | Move to Appointment Requested stage |
| `appointment-booked` | Appointment is confirmed | Move to Appointment Booked stage |
| `follow-up-complete` | All follow-up messages sent | Prevents re-triggering |
| `not-qualified` | Not a fit (wrong service, wrong area, etc.) | Remove from active follow-up |

### Urgency Tags

| Tag | When Applied |
|---|---|
| `urgent` | Customer describes a same-day or emergency situation |

### Contact Management Tags

| Tag | When Applied |
|---|---|
| `dnc` | Contact opted out (replied STOP) |
| `existing-client` | Contact is already a client |
| `bad-number` | Number does not work or is wrong |
| `duplicate` | Duplicate contact, do not contact |
| `handoff-requested` | Customer asked to speak to a human |

### Outcome Tags

| Tag | When Applied |
|---|---|
| `won` | Service sold or appointment completed |
| `lost` | Did not move forward |

---

## Workflow Logic Using Tags

**Prevent re-triggering:**
- Filter: Tag does NOT contain `dnc`
- Filter: Tag does NOT contain `existing-client`
- Filter: Tag does NOT contain `duplicate`

**Prioritize urgent leads:**
- Use tag `urgent` to trigger priority notifications to the owner's cell
- Surface urgent leads at the top of any filtered CRM view

**Stop follow-up sequences:**
- Before sending Day 3 and Day 7 messages, check if tag `replied` exists
- If yes, branch away from the follow-up path

---

## How to Create Tags in GHL

Tags are created automatically when first applied in a workflow or manually added to a contact. You do not need to pre-create them. However, applying each tag to a test contact makes them easier to find in the tag library for filtering later.

---

## Searching by Tag in GHL

1. Go to **CRM > Contacts**
2. Click **Filters**
3. Add filter: **Tag contains** [tag name]
4. Save as a Smart List for quick daily access

**Recommended Smart Lists:**

| List Name | Filter |
|---|---|
| Hot Leads | Tag = `appointment-requested` OR `estimate-requested` |
| Urgent | Tag = `urgent` |
| No Response | Tag = `no-response` |
| All Qualified | Tag = `qualified-lead` |
| DNC | Tag = `dnc` |
