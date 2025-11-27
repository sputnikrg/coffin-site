document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // не даём браузеру перезагружать страницу

    statusEl.textContent = "Ihre Anfrage wird gesendet...";
    
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mangjgkv", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        statusEl.textContent = "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.";
        form.reset();
      } else {
        statusEl.textContent = "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt per E-Mail.";
      }
    } catch (error) {
      console.error(error);
      statusEl.textContent = "Verbindungsfehler. Bitte versuchen Sie es später erneut.";
    }
  });
});
