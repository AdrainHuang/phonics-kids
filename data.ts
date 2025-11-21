import { PhonicWord } from './types';

export const PHONICS_DATA: PhonicWord[] = [
  // Short A /æ/
  { word: "cat", phoneme: "/æ/", highlight: "a", image: "🐱" },
  { word: "bat", phoneme: "/æ/", highlight: "a", image: "🦇" },
  { word: "map", phoneme: "/æ/", highlight: "a", image: "🗺️" },
  { word: "hat", phoneme: "/æ/", highlight: "a", image: "👒" },
  
  // Short E /e/
  { word: "pen", phoneme: "/e/", highlight: "e", image: "🖊️" },
  { word: "bed", phoneme: "/e/", highlight: "e", image: "🛏️" },
  { word: "hen", phoneme: "/e/", highlight: "e", image: "🐔" },
  { word: "red", phoneme: "/e/", highlight: "e", image: "🔴" },

  // Short I /ɪ/
  { word: "pig", phoneme: "/ɪ/", highlight: "i", image: "🐷" },
  { word: "six", phoneme: "/ɪ/", highlight: "i", image: "6️⃣" },
  { word: "win", phoneme: "/ɪ/", highlight: "i", image: "🏆" },
  { word: "lip", phoneme: "/ɪ/", highlight: "i", image: "👄" },

  // Short O /ɒ/
  { word: "dog", phoneme: "/ɒ/", highlight: "o", image: "🐶" },
  { word: "box", phoneme: "/ɒ/", highlight: "o", image: "📦" },
  { word: "hot", phoneme: "/ɒ/", highlight: "o", image: "🔥" },
  { word: "fox", phoneme: "/ɒ/", highlight: "o", image: "🦊" },

  // Short U /ʌ/
  { word: "sun", phoneme: "/ʌ/", highlight: "u", image: "☀️" },
  { word: "bus", phoneme: "/ʌ/", highlight: "u", image: "🚌" },
  { word: "cup", phoneme: "/ʌ/", highlight: "u", image: "☕" },
  { word: "run", phoneme: "/ʌ/", highlight: "u", image: "🏃" },

  // Long A /ei/
  { word: "cake", phoneme: "/eɪ/", highlight: "a_e", image: "🍰" },
  { word: "rain", phoneme: "/eɪ/", highlight: "ai", image: "🌧️" },
  { word: "play", phoneme: "/eɪ/", highlight: "ay", image: "🎮" },
  
  // Long E /i:/
  { word: "tree", phoneme: "/i:/", highlight: "ee", image: "🌳" },
  { word: "bee", phoneme: "/i:/", highlight: "ee", image: "🐝" },
  { word: "leaf", phoneme: "/i:/", highlight: "ea", image: "🍃" },
];

export const LEVEL_THRESHOLDS = 10; // Points per level