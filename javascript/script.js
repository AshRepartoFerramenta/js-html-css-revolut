//Reset Jquery
$(document).ready(
    //inserisco la funzione di apertura tramite comando cursore del mouse
  function() {
    $('.opening_link').mouseenter(
        // inserisco la funzione di attivazione del menù a scorrimento
      function() {
      $(this).children('.dropdown').addClass('active');
      }
    );
    // eseguo il comando di quando il cursore lascia l elemento
    $('.opening_link').mouseleave(
        //inserisco la funzione corrispondente che disattiva il comando sull elemento
      function() {
      $(this).children('.dropdown').removeClass('active');
      }
    );
  }
);
