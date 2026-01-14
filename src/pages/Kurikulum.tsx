import Layout from "@/components/layout/Layout";
import { BookOpen, Sparkles, GraduationCap, Clock, CheckCircle } from "lucide-react";

const kurikulumPersis = [
  "Tafsir Al-Quran",
  "Hadits & Mustalahul Hadits",
  "Fiqih & Ushul Fiqih",
  "Aqidah & Tauhid",
  "Akhlak & Tasawuf",
  "Bahasa Arab (Nahwu, Shorof, Balaghah)",
  "Tarikh Islam",
  "Tahfidz Al-Quran",
];

const kurikulumNasional = [
  "Matematika",
  "Ilmu Pengetahuan Alam (IPA)",
  "Ilmu Pengetahuan Sosial (IPS)",
  "Bahasa Indonesia",
  "Bahasa Inggris",
  "Pendidikan Kewarganegaraan (PKn)",
  "Seni Budaya",
  "Pendidikan Jasmani",
];

const programUnggulan = [
  {
    icon: BookOpen,
    title: "Program Tahfidz",
    description: "Target hafalan minimal 3 juz selama 3 tahun dengan metode talaqqi dan muraja'ah intensif.",
    features: ["Kelas tahfidz reguler", "Halaqah Al-Quran harian", "Ujian tahfidz berkala", "Wisuda tahfidz tahunan"],
  },
  {
    icon: Sparkles,
    title: "Penguatan Keislaman",
    description: "Pembinaan pemahaman Islam yang komprehensif berdasarkan Al-Quran dan Sunnah.",
    features: ["Kajian kitab kuning", "Praktik ibadah", "Kultum rutin", "Mentoring keislaman"],
  },
  {
    icon: GraduationCap,
    title: "Akademik Excellence",
    description: "Pembelajaran berkualitas untuk mempersiapkan siswa melanjutkan pendidikan tinggi.",
    features: ["Bimbingan olimpiade", "Try out berkala", "Kelas tambahan", "Konseling akademik"],
  },
];

const Kurikulum = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Kurikulum & Program
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Integrasi sempurna antara kurikulum Persatuan Islam dan Kurikulum Nasional
            </p>
          </div>
        </div>
      </section>

      {/* Kurikulum Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Pendidikan Terintegrasi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 section-title section-title-center">
              Dua Kurikulum, Satu Tujuan
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              MTs Al Ittihaad menerapkan sistem pendidikan yang mengintegrasikan kurikulum Persatuan Islam (Persis) 
              dengan Kurikulum Nasional dari Kementerian Agama RI. Pendekatan ini memastikan siswa mendapatkan 
              pendidikan yang seimbang antara ilmu agama dan ilmu pengetahuan umum.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Kurikulum Persis */}
            <div className="bg-card rounded-2xl p-8 shadow-card border-t-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Kurikulum Persis</h3>
                  <p className="text-sm text-muted-foreground">Pendidikan Keagamaan</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Kurikulum yang disusun oleh Persatuan Islam untuk membentuk pemahaman Islam yang shahih 
                berdasarkan Al-Quran dan Sunnah dengan manhaj salafus shalih.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {kurikulumPersis.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kurikulum Nasional */}
            <div className="bg-card rounded-2xl p-8 shadow-card border-t-4 border-secondary">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Kurikulum Nasional</h3>
                  <p className="text-sm text-muted-foreground">Kementerian Agama RI</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Kurikulum resmi dari Kementerian Agama RI yang memastikan siswa mendapatkan pendidikan 
                yang setara dengan sekolah umum dan dapat melanjutkan ke jenjang pendidikan selanjutnya.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {kurikulumNasional.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jam Belajar */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Waktu Pembelajaran
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
                Jadwal Belajar
              </h2>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Senin - Sabtu</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-accent rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Pagi</p>
                  <p className="text-lg font-semibold text-foreground">07:00 - 12:00</p>
                  <p className="text-xs text-muted-foreground mt-1">Kurikulum Nasional</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Siang</p>
                  <p className="text-lg font-semibold text-foreground">13:00 - 15:00</p>
                  <p className="text-xs text-muted-foreground mt-1">Kurikulum Persis</p>
                </div>
                <div className="text-center p-4 bg-secondary/20 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Sore (Opsional)</p>
                  <p className="text-lg font-semibold text-foreground">15:30 - 17:00</p>
                  <p className="text-xs text-muted-foreground mt-1">Ekstrakurikuler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Program Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Keunggulan Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programUnggulan.map((program, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card card-hover">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6">
                  <program.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kurikulum;
