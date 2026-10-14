import type { CourseModule } from "@/components/CourseModuleAccordion"

export const GST_INDIA_COURSE_PATH = "/learning/taxation/learn-gst-in-india"

export const gstIndiaModules: CourseModule[] = [
  {
    title: "Module 1 — Introduction to GST",
    sections: [
      {
        items: [
          "What is an indirect tax?",
          "Taxes GST replaced — excise duty, VAT, service tax and more",
          "GST launch on 1 July 2017 and the idea of “one nation, one tax”",
          "Constitutional basis — the 101st Constitutional Amendment",
          "Role of the GST Council",
          "Destination-based taxation",
          "Benefits of GST for businesses and consumers",
          "The GST portal and GSTN",
        ],
      },
    ],
  },
  {
    title: "Module 2 — The GST Structure: CGST, SGST, UTGST and IGST",
    sections: [
      {
        items: [
          "The dual GST model",
          "Central GST (CGST)",
          "State GST (SGST) and Union Territory GST (UTGST)",
          "Integrated GST (IGST)",
          "Intra-state vs. inter-state supplies",
          "How tax is split between the Centre and the states",
          "GST compensation cess",
        ],
      },
    ],
  },
  {
    title: "Module 3 — Key Concepts and Terminology",
    sections: [
      {
        items: [
          "Meaning and scope of “supply”",
          "Goods vs. services",
          "Business, consideration and taxable person",
          "Aggregate turnover",
          "Composite and mixed supplies",
          "HSN codes (goods) and SAC codes (services)",
          "Understanding the 15-digit GSTIN",
          "Exempt, nil-rated, zero-rated and non-GST supplies",
        ],
      },
    ],
  },
  {
    title: "Module 4 — GST Registration",
    sections: [
      {
        items: [
          "Who must register — turnover thresholds",
          "Threshold limits for goods, services and special-category states",
          "Compulsory registration regardless of turnover",
          "Voluntary registration",
          "Documents required",
          "Step-by-step registration on the GST portal",
          "Amending registration details",
          "Cancellation and revocation of registration",
        ],
      },
    ],
  },
  {
    title: "Module 5 — GST Rates and Classification",
    sections: [
      {
        items: [
          "How GST rates are decided",
          "Current rate slabs after GST 2.0 — 0%, 5%, 18% and 40%",
          "Special rates for gold, jewellery and precious stones",
          "Earlier slabs (12% and 28%) and the September 2025 rate rationalisation",
          "Classifying goods with HSN codes",
          "Classifying services with SAC codes",
          "Finding the correct rate for an item",
        ],
      },
    ],
  },
  {
    title: "Module 6 — Time, Value and Place of Supply",
    sections: [
      {
        items: [
          "Time of supply for goods",
          "Time of supply for services",
          "Value of supply and transaction value",
          "What to include in and exclude from taxable value",
          "Discounts and their GST treatment",
          "Place of supply — why it decides CGST + SGST vs. IGST",
          "Place of supply for goods and common services",
        ],
      },
    ],
  },
  {
    title: "Module 7 — Input Tax Credit (ITC)",
    sections: [
      {
        items: [
          "What input tax credit is and why it matters",
          "Conditions for claiming ITC",
          "Matching purchases with GSTR-2B",
          "Blocked credits (Section 17(5))",
          "ITC on capital goods",
          "Reversal of ITC — including the 180-day payment rule",
          "Order of utilising IGST, CGST and SGST credit",
        ],
      },
    ],
  },
  {
    title: "Module 8 — Tax Invoices and GST Documents",
    sections: [
      {
        items: [
          "Mandatory contents of a tax invoice",
          "Bill of supply",
          "Credit notes and debit notes",
          "Delivery challans",
          "Receipt and payment vouchers",
          "E-invoicing — IRN and QR code",
          "E-way bills — when and how they are generated",
        ],
      },
    ],
  },
  {
    title: "Module 9 — Reverse Charge Mechanism (RCM)",
    sections: [
      {
        items: [
          "Forward charge vs. reverse charge",
          "Notified goods and services under RCM",
          "Common examples — goods transport agencies, legal services and more",
          "Self-invoicing and payment under RCM",
          "Claiming ITC on tax paid under RCM",
        ],
      },
    ],
  },
  {
    title: "Module 10 — The Composition Scheme",
    sections: [
      {
        items: [
          "Who can opt for the composition scheme",
          "Turnover limits",
          "Composition tax rates",
          "Restrictions — no ITC, no inter-state supplies, bill of supply",
          "Quarterly payment with CMP-08",
          "Annual return in GSTR-4",
          "Is composition right for your business?",
        ],
      },
    ],
  },
  {
    title: "Module 11 — GST Returns",
    sections: [
      {
        items: [
          "Overview of the GST return system",
          "GSTR-1 — outward supplies",
          "GSTR-3B — summary return and tax payment",
          "GSTR-2A and GSTR-2B — auto-drafted purchase statements",
          "QRMP scheme and the Invoice Furnishing Facility (IFF)",
          "GSTR-9 and GSTR-9C — annual return and reconciliation",
          "Due dates and filing calendar",
        ],
      },
    ],
  },
  {
    title: "Module 12 — Paying GST, Interest, Late Fees and Refunds",
    sections: [
      {
        items: [
          "Electronic cash, credit and liability ledgers",
          "Creating a payment challan (PMT-06)",
          "Setting off liability with ITC and cash",
          "Interest on late payment",
          "Late fees for delayed returns",
          "When refunds arise — exports and inverted duty structure",
          "Filing a refund application",
        ],
      },
    ],
  },
  {
    title: "Module 13 — GST on Exports and Imports",
    sections: [
      {
        items: [
          "Exports as zero-rated supplies",
          "Exporting under a Letter of Undertaking (LUT)",
          "Exporting with payment of IGST and claiming a refund",
          "IGST on imports of goods",
          "Import of services and reverse charge",
          "Supplies to SEZ units",
        ],
      },
    ],
  },
  {
    title: "Module 14 — GST in Practice: Accounting Software",
    sections: [
      {
        items: [
          "Setting up GST in accounting software (Tally Prime and Zoho Books)",
          "Creating GST ledgers — output tax, input tax and RCM",
          "Recording sales and purchase invoices with GST",
          "Generating GSTR-1 and GSTR-3B data from your books",
          "Reconciling the purchase register with GSTR-2B",
          "Month-end GST checklist",
        ],
      },
    ],
  },
  {
    title: "Module 15 — Final Practical Project",
    sections: [
      {
        intro:
          "Handle GST for a fictional trading business for one month, from registration to filing.",
        numbered: true,
        items: [
          "Register the business and set up its GSTIN details",
          "Raise sales invoices for intra-state and inter-state customers",
          "Record purchases and check which ITC can be claimed",
          "Reconcile purchases with GSTR-2B",
          "Calculate the month's GST liability",
          "Prepare GSTR-1 and GSTR-3B summaries",
          "Compute the payment after setting off ITC",
        ],
      },
    ],
  },
]
