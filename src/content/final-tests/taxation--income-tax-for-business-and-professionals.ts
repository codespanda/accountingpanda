import { fq } from "@/lib/finalTest"

// Final test bank for Income Tax for Business & Professionals — separate from
// the module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("What's Sharma Electricals' turnover for tax year 2026-27?", "₹2,60,00,000", ["₹68,00,000", "₹10,00,000", "₹15,80,000"], "A Lucknow wholesale trader."),
  fq("Which accounting method does Dr Kavita use?", "Cash", ["Mercantile", "Presumptive", "Hybrid"], "Fees are income when received."),
  fq("Why does Dr Kavita's dentistry count as a profession rather than a business?", "It needs special skill and qualification", ["It has a high turnover", "It's run from a clinic", "It uses the cash method"], "Medical is a specified profession."),
  fq("What standards apply to mercantile-system taxpayers when computing income?", "Income computation and disclosure standards", ["GST rules", "Payroll rules", "Company law only"], "ICDS."),
  fq("What do business taxpayers file to opt out of the new regime?", "The prescribed form before the due date", ["Nothing", "A GST return", "A letter to the bank"], "Limited switching."),
  fq("What share of Ravi's turnover is cash?", "3.8%", ["10%", "5%", "1%"], "₹10 lakh of ₹2.6 crore."),

  // Module 2
  fq("What's Sharma Electricals' net profit per books?", "₹14,20,000", ["₹15,74,000", "₹15,80,000", "₹1,60,000"], "Before tax adjustments."),
  fq("What's Sharma Electricals' taxable business income under regular computation?", "₹15,74,000", ["₹14,20,000", "₹15,80,000", "₹16,00,000"], "After adjustments."),
  fq("What's Sharma Electricals' tax depreciation?", "₹1,60,000", ["₹1,40,000", "₹90,000", "₹40,000"], "Across four blocks."),
  fq("How much depreciation is allowed on the ₹1,00,000 of computers bought in October?", "₹20,000", ["₹40,000", "₹15,000", "Nil"], "Half of 40%."),
  fq("Why was the ₹18,000 supplier payment added back?", "It was paid in cash above ₹10,000 in a day", ["It was capital", "It was personal", "TDS wasn't deducted"], "The whole payment is disallowed."),
  fq("Against which income can business losses not be set off?", "Salary", ["Interest", "Rent", "Capital gains"], "Then carried forward."),

  // Module 3
  fq("What's Sharma Electricals' presumptive deemed profit?", "₹15,80,000", ["₹15,74,000", "₹15,00,000", "₹20,80,000"], "6% on digital, 8% on cash."),
  fq("What's Dr Kavita's presumptive income?", "₹34,00,000", ["₹30,00,000", "₹68,00,000", "₹27,20,000"], "50% of ₹68 lakh."),
  fq("Why can Dr Kavita use the presumptive scheme with ₹68 lakh receipts?", "Cash is within 5%, so the limit is ₹75 lakh", ["Doctors have no limit", "The limit is ₹1 crore", "She's a company"], "Otherwise ₹50 lakh."),
  fq("How much more profit does Ravi declare under the presumptive scheme than regular computation?", "₹6,000", ["₹60,000", "₹1,60,000", "Nil"], "₹15,80,000 vs. ₹15,74,000."),
  fq("How many goods vehicles can an owner have to use the goods carriage scheme?", "Up to ten", ["Up to five", "Up to twenty", "Any number"], "At any time in the year."),
  fq("If a business opts out of the presumptive scheme within five years, what happens?", "It can't use the scheme for the next five years", ["Nothing", "It pays a penalty only", "It must close"], "The lock-in."),

  // Module 4
  fq("Why doesn't Ravi need an audit even with regular books?", "Turnover is under ₹10 crore and both cash tests are met", ["Traders are exempt", "His profit is low", "He's a professional"], "Cash receipts 3.8%, cash payments 2%."),
  fq("When would Dr Kavita need an audit?", "If she declares actual profit below 50% with receipts above ₹50 lakh", ["Never", "Always", "Only if she has staff"], "Books and audit needed."),
  fq("What books must doctors with higher receipts keep?", "Prescribed books including a daily case register and inventory of medicines", ["Only a bank statement", "No books", "Only GST returns"], "Specified professionals."),
  fq("A trader has ₹6 crore turnover with cash payments at 8%. Audit?", "Yes", ["No", "Only if profit is low", "Only for companies"], "The ₹1 crore limit applies."),
  fq("Who prepares the tax audit report?", "A chartered accountant", ["The taxpayer", "The GST officer", "The bank"], "Uploaded on the e-filing portal."),
  fq("Which forms were used for tax audit reports before tax year 2026-27?", "Forms 3CA/3CB and 3CD", ["Form 26", "Form 130", "Form 16"], "Form 26 from 2026-27."),

  // Module 5
  fq("What's Ravi's advance tax for tax year 2026-27 under the presumptive scheme?", "₹1,21,680", ["₹1,17,000", "₹54,756", "₹1,50,800"], "Including cess."),
  fq("By when must Ravi pay it as a presumptive taxpayer?", "15 March 2027", ["15 June 2026", "31 March 2027", "31 August 2027"], "One instalment."),
  fq("What would Ravi's cumulative advance tax be by 15 September under regular books?", "₹54,756", ["₹18,252", "₹91,260", "₹1,21,680"], "45%."),
  fq("What's Dr Kavita's tax on ₹34 lakh in the new regime including cess?", "₹6,24,000", ["₹6,00,000", "₹10,20,000", "₹3,40,000"], "No surcharge below ₹50 lakh."),
  fq("Which interest applies if less than 90% of tax is paid by 31 March?", "1% a month on the shortfall from 1 April", ["18% a year", "1.5% a month", "None"], "Until payment."),
  fq("When is advance tax due on a capital gain that arises after an instalment date?", "With the next instalment", ["Immediately", "With the return only", "Never"], "No interest for earlier instalments."),

  // Module 6
  fq("Which return form do Ravi and Dr Kavita use under the presumptive scheme?", "ITR-4", ["ITR-3", "ITR-1", "ITR-5"], "Income under ₹50 lakh."),
  fq("By when do Ravi and Dr Kavita file their 2026-27 returns?", "31 August 2027", ["31 July 2027", "31 October 2027", "15 March 2027"], "Non-audit business cases."),
  fq("What's the return due date for transfer pricing cases?", "30 November", ["31 October", "31 August", "31 December"], "Typical date."),
  fq("What's Ravi's turnover per GST returns?", "₹2,61,50,000", ["₹2,60,00,000", "₹2,58,50,000", "₹2,50,00,000"], "Reconciled via credit notes."),
  fq("Which return form would Ravi use if his turnover rose to ₹12 crore under regular books?", "ITR-3", ["ITR-4", "ITR-1", "ITR-5"], "Audit applies too."),
  fq("What happens to TDS deducted by a customer but missing from Form 168?", "It can't be claimed until the customer corrects its statement", ["It's automatically credited", "It's refunded by the bank", "It becomes GST credit"], "Ask the deductor."),
]
