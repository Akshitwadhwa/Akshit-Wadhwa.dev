import React from 'react';
import { Code, Cpu, Database, Layers, Server, Terminal, Palette, Zap, Globe, Layout, Smartphone, FileCode, Hash } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* Frontend Module */}
      <div className="md:col-span-2 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 relative overflow-hidden group shadow-sm">
        <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
            <Layout size={120} />
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                    <Layout size={20} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Frontend Architecture</h3>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 mb-6 max-w-md leading-relaxed">
                Crafting responsive, high-performance user interfaces using the modern React ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
                <TechBadge icon={Globe} label="Next.js" />
                <TechBadge icon={Cpu} label="React" />
                <TechBadge icon={Palette} label="Tailwind CSS" />
                <TechBadge icon={FileCode} label="HTML5" />
                <TechBadge icon={Hash} label="CSS3" />
            </div>
        </div>
      </div>

      {/* Core Module */}
      <div className="md:col-span-1 rounded-3xl bg-neutral-900 dark:bg-neutral-800 border border-neutral-800 p-6 text-white flex flex-col justify-between group relative overflow-hidden shadow-sm">
         <div className="absolute -right-4 -top-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
             <Code size={100} />
         </div>
         <div>
             <h3 className="text-lg font-bold mb-2">Core</h3>
             <p className="text-neutral-400 text-sm mb-4">Type-safe & reliable code.</p>
         </div>
         <div className="space-y-2">
             <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
                 <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                     <span className="font-mono text-sm">TypeScript</span>
                 </div>
             </div>
             <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                 <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                     <span className="font-mono text-sm">JavaScript</span>
                 </div>
             </div>
         </div>
      </div>

      {/* App Development Module - NEW */}
      <div className="md:col-span-2 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
            <Smartphone size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
                    <Smartphone size={20} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">App Development</h3>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 mb-6 max-w-md leading-relaxed">
                Building cross-platform and native mobile applications.
            </p>
            <div className="flex flex-wrap gap-3">
                <TechBadge icon={Layout} label="Flutter" />
                <TechBadge icon={Code} label="Kotlin" />
                <TechBadge icon={Zap} label="Swift" />
            </div>
          </div>
      </div>

      {/* Runtime Module */}
      <div className="md:col-span-1 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col group shadow-sm">
          <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-500/10 rounded-lg text-orange-600 dark:text-orange-400">
                    <Terminal size={20} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Runtime</h3>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-green-500/50 transition-colors">
                  <Server className="w-6 h-6 text-green-500 mb-2" />
                  <span className="text-xs font-medium dark:text-neutral-300">Node.js</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-yellow-500/50 transition-colors">
                  <Zap className="w-6 h-6 text-yellow-500 mb-2" />
                  <span className="text-xs font-medium dark:text-neutral-300">Bun</span>
              </div>
          </div>
      </div>

      {/* Database Module */}
      <div className="md:col-span-3 rounded-3xl bg-gradient-to-r from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 flex items-center justify-between group relative overflow-hidden shadow-sm">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 w-full">
               <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Database size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Data Management</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Reliable storage solutions</p>
                    </div>
               </div>
               
               <div className="hidden md:flex flex-1 items-center gap-3">
                    <div className="h-1.5 flex-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 w-full rounded-full opacity-50"></div>
                    </div>
                    <span className="font-mono text-xs text-neutral-400">PostgreSQL</span>
               </div>
          </div>
      </div>

    </div>
  );
};

const TechBadge = ({ icon: Icon, label }: { icon: any, label: string }) => (
    <div className="flex items-center gap-2 px-3 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-emerald-500/30 transition-colors">
        <Icon size={16} />
        <span>{label}</span>
    </div>
);
