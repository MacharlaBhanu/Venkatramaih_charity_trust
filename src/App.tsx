import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DonationModal from './components/DonationModal';
import PageMotion from './components/PageMotion';
import PublicAssetFallback from './components/PublicAssetFallback';
import PageImageLoader from './components/PageImageLoader';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import Gallery from './pages/Gallery';
import Stories from './pages/Stories';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-page">
      <ScrollToTop />
      <PublicAssetFallback />
      <PageImageLoader />
      <PageMotion />
      <Navbar />
      <main className="site-main flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <DonationModal />
    </div>
  );
}
