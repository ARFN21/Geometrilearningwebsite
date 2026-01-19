import { BookOpen, Calculator, Brain, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border-2 border-[#C4A57B]">
              <Sparkles className="size-5 text-[#C4A57B]" />
              <span className="text-sm font-semibold text-[#2C4155]">
                Platform Belajar Geometri Kelas 6 SD
              </span>
            </div>
            <h1 className="text-6xl font-bold mb-4 text-[#2C4155]">
              GeoMate
            </h1>
            <p className="text-xl text-[#4A3428] max-w-2xl mx-auto">
              Belajar Geometri dengan Cara yang Menyenangkan! 🎓
            </p>
            <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto mt-2">
              Mari eksplorasi dunia bangun datar dan bangun ruang dengan penjelasan detail dan contoh kehidupan sehari-hari
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            <Card
              className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-[#2C4155] border-2 border-[#2C4155] shadow-xl hover:shadow-2xl"
              onClick={() => onNavigate("materi")}
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <BookOpen className="size-8 text-[#2C4155]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Materi</h3>
                <p className="text-[#F5F1E8] mb-4">
                  Pelajari rumus luas, keliling & volume dengan penjelasan lengkap
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    Detail
                  </span>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    Contoh Benda
                  </span>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    7 Bangun
                  </span>
                </div>
              </div>
            </Card>

            <Card
              className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-[#8B9DB5] border-2 border-[#8B9DB5] shadow-xl hover:shadow-2xl"
              onClick={() => onNavigate("kuis")}
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Brain className="size-8 text-[#8B9DB5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Kuis</h3>
                <p className="text-[#F5F1E8] mb-4">
                  Uji pemahamanmu dengan soal-soal yang menarik!
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    Soal Random
                  </span>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    Auto Skor
                  </span>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    Seru!
                  </span>
                </div>
              </div>
            </Card>

            <Card
              className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-[#C4A57B] border-2 border-[#C4A57B] shadow-xl hover:shadow-2xl"
              onClick={() => onNavigate("kalkulator")}
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Calculator className="size-8 text-[#C4A57B]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Kalkulator</h3>
                <p className="text-[#F5F1E8] mb-4">
                  Hitung luas & keliling dengan mudah dan cepat
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    Otomatis
                  </span>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    Akurat
                  </span>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    Praktis
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Fun Facts Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#2C4155]">
                <div className="text-4xl font-bold text-[#2C4155] mb-2">7+</div>
                <div className="text-sm text-[#4A3428]">Bangun Geometri</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#8B9DB5]">
                <div className="text-4xl font-bold text-[#8B9DB5] mb-2">∞</div>
                <div className="text-sm text-[#4A3428]">Soal Kuis Random</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#C4A57B]">
                <div className="text-4xl font-bold text-[#C4A57B] mb-2">100%</div>
                <div className="text-sm text-[#4A3428]">Gratis & Interaktif</div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2C4155] text-center mb-8">
              Kenapa Belajar di GeoMate?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-[#C4A57B] shadow-lg">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-bold text-[#2C4155] mb-2">Penjelasan Detail</h3>
                <p className="text-[#4A3428] text-sm">
                  Setiap materi dijelaskan secara lengkap dengan rumus, karakteristik, dan contoh soal yang mudah dipahami
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-[#C4A57B] shadow-lg">
                <div className="text-2xl mb-2">🏠</div>
                <h3 className="font-bold text-[#2C4155] mb-2">Contoh Nyata</h3>
                <p className="text-[#4A3428] text-sm">
                  Belajar dengan contoh benda sehari-hari yang ada di sekitarmu, jadi lebih mudah diingat!
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-[#C4A57B] shadow-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-[#2C4155] mb-2">Latihan Soal</h3>
                <p className="text-[#4A3428] text-sm">
                  Kuis dengan soal yang selalu berbeda membantu mengasah kemampuan dan pemahamanmu
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-[#C4A57B] shadow-lg">
                <div className="text-2xl mb-2">🧮</div>
                <h3 className="font-bold text-[#2C4155] mb-2">Kalkulator Pintar</h3>
                <p className="text-[#4A3428] text-sm">
                  Hitung otomatis untuk mengecek jawabanmu atau membantu menyelesaikan PR dengan cepat
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto border-2 border-[#C4A57B]">
              <h2 className="text-3xl font-bold text-[#2C4155] mb-4">
                Siap Belajar Geometri? 🚀
              </h2>
              <p className="text-[#4A3428] mb-6">
                Pilih menu di atas dan mulai petualangan belajarmu bersama GeoMate!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  onClick={() => onNavigate("materi")}
                  className="bg-[#2C4155] hover:bg-[#8B9DB5] text-white px-8 py-6 text-lg"
                >
                  Mulai Belajar
                </Button>
                <Button
                  onClick={() => onNavigate("kuis")}
                  variant="outline"
                  className="border-2 border-[#2C4155] text-[#2C4155] px-8 py-6 text-lg hover:bg-[#2C4155] hover:text-white"
                >
                  Coba Kuis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
