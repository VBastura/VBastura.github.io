import React, { useState } from 'react';
import { Profile, Project, ViewRoute } from '../types';
import { ProjectImage } from './ProjectImage';
import {
  Mail,
  Phone,
  Linkedin,
  FileDown,
  FileText,
  ArrowRight,
  ExternalLink,
  Check,
  Copy,
  Cpu,
  Compass,
  Wrench,
  ShieldCheck,
  MapPin,
  GraduationCap,
  Camera,
} from 'lucide-react';

interface HomeViewProps {
  profile: Profile;
  projects: Project[];
  setCurrentRoute: (route: ViewRoute) => void;
  onOpenResume: () => void;
  onDownloadResumePdf: () => Promise<any> | void;
  onOpenEditProfile?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  profile,
  projects,
  setCurrentRoute,
  onOpenResume,
  onDownloadResumePdf,
  onOpenEditProfile,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadResume = async (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    try {
      await onDownloadResumePdf();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } finally {
      setDownloading(false);
    }
  };

  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* Hero Bio Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Typographic Bio (8 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Degree & Discipline Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs tracking-wider uppercase font-mono text-blue-600 dark:text-blue-400">
              <span className="font-semibold">{profile.degree}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.institution}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.graduationYear}</span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {profile.name}
              </h1>
              <p className="mt-2 text-xl text-slate-600 dark:text-slate-300 font-medium">
                {profile.headline}
              </p>
            </div>

            {/* Exact Requested Bio Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {profile.bioSummary}
            </p>

            {/* Direct Contact Channels */}
            <div className="pt-2 space-y-3">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500">
                Contact & Professional Channels
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                
                {/* Email with copy and mailto */}
                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="truncate text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono text-xs"
                      title={profile.email}
                    >
                      {profile.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors ml-2 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <a
                    href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono text-xs"
                  >
                    {profile.phone}
                  </a>
                </div>

                {/* Location - Pomfret, CT */}
                <div className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-200 font-mono text-xs truncate">
                    {profile.location}
                  </span>
                </div>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-xs font-mono">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>

              </div>
            </div>

            {/* Resume CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer hover:shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <a
                href="./Vicente_Bastura_Resume.pdf"
                download="Vicente_Bastura_Resume.pdf"
                onClick={handleDownloadResume}
                className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-medium text-sm flex items-center gap-2 transition-colors cursor-pointer"
                title="Download official PDF resume (Vicente_Bastura_Resume.pdf)"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Downloaded!</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 text-slate-400" />
                    <span>{downloading ? 'Downloading...' : 'Download Resume (PDF)'}</span>
                  </>
                )}
              </a>
            </div>

          </div>

          {/* Right Column: Academic Credentials Matrix (Replaces bio photo cleanly) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 space-y-5">
              
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 pb-1 border-b border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-4 h-4" />
                <span>Academic & Engineering Status</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-slate-400 uppercase text-[10px] tracking-wider">Institution</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {profile.institution}
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 uppercase text-[10px] tracking-wider">Degree Program</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                    {profile.degree}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider">Graduation</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {profile.graduationYear}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider">Undergraduate Degree GPA</div>
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                      {profile.undergradGpa}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-slate-400 uppercase text-[10px] tracking-wider">Location</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white mt-0.5">
                    {profile.location}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Engineering Toolchain & Capabilities Matrix */}
      <section className="border-b border-slate-200 dark:border-slate-800 pb-16 space-y-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            Technical Skill Inventory
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            CAD, Fabrication & Embedded Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CAD & Design (Split SolidWorks into CSWA and Simulation, no tolerancing/GD&T) */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
              <Compass className="w-5 h-5" />
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm">CAD & Design</h3>
            </div>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
              {profile.skills.cad.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing & Fab (CAM, Measurement Devices, Understanding of Manufacturing Processes) */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
              <Wrench className="w-5 h-5" />
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Manufacturing & Fab</h3>
            </div>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
              {profile.skills.manufacturing.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Programming & Electronics (No statistical analysis) */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
              <Cpu className="w-5 h-5" />
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Programming & Electronics</h3>
            </div>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
              {profile.skills.programming.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Practice (Teamwork, Hands-On, Problem Solving, Attention to Detail, Communication, Creative) */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Engineering Practice</h3>
            </div>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
              {profile.skills.professional.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Engineering Projects (Heading updated as requested) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Mechanical Design & Validation
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Engineering Projects
            </h2>
          </div>

          <button
            onClick={() => setCurrentRoute('gallery')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer group"
          >
            <span>View All Projects ({projects.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setCurrentRoute(`project-${project.id}`)}
              className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Hover Scrim */}
              <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                {project.statusBadge && (
                  <div className="absolute top-3 left-3 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wide bg-blue-600 text-white shadow-sm border border-blue-400/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 animate-pulse" />
                      {project.statusBadge}
                    </span>
                  </div>
                )}
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
                      <span className="font-semibold text-blue-400 flex items-center gap-1">
                        View Project Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </ProjectImage>
              </div>

              {/* Card Meta Content below image: Title only */}
              <div className="p-5 sm:p-6 flex-1 flex items-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
