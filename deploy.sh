#!/usr/bin/env bash
set -e

# ============================================================================
# ONE-TAP DEPLOY SCRIPT FOR USMAN GHANI PORTFOLIO
# ============================================================================
# Usage:
#   ./deploy.sh                          # Deploy without updating resume
#   ./deploy.sh Usman_Ghani_Resume.pdf   # Deploy + update resume PDF
#
# What it does:
#   1. Copies your resume PDF to public/resume.pdf (if provided)
#   2. Builds the production site
#   3. Commits + pushes to GitHub (if git is set up)
#   4. Deploys to Netlify (if netlify CLI is installed)
#   5. Opens the live site in your browser
# ============================================================================

BOLD="\033[1m"
GREEN="\033[0;32m"
CYAN="\033[0;36m"
YELLOW="\033[0;33m"
RESET="\033[0m"

DOMAIN="https://usman-ops.netlify.app"

echo ""
echo -e "${BOLD}${CYAN}═══════════════════════════════════════════════════════════════${RESET}"
echo -e "${BOLD}${CYAN}  Usman Ghani Portfolio — One-Tap Deploy${RESET}"
echo -e "${BOLD}${CYAN}═══════════════════════════════════════════════════════════════${RESET}"
echo ""

# --- Step 1: Handle resume PDF ------------------------------------------------
if [ -n "$1" ]; then
    if [ -f "$1" ]; then
        echo -e "${CYAN}[1/5]${RESET} Copying resume PDF → public/resume.pdf"
        cp "$1" public/resume.pdf
        echo -e "  ${GREEN}✓ Resume updated${RESET}"
    else
        echo -e "${YELLOW}⚠ File not found: $1 — skipping resume update${RESET}"
    fi
else
    echo -e "${CYAN}[1/5]${RESET} No resume PDF provided — using existing placeholder"
    echo -e "  ${YELLOW}Tip:${RESET} pass the file path to update: ./deploy.sh MyResume.pdf"
fi
echo ""

# --- Step 2: Install deps if missing ------------------------------------------
if [ ! -d "node_modules" ]; then
    echo -e "${CYAN}[2/5]${RESET} Installing dependencies..."
    npm install --silent
    echo -e "  ${GREEN}✓ Dependencies installed${RESET}"
else
    echo -e "${CYAN}[2/5]${RESET} Dependencies already installed"
fi
echo ""

# --- Step 3: Build ------------------------------------------------------------
echo -e "${CYAN}[3/5]${RESET} Building production site..."
npm run build --silent
echo -e "  ${GREEN}✓ Build complete${RESET}"
echo ""

# --- Step 4: Git commit + push (optional) -------------------------------------
echo -e "${CYAN}[4/5]${RESET} Git commit + push"
if [ -d ".git" ]; then
    git add -A
    if git diff --staged --quiet; then
        echo -e "  ${YELLOW}No changes to commit${RESET}"
    else
        TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
        git commit -m "Deploy $TIMESTAMP" --quiet
        echo -e "  ${GREEN}✓ Committed${RESET}"
    fi
    if git remote -v | grep -q origin; then
        CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "main")
        git push origin "$CURRENT_BRANCH" --quiet 2>/dev/null && \
            echo -e "  ${GREEN}✓ Pushed to origin/$CURRENT_BRANCH${RESET}" || \
            echo -e "  ${YELLOW}Push skipped (no upstream or auth required)${RESET}"
    else
        echo -e "  ${YELLOW}No git remote — skipping push${RESET}"
    fi
else
    echo -e "  ${YELLOW}Not a git repo — skipping. Run: git init && git remote add origin <url>${RESET}"
fi
echo ""

# --- Step 5: Netlify deploy (optional) ----------------------------------------
echo -e "${CYAN}[5/5]${RESET} Netlify deploy"
if command -v netlify >/dev/null 2>&1; then
    echo -e "  Deploying to production..."
    netlify deploy --prod --dir=dist --message "Deploy from deploy.sh"
    echo -e "  ${GREEN}✓ Deployed to Netlify${RESET}"
else
    echo -e "  ${YELLOW}Netlify CLI not installed.${RESET}"
    echo -e "  Install: ${BOLD}npm i -g netlify-cli${RESET}"
    echo -e "  Then login: ${BOLD}netlify login${RESET}"
    echo -e "  Link site: ${BOLD}netlify link${RESET} (run once)"
    echo -e "  ${CYAN}→ Or drag ${BOLD}dist/${RESET}${CYAN} to app.netlify.com/drop${RESET}"
fi
echo ""

# --- Done ---------------------------------------------------------------------
echo -e "${BOLD}${GREEN}═══════════════════════════════════════════════════════════════${RESET}"
echo -e "${BOLD}${GREEN}  ✓ Deploy complete${RESET}"
echo -e "${BOLD}${GREEN}═══════════════════════════════════════════════════════════════${RESET}"
echo ""
echo -e "  ${BOLD}Live at:${RESET} ${CYAN}$DOMAIN${RESET}"
echo ""

# Open the site in the default browser
if [[ "$OSTYPE" == "darwin"* ]]; then
    open "$DOMAIN" 2>/dev/null || true
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    (xdg-open "$DOMAIN" 2>/dev/null || sensible-browser "$DOMAIN" 2>/dev/null) &
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    start "$DOMAIN" 2>/dev/null || true
fi

echo -e "${GREEN}🚀 Opened in browser.${RESET}"
echo ""
