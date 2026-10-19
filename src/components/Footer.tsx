import React from 'react';
import { Profile, ViewRoute } from '../types';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  profile: Profile;
  setCurrentRoute: (route: ViewRoute) => void;
  onOpenResume: () => void;
  onOpenGitHubGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  setCurrentRoute,
  onOpenResume,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              {profile.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {profile.degree} · {profile.institution}
            </div>
          </div>

          {/* Quick links matching top nav: Overview, Projects, Resume */}
          <nav className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <button
              onClick={() => setCurrentRoute('home')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => setCurrentRoute('gallery')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={onOpenResume}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Resume
            </button>
          </nav>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name}.
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profile.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {profile.email}
            </a>
            <span aria-hidden="true">·</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://github.com/VBastura" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
