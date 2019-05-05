/*
version 1.0.0

MIT License

Copyright (c) 2019 joe-hx
https://github.com/joe-hx/jquery-scrollRelation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
if(jQuery){
	jQuery.fn.extend({
		scrollRelation:function(viewTarget, invertResponse){
			var $window = jQuery(window);
			var viewHeight = $window.height();
			var viewPositionTop = $window.scrollTop();
			var viewPositionMiddle = viewPositionTop + (viewHeight / 2);
			var viewPositionBottom = viewPositionTop + viewHeight;
			
			var thisHeight = this.outerHeight();
			var thisPositionTop = this.position().top;
			var thisPositionMiddle = thisPositionTop + (thisHeight / 2);
			var thisPositionBottom = thisPositionTop + thisHeight;
			
			switch(viewTarget){
				case 'top':
					var targetDifference = viewPositionTop - thisPositionTop;
					if(targetDifference > 0)
						var multiplierTillGone = targetDifference / thisHeight;
					else
					//handle being below the target - a header element shouldn't hit this
						var multiplierTillGone = targetDifference / viewHeight;
					break;
				case 'bottom':
					var targetDifference = viewPositionBottom - thisPositionBottom;
					if(targetDifference > 0)
					//handle being above the target - a footer element shouldn't hit this
						var multiplierTillGone = targetDifference / viewHeight;
					else
						var multiplierTillGone = targetDifference / thisHeight;
					break;
				default:
					var targetDifference = viewPositionMiddle - thisPositionMiddle;
					var multiplierTillGone = targetDifference / ((viewHeight / 2) + (thisHeight / 2));
			}
			if(multiplierTillGone > 1) multiplierTillGone = 1;
			if(multiplierTillGone < -1) multiplierTillGone = -1;
			if(invertResponse) multiplierTillGone *= -1;
			return multiplierTillGone;
		}
	});
}
