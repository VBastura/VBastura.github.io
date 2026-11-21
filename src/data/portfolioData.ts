import { Profile, Project } from '../types';

export const initialProfile: Profile = {
  name: 'Vicente Bastura',
  headline: 'Mechanical Engineer | BS/MS Candidate at WPI',
  degree: 'BS/MS in Mechanical Engineering',
  institution: 'Worcester Polytechnic Institute (WPI)',
  graduationYear: 'May 2027',
  undergradGpa: '3.82 / 4.0',
  email: 'vicentebastura1310@gmail.com',
  phone: '(860) 481-1231',
  address: 'Pomfret, CT',
  linkedin: 'https://www.linkedin.com/in/vince-bastura-750444303',
  github: 'https://github.com/VBastura',
  location: 'Pomfret, CT',
  bioSummary:
    'I’m a mechanical engineer who loves taking an idea from a messy brainstorm to a prototype to a final product. Nearly a decade of 3D printing has taught me how to turn an idea into physical parts and refine it through iterative design. By stepping into unfamiliar territory, like software and electronics, I’ve learned how a design comes together from more than just the mechanical side. I graduate in May 2027 and I’m looking for a position where I can keep developing my skills and build a well-rounded understanding of design.',
  extracurriculars: ['Combat Robotics', 'Running Club', 'Formula SAE (FSAE)'],
  skills: {
    cad: [
      'SolidWorks (CSWA)',
      'SolidWorks Simulation',
      'Ansys',
      'Fusion 360',
      'Onshape',
      '3D Part & Assembly Design',
      '2D Drawings',
    ],
    manufacturing: [
      '3D Printing (Operation & Maintenance)',
      'Rapid Prototyping',
      'CAM',
      'CNC Mill',
      'CNC Lathe',
      'Measurement Devices (Calipers, Micrometer)',
      'Understanding of Manufacturing Processes',
      'OSHA-10 Certified',
      'Tolerancing',
    ],
    programming: [
      'Arduino (C++)',
      'MATLAB',
      'Raspberry Pi',
      'Sensors',
      'Actuators',
      'Soldering',
    ],
    professional: [
      'Teamwork',
      'Hands-On',
      'Problem Solving',
      'Attention to Detail',
      'Communication',
      'Creative',
    ],
  },
  experience: [
    {
      role: 'Landscaping Team Member & Independent Contractor',
      company: 'Multiple Companies – Pomfret, CT',
      location: 'Pomfret, CT',
      period: 'May 2024 – August 2026',
      highlights: [
        "Managed a private client's property independently, scheduling work, and determining maintenance needs while completing additional assigned projects including pathway and retaining-wall construction. (2024-2026)",
        'Completed daily tasks independently at a golf course, operating push mowers, weed trimmers, leaf blowers, and specialty equipment. (2024)',
        'Maintained residential properties for a landscaping company, traveling between job sites and weed trimming. (2026)',
      ],
    },
  ],
  resumeUrl: '#resume',
};

export const initialProjects: Project[] = [
  {
    id: 'autonomous-offroad-chassis',
    title: 'Architecture and Chassis Design for an Autonomous Off-Road Vehicle',
    oneLineOutcome:
      'A new tubular steel spaceframe chassis to improve the off-road mobility of an autonomous unmanned ground vehicle.',
    cardShortDescription:
      'WPI MQP 4-person chassis team, collaborating with the Suspension and Mechatronics teams. Tube-frame chassis integrating suspension and braking to achieve 15 mph safely.',
    hoverDescription:
      'Major Qualifying Project (WPI & AVMI): Provided continuous tube and node design feedback on an off-road spaceframe chassis, and performed all Ansys FEA simulations to validate torsional rigidity and bump load stress',
    category: 'CAD & Spaceframe',
    coverImage: 'images/autonomous off-road vehicle chassis thumbnail cropped.png',
    statusBadge: 'In progress',
    year: 'May 2026 - Present',
    tools: ['SolidWorks', 'Ansys'],
    summaryStrip: {
      role: 'Chassis design input & all FEA',
      teamSize: '4-person chassis team, collaborating with the Suspension and Mechatronics teams',
      timeline: 'May 2026 – Present (Active Project)',
      tools: 'SolidWorks, Ansys',
      myContribution:
        'Flagged proportions, minimized bottom tubing, proposed vertical battery access for safety and optimizing the CG, gave tube and node design feedback, and performed all SolidWorks and Ansys FEA.',
    },
    objective:
      'The lab\'s research UGV needs improved off-road mobility, but it is slow, has no suspension system, and isn\'t weatherproof. This chassis will integrate the Suspension and Mechatronics teams\' work into one vehicle and serve as a platform the lab can keep improving for future research. Key constraints require passing through lab doors/hallways (narrowest path 59 in, length under 6 ft), accommodating a 5-degree front tilt and shock mount locations set with the suspension team, and achieving a 15 mph speed target (up from 5 mph).',
    brainstorm: {
      paragraph:
        'Over eleven design iterations, each version exposed a problem that shaped the next. We eliminated the cage in V2 because welding was complex and the roof-mounted LiDAR cannot allow rollover. We transitioned to rear A-arms in V5 when trailing arms proved overly complex for our timeline and budget, packaged motors horizontally and lengthened the frame in V7 to drop the center of mass, and simplified front frame offsets into a single continuous bottom tube in V10.',
      image: 'images/chassis-v10.png',
      imageCaption:
        'Chassis V10 CAD model featuring continuous bottom tube and triangulated suspension pickup nodes.',
    },
    prototypeIterations: [
      {
        version: 'v2 to v3',
        title: 'Clear Line of Sight for the LiDAR',
        whatWasBuilt:
          'Cut down the upper chamber to give the top-mounted LiDAR an unobstructed field of view.',
        whatFailedOrUnderperformed:
          'V2\'s upper chamber, added to hold logic components, rose into the LiDAR\'s sightline. A top-mounted sensor would have been blocked, or forced higher and more exposed.',
        whatChangedAndResult:
          'Cut the upper section down so the LiDAR has a clear line of sight, confirmed in CAD.',
        decisions: [
          'Sensor Protection: Clear 360-degree LiDAR line of sight confirmed in CAD.',
          'Packaging: Lowered logic enclosure to reduce total vehicle profile.',
        ],
        image: 'images/chassis-v2-upper-chamber.png',
        imageCaption:
          'Chassis V2 upper chamber (red box) cut down in V3 for LiDAR clearance.',
      },
      {
        version: 'v3 to v5',
        title: 'Fewer Welds',
        whatWasBuilt:
          'Standardized on more bent tubes to cut the weld count.',
        whatFailedOrUnderperformed:
          'V3 used little tube bending, which meant many welded joints.',
        whatChangedAndResult:
          'More bent tubes to cut the weld count.',
        decisions: [
          'Manufacturability: Tube bending reduced manual weldments.',
          'Weld Minimization: Substituted welded segment clusters with bent continuous tubes.',
        ],
        image: 'images/chassis-v5.png',
        imageCaption:
          'Chassis V5 with bent tube geometry cutting overall weld count.',
      },
      {
        version: 'v5 to v7',
        title: 'Chassis Proportions, Battery Access, and a Lower CG',
        whatWasBuilt:
          'Lengthened chassis, minimized bottom tubing, and shortened top section for vertical battery removal.',
        whatFailedOrUnderperformed:
          'Problems in V5: poor wheelbase-to-track-width ratio; CG too high and too far back; battery path blocked; excessive bottom tubing.',
        whatChangedAndResult:
          'Flagged the proportions, so the chassis was lengthened. Pushed to minimize the bottom tubing since a steel plate will cover the bottom. Proposed shortening the oversized top section so the battery lifts out vertically, which is safer than removing a side tube. Effects: CG moved forward; the motors could lie flat (lower CG, better packaging); the shorter top section leaves room for electronics above.',
        decisions: [
          'Chassis Geometry: Lengthened wheelbase to correct wheelbase-to-track-width ratio.',
          'Battery Safety: Vertical extraction path without compromising structural side tubes.',
        ],
        image: 'images/chassis-v7.png',
        imageCaption:
          'Chassis V7 with lengthened frame, lowered CG, and vertical battery removal path.',
      },
      {
        version: 'v7 to v10',
        title: 'Tube Optimization and Simplification',
        whatWasBuilt:
          'Optimized tubes into continuous bent lengths and simplified front offsets into a single full bottom tube.',
        whatFailedOrUnderperformed:
          'Excess tubing and multi-piece front offsets added weld joints and fabrication complexity.',
        whatChangedAndResult:
          'Some tubes were optimized into continuous bent lengths, excess tubing was cut, and front offsets were simplified into a single full bottom tube. The tube list from V7 was used to plan and order stock.',
        decisions: [
          'Continuous Tubing: Tubes optimized into continuous lengths.',
          'Front Structure: Single full bottom tube eliminating segmented offset welds.',
        ],
        image: 'images/chassis-v10.png',
        imageCaption:
          'Chassis V10 with unified continuous bottom frame member and direct nodal triangulation.',
      },
    ],
    productOutcome: {
      finalDesignAndResults:
        'Design and analysis are nearly complete; fabrication is expected to start in B-term; stock is purchased and welding safety training is done.',
      mediaUrl: 'images/chassis-v10.png',
      mediaCaption:
        'Design and analysis nearly complete; fabrication expected to start in B-term.',
      downloadLinks: [],
    },
    whatILearned:
      'Setting up multi-body FEA taught me that boundary conditions dictate simulation validity—isolating the chassis from suspension compliance was necessary to obtain an honest stiffness benchmark.',
    photos: [
      {
        src: 'images/chassis-v2-upper-chamber.png',
        alt: 'Chassis V2: Upper Chamber Constraint',
        caption: 'V2, chamber: upper logic chamber that would have obstructed top-mounted LiDAR sensor',
        filename: 'chassis-v2-upper-chamber.png',
      },
      {
        src: 'images/chassis-v3.png',
        alt: 'Chassis V3: Cleared LiDAR Line of Sight',
        caption: 'V3: upper chamber cut down so the LiDAR has a clear line of sight, confirmed in CAD',
        filename: 'chassis-v3.png',
      },
      {
        src: 'images/chassis-v5.png',
        alt: 'Chassis V5: Bent Tubes',
        caption: 'V5: more bent tubes to cut the weld count',
        filename: 'chassis-v5.png',
      },
      {
        src: 'images/chassis-v5-assembly-battery-cg.png',
        alt: 'Chassis V5 Assembly: Battery & CG Issues',
        caption: 'V5 assembly: poor wheelbase ratio, high and rearward CG, and blocked battery removal',
        filename: 'chassis-v5-assembly-battery-cg.png',
      },
      {
        src: 'images/chassis-v7.png',
        alt: 'Chassis V7: Lengthened Frame & Low CG',
        caption: 'V7: lengthened chassis, vertical battery access, flat motors lowering CG, and room for electronics',
        filename: 'chassis-v7.png',
      },
      {
        src: 'images/chassis-v10.png',
        alt: 'Chassis V10: Continuous Bottom Tube',
        caption: 'V10: tubes optimized into continuous bent lengths and single full bottom tube',
        filename: 'chassis-v10.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea torsional rigidity setup.png',
        alt: '1. Torsional Rigidity Setup & Constraints',
        caption: 'Final Ansys setup: exact suspension coordinates, rigid struts, stiff suspension parts.',
        filename: 'autonomous off-road vehicle chassis fea torsional rigidity setup.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis thumbnail.png',
        alt: '2. Torsional Rigidity Deformation Results',
        caption: 'Deformation under opposing loads (final setup: 2271.72 N*m/deg).',
        filename: 'autonomous off-road vehicle chassis thumbnail.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test setup.png',
        alt: 'Figure 1: Bump Test Setup & Boundary Conditions',
        caption: '8 rear fixtures; 2000 N vertical load on the front-left suspension points.',
        filename: 'autonomous off-road vehicle chassis fea bump test setup.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test direct axial stress.png',
        alt: 'Figure 2: Bump Test Direct (Axial) Stress',
        caption: 'Axial stress in the members; (+) tensile, (-) compressive.',
        filename: 'autonomous off-road vehicle chassis fea bump test direct axial stress.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png',
        alt: 'Figure 3: Bump Test Maximum Bending Stress',
        caption: 'Maximum bending stress from moment transfer under the 2000 N load.',
        filename: 'autonomous off-road vehicle chassis fea bump test maximum bending stress.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test max combined stress.png',
        alt: 'Figure 4: Bump Test Maximum Combined Stress',
        caption: 'Axial plus bending; maximum combined stress is 54.8 MPa (tensile).',
        filename: 'autonomous off-road vehicle chassis fea bump test max combined stress.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test min combined stress.png',
        alt: 'Figure 5: Min Combined Stress (76.4 MPa)',
        caption: 'Axial plus bending; largest magnitude overall at 76.4 MPa (compressive).',
        filename: 'autonomous off-road vehicle chassis fea bump test min combined stress.png',
      },
    ],
    tagline: 'Iterative spaceframe design, SolidWorks & Ansys FEA simulations, and DFM tube chassis optimization',
    shortDescription:
      'Contributed to iterative spaceframe chassis design and conducted SolidWorks and Ansys FEA simulations for an autonomous off-road platform.',
  },
  {
    id: 'robotic-pan-flute',
    title: 'Robotic Pan Flute Musical Machine',
    statusBadge: 'Completed',
    oneLineOutcome:
      'A robot that plays a 3D-printed pan flute, using a rotating drum of tubes and one adjustable air source, controlled from music software.',
    cardShortDescription:
      'Built a robotic pan flute featuring a stepper-driven radial tube drum and a 2-DOF servo airflow nozzle controlled via MIDI.',
    hoverDescription:
      'Collaborated with a 4-person team to construct an automated pan flute. Designed a 2-DOF servo airflow mechanism that dynamically targets closed-ended acoustic tubes arranged radially on a rotating drum. Helped manage a 3-rail power architecture (5V, 12V, 24V) through a single Arduino with software calibration for each musical tone.',
    category: 'Mechatronics & Embedded',
    coverImage: 'images/robotic pan flute thumbnail.jpg',
    year: 'October 2025 – December 2025',
    tools: ['SolidWorks', '3D Printing (PETG)', 'Arduino (C++)', 'NEMA Stepper Drive', 'Micro-Servos', '3-Rail Power System'],
    summaryStrip: {
      role: 'Airflow adjustment mechanism design, electronics rewiring, system integration',
      teamSize: '4 people',
      timeline: 'October 2025 – December 2025',
      tools: 'SolidWorks, 3D printing, Arduino, servo and stepper motors, MIDI',
      myContribution:
        'Airflow adjustment mechanism design, electronics rewiring, system integration',
    },
    objective:
      'A robot that plays a 3D-printed pan flute, using a rotating drum of tubes and one adjustable air source, controlled from music software.',
    brainstorm: {
      paragraph: '',
    },
    prototypeIterations: [],
    productOutcome: {
      finalDesignAndResults:
        'The robot plays 13 notes (C5 to C6) sent from Ableton Live. It works as a proof of concept for the instrument.',
      mediaUrl: 'images/robotic pan flute thumbnail.jpg',
      mediaCaption: 'Finished pan flute robot.',
      downloadLinks: [
        { label: 'Project Report (PDF)', url: '#', type: 'PDF' },
      ],
    },
    whatILearned: '',
    photos: [
      {
        src: 'images/robotic pan flute thumbnail.jpg',
        alt: 'Robotic Pan Flute Thumbnail',
        caption: 'Complete robotic pan flute prototype with radial acoustic pipe drum and 2-DOF nozzle mechanism',
        filename: 'robotic pan flute thumbnail.jpg',
      },
      {
        src: 'images/pan flute robot top down view.jpg',
        alt: 'Pan Flute Robot Top Down View',
        caption: 'Top-down mechanical overview of the robotic pan flute showing carousel drum, drive belt, and electronics layout',
        filename: 'pan flute robot top down view.jpg',
      },
      {
        src: 'images/pan flute robot electric wiring diagram.png',
        alt: 'Pan Flute Robot Electric Wiring Diagram',
        caption: 'Three-rail electrical distribution schematic (5V logic, 12V servo, 24V stepper) with opto-isolated MIDI input and star grounding',
        filename: 'pan flute robot electric wiring diagram.png',
      },
      {
        src: 'images/pan flute robot software interface.png',
        alt: 'Pan Flute Robot Software Interface',
        caption: 'Interactive software calibration interface and Arduino tuning tool for setting per-note acoustic resonance coordinates',
        filename: 'pan flute robot software interface.png',
      },
    ],
    tagline: 'Radial tube drum, 2-DOF servo airflow nozzle, and Arduino 3-rail power MIDI control',
    shortDescription:
      'Built a robotic pan flute featuring a stepper-driven radial tube drum and a 2-DOF servo airflow nozzle controlled via MIDI.',
  },
  {
    id: 'midi-music-box',
    title: 'MIDI Music Box',
    statusBadge: 'COMPLETED',
    oneLineOutcome:
      'A punch-card music box converted to play MIDI input, using 20 servos with 3D-printed actuators to pluck individual tines.',
    cardShortDescription:
      'A punch-card music box converted to play MIDI input, using 20 servos with 3D-printed actuators to pluck individual tines.',
    hoverDescription:
      'A punch-card music box converted to play MIDI input, using 20 servos with 3D-printed actuators to pluck individual tines.',
    category: 'Mechatronics & Embedded',
    coverImage: 'images/midi music box thumbnail.jpg',
    year: 'August 2025 - October 2025',
    tools: ['Arduino', 'Servo Driver Boards', 'MIDI', '3D Printing'],
    summaryStrip: {
      role: 'All programming, electronics wiring and integration, assembly and design support',
      teamSize: '3 people',
      timeline: 'August 2025 – October 2025',
      tools: 'Arduino, servo driver boards, MIDI, 3D printing',
      myContribution:
        'All programming, electronics wiring and integration, assembly and design support',
    },
    objective:
      'A punch-card music box converted to play MIDI input, using 20 servos with 3D-printed actuators to pluck individual tines.',
    brainstorm: {
      paragraph: '',
    },
    prototypeIterations: [],
    productOutcome: {
      finalDesignAndResults:
        'The finished music box plays MIDI input generated from software by plucking 20 individual tines.',
      mediaUrl: 'images/midi music box thumbnail.jpg',
      mediaCaption: 'Finished MIDI music box.',
    },
    whatILearned: '',
    photos: [],
    tagline: '20-servo electro-mechanical music box with Arduino MIDI control',
    shortDescription:
      'A punch-card music box converted to play MIDI input, using 20 servos with 3D-printed actuators to pluck individual tines.',
  },
  {
    id: 'plastic-combat-robot',
    title: '1-Pound Plastic Combat Robot',
    statusBadge: 'Two versions completed, next version planned',
    oneLineOutcome:
      'A 3D-printed 1 lb undercutter combat robot for my combat robotics club, with a spinning weapon redesigned between competitions.',
    cardShortDescription:
      '1 lb plastic combat robot for my combat robotics club; designed the weapon and fabricated the robot; version 2 lasted the full competition without breaking.',
    hoverDescription:
      'A 3D-printed 1 lb combat robot for my combat robotics club. I led weapon design and all fabrication, redesigning the failed v1 weapon and developing custom slicer settings for a v2 weapon that lasted every match.',
    category: 'Robotics & Mechanisms',
    coverImage: 'images/combat-robot-v2-final.jpg',
    year: 'October 2025 - Present',
    tools: [
      'SolidWorks',
      'Fusion 360',
      'FDM 3D Printing',
      'Slicer Tuning',
      'Electronics',
    ],
    summaryStrip: {
      role: 'Weapon design and overall design input, 3D-printed fabrication, electronics wiring and troubleshooting',
      teamSize: '3 people for v1, 4 for v2',
      timeline: 'October 2025 – Present',
      tools: 'SolidWorks, Fusion 360, FDM 3D printing, slicer tuning, electronics',
      myContribution:
        'Weapon design and overall design input, 3D-printed fabrication, electronics wiring and troubleshooting.',
    },
    objective:
      "This robot competes in the 1 lb plastic class, which requires a plastic structure. It is an undercutter spinner: its weapon spins flat, just above the floor, to strike the opponent's body and wheels.",
    brainstorm: {
      paragraph: '',
    },
    prototypeIterations: [],
    productOutcome: {
      finalDesignAndResults:
        'The v2 weapon lasted every match of the competition without breaking.',
      mediaUrl: 'images/combat-robot-v2-final.jpg',
      mediaCaption: 'Version 2 final.',
    },
    whatILearned:
      'I can work through real versions: evaluating what failed, proposing a fix, and iterating. I am comfortable with 3D printing and pushing it to get more out of the process.',
    photos: [
      {
        src: 'images/combat-robot-v1-final.jpg',
        alt: 'Version 1 final: symmetric two-tooth PETG disk.',
        caption: 'Version 1 final: symmetric two-tooth PETG disk.',
        filename: 'combat-robot-v1-final.jpg',
      },
      {
        src: 'images/combat-robot-v2-prototype.jpg',
        alt: 'Version 2 prototype: asymmetric single-tooth weapon.',
        caption: 'Version 2 prototype: asymmetric single-tooth weapon.',
        filename: 'combat-robot-v2-prototype.jpg',
      },
      {
        src: 'images/combat-robot-v2-final.jpg',
        alt: 'Version 2 final.',
        caption: 'Version 2 final.',
        filename: 'combat-robot-v2-final.jpg',
      },
      {
        src: 'images/combat-robot-v1-weapon-cad.png',
        alt: 'V1 Weapon CAD Model',
        caption: 'CAD of the v1 weapon.',
        filename: 'combat-robot-v1-weapon-cad.png',
      },
      {
        src: 'images/combat-robot-v2-weapon-cad.png',
        alt: 'V2 Weapon CAD Model',
        caption: 'CAD of the v2 weapon.',
        filename: 'combat-robot-v2-weapon-cad.png',
      },
      {
        src: 'images/combat-robot-layer-gaps.png',
        alt: 'Illustration of the line-width and stagger principle, not to exact scale.',
        caption: 'Illustration of the line-width and stagger principle, not to exact scale.',
        filename: 'combat-robot-layer-gaps.png',
      },
    ],
    tagline: 'Plastic undercutter combat robot: weapon design, custom slicer tuning, and impact-resistant 3D printing',
    shortDescription:
      '1 lb plastic combat robot for my combat robotics club; designed the weapon and fabricated the robot; version 2 lasted the full competition without breaking.',
  },
];
