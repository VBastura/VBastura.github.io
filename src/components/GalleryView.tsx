import React, { useState } from 'react';
import { Project, ViewRoute } from '../types';
import { ProjectImage } from './ProjectImage';
import { Search, ArrowRight, Eye, Camera } from 'lucide-react';

interface GalleryViewProps {
  projects: Project[];
  setCurrentRoute: (route: ViewRoute) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  projects,
  setCurrentRoute,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.cardShortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.hoverDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
          Detailed case studies across spaceframe structures, robotic mechanisms, embedded firmware, and applied research. Hover over any project to inspect the summary, or click through to read the full design breakdown.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects or tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center space-y-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
          <p className="text-base text-slate-500 dark:text-slate-400">
            No projects matched your criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-medium text-blue-600 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setCurrentRoute(`project-${project.id}`)}
              className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Hover Scrim */}
              <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <ProjectImage
                  src={project.coverImage}
                  alt={project.title}
                  aspectRatioClass="aspect-[16/10]"
                >
                  {/* Hover Scrim Overlay: shows description only (no restated title, no ellipses) */}
                  <div className="absolute inset-0 bg-slate-950/90 text-white p-5 sm:p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between backdrop-blur-xs pointer-events-none">
                    <div className="flex-1 flex items-center">
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        {project.hoverDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                        View Full Project Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Floating view cue on mobile */}
                  <div className="sm:hidden absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white font-mono flex items-center gap-1 z-10 pointer-events-none">
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
          ))}
        </div>
      )}
    </div>
  );
};
