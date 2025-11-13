
import React from 'react';
import { Professional } from '../types';
import { Star, Verified, ArrowLeft, Briefcase, Music, SlidersHorizontal, User, ExternalLink, MessageSquare } from 'lucide-react';

interface ProfilePageProps {
  professional: Professional;
  onStartProject: (professional: Professional) => void;
  onNavigateBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ professional, onStartProject, onNavigateBack }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <button onClick={onNavigateBack} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-6 transition-colors">
        <ArrowLeft size={20} />
        Back to search
      </button>

      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="p-8 bg-gray-800 border-b border-gray-700">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <img src={professional.avatarUrl} alt={professional.name} className="w-32 h-32 rounded-full border-4 border-orange-500" />
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-white">{professional.name}</h1>
                {professional.verified && (
                  <div className="flex items-center gap-1 bg-blue-500 text-white px-2 py-0.5 rounded-full text-sm">
                    <Verified size={16} />
                    <span>Verified</span>
                  </div>
                )}
              </div>
              <p className="text-xl text-orange-400 mt-1">{professional.role}</p>
              <div className="flex items-center gap-4 text-gray-300 mt-2">
                <div className="flex items-center gap-1">
                  <Star size={18} className="text-yellow-400" />
                  <span>{professional.rating.toFixed(1)} ({professional.reviewCount} reviews)</span>
                </div>
                <span>•</span>
                <span>{professional.location}</span>
              </div>
            </div>
            <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <button 
                    onClick={() => onStartProject(professional)}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
                >
                    <MessageSquare size={20}/>
                    Start Project
                </button>
                 <p className="text-center text-sm text-gray-400 mt-2">from <span className="font-bold text-white">${professional.rate}/hr</span></p>
            </div>
          </div>
        </div>

        {/* Profile Body */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <section>
              <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-orange-400"><User size={24}/> Bio</h2>
              <p className="text-gray-300 leading-relaxed">{professional.bio}</p>
            </section>

            {/* Portfolio */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-orange-400"><Music size={24}/> Portfolio</h2>
              <div className="flex gap-4">
                {professional.portfolioLinks.spotify && (
                    <a href={professional.portfolioLinks.spotify} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-green-500/10 border-2 border-green-500 text-green-400 font-bold py-3 px-4 rounded-lg hover:bg-green-500/20 transition-colors flex items-center justify-center gap-2">
                        <ExternalLink size={20}/> Spotify
                    </a>
                )}
                 {professional.portfolioLinks.soundcloud && (
                    <a href={professional.portfolioLinks.soundcloud} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-orange-500/10 border-2 border-orange-500 text-orange-400 font-bold py-3 px-4 rounded-lg hover:bg-orange-500/20 transition-colors flex items-center justify-center gap-2">
                        <ExternalLink size={20}/> SoundCloud
                    </a>
                )}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {/* Services */}
            <section>
                <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-orange-400"><Briefcase size={24}/> Services</h2>
                 <div className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-200">{professional.role}</span>
                        <span className="font-bold text-green-400 text-lg">${professional.rate}/hr</span>
                    </div>
                     <div className="mt-2 flex flex-wrap gap-2">
                        {professional.genres.map(genre => (
                            <span key={genre} className="text-xs font-medium bg-gray-600 text-gray-300 px-2 py-1 rounded-full">{genre}</span>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Gear List */}
            <section>
              <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-orange-400"><SlidersHorizontal size={24}/> Gear List</h2>
              <ul className="space-y-2">
                {professional.gear.map((item, index) => (
                  <li key={index} className="text-gray-300 bg-gray-700/50 px-3 py-2 rounded-md">{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
