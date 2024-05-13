$(document).ready(function() {
    const $burgerIcon = $('.burger-icon');
    const $popup = $('<div class="popup"></div>');
  
    $('body').append($popup);
  
    $burgerIcon.on('click', function() {
      $(this).toggleClass('active');
      $popup.toggleClass('active');
    });
  
    $popup.on('click', function() {
      $burgerIcon.removeClass('active');
      $(this).removeClass('active');
    });
  });
   

  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Ascunde toate tab-urile
            tabContents.forEach(content => {
                content.classList.remove('show', 'active');
            });

            // Afișează tab-ul corespunzător
            const tabId = tab.getAttribute('href').replace('#', '');
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add('show', 'active');

            // Dezactivează toate tab-urile și activează tab-ul curent
            tabs.forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');

            // Afiseaza informatia corespunzatoare tab-ului selectat
            if (tabId === 'pills-login') {
                console.log('Aici se afișează informațiile pentru login.');
            } else if (tabId === 'pills-register') {
                console.log('Aici se afișează informațiile pentru înregistrare.');
            }
        });
    });
});
