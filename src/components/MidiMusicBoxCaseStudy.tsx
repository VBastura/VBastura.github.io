import React from 'react';
import { ProjectImage } from './ProjectImage';
import { CheckCircle2 } from 'lucide-react';

interface MidiMusicBoxCaseStudyProps {
  onInspectImage: (src: string) => void;
}

export const MidiMusicBoxCaseStudy: React.FC<MidiMusicBoxCaseStudyProps> = ({
  onInspectImage,
}) => {
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
            A punch-card music box plays notes by plucking tines, the tuned metal teeth that make each note, based on a punched paper strip. I helped replace that paper-strip reader with 20 servos so the notes come from MIDI input instead. Built for WPI&apos;s Making Music with Machines course.
          </p>

          {/* Two images side by side (stacked on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-2">
              <div
                className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-xs cursor-pointer flex items-center justify-center"
                onClick={() => onInspectImage('images/midi music box-original music box.jpg')}
              >
                <ProjectImage
                  src="images/midi music box-original music box.jpg"
                  alt="Original punch-card music box before modification."
                />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Original punch-card music box before modification.
              </p>
            </div>

            <div className="space-y-2">
              <div
                className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-xs cursor-pointer flex items-center justify-center"
                onClick={() => onInspectImage('images/midi music box- modified to hold actuators.jpg')}
              >
                <ProjectImage
                  src="images/midi music box- modified to hold actuators.jpg"
                  alt="Modified music box with 3D-printed parts fitted."
                />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Modified music box with 3D-printed parts fitted.
              </p>
            </div>
          </div>

          {/* Simple text flow row */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono">
              {[
                'MIDI input',
                'Arduino',
                'PCA9685 driver boards',
                '20 servos',
                '3D-printed actuators',
                'tines',
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
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              20 of the box&apos;s 30 notes are used, to reduce complexity while keeping the system reliable.
            </p>
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
              'Wrote all of the Arduino code: MIDI parsing and note-to-servo mapping',
              'Wired and integrated the 20 servos with the PCA9685 servo driver boards',
              'Made sure the electronics and software worked together',
              'Helped with physical assembly and basic design',
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
            Mechanical design and actuator assembly were shared with teammates.
          </p>
        </div>
      </section>

      {/* =========================================================================
          03. CHALLENGE: LINKAGE VARIATION
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>03. CHALLENGE: LINKAGE VARIATION</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Challenge: Linkage Variation
        </h2>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-4 shadow-xs">
          {/* PROBLEM */}
          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              PROBLEM
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              Each servo is linked to its actuator by a hand-bent copper wire. The wires deformed under load, and each one deformed differently, so one servo position did not work for every note.
            </p>
          </div>

          {/* DECISION */}
          <div className="p-4 sm:p-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
              DECISION
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              I added an individual position offset for each servo in the Arduino code. This allowed the wires to be bent and assembled with less precision.
            </p>
          </div>

          {/* OUTCOME */}
          <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold">
              OUTCOME
            </div>
            <p className="text-sm sm:text-base text-slate-900 dark:text-white font-medium leading-relaxed">
              Each note actuated reliably.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. OUTCOME
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>04. OUTCOME</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Outcome
        </h2>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-6 shadow-xs">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            The finished music box plays MIDI input from a keyboard in real time. Plucks are loud, clear, and timed to the incoming notes.
          </p>

          <div className="space-y-2 max-w-2xl mx-auto">
            <div
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-xs cursor-pointer flex items-center justify-center"
              onClick={() => onInspectImage('images/midi music box thumbnail.jpg')}
            >
              <ProjectImage
                src="images/midi music box thumbnail.jpg"
                alt="Finished unit playing MIDI input from a keyboard in real time."
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-center">
              Finished unit playing MIDI input from a keyboard in real time.
            </p>
          </div>

          {/* LIMITATION */}
          <div className="p-4 sm:p-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold">
              LIMITATION
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              Servo noise masked the sound of the plucked tines.
            </p>
          </div>

          {/* TAKEAWAY */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
              TAKEAWAY
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              Compensating for assembly variation in software was a practical way to handle linkages that differed from one to the next.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. POTENTIAL IMPROVEMENTS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <span>05. POTENTIAL IMPROVEMENTS</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Potential Improvements
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Ideas for a future version of the project. No further work is in progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Solid wood in place of plywood for the base. Music boxes rely heavily on their resonator, so this would give a louder sound.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              A better way to isolate servo noise from the system, since it masked the sound of the tines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
