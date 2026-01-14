import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, CheckCircle, Phone, ArrowRight } from "lucide-react";

const jadwal = [
  { kegiatan: "Pendaftaran Online", tanggal: "1 Januari - 30 April 2025" },
  { kegiatan: "Verifikasi Berkas", tanggal: "1 Mei - 15 Mei 2025" },
  { kegiatan: "Tes Seleksi", tanggal: "20 - 25 Mei 2025" },
  { kegiatan: "Pengumuman Hasil", tanggal: "1 Juni 2025" },
  { kegiatan: "Daftar Ulang", tanggal: "5 - 15 Juni 2025" },
  { kegiatan: "Masa Orientasi", tanggal: "14 - 16 Juli 2025" },
];

const syarat = [
  "Fotokopi Akta Kelahiran (2 lembar)",
  "Fotokopi Kartu Keluarga (2 lembar)",
  "Fotokopi Rapor Kelas 4, 5, dan 6 SD/MI (masing-masing 1 lembar)",
  "Surat Keterangan Lulus (asli + fotokopi)",
  "Pas foto berwarna 3x4 (4 lembar)",
  "Fotokopi KTP Orang Tua/Wali",
  "Surat Keterangan Sehat dari dokter",
  "Surat Keterangan Berkelakuan Baik dari SD/MI asal",
];

const biaya = [
  { item: "Biaya Pendaftaran", nominal: "Rp 200.000" },
  { item: "Uang Pangkal", nominal: "Rp 3.000.000" },
  { item: "Seragam & Perlengkapan", nominal: "Rp 1.500.000" },
  { item: "SPP Bulanan", nominal: "Rp 500.000/bulan" },
];

const PPDB = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-primary-foreground text-sm font-medium">
                Pendaftaran Dibuka!
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              PPDB 2025/2026
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Penerimaan Peserta Didik Baru MTs Al Ittihaad Tahun Ajaran 2025/2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href="https://wa.me/6281234567890?text=Assalamualaikum, saya ingin mendaftar ke MTs Al Ittihaad" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Daftar via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jadwal */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Jadwal Pendaftaran
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-6">
                {jadwal.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1 bg-card rounded-xl p-6 shadow-card">
                      <h4 className="font-semibold text-foreground text-lg">{item.kegiatan}</h4>
                      <p className="text-muted-foreground">{item.tanggal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syarat */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Persyaratan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Syarat Pendaftaran
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Dokumen yang Diperlukan</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {syarat.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biaya */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Informasi Biaya
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground section-title section-title-center">
              Biaya Pendidikan
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card">
              {biaya.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-6 ${index !== biaya.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="text-foreground font-medium">{item.item}</span>
                  <span className="text-primary font-semibold">{item.nominal}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 bg-accent rounded-xl">
              <p className="text-sm text-muted-foreground text-center">
                * Tersedia program beasiswa bagi siswa berprestasi dan dari keluarga kurang mampu.
                <br />
                Hubungi kami untuk informasi lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Siap Bergabung?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Daftarkan putra/putri Anda sekarang dan wujudkan generasi Qurani yang berprestasi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href="https://wa.me/6281234567890?text=Assalamualaikum, saya ingin mendaftar ke MTs Al Ittihaad" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Daftar Sekarang
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:0221234567">
                  Hubungi (022) 1234-5678
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PPDB;
