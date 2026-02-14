"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
	ArrowLeft,
	Play,
	Pause,
	SkipBack,
	SkipForward,
	Volume2,
	VolumeX,
	Heart,
	ListMusic,
	Music,
} from "lucide-react";

type Track = {
	id: number;
	title: string;
	artist: string;
	src: string;
	durationString: string; // approximate for display before load
	color: string;
};

const tracks: Track[] = [
	{
		id: 1,
		title: "Billie Jean",
		artist: "Michael Jackson",
		src: "/audio/Billie Jean - Michael Jackson.mp3",
		durationString: "4:54",
		color: "bg-pink-100",
	},
	{
		id: 2,
		title: "What Makes You Beautiful",
		artist: "One Direction",
		src: "/audio/What Makes You Beautiful - One Direction.mp3",
		durationString: "3:18",
		color: "bg-blue-100",
	},
	{
		id: 3,
		title: "Bhrom",
		artist: "Karnival",
		src: "/audio/Bhrom - Karnival.mp3",
		durationString: "5:32",
		color: "bg-purple-100",
	},
	{
		id: 4,
		title: "Bye Bye Bye",
		artist: "NSYNC",
		src: "/audio/Bye Bye Bye - NSYNC.mp3",
		durationString: "3:20",
		color: "bg-teal-100",
	},
	{
		id: 5,
		title: "Dastaan E",
		artist: "Vishal - Shekhar",
		src: "/audio/Dastaan  E - Vishal - Shekhar.mp3",
		durationString: "7:06",
		color: "bg-orange-100",
	},
	{
		id: 6,
		title: "Everybody",
		artist: "Backstreet Boys",
		src: "/audio/Everybody - Backstreet Boys.mp3",
		durationString: "4:46",
		color: "bg-indigo-100",
	},
	{
		id: 7,
		title: "Matir Roud",
		artist: "Aftermath",
		src: "/audio/Matir Roud - Aftermath.mp3",
		durationString: "4:34",
		color: "bg-green-100",
	},
	{
		id: 8,
		title: "Night Changes",
		artist: "One Direction",
		src: "/audio/Night Changes - One Direction.mp3",
		durationString: "3:46",
		color: "bg-red-100",
	},
	{
		id: 9,
		title: "Saadda Haq",
		artist: "Mohit Chauhan",
		src: "/audio/Saadda Haq - Mohit Chauhan.mp3",
		durationString: "6:03",
		color: "bg-yellow-100",
	},
	{
		id: 10,
		title: "Señorita",
		artist: "Shawn Mendes",
		src: "/audio/Señorita - Shawn Mendes.mp3",
		durationString: "3:11",
		color: "bg-cyan-100",
	},
	{
		id: 11,
		title: "Bella Ciao",
		artist: "Manu Pilas",
		src: "/audio/Bella Ciao - Manu Pilas.mp3",
		durationString: "3:30",
		color: "bg-rose-100",
	},
	{
		id: 12,
		title: "Diddy Heil Epstein",
		artist: "Vexy",
		src: "/audio/Diddy Heil Epstein -  Vexy.mp3",
		durationString: "4:00",
		color: "bg-lime-100",
	},
	{
		id: 13,
		title: "Heil Hitler",
		artist: "Kanye West",
		src: "/audio/HH -Kanye West.mp3",
		durationString: "3:45",
		color: "bg-amber-100",
	},
	{
		id: 14,
		title: "Kim Jung Goon",
		artist: "Hyperbaiter",
		src: "/audio/Kim Jung Goon - Hyperbaiter.mp3",
		durationString: "3:50",
		color: "bg-fuchsia-100",
	},
];

export default function Playlist() {
	const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	const [isMuted, setIsMuted] = useState(false);

	const audioRef = useRef<HTMLAudioElement>(null);
	const currentTrack = tracks[currentTrackIndex];

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current
					.play()
					.catch((e) => console.error("Playback failed:", e));
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying, currentTrackIndex]);

	useEffect(() => {
		// Reset play state when track changes if it was already playing, or auto-play
		if (audioRef.current) {
			audioRef.current.volume = volume;
			if (isPlaying) audioRef.current.play();
		}
	}, [currentTrackIndex, isPlaying, volume]);

	const handleTimeUpdate = () => {
		if (audioRef.current) {
			setCurrentTime(audioRef.current.currentTime);
			setDuration(audioRef.current.duration || 0);
		}
	};

	const handleTrackEnd = () => {
		handleNext();
	};

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	const handleNext = () => {
		setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
	};

	const handlePrev = () => {
		setCurrentTrackIndex(
			(prev) => (prev - 1 + tracks.length) % tracks.length,
		);
	};

	/*
	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		const time = parseFloat(e.target.value);
		if (audioRef.current) {
			audioRef.current.currentTime = time;
			setCurrentTime(time);
		}
	};
	*/

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const vol = parseFloat(e.target.value);
		setVolume(vol);
		if (audioRef.current) {
			audioRef.current.volume = vol;
		}
		setIsMuted(vol === 0);
	};

	const toggleMute = () => {
		if (audioRef.current) {
			const newMuted = !isMuted;
			setIsMuted(newMuted);
			audioRef.current.muted = newMuted;
		}
	};

	/*
	const formatTime = (time: number) => {
		if (isNaN(time)) return "0:00";
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};
	*/

	const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const bar = e.currentTarget;
		const rect = bar.getBoundingClientRect();
		const percent = (e.clientX - rect.left) / rect.width;
		const newTime = percent * duration;
		
		if (audioRef.current && !isNaN(newTime)) {
			audioRef.current.currentTime = newTime;
			setCurrentTime(newTime);
		}
	};

	return (
		<main className="relative flex min-h-screen flex-col bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 selection:bg-pink-100 selection:text-pink-600 font-sans">
			{/* Header */}
			<div className="flex items-center justify-between p-6 z-10 sticky top-0 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
				<Link
					href="/"
					className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 hover:bg-white text-gray-600 hover:text-pink-600 transition-all hover:scale-105 shadow-sm"
				>
					<ArrowLeft size={18} />
					<span className="font-semibold text-sm">Back</span>
				</Link>
				<h1 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-purple-600 flex items-center gap-2">
					<ListMusic size={24} className="text-pink-500" /> My
					Playlist
				</h1>
				<div className="w-20"></div> {/* Spacer */}
			</div>

			{/* Main Content - Track List */}
			<div className="flex-1 w-full max-w-4xl mx-auto p-6 pb-32">
				<div className="glass-panel rounded-3xl overflow-hidden shadow-lg border border-white/40">
					{/* Table Header */}
					<div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 p-4 text-xs font-semibold text-gray-400 border-b border-gray-100 uppercase tracking-wider">
						<div className="w-8 text-center">#</div>
						<div>Title</div>
						<div className="hidden md:block">Duration</div>
						<div className="w-8"></div>
					</div>

					{/* Tracks */}
					<div className="flex flex-col">
						{tracks.map((track, index) => {
							const isActive = index === currentTrackIndex;
							return (
								<div
									key={track.id}
									onClick={() => {
										setCurrentTrackIndex(index);
										setIsPlaying(true);
									}}
									className={`grid grid-cols-[auto_1fr_auto_auto] gap-4 p-4 items-center hover:bg-white/50 transition-colors cursor-pointer group ${isActive ? "bg-pink-50/60" : ""}`}
								>
									<div className="w-8 text-center text-sm font-medium text-gray-400">
										{isActive && isPlaying ? (
											<div className="flex justify-center gap-0.5 h-3 items-end">
												<div className="w-1 bg-pink-500 animate-bounce h-full"></div>
												<div className="w-1 bg-pink-500 animate-[bounce_1.2s_infinite] h-2/3"></div>
												<div className="w-1 bg-pink-500 animate-[bounce_0.8s_infinite] h-1/2"></div>
											</div>
										) : (
											index + 1
										)}
									</div>
									<div className="flex items-center gap-4">
										<div
											className={`w-10 h-10 rounded-lg ${track.color} flex items-center justify-center text-gray-500 shadow-sm`}
										>
											<Music size={18} />
										</div>
										<div>
											<div
												className={`font-semibold ${isActive ? "text-pink-600" : "text-gray-800"}`}
											>
												{track.title}
											</div>
											<div className="text-sm text-gray-500">
												{track.artist}
											</div>
										</div>
									</div>
									<div className="hidden md:block text-sm text-gray-400 font-medium font-mono">
										{track.durationString}
									</div>
									<div className="w-8 text-center">
										<button
											className={`text-gray-300 hover:text-pink-500 transition-colors ${isActive ? "text-pink-500" : ""}`}
										>
											<Heart
												size={18}
												fill={
													isActive
														? "currentColor"
														: "none"
												}
											/>
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Bottom Player Bar */}
			<div className="fixed bottom-0 left-0 right-0 h-20 md:h-24 bg-white/80 backdrop-blur-xl border-t border-white/50 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] px-3 md:px-6 flex items-center justify-between gap-2 md:gap-4 z-50">
				{/* Progress Bar */}
				<div 
					className="absolute top-0 left-0 right-0 h-1 bg-gray-200 cursor-pointer hover:h-1.5 transition-all"
					onClick={handleProgressBarClick}
				>
					<div
						className="h-full bg-linear-to-r from-green-400 to-green-500 transition-all duration-100 pointer-events-none"
						style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
					></div>
				</div>

				<audio
					ref={audioRef}
					src={currentTrack.src}
					onTimeUpdate={handleTimeUpdate}
					onEnded={handleTrackEnd}
				/>

				{/* Current Track Info */}
				<div className="flex items-center gap-2 md:gap-4 shrink min-w-0 flex-1 md:flex-none md:w-1/3">
					<div
						className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl ${currentTrack.color} flex items-center justify-center shadow-sm animate-pulse shrink-0`}
					>
						<Music size={18} className="md:hidden text-gray-600" />
						<Music size={24} className="hidden md:block text-gray-600" />
					</div>
					<div className="overflow-hidden min-w-0">
						<h3 className="font-bold text-sm md:text-base text-gray-800 truncate leading-tight">
							{currentTrack.title}
						</h3>
						<p className="text-xs text-gray-500 truncate">
							{currentTrack.artist}
						</p>
					</div>
					<button className="text-pink-400 hover:text-pink-600 transition-colors ml-2 hidden md:block shrink-0">
						<Heart size={18} />
					</button>
				</div>

				{/* Player Controls */}
				<div className="flex flex-col items-center gap-1 shrink-0 w-auto md:w-1/3 max-w-md">
					<div className="flex items-center gap-3 md:gap-6">
						<button
							onClick={handlePrev}
							className="text-gray-400 hover:text-gray-800 transition-transform active:scale-95"
						>
							<SkipBack size={20} className="md:hidden" fill="currentColor" />
							<SkipBack size={24} className="hidden md:block" fill="currentColor" />
						</button>
						<button
							onClick={handlePlayPause}
							className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md group"
						>
							{isPlaying ? (
								<Pause size={20} fill="currentColor" />
							) : (
								<Play
									size={20}
									fill="currentColor"
									className="translate-x-0.5"
								/>
							)}
						</button>
						<button
							onClick={handleNext}
							className="text-gray-400 hover:text-gray-800 transition-transform active:scale-95"
						>
							<SkipForward size={20} className="md:hidden" fill="currentColor" />
							<SkipForward size={24} className="hidden md:block" fill="currentColor" />
						</button>
					</div>
					{/*
					<div className="hidden md:flex items-center gap-2 w-full text-xs font-mono text-gray-400">
						<span>{formatTime(currentTime)}</span>
						<input
							type="range"
							min="0"
							max={duration || 100}
							value={currentTime}
							onChange={handleSeek}
							className="flex-1 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-pink-500 [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
						/>
						<span>{formatTime(duration)}</span>
					</div>
					*/}
				</div>

				{/* Volume Control - Hidden on mobile */}
				<div className="hidden md:flex items-center justify-end gap-2 w-1/3">
					<button
						onClick={toggleMute}
						className="text-gray-400 hover:text-gray-600"
					>
						{isMuted ? (
							<VolumeX size={20} />
						) : (
							<Volume2 size={20} />
						)}
					</button>
					<input
						type="range"
						min="0"
						max="1"
						step="0.01"
						value={isMuted ? 0 : volume}
						onChange={handleVolumeChange}
						className="w-24 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gray-400 [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:bg-gray-600 transition-all"
					/>
				</div>
			</div>
		</main>
	);
}
