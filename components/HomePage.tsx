
import React from 'react';
import { MicVocal, Globe, Send, Music, Sparkles } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-orange-600/20 text-orange-400 p-4 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

const HomePage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert('Thank you for your submission! We will be in touch if your sound is a fit for Fire Music.');
  };

  return (
    <div className="space-y-24 md:space-y-32">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 rounded-lg overflow-hidden border border-gray-700">
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <img src="https://picsum.photos/seed/studio/1600/900" alt="Recording Studio" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-20 container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
                    Ignite Your Music Career
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
                    Fire Music is a full-service record label for the next generation of artists. We provide the tools, team, and passion to turn your sound into a global phenomenon.
                </p>
                <a 
                    href="#submit" 
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block animate-bounce-short"
                >
                    Submit Your Demo
                </a>
            </div>
        </section>

        {/* Services Section */}
        <section id="services">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">What We Offer</h2>
                <p className="text-gray-400 mt-2 max-w-2xl mx-auto">From pristine recordings to global stage, we've got you covered.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard icon={<MicVocal size={32} />} title="Recording & Production">
                    Our state-of-the-art studio is equipped with SSL consoles, Neumann mics, and Pro Tools HDX to capture your music in its highest fidelity.
                </ServiceCard>
                <ServiceCard icon={<Sparkles size={32} />} title="A&R and Development">
                    We don't just sign artists, we build careers. Our A&R team works with you to refine your sound, image, and artistic vision.
                </ServiceCard>
                <ServiceCard icon={<Globe size={32} />} title="Global Distribution">
                    Get your music on Spotify, Apple Music, and every major platform. We handle the logistics so you can focus on creating.
                </ServiceCard>
            </div>
        </section>
        
        {/* Demo Submission Section */}
        <section id="submit" className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
                    <Music /> Got What It Takes?
                </h2>
                <p className="text-gray-400 mt-2">Send us a link to your best track. We listen to everything.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Artist Name</label>
                        <input type="text" id="name" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Contact Email</label>
                        <input type="email" id="email" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                </div>
                <div>
                    <label htmlFor="musicLink" className="block text-sm font-medium text-gray-300 mb-1">Link to Your Music (SoundCloud, YouTube, etc.)</label>
                    <input type="url" id="musicLink" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500" />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Tell Us About Yourself (Optional)</label>
                    <textarea id="message" rows={4} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md transition-colors text-lg">
                        <Send size={20} />
                        Submit Music
                    </button>
                </div>
            </form>
        </section>
        
    </div>
  );
};

export default HomePage;