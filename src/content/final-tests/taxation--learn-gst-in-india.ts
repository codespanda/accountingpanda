import { fq } from "@/lib/finalTest"

// Final test bank for Learn GST in India. These questions are separate from
// the module knowledge checks but only cover material taught in the course.
// The correct answer is listed first; the test shuffles the options.

export default [
  // Module 1 — Introduction to GST
  fq("Which tax was NOT subsumed into GST?", "Basic customs duty", ["VAT", "Service tax", "Central excise duty"], "Basic customs duty still applies to imports; VAT, service tax and central excise were subsumed."),
  fq("Why is GST described as a destination-based tax?", "Tax revenue goes to the State where goods or services are consumed", ["It is collected only at ports", "Only exporters pay it", "The rate depends on the distance travelled"], "GST follows consumption, so the consuming State gets the tax."),
  fq("Who chairs the GST Council?", "The Union Finance Minister", ["The Prime Minister", "The RBI Governor", "The Chief Justice of India"], "The Union Finance Minister chairs the Council, with State Finance Ministers as members."),
  fq("Which body runs the IT system behind the GST Portal?", "GSTN (Goods and Services Tax Network)", ["The Reserve Bank of India", "SEBI", "NITI Aayog"], "GSTN provides the technology backbone for GST."),

  // Module 2 — GST structure
  fq("A Pune supplier sells goods to a customer in Nagpur. Which tax applies?", "CGST + SGST", ["IGST", "UTGST only", "No GST"], "Both are in Maharashtra, so it's intra-state."),
  fq("A supplier in Chandigarh, a Union Territory without a legislature, makes a supply within Chandigarh. Which tax applies?", "CGST + UTGST", ["IGST", "SGST only", "No GST"], "UTGST replaces SGST in Union Territories without a legislature."),
  fq("An intra-state sale of ₹50,000 at 18% is recorded. How much is credited to Output CGST?", "₹4,500", ["₹9,000", "₹18,000", "₹900"], "9% CGST on ₹50,000."),
  fq("An intra-state purchase of ₹20,000 at 18% is recorded. How much is debited to Input SGST?", "₹1,800", ["₹3,600", "₹900", "₹18,000"], "9% SGST on ₹20,000."),

  // Module 3 — Key concepts
  fq("A laptop sold with its carry case and charger as a natural bundle is a:", "Composite supply", ["Mixed supply", "Non-GST supply", "Exempt supply"], "Naturally bundled supplies with a principal supply are composite."),
  fq("How is a mixed supply taxed?", "At the highest rate among the items", ["At the rate of the cheapest item", "At nil rate", "At the average rate"], "Mixed supplies take the highest applicable rate."),
  fq("In a 15-character GSTIN, what are characters 3 to 12?", "The taxpayer's PAN", ["The State code", "The check digit", "The entity number"], "The first two are the State code; the next ten are the PAN."),
  fq("A supply on which GST is not leviable under the GST Acts is a:", "Non-GST (non-taxable) supply", ["Zero-rated supply", "Composite supply", "Taxable supply"], "Non-GST supplies differ from zero-rated supplies, which are exports and SEZ supplies."),

  // Module 4 — Registration
  fq("What is the general registration threshold for service providers in most States?", "₹20 lakh aggregate turnover", ["₹10 lakh", "₹40 lakh", "₹1.5 crore"], "Lower limits apply in some special category States."),
  fq("Who must register for GST regardless of turnover?", "A person making inter-state taxable supplies of goods", ["A small shop selling locally below the threshold", "A salaried employee", "A person with no taxable supplies"], "Inter-state suppliers of goods need compulsory registration."),
  fq("What reference does an applicant receive after submitting a registration application?", "An Application Reference Number (ARN)", ["An IRN", "An e-way bill number", "A PAN"], "Use the ARN to track the application."),
  fq("A business below the threshold registers voluntarily. What follows?", "It must follow all GST rules like any registered person", ["It can skip filing returns", "It pays no tax", "It can never claim ITC"], "Voluntary registration brings full compliance obligations."),

  // Module 5 — Rates and classification
  fq("At what rate is gold jewellery taxed?", "3%", ["0.25%", "5%", "18%"], "Gold, silver, platinum and jewellery carry 3%."),
  fq("The 40% rate introduced under GST 2.0 broadly applies to:", "Select luxury and sin goods", ["Everyday essentials", "Exports", "Most services"], "40% is a special rate for select luxury and sin goods."),
  fq("A 5% inter-state supply is shown on the invoice as:", "5% IGST", ["2.5% CGST + 2.5% SGST", "5% CGST", "10% IGST"], "Inter-state supplies carry the full rate as IGST."),

  // Module 6 — Time, value and place of supply
  fq("Goods are dispatched with an invoice on 28 March. What is the time of supply?", "28 March", ["1 April", "The date of payment", "31 March"], "For goods, it's generally the invoice date."),
  fq("A Goa hotel hosts a guest from a Delhi company. What is the place of supply?", "Goa, where the hotel is", ["Delhi", "The supplier's head office", "Mumbai"], "Services linked to immovable property follow the property's location."),
  fq("When is transaction value used as the value of supply?", "When supplier and recipient are unrelated and price is the only consideration", ["Always, for every supply", "Only for exports", "Only for services"], "Otherwise the valuation rules apply."),

  // Module 7 — Input tax credit
  fq("By when must ITC on an invoice from FY 2025-26 be claimed?", "30 November 2026, or the annual return date if earlier", ["31 March 2026", "31 December 2027", "There is no time limit"], "Section 16(4) sets this time limit."),
  fq("Which of these is a blocked credit?", "Goods given away as free samples", ["Raw materials", "Office rent", "Freight on purchases"], "Gifts and free samples are blocked under Section 17(5)."),
  fq("Can CGST credit be used to pay SGST?", "No, never", ["Yes, always", "Only in March", "Only for exporters"], "CGST and SGST credits can't be used for each other."),

  // Module 8 — Invoices and documents
  fq("What is a credit note used for?", "To reduce the value or tax on an earlier invoice", ["To increase the value of an earlier invoice", "To record an advance", "To move goods for job work"], "Credit notes reduce value or tax."),
  fq("How many copies of a tax invoice are made for goods?", "Three", ["One", "Two", "Four"], "Original, duplicate for the transporter, triplicate for the supplier."),
  fq("Above what consignment value is an e-way bill generally needed?", "₹50,000", ["₹10,000", "₹1 lakh", "₹5 lakh"], "Rule 138 sets the general limit."),

  // Module 9 — Reverse charge
  fq("Under reverse charge, the time of supply of services is the earlier of the payment date and:", "The 61st day after the supplier's invoice date", ["The 30th day after the invoice", "The invoice date", "The 180th day after the invoice"], "Section 13(3)."),
  fq("Who issues a self-invoice?", "A recipient paying reverse charge on a purchase from an unregistered supplier", ["The unregistered supplier", "GSTN", "The bank"], "Rule 47A requires it within 30 days."),
  fq("A company pays its director sitting fees. How is GST paid?", "By the company, under reverse charge", ["By the director, under forward charge", "No GST applies", "By the GST Council"], "Director services to a company are under RCM."),

  // Module 10 — Composition
  fq("What is the composition rate for service providers under Section 10(2A)?", "6%", ["1%", "5%", "18%"], "3% CGST + 3% SGST."),
  fq("Which form is used to opt into the composition scheme?", "CMP-02", ["CMP-08", "GSTR-4", "REG-01"], "CMP-02 is filed before the start of the financial year."),
  fq("Can a composition taxpayer claim input tax credit?", "No", ["Yes, on everything", "Only on capital goods", "Only on reverse charge purchases"], "Composition taxpayers give up ITC."),

  // Module 11 — Returns
  fq("Under QRMP, by when is the quarterly GSTR-1 due?", "The 13th of the month after the quarter", ["The 11th", "The 20th", "The 25th"], "Quarterly GSTR-1 is due on the 13th."),
  fq("Under QRMP, by when is the monthly tax for the first two months paid through PMT-06?", "The 25th of the next month", ["The 20th", "The 22nd", "The last day of the month"], "PMT-06 payments are due by the 25th."),
  fq("Above what aggregate turnover is GSTR-9C required?", "₹5 crore", ["₹2 crore", "₹10 crore", "₹1.5 crore"], "GSTR-9C is a self-certified reconciliation above ₹5 crore."),

  // Module 12 — Payments, interest, late fees and refunds
  fq("What is the daily late fee for a nil GSTR-3B (CGST + SGST)?", "₹20", ["₹50", "₹100", "₹200"], "Regular returns are ₹50 a day."),
  fq("What is the maximum late fee for a business with turnover up to ₹1.5 crore?", "₹2,000", ["₹500", "₹5,000", "₹10,000"], "The cap rises with turnover."),
  fq("Which form is used to apply for a GST refund?", "RFD-01", ["PMT-06", "CMP-08", "REG-01"], "RFD-01 is the refund application."),

  // Module 13 — Exports and imports
  fq("How does an exempt supply differ from a zero-rated supply?", "ITC on related purchases must be reversed for exempt supplies", ["Exempt supplies carry 18% GST", "Zero-rated supplies lose all ITC", "There is no difference"], "Zero-rated supplies keep ITC; exempt supplies don't."),
  fq("Which document shows the IGST paid on imported goods for claiming ITC?", "The bill of entry", ["The shipping bill", "The e-way bill", "A delivery challan"], "IGST on imports is claimed from the bill of entry."),
  fq("Under a Letter of Undertaking (LUT), exports are made:", "Without paying IGST", ["With IGST paid upfront", "With CGST + SGST", "Only by post"], "The exporter later claims a refund of unused ITC."),

  // Module 14 — Software
  fq("Where is ITC parked for an invoice that's in the books but missing from GSTR-2B?", "An “ITC on hold” ledger", ["Output IGST", "Sales", "Owner's capital"], "It waits until the invoice appears in GSTR-2B."),
  fq("An inter-state sale of ₹30,000 at 18% is recorded. How much is credited to Output IGST?", "₹5,400", ["₹2,700", "₹30,000", "₹3,600"], "18% of ₹30,000."),
  fq("How is GSTR-1 data from accounting software typically uploaded?", "As a JSON file on the GST Portal", ["By fax", "On a paper form", "By email to the tax officer"], "Many tools export JSON for upload."),

  // Module 15 — Final project
  fq("In the Panda Traders project, how much CGST was paid in cash after ITC?", "₹9,900", ["₹12,600", "₹22,500", "₹0"], "₹22,500 − ₹12,600 CGST credit."),
  fq("What was Panda Traders' total ITC used across all tax heads?", "₹39,600", ["₹36,000", "₹41,400", "₹72,000"], "₹14,400 IGST + ₹12,600 CGST + ₹12,600 SGST."),
  fq("Panda Traders' Punjab customer's GSTIN starts with which State code?", "03", ["07", "06", "27"], "Punjab is 03; Delhi is 07."),
]
