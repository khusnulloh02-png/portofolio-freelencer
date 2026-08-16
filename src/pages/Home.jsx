import {
  ArrowRight,
  MonitorSmartphone,
  Zap,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const igDmUrl = "https://wa.me/6282321041561";

  return (
    <div className="w-full">
      {/* Hero Section dengan SEO Headline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge Availability */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 text-primary font-medium text-xs sm:text-sm mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Tersedia untuk Jasa Website UMKM
          </div>

          {/* SEO Optimized H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight mb-6 sm:mb-8 leading-tight sm:leading-tight">
            Bawa Bisnis UMKM Anda Naik Kelas dengan{" "}
            <span className="text-primary">Website Profesional</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
            Saya{" "}
            <span className="font-semibold text-slate-800">
              Mukhamad Khusnulloh
            </span>
            , Frontend Developer spesialis pembuat website modern, cepat, dan
            responsif. Ubah pengunjung menjadi pelanggan setia dengan etalase
            digital yang elegan.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            {/* Direct DM IG Button */}
            <a
              href={igDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:text-white text-blue-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasi Gratis di IG</span>
            </a>

            {/* View Projects Link */}
            <Link
              to="/projects"
              className="bg-white text-secondary border border-slate-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              Lihat Portfolio <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section (Grid Responsif: HP 1 col, Tablet 2 col, Desktop 3 col) */}
      <section className="bg-white py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-3">
              Mengapa UMKM Memilih Saya?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Solusi pembuatan website yang berfokus pada hasil nyata dan
              pertumbuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
                title: "Responsif di Semua Layar",
                desc: "Website tampil sempurna dan nyaman diakses baik dari HP, tablet, maupun laptop.",
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Performa Super Cepat",
                desc: "Menggunakan React & Vite untuk memastikan website loading dalam hitungan detik tanpa lemot.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Meningkatkan Kredibilitas",
                desc: "Desain profesional kelas atas yang membuat calon pembeli percaya pada produk/jasa Anda.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-100/70 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-secondary">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
