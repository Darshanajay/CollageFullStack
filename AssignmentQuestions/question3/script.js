const form = document.getElementById('feedback-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const rating = document.querySelector('input[name="rating"]:checked').value;
  const comment = document.getElementById('comment').value;
  // Send the feedback data to your server or database
  console.log(`Rating: ${rating}, Comment: ${comment}`);
});