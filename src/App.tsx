import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { LandingPage } from "./pages/LandingPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-paper text-ink">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/labels" element={<PlaceholderPage title="Nos Labels Officiels" />} />
            <Route path="/eleveurs" element={<PlaceholderPage title="Annuaire des Éleveurs" />} />
            <Route path="/services" element={<PlaceholderPage title="Services & Usages" />} />
            <Route path="/actualites" element={<PlaceholderPage title="Actualités & Agenda" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact & Adhésion" />} />
            <Route path="*" element={<PlaceholderPage title="Page introuvable" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
