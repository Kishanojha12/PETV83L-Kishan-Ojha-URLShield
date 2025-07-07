# 🛡️ URLShield – Chrome Extension for Malicious URL Protection

**URLShield** is a lightweight Chrome extension that protects users from phishing, malware, and unsafe websites in real-time. It leverages the **Google Safe Browsing API** to detect and block harmful URLs before users visit them.

---

## 🚀 Features

- ✅ Real-time malicious URL detection
- 🔒 Blocks phishing, malware, and unwanted software
- ⚡ Fast and lightweight – runs silently in the background
- 🧪 Test mode support for fake/phishing URLs
- 🧾 Custom block page with clear warnings
- 📋 Simple popup UI showing active tab URL

---

## 🧠 How It Works

1. When a user navigates to any URL, the extension intercepts the request.
2. The URL is checked against the **Google Safe Browsing API**.
3. If a threat is detected, the page is blocked, and the user is redirected to a custom warning page (`block.html`).
4. For development/testing, custom test URLs like `http://example.com/phish` can be used.

---

## 🔧 Tech Stack

- JavaScript (Vanilla)
- HTML + CSS
- Google Safe Browsing API (v4)
- Chrome Extensions API (Manifest v3)

---

## 📦 Installation (Developer Mode)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/URLShield.git
2. Open Chrome and go to:
3. chrome://extensions/
4. Enable Developer mode (top right)
5. Click "Load unpacked" and select the project folder
  The extension icon (🛡️) will appear in the toolbar
---

## 🧪 Testing Instructions
http://testsafebrowsing.appspot.com/s/malware.html  
⚠️ To test this, Chrome's Safe Browsing protection must be temporarily disabled from:
- chrome://settings/security

## 📂 Project Structure

``` URLShield/
├── manifest.json 
├── background.js
├── popup.html
├── popup.js
├── block.html
└── icons/
   └── icon128.png
```
     
---

## 👨‍💻 Author
- Kishan Ojha
- Cybersecurity Enthusiast & Builder
- Drop Organisation DCSC Certified | LPU B.Tech CSE
- GitHub

---

⚠️ Disclaimer: This project is for educational purposes only. Always test on safe URLs and avoid using real phishing links without proper isolation.

---

@kishanojha12
