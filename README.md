🛡️ URLShield – Malicious URL Blocker Chrome Extension
URLShield is a lightweight Chrome extension that protects users from phishing, malware, and unsafe websites in real-time. It leverages the power of the Google Safe Browsing API to detect and block malicious URLs before they can do harm.

🚀 Features
✅ Real-time malicious URL detection using Google Safe Browsing

🔒 Blocks phishing, malware, and harmful links instantly

🔁 Custom testing support with simulated unsafe URLs

🔔 Sleek popup UI that shows current URL status

💻 Built with Manifest V3 (latest Chrome extension standard)

🔧 How It Works
The extension monitors every navigation event in the browser.

Before loading any page, it sends the URL to the Google Safe Browsing API.

If the URL is flagged as malicious, the user is immediately redirected to a custom block page (block.html).

Safe URLs are allowed without interruption.

Users can view the current tab’s URL status through the popup.

📁 Tech Stack
JavaScript (Vanilla)

HTML/CSS

Google Safe Browsing API

Chrome Extensions API (Manifest v3)

🧪 Testing Instructions
To test the extension:

Use http://example.com/phish (hardcoded for testing)

OR use http://testsafebrowsing.appspot.com/s/malware.html (after disabling Chrome’s Safe Browsing temporarily)

Popup shows active tab’s URL and extension status

🔐 Note
Google Chrome has built-in Safe Browsing. If a site is already blocked by Chrome, your extension won’t get a chance to intercept it. For development testing, use custom domains or temporarily disable Chrome protection.

