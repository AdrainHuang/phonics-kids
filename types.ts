export interface PhonicWord {
  word: string;
  phoneme: string; // The IPA symbol or sound representation
  highlight: string; // The part of the word to highlight (e.g., "a" in "cat")
  image?: string; // Optional emoji or image URL
}

export interface GameMapObject {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  type: 'tree' | 'cloud' | 'mountain' | 'flower';
  wordData: PhonicWord;
  isCorrect: boolean;
}

export interface HistoryRecord {
  phoneme: string;
  word: string;
  result: 'correct' | 'wrong';
  timestamp: number;
}

export type CharacterState = 'walker' | 'scout' | 'knight' | 'wizard' | 'legend';
