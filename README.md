# jQuery scrollRelation
A jQuery plugin for determining element visibility percentage
and/or viewport position from a page's scroll position.

This simple and powerful plugin can be used to create scroll-based
element changes or triggers. You can use it to create simple 
custom parallax interactions, scale properties, or even tween
animations.

## Quick Start
> Distribution is in the works.
For now, download the `jquery.scrollRelation.min.js` file and include 
it in your projects ***after jQuery***.
```
<script type="text/javascript" src="/path/to/jquery.scrollRelation.min.js"></script>
```
## Examples
Check out the examples index at the 
[demonstration page](https://scrollrelation.demonstration.page).

## Documentation
The simplest usage is to call the function from a jQuery selector
with no additional parameters. This defaults to the `middle`
functionality described below.
```
$('#myElement').scrollRelation();
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
> The values reflect that lower numbers of pixels equal a higher 
position  in the document, complimenting many custom effect 
calculations.
### Inversion
If the opposite return value is more beneficial to your
calculations, provide an `invert` property in the config object
like shown below:
```
$('#myElement').scrollRelation({
    invert:true
});
``` 
### Relation Options
```
$('#myElement').scrollRelation({
    relation:'middle'
});
```
* The `middle` value *(or omitting the `relation` option)* will
return `0` when the middle of the viewport and the middle of
your element are aligned.
```
$('#myElement').scrollRelation({
    relation:'top'
});
```
* The `top` option will return `0` when the top of the viewport and
the top of your element are aligned.
> Originally intended for tweening header elements or triggers
at the screen's top
```
$('#myElement').scrollRelation({
    relation:'bottom'
});
```
* The `bottom` option will return `0` when the bottom of the viewport
and the bottom of your element are aligned.
> Originally intended for tweening footer elements or triggers
at the screen's bottom
### Element Height
By default, jQuery's `outerHeight()` function is used to determine
the height of your element. If this does not meet your needs,
simply supply your own function in the config object as 
demonstrated below:
```
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