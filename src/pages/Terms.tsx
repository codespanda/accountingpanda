const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By engaging AccountingPanda for accounting, bookkeeping or related services, or by using this website, you agree to be bound by these Terms & Conditions.",
  },
  {
    title: "2. Services",
    body: "AccountingPanda provides outsourced bookkeeping, financial reporting, bank reconciliation, accounts payable & receivable, and payroll processing services for businesses and CPA firms in the USA and Australia. Specific scope, deliverables and pricing for each engagement are agreed separately with each client.",
  },
  {
    title: "3. Client Responsibilities",
    body: "Clients are responsible for providing accurate, complete and timely financial information and documentation. AccountingPanda is not liable for errors or delays resulting from incomplete or inaccurate information provided by the client.",
  },
  {
    title: "4. Confidentiality",
    body: "We treat all client financial data as strictly confidential and will not disclose it to third parties except as required to deliver the agreed services or as required by law. We are happy to sign a mutual NDA before onboarding.",
  },
  {
    title: "5. Fees & Payment",
    body: "Fees are agreed in advance based on the scope of services and transaction volume. Invoices are due per the payment terms specified in your service agreement.",
  },
  {
    title: "6. Limitation of Liability",
    body: "AccountingPanda strives for accuracy in all work delivered, but is not liable for indirect, incidental or consequential damages arising from the use of our services beyond the fees paid for the relevant engagement.",
  },
  {
    title: "7. Termination",
    body: "Either party may terminate the engagement with written notice as specified in the service agreement. Outstanding fees remain payable for services rendered up to the termination date.",
  },
  {
    title: "8. Governing Law",
    body: "These terms are governed by applicable laws in the jurisdiction where the service agreement was executed, without regard to conflict of law principles.",
  },
]

export function Terms() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-px mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
          LEGAL
        </span>
        <h1 className="mt-5 text-3xl font-bold text-brand-heading sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: August 2026</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-brand-heading">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-gray-500">
          Questions about these terms? Contact us at{" "}
          <a
            href="mailto:contact@accountingpanda.com"
            className="font-medium text-brand-green hover:underline"
          >
            contact@accountingpanda.com
          </a>
          .
        </p>
      </div>
    </section>
  )
}
