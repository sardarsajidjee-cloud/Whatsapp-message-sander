window.onload = function () {

  let sentNumbers = [];
  let sentCount = 0;

  const btn = document.getElementById("generateBtn");
  const counter = document.getElementById("counter");
  const sentBox = document.getElementById("sentBox");

  btn.addEventListener("click", function () {

    const numbersInput = document.getElementById("numbers").value.trim();
    const message = document.getElementById("Message").value.trim();
    const linksDiv = document.getElementById("links");

    linksDiv.innerHTML = "";

    if (!numbersInput || !message) {
      alert("Please enter numbers and message");
      return;
    }

    const numbers = numbersInput.split("\n");

    numbers.forEach(function (number) {

      number = number.trim();
      if (number === "") return;

      const cleanNumber = number.replace(/\D/g, "");

      // If already sent, skip
      if (sentNumbers.includes(cleanNumber)) return;

      const encodedMessage = encodeURIComponent(message);
      const waLink = "https://wa.me/" + cleanNumber + "?text=" + encodedMessage;

      const button = document.createElement("button");
      button.innerText = "Send to " + cleanNumber;

      button.onclick = function () {

        window.open(waLink, "_blank");

        // Add to sent list
        sentNumbers.push(cleanNumber);
        sentCount++;
        counter.innerText = sentCount;

        // Add to red box
        const p = document.createElement("p");
        p.innerText = cleanNumber + " - Sent";
        sentBox.appendChild(p);

        // Remove button so can't send again
        button.remove();

        // Limit Alert
        if (sentCount >= 50) {
          alert("Warning: 50+ messages sent. Ban risk increased!");
        }
      };

      linksDiv.appendChild(button);

    });

  });

};
