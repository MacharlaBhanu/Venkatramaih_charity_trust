import { useEffect, useState } from 'react';
import { useDonation } from '../context/DonationContext';
import { donationConfig } from '../data/siteData';
import { Icon } from './Icon';

export default function DonationModal() {
  const { isOpen, closeDonation } = useDonation();
  const [amount, setAmount] = useState<number | null>(1000);
  const [custom, setCustom] = useState('');
  const [purpose, setPurpose] = useState(donationConfig.purposes[0]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeDonation();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeDonation]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-title"
    >
      <div
        className="absolute inset-0 bg-heading/40 backdrop-blur-sm animate-fade-in"
        onClick={closeDonation}
      />
      <div className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-line bg-white p-6 shadow-glass animate-fade-in sm:p-8">
        <button
          onClick={closeDonation}
          aria-label="Close donation form"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-section text-heading transition-colors hover:bg-softblue"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18 18 6" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-seafoam text-softgreen">
              <Icon name="check" className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-2xl">Thank You!</h3>
            <p className="text-body">
              Your kindness makes a real difference. Secure online donations are coming soon through
              Razorpay. Our team will reach out to you shortly.
            </p>
            <button className="btn-primary mt-6" onClick={closeDonation}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-softblue text-ocean">
                <Icon name="heart" className="h-6 w-6" />
              </span>
              <div>
                <h3 id="donation-title" className="text-xl">
                  Make a Donation
                </h3>
                <p className="text-xs text-muted">Every contribution creates lasting change.</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-heading">
                  Select Amount
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {donationConfig.amounts.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => {
                        setAmount(amt);
                        setCustom('');
                      }}
                      className={`rounded-xl border py-2.5 text-sm font-semibold transition-all ${
                        amount === amt && !custom
                          ? 'border-ocean bg-ocean text-white'
                          : 'border-line bg-white text-heading hover:border-sky'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-heading">
                  Custom Amount
                </label>
                <input
                  type="number"
                  min="1"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="w-full rounded-xl border border-line bg-page px-4 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-heading">
                  Donation Purpose
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full rounded-xl border border-line bg-page px-4 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                >
                  {donationConfig.purposes.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  required
                  placeholder="Donor Name"
                  className="w-full rounded-xl border border-line bg-page px-4 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-xl border border-line bg-page px-4 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-line bg-page px-4 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                />
                <input
                  placeholder="PAN (optional)"
                  className="w-full rounded-xl border border-line bg-page px-4 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Icon name="heart" className="h-5 w-5" />
                Donate ₹{custom || amount?.toLocaleString('en-IN') || '0'}
              </button>

              <p className="text-center text-xs text-muted">
                Secure online donations coming soon through Razorpay.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
