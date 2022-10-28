$(document).ready(function(){
	//Flickr Integration
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=36334875@N04&lang=en-us&format=json&jsoncallback=?", function(data){
		$.each(data.items, function(i,item){
			if(i<=5){ // <Ð²Ð‚â€ change this number to display more or less images
				$("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo(".FlickrImages ul")
				.wrap("<li><a href='" + item.link + "' target='_blank' title='Flickr'></a></li>");
			}
		});
    });	
	
	//Twitter Setup
	$(".tweet_block").tweet({
	  join_text: "auto",
	  username: "envato",
	  avatar_size: 0,
	  count: 3,
	  auto_join_text_default: "",
	  auto_join_text_ed: "",
	  auto_join_text_ing: "",
	  auto_join_text_reply: "",
	  auto_join_text_url: "",
	  loading_text: "loading tweets..."
	});	
});