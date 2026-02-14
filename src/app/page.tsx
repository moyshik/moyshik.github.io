import Link from "next/link";
import Image from "next/image";
import {Instagram, Github, Heart, Sparkles, Cloud, Music, Coffee, Linkedin, Facebook, Flower } from "lucide-react";

export default function Home() {
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/oii.seek", icon: <Instagram size={20} />, color: "hover:bg-pink-100 hover:text-pink-600" },
    { name: "Linkedin", href: "https://www.linkedin.com/in/moyshik", icon: <Linkedin size={20} />, color: "hover:bg-blue-100 hover:text-blue-500" },
    { name: "GitHub", href: "https://github.com/moyshik7", icon: <Github size={20} />, color: "hover:bg-purple-100 hover:text-purple-600" },
    { name: "Facebook", href: "https://www.facebook.com/oii.seek", icon: <Facebook size={20} />, color: "hover:bg-yellow-100 hover:text-yellow-600" },
  ];

  const contentLinks = [
    { title: "My Portfolio", icon: <Sparkles size={16} className="text-yellow-500" />, href: "/portfolio" },
    { title: "Visit My Garden", icon: <Flower size={16} className="text-pink-500" />, href: "/garden" },
    { title: "My Playlist", icon: <Music size={16} className="text-purple-500" />, href: "#" },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 overflow-hidden selection:bg-pink-100 selection:text-pink-600">
        {/* Background Decorations */}
        <div className="absolute top-20 left-[10%] animate-float delay-0 text-pink-200 opacity-60 pointer-events-none">
            <Heart size={48} fill="currentColor" stroke="none" />
        </div>
        <div className="absolute bottom-40 right-[15%] animate-float delay-1000 text-blue-100 opacity-70 pointer-events-none">
            <Cloud size={80} fill="currentColor" stroke="none" />
        </div>
        <div className="absolute top-1/3 right-[10%] animate-pulse text-yellow-200 opacity-60 pointer-events-none">
            <Sparkles size={42} />
        </div>
        <div className="absolute bottom-20 left-[20%] animate-float delay-2000 text-purple-100 opacity-60 pointer-events-none">
            <Cloud size={60} fill="currentColor" stroke="none" />
        </div>

        {/* Main Card */}
        <div className="z-10 w-full max-w-md glass-panel rounded-[2rem] p-8 md:p-10 transform transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] duration-500">
            <div className="flex flex-col items-center text-center space-y-6">
                
                {/* Avatar Section */}
                <div className="relative group cursor-pointer">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm transition-transform duration-500 group-hover:scale-105 bg-white flex items-center justify-center">
                         <Image 
                            src="/profile.jpg" 
                            alt="Profile Avatar" 
                            width={128} 
                            height={128} 
                            className="object-cover w-full h-full"
                         />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-sm border border-pink-100 text-pink-500 z-10">
                        <Heart size={14} fill="currentColor" />
                    </div>
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 font-sans tracking-tight">
                        Oyshik
                    </h1>
                    <p className="text-gray-500 font-medium text-sm md:text-base max-w-[280px] mx-auto leading-relaxed">
                        Med Student &amp; Developer
                        <br/>
                        Creating calm in the chaos ☁️
                    </p>
                </div>

                {/* Social Actions */}
                <div className="flex flex-wrap justify-center gap-4 w-full py-2">
                    {socialLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            aria-label={link.name}
                            className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/60 hover:bg-white backdrop-blur-sm border border-white/40 shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${link.color} text-gray-400 group`}
                        >
                            <span className="transform transition-transform duration-300 group-hover:scale-110">
                                {link.icon}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-50 my-2"></div>

                {/* Content Links */}
                <div className="w-full space-y-3">
                    {contentLinks.map((item) => (
                         <Link 
                            key={item.title}
                            href={item.href} 
                            className="block w-full py-3.5 px-5 rounded-2xl bg-white/40 hover:bg-white/80 backdrop-blur-md border border-white/50 shadow-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md text-gray-600 hover:text-gray-800 font-semibold text-sm flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <span className="p-1.5 bg-white/60 rounded-full text-gray-500 group-hover:text-pink-500 transition-colors">
                                    {item.icon}
                                </span>
                                <span>{item.title}</span>
                            </div>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-pink-400">
                                →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        
        <footer className="mt-12 text-gray-400 text-xs font-medium opacity-60 hover:opacity-100 transition-opacity">
            <p>Welcome to my corner of the web 🌿</p>
        </footer>
    </main>
  );
}
