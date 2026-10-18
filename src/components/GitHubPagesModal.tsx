import React, { useState } from 'react';
import { Profile, Project } from '../types';
import {
  X,
  Github,
  Download,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Terminal,
  FolderArchive,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  projects: Project[];
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
}) => {
  if (!isOpen) return null;

  const [copiedAction, setCopiedAction] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const ghActionsYaml = `name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  const handleCopyYaml = () => {
    navigator.clipboard.writeText(ghActionsYaml);
    setCopiedAction(true);
    setTimeout(() => setCopiedAction(false), 2000);
  };

  const handleDownloadStandaloneHtml = () => {
    setDownloading(true);

    // Create a self-contained static HTML file representation of the portfolio
    const standaloneHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${profile.name} - Mechanical Engineering Portfolio</title>
  <meta name="description" content="${profile.bioSummary}" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
  
  <!-- Navigation -->
  <header class="border-b border-slate-800 bg-slate-950/80 sticky top-0 backdrop-blur-md z-30">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="font-bold text-lg tracking-tight text-white">${profile.name} <span class="text-xs font-mono text-slate-400">/ ME</span></div>
      <div class="flex items-center gap-6 text-sm">
        <a href="#overview" class="hover:text-blue-400 transition-colors">Overview</a>
        <a href="#projects" class="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact" class="hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-6 py-12 space-y-16" id="overview">
    
    <!-- Hero -->
    <section class="border-b border-slate-800 pb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div class="md:col-span-8 space-y-4">
        <div class="text-xs font-mono uppercase text-blue-400 tracking-wider">
          ${profile.degree} · ${profile.institution} · ${profile.graduationYear}
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-white">${profile.name}</h1>
        <p class="text-xl text-slate-300 font-medium">${profile.headline}</p>
        <p class="text-slate-400 leading-relaxed max-w-2xl">${profile.bioSummary}</p>
        
        <div class="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
          <div>Email: <a href="mailto:${profile.email}" class="text-blue-400 hover:underline">${profile.email}</a></div>
          <div>Phone: <span class="text-slate-200">${profile.phone}</span></div>
          <div>LinkedIn: <a href="${profile.linkedin}" target="_blank" class="text-blue-400 hover:underline">Profile</a></div>
        </div>
      </div>
    </section>

    <!-- Projects Gallery -->
    <section id="projects" class="space-y-8">
      <div>
        <div class="text-xs font-mono uppercase text-blue-400 tracking-wider">Mechanical Portfolio</div>
        <h2 class="text-3xl font-bold text-white">Engineering Projects</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${projects
          .map(
            (p) => `
        <article class="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between">
          <img src="${p.coverImage}" alt="${p.title}" class="w-full aspect-[16/10] object-cover bg-slate-950" />
          <div class="p-6 space-y-3">
            <h3 class="text-xl font-bold text-white">${p.title}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">${p.cardShortDescription || p.shortDescription || ''}</p>
          </div>
        </article>
        `
          )
          .join('')}
      </div>
    </section>

    <!-- Contact & Footer -->
    <footer id="contact" class="border-t border-slate-800 pt-8 pb-16 text-center text-xs font-mono text-slate-500 space-y-2">
      <div>${profile.name} · ${profile.degree} · Hosted with GitHub Pages</div>
      <div>Contact: ${profile.email} | ${profile.phone}</div>
    </footer>
  </main>
</body>
</html>`;

    const blob = new Blob([standaloneHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
    setDownloading(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <Github className="w-4 h-4 text-slate-900 dark:text-white" />
            <span>GitHub Pages Hosting & Export Assistant</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto text-slate-800 dark:text-slate-200">
          
          {/* Quick Notice */}
          <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/30 text-xs sm:text-sm text-blue-900 dark:text-blue-200 space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Optimized for GitHub Pages Out-of-the-Box</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              The project is preconfigured with relative asset paths (<code className="font-mono bg-blue-100/60 dark:bg-blue-900/40 px-1 py-0.5 rounded">base: './'</code> in <code className="font-mono">vite.config.ts</code>) and client-side hash routing so you never encounter broken image paths or 404 subpage routing issues on GitHub Pages.
            </p>
          </div>

          {/* Option A: One-Click Standalone HTML File (Direct User Spec) */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400">Method 1 (Instant Single File)</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Download Standalone Single-File <code className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">index.html</code>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Download a self-contained HTML file containing your complete profile, bio, resume links, and projects gallery. You can drop this single file directly into a GitHub repository root.
                </p>
              </div>

              <button
                onClick={handleDownloadStandaloneHtml}
                disabled={downloading}
                className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download index.html</span>
              </button>
            </div>
          </div>

          {/* Option B: Standard Vite Build Flow (Recommended for full interactive features) */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400">
              Method 2 (Full Interactive React App on GitHub Pages)
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Standard 3-Step Setup with GitHub Pages
            </h3>

            <div className="space-y-3 text-xs font-mono">
              
              {/* Step 1 */}
              <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-1.5">
                <div className="text-slate-500 uppercase tracking-wider font-semibold">Step 1: Build the Static Assets</div>
                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded text-slate-800 dark:text-slate-200 flex items-center justify-between">
                  <code>npm run build</code>
                  <span className="text-[11px] text-slate-500">Outputs production-ready static files into ./dist</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-1.5">
                <div className="text-slate-500 uppercase tracking-wider font-semibold">Step 2: Push Repository to GitHub</div>
                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded text-slate-800 dark:text-slate-200 text-[11px] space-y-1">
                  <div>git init</div>
                  <div>git add .</div>
                  <div>git commit -m "feat: initial mechanical engineering portfolio"</div>
                  <div>git remote add origin https://github.com/&lt;your-username&gt;/&lt;repo-name&gt;.git</div>
                  <div>git push -u origin main</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-1.5">
                <div className="text-slate-500 uppercase tracking-wider font-semibold">Step 3: Enable Pages in GitHub Settings</div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs">
                  In your repository on GitHub, navigate to <strong>Settings</strong> → <strong>Pages</strong>. Under <strong>Build and deployment</strong>, select <strong>GitHub Actions</strong> (or choose branch <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">gh-pages</code>).
                </p>
              </div>

            </div>
          </div>

          {/* GitHub Actions Automated Workflow */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                Automated Deployment File: <code className="text-blue-600 dark:text-blue-400">.github/workflows/deploy.yml</code>
              </div>
              <button
                onClick={handleCopyYaml}
                className="px-2.5 py-1 text-xs font-mono rounded border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copiedAction ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAction ? 'Copied YAML!' : 'Copy Workflow'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 text-[11px] font-mono overflow-x-auto max-h-48 border border-slate-800 scrollbar-thin">
              {ghActionsYaml}
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Ready for static hosting on GitHub, Vercel, Netlify, or AWS S3.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
