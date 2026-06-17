# A2P 10DLC SMS Compliance Guide

A2P (Application-to-Person) 10DLC is the US carrier system that requires all businesses sending SMS from software platforms to register their phone numbers and message content. This is required to avoid spam filtering and carrier blocking.

---

## Why This Matters

If you skip A2P registration:
- Your messages may be blocked or filtered by carriers
- Delivery rates drop significantly
- The client's number can get flagged or blacklisted
- This can happen without any warning

Always register before going live with any client.

---

## What You Need to Register

1. **Business Information**
   - Legal business name
   - EIN (Employer Identification Number)
   - Business address
   - Business website
   - Business type (LLC, Sole Proprietorship, etc.)

2. **Use Case**
   - Select: Mixed (Customer Care + Marketing) or Two-Factor Auth, depending on workflow
   - For missed call text-back: **Customer Care** is the primary use case

3. **Sample Messages**
   - You must submit 2 to 5 sample messages that represent exactly what you will send
   - Samples must include opt-out language

---

## A2P Sample Messages for Roofing Missed Call Text-Back

Submit these as your sample messages during registration:

**Sample 1 - First Response:**
```
Hey [First Name], this is [Business Name] Roofing. Sorry we missed your call! Are you reaching out about a roofing issue? Reply YES and we'll get right with you. Reply STOP to opt out. Msg&Data rates may apply.
```

**Sample 2 - Qualification Follow-Up:**
```
Thanks for reaching out to [Business Name]! Can you tell us your address and what's going on with your roof? We want to get you taken care of as fast as possible.
```

**Sample 3 - Appointment Offer:**
```
Great! We have openings this week for free roof inspections. What day and time works best for you? We'll confirm and send a reminder.
```

**Sample 4 - Follow-Up (Day 3):**
```
Hi [First Name], [Business Name] here. We still have openings for free inspections this week. Want to grab one? Just reply YES or give us a call.
```

**Sample 5 - Final Follow-Up:**
```
Last follow-up from [Business Name]. If you need roofing help anytime, we're here. Call or text us anytime. Take care! Reply STOP to opt out.
```

---

## Required Language in Every First Contact SMS

Every first SMS to a new contact must include:
1. Business name
2. What the message is about
3. Opt-out instruction: `Reply STOP to opt out`
4. Message frequency disclosure (can be brief): `Msg&Data rates may apply`

---

## Opt-Out Handling in GHL

When a contact replies STOP, GHL automatically marks them as unsubscribed and stops all SMS. You should also:

1. Add tag: `DNC`
2. Remove them from all active workflows
3. Never manually send them another SMS

---

## How to Register in GHL

1. Go to **Settings > Phone Numbers**
2. Click on the number you want to register
3. Select **A2P Registration**
4. Follow the prompts to submit business info and sample messages
5. Wait for approval (typically 3 to 7 business days)

---

## How to Register via Twilio

If using a Twilio number connected to GHL:
1. Log into Twilio console
2. Go to **Messaging > Regulatory Compliance > A2P 10DLC**
3. Create a Brand (business registration)
4. Create a Campaign (use case + sample messages)
5. Assign the campaign to your phone number

---

## Timing

- Register A2P before you start building the workflow
- Allow up to 7 business days for approval
- Do not send any automated SMS until registration is approved

---

## Common Rejection Reasons

| Reason | Fix |
|---|---|
| Missing opt-out language | Add "Reply STOP to opt out" to sample messages |
| Vague use case description | Be specific: "Text-back for missed calls from roofing company customers" |
| Business name not in messages | Add the business name to every sample |
| Website does not match business | Make sure the website includes SMS opt-in language |
