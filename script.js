window.addEventListener("load", function() {
  const now = new Date();
  const locale = "mt-MT";

  const formatted = now.toLocaleString(locale, {
    dateStyle: "full",
    timeStyle: "medium"
  });

  document.getElementById("datetime").textContent = formatted;
});
