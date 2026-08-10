import { Code2 } from "lucide-react";

const Footer = () => {
  const igUrl = "https://www.instagram.com/mkhmmdkhsnllh.de";

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <p className="text-slate-600 text-sm font-medium">
              Mukhamad Khusnulloh — Frontend Developer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium"
            >
              <span>@mkhmmdkhsnllh.dev</span>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Mukhamad Khusnulloh. All rights
            reserved. Built with React & Tailwind CSS v4.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
