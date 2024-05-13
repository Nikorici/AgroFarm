$(document).ready(function() {
    $('.set-image img').click(function() {
      // Salvăm sursa imaginii apăsate
      var clickedImgSrc = $(this).attr('src');
      // Salvăm sursa imaginii principale
      var principalImgSrc = $('.principal-image').attr('src');
      // Schimbăm sursa imaginii principale cu cea apăsată
      $('.principal-image').attr('src', clickedImgSrc);
      // Schimbăm sursa imaginii apăsate cu cea principală
      $(this).attr('src', principalImgSrc);
    });
  });