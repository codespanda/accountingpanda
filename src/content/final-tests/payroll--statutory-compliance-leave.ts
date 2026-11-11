import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Leave — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("Where is Vasant Foods' factory?", "Vapi, Gujarat", ["Pune, Maharashtra", "Bengaluru, Karnataka", "Chennai, Tamil Nadu"], "The office is in Pune."),
  fq("Which law usually sets leave for a manager like Arvind?", "The company's policy and contract", ["OSH Code section 32", "The Maharashtra Shops Act", "The GST Act"], "Managers aren't “workers”."),
  fq("Which section of the OSH Code deals with annual leave with wages?", "Section 32", ["Section 6", "Section 57", "Section 94"], "Annual leave."),
  fq("Can a leave policy be more generous than the law?", "Yes", ["No", "Only for managers", "Only with government approval"], "The law is a minimum."),

  // Module 2
  fq("What eligibility test did the Factories Act use for annual leave?", "240 days", ["180 days", "120 days", "300 days"], "The OSH Code lowered it."),
  fq("What's the 2026 annual leave for a worker who worked 300 days in 2025?", "15 days", ["12 days", "20 days", "30 days"], "300 ÷ 20."),
  fq("Above what monthly earnings is a supervisor not a “worker”?", "₹18,000", ["₹15,000", "₹25,000", "₹50,000"], "Or a notified amount."),
  fq("Does maternity leave count towards the 180-day eligibility test?", "Yes", ["No", "Only half", "Only in factories"], "Counts as days worked."),
  fq("At what rate is a worker paid during annual leave?", "Their ordinary rate", ["Half pay", "Minimum wage only", "Nothing"], "Leave with wages."),

  // Module 3
  fq("A worker has 34 days at year-end, none refused. What's encashed?", "4 days", ["34 days", "0 days", "30 days"], "34 − 30."),
  fq("Can a worker ask to encash leave at the end of the calendar year?", "Yes", ["No", "Only on retirement", "Only after five years"], "Encashment on demand."),
  fq("What's Pooja's daily rate using ₹17,500 ÷ 26?", "₹673", ["₹583", "₹700", "₹875"], "Rounded."),
  fq("A worker with 10 refused days and 25 other days has how much carried forward?", "35 days", ["30 days", "25 days", "10 days"], "Refused days have no limit."),
  fq("What's the exit encashment for 25 days at ₹700?", "₹17,500", ["₹7,000", "₹21,000", "₹12,500"], "25 × ₹700."),

  // Module 4
  fq("What's the earned leave eligibility test for Pune office staff?", "240 days in the previous year", ["180 days", "90 days", "365 days"], "Maharashtra Act."),
  fq("When is casual leave credited in Maharashtra?", "Quarterly", ["Monthly", "Annually in January", "On request"], "Two days a quarter."),
  fq("When can Pune staff encash earned leave above 45 days?", "If leave applied 15 days in advance was refused", ["Every month", "Never", "Only on death"], "Maharashtra Act."),
  fq("Which is a fixed festival holiday under the Maharashtra Act?", "2 October", ["25 December", "14 January", "31 December"], "Gandhi Jayanti."),

  // Module 5
  fq("How many days of paternity leave does Vasant's policy give?", "5 days", ["15 days", "26 weeks", "None"], "Policy-based."),
  fq("What's 4 days' LOP on ₹27,000 with a 30-day divisor?", "₹3,600", ["₹4,154", "₹2,700", "₹1,800"], "₹900 × 4."),
  fq("What's Vasant's bereavement leave?", "3 days for immediate family", ["10 days", "None", "One month"], "Policy."),

  // Module 6
  fq("What is the retirement exemption limit on leave encashment for non-government employees?", "₹25 lakh", ["₹3 lakh", "₹10 lakh", "No limit"], "Check the current provision."),
  fq("What's Arvind's encashment for 24 days at ₹65,000 ÷ 26?", "₹60,000", ["₹52,000", "₹65,000", "₹48,000"], "₹2,500 × 24."),
  fq("Which schedule of Vasant's policy covers casual leave?", "The office schedule", ["The factory schedule", "The common section", "None"], "Maharashtra Act."),
]
