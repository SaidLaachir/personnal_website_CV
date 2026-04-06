const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector(".icon");

function updateIcon() {
  icon.style.transform = "scale(0)";
  
  setTimeout(() => {
    if (document.body.classList.contains("dark")) {
      icon.textContent = "☀️";
    } else {
      icon.textContent = "🌙";
    }
    icon.style.transform = "scale(1)";
  }, 150);
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

updateIcon();

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateIcon();
});