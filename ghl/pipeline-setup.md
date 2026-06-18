# GoHighLevel Pipeline Setup - Local Service Business

This document covers how to set up and use the CRM pipeline inside the client's GHL account. This pipeline works for any local service business.

---

## Pipeline Name

**Missed Call Leads**

This is the main pipeline for tracking all inbound leads from the missed call automation.

---

## Pipeline Stages

Create these stages in order. Each stage represents where the lead is in the process.

| Stage | Description | Who Moves Them Here |
|---|---|---|
| New Lead | Just entered the system via missed call trigger | Automation |
| Texted Back | First SMS sent, no reply yet | Automation |
| Qualified | AI agent has collected lead details | Automation |
| Appointment Requested | Customer asked to be scheduled | Automation or human |
| Appointment Booked | Appointment is confirmed on the calendar | Human or calendar automation |
| No Response | No reply after all follow-up messages | Automation |
| Won | Job sold or service completed | Human |
| Lost | Did not move forward | Human |

---

## How to Create the Pipeline in GHL

1. Go to **CRM > Pipelines**
2. Click **Create Pipeline**
3. Name it: `Missed Call Leads`
4. Add each stage from the table above in order
5. Click **Save**

---

## Stage Color Coding (Recommended)

| Stage | Color |
|---|---|
| New Lead | Blue |
| Texted Back | Yellow |
| Qualified | Orange |
| Appointment Requested | Purple |
| Appointment Booked | Teal |
| No Response | Gray |
| Won | Green |
| Lost | Red |

---

## Opportunity Setup

When the missed call automation triggers, it should create an opportunity in the pipeline.

**How to trigger this in the workflow:**
1. Add action: **Create or Update Opportunity**
2. Pipeline: Missed Call Leads
3. Stage: New Lead
4. Opportunity Name: `{{contact.full_name}} - {{contact.service_needed}}`
5. Lead Value: Leave blank or use a placeholder based on the client's average job value
6. Status: Open

---

## Moving Opportunities Between Stages

Automations handle most stage movements. The human team handles Appointment Booked, Won, and Lost.

**Automation triggers:**
- Missed call detected: Move to **New Lead**
- First SMS sent: Move to **Texted Back**
- Contact replies to SMS: Move to **Qualified** (after AI collects info)
- Customer requests appointment: Move to **Appointment Requested**
- No reply after follow-up sequence: Move to **No Response**

**Human triggers:**
- Appointment confirmed in calendar: Move to **Appointment Booked**
- Service sold or job accepted: Move to **Won**
- Lead says no or is not a fit: Move to **Lost**

---

## Pipeline Views

Use **Board View** for daily visual tracking of where every lead stands.

Use **List View** with filters to see:
- All leads in Qualified or Appointment Requested (highest priority follow-up)
- All leads created in the last 7 days
- All Won opportunities (track revenue)

---

## Notes

- Every contact created by the missed call workflow should have an opportunity in this pipeline
- Do not skip stages. Moving from New Lead directly to Won makes reporting inaccurate.
- Review the pipeline at the start and end of every work day
- Pipeline stages are the same regardless of the client's industry. Customize opportunity names using the `service_needed` custom field.
