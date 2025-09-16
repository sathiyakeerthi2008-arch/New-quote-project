const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

function newQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}