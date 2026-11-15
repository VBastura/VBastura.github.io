import React, { useState } from 'react';
import { ProjectImage } from './ProjectImage';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
} from 'lucide-react';

interface RoboticPanFluteCaseStudyProps {
  onInspectImage: (src: string) => void;
  reportUrl?: string;
}

export const RoboticPanFluteCaseStudy: React.FC<RoboticPanFluteCaseStudyProps> = ({
  onInspectImage,
  reportUrl = '#',
}) => {
  const [calibrationOpen, setCalibrationOpen] = useState(false);
  const [schematicOpen, setSchematicOpen] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      {/* =========================================================================
          01. OVERVIEW
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>01. OVERVIEW</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Overview
        </h2>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-6 shadow-xs">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            A pan flute makes each note with a tube of a different length. This robot arranges 13 tubes in a circle on a drum. A stepper motor turns the drum to the right tube, and one adjustable air source blows across it. Notes come from music software over MIDI. The tubes and drum are 3D printed, which kept cost down and made the design easy to adjust. Built for WPI&apos;s Musical Robotics course.
          </p>

          {/* Existing top-down drum photo */}
          <div className="space-y-2 max-w-sm mx-auto">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-xs cursor-pointer"
              onClick={() => onInspectImage('images/pan flute robot top down view.jpg')}
            >
              <ProjectImage
                src="images/pan flute robot top down view.jpg"
                alt="Top view of the rotating drum, air nozzle and electronics."
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-center">
              Top view of the rotating drum, air nozzle and electronics.
            </p>
          </div>

          {/* Simple text flow row */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono">
              {[
                'MIDI input (Ableton Live)',
                'Arduino',
                'stepper motor',
                'rotating drum',
                'servo-positioned air nozzle',
                'tube',
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200 shadow-2xs">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-slate-400 dark:text-slate-500 font-bold select-none">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. MY CONTRIBUTION
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>02. MY CONTRIBUTION</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          My Contribution
        </h2>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-5 shadow-xs">
          <ul className="space-y-3">
            {[
              "Designed the mechanism that adjusts the air nozzle's height and angle",
              'Helped design the mounts and select the servos for the airflow system',
              'Rewired and organized the electronics, and added a diode to suppress solenoid interference',
              'Helped integrate the mechanical, electrical and software parts',
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-3 border-t border-slate-100 dark:border-slate-800">
            Calibration software and note tuning were done by teammates.
          </p>
        </div>
      </section>

      {/* =========================================================================
          03. DESIGN DECISIONS
          ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>03. DESIGN DECISIONS</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Design Decisions
          </h2>
        </div>

        {/* Card A: One rotating air source */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-4 shadow-xs">
          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            One rotating air source
          </h3>

          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              PROBLEM
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              A pan flute needs a different tube for every note. A separate air valve for each tube would need more hardware, cost more and be harder to program.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
              DECISION
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              Use one air source and rotate the tubes to it. The rotation also adds motion to watch, which mattered because musical and visual qualities both shaped the design.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              TRADEOFF
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              Only one note sounds at a time, so no chords. Moving the drum can slide between notes, which separate valves would not allow.
            </p>
          </div>
        </div>

        {/* Card B: Two adjustable air axes */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-4 shadow-xs">
          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Two adjustable air axes
          </h3>

          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              PROBLEM
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              No single nozzle position works for every tube. Low and high notes in particular need different positions.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
              DECISION
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              The nozzle adjusts in height (servo with rack and pinion) and angle (servo). Angle alone was not enough. Some notes needed the air aimed more steeply into the tube, which took a higher nozzle and a steeper angle. Others needed the air to pass more across the opening, with a low nozzle and a shallow angle.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold">
              OUTCOME
            </div>
            <p className="text-sm sm:text-base text-slate-900 dark:text-white font-medium leading-relaxed">
              Each of the 13 notes has its own stored nozzle height and angle, and the servos move to them automatically as the drum rotates.
            </p>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1">
            Side-to-side adjustment was not needed because the air stays aligned with the center of the tube.
          </p>

          {/* Placeholder figure under Card B */}
          <div className="pt-2 space-y-2 max-w-2xl mx-auto">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-xs cursor-pointer"
              onClick={() => onInspectImage('images/pan-flute-blower-cad.png')}
            >
              <ProjectImage
                src="images/pan-flute-blower-cad.png"
                alt="Airflow adjustment mechanism, earlier CAD version."
                hideCaptionInPlaceholder={true}
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-center">
              Airflow adjustment mechanism, earlier CAD version.
            </p>
          </div>

          {/* Collapsed expander: Calibration software */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setCalibrationOpen(!calibrationOpen)}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-left transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Calibration software
              </span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 flex items-center gap-1">
                {calibrationOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            {calibrationOpen && (
              <div className="pt-4 space-y-2 max-w-xl mx-auto">
                <div
                  className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950 shadow-xs cursor-pointer"
                  onClick={() =>
                    onInspectImage('images/pan flute robot software interface.png')
                  }
                >
                  <ProjectImage
                    src="images/pan flute robot software interface.png"
                    alt="Calibration software, built by teammates."
                  />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-center">
                  Calibration software, built by teammates.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. CHALLENGE: ELECTRICAL INTERFERENCE
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>04. CHALLENGE: ELECTRICAL INTERFERENCE</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Challenge: Electrical Interference
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          The system runs on three power lines (5V servos, 12V solenoid valve, 24V stepper motor) with a common ground, all connected to one Arduino.
        </p>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-4 shadow-xs">
          {/* PROBLEM */}
          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              PROBLEM
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              The servos and the drum&apos;s stepper motor twitched, suspected to be electrical interference from the solenoid valve. All components share a common ground.
            </p>
          </div>

          {/* DECISION */}
          <div className="p-4 sm:p-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
              DECISION
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              I added a diode to suppress the voltage spike the solenoid produces when it switches off, and rewired and organized the electronics, which had become messy as each mechanism was added.
            </p>
          </div>

          {/* OUTCOME */}
          <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold">
              OUTCOME
            </div>
            <p className="text-sm sm:text-base text-slate-900 dark:text-white font-medium leading-relaxed">
              The twitching stopped.
            </p>
          </div>

          {/* Collapsed expander: Electrical schematic */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setSchematicOpen(!schematicOpen)}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-left transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Electrical schematic
              </span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 flex items-center gap-1">
                {schematicOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            {schematicOpen && (
              <div className="pt-4 space-y-2 max-w-2xl mx-auto">
                <div
                  className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950 shadow-xs cursor-pointer"
                  onClick={() =>
                    onInspectImage('images/pan flute robot electric wiring diagram.png')
                  }
                >
                  <ProjectImage
                    src="images/pan flute robot electric wiring diagram.png"
                    alt="Electrical schematic from the project report."
                  />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-center">
                  Electrical schematic from the project report.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. OUTCOME
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>05. OUTCOME</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Outcome
        </h2>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-6 shadow-xs">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            The robot plays 13 notes (C5 to C6) sent from Ableton Live. It works as a proof of concept for the instrument.
          </p>

          <div className="space-y-2 max-w-2xl mx-auto">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-xs cursor-pointer"
              onClick={() => onInspectImage('images/robotic pan flute thumbnail.jpg')}
            >
              <ProjectImage
                src="images/robotic pan flute thumbnail.jpg"
                alt="Finished pan flute robot."
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-center">
              Finished pan flute robot.
            </p>
          </div>

          {/* LIMITATION */}
          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              LIMITATION
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              The solenoid valve was wired and controllable but not integrated with the music software in time. Air stays on whenever a note is selected, with a programmed rest note for silence, so every note change slides.
            </p>
          </div>

          {/* SCOPE */}
          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              SCOPE
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              Built one drum instead of the three originally planned, for time and cost reasons.
            </p>
          </div>

          {/* TAKEAWAY */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
              TAKEAWAY
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              Integrating mechanical, electrical and software parts takes careful coordination, and specifications have to fit cost and time.
            </p>
          </div>

          {/* Two small link buttons */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
            <a
              href={reportUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:border-blue-300 dark:hover:border-blue-700 text-xs font-mono text-slate-800 dark:text-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Project Report (PDF)</span>
            </a>

            <a
              href="https://wp.wpi.edu/musicalmachines/2025/12/16/pan-flute-robot/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:border-blue-300 dark:hover:border-blue-700 text-xs font-mono text-slate-800 dark:text-slate-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Project Blog Post</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06. POTENTIAL IMPROVEMENTS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>06. POTENTIAL IMPROVEMENTS</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Potential Improvements
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Ideas for a future version of the project. No further work is in progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Control the solenoid valve from the playback software, so air flows only while a note sounds and notes separate cleanly.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Adjust air pressure per note instead of one setting for the whole system.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Add two more drums to reach the original three-unit plan and play more than one note at once.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
