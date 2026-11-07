import React, { useState } from 'react';
import { ProjectImage } from './ProjectImage';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface CombatRobotCaseStudyProps {
  onInspectImage: (src: string) => void;
}

export const CombatRobotCaseStudy: React.FC<CombatRobotCaseStudyProps> = ({ onInspectImage }) => {
  const [v1CadOpen, setV1CadOpen] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      {/* =========================================================================
          ROBOT PHOTO PROGRESSION
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>HARDWARE EVOLUTION</span>
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
                alt="Version 1 final: symmetric two-tooth PETG disk."
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Version 1 final: symmetric two-tooth PETG disk.
            </p>
          </div>

          {/* V2 Prototype */}
          <div className="space-y-2">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs cursor-pointer"
              onClick={() => onInspectImage('images/combat-robot-v2-prototype.jpg')}
            >
              <ProjectImage
                src="images/combat-robot-v2-prototype.jpg"
                alt="Version 2 prototype: asymmetric single-tooth weapon."
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Version 2 prototype: asymmetric single-tooth weapon.
            </p>
          </div>

          {/* V2 Final */}
          <div className="space-y-2">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors bg-white dark:bg-slate-950 shadow-xs cursor-pointer"
              onClick={() => onInspectImage('images/combat-robot-v2-final.jpg')}
            >
              <ProjectImage
                src="images/combat-robot-v2-final.jpg"
                alt="Version 2 final: lasted every match."
                hideCaptionInPlaceholder={true}
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Version 2 final: lasted every match.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01. CONTEXT & CLASS BASICS
          ========================================================================= */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>01. CONTEXT</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Class Rules & Weapon Architecture
        </h2>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            The 1 lb plastic class requires all-plastic structure. This is an undercutter spinner: the weapon spins horizontally just above the floor to hit the opponent's body and wheels. It had to be parametric so it could scale with the robot body.
          </p>
        </div>
      </section>

      {/* =========================================================================
          02. VERSION 1: SOLIDWORKS & PETG
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>02. VERSION 1 (SOLIDWORKS & PETG)</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Initial Symmetric Disk & Failure Investigation
        </h2>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-5">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Two-tooth symmetric disk, modeled in SolidWorks, prototyped in PLA and printed in PETG for competition. To meet the weight budget, two weight-relief pockets near the center were printed at roughly 60% infill instead of solid walls.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              Observed failure: delamination during spin-up
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              The weapon split along its layers during spin-up, without making contact, right where the partial-infill pockets met the solid walls.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Suspected Causes
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span>Moisture absorption in the PETG (no dry box).</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span>High moment of inertia from the broad disk with pockets near the center.</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Electronics
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I diagnosed and resolved an incorrect battery connector, a faulty switch, and a defective brushed drive motor.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRANSITION
          ========================================================================= */}
      <p className="text-sm text-slate-600 dark:text-slate-400 italic px-1">
        For v2 I recommended moving from SolidWorks to Fusion 360 because SolidWorks was hard for the team to collaborate in and Fusion's cloud sharing is easier.
      </p>

      {/* =========================================================================
          03. VERSION 2: FUSION 360 & SUPER PLA+ (CORE)
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>03. VERSION 2 (FUSION 360 & SUPER PLA+)</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Asymmetric Single-Tooth Redesign and Print Tuning
        </h2>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-6 shadow-xs">
          {/* V2 weapon intro */}
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            I replaced the disk with a smaller asymmetric single-tooth weapon with a counterweight, built in Fusion 360 with named parameters so it scales with the body.
          </p>

          {/* Bite box (neutral heading) */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              Weapon Bite & Tooth Geometry
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              Bite is how much of the opponent a weapon takes on each hit. One tooth hits half as often as two, so each hit can take a bigger bite. I also set 10° of rake and 3° of relief on the tooth.
            </p>
          </div>

          {/* Sizing / layout (three short lines) */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Sizing & Layout Decisions
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                <span>The weapon extends past the body; the counterweight spins at a smaller radius so the tooth always strikes first.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                <span>The weapon's center of mass sits on its rotation axis; the counterweight balances the tooth.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                <span>The robot's center of mass sits toward the wheels for traction, with the wheels as close to the weapon as its sweep allows.</span>
              </li>
            </ul>
          </div>

          {/* Collapsible CAD Images of v1 and v2 weapons */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setV1CadOpen(!v1CadOpen)}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-left transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                View CAD Models: V1 Symmetric Disk vs. V2 Asymmetric Bar
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
                      hideCaptionInPlaceholder={true}
                    />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    V1 SolidWorks model: two-tooth symmetric disk with internal weight pockets.
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
                      hideCaptionInPlaceholder={true}
                    />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    V2 Fusion 360 model: single striking tooth with a counterweighted hub.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Print Settings & Slicer Tuning */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-5 shadow-xs">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              Print Settings
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I chose Super PLA+ for strength that is easier to print than PETG. The slicer settings aim for a near-solid part:
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
              <span>100% concentric infill with wider 0.8 mm lines and a 0.16 mm layer height (standard: 0.4 mm and 0.2 mm), which shrinks the gaps between lines.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
              <span>An alternating half-width wall offsets every other layer by 0.4 mm, so each seam sits under the middle of a line.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
              <span>225 °C (standard 210 °C) supports the wider lines and fuses layers better; a 1.01 flow modifier (standard 1.0) presses a little extra plastic into the seam below.</span>
            </li>
          </ul>

          {/* Inline Layer-Gap Cross-Section Figure */}
          <div className="pt-3 space-y-2 w-full">
            <div
              className="w-full border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950 cursor-pointer shadow-xs"
              onClick={() => onInspectImage('images/combat-robot-layer-gaps.png')}
            >
              <ProjectImage
                src="images/combat-robot-layer-gaps.png"
                alt="Illustration of the line-width and stagger principle, not to exact scale."
                hideCaptionInPlaceholder={true}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center">
              Illustration of the line-width and stagger principle, not to exact scale.
            </p>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-5 sm:p-6 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Outcome</span>
          </div>
          <p className="text-base sm:text-lg text-slate-900 dark:text-white font-medium leading-relaxed">
            The v2 weapon lasted the entire competition without breaking or needing replacement.
          </p>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
              Front Lifting Forks
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Forks are prongs at the front that slide under an opponent and lift it slightly so the spinning weapon can hit lower. They mount beside the weapon, outside its spinning radius, so the robot body will be widened.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
              Wheel Attachment
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              The v2 wheels were press fit with a set screw, but they slowly drifted outward until reaching the wheel guard, and the set screw slipped. The fix is being evaluated.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
              Wheel Guards
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Redesign so opponents have less chance to hook underneath.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
