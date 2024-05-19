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

  


  $(document).ready(function () {
    $('#filter-button').on('click', function () {
      $('#filter-popup').css('display', 'block');
    });

    $('#close-filter-popup, #confirm-button').on('click', function () {
      $('#filter-popup').css('display', 'none');
    });

    $(window).on('click', function (event) {
      if ($(event.target).is('#filter-popup')) {
        $('#filter-popup').css('display', 'none');
      }
    });

    // Synchronize the number inputs and range sliders for price
    $('#price-min').on('input', function () {
      $('#price-range-min').val($(this).val());
    });

    $('#price-max').on('input', function () {
      $('#price-range-max').val($(this).val());
    });

    $('#price-range-min').on('input', function () {
      $('#price-min').val($(this).val());
    });

    $('#price-range-max').on('input', function () {
      $('#price-max').val($(this).val());
    });

    // Synchronize the number inputs and range sliders for volume
    $('#volume-min').on('input', function () {
      $('#volume-range-min').val($(this).val());
    });

    $('#volume-max').on('input', function () {
      $('#volume-range-max').val($(this).val());
    });

    $('#volume-range-min').on('input', function () {
      $('#volume-min').val($(this).val());
    });

    $('#volume-range-max').on('input', function () {
      $('#volume-max').val($(this).val());
    });
  });