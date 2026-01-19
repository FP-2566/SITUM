window.addEventListener("load", function() {
  const now = new Date();
  const formatted = now.toLocaleString("mt-MT", {
    dateStyle: "full",
    timeStyle: "medium"
  });

  document.getElementById("datetime").textContent = formatted;
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "Daphne" && pass === "China") {
    alert("Hanini!!!");
  } else {
    alert("Wrong credentials");
  }
});
