import { PhonicWord } from './types';

export const PHONICS_DATA: PhonicWord[] = [
  // Short A /æ/
  { word: "cat", phoneme: "/æ/", highlight: "a", image: "🐱" },
  { word: "bat", phoneme: "/æ/", highlight: "a", image: "🦇" },
  { word: "map", phoneme: "/æ/", highlight: "a", image: "🗺️" },
  { word: "hat", phoneme: "/æ/", highlight: "a", image: "👒" },
  { word: "apple", phoneme: "/æ/", highlight: "a", image: "🍎" },
  
  // Short E /e/
  { word: "pen", phoneme: "/e/", highlight: "e", image: "🖊️" },
  { word: "bed", phoneme: "/e/", highlight: "e", image: "🛏️" },
  { word: "hen", phoneme: "/e/", highlight: "e", image: "🐔" },
  { word: "red", phoneme: "/e/", highlight: "e", image: "🔴" },
  { word: "egg", phoneme: "/e/", highlight: "e", image: "🥚" },

  // Short I /ɪ/
  { word: "pig", phoneme: "/ɪ/", highlight: "i", image: "🐷" },
  { word: "six", phoneme: "/ɪ/", highlight: "i", image: "6️⃣" },
  { word: "win", phoneme: "/ɪ/", highlight: "i", image: "🏆" },
  { word: "lip", phoneme: "/ɪ/", highlight: "i", image: "👄" },
  { word: "fish", phoneme: "/ɪ/", highlight: "i", image: "🐟" },

  // Short O /ɒ/
  { word: "dog", phoneme: "/ɒ/", highlight: "o", image: "🐶" },
  { word: "box", phoneme: "/ɒ/", highlight: "o", image: "📦" },
  { word: "hot", phoneme: "/ɒ/", highlight: "o", image: "🔥" },
  { word: "fox", phoneme: "/ɒ/", highlight: "o", image: "🦊" },
  { word: "frog", phoneme: "/ɒ/", highlight: "o", image: "🐸" },

  // Short U /ʌ/
  { word: "sun", phoneme: "/ʌ/", highlight: "u", image: "☀️" },
  { word: "bus", phoneme: "/ʌ/", highlight: "u", image: "🚌" },
  { word: "cup", phoneme: "/ʌ/", highlight: "u", image: "☕" },
  { word: "run", phoneme: "/ʌ/", highlight: "u", image: "🏃" },
  { word: "duck", phoneme: "/ʌ/", highlight: "u", image: "🦆" },

  // Long A /eɪ/
  { word: "cake", phoneme: "/eɪ/", highlight: "a_e", image: "🍰" },
  { word: "rain", phoneme: "/eɪ/", highlight: "ai", image: "🌧️" },
  { word: "play", phoneme: "/eɪ/", highlight: "ay", image: "🎮" },
  { word: "snake", phoneme: "/eɪ/", highlight: "a_e", image: "🐍" },
  { word: "train", phoneme: "/eɪ/", highlight: "ai", image: "🚂" },
  
  // Long E /i:/
  { word: "tree", phoneme: "/i:/", highlight: "ee", image: "🌳" },
  { word: "bee", phoneme: "/i:/", highlight: "ee", image: "🐝" },
  { word: "leaf", phoneme: "/i:/", highlight: "ea", image: "🍃" },
  { word: "sheep", phoneme: "/i:/", highlight: "ee", image: "🐑" },
  { word: "key", phoneme: "/i:/", highlight: "ey", image: "🔑" },

  // Long I /aɪ/
  { word: "kite", phoneme: "/aɪ/", highlight: "i_e", image: "🪁" },
  { word: "bike", phoneme: "/aɪ/", highlight: "i_e", image: "🚲" },
  { word: "light", phoneme: "/aɪ/", highlight: "igh", image: "💡" },
  { word: "night", phoneme: "/aɪ/", highlight: "igh", image: "🌙" },
  { word: "five", phoneme: "/aɪ/", highlight: "i_e", image: "5️⃣" },
  { word: "fly", phoneme: "/aɪ/", highlight: "y", image: "🪰" },
  { word: "pie", phoneme: "/aɪ/", highlight: "ie", image: "🥧" },

  // Long O /oʊ/
  { word: "home", phoneme: "/oʊ/", highlight: "o_e", image: "🏠" },
  { word: "nose", phoneme: "/oʊ/", highlight: "o_e", image: "👃" },
  { word: "boat", phoneme: "/oʊ/", highlight: "oa", image: "⛵" },
  { word: "goat", phoneme: "/oʊ/", highlight: "oa", image: "🐐" },
  { word: "snow", phoneme: "/oʊ/", highlight: "ow", image: "❄️" },
  { word: "yellow", phoneme: "/oʊ/", highlight: "ow", image: "💛" },
  { word: "bone", phoneme: "/oʊ/", highlight: "o_e", image: "🦴" },

  // Long U /juː/ or /uː/
  { word: "cube", phoneme: "/juː/", highlight: "u_e", image: "🧊" },
  { word: "mule", phoneme: "/juː/", highlight: "u_e", image: "🐴" },
  { word: "blue", phoneme: "/uː/", highlight: "ue", image: "🔵" },
  { word: "glue", phoneme: "/uː/", highlight: "ue", image: "🧴" },
  { word: "unicorn", phoneme: "/juː/", highlight: "u", image: "🦄" },

  // Short OO /ʊ/
  { word: "book", phoneme: "/ʊ/", highlight: "oo", image: "📖" },
  { word: "foot", phoneme: "/ʊ/", highlight: "oo", image: "🦶" },
  { word: "cook", phoneme: "/ʊ/", highlight: "oo", image: "👨‍🍳" },
  { word: "wood", phoneme: "/ʊ/", highlight: "oo", image: "🪵" },

  // Long OO /uː/
  { word: "moon", phoneme: "/uː/", highlight: "oo", image: "🌕" },
  { word: "spoon", phoneme: "/uː/", highlight: "oo", image: "🥄" },
  { word: "pool", phoneme: "/uː/", highlight: "oo", image: "🏊" },
  { word: "zoo", phoneme: "/uː/", highlight: "oo", image: "🦁" },

  // AR /ɑːr/
  { word: "car", phoneme: "/ɑːr/", highlight: "ar", image: "🚗" },
  { word: "star", phoneme: "/ɑːr/", highlight: "ar", image: "⭐" },
  { word: "jar", phoneme: "/ɑːr/", highlight: "ar", image: "🫙" },
  { word: "park", phoneme: "/ɑːr/", highlight: "ar", image: "🏞️" },

  // OR /ɔːr/
  { word: "fork", phoneme: "/ɔːr/", highlight: "or", image: "🍴" },
  { word: "horse", phoneme: "/ɔːr/", highlight: "or", image: "🐴" },
  { word: "corn", phoneme: "/ɔːr/", highlight: "or", image: "🌽" },
  { word: "storm", phoneme: "/ɔːr/", highlight: "or", image: "⛈️" },

  // ER /ɜːr/, IR /ɜːr/, UR /ɜːr/
  { word: "teacher", phoneme: "/ɜːr/", highlight: "er", image: "👩‍🏫" },
  { word: "bird", phoneme: "/ɜːr/", highlight: "ir", image: "🐦" },
  { word: "girl", phoneme: "/ɜːr/", highlight: "ir", image: "👧" },
  { word: "turn", phoneme: "/ɜːr/", highlight: "ur", image: "🔄" },
  { word: "nurse", phoneme: "/ɜːr/", highlight: "ur", image: "👩‍⚕️" },
  { word: "purple", phoneme: "/ɜːr/", highlight: "ur", image: "🟣" },

  // OI /ɔɪ/ and OY /ɔɪ/
  { word: "coin", phoneme: "/ɔɪ/", highlight: "oi", image: "🪙" },
  { word: "soil", phoneme: "/ɔɪ/", highlight: "oi", image: "🌱" },
  { word: "boy", phoneme: "/ɔɪ/", highlight: "oy", image: "👦" },
  { word: "toy", phoneme: "/ɔɪ/", highlight: "oy", image: "🧸" },

  // OU /aʊ/ and OW /aʊ/
  { word: "house", phoneme: "/aʊ/", highlight: "ou", image: "🏠" },
  { word: "mouse", phoneme: "/aʊ/", highlight: "ou", image: "🐭" },
  { word: "cloud", phoneme: "/aʊ/", highlight: "ou", image: "☁️" },
  { word: "cow", phoneme: "/aʊ/", highlight: "ow", image: "🐄" },
  { word: "owl", phoneme: "/aʊ/", highlight: "ow", image: "🦉" },

  // AW /ɔː/ and AU /ɔː/
  { word: "saw", phoneme: "/ɔː/", highlight: "aw", image: "🪚" },
  { word: "paw", phoneme: "/ɔː/", highlight: "aw", image: "🐾" },
  { word: "sauce", phoneme: "/ɔː/", highlight: "au", image: "🥫" },
  { word: "autumn", phoneme: "/ɔː/", highlight: "au", image: "🍂" },

  // AIR /ɛər/
  { word: "chair", phoneme: "/ɛər/", highlight: "air", image: "🪑" },
  { word: "hair", phoneme: "/ɛər/", highlight: "air", image: "💇" },
  { word: "bear", phoneme: "/ɛər/", highlight: "ear", image: "🐻" },
  { word: "pear", phoneme: "/ɛər/", highlight: "ear", image: "🍐" },

  // EAR /ɪər/
  { word: "ear", phoneme: "/ɪər/", highlight: "ear", image: "👂" },
  { word: "hear", phoneme: "/ɪər/", highlight: "ear", image: "🔊" },
  { word: "dear", phoneme: "/ɪər/", highlight: "ear", image: "🦌" },
  
  // SH /ʃ/
  { word: "ship", phoneme: "/ʃ/", highlight: "sh", image: "🚢" },
  { word: "fish", phoneme: "/ʃ/", highlight: "sh", image: "🐟" },
  { word: "shell", phoneme: "/ʃ/", highlight: "sh", image: "🐚" },
  { word: "shoe", phoneme: "/ʃ/", highlight: "sh", image: "👞" },

  // CH /tʃ/
  { word: "chick", phoneme: "/tʃ/", highlight: "ch", image: "🐤" },
  { word: "chair", phoneme: "/tʃ/", highlight: "ch", image: "🪑" },
  { word: "cheese", phoneme: "/tʃ/", highlight: "ch", image: "🧀" },
  { word: "beach", phoneme: "/tʃ/", highlight: "ch", image: "🏖️" },

  // TH (voiceless) /θ/
  { word: "thin", phoneme: "/θ/", highlight: "th", image: "🧊" },
  { word: "bath", phoneme: "/θ/", highlight: "th", image: "🛁" },
  { word: "three", phoneme: "/θ/", highlight: "th", image: "3️⃣" },
  { word: "mouth", phoneme: "/θ/", highlight: "th", image: "👄" },

  // TH (voiced) /ð/
  { word: "this", phoneme: "/ð/", highlight: "th", image: "👉" },
  { word: "mother", phoneme: "/ð/", highlight: "th", image: "👩‍👧" },
  { word: "father", phoneme: "/ð/", highlight: "th", image: "👨‍👧" },

  // PH /f/
  { word: "phone", phoneme: "/f/", highlight: "ph", image: "📱" },
  { word: "elephant", phoneme: "/f/", highlight: "ph", image: "🐘" },
  { word: "photo", phoneme: "/f/", highlight: "ph", image: "📸" },
  { word: "dolphin", phoneme: "/f/", highlight: "ph", image: "🐬" },

  // NG /ŋ/
  { word: "sing", phoneme: "/ŋ/", highlight: "ng", image: "🎤" },
  { word: "king", phoneme: "/ŋ/", highlight: "ng", image: "👑" },
  { word: "ring", phoneme: "/ŋ/", highlight: "ng", image: "💍" },
  { word: "wing", phoneme: "/ŋ/", highlight: "ng", image: "🧚" },
  
  // WH /w/
  { word: "whale", phoneme: "/w/", highlight: "wh", image: "🐋" },
  { word: "wheel", phoneme: "/w/", highlight: "wh", image: "🎡" },
  { word: "white", phoneme: "/w/", highlight: "wh", image: "🤍" },

  // KN /n/ (Silent K)
  { word: "knee", phoneme: "/n/", highlight: "kn", image: "🦵" },
  { word: "knife", phoneme: "/n/", highlight: "kn", image: "🔪" },
  { word: "knot", phoneme: "/n/", highlight: "kn", image: "🪢" },
  { word: "knight", phoneme: "/n/", highlight: "kn", image: "🛡️" },

  // WR /r/ (Silent W)
  { word: "write", phoneme: "/r/", highlight: "wr", image: "✍️" },
  { word: "wreath", phoneme: "/r/", highlight: "wr", image: "🎄" },
  { word: "wrist", phoneme: "/r/", highlight: "wr", image: "💪" },
];

export const LEVEL_THRESHOLDS = 10; // Points per level