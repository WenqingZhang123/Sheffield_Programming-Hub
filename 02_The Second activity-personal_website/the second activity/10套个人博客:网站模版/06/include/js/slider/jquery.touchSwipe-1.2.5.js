/*
 * touchSwipe - jQuery Plugin
 * http://plugins.jquery.com/project/touchSwipe
 * http://labs.skinkers.com/touchSwipe/
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * $version: 1.2.5
 * This jQuery plugin will only run on devices running Mobile Webkit based browsers (iOS 2.0+, android 2.2+)
 */
(function(s){s.fn.swipe=function(d){if(!this)return false;var b={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"},p="left",t="right",u="up",v="down",w="none",x="horizontal",y="vertical",G="auto",H="start",z="move",q="end",k="cancel",e="ontouchstart"in window,I=e?"touchstart":"mousedown",A=e?"touchmove":"mousemove",B=e?"touchend":"mouseup",c="start";if(d.allowPageScroll==void 0&&(d.swipe!=
void 0||d.swipeStatus!=void 0))d.allowPageScroll=w;d&&s.extend(b,d);return this.each(function(){var g,d,n,o;function J(a){var h=e?a.touches[0]:a;c=H;if(e)i=a.touches.length;distance=0;direction=null;i==b.fingers||!e?(n=g=h.pageX,o=d=h.pageY,b.swipeStatus&&l(a,c)):m(a);r.addEventListener(A,C,false);r.addEventListener(B,D,false)}function C(a){if(!(c==q||c==k)){var h=e?a.touches[0]:a;g=h.pageX;d=h.pageY;direction=E();if(e)i=a.touches.length;c=z;h=direction;if(b.allowPageScroll==w)a.preventDefault();
else{var f=b.allowPageScroll==G;switch(h){case p:(b.swipeLeft&&f||!f&&b.allowPageScroll!=x)&&a.preventDefault();break;case t:(b.swipeRight&&f||!f&&b.allowPageScroll!=x)&&a.preventDefault();break;case u:(b.swipeUp&&f||!f&&b.allowPageScroll!=y)&&a.preventDefault();break;case v:(b.swipeDown&&f||!f&&b.allowPageScroll!=y)&&a.preventDefault()}}i==b.fingers||!e?(distance=F(),b.swipeStatus&&l(a,c,direction,distance),!b.triggerOnTouchEnd&&distance>=b.threshold&&(c=q,l(a,c),m(a))):(c=k,l(a,c),m(a))}}function D(a){a.preventDefault();
distance=F();direction=E();b.triggerOnTouchEnd?(c=q,(i==b.fingers||!e)&&g!=0?distance>=b.threshold||(c=k):c=k,l(a,c),m(a)):c==z&&(c=k,l(a,c),m(a));r.removeEventListener(A,C,false);r.removeEventListener(B,D,false)}function m(){d=g=o=n=i=0}function l(a,c){b.swipeStatus&&b.swipeStatus.call(j,a,c,direction||null,distance||0);c==k&&b.click&&(i==1||!e)&&(isNaN(distance)||distance==0)&&b.click.call(j,a,a.target);if(c==q)switch(b.swipe&&b.swipe.call(j,a,direction,distance),direction){case p:b.swipeLeft&&
b.swipeLeft.call(j,a,direction,distance);break;case t:b.swipeRight&&b.swipeRight.call(j,a,direction,distance);break;case u:b.swipeUp&&b.swipeUp.call(j,a,direction,distance);break;case v:b.swipeDown&&b.swipeDown.call(j,a,direction,distance)}}function F(){return Math.round(Math.sqrt(Math.pow(g-n,2)+Math.pow(d-o,2)))}function E(){var a;a=Math.atan2(d-o,n-g);a=Math.round(a*180/Math.PI);a<0&&(a=360-Math.abs(a));return a<=45&&a>=0?p:a<=360&&a>=315?p:a>=135&&a<=225?t:a>45&&a<135?v:u}var r=this,j=s(this),
i=0;n=0;o=0;g=0;d=0;try{this.addEventListener(I,J,false),this.addEventListener("touchcancel",m)}catch(K){}})}})(jQuery);