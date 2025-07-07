const API_KEY = "AIzaSyAEo7PxFmCSPvbstaJuc1NY9tYvlHtpk2M"; 

const TEST_URLS = ["http://example.com/phish"]; // fake URLs for testing

async function checkURLWithSafeBrowsing(urlToCheck) {
  const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;

  const requestBody = {
    client: {
      clientId: "urlshield-extension",
      clientVersion: "1.0"
    },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url: urlToCheck }]
    }
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    return data.matches !== undefined;
  } catch (err) {
    console.error("Safe Browsing API Error:", err);
    return false;
  }
}

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  const url = details.url;
  console.log("Navigating to:", url);

  // Quick test mode
  if (TEST_URLS.includes(url)) {
    console.log("Blocked via test list!");
    chrome.tabs.update(details.tabId, {
      url: chrome.runtime.getURL("block.html")
    });
    return;
  }

  const isMalicious = await checkURLWithSafeBrowsing(url);
  if (isMalicious) {
    console.log("Blocked via Google Safe Browsing!");
    chrome.tabs.update(details.tabId, {
      url: chrome.runtime.getURL("block.html")
    });
  }
});
