# GoHighLevel Tags - Roofing Lead System

Tags are used to classify contacts, control workflow logic, and filter the CRM. Use them consistently.

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
| `New Lead - Missed Call` | When missed call workflow triggers | Identifies source of contact |
| `Replied to SMS` | When contact replies to first text | Confirms they are responsive |
| `No Reply - Missed Call` | After 30 min wait with no response | Flag for manual follow-up |
| `Hot Lead - Inspection Requested` | When AI qualifies and they want an inspection | Top priority tag |
| `Warm Lead - Follow Up` | Interested but not ready to book | Needs nurture sequence |
| `Not Qualified` | Not a fit (wrong service, wrong area, etc.) | Remove from active follow-up |
| `Follow-Up Sequence Complete` | After all follow-up messages sent | Prevents re-triggering sequences |

### Job Type Tags

| Tag | When Applied |
|---|---|
| `Repair Lead` | Contact needs a repair, not a full replacement |
| `Replacement Lead` | Contact needs a full roof replacement |
| `Insurance Claim` | Job involves an insurance claim |
| `Storm Damage` | Damage is storm-related |
| `Urgent` | Active leak or immediate damage |

### Contact Management Tags

| Tag | When Applied |
|---|---|
| `DNC` | Contact opted out (replied STOP) |
| `Existing Client` | Contact is already a client |
| `Bad Number` | Number does not work or is wrong |
| `Duplicate` | Duplicate contact, do not contact |

### Appointment Tags

| Tag | When Applied |
|---|---|
| `Inspection Scheduled` | Appointment is booked |
| `Inspection Completed` | Roofer completed the site visit |
| `Proposal Sent` | Written estimate delivered |
| `Closed Won` | Job sold |
| `Closed Lost` | Did not move forward |

---

## Workflow Logic Using Tags

**Prevent re-triggering:**
- Add filter: Tag does NOT contain `DNC`
- Add filter: Tag does NOT contain `Existing Client`
- Add filter: Tag does NOT contain `Duplicate`

**Prioritize hot leads:**
- Use tag `Hot Lead - Inspection Requested` to trigger internal notifications
- Use tag `Urgent` to send priority SMS or call alert

**Stop follow-up sequences:**
- Check for tag `Replied to SMS` before sending follow-up messages
- If tag exists, branch away from the follow-up path

---

## How to Create Tags in GHL

Tags are created automatically when they are first applied in a workflow or manually added to a contact. You do not need to pre-create them. However, it is good practice to apply each tag at least once in a test contact so they appear in the tag library for easy filtering.

---

## Searching by Tag in GHL

1. Go to **CRM > Contacts**
2. Click **Filters**
3. Add filter: **Tag contains** [tag name]
4. This creates a smart list of all contacts with that tag

Save these smart lists for quick daily review:
- Hot Leads (tag = `Hot Lead - Inspection Requested`)
- No Reply (tag = `No Reply - Missed Call`)
- Urgent (tag = `Urgent`)
