import React, { useState } from 'react';
import { ProjectImage } from './ProjectImage';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  UserCheck,
  Activity,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Users,
} from 'lucide-react';

interface MqpCaseStudyProps {
  onInspectImage: (src: string) => void;
}

export const MqpCaseStudy: React.FC<MqpCaseStudyProps> = ({ onInspectImage }) => {
  const [versionLogOpen, setVersionLogOpen] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      {/* =========================================================================
          1. OBJECTIVE & CONSTRAINTS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>01. OBJECTIVE & CONSTRAINTS</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Operational Deficiencies & Physical Constraints
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Problem Statement
            </h3>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              The lab's existing unmanned ground vehicle has no suspension, tops out around 5 mph, has no independent braking, and is not weatherproof. The goal is a new tube-frame chassis that integrates suspension, supports braking and weatherproofing, and reaches 15 mph, developed by a 4-person chassis team, collaborating with the Suspension and Mechatronics teams.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Geometric & Operational Constraints
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                  Doorway & Hallway Clearances
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Must pass through lab doors and hallways (narrowest path <strong>59 in</strong>, overall vehicle length under <strong>6 ft</strong>).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                  Suspension Team Interface
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Chassis features a <strong>5-degree front tilt</strong> and shock mount pickup hardpoint locations set jointly with the suspension team.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Strict Anti-Rollover Rule</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  The LiDAR sensor is exposed at the top, so the vehicle <strong>must never roll over</strong> under any dynamic conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DESIGN EVOLUTION (PROBLEM -> DECISION FLOW)
          ========================================================================= */}
      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>02. DESIGN EVOLUTION</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Design Evolution
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">5-Stage Iterative Flow</span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Each version exposed a problem that shaped the next.
        </p>

        {/* Problem -> Decision Flow (Reads left-to-right on desktop, stacks vertically on mobile) */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Step 1: V2 to V3 */}
            <article className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Step 1 · V2 → V3
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    Clear line of sight for the LiDAR
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 dark:text-white font-semibold">Problem:</strong> V2's upper chamber, built to hold logic components, was a large rectangle that would have blocked a top-mounted LiDAR, or forced it higher and more exposed.
                  </p>
                  <p>
                    <strong className="text-blue-600 dark:text-blue-400 font-semibold">Decision:</strong> Cut the upper chamber down. The LiDAR now has a clear line of sight, confirmed in CAD.
                  </p>
                </div>
              </div>

              {/* Images: V2 upper chamber and V3 */}
              <div className="grid grid-cols-2 gap-1 p-2 bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div
                  className="cursor-pointer"
                  onClick={() => onInspectImage('images/chassis-v2-upper-chamber.png')}
                  title="Chassis V2 upper chamber (red box)"
                >
                  <ProjectImage
                    src="images/chassis-v2-upper-chamber.png"
                    alt="Chassis V2 upper chamber (red box)"
                    aspectRatioClass="aspect-[4/3] bg-slate-950"
                    objectFitClass="object-contain"
                  />
                  <div className="text-[10px] font-mono text-center text-slate-400 py-1 bg-slate-900">
                    V2 (Chamber)
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => onInspectImage('images/chassis-v3.png')}
                  title="Chassis V3 with upper chamber cut down"
                >
                  <ProjectImage
                    src="images/chassis-v3.png"
                    alt="Chassis V3"
                    aspectRatioClass="aspect-[4/3] bg-slate-950"
                    objectFitClass="object-contain"
                  />
                  <div className="text-[10px] font-mono text-center text-slate-400 py-1 bg-slate-900">
                    V3 (Cleared)
                  </div>
                </div>
              </div>
            </article>

            {/* Step 2: V3 to V5 */}
            <article className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Step 2 · V3 → V5
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    Fewer welds, simpler suspension
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 dark:text-white font-semibold">Problem:</strong> V3 had little tube bending, so many welds, and rear trailing arms were too complex for the team's skills, budget, and time.
                  </p>
                  <p>
                    <strong className="text-blue-600 dark:text-blue-400 font-semibold">Decision:</strong> More bent tubes, and A-arms at the rear, with motor offsets so the axle pivot aligns with the arms.
                  </p>
                </div>
              </div>

              {/* Image: V5 */}
              <div
                className="p-2 bg-slate-950 border-t border-slate-200 dark:border-slate-800 cursor-pointer"
                onClick={() => onInspectImage('images/chassis-v5.png')}
              >
                <ProjectImage
                  src="images/chassis-v5.png"
                  alt="Chassis V5 with rear A-arms and bent tubes"
                  aspectRatioClass="aspect-[16/10] bg-slate-950"
                  objectFitClass="object-contain"
                />
                <div className="text-[10px] font-mono text-center text-slate-400 py-1 bg-slate-900">
                  V5 (A-Arms & Bent Tubes)
                </div>
              </div>
            </article>

            {/* Step 3 (FEATURED): V5 to V7 - Largest card with "My call" badge */}
            <article className="lg:col-span-4 rounded-2xl border-2 border-blue-500 dark:border-blue-500/80 bg-blue-50/20 dark:bg-blue-950/20 overflow-hidden shadow-md flex flex-col justify-between relative">
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200">
                      Step 3 · V5 → V7
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      My call
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    Chassis proportions, battery access, and a lower CG
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 dark:text-white font-semibold">Problems seen in the V5 assembly:</strong> Poor wheelbase-to-track-width ratio, a center of gravity that was too high and too far back, a battery whose path was blocked, and a cluttered bottom frame.
                  </p>
                  <p>
                    <strong className="text-blue-600 dark:text-blue-400 font-semibold">What I did:</strong> I flagged the proportions, so the chassis was lengthened. I pushed to minimize the bottom tubing because a steel plate will cover the bottom (making it behave like a monocoque there). I rejected the idea of a removable side tube for the battery and proposed shortening the oversized top section so the battery lifts out vertically, for safer battery access.
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-800 dark:text-slate-200 font-semibold">Cascading effects:</strong> CG moved forward, the motors could lie flat which lowered the CG and improved packaging, and the shorter top section leaves room for electronics above the motors.
                  </p>
                </div>
              </div>

              {/* Images: V5 assembly battery CG and V7 */}
              <div className="grid grid-cols-2 gap-1.5 p-2.5 bg-slate-950 border-t border-blue-200 dark:border-blue-900/60">
                <div
                  className="cursor-pointer"
                  onClick={() => onInspectImage('images/chassis-v5-assembly-battery-cg.png')}
                  title="Chassis V5 assembly showing battery and CG issues"
                >
                  <ProjectImage
                    src="images/chassis-v5-assembly-battery-cg.png"
                    alt="Chassis V5 assembly (battery and CG constraints)"
                    aspectRatioClass="aspect-[4/3] bg-slate-950"
                    objectFitClass="object-contain"
                  />
                  <div className="text-[10px] font-mono text-center text-slate-400 py-1 bg-slate-900">
                    V5 Assembly (Issues)
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => onInspectImage('images/chassis-v7.png')}
                  title="Chassis V7 with lengthened frame, vertical battery access, and low CG"
                >
                  <ProjectImage
                    src="images/chassis-v7.png"
                    alt="Chassis V7 lengthened frame and low CG"
                    aspectRatioClass="aspect-[4/3] bg-slate-950"
                    objectFitClass="object-contain"
                  />
                  <div className="text-[10px] font-mono text-center text-blue-400 py-1 bg-slate-900 font-semibold">
                    V7 (My Call Architecture)
                  </div>
                </div>
              </div>
            </article>

            {/* Step 4: V7 to V10 */}
            <article className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Step 4 · V7 → V10
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    Tube optimization and simplification
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Some tubes were optimized into continuous bent lengths, excess tubing was cut, and front offsets were simplified into a single full bottom tube. The tube list from V7 was used to plan and order stock.
                  </p>
                </div>
              </div>

              {/* Image: V10 */}
              <div
                className="p-2 bg-slate-950 border-t border-slate-200 dark:border-slate-800 cursor-pointer"
                onClick={() => onInspectImage('images/chassis-v10.png')}
              >
                <ProjectImage
                  src="images/chassis-v10.png"
                  alt="Chassis V10 CAD model"
                  aspectRatioClass="aspect-[16/10] bg-slate-950"
                  objectFitClass="object-contain"
                />
                <div className="text-[10px] font-mono text-center text-slate-400 py-1 bg-slate-900">
                  V10 (Single Bottom Tube)
                </div>
              </div>
            </article>

            {/* Step 5: V11 */}
            <article className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="p-4 space-y-3 flex-1 flex flex-col">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
                      Step 5 · V11
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    In progress: parametric dimensions
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                  <p>
                    Improving the customizability of the chassis dimensions and resolving under-defined sketch dimensions, in ongoing coordination with the Suspension team on tube mounts.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 text-center">
                Active CAD Modeling
              </div>
            </article>
          </div>
        </div>

        {/* Expandable Full Version Log (V1 through V11) */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
          <button
            onClick={() => setVersionLogOpen(!versionLogOpen)}
            className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Full version log (V1 through V11)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
              <span>{versionLogOpen ? 'Collapse Log' : 'Expand Full Log (V1–V11)'}</span>
              {versionLogOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {versionLogOpen && (
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3 font-sans animate-in fade-in duration-150">
              <ul className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-500 dark:text-slate-400 w-10 shrink-0">V1</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Early concept with a rollcage geometry that was removed due to welding complexity and because the vehicle can't be allowed to roll with the LiDAR exposed.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V2</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Removed the rollcage geometry (welding complexity, and the vehicle can't be allowed to roll because of the LiDAR).
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V3</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Cut down the upper logic chamber to give the top-mounted LiDAR a clear line of sight, confirmed in CAD.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-500 dark:text-slate-400 w-10 shrink-0">V4</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Explored rear trailing arm geometry and preliminary suspension pivot mounts.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V5</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Switched to A-arms at the rear (trailing arms were too complex for the team's skills, budget, and time) and introduced tube bending.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V6</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Tubes optimized into continuous lengths.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V7</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Lengthened wheelbase, shortened top section for vertical battery removal, flattened motors lowering CG, and minimized bottom tubing.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-500 dark:text-slate-400 w-10 shrink-0">V8</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Used as the geometric baseline for preliminary SolidWorks and Ansys finite element stiffness and bump evaluations.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-500 dark:text-slate-400 w-10 shrink-0">V9</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Refined structural nodes and prepared tube lists for material ordering.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V10</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Simplified front offsets into a single full bottom tube and finalized stock planning.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-amber-50/50 dark:bg-amber-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400 w-10 shrink-0">V11</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    <span className="font-bold text-amber-700 dark:text-amber-400">In progress:</span> improving dimension customizability and resolving under-defined sketch dimensions with the Suspension team.
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          3. MY CONTRIBUTION
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <UserCheck className="w-4 h-4" />
          <span>03. MY CONTRIBUTION</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          My Contribution
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-5">
          <ul className="grid grid-cols-1 gap-3">
            <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Flagged poor chassis proportions and pushed to lengthen the chassis</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Pushed to minimize bottom tubing, given the steel bottom plate</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Proposed shortening the top section so the battery lifts out vertically, which moved the CG forward and let the motors lie flat</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Design feedback: continuous bent tubes instead of separate segments, tubes meeting at shared nodes instead of offsets, and removal of excess tubing</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Performed all of the FEA (SolidWorks weldments and Ansys torsional rigidity studies, and the Ansys bump test), including boundary condition setup</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Completed the NFPA hot work welding safety training</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Gave input on other team tasks throughout the project</span>
            </li>
          </ul>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            CAD assembly, cutting plan, and fixtures were handled by teammates.
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FINITE ELEMENT ANALYSIS (FEA)
          ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Activity className="w-4 h-4" />
            <span>04. FINITE ELEMENT ANALYSIS (FEA)</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Torsional Rigidity Progression & Bump Stress Analysis
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-8 shadow-xs">
          {/* Part A: Torsional Rigidity */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>A. Torsional Rigidity: Modeling Evolution & Boundary Conditions</span>
            </h3>

            {/* Explanation of Setup 1's limitations above table */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Simulation Limitations in Initial SolidWorks Beam Run
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Meshing errors affected joint/node accuracy, and the dummy A-arms transmitted moment and added deformation. So I moved to Ansys with proper joints, exact rear suspension coordinates, a rigid strut representation, and suspension components set to stiff so the result isolates the chassis.
              </p>
            </div>

            {/* Exact 5-Result Torsional Rigidity Table */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                <span>Torsional Rigidity Setups (1500 N per side):</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/80 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3 w-12">#</th>
                      <th className="py-2.5 px-3">Software</th>
                      <th className="py-2.5 px-3">Setup</th>
                      <th className="py-2.5 px-3 text-right">Torque (N·m)</th>
                      <th className="py-2.5 px-3 text-right">Angle (deg)</th>
                      <th className="py-2.5 px-3 text-right">Rigidity (N·m/deg)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white">1</td>
                      <td className="py-3 px-3 text-slate-700 dark:text-slate-300 whitespace-nowrap">SolidWorks Simulation</td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                        Dummy A-arms and uprights as beams; 8 rear suspension points fixed (closest chassis points); forces at lower ball joint
                      </td>
                      <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300 text-right whitespace-nowrap">1787.25</td>
                      <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300 text-right whitespace-nowrap">0.933</td>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white text-right whitespace-nowrap">1914.61</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white">2</td>
                      <td className="py-3 px-3 text-slate-700 dark:text-slate-300 whitespace-nowrap">SolidWorks Simulation</td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                        Same, but 4 rear bulkhead points fixed instead
                      </td>
                      <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300 text-right whitespace-nowrap">1787.25</td>
                      <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300 text-right whitespace-nowrap">0.759</td>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white text-right whitespace-nowrap">2356.05</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white">3</td>
                      <td className="py-3 px-3 text-slate-700 dark:text-slate-300 whitespace-nowrap">Ansys Mechanical</td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                        Dummy A-arms, uprights, and load path set to flexible; 8 rear suspension points fixed (exact)
                      </td>
                      <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300 text-right whitespace-nowrap">1787.25</td>
                      <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300 text-right whitespace-nowrap">0.786</td>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white text-right whitespace-nowrap">2273.74</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white">4</td>
                      <td className="py-3 px-3 text-slate-700 dark:text-slate-300 whitespace-nowrap">Ansys Mechanical</td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                        Same, with suspension parts set to stiff and properly jointed
                      </td>
                      <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300 text-right whitespace-nowrap">1787.25</td>
                      <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300 text-right whitespace-nowrap">0.796</td>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white text-right whitespace-nowrap">2246.31</td>
                    </tr>
                    <tr className="bg-blue-50/70 dark:bg-blue-950/40 border-l-4 border-l-blue-600">
                      <td className="py-3 px-3 font-mono font-extrabold text-blue-700 dark:text-blue-300">5 (final)</td>
                      <td className="py-3 px-3 font-semibold text-blue-900 dark:text-blue-200 whitespace-nowrap">Ansys Mechanical</td>
                      <td className="py-3 px-3 text-blue-950 dark:text-blue-100 font-medium">
                        Stiff, jointed; remote forces applied to the upright from the contact patch
                      </td>
                      <td className="py-3 px-3 font-mono font-semibold text-blue-900 dark:text-blue-200 text-right whitespace-nowrap">2003.19</td>
                      <td className="py-3 px-3 font-mono font-semibold text-blue-900 dark:text-blue-200 text-right whitespace-nowrap">0.882</td>
                      <td className="py-3 px-3 font-mono font-extrabold text-blue-700 dark:text-blue-300 text-right whitespace-nowrap">2271.72</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Statistical Summary & Note below table */}
              <div className="pt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <strong>Average of all five setups:</strong> <span className="font-mono font-bold text-slate-900 dark:text-white">2212.49 N*m/deg</span>, standard deviation <span className="font-mono font-bold text-slate-900 dark:text-white">171.57 N*m/deg</span>.
                  </div>
                  <div>
                    <strong>Benchmark:</strong> The commonly cited Baja/FSAE benchmark is about <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">2000 N*m/deg</span>.
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 italic">
                  Fixing the rear bulkhead (Setup 2) gave a higher value, so the suspension points were fixed for all Ansys runs to stay conservative.
                </p>
              </div>
            </div>

            {/* Torsional Rigidity Visual Documentation */}
            <div className="pt-4 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Torsional Rigidity Visual Documentation:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Torsion 1: Setup */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea torsional rigidity setup.png"
                    alt="Torsional Rigidity Simulation Setup and Boundary Constraints"
                    aspectRatioClass="aspect-[16/10] bg-slate-950"
                    objectFitClass="object-contain"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea torsional rigidity setup.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      1. Torsional Rigidity Setup & Constraints
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Ansys boundary setup with proper joints, exact rear suspension coordinates, rigid strut representation, and suspension components set to stiff so the result isolates the chassis.
                    </span>
                  </figcaption>
                </figure>

                {/* Torsion 2: Deformation Results */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis thumbnail.png"
                    alt="Torsional Rigidity Deformation Results"
                    aspectRatioClass="aspect-[16/10] bg-slate-950"
                    objectFitClass="object-contain"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis thumbnail.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      2. Torsional Rigidity Deformation Results
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Torsional deformation results under opposing loads (final conservative setup fixing suspension points: 2271.72 N*m/deg; 5-setup average: 2212.49 N*m/deg).
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Part B: Bump Test */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>B. Bump Test Stress Analysis</span>
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal mt-1.5">
                Bump test: 8 rear fixtures and a 2000 N load on the front left suspension points, used to see where peak stress occurs. The largest stress magnitude was the minimum combined stress of <strong>76.4 MPa</strong> (compressive); maximum combined was <strong>54.8 MPa</strong>. Against the <strong>483 MPa</strong> yield strength that is roughly a <strong>6.3x margin</strong>.
              </p>
            </div>

            {/* The 5 Bump Test FEA Visuals Grid - Sequentially Numbered, No physical rolling frame tile */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                <span>The 5 Bump Test FEA Simulation Figures:</span>
                <span className="text-blue-600 dark:text-blue-400">Figures 1 through 5</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-1">
                {/* Figure 1: Bump Setup & Boundary Conditions */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test setup.png"
                    alt="Figure 1: Bump Test Setup & Boundary Conditions"
                    aspectRatioClass="aspect-[16/10] bg-slate-950"
                    objectFitClass="object-contain"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test setup.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      Figure 1: Bump Test Setup
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      8 rear fixtures constrained with a 2000 N vertical shock load applied to front-left suspension points to observe stress concentrations.
                    </span>
                  </figcaption>
                </figure>

                {/* Figure 2: Direct (Axial) Stress */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test direct axial stress.png"
                    alt="Figure 2: Bump Test Direct (Axial) Stress (+ Tension / - Compression)"
                    aspectRatioClass="aspect-[16/10] bg-slate-950"
                    objectFitClass="object-contain"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test direct axial stress.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      Figure 2: Direct (Axial) Stress
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Direct axial stress across spaceframe members, where (+) indicates tensile loading and (-) indicates compressive loading.
                    </span>
                  </figcaption>
                </figure>

                {/* Figure 3: Maximum Bending Stress */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png"
                    alt="Figure 3: Bump Test Maximum Bending Stress"
                    aspectRatioClass="aspect-[16/10] bg-slate-950"
                    objectFitClass="object-contain"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      Figure 3: Maximum Bending Stress
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Maximum bending stress contours throughout tubular frame spans resulting from moment transfer under the 2000 N shock load.
                    </span>
                  </figcaption>
                </figure>

                {/* Figure 4: Maximum Combined Stress */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test max combined stress.png"
                    alt="Figure 4: Bump Test Maximum Combined Stress (Direct + Max Bending: 54.8 MPa)"
                    aspectRatioClass="aspect-[16/10] bg-slate-950"
                    objectFitClass="object-contain"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test max combined stress.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      Figure 4: Max Combined Stress (54.8 MPa)
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Superposition of direct axial stress and maximum bending stress, resulting in a maximum combined tensile stress of 54.8 MPa.
                    </span>
                  </figcaption>
                </figure>

                {/* Figure 5: Minimum Combined Stress */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test min combined stress.png"
                    alt="Figure 5: Bump Test Minimum Combined Stress (Direct + Min Bending: 76.4 MPa Compressive)"
                    aspectRatioClass="aspect-[16/10] bg-slate-950"
                    objectFitClass="object-contain"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test min combined stress.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      Figure 5: Min Combined Stress (76.4 MPa Compressive)
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Direct axial stress combined with minimum bending; largest stress magnitude overall at 76.4 MPa compressive (~6.3x margin vs 483 MPa yield).
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Preliminary results: caveats */}
          <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800/80 bg-amber-50/70 dark:bg-amber-950/30 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Preliminary results: caveats</span>
            </div>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Preliminary Status:</strong> All torsional rigidity and stress results presented are preliminary engineering models subject to final physical verification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Chassis Baseline:</strong> FEA runs were executed on earlier chassis geometry (V8), rather than the finalized V11 layout.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Material Property:</strong> The bump evaluation utilized AISI 1020 annealed steel properties rather than cold-rolled stock.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Final Re-Run Planned:</strong> A definitive FEA re-run will be conducted on the finalized V11 chassis model before tube fabrication begins.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PRODUCT / OUTCOME (STATUS)
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>05. PRODUCT / OUTCOME</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Manufacturing Status & Fabrication Milestone
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Fabrication Status: Pending B-Term</span>
          </div>

          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Status: design and analysis are nearly complete; fabrication is expected to start in B-term; stock is purchased and welding safety training is done.
          </p>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT I LEARNED (HIDDEN FOR NOW; KEPT TO RESTORE LATER)
          ========================================================================= */}
      {/*
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>06. WHAT I LEARNED</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Engineering Takeaways
        </h2>
        <div className="p-6 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 shadow-xs">
          <p className="text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            "Setting up multi-body FEA taught me that boundary conditions dictate simulation validity—isolating the chassis from suspension compliance was necessary to obtain an honest stiffness benchmark. [ADD: my reflection on collaborating across multi-disciplinary subteams]."
          </p>
        </div>
      </section>
      */}
    </div>
  );
};
