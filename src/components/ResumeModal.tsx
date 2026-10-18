import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText } from 'lucide-react';
import { downloadResumePdf } from '../utils/generateResumePdf';

import { Profile } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile?: Profile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    setDownloading(true);
    try {
      const success = await downloadResumePdf();
      if (success) {
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      }
    } catch (e) {
      console.error('Failed to download resume PDF:', e);
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const exactResumeText = `Vicente Bastura
Mechanical Engineer
vicentebastura1310@gmail.com | (860) 481-1231

Education
Worcester Polytechnic Institute – BS/MS in Mechanical Engineering | GPA – 3.82    May 2027
Extracurriculars – Combat Robotics, Running Club, FSAE

Projects
Autonomous Off-Road Vehicle Chassis – Major Qualifying Project    May 2026 - Present
● Contributed to iterative spaceframe chassis design by considering structural, packaging, and size constraints.
● Conducted static FEA simulations using Ansys to analyze the chassis for torsional rigidity, peak stresses, and load paths.
● Collaborating with other teams to create an entire off-road vehicle platform, with a full rolling chassis and support for future systems.

1 Pound Plastic Combat Robot    October 2025 - Present
● Designed a parametric weapon, iterated mechanical components, and collaboratively brainstormed for version 1.
● Manufactured the complete robot using 3D printing and wired the electronic system for the first competition.
● Identified weaknesses in workflow, material, and design considerations for version 2 development.
● Redesigned the failed weapon to be asymmetric and smaller for version 2.

MIDI Music Box    August 2025 - October 2025
● Collaborated on the mechanical design, assembly of custom 3D-printed actuators, and an electronic system connected to a modified music box.
● Wired and integrated 20 servos with servo driver boards to independently actuate individual music box tines.
● Developed Arduino code to parse MIDI input and map incoming notes to the corresponding servos.
● Implemented individual servo position offsets in software to compensate for variation in the assembly and ensure reliable note actuation.

Understanding Perceptions of Cuenca Cantón Wildfires – Interactive Qualifying Project    October 2025 - March 2026
● Collaborated with a 4-person team and the University of Cuenca to investigate community perceptions of wildfire impacts on soil in Cuenca, Ecuador.
● Interviewed rural and municipal stakeholders alongside University of Cuenca students, administering surveys across two distinct populations.
● Performed statistical analysis and authored the results section, applying chi-squared testing with Holm-Bonferroni correction across 61 respondents' survey data.

Skills
CAD and Design: SolidWorks (CSWA & Simulation), Ansys, Fusion 360, Onshape, 3D Part & Assembly Design, 2D Drawings
Manufacturing and Prototyping: 3D Printing (Operation & Maintenance), Rapid Prototyping, CAM, CNC Mill, CNC Lathe, Calipers, Micrometer, Manufacturing Process, Osha-10 Certified, Tolerancing
Programming and Electronics: MATLAB, Arduino (C++), Raspberry Pi, Sensors, Actuators, Soldering
Other: Computer Skills, Problem Solving, Attention to Detail, Hands-On, Creative, Teamwork, Communication, AI

Experience
Landscaping, Multiple Companies – Pomfret, CT    May 2024 – August 2026
● Managed a private client's property independently, scheduling work, and determining maintenance needs while completing additional assigned projects including pathway and retaining-wall construction. (2024-2026)
● Completed daily tasks independently at a golf course, operating push mowers, weed trimmers, leaf blowers, and specialty equipment. (2024)
● Maintained residential properties for a landscaping company, traveling between job sites and weed trimming. (2026)`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(exactResumeText.trim());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        
        {/* Top Action Bar */}
        <div className="no-print flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Vicente Bastura – Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Download exact uploaded PDF resume (Vicente_Bastura_Resume.pdf)"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>{downloading ? 'Downloading...' : 'Download PDF'}</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy exact resume text"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body - Exact replica of uploaded PDF with all black text and full-page layout */}
        <div className="p-6 sm:p-12 space-y-6 overflow-y-auto text-black dark:text-white font-sans text-sm">
          
          {/* Header */}
          <div className="text-center space-y-1 pb-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
              Vicente Bastura
            </h1>
            <div className="text-sm sm:text-base text-black dark:text-white font-normal">
              Mechanical Engineer
            </div>
            <div className="text-xs sm:text-sm text-black dark:text-white pt-0.5">
              <span>vicentebastura1310@gmail.com</span>
              <span className="mx-2 text-black dark:text-white">|</span>
              <span>(860) 481-1231</span>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-2">
            <div className="border-b border-black dark:border-white pb-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                Education
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm">
              <div>
                <strong className="font-bold text-black dark:text-white">Worcester Polytechnic Institute</strong> – BS/MS in Mechanical Engineering | GPA – 3.82
              </div>
              <div className="text-sm text-black dark:text-white font-normal">
                May 2027
              </div>
            </div>
            <div className="text-sm text-black dark:text-white">
              <strong className="font-bold text-black dark:text-white">Extracurriculars – </strong> Combat Robotics, Running Club, FSAE
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-4">
            <div className="border-b border-black dark:border-white pb-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                Projects
              </h2>
            </div>

            {/* MQP Chassis */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black dark:text-white text-sm">
                <span>Autonomous Off-Road Vehicle Chassis – Major Qualifying Project</span>
                <span className="text-sm font-normal text-black dark:text-white">May 2026 - Present</span>
              </div>
              <ul className="text-xs sm:text-sm text-black dark:text-white space-y-1.5 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Contributed to iterative spaceframe chassis design by considering structural, packaging, and size constraints.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Conducted static FEA simulations using Ansys to analyze the chassis for torsional rigidity, peak stresses, and load paths.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Collaborating with other teams to create an entire off-road vehicle platform, with a full rolling chassis and support for future systems.</span>
                </li>
              </ul>
            </div>

            {/* 1 Pound Combat Robot */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black dark:text-white text-sm">
                <span>1 Pound Plastic Combat Robot</span>
                <span className="text-sm font-normal text-black dark:text-white">October 2025 - Present</span>
              </div>
              <ul className="text-xs sm:text-sm text-black dark:text-white space-y-1.5 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Designed a parametric weapon, iterated mechanical components, and collaboratively brainstormed for version 1.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Manufactured the complete robot using 3D printing and wired the electronic system for the first competition.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Identified weaknesses in workflow, material, and design considerations for version 2 development.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Redesigned the failed weapon to be asymmetric and smaller for version 2.</span>
                </li>
              </ul>
            </div>

            {/* MIDI Music Box */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black dark:text-white text-sm">
                <span>MIDI Music Box</span>
                <span className="text-sm font-normal text-black dark:text-white">August 2025 - October 2025</span>
              </div>
              <ul className="text-xs sm:text-sm text-black dark:text-white space-y-1.5 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Collaborated on the mechanical design, assembly of custom 3D-printed actuators, and an electronic system connected to a modified music box.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Wired and integrated 20 servos with servo driver boards to independently actuate individual music box tines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Developed Arduino code to parse MIDI input and map incoming notes to the corresponding servos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Implemented individual servo position offsets in software to compensate for variation in the assembly and ensure reliable note actuation.</span>
                </li>
              </ul>
            </div>

            {/* Cuenca Wildfires IQP */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black dark:text-white text-sm">
                <span>Understanding Perceptions of Cuenca Cantón Wildfires – Interactive Qualifying Project</span>
                <span className="text-sm font-normal text-black dark:text-white">October 2025 - March 2026</span>
              </div>
              <ul className="text-xs sm:text-sm text-black dark:text-white space-y-1.5 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Collaborated with a 4-person team and the University of Cuenca to investigate community perceptions of wildfire impacts on soil in Cuenca, Ecuador.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Interviewed rural and municipal stakeholders alongside University of Cuenca students, administering surveys across two distinct populations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Performed statistical analysis and authored the results section, applying chi-squared testing with Holm-Bonferroni correction across 61 respondents' survey data.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-2">
            <div className="border-b border-black dark:border-white pb-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                Skills
              </h2>
            </div>
            <div className="text-xs sm:text-sm space-y-2 text-black dark:text-white">
              <div>
                <strong className="font-bold text-black dark:text-white">CAD and Design: </strong> SolidWorks (CSWA & Simulation), Ansys, Fusion 360, Onshape, 3D Part & Assembly Design, 2D Drawings
              </div>
              <div>
                <strong className="font-bold text-black dark:text-white">Manufacturing and Prototyping: </strong> 3D Printing (Operation & Maintenance), Rapid Prototyping, CAM, CNC Mill, CNC Lathe, Calipers, Micrometer, Manufacturing Process, Osha-10 Certified, Tolerancing
              </div>
              <div>
                <strong className="font-bold text-black dark:text-white">Programming and Electronics: </strong> MATLAB, Arduino (C++), Raspberry Pi, Sensors, Actuators, Soldering
              </div>
              <div>
                <strong className="font-bold text-black dark:text-white">Other: </strong> Computer Skills, Problem Solving, Attention to Detail, Hands-On, Creative, Teamwork, Communication, AI
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-2">
            <div className="border-b border-black dark:border-white pb-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                Experience
              </h2>
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black dark:text-white text-sm">
                <span>Landscaping, Multiple Companies – Pomfret, CT</span>
                <span className="text-sm font-normal text-black dark:text-white">May 2024 – August 2026</span>
              </div>
              <ul className="text-xs sm:text-sm text-black dark:text-white space-y-1.5 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Managed a private client's property independently, scheduling work, and determining maintenance needs while completing additional assigned projects including pathway and retaining-wall construction. (2024-2026)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Completed daily tasks independently at a golf course, operating push mowers, weed trimmers, leaf blowers, and specialty equipment. (2024)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5" />
                  <span>Maintained residential properties for a landscaping company, traveling between job sites and weed trimming. (2026)</span>
                </li>
              </ul>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="no-print px-5 sm:px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <span>Exact resume document matching uploaded PDF.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
