import type { CourseLessons } from "@/lib/lessonTypes"

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
    {
      title: "How GST rates are set — and the current slabs",
      blocks: [
        {
          type: "paragraph",
          text: "GST rates are recommended by the GST Council and put into effect through rate notifications issued by the Central and State Governments. The notification — not a news report or a price list — is what decides the rate for an item.",
        },
        {
          type: "table",
          headers: ["Rate", "Broadly applies to"],
          rows: [
            ["Nil (0%)", "Specified essential goods and services, such as certain unprocessed foods, as listed in the exemption and nil-rate notifications"],
            ["5%", "Merit and everyday-use goods and services"],
            ["18%", "The standard rate — most goods and services"],
            ["40%", "A special rate for select luxury and “sin” goods, such as aerated sugary drinks and large luxury cars"],
            ["3%", "Gold, silver, platinum and jewellery"],
            ["0.25%", "Diamonds and other precious and semi-precious stones"],
          ],
        },
        {
          type: "paragraph",
          text: "For an intra-state supply the rate is split equally between CGST and SGST (for example 18% = 9% + 9%). For an inter-state supply the whole rate is charged as IGST.",
        },
        {
          type: "note",
          text: "The examples are broad categories, not a rate list. Always check the exact entry in the current rate notification for the item you are invoicing.",
        },
      ],
    },
    {
      title: "GST 2.0 — the September 2025 rate rationalisation",
      blocks: [
        {
          type: "paragraph",
          text: "From 1 July 2017 until September 2025, most goods and services fell into four main slabs — 5%, 12%, 18% and 28% — with compensation cess on top for some goods.",
        },
        {
          type: "paragraph",
          text: "On the recommendation of the 56th GST Council meeting, a simpler structure took effect on 22 September 2025:",
        },
        {
          type: "bullets",
          items: [
            "Most items in the 12% slab moved to 5%.",
            "Most items in the 28% slab moved to 18%.",
            "A 40% rate was introduced for select luxury and sin goods.",
            "Compensation cess was removed for most goods, with GST rates adjusted instead.",
          ],
        },
        {
          type: "caution",
          text: "When rates change, the rate that applies depends on the time of supply (Module 6), not just the invoice date. Transactions that straddle a rate change need special care.",
        },
        {
          type: "link",
          label: "Official source",
          text: "PIB — Recommendations of the 56th GST Council meeting",
          href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2163555&reg=48&lang=2",
        },
      ],
    },
    {
      title: "Classifying goods (HSN) and services (SAC)",
      blocks: [
        {
          type: "paragraph",
          text: "Rates are linked to classification codes. Goods use HSN codes; services use SAC codes, which start with 99.",
        },
        {
          type: "table",
          headers: ["HSN digits", "Level", "Example — a laptop"],
          rows: [
            ["2", "Chapter", "84 — machinery and mechanical appliances"],
            ["4", "Heading", "8471 — automatic data-processing machines"],
            ["6", "Sub-heading", "847130 — portable machines such as laptops"],
            ["8", "Tariff item", "The most detailed level"],
          ],
        },
        {
          type: "paragraph",
          text: "On tax invoices, businesses with aggregate turnover up to ₹5 crore in the previous year generally show at least 4-digit HSN codes, and those above ₹5 crore show at least 6 digits.",
        },
        { type: "heading", text: "Finding the correct rate" },
        {
          type: "steps",
          items: [
            { title: "Describe the item exactly", text: "Material, use, specification and how it is sold." },
            { title: "Classify it", text: "Find the HSN or SAC code using the tariff and official search tools." },
            { title: "Find the rate entry", text: "Look up that code in the current rate notification, including any conditions." },
            { title: "Record your reasoning", text: "Keep a note of the code, notification entry and date checked." },
          ],
        },
        {
          type: "link",
          label: "Search codes",
          text: "GST Portal — Search HSN/SAC code",
          href: "https://services.gst.gov.in/services/searchhsnsac",
        },
      ],
    },
    {
      title: "Module 5 — Knowledge check",
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
              question: "What finally decides the GST rate for an item?",
              options: ["A news report", "The applicable rate notification", "The supplier's price list", "The customer's request"],
              answer: 1,
              explanation: "The GST Council recommends rates, but the rate notification issued by the Government is what applies.",
            },
            {
              question: "What is the standard GST rate that applies to most goods and services after GST 2.0?",
              options: ["5%", "12%", "18%", "28%"],
              answer: 2,
              explanation: "18% is the standard rate. Most items formerly at 28% moved to 18%, and most at 12% moved to 5%.",
            },
            {
              question: "From which date did the GST 2.0 rate structure take effect?",
              options: ["1 July 2017", "1 April 2025", "22 September 2025", "1 February 2026"],
              answer: 2,
              explanation: "The rationalised rates took effect on 22 September 2025, following the 56th GST Council meeting.",
            },
            {
              question: "An 18% intra-state supply is shown on the invoice as:",
              options: ["18% IGST", "9% CGST + 9% SGST", "18% CGST + 18% SGST", "12% CGST + 6% SGST"],
              answer: 1,
              explanation: "Intra-state supplies split the rate equally between CGST and SGST; inter-state supplies carry the full rate as IGST.",
            },
            {
              question: "Which codes are used to classify services?",
              options: ["HSN codes", "SAC codes starting with 99", "GSTIN codes", "PAN codes"],
              answer: 1,
              explanation: "Services use SAC codes, which begin with 99. Goods use HSN codes.",
            },
          ],
        },
      ],
    },
  ],
  5: [
    {
      title: "Time of supply — when GST becomes payable",
      blocks: [
        {
          type: "paragraph",
          text: "The time of supply decides the tax period in which GST must be paid — and, when rates change, which rate applies.",
        },
        {
          type: "table",
          headers: ["Supply", "General rule"],
          rows: [
            [
              "Goods (Section 12)",
              "The earlier of the date the invoice is issued and the last date by which it should have been issued. For normal taxpayers, GST is generally not payable on advances received for goods.",
            ],
            [
              "Services (Section 13)",
              "If the invoice is issued on time (generally within 30 days of supply), the earlier of the invoice date and the date payment is received. If not issued on time, the earlier of the date of supply and the payment date.",
            ],
          ],
        },
        {
          type: "tip",
          title: "Example",
          text: "A consultant completes work on 5 May, issues the invoice on 20 May and is paid on 10 June. The invoice was issued within 30 days, so the time of supply is 20 May — the GST goes into May's return.",
        },
        {
          type: "note",
          text: "Special rules apply to reverse charge, vouchers and some continuous supplies. Advances for services are taxable when received.",
        },
      ],
    },
    {
      title: "Value of supply — what to include",
      blocks: [
        {
          type: "paragraph",
          text: "GST is charged on the value of supply. Under Section 15, this is normally the transaction value — the price actually paid or payable, where the supplier and recipient are not related and price is the only consideration.",
        },
        { type: "heading", text: "Include in the taxable value" },
        {
          type: "bullets",
          items: [
            "Taxes, duties and fees other than GST charged by the supplier.",
            "Amounts the supplier owes but the customer pays on the supplier's behalf.",
            "Incidental expenses charged to the customer, such as packing, commission and delivery by the supplier.",
            "Interest, late fees or penalties for delayed payment.",
            "Subsidies directly linked to the price (except those from the Central and State Governments).",
          ],
        },
        {
          type: "example",
          rows: [
            { label: "Price of goods", value: "₹1,00,000" },
            { label: "Packing charged to customer", value: "₹2,000" },
            { label: "Delivery charged by supplier", value: "₹3,000" },
            { label: "Taxable value", value: "₹1,05,000" },
            { label: "GST at an assumed 18%", value: "₹18,900" },
          ],
          total: { label: "Invoice total", value: "₹1,23,900" },
        },
      ],
    },
    {
      title: "Discounts and their GST treatment",
      blocks: [
        {
          type: "paragraph",
          text: "Section 15(3) allows two kinds of discount to reduce the taxable value:",
        },
        {
          type: "cards",
          items: [
            {
              title: "Before or at the time of supply",
              text: "Excluded from value if it is recorded on the invoice — for example, a trade discount shown on the tax invoice.",
            },
            {
              title: "After the supply",
              text: "Excluded only if the supplier issues a credit note for it and the recipient reverses the input tax credit attributable to the discount, as provided under Section 34.",
            },
          ],
        },
        {
          type: "caution",
          text: "A discount that doesn't meet these conditions doesn't reduce the GST payable, even if it reduces the amount the customer pays.",
        },
        {
          type: "link",
          label: "Official source",
          text: "CGST Act — Section 15 (CBIC)",
          href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter4/section15_v1.00.html",
        },
      ],
    },
    {
      title: "Place of supply",
      blocks: [
        {
          type: "paragraph",
          text: "Place of supply decides whether a supply is intra-state (CGST + SGST) or inter-state (IGST). The rules are in Sections 10 to 13 of the IGST Act.",
        },
        {
          type: "table",
          headers: ["Situation", "General place of supply"],
          rows: [
            ["Goods that are moved", "Where the movement ends for delivery to the recipient"],
            ["Goods delivered on a third party's instructions (bill-to, ship-to)", "The principal place of business of the third party who gave the instructions"],
            ["Goods not moved", "Where the goods are at the time of delivery"],
            ["Services — general rule, registered recipient", "The recipient's location"],
            ["Services — general rule, unregistered recipient", "The recipient's address on record, or else the supplier's location"],
            ["Services linked to immovable property", "Where the property is located"],
            ["Restaurant, catering and similar services", "Where the services are actually performed"],
          ],
        },
        {
          type: "caution",
          text: "Many services have specific rules, and imports and exports follow separate provisions. Check the relevant section before deciding the tax type.",
        },
      ],
    },
    {
      title: "Module 6 — Knowledge check",
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
              question: "A service is completed on 5 May, invoiced on 20 May and paid on 10 June. What is the time of supply?",
              options: ["5 May", "20 May", "10 June", "31 May"],
              answer: 1,
              explanation: "The invoice was issued within 30 days, so the time of supply is the earlier of the invoice date (20 May) and the payment date (10 June).",
            },
            {
              question: "Goods priced at ₹1,00,000 carry ₹2,000 packing and ₹3,000 delivery charged by the supplier. What is the taxable value?",
              options: ["₹1,00,000", "₹1,02,000", "₹1,05,000", "₹1,23,900"],
              answer: 2,
              explanation: "Incidental charges such as packing and delivery charged by the supplier are part of the value: ₹1,05,000.",
            },
            {
              question: "When does a discount given after the supply reduce the taxable value?",
              options: [
                "Always",
                "Only if a credit note is issued and the recipient reverses the related ITC",
                "Only if the customer pays in cash",
                "Never",
              ],
              answer: 1,
              explanation: "Under Section 15(3)(b), a post-supply discount reduces value only with a credit note and a reversal of the attributable ITC by the recipient.",
            },
            {
              question: "For goods that are moved, the general place of supply is:",
              options: [
                "The supplier's registered office",
                "Where the movement ends for delivery to the recipient",
                "Where the invoice is printed",
                "The bank's location",
              ],
              answer: 1,
              explanation: "Under Section 10 of the IGST Act, the place of supply of moved goods is where the movement terminates for delivery.",
            },
            {
              question: "Which of these is NOT included in the taxable value?",
              options: ["Packing charged to the customer", "Interest for late payment", "The GST itself", "Delivery charged by the supplier"],
              answer: 2,
              explanation: "GST is charged on the value — it is never part of the value itself.",
            },
          ],
        },
      ],
    },
  ],
  6: [
    {
      title: "What input tax credit is",
      blocks: [
        {
          type: "paragraph",
          text: "Input tax credit (ITC) lets a registered business deduct the GST it paid on eligible business purchases from the GST it owes on its sales. This is how GST avoids tax on tax.",
        },
        {
          type: "example",
          rows: [
            { label: "Output GST on sales", value: "₹18,000" },
            { label: "Less: eligible ITC on purchases", value: "₹12,000" },
          ],
          total: { label: "GST payable", value: "₹6,000" },
        },
        {
          type: "note",
          text: "ITC is available only on purchases used, or intended to be used, in the course or furtherance of business, and only if the legal conditions are met.",
        },
      ],
    },
    {
      title: "Conditions for claiming ITC",
      blocks: [
        { type: "paragraph", text: "Under Section 16 of the CGST Act, a business can claim ITC only if all of these are met:" },
        {
          type: "checklist",
          title: "ITC conditions",
          items: [
            { title: "Tax invoice or debit note", text: "You hold a valid document from a registered supplier." },
            { title: "Shown in GSTR-2B", text: "The supplier has reported the invoice and it appears in your GSTR-2B." },
            { title: "Goods or services received", text: "Including goods delivered to a third party on your instructions." },
            { title: "Tax paid by the supplier", text: "The supplier has actually paid the tax to the Government." },
            { title: "Return filed", text: "You have filed your own GSTR-3B." },
          ],
        },
        {
          type: "bullets",
          items: [
            "Time limit: ITC must be claimed by 30 November after the end of the financial year, or the date of filing the annual return, if earlier.",
            "180-day rule: if you don't pay the supplier within 180 days of the invoice date, reverse the ITC with interest, then claim it again once you pay.",
          ],
        },
      ],
    },
    {
      title: "Blocked credits and capital goods",
      blocks: [
        {
          type: "paragraph",
          text: "Section 17(5) blocks ITC on certain items even when they are used in business. Common examples:",
        },
        {
          type: "bullets",
          items: [
            "Motor vehicles for transporting people (with specified exceptions, such as further supply or training).",
            "Food and beverages, outdoor catering, beauty treatment, health services and cosmetic surgery (unless used for the same kind of taxable supply or required by law).",
            "Membership of clubs, health and fitness centres.",
            "Works contracts and goods or services for constructing immovable property — other than plant and machinery.",
            "Goods lost, stolen, destroyed, written off, or given as gifts or free samples.",
            "Goods or services used for personal consumption.",
          ],
        },
        { type: "heading", text: "ITC on capital goods" },
        {
          type: "paragraph",
          text: "ITC on eligible capital goods such as machinery and computers is generally available in full when received. But if depreciation is claimed on the GST component under the Income-tax Act, ITC on that tax can't be claimed (Section 16(3)).",
        },
      ],
    },
    {
      title: "Using ITC — the order of set-off",
      blocks: [
        { type: "paragraph", text: "Section 49(5) fixes the order in which ITC is used against tax payable:" },
        {
          type: "table",
          headers: ["Credit of", "Use first against", "Then against", "Never against"],
          rows: [
            ["IGST", "IGST", "CGST and SGST/UTGST", "—"],
            ["CGST", "CGST", "IGST", "SGST/UTGST"],
            ["SGST/UTGST", "SGST/UTGST", "IGST (only after CGST credit is used up)", "CGST"],
          ],
        },
        {
          type: "tip",
          title: "Remember",
          text: "IGST credit must be used fully before CGST or SGST credit is used. CGST and SGST credits can never be used for each other.",
        },
        {
          type: "link",
          label: "Official source",
          text: "CGST Act — Section 49 (CBIC)",
          href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter10/section49_v1.00.html",
        },
      ],
    },
    {
      title: "Module 7 — Knowledge check",
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
              question: "Output GST is ₹18,000 and eligible ITC is ₹12,000. How much GST is payable?",
              options: ["₹30,000", "₹18,000", "₹12,000", "₹6,000"],
              answer: 3,
              explanation: "₹18,000 − ₹12,000 = ₹6,000.",
            },
            {
              question: "Which is a condition for claiming ITC?",
              options: [
                "The supplier is in the same State",
                "The invoice appears in your GSTR-2B",
                "The purchase is above ₹50,000",
                "You paid in cash",
              ],
              answer: 1,
              explanation: "Section 16(2)(aa) requires the supplier to have reported the invoice so that it appears in your GSTR-2B.",
            },
            {
              question: "What happens if you don't pay a supplier within 180 days of the invoice date?",
              options: [
                "Nothing",
                "You reverse the ITC with interest, and can claim it again after paying",
                "The supplier loses the sale",
                "You must cancel your registration",
              ],
              answer: 1,
              explanation: "The ITC must be reversed with interest; it can be re-claimed once the supplier is paid.",
            },
            {
              question: "ITC on which of these is generally blocked?",
              options: ["Raw materials for production", "Office computers", "A club membership for staff", "Goods bought for resale"],
              answer: 2,
              explanation: "Section 17(5) blocks ITC on membership of clubs and health and fitness centres.",
            },
            {
              question: "Which credit must be used first?",
              options: ["CGST", "SGST", "IGST", "Any, in any order"],
              answer: 2,
              explanation: "IGST credit must be fully used (against IGST, then CGST and SGST) before CGST or SGST credit.",
            },
          ],
        },
      ],
    },
  ],
  7: [
    {
      title: "Tax invoices — when and what",
      blocks: [
        {
          type: "bullets",
          items: [
            "Goods: issue the invoice before or at the time of removal or delivery.",
            "Services: generally within 30 days of supply.",
            "Reverse charge purchases from unregistered suppliers: the recipient issues a self-invoice within 30 days of receiving the supply (Rule 47A, from 1 November 2024).",
          ],
        },
        {
          type: "checklist",
          title: "Mandatory contents of a tax invoice (Rule 46)",
          items: [
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
          ],
        },
      ],
    },
    {
      title: "Other GST documents",
      blocks: [
        {
          type: "table",
          headers: ["Document", "When it is used"],
          rows: [
            ["Bill of supply", "For exempt supplies, and by composition taxpayers, instead of a tax invoice"],
            ["Credit note", "To reduce value or tax — for example sales returns, post-supply discounts or overcharging"],
            ["Debit note", "To increase value or tax — for example undercharging"],
            ["Delivery challan", "For movement of goods that is not a supply, or not yet one — such as job work or goods sent on approval"],
            ["Receipt voucher", "When an advance payment is received"],
            ["Refund voucher", "When an advance is refunded and no supply is made"],
            ["Payment voucher", "When paying a supplier for supplies taxed under reverse charge"],
          ],
        },
        {
          type: "note",
          text: "A credit note must generally be declared by 30 November after the end of the financial year, or the date of filing the annual return, if earlier.",
        },
      ],
    },
    {
      title: "E-invoicing — IRN and QR code",
      blocks: [
        {
          type: "paragraph",
          text: "Businesses whose aggregate turnover has exceeded ₹5 crore in any financial year since 2017-18 must e-invoice. They report B2B invoices, credit and debit notes and exports to the Invoice Registration Portal (IRP), which returns:",
        },
        {
          type: "list",
          items: [
            { term: "IRN", text: "a unique Invoice Reference Number." },
            { term: "Signed QR code", text: "printed on the invoice so it can be verified." },
          ],
        },
        {
          type: "bullets",
          items: [
            "An invoice that should be e-invoiced but isn't reported is not a valid invoice — and the buyer's ITC is at risk.",
            "Businesses with aggregate turnover of ₹10 crore or more must report invoices to the IRP within 30 days of the invoice date (from 1 April 2025).",
            "Certain sectors are exempt, such as banking and insurance companies and SEZ units.",
          ],
        },
      ],
    },
    {
      title: "E-way bills",
      blocks: [
        {
          type: "paragraph",
          text: "Under Rule 138, an e-way bill is generally needed before moving goods of consignment value exceeding ₹50,000 — whether for a sale, for reasons other than supply, or for inward supply from an unregistered person.",
        },
        {
          type: "steps",
          items: [
            { title: "Part A", text: "Enter the invoice details, the parties and the value of goods." },
            { title: "Part B", text: "Enter the transport details, such as the vehicle number." },
            { title: "Generate", text: "Get the e-way bill number (EBN) before the movement starts." },
          ],
        },
        {
          type: "table",
          headers: ["Distance", "Validity (regular cargo)"],
          rows: [
            ["Up to 200 km", "1 day"],
            ["Every further 200 km or part of it", "1 more day"],
          ],
        },
        {
          type: "caution",
          text: "Some States set different limits for movement within the State, and certain goods and movements are exempt. Check the applicable rules before moving goods.",
        },
      ],
    },
    {
      title: "Module 8 — Knowledge check",
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
              question: "Within how many days of supply should a service invoice generally be issued?",
              options: ["7 days", "15 days", "30 days", "90 days"],
              answer: 2,
              explanation: "A tax invoice for services is generally issued within 30 days of the supply.",
            },
            {
              question: "Which document does a composition taxpayer issue instead of a tax invoice?",
              options: ["Debit note", "Bill of supply", "Delivery challan", "Payment voucher"],
              answer: 1,
              explanation: "Composition taxpayers and suppliers of exempt supplies issue a bill of supply.",
            },
            {
              question: "A business sends goods to a job worker. Which document accompanies the goods?",
              options: ["Tax invoice", "Delivery challan", "Receipt voucher", "Credit note"],
              answer: 1,
              explanation: "Movement that is not a supply, such as sending goods for job work, is covered by a delivery challan.",
            },
            {
              question: "E-invoicing is mandatory for businesses whose aggregate turnover has exceeded:",
              options: ["₹40 lakh", "₹1.5 crore", "₹5 crore", "₹100 crore"],
              answer: 2,
              explanation: "The current threshold is aggregate turnover above ₹5 crore in any financial year since 2017-18.",
            },
            {
              question: "Goods worth ₹80,000 are being moved 450 km by road. Is an e-way bill needed, and how long is it valid?",
              options: [
                "Not needed",
                "Needed — valid for 1 day",
                "Needed — valid for 3 days",
                "Needed — valid for 7 days",
              ],
              answer: 2,
              explanation: "The value exceeds ₹50,000. 450 km = 200 km (1 day) + 200 km (1 day) + 50 km (1 more day) = 3 days.",
            },
          ],
        },
      ],
    },
  ],
  8: [
    {
      title: "Forward charge vs. reverse charge",
      blocks: [
        {
          type: "compare",
          items: [
            {
              title: "Forward charge",
              text: "The normal rule: the supplier charges GST on the invoice, collects it from the customer and pays it to the Government.",
              examples: ["Most sales", "Supplier pays"],
            },
            {
              title: "Reverse charge (RCM)",
              text: "For notified supplies, the recipient pays the GST directly to the Government instead of the supplier.",
              examples: ["Notified supplies", "Recipient pays"],
            },
          ],
        },
        {
          type: "list",
          items: [
            { term: "Section 9(3)", text: "notified goods and services taxed under reverse charge, whoever the supplier is." },
            { term: "Section 9(4)", text: "notified supplies received from unregistered suppliers by notified classes of registered persons." },
            { term: "Import of services", text: "IGST is paid by the recipient in India under reverse charge." },
          ],
        },
        {
          type: "caution",
          text: "Tax payable under reverse charge must be paid in cash. It cannot be paid by using ITC from the electronic credit ledger.",
        },
      ],
    },
    {
      title: "Common reverse charge supplies",
      blocks: [
        {
          type: "table",
          headers: ["Supply", "Typical situation"],
          rows: [
            ["Goods transport agency (GTA)", "Freight to specified recipients, taxed at 5% under RCM unless the GTA opts to charge GST itself (18% with ITC since 22 September 2025)"],
            ["Legal services", "By an advocate or firm of advocates to a business entity"],
            ["Director services", "By a director to the company"],
            ["Sponsorship", "Sponsorship services to a body corporate or partnership firm"],
            ["Security services", "Security personnel supplied by a non-body-corporate to a registered person (with exclusions)"],
            ["Renting of commercial property", "By an unregistered person to a registered person (with exclusions)"],
            ["Import of services", "Services from a supplier outside India"],
          ],
        },
        {
          type: "note",
          text: "The RCM lists are changed by notification from time to time, and each entry has conditions and exclusions. Check the current notification for the exact scope.",
        },
      ],
    },
    {
      title: "Self-invoicing, payment and ITC under RCM",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Self-invoice",
              text: "When buying from an unregistered supplier under RCM, the recipient issues the tax invoice itself, within 30 days of receiving the supply (Rule 47A).",
            },
            { title: "Payment voucher", text: "Issue a payment voucher when paying the supplier." },
            { title: "Pay the tax in cash", text: "Report the RCM liability in GSTR-3B and pay it through the electronic cash ledger." },
            {
              title: "Claim ITC",
              text: "Once the tax is paid, eligible ITC on it can be claimed — so for a fully taxable business the net cost is usually only a timing difference.",
            },
          ],
        },
        { type: "heading", text: "Journal entry — legal fees of ₹10,000 at an assumed 18% (intra-state)" },
        {
          type: "table",
          headers: ["Account", "Debit (₹)", "Credit (₹)"],
          rows: [
            ["Legal expenses", "10,000", "—"],
            ["Input CGST (RCM)", "900", "—"],
            ["Input SGST (RCM)", "900", "—"],
            ["Advocate (supplier)", "—", "10,000"],
            ["CGST payable under RCM", "—", "900"],
            ["SGST payable under RCM", "—", "900"],
          ],
          footer: ["Total", "11,800", "11,800"],
          numeric: [1, 2],
        },
      ],
    },
    {
      title: "Module 9 — Knowledge check",
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
              question: "Under reverse charge, who pays the GST to the Government?",
              options: ["The supplier", "The recipient", "The transporter", "The bank"],
              answer: 1,
              explanation: "Under RCM the recipient pays the tax directly to the Government.",
            },
            {
              question: "How must tax payable under reverse charge be paid?",
              options: ["Using IGST credit", "Using any ITC", "In cash through the electronic cash ledger", "It doesn't need to be paid"],
              answer: 2,
              explanation: "RCM liability must be paid in cash; ITC cannot be used for it.",
            },
            {
              question: "A company receives legal services from an advocate. Who generally pays the GST?",
              options: ["The advocate", "The company, under reverse charge", "No GST applies", "The Bar Council"],
              answer: 1,
              explanation: "Legal services by an advocate to a business entity are notified under reverse charge.",
            },
            {
              question: "Within how long must a self-invoice be issued for a reverse charge purchase from an unregistered supplier?",
              options: ["7 days", "30 days", "90 days", "By year-end"],
              answer: 1,
              explanation: "Rule 47A requires the self-invoice within 30 days of receiving the supply.",
            },
            {
              question: "Can a fully taxable business claim ITC on GST it paid under reverse charge?",
              options: ["Never", "Yes, once the tax has been paid, if otherwise eligible", "Only for imports", "Only the next year"],
              answer: 1,
              explanation: "RCM tax paid is eligible ITC (subject to the usual conditions) once it has been paid.",
            },
          ],
        },
      ],
    },
  ],
  9: [
    {
      title: "Who can opt for the composition scheme",
      blocks: [
        {
          type: "paragraph",
          text: "The composition scheme lets small businesses pay tax at a low, fixed rate on turnover, with simpler compliance — in return for giving up input tax credit and inter-state sales.",
        },
        {
          type: "table",
          headers: ["Scheme", "Who it is for", "Turnover limit (previous year)"],
          rows: [
            ["Section 10(1)", "Manufacturers, traders and restaurants", "₹1.5 crore (₹75 lakh in specified special category States)"],
            ["Section 10(2A)", "Service providers and mixed suppliers not eligible under 10(1)", "₹50 lakh"],
          ],
        },
        { type: "paragraph", text: "A business generally can't opt if it:" },
        {
          type: "bullets",
          items: [
            "Makes inter-state outward supplies of goods.",
            "Manufactures notified goods, such as ice cream, pan masala and tobacco products.",
            "Is a casual taxable person or a non-resident taxable person.",
          ],
        },
        {
          type: "note",
          text: "All registrations under the same PAN must opt for the scheme together.",
        },
      ],
    },
    {
      title: "Composition tax rates",
      blocks: [
        {
          type: "table",
          headers: ["Type of business", "Rate (CGST + SGST)", "Charged on"],
          rows: [
            ["Manufacturers", "1% (0.5% + 0.5%)", "Turnover in the State or UT"],
            ["Traders", "1% (0.5% + 0.5%)", "Turnover of taxable supplies in the State or UT"],
            ["Restaurants not serving alcohol", "5% (2.5% + 2.5%)", "Turnover in the State or UT"],
            ["Service providers under Section 10(2A)", "6% (3% + 3%)", "Turnover in the State or UT"],
          ],
        },
        {
          type: "example",
          rows: [
            { label: "Trader's taxable turnover for the quarter", value: "₹12,00,000" },
            { label: "Composition tax at 1%", value: "₹12,000" },
          ],
          total: { label: "Paid through CMP-08 (₹6,000 CGST + ₹6,000 SGST)", value: "₹12,000" },
        },
      ],
    },
    {
      title: "Restrictions and compliance",
      blocks: [
        {
          type: "bullets",
          items: [
            "No input tax credit on purchases.",
            "GST can't be collected from customers — issue a bill of supply, not a tax invoice.",
            "Mention “composition taxable person, not eligible to collect tax on supplies” on the bill of supply, and display “Composition taxable person” at the place of business.",
            "Tax under reverse charge is still payable at the normal rates.",
          ],
        },
        {
          type: "table",
          headers: ["Form", "Purpose", "Due"],
          rows: [
            ["CMP-02", "Opt into the scheme", "Before the start of the financial year"],
            ["CMP-08", "Statement and payment of tax", "18th of the month after each quarter"],
            ["GSTR-4", "Annual return", "30 June after the financial year (from FY 2024-25)"],
          ],
        },
        {
          type: "link",
          label: "Official source",
          text: "CGST Rules — Rule 62 (CBIC)",
          href: "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter8/rule62_v1.00.html",
        },
      ],
    },
    {
      title: "Is composition right for your business?",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Composition often suits",
              text: "Small businesses selling mainly to consumers within one State, with modest purchases that carry GST — where simple compliance matters more than claiming ITC.",
            },
            {
              title: "Regular registration often suits",
              text: "Businesses selling to other registered businesses, who want ITC on your invoices; businesses making inter-state sales; and those with large GST-bearing purchases.",
            },
          ],
        },
        {
          type: "tip",
          title: "Do the numbers",
          text: "Compare the composition tax plus the GST you can't recover on purchases with the net GST you would pay as a regular taxpayer — and think about your customers' need for ITC.",
        },
      ],
    },
    {
      title: "Module 10 — Knowledge check",
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
              question: "What is the general composition turnover limit for traders?",
              options: ["₹20 lakh", "₹50 lakh", "₹1.5 crore", "₹5 crore"],
              answer: 2,
              explanation: "Manufacturers, traders and restaurants can opt up to ₹1.5 crore (₹75 lakh in specified special category States).",
            },
            {
              question: "A trader under composition has taxable turnover of ₹12,00,000 for a quarter. What is the tax?",
              options: ["₹6,000", "₹12,000", "₹60,000", "₹2,16,000"],
              answer: 1,
              explanation: "Traders pay 1% (0.5% CGST + 0.5% SGST) of taxable turnover: ₹12,000.",
            },
            {
              question: "Which document does a composition taxpayer issue to customers?",
              options: ["Tax invoice", "Bill of supply", "E-way bill", "Credit note"],
              answer: 1,
              explanation: "Composition taxpayers can't collect GST, so they issue a bill of supply.",
            },
            {
              question: "When is the composition annual return (GSTR-4) due?",
              options: ["18th of every month", "30 April", "30 June after the financial year", "31 December"],
              answer: 2,
              explanation: "From FY 2024-25, GSTR-4 is due by 30 June after the end of the financial year.",
            },
            {
              question: "Which business is generally NOT eligible for the composition scheme?",
              options: [
                "A local grocery shop",
                "A trader making inter-state sales of goods",
                "A small restaurant not serving alcohol",
                "A small manufacturer selling within its State",
              ],
              answer: 1,
              explanation: "Businesses making inter-state outward supplies of goods can't opt for composition.",
            },
          ],
        },
      ],
    },
  ],
  10: [
    {
      title: "The GST return system at a glance",
      blocks: [
        {
          type: "table",
          headers: ["Return or statement", "What it covers", "Monthly due date"],
          rows: [
            ["GSTR-1", "Details of outward supplies", "11th of the next month"],
            ["GSTR-2B", "Auto-drafted ITC statement from suppliers' filings", "Generated around the 14th"],
            ["GSTR-3B", "Summary return and payment of tax", "20th of the next month"],
            ["GSTR-9", "Annual return", "31 December after the financial year"],
            ["GSTR-9C", "Reconciliation statement (turnover above ₹5 crore)", "With GSTR-9"],
          ],
        },
        {
          type: "note",
          text: "GSTR-2A is a live view that changes as suppliers file. GSTR-2B is a fixed monthly statement and is the basis for claiming ITC.",
        },
      ],
    },
    {
      title: "GSTR-1 and GSTR-3B",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "GSTR-1 — outward supplies",
              text: "Invoice-level details: B2B invoices, large inter-state B2C invoices, other B2C supplies in summary, exports, credit and debit notes, amendments, an HSN summary and a list of documents issued.",
            },
            {
              title: "GSTR-3B — summary and payment",
              text: "Totals of outward supplies and tax, supplies liable to reverse charge, eligible and ineligible ITC, exempt and nil-rated inward supplies, and the tax paid in cash and through ITC.",
            },
          ],
        },
        {
          type: "tip",
          title: "Good practice",
          text: "Reconcile GSTR-1 with your sales books and GSTR-3B with GSTR-1 every month. Differences are a common trigger for notices.",
        },
      ],
    },
    {
      title: "The QRMP scheme",
      blocks: [
        {
          type: "paragraph",
          text: "Taxpayers with aggregate turnover up to ₹5 crore can choose the Quarterly Return Monthly Payment (QRMP) scheme:",
        },
        {
          type: "table",
          headers: ["Item", "Under QRMP"],
          rows: [
            ["GSTR-1", "Quarterly, by the 13th of the month after the quarter"],
            ["Invoice Furnishing Facility (IFF)", "Optional, for B2B invoices in the first two months of the quarter (1st–13th of the next month)"],
            ["Monthly tax", "Paid through PMT-06 by the 25th of the next month, for the first two months"],
            ["GSTR-3B", "Quarterly, by the 22nd or 24th of the month after the quarter, depending on the State"],
          ],
        },
        {
          type: "note",
          text: "The IFF lets your B2B customers claim ITC monthly even though you file GSTR-1 quarterly.",
        },
      ],
    },
    {
      title: "Annual returns and the filing calendar",
      blocks: [
        {
          type: "paragraph",
          text: "GSTR-9 summarises the whole financial year. Taxpayers with aggregate turnover above ₹5 crore also file GSTR-9C, a self-certified reconciliation of the annual return with the audited financial statements.",
        },
        { type: "heading", text: "Example: monthly filer, October 2026 tax period" },
        {
          type: "table",
          headers: ["Date", "Action"],
          rows: [
            ["11 November 2026", "File GSTR-1 for October"],
            ["Around 14 November", "Review GSTR-2B and take IMS actions"],
            ["20 November 2026", "File GSTR-3B and pay the tax for October"],
          ],
        },
        {
          type: "caution",
          text: "Since the Finance Act, 2023, a GST return generally can't be filed after three years from its due date. Late filing also attracts interest and late fees (Module 12).",
        },
      ],
    },
    {
      title: "Module 11 — Knowledge check",
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
              question: "When is the monthly GSTR-1 due?",
              options: ["11th of the next month", "13th of the next month", "20th of the next month", "Last day of the month"],
              answer: 0,
              explanation: "Monthly GSTR-1 is due by the 11th of the following month.",
            },
            {
              question: "Which return is used to pay tax monthly?",
              options: ["GSTR-1", "GSTR-2B", "GSTR-3B", "GSTR-9"],
              answer: 2,
              explanation: "GSTR-3B is the summary return through which tax is paid.",
            },
            {
              question: "Which statement is the basis for claiming ITC?",
              options: ["GSTR-2A", "GSTR-2B", "GSTR-1", "GSTR-9C"],
              answer: 1,
              explanation: "GSTR-2B is the fixed monthly ITC statement used to claim credit.",
            },
            {
              question: "Who can opt for the QRMP scheme?",
              options: [
                "Any taxpayer",
                "Taxpayers with aggregate turnover up to ₹5 crore",
                "Only composition taxpayers",
                "Only exporters",
              ],
              answer: 1,
              explanation: "QRMP is available to taxpayers with aggregate turnover up to ₹5 crore.",
            },
            {
              question: "When is the annual return GSTR-9 due?",
              options: ["30 June", "30 September", "30 November", "31 December after the financial year"],
              answer: 3,
              explanation: "GSTR-9 is due by 31 December after the end of the financial year.",
            },
          ],
        },
      ],
    },
  ],
  11: [
    {
      title: "Electronic ledgers and paying tax",
      blocks: [
        {
          type: "table",
          headers: ["Ledger", "What it shows"],
          rows: [
            ["Electronic cash ledger", "Money you have deposited, available to pay tax, interest, late fees and penalties"],
            ["Electronic credit ledger", "Your ITC, available only to pay output tax"],
            ["Electronic liability ledger", "What you owe — tax, interest, late fees and penalties"],
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Create a challan", text: "Generate form PMT-06 on the GST Portal, showing the amount under each tax head." },
            { title: "Pay", text: "Pay by net banking, UPI, card, NEFT/RTGS or over the counter at an authorised bank." },
            { title: "Cash ledger is credited", text: "The payment appears in your electronic cash ledger." },
            {
              title: "Set off in GSTR-3B",
              text: "Use ITC in the order set by law (Module 7), then cash for the balance. RCM tax, interest and late fees must be paid in cash.",
            },
          ],
        },
      ],
    },
    {
      title: "Interest and late fees",
      blocks: [
        {
          type: "list",
          items: [
            { term: "Late payment of tax", text: "interest at 18% a year from the day after the due date (Section 50(1)) — generally on the portion paid in cash." },
            { term: "ITC wrongly availed and used", text: "interest at the notified rate, currently 18% a year (Section 50(3))." },
          ],
        },
        {
          type: "example",
          rows: [
            { label: "Tax paid late", value: "₹50,000" },
            { label: "Days late", value: "30" },
            { label: "Interest = ₹50,000 × 18% × 30 ÷ 365", value: "₹739.73" },
          ],
          total: { label: "Interest payable (rounded)", value: "₹740" },
        },
        { type: "heading", text: "Late fees for GSTR-1 and GSTR-3B" },
        {
          type: "table",
          headers: ["Situation", "Late fee (CGST + SGST combined)"],
          rows: [
            ["Regular return", "₹50 per day"],
            ["Nil return", "₹20 per day"],
            ["Maximum — nil return", "₹500"],
            ["Maximum — turnover up to ₹1.5 crore", "₹2,000"],
            ["Maximum — turnover ₹1.5 crore to ₹5 crore", "₹5,000"],
            ["Maximum — turnover above ₹5 crore", "₹10,000"],
          ],
        },
        {
          type: "note",
          text: "Late fees can't be paid from ITC. Separate late fee rules apply to annual returns. Check the current notifications for the exact amounts.",
        },
      ],
    },
    {
      title: "Refunds",
      blocks: [
        { type: "paragraph", text: "A refund can arise when, for example:" },
        {
          type: "bullets",
          items: [
            "Goods or services are exported (zero-rated) — Module 13.",
            "There is an inverted duty structure, where tax on inputs is higher than tax on outputs.",
            "Excess money is left in the electronic cash ledger.",
            "Tax was paid by mistake, such as under the wrong head.",
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Check eligibility and time limit", text: "Generally apply within two years from the relevant date (Section 54)." },
            { title: "File form RFD-01", text: "On the GST Portal, with the supporting statements and documents." },
            { title: "Track and respond", text: "Answer any deficiency memo or notice from the officer." },
          ],
        },
        {
          type: "note",
          text: "At its 57th meeting in October 2026, the GST Council recommended allowing refunds of ITC on input services under the inverted duty structure. Changes apply only once notified.",
        },
      ],
    },
    {
      title: "Module 12 — Knowledge check",
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
              question: "Which form is used to create a GST payment challan?",
              options: ["RFD-01", "PMT-06", "CMP-08", "GSTR-1"],
              answer: 1,
              explanation: "PMT-06 is the payment challan.",
            },
            {
              question: "What is the interest rate on tax paid late?",
              options: ["12% a year", "18% a year", "24% a year", "2% a month"],
              answer: 1,
              explanation: "Section 50(1) interest on delayed tax is 18% a year.",
            },
            {
              question: "₹50,000 of tax is paid 30 days late. What is the interest, rounded?",
              options: ["₹740", "₹900", "₹1,500", "₹9,000"],
              answer: 0,
              explanation: "₹50,000 × 18% × 30 ÷ 365 = ₹739.73, about ₹740.",
            },
            {
              question: "Can late fees be paid using ITC?",
              options: ["Yes", "No — they must be paid in cash", "Only IGST credit", "Only for nil returns"],
              answer: 1,
              explanation: "Late fees, interest and RCM tax must be paid through the electronic cash ledger.",
            },
            {
              question: "Within what period should a refund generally be claimed?",
              options: ["Six months", "One year", "Two years from the relevant date", "Five years"],
              answer: 2,
              explanation: "Section 54 generally requires a refund application within two years from the relevant date.",
            },
          ],
        },
      ],
    },
  ],
}

export default lessons
