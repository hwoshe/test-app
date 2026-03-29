import { Bell, Plus, Sprout, TrendingUp, TrendingDown, ThermometerSun, Droplets, Droplet, Wind, Zap, Play, Maximize, Brain, CloudRain, Sun, Fan, Flame, Home, TrendingUpIcon, BotMessageSquare, Settings } from 'lucide-react';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-white transition-colors duration-300">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <Sprout className="text-primary" size={20} />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-primary uppercase">EcoTerrarium AI</h1>
            <p className="text-[10px] text-slate-400">ID: TERR-042-ALPHA</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
            <Bell size={20} />
          </button>
          <div className="size-10 rounded-full overflow-hidden border-2 border-primary">
            <img 
              src="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwd29tYW58ZW58MXx8fHwxNzcwNzg2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="User profile avatar portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto p-4 space-y-6 pb-32">
        {/* Live Feed Container */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Live Monitoring
            </h2>
            <span className="text-xs font-medium text-slate-500 bg-white/5 px-2 py-1 rounded">1080p • 30fps</span>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1689926248473-b91ec8bbd522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHRlcnJhcml1bSUyMHBsYW50cyUyMG1pc3QlMjBnbGFzc3xlbnwxfHx8fDE3NzA4NzgzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Lush green tropical terrarium with humidity mist"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <Play className="fill-white" size={20} />
                </button>
                <div className="text-white">
                  <p className="text-xs font-medium">Main Camera</p>
                  <p className="text-[10px] opacity-70">Tropical Enclosure 01</p>
                </div>
              </div>
              <button className="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <Maximize size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* AI Plant Health Insights */}
        <section className="bg-primary/10 border border-primary/20 rounded-xl p-4 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 size-24 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="flex items-start gap-4 relative">
            <div className="size-12 rounded-xl bg-primary flex items-center justify-center text-black status-pulse shrink-0">
              <Brain size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-primary flex items-center gap-2">
                AI Health Status: Healthy
              </h3>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                Optimal growth detected for <span className="font-semibold text-white">Monstera Adansonii</span>. Photosynthesis levels are peaking.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="text-[10px] px-2 py-1 bg-primary/20 text-primary rounded-full font-bold uppercase tracking-wider">Water Suggested</span>
                <span className="text-[10px] px-2 py-1 bg-white/10 text-slate-500 rounded-full font-bold uppercase tracking-wider">Light +15m</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sensor Grid */}
        <section className="grid grid-cols-2 gap-4">
          {/* Temperature Card */}
          <div className="glass-card rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <ThermometerSun className="text-orange-400" size={24} />
              <span className="text-[10px] text-green-500 flex items-center font-bold">
                <TrendingUp size={12} /> 2%
              </span>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Temperature</p>
              <p className="text-2xl font-bold text-white">26.4<span className="text-sm font-normal opacity-50 ml-1">°C</span></p>
            </div>
            <div className="mt-3 h-8 w-full">
              <svg className="w-full h-full stroke-primary fill-primary/10 stroke-2" viewBox="0 0 100 30">
                <path d="M0,25 Q15,5 30,20 T60,10 T90,22 L100,22 L100,30 L0,30 Z"></path>
              </svg>
            </div>
          </div>

          {/* Humidity Card */}
          <div className="glass-card rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <Droplets className="text-blue-400" size={24} />
              <span className="text-[10px] text-red-400 flex items-center font-bold">
                <TrendingDown size={12} /> 1%
              </span>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Humidity</p>
              <p className="text-2xl font-bold text-white">78<span className="text-sm font-normal opacity-50 ml-1">%</span></p>
            </div>
            <div className="mt-3 h-8 w-full">
              <svg className="w-full h-full stroke-primary fill-primary/10 stroke-2" viewBox="0 0 100 30">
                <path d="M0,10 Q20,25 40,15 T70,25 T100,5 L100,30 L0,30 Z"></path>
              </svg>
            </div>
          </div>

          {/* Soil Moisture */}
          <div className="glass-card rounded-xl p-4 flex flex-col justify-between border-l-4 border-l-primary/50">
            <div className="flex items-center justify-between mb-2">
              <Droplet className="text-emerald-400" size={24} />
              <span className="text-[10px] text-slate-500">Target 50%</span>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Soil Moisture</p>
              <p className="text-2xl font-bold text-white">45<span className="text-sm font-normal opacity-50 ml-1">%</span></p>
            </div>
            <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>

          {/* CO2 Levels */}
          <div className="glass-card rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <Wind className="text-purple-400" size={24} />
              <span className="text-[10px] text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">Optimal</span>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">CO2 Levels</p>
              <p className="text-2xl font-bold text-white">400<span className="text-sm font-normal opacity-50 ml-1">ppm</span></p>
            </div>
            <div className="mt-3 h-8 w-full">
              <svg className="w-full h-full stroke-primary fill-primary/10 stroke-2 opacity-30" viewBox="0 0 100 30">
                <path d="M0,20 L10,20 L20,22 L30,20 L40,20 L50,18 L60,20 L70,20 L80,21 L90,20 L100,20 L100,30 L0,30 Z"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Quick Controls</h3>
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            <button className="flex flex-col items-center justify-center gap-2 min-w-[100px] h-24 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/50 transition-all active:scale-95 shadow-lg">
              <div className="size-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
                <CloudRain size={20} />
              </div>
              <span className="text-xs font-bold">Mist Now</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 min-w-[100px] h-24 bg-primary text-black rounded-2xl active:scale-95 shadow-xl shadow-primary/20">
              <div className="size-10 rounded-full bg-black/10 flex items-center justify-center">
                <Sun size={20} />
              </div>
              <span className="text-xs font-bold">LED On</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 min-w-[100px] h-24 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/50 transition-all active:scale-95 shadow-lg">
              <div className="size-10 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center">
                <Fan size={20} />
              </div>
              <span className="text-xs font-bold">Fan Auto</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 min-w-[100px] h-24 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/50 transition-all active:scale-95 shadow-lg">
              <div className="size-10 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center">
                <Flame size={20} />
              </div>
              <span className="text-xs font-bold">Heating</span>
            </button>
          </div>
        </section>
      </main>

      {/* Bottom iOS Style Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button className="flex flex-col items-center gap-1 text-primary">
            <Home size={24} fill="currentColor" />
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <TrendingUpIcon size={24} />
            <span className="text-[10px] font-medium">Trends</span>
          </button>
          <div className="relative -top-8">
            <button className="size-14 rounded-full bg-primary flex items-center justify-center text-black shadow-lg shadow-primary/40 active:scale-90 transition-transform">
              <Plus size={32} strokeWidth={2.5} />
            </button>
          </div>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <BotMessageSquare size={24} />
            <span className="text-[10px] font-medium">Assistant</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <Settings size={24} />
            <span className="text-[10px] font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
