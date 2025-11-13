
import React, { useState } from 'react';
import { Project, ProjectStatus, Message, ProjectFile } from '../types';
import { ArrowLeft, Send, Paperclip, FileText, Download, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';

interface ProjectDashboardProps {
  project: Project;
  onNavigateBack: () => void;
}

// Mock Data for components
const initialMessages: Message[] = [
    { id: '1', sender: 'client', text: 'Hey! Excited to get started. I\'ve just uploaded the stems for the first track, "Summer Haze". Let me know if you have everything you need.', timestamp: '10:30 AM' },
    { id: '2', sender: 'professional', text: 'Got them! Downloading now. Will give them a listen and get back to you with any initial thoughts by EOD. Great to be working with you!', timestamp: '10:32 AM' },
];

const initialFiles: ProjectFile[] = [
    { id: '1', name: 'Summer_Haze_Stems.zip', size: '4.2 GB', type: 'archive', uploadedAt: '2 hours ago', url: '#' },
    { id: '2', name: 'Mix_Notes.pdf', size: '1.2 MB', type: 'document', uploadedAt: '2 hours ago', url: '#' },
];

const statusSteps = [
    ProjectStatus.Initiated,
    ProjectStatus.Funded,
    ProjectStatus.InProgress,
    ProjectStatus.Delivered,
    ProjectStatus.Approved,
];

const PaymentStatus: React.FC<{ project: Project }> = ({ project }) => {
    const currentStatusIndex = statusSteps.indexOf(project.status);
    const commission = project.budget * 0.10;
    const payout = project.budget * 0.90;

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><DollarSign size={22}/> Payment & Escrow</h3>
            <div className="mb-6">
                <ol className="relative border-l border-gray-600">
                    {statusSteps.map((status, index) => (
                        <li key={status} className={`ml-4 mb-6 ${index > currentStatusIndex ? 'opacity-40' : ''}`}>
                            <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-gray-800 
                                ${index <= currentStatusIndex ? 'bg-green-600' : 'bg-gray-600'}`}>
                                <CheckCircle size={14} className="text-white"/>
                            </span>
                            <h4 className="font-semibold text-white">{status}</h4>
                        </li>
                    ))}
                </ol>
            </div>
            
            <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between text-gray-300"><span>Total Project Budget:</span> <span className="font-bold text-white">${project.budget.toFixed(2)}</span></div>
                <div className="flex justify-between text-gray-400 text-sm"><span>Platform Fee (10%):</span> <span className="font-semibold">${commission.toFixed(2)}</span></div>
                <div className="flex justify-between text-green-400"><span>Professional Payout:</span> <span className="font-bold text-lg">${payout.toFixed(2)}</span></div>
            </div>

            {project.status === ProjectStatus.Delivered && (
                <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                    Approve & Release Payment
                </button>
            )}
        </div>
    );
};

const ChatWindow: React.FC<{ project: Project }> = ({ project }) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if(newMessage.trim() === '') return;
        const msg: Message = {
            id: String(Date.now()),
            sender: 'client',
            text: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, msg]);
        setNewMessage('');
    };

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg flex flex-col h-[600px]">
            <div className="p-4 border-b border-gray-700">
                <h3 className="text-xl font-bold">Project Chat</h3>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
                       {msg.sender === 'professional' && <img src={project.professional.avatarUrl} className="w-8 h-8 rounded-full" />}
                       <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'client' ? 'bg-orange-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                           <p className="text-sm">{msg.text}</p>
                           <p className={`text-xs mt-1 ${msg.sender === 'client' ? 'text-orange-200' : 'text-gray-400'} text-right`}>{msg.timestamp}</p>
                       </div>
                       {msg.sender === 'client' && <img src={project.client.avatarUrl} className="w-8 h-8 rounded-full" />}
                    </div>
                ))}
            </div>
            <div className="p-4 border-t border-gray-700">
                <div className="relative">
                    <input 
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="w-full bg-gray-700 border border-gray-600 rounded-full py-3 pl-12 pr-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    />
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                        <Paperclip size={20}/>
                    </button>
                    <button onClick={handleSendMessage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-2">
                        <Send size={20}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

const FileList: React.FC = () => {
    const [files, setFiles] = useState<ProjectFile[]>(initialFiles);
    
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><FileText size={22}/> Project Files</h3>
                <label htmlFor="file-upload" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors cursor-pointer text-sm">
                    Upload File
                </label>
                <input id="file-upload" type="file" className="hidden" />
            </div>
            <div className="space-y-3">
                {files.map(file => (
                    <div key={file.id} className="bg-gray-700/50 p-3 rounded-md flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <FileText className="text-orange-400" size={24}/>
                            <div>
                                <p className="font-semibold text-white">{file.name}</p>
                                <p className="text-sm text-gray-400">{file.size} - {file.uploadedAt}</p>
                            </div>
                        </div>
                        <a href={file.url} download className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                            <Download size={20}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};


const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ project, onNavigateBack }) => {
  return (
    <div className="max-w-7xl mx-auto">
        <button onClick={onNavigateBack} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-6 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
        </button>
      
        <div className="mb-8 p-6 bg-gray-800 border border-gray-700 rounded-lg">
            <h1 className="text-3xl font-bold mb-1">{project.title}</h1>
            <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                    <Users size={18}/>
                    <span>Project with <span className="font-semibold text-orange-400">{project.professional.name}</span></span>
                </div>
                 <span>|</span>
                 <div className="flex items-center gap-2">
                    <Clock size={16}/>
                    <span>Status: <span className="font-semibold text-white">{project.status}</span></span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-8">
                <PaymentStatus project={project} />
                <FileList />
            </div>
            <div className="lg:col-span-2">
                <ChatWindow project={project} />
            </div>
        </div>
    </div>
  );
};

export default ProjectDashboard;
