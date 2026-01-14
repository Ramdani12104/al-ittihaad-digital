import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Kurikulum terintegrasi Persis & Nasional",
  "Program Tahfidz Al-Quran",
  "Tenaga pengajar berkualitas",
  "Fasilitas pembelajaran modern",
  "Lingkungan Islami kondusif",
  "Ekstrakurikuler beragam",
];

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary to-primary/80 islamic-pattern flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-primary-foreground/90 text-sm mb-2">Didirikan</p>
                    <p className="text-4xl font-bold text-primary-foreground">1994</p>
                    <p className="text-primary-foreground/80 text-sm mt-2">Tahun Pengalaman</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-accent flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-primary mb-2">B</p>
                    <p className="text-sm text-muted-foreground">Akreditasi</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-secondary/20 flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-foreground mb-2">30+</p>
                    <p className="text-sm text-muted-foreground">Tahun Berdiri</p>
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 islamic-pattern flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-foreground font-arabic leading-relaxed">
                      اِقْرَأْ
                    </p>
                    <p className="text-primary-foreground/80 text-sm mt-3">Bacalah!</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -right-4 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 section-title">
              Membangun Generasi Islami yang Berilmu dan Berakhlak
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              MTs AL-ITTIHAAD CIKAJANG adalah madrasah tsanawiyah di bawah naungan Persatuan Islam (Persis) 
              yang berkomitmen untuk mencetak generasi muda Muslim yang tidak hanya unggul dalam 
              bidang akademik, tetapi juga memiliki akhlak mulia dan pemahaman agama yang kuat.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Dengan program unggulan Tahfidz Al-Qur'an dan kurikulum terintegrasi, 
              kami memberikan pendidikan yang seimbang antara ilmu pengetahuan umum dan ilmu agama Islam.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/profil">
                Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
