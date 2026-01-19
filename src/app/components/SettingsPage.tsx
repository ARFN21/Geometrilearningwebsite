import { useState, useRef, useEffect } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Switch } from "@/app/components/ui/switch";
import { Slider } from "@/app/components/ui/slider";
import { Play, Pause, Volume2, VolumeX, Music, User, Mail, Github, Linkedin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

interface SettingsPageProps {
  musicEnabled: boolean;
  setMusicEnabled: (enabled: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
}

export function SettingsPage({ musicEnabled, setMusicEnabled, volume, setVolume }: SettingsPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Simulate audio - dalam implementasi real, gunakan file audio
    audioRef.current = new Audio();
    // audioRef.current.src = "/path/to/background-music.mp3";
    audioRef.current.loop = true;
    audioRef.current.volume = volume / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (musicEnabled && isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [musicEnabled, isPlaying]);

  const togglePlay = () => {
    if (!musicEnabled) {
      setMusicEnabled(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2C4155] mb-2">
            Pengaturan
          </h1>
          <p className="text-[#6B5D52]">
            Atur musik latar dan lihat profil pengembang
          </p>
        </div>

        <Tabs defaultValue="music" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-white border-2 border-[#C4A57B]">
            <TabsTrigger value="music" className="data-[state=active]:bg-[#2C4155] data-[state=active]:text-white">
              <Music className="size-4 mr-2" />
              Musik
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-[#2C4155] data-[state=active]:text-white">
              <User className="size-4 mr-2" />
              Profil Developer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="music">
            <Card className="bg-white shadow-xl border-2 border-[#C4A57B] p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-[#8B9DB5] to-[#2C4155] rounded-full flex items-center justify-center shadow-lg">
                  <Music className="size-16 text-white" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-[#F5F1E8] rounded-lg border-2 border-[#C4A57B]">
                  <div>
                    <h3 className="font-bold text-[#2C4155]">Musik Latar</h3>
                    <p className="text-sm text-[#6B5D52]">
                      {musicEnabled ? "Musik aktif" : "Musik nonaktif"}
                    </p>
                  </div>
                  <Switch
                    checked={musicEnabled}
                    onCheckedChange={setMusicEnabled}
                    className="data-[state=checked]:bg-[#2C4155]"
                  />
                </div>

                <div className="p-4 bg-[#F5F1E8] rounded-lg border-2 border-[#C4A57B]">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Button
                      onClick={togglePlay}
                      disabled={!musicEnabled}
                      className="w-16 h-16 rounded-full bg-[#2C4155] hover:bg-[#8B9DB5] disabled:opacity-50"
                    >
                      {isPlaying ? (
                        <Pause className="size-6" />
                      ) : (
                        <Play className="size-6 ml-1" />
                      )}
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-[#4A3428]">
                        Volume
                      </label>
                      <span className="text-sm text-[#6B5D52]">{volume}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <VolumeX className="size-5 text-[#6B5D52]" />
                      <Slider
                        value={[volume]}
                        onValueChange={(value) => setVolume(value[0])}
                        max={100}
                        step={1}
                        disabled={!musicEnabled}
                        className="flex-1"
                      />
                      <Volume2 className="size-5 text-[#2C4155]" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#8B9DB5]/10 border-2 border-[#8B9DB5] rounded-lg p-4">
                  <h4 className="font-bold text-[#2C4155] mb-2">💡 Info</h4>
                  <p className="text-sm text-[#4A3428]">
                    Musik latar dapat membantu konsentrasi saat belajar. Atur volume sesuai kenyamananmu!
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="bg-white shadow-xl border-2 border-[#C4A57B] p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-[#C4A57B] to-[#8B9DB5] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <User className="size-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#2C4155] mb-2">
                  Tim Pengembang GeoMate
                </h2>
                <p className="text-[#6B5D52]">
                  Platform Pembelajaran Geometri
                </p>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="bg-[#F5F1E8] rounded-lg p-6 border-2 border-[#C4A57B]">
                  <h3 className="font-bold text-[#2C4155] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#2C4155] text-white rounded-full flex items-center justify-center text-sm">
                      1
                    </span>
                    Tentang GeoMate
                  </h3>
                  <p className="text-[#4A3428] leading-relaxed">
                    GeoMate adalah platform pembelajaran geometri yang dirancang khusus untuk siswa kelas 6 SD. 
                    Kami berkomitmen membuat pembelajaran matematika, khususnya geometri, menjadi lebih menyenangkan 
                    dan mudah dipahami melalui pendekatan interaktif dan visual.
                  </p>
                </div>

                <div className="bg-[#F5F1E8] rounded-lg p-6 border-2 border-[#C4A57B]">
                  <h3 className="font-bold text-[#2C4155] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#2C4155] text-white rounded-full flex items-center justify-center text-sm">
                      2
                    </span>
                    Visi & Misi
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-[#2C4155] mb-1">Visi:</h4>
                      <p className="text-[#4A3428]">
                        Menjadi platform pembelajaran geometri terdepan yang membuat setiap siswa mencintai matematika.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C4155] mb-1">Misi:</h4>
                      <ul className="list-disc list-inside text-[#4A3428] space-y-1">
                        <li>Menyediakan materi pembelajaran yang mudah dipahami</li>
                        <li>Membuat latihan soal yang interaktif dan menyenangkan</li>
                        <li>Membantu siswa memahami aplikasi geometri dalam kehidupan sehari-hari</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F5F1E8] rounded-lg p-6 border-2 border-[#C4A57B]">
                  <h3 className="font-bold text-[#2C4155] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#2C4155] text-white rounded-full flex items-center justify-center text-sm">
                      3
                    </span>
                    Kontak
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:geomate@example.com"
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#C4A57B] hover:border-[#2C4155] transition-colors"
                    >
                      <Mail className="size-5 text-[#2C4155]" />
                      <span className="text-[#4A3428]">geomate@example.com</span>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#C4A57B] hover:border-[#2C4155] transition-colors"
                    >
                      <Github className="size-5 text-[#2C4155]" />
                      <span className="text-[#4A3428]">github.com/geomate</span>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#2C4155] to-[#8B9DB5] text-white rounded-lg p-6 text-center">
                  <h3 className="font-bold mb-2">Terima Kasih!</h3>
                  <p className="text-sm opacity-90">
                    Terima kasih telah menggunakan GeoMate. Semoga bermanfaat untuk pembelajaran kalian! 🎓
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
