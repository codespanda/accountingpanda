import { fq } from "@/lib/finalTest"

// Final test bank for Payroll Processing in India — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("How many employees does Neelgiri Foods have?", "25", ["3", "40", "10"], "Based in Pune."),
  fq("Who approves Neelgiri's payroll before payment?", "Suresh, the finance manager", ["Divya", "Asha", "The bank"], "Divya processes it."),
  fq("How many older central labour laws did the four Labour Codes replace?", "29", ["4", "12", "44"], "From 21 November 2025."),
  fq("Which Code governs working hours, leave and welfare?", "The Occupational Safety, Health and Working Conditions Code, 2020", ["The Code on Wages, 2019", "The Industrial Relations Code, 2020", "The Income-tax Act, 2025"], "OSH Code."),
  fq("When is Neelgiri's monthly attendance cut-off?", "25th of the month", ["1st of the month", "7th of next month", "15th of next month"], "Then processing and approval."),
  fq("Which law governs professional tax?", "State laws", ["The Code on Wages", "The Income-tax Act", "The GST Act"], "Rates differ by state."),
  fq("Why record an employee's gender in master data?", "Some state rules, such as Maharashtra PT, differ by gender", ["For marketing", "It sets the PF rate", "It's needed for GST"], "Women up to ₹25,000 pay no PT in Maharashtra."),
  fq("What's a key risk when outsourcing payroll?", "The employer remains legally responsible", ["Payroll becomes tax-free", "PF no longer applies", "Payslips aren't needed"], "Review outputs monthly."),

  // Module 2
  fq("What's Rahul's monthly CTC before gratuity and bonus provisions?", "₹33,120", ["₹30,000", "₹32,880", "₹26,920"], "Gross plus employer PF and charges."),
  fq("What share of gross does Neelgiri set as basic pay?", "50%", ["30%", "40%", "70%"], "So the 50% rule is always met."),
  fq("Total remuneration ₹50,000 with exclusions of ₹30,000. What are “wages”?", "₹25,000", ["₹20,000", "₹30,000", "₹50,000"], "₹5,000 of excess exclusions added back."),
  fq("Is special allowance part of wages under the Codes?", "Yes", ["No", "Only for managers", "Only in Maharashtra"], "Only listed exclusions are left out."),
  fq("Why do flexible benefit plans save less tax than before?", "Most allowance exemptions don't apply in the new tax regime", ["They're banned", "PF rates rose", "GST applies to them"], "The new regime is the default."),
  fq("Which costs should a CTC letter make clear?", "Which employer costs, such as PF and gratuity, are included", ["The employee's personal expenses", "The company's rent", "Competitors' salaries"], "Transparency."),
  fq("Which statement about dearness allowance is true under the Codes?", "It's part of wages", ["It's always excluded", "It's tax-free", "It's paid only in June"], "With basic and retaining allowance."),
  fq("What must every structure pay at least?", "The applicable minimum wage", ["₹25,000", "The CTC of last year", "The PF ceiling"], "For the skill and location."),

  // Module 3
  fq("Which LOP method does Neelgiri use?", "Calendar days in the month", ["Always 30 days", "Working days only", "Hours worked"], "Documented and consistent."),
  fq("What's Rahul's deduction for 2 LOP days in a 31-day month?", "₹1,935", ["₹2,000", "₹2,308", "₹1,000"], "₹30,000 × 2 ÷ 31."),
  fq("What's Asha's overtime pay for 6 hours?", "₹865", ["₹433", "₹1,000", "₹720"], "Twice her ordinary hourly rate."),
  fq("What's the pay for a joiner on 20 October at ₹24,000 gross?", "₹9,290", ["₹12,000", "₹8,000", "₹24,000"], "12 days of 31."),
  fq("When is Asha's October overtime paid?", "With November's payroll", ["In October", "Never", "At year end"], "To keep the example simple."),
  fq("Which check compares headcount?", "Last month + joiners − leavers = this month", ["Gross ÷ net", "PF ÷ ESI", "Tax ÷ salary"], "A pre-payroll check."),
  fq("Above what percentage change does Neelgiri's variance report flag gross pay?", "10%", ["1%", "50%", "25%"], "Investigate each."),
  fq("When is ESI coverage decided?", "At the start of each contribution period", ["Every day", "At year end", "On joining only, forever"], "Mid-period pay changes don't remove coverage."),

  // Module 4
  fq("What are Meera's PF wages in October 2026?", "₹25,000", ["₹90,000", "₹15,000", "₹1,20,000"], "Restricted to the ceiling."),
  fq("How much goes to EPS for Rahul?", "₹1,999", ["₹2,083", "₹1,250", "₹881"], "8.33% of ₹24,000."),
  fq("How much goes to Asha's EPF account from the employer?", "₹550", ["₹1,250", "₹1,800", "₹917"], "₹1,800 − ₹1,250."),
  fq("What's Asha's employee ESI?", "₹113", ["₹143", "₹488", "₹190"], "0.75% of her ₹15,000 ESI wages, rounded up."),
  fq("What's Meera's October PT?", "₹200", ["Nil", "₹300", "₹175"], "Women above ₹25,000 pay PT in Maharashtra."),
  fq("What's Meera's monthly TDS?", "₹7,345", ["₹88,140", "₹12,000", "Nil"], "₹88,140 ÷ 12."),
  fq("What's Rahul's October net pay?", "₹26,920", ["₹30,000", "₹27,120", "₹24,000"], "After PF and PT."),
  fq("When is Maharashtra LWF deducted?", "June and December", ["Every month", "March only", "Never"], "None in October."),

  // Module 5
  fq("What net pay did Neelgiri transfer for the three sample employees?", "₹1,53,462", ["₹1,69,000", "₹1,77,808", "₹16,000"], "On 31 October 2026."),
  fq("What's the total PF payable for the three sample employees?", "₹16,000", ["₹7,680", "₹15,360", "₹8,320"], "Both shares plus charges."),
  fq("What's the total ESI payable?", "₹601", ["₹113", "₹488", "₹761"], "Asha only, on ₹15,000 ESI wages."),
  fq("What's the total of the October payroll journal?", "₹1,77,808", ["₹1,69,000", "₹1,53,462", "₹1,86,000"], "Debits equal credits."),
  fq("What are EDLI and admin charges based on?", "1% of PF wages in total (0.5% each)", ["12% of gross", "3.25% of wages", "Nothing"], "₹640 on ₹64,000."),
  fq("By when must October's TDS be deposited?", "7 November", ["15 November", "31 October", "30 April"], "7th of next month."),
  fq("Which return accompanies the monthly EPF payment?", "ECR", ["Form 138", "GSTR-1", "Form 130"], "Electronic Challan cum Return."),
  fq("What does a non-zero payable ledger after payment day indicate?", "An unpaid or misposted amount", ["A profit", "A tax refund", "Nothing"], "Investigate."),

  // Module 6
  fq("What's Rahul's salary for 14 days in November?", "₹14,000", ["₹13,548", "₹15,000", "₹30,000"], "₹30,000 × 14 ÷ 30."),
  fq("What's Rahul's leave encashment for 8 days?", "₹7,385", ["₹8,000", "₹9,231", "₹6,000"], "₹24,000 ÷ 26 × 8."),
  fq("What's Rahul's net settlement before recoveries?", "₹19,841", ["₹21,385", "₹14,000", "₹20,041"], "After PF and PT."),
  fq("Why is no gratuity due to Rahul?", "He has only 3 years' service", ["He resigned", "He's a sales executive", "Gratuity was abolished"], "5 years for permanent employees."),
  fq("Which bonus may Rahul receive at exit?", "A proportionate statutory bonus if eligible", ["A full year's bonus always", "None ever", "Double bonus"], "For 2026-27."),
  fq("From where should Form 130 Part A be downloaded?", "TRACES", ["The EPFO portal", "The GST portal", "The bank"], "To match Form 138."),
  fq("Which reconciliation compares member-wise contributions with payments?", "PF contributions vs. ECRs vs. payments", ["Sales vs. GST", "Bank vs. cash", "Stock vs. sales"], "Month by month."),
  fq("Which ceilings should the monthly checklist confirm?", "PF ₹25,000 and ESI ₹21,000", ["PF ₹15,000 and ESI ₹15,000", "PF ₹50,000 and ESI ₹30,000", "None"], "Plus PT slabs."),
]
