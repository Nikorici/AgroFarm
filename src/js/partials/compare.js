$(document).ready(function() {
    let compareItems = [];
  
    $('.card .delite-text').on('click', function() {
      const button = $(this);
      const card = button.closest('.card');
      if (compareItems.length < 2 && !button.hasClass('selected')) {
        button.addClass('selected');
        compareItems.push({
          element: card,
          title: card.find('.card-title').text(),
          quality: Math.floor(Math.random() * 100),
          country: 'Country ' + Math.floor(Math.random() * 10),
          volume: Math.floor(Math.random() * 1000) + ' ml',
          price: '$' + (Math.random() * 100).toFixed(2),
          quantity: Math.floor(Math.random() * 50),
          trust: Math.floor(Math.random() * 100) + '%'
        });
      }
  
      if (compareItems.length === 2) {
        showComparison(compareItems);
      }
    });
  
    function showComparison(items) {
      const modal = $('#compare-modal');
      const left = modal.find('.left');
      const right = modal.find('.right');
  
      left.html(generateComparisonHTML(items[0], items[1]));
      right.html(generateComparisonHTML(items[1], items[0]));
  
      modal.show();
    }
  
    function generateComparisonHTML(item, compareWith) {
      return `
        <h3>${item.title}</h3>
        <p class="${getClassForComparison(item.quality, compareWith.quality)}">Calitate: ${item.quality}</p>
        <p>Țara producător: ${item.country}</p>
        <p class="${getClassForComparison(item.volume, compareWith.volume)}">Volum: ${item.volume}</p>
        <p class="${getClassForComparison(item.price, compareWith.price, true)}">Preț: ${item.price}</p>
        <p class="${getClassForComparison(item.quantity, compareWith.quantity)}">Cantitate: ${item.quantity}</p>
        <p class="${getClassForComparison(item.trust, compareWith.trust)}">Încrederea producătorului: ${item.trust}</p>
      `;
    }
  
    function getClassForComparison(value, compareWith, isPrice = false) {
      if (isPrice) {
        return parseFloat(value.substring(1)) < parseFloat(compareWith.substring(1)) ? 'better' : '';
      }
      return value > compareWith ? 'better' : '';
    }
  
    $('.close').on('click', function() {
      $('#compare-modal').hide();
      $('.delite-text').removeClass('selected');
      compareItems = [];
    });
  
    $(window).on('click', function(event) {
      if ($(event.target).is('#compare-modal')) {
        $('#compare-modal').hide();
        $('.delite-text').removeClass('selected');
        compareItems = [];
      }
    });
  });
  