function goToResults() {
  // Show loading screen
  const loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.classList.add('show');
  
  // Redirect after a delay to show the loading animation
  setTimeout(() => {
    window.location.href = "results.html";
  }, 2000); // 2 second delay to show the loading animation
}

function checkResults() {
  // Show loading screen
  const loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.classList.add('show');
  
  // Redirect to detailed results
  setTimeout(() => {
    window.location.href = "detailed-results.html";
  }, 2000);
}

function goBackHome() {
  window.location.href = "home_page.html";
}

function goBackResults() {
  window.location.href = "results.html";
}