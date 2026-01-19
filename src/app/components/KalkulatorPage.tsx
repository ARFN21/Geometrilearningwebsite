import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Calculator, Square, RectangleHorizontal, Triangle, Circle, Box, Package, Cylinder } from "lucide-react";

export function KalkulatorPage() {
  // Bangun Datar States
  const [persegiSisi, setPersegiSisi] = useState("");
  const [ppPanjang, setPpPanjang] = useState("");
  const [ppLebar, setPpLebar] = useState("");
  const [segitigaAlas, setSegitigaAlas] = useState("");
  const [segitigaTinggi, setSegitigaTinggi] = useState("");
  const [lingkaranR, setLingkaranR] = useState("");

  // Bangun Ruang States
  const [kubusRusuk, setKubusRusuk] = useState("");
  const [balokP, setBalokP] = useState("");
  const [balokL, setBalokL] = useState("");
  const [balokT, setBalokT] = useState("");
  const [tabungR, setTabungR] = useState("");
  const [tabungT, setTabungT] = useState("");

  const hitungPersegi = () => {
    const s = parseFloat(persegiSisi);
    if (!s) return { luas: 0, keliling: 0 };
    return {
      luas: s * s,
      keliling: 4 * s
    };
  };

  const hitungPersegiPanjang = () => {
    const p = parseFloat(ppPanjang);
    const l = parseFloat(ppLebar);
    if (!p || !l) return { luas: 0, keliling: 0 };
    return {
      luas: p * l,
      keliling: 2 * (p + l)
    };
  };

  const hitungSegitiga = () => {
    const a = parseFloat(segitigaAlas);
    const t = parseFloat(segitigaTinggi);
    if (!a || !t) return { luas: 0 };
    return {
      luas: (a * t) / 2
    };
  };

  const hitungLingkaran = () => {
    const r = parseFloat(lingkaranR);
    if (!r) return { luas: 0, keliling: 0 };
    return {
      luas: Math.round(3.14159 * r * r * 100) / 100,
      keliling: Math.round(2 * 3.14159 * r * 100) / 100
    };
  };

  const hitungKubus = () => {
    const s = parseFloat(kubusRusuk);
    if (!s) return { volume: 0, luasPermukaan: 0 };
    return {
      volume: s * s * s,
      luasPermukaan: 6 * s * s
    };
  };

  const hitungBalok = () => {
    const p = parseFloat(balokP);
    const l = parseFloat(balokL);
    const t = parseFloat(balokT);
    if (!p || !l || !t) return { volume: 0, luasPermukaan: 0 };
    return {
      volume: p * l * t,
      luasPermukaan: 2 * (p * l + p * t + l * t)
    };
  };

  const hitungTabung = () => {
    const r = parseFloat(tabungR);
    const t = parseFloat(tabungT);
    if (!r || !t) return { volume: 0, luasPermukaan: 0 };
    return {
      volume: Math.round(3.14159 * r * r * t * 100) / 100,
      luasPermukaan: Math.round(2 * 3.14159 * r * (r + t) * 100) / 100
    };
  };

  const hasilPersegi = hitungPersegi();
  const hasilPP = hitungPersegiPanjang();
  const hasilSegitiga = hitungSegitiga();
  const hasilLingkaran = hitungLingkaran();
  const hasilKubus = hitungKubus();
  const hasilBalok = hitungBalok();
  const hasilTabung = hitungTabung();

  return (
    <div className="min-h-screen bg-[#F5F1E8] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calculator className="size-12 text-[#C4A57B]" />
            <h1 className="text-4xl font-bold text-[#2C4155]">
              Kalkulator Geometri
            </h1>
          </div>
          <p className="text-[#6B5D52]">
            Hitung luas, keliling, dan volume dengan mudah!
          </p>
        </div>

        <Tabs defaultValue="datar" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-white border-2 border-[#C4A57B]">
            <TabsTrigger value="datar" className="data-[state=active]:bg-[#2C4155] data-[state=active]:text-white">
              Bangun Datar
            </TabsTrigger>
            <TabsTrigger value="ruang" className="data-[state=active]:bg-[#2C4155] data-[state=active]:text-white">
              Bangun Ruang
            </TabsTrigger>
          </TabsList>

          <TabsContent value="datar">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Persegi */}
              <Card className="bg-white p-6 shadow-xl border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Square className="size-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-700">Persegi</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="persegi-sisi">Panjang Sisi (cm)</Label>
                    <Input
                      id="persegi-sisi"
                      type="number"
                      value={persegiSisi}
                      onChange={(e) => setPersegiSisi(e.target.value)}
                      placeholder="Masukkan panjang sisi"
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-blue-800">Luas:</span>
                      <span className="text-blue-600">{hasilPersegi.luas.toFixed(2)} cm²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-blue-800">Keliling:</span>
                      <span className="text-blue-600">{hasilPersegi.keliling.toFixed(2)} cm</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                    Rumus: Luas = s × s, Keliling = 4 × s
                  </div>
                </div>
              </Card>

              {/* Persegi Panjang */}
              <Card className="bg-white p-6 shadow-xl border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <RectangleHorizontal className="size-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-purple-700">Persegi Panjang</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pp-panjang">Panjang (cm)</Label>
                    <Input
                      id="pp-panjang"
                      type="number"
                      value={ppPanjang}
                      onChange={(e) => setPpPanjang(e.target.value)}
                      placeholder="Masukkan panjang"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pp-lebar">Lebar (cm)</Label>
                    <Input
                      id="pp-lebar"
                      type="number"
                      value={ppLebar}
                      onChange={(e) => setPpLebar(e.target.value)}
                      placeholder="Masukkan lebar"
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-800">Luas:</span>
                      <span className="text-purple-600">{hasilPP.luas.toFixed(2)} cm²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-800">Keliling:</span>
                      <span className="text-purple-600">{hasilPP.keliling.toFixed(2)} cm</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                    Rumus: Luas = p × l, Keliling = 2 × (p + l)
                  </div>
                </div>
              </Card>

              {/* Segitiga */}
              <Card className="bg-white p-6 shadow-xl border-2 border-pink-200">
                <div className="flex items-center gap-3 mb-4">
                  <Triangle className="size-8 text-pink-600" />
                  <h3 className="text-2xl font-bold text-pink-700">Segitiga</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="segitiga-alas">Alas (cm)</Label>
                    <Input
                      id="segitiga-alas"
                      type="number"
                      value={segitigaAlas}
                      onChange={(e) => setSegitigaAlas(e.target.value)}
                      placeholder="Masukkan alas"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="segitiga-tinggi">Tinggi (cm)</Label>
                    <Input
                      id="segitiga-tinggi"
                      type="number"
                      value={segitigaTinggi}
                      onChange={(e) => setSegitigaTinggi(e.target.value)}
                      placeholder="Masukkan tinggi"
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-pink-800">Luas:</span>
                      <span className="text-pink-600">{hasilSegitiga.luas.toFixed(2)} cm²</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                    Rumus: Luas = ½ × a × t
                  </div>
                </div>
              </Card>

              {/* Lingkaran */}
              <Card className="bg-white p-6 shadow-xl border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Circle className="size-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-700">Lingkaran</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lingkaran-r">Jari-jari (cm)</Label>
                    <Input
                      id="lingkaran-r"
                      type="number"
                      value={lingkaranR}
                      onChange={(e) => setLingkaranR(e.target.value)}
                      placeholder="Masukkan jari-jari"
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-green-800">Luas:</span>
                      <span className="text-green-600">{hasilLingkaran.luas.toFixed(2)} cm²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-green-800">Keliling:</span>
                      <span className="text-green-600">{hasilLingkaran.keliling.toFixed(2)} cm</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                    Rumus: Luas = π × r², Keliling = 2 × π × r
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ruang">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Kubus */}
              <Card className="bg-white p-6 shadow-xl border-2 border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <Box className="size-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-orange-700">Kubus</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="kubus-rusuk">Panjang Rusuk (cm)</Label>
                    <Input
                      id="kubus-rusuk"
                      type="number"
                      value={kubusRusuk}
                      onChange={(e) => setKubusRusuk(e.target.value)}
                      placeholder="Masukkan panjang rusuk"
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-orange-800">Volume:</span>
                      <span className="text-orange-600">{hasilKubus.volume.toFixed(2)} cm³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-orange-800">Luas Permukaan:</span>
                      <span className="text-orange-600">{hasilKubus.luasPermukaan.toFixed(2)} cm²</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                    Rumus: Volume = s³, Luas Permukaan = 6 × s²
                  </div>
                </div>
              </Card>

              {/* Balok */}
              <Card className="bg-white p-6 shadow-xl border-2 border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="size-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-red-700">Balok</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="balok-p">Panjang (cm)</Label>
                    <Input
                      id="balok-p"
                      type="number"
                      value={balokP}
                      onChange={(e) => setBalokP(e.target.value)}
                      placeholder="Masukkan panjang"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="balok-l">Lebar (cm)</Label>
                    <Input
                      id="balok-l"
                      type="number"
                      value={balokL}
                      onChange={(e) => setBalokL(e.target.value)}
                      placeholder="Masukkan lebar"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="balok-t">Tinggi (cm)</Label>
                    <Input
                      id="balok-t"
                      type="number"
                      value={balokT}
                      onChange={(e) => setBalokT(e.target.value)}
                      placeholder="Masukkan tinggi"
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-red-800">Volume:</span>
                      <span className="text-red-600">{hasilBalok.volume.toFixed(2)} cm³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-red-800">Luas Permukaan:</span>
                      <span className="text-red-600">{hasilBalok.luasPermukaan.toFixed(2)} cm²</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                    Rumus: Volume = p × l × t, LP = 2(pl + pt + lt)
                  </div>
                </div>
              </Card>

              {/* Tabung */}
              <Card className="bg-white p-6 shadow-xl border-2 border-cyan-200">
                <div className="flex items-center gap-3 mb-4">
                  <Cylinder className="size-8 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-cyan-700">Tabung</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tabung-r">Jari-jari (cm)</Label>
                    <Input
                      id="tabung-r"
                      type="number"
                      value={tabungR}
                      onChange={(e) => setTabungR(e.target.value)}
                      placeholder="Masukkan jari-jari"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tabung-t">Tinggi (cm)</Label>
                    <Input
                      id="tabung-t"
                      type="number"
                      value={tabungT}
                      onChange={(e) => setTabungT(e.target.value)}
                      placeholder="Masukkan tinggi"
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-cyan-800">Volume:</span>
                      <span className="text-cyan-600">{hasilTabung.volume.toFixed(2)} cm³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-cyan-800">Luas Permukaan:</span>
                      <span className="text-cyan-600">{hasilTabung.luasPermukaan.toFixed(2)} cm²</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 italic">
                    Rumus: Volume = π × r² × t, LP = 2 × π × r × (r + t)
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Info Box */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6">
          <div className="text-center">
            <h3 className="font-bold text-lg text-gray-800 mb-2">💡 Tips Penggunaan</h3>
            <p className="text-gray-600">
              Masukkan nilai pada input yang tersedia, dan hasil perhitungan akan muncul secara otomatis!
              Gunakan angka desimal jika diperlukan (contoh: 7.5)
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}