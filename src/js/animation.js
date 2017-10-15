//Js functions go here
var fadeTime = 300;

function close() {
  $('.modal').fadeOut(fadeTime);
  $('body').removeClass('no-scroll');
  setTimeout(function() {
    $('.modal').scrollTop(0);
  }, fadeTime - 50);
}
$('.close').click(function(e) {
  close();
});

$('.modal').click(function() {
  close();
});

$('.modal-content').click(function(e) {
  e.stopPropagation();
});

$('#open').click(function(e) {
  e.preventDefault();
  $('.modal').fadeIn(fadeTime);
  $('body').addClass('no-scroll');
});
