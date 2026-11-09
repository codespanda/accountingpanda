import { fq } from "@/lib/finalTest"

// Final test bank for GST Compliance in India — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("What was Saffron Threads' aggregate turnover in FY 2025-26?", "₹12 crore", ["₹1.2 crore", "₹5 crore", "₹2 crore"], "So monthly filing and e-invoicing apply."),
  fq("By when is Saffron Threads' GSTR-3B for August 2026 due?", "20 September 2026", ["11 September 2026", "25 September 2026", "31 August 2026"], "20th of the next month."),
  fq("By when is a QRMP filer's quarterly GSTR-1 due?", "13th of the month after the quarter", ["11th of every month", "20th of the month after the quarter", "31 December"], "IFF covers months 1 and 2."),
  fq("Under the fixed-sum method, what share of last quarter's cash tax does a QRMP filer pay each month?", "35%", ["10%", "50%", "100%"], "Through PMT-06."),
  fq("On what day is GSTR-2B generated each month?", "The 14th", ["The 1st", "The 20th", "The 25th"], "Meera does her final ITC check then."),
  fq("After how long can a pending GST return no longer be filed?", "Three years from its due date", ["One year", "Six months", "It can always be filed"], "Returns become time-barred."),

  // Module 2
  fq("Why did Meera file a core-field amendment?", "To add the new Sanganer warehouse", ["To change the phone number", "To change the bank account", "To update the email"], "Additional place of business."),
  fq("Within how many days of a change should a registration amendment be applied for?", "15 days", ["90 days", "1 year", "3 days"], "Keep details current."),
  fq("How many HSN digits must Saffron Threads show on invoices?", "6", ["4", "2", "8"], "Turnover above ₹5 crore."),
  fq("Within how many hours can an IRN be cancelled on the IRP?", "24 hours", ["7 days", "1 hour", "30 days"], "Later corrections need credit notes."),
  fq("How long is the e-way bill valid for Saffron Threads' 280 km Jaipur–Delhi shipment?", "2 days", ["1 day", "3 days", "7 days"], "1 day per 200 km or part."),
  fq("Which documents must an e-invoicing business report to the IRP?", "B2B invoices, credit and debit notes, and exports", ["Only cash sales", "Only purchase invoices", "Salary slips"], "B2C invoices are excluded."),

  // Module 3
  fq("What was Saffron Threads' ITC per GSTR-2B for August 2026?", "₹3,96,000", ["₹4,20,000", "₹3,81,000", "₹3,90,000"], "After the reconciliation."),
  fq("How much ITC did Saffron Threads claim in August 2026's GSTR-3B?", "₹3,81,000", ["₹4,20,000", "₹3,96,000", "₹3,90,000"], "Matched credit less blocked staff meals."),
  fq("Why was ₹6,000 in GSTR-2B not claimed in August?", "The goods were still in transit", ["The supplier was blocked", "It was blocked credit", "It was a duplicate"], "Claim on receipt."),
  fq("What do Saffron Threads' purchase contracts now say about GST?", "It's paid only once the invoice appears in GSTR-2B", ["It's never paid", "It's paid in advance", "It's paid by the customer"], "Protects ITC."),
  fq("Which IMS action keeps an invoice for a later period?", "Pending", ["Accept", "Reject", "Delete"], "Within time limits."),
  fq("By when must ITC be reversed under Rule 37A when a supplier hasn't filed GSTR-3B?", "30 November", ["30 September", "31 March", "31 December"], "Re-claim when the supplier files."),

  // Module 4
  fq("Above what value are inter-state invoices to unregistered persons reported as B2C (large)?", "₹1 lakh", ["₹2.5 lakh", "₹50,000", "₹10 lakh"], "Invoice-wise."),
  fq("What was Saffron Threads' total cash tax for August 2026?", "₹79,000", ["₹4,60,000", "₹3,81,000", "₹39,000"], "₹39,000 IGST + ₹20,000 CGST + ₹20,000 SGST."),
  fq("Which credit is used first in set-off?", "IGST", ["CGST", "SGST", "Cess"], "Against IGST, then CGST and SGST."),
  fq("How do you correct a GSTR-1 error before filing GSTR-3B?", "Through GSTR-1A", ["Through GSTR-9", "Through PMT-09", "It can't be corrected"], "The 3B liability is locked."),
  fq("How can interest and late fees be paid?", "In cash only", ["From ITC", "From the credit ledger", "They're waived"], "Not from credit."),
  fq("Which IFF deadline applies to Nila Prints' July B2B invoices?", "13 August", ["11 August", "20 August", "25 August"], "13th of the next month."),

  // Module 5
  fq("What's Saffron Threads' turnover per GSTR-9 for FY 2026-27?", "₹12,36,00,000", ["₹12,40,00,000", "₹12,00,00,000", "₹12,46,00,000"], "After reconciling items."),
  fq("What's the interest on Saffron Threads' ₹79,000 paid 8 days late?", "About ₹312", ["About ₹1,422", "About ₹79", "About ₹3,900"], "18% a year."),
  fq("What's the GSTR-9 late fee per day for turnover above ₹5 crore up to ₹20 crore?", "₹100", ["₹50", "₹200", "₹20"], "Capped at 0.04% of turnover."),
  fq("What's the cap on GSTR-9 late fees for turnover above ₹20 crore?", "0.5% of turnover", ["0.04% of turnover", "₹10,000", "No cap"], "₹200 a day."),
  fq("Until when must Saffron Threads keep its FY 2026-27 records?", "At least 31 December 2033", ["31 March 2028", "31 December 2028", "31 March 2030"], "72 months after the annual return due date."),
  fq("Which part of GSTR-9 shows the year's transactions declared in the next year?", "Part V", ["Part II", "Part III", "Part VI"], "Up to the deadline."),

  // Module 6
  fq("What difference triggered Saffron Threads' ASMT-10?", "ITC in GSTR-3B exceeded GSTR-2B by ₹1,40,000", ["Late GSTR-9", "A missing e-way bill", "A wrong address"], "For FY 2025-26."),
  fq("Which form is used to reply to an ASMT-10?", "ASMT-11", ["ASMT-12", "DRC-01", "APL-01"], "ASMT-12 closes it."),
  fq("Within how long must an order be passed after a Section 74A notice?", "12 months", ["42 months", "3 months", "5 years"], "Notice within 42 months of the annual return due date."),
  fq("What's the GSTAT pre-deposit on top of the first-appeal deposit?", "A further 10% of the remaining disputed tax", ["20%", "Nothing", "100%"], "Capped at ₹20 crore each."),
  fq("Which form intimates tax before a formal show cause notice?", "DRC-01A", ["DRC-03", "ADT-02", "REG-14"], "A pre-show cause intimation."),
  fq("Which evidence supports the 180-day rule in a compliance file?", "Supplier payment records", ["Sales brochures", "Staff attendance", "Customer reviews"], "Shows suppliers were paid."),
]
