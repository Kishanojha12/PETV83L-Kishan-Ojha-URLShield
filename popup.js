document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    document.getElementById("currentUrl").textContent = "URL: " + url;

    const blocked = JSON.parse(localStorage.getItem("blockedURLs") || "[]");
    const status = document.getElementById("status");

    if (blocked.includes(url)) {
      status.textContent = "❌ This URL was previously blocked";
      status.classList.add("danger");
    } else {
      status.textContent = "✅ This URL appears safe";
      status.classList.add("safe");
    }
  });

  document.getElementById("viewHistory").addEventListener("click", () => {
    const history = JSON.parse(localStorage.getItem("blockedURLs") || "[]");
    alert("Blocked URLs:\n" + history.join("\n"));
  });

  document.getElementById("reportBtn").addEventListener("click", () => {
    alert("URL reported. Thank you!");
  });
});
