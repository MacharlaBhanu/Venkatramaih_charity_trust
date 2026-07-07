import { createContext, useContext, useState, type ReactNode } from 'react';

interface DonationContextType {
  isOpen: boolean;
  openDonation: () => void;
  closeDonation: () => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export function DonationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openDonation = () => setIsOpen(true);
  const closeDonation = () => setIsOpen(false);
  return (
    <DonationContext.Provider value={{ isOpen, openDonation, closeDonation }}>
      {children}
    </DonationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDonation() {
  const ctx = useContext(DonationContext);
  if (!ctx) throw new Error('useDonation must be used within DonationProvider');
  return ctx;
}
