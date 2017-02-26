(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _emitter = __webpack_require__(1);
	
	Object.keys(_emitter).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _emitter[key];
	    }
	  });
	});
	
	
	global.Quark = exports;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Emitter = undefined;
	
	var _const = __webpack_require__(2);
	
	Object.keys(_const).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _const[key];
	    }
	  });
	});
	
	var _Emitter = __webpack_require__(3);
	
	var _Emitter2 = _interopRequireDefault(_Emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Emitter = _Emitter2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var POOL_MAX = exports.POOL_MAX = 1000;
	var TIME_STEP = exports.TIME_STEP = 60;
	var USE_CLOCK = exports.USE_CLOCK = false;
	var MEASURE = exports.MEASURE = 100;
	var EULER = exports.EULER = 'euler';
	var RK2 = exports.RK2 = 'runge-kutta2';
	var RK4 = exports.RK4 = 'runge-kutta4';
	var VERLET = exports.VERLET = 'verlet';
	var PARTICLE_CREATED = exports.PARTICLE_CREATED = 'partilcleCreated';
	var PARTICLE_UPDATE = exports.PARTICLE_UPDATE = 'partilcleUpdate';
	var PARTICLE_SLEEP = exports.PARTICLE_SLEEP = 'particleSleep';
	var PARTICLE_DEAD = exports.PARTICLE_DEAD = 'partilcleDead';
	var PROTON_UPDATE = exports.PROTON_UPDATE = 'protonUpdate';
	var PROTON_UPDATE_AFTER = exports.PROTON_UPDATE_AFTER = 'protonUpdateAfter';
	var EMITTER_ADDED = exports.EMITTER_ADDED = 'emitterAdded';
	var EMITTER_REMOVED = exports.EMITTER_REMOVED = 'emitterRemoved';

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Particle2 = __webpack_require__(4);
	
	var _Particle3 = _interopRequireDefault(_Particle2);
	
	var _Rate = __webpack_require__(6);
	
	var _Rate2 = _interopRequireDefault(_Rate);
	
	var _NumericalIntegration = __webpack_require__(8);
	
	var _NumericalIntegration2 = _interopRequireDefault(_NumericalIntegration);
	
	var _const = __webpack_require__(2);
	
	var _InitializeUtil = __webpack_require__(9);
	
	var _InitializeUtil2 = _interopRequireDefault(_InitializeUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Emitter = function (_Particle) {
	  _inherits(Emitter, _Particle);
	
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	
	    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));
	
	    _this.initializes = [];
	    _this.particles = [];
	    _this.behaviours = [];
	    _this.emitTime = 0;
	    _this.emitTotalTimes = -1;
	    /**
	     * The friction coefficient for all particle emit by This;
	     * @property damping
	     * @type {Number}
	     * @default 0.006
	     */
	    _this.damping = .006;
	    /**
	     * If bindEmitter the particles can bind this emitter's property;
	     * @property bindEmitter
	     * @type {Boolean}
	     * @default true
	     */
	    _this.bindEmitter = true;
	    /**
	     * The number of particles per second emit (a [particle]/b [s]);
	     * @property rate
	     * @type {Proton.Rate}
	     * @default Proton.Rate(1, .1)
	     */
	    _this.rate = new _Rate2.default(1, .1);
	
	    _this.integrator = new _NumericalIntegration2.default();
	    return _this;
	  }
	
	  _createClass(Emitter, [{
	    key: 'emit',
	    value: function emit(emitTime, life) {
	      this.emitTime = 0;
	      this.emitTotalTimes = emitTime;
	
	      if (!isNaN(life)) {
	        this.life = life;
	      }
	
	      this.rate.init();
	    }
	
	    /**
	     * stop emiting
	     * @method stopEmit
	     */
	
	  }, {
	    key: 'stopEmit',
	    value: function stopEmit() {
	      this.emitTotalTimes = -1;
	      this.emitTime = 0;
	    }
	
	    /**
	     * remove current all particles
	     * @method removeAllParticles
	     */
	
	  }, {
	    key: 'removeAllParticles',
	    value: function removeAllParticles() {
	      for (var i = 0; i < this.particles.length; i++) {
	        this.particles[i].dead = true;
	      }
	    }
	
	    /**
	     * create single particle;
	     * 
	     * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
	     * @method removeAllParticles
	     */
	
	  }, {
	    key: 'createParticle',
	    value: function createParticle(initialize, behaviour) {
	      var particle = new _Particle3.default();
	      this.setupParticle(particle, initialize, behaviour);
	      this.dispatchEvent(_const.PARTICLE_CREATED, particle);
	
	      return particle;
	    }
	
	    /**
	     * add initialize to this emitter
	     * @method addSelfInitialize
	     */
	
	  }, {
	    key: 'addSelfInitialize',
	    value: function addSelfInitialize(pObj) {
	      if (pObj['init']) {
	        pObj.init(this);
	      } else {
	        this.initAll();
	      }
	    }
	
	    /**
	     * add the Initialize to particles;
	     * 
	     * you can use initializes array:for example emitter.addInitialize(initialize1,initialize2,initialize3);
	     * @method addInitialize
	     * @param {Proton.Initialize} initialize like this new Proton.Radius(1, 12)
	     */
	
	  }, {
	    key: 'addInitialize',
	    value: function addInitialize() {
	      var length = arguments.length;
	      for (var i = 0; i < length; i++) {
	        this.initializes.push(arguments[i]);
	      }
	    }
	
	    /**
	     * remove the Initialize
	     * @method removeInitialize
	     * @param {Proton.Initialize} initialize a initialize
	     */
	
	  }, {
	    key: 'removeInitialize',
	    value: function removeInitialize(initializer) {
	      var index = this.initializes.indexOf(initializer);
	      if (index > -1) {
	        this.initializes.splice(index, 1);
	      }
	    }
	
	    /**
	     * remove all Initializes
	     * @method removeInitializers
	     */
	
	  }, {
	    key: 'removeInitializers',
	    value: function removeInitializers() {
	      this.initializes.length = 0;
	    }
	
	    /**
	     * add the Behaviour to particles;
	     * 
	     * you can use Behaviours array:emitter.addBehaviour(Behaviour1,Behaviour2,Behaviour3);
	     * @method addBehaviour
	     * @param {Proton.Behaviour} behaviour like this new Proton.Color('random')
	     */
	
	  }, {
	    key: 'addBehaviour',
	    value: function addBehaviour() {
	      var length = arguments.length;
	      for (var i = 0; i < length; i++) {
	        this.behaviours.push(arguments[i]);
	        if (arguments[i].hasOwnProperty("parents")) arguments[i].parents.push(this);
	      }
	    }
	
	    /**
	     * remove the Behaviour
	     * @method removeBehaviour
	     * @param {Proton.Behaviour} behaviour a behaviour
	     */
	
	  }, {
	    key: 'removeBehaviour',
	    value: function removeBehaviour(behaviour) {
	      var index = this.behaviours.indexOf(behaviour);
	      if (index > -1) this.behaviours.splice(index, 1);
	    }
	
	    /**
	     * remove all behaviours
	     * @method removeAllBehaviours
	     */
	
	  }, {
	    key: 'removeAllBehaviours',
	    value: function removeAllBehaviours() {
	      this.behaviours.length = 0;
	    }
	  }, {
	    key: 'integrate',
	    value: function integrate(time) {
	      var damping = 1 - this.damping;
	      var length = this.particles.length;
	
	      this.integrator.integrate(this, time, damping);
	      for (var i = 0; i < length; i++) {
	        var particle = this.particles[i];
	        particle.update(time, i);
	        this.integrator.integrate(particle, time, damping);
	
	        this.dispatchEvent(_const.PARTICLE_UPDATE, particle);
	      }
	    }
	  }, {
	    key: 'emitting',
	    value: function emitting(time) {
	      if (this.emitTotalTimes == 'once') {
	        var length = this.rate.getValue(99999);
	        for (var i = 0; i < length; i++) {
	          this.createParticle();
	        }
	
	        this.emitTotalTimes = 'none';
	      } else if (!isNaN(this.emitTotalTimes)) {
	        this.emitTime += time;
	        if (this.emitTime < this.emitTotalTimes) {
	          var _length = this.rate.getValue(time);
	          for (var _i = 0; _i < _length; _i++) {
	            this.createParticle();
	          }
	        }
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(time) {
	      this.age += time;
	      if (this.age >= this.life || this.dead) {
	        this.destroy();
	      }
	
	      this.emitting(time);
	      this.integrate(time);
	      var particle = void 0;
	      var length = this.particles.length;
	      for (var k = length - 1; k >= 0; k--) {
	        particle = this.particles[k];
	        if (particle.dead) {
	          this.dispatchEvent(_const.PARTICLE_DEAD, particle);
	          this.particles.splice(k, 1);
	        }
	      }
	    }
	  }, {
	    key: 'setupParticle',
	    value: function setupParticle(particle, initialize, behaviour) {
	      var initializes = this.initializes;
	      var behaviours = this.behaviours;
	
	      if (initialize) {
	        if (initialize instanceof Array) initializes = initialize;else initializes = [initialize];
	      }
	
	      if (behaviour) {
	        if (behaviour instanceof Array) behaviours = behaviour;else behaviours = [behaviour];
	      }
	
	      particle.reset();
	      initialize(this, particle, initializes);
	      particle.addBehaviours(behaviours);
	      particle.parent = this;
	      this.particles.push(particle);
	    }
	  }, {
	    key: 'destroy',
	
	
	    /**
	     * Destory this Emitter
	     * @method destroy
	     */
	    value: function destroy() {
	      this.dead = true;
	      this.emitTotalTimes = -1;
	      if (this.particles.length == 0) {
	        this.removeInitializers();
	        this.removeAllBehaviours();
	
	        if (this.parent) this.parent.removeEmitter(this);
	      }
	    }
	  }]);
	
	  return Emitter;
	}(_Particle3.default);
	
	exports.default = Emitter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var uid = 0;
	
	var Particle = function () {
	  function Particle() {
	    _classCallCheck(this, Particle);
	
	    this.id = uid++;
	    this.reset(true);
	  }
	
	  _createClass(Particle, [{
	    key: 'getDirection',
	    value: function getDirection() {
	      return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI);
	    }
	  }, {
	    key: 'reset',
	    value: function reset(init) {
	      this.life = Infinity;
	      this.age = 0;
	      this.energy = 1;
	      this.dead = false;
	      this.sleep = false;
	      this.target = null;
	      this.sprite = null;
	      this.parent = null;
	      this.mass = 1;
	      this.radius = 10;
	      this.alpha = 1;
	      this.scale = 1;
	      this.rotation = 0;
	      this.color = null;
	      this.easing = 'easeLinear';
	      if (init) {
	        this.transform = {};
	        this.p = new _Vector2D2.default();
	        this.v = new _Vector2D2.default();
	        this.a = new _Vector2D2.default();
	        this.old = {
	          p: new _Vector2D2.default(),
	          v: new _Vector2D2.default(),
	          a: new _Vector2D2.default()
	        };
	        this.behaviours = [];
	      } else {
	        delete this.transform;
	        this.p.set(0, 0);
	        this.v.set(0, 0);
	        this.a.set(0, 0);
	        this.old.p.set(0, 0);
	        this.old.v.set(0, 0);
	        this.old.a.set(0, 0);
	        this.removeAllBehaviours();
	      }
	
	      this.transform.rgb = {
	        r: 255,
	        g: 255,
	        b: 255
	      };
	      return this;
	    }
	  }, {
	    key: 'update',
	    value: function update(time, index) {
	      if (!this.sleep) {
	        this.age += time;
	        var length = this.behaviours.length;
	        var i = void 0;
	        for (i = 0; i < length; i++) {
	          if (this.behaviours[i]) this.behaviours[i].applyBehaviour(this, time, index);
	        }
	      } else {}
	
	      if (this.age >= this.life) {
	        this.destroy();
	      } else {
	        var scale = this.easing(this.age / this.life);
	        this.energy = Math.max(1 - scale, 0);
	      }
	    }
	  }, {
	    key: 'addBehaviour',
	    value: function addBehaviour(behaviour) {
	      this.behaviours.push(behaviour);
	      if (behaviour.hasOwnProperty('parents')) {
	        behaviour.parents.push(this);
	      }
	      behaviour.initialize(this);
	    }
	  }, {
	    key: 'addBehaviours',
	    value: function addBehaviours(behaviours) {
	      var length = behaviours.length,
	          i;
	      for (i = 0; i < length; i++) {
	        this.addBehaviour(behaviours[i]);
	      }
	    }
	  }, {
	    key: 'removeBehaviour',
	    value: function removeBehaviour(behaviour) {
	      var index = this.behaviours.indexOf(behaviour);
	      if (index > -1) {
	        var behaviour = this.behaviours.splice(index, 1);
	        behaviour.parents = null;
	      }
	    }
	  }, {
	    key: 'removeAllBehaviours',
	    value: function removeAllBehaviours() {
	      this.behaviours.length = 0;
	    }
	
	    /**
	     * Destory this particle
	     * @method destroy
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.removeAllBehaviours();
	      this.energy = 0;
	      this.dead = true;
	      this.parent = null;
	    }
	  }]);
	
	  return Particle;
	}();
	
	exports.default = Particle;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vector2D = function () {
	  function Vector2D(x, y) {
	    _classCallCheck(this, Vector2D);
	
	    this.x = x || 0;
	    this.y = y || 0;
	  }
	
	  _createClass(Vector2D, [{
	    key: "set",
	    value: function set(x, y) {
	
	      this.x = x;
	      this.y = y;
	      return this;
	    }
	  }, {
	    key: "setX",
	    value: function setX(x) {
	
	      this.x = x;
	      return this;
	    }
	  }, {
	    key: "setY",
	    value: function setY(y) {
	
	      this.y = y;
	
	      return this;
	    }
	  }, {
	    key: "setComponent",
	    value: function setComponent(index, value) {
	
	      switch (index) {
	
	        case 0:
	          this.x = value;
	          break;
	        case 1:
	          this.y = value;
	          break;
	        default:
	          throw new Error("index is out of range: " + index);
	
	      }
	    }
	  }, {
	    key: "getGradient",
	    value: function getGradient() {
	      if (this.x != 0) return Math.atan2(this.y, this.x);else if (this.y > 0) return Math.PI / 2;else if (this.y < 0) return -Math.PI / 2;
	    }
	  }, {
	    key: "getComponent",
	    value: function getComponent(index) {
	
	      switch (index) {
	
	        case 0:
	          return this.x;
	        case 1:
	          return this.y;
	        default:
	          throw new Error("index is out of range: " + index);
	
	      }
	    }
	  }, {
	    key: "copy",
	    value: function copy(v) {
	
	      this.x = v.x;
	      this.y = v.y;
	
	      return this;
	    }
	  }, {
	    key: "add",
	    value: function add(v, w) {
	
	      if (w !== undefined) {
	        return this.addVectors(v, w);
	      }
	
	      this.x += v.x;
	      this.y += v.y;
	
	      return this;
	    }
	  }, {
	    key: "addXY",
	    value: function addXY(a, b) {
	
	      this.x += a;
	      this.y += b;
	
	      return this;
	    }
	  }, {
	    key: "addVectors",
	    value: function addVectors(a, b) {
	
	      this.x = a.x + b.x;
	      this.y = a.y + b.y;
	
	      return this;
	    }
	  }, {
	    key: "addScalar",
	    value: function addScalar(s) {
	
	      this.x += s;
	      this.y += s;
	
	      return this;
	    }
	  }, {
	    key: "sub",
	    value: function sub(v, w) {
	
	      if (w !== undefined) {
	        return this.subVectors(v, w);
	      }
	
	      this.x -= v.x;
	      this.y -= v.y;
	
	      return this;
	    }
	  }, {
	    key: "subVectors",
	    value: function subVectors(a, b) {
	
	      this.x = a.x - b.x;
	      this.y = a.y - b.y;
	
	      return this;
	    }
	  }, {
	    key: "multiplyScalar",
	    value: function multiplyScalar(s) {
	
	      this.x *= s;
	      this.y *= s;
	
	      return this;
	    }
	  }, {
	    key: "divideScalar",
	    value: function divideScalar(s) {
	
	      if (s !== 0) {
	
	        this.x /= s;
	        this.y /= s;
	      } else {
	
	        this.set(0, 0);
	      }
	
	      return this;
	    }
	  }, {
	    key: "min",
	    value: function min(v) {
	
	      if (this.x > v.x) {
	
	        this.x = v.x;
	      }
	
	      if (this.y > v.y) {
	
	        this.y = v.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "max",
	    value: function max(v) {
	
	      if (this.x < v.x) {
	
	        this.x = v.x;
	      }
	
	      if (this.y < v.y) {
	
	        this.y = v.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "clamp",
	    value: function clamp(min, max) {
	
	      // This function assumes min < max, if this assumption isn't true it will not operate correctly
	
	      if (this.x < min.x) {
	
	        this.x = min.x;
	      } else if (this.x > max.x) {
	
	        this.x = max.x;
	      }
	
	      if (this.y < min.y) {
	
	        this.y = min.y;
	      } else if (this.y > max.y) {
	
	        this.y = max.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "negate",
	    value: function negate() {
	
	      return this.multiplyScalar(-1);
	    }
	  }, {
	    key: "dot",
	    value: function dot(v) {
	
	      return this.x * v.x + this.y * v.y;
	    }
	  }, {
	    key: "lengthSq",
	    value: function lengthSq() {
	
	      return this.x * this.x + this.y * this.y;
	    }
	  }, {
	    key: "length",
	    value: function length() {
	
	      return Math.sqrt(this.x * this.x + this.y * this.y);
	    }
	  }, {
	    key: "normalize",
	    value: function normalize() {
	
	      return this.divideScalar(this.length());
	    }
	  }, {
	    key: "distanceTo",
	    value: function distanceTo(v) {
	
	      return Math.sqrt(this.distanceToSquared(v));
	    }
	  }, {
	    key: "rotate",
	    value: function rotate(tha) {
	      var x = this.x;
	      var y = this.y;
	      this.x = x * Math.cos(tha) + y * Math.sin(tha);
	      this.y = -x * Math.sin(tha) + y * Math.cos(tha);
	      return this;
	    }
	  }, {
	    key: "distanceToSquared",
	    value: function distanceToSquared(v) {
	
	      var dx = this.x - v.x,
	          dy = this.y - v.y;
	      return dx * dx + dy * dy;
	    }
	  }, {
	    key: "setLength",
	    value: function setLength(l) {
	
	      var oldLength = this.length();
	
	      if (oldLength !== 0 && l !== oldLength) {
	
	        this.multiplyScalar(l / oldLength);
	      }
	
	      return this;
	    }
	  }, {
	    key: "lerp",
	    value: function lerp(v, alpha) {
	
	      this.x += (v.x - this.x) * alpha;
	      this.y += (v.y - this.y) * alpha;
	
	      return this;
	    }
	  }, {
	    key: "equals",
	    value: function equals(v) {
	
	      return v.x === this.x && v.y === this.y;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	
	      return [this.x, this.y];
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.x = 0.0;
	      this.y = 0.0;
	      return this;
	    }
	  }, {
	    key: "clone",
	    value: function clone() {
	
	      return new Vector2D(this.x, this.y);
	    }
	  }]);
	
	  return Vector2D;
	}();
	
	exports.default = Vector2D;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rate = function () {
	  function Rate(numpan, timepan) {
	    _classCallCheck(this, Rate);
	
	    console.log(_Util2.default);
	    this.numPan = numpan;
	    this.timePan = timepan;
	    this.numPan = _Util2.default.setSpanValue(this.numPan);
	    this.timePan = _Util2.default.setSpanValue(this.timePan);
	    this.startTime = 0;
	    this.nextTime = 0;
	    this.init();
	  }
	
	  _createClass(Rate, [{
	    key: 'init',
	    value: function init() {
	      this.startTime = 0;
	      this.nextTime = this.timePan.getValue();
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue(time) {
	      this.startTime += time;
	      if (this.startTime >= this.nextTime) {
	        this.startTime = 0;
	        this.nextTime = this.timePan.getValue();
	        if (this.numPan.b == 1) {
	          if (this.numPan.getValue(false) > 0.5) return 1;else return 0;
	        } else {
	          return this.numPan.getValue(true);
	        }
	      }
	      return 0;
	    }
	  }]);
	
	  return Rate;
	}();
	
	exports.default = Rate;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    /**
	     * Returns the default if the value is null or undefined
	     *
	     * @memberof Proton#Proton.Util
	     * @method initValue
	     *
	     * @param {Mixed} value a specific value, could be everything but null or undefined
	     * @param {Mixed} defaults the default if the value is null or undefined
	     */
	    initValue: function initValue(value, defaults) {
	        var value = value != null && value != undefined ? value : defaults;
	        return value;
	    },
	
	    /**
	     * Returns the Vector2D - or creates a new one
	     *
	     * @memberof Proton#Proton.Util
	     * @method getVector2D
	     *
	     * @param {Proton.Vector2D | Number} postionOrX
	     * @param {Number} [y] just valid if 'postionOrX' is not an object
	     *
	     * @return {Proton.Vector2D}
	     */
	    getVector2D: function getVector2D(postionOrX, y) {
	        if ((typeof postionOrX === 'undefined' ? 'undefined' : _typeof(postionOrX)) == 'object') {
	            return postionOrX;
	        } else {
	            var vector2d = new _Vector2D2.default(postionOrX, y);
	            return vector2d;
	        }
	    },
	
	    /**
	     * @memberof Proton#Proton.Util
	     * @method judgeVector2D
	     *
	     * @todo add description for param `pOBJ`
	     * @todo add description for function
	     *
	     * @param {Object} pOBJ
	     *
	     * @return {String} result
	     */
	    judgeVector2D: function judgeVector2D(pOBJ) {
	        var result = '';
	        if (pOBJ.hasOwnProperty('x') || pOBJ.hasOwnProperty('y') || pOBJ.hasOwnProperty('p') || pOBJ.hasOwnProperty('position')) result += 'p';
	        if (pOBJ.hasOwnProperty('vx') || pOBJ.hasOwnProperty('vx') || pOBJ.hasOwnProperty('v') || pOBJ.hasOwnProperty('velocity')) result += 'v';
	        if (pOBJ.hasOwnProperty('ax') || pOBJ.hasOwnProperty('ax') || pOBJ.hasOwnProperty('a') || pOBJ.hasOwnProperty('accelerate')) result += 'a';
	
	        return result;
	    },
	
	    /**
	     * @memberof Proton#Proton.Util
	     * @method setVector2DByObject
	     *
	     * @todo add description for param `target`
	     * @todo add description for param `pOBJ`
	     * @todo add description for function
	     *
	     * @param {Object} target
	     * @param {Object} pOBJ
	     */
	    setVector2DByObject: function setVector2DByObject(target, pOBJ) {
	        if (pOBJ.hasOwnProperty('x')) target.p.x = pOBJ['x'];
	
	        if (pOBJ.hasOwnProperty('y')) target.p.y = pOBJ['y'];
	
	        if (pOBJ.hasOwnProperty('vx')) target.v.x = pOBJ['vx'];
	
	        if (pOBJ.hasOwnProperty('vy')) target.v.y = pOBJ['vy'];
	
	        if (pOBJ.hasOwnProperty('ax')) target.a.x = pOBJ['ax'];
	
	        if (pOBJ.hasOwnProperty('ay')) target.a.y = pOBJ['ay'];
	
	        if (pOBJ.hasOwnProperty('p')) particle.p.copy(pOBJ['p']);
	
	        if (pOBJ.hasOwnProperty('v')) particle.v.copy(pOBJ['v']);
	
	        if (pOBJ.hasOwnProperty('a')) particle.a.copy(pOBJ['a']);
	
	        if (pOBJ.hasOwnProperty('position')) particle.p.copy(pOBJ['position']);
	
	        if (pOBJ.hasOwnProperty('velocity')) particle.v.copy(pOBJ['velocity']);
	
	        if (pOBJ.hasOwnProperty('accelerate')) particle.a.copy(pOBJ['accelerate']);
	    },
	
	    /**
	     * Returns a new Proton.Span object
	     *
	     * @memberof Proton#Proton.Util
	     * @method setSpanValue
	     *
	     * @todo a, b and c should be 'Mixed' or 'Number'?
	     *
	     * @param {Mixed | Proton.Span} a
	     * @param {Mixed}               b
	     * @param {Mixed}               c
	     *
	     * @return {Proton.Span}
	     */
	    setSpanValue: function setSpanValue(a, b, c) {
	        if (a instanceof Span) {
	            return a;
	        } else {
	            if (!b) {
	                return new Span(a);
	            } else {
	                if (!c) return new Span(a, b);else return new Span(a, b, c);
	            }
	        }
	    },
	
	    /**
	     * Returns the value from a Proton.Span, if the param is not a Proton.Span it will return the given parameter
	     *
	     * @memberof Proton#Proton.Util
	     * @method getSpanValue
	     *
	     * @param {Mixed | Proton.Span} pan
	     *
	     * @return {Mixed} the value of Proton.Span OR the parameter if it is not a Proton.Span
	     */
	    getSpanValue: function getSpanValue(pan) {
	        if (pan instanceof Span) return pan.getValue();else return pan;
	    },
	
	    /**
	     * @typedef  {Object} rgbObject
	     * @property {Number} r red value
	     * @property {Number} g green value
	     * @property {Number} b blue value
	     */
	    /**
	     * converts a hex value to a rgb object
	     *
	     * @memberof Proton#Proton.Util
	     * @method hexToRGB
	     *
	     * @param {String} h any hex value, e.g. #000000 or 000000 for black
	     *
	     * @return {rgbObject}
	     */
	    hexToRGB: function hexToRGB(h) {
	        var hex16 = h.charAt(0) == "#" ? h.substring(1, 7) : h;
	        var r = parseInt(hex16.substring(0, 2), 16);
	        var g = parseInt(hex16.substring(2, 4), 16);
	        var b = parseInt(hex16.substring(4, 6), 16);
	
	        return {
	            r: r,
	            g: g,
	            b: b
	        };
	    },
	
	    /**
	     * converts a rgb value to a rgb string
	     *
	     * @memberof Proton#Proton.Util
	     * @method rgbToHex
	     *
	     * @param {Object | Proton.hexToRGB} rgb a rgb object like in {@link Proton#Proton.Util.hexToRGB}
	     *
	     * @return {String} rgb()
	     */
	    rgbToHex: function rgbToHex(rbg) {
	        return 'rgb(' + rbg.r + ', ' + rbg.g + ', ' + rbg.b + ')';
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _const = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NumericalIntegration = function () {
	  function NumericalIntegration(type) {
	    _classCallCheck(this, NumericalIntegration);
	
	    this.type = type || _const.EULER;
	  }
	
	  _createClass(NumericalIntegration, [{
	    key: 'integrate',
	    value: function integrate(particle, time, damping) {
	      this.eulerIntegrate(particle, time, damping);
	    }
	  }, {
	    key: 'eulerIntegrate',
	    value: function eulerIntegrate(particle, time, damping) {
	      if (!particle.sleep) {
	        particle.old.p.copy(particle.p);
	        particle.old.v.copy(particle.v);
	        particle.a.multiplyScalar(1 / particle.mass);
	        particle.v.add(particle.a.multiplyScalar(time));
	        particle.p.add(particle.old.v.multiplyScalar(time));
	        if (damping) {
	          particle.v.multiplyScalar(damping);
	        }
	        particle.a.clear();
	      }
	    }
	  }]);
	
	  return NumericalIntegration;
	}();
	
	exports.default = NumericalIntegration;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initialize;
	
	var _Initialize = __webpack_require__(10);
	
	var _Initialize2 = _interopRequireDefault(_Initialize);
	
	var _MathUtils = __webpack_require__(11);
	
	var _Util = __webpack_require__(7);
	
	var Util = _interopRequireWildcard(_Util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initialize(emitter, particle, initializes) {
	  var length = initializes.length;
	  for (var i = 0; i < length; i++) {
	    if (initializes[i] instanceof _Initialize2.default) {
	      initializes[i].init(emitter, particle);
	    } else {
	      init(emitter, particle, initializes[i]);
	    }
	  }
	
	  bindEmitter(emitter, particle);
	}
	
	function init(emitter, particle, initialize) {
	  Util.setPrototypeByObject(particle, initialize);
	  Util.setVector2DByObject(particle, initialize);
	}
	
	function bindEmitter(emitter, particle) {
	  if (emitter.bindEmitter) {
	    particle.p.add(emitter.p);
	    particle.v.add(emitter.v);
	    particle.a.add(emitter.a);
	    particle.v.rotate((0, _MathUtils.degreeTransform)(emitter.rotation));
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Initialize = function () {
		function Initialize() {
			_classCallCheck(this, Initialize);
		}
	
		_createClass(Initialize, [{
			key: "reset",
			value: function reset() {}
		}, {
			key: "init",
			value: function init(emitter, particle) {
				if (particle) {
					this.initialize(particle);
				} else {
					this.initialize(emitter);
				}
			}
		}, {
			key: "initialize",
			value: function initialize() {}
		}]);
	
		return Initialize;
	}();
	
	exports.default = Initialize;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.randomAToB = randomAToB;
	exports.randomFloating = randomFloating;
	exports.degreeTransform = degreeTransform;
	function randomAToB(a, b, INT) {
	  if (!INT) return a + Math.random() * (b - a);else return Math.floor(Math.random() * (b - a)) + a;
	}
	
	function randomFloating(center, f, INT) {
	  return MathUtils.randomAToB(center - f, center + f, INT);
	}
	
	function degreeTransform(a) {
	  return a * Math.PI / 180;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4YTA4NmZjMjdmN2FiNDNmMjc3MyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiUXVhcmsiLCJleHBvcnRzIiwiRW1pdHRlciIsIlBPT0xfTUFYIiwiVElNRV9TVEVQIiwiVVNFX0NMT0NLIiwiTUVBU1VSRSIsIkVVTEVSIiwiUksyIiwiUks0IiwiVkVSTEVUIiwiUEFSVElDTEVfQ1JFQVRFRCIsIlBBUlRJQ0xFX1VQREFURSIsIlBBUlRJQ0xFX1NMRUVQIiwiUEFSVElDTEVfREVBRCIsIlBST1RPTl9VUERBVEUiLCJQUk9UT05fVVBEQVRFX0FGVEVSIiwiRU1JVFRFUl9BRERFRCIsIkVNSVRURVJfUkVNT1ZFRCIsImluaXRpYWxpemVzIiwicGFydGljbGVzIiwiYmVoYXZpb3VycyIsImVtaXRUaW1lIiwiZW1pdFRvdGFsVGltZXMiLCJkYW1waW5nIiwiYmluZEVtaXR0ZXIiLCJyYXRlIiwiaW50ZWdyYXRvciIsImxpZmUiLCJpc05hTiIsImluaXQiLCJpIiwibGVuZ3RoIiwiZGVhZCIsImluaXRpYWxpemUiLCJiZWhhdmlvdXIiLCJwYXJ0aWNsZSIsInNldHVwUGFydGljbGUiLCJkaXNwYXRjaEV2ZW50IiwicE9iaiIsImluaXRBbGwiLCJhcmd1bWVudHMiLCJwdXNoIiwiaW5pdGlhbGl6ZXIiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcmVudHMiLCJ0aW1lIiwiaW50ZWdyYXRlIiwidXBkYXRlIiwiZ2V0VmFsdWUiLCJjcmVhdGVQYXJ0aWNsZSIsImFnZSIsImRlc3Ryb3kiLCJlbWl0dGluZyIsImsiLCJBcnJheSIsInJlc2V0IiwiYWRkQmVoYXZpb3VycyIsInBhcmVudCIsInJlbW92ZUluaXRpYWxpemVycyIsInJlbW92ZUFsbEJlaGF2aW91cnMiLCJyZW1vdmVFbWl0dGVyIiwidWlkIiwiUGFydGljbGUiLCJpZCIsIk1hdGgiLCJhdGFuMiIsInYiLCJ4IiwieSIsIlBJIiwiSW5maW5pdHkiLCJlbmVyZ3kiLCJzbGVlcCIsInRhcmdldCIsInNwcml0ZSIsIm1hc3MiLCJyYWRpdXMiLCJhbHBoYSIsInNjYWxlIiwicm90YXRpb24iLCJjb2xvciIsImVhc2luZyIsInRyYW5zZm9ybSIsInAiLCJhIiwib2xkIiwic2V0IiwicmdiIiwiciIsImciLCJiIiwiYXBwbHlCZWhhdmlvdXIiLCJtYXgiLCJhZGRCZWhhdmlvdXIiLCJWZWN0b3IyRCIsInZhbHVlIiwiRXJyb3IiLCJ3IiwidW5kZWZpbmVkIiwiYWRkVmVjdG9ycyIsInMiLCJzdWJWZWN0b3JzIiwibWluIiwibXVsdGlwbHlTY2FsYXIiLCJzcXJ0IiwiZGl2aWRlU2NhbGFyIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJ0aGEiLCJjb3MiLCJzaW4iLCJkeCIsImR5IiwibCIsIm9sZExlbmd0aCIsIlJhdGUiLCJudW1wYW4iLCJ0aW1lcGFuIiwiY29uc29sZSIsImxvZyIsIm51bVBhbiIsInRpbWVQYW4iLCJzZXRTcGFuVmFsdWUiLCJzdGFydFRpbWUiLCJuZXh0VGltZSIsImluaXRWYWx1ZSIsImRlZmF1bHRzIiwiZ2V0VmVjdG9yMkQiLCJwb3N0aW9uT3JYIiwidmVjdG9yMmQiLCJqdWRnZVZlY3RvcjJEIiwicE9CSiIsInJlc3VsdCIsInNldFZlY3RvcjJEQnlPYmplY3QiLCJjb3B5IiwiYyIsIlNwYW4iLCJnZXRTcGFuVmFsdWUiLCJwYW4iLCJoZXhUb1JHQiIsImgiLCJoZXgxNiIsImNoYXJBdCIsInN1YnN0cmluZyIsInBhcnNlSW50IiwicmdiVG9IZXgiLCJyYmciLCJOdW1lcmljYWxJbnRlZ3JhdGlvbiIsInR5cGUiLCJldWxlckludGVncmF0ZSIsImFkZCIsImNsZWFyIiwiVXRpbCIsImVtaXR0ZXIiLCJzZXRQcm90b3R5cGVCeU9iamVjdCIsInJvdGF0ZSIsIkluaXRpYWxpemUiLCJyYW5kb21BVG9CIiwicmFuZG9tRmxvYXRpbmciLCJkZWdyZWVUcmFuc2Zvcm0iLCJJTlQiLCJyYW5kb20iLCJmbG9vciIsImNlbnRlciIsImYiLCJNYXRoVXRpbHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBRUFBLFFBQU9DLEtBQVAsR0FBZUMsT0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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bnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4YTA4NmZjMjdmN2FiNDNmMjc3MyIsImV4cG9ydCAqIGZyb20gJy4vZW1pdHRlcic7XG5cbmdsb2JhbC5RdWFyayA9IGV4cG9ydHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiZXhwb3J0ICogZnJvbSAnLi9jb25zdCc7XG5cbmltcG9ydCBFbWl0dGVyIGZyb20gJy4vRW1pdHRlcic7XG5cbmV4cG9ydCB7RW1pdHRlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJleHBvcnQgY29uc3QgUE9PTF9NQVggPSAxMDAwO1xuZXhwb3J0IGNvbnN0IFRJTUVfU1RFUCA9IDYwO1xuZXhwb3J0IGNvbnN0IFVTRV9DTE9DSyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IE1FQVNVUkUgPSAxMDA7XG5leHBvcnQgY29uc3QgRVVMRVIgPSAnZXVsZXInO1xuZXhwb3J0IGNvbnN0IFJLMiA9ICdydW5nZS1rdXR0YTInO1xuZXhwb3J0IGNvbnN0IFJLNCA9ICdydW5nZS1rdXR0YTQnO1xuZXhwb3J0IGNvbnN0IFZFUkxFVCA9ICd2ZXJsZXQnO1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX0NSRUFURUQgPSAncGFydGlsY2xlQ3JlYXRlZCc7XG5leHBvcnQgY29uc3QgUEFSVElDTEVfVVBEQVRFID0gJ3BhcnRpbGNsZVVwZGF0ZSc7XG5leHBvcnQgY29uc3QgUEFSVElDTEVfU0xFRVAgPSAncGFydGljbGVTbGVlcCc7XG5leHBvcnQgY29uc3QgUEFSVElDTEVfREVBRCA9ICdwYXJ0aWxjbGVEZWFkJztcbmV4cG9ydCBjb25zdCBQUk9UT05fVVBEQVRFID0gJ3Byb3RvblVwZGF0ZSc7XG5leHBvcnQgY29uc3QgUFJPVE9OX1VQREFURV9BRlRFUiA9ICdwcm90b25VcGRhdGVBZnRlcic7XG5leHBvcnQgY29uc3QgRU1JVFRFUl9BRERFRCA9ICdlbWl0dGVyQWRkZWQnO1xuZXhwb3J0IGNvbnN0IEVNSVRURVJfUkVNT1ZFRCA9ICdlbWl0dGVyUmVtb3ZlZCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJpbXBvcnQgUGFydGljbGUgZnJvbSAnLi4vY29yZS9QYXJ0aWNsZSc7XG5pbXBvcnQgUmF0ZSBmcm9tICcuLi9pbml0aWFsaXplL1JhdGUnO1xuaW1wb3J0IE51bWVyaWNhbEludGVncmF0aW9uIGZyb20gJy4uL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24nO1xuaW1wb3J0IHsgUEFSVElDTEVfQ1JFQVRFRCwgUEFSVElDTEVfVVBEQVRFLCBQQVJUSUNMRV9ERUFEIH0gZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuLi9pbml0aWFsaXplL0luaXRpYWxpemVVdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciBleHRlbmRzIFBhcnRpY2xle1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbml0aWFsaXplcyA9IFtdO1xuICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgdGhpcy5iZWhhdmlvdXJzID0gW107XG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xuICAgIC8qKlxuICAgICAqIFRoZSBmcmljdGlvbiBjb2VmZmljaWVudCBmb3IgYWxsIHBhcnRpY2xlIGVtaXQgYnkgVGhpcztcbiAgICAgKiBAcHJvcGVydHkgZGFtcGluZ1xuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMC4wMDZcbiAgICAgKi9cbiAgICB0aGlzLmRhbXBpbmcgPSAuMDA2O1xuICAgIC8qKlxuICAgICAqIElmIGJpbmRFbWl0dGVyIHRoZSBwYXJ0aWNsZXMgY2FuIGJpbmQgdGhpcyBlbWl0dGVyJ3MgcHJvcGVydHk7XG4gICAgICogQHByb3BlcnR5IGJpbmRFbWl0dGVyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHRoaXMuYmluZEVtaXR0ZXIgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcGFydGljbGVzIHBlciBzZWNvbmQgZW1pdCAoYSBbcGFydGljbGVdL2IgW3NdKTtcbiAgICAgKiBAcHJvcGVydHkgcmF0ZVxuICAgICAqIEB0eXBlIHtQcm90b24uUmF0ZX1cbiAgICAgKiBAZGVmYXVsdCBQcm90b24uUmF0ZSgxLCAuMSlcbiAgICAgKi9cbiAgICB0aGlzLnJhdGUgPSBuZXcgUmF0ZSgxLCAuMSk7XG5cbiAgICB0aGlzLmludGVncmF0b3IgPSBuZXcgTnVtZXJpY2FsSW50ZWdyYXRpb24oKTtcbiAgfVxuXG4gIGVtaXQoZW1pdFRpbWUsIGxpZmUpIHtcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gZW1pdFRpbWU7XG5cbiAgICBpZighaXNOYU4obGlmZSkpIHtcbiAgICAgIHRoaXMubGlmZSA9IGxpZmU7XG4gICAgfVxuXG4gICAgdGhpcy5yYXRlLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdG9wIGVtaXRpbmdcbiAgICogQG1ldGhvZCBzdG9wRW1pdFxuICAgKi9cbiAgc3RvcEVtaXQoKSB7XG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBjdXJyZW50IGFsbCBwYXJ0aWNsZXNcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcbiAgICovXG4gIHJlbW92ZUFsbFBhcnRpY2xlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZGVhZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIHNpbmdsZSBwYXJ0aWNsZTtcbiAgICogXG4gICAqIGNhbiB1c2UgZW1pdCh7eDoxMH0sbmV3IEdyYXZpdHkoMTApLHsncGFydGljbGVVcGRhdGUnLGZ1bn0pIG9yIGVtaXQoW3t4OjEwfSxuZXcgSW5pdGlhbGl6ZV0sbmV3IEdyYXZpdHkoMTApLHsncGFydGljbGVVcGRhdGUnLGZ1bn0pXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXG4gICAqL1xuICBjcmVhdGVQYXJ0aWNsZShpbml0aWFsaXplLCBiZWhhdmlvdXIpIHtcbiAgICBjb25zdCBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZSgpO1xuICAgIHRoaXMuc2V0dXBQYXJ0aWNsZShwYXJ0aWNsZSwgaW5pdGlhbGl6ZSwgYmVoYXZpb3VyKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoUEFSVElDTEVfQ1JFQVRFRCwgcGFydGljbGUpO1xuXG4gICAgcmV0dXJuIHBhcnRpY2xlO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBpbml0aWFsaXplIHRvIHRoaXMgZW1pdHRlclxuICAgKiBAbWV0aG9kIGFkZFNlbGZJbml0aWFsaXplXG4gICAqL1xuICBhZGRTZWxmSW5pdGlhbGl6ZShwT2JqKSB7XG4gICAgaWYgKHBPYmpbJ2luaXQnXSkge1xuICAgICAgcE9iai5pbml0KHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRBbGwoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIHRoZSBJbml0aWFsaXplIHRvIHBhcnRpY2xlcztcbiAgICogXG4gICAqIHlvdSBjYW4gdXNlIGluaXRpYWxpemVzIGFycmF5OmZvciBleGFtcGxlIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShpbml0aWFsaXplMSxpbml0aWFsaXplMixpbml0aWFsaXplMyk7XG4gICAqIEBtZXRob2QgYWRkSW5pdGlhbGl6ZVxuICAgKiBAcGFyYW0ge1Byb3Rvbi5Jbml0aWFsaXplfSBpbml0aWFsaXplIGxpa2UgdGhpcyBuZXcgUHJvdG9uLlJhZGl1cygxLCAxMilcbiAgICovXG4gIGFkZEluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIHRoZSBJbml0aWFsaXplXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZVxuICAgKiBAcGFyYW0ge1Byb3Rvbi5Jbml0aWFsaXplfSBpbml0aWFsaXplIGEgaW5pdGlhbGl6ZVxuICAgKi9cbiAgcmVtb3ZlSW5pdGlhbGl6ZShpbml0aWFsaXplcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbml0aWFsaXplcy5pbmRleE9mKGluaXRpYWxpemVyKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5pbml0aWFsaXplcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYWxsIEluaXRpYWxpemVzXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZXJzXG4gICAqL1xuICByZW1vdmVJbml0aWFsaXplcnMoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCB0aGUgQmVoYXZpb3VyIHRvIHBhcnRpY2xlcztcbiAgICogXG4gICAqIHlvdSBjYW4gdXNlIEJlaGF2aW91cnMgYXJyYXk6ZW1pdHRlci5hZGRCZWhhdmlvdXIoQmVoYXZpb3VyMSxCZWhhdmlvdXIyLEJlaGF2aW91cjMpO1xuICAgKiBAbWV0aG9kIGFkZEJlaGF2aW91clxuICAgKiBAcGFyYW0ge1Byb3Rvbi5CZWhhdmlvdXJ9IGJlaGF2aW91ciBsaWtlIHRoaXMgbmV3IFByb3Rvbi5Db2xvcigncmFuZG9tJylcbiAgICovXG4gIGFkZEJlaGF2aW91cigpIHtcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KFwicGFyZW50c1wiKSlcbiAgICAgICAgYXJndW1lbnRzW2ldLnBhcmVudHMucHVzaCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIHRoZSBCZWhhdmlvdXJcbiAgICogQG1ldGhvZCByZW1vdmVCZWhhdmlvdXJcbiAgICogQHBhcmFtIHtQcm90b24uQmVoYXZpb3VyfSBiZWhhdmlvdXIgYSBiZWhhdmlvdXJcbiAgICovXG4gIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYWxsIGJlaGF2aW91cnNcbiAgICogQG1ldGhvZCByZW1vdmVBbGxCZWhhdmlvdXJzXG4gICAqL1xuICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xuICAgIHRoaXMuYmVoYXZpb3Vycy5sZW5ndGggPSAwO1xuICB9XG5cbiAgaW50ZWdyYXRlKHRpbWUpIHtcbiAgICBjb25zdCBkYW1waW5nID0gMSAtIHRoaXMuZGFtcGluZztcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7XG5cbiAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHRoaXMsIHRpbWUsIGRhbXBpbmcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2ldO1xuICAgICAgcGFydGljbGUudXBkYXRlKHRpbWUsIGkpO1xuICAgICAgdGhpcy5pbnRlZ3JhdG9yLmludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZyk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChQQVJUSUNMRV9VUERBVEUsIHBhcnRpY2xlKTtcbiAgICB9XG4gIH1cblxuICBlbWl0dGluZyh0aW1lKSB7XG4gICAgaWYgKHRoaXMuZW1pdFRvdGFsVGltZXMgPT0gJ29uY2UnKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnJhdGUuZ2V0VmFsdWUoOTk5OTkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAnbm9uZSc7XG4gICAgfSBlbHNlIGlmICghaXNOYU4odGhpcy5lbWl0VG90YWxUaW1lcykpIHtcbiAgICAgIHRoaXMuZW1pdFRpbWUgKz0gdGltZTtcbiAgICAgIGlmICh0aGlzLmVtaXRUaW1lIDwgdGhpcy5lbWl0VG90YWxUaW1lcykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnJhdGUuZ2V0VmFsdWUodGltZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIHRoaXMuYWdlICs9IHRpbWU7XG4gICAgaWYgKHRoaXMuYWdlID49IHRoaXMubGlmZSB8fCB0aGlzLmRlYWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdHRpbmcodGltZSk7XG4gICAgdGhpcy5pbnRlZ3JhdGUodGltZSk7XG4gICAgbGV0IHBhcnRpY2xlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucGFydGljbGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBrID0gbGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgIHBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZXNba107XG4gICAgICBpZiAocGFydGljbGUuZGVhZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoUEFSVElDTEVfREVBRCAsIHBhcnRpY2xlKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGssIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZXR1cFBhcnRpY2xlKHBhcnRpY2xlLCBpbml0aWFsaXplLCBiZWhhdmlvdXIpIHtcbiAgICBsZXQgaW5pdGlhbGl6ZXMgPSB0aGlzLmluaXRpYWxpemVzO1xuICAgIGxldCBiZWhhdmlvdXJzID0gdGhpcy5iZWhhdmlvdXJzO1xuXG4gICAgaWYgKGluaXRpYWxpemUpIHtcbiAgICAgIGlmICggaW5pdGlhbGl6ZSBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICBpbml0aWFsaXplcyA9IGluaXRpYWxpemU7XG4gICAgICBlbHNlXG4gICAgICAgIGluaXRpYWxpemVzID0gW2luaXRpYWxpemVdO1xuICAgIH1cblxuICAgIGlmIChiZWhhdmlvdXIpIHtcbiAgICAgIGlmICggYmVoYXZpb3VyIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgIGJlaGF2aW91cnMgPSBiZWhhdmlvdXI7XG4gICAgICBlbHNlXG4gICAgICAgIGJlaGF2aW91cnMgPSBbYmVoYXZpb3VyXTtcbiAgICB9XG5cbiAgICBwYXJ0aWNsZS5yZXNldCgpO1xuICAgIGluaXRpYWxpemUodGhpcywgcGFydGljbGUsIGluaXRpYWxpemVzKTtcbiAgICBwYXJ0aWNsZS5hZGRCZWhhdmlvdXJzKGJlaGF2aW91cnMpO1xuICAgIHBhcnRpY2xlLnBhcmVudCA9IHRoaXM7XG4gICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgdGhpcyBFbWl0dGVyXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcbiAgICBpZiAodGhpcy5wYXJ0aWNsZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlSW5pdGlhbGl6ZXJzKCk7XG4gICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcblxuICAgICAgaWYgKHRoaXMucGFyZW50KVxuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVFbWl0dGVyKHRoaXMpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcblxubGV0IHVpZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xle1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5pZCA9IHVpZCsrO1xuICAgICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnYueCwgLXRoaXMudi55KSAqICgxODAgLyBNYXRoLlBJKTtcbiAgICB9XG5cbiAgICByZXNldChpbml0KSB7XG4gICAgICB0aGlzLmxpZmUgPSBJbmZpbml0eTtcbiAgICAgIHRoaXMuYWdlID0gMDtcbiAgICAgIHRoaXMuZW5lcmd5ID0gMTtcbiAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zbGVlcCA9IGZhbHNlO1xuICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xuICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgdGhpcy5tYXNzID0gMTtcbiAgICAgIHRoaXMucmFkaXVzID0gMTA7XG4gICAgICB0aGlzLmFscGhhID0gMTtcbiAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XG4gICAgICB0aGlzLmNvbG9yID0gbnVsbDtcbiAgICAgIHRoaXMuZWFzaW5nID0gJ2Vhc2VMaW5lYXInO1xuICAgICAgaWYgKGluaXQpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7fVxuICAgICAgICB0aGlzLnAgPSBuZXcgVmVjdG9yMkQoKTtcbiAgICAgICAgdGhpcy52ID0gbmV3IFZlY3RvcjJEKCk7XG4gICAgICAgIHRoaXMuYSA9IG5ldyBWZWN0b3IyRCgpO1xuICAgICAgICB0aGlzLm9sZCA9IHtcbiAgICAgICAgICBwIDogbmV3IFZlY3RvcjJEKCksXG4gICAgICAgICAgdiA6IG5ldyBWZWN0b3IyRCgpLFxuICAgICAgICAgIGEgOiBuZXcgVmVjdG9yMkQoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJlaGF2aW91cnMgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5wLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy52LnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5hLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5vbGQucC5zZXQoMCwgMCk7XG4gICAgICAgIHRoaXMub2xkLnYuc2V0KDAsIDApO1xuICAgICAgICB0aGlzLm9sZC5hLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhbnNmb3JtLnJnYiA9IHtcbiAgICAgICAgciA6IDI1NSxcbiAgICAgICAgZyA6IDI1NSxcbiAgICAgICAgYiA6IDI1NVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUsIGluZGV4KSB7XG4gICAgICBpZighdGhpcy5zbGVlcCkge1xuICAgICAgICB0aGlzLmFnZSArPSB0aW1lO1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmJlaGF2aW91cnMubGVuZ3RoO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgZm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmJlaGF2aW91cnNbaV0pXG4gICAgICAgICAgICB0aGlzLmJlaGF2aW91cnNbaV0uYXBwbHlCZWhhdmlvdXIodGhpcywgdGltZSwgaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5hZ2UgPj0gdGhpcy5saWZlKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmVhc2luZyh0aGlzLmFnZSAvIHRoaXMubGlmZSk7XG4gICAgICAgIHRoaXMuZW5lcmd5ID0gTWF0aC5tYXgoMSAtIHNjYWxlLCAwKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGFkZEJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5wdXNoKGJlaGF2aW91cik7XG4gICAgICBpZiAoYmVoYXZpb3VyLmhhc093blByb3BlcnR5KCdwYXJlbnRzJykpe1xuICAgICAgICBiZWhhdmlvdXIucGFyZW50cy5wdXNoKHRoaXMpO1xuICAgICAgfVxuICAgICAgYmVoYXZpb3VyLmluaXRpYWxpemUodGhpcyk7XG4gICAgfVxuXG4gICAgYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYmVoYXZpb3Vycy5sZW5ndGgsIGk7XG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYWRkQmVoYXZpb3VyKGJlaGF2aW91cnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuYmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGJlaGF2aW91ci5wYXJlbnRzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xuICAgICAgdGhpcy5iZWhhdmlvdXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdG9yeSB0aGlzIHBhcnRpY2xlXG4gICAgICogQG1ldGhvZCBkZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xuICAgICAgdGhpcy5lbmVyZ3kgPSAwO1xuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvUGFydGljbGUuanMiLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHgsIHkpe1xyXG4gICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgdGhpcy55ID0geSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgc2V0KHgsIHkpIHtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFgoeCkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzZXRZKHkpIHtcclxuXHJcbiAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldENvbXBvbmVudChpbmRleCwgdmFsdWUpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLnggPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMueSA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImluZGV4IGlzIG91dCBvZiByYW5nZTogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldEdyYWRpZW50KCkge1xyXG4gICAgaWYgKHRoaXMueCAhPSAwKVxyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgICBlbHNlIGlmICh0aGlzLnkgPiAwKVxyXG4gICAgICByZXR1cm4gTWF0aC5QSSAvIDI7XHJcbiAgICBlbHNlIGlmICh0aGlzLnkgPCAwKVxyXG4gICAgICByZXR1cm4gLU1hdGguUEkgLyAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KGluZGV4KSB7XHJcblxyXG4gICAgc3dpdGNoICggaW5kZXggKSB7XHJcblxyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29weSh2KSB7XHJcblxyXG4gICAgdGhpcy54ID0gdi54O1xyXG4gICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZCh2LCB3KSB7XHJcblxyXG4gICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hZGRWZWN0b3JzKHYsIHcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggKz0gdi54O1xyXG4gICAgdGhpcy55ICs9IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRYWShhLCBiKSB7XHJcblxyXG4gICAgdGhpcy54ICs9IGE7XHJcbiAgICB0aGlzLnkgKz0gYjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRWZWN0b3JzKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggPSBhLnggKyBiLng7XHJcbiAgICB0aGlzLnkgPSBhLnkgKyBiLnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkU2NhbGFyKHMpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gcztcclxuICAgIHRoaXMueSArPSBzO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1Yih2LCB3KSB7XHJcblxyXG4gICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJWZWN0b3JzKHYsIHcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggLT0gdi54O1xyXG4gICAgdGhpcy55IC09IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzdWJWZWN0b3JzKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggPSBhLnggLSBiLng7XHJcbiAgICB0aGlzLnkgPSBhLnkgLSBiLnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbXVsdGlwbHlTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCAqPSBzO1xyXG4gICAgdGhpcy55ICo9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZGl2aWRlU2NhbGFyKHMpIHtcclxuXHJcbiAgICBpZiAocyAhPT0gMCkge1xyXG5cclxuICAgICAgdGhpcy54IC89IHM7XHJcbiAgICAgIHRoaXMueSAvPSBzO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICB0aGlzLnNldCgwLCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbWluKHYpIHtcclxuXHJcbiAgICBpZiAodGhpcy54ID4gdi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSB2Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPiB2LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbWF4KHYpIHtcclxuXHJcbiAgICBpZiAodGhpcy54IDwgdi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSB2Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPCB2LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xhbXAobWluLCBtYXgpIHtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgbWluIDwgbWF4LCBpZiB0aGlzIGFzc3VtcHRpb24gaXNuJ3QgdHJ1ZSBpdCB3aWxsIG5vdCBvcGVyYXRlIGNvcnJlY3RseVxyXG5cclxuICAgIGlmICh0aGlzLnggPCBtaW4ueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gbWluLng7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnggPiBtYXgueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gbWF4Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPCBtaW4ueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gbWluLnk7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnkgPiBtYXgueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gbWF4Lnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG5lZ2F0ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigtMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZG90KHYpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55O1xyXG5cclxuICB9XHJcblxyXG4gIGxlbmd0aFNxKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoKCkge1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuXHJcbiAgfVxyXG5cclxuICBub3JtYWxpemUoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKHRoaXMubGVuZ3RoKCkpO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3RhbmNlVG8odikge1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVRvU3F1YXJlZCh2KSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcm90YXRlKHRoYSkge1xyXG4gICAgdmFyIHggPSB0aGlzLng7XHJcbiAgICB2YXIgeSA9IHRoaXMueTtcclxuICAgIHRoaXMueCA9IHggKiBNYXRoLmNvcyh0aGEpICsgeSAqIE1hdGguc2luKHRoYSk7XHJcbiAgICB0aGlzLnkgPSAteCAqIE1hdGguc2luKHRoYSkgKyB5ICogTWF0aC5jb3ModGhhKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUb1NxdWFyZWQodikge1xyXG5cclxuICAgIHZhciBkeCA9IHRoaXMueCAtIHYueCwgZHkgPSB0aGlzLnkgLSB2Lnk7XHJcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0TGVuZ3RoKGwpIHtcclxuXHJcbiAgICB2YXIgb2xkTGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuXHJcbiAgICBpZiAob2xkTGVuZ3RoICE9PSAwICYmIGwgIT09IG9sZExlbmd0aCkge1xyXG5cclxuICAgICAgdGhpcy5tdWx0aXBseVNjYWxhcihsIC8gb2xkTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBsZXJwKHYsIGFscGhhKSB7XHJcblxyXG4gICAgdGhpcy54ICs9ICh2LnggLSB0aGlzLnggKSAqIGFscGhhO1xyXG4gICAgdGhpcy55ICs9ICh2LnkgLSB0aGlzLnkgKSAqIGFscGhhO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGVxdWFscyh2KSB7XHJcblxyXG4gICAgcmV0dXJuICgodi54ID09PSB0aGlzLnggKSAmJiAodi55ID09PSB0aGlzLnkgKSApO1xyXG5cclxuICB9XHJcblxyXG4gIHRvQXJyYXkoKSB7XHJcblxyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnggPSAwLjA7XHJcbiAgICB0aGlzLnkgPSAwLjA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsb25lKCkge1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpO1xyXG5cclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXRle1xyXG5cclxuICBjb25zdHJ1Y3RvcihudW1wYW4sIHRpbWVwYW4pIHtcclxuICAgIGNvbnNvbGUubG9nKFV0aWwpO1xyXG4gICAgdGhpcy5udW1QYW4gPSBudW1wYW5cclxuICAgIHRoaXMudGltZVBhbiA9IHRpbWVwYW47XHJcbiAgICB0aGlzLm51bVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoaXMubnVtUGFuKTtcclxuICAgIHRoaXMudGltZVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoaXMudGltZVBhbik7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLm5leHRUaW1lID0gMDtcclxuICAgIHRoaXMuaW5pdCgpOyAgXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5uZXh0VGltZSA9IHRoaXMudGltZVBhbi5nZXRWYWx1ZSgpOyBcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKHRpbWUpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5zdGFydFRpbWUgPj0gdGhpcy5uZXh0VGltZSkge1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICAgIHRoaXMubmV4dFRpbWUgPSB0aGlzLnRpbWVQYW4uZ2V0VmFsdWUoKTtcclxuICAgICAgaWYgKHRoaXMubnVtUGFuLmIgPT0gMSkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bVBhbi5nZXRWYWx1ZShmYWxzZSkgPiAwLjUpXHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1QYW4uZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL1JhdGUuanMiLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlV0aWxcclxuICAgICAqIEBtZXRob2QgaW5pdFZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgYSBzcGVjaWZpYyB2YWx1ZSwgY291bGQgYmUgZXZlcnl0aGluZyBidXQgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IGRlZmF1bHRzIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBpbml0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBkZWZhdWx0cykge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCkgPyB2YWx1ZSA6IGRlZmF1bHRzO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBWZWN0b3IyRCAtIG9yIGNyZWF0ZXMgYSBuZXcgb25lXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxyXG4gICAgICogQG1ldGhvZCBnZXRWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEIHwgTnVtYmVyfSBwb3N0aW9uT3JYXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ldIGp1c3QgdmFsaWQgaWYgJ3Bvc3Rpb25PclgnIGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtQcm90b24uVmVjdG9yMkR9XHJcbiAgICAgKi9cclxuICAgIGdldFZlY3RvcjJEOiBmdW5jdGlvbihwb3N0aW9uT3JYLCB5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihwb3N0aW9uT3JYKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGlvbk9yWDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdmVjdG9yMmQgPSBuZXcgVmVjdG9yMkQocG9zdGlvbk9yWCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3IyZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxyXG4gICAgICogQG1ldGhvZCBqdWRnZVZlY3RvcjJEXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgcE9CSmBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgZnVuY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcE9CSlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIGp1ZGdlVmVjdG9yMkQ6IGZ1bmN0aW9uKHBPQkopIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3gnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd5JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgncCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3Bvc2l0aW9uJykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAncCc7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3Z4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndngnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndmVsb2NpdHknKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICd2JztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdheCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2EnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdhY2NlbGVyYXRlJykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAnYSc7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxyXG4gICAgICogQG1ldGhvZCBzZXRWZWN0b3IyREJ5T2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgdGFyZ2V0YFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgcE9CSmBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgZnVuY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcE9CSlxyXG4gICAgICovXHJcbiAgICBzZXRWZWN0b3IyREJ5T2JqZWN0OiBmdW5jdGlvbih0YXJnZXQsIHBPQkopIHtcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgneCcpKVxyXG4gICAgICAgICAgICB0YXJnZXQucC54ID0gcE9CSlsneCddO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgneScpKVxyXG4gICAgICAgICAgICB0YXJnZXQucC55ID0gcE9CSlsneSddO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgndngnKSlcclxuICAgICAgICAgICAgdGFyZ2V0LnYueCA9IHBPQkpbJ3Z4J107XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2eScpKVxyXG4gICAgICAgICAgICB0YXJnZXQudi55ID0gcE9CSlsndnknXTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykpXHJcbiAgICAgICAgICAgIHRhcmdldC5hLnggPSBwT0JKWydheCddO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXknKSlcclxuICAgICAgICAgICAgdGFyZ2V0LmEueSA9IHBPQkpbJ2F5J107XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdwJykpXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnAuY29weShwT0JKWydwJ10pO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgndicpKVxyXG4gICAgICAgICAgICBwYXJ0aWNsZS52LmNvcHkocE9CSlsndiddKTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2EnKSlcclxuICAgICAgICAgICAgcGFydGljbGUuYS5jb3B5KHBPQkpbJ2EnXSk7XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdwb3NpdGlvbicpKVxyXG4gICAgICAgICAgICBwYXJ0aWNsZS5wLmNvcHkocE9CSlsncG9zaXRpb24nXSk7XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2ZWxvY2l0eScpKVxyXG4gICAgICAgICAgICBwYXJ0aWNsZS52LmNvcHkocE9CSlsndmVsb2NpdHknXSk7XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdhY2NlbGVyYXRlJykpXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLmEuY29weShwT0JKWydhY2NlbGVyYXRlJ10pO1xyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBQcm90b24uU3BhbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFNwYW5WYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGEsIGIgYW5kIGMgc2hvdWxkIGJlICdNaXhlZCcgb3IgJ051bWJlcic/XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZCB8IFByb3Rvbi5TcGFufSBhXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGJcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9ICAgICAgICAgICAgICAgY1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1Byb3Rvbi5TcGFufVxyXG4gICAgICovXHJcbiAgICBzZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIFNwYW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhLCBiLCBjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIGEgUHJvdG9uLlNwYW4sIGlmIHRoZSBwYXJhbSBpcyBub3QgYSBQcm90b24uU3BhbiBpdCB3aWxsIHJldHVybiB0aGUgZ2l2ZW4gcGFyYW1ldGVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxyXG4gICAgICogQG1ldGhvZCBnZXRTcGFuVmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUHJvdG9uLlNwYW59IHBhblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge01peGVkfSB0aGUgdmFsdWUgb2YgUHJvdG9uLlNwYW4gT1IgdGhlIHBhcmFtZXRlciBpZiBpdCBpcyBub3QgYSBQcm90b24uU3BhblxyXG4gICAgICovXHJcbiAgICBnZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKHBhbikge1xyXG4gICAgICAgIGlmIChwYW4gaW5zdGFuY2VvZiBTcGFuKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuLmdldFZhbHVlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlZGVmICB7T2JqZWN0fSByZ2JPYmplY3RcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByIHJlZCB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGcgZ3JlZW4gdmFsdWVcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBiIGJsdWUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIHJnYiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGhleFRvUkdCXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGggYW55IGhleCB2YWx1ZSwgZS5nLiAjMDAwMDAwIG9yIDAwMDAwMCBmb3IgYmxhY2tcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtyZ2JPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGhleFRvUkdCOiBmdW5jdGlvbihoKSB7XHJcbiAgICAgICAgdmFyIGhleDE2ID0gKGguY2hhckF0KDApID09IFwiI1wiKSA/IGguc3Vic3RyaW5nKDEsIDcpIDogaDtcclxuICAgICAgICB2YXIgciA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygwLCAyKSwgMTYpO1xyXG4gICAgICAgIHZhciBnID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDIsIDQpLCAxNik7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoNCwgNiksIDE2KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogcixcclxuICAgICAgICAgICAgZzogZyxcclxuICAgICAgICAgICAgYjogYlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIHJnYiB2YWx1ZSB0byBhIHJnYiBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHJnYlRvSGV4XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3QgfCBQcm90b24uaGV4VG9SR0J9IHJnYiBhIHJnYiBvYmplY3QgbGlrZSBpbiB7QGxpbmsgUHJvdG9uI1Byb3Rvbi5VdGlsLmhleFRvUkdCfVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmdiKClcclxuICAgICAqL1xyXG4gICAgcmdiVG9IZXg6IGZ1bmN0aW9uKHJiZykge1xyXG4gICAgICAgIHJldHVybiAncmdiKCcgKyByYmcuciArICcsICcgKyByYmcuZyArICcsICcgKyByYmcuYiArICcpJztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1V0aWwuanMiLCJpbXBvcnQgeyBFVUxFUiB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1lcmljYWxJbnRlZ3JhdGlvbiB7XG5cbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgRVVMRVI7XG4gIH1cblxuICBpbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcbiAgICB0aGlzLmV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKTtcbiAgfVxuXG4gIGV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKSB7XG4gICAgaWYgKCFwYXJ0aWNsZS5zbGVlcCkge1xuICAgICAgcGFydGljbGUub2xkLnAuY29weShwYXJ0aWNsZS5wKTtcbiAgICAgIHBhcnRpY2xlLm9sZC52LmNvcHkocGFydGljbGUudik7XG4gICAgICBwYXJ0aWNsZS5hLm11bHRpcGx5U2NhbGFyKDEgLyBwYXJ0aWNsZS5tYXNzKTtcbiAgICAgIHBhcnRpY2xlLnYuYWRkKHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIodGltZSkpO1xuICAgICAgcGFydGljbGUucC5hZGQocGFydGljbGUub2xkLnYubXVsdGlwbHlTY2FsYXIodGltZSkpO1xuICAgICAgaWYgKGRhbXBpbmcpe1xuICAgICAgICBwYXJ0aWNsZS52Lm11bHRpcGx5U2NhbGFyKGRhbXBpbmcpO1xuICAgICAgfVxuICAgICAgcGFydGljbGUuYS5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgeyBkZWdyZWVUcmFuc2Zvcm0gfSBmcm9tICcuLi9tYXRoL01hdGhVdGlscyc7XHJcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemVzKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gaW5pdGlhbGl6ZXMubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChpbml0aWFsaXplc1tpXSBpbnN0YW5jZW9mIEluaXRpYWxpemUpe1xyXG4gICAgICBpbml0aWFsaXplc1tpXS5pbml0KGVtaXR0ZXIsIHBhcnRpY2xlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXQoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXQoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemUpe1xyXG4gIFV0aWwuc2V0UHJvdG90eXBlQnlPYmplY3QocGFydGljbGUsIGluaXRpYWxpemUpO1xyXG4gIFV0aWwuc2V0VmVjdG9yMkRCeU9iamVjdChwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcbiAgaWYgKGVtaXR0ZXIuYmluZEVtaXR0ZXIpIHtcclxuICAgIHBhcnRpY2xlLnAuYWRkKGVtaXR0ZXIucCk7XHJcbiAgICBwYXJ0aWNsZS52LmFkZChlbWl0dGVyLnYpO1xyXG4gICAgcGFydGljbGUuYS5hZGQoZW1pdHRlci5hKTtcclxuICAgIHBhcnRpY2xlLnYucm90YXRlKGRlZ3JlZVRyYW5zZm9ybShlbWl0dGVyLnJvdGF0aW9uKSk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRyZXNldCgpIHtcclxuXHJcblx0fVxyXG5cclxuXHRpbml0KGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcblx0XHRpZiAocGFydGljbGUpIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsaXplKHBhcnRpY2xlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShlbWl0dGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKSB7XHJcblxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUFUb0IoYSwgYiwgSU5UKSB7XHJcbiAgaWYgKCFJTlQpXHJcbiAgICByZXR1cm4gYSArIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhKSkgKyBhO1xyXG59XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0aW5nKGNlbnRlciwgZiwgSU5UKSB7XHJcbiAgcmV0dXJuIE1hdGhVdGlscy5yYW5kb21BVG9CKGNlbnRlciAtIGYsIGNlbnRlciArIGYsIElOVCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUcmFuc2Zvcm0oYSkge1xyXG4gIHJldHVybiBhICogTWF0aC5QSSAvIDE4MDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL01hdGhVdGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=