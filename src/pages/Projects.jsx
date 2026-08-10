import { ExternalLink, MessageCircle } from "lucide-react";

const Projects = () => {
  const igDmUrl = "https://ig.me/m/mkhmmdkhsnllh.dev";

  const projects = [
    {
      id: 1,
      title: "Toko Kopi Senja",
      category: "Company Profile & Katalog",
      description:
        "Website katalog produk untuk kedai kopi lokal dengan fitur pemesanan via WhatsApp dan integrasi lokasi.",
      techStack: ["React", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
      liveLink: "/demo/kopi-senja",
    },
    {
      id: 2,
      title: "Klinik Gigi Berseri",
      category: "Sistem Reservasi",
      description:
        "Antarmuka website pendaftaran pasien klinik gigi dengan desain ramah pengguna dan pemeliharaan jadwal.",
      techStack: ["React", "Vite", "Lucide"],
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      liveLink: "/demo/klinik-gigi",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Halaman */}
      <div className="mb-10 sm:mb-16 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-3">
          Karya & Proyek Terpilih
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
          Bukti nyata bagaimana saya membantu berbagai UMKM mentransformasi
          bisnis mereka ke ranah digital.
        </p>
      </div>

      {/* Grid Proyek (HP: 1 col, Tablet: 2 col, Desktop: 3 col) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            <div className="h-48 sm:h-52 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase mb-1">
                {project.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-secondary">
                {project.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={project.liveLink}
                  className="inline-flex items-center gap-1.5 text-primary hover:text-blue-800 font-semibold text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Bottom Banner */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-blue-600 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Punya Proyek Website UMKM?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Mari diskusikan ide dan kebutuhan bisnis Anda secara gratis.
          </p>
        </div>
        <a
          href={igDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary text-blue-700 hover:bg-blue-50 px-6 py-3.5 rounded-full font-bold text-base transition-all flex items-center gap-2 whitespace-nowrap shadow-md active:scale-95"
        >
          <MessageCircle className="w-5 h-5" /> Chat via Instagram
        </a>
      </div>
    </div>
  );
};

export default Projects;
