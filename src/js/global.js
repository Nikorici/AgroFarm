$(document).ready(function() {
    const $burgerIcon = $('.burger-icon');
    const $popup = $('<div class="popup"></div>');
  
    $('body').append($popup);
  
    $burgerIcon.on('click', function() {
      $(this).toggleClass('active');
      $popup.toggleClass('active');
  
      if ($(this).hasClass('active')) {
        $(this).html('<span></span><span></span>');
        $popup.css('display', 'block');
      } else {
        $(this).html('<span></span><span></span><span></span>');
        $popup.css('display', 'none');
      }
    });
  
    $popup.on('click', function() {
      $burgerIcon.removeClass('active');
      $(this).removeClass('active').css('display', 'none');
    });
  });
  


