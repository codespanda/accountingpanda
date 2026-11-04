import { Seo } from "@/components/Seo"

// Written for India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the DPDP Rules,
// 2025. Keep it in step with the site: if a form, tracker or provider changes, update it here.
const CONTACT = "contact@accountingpanda.com"

const sections: { title: string; body: string; list?: string[] }[] = [
  {
    title: "1. Who we are",
    body: "AccountingPanda provides outsourced accounting and bookkeeping from Mohali, Punjab, India. For the personal data described here we are the Data Fiduciary under the Digital Personal Data Protection Act, 2023.",
  },
  {
    title: "2. What we collect and why",
    body: "We only collect what we need for the purpose stated next to it:",
    list: [
      "Consultation requests: your name, email, phone (optional), company (optional), country, the service you need and your message. Used to reply, arrange your consultation and prepare a quote.",
      "Newsletter: if you choose to subscribe, the email address you send us. Used only to send the monthly newsletter.",
      "Client work: if you engage us, the financial records and documents you share. Used only to deliver the agreed accounting and bookkeeping services.",
      "Analytics, only if you click \u201cAccept\u201d in the cookie banner: pages visited, how you arrived, device and browser type and approximate location from your IP address, collected by Google Analytics. Used to see which pages are useful.",
      "Course progress: stored only in your browser so you can pick up where you left off. It never leaves your device.",
    ],
  },
  {
    title: "3. Consent",
    body: "Our forms ask for your consent before sending anything, and analytics stays off until you accept it. You can withdraw consent at any time, as easily as you gave it: use \u201cCookie settings\u201d in the footer for analytics, unsubscribe from the newsletter, or email us. Withdrawing doesn't affect earlier processing; we then stop and delete the data unless the law requires us to keep it.",
  },
  {
    title: "4. Who we share it with",
    body: "We don't sell personal or financial information or use it for advertising. We share it only with providers that process it for us, under their security and confidentiality terms:",
    list: [
      "Web3Forms: delivers consultation requests to our inbox.",
      "Google (USA): Google Analytics, only with your consent, and our email provider.",
      "GitHub (USA): hosts this website and processes visitors' IP addresses to serve and protect it.",
      "Accounting software we use for client work, such as QuickBooks, Xero or MYOB, and as required by law.",
    ],
  },
  {
    title: "5. Data stored outside India",
    body: "Some of these providers store data outside India, mainly in the USA. We only use countries the Government of India has not restricted under Section 16 of the DPDP Act.",
  },
  {
    title: "6. How long we keep it",
    body: "We delete personal data once its purpose is served, unless the law requires us to keep it:",
    list: [
      "Enquiries that don't lead to an engagement: deleted within 12 months of our last message.",
      "Newsletter: until you unsubscribe.",
      "Client records: for the engagement and then as long as the applicable tax and accounting laws require.",
      "Analytics: deleted automatically after at most 14 months; analytics cookies expire after up to 2 years, or straight away if you withdraw consent.",
    ],
  },
  {
    title: "7. Your rights",
    body: "You can ask us for a summary of the personal data we hold about you and how we use it, ask us to correct, complete, update or erase it, withdraw consent, nominate someone to act for you if you die or can't act yourself, and raise a grievance. Email us to make a request; there's no charge. If you're not satisfied with our response, you can complain to the Data Protection Board of India.",
  },
  {
    title: "8. Cookies",
    body: "Google Analytics sets the cookies _ga and _ga_2WQ4KG727R (up to 2 years) only after you click \u201cAccept\u201d. We also store your cookie choice and course progress in your browser; these never leave your device. Change your choice any time from \u201cCookie settings\u201d in the footer.",
  },
  {
    title: "9. Children",
    body: "Our services are for businesses and adults. We don't knowingly collect personal data from anyone under 18; if you believe a child has sent us personal data, email us and we'll delete it.",
  },
  {
    title: "10. Security and breaches",
    body: "The website is served only over HTTPS and uses a Content Security Policy. Client financial data is handled under strict confidentiality with access limited to the people working on your account. If a personal data breach happens, we will inform the people affected and the Data Protection Board of India as the DPDP Act and Rules require.",
  },
  {
    title: "11. Contact and grievances",
    body: `Grievance Officer: Deepak Kumar, AccountingPanda, Mohali, Punjab, India. Email ${CONTACT} with the subject \u201cPrivacy request\u201d or \u201cGrievance\u201d. We acknowledge requests within 7 days and resolve them within 30 days. You can ask for this notice in Hindi or any other language listed in the Eighth Schedule of the Constitution.`,
  },
  {
    title: "12. Changes to this policy",
    body: "If we change how we use personal data, we'll update this page and the date above, and ask for your consent again where needed.",
  },
]

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="What personal data AccountingPanda collects, why, who we share it with, how long we keep it and your rights under India's DPDP Act, 2023."
        path="/privacy-policy"
      />
      <section className="container-px pt-4">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-white px-6 sm:px-10 lg:px-14 py-14 lg:py-20 [&>*]:mx-auto [&>*]:max-w-3xl">
        <span className="inline-block rounded-full bg-bento-mint px-3.5 py-2 text-[13px] font-bold text-bento-forest">
          LEGAL
        </span>
        <h1 className="mt-5 text-3xl font-bold text-brand-heading sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: November 4, 2026</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-brand-heading">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.body}
              </p>
              {s.list && (
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-500">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
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
