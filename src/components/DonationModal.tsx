import { useEffect, useState } from 'react';
import { HandHeart, X } from 'lucide-react';
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-title"
    >
      <div
        className="absolute inset-0 bg-[#08283D]/55 backdrop-blur-md animate-fade-in"
        onClick={closeDonation}
      />
      <div className="relative z-10 max-h-[calc(100svh-16px)] w-full max-w-[370px] overflow-y-auto rounded-[16px] border border-white/80 bg-white/95 p-4 shadow-[0_28px_90px_rgba(3,31,48,0.28)] ring-1 ring-[#CBE8F7] backdrop-blur-xl animate-fade-in sm:max-h-[92vh] sm:max-w-[560px] sm:rounded-[20px] sm:p-7">
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,#5BBFEF,transparent)]"
        />
        <button
          onClick={closeDonation}
          aria-label="Close donation form"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#D8EDF7] bg-[#F2F9FD] text-heading transition-colors hover:bg-softblue focus:outline-none focus:ring-2 focus:ring-sky/35 sm:right-5 sm:top-5 sm:h-9 sm:w-9"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
        </button>

        {submitted ? (
          <div className="px-2 py-10 text-center sm:px-6">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#BFE9DD] bg-seafoam text-softgreen shadow-[0_12px_28px_rgba(69,184,168,0.16)]">
              <Icon name="check" className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-serif text-[27px] font-bold">Thank You!</h3>
            <p className="text-[14px] leading-[1.65] text-body">
              Your kindness makes a real difference. Secure online donations are coming soon through
              Razorpay. Our team will reach out to you shortly.
            </p>
            <button className="btn-primary mt-6" onClick={closeDonation}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-center gap-2.5 pr-8 sm:mb-6 sm:gap-3 sm:pr-10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#BFE3F6] bg-[#E8F7FE] text-ocean shadow-[0_10px_24px_rgba(38,151,208,0.14)] sm:h-12 sm:w-12 sm:rounded-[14px]">
                <HandHeart className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <h3 id="donation-title" className="font-serif text-[20px] font-bold leading-tight sm:text-[25px]">
                  Make a Donation
                </h3>
                <p className="mt-0.5 text-[10px] leading-snug text-muted sm:text-[12px]">
                  Give with love. Every contribution creates lasting change.
                </p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3 sm:space-y-4"
            >
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-heading sm:mb-2 sm:text-sm">
                  Select Amount
                </label>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {donationConfig.amounts.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => {
                        setAmount(amt);
                        setCustom('');
                      }}
                      className={`h-10 rounded-[9px] border px-1 text-[10px] font-semibold transition-all sm:h-11 sm:rounded-[10px] sm:px-2 sm:text-sm ${
                        amount === amt && !custom
                          ? 'border-ocean bg-ocean text-white shadow-[0_8px_20px_rgba(38,151,208,0.2)]'
                          : 'border-line bg-white text-heading hover:border-sky hover:bg-[#F6FBFE]'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[12px] font-semibold text-heading sm:mb-1.5 sm:text-sm">
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
                  className="h-10 w-full rounded-[9px] border border-line bg-page px-3 text-[12px] outline-none focus:border-sky focus:ring-2 focus:ring-sky/30 sm:h-11 sm:rounded-[10px] sm:px-4 sm:text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-[12px] font-semibold text-heading sm:mb-1.5 sm:text-sm">
                  Donation Purpose
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="h-10 w-full rounded-[9px] border border-line bg-page px-3 text-[12px] outline-none focus:border-sky focus:ring-2 focus:ring-sky/30 sm:h-11 sm:rounded-[10px] sm:px-4 sm:text-sm"
                >
                  {donationConfig.purposes.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <input
                  required
                  placeholder="Donor Name"
                  className="h-10 min-w-0 w-full rounded-[9px] border border-line bg-page px-3 text-[12px] outline-none focus:border-sky focus:ring-2 focus:ring-sky/30 sm:h-11 sm:rounded-[10px] sm:px-4 sm:text-sm"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone"
                  className="h-10 min-w-0 w-full rounded-[9px] border border-line bg-page px-3 text-[12px] outline-none focus:border-sky focus:ring-2 focus:ring-sky/30 sm:h-11 sm:rounded-[10px] sm:px-4 sm:text-sm"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="h-10 min-w-0 w-full rounded-[9px] border border-line bg-page px-3 text-[12px] outline-none focus:border-sky focus:ring-2 focus:ring-sky/30 sm:h-11 sm:rounded-[10px] sm:px-4 sm:text-sm"
                />
                <input
                  placeholder="PAN (optional)"
                  className="h-10 min-w-0 w-full rounded-[9px] border border-line bg-page px-3 text-[12px] outline-none focus:border-sky focus:ring-2 focus:ring-sky/30 sm:h-11 sm:rounded-[10px] sm:px-4 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-ocean px-4 text-[12px] font-semibold text-white shadow-[0_14px_30px_rgba(38,151,208,0.22)] transition-all duration-200 hover:bg-sky hover:shadow-[0_18px_36px_rgba(38,151,208,0.26)] focus:outline-none focus:ring-2 focus:ring-sky/45 active:scale-[0.99] sm:h-12 sm:rounded-[12px] sm:px-5 sm:text-sm"
              >
                <HandHeart className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.9} />
                Donate ₹{custom || amount?.toLocaleString('en-IN') || '0'}
              </button>

              <p className="text-center text-[10px] leading-snug text-muted sm:text-xs">
                Secure online donations coming soon through Razorpay.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
