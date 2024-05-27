@@include("partials/header.js");
@@include("partials/image.js");
@@include("partials/number-element.js");
@@include("partials/stars.js");
@@include("partials/payment.js");


$(document).ready(function() {
    $(".search-buton").click(function() {
      $(".search-element").toggleClass("hidden"); // Toggle the hidden class of the search element
    });
  });


  $(document).ready(function() {
    $(".heart-button").click(function() {
      $("#heartPopup").toggleClass("show-popup");
      $(".overlay").toggleClass("show-popup");
    });

    $(".cart-button").click(function() {
      $("#cartPopup").toggleClass("show-popup");
      $(".overlay").toggleClass("show-popup");
    });

    $(".overlay, .close-button").click(function() {
      $(".popup").removeClass("show-popup");
      $(".overlay").removeClass("show-popup");
    });
  });
  

$(document).ready(function() {
  $('#descriptionButton').addClass('active'); // adăugăm clasa 'active' la primul buton
  $('#descriptionContent').removeClass('hidden');
});

$('.rating-button').click(function() {
  $('.rating-button').removeClass('active'); // eliminăm clasa 'active' de pe toate butoanele
  $(this).addClass('active'); // adăugăm clasa 'active' doar pe butonul apăsat
  $('.rating-content > div').addClass('hidden');
  const contentId = $(this).attr('id').replace('Button', 'Content');
  $(`#${contentId}`).removeClass('hidden');
});


var map = L.map('map').setView([47.4116, 28.3699], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);

        L.marker([47.4116, 28.3699]).addTo(map)
            .bindPopup('Product Location')
            .openPopup();


      //   document.addEventListener('DOMContentLoaded', function () {
      //     const tabs = document.querySelectorAll('.nav-link');
      //     const tabContents = document.querySelectorAll('.tab-pane');
      
      //     tabs.forEach(tab => {
      //         tab.addEventListener('click', () => {
      //             // Ascunde toate tab-urile
      //             tabContents.forEach(content => {
      //                 content.classList.remove('show', 'active');
      //             });
      
      //             // Afișează tab-ul corespunzător
      //             const tabId = tab.getAttribute('href').replace('#', '');
      //             const tabContent = document.getElementById(tabId);
      //             tabContent.classList.add('show', 'active');
      
      //             // Dezactivează toate tab-urile și activează tab-ul curent
      //             tabs.forEach(t => {
      //                 t.classList.remove('active');
      //             });
      //             tab.classList.add('active');
      
      //             // Afiseaza informatia corespunzatoare tab-ului selectat
      //             if (tabId === 'pills-login') {
      //                 console.log('Aici se afișează informațiile pentru login.');
      //             } else if (tabId === 'pills-register') {
      //                 console.log('Aici se afișează informațiile pentru înregistrare.');
      //             }
      //         });
      //     });
      // });
      