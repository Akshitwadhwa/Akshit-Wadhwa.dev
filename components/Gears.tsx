import React from 'react';
import { Laptop, Monitor, Keyboard, Mouse, Smartphone, Cpu, HardDrive, Zap, Command } from 'lucide-react';

export const Gears: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      
      {/* Primary Workstation - MacBook */}
      <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 relative overflow-hidden group hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
        <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:scale-110 group-hover:rotate-[-5deg] transition-transform duration-500 ease-out">
           <Laptop size={180} />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
           <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-4">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               Daily Driver
             </div>
             <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">MacBook Air 15"</h3>
             <p className="text-neutral-500 dark:text-neutral-400 font-medium">M3 Chip Powerhouse</p>
           </div>
           
           <div className="mt-8 grid grid-cols-2 gap-4">
              <SpecItem icon={Cpu} label="Apple M3" sub="8-Core CPU" />
              <SpecItem icon={Zap} label="16GB" sub="Unified Memory" />
              <SpecItem icon={HardDrive} label="512GB" sub="SSD Storage" />
           </div>
        </div>
      </div>

      {/* Monitor */}
      <div className="md:col-span-2 rounded-3xl bg-neutral-900 dark:bg-black border border-neutral-800 p-6 relative overflow-hidden group text-white">
         <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:opacity-30 transition-opacity">
            <Monitor size={120} />
         </div>
         <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-neutral-800 rounded-lg text-neutral-300">
                    <Monitor size={24} />
                </div>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded border border-emerald-500/30">165Hz</span>
            </div>
            <h3 className="text-xl font-bold mb-1">BenQ EX2710Q</h3>
            <p className="text-neutral-400 text-sm mb-4">27" 2K QHD IPS Display</p>
            <div className="flex gap-2">
                <span className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-400">HDRi</span>
                <span className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-400">TreVolo</span>
            </div>
         </div>
      </div>

      {/* Keyboards Group */}
      <div className="md:col-span-2 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 relative overflow-hidden group">
         <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300">
               <Keyboard size={24} />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Input Devices</h3>
         </div>
         
         <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
               <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 font-bold">K3</div>
               <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">Keychron K3 Max</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Low Profile Mechanical</p>
               </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
               <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
                  <Command size={20} />
               </div>
               <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">Magic Keyboard</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Wireless Backup</p>
               </div>
            </div>
         </div>
      </div>

      {/* Mouse */}
      <div className="md:col-span-1 rounded-3xl bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col justify-between group">
         <div className="flex justify-end">
             <div className="p-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm text-neutral-900 dark:text-white group-hover:scale-110 transition-transform">
                <Mouse size={20} />
             </div>
         </div>
         <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight mb-1">Logitech MX Master 3S</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Productivity Beast</p>
         </div>
      </div>

      {/* Phone */}
      <div className="md:col-span-1 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 p-6 flex flex-col justify-between group relative overflow-hidden">
         <div className="absolute -right-2 top-10 opacity-10 dark:opacity-20 text-blue-600 dark:text-blue-400">
            <Smartphone size={100} />
         </div>
         <div className="relative z-10">
             <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400 w-fit mb-8">
                <Smartphone size={20} />
             </div>
             <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight mb-1">Samsung S23 FE</h3>
             <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Android Ecosystem</p>
         </div>
      </div>

    </div>
  );
};

const SpecItem = ({ icon: Icon, label, sub }: { icon: any, label: string, sub: string }) => (
  <div className="flex items-center gap-3">
     <div className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
        <Icon size={16} />
     </div>
     <div>
        <p className="text-sm font-bold text-neutral-900 dark:text-white leading-none mb-1">{label}</p>
        <p className="text-[10px] text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">{sub}</p>
     </div>
  </div>
);