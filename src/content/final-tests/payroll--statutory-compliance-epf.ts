import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: EPF — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("How many employees does Kaveri Textiles have?", "60", ["20", "4", "100"], "In Coimbatore."),
  fq("Which law did the Code on Social Security replace for PF?", "The Employees' Provident Funds and Miscellaneous Provisions Act, 1952", ["The Income-tax Act, 1961", "The Factories Act, 1948", "The GST Act"], "From 21 November 2025."),
  fq("What does the EPFO issue that stays with a member for life?", "A UAN", ["A PAN", "A TAN", "An ESI number"], "Universal Account Number."),
  fq("Who funds the EDLI scheme?", "The employer, at 0.5% of PF wages", ["The employee", "The bank", "The state government"], "Life cover."),
  fq("Can an establishment with 12 employees join PF?", "Yes, voluntarily, with employer and majority employee agreement", ["No, never", "Only with 20+", "Only if it's a factory"], "Voluntary coverage."),
  fq("Which notification raised the PF wage ceiling to ₹25,000?", "S.O. 5109(E)", ["GSR 15(E)", "Notification 07/2023", "Form 13"], "From 17 September 2026."),

  // Module 2
  fq("Why was Arun excluded from PF before September 2026?", "He joined at ₹18,000 — above the ₹15,000 ceiling — with no prior membership", ["He was an apprentice", "He was a contractor", "He opted out"], "An excluded employee."),
  fq("What are Priya's PF wages?", "₹22,000", ["₹28,000", "₹14,000", "₹25,000"], "Basic + DA and special allowance."),
  fq("From when must Arun be enrolled?", "17 September 2026", ["1 April 2026", "21 November 2025", "1 October 2026"], "When the ceiling rose."),
  fq("Which is the first ECR affected by the ceiling change?", "September 2026's, due 15 October 2026", ["August 2026's", "October 2026's only", "March 2027's"], "A split month."),
  fq("What contributions would Karthik pay at full wages of ₹60,000?", "₹7,200 each from employee and employer", ["₹3,000", "₹1,800", "₹6,000"], "Optional above the ceiling."),
  fq("Who must principal employers ensure PF is paid for?", "Workers engaged through contractors", ["Only their own managers", "Customers", "Suppliers"], "Or pay and recover."),

  // Module 3
  fq("What's Selvi's employer EPF share in October 2026?", "₹514", ["₹1,166", "₹1,680", "₹600"], "₹1,680 − ₹1,166."),
  fq("What's Arun's EPS contribution?", "₹1,499", ["₹2,160", "₹1,250", "₹661"], "8.33% of ₹18,000."),
  fq("What's the total PF remittance for the four sample members in October?", "₹19,750", ["₹18,960", "₹9,480", "₹20,540"], "Including EDLI and admin."),
  fq("What's Karthik's employee contribution for September 2026 using day-based proration?", "₹2,360", ["₹3,000", "₹1,800", "₹2,400"], "On ₹19,667."),
  fq("What's Arun's employee contribution for September 2026?", "₹1,008", ["₹2,160", "Nil", "₹1,800"], "On ₹8,400 for 17–30 September."),
  fq("Which industries may contribute at 10%?", "Specified industries such as jute, beedi, brick, coir and guar gum", ["IT services", "Banking", "All manufacturing"], "Plus small and sick units."),

  // Module 4
  fq("What's needed to register an establishment?", "PAN, incorporation and address details, digital signature and bank details", ["Only a phone number", "A GST return", "A tax audit report"], "On the EPFO portal."),
  fq("Which KYC item is used for UAN generation and online claims?", "Aadhaar", ["PAN only", "Passport", "Ration card"], "Plus bank and PAN."),
  fq("When does Kaveri check KYC for newly enrolled members?", "In their first month", ["At retirement", "Once a year", "Never"], "Like Arun."),
  fq("When can members sometimes update their own exit date?", "Two months after leaving", ["Immediately", "Never", "After ten years"], "Otherwise the employer marks it."),
  fq("Why does a transfer matter for pension?", "It keeps service continuous", ["It increases interest", "It cancels the UAN", "It reduces tax"], "Under the same UAN."),
  fq("What should Ramesh record when Karthik leaves on 31 December 2026?", "The exit date and reason after December's contribution", ["Nothing", "A new UAN", "A pension claim"], "On the portal."),

  // Module 5
  fq("By what day does Kaveri pay PF?", "The 10th", ["The 15th", "The 7th", "The 25th"], "Ahead of the 15th deadline."),
  fq("What does the portal generate after ECR validation?", "A challan (TRRN)", ["A PAN", "A Form 130", "An IRN"], "For payment."),
  fq("What are Selvi's EPF wages in the October ECR?", "₹14,000", ["₹20,000", "₹25,000", "₹15,000"], "Gross is ₹20,000."),
  fq("What damages rate applies to a 7-month delay?", "25% a year", ["5% a year", "10% a year", "15% a year"], "More than 6 months."),
  fq("What's the total cost of paying ₹50,000 of PF 50 days late?", "₹1,164", ["₹822", "₹342", "₹6,000"], "Interest plus damages."),
  fq("What's treated very seriously in PF compliance?", "Deducting the employee's share and not depositing it", ["Paying early", "Filing ECR on the 10th", "Using net banking"], "Can lead to prosecution."),

  // Module 6
  fq("From what age is a reduced EPS pension available?", "50", ["58", "40", "60"], "Full pension from 58."),
  fq("What benefit do members with under 10 years' service get from EPS on leaving?", "A withdrawal benefit", ["A monthly pension", "Nothing", "EDLI"], "Not a pension."),
  fq("Which records show contract workers' PF compliance?", "Contractors' challans and ECRs", ["Sales invoices", "GST returns", "Board minutes"], "Collect them monthly."),
  fq("What's an EPFO inspector now often called?", "Inspector-cum-facilitator", ["Assessing officer", "Tax collector", "Registrar"], "Under the Code."),
  fq("What should follow if you disagree with an EPFO assessment order?", "An appeal within the time allowed", ["Ignore it", "Stop paying PF", "File a GST return"], "Orders become final otherwise."),
  fq("Which coverage check is on Kaveri's monthly checklist?", "Everyone with wages up to ₹25,000 enrolled and previous members continued", ["Only managers covered", "Nobody above ₹15,000", "Only permanent staff"], "After the ceiling change."),
]
