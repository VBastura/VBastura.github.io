import React from 'react';
import { Project, ViewRoute } from '../types';
import { ProjectImage } from './ProjectImage';
import { ArrowRight, Eye } from 'lucide-react';

interface GalleryViewProps {
  projects: Project[];
  setCurrentRoute: (route: ViewRoute) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  projects,
  setCurrentRoute,
}) => {
  return (
    <div className="py-8 sm:py-12 space-y-10">
      {/* Gallery Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>PROJECT GALLERY</span>
            <span aria-hidden="true">·</span>
            <span>{projects.length} CASE STUDIES</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Engineering Projects & Physical Prototypes
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Engineering projects in mechanical design, including CAD, simulation, electronics, and programming, with the decisions and results behind each one.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
            const isInProgress = project.statusBadge?.trim().toLowerCase() === 'in progress';
            return (
            <article
              key={project.id}
              onClick={() => setCurrentRoute(`project-${project.id}`)}
              className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Hover Scrim */}
              <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                {project.statusBadge && (
                  <div className="absolute top-3 left-3 z-30 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wide bg-blue-600 text-white shadow-sm border border-blue-400/30">
                      <span className={`w-1.5 h-1.5 rounded-full bg-blue-200 ${isInProgress ? 'animate-pulse' : ''}`} />
                      {project.statusBadge}
                    </span>
                  </div>
                )}
                <ProjectImage
                  src={project.coverImage}
                  alt={project.title}
                  aspectRatioClass="aspect-[16/10]"
                  blurredBackdrop={true}
                >
                  {/* Hover Scrim Overlay: shows description only (no restated title, no ellipses) */}
                  <div className="absolute inset-0 z-20 bg-slate-950/90 text-white p-5 sm:p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between backdrop-blur-xs pointer-events-none">
                    <div className="flex-1 flex items-center">
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        {project.hoverDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                        View Full Project <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Floating view cue on mobile */}
                  <div className="sm:hidden absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white font-mono flex items-center gap-1 z-20 pointer-events-none">
                    <Eye className="w-3 h-3" /> Tap to view
                  </div>
                </ProjectImage>
              </div>

              {/* Card Meta Content below image: Title only */}
              <div className="p-5 sm:p-6 flex-1 flex items-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </article>
            );
          })}
      </div>
    </div>
  );
};
