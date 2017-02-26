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
	exports.Span = undefined;
	
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
	
	var _initialize = __webpack_require__(14);
	
	Object.keys(_initialize).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _initialize[key];
	        }
	    });
	});
	exports.getSpan = getSpan;
	
	var _Span = __webpack_require__(8);
	
	var _Span2 = _interopRequireDefault(_Span);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getSpan(a, b, center) {
	    return new _Span2.default(a, b, center);
	}
	
	exports.Span = _Span2.default;
	
	
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
	
	var _NumericalIntegration = __webpack_require__(10);
	
	var _NumericalIntegration2 = _interopRequireDefault(_NumericalIntegration);
	
	var _const = __webpack_require__(2);
	
	var _InitializeUtil = __webpack_require__(11);
	
	var _InitializeUtil2 = _interopRequireDefault(_InitializeUtil);
	
	var _miniSignals = __webpack_require__(13);
	
	var _miniSignals2 = _interopRequireDefault(_miniSignals);
	
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
	     * @type {Quark.Rate}
	     * @default Quark.Rate(1, .1)
	     */
	    _this.rate = new _Rate2.default(1, .1);
	
	    _this.integrator = new _NumericalIntegration2.default();
	    return _this;
	  }
	
	  _createClass(Emitter, [{
	    key: 'emit',
	    value: function emit(emitTime, life) {
	      this.emitTime = 0;
	      this.emitTotalTimes = emitTime || Infinity;
	
	      if (!isNaN(life)) {
	        this.life = life;
	      }
	
	      this.rate.init();
	
	      this.particleCreated = new _miniSignals2.default();
	      this.particleUpdate = new _miniSignals2.default();
	      this.particleDead = new _miniSignals2.default();
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
	      // this.dispatchEvent(PARTICLE_CREATED, particle);
	      // this.dispatch(PARTICLE_CREATED, particle);
	      this.particleCreated.dispatch(particle);
	
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
	     * @param {Quark.Initialize} initialize like this new Quark.Radius(1, 12)
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
	     * @param {Quark.Initialize} initialize a initialize
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
	     * @param {Quark.Behaviour} behaviour like this new Quark.Color('random')
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
	     * @param {Quark.Behaviour} behaviour a behaviour
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
	
	        // this.dispatchEvent(PARTICLE_UPDATE, particle);
	        // this.dispatch(PARTICLE_UPDATE, particle);
	
	        this.particleUpdate.dispatch(particle);
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
	          // this.dispatchEvent(PARTICLE_DEAD , particle);
	          // this.dispatch(PARTICLE_DEAD , particle);
	          this.particleDead.dispatch(particle);
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
	      (0, _InitializeUtil2.default)(this, particle, initializes);
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
	      this.easing = function (val) {
	        return val;
	      };
	      this.transform = {};
	      if (init) {
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
	        // delete this.transform;
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
	
	var _Span = __webpack_require__(8);
	
	var _Span2 = _interopRequireDefault(_Span);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    /**
	     * Returns the default if the value is null or undefined
	     *
	     * @memberof Quark#Quark.Util
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
	     * @memberof Quark#Quark.Util
	     * @method getVector2D
	     *
	     * @param {Quark.Vector2D | Number} postionOrX
	     * @param {Number} [y] just valid if 'postionOrX' is not an object
	     *
	     * @return {Quark.Vector2D}
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
	     * @memberof Quark#Quark.Util
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
	     * @memberof Quark#Quark.Util
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
	     * Returns a new Quark.Span object
	     *
	     * @memberof Quark#Quark.Util
	     * @method setSpanValue
	     *
	     * @todo a, b and c should be 'Mixed' or 'Number'?
	     *
	     * @param {Mixed | Quark.Span} a
	     * @param {Mixed}               b
	     * @param {Mixed}               c
	     *
	     * @return {Quark.Span}
	     */
	    setSpanValue: function setSpanValue(a, b, c) {
	        if (a instanceof _Span2.default) {
	            return a;
	        } else {
	            if (!b) {
	                return new _Span2.default(a);
	            } else {
	                if (!c) return new _Span2.default(a, b);else return new _Span2.default(a, b, c);
	            }
	        }
	    },
	
	    /**
	     * Returns the value from a Quark.Span, if the param is not a Quark.Span it will return the given parameter
	     *
	     * @memberof Quark#Quark.Util
	     * @method getSpanValue
	     *
	     * @param {Mixed | Quark.Span} pan
	     *
	     * @return {Mixed} the value of Quark.Span OR the parameter if it is not a Quark.Span
	     */
	    getSpanValue: function getSpanValue(pan) {
	        if (pan instanceof _Span2.default) return pan.getValue();else return pan;
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
	     * @memberof Quark#Quark.Util
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
	     * @memberof Quark#Quark.Util
	     * @method rgbToHex
	     *
	     * @param {Object | Quark.hexToRGB} rgb a rgb object like in {@link Quark#Quark.Util.hexToRGB}
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
	
	var _MathUtils = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Span = function () {
		function Span(a, b) {
			var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
			_classCallCheck(this, Span);
	
			if (Array.isArray(a)) {
				this.isArray = true;
				this.a = a;
			} else {
				this.a = a;
				this.b = b || this.a;
				this.center = center;
			}
		}
	
		_createClass(Span, [{
			key: 'getValue',
			value: function getValue(INT) {
				if (this.isArray) {
					return this.a[Math.floor(this.a.length * Math.random())];
				} else {
					if (!this.center) return (0, _MathUtils.randomAToB)(this.a, this.b, INT);else return (0, _MathUtils.randomFloating)(this.a, this.b, INT);
				}
			}
		}]);
	
		return Span;
	}();
	
	exports.default = Span;

/***/ },
/* 9 */
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

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initialize;
	
	var _Initialize = __webpack_require__(12);
	
	var _Initialize2 = _interopRequireDefault(_Initialize);
	
	var _MathUtils = __webpack_require__(9);
	
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
/* 12 */
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
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MiniSignalBinding = (function () {
	  function MiniSignalBinding(fn, once, thisArg) {
	    if (once === undefined) once = false;
	
	    _classCallCheck(this, MiniSignalBinding);
	
	    this._fn = fn;
	    this._once = once;
	    this._thisArg = thisArg;
	    this._next = this._prev = this._owner = null;
	  }
	
	  _createClass(MiniSignalBinding, [{
	    key: 'detach',
	    value: function detach() {
	      if (this._owner === null) return false;
	      this._owner.detach(this);
	      return true;
	    }
	  }]);
	
	  return MiniSignalBinding;
	})();
	
	function _addMiniSignalBinding(self, node) {
	  if (!self._head) {
	    self._head = node;
	    self._tail = node;
	  } else {
	    self._tail._next = node;
	    node._prev = self._tail;
	    self._tail = node;
	  }
	
	  node._owner = self;
	
	  return node;
	}
	
	var MiniSignal = (function () {
	  function MiniSignal() {
	    _classCallCheck(this, MiniSignal);
	
	    this._head = this._tail = undefined;
	  }
	
	  _createClass(MiniSignal, [{
	    key: 'handlers',
	    value: function handlers() {
	      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	      var node = this._head;
	
	      if (exists) return !!node;
	
	      var ee = [];
	
	      while (node) {
	        ee.push(node);
	        node = node._next;
	      }
	
	      return ee;
	    }
	  }, {
	    key: 'has',
	    value: function has(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
	      }
	
	      return node._owner === this;
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch() {
	      var node = this._head;
	
	      if (!node) return false;
	
	      while (node) {
	        if (node._once) this.detach(node);
	        node._fn.apply(node._thisArg, arguments);
	        node = node._next;
	      }
	
	      return true;
	    }
	  }, {
	    key: 'add',
	    value: function add(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#add(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
	    }
	  }, {
	    key: 'once',
	    value: function once(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#once(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
	    }
	  }, {
	    key: 'detach',
	    value: function detach(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
	      }
	      if (node._owner !== this) return this;
	
	      if (node._prev) node._prev._next = node._next;
	      if (node._next) node._next._prev = node._prev;
	
	      if (node === this._head) {
	        this._head = node._next;
	        if (node._next === null) {
	          this._tail = null;
	        }
	      } else if (node === this._tail) {
	        this._tail = node._prev;
	        this._tail._next = null;
	      }
	
	      node._owner = null;
	      return this;
	    }
	  }, {
	    key: 'detachAll',
	    value: function detachAll() {
	      var node = this._head;
	      if (!node) return this;
	
	      this._head = this._tail = null;
	
	      while (node) {
	        node._owner = null;
	        node = node._next;
	      }
	      return this;
	    }
	  }]);
	
	  return MiniSignal;
	})();
	
	MiniSignal.MiniSignalBinding = MiniSignalBinding;
	
	exports['default'] = MiniSignal;
	module.exports = exports['default'];


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Velocity = exports.Rate = undefined;
	
	var _Rate = __webpack_require__(6);
	
	var _Rate2 = _interopRequireDefault(_Rate);
	
	var _Velocity = __webpack_require__(15);
	
	var _Velocity2 = _interopRequireDefault(_Velocity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Rate = _Rate2.default;
	exports.Velocity = _Velocity2.default;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _const = __webpack_require__(2);
	
	var _Polar2D = __webpack_require__(16);
	
	var _Polar2D2 = _interopRequireDefault(_Polar2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Velocity = function (_Initialize) {
		_inherits(Velocity, _Initialize);
	
		function Velocity(rpan, thapan, type) {
			_classCallCheck(this, Velocity);
	
			var _this = _possibleConstructorReturn(this, (Velocity.__proto__ || Object.getPrototypeOf(Velocity)).call(this));
	
			_this.rPan = _Util2.default.setSpanValue(rpan);
			_this.thaPan = _Util2.default.setSpanValue(thapan);
			_this.type = _Util2.default.initValue(type, 'vector');
			return _this;
		}
	
		_createClass(Velocity, [{
			key: 'reset',
			value: function reset(rpan, thapan, type) {
				this.rPan = _Util2.default.setSpanValue(rpan);
				this.thaPan = _Util2.default.setSpanValue(thapan);
				this.type = _Util2.default.initValue(type, 'vector');
			}
		}, {
			key: 'normalizeVelocity',
			value: function normalizeVelocity(vr) {
				return vr * _const.MEASURE;
			}
		}, {
			key: 'initialize',
			value: function initialize(target) {
				if (this.type == 'p' || this.type == 'P' || this.type == 'polar') {
					var polar2d = new _Polar2D2.default(this.normalizeVelocity(this.rPan.getValue()), this.thaPan.getValue() * Math.PI / 180);
					target.v.x = polar2d.getX();
					target.v.y = polar2d.getY();
				} else {
					target.v.x = this.normalizeVelocity(this.rPan.getValue());
					target.v.y = this.normalizeVelocity(this.thaPan.getValue());
				}
			}
		}]);
	
		return Velocity;
	}(_Initialize3.default);
	
	exports.default = Velocity;

/***/ },
/* 16 */
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
	
	var Polar2D = function () {
		function Polar2D(r, tha) {
			_classCallCheck(this, Polar2D);
	
			this.r = Math.abs(r) || 0;
			this.tha = tha || 0;
		}
	
		_createClass(Polar2D, [{
			key: 'set',
			value: function set(r, tha) {
	
				this.r = r;
				this.tha = tha;
				return this;
			}
		}, {
			key: 'setR',
			value: function setR(r) {
	
				this.r = r;
				return this;
			}
		}, {
			key: 'setTha',
			value: function setTha(tha) {
	
				this.tha = tha;
	
				return this;
			}
		}, {
			key: 'copy',
			value: function copy(p) {
	
				this.r = p.r;
				this.tha = p.tha;
	
				return this;
			}
		}, {
			key: 'toVector',
			value: function toVector() {
				return new _Vector2D2.default(this.getX(), this.getY());
			}
		}, {
			key: 'getX',
			value: function getX() {
				return this.r * Math.sin(this.tha);
			}
		}, {
			key: 'getY',
			value: function getY() {
				return -this.r * Math.cos(this.tha);
			}
		}, {
			key: 'normalize',
			value: function normalize() {
	
				this.r = 1;
				return this;
			}
		}, {
			key: 'equals',
			value: function equals(v) {
	
				return v.r === this.r && v.tha === this.tha;
			}
		}, {
			key: 'toArray',
			value: function toArray() {
	
				return [this.r, this.tha];
			}
		}, {
			key: 'clear',
			value: function clear() {
				this.r = 0.0;
				this.tha = 0.0;
				return this;
			}
		}, {
			key: 'clone',
			value: function clone() {
	
				return new Polar2D(this.r, this.tha);
			}
		}]);
	
		return Polar2D;
	}();
	
	exports.default = Polar2D;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlN2QwYzBmZmZiN2YyOWMyZjdhYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvU3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21pbmktc2lnbmFscy9saWIvbWluaS1zaWduYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1BvbGFyMkQuanMiXSwibmFtZXMiOlsiZ2V0U3BhbiIsImEiLCJiIiwiY2VudGVyIiwiU3BhbiIsImdsb2JhbCIsIlF1YXJrIiwiZXhwb3J0cyIsIkVtaXR0ZXIiLCJQT09MX01BWCIsIlRJTUVfU1RFUCIsIlVTRV9DTE9DSyIsIk1FQVNVUkUiLCJFVUxFUiIsIlJLMiIsIlJLNCIsIlZFUkxFVCIsIlBBUlRJQ0xFX0NSRUFURUQiLCJQQVJUSUNMRV9VUERBVEUiLCJQQVJUSUNMRV9TTEVFUCIsIlBBUlRJQ0xFX0RFQUQiLCJFTUlUVEVSX0FEREVEIiwiRU1JVFRFUl9SRU1PVkVEIiwiaW5pdGlhbGl6ZXMiLCJwYXJ0aWNsZXMiLCJiZWhhdmlvdXJzIiwiZW1pdFRpbWUiLCJlbWl0VG90YWxUaW1lcyIsImRhbXBpbmciLCJiaW5kRW1pdHRlciIsInJhdGUiLCJpbnRlZ3JhdG9yIiwibGlmZSIsIkluZmluaXR5IiwiaXNOYU4iLCJpbml0IiwicGFydGljbGVDcmVhdGVkIiwicGFydGljbGVVcGRhdGUiLCJwYXJ0aWNsZURlYWQiLCJpIiwibGVuZ3RoIiwiZGVhZCIsImluaXRpYWxpemUiLCJiZWhhdmlvdXIiLCJwYXJ0aWNsZSIsInNldHVwUGFydGljbGUiLCJkaXNwYXRjaCIsInBPYmoiLCJpbml0QWxsIiwiYXJndW1lbnRzIiwicHVzaCIsImluaXRpYWxpemVyIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJwYXJlbnRzIiwidGltZSIsImludGVncmF0ZSIsInVwZGF0ZSIsImdldFZhbHVlIiwiY3JlYXRlUGFydGljbGUiLCJhZ2UiLCJkZXN0cm95IiwiZW1pdHRpbmciLCJrIiwiQXJyYXkiLCJyZXNldCIsImFkZEJlaGF2aW91cnMiLCJwYXJlbnQiLCJyZW1vdmVJbml0aWFsaXplcnMiLCJyZW1vdmVBbGxCZWhhdmlvdXJzIiwicmVtb3ZlRW1pdHRlciIsInVpZCIsIlBhcnRpY2xlIiwiaWQiLCJNYXRoIiwiYXRhbjIiLCJ2IiwieCIsInkiLCJQSSIsImVuZXJneSIsInNsZWVwIiwidGFyZ2V0Iiwic3ByaXRlIiwibWFzcyIsInJhZGl1cyIsImFscGhhIiwic2NhbGUiLCJyb3RhdGlvbiIsImNvbG9yIiwiZWFzaW5nIiwidmFsIiwidHJhbnNmb3JtIiwicCIsIm9sZCIsInNldCIsInJnYiIsInIiLCJnIiwiYXBwbHlCZWhhdmlvdXIiLCJtYXgiLCJhZGRCZWhhdmlvdXIiLCJWZWN0b3IyRCIsInZhbHVlIiwiRXJyb3IiLCJ3IiwidW5kZWZpbmVkIiwiYWRkVmVjdG9ycyIsInMiLCJzdWJWZWN0b3JzIiwibWluIiwibXVsdGlwbHlTY2FsYXIiLCJzcXJ0IiwiZGl2aWRlU2NhbGFyIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJ0aGEiLCJjb3MiLCJzaW4iLCJkeCIsImR5IiwibCIsIm9sZExlbmd0aCIsIlJhdGUiLCJudW1wYW4iLCJ0aW1lcGFuIiwibnVtUGFuIiwidGltZVBhbiIsInNldFNwYW5WYWx1ZSIsInN0YXJ0VGltZSIsIm5leHRUaW1lIiwiaW5pdFZhbHVlIiwiZGVmYXVsdHMiLCJnZXRWZWN0b3IyRCIsInBvc3Rpb25PclgiLCJ2ZWN0b3IyZCIsImp1ZGdlVmVjdG9yMkQiLCJwT0JKIiwicmVzdWx0Iiwic2V0VmVjdG9yMkRCeU9iamVjdCIsImNvcHkiLCJjIiwiZ2V0U3BhblZhbHVlIiwicGFuIiwiaGV4VG9SR0IiLCJoIiwiaGV4MTYiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJwYXJzZUludCIsInJnYlRvSGV4IiwicmJnIiwiaXNBcnJheSIsIklOVCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQVRvQiIsInJhbmRvbUZsb2F0aW5nIiwiZGVncmVlVHJhbnNmb3JtIiwiZiIsIk1hdGhVdGlscyIsIk51bWVyaWNhbEludGVncmF0aW9uIiwidHlwZSIsImV1bGVySW50ZWdyYXRlIiwiYWRkIiwiY2xlYXIiLCJVdGlsIiwiZW1pdHRlciIsInNldFByb3RvdHlwZUJ5T2JqZWN0Iiwicm90YXRlIiwiSW5pdGlhbGl6ZSIsIlZlbG9jaXR5IiwicnBhbiIsInRoYXBhbiIsInJQYW4iLCJ0aGFQYW4iLCJ2ciIsInBvbGFyMmQiLCJub3JtYWxpemVWZWxvY2l0eSIsImdldFgiLCJnZXRZIiwiUG9sYXIyRCIsImFicyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtTQUdnQkEsTyxHQUFBQSxPOztBQUZoQjs7Ozs7O0FBRU8sVUFBU0EsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCQyxNQUF2QixFQUErQjtBQUNsQyxZQUFPLG1CQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsTUFBZixDQUFQO0FBQ0g7O1NBRVFDLEk7OztBQUVUQyxRQUFPQyxLQUFQLEdBQWVDLE9BQWYsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTs7Ozs7O1NBRVFDLE87Ozs7Ozs7Ozs7O0FDSkQsS0FBTUMsOEJBQVcsSUFBakI7QUFDQSxLQUFNQyxnQ0FBWSxFQUFsQjtBQUNBLEtBQU1DLGdDQUFZLEtBQWxCO0FBQ0EsS0FBTUMsNEJBQVUsR0FBaEI7QUFDQSxLQUFNQyx3QkFBUSxPQUFkO0FBQ0EsS0FBTUMsb0JBQU0sY0FBWjtBQUNBLEtBQU1DLG9CQUFNLGNBQVo7QUFDQSxLQUFNQywwQkFBUyxRQUFmO0FBQ0EsS0FBTUMsOENBQW1CLGtCQUF6QjtBQUNBLEtBQU1DLDRDQUFrQixpQkFBeEI7QUFDQSxLQUFNQywwQ0FBaUIsZUFBdkI7QUFDQSxLQUFNQyx3Q0FBZ0IsZUFBdEI7QUFDQSxLQUFNQyx3Q0FBZ0IsY0FBdEI7QUFDQSxLQUFNQyw0Q0FBa0IsZ0JBQXhCLEM7Ozs7Ozs7Ozs7Ozs7O0FDYlA7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCZCxPOzs7QUFDbkIsc0JBQWM7QUFBQTs7QUFBQTs7QUFHWixXQUFLZSxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUFDLENBQXZCO0FBQ0E7Ozs7OztBQU1BLFdBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7Ozs7OztBQU1BLFdBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQTs7Ozs7O0FBTUEsV0FBS0MsSUFBTCxHQUFZLG1CQUFTLENBQVQsRUFBWSxFQUFaLENBQVo7O0FBRUEsV0FBS0MsVUFBTCxHQUFrQixvQ0FBbEI7QUE5Qlk7QUErQmI7Ozs7MEJBRUlMLFEsRUFBVU0sSSxFQUFNO0FBQ25CLFlBQUtOLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxZQUFLQyxjQUFMLEdBQXNCRCxZQUFZTyxRQUFsQzs7QUFFQSxXQUFHLENBQUNDLE1BQU1GLElBQU4sQ0FBSixFQUFpQjtBQUNmLGNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOztBQUVELFlBQUtGLElBQUwsQ0FBVUssSUFBVjs7QUFFQSxZQUFLQyxlQUFMLEdBQXVCLDJCQUF2QjtBQUNBLFlBQUtDLGNBQUwsR0FBc0IsMkJBQXRCO0FBQ0EsWUFBS0MsWUFBTCxHQUFvQiwyQkFBcEI7QUFDRDs7QUFFRDs7Ozs7OztnQ0FJVztBQUNULFlBQUtYLGNBQUwsR0FBc0IsQ0FBQyxDQUF2QjtBQUNBLFlBQUtELFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRDs7QUFFRDs7Ozs7OzswQ0FJcUI7QUFDbkIsWUFBSyxJQUFJYSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2YsU0FBTCxDQUFlZ0IsTUFBbkMsRUFBMkNELEdBQTNDO0FBQ0UsY0FBS2YsU0FBTCxDQUFlZSxDQUFmLEVBQWtCRSxJQUFsQixHQUF5QixJQUF6QjtBQURGO0FBRUQ7O0FBRUQ7Ozs7Ozs7OztvQ0FNZUMsVSxFQUFZQyxTLEVBQVc7QUFDcEMsV0FBTUMsV0FBVyx3QkFBakI7QUFDQSxZQUFLQyxhQUFMLENBQW1CRCxRQUFuQixFQUE2QkYsVUFBN0IsRUFBeUNDLFNBQXpDO0FBQ0E7QUFDQTtBQUNBLFlBQUtQLGVBQUwsQ0FBcUJVLFFBQXJCLENBQThCRixRQUE5Qjs7QUFHQSxjQUFPQSxRQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7dUNBSWtCRyxJLEVBQU07QUFDdEIsV0FBSUEsS0FBSyxNQUFMLENBQUosRUFBa0I7QUFDaEJBLGNBQUtaLElBQUwsQ0FBVSxJQUFWO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsY0FBS2EsT0FBTDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7cUNBT2dCO0FBQ2QsV0FBTVIsU0FBU1MsVUFBVVQsTUFBekI7QUFDQSxZQUFLLElBQUlELElBQUksQ0FBYixFQUFnQkEsSUFBSUMsTUFBcEIsRUFBNEJELEdBQTVCLEVBQWlDO0FBQy9CLGNBQUtoQixXQUFMLENBQWlCMkIsSUFBakIsQ0FBc0JELFVBQVVWLENBQVYsQ0FBdEI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OztzQ0FLaUJZLFcsRUFBYTtBQUM1QixXQUFNQyxRQUFRLEtBQUs3QixXQUFMLENBQWlCOEIsT0FBakIsQ0FBeUJGLFdBQXpCLENBQWQ7QUFDQSxXQUFJQyxRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNkLGNBQUs3QixXQUFMLENBQWlCK0IsTUFBakIsQ0FBd0JGLEtBQXhCLEVBQStCLENBQS9CO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7OzswQ0FJcUI7QUFDbkIsWUFBSzdCLFdBQUwsQ0FBaUJpQixNQUFqQixHQUEwQixDQUExQjtBQUNEOztBQUVEOzs7Ozs7Ozs7O29DQU9lO0FBQ2IsV0FBTUEsU0FBU1MsVUFBVVQsTUFBekI7QUFDQSxZQUFLLElBQUlELElBQUksQ0FBYixFQUFnQkEsSUFBSUMsTUFBcEIsRUFBNEJELEdBQTVCLEVBQWlDO0FBQy9CLGNBQUtkLFVBQUwsQ0FBZ0J5QixJQUFoQixDQUFxQkQsVUFBVVYsQ0FBVixDQUFyQjtBQUNBLGFBQUlVLFVBQVVWLENBQVYsRUFBYWdCLGNBQWIsQ0FBNEIsU0FBNUIsQ0FBSixFQUNFTixVQUFVVixDQUFWLEVBQWFpQixPQUFiLENBQXFCTixJQUFyQixDQUEwQixJQUExQjtBQUNIO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O3FDQUtnQlAsUyxFQUFXO0FBQ3pCLFdBQU1TLFFBQVEsS0FBSzNCLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QlYsU0FBeEIsQ0FBZDtBQUNBLFdBQUlTLFFBQVEsQ0FBQyxDQUFiLEVBQ0UsS0FBSzNCLFVBQUwsQ0FBZ0I2QixNQUFoQixDQUF1QkYsS0FBdkIsRUFBOEIsQ0FBOUI7QUFDSDs7QUFFRDs7Ozs7OzsyQ0FJc0I7QUFDcEIsWUFBSzNCLFVBQUwsQ0FBZ0JlLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0Q7OzsrQkFFU2lCLEksRUFBTTtBQUNkLFdBQU03QixVQUFVLElBQUksS0FBS0EsT0FBekI7QUFDQSxXQUFNWSxTQUFTLEtBQUtoQixTQUFMLENBQWVnQixNQUE5Qjs7QUFFQSxZQUFLVCxVQUFMLENBQWdCMkIsU0FBaEIsQ0FBMEIsSUFBMUIsRUFBZ0NELElBQWhDLEVBQXNDN0IsT0FBdEM7QUFDQSxZQUFLLElBQUlXLElBQUksQ0FBYixFQUFnQkEsSUFBSUMsTUFBcEIsRUFBNEJELEdBQTVCLEVBQWlDO0FBQy9CLGFBQUlLLFdBQVcsS0FBS3BCLFNBQUwsQ0FBZWUsQ0FBZixDQUFmO0FBQ0FLLGtCQUFTZSxNQUFULENBQWdCRixJQUFoQixFQUFzQmxCLENBQXRCO0FBQ0EsY0FBS1IsVUFBTCxDQUFnQjJCLFNBQWhCLENBQTBCZCxRQUExQixFQUFvQ2EsSUFBcEMsRUFBMEM3QixPQUExQzs7QUFFQTtBQUNBOztBQUVBLGNBQUtTLGNBQUwsQ0FBb0JTLFFBQXBCLENBQTZCRixRQUE3QjtBQUNEO0FBQ0Y7Ozs4QkFFUWEsSSxFQUFNO0FBQ2IsV0FBSSxLQUFLOUIsY0FBTCxJQUF1QixNQUEzQixFQUFtQztBQUNqQyxhQUFNYSxTQUFTLEtBQUtWLElBQUwsQ0FBVThCLFFBQVYsQ0FBbUIsS0FBbkIsQ0FBZjtBQUNBLGNBQUssSUFBSXJCLElBQUksQ0FBYixFQUFnQkEsSUFBSUMsTUFBcEIsRUFBNEJELEdBQTVCLEVBQWlDO0FBQy9CLGdCQUFLc0IsY0FBTDtBQUNEOztBQUVELGNBQUtsQyxjQUFMLEdBQXNCLE1BQXRCO0FBQ0QsUUFQRCxNQU9PLElBQUksQ0FBQ08sTUFBTSxLQUFLUCxjQUFYLENBQUwsRUFBaUM7QUFDdEMsY0FBS0QsUUFBTCxJQUFpQitCLElBQWpCO0FBQ0EsYUFBSSxLQUFLL0IsUUFBTCxHQUFnQixLQUFLQyxjQUF6QixFQUF5QztBQUN2QyxlQUFNYSxVQUFTLEtBQUtWLElBQUwsQ0FBVThCLFFBQVYsQ0FBbUJILElBQW5CLENBQWY7QUFDQSxnQkFBSyxJQUFJbEIsS0FBSSxDQUFiLEVBQWdCQSxLQUFJQyxPQUFwQixFQUE0QkQsSUFBNUIsRUFBaUM7QUFDL0Isa0JBQUtzQixjQUFMO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs0QkFFTUosSSxFQUFNO0FBQ1gsWUFBS0ssR0FBTCxJQUFZTCxJQUFaO0FBQ0EsV0FBSSxLQUFLSyxHQUFMLElBQVksS0FBSzlCLElBQWpCLElBQXlCLEtBQUtTLElBQWxDLEVBQXdDO0FBQ3RDLGNBQUtzQixPQUFMO0FBQ0Q7O0FBRUQsWUFBS0MsUUFBTCxDQUFjUCxJQUFkO0FBQ0EsWUFBS0MsU0FBTCxDQUFlRCxJQUFmO0FBQ0EsV0FBSWIsaUJBQUo7QUFDQSxXQUFNSixTQUFTLEtBQUtoQixTQUFMLENBQWVnQixNQUE5QjtBQUNBLFlBQUssSUFBSXlCLElBQUl6QixTQUFTLENBQXRCLEVBQXlCeUIsS0FBSyxDQUE5QixFQUFpQ0EsR0FBakMsRUFBc0M7QUFDcENyQixvQkFBVyxLQUFLcEIsU0FBTCxDQUFleUMsQ0FBZixDQUFYO0FBQ0EsYUFBSXJCLFNBQVNILElBQWIsRUFBbUI7QUFDakI7QUFDQTtBQUNBLGdCQUFLSCxZQUFMLENBQWtCUSxRQUFsQixDQUEyQkYsUUFBM0I7QUFDQSxnQkFBS3BCLFNBQUwsQ0FBZThCLE1BQWYsQ0FBc0JXLENBQXRCLEVBQXlCLENBQXpCO0FBQ0Q7QUFDRjtBQUNGOzs7bUNBRWFyQixRLEVBQVVGLFUsRUFBWUMsUyxFQUFXO0FBQzdDLFdBQUlwQixjQUFjLEtBQUtBLFdBQXZCO0FBQ0EsV0FBSUUsYUFBYSxLQUFLQSxVQUF0Qjs7QUFFQSxXQUFJaUIsVUFBSixFQUFnQjtBQUNkLGFBQUtBLHNCQUFzQndCLEtBQTNCLEVBQ0UzQyxjQUFjbUIsVUFBZCxDQURGLEtBR0VuQixjQUFjLENBQUNtQixVQUFELENBQWQ7QUFDSDs7QUFFRCxXQUFJQyxTQUFKLEVBQWU7QUFDYixhQUFLQSxxQkFBcUJ1QixLQUExQixFQUNFekMsYUFBYWtCLFNBQWIsQ0FERixLQUdFbEIsYUFBYSxDQUFDa0IsU0FBRCxDQUFiO0FBQ0g7O0FBRURDLGdCQUFTdUIsS0FBVDtBQUNBLHFDQUFhLElBQWIsRUFBbUJ2QixRQUFuQixFQUE2QnJCLFdBQTdCO0FBQ0FxQixnQkFBU3dCLGFBQVQsQ0FBdUIzQyxVQUF2QjtBQUNBbUIsZ0JBQVN5QixNQUFULEdBQWtCLElBQWxCO0FBQ0EsWUFBSzdDLFNBQUwsQ0FBZTBCLElBQWYsQ0FBb0JOLFFBQXBCO0FBQ0Q7Ozs7O0FBRUQ7Ozs7K0JBSVU7QUFDUixZQUFLSCxJQUFMLEdBQVksSUFBWjtBQUNBLFlBQUtkLGNBQUwsR0FBc0IsQ0FBQyxDQUF2QjtBQUNBLFdBQUksS0FBS0gsU0FBTCxDQUFlZ0IsTUFBZixJQUF5QixDQUE3QixFQUFnQztBQUM5QixjQUFLOEIsa0JBQUw7QUFDQSxjQUFLQyxtQkFBTDs7QUFFQSxhQUFJLEtBQUtGLE1BQVQsRUFDRSxLQUFLQSxNQUFMLENBQVlHLGFBQVosQ0FBMEIsSUFBMUI7QUFDSDtBQUNGOzs7Ozs7bUJBclFrQmhFLE87Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7Ozs7OztBQUVBLEtBQUlpRSxNQUFNLENBQVY7O0tBRXFCQyxRO0FBQ2pCLHVCQUFjO0FBQUE7O0FBQ1osVUFBS0MsRUFBTCxHQUFVRixLQUFWO0FBQ0EsVUFBS04sS0FBTCxDQUFXLElBQVg7QUFDRDs7OztvQ0FFYztBQUNiLGNBQU9TLEtBQUtDLEtBQUwsQ0FBVyxLQUFLQyxDQUFMLENBQU9DLENBQWxCLEVBQXFCLENBQUMsS0FBS0QsQ0FBTCxDQUFPRSxDQUE3QixLQUFtQyxNQUFNSixLQUFLSyxFQUE5QyxDQUFQO0FBQ0Q7OzsyQkFFSzlDLEksRUFBTTtBQUNWLFlBQUtILElBQUwsR0FBWUMsUUFBWjtBQUNBLFlBQUs2QixHQUFMLEdBQVcsQ0FBWDtBQUNBLFlBQUtvQixNQUFMLEdBQWMsQ0FBZDtBQUNBLFlBQUt6QyxJQUFMLEdBQVksS0FBWjtBQUNBLFlBQUswQyxLQUFMLEdBQWEsS0FBYjtBQUNBLFlBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsWUFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxZQUFLaEIsTUFBTCxHQUFjLElBQWQ7QUFDQSxZQUFLaUIsSUFBTCxHQUFZLENBQVo7QUFDQSxZQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFlBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsWUFBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxZQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsWUFBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxZQUFLQyxNQUFMLEdBQWMsVUFBQ0MsR0FBRDtBQUFBLGdCQUFTQSxHQUFUO0FBQUEsUUFBZDtBQUNBLFlBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFJM0QsSUFBSixFQUFVO0FBQ1IsY0FBSzRELENBQUwsR0FBUyx3QkFBVDtBQUNBLGNBQUtqQixDQUFMLEdBQVMsd0JBQVQ7QUFDQSxjQUFLN0UsQ0FBTCxHQUFTLHdCQUFUO0FBQ0EsY0FBSytGLEdBQUwsR0FBVztBQUNURCxjQUFJLHdCQURLO0FBRVRqQixjQUFJLHdCQUZLO0FBR1Q3RSxjQUFJO0FBSEssVUFBWDtBQUtBLGNBQUt3QixVQUFMLEdBQWtCLEVBQWxCO0FBQ0QsUUFWRCxNQVVPO0FBQ0w7QUFDQSxjQUFLc0UsQ0FBTCxDQUFPRSxHQUFQLENBQVcsQ0FBWCxFQUFjLENBQWQ7QUFDQSxjQUFLbkIsQ0FBTCxDQUFPbUIsR0FBUCxDQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0EsY0FBS2hHLENBQUwsQ0FBT2dHLEdBQVAsQ0FBVyxDQUFYLEVBQWMsQ0FBZDtBQUNBLGNBQUtELEdBQUwsQ0FBU0QsQ0FBVCxDQUFXRSxHQUFYLENBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUNBLGNBQUtELEdBQUwsQ0FBU2xCLENBQVQsQ0FBV21CLEdBQVgsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0EsY0FBS0QsR0FBTCxDQUFTL0YsQ0FBVCxDQUFXZ0csR0FBWCxDQUFlLENBQWYsRUFBa0IsQ0FBbEI7QUFDQSxjQUFLMUIsbUJBQUw7QUFDRDs7QUFFRCxZQUFLdUIsU0FBTCxDQUFlSSxHQUFmLEdBQXFCO0FBQ25CQyxZQUFJLEdBRGU7QUFFbkJDLFlBQUksR0FGZTtBQUduQmxHLFlBQUk7QUFIZSxRQUFyQjtBQUtBLGNBQU8sSUFBUDtBQUNEOzs7NEJBRU11RCxJLEVBQU1MLEssRUFBTztBQUNsQixXQUFHLENBQUMsS0FBSytCLEtBQVQsRUFBZ0I7QUFDZCxjQUFLckIsR0FBTCxJQUFZTCxJQUFaO0FBQ0EsYUFBTWpCLFNBQVMsS0FBS2YsVUFBTCxDQUFnQmUsTUFBL0I7QUFDQSxhQUFJRCxVQUFKO0FBQ0EsY0FBTUEsSUFBSSxDQUFWLEVBQWFBLElBQUlDLE1BQWpCLEVBQXlCRCxHQUF6QixFQUE4QjtBQUM1QixlQUFJLEtBQUtkLFVBQUwsQ0FBZ0JjLENBQWhCLENBQUosRUFDRSxLQUFLZCxVQUFMLENBQWdCYyxDQUFoQixFQUFtQjhELGNBQW5CLENBQWtDLElBQWxDLEVBQXdDNUMsSUFBeEMsRUFBOENMLEtBQTlDO0FBQ0g7QUFDRixRQVJELE1BUU8sQ0FFTjs7QUFFRCxXQUFHLEtBQUtVLEdBQUwsSUFBWSxLQUFLOUIsSUFBcEIsRUFBMEI7QUFDeEIsY0FBSytCLE9BQUw7QUFDRCxRQUZELE1BRU87QUFDTCxhQUFNMEIsUUFBUSxLQUFLRyxNQUFMLENBQVksS0FBSzlCLEdBQUwsR0FBVyxLQUFLOUIsSUFBNUIsQ0FBZDtBQUNBLGNBQUtrRCxNQUFMLEdBQWNOLEtBQUswQixHQUFMLENBQVMsSUFBSWIsS0FBYixFQUFvQixDQUFwQixDQUFkO0FBQ0Q7QUFFRjs7O2tDQUVZOUMsUyxFQUFXO0FBQ3RCLFlBQUtsQixVQUFMLENBQWdCeUIsSUFBaEIsQ0FBcUJQLFNBQXJCO0FBQ0EsV0FBSUEsVUFBVVksY0FBVixDQUF5QixTQUF6QixDQUFKLEVBQXdDO0FBQ3RDWixtQkFBVWEsT0FBVixDQUFrQk4sSUFBbEIsQ0FBdUIsSUFBdkI7QUFDRDtBQUNEUCxpQkFBVUQsVUFBVixDQUFxQixJQUFyQjtBQUNEOzs7bUNBRWFqQixVLEVBQVk7QUFDeEIsV0FBSWUsU0FBU2YsV0FBV2UsTUFBeEI7QUFBQSxXQUFnQ0QsQ0FBaEM7QUFDQSxZQUFNQSxJQUFJLENBQVYsRUFBYUEsSUFBSUMsTUFBakIsRUFBeUJELEdBQXpCLEVBQThCO0FBQzVCLGNBQUtnRSxZQUFMLENBQWtCOUUsV0FBV2MsQ0FBWCxDQUFsQjtBQUNEO0FBQ0Y7OztxQ0FFZUksUyxFQUFXO0FBQ3pCLFdBQUlTLFFBQVEsS0FBSzNCLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QlYsU0FBeEIsQ0FBWjtBQUNBLFdBQUlTLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2QsYUFBSVQsWUFBWSxLQUFLbEIsVUFBTCxDQUFnQjZCLE1BQWhCLENBQXVCRixLQUF2QixFQUE4QixDQUE5QixDQUFoQjtBQUNBVCxtQkFBVWEsT0FBVixHQUFvQixJQUFwQjtBQUNEO0FBQ0Y7OzsyQ0FFcUI7QUFDcEIsWUFBSy9CLFVBQUwsQ0FBZ0JlLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7K0JBSVU7QUFDUixZQUFLK0IsbUJBQUw7QUFDQSxZQUFLVyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFlBQUt6QyxJQUFMLEdBQVksSUFBWjtBQUNBLFlBQUs0QixNQUFMLEdBQWMsSUFBZDtBQUNEOzs7Ozs7bUJBbEhnQkssUTs7Ozs7Ozs7Ozs7Ozs7OztLQ0hBOEIsUTtBQUVuQixxQkFBWXpCLENBQVosRUFBZUMsQ0FBZixFQUFpQjtBQUFBOztBQUNmLFVBQUtELENBQUwsR0FBU0EsS0FBSyxDQUFkO0FBQ0EsVUFBS0MsQ0FBTCxHQUFTQSxLQUFLLENBQWQ7QUFDRDs7Ozt5QkFFR0QsQyxFQUFHQyxDLEVBQUc7O0FBRVIsWUFBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsWUFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsY0FBTyxJQUFQO0FBRUQ7OzswQkFFSUQsQyxFQUFHOztBQUVOLFlBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNBLGNBQU8sSUFBUDtBQUVEOzs7MEJBRUlDLEMsRUFBRzs7QUFFTixZQUFLQSxDQUFMLEdBQVNBLENBQVQ7O0FBRUEsY0FBTyxJQUFQO0FBRUQ7OztrQ0FFWTVCLEssRUFBT3FELEssRUFBTzs7QUFFekIsZUFBU3JELEtBQVQ7O0FBRUUsY0FBSyxDQUFMO0FBQ0UsZ0JBQUsyQixDQUFMLEdBQVMwQixLQUFUO0FBQ0E7QUFDRixjQUFLLENBQUw7QUFDRSxnQkFBS3pCLENBQUwsR0FBU3lCLEtBQVQ7QUFDQTtBQUNGO0FBQ0UsaUJBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUE0QnRELEtBQXRDLENBQU47O0FBVEo7QUFhRDs7O21DQUVhO0FBQ1osV0FBSSxLQUFLMkIsQ0FBTCxJQUFVLENBQWQsRUFDRSxPQUFPSCxLQUFLQyxLQUFMLENBQVcsS0FBS0csQ0FBaEIsRUFBbUIsS0FBS0QsQ0FBeEIsQ0FBUCxDQURGLEtBRUssSUFBSSxLQUFLQyxDQUFMLEdBQVMsQ0FBYixFQUNILE9BQU9KLEtBQUtLLEVBQUwsR0FBVSxDQUFqQixDQURHLEtBRUEsSUFBSSxLQUFLRCxDQUFMLEdBQVMsQ0FBYixFQUNILE9BQU8sQ0FBQ0osS0FBS0ssRUFBTixHQUFXLENBQWxCO0FBQ0g7OztrQ0FFWTdCLEssRUFBTzs7QUFFbEIsZUFBU0EsS0FBVDs7QUFFRSxjQUFLLENBQUw7QUFDRSxrQkFBTyxLQUFLMkIsQ0FBWjtBQUNGLGNBQUssQ0FBTDtBQUNFLGtCQUFPLEtBQUtDLENBQVo7QUFDRjtBQUNFLGlCQUFNLElBQUkwQixLQUFKLENBQVUsNEJBQTRCdEQsS0FBdEMsQ0FBTjs7QUFQSjtBQVdEOzs7MEJBRUkwQixDLEVBQUc7O0FBRU4sWUFBS0MsQ0FBTCxHQUFTRCxFQUFFQyxDQUFYO0FBQ0EsWUFBS0MsQ0FBTCxHQUFTRixFQUFFRSxDQUFYOztBQUVBLGNBQU8sSUFBUDtBQUVEOzs7eUJBRUdGLEMsRUFBRzZCLEMsRUFBRzs7QUFFUixXQUFJQSxNQUFNQyxTQUFWLEVBQXFCO0FBQ25CLGdCQUFPLEtBQUtDLFVBQUwsQ0FBZ0IvQixDQUFoQixFQUFtQjZCLENBQW5CLENBQVA7QUFFRDs7QUFFRCxZQUFLNUIsQ0FBTCxJQUFVRCxFQUFFQyxDQUFaO0FBQ0EsWUFBS0MsQ0FBTCxJQUFVRixFQUFFRSxDQUFaOztBQUVBLGNBQU8sSUFBUDtBQUVEOzs7MkJBRUsvRSxDLEVBQUdDLEMsRUFBRzs7QUFFVixZQUFLNkUsQ0FBTCxJQUFVOUUsQ0FBVjtBQUNBLFlBQUsrRSxDQUFMLElBQVU5RSxDQUFWOztBQUVBLGNBQU8sSUFBUDtBQUVEOzs7Z0NBRVVELEMsRUFBR0MsQyxFQUFHOztBQUVmLFlBQUs2RSxDQUFMLEdBQVM5RSxFQUFFOEUsQ0FBRixHQUFNN0UsRUFBRTZFLENBQWpCO0FBQ0EsWUFBS0MsQ0FBTCxHQUFTL0UsRUFBRStFLENBQUYsR0FBTTlFLEVBQUU4RSxDQUFqQjs7QUFFQSxjQUFPLElBQVA7QUFFRDs7OytCQUVTOEIsQyxFQUFHOztBQUVYLFlBQUsvQixDQUFMLElBQVUrQixDQUFWO0FBQ0EsWUFBSzlCLENBQUwsSUFBVThCLENBQVY7O0FBRUEsY0FBTyxJQUFQO0FBRUQ7Ozt5QkFFR2hDLEMsRUFBRzZCLEMsRUFBRzs7QUFFUixXQUFJQSxNQUFNQyxTQUFWLEVBQXFCO0FBQ25CLGdCQUFPLEtBQUtHLFVBQUwsQ0FBZ0JqQyxDQUFoQixFQUFtQjZCLENBQW5CLENBQVA7QUFFRDs7QUFFRCxZQUFLNUIsQ0FBTCxJQUFVRCxFQUFFQyxDQUFaO0FBQ0EsWUFBS0MsQ0FBTCxJQUFVRixFQUFFRSxDQUFaOztBQUVBLGNBQU8sSUFBUDtBQUVEOzs7Z0NBRVUvRSxDLEVBQUdDLEMsRUFBRzs7QUFFZixZQUFLNkUsQ0FBTCxHQUFTOUUsRUFBRThFLENBQUYsR0FBTTdFLEVBQUU2RSxDQUFqQjtBQUNBLFlBQUtDLENBQUwsR0FBUy9FLEVBQUUrRSxDQUFGLEdBQU05RSxFQUFFOEUsQ0FBakI7O0FBRUEsY0FBTyxJQUFQO0FBRUQ7OztvQ0FFYzhCLEMsRUFBRzs7QUFFaEIsWUFBSy9CLENBQUwsSUFBVStCLENBQVY7QUFDQSxZQUFLOUIsQ0FBTCxJQUFVOEIsQ0FBVjs7QUFFQSxjQUFPLElBQVA7QUFFRDs7O2tDQUVZQSxDLEVBQUc7O0FBRWQsV0FBSUEsTUFBTSxDQUFWLEVBQWE7O0FBRVgsY0FBSy9CLENBQUwsSUFBVStCLENBQVY7QUFDQSxjQUFLOUIsQ0FBTCxJQUFVOEIsQ0FBVjtBQUVELFFBTEQsTUFLTzs7QUFFTCxjQUFLYixHQUFMLENBQVMsQ0FBVCxFQUFZLENBQVo7QUFFRDs7QUFFRCxjQUFPLElBQVA7QUFFRDs7O3lCQUVHbkIsQyxFQUFHOztBQUVMLFdBQUksS0FBS0MsQ0FBTCxHQUFTRCxFQUFFQyxDQUFmLEVBQWtCOztBQUVoQixjQUFLQSxDQUFMLEdBQVNELEVBQUVDLENBQVg7QUFFRDs7QUFFRCxXQUFJLEtBQUtDLENBQUwsR0FBU0YsRUFBRUUsQ0FBZixFQUFrQjs7QUFFaEIsY0FBS0EsQ0FBTCxHQUFTRixFQUFFRSxDQUFYO0FBRUQ7O0FBRUQsY0FBTyxJQUFQO0FBRUQ7Ozt5QkFFR0YsQyxFQUFHOztBQUVMLFdBQUksS0FBS0MsQ0FBTCxHQUFTRCxFQUFFQyxDQUFmLEVBQWtCOztBQUVoQixjQUFLQSxDQUFMLEdBQVNELEVBQUVDLENBQVg7QUFFRDs7QUFFRCxXQUFJLEtBQUtDLENBQUwsR0FBU0YsRUFBRUUsQ0FBZixFQUFrQjs7QUFFaEIsY0FBS0EsQ0FBTCxHQUFTRixFQUFFRSxDQUFYO0FBRUQ7O0FBRUQsY0FBTyxJQUFQO0FBRUQ7OzsyQkFFS2dDLEcsRUFBS1YsRyxFQUFLOztBQUVkOztBQUVBLFdBQUksS0FBS3ZCLENBQUwsR0FBU2lDLElBQUlqQyxDQUFqQixFQUFvQjs7QUFFbEIsY0FBS0EsQ0FBTCxHQUFTaUMsSUFBSWpDLENBQWI7QUFFRCxRQUpELE1BSU8sSUFBSSxLQUFLQSxDQUFMLEdBQVN1QixJQUFJdkIsQ0FBakIsRUFBb0I7O0FBRXpCLGNBQUtBLENBQUwsR0FBU3VCLElBQUl2QixDQUFiO0FBRUQ7O0FBRUQsV0FBSSxLQUFLQyxDQUFMLEdBQVNnQyxJQUFJaEMsQ0FBakIsRUFBb0I7O0FBRWxCLGNBQUtBLENBQUwsR0FBU2dDLElBQUloQyxDQUFiO0FBRUQsUUFKRCxNQUlPLElBQUksS0FBS0EsQ0FBTCxHQUFTc0IsSUFBSXRCLENBQWpCLEVBQW9COztBQUV6QixjQUFLQSxDQUFMLEdBQVNzQixJQUFJdEIsQ0FBYjtBQUVEOztBQUVELGNBQU8sSUFBUDtBQUVEOzs7OEJBRVE7O0FBRVAsY0FBTyxLQUFLaUMsY0FBTCxDQUFvQixDQUFDLENBQXJCLENBQVA7QUFFRDs7O3lCQUVHbkMsQyxFQUFHOztBQUVMLGNBQU8sS0FBS0MsQ0FBTCxHQUFTRCxFQUFFQyxDQUFYLEdBQWUsS0FBS0MsQ0FBTCxHQUFTRixFQUFFRSxDQUFqQztBQUVEOzs7Z0NBRVU7O0FBRVQsY0FBTyxLQUFLRCxDQUFMLEdBQVMsS0FBS0EsQ0FBZCxHQUFrQixLQUFLQyxDQUFMLEdBQVMsS0FBS0EsQ0FBdkM7QUFFRDs7OzhCQUVROztBQUVQLGNBQU9KLEtBQUtzQyxJQUFMLENBQVUsS0FBS25DLENBQUwsR0FBUyxLQUFLQSxDQUFkLEdBQWtCLEtBQUtDLENBQUwsR0FBUyxLQUFLQSxDQUExQyxDQUFQO0FBRUQ7OztpQ0FFVzs7QUFFVixjQUFPLEtBQUttQyxZQUFMLENBQWtCLEtBQUszRSxNQUFMLEVBQWxCLENBQVA7QUFFRDs7O2dDQUVVc0MsQyxFQUFHOztBQUVaLGNBQU9GLEtBQUtzQyxJQUFMLENBQVUsS0FBS0UsaUJBQUwsQ0FBdUJ0QyxDQUF2QixDQUFWLENBQVA7QUFFRDs7OzRCQUVNdUMsRyxFQUFLO0FBQ1YsV0FBSXRDLElBQUksS0FBS0EsQ0FBYjtBQUNBLFdBQUlDLElBQUksS0FBS0EsQ0FBYjtBQUNBLFlBQUtELENBQUwsR0FBU0EsSUFBSUgsS0FBSzBDLEdBQUwsQ0FBU0QsR0FBVCxDQUFKLEdBQW9CckMsSUFBSUosS0FBSzJDLEdBQUwsQ0FBU0YsR0FBVCxDQUFqQztBQUNBLFlBQUtyQyxDQUFMLEdBQVMsQ0FBQ0QsQ0FBRCxHQUFLSCxLQUFLMkMsR0FBTCxDQUFTRixHQUFULENBQUwsR0FBcUJyQyxJQUFJSixLQUFLMEMsR0FBTCxDQUFTRCxHQUFULENBQWxDO0FBQ0EsY0FBTyxJQUFQO0FBQ0Q7Ozt1Q0FFaUJ2QyxDLEVBQUc7O0FBRW5CLFdBQUkwQyxLQUFLLEtBQUt6QyxDQUFMLEdBQVNELEVBQUVDLENBQXBCO0FBQUEsV0FBdUIwQyxLQUFLLEtBQUt6QyxDQUFMLEdBQVNGLEVBQUVFLENBQXZDO0FBQ0EsY0FBT3dDLEtBQUtBLEVBQUwsR0FBVUMsS0FBS0EsRUFBdEI7QUFFRDs7OytCQUVTQyxDLEVBQUc7O0FBRVgsV0FBSUMsWUFBWSxLQUFLbkYsTUFBTCxFQUFoQjs7QUFFQSxXQUFJbUYsY0FBYyxDQUFkLElBQW1CRCxNQUFNQyxTQUE3QixFQUF3Qzs7QUFFdEMsY0FBS1YsY0FBTCxDQUFvQlMsSUFBSUMsU0FBeEI7QUFDRDs7QUFFRCxjQUFPLElBQVA7QUFFRDs7OzBCQUVJN0MsQyxFQUFHVSxLLEVBQU87O0FBRWIsWUFBS1QsQ0FBTCxJQUFVLENBQUNELEVBQUVDLENBQUYsR0FBTSxLQUFLQSxDQUFaLElBQWtCUyxLQUE1QjtBQUNBLFlBQUtSLENBQUwsSUFBVSxDQUFDRixFQUFFRSxDQUFGLEdBQU0sS0FBS0EsQ0FBWixJQUFrQlEsS0FBNUI7O0FBRUEsY0FBTyxJQUFQO0FBRUQ7Ozs0QkFFTVYsQyxFQUFHOztBQUVSLGNBQVNBLEVBQUVDLENBQUYsS0FBUSxLQUFLQSxDQUFkLElBQXNCRCxFQUFFRSxDQUFGLEtBQVEsS0FBS0EsQ0FBM0M7QUFFRDs7OytCQUVTOztBQUVSLGNBQU8sQ0FBQyxLQUFLRCxDQUFOLEVBQVMsS0FBS0MsQ0FBZCxDQUFQO0FBRUQ7Ozs2QkFFTztBQUNOLFlBQUtELENBQUwsR0FBUyxHQUFUO0FBQ0EsWUFBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxjQUFPLElBQVA7QUFDRDs7OzZCQUVPOztBQUVOLGNBQU8sSUFBSXdCLFFBQUosQ0FBYSxLQUFLekIsQ0FBbEIsRUFBcUIsS0FBS0MsQ0FBMUIsQ0FBUDtBQUVEOzs7Ozs7bUJBelVrQndCLFE7Ozs7Ozs7Ozs7Ozs7O0FDRHJCOzs7Ozs7OztLQUVxQm9CLEk7QUFFbkIsaUJBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzNCLFVBQUtDLE1BQUwsR0FBY0YsTUFBZDtBQUNBLFVBQUtHLE9BQUwsR0FBZUYsT0FBZjtBQUNBLFVBQUtDLE1BQUwsR0FBYyxlQUFLRSxZQUFMLENBQWtCLEtBQUtGLE1BQXZCLENBQWQ7QUFDQSxVQUFLQyxPQUFMLEdBQWUsZUFBS0MsWUFBTCxDQUFrQixLQUFLRCxPQUF2QixDQUFmO0FBQ0EsVUFBS0UsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxVQUFLaEcsSUFBTDtBQUNEOzs7OzRCQUVNO0FBQ0wsWUFBSytGLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxZQUFLQyxRQUFMLEdBQWdCLEtBQUtILE9BQUwsQ0FBYXBFLFFBQWIsRUFBaEI7QUFDRDs7OzhCQUVRSCxJLEVBQU07QUFDYixZQUFLeUUsU0FBTCxJQUFrQnpFLElBQWxCO0FBQ0EsV0FBSSxLQUFLeUUsU0FBTCxJQUFrQixLQUFLQyxRQUEzQixFQUFxQztBQUNuQyxjQUFLRCxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQixLQUFLSCxPQUFMLENBQWFwRSxRQUFiLEVBQWhCO0FBQ0EsYUFBSSxLQUFLbUUsTUFBTCxDQUFZN0gsQ0FBWixJQUFpQixDQUFyQixFQUF3QjtBQUN0QixlQUFJLEtBQUs2SCxNQUFMLENBQVluRSxRQUFaLENBQXFCLEtBQXJCLElBQThCLEdBQWxDLEVBQ0UsT0FBTyxDQUFQLENBREYsS0FHRSxPQUFPLENBQVA7QUFDSCxVQUxELE1BS087QUFDTCxrQkFBTyxLQUFLbUUsTUFBTCxDQUFZbkUsUUFBWixDQUFxQixJQUFyQixDQUFQO0FBQ0Q7QUFDRjtBQUNELGNBQU8sQ0FBUDtBQUNEOzs7Ozs7bUJBaENrQmdFLEk7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7OzttQkFFZTs7QUFFWDs7Ozs7Ozs7O0FBU0FRLGdCQUFXLG1CQUFTM0IsS0FBVCxFQUFnQjRCLFFBQWhCLEVBQTBCO0FBQ2pDLGFBQUk1QixRQUFTQSxTQUFTLElBQVQsSUFBaUJBLFNBQVNHLFNBQTNCLEdBQXdDSCxLQUF4QyxHQUFnRDRCLFFBQTVEO0FBQ0EsZ0JBQU81QixLQUFQO0FBQ0gsTUFkVTs7QUFnQlg7Ozs7Ozs7Ozs7O0FBV0E2QixrQkFBYSxxQkFBU0MsVUFBVCxFQUFxQnZELENBQXJCLEVBQXdCO0FBQ2pDLGFBQUksUUFBT3VELFVBQVAseUNBQU9BLFVBQVAsTUFBc0IsUUFBMUIsRUFBb0M7QUFDaEMsb0JBQU9BLFVBQVA7QUFDSCxVQUZELE1BRU87QUFDSCxpQkFBSUMsV0FBVyx1QkFBYUQsVUFBYixFQUF5QnZELENBQXpCLENBQWY7QUFDQSxvQkFBT3dELFFBQVA7QUFDSDtBQUNKLE1BbENVOztBQW9DWDs7Ozs7Ozs7Ozs7QUFXQUMsb0JBQWUsdUJBQVNDLElBQVQsRUFBZTtBQUMxQixhQUFJQyxTQUFTLEVBQWI7QUFDQSxhQUFJRCxLQUFLbkYsY0FBTCxDQUFvQixHQUFwQixLQUE0Qm1GLEtBQUtuRixjQUFMLENBQW9CLEdBQXBCLENBQTVCLElBQXdEbUYsS0FBS25GLGNBQUwsQ0FBb0IsR0FBcEIsQ0FBeEQsSUFBb0ZtRixLQUFLbkYsY0FBTCxDQUFvQixVQUFwQixDQUF4RixFQUNJb0YsVUFBVSxHQUFWO0FBQ0osYUFBSUQsS0FBS25GLGNBQUwsQ0FBb0IsSUFBcEIsS0FBNkJtRixLQUFLbkYsY0FBTCxDQUFvQixJQUFwQixDQUE3QixJQUEwRG1GLEtBQUtuRixjQUFMLENBQW9CLEdBQXBCLENBQTFELElBQXNGbUYsS0FBS25GLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBMUYsRUFDSW9GLFVBQVUsR0FBVjtBQUNKLGFBQUlELEtBQUtuRixjQUFMLENBQW9CLElBQXBCLEtBQTZCbUYsS0FBS25GLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBN0IsSUFBMERtRixLQUFLbkYsY0FBTCxDQUFvQixHQUFwQixDQUExRCxJQUFzRm1GLEtBQUtuRixjQUFMLENBQW9CLFlBQXBCLENBQTFGLEVBQ0lvRixVQUFVLEdBQVY7O0FBRUosZ0JBQU9BLE1BQVA7QUFDSCxNQXpEVTs7QUEyRFg7Ozs7Ozs7Ozs7O0FBV0FDLDBCQUFxQiw2QkFBU3hELE1BQVQsRUFBaUJzRCxJQUFqQixFQUF1QjtBQUN4QyxhQUFJQSxLQUFLbkYsY0FBTCxDQUFvQixHQUFwQixDQUFKLEVBQ0k2QixPQUFPVyxDQUFQLENBQVNoQixDQUFULEdBQWEyRCxLQUFLLEdBQUwsQ0FBYjs7QUFFSixhQUFJQSxLQUFLbkYsY0FBTCxDQUFvQixHQUFwQixDQUFKLEVBQ0k2QixPQUFPVyxDQUFQLENBQVNmLENBQVQsR0FBYTBELEtBQUssR0FBTCxDQUFiOztBQUVKLGFBQUlBLEtBQUtuRixjQUFMLENBQW9CLElBQXBCLENBQUosRUFDSTZCLE9BQU9OLENBQVAsQ0FBU0MsQ0FBVCxHQUFhMkQsS0FBSyxJQUFMLENBQWI7O0FBRUosYUFBSUEsS0FBS25GLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBSixFQUNJNkIsT0FBT04sQ0FBUCxDQUFTRSxDQUFULEdBQWEwRCxLQUFLLElBQUwsQ0FBYjs7QUFFSixhQUFJQSxLQUFLbkYsY0FBTCxDQUFvQixJQUFwQixDQUFKLEVBQ0k2QixPQUFPbkYsQ0FBUCxDQUFTOEUsQ0FBVCxHQUFhMkQsS0FBSyxJQUFMLENBQWI7O0FBRUosYUFBSUEsS0FBS25GLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBSixFQUNJNkIsT0FBT25GLENBQVAsQ0FBUytFLENBQVQsR0FBYTBELEtBQUssSUFBTCxDQUFiOztBQUVKLGFBQUlBLEtBQUtuRixjQUFMLENBQW9CLEdBQXBCLENBQUosRUFDSVgsU0FBU21ELENBQVQsQ0FBVzhDLElBQVgsQ0FBZ0JILEtBQUssR0FBTCxDQUFoQjs7QUFFSixhQUFJQSxLQUFLbkYsY0FBTCxDQUFvQixHQUFwQixDQUFKLEVBQ0lYLFNBQVNrQyxDQUFULENBQVcrRCxJQUFYLENBQWdCSCxLQUFLLEdBQUwsQ0FBaEI7O0FBRUosYUFBSUEsS0FBS25GLGNBQUwsQ0FBb0IsR0FBcEIsQ0FBSixFQUNJWCxTQUFTM0MsQ0FBVCxDQUFXNEksSUFBWCxDQUFnQkgsS0FBSyxHQUFMLENBQWhCOztBQUVKLGFBQUlBLEtBQUtuRixjQUFMLENBQW9CLFVBQXBCLENBQUosRUFDSVgsU0FBU21ELENBQVQsQ0FBVzhDLElBQVgsQ0FBZ0JILEtBQUssVUFBTCxDQUFoQjs7QUFFSixhQUFJQSxLQUFLbkYsY0FBTCxDQUFvQixVQUFwQixDQUFKLEVBQ0lYLFNBQVNrQyxDQUFULENBQVcrRCxJQUFYLENBQWdCSCxLQUFLLFVBQUwsQ0FBaEI7O0FBRUosYUFBSUEsS0FBS25GLGNBQUwsQ0FBb0IsWUFBcEIsQ0FBSixFQUNJWCxTQUFTM0MsQ0FBVCxDQUFXNEksSUFBWCxDQUFnQkgsS0FBSyxZQUFMLENBQWhCO0FBQ1AsTUExR1U7O0FBOEdYOzs7Ozs7Ozs7Ozs7OztBQWNBVCxtQkFBYyxzQkFBU2hJLENBQVQsRUFBWUMsQ0FBWixFQUFlNEksQ0FBZixFQUFrQjtBQUM1QixhQUFJN0ksMkJBQUosRUFBdUI7QUFDbkIsb0JBQU9BLENBQVA7QUFDSCxVQUZELE1BRU87QUFDSCxpQkFBSSxDQUFDQyxDQUFMLEVBQVE7QUFDSix3QkFBTyxtQkFBU0QsQ0FBVCxDQUFQO0FBQ0gsY0FGRCxNQUVPO0FBQ0gscUJBQUksQ0FBQzZJLENBQUwsRUFDSSxPQUFPLG1CQUFTN0ksQ0FBVCxFQUFZQyxDQUFaLENBQVAsQ0FESixLQUdJLE9BQU8sbUJBQVNELENBQVQsRUFBWUMsQ0FBWixFQUFlNEksQ0FBZixDQUFQO0FBQ1A7QUFDSjtBQUNKLE1BeklVOztBQTJJWDs7Ozs7Ozs7OztBQVVBQyxtQkFBYyxzQkFBU0MsR0FBVCxFQUFjO0FBQ3hCLGFBQUlBLDZCQUFKLEVBQ0ksT0FBT0EsSUFBSXBGLFFBQUosRUFBUCxDQURKLEtBR0ksT0FBT29GLEdBQVA7QUFDUCxNQTFKVTs7QUE0Slg7Ozs7OztBQU1BOzs7Ozs7Ozs7O0FBVUFDLGVBQVUsa0JBQVNDLENBQVQsRUFBWTtBQUNsQixhQUFJQyxRQUFTRCxFQUFFRSxNQUFGLENBQVMsQ0FBVCxLQUFlLEdBQWhCLEdBQXVCRixFQUFFRyxTQUFGLENBQVksQ0FBWixFQUFlLENBQWYsQ0FBdkIsR0FBMkNILENBQXZEO0FBQ0EsYUFBSS9DLElBQUltRCxTQUFTSCxNQUFNRSxTQUFOLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQVQsRUFBZ0MsRUFBaEMsQ0FBUjtBQUNBLGFBQUlqRCxJQUFJa0QsU0FBU0gsTUFBTUUsU0FBTixDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFULEVBQWdDLEVBQWhDLENBQVI7QUFDQSxhQUFJbkosSUFBSW9KLFNBQVNILE1BQU1FLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBVCxFQUFnQyxFQUFoQyxDQUFSOztBQUVBLGdCQUFPO0FBQ0hsRCxnQkFBR0EsQ0FEQTtBQUVIQyxnQkFBR0EsQ0FGQTtBQUdIbEcsZ0JBQUdBO0FBSEEsVUFBUDtBQUtILE1BdkxVOztBQXlMWDs7Ozs7Ozs7OztBQVVBcUosZUFBVSxrQkFBU0MsR0FBVCxFQUFjO0FBQ3BCLGdCQUFPLFNBQVNBLElBQUlyRCxDQUFiLEdBQWlCLElBQWpCLEdBQXdCcUQsSUFBSXBELENBQTVCLEdBQWdDLElBQWhDLEdBQXVDb0QsSUFBSXRKLENBQTNDLEdBQStDLEdBQXREO0FBQ0g7QUFyTVUsRTs7Ozs7Ozs7Ozs7Ozs7QUNIZjs7OztLQUVxQkUsSTtBQUNwQixnQkFBWUgsQ0FBWixFQUFlQyxDQUFmLEVBQWtDO0FBQUEsT0FBaEJDLE1BQWdCLHVFQUFQLEtBQU87O0FBQUE7O0FBQ2pDLE9BQUkrRCxNQUFNdUYsT0FBTixDQUFjeEosQ0FBZCxDQUFKLEVBQXNCO0FBQ3JCLFNBQUt3SixPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUt4SixDQUFMLEdBQVNBLENBQVQ7QUFDQSxJQUhELE1BR087QUFDTixTQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLEtBQUssS0FBS0QsQ0FBbkI7QUFDQSxTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQTtBQUNEOzs7OzRCQUVRdUosRyxFQUFJO0FBQ1osUUFBSSxLQUFLRCxPQUFULEVBQWtCO0FBQ2pCLFlBQU8sS0FBS3hKLENBQUwsQ0FBTzJFLEtBQUsrRSxLQUFMLENBQVcsS0FBSzFKLENBQUwsQ0FBT3VDLE1BQVAsR0FBZ0JvQyxLQUFLZ0YsTUFBTCxFQUEzQixDQUFQLENBQVA7QUFDQSxLQUZELE1BRU87QUFDTixTQUFJLENBQUMsS0FBS3pKLE1BQVYsRUFDQyxPQUFPLDJCQUFXLEtBQUtGLENBQWhCLEVBQW1CLEtBQUtDLENBQXhCLEVBQTJCd0osR0FBM0IsQ0FBUCxDQURELEtBR0MsT0FBTywrQkFBZSxLQUFLekosQ0FBcEIsRUFBdUIsS0FBS0MsQ0FBNUIsRUFBK0J3SixHQUEvQixDQUFQO0FBQ0Q7QUFDRDs7Ozs7O21CQXJCbUJ0SixJOzs7Ozs7Ozs7OztTQ0RMeUosVSxHQUFBQSxVO1NBT0NDLGMsR0FBQUEsYztTQUlEQyxlLEdBQUFBLGU7QUFYVCxVQUFTRixVQUFULENBQW9CNUosQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCd0osR0FBMUIsRUFBK0I7QUFDcEMsT0FBSSxDQUFDQSxHQUFMLEVBQ0UsT0FBT3pKLElBQUkyRSxLQUFLZ0YsTUFBTCxNQUFpQjFKLElBQUlELENBQXJCLENBQVgsQ0FERixLQUdFLE9BQU8yRSxLQUFLK0UsS0FBTCxDQUFXL0UsS0FBS2dGLE1BQUwsTUFBaUIxSixJQUFJRCxDQUFyQixDQUFYLElBQXNDQSxDQUE3QztBQUNIOztBQUVPLFVBQVM2SixjQUFULENBQXdCM0osTUFBeEIsRUFBZ0M2SixDQUFoQyxFQUFtQ04sR0FBbkMsRUFBd0M7QUFDOUMsVUFBT08sVUFBVUosVUFBVixDQUFxQjFKLFNBQVM2SixDQUE5QixFQUFpQzdKLFNBQVM2SixDQUExQyxFQUE2Q04sR0FBN0MsQ0FBUDtBQUNEOztBQUVNLFVBQVNLLGVBQVQsQ0FBeUI5SixDQUF6QixFQUE0QjtBQUNqQyxVQUFPQSxJQUFJMkUsS0FBS0ssRUFBVCxHQUFjLEdBQXJCO0FBQ0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNkRDs7OztLQUVxQmlGLG9CO0FBRW5CLGlDQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFVBQUtBLElBQUwsR0FBWUEsb0JBQVo7QUFDRDs7OzsrQkFFU3ZILFEsRUFBVWEsSSxFQUFNN0IsTyxFQUFTO0FBQ2pDLFlBQUt3SSxjQUFMLENBQW9CeEgsUUFBcEIsRUFBOEJhLElBQTlCLEVBQW9DN0IsT0FBcEM7QUFDRDs7O29DQUVjZ0IsUSxFQUFVYSxJLEVBQU03QixPLEVBQVM7QUFDdEMsV0FBSSxDQUFDZ0IsU0FBU3VDLEtBQWQsRUFBcUI7QUFDbkJ2QyxrQkFBU29ELEdBQVQsQ0FBYUQsQ0FBYixDQUFlOEMsSUFBZixDQUFvQmpHLFNBQVNtRCxDQUE3QjtBQUNBbkQsa0JBQVNvRCxHQUFULENBQWFsQixDQUFiLENBQWUrRCxJQUFmLENBQW9CakcsU0FBU2tDLENBQTdCO0FBQ0FsQyxrQkFBUzNDLENBQVQsQ0FBV2dILGNBQVgsQ0FBMEIsSUFBSXJFLFNBQVMwQyxJQUF2QztBQUNBMUMsa0JBQVNrQyxDQUFULENBQVd1RixHQUFYLENBQWV6SCxTQUFTM0MsQ0FBVCxDQUFXZ0gsY0FBWCxDQUEwQnhELElBQTFCLENBQWY7QUFDQWIsa0JBQVNtRCxDQUFULENBQVdzRSxHQUFYLENBQWV6SCxTQUFTb0QsR0FBVCxDQUFhbEIsQ0FBYixDQUFlbUMsY0FBZixDQUE4QnhELElBQTlCLENBQWY7QUFDQSxhQUFJN0IsT0FBSixFQUFZO0FBQ1ZnQixvQkFBU2tDLENBQVQsQ0FBV21DLGNBQVgsQ0FBMEJyRixPQUExQjtBQUNEO0FBQ0RnQixrQkFBUzNDLENBQVQsQ0FBV3FLLEtBQVg7QUFDRDtBQUNGOzs7Ozs7bUJBdEJrQkosb0I7Ozs7Ozs7Ozs7O21CQ0VHeEgsVTs7QUFKeEI7Ozs7QUFDQTs7QUFDQTs7S0FBWTZILEk7Ozs7OztBQUVHLFVBQVM3SCxVQUFULENBQW9COEgsT0FBcEIsRUFBNkI1SCxRQUE3QixFQUF1Q3JCLFdBQXZDLEVBQW9EO0FBQ2pFLE9BQU1pQixTQUFTakIsWUFBWWlCLE1BQTNCO0FBQ0EsUUFBSyxJQUFJRCxJQUFJLENBQWIsRUFBZ0JBLElBQUlDLE1BQXBCLEVBQTRCRCxHQUE1QixFQUFpQztBQUMvQixTQUFJaEIsWUFBWWdCLENBQVosaUNBQUosRUFBeUM7QUFDdkNoQixtQkFBWWdCLENBQVosRUFBZUosSUFBZixDQUFvQnFJLE9BQXBCLEVBQTZCNUgsUUFBN0I7QUFDRCxNQUZELE1BRU87QUFDTFQsWUFBS3FJLE9BQUwsRUFBYzVILFFBQWQsRUFBd0JyQixZQUFZZ0IsQ0FBWixDQUF4QjtBQUNEO0FBQ0Y7O0FBRURWLGVBQVkySSxPQUFaLEVBQXFCNUgsUUFBckI7QUFDRDs7QUFHRCxVQUFTVCxJQUFULENBQWNxSSxPQUFkLEVBQXVCNUgsUUFBdkIsRUFBaUNGLFVBQWpDLEVBQTRDO0FBQzFDNkgsUUFBS0Usb0JBQUwsQ0FBMEI3SCxRQUExQixFQUFvQ0YsVUFBcEM7QUFDQTZILFFBQUszQixtQkFBTCxDQUF5QmhHLFFBQXpCLEVBQW1DRixVQUFuQztBQUNEOztBQUVELFVBQVNiLFdBQVQsQ0FBcUIySSxPQUFyQixFQUE4QjVILFFBQTlCLEVBQXdDO0FBQ3RDLE9BQUk0SCxRQUFRM0ksV0FBWixFQUF5QjtBQUN2QmUsY0FBU21ELENBQVQsQ0FBV3NFLEdBQVgsQ0FBZUcsUUFBUXpFLENBQXZCO0FBQ0FuRCxjQUFTa0MsQ0FBVCxDQUFXdUYsR0FBWCxDQUFlRyxRQUFRMUYsQ0FBdkI7QUFDQWxDLGNBQVMzQyxDQUFULENBQVdvSyxHQUFYLENBQWVHLFFBQVF2SyxDQUF2QjtBQUNBMkMsY0FBU2tDLENBQVQsQ0FBVzRGLE1BQVgsQ0FBa0IsZ0NBQWdCRixRQUFROUUsUUFBeEIsQ0FBbEI7QUFDRDtBQUNGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7S0M5Qm9CaUYsVTtBQUNwQix3QkFBYztBQUFBO0FBRWI7Ozs7MkJBRU8sQ0FFUDs7O3dCQUVJSCxPLEVBQVM1SCxRLEVBQVU7QUFDdkIsUUFBSUEsUUFBSixFQUFjO0FBQ2IsVUFBS0YsVUFBTCxDQUFnQkUsUUFBaEI7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLRixVQUFMLENBQWdCOEgsT0FBaEI7QUFDQTtBQUNEOzs7Z0NBRVksQ0FFWjs7Ozs7O21CQW5CbUJHLFU7Ozs7OztBQ0FyQjs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxrQ0FBaUMsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVsakIsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEtBOzs7O0FBQ0E7Ozs7OztTQUVTL0MsSTtTQUFNZ0QsUTs7Ozs7Ozs7Ozs7Ozs7QUNIZjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQkEsUTs7O0FBQ3BCLG9CQUFZQyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQlgsSUFBMUIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFHL0IsU0FBS1ksSUFBTCxHQUFZLGVBQUs5QyxZQUFMLENBQWtCNEMsSUFBbEIsQ0FBWjtBQUNBLFNBQUtHLE1BQUwsR0FBYyxlQUFLL0MsWUFBTCxDQUFrQjZDLE1BQWxCLENBQWQ7QUFDQSxTQUFLWCxJQUFMLEdBQVksZUFBSy9CLFNBQUwsQ0FBZStCLElBQWYsRUFBcUIsUUFBckIsQ0FBWjtBQUwrQjtBQU0vQjs7Ozt5QkFFS1UsSSxFQUFNQyxNLEVBQVFYLEksRUFBTTtBQUN6QixTQUFLWSxJQUFMLEdBQVksZUFBSzlDLFlBQUwsQ0FBa0I0QyxJQUFsQixDQUFaO0FBQ0EsU0FBS0csTUFBTCxHQUFjLGVBQUsvQyxZQUFMLENBQWtCNkMsTUFBbEIsQ0FBZDtBQUNBLFNBQUtYLElBQUwsR0FBWSxlQUFLL0IsU0FBTCxDQUFlK0IsSUFBZixFQUFxQixRQUFyQixDQUFaO0FBQ0E7OztxQ0FFaUJjLEUsRUFBSTtBQUNyQixXQUFPQSxtQkFBUDtBQUNBOzs7OEJBRVU3RixNLEVBQVE7QUFDbEIsUUFBSSxLQUFLK0UsSUFBTCxJQUFhLEdBQWIsSUFBb0IsS0FBS0EsSUFBTCxJQUFhLEdBQWpDLElBQXdDLEtBQUtBLElBQUwsSUFBYSxPQUF6RCxFQUFrRTtBQUNqRSxTQUFNZSxVQUFVLHNCQUFZLEtBQUtDLGlCQUFMLENBQXVCLEtBQUtKLElBQUwsQ0FBVW5ILFFBQVYsRUFBdkIsQ0FBWixFQUEwRCxLQUFLb0gsTUFBTCxDQUFZcEgsUUFBWixLQUF5QmdCLEtBQUtLLEVBQTlCLEdBQW1DLEdBQTdGLENBQWhCO0FBQ0FHLFlBQU9OLENBQVAsQ0FBU0MsQ0FBVCxHQUFhbUcsUUFBUUUsSUFBUixFQUFiO0FBQ0FoRyxZQUFPTixDQUFQLENBQVNFLENBQVQsR0FBYWtHLFFBQVFHLElBQVIsRUFBYjtBQUNBLEtBSkQsTUFJTztBQUNOakcsWUFBT04sQ0FBUCxDQUFTQyxDQUFULEdBQWEsS0FBS29HLGlCQUFMLENBQXVCLEtBQUtKLElBQUwsQ0FBVW5ILFFBQVYsRUFBdkIsQ0FBYjtBQUNBd0IsWUFBT04sQ0FBUCxDQUFTRSxDQUFULEdBQWEsS0FBS21HLGlCQUFMLENBQXVCLEtBQUtILE1BQUwsQ0FBWXBILFFBQVosRUFBdkIsQ0FBYjtBQUNBO0FBQ0Q7Ozs7OzttQkE1Qm1CZ0gsUTs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7Ozs7O0tBRXFCVSxPO0FBRXBCLG1CQUFZbkYsQ0FBWixFQUFla0IsR0FBZixFQUFtQjtBQUFBOztBQUNsQixRQUFLbEIsQ0FBTCxHQUFTdkIsS0FBSzJHLEdBQUwsQ0FBU3BGLENBQVQsS0FBZSxDQUF4QjtBQUNBLFFBQUtrQixHQUFMLEdBQVdBLE9BQU8sQ0FBbEI7QUFDQTs7Ozt1QkFFR2xCLEMsRUFBR2tCLEcsRUFBSzs7QUFFWCxTQUFLbEIsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2tCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFdBQU8sSUFBUDtBQUVBOzs7d0JBRUlsQixDLEVBQUc7O0FBRVAsU0FBS0EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBTyxJQUFQO0FBRUE7OzswQkFFTWtCLEcsRUFBSzs7QUFFWCxTQUFLQSxHQUFMLEdBQVdBLEdBQVg7O0FBRUEsV0FBTyxJQUFQO0FBRUE7Ozt3QkFFSXRCLEMsRUFBRzs7QUFFUCxTQUFLSSxDQUFMLEdBQVNKLEVBQUVJLENBQVg7QUFDQSxTQUFLa0IsR0FBTCxHQUFXdEIsRUFBRXNCLEdBQWI7O0FBRUEsV0FBTyxJQUFQO0FBRUE7Ozs4QkFFVTtBQUNWLFdBQU8sdUJBQWEsS0FBSytELElBQUwsRUFBYixFQUEwQixLQUFLQyxJQUFMLEVBQTFCLENBQVA7QUFDQTs7OzBCQUVNO0FBQ04sV0FBTyxLQUFLbEYsQ0FBTCxHQUFTdkIsS0FBSzJDLEdBQUwsQ0FBUyxLQUFLRixHQUFkLENBQWhCO0FBQ0E7OzswQkFFTTtBQUNOLFdBQU8sQ0FBQyxLQUFLbEIsQ0FBTixHQUFVdkIsS0FBSzBDLEdBQUwsQ0FBUyxLQUFLRCxHQUFkLENBQWpCO0FBQ0E7OzsrQkFFVzs7QUFFWCxTQUFLbEIsQ0FBTCxHQUFTLENBQVQ7QUFDQSxXQUFPLElBQVA7QUFDQTs7OzBCQUVNckIsQyxFQUFHOztBQUVULFdBQVNBLEVBQUVxQixDQUFGLEtBQVEsS0FBS0EsQ0FBZCxJQUFzQnJCLEVBQUV1QyxHQUFGLEtBQVUsS0FBS0EsR0FBN0M7QUFFQTs7OzZCQUVTOztBQUVULFdBQU8sQ0FBQyxLQUFLbEIsQ0FBTixFQUFTLEtBQUtrQixHQUFkLENBQVA7QUFFQTs7OzJCQUVPO0FBQ1AsU0FBS2xCLENBQUwsR0FBUyxHQUFUO0FBQ0EsU0FBS2tCLEdBQUwsR0FBVyxHQUFYO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7OzsyQkFFTzs7QUFFUCxXQUFPLElBQUlpRSxPQUFKLENBQVksS0FBS25GLENBQWpCLEVBQW9CLEtBQUtrQixHQUF6QixDQUFQO0FBRUE7Ozs7OzttQkEvRW1CaUUsTyIsImZpbGUiOiJxdWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTdkMGMwZmZmYjdmMjljMmY3YWMiLCJleHBvcnQgKiBmcm9tICcuL2VtaXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbml0aWFsaXplJztcbmltcG9ydCBTcGFuIGZyb20gJy4vbWF0aC9TcGFuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwYW4oYSwgYiwgY2VudGVyKSB7XG4gICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIsIGNlbnRlcik7XG59XG5cbmV4cG9ydCB7IFNwYW4gfTtcblxuZ2xvYmFsLlF1YXJrID0gZXhwb3J0cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJleHBvcnQgKiBmcm9tICcuL2NvbnN0JztcblxuaW1wb3J0IEVtaXR0ZXIgZnJvbSAnLi9FbWl0dGVyJztcblxuZXhwb3J0IHtFbWl0dGVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBQT09MX01BWCA9IDEwMDA7XG5leHBvcnQgY29uc3QgVElNRV9TVEVQID0gNjA7XG5leHBvcnQgY29uc3QgVVNFX0NMT0NLID0gZmFsc2U7XG5leHBvcnQgY29uc3QgTUVBU1VSRSA9IDEwMDtcbmV4cG9ydCBjb25zdCBFVUxFUiA9ICdldWxlcic7XG5leHBvcnQgY29uc3QgUksyID0gJ3J1bmdlLWt1dHRhMic7XG5leHBvcnQgY29uc3QgUks0ID0gJ3J1bmdlLWt1dHRhNCc7XG5leHBvcnQgY29uc3QgVkVSTEVUID0gJ3ZlcmxldCc7XG5leHBvcnQgY29uc3QgUEFSVElDTEVfQ1JFQVRFRCA9ICdwYXJ0aWxjbGVDcmVhdGVkJztcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9VUERBVEUgPSAncGFydGlsY2xlVXBkYXRlJztcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9TTEVFUCA9ICdwYXJ0aWNsZVNsZWVwJztcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9ERUFEID0gJ3BhcnRpbGNsZURlYWQnO1xuZXhwb3J0IGNvbnN0IEVNSVRURVJfQURERUQgPSAnZW1pdHRlckFkZGVkJztcbmV4cG9ydCBjb25zdCBFTUlUVEVSX1JFTU9WRUQgPSAnZW1pdHRlclJlbW92ZWQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbWl0dGVyL2NvbnN0LmpzIiwiaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4uL2NvcmUvUGFydGljbGUnO1xuaW1wb3J0IFJhdGUgZnJvbSAnLi4vaW5pdGlhbGl6ZS9SYXRlJztcbmltcG9ydCBOdW1lcmljYWxJbnRlZ3JhdGlvbiBmcm9tICcuLi9tYXRoL051bWVyaWNhbEludGVncmF0aW9uJztcbmltcG9ydCB7IFBBUlRJQ0xFX0NSRUFURUQsIFBBUlRJQ0xFX1VQREFURSwgUEFSVElDTEVfREVBRCB9IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IGluaXRpYWxpemVGbiBmcm9tICcuLi9pbml0aWFsaXplL0luaXRpYWxpemVVdGlsJztcbmltcG9ydCBNaW5pU2lnbmFsIGZyb20gJ21pbmktc2lnbmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIgZXh0ZW5kcyBQYXJ0aWNsZXtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZXMgPSBbXTtcbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcbiAgICAvKipcbiAgICAgKiBUaGUgZnJpY3Rpb24gY29lZmZpY2llbnQgZm9yIGFsbCBwYXJ0aWNsZSBlbWl0IGJ5IFRoaXM7XG4gICAgICogQHByb3BlcnR5IGRhbXBpbmdcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDAuMDA2XG4gICAgICovXG4gICAgdGhpcy5kYW1waW5nID0gLjAwNjtcbiAgICAvKipcbiAgICAgKiBJZiBiaW5kRW1pdHRlciB0aGUgcGFydGljbGVzIGNhbiBiaW5kIHRoaXMgZW1pdHRlcidzIHByb3BlcnR5O1xuICAgICAqIEBwcm9wZXJ0eSBiaW5kRW1pdHRlclxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICB0aGlzLmJpbmRFbWl0dGVyID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyBwZXIgc2Vjb25kIGVtaXQgKGEgW3BhcnRpY2xlXS9iIFtzXSk7XG4gICAgICogQHByb3BlcnR5IHJhdGVcbiAgICAgKiBAdHlwZSB7UXVhcmsuUmF0ZX1cbiAgICAgKiBAZGVmYXVsdCBRdWFyay5SYXRlKDEsIC4xKVxuICAgICAqL1xuICAgIHRoaXMucmF0ZSA9IG5ldyBSYXRlKDEsIC4xKTtcblxuICAgIHRoaXMuaW50ZWdyYXRvciA9IG5ldyBOdW1lcmljYWxJbnRlZ3JhdGlvbigpO1xuICB9XG5cbiAgZW1pdChlbWl0VGltZSwgbGlmZSkge1xuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSBlbWl0VGltZSB8fCBJbmZpbml0eTtcblxuICAgIGlmKCFpc05hTihsaWZlKSkge1xuICAgICAgdGhpcy5saWZlID0gbGlmZTtcbiAgICB9XG5cbiAgICB0aGlzLnJhdGUuaW5pdCgpO1xuXG4gICAgdGhpcy5wYXJ0aWNsZUNyZWF0ZWQgPSBuZXcgTWluaVNpZ25hbCgpO1xuICAgIHRoaXMucGFydGljbGVVcGRhdGUgPSBuZXcgTWluaVNpZ25hbCgpO1xuICAgIHRoaXMucGFydGljbGVEZWFkID0gbmV3IE1pbmlTaWduYWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdG9wIGVtaXRpbmdcbiAgICogQG1ldGhvZCBzdG9wRW1pdFxuICAgKi9cbiAgc3RvcEVtaXQoKSB7XG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBjdXJyZW50IGFsbCBwYXJ0aWNsZXNcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcbiAgICovXG4gIHJlbW92ZUFsbFBhcnRpY2xlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZGVhZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIHNpbmdsZSBwYXJ0aWNsZTtcbiAgICogXG4gICAqIGNhbiB1c2UgZW1pdCh7eDoxMH0sbmV3IEdyYXZpdHkoMTApLHsncGFydGljbGVVcGRhdGUnLGZ1bn0pIG9yIGVtaXQoW3t4OjEwfSxuZXcgSW5pdGlhbGl6ZV0sbmV3IEdyYXZpdHkoMTApLHsncGFydGljbGVVcGRhdGUnLGZ1bn0pXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXG4gICAqL1xuICBjcmVhdGVQYXJ0aWNsZShpbml0aWFsaXplLCBiZWhhdmlvdXIpIHtcbiAgICBjb25zdCBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZSgpO1xuICAgIHRoaXMuc2V0dXBQYXJ0aWNsZShwYXJ0aWNsZSwgaW5pdGlhbGl6ZSwgYmVoYXZpb3VyKTtcbiAgICAvLyB0aGlzLmRpc3BhdGNoRXZlbnQoUEFSVElDTEVfQ1JFQVRFRCwgcGFydGljbGUpO1xuICAgIC8vIHRoaXMuZGlzcGF0Y2goUEFSVElDTEVfQ1JFQVRFRCwgcGFydGljbGUpO1xuICAgIHRoaXMucGFydGljbGVDcmVhdGVkLmRpc3BhdGNoKHBhcnRpY2xlKTtcblxuXG4gICAgcmV0dXJuIHBhcnRpY2xlO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBpbml0aWFsaXplIHRvIHRoaXMgZW1pdHRlclxuICAgKiBAbWV0aG9kIGFkZFNlbGZJbml0aWFsaXplXG4gICAqL1xuICBhZGRTZWxmSW5pdGlhbGl6ZShwT2JqKSB7XG4gICAgaWYgKHBPYmpbJ2luaXQnXSkge1xuICAgICAgcE9iai5pbml0KHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRBbGwoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIHRoZSBJbml0aWFsaXplIHRvIHBhcnRpY2xlcztcbiAgICogXG4gICAqIHlvdSBjYW4gdXNlIGluaXRpYWxpemVzIGFycmF5OmZvciBleGFtcGxlIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShpbml0aWFsaXplMSxpbml0aWFsaXplMixpbml0aWFsaXplMyk7XG4gICAqIEBtZXRob2QgYWRkSW5pdGlhbGl6ZVxuICAgKiBAcGFyYW0ge1F1YXJrLkluaXRpYWxpemV9IGluaXRpYWxpemUgbGlrZSB0aGlzIG5ldyBRdWFyay5SYWRpdXMoMSwgMTIpXG4gICAqL1xuICBhZGRJbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pbml0aWFsaXplcy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSB0aGUgSW5pdGlhbGl6ZVxuICAgKiBAbWV0aG9kIHJlbW92ZUluaXRpYWxpemVcbiAgICogQHBhcmFtIHtRdWFyay5Jbml0aWFsaXplfSBpbml0aWFsaXplIGEgaW5pdGlhbGl6ZVxuICAgKi9cbiAgcmVtb3ZlSW5pdGlhbGl6ZShpbml0aWFsaXplcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbml0aWFsaXplcy5pbmRleE9mKGluaXRpYWxpemVyKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5pbml0aWFsaXplcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYWxsIEluaXRpYWxpemVzXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZXJzXG4gICAqL1xuICByZW1vdmVJbml0aWFsaXplcnMoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCB0aGUgQmVoYXZpb3VyIHRvIHBhcnRpY2xlcztcbiAgICogXG4gICAqIHlvdSBjYW4gdXNlIEJlaGF2aW91cnMgYXJyYXk6ZW1pdHRlci5hZGRCZWhhdmlvdXIoQmVoYXZpb3VyMSxCZWhhdmlvdXIyLEJlaGF2aW91cjMpO1xuICAgKiBAbWV0aG9kIGFkZEJlaGF2aW91clxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGxpa2UgdGhpcyBuZXcgUXVhcmsuQ29sb3IoJ3JhbmRvbScpXG4gICAqL1xuICBhZGRCZWhhdmlvdXIoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmJlaGF2aW91cnMucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShcInBhcmVudHNcIikpXG4gICAgICAgIGFyZ3VtZW50c1tpXS5wYXJlbnRzLnB1c2godGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSB0aGUgQmVoYXZpb3VyXG4gICAqIEBtZXRob2QgcmVtb3ZlQmVoYXZpb3VyXG4gICAqIEBwYXJhbSB7UXVhcmsuQmVoYXZpb3VyfSBiZWhhdmlvdXIgYSBiZWhhdmlvdXJcbiAgICovXG4gIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYWxsIGJlaGF2aW91cnNcbiAgICogQG1ldGhvZCByZW1vdmVBbGxCZWhhdmlvdXJzXG4gICAqL1xuICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xuICAgIHRoaXMuYmVoYXZpb3Vycy5sZW5ndGggPSAwO1xuICB9XG5cbiAgaW50ZWdyYXRlKHRpbWUpIHtcbiAgICBjb25zdCBkYW1waW5nID0gMSAtIHRoaXMuZGFtcGluZztcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7XG5cbiAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHRoaXMsIHRpbWUsIGRhbXBpbmcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2ldO1xuICAgICAgcGFydGljbGUudXBkYXRlKHRpbWUsIGkpO1xuICAgICAgdGhpcy5pbnRlZ3JhdG9yLmludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZyk7XG5cbiAgICAgIC8vIHRoaXMuZGlzcGF0Y2hFdmVudChQQVJUSUNMRV9VUERBVEUsIHBhcnRpY2xlKTtcbiAgICAgIC8vIHRoaXMuZGlzcGF0Y2goUEFSVElDTEVfVVBEQVRFLCBwYXJ0aWNsZSk7XG5cbiAgICAgIHRoaXMucGFydGljbGVVcGRhdGUuZGlzcGF0Y2gocGFydGljbGUpO1xuICAgIH1cbiAgfVxuXG4gIGVtaXR0aW5nKHRpbWUpIHtcbiAgICBpZiAodGhpcy5lbWl0VG90YWxUaW1lcyA9PSAnb25jZScpIHsgIFxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5yYXRlLmdldFZhbHVlKDk5OTk5KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHRoaXMuZW1pdFRvdGFsVGltZXMpKSB7XG4gICAgICB0aGlzLmVtaXRUaW1lICs9IHRpbWU7XG4gICAgICBpZiAodGhpcy5lbWl0VGltZSA8IHRoaXMuZW1pdFRvdGFsVGltZXMpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5yYXRlLmdldFZhbHVlKHRpbWUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICB0aGlzLmFnZSArPSB0aW1lO1xuICAgIGlmICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUgfHwgdGhpcy5kZWFkKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXR0aW5nKHRpbWUpO1xuICAgIHRoaXMuaW50ZWdyYXRlKHRpbWUpO1xuICAgIGxldCBwYXJ0aWNsZTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgayA9IGxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2tdO1xuICAgICAgaWYgKHBhcnRpY2xlLmRlYWQpIHtcbiAgICAgICAgLy8gdGhpcy5kaXNwYXRjaEV2ZW50KFBBUlRJQ0xFX0RFQUQgLCBwYXJ0aWNsZSk7XG4gICAgICAgIC8vIHRoaXMuZGlzcGF0Y2goUEFSVElDTEVfREVBRCAsIHBhcnRpY2xlKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZURlYWQuZGlzcGF0Y2gocGFydGljbGUpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5zcGxpY2UoaywgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNldHVwUGFydGljbGUocGFydGljbGUsIGluaXRpYWxpemUsIGJlaGF2aW91cikge1xuICAgIGxldCBpbml0aWFsaXplcyA9IHRoaXMuaW5pdGlhbGl6ZXM7XG4gICAgbGV0IGJlaGF2aW91cnMgPSB0aGlzLmJlaGF2aW91cnM7XG5cbiAgICBpZiAoaW5pdGlhbGl6ZSkge1xuICAgICAgaWYgKCBpbml0aWFsaXplIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgIGluaXRpYWxpemVzID0gaW5pdGlhbGl6ZTtcbiAgICAgIGVsc2VcbiAgICAgICAgaW5pdGlhbGl6ZXMgPSBbaW5pdGlhbGl6ZV07XG4gICAgfVxuXG4gICAgaWYgKGJlaGF2aW91cikge1xuICAgICAgaWYgKCBiZWhhdmlvdXIgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgYmVoYXZpb3VycyA9IGJlaGF2aW91cjtcbiAgICAgIGVsc2VcbiAgICAgICAgYmVoYXZpb3VycyA9IFtiZWhhdmlvdXJdO1xuICAgIH1cblxuICAgIHBhcnRpY2xlLnJlc2V0KCk7XG4gICAgaW5pdGlhbGl6ZUZuKHRoaXMsIHBhcnRpY2xlLCBpbml0aWFsaXplcyk7XG4gICAgcGFydGljbGUuYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKTtcbiAgICBwYXJ0aWNsZS5wYXJlbnQgPSB0aGlzO1xuICAgIHRoaXMucGFydGljbGVzLnB1c2gocGFydGljbGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gLTE7XG4gICAgaWYgKHRoaXMucGFydGljbGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZUluaXRpYWxpemVycygpO1xuICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XG5cbiAgICAgIGlmICh0aGlzLnBhcmVudClcbiAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlRW1pdHRlcih0aGlzKTtcbiAgICB9XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbWl0dGVyL0VtaXR0ZXIuanMiLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XG5cbmxldCB1aWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZXtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuaWQgPSB1aWQrKztcbiAgICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy52LngsIC10aGlzLnYueSkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgfVxuXG4gICAgcmVzZXQoaW5pdCkge1xuICAgICAgdGhpcy5saWZlID0gSW5maW5pdHk7XG4gICAgICB0aGlzLmFnZSA9IDA7XG4gICAgICB0aGlzLmVuZXJneSA9IDE7XG4gICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2xlZXAgPSBmYWxzZTtcbiAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgIHRoaXMubWFzcyA9IDE7XG4gICAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICAgICAgdGhpcy5hbHBoYSA9IDE7XG4gICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgICAgdGhpcy5jb2xvciA9IG51bGw7XG4gICAgICB0aGlzLmVhc2luZyA9ICh2YWwpID0+IHZhbDtcbiAgICAgIHRoaXMudHJhbnNmb3JtID0ge31cbiAgICAgIGlmIChpbml0KSB7XG4gICAgICAgIHRoaXMucCA9IG5ldyBWZWN0b3IyRCgpO1xuICAgICAgICB0aGlzLnYgPSBuZXcgVmVjdG9yMkQoKTtcbiAgICAgICAgdGhpcy5hID0gbmV3IFZlY3RvcjJEKCk7XG4gICAgICAgIHRoaXMub2xkID0ge1xuICAgICAgICAgIHAgOiBuZXcgVmVjdG9yMkQoKSxcbiAgICAgICAgICB2IDogbmV3IFZlY3RvcjJEKCksXG4gICAgICAgICAgYSA6IG5ldyBWZWN0b3IyRCgpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVsZXRlIHRoaXMudHJhbnNmb3JtO1xuICAgICAgICB0aGlzLnAuc2V0KDAsIDApO1xuICAgICAgICB0aGlzLnYuc2V0KDAsIDApO1xuICAgICAgICB0aGlzLmEuc2V0KDAsIDApO1xuICAgICAgICB0aGlzLm9sZC5wLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5vbGQudi5zZXQoMCwgMCk7XG4gICAgICAgIHRoaXMub2xkLmEuc2V0KDAsIDApO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmFuc2Zvcm0ucmdiID0ge1xuICAgICAgICByIDogMjU1LFxuICAgICAgICBnIDogMjU1LFxuICAgICAgICBiIDogMjU1XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSwgaW5kZXgpIHtcbiAgICAgIGlmKCF0aGlzLnNsZWVwKSB7XG4gICAgICAgIHRoaXMuYWdlICs9IHRpbWU7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYmVoYXZpb3Vycy5sZW5ndGg7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYmVoYXZpb3Vyc1tpXSlcbiAgICAgICAgICAgIHRoaXMuYmVoYXZpb3Vyc1tpXS5hcHBseUJlaGF2aW91cih0aGlzLCB0aW1lLCBpbmRleClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmFnZSA+PSB0aGlzLmxpZmUpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuZWFzaW5nKHRoaXMuYWdlIC8gdGhpcy5saWZlKTtcbiAgICAgICAgdGhpcy5lbmVyZ3kgPSBNYXRoLm1heCgxIC0gc2NhbGUsIDApO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgYWRkQmVoYXZpb3VyKGJlaGF2aW91cikge1xuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYmVoYXZpb3VyKTtcbiAgICAgIGlmIChiZWhhdmlvdXIuaGFzT3duUHJvcGVydHkoJ3BhcmVudHMnKSl7XG4gICAgICAgIGJlaGF2aW91ci5wYXJlbnRzLnB1c2godGhpcyk7XG4gICAgICB9XG4gICAgICBiZWhhdmlvdXIuaW5pdGlhbGl6ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRCZWhhdmlvdXJzKGJlaGF2aW91cnMpIHtcbiAgICAgIHZhciBsZW5ndGggPSBiZWhhdmlvdXJzLmxlbmd0aCwgaTtcbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGRCZWhhdmlvdXIoYmVoYXZpb3Vyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5iZWhhdmlvdXJzLmluZGV4T2YoYmVoYXZpb3VyKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhciBiZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgYmVoYXZpb3VyLnBhcmVudHMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUFsbEJlaGF2aW91cnMoKSB7XG4gICAgICB0aGlzLmJlaGF2aW91cnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0b3J5IHRoaXMgcGFydGljbGVcbiAgICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XG4gICAgICB0aGlzLmVuZXJneSA9IDA7XG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRHtcclxuXHJcbiAgY29uc3RydWN0b3IoeCwgeSl7XHJcbiAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgfVxyXG5cclxuICBzZXQoeCwgeSkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0WCh4KSB7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFkoeSkge1xyXG5cclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0Q29tcG9uZW50KGluZGV4LCB2YWx1ZSkge1xyXG5cclxuICAgIHN3aXRjaCAoIGluZGV4ICkge1xyXG5cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHRoaXMueCA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0R3JhZGllbnQoKSB7XHJcbiAgICBpZiAodGhpcy54ICE9IDApXHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA+IDApXHJcbiAgICAgIHJldHVybiBNYXRoLlBJIC8gMjtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA8IDApXHJcbiAgICAgIHJldHVybiAtTWF0aC5QSSAvIDI7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnQoaW5kZXgpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRleCBpcyBvdXQgb2YgcmFuZ2U6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb3B5KHYpIHtcclxuXHJcbiAgICB0aGlzLnggPSB2Lng7XHJcbiAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFkZFZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICB0aGlzLnkgKz0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFhZKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gYTtcclxuICAgIHRoaXMueSArPSBiO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCArIGIueDtcclxuICAgIHRoaXMueSA9IGEueSArIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCArPSBzO1xyXG4gICAgdGhpcy55ICs9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc3ViKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1YlZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICB0aGlzLnkgLT0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1YlZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCAtIGIueDtcclxuICAgIHRoaXMueSA9IGEueSAtIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtdWx0aXBseVNjYWxhcihzKSB7XHJcblxyXG4gICAgdGhpcy54ICo9IHM7XHJcbiAgICB0aGlzLnkgKj0gcztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBkaXZpZGVTY2FsYXIocykge1xyXG5cclxuICAgIGlmIChzICE9PSAwKSB7XHJcblxyXG4gICAgICB0aGlzLnggLz0gcztcclxuICAgICAgdGhpcy55IC89IHM7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHRoaXMuc2V0KDAsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtaW4odikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPiB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA+IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtYXgodikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPCB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBjbGFtcChtaW4sIG1heCkge1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyBtaW4gPCBtYXgsIGlmIHRoaXMgYXNzdW1wdGlvbiBpc24ndCB0cnVlIGl0IHdpbGwgbm90IG9wZXJhdGUgY29ycmVjdGx5XHJcblxyXG4gICAgaWYgKHRoaXMueCA8IG1pbi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtaW4ueDtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueCA+IG1heC54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtYXgueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IG1pbi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtaW4ueTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueSA+IG1heC55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtYXgueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbmVnYXRlKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKC0xKTtcclxuXHJcbiAgfVxyXG5cclxuICBkb3Qodikge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoU3EoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcclxuXHJcbiAgfVxyXG5cclxuICBsZW5ndGgoKSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG5cclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUbyh2KSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlVG9TcXVhcmVkKHYpKTtcclxuXHJcbiAgfVxyXG5cclxuICByb3RhdGUodGhhKSB7XHJcbiAgICB2YXIgeCA9IHRoaXMueDtcclxuICAgIHZhciB5ID0gdGhpcy55O1xyXG4gICAgdGhpcy54ID0geCAqIE1hdGguY29zKHRoYSkgKyB5ICogTWF0aC5zaW4odGhhKTtcclxuICAgIHRoaXMueSA9IC14ICogTWF0aC5zaW4odGhhKSArIHkgKiBNYXRoLmNvcyh0aGEpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZVRvU3F1YXJlZCh2KSB7XHJcblxyXG4gICAgdmFyIGR4ID0gdGhpcy54IC0gdi54LCBkeSA9IHRoaXMueSAtIHYueTtcclxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRMZW5ndGgobCkge1xyXG5cclxuICAgIHZhciBvbGRMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG5cclxuICAgIGlmIChvbGRMZW5ndGggIT09IDAgJiYgbCAhPT0gb2xkTGVuZ3RoKSB7XHJcblxyXG4gICAgICB0aGlzLm11bHRpcGx5U2NhbGFyKGwgLyBvbGRMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGxlcnAodiwgYWxwaGEpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gKHYueCAtIHRoaXMueCApICogYWxwaGE7XHJcbiAgICB0aGlzLnkgKz0gKHYueSAtIHRoaXMueSApICogYWxwaGE7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZXF1YWxzKHYpIHtcclxuXHJcbiAgICByZXR1cm4gKCh2LnggPT09IHRoaXMueCApICYmICh2LnkgPT09IHRoaXMueSApICk7XHJcblxyXG4gIH1cclxuXHJcbiAgdG9BcnJheSgpIHtcclxuXHJcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMueCA9IDAuMDtcclxuICAgIHRoaXMueSA9IDAuMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XHJcblxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL1ZlY3RvcjJELmpzIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGV7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG51bXBhbiwgdGltZXBhbikge1xyXG4gICAgdGhpcy5udW1QYW4gPSBudW1wYW5cclxuICAgIHRoaXMudGltZVBhbiA9IHRpbWVwYW47XHJcbiAgICB0aGlzLm51bVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoaXMubnVtUGFuKTtcclxuICAgIHRoaXMudGltZVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoaXMudGltZVBhbik7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLm5leHRUaW1lID0gMDtcclxuICAgIHRoaXMuaW5pdCgpOyAgXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5uZXh0VGltZSA9IHRoaXMudGltZVBhbi5nZXRWYWx1ZSgpOyBcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKHRpbWUpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5zdGFydFRpbWUgPj0gdGhpcy5uZXh0VGltZSkge1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICAgIHRoaXMubmV4dFRpbWUgPSB0aGlzLnRpbWVQYW4uZ2V0VmFsdWUoKTtcclxuICAgICAgaWYgKHRoaXMubnVtUGFuLmIgPT0gMSkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bVBhbi5nZXRWYWx1ZShmYWxzZSkgPiAwLjUpXHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1QYW4uZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL1JhdGUuanMiLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcbmltcG9ydCBTcGFuIGZyb20gJy4uL21hdGgvU3Bhbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGluaXRWYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIGEgc3BlY2lmaWMgdmFsdWUsIGNvdWxkIGJlIGV2ZXJ5dGhpbmcgYnV0IG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSBkZWZhdWx0cyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgaW5pdFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgZGVmYXVsdHMpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpID8gdmFsdWUgOiBkZWZhdWx0cztcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgVmVjdG9yMkQgLSBvciBjcmVhdGVzIGEgbmV3IG9uZVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGdldFZlY3RvcjJEXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtRdWFyay5WZWN0b3IyRCB8IE51bWJlcn0gcG9zdGlvbk9yWFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt5XSBqdXN0IHZhbGlkIGlmICdwb3N0aW9uT3JYJyBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7UXVhcmsuVmVjdG9yMkR9XHJcbiAgICAgKi9cclxuICAgIGdldFZlY3RvcjJEOiBmdW5jdGlvbihwb3N0aW9uT3JYLCB5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihwb3N0aW9uT3JYKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGlvbk9yWDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdmVjdG9yMmQgPSBuZXcgVmVjdG9yMkQocG9zdGlvbk9yWCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3IyZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QganVkZ2VWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHBPQkpgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIGZ1bmN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBPQkpcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBqdWRnZVZlY3RvcjJEOiBmdW5jdGlvbihwT0JKKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgneScpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3AnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdwb3NpdGlvbicpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ3AnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2eCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3Z4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndicpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3ZlbG9jaXR5JykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAndic7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdhJykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZScpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ2EnO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFZlY3RvcjJEQnlPYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGB0YXJnZXRgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGBwT0JKYFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwT0JKXHJcbiAgICAgKi9cclxuICAgIHNldFZlY3RvcjJEQnlPYmplY3Q6IGZ1bmN0aW9uKHRhcmdldCwgcE9CSikge1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd4JykpXHJcbiAgICAgICAgICAgIHRhcmdldC5wLnggPSBwT0JKWyd4J107XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd5JykpXHJcbiAgICAgICAgICAgIHRhcmdldC5wLnkgPSBwT0JKWyd5J107XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2eCcpKVxyXG4gICAgICAgICAgICB0YXJnZXQudi54ID0gcE9CSlsndngnXTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3Z5JykpXHJcbiAgICAgICAgICAgIHRhcmdldC52LnkgPSBwT0JKWyd2eSddO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSlcclxuICAgICAgICAgICAgdGFyZ2V0LmEueCA9IHBPQkpbJ2F4J107XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdheScpKVxyXG4gICAgICAgICAgICB0YXJnZXQuYS55ID0gcE9CSlsnYXknXTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3AnKSlcclxuICAgICAgICAgICAgcGFydGljbGUucC5jb3B5KHBPQkpbJ3AnXSk7XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2JykpXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnYuY29weShwT0JKWyd2J10pO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgnYScpKVxyXG4gICAgICAgICAgICBwYXJ0aWNsZS5hLmNvcHkocE9CSlsnYSddKTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3Bvc2l0aW9uJykpXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnAuY29weShwT0JKWydwb3NpdGlvbiddKTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3ZlbG9jaXR5JykpXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnYuY29weShwT0JKWyd2ZWxvY2l0eSddKTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2FjY2VsZXJhdGUnKSlcclxuICAgICAgICAgICAgcGFydGljbGUuYS5jb3B5KHBPQkpbJ2FjY2VsZXJhdGUnXSk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbmV3IFF1YXJrLlNwYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2Qgc2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYSwgYiBhbmQgYyBzaG91bGQgYmUgJ01peGVkJyBvciAnTnVtYmVyJz9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUXVhcmsuU3Bhbn0gYVxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gICAgICAgICAgICAgICBiXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtRdWFyay5TcGFufVxyXG4gICAgICovXHJcbiAgICBzZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIFNwYW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhLCBiLCBjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIGEgUXVhcmsuU3BhbiwgaWYgdGhlIHBhcmFtIGlzIG5vdCBhIFF1YXJrLlNwYW4gaXQgd2lsbCByZXR1cm4gdGhlIGdpdmVuIHBhcmFtZXRlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGdldFNwYW5WYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWQgfCBRdWFyay5TcGFufSBwYW5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtNaXhlZH0gdGhlIHZhbHVlIG9mIFF1YXJrLlNwYW4gT1IgdGhlIHBhcmFtZXRlciBpZiBpdCBpcyBub3QgYSBRdWFyay5TcGFuXHJcbiAgICAgKi9cclxuICAgIGdldFNwYW5WYWx1ZTogZnVuY3Rpb24ocGFuKSB7XHJcbiAgICAgICAgaWYgKHBhbiBpbnN0YW5jZW9mIFNwYW4pXHJcbiAgICAgICAgICAgIHJldHVybiBwYW4uZ2V0VmFsdWUoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBwYW47XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGVkZWYgIHtPYmplY3R9IHJnYk9iamVjdFxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHIgcmVkIHZhbHVlXHJcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gZyBncmVlbiB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGIgYmx1ZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIGNvbnZlcnRzIGEgaGV4IHZhbHVlIHRvIGEgcmdiIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGhleFRvUkdCXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGggYW55IGhleCB2YWx1ZSwgZS5nLiAjMDAwMDAwIG9yIDAwMDAwMCBmb3IgYmxhY2tcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtyZ2JPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGhleFRvUkdCOiBmdW5jdGlvbihoKSB7XHJcbiAgICAgICAgdmFyIGhleDE2ID0gKGguY2hhckF0KDApID09IFwiI1wiKSA/IGguc3Vic3RyaW5nKDEsIDcpIDogaDtcclxuICAgICAgICB2YXIgciA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygwLCAyKSwgMTYpO1xyXG4gICAgICAgIHZhciBnID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDIsIDQpLCAxNik7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoNCwgNiksIDE2KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogcixcclxuICAgICAgICAgICAgZzogZyxcclxuICAgICAgICAgICAgYjogYlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIHJnYiB2YWx1ZSB0byBhIHJnYiBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCByZ2JUb0hleFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0IHwgUXVhcmsuaGV4VG9SR0J9IHJnYiBhIHJnYiBvYmplY3QgbGlrZSBpbiB7QGxpbmsgUXVhcmsjUXVhcmsuVXRpbC5oZXhUb1JHQn1cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJnYigpXHJcbiAgICAgKi9cclxuICAgIHJnYlRvSGV4OiBmdW5jdGlvbihyYmcpIHtcclxuICAgICAgICByZXR1cm4gJ3JnYignICsgcmJnLnIgKyAnLCAnICsgcmJnLmcgKyAnLCAnICsgcmJnLmIgKyAnKSc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9VdGlsLmpzIiwiaW1wb3J0IHsgcmFuZG9tQVRvQiwgcmFuZG9tRmxvYXRpbmcgfSBmcm9tICcuL01hdGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFue1xyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGNlbnRlciA9IGZhbHNlKSB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhKSkge1xyXG5cdFx0XHR0aGlzLmlzQXJyYXkgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmEgPSBhO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5hID0gYTtcclxuXHRcdFx0dGhpcy5iID0gYiB8fCB0aGlzLmE7XHJcblx0XHRcdHRoaXMuY2VudGVyID0gY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0VmFsdWUoSU5UKXtcclxuXHRcdGlmICh0aGlzLmlzQXJyYXkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYVtNYXRoLmZsb29yKHRoaXMuYS5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoIXRoaXMuY2VudGVyKVxyXG5cdFx0XHRcdHJldHVybiByYW5kb21BVG9CKHRoaXMuYSwgdGhpcy5iLCBJTlQpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHJhbmRvbUZsb2F0aW5nKHRoaXMuYSwgdGhpcy5iLCBJTlQpO1xyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL1NwYW4uanMiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUFUb0IoYSwgYiwgSU5UKSB7XHJcbiAgaWYgKCFJTlQpXHJcbiAgICByZXR1cm4gYSArIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhKSkgKyBhO1xyXG59XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0aW5nKGNlbnRlciwgZiwgSU5UKSB7XHJcbiAgcmV0dXJuIE1hdGhVdGlscy5yYW5kb21BVG9CKGNlbnRlciAtIGYsIGNlbnRlciArIGYsIElOVCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUcmFuc2Zvcm0oYSkge1xyXG4gIHJldHVybiBhICogTWF0aC5QSSAvIDE4MDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL01hdGhVdGlscy5qcyIsImltcG9ydCB7IEVVTEVSIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNhbEludGVncmF0aW9uIHtcblxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCBFVUxFUjtcbiAgfVxuXG4gIGludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZykge1xuICAgIHRoaXMuZXVsZXJJbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpO1xuICB9XG5cbiAgZXVsZXJJbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcbiAgICBpZiAoIXBhcnRpY2xlLnNsZWVwKSB7XG4gICAgICBwYXJ0aWNsZS5vbGQucC5jb3B5KHBhcnRpY2xlLnApO1xuICAgICAgcGFydGljbGUub2xkLnYuY29weShwYXJ0aWNsZS52KTtcbiAgICAgIHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIoMSAvIHBhcnRpY2xlLm1hc3MpO1xuICAgICAgcGFydGljbGUudi5hZGQocGFydGljbGUuYS5tdWx0aXBseVNjYWxhcih0aW1lKSk7XG4gICAgICBwYXJ0aWNsZS5wLmFkZChwYXJ0aWNsZS5vbGQudi5tdWx0aXBseVNjYWxhcih0aW1lKSk7XG4gICAgICBpZiAoZGFtcGluZyl7XG4gICAgICAgIHBhcnRpY2xlLnYubXVsdGlwbHlTY2FsYXIoZGFtcGluZyk7XG4gICAgICB9XG4gICAgICBwYXJ0aWNsZS5hLmNsZWFyKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbi5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCB7IGRlZ3JlZVRyYW5zZm9ybSB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZShlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZXMpIHtcclxuICBjb25zdCBsZW5ndGggPSBpbml0aWFsaXplcy5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGluaXRpYWxpemVzW2ldIGluc3RhbmNlb2YgSW5pdGlhbGl6ZSl7XHJcbiAgICAgIGluaXRpYWxpemVzW2ldLmluaXQoZW1pdHRlciwgcGFydGljbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZEVtaXR0ZXIoZW1pdHRlciwgcGFydGljbGUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZSl7XHJcbiAgVXRpbC5zZXRQcm90b3R5cGVCeU9iamVjdChwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbiAgVXRpbC5zZXRWZWN0b3IyREJ5T2JqZWN0KHBhcnRpY2xlLCBpbml0aWFsaXplKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZEVtaXR0ZXIoZW1pdHRlciwgcGFydGljbGUpIHtcclxuICBpZiAoZW1pdHRlci5iaW5kRW1pdHRlcikge1xyXG4gICAgcGFydGljbGUucC5hZGQoZW1pdHRlci5wKTtcclxuICAgIHBhcnRpY2xlLnYuYWRkKGVtaXR0ZXIudik7XHJcbiAgICBwYXJ0aWNsZS5hLmFkZChlbWl0dGVyLmEpO1xyXG4gICAgcGFydGljbGUudi5yb3RhdGUoZGVncmVlVHJhbnNmb3JtKGVtaXR0ZXIucm90YXRpb24pKTtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9Jbml0aWFsaXplVXRpbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRpYWxpemUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHJlc2V0KCkge1xyXG5cclxuXHR9XHJcblxyXG5cdGluaXQoZW1pdHRlciwgcGFydGljbGUpIHtcclxuXHRcdGlmIChwYXJ0aWNsZSkge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxpemUocGFydGljbGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsaXplKGVtaXR0ZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpIHtcclxuXHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgTWluaVNpZ25hbEJpbmRpbmcgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNaW5pU2lnbmFsQmluZGluZyhmbiwgb25jZSwgdGhpc0FyZykge1xuICAgIGlmIChvbmNlID09PSB1bmRlZmluZWQpIG9uY2UgPSBmYWxzZTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaW5pU2lnbmFsQmluZGluZyk7XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX29uY2UgPSBvbmNlO1xuICAgIHRoaXMuX3RoaXNBcmcgPSB0aGlzQXJnO1xuICAgIHRoaXMuX25leHQgPSB0aGlzLl9wcmV2ID0gdGhpcy5fb3duZXIgPSBudWxsO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1pbmlTaWduYWxCaW5kaW5nLCBbe1xuICAgIGtleTogJ2RldGFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgIGlmICh0aGlzLl9vd25lciA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhpcy5fb3duZXIuZGV0YWNoKHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTaWduYWxCaW5kaW5nO1xufSkoKTtcblxuZnVuY3Rpb24gX2FkZE1pbmlTaWduYWxCaW5kaW5nKHNlbGYsIG5vZGUpIHtcbiAgaWYgKCFzZWxmLl9oZWFkKSB7XG4gICAgc2VsZi5faGVhZCA9IG5vZGU7XG4gICAgc2VsZi5fdGFpbCA9IG5vZGU7XG4gIH0gZWxzZSB7XG4gICAgc2VsZi5fdGFpbC5fbmV4dCA9IG5vZGU7XG4gICAgbm9kZS5fcHJldiA9IHNlbGYuX3RhaWw7XG4gICAgc2VsZi5fdGFpbCA9IG5vZGU7XG4gIH1cblxuICBub2RlLl9vd25lciA9IHNlbGY7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbnZhciBNaW5pU2lnbmFsID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaVNpZ25hbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNpZ25hbCk7XG5cbiAgICB0aGlzLl9oZWFkID0gdGhpcy5fdGFpbCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2lnbmFsLCBbe1xuICAgIGtleTogJ2hhbmRsZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlcnMoKSB7XG4gICAgICB2YXIgZXhpc3RzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcblxuICAgICAgaWYgKGV4aXN0cykgcmV0dXJuICEhbm9kZTtcblxuICAgICAgdmFyIGVlID0gW107XG5cbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGVlLnB1c2gobm9kZSk7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKG5vZGUpIHtcbiAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBNaW5pU2lnbmFsQmluZGluZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2hhcygpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIE1pbmlTaWduYWxCaW5kaW5nIG9iamVjdC4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGUuX293bmVyID09PSB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc3BhdGNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG5cbiAgICAgIGlmICghbm9kZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5fb25jZSkgdGhpcy5kZXRhY2gobm9kZSk7XG4gICAgICAgIG5vZGUuX2ZuLmFwcGx5KG5vZGUuX3RoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoZm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjYWRkKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgRnVuY3Rpb24uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2FkZE1pbmlTaWduYWxCaW5kaW5nKHRoaXMsIG5ldyBNaW5pU2lnbmFsQmluZGluZyhmbiwgZmFsc2UsIHRoaXNBcmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25jZShmbikge1xuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNvbmNlKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgRnVuY3Rpb24uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2FkZE1pbmlTaWduYWxCaW5kaW5nKHRoaXMsIG5ldyBNaW5pU2lnbmFsQmluZGluZyhmbiwgdHJ1ZSwgdGhpc0FyZykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgTWluaVNpZ25hbEJpbmRpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNkZXRhY2goKTogRmlyc3QgYXJnIG11c3QgYmUgYSBNaW5pU2lnbmFsQmluZGluZyBvYmplY3QuJyk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5fb3duZXIgIT09IHRoaXMpIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobm9kZS5fcHJldikgbm9kZS5fcHJldi5fbmV4dCA9IG5vZGUuX25leHQ7XG4gICAgICBpZiAobm9kZS5fbmV4dCkgbm9kZS5fbmV4dC5fcHJldiA9IG5vZGUuX3ByZXY7XG5cbiAgICAgIGlmIChub2RlID09PSB0aGlzLl9oZWFkKSB7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBub2RlLl9uZXh0O1xuICAgICAgICBpZiAobm9kZS5fbmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3RhaWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUgPT09IHRoaXMuX3RhaWwpIHtcbiAgICAgICAgdGhpcy5fdGFpbCA9IG5vZGUuX3ByZXY7XG4gICAgICAgIHRoaXMuX3RhaWwuX25leHQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9vd25lciA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2hBbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2hBbGwoKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG4gICAgICBpZiAoIW5vZGUpIHJldHVybiB0aGlzO1xuXG4gICAgICB0aGlzLl9oZWFkID0gdGhpcy5fdGFpbCA9IG51bGw7XG5cbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIG5vZGUuX293bmVyID0gbnVsbDtcbiAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWluaVNpZ25hbDtcbn0pKCk7XG5cbk1pbmlTaWduYWwuTWluaVNpZ25hbEJpbmRpbmcgPSBNaW5pU2lnbmFsQmluZGluZztcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTWluaVNpZ25hbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21pbmktc2lnbmFscy9saWIvbWluaS1zaWduYWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmF0ZSBmcm9tICcuL1JhdGUnO1xuaW1wb3J0IFZlbG9jaXR5IGZyb20gJy4vVmVsb2NpdHknO1xuXG5leHBvcnQgeyBSYXRlLCBWZWxvY2l0eSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IHsgTUVBU1VSRSB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xyXG5pbXBvcnQgUG9sYXIyRCBmcm9tICcuLi9tYXRoL1BvbGFyMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cdGNvbnN0cnVjdG9yKHJwYW4sIHRoYXBhbiwgdHlwZSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHJwYW4sIHRoYXBhbiwgdHlwZSkge1xyXG5cdFx0dGhpcy5yUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUocnBhbik7XHJcblx0XHR0aGlzLnRoYVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoYXBhbik7XHJcblx0XHR0aGlzLnR5cGUgPSBVdGlsLmluaXRWYWx1ZSh0eXBlLCAndmVjdG9yJyk7XHJcblx0fVxyXG5cclxuXHRub3JtYWxpemVWZWxvY2l0eSh2cikge1xyXG5cdFx0cmV0dXJuIHZyICogTUVBU1VSRTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHRpZiAodGhpcy50eXBlID09ICdwJyB8fCB0aGlzLnR5cGUgPT0gJ1AnIHx8IHRoaXMudHlwZSA9PSAncG9sYXInKSB7XHJcblx0XHRcdGNvbnN0IHBvbGFyMmQgPSBuZXcgUG9sYXIyRCh0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhbi5nZXRWYWx1ZSgpKSwgdGhpcy50aGFQYW4uZ2V0VmFsdWUoKSAqIE1hdGguUEkgLyAxODApO1xyXG5cdFx0XHR0YXJnZXQudi54ID0gcG9sYXIyZC5nZXRYKCk7XHJcblx0XHRcdHRhcmdldC52LnkgPSBwb2xhcjJkLmdldFkoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhcmdldC52LnggPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhbi5nZXRWYWx1ZSgpKTtcclxuXHRcdFx0dGFyZ2V0LnYueSA9IHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy50aGFQYW4uZ2V0VmFsdWUoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvVmVsb2NpdHkuanMiLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2xhcjJEIHtcclxuXHJcblx0Y29uc3RydWN0b3IociwgdGhhKXtcclxuXHRcdHRoaXMuciA9IE1hdGguYWJzKHIpIHx8IDA7XHJcblx0XHR0aGlzLnRoYSA9IHRoYSB8fCAwO1xyXG5cdH1cclxuXHJcblx0c2V0KHIsIHRoYSkge1xyXG5cclxuXHRcdHRoaXMuciA9IHI7XHJcblx0XHR0aGlzLnRoYSA9IHRoYTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFIocikge1xyXG5cclxuXHRcdHRoaXMuciA9IHI7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRUaGEodGhhKSB7XHJcblxyXG5cdFx0dGhpcy50aGEgPSB0aGE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0Y29weShwKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcC5yO1xyXG5cdFx0dGhpcy50aGEgPSBwLnRoYTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHR0b1ZlY3RvcigpIHtcclxuXHRcdHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy5nZXRYKCksIHRoaXMuZ2V0WSgpKTtcclxuXHR9XHJcblxyXG5cdGdldFgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yICogTWF0aC5zaW4odGhpcy50aGEpO1xyXG5cdH1cclxuXHJcblx0Z2V0WSgpIHtcclxuXHRcdHJldHVybiAtdGhpcy5yICogTWF0aC5jb3ModGhpcy50aGEpO1xyXG5cdH1cclxuXHJcblx0bm9ybWFsaXplKCkge1xyXG5cclxuXHRcdHRoaXMuciA9IDE7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGVxdWFscyh2KSB7XHJcblxyXG5cdFx0cmV0dXJuICgodi5yID09PSB0aGlzLnIgKSAmJiAodi50aGEgPT09IHRoaXMudGhhICkgKTtcclxuXHJcblx0fVxyXG5cclxuXHR0b0FycmF5KCkge1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5yLCB0aGlzLnRoYV07XHJcblxyXG5cdH1cclxuXHJcblx0Y2xlYXIoKSB7XHJcblx0XHR0aGlzLnIgPSAwLjA7XHJcblx0XHR0aGlzLnRoYSA9IDAuMDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Y2xvbmUoKSB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQb2xhcjJEKHRoaXMuciwgdGhpcy50aGEpO1xyXG5cclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvUG9sYXIyRC5qcyJdLCJzb3VyY2VSb290IjoiIn0=