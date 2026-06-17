# GoHighLevel Pipeline Setup - Roofing Company

This document covers how to set up and use the CRM pipeline inside the client's GHL account.

---

## Pipeline Name

**Roofing Leads**

This is the main pipeline for tracking all inbound leads from the missed call automation.

---

## Pipeline Stages

Create these stages in order. Each stage represents where the lead is in the sales process.

| Stage | Description | Who Moves Them Here |
|---|---|---|
| New Lead | Just entered the system, not yet contacted | Automation (on missed call trigger) |
| No Response | Called or texted but got no reply | Automation (after wait timeout) |
| Contacted | They replied to the SMS but are not yet qualified | Automation (on first reply) |
| Qualified | Lead has been qualified by the AI agent | Automation (after AI collects all info) |
| Estimate Scheduled | Inspection or estimate is booked | Human or automation (on appointment creation) |
| Proposal Sent | A written estimate has been sent to the homeowner | Human |
| Closed Won | Job sold | Human |
| Closed Lost | Did not move forward | Human |

---

## How to Create the Pipeline in GHL

1. Go to **CRM > Pipelines**
2. Click **Create Pipeline**
3. Name it: `Roofing Leads`
4. Add each stage from the table above in order
5. Set pipeline color and icon if desired (optional)
6. Click **Save**

---

## Stage Color Coding (Recommended)

| Stage | Color |
|---|---|
| New Lead | Blue |
| No Response | Gray |
| Contacted | Yellow |
| Qualified | Orange |
| Estimate Scheduled | Purple |
| Proposal Sent | Teal |
| Closed Won | Green |
| Closed Lost | Red |

---

## Opportunity Setup

When the missed call automation creates a new lead, it should also create an opportunity in the pipeline.

**How to trigger this in the workflow:**
1. Add action: **Create or Update Opportunity**
2. Pipeline: Roofing Leads
3. Stage: New Lead
4. Opportunity Name: `{{contact.full_name}} - Roofing Lead`
5. Lead Value: Leave blank or enter average job value ($5,000 is a common placeholder for residential roofing)
6. Status: Open

---

## Moving Opportunities Between Stages

Automations handle most stage movements. The human team handles moves into Proposal Sent, Closed Won, and Closed Lost.

**Automation stage triggers:**
- Missed call detected: Move to **New Lead**
- No reply after 30 min: Move to **No Response**
- Contact replies to SMS: Move to **Contacted**
- AI agent completes qualification: Move to **Qualified**
- Appointment created: Move to **Estimate Scheduled**

**Human stage triggers:**
- After sending a written proposal: Move to **Proposal Sent**
- Job signed: Move to **Closed Won**
- Lead says no: Move to **Closed Lost**

---

## Pipeline Views

Use the **Board View** for daily visual tracking of where every lead stands.

Use the **List View** with filters to see:
- All leads in Qualified or Estimate Scheduled (highest priority)
- All leads created in the last 7 days
- All Closed Won opportunities (track revenue)

---

## Notes

- Every contact created by the missed call workflow should have an opportunity in this pipeline
- Do not skip stages. Moving from New Lead directly to Closed Won makes reporting unreliable.
- Review the pipeline at the start and end of every work day
