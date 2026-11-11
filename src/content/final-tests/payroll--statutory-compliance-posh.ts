import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: POSH — separate from the module
// knowledge checks. The correct answer is listed first; the test shuffles the
// options.

export default [
  // Module 1
  fq("What is the full name of the POSH Act?", "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013", ["The Protection of Women at Work Act, 2010", "The Workplace Safety Code, 2020", "The Women's Rights Act, 2005"], "POSH for short."),
  fq("Is showing pornography to a colleague covered by the definition?", "Yes", ["No", "Only if repeated", "Only at night"], "It's listed expressly."),
  fq("A threat about a woman's job linked to sexual conduct is…", "Covered as harassment", ["Only a performance issue", "Not covered", "Covered only in factories"], "Threats about employment are included."),
  fq("Which right does sexual harassment violate, according to the Act's preamble?", "Equality and the right to work with dignity", ["The right to property", "The right to vote", "Freedom of trade"], "Constitutional rights."),
  fq("How many employees does Arcus Marketing have?", "85", ["9", "50", "500"], "Plus interns and freelancers."),

  // Module 2
  fq("How is an Internal Committee constituted?", "By a written order of the employer", ["By an email from any manager", "By the police", "Automatically"], "Section 4."),
  fq("Where should the external member come from?", "An NGO or association committed to women's causes, or someone familiar with sexual harassment issues", ["The respondent's team", "The company's auditors", "The board of directors"], "Section 4."),
  fq("What does the rules' minimum daily fee for the external member amount to?", "₹200 a day plus travel", ["₹5,000 a day", "Nothing", "₹50 a day"], "Employers can pay more."),
  fq("Who constitutes the Local Committee?", "The District Officer", ["The employer", "The IC", "The High Court"], "In every district."),
  fq("An IC has 6 members. How many must be women?", "At least 3", ["At least 2", "At least 6", "At least 1"], "At least half."),

  // Module 3
  fq("When the harassment is a series of incidents, the three months run from…", "The last incident", ["The first incident", "The date of joining", "The end of the year"], "Section 9."),
  fq("Within how long does the IC send the complaint to the respondent?", "Seven working days", ["Ten working days", "One day", "30 days"], "Under the rules."),
  fq("Within how long must the respondent reply?", "Ten working days", ["Seven working days", "90 days", "One day"], "Under the rules."),
  fq("If conciliation terms aren't complied with, what happens?", "The IC proceeds with the inquiry", ["The case is closed", "The employer pays a fine", "The complainant loses her claim"], "Section 10."),
  fq("Who may help a woman write her complaint if she can't?", "Any member of the IC", ["Only a lawyer", "The respondent", "Nobody"], "Reasonable assistance."),
  fq("Can the respondent be stopped from writing the complainant's appraisal during the inquiry?", "Yes, as interim relief", ["No", "Only after the inquiry", "Only with the respondent's consent"], "Section 12."),

  // Module 4
  fq("What is the minimum attendance for an IC inquiry?", "Three members including the presiding officer", ["All members", "One member", "Two members without the presiding officer"], "Under the rules."),
  fq("Which factor is considered for compensation?", "The complainant's mental trauma and medical expenses", ["The respondent's age", "The company's turnover", "The time of day"], "Section 15."),
  fq("Within how long can an appeal be filed against the IC's recommendations?", "90 days", ["30 days", "One year", "Seven days"], "Section 18."),
  fq("Which IC power is like a civil court's?", "Summoning people and requiring documents", ["Imprisoning the respondent", "Imposing GST", "Freezing bank accounts"], "Section 11."),
  fq("Can the IC share that “a complaint was upheld and action taken” without names?", "Yes, without identifying details", ["No, never", "Yes, with names", "Only to the media"], "Justice secured can be shared anonymously."),

  // Module 5
  fq("What must the employer do if the respondent isn't an employee?", "Initiate action against the perpetrator under the law", ["Nothing", "Close the complaint", "Ask the complainant to resign"], "Section 19."),
  fq("Whom must the employer give orientation programmes to?", "Members of the IC", ["Only directors", "Only customers", "Only auditors"], "Section 19."),
  fq("What does a repeat offence by an employer risk besides a higher fine?", "Cancellation of licence or registration", ["A tax holiday", "A refund", "Nothing"], "Section 26."),
  fq("Which is evidence of awareness programmes?", "Attendance sheets and session materials", ["Bank statements", "GST returns", "Sales invoices"], "Keep proof."),

  // Module 6
  fq("If an employer has no annual report, what must it do about POSH case numbers?", "Inform the District Officer", ["Nothing", "Publish them in a newspaper", "Tell the police"], "Section 22."),
  fq("Which item belongs in a POSH policy?", "Protection against retaliation", ["Sales targets", "Office timings", "Travel per diem rates"], "Along with procedures and contacts."),
  fq("What must a company state in its Board's report about the IC?", "That it has complied with the provisions on constituting it", ["The IC members' salaries", "The external member's address", "Nothing"], "Companies (Accounts) Rules."),
  fq("Which records belong in a complaint file?", "Complaint, notices, minutes, evidence, report and action taken", ["Only the complaint", "Only the final decision", "Nothing — no records are kept"], "Kept confidential."),
  fq("Which is part of Arcus's POSH checklist?", "IC within its three-year term", ["Annual GST audit", "Stock count", "Trademark renewal"], "Committee check."),
]
