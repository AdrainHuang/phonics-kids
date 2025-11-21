import React from 'react';
import { GameMapObject } from '../types';
import { TreePine, Cloud, Mountain, Flower2 } from 'lucide-react';

interface MapObjectProps {
  obj: GameMapObject;
  onClick: (obj: GameMapObject) => void;
}

export const MapObject: React.FC<MapObjectProps> = ({ obj, onClick }) => {
  const getIcon = () => {
    const size = "w-16 h-16 md:w-24 md:h-24";
    switch (obj.type) {
      case 'tree': return <TreePine className={`${size} text-green-600 fill-green-200`} />;
      case 'cloud': return <Cloud className={`${size} text-white fill-white drop-shadow-md`} />;
      case 'mountain': return <Mountain className={`${size} text-stone-600 fill-stone-300`} />;
      case 'flower': return <Flower2 className={`${size} text-pink-500 fill-pink-200`} />;
      default: return <TreePine className={size} />;
    }
  };

  // Helper to render word with highlight
  const renderWord = () => {
    const { word, highlight } = obj.wordData;
    const parts = word.split(highlight);
    
    // A simple naive split might fail if highlight appears multiple times, 
    // but for this limited dataset it works or we can improve strictly.
    // Let's just highlight the whole string if split is weird, otherwise highlighted part.
    if (parts.length < 2) return <span className="font-bold text-slate-800">{word}</span>;

    return (
        <span className="text-slate-800 font-medium text-lg md:text-xl bg-white/80 px-2 py-1 rounded-full shadow-sm border border-slate-200">
            {parts[0]}
            <span className="text-red-500 font-bold text-xl md:text-2xl">{highlight}</span>
            {parts.slice(1).join(highlight)}
        </span>
    );
  };

  return (
    <div 
      className="absolute flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-200 animate-pop"
      style={{ left: `${obj.x}%`, top: `${obj.y}%` }}
      onClick={() => onClick(obj)}
    >
      <div className="relative animate-float">
        {getIcon()}
        <div className="absolute -top-2 -right-2 text-2xl">
            {obj.wordData.image}
        </div>
      </div>
      <div className="mt-1">
        {renderWord()}
      </div>
    </div>
  );
};