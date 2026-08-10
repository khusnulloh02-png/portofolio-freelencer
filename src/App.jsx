import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import KopiSenjaDemo from "./pages/KopiSenjaDemo";
import KlinikGigiDemo from "./pages/KlinikGigiDemo"; // <- Import komponen baru ini

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 selection:bg-primary selection:text-white">
        <Navbar />

        <main className="flex-grow pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/demo/kopi-senja" element={<KopiSenjaDemo />} />
            {/* Route Demo Klinik Gigi Berseri */}
            <Route path="/demo/klinik-gigi" element={<KlinikGigiDemo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
