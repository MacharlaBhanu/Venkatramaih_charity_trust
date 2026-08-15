import SEO from '../components/SEO';
import { site } from '../data/siteData';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Kanneganti Venkatramaiah Charitable Trust"
        description="Read how Kanneganti Venkatramaiah Charitable Trust collects, uses, and protects your personal information."
        path="/privacy-policy"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ]}
      />

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <article className="w-full text-body">
            <h1 className="text-3xl font-bold text-heading sm:text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted">Last updated: 10 August 2026</p>

            <div className="mt-6 space-y-6 text-[15px] leading-7 sm:text-base">
              <section>
                <h2 className="text-xl font-bold text-heading">1. Information We Collect</h2>
                <p className="mt-2">
                  We may collect personal details such as your name, phone number, email address,
                  postal address, and donation details when you contact us, submit forms, or make a
                  donation through our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">2. How We Use Your Information</h2>
                <p className="mt-2">We use your information to:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Process donations and share acknowledgements or receipts.</li>
                  <li>Respond to your queries and support requests.</li>
                  <li>Share updates on our initiatives, activities, and impact.</li>
                  <li>Improve the website experience and service quality.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">3. Payment Information</h2>
                <p className="mt-2">
                  Online payments are processed by trusted payment partners. We do not store full card
                  details on our servers. Payment processing and security are handled by the payment
                  gateway as per their compliance standards.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">4. Data Sharing</h2>
                <p className="mt-2">
                  We do not sell or rent your personal information. We may share information only with
                  service providers who support website operations, payment processing, and legal
                  compliance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">5. Data Security</h2>
                <p className="mt-2">
                  We adopt reasonable technical and organizational safeguards to protect your data.
                  While we strive to use commercially acceptable means, no internet transmission is
                  fully secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">6. Your Rights</h2>
                <p className="mt-2">
                  You may request access, correction, or deletion of your personal information by
                  contacting us through the details below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">7. Contact Us</h2>
                <p className="mt-2">For privacy-related queries, contact:</p>
                <ul className="mt-2 space-y-1">
                  <li>{site.name}</li>
                  <li>Email: {site.emails[0]}</li>
                  <li>Phone: {site.phones[0]}</li>
                  <li>Address: {site.address.line1} {site.address.line2}</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
