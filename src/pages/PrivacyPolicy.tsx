import { Seo } from "@/components/Seo"

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us — such as your name, email address, phone number, company details and any financial documents you share with us for bookkeeping and accounting services. We also collect limited technical information (like browser type and pages visited) when you use this website.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to deliver accounting and bookkeeping services, respond to inquiries, send requested updates or newsletters, and improve our website and services. We do not sell your personal or financial information to third parties.",
  },
  {
    title: "3. Data Security",
    body: "Client financial data is handled under strict confidentiality, using access-controlled systems and CPA-approved processes. We take reasonable technical and organizational measures to protect your information from unauthorized access, loss or misuse.",
  },
  {
    title: "4. Data Sharing",
    body: "We may share information with trusted third-party tools we use to deliver our services (such as QuickBooks, Xero or MYOB), and as required by law. We do not share your data with third parties for their own marketing purposes.",
  },
  {
    title: "5. Cookies",
    body: "Our website may use cookies to understand site usage and improve user experience. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information held by us at any time by contacting us at contact@accountingpanda.com.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
  },
]

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How AccountingPanda collects, uses and protects your personal and financial information."
        path="/privacy-policy"
      />
      <section className="bg-white py-14 lg:py-20">
      <div className="container-px mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green">
          LEGAL
        </span>
        <h1 className="mt-5 text-3xl font-bold text-brand-heading sm:text-4xl">
          Privacy Policy
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
          Questions about this policy? Contact us at{" "}
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
    </>
  )
}
