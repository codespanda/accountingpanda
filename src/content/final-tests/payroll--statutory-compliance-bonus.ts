import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Bonus — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("How many employees does Sunrise Fabrics have?", "150", ["20", "5", "1,500"], "In Surat."),
  fq("Which Act did the Code on Wages replace for bonus?", "The Payment of Bonus Act, 1965", ["The Factories Act, 1948", "The Code on Social Security", "The Minimum Wages Act only"], "From 21 November 2025."),
  fq("From when is the ₹21,000 eligibility limit under S.O. 4711(E) effective?", "21 November 2025", ["25 August 2026", "1 April 2026", "1 April 2025"], "Notified in August 2026, effective from the Code's start."),
  fq("What does statutory bonus share with employees?", "A part of the establishment's profits", ["The owner's salary", "GST refunds", "PF interest"], "Between 8.33% and 20% of wages."),
  fq("Once an establishment employs 20 persons on any day of the year, it is:", "Covered for that year", ["Covered only if it stays above 20", "Never covered", "Covered from next year only"], "Coverage depends on any day in the year."),

  // Module 2
  fq("Which Sunrise employee isn't eligible because of the wage limit?", "Kunal", ["Ravi", "Fatima", "Meena"], "He earns ₹24,000."),
  fq("Why does Suresh get no bonus for 2026-27?", "He was dismissed for theft", ["He earned too much", "He worked under 30 days", "He resigned"], "A disqualifying ground."),
  fq("Why isn't Sunrise's temporary helper eligible?", "He worked only 25 days", ["He's a contractor", "He's above the wage limit", "He was dismissed"], "At least 30 days are needed."),
  fq("Which dismissal ground was added under the Code compared with older lists?", "Conviction for sexual harassment", ["Late attendance", "Resignation", "Retirement"], "Alongside fraud, violence, theft and sabotage."),
  fq("When did Meena join Sunrise?", "1 January 2027", ["1 April 2026", "1 October 2026", "1 March 2027"], "So her bonus covers three months."),

  // Module 3
  fq("What monthly wage does Sunrise use to calculate Ravi's bonus?", "₹12,500", ["₹18,000", "₹7,000", "₹21,000"], "The assumed applicable minimum wage, higher than ₹7,000."),
  fq("Why is Fatima's bonus calculated on ₹11,000?", "Her actual wages are below the ₹12,500 base", ["She's part-time", "She's a supervisor", "The rules say so for women"], "The ceiling only caps higher wages."),
  fq("What's Ravi's maximum bonus?", "₹30,000", ["₹12,495", "₹43,200", "₹25,000"], "20% × ₹1,50,000."),
  fq("What's Meena's minimum bonus?", "₹3,124", ["₹12,495", "₹1,250", "₹3,750"], "8.33% × ₹37,500."),
  fq("What's Fatima's minimum bonus?", "₹10,996", ["₹26,400", "₹9,163", "₹11,000"], "8.33% × ₹1,32,000, rounded."),

  // Module 4
  fq("What is Sunrise's available surplus for 2026-27?", "₹50,00,000", ["₹1,20,00,000", "₹30,00,000", "₹70,00,000"], "Gross profit less prior charges."),
  fq("What is Sunrise's allocable surplus?", "₹30,00,000", ["₹50,00,000", "₹14,99,400", "₹36,00,000"], "60% of ₹50,00,000."),
  fq("What bonus rate does Sunrise pay for 2026-27?", "16.67%", ["8.33%", "20%", "12%"], "₹30,00,000 ÷ ₹1,80,00,000."),
  fq("What is Ravi's bonus at Sunrise's rate?", "₹25,000", ["₹30,000", "₹12,495", "₹22,000"], "16.67% × ₹1,50,000."),
  fq("In the illustrative 2027-28 example, how much is carried forward as set-on?", "₹4,00,000", ["₹40,00,000", "₹36,00,000", "Nil"], "Surplus above the 20% maximum."),
  fq("In the poor-year example, what shortfall is carried forward as set-off?", "₹4,99,400", ["₹10,00,000", "₹14,99,400", "Nil"], "Minimum bonus less allocable surplus."),

  // Module 5
  fq("By when must Sunrise pay its 2026-27 bonus?", "30 November 2027", ["31 March 2027", "31 October 2027", "31 December 2027"], "Within eight months."),
  fq("When does Sunrise actually plan to pay?", "October 2027, before Diwali", ["March 2028", "April 2027", "Only on demand"], "Within the deadline."),
  fq("After a ₹5,000 festival advance, how much of Ravi's bonus is still payable?", "₹20,000", ["₹25,000", "₹15,000", "₹30,000"], "₹25,000 − ₹5,000."),
  fq("In which tax year is Ravi's October 2027 bonus taxed?", "Tax year 2027-28", ["Tax year 2026-27", "It's tax-free", "Tax year 2028-29"], "The year received."),

  // Module 6
  fq("What monthly bonus provision does Sunrise book?", "₹2,50,000", ["₹30,00,000", "₹1,25,000", "₹25,000"], "₹30,00,000 ÷ 12."),
  fq("What is credited when Sunrise pays bonus with TDS deducted?", "Bank and TDS payable", ["Bonus expense", "Revenue", "Share capital"], "The provision is debited."),
  fq("Which records support the allocable surplus?", "Audited accounts and the surplus computation", ["Only payslips", "GST returns", "Customer invoices"], "Keep them for inspection."),
  fq("Where should prescribed bonus registers' formats be checked?", "The Code on Wages rules", ["The GST Act", "The Companies Act only", "Bank guidelines"], "Many can be electronic."),
  fq("What adjustment is made at year end?", "True up the provision to the final bonus calculation", ["Reverse all bonus", "Double the provision", "Nothing"], "Match the final allocable-surplus result."),
]
