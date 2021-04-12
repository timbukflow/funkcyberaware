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


$('#hamb').click(function() {
  $('.navigation').toggle();
  $(this).toggleClass('hambrotate');
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


$(function() {
var $allVideos = $("iframe[src^='https://player.vimeo.com'], iframe[src^='https://www.youtube.com'], object, embed"),
$fluidEl = $(".video_holder");
$allVideos.each(function() {
$(this)
.attr('data-aspectRatio', this.height / this.width)
.removeAttr('height')
.removeAttr('width');
});
$(window).resize(function() {
var newWidth = $fluidEl.width();
$allVideos.each(function() {
var $el = $(this);
$el
.width(newWidth)
.height(newWidth * $el.attr('data-aspectRatio'));
});
}).resize();
});



});
