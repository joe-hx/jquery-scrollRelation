# jQuery scrollRelation
A jQuery plugin for determining element visibility percentage
and/or viewport position from a page's scroll position.

This simple and powerful plugin can be used to create scroll-based
element changes or triggers. You can use it to create simple 
custom parallax interactions, scale properties, or even tween
animations.

## Quick Start
> Documentation, examples, and distribution are in the works.
For now, download the `scrollRelation.js` file and include 
it in your projects ***after jQuery***.
```
<script type="text/javascript" src="/path/to/scrollRelation.js"></script>
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
**below the viewport**
* A return value of `1` means the element is completely
**above the viewport**
```
$('#myElement').scrollRelation('top');
```
* The `top` option will return `0` when the top of the viewport and
the top of your element are aligned.
> **This is intended for header elements.** Using with mid-page 
elements results in unbalanced ranges
```
$('#myElement').scrollRelation('bottom');
```
* The `bottom` option will return `0` when the bottom of the viewport
and the bottom of your element are aligned.
> **This is intended for footer elements.** Using with mid-page 
elements results in unbalanced ranges

* You can **invert the return value** to work better with your
calculations by providing `true` for the second parameter:
```
$('#myElement').scrollRelation('middle', true);
```
## Roadmap
* Provide more examples
* Enhance documentation
* Create a distributed package (npm, cdn, etc)
