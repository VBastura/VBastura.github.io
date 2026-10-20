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
  Sparkles,
  Gauge,
  Maximize,
  Compass,
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
          Objective & Constraints
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Problem Statement
            </h3>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              The lab's research unmanned ground vehicle (UGV) needs improved off-road mobility, but it is slow, has no suspension system, and isn't weatherproof. This chassis will integrate the Suspension and Mechatronics teams' work into one vehicle and serve as a platform the lab can keep improving for future research.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Constraint Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Constraint 1: Doorway & hallway clearance */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
                  <Maximize className="w-3.5 h-3.5" />
                  <span>Doorway & Hallway Clearance</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Must pass through lab doors and hallways (narrowest path <strong>59 in</strong>, overall length under <strong>6 ft</strong>).
                </p>
              </div>

              {/* Constraint 2: Suspension team interface */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Suspension Interface</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  A <strong>5-degree front tilt</strong> and shock mount locations set jointly with the Suspension team.
                </p>
              </div>

              {/* Constraint 3: Speed target */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>Speed Target</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>15 mph</strong>, up from about 5 mph on the current vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DESIGN EVOLUTION (VERTICAL TIMELINE - ONE ROW PER STEP)
          ========================================================================= */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>02. DESIGN EVOLUTION</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Design Evolution
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
            Each version exposed a problem that shaped the next.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 dark:border-blue-900/60 space-y-8">
          {/* STEP 1: V2 to V3 */}
          <div className="relative">
            {/* Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            </div>

            <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Text on Left */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                      Step 1 · V2 → V3
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    Clear line of sight for the LiDAR
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-slate-900 dark:text-white font-semibold">Problem:</strong> V2's upper chamber, added to hold logic components, rose into the LiDAR's sightline. A top-mounted sensor would have been blocked, or forced higher and more exposed.
                    </p>
                    <p>
                      <strong className="text-blue-600 dark:text-blue-400 font-semibold">Decision:</strong> Cut the upper section down so the LiDAR (light detection and ranging laser scanner) has a clear line of sight, confirmed in CAD.
                    </p>
                  </div>
                </div>

                {/* Images on Right (Side-by-side aligned at top at natural heights) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  <div className="space-y-2">
                    <div
                      className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950"
                      onClick={() => onInspectImage('images/chassis-v2-upper-chamber.png')}
                      title="Chassis V2 upper chamber (red box)"
                    >
                      <ProjectImage
                        src="images/chassis-v2-upper-chamber.png"
                        alt="Chassis V2 upper chamber (red box)"
                      />
                    </div>
                    <div className="text-xs font-mono text-center text-slate-600 dark:text-slate-400">
                      V2, chamber
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div
                      className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950"
                      onClick={() => onInspectImage('images/chassis-v3.png')}
                      title="Chassis V3 with upper chamber cut down"
                    >
                      <ProjectImage
                        src="images/chassis-v3.png"
                        alt="Chassis V3 with clear LiDAR line of sight"
                      />
                    </div>
                    <div className="text-xs font-mono text-center text-slate-600 dark:text-slate-400">
                      V3
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* STEP 2: V3 to V5 */}
          <div className="relative">
            {/* Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            </div>

            <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Text on Left */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                      Step 2 · V3 → V5
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    Fewer welds
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-slate-900 dark:text-white font-semibold">Problem:</strong> V3 used little tube bending, which meant many welded joints.
                    </p>
                    <p>
                      <strong className="text-blue-600 dark:text-blue-400 font-semibold">Decision:</strong> More bent tubes to cut the weld count.
                    </p>
                  </div>
                </div>

                {/* Image on Right */}
                <div className="lg:col-span-7 max-w-lg space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950"
                    onClick={() => onInspectImage('images/chassis-v5.png')}
                    title="Chassis V5 with more bent tubes"
                  >
                    <ProjectImage
                      src="images/chassis-v5.png"
                      alt="Chassis V5 with bent tubes"
                    />
                  </div>
                  <div className="text-xs font-mono text-center text-slate-600 dark:text-slate-400">
                    V5
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* STEP 3 (FEATURED): V5 to V7 with "My call" badge */}
          <div className="relative">
            {/* Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            <article className="rounded-2xl border-2 border-blue-500 dark:border-blue-500/80 bg-blue-50/20 dark:bg-blue-950/20 p-5 sm:p-7 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Text on Left (Three labeled blocks) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-900 dark:bg-blue-900/60 dark:text-blue-200">
                      Step 3 · V5 → V7
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      My call
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    Chassis proportions, battery access, and a lower CG
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div className="p-3 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-1">
                      <div className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white">
                        Problems in V5
                      </div>
                      <p>
                        Poor wheelbase-to-track-width ratio; center of gravity (CG) too high and too far back; battery path blocked; excessive bottom tubing.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 space-y-1">
                      <div className="text-xs font-mono font-bold uppercase text-blue-800 dark:text-blue-300">
                        What I did
                      </div>
                      <p>
                        Flagged the proportions, so the chassis was lengthened. Pushed to minimize the bottom tubing since a steel plate will cover the bottom. Proposed shortening the oversized top section so the battery lifts out vertically, which is safer than removing a side tube.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-1">
                      <div className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white">
                        Effects
                      </div>
                      <p>
                        CG moved forward; the motors could lie flat (lower CG, better packaging); the shorter top section leaves room for electronics above.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Larger Images on Right */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  <div className="space-y-2">
                    <div
                      className="cursor-pointer border border-blue-300 dark:border-blue-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950"
                      onClick={() => onInspectImage('images/chassis-v5-assembly-battery-cg.png')}
                      title="Chassis V5 assembly showing blocked battery access and high CG"
                    >
                      <ProjectImage
                        src="images/chassis-v5-assembly-battery-cg.png"
                        alt="Chassis V5 assembly"
                      />
                    </div>
                    <div className="text-xs font-mono text-center text-slate-700 dark:text-slate-300 font-medium">
                      V5 assembly
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div
                      className="cursor-pointer border border-blue-300 dark:border-blue-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950"
                      onClick={() => onInspectImage('images/chassis-v7.png')}
                      title="Chassis V7 with lengthened frame, vertical battery access, and lower CG"
                    >
                      <ProjectImage
                        src="images/chassis-v7.png"
                        alt="Chassis V7"
                      />
                    </div>
                    <div className="text-xs font-mono text-center text-blue-600 dark:text-blue-400 font-bold">
                      V7
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* STEP 4: V7 to V10 */}
          <div className="relative">
            {/* Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            </div>

            <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Text on Left */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                      Step 4 · V7 → V10
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    Tube optimization and simplification
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                      Some tubes were optimized into continuous bent lengths, excess tubing was cut, and the front offsets were simplified into a single full bottom tube. The V7 tube list was used to plan and order stock.
                    </p>
                  </div>
                </div>

                {/* Image on Right */}
                <div className="lg:col-span-7 max-w-lg space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950"
                    onClick={() => onInspectImage('images/chassis-v10.png')}
                    title="Chassis V10 CAD model"
                  >
                    <ProjectImage
                      src="images/chassis-v10.png"
                      alt="Chassis V10"
                    />
                  </div>
                  <div className="text-xs font-mono text-center text-slate-600 dark:text-slate-400">
                    V10
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* STEP 5: V11 (In progress) */}
          <div className="relative">
            {/* Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-amber-500 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            </div>

            <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                    Step 5 · V11
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                    In progress
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Parametric dimensions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  Making the chassis dimensions easy to adjust and resolving under-defined sketch dimensions, in ongoing coordination with the Suspension team on tube mounts.
                </p>
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
                    Early concept including a rollcage geometry, removed because of welding complexity and because the vehicle cannot be allowed to roll with the LiDAR exposed.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V2</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Rollcage removed, upper chamber for logic components.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V3</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Upper chamber cut down for the LiDAR sightline.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-500 dark:text-slate-400 w-10 shrink-0">V4</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    First attempt at more tube bending, needing a better bend radius and space for the camera, steering motor, and other components.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V5</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Bent tubes added and rear mounting geometry reworked.
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
                    Excess upper tubing cut, frame widened to avoid small hard-to-weld tubes at the rear, and used to estimate and order tube stock.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-500 dark:text-slate-400 w-10 shrink-0">V8</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Interim revision used as the version for the FEA.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-500 dark:text-slate-400 w-10 shrink-0">V9</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Interim revision with joint refinements.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V10</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Front offsets simplified into one bottom tube.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-amber-50/50 dark:bg-amber-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400 w-10 shrink-0">V11</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    <span className="font-bold text-amber-700 dark:text-amber-400">In progress:</span> making dimensions easy to adjust and resolving under-defined sketches.
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
              <span>Proposed vertical battery access for safety and optimizing the CG</span>
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
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>A. Torsional Rigidity: Modeling Evolution & Boundary Conditions</span>
            </h3>

            {/* Block (a): What torsional rigidity is and why it matters */}
            <div className="space-y-2 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                What torsional rigidity is and why it matters
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Torsional rigidity is how much a frame resists twisting. Picture holding one end of a long box and twisting the other: a stiffer frame twists less for the same twisting force. It is measured as torque per degree of twist (N*m/deg). Why I test it: the suspension is supposed to absorb bumps. If the frame is softer than the suspension, the frame twists instead, which wastes the suspension's work and can damage the frame. So I want to know how stiff the chassis is on its own, before the suspension is attached. A reference point: student race car competitions like Formula SAE and Baja commonly use about 2000 N*m/deg as a benchmark. This vehicle will not run under the same conditions, so I treat it as a sanity check, not a pass/fail target.
              </p>
            </div>

            {/* Block (b): How the test works */}
            <div className="space-y-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                How the test works
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Opposite forces on the two front corners twist the chassis while the rear is held fixed. I measure how far each corner moves vertically, convert that to an angle of twist, and divide the applied torque by that angle.
              </p>
              <div className="space-y-2 max-w-xl">
                <div
                  className="cursor-pointer border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-xs hover:border-blue-500 transition-colors bg-white dark:bg-slate-950"
                  onClick={() => onInspectImage('images/torsional-rigidity-hand-calc.png')}
                >
                  <ProjectImage
                    src="images/torsional-rigidity-hand-calc.png"
                    alt="Hand calculation of torsional rigidity, worked through with the Setup 4 values."
                  />
                </div>
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  Hand calculation of torsional rigidity, worked through with the Setup 4 values.
                </div>
              </div>
            </div>

            {/* Block (c): Modeling decision: stand-in A-arms */}
            <div className="space-y-2 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Modeling decision: stand-in A-arms
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                The goal is to measure the chassis, not the suspension. The real suspension would flex too, and that flex would get mixed into the answer. Instead I replaced it with simple "dummy" A-arms and uprights, set to behave as stiff, rigid parts. They carry the load into the chassis the way the real suspension would, without adding flex of their own. I placed them at the exact suspension coordinates from the most recent full assembly, so the loads enter the chassis at the correct points. That assembly was the V8, which is why the simulation uses V8 and not the newest chassis.
              </p>
            </div>

            {/* Block (d): My approach, and what I was unsure about */}
            <div className="space-y-2 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                My approach, and what I was unsure about
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                This was my first time setting up a torsional rigidity analysis. While researching, I found that Formula SAE teams use several different boundary conditions, and I was not sure which was right. Instead of picking one, I built the model that most closely matches a physical test rig. I also kept the results from simpler setups, each adding complexity, so I could cross-check that the approach gave consistent results. The three Ansys setups landed within about 1.2% of each other (2246 to 2274 N*m/deg), which gave me confidence in the final setup.
              </p>
            </div>

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
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Torsional Rigidity Visual Documentation:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Torsion 1: Setup */}
                <div className="space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea torsional rigidity setup.png')}
                  >
                    <ProjectImage
                      src="images/autonomous off-road vehicle chassis fea torsional rigidity setup.png"
                      alt="Torsional Rigidity Simulation Setup and Boundary Constraints"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      1. Torsional Rigidity Setup & Constraints
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Ansys boundary setup with proper joints, exact rear suspension coordinates, rigid strut representation, and suspension components set to stiff so the result isolates the chassis.
                    </div>
                  </div>
                </div>

                {/* Torsion 2: Deformation Results */}
                <div className="space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis thumbnail.png')}
                  >
                    <ProjectImage
                      src="images/autonomous off-road vehicle chassis thumbnail.png"
                      alt="Torsional Rigidity Deformation Results"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      2. Torsional Rigidity Deformation Results
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Torsional deformation results under opposing loads (final conservative setup fixing suspension points: 2271.72 N*m/deg; 5-setup average: 2212.49 N*m/deg).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Bump Test */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>B. Bump Test Stress Analysis</span>
              </h3>
            </div>

            {/* Block 1: Why I run a bump test */}
            <div className="space-y-2 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Why I run a bump test
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Torsional rigidity tells me how stiff the frame is, but not whether any single tube is overloaded. A bump test answers that. I push up on the front-left wheel mounts with 2000 N, the way a wheel hitting a bump would, and see where stress concentrates. That shows which tubes and joints carry the most load, and how close the peak stress comes to the steel's yield strength, the point where it would start to bend permanently.
              </p>
            </div>

            {/* Block 2: Why the stand-in suspension is left out here */}
            <div className="space-y-2 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Why the stand-in suspension is left out here
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Unlike the torsional rigidity test, this one leaves out the dummy suspension. The torsional test measures how far the frame moves, so I needed stiff stand-ins to keep suspension flex out of the answer. The bump test looks at stress, not movement, and the stress inside stand-in parts means nothing since they are not real components, so I removed them. The load goes straight into the suspension mounting points on the chassis.
              </p>
            </div>

            {/* Existing Result Sentence */}
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Bump test: 8 rear fixtures and a 2000 N load on the front left suspension points, used to see where peak stress occurs. The largest stress magnitude was the minimum combined stress of <strong>76.4 MPa</strong> (compressive); maximum combined was <strong>54.8 MPa</strong>. Against the <strong>483 MPa</strong> yield strength that is roughly a <strong>6.3x margin</strong>.
            </div>

            {/* The 5 Bump Test FEA Visuals Grid - Sequentially Numbered, No Truncation, Natural Heights */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                The 5 Bump Test FEA Simulation Figures:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start pt-1">
                {/* Figure 1: Bump Setup */}
                <div className="space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test setup.png')}
                  >
                    <ProjectImage
                      src="images/autonomous off-road vehicle chassis fea bump test setup.png"
                      alt="Figure 1: Bump Test Setup & Boundary Conditions"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      Figure 1: Bump Test Setup
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      8 rear fixtures constrained with a 2000 N vertical shock load applied to front-left suspension points to observe stress concentrations.
                    </div>
                  </div>
                </div>

                {/* Figure 2: Direct (Axial) Stress */}
                <div className="space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test direct axial stress.png')}
                  >
                    <ProjectImage
                      src="images/autonomous off-road vehicle chassis fea bump test direct axial stress.png"
                      alt="Figure 2: Bump Test Direct (Axial) Stress (+ Tension / - Compression)"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      Figure 2: Direct (Axial) Stress
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Direct axial stress across spaceframe members, where (+) indicates tensile loading and (-) indicates compressive loading.
                    </div>
                  </div>
                </div>

                {/* Figure 3: Maximum Bending Stress */}
                <div className="space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png')}
                  >
                    <ProjectImage
                      src="images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png"
                      alt="Figure 3: Bump Test Maximum Bending Stress"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      Figure 3: Maximum Bending Stress
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Maximum bending stress contours throughout tubular frame spans resulting from moment transfer under the 2000 N shock load.
                    </div>
                  </div>
                </div>

                {/* Figure 4: Maximum Combined Stress */}
                <div className="space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test max combined stress.png')}
                  >
                    <ProjectImage
                      src="images/autonomous off-road vehicle chassis fea bump test max combined stress.png"
                      alt="Figure 4: Bump Test Maximum Combined Stress (54.8 MPa)"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      Figure 4: Max Combined Stress (54.8 MPa)
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Superposition of direct axial stress and maximum bending stress, resulting in a maximum combined tensile stress of 54.8 MPa.
                    </div>
                  </div>
                </div>

                {/* Figure 5: Min Combined Stress (76.4 MPa) */}
                <div className="space-y-2">
                  <div
                    className="cursor-pointer border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test min combined stress.png')}
                  >
                    <ProjectImage
                      src="images/autonomous off-road vehicle chassis fea bump test min combined stress.png"
                      alt="Figure 5: Min Combined Stress (76.4 MPa)"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      Figure 5: Min Combined Stress (76.4 MPa)
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Direct axial stress combined with minimum bending; largest stress magnitude overall at 76.4 MPa compressive (6.3x margin vs 483 MPa yield).
                    </div>
                  </div>
                </div>
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
                <span><strong>Chassis Baseline:</strong> FEA runs were executed on earlier chassis geometry (V8), rather than the final design.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Material Property:</strong> The bump evaluation utilized AISI 1020 annealed steel properties rather than cold-rolled stock.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Final Re-Run Planned:</strong> A definitive FEA re-run will be conducted on the final chassis design before tube fabrication begins.</span>
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
