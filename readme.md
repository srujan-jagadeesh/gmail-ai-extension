# ✉️ Srujan Mail AI Tool v1.0
> **Developed & Maintained by Srujan Jagadeesh**

Stop staring at a blank reply box. Draft context-aware, hyper-tailored email replies inside Gmail powered by Google's Gemini API — built from the ground up by **Srujan Jagadeesh** without ever leaving your browser tab.

---

## 🚀 What Is This?
Writing emails manually is so 2010. **Srujan Mail AI Tool** is an open-source, lightweight Manifest V3 Chrome extension developed by **Srujan Jagadeesh** that injects a smart AI assistant directly into your Gmail compose windows.

It reads your active email thread context, understands the tone and history, and drafts human-sounding responses in seconds. Need to tweak the response? Use the floating, draggable refinement bar to shorten, formalize, or completely rewrite the draft on the fly.

---

## ✨ Features
🧠 **Smart Thread Reading:** Automatically pulls context from prior messages in the thread so you never have to copy-paste back-and-forth history into external tools.  
🎛️ **Draggable Refine Menu:** Floating toolbar right above your action bar. Drag it anywhere, minimize it when you're done, or close it whenever you want.  
⚡ **One-Click Quick Chips:**
- **Shorten** — Get straight to the point.
- **Formal** — Designed for executives, clients, or professional communications.
- **Expand** — Turn a quick "Thanks!" into a detailed, thoughtful response.
- **Re-draft** — Fresh perspective on the response instantly.

🔒 **Privacy-First & Secure:** Your Gemini API key is stored locally on your device (`chrome.storage.local`). Zero external tracking scripts or hidden telemetry.  
❤️ **Integrated Support:** Built-in dark-themed donation popup with dynamic offline QR rendering.

---

## 🛠️ Project Structure
```text
gmail-ai-extension/
├── content.js        # DOM injection, thread parser, Gemini API caller & UI overlays
├── popup.html        # Extension popup interface
├── popup.js          # Secure API key storage handler
├── qrcode.min.js     # Bundled local QR generator
├── manifest.json     # Chrome Extension V3 Configuration
├── profile.jpg       # Developer profile picture
└── icon.png          # Extension icon
📦 Installation Guide
Since this is a custom extension, install it directly in Chrome Developer Mode:

1. Download or Clone the Repository
Bash
git clone [https://github.com/YOUR_USERNAME/gmail-ai-extension.git](https://github.com/YOUR_USERNAME/gmail-ai-extension.git)
2. Load into Google Chrome
Open Chrome and navigate to chrome://extensions/.

Toggle on Developer mode in the top right corner.

Click Load unpacked in the top left.

Select your gmail-ai-extension folder.

3. Add Your Gemini API Key
Get a free API key from Google AI Studio.

Click the Srujan Mail AI icon in your Chrome extensions toolbar.

Paste your API key and hit Save Key.

🎯 How to Use
Open Gmail and click Reply on any email thread.

Next to the standard Send button, you'll see a new ✨ AI Reply button.

Click ✨ AI Reply — the extension reads the thread and writes a response.

Use the floating ✨ Refine Draft popup to tweak the tone, make it shorter, or type custom instructions (e.g., "Make it sound enthusiastic and mention I am free on Tuesday").

Hit Send and enjoy your saved time! ☕

💻 Tech Stack
Platform: Chrome Extension Manifest V3

AI Engine: Google Gemini API (gemini-3.6-flash)

Frontend UI: Pure Vanilla JavaScript, CSS3, DOM Manipulation, MutationObserver API

Libraries: qrcodejs (Bundled Locally)

👨‍💻 ABOUT THE DEVELOPER
Srujan Mail AI Tool was designed and developed by Srujan Jagadeesh.

• GitHub: https://github.com/srujan-jagadeesh
• LinkedIn: https://www.linkedin.com/in/srujanjagadeesh/

❤️ Support the Developer
If this tool saved you hours of typing awkward emails, consider supporting the project!

Scan the QR code directly inside the extension's ❤️ Donate button or use the UPI ID below:

UPI ID: srujansrujan128-1@oksbi

Name: Srujan

📄 License
Distributed under the MIT License. Feel free to fork, modify, and build your own awesome extensions!
