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
    "Type 'npm run dev' to start the application."
  ]);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const executeCommand = async (cmd: string) => {
    setIsBooting(true);
    
    // Add the command line to history
    setLines(prev => [...prev, `guest@portfolio:~$ ${cmd}`]);
    setInput("");

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
    } else {
       await delay(300);
       setLines(prev => [...prev, `sh: command not found: ${cmd}`, " "]);
       setIsBooting(false);
       setTimeout(() => inputRef.current?.focus(), 10);
    }
  };

  const addLog = (msg: string) => {
      setLines(prev => [...prev, msg]);
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isBooting) return;
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  // Keep focus on input
  useEffect(() => {
    const timeout = setTimeout(() => inputRef.current?.focus(), 10);
    return () => clearTimeout(timeout);
  }, [isBooting, lines]);

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
            className="flex-1 p-6 overflow-y-auto text-sm md:text-base text-neutral-300 font-mono scrollbar-hide cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
             {lines.map((line, i) => (
                <div key={i} className="mb-1 break-words">
                    {line.includes('npm notice') ? <span className="text-blue-400">{line}</span> : 
                     line.includes('Local:') ? <span className="text-green-400 font-bold">{line}</span> :
                     line.startsWith('>') ? <span className="text-neutral-500">{line}</span> :
                     line.startsWith('guest@') ? <span><span className="text-emerald-500 mr-2">guest@portfolio:~$</span>{line.split('$ ')[1]}</span> :
                     line}
                </div>
             ))}
             
             {!isBooting && (
                 <div className="flex items-center">
                    <span className="text-emerald-500 mr-2 shrink-0">guest@portfolio:~$</span>
                    <input 
                        ref={inputRef}
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent outline-none border-none text-white flex-1 caret-emerald-500 w-full"
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                    />
                 </div>
             )}
          </div>
          
          {/* Footer Hint */}
           <div className="px-4 py-2 bg-neutral-900 border-t border-neutral-800 text-[10px] text-neutral-600 flex justify-between items-center uppercase tracking-wider">
             <span>Terminal Access</span>
             <button 
                onClick={() => executeCommand('npm run dev')}
                className="hover:text-emerald-500 transition-colors"
             >
                Auto-Run System
             </button>
          </div>
       </div>
    </div>
  );
};
