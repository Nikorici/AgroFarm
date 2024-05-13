$(document).ready(function() {
    $('.decrement').click(function() {
      var quantity = parseInt($('.quantity').text());
      if (quantity > 1) {
        $('.quantity').text(quantity - 1);
      }
    });
  
    $('.increment').click(function() {
      var quantity = parseInt($('.quantity').text());
      $('.quantity').text(quantity + 1);
    });
  });

  