 document.getElementById("generateBtn").addEventListener("click", function () {

  const numbersInput = document.getElementById("numbers").value.trim();
  const message = document.getElementById("Message").value.trim();
  const linksDiv = document.getElementById("links");

  linksDiv.innerHTML = ""; // clear old links

  if (!numbersInput || !message) {
    alert("Please enter numbers and message");
    return;
  }

  const numbers = numbersInput.split("\n");

  numbers.forEach(function (number) {

    number = number.trim();

    if (number !== "") {

      const cleanNumber = number.replace(/\D/g, "");

      const encodedMessage = encodeURIComponent(message);

      const waLink = "https://wa.me/" + cleanNumber + "?text=" + encodedMessage;

      const btn = document.createElement("button");
      btn.textContent = "Send to " + cleanNumber;

      btn.onclick = function () {
        window.open(waLink, "_blank");
      };

      linksDiv.appendChild(btn);
    }
  });

});
