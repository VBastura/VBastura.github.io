import * as fs from 'fs';
import * as path from 'path';
import { jsPDF } from 'jspdf';

function createResumeDoc(): jsPDF {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'letter',
    compress: true,
  });

  const pageWidth = 612;
  const marginX = 44;
  const contentWidth = pageWidth - marginX * 2; // 524 pt
  const rightX = marginX + contentWidth; // 568 pt

  let y = 42;

  // Header - Name (all text is pure solid black)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text('Vicente Bastura', pageWidth / 2, y, { align: 'center' });

  // Subtitle - Title
  y += 19;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text('Mechanical Engineer', pageWidth / 2, y, { align: 'center' });

  // Contact Info
  y += 16;
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  doc.text('vicentebastura1310@gmail.com | (860) 481-1231', pageWidth / 2, y, { align: 'center' });

  y += 22;

  function renderSectionHeader(title: string) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(title, marginX, y);
    y += 4;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.75);
    doc.line(marginX, y, rightX, y);
    y += 15;
  }

  // --- EDUCATION ---
  renderSectionHeader('Education');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  const wpiText = 'Worcester Polytechnic Institute';
  doc.text(wpiText, marginX, y);
  const wpiWidth = doc.getTextWidth(wpiText);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(' – BS/MS in Mechanical Engineering | GPA – 3.82', marginX + wpiWidth, y);

  // Date is all black
  doc.text('May 2027', rightX, y, { align: 'right' });
  y += 15;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  const extraPrefix = 'Extracurriculars – ';
  doc.text(extraPrefix, marginX, y);
  const extraWidth = doc.getTextWidth(extraPrefix);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text('Combat Robotics, Running Club, FSAE', marginX + extraWidth, y);
  y += 23;

  // --- PROJECTS ---
  renderSectionHeader('Projects');

  const projects = [
    {
      title: 'Autonomous Off-Road Vehicle Chassis – Major Qualifying Project',
      date: 'May 2026 - Present',
      bullets: [
        'Contributed to iterative spaceframe chassis design by considering structural, packaging, and size constraints.',
        'Conducted static FEA simulations using Ansys to analyze the chassis for torsional rigidity, peak stresses, and load paths.',
        'Collaborating with other teams to create an entire off-road vehicle platform, with a full rolling chassis and support for future systems.',
      ],
    },
    {
      title: '1 Pound Plastic Combat Robot',
      date: 'October 2025 - Present',
      bullets: [
        'Designed a parametric weapon, iterated mechanical components, and collaboratively brainstormed for version 1.',
        'Manufactured the complete robot using 3D printing and wired the electronic system for the first competition.',
        'Identified weaknesses in workflow, material, and design considerations for version 2 development.',
        'Redesigned the failed weapon to be asymmetric and smaller for version 2.',
      ],
    },
    {
      title: 'MIDI Music Box',
      date: 'August 2025 - October 2025',
      bullets: [
        'Collaborated on the mechanical design, assembly of custom 3D-printed actuators, and an electronic system connected to a modified music box.',
        'Wired and integrated 20 servos with servo driver boards to independently actuate individual music box tines.',
        'Developed Arduino code to parse MIDI input and map incoming notes to the corresponding servos.',
        'Implemented individual servo position offsets in software to compensate for variation in the assembly and ensure reliable note actuation.',
      ],
    },
    {
      title: 'Understanding Perceptions of Cuenca Cantón Wildfires – Interactive Qualifying Project',
      date: 'October 2025 - March 2026',
      bullets: [
        'Collaborated with a 4-person team and the University of Cuenca to investigate community perceptions of wildfire impacts on soil in Cuenca, Ecuador.',
        'Interviewed rural and municipal stakeholders alongside University of Cuenca students, administering surveys across two distinct populations.',
        "Performed statistical analysis and authored the results section, applying chi-squared testing with Holm-Bonferroni correction across 61 respondents' survey data.",
      ],
    },
  ];

  for (let i = 0; i < projects.length; i++) {
    const proj = projects[i];

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text(proj.title, marginX, y);

    // Project date: all black (not gray)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text(proj.date, rightX, y, { align: 'right' });
    y += 13.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.2);
    doc.setTextColor(0, 0, 0);
    for (let bIdx = 0; bIdx < proj.bullets.length; bIdx++) {
      const b = proj.bullets[bIdx];
      // Crisp vector bullet dot
      doc.setFillColor(0, 0, 0);
      doc.circle(marginX + 5, y - 2.8, 1.3, 'F');

      const lines = doc.splitTextToSize(b, contentWidth - 14);
      doc.text(lines, marginX + 13, y);
      y += lines.length * 11.8;
      if (bIdx < proj.bullets.length - 1) {
        y += 3.0;
      }
    }
    if (i < projects.length - 1) {
      y += 8.0;
    }
  }

  y += 23;

  // --- SKILLS ---
  renderSectionHeader('Skills');

  const skills = [
    { label: 'CAD and Design: ', text: 'SolidWorks (CSWA & Simulation), Ansys, Fusion 360, Onshape, 3D Part & Assembly Design, 2D Drawings' },
    { label: 'Manufacturing and Prototyping: ', text: '3D Printing (Operation & Maintenance), Rapid Prototyping, CAM, CNC Mill, CNC Lathe, Calipers, Micrometer, Manufacturing Process, Osha-10 Certified, Tolerancing' },
    { label: 'Programming and Electronics: ', text: 'MATLAB, Arduino (C++), Raspberry Pi, Sensors, Actuators, Soldering' },
    { label: 'Other: ', text: 'Computer Skills, Problem Solving, Attention to Detail, Hands-On, Creative, Teamwork, Communication, AI' },
  ];

  doc.setFontSize(9.0);
  for (let i = 0; i < skills.length; i++) {
    const s = skills[i];
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    const labelW = doc.getTextWidth(s.label);
    doc.text(s.label, marginX, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    const firstLineAvail = contentWidth - labelW;
    const words = s.text.split(' ');
    let curLine = '';
    let isFirst = true;
    for (const w of words) {
      const testLine = curLine ? curLine + ' ' + w : w;
      const maxW = isFirst ? firstLineAvail : contentWidth;
      if (doc.getTextWidth(testLine) > maxW) {
        doc.text(curLine, isFirst ? marginX + labelW : marginX, y);
        y += 12.0;
        curLine = w;
        isFirst = false;
      } else {
        curLine = testLine;
      }
    }
    if (curLine) {
      doc.text(curLine, isFirst ? marginX + labelW : marginX, y);
    }
    if (i < skills.length - 1) {
      y += 14.0;
    }
  }

  y += 23;

  // --- EXPERIENCE ---
  renderSectionHeader('Experience');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  doc.text('Landscaping, Multiple Companies – Pomfret, CT', marginX, y);

  // Date is all black
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  doc.text('May 2024 – August 2026', rightX, y, { align: 'right' });
  y += 13.5;

  // All 3 bullets present, including the 3rd bullet
  const expBullets = [
    "Managed a private client's property independently, scheduling work, and determining maintenance needs while completing additional assigned projects including pathway and retaining-wall construction. (2024-2026)",
    'Completed daily tasks independently at a golf course, operating push mowers, weed trimmers, leaf blowers, and specialty equipment. (2024)',
    'Maintained residential properties for a landscaping company, traveling between job sites and weed trimming. (2026)',
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(0, 0, 0);
  for (let i = 0; i < expBullets.length; i++) {
    const b = expBullets[i];
    doc.setFillColor(0, 0, 0);
    doc.circle(marginX + 5, y - 2.8, 1.3, 'F');

    const lines = doc.splitTextToSize(b, contentWidth - 14);
    doc.text(lines, marginX + 13, y);
    y += lines.length * 11.8;
    if (i < expBullets.length - 1) {
      y += 3.0;
    }
  }

  return doc;
}

const doc = createResumeDoc();
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

// Write to public/
const publicPath = path.resolve(process.cwd(), 'public/Vicente_Bastura_Resume.pdf');
fs.writeFileSync(publicPath, pdfBuffer);
console.log('Successfully wrote', publicPath, pdfBuffer.length, 'bytes');

// Write to dist/ if dist exists
const distDir = path.resolve(process.cwd(), 'dist');
if (fs.existsSync(distDir)) {
  const distPath = path.join(distDir, 'Vicente_Bastura_Resume.pdf');
  fs.writeFileSync(distPath, pdfBuffer);
  console.log('Successfully wrote', distPath, pdfBuffer.length, 'bytes');
}
