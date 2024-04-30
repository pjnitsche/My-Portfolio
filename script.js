document.addEventListener("DOMContentLoaded", function() {
    var cookiePopup = document.getElementById("cookie-popup");
    var acceptCookiesBtn = document.getElementById("accept-cookies");
  
    // Check if user has accepted cookies
    var cookiesAccepted = localStorage.getItem("cookiesAccepted");
  
    // If cookies not accepted, show the popup
    if (!cookiesAccepted) {
      cookiePopup.style.display = "block";
    }
  
    // Event listener for accepting cookies
    acceptCookiesBtn.addEventListener("click", function() {
      localStorage.setItem("cookiesAccepted", true);
      cookiePopup.style.display = "none";
    });
  });
  