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

  // Long I /aɪ/
{ word: "kite", phoneme: "/aɪ/", highlight: "i_e", image: "🪁" },
{ word: "bike", phoneme: "/aɪ/", highlight: "i_e", image: "🚲" },
{ word: "light", phoneme: "/aɪ/", highlight: "igh", image: "💡" },
{ word: "night", phoneme: "/aɪ/", highlight: "igh", image: "🌙" },
{ word: "five", phoneme: "/aɪ/", highlight: "i_e", image: "5️⃣" },
{ word: "fly", phoneme: "/aɪ/", highlight: "y", image: "🪰" },

// Long O /oʊ/
{ word: "home", phoneme: "/oʊ/", highlight: "o_e", image: "🏠" },
{ word: "nose", phoneme: "/oʊ/", highlight: "o_e", image: "👃" },
{ word: "boat", phoneme: "/oʊ/", highlight: "oa", image: "⛵" },
{ word: "goat", phoneme: "/oʊ/", highlight: "oa", image: "🐐" },
{ word: "snow", phoneme: "/oʊ/", highlight: "ow", image: "❄️" },
{ word: "yellow", phoneme: "/oʊ/", highlight: "ow", image: "💛" },

// Long U /juː/ or /uː/
{ word: "cube", phoneme: "/juː/", highlight: "u_e", image: "🧊" },
{ word: "mule", phoneme: "/juː/", highlight: "u_e", image: "🐴" },
{ word: "blue", phoneme: "/uː/", highlight: "ue", image: "🔵" },
{ word: "true", phoneme: "/uː/", highlight: "ue", image: "✔️" },
{ word: "flu", phoneme: "/uː/", highlight: "u", image: "🤒" },
{ word: "food", phoneme: "/uː/", highlight: "oo", image: "🍜" },

// Short OO /ʊ/
{ word: "book", phoneme: "/ʊ/", highlight: "oo", image: "📖" },
{ word: "foot", phoneme: "/ʊ/", highlight: "oo", image: "🦶" },
{ word: "good", phoneme: "/ʊ/", highlight: "oo", image: "👍" },

// Long OO /uː/
{ word: "moon", phoneme: "/uː/", highlight: "oo", image: "🌕" },
{ word: "spoon", phoneme: "/uː/", highlight: "oo", image: "🥄" },
{ word: "pool", phoneme: "/uː/", highlight: "oo", image: "🏊" },

// AR /ɑːr/
{ word: "car", phoneme: "/ɑːr/", highlight: "ar", image: "🚗" },
{ word: "star", phoneme: "/ɑːr/", highlight: "ar", image: "⭐" },

// OR /ɔːr/
{ word: "fork", phoneme: "/ɔːr/", highlight: "or", image: "🍴" },
{ word: "horse", phoneme: "/ɔːr/", highlight: "or", image: "🐴" },

// ER /ɜːr/, IR /ɜːr/, UR /ɜːr/
{ word: "her", phoneme: "/ɜːr/", highlight: "er", image: "👩" },
{ word: "bird", phoneme: "/ɜːr/", highlight: "ir", image: "🐦" },
{ word: "turn", phoneme: "/ɜːr/", highlight: "ur", image: "🔄" },

// SH /ʃ/
{ word: "ship", phoneme: "/ʃ/", highlight: "sh", image: "🚢" },
{ word: "fish", phoneme: "/ʃ/", highlight: "sh", image: "🐟" },

// CH /tʃ/
{ word: "chick", phoneme: "/tʃ/", highlight: "ch", image: "🐤" },
{ word: "chair", phoneme: "/tʃ/", highlight: "ch", image: "🪑" },

// TH (voiceless) /θ/
{ word: "thin", phoneme: "/θ/", highlight: "th", image: "🧊" },
{ word: "bath", phoneme: "/θ/", highlight: "th", image: "🛁" },

// TH (voiced) /ð/
{ word: "this", phoneme: "/ð/", highlight: "th", image: "👉" },
{ word: "mother", phoneme: "/ð/", highlight: "th", image: "👩‍👧" },

// PH /f/
{ word: "phone", phoneme: "/f/", highlight: "ph", image: "📱" },
{ word: "elephant", phoneme: "/f/", highlight: "ph", image: "🐘" },

// NG /ŋ/
{ word: "sing", phoneme: "/ŋ/", highlight: "ng", image: "🎤" },
{ word: "king", phoneme: "/ŋ/", highlight: "ng", image: "👑" },
];

export const LEVEL_THRESHOLDS = 10; // Points per level