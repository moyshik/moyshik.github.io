import Link from "next/link";
import { Heart, Cloud, Sparkles, ArrowLeft, ExternalLink, Code, Image as ImageIcon, Layout } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "RedFlag",
      description: "A mobile app that you can use to scan barcode and check for allergens.",
      tags: ["React Native", "Expo"],
      icon: <Layout size={24} className="text-red-500" />,
      color: "bg-red-100/50",
    },
    {
      title: "MindSpace Bangladesh",
      description: "Mental health focused content platform serving as a resource hub for articles and educational content.",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      icon: <Heart size={24} className="text-teal-500" />,
      color: "bg-teal-100/50",
    },
    {
      title: "Wikipedia Scraper",
      description: "Auto link finder (crawler) and scraper that saves data in JSON-LD.",
      tags: ["Python", "Node.js", "TypeScript"],
      icon: <Code size={24} className="text-gray-600" />,
      color: "bg-gray-200/50",
    },
    {
      title: "E-commerce Web Demo",
      description: "Fully featured e-commerce app with user profile, order tracking, dashboard, merchant panel, and algorithmic search.",
      tags: ["TypeScript", "Next.js", "MongoDB"],
      icon: <ImageIcon size={24} className="text-orange-500" />,
      color: "bg-orange-100/50",
    },
    {
      title: "Notes Web",
      description: "A modern marketplace platform for students to buy and sell study notes.",
      tags: ["Next.js 16", "TypeScript", "MongoDB"],
      icon: <Sparkles size={24} className="text-purple-500" />,
      color: "bg-purple-100/50",
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start p-6 overflow-hidden selection:bg-pink-100 selection:text-pink-600">
      {/* Background Decorations - Same as Home */}
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

      {/* Header Section */}
      <div className="z-10 w-full max-w-4xl mt-10 mb-8 flex items-center justify-between">
        <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-105"
        >
            <ArrowLeft size={18} />
            <span className="font-semibold text-sm">Back Home</span>
        </Link>
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            My Portfolio
        </h1>
        <div className="w-24"></div> {/* Spacer for centering */}
      </div>

      {/* Projects Grid */}
      <div className="z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {projects.map((project, index) => (
            <div 
                key={index}
                className="glass-panel p-6 rounded-[2rem] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 group"
            >
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                    </div>
                    <Link href="#" className="p-2 rounded-full hover:bg-white/50 text-gray-400 hover:text-pink-500 transition-colors">
                        <ExternalLink size={20} />
                    </Link>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/60 rounded-full text-xs font-semibold text-gray-500 border border-white/50">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        ))}
      </div>

      <footer className="mt-auto pb-6 text-gray-400 text-xs font-medium opacity-60">
        <p>Made with 💖 and code</p>
      </footer>
    </main>
  );
}
