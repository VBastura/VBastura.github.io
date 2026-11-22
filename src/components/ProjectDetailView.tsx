import React, { useState } from 'react';
import { Project, ViewRoute } from '../types';
import { ProjectImage } from './ProjectImage';
import { MqpCaseStudy } from './MqpCaseStudy';
import { CombatRobotCaseStudy } from './CombatRobotCaseStudy';
import { MidiMusicBoxCaseStudy } from './MidiMusicBoxCaseStudy';
import { RoboticPanFluteCaseStudy } from './RoboticPanFluteCaseStudy';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  Share2,
  Users,
  UserCheck,
  Camera,
  FileText,
} from 'lucide-react';

interface ProjectDetailViewProps {
  project: Project;
  allProjects: Project[];
  setCurrentRoute: (route: ViewRoute) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  allProjects,
  setCurrentRoute,
}) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'photos'>('case-study');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const isMqp = project.id === 'autonomous-offroad-chassis';
  const isCombatRobot = project.id === 'plastic-combat-robot';
  const isMidiMusicBox = project.id === 'midi-music-box';
  const isPanFlute = project.id === 'robotic-pan-flute';
  const isInProgress = project.statusBadge?.trim().toLowerCase() === 'in progress';

  const projectPhotos = project.photos && project.photos.length > 0
    ? project.photos
    : [
        {
          src: project.coverImage,
          alt: project.title,
        },
      ];

  // Find previous and next projects for navigation
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="py-8 sm:py-12 space-y-12">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => setCurrentRoute('gallery')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>RETURN TO GALLERY</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={handleShare}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          1. HERO
          - Project title + one-line outcome (what it did / achieved).
          - Hero image at natural aspect ratio.
          ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-3">
          {project.statusBadge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/80">
              <span className={`w-2 h-2 rounded-full bg-emerald-500 ${isInProgress ? 'animate-pulse' : ''}`} />
              <span>{project.statusBadge}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-blue-600 dark:text-blue-400">
            <span className="font-semibold uppercase tracking-wider">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>TIMELINE: {project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium max-w-4xl leading-relaxed">
            {project.oneLineOutcome}
          </p>
        </div>

        {/* Hero image at natural aspect ratio */}
        <div
          className={`relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer group bg-slate-50 dark:bg-slate-900/60 mx-auto ${
            isMidiMusicBox ? 'max-w-2xl' : 'max-w-3xl'
          }`}
        >
          <ProjectImage
            src={project.coverImage}
            alt={project.title}
            onClick={() => setLightboxImage(project.coverImage)}
          />
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-slate-950/80 hover:bg-slate-950 text-white rounded-lg text-xs font-mono flex items-center gap-1.5 backdrop-blur-md transition-colors shadow-lg pointer-events-none opacity-0 group-hover:opacity-100">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen Visual</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SUMMARY STRIP (compact row of labeled fields)
          - Role | Team size | Timeline | Tools (four cells)
          ========================================================================= */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
          {/* Role */}
          <div className="space-y-1 sm:pr-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Role</span>
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {project.summaryStrip.role}
            </div>
          </div>

          {/* Team Size */}
          <div className="pt-3 sm:pt-0 sm:px-4 space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Team Size</span>
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {project.summaryStrip.teamSize}
            </div>
          </div>

          {/* Timeline */}
          <div className="pt-3 sm:pt-0 sm:px-4 space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Timeline
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {project.summaryStrip.timeline}
            </div>
          </div>

          {/* Tools */}
          <div className="pt-3 sm:pt-0 sm:pl-4 space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tools
            </div>
            <div
              className={`text-xs font-mono font-medium text-slate-800 dark:text-slate-200 leading-relaxed ${
                isCombatRobot || isMidiMusicBox || isPanFlute ? '' : 'line-clamp-3'
              }`}
            >
              {project.summaryStrip.tools}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TAB NAVIGATION: Case Study Breakdown vs Project Photos
          (Hidden for projects with a single Case Study Breakdown view)
          ========================================================================= */}
      {!isMidiMusicBox && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-px">
          <div className="flex gap-4 sm:gap-8">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`pb-3 text-sm font-mono flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'case-study'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Case Study Breakdown</span>
            </button>

            <button
              onClick={() => setActiveTab('photos')}
              className={`pb-3 text-sm font-mono flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'photos'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Project Photos</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
                  activeTab === 'photos'
                    ? 'bg-blue-600 text-white dark:bg-blue-500 font-bold'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold'
                }`}
              >
                {projectPhotos.length}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 1: CASE STUDY BREAKDOWN
          ========================================================================= */}
      {activeTab === 'case-study' && (
        <div className="space-y-14 animate-in fade-in duration-200">
          {isMqp && <MqpCaseStudy onInspectImage={(src) => setLightboxImage(src)} />}
          {isCombatRobot && <CombatRobotCaseStudy onInspectImage={(src) => setLightboxImage(src)} />}
          {isMidiMusicBox && <MidiMusicBoxCaseStudy onInspectImage={(src) => setLightboxImage(src)} />}
          {isPanFlute && <RoboticPanFluteCaseStudy onInspectImage={(src) => setLightboxImage(src)} />}
        </div>
      )}

      {/* =========================================================================
          TAB 2: PROJECT PHOTOS
          ========================================================================= */}
      {activeTab === 'photos' && (
        <section className="space-y-6 animate-in fade-in duration-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Camera className="w-4 h-4" />
              <span>PROJECT PHOTOS & VISUAL DOCUMENTATION</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Visual Documentation & Engineering Artifacts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {projectPhotos.map((photo, idx) => (
              <figure
                key={idx}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all flex flex-col justify-between"
              >
                <ProjectImage
                  src={photo.src}
                  alt={photo.alt}
                  onClick={() => setLightboxImage(photo.src)}
                />

                {photo.caption && (
                  <figcaption className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {photo.caption}
                    </p>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Navigation to Next / Prev Projects */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={() => setCurrentRoute(`project-${prevProject.id}`)}
          className="text-left group cursor-pointer"
        >
          <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <span>PREVIOUS PROJECT</span>
          </div>
          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate max-w-[200px] sm:max-w-xs">
            {prevProject.title}
          </div>
        </button>

        <button
          onClick={() => setCurrentRoute(`project-${nextProject.id}`)}
          className="text-right group cursor-pointer"
        >
          <div className="text-[11px] font-mono text-slate-500 flex items-center justify-end gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <span>NEXT PROJECT</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </div>
          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate max-w-[200px] sm:max-w-xs">
            {nextProject.title}
          </div>
        </button>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[88vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <img
              src={lightboxImage}
              alt="Fullscreen inspection"
              className="w-full h-full object-contain max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};
