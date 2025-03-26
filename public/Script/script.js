document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.getElementById("menu-bar");
    const closeSidebar = document.getElementById("close-sidebar");
    const sidebar = document.getElementById("sidebar1");
  
    // Open Sidebar
    menuBar.addEventListener("click", function () {
        sidebar.classList.add("active");
    });
  
    // Close Sidebar
    closeSidebar.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });
  });
  
  // for greetings
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay(); 
  function getGreeting() {
      let now = new Date();
      let hours = now.getHours();
      let greeting = "";
  
      if (hours >= 5 && hours < 12) {
          greeting = "Good Morning ☀️";
      } else if (hours >= 12 && hours < 17) {
          greeting = "Good Afternoon 🌤️";
      } else if (hours >= 17 && hours < 21) {
          greeting = "Good Evening 🌇";
      } else {
          greeting = "Good Night 🌙";
      }
  
      return greeting;
  }
  document.getElementById("greeting").textContent = getGreeting();