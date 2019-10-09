/*
version 2.1.0
Copyright (c) 2019 joe-hx
https://github.com/joe-hx/jquery-scrollRelation
MIT License
*/
(function($){
	$.fn.scrollRelation = function(config){
		var configType = typeof config;
		if(configType == 'string')
			config = {relation:config};
		else if(configType != 'object')
			config = {};
		
		//always get these
		var thisHeight = config.height ? config.height.call(this) : this.outerHeight();
		var thisPositionTop = this.offset().top;
		
		if(config.relation=='top'){
			var targetDifference = screldat.viewPositionTop - thisPositionTop;
			if(targetDifference > 0){
				var multiplierTillGone = targetDifference / thisHeight;
			} else {
				//handle being below the target - a header element shouldn't hit this
				var multiplierTillGone = targetDifference / screldat.viewHeight;
			}
		} else if(config.relation=='bottom'){
			var thisPositionBottom = thisPositionTop + thisHeight;
			var targetDifference = screldat.viewPositionBottom - thisPositionBottom;
			if(targetDifference > 0){
				//handle being above the target - a footer element shouldn't hit this
				var multiplierTillGone = targetDifference / screldat.viewHeight;
			} else {
				var multiplierTillGone = targetDifference / thisHeight;
			}
		} else {
			var thisHeightHalf = thisHeight / 2;
			var thisPositionMiddle = thisPositionTop + thisHeightHalf;
			var targetDifference = screldat.viewPositionMiddle - thisPositionMiddle;
			if(config.relation=='contain')
				var multiplierTillGone = targetDifference / Math.abs(thisHeightHalf - screldat.viewHeightHalf);
			else
				var multiplierTillGone = targetDifference / (screldat.viewHeightHalf + thisHeightHalf);
		}
		if(multiplierTillGone > 1) multiplierTillGone = 1;
		if(multiplierTillGone < -1) multiplierTillGone = -1;
		//up to now -1 is below and 1 is above, but invert by default for px on page
		if(!config.invert) multiplierTillGone *= -1;
		return multiplierTillGone;
	}
	
	//calculate viewport size data
	function screlsize(){
		screldat.viewHeight = screldat.window.outerHeight();
		screldat.viewHeightHalf = screldat.viewHeight / 2;
	}
	
	//remember viewport scroll position
	function screlpos(){
		screldat.viewPositionTop = screldat.window.scrollTop();
		screldat.viewPositionMiddle = screldat.viewPositionTop + screldat.viewHeightHalf;
		screldat.viewPositionBottom = screldat.viewPositionTop + screldat.viewHeight;
	}
	
	//store viewport data
	var screldat = {window:$(window)};
	
	//only do viewport calcs now, onload & on resize event
	screldat.window.on('resize', screlsize);
	screlsize();
	$(screlsize);
	
	//only get viewport scroll position now, onload & once per scroll event
	screldat.window.on('scroll', screlpos);
	screlpos();
	$(screlpos);
})(jQuery);
