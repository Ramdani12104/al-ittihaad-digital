import Layout from "@/components/layout/Layout";
import { Trophy, Star, Medal, Users, Music, Palette, BookOpen, Dumbbell } from "lucide-react";

const ekstrakurikuler = [
  { icon: BookOpen, name: "Tahfidz & Tilawah", description: "Pendalaman hafalan dan seni membaca Al-Quran" },
  { icon: Users, name: "Pramuka", description: "Pembinaan karakter dan kepemimpinan" },
  { icon: Dumbbell, name: "Olahraga", description: "Futsal, basket, badminton, dan atletik" },
  { icon: Palette, name: "Seni", description: "Kaligrafi, nasyid, dan teater Islami" },
  { icon: Music, name: "Marching Band", description: "Seni musik dan baris-berbaris" },
  { icon: BookOpen, name: "Bahasa", description: "English Club dan Arabic Club" },
];

const prestasi = [
  { tahun: "2024", judul: "Juara 1 Tahfidz Tingkat Nasional", kategori: "Keagamaan" },
  { tahun: "2024", judul: "Juara 2 Olimpiade Matematika Tingkat Kota", kategori: "Akademik" },
  { tahun: "2024", judul: "Juara 3 MTQ Tingkat Provinsi", kategori: "Keagamaan" },
  { tahun: "2023", judul: "Juara 1 Cerdas Cermat Agama Tingkat Kabupaten", kategori: "Akademik" },
  { tahun: "2023", judul: "Juara 2 Pidato Bahasa Arab Tingkat Provinsi", kategori: "Bahasa" },
  { tahun: "2023", judul: "Juara 1 Futsal Antar Madrasah", kategori: "Olahraga" },
];

const kegiatan = [
  { nama: "Shalat Dhuha Berjamaah", waktu: "Setiap hari" },
  { nama: "Kultum Ba'da Dzuhur", waktu: "Setiap hari" },
  { nama: "Upacara Bendera", waktu: "Setiap Senin" },
  { nama: "Kajian Kitab Kuning", waktu: "Setiap Kamis" },
  { nama: "Jum'at Bersih", waktu: "Setiap Jum'at" },
  { nama: "Peringatan Hari Besar Islam", waktu: "Berkala" },
];

const Kesiswaan = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Kesiswaan
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Kegiatan, ekstrakurikuler, dan prestasi siswa MTs Al Ittihaad
            </p>
          </div>
        </div>
      </section>

      {/* Kegiatan Rutin */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Aktivitas Siswa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Kegiatan Rutin
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {kegiatan.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.nama}</h4>
                  <p className="text-sm text-muted-foreground">{item.waktu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Pengembangan Bakat
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Ekstrakurikuler
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Berbagai pilihan kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ekstrakurikuler.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card card-hover group">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestasi */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Pencapaian
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Prestasi Siswa
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {prestasi.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 shadow-card flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center flex-shrink-0">
                      {index < 3 ? (
                        <Trophy className="w-6 h-6 text-foreground" />
                      ) : (
                        <Medal className="w-6 h-6 text-foreground" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.judul}</h4>
                      <p className="text-sm text-muted-foreground">{item.tahun}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
                    {item.kategori}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kesiswaan;
