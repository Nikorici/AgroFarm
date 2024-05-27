$(document).ready(function() {
   

    $('#name').on('input', function() {
        $('.card-name').text($(this).val().toUpperCase());
    });

    $('#card-number').on('input', function() {
        $('.card-number').text($(this).val());
    });

    $('#expiry').on('input', function() {
        $('.card-expiry').text($(this).val());
    });
});
