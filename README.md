# jQuery scrollRelation
ScrollRelation is a very small jQuery plugin (<1kb) for determining
element visibility percentage and/or viewport position
from a page's scroll position.

This simple and powerful plugin can be used to create scroll-based
element changes or triggers. You can use it to create simple 
custom parallax interactions, scale properties, or even tween
animations.

## Quick Start
> Distribution is in the works.
For now, download the `jquery.scrollRelation.min.js` file and include 
it in your projects ***after jQuery***.
```html
<script type="text/javascript" src="/path/to/jquery.scrollRelation.min.js"></script>
```
## Examples
Check out the examples index at the 
[demonstration page](https://scrollrelation.demonstration.page).

## Documentation
The simplest usage is to call the function from a jQuery selector
with no additional parameters. This defaults to the `middle`
functionality described below.
```javascript
var screl = $('#myElement').scrollRelation();
```
### Return Values
You will get a **floating-point number** between `-1` and `1`.
* A return value of `0` means the element is **perfectly aligned**
with your target *(in this case, the middle of the viewport and
the middle of your element)*
* A return value of `-1` means the element is completely
**above the viewport**
* A return value of `1` means the element is completely
**below the viewport**
* The `contain` relation breaks the rules slightly, providing the
full value at *top and bottom alignment* (see option description below)
> The values reflect that lower numbers of pixels equal a higher 
position  in the document, complimenting many custom effect 
calculations.
### Parameters
* The `scrollRelation()` function takes a **single**, optional parameter
* Provide a `string` that will be used for the `relation` option
described below
* Provide an `object` to access the **advanced** options with defaults
outlined here:
```javascript
var screl = $('#myElement').scrollRelation({
    relation:'middle',
    invert:false,
    height:function(){
        return this.outerHeight();
    }
});
```
### Relation Options
```javascript
var screl = $('#myElement').scrollRelation('middle');
```
* The `middle` value *(or omitting the `relation` option)* will
return `0` when the middle of the viewport and the middle of
your element are aligned.
```javascript
var screl = $('#myElement').scrollRelation('top');
```
* The `top` option will return `0` when the top of the viewport and
the top of your element are aligned.
> Originally intended for tweening header elements or triggers
at the screen's top
```javascript
var screl = $('#myElement').scrollRelation('bottom');
```
* The `bottom` option will return `0` when the bottom of the viewport
and the bottom of your element are aligned.
> Originally intended for tweening footer elements or triggers
at the screen's bottom
```javascript
var screl = $('#myElement').scrollRelation('contain');
```
* The `contain` option provides a relation that combines both
`top` and `bottom`
* A `1` means the top of the element is below the top
of the viewport
* A value `-1` means the bottom of the element is above the
bottom of the viewport 
* The alignment meaning of `1` and `-1` depend on which is taller:
the element or the viewport
    * Elements **larger** than the viewport will be **top-aligned**
    at `1` and **bottom-aligned** at `-1`
    * Elements **smaller** than the viewport will be **bottom-aligned**
    at `1` and **top-aligned** at `-1`
> This unique relation is because elements larger than the
viewport will top-align first as they appear, but elements
smaller than the viewport will bottom-align first as they appear 
### Inversion
If the opposite return value is more beneficial to your
calculations, provide an `invert` property in the config object
like shown below:
```javascript
var screl = $('#myElement').scrollRelation({
    invert:true
});
``` 
### Element Height
By default, jQuery's `outerHeight()` function is used to determine
the height of your element. If this does not meet your needs,
simply supply your own function in the config object as 
demonstrated below:
```javascript
$('#myElement').scrollRelation({
    height:function(){
        return this.innerHeight();
    }
});
```
> In the above height function, `this` is the jQuery object created
by your selector. Return the number of pixels to be used in the
scrollRelation calculation.
## Roadmap
* Provide more examples
* Create a distributed package (npm, cdn, etc)
* Create more options, such as caching element size to further
improve performance