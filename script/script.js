document.addEventListener('DOMContentLoaded', () => {
    var filterButtons = document.querySelectorAll('.type-filters button');
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
        cards.forEach(card => card.style.display = 'block');
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
    });

    hideAllCards();
  });
   