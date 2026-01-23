import React, { useState, useEffect, useRef } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([
    "Welcome to Akshit Wadhwa Portfolio v2.0.0",
    "Initializing environment...",
    "Loading dependencies...",
    "Environment ready.",
    " ",
    "Choose your development mode:"
  ]);
  const [isBooting, setIsBooting] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const executeCommand = async (cmd: string) => {
    setIsBooting(true);
    
    // Add the command line to history
    setLines(prev => [...prev, `guest@portfolio:~$ ${cmd}`]);

    if (cmd.trim() === 'npm run dev') {
       await delay(400);
       addLog("npm notice");
       addLog("npm notice New major version of npm available! 10.2.0 -> 10.8.0");
       addLog("npm notice Changelog: <https://github.com/npm/cli/releases/tag/v10.8.0>");
       addLog("npm notice Run `npm install -g npm@10.8.0` to update!");
       addLog("npm notice");
       await delay(600);
       addLog("> portfolio@2.0.0 dev");
       addLog("> vite");
       await delay(600);
       addLog("");
       addLog("  VITE v5.2.0  ready in 340 ms");
       addLog("");
       addLog("  ➜  Local:   http://localhost:5173/");
       addLog("  ➜  Network: use --host to expose");
       await delay(800);
       onComplete();
    } else if (cmd.trim() === 'flutter run') {
       await delay(400);
       addLog("Launching lib/main.dart on iPhone 15 in debug mode...");
       await delay(600);
       addLog("Running Xcode build...");
       await delay(800);
       addLog("Xcode build done. 12.3s");
       await delay(400);
       addLog("Syncing files to device iPhone 15...");
       await delay(600);
       addLog("Flutter run successful.");
       await delay(800);
       onComplete();
    } else {
       await delay(300);
       setLines(prev => [...prev, `sh: command not found: ${cmd}`, " "]);
       setIsBooting(false);
    }
  };

  const addLog = (msg: string) => {
      setLines(prev => [...prev, msg]);
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="fixed inset-0 z-[100] bg-neutral-950 flex items-center justify-center p-4 font-mono select-none">
       <div className="w-full max-w-3xl bg-neutral-900 rounded-xl shadow-2xl border border-neutral-800 overflow-hidden flex flex-col h-[60vh] md:h-[500px]">
          {/* Header */}
          <div className="bg-neutral-800/50 px-4 py-3 flex items-center gap-2 border-b border-neutral-800">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
             </div>
             <div className="flex-1 text-center text-xs text-neutral-400 font-medium ml-[-50px] opacity-50">
                guest@portfolio: ~
             </div>
          </div>
          
          {/* Body */}
          <div 
            ref={terminalRef}
            className="flex-1 p-6 overflow-y-auto text-sm md:text-base text-neutral-300 font-mono scrollbar-hide cursor-text flex flex-col"
          >
             <div className="flex-1">
                {lines.map((line, i) => (
                   <div key={i} className="mb-1 break-words">
                       {line.includes('npm notice') ? <span className="text-blue-400">{line}</span> : 
                        line.includes('Local:') ? <span className="text-green-400 font-bold">{line}</span> :
                        line.startsWith('>') ? <span className="text-neutral-500">{line}</span> :
                        line.startsWith('guest@') ? <span><span className="text-emerald-500 mr-2">guest@portfolio:~$</span>{line.split('$ ')[1]}</span> :
                        line}
                   </div>
                ))}
             </div>
             
             {!isBooting && (
                <div className="flex justify-center gap-6 mt-4">
                   <button 
                     onClick={() => executeCommand('flutter run')}
                     className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-sm rounded-lg transition-colors shadow-lg"
                   >
                     Mobile Dev
                   </button>
                   <button 
                     onClick={() => executeCommand('npm run dev')}
                     className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm rounded-lg transition-colors shadow-lg"
                   >
                     Web Dev
                   </button>
                </div>
             )}
          </div>
          
       </div>
    </div>
  );
};
