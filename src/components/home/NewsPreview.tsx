import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Prestasi Gemilang di Kompetisi Tahfidz Nasional",
    excerpt: "Siswa MTs Al Ittihaad berhasil meraih juara 1 dalam kompetisi tahfidz tingkat nasional yang diselenggarakan di Jakarta.",
    date: "10 Januari 2025",
    category: "Prestasi",
  },
  {
    id: 2,
    title: "Pembukaan Pendaftaran Siswa Baru 2025/2026",
    excerpt: "MTs Al Ittihaad membuka pendaftaran siswa baru untuk tahun ajaran 2025/2026 dengan berbagai kemudahan dan beasiswa.",
    date: "5 Januari 2025",
    category: "Pengumuman",
  },
  {
    id: 3,
    title: "Kunjungan Edukatif ke Museum Geologi Bandung",
    excerpt: "Dalam rangka pembelajaran IPA, siswa kelas 8 melaksanakan kunjungan edukatif ke Museum Geologi Bandung.",
    date: "2 Januari 2025",
    category: "Kegiatan",
  },
];

const NewsPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Berita & Pengumuman
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title">
              Kabar Terbaru
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/berita">
              Lihat Semua
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <article
              key={news.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Placeholder Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-arabic text-primary">خ</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {news.excerpt}
                </p>
                <Link 
                  to={`/berita/${news.id}`}
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
