document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('backBtn').addEventListener('click', function () {
    if (window.history.length > 1) {
      history.back();
    } else {
      window.location.href = "https://www.google.com";
    }
  });
});
