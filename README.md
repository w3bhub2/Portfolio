# Usman Ghani — Portfolio

Personal portfolio and playground. Built with React, TypeScript, Tailwind CSS, and Vite.

**Live:** [usman-ops.netlify.app](https://usman-ops.netlify.app)

## One-tap deploy

From the project root:

```bash
# macOS / Linux / Git Bash
chmod +x deploy.sh
./deploy.sh Usman_Ghani_Resume_2026.pdf
```

```powershell
# Windows (Command Prompt or PowerShell)
deploy.bat Usman_Ghani_Resume_2026.pdf
```

That's it. The script will:

1. Copy your resume PDF to `public/resume.pdf`
2. Install dependencies (only the first time)
3. Build the production site
4. Commit + push to git (if set up)
5. Deploy to Netlify (if `netlify-cli` is installed)
6. Open the live site in your browser

**Without updating the resume:** just run `./deploy.sh` with no argument — it skips step 1 and redeploys the site as-is.

### First-time setup

```bash
# 1. Install Netlify CLI (one time)
npm i -g netlify-cli

# 2. Authenticate (one time)
netlify login

# 3. Link this folder to your Netlify site (one time)
netlify link
#    Choose "Search by site name" → enter "usman-ops"

# 4. Initialize git (one time, if not already)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/w3bhub2/Portfolio.git
git branch -M main
git push -u origin main --force
```

After that, every future deploy is a single command: `./deploy.sh`

## What's inside

- Portfolio — experience, skills, and projects
- Playable **2048 Chaos** game (swipe + keyboard)
- Live links to [MatzHub](https://www.matzhub.com) and [Aurum Bespoke](https://www.aurumbespoke.com)
- Resume page at `/resume.html` (auto-redirects to your PDF)
- SEO, OpenGraph, JSON-LD structured data, LLM crawler rules

## Run locally

```bash
npm install
npm run dev      # start dev server on localhost
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Updating the resume

**Quick:** `./deploy.sh path/to/your/resume.pdf`

**Manual:** drop your PDF at `public/resume.pdf`, commit, push. The `/resume` button on the site automatically picks it up. No code changes needed.

## Editing content

All portfolio content lives in **`src/data.ts`** — edit that file and run `./deploy.sh` to push changes live.

## Repo structure

```
├── index.html            # Entry point + SEO/JSON-LD
├── deploy.sh             # One-tap deploy (Mac/Linux)
├── deploy.bat            # One-tap deploy (Windows)
├── public/
│   ├── og-image.jpg      # Social share preview (1200×630)
│   ├── resume.html       # Placeholder (auto-redirects to resume.pdf)
│   ├── resume.pdf        # ← your resume goes here
│   ├── robots.txt        # Crawler rules
│   └── sitemap.xml
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── data.ts           # All portfolio content in one file
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Play.tsx
│   │   ├── Game2048.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── Icon.tsx
│   └── utils/cn.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## License

© Usman Ghani. All rights reserved.
