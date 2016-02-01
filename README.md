# as-popup
Simple AngularJS draggable, resizeable, minimizeable popup
Based on [JqueryUI](https://jqueryui.com/) and [Font Awesome](https://fortawesome.github.io/Font-Awesome/)

## Installation
  - If you use [bower](http://bower.io/), just `npm install as-ng-popup`. If not, download files [from the github repo](https://github.com/alexandr-sizemov/as-popup)
  - Reference `dist/templates.min.js`, `dist/style.css` and `dist/index.js` in your index.html file

## Usage

> index.html

```html
<div id="container">
	<as-popup 
	        as-draggable
	        as-resizeable
	        title-text="Title"
	        title-icon="fa fa-bank"
	        as-width="250px"
	        as-height="150px"
	        color="red"
	        is-resizable="true"
	        is-minimizeable="true"
	        is-closed="false"
	        containment="#container">
		<h1>Popup content</h1>
	</as-popup>
</div>
```
