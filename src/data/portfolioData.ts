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
        "Managed a private client's property independently, scheduling work, and determining maintenance needs while completing additional assigned projects including pathway and retaining-wall construction. (2024 – 2026)",
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
    hoverDescription:
      'Major Qualifying Project (WPI & AVMI): Provided continuous tube and node design feedback on an off-road spaceframe chassis, and performed all Ansys FEA simulations to validate torsional rigidity and bump load stress',
    category: 'CAD & Spaceframe',
    coverImage: 'images/autonomous off-road vehicle chassis thumbnail cropped.png',
    statusBadge: 'In progress',
    year: 'May 2026 – Present',
    summaryStrip: {
      role: 'Chassis design input & all FEA',
      teamSize: '4-person chassis team, collaborating with the Suspension and Mechatronics teams',
      timeline: 'May 2026 – Present (Active Project)',
      tools: 'SolidWorks, Ansys',
    },
    photos: [
      {
        src: 'images/chassis-v2-upper-chamber.png',
        alt: 'Chassis V2: Upper Chamber Constraint',
        caption: 'V2, chamber',
      },
      {
        src: 'images/chassis-v3.png',
        alt: 'Chassis V3: Cleared LiDAR Line of Sight',
        caption: 'V3',
      },
      {
        src: 'images/chassis-v5.png',
        alt: 'Chassis V5: Bent Tubes',
        caption: 'V5',
      },
      {
        src: 'images/chassis-v5-assembly-battery-cg.png',
        alt: 'Chassis V5 Assembly: Battery & CG Issues',
        caption: 'V5 assembly',
      },
      {
        src: 'images/chassis-v7.png',
        alt: 'Chassis V7: Lengthened Frame & Low CG',
        caption: 'V7',
      },
      {
        src: 'images/chassis-v10.png',
        alt: 'Chassis V10: Continuous Bottom Tube',
        caption: 'V10',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea torsional rigidity setup.png',
        alt: '1. Torsional Rigidity Setup & Constraints',
        caption: 'Final Ansys setup: exact suspension coordinates, rigid struts, stiff suspension parts.',
      },
      {
        src: 'images/autonomous off-road vehicle chassis thumbnail.png',
        alt: '2. Torsional Rigidity Deformation Results',
        caption: 'Deformation under opposing loads (final setup: 2271.72 N*m/deg).',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test setup.png',
        alt: 'Figure 1: Bump Test Setup & Boundary Conditions',
        caption: '8 rear fixtures; 2000 N vertical load on the front-left suspension points.',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test direct axial stress.png',
        alt: 'Figure 2: Bump Test Direct (Axial) Stress',
        caption: 'Axial stress in the members; (+) tensile, (-) compressive.',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png',
        alt: 'Figure 3: Bump Test Maximum Bending Stress',
        caption: 'Maximum bending stress from moment transfer under the 2000 N load.',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test max combined stress.png',
        alt: 'Figure 4: Bump Test Maximum Combined Stress',
        caption: 'Axial plus bending; maximum combined stress is 54.8 MPa (tensile).',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test min combined stress.png',
        alt: 'Figure 5: Min Combined Stress (76.4 MPa)',
        caption: 'Axial plus bending; largest magnitude overall at 76.4 MPa (compressive).',
      },
    ],
  },
  {
    id: 'robotic-pan-flute',
    title: 'Robotic Pan Flute Musical Machine',
    statusBadge: 'Completed',
    oneLineOutcome:
      'A robot that plays a 3D-printed pan flute, using a rotating drum of tubes and one adjustable air source, controlled from music software.',
    hoverDescription:
      'Collaborated with a 4-person team to construct an automated pan flute. Designed a 2-DOF servo airflow mechanism that dynamically targets closed-ended acoustic tubes arranged radially on a rotating drum. Helped manage a 3-rail power architecture (5V, 12V, 24V) through a single Arduino with software calibration for each musical tone.',
    category: 'Mechatronics & Embedded',
    coverImage: 'images/robotic pan flute thumbnail.jpg',
    year: 'October 2025 – December 2025',
    summaryStrip: {
      role: 'Airflow adjustment mechanism design, electronics rewiring, system integration',
      teamSize: '4 people',
      timeline: 'October 2025 – December 2025',
      tools: 'SolidWorks, 3D printing, Arduino, servo and stepper motors, MIDI',
    },
    photos: [
      {
        src: 'images/robotic pan flute thumbnail.jpg',
        alt: 'Robotic Pan Flute Thumbnail',
        caption: 'Finished pan flute robot.',
      },
      {
        src: 'images/pan flute robot top down view.jpg',
        alt: 'Pan Flute Robot Top Down View',
        caption: 'Top view of the rotating drum, air nozzle and electronics.',
      },
      {
        src: 'images/pan-flute-blower-cad.png',
        alt: 'Airflow adjustment mechanism, earlier CAD version.',
        caption: 'Airflow adjustment mechanism, earlier CAD version.',
      },
      {
        src: 'images/pan flute robot electric wiring diagram.png',
        alt: 'Pan Flute Robot Electric Wiring Diagram',
        caption: 'Electrical schematic from the project report.',
      },
      {
        src: 'images/pan flute robot software interface.png',
        alt: 'Pan Flute Robot Software Interface',
        caption: 'Calibration software, built by teammates.',
      },
    ],
  },
  {
    id: 'midi-music-box',
    title: 'MIDI Music Box',
    statusBadge: 'Completed',
    oneLineOutcome:
      'A punch-card music box converted to play MIDI input, using 20 servos with 3D-printed actuators to pluck individual tines.',
    hoverDescription:
      'A punch-card music box converted to play MIDI input, using 20 servos with 3D-printed actuators to pluck individual tines.',
    category: 'Mechatronics & Embedded',
    coverImage: 'images/midi music box thumbnail.jpg',
    year: 'August 2025 – October 2025',
    summaryStrip: {
      role: 'All programming, electronics wiring and integration, assembly and design support',
      teamSize: '3 people',
      timeline: 'August 2025 – October 2025',
      tools: 'Arduino, servo driver boards, MIDI, 3D printing',
    },
    photos: [],
  },
  {
    id: 'plastic-combat-robot',
    title: '1-Pound Plastic Combat Robot',
    statusBadge: 'Two versions completed, next version planned',
    oneLineOutcome:
      'A 3D-printed 1 lb undercutter combat robot for my combat robotics club, with a spinning weapon redesigned between competitions.',
    hoverDescription:
      'A 3D-printed 1 lb combat robot for my combat robotics club. I led weapon design and all fabrication, redesigning the failed v1 weapon and developing custom slicer settings for a v2 weapon that lasted every match.',
    category: 'Robotics & Mechanisms',
    coverImage: 'images/combat-robot-v2-final.jpg',
    year: 'October 2025 – Present',
    summaryStrip: {
      role: 'Weapon design and overall design input, 3D-printed fabrication, electronics wiring and troubleshooting',
      teamSize: '3 people for v1, 4 for v2',
      timeline: 'October 2025 – Present',
      tools: 'SolidWorks, Fusion 360, FDM 3D printing, slicer tuning, electronics',
    },
    photos: [
      {
        src: 'images/combat-robot-v1-final.jpg',
        alt: 'Version 1 final: symmetric two-tooth PETG disk.',
        caption: 'Version 1 final: symmetric two-tooth PETG disk.',
      },
      {
        src: 'images/combat-robot-v2-prototype.jpg',
        alt: 'Version 2 prototype: asymmetric single-tooth weapon.',
        caption: 'Version 2 prototype: asymmetric single-tooth weapon.',
      },
      {
        src: 'images/combat-robot-v2-final.jpg',
        alt: 'Version 2 final.',
        caption: 'Version 2 final.',
      },
      {
        src: 'images/combat-robot-v1-weapon-cad.png',
        alt: 'V1 Weapon CAD Model',
        caption: 'V1 SolidWorks model: two-tooth symmetric disk with internal weight pockets.',
      },
      {
        src: 'images/combat-robot-v2-weapon-cad.png',
        alt: 'V2 Weapon CAD Model',
        caption: 'V2 Fusion 360 model: single striking tooth with a counterweighted hub.',
      },
      {
        src: 'images/combat-robot-layer-gaps.png',
        alt: 'Illustration of the line-width and stagger principle, not to exact scale.',
        caption: 'Illustration of the line-width and stagger principle, not to exact scale.',
      },
    ],
  },
];
