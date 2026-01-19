import { useState } from "react";
import { HomePage } from "@/app/components/HomePage";
import { MateriPage } from "@/app/components/MateriPage";
import { KuisPage } from "@/app/components/KuisPage";
import { KalkulatorPage } from "@/app/components/KalkulatorPage";
import { SettingsPage } from "@/app/components/SettingsPage";
import { Home, BookOpen, Brain, Calculator, Menu, X, Settings } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";

type PageType = "home" | "materi" | "kuis" | "kalkulator";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  
  // Settings state
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [volume, setVolume] = useState(50);

  const navigation = [
    { name: "Home", page: "home" as PageType, icon: Home },
    { name: "Materi", page: "materi" as PageType, icon: BookOpen },
    { name: "Kuis", page: "kuis" as PageType, icon: Brain },
    { name: "Kalkulator", page: "kalkulator" as PageType, icon: Calculator }
  ];

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-[#C4A57B]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavigate("home")}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#2C4155] to-[#8B9DB5] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#2C4155]">
                  GeoMate
                </h1>
                <p className="text-xs text-[#6B5D52] -mt-1">Belajar Geometri</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavigate(item.page)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-[#2C4155] text-white shadow-lg scale-105"
                        : "text-[#4A3428] hover:bg-[#F5F1E8]"
                    }`}
                  >
                    <Icon className="size-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
              
              {/* Settings Button - Desktop */}
              <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
                <SheetTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#4A3428] hover:bg-[#F5F1E8] transition-all">
                    <Settings className="size-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto bg-[#F5F1E8] border-l-4 border-[#C4A57B]">
                  <SettingsPage
                    musicEnabled={musicEnabled}
                    setMusicEnabled={setMusicEnabled}
                    volume={volume}
                    setVolume={setVolume}
                  />
                </SheetContent>
              </Sheet>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 text-[#4A3428] hover:bg-[#F5F1E8] rounded-lg">
                    <Settings className="size-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full overflow-y-auto bg-[#F5F1E8] border-l-4 border-[#C4A57B]">
                  <SettingsPage
                    musicEnabled={musicEnabled}
                    setMusicEnabled={setMusicEnabled}
                    volume={volume}
                    setVolume={setVolume}
                  />
                </SheetContent>
              </Sheet>
              
              <button
                className="p-2 text-[#4A3428] hover:bg-[#F5F1E8] rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t animate-in slide-in-from-top-4 duration-300">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.page;
                  return (
                    <button
                      key={item.page}
                      onClick={() => handleNavigate(item.page)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-[#2C4155] text-white shadow-lg"
                          : "text-[#4A3428] hover:bg-[#F5F1E8]"
                      }`}
                    >
                      <Icon className="size-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "materi" && <MateriPage />}
        {currentPage === "kuis" && <KuisPage />}
        {currentPage === "kalkulator" && <KalkulatorPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#2C4155] to-[#8B9DB5] text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">GeoMate</h3>
            <p className="text-[#F5F1E8] mb-4">
              Platform Pembelajaran Geometri untuk Kelas 6 SD
            </p>
            <div className="flex justify-center gap-6 text-sm text-[#F5F1E8]">
              <span>© 2026 GeoMate</span>
              <span>•</span>
              <span>Belajar Geometri Jadi Menyenangkan</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
