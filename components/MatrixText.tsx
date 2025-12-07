import React, { useState, useEffect, useRef } from 'react';

interface MatrixTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const MatrixText: React.FC<MatrixTextProps> = ({ text, className = '', speed = 40 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<number | null>(null);
  // Mix of standard chars and some katakana-like symbols for matrix feel
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'\'#&_(),.;:?!\\|{}<>[]^~ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';

  useEffect(() => {
    let iteration = 0;
    
    const startAnimation = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        setDisplayText(prev => 
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsComplete(true);
        }

        iteration += 1 / 3;
      }, speed);
    };

    // Small delay before starting to allow page load
    const timeoutId = setTimeout(startAnimation, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(timeoutId);
    };
  }, [text, speed, chars]);

  return (
    <span 
      className={`font-mono inline-block ${className} ${isComplete ? '' : 'text-emerald-500 dark:text-emerald-400'}`}
    >
      {displayText}
    </span>
  );
};