var fakeElement = {};
fakeElement.constanants = 'b c d f g k l m n p q r s t v x z'.split(' ');
fakeElement.vowels = 'a e i o u y'.split(' ');
fakeElement.categories = 'portraits landscapes fashion advertising'.split(' ');
fakeElement.suffices = 'on ium ogen'.split(' ');
fakeElement.titles = 'Aliquam tempor lacus sodales, Fermentum commodo, Ante Elementum'.split(',');

fakeElement.texts1 = 'Phasellus eu tincidunt quam. Etiam tortor massa, mollis at ultricies eu, blandit eget libero. Phasellus eget dolor diam, at aliquet mi. Donec quis lectus lectus. Duis ullamcorper, erat sit amet lobortis lobortis, turpis mauris dapibus ante, pharetra euismod diam ipsum lorem ipsum vestibulum egestas lorem. '.split('..');
fakeElement.texts2 = 'Cursus sodales mattis. Morbi eros augue, viverra nec blandit eget lore vitae vestibul, hendrerit eget nisi. Phasellus vestibulum tortor a tortor vehicula eget scelerisque nibh aliquam. Duis eget adipiscing dolor. Sagittis lacus sodales turpis dapibus nec pretium justo rhoncus. Nunc mauris ceget sodales libero at tortor varius vestibulum. Fusce felis tellus, hendrerit eu tincidunt. Eget, pellentesque et nibh. Fusce tempor scelerisque mattis. Sed eu sem justo, at tempus odio. Maecenas iaculis enim eget velit lorems aliquam varius. Suspendisse commodo augue at dolor scelerisque feugiat. Nulla facilisi. Aliquam quis quam mi. Cras nibh dui, cursus vel iaculis eget, fermentum vel urna. Nulla porttitor faucibus metus, vitae pellentesque nisl molestie sed. Etiam sit amet eleifend magna. Donec hendrerit laoreet dui, quis molestie felis porta eu. Sed augue ante, interdum.'.split('..');

fakeElement.images = 'img1 img2 img3 img4 img5 img6 img7 img8 img9 img10 img11 img12 img13 img14 img15 img16'.split(' ');
fakeElement.getRandom = function(property) {
	var values = fakeElement[property];
	return values[ Math.floor(Math.random() * values.length)];
};
fakeElement.create = function(count) {
	var category = fakeElement.getRandom('categories');
	image = fakeElement.getRandom('images');
	title = fakeElement.getRandom('titles');
	text1 = fakeElement.getRandom('texts1');
	text2 = fakeElement.getRandom('texts2');
	
	category = fakeElement.getRandom('categories');
	className = 'element ' + category;
	
	if (count == '1') {
		return '<div data-category="' + category + '" class="' + className + '"><div class="view view-third"><img src="img/portfolio/portfolio-'+ image +'.jpg"><div class="mask"><h3>'+ title +'</h3><p>'+ text2 +'<a href="#">Read more... </a><p></div></div></div>';
	} else {
		return '<li data-category="' + category + '" class="' + category + ' element"><div class="view view-third preloader"><img src="img/portfolio/portfolio-'+ image +'.jpg"><div><span class="item-border-top"><span class="triangle-down"></span></span><h5>'+ title +'</h5><p>'+ text1 +'</p><p class="view-block"><a class="view-icon icon" rel="prettyPhoto[gallery3]" href="img/portfolio/portfolio-'+ image +'.jpg">l</a><span class="dividing">|</span><a class="read-more" href="#">Read more... </a></p><div class="item-border-down"></div></div></div></div>';
	}
	
	
	
//	return '<div class="' + className + '" data-category="' + category + '"><p class="number">' + number + '</p><h3 class="symbol">' + symbol + '</h3><h2 class="name">' + name + '</h2><p class="weight">' + weight + '</p></div>';
};
fakeElement.getGroup = function(count) {
	var i = Math.ceil(count), newEls = '';
	while (i--) {
		newEls += fakeElement.create(count);
	}
	return newEls;
};

