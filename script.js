window.addEventListener("load", function() {
  const now = new Date();
  const formatted = now.toLocaleString("mt-MT", {
    dateStyle: "full",
    timeStyle: "medium"
  });

  document.getElementById("datetime").textContent = formatted;
});
