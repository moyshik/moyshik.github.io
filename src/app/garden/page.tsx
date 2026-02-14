"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Cloud, Sun, Wind, Flower } from "lucide-react";

type FlowerType = {
  id: number;
  x: number;
  y: number;
  type: "daisy" | "tulip" | "rose" | "sunflower" | "lavender";
  scale: number;
  rotation: number;
  age: number;
};

export default function Garden() {
  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize with some flowers
  useEffect(() => {
    const initialFlowers: FlowerType[] = [];
    for (let i = 0; i < 5; i++) {
      initialFlowers.push(createRandomFlower(
        Math.random() * 80 + 10, // 10-90% width
        Math.random() * 30 + 60  // 60-90% height (bottom area)
      ));
    }
    setFlowers(initialFlowers);
  }, []);

  const createRandomFlower = (x: number, y: number): FlowerType => {
    const types: FlowerType["type"][] = ["daisy", "tulip", "rose", "sunflower", "lavender"];
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      type: types[Math.floor(Math.random() * types.length)],
      scale: 0, // Start small for grow animation
      rotation: Math.random() * 20 - 10,
      age: 0,
    };
  };

  const handlePlant = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Only plant if clicking below the "sky" (approx top 40%)
    if (y > 40) {
      const newFlower = createRandomFlower(x, y);
      setFlowers((prev) => [...prev, { ...newFlower, scale: 0.1 }]); // Start visible
      
      // Animate growth
      setTimeout(() => {
        setFlowers(prev => prev.map(f => f.id === newFlower.id ? { ...f, scale: Math.random() * 0.5 + 0.8 } : f));
      }, 50);
    }
  };

  const waterGarden = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Make everything grow a bit and wiggle
    setFlowers(prev => prev.map(f => ({
      ...f,
      scale: Math.min(f.scale * 1.1, 1.5),
      rotation: Math.random() * 30 - 15
    })));
  };

  const resetGarden = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlowers([]);
  };

  return (
    <main 
      ref={containerRef}
      onClick={handlePlant}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-green-100 cursor-cell selection:bg-pink-100"
    >
      {/* Sun & Clouds */}
      <div className="absolute top-10 right-10 text-yellow-300 animate-spin-slow opacity-80 pointer-events-none">
        <Sun size={80} fill="currentColor" />
      </div>
      <div className="absolute top-20 left-[10%] animate-float delay-0 text-white opacity-80 pointer-events-none">
        <Cloud size={64} fill="currentColor" stroke="none" />
      </div>
      <div className="absolute top-32 right-[20%] animate-float delay-1000 text-white opacity-70 pointer-events-none">
        <Cloud size={48} fill="currentColor" stroke="none" />
      </div>

      {/* Navigation & Controls */}
      <div className="absolute top-6 left-6 z-50 flex gap-4">
         <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-gray-600 hover:text-pink-600 hover:bg-white shadow-sm transition-all hover:scale-105"
            onClick={(e) => e.stopPropagation()}
        >
            <ArrowLeft size={18} />
            <span className="font-semibold text-sm">Back</span>
        </Link>
      </div>

      <div className="absolute top-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
         <div className="bg-white/60 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm text-center">
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
                Zen Garden
            </h1>
            <p className="text-xs text-gray-500">Click anywhere to plant 🌱</p>
         </div>
         <div className="flex gap-2 pointer-events-auto">
            <button 
                onClick={waterGarden}
                className="p-3 bg-blue-100/80 hover:bg-blue-200 text-blue-600 rounded-full shadow-sm transition-all hover:scale-110 active:scale-95"
                title="Water flowers"
            >
                <Wind size={20} />
            </button>
            <button 
                onClick={resetGarden}
                className="p-3 bg-red-100/80 hover:bg-red-200 text-red-500 rounded-full shadow-sm transition-all hover:scale-110 active:scale-95"
                title="Clear garden"
            >
                <Flower size={20} className="rotate-180" />
            </button>
         </div>
      </div>

      {/* Ground/Grass Area Hint */}
      <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-green-200/50 to-transparent pointer-events-none"></div>

      {/* Flowers */}
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute transition-all duration-700 ease-out origin-bottom"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            transform: `translate(-50%, -100%) scale(${flower.scale}) rotate(${flower.rotation}deg)`,
          }}
        >
           <FlowerIcon type={flower.type} />
        </div>
      ))}
    </main>
  );
}

const FlowerIcon = ({ type }: { type: FlowerType["type"] }) => {
    switch (type) {
        case "daisy":
            return (
                <div className="relative group">
                    <div className="w-1 h-12 bg-green-500/80 mx-auto rounded-full origin-bottom"></div>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white drop-shadow-sm">
                         <Flower size={32} fill="white" className="text-yellow-400" />
                    </div>
                </div>
            );
        case "tulip":
            return (
                 <div className="relative group">
                    <div className="w-1.5 h-14 bg-green-600/80 mx-auto rounded-full origin-bottom"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-pink-500 drop-shadow-sm">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="transform group-hover:scale-110 transition-transform">
                            <path d="M12 2C8.5 2 5.5 4.5 5 8C4.5 11.5 6 14 8 15V22H16V15C18 14 19.5 11.5 19 8C18.5 4.5 15.5 2 12 2Z" />
                        </svg>
                    </div>
                </div>
            );
        case "rose":
            return (
                 <div className="relative group">
                    <div className="w-1 h-10 bg-green-700/80 mx-auto rounded-full origin-bottom"></div>
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500 drop-shadow-sm">
                        <Flower size={36} fill="currentColor" strokeWidth={1.5} className="text-red-700 group-hover:rotate-12 transition-transform" />
                    </div>
                </div>
            );
         case "sunflower":
            return (
                 <div className="relative group">
                    <div className="w-2 h-20 bg-green-600/80 mx-auto rounded-full origin-bottom"></div>
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-500 drop-shadow-sm">
                        <Sun size={40} fill="currentColor" className="text-orange-600 animate-pulse-slow" />
                    </div>
                </div>
            );
        case "lavender":
            return (
                 <div className="relative group">
                    <div className="w-0.5 h-16 bg-green-400/80 mx-auto rounded-full origin-bottom"></div>
                     <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-purple-400 drop-shadow-sm">
                        <Flower size={28} fill="currentColor" className="text-purple-600" />
                    </div>
                </div>
            );
        default:
            return null;
    }
};
