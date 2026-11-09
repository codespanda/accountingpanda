import { fq } from "@/lib/finalTest"

// Final test bank for GST Input Tax Credit & Reconciliation — separate from
// the module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("Where are Vardhan Healthcare's branches?", "Bengaluru and Vijayawada", ["Chennai and Pune", "Delhi and Mumbai", "Kolkata and Jaipur"], "Each with its own GSTIN."),
  fq("About how much ITC does Vardhan claim each month?", "₹12 lakh", ["₹1 lakh", "₹1.2 crore", "₹50,000"], "Lakshmi manages it."),
  fq("What proof does Vardhan keep for a bill-to ship-to supply delivered to a hospital?", "The hospital's acknowledgement of delivery", ["Nothing", "The supplier's bank statement", "A GST registration certificate"], "Shows receipt on its direction."),
  fq("When is ITC claimed on Vardhan's cold-storage unit delivered in three lots?", "When the third lot arrives", ["When the first lot arrives", "When the invoice is paid", "At year end"], "Goods in lots."),
  fq("How does Vardhan protect itself from suppliers who don't pay their GST?", "Tracking their GSTR-3B status and holding back the GST portion", ["Paying in advance", "Ignoring it", "Claiming double ITC"], "And replacing repeat offenders."),
  fq("Which Section 16 condition can't be checked from the invoice itself?", "That the supplier actually paid the tax", ["The GSTIN", "The invoice number", "The tax rate"], "It depends on the supplier's return."),

  // Module 2
  fq("Is GST on constructing Vardhan's warehouse building allowed as ITC?", "No — it's blocked", ["Yes, in full", "Yes, 50%", "Only after 5 years"], "Own-account construction of immovable property."),
  fq("From when does the “plant and machinery” amendment apply?", "Retrospectively from 1 July 2017", ["1 April 2025", "1 April 2026", "Only for new contracts"], "Finance Act, 2025."),
  fq("What's excluded from “plant and machinery”?", "Land, buildings and other civil structures", ["Equipment fixed to a foundation", "Machinery", "Apparatus"], "So buildings don't qualify."),
  fq("Common ITC of ₹1,00,000 with exempt turnover of 20%. How much is reversed?", "₹20,000", ["₹80,000", "₹1,00,000", "Nil"], "Rule 42."),
  fq("How much common ITC did the ISD distribute to Hyderabad in October 2026?", "₹1,60,000", ["₹1,00,000", "₹40,000", "₹3,00,000"], "8/15 of ₹3,00,000."),
  fq("How does ISD credit go to the Bengaluru branch?", "As IGST", ["As CGST and SGST", "As cess", "In cash"], "A different State."),

  // Module 3
  fq("How many invoices did Lakshmi reject in October's IMS?", "3", ["5", "1,140", "0"], "A duplicate, a wrong GSTIN and goods never ordered."),
  fq("Which records does Lakshmi review individually in IMS?", "Every record above ₹10,000", ["None", "Only credit notes", "Only imports"], "And samples the rest."),
  fq("What's the risk of deemed acceptance?", "Ineligible ITC can flow into the claim", ["Suppliers get penalised", "ITC doubles", "Nothing"], "Silence means acceptance."),
  fq("Once GSTR-3B is filed, can that month's IMS actions still change GSTR-2B?", "No", ["Yes, any time", "Only in GSTR-9", "Only for imports"], "Act before filing."),
  fq("What ITC reduction does accepting the ₹9,000 GST credit note cause?", "₹9,000", ["₹50,000", "₹59,000", "Nil"], "If ITC was claimed originally."),
  fq("Where do suppliers fix records rejected in IMS?", "In their next GSTR-1 or GSTR-1A", ["In GSTR-9 only", "In the recipient's GSTR-3B", "They can't"], "Using the recipient's remarks."),

  // Module 4
  fq("What was Vardhan's ITC per GSTR-2B for October 2026?", "₹12,10,000", ["₹12,40,000", "₹11,60,000", "₹11,58,000"], "Including ₹50,000 not in books."),
  fq("How much ITC did Vardhan claim in October 2026's GSTR-3B?", "₹11,58,000", ["₹11,60,000", "₹12,10,000", "₹12,40,000"], "Matched less blocked plus RCM."),
  fq("How much of Vardhan's October ITC was blocked?", "₹20,000", ["₹14,000", "₹6,000", "₹50,000"], "Cab hire and staff gifts."),
  fq("How much RCM ITC did Vardhan claim on legal services?", "₹18,000", ["₹9,000", "₹20,000", "₹1,00,000"], "After paying the RCM tax."),
  fq("What happened to the ₹50,000 invoice reported after the cut-off?", "It's claimed when it appears in November's GSTR-2B", ["It was rejected", "It was lost", "It was claimed in October"], "Carried forward."),
  fq("How much import IGST was in Vardhan's matched October ITC?", "₹1,00,000", ["₹18,000", "₹50,000", "Nil"], "From ICEGATE data."),

  // Module 5
  fq("When did the 180 days end for Vardhan's 15 March 2026 invoice?", "11 September 2026", ["15 September 2026", "31 August 2026", "15 March 2027"], "Reverse in September's return."),
  fq("When could Vardhan re-claim the ₹45,000?", "December 2026, after paying on 5 December", ["Never", "March 2027 only", "Immediately in September"], "On payment."),
  fq("Does the Section 16(4) deadline apply to re-claiming 180-day reversals?", "No", ["Yes", "Only for imports", "Only for ISD"], "The re-claim isn't time-barred."),
  fq("What date matters for rule 37A checks?", "30 September of the following year", ["31 March", "14th of each month", "31 December"], "Reverse by 30 November."),
  fq("If Vardhan files GSTR-9 on 20 October 2027, what's its last date to claim FY 2026-27 ITC?", "20 October 2027", ["30 November 2027", "31 December 2027", "31 March 2028"], "The earlier date applies."),
  fq("When is ITC treated as utilised for interest purposes?", "When the electronic credit ledger balance falls below the wrongly availed amount", ["When it's availed", "At year end", "Never"], "Then 18% interest runs."),

  // Module 6
  fq("What was Vardhan's ITC in books for FY 2026-27?", "₹1,48,60,000", ["₹1,46,20,000", "₹1,47,80,000", "₹12,40,000"], "Compared with GSTR-3B and GSTR-2B."),
  fq("What's the difference between GSTR-2B and GSTR-3B ITC for the year?", "₹1,60,000", ["₹2,40,000", "₹80,000", "Nil"], "Rejected, blocked and RCM differences."),
  fq("Which GSTR-9 table shows ITC reversed and ineligible?", "Table 7", ["Table 6", "Table 8", "Table 13"], "Reversals."),
  fq("Which form is used to reply to an ASMT-10 on ITC?", "ASMT-11", ["DRC-01C Part A", "GSTR-6", "PMT-06"], "With reconciliations."),
  fq("Which document supports ISD credit received by a branch?", "The ISD invoice", ["A sales invoice", "A bill of entry", "An e-way bill"], "Issued by the ISD."),
  fq("Which check is done in September each year?", "The rule 37A review of suppliers' GSTR-3B", ["The ISD registration", "The 180-day rule only", "Nothing"], "Before the 30 November reversal deadline."),
]
