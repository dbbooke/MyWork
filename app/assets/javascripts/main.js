(function ($) {
    "use strict";
	
	/*----------------------------
    Responsive menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ 
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 450) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});*/
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.mainmenu li a , .slicknav_menu li a ').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
			$(".mainmenu li a").removeClass("active");
			$(this).addClass("active");
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.slider-area').owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		dots: false,
		autoplayTimeout: 5000,
		items: 1,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	}); 
	$('.testimonial-slider').owlCarousel({
		loop: true,
		nav: false,
		autoplay: true,
		dots: true,
		autoplayTimeout: 5000,
		items: 1,
	}); 
	
	/*----------------------------
    START - Circlechart animation
    ------------------------------ */
	$('.demo-1,.demo-2,.demo-3,.demo-4').percentcircle({
		animate : true,
		bgColor: '#fff',
		fillColor: '#00c2b1',
		percentSize: '18px',
	});
	$('.ab').css({
		'width': '100%',
		'height': '250px',
		'padding': '15px',
		'background':'#fff'
	});
	$('.cir').css({
		'width': '100%',
		'height': '100%',
		'top':'0',
		'left':'0',
		'background':'#ebebeb'
	});		
	$('.perc').css({
		'display': 'none'
	});
    
    /*----------------------------
    START - Isotope Activation
    ------------------------------ */
    jQuery(".product-item").isotope();
    $(".portfolio-menu li").on("click", function(){
      $(".portfolio-menu li").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr('data-filter');
      $(".product-item").isotope({
        filter: selector
      })
    });
	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 500
	});	
	
	/*----------------------------
    START - Pre loader
    ------------------------------ */
	jQuery(window).load(function(){
		jQuery(".pre-loader").fadeOut();
	});

})(jQuery);
