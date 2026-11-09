import { fq } from "@/lib/finalTest"

// Final test bank for Income Tax for Salaried Employees — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("What's Arjun's gross salary for tax year 2026-27?", "₹14,40,000", ["₹13,65,000", "₹5,00,000", "₹12,00,000"], "Basic, HRA, special allowance and bonus."),
  fq("Which tax year covers income earned from 1 April 2026 to 31 March 2027?", "Tax year 2026-27", ["Assessment year 2026-27", "Tax year 2027-28", "Previous year 2025-26"], "The new single-year concept."),
  fq("Which form replaces Form 26AS under the new Act?", "Form 168", ["Form 130", "Form 140", "ITR-1"], "The annual tax statement."),
  fq("Which Act governs Arjun's return for income earned in 2025-26?", "The Income-tax Act, 1961", ["The Income-tax Act, 2025", "Both equally", "Neither"], "Income up to 31 March 2026."),
  fq("How are residents taxed?", "On worldwide income", ["Only on Indian salary", "Only on foreign income", "Not at all"], "Non-residents mainly on Indian income."),
  fq("What changed most under the Income-tax Act, 2025?", "Structure, section numbers and form numbers", ["All tax rates doubled", "Salary became tax-free", "GST was merged in"], "Most rates and reliefs carried over."),

  // Module 2
  fq("Which salary component is the base for HRA, PF and gratuity?", "Basic salary", ["Bonus", "Special allowance", "Perquisites"], "Fully taxable."),
  fq("Is Arjun's work laptop a taxable perquisite?", "No", ["Yes, at full value", "Yes, at 10%", "Only in the new regime"], "Used for work."),
  fq("How are salary arrears taxed?", "In the year received, with relief if they push you into a higher slab", ["Never", "Only in the year they relate to", "At a flat 10%"], "Spread the calculation to claim relief."),
  fq("Is leave travel allowance exempt in the new regime?", "No — it's fully taxable", ["Yes, fully", "Yes, for two journeys", "Only for international travel"], "Exempt only in the old regime."),
  fq("How is a company car used privately valued as a perquisite?", "At fixed monthly amounts by engine size", ["At its full cost", "At nil", "At fuel cost only"], "Broadly."),
  fq("What are profits in lieu of salary?", "Payments such as termination compensation, taxed as salary", ["Business profits", "Capital gains", "Dividends"], "Part of salary income."),

  // Module 3
  fq("What's Arjun's taxable income under the new regime?", "₹13,65,000", ["₹9,75,000", "₹14,40,000", "₹12,00,000"], "After the ₹75,000 standard deduction."),
  fq("What's Arjun's total tax under the new regime?", "₹88,140", ["₹1,11,800", "₹84,750", "Nil"], "Including 4% cess."),
  fq("How much does the new regime save Arjun?", "₹23,660", ["₹88,140", "₹4,65,000", "Nothing"], "₹1,11,800 − ₹88,140."),
  fq("What's Vikram's tax under the new regime on ₹20 lakh salary?", "₹1,92,400", ["₹2,73,000", "₹1,85,000", "Nil"], "Still lower than the old regime."),
  fq("What's the old regime nil-tax slab for individuals under 60?", "Up to ₹2,50,000", ["Up to ₹4,00,000", "Up to ₹5,00,000", "Up to ₹3,00,000"], "Then 5%, 20% and 30%."),
  fq("If a salaried employee says nothing to the employer, which regime is used for TDS?", "The new regime", ["The old regime", "Whichever is cheaper", "No TDS is deducted"], "The default."),

  // Module 4
  fq("What's Arjun's HRA exemption under the old regime?", "₹2,40,000", ["₹2,50,000", "₹2,00,000", "₹3,00,000"], "The least of three amounts."),
  fq("What would Arjun's HRA exemption have been at the old 40% rate for Bengaluru?", "₹2,00,000", ["₹2,40,000", "₹2,50,000", "₹1,50,000"], "40% of ₹5,00,000."),
  fq("Which cities joined the 50% HRA list from tax year 2026-27?", "Bengaluru, Hyderabad, Pune and Ahmedabad", ["Jaipur and Lucknow", "Gurugram and Noida", "None"], "Alongside the original four metros."),
  fq("When must an employee give the landlord's PAN for HRA?", "When annual rent exceeds ₹1 lakh", ["Always", "Never", "Only in metros"], "Keep rent receipts too."),
  fq("What's the tax payable on ₹12,10,000 under the new regime, before cess?", "₹10,000", ["₹61,500", "Nil", "₹1,21,000"], "Marginal relief."),
  fq("What surcharge applies to taxable income above ₹1 crore?", "15%", ["10%", "25%", "37%"], "10% above ₹50 lakh."),

  // Module 5
  fq("About how much tax is deducted from Arjun's salary each month?", "₹7,345", ["₹12,567", "₹9,100", "₹8,814"], "₹88,140 ÷ 12."),
  fq("What was the investment declaration form called before the new Act?", "Form 12BB", ["Form 16", "Form 26AS", "Form 24Q"], "Submitted to the employer."),
  fq("By when does Arjun's employer issue Form 130 for 2026-27?", "15 June 2027", ["31 March 2027", "31 July 2027", "30 April 2027"], "Once a year."),
  fq("What TDS did Arjun's bank deduct on his FD interest?", "₹1,200", ["₹12,000", "₹88,140", "Nil"], "Shown in Form 168."),
  fq("Which statement gives a wider view of reported income and transactions?", "Annual Information Statement (AIS)", ["Form 130", "Payslip", "GSTR-1"], "Check it before filing."),
  fq("What can you do if old regime proofs miss the employer's deadline?", "Claim the deductions in the return", ["Nothing", "Ask for a refund from the employer", "Switch employers"], "They aren't lost."),

  // Module 6
  fq("Which return form does Arjun use?", "ITR-1", ["ITR-2", "ITR-3", "Form 130"], "Salary and interest only."),
  fq("By when is Arjun's return for 2026-27 due?", "31 July 2027", ["31 March 2027", "31 December 2027", "15 June 2027"], "For salaried individuals without audit."),
  fq("After including FD interest, how much extra tax does Arjun owe before filing?", "₹672", ["Nil", "₹1,200", "₹3,462"], "Tax ₹90,012 vs. TDS ₹89,340."),
  fq("What's the late fee if total income is up to ₹5 lakh?", "₹1,000", ["₹5,000", "₹10,000", "Nil"], "Otherwise ₹5,000."),
  fq("What happens to a return that isn't e-verified?", "It's treated as not filed", ["Nothing", "It's auto-approved", "It's converted to ITR-2"], "Verify within the time allowed."),
  fq("Which form suits someone with capital gains beyond ITR-1's limit and no business income?", "ITR-2", ["ITR-1", "ITR-3", "ITR-4"], "No business income."),
]
