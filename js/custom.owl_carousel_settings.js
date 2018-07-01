$(document).ready(function(){
	var $owlCarousel = $('.owl-carousel');
    $owlCarousel.owlCarousel({
      loop: false,
      dots: true,
      margin: 40,
      responsive: {
        0: {
          items: 1,
          slideBy: 2
        },
        600: {
          items: 3,
          slideBy: 4
        },
        1000: {
          items: 4,
          slideBy: 6
        }
      }
    });

	var sleepTimeOut = 3000;
	var transitionSpeedTime = 1000;
	var direction = 'next';
	var owlTimer;

	moveToNextSlide(transitionSpeedTime, sleepTimeOut);

	$owlCarousel.on('translated.owl.carousel', function () {
	  moveToNextSlide(transitionSpeedTime, sleepTimeOut);
	});

	$owlCarousel.on('mouseover', function () {
	  window.clearTimeout(owlTimer);
	});

	$owlCarousel.on('mouseout', function () {
	  moveToNextSlide(transitionSpeedTime, sleepTimeOut);
	});

	function moveToNextSlide(autoplayTimeout, autoplaySpeed) {

	  window.clearTimeout(owlTimer);
	  owlTimer = window.setTimeout(function () {

	    setSlideDirection();

	    $owlCarousel.trigger(direction + '.owl.carousel', [autoplayTimeout]);
	  }, autoplaySpeed);
	}

	function setSlideDirection() {
	  if ($('.owl-stage > .owl-item').first().is('.active')) {
	    direction = 'next';
	  }
	  if ($('.owl-stage > .owl-item').last().is('.active')) {
	    direction = 'prev';
	  }
	}
});