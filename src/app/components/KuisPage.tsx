import { useState, useEffect } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Trophy, RefreshCw, CheckCircle, XCircle, Star } from "lucide-react";

interface Soal {
  pertanyaan: string;
  jawaban: number;
  bentuk: string;
  tipe: string;
}

const generateSoal = (): Soal => {
  const bentukOptions = [
    { nama: "Persegi", tipe: ["luas", "keliling"] },
    { nama: "Persegi Panjang", tipe: ["luas", "keliling"] },
    { nama: "Segitiga", tipe: ["luas"] },
    { nama: "Lingkaran", tipe: ["luas", "keliling"] },
    { nama: "Kubus", tipe: ["volume", "luas permukaan"] },
    { nama: "Balok", tipe: ["volume", "luas permukaan"] },
    { nama: "Tabung", tipe: ["volume", "luas permukaan"] }
  ];

  const randomBentuk = bentukOptions[Math.floor(Math.random() * bentukOptions.length)];
  const randomTipe = randomBentuk.tipe[Math.floor(Math.random() * randomBentuk.tipe.length)];

  let pertanyaan = "";
  let jawaban = 0;

  switch (randomBentuk.nama) {
    case "Persegi": {
      const sisi = Math.floor(Math.random() * 15) + 5;
      if (randomTipe === "luas") {
        pertanyaan = `Sebuah persegi memiliki sisi ${sisi} cm. Berapa luas persegi tersebut? (cm²)`;
        jawaban = sisi * sisi;
      } else {
        pertanyaan = `Sebuah persegi memiliki sisi ${sisi} cm. Berapa keliling persegi tersebut? (cm)`;
        jawaban = 4 * sisi;
      }
      break;
    }
    case "Persegi Panjang": {
      const panjang = Math.floor(Math.random() * 15) + 8;
      const lebar = Math.floor(Math.random() * 10) + 4;
      if (randomTipe === "luas") {
        pertanyaan = `Sebuah persegi panjang memiliki panjang ${panjang} cm dan lebar ${lebar} cm. Berapa luasnya? (cm²)`;
        jawaban = panjang * lebar;
      } else {
        pertanyaan = `Sebuah persegi panjang memiliki panjang ${panjang} cm dan lebar ${lebar} cm. Berapa kelilingnya? (cm)`;
        jawaban = 2 * (panjang + lebar);
      }
      break;
    }
    case "Segitiga": {
      const alas = Math.floor(Math.random() * 15) + 6;
      const tinggi = Math.floor(Math.random() * 12) + 5;
      pertanyaan = `Sebuah segitiga memiliki alas ${alas} cm dan tinggi ${tinggi} cm. Berapa luasnya? (cm²)`;
      jawaban = (alas * tinggi) / 2;
      break;
    }
    case "Lingkaran": {
      const jariJari = Math.floor(Math.random() * 10) + 5;
      if (randomTipe === "luas") {
        pertanyaan = `Sebuah lingkaran memiliki jari-jari ${jariJari} cm. Berapa luasnya? (gunakan π = 3.14, cm²)`;
        jawaban = Math.round(3.14 * jariJari * jariJari * 100) / 100;
      } else {
        pertanyaan = `Sebuah lingkaran memiliki jari-jari ${jariJari} cm. Berapa kelilingnya? (gunakan π = 3.14, cm)`;
        jawaban = Math.round(2 * 3.14 * jariJari * 100) / 100;
      }
      break;
    }
    case "Kubus": {
      const rusuk = Math.floor(Math.random() * 12) + 4;
      if (randomTipe === "volume") {
        pertanyaan = `Sebuah kubus memiliki panjang rusuk ${rusuk} cm. Berapa volumenya? (cm³)`;
        jawaban = rusuk * rusuk * rusuk;
      } else {
        pertanyaan = `Sebuah kubus memiliki panjang rusuk ${rusuk} cm. Berapa luas permukaannya? (cm²)`;
        jawaban = 6 * rusuk * rusuk;
      }
      break;
    }
    case "Balok": {
      const panjang = Math.floor(Math.random() * 12) + 6;
      const lebar = Math.floor(Math.random() * 8) + 4;
      const tinggi = Math.floor(Math.random() * 10) + 3;
      if (randomTipe === "volume") {
        pertanyaan = `Sebuah balok memiliki panjang ${panjang} cm, lebar ${lebar} cm, dan tinggi ${tinggi} cm. Berapa volumenya? (cm³)`;
        jawaban = panjang * lebar * tinggi;
      } else {
        pertanyaan = `Sebuah balok memiliki panjang ${panjang} cm, lebar ${lebar} cm, dan tinggi ${tinggi} cm. Berapa luas permukaannya? (cm²)`;
        jawaban = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
      }
      break;
    }
    case "Tabung": {
      const jariJari = Math.floor(Math.random() * 8) + 4;
      const tinggi = Math.floor(Math.random() * 12) + 6;
      if (randomTipe === "volume") {
        pertanyaan = `Sebuah tabung memiliki jari-jari ${jariJari} cm dan tinggi ${tinggi} cm. Berapa volumenya? (gunakan π = 3.14, cm³)`;
        jawaban = Math.round(3.14 * jariJari * jariJari * tinggi * 100) / 100;
      } else {
        pertanyaan = `Sebuah tabung memiliki jari-jari ${jariJari} cm dan tinggi ${tinggi} cm. Berapa luas permukaannya? (gunakan π = 3.14, cm²)`;
        jawaban = Math.round(2 * 3.14 * jariJari * (jariJari + tinggi) * 100) / 100;
      }
      break;
    }
  }

  return {
    pertanyaan,
    jawaban,
    bentuk: randomBentuk.nama,
    tipe: randomTipe
  };
};

export function KuisPage() {
  const [soal, setSoal] = useState<Soal>(generateSoal());
  const [jawaban, setJawaban] = useState("");
  const [hasil, setHasil] = useState<"benar" | "salah" | null>(null);
  const [skor, setSkor] = useState(0);
  const [totalSoal, setTotalSoal] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = () => {
    const userAnswer = parseFloat(jawaban);
    const correctAnswer = soal.jawaban;
    
    // Toleransi untuk pembulatan (0.1 untuk desimal)
    const isCorrect = Math.abs(userAnswer - correctAnswer) < 0.1;
    
    setHasil(isCorrect ? "benar" : "salah");
    setTotalSoal(totalSoal + 1);
    if (isCorrect) {
      setSkor(skor + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSoal(generateSoal());
    setJawaban("");
    setHasil(null);
    setShowExplanation(false);
  };

  const handleReset = () => {
    setSkor(0);
    setTotalSoal(0);
    setSoal(generateSoal());
    setJawaban("");
    setHasil(null);
    setShowExplanation(false);
  };

  const percentage = totalSoal > 0 ? Math.round((skor / totalSoal) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#F5F1E8] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2C4155] mb-2">
            Kuis Geometri
          </h1>
          <p className="text-[#6B5D52]">Uji pemahamanmu tentang geometri!</p>
        </div>

        {/* Skor Board */}
        <Card className="bg-gradient-to-r from-[#2C4155] to-[#8B9DB5] text-white p-6 mb-6 shadow-xl border-2 border-[#2C4155]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Trophy className="size-12" />
              <div>
                <div className="text-sm opacity-90">Skor Kamu</div>
                <div className="text-3xl font-bold">
                  {skor} / {totalSoal}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Persentase</div>
              <div className="text-3xl font-bold">{percentage}%</div>
            </div>
            <Button
              onClick={handleReset}
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-purple-50"
            >
              <RefreshCw className="size-4 mr-2" />
              Reset
            </Button>
          </div>
        </Card>

        {/* Soal Card */}
        <Card className="bg-white p-8 shadow-2xl border-2 border-purple-200">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Star className="size-4" />
              <span className="font-semibold">Soal #{totalSoal + 1}</span>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <p className="text-xl text-gray-800 leading-relaxed">{soal.pertanyaan}</p>
            </div>
          </div>

          {!hasil && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jawabanmu:
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={jawaban}
                  onChange={(e) => setJawaban(e.target.value)}
                  placeholder="Masukkan jawaban..."
                  className="text-lg p-6 border-2 border-purple-200 focus:border-purple-500"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && jawaban) {
                      handleSubmit();
                    }
                  }}
                />
              </div>
              <Button
                onClick={handleSubmit}
                disabled={!jawaban}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg py-6 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50"
              >
                Cek Jawaban
              </Button>
            </div>
          )}

          {hasil && (
            <div className="space-y-4">
              <div
                className={`p-6 rounded-xl border-2 ${
                  hasil === "benar"
                    ? "bg-green-50 border-green-300"
                    : "bg-red-50 border-red-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {hasil === "benar" ? (
                    <CheckCircle className="size-8 text-green-600" />
                  ) : (
                    <XCircle className="size-8 text-red-600" />
                  )}
                  <h3
                    className={`text-2xl font-bold ${
                      hasil === "benar" ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {hasil === "benar" ? "Benar! 🎉" : "Belum Tepat 😊"}
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Jawabanmu:</span> {jawaban}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Jawaban yang benar:</span>{" "}
                    {soal.jawaban}
                  </p>
                </div>
              </div>

              {showExplanation && hasil === "salah" && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">💡 Tips:</h4>
                  <p className="text-gray-700">
                    Coba periksa kembali rumus untuk {soal.bentuk} - {soal.tipe}. 
                    Pastikan kamu menggunakan rumus yang tepat dan perhitungannya benar!
                  </p>
                </div>
              )}

              <Button
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg py-6 hover:from-blue-600 hover:to-purple-600"
              >
                Soal Berikutnya →
              </Button>
            </div>
          )}
        </Card>

        {/* Motivasi */}
        {totalSoal > 0 && (
          <Card className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 p-6">
            <div className="text-center">
              <p className="text-lg text-gray-700">
                {percentage >= 80 && "🌟 Luar biasa! Kamu hebat sekali!"}
                {percentage >= 60 && percentage < 80 && "👍 Bagus! Terus berlatih!"}
                {percentage >= 40 && percentage < 60 && "💪 Ayo semangat! Kamu bisa lebih baik!"}
                {percentage < 40 && "📚 Jangan menyerah! Coba pelajari materinya lagi ya!"}
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}