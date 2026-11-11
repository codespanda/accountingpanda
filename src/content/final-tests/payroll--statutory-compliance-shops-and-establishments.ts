import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Shops and Establishments —
// separate from the module knowledge checks. The correct answer is listed
// first; the test shuffles the options.

export default [
  // Module 1
  fq("What is the full name of Maharashtra's current shops law?", "The Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017", ["The Bombay Shops and Establishments Act, 1948", "The Model Shops and Establishments Act, 2016", "The Maharashtra Factories Act, 2017"], "Rules were made in 2018."),
  fq("Which ministry issued the Model Shops and Establishments Bill, 2016?", "The Ministry of Labour and Employment", ["The Ministry of Finance", "The Ministry of Commerce", "The Reserve Bank of India"], "As a template for states."),
  fq("Are factories “establishments” under the Maharashtra Shops Act?", "No — factories are excluded from the definition", ["Yes, always", "Only if they have a shop", "Only in Mumbai"], "Factories fall under factory and safety law."),
  fq("A municipal corporation office in Pune is…", "Excluded from the Act as a local authority establishment", ["Covered like any shop", "Covered only for leave", "Required to register in Form A"], "Section 3."),
  fq("How many workers does Kesar Home Store's FC Road showroom employ?", "14", ["6", "10", "50"], "The kiosk has 6."),

  // Module 2
  fq("What fee is prescribed for registration under the Maharashtra Act?", "None — only electronic transaction or service charges", ["₹5,000 a year", "₹100 per worker", "1% of turnover"], "Rule 4."),
  fq("Which photo must be uploaded with a Form A application?", "The establishment with its Marathi name board", ["The employer's house", "Every worker's ID", "The bank statement"], "Part A of the Schedule."),
  fq("Kesar's kiosk grows from 6 to 10 workers. What must Priya do?", "Register it, as the whole Act now applies", ["Nothing — intimation is enough forever", "Close the kiosk", "Wait for renewal"], "Ten or more workers."),
  fq("Who issues the registration certificate?", "The Facilitator for the local area", ["The Income Tax Department", "The municipal health officer", "The landlord"], "Digitally signed."),
  fq("Which form reports changes in registered details?", "Form I", ["Form A", "Form F", "Form R"], "Within 30 days."),

  // Module 3
  fq("When does the week begin for the Maharashtra Act?", "Midnight of Saturday", ["Monday morning", "Midnight of Sunday", "Whenever the employer decides"], "Section 2."),
  fq("What's the spread-over limit for a worker doing intermittent or urgent work?", "12 hours", ["10½ hours", "9 hours", "14 hours"], "Section 14."),
  fq("Within how long must compensatory leave be given if a weekly holiday is denied?", "Two months", ["One week", "Six months", "One year"], "Section 16."),
  fq("What's Fatima's overtime pay for 4 hours at an ordinary rate of ₹110 an hour?", "₹880", ["₹440", "₹660", "₹1,320"], "4 × ₹220."),
  fq("Which form displays the shift schedule with weekly holidays?", "Form N", ["Form M", "Form Q", "Form L"], "Displayed in advance."),
  fq("Who can fix opening and closing hours for shops in an area?", "The state government by notification", ["Each shop owner alone", "The Facilitator by phone", "The mall management only"], "Section 11."),

  // Module 4
  fq("How is casual leave credited during the year?", "Quarterly", ["All on 1 January", "Monthly", "At year-end"], "Two days a quarter."),
  fq("A worker employed for four months has worked 90 days. Up to how much leave can be allowed?", "5 days", ["10 days", "8 days", "None"], "One complete 60-day block."),
  fq("Which of these counts as days worked for earned leave eligibility?", "Maternity leave", ["Unauthorised absence", "Days before joining", "Strike days"], "Along with lay-off and work-injury absence."),
  fq("Which day is a fixed festival holiday in Maharashtra?", "1 May", ["14 April", "25 December", "1 January"], "Maharashtra Day."),
  fq("When can a worker encash earned leave above 45 days?", "When leave applied 15 days in advance is refused", ["Every month", "Never", "Only on retirement"], "Section 18(6)."),
  fq("What's Kesar's earned leave for Rohit in 2027 if he works 280 days in 2026?", "14 days", ["12 days", "10 days", "28 days"], "280 ÷ 20."),

  // Module 5
  fq("Women can work after 9:30 pm only if the employer provides…", "Safety, protection from harassment and doorstep transport, with consent", ["A higher salary", "A letter from the police", "Nothing extra"], "Section 13."),
  fq("What must be checked for drivers and guards transporting women night workers?", "Police verification", ["Driving speed records", "Their GST registration", "Nothing"], "Under the 2018 rules."),
  fq("Where ten or more women work, what security must be engaged?", "Women security guards", ["Armed guards", "No guards", "CCTV only"], "Under the 2018 rules."),
  fq("Which law requires an Internal Committee where there are ten or more employees?", "The POSH Act, 2013", ["The Shops Act, 2017", "The Code on Wages", "The GST Act"], "Prevention of sexual harassment."),
  fq("Can a group of establishments share a crèche?", "Yes, a common crèche within one kilometre if permitted", ["No, never", "Yes, anywhere in the city", "Only in malls"], "Permitted by the Chief Facilitator."),

  // Module 6
  fq("What must be issued to every worker under the Act?", "An identity card", ["A company car", "A uniform allowance", "A share certificate"], "Section 17."),
  fq("What's the maximum fine on a repeat conviction for the same provision?", "₹2 lakh", ["₹1 lakh", "₹50,000", "₹5 lakh"], "Section 29(2)."),
  fq("Can an offence be compounded if a similar one was committed three years earlier?", "No — not within five years of a similar offence", ["Yes, always", "Only with Form A", "Only in Mumbai"], "Section 33."),
  fq("Where must Form M be displayed?", "At the premises and on the employer's website", ["Only in the HR file", "At the bank", "Only on request"], "Rule 14."),
]
