const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
const scientific = document.getElementById("scientific");
const historyPanel = document.getElementById("history");

// Add value or function to display
function appendValue(val) {
  display.value += val;
}

function appendFunction(func) {
  display.value += func;
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate expression
function calculate() {
  try {
    const result = eval(display.value);
    addToHistory(`${display.value} = ${result}`);
    display.value = result;
  } catch (error) {
    alert("Invalid Expression");
    display.value = "";
  }
}

// Add entry to history
function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

// Toggle scientific panel
function toggleScientific() {
  scientific.classList.toggle("hidden");
}

// Toggle history panel
function toggleHistory() {
  historyPanel.classList.toggle("hidden");
}

// Theme handling
const themes = ['theme-default', 'theme-dark', 'theme-pink', 'theme-blue'];
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let currentTheme = localStorage.getItem('themeIndex');

// If no theme is saved, use system preference
if (currentTheme === null) {
  currentTheme = systemPrefersDark ? 1 : 0; // 1 = theme-dark, 0 = theme-default
}

currentTheme = parseInt(currentTheme); // ensure it's a number
document.body.classList.add(themes[currentTheme]);

function changeTheme() {
  document.body.classList.remove(themes[currentTheme]);
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.classList.add(themes[currentTheme]);
  localStorage.setItem('themeIndex', currentTheme);
}
