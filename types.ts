
export enum Role {
  Producer = "Producer",
  MixingEngineer = "Mixing Engineer",
  MasteringEngineer = "Mastering Engineer",
  SessionMusician = "Session Musician",
  VocalProducer = "Vocal Producer",
}

export enum Genre {
  Trap = "Trap",
  Reggaeton = "Reggaeton",
  Pop = "Pop",
  Rock = "Rock",
  EDM = "EDM",
  HipHop = "Hip-Hop",
  RnB = "R&B",
}

export interface Professional {
  id: string;
  name: string;
  role: Role;
  genres: Genre[];
  rate: number;
  location: string;
  verified: boolean;
  avatarUrl: string;
  rating: number;
  reviewCount: number;
  bio: string;
  gear: string[];
  portfolioLinks: {
    soundcloud?: string;
    spotify?: string;
  };
}

export enum ProjectStatus {
  Initiated = "Initiated",
  Funded = "Funded in Escrow",
  InProgress = "In Progress",
  Delivered = "Work Delivered",
  Approved = "Approved & Complete",
  Cancelled = "Cancelled",
}

export interface Project {
  id: string;
  title: string;
  client: { name: string; avatarUrl: string; };
  professional: Professional;
  status: ProjectStatus;
  budget: number;
  description: string;
}

export interface Message {
  id: string;
  sender: 'client' | 'professional';
  text: string;
  timestamp: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  size: string;
  type: 'audio' | 'document' | 'archive';
  uploadedAt: string;
  url: string;
}
