/** Lesson screens for the GST course, keyed by module index (0 = Module 1). */

export type GstQuizQuestion = {
  question: string
  options: string[]
  /** Index of the correct option. */
  answer: number
  explanation: string
}

export type GstLessonBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | {
      type: "example"
      rows: { label: string; value: string }[]
      total: { label: string; value: string }
    }
  | {
      type: "table"
      headers: string[]
      rows: string[][]
      /** Optional totals row, shown in bold. */
      footer?: string[]
      /** Columns whose cells are right-aligned (e.g. amounts). */
      numeric?: number[]
    }
  | { type: "list"; items: { term: string; text: string }[] }
  | { type: "bullets"; items: string[] }
  | {
      type: "flow"
      from: { title: string; place: string }
      to: { title: string; place: string }
      caption: string
    }
  | { type: "tip"; title: string; text: string }
  | { type: "caution"; text: string }
  | { type: "scenarios"; items: { title: string; text: string; badge: string; tax: string }[] }
  | {
      type: "calcs"
      items: {
        title: string
        rows: { label: string; value: string }[]
        total: { label: string; value: string }
      }[]
    }
  | {
      type: "branches"
      root: { title: string; text: string }
      items: { title: string; text: string; result: string; resultNote?: string }[]
      caption?: string
    }
  | { type: "knowledge-check"; passCount: number; questions: GstQuizQuestion[] }
  | { type: "exercises"; items: { title: string; task: string[]; answer: string[] }[] }
  | { type: "links"; items: { label: string; href: string; text: string }[] }
  | { type: "link"; label: string; text: string; href: string }
  | {
      type: "cards"
      items: { title: string; text: string; source?: { label: string; href: string } }[]
    }
  | { type: "note"; text: string }

export type GstLessonScreen = { title: string; blocks: GstLessonBlock[] }

export const gstIndiaLessons: Record<number, GstLessonScreen[]> = {
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
}
