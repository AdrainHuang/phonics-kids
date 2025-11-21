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

  // A /æ/
{ word: "ant", phoneme: "/æ/", highlight: "a", image: "🐜" },
{ word: "apple", phoneme: "/æ/", highlight: "a", image: "🍎" },
{ word: "ax", phoneme: "/æ/", highlight: "a", image: "🪓" },
{ word: "alien", phoneme: "/æ/", highlight: "a", image: "👽" },

// B /b/
{ word: "bat", phoneme: "/b/", highlight: "b", image: "🦇" },
{ word: "ball", phoneme: "/b/", highlight: "b", image: "🏀" },
{ word: "bag", phoneme: "/b/", highlight: "b", image: "👜" },
{ word: "bed", phoneme: "/b/", highlight: "b", image: "🛏️" },

// C /k/
{ word: "cat", phoneme: "/k/", highlight: "c", image: "🐱" },
{ word: "car", phoneme: "/k/", highlight: "c", image: "🚗" },
{ word: "cap", phoneme: "/k/", highlight: "c", image: "🧢" },
{ word: "cow", phoneme: "/k/", highlight: "c", image: "🐄" },

// D /d/
{ word: "dog", phoneme: "/d/", highlight: "d", image: "🐶" },
{ word: "door", phoneme: "/d/", highlight: "d", image: "🚪" },
{ word: "duck", phoneme: "/d/", highlight: "d", image: "🦆" },
{ word: "drum", phoneme: "/d/", highlight: "d", image: "🥁" },

// E /ɛ/
{ word: "egg", phoneme: "/ɛ/", highlight: "e", image: "🥚" },
{ word: "elephant", phoneme: "/ɛ/", highlight: "e", image: "🐘" },
{ word: "elf", phoneme: "/ɛ/", highlight: "e", image: "🧝" },
{ word: "engine", phoneme: "/ɛ/", highlight: "e", image: "🚂" },

// F /f/
{ word: "fan", phoneme: "/f/", highlight: "f", image: "🌀" },
{ word: "fish", phoneme: "/f/", highlight: "f", image: "🐟" },
{ word: "frog", phoneme: "/f/", highlight: "f", image: "🐸" },
{ word: "fox", phoneme: "/f/", highlight: "f", image: "🦊" },

// G /g/
{ word: "goat", phoneme: "/g/", highlight: "g", image: "🐐" },
{ word: "gum", phoneme: "/g/", highlight: "g", image: "🍬" },
{ word: "gift", phoneme: "/g/", highlight: "g", image: "🎁" },
{ word: "gold", phoneme: "/g/", highlight: "g", image: "🥇" },

// H /h/
{ word: "hat", phoneme: "/h/", highlight: "h", image: "👒" },
{ word: "hippo", phoneme: "/h/", highlight: "h", image: "🦛" },
{ word: "hand", phoneme: "/h/", highlight: "h", image: "✋" },
{ word: "house", phoneme: "/h/", highlight: "h", image: "🏠" },

// I /ɪ/
{ word: "igloo", phoneme: "/ɪ/", highlight: "i", image: "🏠" },
{ word: "ink", phoneme: "/ɪ/", highlight: "i", image: "🖋️" },
{ word: "insect", phoneme: "/ɪ/", highlight: "i", image: "🐞" },
{ word: "ill", phoneme: "/ɪ/", highlight: "i", image: "🤒" },

// J /dʒ/
{ word: "jam", phoneme: "/dʒ/", highlight: "j", image: "🍓" },
{ word: "jet", phoneme: "/dʒ/", highlight: "j", image: "✈️" },
{ word: "jeep", phoneme: "/dʒ/", highlight: "j", image: "🚙" },
{ word: "jelly", phoneme: "/dʒ/", highlight: "j", image: "🍮" },

// K /k/
{ word: "kite", phoneme: "/k/", highlight: "k", image: "🪁" },
{ word: "key", phoneme: "/k/", highlight: "k", image: "🗝️" },
{ word: "king", phoneme: "/k/", highlight: "k", image: "👑" },
{ word: "koala", phoneme: "/k/", highlight: "k", image: "🐨" },

// L /l/
{ word: "lion", phoneme: "/l/", highlight: "l", image: "🦁" },
{ word: "leaf", phoneme: "/l/", highlight: "l", image: "🍃" },
{ word: "lamp", phoneme: "/l/", highlight: "l", image: "💡" },
{ word: "lake", phoneme: "/l/", highlight: "l", image: "🏞️" },

// M /m/
{ word: "map", phoneme: "/m/", highlight: "m", image: "🗺️" },
{ word: "man", phoneme: "/m/", highlight: "m", image: "👨" },
{ word: "milk", phoneme: "/m/", highlight: "m", image: "🥛" },
{ word: "moon", phoneme: "/m/", highlight: "m", image: "🌕" },

// N /n/
{ word: "nut", phoneme: "/n/", highlight: "n", image: "🥜" },
{ word: "nose", phoneme: "/n/", highlight: "n", image: "👃" },
{ word: "nail", phoneme: "/n/", highlight: "n", image: "🪛" },
{ word: "net", phoneme: "/n/", highlight: "n", image: "🕸️" },

// O /ɒ/
{ word: "octopus", phoneme: "/ɒ/", highlight: "o", image: "🐙" },
{ word: "ox", phoneme: "/ɒ/", highlight: "o", image: "🐂" },
{ word: "on", phoneme: "/ɒ/", highlight: "o", image: "🔛" },
{ word: "ostrich", phoneme: "/ɒ/", highlight: "o", image: "🐦" },

// P /p/
{ word: "pig", phoneme: "/p/", highlight: "p", image: "🐷" },
{ word: "pen", phoneme: "/p/", highlight: "p", image: "🖊️" },
{ word: "pan", phoneme: "/p/", highlight: "p", image: "🍳" },
{ word: "pizza", phoneme: "/p/", highlight: "p", image: "🍕" },

// Q /kw/
{ word: "queen", phoneme: "/kw/", highlight: "qu", image: "👑" },
{ word: "quick", phoneme: "/kw/", highlight: "qu", image: "⚡" },
{ word: "quiz", phoneme: "/kw/", highlight: "qu", image: "❓" },
{ word: "quiet", phoneme: "/kw/", highlight: "qu", image: "🤫" },

// R /r/
{ word: "rat", phoneme: "/r/", highlight: "r", image: "🐀" },
{ word: "red", phoneme: "/r/", highlight: "r", image: "🔴" },
{ word: "ring", phoneme: "/r/", highlight: "r", image: "💍" },
{ word: "robot", phoneme: "/r/", highlight: "r", image: "🤖" },

// S /s/
{ word: "sun", phoneme: "/s/", highlight: "s", image: "☀️" },
{ word: "sock", phoneme: "/s/", highlight: "s", image: "🧦" },
{ word: "sand", phoneme: "/s/", highlight: "s", image: "🏖️" },
{ word: "seal", phoneme: "/s/", highlight: "s", image: "🦭" },

// T /t/
{ word: "top", phoneme: "/t/", highlight: "t", image: "🔝" },
{ word: "ten", phoneme: "/t/", highlight: "t", image: "🔟" },
{ word: "tiger", phoneme: "/t/", highlight: "t", image: "🐯" },
{ word: "tap", phoneme: "/t/", highlight: "t", image: "🚰" },

// U /ʌ/
{ word: "umbrella", phoneme: "/ʌ/", highlight: "u", image: "🌂" },
{ word: "up", phoneme: "/ʌ/", highlight: "u", image: "⬆️" },
{ word: "uncle", phoneme: "/ʌ/", highlight: "u", image: "👨" },
{ word: "under", phoneme: "/ʌ/", highlight: "u", image: "⬇️" },

// V /v/
{ word: "van", phoneme: "/v/", highlight: "v", image: "🚐" },
{ word: "vase", phoneme: "/v/", highlight: "v", image: "🏺" },
{ word: "vet", phoneme: "/v/", highlight: "v", image: "👨‍⚕️" },
{ word: "vine", phoneme: "/v/", highlight: "v", image: "🌿" },

// W /w/
{ word: "wig", phoneme: "/w/", highlight: "w", image: "💇" },
{ word: "win", phoneme: "/w/", highlight: "w", image: "🏆" },
{ word: "wet", phoneme: "/w/", highlight: "w", image: "💧" },
{ word: "wolf", phoneme: "/w/", highlight: "w", image: "🐺" },

// X /ks/
{ word: "fox", phoneme: "/ks/", highlight: "x", image: "🦊" },
{ word: "box", phoneme: "/ks/", highlight: "x", image: "📦" },
{ word: "six", phoneme: "/ks/", highlight: "x", image: "6️⃣" },
{ word: "mix", phoneme: "/ks/", highlight: "x", image: "🥣" },

// Y /j/
{ word: "yak", phoneme: "/j/", highlight: "y", image: "🐂" },
{ word: "yarn", phoneme: "/j/", highlight: "y", image: "🧶" },
{ word: "yes", phoneme: "/j/", highlight: "y", image: "👍" },
{ word: "yell", phoneme: "/j/", highlight: "y", image: "📣" },

// Z /z/
{ word: "zip", phoneme: "/z/", highlight: "z", image: "🧵" },
{ word: "zoo", phoneme: "/z/", highlight: "z", image: "🦁" },
{ word: "zero", phoneme: "/z/", highlight: "z", image: "0️⃣" },
{ word: "zebra", phoneme: "/z/", highlight: "z", image: "🦓" },
];

export const LEVEL_THRESHOLDS = 10; // Points per level