// JavaScript Document
var startcolor, endcolor, sudoslider;
$(function(){
	
	switch($('body').attr('id')){
		default: case 'blue': startcolor = '#FFFF00'; endcolor = '#E6E6E6'; break;
		case 'gray': startcolor = '#FFCC00'; endcolor = '#E6E6E6'; break;
		case 'red': startcolor = '#861D18'; endcolor = '#fff'; break;
		case 'orange': startcolor = '#FAD241'; endcolor = '#fff'; break;
		case 'green': startcolor = '#026873'; endcolor = '#fff'; break;
		case 'purple': startcolor = '#3C2C39'; endcolor = '#fff'; break;
		case 'pale-blue': startcolor = '#EE8C77'; endcolor = '#FFF5F1'; break;
	}
	
	$('a').hover(function(){
		$(this).stop().animate({color: startcolor}, 'fast');	
	},function(){
		$(this).stop().animate({color: endcolor}, 'fast');
	});
	
	$('#header div.social a').poshytip({
		className: 'tip-twitter',
		showTimeout: 1,
		alignTo: 'target',
		alignX: 'center',
		offsetY: 8,
		allowTipHover: false
	});
	
	$('.inputbox, textarea').each(function(index) {
		if($(this).val() != $(this).attr('title') && !$(this).val()) $(this).val($(this).attr('title'))
		$(this).focus(function(){ if($(this).val() == $(this).attr('title')) $(this).val(''); });
		$(this).blur(function(){ if($(this).val() == '') $(this).val($(this).attr('title')); });
	});
	
	sudoSlider = $('div.slider').sudoSlider({
		speed: 600,
		speedhistory: 600,
		updateBefore: true,
		history: true,
		numeric: false,
		prevNext: false,
		customLink: '#footer nav ul li a'
	});
	
	if(screen.width < 700)
		$('div.slider').swipe({
			swipe: function(event, direction, distance){ if(direction == 'left' || direction == 'right') sudoSlider.goToSlide((direction == 'left') ? 'next' : 'prev', 600);  },
			threshold: 30,
			allowPageScroll: 'vertical',
			click: function(){ return false; }
		});
	
	$('#portfolio a.video').fancybox({
		padding: 1,
		openEffect  : 'fade',
		closeEffect : 'fade',
		maxWidth: 800,
		maxHeight: 600,
		helpers : {
			media : {},
			overlay	: {
				opacity : 0.4
			}
		}
	});
	
	$('#portfolio a.photo').fancybox({
		padding: 1,
		openEffect  : 'fade',
		closeEffect : 'fade',
		helpers : {
    		title : {
    			type : 'over'
    		},
			overlay	: {
				opacity : 0.4
			}
    	}
	});
	
	$(window).on('debouncedresize', function(event){
		sudoSlider = $('div.slider').sudoSlider({
			speed: 600,
			speedhistory: 600,
			updateBefore: true,
			history: true,
			numeric: false,
			prevNext: false,
			customLink: '#footer nav ul li a'
		});
	});
	
	$('form.contact').submit(function(){
		var c = 0, email = 0;
		$('form.contact .required').each(function(i){
			if(!$(this).val() || $(this).val() == $(this).attr('title')) c++;
			if($(this).attr('name') == 'email' && $(this).val().indexOf('@', 0) == -1) email = 1; 
		});
		if(c > 0){
			jNotify('All fields are required', { autoHide: true, clickOverlay: true, TimeShown: 2000});
			return false;
		}else if(email > 0){
			jError('Enter a valid email', { autoHide: true, clickOverlay: true, TimeShown: 2000});
			return false;
		}else{
			$.post($(this).attr('action'), $(this).serialize(), function(data){
				if(data){
					jError('An error has occurred, try again please', { clickOverlay: true, autoHide: true, TimeShown: 2000});

				}else{	
					jSuccess('Your message was sent successfully',{
						clickOverlay: true,
						onClosed : function(){ 
							document.location.reload();
						}		  
					});	
				}
			});	
		}
		return false;
	});
	
	initialize();

});
function initialize() {
	var latlng = new google.maps.LatLng(28.259176,-81.436828);
	var myOptions = {
	  zoom: 16,
	  center: latlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
	var marker = new google.maps.Marker({
	  position: latlng,
	  animation: google.maps.Animation.DROP,
	  map: map
	});
}