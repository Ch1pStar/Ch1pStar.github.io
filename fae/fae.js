/**
 * Fae.js v0.0.1
 *
 * 2016-09-10T10:54:07.199Z - 0e4d10f3b0387493660547dd32d04e8cb512ce9d
 *
 * https://github.com/Fae/fae#readme
 *
 * Released under the MIT License.
 *
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Fae", [], factory);
	else if(typeof exports === 'object')
		exports["Fae"] = factory();
	else
		root["Fae"] = factory();
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
/*!***********************************************************************************!*\
  !*** ./entry-6bcc5e05e02d437da7a3a29e427fb69b66c782032c816c62c84036e96df5027d.js ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.transform = exports.textures = exports.text_canvas = exports.sprites = exports.shapes = exports.interaction = exports.filters_pack = exports.filters = undefined;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	Object.keys(_core).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _core[key];
	    }
	  });
	});
	
	var _filters = __webpack_require__(/*! @fae/filters */ 42);
	
	var filters = _interopRequireWildcard(_filters);
	
	var _filtersPack = __webpack_require__(/*! @fae/filters-pack */ 50);
	
	var filters_pack = _interopRequireWildcard(_filtersPack);
	
	var _interaction = __webpack_require__(/*! @fae/interaction */ 62);
	
	var interaction = _interopRequireWildcard(_interaction);
	
	var _shapes = __webpack_require__(/*! @fae/shapes */ 17);
	
	var shapes = _interopRequireWildcard(_shapes);
	
	var _sprites = __webpack_require__(/*! @fae/sprites */ 66);
	
	var sprites = _interopRequireWildcard(_sprites);
	
	var _textCanvas = __webpack_require__(/*! @fae/text-canvas */ 82);
	
	var text_canvas = _interopRequireWildcard(_textCanvas);
	
	var _textures = __webpack_require__(/*! @fae/textures */ 72);
	
	var textures = _interopRequireWildcard(_textures);
	
	var _transform = __webpack_require__(/*! @fae/transform */ 68);
	
	var transform = _interopRequireWildcard(_transform);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.filters = filters;
	exports.filters_pack = filters_pack;
	exports.interaction = interaction;
	exports.shapes = shapes;
	exports.sprites = sprites;
	exports.text_canvas = text_canvas;
	exports.textures = textures;
	exports.transform = transform;

/***/ },
/* 1 */
/*!***********************************!*\
  !*** ./plugins/core/src/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.debug = exports.util = exports.render = exports.math = exports.glutil = exports.ecs = undefined;
	
	var _ecs = __webpack_require__(/*! ./ecs */ 2);
	
	var ecs = _interopRequireWildcard(_ecs);
	
	var _gl = __webpack_require__(/*! ./gl */ 32);
	
	var glutil = _interopRequireWildcard(_gl);
	
	var _math = __webpack_require__(/*! ./math */ 39);
	
	var math = _interopRequireWildcard(_math);
	
	var _render = __webpack_require__(/*! ./render */ 40);
	
	var render = _interopRequireWildcard(_render);
	
	var _util = __webpack_require__(/*! ./util */ 27);
	
	var util = _interopRequireWildcard(_util);
	
	var _debug = __webpack_require__(/*! ./debug */ 14);
	
	var debug = _interopRequireWildcard(_debug);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.ecs = ecs;
	exports.glutil = glutil;
	exports.math = math;
	exports.render = render;
	exports.util = util; // export some core modules
	
	exports.debug = debug;

/***/ },
/* 2 */
/*!***************************************!*\
  !*** ./plugins/core/src/ecs/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _SelfRenderComponent = __webpack_require__(/*! ./SelfRenderComponent */ 3);
	
	Object.defineProperty(exports, 'SelfRenderComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SelfRenderComponent).default;
	  }
	});
	
	var _SelfRenderSystem = __webpack_require__(/*! ./SelfRenderSystem */ 4);
	
	Object.defineProperty(exports, 'SelfRenderSystem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SelfRenderSystem).default;
	  }
	});
	
	var _VisibilityComponent = __webpack_require__(/*! ./VisibilityComponent */ 30);
	
	Object.defineProperty(exports, 'VisibilityComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VisibilityComponent).default;
	  }
	});
	
	var _Entity = __webpack_require__(/*! ./Entity */ 31);
	
	Object.defineProperty(exports, 'Entity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Entity).default;
	  }
	});
	
	var _System = __webpack_require__(/*! ./System */ 5);
	
	Object.defineProperty(exports, 'System', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_System).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/*!*****************************************************!*\
  !*** ./plugins/core/src/ecs/SelfRenderComponent.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = SelfRenderComponent;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function SelfRenderComponent(Base) {
	    /**
	     * @class SelfRenderComponent
	     * @memberof ecs
	     */
	    return function (_Base) {
	        _inherits(_class, _Base);
	
	        function _class() {
	            _classCallCheck(this, _class);
	
	            return _possibleConstructorReturn(this, _Base.apply(this, arguments));
	        }
	
	        /**
	         * The method called for the object to render itself.
	         *
	         * @abstract
	         * @param {Renderer} renderer - The renderer to use.
	         */
	        _class.prototype.render = function render() /* renderer */{
	            /* empty */
	        };
	
	        return _class;
	    }(Base);
	}

/***/ },
/* 4 */
/*!**************************************************!*\
  !*** ./plugins/core/src/ecs/SelfRenderSystem.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _System2 = __webpack_require__(/*! ./System */ 5);
	
	var _System3 = _interopRequireDefault(_System2);
	
	var _SelfRenderComponent = __webpack_require__(/*! ./SelfRenderComponent */ 3);
	
	var _SelfRenderComponent2 = _interopRequireDefault(_SelfRenderComponent);
	
	var _Renderer = __webpack_require__(/*! ../render/Renderer */ 7);
	
	var _Renderer2 = _interopRequireDefault(_Renderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 * @memberof ecs
	 */
	var SelfRenderSystem = function (_System) {
	    _inherits(SelfRenderSystem, _System);
	
	    /**
	     * @param {Renderer} renderer - The renderer to use.
	     * @param {number} priority - The priority of the system, higher means earlier.
	     * @param {number} frequency - How often to run the update loop. `1` means every
	     *  time, `2` is every other time, etc.
	     */
	    function SelfRenderSystem(renderer) {
	        var priority = arguments.length <= 1 || arguments[1] === undefined ? SelfRenderSystem.defaultPriority : arguments[1];
	        var frequency = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	        _classCallCheck(this, SelfRenderSystem);
	
	        return _possibleConstructorReturn(this, _System.call(this, renderer, priority, frequency));
	    }
	
	    /**
	     * Returns true if the entity is eligible to the system, false otherwise.
	     *
	     * @param {Entity} entity - The entity to test.
	     * @return {boolean} True if entity should be included.
	     */
	
	
	    SelfRenderSystem.prototype.test = function test(entity) {
	        return entity.hasComponent(_SelfRenderComponent2.default);
	    };
	
	    /**
	     * Tells the entity to render itself by calling the `render()` method with
	     * the renderer and elapsed time.
	     *
	     * @param {Entity} entity - The entity to update.
	     * @param {number} elapsed - The time elapsed since last update call.
	     */
	
	
	    SelfRenderSystem.prototype.update = function update(entity, elapsed) {
	        entity.render(this.renderer, elapsed);
	    };
	
	    return SelfRenderSystem;
	}(_System3.default);
	
	exports.default = SelfRenderSystem;
	
	
	_Renderer2.default.addDefaultSystem(SelfRenderSystem);
	
	/**
	 * @static
	 * @constant
	 * @member {number}
	 * @default 1000
	 */
	SelfRenderSystem.defaultPriority = _System3.default.PRIORITY.RENDER;

/***/ },
/* 5 */
/*!****************************************!*\
  !*** ./plugins/core/src/ecs/System.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ecs = __webpack_require__(/*! @fae/ecs */ 6);
	
	var _ecs2 = _interopRequireDefault(_ecs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 * @memberof ecs
	 */
	var System = function (_ECS$System) {
	  _inherits(System, _ECS$System);
	
	  /**
	   *
	   * @param {Renderer} renderer - The renderer this sytem belongs to.
	   * @param {number} priority - The priority of the system, higher means earlier.
	   * @param {number} frequency - How often to run the update loop. `1` means every
	   *  time, `2` is every other time, etc.
	   */
	  function System(renderer) {
	    var priority = arguments.length <= 1 || arguments[1] === undefined ? System.PRIORITY.USER : arguments[1];
	    var frequency = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	    _classCallCheck(this, System);
	
	    /**
	     * The renderer to use.
	     *
	     * @member {Renderer}
	     */
	    var _this = _possibleConstructorReturn(this, _ECS$System.call(this, frequency));
	
	    _this.renderer = renderer;
	
	    /**
	     * The priority of the system. A lower number makes it run earlier.
	     *
	     * See {@link System.PRIORITY} for some common ranges. The default is {@link System.PRIORITY.USER}.
	     *
	     * If you change this value at all after adding the system to the renderer you will
	     * need to call {@link Renderer#sortSystems} for the change to affect the sort.
	     *
	     * @member {number}
	     */
	    _this.priority = priority;
	    return _this;
	  }
	
	  /**
	   * Destroys the system.
	   *
	   */
	
	
	  System.prototype.destroy = function destroy() {
	    this.renderer = null;
	  };
	
	  return System;
	}(_ecs2.default.System);
	
	/**
	 * Some common priority ranges. Lower priority numbers run first.
	 * You can use any number you want for priority of your systems, these just serve as a guideline for
	 * what the core and official plugins will try to follow.
	 *
	 * If you use these values directly it will run in the order:
	 *
	 * 1. USER
	 * 2. PLUGIN
	 * 3. RENDER
	 *
	 * @static
	 * @constant
	 * @property {number} USER - The start of the user range (0-2999)
	 * @property {number} PLUGIN - The start of the plugin range (3000-5999)
	 * @property {number} RENDER - The start of the render range (6000+)
	 */
	
	
	exports.default = System;
	System.PRIORITY = {
	  USER: 0,
	  PLUGIN: 3000,
	  RENDER: 6000
	};

/***/ },
/* 6 */
/*!********************************!*\
  !*** ./~/@fae/ecs/dist/ecs.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("ECS", [], factory);
		else if(typeof exports === 'object')
			exports["ECS"] = factory();
		else
			root["ECS"] = factory();
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
	/*!**********************!*\
	  !*** ./src/index.js ***!
	  \**********************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var _ecs = __webpack_require__(/*! ./ecs */ 1);
		
		var _ecs2 = _interopRequireDefault(_ecs);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// exports as root.
		module.exports = _ecs2.default;
	
	/***/ },
	/* 1 */
	/*!********************!*\
	  !*** ./src/ecs.js ***!
	  \********************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		
		var _entity = __webpack_require__(/*! ./entity */ 2);
		
		var _entity2 = _interopRequireDefault(_entity);
		
		var _system = __webpack_require__(/*! ./system */ 57);
		
		var _system2 = _interopRequireDefault(_system);
		
		var _performance = __webpack_require__(/*! ./performance */ 58);
		
		var _performance2 = _interopRequireDefault(_performance);
		
		var _uid = __webpack_require__(/*! ./uid */ 55);
		
		var _uid2 = _interopRequireDefault(_uid);
		
		var _utils = __webpack_require__(/*! ./utils */ 56);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		/**
		 *
		 * @class
		 */
		var ECS = function () {
		    /**
		     *
		     */
		    function ECS() {
		        _classCallCheck(this, ECS);
		
		        /**
		         * Store all entities of the ECS.
		         *
		         * @member {Entity[]}
		         */
		        this.entities = [];
		
		        /**
		         * Store all systems of the ECS.
		         *
		         * @member {System[]}
		         */
		        this.systems = [];
		
		        /**
		         * Count how many updates have been done.
		         *
		         * @member {number}
		         */
		        this.updateCounter = 0;
		
		        /**
		         * The last timestamp of an update call.
		         *
		         * @member
		         */
		        this.lastUpdate = _performance2.default.now();
		    }
		
		    /**
		     * Retrieve an entity by id.
		     *
		     * @param {number} id - id of the entity to retrieve
		     * @return {Entity} The entity if found null otherwise
		     */
		
		
		    ECS.prototype.getEntityById = function getEntityById(id) {
		        for (var i = 0; i < this.entities.length; ++i) {
		            var entity = this.entities[i];
		
		            if (entity.id === id) {
		                return entity;
		            }
		        }
		
		        return null;
		    };
		
		    /**
		     * Add an entity to the ecs.
		     *
		     * @param {Entity} entity - The entity to add.
		     */
		
		
		    ECS.prototype.addEntity = function addEntity(entity) {
		        this.entities.push(entity);
		
		        entity.ecs = this;
		
		        // iterate over all systems to setup valid systems
		        for (var i = 0; i < this.systems.length; ++i) {
		            var system = this.systems[i];
		
		            if (system.test(entity)) {
		                system.addEntity(entity);
		            }
		        }
		    };
		
		    /**
		     * Remove an entity from the ecs by reference.
		     *
		     * @param {Entity} entity - reference of the entity to remove
		     * @return {Entity} the remove entity if any
		     */
		
		
		    ECS.prototype.removeEntity = function removeEntity(entity) {
		        var index = this.entities.indexOf(entity);
		
		        // if the entity is not found do nothing
		        if (index !== -1) {
		            entity.dispose();
		
		            (0, _utils.fastSplice)(this.entities, index, 1);
		        }
		
		        return entity;
		    };
		
		    /**
		     * Add a system to the ecs.
		     *
		     * @param {System} system - system to add
		     */
		
		
		    ECS.prototype.addSystem = function addSystem(system) {
		        this.systems.push(system);
		        system.initialize();
		
		        // iterate over all entities to eventually add system
		        for (var i = 0; i < this.entities.length; ++i) {
		            var entity = this.entities[i];
		
		            if (system.test(entity)) {
		                system.addEntity(entity);
		            }
		        }
		    };
		
		    /**
		     * Remove a system from the ecs.
		     *
		     * @param {System} system system reference
		     */
		
		
		    ECS.prototype.removeSystem = function removeSystem(system) {
		        var index = this.systems.indexOf(system);
		
		        if (index !== -1) {
		            (0, _utils.fastSplice)(this.systems, index, 1);
		            system.dispose();
		        }
		    };
		
		    /**
		     * Update the ecs.
		     *
		     * @method update
		     */
		
		
		    ECS.prototype.update = function update() {
		        var now = _performance2.default.now();
		        var elapsed = now - this.lastUpdate;
		
		        // update each entity
		        for (var i = 0; i < this.entities.length; ++i) {
		            var entity = this.entities[i];
		
		            for (var j = 0; j < entity.systems.length; ++j) {
		                var system = entity.systems[j];
		
		                if (this.updateCounter % system.frequency > 0) {
		                    continue;
		                }
		
		                system.update(entity, elapsed);
		            }
		        }
		
		        this.updateCounter += 1;
		        this.lastUpdate = now;
		    };
		
		    return ECS;
		}();
		
		// expose!
		
		
		exports.default = ECS;
		ECS.Entity = _entity2.default;
		ECS.System = _system2.default;
		ECS.uid = _uid2.default;
		
		/**
		 * An interface describing components.
		 *
		 * @interface IComponent
		 */
		
		/**
		 * The name of the component
		 *
		 * @property
		 * @name IComponent#name
		 * @type {string}
		 */
		
		/**
		 * The factory function for the data of this component.
		 *
		 * @function
		 * @name IComponent#data
		 * @returns {*} The data object for this component.
		 */
	
	/***/ },
	/* 2 */
	/*!***********************!*\
	  !*** ./src/entity.js ***!
	  \***********************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		
		var _symbol = __webpack_require__(/*! core-js/es6/symbol */ 3);
		
		var _symbol2 = _interopRequireDefault(_symbol);
		
		var _uid = __webpack_require__(/*! ./uid */ 55);
		
		var _uid2 = _interopRequireDefault(_uid);
		
		var _utils = __webpack_require__(/*! ./utils */ 56);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var _cachedApplicationRef = (0, _symbol2.default)('_cachedApplicationRef');
		var _componentList = (0, _symbol2.default)('_componentList');
		var _mixinRef = (0, _symbol2.default)('_mixinRef');
		
		/**
		 * An entity.
		 *
		 * @class
		 * @alias ECS.Entity
		 */
		
		var Entity = function () {
		    /**
		     *
		     * @param {number|UIDGenerator} idOrGenerator - The entity id if
		     *  a Number is passed. If an UIDGenerator is passed, the entity will use
		     *  it to generate a new id. If nothing is passed, the entity will use
		     *  the default UIDGenerator.
		     */
		    function Entity() {
		        var idOrGenerator = arguments.length <= 0 || arguments[0] === undefined ? _uid2.default.DefaultUIDGenerator : arguments[0];
		
		        _classCallCheck(this, Entity);
		
		        /**
		         * Unique identifier of the entity.
		         *
		         * @member {number}
		         */
		        this.id = typeof idOrGenerator === 'number' ? idOrGenerator : idOrGenerator.next();
		
		        /**
		         * Systems applied to the entity.
		         *
		         * @number {System[]}
		         */
		        this.systems = [];
		
		        /**
		         * A reference to parent ECS class.
		         *
		         * @member {ECS}
		         */
		        this.ecs = null;
		    }
		
		    /**
		     * Checks if an entity has all the components passed.
		     *
		     * @example
		     *
		     * ```js
		     * entity.hasComponents(Component1, Component2, ...);
		     * ```
		     *
		     * @alias hasComponent
		     * @param {...Component} components - The component classes to compose into a parent class.
		     * @return {Component} A base-class component to extend from.
		     */
		
		
		    Entity.prototype.hasComponents = function hasComponents() {
		        for (var _len = arguments.length, components = Array(_len), _key = 0; _key < _len; _key++) {
		            components[_key] = arguments[_key];
		        }
		
		        // Check that each passed component exists in the component list.
		        // If it doesn't, then immediately return false.
		        for (var i = 0; i < components.length; ++i) {
		            var comp = components[i];
		            var o = Object.getPrototypeOf(this);
		            var found = false;
		
		            while (o) {
		                if (Object.prototype.hasOwnProperty.call(o, _mixinRef) && o[_mixinRef] === comp) {
		                    found = true;
		                    break;
		                }
		                o = Object.getPrototypeOf(o);
		            }
		
		            // if we traveled the chain and never found the component we
		            // were looking for, then its done.
		            if (!found) {
		                return false;
		            }
		        }
		
		        return true;
		    };
		
		    /**
		     * Dispose the entity.
		     *
		     * @private
		     */
		
		
		    Entity.prototype.dispose = function dispose() {
		        while (this.systems.length) {
		            this.systems[this.systems.length - 1].removeEntity(this);
		        }
		    };
		
		    /**
		     * Add a system to the entity.
		     *
		     * @private
		     * @param {System} system - The system to add.
		     */
		
		
		    Entity.prototype._addSystem = function _addSystem(system) {
		        this.systems.push(system);
		    };
		
		    /**
		     * Remove a system from the entity.
		     *
		     * @private
		     * @param {System} system - The system reference to remove.
		     */
		
		
		    Entity.prototype._removeSystem = function _removeSystem(system) {
		        var index = this.systems.indexOf(system);
		
		        if (index !== -1) {
		            (0, _utils.fastSplice)(this.systems, index, 1);
		        }
		    };
		
		    return Entity;
		}();
		
		exports.default = Entity;
		
		
		Entity.prototype.hasComponent = Entity.prototype.hasComponents;
		
		/**
		 * Composes an entity with the given components.
		 *
		 * @example
		 *
		 * ```js
		 * class MyEntity extends ECS.Entity.with(Component1, Component2, ...) {
		 * }
		 * ```
		 *
		 * @static
		 * @param {...Component} components - The component classes to compose into a parent class.
		 * @return {Component} A base-class component to extend from.
		 */
		Entity.with = function entityWith() {
		    for (var _len2 = arguments.length, components = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		        components[_key2] = arguments[_key2];
		    }
		
		    var Clazz = components.reduce(function (base, comp) {
		        // Get or create a symbol used to look up a previous application of mixin
		        // to the class. This symbol is unique per mixin definition, so a class will have N
		        // applicationRefs if it has had N mixins applied to it. A mixin will have
		        // exactly one _cachedApplicationRef used to store its applications.
		        var ref = comp[_cachedApplicationRef];
		
		        if (!ref) {
		            ref = comp[_cachedApplicationRef] = (0, _symbol2.default)(comp.name);
		        }
		
		        // look up cached version of mixin/superclass
		        if (Object.prototype.hasOwnProperty.call(base, ref)) {
		            return base[ref];
		        }
		
		        // apply the component
		        var app = comp(base);
		
		        // cache it so we don't make it again
		        base[ref] = app;
		
		        // store the mixin we applied here.
		        app.prototype[_mixinRef] = comp;
		
		        return app;
		    }, this);
		
		    Clazz.prototype[_componentList] = components;
		
		    return Clazz;
		};
		
		// export some symbols
		Entity._cachedApplicationRef = _cachedApplicationRef;
		Entity._componentList = _componentList;
	
	/***/ },
	/* 3 */
	/*!*********************************!*\
	  !*** ./~/core-js/es6/symbol.js ***!
	  \*********************************/
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(/*! ../modules/es6.symbol */ 4);
		__webpack_require__(/*! ../modules/es6.object.to-string */ 53);
		module.exports = __webpack_require__(/*! ../modules/_core */ 10).Symbol;
	
	/***/ },
	/* 4 */
	/*!*****************************************!*\
	  !*** ./~/core-js/modules/es6.symbol.js ***!
	  \*****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// ECMAScript 6 symbols shim
		var global         = __webpack_require__(/*! ./_global */ 5)
		  , has            = __webpack_require__(/*! ./_has */ 6)
		  , DESCRIPTORS    = __webpack_require__(/*! ./_descriptors */ 7)
		  , $export        = __webpack_require__(/*! ./_export */ 9)
		  , redefine       = __webpack_require__(/*! ./_redefine */ 19)
		  , META           = __webpack_require__(/*! ./_meta */ 23).KEY
		  , $fails         = __webpack_require__(/*! ./_fails */ 8)
		  , shared         = __webpack_require__(/*! ./_shared */ 24)
		  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 25)
		  , uid            = __webpack_require__(/*! ./_uid */ 20)
		  , wks            = __webpack_require__(/*! ./_wks */ 26)
		  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 27)
		  , wksDefine      = __webpack_require__(/*! ./_wks-define */ 28)
		  , keyOf          = __webpack_require__(/*! ./_keyof */ 30)
		  , enumKeys       = __webpack_require__(/*! ./_enum-keys */ 43)
		  , isArray        = __webpack_require__(/*! ./_is-array */ 46)
		  , anObject       = __webpack_require__(/*! ./_an-object */ 13)
		  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 33)
		  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 17)
		  , createDesc     = __webpack_require__(/*! ./_property-desc */ 18)
		  , _create        = __webpack_require__(/*! ./_object-create */ 47)
		  , gOPNExt        = __webpack_require__(/*! ./_object-gopn-ext */ 50)
		  , $GOPD          = __webpack_require__(/*! ./_object-gopd */ 52)
		  , $DP            = __webpack_require__(/*! ./_object-dp */ 12)
		  , $keys          = __webpack_require__(/*! ./_object-keys */ 31)
		  , gOPD           = $GOPD.f
		  , dP             = $DP.f
		  , gOPN           = gOPNExt.f
		  , $Symbol        = global.Symbol
		  , $JSON          = global.JSON
		  , _stringify     = $JSON && $JSON.stringify
		  , PROTOTYPE      = 'prototype'
		  , HIDDEN         = wks('_hidden')
		  , TO_PRIMITIVE   = wks('toPrimitive')
		  , isEnum         = {}.propertyIsEnumerable
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols     = shared('symbols')
		  , OPSymbols      = shared('op-symbols')
		  , ObjectProto    = Object[PROTOTYPE]
		  , USE_NATIVE     = typeof $Symbol == 'function'
		  , QObject        = global.QObject;
		// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
		var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
		
		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		var setSymbolDesc = DESCRIPTORS && $fails(function(){
		  return _create(dP({}, 'a', {
		    get: function(){ return dP(this, 'a', {value: 7}).a; }
		  })).a != 7;
		}) ? function(it, key, D){
		  var protoDesc = gOPD(ObjectProto, key);
		  if(protoDesc)delete ObjectProto[key];
		  dP(it, key, D);
		  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
		} : dP;
		
		var wrap = function(tag){
		  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
		  sym._k = tag;
		  return sym;
		};
		
		var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
		  return typeof it == 'symbol';
		} : function(it){
		  return it instanceof $Symbol;
		};
		
		var $defineProperty = function defineProperty(it, key, D){
		  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
		  anObject(it);
		  key = toPrimitive(key, true);
		  anObject(D);
		  if(has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = _create(D, {enumerable: createDesc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return dP(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P){
		  anObject(it);
		  var keys = enumKeys(P = toIObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
		  return it;
		};
		var $create = function create(it, P){
		  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key){
		  var E = isEnum.call(this, key = toPrimitive(key, true));
		  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
		  it  = toIObject(it);
		  key = toPrimitive(key, true);
		  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
		  var D = gOPD(it, key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it){
		  var names  = gOPN(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
		  } return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
		  var IS_OP  = it === ObjectProto
		    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
		  } return result;
		};
		
		// 19.4.1.1 Symbol([description])
		if(!USE_NATIVE){
		  $Symbol = function Symbol(){
		    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
		    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
		    var $set = function(value){
		      if(this === ObjectProto)$set.call(OPSymbols, value);
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, createDesc(1, value));
		    };
		    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
		    return wrap(tag);
		  };
		  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
		    return this._k;
		  });
		
		  $GOPD.f = $getOwnPropertyDescriptor;
		  $DP.f   = $defineProperty;
		  __webpack_require__(/*! ./_object-gopn */ 51).f = gOPNExt.f = $getOwnPropertyNames;
		  __webpack_require__(/*! ./_object-pie */ 45).f  = $propertyIsEnumerable;
		  __webpack_require__(/*! ./_object-gops */ 44).f = $getOwnPropertySymbols;
		
		  if(DESCRIPTORS && !__webpack_require__(/*! ./_library */ 29)){
		    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
		  }
		
		  wksExt.f = function(name){
		    return wrap(wks(name));
		  }
		}
		
		$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
		
		for(var symbols = (
		  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
		  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
		).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
		
		for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
		
		$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    if(isSymbol(key))return keyOf(SymbolRegistry, key);
		    throw TypeError(key + ' is not a symbol!');
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		});
		
		$export($export.S + $export.F * !USE_NATIVE, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: $create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: $defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: $defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: $getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: $getOwnPropertySymbols
		});
		
		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
		  var S = $Symbol();
		  // MS Edge converts symbol values to JSON as {}
		  // WebKit converts symbol values to JSON as null
		  // V8 throws on boxed symbols
		  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
		})), 'JSON', {
		  stringify: function stringify(it){
		    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
		    var args = [it]
		      , i    = 1
		      , replacer, $replacer;
		    while(arguments.length > i)args.push(arguments[i++]);
		    replacer = args[1];
		    if(typeof replacer == 'function')$replacer = replacer;
		    if($replacer || !isArray(replacer))replacer = function(key, value){
		      if($replacer)value = $replacer.call(this, key, value);
		      if(!isSymbol(value))return value;
		    };
		    args[1] = replacer;
		    return _stringify.apply($JSON, args);
		  }
		});
		
		// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
		$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);
	
	/***/ },
	/* 5 */
	/*!**************************************!*\
	  !*** ./~/core-js/modules/_global.js ***!
	  \**************************************/
	/***/ function(module, exports) {
	
		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 6 */
	/*!***********************************!*\
	  !*** ./~/core-js/modules/_has.js ***!
	  \***********************************/
	/***/ function(module, exports) {
	
		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};
	
	/***/ },
	/* 7 */
	/*!*******************************************!*\
	  !*** ./~/core-js/modules/_descriptors.js ***!
	  \*******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(/*! ./_fails */ 8)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 8 */
	/*!*************************************!*\
	  !*** ./~/core-js/modules/_fails.js ***!
	  \*************************************/
	/***/ function(module, exports) {
	
		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};
	
	/***/ },
	/* 9 */
	/*!**************************************!*\
	  !*** ./~/core-js/modules/_export.js ***!
	  \**************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(/*! ./_global */ 5)
		  , core      = __webpack_require__(/*! ./_core */ 10)
		  , hide      = __webpack_require__(/*! ./_hide */ 11)
		  , redefine  = __webpack_require__(/*! ./_redefine */ 19)
		  , ctx       = __webpack_require__(/*! ./_ctx */ 21)
		  , PROTOTYPE = 'prototype';
		
		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
		    , key, own, out, exp;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    // export native or passed
		    out = (own ? target : source)[key];
		    // bind timers to global for call from export context
		    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // extend global
		    if(target)redefine(target, key, out, type & $export.U);
		    // export
		    if(exports[key] != out)hide(exports, key, exp);
		    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
		  }
		};
		global.core = core;
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;
	
	/***/ },
	/* 10 */
	/*!************************************!*\
	  !*** ./~/core-js/modules/_core.js ***!
	  \************************************/
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 11 */
	/*!************************************!*\
	  !*** ./~/core-js/modules/_hide.js ***!
	  \************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var dP         = __webpack_require__(/*! ./_object-dp */ 12)
		  , createDesc = __webpack_require__(/*! ./_property-desc */ 18);
		module.exports = __webpack_require__(/*! ./_descriptors */ 7) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};
	
	/***/ },
	/* 12 */
	/*!*****************************************!*\
	  !*** ./~/core-js/modules/_object-dp.js ***!
	  \*****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var anObject       = __webpack_require__(/*! ./_an-object */ 13)
		  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 15)
		  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 17)
		  , dP             = Object.defineProperty;
		
		exports.f = __webpack_require__(/*! ./_descriptors */ 7) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};
	
	/***/ },
	/* 13 */
	/*!*****************************************!*\
	  !*** ./~/core-js/modules/_an-object.js ***!
	  \*****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(/*! ./_is-object */ 14);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};
	
	/***/ },
	/* 14 */
	/*!*****************************************!*\
	  !*** ./~/core-js/modules/_is-object.js ***!
	  \*****************************************/
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};
	
	/***/ },
	/* 15 */
	/*!**********************************************!*\
	  !*** ./~/core-js/modules/_ie8-dom-define.js ***!
	  \**********************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = !__webpack_require__(/*! ./_descriptors */ 7) && !__webpack_require__(/*! ./_fails */ 8)(function(){
		  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 16 */
	/*!******************************************!*\
	  !*** ./~/core-js/modules/_dom-create.js ***!
	  \******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(/*! ./_is-object */ 14)
		  , document = __webpack_require__(/*! ./_global */ 5).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};
	
	/***/ },
	/* 17 */
	/*!********************************************!*\
	  !*** ./~/core-js/modules/_to-primitive.js ***!
	  \********************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(/*! ./_is-object */ 14);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};
	
	/***/ },
	/* 18 */
	/*!*********************************************!*\
	  !*** ./~/core-js/modules/_property-desc.js ***!
	  \*********************************************/
	/***/ function(module, exports) {
	
		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};
	
	/***/ },
	/* 19 */
	/*!****************************************!*\
	  !*** ./~/core-js/modules/_redefine.js ***!
	  \****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(/*! ./_global */ 5)
		  , hide      = __webpack_require__(/*! ./_hide */ 11)
		  , has       = __webpack_require__(/*! ./_has */ 6)
		  , SRC       = __webpack_require__(/*! ./_uid */ 20)('src')
		  , TO_STRING = 'toString'
		  , $toString = Function[TO_STRING]
		  , TPL       = ('' + $toString).split(TO_STRING);
		
		__webpack_require__(/*! ./_core */ 10).inspectSource = function(it){
		  return $toString.call(it);
		};
		
		(module.exports = function(O, key, val, safe){
		  var isFunction = typeof val == 'function';
		  if(isFunction)has(val, 'name') || hide(val, 'name', key);
		  if(O[key] === val)return;
		  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
		  if(O === global){
		    O[key] = val;
		  } else {
		    if(!safe){
		      delete O[key];
		      hide(O, key, val);
		    } else {
		      if(O[key])O[key] = val;
		      else hide(O, key, val);
		    }
		  }
		// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
		})(Function.prototype, TO_STRING, function toString(){
		  return typeof this == 'function' && this[SRC] || $toString.call(this);
		});
	
	/***/ },
	/* 20 */
	/*!***********************************!*\
	  !*** ./~/core-js/modules/_uid.js ***!
	  \***********************************/
	/***/ function(module, exports) {
	
		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};
	
	/***/ },
	/* 21 */
	/*!***********************************!*\
	  !*** ./~/core-js/modules/_ctx.js ***!
	  \***********************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// optional / simple context binding
		var aFunction = __webpack_require__(/*! ./_a-function */ 22);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};
	
	/***/ },
	/* 22 */
	/*!******************************************!*\
	  !*** ./~/core-js/modules/_a-function.js ***!
	  \******************************************/
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};
	
	/***/ },
	/* 23 */
	/*!************************************!*\
	  !*** ./~/core-js/modules/_meta.js ***!
	  \************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var META     = __webpack_require__(/*! ./_uid */ 20)('meta')
		  , isObject = __webpack_require__(/*! ./_is-object */ 14)
		  , has      = __webpack_require__(/*! ./_has */ 6)
		  , setDesc  = __webpack_require__(/*! ./_object-dp */ 12).f
		  , id       = 0;
		var isExtensible = Object.isExtensible || function(){
		  return true;
		};
		var FREEZE = !__webpack_require__(/*! ./_fails */ 8)(function(){
		  return isExtensible(Object.preventExtensions({}));
		});
		var setMeta = function(it){
		  setDesc(it, META, {value: {
		    i: 'O' + ++id, // object ID
		    w: {}          // weak collections IDs
		  }});
		};
		var fastKey = function(it, create){
		  // return primitive with prefix
		  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return 'F';
		    // not necessary to add metadata
		    if(!create)return 'E';
		    // add missing metadata
		    setMeta(it);
		  // return object ID
		  } return it[META].i;
		};
		var getWeak = function(it, create){
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return true;
		    // not necessary to add metadata
		    if(!create)return false;
		    // add missing metadata
		    setMeta(it);
		  // return hash weak collections IDs
		  } return it[META].w;
		};
		// add metadata on freeze-family methods calling
		var onFreeze = function(it){
		  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
		  return it;
		};
		var meta = module.exports = {
		  KEY:      META,
		  NEED:     false,
		  fastKey:  fastKey,
		  getWeak:  getWeak,
		  onFreeze: onFreeze
		};
	
	/***/ },
	/* 24 */
	/*!**************************************!*\
	  !*** ./~/core-js/modules/_shared.js ***!
	  \**************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var global = __webpack_require__(/*! ./_global */ 5)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};
	
	/***/ },
	/* 25 */
	/*!*************************************************!*\
	  !*** ./~/core-js/modules/_set-to-string-tag.js ***!
	  \*************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var def = __webpack_require__(/*! ./_object-dp */ 12).f
		  , has = __webpack_require__(/*! ./_has */ 6)
		  , TAG = __webpack_require__(/*! ./_wks */ 26)('toStringTag');
		
		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};
	
	/***/ },
	/* 26 */
	/*!***********************************!*\
	  !*** ./~/core-js/modules/_wks.js ***!
	  \***********************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var store      = __webpack_require__(/*! ./_shared */ 24)('wks')
		  , uid        = __webpack_require__(/*! ./_uid */ 20)
		  , Symbol     = __webpack_require__(/*! ./_global */ 5).Symbol
		  , USE_SYMBOL = typeof Symbol == 'function';
		
		var $exports = module.exports = function(name){
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};
		
		$exports.store = store;
	
	/***/ },
	/* 27 */
	/*!***************************************!*\
	  !*** ./~/core-js/modules/_wks-ext.js ***!
	  \***************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		exports.f = __webpack_require__(/*! ./_wks */ 26);
	
	/***/ },
	/* 28 */
	/*!******************************************!*\
	  !*** ./~/core-js/modules/_wks-define.js ***!
	  \******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var global         = __webpack_require__(/*! ./_global */ 5)
		  , core           = __webpack_require__(/*! ./_core */ 10)
		  , LIBRARY        = __webpack_require__(/*! ./_library */ 29)
		  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 27)
		  , defineProperty = __webpack_require__(/*! ./_object-dp */ 12).f;
		module.exports = function(name){
		  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
		  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
		};
	
	/***/ },
	/* 29 */
	/*!***************************************!*\
	  !*** ./~/core-js/modules/_library.js ***!
	  \***************************************/
	/***/ function(module, exports) {
	
		module.exports = false;
	
	/***/ },
	/* 30 */
	/*!*************************************!*\
	  !*** ./~/core-js/modules/_keyof.js ***!
	  \*************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var getKeys   = __webpack_require__(/*! ./_object-keys */ 31)
		  , toIObject = __webpack_require__(/*! ./_to-iobject */ 33);
		module.exports = function(object, el){
		  var O      = toIObject(object)
		    , keys   = getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};
	
	/***/ },
	/* 31 */
	/*!*******************************************!*\
	  !*** ./~/core-js/modules/_object-keys.js ***!
	  \*******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys       = __webpack_require__(/*! ./_object-keys-internal */ 32)
		  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 42);
		
		module.exports = Object.keys || function keys(O){
		  return $keys(O, enumBugKeys);
		};
	
	/***/ },
	/* 32 */
	/*!****************************************************!*\
	  !*** ./~/core-js/modules/_object-keys-internal.js ***!
	  \****************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var has          = __webpack_require__(/*! ./_has */ 6)
		  , toIObject    = __webpack_require__(/*! ./_to-iobject */ 33)
		  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 37)(false)
		  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ 41)('IE_PROTO');
		
		module.exports = function(object, names){
		  var O      = toIObject(object)
		    , i      = 0
		    , result = []
		    , key;
		  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while(names.length > i)if(has(O, key = names[i++])){
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};
	
	/***/ },
	/* 33 */
	/*!******************************************!*\
	  !*** ./~/core-js/modules/_to-iobject.js ***!
	  \******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(/*! ./_iobject */ 34)
		  , defined = __webpack_require__(/*! ./_defined */ 36);
		module.exports = function(it){
		  return IObject(defined(it));
		};
	
	/***/ },
	/* 34 */
	/*!***************************************!*\
	  !*** ./~/core-js/modules/_iobject.js ***!
	  \***************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(/*! ./_cof */ 35);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};
	
	/***/ },
	/* 35 */
	/*!***********************************!*\
	  !*** ./~/core-js/modules/_cof.js ***!
	  \***********************************/
	/***/ function(module, exports) {
	
		var toString = {}.toString;
		
		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};
	
	/***/ },
	/* 36 */
	/*!***************************************!*\
	  !*** ./~/core-js/modules/_defined.js ***!
	  \***************************************/
	/***/ function(module, exports) {
	
		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};
	
	/***/ },
	/* 37 */
	/*!**********************************************!*\
	  !*** ./~/core-js/modules/_array-includes.js ***!
	  \**********************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__(/*! ./_to-iobject */ 33)
		  , toLength  = __webpack_require__(/*! ./_to-length */ 38)
		  , toIndex   = __webpack_require__(/*! ./_to-index */ 40);
		module.exports = function(IS_INCLUDES){
		  return function($this, el, fromIndex){
		    var O      = toIObject($this)
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length)
		      , value;
		    // Array#includes uses SameValueZero equality algorithm
		    if(IS_INCLUDES && el != el)while(length > index){
		      value = O[index++];
		      if(value != value)return true;
		    // Array#toIndex ignores holes, Array#includes - not
		    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
		      if(O[index] === el)return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};
	
	/***/ },
	/* 38 */
	/*!*****************************************!*\
	  !*** ./~/core-js/modules/_to-length.js ***!
	  \*****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.15 ToLength
		var toInteger = __webpack_require__(/*! ./_to-integer */ 39)
		  , min       = Math.min;
		module.exports = function(it){
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};
	
	/***/ },
	/* 39 */
	/*!******************************************!*\
	  !*** ./~/core-js/modules/_to-integer.js ***!
	  \******************************************/
	/***/ function(module, exports) {
	
		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};
	
	/***/ },
	/* 40 */
	/*!****************************************!*\
	  !*** ./~/core-js/modules/_to-index.js ***!
	  \****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var toInteger = __webpack_require__(/*! ./_to-integer */ 39)
		  , max       = Math.max
		  , min       = Math.min;
		module.exports = function(index, length){
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};
	
	/***/ },
	/* 41 */
	/*!******************************************!*\
	  !*** ./~/core-js/modules/_shared-key.js ***!
	  \******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var shared = __webpack_require__(/*! ./_shared */ 24)('keys')
		  , uid    = __webpack_require__(/*! ./_uid */ 20);
		module.exports = function(key){
		  return shared[key] || (shared[key] = uid(key));
		};
	
	/***/ },
	/* 42 */
	/*!*********************************************!*\
	  !*** ./~/core-js/modules/_enum-bug-keys.js ***!
	  \*********************************************/
	/***/ function(module, exports) {
	
		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');
	
	/***/ },
	/* 43 */
	/*!*****************************************!*\
	  !*** ./~/core-js/modules/_enum-keys.js ***!
	  \*****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// all enumerable object keys, includes symbols
		var getKeys = __webpack_require__(/*! ./_object-keys */ 31)
		  , gOPS    = __webpack_require__(/*! ./_object-gops */ 44)
		  , pIE     = __webpack_require__(/*! ./_object-pie */ 45);
		module.exports = function(it){
		  var result     = getKeys(it)
		    , getSymbols = gOPS.f;
		  if(getSymbols){
		    var symbols = getSymbols(it)
		      , isEnum  = pIE.f
		      , i       = 0
		      , key;
		    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
		  } return result;
		};
	
	/***/ },
	/* 44 */
	/*!*******************************************!*\
	  !*** ./~/core-js/modules/_object-gops.js ***!
	  \*******************************************/
	/***/ function(module, exports) {
	
		exports.f = Object.getOwnPropertySymbols;
	
	/***/ },
	/* 45 */
	/*!******************************************!*\
	  !*** ./~/core-js/modules/_object-pie.js ***!
	  \******************************************/
	/***/ function(module, exports) {
	
		exports.f = {}.propertyIsEnumerable;
	
	/***/ },
	/* 46 */
	/*!****************************************!*\
	  !*** ./~/core-js/modules/_is-array.js ***!
	  \****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.2.2 IsArray(argument)
		var cof = __webpack_require__(/*! ./_cof */ 35);
		module.exports = Array.isArray || function isArray(arg){
		  return cof(arg) == 'Array';
		};
	
	/***/ },
	/* 47 */
	/*!*********************************************!*\
	  !*** ./~/core-js/modules/_object-create.js ***!
	  \*********************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject    = __webpack_require__(/*! ./_an-object */ 13)
		  , dPs         = __webpack_require__(/*! ./_object-dps */ 48)
		  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 42)
		  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 41)('IE_PROTO')
		  , Empty       = function(){ /* empty */ }
		  , PROTOTYPE   = 'prototype';
		
		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function(){
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__(/*! ./_dom-create */ 16)('iframe')
		    , i      = enumBugKeys.length
		    , lt     = '<'
		    , gt     = '>'
		    , iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__(/*! ./_html */ 49).appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};
		
		module.exports = Object.create || function create(O, Properties){
		  var result;
		  if(O !== null){
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty;
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};
	
	
	/***/ },
	/* 48 */
	/*!******************************************!*\
	  !*** ./~/core-js/modules/_object-dps.js ***!
	  \******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var dP       = __webpack_require__(/*! ./_object-dp */ 12)
		  , anObject = __webpack_require__(/*! ./_an-object */ 13)
		  , getKeys  = __webpack_require__(/*! ./_object-keys */ 31);
		
		module.exports = __webpack_require__(/*! ./_descriptors */ 7) ? Object.defineProperties : function defineProperties(O, Properties){
		  anObject(O);
		  var keys   = getKeys(Properties)
		    , length = keys.length
		    , i = 0
		    , P;
		  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};
	
	/***/ },
	/* 49 */
	/*!************************************!*\
	  !*** ./~/core-js/modules/_html.js ***!
	  \************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(/*! ./_global */ 5).document && document.documentElement;
	
	/***/ },
	/* 50 */
	/*!***********************************************!*\
	  !*** ./~/core-js/modules/_object-gopn-ext.js ***!
	  \***********************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		var toIObject = __webpack_require__(/*! ./_to-iobject */ 33)
		  , gOPN      = __webpack_require__(/*! ./_object-gopn */ 51).f
		  , toString  = {}.toString;
		
		var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
		  ? Object.getOwnPropertyNames(window) : [];
		
		var getWindowNames = function(it){
		  try {
		    return gOPN(it);
		  } catch(e){
		    return windowNames.slice();
		  }
		};
		
		module.exports.f = function getOwnPropertyNames(it){
		  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
		};
	
	
	/***/ },
	/* 51 */
	/*!*******************************************!*\
	  !*** ./~/core-js/modules/_object-gopn.js ***!
	  \*******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
		var $keys      = __webpack_require__(/*! ./_object-keys-internal */ 32)
		  , hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 42).concat('length', 'prototype');
		
		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
		  return $keys(O, hiddenKeys);
		};
	
	/***/ },
	/* 52 */
	/*!*******************************************!*\
	  !*** ./~/core-js/modules/_object-gopd.js ***!
	  \*******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var pIE            = __webpack_require__(/*! ./_object-pie */ 45)
		  , createDesc     = __webpack_require__(/*! ./_property-desc */ 18)
		  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 33)
		  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 17)
		  , has            = __webpack_require__(/*! ./_has */ 6)
		  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 15)
		  , gOPD           = Object.getOwnPropertyDescriptor;
		
		exports.f = __webpack_require__(/*! ./_descriptors */ 7) ? gOPD : function getOwnPropertyDescriptor(O, P){
		  O = toIObject(O);
		  P = toPrimitive(P, true);
		  if(IE8_DOM_DEFINE)try {
		    return gOPD(O, P);
		  } catch(e){ /* empty */ }
		  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
		};
	
	/***/ },
	/* 53 */
	/*!***************************************************!*\
	  !*** ./~/core-js/modules/es6.object.to-string.js ***!
	  \***************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// 19.1.3.6 Object.prototype.toString()
		var classof = __webpack_require__(/*! ./_classof */ 54)
		  , test    = {};
		test[__webpack_require__(/*! ./_wks */ 26)('toStringTag')] = 'z';
		if(test + '' != '[object z]'){
		  __webpack_require__(/*! ./_redefine */ 19)(Object.prototype, 'toString', function toString(){
		    return '[object ' + classof(this) + ']';
		  }, true);
		}
	
	/***/ },
	/* 54 */
	/*!***************************************!*\
	  !*** ./~/core-js/modules/_classof.js ***!
	  \***************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(/*! ./_cof */ 35)
		  , TAG = __webpack_require__(/*! ./_wks */ 26)('toStringTag')
		  // ES3 wrong here
		  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
		
		// fallback for IE11 Script Access Denied error
		var tryGet = function(it, key){
		  try {
		    return it[key];
		  } catch(e){ /* empty */ }
		};
		
		module.exports = function(it){
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};
	
	/***/ },
	/* 55 */
	/*!********************!*\
	  !*** ./src/uid.js ***!
	  \********************/
	/***/ function(module, exports) {
	
		"use strict";
		
		exports.__esModule = true;
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		/**
		 * UIDGenerator for multi-instance Entity Component System
		 * Generate numeric unique ids for ECS entities. The requirements are:
		 *  * generate Numbers for fast comparaison, low storage and bandwidth usage
		 *  * generators can be salted so you can use multiple generators with
		 *  uniqueness guaranty
		 *  * each salted generator can generate reasonable amount of unique ids
		 */
		
		// maximum number of salted generators that can run concurently, once the
		// number of allowed generators has been reached the salt of the next
		// generator is silently reset to 0
		var MAX_SALTS = 10000;
		
		var MAX_ENTITY_PER_GENERATOR = Math.floor(Number.MAX_SAFE_INTEGER / MAX_SALTS) - 1;
		var currentSalt = 0;
		
		/**
		 * Generate unique sequences of Numbers. Can be salted (up to 9999 salts)
		 * to generate differents ids.
		 *
		 * To work properly, ECS needs to associate an unique id with each entity. But
		 * to preserve efficiency, the unique id must be a Number (more exactly a safe
		 * integer).
		 *
		 * The basic implementation would be an incremented Number to generate a unique
		 * sequence, but this fails when several ecs instances are running and creating
		 * entities concurrently (e.g. in a multiplayer networked game). To work around
		 * this problem, ecs provide UIDGenerator class which allow you to salt your
		 * generated ids sequence. Two generators with different salts will NEVER
		 * generate the same ids.
		 *
		 * Currently, there is a maxumum of 9999 salts and about 900719925473 uid per
		 * salt. These limits are hard-coded, but I plan to expose these settings in
		 * the future.
		 *
		 * @class
		 */
		
		var UIDGenerator = function () {
		  /**
		   *
		   * @param {number} [salt=0] The salt to use for this generator. Number
		   * between 0 and 9999 (inclusive).
		   */
		  function UIDGenerator() {
		    var salt = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		
		    _classCallCheck(this, UIDGenerator);
		
		    /**
		     * The salt of this generator.
		     *
		     * @member {number}
		     */
		    this.salt = salt;
		
		    /**
		     * The counter used to generate unique sequence.
		     *
		     * @member {number}
		     */
		    this.uidCounter = 0;
		  }
		
		  /**
		   * Create a new unique id.
		   *
		   * @return {number} An unique id.
		   */
		
		
		  UIDGenerator.prototype.next = function next() {
		    var nextUid = this.salt + this.uidCounter * MAX_SALTS;
		
		    // if we exceed the number of maximum entities (which is
		    // very high) reset the counter.
		    if (++this.uidCounter >= MAX_ENTITY_PER_GENERATOR) {
		      this.uidCounter = 0;
		    }
		
		    return nextUid;
		  };
		
		  return UIDGenerator;
		}();
		
		/**
		 * @namespace
		 * @name ECS.uid
		 */
		
		
		var UID = {
		  /**
		   * A reference to UIDGenerator class.
		   *
		   * @property {class} UIDGenerator
		   */
		  UIDGenerator: UIDGenerator,
		
		  /**
		   * The default generator to use if an entity is created without id or generator instance.
		   *
		   * @property {UIDGenerator} DefaultUIDGenerator
		   */
		  DefaultUIDGenerator: new UIDGenerator(currentSalt++),
		
		  /**
		   * Return true if the entity id was salted by given salt
		   *
		   * @param {string} entityId Entity id to test
		   * @param {string} salt     Salt to test
		   * @return {boolean}         true if the id was generated by the salt, false
		   * otherwise
		   */
		  isSaltedBy: function isSaltedBy(entityId, salt) {
		    return entityId % MAX_SALTS === salt;
		  },
		
		  /**
		   * Return the next unique salt.
		   *
		   * @method  nextSalt
		   * @return {number} A unique salt.
		   */
		  nextSalt: function nextSalt() {
		    var salt = currentSalt;
		
		    // if we exceed the number of maximum salts, silently reset
		    // to 1 (since 0 will always be the default generator)
		    if (++currentSalt > MAX_SALTS - 1) {
		      currentSalt = 1;
		    }
		
		    return salt;
		  },
		
		  /**
		   * Create a new generator with unique salt.
		   *
		   * @method  nextGenerator
		   * @return {UIDGenerator} The created UIDGenerator.
		   */
		  nextGenerator: function nextGenerator() {
		    return new UIDGenerator(UID.nextSalt());
		  }
		};
		
		exports.default = UID;
	
	/***/ },
	/* 56 */
	/*!**********************!*\
	  !*** ./src/utils.js ***!
	  \**********************/
	/***/ function(module, exports) {
	
		"use strict";
		
		exports.__esModule = true;
		exports.fastBind = fastBind;
		exports.fastSplice = fastSplice;
		/**
		 * A faster version of bind.
		 *
		 * @param {*} thisArg - The context to call the function with.
		 * @param {function} methodFunc - The function to bind.
		 * @return {function} A bound version of the function.
		 */
		function fastBind(thisArg, methodFunc) {
		    return function _boundFunction() {
		        methodFunc.apply(thisArg, arguments); // eslint-disable-line prefer-rest-params
		    };
		}
		
		/**
		 * A faster version of splice.
		 *
		 * @param {*[]} array - The array to remove from
		 * @param {number} startIndex - Index to start removal
		 * @param {number} removeCount - The number of elements to remove.
		 */
		function fastSplice(array, startIndex, removeCount) {
		    var len = array.length;
		
		    if (startIndex >= len || removeCount === 0) {
		        return;
		    }
		
		    removeCount = startIndex + removeCount > len ? len - startIndex : removeCount;
		
		    var removeLen = len - removeCount;
		
		    for (var i = startIndex; i < len; i += 1) {
		        array[i] = array[i + removeCount];
		    }
		
		    array.length = removeLen;
		}
	
	/***/ },
	/* 57 */
	/*!***********************!*\
	  !*** ./src/system.js ***!
	  \***********************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		
		var _utils = __webpack_require__(/*! ./utils */ 56);
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		/**
		 * A system update all eligible entities at a given frequency.
		 * This class is not meant to be used directly and should be sub-classed to
		 * define specific logic.
		 *
		 * @class
		 * @alias ECS.System
		 */
		var System = function () {
		  /**
		   *
		   * @param {number} frequency Frequency of execution.
		   */
		  function System() {
		    var frequency = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
		
		    _classCallCheck(this, System);
		
		    /**
		     * Frequency of update execution, a frequency of `1` run the system every
		     * update, `2` will run the system every 2 updates, ect.
		     *
		     * @member {number}
		     */
		    this.frequency = frequency;
		
		    /**
		     * Entities of the system.
		     *
		     * @member {Entity[]}
		     */
		    this.entities = [];
		  }
		
		  /**
		   * Add an entity to the system entities.
		   *
		   * @param {Entity} entity - The entity to add to the system.
		   */
		
		
		  System.prototype.addEntity = function addEntity(entity) {
		    entity._addSystem(this);
		    this.entities.push(entity);
		
		    this.enter(entity);
		  };
		
		  /**
		   * Remove an entity from the system entities. exit() handler is executed
		   * only if the entity actually exists in the system entities.
		   *
		   * @param {Entity} entity - Reference of the entity to remove.
		   */
		
		
		  System.prototype.removeEntity = function removeEntity(entity) {
		    var index = this.entities.indexOf(entity);
		
		    if (index !== -1) {
		      entity._removeSystem(this);
		      (0, _utils.fastSplice)(this.entities, index, 1);
		
		      this.exit(entity);
		    }
		  };
		
		  /**
		   * Initialize the system. This is called when the system is added
		   * to the ECS manager.
		   *
		   */
		
		
		  System.prototype.initialize = function initialize() {}; // eslint-disable-line no-empty-function
		
		  /**
		   * Dispose the system by exiting all the entities. This is called
		   * when the system is removed from the ECS manager.
		   *
		   */
		
		
		  System.prototype.dispose = function dispose() {
		    for (var i = 0; i < this.entities.length; ++i) {
		      this.entities[i]._removeSystem(this);
		      this.exit(this.entities[i]);
		    }
		  };
		
		  /**
		   * Abstract method to subclass. Should return true if the entity is eligible
		   * to the system, false otherwise.
		   *
		   * @param {Entity} entity - The entity to test.
		   * @return {boolean} True if entity should be included.
		   */
		
		
		  System.prototype.test = function test(entity) {
		    // eslint-disable-line no-unused-vars
		    return false;
		  };
		
		  /**
		   * Abstract method to subclass. Called when an entity is added to the system.
		   *
		   * @param {Entity} entity - The added entity.
		   */
		
		
		  System.prototype.enter = function enter(entity) {}; // eslint-disable-line no-empty-function,no-unused-vars
		
		  /**
		   * Abstract method to subclass. Called when an entity is removed from the system.
		   *
		   * @param {Entity} entity - The removed entity.
		   */
		
		
		  System.prototype.exit = function exit(entity) {}; // eslint-disable-line no-empty-function,no-unused-vars
		
		  /**
		   * Abstract method to subclass. Called for each entity to update. This is
		   * the only method that should actual mutate entity state.
		   *
		   * @param {Entity} entity - The entity to update.
		   * @param {number} elapsed - The time elapsed since last update call.
		   */
		
		
		  System.prototype.update = function update(entity, elapsed) {}; // eslint-disable-line no-empty-function,no-unused-vars
		
		
		  return System;
		}();
		
		exports.default = System;
	
	/***/ },
	/* 58 */
	/*!****************************!*\
	  !*** ./src/performance.js ***!
	  \****************************/
	/***/ function(module, exports) {
	
		'use strict';
		
		exports.__esModule = true;
		var perf = typeof window !== 'undefined' ? window.performance : null;
		
		// polyfill for browser performance module
		if (!perf) {
		    (function () {
		        var start = Date.now();
		
		        perf = {
		            now: function now() {
		                return Date.now() - start;
		            }
		        };
		    })();
		}
		
		exports.default = perf;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ecs.js.map

/***/ },
/* 7 */
/*!*********************************************!*\
  !*** ./plugins/core/src/render/Renderer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _miniSignals = __webpack_require__(/*! mini-signals */ 8);
	
	var _miniSignals2 = _interopRequireDefault(_miniSignals);
	
	var _ecs = __webpack_require__(/*! @fae/ecs */ 6);
	
	var _ecs2 = _interopRequireDefault(_ecs);
	
	var _GLContext = __webpack_require__(/*! ../gl/GLContext */ 9);
	
	var _GLContext2 = _interopRequireDefault(_GLContext);
	
	var _GLProgramCache = __webpack_require__(/*! ../gl/GLProgramCache */ 10);
	
	var _GLProgramCache2 = _interopRequireDefault(_GLProgramCache);
	
	var _RenderTarget = __webpack_require__(/*! ./RenderTarget */ 11);
	
	var _RenderTarget2 = _interopRequireDefault(_RenderTarget);
	
	var _RenderState = __webpack_require__(/*! ./RenderState */ 24);
	
	var _RenderState2 = _interopRequireDefault(_RenderState);
	
	var _ObjectRenderer = __webpack_require__(/*! ./ObjectRenderer */ 26);
	
	var _ObjectRenderer2 = _interopRequireDefault(_ObjectRenderer);
	
	var _util = __webpack_require__(/*! ../util */ 27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultSystems = [];
	
	/**
	 * The Renderer is just a container for the WebGLRenderingContext, the render state,
	 * and the current object renderer that is doing the rendering.
	 *
	 * @class
	 * @memberof render
	 */
	
	var Renderer = function (_ECS) {
	        _inherits(Renderer, _ECS);
	
	        /**
	         * Creates a new renderer.
	         *
	         * @param {HTMLCanvasElement|WebGLRenderingContext} context - The canvas to create a context from,
	         *  or the context to use to draw.
	         * @param {object} options - Options for the renderer.
	         * @param {boolean} options.clearBeforeRender=true - Should we clear before each render?
	         * @param {boolean} options.preserveDrawingBuffer=false - Enables drawing buffer preservation,
	         *  enable this if you need to call toDataUrl on the webgl context.
	         */
	        function Renderer(context) {
	                var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	                _classCallCheck(this, Renderer);
	
	                /**
	                 * The main rendering context used for drawing.
	                 *
	                 * @member {WebGLRenderingContext}
	                 */
	                var _this = _possibleConstructorReturn(this, _ECS.call(this));
	
	                _this.gl = context.nodeName ? _GLContext2.default.create(context) : context;
	
	                /**
	                 * A unique ID for this renderer, useful for keying maps by renderer
	                 *
	                 * @member {number}
	                 */
	                _this.uid = (0, _util.uid)();
	
	                /**
	                 * Should we clear before each frame?
	                 *
	                 * @member {boolean}
	                 */
	                _this.clearBeforeRender = typeof options.clearBeforeRender !== 'undefined' ? options.clearBeforeRender : true;
	
	                /**
	                 * Should we preserve the drawing buffer each frame?
	                 *
	                 * @member {boolean}
	                 */
	                _this.preserveDrawingBuffer = options.preserveDrawingBuffer || false;
	
	                /**
	                 * Dispatched when context has been lost.
	                 *
	                 * @member {Signal}
	                 */
	                _this.onContextLost = new _miniSignals2.default();
	
	                /**
	                 * Dispatched when context has been restored, but before the renderer
	                 * has initialized for the new context.
	                 *
	                 * If you are wanting to know when you should reinitialize your stuff
	                 * after a restore use {@link Renderer#onContextChange}.
	                 *
	                 * @member {Signal}
	                 */
	                _this.onContextRestored = new _miniSignals2.default();
	
	                /**
	                 * Dispatched when context has changed. This happens when the renderer
	                 * initializes and then again if the context is restored, after we initialize
	                 * the context again.
	                 *
	                 * @member {Signal}
	                 */
	                _this.onContextChange = new _miniSignals2.default();
	
	                /**
	                 * Dispatched each frame before rendering the object.
	                 *
	                 * @member {Signal}
	                 */
	                _this.onBeforeRender = new _miniSignals2.default();
	
	                /**
	                 * Dispatched each frame after rendering the object.
	                 *
	                 * @member {Signal}
	                 */
	                _this.onAfterRender = new _miniSignals2.default();
	
	                /**
	                 * An empty renderer.
	                 *
	                 * @member {ObjectRenderer}
	                 */
	                _this.emptyRenderer = new _ObjectRenderer2.default(_this);
	
	                /**
	                 * The currently active object renderer.
	                 *
	                 * @member {ObjectRenderer}
	                 */
	                _this.activeObjectRenderer = _this.emptyRenderer;
	
	                /**
	                 * The current state of the renderer.
	                 *
	                 * @member {WebGLState}
	                 */
	                _this.state = new _RenderState2.default(_this);
	
	                /**
	                 * The root render target, that represents the screen.
	                 *
	                 * @member {RenderTarget}
	                 */
	                _this.screen = null;
	
	                _this._boundOnContextLost = _this._onContextLost.bind(_this);
	                _this._boundOnContextRestored = _this._onContextRestored.bind(_this);
	
	                _this.gl.canvas.addEventListener('webglcontextlost', _this._boundOnContextLost, false);
	                _this.gl.canvas.addEventListener('webglcontextrestored', _this._boundOnContextRestored, false);
	
	                // initialize for a new context
	                _this._initContext();
	
	                // create and add the default systems
	                for (var i = 0; i < defaultSystems.length; ++i) {
	                        var system = new defaultSystems[i](_this);
	
	                        _this.addSystem(system);
	                }
	                return _this;
	        }
	
	        /**
	         * Adds a system that will be created automatically when a renderer instance is created.
	         *
	         * Note: Calling this function registers a system to be automatically added in renderers
	         * that you create *after* calling this. If you call this after creating a renderer, the
	         * already created renderer will *not* contain this system automatically.
	         *
	         * @param {System} System - The system class to add (**not** an instance, but the class
	         * itself)
	         */
	
	
	        Renderer.addDefaultSystem = function addDefaultSystem(System) {
	                defaultSystems.push(System);
	        };
	
	        /**
	         * Removes a system so that it will no longer be created automatically when a renderer
	         * instance is created.
	         *
	         * Note: Calling this function unregisters a system to be automatically added in renderers
	         * that you create *after* calling this. If you call this after creating a renderer, the
	         * already created renderer may contain this system automatically.
	         *
	         * @param {System} System - The system class to add (**not** an instance, but the class
	         * itself)
	         */
	
	
	        Renderer.removeDefaultSystem = function removeDefaultSystem(System) {
	                var idx = defaultSystems.indexOf(System);
	
	                if (idx !== -1) {
	                        (0, _util.removeElements)(defaultSystems, idx, 1);
	                }
	        };
	
	        /**
	         * Add a system to the renderer.
	         *
	         * @param {System} system - The system to add.
	         * @param {boolean} skipSort - If true, will not sort the systems automatically.
	         *  Setting this to true requires you call {@link Renderer#sortSystems} manually. This
	         *  can be useful if you are adding a large batch of systems in a single frame and want
	         *  to delay the sorting until after they are all added.
	         */
	
	
	        Renderer.prototype.addSystem = function addSystem(system) {
	                var skipSort = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	                _ECS.prototype.addSystem.call(this, system);
	
	                if (!skipSort) this.sortSystems();
	        };
	
	        /**
	         * Add an entity to the renderer.
	         *
	         * Note: Since adding an entity causes the entity list to be sorted (to ensure renderPriority
	         * and grouping is correct), this method can be expensive when you have a large list. As such
	         * it is recommended not to Add/Remove entities many times per frame.
	         *
	         * @param {Entity} entity - The entity to add.
	         * @param {boolean} skipSort - If true, will not sort the entities automatically.
	         *  Setting this to true requires you call {@link Renderer#sortEntities} manually. This
	         *  can be useful if you are adding a large batch of entities in a single frame and want
	         *  to delay the sorting until after they are all added.
	         */
	
	
	        Renderer.prototype.addEntity = function addEntity(entity, skipSort) {
	                _ECS.prototype.addEntity.call(this, entity);
	
	                if (!skipSort) this.sortEntities();
	        };
	
	        /**
	         * Sorts the systems by priority. If you change a system's priority after adding
	         * it to the renderer then you will need to call this for it to be properly sorted.
	         *
	         */
	
	
	        Renderer.prototype.sortSystems = function sortSystems() {
	                this.systems.sort(compareSystemsPriority);
	        };
	
	        /**
	         * Sorts the entities by render priority and their group hint. If you change an
	         * entity's priority after adding it to the renderer then you will need to call
	         * this for it to take effect.
	         *
	         */
	
	
	        Renderer.prototype.sortEntities = function sortEntities() {
	                this.entities.sort(compareRenderPriority);
	        };
	
	        /**
	         * Renders a drawable object to the render target.
	         *
	         * @param {RenderTarget} target - The target to render to, defaults to the screen.
	         * @param {boolean} clear - Should we clear the screen before rendering?
	         * @param {Matrix2d} transform - An optional matrix transform to apply for this render.
	         */
	
	
	        Renderer.prototype.render = function render() {
	                var target = arguments.length <= 0 || arguments[0] === undefined ? this.screen : arguments[0];
	                var clear = arguments.length <= 1 || arguments[1] === undefined ? this.clearBeforeRender : arguments[1];
	                var transform = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	                // if no context, or context is lost, just bail.
	                if (!this.gl || this.gl.isContextLost()) return;
	
	                // tell everyone we are updating
	                this.onBeforeRender.dispatch();
	
	                // set the target
	                target.transform = transform;
	                this.state.setRenderTarget(target);
	
	                // start the active object renderer
	                this.activeObjectRenderer.start();
	
	                // clear if we should
	                if (clear) this.state.target.clear();
	
	                // process all the entites and their systems
	                this.update();
	
	                // stop the active object renderer
	                this.activeObjectRenderer.stop();
	
	                // tell everyone we updated
	                this.onAfterRender.dispatch();
	        };
	
	        /**
	         * Sets the passed ObjectRenderer instance as the active object renderer.
	         *
	         * @param {ObjectRenderer} objectRenderer - The object renderer to use.
	         */
	
	
	        Renderer.prototype.setActiveObjectRenderer = function setActiveObjectRenderer(objectRenderer) {
	                if (this.activeObjectRenderer !== objectRenderer) {
	                        this.activeObjectRenderer.stop();
	                        this.activeObjectRenderer = objectRenderer;
	                        this.activeObjectRenderer.start();
	                }
	        };
	
	        /**
	         * Destroys this renderer and the related objects.
	         *
	         */
	
	
	        Renderer.prototype.destroy = function destroy() {
	                // unbind canvas events
	                this.gl.canvas.removeEventListener('webglcontextlost', this._boundOnContextLost, false);
	                this.gl.canvas.removeEventListener('webglcontextrestored', this._boundOnContextRestored, false);
	
	                this._boundOnContextLost = null;
	                this._boundOnContextRestored = null;
	
	                // destroy state
	                this.state.destroy();
	
	                // detach and lose signals
	                this.onContextLost.detachAll();
	                this.onContextLost = null;
	
	                this.onContextRestored.detachAll();
	                this.onContextRestored = null;
	
	                this.onContextChange.detachAll();
	                this.onContextChange = null;
	
	                this.onBeforeRender.detachAll();
	                this.onBeforeRender = null;
	
	                this.onAfterRender.detachAll();
	                this.onAfterRender = null;
	
	                this.activeObjectRenderer = null;
	
	                // finally lose context
	                if (this.gl.getExtension('WEBGL_lose_context')) {
	                        this.gl.getExtension('WEBGL_lose_context').loseContext();
	                }
	
	                this.gl = null;
	        };
	
	        /**
	         * Initializes the WebGL context.
	         *
	         * @private
	         */
	
	
	        Renderer.prototype._initContext = function _initContext() {
	                var gl = this.gl;
	
	                this.state.reset();
	
	                if (this.screen) {
	                        this.screen.destroy();
	                }
	
	                this.screen = new _RenderTarget2.default(gl, gl.canvas.width, gl.canvas.height, _RenderTarget2.default.defaultScaleMode, true);
	
	                this.state.setRenderTarget(this.screen);
	
	                // this.resize(gl.canvas.width, gl.canvas.height);
	
	                this.onContextChange.dispatch(this);
	        };
	
	        /**
	         * Called when the underlying context is lost.
	         *
	         * @private
	         * @param {WebGLContextEvent} event - The DOM event about the context being lost.
	         */
	
	
	        Renderer.prototype._onContextLost = function _onContextLost(event) {
	                event.preventDefault();
	                this.onContextLost.dispatch(this);
	        };
	
	        /**
	         * Called when the underlying context is restored.
	         *
	         * @private
	         */
	
	
	        Renderer.prototype._onContextRestored = function _onContextRestored() {
	                _GLProgramCache2.default.clear();
	                this._initContext();
	                this.onContextRestored.dispatch(this);
	        };
	
	        return Renderer;
	}(_ecs2.default);
	
	// lower is placed first
	
	
	exports.default = Renderer;
	function compareSystemsPriority(a, b) {
	        return a.priority - b.priority;
	}
	
	// lower is placed first, and within renderPriority they are grouped
	// by the renderGroupHint
	function compareRenderPriority(a, b) {
	        if (a.renderPriority === b.renderPriority) {
	                return a.renderGroupHint === b.renderGroupHint ? 0 : 1;
	        }
	
	        return a.renderPriority - b.renderPriority;
	}

/***/ },
/* 8 */
/*!********************************************!*\
  !*** ./~/mini-signals/lib/mini-signals.js ***!
  \********************************************/
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
/* 9 */
/*!******************************************!*\
  !*** ./plugins/core/src/gl/GLContext.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * @namespace GLContext
	 * @memberof glutil
	 */
	exports.default = {
	    /**
	     * Helper function to create a webGL Context.
	     *
	     * @memberof glutil.GLContext
	     * @param {HTMLCanvasElement} canvas - The canvas element that we will get the context from.
	     * @param {object} options - An options object that gets passed in to the canvas element containing
	     *  the context attributes, see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
	     *  for the options available
	     * @return {WebGLRenderingContext} the WebGL context
	     */
	    create: function create(canvas, options) {
	        var gl = canvas.getContext('webgl2', options) || canvas.getContext('experimental-webgl2', options) || canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options);
	
	        if (!gl) {
	            // fail, not able to get a context
	            throw new Error('This browser does not support WebGL.');
	        }
	
	        return gl;
	    }
	};

/***/ },
/* 10 */
/*!***********************************************!*\
  !*** ./plugins/core/src/gl/GLProgramCache.js ***!
  \***********************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var PROGRAM_CACHE = {};
	
	/**
	 * @namespace GLProgramCache
	 * @memberof glutil
	 */
	exports.default = {
	    /**
	     * Gets a program from the cache.
	     *
	     * @memberof glutil.GLProgramCache
	     * @param {string} key - The key of the program to get.
	     * @return {WebGLProgram} The cached program, or undefined if none found.
	     */
	    get: function get(key) {
	        return PROGRAM_CACHE[key];
	    },
	
	
	    /**
	     * Sets a program in the cache.
	     *
	     * @memberof glutil.GLProgramCache
	     * @param {string} key - The key of the program to get.
	     * @param {WebGLProgram} program - The program to put into the cache.
	     */
	    set: function set(key, program) {
	        PROGRAM_CACHE[key] = program;
	    },
	
	
	    /**
	     * Generates a cache key for a vertex/fragment source pair.
	     *
	     * @memberof glutil.GLProgramCache
	     * @param {string} vsrc - The vertex source of the program that will be stored.
	     * @param {string} fsrc - The fragment source of the program that will be stored.
	     * @return {string} The cache key.
	     */
	    key: function key(vsrc, fsrc) {
	        return vsrc + fsrc;
	    },
	
	
	    /**
	     * Clears the GLProgramCache storage.
	     *
	     * @memberof glutil.GLProgramCache
	     */
	    clear: function clear() {
	        PROGRAM_CACHE = {};
	    }
	};

/***/ },
/* 11 */
/*!*************************************************!*\
  !*** ./plugins/core/src/render/RenderTarget.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // TODO: Remove Rectangle from this code...
	
	var _GLFramebuffer = __webpack_require__(/*! ../gl/GLFramebuffer */ 12);
	
	var _GLFramebuffer2 = _interopRequireDefault(_GLFramebuffer);
	
	var _Vector2d = __webpack_require__(/*! ../math/Vector2d */ 15);
	
	var _Vector2d2 = _interopRequireDefault(_Vector2d);
	
	var _Matrix2d = __webpack_require__(/*! ../math/Matrix2d */ 16);
	
	var _Matrix2d2 = _interopRequireDefault(_Matrix2d);
	
	var _shapes = __webpack_require__(/*! @fae/shapes */ 17);
	
	var _Color = __webpack_require__(/*! ../util/Color */ 23);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A RenderTarget is a wrapper around framebuffer to be rendered to.
	 *
	 * @class
	 * @memberof render
	 */
	var RenderTarget = function () {
	    /**
	     * Creates a new render target.
	     *
	     * @param {WebGLContext} gl - The WebGL context to draw with.
	     * @param {number} width - The width of the target.
	     * @param {number} height - The height of the target.
	     * @param {number} scaleMode - The mode to scale by.
	     * @param {boolean} root - Whether this is the root render target or not.
	     */
	    function RenderTarget(gl, width, height) {
	        var scaleMode = arguments.length <= 3 || arguments[3] === undefined ? RenderTarget.defaultScaleMode : arguments[3];
	        var root = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	
	        _classCallCheck(this, RenderTarget);
	
	        this.gl = gl;
	        this.root = root;
	
	        this.framebuffer = null;
	
	        this.clearColor = _Color2.default.BLACK.clone();
	
	        this.size = new _Vector2d2.default();
	
	        this.projectionMatrix = new _Matrix2d2.default();
	
	        this.transform = null;
	
	        this.scaleMode = scaleMode;
	
	        this.defaultFrame = new _shapes.Rectangle();
	        this.destinationFrame = null;
	        this.sourceFrame = null;
	
	        if (!root) {
	            this.framebuffer = _GLFramebuffer2.default.createRGBA(gl, 100, 100);
	
	            if (this.scaleMode === WebGLRenderingContext.NEAREST) {
	                this.framebuffer.texture.enableNearestScaling();
	            } else {
	                this.framebuffer.texture.enableLinearScaling();
	            }
	        } else {
	            this.framebuffer = new _GLFramebuffer2.default(gl, 100, 100);
	            this.framebuffer.framebuffer = null;
	        }
	
	        this.setFrame();
	        this.resize(width, height);
	    }
	
	    /**
	     * The underlying framebuffer's texture.
	     *
	     * @readonly
	     * @member {GLTexture}
	     */
	
	
	    /**
	     * Clears the target with a single color. Usually called each from to clear the buffer.
	     * If you pass an array it must be in the format: `[red, green, blue, alpha]`.
	     *
	     * @param {Color|number[]|Float32Array} color - The color to clear with.
	     * @return {RenderTarget} Returns itself.
	     */
	    RenderTarget.prototype.clear = function clear() {
	        var color = arguments.length <= 0 || arguments[0] === undefined ? this.clearColor : arguments[0];
	
	        this.framebuffer.clear(color.r, color.g, color.b, color.a);
	
	        return this;
	    };
	
	    /**
	     * Sets the frame of the render target.
	     *
	     * @param {Rectangle} destinationFrame - The destination frame.
	     * @param {Rectangle} sourceFrame - The source frame.
	     * @return {RenderTarget} Returns itself.
	     */
	
	
	    RenderTarget.prototype.setFrame = function setFrame() {
	        var destinationFrame = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	        var sourceFrame = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	        this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
	        this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;
	
	        return this;
	    };
	
	    /**
	     * Binds the buffers and initialises the viewport.
	     *
	     * @return {RenderTarget} Returns itself.
	     */
	
	
	    RenderTarget.prototype.activate = function activate() {
	        var gl = this.gl;
	
	        this.framebuffer.bind();
	
	        this.calculateProjection(this.destinationFrame, this.sourceFrame);
	
	        if (this.transform) {
	            this.projectionMatrix.multiply(this.transform);
	        }
	
	        if (this.destinationFrame.equals(this.sourceFrame)) {
	            gl.enable(gl.SCISSOR_TEST);
	            gl.scissor(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width /* * this.resolution*/ | 0, this.destinationFrame.height /* * this.resolution*/ | 0);
	        } else {
	            gl.disable(gl.SCISSOR_TEST);
	        }
	
	        // set viewport to this target
	        gl.viewport(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width /* * this.resolution*/ | 0, this.destinationFrame.height /* * this.resolution*/ | 0);
	
	        return this;
	    };
	
	    /**
	     * Updates the projection matrix based on the projection frame.
	     *
	     * @param {Rectangle} destinationFrame - The destination frame.
	     * @param {Rectangle} sourceFrame - The source frame.
	     * @return {RenderTarget} Returns itself.
	     */
	
	
	    RenderTarget.prototype.calculateProjection = function calculateProjection(destinationFrame) {
	        var sourceFrame = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	        var pm = this.projectionMatrix;
	
	        sourceFrame = sourceFrame || destinationFrame;
	
	        pm.identity();
	
	        if (!this.root) {
	            pm.a = 1 / destinationFrame.width * 2;
	            pm.d = 1 / destinationFrame.height * 2;
	
	            pm.tx = -1 - sourceFrame.x * pm.a;
	            pm.ty = -1 - sourceFrame.y * pm.d;
	        } else {
	            pm.a = 1 / destinationFrame.width * 2;
	            pm.d = -1 / destinationFrame.height * 2;
	
	            pm.tx = -1 - sourceFrame.x * pm.a;
	            pm.ty = 1 - sourceFrame.y * pm.d;
	        }
	
	        return this;
	    };
	
	    /**
	     * Resizes the texture to the specified width and height.
	     *
	     * @param {number} width - the new width of the texture.
	     * @param {number} height - the new height of the texture.
	     * @return {RenderTarget} Returns itself.
	     */
	
	
	    RenderTarget.prototype.resize = function resize(width, height) {
	        width = Math.floor(width);
	        height = Math.floor(height);
	
	        if (this.size.x === width && this.size.y === height) {
	            return this;
	        }
	
	        this.size.x = width;
	        this.size.y = height;
	
	        this.defaultFrame.width = width;
	        this.defaultFrame.height = height;
	
	        this.framebuffer.resize(width /* * this.resolution*/, height /* * this.resolution*/);
	
	        var projectionFrame = this.size;
	
	        this.calculateProjection(projectionFrame);
	
	        return this;
	    };
	
	    /**
	     * Destroys the render target.
	     *
	     */
	
	
	    RenderTarget.prototype.destroy = function destroy() {
	        this.framebuffer.destroy();
	
	        this.gl = null;
	        this.framebuffer = null;
	        this.clearColor = null;
	        this.size = null;
	        this.projectionMatrix = null;
	        this.transform = null;
	        this.defaultFrame = null;
	        this.destinationFrame = null;
	        this.sourceFrame = null;
	    };
	
	    _createClass(RenderTarget, [{
	        key: 'texture',
	        get: function get() {
	            return this.framebuffer.texture;
	        }
	
	        /**
	         * The width of this render target. Proxy for `.size.x`.
	         *
	         * To set this, call `.resize(width, height)`
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'width',
	        get: function get() {
	            return this.size.x;
	        }
	
	        /**
	         * The width of this render target. Proxy for `.size.x`.
	         *
	         * To set this, call `.resize(width, height)`
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'height',
	        get: function get() {
	            return this.size.y;
	        }
	    }]);
	
	    return RenderTarget;
	}();
	
	/**
	 * The default scale mode for a render target.
	 *
	 * @static
	 * @constant
	 * @memberof RenderTarget
	 * @type {number}
	 * @default WebGLRenderingContext.LINEAR
	 */
	
	
	exports.default = RenderTarget;
	RenderTarget.defaultScaleMode = WebGLRenderingContext.LINEAR;

/***/ },
/* 12 */
/*!**********************************************!*\
  !*** ./plugins/core/src/gl/GLFramebuffer.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _GLTexture = __webpack_require__(/*! ./GLTexture */ 13);
	
	var _GLTexture2 = _interopRequireDefault(_GLTexture);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Helper class to create a WebGL framebuffer.
	 *
	 * Generally you do not want to create this class directly, but instead
	 * use the static {@link GLFramebuffer#createRGBA} and {@link GLFramebuffer#createFloat32}
	 *
	 * @class
	 * @memberof glutil
	 */
	var GLFramebuffer = function () {
	        /**
	         * @param {WebGLRenderingContext} gl - The current WebGL rendering context
	         * @param {number} width - the width of the drawing area of the frame buffer
	         * @param {number} height - the height of the drawing area of the frame buffer
	         */
	        function GLFramebuffer(gl) {
	                var width = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
	                var height = arguments.length <= 2 || arguments[2] === undefined ? 100 : arguments[2];
	
	                _classCallCheck(this, GLFramebuffer);
	
	                /**
	                 * The current WebGL rendering context.
	                 *
	                 * @member {WebGLRenderingContext}
	                 */
	                this.gl = gl;
	
	                /**
	                 * The frame buffer.
	                 *
	                 * @member {WebGLFramebuffer}
	                 */
	                this.framebuffer = gl.createFramebuffer();
	
	                /**
	                 * The stencil buffer.
	                 *
	                 * @member {WebGLRenderbuffer}
	                 */
	                this.stencil = null;
	
	                /**
	                 * The stencil buffer.
	                 *
	                 * @member {GLTexture}
	                 */
	                this.texture = null;
	
	                /**
	                 * The width of the drawing area of the buffer.
	                 *
	                 * @member {number}
	                 */
	                this.width = width;
	
	                /**
	                 * The height of the drawing area of the buffer.
	                 *
	                 * @member {number}
	                 */
	                this.height = height;
	        }
	
	        /**
	         * Creates a frame buffer with a texture containing the given data
	         *
	         * @static
	         * @param {WebGLRenderingContext} gl - The current WebGL rendering context
	         * @param {number} width - the width of the drawing area of the frame buffer
	         * @param {number} height - the height of the drawing area of the frame buffer
	         * @return {GLFramebuffer} The new framebuffer.
	         */
	
	
	        GLFramebuffer.createRGBA = function createRGBA(gl, width, height) {
	                return GLFramebuffer.createFloat32(gl, width, height, null);
	        };
	
	        /**
	         * Creates a frame buffer with a texture containing the given data
	         *
	         * @static
	         * @param {WebGLRenderingContext} gl - The current WebGL rendering context
	         * @param {number} width - the width of the drawing area of the frame buffer
	         * @param {number} height - the height of the drawing area of the frame buffer
	         * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} data - an array of data
	         * @return {GLFramebuffer} The new framebuffer.
	         */
	
	
	        GLFramebuffer.createFloat32 = function createFloat32(gl, width, height, data) {
	                var texture = _GLTexture2.default.fromData(gl, data, width, height);
	
	                texture.enableNearestScaling();
	                texture.enableWrapClamp();
	
	                // now create the framebuffer object and attach the texture to it.
	                var fbo = new GLFramebuffer(gl, width, height);
	
	                fbo.enableTexture(texture);
	                fbo.unbind();
	
	                return fbo;
	        };
	
	        /**
	         * Adds a texture to the framebuffer.
	         *
	         * @param {GLTexture} texture - the texture to add.
	         */
	
	
	        GLFramebuffer.prototype.enableTexture = function enableTexture(texture) {
	                var gl = this.gl;
	
	                this.texture = texture || new _GLTexture2.default(gl);
	
	                this.texture.bind();
	
	                this.bind();
	
	                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.texture, 0);
	        };
	
	        /**
	         * Initialises the stencil buffer
	         */
	
	
	        GLFramebuffer.prototype.enableStencil = function enableStencil() {
	                if (this.stencil) return;
	
	                var gl = this.gl;
	
	                this.stencil = gl.createRenderbuffer();
	
	                gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
	
	                // TODO.. this is depth AND stencil?
	                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencil);
	                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
	        };
	
	        /**
	         * Erases the drawing area and fills it with a colour
	         *
	         * @param {number} r - the red value of the clearing colour
	         * @param {number} g - the green value of the clearing colour
	         * @param {number} b - the blue value of the clearing colour
	         * @param {number} a - the alpha value of the clearing colour
	         */
	
	
	        GLFramebuffer.prototype.clear = function clear() {
	                var r = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	                var g = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	                var b = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	                var a = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];
	
	                this.bind();
	
	                var gl = this.gl;
	
	                gl.clearColor(r, g, b, a);
	                gl.clear(gl.COLOR_BUFFER_BIT);
	        };
	
	        /**
	         * Binds the frame buffer to the WebGL context
	         */
	
	
	        GLFramebuffer.prototype.bind = function bind() {
	                var gl = this.gl;
	
	                if (this.texture) {
	                        this.texture.unbind();
	                }
	
	                gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
	        };
	
	        /**
	         * Unbinds the frame buffer to the WebGL context
	         */
	
	
	        GLFramebuffer.prototype.unbind = function unbind() {
	                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	        };
	
	        /**
	         * Resizes the drawing area of the buffer to the given width and height
	         *
	         * @param {number} width - the new width
	         * @param {number} height - the new height
	         */
	
	
	        GLFramebuffer.prototype.resize = function resize(width, height) {
	                var gl = this.gl;
	
	                this.width = width;
	                this.height = height;
	
	                if (this.texture) {
	                        this.texture.uploadData(null, width, height);
	                }
	
	                if (this.stencil) {
	                        // update the stencil buffer width and height
	                        gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
	                        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
	                }
	        };
	
	        /**
	         * Destroys this buffer
	         */
	
	
	        GLFramebuffer.prototype.destroy = function destroy() {
	                if (this.texture) {
	                        this.texture.destroy();
	                }
	
	                this.gl.deleteFramebuffer(this.framebuffer);
	
	                this.gl = null;
	                this.framebuffer = null;
	                this.stencil = null;
	                this.texture = null;
	        };
	
	        return GLFramebuffer;
	}();
	
	exports.default = GLFramebuffer;

/***/ },
/* 13 */
/*!******************************************!*\
  !*** ./plugins/core/src/gl/GLTexture.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _debug = __webpack_require__(/*! ../debug */ 14);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FLOATING_POINT_AVAILABLE = false;
	
	var lastBoundTextureId = 0;
	
	/**
	 * Helper class to create a WebGL texture.
	 *
	 * @class
	 * @memberof glutil
	 */
	
	var GLTexture = function () {
	    /**
	     * @param {WebGLRenderingContext} gl - The current WebGL context.
	     * @param {number} width - The width of the texture.
	     * @param {number} height - The height of the texture.
	     * @param {number} format - The pixel format of the texture.
	     * @param {number} type - The gl type of the texture.
	     */
	    function GLTexture(gl) {
	        var width = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var height = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var format = arguments.length <= 3 || arguments[3] === undefined ? gl.RGBA : arguments[3];
	        var type = arguments.length <= 4 || arguments[4] === undefined ? gl.UNSIGNED_BYTE : arguments[4];
	
	        _classCallCheck(this, GLTexture);
	
	        /**
	         * The current WebGL rendering context
	         *
	         * @member {WebGLRenderingContext}
	         */
	        this.gl = gl;
	
	        /**
	         * The WebGL texture
	         *
	         * @member {WebGLTexture}
	         */
	        this.texture = gl.createTexture();
	
	        /**
	         * If mipmapping was used for this texture, enable and disable with enableMipmap()
	         *
	         * @member {boolean}
	         */
	        this.mipmap = false;
	
	        /**
	         * Set to true to enable pre-multiplied alpha
	         *
	         * @member {boolean}
	         */
	        this.premultiplyAlpha = false;
	
	        /**
	         * The width of texture
	         *
	         * @member {number}
	         */
	        this.width = width;
	
	        /**
	         * The height of texture
	         *
	         * @member {number}
	         */
	        this.height = height;
	
	        /**
	         * The pixel format of the texture. defaults to gl.RGBA
	         *
	         * @member {number}
	         */
	        this.format = format;
	
	        /**
	         * The gl type of the texture. defaults to gl.UNSIGNED_BYTE
	         *
	         * @member {number}
	         */
	        this.type = type;
	    }
	
	    /**
	     * @static
	     * @param {WebGLRenderingContext} gl - The current WebGL context
	     * @param {HTMLImageElement|ImageData} source - the source image of the texture
	     * @param {boolean} premultiplyAlpha - If we want to use pre-multiplied alpha
	     * @return {GLTexture} The new texture.
	     */
	
	
	    GLTexture.fromSource = function fromSource(gl, source) {
	        var premultiplyAlpha = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	        var texture = new GLTexture(gl);
	
	        texture.premultiplyAlpha = premultiplyAlpha;
	        texture.upload(source);
	
	        return texture;
	    };
	
	    /**
	     * @static
	     * @param {WebGLRenderingContext} gl - The current WebGL context
	     * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} data - the data to upload to the texture
	     * @param {number} width - the new width of the texture
	     * @param {number} height - the new height of the texture
	     * @return {GLTexture} The new texture.
	     */
	
	
	    GLTexture.fromData = function fromData(gl, data, width, height) {
	        var texture = new GLTexture(gl);
	
	        texture.uploadData(data, width, height);
	
	        return texture;
	    };
	
	    /**
	     * Uploads this texture to the GPU
	     *
	     * @param {HTMLImageElement|ImageData|HTMLVideoElement} source - the source image of the texture
	     */
	
	
	    GLTexture.prototype.upload = function upload(source) {
	        this.bind();
	
	        // if the source is a video, we need to use the videoWidth / videoHeight as width / height will be incorrect.
	        this.width = source.videoWidth || source.width;
	        this.height = source.videoHeight || source.height;
	
	        var gl = this.gl;
	
	        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
	        gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, source);
	    };
	
	    /**
	     * Use a data source and uploads this texture to the GPU
	     *
	     * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} data - the data to upload to the texture
	     * @param {number} width - the new width of the texture
	     * @param {number} height - the new height of the texture
	     */
	
	
	    GLTexture.prototype.uploadData = function uploadData(data, width, height) {
	        this.bind();
	
	        var gl = this.gl;
	
	        this.width = width || this.width;
	        this.height = height || this.height;
	
	        if (data instanceof Float32Array) {
	            if (!FLOATING_POINT_AVAILABLE) {
	                var ext = gl.getExtension('OES_texture_float');
	
	                (0, _debug.ASSERT)(ext, 'GLTexture#uploadData: floating point textures not available.');
	
	                FLOATING_POINT_AVAILABLE = !!ext;
	            }
	
	            this.type = gl.FLOAT;
	        } else {
	            // TODO support for other types
	            this.type = gl.UNSIGNED_BYTE;
	        }
	
	        // what type of data?
	        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
	        gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, data || null);
	    };
	
	    /**
	     * Binds the texture
	     *
	     * @param {number} location - The texture slot to fill.
	     */
	
	
	    GLTexture.prototype.bind = function bind() {
	        var location = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];
	
	        var gl = this.gl;
	
	        if (location > -1 && location !== lastBoundTextureId) {
	            gl.activeTexture(gl.TEXTURE0 + location);
	            lastBoundTextureId = location;
	        }
	
	        gl.bindTexture(gl.TEXTURE_2D, this.texture);
	    };
	
	    /**
	     * Unbinds the texture
	     */
	
	
	    GLTexture.prototype.unbind = function unbind() {
	        var gl = this.gl;
	
	        gl.bindTexture(gl.TEXTURE_2D, null);
	    };
	
	    /**
	     * @param {boolean} linear - if we want to use linear filtering or nearest neighbour interpolation
	     */
	
	
	    GLTexture.prototype.minFilter = function minFilter(linear) {
	        var gl = this.gl;
	
	        this.bind();
	
	        if (this.mipmap) {
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST); // eslint-disable-line max-len
	        } else {
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR : gl.NEAREST);
	        }
	    };
	
	    /**
	     * @param {boolean} linear - if we want to use linear filtering or nearest neighbour interpolation
	     */
	
	
	    GLTexture.prototype.magFilter = function magFilter(linear) {
	        var gl = this.gl;
	
	        this.bind();
	
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linear ? gl.LINEAR : gl.NEAREST);
	    };
	
	    /**
	     * Enables mipmapping
	     */
	
	
	    GLTexture.prototype.enableMipmap = function enableMipmap() {
	        var gl = this.gl;
	
	        this.bind();
	
	        this.mipmap = true;
	
	        gl.generateMipmap(gl.TEXTURE_2D);
	    };
	
	    /**
	     * Enables linear filtering
	     */
	
	
	    GLTexture.prototype.enableLinearScaling = function enableLinearScaling() {
	        this.minFilter(true);
	        this.magFilter(true);
	    };
	
	    /**
	     * Enables nearest neighbour interpolation
	     */
	
	
	    GLTexture.prototype.enableNearestScaling = function enableNearestScaling() {
	        this.minFilter(false);
	        this.magFilter(false);
	    };
	
	    /**
	     * Enables clamping on the texture so WebGL will not repeat it
	     */
	
	
	    GLTexture.prototype.enableWrapClamp = function enableWrapClamp() {
	        var gl = this.gl;
	
	        this.bind();
	
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	    };
	
	    /**
	     * Enable tiling on the texture
	     */
	
	
	    GLTexture.prototype.enableWrapRepeat = function enableWrapRepeat() {
	        var gl = this.gl;
	
	        this.bind();
	
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
	    };
	
	    /**
	     * Enable wrapping on the texture
	     */
	
	
	    GLTexture.prototype.enableWrapMirrorRepeat = function enableWrapMirrorRepeat() {
	        var gl = this.gl;
	
	        this.bind();
	
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
	    };
	
	    /**
	     * Destroys this texture
	     */
	
	
	    GLTexture.prototype.destroy = function destroy() {
	        if (this.gl.isTexture(this.texture)) {
	            this.gl.deleteTexture(this.texture);
	        }
	
	        this.gl = null;
	        this.texture = null;
	    };
	
	    return GLTexture;
	}();
	
	exports.default = GLTexture;

/***/ },
/* 14 */
/*!***********************************!*\
  !*** ./plugins/core/src/debug.js ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.ASSERT = ASSERT;
	/**
	 * Note that the debug namespace is only exported in "debug" builds.
	 * In production builds, this namespace is not included.
	 *
	 * @namespace debug
	 */
	
	/**
	 * @memberof debug
	 * @param {boolean} bool - The condition to ensure is true.
	 * @param {string} message - The message to display if the first param is not true.
	 */
	function ASSERT(bool, message) {
	  if (!bool) throw new Error("[Fae ASSERT] " + message);
	}

/***/ },
/* 15 */
/*!*******************************************!*\
  !*** ./plugins/core/src/math/Vector2d.js ***!
  \*******************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* eslint max-params: [2, { max: 6 }] */
	
	/**
	 * This is a modified version of Brandon Jones's Vector2d utility.
	 *
	 * modified by cengler
	 */
	
	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	/**
	 * @ignore
	 */
	var EPSILON = 0.000001;
	
	/**
	 * A Vector2d is an object defined as:
	 *
	 * ```js
	 * [x, y]
	 * ```
	 *
	 * @class
	 * @memberof math
	 */
	
	var Vector2d = function () {
	    /**
	     * Creates a new, empty Vector2d
	     *
	     * @param {number} x - The starting x value.
	     * @param {number} y - The starting y value.
	     */
	    function Vector2d() {
	        var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	
	        _classCallCheck(this, Vector2d);
	
	        /**
	         * The `x` component of the Vector2d.
	         *
	         * @member {number}
	         */
	        this.x = x;
	
	        /**
	         * The `y` component of the Vector2d.
	         *
	         * @member {number}
	         */
	        this.y = y;
	    }
	
	    /**
	     * Copy the values from one Vector2d to another
	     *
	     * @param {Vector2d} b - the source vector.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.copy = function copy(b) {
	        this.x = b.x;
	        this.y = b.y;
	
	        return this;
	    };
	
	    /**
	     * Set the components of a Vector2d to the given values
	     *
	     * @param {number} x - X component.
	     * @param {number} y - Y component.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.set = function set(x, y) {
	        this.x = x;
	        this.y = y;
	
	        return this;
	    };
	
	    /**
	     * Adds a vector `b` to this one.
	     *
	     * @param {Vector2d} b - the operand to add to this vector.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.add = function add(b) {
	        this.x += b.x;
	        this.y += b.y;
	
	        return this;
	    };
	
	    /**
	     * Subtracts vector `b` from this one.
	     *
	     * @param {Vector2d} b - the operand to subtract from this vector.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.subtract = function subtract(b) {
	        this.x -= b.x;
	        this.y -= b.y;
	
	        return this;
	    };
	
	    /**
	     * Multiplies this vector by `b`.
	     *
	     * @param {Vector2d} b - the operand to multiply this vector by.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.multiply = function multiply(b) {
	        this.x *= b.x;
	        this.y *= b.y;
	
	        return this;
	    };
	
	    /**
	     * Divides this vector by `b`.
	     *
	     * @param {Vector2d} b - the operand to divide this vector by.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.divide = function divide(b) {
	        this.x /= b.x;
	        this.y /= b.y;
	
	        return this;
	    };
	
	    /**
	     * Math.ceil the components of this vector.
	     *
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.ceil = function ceil() {
	        this.x = Math.ceil(this.x);
	        this.y = Math.ceil(this.y);
	
	        return this;
	    };
	
	    /**
	     * Math.floor the components of this vector.
	     *
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.floor = function floor() {
	        this.x = Math.floor(this.x);
	        this.y = Math.floor(this.y);
	
	        return this;
	    };
	
	    /**
	     * Sets the components to the minimum of this vector and the passed vector.
	     *
	     * @param {Vector2d} b - the operand to check for min values.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.min = function min(b) {
	        this.x = Math.min(this.x, b.x);
	        this.y = Math.min(this.y, b.y);
	
	        return this;
	    };
	
	    /**
	     * Sets the components to the maximum of this vector and the passed vector.
	     *
	     * @param {Vector2d} b - the operand to check for max values.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.max = function max(b) {
	        this.x = Math.max(this.x, b.x);
	        this.y = Math.max(this.y, b.y);
	
	        return this;
	    };
	
	    /**
	     * Math.round the components of this vector.
	     *
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.round = function round() {
	        this.x = Math.round(this.x);
	        this.y = Math.round(this.y);
	
	        return this;
	    };
	
	    /**
	     * Scales this vector by a scalar number.
	     *
	     * @param {number} b - amount to scale the vector by.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.scale = function scale(b) {
	        this.x *= b;
	        this.y *= b;
	
	        return this;
	    };
	
	    /**
	     * Scales each component of the passed vector by the given scalar, then adds the result
	     * to each respective component of this vector.
	     *
	     * @param {Vector2d} b - the vector to scale before adding into this vector.
	     * @param {number} scale - the amount to scale b's elements by before adding.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.scaleAndAdd = function scaleAndAdd(b, scale) {
	        this.x += b.x * scale;
	        this.y += b.y * scale;
	
	        return this;
	    };
	
	    /**
	     * Calculates the euclidian distance between the passed vector and this one.
	     *
	     * @param {Vector2d} b - the operand to calculate distance to.
	     * @return {number} distance between this vector and b.
	     */
	
	
	    Vector2d.prototype.distance = function distance(b) {
	        var x = b.x - this.x;
	        var y = b.y - this.y;
	
	        return Math.sqrt(x * x + y * y);
	    };
	
	    /**
	     * Calculates the squared euclidian distance between the passed vector and this one.
	     *
	     * @param {Vector2d} b - the operand to calculate distance to.
	     * @return {number} squared distance between this vector and b.
	     */
	
	
	    Vector2d.prototype.squaredDistance = function squaredDistance(b) {
	        var x = b.x - this.x;
	        var y = b.y - this.y;
	
	        return x * x + y * y;
	    };
	
	    /**
	     * Calculates the length of the vector.
	     *
	     * @return {number} length of the vector.
	     */
	
	
	    Vector2d.prototype.length = function length() {
	        var x = this.x;
	        var y = this.y;
	
	        return Math.sqrt(x * x + y * y);
	    };
	
	    /**
	     * Calculates the squared length of the vector.
	     *
	     * @return {number} squared length of the vector.
	     */
	
	
	    Vector2d.prototype.squaredLength = function squaredLength() {
	        var x = this.x;
	        var y = this.y;
	
	        return x * x + y * y;
	    };
	
	    /**
	     * Negates the components of the vector.
	     *
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.negate = function negate() {
	        this.x = -this.x;
	        this.y = -this.y;
	
	        return this;
	    };
	
	    /**
	     * Returns the inverse of the components of the vector.
	     *
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.inverse = function inverse() {
	        this.x = 1.0 / this.x;
	        this.y = 1.0 / this.y;
	
	        return this;
	    };
	
	    /**
	     * Normalizes the vector.
	     *
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.normalize = function normalize() {
	        var x = this.x;
	        var y = this.y;
	
	        var len = x * x + y * y;
	
	        if (len > 0) {
	            // TODO: evaluate use of glm_invsqrt here?
	            len = 1 / Math.sqrt(len);
	            this.x = this.x * len;
	            this.y = this.y * len;
	        }
	
	        return this;
	    };
	
	    /**
	     * Calculates the dot product of the vector and the passed vector.
	     *
	     * @param {Vector2d} b - the operand to dot with.
	     * @return {number} dot product of this vector and b.
	     */
	
	
	    Vector2d.prototype.dot = function dot(b) {
	        return this.x * b.x + this.y * b.y;
	    };
	
	    /**
	     * Linearly interpolates this vector towards the passed vector
	     * using the passed interpolation ammount (`t`).
	     *
	     * @param {Vector2d} b - the operand to lerp to.
	     * @param {number} t - interpolation amount between the two vectors.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.lerp = function lerp(b, t) {
	        this.x += t * (b.x - this.x);
	        this.y += t * (b.y - this.y);
	
	        return this;
	    };
	
	    /**
	     * Sets the components to random numbers with the given scale.
	     *
	     * @param {number} scale - Length of the resulting vector. If ommitted, a unit vector will be returned.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.random = function random() {
	        var scale = arguments.length <= 0 || arguments[0] === undefined ? 1.0 : arguments[0];
	
	        var r = Math.random() * 2.0 * Math.PI;
	
	        this.x = Math.cos(r) * scale;
	        this.y = Math.sin(r) * scale;
	
	        return this;
	    };
	
	    /**
	     * Transforms the vector with a Matrix2d
	     *
	     * @param {Matrix2d} m - matrix to transform with.
	     * @return {Vector2d} returns itself.
	     */
	
	
	    Vector2d.prototype.transformMatrix2d = function transformMatrix2d(m) {
	        var x = this.x;
	        var y = this.y;
	
	        this.x = m.a * x + m.c * y + m.tx;
	        this.y = m.b * x + m.d * y + m.ty;
	
	        return this;
	    };
	
	    /**
	     * Returns a string representation of a vector
	     *
	     * @return {string} string representation of the vector
	     */
	
	
	    Vector2d.prototype.toString = function toString() {
	        return "Vector2d(" + this.x + ", " + this.y + ")";
	    };
	
	    /**
	     * Returns whether or not the passed vector has exactly the same elements in
	     * the same position (when compared with ===) as this one.
	     *
	     * @param {Vector2d} b - The vector to check equality against.
	     * @return {boolean} True if the vectors are equal, false otherwise.
	     */
	
	
	    Vector2d.prototype.exactEquals = function exactEquals(b) {
	        return this.x === b.x && this.y === b.y;
	    };
	
	    /**
	     * Returns whether or not the passed vector has approximately the same elements in
	     * the same position (when compared with ===) as this one.
	     *
	     * @param {Vector2d} b - The vector to check equality against.
	     * @return {boolean} True if the vectors are equal, false otherwise.
	     */
	
	
	    Vector2d.prototype.equals = function equals(b) {
	        if (!b) return false;
	
	        var a0 = this.x;
	        var a1 = this.y;
	        var b0 = b.x;
	        var b1 = b.y;
	
	        return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
	    };
	
	    return Vector2d;
	}();
	
	/**
	 * Returns the number of elements this vector has.
	 *
	 * @static
	 * @return {number} number of elements in a Vector2d.
	 */
	
	
	exports.default = Vector2d;
	Vector2d.LENGTH = 2;
	
	/**
	 * Size in bytes of a Matrix2d.
	 *
	 * @static
	 * @return {number} byte size of a Matrix2d.
	 */
	Vector2d.BYTE_SIZE = Vector2d.LENGTH * Vector2d.BYTES_PER_ELEMENT;

/***/ },
/* 16 */
/*!*******************************************!*\
  !*** ./plugins/core/src/math/Matrix2d.js ***!
  \*******************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* eslint max-params: [1, { "max": 6 }] */
	/**
	 * This is a modified version of Brandon Jones's mat2d utility.
	 *
	 * modified by cengler
	 */
	
	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	/**
	 * @ignore
	 */
	var EPSILON = 0.000001;
	
	/**
	 * A 2x3 matrix.
	 *
	 * A Matrix2d is an object that contains six elements defined as:
	 *
	 * ```js
	 * [a, b, c, d, tx, ty]
	 * ```
	 *
	 * This is a short form for a 3x3 transformation matrix:
	 *
	 * ```
	 * | a  c  tx|
	 * | b  d  ty|
	 * | 0  0  1 |
	 * ```
	 *
	 * Since the last row is ignored so the data structure is smaller and operations are faster.
	 *
	 * For those unfamiliar with 3x3 transformation matrices, you could say that:
	 *
	 * - `a` and `d` affect scale,
	 * - `c` and `b` affect rotation, and
	 * - `tx` and `ty` affect translation.
	 *
	 * It is a bit more interconnected than that, but thats basic gist.
	 *
	 * @class
	 * @memberof math
	 */
	
	var Matrix2d = function () {
	    /**
	     * Creates a new identity Matrix2d
	     *
	     * @param {number} a - The `a` component.
	     * @param {number} b - The `b` component.
	     * @param {number} c - The `c` component.
	     * @param {number} d - The `d` component.
	     * @param {number} tx - The `tx` component.
	     * @param {number} ty - The `ty` component.
	     */
	    function Matrix2d() {
	        var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	        var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var c = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var d = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];
	        var tx = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	        var ty = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
	
	        _classCallCheck(this, Matrix2d);
	
	        this._mat3 = null;
	
	        /**
	         * The `a` component of the Matrix2d.
	         *
	         * @member {number}
	         */
	        this.a = a;
	
	        /**
	         * The `b` component of the Matrix2d.
	         *
	         * @member {number}
	         */
	        this.b = b;
	
	        /**
	         * The `c` component of the Matrix2d.
	         *
	         * @member {number}
	         */
	        this.c = c;
	
	        /**
	         * The `d` component of the Matrix2d.
	         *
	         * @member {number}
	         */
	        this.d = d;
	
	        /**
	         * The `tx` component of the Matrix2d.
	         *
	         * @member {number}
	         */
	        this.tx = tx;
	
	        /**
	         * The `ty` component of the Matrix2d.
	         *
	         * @member {number}
	         */
	        this.ty = ty;
	    }
	
	    /**
	     * Converts to the full 3x3 matrix form, optionally transposing.
	     *
	     * @param {boolean} transpose - Should we transpose the matrix?
	     * @param {Float32Array} out - An optional array to assign values to.
	     * @return {Float32Array} A 9-element array representing the 3x3 Matrix.
	     */
	
	
	    Matrix2d.prototype.toMat3Array = function toMat3Array() {
	        var transpose = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	        var out = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	        if (!out && !this._mat3) {
	            this._mat3 = new Float32Array(9);
	        }
	
	        out = out || this._mat3;
	
	        if (transpose) {
	            out[0] = this.a;
	            out[1] = this.b;
	            out[2] = 0;
	            out[3] = this.c;
	            out[4] = this.d;
	            out[5] = 0;
	            out[6] = this.tx;
	            out[7] = this.ty;
	            out[8] = 1;
	        } else {
	            out[0] = this.a;
	            out[1] = this.c;
	            out[2] = this.tx;
	            out[3] = this.b;
	            out[4] = this.d;
	            out[5] = this.ty;
	            out[6] = 0;
	            out[7] = 0;
	            out[8] = 1;
	        }
	
	        return out;
	    };
	
	    /**
	     * Copy the values from a Matrix2d into this one.
	     *
	     * @param {Matrix2d} b - the source matrix.
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.copy = function copy(b) {
	        this.a = b.a;
	        this.b = b.b;
	        this.c = b.c;
	        this.d = b.d;
	        this.tx = b.tx;
	        this.ty = b.ty;
	
	        return this;
	    };
	
	    /**
	     * Sets the matrix to the identity matrix.
	     *
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.identity = function identity() {
	        this.a = 1;
	        this.b = 0;
	        this.c = 0;
	        this.d = 1;
	        this.tx = 0;
	        this.ty = 0;
	
	        return this;
	    };
	
	    /**
	     * Sets the matrix components to the given values.
	     *
	     * @param {number} a - Component A (index 0).
	     * @param {number} b - Component B (index 1).
	     * @param {number} c - Component C (index 2).
	     * @param {number} d - Component D (index 3).
	     * @param {number} tx - Component TX (index 4).
	     * @param {number} ty - Component TY (index 5).
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.set = function set(a, b, c, d, tx, ty) {
	        this.a = a;
	        this.b = b;
	        this.c = c;
	        this.d = d;
	        this.tx = tx;
	        this.ty = ty;
	
	        return this;
	    };
	
	    /**
	     * Inverts the matrix.
	     *
	     * @param {Matrix2d} a - the source matrix.
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.invert = function invert() {
	        var aa = this.a;
	        var ab = this.b;
	        var ac = this.c;
	        var ad = this.d;
	        var atx = this.tx;
	        var aty = this.ty;
	
	        var det = aa * ad - ab * ac;
	
	        if (!det) return null;
	
	        det = 1.0 / det;
	
	        this.a = ad * det;
	        this.b = -ab * det;
	        this.c = -ac * det;
	        this.d = aa * det;
	        this.tx = (ac * aty - ad * atx) * det;
	        this.ty = (ab * atx - aa * aty) * det;
	
	        return this;
	    };
	
	    /**
	     * Calculates the determinant of this matrix.
	     *
	     * @return {number} determinant of this matrix.
	     */
	
	
	    Matrix2d.prototype.determinant = function determinant() {
	        return this.a * this.d - this.b * this.c;
	    };
	
	    /**
	     * Multiplies this matrix by another Matrix2d.
	     *
	     * @param {Matrix2d} o - The other matrix to multiply this matrix by.
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.multiply = function multiply(o) {
	        var a = this.a;
	        var b = this.b;
	        var c = this.c;
	        var d = this.d;
	
	        this.a = a * o.a + c * o.b;
	        this.b = b * o.a + d * o.b;
	        this.c = a * o.c + c * o.d;
	        this.d = b * o.c + d * o.d;
	        this.tx = a * o.tx + c * o.ty + this.tx;
	        this.ty = b * o.tx + d * o.ty + this.ty;
	
	        return this;
	    };
	
	    /**
	     * Rotates a this matrix by the given angle.
	     *
	     * @param {number} rad - the angle to rotate the matrix by.
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.rotate = function rotate(rad) {
	        var a0 = this.a;
	        var a1 = this.b;
	        var a2 = this.c;
	        var a3 = this.d;
	        var s = Math.sin(rad);
	        var c = Math.cos(rad);
	
	        this.a = a0 * c + a2 * s;
	        this.b = a1 * c + a3 * s;
	        this.c = a0 * -s + a2 * c;
	        this.d = a1 * -s + a3 * c;
	
	        return this;
	    };
	
	    /**
	     * Scales the matrix by the dimensions in the given coords.
	     *
	     * @param {number} x - The X amount to scale by.
	     * @param {number} y - The Y amount to scale by.
	     * @return {Matrix2d} returns itself.
	     **/
	
	
	    Matrix2d.prototype.scale = function scale(x, y) {
	        this.a *= x;
	        this.b *= x;
	        this.c *= y;
	        this.d *= y;
	
	        return this;
	    };
	
	    /**
	     * Translates the matrix by the dimensions in the given coords.
	     *
	     * @param {number} x - The X amount to translate by.
	     * @param {number} y - The Y amount to translate by.
	     * @return {Matrix2d} returns itself.
	     **/
	
	
	    Matrix2d.prototype.translate = function translate(x, y) {
	        this.tx = this.a * x + this.c * y + this.tx;
	        this.ty = this.b * x + this.d * y + this.ty;
	
	        return this;
	    };
	
	    /**
	     * Returns a string representation of the matrix.
	     *
	     * @return {string} string representation of the matrix.
	     */
	
	
	    Matrix2d.prototype.toString = function toString() {
	        return "Matrix2d(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	    };
	
	    /**
	     * Returns Frobenius norm of the matrix.
	     *
	     * @return {number} Frobenius norm.
	     */
	
	
	    Matrix2d.prototype.frob = function frob() {
	        return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2) + Math.pow(this.c, 2) + Math.pow(this.d, 2) + Math.pow(this.tx, 2) + Math.pow(this.ty, 2) + 1);
	    };
	
	    /**
	     * Adds the pass matrix to this one.
	     *
	     * @param {Matrix2d} b - the operand to add to this matrix.
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.add = function add(b) {
	        this.a += b.a;
	        this.b += b.b;
	        this.c += b.c;
	        this.d += b.d;
	        this.tx += b.tx;
	        this.ty += b.ty;
	
	        return this;
	    };
	
	    /**
	     * Subtracts the passed matrix from this one.
	     *
	     * @param {Matrix2d} b - the operand to subtract from this matrix.
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.subtract = function subtract(b) {
	        this.a -= b.a;
	        this.b -= b.b;
	        this.c -= b.c;
	        this.d -= b.d;
	        this.tx -= b.tx;
	        this.ty -= b.ty;
	
	        return this;
	    };
	
	    /**
	     * Multiply each element of the matrix by a scalar.
	     *
	     * @param {number} b - amount to scale the matrix's elements by.
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.multiplyScalar = function multiplyScalar(b) {
	        this.a *= b;
	        this.b *= b;
	        this.c *= b;
	        this.d *= b;
	        this.tx *= b;
	        this.ty *= b;
	
	        return this;
	    };
	
	    /**
	     * Scales each component of the passed matrix by the given scalar, then adds the result
	     * to each respective component of this matrix.
	     *
	     * @param {Matrix2d} b - the matrix to scale before adding into this matrix.
	     * @param {number} scale - the amount to scale b's elements by before adding.
	     * @return {Matrix2d} returns itself.
	     */
	
	
	    Matrix2d.prototype.multiplyScalarAndAdd = function multiplyScalarAndAdd(b, scale) {
	        this.a += b.a * scale;
	        this.b += b.b * scale;
	        this.c += b.c * scale;
	        this.d += b.d * scale;
	        this.tx += b.tx * scale;
	        this.ty += b.ty * scale;
	
	        return this;
	    };
	
	    /**
	     * Returns whether or not the passed matrix has exactly the same elements in the
	     * same position (when compared with ===) as this one.
	     *
	     * @param {Matrix2d} b - The matrix to check equality against.
	     * @return {boolean} True if the matrices are equal, false otherwise.
	     */
	
	
	    Matrix2d.prototype.exactEquals = function exactEquals(b) {
	        return this.a === b.a && this.b === b.b && this.c === b.c && this.d === b.d && this.tx === b.tx && this.ty === b.ty;
	    };
	
	    /**
	     * Returns whether or not the passed matrix has approximately the same elements in the
	     * same position as this one.
	     *
	     * @param {Matrix2d} b - The matrix to check equality against.
	     * @return {boolean} True if the matrices are equal, false otherwise.
	     */
	
	
	    Matrix2d.prototype.equals = function equals(b) {
	        if (!b) return false;
	
	        var a0 = this.a;
	        var a1 = this.b;
	        var a2 = this.c;
	        var a3 = this.d;
	        var a4 = this.tx;
	        var a5 = this.ty;
	        var b0 = b.a;
	        var b1 = b.b;
	        var b2 = b.c;
	        var b3 = b.d;
	        var b4 = b.tx;
	        var b5 = b.ty;
	
	        return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
	    };
	
	    /**
	     * Checks if the matrix has NaN or Infinity anywhere.
	     *
	     * @return {boolean} True if the matrix is valid, false otherwise.
	     */
	
	
	    Matrix2d.prototype.valid = function valid() {
	        return !isNaN(this.a) && this.a !== Infinity && !isNaN(this.b) && this.b !== Infinity && !isNaN(this.c) && this.c !== Infinity && !isNaN(this.d) && this.d !== Infinity && !isNaN(this.tx) && this.tx !== Infinity && !isNaN(this.ty) && this.ty !== Infinity;
	    };
	
	    return Matrix2d;
	}();
	
	/**
	 * Returns the number of elements this matrix has.
	 *
	 * @static
	 * @return {number} number of elements in a Matrix2d.
	 */
	
	
	exports.default = Matrix2d;
	Matrix2d.LENGTH = 6;
	
	/**
	 * Size in bytes of a Matrix2d.
	 *
	 * @static
	 * @return {number} byte size of a Matrix2d.
	 */
	Matrix2d.BYTE_SIZE = Matrix2d.LENGTH * Matrix2d.BYTES_PER_ELEMENT;

/***/ },
/* 17 */
/*!*************************************!*\
  !*** ./plugins/shapes/src/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _BoundingBox = __webpack_require__(/*! ./BoundingBox */ 18);
	
	Object.defineProperty(exports, 'BoundingBox', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BoundingBox).default;
	  }
	});
	
	var _BoundsComponent = __webpack_require__(/*! ./BoundsComponent */ 20);
	
	Object.defineProperty(exports, 'BoundsComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BoundsComponent).default;
	  }
	});
	
	var _Polygon = __webpack_require__(/*! ./Polygon */ 21);
	
	Object.defineProperty(exports, 'Polygon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Polygon).default;
	  }
	});
	
	var _Rectangle = __webpack_require__(/*! ./Rectangle */ 19);
	
	Object.defineProperty(exports, 'Rectangle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Rectangle).default;
	  }
	});
	
	var _SpriteBoundsComponent = __webpack_require__(/*! ./SpriteBoundsComponent */ 22);
	
	Object.defineProperty(exports, 'SpriteBoundsComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SpriteBoundsComponent).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 18 */
/*!*******************************************!*\
  !*** ./plugins/shapes/src/BoundingBox.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Rectangle2 = __webpack_require__(/*! ./Rectangle */ 19);
	
	var _Rectangle3 = _interopRequireDefault(_Rectangle2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * BoundingBox is an axis-aligned bounding box for an owning object.
	 *
	 * @class
	 * @memberof shapes
	 */
	var BoundingBox = function (_Rectangle) {
	        _inherits(BoundingBox, _Rectangle);
	
	        /**
	         *
	         */
	        function BoundingBox() {
	                _classCallCheck(this, BoundingBox);
	
	                /**
	                 * Tracks the "empty" bounds state so we always have a valid rectangle.
	                 *
	                 * @member {boolean}
	                 */
	                var _this = _possibleConstructorReturn(this, _Rectangle.call(this));
	
	                _this._empty = true;
	                return _this;
	        }
	
	        /**
	         * Resets the bounding box to a default empty box.
	         *
	         */
	
	
	        BoundingBox.prototype.clear = function clear() {
	                this.x = this.y = this.width = this.height = 0;
	                this._empty = true;
	        };
	
	        /**
	         * Adds the child bounds object to the size of this bounding box.
	         *
	         * @param {BoundingBox} bounds - The child bounds to include.
	         * @return {BoundingBox} Returns itself.
	         */
	
	
	        BoundingBox.prototype.addChild = function addChild(bounds) {
	                if (bounds._empty) return this;
	
	                if (this._empty) {
	                        this.copy(bounds);
	                        this._empty = false;
	                } else {
	                        this.union(bounds);
	                }
	
	                return this;
	        };
	
	        /**
	         * Adds the vertices of a quad to the size of this bounding box. This
	         * has the effect of extending the bounding box to include this quad.
	         *
	         * @param {Float32Array|number[]} vertices - The vertices of the quad.
	         * @return {BoundingBox} Returns itself.
	         */
	
	
	        BoundingBox.prototype.addQuad = function addQuad(vertices) {
	                var minX = this._empty ? Infinity : this.x;
	                var minY = this._empty ? Infinity : this.y;
	                var maxX = this._empty ? -Infinity : this.right;
	                var maxY = this._empty ? -Infinity : this.bottom;
	
	                var x = 0;
	                var y = 0;
	
	                x = vertices[0];
	                y = vertices[1];
	                minX = x < minX ? x : minX;
	                minY = y < minY ? y : minY;
	                maxX = x > maxX ? x : maxX;
	                maxY = y > maxY ? y : maxY;
	
	                x = vertices[2];
	                y = vertices[3];
	                minX = x < minX ? x : minX;
	                minY = y < minY ? y : minY;
	                maxX = x > maxX ? x : maxX;
	                maxY = y > maxY ? y : maxY;
	
	                x = vertices[4];
	                y = vertices[5];
	                minX = x < minX ? x : minX;
	                minY = y < minY ? y : minY;
	                maxX = x > maxX ? x : maxX;
	                maxY = y > maxY ? y : maxY;
	
	                x = vertices[6];
	                y = vertices[7];
	                minX = x < minX ? x : minX;
	                minY = y < minY ? y : minY;
	                maxX = x > maxX ? x : maxX;
	                maxY = y > maxY ? y : maxY;
	
	                this.x = minX;
	                this.y = minY;
	                this.width = maxX - this.x;
	                this.height = maxY - this.y;
	
	                this._empty = false;
	
	                return this;
	        };
	
	        /**
	         * Adds an arbitrary array of vertices to the size of the bounding box.
	         *
	         * @param {Transform} transform - The transform to consider.
	         * @param {Float32Array|number[]} vertices - The vertices to consider.
	         * @param {number} offset - offset into the vertices array to start at.
	         * @param {number} endOffset - The end of the vertices at which to stop.
	         * @return {BoundingBox} Returns itself.
	         */
	
	
	        BoundingBox.prototype.addVertices = function addVertices(transform, vertices) {
	                var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	                var endOffset = arguments.length <= 3 || arguments[3] === undefined ? vertices.length : arguments[3];
	
	                var matrix = transform.worldTransform;
	
	                var a = matrix.a;
	                var b = matrix.b;
	                var c = matrix.c;
	                var d = matrix.d;
	                var tx = matrix.tx;
	                var ty = matrix.ty;
	
	                var minX = this._empty ? Infinity : this.x;
	                var minY = this._empty ? Infinity : this.y;
	                var maxX = this._empty ? -Infinity : this.right;
	                var maxY = this._empty ? -Infinity : this.bottom;
	
	                for (var i = offset; i < endOffset; i += 2) {
	                        var rawX = vertices[i];
	                        var rawY = vertices[i + 1];
	
	                        var x = a * rawX + c * rawY + tx;
	                        var y = d * rawY + b * rawX + ty;
	
	                        minX = Math.min(x, minX);
	                        minY = Math.min(y, minY);
	                        maxX = Math.max(x, maxX);
	                        maxY = Math.max(y, maxY);
	                }
	
	                this.x = minX;
	                this.y = minY;
	                this.wight = maxX - this.x;
	                this.height = maxY - this.y;
	
	                this._empty = false;
	
	                return this;
	        };
	
	        return BoundingBox;
	}(_Rectangle3.default);
	
	exports.default = BoundingBox;

/***/ },
/* 19 */
/*!*****************************************!*\
  !*** ./plugins/shapes/src/Rectangle.js ***!
  \*****************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A simple class representing a rectangle. A Rectangle is defined by its position,
	 * as indicated by its top-left corner point (x, y) and by its width and its height.
	 *
	 * @class
	 * @memberof shapes
	 */
	var Rectangle = function () {
	
	    /**
	     * @param {number} x - The X coordinate of the upper-left corner of the rectangle
	     * @param {number} y - The Y coordinate of the upper-left corner of the rectangle
	     * @param {number} width - The overall width of this rectangle
	     * @param {number} height - The overall height of this rectangle
	     */
	    function Rectangle() {
	        var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var width = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var height = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	
	        _classCallCheck(this, Rectangle);
	
	        /**
	         * The X position of the top-left of the rectangle.
	         *
	         * @member {number}
	         */
	        this.x = x;
	
	        /**
	         * The Y position of the top-left of the rectangle.
	         *
	         * @member {number}
	         */
	        this.y = y;
	
	        /**
	         * The width of the rectangle.
	         *
	         * @member {number}
	         */
	        this.width = width;
	
	        /**
	         * The height of the rectangle.
	         *
	         * @member {number}
	         */
	        this.height = height;
	    }
	
	    /**
	     * The left-most X coord of this rectangle.
	     *
	     * @member {number}
	     */
	
	
	    /**
	     * Is this rectangle empty?
	     *
	     * @return {boolean} True if empty.
	     */
	    Rectangle.prototype.isEmpty = function isEmpty() {
	        return this.width === 0 && this.height === 0;
	    };
	
	    /**
	     * Creates a clone of this Rectangle
	     *
	     * @return {Rectangle} a copy of the rectangle.
	     */
	
	
	    Rectangle.prototype.clone = function clone() {
	        return new Rectangle(this.x, this.y, this.width, this.height);
	    };
	
	    /**
	     * Copies the passed rectangle into this one.
	     *
	     * @param {Rectangle} rectangle - The rectangle to copy from.
	     * @return {Rectangle} returns itself.
	     */
	
	
	    Rectangle.prototype.copy = function copy(rectangle) {
	        this.x = rectangle.x;
	        this.y = rectangle.y;
	        this.width = rectangle.width;
	        this.height = rectangle.height;
	
	        return this;
	    };
	
	    /**
	     * Checks whether the x and y coordinates given are contained within this Rectangle
	     *
	     * @param {number} x - The X coordinate of the point to test.
	     * @param {number} y - The Y coordinate of the point to test.
	     * @return {boolean} Whether the x/y coordinates are within this Rectangle.
	     */
	
	
	    Rectangle.prototype.contains = function contains(x, y) {
	        if (this.width <= 0 || this.height <= 0) {
	            return false;
	        }
	
	        if (x >= this.x && x < this.x + this.width) {
	            if (y >= this.y && y < this.y + this.height) {
	                return true;
	            }
	        }
	
	        return false;
	    };
	
	    /**
	     * Grows the rectangle to contain the passed rectangle. Expanding size
	     * and reducing position as necessary.
	     *
	     * For example, given these rectangles:
	     *
	     * ```
	     * -----------------
	     * | 1 ----------  |
	     * |   | 2      |  |
	     * ----|--------|--
	     *     ----------
	     * ```
	     *
	     * If we call `rect1.union(rect2)` we get this rectangle:
	     *
	     * ```
	     * -----------------
	     * | 1             |
	     * |               |
	     * |               |
	     * ----------------
	     * ```
	     *
	     * This happens even if they do not intersect.
	     *
	     * @param {Rectangle} rect -The rectangle to union with.
	     * @return {Rectangle} Returns itself.
	     */
	
	
	    Rectangle.prototype.union = function union(rect) {
	        var x = this.x;
	        var y = this.y;
	
	        this.x = Math.min(rect.x, this.x);
	        this.y = Math.min(rect.y, this.y);
	
	        this.width = Math.max(rect.x + rect.width, x + this.width) - this.x;
	        this.height = Math.max(rect.y + rect.height, y + this.height) - this.y;
	
	        return this;
	    };
	
	    /**
	     * Sets this rectangle to the intersection of this rectangle and the passed one.
	     *
	     * For example, given these rectangles:
	     *
	     * ```
	     * -----------------
	     * | 1 ----------  |
	     * |   | 2      |  |
	     * ----|--------|--
	     *     ----------
	     * ```
	     *
	     * If we call `rect1.intersection(rect2)` we get this rectangle:
	     *
	     * ```
	     *
	     *     ----------
	     *     | 1      |
	     *     ---------
	     *
	     * ```
	     *
	     * This happens even if they do not intersect.
	     *
	     * @param {Rectangle} rect -The rectangle to union with.
	     * @return {Rectangle} Returns itself.
	     */
	
	
	    Rectangle.prototype.intersection = function intersection(rect) {
	        var x = this.x;
	        var y = this.y;
	
	        this.x = Math.max(rect.x, this.x);
	        this.y = Math.max(rect.y, this.y);
	
	        this.width = Math.min(rect.x + rect.width, x + this.widthR) - this.x;
	        this.height = Math.min(rect.y + rect.height, y + this.height) - this.y;
	
	        return this;
	    };
	
	    /**
	     * Grows the rectangle on all sides. The center stays constant.
	     *
	     * For example, this rectangle:
	     *
	     * ```
	     *     ----------
	     *     |        |
	     *     |        |
	     *     ----------
	     * ```
	     *
	     * After a call to `inflate(5, 5)` becomes something like:
	     *
	     * ```
	     *    ---------------
	     *    |             |
	     *    |             |
	     *    |             |
	     *    ---------------
	     * ```
	     *
	     * Notice that the position (top-left) doesn't stay in the same
	     * place, it moved back slightly.
	     *
	     * @param {number} dx - The amount to "grow" in the X direction.
	     * @param {number} dy - The amount to "grow" in the Y direction.
	     * @return {Rectangle} returns itself.
	     */
	
	
	    Rectangle.prototype.inflate = function inflate() {
	        var dx = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var dy = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	
	        this.x -= dx;
	        this.y -= dy;
	        this.width += dx * 2;
	        this.height += dy * 2;
	
	        return this;
	    };
	
	    /**
	     * Manipulates this rectangle so that becomes the same size as the passed rectangle.
	     * The big difference between this method and just copying the values of the other
	     * rectangle is that this ensures that the width/height never goes below 0.
	     *
	     * @param {Rectangle} rectangle - The rectangle to grow to encompass.
	     * @return {Rectangle} returns itself.
	     */
	
	
	    Rectangle.prototype.fit = function fit(rectangle) {
	        if (this.x < rectangle.x) {
	            this.width += this.x;
	
	            if (this.width < 0) this.width = 0;
	
	            this.x = rectangle.x;
	        }
	
	        if (this.y < rectangle.y) {
	            this.height += this.y;
	
	            if (this.height < 0) this.height = 0;
	
	            this.y = rectangle.y;
	        }
	
	        if (this.x + this.width > rectangle.x + rectangle.width) {
	            this.width = rectangle.width - this.x;
	
	            if (this.width < 0) this.width = 0;
	        }
	
	        if (this.y + this.height > rectangle.y + rectangle.height) {
	            this.height = rectangle.height - this.y;
	
	            if (this.height < 0) this.height = 0;
	        }
	
	        return this;
	    };
	
	    /**
	     * Checks if the passed rectangle is equal to this one (has the same points).
	     *
	     * @param {Rectangle} rectangle - The rectangle to check for equality.
	     * @return {boolean} Whether rectangle are equal.
	     */
	
	
	    Rectangle.prototype.equals = function equals(rectangle) {
	        return !!rectangle && rectangle.x === this.x && rectangle.y === this.y && rectangle.width === this.width && rectangle.height === this.height;
	    };
	
	    _createClass(Rectangle, [{
	        key: "left",
	        get: function get() {
	            return this.x;
	        }
	
	        /**
	         * Sets the left-most X coord of this rectangle. This is the same
	         * as setting the X coord and will move the rectangle.
	         *
	         * @param {number} v - The position for the left of this rectangle.
	         */
	        ,
	        set: function set(v) {
	            this.x = v;
	        }
	
	        /**
	         * The right-most X coord of this rectangle.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: "right",
	        get: function get() {
	            return this.x + this.width;
	        }
	
	        /**
	         * Sets the right-most X coord of this rectangle. This has the effect
	         * of modifying the width.
	         *
	         * @param {number} v - The position for the right of this rectangle.
	         */
	        ,
	        set: function set(v) {
	            this.width = v - this.x;
	        }
	
	        /**
	         * The top-most Y coord of this rectangle.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: "top",
	        get: function get() {
	            return this.y;
	        }
	
	        /**
	         * Sets the top-most Y coord of this rectangle. This is the same
	         * as setting the Y coord and will move the rectangle.
	         *
	         * @param {number} v - The position for the top of this rectangle.
	         */
	        ,
	        set: function set(v) {
	            this.y = v;
	        }
	
	        /**
	         * The bottom-most Y coord of this rectangle.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: "bottom",
	        get: function get() {
	            return this.y + this.height;
	        }
	
	        /**
	         * Sets the bottom-most Y coord of this rectangle. This has the effect
	         * of modifying the height.
	         *
	         * @param {number} v - The position for the bottom of this rectangle.
	         */
	        ,
	        set: function set(v) {
	            this.height = v - this.y;
	        }
	    }]);
	
	    return Rectangle;
	}();
	
	/**
	 * A constant empty rectangle.
	 *
	 * @static
	 * @constant
	 */
	
	
	exports.default = Rectangle;
	Rectangle.EMPTY = new Rectangle();

/***/ },
/* 20 */
/*!***********************************************!*\
  !*** ./plugins/shapes/src/BoundsComponent.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = BoundsComponent;
	
	var _BoundingBox = __webpack_require__(/*! ./BoundingBox */ 18);
	
	var _BoundingBox2 = _interopRequireDefault(_BoundingBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function BoundsComponent(Base) {
	  /**
	   * @class BoundsComponent
	   * @memberof shapes
	   */
	  return function (_Base) {
	    _inherits(_class, _Base);
	
	    /**
	     *
	     */
	    function _class() {
	      _classCallCheck(this, _class);
	
	      // eslint-disable-line prefer-rest-params
	
	      /**
	       * The bounding box of this scene object.
	       *
	       * @private
	       * @member {BoundingBox}
	       */
	      var _this = _possibleConstructorReturn(this, _Base.apply(this, arguments));
	
	      _this._bounds = new _BoundingBox2.default();
	      return _this;
	    }
	
	    /**
	     * Returns the bounding box of this scene object.
	     *
	     * @return {BoundingBox} The object's bounding box.
	     */
	
	
	    _class.prototype.getBounds = function getBounds() {
	      this._updateBounds();
	
	      return this._bounds;
	    };
	
	    /**
	     * Updates the bounds of this object.
	     *
	     * @protected
	     */
	
	
	    _class.prototype._updateBounds = function _updateBounds() {
	      this._bounds.clear();
	    };
	
	    return _class;
	  }(Base);
	}

/***/ },
/* 21 */
/*!***************************************!*\
  !*** ./plugins/shapes/src/Polygon.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A simple class representing a polygon.
	 *
	 * @class
	 * @memberof shapes
	 */
	var Polygon = function () {
	    /**
	     * Constructs a polygon.
	     *
	     * @param {Vector2d[]|number[]} points - This can be an array of `Vector2d`s that
	     *  form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or the arguments
	     *  passed can be all the points of the polygon e.g. `new Polygon(new Vector2d(), new Vector2d(), ...)`,
	     *  or the arguments passed can be flat x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x`
	     *  and `y` are Numbers.
	     */
	    function Polygon() {
	        for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
	            points[_key] = arguments[_key];
	        }
	
	        _classCallCheck(this, Polygon);
	
	        // if the first param is an array, ignore the rest.
	        if (Array.isArray(points[0])) points = points[0];
	
	        // if this is an array of Vector2d, convert it to a flat array of numbers
	        if (points[0] instanceof _core.math.Vector2d) {
	            var p = [];
	
	            for (var i = 0; i < points.length; ++i) {
	                p.push(points[i].x, points[i].y);
	            }
	
	            points = p;
	        }
	
	        /**
	         * Whether or not this polygon is a "closed" polygon.
	         *
	         * @member {boolean}
	         */
	        this.closed = true;
	
	        /**
	         * An array of the points of this polygon
	         *
	         * @member {number[]}
	         */
	        this.points = points;
	    }
	
	    /**
	     * Creates a clone of this polygon
	     *
	     * @return {Polygon} a copy of the polygon
	     */
	
	
	    Polygon.prototype.clone = function clone() {
	        return new Polygon(this.points.slice());
	    };
	
	    /**
	     * Closes the polygon, adding points if necessary.
	     */
	
	
	    Polygon.prototype.close = function close() {
	        var points = this.points;
	
	        // close the poly if the value is true!
	        if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
	            points.push(points[0], points[1]);
	        }
	    };
	
	    /**
	     * Checks whether the x and y coordinates passed to this function are contained within this polygon
	     *
	     * @param {number} x - The X coordinate of the point to test
	     * @param {number} y - The Y coordinate of the point to test
	     * @return {boolean} Whether the x/y coordinates are within this polygon
	     */
	
	
	    Polygon.prototype.contains = function contains(x, y) {
	        var inside = false;
	
	        // use some raycasting to test hits
	        // https://github.com/substack/point-in-polygon/blob/master/index.js
	        var length = this.points.length / 2;
	
	        for (var i = 0, j = length - 1; i < length; j = i++) {
	            var xi = this.points[i * 2];
	            var yi = this.points[i * 2 + 1];
	            var xj = this.points[j * 2];
	            var yj = this.points[j * 2 + 1];
	
	            var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
	
	            if (intersect) {
	                inside = !inside;
	            }
	        }
	
	        return inside;
	    };
	
	    /**
	     * Checks if the passed polygon is equal to this one (has the same points).
	     *
	     * @param {Polygon} polygon - The polygon to check for equality.
	     * @return {boolean} Whether polygons are equal.
	     */
	
	
	    Polygon.prototype.equals = function equals(polygon) {
	        if (!polygon || this.points.length !== polygon.points.length) {
	            return false;
	        }
	
	        for (var i = 0; i < this.points.length; ++i) {
	            if (this.points[i] !== polygon.points[i]) {
	                return false;
	            }
	        }
	
	        return true;
	    };
	
	    return Polygon;
	}();
	
	exports.default = Polygon;

/***/ },
/* 22 */
/*!*****************************************************!*\
  !*** ./plugins/shapes/src/SpriteBoundsComponent.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = SpriteBoundsComponent;
	
	var _BoundsComponent2 = __webpack_require__(/*! ./BoundsComponent */ 20);
	
	var _BoundsComponent3 = _interopRequireDefault(_BoundsComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function SpriteBoundsComponent(Base) {
	    /**
	     * Component that adds sprite bounds calculations for sprite assemblages that also
	     * want to include the BoundsComponent.
	     *
	     * @class SpriteBoundsComponent
	     * @memberof sprites
	     */
	    return function (_BoundsComponent) {
	        _inherits(_class, _BoundsComponent);
	
	        function _class() {
	            _classCallCheck(this, _class);
	
	            return _possibleConstructorReturn(this, _BoundsComponent.apply(this, arguments));
	        }
	
	        /**
	         * Updates the bounds of this sprite.
	         *
	         * @private
	         */
	        _class.prototype._updateBounds = function _updateBounds() {
	            this._bounds.clear();
	
	            if (!this.visible || !this._texture || !this._texture.ready) return;
	
	            var trim = this._texture.trim;
	            var orig = this._texture.orig;
	
	            if (!trim || trim.width === orig.width && trim.height === orig.height) {
	                this._bounds.addQuad(this.vertexData);
	            } else {
	                var wt = this.transform.worldTransform;
	                var a = wt.a;
	                var b = wt.b;
	                var c = wt.c;
	                var d = wt.d;
	                var tx = wt.tx;
	                var ty = wt.ty;
	
	                var w0 = orig.width * (1 - this._anchorX);
	                var w1 = orig.width * -this._anchorX;
	
	                var h0 = orig.height * (1 - this._anchorY);
	                var h1 = orig.height * -this._anchorY;
	
	                this._bounds.addQuad([a * w1 + c * h1 + tx, d * h1 + b * w1 + ty, a * w0 + c * h1 + tx, d * h1 + b * w0 + ty, a * w0 + c * h0 + tx, d * h0 + b * w0 + ty, a * w1 + c * h0 + tx, d * h0 + b * w1 + ty]);
	            }
	        };
	
	        return _class;
	    }((0, _BoundsComponent3.default)(Base));
	}

/***/ },
/* 23 */
/*!****************************************!*\
  !*** ./plugins/core/src/util/Color.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _debug = __webpack_require__(/*! ../debug */ 14);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var rgxRgbString = /^rgba?\(([\d\.]+), ?([\d\.]+), ?([\d\.]+)(?:, ?([\d\.]+))\);?$/i;
	var rgxHexShortString = /^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i;
	var rgxHexFullString = /^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
	
	/**
	 * Color container. Helps with constructing, converting, manipulating, and just
	 * overall dealing with colors. Each component (r/g/b/a) are numbers in the range
	 * [0...255].
	 *
	 * @class
	 * @memberof util
	 */
	
	var Color = function () {
	    /**
	     * Creates a new color.
	     *
	     * @param {number} r - The red component.
	     * @param {number} g - The green component.
	     * @param {number} b - The blue component.
	     * @param {boolean} normalized - Whether the values are normalized or not.
	     */
	    function Color() {
	        var r = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var g = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var b = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var normalized = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	        _classCallCheck(this, Color);
	
	        this.normalized = normalized;
	
	        this._red = r;
	        this._green = g;
	        this._blue = b;
	    }
	
	    /**
	     * Creates a color from a value in the form 0xRRGGBB.
	     *
	     * @param {number} num - The color value as a number.
	     * @return {Color} The new color.
	     */
	
	
	    Color.fromRgb = function fromRgb(num) {
	        var c = new Color();
	
	        c.rgb = num;
	
	        return c;
	    };
	
	    /**
	     * Creates a color from an array of RGB values.
	     *
	     * @param {number[]} components - The color components.
	     * @param {boolean} normalized - Whether the values are normalized or not.
	     * @return {Color} The new color.
	     */
	
	
	    Color.fromArray = function fromArray(components) {
	        var normalized = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        (0, _debug.ASSERT)(components.length > 2, 'Component array passed to Color.fromArray() is too short.');
	        var out = new Color(0, 0, 0, normalized);
	
	        out.red = components[0];
	        out.green = components[1];
	        out.blue = components[2];
	
	        return out;
	    };
	
	    /**
	     * Creates a color from a string.
	     *
	     * @param {string} str - The string representation of this color. e.g. "#AABBCC" or "rgb(255, 255, 255)"
	     * @return {Color} The new color.
	     */
	
	
	    Color.fromString = function fromString(str) {
	        var out = new Color();
	
	        if (!str) return out;
	
	        var firstChars = str.substring(0, 3);
	
	        // assume "rgb()" or "rgba()" form
	        if (firstChars === 'rgb') {
	            var values = rgxRgbString.exec(str);
	
	            if (values) {
	                out.red = parseFloat(values[1], 10);
	                out.green = parseFloat(values[2], 10);
	                out.blue = parseFloat(values[3], 10);
	            }
	        }
	        // assume hex form.
	        else {
	                // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	                str = str.replace(rgxHexShortString, function (m, r, g, b) {
	                    return r + r + g + g + b + b;
	                });
	
	                var _values = rgxHexFullString.exec(str);
	
	                if (_values) {
	                    out.red = parseInt(_values[1], 16);
	                    out.green = parseInt(_values[2], 16);
	                    out.blue = parseInt(_values[3], 16);
	                }
	            }
	
	        return out;
	    };
	
	    /**
	     * Creates a random color.
	     *
	     * @return {Color} The new color.
	     */
	
	
	    Color.randomColor = function randomColor() {
	        var out = new Color();
	
	        out.randomize();
	
	        return out;
	    };
	
	    /**
	     * The maximum value of a component.
	     */
	
	
	    /**
	     * Mixes this color with the passed one.
	     *
	     * @param {Color} color - The color to mix with.
	     * @return {Color} returns itself.
	     */
	    Color.prototype.mix = function mix(color) {
	        this.red = (this.red + color.red) / 2;
	        this.green = (this.green + color.green) / 2;
	        this.blue = (this.blue + color.blue) / 2;
	
	        return this;
	    };
	
	    /**
	     * Randomizes the color components to create a random color.
	     *
	     * @param {number} alpha - An override for the alpha value, if set the color will use
	     * this instead of a random value.
	     * @return {Color} returns itself.
	     */
	
	
	    Color.prototype.randomize = function randomize() {
	        this.red = Math.floor(Math.random() * (this.max + 1));
	        this.green = Math.floor(Math.random() * (this.max + 1));
	        this.blue = Math.floor(Math.random() * (this.max + 1));
	
	        return this;
	    };
	
	    /**
	     * Normalizes the color components.
	     *
	     * @return {Color} returns itself.
	     */
	
	
	    Color.prototype.normalize = function normalize() {
	        if (!this.normalized) {
	            this.red /= this.max;
	            this.green /= this.max;
	            this.blue /= this.max;
	
	            this.normalized = true;
	        }
	
	        return this;
	    };
	
	    /**
	     * Denormalizes the color components.
	     *
	     * @return {Color} returns itself.
	     */
	
	
	    Color.prototype.denormalize = function denormalize() {
	        if (this.normalized) {
	            this.normalized = false;
	
	            this.red *= this.max;
	            this.green *= this.max;
	            this.blue *= this.max;
	        }
	
	        return this;
	    };
	
	    /**
	     * Creates a new color with the same values.
	     *
	     * @return {Color} The cloned color.
	     */
	
	
	    Color.prototype.clone = function clone() {
	        return new Color(this.red, this.green, this.blue, this.normalized);
	    };
	
	    /**
	     * Copies another color's values into this one.
	     *
	     * @param {Color} color - The color to copy.
	     * @return {Color} returns itself.
	     */
	
	
	    Color.prototype.copy = function copy(color) {
	        this.red = color.red;
	        this.green = color.green;
	        this.blue = color.blue;
	        this.normalized = color.normalized;
	
	        return this;
	    };
	
	    /**
	     * Checks for equality with another color.
	     *
	     * @param {Color} color - The color to check equality against.
	     * @param {boolean} ignoreAlpha -
	     * @return {boolean} True if they are equal.
	     */
	
	
	    Color.prototype.equals = function equals(color) {
	        if (!color) return false;
	
	        if (this.normalized !== color.normalized) {
	            Color._tempColor.copy(color);
	            color = Color._tempColor;
	
	            if (this.normalized) {
	                color.normalize();
	            } else {
	                color.denormalize();
	            }
	        }
	
	        return this.red === color.red && this.green === color.green && this.blue === color.blue;
	    };
	
	    _createClass(Color, [{
	        key: 'max',
	        get: function get() {
	            return this.normalized ? 1 : 255;
	        }
	
	        /**
	         * Value of the color as a number in 0xBBGGRR format.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'bgr',
	        get: function get() {
	            return this._red + (this._green << 8) + (this._blue << 16);
	        }
	
	        /**
	         * Value of the color as a number in 0xRRGGBB format.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'rgb',
	        get: function get() {
	            return this.blue + (this.green << 8) + (this.red << 16);
	        }
	
	        /**
	         * Set the value of the color from a number.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            (0, _debug.ASSERT)(v >= 0 && v <= 0xffffff, 'Value out of range for color: 0x' + v.toString(16) + ' (min: 0, max: 0xffffff).');
	
	            var factor = this.normalized ? 255 : 1;
	
	            this._red = (v >> 16) / factor;
	            this._green = ((v & 0x00ff00) >> 8) / factor;
	            this._blue = (v & 0x0000ff) / factor;
	        }
	
	        /**
	         * Value of the red component of this color.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'red',
	        get: function get() {
	            return this._red;
	        }
	
	        /**
	         * Set the value of the red component of this color.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            (0, _debug.ASSERT)(v >= 0 && v <= this.max, 'Value out of range for RED component: ' + v + ' (min: 0, max: ' + this.max + ').');
	            this._red = v;
	        }
	
	        /**
	         * Value of the green component of this color.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'green',
	        get: function get() {
	            return this._green;
	        }
	
	        /**
	         * Set the value of the green component of this color.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            (0, _debug.ASSERT)(v >= 0 && v <= this.max, 'Value out of range for GREEN component: ' + v + ' (min: 0, max: ' + this.max + ').');
	            this._green = v;
	        }
	
	        /**
	         * Value of the blue component of this color.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'blue',
	        get: function get() {
	            return this._blue;
	        }
	
	        /**
	         * Set the value of the blue component of this color.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            (0, _debug.ASSERT)(v >= 0 && v <= this.max, 'Value out of range for BLUE component: ' + v + ' (min: 0, max: ' + this.max + ').');
	            this._blue = v;
	        }
	    }]);
	
	    return Color;
	}();
	
	exports.default = Color;
	
	
	Color.BLACK = new Color(0, 0, 0);
	Color.WHITE = new Color(255, 255, 255);
	
	Color.RED = new Color(255, 0, 0);
	Color.GREEN = new Color(0, 255, 0);
	Color.BLUE = new Color(0, 0, 255);
	
	Color._tempColor = new Color();

/***/ },
/* 24 */
/*!************************************************!*\
  !*** ./plugins/core/src/render/RenderState.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _RenderState$FLAG_GL_;
	
	var _Flags = __webpack_require__(/*! ../util/Flags */ 25);
	
	var _Flags2 = _interopRequireDefault(_Flags);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @class
	 * @memberof render
	 */
	var RenderState = function () {
	    /**
	     * @param {Renderer} renderer - The renderer this object holds state for.
	     */
	    function RenderState(renderer) {
	        _classCallCheck(this, RenderState);
	
	        /**
	         * The renderer this object holds state for.
	         *
	         * @member {Renderer}
	         */
	        this.renderer = renderer;
	
	        /**
	         * Set of flags determining which features are active.
	         *
	         * @member {Flags}
	         */
	        this.stateFlags = RenderState.defaultStateFlags.clone();
	
	        /**
	         * The currently active blend mode.
	         *
	         * @member {BlendMode}
	         */
	        this.blendMode = null;
	
	        /**
	         * The currently active shader.
	         *
	         * @member {Shader}
	         */
	        this.shader = null;
	
	        /**
	         * The currently active render target.
	         *
	         * @member {RenderTarget}
	         */
	        this.target = null;
	
	        /**
	         * The native VAO Extension if this context supports it.
	         *
	         * @member {*}
	         */
	        this.nativeVaoExtension = this.renderer.gl.getExtension('OES_vertex_array_object') || this.renderer.gl.getExtension('MOZ_OES_vertex_array_object') || this.renderer.gl.getExtension('WEBKIT_OES_vertex_array_object');
	    }
	
	    /**
	     * Sets the given BlendMode as the active blend mode.
	     *
	     * @param {BlendMode} mode - A BlendMode instance to enable.
	     * @param {boolean} force - Skip checks and always set value.
	     * @return {boolean} True if the blend mode changed, false otherwise.
	     */
	
	
	    RenderState.prototype.setBlendMode = function setBlendMode(mode) {
	        var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        var equal = this.blendMode ? this.blendMode.equals(mode) : this.blendMode === mode;
	
	        if (!force && equal) return false;
	
	        this.blendMode = mode;
	
	        if (mode) {
	            mode.enable(this.renderer.gl);
	        }
	
	        return true;
	    };
	
	    /**
	     * Sets the given Shader as the active shader.
	     *
	     * @param {Shader} shader - A Shader instance to enable.
	     * @param {boolean} force - Skip checks and always set value.
	     * @return {boolean} True if the blend mode changed, false otherwise.
	     */
	
	
	    RenderState.prototype.setShader = function setShader(shader) {
	        var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        if (!force && this.shader === shader) return false;
	
	        this.shader = shader;
	
	        if (shader) {
	            shader.bind();
	
	            // automatically set the projection matrix
	            if (this.target && shader.uniforms.uProjectionMatrix) {
	                shader.uniforms.uProjectionMatrix = this.target.projectionMatrix.toMat3Array();
	            }
	        } else {
	            this.renderer.gl.useProgram(null);
	        }
	
	        return true;
	    };
	
	    /**
	     * Sets the given RenderTarget as the active target.
	     *
	     * @param {RenderTarget} target - A RenderTarget instance to enable.
	     * @param {boolean} force - Skip checks and always set value.
	     * @return {boolean} True if the blend mode changed, false otherwise.
	     */
	
	
	    RenderState.prototype.setRenderTarget = function setRenderTarget(target) {
	        var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        if (!force && this.target === target) return false;
	
	        this.target = target;
	
	        if (target) {
	            target.activate();
	
	            if (this.shader && this.shader.uniforms.uProjectionMatrix) {
	                this.shader.uniforms.uProjectionMatrix = target.projectionMatrix.toMat3Array();
	            }
	        }
	
	        return true;
	    };
	
	    /**
	     * Sets whether gl.BLEND is enabled or not.
	     *
	     * @param {boolean} enabled - Whether or not to enable.
	     * @return {boolean} True if the value changed, false otherwise.
	     */
	
	
	    RenderState.prototype.enableBlend = function enableBlend() {
	        var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	        return this.enable(RenderState.FLAG.BLEND, enabled);
	    };
	
	    /**
	     * Sets whether gl.DEPTH_TEST is enabled or not.
	     *
	     * @param {boolean} enabled - Whether or not to enable.
	     * @return {boolean} True if the value changed, false otherwise.
	     */
	
	
	    RenderState.prototype.enableDepthTest = function enableDepthTest() {
	        var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	        return this.enable(RenderState.FLAG.DEPTH_TEST, enabled);
	    };
	
	    /**
	     * Sets whether gl.CULL_FACE is enabled or not.
	     *
	     * @param {boolean} enabled - Whether or not to enable.
	     * @return {boolean} True if the value changed, false otherwise.
	     */
	
	
	    RenderState.prototype.enableCullFace = function enableCullFace() {
	        var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	        return this.enable(RenderState.FLAG.CULL_FACE, enabled);
	    };
	
	    /**
	     * Sets whether gl.FRONT_FACE is enabled or not.
	     *
	     * @param {boolean} enabled - Whether or not to enable.
	     * @return {boolean} True if the value changed, false otherwise.
	     */
	
	
	    RenderState.prototype.enableFrontFace = function enableFrontFace() {
	        var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	        return this.enable(RenderState.FLAG.FRONT_FACE, enabled);
	    };
	
	    /**
	     * Sets whether a feature is enabled or not.
	     *
	     * @param {number} flag - The flag to enable/disable.
	     * @param {boolean} enabled - Whether or not to enable.
	     * @param {boolean} force - Skip checks and always set value.
	     * @return {boolean} True if the value changed, false otherwise.
	     */
	
	
	    RenderState.prototype.enable = function enable(flag) {
	        var enabled = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	        var force = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	        if (!force && this.stateFlags.is(flag, enabled)) {
	            return false;
	        }
	
	        this.stateFlags.set(flag, enabled);
	
	        if (flag === RenderState.FLAG.FRONT_FACE) {
	            if (enabled) {
	                this.renderer.gl.frontFace(WebGLRenderingContext.CW);
	            } else {
	                this.renderer.gl.frontFace(WebGLRenderingContext.CCW);
	            }
	        } else if (enabled) {
	            this.renderer.gl.enable(RenderState.FLAG_GL_MAP[flag]);
	        } else {
	            this.renderer.gl.disable(RenderState.FLAG_GL_MAP[flag]);
	        }
	
	        return true;
	    };
	
	    /**
	     * Resets the state and disables the VAOs.
	     *
	     */
	
	
	    RenderState.prototype.reset = function reset() {
	        var _this = this;
	
	        // unbind any VAO if they exist..
	        if (this.nativeVaoExtension) {
	            this.nativeVaoExtension.bindVertexArrayOES(null);
	        }
	
	        // reset flipY
	        this.renderer.gl.pixelStorei(this.renderer.gl.UNPACK_FLIP_Y_WEBGL, false);
	
	        // force setting each state flag to default values
	        Object.keys(RenderState.FLAG).forEach(function (k) {
	            _this.enable(RenderState.FLAG[k], RenderState.defaultStateFlags.isSet(RenderState.FLAG[k]), true);
	        });
	
	        // this.setBlendMode(BlendMode.NORMAL, true);
	        this.setShader(null, true);
	        this.setRenderTarget(null, true);
	    };
	
	    /**
	     * Destroys the state data.
	     */
	
	
	    RenderState.prototype.destroy = function destroy() {
	        this.reset();
	
	        this.renderer = null;
	        this.stateFlags = null;
	        this.blendMode = null;
	        this.shader = null;
	        this.target = null;
	        this.nativeVaoExtension = null;
	    };
	
	    return RenderState;
	}();
	
	/**
	 * Flags on state that enable/disable features
	 *
	 * @static
	 * @constant
	 * @memberof RenderState
	 * @type {object}
	 * @property {number} BLEND
	 * @property {number} DEPTH_TEST
	 * @property {number} FRONT_FACE
	 * @property {number} CULL_FACE
	 */
	
	
	exports.default = RenderState;
	RenderState.FLAG = {
	    BLEND: _Flags2.default.F(0),
	    DEPTH_TEST: _Flags2.default.F(1),
	    FRONT_FACE: _Flags2.default.F(2),
	    CULL_FACE: _Flags2.default.F(3)
	};
	
	/**
	 * Maps feature flags to the GL constant it represents.
	 *
	 * @static
	 * @constant
	 * @memberof RenderState
	 * @type {object<number, number>}
	 */
	RenderState.FLAG_GL_MAP = (_RenderState$FLAG_GL_ = {}, _RenderState$FLAG_GL_[RenderState.FLAG.BLEND] = WebGLRenderingContext.BLEND, _RenderState$FLAG_GL_[RenderState.FLAG.DEPTH_TEST] = WebGLRenderingContext.DEPTH_TEST, _RenderState$FLAG_GL_[RenderState.FLAG.FRONT_FACE] = WebGLRenderingContext.FRONT_FACE, _RenderState$FLAG_GL_[RenderState.FLAG.CULL_FACE] = WebGLRenderingContext.CULL_FACE, _RenderState$FLAG_GL_);
	
	RenderState.defaultStateFlags = new _Flags2.default(RenderState.FLAG.BLEND);

/***/ },
/* 25 */
/*!****************************************!*\
  !*** ./plugins/core/src/util/Flags.js ***!
  \****************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A helper class for managing a bitset of flags.
	 *
	 * @class
	 * @memberof util
	 */
	var Flags = function () {
	    /**
	     * @param {number} initialValue - The starting value of the data.
	     */
	    function Flags() {
	        var initialValue = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	        _classCallCheck(this, Flags);
	
	        /**
	         * The value of the flags underlying number.
	         *
	         * @member {number}
	         */
	        this.value = initialValue | 0;
	    }
	
	    /**
	     * Sets the bits masked by `flag`.
	     *
	     * @param {number} flag - The bits to set.
	     * @param {boolean} on - Whether to set or clear the bits.
	     */
	
	
	    Flags.prototype.set = function set(flag) {
	        var on = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	        if (on) this.value |= flag;else this.clear(flag);
	    };
	
	    /**
	     * Clears the bits masked by `flag`.
	     *
	     * @param {number} flag - The bits to clear.
	     */
	
	
	    Flags.prototype.clear = function clear(flag) {
	        this.value &= ~flag;
	    };
	
	    /**
	     * Checks if the flag is set to the value.
	     *
	     * @param {number} flag - The bits to check.
	     * @param {boolean} on - Whether to check on or off.
	     * @return {boolean} True if it is the pased value, false otherwise.
	     */
	
	
	    Flags.prototype.is = function is(flag, on) {
	        return on ? this.isSet(flag) : this.isUnset(flag);
	    };
	
	    /**
	     * Checks if the flag is set.
	     *
	     * @param {number} flag - The bits to check.
	     * @return {boolean} True if it is set, false otherwise.
	     */
	
	
	    Flags.prototype.isSet = function isSet(flag) {
	        return (this.value & flag) !== 0;
	    };
	
	    /**
	     * Checks if the flag is unset.
	     *
	     * @param {number} flag - The bits to check.
	     * @return {boolean} True if it is unset, false otherwise.
	     */
	
	
	    Flags.prototype.isUnset = function isUnset(flag) {
	        return (this.value & flag) === 0;
	    };
	
	    /**
	     * Copies the values from another Flags object into this one.
	     *
	     * @param {Flags} flags - The object to copy from.
	     * @return {Flags} Returns itself.
	     */
	
	
	    Flags.prototype.copy = function copy(flags) {
	        this.value = flags.value;
	
	        return this;
	    };
	
	    /**
	     * Creates a new flags helper from a default value.
	     *
	     * @return {Flags} The new object.
	     */
	
	
	    Flags.prototype.clone = function clone() {
	        return new Flags(this.value);
	    };
	
	    return Flags;
	}();
	
	/**
	 * Helper to create a bit-shifted flag.
	 *
	 * @static
	 * @method
	 * @memberof Flags
	 * @param {number} n - The index of the flag.
	 * @return {number} The flag value.
	 */
	
	
	exports.default = Flags;
	Flags.F = function (n) {
	    return 1 << n;
	};

/***/ },
/* 26 */
/*!***************************************************!*\
  !*** ./plugins/core/src/render/ObjectRenderer.js ***!
  \***************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * An ObjectRenderer is any renderer that is capable of rendering a single entity, or
	 * a batch of similar entities.
	 *
	 * @class
	 * @abstract
	 * @memberof render
	 */
	var ObjectRenderer = function () {
	    /**
	     * @param {Renderer} renderer - The renderer this manager works for.
	     */
	    function ObjectRenderer(renderer) {
	        _classCallCheck(this, ObjectRenderer);
	
	        /**
	         * The renderer this manager works for.
	         *
	         * @member {Renderer}
	         */
	        this.renderer = renderer;
	    }
	
	    /**
	     * Starts the renderer, called when this becomes the active object renderer.
	     *
	     */
	
	
	    ObjectRenderer.prototype.start = function start() {}
	    // no base implementation
	
	
	    /**
	     * Stops the renderer, called when this is no longer the active object renderer.
	     *
	     */
	    ;
	
	    ObjectRenderer.prototype.stop = function stop() {}
	    // no base implementation
	
	
	    /**
	     * Renders an object, usually called by a system in the update loop.
	     *
	     * @param {*} object - The object to render.
	     */
	    ;
	
	    ObjectRenderer.prototype.render = function render(object) // eslint-disable-line no-unused-vars
	    {}
	    // no base implementation
	
	
	    /**
	     * Destroys the object renderer instance.
	     *
	     */
	    ;
	
	    ObjectRenderer.prototype.destroy = function destroy() {
	        this.renderer = null;
	    };
	
	    return ObjectRenderer;
	}();
	
	exports.default = ObjectRenderer;

/***/ },
/* 27 */
/*!****************************************!*\
  !*** ./plugins/core/src/util/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Flags = exports.BlendMode = exports.Buffer = exports.Color = undefined;
	
	var _Color = __webpack_require__(/*! ./Color */ 23);
	
	Object.defineProperty(exports, 'Color', {
	    enumerable: true,
	    get: function get() {
	        return _interopRequireDefault(_Color).default;
	    }
	});
	
	var _Buffer = __webpack_require__(/*! ./Buffer */ 28);
	
	Object.defineProperty(exports, 'Buffer', {
	    enumerable: true,
	    get: function get() {
	        return _interopRequireDefault(_Buffer).default;
	    }
	});
	
	var _BlendMode = __webpack_require__(/*! ./BlendMode */ 29);
	
	Object.defineProperty(exports, 'BlendMode', {
	    enumerable: true,
	    get: function get() {
	        return _interopRequireDefault(_BlendMode).default;
	    }
	});
	
	var _Flags = __webpack_require__(/*! ./Flags */ 25);
	
	Object.defineProperty(exports, 'Flags', {
	    enumerable: true,
	    get: function get() {
	        return _interopRequireDefault(_Flags).default;
	    }
	});
	exports.error = error;
	exports.log = log;
	exports.uid = uid;
	exports.removeElements = removeElements;
	exports.getMaxIfStatmentsInShader = getMaxIfStatmentsInShader;
	
	var _GLContext = __webpack_require__(/*! ../gl/GLContext */ 9);
	
	var _GLContext2 = _interopRequireDefault(_GLContext);
	
	var _debug = __webpack_require__(/*! ../debug */ 14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** @namespace util */
	
	var nextUid = 0;
	
	// reexport some utils
	
	
	/**
	 * Logs an error to the console.
	 *
	 * @memberof util
	 * @param {...*} things to pass into `console.error`.
	 */
	function error() {
	    var _console;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    args[0] = '[Fae Error] ' + args[0];
	
	    (_console = console).error.apply(_console, args); // eslint-disable-line no-console
	}
	
	/**
	 * Logs a message to the console.
	 *
	 * @memberof util
	 * @param {...*} things to pass into `console.log`.
	 */
	function log() {
	    var _console2;
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	    }
	
	    args[0] = '[Fae] ' + args[0];
	
	    (_console2 = console).log.apply(_console2, args); // eslint-disable-line no-console
	}
	
	/**
	 * Gets the next unique id.
	 *
	 * @memberof util
	 * @return {number} The nexst unique id.
	 */
	function uid() {
	    return nextUid++;
	}
	
	/**
	 * Fast replacement for splice that quickly removes elements from an array.
	 *
	 * @memberof util
	 * @param {Array<*>} array - The array to manipulate.
	 * @param {number} startIdx - The starting index.
	 * @param {number} removeCount - The number of elements to remove.
	 */
	function removeElements(array) {
	    var startIdx = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var removeCount = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	    var length = array.length;
	
	    (0, _debug.ASSERT)(startIdx < length, 'removeElements: index out of range.');
	    (0, _debug.ASSERT)(removeCount !== 0, 'removeElements: remove count must be non-zero.');
	
	    removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
	    var newLength = length - removeCount;
	
	    for (var i = startIdx; i < newLength; ++i) {
	        array[i] = array[i + removeCount];
	    }
	
	    array.length = newLength;
	}
	
	var ifCheckShaderTemplate = '\nprecision mediump float;\nvoid main(void)\n{\n    float test = 0.1;\n    {{if_statements}}\n    gl_FragColor = vec4(0.0);\n}\n';
	
	/**
	 * Calculate the max number of if statements supported in a shader, up to
	 * a maximum cap.
	 *
	 * @memberof util
	 * @param {WebGLRenderingContext} gl - The rendering context
	 * @param {number} maxIfs - cap for the if checks.
	 * @return {number} The max ifs supported
	 */
	function getMaxIfStatmentsInShader(gl, maxIfs) {
	    var createTempContext = !gl;
	
	    if (createTempContext) {
	        var tinyCanvas = document.createElement('canvas');
	
	        tinyCanvas.width = 1;
	        tinyCanvas.height = 1;
	
	        gl = _GLContext2.default.create(tinyCanvas);
	    }
	
	    var shader = gl.createShader(gl.FRAGMENT_SHADER);
	    var max = typeof maxIfs === 'number' ? maxIfs : 50;
	    var guess = max;
	
	    // binary search for max ifs, optimistically.
	    // - assumes higher will work most of the time.
	    // - best case is even numbers, which this should be most of the time.
	    while (guess) {
	        var result = testMaxIf(shader, gl, guess);
	
	        // failed, lower expectations.
	        if (!result) {
	            max = guess;
	            guess = max >> 1;
	        }
	        // succeeded, raise expectations.
	        else {
	                if (max - guess <= 1) break;
	
	                guess += max - guess >> 1;
	            }
	    }
	
	    if (createTempContext) {
	        // get rid of context
	        if (gl.getExtension('WEBGL_lose_context')) {
	            gl.getExtension('WEBGL_lose_context').loseContext();
	        }
	    }
	
	    return guess;
	}
	
	/**
	 * Builds and tried to compile a shader with the specified number of if-statements.
	 *
	 * @ignore
	 * @param {WebGLShader} shader - The shader program to use.
	 * @param {WebGLRenderingContext} gl - The rendering context.
	 * @param {number} max - Number of ifs to generate.
	 * @return {number} The compilation status.
	 */
	function testMaxIf(shader, gl, max) {
	    var fragmentSrc = ifCheckShaderTemplate.replace(/\{\{if_statements\}\}/gi, generateIfTestSrc(max));
	
	    gl.shaderSource(shader, fragmentSrc);
	    gl.compileShader(shader);
	
	    return gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	}
	
	/**
	 * Generates a shader source with the specified number of if-statements.
	 *
	 * @ignore
	 * @param {number} max - Number of ifs to generate.
	 * @return {string} The shader source.
	 */
	function generateIfTestSrc(max) {
	    var src = '';
	
	    for (var i = 0; i < max; ++i) {
	        if (i > 0) {
	            src += '\nelse ';
	        }
	
	        if (i < max - 1) {
	            src += 'if(test == ' + i + '.0) {}';
	        }
	    }
	
	    return src;
	}

/***/ },
/* 28 */
/*!*****************************************!*\
  !*** ./plugins/core/src/util/Buffer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _debug = __webpack_require__(/*! ../debug */ 14);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Simple ArrayBuffer wrapper that manages offsets and views into that buffer.
	 *
	 * @class
	 * @memberof util
	 */
	var Buffer = function () {
	  /**
	   * @param {Buffer|ArrayBuffer|SharedArrayBuffer|ArrayBufferView|number} parentBufferOrSize - A parent
	   *  buffer to have views into, or a size to create a new buffer. If a number is passed
	   *  as the first argument it is assumed to be size, and other arguments are ignored.
	   * @param {number} offset - Offset in bytes this buffer starts at in the parent buffer.
	   * @param {number} length - Length in bytes of this buffer.
	   */
	  function Buffer(parentBufferOrSize) {
	    var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var length = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];
	
	    _classCallCheck(this, Buffer);
	
	    (0, _debug.ASSERT)(offset >= 0, 'Invalid offset, must be negative.');
	
	    var _buffer = null;
	
	    if (typeof parentBufferOrSize === 'number') {
	      _buffer = new ArrayBuffer(parentBufferOrSize);
	    } else if (parentBufferOrSize instanceof ArrayBuffer) {
	      _buffer = parentBufferOrSize;
	    } else {
	      (0, _debug.ASSERT)(parentBufferOrSize.buffer, 'No buffer in object passed as parent.');
	      _buffer = parentBufferOrSize.buffer;
	    }
	
	    var bytesLength = length !== -1 ? length : _buffer.byteLength - offset;
	    var view32Length = length !== -1 ? length / 4 : _buffer.byteLength / 4 - offset / 4;
	
	    (0, _debug.ASSERT)(offset + bytesLength <= _buffer.byteLength, 'Offset + length > size of memory buffer.');
	
	    /**
	     * Raw underlying ArrayBuffer. This is all the memory of the buffer,
	     * NOT just the view it has (based on offset/length).
	     *
	     * @member {ArrayBuffer}
	     */
	    this.buffer = _buffer;
	
	    /**
	     * View on the data as a Uint8Array.
	     *
	     * @member {Uint8Array}
	     */
	    this.bytes = new Uint8Array(_buffer, offset, bytesLength);
	
	    /**
	     * View on the data as a Float32Array.
	     *
	     * @member {Float32Array}
	     */
	    this.float32View = new Float32Array(_buffer, offset, view32Length);
	
	    /**
	     * View on the data as a Uint32Array.
	     *
	     * @member {Uint32Array}
	     */
	    this.uint32View = new Uint32Array(_buffer, offset, view32Length);
	
	    // for duck-typing
	    this.__isBuffer = true;
	  }
	
	  /**
	   * Determines if the passed object is a buffer.
	   *
	   * @param {*} b - Object to check.
	   * @return {boolean} True if the object is Buffer, false otherwise.
	   */
	
	
	  Buffer.isBuffer = function isBuffer(b) {
	    return !!b.__isBuffer;
	  };
	
	  /**
	   * Destroys the buffer.
	   */
	
	
	  Buffer.prototype.destroy = function destroy() {
	    this.buffer = null;
	    this.bytes = null;
	    this.float32View = null;
	    this.uint32View = null;
	  };
	
	  return Buffer;
	}();
	
	exports.default = Buffer;

/***/ },
/* 29 */
/*!********************************************!*\
  !*** ./plugins/core/src/util/BlendMode.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* eslint max-params: [2, { max: 7 }] */
	
	/**
	 * @class
	 * @memberof util
	 */
	var BlendMode = function () {
	    /**
	     * @param {number} sfactor - The source factor (for glBlendFunc).
	     * @param {number} dfactor - The destination factor (for glBlendFunc).
	     * @param {number} equation - The Alpha blend function to use (for glBlendEquation).
	     * @param {number} id - The preset blend mode this object represents.
	     */
	    function BlendMode(sfactor, dfactor, equation) {
	        _classCallCheck(this, BlendMode);
	
	        this.sfactor = sfactor;
	        this.dfactor = dfactor;
	        this.equation = equation;
	    }
	
	    /**
	     * @param {WebGLRenderingContext} gl - The rendering context to set on.
	     */
	
	
	    BlendMode.prototype.enable = function enable(gl) {
	        gl.blendFunc(this.sfactor, this.dfactor);
	        gl.blendEquation(this.equation);
	    };
	
	    /**
	     * Checks for equality with another blend mode.
	     *
	     * @param {BlendMode} mode - The mode to check equality against.
	     * @return {boolean} True if they are equal.
	     */
	
	
	    BlendMode.prototype.equals = function equals(mode) {
	        return !!mode && this.sfactor === mode.sfactor && this.dfactor === mode.dfactor && this.equation === mode.equation;
	    };
	
	    return BlendMode;
	}();
	
	// short name, I'm lazy.
	
	
	exports.default = BlendMode;
	var c = WebGLRenderingContext;
	
	/* eslint-disable no-multi-spaces */
	BlendMode.NORMAL = new BlendMode(c.ONE, c.ONE_MINUS_SRC_ALPHA, c.FUNC_ADD);
	BlendMode.ADD = new BlendMode(c.ONE, c.DST_ALPHA, c.FUNC_ADD);
	BlendMode.SUBTRACT = new BlendMode(c.ONE, c.DST_ALPHA, c.FUNC_SUBTRACT);
	BlendMode.MULTIPLY = new BlendMode(c.DST_COLOR, c.ONE_MINUS_SRC_ALPHA, c.FUNC_ADD);
	BlendMode.EXCLUSION = new BlendMode(c.ONE_MINUS_DST_COLOR, c.ONE_MINUS_SRC_COLOR, c.FUNC_ADD);
	/* eslint-enable no-multi-spaces */

/***/ },
/* 30 */
/*!*****************************************************!*\
  !*** ./plugins/core/src/ecs/VisibilityComponent.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = VisibilityComponent;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: World Alpha needs updates...
	
	function VisibilityComponent(Base) {
	  /**
	   * @class VisibilityComponent
	   * @memberof ecs
	   */
	  return function (_Base) {
	    _inherits(_class, _Base);
	
	    /**
	     *
	     */
	    function _class() {
	      _classCallCheck(this, _class);
	
	      // eslint-disable-line prefer-rest-params
	
	      /**
	       * Controls the visibility of the object. If false, not rendered.
	       *
	       * @member {boolean}
	       * @default true
	       */
	      var _this = _possibleConstructorReturn(this, _Base.apply(this, arguments));
	
	      _this.visible = true;
	
	      /**
	       * The alpha of the object when rendered.
	       * 0 = transparent, 1 = opaque.
	       *
	       * @member {number}
	       * @default 1
	       */
	      _this.alpha = 1;
	
	      /**
	       * The world alpha of the object (local alpha * parent alpha).
	       * 0 = transparent, 1 = opaque.
	       *
	       * @member {number}
	       * @default 1
	       */
	      _this.worldAlpha = 1;
	      return _this;
	    }
	
	    return _class;
	  }(Base);
	}

/***/ },
/* 31 */
/*!****************************************!*\
  !*** ./plugins/core/src/ecs/Entity.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ecs = __webpack_require__(/*! @fae/ecs */ 6);
	
	var _ecs2 = _interopRequireDefault(_ecs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 * @memberof ecs
	 */
	var Entity = function (_ECS$Entity) {
	  _inherits(Entity, _ECS$Entity);
	
	  /**
	   *
	   */
	  function Entity() {
	    _classCallCheck(this, Entity);
	
	    /**
	     * The render priority of this entity. A lower number will make it render
	     * first. Think of this like a "z-index" the higher number will render on top.
	     *
	     * If you change this value at all after adding the entity to the renderer you will
	     * need to call {@link Renderer#sortEntities} for the change to affect the sort.
	     *
	     * @member {number}
	     * @default 0
	     */
	    var _this = _possibleConstructorReturn(this, _ECS$Entity.call(this));
	
	    _this.renderPriority = 0;
	
	    /**
	     * An value that hints to the renderer how to group this entity to try and
	     * improve batching. If this is set the renderer can group entities with the
	     * same `priority` and `renderGroupHint` together, which may improve batching.
	     *
	     * While you can assign this value to anything you want, a good idea is to set
	     * this to the ObjectRenderer class you know that entity will use. That way that
	     * renderer can operate on those objects in sequence and potentially batch them.
	     * If you don't know what to assign this to, leaving it as `null` is fine.
	     *
	     * If you change this value at all after adding the entity to the renderer you will
	     * need to call {@link Renderer#sortEntities} for the change to affect the sort.
	     *
	     * @example
	     *
	     * ```js
	     * import { ecs } from '@fae/core';
	     * import { SpriteRenderer } from '@fae/sprites';
	     *
	     * class MySprite extends ecs.Entity.with(...)
	     * {
	     *     constructor()
	     *     {
	     *         super();
	     *
	     *         // When added to the renderer all `MySprite` instances with the same
	     *         // priority will now be grouped together, improving the SpriteRenderer's
	     *         // ability to batch them!
	     *         this.renderGroupHint = SpriteRenderer;
	     *     }
	     * }
	     * ```
	     *
	     * @member {*}
	     * @default null
	     */
	    _this.renderGroupHint = null;
	    return _this;
	  }
	
	  return Entity;
	}(_ecs2.default.Entity);
	
	exports.default = Entity;

/***/ },
/* 32 */
/*!**************************************!*\
  !*** ./plugins/core/src/gl/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.GLData = exports.GLVertexArrayObject = exports.GLTexture = exports.GLShader = exports.GLQuad = exports.GLProgramCache = exports.GLFramebuffer = exports.GLContext = exports.GLBuffer = undefined;
	
	var _GLBuffer = __webpack_require__(/*! ./GLBuffer */ 33);
	
	Object.defineProperty(exports, 'GLBuffer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GLBuffer).default;
	  }
	});
	
	var _GLContext = __webpack_require__(/*! ./GLContext */ 9);
	
	Object.defineProperty(exports, 'GLContext', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GLContext).default;
	  }
	});
	
	var _GLFramebuffer = __webpack_require__(/*! ./GLFramebuffer */ 12);
	
	Object.defineProperty(exports, 'GLFramebuffer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GLFramebuffer).default;
	  }
	});
	
	var _GLProgramCache = __webpack_require__(/*! ./GLProgramCache */ 10);
	
	Object.defineProperty(exports, 'GLProgramCache', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GLProgramCache).default;
	  }
	});
	
	var _GLQuad = __webpack_require__(/*! ./GLQuad */ 34);
	
	Object.defineProperty(exports, 'GLQuad', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GLQuad).default;
	  }
	});
	
	var _GLShader = __webpack_require__(/*! ./GLShader */ 37);
	
	Object.defineProperty(exports, 'GLShader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GLShader).default;
	  }
	});
	
	var _GLTexture = __webpack_require__(/*! ./GLTexture */ 13);
	
	Object.defineProperty(exports, 'GLTexture', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GLTexture).default;
	  }
	});
	
	var _GLVertexArrayObject = __webpack_require__(/*! ./GLVertexArrayObject */ 35);
	
	Object.defineProperty(exports, 'GLVertexArrayObject', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GLVertexArrayObject).default;
	  }
	});
	
	var _GLData = __webpack_require__(/*! ./GLData */ 38);
	
	var GLData = _interopRequireWildcard(_GLData);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.GLData = GLData;

/***/ },
/* 33 */
/*!*****************************************!*\
  !*** ./plugins/core/src/gl/GLBuffer.js ***!
  \*****************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EMPTY_ARRAY_BUFFER = new ArrayBuffer(0);
	
	/**
	 * Helper class to create a WebGL buffer.
	 *
	 * @class
	 * @memberof glutil
	 */
	
	var GLBuffer = function () {
	    /**
	     * Creates a new GLBuffer.
	     *
	     * @param {WebGLRenderingContext} gl - The current WebGL rendering context
	     * @param {gl.ARRAY_BUFFER|gl.ELEMENT_ARRAY_BUFFER} type - Array type
	     * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} data - an array of data
	     * @param {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW} drawType - Type of draw
	     */
	    function GLBuffer(gl) {
	        var type = arguments.length <= 1 || arguments[1] === undefined ? gl.ARRAY_BUFFER : arguments[1];
	        var data = arguments.length <= 2 || arguments[2] === undefined ? EMPTY_ARRAY_BUFFER : arguments[2];
	        var drawType = arguments.length <= 3 || arguments[3] === undefined ? gl.STATIC_DRAW : arguments[3];
	
	        _classCallCheck(this, GLBuffer);
	
	        /**
	         * The current WebGL rendering context
	         *
	         * @member {WebGLRenderingContext}
	         */
	        this.gl = gl;
	
	        /**
	         * The WebGL buffer, created upon instantiation
	         *
	         * @member {WebGLBuffer}
	         */
	        this.buffer = gl.createBuffer();
	
	        /**
	         * The type of the buffer
	         *
	         * @member {gl.ARRAY_BUFFER|gl.ELEMENT_ARRAY_BUFFER}
	         */
	        this.type = type;
	
	        /**
	         * The draw type of the buffer
	         *
	         * @member {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
	         */
	        this.drawType = drawType;
	
	        /**
	         * The data in the buffer, as a typed array
	         *
	         * @member {ArrayBuffer|SharedArrayBuffer|ArrayBufferView}
	         */
	        this.data = EMPTY_ARRAY_BUFFER;
	
	        // uplaod data if there is some
	        if (data && data !== EMPTY_ARRAY_BUFFER) {
	            this.upload(data);
	        }
	    }
	
	    /**
	     * Creates a new GLBuffer, using `gl.ARRAY_BUFFER` as the type.
	     *
	     * @static
	     * @param {WebGLRenderingContext} gl - The current WebGL rendering context
	     * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} data - an array of data
	     * @param {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW} drawType - Type of draw
	     * @return {GLBuffer} New buffer, using `gl.ARRAY_BUFFER` as the type
	     */
	
	
	    GLBuffer.createVertexBuffer = function createVertexBuffer(gl, data, drawType) {
	        return new GLBuffer(gl, gl.ARRAY_BUFFER, data, drawType);
	    };
	
	    /**
	     * Creates a new GLBuffer, using `gl.ELEMENT_ARRAY_BUFFER` as the type.
	     *
	     * @static
	     * @param {WebGLRenderingContext} gl - The current WebGL rendering context
	     * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} data - an array of data
	     * @param {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW} drawType - Type of draw
	     * @return {GLBuffer} New buffer, using `gl.ELEMENT_ARRAY_BUFFER` as the type
	     */
	
	
	    GLBuffer.createIndexBuffer = function createIndexBuffer(gl, data, drawType) {
	        return new GLBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, data, drawType);
	    };
	
	    /**
	     * Uploads the buffer to the GPU
	     *
	     * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} data - an array of data to upload
	     * @param {number} offset - if only a subset of the data should be uploaded, this is the amount of data to subtract
	     * @param {boolean} dontBind - whether to bind the buffer before uploading it
	     */
	
	
	    GLBuffer.prototype.upload = function upload() {
	        var data = arguments.length <= 0 || arguments[0] === undefined ? this.data : arguments[0];
	        var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var dontBind = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	        // todo - needed?
	        if (!dontBind) this.bind();
	
	        var gl = this.gl;
	
	        if (this.data.byteLength >= data.byteLength) {
	            gl.bufferSubData(this.type, offset, data);
	        } else {
	            gl.bufferData(this.type, data, this.drawType);
	        }
	
	        this.data = data;
	    };
	
	    /**
	     * Binds the buffer
	     *
	     */
	
	
	    GLBuffer.prototype.bind = function bind() {
	        this.gl.bindBuffer(this.type, this.buffer);
	    };
	
	    /**
	     * Destroys the buffer
	     *
	     */
	
	
	    GLBuffer.prototype.destroy = function destroy() {
	        if (this.gl.isBuffer(this.buffer)) {
	            this.gl.deleteBuffer(this.buffer);
	        }
	
	        this.gl = null;
	        this.buffer = null;
	        this.data = null;
	    };
	
	    return GLBuffer;
	}();
	
	exports.default = GLBuffer;

/***/ },
/* 34 */
/*!***************************************!*\
  !*** ./plugins/core/src/gl/GLQuad.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _GLBuffer = __webpack_require__(/*! ./GLBuffer */ 33);
	
	var _GLBuffer2 = _interopRequireDefault(_GLBuffer);
	
	var _GLVertexArrayObject = __webpack_require__(/*! ./GLVertexArrayObject */ 35);
	
	var _GLVertexArrayObject2 = _interopRequireDefault(_GLVertexArrayObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Helper class to create a quad
	 *
	 * @class
	 * @memberof glutil
	 */
	var GLQuad = function () {
	        /**
	         * @param {WebGLRenderingContext} gl - The gl context for this quad to use.
	         */
	        function GLQuad(gl) {
	                _classCallCheck(this, GLQuad);
	
	                /**
	                 * the current WebGL drawing context
	                 *
	                 * @member {WebGLRenderingContext}
	                 */
	                this.gl = gl;
	
	                /**
	                 * An array of vertices
	                 *
	                 * @member {Float32Array}
	                 */
	                this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);
	
	                /**
	                 * The Uvs of the quad
	                 *
	                 * @member {Float32Array}
	                 */
	                this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
	
	                /**
	                 * The array of data that actually gets uploaded.
	                 *
	                 * @member {Float32Array}
	                 */
	                this.interleaved = new Float32Array(8 * 2);
	
	                this.syncData();
	
	                /**
	                 * An array containing the indices of the vertices
	                 *
	                 * @member {Uint16Array}
	                 */
	                this.indices = GLQuad.createIndices(1);
	
	                /**
	                 * The vertex buffer
	                 *
	                 * @member {GLBuffer}
	                 */
	                this.vertexBuffer = _GLBuffer2.default.createVertexBuffer(gl, this.interleaved, gl.STATIC_DRAW);
	
	                /**
	                 * The index buffer
	                 *
	                 * @member {GLBuffer}
	                 */
	                this.indexBuffer = _GLBuffer2.default.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);
	
	                /**
	                 * The vertex array object that manages the buffers.
	                 *
	                 * @member {GLVertexArrayObject}
	                 */
	                this.vao = new _GLVertexArrayObject2.default(gl);
	        }
	
	        /**
	         * Utility to quickly create the indicies for a series of quads.
	         *
	         * @memberof util
	         * @param {number} numQuads - Number of quads to create indices for.
	         * @return {Uint16Array} The indices for the quad.
	         */
	
	
	        GLQuad.createIndices = function createIndices(numQuads) {
	                // the total number of indices in our array, there are 6 points per quad.
	                var totalIndices = numQuads * 6;
	                var indices = new Uint16Array(totalIndices);
	
	                // fill the indices with the quads to draw
	                for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4) {
	                        indices[i + 0] = j + 0;
	                        indices[i + 1] = j + 1;
	                        indices[i + 2] = j + 2;
	                        indices[i + 3] = j + 0;
	                        indices[i + 4] = j + 2;
	                        indices[i + 5] = j + 3;
	                }
	
	                return indices;
	        };
	
	        /**
	         * Initialises the vaos and uses the shader
	         *
	         * @param {GLShader} shader - The shader to use.
	         */
	
	
	        GLQuad.prototype.initVao = function initVao(shader) {
	                // TODO: https://github.com/pixijs/pixi.js/issues/2842
	                // Dont try to deal with attributes the filter doesn't actually have
	                this.vao.clear().setIndexBuffer(this.indexBuffer).addAttribute(this.vertexBuffer, shader.attributes.aVertexPosition, this.gl.FLOAT, false, 4 * 4, 0).addAttribute(this.vertexBuffer, shader.attributes.aTextureCoord, this.gl.FLOAT, false, 4 * 4, 2 * 4);
	        };
	
	        /**
	         * Synchronizes the data into the interleaved array.
	         *
	         */
	
	
	        GLQuad.prototype.syncData = function syncData() {
	                for (var i = 0; i < 4; ++i) {
	                        var ix = i * 4;
	                        var vx = i * 2;
	
	                        this.interleaved[ix] = this.vertices[vx];
	                        this.interleaved[ix + 1] = this.vertices[vx + 1];
	                        this.interleaved[ix + 2] = this.uvs[vx];
	                        this.interleaved[ix + 3] = this.uvs[vx + 1];
	                }
	        };
	
	        /**
	         * Maps two Rectangle to the quad
	         *
	         * @param {Rectangle} targetTextureFrame - The first rectangle.
	         * @param {Rectangle} destinationFrame - The second rectangle.
	         * @return {GLQuad} Returns itself.
	         */
	
	
	        GLQuad.prototype.map = function map(targetTextureFrame, destinationFrame) {
	                var x = 0; // destinationFrame.x / targetTextureFrame.width;
	                var y = 0; // destinationFrame.y / targetTextureFrame.height;
	
	                this.uvs[0] = x;
	                this.uvs[1] = y;
	
	                this.uvs[2] = x + destinationFrame.width / targetTextureFrame.width;
	                this.uvs[3] = y;
	
	                this.uvs[4] = x + destinationFrame.width / targetTextureFrame.width;
	                this.uvs[5] = y + destinationFrame.height / targetTextureFrame.height;
	
	                this.uvs[6] = x;
	                this.uvs[7] = y + destinationFrame.height / targetTextureFrame.height;
	
	                x = destinationFrame.x;
	                y = destinationFrame.y;
	
	                this.vertices[0] = x;
	                this.vertices[1] = y;
	
	                this.vertices[2] = x + destinationFrame.width;
	                this.vertices[3] = y;
	
	                this.vertices[4] = x + destinationFrame.width;
	                this.vertices[5] = y + destinationFrame.height;
	
	                this.vertices[6] = x;
	                this.vertices[7] = y + destinationFrame.height;
	
	                return this;
	        };
	
	        /**
	         * Draws the quad
	         *
	         * @return {GLQuad} Returns itself.
	         */
	
	
	        GLQuad.prototype.draw = function draw() {
	                this.vao.bind().draw(this.gl.TRIANGLES, 6, 0).unbind();
	
	                return this;
	        };
	
	        /**
	         * Binds the buffer and uploads the data
	         *
	         * @return {GLQuad} Returns itself.
	         */
	
	
	        GLQuad.prototype.upload = function upload() {
	                this.syncData();
	
	                this.vertexBuffer.upload(this.interleaved);
	
	                return this;
	        };
	
	        /**
	         * Removes this quad from WebGL.
	         *
	         */
	
	
	        GLQuad.prototype.destroy = function destroy() {
	                this.vertexBuffer.destroy();
	                this.indexBuffer.destroy();
	                this.vao.destroy();
	
	                this.gl = null;
	                this.vertices = null;
	                this.uvs = null;
	                this.interleaved = null;
	                this.indices = null;
	        };
	
	        return GLQuad;
	}();
	
	exports.default = GLQuad;

/***/ },
/* 35 */
/*!****************************************************!*\
  !*** ./plugins/core/src/gl/GLVertexArrayObject.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ismobilejs = __webpack_require__(/*! ismobilejs */ 36);
	
	var _ismobilejs2 = _interopRequireDefault(_ismobilejs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint max-params: [2, 6] */
	
	
	/**
	 * Helper class to work with WebGL GLVertexArrayObjects (vaos)
	 * Only works if WebGL extensions are enabled (they usually are)
	 *
	 * @class
	 * @memberof glutil
	 */
	var GLVertexArrayObject = function () {
	    /**
	     * @param {WebGLRenderingContext} gl - The current WebGL rendering context
	     * @param {object} state - ??
	     */
	    function GLVertexArrayObject(gl) {
	        _classCallCheck(this, GLVertexArrayObject);
	
	        var maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
	
	        /**
	         * The current WebGL rendering context
	         *
	         * @member {WebGLRenderingContext}
	         */
	        this.gl = gl;
	
	        /**
	         * The native VAO extension to use.
	         *
	         * @member {*}
	         */
	        this.nativeVaoExtension = null;
	
	        /**
	         * The actual native Vertex Array Object to use.
	         *
	         * @member {*}
	         */
	        this.nativeVao = null;
	
	        /**
	         * The attribute state.
	         *
	         * @member {object}
	         * @property {boolean[]} tempAttribState - Temp store for attrib state
	         * @property {boolean[]} attribState - The attrib state
	         */
	        this.state = {
	            tempAttribState: new Array(maxAttribs),
	            attribState: new Array(maxAttribs)
	        };
	
	        /**
	         * An array of attributes
	         *
	         * @member {Array}
	         */
	        this.attributes = [];
	
	        /**
	         * @member {Array}
	         */
	        this.indexBuffer = null;
	
	        /**
	         * A boolean flag
	         *
	         * @member {Boolean}
	         */
	        this.dirty = false;
	
	        if (!GLVertexArrayObject.FORCE_NO_NATIVE) {
	            this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
	
	            if (this.nativeVaoExtension) {
	                this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
	            }
	        }
	    }
	
	    /**
	     * Binds the buffer
	     *
	     * @return {GLVertexArrayObject} Returns self.
	     */
	
	
	    GLVertexArrayObject.prototype.bind = function bind() {
	        if (this.nativeVao) {
	            this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
	
	            if (this.dirty) {
	                this.dirty = false;
	                this.activate();
	            }
	        } else {
	            this.activate();
	        }
	
	        return this;
	    };
	
	    /**
	     * Unbinds the buffer
	     *
	     * @return {GLVertexArrayObject} Returns self.
	     */
	
	
	    GLVertexArrayObject.prototype.unbind = function unbind() {
	        if (this.nativeVao) {
	            this.nativeVaoExtension.bindVertexArrayOES(null);
	        }
	
	        return this;
	    };
	
	    /**
	     * Uses this vao
	     *
	     * @return {GLVertexArrayObject} Returns self.
	     */
	
	
	    GLVertexArrayObject.prototype.activate = function activate() {
	        var gl = this.gl;
	        var lastBuffer = null;
	
	        for (var i = 0; i < this.attributes.length; ++i) {
	            var attrib = this.attributes[i];
	
	            if (lastBuffer !== attrib.buffer) {
	                attrib.buffer.bind();
	                lastBuffer = attrib.buffer;
	            }
	
	            attrib.attribute.setup(gl, attrib);
	        }
	
	        setVertexAttribArrays(gl, this.attributes, this.state);
	
	        this.indexBuffer.bind();
	
	        return this;
	    };
	
	    /**
	     * Add an attribute to the VAO
	     *
	     * @param {WebGLBuffer} buffer - The buffer for the attribute.
	     * @param {object} attribute - The attribute descriptor from the shader.
	     * @param {number} type - The GLEnum type of this attribute.
	     * @param {boolean} normalized - Whether the value is normalized.
	     * @param {number} stride - The size of a single element.
	     * @param {number} start - The index in the buffer this attribute starts at.
	     * @return {GLVertexArrayObject} Returns self.
	     */
	
	
	    GLVertexArrayObject.prototype.addAttribute = function addAttribute(buffer, attribute, type) {
	        var normalized = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	        var stride = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	        var start = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
	
	        this.attributes.push({
	            buffer: buffer,
	            attribute: attribute,
	            type: type,
	            normalized: normalized,
	            stride: stride,
	            start: start
	        });
	
	        this.dirty = true;
	
	        return this;
	    };
	
	    /**
	     * Adds an index into the VAO.
	     *
	     * @param {WebGLBuffer} buffer - The buffer to set as the index buffer.
	     * @return {GLVertexArrayObject} Returns self.
	     */
	
	
	    GLVertexArrayObject.prototype.setIndexBuffer = function setIndexBuffer(buffer) {
	        this.indexBuffer = buffer;
	        this.dirty = true;
	
	        return this;
	    };
	
	    /**
	     * Unbinds this vao and disables it
	     *
	     * @return {GLVertexArrayObject} Returns self.
	     */
	
	
	    GLVertexArrayObject.prototype.clear = function clear() {
	        // TODO - should this function unbind after clear?
	        // for now, no but lets see what happens in the real world!
	        if (this.nativeVao) {
	            this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
	        }
	
	        this.attributes.length = 0;
	        this.indexBuffer = null;
	
	        return this;
	    };
	
	    /**
	     * Draws the VAO.
	     *
	     * @param {number} type - The draw type to use. Usually gl.TRIANGLES or gl.TRIANGLE_STRIP
	     * @param {number} size - Size of the buffer to draw.
	     * @param {number} start - Index to start.
	     * @return {GLVertexArrayObject} Returns self.
	     */
	
	
	    GLVertexArrayObject.prototype.draw = function draw(type, size) {
	        var start = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	        var gl = this.gl;
	
	        gl.drawElements(type, size, gl.UNSIGNED_SHORT, start);
	
	        return this;
	    };
	
	    /**
	     * Destroy this vao
	     */
	
	
	    GLVertexArrayObject.prototype.destroy = function destroy() {
	        // lose references
	        this.gl = null;
	        this.indexBuffer = null;
	        this.attributes = null;
	        this.state = null;
	
	        if (this.nativeVao) {
	            this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
	        }
	
	        this.nativeVaoExtension = null;
	        this.nativeVao = null;
	    };
	
	    return GLVertexArrayObject;
	}();
	
	/**
	 * Lets the VAO know if you should use the WebGL extension or the js methods.
	 * Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
	 * If you find on older devices that things have gone a bit weird then set this to true.
	 *
	 * This defaults to `true` for mobile devices and `false` for desktop.
	 *
	 * @static
	 * @constant
	 * @memberof GLVertexArrayObject
	 * @type {boolean}
	 * @default false
	 */
	
	
	exports.default = GLVertexArrayObject;
	GLVertexArrayObject.FORCE_NO_NATIVE = _ismobilejs2.default.tablet || _ismobilejs2.default.phone;
	
	/**
	 * @ignore
	 * @param {WebGLRenderingContext} gl - The current WebGL context
	 * @param {object[]} attribs - attributes
	 * @param {object} state - state
	 */
	function setVertexAttribArrays(gl, attribs, state) {
	    if (state) {
	        var tempAttribState = state.tempAttribState;
	        var attribState = state.attribState;
	
	        for (var i = 0; i < tempAttribState.length; ++i) {
	            tempAttribState[i] = false;
	        }
	
	        // set the new attribs
	        for (var _i = 0; _i < attribs.length; ++_i) {
	            tempAttribState[attribs[_i].attribute.location] = true;
	        }
	
	        for (var _i2 = 0; _i2 < attribState.length; ++_i2) {
	            if (attribState[_i2] !== tempAttribState[_i2]) {
	                attribState[_i2] = tempAttribState[_i2];
	
	                if (state.attribState[_i2]) {
	                    gl.enableVertexAttribArray(_i2);
	                } else {
	                    gl.disableVertexAttribArray(_i2);
	                }
	            }
	        }
	    } else {
	        for (var _i3 = 0; _i3 < attribs.length; ++_i3) {
	            gl.enableVertexAttribArray(attribs[_i3].attribute.location);
	        }
	    }
	}

/***/ },
/* 36 */
/*!**********************************!*\
  !*** ./~/ismobilejs/isMobile.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * isMobile.js v0.4.0
	 *
	 * A simple library to detect Apple phones and tablets,
	 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
	 * and any kind of seven inch device, via user agent sniffing.
	 *
	 * @author: Kai Mallea (kmallea@gmail.com)
	 *
	 * @license: http://creativecommons.org/publicdomain/zero/1.0/
	 */
	(function (global) {
	
	    var apple_phone         = /iPhone/i,
	        apple_ipod          = /iPod/i,
	        apple_tablet        = /iPad/i,
	        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
	        android_tablet      = /Android/i,
	        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
	        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
	        windows_phone       = /IEMobile/i,
	        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
	        other_blackberry    = /BlackBerry/i,
	        other_blackberry_10 = /BB10/i,
	        other_opera         = /Opera Mini/i,
	        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
	        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
	        seven_inch = new RegExp(
	            '(?:' +         // Non-capturing group
	
	            'Nexus 7' +     // Nexus 7
	
	            '|' +           // OR
	
	            'BNTV250' +     // B&N Nook Tablet 7 inch
	
	            '|' +           // OR
	
	            'Kindle Fire' + // Kindle Fire
	
	            '|' +           // OR
	
	            'Silk' +        // Kindle Fire, Silk Accelerated
	
	            '|' +           // OR
	
	            'GT-P1000' +    // Galaxy Tab 7 inch
	
	            ')',            // End non-capturing group
	
	            'i');           // Case-insensitive matching
	
	    var match = function(regex, userAgent) {
	        return regex.test(userAgent);
	    };
	
	    var IsMobileClass = function(userAgent) {
	        var ua = userAgent || navigator.userAgent;
	
	        // Facebook mobile app's integrated browser adds a bunch of strings that
	        // match everything. Strip it out if it exists.
	        var tmp = ua.split('[FBAN');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	
	        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
	        // iPhone" string. Same probable happens on other tablet platforms.
	        // This will confuse detection so strip it out if it exists.
	        tmp = ua.split('Twitter');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	
	        this.apple = {
	            phone:  match(apple_phone, ua),
	            ipod:   match(apple_ipod, ua),
	            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
	            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
	        };
	        this.amazon = {
	            phone:  match(amazon_phone, ua),
	            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
	        };
	        this.android = {
	            phone:  match(amazon_phone, ua) || match(android_phone, ua),
	            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
	        };
	        this.windows = {
	            phone:  match(windows_phone, ua),
	            tablet: match(windows_tablet, ua),
	            device: match(windows_phone, ua) || match(windows_tablet, ua)
	        };
	        this.other = {
	            blackberry:   match(other_blackberry, ua),
	            blackberry10: match(other_blackberry_10, ua),
	            opera:        match(other_opera, ua),
	            firefox:      match(other_firefox, ua),
	            chrome:       match(other_chrome, ua),
	            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
	        };
	        this.seven_inch = match(seven_inch, ua);
	        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;
	
	        // excludes 'other' devices and ipods, targeting touchscreen phones
	        this.phone = this.apple.phone || this.android.phone || this.windows.phone;
	
	        // excludes 7 inch devices, classifying as phone or tablet is left to the user
	        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;
	
	        if (typeof window === 'undefined') {
	            return this;
	        }
	    };
	
	    var instantiate = function() {
	        var IM = new IsMobileClass();
	        IM.Class = IsMobileClass;
	        return IM;
	    };
	
	    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
	        //node
	        module.exports = IsMobileClass;
	    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
	        //browserify
	        module.exports = instantiate();
	    } else if (true) {
	        //AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        global.isMobile = instantiate();
	    }
	
	})(this);


/***/ },
/* 37 */
/*!*****************************************!*\
  !*** ./plugins/core/src/gl/GLShader.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _GLData = __webpack_require__(/*! ./GLData */ 38);
	
	var _GLProgramCache = __webpack_require__(/*! ./GLProgramCache */ 10);
	
	var _GLProgramCache2 = _interopRequireDefault(_GLProgramCache);
	
	var _debug = __webpack_require__(/*! ../debug */ 14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Helper class to create a webGL Shader
	 *
	 * @class
	 * @memberof glutil
	 */
	var GLShader = function () {
	    /**
	     * @param {WebGLRenderingContext} gl - The rendering context.
	     * @param {string|string[]} vertexSrc - The vertex shader source as an array of strings.
	     * @param {string|string[]} fragmentSrc - The fragment shader source as an array of strings.
	     */
	    function GLShader(gl, vertexSrc, fragmentSrc) {
	        _classCallCheck(this, GLShader);
	
	        /**
	         * The current WebGL rendering context
	         *
	         * @member {WebGLRenderingContext}
	         */
	        this.gl = gl;
	
	        /**
	         * The vertex shader source of the program.
	         *
	         * @member {string}
	         */
	        this.vertexSrc = vertexSrc;
	
	        /**
	         * The fragment shader source of the program.
	         *
	         * @member {string}
	         */
	        this.fragmentSrc = fragmentSrc;
	
	        /**
	         * The shader program
	         *
	         * @member {WebGLProgram}
	         */
	        this.program = null;
	
	        /**
	         * The attributes of the shader as an object containing the following properties
	         * {
	         * 	type,
	         * 	size,
	         * 	location,
	         * 	pointer
	         * }
	         * @member {Object}
	         */
	        this.attributes = null;
	
	        /**
	         * The uniforms of the shader as an object containing the following properties
	         * {
	         * 	gl,
	         * 	data
	         * }
	         * @member {Object}
	         */
	        this.uniforms = null;
	
	        // initialize
	        this.recompile();
	    }
	
	    /**
	     * Compiles source into a program.
	     *
	     * @static
	     * @param {WebGLRenderingContext} gl - The rendering context.
	     * @param {string} vertexSrc - The vertex shader source as an array of strings.
	     * @param {string} fragmentSrc - The fragment shader source as an array of strings.
	     * @param {boolean} forceCompile - When set to true this will always compile,
	     *  skipping the cache checks
	     * @return {WebGLProgram} the shader program
	     */
	
	
	    GLShader.compileProgram = function compileProgram(gl, vertexSrc, fragmentSrc) {
	        var forceCompile = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	        var cacheKey = _GLProgramCache2.default.key(vertexSrc, fragmentSrc);
	        var cachedProgram = _GLProgramCache2.default.get(cacheKey);
	
	        if (!forceCompile && cachedProgram) {
	            return cachedProgram;
	        }
	
	        var glVertShader = GLShader.compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
	        var glFragShader = GLShader.compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
	
	        var program = gl.createProgram();
	
	        gl.attachShader(program, glVertShader);
	        gl.attachShader(program, glFragShader);
	        gl.linkProgram(program);
	
	        // if linking fails, then log and cleanup
	        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	            (0, _debug.ASSERT)(false, 'Could not initialize shader.\ngl.VALIDATE_STATUS: ' + gl.getProgramParameter(program, gl.VALIDATE_STATUS) + '\ngl.getError(): ' + gl.getError() + '\ngl.getProgramInfoLog(): ' + gl.getProgramInfoLog(program) + '\n            ');
	
	            gl.deleteProgram(program);
	
	            program = null;
	        }
	
	        // clean up some shaders
	        gl.deleteShader(glVertShader);
	        gl.deleteShader(glFragShader);
	
	        if (program) {
	            _GLProgramCache2.default.set(cacheKey, program);
	        }
	
	        return program;
	    };
	
	    /**
	     * Compiles source into a program.
	     *
	     * @static
	     * @param {WebGLRenderingContext} gl - The rendering context.
	     * @param {number} type - The type, can be either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
	     * @param {string} source - The fragment shader source as an array of strings.
	     * @return {WebGLShader} the shader
	     */
	
	
	    GLShader.compileShader = function compileShader(gl, type, source) {
	        var shader = gl.createShader(type);
	
	        gl.shaderSource(shader, source);
	        gl.compileShader(shader);
	
	        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	            (0, _debug.ASSERT)(false, 'Failed to compile shader.\ngl.COMPILE_STATUS: ' + gl.getShaderParameter(shader, gl.COMPILE_STATUS) + '\ngl.getShaderInfoLog(): ' + gl.getShaderInfoLog(shader) + '\n            ');
	
	            return null;
	        }
	
	        return shader;
	    };
	
	    /**
	     * Extracts the attributes
	     *
	     * @static
	     * @param {WebGLRenderingContext} gl - The rendering context.
	     * @param {WebGLProgram} program - The shader program to get the attributes from
	     * @return {object} attributes
	     */
	
	
	    GLShader.extractAttributes = function extractAttributes(gl, program) {
	        var attributes = {};
	
	        var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
	
	        for (var i = 0; i < totalAttributes; ++i) {
	            var attribData = gl.getActiveAttrib(program, i);
	
	            (0, _debug.ASSERT)(_GLData.GL_SIZE_MAP[attribData.type], 'Unknown attribute type, unable to determine size.');
	
	            attributes[attribData.name] = {
	                type: attribData.type,
	                size: _GLData.GL_SIZE_MAP[attribData.type],
	                location: gl.getAttribLocation(program, attribData.name),
	                setup: attributeSetupFunction
	            };
	        }
	
	        return attributes;
	    };
	
	    /**
	     * Extracts the uniforms
	     *
	     * @static
	     * @param {WebGLRenderingContext} gl - The rendering context.
	     * @param {WebGLProgram} program - The shader program to get the uniforms from
	     * @return {object} uniforms
	     */
	
	
	    GLShader.extractUniforms = function extractUniforms(gl, program) {
	        var uniforms = {};
	
	        var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	
	        for (var i = 0; i < totalUniforms; ++i) {
	            var uniformData = gl.getActiveUniform(program, i);
	            var name = uniformData.name.replace(/\[.*?\]/, '');
	
	            uniforms[name] = {
	                type: uniformData.type,
	                size: uniformData.size,
	                location: gl.getUniformLocation(program, name),
	                value: (0, _GLData.getUniformDefault)(uniformData)
	            };
	        }
	
	        return uniforms;
	    };
	
	    /**
	     * Extracts the uniforms
	     *
	     * @static
	     * @param {WebGLRenderingContext} gl - The rendering context.
	     * @param {object} uniformData - The uniform data to create an access object for.
	     * @return {object} uniform access object.
	     */
	
	
	    GLShader.generateUniformAccessObject = function generateUniformAccessObject(gl, uniformData) {
	        // this is the object we will be sending back.
	        // an object hierachy will be created for structs
	        var uniforms = {
	            __data: {}
	        };
	
	        var uniformKeys = Object.keys(uniformData);
	
	        var _loop = function _loop(i) {
	            var fullName = uniformKeys[i];
	
	            var nameTokens = fullName.split('.');
	            var name = nameTokens[nameTokens.length - 1];
	
	            var uniformGroup = getUniformGroup(nameTokens, uniforms);
	            var uniform = uniformData[fullName];
	
	            uniformGroup.__data[name] = uniform;
	
	            Reflect.defineProperty(uniformGroup, name, {
	                enumerable: true,
	                get: function get() {
	                    return uniform.value;
	                },
	                set: function set(value) {
	                    uniform.value = value;
	
	                    var loc = uniform.location;
	
	                    if (uniform.size === 1) {
	                        _GLData.GL_SETTER[uniform.type](gl, loc, value);
	                    } else {
	                        _GLData.GL_ARRAY_SETTER[uniform.type](gl, loc, value);
	                    }
	                }
	            });
	        };
	
	        for (var i = 0; i < uniformKeys.length; ++i) {
	            _loop(i);
	        }
	
	        return uniforms;
	    };
	
	    /**
	     * Recompiles the shader program.
	     *
	     * @param {boolean} forceCompile - When set to true this will always compile,
	     *  skipping the cache checks.
	     */
	
	
	    GLShader.prototype.recompile = function recompile() {
	        var forceCompile = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	        if (!this.vertexSrc || !this.fragmentSrc) return;
	
	        this.program = GLShader.compileProgram(this.gl, this.vertexSrc, this.fragmentSrc, forceCompile);
	        this.attributes = GLShader.extractAttributes(this.gl, this.program);
	        this.uniforms = GLShader.generateUniformAccessObject(this.gl, GLShader.extractUniforms(this.gl, this.program));
	    };
	
	    /**
	     * Uses this shader
	     */
	
	
	    GLShader.prototype.bind = function bind() {
	        this.gl.useProgram(this.program);
	    };
	
	    /**
	     * Destroys this shader
	     * TODO
	     */
	
	
	    GLShader.prototype.destroy = function destroy() {
	        // var gl = this.gl;
	    };
	
	    return GLShader;
	}();
	
	exports.default = GLShader;
	
	
	function attributeSetupFunction(gl, attrib) {
	    return gl.vertexAttribPointer(this.location, this.size, attrib.type || this.type, attrib.normalized || false, attrib.stride || 0, attrib.start || 0);
	}
	
	function getUniformGroup(nameTokens, uniform) {
	    var cur = uniform;
	
	    for (var i = 0; i < nameTokens.length - 1; ++i) {
	        var o = cur[nameTokens[i]] || { __data: {} };
	
	        cur[nameTokens[i]] = o;
	        cur = o;
	    }
	
	    return cur;
	}

/***/ },
/* 38 */
/*!***************************************!*\
  !*** ./plugins/core/src/gl/GLData.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.GL_ARRAY_SETTER = exports.GL_SETTER = exports.GL_SIZE_MAP = undefined;
	
	var _GL_SIZE_MAP, _GL_SETTER, _GL_ARRAY_SETTER;
	
	exports.getUniformDefault = getUniformDefault;
	
	var _debug = __webpack_require__(/*! ../debug */ 14);
	
	/**
	 * @namespace GLData
	 * @memberof glutil
	 */
	
	/**
	 * Map of WebGL types to their respective sizes.
	 *
	 * @memberof glutil.GLData
	 */
	var GL_SIZE_MAP = exports.GL_SIZE_MAP = (_GL_SIZE_MAP = {}, _GL_SIZE_MAP[WebGLRenderingContext.FLOAT] = 1, _GL_SIZE_MAP[WebGLRenderingContext.FLOAT_VEC2] = 2, _GL_SIZE_MAP[WebGLRenderingContext.FLOAT_VEC3] = 3, _GL_SIZE_MAP[WebGLRenderingContext.FLOAT_VEC4] = 4, _GL_SIZE_MAP[WebGLRenderingContext.INT] = 1, _GL_SIZE_MAP[WebGLRenderingContext.INT_VEC2] = 2, _GL_SIZE_MAP[WebGLRenderingContext.INT_VEC3] = 3, _GL_SIZE_MAP[WebGLRenderingContext.INT_VEC4] = 4, _GL_SIZE_MAP[WebGLRenderingContext.BOOL] = 1, _GL_SIZE_MAP[WebGLRenderingContext.BOOL_VEC2] = 2, _GL_SIZE_MAP[WebGLRenderingContext.BOOL_VEC3] = 3, _GL_SIZE_MAP[WebGLRenderingContext.BOOL_VEC4] = 4, _GL_SIZE_MAP[WebGLRenderingContext.FLOAT_MAT2] = 4, _GL_SIZE_MAP[WebGLRenderingContext.FLOAT_MAT3] = 9, _GL_SIZE_MAP[WebGLRenderingContext.FLOAT_MAT4] = 16, _GL_SIZE_MAP[WebGLRenderingContext.SAMPLER_2D] = 1, _GL_SIZE_MAP);
	
	/**
	 * Map of WebGL types to setter functions to upload the values of that type.
	 * This map is for single values of the types.
	 *
	 * @memberof glutil.GLData
	 */
	var GL_SETTER = exports.GL_SETTER = (_GL_SETTER = {}, _GL_SETTER[WebGLRenderingContext.FLOAT] = function (gl, loc, value) {
	    return gl.uniform1f(loc, value);
	}, _GL_SETTER[WebGLRenderingContext.FLOAT_VEC2] = function (gl, loc, value) {
	    return gl.uniform2f(loc, value[0], value[1]);
	}, _GL_SETTER[WebGLRenderingContext.FLOAT_VEC3] = function (gl, loc, value) {
	    return gl.uniform3f(loc, value[0], value[1], value[2]);
	}, _GL_SETTER[WebGLRenderingContext.FLOAT_VEC4] = function (gl, loc, value) {
	    return gl.uniform4f(loc, value[0], value[1], value[2], value[3]);
	}, _GL_SETTER[WebGLRenderingContext.INT] = function (gl, loc, value) {
	    return gl.uniform1i(loc, value);
	}, _GL_SETTER[WebGLRenderingContext.INT_VEC2] = function (gl, loc, value) {
	    return gl.uniform2i(loc, value[0], value[1]);
	}, _GL_SETTER[WebGLRenderingContext.INT_VEC3] = function (gl, loc, value) {
	    return gl.uniform3i(loc, value[0], value[1], value[2]);
	}, _GL_SETTER[WebGLRenderingContext.INT_VEC4] = function (gl, loc, value) {
	    return gl.uniform4i(loc, value[0], value[1], value[2], value[3]);
	}, _GL_SETTER[WebGLRenderingContext.BOOL] = function (gl, loc, value) {
	    return gl.uniform1i(loc, value);
	}, _GL_SETTER[WebGLRenderingContext.BOOL_VEC2] = function (gl, loc, value) {
	    return gl.uniform2i(loc, value[0], value[1]);
	}, _GL_SETTER[WebGLRenderingContext.BOOL_VEC3] = function (gl, loc, value) {
	    return gl.uniform3i(loc, value[0], value[1], value[2]);
	}, _GL_SETTER[WebGLRenderingContext.BOOL_VEC4] = function (gl, loc, value) {
	    return gl.uniform4i(loc, value[0], value[1], value[2], value[3]);
	}, _GL_SETTER[WebGLRenderingContext.FLOAT_MAT2] = function (gl, loc, value) {
	    return gl.uniformMatrix2fv(loc, false, value);
	}, _GL_SETTER[WebGLRenderingContext.FLOAT_MAT3] = function (gl, loc, value) {
	    return gl.uniformMatrix3fv(loc, false, value);
	}, _GL_SETTER[WebGLRenderingContext.FLOAT_MAT4] = function (gl, loc, value) {
	    return gl.uniformMatrix4fv(loc, false, value);
	}, _GL_SETTER[WebGLRenderingContext.SAMPLER_2D] = function (gl, loc, value) {
	    return gl.uniform1i(loc, value);
	}, _GL_SETTER);
	
	/**
	 * Map of WebGL types to setter functions to upload the values of that type.
	 * This map is for arrays of the types.
	 *
	 * @memberof glutil.GLData
	 */
	var GL_ARRAY_SETTER = exports.GL_ARRAY_SETTER = (_GL_ARRAY_SETTER = {}, _GL_ARRAY_SETTER[WebGLRenderingContext.FLOAT] = function (gl, loc, value) {
	    return gl.uniform1fv(loc, value);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.FLOAT_VEC2] = function (gl, loc, value) {
	    return gl.uniform2fv(loc, value[0], value[1]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.FLOAT_VEC3] = function (gl, loc, value) {
	    return gl.uniform3fv(loc, value[0], value[1], value[2]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.FLOAT_VEC4] = function (gl, loc, value) {
	    return gl.uniform4fv(loc, value[0], value[1], value[2], value[3]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.INT] = function (gl, loc, value) {
	    return gl.uniform1iv(loc, value);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.INT_VEC2] = function (gl, loc, value) {
	    return gl.uniform2iv(loc, value[0], value[1]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.INT_VEC3] = function (gl, loc, value) {
	    return gl.uniform3iv(loc, value[0], value[1], value[2]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.INT_VEC4] = function (gl, loc, value) {
	    return gl.uniform4iv(loc, value[0], value[1], value[2], value[3]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.BOOL] = function (gl, loc, value) {
	    return gl.uniform1iv(loc, value);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.BOOL_VEC2] = function (gl, loc, value) {
	    return gl.uniform2iv(loc, value[0], value[1]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.BOOL_VEC3] = function (gl, loc, value) {
	    return gl.uniform3iv(loc, value[0], value[1], value[2]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.BOOL_VEC4] = function (gl, loc, value) {
	    return gl.uniform4iv(loc, value[0], value[1], value[2], value[3]);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.FLOAT_MAT2] = function (gl, loc, value) {
	    return gl.uniformMatrix2fv(loc, false, value);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.FLOAT_MAT3] = function (gl, loc, value) {
	    return gl.uniformMatrix3fv(loc, false, value);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.FLOAT_MAT4] = function (gl, loc, value) {
	    return gl.uniformMatrix4fv(loc, false, value);
	}, _GL_ARRAY_SETTER[WebGLRenderingContext.SAMPLER_2D] = function (gl, loc, value) {
	    return gl.uniform1iv(loc, value);
	}, _GL_ARRAY_SETTER);
	
	/**
	 * Maps a uniform data type and size to an instance of the default value.
	 *
	 * @memberof glutil.GLData
	 * @param {object} uniformData - The data to use to determine the default value.
	 * @return {*} The default value.
	 */
	function getUniformDefault(uniformData) {
	    var size = uniformData.size;
	
	    switch (uniformData.type) {
	        case WebGLRenderingContext.FLOAT:
	            return 0;
	
	        case WebGLRenderingContext.FLOAT_VEC2:
	            return new Float32Array(2 * size);
	
	        case WebGLRenderingContext.FLOAT_VEC3:
	            return new Float32Array(3 * size);
	
	        case WebGLRenderingContext.FLOAT_VEC4:
	            return new Float32Array(4 * size);
	
	        case WebGLRenderingContext.INT:
	        case WebGLRenderingContext.SAMPLER_2D:
	            return 0;
	
	        case WebGLRenderingContext.INT_VEC2:
	            return new Int32Array(2 * size);
	
	        case WebGLRenderingContext.INT_VEC3:
	            return new Int32Array(3 * size);
	
	        case WebGLRenderingContext.INT_VEC4:
	            return new Int32Array(4 * size);
	
	        case WebGLRenderingContext.BOOL:
	            return false;
	
	        case WebGLRenderingContext.BOOL_VEC2:
	            return booleanArray(2 * size);
	
	        case WebGLRenderingContext.BOOL_VEC3:
	            return booleanArray(3 * size);
	
	        case WebGLRenderingContext.BOOL_VEC4:
	            return booleanArray(4 * size);
	
	        case WebGLRenderingContext.FLOAT_MAT2:
	            return new Float32Array([1, 0, 0, 1]);
	
	        case WebGLRenderingContext.FLOAT_MAT3:
	            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
	
	        case WebGLRenderingContext.FLOAT_MAT4:
	            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	    }
	
	    (0, _debug.ASSERT)(false, 'Unknown uniform type, unable to determine default value.');
	
	    return 0;
	}
	
	function booleanArray(size) {
	    var array = new Array(size);
	
	    for (var i = 0; i < array.length; ++i) {
	        array[i] = false;
	    }
	
	    return array;
	}

/***/ },
/* 39 */
/*!****************************************!*\
  !*** ./plugins/core/src/math/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Matrix2d = __webpack_require__(/*! ./Matrix2d */ 16);
	
	Object.defineProperty(exports, 'Matrix2d', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Matrix2d).default;
	  }
	});
	
	var _Vector2d = __webpack_require__(/*! ./Vector2d */ 15);
	
	Object.defineProperty(exports, 'Vector2d', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Vector2d).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 40 */
/*!******************************************!*\
  !*** ./plugins/core/src/render/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ObjectRenderer = __webpack_require__(/*! ./ObjectRenderer */ 26);
	
	Object.defineProperty(exports, 'ObjectRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ObjectRenderer).default;
	  }
	});
	
	var _Renderer = __webpack_require__(/*! ./Renderer */ 7);
	
	Object.defineProperty(exports, 'Renderer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Renderer).default;
	  }
	});
	
	var _RenderState = __webpack_require__(/*! ./RenderState */ 24);
	
	Object.defineProperty(exports, 'RenderState', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RenderState).default;
	  }
	});
	
	var _RenderTarget = __webpack_require__(/*! ./RenderTarget */ 11);
	
	Object.defineProperty(exports, 'RenderTarget', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RenderTarget).default;
	  }
	});
	
	var _Shader = __webpack_require__(/*! ./Shader */ 41);
	
	Object.defineProperty(exports, 'Shader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Shader).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 41 */
/*!*******************************************!*\
  !*** ./plugins/core/src/render/Shader.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _GLShader2 = __webpack_require__(/*! ../gl/GLShader */ 37);
	
	var _GLShader3 = _interopRequireDefault(_GLShader2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Shader wrapper.
	 *
	 * @class
	 * @memberof render
	 */
	var Shader = function (_GLShader) {
	    _inherits(Shader, _GLShader);
	
	    /**
	     * Constructs a new Shader.
	     *
	     * @param {Renderer} renderer - The Renderer to use for this shader.
	     * @param {string} vertexSrc - The vertex shader source as an array of strings.
	     * @param {string} fragmentSrc - The fragment shader source as an array of strings.
	     */
	    function Shader(renderer, vertexSrc, fragmentSrc) {
	        _classCallCheck(this, Shader);
	
	        /**
	         * Parent Renderer instance.
	         *
	         * @member {Renderer}
	         */
	        var _this = _possibleConstructorReturn(this, _GLShader.call(this, renderer.gl, checkPrecision(vertexSrc), checkPrecision(fragmentSrc)));
	
	        _this.renderer = renderer;
	
	        /**
	         * Binding for when context is restored.
	         *
	         * @member {SignalBinding}
	         */
	        _this._onContextChangeBinding = renderer.onContextChange.add(_this.recompile, _this);
	        return _this;
	    }
	
	    /**
	     *
	     */
	
	
	    Shader.prototype.destroy = function destroy() {
	        this._onContextChangeBinding.detachAll();
	        this._onContextChangeBinding = null;
	
	        this.renderer = null;
	    };
	
	    return Shader;
	}(_GLShader3.default);
	
	/**
	 * Value that specifies float precision in shaders.
	 *
	 * @static
	 * @constant
	 * @type {object}
	 * @property {string} DEFAULT=MEDIUM - The default precision to use.
	 * @property {string} LOW - The low precision header.
	 * @property {string} MEDIUM - The medium precision header.
	 * @property {string} HIGH - The high precision header.
	 */
	
	
	exports.default = Shader;
	Shader.PRECISION = {
	    DEFAULT: 'highp',
	    LOW: 'lowp',
	    MEDIUM: 'mediump',
	    HIGH: 'highp'
	};
	
	/**
	 * Ensures that the source of the program has precision specified.
	 *
	 * @ignore
	 * @param {string} source - The source to check.
	 * @return {string} The potentially modified source.
	 */
	function checkPrecision(source) {
	    if (!source) return '';
	
	    var lines = source.split('\n');
	
	    var commentOpen = false;
	
	    for (var i = 0; i < lines.length; ++i) {
	        var line = lines[i].trim();
	        var firstChars = line.substring(0, 2);
	
	        // line comment, ignore
	        if (firstChars === '//') continue;
	
	        // start of block comment, set flag
	        if (firstChars === '/*') {
	            commentOpen = true;
	        }
	
	        // if comment open, check if this line ends it. If not continue
	        if (commentOpen) {
	            if (line.indexOf('*/') !== -1) {
	                commentOpen = false;
	            }
	
	            continue;
	        }
	
	        // not in a comment, check if precision is set
	        if (line.substring(0, 9) !== 'precision') {
	            return 'precision ' + Shader.PRECISION.DEFAULT + ' float;\n\n' + source;
	        }
	    }
	
	    return source;
	}

/***/ },
/* 42 */
/*!**************************************!*\
  !*** ./plugins/filters/src/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Filter = __webpack_require__(/*! ./Filter */ 43);
	
	Object.defineProperty(exports, 'Filter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Filter).default;
	  }
	});
	
	var _FilterComponent = __webpack_require__(/*! ./FilterComponent */ 45);
	
	Object.defineProperty(exports, 'FilterComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FilterComponent).default;
	  }
	});
	
	var _FilterPrepareSystem = __webpack_require__(/*! ./FilterPrepareSystem */ 46);
	
	Object.defineProperty(exports, 'FilterPrepareSystem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FilterPrepareSystem).default;
	  }
	});
	
	var _FilterRenderSystem = __webpack_require__(/*! ./FilterRenderSystem */ 49);
	
	Object.defineProperty(exports, 'FilterRenderSystem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FilterRenderSystem).default;
	  }
	});
	
	var _FilterUtils = __webpack_require__(/*! ./FilterUtils */ 47);
	
	Object.defineProperty(exports, 'FilterUtils', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FilterUtils).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 43 */
/*!***************************************!*\
  !*** ./plugins/filters/src/Filter.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reservedUniforms = ['__data', // reserved key from the parsing of uniforms in the GLShader
	'uSampler', // reserved key as the input texture to a filter
	'uProjectionMatrix'];
	
	/**
	 * @class
	 * @memberof filters
	 */
	
	var Filter = function (_render$Shader) {
	    _inherits(Filter, _render$Shader);
	
	    /**
	     * @param {Renderer} renderer - The renderer instance of the filter.
	     * @param {string} fragmentSrc - The source of the fragment shader for this filter.
	     * @param {string} vertexSrc - The source of the vertex shader for this filter.
	     */
	    function Filter(renderer, fragmentSrc) {
	        var vertexSrc = arguments.length <= 2 || arguments[2] === undefined ? Filter.defaultVertexSrc : arguments[2];
	
	        _classCallCheck(this, Filter);
	
	        /**
	         * Whether or not this filter is currently enabled. This is useful
	         * if you need to turn on/off a filter often and don't want to change
	         * an Entity's `filters` array.
	         *
	         * @member {boolean}
	         * @default true
	         */
	        var _this = _possibleConstructorReturn(this, _render$Shader.call(this, renderer, vertexSrc, fragmentSrc));
	
	        _this.enable = true;
	
	        /**
	         * The blend mode to be applied to the filter pass.
	         *
	         * @member {BlendMode}
	         * @default BlendMode.NORMAL
	         */
	        _this.blendMode = _core.util.BlendMode.NORMAL;
	
	        /**
	         * The values for the uniforms of this filter. This object will contain a property
	         * for each uniform, automatically detected from the shader source.
	         *
	         * Use this to set uniform values. *Do not* set values with
	         * `filter.uniforms.<name> = ` as that will cause unexpected results.
	         *
	         * @member {*}
	         */
	        _this.values = Filter.generateValueProperties(_this.uniforms);
	        return _this;
	    }
	
	    /**
	     * Generates the values object with a key for each uniform.
	     *
	     * @param {*} uniforms - The uniforms to create a values object for.
	     * @return {*} The values object.
	     */
	
	
	    Filter.generateValueProperties = function generateValueProperties(uniforms) {
	        // TODO: Structs....
	
	        var values = {};
	
	        for (var k in uniforms) {
	            // skip reserved names
	            if (reservedUniforms.indexOf(k) !== -1) continue;
	
	            values[k] = uniforms[k];
	        }
	
	        return values;
	    };
	
	    /**
	     * Runs the filter, performing the post-processing passes the filter defines.
	     *
	     * @param {FilterRenderSystem} system - The render system.
	     * @param {RenderTarget} input - The render target to use as input.
	     * @param {RenderTarget} output - The render target to use as output.
	     * @param {boolean} clear - Should the output buffer be cleared before use?
	     */
	
	
	    Filter.prototype.run = function run(system, input, output, clear) {
	        system.drawFilter(this, input, output, clear);
	    };
	
	    /**
	     * Should only be called after the filter has been set as the bound shader.
	     * Since the FilterRenderSystem calls this for you, there should be almost
	     * no situation where you should call this yourself.
	     *
	     */
	
	
	    Filter.prototype.syncUniforms = function syncUniforms() {
	        // TODO: Structs....
	
	        // slot 0 is the main texture, additional textures start at 1
	        var textureCount = 1;
	
	        var values = this.values;
	        var uniforms = this.uniforms;
	        var uniformData = this.uniforms.__data;
	
	        for (var k in values) {
	            if (!uniformData[k]) continue;
	
	            if (uniformData[k].type === 'sampler2D') {
	                uniforms[k] = textureCount;
	
	                // TextureSource object from the textures plugin
	                // or anything that can give me a gl texture really.
	                if (values[k].getGlTexture) {
	                    var tx = values[k].getGlTexture(this.renderer);
	
	                    if (tx) tx.bind(textureCount);
	                }
	                // Texture object from the textures plugin.
	                else if (values[k].source && values[k].source.getGlTexture) {
	                        var _tx = values[k].source.getGlTexture(this.renderer);
	
	                        if (_tx) _tx.bind(textureCount);
	                    }
	                    // RenderTarget, GLFramebuffer, or anything with a GLTexture property.
	                    else if (values[k].texture) {
	                            values[k].texture.bind(textureCount);
	                        }
	
	                textureCount++;
	            } else if (uniformData[k].type === 'mat3') {
	                // check if its a matrix object
	                if (typeof values[k].a !== 'undefined') {
	                    uniforms[k] = values[k].toArray(true);
	                } else {
	                    uniforms[k] = values[k];
	                }
	            } else if (uniformData[k].type === 'vec2') {
	                // check if its a vector object
	                if (typeof values[k].x !== 'undefined') {
	                    var val = uniforms[k] || new Float32Array(2);
	
	                    val[0] = values[k].x;
	                    val[1] = values[k].y;
	
	                    uniforms[k] = val;
	                } else {
	                    uniforms[k] = values[k];
	                }
	            } else {
	                uniforms[k] = values[k];
	            }
	        }
	    };
	
	    return Filter;
	}(_core.render.Shader);
	
	/**
	 * @static
	 * @constant
	 * @memberof Filter
	 * @type {string}
	 */
	
	
	exports.default = Filter;
	Filter.defaultVertexSrc = __webpack_require__(/*! ./default.vert */ 44);

/***/ },
/* 44 */
/*!******************************************!*\
  !*** ./plugins/filters/src/default.vert ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4((uProjectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n"

/***/ },
/* 45 */
/*!************************************************!*\
  !*** ./plugins/filters/src/FilterComponent.js ***!
  \************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = FilterComponent;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function FilterComponent(Base) {
	  /**
	   * @class FilterComponent
	   * @memberof filters
	   */
	  return function (_Base) {
	    _inherits(_class, _Base);
	
	    /**
	     *
	     */
	    function _class() {
	      _classCallCheck(this, _class);
	
	      // eslint-disable-line prefer-rest-params
	
	      /**
	       * The filters to apply to this object.
	       *
	       * @member {Filter[]}
	       */
	      var _this = _possibleConstructorReturn(this, _Base.apply(this, arguments));
	
	      _this.filters = [];
	
	      /**
	       * The area to use to filter, relative to the object's frame. Either this
	       * rectangle must exist, or the entity needs to have the bounds component.
	       *
	       * When rendering filters the system tries to get this value, and if it
	       * doesn't exist calls `getBounds()` instead.
	       *
	       * @member {Rectangle}
	       */
	      _this.filterArea = null;
	      return _this;
	    }
	
	    return _class;
	  }(Base);
	}

/***/ },
/* 46 */
/*!****************************************************!*\
  !*** ./plugins/filters/src/FilterPrepareSystem.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	var _FilterComponent = __webpack_require__(/*! ./FilterComponent */ 45);
	
	var _FilterComponent2 = _interopRequireDefault(_FilterComponent);
	
	var _FilterUtils = __webpack_require__(/*! ./FilterUtils */ 47);
	
	var _FilterUtils2 = _interopRequireDefault(_FilterUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 * @memberof filters
	 */
	var FilterPrepareSystem = function (_ecs$System) {
	    _inherits(FilterPrepareSystem, _ecs$System);
	
	    /**
	     * @param {Renderer} renderer - The renderer to use.
	     * @param {number} priority - The priority of the system, higher means earlier.
	     * @param {number} frequency - How often to run the update loop. `1` means every
	     *  time, `2` is every other time, etc.
	     */
	    function FilterPrepareSystem(renderer) {
	        var priority = arguments.length <= 1 || arguments[1] === undefined ? _core.ecs.System.PRIORITY.PLUGIN + 500 : arguments[1];
	        var frequency = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	        _classCallCheck(this, FilterPrepareSystem);
	
	        return _possibleConstructorReturn(this, _ecs$System.call(this, renderer, priority, frequency));
	    }
	
	    /**
	     * Returns true if the entity is eligible to the system, false otherwise.
	     *
	     * @param {Entity} entity - The entity to test.
	     * @return {boolean} True if entity should be included.
	     */
	
	
	    FilterPrepareSystem.prototype.test = function test(entity) {
	        return entity.hasComponent(_FilterComponent2.default);
	    };
	
	    /**
	     * Prepare the entity for filtered rendering.
	     *
	     * @param {Entity} entity - The entity to update
	     */
	
	
	    FilterPrepareSystem.prototype.update = function update(entity) {
	        if (entity.filters.length === 0) return;
	
	        // stop obj renderer
	        this.renderer.activeObjectRenderer.stop();
	
	        // reassign target and setup filter state
	        _FilterUtils2.default.setup(entity, this.renderer);
	
	        // start obj renderer
	        this.renderer.activeObjectRenderer.start();
	    };
	
	    return FilterPrepareSystem;
	}(_core.ecs.System);
	
	exports.default = FilterPrepareSystem;
	
	
	_core.render.Renderer.addDefaultSystem(FilterPrepareSystem);

/***/ },
/* 47 */
/*!********************************************!*\
  !*** ./plugins/filters/src/FilterUtils.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	var _shapes = __webpack_require__(/*! @fae/shapes */ 17);
	
	var _bitTwiddle = __webpack_require__(/*! bit-twiddle */ 48);
	
	var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @namespace FilterUtils
	 * @memberof filters
	 */
	exports.default = {
	    initialRenderTarget: null,
	    activeRenderTarget: null,
	    activeBounds: new _shapes.Rectangle(),
	    activeSize: new _shapes.Rectangle(),
	    _renderTargetPool: [],
	
	    /**
	     * Sets up the render targets and bounds for a filter render pass.
	     * This is called by the FilterPrepareSystem when we encounter an
	     * entity that has filters.
	     *
	     * @memberof filters.FilterUtils
	     * @param {Entity} entity - The entity to setup for.
	     * @param {Renderer} renderer - The renderer to setup for.
	     */
	    setup: function setup(entity, renderer /* , resolution*/) {
	        this.initialRenderTarget = renderer.state.target;
	
	        if (this.activeRenderTarget) {
	            this.freeRenderTarget(this.activeRenderTarget);
	        }
	
	        // prepare state
	        var bounds = entity.filterArea || entity.getBounds();
	        var width = _bitTwiddle2.default.nextPow2(bounds.width);
	        var height = _bitTwiddle2.default.nextPow2(bounds.height);
	
	        this.activeBounds.copy(bounds);
	        this.activeSize.width = bounds.width;
	        this.activeSize.height = bounds.height;
	
	        this.activeRenderTarget = this.getRenderTarget(renderer.gl, width, height);
	
	        renderer.state.setRenderTarget(this.activeRenderTarget);
	    },
	
	
	    /**
	     * Gets a render target that a filter can use.
	     *
	     * @memberof filters.FilterUtils
	     * @param {WebGLRenderingContext} gl - The context to create it for.
	     * @param {number} width - The width of the render target to set.
	     * @param {number} height - The height of the render target to set.
	     * @return {RenderTarget} The render target.
	     */
	    getRenderTarget: function getRenderTarget(gl) /* , resolution */{
	        var width = arguments.length <= 1 || arguments[1] === undefined ? this.activeBounds.width : arguments[1];
	        var height = arguments.length <= 2 || arguments[2] === undefined ? this.activeBounds.height : arguments[2];
	
	        width = _bitTwiddle2.default.nextPow2(width /* * resolution */);
	        height = _bitTwiddle2.default.nextPow2(height /* * resolution */);
	
	        var renderTarget = this._renderTargetPool.pop() || new _core.render.RenderTarget(gl, width, height);
	
	        renderTarget.resize(width, height).setFrame(this.activeSize, this.activeBounds);
	
	        return renderTarget;
	    },
	
	
	    /**
	     * Returns a render target to the pool for use later.
	     *
	     * @memberof filters.FilterUtils
	     * @param {RenderTarget} renderTarget - The render target.
	     */
	    freeRenderTarget: function freeRenderTarget(renderTarget) {
	        this._renderTargetPool.push(renderTarget);
	    }
	};

/***/ },
/* 48 */
/*!**********************************!*\
  !*** ./~/bit-twiddle/twiddle.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * Bit twiddling hacks for JavaScript.
	 *
	 * Author: Mikola Lysenko
	 *
	 * Ported from Stanford bit twiddling hack library:
	 *    http://graphics.stanford.edu/~seander/bithacks.html
	 */
	
	"use strict"; "use restrict";
	
	//Number of bits in an integer
	var INT_BITS = 32;
	
	//Constants
	exports.INT_BITS  = INT_BITS;
	exports.INT_MAX   =  0x7fffffff;
	exports.INT_MIN   = -1<<(INT_BITS-1);
	
	//Returns -1, 0, +1 depending on sign of x
	exports.sign = function(v) {
	  return (v > 0) - (v < 0);
	}
	
	//Computes absolute value of integer
	exports.abs = function(v) {
	  var mask = v >> (INT_BITS-1);
	  return (v ^ mask) - mask;
	}
	
	//Computes minimum of integers x and y
	exports.min = function(x, y) {
	  return y ^ ((x ^ y) & -(x < y));
	}
	
	//Computes maximum of integers x and y
	exports.max = function(x, y) {
	  return x ^ ((x ^ y) & -(x < y));
	}
	
	//Checks if a number is a power of two
	exports.isPow2 = function(v) {
	  return !(v & (v-1)) && (!!v);
	}
	
	//Computes log base 2 of v
	exports.log2 = function(v) {
	  var r, shift;
	  r =     (v > 0xFFFF) << 4; v >>>= r;
	  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
	  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
	  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
	  return r | (v >> 1);
	}
	
	//Computes log base 10 of v
	exports.log10 = function(v) {
	  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
	          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
	          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
	}
	
	//Counts number of bits
	exports.popCount = function(v) {
	  v = v - ((v >>> 1) & 0x55555555);
	  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
	  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
	}
	
	//Counts number of trailing zeros
	function countTrailingZeros(v) {
	  var c = 32;
	  v &= -v;
	  if (v) c--;
	  if (v & 0x0000FFFF) c -= 16;
	  if (v & 0x00FF00FF) c -= 8;
	  if (v & 0x0F0F0F0F) c -= 4;
	  if (v & 0x33333333) c -= 2;
	  if (v & 0x55555555) c -= 1;
	  return c;
	}
	exports.countTrailingZeros = countTrailingZeros;
	
	//Rounds to next power of 2
	exports.nextPow2 = function(v) {
	  v += v === 0;
	  --v;
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v + 1;
	}
	
	//Rounds down to previous power of 2
	exports.prevPow2 = function(v) {
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v - (v>>>1);
	}
	
	//Computes parity of word
	exports.parity = function(v) {
	  v ^= v >>> 16;
	  v ^= v >>> 8;
	  v ^= v >>> 4;
	  v &= 0xf;
	  return (0x6996 >>> v) & 1;
	}
	
	var REVERSE_TABLE = new Array(256);
	
	(function(tab) {
	  for(var i=0; i<256; ++i) {
	    var v = i, r = i, s = 7;
	    for (v >>>= 1; v; v >>>= 1) {
	      r <<= 1;
	      r |= v & 1;
	      --s;
	    }
	    tab[i] = (r << s) & 0xff;
	  }
	})(REVERSE_TABLE);
	
	//Reverse bits in a 32 bit word
	exports.reverse = function(v) {
	  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
	          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
	          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
	           REVERSE_TABLE[(v >>> 24) & 0xff];
	}
	
	//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
	exports.interleave2 = function(x, y) {
	  x &= 0xFFFF;
	  x = (x | (x << 8)) & 0x00FF00FF;
	  x = (x | (x << 4)) & 0x0F0F0F0F;
	  x = (x | (x << 2)) & 0x33333333;
	  x = (x | (x << 1)) & 0x55555555;
	
	  y &= 0xFFFF;
	  y = (y | (y << 8)) & 0x00FF00FF;
	  y = (y | (y << 4)) & 0x0F0F0F0F;
	  y = (y | (y << 2)) & 0x33333333;
	  y = (y | (y << 1)) & 0x55555555;
	
	  return x | (y << 1);
	}
	
	//Extracts the nth interleaved component
	exports.deinterleave2 = function(v, n) {
	  v = (v >>> n) & 0x55555555;
	  v = (v | (v >>> 1))  & 0x33333333;
	  v = (v | (v >>> 2))  & 0x0F0F0F0F;
	  v = (v | (v >>> 4))  & 0x00FF00FF;
	  v = (v | (v >>> 16)) & 0x000FFFF;
	  return (v << 16) >> 16;
	}
	
	
	//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
	exports.interleave3 = function(x, y, z) {
	  x &= 0x3FF;
	  x  = (x | (x<<16)) & 4278190335;
	  x  = (x | (x<<8))  & 251719695;
	  x  = (x | (x<<4))  & 3272356035;
	  x  = (x | (x<<2))  & 1227133513;
	
	  y &= 0x3FF;
	  y  = (y | (y<<16)) & 4278190335;
	  y  = (y | (y<<8))  & 251719695;
	  y  = (y | (y<<4))  & 3272356035;
	  y  = (y | (y<<2))  & 1227133513;
	  x |= (y << 1);
	  
	  z &= 0x3FF;
	  z  = (z | (z<<16)) & 4278190335;
	  z  = (z | (z<<8))  & 251719695;
	  z  = (z | (z<<4))  & 3272356035;
	  z  = (z | (z<<2))  & 1227133513;
	  
	  return x | (z << 2);
	}
	
	//Extracts nth interleaved component of a 3-tuple
	exports.deinterleave3 = function(v, n) {
	  v = (v >>> n)       & 1227133513;
	  v = (v | (v>>>2))   & 3272356035;
	  v = (v | (v>>>4))   & 251719695;
	  v = (v | (v>>>8))   & 4278190335;
	  v = (v | (v>>>16))  & 0x3FF;
	  return (v<<22)>>22;
	}
	
	//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
	exports.nextCombination = function(v) {
	  var t = v | (v - 1);
	  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
	}
	


/***/ },
/* 49 */
/*!***************************************************!*\
  !*** ./plugins/filters/src/FilterRenderSystem.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	var _FilterComponent = __webpack_require__(/*! ./FilterComponent */ 45);
	
	var _FilterComponent2 = _interopRequireDefault(_FilterComponent);
	
	var _FilterUtils = __webpack_require__(/*! ./FilterUtils */ 47);
	
	var _FilterUtils2 = _interopRequireDefault(_FilterUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 * @memberof filters
	 */
	var FilterRenderSystem = function (_ecs$System) {
	    _inherits(FilterRenderSystem, _ecs$System);
	
	    /**
	     * @param {Renderer} renderer - The renderer to use.
	     * @param {number} priority - The priority of the system, higher means earlier.
	     * @param {number} frequency - How often to run the update loop. `1` means every
	     *  time, `2` is every other time, etc.
	     */
	    function FilterRenderSystem(renderer) {
	        var priority = arguments.length <= 1 || arguments[1] === undefined ? _core.ecs.System.PRIORITY.RENDER + 500 : arguments[1];
	        var frequency = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	        _classCallCheck(this, FilterRenderSystem);
	
	        var _this = _possibleConstructorReturn(this, _ecs$System.call(this, renderer, priority, frequency));
	
	        _this.quad = null;
	
	        _this._onContextChangeBinding = renderer.onContextChange.add(_this._onContextChange, _this);
	
	        _this._onContextChange();
	        return _this;
	    }
	
	    /**
	     * Called by base Manager class when there is a WebGL context change.
	     *
	     * @private
	     */
	
	
	    FilterRenderSystem.prototype._onContextChange = function _onContextChange() {
	        if (this.quad) this.quad.destroy();
	
	        this.quad = new _core.glutil.GLQuad(this.renderer.gl);
	
	        // TODO: clear and reset FilterUtils renderTargets
	    };
	
	    /**
	     * Returns true if the entity is eligible to the system, false otherwise.
	     *
	     * @param {Entity} entity - The entity to test.
	     * @return {boolean} True if entity should be included.
	     */
	
	
	    FilterRenderSystem.prototype.test = function test(entity) {
	        return entity.hasComponent(_FilterComponent2.default);
	    };
	
	    /**
	     * Render the entity using filtered rendering.
	     *
	     * @param {Entity} entity - The entity to update
	     */
	
	
	    FilterRenderSystem.prototype.update = function update(entity) {
	        if (entity.filters.length === 0) return;
	
	        // stop obj renderer
	        this.renderer.activeObjectRenderer.stop();
	
	        // process the filters
	        this.quad.map(_FilterUtils2.default.activeRenderTarget, _FilterUtils2.default.activeBounds).upload();
	
	        if (entity.filters.length === 1) {
	            var filter = entity.filters[0];
	
	            if (filter.enable) {
	                filter.run(this, _FilterUtils2.default.activeRenderTarget, _FilterUtils2.default.initialRenderTarget, false);
	            }
	        } else {
	            var activeFilters = [];
	            var flip = _FilterUtils2.default.activeRenderTarget;
	            var flop = _FilterUtils2.default.getRenderTarget(this.renderer.gl);
	            var i = 0;
	
	            for (i = 0; i < entity.filters.length - 1; ++i) {
	                if (entity.filters[i].enable) {
	                    activeFilters.push(entity.filters[i]);
	                }
	            }
	
	            for (i = 0; i < activeFilters.length - 1; ++i) {
	                var _filter = activeFilters[i];
	
	                _filter.run(this, flip, flop, true);
	
	                var t = flip;
	
	                flip = flop;
	                flop = t;
	            }
	
	            activeFilters[i].run(this, flip, _FilterUtils2.default.initialRenderTarget, false);
	
	            _FilterUtils2.default.freeRenderTarget(flop);
	        }
	
	        // start obj renderer
	        this.renderer.activeObjectRenderer.start();
	    };
	
	    /**
	     * Draws a filter.
	     *
	     * @param {Filter} filter - The filter to draw.
	     * @param {RenderTarget} input - The render target to use as input.
	     * @param {RenderTarget} output - The render target to use as output.
	     * @param {boolean} clear - Should the output buffer be cleared before use?
	     */
	
	
	    FilterRenderSystem.prototype.drawFilter = function drawFilter(filter, input, output, clear) {
	        var gl = this.renderer.gl;
	        var state = this.renderer.state;
	
	        this.quad.initVao(filter);
	
	        state.setRenderTarget(output);
	
	        if (clear) {
	            gl.disable(gl.SCISSOR_TEST);
	            output.clear();
	            gl.enable(gl.SCISSOR_TEST);
	        }
	
	        state.setShader(filter);
	
	        this._setAutomaticUniforms(filter);
	
	        filter.syncUniforms();
	
	        input.framebuffer.texture.bind(0);
	
	        state.setBlendMode(filter.blendMode);
	
	        this.quad.draw();
	    };
	
	    /**
	     * Sets some uniforms (if they exist) automatically for the user.
	     *
	     * @private
	     * @param {Filter} filter - The filter to setup.
	     */
	
	
	    FilterRenderSystem.prototype._setAutomaticUniforms = function _setAutomaticUniforms(filter) {
	        if (filter.values.uFilterArea) {
	            var area = filter.values.uFilterArea;
	
	            area[0] = _FilterUtils2.default.activeRenderTarget.size.x;
	            area[1] = _FilterUtils2.default.activeRenderTarget.size.y;
	            area[2] = _FilterUtils2.default.activeBounds.x;
	            area[3] = _FilterUtils2.default.activeBounds.y;
	        }
	
	        if (filter.values.uFilterClamp) {
	            var clamp = filter.values.uFilterClamp;
	
	            clamp[0] = 0.5 / _FilterUtils2.default.activeRenderTarget.size.x;
	            clamp[1] = 0.5 / _FilterUtils2.default.activeRenderTarget.size.y;
	            clamp[2] = (_FilterUtils2.default.activeBounds.width - 0.5) / _FilterUtils2.default.activeRenderTarget.size.x;
	            clamp[3] = (_FilterUtils2.default.activeBounds.height - 0.5) / _FilterUtils2.default.activeRenderTarget.size.y;
	        }
	    };
	
	    return FilterRenderSystem;
	}(_core.ecs.System);
	
	exports.default = FilterRenderSystem;
	
	
	_core.render.Renderer.addDefaultSystem(FilterRenderSystem);

/***/ },
/* 50 */
/*!*******************************************!*\
  !*** ./plugins/filters-pack/src/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _NoiseFilter = __webpack_require__(/*! ./noise/NoiseFilter */ 51);
	
	Object.defineProperty(exports, 'NoiseFilter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_NoiseFilter).default;
	  }
	});
	
	var _BlurFilter = __webpack_require__(/*! ./blur/BlurFilter */ 53);
	
	Object.defineProperty(exports, 'BlurFilter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BlurFilter).default;
	  }
	});
	
	var _BlurXFilter = __webpack_require__(/*! ./blur/BlurXFilter */ 54);
	
	Object.defineProperty(exports, 'BlurXFilter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BlurXFilter).default;
	  }
	});
	
	var _BlurYFilter = __webpack_require__(/*! ./blur/BlurYFilter */ 58);
	
	Object.defineProperty(exports, 'BlurYFilter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BlurYFilter).default;
	  }
	});
	
	var _FXAAFilter = __webpack_require__(/*! ./fxaa/FXAAFilter */ 59);
	
	Object.defineProperty(exports, 'FXAAFilter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FXAAFilter).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 51 */
/*!*******************************************************!*\
  !*** ./plugins/filters-pack/src/noise/NoiseFilter.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _filters = __webpack_require__(/*! @fae/filters */ 42);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var fragSrc = __webpack_require__(/*! ./noise.frag */ 52);
	
	/**
	 * A Noise effect filter.
	 *
	 * @class
	 * @memberof filters-pack
	 */
	
	var NoiseFilter = function (_Filter) {
	  _inherits(NoiseFilter, _Filter);
	
	  /**
	   * @param {Renderer} renderer - The renderer this filter runs in.
	   */
	  function NoiseFilter(renderer) {
	    _classCallCheck(this, NoiseFilter);
	
	    var _this = _possibleConstructorReturn(this, _Filter.call(this, renderer, fragSrc));
	
	    _this.values.uNoise = 0.5;
	    return _this;
	  }
	
	  return NoiseFilter;
	}(_filters.Filter);
	
	exports.default = NoiseFilter;

/***/ },
/* 52 */
/*!***************************************************!*\
  !*** ./plugins/filters-pack/src/noise/noise.frag ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n// 1 \"Standard\" fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n// 2 One-Dimension fract( mod( 12345678., 256. * p.x) );\n#define RANDOM_TYPE 1\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uNoise;\n\n// http://stackoverflow.com/questions/4200224/random-noise-functions-for-glsl\n// http://stackoverflow.com/questions/12964279/whats-the-origin-of-this-glsl-rand-one-liner\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color *= rand(gl_FragCoord.xy * uNoise);\n\n    gl_FragColor = color;\n}\n"

/***/ },
/* 53 */
/*!*****************************************************!*\
  !*** ./plugins/filters-pack/src/blur/BlurFilter.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _filters = __webpack_require__(/*! @fae/filters */ 42);
	
	var _BlurXFilter = __webpack_require__(/*! ./BlurXFilter */ 54);
	
	var _BlurXFilter2 = _interopRequireDefault(_BlurXFilter);
	
	var _BlurYFilter = __webpack_require__(/*! ./BlurYFilter */ 58);
	
	var _BlurYFilter2 = _interopRequireDefault(_BlurYFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 */
	var BlurFilter = function (_Filter) {
	    _inherits(BlurFilter, _Filter);
	
	    /**
	     * @param {Renderer} renderer - The renderer to use.
	     */
	    function BlurFilter(renderer) {
	        _classCallCheck(this, BlurFilter);
	
	        var _this = _possibleConstructorReturn(this, _Filter.call(this, renderer));
	
	        _this.blurXFilter = new _BlurXFilter2.default(renderer);
	        _this.blurYFilter = new _BlurYFilter2.default(renderer);
	        return _this;
	    }
	
	    /**
	     * Runs the filter, performing the post-processing passes the filter defines.
	     *
	     * @param {FilterRenderSystem} system - The render system.
	     * @param {RenderTarget} input - The render target to use as input.
	     * @param {RenderTarget} output - The render target to use as output.
	     * @param {boolean} clear - Should the output buffer be cleared before use?
	     */
	
	
	    BlurFilter.prototype.run = function run(system, input, output /* , clear */) {
	        var renderTarget = _filters.FilterUtils.getRenderTarget(this.renderer.gl);
	
	        this.blurXFilter.run(system, input, renderTarget, true);
	        this.blurYFilter.run(system, renderTarget, output, false);
	
	        _filters.FilterUtils.freeRenderTarget(renderTarget);
	    };
	
	    /**
	     * Number of passes for the blur. Higher number produices a higher
	     * quality blur, but is less performant.
	     *
	     * @member {number}
	     * @default 1
	     */
	
	
	    _createClass(BlurFilter, [{
	        key: 'numPasses',
	        get: function get() {
	            return this.blurXFilter.numPasses;
	        }
	
	        /**
	         * Number of passes for the blur. Higher number produices a higher
	         * quality blur, but is less performant.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this.blurXFilter.numPasses = v;
	            this.blurYFilter.numPasses = v;
	        }
	
	        /**
	         * Number of passes for the blur. Higher number produices a higher
	         * quality blur, but is less performant.
	         *
	         * @member {number}
	         * @default 1
	         */
	
	    }, {
	        key: 'strength',
	        get: function get() {
	            return this.blurXFilter.strength;
	        }
	
	        /**
	         * Number of passes for the blur. Higher number produices a higher
	         * quality blur, but is less performant.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this.blurXFilter.strength = v;
	            this.blurYFilter.strength = v;
	        }
	    }]);
	
	    return BlurFilter;
	}(_filters.Filter);
	
	exports.default = BlurFilter;

/***/ },
/* 54 */
/*!******************************************************!*\
  !*** ./plugins/filters-pack/src/blur/BlurXFilter.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _filters = __webpack_require__(/*! @fae/filters */ 42);
	
	var _blurUtil = __webpack_require__(/*! ./blurUtil */ 55);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 */
	var BlurXFilter = function (_Filter) {
	    _inherits(BlurXFilter, _Filter);
	
	    /**
	     * @param {Renderer} renderer - The renderer to use.
	     */
	    function BlurXFilter(renderer) {
	        _classCallCheck(this, BlurXFilter);
	
	        var kernelSize = (0, _blurUtil.getMaxKernelSize)(renderer.gl);
	
	        // set default values
	        var _this = _possibleConstructorReturn(this, _Filter.call(this, renderer, (0, _blurUtil.getFragSource)(kernelSize), (0, _blurUtil.getVertSource)(kernelSize, true)));
	
	        _this.values.uBlurValues = _blurUtil.GAUSSIAN_VALUES[kernelSize];
	
	        /**
	         * Number of passes for the blur. Higher number produices a higher
	         * quality blur, but is less performant.
	         *
	         * @member {number}
	         * @default 1
	         */
	        _this.numPasses = 1;
	
	        /**
	         * The strength of the blur.
	         *
	         * @member {number}
	         * @default 1
	         */
	        _this.strength = 1;
	        return _this;
	    }
	
	    /**
	     * Runs the filter, performing the post-processing passes the filter defines.
	     *
	     * @param {FilterRenderSystem} system - The render system.
	     * @param {RenderTarget} input - The render target to use as input.
	     * @param {RenderTarget} output - The render target to use as output.
	     * @param {boolean} clear - Should the output buffer be cleared before use?
	     */
	
	
	    BlurXFilter.prototype.run = function run(system, input, output, clear) {
	        this.values.uStrength = 1 / output.size.x * (output.size.x / input.size.y);
	        this.values.uStrength *= Math.abs(this.strength);
	        this.values.uStrength /= this.numPasses;
	
	        if (this.numPasses === 1) {
	            system.drawFilter(this, input, output, clear);
	        } else {
	            var renderTarget = _filters.FilterUtils.getRenderTarget(this.renderer.gl);
	            var flip = input;
	            var flop = renderTarget;
	
	            for (var i = 0; i < this.numPasses - 1; ++i) {
	                system.drawFilter(this, flip, flop, true);
	
	                var t = flip;
	
	                flip = flop;
	                flop = t;
	            }
	
	            system.drawFilter(this, flip, output, clear);
	            _filters.FilterUtils.freeRenderTarget(renderTarget);
	        }
	    };
	
	    return BlurXFilter;
	}(_filters.Filter);
	
	exports.default = BlurXFilter;

/***/ },
/* 55 */
/*!***************************************************!*\
  !*** ./plugins/filters-pack/src/blur/blurUtil.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getFragSource = getFragSource;
	exports.getVertSource = getVertSource;
	exports.getMaxKernelSize = getMaxKernelSize;
	/* eslint-disable max-len */
	var GAUSSIAN_VALUES = exports.GAUSSIAN_VALUES = {
	    5: [0.153388, 0.221461, 0.250301, 0.221461, 0.153388],
	    7: [0.071303, 0.131514, 0.189879, 0.214607, 0.189879, 0.131514, 0.071303],
	    9: [0.028532, 0.067234, 0.124009, 0.179044, 0.202360, 0.179044, 0.124009, 0.067234, 0.028532],
	    11: [0.009300, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596, 0.175713, 0.121703, 0.065984, 0.028002, 0.0093],
	    13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641, 0.174868, 0.121117, 0.065666, 0.027867, 0.009255, 0.002406],
	    15: [0.000489, 0.002403, 0.009246, 0.027840, 0.065602, 0.120999, 0.174697, 0.197448, 0.174697, 0.120999, 0.065602, 0.027840, 0.009246, 0.002403, 0.000489]
	};
	/* eslint-enable max-len */
	
	var vertTemplate = __webpack_require__(/*! ./blur.vert */ 56);
	var fragTemplate = __webpack_require__(/*! ./blur.frag */ 57);
	
	function getFragSource(kernelSize) {
	    return fragTemplate.replace('{{size}}', kernelSize);
	}
	
	function getVertSource(kernelSize, isHorizontal) {
	    return vertTemplate.replace('{{size}}', kernelSize).replace('{{halfLength}}', Math.ceil(kernelSize / 2)).replace('{{horizontal}}', isHorizontal ? 1 : 0);
	}
	
	function getMaxKernelSize(gl) {
	    var maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
	    var kernelSize = 15;
	
	    while (kernelSize > maxVaryings) {
	        kernelSize -= 2;
	    }
	
	    return kernelSize;
	}

/***/ },
/* 56 */
/*!*************************************************!*\
  !*** ./plugins/filters-pack/src/blur/blur.vert ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\n#define BLUR_KERNEL_SIZE {{size}}\n#define BLUR_KERNAL_HALF_LENGTH {{halfLength}}.0\n#define BLUR_HORIZONTAL {{horizontal}}\n\n#define SAMPLE_INDEX(i) (float(i) - (BLUR_KERNAL_HALF_LENGTH - 1.0))\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 uProjectionMatrix;\nuniform float uStrength;\n\nvarying vec2 vBlurTexCoords[BLUR_KERNEL_SIZE];\n\nvoid main(void)\n{\n    gl_Position = vec4((uProjectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n\n    // this loop will get unrolled\n    for (int i = 0; i < BLUR_KERNEL_SIZE; ++i)\n    {\n        #if BLUR_HORIZONTAL == 1\n        vBlurTexCoords[i] = aTextureCoord + vec2(SAMPLE_INDEX(i) * uStrength, 0.0);\n        #else\n        vBlurTexCoords[i] = aTextureCoord + vec2(0.0, SAMPLE_INDEX(i) * uStrength);\n        #endif\n    }\n}\n"

/***/ },
/* 57 */
/*!*************************************************!*\
  !*** ./plugins/filters-pack/src/blur/blur.frag ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\n#define BLUR_KERNEL_SIZE {{size}}\n\nvarying vec2 vBlurTexCoords[BLUR_KERNEL_SIZE];\n\nuniform sampler2D uSampler;\nuniform float uBlurValues[BLUR_KERNEL_SIZE];\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    // this loop will get unrolled\n    for (int i = 0; i < BLUR_KERNEL_SIZE; ++i)\n    {\n        gl_FragColor += texture2D(uSampler, vBlurTexCoords[i]) * uBlurValues[i];\n    }\n}\n"

/***/ },
/* 58 */
/*!******************************************************!*\
  !*** ./plugins/filters-pack/src/blur/BlurYFilter.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _filters = __webpack_require__(/*! @fae/filters */ 42);
	
	var _blurUtil = __webpack_require__(/*! ./blurUtil */ 55);
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 */
	var BlurYFilter = function (_Filter) {
	    _inherits(BlurYFilter, _Filter);
	
	    /**
	     * @param {Renderer} renderer - The renderer to use.
	     * @param {number} tapLevel - The guasian tap level to use. 5, 7, 9, 11, 13, or 15.
	     */
	    function BlurYFilter(renderer) {
	        var tapLevel = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];
	
	        _classCallCheck(this, BlurYFilter);
	
	        _core.debug.ASSERT(_blurUtil.GAUSSIAN_VALUES[tapLevel], 'Unknown tap level: ' + tapLevel + ', looking for one of: ' + Object.keys(_blurUtil.GAUSSIAN_VALUES));
	
	        // set default values
	        var _this = _possibleConstructorReturn(this, _Filter.call(this, renderer, (0, _blurUtil.getFragSource)(tapLevel), (0, _blurUtil.getVertSource)(tapLevel, false)));
	
	        _this.values.uBlurValues = _blurUtil.GAUSSIAN_VALUES[tapLevel];
	
	        /**
	         * Number of passes for the blur. Higher number produices a higher
	         * quality blur, but is less performant.
	         *
	         * @member {number}
	         * @default 1
	         */
	        _this.numPasses = 1;
	
	        /**
	         * The strength of the blur.
	         *
	         * @member {number}
	         * @default 1
	         */
	        _this.strength = 1;
	        return _this;
	    }
	
	    /**
	     * Runs the filter, performing the post-processing passes the filter defines.
	     *
	     * @param {FilterRenderSystem} system - The render system.
	     * @param {RenderTarget} input - The render target to use as input.
	     * @param {RenderTarget} output - The render target to use as output.
	     * @param {boolean} clear - Should the output buffer be cleared before use?
	     */
	
	
	    BlurYFilter.prototype.run = function run(system, input, output, clear) {
	        this.values.uStrength = 1 / output.size.y * (output.size.y / input.size.y);
	        this.values.uStrength *= Math.abs(this.strength);
	        this.values.uStrength /= this.numPasses;
	
	        if (this.numPasses === 1) {
	            system.drawFilter(this, input, output, clear);
	        } else {
	            var renderTarget = _filters.FilterUtils.getRenderTarget(this.renderer.gl);
	            var flip = input;
	            var flop = renderTarget;
	
	            for (var i = 0; i < this.numPasses - 1; ++i) {
	                system.drawFilter(this, flip, flop, true);
	
	                var t = flip;
	
	                flip = flop;
	                flop = t;
	            }
	
	            system.drawFilter(this, flip, output, clear);
	            _filters.FilterUtils.freeRenderTarget(renderTarget);
	        }
	    };
	
	    return BlurYFilter;
	}(_filters.Filter);
	
	exports.default = BlurYFilter;

/***/ },
/* 59 */
/*!*****************************************************!*\
  !*** ./plugins/filters-pack/src/fxaa/FXAAFilter.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _filters = __webpack_require__(/*! @fae/filters */ 42);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var vertSrc = __webpack_require__(/*! ./fxaa.vert */ 60);
	var fragSrc = __webpack_require__(/*! ./fxaa.frag */ 61);
	
	/**
	 * Basic FXAA implementation based on the code on geeks3d.com with the
	 * modification that the texture2DLod stuff was removed since it's
	 * unsupported by WebGL.
	 *
	 * @see https://github.com/mitsuhiko/webgl-meincraft
	 *
	 * @class
	 */
	
	var FXAAFilter = function (_Filter) {
	  _inherits(FXAAFilter, _Filter);
	
	  /**
	   * @param {Renderer} renderer - The renderer to use.
	   */
	  function FXAAFilter(renderer) {
	    _classCallCheck(this, FXAAFilter);
	
	    return _possibleConstructorReturn(this, _Filter.call(this, renderer, fragSrc, vertSrc));
	  }
	
	  return FXAAFilter;
	}(_filters.Filter);
	
	exports.default = FXAAFilter;

/***/ },
/* 60 */
/*!*************************************************!*\
  !*** ./plugins/filters-pack/src/fxaa/fxaa.vert ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nvarying vec2 vRgbNW;\nvarying vec2 vRgbNE;\nvarying vec2 vRgbSW;\nvarying vec2 vRgbSE;\nvarying vec2 vRgbM;\n\nvarying vec2 vTextureCoord;\n\nuniform mat3 uProjectionMatrix;\nuniform vec4 uFilterArea;\n\nvec2 mapCoord(vec2 coord)\n{\n    coord *= uFilterArea.xy;\n    coord += uFilterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord(vec2 coord)\n{\n    coord -= uFilterArea.zw;\n    coord /= uFilterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 vRgbNW, out vec2 vRgbNE,\n               out vec2 vRgbSW, out vec2 vRgbSE,\n               out vec2 vRgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    vRgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    vRgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    vRgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    vRgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    vRgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((uProjectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * uFilterArea.xy;\n\n   texcoords(fragCoord, uFilterArea.xy, vRgbNW, vRgbNE, vRgbSW, vRgbSE, vRgbM);\n}\n"

/***/ },
/* 61 */
/*!*************************************************!*\
  !*** ./plugins/filters-pack/src/fxaa/fxaa.frag ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vRgbNW;\nvarying vec2 vRgbNE;\nvarying vec2 vRgbSW;\nvarying vec2 vRgbSE;\nvarying vec2 vRgbM;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uFilterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it's\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n  \tvec2 fragCoord = vTextureCoord * uFilterArea.xy;\n\n  \tvec4 color;\n\n    color = fxaa(uSampler, fragCoord, uFilterArea.xy, vRgbNW, vRgbNE, vRgbSW, vRgbSE, vRgbM);\n\n  \tgl_FragColor = color;\n}\n"

/***/ },
/* 62 */
/*!******************************************!*\
  !*** ./plugins/interaction/src/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _InteractionComponent = __webpack_require__(/*! ./InteractionComponent */ 63);
	
	Object.defineProperty(exports, 'InteractionComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InteractionComponent).default;
	  }
	});
	
	var _InteractionSystem = __webpack_require__(/*! ./InteractionSystem */ 64);
	
	Object.defineProperty(exports, 'InteractionSystem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InteractionSystem).default;
	  }
	});
	
	var _Pointer = __webpack_require__(/*! ./Pointer */ 65);
	
	Object.defineProperty(exports, 'Pointer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Pointer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 63 */
/*!*********************************************************!*\
  !*** ./plugins/interaction/src/InteractionComponent.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = InteractionComponent;
	
	var _miniSignals = __webpack_require__(/*! mini-signals */ 8);
	
	var _miniSignals2 = _interopRequireDefault(_miniSignals);
	
	var _shapes = __webpack_require__(/*! @fae/shapes */ 17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function InteractionComponent(Base) {
	  /**
	   * @class InteractionComponent
	   * @mixes BoundsComponent
	   * @memberof interaction
	   */
	  return function (_BoundsComponent) {
	    _inherits(_class, _BoundsComponent);
	
	    /**
	     *
	     */
	    function _class() {
	      _classCallCheck(this, _class);
	
	      // eslint-disable-line prefer-rest-params
	
	      /**
	       * Dispatched when a pointer starts an interaction (mousedown, pointerdown, touchstart).
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      var _this = _possibleConstructorReturn(this, _BoundsComponent.apply(this, arguments));
	
	      _this.onDown = new _miniSignals2.default();
	
	      /**
	       * Dispatched when a pointer ends an interaction (mouseup, pointerup, touchend).
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      _this.onUp = new _miniSignals2.default();
	
	      /**
	       * Dispatched when a pointer ends an interaction (mouseup, pointerup, touchend)
	       * but is outside of the current target.
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      _this.onUpOutside = new _miniSignals2.default();
	
	      /**
	       * Dispatched when a pointer moves (mousemove, pointermove, touchmove).
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      _this.onMove = new _miniSignals2.default();
	
	      /**
	       * Dispatched when a pointer cancels interaction (mouseout, pointerout, touchcancel).
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      _this.onCancel = new _miniSignals2.default();
	
	      /**
	       * Dispatched when a pointer has a scroll interaction (wheel).
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      _this.onScroll = new _miniSignals2.default();
	
	      /**
	       * Dispatched when a click occurs on an object.
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      _this.onClick = new _miniSignals2.default();
	
	      /**
	       * Dispatched when a hover begins on an object.
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      _this.onHoverStart = new _miniSignals2.default();
	
	      /**
	       * Dispatched when a hover begins on an object.
	       *
	       * The callback looks like {@link InteractionComponent.OnInteractionCallback}
	       *
	       * @member {Signal}
	       */
	      _this.onHoverEnd = new _miniSignals2.default();
	
	      /**
	       * When an interaction occurs the interaction object is passed to the callback.
	       *
	       * @memberof InteractionComponent
	       * @callback OnInteractionCallback
	       * @param {Pointer} pointer - The pointer the interaction happened on.
	       * @param {InteractableObject} target - The target of the interaction.
	       */
	      return _this;
	    }
	    /**
	     * Called to test if this object contains the passed in point.
	     *
	     * @param {number} x - The x coord to check.
	     * @param {number} y - The y coord to check.
	     * @return {SceneObject} The SceneObject that was hit, or null if nothing was.
	     */
	
	
	    _class.prototype.hitTest = function hitTest(x, y) {
	      if (this.getBounds().contains(x, y)) {
	        return this;
	      }
	
	      return null;
	    };
	
	    return _class;
	  }((0, _shapes.BoundsComponent)(Base));
	}

/***/ },
/* 64 */
/*!******************************************************!*\
  !*** ./plugins/interaction/src/InteractionSystem.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Pointer = __webpack_require__(/*! ./Pointer */ 65);
	
	var _Pointer2 = _interopRequireDefault(_Pointer);
	
	var _InteractionComponent = __webpack_require__(/*! ./InteractionComponent */ 63);
	
	var _InteractionComponent2 = _interopRequireDefault(_InteractionComponent);
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var tempCoords = { x: 0, y: 0 };
	
	/**
	 * @class
	 * @memberof interaction
	 */
	
	var InteractionSystem = function (_ecs$System) {
	    _inherits(InteractionSystem, _ecs$System);
	
	    /**
	     * @param {Renderer} renderer - The renderer to handle interactions on.
	     */
	    function InteractionSystem(renderer) {
	        _classCallCheck(this, InteractionSystem);
	
	        /**
	         * The currently active pointers.
	         *
	         * @member {Pointer[]}
	         */
	        var _this = _possibleConstructorReturn(this, _ecs$System.call(this, renderer, 0, Number.MAX_SAFE_INTEGER));
	
	        _this.pointers = [];
	
	        /**
	         * Context-bound version of the handleEvent function.
	         *
	         * @private
	         * @member {function}
	         */
	        _this._boundHandleEvent = _this.handleEvent.bind(_this);
	
	        _this._eventsBound = false;
	        return _this;
	    }
	
	    /**
	     * Return true if the entity is eligible to the system, false otherwise.
	     *
	     * @param {Entity} entity - The entity to test.
	     * @return {boolean} True if entity should be included.
	     */
	
	
	    InteractionSystem.prototype.test = function test(entity) {
	        return entity.hasComponent(_InteractionComponent2.default);
	    };
	
	    /**
	     * Converts client coords to world coords.
	     *
	     * @param {number} x - The x coord, in client space, to convert.
	     * @param {number} y - The y coord, in client space, to convert.
	     * @param {object} out - The out object to assign values to.
	     * @param {number} out.x - The out X coord.
	     * @param {number} out.y - The out Y coord.
	     * @return {object} An object with x/y properties.
	     */
	
	
	    InteractionSystem.prototype.convertClientToWorld = function convertClientToWorld(x, y) {
	        var out = arguments.length <= 2 || arguments[2] === undefined ? { x: 0, y: 0 } : arguments[2];
	
	        var dom = this.renderer.gl.canvas;
	        var rect = dom.getBoundingClientRect();
	
	        out.x = (x - rect.left) * (dom.width / rect.width);
	        out.y = (y - rect.top) * (dom.height / rect.height);
	
	        return out;
	    };
	
	    /**
	     * Hit tests the interactable objects and returns the first hit object. Takes
	     * world-space coords.
	     *
	     * @param {number} x - The x coord, in world space, to test.
	     * @param {number} y - The y coord, in world space, to test.
	     * @return {InteractableObject} The object that was interacted with, null if nothing hits.
	     */
	
	
	    InteractionSystem.prototype.hitTest = function hitTest(x, y) {
	        for (var i = 0; i < this.entities.length; ++i) {
	            var pass = this.entities[i].hitTest(x, y);
	
	            if (pass) return pass;
	        }
	
	        return null;
	    };
	
	    /**
	     * Binds all the DOM events to the view passed in, defaulting to the renderer view.
	     * If you don't want to manager DOM events on your own, this is a good option to
	     * let the manager do it for you.
	     *
	     * @param {HTMLElement} view - The element to use as the root view.
	     */
	
	
	    InteractionSystem.prototype.bindEvents = function bindEvents() {
	        _core.debug.ASSERT(!this._eventsBound, 'bindEvents called again after events were already bound.');
	
	        this._eventsBound = true;
	
	        var dom = this.renderer.gl.canvas;
	
	        if (window.PointerEvent) {
	            dom.addEventListener('pointerdown', this._boundHandleEvent);
	            dom.addEventListener('pointermove', this._boundHandleEvent);
	            dom.addEventListener('pointerout', this._boundHandleEvent);
	            window.addEventListener('pointerup', this._boundHandleEvent);
	        } else {
	            dom.addEventListener('mousedown', this._boundHandleEvent);
	            dom.addEventListener('mousemove', this._boundHandleEvent);
	            dom.addEventListener('mouseout', this._boundHandleEvent);
	            window.addEventListener('mouseup', this._boundHandleEvent);
	
	            dom.addEventListener('touchstart', this._boundHandleEvent);
	            dom.addEventListener('touchmove', this._boundHandleEvent);
	            dom.addEventListener('touchcancel', this._boundHandleEvent);
	            window.addEventListener('touchend', this._boundHandleEvent);
	        }
	
	        dom.addEventListener('wheel', this._boundHandleEvent);
	    };
	
	    /**
	     * Unbinds all the DOM events.
	     *
	     */
	
	
	    InteractionSystem.prototype.unbindEvents = function unbindEvents() {
	        _core.debug.ASSERT(this._eventsBound, 'unbindEvents called when events were not bound.');
	
	        this._eventsBound = false;
	
	        var dom = this.renderer.gl.canvas;
	
	        if (window.PointerEvent) {
	            dom.removeEventListener('pointerdown', this._boundHandleEvent);
	            dom.removeEventListener('pointermove', this._boundHandleEvent);
	            dom.removeEventListener('pointerout', this._boundHandleEvent);
	            window.removeEventListener('pointerup', this._boundHandleEvent);
	        } else {
	            dom.removeEventListener('mousedown', this._boundHandleEvent);
	            dom.removeEventListener('mousemove', this._boundHandleEvent);
	            dom.removeEventListener('mouseout', this._boundHandleEvent);
	            window.removeEventListener('mouseup', this._boundHandleEvent);
	
	            dom.removeEventListener('touchstart', this._boundHandleEvent);
	            dom.removeEventListener('touchmove', this._boundHandleEvent);
	            dom.removeEventListener('touchcancel', this._boundHandleEvent);
	            window.removeEventListener('touchend', this._boundHandleEvent);
	        }
	
	        dom.removeEventListener('wheel', this._boundHandleEvent);
	    };
	
	    /**
	     * Handles an interaction event, usually this is passed a DOM Event.
	     *
	     * @param {Event} event - The start event.
	     */
	
	
	    InteractionSystem.prototype.handleEvent = function handleEvent(event) {
	        // add contacts from the event to the interaction
	        if (event.changedTouches) {
	            for (var i = 0; i < event.changedTouches.length; ++i) {
	                var touch = event.changedTouches;
	                var pointer = this._getPointer(touch);
	                var worldCoords = this.convertClientToWorld(touch.clientX, touch.clientY, tempCoords);
	                var hitObject = this.hitTest(worldCoords.x, worldCoords.y);
	
	                pointer[_Pointer2.default.EVENT_CALL_MAP[event.type]](touch, hitObject, worldCoords.x, worldCoords.y);
	            }
	        } else {
	            var _pointer = this._getPointer(event);
	            var _worldCoords = this.convertClientToWorld(event.clientX, event.clientY, tempCoords);
	            var _hitObject = this.hitTest(_worldCoords.x, _worldCoords.y);
	
	            _pointer[_Pointer2.default.EVENT_CALL_MAP[event.type]](event, _hitObject, _worldCoords.x, _worldCoords.y);
	        }
	    };
	
	    /**
	     * Called when the system is added to the renderer.
	     *
	     */
	
	
	    InteractionSystem.prototype.initialize = function initialize() {
	        _ecs$System.prototype.initialize.call(this);
	
	        this.bindEvents();
	    };
	
	    /**
	     * Disposes of the system, called when removed from the renderer.
	     *
	     */
	
	
	    InteractionSystem.prototype.dispose = function dispose() {
	        _ecs$System.prototype.dispose.call(this);
	
	        this.unbindEvents();
	    };
	
	    /**
	     * Destroys this interaction manager.
	     *
	     */
	
	
	    InteractionSystem.prototype.destroy = function destroy() {
	        _ecs$System.prototype.destroy.call(this);
	
	        this.interactions = null;
	
	        this.onInteraction.detachAll();
	        this.onInteraction = null;
	    };
	
	    /**
	     * Gets or creates a pointer of ID/Type
	     *
	     * @private
	     * @param {MouseEvent|PointerEvent|Touch} data - The event data of the contact.
	     * @return {Pointer} The pointer to use.
	     */
	
	
	    InteractionSystem.prototype._getPointer = function _getPointer(data) {
	        var pointerId = 0;
	
	        if (typeof data.pointerId === 'number') pointerId = data.pointerId;else if (typeof data.identifier === 'number') pointerId = data.identifier;
	
	        for (var i = 0; i < this.pointers.length; ++i) {
	            if (this.pointers[i].id === pointerId) {
	                return this.pointers[i];
	            }
	        }
	
	        var pointer = new _Pointer2.default(pointerId);
	
	        this.pointers.push(pointer);
	
	        return pointer;
	    };
	
	    return InteractionSystem;
	}(_core.ecs.System);
	
	exports.default = InteractionSystem;
	
	
	_core.render.Renderer.addDefaultSystem(InteractionSystem);
	
	/**
	 * The interface for an object that can be added to the interaction manager.
	 *
	 * @interface InteractableObject
	 */
	
	/**
	 * Checks if the object is "hit" by a point. It should return the "hit" object,
	 * generally that is itself. If `true` is returned, then it is assumed the object
	 * meant that it was hit itself. If a falsey values (`false`, `null`, etc) is
	 * returned it is assumed that the object is not hit at all.
	 *
	 * @method
	 * @name InteractableObject#hitTest
	 * @param {number} x - The x coord to test.
	 * @param {number} y - The y coord to test.
	 * @return {InteractableObject} The hit object, or null if nothing hit.
	 */

/***/ },
/* 65 */
/*!********************************************!*\
  !*** ./plugins/interaction/src/Pointer.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EMPTY_ARRAY = [];
	
	/**
	 * @class
	 * @memberof interaction
	 */
	
	var Pointer = function () {
	        /**
	         * @param {number} id - The id of the pointer.
	         */
	        function Pointer(id) {
	                _classCallCheck(this, Pointer);
	
	                /**
	                 * The ID of this pointer.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.id = id;
	
	                /**
	                 * The type of this pointer.
	                 *
	                 * @readonly
	                 * @member {Pointer.TYPE}
	                 */
	                this.type = Pointer.TYPE.UNKNOWN;
	
	                /**
	                 * The target of this pointer when it was pressed down.
	                 *
	                 * @readonly
	                 * @member {InteractableObject}
	                 */
	                this.target = null;
	
	                /**
	                 * The target of this pointer when it hovered over an object.
	                 *
	                 * @readonly
	                 * @member {InteractableObject}
	                 */
	                this.hoverTarget = null;
	
	                /**
	                 * The target of this pointer when scroll events happened.
	                 *
	                 * @readonly
	                 * @member {InteractableObject}
	                 */
	                this.scrollTarget = null;
	
	                /**
	                 * The unique identifier of the most recently pressed button.
	                 *
	                 * A value of `0` is also used for touch and "uninitialized" states.
	                 * For example, during a hover nothing is pressed. In this case this
	                 * value is `0`.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.button = 0;
	
	                /**
	                 * The unique identifiers of all the actively pressed buttons.
	                 *
	                 * @readonly
	                 * @member {number[]}
	                 */
	                this.buttons = EMPTY_ARRAY;
	
	                /**
	                 * A Boolean value indicating whether or not the alt key is pressed.
	                 *
	                 * @readonly
	                 * @member {boolean}
	                 */
	                this.altKey = false;
	
	                /**
	                 * A Boolean value indicating whether or not the control key is pressed.
	                 *
	                 * @readonly
	                 * @member {boolean}
	                 */
	                this.ctrlKey = false;
	
	                /**
	                 * A Boolean value indicating whether or not the meta key is pressed.
	                 *
	                 * @readonly
	                 * @member {boolean}
	                 */
	                this.metaKey = false;
	
	                /**
	                 * A Boolean value indicating whether or not the shift key is pressed.
	                 *
	                 * @readonly
	                 * @member {boolean}
	                 */
	                this.shiftKey = false;
	
	                /**
	                 * The width of the interaction of the pointer with the screen.
	                 * For touch interactions, this is how much finger is on the screen.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.width = 1;
	
	                /**
	                 * The height of the interaction of the pointer with the screen.
	                 * For touch interactions, this is how much finger is on the screen.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.height = 1;
	
	                /**
	                 * The pressure or force of the interaction of the pointer with the screen.
	                 * This value is a normalized value between 0.0 and 1.0
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.pressure = 1.0;
	
	                /**
	                 * The client-space coord of the pointer interaction.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.clientX = 0;
	
	                /**
	                 * The client-space coord of the pointer interaction.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.clientY = 0;
	
	                /**
	                 * How much the pointer has moved since last time it was updated,
	                 * in world-space coords.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.deltaX = 0;
	
	                /**
	                 * How much the pointer has moved since last time it was updated,
	                 * in world-space coords.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.deltaY = 0;
	
	                /**
	                 * The world-space coord of the pointer interaction.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.worldX = 0;
	
	                /**
	                 * The world-space coord of the pointer interaction.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.worldY = 0;
	
	                /**
	                 * The delta X of the scroll when doing a scroll event.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.scrollDeltaX = 0;
	
	                /**
	                 * The delta Y of the scroll when doing a scroll event.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.scrollDeltaY = 0;
	
	                /**
	                 * The delta Z of the scroll when doing a scroll event.
	                 *
	                 * @readonly
	                 * @member {number}
	                 */
	                this.scrollDeltaZ = 0;
	
	                /**
	                 * Is this pointer down pressed down?
	                 *
	                 * @readonly
	                 * @member {boolean}
	                 */
	                this.isDown = false;
	
	                /**
	                 * Is this pointer hovering over the target?
	                 *
	                 * @readonly
	                 * @member {boolean}
	                 */
	                this.isHovering = false;
	        }
	
	        /**
	         * Called on a start event.
	         *
	         * @param {MouseEvent|PointerEvent|Touch} data - The contact data.
	         * @param {InteractableObject} target - The object this interaction hits.
	         * @param {number} worldX - The world X coord of the interaction.
	         * @param {number} worldY - The world Y coord of the interaction.
	         */
	
	
	        Pointer.prototype.start = function start(data, target, worldX, worldY) {
	                _core.debug.ASSERT(!this.isDown, 'Start called for pointer without ending first.');
	
	                this.isDown = true;
	                this.target = target;
	
	                this.button = data.button || 0;
	                this.buttons = data.buttons || EMPTY_ARRAY;
	
	                this._set(data, worldX, worldY);
	
	                if (target) {
	                        target.onDown.dispatch(this, target);
	                }
	        };
	
	        /**
	         * Called on an end event.
	         *
	         * @param {MouseEvent|PointerEvent|Touch} data - The contact data.
	         * @param {InteractableObject} target - The object this interaction hits.
	         * @param {number} worldX - The world X coord of the interaction.
	         * @param {number} worldY - The world Y coord of the interaction.
	         */
	
	
	        Pointer.prototype.end = function end(data, target, worldX, worldY) {
	                // ignore end events when we haven't even started yet
	                if (!this.isDown) return;
	
	                this.isDown = false;
	
	                this._set(data, worldX, worldY);
	
	                // click!
	                if (this.target) {
	                        if (this.target === target) {
	                                this.target.onClick.dispatch(this, this.target);
	                        }
	
	                        if (!target) {
	                                this.target.onUpOutside.dispatch(this, this.target);
	                        }
	                }
	
	                this.target = target;
	
	                if (target) {
	                        target.onUp.dispatch(this, target);
	                }
	        };
	
	        /**
	         * Called on a move event.
	         *
	         * @param {MouseEvent|PointerEvent|Touch} data - The contact data.
	         * @param {InteractableObject} target - The object this interaction hits.
	         * @param {number} worldX - The world X coord of the interaction.
	         * @param {number} worldY - The world Y coord of the interaction.
	         */
	
	
	        Pointer.prototype.move = function move(data, target, worldX, worldY) {
	                this._set(data, worldX, worldY, this.isDown || this.isHovering);
	
	                // target has changed, so hover state has changed
	                if (this.hoverTarget !== target) {
	                        if (this.isHovering && this.hoverTarget) {
	                                this.isHovering = false;
	                                this.hoverTarget.onHoverEnd.dispatch(this, this.hoverTarget);
	                                this.hoverTarget = null;
	                        }
	
	                        if (target) {
	                                this.isHovering = true;
	                                this.hoverTarget = target;
	                                target.onHoverStart.dispatch(this, target);
	                        }
	                }
	
	                // TODO: Drag-and-drop, if you move mouse fast enough target changes. May
	                // cause issues when people try to do dragging.
	
	                this.hoverTarget = target;
	
	                if (target) {
	                        target.onMove.dispatch(this, target);
	                }
	        };
	
	        /**
	         * Called on a cancel event.
	         *
	         * @param {MouseEvent|PointerEvent|Touch} data - The contact data.
	         * @param {InteractableObject} target - The object this interaction hits.
	         * @param {number} worldX - The world X coord of the interaction.
	         * @param {number} worldY - The world Y coord of the interaction.
	         */
	
	
	        Pointer.prototype.cancel = function cancel(data, target, worldX, worldY) {
	                var wasDown = this.isDown;
	                var wasHovering = this.isHovering;
	
	                this.isDown = false;
	                this.isHovering = false;
	
	                this._set(data, worldX, worldY);
	
	                if (this.target) {
	                        this.target.onCancel.dispatch(this.target || this.hoverTarget, this);
	
	                        if (wasDown) {
	                                this.target.onUpOutside.dispatch(this, this.target);
	                        }
	                }
	
	                if (wasHovering && this.hoverTarget) {
	                        this.hoverTarget.onHoverEnd.dispatch(this, this.hoverTarget);
	                }
	
	                this.target = null;
	                this.hoverTarget = null;
	                this.scrollTarget = null;
	        };
	
	        /**
	         * Called on a scroll event.
	         *
	         * @param {MouseEvent|PointerEvent|Touch} data - The contact data.
	         * @param {InteractableObject} target - The object this interaction hits.
	         * @param {number} worldX - The world X coord of the interaction.
	         * @param {number} worldY - The world Y coord of the interaction.
	         */
	
	
	        Pointer.prototype.scroll = function scroll(data, target, worldX, worldY) {
	                this._set(data, worldX, worldY);
	
	                this.scrollDeltaX = data.deltaX;
	                this.scrollDeltaY = data.deltaY;
	                this.scrollDeltaZ = data.deltaZ;
	
	                this.scrollTarget = target;
	
	                if (target) {
	                        target.onScroll.dispatch(this, target);
	                }
	        };
	
	        /**
	         * Sets the members based on a DOM event.
	         *
	         * @param {PointerEvent|MouseEvent|Touch} data - The event data to set from.
	         * @param {number} worldX - The world X coord of this event.
	         * @param {number} worldY - The world Y coord of this event.
	         * @param {boolean} calcDelta - Should we calculate the delta movement?
	         */
	
	
	        Pointer.prototype._set = function _set(data, worldX, worldY) {
	                var calcDelta = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	                // set type
	                if (data.pointerType) {
	                        this.type = data.pointerType;
	                } else if (data.type && data.type[0] === 'm') {
	                        this.type = Pointer.TYPE.MOUSE;
	                } else {
	                        this.type = Pointer.TYPE.TOUCH;
	                }
	
	                // set pressure
	                if (typeof data.pressure === 'number') {
	                        this.pressure = data.pressure;
	                } else if (typeof data.force === 'number') {
	                        this.pressure = data.force;
	                } else {
	                        this.pressure = 1.0;
	                }
	
	                // set button state
	                this.button = data.button || 0;
	                this.buttons = data.buttons || EMPTY_ARRAY;
	
	                // set key states
	                this.altKey = data.altKey || false;
	                this.ctrlKey = data.ctrlKey || false;
	                this.metaKey = data.metaKey || false;
	                this.shiftKey = data.shiftKey || false;
	
	                // set size
	                this.width = data.width || (typeof data.radiusX === 'number' ? data.radiusX * 2 : 1);
	                this.height = data.height || (typeof data.radiusY === 'number' ? data.radiusY * 2 : 1);
	
	                // set client x/y coords
	                this.clientX = data.clientX;
	                this.clientY = data.clientY;
	
	                // calculate delta (maybe)
	                this.deltaX = calcDelta ? worldX - this.worldX : 0;
	                this.deltaY = calcDelta ? worldY - this.worldY : 0;
	
	                // set world x/y coords
	                this.worldX = worldX;
	                this.worldY = worldY;
	        };
	
	        return Pointer;
	}();
	
	/**
	 * The pointer type.
	 *
	 * @static
	 * @readonly
	 * @enum {string}
	 */
	
	
	exports.default = Pointer;
	Pointer.TYPE = {
	        /** Unknown type */
	        UNKNOWN: '',
	        /** The pointer is a mouse */
	        MOUSE: 'mouse',
	        /** The pointer is a touch */
	        TOUCH: 'touch',
	        /** The pointer is a pen device */
	        PEN: 'pen'
	};
	
	/**
	 * Map of interaction events to the state they represent.
	 *
	 * @static
	 * @readonly
	 * @enum {string}
	 */
	Pointer.EVENT_CALL_MAP = {
	        mousedown: 'start',
	        touchstart: 'start',
	        pointerdown: 'start',
	
	        mouseup: 'end',
	        touchend: 'end',
	        pointerup: 'end',
	
	        mousemove: 'move',
	        touchmove: 'move',
	        pointermove: 'move',
	
	        mouseout: 'cancel',
	        touchcancel: 'cancel',
	        pointerout: 'cancel',
	
	        wheel: 'scroll'
	};

/***/ },
/* 66 */
/*!**************************************!*\
  !*** ./plugins/sprites/src/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Sprite = __webpack_require__(/*! ./Sprite */ 67);
	
	Object.defineProperty(exports, 'Sprite', {
	    enumerable: true,
	    get: function get() {
	        return _interopRequireDefault(_Sprite).default;
	    }
	});
	
	var _SpriteRenderer = __webpack_require__(/*! ./SpriteRenderer */ 78);
	
	Object.defineProperty(exports, 'SpriteRenderer', {
	    enumerable: true,
	    get: function get() {
	        return _interopRequireDefault(_SpriteRenderer).default;
	    }
	});
	
	var _SpriteComponent = __webpack_require__(/*! ./SpriteComponent */ 77);
	
	Object.defineProperty(exports, 'SpriteComponent', {
	    enumerable: true,
	    get: function get() {
	        return _interopRequireDefault(_SpriteComponent).default;
	    }
	});
	
	var _SpriteRenderSystem = __webpack_require__(/*! ./SpriteRenderSystem */ 81);
	
	Object.defineProperty(exports, 'SpriteRenderSystem', {
	    enumerable: true,
	    get: function get() {
	        return _interopRequireDefault(_SpriteRenderSystem).default;
	    }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shaders = exports.shaders = {
	    texture: {
	        vert: __webpack_require__(/*! ./shader/multi-texture.vert */ 79),
	        frag: __webpack_require__(/*! ./shader/multi-texture.frag */ 80)
	    }
	};

/***/ },
/* 67 */
/*!***************************************!*\
  !*** ./plugins/sprites/src/Sprite.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	var _transform = __webpack_require__(/*! @fae/transform */ 68);
	
	var _textures = __webpack_require__(/*! @fae/textures */ 72);
	
	var _SpriteComponent = __webpack_require__(/*! ./SpriteComponent */ 77);
	
	var _SpriteComponent2 = _interopRequireDefault(_SpriteComponent);
	
	var _SpriteRenderer = __webpack_require__(/*! ./SpriteRenderer */ 78);
	
	var _SpriteRenderer2 = _interopRequireDefault(_SpriteRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A Sprite is a textured entity. It is implemented as a quad
	 * with a texture drawn on it.
	 *
	 * @class
	 * @mixes VisibilityComponent
	 * @mixes TransformComponent
	 * @mixes SpriteComponent
	 * @memberof sprites
	 */
	var Sprite = function (_ecs$Entity$with) {
	    _inherits(Sprite, _ecs$Entity$with);
	
	    /**
	     *
	     * @param {Texture} texture - The texture to use.
	     */
	    function Sprite() {
	        var texture = arguments.length <= 0 || arguments[0] === undefined ? _textures.Texture.EMPTY : arguments[0];
	
	        _classCallCheck(this, Sprite);
	
	        var _this = _possibleConstructorReturn(this, _ecs$Entity$with.call(this));
	
	        _this.renderGroupHint = _SpriteRenderer2.default;
	
	        _this._onTextureUpdateBinding = null;
	
	        // run texture component setter
	        _this.texture = texture;
	        return _this;
	    }
	
	    /**
	     * Destroys the sprite.
	     *
	     * @param {object|boolean} options - A boolean value will act as if all options are set to that value.
	     * @param {boolean} options.texture=false - If true the texture is also destroyed.
	     * @param {boolean} options.baseTexture=false - If true the texture's base texture is also destroyed.
	     */
	
	
	    Sprite.prototype.destroy = function destroy() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	        _ecs$Entity$with.prototype.destroy.call(this, options);
	
	        var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;
	
	        if (destroyTexture) {
	            this.texture.destroy(options);
	        }
	
	        this.tint = null;
	        this.blendMode = null;
	        this.shader = null;
	        this.vertexData = null;
	
	        this._texture = null;
	
	        if (this._onTextureUpdateBinding) {
	            this._onTextureUpdateBinding.detach();
	            this._onTextureUpdateBinding = null;
	        }
	    };
	
	    /**
	     * Called by the texture component when the texture changes.
	     *
	     * @protected
	     */
	
	
	    Sprite.prototype._onTextureChange = function _onTextureChange() {
	        if (this._onTextureUpdateBinding) {
	            this._onTextureUpdateBinding.detach();
	            this._onTextureUpdateBinding = null;
	        }
	
	        this._vertsDirty = true;
	
	        if (this._texture) {
	            this._onTextureUpdateBinding = this._texture.onUpdate.add(this._onTextureUpdate, this);
	
	            if (this._texture.ready) {
	                this._onTextureUpdate();
	            }
	        }
	    };
	
	    /**
	     * Called when the underlying texture updates.
	     *
	     * @private
	     */
	
	
	    Sprite.prototype._onTextureUpdate = function _onTextureUpdate() {
	        this._vertsDirty = true;
	    };
	
	    return Sprite;
	}(_core.ecs.Entity.with(_core.ecs.VisibilityComponent, // whether or not to render
	_transform.TransformComponent, // where to render
	_textures.TextureComponent, // what to render
	_SpriteComponent2.default // how to render
	));
	
	exports.default = Sprite;

/***/ },
/* 68 */
/*!****************************************!*\
  !*** ./plugins/transform/src/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Transform = __webpack_require__(/*! ./Transform */ 69);
	
	Object.defineProperty(exports, 'Transform', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Transform).default;
	  }
	});
	
	var _TransformComponent = __webpack_require__(/*! ./TransformComponent */ 70);
	
	Object.defineProperty(exports, 'TransformComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TransformComponent).default;
	  }
	});
	
	var _TransformUpdateSystem = __webpack_require__(/*! ./TransformUpdateSystem */ 71);
	
	Object.defineProperty(exports, 'TransformUpdateSystem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TransformUpdateSystem).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 69 */
/*!********************************************!*\
  !*** ./plugins/transform/src/Transform.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Generic class to deal with traditional 2D matrix transforms
	 * This will be reworked in v4.1, please do not use it yet unless you know what are you doing!
	 *
	 * @class
	 * @memberof transform
	 */
	var Transform = function () {
	    /**
	     * Constructs a new Transform object.
	     *
	     */
	    function Transform() {
	        _classCallCheck(this, Transform);
	
	        /**
	         * The parent transform to update against.
	         *
	         * @member {Transform}
	         * @default null
	         */
	        this.parent = null;
	
	        /**
	         * The global matrix transform, it is written to the passed in output buffer.
	         *
	         * @private
	         * @member {Matrix2d}
	         */
	        this._wt = new _core.math.Matrix2d();
	
	        /**
	         * The local matrix transform.
	         *
	         * @private
	         * @member {Matrix2d}
	         */
	        this._lt = new _core.math.Matrix2d();
	
	        /**
	         * Position component of transform.
	         *
	         * @private
	         * @member {Vector2d}
	         */
	        this._position = new _core.math.Vector2d();
	
	        /**
	         * Scale component of transform.
	         *
	         * @private
	         * @member {Vector2d}
	         */
	        this._scale = new _core.math.Vector2d(1, 1);
	
	        /**
	         * Skew component of transform.
	         *
	         * @private
	         * @member {Vector2d}
	         */
	        this._skew = new _core.math.Vector2d();
	
	        /**
	         * Pivot component of transform.
	         *
	         * @private
	         * @member {Vector2d}
	         */
	        this._pivot = new _core.math.Vector2d();
	
	        /**
	         * Rotation component of transform.
	         *
	         * @private
	         * @member {number}
	         */
	        this._rotation = 0;
	
	        // dirty trackers when updates are made to matrices
	        this._localUpdateId = 0;
	        this._worldUpdateId = 0;
	        this._cachedLocalUpdateId = -1;
	        this._cachedWorldUpdateId = -1;
	
	        // cache vars for expensive trig functions
	        this._sr = Math.sin(0);
	        this._cr = Math.cos(0);
	        this._cy = Math.cos(0); // skewY
	        this._sy = Math.sin(0); // skewY
	        this._sx = Math.sin(0); // skewX
	        this._cx = Math.cos(0); // skewX
	    }
	
	    /**
	     * The local transformation matrix.
	     *
	     * @member {Matrix2d}
	     */
	
	
	    /**
	     * Invalidates the cached parent transform which forces an update next time.
	     *
	     */
	    Transform.prototype.invalidate = function invalidate() {
	        this._cachedWorldUpdateId = -1;
	    };
	
	    /**
	     * Updates the world transform based on the passed transform.
	     *
	     */
	
	
	    Transform.prototype.update = function update() {
	        this.dirty = true;
	
	        var wt = this._wt;
	        var lt = this._lt;
	
	        if (this._localUpdateId !== this._cachedLocalUpdateId) {
	            var a = this._cr * this._scale.x;
	            var b = this._sr * this._scale.x;
	            var c = -this._sr * this._scale.y;
	            var d = this._cr * this._scale.y;
	
	            // skew
	            lt.a = this._cy * a + this._sy * c;
	            lt.b = this._cy * b + this._sy * d;
	            lt.c = this._sx * a + this._cx * c;
	            lt.d = this._sx * b + this._cx * d;
	
	            // translation
	            lt.tx = this._position.x - (this._pivot.x * lt.a + this._pivot.y * lt.c);
	            lt.ty = this._position.y - (this._pivot.x * lt.b + this._pivot.y * lt.d);
	
	            this._cachedLocalUpdateId = this._localUpdateId;
	            this._cachedWorldUpdateId = -1;
	        }
	
	        _core.debug.ASSERT(this._lt.valid(), 'Invalid local transform, property is set incorrectly somewhere...');
	
	        if (this.parent) {
	            if (this._cachedWorldUpdateId !== this.parent._worldUpdateId) {
	                var pt = this.parent._wt;
	
	                // multiply the parent matrix with the objects transform.
	                wt.a = lt.a * pt.a + lt.b * pt.c;
	                wt.b = lt.a * pt.b + lt.b * pt.d;
	                wt.c = lt.c * pt.a + lt.d * pt.c;
	                wt.d = lt.c * pt.b + lt.d * pt.d;
	                wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
	                wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
	
	                this._cachedWorldUpdateId = this.parent._worldUpdateId;
	                this._worldUpdateId++;
	            }
	        } else if (this._cachedWorldUpdateId !== this._worldUpdateId) {
	            wt.copy(this._lt);
	            this._worldUpdateId++;
	            this._cachedWorldUpdateId = this._worldUpdateId;
	        }
	
	        _core.debug.ASSERT(this._wt.valid(), 'Invalid world transform, property is set incorrectly somewhere...');
	    };
	
	    /**
	     * Destroys this transform object.
	     */
	
	
	    Transform.prototype.destroy = function destroy() {
	        this._wt = null;
	        this._lt = null;
	        this._position = null;
	        this._scale = null;
	        this._skew = null;
	        this._pivot = null;
	    };
	
	    _createClass(Transform, [{
	        key: 'localTransform',
	        get: function get() {
	            return this._lt;
	        }
	
	        /**
	         * The world transformation matrix.
	         *
	         * @member {Matrix2d}
	         */
	
	    }, {
	        key: 'worldTransform',
	        get: function get() {
	            return this._wt;
	        }
	
	        /**
	         * The X position.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'x',
	        get: function get() {
	            return this._position.x;
	        }
	
	        /**
	         * Sets X position of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._position.x = v;
	            this._localUpdateId++;
	        }
	
	        /**
	         * The Y position.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'y',
	        get: function get() {
	            return this._position.y;
	        }
	
	        /**
	         * Sets Y position of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._position.y = v;
	            this._localUpdateId++;
	        }
	
	        /**
	         * The X scale.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'scaleX',
	        get: function get() {
	            return this._scale.x;
	        }
	
	        /**
	         * Sets X scale of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._scale.x = v;
	            this._localUpdateId++;
	        }
	
	        /**
	         * The Y scale.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'scaleY',
	        get: function get() {
	            return this._scale.y;
	        }
	
	        /**
	         * Sets Y scale of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._scale.y = v;
	            this._localUpdateId++;
	        }
	
	        /**
	         * The X skew.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'skewX',
	        get: function get() {
	            return this._skew.x;
	        }
	
	        /**
	         * Sets X skew of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._skew.x = v;
	            this._sx = Math.sin(v);
	            this._cx = Math.cos(v);
	            this._localUpdateId++;
	        }
	
	        /**
	         * The Y skew.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'skewY',
	        get: function get() {
	            return this._skew.y;
	        }
	
	        /**
	         * Sets Y skew of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._skew.y = v;
	            this._cy = Math.cos(v);
	            this._sy = Math.sin(v);
	            this._localUpdateId++;
	        }
	
	        /**
	         * The X pivot.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'pivotX',
	        get: function get() {
	            return this._pivot.x;
	        }
	
	        /**
	         * Sets X pivot of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._pivot.x = v;
	            this._localUpdateId++;
	        }
	
	        /**
	         * The Y pivot.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'pivotY',
	        get: function get() {
	            return this._pivot.y;
	        }
	
	        /**
	         * Sets Y pivot of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._pivot.y = v;
	            this._localUpdateId++;
	        }
	
	        /**
	         * The rotation.
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'rotation',
	        get: function get() {
	            return this._rotation;
	        }
	
	        /**
	         * Sets rotation of the transform.
	         *
	         * @param {number} v - The value to set to.
	         */
	        ,
	        set: function set(v) {
	            this._rotation = v;
	            this._sr = Math.sin(v);
	            this._cr = Math.cos(v);
	            this._localUpdateId++;
	        }
	    }]);
	
	    return Transform;
	}();
	
	/**
	 * The identity transform.
	 *
	 * @static
	 * @constant
	 * @type {Transform}
	 */
	
	
	exports.default = Transform;
	Transform.IDENTITY = new Transform();

/***/ },
/* 70 */
/*!*****************************************************!*\
  !*** ./plugins/transform/src/TransformComponent.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = TransformComponent;
	
	var _Transform = __webpack_require__(/*! ./Transform */ 69);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function TransformComponent(Base) {
	  /**
	   * @class TransformComponent
	   * @memberof transform
	   */
	  return function (_Base) {
	    _inherits(_class, _Base);
	
	    /**
	     *
	     */
	    function _class() {
	      _classCallCheck(this, _class);
	
	      // eslint-disable-line prefer-rest-params
	
	      /**
	       * The transformation of the object.
	       *
	       * @member {Transform}
	       */
	      var _this = _possibleConstructorReturn(this, _Base.apply(this, arguments));
	
	      _this.transform = new _Transform2.default();
	
	      /**
	       * The last transform update ID that this object has seen.
	       *
	       * @private
	       * @member {number}
	       */
	      _this._cachedTransformUpdateId = -1;
	      return _this;
	    }
	
	    return _class;
	  }(Base);
	}

/***/ },
/* 71 */
/*!********************************************************!*\
  !*** ./plugins/transform/src/TransformUpdateSystem.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	var _TransformComponent = __webpack_require__(/*! ./TransformComponent */ 70);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: Transforms can have parents, but it is possible here to have
	// a child's update() called first before the parent updates.
	// Need to sort by parents in some efficient way.
	
	/**
	 * @class
	 * @memberof transform
	 */
	var TransformUpdateSystem = function (_ecs$System) {
	    _inherits(TransformUpdateSystem, _ecs$System);
	
	    /**
	     * @param {Renderer} renderer - The renderer to use.
	     * @param {number} priority - The priority of the system, higher means earlier.
	     * @param {number} frequency - How often to run the update loop. `1` means every
	     *  time, `2` is every other time, etc.
	     */
	    function TransformUpdateSystem(renderer) {
	        var priority = arguments.length <= 1 || arguments[1] === undefined ? _core.ecs.System.PRIORITY.PLUGIN : arguments[1];
	        var frequency = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	        _classCallCheck(this, TransformUpdateSystem);
	
	        return _possibleConstructorReturn(this, _ecs$System.call(this, renderer, priority, frequency));
	    }
	
	    /**
	     * Returns true if the entity is eligible to the system, false otherwise.
	     *
	     * @param {Entity} entity - The entity to test.
	     * @return {boolean} True if entity should be included.
	     */
	
	
	    TransformUpdateSystem.prototype.test = function test(entity) {
	        return entity.hasComponent(_TransformComponent2.default);
	    };
	
	    /**
	     * Update the entity's transform matrix.
	     *
	     * @param {Entity} entity - The entity to update
	     */
	
	
	    TransformUpdateSystem.prototype.update = function update(entity) {
	        entity.transform.update();
	    };
	
	    return TransformUpdateSystem;
	}(_core.ecs.System);
	
	exports.default = TransformUpdateSystem;
	
	
	_core.render.Renderer.addDefaultSystem(TransformUpdateSystem);

/***/ },
/* 72 */
/*!***************************************!*\
  !*** ./plugins/textures/src/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Texture = __webpack_require__(/*! ./Texture */ 73);
	
	Object.defineProperty(exports, 'Texture', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Texture).default;
	  }
	});
	
	var _TextureComponent = __webpack_require__(/*! ./TextureComponent */ 76);
	
	Object.defineProperty(exports, 'TextureComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TextureComponent).default;
	  }
	});
	
	var _TextureSource = __webpack_require__(/*! ./TextureSource */ 74);
	
	Object.defineProperty(exports, 'TextureSource', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TextureSource).default;
	  }
	});
	
	var _TextureUVs = __webpack_require__(/*! ./TextureUVs */ 75);
	
	Object.defineProperty(exports, 'TextureUVs', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TextureUVs).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 73 */
/*!*****************************************!*\
  !*** ./plugins/textures/src/Texture.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _miniSignals = __webpack_require__(/*! mini-signals */ 8);
	
	var _miniSignals2 = _interopRequireDefault(_miniSignals);
	
	var _shapes = __webpack_require__(/*! @fae/shapes */ 17);
	
	var _TextureSource = __webpack_require__(/*! ./TextureSource */ 74);
	
	var _TextureSource2 = _interopRequireDefault(_TextureSource);
	
	var _TextureUVs = __webpack_require__(/*! ./TextureUVs */ 75);
	
	var _TextureUVs2 = _interopRequireDefault(_TextureUVs);
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A Texture is a wrapper around a TextureSource. It represents the frame of the
	 * source to actually draw.
	 *
	 * @class
	 * @memberof textures
	 */
	var Texture = function () {
	    /**
	     * @param {TextureSource|CanvasImageSource|Texture} source - The source to wrap.
	     * @param {Rectangle} frame - The portion of the source to operate with.
	     * @param {Rectangle} orig - The original area of this frame, before it was put in an atlas (if it was).
	     * @param {Rectangle} trim - The trimmed area of this frame, after it was put in an atlas (if it was).
	     * @param {number} rotation - The rotation of the frame (in radians), after it was put in an atlas (if it was).
	     *  This rotation is counteracted to draw an "unrotated" version of the frame.
	     */
	    function Texture(source) {
	        var frame = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	        var orig = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	        var trim = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	        var rotation = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	
	        _classCallCheck(this, Texture);
	
	        // massage source into a TextureSource instance.
	        if (source instanceof Texture) {
	            source = source.source;
	        } else if (!(source instanceof _TextureSource2.default)) {
	            source = new _TextureSource2.default(source);
	        }
	
	        _core.debug.ASSERT(source instanceof _TextureSource2.default, 'Source passed to Texture is not a TextureSource.');
	
	        /**
	         * The source for this texture to represent.
	         *
	         * @member {TextureSource}
	         */
	        this.source = source;
	
	        /**
	         * The trimmed area of the frame after it was packed into an atlas (if it was).
	         *
	         * @member {Rectangle}
	         */
	        this.trim = trim;
	
	        /**
	         * The original area of the frame before it was packed into an atlas (if it was).
	         *
	         * @member {Rectangle}
	         */
	        this.orig = orig || frame;
	
	        /**
	         * Dispatched when the texture is updated.
	         *
	         * @member {Signal}
	         */
	        this.onUpdate = new _miniSignals2.default();
	
	        /**
	         * Does this texture have an explicit frame, or do we use the whole image?
	         *
	         * @private
	         * @member {boolean}
	         */
	        this._explicitFrame = !!frame;
	
	        /**
	         * The frame of the source to represent.
	         *
	         * @private
	         * @member {Rectangle}
	         */
	        this._frame = null;
	
	        /**
	         * The uvs to draw with.
	         *
	         * @member {UVs}
	         */
	        this._uvs = new _TextureUVs2.default();
	
	        /**
	         * The rotation of the texture, after it was packed into an atlas (if it was).
	         *
	         * @member {number}
	         */
	        this._rotation = rotation === true ? -Math.PI / 2 : rotation;
	
	        this._onSourceUpdateBinding = null;
	        this._onSourceReadyBinding = null;
	
	        // setup frame
	        if (source.ready) {
	            if (!this._explicitFrame) {
	                frame = new _shapes.Rectangle(0, 0, source.width, source.height);
	
	                this._onSourceUpdateBinding = source.onUpdate.add(this._onSourceUpdate, this);
	            }
	
	            this.frame = frame;
	        } else {
	            this._onSourceReadyBinding = source.onReady.once(this._onSourceReady, this);
	        }
	    }
	
	    /**
	     * Is the source loaded and ready to go?
	     *
	     * @member {boolean}
	     */
	
	
	    /**
	     * Updates the texture on the GPU.
	     *
	     * @return {Texture} Returns itself.
	     */
	    Texture.prototype.update = function update() {
	        this.source.update();
	
	        return this;
	    };
	
	    /**
	     * Creates a new texture that represents the same region as this one.
	     *
	     * @return {Texture} The clone.
	     */
	
	
	    Texture.prototype.clone = function clone() {
	        return new Texture(this.source, this.frame, this.orig, this.trim, this.rotation);
	    };
	
	    /**
	     * Destroys this texture.
	     *
	     * @param {object|boolean} options - A boolean value will act as if all options are set to that value.
	     * @param {boolean} options.destroySource=false - Whether to destroy the texture source as well.
	     */
	
	
	    Texture.prototype.destroy = function destroy() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	        var destroySource = typeof options === 'boolean' ? options : options && options.baseTexture;
	
	        if (this._onSourceUpdateBinding) this._onSourceUpdateBinding.detach();
	        if (this._onSourceReadyBinding) this._onSourceReadyBinding.detach();
	
	        this._onSourceUpdateBinding = null;
	        this._onSourceReadyBinding = null;
	
	        if (destroySource) {
	            this.source.destroy();
	        }
	
	        this.source = null;
	        this.trim = null;
	        this.orig = null;
	
	        this.onUpdate.detachAll();
	        this.onUpdate = null;
	
	        this._frame = null;
	        this._uvs = null;
	    };
	
	    /**
	     * Called when the source is ready.
	     *
	     * @private
	     */
	
	
	    Texture.prototype._onSourceReady = function _onSourceReady() {
	        if (this._explicitFrame) {
	            // validate and update frame properties by calling setter
	            this.frame = this._frame;
	        } else {
	            this.frame = new _shapes.Rectangle(0, 0, this.source.width, this.source.height);
	        }
	    };
	
	    /**
	     * Called when the source is updated.
	     *
	     * @private
	     */
	
	
	    Texture.prototype._onSourceUpdate = function _onSourceUpdate() {
	        this._frame.width = this.source.width;
	        this._frame.height = this.source.height;
	
	        this.onUpdate.dispatch();
	    };
	
	    /**
	     * Updates the UV coords of this texture.
	     *
	     * @private
	     */
	
	
	    Texture.prototype._updateUVs = function _updateUVs() {
	        this._uvs.set(this._frame, this.source, this.rotation);
	    };
	
	    _createClass(Texture, [{
	        key: 'ready',
	        get: function get() {
	            return !!((this.source ? this.source.ready : false) && this.orig);
	        }
	
	        /**
	         * The frame of the source to represent.
	         *
	         * @member {Rectangle}
	         */
	
	    }, {
	        key: 'frame',
	        get: function get() {
	            return this._frame;
	        }
	
	        /**
	         * @param {Rectangle} v - The new frame.
	         */
	        ,
	        set: function set(v) {
	            this._frame = v;
	            this._explicitFrame = true;
	
	            _core.debug.ASSERT(v.x >= 0 && v.y >= 0 && v.x + v.width <= this.source.width && v.y + v.height <= this.source.height, 'Frame for texture doesn\'t fit within the source size');
	
	            if (!this.trim && !this.rotate) {
	                this.orig = v;
	            }
	
	            this._updateUVs();
	        }
	
	        /**
	         * The rotation of the texture frame, after it was packed into an atlas (if it was).
	         *
	         * @member {number}
	         */
	
	    }, {
	        key: 'rotation',
	        get: function get() {
	            return this._rotation;
	        }
	
	        /**
	         * @param {number} v - The rotation in radians.
	         */
	        ,
	        set: function set(v) {
	            this._rotation = v;
	            this._updateUVs();
	        }
	
	        /**
	         * Width of the texture in pixels.
	         *
	         */
	
	    }, {
	        key: 'width',
	        get: function get() {
	            return this.orig ? this.orig.width : 0;
	        }
	
	        /**
	         * Height of the texture in pixels.
	         *
	         */
	
	    }, {
	        key: 'height',
	        get: function get() {
	            return this.orig ? this.orig.height : 0;
	        }
	    }]);
	
	    return Texture;
	}();
	
	/**
	 * An empty texture instance.
	 *
	 * @static
	 * @constant
	 * @memberof Texture
	 * @type {Texture}
	 */
	
	
	exports.default = Texture;
	Texture.EMPTY = new Texture(_TextureSource2.default.EMPTY);
	Texture.EMPTY.destroy = function _noop() {/* empty */}; // eslint-disable-line brace-style

/***/ },
/* 74 */
/*!***********************************************!*\
  !*** ./plugins/textures/src/TextureSource.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _miniSignals = __webpack_require__(/*! mini-signals */ 8);
	
	var _miniSignals2 = _interopRequireDefault(_miniSignals);
	
	var _bitTwiddle = __webpack_require__(/*! bit-twiddle */ 48);
	
	var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A TextureSource is a wrapper around a raw object that can be drawn with the
	 * WebGL API. It contains information necessary for managing that source.
	 *
	 * @class
	 * @memberof textures
	 */
	var TextureSource = function () {
	    /**
	     * @param {CanvasImageSource|RenderTarget} source - The drawable source.
	     * @param {number} scaleMode - How to scale the texture source. Either `WebGLRenderingContext.LINEAR`
	     *  or `WebGLRenderingContext.NEAREST`.
	     * @param {number} wrapMode - How to scale the texture source. Either `WebGLRenderingContext.CLAMP_TO_EDGE`,
	     *  `WebGLRenderingContext.REPEAT`, or `WebGLRenderingContext.MIRRORED_REPEAT`.
	     * @param {boolean} mipmap - Whether a mipmap should be generated for this texture.
	     */
	    function TextureSource(source) {
	        var scaleMode = arguments.length <= 1 || arguments[1] === undefined ? TextureSource.defaultScaleMode : arguments[1];
	        var wrapMode = arguments.length <= 2 || arguments[2] === undefined ? TextureSource.defaultWrapMode : arguments[2];
	        var mipmap = arguments.length <= 3 || arguments[3] === undefined ? TextureSource.defaultMipMap : arguments[3];
	
	        _classCallCheck(this, TextureSource);
	
	        /**
	         * The width of the source, set when the source has loaded
	         *
	         * @member {number}
	         * @readonly
	         */
	        this.width = 0;
	
	        /**
	         * The height of the source, set when the source has loaded
	         *
	         * @member {number}
	         * @readonly
	         */
	        this.height = 0;
	
	        /**
	         * Set to true once the source has successfully loaded.
	         *
	         * This is never true if the underlying source fails to load or has no
	         * texture data.
	         *
	         * @member {boolean}
	         * @readonly
	         */
	        this.ready = false;
	
	        /**
	         * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
	         * Built-in blend modes, and shaders written for default value. Change it on
	         * your own risk.
	         *
	         * @member {boolean}
	         * @default true
	         */
	        this.premultipliedAlpha = true;
	
	        /**
	         * Wether or not the texture is a power of two, try to use power of two
	         * textures as much as you can.
	         *
	         * @private
	         * @member {boolean}
	         */
	        this.isPowerOfTwo = false;
	
	        /**
	         * The scale mode to apply when scaling this texture
	         *
	         * Valid values are:
	         *
	         * - `WebGLRenderingContext.NEAREST`
	         * - `WebGLRenderingContext.LINEAR`
	         *
	         * You can change the default used with {@link TextureSource.defaultScaleMode}.
	         *
	         * @member {number}
	         */
	        this.scaleMode = scaleMode;
	
	        /**
	         * WebGL Texture wrap mode.
	         *
	         * Valid values are:
	         *
	         * - `WebGLRenderingContext.CLAMP_TO_EDGE`
	         * - `WebGLRenderingContext.REPEAT`
	         * - `WebGLRenderingContext.MIRRORED_REPEAT`
	         *
	         * You can change the default used with {@link TextureSource.defaultWrapMode}.
	         *
	         * @member {number}
	         */
	        this.wrapMode = wrapMode;
	
	        /**
	         * Set this to true if a mipmap of this texture needs to be generated. This
	         * value needs to be set before the texture is used.
	         * Also the texture must be a power of two size to work
	         *
	         * You can change the default used with {@link TextureSource.defaultMipMap}.
	         *
	         * @member {boolean}
	         */
	        this.mipmap = mipmap;
	
	        /**
	         * Dispatched when the source has loaded, if the source is already
	         * loaded when this object is created, this will be dispatched 1 tick
	         * after creation.
	         *
	         * @member {Signal}
	         */
	        this.onReady = new _miniSignals2.default();
	
	        /**
	         * Dispatched if a source fails to load. This usually only happens
	         * for sources that are not yet loaded when this object is created.
	         *
	         * @member {Signal}
	         */
	        this.onError = new _miniSignals2.default();
	
	        /**
	         * Dispatched when this source is updated.
	         *
	         * @member {Signal}
	         */
	        this.onUpdate = new _miniSignals2.default();
	
	        /**
	         * The source element to draw.
	         *
	         * @private
	         * @member {CanvasImageSource}
	         */
	        this._source = null;
	
	        /**
	         * The tracker for the video update loop if needed.
	         *
	         * @private
	         * @member {number}
	         */
	        this._updateLoop = 0;
	
	        /**
	         * A map of renderer IDs to GLTexture instances.
	         *
	         * @member {object<number, WebGLTexture>}
	         * @private
	         */
	        this._glTextures = {};
	        this._enabled = 0;
	        this._id = 0;
	
	        this._boundOnSourceLoad = this._onSourceLoad.bind(this);
	        this._boundOnSourceError = this._onSourceError.bind(this);
	        this._boundOnSourcePlay = this._onSourcePlay.bind(this);
	        this._boundOnSourceStop = this._onSourceStop.bind(this);
	        this._boundVideoUpdateLoop = this._videoUpdateLoop.bind(this);
	
	        this._onContextChangeBindings = {};
	
	        // run source setter
	        this.source = source;
	
	        var c = WebGLRenderingContext;
	        var s = this.scaleMode;
	        var w = this.wrapMode;
	
	        _core.debug.ASSERT(s === c.LINEAR || s === c.NEAREST, 'Invalid scaleMode: ' + s + ' (' + (typeof s === 'undefined' ? 'undefined' : _typeof(s)) + ').');
	        _core.debug.ASSERT(w === c.CLAMP_TO_EDGE || w === c.REPEAT || w === c.MIRRORED_REPEAT, 'Invalid warpMode: ' + w + ' (' + (typeof w === 'undefined' ? 'undefined' : _typeof(w)) + ').'); // eslint-disable-line max-len
	        _core.debug.ASSERT(typeof this.mipmap === 'boolean', 'Invalid mipmap value: ' + this.mipmap + ' (' + _typeof(this.mipmap) + ').');
	    }
	
	    /**
	     * The source element to draw.
	     *
	     * @member {CanvasImageSource}
	     */
	
	
	    /**
	     * Updates the texture properties based on the source.
	     *
	     * @param {Renderer} renderer - The renderer to update on. If not passed, all are updated.
	     * @param {boolean} silent - Should we skip dispatching the update event?
	     * @return {TextureSource} Returns itself.
	     */
	    TextureSource.prototype.update = function update() {
	        var _this = this;
	
	        var renderer = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	        var silent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        this.width = this.source.naturalWidth || this.source.videoWidth || this.source.width;
	        this.height = this.source.naturalHeight || this.source.videoHeight || this.source.height;
	
	        this.isPowerOfTwo = _bitTwiddle2.default.isPow2(this.width) && _bitTwiddle2.default.isPow2(this.height);
	
	        if (renderer) {
	            this._update(renderer.uid);
	        } else {
	            Object.keys(this._glTextures).forEach(function (k) {
	                return _this._update(k);
	            });
	        }
	
	        if (this.source.currentTime && !this.source.paused && !this.source.ended) {
	            this._onSourcePlay();
	        }
	
	        if (!silent) {
	            this.onUpdate.dispatch();
	        }
	
	        return this;
	    };
	
	    /**
	     * Disposes of all GLTexture instances and clears them from the GPU for all renderers.
	     *
	     * @param {Renderer} renderer - The renderer to dispose on. If not passed, all are disposed.
	     */
	
	
	    TextureSource.prototype.dispose = function dispose() {
	        var _this2 = this;
	
	        var renderer = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	        if (renderer) {
	            this._dispose(renderer.uid);
	        } else {
	            Object.keys(this._glTextures).forEach(function (k) {
	                return _this2._dispose(k);
	            });
	        }
	    };
	
	    /**
	     * Gets the underlying GLTexture instance for a particular renderer, creating
	     * one if necessary.
	     *
	     * @param {Renderer} renderer - The renderer to get a GLTexture for.
	     * @return {GLTexture} The GLTexture to use, or `null` if it hasn't loaded yet.
	     */
	
	
	    TextureSource.prototype.getGlTexture = function getGlTexture(renderer) {
	        if (!this.ready) return null;
	
	        // support for RenderTarget as source.
	        if (this.source.framebuffer) {
	            if (this.source.framebuffer.texture) {
	                return this.source.framebuffer.texture;
	            }
	
	            _core.debug.ASSERT(false, 'Tried to render a RenderTexture source that has no GLTexture created.');
	
	            return null;
	        }
	
	        var glTexture = this._glTextures[renderer.uid];
	
	        if (!glTexture) {
	            glTexture = new _core.glutil.GLTexture(renderer.gl);
	            glTexture.premultiplyAlpha = true;
	
	            this._glTextures[renderer.uid] = glTexture;
	
	            this._onContextChangeBindings[renderer.uid] = renderer.onContextChange.add(this._onContextChange, this);
	
	            // wrap mode
	            if (this.isPowerOfTwo) {
	                if (this.mipmap) {
	                    glTexture.enableMipmap();
	                }
	
	                if (this.wrapMode === WebGLRenderingContext.CLAMP_TO_EDGE) {
	                    glTexture.enableWrapClamp();
	                } else if (this.wrapMode === WebGLRenderingContext.REPEAT) {
	                    glTexture.enableWrapRepeat();
	                } else {
	                    glTexture.enableWrapMirrorRepeat();
	                }
	            } else {
	                glTexture.enableWrapClamp();
	            }
	
	            // scale mode
	            if (this.scaleMode === WebGLRenderingContext.NEAREST) {
	                glTexture.enableNearestScaling();
	            } else {
	                glTexture.enableLinearScaling();
	            }
	
	            this._update(renderer.uid);
	        }
	
	        return glTexture;
	    };
	
	    /**
	     * Destroys this texture source.
	     *
	     */
	
	
	    TextureSource.prototype.destroy = function destroy() {
	        this.dispose();
	
	        this._unbindSourceEvents();
	        this.source = null;
	
	        this.onUpdate.detachAll();
	        this.onUpdate = null;
	
	        this.onReady.detachAll();
	        this.onReady = null;
	
	        this.onError.detachAll();
	        this.onError = null;
	    };
	
	    /**
	     * Updates an internal texture.
	     *
	     * @private
	     * @param {number} uid - The renderer uid to update for.
	     */
	
	
	    TextureSource.prototype._update = function _update(uid) {
	        var glTexture = this._glTextures[uid];
	
	        if (glTexture) {
	            glTexture.upload(this.source);
	        }
	    };
	
	    /**
	     * Disposes of an internal texture.
	     *
	     * @private
	     * @param {number} uid - The renderer uid to dispose for.
	     */
	
	
	    TextureSource.prototype._dispose = function _dispose(uid) {
	        var glTexture = this._glTextures[uid];
	
	        if (glTexture) {
	            glTexture.destroy();
	
	            delete this._glTextures[uid];
	        }
	    };
	
	    /**
	     * Loads a new source.
	     *
	     * @private
	     * @param {CanvasImageSource} source - The source to load.
	     */
	
	
	    TextureSource.prototype._load = function _load(source) {
	        this.ready = false;
	        this._unbindSourceEvents();
	
	        this._source = source;
	
	        if (!source) return;
	
	        // handle RenderTarget
	        if (source.framebuffer) {
	            _core.debug.ASSERT(source.width && source.height, 'RenderTarget source is missing width or height.');
	
	            this._onSourceLoad();
	        }
	        // handle canvas
	        else if (source.getContext) {
	                _core.debug.ASSERT(source.width && source.height, 'Canvas source is missing width or height.');
	
	                this._onSourceLoad();
	            } else {
	                this._bindSourceEvents();
	
	                // handle image
	                if (typeof source.src === 'string') {
	                    // complete is marked as true if the src is empty, so need to check both.
	                    // if `src` is empty, we assume they will assign one later, and our events will catch it.
	                    if (source.complete && source.src) {
	                        this._onSourceLoad();
	                    }
	                }
	                // handle video
	                else if (source.complete) {
	                        this._onSourceLoad();
	                    }
	            }
	    };
	
	    /**
	     * Called when the context changes.
	     *
	     * @param {Renderer} renderer - The renderer that had it's context restored.
	     */
	
	
	    TextureSource.prototype._onContextChange = function _onContextChange(renderer) {
	        this._dispose(renderer.uid);
	    };
	
	    /**
	     * Called when the underlying source is loaded and ready to be used.
	     *
	     * @private
	     */
	
	
	    TextureSource.prototype._onSourceLoad = function _onSourceLoad() {
	        var _this3 = this;
	
	        // if we have no width/height, consider the load a failure.
	        this.update(null, true);
	        if (!this.width || !this.height) {
	            this._onSourceError({ message: 'Source failed to load.' });
	
	            return;
	        }
	
	        // unbind events related to loading, but keep non-loading related ones.
	        this._unbindSourceEvents(true);
	
	        // update
	        this.ready = true;
	        this.update();
	
	        // since _onSourceLoad can be called synchronously, wait a tick before dispatching.
	        setTimeout(function () {
	            return _this3.onReady.dispatch();
	        }, 0);
	    };
	
	    /**
	     * Called if the underlying source has an error during loading.
	     *
	     * @private
	     * @param {object} event - The error event.
	     */
	
	
	    TextureSource.prototype._onSourceError = function _onSourceError(event) {
	        var _this4 = this;
	
	        this._unbindSourceEvents();
	
	        // since _onSourceError can be called synchronously, wait a tick before dispatching.
	        setTimeout(function () {
	            return _this4.onError.dispatch(new Error(event.message || 'Unable to load source.'));
	        }, 0);
	    };
	
	    /**
	     * Runs the update loop when the video is ready to play
	     *
	     * @private
	     */
	
	
	    TextureSource.prototype._onSourcePlay = function _onSourcePlay() {
	        cancelAnimationFrame(this._updateLoop);
	        this._videoUpdateLoop();
	    };
	
	    /**
	     * Stops the update loop when the video is paused
	     *
	     * @private
	     */
	
	
	    TextureSource.prototype._onSourceStop = function _onSourceStop() {
	        cancelAnimationFrame(this._updateLoop);
	    };
	
	    /**
	     * Updates the texture for the video element.
	     *
	     * @private
	     */
	
	
	    TextureSource.prototype._videoUpdateLoop = function _videoUpdateLoop() {
	        this._updateLoop = requestAnimationFrame(this._boundVideoUpdateLoop);
	        this.update(null, true);
	    };
	
	    /**
	     * Binds listeners to a source image or video.
	     *
	     * @private
	     * @param {boolean} loadOnly - Only manage events related to loading.
	     */
	
	
	    TextureSource.prototype._bindSourceEvents = function _bindSourceEvents() {
	        var loadOnly = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	        if (!this._source) return;
	
	        this._source.addEventListener('load', this._boundOnSourceLoad);
	        this._source.addEventListener('canplay', this._boundOnSourceLoad);
	        this._source.addEventListener('canplaythrough', this._boundOnSourceLoad);
	        this._source.addEventListener('error', this._boundOnSourceError);
	
	        if (!loadOnly) {
	            this._source.addEventListener('play', this._boundOnSourcePlay);
	            this._source.addEventListener('pause', this._boundOnSourceStop);
	        }
	    };
	
	    /**
	     * Unbinds listeners from a source image or video.
	     *
	     * @private
	     * @param {boolean} loadOnly - Only manage events related to loading.
	     */
	
	
	    TextureSource.prototype._unbindSourceEvents = function _unbindSourceEvents() {
	        var loadOnly = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	        if (!this._source) return;
	
	        this._source.removeEventListener('load', this._boundOnSourceLoad);
	        this._source.removeEventListener('canplay', this._boundOnSourceLoad);
	        this._source.removeEventListener('canplaythrough', this._boundOnSourceLoad);
	        this._source.removeEventListener('error', this._boundOnSourceError);
	
	        if (!loadOnly) {
	            this._source.removeEventListener('play', this._boundOnSourcePlay);
	            this._source.removeEventListener('pause', this._boundOnSourceStop);
	        }
	    };
	
	    _createClass(TextureSource, [{
	        key: 'source',
	        get: function get() {
	            return this._source;
	        }
	
	        /**
	         * @param {CanvasImageSource} v - new source.
	         */
	        ,
	        set: function set(v) {
	            this._load(v);
	        }
	    }]);
	
	    return TextureSource;
	}();
	
	/**
	 * The default scale mode to use when a new source is created, and no
	 * scale mode is specified.
	 *
	 * @static
	 * @constant
	 * @memberof TextureSource
	 * @type {number}
	 * @default WebGLRenderingContext.LINEAR
	 */
	
	
	exports.default = TextureSource;
	TextureSource.defaultScaleMode = WebGLRenderingContext.LINEAR;
	
	/**
	 * The default mipmap mode to use when a new source is created, and no
	 * mipmap mode is specified.
	 *
	 * @static
	 * @constant
	 * @memberof TextureSource
	 * @type {boolean}
	 * @default true
	 */
	TextureSource.defaultMipMap = true;
	
	/**
	 * The default wrapping mode to use when a new source is created, and no
	 * wrapping mode is specified.
	 *
	 * @static
	 * @constant
	 * @memberof TextureSource
	 * @type {number}
	 * @default WebGLRenderingContext.CLAMP_TO_EDGE
	 */
	TextureSource.defaultWrapMode = WebGLRenderingContext.CLAMP_TO_EDGE;
	
	/**
	 * An empty texture source instance.
	 *
	 * @static
	 * @constant
	 * @memberof TextureSource
	 * @type {TextureSource}
	 */
	TextureSource.EMPTY = new TextureSource();
	TextureSource.EMPTY.destroy = function _noop() {/* empty */}; // eslint-disable-line brace-style

/***/ },
/* 75 */
/*!********************************************!*\
  !*** ./plugins/textures/src/TextureUVs.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Helper to store and calculate the UVs of a texture.
	 *
	 * @class
	 * @memberof textures
	 */
	var TextureUVs = function () {
	        /**
	         *
	         */
	        function TextureUVs() {
	                _classCallCheck(this, TextureUVs);
	
	                this.x0 = 0;
	                this.y0 = 0;
	
	                this.x1 = 1;
	                this.y1 = 0;
	
	                this.x2 = 1;
	                this.y2 = 1;
	
	                this.x3 = 0;
	                this.y3 = 1;
	
	                this.uvsUint32 = new Uint32Array(4);
	        }
	
	        /**
	         * Calculates the UVs based on the given frames.
	         *
	         * @param {Rectangle} frame - The frame of the region in the texture.
	         * @param {Rectangle} baseFrame - The frame of the full texture.
	         * @param {number} rotation - Rotation of frame, in radians.
	         * @private
	         */
	
	
	        TextureUVs.prototype.set = function set(frame, baseFrame, rotation) {
	                var tw = baseFrame.width;
	                var th = baseFrame.height;
	
	                this.x0 = frame.x / tw;
	                this.y0 = frame.y / th;
	
	                this.x1 = (frame.x + frame.width) / tw;
	                this.y1 = frame.y / th;
	
	                this.x2 = (frame.x + frame.width) / tw;
	                this.y2 = (frame.y + frame.height) / th;
	
	                this.x3 = frame.x / tw;
	                this.y3 = (frame.y + frame.height) / th;
	
	                if (rotation) {
	                        // coordinates of center
	                        var cx = frame.x / tw + frame.width / 2 / tw;
	                        var cy = frame.y / th + frame.height / 2 / th;
	
	                        // rotation values
	                        var sr = Math.sin(rotation);
	                        var cr = Math.cos(rotation);
	
	                        this.x0 = cx + ((this.x0 - cx) * cr - (this.y0 - cy) * sr);
	                        this.y0 = cy + ((this.x0 - cx) * sr + (this.y0 - cy) * cr);
	
	                        this.x1 = cx + ((this.x1 - cx) * cr - (this.y1 - cy) * sr);
	                        this.y1 = cy + ((this.x1 - cx) * sr + (this.y1 - cy) * cr);
	
	                        this.x2 = cx + ((this.x2 - cx) * cr - (this.y2 - cy) * sr);
	                        this.y2 = cy + ((this.x2 - cx) * sr + (this.y2 - cy) * cr);
	
	                        this.x3 = cx + ((this.x3 - cx) * cr - (this.y3 - cy) * sr);
	                        this.y3 = cy + ((this.x3 - cx) * sr + (this.y3 - cy) * cr);
	                }
	
	                this.uvsUint32[0] = (this.y0 * 65535 & 0xFFFF) << 16 | this.x0 * 65535 & 0xFFFF;
	                this.uvsUint32[1] = (this.y1 * 65535 & 0xFFFF) << 16 | this.x1 * 65535 & 0xFFFF;
	                this.uvsUint32[2] = (this.y2 * 65535 & 0xFFFF) << 16 | this.x2 * 65535 & 0xFFFF;
	                this.uvsUint32[3] = (this.y3 * 65535 & 0xFFFF) << 16 | this.x3 * 65535 & 0xFFFF;
	        };
	
	        return TextureUVs;
	}();
	
	exports.default = TextureUVs;

/***/ },
/* 76 */
/*!**************************************************!*\
  !*** ./plugins/textures/src/TextureComponent.js ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = TextureComponent;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function TextureComponent(Base) {
	  /**
	   * @class TextureComponent
	   * @memberof textures
	   */
	  return function (_Base) {
	    _inherits(_class, _Base);
	
	    /**
	     * @memberof TextureComponent
	     */
	    function _class() {
	      _classCallCheck(this, _class);
	
	      // eslint-disable-line prefer-rest-params
	
	      /**
	       * The texture object.
	       *
	       * @private
	       * @member {Texture}
	       */
	      var _this = _possibleConstructorReturn(this, _Base.apply(this, arguments));
	
	      _this._texture = null;
	
	      /**
	       * The X coord of the attachment point of the texture.
	       *
	       * @private
	       * @member {number}
	       */
	      _this._anchorX = 0;
	
	      /**
	       * The Y coord of the attachment point of the texture.
	       *
	       * @private
	       * @member {number}
	       */
	      _this._anchorY = 0;
	
	      /**
	       * Tracker for if the vertices are dirty.
	       *
	       * @private
	       * @member {number}
	       */
	      _this._anchorDirty = true;
	      return _this;
	    }
	
	    /**
	     * The texture to use.
	     *
	     * @member {Texture}
	     */
	
	
	    /**
	     * Called when the underlying texture changes.
	     *
	     * @protected
	     * @abstract
	     */
	    _class.prototype._onTextureChange = function _onTextureChange() {
	      /* empty */
	    };
	
	    _createClass(_class, [{
	      key: "texture",
	      get: function get() {
	        return this._texture;
	      }
	
	      /**
	       * @param {Texture} v - The new texture.
	       */
	      ,
	      set: function set(v) {
	        if (this._texture === v) return;
	
	        this._texture = v;
	
	        this._onTextureChange();
	      }
	
	      /**
	       * The X coord of the attachment point of the texture.
	       *
	       * @member {number}
	       */
	
	    }, {
	      key: "anchorX",
	      get: function get() {
	        return this._anchorX;
	      }
	
	      /**
	       * @param {number} v - The new anchor.
	       */
	      ,
	      set: function set(v) {
	        if (this._anchorX === v) return;
	
	        this._anchorX = v;
	        this._anchorDirty = true;
	      }
	
	      /**
	       * The Y coord of the attachment point of the texture.
	       *
	       * @member {number}
	       */
	
	    }, {
	      key: "anchorY",
	      get: function get() {
	        return this._anchorY;
	      }
	
	      /**
	       * @param {number} v - The new anchor.
	       */
	      ,
	      set: function set(v) {
	        if (this._anchorY === v) return;
	
	        this._anchorY = v;
	        this._anchorDirty = true;
	      }
	    }]);
	
	    return _class;
	  }(Base);
	}

/***/ },
/* 77 */
/*!************************************************!*\
  !*** ./plugins/sprites/src/SpriteComponent.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = SpriteComponent;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function SpriteComponent(Base) {
	  /**
	   * @class SpriteComponent
	   * @memberof sprites
	   */
	  return function (_Base) {
	    _inherits(_class, _Base);
	
	    /**
	     *
	     */
	    function _class() {
	      _classCallCheck(this, _class);
	
	      // eslint-disable-line prefer-rest-params
	
	      /**
	       * The tint to apply to the sprite. A value of white will render without
	       * any tinting. This works because this color value is multiplied against
	       * the actual color value in the texture (per pixel).
	       *
	       * @member {Color}
	       */
	      var _this = _possibleConstructorReturn(this, _Base.apply(this, arguments));
	
	      _this.tint = _core.util.Color.WHITE.clone();
	
	      /**
	       * The blend mode to be applied to the sprite.
	       *
	       * @member {BlendMode}
	       * @default BlendMode.NORMAL
	       */
	      _this.blendMode = _core.util.BlendMode.NORMAL;
	
	      /**
	       * The vertex data used to draw the sprite.
	       *
	       * @readonly
	       * @member {Float32Array}
	       */
	      _this.vertexData = new Float32Array(8);
	
	      /**
	       * Custom shader to use for drawing instead of the built-in batched shader.
	       * Warning: Setting this property will break the batch of sprites as it
	       * will need to be drawn in isolation.
	       *
	       * @member {Shader|GLShader}
	       */
	      _this.shader = null;
	      return _this;
	    }
	
	    return _class;
	  }(Base);
	}

/***/ },
/* 78 */
/*!***********************************************!*\
  !*** ./plugins/sprites/src/SpriteRenderer.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ismobilejs = __webpack_require__(/*! ismobilejs */ 36);
	
	var _ismobilejs2 = _interopRequireDefault(_ismobilejs);
	
	var _bitTwiddle = __webpack_require__(/*! bit-twiddle */ 48);
	
	var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var vertSource = __webpack_require__(/*! ./shader/multi-texture.vert */ 79);
	var fragTemplate = __webpack_require__(/*! ./shader/multi-texture.frag */ 80);
	
	var TICK = 0;
	
	/**
	 * @class
	 * @memberof sprites
	 */
	
	var SpriteRenderer = function (_render$ObjectRendere) {
	    _inherits(SpriteRenderer, _render$ObjectRendere);
	
	    /**
	     * @param {Renderer} renderer - The renderer this filter runs in.
	     */
	    function SpriteRenderer(renderer) {
	        _classCallCheck(this, SpriteRenderer);
	
	        /**
	         * Number of values sent in the vertex buffer.
	         * positionX, positionY, colorR, colorG, colorB = 5
	         *
	         * @member {number}
	         */
	        var _this = _possibleConstructorReturn(this, _render$ObjectRendere.call(this, renderer));
	
	        _this.vertSize = 5;
	
	        /**
	         * The size of the vertex information in bytes.
	         *
	         * @member {number}
	         */
	        _this.vertByteSize = _this.vertSize * 4;
	
	        /**
	         * The number of images in the SpriteBatch before it flushes.
	         *
	         * @member {number}
	         */
	        _this.size = _bitTwiddle2.default.nextPow2(SpriteRenderer.DEFAULT_SPRITE_BATCH_SIZE);
	
	        /**
	         * Buffer views used to upload smaller portions of the data size when the
	         * batch is small. This removes the need for `.subarray()`.
	         *
	         * @member {Buffer[]}
	         */
	        _this.buffers = [];
	
	        /**
	         * Holds the indices of the geometry (quads) to draw
	         *
	         * @member {Uint16Array}
	         */
	        _this.indices = _core.glutil.GLQuad.createIndices(_this.size);
	
	        /**
	         * The default shaders that is used if a sprite doesn't have a more specific one.
	         * there is a shader for each number of textures that can be rendererd.
	         * These shaders will also be generated on the fly as required.
	         *
	         * @member {Shader[]}
	         */
	        _this.shaders = [];
	
	        // create buffer views
	        for (var i = 1; i <= _this.size; i *= 2) {
	            var viewSize = i * 4 * _this.vertByteSize;
	
	            _this.buffers.push(new _core.util.Buffer(viewSize));
	        }
	
	        _this.currentIndex = 0;
	        _this.groups = [];
	
	        for (var k = 0; k < _this.size; ++k) {
	            _this.groups[k] = {
	                textures: [],
	                size: 0,
	                start: 0,
	                blend: null,
	                shader: null
	            };
	        }
	
	        _this.sprites = [];
	
	        _this.startNumVaos = 2;
	        _this.vertexBuffers = [];
	        _this.vaos = [];
	
	        _this.vertexCount = -1;
	
	        _this.indexBuffer = null;
	
	        _this.vao = null;
	
	        _this._maxTextures = 0;
	
	        _this._onBeforeRenderBinding = renderer.onBeforeRender.add(_this._onBeforeRender, _this);
	        _this._onContextChangeBinding = renderer.onContextChange.add(_this._onContextChange, _this);
	
	        _this._onContextChange();
	        return _this;
	    }
	
	    /**
	     * Stops the sprite batch.
	     *
	     */
	
	
	    SpriteRenderer.prototype.stop = function stop() {
	        this.flush();
	        this.vao.unbind();
	    };
	
	    /**
	     * Renders the content and empties the current batch.
	     *
	     */
	
	
	    SpriteRenderer.prototype.flush = function flush() {
	        if (this.currentIndex === 0) return;
	
	        var gl = this.renderer.gl;
	
	        var np2 = _bitTwiddle2.default.nextPow2(this.currentIndex);
	        var log2 = _bitTwiddle2.default.log2(np2);
	        var buffer = this.buffers[log2];
	
	        var index = 0;
	        var nextTexture = null;
	        var currentTexture = null;
	        var groupCount = 1;
	        var textureCount = 0;
	        var currentGroup = this.groups[0];
	        var blendMode = this.sprites[0].blendMode || _core.util.BlendMode.NORMAL;
	
	        currentGroup.textures.length = 0;
	        currentGroup.start = 0;
	        currentGroup.blend = blendMode;
	        currentGroup.shader = null;
	
	        TICK++;
	
	        for (var i = 0; i < this.currentIndex; ++i) {
	            // upload the sprite elemetns...
	            // they have all ready been calculated so we just need to push them into the buffer.
	            var sprite = this.sprites[i];
	
	            nextTexture = sprite._texture.source;
	
	            // a couple things should break the batch
	            if (sprite.shader || !blendMode.equals(sprite.blendMode)) {
	                blendMode = sprite.blendMode;
	
	                // force the batch to break!
	                currentTexture = null;
	                textureCount = this._maxTextures;
	                TICK++;
	            }
	
	            if (currentTexture !== nextTexture) {
	                currentTexture = nextTexture;
	
	                if (nextTexture._enabled !== TICK) {
	                    if (textureCount === this._maxTextures) {
	                        TICK++;
	
	                        textureCount = 0;
	
	                        currentGroup.size = i - currentGroup.start;
	
	                        currentGroup = this.groups[groupCount++];
	                        currentGroup.textures.length = 0;
	                        currentGroup.blend = blendMode;
	                        currentGroup.start = i;
	                        currentGroup.shader = sprite.shader;
	                    }
	
	                    // TODO: I don't like this, change this to not add properties to texture
	                    nextTexture._enabled = TICK;
	                    nextTexture._id = textureCount;
	
	                    var glTexture = nextTexture.getGlTexture(this.renderer);
	
	                    if (glTexture) {
	                        currentGroup.textures.push(glTexture);
	                        textureCount++;
	                    }
	                }
	            }
	
	            // TODO: this sum does not need to be set each frame, dirty flag?
	            var tint = sprite.tint.bgr + (sprite.worldAlpha * 255 << 24);
	            var uvs = sprite._texture._uvs.uvsUint32;
	            var textureId = nextTexture._id;
	            var vertexData = sprite.vertexData;
	
	            // xy
	            buffer.float32View[index++] = vertexData[0];
	            buffer.float32View[index++] = vertexData[1];
	            buffer.uint32View[index++] = uvs[0];
	            buffer.uint32View[index++] = tint;
	            buffer.float32View[index++] = textureId;
	
	            // xy
	            buffer.float32View[index++] = vertexData[2];
	            buffer.float32View[index++] = vertexData[3];
	            buffer.uint32View[index++] = uvs[1];
	            buffer.uint32View[index++] = tint;
	            buffer.float32View[index++] = textureId;
	
	            // xy
	            buffer.float32View[index++] = vertexData[4];
	            buffer.float32View[index++] = vertexData[5];
	            buffer.uint32View[index++] = uvs[2];
	            buffer.uint32View[index++] = tint;
	            buffer.float32View[index++] = textureId;
	
	            // xy
	            buffer.float32View[index++] = vertexData[6];
	            buffer.float32View[index++] = vertexData[7];
	            buffer.uint32View[index++] = uvs[3];
	            buffer.uint32View[index++] = tint;
	            buffer.float32View[index++] = textureId;
	        }
	
	        currentGroup.size = this.currentIndex - currentGroup.start;
	
	        this.vertexCount++;
	
	        if (this.vertexBuffers.length <= this.vertexCount) {
	            this._createVao(gl, this.shaders[1].attributes);
	        }
	
	        _core.debug.ASSERT(this.vertexBuffers.length > this.vertexCount, 'Number of Vertex Buffers is too small.');
	
	        this.vertexBuffers[this.vertexCount].upload(buffer.buffer, 0);
	        this.vao = this.vaos[this.vertexCount].bind();
	
	        // render the groups..
	        for (var _i = 0; _i < groupCount; ++_i) {
	            var group = this.groups[_i];
	            var groupTextureCount = group.textures.length;
	
	            if (!groupTextureCount) continue;
	
	            var shader = null;
	
	            if (group.shader) {
	                shader = group.shader;
	            } else {
	                shader = this.shaders[groupTextureCount - 1];
	            }
	
	            if (!shader) {
	                shader = generateMultiTextureShader(this.renderer, groupTextureCount);
	                this.shaders[groupTextureCount - 1] = shader;
	            }
	
	            this.renderer.state.setShader(shader);
	
	            for (var j = 0; j < groupTextureCount; ++j) {
	                group.textures[j].bind(j);
	            }
	
	            // set the blend mode..
	            this.renderer.state.setBlendMode(group.blend);
	
	            gl.drawElements(gl.TRIANGLES, group.size * 6, gl.UNSIGNED_SHORT, group.start * 6 * 2);
	        }
	
	        // reset elements for the next flush
	        this.currentIndex = 0;
	    };
	
	    /**
	     * Renders the sprite object.
	     *
	     * @param {Sprite} sprite - the sprite to render.
	     */
	
	
	    SpriteRenderer.prototype.render = function render(sprite) {
	        if (this.currentIndex >= this.size) {
	            this.flush();
	        }
	
	        // if the uvs have not updated then no point rendering just yet!
	        if (!sprite.texture._uvs) {
	            return;
	        }
	
	        // increment the batchsize
	        this.sprites[this.currentIndex++] = sprite;
	    };
	
	    /**
	     * Destroys the sprite renderer.
	     *
	     */
	
	
	    SpriteRenderer.prototype.destroy = function destroy() {
	        // detach events
	        this._onBeforeRenderBinding.detach();
	        this._onBeforeRenderBinding = null;
	
	        this._onContextChangeBinding.detach();
	        this._onContextChangeBinding = null;
	
	        this._destroyGlObjects();
	
	        // destroy buffers.
	        for (var i = 0; i < this.buffers.length; ++i) {
	            this.buffers[i].destroy();
	        }
	
	        // null references
	        this.buffers = null;
	        this._buffersMem = null;
	        this.indices = null;
	        this.shaders = null;
	        this.groups = null;
	        this.sprites = null;
	        this.vertexBuffers = null;
	        this.vaos = null;
	        this.indexBuffer = null;
	
	        _render$ObjectRendere.prototype.destroy.call(this);
	    };
	
	    /**
	     * Called by base Manager class when there is a WebGL context change.
	     *
	     * @private
	     */
	
	
	    SpriteRenderer.prototype._onContextChange = function _onContextChange() {
	        var gl = this.renderer.gl;
	
	        this._destroyGlObjects(true);
	
	        // check max textures the GPU can handle.
	        this._maxTextures = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), SpriteRenderer.MAX_TEXTURE_COUNT);
	
	        // check the maximum number of if statements shaders are allowed *up to* the max textures.
	        this._maxTextures = _core.util.getMaxIfStatmentsInShader(gl, this._maxTextures);
	
	        this.shaders.length = this._maxTextures;
	        this.shaders[0] = this.shaders[0] || generateMultiTextureShader(this.renderer, 1);
	        this.shaders[1] = this.shaders[1] || generateMultiTextureShader(this.renderer, 2);
	
	        // create new index buffer
	        this.indexBuffer = _core.glutil.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);
	
	        // we use the second shader as the first one depending on your browser may omit aTextureId
	        // as it is not used by the shader so is optimized out.
	        var attribs = this.shaders[1].attributes;
	        var maxVaos = this.vertexBuffers.length || this.startNumVaos;
	
	        // create initial vertex buffers and VAOs
	        for (var i = 0; i < maxVaos; ++i) {
	            this._createVao(gl, attribs);
	        }
	
	        this.vao = this.vaos[0];
	    };
	
	    /**
	     * Called just before the renderer starts rendering each frame.
	     *
	     * @private
	     */
	
	
	    SpriteRenderer.prototype._onBeforeRender = function _onBeforeRender() {
	        this.vertexCount = -1;
	    };
	
	    /**
	     * Creates a new vertex buffer and VAO to manage it.
	     *
	     * @private
	     * @param {WebGLRenderingContext} gl - The rendering context.
	     * @param {*} attribs - Attribute data for the shader.
	     */
	
	
	    SpriteRenderer.prototype._createVao = function _createVao(gl, attribs) {
	        var vbuffer = _core.glutil.GLBuffer.createVertexBuffer(gl, null, gl.STREAM_DRAW);
	
	        this.vertexBuffers.push(vbuffer);
	
	        // build the vao object that will render..
	        this.vaos.push(new _core.glutil.GLVertexArrayObject(this.renderer.gl).setIndexBuffer(this.indexBuffer).addAttribute(vbuffer, attribs.aVertexPosition, gl.FLOAT, false, this.vertByteSize, 0).addAttribute(vbuffer, attribs.aTextureCoord, gl.UNSIGNED_SHORT, true, this.vertByteSize, 2 * 4).addAttribute(vbuffer, attribs.aColor, gl.UNSIGNED_BYTE, true, this.vertByteSize, 3 * 4).addAttribute(vbuffer, attribs.aTextureId, gl.FLOAT, false, this.vertByteSize, 4 * 4));
	    };
	
	    /**
	     * Destroys GL objects that can change between contexts.
	     *
	     * @private
	     * @param {boolean} ctxRestore - Should we treat this like a context restore?
	     */
	
	
	    SpriteRenderer.prototype._destroyGlObjects = function _destroyGlObjects() {
	        var ctxRestore = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	        // destroy shaders
	        if (!ctxRestore) {
	            for (var i = 0; i < this.shaders.length; ++i) {
	                if (this.shaders[i]) {
	                    this.shaders[i].destroy();
	                }
	            }
	            this.shaders.length = 0;
	        }
	
	        // destroy vaos
	        for (var _i2 = 0; _i2 < this.vaos.length; ++_i2) {
	            this.vaos[_i2].destroy();
	        }
	        this.vaos.length = 0;
	
	        // destroy vertex buffers
	        for (var _i3 = 0; _i3 < this.vertexBuffers.length; ++_i3) {
	            this.vertexBuffers[_i3].destroy();
	        }
	        this.vertexBuffers.length = 0;
	
	        // destroy index buffer
	        if (this.indexBuffer) {
	            this.indexBuffer.destroy();
	        }
	        this.indexBuffer = null;
	    };
	
	    return SpriteRenderer;
	}(_core.render.ObjectRenderer);
	
	exports.default = SpriteRenderer;
	
	
	function generateMultiTextureShader(renderer, maxTextures) {
	    var fragSource = fragTemplate;
	
	    fragSource = fragSource.replace(/\{\{count\}\}/gi, maxTextures);
	    fragSource = fragSource.replace(/\{\{texture_choice\}\}/gi, generateSampleSrc(maxTextures));
	
	    var shader = new _core.render.Shader(renderer, vertSource, fragSource);
	
	    var sampleValues = [];
	
	    for (var i = 0; i < maxTextures; ++i) {
	        sampleValues[i] = i;
	    }
	
	    shader.bind();
	    shader.uniforms.uSamplers = sampleValues;
	
	    return shader;
	}
	
	function generateSampleSrc(maxTextures) {
	    var src = '\n\n';
	
	    for (var i = 0; i < maxTextures; ++i) {
	        if (i > 0) src += '\n    else';
	
	        if (i < maxTextures - 1) {
	            src += '    if(textureId == ' + i + '.0)';
	        }
	
	        src += '\n    {\n        color = texture2D(uSamplers[' + i + '], vTextureCoord);\n    }';
	    }
	
	    src += '\n\n';
	
	    return src;
	}
	
	/**
	 * Default batch size for the sprite renderer.
	 *
	 * @static
	 * @constant
	 * @memberof SpriteRenderer
	 * @type {number}
	 * @default 4096
	 */
	SpriteRenderer.DEFAULT_SPRITE_BATCH_SIZE = 4096;
	
	/**
	 * Default batch size for the sprite renderer. Defaults to 32 for desktop and 2 for phones.
	 *
	 * @static
	 * @constant
	 * @memberof SpriteRenderer
	 * @type {number}
	 * @default 32
	 */
	SpriteRenderer.MAX_TEXTURE_COUNT = _ismobilejs2.default.tablet || _ismobilejs2.default.phone ? 2 : 32;

/***/ },
/* 79 */
/*!*******************************************************!*\
  !*** ./plugins/sprites/src/shader/multi-texture.vert ***!
  \*******************************************************/
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((uProjectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n"

/***/ },
/* 80 */
/*!*******************************************************!*\
  !*** ./plugins/sprites/src/shader/multi-texture.frag ***!
  \*******************************************************/
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\n#define TEXTURE_COUNT {{count}}\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nuniform sampler2D uSamplers[TEXTURE_COUNT];\n\nvoid main(void)\n{\n    vec4 color;\n    float textureId = floor(vTextureId + 0.5);\n\n    {{texture_choice}}\n\n    gl_FragColor = color * vColor;\n}\n"

/***/ },
/* 81 */
/*!***************************************************!*\
  !*** ./plugins/sprites/src/SpriteRenderSystem.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _core = __webpack_require__(/*! @fae/core */ 1);
	
	var _transform = __webpack_require__(/*! @fae/transform */ 68);
	
	var _textures = __webpack_require__(/*! @fae/textures */ 72);
	
	var _SpriteRenderer = __webpack_require__(/*! ./SpriteRenderer */ 78);
	
	var _SpriteRenderer2 = _interopRequireDefault(_SpriteRenderer);
	
	var _SpriteComponent = __webpack_require__(/*! ./SpriteComponent */ 77);
	
	var _SpriteComponent2 = _interopRequireDefault(_SpriteComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class
	 * @memberof sprites
	 */
	var SpriteRenderSystem = function (_ecs$System) {
	    _inherits(SpriteRenderSystem, _ecs$System);
	
	    /**
	     * @param {Renderer} renderer - The renderer to use.
	     * @param {number} priority - The priority of the system, higher means earlier.
	     * @param {number} frequency - How often to run the update loop. `1` means every
	     *  time, `2` is every other time, etc.
	     */
	    function SpriteRenderSystem(renderer) {
	        var priority = arguments.length <= 1 || arguments[1] === undefined ? SpriteRenderSystem.defaultPriority : arguments[1];
	        var frequency = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	        _classCallCheck(this, SpriteRenderSystem);
	
	        /**
	         * The sprite renderer instance to use to draw/batch sprites.
	         *
	         * @member {SpriteRenderer}
	         */
	        var _this = _possibleConstructorReturn(this, _ecs$System.call(this, renderer, priority, frequency));
	
	        _this.spriteRenderer = new _SpriteRenderer2.default(renderer);
	        return _this;
	    }
	
	    /**
	     * Returns true if the entity is eligible to the system, false otherwise.
	     *
	     * @param {Entity} entity - The entity to test.
	     * @return {boolean} True if entity should be included.
	     */
	
	
	    SpriteRenderSystem.prototype.test = function test(entity) {
	        return entity.hasComponents(_core.ecs.VisibilityComponent, // whether or not to render
	        _transform.TransformComponent, // where to render
	        _textures.TextureComponent, // what to render
	        _SpriteComponent2.default // how to render
	        );
	    };
	
	    /**
	     * Render a sprite using the batching SpriteRenderer.
	     *
	     * @param {Entity} sprite - The entity to render.
	     */
	
	
	    SpriteRenderSystem.prototype.update = function update(sprite) {
	        if (!sprite.visible) return;
	
	        this.renderer.setActiveObjectRenderer(this.spriteRenderer);
	
	        var clean = !sprite._anchorDirty && sprite._cachedTransformUpdateId === sprite.transform._worldUpdateId;
	
	        if (sprite._texture.ready && !clean) {
	            calculateVertices(sprite);
	            sprite._cachedTransformUpdateId = sprite.transform._worldUpdateId;
	            sprite._anchorDirty = false;
	        }
	
	        this.spriteRenderer.render(sprite);
	    };
	
	    return SpriteRenderSystem;
	}(_core.ecs.System);
	
	exports.default = SpriteRenderSystem;
	
	
	_core.render.Renderer.addDefaultSystem(SpriteRenderSystem);
	
	/**
	 * Updates the vertices of the entity.
	 *
	 * @ignore
	 * @param {Entity} sprite - The sprite to update.
	 */
	function calculateVertices(sprite) {
	    // set the vertex data
	    var wt = sprite.transform.worldTransform;
	    var a = wt.a;
	    var b = wt.b;
	    var c = wt.c;
	    var d = wt.d;
	    var tx = wt.tx;
	    var ty = wt.ty;
	    var vertexData = sprite.vertexData;
	    var trim = sprite._texture.trim;
	    var orig = sprite._texture.orig;
	
	    var w0 = void 0;
	    var w1 = void 0;
	    var h0 = void 0;
	    var h1 = void 0;
	
	    if (trim) {
	        // if the sprite is trimmed then we need to add the extra space
	        // before transforming the sprite coords.
	        w1 = trim.x - sprite._anchorX * orig.width;
	        w0 = w1 + trim.width;
	
	        h1 = trim.y - sprite._anchorY * orig.height;
	        h0 = h1 + trim.height;
	    } else {
	        w0 = orig.width * (1 - sprite._anchorX);
	        w1 = orig.width * -sprite._anchorX;
	
	        h0 = orig.height * (1 - sprite._anchorY);
	        h1 = orig.height * -sprite._anchorY;
	    }
	
	    // xy
	    vertexData[0] = a * w1 + c * h1 + tx;
	    vertexData[1] = d * h1 + b * w1 + ty;
	
	    // xy
	    vertexData[2] = a * w0 + c * h1 + tx;
	    vertexData[3] = d * h1 + b * w0 + ty;
	
	    // xy
	    vertexData[4] = a * w0 + c * h0 + tx;
	    vertexData[5] = d * h0 + b * w0 + ty;
	
	    // xy
	    vertexData[6] = a * w1 + c * h0 + tx;
	    vertexData[7] = d * h0 + b * w1 + ty;
	}
	
	/**
	 * @static
	 * @constant
	 * @member {number}
	 * @default 1000
	 */
	SpriteRenderSystem.defaultPriority = _core.ecs.System.PRIORITY.RENDER;

/***/ },
/* 82 */
/*!******************************************!*\
  !*** ./plugins/text-canvas/src/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _CanvasTextWriter = __webpack_require__(/*! ./CanvasTextWriter */ 83);
	
	Object.defineProperty(exports, 'CanvasTextWriter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CanvasTextWriter).default;
	  }
	});
	
	var _CanvasTextStyle = __webpack_require__(/*! ./CanvasTextStyle */ 84);
	
	Object.defineProperty(exports, 'CanvasTextStyle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CanvasTextStyle).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 83 */
/*!*****************************************************!*\
  !*** ./plugins/text-canvas/src/CanvasTextWriter.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _CanvasTextStyle = __webpack_require__(/*! ./CanvasTextStyle */ 84);
	
	var _CanvasTextStyle2 = _interopRequireDefault(_CanvasTextStyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// TODO: Add append methods
	
	var rgxNewline = /\r\n|\r|\n/;
	
	/**
	 * @class
	 * @memberof text-canvas
	 */
	
	var CanvasTextWriter = function () {
	    /**
	     * @param {HTMLCanvasElement} canvas - optional canvas to write to.
	     * @param {boolean} autoSize - When set the writer will automatically resize the
	     *  canvas as needed. It defaults to `true` if you do not pass in a canvas element
	     *  and `false` if you do pass in a canvas element.
	     */
	    function CanvasTextWriter() {
	        var canvas = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	        var autoSize = arguments.length <= 1 || arguments[1] === undefined ? !canvas : arguments[1];
	
	        _classCallCheck(this, CanvasTextWriter);
	
	        /**
	         * The canvas element that everything is drawn to.
	         *
	         * @member {HTMLCanvasElement}
	         */
	        this.canvas = canvas || document.createElement('canvas');
	
	        /**
	         * Should we resize the canvas when drawing to it?
	         *
	         * @member {boolean}
	         */
	        this.autoSize = autoSize;
	
	        /**
	         * The canvas 2d context that everything is drawn with.
	         *
	         * @private
	         * @member {CanvasRenderingContext2D}
	         */
	        this._textCtx = this.canvas.getContext('2d');
	    }
	
	    /**
	     * Draws the text to the canvas.
	     *
	     * @param {string} text - The text to write.
	     * @param {CanvasTextStyle} style - The style to draw the text with.
	     */
	
	
	    CanvasTextWriter.prototype.write = function write(text) {
	        var style = arguments.length <= 1 || arguments[1] === undefined ? CanvasTextWriter.defaultStyle : arguments[1];
	
	        var ctx = this._textCtx;
	        var outputText = style.wordWrap ? this._wordWrap(text) : text;
	        var lines = outputText.split(rgxNewline);
	
	        // setup context
	        ctx.font = style.getFontString();
	        ctx.strokeStyle = style.stroke;
	        ctx.lineWidth = style.strokeThickness;
	        ctx.textBaseline = style.textBaseline;
	        ctx.lineJoin = style.lineJoin;
	        ctx.miterLimit = style.miterLimit;
	        ctx.fillStyle = style.getFillStyle(lines.length);
	        ctx.shadowBlur = style.shadowBlur;
	        ctx.shadowColor = style.shadowColor;
	        ctx.shadowOffsetX = style.shadowOffsetX;
	        ctx.shadowOffsetY = style.shadowOffsetY;
	
	        // calculate text width
	        var lineWidths = new Array(lines.length);
	        var fontProperties = this._determineFontProperties(ctx.font);
	        var maxLineWidth = 0;
	
	        // calculate line widths
	        for (var i = 0; i < lines.length; ++i) {
	            var lineWidth = ctx.measureText(lines[i]).width + (lines[i].length - 1) * style.letterSpacing;
	
	            lineWidths[i] = lineWidth;
	            maxLineWidth = Math.max(maxLineWidth, lineWidth);
	        }
	
	        var dsSize = style.dropShadow ? style.dropShadowDistance : 0;
	        var padd = (style.strokeThickness + style.padding) * 2;
	
	        // calculate width necessary for canvas
	        if (this.autoSize) {
	            var width = maxLineWidth + dsSize + padd;
	
	            this.canvas.width = Math.ceil(width /* * this.resolution */);
	        }
	
	        // calculate height necessary for canvas
	        var fntLineHeight = dsSize + fontProperties.fontSize + padd;
	        var lineHeight = style.lineHeight ? style.lineHeight + padd : fntLineHeight;
	
	        if (this.autoSize) {
	            var height = Math.max(lineHeight, fntLineHeight) + (lines.length - 1) * lineHeight;
	
	            this.canvas.height = Math.ceil(height /* * this.resolution*/);
	        }
	
	        // clear and prepare for new text
	        // ctx.scale(this.resolution, this.resolution);
	        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	
	        var linePositionX = 0;
	        var linePositionY = 0;
	
	        // draw lines line by line
	        for (var _i = 0; _i < lines.length; ++_i) {
	            linePositionX = style.strokeThickness / 2;
	            linePositionY = style.strokeThickness / 2 + _i * lineHeight + fontProperties.ascent;
	
	            if (style.align === 'right') {
	                linePositionX += maxLineWidth - lineWidths[_i];
	            } else if (style.align === 'center') {
	                linePositionX += (maxLineWidth - lineWidths[_i]) / 2;
	            }
	
	            if (style.stroke && style.strokeThickness) {
	                this._drawText(lines[_i], linePositionX + style.padding, linePositionY + style.padding, true);
	            }
	
	            if (style.fillStyle) {
	                this._drawText(lines[_i], linePositionX + style.padding, linePositionY + style.padding);
	            }
	        }
	    };
	
	    /**
	     * Destroys this text object.
	     */
	
	
	    CanvasTextWriter.prototype.destroy = function destroy() {
	        this._textCtx = null;
	        this.canvas = null;
	
	        this.style = null;
	    };
	
	    /**
	     * Calculates the ascent, descent and fontSize of a given fontStyle
	     *
	     * @private
	     * @param {string} fontStyle - String representing the style of the font
	     * @return {Object} Font properties object
	     */
	
	
	    CanvasTextWriter.prototype._determineFontProperties = function _determineFontProperties(fontStyle) {
	        if (CanvasTextWriter.fontPropertiesCache[fontStyle]) {
	            return CanvasTextWriter.fontPropertiesCache[fontStyle];
	        }
	
	        var properties = CanvasTextWriter.fontPropertiesCache[fontStyle];
	
	        // initialize if necessary
	        if (!CanvasTextWriter.fontPropertiesCanvas) {
	            CanvasTextWriter.fontPropertiesCanvas = document.createElement('canvas');
	            CanvasTextWriter.fontPropertiesContext = CanvasTextWriter.fontPropertiesCanvas.getContext('2d');
	        }
	
	        var canvas = CanvasTextWriter.fontPropertiesCanvas;
	        var context = CanvasTextWriter.fontPropertiesContext;
	        var testText = '|MÉqg';
	
	        context.textBaseline = 'alphabetic';
	        context.fillStyle = '#000';
	        context.font = fontStyle;
	
	        var width = Math.ceil(context.measureText(testText).width);
	        var mwidth = Math.ceil(context.measureText('M').width);
	        var baseline = Math.ceil(mwidth * 1.5);
	        var height = 2 * mwidth;
	
	        canvas.width = width;
	        canvas.height = height;
	
	        context.fillStyle = '#f00';
	        context.fillRect(0, 0, width, height);
	        context.fillText(testText, 0, baseline);
	
	        var imagedata = context.getImageData(0, 0, width, height).data;
	        var maxX = width * 4;
	
	        var y = 0;
	        var x = 0;
	
	        // ascent. scan from top to bottom until we find a non red pixel
	        ascent: for (y = 0; y < baseline; ++y) {
	            for (x = 0; x < maxX; x += 4) {
	                if (imagedata[y * maxX + x] !== 255) {
	                    break ascent;
	                }
	            }
	        }
	
	        properties.ascent = baseline - y;
	
	        // descent. scan from bottom to top until we find a non red pixel
	        descent: for (y = height; y > baseline; --y) {
	            for (x = 0; x < maxX; x += 4) {
	                if (imagedata[y * maxX + x] !== 255) {
	                    break descent;
	                }
	            }
	        }
	
	        properties.descent = y - baseline;
	        properties.fontSize = properties.ascent + properties.descent;
	
	        return properties;
	    };
	
	    /**
	     * Adds line breaks to text.
	     *
	     * @private
	     * @param {string} text - The text to wrap.
	     * @return {string} The wrapped text.
	     */
	
	
	    CanvasTextWriter.prototype._wordWrap = function _wordWrap(text) {
	        // Greedy wrapping algorithm that will wrap words as the line grows longer than its horizontal bounds.
	        var lines = text.split('\n');
	        var wordWrapWidth = this.style.wordWrapWidth;
	        var result = '';
	
	        for (var i = 0; i < lines.length; i++) {
	            var words = lines[i].split(' ');
	            var spaceLeft = wordWrapWidth;
	
	            for (var j = 0; j < words.length; j++) {
	                var wordWidth = this._textCtx.measureText(words[j]).width;
	
	                if (this.style.breakWords && wordWidth > wordWrapWidth) {
	                    // Word should be split in the middle
	                    var characters = words[j].split('');
	
	                    for (var c = 0; c < characters.length; c++) {
	                        var characterWidth = this._textCtx.measureText(characters[c]).width;
	
	                        if (characterWidth > spaceLeft) {
	                            result += '\n' + characters[c];
	                            spaceLeft = wordWrapWidth - characterWidth;
	                        } else {
	                            result += '' + (c === 0 ? ' ' : '') + characters[c];
	                            spaceLeft -= characterWidth;
	                        }
	                    }
	                } else {
	                    var wordWidthWithSpace = wordWidth + this._textCtx.measureText(' ').width;
	
	                    if (j === 0 || wordWidthWithSpace > spaceLeft) {
	                        // Skip printing the newline if it's the first word of the line that is
	                        // greater than the word wrap width.
	                        result += '' + (j > 9 ? '\n' : '') + words[j];
	                        spaceLeft = wordWrapWidth - wordWidth;
	                    } else {
	                        result += ' ' + words[j];
	                        spaceLeft -= wordWidthWithSpace;
	                    }
	                }
	            }
	
	            if (i < lines.length - 1) {
	                result += '\n';
	            }
	        }
	
	        return result;
	    };
	
	    /**
	     * Render the text to the canvas
	     *
	     * @private
	     * @param {string} text - The text to draw
	     * @param {number} x - Horizontal position to draw the text
	     * @param {number} y - Vertical position to draw the text
	     * @param {boolean} isStroke - Is this draw for the stroke or the fill?
	     */
	
	
	    CanvasTextWriter.prototype._drawText = function _drawText(text, x, y, isStroke) {
	        var style = this.style;
	        var letterSpacing = style.letterSpacing;
	
	        // normal font-based letter spacing
	        if (letterSpacing === 0) {
	            if (isStroke) {
	                this._textCtx.strokeText(text, x, y);
	            } else {
	                this._textCtx.fillText(text, x, y);
	            }
	        } else {
	            // user-specified letter-spacing
	            var characters = text.split('');
	
	            for (var i = 0; i < characters.length; ++i) {
	                var char = characters[i];
	
	                if (isStroke) {
	                    this._textCtx.strokeText(char, x, y);
	                } else {
	                    this._textCtx.fillText(char, x, y);
	                }
	
	                x += this._textCtx.measureText(char).width + letterSpacing;
	            }
	        }
	    };
	
	    return CanvasTextWriter;
	}();
	
	exports.default = CanvasTextWriter;
	
	
	CanvasTextWriter.defaultStyle = new _CanvasTextStyle2.default();
	
	CanvasTextWriter.fontPropertiesCache = {};
	CanvasTextWriter.fontPropertiesCanvas = null;
	CanvasTextWriter.fontPropertiesContext = null;

/***/ },
/* 84 */
/*!****************************************************!*\
  !*** ./plugins/text-canvas/src/CanvasTextStyle.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(/*! core-js/fn/object/assign */ 85);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @class
	 * @memberof text-canvas
	 */
	var CanvasTextStyle = function () {
	        /**
	         * @param {*} style - The style parameters. This object can contain any property of the
	         *  CanvasTextStyle class to override the default.
	         */
	        function CanvasTextStyle() {
	                var style = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	                _classCallCheck(this, CanvasTextStyle);
	
	                /**
	                 * Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text.
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign
	                 *
	                 * @member {string}
	                 * @default 'left'
	                 */
	                this.align = 'left';
	
	                /**
	                 * Indicates if lines can be wrapped within words, it needs wordWrap to be set to true.
	                 *
	                 * @member {boolean}
	                 * @default false
	                 */
	                this.breakWords = false;
	
	                /**
	                 * Blur radius of the drop shadow
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur
	                 *
	                 * @member {number}
	                 * @default 0
	                 */
	                this.shadowBlur = 0;
	
	                /**
	                 * Fill style of the drop shadow e.g 'red', '#00FF00'.
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor
	                 *
	                 * @member {string}
	                 * @default '#000000'
	                 */
	                this.shadowColor = '#000000';
	
	                /**
	                 * X offset of the shadow of the drop shadow.
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX
	                 *
	                 * @member {number}
	                 * @default 0
	                 */
	                this.shadowOffsetX = 0;
	
	                /**
	                 * Y offset of the shadow of the drop shadow.
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY
	                 *
	                 * @member {number}
	                 * @default 0
	                 */
	                this.shadowOffsetY = 0;
	
	                /**
	                 * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'. Can be an array
	                 * to create a gradient eg ['#000000','#FFFFFF'].
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
	                 *
	                 * @member {string|string[]|CanvasGradient|CanvasPattern}
	                 * @default 'black'
	                 */
	                this.fillStyle = 'black';
	
	                /**
	                 * If fills styles are supplied, this can change the type/direction of the gradient.
	                 * True is vertical, false is horizontal.
	                 *
	                 * @member {boolean}
	                 * @default true
	                 */
	                this.fillGradientVertical = true;
	
	                /**
	                 * The font family to use.
	                 *
	                 * @member {string}
	                 * @default 'Arial'
	                 */
	                this.fontFamily = 'Arial';
	
	                /**
	                 * The font size (as a number it converts to px, but as a string, equivalents are
	                 * '26px','20pt','160%' or '1.6em')
	                 *
	                 * @member {number|string}
	                 * @default 26
	                 */
	                this.fontSize = 26;
	
	                /**
	                 * The font style ('normal', 'italic' or 'oblique')
	                 *
	                 * @member {string}
	                 * @default 'normal'
	                 */
	                this.fontStyle = 'normal';
	
	                /**
	                 * The font variant ('normal' or 'small-caps')
	                 *
	                 * @member {string}
	                 * @default 'normal'
	                 */
	                this.fontVariant = 'normal';
	
	                /**
	                 * The font weight ('normal', 'bold', 'bolder', 'lighter' and '100', '200',
	                 * '300', '400', '500', '600', '700', 800' or '900')
	                 *
	                 * @member {string}
	                 * @default 'normal'
	                 */
	                this.fontWeight = 'normal';
	
	                /**
	                 * The amount of spacing between letters.
	                 *
	                 * @member {number}
	                 * @default 0
	                 */
	                this.letterSpacing = 0;
	
	                /**
	                 * The line height, a number that represents the vertical space that a letter uses.
	                 *
	                 * @member {number}
	                 * @default 0
	                 */
	                this.lineHeight = 0;
	
	                /**
	                 * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
	                 * Valid values are 'bevel', 'round', or 'miter'.
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
	                 *
	                 * @member {string}
	                 * @default 'miter'
	                 */
	                this.lineJoin = 'miter';
	
	                /**
	                 * The miter limit to use when using the 'miter' lineJoin mode. This can reduce or increase
	                 * the spikiness of rendered text.
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit
	                 *
	                 * @member {number}
	                 * @default 10
	                 */
	                this.miterLimit = 10;
	
	                /**
	                 * Occasionally some fonts are cropped on top or bottom. Adding some padding will prevent this
	                 * from happening by adding padding to the top and bottom of text height.
	                 *
	                 * @member {number}
	                 * @default 0
	                 */
	                this.padding = 0;
	
	                /**
	                 * A canvas fillstyle that will be used on the text stroke e.g 'blue', '#FCFF00'.
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle
	                 *
	                 * @member {string}
	                 * @default 'black'
	                 */
	                this.stroke = 'black';
	
	                /**
	                 * A number that represents the thickness of the stroke. Default is 0 (no stroke).
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth
	                 *
	                 * @member {number}
	                 * @default 0
	                 */
	                this.strokeThickness = 0;
	
	                /**
	                 * The baseline of the text that is rendered.
	                 * Valid values are "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom"
	                 *
	                 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline
	                 *
	                 * @member {string}
	                 * @default 'alphabetic'
	                 */
	                this.textBaseline = 'alphabetic';
	
	                /**
	                 * Indicates if word wrap should be used.
	                 *
	                 * @member {boolean}
	                 * @default false
	                 */
	                this.wordWrap = false;
	
	                /**
	                 * The width at which text will wrap, it needs wordWrap to be set to true.
	                 *
	                 * @member {number}
	                 * @default 100
	                 */
	                this.wordWrapWidth = 100;
	
	                // override properties based on params
	                (0, _assign2.default)(this, style);
	        }
	
	        /**
	         * Creates a new CanvasTextStyle with the same values as this one.
	         *
	         * @return {CanvasTextStyle} The new style
	         */
	
	
	        CanvasTextStyle.prototype.clone = function clone() {
	                return new CanvasTextStyle(this);
	        };
	
	        /**
	         * Builds a font style string for use with canvas, based on the properties of this style.
	         *
	         * @return {string} The font string.
	         */
	
	
	        CanvasTextStyle.prototype.getFontString = function getFontString() {
	                var fontSizeString = typeof this.fontSize === 'number' ? this.fontSize + 'px' : this.fontSize;
	
	                return this.fontStyle + ' ' + this.fontVariant + ' ' + this.fontWeight + ' ' + fontSizeString + ' ' + this.fontFamily;
	        };
	
	        /**
	         * Builds a fill style for use with canvas, based on the properties of this style.
	         *
	         * @param {number} numLines - The number of lines to split a vertical gradient over (if applicable).
	         * @return {string|CanvasGradient|CanvasPattern} The fill style.
	         */
	
	
	        CanvasTextStyle.prototype.getFillStyle = function getFillStyle(numLines /* , resolution*/) {
	                if (!Array.isArray(this.fillStyle)) {
	                        return this.fillStyle;
	                }
	
	                // the gradient will be evenly spaced out according to how large the array is.
	                // ['#FF0000', '#00FF00', '#0000FF'] would created stops at 0.25, 0.5 and 0.75
	
	                var width = this.canvas.width; // / this.resolution;
	                var height = this.canvas.height; // / this.resolution;
	
	                // create the canvas gradient
	                var gradient = null;
	
	                if (this.fillGradientVertical) {
	                        // start the gradient at the top center of the canvas, and end at the bottom middle of the canvas
	                        gradient = this.context.createLinearGradient(width / 2, 0, width / 2, height);
	                } else {
	                        gradient = this.context.createLinearGradient(0, height / 2, width, height / 2);
	                }
	
	                // create each of the color stops
	                var numFills = this.fillStyle.length;
	                var totalStops = (numFills + 1) * (this.fillGradientVertical ? numLines : 1);
	
	                for (var i = 0; i < totalStops; ++i) {
	                        gradient.addColorStop((i + 1) / totalStops, this.fillStyle[i % numFills]);
	                }
	
	                return gradient;
	        };
	
	        return CanvasTextStyle;
	}();
	
	exports.default = CanvasTextStyle;

/***/ },
/* 85 */
/*!***************************************!*\
  !*** ./~/core-js/fn/object/assign.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.assign */ 86);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 89).Object.assign;

/***/ },
/* 86 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.assign.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./_export */ 87);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(/*! ./_object-assign */ 105)});

/***/ },
/* 87 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_export.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 88)
	  , core      = __webpack_require__(/*! ./_core */ 89)
	  , hide      = __webpack_require__(/*! ./_hide */ 90)
	  , redefine  = __webpack_require__(/*! ./_redefine */ 100)
	  , ctx       = __webpack_require__(/*! ./_ctx */ 103)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 88 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_global.js ***!
  \**************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 89 */
/*!************************************!*\
  !*** ./~/core-js/modules/_core.js ***!
  \************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 90 */
/*!************************************!*\
  !*** ./~/core-js/modules/_hide.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(/*! ./_object-dp */ 91)
	  , createDesc = __webpack_require__(/*! ./_property-desc */ 99);
	module.exports = __webpack_require__(/*! ./_descriptors */ 95) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 91 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_object-dp.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(/*! ./_an-object */ 92)
	  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 94)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 98)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 95) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 92 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_an-object.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 93);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 93 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_is-object.js ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 94 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_ie8-dom-define.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(/*! ./_descriptors */ 95) && !__webpack_require__(/*! ./_fails */ 96)(function(){
	  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 97)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 95 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_descriptors.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./_fails */ 96)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 96 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_fails.js ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 97 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_dom-create.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 93)
	  , document = __webpack_require__(/*! ./_global */ 88).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 98 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_to-primitive.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./_is-object */ 93);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 99 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_property-desc.js ***!
  \*********************************************/
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 100 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_redefine.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 88)
	  , hide      = __webpack_require__(/*! ./_hide */ 90)
	  , has       = __webpack_require__(/*! ./_has */ 101)
	  , SRC       = __webpack_require__(/*! ./_uid */ 102)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(/*! ./_core */ 89).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 101 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_has.js ***!
  \***********************************/
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 102 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_uid.js ***!
  \***********************************/
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 103 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_ctx.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./_a-function */ 104);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 104 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_a-function.js ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 105 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_object-assign.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(/*! ./_object-keys */ 106)
	  , gOPS     = __webpack_require__(/*! ./_object-gops */ 119)
	  , pIE      = __webpack_require__(/*! ./_object-pie */ 120)
	  , toObject = __webpack_require__(/*! ./_to-object */ 121)
	  , IObject  = __webpack_require__(/*! ./_iobject */ 109)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(/*! ./_fails */ 96)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 106 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-keys.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(/*! ./_object-keys-internal */ 107)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 118);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 107 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/_object-keys-internal.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(/*! ./_has */ 101)
	  , toIObject    = __webpack_require__(/*! ./_to-iobject */ 108)
	  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 112)(false)
	  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ 116)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 108 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_to-iobject.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./_iobject */ 109)
	  , defined = __webpack_require__(/*! ./_defined */ 111);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 109 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_iobject.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./_cof */ 110);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 110 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_cof.js ***!
  \***********************************/
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 111 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_defined.js ***!
  \***************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 112 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_array-includes.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 108)
	  , toLength  = __webpack_require__(/*! ./_to-length */ 113)
	  , toIndex   = __webpack_require__(/*! ./_to-index */ 115);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 113 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_to-length.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./_to-integer */ 114)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 114 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_to-integer.js ***!
  \******************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 115 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_to-index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 114)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 116 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_shared-key.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(/*! ./_shared */ 117)('keys')
	  , uid    = __webpack_require__(/*! ./_uid */ 102);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 117 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_shared.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./_global */ 88)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 118 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_enum-bug-keys.js ***!
  \*********************************************/
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 119 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-gops.js ***!
  \*******************************************/
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 120 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-pie.js ***!
  \******************************************/
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 121 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_to-object.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./_defined */ 111);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=fae.js.map