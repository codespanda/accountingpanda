import type { CourseLessons } from "@/lib/lessonTypes"
import { bullets, caution, cards, check, compare, example, exercises, journal, mistakes, note, overview, p, q, screen, steps, summary, table, terms, tip } from "@/lib/lessonKit"

// Learn GST in India — lesson screens by module index (0 = Module 1).
const lessons: CourseLessons = {
  0: [
    {
      title: "What is an indirect tax?",
      blocks: [
        {
          type: "paragraph",
          text: "An indirect tax is a tax that a business may collect from its customer and remit to the government. The person who ultimately bears the cost is generally the final consumer.",
        },
        {
          type: "paragraph",
          text: "For example, suppose a laptop shop sells a laptop for ₹50,000 and, purely for this example, the applicable GST rate is 18%.",
        },
        {
          type: "example",
          rows: [
            { label: "Laptop price before GST", value: "₹50,000" },
            { label: "GST (assumed 18%)", value: "₹9,000" },
          ],
          total: { label: "Customer pays", value: "₹59,000" },
        },
        {
          type: "paragraph",
          text: "In a normal taxable sale, the shop records ₹50,000 as sales revenue and ₹9,000 as output GST payable, rather than treating the entire ₹59,000 as revenue. The exact GST rate depends on the product classification and applicable notifications.",
        },
        { type: "heading", text: "Direct versus indirect tax" },
        {
          type: "table",
          headers: ["Direct tax", "Indirect tax"],
          rows: [
            [
              "Income tax on a person's or business's taxable income is a common example.",
              "GST on a taxable supply is a common example.",
            ],
            [
              "Generally borne by the person on whom the tax is imposed.",
              "Collected through the supply chain; the final consumer generally bears the cost.",
            ],
            [
              "Governed by income-tax law.",
              "GST is governed by the applicable GST legislation and rules.",
            ],
          ],
        },
        {
          type: "note",
          text: "CBIC explains that GST is a tax on the supply of goods or services and is generally collected by the supplier, subject to exceptions such as reverse charge.",
        },
      ],
    },
    {
      title: "Which taxes did GST replace?",
      blocks: [
        {
          type: "paragraph",
          text: "Before GST, different Central and State taxes applied at different stages of business. GST brought many of these taxes into a more integrated system.",
        },
        {
          type: "table",
          headers: ["Earlier tax", "Broadly associated with"],
          rows: [
            ["Central Excise Duty", "Manufacture of certain goods"],
            ["Service Tax", "Provision of taxable services"],
            ["State VAT", "Sale of goods within a state"],
            ["Central Sales Tax (CST)", "Certain inter-state sales"],
            ["Entry Tax", "Entry of goods into certain local or state areas"],
            ["Luxury Tax", "Certain specified luxury transactions"],
            ["Entertainment Tax", "Certain entertainment activities, with exceptions"],
          ],
        },
        {
          type: "note",
          text: "The list is illustrative, not exhaustive. Certain taxes and levies were retained, and GST did not absorb every tax in India. For example, local-body entertainment taxes were treated differently, and customs duties continue to exist under their respective laws.",
        },
        { type: "heading", text: "Why was this change important?" },
        {
          type: "paragraph",
          text: "Imagine a product being taxed during manufacture and then again at later stages, without a full credit mechanism for earlier taxes. Such tax-on-tax effects are called cascading. GST's input tax credit system was designed to reduce cascading where credits are legally available.",
        },
      ],
    },
    {
      title: "GST launch and “One Nation, One Tax”",
      blocks: [
        {
          type: "paragraph",
          text: "India officially launched GST on 1 July 2017. The reform aimed to bring many Central and State indirect taxes into a more coordinated framework.",
        },
        {
          type: "paragraph",
          text: "The phrase “One Nation, One Tax” is a useful slogan, but it does not mean India has only one GST rate or one tax authority.",
        },
        {
          type: "paragraph",
          text: "India has a dual GST system: both the Central Government and State Governments have roles in taxing supplies. For example, the GST framework includes:",
        },
        {
          type: "list",
          items: [
            { term: "CGST", text: "Central Goods and Services Tax." },
            { term: "SGST", text: "State Goods and Services Tax." },
            { term: "UTGST", text: "Union Territory Goods and Services Tax." },
            { term: "IGST", text: "Integrated Goods and Services Tax." },
          ],
        },
        { type: "note", text: "You'll study how these work in detail in Module 2." },
      ],
    },
    {
      title: "Constitutional basis: the 101st Amendment",
      blocks: [
        {
          type: "paragraph",
          text: "Before GST could be introduced nationwide, India's Constitution needed to be amended to provide the necessary legislative powers to the Union and States.",
        },
        {
          type: "paragraph",
          text: "The Constitution (101st Amendment) Act, 2016 established the constitutional foundation for GST. Two important provisions are:",
        },
        {
          type: "cards",
          items: [
            {
              title: "Article 246A — Power to make GST laws",
              text: "Parliament and State legislatures have power to make GST laws, subject to the Constitution. Parliament has exclusive power over GST legislation for inter-state supplies.",
              source: {
                label: "101st Constitutional Amendment Act",
                href: "https://gstcouncil.gov.in/sites/default/files/2024-02/consti-amend-act.pdf",
              },
            },
            {
              title: "Article 279A — GST Council",
              text: "Provides for the establishment of the GST Council and sets out its composition and functions.",
              source: { label: "GST Council — official website", href: "https://gstcouncil.gov.in/" },
            },
          ],
        },
        {
          type: "note",
          text: "A key point for accounting students: GST is not based only on a single Act. The applicable Central, State or Union Territory legislation, rules, notifications and amendments must be considered for a real transaction.",
        },
      ],
    },
    {
      title: "What is the GST Council?",
      blocks: [
        {
          type: "paragraph",
          text: "The GST Council is a constitutional body that brings together the Union and State Governments to coordinate GST policy.",
        },
        { type: "paragraph", text: "Its composition includes:" },
        {
          type: "bullets",
          items: [
            "The Union Finance Minister, who chairs the Council.",
            "The Union Minister of State in charge of Revenue or Finance.",
            "The relevant minister nominated by each State Government.",
          ],
        },
        {
          type: "paragraph",
          text: "The Council makes recommendations on matters such as GST rates, exemptions, model laws, registration thresholds and place-of-supply principles. The relevant governments implement changes through the applicable legal instruments.",
        },
        {
          type: "tip",
          title: "Practical example",
          text: "If a GST rate is proposed to change for a category of goods, you should not rely solely on a news headline or an informal summary. Check the relevant official notification and its effective date before preparing invoices or returns.",
        },
        {
          type: "link",
          label: "Official resource",
          text: "GST Council",
          href: "https://gstcouncil.gov.in/",
        },
      ],
    },
    {
      title: "Destination-based taxation",
      blocks: [
        {
          type: "paragraph",
          text: "GST is described as a destination-based consumption tax. Broadly, tax revenue is associated with the place where the supply is consumed, as determined by GST law, rather than simply the place where the product was manufactured.",
        },
        { type: "paragraph", text: "Consider this simplified example:" },
        {
          type: "flow",
          from: { title: "Manufacturer", place: "Chennai, Tamil Nadu" },
          to: { title: "Customer", place: "Mumbai, Maharashtra" },
          caption: "Simplified inter-state example: the place-of-supply rules determine the tax treatment.",
        },
        {
          type: "paragraph",
          text: "If the transaction qualifies as an inter-state supply, IGST generally applies. The place of supply is determined under the relevant provisions; the customer's location alone does not settle every case.",
        },
        {
          type: "tip",
          title: "Why does this matter?",
          text: "A business needs to classify supplies correctly to select the right tax type and report it accurately.",
        },
      ],
    },
    {
      title: "Benefits of GST",
      blocks: [
        {
          type: "table",
          headers: ["For businesses", "For consumers and the economy"],
          rows: [
            [
              "Eligible input tax credit can reduce cascading.",
              "Tax treatment can be more consistent across many types of transactions.",
            ],
            ["Common electronic compliance infrastructure.", "Greater visibility of tax charged on invoices."],
            ["Better documentation and transaction tracking.", "A more integrated national market."],
            [
              "Standardised reporting processes.",
              "Potential reduction in tax-on-tax effects where credits are available.",
            ],
          ],
        },
        {
          type: "note",
          text: "These are intended benefits, not a guarantee that every product becomes cheaper or every business has simpler compliance. Actual outcomes depend on tax rates, exemptions, credit eligibility, industry and compliance costs.",
        },
      ],
    },
    {
      title: "GST Portal and GSTN",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "GST Portal",
              text: "The taxpayer-facing online portal is www.gst.gov.in. It supports functions such as GST registration, return filing, tax payments and other compliance activities.",
              source: { label: "www.gst.gov.in", href: "https://www.gst.gov.in/" },
            },
            {
              title: "GSTN — Goods and Services Tax Network",
              text: "GSTN provides the technology infrastructure that supports the GST system. It connects taxpayers and tax administration systems and supports electronic compliance. It does not replace the legal authority of tax departments to administer the law.",
              source: { label: "www.gstn.org.in", href: "https://www.gstn.org.in/about-us" },
            },
          ],
        },
        { type: "heading", text: "Bookmark these official resources" },
        {
          type: "links",
          items: [
            { label: "GST Portal", href: "https://www.gst.gov.in/", text: "taxpayer services." },
            {
              label: "GSTN",
              href: "https://www.gstn.org.in/about-us",
              text: "technology infrastructure and responsibilities.",
            },
            {
              label: "CBIC — Know About GST",
              href: "https://cbic-gst.gov.in/about-gst.html",
              text: "introductory GST concepts.",
            },
            {
              label: "GST Portal Tutorials",
              href: "https://tutorial.gst.gov.in/",
              text: "help and guidance for portal processes.",
            },
          ],
        },
        {
          type: "caution",
          text: "When using the portal, use official websites and be cautious of third-party websites that claim to issue GST registrations or make government refund payments on your behalf.",
        },
      ],
    },
    {
      title: "Module 1 — Knowledge check",
      blocks: [
        {
          type: "paragraph",
          text: "Answer these five questions. Choose one answer for each, then press Check answers to see your score and explanations. Score at least 4 out of 5 to move on to the practical exercises.",
        },
        {
          type: "knowledge-check",
          passCount: 4,
          questions: [
            {
              question: "Who generally bears the cost of an indirect tax such as GST?",
              options: [
                "The manufacturer",
                "The final consumer",
                "The GST Network (GSTN)",
                "The GST Council",
              ],
              answer: 1,
              explanation:
                "Businesses collect GST through the supply chain and pay it to the government, but the final consumer generally bears the cost.",
            },
            {
              question:
                "A shop sells a laptop for ₹50,000 plus GST of ₹9,000, and the customer pays ₹59,000. In a normal taxable sale, how much does the shop record as sales revenue?",
              options: ["₹59,000", "₹50,000", "₹41,000", "₹9,000"],
              answer: 1,
              explanation:
                "The shop records ₹50,000 as sales revenue. The ₹9,000 is output GST payable — a liability owed to the government, not income.",
            },
            {
              question: "Which of these continues to exist under its own law and was not absorbed into GST?",
              options: ["Service Tax", "Entry Tax", "Luxury Tax", "Customs duties"],
              answer: 3,
              explanation:
                "Service Tax, Entry Tax and Luxury Tax were brought into GST. Customs duties continue to exist under their respective laws.",
            },
            {
              question: "Which Article of the Constitution provides for the GST Council?",
              options: ["Article 246A", "Article 279A", "Article 101", "Article 366"],
              answer: 1,
              explanation:
                "Article 279A provides for the GST Council and sets out its composition and functions. Article 246A gives Parliament and State legislatures the power to make GST laws.",
            },
            {
              question:
                "A manufacturer in Chennai, Tamil Nadu supplies goods to a customer in Mumbai, Maharashtra, and the transaction qualifies as an inter-state supply. Which tax generally applies?",
              options: ["CGST and SGST", "IGST", "UTGST", "Customs duty"],
              answer: 1,
              explanation:
                "IGST generally applies to inter-state supplies. The place-of-supply rules decide whether a supply is inter-state — the customer's location alone does not settle every case.",
            },
          ],
        },
      ],
    },
    {
      title: "Practical exercises",
      blocks: [
        {
          type: "paragraph",
          text: "Put Module 1 into practice. Work out each answer on paper or in a spreadsheet first, then press Show answer to check your working. The GST rates used here are assumed for practice only — real rates depend on classification and the applicable notifications.",
        },
        {
          type: "exercises",
          items: [
            {
              title: "Exercise 1 — Split a GST-inclusive amount",
              task: [
                "A customer pays ₹11,800 for an item. The price includes GST at an assumed rate of 18%.",
                "Work out the value before GST and the GST amount.",
              ],
              answer: [
                "Value before GST = ₹11,800 ÷ 1.18 = ₹10,000.",
                "GST = ₹11,800 − ₹10,000 = ₹1,800.",
                "Check: 18% of ₹10,000 = ₹1,800 ✓",
              ],
            },
            {
              title: "Exercise 2 — Record a taxable sale",
              task: [
                "A shop makes a cash sale of goods for ₹20,000 plus GST at an assumed 18%.",
                "Write the journal entry, treating GST as a single “Output GST payable” account. (You'll learn how it splits into CGST, SGST or IGST in Module 2.)",
              ],
              answer: [
                "GST = 18% × ₹20,000 = ₹3,600. The customer pays ₹23,600.",
                "Dr Cash ₹23,600",
                "Cr Sales ₹20,000",
                "Cr Output GST payable ₹3,600",
                "Only ₹20,000 is revenue — the ₹3,600 is owed to the government.",
              ],
            },
            {
              title: "Exercise 3 — Direct or indirect?",
              task: [
                "Classify each tax as direct or indirect:",
                "(a) Income tax on a person's salary  (b) GST on a restaurant bill  (c) Customs duty on imported goods  (d) Income tax on a company's profits",
              ],
              answer: [
                "(a) Direct — charged on the person's own income.",
                "(b) Indirect — collected by the restaurant from the customer.",
                "(c) Indirect — a duty on goods that continues under customs law, outside GST.",
                "(d) Direct — charged on the company's own income.",
              ],
            },
            {
              title: "Exercise 4 — See how input tax credit stops cascading",
              task: [
                "Assume a 10% tax. A manufacturer sells goods to a trader for ₹100 plus tax. The trader adds a ₹20 margin and sells to a consumer.",
                "Work out the total tax collected (i) without any credit for earlier tax, and (ii) with input tax credit.",
              ],
              answer: [
                "(i) Without credit: the manufacturer charges ₹10, so the trader's cost is ₹110. The trader sells for ₹130 + ₹13 tax. Total tax = ₹10 + ₹13 = ₹23 — tax was charged on tax.",
                "(ii) With credit: the trader claims back the ₹10, so its cost is ₹100. It sells for ₹120 + ₹12 tax and pays ₹12 − ₹10 = ₹2. Total tax = ₹10 + ₹2 = ₹12, which is exactly 10% of the final ₹120 value.",
              ],
            },
            {
              title: "Exercise 5 — Find the official source",
              task: [
                "A colleague sends you a link to “gst-registration-fast.com”, which offers to issue a GST registration for a fee, and a news article saying a GST rate will change next month.",
                "Where should you go to register, and what should you check before changing the rate on your invoices?",
              ],
              answer: [
                "Register only through the official GST Portal at www.gst.gov.in — be cautious of third-party sites that claim to issue registrations.",
                "Before changing any rate, check the official notification and its effective date (for example via CBIC or the GST Council), not just the news article.",
              ],
            },
          ],
        },
      ],
    },
  ],
  1: [
    {
      title: "The dual GST model",
      blocks: [
        {
          type: "paragraph",
          text: "India uses a dual GST model because both the Central Government and State Governments have roles in taxation.",
        },
        {
          type: "branches",
          root: { title: "Taxable supply", text: "First determine the place and nature of supply" },
          items: [
            {
              title: "Intra-state",
              text: "Supplier's location and place of supply are generally within the same State or Union Territory.",
              result: "CGST + SGST",
              resultNote: "Or CGST + UTGST, where applicable",
            },
            {
              title: "Inter-state",
              text: "The supply meets the legal criteria for an inter-state supply.",
              result: "IGST",
              resultNote: "Levied under the IGST framework",
            },
          ],
          caption:
            "Simplified overview. Special rules apply to imports, exports, SEZ transactions and certain other supplies.",
        },
        {
          type: "link",
          label: "Official reference",
          text: "Central Board of Indirect Taxes and Customs (CBIC) — Know About GST",
          href: "https://cbic-gst.gov.in/about-gst.html",
        },
      ],
    },
    {
      title: "Intra-state vs. inter-state supplies",
      blocks: [
        {
          type: "paragraph",
          text: "This is one of the most important practical skills for a GST accountant.",
        },
        {
          type: "list",
          items: [
            {
              term: "Intra-state supply",
              text: "generally, the supplier's location and place of supply are in the same State or Union Territory.",
            },
            {
              term: "Inter-state supply",
              text: "generally, the supplier's location and place of supply are in different States or Union Territories, or the transaction falls within another category treated as inter-state by law.",
            },
          ],
        },
        {
          type: "note",
          text: "The statutory rules are set out in Sections 7 and 8 of the IGST Act, 2017. There are exceptions, so never classify a transaction using the invoice address alone.",
        },
        { type: "heading", text: "Practical examples" },
        {
          type: "scenarios",
          items: [
            {
              title: "Example A — Sale within Punjab",
              text: "A registered seller in Punjab sells a laptop to a customer, and the applicable place-of-supply rules establish that the supply is within Punjab.",
              badge: "Intra-state",
              tax: "CGST + Punjab SGST, assuming an ordinary taxable supply.",
            },
            {
              title: "Example B — Sale from Punjab to Haryana",
              text: "A seller in Punjab sells and ships goods to a customer in Haryana. Assuming the place of supply is Haryana, the supply is inter-state.",
              badge: "Inter-state",
              tax: "IGST.",
            },
          ],
        },
        { type: "heading", text: "Calculate the tax" },
        {
          type: "paragraph",
          text: "Suppose the taxable value of a laptop is ₹40,000 and, for this exercise only, the applicable GST rate is assumed to be 18%.",
        },
        {
          type: "calcs",
          items: [
            {
              title: "Intra-state sale",
              rows: [
                { label: "Taxable value", value: "₹40,000" },
                { label: "CGST at 9%", value: "₹3,600" },
                { label: "SGST at 9%", value: "₹3,600" },
              ],
              total: { label: "Total invoice", value: "₹47,200" },
            },
            {
              title: "Inter-state sale",
              rows: [
                { label: "Taxable value", value: "₹40,000" },
                { label: "IGST at 18%", value: "₹7,200" },
              ],
              total: { label: "Total invoice", value: "₹47,200" },
            },
          ],
        },
        {
          type: "note",
          text: "The 18% rate and 9% + 9% split are illustrative assumptions, not a claim about the current rate for every laptop. Verify the applicable HSN classification and current notification before invoicing.",
        },
        {
          type: "tip",
          title: "Notice",
          text: "The total tax is ₹7,200 in both examples. What changes is the tax component reported on the invoice.",
        },
      ],
    },
    {
      title: "How is GST divided between the Centre and the states?",
      blocks: [
        {
          type: "paragraph",
          text: "For intra-state supplies, the Centre receives the CGST component and the relevant State or Union Territory receives the SGST or UTGST component, subject to the applicable law.",
        },
        {
          type: "paragraph",
          text: "For inter-state supplies, IGST is collected by the Central Government and apportioned between the Union and States according to the statutory framework. It is not accurate to assume that every IGST payment is simply divided 50:50 in every case.",
        },
        { type: "paragraph", text: "Here's a simplified way to remember it:" },
        {
          type: "table",
          headers: ["Transaction", "Tax charged", "General revenue treatment"],
          rows: [
            ["Intra-state", "CGST + SGST", "Central and State components are accounted for separately"],
            ["Intra-UT, where UTGST applies", "CGST + UTGST", "Central and relevant UT components"],
            ["Inter-state", "IGST", "Collected centrally and apportioned under law"],
          ],
        },
        { type: "heading", text: "Why IGST helps businesses" },
        {
          type: "paragraph",
          text: "Imagine a business registered in Punjab purchases eligible goods from a supplier in Maharashtra and pays IGST. Subject to the input tax credit rules and correct documentation, the Punjab business may claim eligible IGST credit against its output tax liabilities.",
        },
        {
          type: "note",
          text: "The IGST mechanism is designed to support the flow of eligible tax credits across state boundaries. It does not mean that every purchase automatically qualifies for ITC.",
        },
      ],
    },
    {
      title: "GST Compensation Cess",
      blocks: [
        {
          type: "paragraph",
          text: "GST Compensation Cess is a separate levy under the Goods and Services Tax (Compensation to States) Act, 2017. It was introduced in connection with compensation to States for revenue losses arising from GST implementation during the statutory transition period.",
        },
        {
          type: "paragraph",
          text: "Historically, cess applied to specified categories of goods, including certain tobacco products, coal, aerated beverages and motor vehicles, subject to the applicable notifications. The exact products, rates and conditions must be verified against official notifications.",
        },
        { type: "heading", text: "Important current-status distinction" },
        {
          type: "paragraph",
          text: "On the GST Council's recommendation at its 56th meeting, compensation cess was removed on most goods from 22 September 2025, with GST rates adjusted instead. It continued on tobacco and pan masala products only until the loans taken to compensate States were repaid. The Government then notified 1 February 2026 as the date from which an additional excise duty applies to tobacco products and a Health Security se National Security Cess applies to pan masala, in place of compensation cess on those goods.",
        },
        {
          type: "caution",
          text: "Historical cess rates or older training material should not be treated as proof that a cess applies to a transaction today. Check the latest effective notification and legislation before calculating or charging any cess.",
        },
        {
          type: "links",
          items: [
            { label: "GST Council — Compensation", href: "https://gstcouncil.gov.in/compensation", text: "background and official documents." },
            {
              label: "CBIC — Compensation Cess rate notifications",
              href: "https://cbic-gst.gov.in/hindi/compensation-tax.html",
              text: "notifications issued under the Compensation Cess Act.",
            },
            {
              label: "CBIC — GST rates",
              href: "https://cbic-gst.gov.in/hindi/gst-goods-services-rates.html",
              text: "current rate notifications for goods and services.",
            },
          ],
        },
      ],
    },
    {
      title: "Journal entries for GST",
      blocks: [
        {
          type: "paragraph",
          text: "Assume a registered laptop dealer makes a taxable intra-state credit sale for ₹40,000 plus the illustrative 18% GST.",
        },
        { type: "heading", text: "Sales entry" },
        {
          type: "table",
          headers: ["Account", "Debit (₹)", "Credit (₹)"],
          rows: [
            ["Customer / Accounts Receivable", "47,200", "—"],
            ["Sales", "—", "40,000"],
            ["Output CGST", "—", "3,600"],
            ["Output SGST", "—", "3,600"],
          ],
          footer: ["Total", "47,200", "47,200"],
          numeric: [1, 2],
        },
        {
          type: "paragraph",
          text: "For an inter-state sale of the same value, replace the output CGST and SGST accounts with Output IGST ₹7,200.",
        },
        {
          type: "note",
          text: "The GST collected is generally recorded as a tax liability, not sales revenue. The actual ledger treatment may vary with accounting software and the transaction type.",
        },
      ],
    },
    {
      title: "Module 2 — Knowledge check",
      blocks: [
        {
          type: "paragraph",
          text: "Answer these five questions. Choose one answer for each, then press Check answers to see your score and explanations. Score at least 4 out of 5 to move on to the practical exercises.",
        },
        {
          type: "knowledge-check",
          passCount: 4,
          questions: [
            {
              question:
                "A registered seller in Punjab makes an ordinary taxable supply, and the place of supply is also Punjab. Which taxes are generally charged?",
              options: ["IGST", "CGST + SGST", "CGST + UTGST", "IGST + SGST"],
              answer: 1,
              explanation:
                "The supplier's location and place of supply are in the same State, so it is an intra-state supply: CGST goes to the Centre and SGST to Punjab.",
            },
            {
              question: "Where are the statutory rules for inter-state and intra-state supplies set out?",
              options: [
                "Article 279A of the Constitution",
                "Sections 7 and 8 of the IGST Act, 2017",
                "The GST (Compensation to States) Act, 2017",
                "The invoice address printed by the supplier",
              ],
              answer: 1,
              explanation:
                "Sections 7 and 8 of the IGST Act, 2017 set out the rules. Never classify a supply from the invoice address alone — there are exceptions.",
            },
            {
              question:
                "A supply has a taxable value of ₹40,000 and qualifies as inter-state. Using an assumed GST rate of 18%, how much IGST is charged?",
              options: ["₹3,600", "₹7,200", "₹14,400", "₹47,200"],
              answer: 1,
              explanation:
                "IGST = 18% × ₹40,000 = ₹7,200. An intra-state supply would instead show CGST ₹3,600 + SGST ₹3,600 — the same total tax.",
            },
            {
              question: "How is IGST on inter-state supplies handled?",
              options: [
                "It is collected by the supplier's State and kept by that State",
                "It is collected by the Central Government and apportioned between the Union and States under law",
                "It is collected by GSTN and passed on to the GST Council",
                "It is always split 50:50 between the two States involved",
              ],
              answer: 1,
              explanation:
                "IGST is collected centrally and apportioned according to the statutory framework. It is not accurate to assume a simple 50:50 split in every case.",
            },
            {
              question: "In the dealer's sales entry, how is the output GST collected from the customer generally recorded?",
              options: [
                "As part of sales revenue",
                "As a tax liability, credited to output GST accounts",
                "As an expense",
                "As an amount receivable from the government",
              ],
              answer: 1,
              explanation:
                "Output CGST, SGST or IGST is credited to liability accounts because it is owed to the government. Only the taxable value is recorded as sales.",
            },
          ],
        },
      ],
    },
    {
      title: "Practical exercises",
      blocks: [
        {
          type: "paragraph",
          text: "Put Module 2 into practice. Work out each answer first, then press Show answer to check your working. The GST rates and places of supply here are assumed for practice only — in real transactions, confirm the place of supply under the law and the rate under the current notification.",
        },
        {
          type: "exercises",
          items: [
            {
              title: "Exercise 1 — Choose the right tax",
              task: [
                "For each ordinary taxable supply, decide which taxes apply. Assume the place of supply is as stated.",
                "(a) A supplier in Ludhiana, Punjab sells to a customer in Amritsar, Punjab — place of supply Punjab.",
                "(b) A supplier in Mumbai, Maharashtra ships goods to a customer in Ahmedabad — place of supply Gujarat.",
                "(c) A supplier in Chandigarh sells to a customer in Chandigarh — place of supply Chandigarh.",
              ],
              answer: [
                "(a) Intra-state → CGST + SGST (Punjab).",
                "(b) Inter-state → IGST.",
                "(c) Intra-UT → CGST + UTGST, because Chandigarh is a Union Territory where UTGST applies.",
              ],
            },
            {
              title: "Exercise 2 — Calculate both ways",
              task: [
                "Goods have a taxable value of ₹25,000. Assume a GST rate of 5%.",
                "Work out the tax and invoice total (i) as an intra-state supply and (ii) as an inter-state supply.",
              ],
              answer: [
                "(i) Intra-state: CGST 2.5% = ₹625, SGST 2.5% = ₹625. Invoice total = ₹25,000 + ₹625 + ₹625 = ₹26,250.",
                "(ii) Inter-state: IGST 5% = ₹1,250. Invoice total = ₹25,000 + ₹1,250 = ₹26,250.",
                "The total tax is ₹1,250 either way — only the tax heads differ.",
              ],
            },
            {
              title: "Exercise 3 — Record an inter-state sale",
              task: [
                "A dealer makes an inter-state credit sale for ₹60,000 plus GST at an assumed 18%.",
                "Write the journal entry.",
              ],
              answer: [
                "IGST = 18% × ₹60,000 = ₹10,800. The customer owes ₹70,800.",
                "Dr Customer / Accounts Receivable ₹70,800",
                "Cr Sales ₹60,000",
                "Cr Output IGST ₹10,800",
              ],
            },
            {
              title: "Exercise 4 — Record a purchase with eligible ITC",
              task: [
                "A business registered in Punjab buys goods for resale from a supplier in Maharashtra for ₹10,000 plus IGST at an assumed 18%, on credit.",
                "Assuming all input tax credit conditions are met and the documents are in order, write the journal entry.",
              ],
              answer: [
                "IGST = 18% × ₹10,000 = ₹1,800. The supplier is owed ₹11,800.",
                "Dr Purchases ₹10,000",
                "Dr Input IGST (ITC) ₹1,800",
                "Cr Supplier / Accounts Payable ₹11,800",
                "The ₹1,800 is recorded as an asset (eligible credit), not as part of the cost — but only where ITC is actually available.",
              ],
            },
            {
              title: "Exercise 5 — Spot the error",
              task: [
                "A seller in Haryana issues an invoice to a customer in Haryana for ₹50,000 and charges IGST of ₹9,000 (assumed 18%). The place of supply is Haryana.",
                "What is wrong, and what should the invoice show?",
              ],
              answer: [
                "The supply is intra-state, so IGST is the wrong tax head.",
                "The invoice should show CGST ₹4,500 + SGST ₹4,500 (9% + 9% of ₹50,000). The total tax of ₹9,000 is the same.",
                "Tax paid under the wrong head isn't simply moved across — the law has a separate refund route (Section 77 of the CGST Act and Section 19 of the IGST Act). Getting the classification right first time matters.",
              ],
            },
          ],
        },
      ],
    },
  ],
  2: [
    {
      title: "Meaning and scope of “supply”",
      blocks: [
        {
          type: "paragraph",
          text: "Under Section 7 of the Central Goods and Services Tax Act, 2017 (CGST Act), the term supply broadly covers transactions such as the sale, transfer, barter, exchange, licence, rental, lease or disposal of goods or services made or agreed to be made for consideration in the course or furtherance of business, subject to the law.",
        },
        {
          type: "paragraph",
          text: "Certain activities can be treated as supply even without consideration, where the law specifically provides for this.",
        },
        { type: "heading", text: "Examples of supply" },
        {
          type: "table",
          headers: ["Transaction", "GST concept"],
          rows: [
            ["A shop sells a laptop to a customer", "Sale of goods"],
            ["A consultant charges a fee for accounting services", "Supply of services"],
            ["A business rents out office computers", "Supply of services in the usual rental arrangement"],
            ["A company transfers business assets to a related person", "Check the specific rules, including Schedule I"],
            ["A person gives a personal gift to a friend", "Not automatically a supply merely because an item changes hands"],
          ],
        },
        { type: "heading", text: "The four questions an accountant should ask" },
        {
          type: "steps",
          items: [
            {
              title: "Is there a supply?",
              text: "Identify the actual transaction: sale, rental, service, transfer or another activity.",
            },
            {
              title: "Is it in the course or furtherance of business?",
              text: "Business purpose matters, although specific provisions may cover transactions without consideration.",
            },
            {
              title: "Is consideration involved?",
              text: "Consideration commonly means payment or another form of value connected with the supply. The law provides specific exceptions.",
            },
            {
              title: "Is the supply taxable, and what rules apply?",
              text: "Check exemptions, place of supply, time of supply, valuation, rate notifications and any special provisions.",
            },
          ],
        },
        {
          type: "tip",
          title: "Remember",
          text: "A transaction being a “supply” does not automatically mean that GST must be charged. You must also examine the applicable tax treatment.",
        },
        {
          type: "link",
          label: "Official source",
          text: "CGST Act, 2017 — Section 7 (CBIC)",
          href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter3/section7_v1.00.html",
        },
      ],
    },
    {
      title: "Goods vs. services",
      blocks: [
        {
          type: "paragraph",
          text: "The CGST Act defines goods and services separately under Section 2. This classification helps determine the applicable tax rate, place of supply, time of supply and invoice requirements.",
        },
        {
          type: "compare",
          items: [
            {
              title: "Goods",
              text: "Movable property, subject to the statutory definition and exclusions.",
              examples: ["Laptop", "Keyboard", "Computer monitor", "RAM or SSD"],
            },
            {
              title: "Services",
              text: "Activities other than goods, money and securities, with specific inclusions under the law.",
              examples: ["Laptop repair", "Website development", "Bookkeeping", "Computer rental"],
            },
          ],
        },
        { type: "heading", text: "Business example" },
        {
          type: "paragraph",
          text: "Suppose an IT business sells a laptop and charges separately for a repair service.",
        },
        {
          type: "table",
          headers: ["Item", "Assumed taxable value"],
          rows: [
            ["Laptop", "₹40,000"],
            ["Repair service", "₹2,000"],
          ],
          footer: ["Total before GST", "₹42,000"],
          numeric: [1],
        },
        {
          type: "paragraph",
          text: "For practice, assume both items attract 18% GST and are separate taxable supplies.",
        },
        {
          type: "example",
          rows: [
            { label: "Total before GST", value: "₹42,000" },
            { label: "GST = ₹42,000 × 18%", value: "₹7,560" },
          ],
          total: { label: "Total invoice", value: "₹49,560" },
        },
        {
          type: "note",
          text: "In actual accounting, check each item's classification, rate, place of supply and whether the items form a composite or mixed supply.",
        },
      ],
    },
    {
      title: "Business, consideration and taxable person",
      blocks: [
        { type: "heading", text: "A. Business" },
        {
          type: "paragraph",
          text: "The GST definition of business is broad. It can include trade, commerce, manufacture, profession, vocation, certain activities incidental to business and specified activities undertaken even without a profit motive.",
        },
        {
          type: "paragraph",
          text: "For example, a company selling computers, a consultant providing bookkeeping services and a business renting office equipment may all be carrying on business for GST purposes. The actual transaction must still be tested under the law.",
        },
        { type: "heading", text: "B. Consideration" },
        {
          type: "paragraph",
          text: "Consideration is the payment or other value connected with a supply. It may be money or non-monetary value. Examples include:",
        },
        {
          type: "bullets",
          items: [
            "A customer pays ₹50,000 for a laptop.",
            "A client pays ₹10,000 for bookkeeping.",
            "A customer exchanges an old phone and pays an additional amount for a new phone.",
          ],
        },
        {
          type: "note",
          text: "A deposit is not automatically treated as payment for a supply when received; its treatment depends on the applicable provisions and whether it is applied as consideration.",
        },
        { type: "heading", text: "C. Taxable person" },
        {
          type: "paragraph",
          text: "Under Section 2(107) of the CGST Act, a taxable person is generally a person registered or liable to be registered under Section 22 or Section 24.",
        },
        {
          type: "tip",
          title: "Keep in mind",
          text: "This is different from saying that every person who makes a sale must automatically charge GST. Registration thresholds, compulsory-registration rules, exemptions and other conditions matter.",
        },
        {
          type: "link",
          label: "Official source",
          text: "CGST Act, 2017 — Section 2, definitions (CBIC)",
          href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter1/section2_v1.00.html",
        },
      ],
    },
    {
      title: "Aggregate turnover",
      blocks: [
        {
          type: "paragraph",
          text: "Aggregate turnover is a key GST concept used, among other things, when assessing registration thresholds and certain scheme eligibility requirements.",
        },
        {
          type: "paragraph",
          text: "Under Section 2(6) of the CGST Act, it is calculated on an all-India basis for persons having the same PAN. It broadly includes:",
        },
        {
          type: "bullets",
          items: ["Taxable supplies", "Exempt supplies", "Exports of goods or services", "Inter-state supplies"],
        },
        {
          type: "note",
          text: "It excludes GST taxes themselves and the value of inward supplies on which the person is liable to pay tax under reverse charge.",
        },
        { type: "heading", text: "Worked example" },
        {
          type: "paragraph",
          text: "Imagine a business with the same PAN operating in Punjab and Haryana.",
        },
        {
          type: "table",
          headers: ["Transaction", "Value"],
          rows: [
            ["Taxable sales in Punjab", "₹18,00,000"],
            ["Taxable sales in Haryana", "₹7,00,000"],
            ["Exempt supplies", "₹2,00,000"],
            ["Exports", "₹3,00,000"],
            ["GST charged on invoices", "₹5,40,000"],
          ],
          numeric: [1],
        },
        {
          type: "example",
          rows: [
            { label: "Taxable sales in Punjab", value: "₹18,00,000" },
            { label: "Taxable sales in Haryana", value: "₹7,00,000" },
            { label: "Exempt supplies", value: "₹2,00,000" },
            { label: "Exports", value: "₹3,00,000" },
          ],
          total: { label: "Aggregate turnover", value: "₹30,00,000" },
        },
        {
          type: "tip",
          title: "Note",
          text: "The ₹5,40,000 GST charged is not added to aggregate turnover.",
        },
        { type: "heading", text: "Important distinction" },
        { type: "paragraph", text: "Aggregate turnover is not the same as:" },
        {
          type: "bullets",
          items: ["Profit", "Bank deposits", "Net income", "Turnover of just one state registration"],
        },
        {
          type: "note",
          text: "The exact calculation can require additional adjustments depending on the transactions involved.",
        },
      ],
    },
    {
      title: "Composite supply and mixed supply",
      blocks: [
        {
          type: "paragraph",
          text: "These concepts are especially important when an invoice contains multiple items sold together.",
        },
        { type: "heading", text: "A. Composite supply" },
        {
          type: "paragraph",
          text: "A composite supply consists of two or more taxable supplies that are naturally bundled and supplied together in the ordinary course of business, with one principal supply.",
        },
        {
          type: "paragraph",
          text: "Under Section 8 of the CGST Act, the composite supply is treated according to its principal supply.",
        },
        {
          type: "cards",
          items: [
            {
              title: "Example: Laptop delivered with ordinary packing and delivery",
              text: "Suppose a business sells a laptop with normal packaging and delivery as part of the ordinary transaction. If the arrangement qualifies as a composite supply, with the laptop as the principal supply, the GST treatment generally follows that principal supply. The result depends on the actual contractual arrangement and whether the supplies are naturally bundled.",
            },
          ],
        },
        { type: "heading", text: "B. Mixed supply" },
        {
          type: "paragraph",
          text: "A mixed supply consists of two or more individual supplies sold together for a single price, where the package does not qualify as a composite supply.",
        },
        {
          type: "paragraph",
          text: "Under Section 8, the mixed supply is generally taxed at the rate applicable to the individual supply attracting the highest rate.",
        },
        {
          type: "cards",
          items: [
            {
              title: "Example: A promotional gift hamper",
              text: "A business sells chocolates, snacks, a drink and other independent products together in one hamper for a single price. Assume the items are not naturally bundled. This may qualify as a mixed supply. If the highest applicable rate among the items is 18%, the mixed supply would generally attract that rate, subject to the actual classification and applicable rules.",
            },
          ],
        },
        { type: "heading", text: "Compare the two" },
        {
          type: "table",
          headers: ["Feature", "Composite supply", "Mixed supply"],
          rows: [
            ["Bundling", "Naturally bundled", "Not naturally bundled"],
            ["Single price", "May be sold for one price", "Single price is a key condition"],
            ["Tax treatment", "Follows principal supply", "Generally follows the highest-rate item"],
            ["Example", "Goods with ordinary packing and delivery", "Independent products sold as one gift hamper"],
          ],
        },
        {
          type: "tip",
          title: "Memory tip",
          text: "Composite = principal supply. Mixed = highest rate.",
        },
        {
          type: "link",
          label: "Official source",
          text: "CGST Act, 2017 — Section 8 (CBIC)",
          href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter3/section8_v1.00.html",
        },
      ],
    },
    {
      title: "HSN codes and SAC codes",
      blocks: [
        { type: "paragraph", text: "Classification codes help identify what is being supplied." },
        {
          type: "list",
          items: [
            { term: "HSN", text: "means Harmonized System of Nomenclature and is used to classify goods." },
            { term: "SAC", text: "means Services Accounting Code and is used to classify services." },
          ],
        },
        {
          type: "note",
          text: "The applicable classification and the number of digits required on an invoice depend on the relevant rules, notifications and taxpayer category. Don't assume that one HSN or SAC code is correct merely because the product or service has a familiar name.",
        },
        { type: "heading", text: "Examples" },
        {
          type: "table",
          headers: ["Business item", "Classification type"],
          rows: [
            ["Laptop computer", "HSN"],
            ["Keyboard", "HSN"],
            ["Computer repair", "SAC"],
            ["Bookkeeping service", "SAC"],
            ["Website development", "SAC"],
          ],
        },
        {
          type: "paragraph",
          text: "These examples identify the type of code needed, not the exact classification number.",
        },
        { type: "heading", text: "How to check a code" },
        {
          type: "steps",
          items: [
            {
              title: "Identify the exact item",
              text: "Identify the exact product or service, including its specifications and intended use.",
            },
            {
              title: "Search official sources",
              text: "Search the official GST portal or applicable tariff/classification material.",
            },
            {
              title: "Check the rate separately",
              text: "Check the current rate notification and relevant conditions separately.",
            },
            {
              title: "Document your reasoning",
              text: "Record the classification and supporting reasoning in your accounting or tax working papers.",
            },
          ],
        },
        { type: "heading", text: "Official resources" },
        {
          type: "links",
          items: [
            {
              label: "GST Portal — Search HSN/SAC code",
              href: "https://services.gst.gov.in/services/searchhsnsac",
              text: "look up codes and descriptions.",
            },
            {
              label: "GST Portal — Registration tutorial",
              href: "https://tutorial.gst.gov.in/userguide/registration/index.htm",
              text: "step-by-step portal guidance.",
            },
            {
              label: "CBIC — Tax invoice rules (Rule 46)",
              href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter6/rule46_v1.00.html",
              text: "what a tax invoice must show, including HSN/SAC.",
            },
          ],
        },
      ],
    },
    {
      title: "Understanding the 15-digit GSTIN",
      blocks: [
        {
          type: "paragraph",
          text: "A GSTIN is the Goods and Services Tax Identification Number assigned to a GST registration. It contains 15 characters.",
        },
        { type: "paragraph", text: "Here is an illustrative example of the structure:" },
        {
          type: "gstin",
          segments: [
            { chars: "27", label: "State code" },
            { chars: "ABCDE1234F", label: "PAN" },
            { chars: "1", label: "Entity number" },
            { chars: "Z", label: "Default character" },
            { chars: "5", label: "Checksum" },
          ],
          caption: "Illustrative format only; this example is not intended to represent a verified taxpayer registration.",
        },
        {
          type: "table",
          headers: ["Position", "Meaning"],
          rows: [
            ["1–2", "State or Union Territory code"],
            ["3–12", "PAN of the taxpayer"],
            ["13", "Entity number for that PAN within the State/UT"],
            ["14", "Usually the letter Z in the standard format"],
            ["15", "Checksum character"],
          ],
        },
        { type: "heading", text: "Why accountants need to understand GSTINs" },
        {
          type: "paragraph",
          text: "Before recording a purchase invoice or issuing a sales invoice, verify that:",
        },
        {
          type: "bullets",
          items: [
            "The supplier's GSTIN is recorded correctly.",
            "The registered business name and relevant address match the records.",
            "The registration status and applicable details have been checked where necessary.",
            "The invoice's tax treatment is consistent with the transaction.",
          ],
        },
        {
          type: "caution",
          text: "A GSTIN format that looks valid does not by itself prove that a registration is active or that an invoice qualifies for input tax credit.",
        },
        {
          type: "link",
          label: "Check a GSTIN",
          text: "GST Portal — Search Taxpayer",
          href: "https://services.gst.gov.in/services/searchtp",
        },
      ],
    },
    {
      title: "Exempt, nil-rated, zero-rated and non-GST supplies",
      blocks: [
        {
          type: "paragraph",
          text: "These terms are not interchangeable. Correct classification affects invoicing, returns and input tax credit.",
        },
        {
          type: "table",
          headers: ["Category", "Meaning", "General ITC treatment"],
          rows: [
            ["Taxable supply", "A supply on which GST is leviable", "Eligible ITC may be available subject to conditions"],
            [
              "Nil-rated supply",
              "A supply with a nil rate of GST under the applicable rate schedule",
              "Generally treated as exempt supply; ITC attributable to exempt supplies is restricted",
            ],
            [
              "Exempt supply",
              "A supply exempted by notification or attracting a nil rate; the statutory definition also includes non-taxable supplies",
              "ITC attributable to exempt supplies is generally restricted",
            ],
            [
              "Zero-rated supply",
              "Exports and qualifying supplies to SEZ developers or SEZ units under the IGST Act",
              "Eligible ITC may be available, subject to statutory conditions",
            ],
            [
              "Non-GST/non-taxable supply",
              "A supply on which GST is not leviable under the GST Acts",
              "Treatment differs from zero-rated supply; relevant ITC restrictions apply",
            ],
          ],
        },
        {
          type: "note",
          text: "The statutory definitions are found in the CGST Act and IGST Act. In particular, zero-rated supplies are dealt with under Section 16 of the IGST Act, while exempt supply is defined in Section 2(47) of the CGST Act.",
        },
        { type: "heading", text: "Example: Why zero-rated is different" },
        {
          type: "paragraph",
          text: "Suppose an eligible Indian business exports a service that qualifies as a zero-rated supply.",
        },
        {
          type: "paragraph",
          text: "The supply can qualify for the zero-rating mechanism even though the customer is outside India. Subject to the applicable conditions, the exporter may be able to make the supply under a Letter of Undertaking without payment of IGST and claim a refund of eligible unutilised ITC.",
        },
        {
          type: "caution",
          text: "Zero-rated does not simply mean “exempt.” It has a specific legal meaning and a distinct ITC/refund framework. Always verify the current statutory provisions, documentation and refund conditions before applying this treatment.",
        },
        { type: "heading", text: "Official references" },
        {
          type: "links",
          items: [
            { label: "CBIC — CGST Act", href: "https://cbic-gst.gov.in/gst-acts.html", text: "GST Acts, including the CGST Act." },
            {
              label: "CBIC — IGST Act, Section 16",
              href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_IGST_Act/active/chaptervii/section16_v1.00.html",
              text: "zero-rated supply.",
            },
            {
              label: "CBIC — Input Tax Credit rules (Rule 42)",
              href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter5/rule42_v1.00.html",
              text: "reversing credit attributable to exempt supplies.",
            },
          ],
        },
      ],
    },
    {
      title: "Module 3 — Knowledge check",
      blocks: [
        {
          type: "paragraph",
          text: "Answer these five questions. Choose one answer for each, then press Check answers to see your score and explanations. Score at least 4 out of 5 to move on to the practical exercises.",
        },
        {
          type: "knowledge-check",
          passCount: 4,
          questions: [
            {
              question: "Which section of the CGST Act sets out the meaning and scope of “supply”?",
              options: ["Section 2(6)", "Section 7", "Section 8", "Section 22"],
              answer: 1,
              explanation:
                "Section 7 covers the scope of supply. Section 2(6) defines aggregate turnover, Section 8 deals with composite and mixed supplies, and Section 22 with registration.",
            },
            {
              question: "How is a composite supply generally taxed?",
              options: [
                "At the rate of its principal supply",
                "At the highest rate of any item in the bundle",
                "At the lowest rate of any item in the bundle",
                "Each item is always taxed separately",
              ],
              answer: 0,
              explanation:
                "A composite supply follows its principal supply. It is a mixed supply that generally takes the highest rate — remember: composite = principal, mixed = highest.",
            },
            {
              question:
                "A business (one PAN) has taxable supplies of ₹20,00,000, exempt supplies of ₹3,00,000, exports of ₹2,00,000 and charges GST of ₹3,60,000. What is its aggregate turnover in this simplified example?",
              options: ["₹20,00,000", "₹22,00,000", "₹25,00,000", "₹28,60,000"],
              answer: 2,
              explanation:
                "₹20,00,000 + ₹3,00,000 + ₹2,00,000 = ₹25,00,000. Exempt supplies and exports are included, but the GST charged is not.",
            },
            {
              question: "In the illustrative GSTIN 27ABCDE1234F1Z5, what do characters 3 to 12 represent?",
              options: ["The State code", "The PAN of the taxpayer", "The entity number", "The checksum"],
              answer: 1,
              explanation:
                "Characters 3–12 are the taxpayer's PAN. Characters 1–2 are the State code, 13 is the entity number, 14 is usually Z and 15 is the checksum.",
            },
            {
              question: "Which statement about a zero-rated supply, such as a qualifying export, is correct?",
              options: [
                "It is the same as an exempt supply, so ITC is always restricted",
                "It has its own ITC and refund framework, and eligible ITC may be available",
                "It means no GST compliance is needed at all",
                "It applies only to supplies of goods, never services",
              ],
              answer: 1,
              explanation:
                "Zero-rated supplies (Section 16 of the IGST Act) have a distinct framework — eligible ITC may be available, for example through export under a Letter of Undertaking with a refund of unutilised ITC, subject to conditions. They cover goods and services.",
            },
          ],
        },
      ],
    },
    {
      title: "Practical exercises",
      blocks: [
        {
          type: "paragraph",
          text: "Put Module 3 into practice. Work out each answer first, then press Show answer to check your working. These are simplified practice cases — in real work, test each transaction against the law, current notifications and the actual facts.",
        },
        {
          type: "exercises",
          items: [
            {
              title: "Exercise 1 — Is it a supply?",
              task: [
                "For each transaction, decide whether it is a supply for GST purposes, and if so whether it is a supply of goods or services.",
                "(a) A bookkeeping firm charges a client ₹15,000 for monthly accounts.",
                "(b) A person gives a friend a watch as a personal birthday gift.",
                "(c) A business rents out office printers to another company every month.",
                "(d) A computer shop sells a laptop to a customer.",
              ],
              answer: [
                "(a) Supply of services — a fee for bookkeeping in the course of business.",
                "(b) Not automatically a supply — a personal gift isn't a supply merely because an item changes hands.",
                "(c) Supply of services — a usual rental arrangement.",
                "(d) Supply of goods — a sale for consideration in the course of business.",
              ],
            },
            {
              title: "Exercise 2 — Goods or services, HSN or SAC?",
              task: [
                "Classify each item as goods or services, and say which type of code it needs:",
                "(a) Computer monitor  (b) Website development  (c) RAM module  (d) Laptop repair",
              ],
              answer: [
                "(a) Goods → HSN.",
                "(b) Services → SAC.",
                "(c) Goods → HSN.",
                "(d) Services → SAC.",
                "This tells you the type of code only — look up the exact code and rate in official sources.",
              ],
            },
            {
              title: "Exercise 3 — Composite or mixed?",
              task: [
                "(a) A shop sells a laptop with its normal packing and delivery included in the ordinary course of business.",
                "(b) A store sells a festival hamper of sweets, dry fruits, a candle and a toy for one price. The items are not naturally bundled.",
                "Decide whether each is likely to be a composite or a mixed supply, and how it is generally taxed.",
              ],
              answer: [
                "(a) Likely a composite supply — naturally bundled, with the laptop as the principal supply. It generally takes the laptop's tax treatment.",
                "(b) Likely a mixed supply — independent items sold for a single price. It is generally taxed at the rate of the highest-rated item.",
                "In both cases, the actual contract and classification decide the final answer.",
              ],
            },
            {
              title: "Exercise 4 — Calculate aggregate turnover",
              task: [
                "A business with one PAN operates in Punjab and Delhi. For the year it has:",
                "Taxable sales in Punjab ₹12,00,000 · Taxable sales in Delhi ₹6,50,000 · Exempt supplies ₹1,50,000 · Exports ₹2,00,000 · GST charged on invoices ₹3,24,000 · Purchases on which it paid tax under reverse charge ₹80,000.",
                "Work out its aggregate turnover for this simplified example.",
              ],
              answer: [
                "Include: ₹12,00,000 + ₹6,50,000 + ₹1,50,000 + ₹2,00,000 = ₹22,00,000.",
                "Exclude the ₹3,24,000 GST charged and the ₹80,000 of inward supplies taxed under reverse charge.",
                "Aggregate turnover = ₹22,00,000 — calculated across both States because they share one PAN.",
              ],
            },
            {
              title: "Exercise 5 — Read a GSTIN",
              task: [
                "A purchase invoice shows the illustrative GSTIN 07AAACX9999K1Z3.",
                "Break it into its parts, and say what you should still check before recording the invoice and claiming credit.",
              ],
              answer: [
                "07 → State code (Delhi) · AAACX9999K → PAN · 1 → entity number · Z → default character · 3 → checksum.",
                "Still check, using the GST Portal's taxpayer search, that the registration is active and the name and address match the invoice, and that the tax charged suits the transaction.",
                "A valid-looking format alone doesn't prove the registration is active or that the invoice qualifies for ITC.",
              ],
            },
          ],
        },
      ],
    },
  ],
  3: [
    {
      title: "Who must register for GST?",
      blocks: [
        {
          type: "paragraph",
          text: "The first question is not simply, “How much did the business sell?” You must consider its aggregate turnover, state, type of supply and whether a compulsory-registration rule applies.",
        },
        {
          type: "paragraph",
          text: "Section 22 of the CGST Act deals with turnover-based registration. Section 24 lists categories that may require registration regardless of turnover, subject to applicable exemptions and notifications.",
        },
        { type: "paragraph", text: "A business should generally assess these factors:" },
        {
          type: "bullets",
          items: [
            "Its aggregate turnover across India for the same PAN.",
            "Whether it supplies goods, services or both.",
            "The State or Union Territory from which it makes taxable supplies.",
            "Whether a compulsory-registration provision applies.",
            "Whether an exemption or special notification applies.",
          ],
        },
        { type: "heading", text: "Example" },
        {
          type: "paragraph",
          text: "Suppose a sole proprietor operates a computer sales and repair business in Punjab.",
        },
        {
          type: "bullets",
          items: [
            "Annual aggregate turnover: ₹18 lakh.",
            "Activities: laptop sales and repair services.",
            "No special compulsory-registration rule applies.",
          ],
        },
        {
          type: "paragraph",
          text: "The proprietor must examine the applicable threshold for the business's actual activities. The ₹40 lakh threshold sometimes discussed for goods is not automatically available to a business supplying both goods and services.",
        },
        {
          type: "tip",
          title: "Watch out",
          text: "This distinction is especially important for retailers who also provide repair, installation or IT support services.",
        },
        { type: "heading", text: "Official sources" },
        {
          type: "links",
          items: [
            {
              label: "CGST Act — Section 22",
              href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter6/section22_v1.00.html",
              text: "persons liable for registration.",
            },
            {
              label: "CGST Act — Section 24",
              href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter6/section24_v1.00.html",
              text: "compulsory registration in certain cases.",
            },
          ],
        },
      ],
    },
    {
      title: "Turnover thresholds for GST registration",
      blocks: [
        {
          type: "paragraph",
          text: "The basic registration thresholds are based on aggregate turnover in a financial year, not monthly sales or profit.",
        },
        { type: "paragraph", text: "For an ordinary business in Punjab, the key reference points are:" },
        {
          type: "table",
          headers: ["Type of business", "General threshold"],
          rows: [
            ["Services or a business supplying goods and services", "₹20 lakh"],
            [
              "Business engaged exclusively in supplying eligible goods",
              "Up to ₹40 lakh, where the applicable exemption and its conditions are satisfied",
            ],
          ],
        },
        {
          type: "note",
          text: "The ₹40 lakh threshold comes from Notification No. 10/2019–Central Tax and applies subject to its conditions and exclusions. A business that also supplies taxable services should not automatically use it.",
        },
        { type: "heading", text: "What about special-category States?" },
        {
          type: "paragraph",
          text: "The threshold can differ by State and by the type of supply. The original framework provides for lower thresholds in specified special-category States, with subsequent changes and exemptions applying to particular States. Therefore, there is no single lower threshold that should be assumed for every State.",
        },
        {
          type: "paragraph",
          text: "For a practical GST registration decision, verify the current applicable State notification rather than relying only on the term “special-category State.”",
        },
        { type: "heading", text: "Example: Three businesses" },
        {
          type: "cases",
          items: [
            {
              title: "Business A — Goods only in Punjab",
              stat: { label: "Annual aggregate turnover", value: "₹32 lakh" },
              text: "May qualify for the goods threshold exemption up to ₹40 lakh if all notification conditions are satisfied and no compulsory-registration rule applies.",
            },
            {
              title: "Business B — Bookkeeping services in Punjab",
              stat: { label: "Annual aggregate turnover", value: "₹18 lakh" },
              text: "Generally below the ₹20 lakh threshold, assuming no compulsory-registration rule or other special condition applies.",
            },
            {
              title: "Business C — Laptop sales and repair",
              stat: { label: "Annual aggregate turnover", value: "₹24 lakh" },
              text: "The business supplies goods and services, so the ₹40 lakh exclusive-goods exemption should not be assumed to apply.",
            },
          ],
        },
        {
          type: "tip",
          title: "Remember",
          text: "A business below its usual turnover threshold may still need registration if a compulsory-registration rule applies. Conversely, some categories of suppliers have specific exemptions from compulsory registration.",
        },
      ],
    },
    {
      title: "Compulsory registration regardless of turnover",
      blocks: [
        {
          type: "paragraph",
          text: "Section 24 of the CGST Act lists categories that may require registration even when turnover is below the normal threshold. However, the section must be read alongside exemptions and later notifications.",
        },
        { type: "paragraph", text: "Important categories include:" },
        {
          type: "bullets",
          items: [
            "Certain persons making inter-state taxable supplies.",
            "Casual taxable persons making taxable supplies.",
            "Non-resident taxable persons making taxable supplies.",
            "Persons liable to register as tax deductors or tax collectors under specified provisions.",
            "Input Service Distributors (ISDs).",
            "Certain agents supplying on behalf of other taxable persons.",
            "Certain e-commerce operators and suppliers using e-commerce platforms.",
            "Persons liable under specified reverse-charge provisions.",
          ],
        },
        { type: "heading", text: "Important exceptions" },
        {
          type: "caution",
          text: "Do not teach or apply the rule as “every inter-state seller must register.” For example, specified small suppliers of inter-state taxable services can qualify for an exemption, subject to the applicable conditions. Special exemptions also exist for certain other categories.",
        },
        {
          type: "tip",
          title: "Practical rule",
          text: "Identify the exact business activity, then check Section 24 and the relevant notification before concluding that registration is compulsory.",
        },
        { type: "heading", text: "Official references" },
        {
          type: "links",
          items: [
            {
              label: "CGST Act — Section 24 (CBIC)",
              href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter6/section24_v1.00.html",
              text: "compulsory registration in certain cases.",
            },
            {
              label: "GST Council — Registration under GST law",
              href: "https://gstcouncil.gov.in/sites/default/files/e-version-gst-flyers/Registration_under_GST_Law_new.pdf",
              text: "official explainer flyer (PDF).",
            },
          ],
        },
      ],
    },
    {
      title: "Voluntary GST registration",
      blocks: [
        {
          type: "paragraph",
          text: "Section 25(3) permits a person who is not otherwise liable to register to obtain registration voluntarily. Once registered, the person generally has the obligations of a registered taxpayer.",
        },
        { type: "heading", text: "Why might a small business register voluntarily?" },
        {
          type: "bullets",
          items: [
            "Its business customers require GST-compliant invoices.",
            "It expects to cross the registration threshold soon.",
            "Eligible input tax credit is commercially useful.",
            "It wants a formal GST registration for its business operations.",
          ],
        },
        { type: "heading", text: "Example" },
        {
          type: "paragraph",
          text: "A small IT business has turnover of ₹12 lakh and is not otherwise required to register.",
        },
        {
          type: "paragraph",
          text: "It voluntarily registers. It must then follow the applicable invoicing, return-filing, payment and record-keeping requirements. It cannot simply collect GST and ignore returns because its turnover is small.",
        },
        {
          type: "tip",
          title: "Before registering voluntarily",
          text: "Compare the benefits of registration with the costs of ongoing compliance. Registration is not automatically advantageous for every small business.",
        },
        {
          type: "link",
          label: "Official source",
          text: "CGST Act — Section 25 (CBIC)",
          href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter6/section25_v1.00.html",
        },
      ],
    },
    {
      title: "Documents required for GST registration",
      blocks: [
        {
          type: "paragraph",
          text: "The documents depend on the business structure, address and type of registration. Prepare the following checklist before starting the application.",
        },
        {
          type: "checklist",
          title: "Registration document checklist",
          items: [
            { title: "PAN", text: "PAN of the proprietor or business entity, as applicable" },
            {
              title: "Identity and contact details",
              text: "Details of the proprietor, partners, directors and authorised signatory, as applicable",
            },
            {
              title: "Photograph",
              text: "Photograph of the relevant proprietor, partners or authorised signatory where required",
            },
            {
              title: "Business address proof",
              text: "Ownership evidence, rent/lease agreement, or consent documentation with supporting proof, depending on the premises",
            },
            {
              title: "Constitution documents",
              text: "Partnership deed, certificate of incorporation, or other applicable business-constitution documents",
            },
            { title: "Authorisation", text: "Authorisation letter or board resolution where applicable" },
            {
              title: "Bank details",
              text: "Bank account details and supporting evidence where required by the applicable process",
            },
            {
              title: "Digital submission",
              text: "Access to the registered email and mobile number for OTP verification; DSC where mandatory",
            },
          ],
        },
        {
          type: "note",
          text: "The GST Portal's registration manual explains the application fields and address-document requirements. Different entity types and premises arrangements may require different supporting documents.",
        },
        {
          type: "link",
          label: "Official guide",
          text: "Apply for Registration — GST Portal",
          href: "https://tutorial.gst.gov.in/userguide/registration/Apply_for_Registration_Normal_Taxpayer.htm",
        },
      ],
    },
    {
      title: "Step-by-step registration on the GST Portal",
      blocks: [
        {
          type: "link",
          label: "Use the official website",
          text: "www.gst.gov.in",
          href: "https://www.gst.gov.in/",
        },
        {
          type: "steps",
          items: [
            {
              title: "Start a new registration",
              text: "Open Services → Registration → New Registration. Select the appropriate taxpayer type, State/UT and district.",
            },
            {
              title: "Complete Part A",
              text: "Enter the legal name as recorded against the PAN, PAN, email address and mobile number. Verify the OTPs and obtain the Temporary Reference Number (TRN).",
            },
            {
              title: "Complete Part B",
              text: "Use the TRN to continue the application. Fill in business details, promoters/partners, authorised signatory, principal and additional places of business, and goods/services information.",
            },
            {
              title: "Upload supporting documents",
              text: "Upload the appropriate address and constitution evidence, photographs and other required information.",
            },
            {
              title: "Verify and submit",
              text: "Complete the declaration and submit using the permitted electronic verification method. A Digital Signature Certificate (DSC) is mandatory for certain applicants, including companies and LLPs under the applicable process.",
            },
            {
              title: "Track the application",
              text: "Save the Application Reference Number (ARN), monitor the status and respond to any clarification notice within the stated time. After approval, download the registration certificate.",
            },
          ],
        },
        {
          type: "note",
          text: "The official GST Portal guide describes the application process, OTP validation, TRN, supporting information and submission requirements.",
        },
        { type: "heading", text: "Time limit to apply" },
        {
          type: "paragraph",
          text: "Section 25 generally requires a person liable to register to apply within 30 days of becoming liable. Casual taxable persons and non-resident taxable persons generally must apply at least five days before starting business. Specific cases can have different requirements.",
        },
        { type: "heading", text: "What happens after submission?" },
        {
          type: "paragraph",
          text: "The application may be processed through the applicable verification route. A tax officer may request clarification or additional documents. A submitted application is not the same as an approved registration.",
        },
        {
          type: "tip",
          title: "Once registration is granted",
          text: "Check the certificate, GSTIN, registered name, business address and applicable registration details carefully.",
        },
      ],
    },
    {
      title: "Amending registration details",
      blocks: [
        {
          type: "paragraph",
          text: "If your business information changes after registration, you may need to amend your GST registration rather than apply for a completely new GSTIN. Examples include:",
        },
        {
          type: "bullets",
          items: [
            "A change to the legal name.",
            "A change in business constitution.",
            "A change in business address.",
            "Addition or removal of an additional place of business.",
            "A change in authorised signatory or contact details.",
          ],
        },
        { type: "heading", text: "Important 2026 update — recommended, not yet in force" },
        {
          type: "paragraph",
          text: "At its 57th meeting on 8 October 2026, the GST Council recommended amending rule 19 of the CGST Rules so that amendments to all registration particulars are accepted automatically on the portal, except those relating to the principal place of business. For taxpayers registered under rule 14A (the automatic route), amendments to all particulars, including the principal place of business, would be accepted automatically.",
        },
        {
          type: "paragraph",
          text: "The CBIC FAQs published on 9 October 2026 explain that this would turn changes to the legal name, constitution of business and additional places of business — currently core amendments needing officer approval — into automatically processed amendments.",
        },
        {
          type: "caution",
          text: "These are recommendations. They take effect only once the rule amendment is notified, so until then follow the current GST Portal workflow and check for the notification before filing.",
        },
        { type: "heading", text: "General process" },
        {
          type: "steps",
          items: [
            { title: "Log in", text: "Log in to the GST Portal." },
            { title: "Open the amendment form", text: "Open Services → Registration → Amendment of Registration." },
            { title: "Choose the amendment type", text: "Select the appropriate core or non-core amendment option." },
            { title: "Update the details", text: "Update the relevant details and upload supporting evidence if required." },
            { title: "Verify and submit", text: "Complete verification and submit." },
            { title: "Track it", text: "Save the ARN and monitor the status." },
          ],
        },
        {
          type: "note",
          text: "Non-core amendments generally do not require approval by a tax officer, while core amendments may require processing and approval under the applicable rules. The exact treatment depends on the field and current procedure.",
        },
        { type: "heading", text: "Official references" },
        {
          type: "links",
          items: [
            { label: "Amendment of Non-Core Fields", href: "https://tutorial.gst.gov.in/userguide/registration/Non-Core_Fields.htm", text: "GST Portal user guide." },
            {
              label: "Amendment of Core Fields",
              href: "https://tutorial.gst.gov.in/userguide/registration/Amendment_of_Registration_-_Core_Fields.htm",
              text: "GST Portal user guide.",
            },
            { label: "PIB — Recommendations of the 57th GST Council meeting", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2320934&reg=48&lang=1", text: "8 October 2026." },
            { label: "GST Council — FAQs on the 57th meeting recommendations", href: "https://www.gstcouncil.gov.in/sites/default/files/2026-10/faqs_on_recommendations_made_in_57th_gst_council_meeting.pdf", text: "PDF, 9 October 2026." },
          ],
        },
      ],
    },
    {
      title: "Cancellation and revocation of GST registration",
      blocks: [
        { type: "paragraph", text: "Cancellation and revocation are different processes." },
        {
          type: "list",
          items: [
            {
              term: "Cancellation",
              text: "The GST registration is cancelled, either on the taxpayer's application or by the proper officer under the law.",
            },
            {
              term: "Revocation",
              text: "An application to restore a registration that was cancelled by the proper officer on their own motion, where revocation is legally available.",
            },
          ],
        },
        { type: "heading", text: "A. When can a business apply for cancellation?" },
        { type: "paragraph", text: "Common situations include:" },
        {
          type: "bullets",
          items: [
            "The business has permanently closed.",
            "The business has been transferred or disposed of.",
            "A change in constitution results in a new PAN.",
            "The business is no longer liable to be registered and qualifies for cancellation.",
            "Other circumstances permitted under the applicable GST rules.",
          ],
        },
        {
          type: "tip",
          title: "Don't cancel too quickly",
          text: "A business should not cancel registration merely because sales have temporarily fallen. It must determine whether it is legally eligible for cancellation and whether any continuing registration obligation exists.",
        },
        { type: "heading", text: "B. How to apply for cancellation" },
        {
          type: "steps",
          items: [
            { title: "Log in", text: "Log in to the official GST Portal (www.gst.gov.in)." },
            {
              title: "Open the cancellation form",
              text: "Navigate to Services → Registration → Application for Cancellation of Registration.",
            },
            { title: "Complete FORM GST REG-16", text: "Include the reason and relevant details." },
            {
              title: "Provide the particulars",
              text: "Provide the required information about stock, liabilities and other particulars applicable to the case.",
            },
            { title: "Submit", text: "Submit the application and save the acknowledgement." },
            { title: "Follow up", text: "Monitor the application and complete any required response or follow-up." },
          ],
        },
        {
          type: "note",
          text: "The application in FORM GST REG-16 is made under rule 20 of the CGST Rules. At its 57th meeting, the GST Council also recommended automatic acceptance of REG-16 applications once all pending returns are filed and dues paid — a change that applies only after the law and rules are amended.",
        },
        {
          type: "caution",
          text: "Cancellation does not erase past obligations. The taxpayer may still need to file outstanding returns, pay tax and applicable interest or penalties, and comply with final-return requirements. A final return in FORM GSTR-10 is generally required where applicable, subject to the statutory exceptions.",
        },
        { type: "heading", text: "C. What is revocation of cancellation?" },
        {
          type: "paragraph",
          text: "If the proper officer cancels a registration on their own motion, the taxpayer may be able to apply for revocation using FORM GST REG-21, subject to the statutory conditions.",
        },
        {
          type: "paragraph",
          text: "The current text of Rule 23 provides a general application period of 90 days from service of the cancellation order, which can be extended by up to 180 days on sufficient cause. Where cancellation resulted from failure to file returns, the required outstanding returns and applicable dues must be addressed before revocation can be sought.",
        },
        {
          type: "note",
          text: "Do not confuse revocation with a fresh registration application or assume that revocation is available for every cancellation. If registration was cancelled on the taxpayer's own application, the appropriate route may be different.",
        },
        { type: "heading", text: "Official references" },
        {
          type: "links",
          items: [
            { label: "CGST Rules — Rule 20", href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter3/rule20_v1.00.html", text: "application for cancellation (REG-16)." },
            { label: "CGST Rules — Rule 23", href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter3/rule23_v1.00.html", text: "revocation of cancellation (REG-21)." },
          ],
        },
      ],
    },
    {
      title: "Module 4 — Knowledge check",
      blocks: [
        {
          type: "paragraph",
          text: "Answer these five questions. Choose one answer for each, then press Check answers to see your score and explanations. Score at least 4 out of 5 to move on to the practical exercises.",
        },
        {
          type: "knowledge-check",
          passCount: 4,
          questions: [
            {
              question:
                "An ordinary business in Punjab sells laptops and also provides repair services. Which general registration threshold applies?",
              options: ["₹10 lakh", "₹20 lakh", "₹40 lakh", "There is no threshold"],
              answer: 1,
              explanation:
                "A business supplying both goods and services generally uses the ₹20 lakh threshold. The ₹40 lakh exemption is only for businesses exclusively supplying eligible goods, subject to its conditions.",
            },
            {
              question:
                "Under Section 25, how soon must a person who becomes liable to register generally apply?",
              options: ["Within 5 days", "Within 15 days", "Within 30 days", "Within 90 days"],
              answer: 2,
              explanation:
                "The general rule is within 30 days of becoming liable. Casual and non-resident taxable persons generally apply at least five days before starting business.",
            },
            {
              question: "Which statement about voluntary GST registration is correct?",
              options: [
                "It lets a small business collect GST without filing returns",
                "Once registered, the business must follow the usual invoicing, return, payment and record-keeping rules",
                "It is only available once turnover crosses ₹20 lakh",
                "It is always the best option for every small business",
              ],
              answer: 1,
              explanation:
                "Section 25(3) allows voluntary registration, but the business then has the full obligations of a registered taxpayer. Compare the benefits with the compliance costs first.",
            },
            {
              question: "Which form does a taxpayer use to apply for cancellation of their own GST registration?",
              options: ["FORM GST REG-01", "FORM GST REG-14", "FORM GST REG-16", "FORM GST REG-21"],
              answer: 2,
              explanation:
                "REG-16 is the cancellation application. REG-01 is the registration application, REG-14 is used for amendments and REG-21 is for revocation of an officer's cancellation.",
            },
            {
              question:
                "A tax officer cancelled a registration on their own motion. Under the current Rule 23, how does the taxpayer seek to restore it?",
              options: [
                "Apply in FORM GST REG-16 within 30 days",
                "Apply for revocation in FORM GST REG-21, generally within 90 days of service of the order",
                "File FORM GSTR-10 at any time",
                "Only a fresh registration is possible",
              ],
              answer: 1,
              explanation:
                "Revocation is sought in REG-21, generally within 90 days of service of the cancellation order, which can be extended by up to 180 days on sufficient cause. Pending returns and dues must be cleared first where cancellation was for non-filing.",
            },
          ],
        },
      ],
    },
    {
      title: "Practical exercises",
      blocks: [
        {
          type: "paragraph",
          text: "Put Module 4 into practice. Work out each answer first, then press Show answer to check your working. These are simplified practice cases — in real work, check the current Act, rules and notifications for the exact facts.",
        },
        {
          type: "exercises",
          items: [
            {
              title: "Exercise 1 — Register or not?",
              task: [
                "Assume each business is in Punjab and no other special rule applies unless stated.",
                "(a) A trader selling only eligible goods, aggregate turnover ₹35 lakh, meeting all conditions of the goods exemption.",
                "(b) A consultant providing taxable services, aggregate turnover ₹22 lakh.",
                "(c) A laptop sales-and-repair shop, aggregate turnover ₹19 lakh.",
                "(d) A casual taxable person planning to make taxable supplies at a trade fair in Haryana, with small expected sales.",
              ],
              answer: [
                "(a) Generally not required — below the ₹40 lakh goods-only threshold, if all its conditions are met.",
                "(b) Required — above the ₹20 lakh threshold for services.",
                "(c) Generally not required — goods and services, so the ₹20 lakh threshold applies and ₹19 lakh is below it.",
                "(d) Generally required regardless of turnover under Section 24, unless a specific exemption applies — and the application is generally due at least five days before starting business.",
              ],
            },
            {
              title: "Exercise 2 — Work out the deadline",
              task: [
                "A services business crosses its registration threshold and becomes liable to register on 10 August 2026.",
                "By when should it generally apply for registration?",
              ],
              answer: [
                "Within 30 days of becoming liable — so by 9 September 2026.",
                "Applying early leaves time to answer any clarification request before registration is granted.",
              ],
            },
            {
              title: "Exercise 3 — Prepare the documents",
              task: [
                "A private limited company is registering for GST from rented premises.",
                "List the main documents and items it should prepare.",
              ],
              answer: [
                "Company PAN and certificate of incorporation (constitution document).",
                "Details and photographs of directors and the authorised signatory, plus a board resolution authorising the signatory.",
                "Address proof for rented premises — the rent or lease agreement with supporting proof.",
                "Bank account details where required.",
                "Registered email and mobile for OTPs, and a Digital Signature Certificate — DSC is mandatory for companies.",
              ],
            },
            {
              title: "Exercise 4 — Which amendment route?",
              task: [
                "A registered business (not registered under rule 14A) needs to: (a) move its principal place of business to a new address, and (b) change its legal name after a restructuring that keeps the same PAN.",
                "How should each change be approached today?",
              ],
              answer: [
                "(a) A change of principal place of business is a core amendment needing officer approval — and stays core even under the 57th Council's recommendations for registrations outside rule 14A.",
                "(b) A legal name change is currently a core amendment. The Council has recommended making it automatic, but until the rule 19 amendment is notified, follow the current core-amendment process and check for the notification.",
              ],
            },
            {
              title: "Exercise 5 — Cancellation or revocation?",
              task: [
                "(a) A proprietor permanently closes the business. What should they do about GST registration?",
                "(b) Another business's registration was cancelled by the officer for not filing returns, and the order was served on 1 July 2026. What should it do?",
              ],
              answer: [
                "(a) Apply for cancellation in FORM GST REG-16, clear any pending returns and dues, and file the final return in FORM GSTR-10 where applicable.",
                "(b) File the pending returns and pay the tax, interest, penalty and late fees due, then apply for revocation in FORM GST REG-21 — generally within 90 days of service of the order, i.e. by 29 September 2026, extendable by up to 180 days on sufficient cause.",
              ],
            },
          ],
        },
      ],
    },
  ],
  4: [
    overview(
      "Module 5 — GST Rates and Classification",
      [
        "Every GST invoice needs the right rate. In this module you'll learn how rates are set, what the current slabs are after the September 2025 changes, and how to find the correct rate for an item using HSN and SAC codes.",
      ],
      [
        "Explain how GST rates are decided and notified",
        "List the current GST rate slabs",
        "Split a rate into CGST and SGST, or charge it as IGST",
        "Describe the GST 2.0 changes from 22 September 2025",
        "Read an HSN code and a SAC code",
        "Find and document the correct rate for an item",
      ],
    ),
    screen(
      "How GST rates are set",
      p("GST rates are recommended by the GST Council and put into effect through rate notifications issued by the Central and State Governments."),
      steps(
        ["GST Council recommends", "The Council — the Union Finance Minister and State Finance Ministers — discusses and recommends rates."],
        ["Governments notify", "The Centre and the States issue rate notifications listing items and their rates."],
        ["Businesses apply", "Businesses charge the rate in the notification for each item's classification."],
      ),
      note("The notification — not a news report or a supplier's price list — is what decides the rate for an item."),
    ),
    screen(
      "The current GST rate slabs",
      table(
        ["Rate", "Broadly applies to"],
        [
          ["Nil (0%)", "Specified essential goods and services, such as certain unprocessed foods, as listed in the exemption and nil-rate notifications"],
          ["5%", "Merit and everyday-use goods and services"],
          ["18%", "The standard rate — most goods and services"],
          ["40%", "A special rate for select luxury and “sin” goods, such as aerated sugary drinks and large luxury cars"],
          ["3%", "Gold, silver, platinum and jewellery"],
          ["0.25%", "Diamonds and other precious and semi-precious stones"],
        ],
      ),
      note("These are broad categories, not a rate list. Always check the exact entry in the current rate notification for the item you are invoicing."),
    ),
    screen(
      "How the rate is split",
      p("The rate is the total GST. How it appears on the invoice depends on whether the supply is intra-state or inter-state (Module 2)."),
      table(
        ["Rate", "Intra-state", "Inter-state"],
        [
          ["5%", "2.5% CGST + 2.5% SGST", "5% IGST"],
          ["18%", "9% CGST + 9% SGST", "18% IGST"],
          ["40%", "20% CGST + 20% SGST", "40% IGST"],
        ],
      ),
      example(
        [["Taxable value", "₹50,000"], ["CGST at 9%", "₹4,500"], ["SGST at 9%", "₹4,500"]],
        ["Invoice total (intra-state, 18%)", "₹59,000"],
      ),
      p("The same supply to a customer in another State would show IGST at 18% = ₹9,000, with the same total of ₹59,000."),
    ),
    screen(
      "GST 2.0 — the September 2025 rate rationalisation",
      p("From 1 July 2017 until September 2025, most goods and services fell into four main slabs — 5%, 12%, 18% and 28% — with compensation cess on top for some goods."),
      p("On the recommendation of the 56th GST Council meeting, a simpler structure took effect on 22 September 2025:"),
      bullets(
        "Most items in the 12% slab moved to 5%.",
        "Most items in the 28% slab moved to 18%.",
        "A 40% rate was introduced for select luxury and sin goods.",
        "Compensation cess was removed for most goods, with GST rates adjusted instead.",
      ),
      { type: "link", label: "Official source", text: "PIB — Recommendations of the 56th GST Council meeting", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2163555&reg=48&lang=2" },
    ),
    screen(
      "When rates change",
      p("Rate changes create a practical question: which rate applies to a supply that straddles the change date?"),
      bullets(
        "The answer depends on the time of supply — when the goods or services were supplied, invoiced and paid for.",
        "Section 14 of the CGST Act sets out which rate applies when these events fall on different sides of the change.",
        "You'll learn the time of supply rules in Module 6.",
      ),
      caution("Don't simply use the invoice date. Transactions that straddle a rate change need the time of supply rules."),
    ),
    screen(
      "HSN codes for goods",
      p("Rates are linked to classification codes. Goods use HSN (Harmonised System of Nomenclature) codes, based on an international system used for customs."),
      table(
        ["HSN digits", "Level", "Example — a laptop"],
        [
          ["2", "Chapter", "84 — machinery and mechanical appliances"],
          ["4", "Heading", "8471 — automatic data-processing machines"],
          ["6", "Sub-heading", "847130 — portable machines such as laptops"],
          ["8", "Tariff item", "The most detailed level"],
        ],
      ),
      p("Each extra pair of digits narrows the description. The more digits, the more precisely the item is identified."),
    ),
    screen(
      "SAC codes for services",
      p("Services use SAC (Services Accounting Code) codes. All SAC codes start with 99."),
      table(
        ["SAC heading", "Services"],
        [
          ["9954", "Construction services"],
          ["9963", "Accommodation, food and beverage services"],
          ["9973", "Leasing or rental services without operator"],
          ["9982", "Legal and accounting services"],
          ["9983", "Other professional, technical and business services"],
        ],
      ),
      note("Like HSN, SAC codes become more detailed as digits are added. Use the most specific code that describes the service."),
    ),
    screen(
      "HSN and SAC on invoices",
      p("Tax invoices must show HSN or SAC codes. The minimum number of digits depends on the supplier's aggregate turnover in the previous financial year:"),
      table(
        ["Aggregate turnover in the previous year", "Minimum digits on invoices"],
        [
          ["Up to ₹5 crore", "4 digits"],
          ["Above ₹5 crore", "6 digits"],
        ],
      ),
      p("Codes are also reported in the HSN summary of the GSTR-1 return (Module 11)."),
    ),
    screen(
      "Finding the correct rate",
      steps(
        ["Describe the item exactly", "Material, use, specification and how it is sold."],
        ["Classify it", "Find the HSN or SAC code using the tariff and official search tools."],
        ["Find the rate entry", "Look up that code in the current rate notification, including any conditions."],
        ["Record your reasoning", "Keep a note of the code, notification entry and date checked."],
      ),
      { type: "link", label: "Search codes", text: "GST Portal — Search HSN/SAC code", href: "https://services.gst.gov.in/services/searchhsnsac" },
      tip("Why record your reasoning?", "If a tax officer questions a rate, a note of the code, notification and date checked shows the business took care."),
    ),
    screen(
      "Worked example: an invoice with two rates",
      p("A Mumbai stationery trader sells to a customer in Pune (both in Maharashtra). The invoice has two items. The rates below are assumed for the example."),
      table(
        ["Item", "Value", "Rate", "CGST", "SGST"],
        [
          ["Exercise notebooks", "₹20,000", "5%", "₹500", "₹500"],
          ["Office files", "₹50,000", "18%", "₹4,500", "₹4,500"],
        ],
        { footer: ["Total", "₹70,000", "", "₹5,000", "₹5,000"], numeric: [1, 3, 4] },
      ),
      p("Invoice total = ₹70,000 + ₹10,000 GST = ₹80,000."),
      p("If the same goods were sold to a customer in Delhi, the tax would be IGST: ₹1,000 + ₹9,000 = ₹10,000, and the total would still be ₹80,000."),
    ),
    mistakes(
      ["Using an old rate", "Rates changed on 22 September 2025. Always check the current notification."],
      ["Guessing the classification", "Use the tariff and official search; record your reasoning."],
      ["Applying one rate to a whole invoice", "Each item is taxed at the rate for its own classification."],
      ["Charging IGST on an intra-state supply", "Intra-state supplies split into CGST + SGST."],
      ["Too few HSN digits", "Above ₹5 crore turnover, invoices need at least 6 digits."],
    ),
    check(
      5,
      q("What finally decides the GST rate for an item?", ["A news report", "The applicable rate notification", "The supplier's price list", "The customer's request"], 1, "The Council recommends rates, but the notification is what applies."),
      q("What is the standard GST rate for most goods and services after GST 2.0?", ["5%", "12%", "18%", "28%"], 2, "18% is the standard rate."),
      q("From which date did the GST 2.0 rate structure take effect?", ["1 July 2017", "1 April 2025", "22 September 2025", "1 February 2026"], 2, "22 September 2025, after the 56th Council meeting."),
      q("An 18% intra-state supply is shown on the invoice as:", ["18% IGST", "9% CGST + 9% SGST", "18% CGST + 18% SGST", "12% CGST + 6% SGST"], 1, "Intra-state supplies split the rate equally."),
      q("A business had ₹7 crore turnover last year. How many HSN digits must its invoices show?", ["2", "4", "6", "8"], 2, "Above ₹5 crore, at least 6 digits."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Split the rate",
          ["A Jaipur supplier sells goods worth ₹40,000 at 5% to a customer in Udaipur (Rajasthan).", "Work out the tax and invoice total."],
          ["Intra-state: CGST 2.5% = ₹1,000 and SGST 2.5% = ₹1,000.", "Invoice total = ₹42,000."],
        ],
        [
          "Exercise 2 — Inter-state supply",
          ["The same supplier sells the same goods to a customer in Ahmedabad (Gujarat).", "What changes?"],
          ["Inter-state: IGST 5% = ₹2,000.", "The invoice total is still ₹42,000 — only the tax type changes."],
        ],
        [
          "Exercise 3 — Read an HSN code",
          ["What does each part of HSN 847130 tell you?"],
          ["84 = chapter (machinery), 8471 = heading (data-processing machines), 847130 = sub-heading (portable machines such as laptops)."],
        ],
      ),
    ),
    summary(
      [
        "How the GST Council recommends rates and Governments notify them",
        "The current slabs: nil, 5%, 18% and 40%, plus 3% and 0.25%",
        "How rates split into CGST + SGST or are charged as IGST",
        "The GST 2.0 changes from 22 September 2025",
        "HSN codes for goods and SAC codes for services",
        "How many HSN digits invoices need",
        "A step-by-step method to find and record the correct rate",
      ],
      "The right rate comes from the right classification. Classify carefully, check the current notification and record how you decided.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Time, Value and Place of Supply",
      [
        "Three questions decide how GST applies to every transaction: when is the tax due, on how much, and which tax applies? This module answers each one.",
      ],
      [
        "Work out the time of supply for goods and services",
        "Explain how advances are treated",
        "Calculate the value of supply, including incidental charges",
        "Treat discounts correctly",
        "Determine the place of supply for goods and services",
        "Decide between CGST + SGST and IGST",
      ],
    ),
    screen(
      "Three questions for every supply",
      table(
        ["Question", "Concept", "What it decides"],
        [
          ["When?", "Time of supply", "Which tax period (return) the GST belongs to — and which rate applies if rates change"],
          ["How much?", "Value of supply", "The amount GST is calculated on"],
          ["Where?", "Place of supply", "Whether the supply is intra-state (CGST + SGST) or inter-state (IGST)"],
        ],
      ),
    ),
    screen(
      "Time of supply — goods",
      p("Under Section 12 of the CGST Act, the time of supply of goods is generally the earlier of:"),
      bullets(
        "The date the invoice is issued, and",
        "The last date by which the invoice should have been issued.",
      ),
      p("For goods involving movement, the invoice should be issued before or at the time the goods are removed for delivery."),
      tip("Example", "Goods are dispatched on 28 March and the invoice is issued that day. The time of supply is 28 March — the GST belongs to March's return."),
    ),
    screen(
      "Time of supply — services",
      p("Under Section 13, the rule depends on whether the invoice is issued on time — generally within 30 days of the supply of service:"),
      table(
        ["Situation", "Time of supply"],
        [
          ["Invoice issued on time", "The earlier of the invoice date and the date payment is received"],
          ["Invoice not issued on time", "The earlier of the date of supply and the date payment is received"],
        ],
      ),
      tip("Example", "A consultant completes work on 5 May, issues the invoice on 20 May and is paid on 10 June. The invoice was issued within 30 days, so the time of supply is 20 May — the GST goes into May's return."),
    ),
    screen(
      "Advances",
      compare(
        ["Advances for goods", "For normal taxpayers, GST is generally not payable when an advance is received for goods. Tax is paid when the invoice is issued.", ["Notified exemption for advances on goods"]],
        ["Advances for services", "GST is payable when the advance is received, because payment can be the earlier event.", ["Issue a receipt voucher", "Adjust it against the final invoice"]],
      ),
      note("Special rules also apply to reverse charge, vouchers and some continuous supplies."),
    ),
    screen(
      "Value of supply — transaction value",
      p("GST is charged on the value of supply. Under Section 15, this is normally the transaction value — the price actually paid or payable — when:"),
      bullets(
        "The supplier and recipient are not related, and",
        "Price is the only consideration for the supply.",
      ),
      p("If either condition isn't met — for example, a sale to a related company — the valuation rules in the CGST Rules are used instead."),
    ),
    screen(
      "What to include in the value",
      bullets(
        "Taxes, duties and fees other than GST charged by the supplier.",
        "Amounts the supplier owes but the customer pays on the supplier's behalf.",
        "Incidental expenses charged to the customer, such as packing, commission and delivery by the supplier.",
        "Interest, late fees or penalties for delayed payment.",
        "Subsidies directly linked to the price (except those from the Central and State Governments).",
      ),
      example(
        [["Price of goods", "₹1,00,000"], ["Packing charged to customer", "₹2,000"], ["Delivery charged by supplier", "₹3,000"], ["Taxable value", "₹1,05,000"], ["GST at an assumed 18%", "₹18,900"]],
        ["Invoice total", "₹1,23,900"],
      ),
      note("GST itself is never part of the taxable value."),
    ),
    screen(
      "Discounts",
      p("Section 15(3) allows two kinds of discount to reduce the taxable value:"),
      cards(
        ["Before or at the time of supply", "Excluded from value if it is recorded on the invoice — for example, a trade discount shown on the tax invoice."],
        ["After the supply", "Excluded only if the supplier issues a credit note for it and the recipient reverses the input tax credit attributable to the discount."],
      ),
      caution("A discount that doesn't meet these conditions doesn't reduce the GST payable, even if it reduces the amount the customer pays."),
      { type: "link", label: "Official source", text: "CGST Act — Section 15 (CBIC)", href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter4/section15_v1.00.html" },
    ),
    screen(
      "Place of supply — goods",
      p("The place of supply rules are in Sections 10 to 13 of the IGST Act. For goods within India:"),
      table(
        ["Situation", "Place of supply"],
        [
          ["Goods that are moved", "Where the movement ends for delivery to the recipient"],
          ["Goods delivered on a third party's instructions (bill-to, ship-to)", "The principal place of business of the third party who gave the instructions"],
          ["Goods not moved", "Where the goods are at the time of delivery"],
          ["Goods assembled or installed at a site", "Where they are assembled or installed"],
        ],
      ),
    ),
    screen(
      "Place of supply — services",
      table(
        ["Situation", "Place of supply"],
        [
          ["General rule, registered recipient", "The recipient's location"],
          ["General rule, unregistered recipient", "The recipient's address on record, or else the supplier's location"],
          ["Services linked to immovable property (e.g. hotel stays)", "Where the property is located"],
          ["Restaurant, catering and similar services", "Where the services are actually performed"],
        ],
      ),
      caution("Many services have specific rules, and imports and exports follow separate provisions (Module 13). Check the relevant section before deciding the tax type."),
    ),
    screen(
      "Worked example: which tax applies?",
      p("A supplier registered in Karnataka (Bengaluru) makes three supplies:"),
      table(
        ["Supply", "Place of supply", "Tax"],
        [
          ["Goods delivered to a customer in Chennai", "Tamil Nadu (where movement ends)", "IGST — inter-state"],
          ["Consulting for a registered client in Mysuru", "Karnataka (recipient's location)", "CGST + SGST — intra-state"],
          ["Goods sold to a Delhi buyer and delivered, on its instructions, to its customer in Bengaluru", "Delhi (principal place of business of the buyer who gave the instructions)", "IGST — inter-state"],
        ],
      ),
      note("Compare the supplier's location with the place of supply. Same State = CGST + SGST; different States = IGST."),
    ),
    mistakes(
      ["Using the payment date for goods", "For goods, time of supply generally follows the invoice, not the payment."],
      ["Ignoring advances for services", "GST is payable when a service advance is received."],
      ["Leaving packing or delivery out of the value", "Incidental charges billed to the customer are part of the value."],
      ["Reducing value for every discount", "Post-supply discounts need a credit note and ITC reversal by the recipient."],
      ["Using the customer's billing address for every supply", "Place of supply follows specific rules — e.g. hotel stays follow the property's location."],
    ),
    check(
      6,
      q("A service is completed on 5 May, invoiced on 20 May and paid on 10 June. What is the time of supply?", ["5 May", "20 May", "10 June", "31 May"], 1, "The invoice was on time, so it's the earlier of 20 May and 10 June."),
      q("For a normal taxpayer, is GST payable when an advance is received for goods?", ["Yes, always", "Generally no", "Only above ₹1 lakh", "Only for exports"], 1, "Advances for goods are generally not taxed for normal taxpayers; advances for services are."),
      q("Goods priced at ₹1,00,000 carry ₹2,000 packing and ₹3,000 delivery charged by the supplier. What is the taxable value?", ["₹1,00,000", "₹1,02,000", "₹1,05,000", "₹1,23,900"], 2, "Incidental charges billed by the supplier are part of the value."),
      q("When does a discount given after the supply reduce the taxable value?", ["Always", "Only with a credit note and ITC reversal by the recipient", "Only if paid in cash", "Never"], 1, "That's the Section 15(3)(b) condition."),
      q("A Bengaluru supplier sends goods to a customer in Chennai. Which tax applies?", ["CGST + SGST", "IGST", "No GST", "UTGST"], 1, "The movement ends in Tamil Nadu — a different State."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Time of supply for a service",
          ["A designer completes work on 2 March but forgets to invoice until 15 April. The client pays on 20 April.", "What is the time of supply?"],
          ["The invoice wasn't issued within 30 days, so use the earlier of the date of supply (2 March) and payment (20 April).", "Time of supply = 2 March."],
        ],
        [
          "Exercise 2 — Value of supply",
          ["Goods ₹60,000, packing ₹1,500 and delivery ₹2,500, all charged by the supplier. GST at an assumed 18%.", "Find the taxable value, GST and invoice total."],
          ["Taxable value = ₹64,000.", "GST = ₹11,520.", "Invoice total = ₹75,520."],
        ],
        [
          "Exercise 3 — Tax type",
          ["A Pune hotel hosts a guest from a Hyderabad company for a conference.", "What is the place of supply and the tax type?"],
          ["Hotel stays are linked to immovable property, so the place of supply is where the hotel is — Maharashtra.", "The hotel is also in Maharashtra, so CGST + SGST applies."],
        ],
      ),
    ),
    summary(
      [
        "Time of supply rules for goods (Section 12) and services (Section 13)",
        "How advances for goods and services are treated",
        "Transaction value and what's included in the value of supply",
        "When discounts reduce the taxable value",
        "Place of supply rules for goods and services",
        "How to choose between CGST + SGST and IGST",
      ],
      "When, how much and where: answer these three questions for every supply and the GST treatment follows.",
    ),
  ],
  6: [
    overview(
      "Module 7 — Input Tax Credit (ITC)",
      [
        "Input tax credit is what makes GST a tax on value added, not a tax on tax. It's also where many businesses make costly mistakes. In this module you'll learn when ITC can be claimed, what is blocked, and how credit is used to pay tax.",
      ],
      [
        "Explain how ITC removes tax on tax",
        "List the conditions for claiming ITC",
        "Apply the time limit and the 180-day payment rule",
        "Identify blocked credits under Section 17(5)",
        "Treat ITC on capital goods correctly",
        "Use ITC in the correct order to pay tax",
      ],
    ),
    screen(
      "What input tax credit is",
      p("Input tax credit (ITC) lets a registered business deduct the GST it paid on eligible business purchases from the GST it owes on its sales."),
      table(
        ["Stage", "Sale value", "GST charged (18%)", "ITC claimed", "Net GST paid"],
        [
          ["Manufacturer", "₹1,00,000", "₹18,000", "₹0", "₹18,000"],
          ["Wholesaler", "₹1,20,000", "₹21,600", "₹18,000", "₹3,600"],
          ["Retailer", "₹1,50,000", "₹27,000", "₹21,600", "₹5,400"],
        ],
        { footer: ["Total paid to Government", "", "", "", "₹27,000"], numeric: [1, 2, 3, 4] },
      ),
      p("The total paid (₹27,000) equals 18% of the final price — each business pays tax only on the value it added."),
    ),
    screen(
      "Inputs, input services and capital goods",
      terms(
        ["Inputs", "Goods (other than capital goods) used in business — e.g. raw materials, packing material, stock for resale."],
        ["Input services", "Services used in business — e.g. rent, accounting fees, advertising, transport."],
        ["Capital goods", "Goods capitalised in the books and used in business — e.g. machinery, computers, furniture."],
      ),
      note("ITC is available only on purchases used, or intended to be used, in the course or furtherance of business."),
    ),
    screen(
      "Conditions for claiming ITC",
      p("Under Section 16 of the CGST Act, a business can claim ITC only if all of these are met:"),
      { type: "checklist", title: "ITC conditions", items: [
        { title: "Tax invoice or debit note", text: "You hold a valid document from a registered supplier." },
        { title: "Shown in GSTR-2B", text: "The supplier has reported the invoice and it appears in your GSTR-2B." },
        { title: "Goods or services received", text: "Including goods delivered to a third party on your instructions." },
        { title: "Tax paid by the supplier", text: "The supplier has actually paid the tax to the Government." },
        { title: "Return filed", text: "You have filed your own GSTR-3B." },
      ] },
      caution("If any one condition is missing — for example, the invoice isn't in GSTR-2B — the credit can't be claimed yet."),
    ),
    screen(
      "Time limit for claiming ITC",
      p("Under Section 16(4), ITC on an invoice or debit note for a financial year can't be claimed after the earlier of:"),
      bullets(
        "30 November following the end of that financial year, or",
        "The date the annual return for that year is filed.",
      ),
      tip("Example", "An invoice dated 15 January 2026 (FY 2025-26) must have its ITC claimed by 30 November 2026 at the latest — earlier if the annual return is filed before then."),
    ),
    screen(
      "The 180-day payment rule",
      p("If the business doesn't pay the supplier the value plus tax within 180 days from the invoice date, the ITC already claimed must be added back to its tax liability, with interest."),
      steps(
        ["Claim ITC", "When the conditions are met."],
        ["Pay within 180 days", "Value plus tax, to the supplier."],
        ["If not paid", "Reverse the ITC in GSTR-3B and pay interest."],
        ["When paid later", "The credit can be claimed again."],
      ),
      note("Supplies taxed under reverse charge and certain other cases have their own rules."),
    ),
    screen(
      "Blocked credits — Section 17(5)",
      p("Some purchases are blocked from ITC even when used in business. Common examples:"),
      bullets(
        "Motor vehicles for transporting people with up to 13 seats (including the driver), with exceptions — such as vehicles used for passenger transport or driving training, or resold.",
        "Food and beverages, outdoor catering, beauty treatment, health services and cosmetic surgery — unless used to make the same kind of taxable supply, or obligatory for employers under law.",
        "Membership of clubs and health and fitness centres.",
        "Travel benefits to employees on vacation, such as leave travel.",
        "Construction of immovable property (other than plant and machinery) on the business's own account.",
        "Goods lost, stolen, destroyed, written off, or given away as gifts or free samples.",
        "Goods or services for personal consumption.",
        "Tax paid under the composition scheme.",
      ),
      caution("These are summaries. Check the exact wording of Section 17(5) and its exceptions before deciding."),
    ),
    screen(
      "ITC on capital goods and mixed use",
      terms(
        ["Capital goods", "ITC on eligible capital goods such as machinery and computers is generally available in full when received."],
        ["Depreciation on the tax", "If depreciation is claimed on the GST component under the Income-tax Act, ITC on that tax can't be claimed (Section 16(3)). Claim one or the other."],
        ["Partly business, partly personal or exempt use", "Only the business share used for taxable supplies is eligible; the rest is reversed under Rules 42 and 43."],
      ),
    ),
    screen(
      "Using ITC — the order of set-off",
      p("Section 49(5) fixes how ITC is used against tax payable:"),
      table(
        ["Credit of", "Use first against", "Then against", "Never against"],
        [
          ["IGST", "IGST", "CGST and SGST/UTGST", "—"],
          ["CGST", "CGST", "IGST", "SGST/UTGST"],
          ["SGST/UTGST", "SGST/UTGST", "IGST (only after CGST credit is used up)", "CGST"],
        ],
      ),
      tip("Remember", "IGST credit must be used fully before CGST or SGST credit is used. CGST and SGST credits can never be used for each other."),
      { type: "link", label: "Official source", text: "CGST Act — Section 49 (CBIC)", href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter10/section49_v1.00.html" },
    ),
    screen(
      "Worked example: set-off",
      table(
        ["", "IGST", "CGST", "SGST"],
        [
          ["Output tax payable", "₹20,000", "₹30,000", "₹30,000"],
          ["ITC available", "₹50,000", "₹10,000", "₹10,000"],
        ],
        { numeric: [1, 2, 3] },
      ),
      steps(
        ["Use IGST credit against IGST", "₹20,000 used; ₹30,000 IGST credit left."],
        ["Use the rest of IGST credit against CGST and SGST", "₹15,000 against CGST and ₹15,000 against SGST."],
        ["Use CGST credit against CGST", "₹30,000 − ₹15,000 − ₹10,000 = ₹5,000 left to pay."],
        ["Use SGST credit against SGST", "₹30,000 − ₹15,000 − ₹10,000 = ₹5,000 left to pay."],
      ),
      example([["Total output tax", "₹80,000"], ["Less: total ITC used", "(₹70,000)"]], ["Cash payable (₹5,000 CGST + ₹5,000 SGST)", "₹10,000"]),
    ),
    screen(
      "Worked example: what can be claimed this month?",
      table(
        ["Purchase", "GST", "In GSTR-2B?", "Eligible?"],
        [
          ["Raw materials ₹2,00,000", "₹36,000", "Yes", "Yes"],
          ["Office laptop ₹80,000 (capital good)", "₹14,400", "Yes", "Yes — no depreciation claimed on the tax"],
          ["Staff lunch ₹10,000", "₹500", "Yes", "No — food and beverages are blocked"],
          ["Packing material ₹50,000", "₹9,000", "No", "Not yet — wait for it to appear"],
        ],
      ),
      p("ITC claimable this month = ₹36,000 + ₹14,400 = ₹50,400."),
    ),
    mistakes(
      ["Claiming ITC not shown in GSTR-2B", "Wait for the supplier to report the invoice."],
      ["Claiming blocked credits", "Check every purchase against Section 17(5)."],
      ["Claiming both ITC and depreciation on the tax", "Section 16(3) allows only one."],
      ["Missing the time limit", "Claim by 30 November after the year (or the annual return date, if earlier)."],
      ["Ignoring unpaid suppliers", "Unpaid after 180 days means reversing the ITC with interest."],
      ["Using CGST credit against SGST", "Never allowed."],
    ),
    check(
      7,
      q("What does ITC let a business do?", ["Avoid registering", "Deduct GST paid on eligible purchases from GST on its sales", "Skip filing returns", "Charge a lower rate"], 1, "It removes tax on tax."),
      q("Which is a condition for claiming ITC?", ["The invoice appears in GSTR-2B", "The supplier is in the same State", "The purchase is over ₹50,000", "Payment is made in cash"], 0, "The invoice must be reflected in GSTR-2B."),
      q("A supplier isn't paid within 180 days of the invoice. What happens?", ["Nothing", "The ITC claimed is added back with interest", "The supplier pays a penalty", "The invoice is cancelled"], 1, "It can be reclaimed once paid."),
      q("Which purchase is a blocked credit?", ["Raw materials", "An office laptop", "A club membership for staff", "Packing material"], 2, "Club memberships are blocked under Section 17(5)."),
      q("Which credit must be used first?", ["CGST", "SGST", "IGST", "Any, in any order"], 2, "IGST credit is used fully before CGST or SGST credit."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Value added",
          ["A wholesaler buys goods for ₹50,000 + 18% GST and sells them for ₹70,000 + 18% GST (both intra-state).", "How much GST does the wholesaler pay in cash?"],
          ["Output GST = ₹12,600. ITC = ₹9,000.", "Cash payable = ₹3,600 (₹1,800 CGST + ₹1,800 SGST) — 18% of the ₹20,000 value added."],
        ],
        [
          "Exercise 2 — Eligible or blocked?",
          ["Decide for each: (a) office rent, (b) a gift hamper for a client, (c) accounting software, (d) a car with 5 seats for the director."],
          ["(a) Eligible. (b) Blocked — goods given as gifts. (c) Eligible. (d) Blocked — passenger vehicle with up to 13 seats, not used for an excepted purpose."],
        ],
        [
          "Exercise 3 — Set-off",
          ["Output: IGST ₹10,000, CGST ₹8,000, SGST ₹8,000. ITC: IGST ₹4,000, CGST ₹6,000, SGST ₹6,000.", "How much cash is payable?"],
          ["IGST credit ₹4,000 → IGST; ₹6,000 IGST still payable.", "CGST credit: ₹6,000 → CGST (₹2,000 left to pay). Remaining CGST credit ₹0.", "SGST credit: ₹6,000 → SGST (₹2,000 left to pay).", "Cash: IGST ₹6,000 + CGST ₹2,000 + SGST ₹2,000 = ₹10,000."],
        ],
      ),
    ),
    summary(
      [
        "How ITC removes tax on tax across the supply chain",
        "Inputs, input services and capital goods",
        "The Section 16 conditions, including GSTR-2B",
        "The time limit and the 180-day payment rule",
        "Blocked credits under Section 17(5)",
        "ITC on capital goods, depreciation and mixed use",
        "The order of set-off under Section 49(5)",
      ],
      "Claim every rupee of ITC you're entitled to — and nothing more. Check the conditions, the blocked list and GSTR-2B before claiming.",
    ),
  ],
  7: [
    overview(
      "Module 8 — Tax Invoices and GST Documents",
      [
        "GST is built on documents. The right document, issued on time with the right details, lets your customer claim ITC and keeps your business compliant. This module covers invoices, credit and debit notes, vouchers, e-invoicing and e-way bills.",
      ],
      [
        "Know when a tax invoice must be issued",
        "List the mandatory contents of a tax invoice",
        "Choose between a tax invoice and a bill of supply",
        "Use credit notes, debit notes, vouchers and delivery challans",
        "Explain e-invoicing, the IRN and the QR code",
        "Decide when an e-way bill is needed and how long it's valid",
      ],
    ),
    screen(
      "When to issue a tax invoice",
      table(
        ["Supply", "Time limit (Section 31)"],
        [
          ["Goods involving movement", "Before or at the time of removal for delivery"],
          ["Goods not involving movement", "Before or at the time of delivery or making them available"],
          ["Services", "Generally within 30 days of supplying the service (45 days for banks and insurers)"],
        ],
      ),
      note("Issuing an invoice late can change the time of supply (Module 6) and attract penalties."),
    ),
    screen(
      "Mandatory contents of a tax invoice (Rule 46)",
      { type: "checklist", title: "A tax invoice must show", items: [
        { title: "Supplier details", text: "Name, address and GSTIN" },
        { title: "Invoice number", text: "Consecutive and unique for the financial year, up to 16 characters" },
        { title: "Date of issue", text: "The date the invoice is issued" },
        { title: "Recipient details", text: "Name, address and GSTIN (if registered)" },
        { title: "HSN or SAC code", text: "At the required number of digits" },
        { title: "Description, quantity and value", text: "Including taxable value after discounts" },
        { title: "Tax rate and amount", text: "CGST, SGST/UTGST or IGST shown separately" },
        { title: "Place of supply", text: "With the State name, for inter-state supplies" },
        { title: "Reverse charge", text: "Whether tax is payable on reverse charge" },
        { title: "Signature", text: "Signature or digital signature of the supplier" },
      ] },
    ),
    screen(
      "Invoice numbering and copies",
      bullets(
        "Use one or more series of consecutive numbers, unique within the financial year.",
        "Numbers can include letters, hyphens and slashes — e.g. MUM/25-26/0142.",
        "Don't reuse or skip numbers; cancel and keep any spoiled invoice.",
      ),
      table(
        ["Supply", "Copies (Rule 48)"],
        [
          ["Goods", "Three: original for the recipient, duplicate for the transporter, triplicate for the supplier"],
          ["Services", "Two: original for the recipient, duplicate for the supplier"],
        ],
      ),
    ),
    screen(
      "Example: a tax invoice",
      table(
        ["Field", "Example"],
        [
          ["Supplier", "Panda Traders, Mumbai — GSTIN 27ABCDE1234F1Z5"],
          ["Invoice no. and date", "MUM/26-27/0142 · 6 November 2026"],
          ["Recipient", "Lotus Retail, Pune — GSTIN 27PQRST5678K1Z2"],
          ["Item", "Office chairs, HSN 9401 — 10 × ₹4,000 = ₹40,000"],
          ["CGST 9% / SGST 9%", "₹3,600 / ₹3,600"],
          ["Total", "₹47,200"],
          ["Place of supply", "Maharashtra"],
          ["Reverse charge", "No"],
        ],
      ),
      note("The GSTINs and the 18% rate are illustrative. Both GSTINs start with 27 — Maharashtra's State code — so this is intra-state."),
    ),
    screen(
      "Bill of supply",
      p("A bill of supply is issued instead of a tax invoice when no GST is charged:"),
      bullets(
        "By a registered business making exempt supplies.",
        "By a composition taxpayer (Module 10), who can't collect GST.",
      ),
      p("It shows the supplier, number, date, recipient, description and value — but no tax."),
      caution("A bill of supply doesn't give the customer any ITC."),
    ),
    screen(
      "Credit notes and debit notes",
      compare(
        ["Credit note", "Issued by the supplier to reduce value or tax — e.g. goods returned, a post-supply discount, or overcharging.", ["Reduces the supplier's output tax", "Customer reduces ITC"]],
        ["Debit note", "Issued by the supplier to increase value or tax — e.g. undercharging on the original invoice.", ["Increases output tax", "Customer can claim extra ITC"]],
      ),
      note("A credit note must generally be declared by 30 November after the end of the financial year, or the date of filing the annual return, if earlier (Section 34)."),
    ),
    screen(
      "Vouchers and delivery challans",
      table(
        ["Document", "When it is used"],
        [
          ["Receipt voucher", "When an advance payment is received"],
          ["Refund voucher", "When an advance is refunded and no supply is made"],
          ["Payment voucher", "When paying a supplier for supplies taxed under reverse charge"],
          ["Delivery challan", "For movement of goods that is not a supply, or not yet one — such as job work or goods sent on approval"],
          ["Self-invoice", "Issued by the recipient within 30 days for reverse charge purchases from unregistered suppliers (Rule 47A — Module 9)"],
        ],
      ),
    ),
    screen(
      "E-invoicing — IRN and QR code",
      p("Businesses whose aggregate turnover has exceeded ₹5 crore in any financial year since 2017-18 must e-invoice. They report B2B invoices, credit and debit notes and exports to the Invoice Registration Portal (IRP), which returns:"),
      terms(
        ["IRN", "A unique Invoice Reference Number."],
        ["Signed QR code", "Printed on the invoice so it can be verified."],
      ),
      bullets(
        "An invoice that should have been e-invoiced but wasn't is not a valid invoice — the customer can't claim ITC.",
        "E-invoice data flows automatically into GSTR-1 and can create e-way bills.",
        "From 1 April 2025, businesses with aggregate turnover of ₹10 crore or more must report invoices to the IRP within 30 days of the invoice date.",
      ),
    ),
    screen(
      "E-way bills",
      p("Under Rule 138, an e-way bill is generally needed before moving goods of consignment value exceeding ₹50,000 — whether for a sale, for reasons other than supply, or for inward supply from an unregistered person."),
      steps(
        ["Part A", "Enter the invoice details, the parties and the value of goods."],
        ["Part B", "Enter the transport details, such as the vehicle number."],
        ["Generate", "Get the e-way bill number (EBN) before the movement starts."],
      ),
      table(
        ["Distance", "Validity (regular cargo)"],
        [
          ["Up to 200 km", "1 day"],
          ["Every further 200 km or part of it", "1 more day"],
        ],
      ),
      caution("Some States set different limits for movement within the State, and certain goods and movements are exempt. Check the applicable rules before moving goods."),
    ),
    screen(
      "Worked example: e-way bill validity",
      p("Goods worth ₹1,20,000 are sent 450 km by truck."),
      table(
        ["Distance", "Days"],
        [
          ["First 200 km", "1"],
          ["Next 200 km (201–400)", "1"],
          ["Remaining 50 km (part of another 200 km)", "1"],
        ],
        { footer: ["Total validity", "3 days"] },
      ),
      p("The value is above ₹50,000, so an e-way bill is needed, valid for 3 days."),
    ),
    mistakes(
      ["Reusing or skipping invoice numbers", "Numbers must be consecutive and unique for the year."],
      ["Missing the customer's GSTIN", "The customer can't claim ITC without it."],
      ["Issuing a tax invoice for exempt supplies", "Use a bill of supply."],
      ["Editing an issued invoice", "Use a credit or debit note instead."],
      ["Not e-invoicing when required", "The invoice isn't valid and the customer loses ITC."],
      ["Moving goods without an e-way bill", "Goods and vehicles can be detained."],
    ),
    check(
      8,
      q("Within how long must a tax invoice for services generally be issued?", ["7 days", "15 days", "30 days", "90 days"], 2, "Generally within 30 days of supplying the service."),
      q("Which document does a composition taxpayer issue?", ["Debit note", "Bill of supply", "Delivery challan", "Payment voucher"], 1, "Composition taxpayers can't collect GST."),
      q("Which document increases the value or tax on an earlier invoice?", ["Credit note", "Debit note", "Receipt voucher", "Refund voucher"], 1, "Debit notes increase value or tax."),
      q("Above what aggregate turnover is e-invoicing mandatory?", ["₹40 lakh", "₹1.5 crore", "₹5 crore", "₹100 crore"], 2, "₹5 crore in any year since 2017-18."),
      q("Goods are moved 450 km. How long is the e-way bill valid?", ["1 day", "2 days", "3 days", "5 days"], 2, "1 day per 200 km or part: 3 days."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Spot the gaps",
          ["An invoice shows the supplier's name and GSTIN, the date, the customer's name, the items and the total. What's missing for a valid tax invoice to a registered customer?"],
          ["Invoice number, customer's address and GSTIN, HSN/SAC codes, tax rate and separate tax amounts, place of supply (if inter-state), reverse charge indication and signature."],
        ],
        [
          "Exercise 2 — Choose the document",
          ["Which document for each: (a) a customer returns goods, (b) an advance is received, (c) goods are sent for job work, (d) an exempt supply?"],
          ["(a) Credit note. (b) Receipt voucher. (c) Delivery challan. (d) Bill of supply."],
        ],
        [
          "Exercise 3 — E-way bill",
          ["Goods worth ₹75,000 are moved 610 km. Is an e-way bill needed, and for how long?"],
          ["Yes — the value exceeds ₹50,000.", "610 km = 200 + 200 + 200 + 10 → 4 days."],
        ],
      ),
    ),
    summary(
      [
        "When tax invoices must be issued for goods and services",
        "The mandatory contents under Rule 46",
        "Invoice numbering and copies",
        "Bills of supply, credit notes and debit notes",
        "Receipt, refund and payment vouchers, delivery challans and self-invoices",
        "E-invoicing, the IRN and the QR code",
        "E-way bills and their validity",
      ],
      "A correct, timely document protects both sides: the supplier stays compliant and the customer can claim ITC.",
    ),
  ],
  8: [
    overview(
      "Module 9 — Reverse Charge Mechanism (RCM)",
      [
        "Normally the supplier collects GST and pays it to the Government. Under reverse charge, the recipient pays instead. Many businesses owe RCM tax without realising it — this module shows you how to spot, record and pay it.",
      ],
      [
        "Explain the difference between forward and reverse charge",
        "Identify supplies taxed under reverse charge",
        "Work out the time of supply under RCM",
        "Issue a self-invoice and payment voucher",
        "Pay RCM tax and claim the ITC",
        "Record RCM transactions in the books",
      ],
    ),
    screen(
      "Forward charge vs. reverse charge",
      compare(
        ["Forward charge", "The normal rule: the supplier charges GST on the invoice, collects it from the customer and pays it to the Government.", ["Most sales", "Supplier pays"]],
        ["Reverse charge (RCM)", "For notified supplies, the recipient pays the GST directly to the Government instead of the supplier.", ["Notified supplies", "Recipient pays"]],
      ),
      p("Reverse charge is used where collecting tax from the supplier is hard — for example, many small or unregistered suppliers — or where the supplier is outside India."),
    ),
    screen(
      "Where reverse charge comes from",
      terms(
        ["Section 9(3)", "Notified goods and services taxed under reverse charge, whoever the supplier is."],
        ["Section 9(4)", "Notified supplies received from unregistered suppliers by notified classes of registered persons."],
        ["Import of services", "IGST is paid by the recipient in India under reverse charge (Section 5(3) of the IGST Act)."],
      ),
      caution("Tax payable under reverse charge must be paid in cash. It cannot be paid by using ITC from the electronic credit ledger."),
    ),
    screen(
      "Common reverse charge services",
      table(
        ["Service", "Typical situation"],
        [
          ["Goods transport agency (GTA)", "Freight to specified recipients, taxed at 5% under RCM unless the GTA opts to charge GST itself (18% with ITC since 22 September 2025)"],
          ["Legal services", "By an advocate or firm of advocates to a business entity"],
          ["Director services", "By a director to the company"],
          ["Sponsorship", "Sponsorship services to a body corporate or partnership firm"],
          ["Security services", "Security personnel supplied by a non-body-corporate to a registered person (with exclusions)"],
          ["Renting of commercial property", "By an unregistered person to a registered person (with exclusions)"],
          ["Insurance and recovery agents", "Services to insurers, banks and financial institutions"],
        ],
      ),
      note("The RCM lists are changed by notification from time to time, and each entry has conditions and exclusions. Check the current notification for the exact scope."),
    ),
    screen(
      "Common reverse charge goods",
      p("Some goods are also under reverse charge when bought from certain suppliers, for example:"),
      bullets(
        "Metal scrap supplied by an unregistered person to a registered person.",
        "Raw cotton supplied by agriculturists.",
        "Certain agricultural produce such as unshelled cashew nuts and tendu leaves.",
      ),
      note("As with services, check the current rate notification for the full list and conditions."),
    ),
    screen(
      "Time of supply under reverse charge",
      table(
        ["Supply", "Time of supply — the earliest of"],
        [
          ["Goods (Section 12(3))", "Date goods are received · Date of payment · 31st day after the supplier's invoice date"],
          ["Services (Section 13(3))", "Date of payment · 61st day after the supplier's invoice date"],
        ],
      ),
      tip("Example", "A lawyer's invoice is dated 1 April. The company pays it on 20 April. The time of supply is 20 April (payment comes before the 61st day), so the RCM tax goes into April's return."),
    ),
    screen(
      "Self-invoicing and payment vouchers",
      steps(
        ["Self-invoice", "When buying from an unregistered supplier under RCM, the recipient issues the tax invoice itself, within 30 days of receiving the supply (Rule 47A)."],
        ["Payment voucher", "Issue a payment voucher when paying the supplier for an RCM supply."],
        ["Report in GSTR-3B", "Show the inward supplies liable to reverse charge and the tax payable."],
        ["Pay in cash", "Pay the RCM tax through the electronic cash ledger."],
        ["Claim ITC", "Once paid, eligible ITC can be claimed in the same return."],
      ),
    ),
    screen(
      "Recording RCM in the books",
      p("Legal fees of ₹10,000 at 18%, intra-state, paid to an advocate:"),
      journal(
        [
          ["Legal expenses", "₹10,000", ""],
          ["Input CGST (RCM)", "₹900", ""],
          ["Input SGST (RCM)", "₹900", ""],
          ["Advocate (supplier)", "", "₹10,000"],
          ["CGST payable under RCM", "", "₹900"],
          ["SGST payable under RCM", "", "₹900"],
        ],
        "₹11,800",
      ),
      p("The advocate is paid ₹10,000 — not ₹11,800 — because the company pays the ₹1,800 GST directly to the Government."),
    ),
    screen(
      "Worked example: rent from an unregistered landlord",
      p("A registered trader in Kolkata rents a shop from an unregistered landlord for ₹50,000 a month. Renting of commercial property by an unregistered person to a registered person is under reverse charge."),
      example(
        [["Monthly rent", "₹50,000"], ["CGST under RCM at 9%", "₹4,500"], ["SGST under RCM at 9%", "₹4,500"]],
        ["RCM tax paid in cash each month", "₹9,000"],
      ),
      p("The trader pays the landlord ₹50,000, pays ₹9,000 to the Government in cash, and — if fully engaged in taxable supplies — claims ₹9,000 ITC. The net cost is usually only a timing difference."),
    ),
    mistakes(
      ["Not recognising RCM supplies", "Check legal fees, director fees, GTA freight, security and rent from unregistered landlords."],
      ["Paying RCM tax with ITC", "RCM tax must be paid in cash."],
      ["Paying the supplier the GST", "Under RCM the supplier shouldn't charge GST; you pay it to the Government."],
      ["Missing the self-invoice", "Issue it within 30 days for purchases from unregistered suppliers."],
      ["Forgetting to claim the ITC", "Once paid, eligible RCM tax is creditable."],
    ),
    check(
      9,
      q("Under reverse charge, who pays the GST to the Government?", ["The supplier", "The recipient", "The transporter", "The bank"], 1, "The recipient pays under RCM."),
      q("How must RCM tax be paid?", ["Using IGST credit", "Using any ITC", "In cash through the electronic cash ledger", "It doesn't need to be paid"], 2, "RCM liability is paid in cash."),
      q("A company receives legal services from an advocate. Who generally pays the GST?", ["The advocate", "The company, under reverse charge", "No GST applies", "The Bar Council"], 1, "Legal services to a business entity are under RCM."),
      q("Within how long must a self-invoice be issued for an RCM purchase from an unregistered supplier?", ["7 days", "30 days", "90 days", "By year-end"], 1, "Rule 47A: within 30 days."),
      q("Monthly rent of ₹50,000 is paid to an unregistered landlord for a shop. What is the RCM tax at 18%?", ["₹4,500", "₹9,000", "₹18,000", "₹50,000"], 1, "₹4,500 CGST + ₹4,500 SGST."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Is it RCM?",
          ["Decide for each: (a) a director's sitting fees, (b) electricity bill from a registered company, (c) a lawyer's fees to a partnership firm, (d) office supplies from a registered shop."],
          ["(a) RCM. (b) Forward charge. (c) RCM — a partnership firm is a business entity. (d) Forward charge."],
        ],
        [
          "Exercise 2 — Time of supply",
          ["A director's invoice is dated 1 August. The company pays on 15 November.", "What is the time of supply?"],
          ["Earlier of payment (15 November) and the 61st day after the invoice (about 1 October).", "Time of supply ≈ 1 October — the 61st day comes first."],
        ],
        [
          "Exercise 3 — Journal entry",
          ["Write the entry for ₹20,000 of sponsorship received by a company, at 18% intra-state under RCM."],
          ["Dr Sponsorship expense ₹20,000 · Dr Input CGST ₹1,800 · Dr Input SGST ₹1,800", "Cr Supplier ₹20,000 · Cr CGST payable (RCM) ₹1,800 · Cr SGST payable (RCM) ₹1,800"],
        ],
      ),
    ),
    summary(
      [
        "The difference between forward and reverse charge",
        "Section 9(3), Section 9(4) and import of services",
        "Common RCM services and goods",
        "Time of supply under RCM",
        "Self-invoices, payment vouchers and cash payment",
        "Recording RCM and claiming the ITC",
      ],
      "Under RCM the buyer becomes the taxpayer: issue the documents, pay the tax in cash, then claim the credit.",
    ),
  ],
  9: [
    overview(
      "Module 10 — The Composition Scheme",
      [
        "The composition scheme lets small businesses pay tax at a low, fixed rate on turnover with simpler compliance — in return for giving up input tax credit and some kinds of sales. This module helps you decide whether it suits a business.",
      ],
      [
        "Explain what the composition scheme is",
        "Check who can and can't opt in",
        "Apply the composition tax rates",
        "List the restrictions on composition taxpayers",
        "Describe how to opt in, opt out and file returns",
        "Compare composition with regular registration",
      ],
    ),
    screen(
      "What the composition scheme is",
      compare(
        ["Regular taxpayer", "Charges GST on invoices, claims ITC, files monthly or quarterly returns.", ["ITC available", "More compliance"]],
        ["Composition taxpayer", "Pays a small percentage of turnover as tax, can't collect GST from customers or claim ITC.", ["Simple", "No ITC"]],
      ),
    ),
    screen(
      "Who can opt",
      table(
        ["Scheme", "Who it's for", "Turnover limit (previous year)"],
        [
          ["Section 10(1)", "Manufacturers, traders and restaurants", "₹1.5 crore (₹75 lakh in specified special category States)"],
          ["Section 10(2A)", "Service providers and mixed suppliers not eligible under 10(1)", "₹50 lakh"],
        ],
      ),
      note("All registrations under the same PAN must opt for the scheme together."),
    ),
    screen(
      "Who can't opt",
      p("A business generally can't opt for composition if it:"),
      bullets(
        "Makes inter-state outward supplies of goods.",
        "Supplies goods not taxable under GST.",
        "Manufactures notified goods, such as ice cream, pan masala and tobacco products.",
        "Is a casual taxable person or a non-resident taxable person.",
      ),
    ),
    screen(
      "Composition tax rates",
      table(
        ["Type of business", "Rate (CGST + SGST)", "Charged on"],
        [
          ["Manufacturers", "1% (0.5% + 0.5%)", "Turnover in the State or UT"],
          ["Traders", "1% (0.5% + 0.5%)", "Turnover of taxable supplies in the State or UT"],
          ["Restaurants not serving alcohol", "5% (2.5% + 2.5%)", "Turnover in the State or UT"],
          ["Service providers under Section 10(2A)", "6% (3% + 3%)", "Turnover in the State or UT"],
        ],
      ),
      example(
        [["Trader's taxable turnover for the quarter", "₹12,00,000"], ["Composition tax at 1%", "₹12,000"]],
        ["Paid through CMP-08 (₹6,000 CGST + ₹6,000 SGST)", "₹12,000"],
      ),
    ),
    screen(
      "Restrictions on composition taxpayers",
      bullets(
        "No input tax credit on purchases.",
        "GST can't be collected from customers — issue a bill of supply, not a tax invoice.",
        "Mention “composition taxable person, not eligible to collect tax on supplies” on the bill of supply.",
        "Display “Composition taxable person” at the place of business.",
        "Tax under reverse charge is still payable at the normal rates — and paid in cash.",
        "The composition tax is paid from the business's own pocket.",
      ),
    ),
    screen(
      "Opting in, opting out and crossing the limit",
      table(
        ["Event", "Form", "Timing"],
        [
          ["Opt into the scheme", "CMP-02", "Before the start of the financial year"],
          ["Opt out voluntarily", "CMP-04", "When choosing to leave"],
          ["Turnover crosses the limit", "CMP-04", "Within 7 days of crossing — then become a regular taxpayer"],
        ],
      ),
      caution("Once the limit is crossed during the year, the business must move to regular registration — it can't continue under composition."),
    ),
    screen(
      "Returns and payments",
      table(
        ["Form", "Purpose", "Due"],
        [
          ["CMP-08", "Statement and payment of tax", "18th of the month after each quarter"],
          ["GSTR-4", "Annual return", "30 June after the financial year (from FY 2024-25)"],
        ],
      ),
      { type: "link", label: "Official source", text: "CGST Rules — Rule 62 (CBIC)", href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter8/rule62_v1.00.html" },
    ),
    screen(
      "Worked example: composition or regular?",
      p("A trader sells only to consumers in its own State. Annual sales are ₹1 crore, and customers pay the same price either way. Purchases are ₹70 lakh plus 18% GST (₹12.6 lakh). Rates are assumed for the example."),
      table(
        ["", "Regular", "Composition"],
        [
          ["Sales received from customers", "₹100 lakh", "₹100 lakh"],
          ["GST included in sales (18/118)", "(₹15.25 lakh)", "—"],
          ["Composition tax at 1%", "—", "(₹1 lakh)"],
          ["Purchases (net of ITC under regular)", "(₹70 lakh)", "(₹82.6 lakh)"],
          ["Profit before other costs", "₹14.75 lakh", "₹16.4 lakh"],
        ],
      ),
      p("Here composition gives a higher profit. But if the trader sold to registered businesses that want ITC, or had large GST-bearing purchases, regular registration could be better."),
    ),
    mistakes(
      ["Charging GST on a bill of supply", "Composition taxpayers can't collect GST."],
      ["Claiming ITC", "No ITC is allowed under composition."],
      ["Making inter-state sales of goods", "This makes the business ineligible."],
      ["Continuing after crossing the limit", "File CMP-04 within 7 days and register as regular."],
      ["Forgetting RCM", "Reverse charge tax is still payable in cash at normal rates."],
    ),
    check(
      10,
      q("What is the general composition turnover limit for traders?", ["₹20 lakh", "₹50 lakh", "₹1.5 crore", "₹5 crore"], 2, "₹1.5 crore (₹75 lakh in specified special category States)."),
      q("A trader has taxable turnover of ₹12,00,000 for a quarter. What is the composition tax?", ["₹6,000", "₹12,000", "₹60,000", "₹2,16,000"], 1, "1% of turnover."),
      q("Which document does a composition taxpayer issue to customers?", ["Tax invoice", "Bill of supply", "E-way bill", "Credit note"], 1, "They can't collect GST."),
      q("When is CMP-08 due?", ["11th of every month", "18th of the month after each quarter", "30 June", "31 December"], 1, "Quarterly, by the 18th."),
      q("A composition taxpayer's turnover crosses the limit mid-year. What must it do?", ["Nothing until next year", "File CMP-04 within 7 days and become a regular taxpayer", "Pay double tax", "Cancel registration"], 1, "It must leave the scheme."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Eligibility",
          ["Can each opt for composition? (a) a ₹90 lakh grocery shop in Gujarat selling locally, (b) a ₹40 lakh consultant, (c) a ₹1 crore trader selling to other States, (d) an ice-cream manufacturer with ₹60 lakh turnover."],
          ["(a) Yes — under ₹1.5 crore. (b) Yes — under Section 10(2A), under ₹50 lakh. (c) No — inter-state sales of goods. (d) No — ice cream is a notified excluded good."],
        ],
        [
          "Exercise 2 — Tax for a quarter",
          ["A restaurant (no alcohol) under composition has quarterly turnover of ₹8,00,000.", "What tax is paid, and in which form?"],
          ["5% × ₹8,00,000 = ₹40,000 (₹20,000 CGST + ₹20,000 SGST).", "Paid through CMP-08 by the 18th of the month after the quarter."],
        ],
        [
          "Exercise 3 — RCM under composition",
          ["A composition trader (a business entity) pays an advocate ₹30,000 in legal fees, which are under reverse charge at 18% (intra-state).", "How much RCM tax is paid, and can ITC be claimed?"],
          ["RCM tax = ₹2,700 CGST + ₹2,700 SGST = ₹5,400, paid in cash.", "No ITC — composition taxpayers can't claim input tax credit, so the ₹5,400 is a cost."],
        ],
      ),
    ),
    summary(
      [
        "What the composition scheme is and how it differs from regular registration",
        "Turnover limits and who can't opt",
        "Composition rates for manufacturers, traders, restaurants and service providers",
        "Restrictions: no ITC, bills of supply, display requirements",
        "Opting in and out, and crossing the limit",
        "CMP-08 and GSTR-4",
        "How to compare composition with regular registration",
      ],
      "Composition trades credit for simplicity. It suits small local businesses selling to consumers — run the numbers before choosing.",
    ),
  ],
  10: [
    overview(
      "Module 11 — GST Returns",
      [
        "Returns are how a business reports its GST to the Government. This module walks through the main returns — GSTR-1, GSTR-2B, GSTR-3B and the annual returns — their due dates, and the QRMP scheme for smaller businesses.",
      ],
      [
        "Name the main GST returns and what each covers",
        "Prepare the data for GSTR-1",
        "Use GSTR-2B and the IMS to check ITC",
        "Explain what GSTR-3B reports",
        "Apply the QRMP scheme",
        "Plan a monthly and annual filing calendar",
      ],
    ),
    screen(
      "The GST return system at a glance",
      table(
        ["Return or statement", "What it covers", "Monthly due date"],
        [
          ["GSTR-1", "Details of outward supplies (sales)", "11th of the next month"],
          ["GSTR-2B", "Auto-drafted ITC statement from suppliers' filings", "Generated around the 14th"],
          ["GSTR-3B", "Summary return and payment of tax", "20th of the next month"],
          ["GSTR-9", "Annual return", "31 December after the financial year"],
          ["GSTR-9C", "Reconciliation statement (turnover above ₹5 crore)", "With GSTR-9"],
        ],
      ),
      note("Composition taxpayers file CMP-08 and GSTR-4 instead (Module 10)."),
    ),
    screen(
      "GSTR-1 — outward supplies",
      p("GSTR-1 reports sales in detail, so customers' ITC statements can be built from it."),
      table(
        ["Section", "What goes in it"],
        [
          ["B2B", "Invoices to registered customers, invoice by invoice"],
          ["B2C (large)", "Inter-state invoices to unregistered customers above ₹1 lakh"],
          ["B2C (others)", "Other sales to unregistered customers, summarised by State and rate"],
          ["Exports and SEZ supplies", "Zero-rated supplies"],
          ["Credit and debit notes", "Notes issued to registered and unregistered customers"],
          ["HSN summary", "Supplies summarised by HSN/SAC code"],
          ["Documents issued", "Invoice and note number ranges, including cancelled ones"],
        ],
      ),
    ),
    screen(
      "GSTR-2A, GSTR-2B and the IMS",
      terms(
        ["GSTR-2A", "A live view of invoices suppliers have reported. It changes as suppliers file."],
        ["GSTR-2B", "A fixed monthly statement of ITC, generated around the 14th from suppliers' filings. It's the basis for claiming ITC."],
        ["Invoice Management System (IMS)", "Lets the recipient accept, reject or keep pending each supplier invoice before GSTR-2B is finalised."],
      ),
      tip("Reconcile every month", "Compare your purchase register with GSTR-2B. Follow up suppliers whose invoices are missing (Module 7)."),
    ),
    screen(
      "GSTR-3B — summary return and payment",
      p("GSTR-3B is the return through which tax is actually paid. It summarises:"),
      bullets(
        "Outward taxable supplies and the tax on them.",
        "Inward supplies liable to reverse charge.",
        "Eligible ITC, ITC reversed and ineligible ITC.",
        "Exempt, nil-rated and non-GST inward supplies.",
        "Interest and late fees.",
        "Tax paid through ITC and in cash.",
      ),
      tip("Good practice", "Reconcile GSTR-1 with your sales books, and GSTR-3B with GSTR-1, every month. Differences are a common trigger for notices."),
    ),
    screen(
      "The QRMP scheme",
      p("Taxpayers with aggregate turnover up to ₹5 crore can choose the Quarterly Return Monthly Payment (QRMP) scheme:"),
      table(
        ["Item", "Under QRMP"],
        [
          ["GSTR-1", "Quarterly, by the 13th of the month after the quarter"],
          ["Invoice Furnishing Facility (IFF)", "Optional, for B2B invoices in the first two months of the quarter (1st–13th of the next month)"],
          ["Monthly tax", "Paid through PMT-06 by the 25th of the next month, for the first two months"],
          ["GSTR-3B", "Quarterly, by the 22nd or 24th of the month after the quarter, depending on the State"],
        ],
      ),
      terms(
        ["Fixed sum method", "Pay 35% of the cash tax paid in the last quarter (if it filed quarterly) each month."],
        ["Self-assessment method", "Work out and pay the actual tax due for the month."],
      ),
      note("The IFF lets your B2B customers claim ITC monthly even though you file GSTR-1 quarterly."),
    ),
    screen(
      "Annual returns",
      terms(
        ["GSTR-9", "Summarises the whole financial year's supplies, ITC and tax paid. Due by 31 December after the year. In recent years, filing has been made optional by notification for small taxpayers with turnover up to ₹2 crore."],
        ["GSTR-9C", "A self-certified reconciliation of the annual return with the audited financial statements, for taxpayers with aggregate turnover above ₹5 crore."],
      ),
      caution("Since the Finance Act, 2023, a GST return generally can't be filed after three years from its due date. Don't let returns fall behind."),
    ),
    screen(
      "Worked example: a monthly filing calendar",
      p("A monthly filer's tasks for the October 2026 tax period:"),
      table(
        ["Date", "Action"],
        [
          ["1–10 November", "Close October's sales and purchase books"],
          ["11 November 2026", "File GSTR-1 for October"],
          ["Around 14 November", "Review GSTR-2B and take IMS actions"],
          ["15–19 November", "Reconcile purchases with GSTR-2B; calculate tax and ITC"],
          ["20 November 2026", "File GSTR-3B and pay the tax for October"],
        ],
      ),
      note("If a due date falls on a holiday or is extended by notification, follow the notified date."),
    ),
    mistakes(
      ["Filing GSTR-3B before reconciling", "Errors flow straight into tax paid."],
      ["Claiming ITC from GSTR-2A instead of GSTR-2B", "GSTR-2B is the basis for ITC."],
      ["Missing invoices in GSTR-1", "Customers can't claim ITC on invoices you didn't report."],
      ["Not using the IFF under QRMP", "Your B2B customers wait a whole quarter for ITC."],
      ["Letting returns fall behind", "Late fees and interest build up, and returns are barred after three years."],
    ),
    check(
      11,
      q("When is the monthly GSTR-1 due?", ["11th of the next month", "13th of the next month", "20th of the next month", "Last day of the month"], 0, "Monthly GSTR-1 is due by the 11th."),
      q("Which return is used to pay tax?", ["GSTR-1", "GSTR-2B", "GSTR-3B", "GSTR-9C"], 2, "GSTR-3B is the summary return through which tax is paid."),
      q("Which statement is the basis for claiming ITC?", ["GSTR-2A", "GSTR-2B", "GSTR-1", "GSTR-9C"], 1, "GSTR-2B is the fixed monthly ITC statement."),
      q("Who can opt for the QRMP scheme?", ["Any taxpayer", "Taxpayers with aggregate turnover up to ₹5 crore", "Only composition taxpayers", "Only exporters"], 1, "Up to ₹5 crore."),
      q("What does the IMS let a recipient do?", ["Pay tax", "Accept, reject or keep pending supplier invoices", "File GSTR-9", "Generate e-way bills"], 1, "It acts on invoices before GSTR-2B is finalised."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which GSTR-1 section?",
          ["Where does each go? (a) Invoice to a registered customer, (b) ₹1,50,000 inter-state sale to an unregistered customer, (c) ₹2,000 cash sale to a walk-in customer, (d) credit note to a registered customer."],
          ["(a) B2B. (b) B2C (large). (c) B2C (others). (d) Credit/debit notes (registered)."],
        ],
        [
          "Exercise 2 — QRMP payments",
          ["A QRMP taxpayer paid ₹60,000 tax in cash for the last quarter and uses the fixed sum method.", "How much does it pay for each of the first two months?"],
          ["35% × ₹60,000 = ₹21,000 each month, by the 25th through PMT-06."],
        ],
        [
          "Exercise 3 — Calendar",
          ["List a monthly filer's three key dates for the March tax period."],
          ["GSTR-1 by 11 April, review GSTR-2B around 14 April, GSTR-3B and payment by 20 April."],
        ],
      ),
    ),
    summary(
      [
        "The main GST returns and their due dates",
        "The sections of GSTR-1",
        "GSTR-2A, GSTR-2B and the Invoice Management System",
        "What GSTR-3B reports",
        "The QRMP scheme, IFF and monthly payments",
        "GSTR-9, GSTR-9C and the three-year time bar",
      ],
      "Report sales accurately in GSTR-1, check ITC against GSTR-2B, then pay through GSTR-3B — every period, on time.",
    ),
  ],
  11: [
    overview(
      "Module 12 — Paying GST, Interest, Late Fees and Refunds",
      [
        "Filing a return isn't the end — the tax must be paid on time. This module explains the electronic ledgers, how to pay, what happens when you're late, and how to claim money back.",
      ],
      [
        "Explain the three electronic ledgers",
        "Create a challan and pay tax",
        "Calculate interest on late payment",
        "Work out late fees",
        "Know when a refund can be claimed and how",
      ],
    ),
    screen(
      "The electronic ledgers",
      table(
        ["Ledger", "What it shows"],
        [
          ["Electronic cash ledger", "Money you have deposited, available to pay tax, interest, late fees and penalties"],
          ["Electronic credit ledger", "Your ITC, available only to pay output tax"],
          ["Electronic liability ledger", "What you owe — tax, interest, late fees and penalties"],
        ],
      ),
      note("Money in the cash ledger is held under heads — tax, interest, penalty, fee and others — for each of IGST, CGST, SGST and cess."),
    ),
    screen(
      "Paying tax",
      steps(
        ["Create a challan", "Generate form PMT-06 on the GST Portal, showing the amount under each tax head."],
        ["Pay", "By net banking, UPI, card, NEFT/RTGS or over the counter at an authorised bank."],
        ["Cash ledger is credited", "The payment appears in your electronic cash ledger."],
        ["Set off in GSTR-3B", "Use ITC in the order set by law (Module 7), then cash for the balance."],
      ),
      caution("RCM tax, interest and late fees must be paid in cash — never from the credit ledger."),
    ),
    screen(
      "Interest",
      terms(
        ["Late payment of tax — Section 50(1)", "Interest at 18% a year from the day after the due date until payment. For returns filed late, interest applies to the part of the tax paid in cash."],
        ["ITC wrongly availed and used — Section 50(3)", "Interest at the notified rate, currently 18% a year."],
      ),
      p("Interest is calculated per day:"),
      example(
        [["Tax paid late", "₹50,000"], ["Days late", "30"], ["Interest = ₹50,000 × 18% × 30 ÷ 365", "₹739.73"]],
        ["Interest payable (rounded)", "₹740"],
      ),
    ),
    screen(
      "Late fees",
      p("Filing GSTR-1 or GSTR-3B late attracts a late fee:"),
      table(
        ["Situation", "Late fee (CGST + SGST combined)"],
        [
          ["Regular return", "₹50 per day"],
          ["Nil return", "₹20 per day"],
          ["Maximum — nil return", "₹500"],
          ["Maximum — turnover up to ₹1.5 crore", "₹2,000"],
          ["Maximum — turnover ₹1.5 crore to ₹5 crore", "₹5,000"],
          ["Maximum — turnover above ₹5 crore", "₹10,000"],
        ],
      ),
      note("Late fees can't be paid from ITC. Separate late fee rules apply to annual returns. Check the current notifications for the exact amounts."),
    ),
    screen(
      "Worked example: filing GSTR-3B late",
      p("A business with ₹1 crore turnover files its GSTR-3B 12 days late. It owes ₹80,000 tax, of which ₹30,000 is paid in cash after using ITC."),
      table(
        ["Item", "Calculation", "Amount"],
        [
          ["Interest", "₹30,000 × 18% × 12 ÷ 365", "≈ ₹178"],
          ["Late fee", "₹50 × 12 days (cap ₹2,000 not reached)", "₹600"],
          ["Tax paid in cash", "", "₹30,000"],
        ],
        { footer: ["Total cash outflow", "", "≈ ₹30,778"] },
      ),
      p("Interest applies only to the ₹30,000 paid in cash, not to the part settled by ITC."),
    ),
    screen(
      "When refunds arise",
      p("A refund can be claimed when, for example:"),
      bullets(
        "Goods or services are exported (zero-rated) — Module 13.",
        "There is an inverted duty structure, where tax on inputs is higher than tax on outputs, leaving unused ITC.",
        "Excess money is left in the electronic cash ledger.",
        "Tax was paid by mistake, such as IGST paid instead of CGST + SGST.",
      ),
      note("At its 57th meeting, the GST Council recommended allowing refunds of ITC on input services under the inverted duty structure. Such changes apply only once notified — check the notification."),
    ),
    screen(
      "Claiming a refund",
      steps(
        ["Check eligibility and time limit", "Generally apply within two years from the relevant date (Section 54)."],
        ["File form RFD-01", "On the GST Portal, with the supporting statements and documents."],
        ["Track and respond", "Answer any deficiency memo or notice from the officer."],
        ["Receive the refund", "Credited to the bank account registered on the GST Portal."],
      ),
      tip("Keep records ready", "Invoices, shipping bills, bank realisation and ITC working papers speed up refunds."),
    ),
    mistakes(
      ["Paying late fees or interest from ITC", "They must be paid in cash."],
      ["Paying under the wrong head", "IGST paid instead of CGST + SGST needs a refund or adjustment."],
      ["Ignoring interest on late payment", "It's due even if not demanded."],
      ["Leaving money idle in the cash ledger", "Use it or claim a refund."],
      ["Missing the two-year refund deadline", "Late claims are rejected."],
    ),
    check(
      12,
      q("Which form is used to create a GST payment challan?", ["RFD-01", "PMT-06", "CMP-08", "GSTR-1"], 1, "PMT-06 is the challan."),
      q("What is the interest rate on tax paid late?", ["12% a year", "18% a year", "24% a year", "2% a month"], 1, "Section 50(1) interest is 18% a year."),
      q("₹50,000 of tax is paid 30 days late. What is the interest, rounded?", ["₹740", "₹900", "₹1,500", "₹9,000"], 0, "₹50,000 × 18% × 30 ÷ 365 ≈ ₹740."),
      q("What is the late fee for a regular GSTR-3B filed 12 days late by a ₹1 crore business?", ["₹240", "₹600", "₹2,000", "₹5,000"], 1, "₹50 × 12 days, below the ₹2,000 cap."),
      q("Within what period should a refund generally be claimed?", ["Six months", "One year", "Two years from the relevant date", "Five years"], 2, "Section 54."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Interest",
          ["₹1,20,000 of tax is paid in cash 20 days late.", "Calculate the interest."],
          ["₹1,20,000 × 18% × 20 ÷ 365 = ₹1,183.56 — about ₹1,184."],
        ],
        [
          "Exercise 2 — Late fee with a cap",
          ["A business with ₹1 crore turnover files a regular GSTR-3B 60 days late.", "What is the late fee?"],
          ["₹50 × 60 = ₹3,000, but the cap for turnover up to ₹1.5 crore is ₹2,000.", "Late fee = ₹2,000."],
        ],
        [
          "Exercise 3 — Nil return",
          ["A business files a nil GSTR-3B 15 days late.", "What is the late fee?"],
          ["₹20 × 15 = ₹300 (below the ₹500 cap for nil returns)."],
        ],
      ),
    ),
    summary(
      [
        "The cash, credit and liability ledgers",
        "How to pay tax with a PMT-06 challan",
        "Interest under Section 50 and how to calculate it",
        "Late fees and their caps",
        "When refunds arise and how to claim them",
      ],
      "Pay on time from the right ledger. Interest and late fees are avoidable costs — and refunds have deadlines too.",
    ),
  ],
  12: [
    {
      title: "Exports are zero-rated",
      blocks: [
        {
          type: "paragraph",
          text: "Exports of goods and services, and supplies to SEZ units or developers, are zero-rated supplies under Section 16 of the IGST Act. No GST is effectively borne on them, and the exporter can still claim input tax credit on purchases.",
        },
        { type: "paragraph", text: "A supply of services counts as an export when all of these hold:" },
        {
          type: "bullets",
          items: [
            "The supplier is located in India.",
            "The recipient is located outside India.",
            "The place of supply is outside India.",
            "Payment is received in convertible foreign exchange, or in Indian rupees where the RBI permits.",
            "The supplier and recipient aren't merely establishments of the same person.",
          ],
        },
      ],
    },
    {
      title: "Two ways to export",
      blocks: [
        {
          type: "compare",
          items: [
            {
              title: "Under a Letter of Undertaking (LUT)",
              text: "File an LUT (form RFD-11) on the GST Portal for the financial year, then export without paying IGST. Claim a refund of the unused ITC.",
              examples: ["No tax paid upfront", "Refund of ITC"],
            },
            {
              title: "With payment of IGST",
              text: "Charge and pay IGST on the export (ITC can be used to pay it), then claim a refund of the IGST paid.",
              examples: ["Tax paid, then refunded", "Shipping bill acts as the refund claim for goods"],
            },
          ],
        },
        {
          type: "tip",
          title: "Which is better?",
          text: "Most regular exporters use an LUT, because no tax is paid upfront and working capital isn't blocked. Renew the LUT before each financial year starts.",
        },
        {
          type: "note",
          text: "Supplies to an SEZ unit or developer are treated as inter-state supplies, even when the SEZ is in your own State, so IGST rules apply. They can be made under an LUT or with payment of IGST, just like exports.",
        },
      ],
    },
    {
      title: "GST on imports",
      blocks: [
        {
          type: "paragraph",
          text: "Imported goods attract IGST at the border under the Customs Tariff Act, collected by Customs along with basic customs duty (BCD). IGST is charged on the assessable value plus customs duties.",
        },
        {
          type: "example",
          rows: [
            { label: "Assessable value", value: "₹1,00,000" },
            { label: "Basic customs duty at 10%", value: "₹10,000" },
            { label: "Social welfare surcharge (10% of BCD)", value: "₹1,000" },
            { label: "Value for IGST", value: "₹1,11,000" },
            { label: "IGST at 18%", value: "₹19,980" },
          ],
          total: { label: "Total duties and tax", value: "₹30,980" },
        },
        {
          type: "list",
          items: [
            { term: "ITC on imported goods", text: "IGST paid on import (shown in the bill of entry) is eligible ITC. BCD and the surcharge are costs, not credits." },
            { term: "Import of services", text: "The recipient in India pays IGST under reverse charge (Module 9) and can then claim it as ITC." },
          ],
        },
        {
          type: "note",
          text: "Customs duty rates vary by product. The 10% BCD here is only for the example.",
        },
      ],
    },
    {
      title: "Module 13 — Knowledge check",
      blocks: [
        {
          type: "paragraph",
          text: "Answer these five questions, then press Check answers. Score at least 4 out of 5 to complete the module.",
        },
        {
          type: "knowledge-check",
          passCount: 4,
          questions: [
            {
              question: "How are exports treated under GST?",
              options: ["Exempt supplies", "Zero-rated supplies", "Taxed at 5%", "Outside GST, with no ITC"],
              answer: 1,
              explanation: "Exports are zero-rated: no GST is effectively borne, and ITC remains available.",
            },
            {
              question: "Which form is used to file a Letter of Undertaking?",
              options: ["RFD-01", "RFD-11", "PMT-06", "CMP-02"],
              answer: 1,
              explanation: "The LUT is filed in form RFD-11.",
            },
            {
              question: "Assessable value ₹1,00,000, BCD ₹10,000 and surcharge ₹1,000. What is IGST at 18%?",
              options: ["₹18,000", "₹19,800", "₹19,980", "₹21,600"],
              answer: 2,
              explanation: "IGST is charged on ₹1,11,000 (value plus duties): 18% = ₹19,980.",
            },
            {
              question: "A Mumbai business supplies an SEZ unit in Mumbai. Which tax applies?",
              options: ["CGST + SGST", "IGST — supplies to SEZs are inter-state", "No tax and no ITC", "Customs duty"],
              answer: 1,
              explanation: "Supplies to SEZ units are treated as inter-state and zero-rated.",
            },
            {
              question: "Who pays the GST on services imported from a foreign supplier?",
              options: ["The foreign supplier", "The recipient in India, under reverse charge", "Customs", "Nobody"],
              answer: 1,
              explanation: "IGST on imported services is paid by the Indian recipient under reverse charge.",
            },
          ],
        },
      ],
    },
  ],
  13: [
    {
      title: "Setting up GST in your software",
      blocks: [
        {
          type: "paragraph",
          text: "Tally Prime, Zoho Books and similar software follow the same pattern. Set GST up once correctly, and your invoices and return data follow automatically.",
        },
        {
          type: "steps",
          items: [
            { title: "Enable GST for the company", text: "Enter the GSTIN, State, registration type (regular or composition) and the date GST applies from." },
            { title: "Set up items and services", text: "Give each item its HSN or SAC code and GST rate." },
            { title: "Set up customers and suppliers", text: "Record each party's GSTIN, State and registration type, so the software picks CGST + SGST or IGST correctly." },
            { title: "Create tax ledgers", text: "Separate ledgers for output tax, input tax and reverse charge, by tax head." },
          ],
        },
        {
          type: "table",
          headers: ["Ledger group", "Typical ledgers"],
          rows: [
            ["Output tax (liability)", "Output CGST, Output SGST, Output IGST"],
            ["Input tax (asset)", "Input CGST, Input SGST, Input IGST"],
            ["Reverse charge", "CGST/SGST/IGST payable under RCM, with matching input ledgers"],
          ],
        },
      ],
    },
    {
      title: "Recording GST transactions",
      blocks: [
        { type: "heading", text: "Intra-state sale of ₹50,000 at 18%" },
        {
          type: "table",
          headers: ["Account", "Debit (₹)", "Credit (₹)"],
          rows: [
            ["Customer", "59,000", "—"],
            ["Sales", "—", "50,000"],
            ["Output CGST", "—", "4,500"],
            ["Output SGST", "—", "4,500"],
          ],
          footer: ["Total", "59,000", "59,000"],
          numeric: [1, 2],
        },
        { type: "heading", text: "Inter-state purchase of ₹20,000 at 18%" },
        {
          type: "table",
          headers: ["Account", "Debit (₹)", "Credit (₹)"],
          rows: [
            ["Purchases", "20,000", "—"],
            ["Input IGST", "3,600", "—"],
            ["Supplier", "—", "23,600"],
          ],
          footer: ["Total", "23,600", "23,600"],
          numeric: [1, 2],
        },
        {
          type: "tip",
          title: "Let the software decide the tax head",
          text: "If the party's State and your State are set up correctly, the software chooses CGST + SGST or IGST for you. Most errors come from a wrong State or GSTIN on the party record.",
        },
      ],
    },
    {
      title: "Return data, reconciliation and month-end",
      blocks: [
        {
          type: "paragraph",
          text: "GST reports in your software summarise the month's sales into GSTR-1 sections and the tax and ITC into GSTR-3B. Many tools export a JSON file that you upload to the GST Portal.",
        },
        { type: "heading", text: "Reconciling purchases with GSTR-2B" },
        {
          type: "table",
          headers: ["Result", "What it means", "Action"],
          rows: [
            ["Matched", "In your books and in GSTR-2B", "Claim the ITC"],
            ["In books, not in GSTR-2B", "The supplier hasn't reported it", "Hold the ITC and follow up with the supplier"],
            ["In GSTR-2B, not in books", "Missing entry, or not your purchase", "Record it, or reject it in the IMS"],
            ["Amount mismatch", "Typing error by you or the supplier", "Correct your entry, or ask for an amendment"],
          ],
        },
        { type: "heading", text: "Month-end GST checklist" },
        {
          type: "bullets",
          items: [
            "All sales invoices, credit notes and debit notes recorded.",
            "All purchases recorded, including reverse charge items and imports.",
            "Purchases reconciled with GSTR-2B; blocked credits excluded.",
            "GSTR-1 data checked against the sales register.",
            "Tax liability, ITC set-off and cash payment worked out for GSTR-3B.",
            "GST ledger balances in your books agree with the returns filed.",
          ],
        },
      ],
    },
    {
      title: "Module 14 — Knowledge check",
      blocks: [
        {
          type: "paragraph",
          text: "Answer these five questions, then press Check answers. Score at least 4 out of 5 to complete the module.",
        },
        {
          type: "knowledge-check",
          passCount: 4,
          questions: [
            {
              question: "What does the software mainly use to choose CGST + SGST or IGST on an invoice?",
              options: ["The item price", "The party's State compared with yours", "The invoice number", "The payment terms"],
              answer: 1,
              explanation: "The tax head depends on whether the supply is intra-state or inter-state, which comes from the State on the party record.",
            },
            {
              question: "An intra-state sale of ₹50,000 at 18% is recorded. What is the customer debited?",
              options: ["₹50,000", "₹54,500", "₹59,000", "₹68,000"],
              answer: 2,
              explanation: "₹50,000 plus CGST ₹4,500 and SGST ₹4,500 = ₹59,000.",
            },
            {
              question: "Input IGST is what kind of balance in your books?",
              options: ["Income", "Expense", "Asset (credit available)", "Liability"],
              answer: 2,
              explanation: "Input tax is credit you can use against output tax, so it sits as an asset.",
            },
            {
              question: "A purchase is in your books but not in GSTR-2B. What should you do?",
              options: [
                "Claim the ITC anyway",
                "Hold the ITC and follow up with the supplier",
                "Delete the purchase",
                "Pay the supplier's tax yourself",
              ],
              answer: 1,
              explanation: "ITC generally needs the invoice to appear in GSTR-2B, so hold it and ask the supplier to report it.",
            },
            {
              question: "Which check belongs on a month-end GST checklist?",
              options: [
                "Reconcile purchases with GSTR-2B",
                "Renew GST registration",
                "File the income tax return",
                "Change HSN codes every month",
              ],
              answer: 0,
              explanation: "Reconciling purchases with GSTR-2B every month is a core month-end step.",
            },
          ],
        },
      ],
    },
  ],
  14: [
    {
      title: "The business and the month's transactions",
      blocks: [
        {
          type: "paragraph",
          text: "Panda Traders is a regular GST taxpayer in Delhi (State code 07) trading in office furniture taxed at 18%. Handle its GST for one month.",
        },
        {
          type: "table",
          headers: ["Transaction", "Taxable value (₹)", "GST"],
          rows: [
            ["Sales to customers in Delhi", "2,50,000", "CGST + SGST at 9% each"],
            ["Sales to a customer in Punjab (State code 03)", "1,50,000", "IGST at 18%"],
            ["Purchases from a supplier in Delhi", "1,20,000", "CGST + SGST at 9% each"],
            ["Purchases from a supplier in Haryana", "80,000", "IGST at 18%"],
            ["Legal fees to an advocate (reverse charge)", "20,000", "CGST + SGST at 9% each, paid by Panda Traders"],
            ["Purchase invoice missing from GSTR-2B", "10,000", "CGST + SGST ₹900 each — ITC held"],
          ],
          numeric: [1],
        },
        {
          type: "steps",
          items: [
            { title: "Check the GSTIN", text: "Panda Traders' GSTIN starts with 07 (Delhi). The Punjab customer's starts with 03." },
            { title: "Raise invoices", text: "CGST + SGST for Delhi customers, IGST for the Punjab customer (Module 6)." },
            { title: "Record purchases", text: "Including a self-invoice for the legal fees under reverse charge (Module 9)." },
            { title: "Reconcile with GSTR-2B", text: "The ₹10,000 invoice isn't in GSTR-2B, so its ITC is held until the supplier reports it." },
          ],
        },
      ],
    },
    {
      title: "Work out the liability and ITC",
      blocks: [
        { type: "heading", text: "Output tax" },
        {
          type: "table",
          headers: ["Supply", "CGST (₹)", "SGST (₹)", "IGST (₹)"],
          rows: [
            ["Delhi sales ₹2,50,000", "22,500", "22,500", "—"],
            ["Punjab sale ₹1,50,000", "—", "—", "27,000"],
          ],
          footer: ["Total output tax", "22,500", "22,500", "27,000"],
          numeric: [1, 2, 3],
        },
        { type: "heading", text: "Eligible input tax credit" },
        {
          type: "table",
          headers: ["Source", "CGST (₹)", "SGST (₹)", "IGST (₹)"],
          rows: [
            ["Delhi purchases ₹1,20,000", "10,800", "10,800", "—"],
            ["Haryana purchases ₹80,000", "—", "—", "14,400"],
            ["Reverse charge on legal fees ₹20,000", "1,800", "1,800", "—"],
          ],
          footer: ["Total ITC", "12,600", "12,600", "14,400"],
          numeric: [1, 2, 3],
        },
        {
          type: "note",
          text: "The ₹1,800 of GST on the invoice missing from GSTR-2B is left out until it appears. The reverse charge ITC is available because the tax is paid in this month's GSTR-3B.",
        },
      ],
    },
    {
      title: "Set off ITC and pay the balance",
      blocks: [
        {
          type: "table",
          headers: ["Tax head", "Output tax (₹)", "ITC used (₹)", "Paid in cash (₹)"],
          rows: [
            ["IGST", "27,000", "14,400 (IGST credit)", "12,600"],
            ["CGST", "22,500", "12,600 (CGST credit)", "9,900"],
            ["SGST", "22,500", "12,600 (SGST credit)", "9,900"],
          ],
          footer: ["Forward charge total", "72,000", "39,600", "32,400"],
          numeric: [1, 3],
        },
        {
          type: "example",
          rows: [
            { label: "Cash for forward charge tax", value: "₹32,400" },
            { label: "Reverse charge tax (must be paid in cash)", value: "₹3,600" },
          ],
          total: { label: "Total cash payment through PMT-06", value: "₹36,000" },
        },
        {
          type: "steps",
          items: [
            { title: "GSTR-1 by the 11th", text: "B2B invoices for the Delhi and Punjab customers, the HSN summary and the documents issued." },
            { title: "GSTR-3B by the 20th", text: "Outward supplies ₹4,00,000; reverse charge supplies ₹20,000; ITC as above; pay ₹36,000 in cash." },
          ],
        },
      ],
    },
    {
      title: "Module 15 — Knowledge check",
      blocks: [
        {
          type: "paragraph",
          text: "Answer these five questions about the project, then press Check answers. Score at least 4 out of 5 to complete the module and the course.",
        },
        {
          type: "knowledge-check",
          passCount: 4,
          questions: [
            {
              question: "Which tax applies to Panda Traders' sale to the customer in Punjab?",
              options: ["CGST + SGST", "IGST", "UTGST", "No tax — it's an export"],
              answer: 1,
              explanation: "Delhi to Punjab is an inter-state supply, so IGST applies.",
            },
            {
              question: "What is the total output tax for the month?",
              options: ["₹45,000", "₹63,000", "₹72,000", "₹75,600"],
              answer: 2,
              explanation: "CGST ₹22,500 + SGST ₹22,500 + IGST ₹27,000 = ₹72,000.",
            },
            {
              question: "Why is the ₹1,800 of GST on the ₹10,000 purchase not claimed this month?",
              options: [
                "It's a blocked credit",
                "The invoice isn't in GSTR-2B yet",
                "Purchases from Delhi have no ITC",
                "It exceeds the ITC limit",
              ],
              answer: 1,
              explanation: "ITC is held until the supplier reports the invoice and it appears in GSTR-2B.",
            },
            {
              question: "How much IGST must be paid in cash after using IGST credit?",
              options: ["₹0", "₹12,600", "₹14,400", "₹27,000"],
              answer: 1,
              explanation: "IGST output ₹27,000 minus IGST credit ₹14,400 = ₹12,600.",
            },
            {
              question: "What is the total cash payment for the month, including reverse charge?",
              options: ["₹32,400", "₹34,200", "₹36,000", "₹39,600"],
              answer: 2,
              explanation: "₹32,400 for forward charge tax plus ₹3,600 reverse charge tax, which must be paid in cash = ₹36,000.",
            },
          ],
        },
      ],
    },
  ],
}

export default lessons
