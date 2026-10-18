import React, { useState } from 'react';
import { Project, ViewRoute } from '../types';
import { ProjectImage } from './ProjectImage';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  Share2,
  Users,
  UserCheck,
  Download,
  AlertTriangle,
  CheckCircle2,
  Camera,
  FileText,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Activity,
  Layers,
  Sparkles,
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
  const [versionLogOpen, setVersionLogOpen] = useState(false);

  const isMqp = project.id === 'autonomous-offroad-chassis';

  const projectPhotos = project.photos && project.photos.length > 0
    ? project.photos
    : [
        {
          src: project.coverImage,
          alt: project.title,
          caption: project.oneLineOutcome,
          filename: project.coverImage.replace('images/', ''),
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
          - Strongest media at top: video embed (YouTube iframe) or hero image.
          ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-3">
          {isMqp && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800/80">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Active Project · Fabrication Pending (B-Term)</span>
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

        {/* Strongest media at top: video embed or hero image */}
        {project.videoEmbedUrl ? (
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-black">
            <iframe
              src={project.videoEmbedUrl}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer group">
            <ProjectImage
              src={project.coverImage}
              alt={project.title}
              aspectRatioClass="aspect-[16/9] max-h-[560px]"
              onClick={() => setLightboxImage(project.coverImage)}
            />
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-slate-950/80 hover:bg-slate-950 text-white rounded-lg text-xs font-mono flex items-center gap-1.5 backdrop-blur-md transition-colors shadow-lg pointer-events-none opacity-0 group-hover:opacity-100">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Fullscreen Visual</span>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          2. SUMMARY STRIP (compact row of labeled fields)
          - Role | Team size | Timeline | Tools | My specific contribution (one line)
          ========================================================================= */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
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
          <div className="pt-3 sm:pt-0 sm:px-4 space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tools
            </div>
            <div className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200 line-clamp-3">
              {project.summaryStrip.tools}
            </div>
          </div>

          {/* My Specific Contribution */}
          <div className="pt-3 sm:pt-0 sm:pl-4 space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              My Contribution
            </div>
            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.summaryStrip.myContribution}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TAB NAVIGATION: Case Study Breakdown vs Project Photos
          ========================================================================= */}
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

        <div className="text-xs font-mono text-slate-400 hidden sm:flex items-center gap-1.5">
          <span>Folder:</span>
          <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-blue-600 dark:text-blue-400 font-mono text-[11px]">
            images/
          </code>
        </div>
      </div>

      {/* =========================================================================
          TAB 1: CASE STUDY BREAKDOWN (Narrative Structure: 1, 2, 3, 4, 5)
          ========================================================================= */}
      {activeTab === 'case-study' && (
        <div className="space-y-14 animate-in fade-in duration-200">
          {/* 1. OBJECTIVE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>01. OBJECTIVE & CONSTRAINTS</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Problem Statement & Design Constraints
            </h2>
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-xs">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.objective}
              </p>
            </div>
          </section>

          {/* 2. BRAINSTORM */}
          <section className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>02. BRAINSTORM</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Architectural Concepts & Tradeoffs
            </h2>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-5 shadow-xs">
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.brainstorm.paragraph}
              </p>

              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 cursor-pointer group relative">
                <ProjectImage
                  src={project.brainstorm.image}
                  alt="Brainstorming concept visual"
                  aspectRatioClass="aspect-[16/9] max-h-96"
                  onClick={() => {
                    if (project.brainstorm.image) setLightboxImage(project.brainstorm.image);
                  }}
                />
                {project.brainstorm.imageCaption && (
                  <div className="p-3 bg-slate-100 dark:bg-slate-900/90 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 italic">
                    {project.brainstorm.imageCaption}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 3. PROTOTYPE */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>03. PROTOTYPE</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Iterative Engineering Sequence
            </h2>

            <div className="space-y-8">
              {project.prototypeIterations.map((iter, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs space-y-6 p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                        Iteration {iter.version.toUpperCase()}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {iter.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      What Was Built & Fabrication Method:
                    </div>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      {iter.whatWasBuilt}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>Observed Failure / Underperformance:</span>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {iter.whatFailedOrUnderperformed}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/60 dark:bg-emerald-950/20 space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Engineering Redesign & Physical Result:</span>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {iter.whatChangedAndResult}
                    </p>
                  </div>

                  {iter.decisions && iter.decisions.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                        Key Engineering Decisions (Material, Geometry, Slicer / Code):
                      </div>
                      <ul className="grid grid-cols-1 gap-2">
                        {iter.decisions.map((dec, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                            <span>{dec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 cursor-pointer group relative">
                      <ProjectImage
                        src={iter.image}
                        alt={`${iter.title} iteration visual`}
                        aspectRatioClass="aspect-[16/9] max-h-80"
                        onClick={() => {
                          if (iter.image) setLightboxImage(iter.image);
                        }}
                      />
                    </div>

                    {iter.imageCaption && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                        {iter.imageCaption}
                      </p>
                    )}

                    {iter.testConditions && (
                      <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          Boundary / Test Conditions:{' '}
                        </span>
                        {iter.testConditions}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. PRODUCT / OUTCOME */}
          <section className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>04. PRODUCT / OUTCOME</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Final Design & Measured Results
            </h2>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-xs">
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {project.productOutcome.finalDesignAndResults}
              </p>

              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 cursor-pointer group relative">
                <ProjectImage
                  src={project.productOutcome.mediaUrl}
                  alt="Final product outcome"
                  aspectRatioClass="aspect-[16/9] max-h-80"
                  onClick={() => {
                    if (project.productOutcome.mediaUrl)
                      setLightboxImage(project.productOutcome.mediaUrl);
                  }}
                />
                {project.productOutcome.mediaCaption && (
                  <div className="p-3 bg-slate-100 dark:bg-slate-900/90 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 italic">
                    {project.productOutcome.mediaCaption}
                  </div>
                )}
              </div>

              {project.productOutcome.downloadLinks &&
                project.productOutcome.downloadLinks.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      Project Documentation & Deliverables:
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.productOutcome.downloadLinks.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:border-blue-300 dark:hover:border-blue-700 text-xs font-mono text-slate-800 dark:text-slate-200 transition-colors"
                          download
                        >
                          <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </section>

          {/* 5. WHAT I LEARNED */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>05. WHAT I LEARNED</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Engineering Takeaways
            </h2>
            <div className="p-6 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 shadow-xs">
              <p className="text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                "{project.whatILearned}"
              </p>
            </div>
          </section>

          {/* Photos Shortcut Banner */}
          <div className="p-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Physical Build Photography</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Explore all {projectPhotos.length} high-resolution photographs and fabrication visuals in the Project Photos tab.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('photos');
                window.scrollTo({ top: 380, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-medium transition-colors cursor-pointer shrink-0"
            >
              Open Project Photos ({projectPhotos.length})
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: PROJECT PHOTOS (Clean HTML image placeholders pointing to images/)
          ========================================================================= */}
      {activeTab === 'photos' && (
        <section className="space-y-6 animate-in fade-in duration-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Camera className="w-4 h-4" />
              <span>PROJECT PHOTOS & PHYSICAL DOCUMENTATION</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Hardware Photography & Engineering Artifacts
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Clean HTML image placeholders pointing to the local folder <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold">images/</code>. Click any photo to view full resolution.
            </p>
          </div>

          {/* Clean CSS Grid ready to style exact filenames */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectPhotos.map((photo, idx) => (
              <figure
                key={idx}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all flex flex-col justify-between"
              >
                {/* Clean HTML Image Placeholder */}
                <div
                  className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
                  onClick={() => setLightboxImage(photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" /> Full Resolution
                    </span>
                  </div>
                </div>

                <figcaption className="p-4 sm:p-5 space-y-2 border-t border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold truncate">
                      {photo.filename}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {photo.alt}
                    </h4>
                  </div>
                  {photo.caption && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      {photo.caption}
                    </p>
                  )}
                </figcaption>
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
