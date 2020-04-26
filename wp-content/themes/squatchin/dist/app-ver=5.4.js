/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var controller = new ScrollMagic.Controller();
  var timeline = gsap.timeline();
  timeline.to('#parallax--3', {
    duration: 6,
    y: -650
  }).to('#parallax--2', {
    duration: 6,
    y: -300
  }, '-=6').to('#parallax--1', {
    duration: 6,
    y: -50
  }, '-=6').to('#parallax--5', {
    duration: 6,
    x: -450
  }, '-=6').to('#parallax--6', {
    duration: 6,
    x: -275
  }, '-=6').to('#parallax--7', {
    duration: 6,
    x: -40
  }, '-=6').to('#parallax--8', {
    duration: 6,
    x: -125
  }, '-=6').to('#parallax--9', {
    duration: 6,
    x: -135
  }, '-=6').to('#parallax--10', {
    duration: 6,
    x: -40
  }, '-=6');
  var scene = new ScrollMagic.Scene({
    triggerElement: 'parallax__wrapper',
    duration: '200%',
    triggerHook: 0
  }).setTween(timeline).setPin('parallax__wrapper').addTo(controller);
  var offerTimeline = gsap.timeline();
  offerTimeline.from("#sash .skill", {
    opacity: 0,
    y: 10,
    stagger: .1,
    duration: 1,
    ease: 'slow'
  });
  var offerScene = new ScrollMagic.Scene({
    triggerElement: '#sash',
    triggerHook: 0
  }).reverse(false).setTween(offerTimeline).addTo(controller);
  var startTimeline = gsap.timeline();
  startTimeline.from("#get-started h2", {
    opacity: 0,
    y: 20,
    duration: .4,
    ease: 'sine'
  }).from("#get-started p", {
    opacity: 0,
    y: 20,
    duration: .5,
    ease: 'power2'
  }, "-=.3").from("#get-started a", {
    opacity: 0,
    y: 20,
    duration: .6,
    ease: 'sine'
  }, "-=.5");
  var startScene = new ScrollMagic.Scene({
    triggerElement: '#cta',
    triggerHook: 0
  }).reverse(false).setTween(startTimeline).addTo(controller);
  var fireTimeline = gsap.timeline();
  fireTimeline.to("#flicker", {
    scale: 1.2,
    duration: .4,
    ease: 'slow'
  }).to("#flicker", {
    scale: 1.1,
    duration: .2,
    ease: 'slow'
  }).to("#flicker", {
    scale: 1.15,
    duration: .3,
    ease: 'slow'
  }).to("#flicker", {
    scale: 1.05,
    duration: .25,
    ease: 'slow'
  }).to("#flicker", {
    scale: 1.1,
    duration: .3,
    ease: 'slow'
  });
  fireTimeline.repeat(-1);
  var guideTimeline = gsap.timeline();
  guideTimeline.from("#crew .guide", {
    opacity: 0,
    y: 10,
    stagger: .1,
    duration: 1,
    ease: 'slow'
  });
  var guideScene = new ScrollMagic.Scene({
    triggerElement: '#sash',
    triggerHook: 0
  }).reverse(false).setTween(guideTimeline).addTo(controller);
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/patrick/Local Sites/squatchin/app/public/wp-content/themes/squatchin/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/patrick/Local Sites/squatchin/app/public/wp-content/themes/squatchin/src/app.scss */"./src/app.scss");


/***/ })

/******/ });