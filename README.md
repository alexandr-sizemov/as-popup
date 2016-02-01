# as-popup
Simple AngularJS draggable, resizeable, minimizeable popup

## Installation
  - If you use [bower](http://bower.io/) or [npm](https://www.npmjs.com/), just `bower/npm install as-popup`. If not, download files [from the github repo](https://github.com/alexandr-sizemov/as-popup)
  - Reference `v-modal.css` and `v-modal.js` in your index.html file
  - Reference the module in your app: `angular.module('myApp', [ 'vModal' ])`

## Usage

> index.html

```html
<div ng-app="myApp" ng-controller="AppController as appCtrl">
  <button ng-click="appCtrl.show()">Show</button>
</div>
```