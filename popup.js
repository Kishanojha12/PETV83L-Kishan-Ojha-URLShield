chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const url = tabs[0].url;
  document.getElementById("status").textContent = "Current URL: " + url;
});
