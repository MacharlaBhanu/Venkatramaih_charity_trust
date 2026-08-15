import SEO from '../components/SEO';
import { site } from '../data/siteData';

export default function ShippingDeliveryPolicy() {
  return (
    <>
      <SEO
        title="Shipping and Delivery Policy | Kanneganti Venkatramaiah Charitable Trust"
        description="Shipping and delivery policy for donations and digital acknowledgements by Kanneganti Venkatramaiah Charitable Trust."
        path="/shipping-and-delivery-policy"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Shipping and Delivery Policy', path: '/shipping-and-delivery-policy' },
        ]}
      />

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <article className="w-full text-body">
            <h1 className="text-3xl font-bold text-heading sm:text-4xl">Shipping and Delivery Policy</h1>
            <p className="mt-3 text-sm text-muted">Last updated: 10 August 2026</p>

            <div className="mt-6 space-y-6 text-[15px] leading-7 sm:text-base">
              <section>
                <h2 className="text-xl font-bold text-heading">1. Nature of Service</h2>
                <p className="mt-2">
                  {site.name} primarily accepts donations and does not sell physical goods through this
                  website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">2. Shipping</h2>
                <p className="mt-2">
                  No physical shipping is applicable for online donations made on this website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">3. Delivery of Acknowledgement</h2>
                <p className="mt-2">
                  After successful payment, donors typically receive an on-screen confirmation and/or
                  email acknowledgement. In normal circumstances, acknowledgement is sent within 24 to
                  72 hours.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">4. Delay Handling</h2>
                <p className="mt-2">
                  If you do not receive an acknowledgement within the expected time, contact our support
                  team with your transaction details for assistance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-heading">5. Contact</h2>
                <p className="mt-2">Email: {site.emails[0]}</p>
                <p>Phone: {site.phones[0]}</p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
