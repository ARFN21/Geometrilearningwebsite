import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Square, RectangleHorizontal, Triangle, Circle, Box, Package, Cylinder, Lightbulb } from "lucide-react";

const materiData = {
  bangunDatar: [
    {
      nama: "Persegi",
      icon: Square,
      color: "#2C4155",
      deskripsi: "Persegi adalah bangun datar segi empat yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku (90°). Semua sisi persegi memiliki panjang yang sama, dan keempat sudutnya sama besar.",
      karakteristik: [
        "Memiliki 4 sisi yang sama panjang",
        "Memiliki 4 sudut siku-siku (90°)",
        "Memiliki 4 sumbu simetri",
        "Memiliki 2 diagonal yang sama panjang dan berpotongan tegak lurus"
      ],
      rumus: [
        { nama: "Luas", formula: "L = s × s = s²", keterangan: "s = panjang sisi" },
        { nama: "Keliling", formula: "K = 4 × s", keterangan: "s = panjang sisi" }
      ],
      contohBenda: [
        "Ubin lantai persegi",
        "Papan catur",
        "Post-it notes",
        "Keramik dinding",
        "Bingkai foto persegi",
        "Jam dinding persegi"
      ],
      contohSoal: {
        soal: "Sebuah taman berbentuk persegi memiliki panjang sisi 15 meter. Pak Budi ingin memasang pagar di sekeliling taman dan menanami rumput di seluruh taman tersebut.",
        pertanyaan: ["a) Berapa keliling taman (panjang pagar yang dibutuhkan)?", "b) Berapa luas taman yang akan ditanami rumput?"],
        penyelesaian: [
          {
            langkah: "Diketahui",
            isi: "Panjang sisi (s) = 15 meter"
          },
          {
            langkah: "Ditanya",
            isi: "a) Keliling taman\nb) Luas taman"
          },
          {
            langkah: "Jawab",
            isi: "a) Keliling = 4 × s\n   K = 4 × 15 meter\n   K = 60 meter\n\nb) Luas = s × s\n   L = 15 × 15 meter²\n   L = 225 meter²"
          },
          {
            langkah: "Kesimpulan",
            isi: "Panjang pagar yang dibutuhkan adalah 60 meter, dan luas taman yang akan ditanami rumput adalah 225 meter²"
          }
        ]
      },
      tips: "Ingat! Pada persegi, semua sisinya sama panjang. Jadi jika kamu tahu satu sisi, kamu sudah tahu semua sisinya!"
    },
    {
      nama: "Persegi Panjang",
      icon: RectangleHorizontal,
      color: "#8B9DB5",
      deskripsi: "Persegi panjang adalah bangun datar segi empat yang memiliki 2 pasang sisi sejajar dan sama panjang, dengan 4 sudut siku-siku (90°). Sisi yang berhadapan sama panjang.",
      karakteristik: [
        "Memiliki 2 pasang sisi yang sejajar dan sama panjang",
        "Memiliki 4 sudut siku-siku (90°)",
        "Memiliki 2 sumbu simetri",
        "Memiliki 2 diagonal yang sama panjang"
      ],
      rumus: [
        { nama: "Luas", formula: "L = p × l", keterangan: "p = panjang, l = lebar" },
        { nama: "Keliling", formula: "K = 2 × (p + l) atau K = 2p + 2l", keterangan: "p = panjang, l = lebar" }
      ],
      contohBenda: [
        "Lapangan basket/voli",
        "Pintu rumah",
        "Meja belajar",
        "Buku tulis",
        "Layar TV/monitor",
        "Papan tulis"
      ],
      contohSoal: {
        soal: "Sebuah lapangan sepak bola mini memiliki panjang 40 meter dan lebar 25 meter. Panitia akan memasang lampu di sekeliling lapangan dengan jarak setiap lampu 5 meter.",
        pertanyaan: ["a) Berapa keliling lapangan?", "b) Berapa luas lapangan?", "c) Berapa banyak lampu yang dibutuhkan?"],
        penyelesaian: [
          {
            langkah: "Diketahui",
            isi: "Panjang (p) = 40 meter\nLebar (l) = 25 meter\nJarak antar lampu = 5 meter"
          },
          {
            langkah: "Ditanya",
            isi: "a) Keliling lapangan\nb) Luas lapangan\nc) Jumlah lampu"
          },
          {
            langkah: "Jawab",
            isi: "a) Keliling = 2 × (p + l)\n   K = 2 × (40 + 25) meter\n   K = 2 × 65 meter\n   K = 130 meter\n\nb) Luas = p × l\n   L = 40 × 25 meter²\n   L = 1.000 meter²\n\nc) Jumlah lampu = Keliling ÷ Jarak lampu\n   = 130 ÷ 5\n   = 26 lampu"
          },
          {
            langkah: "Kesimpulan",
            isi: "Keliling lapangan 130 meter, luas lapangan 1.000 meter², dan dibutuhkan 26 lampu"
          }
        ]
      },
      tips: "Jangan lupa! Panjang selalu lebih panjang dari lebar. Dalam rumus keliling, kita menjumlahkan panjang dan lebar lalu dikali 2!"
    },
    {
      nama: "Segitiga",
      icon: Triangle,
      color: "#C4A57B",
      deskripsi: "Segitiga adalah bangun datar yang memiliki 3 sisi dan 3 sudut. Jumlah ketiga sudut dalam segitiga selalu 180°. Ada berbagai jenis segitiga berdasarkan panjang sisi dan besar sudutnya.",
      karakteristik: [
        "Memiliki 3 sisi dan 3 sudut",
        "Jumlah ketiga sudut = 180°",
        "Ada segitiga sama sisi, sama kaki, dan sembarang",
        "Ada segitiga lancip, tumpul, dan siku-siku"
      ],
      rumus: [
        { nama: "Luas", formula: "L = ½ × a × t", keterangan: "a = alas, t = tinggi" },
        { nama: "Keliling", formula: "K = sisi₁ + sisi₂ + sisi₃", keterangan: "Jumlah semua sisi" }
      ],
      contohBenda: [
        "Atap rumah (sisi miring)",
        "Penggaris segitiga",
        "Rambu lalu lintas",
        "Gantungan baju (segitiga)",
        "Tenda camping",
        "Layangan"
      ],
      contohSoal: {
        soal: "Sebuah rambu lalu lintas berbentuk segitiga sama sisi memiliki alas 60 cm dan tinggi 52 cm. Setiap sisinya sama panjang yaitu 60 cm.",
        pertanyaan: ["a) Berapa luas rambu tersebut?", "b) Berapa keliling rambu tersebut?"],
        penyelesaian: [
          {
            langkah: "Diketahui",
            isi: "Alas (a) = 60 cm\nTinggi (t) = 52 cm\nSetiap sisi = 60 cm (segitiga sama sisi)"
          },
          {
            langkah: "Ditanya",
            isi: "a) Luas rambu\nb) Keliling rambu"
          },
          {
            langkah: "Jawab",
            isi: "a) Luas = ½ × a × t\n   L = ½ × 60 × 52 cm²\n   L = ½ × 3.120 cm²\n   L = 1.560 cm²\n\nb) Keliling = sisi₁ + sisi₂ + sisi₃\n   K = 60 + 60 + 60 cm\n   K = 180 cm"
          },
          {
            langkah: "Kesimpulan",
            isi: "Luas rambu adalah 1.560 cm² dan kelilingnya adalah 180 cm atau 1,8 meter"
          }
        ]
      },
      tips: "Untuk mencari luas, kita butuh alas dan tinggi. Tinggi adalah garis tegak lurus dari alas ke titik puncak!"
    },
    {
      nama: "Lingkaran",
      icon: Circle,
      color: "#8B9DB5",
      deskripsi: "Lingkaran adalah bangun datar yang semua titik pada tepinya memiliki jarak yang sama dari titik pusat. Jarak dari pusat ke tepi disebut jari-jari (r), dan garis yang melewati pusat dari satu tepi ke tepi lainnya disebut diameter (d = 2r).",
      karakteristik: [
        "Memiliki satu titik pusat",
        "Jari-jari (r) = jarak dari pusat ke tepi",
        "Diameter (d) = 2 × jari-jari",
        "Menggunakan nilai π (pi) ≈ 3,14 atau 22/7"
      ],
      rumus: [
        { nama: "Luas", formula: "L = π × r² atau L = ¼ × π × d²", keterangan: "r = jari-jari, d = diameter, π ≈ 3,14 atau 22/7" },
        { nama: "Keliling", formula: "K = 2 × π × r atau K = π × d", keterangan: "r = jari-jari, d = diameter" }
      ],
      contohBenda: [
        "Pizza",
        "Roda sepeda",
        "Jam dinding bulat",
        "Piring makan",
        "Tutup botol",
        "Kolam renang bundar",
        "Lapangan basket (tengah)"
      ],
      contohSoal: {
        soal: "Sebuah kolam ikan berbentuk lingkaran memiliki diameter 14 meter. Pak Ahmad ingin membuat pagar di sekeliling kolam dan memasang terpal di permukaan kolam.",
        pertanyaan: ["a) Berapa keliling kolam (panjang pagar)?", "b) Berapa luas permukaan kolam?"],
        penyelesaian: [
          {
            langkah: "Diketahui",
            isi: "Diameter (d) = 14 meter\nJari-jari (r) = d ÷ 2 = 14 ÷ 2 = 7 meter\nπ = 22/7"
          },
          {
            langkah: "Ditanya",
            isi: "a) Keliling kolam\nb) Luas permukaan kolam"
          },
          {
            langkah: "Jawab",
            isi: "a) Keliling = 2 × π × r\n   K = 2 × 22/7 × 7 meter\n   K = 2 × 22 meter\n   K = 44 meter\n\nb) Luas = π × r²\n   L = 22/7 × 7 × 7 meter²\n   L = 22/7 × 49 meter²\n   L = 154 meter²"
          },
          {
            langkah: "Kesimpulan",
            isi: "Panjang pagar yang dibutuhkan 44 meter dan luas terpal 154 meter²"
          }
        ]
      },
      tips: "Gunakan π = 22/7 jika jari-jari atau diameter bisa dibagi 7. Gunakan π = 3,14 untuk angka lainnya!"
    }
  ],
  bangunRuang: [
    {
      nama: "Kubus",
      icon: Box,
      color: "#C4A57B",
      deskripsi: "Kubus adalah bangun ruang tiga dimensi yang memiliki 6 sisi berbentuk persegi yang sama besar, 12 rusuk yang sama panjang, dan 8 titik sudut. Semua sisi kubus saling tegak lurus.",
      karakteristik: [
        "Memiliki 6 sisi berbentuk persegi yang sama",
        "Memiliki 12 rusuk yang sama panjang",
        "Memiliki 8 titik sudut",
        "Semua sisi saling tegak lurus"
      ],
      rumus: [
        { nama: "Volume", formula: "V = s³ = s × s × s", keterangan: "s = panjang rusuk" },
        { nama: "Luas Permukaan", formula: "LP = 6 × s²", keterangan: "s = panjang rusuk (6 sisi persegi)" }
      ],
      contohBenda: [
        "Dadu permainan",
        "Rubik's cube",
        "Kotak kado berbentuk kubus",
        "Akuarium kubus",
        "Kardus berbentuk kubus",
        "Bak sampah kubus"
      ],
      contohSoal: {
        soal: "Sebuah bak air berbentuk kubus memiliki panjang rusuk 80 cm. Bak tersebut akan dicat di bagian luar (kecuali bagian atas) dan diisi air hingga penuh.",
        pertanyaan: ["a) Berapa volume air yang dapat ditampung?", "b) Berapa luas permukaan yang akan dicat?"],
        penyelesaian: [
          {
            langkah: "Diketahui",
            isi: "Panjang rusuk (s) = 80 cm = 0,8 meter\nYang dicat = 5 sisi (tanpa tutup atas)"
          },
          {
            langkah: "Ditanya",
            isi: "a) Volume air\nb) Luas permukaan yang dicat"
          },
          {
            langkah: "Jawab",
            isi: "a) Volume = s³\n   V = 80 × 80 × 80 cm³\n   V = 512.000 cm³\n   V = 512 liter\n\nb) Luas 5 sisi = 5 × s²\n   L = 5 × 80 × 80 cm²\n   L = 5 × 6.400 cm²\n   L = 32.000 cm²\n   L = 3,2 m²"
          },
          {
            langkah: "Kesimpulan",
            isi: "Bak dapat menampung 512 liter air dan luas yang dicat adalah 32.000 cm² atau 3,2 m²"
          }
        ]
      },
      tips: "1 liter = 1.000 cm³. Luas permukaan kubus = 6 sisi karena kubus punya 6 sisi persegi yang sama!"
    },
    {
      nama: "Balok",
      icon: Package,
      color: "#2C4155",
      deskripsi: "Balok adalah bangun ruang tiga dimensi yang memiliki 6 sisi berbentuk persegi panjang, 12 rusuk, dan 8 titik sudut. Balok memiliki 3 pasang sisi yang berhadapan dan sama besar.",
      karakteristik: [
        "Memiliki 6 sisi berbentuk persegi panjang",
        "Memiliki 12 rusuk (4 panjang, 4 lebar, 4 tinggi)",
        "Memiliki 8 titik sudut",
        "Memiliki 3 pasang sisi yang sama besar"
      ],
      rumus: [
        { nama: "Volume", formula: "V = p × l × t", keterangan: "p = panjang, l = lebar, t = tinggi" },
        { nama: "Luas Permukaan", formula: "LP = 2(pl + pt + lt)", keterangan: "p = panjang, l = lebar, t = tinggi" }
      ],
      contohBenda: [
        "Lemari es/kulkas",
        "Kotak pensil",
        "Kardus sepatu",
        "Buku tebal",
        "Lemari pakaian",
        "Kontainer/peti kemas"
      ],
      contohSoal: {
        soal: "Sebuah akuarium berbentuk balok memiliki panjang 100 cm, lebar 40 cm, dan tinggi 50 cm. Akuarium akan diisi air hingga ¾ tingginya.",
        pertanyaan: ["a) Berapa volume maksimal akuarium?", "b) Berapa liter air yang dimasukkan (¾ tinggi)?", "c) Berapa luas kaca yang diperlukan (tanpa tutup)?"],
        penyelesaian: [
          {
            langkah: "Diketahui",
            isi: "Panjang (p) = 100 cm\nLebar (l) = 40 cm\nTinggi (t) = 50 cm\nAir diisi = ¾ × tinggi"
          },
          {
            langkah: "Ditanya",
            isi: "a) Volume maksimal\nb) Volume air (¾ tinggi)\nc) Luas kaca (5 sisi)"
          },
          {
            langkah: "Jawab",
            isi: "a) Volume = p × l × t\n   V = 100 × 40 × 50 cm³\n   V = 200.000 cm³ = 200 liter\n\nb) Volume air = ¾ × 200.000 cm³\n   = 150.000 cm³ = 150 liter\n\nc) Luas 5 sisi = 2(pl + pt + lt) - pl\n   = 2(100×40 + 100×50 + 40×50) - 100×40\n   = 2(4.000 + 5.000 + 2.000) - 4.000\n   = 22.000 - 4.000\n   = 18.000 cm²"
          },
          {
            langkah: "Kesimpulan",
            isi: "Volume maksimal 200 liter, air yang diisi 150 liter, dan luas kaca 18.000 cm²"
          }
        ]
      },
      tips: "Rumus luas permukaan balok: ingat 3 pasangan sisi! Depan-belakang (pl), atas-bawah (pl), kiri-kanan (lt)"
    },
    {
      nama: "Tabung",
      icon: Cylinder,
      color: "#8B9DB5",
      deskripsi: "Tabung adalah bangun ruang tiga dimensi yang memiliki alas dan tutup berbentuk lingkaran yang sama besar, serta selimut berbentuk lengkungan. Jarak antara alas dan tutup disebut tinggi tabung.",
      karakteristik: [
        "Memiliki 2 sisi lingkaran (alas dan tutup) yang sama",
        "Memiliki 1 sisi lengkung (selimut)",
        "Tidak memiliki titik sudut",
        "Memiliki 2 rusuk lengkung"
      ],
      rumus: [
        { nama: "Volume", formula: "V = π × r² × t", keterangan: "r = jari-jari alas, t = tinggi, π ≈ 3,14 atau 22/7" },
        { nama: "Luas Permukaan", formula: "LP = 2 × π × r × (r + t)", keterangan: "atau LP = 2πr² + 2πrt" }
      ],
      contohBenda: [
        "Kaleng susu",
        "Drum air",
        "Gelas/mug",
        "Tabung gas LPG",
        "Pipa paralon",
        "Toples kue kaleng"
      ],
      contohSoal: {
        soal: "Sebuah drum minyak berbentuk tabung memiliki diameter 70 cm dan tinggi 100 cm. Drum tersebut akan dicat bagian luarnya dan diisi minyak hingga penuh.",
        pertanyaan: ["a) Berapa liter minyak yang dapat ditampung?", "b) Berapa luas permukaan yang akan dicat?"],
        penyelesaian: [
          {
            langkah: "Diketahui",
            isi: "Diameter (d) = 70 cm\nJari-jari (r) = d ÷ 2 = 70 ÷ 2 = 35 cm\nTinggi (t) = 100 cm\nπ = 22/7"
          },
          {
            langkah: "Ditanya",
            isi: "a) Volume minyak (dalam liter)\nb) Luas permukaan drum"
          },
          {
            langkah: "Jawab",
            isi: "a) Volume = π × r² × t\n   V = 22/7 × 35 × 35 × 100 cm³\n   V = 22/7 × 122.500 cm³\n   V = 385.000 cm³\n   V = 385 liter\n\nb) Luas Permukaan = 2 × π × r × (r + t)\n   LP = 2 × 22/7 × 35 × (35 + 100)\n   LP = 2 × 22/7 × 35 × 135\n   LP = 2 × 110 × 135\n   LP = 29.700 cm²\n   LP = 2,97 m²"
          },
          {
            langkah: "Kesimpulan",
            isi: "Drum dapat menampung 385 liter minyak dan luas permukaan yang dicat adalah 29.700 cm² atau 2,97 m²"
          }
        ]
      },
      tips: "Luas permukaan tabung = 2 lingkaran (alas + tutup) + selimut. Ingat: 1.000 cm³ = 1 liter!"
    }
  ]
};

export function MateriPage() {
  const [selectedMateri, setSelectedMateri] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#F5F1E8] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2C4155] mb-2">
            Materi Geometri
          </h1>
          <p className="text-[#6B5D52]">
            Pelajari rumus dan cara menghitung bangun datar & bangun ruang secara detail
          </p>
        </div>

        <Tabs defaultValue="datar" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-white border-2 border-[#C4A57B]">
            <TabsTrigger 
              value="datar" 
              className="data-[state=active]:bg-[#2C4155] data-[state=active]:text-white"
            >
              Bangun Datar
            </TabsTrigger>
            <TabsTrigger 
              value="ruang" 
              className="data-[state=active]:bg-[#2C4155] data-[state=active]:text-white"
            >
              Bangun Ruang
            </TabsTrigger>
          </TabsList>

          <TabsContent value="datar">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {materiData.bangunDatar.map((materi) => {
                const Icon = materi.icon;
                return (
                  <Card
                    key={materi.nama}
                    className="bg-white border-2 border-[#C4A57B] p-6 cursor-pointer hover:scale-105 hover:border-[#2C4155] transition-all shadow-lg hover:shadow-xl"
                    onClick={() => setSelectedMateri(materi)}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3" style={{ color: materi.color }}>
                        <Icon className="size-16" />
                      </div>
                      <h3 className="font-bold text-lg text-[#4A3428]">
                        {materi.nama}
                      </h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="ruang">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {materiData.bangunRuang.map((materi) => {
                const Icon = materi.icon;
                return (
                  <Card
                    key={materi.nama}
                    className="bg-white border-2 border-[#C4A57B] p-6 cursor-pointer hover:scale-105 hover:border-[#2C4155] transition-all shadow-lg hover:shadow-xl"
                    onClick={() => setSelectedMateri(materi)}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3" style={{ color: materi.color }}>
                        <Icon className="size-16" />
                      </div>
                      <h3 className="font-bold text-lg text-[#4A3428]">
                        {materi.nama}
                      </h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Detail Materi */}
        {selectedMateri && (
          <Card className="bg-white shadow-2xl border-2 border-[#C4A57B] p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16" style={{ color: selectedMateri.color }}>
                {(() => {
                  const Icon = selectedMateri.icon;
                  return <Icon className="size-16" />;
                })()}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2C4155] mb-2">
                  {selectedMateri.nama}
                </h2>
                <p className="text-[#4A3428] leading-relaxed">{selectedMateri.deskripsi}</p>
              </div>
            </div>

            {/* Karakteristik */}
            <div className="mb-6 bg-[#F5F1E8] rounded-xl p-6 border-2 border-[#8B9DB5]">
              <h3 className="font-bold text-xl text-[#2C4155] mb-4">📋 Karakteristik</h3>
              <ul className="space-y-2">
                {selectedMateri.karakteristik.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-[#4A3428]">
                    <span className="text-[#2C4155] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rumus */}
            <div className="mb-6 bg-gradient-to-br from-[#2C4155] to-[#8B9DB5] rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">📐 Rumus</h3>
              <div className="space-y-4">
                {selectedMateri.rumus.map((rumus: any, idx: number) => (
                  <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="font-semibold mb-2">{rumus.nama}:</div>
                    <div className="text-2xl font-bold mb-2 font-mono bg-white/20 p-3 rounded">
                      {rumus.formula}
                    </div>
                    <div className="text-sm opacity-90 italic">
                      Keterangan: {rumus.keterangan}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contoh Benda */}
            <div className="mb-6 bg-[#C4A57B]/10 rounded-xl p-6 border-2 border-[#C4A57B]">
              <h3 className="font-bold text-xl text-[#2C4155] mb-4 flex items-center gap-2">
                <Lightbulb className="size-6" />
                Contoh Benda di Sekitar Kita
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {selectedMateri.contohBenda.map((benda: string, idx: number) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-[#C4A57B] text-[#4A3428]">
                    {benda}
                  </div>
                ))}
              </div>
            </div>

            {/* Contoh Soal */}
            <div className="mb-6 bg-white rounded-xl p-6 border-2 border-[#8B9DB5]">
              <h3 className="font-bold text-xl text-[#2C4155] mb-4">📝 Contoh Soal Lengkap</h3>
              
              <div className="bg-[#F5F1E8] rounded-lg p-4 mb-4 border-l-4 border-[#2C4155]">
                <h4 className="font-semibold text-[#2C4155] mb-2">Soal:</h4>
                <p className="text-[#4A3428] mb-3">{selectedMateri.contohSoal.soal}</p>
                <div className="space-y-1">
                  {selectedMateri.contohSoal.pertanyaan.map((p: string, idx: number) => (
                    <p key={idx} className="text-[#4A3428]">{p}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {selectedMateri.contohSoal.penyelesaian.map((step: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-[#C4A57B]">
                    <h4 className="font-semibold text-[#2C4155] mb-2">{step.langkah}:</h4>
                    <p className="text-[#4A3428] whitespace-pre-line font-mono text-sm leading-relaxed">
                      {step.isi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="mb-6 bg-gradient-to-r from-[#8B9DB5] to-[#2C4155] rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-2">💡 Tips Penting!</h3>
              <p className="leading-relaxed">{selectedMateri.tips}</p>
            </div>

            <div className="text-center">
              <button
                onClick={() => setSelectedMateri(null)}
                className="bg-[#2C4155] hover:bg-[#8B9DB5] text-white px-8 py-3 rounded-lg transition-all shadow-lg"
              >
                Kembali ke Daftar Materi
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
