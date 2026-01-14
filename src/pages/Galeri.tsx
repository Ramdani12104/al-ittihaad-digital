import Layout from "@/components/layout/Layout";
import { Image } from "lucide-react";

const galeriItems = [
  { id: 1, title: "Kegiatan Pembelajaran", category: "Akademik" },
  { id: 2, title: "Upacara Bendera", category: "Kegiatan" },
  { id: 3, title: "Wisuda Tahfidz", category: "Keagamaan" },
  { id: 4, title: "Lomba Tahfidz", category: "Prestasi" },
  { id: 5, title: "Study Tour", category: "Kegiatan" },
  { id: 6, title: "Peringatan Maulid Nabi", category: "Keagamaan" },
  { id: 7, title: "Ekstrakurikuler Pramuka", category: "Ekstrakurikuler" },
  { id: 8, title: "Kegiatan Olahraga", category: "Ekstrakurikuler" },
  { id: 9, title: "Laboratorium Komputer", category: "Fasilitas" },
  { id: 10, title: "Perpustakaan", category: "Fasilitas" },
  { id: 11, title: "Masjid Sekolah", category: "Fasilitas" },
  { id: 12, title: "Acara Perpisahan", category: "Kegiatan" },
];

const Galeri = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Galeri
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Dokumentasi kegiatan dan momen berharga di MTs Al Ittihaad
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galeriItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 cursor-pointer card-hover ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`aspect-square flex items-center justify-center ${index % 5 === 0 ? 'md:aspect-auto md:h-full' : ''}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-primary-foreground/80 text-xs mb-1">{item.category}</span>
                  <h4 className="text-primary-foreground font-semibold text-sm md:text-base">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Galeri;
