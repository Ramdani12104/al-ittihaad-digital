import { Link } from "react-router-dom";
import { School, BookOpen, Users, Calendar, Image, Phone } from "lucide-react";

const links = [
  {
    icon: School,
    title: "Profil Sekolah",
    description: "Visi, misi, dan sejarah madrasah",
    path: "/profil",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Kurikulum",
    description: "Program pembelajaran unggulan",
    path: "/kurikulum",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    icon: Users,
    title: "Kesiswaan",
    description: "Kegiatan dan ekstrakurikuler",
    path: "/kesiswaan",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Calendar,
    title: "PPDB",
    description: "Pendaftaran siswa baru",
    path: "/ppdb",
    color: "from-gold-400 to-gold-500",
  },
  {
    icon: Image,
    title: "Galeri",
    description: "Dokumentasi kegiatan",
    path: "/galeri",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    icon: Phone,
    title: "Kontak",
    description: "Hubungi kami",
    path: "/kontak",
    color: "from-emerald-500 to-emerald-600",
  },
];

const QuickLinks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title section-title-center">
            Jelajahi MTs Al Ittihaad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan informasi lengkap tentang madrasah kami melalui menu navigasi berikut
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {links.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className="group bg-card rounded-2xl p-6 shadow-card card-hover text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <link.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                {link.title}
              </h3>
              <p className="text-xs text-muted-foreground hidden md:block">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
