window.onload = function () {

  // Grab all elements
  const generateBtn = document.getElementById("generateBtn");
  const numbersField = document.getElementById("numbers");
  const messageField = document.getElementById("Message");
  const linksDiv = document.getElementById("links");
  const counterSpan = document.getElementById("counter");
  const sentBox = document.getElementById("sentBox");

  // Defensive check
  if (!generateBtn || !numbersField || !messageField || !linksDiv || !counterSpan || !sentBox) {
    alert("HTML ID mismatch detected. Check your IDs.");
    return;
  }

  // Tracking
  let sentNumbers = [];
  let sentCount = 0;

  generateBtn.addEventListener("click", function () {

    const numbersInput = numbersField.value.trim();
    const message = messageField.value.trim();

    if (!numbersInput || !message) {
      alert("Please enter numbers and message");
      return;
    }

    // Clear old links
    linksDiv.innerHTML = "";

    const numbers = numbersInput.split("\n");

    numbers.forEach(function (num) {

      const cleanNumber = num.replace(/\D/g, "").trim();

      if (!cleanNumber) return;

      // Skip if already sent
      if (sentNumbers.includes(cleanNumber)) return;

      const encodedMessage = encodeURIComponent(message);
      const waLink = "https://wa.me/" + cleanNumber + "?text=" + encodedMessage;

      const btn = document.createElement("button");
      btn.innerText = "Send to " + cleanNumber;

      btn.addEventListener("click", function () {

        // Open WhatsApp link
        window.open(waLink, "_blank");

        // Mark as sent
        sentNumbers.push(cleanNumber);
        sentCount++;
        counterSpan.innerText = sentCount;

        // Add to red box
        const p = document.createElement("div");
        p.innerText = cleanNumber + " - Sent";
        sentBox.appendChild(p);

        // Remove button so can't resend
        btn.remove();

        // Limit alert
        if (sentCount >= 50) {
          alert("Warning: 50+ messages sent. Ban risk increased! Adjust numbers carefully.");
        }

      });

      linksDiv.appendChild(btn);

    });

  });

};
