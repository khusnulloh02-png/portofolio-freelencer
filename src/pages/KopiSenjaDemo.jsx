import { useState } from "react";
import {
  Coffee,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  ArrowDown,
  CheckCircle2,
  ShoppingBag,
  Wifi,
  Music,
  Truck,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";

const KopiSenjaDemo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const waNumber = "6281234567890"; // Ganti dengan nomor WA Toko Kopi

  const menuItems = [
    {
      id: 1,
      name: "Es Kopi Senja Utama",
      price: "Rp 22.000",
      desc: "Espresso khas Senja, susu segar creamy, dan pemanis gula aren alami pilihan.",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Manual Brew V60",
      price: "Rp 25.000",
      desc: "Seduhan kopi filter dari biji kopi Single Origin Ijen / Gayo sesuai stok musiman.",
      image:
        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Hazelnut Latte",
      price: "Rp 26.000",
      desc: "Perpaduan espresso halus, steamed milk lembut, dan sirup hazelnut aromatik.",
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Matcha Latte",
      price: "Rp 24.000",
      desc: "Bubuk matcha murni impor Jepang dengan susu pilihan untuk non-coffee lover.",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Butter Croissant",
      price: "Rp 18.000",
      desc: "Pastry renyah beraroma butter gurih, segar dipanggang setiap sore hari.",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Choco Toast Senja",
      price: "Rp 16.000",
      desc: "Roti panggang tebal dengan isian cokelat lumer premium dan keju parut.",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const getWaLink = (itemName) => {
    const text = encodeURIComponent(
      `Halo Toko Kopi Senja, saya ingin memesan: ${itemName}`,
    );
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans antialiased selection:bg-amber-700 selection:text-white">
      {/* Top Demo Header Banner */}
      <div className="bg-amber-900/80 text-amber-100 text-xs sm:text-sm py-2 px-4 text-center border-b border-amber-700/40">
        📌 <span className="font-semibold">Halaman Demo Portfolio</span> —
        Dibuat oleh{" "}
        <span className="underline font-bold">Mukhamad Khusnulloh</span> untuk
        Toko Kopi Senja.
      </div>

      {/* Header / Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-stone-900/90 backdrop-blur-md border-b border-amber-900/20 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-700/20 border border-amber-600/40 flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                <Coffee className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-wide text-amber-100 font-serif">
                  Kopi Senja
                </span>
                <span className="block text-[10px] text-amber-500 tracking-widest uppercase -mt-1">
                  Coffee & Roastery
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-300">
              <a
                href="#about"
                className="hover:text-amber-400 transition-colors"
              >
                Tentang Kami
              </a>
              <a
                href="#menu"
                className="hover:text-amber-400 transition-colors"
              >
                Menu Pilihan
              </a>
              <a
                href="#features"
                className="hover:text-amber-400 transition-colors"
              >
                Keunggulan
              </a>
              <a
                href="#location"
                className="hover:text-amber-400 transition-colors"
              >
                Lokasi
              </a>
            </nav>

            {/* CTA WhatsApp Button */}
            <div className="hidden md:flex items-center">
              <a
                href={`https://wa.me/${waNumber}?text=Halo%20Toko%20Kopi%20Senja,%20saya%20ingin%20pesan`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-amber-900/30 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan via WA</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-stone-300 p-2 rounded-lg hover:bg-stone-800 transition-colors"
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
          <div className="md:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-stone-300 hover:bg-stone-800 hover:text-amber-400"
            >
              Tentang Kami
            </a>
            <a
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-stone-300 hover:bg-stone-800 hover:text-amber-400"
            >
              Menu Pilihan
            </a>
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-stone-300 hover:bg-stone-800 hover:text-amber-400"
            >
              Keunggulan
            </a>
            <a
              href="#location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-stone-300 hover:bg-stone-800 hover:text-amber-400"
            >
              Lokasi
            </a>
            <a
              href={`https://wa.me/${waNumber}?text=Halo%20Toko%20Kopi%20Senja,%20saya%20ingin%20pesan`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-amber-700 text-white py-3 rounded-xl font-medium mt-4 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Pesan via WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-stone-950 text-white flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80"
            alt="Coffee Shop Atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-900/40 border border-amber-700/50 text-amber-300 text-xs sm:text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Seduh Manual & Biji Kopi Lokal Pilihan</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif leading-tight mb-6 text-stone-100">
                Nikmati Kehangatan{" "}
                <span className="text-amber-500 italic">Senja</span> dalam
                Setiap Cangkir.
              </h1>

              <p className="text-stone-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Kopi Senja menghadirkan perpaduan sempurna antara keahlian
                barista, biji kopi arabika pilihan Nusantara, dan suasana hangat
                untuk momen istimewa Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#menu"
                  className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-900/40 hover:scale-105 active:scale-95"
                >
                  <span>Lihat Katalog Menu</span>
                  <ArrowDown className="w-5 h-5" />
                </a>

                <a
                  href={`https://wa.me/${waNumber}?text=Halo%20Kopi%20Senja,%20saya%20mau%20tanya%20menu`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-stone-700 hover:border-amber-500 bg-stone-900/60 hover:bg-stone-800 text-stone-200 px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-amber-500" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>

              {/* Quick Info Grid */}
              <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span class="block text-2xl sm:text-3xl font-bold text-amber-400 font-serif">
                    100%
                  </span>
                  <span class="text-xs sm:text-sm text-stone-400">
                    Arabika Nusantara
                  </span>
                </div>
                <div>
                  <span class="block text-2xl sm:text-3xl font-bold text-amber-400 font-serif">
                    4.9 ★
                  </span>
                  <span class="text-xs sm:text-sm text-stone-400">
                    Ulasan Google
                  </span>
                </div>
                <div>
                  <span class="block text-2xl sm:text-3xl font-bold text-amber-400 font-serif">
                    15:00-23:00
                  </span>
                  <span class="text-xs sm:text-sm text-stone-400">
                    Jam Operasional
                  </span>
                </div>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-amber-900 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl bg-stone-900">
                  <img
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                    alt="Specialty Coffee Kopi Senja"
                    className="w-full h-[400px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                      Signature Drink
                    </span>
                    <h3 className="text-xl font-bold text-white font-serif">
                      Es Kopi Senja Utama
                    </h3>
                    <p className="text-stone-300 text-xs mt-1">
                      Espresso double shot, susu segar, dan gula aren asli
                      Tuban.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 bg-stone-900 text-stone-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                alt="Barista Pouring Coffee"
                className="rounded-2xl shadow-xl w-full h-[350px] sm:h-[420px] object-cover border border-amber-900/30"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-amber-900/90 text-white p-6 rounded-2xl shadow-xl max-w-xs border border-amber-600/40 backdrop-blur-md">
                <p className="font-serif text-base italic">
                  "Kopi terbaik lahir dari dedikasi dan kehangatan kebersamaan."
                </p>
              </div>
            </div>

            <div>
              <span className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Cerita Kami
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-6 text-amber-100">
                Rumah Bagi Penikmat Kopi & Suasana Hangat
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
                Didirikan di sudut kota yang tenang, Toko Kopi Senja dirancang
                khusus sebagai tempat bernaung dari hiruk-pikuk kesibukan
                harian.
              </p>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                Setiap biji kopi disangrai dengan presisi tinggi oleh tim
                barista berpengalaman kami, menghadirkan cita rasa kaya yang
                cocok menemani obrolan hangat, pekerjaan, atau sekadar menikmati
                waktu sendiri di kala senja.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  "100% Single Origin",
                  "Barista Bersertifikat",
                  "Bahan Alami Tanpa Pengawet",
                  "Tempat Cozy & WiFi Kencang",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-stone-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Showcase Section (Responsif Grid: HP 1 col, Tablet 2 col, Desktop 3 col) */}
      <section id="menu" className="py-16 sm:py-24 bg-stone-950 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Katalog Pilihan
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-amber-100">
              Menu Spesial Kopi Senja
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              Pilih varian favorit Anda dan langsung pesan via WhatsApp dengan
              mudah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-stone-900 rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-600/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="h-48 sm:h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tag && (
                    <span className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {item.tag}
                    </span>
                  )}
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100">
                      {item.name}
                    </h3>
                    <span className="text-amber-400 font-bold text-base sm:text-lg shrink-0 ml-2">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-400 text-xs sm:text-sm mb-6 leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  <a
                    href={getWaLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-amber-800/60 hover:bg-amber-700 text-amber-100 py-3 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-amber-700/40 transition-colors active:scale-95"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Pesan via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section
        id="features"
        className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-y border-amber-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Wifi className="w-6 h-6 text-amber-500" />,
                title: "Fast WiFi & Power Outlets",
                desc: "Fasilitas lengkap untuk Anda yang ingin bekerja remote (WFC) atau mengerjakan tugas dengan nyaman.",
              },
              {
                icon: <Music className="w-6 h-6 text-amber-500" />,
                title: "Acoustic & Cozy Atmosphere",
                desc: "Pencahayaan hangat dan musik akustik yang menenangkan, menciptakan suasana relaksasi maksimal.",
              },
              {
                icon: <Truck className="w-6 h-6 text-amber-500" />,
                title: "Layanan Takeaway & Online",
                desc: "Bisa pesan via WhatsApp dan dikirim langsung ke lokasi Anda dalam kondisi segar.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-stone-950/60 border border-amber-900/20"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-900/40 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 font-serif">
                  {feature.title}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="py-16 sm:py-24 bg-stone-950 text-stone-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Kunjungi Kami
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-6 text-amber-100">
                Kedai Kopi Senja Utama
              </h2>

              <div className="space-y-6 text-stone-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-900 rounded-xl text-amber-500 border border-amber-900/30 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-100 text-sm sm:text-base">
                      Alamat
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      Jl. Pemuda No. 45, Kawasan Senja Centre, Kota Mojokerto,
                      Jawa Timur
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-900 rounded-xl text-amber-500 border border-amber-900/30 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-100 text-sm sm:text-base">
                      Jam Operasional
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      Senin - Minggu: 15:00 - 23:00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-900 rounded-xl text-amber-500 border border-amber-900/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-100 text-sm sm:text-base">
                      Kontak & Pemesanan
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      +62 812-3456-7890 (WhatsApp Available)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Container */}
            <div className="lg:col-span-7">
              <div className="bg-stone-900 p-3 sm:p-4 rounded-3xl border border-amber-900/30 shadow-2xl">
                <div className="w-full h-[300px] sm:h-[380px] bg-stone-800 rounded-2xl overflow-hidden">
                  <iframe
                    title="Google Maps Location"
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
      <footer className="bg-stone-950 border-t border-amber-900/20 py-8 sm:py-12 text-stone-400 text-xs sm:text-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div class="flex items-center gap-2.5">
              <Coffee class="w-5 h-5 text-amber-500" />
              <span class="font-serif text-lg font-bold text-amber-100">
                Toko Kopi Senja
              </span>
            </div>
            <p>
              © {new Date().getFullYear()} Toko Kopi Senja. Designed by Mukhamad
              Khusnulloh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KopiSenjaDemo;
