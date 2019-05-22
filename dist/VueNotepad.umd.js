(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueNotepad"] = factory();
	else
		root["VueNotepad"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4843":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notepad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d4eb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notepad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notepad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notepad_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d4eb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"01ce58f4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Notepad.vue?vue&type=template&id=b499aa12&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notepad",class:{ editable: _vm.editable },on:{"click":_vm.onClickContainer}},[_c(_vm.is,{directives:[{name:"component-model",rawName:"v-component-model",value:(_vm.form.header),expression:"form.header"},{name:"autogrow",rawName:"v-autogrow",value:(_vm.editable),expression:"editable"}],ref:"header",tag:"component",staticClass:"notepad-header"},[_vm._t("header")],2),_c('div',{staticClass:"notepad-lines"},[_c(_vm.is,{directives:[{name:"component-model",rawName:"v-component-model",value:(_vm.form.body),expression:"form.body"},{name:"autogrow",rawName:"v-autogrow",value:(_vm.editable),expression:"editable"}],ref:"body",tag:"component",staticClass:"notepad-body"},[_vm._t("default")],2)],1),_c(_vm.is,{directives:[{name:"component-model",rawName:"v-component-model",value:(_vm.form.footer),expression:"form.footer"},{name:"autogrow",rawName:"v-autogrow",value:(_vm.editable),expression:"editable"}],ref:"footer",tag:"component",staticClass:"notepad-footer"},[_vm._t("footer")],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Notepad.vue?vue&type=template&id=b499aa12&

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Directives/Autogrow/Autogrow.js
const STYLE_ATTRIBUTES = [
    'font',
    'fontFamily',
    'fontKerning',
    'fontSize',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontVariantLigatures',
    'fontVariantCaps',
    'fontVariantNumeric',
    'fontVariantEastAsian',
    'fontWeight',
    'lineHeight',
    'letterSpacing',
    'padding',
    'margin',
    'textAlign',
    'textAlignLast',
    'textDecoration',
    'textDecorationLine',
    'textDecorationStyle',
    'textDecorationColor',
    'textDecorationSkipInk',
    'textDecorationPosition',
    'textIndent',
    'textRendering',
    'textShadow',
    'textSizeAdjust',
    'textOverflow',
    'textTransform',
    'width',
    'wordBreak',
    'wordSpacing',
    'wordWrap'
];

function Autogrow_escape(html) {
    const el = document.createElement('textarea');    
    el.textContent = html;
    return el.innerHTML;
}

function Autogrow_unescape(html) {
    const el = document.createElement('textarea');
    el.innerHTML = html;
    return el.textContent;
}

function Autogrow_int(str) {
    if(typeof str === 'number') {
        return str;
    }
    else if(!str || !str.replace) {
        return 0;
    }
    
    return parseInt(str.replace(/[^\d.]+/g, '')) || 0;
}

function input(div, el, minHeight, maxHeight) {
    div.innerHTML = Autogrow_escape(el.value).replace(/(?:\r\n|\r|\n)/g, '<br />') + '&nbsp;';

    let dynamicHeight = Math.max(minHeight, height(div));
  
    if(div.innerHTML.match(/(<br\s?\/?\>)+/)) {
       dynamicHeight += Autogrow_int(style(el, 'lineHeight'));
    }

    el.style.height = (
        (!maxHeight || dynamicHeight < maxHeight) ? dynamicHeight : maxHeight
    ) + 'px';
}

function height(el, div) {
    return Autogrow_int(window.getComputedStyle(el).height);

    /*
    const style = window.getComputedStyle(el);
    const height = int(style.height);
    const lineHeight = int(style.lineHeight) || int(style.fontSize) * 1.2;
    
    console.log(height, lineHeight);

    return div.offsetHeight; // + int(div.style.marginTop) + int(div.style.marginBottom);// + (lineHeightModifier ? int(lineHeight) * 1 : 0);// + (int(lineHeight) * lineHeightModifier);
    */
}

function style(el, attr) {
    return window.getComputedStyle(el)[attr];
}

function mimic(el, minHeight) {
    const div = document.createElement('div');
    const styles = window.getComputedStyle(el);

    div.style.position = 'absolute';
    div.style.zIndex = -1;
    div.style.visibility = 'hidden';
    // div.style.minHeight = `${minHeight}px`;
    
    el.parentNode.insertBefore(div, el.nextSibling);

    STYLE_ATTRIBUTES.forEach(key => div.style[key] = styles[key]);

    return div;
}

function init(el, binding, vnode) {
    const minHeight = height(el);
    const div = mimic(el, minHeight);
    const maxHeight = binding.value !== true ? binding.value : 0;

    el.addEventListener('input', event => {
        input(div, event.target, minHeight, maxHeight);
    });

    input(div, el, minHeight, maxHeight);

    return;
}

/* harmony default export */ var Autogrow = ({

    inserted(el, binding, vnode) {
        if(binding.value !== false) {
            if(el.tagName !== 'TEXTAREA') {
                el = el.querySelector('textarea');
            }
    
            if(!el) {
                throw new Error('A textarea is required for the v-autogrow directive.');
            }
            
            init(el, binding, vnode);
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Directives/Autogrow/index.js

/* harmony default export */ var Directives_Autogrow = (Autogrow);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Notepad.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Notepadvue_type_script_lang_js_ = ({
  props: {
    editable: Boolean
  },
  directives: {
    Autogrow: Directives_Autogrow,
    componentModel: {
      inserted(el, binding, vnode) {
        const parts = binding.expression.split('.');
        const varName = parts.pop();
        const context = parts.reduce((carry, value) => {
          return carry[value];
        }, vnode.context);
        el.addEventListener('input', e => {
          vnode.context.$set(context, varName, e.target.value);
        });
        el.value = (vnode.children || []).map(slot => {
          return slot.elm.outerHTML || slot.elm.textContent;
        }).join("\n");
        vnode.context.$set(context, varName, el.value);
      }

    }
  },
  watch: {
    form: {
      deep: true,

      handler(value) {
        this.$emit('input', this.form);
      }

    }
  },
  computed: {
    is() {
      return this.editable ? 'textarea' : 'div';
    }

  },
  methods: {
    onClickContainer() {
      if (this.$refs.body && this.editable) {// this.$refs.body.focus();
      }
    }

  },

  data() {
    return {
      form: {
        header: null,
        body: null,
        footer: null
      }
    };
  }

});
// CONCATENATED MODULE: ./src/Notepad.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Notepadvue_type_script_lang_js_ = (Notepadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Notepad.vue?vue&type=style&index=0&lang=scss&
var Notepadvue_type_style_index_0_lang_scss_ = __webpack_require__("4843");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/Notepad.vue






/* normalize component */

var component = normalizeComponent(
  src_Notepadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Notepad = (component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (Notepad);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=VueNotepad.umd.js.map