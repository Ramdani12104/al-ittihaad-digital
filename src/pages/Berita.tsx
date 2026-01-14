import Layout from "@/components/layout/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const beritaList = [
  {
    id: 1,
    title: "Prestasi Gemilang di Kompetisi Tahfidz Nasional",
    excerpt: "Siswa MTs Al Ittihaad berhasil meraih juara 1 dalam kompetisi tahfidz tingkat nasional yang diselenggarakan di Jakarta. Keberhasilan ini merupakan bukti nyata dari program tahfidz yang intensif.",
    date: "10 Januari 2025",
    category: "Prestasi",
  },
  {
    id: 2,
    title: "Pembukaan Pendaftaran Siswa Baru 2025/2026",
    excerpt: "MTs Al Ittihaad membuka pendaftaran siswa baru untuk tahun ajaran 2025/2026 dengan berbagai kemudahan dan beasiswa bagi siswa berprestasi dan kurang mampu.",
    date: "5 Januari 2025",
    category: "Pengumuman",
  },
  {
    id: 3,
    title: "Kunjungan Edukatif ke Museum Geologi Bandung",
    excerpt: "Dalam rangka pembelajaran IPA, siswa kelas 8 melaksanakan kunjungan edukatif ke Museum Geologi Bandung untuk mempelajari sejarah bumi dan batuan.",
    date: "2 Januari 2025",
    category: "Kegiatan",
  },
  {
    id: 4,
    title: "Peringatan Maulid Nabi Muhammad SAW 1446 H",
    excerpt: "MTs Al Ittihaad mengadakan peringatan Maulid Nabi Muhammad SAW dengan berbagai rangkaian kegiatan seperti lomba, tabligh akbar, dan santunan anak yatim.",
    date: "15 Desember 2024",
    category: "Kegiatan",
  },
  {
    id: 5,
    title: "Workshop Penulisan Karya Ilmiah untuk Siswa",
    excerpt: "Bekerjasama dengan Universitas Pendidikan Indonesia, MTs Al Ittihaad mengadakan workshop penulisan karya ilmiah untuk siswa kelas 9.",
    date: "10 Desember 2024",
    category: "Akademik",
  },
  {
    id: 6,
    title: "Wisuda Tahfidz Al-Quran Angkatan ke-15",
    excerpt: "Sebanyak 35 siswa berhasil menyelesaikan program tahfidz dan diwisuda dalam acara yang dihadiri oleh orang tua dan tokoh masyarakat.",
    date: "1 Desember 2024",
    category: "Kegiatan",
  },
];

const Berita = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Berita & Pengumuman
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Informasi terbaru seputar kegiatan dan pengumuman MTs Al Ittihaad
            </p>
          </div>
        </div>
      </section>

      {/* Berita List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaList.map((berita, index) => (
              <article
                key={berita.id}
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
                      {berita.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{berita.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {berita.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {berita.excerpt}
                  </p>
                  <Link 
                    to={`/berita/${berita.id}`}
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
    </Layout>
  );
};

export default Berita;
