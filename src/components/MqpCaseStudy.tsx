import React, { useState } from 'react';
import { ProjectImage } from './ProjectImage';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  Maximize2,
  ShieldAlert,
  UserCheck,
  Activity,
} from 'lucide-react';

interface MqpCaseStudyProps {
  onInspectImage: (src: string) => void;
}

export const MqpCaseStudy: React.FC<MqpCaseStudyProps> = ({ onInspectImage }) => {
  const [versionLogOpen, setVersionLogOpen] = useState(false);

  return (
    <div className="space-y-14 animate-in fade-in duration-200">
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
              The lab's existing unmanned ground vehicle has no suspension, tops out around 5 mph, has no independent braking, and is not weatherproof. The goal is a new tube-frame chassis that integrates suspension, supports braking and weatherproofing, and reaches 15 mph, working alongside separate Suspension and Mechatronics teams.
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
          2. DESIGN EVOLUTION (FILMSTRIP OF EXACTLY 4 VERSIONS + EXPANDABLE LOG)
          ========================================================================= */}
      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>02. DESIGN EVOLUTION</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Four Pivotal Architectural Turning Points
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">Filmstrip: V2 · V5 · V6 · V10</span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Over eleven iterations, our team systematically eliminated manufacturing bottlenecks and optimized packaging. Below is the filmstrip of exactly the four pivotal turning points, with one line each on what changed and why:
        </p>

        {/* 4-Version Filmstrip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* V2 */}
          <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all flex flex-col justify-between group">
            <div
              className="cursor-pointer"
              onClick={() => onInspectImage('images/autonomous off-road vehicle chassis v2.png')}
            >
              <ProjectImage
                src="images/autonomous off-road vehicle chassis v2.png"
                alt="Chassis V2 CAD model (rollcage removed)"
                aspectRatioClass="aspect-[16/11]"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Version V2
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Rollcage Removal
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                V2: removed the rollcage geometry (welding complexity, and the vehicle can't be allowed to roll because of the LiDAR).
              </p>
            </div>
          </article>

          {/* V5 */}
          <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all flex flex-col justify-between group">
            <div
              className="cursor-pointer"
              onClick={() => onInspectImage('images/autonomous off-road vehicle chassis v5.png')}
            >
              <ProjectImage
                src="images/autonomous off-road vehicle chassis v5.png"
                alt="Chassis V5 CAD model (rear A-arms)"
                aspectRatioClass="aspect-[16/11]"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Version V5
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Rear A-Arms Transition
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                V5: switched to A-arms at the rear (trailing arms were too complex for the team's knowledge, budget, and time).
              </p>
            </div>
          </article>

          {/* V6 */}
          <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all flex flex-col justify-between group">
            <div
              className="cursor-pointer"
              onClick={() => onInspectImage('images/autonomous off-road vehicle chassis v6.png')}
            >
              <ProjectImage
                src="images/autonomous off-road vehicle chassis v6.png"
                alt="Chassis V6 CAD model (lengthened frame & horizontal motors)"
                aspectRatioClass="aspect-[16/11]"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Version V6
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Lengthened Chassis & Low CG
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                V6: made the chassis slightly longer and placed the motors horizontally to lower the center of mass.
              </p>
            </div>
          </article>

          {/* V10 */}
          <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all flex flex-col justify-between group">
            <div
              className="cursor-pointer"
              onClick={() => onInspectImage('images/autonomous off-road vehicle chassis v10.png')}
            >
              <ProjectImage
                src="images/autonomous off-road vehicle chassis v10.png"
                alt="Chassis V10 CAD model (single continuous bottom tube)"
                aspectRatioClass="aspect-[16/11]"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Version V10
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Single Full Bottom Tube
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                V10: simplified the front offsets into a single full bottom tube.
              </p>
            </div>
          </article>
        </div>

        {/* Collapsed/Expandable Full Version Log (V1 through V11) */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
          <button
            onClick={() => setVersionLogOpen(!versionLogOpen)}
            className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Full Chassis Version Log (V1 through V11)</span>
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
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V1</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Initial baseline spaceframe concept with overhead rollcage envelope and exploratory tube layouts.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V2</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Removed the rollcage geometry (welding complexity, and the vehicle can't be allowed to roll because of the LiDAR).
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-400 w-10 shrink-0">V3</span>
                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    [ADD: V3 node adjustments and suspension clearance updates from MQP report].
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-400 w-10 shrink-0">V4</span>
                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    [ADD: V4 rear bulkhead refinement and trailing arm mounting from MQP report].
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V5</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Switched to A-arms at the rear (trailing arms were too complex for the team's knowledge, budget, and time).
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V6</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Made the chassis slightly longer and placed the motors horizontally to lower the center of mass.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-400 w-10 shrink-0">V7</span>
                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    [ADD: V7 diagonal bracing additions and hardpoint alignment from MQP report].
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-400 w-10 shrink-0">V8</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Chassis revision utilized as the geometric baseline for preliminary SolidWorks and Ansys finite element stiffness and bump evaluations.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3">
                  <span className="font-mono font-bold text-slate-400 w-10 shrink-0">V9</span>
                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    [ADD: V9 joint reinforcement based on preliminary FEA stress contours from MQP report].
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-10 shrink-0">V10</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    Simplified the front offsets into a single full bottom tube.
                  </span>
                </li>
                <li className="py-2.5 flex items-start gap-3 bg-amber-50/50 dark:bg-amber-950/20 px-2 rounded">
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400 w-10 shrink-0">V11</span>
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    <span className="font-bold text-amber-700 dark:text-amber-400">In progress:</span> improving dimension customizability and resolving under-defined sketch dimensions.
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          3. MY CONTRIBUTION (PERSONAL OWNERSHIP BOUNDARY)
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <UserCheck className="w-4 h-4" />
          <span>03. MY CONTRIBUTION (INDIVIDUAL SCOPE)</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Personal Ownership & Engineering Boundaries
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border-2 border-blue-500/40 dark:border-blue-500/30 bg-blue-50/30 dark:bg-blue-950/20 shadow-xs space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
              What I Personally Performed & Contributed
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Design feedback on the chassis:</strong> I recommended making some parts from one continuous bent tube instead of separate segments, making tubes meet at shared nodes at key points instead of offsets, and removing excess tubing in places.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Finite Element Analysis (FEA):</strong> I performed ALL the FEA: the SolidWorks weldments torsional rigidity study, the Ansys torsional rigidity models, and the Ansys bump test, including setting up the boundary conditions.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Shop Safety Certification:</strong> I completed the welding safety (NFPA hot work) training required for the university shop.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  I gave input on other team tasks throughout the process.
                </div>
              </li>
            </ul>
          </div>

          {/* Explicit Non-Involvement Boundary */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
              <span>Explicit Non-Attribution Boundary</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I did NOT: lead the main CAD model, make the cutting plan, design the welding fixtures, design the gearbox adapter or select parts, or design the weatherproof shell. Do not imply I did.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FEA CONTENT (THE LONGEST SECTION, FRAMED AS PRELIMINARY)
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
          <p className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Framed as Preliminary — Earlier Chassis Version (V8) & Material Sensitivity</span>
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-8 shadow-xs">
          {/* Part A: Torsional Rigidity */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>A. Torsional Rigidity: Modeling Evolution & Boundary Conditions</span>
            </h3>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Torsional rigidity: first run in SolidWorks (beams via weldments; 8 rear points fixed, dummy A-arms at the front, opposing loads) gave <strong>1914.61 N*m/deg</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Simulation Limitations in Initial SolidWorks Beam Run
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Meshing errors affected joint/node accuracy, and the dummy A-arms transmitted moment and added deformation. So I moved to Ansys with proper joints, exact rear suspension coordinates, a rigid strut representation, and suspension components set to stiff so the result isolates the chassis.
              </p>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              I built several models of increasing complexity and compared them. Fixing the rear bulkhead gave a higher value than fixing the suspension points, so I fixed the suspension points for the Ansys runs to stay conservative. Final setup: <strong>2271.72 N*m/deg</strong>. Average across the five setups: <strong>2212.49 N*m/deg</strong>.
            </p>

            {/* Compact 5-Result Table */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
                Five Torsional Rigidity Simulation Setups Compared:
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/80 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="py-2.5 px-4">Setup</th>
                      <th className="py-2.5 px-4">Software</th>
                      <th className="py-2.5 px-4">Boundary Condition Strategy</th>
                      <th className="py-2.5 px-4 text-right">Torsional Rigidity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900 dark:text-white">Setup 1</td>
                      <td className="py-2.5 px-4 text-slate-600 dark:text-slate-300">SolidWorks Simulation</td>
                      <td className="py-2.5 px-4 text-slate-600 dark:text-slate-300">Beam weldments; 8 rear points fixed; dummy front A-arms; opposing loads</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900 dark:text-white text-right">1914.61 N*m/deg</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900 dark:text-white">Setup 2</td>
                      <td className="py-2.5 px-4 text-slate-600 dark:text-slate-300">Ansys Mechanical</td>
                      <td className="py-2.5 px-4 text-slate-500 dark:text-slate-400 italic">[ADD: Intermediate boundary constraint setup]</td>
                      <td className="py-2.5 px-4 font-mono text-slate-500 text-right">[ADD: Setup 2 result] N*m/deg</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900 dark:text-white">Setup 3</td>
                      <td className="py-2.5 px-4 text-slate-600 dark:text-slate-300">Ansys Mechanical</td>
                      <td className="py-2.5 px-4 text-slate-500 dark:text-slate-400 italic">[ADD: Intermediate joint stiffness configuration]</td>
                      <td className="py-2.5 px-4 font-mono text-slate-500 text-right">[ADD: Setup 3 result] N*m/deg</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900 dark:text-white">Setup 4</td>
                      <td className="py-2.5 px-4 text-slate-600 dark:text-slate-300">Ansys Mechanical</td>
                      <td className="py-2.5 px-4 text-slate-500 dark:text-slate-400 italic">Fixed rear bulkhead comparison setup (yielded higher value; excluded for conservatism)</td>
                      <td className="py-2.5 px-4 font-mono text-slate-500 text-right">[ADD: Setup 4 result] N*m/deg</td>
                    </tr>
                    <tr className="bg-blue-50/60 dark:bg-blue-950/30">
                      <td className="py-2.5 px-4 font-mono font-bold text-blue-700 dark:text-blue-300">Setup 5 (Final)</td>
                      <td className="py-2.5 px-4 font-medium text-blue-900 dark:text-blue-200">Ansys Mechanical</td>
                      <td className="py-2.5 px-4 font-medium text-blue-900 dark:text-blue-200">Proper joints, exact rear suspension coordinates, rigid strut representation, suspension components set to stiff, fixed suspension points</td>
                      <td className="py-2.5 px-4 font-mono font-extrabold text-blue-700 dark:text-blue-300 text-right">2271.72 N*m/deg</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
                <div>
                  <strong>Five-Setup Average:</strong> <span className="font-mono font-bold text-slate-900 dark:text-white">2212.49 N*m/deg</span>
                </div>
                <div>
                  <strong>Industry Benchmark:</strong> The commonly cited Baja/FSAE benchmark is about <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">2000 N*m/deg</span>.
                </div>
              </div>
            </div>

            {/* Torsional Rigidity Visual Documentation (Setup & Deformation Results Only) */}
            <div className="pt-2 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Torsional Rigidity Visual Documentation (Setup & Deformation Results):
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Torsion 1: Setup */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea torsional rigidity setup.png"
                    alt="Torsional Rigidity Simulation Setup and Boundary Constraints"
                    aspectRatioClass="aspect-[16/10]"
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

                {/* Torsion 2: Deformation Results (Also the Project Thumbnail) */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis thumbnail.png"
                    alt="Torsional Rigidity Deformation Results (Chassis Thumbnail)"
                    aspectRatioClass="aspect-[16/10]"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis thumbnail.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      2. Torsional Rigidity Deformation Results (Project Thumbnail)
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

            {/* The 5 Bump Test FEA Visuals Grid */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                <span>The 5 Bump Test FEA Simulation Images:</span>
                <span className="text-blue-600 dark:text-blue-400">Direct Axial · Max Bending · Max Combined · Min Combined · Setup</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-1">
                {/* 1. Bump Setup & Boundary Conditions */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test setup.png"
                    alt="Bump Test Setup & Boundary Conditions"
                    aspectRatioClass="aspect-[16/10]"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test setup.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      1. Bump Test Setup
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      8 rear fixtures constrained with a 2000 N vertical shock load applied to front-left suspension points to observe stress concentrations.
                    </span>
                  </figcaption>
                </figure>

                {/* 2. Direct (Axial) Stress */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test direct axial stress.png"
                    alt="Bump Test Direct (Axial) Stress (+ Tension / - Compression)"
                    aspectRatioClass="aspect-[16/10]"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test direct axial stress.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      2. Direct (Axial) Stress
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Direct axial stress across spaceframe members, where (+) indicates tensile loading and (-) indicates compressive loading.
                    </span>
                  </figcaption>
                </figure>

                {/* 3. Maximum Bending Stress */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png"
                    alt="Bump Test Maximum Bending Stress"
                    aspectRatioClass="aspect-[16/10]"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      3. Maximum Bending Stress
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Maximum bending stress contours throughout tubular frame spans resulting from moment transfer under the 2000 N shock load.
                    </span>
                  </figcaption>
                </figure>

                {/* 4. Maximum Combined Stress */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test max combined stress.png"
                    alt="Bump Test Maximum Combined Stress (Direct + Max Bending: 54.8 MPa)"
                    aspectRatioClass="aspect-[16/10]"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test max combined stress.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      4. Max Combined Stress (54.8 MPa)
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Superposition of direct axial stress and maximum bending stress, resulting in a maximum combined tensile stress of 54.8 MPa.
                    </span>
                  </figcaption>
                </figure>

                {/* 5. Minimum Combined Stress */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis fea bump test min combined stress.png"
                    alt="Bump Test Minimum Combined Stress (Direct + Min Bending: 76.4 MPa Compressive)"
                    aspectRatioClass="aspect-[16/10]"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis fea bump test min combined stress.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      5. Min Combined Stress (76.4 MPa Compressive)
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Direct axial stress combined with minimum bending; largest stress magnitude overall at 76.4 MPa compressive (~6.3x margin vs 483 MPa yield).
                    </span>
                  </figcaption>
                </figure>

                {/* 6. Hardware Reference: Physical Rolling Chassis Frame */}
                <figure className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden group flex flex-col justify-between shadow-xs">
                  <ProjectImage
                    src="images/autonomous off-road vehicle chassis rolling frame.png"
                    alt="Physical Rolling Chassis Frame Assembly"
                    aspectRatioClass="aspect-[16/10]"
                    onClick={() => onInspectImage('images/autonomous off-road vehicle chassis rolling frame.png')}
                  />
                  <figcaption className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block truncate">
                      Hardware Frame Pickup Hardpoints
                    </span>
                    <span className="text-[11px] leading-relaxed block text-slate-600 dark:text-slate-300">
                      Physical welded frame pickup coordinates matching the simulated suspension boundary constraints.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Mandatory Preliminary Simulation Caveats Box */}
          <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800/80 bg-amber-50/70 dark:bg-amber-950/30 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Mandatory Preliminary Simulation Caveats</span>
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
            Status: design and analysis are nearly complete. Fabrication (cutting, notching, bending, welding) is expected to start in B-term. Stock is purchased and the welding safety training is done. The Product/Outcome section must say this is pending.
          </p>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT I LEARNED
          ========================================================================= */}
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
    </div>
  );
};
