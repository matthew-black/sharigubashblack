$(document).ready(function() {

  // Variables
  var $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      navOffsetTop = $nav.offset().top

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $('a[href^="#"]').on('click', smoothScroll)
  }

  function smoothScroll(e) {
    e.preventDefault();
    console.log(this.hash)
    $(document).off("scroll");
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 40
    }, 300, 'swing', function () {
      window.location.hash = '#'+target;
      // this should add the #[location] to url,
      // but it's overriding the -40 offset. hmm.
      // TODO
      $(document).on("scroll", onScroll);
    });
  }

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  init();

});