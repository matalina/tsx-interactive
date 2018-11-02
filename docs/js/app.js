webpackJsonp([1],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);
module.exports = __webpack_require__(306);


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_events__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_game__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(86);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_events___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vuex__["default"]);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */],
    components: {
        Game: __WEBPACK_IMPORTED_MODULE_4__components_game___default.a
    }
});

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(226)
}
var normalizeComponent = __webpack_require__(230)
/* script */
var __vue_script__ = __webpack_require__(231)
/* template */
var __vue_template__ = __webpack_require__(305)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/game.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-579900c4", Component.options)
  } else {
    hotAPI.reload("data-v-579900c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(228)("73e24b0a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-579900c4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./game.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-579900c4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./game.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(229)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_chapters__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_character_verbs__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(30);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var MarkdownIt = __webpack_require__(88),
    md = new MarkdownIt({
    html: true, // Enable HTML tags in source
    xhtmlOut: true // Use '/' to close single tags (<br />).

});

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'game',
    data: function data() {
        return {
            command: null,
            chapters: __WEBPACK_IMPORTED_MODULE_0__game_chapters__["a" /* default */]
        };
    },
    computed: _extends({
        display: function display() {
            return this.story.reverse();
        },
        verbs: function verbs() {
            return _extends({}, __WEBPACK_IMPORTED_MODULE_1__game_character_verbs__["a" /* default */], this.character.verbs, this.character.profession.verbs, this.character.mutation.verbs);
        },
        start: function start() {
            return this.chapters[0];
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapState"])(['story', 'progress', 'character', 'location', 'items', 'rooms'])),
    methods: {
        markdown: function markdown(output) {
            return md.render(output);
        },
        reset: function reset() {
            this.$store.commit('reset');
        },
        execute: function execute() {
            var words = this.command.split(' '),
                verb = words[0],
                remainder = words.splice(1);

            this.saveStory({
                type: 'command',
                text: '<i class="fal fa-fw fa-terminal"></i> ' + this.command
            });

            if (this.isExit()) {
                this.exit();
            } else if (this.validateVerb(verb)) {
                if (this.$store.state.location === null) {
                    this.saveStory({
                        type: 'error',
                        text: '<i class=\'fal fa-fw fa-exclamation-triangle\'></i> There is nothing to do right now.'
                    });
                    this.command = '';
                    return;
                }
                var action = this.verbs[verb];

                this.saveStory({
                    type: 'action',
                    text: action(remainder)
                });
            } else {
                this.saveStory({
                    type: 'error',
                    text: '<i class=\'fal fa-fw fa-exclamation-triangle\'></i> ' + verb + ' directive is unknown.  Please start with a verb or a question word.'
                });
            }

            this.command = '';
        },

        // validation
        validateVerb: function validateVerb(verb) {
            return typeof this.verbs[verb] === 'function';
        },
        isExit: function isExit() {
            var exit = this.chapters[this.progress].exit,
                pattern = new RegExp(exit, 'ig');

            return this.command.search(pattern) !== -1;
        },


        // end game
        exit: function exit() {
            var progress = this.progress,
                text = this.chapters[progress].next;
            this.saveStory({
                type: 'action',
                text: text
            });

            if (this.chapters[progress + 1] !== undefined) {
                this.saveStory({
                    type: 'chapter',
                    object: this.chapters[progress + 1],
                    text: this.chapters[progress + 1].description
                });
                this.saveProgress(progress + 1);
                this.saveLocation(this.chapters[progress + 1].start);
            } else {
                this.saveStory({
                    type: 'the-end',
                    text: '\n# The End\n\nReset the game and play again.\n                        '
                });
                this.saveLocation(null);
            }
        },


        // state saving
        saveStory: function saveStory(object) {
            this.$store.commit('story-add', object);
        },
        saveProgress: function saveProgress(chapter_number) {
            this.$store.commit('progress-update', chapter_number);
        },
        saveLocation: function saveLocation(room_tag) {
            var room = this.$store.state.rooms[room_tag];
            this.$store.commit('location-update', room);
        }
    }
});

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chapters_000__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chapters_001__ = __webpack_require__(233);



/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__chapters_000__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__chapters_001__["a" /* default */]]);

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    title: 'prologue',
    start: 'ac100-365-b',
    description: '\n# Prologue\n\nIt\u2019s like any other day, except you wake to the hateful drone of an Allied Corp jingle.  _Allied Corps way_ followed by a few cacophonous notes to close out the commercial that pierced through your dreams. Mouse, your faithful companion, or more appropriately your L539JZV-M0U53 Pocket Quantum Computer in gun metal black, spoke softly in your ear. <span class="mouse">\u201CNix, an urgent message from Reaper.\u201D</span>\n\nYou groan as your roll out of bed. <span class="nix">\u201CWhat does she want now?\u201D</span>\n\nMouse responded by playing the voice message she\u2019d taken while you\u2019d been asleep. A soft voice echoed in your inner ear. <span class="reaper">\u201CNix, Did you fucking see. Allied Corp has an epic bounty. I want in, but I need your help. Call the fuck back.\u201D</span> What should have sounded like a sweet innocent girl was filled with vulgarities and a harshness that made you shiver. Reaper was just a kid, but Reaper was powerful. Turning Reaper away wasn\'t something you wanted to do lightly.\n\nBut what was this bounty? Should you take the risk? Was it worth it? Look around or ask Mouse if she can help you out.\n        ',
    exit: 'call reaper',
    next: 'Mouse calls Reaper and you wait for the infamous gang leader to pick up.',
    map: ['ac100-365-b', 'ac100-365-b-bath'],
    script: []
});

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(86);


var verbs = {
    ask: function ask(words) {
        return 'You asked something.';
    },

    drop: function drop(words) {
        return 'You dropped something.';
    },

    e: function e(words) {
        return verbs.east(words);
    },
    east: function east(words) {
        return verbs.move('east');
    },

    go: function go(words) {
        return verbs.move(words);
    },

    help: function help(words) {
        return 'You ask for help.';
    },

    l: function l(words) {
        return verbs.look(words);
    },
    listen: function listen(words) {
        return 'You listen carefully.';
    },
    look: function look(words) {
        var object = null,
            room = null;
        switch (words[0]) {
            case 'at':
                object = words.splice(1).join('-');
                break;
            case 'north':
            case 'east':
            case 'south':
            case 'west':
                room = words[0];
                break;
            default:
                return 'You look around. But you see nothing of interest.';
        }
        if (object !== null) {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.items[object].description;
        }
        if (room !== null) {}
    },

    move: function move(words) {
        return 'You move ' + words;
    },

    n: function n(words) {
        return verbs.north(words);
    },
    north: function north(words) {
        return verbs.move('north');
    },

    put: function put(words) {
        return 'You put something somewhere.';
    },

    reset: function reset(words) {
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('reset');
        return '';
    },
    restart: function restart(words) {
        return verbs.reset(words);
    },

    s: function s(words) {
        return verbs.south(words);
    },
    say: function say(words) {
        return 'You say ' + words;
    },
    search: function search(words) {
        return 'You search for the meaning of life.';
    },
    south: function south(words) {
        return verbs.move('south');
    },

    take: function take(words) {
        return 'You take something';
    },
    tell: function tell(words) {
        return 'You tell someone off.  That wasn\'t nice.';
    },

    use: function use(words) {
        return 'You use something.';
    },

    w: function w(words) {
        return verbs.west(words);
    },
    west: function west(words) {
        return verbs.move('west');
    }
};

/* harmony default export */ __webpack_exports__["a"] = (verbs);

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hunter__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aphen__ = __webpack_require__(239);



var character = {
    name: 'Phoenix',
    nicknames: ['Nix'],
    tag: 'nix',
    age: 21,
    prestige: 31,
    id: '6-M1U6Q5R-V2C986L-PH03N1X',
    credits: 1500370,
    basic: {
        hair: 'You have been told your hair is the color brown.',
        eyes: 'You were born without eyes.',
        height: 'You are six feet tall.',
        tattoo: 'Your ID number is tattooed on your right collar bone as a barcode for easy scanning.  The same number is laser-etched microscopically on the collar bone underneath the visible tattoo',
        clothes: 'You tend to wear all black, since color is not something you see.  You always wear a long leather coat with large pockets that hangs to just above your ankles and is rarely buttoned.  You wear a comfortable t-shirt and a pair of tough leather pants tucked inside a pair of thigh-high leather boots that zip with a large gun-metal zipper handle on the outside of each leg. Your ID card hangs from a gun-metal chain around your neck.'
    },
    profession: __WEBPACK_IMPORTED_MODULE_0__hunter__["a" /* default */],
    history: [
        // cover the 10 prestige points
    ],
    pocket: ['mouse', 'id'], // 5 small things
    mutation: __WEBPACK_IMPORTED_MODULE_1__aphen__["a" /* default */],
    cybernetics: [{
        location: 'above right eye',
        type: 'camera',
        description: 'Above your right eyes is a camera that picks up anything you look at and wirelessly transmits the data to your little black box.'
    }, {
        location: 'inner ear',
        type: 'audio',
        description: 'Attached to the bones inside your right ear and jaw is a microphone and speaker that relay information to you wirelessly from your little black box.'
    }],
    verbs: {
        mouse: function mouse(do_something) {
            return 'M0U53 doesn\'t understand what you are asking of her.';
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (character);

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Bounty Hunter',
    tag: 'hunter',
    description: '',
    verbs: {}
});

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Apophenism',
    tag: 'aphen',
    description: 'Apophenism is a mutation that allows a person to see the elemental make up of their surroundings at it\'s most basic level.  This particular mutation can render a person dysfunctional if they do not learn how to control the visual stimuli the mutation causes.  It is rare that a person with apophenism survives with both eyes intact.  Most of the time they remove their own eyes to save their sanity.  Most aphens have the ability to create things from nothing.',
    verbs: {
        create: function create(something) {
            return 'You create something.';
        }
    }
});

/***/ }),

/***/ 240:
/***/ (function(module, exports) {



/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'L539JZV-M0U53 Pocket Quantum Computer',
    tag: 'mouse',
    description: '\n## L539JZV-M0U53 Pocket Quantum Computer\n\nA gun metal colored box with no visible ports or accessories.  The only visible thing is the model and serial number stamped into metal.\n    ',
    size: 'small',
    verbs: {
        what: function what(something) {
            return 'M0U53 doesn\'t know what that is.';
        },
        scan: function scan(something) {
            return 'M0U53 scans.';
        }
    }
});

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var room = {
    name: 'Old New York',
    tag: 'old-new-york',
    description: '\n    ',
    map: ['ac100'],
    items: []
};

/* harmony default export */ __webpack_exports__["a"] = (room);

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var room = {
    name: 'Allied Corp Building 100',
    tag: 'ac100',
    description: '\n    ',
    map: ['365b-hall', 'old-new-york'],
    items: []
};

/* harmony default export */ __webpack_exports__["a"] = (room);

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var room = {
    name: 'Allied Corp Building 100 100th Floor',
    tag: 'ac100-100',
    description: '\n    ',
    map: ['365b-hall', 'old-new-york'],
    items: []
};

/* harmony default export */ __webpack_exports__["a"] = (room);

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var room = {
    name: 'Allied Corp Building 100 365th Floor',
    tag: 'ac100-365',
    description: '\n    ',
    map: ['365b-home', 'stairs', 'elevator'],
    items: ['home-lock']
};

/* harmony default export */ __webpack_exports__["a"] = (room);

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var room = {
    name: 'Allied Corp Building 100 Floor 365 Room B Studio',
    tag: 'ac100-365-b',
    description: '\n    ',
    map: ['365b-bath', '365-hall'],
    items: ['home-lock', '365b-prep', '365b-k300w', '365b-bed', '365b-sofa', '365b-table', '365b-kitchen', '365b-nightstand', '365b-stool-1', '365b-stool-2', '365b-stool-3', '365b-stool-4']
};

/* harmony default export */ __webpack_exports__["a"] = (room);

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var room = {
    name: 'Allied Corp Building 100 Floor 365 Room B Bathroom',
    tag: 'ac100-365-b-bath',
    description: '\n    ',
    map: ['365b-home'],
    items: ['365b-bh200', '365b-b-closet', '365b-k150w', '365b-k400sw']
};

/* harmony default export */ __webpack_exports__["a"] = (room);

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var room = {
    name: 'Allied Corp Building 100 Elevators',
    tag: 'ac100-elevator',
    description: '\n    ',
    map: ['365b-hall', 'old-new-york'],
    items: []
};

/* harmony default export */ __webpack_exports__["a"] = (room);

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var room = {
    name: 'Allied Corp Building 100 Stairs',
    tag: 'ac100-stairs',
    description: '\n    ',
    map: ['365b-hall', 'old-new-york'],
    items: []
};

/* harmony default export */ __webpack_exports__["a"] = (room);

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "game" } }, [
    _c("main", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-2" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-5 col-lg-8", attrs: { id: "display" } },
        _vm._l(_vm.story, function(d) {
          return _c("div", [
            _c("div", {
              class: d.type,
              domProps: { innerHTML: _vm._s(_vm.markdown(d.text)) }
            })
          ])
        })
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-2" })
    ]),
    _vm._v(" "),
    _c(
      "nav",
      { staticClass: "navbar fixed-bottom navbar-expand navbar-dark bg-dark" },
      [
        _c("div", { staticClass: "nav-item form-group my-2 w-100" }, [
          _c("div", { staticClass: "input-group" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.command,
                  expression: "command"
                }
              ],
              staticClass: "form-control",
              attrs: {
                id: "command-line",
                type: "text",
                placeholder: "What do you want to do?",
                autofocus: ""
              },
              domProps: { value: _vm.command },
              on: {
                change: function($event) {
                  _vm.execute()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.command = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-append" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function($event) {
                      _vm.reset()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                        Reset\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "div",
        { staticClass: "input-group-text bg-dark text-primary border-dark" },
        [_c("i", { staticClass: "fal fa-fw fa-angle-right" })]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-579900c4", module.exports)
  }
}

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    title: 'the search for x',
    start: null,
    description: '\n# The Search for X\n\nIt is the 3121 and Earth is overpopulated.  78 billion people and growing live on the dead rock that is now Earth.  The ice caps have melted and the water that remains is polluted.  Only a giant city remains across the planet.  The governments of the twenty-first century have fallen replaced by six mega-corporations that control all aspects of life including births and deaths.  \n\nLife begin and end at prestige rating of zero. It is a constant race to see who is better, or worse, and who is ultimately worthy of surviving until a ripe old age.\n\nA recent leak from Allied Corporation, the oldest and strongest of the megacorps, reveals they are searching for something referred to as \'X\'.  You are one of the first few to learn of this development.  \n\n**Do you wish to undertake this mission?** \n        ',
    exit: 'yes',
    next: 'Your acceptance has been noted, Allied Corporation will pay handsomely for any information regarding their missing property.',
    map: []
});

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_character_character__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_chapters_000__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_items_id__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_items_id___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__game_items_id__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_items_mouse__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_rooms_old_new_york__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_rooms_ac100__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_rooms_ac100_100__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_rooms_ac100_365__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__game_rooms_ac100_365_b__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_rooms_ac100_365_b_bath__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__game_rooms_ac100_elevator__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_rooms_ac100_stairs__ = __webpack_require__(249);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);
















/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
    plugins: [Object(__WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__["default"])()],
    state: {
        story: [{
            type: 'chapter',
            object: __WEBPACK_IMPORTED_MODULE_4__game_chapters_000__["a" /* default */],
            text: __WEBPACK_IMPORTED_MODULE_4__game_chapters_000__["a" /* default */].description
        }],
        character: __WEBPACK_IMPORTED_MODULE_3__game_character_character__["a" /* default */],
        progress: 0,
        location: null,
        items: {
            id: __WEBPACK_IMPORTED_MODULE_5__game_items_id___default.a,
            mouse: __WEBPACK_IMPORTED_MODULE_6__game_items_mouse__["a" /* default */]
        },
        rooms: {
            'old-new-york': __WEBPACK_IMPORTED_MODULE_7__game_rooms_old_new_york__["a" /* default */],
            ac100: __WEBPACK_IMPORTED_MODULE_8__game_rooms_ac100__["a" /* default */],
            'ac100-100': __WEBPACK_IMPORTED_MODULE_9__game_rooms_ac100_100__["a" /* default */],
            'ac100-365': __WEBPACK_IMPORTED_MODULE_10__game_rooms_ac100_365__["a" /* default */],
            'ac100-365-b': __WEBPACK_IMPORTED_MODULE_11__game_rooms_ac100_365_b__["a" /* default */],
            'ac100-365-b-bath': __WEBPACK_IMPORTED_MODULE_12__game_rooms_ac100_365_b_bath__["a" /* default */],
            'ac100-elevator': __WEBPACK_IMPORTED_MODULE_13__game_rooms_ac100_elevator__["a" /* default */],
            'ac100-stairs': __WEBPACK_IMPORTED_MODULE_14__game_rooms_ac100_stairs__["a" /* default */]
        }
    },
    mutations: {
        'story-add': function storyAdd(state, object) {
            state.story.push(object);
        },
        'progress-update': function progressUpdate(state, progress) {
            state.progress = progress;
        },
        'location-update': function locationUpdate(state, room) {
            state.location = room;
        },
        'reset': function reset(state) {
            state.story = [{
                type: 'chapter',
                object: __WEBPACK_IMPORTED_MODULE_4__game_chapters_000__["a" /* default */],
                text: __WEBPACK_IMPORTED_MODULE_4__game_chapters_000__["a" /* default */].description
            }];
            state.character = __WEBPACK_IMPORTED_MODULE_3__game_character_character__["a" /* default */];
            state.location = null;
            state.progress = 0;
            state.items = {
                id: __WEBPACK_IMPORTED_MODULE_5__game_items_id___default.a,
                mouse: __WEBPACK_IMPORTED_MODULE_6__game_items_mouse__["a" /* default */]
            };
            state.rooms = {
                'old-new-york': __WEBPACK_IMPORTED_MODULE_7__game_rooms_old_new_york__["a" /* default */],
                ac100: __WEBPACK_IMPORTED_MODULE_8__game_rooms_ac100__["a" /* default */],
                'ac100-100': __WEBPACK_IMPORTED_MODULE_9__game_rooms_ac100_100__["a" /* default */],
                'ac100-365': __WEBPACK_IMPORTED_MODULE_10__game_rooms_ac100_365__["a" /* default */],
                'ac100-365-b': __WEBPACK_IMPORTED_MODULE_11__game_rooms_ac100_365_b__["a" /* default */],
                'ac100-365-b-bath': __WEBPACK_IMPORTED_MODULE_12__game_rooms_ac100_365_b_bath__["a" /* default */],
                'ac100-elevator': __WEBPACK_IMPORTED_MODULE_13__game_rooms_ac100_elevator__["a" /* default */],
                'ac100-stairs': __WEBPACK_IMPORTED_MODULE_14__game_rooms_ac100_stairs__["a" /* default */]
            };
        }
    }
}));

/***/ })

},[108]);