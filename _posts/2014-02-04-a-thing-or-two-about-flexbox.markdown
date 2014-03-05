---
layout: post
title: A thing or two about CSS Flexbox
tags: CSS layout
---
The Flexible Box Layout Module, or Flexbox, is a new layout mode available to designers and possibly one of the best things to happen to CSS. Flexbox provides a way to layout a page in a predictable way when designing for various screen sizes. In essence it does not use floats, nor do the flex container's margins collapse with the margins of its contents.

When a container has the property of ``display: flex`` all of it's children naturally become flex items. This allows child elements to be laid out in any direction and have flexible dimensions to adapt to the display space, no matter the screen size. Also one more important thing, Flexbox is source-independent, allowing you to write markup in the most accessible way while letting Flexbox take care of the visual rendering. Finally a clean, hack-free method to achieve perfect layout and positioning all with CSS!

### FlexBox's main properties:
<ul>

	<li class="snippet"><code>display: flex | inline-flex</code>
		<ul>
			<li>This is applied to the container and establishes a flex context for all the container's direct children</li>
		</ul>
	</li>

	<li class="snippet"><code>flex-direction: row | row-reverse | column | column-reverse</code>
		<ul>
			<li>Sets the main-axis in the container, which defines the direction items are aligned in the container. row is left to right, and the default. column is top to bottom. Theses values are dependent on the writing-mode property.</li>
		</ul>
	</li>

	<li class="snippet"><code>flex-wrap: nowrap | wrap | wrap-reverse</code>
		<ul>
			<li>Sets whether the flex container is single-line or multi-line. nowrap is single-line and wrap is multi-line. These values are also dependent on the writing-mode property.</li>
		</ul>
	</li>

	<li class="snippet"><code>flex-flow: {flex-direction} {flex-wrap}</code>
		<ul>
			<li>This is simply a shorthand for the last two properties, flex-direction and flex-wrap</li>
		</ul>
	</li>

	<li class="snippet"><code>justify-content: flex-start | flex-end | center | space-between | space-around</code>
		<ul>
			<li>Sets the alignment along the main axis and gives control of how extra space is distributed. flex-start: default and items are packed to the top. flex-end: opposite of flex-start. center: items will be centered along the main-axis. space-between: items are evenly distributed along the line, first item is at the top and last item is at bottom. space-around: items are evenly distributed but with equal space around all of them.</li>
		</ul>
	</li>
	
	<li class="snippet"><code>align-items: flex-start | flex-end | center | baseline | stretch</code>
		<ul>
			<li>Same as justify-content, but for the cross axis (line perpendicular to the main axis). baseline: items will be aligned such as their baselines align. stretch: the default, stretch to fill the container.</li>
		</ul>
	</li>

	<li class="snippet"><code>align-content: flex-start | flex-end | center | space-between | space-around | stretch</code>
		<ul>
			<li>Adjust the containers lines within when the cross axis has extra space. Values are similar to justify-content and align-items</li>
		</ul>
	</li>

	<li class="snippet"><code>order: {a number}</code>
		<ul>
			<li>This is that source-independent stuff! By default items are based on source order, but passing this property along with an integer value inside a flex item will change its order on the page.</li>
		</ul>
	</li>
	
	<li class="snippet"><code>flex-grow: {a number}</code>
		<ul>
			<li>Specifies how much space a flex item should expand in proportion to other flex items. Default: 0</li>
		</ul>
	</li>

	<li class="snippet"><code>flex-shrink: {a number}</code>
		<ul>
			<li>Specifies the ability for a flex item to shrink. Default: 1</li>
		</ul>
	</li>

	<li class="snippet"><code>flex-basis: {a number}</code>
		<ul>
			<li>Specifies the default size of an element before space is distributed. Default: auto</li>
		</ul>
	</li>

	<li class="snippet"><code>align-self: auto | flex-start | flex-end | baseline | stretch</code>
		<ul>
			<li>Allows you to override values for individual flex items. Values are the same as specified for the align-items property.</li>
		</ul>
	</li>

</ul>

As of right now to use Flexbox in production requires a good bit of vendor prefixes and a [mixing of old and new syntaxes](http://css-tricks.com/using-flexbox/). But something like [autoprefixer](https://github.com/ai/autoprefixer) should help out with all that, it's just good to be aware.

#### A simple example showing how perfect vertical and horizontal centering can be done easily with Flexbox
<p data-height="568" data-theme-id="0" data-slug-hash="DxkHE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jbailey4/pen/DxkHE'>DxkHE</a> by Josh (<a href='http://codepen.io/jbailey4'>@jbailey4</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>