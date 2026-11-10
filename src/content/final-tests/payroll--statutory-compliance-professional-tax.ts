import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Professional Tax — separate from
// the module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("Which article of the Constitution allows states to levy professional tax?", "Article 276", ["Article 246A", "Article 265", "Article 14"], "With the ₹2,500 cap."),
  fq("How many Trellis staff work in Delhi, where no PT applies?", "3", ["40", "25", "15"], "Remote staff."),
  fq("Who pays professional tax for themselves under an enrolment?", "Professionals and businesses", ["Only employees", "Only banks", "Only the government"], "Doctors, lawyers, companies."),
  fq("Why would a new hire in Gurugram have no PT deducted?", "Haryana doesn't levy professional tax", ["Gurugram staff are exempt by age", "PT is paid annually there", "The head office pays it"], "Check each state's position."),
  fq("Why do some states charge ₹300 in February?", "So the annual total is exactly ₹2,500", ["It's a festival tax", "To cover GST", "To penalise late payers"], "₹200 × 11 + ₹300."),
  fq("Who levies professional tax in Tamil Nadu?", "Local bodies", ["The central government", "The RBI", "ESIC"], "On half-yearly income."),

  // Module 2
  fq("What does PTRC stand for in Maharashtra?", "Professional Tax Registration Certificate", ["Professional Tax Return Certificate", "Payroll Tax Revenue Code", "Personal Tax Relief Claim"], "To deduct from salaries."),
  fq("What does Trellis pay each year under its Maharashtra PTEC?", "₹2,500", ["₹200", "Nil", "₹25,000"], "The company's own tax."),
  fq("Which Trellis location needs no PT registration at all?", "Delhi", ["Pune", "Bengaluru", "Kolkata"], "Delhi doesn't levy PT."),
  fq("What should Farah do for Trellis's new Hyderabad office?", "Register to deduct and enrol in Telangana", ["Nothing", "Register in Delhi", "Use Maharashtra's registration"], "Telangana levies PT."),
  fq("When should a PT registration be amended?", "When address, signatory or other details change", ["Every month", "Never", "Only on closure"], "Keep it current."),

  // Module 3
  fq("What does Aditya (Pune, ₹45,000) pay in a year?", "₹2,500", ["₹2,400", "₹1,800", "Nil"], "₹200 × 11 + ₹300."),
  fq("What does Riya (Kolkata, ₹14,000) pay each month?", "₹110", ["₹130", "Nil", "₹200"], "₹10,001–₹15,000 band."),
  fq("What does a West Bengal employee earning ₹50,000 pay each month?", "₹200", ["₹150", "₹300", "₹130"], "Above ₹40,000."),
  fq("What does a Maharashtra man earning ₹9,000 pay each month?", "₹175", ["Nil", "₹200", "₹300"], "₹7,501–₹10,000 band."),
  fq("From when has Karnataka exempted salaries below ₹25,000 a month?", "1 April 2023", ["1 April 2020", "21 November 2025", "1 April 2027"], "Per the Karnataka PT portal FAQ."),
  fq("What should be kept on file when applying a PT exemption?", "Documentary evidence", ["Nothing", "The employee's GSTIN", "A bank statement only"], "e.g. disability certificate."),

  // Module 4
  fq("By when is West Bengal PT generally due for monthly payers?", "21st of the following month", ["7th", "15th", "Last day of the year"], "Confirm on the portal."),
  fq("Which state's PT goes to local bodies half-yearly?", "Tamil Nadu", ["Karnataka", "Maharashtra", "West Bengal"], "April–September and October–March."),
  fq("What does Farah keep to track every state's dates?", "A multi-state PT calendar", ["A GST register", "A PF passbook", "Nothing"], "One calendar."),
  fq("What should be saved after paying PT online?", "The challan receipt", ["The employee's payslip only", "Nothing", "The GST invoice"], "Needed for returns."),
  fq("Which detail is reported in a PT return?", "Number of employees in each slab", ["Customers' names", "GST rates", "PF wages"], "With tax paid."),

  // Module 5
  fq("What's the interest on ₹8,000 of Maharashtra PT paid 2 months late?", "₹200", ["₹100", "₹1,440", "₹2,000"], "1.25% a month."),
  fq("How did Farah fix February's missed ₹100?", "Deducted it in March and paid the shortfall with interest", ["Ignored it", "Charged ₹300 for every month after", "Paid it from her own salary"], "With notice to employees."),
  fq("What should happen to over-deducted PT before the state refunds?", "Refund the employee promptly", ["Wait for the state", "Keep it as income", "Pay it to PF"], "Then adjust or claim."),
  fq("Are penalties possible even if PT was paid on time?", "Yes, for late returns", ["No, never", "Only in Delhi", "Only for directors"], "File on time too."),

  // Module 6
  fq("What's Kiran's total PT after transferring from Bengaluru to Pune in November?", "₹2,500", ["₹2,700", "₹1,400", "₹3,000"], "₹1,400 + ₹1,100."),
  fq("What's Arnab's total PT after moving from Kolkata to Bengaluru in January?", "₹2,050", ["₹2,500", "₹1,800", "₹1,350"], "₹1,350 + ₹700."),
  fq("Where should PT appear for the employee's income tax deduction?", "In Form 130", ["In Form 168 only", "In GSTR-1", "Nowhere"], "Deductible from salary."),
  fq("What payroll flag handles Maharashtra's women's limit?", "Gender and exemption flags", ["Bank details", "Leave balance", "Department code"], "Per employee."),
]
