import Layout from "@/components/layout/Layout";
import { Target, Eye, Users, GraduationCap, Building } from "lucide-react";

const visiMisi = {
  visi: "Menjadi madrasah unggulan yang mencetak generasi Qurani, berilmu, berakhlak mulia, dan berprestasi di tingkat nasional.",
  misi: [
    "Menyelenggarakan pendidikan berbasis Al-Quran dan Sunnah sesuai manhaj Persatuan Islam",
    "Mengintegrasikan kurikulum keagamaan dengan kurikulum nasional secara seimbang",
    "Membina akhlakul karimah melalui pembiasaan ibadah dan karakter Islami",
    "Mengembangkan potensi akademik dan non-akademik siswa secara optimal",
    "Menyediakan lingkungan belajar yang kondusif, aman, dan Islami",
    "Menjalin kerjasama dengan orang tua dan masyarakat dalam pendidikan",
  ],
};

const strukturOrganisasi = [
  { jabatan: "Kepala Madrasah", nama: "Ust. H. Ahmad Fauzi, S.Pd.I., M.Pd." },
  { jabatan: "Wakil Kepala Bidang Kurikulum", nama: "Ust. Muhammad Rizki, S.Pd." },
  { jabatan: "Wakil Kepala Bidang Kesiswaan", nama: "Ustz. Siti Aminah, S.Ag." },
  { jabatan: "Wakil Kepala Bidang Sarana", nama: "Ust. Deden Rahmat, S.T." },
  { jabatan: "Kepala Tata Usaha", nama: "Ibu Yeni Mulyani, S.E." },
];

const fasilitas = [
  "Ruang kelas ber-AC",
  "Laboratorium IPA",
  "Laboratorium Komputer",
  "Perpustakaan",
  "Masjid",
  "Lapangan Olahraga",
  "Kantin Sehat",
  "Ruang UKS",
];

const Profil = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Profil Sekolah
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Mengenal lebih dekat MTs Al Ittihaad, madrasah tsanawiyah di bawah naungan Persatuan Islam (Persis)
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Sejarah
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
                Perjalanan Kami
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                MTs Al Ittihaad didirikan pada tahun 1985 oleh para tokoh Persatuan Islam (Persis) di Kota Bandung 
                dengan visi untuk menyediakan pendidikan Islam yang berkualitas bagi generasi muda Muslim. 
                Nama "Al Ittihaad" yang berarti "Persatuan" mencerminkan semangat persatuan umat Islam 
                dalam menegakkan ajaran Al-Quran dan Sunnah.
              </p>
              <p className="leading-relaxed mb-6">
                Berawal dari beberapa ruang kelas sederhana dengan puluhan siswa, kini MTs Al Ittihaad 
                telah berkembang menjadi madrasah yang memiliki fasilitas lengkap dan telah meluluskan 
                ribuan alumni yang berkontribusi di berbagai bidang.
              </p>
              <p className="leading-relaxed">
                Dengan konsistensi dalam memegang prinsip pendidikan Islam dan terus beradaptasi dengan 
                perkembangan zaman, MTs Al Ittihaad berkomitmen untuk terus mencetak generasi Qurani 
                yang berprestasi dan berakhlak mulia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Visi</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                "{visiMisi.visi}"
              </p>
            </div>

            {/* Misi */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <Target className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Misi</h3>
              </div>
              <ul className="space-y-3">
                {visiMisi.misi.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Struktur Organisasi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Pimpinan Madrasah
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strukturOrganisasi.map((item, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-2xl p-6 shadow-card text-center ${index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center ${index === 0 ? 'w-24 h-24' : ''}`}>
                    <Users className={`text-primary-foreground ${index === 0 ? 'w-12 h-12' : 'w-10 h-10'}`} />
                  </div>
                  <h4 className={`font-semibold text-foreground mb-1 ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                    {item.nama}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.jabatan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sarana & Prasarana
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Fasilitas Kami
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {fasilitas.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-card text-center card-hover"
              >
                <Building className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profil;
