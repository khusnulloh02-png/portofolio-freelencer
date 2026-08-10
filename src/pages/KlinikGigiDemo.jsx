import { useState } from "react";
import {
  Smile,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  UserCheck,
  Calendar,
  Award,
  ChevronRight,
  HeartPulse,
} from "lucide-react";

const KlinikGigiDemo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const waNumber = "6281234567890"; // Ganti dengan nomor WA Klinik

  const services = [
    {
      id: 1,
      title: "Scaling & Pembersihan Karang",
      price: "Mulai Rp 150.000",
      desc: "Pembersihan karang gigi secara menyeluruh dengan teknologi ultrasonic scaler yang aman dan minim rasa sakit.",
      tag: "Paling Populer",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Bleaching / Teeth Whitening",
      price: "Mulai Rp 1.200.000",
      desc: "Perawatan pemutihan gigi profesional untuk senyum lebih cerah dan bersih secara instan dalam 1x kedatangan.",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Pemasangan Behel (Orthodontics)",
      price: "Mulai Rp 3.500.000",
      desc: "Merapikan posisi gigi dengan bracket berkualitas tinggi serta perawatan rutin berkala bersama dokter spesialis.",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Penambalan Gigi Estetik",
      price: "Mulai Rp 200.000",
      desc: "Penambalan gigi berlubang menggunakan bahan resin komposit yang warnanya menyatu alami dengan gigi asli.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Pencabutan & Bedah Mulut",
      price: "Mulai Rp 250.000",
      desc: "Prosedur pencabutan gigi bungsu atau gigi rusak dengan teknik anestesi lokal yang nyaman dan minim trauma.",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Gigi Tiruan & Implan Gigi",
      price: "Mulai Rp 1.500.000",
      desc: "Solusi penggantian gigi ompong secara permanen maupun lepas-pasang demi mengembalikan fungsi kunyah ideal.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const getWaBookingLink = (serviceName) => {
    const text = encodeURIComponent(
      `Halo Klinik Gigi Berseri, saya ingin reservasi jadwal untuk perawatan: ${serviceName}`,
    );
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-teal-600 selection:text-white">
      {/* Top Demo Header Banner */}
      <div className="bg-teal-800 text-teal-100 text-xs sm:text-sm py-2 px-4 text-center border-b border-teal-700/50">
        📌 <span className="font-semibold">Halaman Demo Portfolio</span> —
        Dibuat oleh{" "}
        <span className="underline font-bold">Mukhamad Khusnulloh</span> untuk
        Klinik Gigi Berseri.
      </div>

      {/* Sticky Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Klinik */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/30 group-hover:bg-teal-700 transition-colors">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  Klinik Gigi <span className="text-teal-600">Berseri</span>
                </span>
                <span className="block text-[10px] text-slate-500 font-medium tracking-wider uppercase -mt-1">
                  Dental & Aesthetic Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a
                href="#about"
                className="hover:text-teal-600 transition-colors"
              >
                Tentang Klinik
              </a>
              <a
                href="#services"
                className="hover:text-teal-600 transition-colors"
              >
                Layanan
              </a>
              <a
                href="#advantages"
                className="hover:text-teal-600 transition-colors"
              >
                Keunggulan
              </a>
              <a
                href="#schedule"
                className="hover:text-teal-600 transition-colors"
              >
                Jadwal & Lokasi
              </a>
            </nav>

            {/* CTA Reservation Button */}
            <div className="hidden md:flex items-center">
              <a
                href={`https://wa.me/${waNumber}?text=Halo%20Klinik%20Gigi%20Berseri,%20saya%20ingin%20reservasi%20jadwal%20pemeriksaan`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all shadow-md shadow-teal-600/20 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservasi Online</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-600"
            >
              Tentang Klinik
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-600"
            >
              Layanan
            </a>
            <a
              href="#advantages"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-600"
            >
              Keunggulan
            </a>
            <a
              href="#schedule"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-600"
            >
              Jadwal & Lokasi
            </a>
            <a
              href={`https://wa.me/${waNumber}?text=Halo%20Klinik%20Gigi%20Berseri,%20saya%20ingin%20reservasi%20jadwal%20pemeriksaan`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white py-3 rounded-xl font-medium mt-4 shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span>Reservasi via WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-teal-50/60 to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs sm:text-sm font-semibold mb-6 border border-teal-200">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Praktek Dokter Gigi Profesional & Ramah Anak</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Senyum Sehat & Percaya Diri Bersama{" "}
                <span className="text-teal-600">Klinik Gigi Berseri</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Nikmati perawatan gigi berkualitas tinggi dengan peralatan
                modern yang higienis, dokter spesialis berpengalaman, dan
                suasana klinik yang nyaman minim rasa cemas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${waNumber}?text=Halo%20Klinik%20Gigi%20Berseri,%20saya%20ingin%20reservasi%20jadwal%20pemeriksaan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/25 active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Reservasi Jadwal Dokter</span>
                </a>

                <a
                  href="#services"
                  className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Lihat Layanan & Tarif</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-teal-600">
                    3.500+
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    Pasien Terlayani
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-teal-600">
                    4.9 ★
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    Rating Ulasan Google
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-teal-600">
                    100%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    Steril & Higienis
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Right Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                    alt="Pemeriksaan Klinik Gigi Berseri"
                    className="w-full h-[380px] sm:h-[420px] object-cover"
                  />
                  <div className="p-5 bg-white border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">
                          Dokter Gigi Sertifikasi Resmi
                        </h3>
                        <p className="text-slate-500 text-xs">
                          Standar Protokol Kesehatan Kemenkes RI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Ruang Perawatan Dental Klinik"
                className="rounded-2xl shadow-xl w-full h-[350px] sm:h-[420px] object-cover border border-slate-100"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-teal-600 text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-sm font-medium">
                  "Komitmen kami adalah memberikan perawatan gigi tanpa rasa
                  takut untuk seluruh keluarga."
                </p>
              </div>
            </div>

            <div>
              <span className="text-teal-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
                Tentang Klinik
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
                Pilihan Utama Perawatan Gigi Keluarga Anda
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Klinik Gigi Berseri hadir dengan konsep perawatan modern yang
                mengutamakan kenyamanan pasien. Kami percaya bahwa setiap orang
                berhak memiliki senyum sehat dan indah tanpa perlu khawatir akan
                rasa sakit.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Dilengkapi dengan peralatan diagnostik terkini, proses
                sterilisasi alat medis berlapis, serta penanganan dokter yang
                ramah dan komunikatif.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Konsultasi Ramah & Detail",
                  "Peralatan Steril & Modern",
                  "Bisa Reservasi Tanpa Antre",
                  "Harga Transparan Tanpa Tersembunyi",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-teal-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Layanan Spesialis
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-4">
              Perawatan Gigi Lengkap & Terjangkau
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Pilih jenis perawatan yang Anda butuhkan dan jadwalkan konsultasi
              langsung via WhatsApp.
            </p>
          </div>

          {/* Grid Layanan (HP 1 col, Tablet 2 col, Desktop 3 col) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-48 sm:h-52 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {service.tag && (
                    <span className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {service.tag}
                    </span>
                  )}
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <span className="text-teal-600 font-bold text-sm mb-1">
                    {service.price}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <a
                    href={getWaBookingLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-teal-200 transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Daftar / Booking via WA</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Mengapa Memilih Klinik Gigi Berseri?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
                title: "Jaminan Autoclave Sterilization",
                desc: "Semua instrumen medis melalui proses sterilisasi suhu tinggi bertingkat untuk pencegahan kontaminasi silang.",
              },
              {
                icon: <UserCheck className="w-6 h-6 text-teal-600" />,
                title: "Dokter Ramah & Komunikatif",
                desc: "Dokter kami siap menjelaskan kondisi kesehatan gigi Anda secara transparan dan tanpa membuat cemas.",
              },
              {
                icon: <HeartPulse className="w-6 h-6 text-teal-600" />,
                title: "Minim Rasa Sakit (Gentle Care)",
                desc: "Penggunaan teknik anestesi presisi modern yang membuat tindakan cabut atau tambal gigi terasa nyaman.",
              },
            ].map((adv, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                  {adv.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Location Section */}
      <section id="schedule" className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-5">
              <span className="text-teal-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
                Lokasi & Praktek
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6">
                Kunjungi Klinik Gigi Berseri
              </h2>

              <div className="space-y-6 text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-teal-400 border border-slate-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Alamat Lengkap
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Jl. Raden Patah No. 88, Kp. Medis, Kota Mojokerto, Jawa
                      Timur
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-teal-400 border border-slate-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Jam Operasional Praktek
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Senin - Sabtu: 09:00 - 21:00 WIB
                    </p>
                    <p className="text-xs text-teal-400 mt-0.5">
                      *Minggu & Hari Libur: Dengan Perjanjian
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-teal-400 border border-slate-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Telepon / WhatsApp
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      +62 812-3456-7890
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={`https://wa.me/${waNumber}?text=Halo%20Klinik%20Gigi%20Berseri,%20saya%20ingin%20tanya%20jadwal%20praktek%20dokter`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-bold text-sm"
                >
                  <span>Chat CS Informasi Klinik</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Google Maps Container */}
            <div className="lg:col-span-7">
              <div className="bg-slate-800 p-3 sm:p-4 rounded-3xl border border-slate-700 shadow-2xl">
                <div className="w-full h-[300px] sm:h-[380px] bg-slate-700 rounded-2xl overflow-hidden">
                  <iframe
                    title="Google Maps Klinik Gigi Berseri"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20888568045!2d112.3688820972656!3d-7.472613100000001!2m3!1f0!2f0!3f0!2m1!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e2286b20757d%3A0x4027a76e352e4a0!2sMojokerto%2C%20Mojokerto%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-slate-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Smile className="w-5 h-5 text-teal-500" />
              <span className="font-bold text-white text-base">
                Klinik Gigi Berseri
              </span>
            </div>
            <p>
              © {new Date().getFullYear()} Klinik Gigi Berseri. Developed by
              Mukhamad Khusnulloh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KlinikGigiDemo;
