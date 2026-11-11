import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Contract Labour — separate from
// the module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("What threshold did the Contract Labour Act, 1970 use?", "20 contract workers", ["50 contract workers", "10 contract workers", "100 contract workers"], "The OSH Code raised it to 50."),
  fq("Which chapter of the OSH Code deals with contract labour?", "Chapter XI", ["Chapter I", "Chapter VI", "Chapter XIV"], "Contract labour and inter-state migrant workers."),
  fq("An establishment had 55 contract workers in March but 40 now. Do the provisions still apply?", "Yes — any day in the preceding twelve months counts", ["No", "Only for March", "Only if it reapplies"], "Look-back of twelve months."),
  fq("How many direct employees does Sahyadri have?", "240", ["70", "22", "320"], "Plus 70 contract workers."),
  fq("Does Sahyadri need a separate contract labour registration?", "No — its OSH Code registration covers it", ["Yes, for each contractor", "Yes, every year", "Only for security"], "Single registration."),

  // Module 2
  fq("Why does SecureLine need a licence?", "It employs 320 workers in total", ["It has 22 guards at Sahyadri", "It's a security firm", "It's based in Pune"], "50 or more across clients."),
  fq("Which licence covers a single work order?", "A work-specific licence", ["An all-India licence", "A GST registration", "A trade licence"], "For one work order."),
  fq("Who issues a licence covering more than one state?", "The central licensing authority", ["Each client", "The municipality", "The contractor itself"], "Multi-state or all-India."),
  fq("Where can a contractor's licence be verified online?", "The labour department or Shram Suvidha portal", ["The GST portal only", "A social media page", "It can't be verified"], "Online verification."),
  fq("BuildRight grows to 55 workers. What changes?", "It needs a licence", ["Nothing", "Sahyadri must hire them", "It must close"], "50 or more."),

  // Module 3
  fq("Is loading and unloading a core activity?", "No — it's listed as non-core", ["Yes", "Only in factories", "Only at night"], "Support service."),
  fq("Can contract labour be used in core work that doesn't need full-time workers for most of the day?", "Yes, that's an exception", ["No, never", "Only with union consent", "Only on Sundays"], "Section 57."),
  fq("Which is a sign of a sham contract?", "The principal employer recruits, supervises and pays the workers", ["The contractor has a licence", "The contract has a fixed term", "The work is non-core"], "Control by the principal employer."),
  fq("Is quality inspection of parts core at Sahyadri?", "Yes — it's essential to production", ["No", "Only in exports", "Only if done by machines"], "Essential or necessary to the core activity."),
  fq("What did Anand allow for the export order?", "Contract workers for a documented two-month surge", ["Permanent contract operators", "No workers at all", "Unpaid interns"], "Surge exception."),

  // Module 4
  fq("What's Sahyadri's exposure if Sparkle doesn't pay 18 workers ₹15,000 each?", "₹2,70,000", ["₹15,000", "₹1,80,000", "₹3,60,000"], "18 × ₹15,000."),
  fq("When does Anand release contractor invoices?", "After proof of the previous month's wages, EPF and ESI", ["Immediately on receipt", "Once a year", "Only if workers complain"], "No proof, no payment."),
  fq("Can the principal employer recover welfare costs it bore for the contractor?", "Yes, from the contractor", ["No", "Only from workers", "Only from the government"], "Recovery."),
  fq("Which welfare facility does Sahyadri share with contract workers?", "Its canteen and first-aid room", ["Its boardroom", "Its company cars", "Nothing"], "Under the agreements."),
  fq("Who must pay EPF for contract workers in the first instance?", "The contractor", ["The workers alone", "The labour department", "Nobody"], "Principal employer if the contractor defaults."),

  // Module 5
  fq("Which records show hours worked by contract workers?", "Attendance and overtime registers", ["Sales ledger", "Fixed asset register", "Board minutes"], "Contractor records."),
  fq("What's the overtime rate for contract workers?", "Twice the ordinary rate", ["The ordinary rate", "1.25 times", "Nothing extra"], "Same as other workers."),
  fq("What arrears are due monthly to a worker paid ₹14,500 when the minimum is ₹15,200?", "₹700", ["₹1,400", "₹500", "₹15,200"], "Difference."),
  fq("Why are experience certificates useful to contract workers?", "They help them move to new contractors or employers", ["They reduce tax", "They replace wage slips", "They're needed for GST"], "Proof of work done."),
  fq("What protective equipment matters most for construction workers at height?", "Harnesses", ["Ear plugs only", "Gloves only", "Nothing"], "Plus helmets and induction."),

  // Module 6
  fq("What does an agreement's compliance clause usually require?", "Valid licence and registrations, minimum wages and timely contributions", ["A discount", "Free products", "A logo on uniforms"], "Compliance duties."),
  fq("What's held back if 10% of a ₹4,50,000 invoice is retained?", "₹45,000", ["₹4,500", "₹90,000", "₹4,05,000"], "Retention until proof."),
  fq("Which check confirms the contractor's licence covers your state?", "Reading its scope", ["Its GST rate", "Its website colour", "Its invoice number"], "State, multi-state or all-India."),
  fq("What happens to unpaid dues after a penalty is paid?", "They still have to be paid", ["They're cancelled", "They're halved", "They become optional"], "Penalties don't settle dues."),
  fq("Which is the first step on Sahyadri's checklist?", "Count contract workers at the establishment", ["Pay invoices", "Renew the lease", "File GST"], "Applicability."),
]
