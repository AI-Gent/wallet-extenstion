/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../extension-base/src/defaults.ts":
/*!*****************************************!*\
  !*** ../extension-base/src/defaults.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_PATH": () => (/* binding */ ALLOWED_PATH),
/* harmony export */   "EXTENSION_PREFIX": () => (/* binding */ EXTENSION_PREFIX),
/* harmony export */   "ID_PREFIX": () => (/* binding */ ID_PREFIX),
/* harmony export */   "MESSAGE_ORIGIN_CONTENT": () => (/* binding */ MESSAGE_ORIGIN_CONTENT),
/* harmony export */   "MESSAGE_ORIGIN_PAGE": () => (/* binding */ MESSAGE_ORIGIN_PAGE),
/* harmony export */   "PASSWORD_EXPIRY_MIN": () => (/* binding */ PASSWORD_EXPIRY_MIN),
/* harmony export */   "PASSWORD_EXPIRY_MS": () => (/* binding */ PASSWORD_EXPIRY_MS),
/* harmony export */   "PHISHING_PAGE_REDIRECT": () => (/* binding */ PHISHING_PAGE_REDIRECT),
/* harmony export */   "PORT_CONTENT": () => (/* binding */ PORT_CONTENT),
/* harmony export */   "PORT_EXTENSION": () => (/* binding */ PORT_EXTENSION),
/* harmony export */   "PORT_MOBILE": () => (/* binding */ PORT_MOBILE)
/* harmony export */ });
// Copyright 2019-2022 @polkadot/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

const ALLOWED_PATH = ['/', '/settings/security', '/accounts/connect-ledger', '/accounts/restore-json', '/accounts/detail', '/accounts/new-seed-phrase'];
const PHISHING_PAGE_REDIRECT = '/phishing-page-detected';
const EXTENSION_PREFIX = ({"NODE_ENV":"development","PKG_NAME":"@subwallet/extension-koni","PKG_VERSION":"1.1.17-0","TARGET_ENV":"extension","ID_PREDIX":"sw-ext-"}).EXTENSION_PREFIX || '';
const ID_PREFIX = ({"NODE_ENV":"development","PKG_NAME":"@subwallet/extension-koni","PKG_VERSION":"1.1.17-0","TARGET_ENV":"extension","ID_PREDIX":"sw-ext-"}).ID_PREFIX || EXTENSION_PREFIX || '';
const PORT_MOBILE = `${EXTENSION_PREFIX}mobile`;
const PORT_CONTENT = `${EXTENSION_PREFIX}koni-content`;
const PORT_EXTENSION = `${EXTENSION_PREFIX}koni-extension`;
const MESSAGE_ORIGIN_PAGE = `${EXTENSION_PREFIX}koni-page`;
const MESSAGE_ORIGIN_CONTENT = `${EXTENSION_PREFIX}koni-content`;
const PASSWORD_EXPIRY_MIN = 15;
const PASSWORD_EXPIRY_MS = PASSWORD_EXPIRY_MIN * 60 * 1000;


/***/ }),

/***/ "../extension-base/src/utils/getId.ts":
/*!********************************************!*\
  !*** ../extension-base/src/utils/getId.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getId": () => (/* binding */ getId)
/* harmony export */ });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults */ "../extension-base/src/defaults.ts");
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0


let counter = 0;
function getId() {
  return `${_defaults__WEBPACK_IMPORTED_MODULE_0__.ID_PREFIX}.${Date.now()}.${++counter}`;
}

/***/ }),

/***/ "../extension-inject/src/chrome.ts":
/*!*****************************************!*\
  !*** ../extension-inject/src/chrome.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chrome": () => (/* binding */ chrome)
/* harmony export */ });
/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/x-global */ "../../node_modules/@polkadot/x-global/index.js");
// Copyright 2019-2022 @polkadot/extension-inject authors & contributors
// SPDX-License-Identifier: Apache-2.0


const chrome = (0,_polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__.extractGlobal)('chrome', _polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__.xglobal.browser);

/***/ }),

/***/ "../../node_modules/@polkadot/x-global/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@polkadot/x-global/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exposeGlobal": () => (/* binding */ exposeGlobal),
/* harmony export */   "extractGlobal": () => (/* binding */ extractGlobal),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo),
/* harmony export */   "xglobal": () => (/* binding */ xglobal)
/* harmony export */ });
/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo.js */ "../../node_modules/@polkadot/x-global/packageInfo.js");

/** @internal Last-resort "this", if it gets here it probably would fail anyway */
function evaluateThis(fn) {
    return fn('return this');
}
/**
 * A cross-environment implementation for globalThis
 */
const xglobal = /*#__PURE__*/ (typeof globalThis !== 'undefined'
    ? globalThis
    : typeof global !== 'undefined'
        ? global
        : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
                ? window
                : evaluateThis(Function));
/**
 * Extracts a known global from the environment, applying a fallback if not found
 */
function extractGlobal(name, fallback) {
    // Not quite sure why this is here - snuck in with TS 4.7.2 with no real idea
    // (as of now) as to why this looks like an "any" when we do cast it to a T
    //
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return typeof xglobal[name] === 'undefined'
        ? fallback
        : xglobal[name];
}
/**
 * Expose a value as a known global, if not already defined
 */
function exposeGlobal(name, fallback) {
    if (typeof xglobal[name] === 'undefined') {
        xglobal[name] = fallback;
    }
}


/***/ }),

/***/ "../../node_modules/@polkadot/x-global/packageInfo.js":
/*!************************************************************!*\
  !*** ../../node_modules/@polkadot/x-global/packageInfo.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
const packageInfo = { name: '@polkadot/x-global', path: ( true) ? new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-global/packageInfo.js").pathname.substring(0, new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-global/packageInfo.js").pathname.lastIndexOf('/') + 1) : 0, type: 'esm', version: '12.2.1' };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subwallet_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-base/defaults */ "../extension-base/src/defaults.ts");
/* harmony import */ var _subwallet_extension_base_utils_getId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-base/utils/getId */ "../extension-base/src/utils/getId.ts");
/* harmony import */ var _subwallet_extension_inject_chrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-inject/chrome */ "../extension-inject/src/chrome.ts");
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0





// connect to the extension
const port = _subwallet_extension_inject_chrome__WEBPACK_IMPORTED_MODULE_0__.chrome.runtime.connect({
  name: _subwallet_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__.PORT_CONTENT
});

// redirect users if this page is considered as phishing, otherwise return false
const handleRedirectPhishing = {
  id: 'redirect-phishing-' + (0,_subwallet_extension_base_utils_getId__WEBPACK_IMPORTED_MODULE_2__.getId)()
};
const redirectIfPhishingProm = new Promise((resolve, reject) => {
  handleRedirectPhishing.resolve = resolve;
  handleRedirectPhishing.reject = reject;
  const transportRequestMessage = {
    id: handleRedirectPhishing.id,
    message: 'pub(phishing.redirectIfDenied)',
    origin: _subwallet_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_ORIGIN_PAGE,
    request: null
  };
  port.postMessage(transportRequestMessage);
});

// send any messages from the extension back to the page
port.onMessage.addListener(data => {
  const {
    id,
    resolve
  } = handleRedirectPhishing;
  if ((data === null || data === void 0 ? void 0 : data.id) === id) {
    resolve && resolve(Boolean(data.response));
  } else {
    window.postMessage({
      ...data,
      origin: _subwallet_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_ORIGIN_CONTENT
    }, '*');
  }
});

// all messages from the page, pass them to the extension
window.addEventListener('message', ({
  data,
  source
}) => {
  // only allow messages from our window, by the inject
  if (source !== window || data.origin !== _subwallet_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_ORIGIN_PAGE) {
    return;
  }
  port.postMessage(data);
});

// inject our data injector
const container = document.head || document.documentElement;
const placeholderScript = document.createElement('script');
const script = document.createElement('script');
const version = "1.1.17-0";
const walletKey = 'subwallet-js';
script.src = _subwallet_extension_inject_chrome__WEBPACK_IMPORTED_MODULE_0__.chrome.extension.getURL('page.js');
placeholderScript.textContent = `class SubWalletPlaceholder {
  provider = undefined;
  isSubWallet = true;
  connected = false;
  isConnected = () => false;
  __waitProvider = (async () => {
    const self = this;
    if (self.provider) {
      return self.provider;
    } else {
      return await new Promise((resolve, reject) => {
        let retry = 0;
        const interval = setInterval(() => {
          if (++retry > 30) {
            clearInterval(interval);
            reject(new Error("SubWallet provider not found"));
          }
          if (self.provider) {
            clearInterval(interval);
            resolve(self.provider);
          }
        }, 100);
      });
    }
  })();
  on() {
    this.__waitProvider.then((provider) => {
      provider.on(...arguments);
    });
  }
  once() {
    this.__waitProvider.then((provider) => {
      provider.once(...arguments);
    });
  }
  off() {
    this.__waitProvider.then((provider) => {
      provider.off(...arguments);
    });
  }
  addListener() {
    this.__waitProvider.then((provider) => {
      provider.addListener(...arguments);
    });
  }
  removeListener() {
    this.__waitProvider.then((provider) => {
      provider.removeListener(...arguments);
    });
  }
  removeAllListeners() {
    this.__waitProvider.then((provider) => {
      provider.removeAllListeners(...arguments);
    });
  }
  async enable() {
    const provider = await this.__waitProvider;
    return await provider.enable(...arguments);
  }
  async request() {
    const provider = await this.__waitProvider;
    return await provider.request(...arguments);
  }
  async send() {
    const provider = await this.__waitProvider;
    return await provider.send(...arguments);
  }
  async sendAsync() {
    const provider = await this.__waitProvider;
    return await provider.sendAsync(...arguments);
  }
}

class SubWalletPolkadotPlaceholder {
  isPlaceholder;

  async enable(origin) {
    const provider = await this.__waitProvider;
    return await provider.enable(...arguments);
  }
}

window.injectedWeb3 = window.injectedWeb3 || {};

if (!window.injectedWeb3['${walletKey}']) {
  window.injectedWeb3['${walletKey}'] = {
    isPlaceholder: true,
    version: '${version}',
    enable: async (origin) => {
      const wallet = await new Promise((resolve, reject) => {
        let retry = 0;
        const interval = setInterval(() => {
          if (++retry > 30) {
            clearInterval(interval);
            reject(new Error("SubWallet provider not found"));
          }
          if (!window.injectedWeb3['${walletKey}'].isPlaceholder) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });

      return await window.injectedWeb3['${walletKey}'].enable(origin);
    }
  };
}

window.SubWallet = new Proxy(new SubWalletPlaceholder(), {
  get(obj, prop) {
    if (prop === "provider") {
      return undefined;
    }

    if (obj.provider) {
      return Reflect.get(obj.provider, prop);
    } else {
      return Reflect.get(obj, prop);
    }
  }
});
`;
container.insertBefore(script, container.children[0]);
container.insertBefore(placeholderScript, container.children[0]);
container.removeChild(script);
container.removeChild(placeholderScript);
redirectIfPhishingProm.then(gotRedirected => {
  if (!gotRedirected) {
    console.log('Check phishing by URL: Passed.');
  }
}).catch(e => {
  console.warn(`Unable to determine if the site is in the phishing list: ${e.message}`);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDYyxZQUFZLENBQUNWLGlCQUFpQixFQUFFSixTQUFTLENBQUNlLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRWYsU0FBUyxDQUFDZ0IsV0FBVyxDQUFDVixNQUFNLENBQUM7QUFDN0JOLFNBQVMsQ0FBQ2dCLFdBQVcsQ0FBQ1osaUJBQWlCLENBQUM7QUFFeENyQixzQkFBc0IsQ0FBQ2tDLElBQUksQ0FBRUMsYUFBYSxJQUFLO0VBQzdDLElBQUksQ0FBQ0EsYUFBYSxFQUFFO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztFQUMvQztBQUNGLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUVDLENBQUMsSUFBSztFQUNkSCxPQUFPLENBQUNJLElBQUksQ0FBRSw0REFBNERELENBQUMsQ0FBV2xDLE9BQVEsRUFBQyxDQUFDO0FBQ2xHLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvZ2V0SWQudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24taW5qZWN0L3NyYy9jaHJvbWUudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvbGthZG90L3gtZ2xvYmFsL2luZGV4LmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC94LWdsb2JhbC9wYWNrYWdlSW5mby5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uL3NyYy9jb250ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmNvbnN0IEFMTE9XRURfUEFUSCA9IFtcbiAgJy8nLFxuICAnL3NldHRpbmdzL3NlY3VyaXR5JyxcbiAgJy9hY2NvdW50cy9jb25uZWN0LWxlZGdlcicsXG4gICcvYWNjb3VudHMvcmVzdG9yZS1qc29uJyxcbiAgJy9hY2NvdW50cy9kZXRhaWwnLFxuICAnL2FjY291bnRzL25ldy1zZWVkLXBocmFzZSdcbl0gYXMgY29uc3Q7XG5jb25zdCBQSElTSElOR19QQUdFX1JFRElSRUNUID0gJy9waGlzaGluZy1wYWdlLWRldGVjdGVkJztcbmNvbnN0IEVYVEVOU0lPTl9QUkVGSVggPSBwcm9jZXNzLmVudi5FWFRFTlNJT05fUFJFRklYIGFzIHN0cmluZyB8fCAnJztcbmNvbnN0IElEX1BSRUZJWCA9IHByb2Nlc3MuZW52LklEX1BSRUZJWCBhcyBzdHJpbmcgfHwgRVhURU5TSU9OX1BSRUZJWCB8fCAnJztcbmNvbnN0IFBPUlRfTU9CSUxFID0gYCR7RVhURU5TSU9OX1BSRUZJWH1tb2JpbGVgO1xuY29uc3QgUE9SVF9DT05URU5UID0gYCR7RVhURU5TSU9OX1BSRUZJWH1rb25pLWNvbnRlbnRgO1xuY29uc3QgUE9SVF9FWFRFTlNJT04gPSBgJHtFWFRFTlNJT05fUFJFRklYfWtvbmktZXh0ZW5zaW9uYDtcbmNvbnN0IE1FU1NBR0VfT1JJR0lOX1BBR0UgPSBgJHtFWFRFTlNJT05fUFJFRklYfWtvbmktcGFnZWA7XG5jb25zdCBNRVNTQUdFX09SSUdJTl9DT05URU5UID0gYCR7RVhURU5TSU9OX1BSRUZJWH1rb25pLWNvbnRlbnRgO1xuY29uc3QgUEFTU1dPUkRfRVhQSVJZX01JTiA9IDE1O1xuY29uc3QgUEFTU1dPUkRfRVhQSVJZX01TID0gUEFTU1dPUkRfRVhQSVJZX01JTiAqIDYwICogMTAwMDtcblxuZXhwb3J0IHtcbiAgQUxMT1dFRF9QQVRILFxuICBQQVNTV09SRF9FWFBJUllfTUlOLFxuICBQQVNTV09SRF9FWFBJUllfTVMsXG4gIFBISVNISU5HX1BBR0VfUkVESVJFQ1QsXG4gIEVYVEVOU0lPTl9QUkVGSVgsXG4gIElEX1BSRUZJWCxcbiAgUE9SVF9NT0JJTEUsXG4gIFBPUlRfQ09OVEVOVCxcbiAgUE9SVF9FWFRFTlNJT04sXG4gIE1FU1NBR0VfT1JJR0lOX1BBR0UsXG4gIE1FU1NBR0VfT1JJR0lOX0NPTlRFTlRcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgSURfUFJFRklYIH0gZnJvbSAnLi4vZGVmYXVsdHMnO1xuXG5sZXQgY291bnRlciA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZCAoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke0lEX1BSRUZJWH0uJHtEYXRlLm5vdygpfS4keysrY291bnRlcn1gO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWluamVjdCBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBleHRyYWN0R2xvYmFsLCB4Z2xvYmFsIH0gZnJvbSAnQHBvbGthZG90L3gtZ2xvYmFsJztcblxuZXhwb3J0IGNvbnN0IGNocm9tZSA9IGV4dHJhY3RHbG9iYWwoJ2Nocm9tZScsIHhnbG9iYWwuYnJvd3Nlcik7XG4iLCJleHBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJy4vcGFja2FnZUluZm8uanMnO1xuLyoqIEBpbnRlcm5hbCBMYXN0LXJlc29ydCBcInRoaXNcIiwgaWYgaXQgZ2V0cyBoZXJlIGl0IHByb2JhYmx5IHdvdWxkIGZhaWwgYW55d2F5ICovXG5mdW5jdGlvbiBldmFsdWF0ZVRoaXMoZm4pIHtcbiAgICByZXR1cm4gZm4oJ3JldHVybiB0aGlzJyk7XG59XG4vKipcbiAqIEEgY3Jvc3MtZW52aXJvbm1lbnQgaW1wbGVtZW50YXRpb24gZm9yIGdsb2JhbFRoaXNcbiAqL1xuZXhwb3J0IGNvbnN0IHhnbG9iYWwgPSAvKiNfX1BVUkVfXyovICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGdsb2JhbFRoaXNcbiAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZ2xvYmFsXG4gICAgICAgIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHNlbGZcbiAgICAgICAgICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/IHdpbmRvd1xuICAgICAgICAgICAgICAgIDogZXZhbHVhdGVUaGlzKEZ1bmN0aW9uKSk7XG4vKipcbiAqIEV4dHJhY3RzIGEga25vd24gZ2xvYmFsIGZyb20gdGhlIGVudmlyb25tZW50LCBhcHBseWluZyBhIGZhbGxiYWNrIGlmIG5vdCBmb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEdsb2JhbChuYW1lLCBmYWxsYmFjaykge1xuICAgIC8vIE5vdCBxdWl0ZSBzdXJlIHdoeSB0aGlzIGlzIGhlcmUgLSBzbnVjayBpbiB3aXRoIFRTIDQuNy4yIHdpdGggbm8gcmVhbCBpZGVhXG4gICAgLy8gKGFzIG9mIG5vdykgYXMgdG8gd2h5IHRoaXMgbG9va3MgbGlrZSBhbiBcImFueVwiIHdoZW4gd2UgZG8gY2FzdCBpdCB0byBhIFRcbiAgICAvL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuICAgIHJldHVybiB0eXBlb2YgeGdsb2JhbFtuYW1lXSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBmYWxsYmFja1xuICAgICAgICA6IHhnbG9iYWxbbmFtZV07XG59XG4vKipcbiAqIEV4cG9zZSBhIHZhbHVlIGFzIGEga25vd24gZ2xvYmFsLCBpZiBub3QgYWxyZWFkeSBkZWZpbmVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBvc2VHbG9iYWwobmFtZSwgZmFsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIHhnbG9iYWxbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHhnbG9iYWxbbmFtZV0gPSBmYWxsYmFjaztcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgcGFja2FnZUluZm8gPSB7IG5hbWU6ICdAcG9sa2Fkb3QveC1nbG9iYWwnLCBwYXRoOiAoaW1wb3J0Lm1ldGEgJiYgaW1wb3J0Lm1ldGEudXJsKSA/IG5ldyBVUkwoaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZS5zdWJzdHJpbmcoMCwgbmV3IFVSTChpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykgKyAxKSA6ICdhdXRvJywgdHlwZTogJ2VzbScsIHZlcnNpb246ICcxMi4yLjEnIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbiBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3R5cGVzJztcblxuaW1wb3J0IHsgVHJhbnNwb3J0UmVxdWVzdE1lc3NhZ2UgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvdHlwZXMnO1xuaW1wb3J0IHsgTUVTU0FHRV9PUklHSU5fQ09OVEVOVCwgTUVTU0FHRV9PUklHSU5fUEFHRSwgUE9SVF9DT05URU5UIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9kZWZhdWx0cyc7XG5pbXBvcnQgeyBnZXRJZCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMvZ2V0SWQnO1xuaW1wb3J0IHsgY2hyb21lIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24taW5qZWN0L2Nocm9tZSc7XG5cbi8vIGNvbm5lY3QgdG8gdGhlIGV4dGVuc2lvblxuY29uc3QgcG9ydCA9IGNocm9tZS5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiBQT1JUX0NPTlRFTlQgfSk7XG5cbi8vIHJlZGlyZWN0IHVzZXJzIGlmIHRoaXMgcGFnZSBpcyBjb25zaWRlcmVkIGFzIHBoaXNoaW5nLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlXG5jb25zdCBoYW5kbGVSZWRpcmVjdFBoaXNoaW5nOiB7IGlkOiBzdHJpbmcsIHJlc29sdmU/OiAodmFsdWU6IChib29sZWFuIHwgUHJvbWlzZUxpa2U8Ym9vbGVhbj4pKSA9PiB2b2lkLCByZWplY3Q/OiAoZTogRXJyb3IpID0+IHZvaWQgfSA9IHtcbiAgaWQ6ICdyZWRpcmVjdC1waGlzaGluZy0nICsgZ2V0SWQoKVxufTtcblxuY29uc3QgcmVkaXJlY3RJZlBoaXNoaW5nUHJvbSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaGFuZGxlUmVkaXJlY3RQaGlzaGluZy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgaGFuZGxlUmVkaXJlY3RQaGlzaGluZy5yZWplY3QgPSByZWplY3Q7XG5cbiAgY29uc3QgdHJhbnNwb3J0UmVxdWVzdE1lc3NhZ2U6IFRyYW5zcG9ydFJlcXVlc3RNZXNzYWdlPCdwdWIocGhpc2hpbmcucmVkaXJlY3RJZkRlbmllZCknPiA9IHtcbiAgICBpZDogaGFuZGxlUmVkaXJlY3RQaGlzaGluZy5pZCxcbiAgICBtZXNzYWdlOiAncHViKHBoaXNoaW5nLnJlZGlyZWN0SWZEZW5pZWQpJyxcbiAgICBvcmlnaW46IE1FU1NBR0VfT1JJR0lOX1BBR0UsXG4gICAgcmVxdWVzdDogbnVsbFxuICB9O1xuXG4gIHBvcnQucG9zdE1lc3NhZ2UodHJhbnNwb3J0UmVxdWVzdE1lc3NhZ2UpO1xufSk7XG5cbi8vIHNlbmQgYW55IG1lc3NhZ2VzIGZyb20gdGhlIGV4dGVuc2lvbiBiYWNrIHRvIHRoZSBwYWdlXG5wb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoZGF0YToge2lkOiBzdHJpbmcsIHJlc3BvbnNlOiBhbnl9KTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgaWQsIHJlc29sdmUgfSA9IGhhbmRsZVJlZGlyZWN0UGhpc2hpbmc7XG5cbiAgaWYgKGRhdGE/LmlkID09PSBpZCkge1xuICAgIHJlc29sdmUgJiYgcmVzb2x2ZShCb29sZWFuKGRhdGEucmVzcG9uc2UpKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyAuLi5kYXRhLCBvcmlnaW46IE1FU1NBR0VfT1JJR0lOX0NPTlRFTlQgfSwgJyonKTtcbiAgfVxufSk7XG5cbi8vIGFsbCBtZXNzYWdlcyBmcm9tIHRoZSBwYWdlLCBwYXNzIHRoZW0gdG8gdGhlIGV4dGVuc2lvblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoeyBkYXRhLCBzb3VyY2UgfTogTWVzc2FnZSk6IHZvaWQgPT4ge1xuICAvLyBvbmx5IGFsbG93IG1lc3NhZ2VzIGZyb20gb3VyIHdpbmRvdywgYnkgdGhlIGluamVjdFxuICBpZiAoc291cmNlICE9PSB3aW5kb3cgfHwgZGF0YS5vcmlnaW4gIT09IE1FU1NBR0VfT1JJR0lOX1BBR0UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwb3J0LnBvc3RNZXNzYWdlKGRhdGEpO1xufSk7XG5cbi8vIGluamVjdCBvdXIgZGF0YSBpbmplY3RvclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5jb25zdCBwbGFjZWhvbGRlclNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5jb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYuUEtHX1ZFUlNJT04gYXMgc3RyaW5nO1xuY29uc3Qgd2FsbGV0S2V5ID0gJ3N1YndhbGxldC1qcyc7XG5cbnNjcmlwdC5zcmMgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgncGFnZS5qcycpO1xuXG5wbGFjZWhvbGRlclNjcmlwdC50ZXh0Q29udGVudCA9IGBjbGFzcyBTdWJXYWxsZXRQbGFjZWhvbGRlciB7XG4gIHByb3ZpZGVyID0gdW5kZWZpbmVkO1xuICBpc1N1YldhbGxldCA9IHRydWU7XG4gIGNvbm5lY3RlZCA9IGZhbHNlO1xuICBpc0Nvbm5lY3RlZCA9ICgpID0+IGZhbHNlO1xuICBfX3dhaXRQcm92aWRlciA9IChhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYucHJvdmlkZXIpIHtcbiAgICAgIHJldHVybiBzZWxmLnByb3ZpZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmV0cnkgPSAwO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZiAoKytyZXRyeSA+IDMwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJTdWJXYWxsZXQgcHJvdmlkZXIgbm90IGZvdW5kXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbGYucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLnByb3ZpZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG4gIG9uKCkge1xuICAgIHRoaXMuX193YWl0UHJvdmlkZXIudGhlbigocHJvdmlkZXIpID0+IHtcbiAgICAgIHByb3ZpZGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cbiAgb25jZSgpIHtcbiAgICB0aGlzLl9fd2FpdFByb3ZpZGVyLnRoZW4oKHByb3ZpZGVyKSA9PiB7XG4gICAgICBwcm92aWRlci5vbmNlKC4uLmFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cbiAgb2ZmKCkge1xuICAgIHRoaXMuX193YWl0UHJvdmlkZXIudGhlbigocHJvdmlkZXIpID0+IHtcbiAgICAgIHByb3ZpZGVyLm9mZiguLi5hcmd1bWVudHMpO1xuICAgIH0pO1xuICB9XG4gIGFkZExpc3RlbmVyKCkge1xuICAgIHRoaXMuX193YWl0UHJvdmlkZXIudGhlbigocHJvdmlkZXIpID0+IHtcbiAgICAgIHByb3ZpZGVyLmFkZExpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5fX3dhaXRQcm92aWRlci50aGVuKChwcm92aWRlcikgPT4ge1xuICAgICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfVxuICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fX3dhaXRQcm92aWRlci50aGVuKChwcm92aWRlcikgPT4ge1xuICAgICAgcHJvdmlkZXIucmVtb3ZlQWxsTGlzdGVuZXJzKC4uLmFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgZW5hYmxlKCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5fX3dhaXRQcm92aWRlcjtcbiAgICByZXR1cm4gYXdhaXQgcHJvdmlkZXIuZW5hYmxlKC4uLmFyZ3VtZW50cyk7XG4gIH1cbiAgYXN5bmMgcmVxdWVzdCgpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuX193YWl0UHJvdmlkZXI7XG4gICAgcmV0dXJuIGF3YWl0IHByb3ZpZGVyLnJlcXVlc3QoLi4uYXJndW1lbnRzKTtcbiAgfVxuICBhc3luYyBzZW5kKCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5fX3dhaXRQcm92aWRlcjtcbiAgICByZXR1cm4gYXdhaXQgcHJvdmlkZXIuc2VuZCguLi5hcmd1bWVudHMpO1xuICB9XG4gIGFzeW5jIHNlbmRBc3luYygpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuX193YWl0UHJvdmlkZXI7XG4gICAgcmV0dXJuIGF3YWl0IHByb3ZpZGVyLnNlbmRBc3luYyguLi5hcmd1bWVudHMpO1xuICB9XG59XG5cbmNsYXNzIFN1YldhbGxldFBvbGthZG90UGxhY2Vob2xkZXIge1xuICBpc1BsYWNlaG9sZGVyO1xuXG4gIGFzeW5jIGVuYWJsZShvcmlnaW4pIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuX193YWl0UHJvdmlkZXI7XG4gICAgcmV0dXJuIGF3YWl0IHByb3ZpZGVyLmVuYWJsZSguLi5hcmd1bWVudHMpO1xuICB9XG59XG5cbndpbmRvdy5pbmplY3RlZFdlYjMgPSB3aW5kb3cuaW5qZWN0ZWRXZWIzIHx8IHt9O1xuXG5pZiAoIXdpbmRvdy5pbmplY3RlZFdlYjNbJyR7d2FsbGV0S2V5fSddKSB7XG4gIHdpbmRvdy5pbmplY3RlZFdlYjNbJyR7d2FsbGV0S2V5fSddID0ge1xuICAgIGlzUGxhY2Vob2xkZXI6IHRydWUsXG4gICAgdmVyc2lvbjogJyR7dmVyc2lvbn0nLFxuICAgIGVuYWJsZTogYXN5bmMgKG9yaWdpbikgPT4ge1xuICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmV0cnkgPSAwO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZiAoKytyZXRyeSA+IDMwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJTdWJXYWxsZXQgcHJvdmlkZXIgbm90IGZvdW5kXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF3aW5kb3cuaW5qZWN0ZWRXZWIzWycke3dhbGxldEtleX0nXS5pc1BsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGF3YWl0IHdpbmRvdy5pbmplY3RlZFdlYjNbJyR7d2FsbGV0S2V5fSddLmVuYWJsZShvcmlnaW4pO1xuICAgIH1cbiAgfTtcbn1cblxud2luZG93LlN1YldhbGxldCA9IG5ldyBQcm94eShuZXcgU3ViV2FsbGV0UGxhY2Vob2xkZXIoKSwge1xuICBnZXQob2JqLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09IFwicHJvdmlkZXJcIikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAob2JqLnByb3ZpZGVyKSB7XG4gICAgICByZXR1cm4gUmVmbGVjdC5nZXQob2JqLnByb3ZpZGVyLCBwcm9wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KG9iaiwgcHJvcCk7XG4gICAgfVxuICB9XG59KTtcbmA7XG5cbmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc2NyaXB0LCBjb250YWluZXIuY2hpbGRyZW5bMF0pO1xuY29udGFpbmVyLmluc2VydEJlZm9yZShwbGFjZWhvbGRlclNjcmlwdCwgY29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbmNvbnRhaW5lci5yZW1vdmVDaGlsZChzY3JpcHQpO1xuY29udGFpbmVyLnJlbW92ZUNoaWxkKHBsYWNlaG9sZGVyU2NyaXB0KTtcblxucmVkaXJlY3RJZlBoaXNoaW5nUHJvbS50aGVuKChnb3RSZWRpcmVjdGVkKSA9PiB7XG4gIGlmICghZ290UmVkaXJlY3RlZCkge1xuICAgIGNvbnNvbGUubG9nKCdDaGVjayBwaGlzaGluZyBieSBVUkw6IFBhc3NlZC4nKTtcbiAgfVxufSkuY2F0Y2goKGUpID0+IHtcbiAgY29uc29sZS53YXJuKGBVbmFibGUgdG8gZGV0ZXJtaW5lIGlmIHRoZSBzaXRlIGlzIGluIHRoZSBwaGlzaGluZyBsaXN0OiAkeyhlIGFzIEVycm9yKS5tZXNzYWdlfWApO1xufSk7XG4iXSwibmFtZXMiOlsiQUxMT1dFRF9QQVRIIiwiUEhJU0hJTkdfUEFHRV9SRURJUkVDVCIsIkVYVEVOU0lPTl9QUkVGSVgiLCJwcm9jZXNzIiwiZW52IiwiSURfUFJFRklYIiwiUE9SVF9NT0JJTEUiLCJQT1JUX0NPTlRFTlQiLCJQT1JUX0VYVEVOU0lPTiIsIk1FU1NBR0VfT1JJR0lOX1BBR0UiLCJNRVNTQUdFX09SSUdJTl9DT05URU5UIiwiUEFTU1dPUkRfRVhQSVJZX01JTiIsIlBBU1NXT1JEX0VYUElSWV9NUyIsImNvdW50ZXIiLCJnZXRJZCIsIkRhdGUiLCJub3ciLCJleHRyYWN0R2xvYmFsIiwieGdsb2JhbCIsImNocm9tZSIsImJyb3dzZXIiLCJwb3J0IiwicnVudGltZSIsImNvbm5lY3QiLCJuYW1lIiwiaGFuZGxlUmVkaXJlY3RQaGlzaGluZyIsImlkIiwicmVkaXJlY3RJZlBoaXNoaW5nUHJvbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHJhbnNwb3J0UmVxdWVzdE1lc3NhZ2UiLCJtZXNzYWdlIiwib3JpZ2luIiwicmVxdWVzdCIsInBvc3RNZXNzYWdlIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJkYXRhIiwiQm9vbGVhbiIsInJlc3BvbnNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNvdXJjZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInBsYWNlaG9sZGVyU2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNjcmlwdCIsInZlcnNpb24iLCJQS0dfVkVSU0lPTiIsIndhbGxldEtleSIsInNyYyIsImV4dGVuc2lvbiIsImdldFVSTCIsInRleHRDb250ZW50IiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJyZW1vdmVDaGlsZCIsInRoZW4iLCJnb3RSZWRpcmVjdGVkIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZSIsIndhcm4iXSwic291cmNlUm9vdCI6IiJ9