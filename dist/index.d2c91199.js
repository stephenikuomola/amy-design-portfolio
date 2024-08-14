// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7OPMX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3945f7d6d2c91199";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"I6z2s":[function(require,module,exports) {
// We want to import a feature detection from the detect-it package
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _detectIt = require("detect-it");
// Dynamically add the button since the functionality will be implemented using JavaScript.
var _iconArrowLeftSvg = require("../assets/images/icon-arrow-left.svg");
var _iconArrowLeftSvgDefault = parcelHelpers.interopDefault(_iconArrowLeftSvg);
var _iconArrowRightSvg = require("../assets/images/icon-arrow-right.svg");
var _iconArrowRightSvgDefault = parcelHelpers.interopDefault(_iconArrowRightSvg);
const DIVIDER = 2;
const NEXT_ITEM = "Next Item";
const PREVIOUS_ITEM = "Previous Item";
const FIRST_NODE_INDEX = 0;
const SECOND_NODE_INDEX = 1;
const THIRD_NODE_INDEX = 2;
const FOURTH_NODE_INDEX = 3;
const EIGHT_NODE_INDEX = 7;
const NINTH_NODE_INDEX = 8;
const myWork = /**@type {Element | null} */ document.querySelector(".myWork");
const liveRegion = /**@type {HTMLParagraphElement} */ document.createElement("p");
const sliderWrapper = document.querySelector("[data-slider-wrapper]");
console.log(sliderWrapper);
const slider = /**@type {HTMLUListElement} */ document.querySelector("[data-slider]");
const sliderButtonsContainer = document.createElement("ul");
let counter = 0;
let delay = 300; // The delay after the event is 'complete' for the callback to run.
let debouncetimeoutID = /** @type {number | boolean} */ false; // This holds the timeout id.
let firstNodeIndex = /** @type {number | null} */ null;
let lastNodeIndex = /** @type {number | null} */ null;
let firstClonedNodeIndex = /** @type {number | null} */ null;
let lastClonedNodeIndex = /** @type {number | null} */ null;
let ispressed = false;
let istouched = false;
let startMouseTouchX = /** @type {number | null} */ null;
let direction = /**@type {string | nill} */ null;
sliderButtonsContainer.className = "myWork__BtnControls";
sliderButtonsContainer.insertAdjacentHTML("afterbegin", `<li>      
    <button type='button' class='btn__previous btn__slider' aria-label='Previous Item'>   
      <img src='${(0, _iconArrowLeftSvgDefault.default)}' aria-hidden='true' alt=''>
    </button>
  </li>
  <li>
    <button type='button' class='btn__next btn__slider' aria-label='Next Item'>
      <img src='${(0, _iconArrowRightSvgDefault.default)}' aria-hidden='true' alt=''>
    </button>
  </li>`);
myWork?.appendChild(sliderButtonsContainer);
/**
 * This function create and clone of the slides and returns it as a NodeList.
 * @returns {NodeList}
 * This function create a cloned of the slides.
 */ function createCloneSlides() {
    const slides = /**@type {NodeList} */ document.querySelectorAll("[data-slide]");
    const firstCloneNode = slides[FIRST_NODE_INDEX].cloneNode(true);
    const secondCloneNode = slides[SECOND_NODE_INDEX].cloneNode(true);
    const fourthCloneNode = slides[slides.length - THIRD_NODE_INDEX].cloneNode(true);
    const lastCloneNode = slides[slides.length - SECOND_NODE_INDEX].cloneNode(true);
    slider?.append(firstCloneNode, secondCloneNode);
    slider?.prepend(fourthCloneNode, lastCloneNode);
    const cloneNodeSlides = document.querySelectorAll("[data-slide]");
    return cloneNodeSlides;
}
const clonedSlides = createCloneSlides();
console.log(clonedSlides);
/**
 * We create a function that will enable us know the width of the slider and one width of the slide.
 * @returns {Array<number>}
 * This function returns an array of numbers
 */ function getElementSizes() {
    const sliderWidth = slider.getBoundingClientRect().width;
    const sliderGap = parseFloat(getComputedStyle(slider).gap);
    const slideWidth = clonedSlides[0].getBoundingClientRect().width + sliderGap;
    return [
        sliderWidth,
        sliderGap,
        slideWidth
    ];
}
/**
 * This function offsets the entire slider the fifth slide in the middle
 * @param {number} slideIndex
 * The takes in a number.
 */ function offsetSlider(slideIndex) {
    counter = slideIndex;
    const [sliderWidth, gap, slideWidth] = getElementSizes();
    const offset = -gap / DIVIDER + slideWidth * slideIndex - (sliderWidth - slideWidth) / DIVIDER;
    slider.style.transform = `translateX(${offset > 0 ? "-" : ""}${Math.abs(offset)}px)`;
}
/**
 * This function initializes the slide index so that the it offsets to the middle of the slider.
 * @returns {void}
 */ function initialSlideIndex() {
    // The original index of the second slide that is not cloned in the cloned slides.
    firstNodeIndex = clonedSlides.length - EIGHT_NODE_INDEX;
    // The original index of the last slide that is not cloned in the cloned slides.
    lastNodeIndex = clonedSlides.length - FOURTH_NODE_INDEX;
    // The index of the first slide that is cloned in the cloned slides
    firstClonedNodeIndex = clonedSlides.length - THIRD_NODE_INDEX;
    // The index of last slide that is cloned in the cloned slides
    lastClonedNodeIndex = clonedSlides.length - NINTH_NODE_INDEX;
    // Initialize the counter that we would use to track the movement of each slide.
    // The initial counter will ensure the fifth slide is always at the center.
    counter = Math.floor((clonedSlides.length - SECOND_NODE_INDEX) / DIVIDER);
    console.log(lastClonedNodeIndex, lastNodeIndex);
    // Ensure that for every transition, the slide is at the center of the viewport.
    offsetSlider(counter);
    // Show the active slide to assistive technology.
    showCurrentSlide();
}
/**
 * The function shows the slide in the middle of viewport to assistive technologies and hides the transitioning slide form assistive technologies.
 * @returns {void}
 */ function showCurrentSlide() {
    // First we need to know what the current slide is.
    const currentSlide = clonedSlides[counter];
    // Then we need to loop over all the slides and then know which slide match the current slide each time the function is executed
    clonedSlides.forEach(function(clonedSlide) {
        clonedSlide.setAttribute("aria-hidden", `${currentSlide !== clonedSlide}`);
    });
}
/**
 * This function will be called and the slider will be offset to ensure the active slide is always at the center.
 * @returns {void}
 */ function handleResize() {
    offsetSlider(counter);
}
/**
 * The debounce can will help us control how often the 'resize' event is called. The debounce function will only be called when the event stops firing after a certain amount of time.
 * @returns {void}
 * This is the function argument that will handle the called when event stops firing.
 */ function debounce() {
    clearTimeout(debouncetimeoutID);
    debouncetimeoutID = setTimeout(handleResize, delay);
}
/**
 * The function updates the slider.
 * @param {boolean} checkClone
 * This parameter is a string value indicating the direction depending on what the user is using to move the slider. It could be button direction, keyboard arrow keys, mousedown/mouseup, and touch effect.
 */ function updateSlide(checkClone) {
    if (direction == NEXT_ITEM) {
        if (counter >= firstClonedNodeIndex && checkClone) {
            slider.style.transition = "none";
            offsetSlider(firstNodeIndex);
        } else if (!checkClone) {
            slider.style.transition = "transform 0.25s ease-in-out";
            counter++;
            offsetSlider(counter);
        }
    }
    if (direction == PREVIOUS_ITEM) {
        if (counter <= lastClonedNodeIndex && checkClone) {
            slider.style.transition = "none";
            offsetSlider(lastNodeIndex);
        } else if (!checkClone) {
            slider.style.transition = "transform 0.25s ease-in-out";
            counter--;
            offsetSlider(counter);
        }
    }
    // slider.style.transition = 'transform 0.25s ease-in-out';
    showCurrentSlide();
}
/**
 * The functions handles the action that follows the user clicking the button.
 * @param {HTMLButtonElement} btnTarget
 * The function accepts a button element
 */ function handleClick(btnTarget) {
    // We need to know what has been clicked so we can know how to move and transition the slider.
    direction = btnTarget.getAttribute("aria-label");
    updateSlide();
}
/**
 * This function tracks the distance covered by the events at both states mousedown/mouseup or touchstart/touchend and determines what direction the slide occurs.
 * @param {number} distanceCovered
 * This is the distance covered by the events along the target element.
 * @param {number} distanceTrigger
 * This helps us know how long the user should apply the pointer across slide before we change slide.
 */ function trackDistances(distanceCovered, distanceTrigger) {
    if (distanceCovered > distanceTrigger) {
        // Previous Slide
        direction = NEXT_ITEM;
        updateSlide();
    } else if (distanceCovered < -distanceTrigger) {
        // Next Slide
        direction = PREVIOUS_ITEM;
        updateSlide();
    }
}
/**
 * This function will set the reset press/touch state
 * @param {MouseEvent | TouchEvent } evtObj
 * This touch event and the mouse event represented by the UIEvent
 * @returns {void}
 */ function startMouseTouchNav(evtObj) {
    if (!ispressed && evtObj instanceof MouseEvent) {
        ispressed = true;
        startMouseTouchX = evtObj.clientX;
    }
    if (!istouched && evtObj instanceof TouchEvent) {
        istouched = true;
        startMouseTouchX = evtObj.changedTouches[0].pageX;
    }
    slider.style.cursor = "grabbing";
}
/**
 * This function handles the mouse down and touch start events.
 * @param {TouchEvent | MouseEvent} evtObj
 * The event to be fired.
 * @returns {void}
 */ function endMouseTouchNav(evtObj) {
    const slideWidth = getElementSizes()[THIRD_NODE_INDEX];
    const distanceTrigger = slideWidth / DIVIDER;
    // We monitor the distance by the mouse pointer and track the direction by using a tracker to move to the next/prev slide.
    if (ispressed && evtObj instanceof MouseEvent) {
        const endMouseTouchX = evtObj.clientX;
        const distanceClientX = endMouseTouchX - startMouseTouchX;
        ispressed = false;
        trackDistances(distanceClientX, distanceTrigger);
    }
    // We monitor the distance covered by the touch pointer and track the direction by using a tracker to move to the next/prev slide.
    if (istouched && evtObj instanceof TouchEvent) {
        const endMouseTouchX = evtObj.changedTouches[0].pageX;
        const distanceTouchX = endMouseTouchX - startMouseTouchX;
        istouched = false;
        trackDistances(distanceTouchX, distanceTrigger);
    }
    slider.style.cursor = "grab";
}
/**
 * This function handles the keyboard navigation
 * @param {KeyboardEvent} evtObj
 * The keyboard event object that described the user interaction with the keyboard.
 */ function handleKeyNav(evtObj) {
    if (evtObj instanceof KeyboardEvent) {
        if (evtObj.key === "ArrowRight") {
            direction = NEXT_ITEM;
            updateSlide();
        } else if (evtObj.key === "ArrowLeft") {
            direction = PREVIOUS_ITEM;
            updateSlide();
        }
    }
}
// Handling the Button events
const sliderButtons = document.querySelectorAll(".btn__slider");
sliderButtons.forEach(function(sliderButton) {
    sliderButton.addEventListener("click", function(evtObj) {
        const btnTarget = evtObj.target.closest(".btn__slider");
        if (!btnTarget) return;
        handleClick(btnTarget);
    });
});
// Navigation using mouse/track pads and fingers
sliderWrapper.addEventListener("mousedown", startMouseTouchNav);
sliderWrapper.addEventListener("mouseup", endMouseTouchNav);
// Older browser try to interpret object in the third argument as a try value in the capture argument. We need to use a feature detection when using this API prevent possible unforeseen results. The aim is to create a passive listener to prevent the preventDefault() from being called on the event making it to block scrolling.
sliderWrapper.addEventListener("touchstart", startMouseTouchNav, (0, _detectIt.supportsPassiveEvents) ? {
    capture: false,
    passive: true
} : false);
sliderWrapper.addEventListener("touchend", endMouseTouchNav, (0, _detectIt.supportsPassiveEvents) ? {
    capture: false,
    passive: true
} : false);
// So when the transition comes to an end we want to remove the transition property applied, update the slides, and then update the live region that would be announced to the user.
slider.addEventListener("transitionend", function() {
    updateSlide(true);
});
// TODO Carry out animation of the different sections when they come into the view of the user on scroll. You can use the IntersectionObserver API to perform this task.
// When the page loads we want the fifth slide to always be at the center of the view.
window.addEventListener("load", initialSlideIndex);
// When the user resizes the window we want the any of the slide to always be at the center of the view.
window.addEventListener("resize", debounce);
// When the user keys down on the right and left arrow keys we want to navigate the slider as well making it accessible for keyboard users.
window.addEventListener("keydown", handleKeyNav);

},{"../assets/images/icon-arrow-left.svg":"jkSEF","../assets/images/icon-arrow-right.svg":"9fw67","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","detect-it":"dz1vJ"}],"jkSEF":[function(require,module,exports) {
module.exports = require("740a9fb16f758d20").getBundleURL("4URB8") + "icon-arrow-left.0a702405.svg" + "?" + Date.now();

},{"740a9fb16f758d20":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9fw67":[function(require,module,exports) {
module.exports = require("f9ef768e448fe91c").getBundleURL("4URB8") + "icon-arrow-right.f674e853.svg" + "?" + Date.now();

},{"f9ef768e448fe91c":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dz1vJ":[function(require,module,exports) {
// so it doesn't throw if no window or matchMedia
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deviceType", ()=>deviceType);
parcelHelpers.export(exports, "primaryInput", ()=>primaryInput);
parcelHelpers.export(exports, "supportsPassiveEvents", ()=>supportsPassiveEvents);
parcelHelpers.export(exports, "supportsPointerEvents", ()=>supportsPointerEvents);
parcelHelpers.export(exports, "supportsTouchEvents", ()=>supportsTouchEvents);
var w = typeof window !== "undefined" ? window : {
    screen: {},
    navigator: {}
};
var matchMedia = (w.matchMedia || function() {
    return {
        matches: false
    };
}).bind(w);
// passive events test
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var passiveOptionAccessed = false;
var options = {
    get passive () {
        return passiveOptionAccessed = true;
    }
};
// have to set and remove a no-op listener instead of null
// (which was used previously), because Edge v15 throws an error
// when providing a null callback.
// https://github.com/rafgraph/detect-passive-events/pull/3
// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function() {};
w.addEventListener && w.addEventListener("p", noop, options);
w.removeEventListener && w.removeEventListener("p", noop, false);
var supportsPassiveEvents = passiveOptionAccessed;
var supportsPointerEvents = "PointerEvent" in w;
var onTouchStartInWindow = "ontouchstart" in w;
var touchEventInWindow = "TouchEvent" in w;
// onTouchStartInWindow is the old-old-legacy way to determine a touch device
// and many websites interpreted it to mean that the device is a touch only phone,
// so today browsers on a desktop/laptop computer with a touch screen (primary input mouse)
// have onTouchStartInWindow as false (to prevent from being confused with a
// touchOnly phone) even though they support the TouchEvents API, so need to check
// both onTouchStartInWindow and touchEventInWindow for TouchEvent support,
// however, some browsers (chromium) support the TouchEvents API even when running on
// a mouse only device (touchEventInWindow true, but onTouchStartInWindow false)
// so the touchEventInWindow check needs to include an coarse pointer media query
var supportsTouchEvents = onTouchStartInWindow || touchEventInWindow && matchMedia("(any-pointer: coarse)").matches;
var hasTouch = (w.navigator.maxTouchPoints || 0) > 0 || supportsTouchEvents;
// userAgent is used as a backup to correct for known device/browser bugs
// and when the browser doesn't support interaction media queries (pointer and hover)
// see https://caniuse.com/css-media-interaction
var userAgent = w.navigator.userAgent || "";
// iPads now support a mouse that can hover, however the media query interaction
// feature results always say iPads only have a coarse pointer that can't hover
// even when a mouse is connected (anyFine and anyHover are always false),
// this unfortunately indicates a touch only device but iPads should
// be classified as a hybrid device, so determine if it is an iPad
// to indicate it should be treated as a hybrid device with anyHover true
var isIPad = matchMedia("(pointer: coarse)").matches && // both iPad and iPhone can "request desktop site", which sets the userAgent to Macintosh
// so need to check both userAgents to determine if it is an iOS device
// and screen size to separate iPad from iPhone
/iPad|Macintosh/.test(userAgent) && Math.min(w.screen.width || 0, w.screen.height || 0) >= 768;
var hasCoarsePrimaryPointer = (matchMedia("(pointer: coarse)").matches || // if the pointer is not coarse and not fine then the browser doesn't support
// interaction media queries (see https://caniuse.com/css-media-interaction)
// so if it has onTouchStartInWindow assume it has a coarse primary pointer
!matchMedia("(pointer: fine)").matches && onTouchStartInWindow) && // bug in firefox (as of v81) on hybrid windows devices where the interaction media queries
// always indicate a touch only device (only has a coarse pointer that can't hover)
// so assume that the primary pointer is not coarse for firefox windows
!/Windows.*Firefox/.test(userAgent);
var hasAnyHoverOrAnyFinePointer = matchMedia("(any-pointer: fine)").matches || matchMedia("(any-hover: hover)").matches || // iPads might have an input device that can hover, so assume it has anyHover
isIPad || // if no onTouchStartInWindow then the browser is indicating that it is not a touch only device
// see above note for supportsTouchEvents
!onTouchStartInWindow;
// a hybrid device is one that both hasTouch and
// any input can hover or has a fine pointer, or the primary pointer is not coarse
// if it's not a hybrid, then if it hasTouch it's touchOnly, otherwise it's mouseOnly
var deviceType = hasTouch && (hasAnyHoverOrAnyFinePointer || !hasCoarsePrimaryPointer) ? "hybrid" : hasTouch ? "touchOnly" : "mouseOnly";
var primaryInput = deviceType === "mouseOnly" ? "mouse" : deviceType === "touchOnly" ? "touch" : // assume the primaryInput is touch, otherwise assume it's mouse
hasCoarsePrimaryPointer ? "touch" : "mouse";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7OPMX","I6z2s"], "I6z2s", "parcelRequire7674")

//# sourceMappingURL=index.d2c91199.js.map
