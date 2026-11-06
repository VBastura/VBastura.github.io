import React, { useState } from 'react';
import { ProjectImage } from './ProjectImage';
import {
  Wrench,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Lightbulb,
  Crosshair,
  Gauge,
  Sliders,
  Calendar,
} from 'lucide-react';

interface CombatRobotCaseStudyProps {
  onInspectImage: (src: string) => void;
}

export const CombatRobotCaseStudy: React.FC<CombatRobotCaseStudyProps> = ({ onInspectImage }) => {
  const [v1CadOpen, setV1CadOpen] = useState(false);
  const [layerGapsOpen, setLayerGapsOpen] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      {/* =========================================================================
          MY ROLE SUMMARY
          - Detailed summary of personal engineering ownership
          ========================================================================= */}
      <section className="p-6 sm:p-7 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
          <Wrench className="w-4 h-4" />
          <span>My Engineering Ownership</span>
        </div>
        <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
          I had full ownership of the weapon design on both versions, contributed to the overall robot architecture, 3D printed every structural and mechanical component, and soldered, wired, tested, and diagnosed the entire electrical harness on both builds.
        </p>
      </section>

      {/* =========================================================================
          ROBOT PHOTO PROGRESSION
          Simple 3-photo narrative: v1 Final -> v2 Prototype -> v2 Final
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>BUILD PROGRESSION</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Hardware Evolution Across Competitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* V1 Final */}
          <div className="space-y-2">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs cursor-pointer"
              onClick={() => onInspectImage('images/combat-robot-v1-final.jpg')}
            >
              <ProjectImage
                src="images/combat-robot-v1-final.jpg"
                alt="Combat Robot V1 Final Build"
              />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                1. Version 1 Final Build
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Initial build featuring a symmetric PETG disk-style weapon before match testing.
              </p>
            </div>
          </div>

          {/* V2 Prototype */}
          <div className="space-y-2">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs cursor-pointer"
              onClick={() => onInspectImage('images/combat-robot-v2-prototype.jpg')}
            >
              <ProjectImage
                src="images/combat-robot-v2-prototype.jpg"
                alt="Combat Robot V2 Prototype"
              />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                2. Version 2 Prototype
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Bench-tested prototype with single-tooth asymmetric spinner and relocated mass.
              </p>
            </div>
          </div>

          {/* V2 Final */}
          <div className="space-y-2">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs cursor-pointer"
              onClick={() => onInspectImage('images/combat-robot-v2-final.jpg')}
            >
              <ProjectImage
                src="images/combat-robot-v2-final.jpg"
                alt="Combat Robot V2 Final Competition Build"
              />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                3. Version 2 Final Competition Build
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Complete competition robot with tuned print parameters that lasted every match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01. CONTEXT & CLASS BASICS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>01. CONTEXT</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Class Rules & Weapon Architecture
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            The plastic antweight class limits each robot to a total weight of 1 lb with all-plastic structural materials. Our chosen architecture is an undercutter spinner—a combat robot whose spinning blade rotates horizontally just above the floor to strike opponent chassis and wheels.
          </p>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Core Requirement:</strong> Beyond meeting the 1 lb weight ceiling, the weapon geometry had to be fully parametric so its diameter, bore spacing, and tooth geometry could adapt as the chassis envelope and wheel positions evolved.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. VERSION 1: WHAT HAPPENED & FAILURE INVESTIGATION
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>02. VERSION 1 (SOLIDWORKS & PETG)</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Initial Symmetric Disk & Failure Investigation
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Design & Print Setup
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              For version 1, I modeled a parametric two-tooth symmetric disk weapon in SolidWorks. After fitting an initial test prototype in PLA, I printed the competition weapon in PETG. To keep the weapon under our tight weight budget, several weight-relief pockets near the central bore were printed with roughly 60% infill rather than solid walls.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              Observed Failure: Delamination at High RPM
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              The weapon did not fail from opponent impact; it split apart along print layers during motor spin-up without making contact. The fracture occurred directly where the partial-infill pockets met the solid perimeter walls.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              My Suspected Root Causes
            </h3>
            <ul className="grid grid-cols-1 gap-2.5">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span>
                  <strong>Moisture absorption:</strong> Without a dedicated dry box during storage and printing, the PETG filament likely absorbed atmospheric moisture, which weakens interlayer bonding in PETG.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span>
                  <strong>Inertial stress concentration:</strong> The broad disk geometry placed substantial mass far from the center, creating a high moment of inertia that applied severe outward rotational stress across the partial-infill pockets during rapid acceleration.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Electrical diagnostics:</strong> While assembling and testing the v1 electronics, I also identified and resolved three hardware faults: an incorrect wire connector type, a faulty power switch, and a defective brushless motor.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRANSITION CALLOUT
          ========================================================================= */}
      <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>Workflow Transition:</strong> I recommended migrating our CAD workspace from SolidWorks to Fusion 360 for version 2 because SolidWorks made team file sharing cumbersome, whereas Fusion provided smooth cloud collaboration for our growing 4-person team.
        </p>
      </div>

      {/* =========================================================================
          03. VERSION 2: ASYMMETRIC REDESIGN & TUNED FDM FABRICATION (CORE)
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>03. VERSION 2 (FUSION 360 & SUPER PLA+)</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Asymmetric Single-Tooth Redesign & High-Density FDM Tuning
        </h2>

        {/* CAD Comparison Expandable / Side-by-Side */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-6 shadow-xs">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Weapon Redesign & Geometry Strategy</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I replaced the full disk with a compact, asymmetric single-tooth bar counterbalanced by a shorter opposing mass. Built parametrically in Fusion 360 using named variables, every dimension can scale instantly whenever chassis geometry changes.
            </p>
          </div>

          {/* Explaining Bite */}
          <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold flex items-center gap-1.5">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Why an Asymmetric Single Tooth Delivers Superior Bite</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              Weapon "bite" is the depth of material the blade engages on an opponent on each contact; because a single tooth only passes through the hit zone once per revolution instead of twice, the robot has twice as long to move into the opponent between strikes, delivering significantly deeper bites and cleaner energy transfer.
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              I also dialed in a 10° tooth rake and 3° relief angle to assist positive tooth engagement upon collision.
            </p>
          </div>

          {/* Sizing & Layout Decisions */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Sizing & Layout Decisions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">Tooth Extension & Clearance</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The striking radius extends safely past the front chassis perimeter to strike first without chassis interference.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">Offset Counterweight Radius</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The counterweight rotates at a smaller radius than the tooth, guaranteeing the rear weight never clips an opponent before the tooth strikes.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">Balanced Center of Mass</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The counterweight's mass was tuned so the weapon's center of mass aligns exactly on the motor drive shaft, eliminating spin vibration.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">Overall Chassis Balance & Traction</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The overall robot center of mass was shifted toward the drive wheels for traction, tucking the wheels as close to the weapon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Collapsible CAD Images of v1 and v2 weapons */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setV1CadOpen(!v1CadOpen)}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-left transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span>View CAD Models: V1 Symmetric Disk vs. V2 Asymmetric Bar</span>
              </span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 flex items-center gap-1">
                {v1CadOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {v1CadOpen && (
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <div
                    className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950 p-1 cursor-pointer"
                    onClick={() => onInspectImage('images/combat-robot-v1-weapon-cad.png')}
                  >
                    <ProjectImage
                      src="images/combat-robot-v1-weapon-cad.png"
                      alt="CAD Model of V1 Symmetric Disk Weapon"
                    />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    V1 SolidWorks parametric model: two-tooth symmetric disk with internal weight pockets.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div
                    className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950 p-1 cursor-pointer"
                    onClick={() => onInspectImage('images/combat-robot-v2-weapon-cad.png')}
                  >
                    <ProjectImage
                      src="images/combat-robot-v2-weapon-cad.png"
                      alt="CAD Model of V2 Asymmetric Single-Tooth Weapon"
                    />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    V2 Fusion 360 parametric model: single striking tooth with a counterweighted hub.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Major Subsection: Print Settings & Slicer Tuning */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-6 shadow-xs">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              <Sliders className="w-4 h-4" />
              <span>Print Settings & Interlayer Fusion Strategy</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Pushing FDM 3D Printing Toward a Near-Solid Functional Part
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              For v2, I selected <strong>Super PLA+</strong>, which delivers high impact strength while printing with greater consistency than PETG. The core manufacturing challenge was modifying FDM slicer parameters so the plastic weapon behaves like a solid, homogeneous part rather than bonded strands that split under stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                100% Concentric Infill & Seam Staggering
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                I printed with 100% concentric infill so the entire blade is effectively continuous walls. To prevent stacked vertical seams, I added an alternating half-width wall line (0.4 mm) on every other layer; this shifts each seam so it rests under the solid center of the line above it.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Thermal Bonding & Flow Packing
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                I increased printing temperature to 225 °C to sustain high flow through wider 0.8 mm extrusion lines and remelt adjacent plastic for deeper interlayer fusion. A slight 1.01 infill flow modifier presses just enough molten plastic down to completely seal the seam below.
              </p>
            </div>
          </div>

          {/* Slicer Comparison Table */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Slicer Parameters: Standard Defaults vs. My Tuned Settings
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/80 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Slicer Parameter</th>
                    <th className="py-2.5 px-3">Standard Settings</th>
                    <th className="py-2.5 px-3 font-bold text-blue-600 dark:text-blue-400">My Tuned Settings</th>
                    <th className="py-2.5 px-3 text-slate-500 dark:text-slate-400">Engineering Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-900 dark:text-white">Layer Height</td>
                    <td className="py-2.5 px-3 font-mono text-slate-600 dark:text-slate-400">0.20 mm</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-blue-700 dark:text-blue-300">0.16 mm</td>
                    <td className="py-2.5 px-3 text-xs text-slate-600 dark:text-slate-400">Thinner layers increase width-to-height ratio to flatten and compress lines</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-900 dark:text-white">Infill Line Width</td>
                    <td className="py-2.5 px-3 font-mono text-slate-600 dark:text-slate-400">0.40 mm</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-blue-700 dark:text-blue-300">0.80 mm (concentric)</td>
                    <td className="py-2.5 px-3 text-xs text-slate-600 dark:text-slate-400">Doubles extrusion width to eliminate voids between adjacent strands</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-900 dark:text-white">Outer Wall</td>
                    <td className="py-2.5 px-3 font-mono text-slate-600 dark:text-slate-400">0.42 mm</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-blue-700 dark:text-blue-300">0.42 mm (single wall)</td>
                    <td className="py-2.5 px-3 text-xs text-slate-600 dark:text-slate-400">Keeps external dimensional tolerances precise</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-900 dark:text-white">Alternating Wall</td>
                    <td className="py-2.5 px-3 font-mono text-slate-600 dark:text-slate-400">None</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-blue-700 dark:text-blue-300">0.40 mm</td>
                    <td className="py-2.5 px-3 text-xs text-slate-600 dark:text-slate-400">Offsets subsequent layer lines by half a width to bridge seams like brickwork</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-900 dark:text-white">Printing Temperature</td>
                    <td className="py-2.5 px-3 font-mono text-slate-600 dark:text-slate-400">210 °C</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-blue-700 dark:text-blue-300">225 °C</td>
                    <td className="py-2.5 px-3 text-xs text-slate-600 dark:text-slate-400">Aids wide-line flow and promotes thermal interlayer remelting</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-900 dark:text-white">Infill Flow Modifier</td>
                    <td className="py-2.5 px-3 font-mono text-slate-600 dark:text-slate-400">1.00</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-blue-700 dark:text-blue-300">1.01</td>
                    <td className="py-2.5 px-3 text-xs text-slate-600 dark:text-slate-400">Forces a 1% surplus of plastic into the microscopic seam valleys below</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Layer Gap Illustration Figure in an Expander */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setLayerGapsOpen(!layerGapsOpen)}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-left transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span>View Layer-Gap Cross-Section Diagram (Line-Width & Stagger Principle)</span>
              </span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 flex items-center gap-1">
                {layerGapsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {layerGapsOpen && (
              <div className="pt-4 space-y-2">
                <div
                  className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950 p-2 cursor-pointer max-w-2xl mx-auto shadow-xs"
                  onClick={() => onInspectImage('images/combat-robot-layer-gaps.png')}
                >
                  <ProjectImage
                    src="images/combat-robot-layer-gaps.png"
                    alt="Layer-Gap Cross-Section Diagram"
                  />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center max-w-xl mx-auto">
                  Conceptual diagram illustrating line-width and seam-staggering principles, not an exact-scale technical drawing.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-6 sm:p-7 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Outcome</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Full Competition Durability
          </h3>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            The redesigned version 2 weapon lasted through the entire competition without fracturing, cracking, or requiring replacement.
          </p>
          <div className="pt-2 text-xs text-slate-600 dark:text-slate-400 border-t border-emerald-200/60 dark:border-emerald-900/40">
            <strong>Electronics note:</strong> For version 2, I wired, routed, and tested the full electrical harness again, ensuring clean wire protection inside the revised chassis geometry.
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. NEXT VERSION (PLANNED)
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>04. NEXT VERSION (PLANNED)</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Planned Improvements for Upcoming Competitions
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-5">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic">
            Planned updates based on competition performance; these items are currently in evaluation rather than tested hardware.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                Front Lifting Forks
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Forks are forward prongs that slide underneath an opponent to lift its chassis slightly, letting the horizontal spinner strike lower on vulnerable baseplates. They will mount beside the weapon outside its spinning radius to maintain full structural strength, which will require widening the front chassis envelope.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                Wheel Retention Revision
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                In v2, the wheels used a press fit secured by a set screw, but they slowly drifted outward along the axle until rubbing against the outer wheel guard, and the set screws loosened as friction warmed the plastic hub. We are currently evaluating revised axle locking options.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                Wheel Guard Geometry
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                A minor profile adjustment to the outer wheel guards will reduce ground clearance gaps, preventing opposing lifters or wedges from hooking underneath during close contact.
              </p>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
            <strong>Material continuity:</strong> The weapon material (Super PLA+) and the tuned 100% concentric infill print workflow will carry forward unchanged into the next iteration.
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. TAKEAWAYS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>05. TAKEAWAYS</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Engineering Takeaways
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            This project demonstrated how to work through real engineering cycles beyond a one-off class build: diagnosing why a physical part failed under operating loads, proposing a sound mechanical fix, and executing an improved iteration.
          </p>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            I became comfortable pushing 3D printing past standard hobby settings—treating slicer parameters as manufacturing controls to extract structural durability out of the FDM process.
          </p>
        </div>
      </section>
    </div>
  );
};
