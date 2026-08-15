import SEO from '../components/SEO';
import { site } from '../data/siteData';

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions | Kanneganti Venkatramaiah Charitable Trust"
        description="Read the terms and conditions for using Kanneganti Venkatramaiah Charitable Trust website and donation services."
        path="/terms-and-conditions"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Terms and Conditions', path: '/terms-and-conditions' },
        ]}
      />

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <article className="w-full text-body">
            <h1 className="text-3xl font-bold text-heading sm:text-4xl">Terms and Conditions</h1>
            <p className="mt-3 text-sm text-muted">Last updated: 10 August 2026</p>

            <div className="mt-6 space-y-6 text-[15px] leading-7 sm:text-base">
              <section>
                <h2 className="text-xl font-bold text-heading">1. Acceptance of Terms</h2>
                <p className="mt-2">
                  By using this website, you agree to these terms and applicable laws. If you do not
                  agree, please discontinue using this website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">2. Use of Website</h2>
                <p className="mt-2">You agree to use this website only for lawful purposes and not to:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Post or transmit harmful, unlawful, or misleading content.</li>
                  <li>Attempt unauthorized access to systems or user information.</li>
                  <li>Disrupt website functionality, security, or availability.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">3. Donations</h2>
                <p className="mt-2">
                  Donations made through this website are voluntary and will be used to support our
                  charitable programs and operations as per organizational priorities and legal
                  requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">4. Intellectual Property</h2>
                <p className="mt-2">
                  Website content, including text, logos, graphics, and media, is owned by or licensed
                  to {site.name}. Unauthorized use, reproduction, or distribution is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">5. Third-Party Links</h2>
                <p className="mt-2">
                  Our website may contain links to third-party websites. We are not responsible for the
                  content, privacy practices, or policies of external sites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">6. Limitation of Liability</h2>
                <p className="mt-2">
                  We make reasonable efforts to keep information accurate and updated, but we do not
                  guarantee completeness or uninterrupted availability. We are not liable for any
                  indirect or consequential loss arising from website usage.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">7. Governing Law</h2>
                <p className="mt-2">
                  These terms are governed by the laws of India. Any disputes are subject to the
                  jurisdiction of courts in Hyderabad, Telangana.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">8. Contact</h2>
                <p className="mt-2">For questions regarding these terms, contact us at {site.emails[0]}.</p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
