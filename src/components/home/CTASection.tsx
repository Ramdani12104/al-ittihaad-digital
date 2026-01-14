import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary islamic-pattern relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Wujudkan impian anak Anda menjadi generasi Qurani yang berprestasi. 
            Pendaftaran siswa baru MTs Al Ittihaad tahun ajaran 2025/2026 telah dibuka!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/ppdb">
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Arabic Quote */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-2xl md:text-3xl font-arabic text-primary-foreground/90 mb-3">
              طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
            </p>
            <p className="text-primary-foreground/70 text-sm italic">
              "Menuntut ilmu adalah kewajiban bagi setiap Muslim" (HR. Ibnu Majah)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
