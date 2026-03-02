window.onload = function () {

  const btn = document.getElementById("generateBtn");

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
      if (number !== "") {

        const cleanNumber = number.replace(/\D/g, "");
        const encodedMessage = encodeURIComponent(message);
        const waLink = "https://wa.me/" + cleanNumber + "?text=" + encodedMessage;

        const button = document.createElement("button");
        button.innerText = "Send to " + cleanNumber;

        button.onclick = function () {
          window.open(waLink, "_blank");
        };

        linksDiv.appendChild(button);
      }
    });

  });

};
