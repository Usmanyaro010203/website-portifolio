 
    // Show a welcome message on page load
    window.onload = function() {
      alert("Welcome to Usman's Contact Page!");
    };

    // Example: Add hover effect using JavaScript
    const link = document.getElementById("backLink");
    link.addEventListener("mouseover", () => {
      link.style.backgroundColor = "#003f6b";
    });
    link.addEventListener("mouseout", () => {
      link.style.backgroundColor = "#0077cc";
    });
  