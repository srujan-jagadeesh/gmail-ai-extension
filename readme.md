# ✉️ Srujan Mail AI Tool v1.0

> **Stop staring at a blank reply box.** Draft context-aware, hyper-tailored email replies inside Gmail powered by Google's Gemini API — without ever leaving your browser tab.

---

## 🚀 What Is This?

Writing emails manually is so 2010. **Srujan Mail AI Tool** is a lightweight Manifest V3 Chrome extension that injects a smart AI assistant straight into your Gmail compose windows. 

It reads your active email thread context, understands the tone and history, and drafts human-sounding responses in seconds. Need to tweak the response? Use the floating, draggable refinement bar to shorten, formalize, or completely rewrite the draft on the fly.

---

## ✨ Features That Make You Look Like a Genius

* 🧠 **Smart Thread Reading**: Automatically pulls context from prior messages in the thread so you never have to copy-paste back-and-forth history into ChatGPT.
* 🎛️ **Draggable Refine Menu**: Floating toolbar right above your action bar. Drag it anywhere, minimize it when you're done, or close it whenever you want.
* ⚡ **One-Click Quick Chips**:
  * ⚡ **Shorten** — For when you just need to get straight to the point.
  * 👔 **Formal** — For emailing executives, clients, or professors.
  * 📝 **Expand** — For when a quick *"Thanks!"* needs to sound like a thoughtful 3-paragraph update.
  * 🔄 **Re-draft** — Fresh perspective on the response instantly.
* 🔒 **Privacy-First & CSP Compliant**: API keys stay secured inside your browser's local storage (`chrome.storage.local`). Includes zero external media script tracking and bundled local QR generation (`qrcode.min.js`).
* ❤️ **Integrated Support Modal**: Built-in dark-themed UPI donation popup with dynamic offline QR rendering to support ongoing open-source updates.

---

## 🛠️ Project Structure

```text
gmail-ai-extension/
├── content.js        # DOM injection, thread parser, Gemini API caller & UI overlays
├── popup.html        # Clean extension popup interface
├── popup.js          # Secure API key storage handler
├── qrcode.min.js     # Bundled lightweight local QR generator
├── manifest.json     # Chrome Extension V3 Configuration
├── profile.jpg       # Profile picture for support modal
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

❤️ Support the Developer
If this tool saved you hours of typing awkward emails, consider supporting the project!

Scan the QR code directly inside the extension's ❤️ Donate button or use the UPI ID below:

UPI ID: srujansrujan128-1@oksbi

Name: Srujan

📄 License
Distributed under the MIT License. Feel free to fork, modify, and build your own awesome extensions!