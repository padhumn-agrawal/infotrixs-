
  function getRandomQuote() {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        displayQuote(data);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }

  function displayQuote(quote) {
    document.getElementById("quote-text").textContent = `"${quote.content}"`;
    document.getElementById("quote-author").textContent = `- ${quote.author}`;
  }

  // Initial load
  getRandomQuote();



  document.addEventListener("DOMContentLoaded", function () {
    // GSAP animation
    gsap.from(".quote-card", { opacity: 0, x: -400, duration: 5 });
});


document.addEventListener("DOMContentLoaded", function () {
  // GSAP animation
  gsap.from(".quote-cardtwo", { opacity: 0, x: 400, duration: 9 });
});






