document.addEventListener('DOMContentLoaded', () => {
    var filterButtons = document.querySelectorAll('.type-filters button');
    var validNames = Array.from(document.querySelectorAll('.card h3'))
    .map(h3 => h3.textContent.trim().toLowerCase());
    var feedback = document.getElementById('search-feedback');
    var searchButton   = document.querySelector('.search-bar button');
    var searchInput    = document.querySelector('.search-bar input');
    var cards          = document.querySelectorAll('.card');
  
  
    function hideAllCards() {
        cards.forEach(card => {
          card.style.display = "none";
        });
      }
    
    // Show only cards of the clicked type
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        var type = btn.textContent.trim().toLowerCase();
        // clear any previous search
        searchInput.value = '';
        cards.forEach(card => {
          if (card.classList.contains(type)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  
    // Show only the card whose name matches the search query
    searchButton.addEventListener('click', () => {
      var query = searchInput.value.trim().toLowerCase();
      if (!query) {
        // if blank, show all cards again
        cards.forEach(card => card.style.display = 'none');
        feedback.textContent = '';
        return;
      }
  // invalid name: hide all & show feedback
  if (!validNames.includes(query)) {
    cards.forEach(card => card.style.display = 'none');
    feedback.textContent = `No Pokémon named “${searchInput.value}”.`;
    return;
  }
      cards.forEach(card => {
        var name = card.querySelector('h3').textContent.trim().toLowerCase();
        if (name === query) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      feedback.textContent = '';
    });

    hideAllCards();
  });
   