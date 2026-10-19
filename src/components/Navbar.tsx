import React from 'react';
import { ViewRoute, Profile } from '../types';
import { Sun, Moon, FileText } from 'lucide-react';

interface NavbarProps {
  currentRoute: ViewRoute;
  setCurrentRoute: (route: ViewRoute) => void;
  profile: Profile;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
  onOpenGitHubGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  setCurrentRoute,
  profile,
  darkMode,
  setDarkMode,
  onOpenResume,
  onOpenGitHubGuide,
}) => {
  const isHome = currentRoute === 'home';
  const isGallery = currentRoute === 'gallery';
  const isProject = currentRoute.startsWith('project-');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setCurrentRoute('home')}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="flex items-center gap-2">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {profile.name}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
              / WPI BS/MS '27
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium">
          <button
            onClick={() => setCurrentRoute('home')}
            className={`whitespace-nowrap transition-colors cursor-pointer py-1 ${
              isHome
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => setCurrentRoute('gallery')}
            className={`whitespace-nowrap transition-colors cursor-pointer py-1 ${
              isGallery || isProject
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Projects
          </button>

          <button
            onClick={onOpenResume}
            className="whitespace-nowrap transition-colors cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Resume</span>
          </button>
        </nav>

        {/* Zone 3: Theme toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </header>
  );
};
