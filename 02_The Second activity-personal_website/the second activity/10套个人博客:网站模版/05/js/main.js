$(window).load(function() {
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	if (agentID) {
		set_filter_width = 0;
	    $('.optionset').fadeOut(1);
		$('.optionset').find('li').each(function() {
			set_filter_width = set_filter_width + $(this).width() + 2;
		});
		setTimeout("$('.optionset').width(set_filter_width)", 600);
		setTimeout("$('#options').width(set_filter_width)", 600);
		setTimeout("$('#options').FingerScroll()", 700);
		setTimeout("$('.optionset').fadeIn(300)", 800);
	}
});

$(document).ready(function() {

	$.fn.clearDefault = function() {
		return this.each(function() {
			var default_value = $(this).val();
			$(this).focus(function() {
				if ($(this).val() == default_value)
					$(this).val("");
			});
			$(this).blur(function() {
				if ($(this).val() == "")
					$(this).val(default_value);
			});
		});
	};

	var delBgImg = $('.camera_wrap').parent();

	if (delBgImg.hasClass('fullScreenSlideshowNav')) {
		$('body').addClass('noBacground');
	}

	$(".preloader_container").preloader();
	$(".preloader").preloader();

	$('.menu li a').each(function(index) {
		var thisTitle = $(this).attr('title');
		if (thisTitle !== undefined) {
			$(this).append('<span>' + thisTitle + '</span>');
		}
	});

	$('#slidecaption').delay(5000).animate({
		opacity : 0.9
	}, 1000);

	$('.view-icon').prettyPhoto();

	$('#myTab a:first').tab('show');

	$('.backtotop').click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 500);
		return false;
	});

	$('.da-thumbs > li').hoverdir();
	$('.portfolio_block > .view').hoverdir();

	$('textarea').clearDefault();
	$('input[type="text"]').clearDefault();

	$('.show_map a').click(function() {
		var oldText = $(this).text();

		$(this).toggleClass('hide_map');

		if (oldText == 'hide map') {
			newText = 'show map'
		}
		if (oldText == 'show map') {
			newText = 'hide map'
		}
		$(this).text(newText);

		$('.map_container').slideToggle(400);
		return false;
	});

	$('.social a').tooltip();
	$('.social_responsive a').tooltip();

	$('.social_responsive_toggle').click(function() {
		my_span = $(this).find('span');
		if (my_span.text() == "+") {
			my_span.text('-');
		} else {
			my_span.text('+');
		}
		$('.social_responsive').slideToggle(600);
	});

	$('.accordeon').accordion({
		canToggle : true,
		canOpenMultiple : false
	});

	$(".logo-gray").hover(function() {
		$(this).stop().animate({
			"opacity" : "0"
		});
	}, function() {
		$(this).stop().animate({
			"opacity" : "1"
		}, "slow");
	});

	$('#tray-button').click(function() {
		$(this).toggleClass('show');
	});

	/* CREATE RESPONSIVE MENU */
	$("#responsive_menu li").click(function() {
		$(this).toggleClass('active');
		$(".responsive-menu-items").slideToggle("fast");
		$('.fullScreenSlideshowNav').toggle();
		$('.supersizecaption').toggle();
	});

	$(".responsive-menu-items").html("<ul class='resp-menu'></ul>");

	$('.menu-main #main-menu > li').each(function(index) {
		var thisli = $(this).clone();
		$(".resp-menu").append(thisli);
		$('.responsive-menu-items li').find('span').remove();
	});
	$('.resp-menu .sub-menu li .sub-menu a').each(function(index) {
		var nowtext = $(this).text();
		var newtext = "- " + nowtext;
		$(this).text(newtext);
	});

	$('.menu').superfish();

	$('.carouselslider-wrap .carouselslider').jcarousel({
		scroll : 1
	});

	var $container = $('.portfolio_block');
	$('.load-more a').click(function() {
		var count = $(this).attr('data-count');
		var $newEls = $(fakeElement.getGroup(count));
		$container.isotope('insert', $newEls, function() {
			$container.isotope('reLayout');
		});
		return false;
	});

	$('.btn-back').click(function() {
		parent.history.back();
		return false;
	});

	$('#flickrimages a').append('<div class="flickr-mask"></div>');

	$('.pauseArrow').click(function() {
		$(this).toggleClass('pause');
	});

	$('#submit').click(function() {
		var par = $(this).parents("#contact-form");
		var name = par.find("#name").val();
		var email = par.find("#email2").val();
		var message = par.find("#comment").val();

		$.ajax({
			url : "script/mail.php",
			type : "POST",
			data : {
				name : name,
				email : email,
				message : message
			},
			success : function(data) {
				$('.ajaxanswer').hide().empty().html(data).show("fast");
			}
		});
	});

	$('#oneByOne1').oneByOne({
		className : 'oneByOne1',
		easeType : 'random',
		slideShow : true,
		width : 'auto',
		height : 'auto',
		enableDrag : false,
	});

	$('#oneByOne2').oneByOne({
		className : 'oneByOne2',
		easeType : 'fadeInUp',
		slideShow : true,
		width : 'auto',
		height : 'auto',
		slideShowDelay : 6000
	});

	$('[title]').removeAttr('title');

});

jQuery.fn.FingerScroll = function() {
	var scrollStartPos = 0;
	max_scroll = -1 * ($(this).width() - $('.filter_navigation').width());
	$(this).css('right', max_scroll + 'px');
	$(this).bind('touchstart', function(event) {
		var e = event.originalEvent;
		scrollStartPos = parseInt($(this).css('right')) + e.touches[0].pageX;
	});
	$(this).bind('touchmove', function(event) {
		var e = event.originalEvent;
		$(this).css('right', (scrollStartPos - e.touches[0].pageX) + 'px');
		if (parseInt($(this).css('right')) > 0) {
			$(this).css('right', '0px');
		}
		if (parseInt($(this).css('right')) < max_scroll) {
			$(this).css('right', max_scroll + 'px');
		}
		e.preventDefault();
	});
	return this;
};

$(window).scroll(function() {
	if ($(this).scrollTop() >= 160) {// could and should! be changed
		$('.backtotop').animate({
			'bottom' : '0px'
		}, 1);
	} else {
		$('.backtotop').animate({
			'bottom' : '-53px'
		}, 1, function() {
		});
	}
});
