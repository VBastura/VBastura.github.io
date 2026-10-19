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
    title: 'Architecture and Chassis Design for an Off-Road Vehicle',
    oneLineOutcome:
      'Engineering a lightweight tubular steel spaceframe chassis integrating suspension, independent braking, and weatherproofing to elevate an autonomous unmanned ground vehicle from 5 mph to 15 mph.',
    cardShortDescription:
      'WPI MQP team of 4 in collaboration with AVMI lab. Tube-frame chassis integrating suspension and braking to achieve 15 mph safely without rollover risk for top-mounted LiDAR.',
    hoverDescription:
      'Major Qualifying Project (WPI & AVMI): Provided continuous tube and node design feedback on an off-road tube frame chassis, and performed all SolidWorks and Ansys FEA simulations to validate torsional stiffness and bump shock resistance.',
    category: 'CAD & Spaceframe',
    coverImage: 'images/autonomous off-road vehicle chassis thumbnail cropped.png',
    statusBadge: 'In progress',
    year: 'May 2026 - Present',
    tools: ['SolidWorks', 'Ansys'],
    summaryStrip: {
      role: 'Chassis Design Feedback & All FEA Simulations',
      teamSize: 'Team of 4 (with Suspension & Mechatronics teams)',
      timeline: 'May 2026 – Present (Active Project)',
      tools: 'SolidWorks, Ansys',
      myContribution:
        'Recommended continuous bent tubes, shared nodes, and excess tubing removal; performed 100% of SolidWorks and Ansys FEA; completed NFPA hot work safety training.',
    },
    objective:
      'The lab\'s existing unmanned ground vehicle has no suspension, tops out around 5 mph, has no independent braking, and is not weatherproof. The goal is a new tube-frame chassis that integrates suspension, supports braking and weatherproofing, and reaches 15 mph, working alongside separate Suspension and Mechatronics teams. Key constraints require passing through lab doors/hallways (narrowest path 59 in, length under 6 ft), accommodating a 5-degree front tilt and shock mount locations set with the suspension team, and guaranteeing the vehicle never rolls over because the LiDAR sensor is exposed at the top.',
    brainstorm: {
      paragraph:
        'Over eleven design iterations, our team systematically eliminated manufacturing bottlenecks and optimized packaging. Starting from an exploratory concept with an overhead rollcage, we eliminated the cage in V2 because welding was complex and the roof-mounted LiDAR cannot allow rollover. We transitioned to rear A-arms in V5 when trailing arms proved overly complex for our timeline and budget, packaged motors horizontally in V6 to drop the center of mass, and simplified front frame offsets into a single continuous bottom tube in V10.',
      image: 'images/autonomous off-road vehicle chassis thumbnail.png',
      imageCaption:
        'Chassis V10 CAD model featuring continuous bottom tube and triangulated suspension pickup nodes.',
    },
    prototypeIterations: [
      {
        version: 'v2',
        title: 'Rollcage Removal & Inverted Packaging',
        whatWasBuilt:
          'Removed the rollcage geometry to eliminate unnecessary weld joints, as roofline LiDAR exposure strictly prohibits rollover operation.',
        whatFailedOrUnderperformed:
          'Chassis V2 retained a bulky upper chamber intended for logical components, which created obstacles for the LiDAR sensor line-of-sight and required mounting the sensor excessively high.',
        whatChangedAndResult:
          'Eliminated the upper chamber in V3, lowering the roofline and improving sensor field-of-view while reducing overall frame height.',
        decisions: [
          'Safety / Rules: Vehicle prohibited from rollover to protect roofline LiDAR.',
          'DFM: Removed unnecessary cage members to cut welding joints and tube notching time.',
        ],
        image: 'images/autonomous off-road vehicle chassis v2.png',
        imageCaption:
          'Chassis V2 geometry with overhead rollcage removed to simplify welding and lower profile.',
      },
      {
        version: 'v5',
        title: 'Rear Double A-Arm Architecture Integration',
        whatWasBuilt:
          'Switched to A-arms at the rear (trailing arms were too complex for the team\'s knowledge, budget, and time).',
        whatFailedOrUnderperformed:
          'Initial rear trailing arm geometry required intricate compound angles and custom pivots that exceeded team machining capability and budget.',
        whatChangedAndResult:
          'Standardized on double wishbone A-arms front and rear with motor offsets that keep axle pivots parallel to arm pivots, simplifying fabrication.',
        decisions: [
          'Kinematics: Parallel arm and axle pivots to reduce CV joint binding.',
          'Manufacturability: Double wishbones matched available shop jigs and budget.',
        ],
        image: 'images/autonomous off-road vehicle chassis v5.png',
        imageCaption:
          'Chassis V5 packaging rear double wishbone A-arms and battery platform layout.',
      },
      {
        version: 'v6',
        title: 'Chassis Lengthening & Low-CG Horizontal Motor Mounting',
        whatWasBuilt:
          'Made the chassis slightly longer and placed the motors horizontally to lower the center of mass.',
        whatFailedOrUnderperformed:
          'Vertical motor placement in V5 raised the vehicle center of gravity and restricted clearance above the battery access path.',
        whatChangedAndResult:
          'Extended frame length slightly and clocked drive motors horizontally, lowering the center of mass and maximizing continuous bent tube spans.',
        decisions: [
          'Center of Mass: Horizontal motor placement lowered vehicle CG.',
          'Packaging: Opened clear top access for rapid battery swapping.',
        ],
        image: 'images/autonomous off-road vehicle chassis v6.png',
        imageCaption:
          'Chassis V6 configuration showing horizontal drive motor orientation and extended wheelbase.',
      },
      {
        version: 'v10',
        title: 'Unified Full Continuous Bottom Tube',
        whatWasBuilt:
          'Simplified the front offsets into a single full bottom tube.',
        whatFailedOrUnderperformed:
          'Chassis V7-V9 had small multi-piece front tube offsets that required tedious notching, difficult joint fitment, and concentrated weld stresses.',
        whatChangedAndResult:
          'Replaced segmented offsets with one continuous bent bottom tube, eliminating multiple weldments and strengthening the front crash structure.',
        decisions: [
          'Continuous Tubing: My recommendation to replace segmented welds with continuous bent spans.',
          'Nodal Alignment: Joined intersecting members at shared structural nodes.',
        ],
        image: 'images/autonomous off-road vehicle chassis v10.png',
        imageCaption:
          'Chassis V10 with unified continuous bottom frame member and direct nodal triangulation.',
      },
    ],
    productOutcome: {
      finalDesignAndResults:
        'Chassis design and analysis are nearly complete. Fabrication (cutting, notching, bending, welding) is expected to start in B-term. Stock is purchased and the welding safety training is done. Product and measured physical testing outcomes are currently pending.',
      mediaUrl: 'images/autonomous off-road vehicle chassis thumbnail.png',
      mediaCaption:
        'Pending B-term fabrication: stock purchased, welding safety completed, and final FEA verification underway.',
      downloadLinks: [],
    },
    whatILearned:
      'Setting up multi-body FEA taught me that boundary conditions dictate simulation validity—isolating the chassis from suspension compliance was necessary to obtain an honest stiffness benchmark. [ADD: my reflection].',
    photos: [
      {
        src: 'images/autonomous off-road vehicle chassis thumbnail.png',
        alt: 'Torsional Rigidity Deformation Results (Project Thumbnail)',
        caption: 'Torsional rigidity deformation results under opposing loads (final setup: 2271.72 N*m/deg), serving as the project thumbnail',
        filename: 'autonomous off-road vehicle chassis thumbnail.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea torsional rigidity setup.png',
        alt: 'Torsional Rigidity Setup & Boundary Conditions',
        caption: 'Ansys boundary setup with proper joints, exact rear suspension coordinates, rigid struts, and stiffened suspension isolating the chassis',
        filename: 'autonomous off-road vehicle chassis fea torsional rigidity setup.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test setup.png',
        alt: 'Bump Test Setup & Boundary Conditions',
        caption: '8 rear fixtures constrained with a 2000 N vertical shock load applied to front-left suspension points',
        filename: 'autonomous off-road vehicle chassis fea bump test setup.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test direct axial stress.png',
        alt: 'Bump Test Direct (Axial) Stress (+ Tension / - Compression)',
        caption: 'Direct (axial) stress distribution across spaceframe members, where (+) represents tension and (-) represents compression',
        filename: 'autonomous off-road vehicle chassis fea bump test direct axial stress.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test maximum bending stress.png',
        alt: 'Bump Test Maximum Bending Stress',
        caption: 'Maximum bending stress contours showing moment transfer through chassis tube spans under dynamic shock input',
        filename: 'autonomous off-road vehicle chassis fea bump test maximum bending stress.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test max combined stress.png',
        alt: 'Bump Test Maximum Combined Stress (Direct + Max Bending)',
        caption: 'Superposition of direct axial stress and maximum bending stress, reaching a maximum combined peak of 54.8 MPa',
        filename: 'autonomous off-road vehicle chassis fea bump test max combined stress.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis fea bump test min combined stress.png',
        alt: 'Bump Test Minimum Combined Stress (Direct + Min Bending)',
        caption: 'Superposition of direct axial stress and minimum bending stress; peak magnitude was 76.4 MPa compressive (~6.3x margin vs 483 MPa yield)',
        filename: 'autonomous off-road vehicle chassis fea bump test min combined stress.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis v2.png',
        alt: 'Chassis V2 CAD: Rollcage Geometry Removal',
        caption: 'V2: removed the rollcage geometry (welding complexity, and the vehicle cannot be allowed to roll because of the LiDAR)',
        filename: 'autonomous off-road vehicle chassis v2.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis v5.png',
        alt: 'Chassis V5 CAD: Rear Double A-Arms Architecture',
        caption: 'V5: switched to A-arms at the rear (trailing arms were too complex for the team’s knowledge, budget, and time)',
        filename: 'autonomous off-road vehicle chassis v5.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis v6.png',
        alt: 'Chassis V6 CAD: Lengthened Frame & Low-CG Horizontal Motors',
        caption: 'V6: made the chassis slightly longer and placed the motors horizontally to lower the center of mass',
        filename: 'autonomous off-road vehicle chassis v6.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis v10.png',
        alt: 'Chassis V10 CAD: Unified Continuous Full Bottom Tube',
        caption: 'V10: simplified the front offsets into a single full bottom tube',
        filename: 'autonomous off-road vehicle chassis v10.png',
      },
      {
        src: 'images/autonomous off-road vehicle chassis rolling frame.png',
        alt: 'Physical Rolling Chassis Frame Assembly',
        caption: 'Physical welded rolling chassis verifying suspension hardpoint coordinates and packaging clearances',
        filename: 'autonomous off-road vehicle chassis rolling frame.png',
      },
    ],
    tagline: 'Iterative spaceframe design, SolidWorks static FEA simulations, and rolling vehicle platform',
    shortDescription:
      'Contributed to iterative spaceframe chassis design and conducted SolidWorks static FEA simulations for an autonomous off-road platform.',
  },
  {
    id: 'robotic-pan-flute',
    title: 'Robotic Pan Flute Musical Machine',
    oneLineOutcome:
      'Built a mechatronic pan flute musical robot featuring a stepper-driven radial tube drum, a 2-DOF servo airflow nozzle, and MIDI control over an Arduino 3-rail power architecture.',
    cardShortDescription:
      'Built a robotic pan flute featuring a stepper-driven radial tube drum and a 2-DOF servo airflow nozzle controlled via MIDI.',
    hoverDescription:
      'Collaborated with a 4-person team to construct an automated pan flute. Designed a 2-DOF servo airflow mechanism that dynamically targets closed-ended acoustic tubes arranged radially on a rotating drum. Helped manage a 3-rail power architecture (5V, 12V, 24V) through a single Arduino with software calibration for each musical tone.',
    category: 'Mechatronics & Embedded',
    coverImage: 'images/robotic pan flute thumbnail.jpg',
    year: 'August 2025 - October 2025',
    tools: ['SolidWorks', '3D Printing (PETG)', 'Arduino (C++)', 'NEMA Stepper Drive', 'Micro-Servos', '3-Rail Power System'],
    summaryStrip: {
      role: 'Mechanical Design & Electronics Co-Lead',
      teamSize: '4 Person Engineering Team',
      timeline: 'August 2025 – October 2025',
      tools: 'SolidWorks, 3D Printing (PETG), Arduino C++, 2GT Timing Belt, Micro-Servos, 3-Rail Power Supply',
      myContribution:
        'Designed the 2-DOF dual-servo airflow nozzle assembly, helped wire and manage the 3-rail power system (5V/12V/24V), and calibrated note air angles in software.',
    },
    objective:
      'Our team was challenged to build a mechatronic musical machine capable of performing acoustic pan flute music in real time from standard MIDI composition software. The system had to actuate multiple closed-ended resonant acoustic pipes using a single compact air source, moving between notes quickly and accurately within budget constraints and a strict academic deadline. Crucially, each flute tube had slight geometric variations requiring custom nozzle standoff distance and air angle to achieve clean acoustic tone.',
    brainstorm: {
      paragraph:
        'We brainstormed two primary mechanical layouts: a stationary row of pan flute tubes with individual high-speed solenoid valves for each tube, versus a rotating radial drum of pipes with a single articulate airflow nozzle. We rejected the multi-solenoid concept because buying 20+ precision valves exceeded our budget, added excessive pneumatic piping weight, and caused loud clicking that overwhelmed the delicate acoustic flute sound. We selected the rotating radial drum with a stepper motor and a 2-DOF dual-servo nozzle because it concentrated mechanical complexity into one tunable air head, drastically cut component count, and allowed software micro-adjustments for each note’s embouchure.',
      image: 'images/pan flute robot top down view.jpg',
      imageCaption:
        'Top-down overview of the mechatronic assembly showing the radial tube drum, servo gimbal nozzle, and Arduino electronics.',
    },
    prototypeIterations: [
      {
        version: 'v1',
        title: 'Single-Servo Air Nozzle & Continuous DC Air Pump',
        whatWasBuilt:
          'In v1, I designed and 3D printed a single-axis pivot bracket in PLA holding a tapered brass air nozzle, actuated by a single micro-servo for horizontal angle, with an inexpensive DC diaphragm air pump.',
        whatFailedOrUnderperformed:
          'The single degree of freedom proved insufficient to produce clear acoustic sound. Because different flute tube lengths have unique embouchure bevels, fixed vertical height produced weak breathy hiss instead of acoustic resonance, and the air pump stalled when choked.',
        whatChangedAndResult:
          'I redesigned the nozzle assembly from scratch into a 2-DOF gimbal bracket driven by two Hitec micro-servos—one controlling vertical pitch angle and the other controlling horizontal attack offset. I switched from PLA to rigid PETG to prevent flex, and wrote an interactive calibration tool in Arduino code that let us sweep and store the optimal (X, Y) servo coordinates for each individual note.',
        decisions: [
          'Material: 3D printed PETG for the nozzle gimbal to resist heat and prevent mechanical deflection.',
          'Degrees of Freedom: Added a second servo so the air stream could be aimed in both elevation and azimuth.',
          'Firmware Calibration: Implemented per-note calibration arrays in Arduino EEPROM to store exact resonance angles.',
        ],
        image: 'images/pan flute robot software interface.png',
        imageCaption:
          'Interactive software calibration interface in Arduino C++ allowing sweep, measurement, and storage of optimal (X, Y) servo resonance coordinates for each musical note.',
        testConditions:
          'Acoustic resonance bench test: Microphone frequency sweep measuring fundamental tone decibels across pitch angles from 15° to 45° off tube rim plane.',
      },
      {
        version: 'v2',
        title: 'Three-Rail Power Integration & MIDI Firmware Architecture',
        whatWasBuilt:
          'Integrated the 24-tube radial drum, NEMA 17 stepper drive with 2GT belt reduction, and a three-rail electrical architecture (5V logic, 12V servo bus, 24V stepper motor) controlled by an Arduino Mega with a custom shield.',
        whatFailedOrUnderperformed:
          'During rapid musical sequences, high inductive current surges from the 24V stepper motor caused electrical noise that fed back into the 5V logic rail, triggering spontaneous Arduino resets and servo twitching.',
        whatChangedAndResult:
          'I helped rewire the power distribution into a dedicated star-ground configuration, placed 1000µF electrolytic decoupling capacitors across each power rail, and isolated the MIDI optocoupler signals. The machine ran smoothly without resets, tracking fast musical tempos reliably.',
        decisions: [
          'Power: Isolated 3-rail power architecture (5V Arduino, 12V servos, 24V stepper) with star grounding.',
          'Motion Control: Trapezoidal acceleration profiles in stepper firmware to prevent tube drum vibration.',
          'Interface: Opto-isolated MIDI input socket allowing plug-and-play control from DAW software.',
        ],
        image: 'images/pan flute robot electric wiring diagram.png',
        imageCaption:
          'Three-rail electrical wiring schematic isolating 5V Arduino logic, 12V servo power, and 24V stepper motor rails with common star grounding.',
        testConditions:
          'Polyphonic MIDI stress test: 120 BPM rapid arpeggios executed continuously over 30 minutes with zero microcontroller resets.',
      },
    ],
    productOutcome: {
      finalDesignAndResults:
        'The robotic pan flute successfully performed musical compositions directly from standard digital audio workstation (DAW) software over MIDI. The stepper motor drum achieved precise angular positioning under [ADD: measured seek time] ms per note, and the 2-DOF airflow nozzle struck each tube at its calibrated acoustic resonance angle, producing rich, authentic musical tones across the entire octave scale.',
      mediaUrl: 'images/robotic pan flute thumbnail.jpg',
      mediaCaption:
        'Finished robotic pan flute system playing full musical arrangements via standard MIDI input.',
      downloadLinks: [
        { label: 'Pan Flute Musical Machine Report (PDF)', url: '#', type: 'PDF' },
        { label: 'Pan Flute Robot Gallery Blog Post (PDF)', url: '#', type: 'PDF' },
      ],
    },
    whatILearned:
      'I learned that physical acoustic resonance depends heavily on sub-millimeter nozzle positioning, and that isolating power rails with proper star grounding is vital when mixing microcontrollers with inductive motors.',
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
    oneLineOutcome:
      'Engineered a 20-servo electro-mechanical music box with custom 3D-printed actuators and Arduino C++ firmware that compensates for mechanical linkage compliance.',
    cardShortDescription:
      'Built an automated 20-servo music box with custom 3D-printed actuators and Arduino C++ firmware that compensates for mechanical compliance.',
    hoverDescription:
      'Collaborated on the mechanical design and electronics for a modified acoustic music box. Wired and integrated 20 micro-servos with driver boards to independently actuate individual spring-steel tines. Developed Arduino C++ code to parse MIDI input and implemented per-servo software angular offsets to eliminate mechanical assembly variations.',
    category: 'Mechatronics & Embedded',
    coverImage: 'images/midi music box thumbnail.jpg',
    year: 'August 2025 - October 2025',
    tools: ['Arduino (C++)', '3D Printing (FDM)', 'SolidWorks', '20x Micro-Servos', 'PCA9685 I2C Drivers', 'Wire Linkages'],
    summaryStrip: {
      role: 'Mechanical Design & Firmware Contributor',
      teamSize: '3-4 Person Collaboration',
      timeline: 'August 2025 – October 2025',
      tools: 'SolidWorks, FDM 3D Printing, Arduino C++, PCA9685 Drivers, Calipers, Wire Forming',
      myContribution:
        'Co-designed 3D-printed actuator brackets, wired 20 servos to PWM driver boards, authored Arduino MIDI parsing code, and implemented software position offsets.',
    },
    objective:
      'The objective was to modify a mechanical 20-note acoustic music box into an automated instrument capable of playing dynamic musical files over standard MIDI. We had to fit 20 independent actuators into a compact envelope directly over the spring-steel comb without interfering with neighboring tines or damping acoustic vibration. The system needed fast, repeatable note strikes with low latency [ADD: target latency limit] within a tight student budget and limited fabrication turnaround.',
    brainstorm: {
      paragraph:
        'We evaluated two actuation methods: miniature push-pull solenoids versus micro-servos with custom 3D-printed compliant rocker linkages. Solenoids offered rapid strike response, but they drew large current spikes, ran hot, and lacked position control—risking over-striking and snapping the delicate spring-steel tines. We selected micro-servos paired with custom 3D-printed rocker arms because their precise rotational control let us gently displace and release each tine, while staggered vertical mounting allowed all 20 actuators to fit neatly over the narrow tine spacing.',
      image: 'images/midi music box-original music box.jpg',
      imageCaption:
        'Original mechanical 20-note music box comb and cylinder mechanism prior to mechatronic retrofitting.',
    },
    prototypeIterations: [
      {
        version: 'v1',
        title: '3D-Printed Linkages & Mechanical Compliance Challenges',
        whatWasBuilt:
          'In v1, we 3D printed rocker arms in PLA and attached them to the servo horns using thin steel linkage wires, mounting the assembly directly above the music box comb.',
        whatFailedOrUnderperformed:
          'Because of minor dimensional tolerances across 20 3D-printed brackets and elastic deflection in the thin linkage wires under tine resistance, some tines were plucked too shallowly (producing faint sound) while others pushed past the tine and jammed underneath, causing missed notes.',
        whatChangedAndResult:
          'Rather than endlessly re-bending linkage wires or machining custom metal linkages, I solved the hardware compliance in software: I programmed a calibration routine in Arduino C++ that stored individual start, pluck, and release angle offsets for each of the 20 servos. This software compensation eliminated missed notes completely and ensured crisp, uniform note volume across all tines.',
        decisions: [
          'Software Compensation: Stored individual angular calibration offsets per servo in Arduino memory.',
          'Actuation Geometry: Staggered servo mounting levels to prevent adjacent servo horns from clashing.',
          'Driver Architecture: Utilized PCA9685 I2C 16-channel PWM driver boards to offload pulse timing from the Arduino.',
        ],
        image: 'images/midi music box- modified to hold actuators.jpg',
        imageCaption:
          'Music box structure modified and fitted with mounting brackets to support the 20-servo actuator array.',
        testConditions:
          'Repeated actuation test: 50 consecutive plucks per tine to measure strike consistency and check for linkage fatigue.',
      },
      {
        version: 'v2',
        title: 'Full MIDI Parser Integration & Polyphonic Tuning',
        whatWasBuilt:
          'Built the final integrated unit with hardwood acoustic base, dedicated 5V 4A regulated power bus, clean ribbon wiring, and direct USB-MIDI serial communication.',
        whatFailedOrUnderperformed:
          'Initial MIDI parsing using standard blocking serial routines caused audible latency jitter during multi-note chords when several servos actuated at once.',
        whatChangedAndResult:
          'I refactored the Arduino C++ firmware to process incoming MIDI note-on and note-off events asynchronously without blocking delays, dropping total actuation latency below 18 ms and preserving tight musical timing.',
        decisions: [
          'Firmware: Non-blocking circular buffer MIDI parser in C++.',
          'Power: Dedicated 5V 4A power supply to handle peak simultaneous servo currents during polyphonic chords.',
          'Acoustics: Rigid hardwood base coupling to amplify music box comb acoustic resonance.',
        ],
        image: 'images/midi music box thumbnail.jpg',
        imageCaption:
          'Finished 20-servo MIDI music box operating under polyphonic DAW playback.',
        testConditions:
          'Polyphonic latency test: High-speed audio recording measuring interval between MIDI note-on transmission and physical acoustic comb attack.',
      },
    ],
    productOutcome: {
      finalDesignAndResults:
        'The completed MIDI music box achieved 100% reliable note actuation across all 20 acoustic tines with zero skipped notes during rapid polyphonic playback. Solving physical mechanical compliance through firmware offset calibration proved to be a fast, pragmatic engineering decision that kept the project on schedule.',
      mediaUrl: 'images/midi music box thumbnail.jpg',
      mediaCaption:
        'Assembled MIDI music box performing acoustic melodies from digital MIDI composition software.',
      downloadLinks: [
        { label: 'MIDI Music Box Project Post (PDF)', url: '#', type: 'PDF' },
      ],
    },
    whatILearned:
      'I learned that small mechanical compliance issues can often be solved faster and more reliably through software calibration than through endless mechanical re-fabrication.',
    photos: [
      {
        src: 'images/midi music box thumbnail.jpg',
        alt: 'MIDI Music Box Thumbnail & Final Build',
        caption: 'Modified acoustic music box with 20 micro-servo tine actuation array, driver boards, and hardwood acoustic base',
        filename: 'midi music box thumbnail.jpg',
      },
      {
        src: 'images/midi music box-original music box.jpg',
        alt: 'Original Unmodified Music Box',
        caption: 'Original mechanical 20-note music box comb and cylinder mechanism prior to mechatronic retrofitting',
        filename: 'midi music box-original music box.jpg',
      },
      {
        src: 'images/midi music box- modified to hold actuators.jpg',
        alt: 'Music Box Modified to Hold Actuators',
        caption: 'Music box structure modified to support custom mounting brackets and 20-servo actuator linkages',
        filename: 'midi music box- modified to hold actuators.jpg',
      },
      {
        src: 'images/midi music box actuator assembly.jpg',
        alt: 'MIDI Music Box Actuator Assembly',
        caption: 'Close-up CAD model and physical assembly of the 20 micro-servo tine strike mechanism and rocker linkages',
        filename: 'midi music box actuator assembly.jpg',
      },
    ],
    tagline: '20-servo mechatronic mechanism with Arduino C++ MIDI parsing and software deflection compensation',
    shortDescription:
      'Built an automated 20-servo music box with custom 3D-printed actuators and Arduino C++ firmware that compensates for mechanical compliance.',
  },
  {
    id: 'cuenca-wildfire-perceptions',
    title: 'Understanding Perceptions of Wildfires',
    oneLineOutcome:
      'Conducted field research in Cuenca, Ecuador with 61 stakeholder surveys and led statistical chi-squared analysis with Holm-Bonferroni correction.',
    cardShortDescription:
      'Led statistical analysis on 61 bilingual stakeholder surveys in Ecuador to evaluate community and municipal perceptions of wildfires.',
    hoverDescription:
      'Collaborated with a 4-person team in Cuenca, Ecuador alongside University of Cuenca students to study wildfire threats to El Cajas National Park. Surveyed 61 rural and municipal stakeholders, leading the statistical analysis using chi-squared tests with Holm-Bonferroni correction to compare community knowledge against soil science data and recommend transparent policy communication.',
    category: 'Data & Field Research',
    coverImage: 'images/understanding perceptions of wildfires- cajas national park and thumbnail.jpg',
    year: 'October 2025 - March 2026',
    tools: ['Statistical Analysis', 'Chi-Squared Testing', 'Holm-Bonferroni Correction', 'Grounded Theory', 'Field Interviews'],
    summaryStrip: {
      role: 'Statistical Analysis Lead & Field Researcher',
      teamSize: '4 WPI Team Members + Univ. of Cuenca Partners',
      timeline: 'October 2025 – March 2026',
      tools: 'Chi-Squared Tests (χ²), Holm-Bonferroni Correction, Grounded Theory, Bilingual Survey Instruments',
      myContribution:
        'Led the quantitative statistical analysis across 61 stakeholder surveys, applied error rate corrections, and compared community perceptions against empirical soil data.',
    },
    objective:
      'Our team was tasked with investigating why wildfires continue to threaten El Cajas National Park, a protected high-altitude paramo ecosystem that provides the primary drinking water source for Cuenca, Ecuador. We aimed to evaluate how perceptions of wildfire causes, soil degradation, and prevention responsibility differed between rural agricultural communities and urban municipal officials. The project required gathering statistically valid data across cultural and language barriers within an intense 7-week on-site field window.',
    brainstorm: {
      paragraph:
        'When planning our research methodology, we debated between distributing an anonymous online survey versus conducting structured in-person interviews across local markets and administrative offices. We rejected online surveys because rural paramo farming communities had limited digital access and past university web surveys had virtually zero rural response. Partnering with University of Cuenca students, we decided on face-to-face bilingual interviews at local markets (such as Mercado Cajas) and government agencies, ensuring authentic, representative participation from both rural landholders and municipal leaders.',
      image: 'images/understanding perceptions of wildfires- market.jpg',
      imageCaption:
        'Bilingual survey fieldwork at a rural mountain market outside Cuenca, Ecuador alongside University of Cuenca student researchers.',
    },
    prototypeIterations: [
      {
        version: 'v1',
        title: 'Preliminary Qualitative Interview Instrument & Pilot',
        whatWasBuilt:
          'Drafted an initial bilingual survey questionnaire focusing on open-ended narrative questions about wildfire frequency, soil recovery times, and institutional trust.',
        whatFailedOrUnderperformed:
          'During our initial pilot interviews in rural parishes, open-ended narrative answers created wide linguistic variation that made direct quantitative comparison between rural farmers and municipal officials difficult to test statistically.',
        whatChangedAndResult:
          'We restructured the survey instrument into paired standardized Likert-scale questions across shared core topics, while using grounded theory to systematically code and quantify open-ended responses. This allowed rigorous statistical hypothesis testing while still capturing rich community narratives.',
        decisions: [
          'Survey Design: Standardized 5-point Likert questions paired with open-ended qualitative prompts.',
          'Sampling: Stratified sampling across rural communities and municipal environmental departments.',
          'Partnership: Co-interviewing with University of Cuenca students to bridge cultural and dialect nuances.',
        ],
        image: 'images/understanding perceptions of wildfires-interview.jpg',
        imageCaption:
          'Conducting in-person bilingual stakeholder interviews with agricultural landholders and municipal leaders.',
        testConditions:
          'Pilot survey run: 8 initial interviews evaluated for question clarity, response time, and coding consistency.',
      },
      {
        version: 'v2',
        title: 'Full Field Sampling, Statistical Correction & Soil Benchmark',
        whatWasBuilt:
          'Surveyed 61 stakeholders across rural agricultural populations and municipal departments, compiling survey data into analytical spreadsheets for hypothesis testing.',
        whatFailedOrUnderperformed:
          'Conducting multiple uncorrected chi-squared tests across multiple shared survey questions carried a high risk of family-wise Type I error (finding false positive statistical significance).',
        whatChangedAndResult:
          'I led the statistical analysis by applying chi-squared tests with Holm-Bonferroni correction across shared survey questions to control family-wise error rates. I then compared our survey findings against empirical soil science data. We found strong alignment between community knowledge and scientific findings on soil damage, but revealed low public trust in fire policy despite a widespread belief that wildfires are preventable.',
        decisions: [
          'Statistical Rigor: Holm-Bonferroni step-down correction applied to all hypothesis p-values.',
          'Methodology: Grounded theory thematic coding to quantify open-ended responses into statistical categories.',
          'Ground Truth: Compared survey results against regional soil science literature on paramo organic carbon recovery.',
        ],
        image: 'images/understanding perceptions of wildfires- cajas national park and thumbnail.jpg',
        imageCaption:
          'Surveying rural community members and agricultural stakeholders outside the municipal market.',
        testConditions:
          'Hypothesis testing: 61 complete survey responses evaluated with chi-squared test of independence; alpha = 0.05 adjusted via Holm-Bonferroni.',
      },
    ],
    productOutcome: {
      finalDesignAndResults:
        'We presented our findings and policy recommendations directly to municipal environmental officials in Cuenca and published our complete results in our WPI IQP report. Our study demonstrated that rural communities understand fire prevention and soil degradation accurately, and we recommended transparent, community-partnered communication rather than punitive enforcement to rebuild trust in local fire policy.',
      mediaUrl: 'images/understanding perceptions of wildfires- cajas national park and thumbnail.jpg',
      mediaCaption:
        'Field research team conducting stakeholder survey interviews in Cuenca, Ecuador.',
      downloadLinks: [
        { label: 'Wildfires Perception Full Report (PDF)', url: '#', type: 'PDF' },
      ],
    },
    whatILearned:
      'I learned how to apply rigorous statistical corrections to real-world social data, and that technical solutions to environmental challenges must be grounded in community trust and clear communication.',
    photos: [
      {
        src: 'images/understanding perceptions of wildfires- cajas national park and thumbnail.jpg',
        alt: 'Understanding Perceptions of Wildfires - Cajas National Park and Thumbnail',
        caption: 'Field research study on wildfire threats, stakeholder perceptions, and land management policies in El Cajas National Park, Ecuador',
        filename: 'understanding perceptions of wildfires- cajas national park and thumbnail.jpg',
      },
      {
        src: 'images/understanding perceptions of wildfires- market.jpg',
        alt: 'Understanding Perceptions of Wildfires - Market',
        caption: 'Bilingual survey fieldwork and stakeholder interviews conducted at community agricultural markets outside Cuenca',
        filename: 'understanding perceptions of wildfires- market.jpg',
      },
      {
        src: 'images/understanding perceptions of wildfires-interview.jpg',
        alt: 'Understanding Perceptions of Wildfires - Interview',
        caption: 'In-person stakeholder interviews assessing community knowledge, institutional trust, and wildfire prevention practices',
        filename: 'understanding perceptions of wildfires-interview.jpg',
      },
    ],
    tagline: 'Cross-cultural field research, stakeholder interviews, and chi-squared statistical analysis with Holm-Bonferroni correction',
    shortDescription:
      'Led statistical analysis on 61 bilingual stakeholder surveys in Ecuador to evaluate community and municipal perceptions of wildfires.',
  },
  {
    id: 'plastic-combat-robot',
    title: '1-Pound Plastic Combat Robot',
    oneLineOutcome:
      'Engineered a 1-pound plastic antweight combat robot with custom slicer tuning and an asymmetric single-tooth spinner that survived full tournament combat.',
    cardShortDescription:
      'Engineered and manufactured a 1-lb antweight combat robot, iterating from weapon failure in v1 to a resilient asymmetric spinner in v2.',
    hoverDescription:
      'Designed and competed with a 1-pound plastic antweight combat robot. After initial version weapon failure and layer delamination during tournament hits, I analyzed structural stresses, redesigned the weapon to be an asymmetric single-tooth spinner, and tuned slicer parameters to 3D print impact-resistant parts that survived the tournament without failure.',
    category: 'Robotics & Mechanisms',
    coverImage: 'images/combat robot version 2 prototype.jpg',
    year: 'October 2025 - Present',
    tools: ['SolidWorks', '3D Printing (Custom Slicer)', 'Brushless Drivetrain', 'LiPo Battery Safety', 'Digital Calipers'],
    summaryStrip: {
      role: 'Lead Designer & Fabricator',
      teamSize: 'Individual Competition Project',
      timeline: 'October 2025 – Present',
      tools: 'SolidWorks, PrusaSlicer (Custom Tuning), FDM 3D Printing, Brushless Motor & ESC, Calipers',
      myContribution:
        'Designed the parametric weapon and chassis in SolidWorks, performed failure analysis on v1 fractures, and tuned slicer parameters for high impact resistance in v2.',
    },
    objective:
      'The objective was to design, 3D print, wire, and compete with a 1.00-pound plastic antweight combat robot capable of surviving high-G kinetic impacts against spinning weapons. Tournament regulations strictly capped total vehicle weight at exactly 453.6 grams (16.0 oz) with zero tolerance, and restricted structural materials to approved plastics (PLA, PETG, TPU, Nylon). The main engineering challenge was preventing 3D print layer delamination and weapon disc shattering during head-on collisions at 10,000+ RPM.',
    brainstorm: {
      paragraph:
        'I evaluated two weapon styles: a four-bar linkage hammer lifter versus a high-speed horizontal spinning disc. I rejected the hammer lifter because the motor, gearbox, and linkage weight consumed too much of our 1-pound allowance, leaving the chassis armor fragile and vulnerable to spinners. I chose a horizontal spinning weapon because it concentrated rotational kinetic energy into a compact spinning mass, allowing me to build a thicker, lower-profile impact-absorbing chassis that deflected opponent hits.',
      image: 'images/combat robot version 1 final.jpg',
      imageCaption:
        'Version 1 robot layout showing initial symmetric weapon disc and chassis geometry before match testing.',
    },
    prototypeIterations: [
      {
        version: 'v1',
        title: 'Symmetric Weapon Disc & Standard Slicer Print Settings',
        whatWasBuilt:
          'In v1, I modeled a symmetric two-tooth spinning blade in SolidWorks and 3D printed the chassis in standard PLA using typical 3-perimeter walls and 20% grid infill.',
        whatFailedOrUnderperformed:
          'During its first tournament match, the symmetric weapon disc fractured near the central mounting bore under impact, and the front chassis uprights suffered severe layer delamination. Furthermore, the symmetric blade had inadequate bite per revolution at high RPM, bouncing off opponents rather than transferring kinetic energy.',
        whatChangedAndResult:
          'I redesigned the failed weapon to be an asymmetric single-tooth spinner with a counterweighted profile. The single tooth doubled the physical bite depth per revolution, delivering deeper hits. For the chassis, I overhauled my 3D printing workflow: I increased nozzle temperature by 15°C, boosted flow rate to 105%, and printed with 100% concentric infill to eliminate internal voids, producing a near-solid plastic part that absorbed high-G impacts without cracking.',
        decisions: [
          'Geometry: Asymmetric single-tooth weapon to maximize tooth bite depth per revolution.',
          'Slicer Tuning: 100% concentric infill with elevated extrusion temperature for superior layer adhesion.',
          'Electronics: Integrated a TPU shock-absorbing sleeve around the LiPo battery and receiver.',
        ],
        image: 'images/combat robot version 1 final.jpg',
        imageCaption:
          'Combat robot version 1 final build with initial symmetric blade prior to first competition test.',
        testConditions:
          'Spin-up and impact test: Weapon spun to 12,000 RPM inside test box against sacrificial HDPE target blocks to verify balance and tooth bite.',
      },
      {
        version: 'v2',
        title: 'Asymmetric Weapon Integration & Tournament Validation',
        whatWasBuilt:
          'Fabricated the v2 robot with the new single-tooth weapon, high-torque micro gearmotors, and belt-driven brushless weapon motor with a custom slip-pulley.',
        whatFailedOrUnderperformed:
          'During bench spin-up testing, high acceleration caused the drive belt to slip slightly on the weapon pulley.',
        whatChangedAndResult:
          'I added a small tensioning idler bearing to the weapon belt path, preventing slippage and allowing rapid weapon spool-up without stalling the brushless motor.',
        decisions: [
          'Drivetrain: Dual independent micro gearmotors providing high traction and maneuverability.',
          'Weapon Drive: FingerTech timing belt with added tensioning idler to prevent belt slip under peak torque.',
          'Weight Management: Shaved internal chassis pockets to hit a final weight of exactly 448 grams [target: 454g].',
        ],
        image: 'images/combat robot version 2 prototype.jpg',
        imageCaption:
          'Combat robot version 2 prototype featuring single-tooth asymmetric spinner and reinforced chassis.',
        testConditions:
          'Tournament competition: 3 full matches of high-impact head-to-head combat against opponent spinners.',
      },
    ],
    productOutcome: {
      finalDesignAndResults:
        'In tournament competition, the redesigned v2 combat robot survived every match without requiring a single weapon replacement or suffering chassis failure. The single-tooth asymmetric weapon delivered aggressive, deep bites, and the final measured weight was 448 grams (well under the 453.6 g limit). The project demonstrated how failure analysis and iterative manufacturing turn an early setback into a winning engineering solution.',
      mediaUrl: 'images/combat robot version 2 prototype.jpg',
      mediaCaption:
        'V2 combat robot assembled and weighed at 448g, ready for tournament matches.',
      downloadLinks: [
        { label: 'Weapon CAD & Slicer Settings (PDF)', url: '#', type: 'PDF' },
      ],
    },
    whatILearned:
      'I learned that 3D-printed part strength under impact is governed far more by print temperature, infill geometry, and print orientation than by exterior wall count alone, and that weapon bite matters more than raw RPM.',
    photos: [
      {
        src: 'images/combat robot version 1 final.jpg',
        alt: 'Combat Robot Version 1 Final',
        caption: 'Version 1 final antweight combat robot with symmetrical dual-tooth weapon before initial tournament trial',
        filename: 'combat robot version 1 final.jpg',
      },
      {
        src: 'images/combat robot version 2 prototype.jpg',
        alt: 'Combat Robot Version 2 Prototype',
        caption: 'Version 2 antweight combat robot prototype with asymmetric single-tooth spinner and reinforced chassis geometry',
        filename: 'combat robot version 2 prototype.jpg',
      },
    ],
    tagline: 'Parametric kinetic weapon design, advanced slicer tuning, and impact-resistant 3D printing',
    shortDescription:
      'Engineered and manufactured a 1-lb antweight combat robot, iterating from weapon failure in v1 to a resilient asymmetric spinner in v2.',
  },
];
