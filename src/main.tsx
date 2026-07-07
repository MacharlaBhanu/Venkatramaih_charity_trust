import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import { DonationProvider } from './context/DonationContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DonationProvider>
          <App />
        </DonationProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
