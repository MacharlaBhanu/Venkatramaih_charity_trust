import SEO from '../components/SEO';
import { site } from '../data/siteData';

export default function CancellationRefundPolicy() {
  return (
    <>
      <SEO
        title="Cancellation and Refund Policy | Kanneganti Venkatramaiah Charitable Trust"
        description="Read cancellation and refund terms for donations made to Kanneganti Venkatramaiah Charitable Trust."
        path="/cancellation-and-refund-policy"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Cancellation and Refund Policy', path: '/cancellation-and-refund-policy' },
        ]}
      />

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <article className="w-full text-body">
            <h1 className="text-3xl font-bold text-heading sm:text-4xl">Cancellation and Refund Policy</h1>
            <p className="mt-3 text-sm text-muted">Last updated: 10 August 2026</p>

            <div className="mt-6 space-y-6 text-[15px] leading-7 sm:text-base">
              <section>
                <h2 className="text-xl font-bold text-heading">1. Donation Nature</h2>
                <p className="mt-2">
                  All donations made through this website are voluntary contributions to support
                  charitable activities of {site.name}.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">2. Cancellation</h2>
                <p className="mt-2">
                  Once a donation transaction is successfully completed, cancellation is generally not
                  possible.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">3. Refunds</h2>
                <p className="mt-2">
                  Donations are generally non-refundable. However, if a donor believes a donation was
                  made in error (such as duplicate transaction or incorrect amount), they may write to
                  us within 7 days of the transaction date for review.
                </p>
                <p className="mt-2">
                  Approved refunds, if any, will be processed to the original payment source within 7 to
                  10 working days, subject to banking and payment gateway timelines.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">4. Failed or Pending Transactions</h2>
                <p className="mt-2">
                  If an amount is debited but donation status is not confirmed, please contact us with
                  transaction details. We will coordinate with the payment partner and share an update.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">5. Contact for Refund Requests</h2>
                <p className="mt-2">Email: {site.emails[0]}</p>
                <p>Phone: {site.phones[0]}</p>
                <p>
                  Please include donor name, transaction date, amount, payment reference, and reason for
                  request.
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
