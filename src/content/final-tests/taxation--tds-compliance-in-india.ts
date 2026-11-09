import { fq } from "@/lib/finalTest"

// Final test bank for TDS Compliance in India — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("How many employees does Brightpath have?", "40", ["4", "400", "12"], "Based in Pune."),
  fq("In the CA firm example, how much does Brightpath pay the firm after TDS?", "₹1,08,000", ["₹1,20,000", "₹12,000", "₹1,32,000"], "₹1,20,000 less 10%."),
  fq("Which statement do deductees use to claim TDS credit?", "Form 168", ["Form 140", "Form 130", "GSTR-2B"], "The annual tax statement."),
  fq("Which forms did Brightpath use for Q4 2025-26?", "Form 24Q and 26Q", ["Form 138 and 140", "Form 130 and 131", "Form 168"], "Periods before April 2026 use the old forms."),
  fq("What does the Income-tax Act, 2025 replace “previous year” and “assessment year” with?", "Tax year", ["Financial period", "Fiscal quarter", "Calendar year"], "From 2026-27."),
  fq("Why does TDS create an audit trail?", "Payments are reported with the recipient's PAN", ["Payments are made in cash", "It replaces invoices", "It's filed with GST"], "The department can match returns."),

  // Module 2
  fq("What's Ananya's taxable salary under the new regime?", "₹17,25,000", ["₹18,00,000", "₹17,50,000", "₹16,00,000"], "₹18,00,000 − ₹75,000."),
  fq("What's Ananya's annual tax including cess?", "₹1,50,800", ["₹1,45,000", "₹2,40,240", "₹1,20,000"], "₹1,45,000 + 4% cess."),
  fq("What's Ananya's monthly TDS?", "₹12,567", ["₹15,000", "₹12,083", "₹10,000"], "₹1,50,800 ÷ 12."),
  fq("How much TDS does Brightpath deduct from Rohan, who earns ₹12,50,000?", "Nil — the rebate covers his tax", ["₹57,500", "₹4,792 a month", "₹1,25,000"], "Taxable ₹11,75,000."),
  fq("What's the new regime rate on income between ₹16 lakh and ₹20 lakh?", "20%", ["15%", "25%", "30%"], "Tax year 2026-27 slabs."),
  fq("By when does Brightpath issue Form 130 for 2026-27?", "15 June 2027", ["31 March 2027", "31 May 2027", "31 July 2027"], "Annual salary certificate."),

  // Module 3
  fq("What TDS does Brightpath deduct from its monthly ₹40,000 housekeeping bill?", "₹800", ["₹400", "₹4,000", "Nil"], "2% for a company contractor."),
  fq("What TDS applies to Brightpath's ₹2,00,000 cloud server management fee?", "₹4,000", ["₹20,000", "₹2,000", "Nil"], "2% for technical services."),
  fq("Why is no TDS deducted from the designer paid ₹45,000 in the year?", "It's below the ₹50,000 threshold", ["Designers are exempt", "It's a technical fee", "TDS is optional"], "Track cumulative totals."),
  fq("What TDS does Brightpath deduct on ₹80 lakh of laptop purchases from one supplier?", "₹3,000", ["₹8,000", "₹80,000", "₹50,000"], "0.1% on the ₹30 lakh above ₹50 lakh."),
  fq("What TDS applies to the designer without a PAN paid ₹60,000?", "₹12,000", ["₹6,000", "₹1,200", "Nil"], "20% instead of 10%."),
  fq("What does a buyer need before applying a treaty rate on a non-resident payment?", "A tax residency certificate and other required documents", ["Nothing", "The payee's GSTIN", "A bank guarantee"], "Otherwise the Act's rate applies."),

  // Module 4
  fq("By when must Brightpath deposit TDS deducted in August 2026?", "7 September 2026", ["31 August 2026", "15 September 2026", "30 September 2026"], "7th of the next month."),
  fq("By when must Brightpath deposit TDS deducted in March 2027?", "30 April 2027", ["7 April 2027", "31 March 2027", "31 May 2027"], "The March exception."),
  fq("What's the interest on ₹50,000 TDS deducted on 5 August and deposited on 10 October?", "₹2,250", ["₹1,500", "₹750", "₹1,000"], "1.5% × 3 months."),
  fq("How do government deductors paying from government accounts deposit TDS?", "By book entry", ["By challan at month end", "In cash", "They don't deposit"], "Generally the same day."),
  fq("Which account is credited for the TDS on the CA firm's fee?", "TDS payable — professional fees", ["Professional fees", "Bank", "Revenue"], "Until deposited."),
  fq("Is interest on late TDS a deductible business expense?", "No", ["Yes", "Only for companies", "Only in March"], "It must be paid before filing."),

  // Module 5
  fq("Which form is the non-resident TDS statement from 2026-27?", "Form 144", ["Form 140", "Form 138", "Form 27Q"], "Formerly 27Q."),
  fq("When is the Q3 statement for 2026-27 due?", "31 January 2027", ["31 December 2026", "15 January 2027", "31 March 2027"], "October–December quarter."),
  fq("What's Brightpath's fee for filing its Q2 Form 140 20 days late?", "₹4,000", ["₹2,000", "₹200", "₹10,000"], "₹200 × 20."),
  fq("Where are Form 131 certificates downloaded from?", "TRACES", ["The GST portal", "The MCA portal", "Excel"], "So they match the filed statement."),
  fq("What penalty may apply for failing to file or filing an incorrect statement?", "₹10,000 to ₹1,00,000", ["₹200 only", "₹50 a day", "Nil"], "Separate from the late fee."),
  fq("Which quarterly salary statement includes the full-year computation?", "Q4", ["Q1", "Q2", "Q3"], "January–March."),

  // Module 6
  fq("What caused Brightpath's short payment default?", "A challan typed as ₹12,000 instead of ₹15,000", ["A missing PAN", "A late statement", "A wrong rate"], "Pay the difference."),
  fq("What should Kavya do for a short deduction of ₹16,000?", "Deposit it with interest and file a correction", ["Ignore it", "Recover it from the next employee", "File GSTR-9"], "Then check TRACES."),
  fq("Which TRACES feature checks deductee PANs before filing?", "PAN verification", ["Consolidated file", "Justification report", "Form 168"], "Avoid PAN errors."),
  fq("What can happen if TDS defaults remain unpaid?", "The deductor can be treated as an assessee in default", ["Nothing", "The deductee pays", "The bank pays"], "With interest and penalties."),
  fq("What's the first step in a correction statement?", "Download the consolidated file from TRACES", ["File Form 130", "Pay GST", "Email the vendor"], "Start from the latest filed data."),
  fq("What's checked at each payment in Brightpath's checklist?", "TDS applicability, rate, threshold and PAN", ["Only the amount", "The vendor's GST rate", "Nothing"], "Prevention first."),
]
