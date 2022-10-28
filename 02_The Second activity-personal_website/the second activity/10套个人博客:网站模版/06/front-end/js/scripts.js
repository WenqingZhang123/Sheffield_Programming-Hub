// JavaScript Document

$(function(){
	
	$('div.selector ul li a').click(function(){
		$('div.selector ul li a.active').removeClass('active');
		var pattern = $(this).attr('id');
		$('body').removeClass().addClass(pattern);
		$(this).addClass('active');
	});
	
	$('select').dropkick({ 
		change: function(value, label) {
			$('div.selector form').submit();
		}
	});
	
});