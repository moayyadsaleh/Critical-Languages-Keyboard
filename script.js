function loadKeyboard(language) {
  document.getElementById("virtualKeyboard").innerHTML = "";

  switch (language) {
    case "arabic":
      loadArabicKeyboard();
      break;
  }

  document.getElementById("virtualKeyboard").style.display = "block";
}

function loadArabicKeyboard() {
  const arabicKeyboardLayout = [
    ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح"],
    ["ج", "چ", "ح", "خ", "ه", "ع", "غ", "ف", "ق", "ث"],
    ["ش", "س", "ي", "ب", "ل", "ا", "أ", "آ", "لأ", "ت", "ن", "م", "ك"],
    ["ظ", "ط", "ذ", "د", "ز", "ر", "و", "ؤ", "ء", "ى"],
    ["َ", "ً", "ُ", "ٌ", "ِ", "ٍ", "ْ", "ّ", "إ", "ئ"],
    ["backspace", "space"],
  ];
  const virtualKeyboard = document.getElementById("virtualKeyboard");

  arabicKeyboardLayout.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";

    row.forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.textContent =
        key === "backspace" ? "⌫" : key === "space" ? "␣" : key;
      keyElement.addEventListener("click", () => {
        if (key === "backspace") {
          handleBackspace();
        } else if (key === "space") {
          handleKeyClick(" ");
        } else {
          handleKeyClick(key);
        }
      });
      rowElement.appendChild(keyElement);
    });

    virtualKeyboard.appendChild(rowElement);
  });
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Backspace") {
    handleBackspace();
  }
});

function handleBackspace() {
  const outputElement = document.getElementById("output");
  outputElement.textContent = outputElement.textContent.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    handleKeyClick(" ");
  }
});

function handleKeyClick(key) {
  const outputElement = document.getElementById("output");
  outputElement.textContent += key;
}
