function loadKeyboard(language) {
  document.getElementById("virtualKeyboard").innerHTML = "";

  switch (language) {
    case "arabic":
      loadArabicKeyboard();
      break;
    case "russian":
      loadRussianKeyboard();
      break;
    case "thai":
      loadThaiKeyboard();
      break;
    case "farsi":
      loadFarsiKeyboard();
      break;
    case "french":
      loadFrenchKeyboard();
      break;
    case "indonesian":
      loadIndonesianKeyboard();
      break;
    case "korean":
      loadKoreanKeyboard();
      break;
    case "portuguese":
      loadPortugueseKeyboard();
      break;
    case "spanish":
      loadSpanishKeyboard();
      break;
  }

  document.getElementById("virtualKeyboard").style.display = "block";
}

function loadArabicKeyboard() {
  const arabicKeyboardLayout = [
    ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح"],
    ["ج", "چ", "ح", "خ", "ة", "ع", "غ", "ف", "ق", "ث"],
    ["ش", "س", "ي", "ب", "ل", "ا", "أ", "آ", "لأ", "ت", "ن", "م", "ك"],
    ["ظ", "ط", "ذ", "د", "ز", "ر", "و", "ؤ", "ء", "ى"],
    ["َ", "ً", "ُ", "ٌ", "ِ", "ٍ", "ْ", "ّ", "إ", "ئ"],
    ["،", "؛", ":", ".", "؟", "!", "backspace", "space"],
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

function loadRussianKeyboard() {
  const russianKeyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з"],
    ["х", "ъ", "ф", "ы", "в", "а", "п", "р", "о", "л"],
    ["д", "ж", "э", "backspace"],
    ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
    ["ё", ".", "space"],
  ];
  const virtualKeyboard = document.getElementById("virtualKeyboard");

  russianKeyboardLayout.forEach((row) => {
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
function loadThaiKeyboard() {
  const thaiKeyboardLayout = [
    ["ๅ", "/", "-", "ภ", "ถ", "ุ", "ึ", "ค", "ต", "จ"],
    ["ข", "ช", "ๆ", "ไ", "ำ", "พ", "ะ", "ั", "ี", "ร"],
    ["น", "ย", "บ", "ล", "ฃ", "ฟ", "ห", "ก", "ด", "เ"],
    ["้", "่", "า", "ส", "ว", "ง", "ผ", "ป", "แ", "อ"],
    ["็", "โ", "ฌ", "็", "space", "backspace"],
  ];

  const virtualKeyboard = document.getElementById("virtualKeyboard");

  thaiKeyboardLayout.forEach((row) => {
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
function loadFarsiKeyboard() {
  const farsiKeyboardLayout = [
    ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"],
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح"],
    ["ج", "چ", "پ", "ش", "س", "ی", "ب", "ل", "ا", "ت"],
    ["ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د"],
    ["ؤ", "ء", "ئ", "إ", "أ", "ا", "لأ", "ً", "ٌ", "ٍ", "َ", "ُ", "ِ"],
    ["ٓ", "ْ", "ّ", ":", "؛", ".", "،", "؟", "!", "backspace"],
    ["space"],
  ];
  const virtualKeyboard = document.getElementById("virtualKeyboard");

  farsiKeyboardLayout.forEach((row) => {
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

function loadKoreanKeyboard() {
  const koreanKeyboardLayout = [
    ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ"],
    ["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅏ", "ㅣ"],
    ["ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ"],
    ["space", "backspace"],
  ];
  const virtualKeyboard = document.getElementById("virtualKeyboard");

  koreanKeyboardLayout.forEach((row) => {
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

function loadFrenchKeyboard() {
  const frenchKeyboardLayout = [
    ["&", "é", '"', "'", "(", ")", "-", "è", "_", "ç"],
    ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
    ["w", "x", "c", "v", "b", "n", ",", ";", ":", "!"],
    ["shift", ".", "space"],
  ];

  const virtualKeyboard = document.getElementById("virtualKeyboard"); // Assuming you have a div with id "virtualKeyboard" in your HTML

  frenchKeyboardLayout.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";

    row.forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.textContent =
        key === "shift" ? "⇧" : key === "space" ? "␣" : key;
      keyElement.addEventListener("click", () => {
        if (key === "shift") {
          toggleShift();
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

  let shiftActivated = false;

  function toggleShift() {
    shiftActivated = !shiftActivated;
    updateKeyLabels();
  }

  function updateKeyLabels() {
    const buttons = document.querySelectorAll(".keyboard-row button");
    buttons.forEach((button) => {
      const key =
        frenchKeyboardLayout[(buttons.indexOf(button) / 10) | 0][
          buttons.indexOf(button) % 10
        ];
      button.textContent = shiftActivated
        ? key.toUpperCase()
        : key.toLowerCase();
    });
  }
}

function loadIndonesianKeyboard() {
  const indonesianKeyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "\\"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"],
    ["space", ".", ",", "?", "!"],
  ];

  const virtualKeyboard = document.getElementById("virtualKeyboard"); // Assuming you have a div with id "virtualKeyboard" in your HTML

  indonesianKeyboardLayout.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";

    row.forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.textContent =
        key === "shift"
          ? "⇧"
          : key === "backspace"
          ? "⌫"
          : key === "space"
          ? "␣"
          : key;
      keyElement.addEventListener("click", () => {
        if (key === "shift") {
          toggleShift();
        } else if (key === "backspace") {
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

  let shiftActivated = false;

  function toggleShift() {
    shiftActivated = !shiftActivated;
    updateKeyLabels();
  }

  function updateKeyLabels() {
    const buttons = document.querySelectorAll(".keyboard-row button");
    buttons.forEach((button) => {
      const key =
        indonesianKeyboardLayout[(buttons.indexOf(button) / 10) | 0][
          buttons.indexOf(button) % 10
        ];
      button.textContent = shiftActivated
        ? key.toUpperCase()
        : key.toLowerCase();
    });
  }
}
function loadKoreanKeyboard() {
  const koreanKeyboardLayout = [
    ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ"],
    ["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅏ", "ㅣ", "backspace"],
    ["ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ", "ㅃ", "ㅉ", "ㄸ"],
    ["ㄲ", "ㅆ", ".", ",", "space"],
  ];

  const virtualKeyboard = document.getElementById("virtualKeyboard");

  koreanKeyboardLayout.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";

    row.forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.textContent =
        key === "backspace" ? "⌫" : key === " " ? "␣" : key;
      keyElement.addEventListener("click", () => {
        if (key === "backspace") {
          handleBackspace();
        } else if (key === " ") {
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
function loadPortugueseKeyboard() {
  const portugueseKeyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç"],
    ["z", "x", "c", "v", "b", "n", "m", "backspace"],
    ["@", ".", ",", ";", ":", "!", "?", "space"],
  ];

  const virtualKeyboard = document.getElementById("virtualKeyboard");

  portugueseKeyboardLayout.forEach((row) => {
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

function loadSpanishKeyboard() {
  // Spanish keyboard layout
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Backspace") {
    handleBackspace();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    handleKeyClick(" ");
  }
});

function handleBackspace() {
  const outputElement = document.getElementById("output");
  outputElement.textContent = outputElement.textContent.slice(0, -1);
}

function handleKeyClick(key) {
  const outputElement = document.getElementById("output");
  outputElement.textContent += key;
}
