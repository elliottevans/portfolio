# 🌐 Developer Portfolio 

A personal static portfolio website built with **React**, **Bootstrap**, and **Sass**, designed to showcase projects, experience, and contact information.  
This version includes compatibility fixes for Node 18+ and Ajv schema validation (via a shim layer).

---

## 🚀 Live Demo
View your deployed site here:  
👉 **https://elliottevans.github.io**

To deploy updates manually:
```bash
npm run deploy
```
That command builds the app and pushes it to the `gh-pages` branch for GitHub Pages hosting.

---

## 🧩 Local Development Setup

### Prerequisites
- macOS or Linux  
- Node.js **18.18.2**  
- npm **≥ 8**  
- nvm (Node Version Manager)

If `nvm` isn’t recognized, run this first:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

That temporarily loads NVM for your current terminal session.

---

### 1️⃣ Clone and enter the project
```bash
git clone https://github.com/elliottevans/portfolio.git
cd portfolio
```

### 2️⃣ Set the correct Node version
```bash
nvm use 18.18.2
```
If you don’t have it installed:
```bash
nvm install 18.18.2
```

### 3️⃣ Install dependencies
```bash
npm install --legacy-peer-deps
```

---

### 4️⃣ Fix shim permissions (only once)
```bash
chmod 644 shim/preload.js shim/ajv-keywords.js
```
This prevents “Permission denied” errors when running `npm start`.

---

### 5️⃣ Start the development server
```bash
npm start
```
Then open your browser to:
```
http://localhost:3000
```

---

## 🧠 Common Issues & Fixes

### 🐚 `zsh: command not found: nvm`
Run:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```
Then retry:
```bash
nvm use
```

---

### ⚠️ `Unknown keyword formatMinimum` or `validateOptions is not a function`
Run a clean reinstall:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

### 🧱 `Permission denied: shim/preload.js`
Fix permissions:
```bash
chmod 644 shim/preload.js shim/ajv-keywords.js
```

---

## 🏗️ Build for Production
To generate an optimized production build:
```bash
npm run build
```
The output will be in the `/build` directory.

---

## 🌍 Deploy to GitHub Pages
To deploy to your live GitHub Pages site:
```bash
npm run deploy
```

That command:
1. Builds the project
2. Pushes `/build` to your `gh-pages` branch
3. Serves it at **https://elliottevans.github.io**

Make sure your repository’s **Pages** settings are configured to use the `gh-pages` branch.

---

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/                 # React source code
│   ├── components/      # UI components
│   ├── scss/            # Sass stylesheets
│   └── index.js         # Entry point
├── shim/                # Compatibility fixes for Ajv/schema-utils
├── package.json         # Dependencies and scripts
└── .nvmrc               # Node version pin
```

---

## 🧑‍💻 Tech Stack
- React 18  
- Bootstrap 5  
- Sass  
- GitHub Pages (deployment)  
- CRACO + SWC (transpilation)  

---

## 💡 Notes
- You do **not** need to edit `.zshrc` — just run the `export NVM_DIR` block before `nvm use` if needed.  
- Run `chmod 644 shim/*.js` only once after cloning.  
- All webpack/Ajv compatibility fixes are preconfigured in `/shim`.

---

### ✅ To Reproduce From Scratch
```bash
rm -rf node_modules package-lock.json
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 18.18.2
npm install --legacy-peer-deps
chmod 644 shim/preload.js shim/ajv-keywords.js
npm start
```

---

© 2025 Elliott Evans, forked from @hashirshoaeb.
