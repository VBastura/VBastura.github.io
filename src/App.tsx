/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { GalleryView } from './components/GalleryView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { ResumeModal } from './components/ResumeModal';
import { GitHubPagesModal } from './components/GitHubPagesModal';
import { ProfileEditDrawer } from './components/ProfileEditDrawer';
import { Footer } from './components/Footer';
import { initialProfile, initialProjects } from './data/portfolioData';
import { Profile, Project, ViewRoute } from './types';
import { downloadResumePdf } from './utils/generateResumePdf';

export default function App() {
  // Theme state with localStorage persistence and system preference fallback
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Profile data state - resets to latest initialProfile if schema changes
  const [profile, setProfile] = useState<Profile>(() => {
    const saved = localStorage.getItem('portfolio-profile-v2');
    if (saved) {
      try {
        return { ...initialProfile, ...JSON.parse(saved) };
      } catch {
        return initialProfile;
      }
    }
    return initialProfile;
  });

  const [projects] = useState<Project[]>(initialProjects);

  // Hash-based routing to ensure 100% zero-config GitHub Pages compatibility
  const getRouteFromHash = (): ViewRoute => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'gallery') return 'gallery';
    if (hash.startsWith('project/')) {
      const id = hash.replace('project/', '');
      return `project-${id}` as ViewRoute;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRouteState] = useState<ViewRoute>(getRouteFromHash);

  // Modal dialog states
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGitHubGuideOpen, setIsGitHubGuideOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  // Update hash when route changes
  const setCurrentRoute = (route: ViewRoute) => {
    setCurrentRouteState(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (route === 'home') {
      window.location.hash = '#/';
    } else if (route === 'gallery') {
      window.location.hash = '#/gallery';
    } else if (route.startsWith('project-')) {
      const id = route.replace('project-', '');
      window.location.hash = `#/project/${id}`;
    }
  };

  // Listen to hash changes (browser back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRouteState(getRouteFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync theme with HTML class
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  // Handle saving profile changes
  const handleSaveProfile = (updated: Profile) => {
    setProfile(updated);
    localStorage.setItem('portfolio-profile-v2', JSON.stringify(updated));
  };

  // Reset profile to defaults
  const handleResetProfile = () => {
    setProfile(initialProfile);
    localStorage.removeItem('portfolio-profile-v2');
  };

  // Find active project if route is project detail
  const activeProjectId = currentRoute.startsWith('project-')
    ? currentRoute.replace('project-', '')
    : null;
  const activeProject = projects.find((p) => p.id === activeProjectId);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      
      {/* Background Engineering Precision Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 engineering-grid opacity-60" />

      {/* Main App Container */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top Bar */}
        <Navbar
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
          profile={profile}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
        />

        {/* View Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {currentRoute === 'home' && (
            <HomeView
              profile={profile}
              projects={projects}
              setCurrentRoute={setCurrentRoute}
              onOpenResume={() => setIsResumeOpen(true)}
              onDownloadResumePdf={() => downloadResumePdf(profile)}
              onOpenEditProfile={() => setIsEditProfileOpen(true)}
            />
          )}

          {currentRoute === 'gallery' && (
            <GalleryView
              projects={projects}
              setCurrentRoute={setCurrentRoute}
            />
          )}

          {currentRoute.startsWith('project-') && (
            <>
              {activeProject ? (
                <ProjectDetailView
                  project={activeProject}
                  allProjects={projects}
                  setCurrentRoute={setCurrentRoute}
                />
              ) : (
                <div className="py-20 text-center space-y-4">
                  <h2 className="text-2xl font-bold">Project Not Found</h2>
                  <p className="text-slate-500">The requested mechanical engineering project could not be located.</p>
                  <button
                    onClick={() => setCurrentRoute('gallery')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                  >
                    Back to Projects
                  </button>
                </div>
              )}
            </>
          )}
        </main>

        {/* Footer */}
        <Footer
          profile={profile}
          setCurrentRoute={setCurrentRoute}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
        />
      </div>

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />

      <GitHubPagesModal
        isOpen={isGitHubGuideOpen}
        onClose={() => setIsGitHubGuideOpen(false)}
        profile={profile}
        projects={projects}
      />

      <ProfileEditDrawer
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefault={handleResetProfile}
      />

    </div>
  );
}
