import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground islamic-pattern">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-arabic">م</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">MTs Al Ittihaad</h3>
                <p className="text-sm text-primary-foreground/80">Madrasah Tsanawiyah</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Mencetak generasi muda yang berilmu, berakhlak mulia, dan berprestasi sesuai dengan nilai-nilai Islam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              {[
                { name: "Profil Sekolah", path: "/profil" },
                { name: "Kurikulum", path: "/kurikulum" },
                { name: "PPDB Online", path: "/ppdb" },
                { name: "Galeri", path: "/galeri" },
                { name: "Berita", path: "/berita" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Jl. Pendidikan No. 123, Kota Bandung, Jawa Barat 40123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">(022) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@mts-alittihaad.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Jam Operasional</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground">Senin - Jumat</p>
                  <p className="text-primary-foreground/80">07:00 - 15:00 WIB</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground">Sabtu</p>
                  <p className="text-primary-foreground/80">07:00 - 12:00 WIB</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/70 text-sm text-center md:text-left">
            © {new Date().getFullYear()} MTs Al Ittihaad. Hak Cipta Dilindungi.
          </p>
          <p className="text-primary-foreground/70 text-sm font-arabic text-center">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
