import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MTs Al Ittihaad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 islamic-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">
              Pendaftaran Siswa Baru Dibuka!
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Mencetak Generasi{" "}
            <span className="text-secondary">Qurani</span> yang{" "}
            <span className="text-secondary">Berprestasi</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-slide-up animation-delay-100">
            MTs Al Ittihaad menggabungkan kurikulum Persatuan Islam (Persis) dan Kurikulum Nasional
            untuk membentuk generasi muda yang berilmu, berakhlak mulia, dan siap menghadapi tantangan masa depan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
            <Button variant="gold" size="xl" asChild>
              <Link to="/ppdb">
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/profil">
                Tentang Kami
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-slide-up animation-delay-300">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">500+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Siswa Aktif</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">30+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Tenaga Pengajar</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">50+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Prestasi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
