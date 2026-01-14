import { BookOpen, Sparkles, GraduationCap, Heart } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Tahfidz Al-Quran",
    description: "Program hafalan Al-Quran dengan target minimal 3 juz selama 3 tahun pembelajaran dengan metode yang menyenangkan.",
  },
  {
    icon: Sparkles,
    title: "Pendidikan Keislaman",
    description: "Kurikulum Persis yang komprehensif meliputi Tafsir, Hadits, Fiqih, Aqidah, dan Bahasa Arab.",
  },
  {
    icon: GraduationCap,
    title: "Akademik Unggulan",
    description: "Pembelajaran berbasis Kurikulum Nasional dengan penguatan pada matematika, sains, dan bahasa.",
  },
  {
    icon: Heart,
    title: "Pembinaan Karakter",
    description: "Pembentukan akhlakul karimah melalui pembiasaan ibadah, akhlak, dan nilai-nilai Islami.",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Program Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title section-title-center">
            Kurikulum Terintegrasi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perpaduan sempurna antara kurikulum Persatuan Islam (Persis) dan Kurikulum Nasional 
            untuk membentuk generasi yang seimbang dalam ilmu dunia dan akhirat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <program.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
