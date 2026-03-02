const generateBtn = document.getElementById("generateBtn");
const numbersInput = document.getElementById("numbers");
const messageInput = document.getElementById("message");
const linksDiv = document.getElementById("links");
const sentBox = document.getElementById("sentBox");
const counter = document.getElementById("counter");

let sentCount = 0;
let sentNumbers = [];

generateBtn.addEventListener("click", function() {

  linksDiv.innerHTML = "";

  const numbers = numbersInput.value.split("\n");
  const message = encodeURIComponent(messageInput.value);

  numbers.forEach(function(num) {

    num = num.trim();
    if (num === "") return;

    const button = document.createElement("button");
    button.textContent = "Send to " + num;

    button.addEventListener("click", function() {

      if (sentNumbers.includes(num)) {
        alert("Already sent to this number!");
        return;
      }

      const link = "https://wa.me/92" + num + "?text=" + message;
      window.open(link, "_blank");

      sentNumbers.push(num);
      sentCount++;
      counter.textContent = sentCount;

      const sentItem = document.createElement("div");
      sentItem.textContent = num + " - Sent";
      sentBox.appendChild(sentItem);

      button.disabled = true;

      if (sentCount >= 50) {
        alert("Warning! 50 messages sent. Ban risk! Change numbers.");
      }

    });

    linksDiv.appendChild(button);

  });

});
