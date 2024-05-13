const ratings = document.querySelectorAll('.rating');
const selectedRating = document.getElementById('selectedRating');

function updateRating(clickedRating) {
  selectedRating.textContent = clickedRating;
  ratings.forEach(rating => {
    rating.classList.toggle('selected', parseInt(rating.getAttribute('data-rating')) <= clickedRating);
  });
}

ratings.forEach(rating => {
  rating.addEventListener('click', event => {
    updateRating(parseInt(event.target.getAttribute('data-rating')));
  });

  rating.addEventListener('mouseover', event => {
    const hoveredRating = parseInt(event.target.getAttribute('data-rating'));
    ratings.forEach(rating => {
      rating.style.color = parseInt(rating.getAttribute('data-rating')) <= hoveredRating ? '#ffca08' : '#c5c5c5';
    });
  });

  rating.addEventListener('mouseout', () => {
    ratings.forEach(rating => {
      rating.style.color = rating.classList.contains('selected') ? '#ffca08' : '#c5c5c5';
    });
  });
});
