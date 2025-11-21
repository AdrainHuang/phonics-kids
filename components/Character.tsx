import React, { useMemo } from 'react';
import { User, Shield, Zap, Crown, Rocket } from 'lucide-react';

interface CharacterProps {
  score: number;
  currentPhoneme: string | null;
}

export const Character: React.FC<CharacterProps> = ({ score, currentPhoneme }) => {
  const level = Math.floor(score / 10);

  const CharacterIcon = useMemo(() => {
    if (level >= 4) return Rocket;
    if (level >= 3) return Crown;
    if (level >= 2) return Zap;
    if (level >= 1) return Shield;
    return User;
  }, [level]);

  const getLabel = () => {
    if (level >= 4) return "Space Ranger";
    if (level >= 3) return "Phonics King";
    if (level >= 2) return "Wizard";
    if (level >= 1) return "Knight";
    return "Explorer";
  };

  const getColor = () => {
    if (level >= 4) return "bg-indigo-500";
    if (level >= 3) return "bg-yellow-500";
    if (level >= 2) return "bg-purple-500";
    if (level >= 1) return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className="relative flex flex-col items-center justify-center z-20 transition-all duration-500">
      {/* Speech Bubble */}
      {currentPhoneme && (
        <div className="absolute -top-24 animate-bounce bg-white border-4 border-sky-400 rounded-2xl p-4 shadow-lg mb-4 flex items-center justify-center min-w-[100px]">
            <div className="text-4xl font-bold text-slate-800">{currentPhoneme}</div>
             {/* Triangle for bubble tail */}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-[10px] border-l-transparent
              border-r-[10px] border-r-transparent
              border-t-[10px] border-t-sky-400">
            </div>
        </div>
      )}

      {/* Avatar */}
      <div className={`w-24 h-24 ${getColor()} rounded-full flex items-center justify-center shadow-xl border-4 border-white ring-4 ring-black/10 animate-float`}>
        <CharacterIcon className="w-12 h-12 text-white" />
      </div>
      
      {/* Label */}
      <div className="mt-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
        Lvl {level}: {getLabel()}
      </div>
    </div>
  );
};