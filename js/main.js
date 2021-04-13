$(document).ready(function(){

$('.load').delay(1000).fadeOut();


$('#home').bind('inview', function (event, visible) {
  if (visible == true) {
    $('#n_home').addClass('inview');
  } else {
    $('#n_home').removeClass('inview');
  }
});
$('#basic').bind('inview', function (event, visible) {
  if (visible == true) {
    $('#n_basic').addClass('inview');
  } else {
    $('#n_basic').removeClass('inview');
  }
});
$('#advanced').bind('inview', function (event, visible) {
  if (visible == true) {
    $('#n_advanced').addClass('inview');
  } else {
    $('#n_advanced').removeClass('inview');
  }
});
$('#attack').bind('inview', function (event, visible) {
  if (visible == true) {
    $('#n_attack').addClass('inview');
  } else {
    $('#n_attack').removeClass('inview');
  }
});
$('#abonnement').bind('inview', function (event, visible) {
  if (visible == true) {
    $('#n_abonnement').addClass('inview');
  } else {
    $('#n_abonnement').removeClass('inview');
  }
});
$('#showcase').bind('inview', function (event, visible) {
  if (visible == true) {
    $('#n_showcase').addClass('inview');
  } else {
    $('#n_showcase').removeClass('inview');
  }
});
$('#sicherheit').bind('inview', function (event, visible) {
  if (visible == true) {
    $('#n_sicherheit').addClass('inview');
  } else {
    $('#n_sicherheit').removeClass('inview');
  }
});
$('#kundenfokus').bind('inview', function (event, visible) {
  if (visible == true) {
    $('#n_kundenfokus').addClass('inview');
  } else {
    $('#n_kundenfokus').removeClass('inview');
  }
});

$('#navburger').click(function() {
  $(this).stop(true).toggleClass('open');
  $('.navigation').toggle();
  $('body').removeClass('noscroll');
  $('.dropdown').slideUp(800);
  $('.navigation').removeClass('navigation_toggled');
});

$('span.navpoint').click(function() {
  $('.navigation').toggle();
  $('#navburger').removeClass('open');
});

$('.scroll').click(function() {
  var superscroll = $(this).attr('data-scroll');
  $('html,body').animate({scrollTop:$(superscroll).offset().top}, 1000, 'easeInOutExpo');
  $('.navigation').removeClass('navigation_toggled');
  $('body').removeClass('noscroll');
  $('.dropdown').slideUp();
  $('#kontakt').html("Kontakt");
});

$('#kontakt').click(function() {
	$('.dropdown').slideToggle(800);
	$(this).html() == "Schliessen" ? $(this).html('Kontakt') : $(this).html('Schliessen');
	$('body').toggleClass('noscroll');
	$('.navigation').toggleClass('navigation_toggled');
});


$('.fader').bind('inview', function (event, visible) {
  if (visible == true) {
    $(this).addClass('inview');
  } else {
    $(this).removeClass('inview');
  }
});

});
