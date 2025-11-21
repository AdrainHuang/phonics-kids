import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Square, Settings, Volume2, Award, XCircle, CheckCircle2 } from 'lucide-react';
import { PHONICS_DATA } from './data';
import { GameMapObject, HistoryRecord, PhonicWord } from './types';
import { Character } from './components/Character';
import { MapObject } from './components/MapObject';
import { Fireworks } from './components/Fireworks';

const App: React.FC = () => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [intervalTime, setIntervalTime] = useState(2000); // ms
  const [currentPhonemeWord, setCurrentPhonemeWord] = useState<PhonicWord | null>(null);
  const [mapObjects, setMapObjects] = useState<GameMapObject[]>([]);
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');
  const [showResults, setShowResults] = useState(false);

  // Refs for timers
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Audio Helper
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop previous
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for kids
      utterance.pitch = 1.1; // Slightly higher
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const generateLevel = useCallback(() => {
    // 1. Pick a random target from data
    const targetIndex = Math.floor(Math.random() * PHONICS_DATA.length);
    const target = PHONICS_DATA[targetIndex];
    setCurrentPhonemeWord(target);

    // Speak the sound (phoneme) or the word? The prompt says "carries a phonetic symbol... makes a sound".
    // Kids might not understand raw IPA sounds alone, so let's say "Find the sound... [Sound]" or just the sound.
    // To be effective, we might say the phoneme sound. Since TTS struggles with pure IPA, we might approximate or just beep.
    // BETTER: Speak the word's sound part? Or just say the phoneme like "Ah" for /ae/.
    // Simplification: The character makes a "Sound". Let's try to speak the phoneme description or just a generic sound effect + the visual bubble.
    // Actually, for Phonics, usually you hear the *sound*. Let's try to speak the phoneme.
    // If TTS fails, we rely on the visual bubble.
    
    // Let's make it fun: The character says the phoneme.
    // Since mapping IPA to TTS is hard, we will say "Find the sound for... [Word]" effectively, or just emit a sound.
    // Let's try to speak the phoneme "Short A" or similar if we had mapped it, but here we will play a generic "Listen!" and show the symbol.
    // Wait, requirement: "User matches pronunciation to word".
    // Let's speak the *word* that represents the sound, or just the sound if possible.
    // Hack: We will speak the word clearly. "Find: Cat".
    
    speak(`Find... ${target.word}`);

    // 2. Generate Map Objects
    const newObjects: GameMapObject[] = [];
    
    // Add the correct object
    newObjects.push({
      id: Date.now() + '-correct',
      x: 10 + Math.random() * 30, // Left side to avoid overlapping center too much
      y: 10 + Math.random() * 80,
      type: ['tree', 'cloud', 'mountain', 'flower'][Math.floor(Math.random() * 4)] as any,
      wordData: target,
      isCorrect: true
    });

    // Add distractors (wrong phonemes)
    const distractorsCount = 2;
    for (let i = 0; i < distractorsCount; i++) {
        let distractor: PhonicWord;
        do {
            distractor = PHONICS_DATA[Math.floor(Math.random() * PHONICS_DATA.length)];
        } while (distractor.phoneme === target.phoneme); // Ensure different phoneme category

        newObjects.push({
            id: Date.now() + `-wrong-${i}`,
            x: 60 + Math.random() * 30, // Right side
            y: 10 + Math.random() * 80,
            type: ['tree', 'cloud', 'mountain', 'flower'][Math.floor(Math.random() * 4)] as any,
            wordData: distractor,
            isCorrect: false
        });
    }

    setMapObjects(newObjects);
  }, [speak]);

  // Start Game
  const handleStart = () => {
    setIsPlaying(true);
    setShowResults(false);
    setScore(0);
    setHistory([]);
    setMapObjects([]);
    setFeedback('none');
    generateLevel(); // Immediate first turn
  };

  // Stop Game
  const handleStop = () => {
    setIsPlaying(false);
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    window.speechSynthesis.cancel();
    setShowResults(true);
  };

  // Game Loop
  useEffect(() => {
    if (isPlaying) {
      gameLoopRef.current = setInterval(() => {
        // Only generate new level if we haven't clicked yet? 
        // Requirement: "Every 2 seconds it emits a sound... objects appear".
        // It implies a constant stream. Let's clear old objects and show new ones to keep pace.
        generateLevel();
      }, intervalTime);
    }

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPlaying, intervalTime, generateLevel]);

  // Interaction
  const handleObjectClick = (obj: GameMapObject) => {
    if (!isPlaying) return;

    // Visual Feedback
    const isCorrect = obj.isCorrect;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    
    // Audio Feedback
    const audio = new Audio(isCorrect ? 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3' : 'https://codeskulptor-demos.commondatastorage.googleapis.com/assets/soundfx/hit.ogg'); 
    audio.volume = 0.2;
    audio.play().catch(() => {}); // Ignore auto-play errors

    // Score logic
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setScore(s => Math.max(0, s - 1));
    }

    // History Log
    if (currentPhonemeWord) {
      setHistory(prev => [...prev, {
        phoneme: currentPhonemeWord.phoneme,
        word: obj.wordData.word,
        result: isCorrect ? 'correct' : 'wrong',
        timestamp: Date.now()
      }]);
    }

    // Clear feedback after short delay
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedback('none');
      // Force next round immediately on click to keep flow? 
      // Or wait for interval. Let's wait for interval to keep rhythm, 
      // but remove objects so user doesn't spam click.
      setMapObjects([]); 
      if(gameLoopRef.current) {
          clearInterval(gameLoopRef.current);
          generateLevel(); // Instant next
          // Restart loop
          gameLoopRef.current = setInterval(generateLevel, intervalTime);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-green-300 relative font-fredoka overflow-hidden select-none">
      
      {/* Feedback Overlay */}
      {feedback === 'correct' && <Fireworks />}
      {feedback !== 'none' && (
        <div className={`fixed inset-0 z-40 flex items-center justify-center pointer-events-none animate-pop`}>
          <div className={`text-6xl md:text-8xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] ${feedback === 'correct' ? 'text-yellow-400' : 'text-red-500'}`}>
            {feedback === 'correct' ? 'WELL DONE!' : 'WRONG!'}
          </div>
        </div>
      )}

      {/* HUD */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-30 pointer-events-none">
        {/* Score Board */}
        <div className="bg-white/90 backdrop-blur shadow-xl rounded-3xl p-4 border-4 border-yellow-400 flex flex-col items-center pointer-events-auto">
          <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Score</span>
          <span className="text-4xl font-black text-yellow-500">{score}</span>
        </div>

        {/* Controls (Top Right) */}
        <div className="flex flex-col gap-2 items-end pointer-events-auto">
          {!isPlaying ? (
            <button 
              onClick={handleStart}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all flex items-center gap-2"
            >
              <Play size={24} fill="currentColor" /> START GAME
            </button>
          ) : (
            <button 
              onClick={handleStop}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_0_rgb(185,28,28)] active:shadow-none active:translate-y-1 transition-all flex items-center gap-2"
            >
              <Square size={24} fill="currentColor" /> STOP
            </button>
          )}

          {/* Interval Setting (Only when not playing) */}
          {!isPlaying && (
            <div className="bg-white/90 p-3 rounded-2xl shadow-md mt-2">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <Settings size={16} />
                <span className="text-sm font-bold">Speed: {intervalTime/1000}s</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="5000" 
                step="500"
                value={intervalTime}
                onChange={(e) => setIntervalTime(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      {/* Game Area */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Environment Background Decor */}
        <div className="absolute bottom-0 w-full h-1/3 bg-green-400 rounded-t-[50%] scale-125 translate-y-10 opacity-80"></div>
        <div className="absolute bottom-0 w-full h-1/4 bg-green-500 rounded-t-[30%] scale-150 translate-y-20 opacity-90"></div>

        {/* Character (Center) */}
        <Character score={score} currentPhoneme={isPlaying && currentPhonemeWord ? currentPhonemeWord.phoneme : null} />

        {/* Floating Objects */}
        {mapObjects.map((obj) => (
          <MapObject key={obj.id} obj={obj} onClick={handleObjectClick} />
        ))}

      </div>

      {/* Results Modal */}
      {showResults && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-pop">
            <div className="bg-sky-400 p-6 text-center">
              <h2 className="text-3xl font-black text-white mb-2">Adventure Report</h2>
              <div className="text-6xl mb-2">🏆</div>
              <p className="text-white font-bold text-xl">Final Score: {score}</p>
            </div>
            
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                <Award className="text-yellow-500" /> Performance Log
              </h3>
              
              {history.length === 0 ? (
                <p className="text-slate-400 text-center py-8">No attempts made yet.</p>
              ) : (
                <div className="space-y-3">
                  {history.map((record, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${record.result === 'correct' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                           {record.result === 'correct' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{record.word}</p>
                          <p className="text-xs text-slate-500">Target: {record.phoneme}</p>
                        </div>
                      </div>
                      <span className={`font-bold text-sm ${record.result === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
                        {record.result === 'correct' ? '+1' : '-1'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-center">
              <button 
                onClick={() => setShowResults(false)}
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Intro / Overlay when idle */}
      {!isPlaying && !showResults && (
        <div className="absolute bottom-10 w-full text-center pointer-events-none">
          <p className="text-green-800 font-bold text-lg opacity-60">Press Start to Begin Exploring!</p>
        </div>
      )}
    </div>
  );
};

export default App;