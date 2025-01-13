/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@metamask/safe-event-emitter/index.js":
/*!****************************************************************!*\
  !*** ../../node_modules/@metamask/safe-event-emitter/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
function safeApply(handler, context, args) {
    try {
        Reflect.apply(handler, context, args);
    }
    catch (err) {
        // Throw error after timeout so as not to interrupt the stack
        setTimeout(() => {
            throw err;
        });
    }
}
function arrayClone(arr) {
    const n = arr.length;
    const copy = new Array(n);
    for (let i = 0; i < n; i += 1) {
        copy[i] = arr[i];
    }
    return copy;
}
class SafeEventEmitter extends events_1.EventEmitter {
    emit(type, ...args) {
        let doError = type === 'error';
        const events = this._events;
        if (events !== undefined) {
            doError = doError && events.error === undefined;
        }
        else if (!doError) {
            return false;
        }
        // If there is no 'error' event listener then throw.
        if (doError) {
            let er;
            if (args.length > 0) {
                [er] = args;
            }
            if (er instanceof Error) {
                // Note: The comments on the `throw` lines are intentional, they show
                // up in Node's output if this results in an unhandled exception.
                throw er; // Unhandled 'error' event
            }
            // At least give some kind of context to the user
            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ''}`);
            err.context = er;
            throw err; // Unhandled 'error' event
        }
        const handler = events[type];
        if (handler === undefined) {
            return false;
        }
        if (typeof handler === 'function') {
            safeApply(handler, this, args);
        }
        else {
            const len = handler.length;
            const listeners = arrayClone(handler);
            for (let i = 0; i < len; i += 1) {
                safeApply(listeners[i], this, args);
            }
        }
        return true;
    }
}
exports["default"] = SafeEventEmitter;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../extension-base/src/background/KoniTypes.ts":
/*!*****************************************************!*\
  !*** ../extension-base/src/background/KoniTypes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIItemState": () => (/* binding */ APIItemState),
/* harmony export */   "AccountExternalErrorCode": () => (/* binding */ AccountExternalErrorCode),
/* harmony export */   "BalanceErrorType": () => (/* binding */ BalanceErrorType),
/* harmony export */   "BasicTxErrorType": () => (/* binding */ BasicTxErrorType),
/* harmony export */   "BasicTxWarningCode": () => (/* binding */ BasicTxWarningCode),
/* harmony export */   "ChainEditStandard": () => (/* binding */ ChainEditStandard),
/* harmony export */   "ChainType": () => (/* binding */ ChainType),
/* harmony export */   "ContractType": () => (/* binding */ ContractType),
/* harmony export */   "CrowdloanParaState": () => (/* binding */ CrowdloanParaState),
/* harmony export */   "EvmProviderErrorType": () => (/* binding */ EvmProviderErrorType),
/* harmony export */   "ExternalRequestPromiseStatus": () => (/* binding */ ExternalRequestPromiseStatus),
/* harmony export */   "ExtrinsicStatus": () => (/* binding */ ExtrinsicStatus),
/* harmony export */   "ExtrinsicType": () => (/* binding */ ExtrinsicType),
/* harmony export */   "MantaPayEnableMessage": () => (/* binding */ MantaPayEnableMessage),
/* harmony export */   "MobileOS": () => (/* binding */ MobileOS),
/* harmony export */   "NETWORK_ERROR": () => (/* binding */ NETWORK_ERROR),
/* harmony export */   "NETWORK_STATUS": () => (/* binding */ NETWORK_STATUS),
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType),
/* harmony export */   "ProviderErrorType": () => (/* binding */ ProviderErrorType),
/* harmony export */   "RMRK_VER": () => (/* binding */ RMRK_VER),
/* harmony export */   "RuntimeEnvironment": () => (/* binding */ RuntimeEnvironment),
/* harmony export */   "StakingStatus": () => (/* binding */ StakingStatus),
/* harmony export */   "StakingTxErrorType": () => (/* binding */ StakingTxErrorType),
/* harmony export */   "StakingType": () => (/* binding */ StakingType),
/* harmony export */   "ThemeNames": () => (/* binding */ ThemeNames),
/* harmony export */   "TransactionDirection": () => (/* binding */ TransactionDirection),
/* harmony export */   "TransferTxErrorType": () => (/* binding */ TransferTxErrorType),
/* harmony export */   "UnstakingStatus": () => (/* binding */ UnstakingStatus),
/* harmony export */   "WalletUnlockType": () => (/* binding */ WalletUnlockType)
/* harmony export */ });
// Copyright 2019-2022 @polkadot/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0

let RuntimeEnvironment;
(function (RuntimeEnvironment) {
  RuntimeEnvironment["Web"] = "Web";
  RuntimeEnvironment["Node"] = "Node";
  RuntimeEnvironment["ExtensionChrome"] = "Extension (Chrome)";
  RuntimeEnvironment["ExtensionFirefox"] = "Extension (Firefox)";
  RuntimeEnvironment["WebWorker"] = "Web Worker";
  RuntimeEnvironment["ServiceWorker"] = "Service Worker";
  RuntimeEnvironment["Unknown"] = "Unknown";
})(RuntimeEnvironment || (RuntimeEnvironment = {}));
/// Staking subscribe

let StakingType;
(function (StakingType) {
  StakingType["NOMINATED"] = "nominated";
  StakingType["POOLED"] = "pooled";
})(StakingType || (StakingType = {}));
let APIItemState;
(function (APIItemState) {
  APIItemState["PENDING"] = "pending";
  APIItemState["READY"] = "ready";
  APIItemState["CACHED"] = "cached";
  APIItemState["ERROR"] = "error";
  APIItemState["NOT_SUPPORT"] = "not_support";
})(APIItemState || (APIItemState = {}));
let RMRK_VER;
(function (RMRK_VER) {
  RMRK_VER["VER_1"] = "1.0.0";
  RMRK_VER["VER_2"] = "2.0.0";
})(RMRK_VER || (RMRK_VER = {}));
let CrowdloanParaState;
(function (CrowdloanParaState) {
  CrowdloanParaState["ONGOING"] = "ongoing";
  CrowdloanParaState["COMPLETED"] = "completed";
  CrowdloanParaState["FAILED"] = "failed";
})(CrowdloanParaState || (CrowdloanParaState = {}));
let ContractType;
(function (ContractType) {
  ContractType["wasm"] = "wasm";
  ContractType["evm"] = "evm";
})(ContractType || (ContractType = {}));
let WalletUnlockType;
(function (WalletUnlockType) {
  WalletUnlockType["ALWAYS_REQUIRED"] = "always_required";
  WalletUnlockType["WHEN_NEEDED"] = "when_needed";
})(WalletUnlockType || (WalletUnlockType = {}));
let TransactionDirection;
(function (TransactionDirection) {
  TransactionDirection["SEND"] = "send";
  TransactionDirection["RECEIVED"] = "received";
})(TransactionDirection || (TransactionDirection = {}));
let ChainType;
(function (ChainType) {
  ChainType["EVM"] = "evm";
  ChainType["SUBSTRATE"] = "substrate";
})(ChainType || (ChainType = {}));
let ExtrinsicType;
(function (ExtrinsicType) {
  ExtrinsicType["TRANSFER_BALANCE"] = "transfer.balance";
  ExtrinsicType["TRANSFER_TOKEN"] = "transfer.token";
  ExtrinsicType["TRANSFER_XCM"] = "transfer.xcm";
  ExtrinsicType["SEND_NFT"] = "send_nft";
  ExtrinsicType["CROWDLOAN"] = "crowdloan";
  ExtrinsicType["STAKING_JOIN_POOL"] = "staking.join_pool";
  ExtrinsicType["STAKING_LEAVE_POOL"] = "staking.leave_pool";
  ExtrinsicType["STAKING_POOL_WITHDRAW"] = "staking.pool_withdraw";
  ExtrinsicType["STAKING_BOND"] = "staking.bond";
  ExtrinsicType["STAKING_UNBOND"] = "staking.unbond";
  ExtrinsicType["STAKING_CLAIM_REWARD"] = "staking.claim_reward";
  ExtrinsicType["STAKING_WITHDRAW"] = "staking.withdraw";
  ExtrinsicType["STAKING_COMPOUNDING"] = "staking.compounding";
  ExtrinsicType["STAKING_CANCEL_COMPOUNDING"] = "staking.cancel_compounding";
  ExtrinsicType["STAKING_CANCEL_UNSTAKE"] = "staking.cancel_unstake";
  ExtrinsicType["EVM_EXECUTE"] = "evm.execute";
  ExtrinsicType["UNKNOWN"] = "unknown";
})(ExtrinsicType || (ExtrinsicType = {}));
let ExtrinsicStatus;
(function (ExtrinsicStatus) {
  ExtrinsicStatus["QUEUED"] = "queued";
  ExtrinsicStatus["SUBMITTING"] = "submitting";
  ExtrinsicStatus["PROCESSING"] = "processing";
  ExtrinsicStatus["SUCCESS"] = "success";
  ExtrinsicStatus["FAIL"] = "fail";
  ExtrinsicStatus["CANCELLED"] = "cancelled";
  ExtrinsicStatus["UNKNOWN"] = "unknown";
})(ExtrinsicStatus || (ExtrinsicStatus = {}));
let BasicTxErrorType;
(function (BasicTxErrorType) {
  BasicTxErrorType["NOT_ENOUGH_BALANCE"] = "NOT_ENOUGH_BALANCE";
  BasicTxErrorType["CHAIN_DISCONNECTED"] = "CHAIN_DISCONNECTED";
  BasicTxErrorType["INVALID_PARAMS"] = "INVALID_PARAMS";
  BasicTxErrorType["DUPLICATE_TRANSACTION"] = "DUPLICATE_TRANSACTION";
  BasicTxErrorType["UNABLE_TO_SIGN"] = "UNABLE_TO_SIGN";
  BasicTxErrorType["USER_REJECT_REQUEST"] = "USER_REJECT_REQUEST";
  BasicTxErrorType["UNABLE_TO_SEND"] = "UNABLE_TO_SEND";
  BasicTxErrorType["SEND_TRANSACTION_FAILED"] = "SEND_TRANSACTION_FAILED";
  BasicTxErrorType["INTERNAL_ERROR"] = "INTERNAL_ERROR";
  BasicTxErrorType["UNSUPPORTED"] = "UNSUPPORTED";
  BasicTxErrorType["TIMEOUT"] = "TIMEOUT";
  BasicTxErrorType["NOT_ENOUGH_EXISTENTIAL_DEPOSIT"] = "NOT_ENOUGH_EXISTENTIAL_DEPOSIT";
})(BasicTxErrorType || (BasicTxErrorType = {}));
let StakingTxErrorType;
(function (StakingTxErrorType) {
  StakingTxErrorType["NOT_ENOUGH_MIN_STAKE"] = "NOT_ENOUGH_MIN_STAKE";
  StakingTxErrorType["EXCEED_MAX_NOMINATIONS"] = "EXCEED_MAX_NOMINATIONS";
  StakingTxErrorType["EXIST_UNSTAKING_REQUEST"] = "EXIST_UNSTAKING_REQUEST";
  StakingTxErrorType["INVALID_ACTIVE_STAKE"] = "INVALID_ACTIVE_STAKE";
  StakingTxErrorType["EXCEED_MAX_UNSTAKING"] = "EXCEED_MAX_UNSTAKING";
  StakingTxErrorType["INACTIVE_NOMINATION_POOL"] = "INACTIVE_NOMINATION_POOL";
})(StakingTxErrorType || (StakingTxErrorType = {}));
let TransferTxErrorType;
(function (TransferTxErrorType) {
  TransferTxErrorType["NOT_ENOUGH_VALUE"] = "NOT_ENOUGH_VALUE";
  TransferTxErrorType["NOT_ENOUGH_FEE"] = "NOT_ENOUGH_FEE";
  TransferTxErrorType["INVALID_TOKEN"] = "INVALID_TOKEN";
  TransferTxErrorType["TRANSFER_ERROR"] = "TRANSFER_ERROR";
  TransferTxErrorType["RECEIVER_NOT_ENOUGH_EXISTENTIAL_DEPOSIT"] = "RECEIVER_NOT_ENOUGH_EXISTENTIAL_DEPOSIT";
})(TransferTxErrorType || (TransferTxErrorType = {}));
let BasicTxWarningCode;
(function (BasicTxWarningCode) {
  BasicTxWarningCode["NOT_ENOUGH_EXISTENTIAL_DEPOSIT"] = "notEnoughExistentialDeposit";
})(BasicTxWarningCode || (BasicTxWarningCode = {}));
let BalanceErrorType;
(function (BalanceErrorType) {
  BalanceErrorType["NETWORK_ERROR"] = "NETWORK_ERROR";
  BalanceErrorType["TOKEN_ERROR"] = "TOKEN_ERROR";
  BalanceErrorType["TIMEOUT"] = "TIMEOUT";
  BalanceErrorType["GET_BALANCE_ERROR"] = "GET_BALANCE_ERROR";
})(BalanceErrorType || (BalanceErrorType = {}));
let ProviderErrorType;

/// Manage account
// Export private key
(function (ProviderErrorType) {
  ProviderErrorType["CHAIN_DISCONNECTED"] = "CHAIN_DISCONNECTED";
  ProviderErrorType["INVALID_PARAMS"] = "INVALID_PARAMS";
  ProviderErrorType["INTERNAL_ERROR"] = "INTERNAL_ERROR";
  ProviderErrorType["USER_REJECT"] = "USER_REJECT";
})(ProviderErrorType || (ProviderErrorType = {}));
// External account

let AccountExternalErrorCode;
(function (AccountExternalErrorCode) {
  AccountExternalErrorCode["INVALID_ADDRESS"] = "invalidToAccount";
  AccountExternalErrorCode["KEYRING_ERROR"] = "keyringError";
  AccountExternalErrorCode["UNKNOWN_ERROR"] = "unknownError";
})(AccountExternalErrorCode || (AccountExternalErrorCode = {}));
/// Sign Transaction

/// Sign External Request

// Status

let ExternalRequestPromiseStatus;

// Structure
(function (ExternalRequestPromiseStatus) {
  ExternalRequestPromiseStatus[ExternalRequestPromiseStatus["PENDING"] = 0] = "PENDING";
  ExternalRequestPromiseStatus[ExternalRequestPromiseStatus["REJECTED"] = 1] = "REJECTED";
  ExternalRequestPromiseStatus[ExternalRequestPromiseStatus["FAILED"] = 2] = "FAILED";
  ExternalRequestPromiseStatus[ExternalRequestPromiseStatus["COMPLETED"] = 3] = "COMPLETED";
})(ExternalRequestPromiseStatus || (ExternalRequestPromiseStatus = {}));
let ThemeNames;
(function (ThemeNames) {
  ThemeNames["LIGHT"] = "light";
  ThemeNames["DARK"] = "dark";
  ThemeNames["SUBSPACE"] = "subspace";
})(ThemeNames || (ThemeNames = {}));
let NETWORK_ERROR;
(function (NETWORK_ERROR) {
  NETWORK_ERROR["INVALID_INFO_TYPE"] = "invalidInfoType";
  NETWORK_ERROR["INJECT_SCRIPT_DETECTED"] = "injectScriptDetected";
  NETWORK_ERROR["EXISTED_NETWORK"] = "existedNetwork";
  NETWORK_ERROR["EXISTED_PROVIDER"] = "existedProvider";
  NETWORK_ERROR["INVALID_PROVIDER"] = "invalidProvider";
  NETWORK_ERROR["NONE"] = "none";
  NETWORK_ERROR["CONNECTION_FAILURE"] = "connectionFailure";
  NETWORK_ERROR["PROVIDER_NOT_SAME_NETWORK"] = "providerNotSameNetwork";
})(NETWORK_ERROR || (NETWORK_ERROR = {}));
let NETWORK_STATUS;

// eslint-disable-next-line @typescript-eslint/ban-types
(function (NETWORK_STATUS) {
  NETWORK_STATUS["CONNECTED"] = "connected";
  NETWORK_STATUS["CONNECTING"] = "connecting";
  NETWORK_STATUS["DISCONNECTED"] = "disconnected";
  NETWORK_STATUS["PENDING"] = "pending";
})(NETWORK_STATUS || (NETWORK_STATUS = {}));
let EvmProviderErrorType;
(function (EvmProviderErrorType) {
  EvmProviderErrorType["USER_REJECTED_REQUEST"] = "USER_REJECTED_REQUEST";
  EvmProviderErrorType["UNAUTHORIZED"] = "UNAUTHORIZED";
  EvmProviderErrorType["UNSUPPORTED_METHOD"] = "UNSUPPORTED_METHOD";
  EvmProviderErrorType["DISCONNECTED"] = "DISCONNECTED";
  EvmProviderErrorType["CHAIN_DISCONNECTED"] = "CHAIN_DISCONNECTED";
  EvmProviderErrorType["INVALID_PARAMS"] = "INVALID_PARAMS";
  EvmProviderErrorType["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(EvmProviderErrorType || (EvmProviderErrorType = {}));
let UnstakingStatus;
(function (UnstakingStatus) {
  UnstakingStatus["CLAIMABLE"] = "CLAIMABLE";
  UnstakingStatus["UNLOCKING"] = "UNLOCKING";
})(UnstakingStatus || (UnstakingStatus = {}));
let StakingStatus;
(function (StakingStatus) {
  StakingStatus["EARNING_REWARD"] = "EARNING_REWARD";
  StakingStatus["PARTIALLY_EARNING"] = "PARTIALLY_EARNING";
  StakingStatus["NOT_EARNING"] = "NOT_EARNING";
  StakingStatus["WAITING"] = "WAITING";
  StakingStatus["NOT_STAKING"] = "NOT_STAKING";
})(StakingStatus || (StakingStatus = {}));
let ChainEditStandard;

// ChainService
// for custom network
(function (ChainEditStandard) {
  ChainEditStandard["EVM"] = "EVM";
  ChainEditStandard["SUBSTRATE"] = "SUBSTRATE";
  ChainEditStandard["UNKNOWN"] = "UNKNOWN";
  ChainEditStandard["MIXED"] = "MIXED";
})(ChainEditStandard || (ChainEditStandard = {}));
let NotificationType;
(function (NotificationType) {
  NotificationType["INFO"] = "info";
  NotificationType["SUCCESS"] = "success";
  NotificationType["WARNING"] = "warning";
  NotificationType["ERROR"] = "error";
})(NotificationType || (NotificationType = {}));
let MantaPayEnableMessage;
(function (MantaPayEnableMessage) {
  MantaPayEnableMessage["WRONG_PASSWORD"] = "WRONG_PASSWORD";
  MantaPayEnableMessage["CHAIN_DISCONNECTED"] = "CHAIN_DISCONNECTED";
  MantaPayEnableMessage["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
  MantaPayEnableMessage["SUCCESS"] = "SUCCESS";
})(MantaPayEnableMessage || (MantaPayEnableMessage = {}));
const MobileOS = ['iOS', 'Android'];

/***/ }),

/***/ "../extension-base/src/background/errors/ProviderError.ts":
/*!****************************************************************!*\
  !*** ../extension-base/src/background/errors/ProviderError.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderError": () => (/* binding */ ProviderError)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_errors_SWError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-base/background/errors/SWError */ "../extension-base/src/background/errors/SWError.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0



const defaultErrorMap = {
  CHAIN_DISCONNECTED: {
    message: (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_0__.detectTranslate)('Network is disconnected'),
    code: undefined
  },
  INVALID_PARAMS: {
    message: (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_0__.detectTranslate)('Undefined error. Please contact SubWallet support'),
    code: undefined
  },
  INTERNAL_ERROR: {
    message: (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_0__.detectTranslate)('Undefined error. Please contact SubWallet support'),
    code: undefined
  },
  USER_REJECT: {
    message: (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_0__.detectTranslate)('Rejected by user'),
    code: undefined
  }
};
class ProviderError extends _subwallet_extension_base_background_errors_SWError__WEBPACK_IMPORTED_MODULE_1__.SWError {
  constructor(errorType, errMessage, data) {
    const {
      code,
      message
    } = defaultErrorMap[errorType];
    super(errorType, errMessage || message, code, data);
    this.errorType = errorType;
  }
}

/***/ }),

/***/ "../extension-base/src/background/errors/SWError.ts":
/*!**********************************************************!*\
  !*** ../extension-base/src/background/errors/SWError.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SWError": () => (/* binding */ SWError)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0

class SWError extends Error {
  constructor(errorType, message, code, data) {
    super(message);
    this.errorType = errorType;
    this.code = code;
    this.data = data;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}

/***/ }),

/***/ "../extension-base/src/defaults.ts":
/*!*****************************************!*\
  !*** ../extension-base/src/defaults.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../extension-base/src/page/Accounts.ts":
/*!**********************************************!*\
  !*** ../extension-base/src/page/Accounts.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accounts)
/* harmony export */ });
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0

// External to class, this.# is not private enough (yet)
let sendRequest;
class Accounts {
  constructor(_sendRequest) {
    sendRequest = _sendRequest;
  }
  get(anyType) {
    return sendRequest('pub(accounts.listV2)', {
      anyType,
      accountAuthType: 'substrate'
    });
  }
  subscribe(cb) {
    let id = null;
    sendRequest('pub(accounts.subscribeV2)', {
      accountAuthType: 'substrate'
    }, cb).then(subId => {
      id = subId;
    }).catch(console.error);
    return () => {
      id && sendRequest('pub(accounts.unsubscribe)', {
        id
      }).catch(console.error);
    };
  }
}

/***/ }),

/***/ "../extension-base/src/page/Injected.ts":
/*!**********************************************!*\
  !*** ../extension-base/src/page/Injected.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accounts */ "../extension-base/src/page/Accounts.ts");
/* harmony import */ var _Metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Metadata */ "../extension-base/src/page/Metadata.ts");
/* harmony import */ var _PostMessageProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostMessageProvider */ "../extension-base/src/page/PostMessageProvider.ts");
/* harmony import */ var _Signer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Signer */ "../extension-base/src/page/Signer.ts");
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(sendRequest) {
    this.accounts = new _Accounts__WEBPACK_IMPORTED_MODULE_0__["default"](sendRequest);
    this.metadata = new _Metadata__WEBPACK_IMPORTED_MODULE_1__["default"](sendRequest);
    this.provider = new _PostMessageProvider__WEBPACK_IMPORTED_MODULE_2__["default"](sendRequest);
    this.signer = new _Signer__WEBPACK_IMPORTED_MODULE_3__["default"](sendRequest);
    setInterval(() => {
      sendRequest('pub(ping)', null).catch(() => {
        console.error('Extension unavailable, ping failed');
      });
    }, 5000 + Math.floor(Math.random() * 5000));
  }
});

/***/ }),

/***/ "../extension-base/src/page/Metadata.ts":
/*!**********************************************!*\
  !*** ../extension-base/src/page/Metadata.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Metadata)
/* harmony export */ });
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0

// External to class, this.# is not private enough (yet)
let sendRequest;
class Metadata {
  constructor(_sendRequest) {
    sendRequest = _sendRequest;
  }
  get() {
    return sendRequest('pub(metadata.list)');
  }
  provide(definition) {
    return sendRequest('pub(metadata.provide)', definition);
  }
  addToken(request) {
    return sendRequest('pub(token.add)', request);
  }
}

/***/ }),

/***/ "../extension-base/src/page/PostMessageProvider.ts":
/*!*********************************************************!*\
  !*** ../extension-base/src/page/PostMessageProvider.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostMessageProvider)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "../../node_modules/eventemitter3/index.mjs");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/logger.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/is/undefined.js");
// Copyright 2019-2022 @polkadot/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0



const l = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.logger)('PostMessageProvider');
// External to class, this.# is not private enough (yet)
let sendRequest;

/**
 * @name PostMessageProvider
 *
 * @description Extension provider to be used by dapps
 */
class PostMessageProvider {
  #eventemitter;
  isClonable = true;

  // Whether or not the actual extension background provider is connected
  #isConnected = false;

  // Subscription IDs are (historically) not guaranteed to be globally unique;
  // only unique for a given subscription method; which is why we identify
  // the subscriptions based on subscription id + type
  #subscriptions = {}; // {[(type,subscriptionId)]: callback}

  /**
   * @param {function}  sendRequest  The function to be called to send requests to the node
   * @param {function}  subscriptionNotificationHandler  Channel for receiving subscription messages
   */
  constructor(_sendRequest) {
    this.#eventemitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_0__["default"]();
    sendRequest = _sendRequest;
  }

  /**
   * @description Returns a clone of the object
   */
  clone() {
    return new PostMessageProvider(sendRequest);
  }

  /**
   * @description Manually disconnect from the connection, clearing autoconnect logic
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  async connect() {
    // FIXME This should see if the extension's state's provider can disconnect
    console.error('PostMessageProvider.disconnect() is not implemented.');
  }

  /**
   * @description Manually disconnect from the connection, clearing autoconnect logic
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  async disconnect() {
    // FIXME This should see if the extension's state's provider can disconnect
    console.error('PostMessageProvider.disconnect() is not implemented.');
  }

  /**
   * @summary `true` when this provider supports subscriptions
   */
  get hasSubscriptions() {
    // FIXME This should see if the extension's state's provider has subscriptions
    return true;
  }

  /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
  get isConnected() {
    return this.#isConnected;
  }
  listProviders() {
    return sendRequest('pub(rpc.listProviders)', undefined);
  }

  /**
   * @summary Listens on events after having subscribed using the [[subscribe]] function.
   * @param  {ProviderInterfaceEmitted} type Event
   * @param  {ProviderInterfaceEmitCb}  sub  Callback
   * @return unsubscribe function
   */
  on(type, sub) {
    this.#eventemitter.on(type, sub);
    return () => {
      this.#eventemitter.removeListener(type, sub);
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async send(method, params, _, subscription) {
    if (subscription) {
      const {
        callback,
        type
      } = subscription;
      const id = await sendRequest('pub(rpc.subscribe)', {
        method,
        params,
        type
      }, res => {
        subscription.callback(null, res);
      });
      this.#subscriptions[`${type}::${id}`] = callback;
      return id;
    }
    return sendRequest('pub(rpc.send)', {
      method,
      params
    });
  }

  /**
   * @summary Spawn a provider on the extension background.
   */
  async startProvider(key) {
    // Disconnect from the previous provider
    this.#isConnected = false;
    this.#eventemitter.emit('disconnected');
    const meta = await sendRequest('pub(rpc.startProvider)', key);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    sendRequest('pub(rpc.subscribeConnected)', null, connected => {
      this.#isConnected = connected;
      if (connected) {
        this.#eventemitter.emit('connected');
      } else {
        this.#eventemitter.emit('disconnected');
      }
      return true;
    });
    return meta;
  }
  subscribe(type, method, params, callback) {
    return this.send(method, params, false, {
      callback,
      type
    });
  }

  /**
   * @summary Allows unsubscribing to subscriptions made with [[subscribe]].
   */
  async unsubscribe(type, method, id) {
    const subscription = `${type}::${id}`;

    // FIXME This now could happen with re-subscriptions. The issue is that with a re-sub
    // the assigned id now does not match what the API user originally received. It has
    // a slight complication in solving - since we cannot rely on the send id, but rather
    // need to find the actual subscription id to map it
    if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(this.#subscriptions[subscription])) {
      l.debug(() => `Unable to find active subscription=${subscription}`);
      return false;
    }
    delete this.#subscriptions[subscription];
    return this.send(method, [id]);
  }
}

/***/ }),

/***/ "../extension-base/src/page/Signer.ts":
/*!********************************************!*\
  !*** ../extension-base/src/page/Signer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signer)
/* harmony export */ });
// Copyright 2019-2022 @polkadot/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

// External to class, this.# is not private enough (yet)
let sendRequest;
let nextId = 0;
class Signer {
  constructor(_sendRequest) {
    sendRequest = _sendRequest;
  }
  async signPayload(payload) {
    const id = ++nextId;
    const result = await sendRequest('pub(extrinsic.sign)', payload);

    // we add an internal id (number) - should have a mapping from the
    // extension id (string) -> internal id (number) if we wish to provide
    // updated via the update functionality (noop at this point)
    return {
      ...result,
      id
    };
  }
  async signRaw(payload) {
    const id = ++nextId;
    const result = await sendRequest('pub(bytes.sign)', payload);
    return {
      ...result,
      id
    };
  }

  // NOTE We don't listen to updates at all, if we do we can interpret the
  // resuklt as provided by the API here
  // public update (id: number, status: Hash | SubmittableResult): void {
  //   // ignore
  // }
}

/***/ }),

/***/ "../extension-base/src/page/SubWalleEvmProvider.ts":
/*!*********************************************************!*\
  !*** ../extension-base/src/page/SubWalleEvmProvider.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubWalletEvmProvider": () => (/* binding */ SubWalletEvmProvider)
/* harmony export */ });
/* harmony import */ var _metamask_safe_event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @metamask/safe-event-emitter */ "../../node_modules/@metamask/safe-event-emitter/index.js");
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0


let subscribeFlag = false;
class SubWalletEvmProvider extends _metamask_safe_event_emitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  isSubWallet = true;
  isMetaMask = false;
  _connected = false;
  constructor(sendMessage, version) {
    super();
    this.version = version;
    this.sendMessage = sendMessage;
    this._connected = true;
  }
  get connected() {
    return this._connected;
  }
  isConnected() {
    return this._connected;
  }
  subscribeExtensionEvents() {
    if (subscribeFlag) {
      return;
    }
    this.sendMessage('evm(events.subscribe)', null, ({
      payload,
      type
    }) => {
      if (['connect', 'disconnect', 'accountsChanged', 'chainChanged', 'message', 'data', 'reconnect', 'error'].includes(type)) {
        if (type === 'connect') {
          this._connected = true;
        } else if (type === 'disconnect') {
          this._connected = false;
        }
        const finalType = type === 'data' ? 'message' : type;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        this.emit(finalType, payload);
      } else {
        console.warn('Can not handle event', type, payload);
      }
    }).then(done => {
      subscribeFlag = true;
    }).catch(() => {
      subscribeFlag = false;
    });
    subscribeFlag = true;
  }
  async enable() {
    return this.request({
      method: 'eth_requestAccounts'
    });
  }
  on(eventName, listener) {
    this.subscribeExtensionEvents();
    super.on(eventName, listener);
    return this;
  }
  once(eventName, listener) {
    this.subscribeExtensionEvents();
    super.once(eventName, listener);
    return this;
  }
  request({
    method,
    params
  }) {
    // Subscribe events
    switch (method) {
      case 'eth_requestAccounts':
        return new Promise((resolve, reject) => {
          const origin = document.title !== '' ? document.title : window.location.hostname;
          this.sendMessage('pub(authorize.tabV2)', {
            origin,
            accountAuthType: 'evm'
          }).then(() => {
            // Return account list
            this.request({
              method: 'eth_accounts'
            }).then(accounts => {
              // @ts-ignore
              resolve(accounts);
            }).catch(e => {
              reject(e);
            });
          }).catch(e => {
            reject(e);
          });
        });
      default:
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.sendMessage('evm(request)', {
            params,
            method
          }).then(result => {
            resolve(result);
          }).catch(e => {
            reject(e);
          });
        });
    }
  }
  _sendSync(payload) {
    let result;
    switch (payload.method) {
      case 'net_version':
        result = this.version ? `SubWallet v${this.version}` : null;
        break;
      default:
        throw new Error(`Not support ${payload.method}`);
    }
    return {
      id: payload.id,
      jsonrpc: payload.jsonrpc,
      result
    };
  }
  send(methodOrPayload, callbackOrArgs) {
    if (typeof methodOrPayload === 'string' && (!callbackOrArgs || Array.isArray(callbackOrArgs))) {
      return this.request({
        method: methodOrPayload,
        params: callbackOrArgs
      });
    } else if (methodOrPayload && typeof methodOrPayload === 'object' && typeof callbackOrArgs === 'function') {
      return this.request(methodOrPayload).then(rs => {
        callbackOrArgs(rs);
      });
    }
    return this._sendSync(methodOrPayload);
  }
  sendAsync(payload, callback) {
    this.request(payload).then(result => {
      // @ts-ignore
      callback(null, {
        result
      });
    }).catch(e => {
      callback(e);
    });
  }
}

/***/ }),

/***/ "../extension-base/src/page/index.ts":
/*!*******************************************!*\
  !*** ../extension-base/src/page/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enable": () => (/* binding */ enable),
/* harmony export */   "handleResponse": () => (/* binding */ handleResponse),
/* harmony export */   "initEvmProvider": () => (/* binding */ initEvmProvider),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_errors_ProviderError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-base/background/errors/ProviderError */ "../extension-base/src/background/errors/ProviderError.ts");
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_page_SubWalleEvmProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-base/page/SubWalleEvmProvider */ "../extension-base/src/page/SubWalleEvmProvider.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults */ "../extension-base/src/defaults.ts");
/* harmony import */ var _utils_getId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getId */ "../extension-base/src/utils/getId.ts");
/* harmony import */ var _Injected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Injected */ "../extension-base/src/page/Injected.ts");
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0







// when sending a message from the injector to the extension, we
//  - create an event - this we send to the loader
//  - the loader takes this event and uses port.postMessage to background
//  - on response, the loader creates a reponse event
//  - this injector, listens on the events, maps it to the original
//  - resolves/rejects the promise with the result (or sub data)

const handlers = {};

// a generic message sender that creates an event, returning a promise that will
// resolve once the event is resolved (by the response listener just below this)

function sendMessage(message, request, subscriber) {
  return new Promise((resolve, reject) => {
    const id = (0,_utils_getId__WEBPACK_IMPORTED_MODULE_0__.getId)();
    handlers[id] = {
      reject,
      resolve,
      subscriber
    };
    const transportRequestMessage = {
      id,
      message,
      origin: _defaults__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_ORIGIN_PAGE,
      request: request || null
    };
    window.postMessage(transportRequestMessage, '*');
  });
}

// the enable function, called by the dapp to allow access
async function enable(origin) {
  await sendMessage('pub(authorize.tabV2)', {
    origin
  });
  return new _Injected__WEBPACK_IMPORTED_MODULE_2__["default"](sendMessage);
}
function handleResponse(data) {
  const handler = handlers[data.id];
  if (!handler) {
    console.error(`Unknown response: ${JSON.stringify(data)}`);
    return;
  }
  if (!handler.subscriber) {
    delete handlers[data.id];
  }
  if (data.subscription) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    handler.subscriber(data.subscription);
  } else if (data.error) {
    handler.reject(new _subwallet_extension_base_background_errors_ProviderError__WEBPACK_IMPORTED_MODULE_3__.ProviderError(_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_4__.ProviderErrorType.INTERNAL_ERROR, data.error, data.errorCode));
  } else {
    handler.resolve(data.response);
  }
}
function initEvmProvider(version) {
  return new _subwallet_extension_base_page_SubWalleEvmProvider__WEBPACK_IMPORTED_MODULE_5__.SubWalletEvmProvider(sendMessage, version);
}

/***/ }),

/***/ "../extension-base/src/utils/getId.ts":
/*!********************************************!*\
  !*** ../extension-base/src/utils/getId.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../extension-base/src/utils/translate.ts":
/*!************************************************!*\
  !*** ../extension-base/src/utils/translate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectTranslate": () => (/* binding */ detectTranslate)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

const detectTranslate = message => message;

/***/ }),

/***/ "../extension-inject/src/bundle.ts":
/*!*****************************************!*\
  !*** ../extension-inject/src/bundle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectEvmExtension": () => (/* binding */ injectEvmExtension),
/* harmony export */   "injectExtension": () => (/* binding */ injectExtension),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo__WEBPACK_IMPORTED_MODULE_0__.packageInfo)
/* harmony export */ });
/* harmony import */ var _packageInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo */ "../extension-inject/src/packageInfo.ts");
// Copyright 2019-2022 @polkadot/extension-inject authors & contributors
// SPDX-License-Identifier: Apache-2.0



// It is recommended to always use the function below to shield the extension and dapp from
// any future changes. The exposed interface will manage access between the 2 environments,
// be it via window (current), postMessage (under consideration) or any other mechanism
function injectExtension(enable, {
  name,
  version
}) {
  // small helper with the typescript types, just cast window
  const windowInject = window;

  // don't clobber the existing object, we will add it (or create as needed)
  windowInject.injectedWeb3 = windowInject.injectedWeb3 || {};

  // add our enable function
  windowInject.injectedWeb3[name] = {
    enable: origin => enable(origin),
    version
  };
}

// Inject EVM Provider
function injectEvmExtension(evmProvider) {
  // small helper with the typescript types, just cast window
  const windowInject = window;

  // add our enable function
  if (windowInject.SubWallet) {
    // Provider has been initialized in proxy mode
    windowInject.SubWallet.provider = evmProvider;
  } else {
    // Provider has been initialized in direct mode
    windowInject.SubWallet = evmProvider;
  }
  windowInject.dispatchEvent(new Event('subwallet#initialized'));

  // Publish to global if window.ethereum is not available
  windowInject.addEventListener('load', () => {
    if (!windowInject.ethereum) {
      windowInject.ethereum = evmProvider;
      windowInject.dispatchEvent(new Event('ethereum#initialized'));
    }
  });

  // Todo: Need more discuss to make SubWallet as global before window load because it can be conflict with MetaMask
  // windowInject.ethereum = evmProvider;
  // windowInject.dispatchEvent(new Event('ethereum#initialized'));
}

/***/ }),

/***/ "../extension-inject/src/index.ts":
/*!****************************************!*\
  !*** ../extension-inject/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectEvmExtension": () => (/* reexport safe */ _bundle__WEBPACK_IMPORTED_MODULE_0__.injectEvmExtension),
/* harmony export */   "injectExtension": () => (/* reexport safe */ _bundle__WEBPACK_IMPORTED_MODULE_0__.injectExtension),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _bundle__WEBPACK_IMPORTED_MODULE_0__.packageInfo)
/* harmony export */ });
/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bundle */ "../extension-inject/src/bundle.ts");
// Copyright 2019-2022 @polkadot/extension-inject authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Since we inject into pages, we skip this
// import './detectPackage';



/***/ }),

/***/ "../extension-inject/src/packageInfo.ts":
/*!**********************************************!*\
  !*** ../extension-inject/src/packageInfo.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
// Copyright 2017-2022 @subwallet/extension-inject authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Do not edit, auto-generated by @polkadot/dev

const packageInfo = {
  name: '@subwallet/extension-inject',
  path: 'auto',
  type: 'auto',
  version: '1.1.17-0'
};

/***/ }),

/***/ "../../node_modules/bn.js/lib/bn.js":
/*!******************************************!*\
  !*** ../../node_modules/bn.js/lib/bn.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
      Buffer = window.Buffer;
    } else {
      Buffer = (__webpack_require__(/*! buffer */ "?2e65").Buffer);
    }
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
      this.negative = 1;
    }

    if (start < number.length) {
      if (base === 16) {
        this._parseHex(number, start, endian);
      } else {
        this._parseBase(number, base, start);
        if (endian === 'le') {
          this._initArray(this.toArray(), base, endian);
        }
      }
    }
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [number & 0x3ffffff];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [0];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this._strip();
  };

  function parseHex4Bits (string, index) {
    var c = string.charCodeAt(index);
    // '0' - '9'
    if (c >= 48 && c <= 57) {
      return c - 48;
    // 'A' - 'F'
    } else if (c >= 65 && c <= 70) {
      return c - 55;
    // 'a' - 'f'
    } else if (c >= 97 && c <= 102) {
      return c - 87;
    } else {
      assert(false, 'Invalid character in ' + string);
    }
  }

  function parseHexByte (string, lowerBound, index) {
    var r = parseHex4Bits(string, index);
    if (index - 1 >= lowerBound) {
      r |= parseHex4Bits(string, index - 1) << 4;
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start, endian) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    // 24-bits chunks
    var off = 0;
    var j = 0;

    var w;
    if (endian === 'be') {
      for (i = number.length - 1; i >= start; i -= 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    } else {
      var parseLength = number.length - start;
      for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    }

    this._strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var b = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        b = c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        b = c - 17 + 0xa;

      // '0' - '9'
      } else {
        b = c;
      }
      assert(c >= 0 && b < mul, 'Invalid character');
      r += b;
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [0];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    this._strip();
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  function move (dest, src) {
    dest.words = src.words;
    dest.length = src.length;
    dest.negative = src.negative;
    dest.red = src.red;
  }

  BN.prototype._move = function _move (dest) {
    move(dest, this);
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype._strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  // Check Symbol.for because not everywhere where Symbol defined
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility
  if (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') {
    try {
      BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect;
    } catch (e) {
      BN.prototype.inspect = inspect;
    }
  } else {
    BN.prototype.inspect = inspect;
  }

  function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  }

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modrn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16, 2);
  };

  if (Buffer) {
    BN.prototype.toBuffer = function toBuffer (endian, length) {
      return this.toArrayLike(Buffer, endian, length);
    };
  }

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  var allocate = function allocate (ArrayType, size) {
    if (ArrayType.allocUnsafe) {
      return ArrayType.allocUnsafe(size);
    }
    return new ArrayType(size);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    this._strip();

    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    var res = allocate(ArrayType, reqLength);
    var postfix = endian === 'le' ? 'LE' : 'BE';
    this['_toArrayLike' + postfix](res, byteLength);
    return res;
  };

  BN.prototype._toArrayLikeLE = function _toArrayLikeLE (res, byteLength) {
    var position = 0;
    var carry = 0;

    for (var i = 0, shift = 0; i < this.length; i++) {
      var word = (this.words[i] << shift) | carry;

      res[position++] = word & 0xff;
      if (position < res.length) {
        res[position++] = (word >> 8) & 0xff;
      }
      if (position < res.length) {
        res[position++] = (word >> 16) & 0xff;
      }

      if (shift === 6) {
        if (position < res.length) {
          res[position++] = (word >> 24) & 0xff;
        }
        carry = 0;
        shift = 0;
      } else {
        carry = word >>> 24;
        shift += 2;
      }
    }

    if (position < res.length) {
      res[position++] = carry;

      while (position < res.length) {
        res[position++] = 0;
      }
    }
  };

  BN.prototype._toArrayLikeBE = function _toArrayLikeBE (res, byteLength) {
    var position = res.length - 1;
    var carry = 0;

    for (var i = 0, shift = 0; i < this.length; i++) {
      var word = (this.words[i] << shift) | carry;

      res[position--] = word & 0xff;
      if (position >= 0) {
        res[position--] = (word >> 8) & 0xff;
      }
      if (position >= 0) {
        res[position--] = (word >> 16) & 0xff;
      }

      if (shift === 6) {
        if (position >= 0) {
          res[position--] = (word >> 24) & 0xff;
        }
        carry = 0;
        shift = 0;
      } else {
        carry = word >>> 24;
        shift += 2;
      }
    }

    if (position >= 0) {
      res[position--] = carry;

      while (position >= 0) {
        res[position--] = 0;
      }
    }
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] >>> wbit) & 0x01;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this._strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this._strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this._strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this._strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this._strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this._strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out._strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out._strip();
  }

  function jumboMulTo (self, num, out) {
    // Temporary disable, see https://github.com/indutny/bn.js/issues/211
    // var fftm = new FFTM();
    // return fftm.mulp(self, num, out);
    return bigMulTo(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out._strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return isNegNum ? this.ineg() : this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this._strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this._strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this._strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) <= num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this._strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this._strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this._strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q._strip();
    }
    a._strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modrn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modrn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || (r2 === 1 && cmp === 0)) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modrn = function modrn (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return isNegNum ? -acc : acc;
  };

  // WARNING: DEPRECATED
  BN.prototype.modn = function modn (num) {
    return this.modrn(num);
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    this._strip();
    return isNegNum ? this.ineg() : this;
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this._strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      if (r.strip !== undefined) {
        // r is a BN v4 instance
        r.strip();
      } else {
        // r is a BN v5 instance
        r._strip();
      }
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);

    move(a, a.umod(this.m)._forceRed(this));
    return a;
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})( false || module, this);


/***/ }),

/***/ "../../node_modules/eventemitter3/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/eventemitter3/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "../../node_modules/events/events.js":
/*!*******************************************!*\
  !*** ../../node_modules/events/events.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "?2e65":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "../../node_modules/@polkadot/util/format/formatDate.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@polkadot/util/format/formatDate.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
/** @internal */
function zeroPad(value) {
    return value.toString().padStart(2, '0');
}
/**
 * @name formatDate
 * @description Formats a date in CCYY-MM-DD HH:MM:SS format
 */
function formatDate(date) {
    const year = date.getFullYear().toString();
    const month = zeroPad((date.getMonth() + 1));
    const day = zeroPad(date.getDate());
    const hour = zeroPad(date.getHours());
    const minute = zeroPad(date.getMinutes());
    const second = zeroPad(date.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/has.js":
/*!************************************************!*\
  !*** ../../node_modules/@polkadot/util/has.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasBigInt": () => (/* binding */ hasBigInt),
/* harmony export */   "hasBuffer": () => (/* binding */ hasBuffer),
/* harmony export */   "hasCjs": () => (/* binding */ hasCjs),
/* harmony export */   "hasDirname": () => (/* binding */ hasDirname),
/* harmony export */   "hasEsm": () => (/* binding */ hasEsm),
/* harmony export */   "hasProcess": () => (/* binding */ hasProcess),
/* harmony export */   "hasWasm": () => (/* binding */ hasWasm)
/* harmony export */ });
/* harmony import */ var _polkadot_x_bigint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/x-bigint */ "../../node_modules/@polkadot/x-bigint/index.js");
/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/x-global */ "../../node_modules/@polkadot/util/node_modules/@polkadot/x-global/index.js");


/** true if the environment has proper BigInt support */
const hasBigInt = typeof _polkadot_x_bigint__WEBPACK_IMPORTED_MODULE_0__.BigInt === 'function' && typeof _polkadot_x_bigint__WEBPACK_IMPORTED_MODULE_0__.BigInt.asIntN === 'function';
/** true if the environment is CJS */
const hasCjs = typeof require === 'function' && typeof module !== 'undefined';
/** true if the environment has __dirname available */
const hasDirname = typeof __dirname !== 'undefined';
/** true if the environment is ESM */
const hasEsm = !hasCjs;
/** true if the environment has WebAssembly available */
const hasWasm = typeof WebAssembly !== 'undefined';
/** true if the environment has support for Buffer (typically Node.js) */
const hasBuffer = typeof _polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__.xglobal.Buffer === 'function' && typeof _polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__.xglobal.Buffer.isBuffer === 'function';
/** true if the environment has process available (typically Node.js) */
const hasProcess = typeof _polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__.xglobal.process === 'object';


/***/ }),

/***/ "../../node_modules/@polkadot/util/hex/toU8a.js":
/*!******************************************************!*\
  !*** ../../node_modules/@polkadot/util/hex/toU8a.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToU8a": () => (/* binding */ hexToU8a)
/* harmony export */ });
const CHR = '0123456789abcdef';
const U8 = new Uint8Array(256);
const U16 = new Uint8Array(256 * 256);
for (let i = 0, count = CHR.length; i < count; i++) {
    U8[CHR[i].charCodeAt(0) | 0] = i | 0;
    if (i > 9) {
        U8[CHR[i].toUpperCase().charCodeAt(0) | 0] = i | 0;
    }
}
for (let i = 0; i < 256; i++) {
    const s = i << 8;
    for (let j = 0; j < 256; j++) {
        U16[s | j] = (U8[i] << 4) | U8[j];
    }
}
/**
 * @name hexToU8a
 * @summary Creates a Uint8Array object from a hex string.
 * @description
 * `null` inputs returns an empty `Uint8Array` result. Hex input values return the actual bytes value converted to a Uint8Array. Anything that is not a hex string (including the `0x` prefix) throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToU8a } from '@polkadot/util';
 *
 * hexToU8a('0x80001f'); // Uint8Array([0x80, 0x00, 0x1f])
 * hexToU8a('0x80001f', 32); // Uint8Array([0x00, 0x80, 0x00, 0x1f])
 * ```
 */
function hexToU8a(value, bitLength = -1) {
    if (!value) {
        return new Uint8Array();
    }
    let s = value.startsWith('0x')
        ? 2
        : 0;
    const decLength = Math.ceil((value.length - s) / 2);
    const endLength = Math.ceil(bitLength === -1
        ? decLength
        : bitLength / 8);
    const result = new Uint8Array(endLength);
    const offset = endLength > decLength
        ? endLength - decLength
        : 0;
    for (let i = offset; i < endLength; i++, s += 2) {
        // The big factor here is actually the string lookups. If we do
        // HEX_TO_U16[value.substring()] we get an 10x slowdown. In the
        // same vein using charCodeAt (as opposed to value[s] or value.charAt(s)) is
        // also the faster operation by at least 2x with the character map above
        result[i] = U16[(value.charCodeAt(s) << 8) | value.charCodeAt(s + 1)];
    }
    return result;
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/is/bn.js":
/*!**************************************************!*\
  !*** ../../node_modules/@polkadot/util/is/bn.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBn": () => (/* binding */ isBn)
/* harmony export */ });
/* harmony import */ var _bn_bn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bn/bn.js */ "../../node_modules/bn.js/lib/bn.js");

/**
 * @name isBn
 * @summary Tests for a `BN` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { isBn } from '@polkadot/util';
 *
 * console.log('isBn', isBn(new BN(1))); // => true
 * ```
 */
function isBn(value) {
    return _bn_bn_js__WEBPACK_IMPORTED_MODULE_0__.isBN(value);
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/is/buffer.js":
/*!******************************************************!*\
  !*** ../../node_modules/@polkadot/util/is/buffer.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBuffer": () => (/* binding */ isBuffer)
/* harmony export */ });
/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/x-global */ "../../node_modules/@polkadot/util/node_modules/@polkadot/x-global/index.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../has.js */ "../../node_modules/@polkadot/util/has.js");
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function.js */ "../../node_modules/@polkadot/util/is/function.js");



/**
 * @name isBuffer
 * @summary Tests for a `Buffer` object instance.
 * @description
 * Checks to see if the input object is an instance of `Buffer`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBuffer } from '@polkadot/util';
 *
 * console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
 * ```
 */
function isBuffer(value) {
    // we do check a function first, since it is slightly faster than isBuffer itself
    return _has_js__WEBPACK_IMPORTED_MODULE_0__.hasBuffer && !!value && (0,_function_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.readDoubleLE) && _polkadot_x_global__WEBPACK_IMPORTED_MODULE_2__.xglobal.Buffer.isBuffer(value);
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/is/function.js":
/*!********************************************************!*\
  !*** ../../node_modules/@polkadot/util/is/function.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
/**
 * @name isFunction
 * @summary Tests for a `function`.
 * @description
 * Checks to see if the input value is a JavaScript function.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isFunction } from '@polkadot/util';
 *
 * isFunction(() => false); // => true
 * ```
 */
function isFunction(value) {
    return typeof value === 'function';
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/is/hex.js":
/*!***************************************************!*\
  !*** ../../node_modules/@polkadot/util/is/hex.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGEX_HEX_NOPREFIX": () => (/* binding */ REGEX_HEX_NOPREFIX),
/* harmony export */   "REGEX_HEX_PREFIXED": () => (/* binding */ REGEX_HEX_PREFIXED),
/* harmony export */   "isHex": () => (/* binding */ isHex)
/* harmony export */ });
const REGEX_HEX_PREFIXED = /^0x[\da-fA-F]+$/;
const REGEX_HEX_NOPREFIX = /^[\da-fA-F]+$/;
/**
 * @name isHex
 * @summary Tests for a hex string.
 * @description
 * Checks to see if the input value is a `0x` prefixed hex string. Optionally (`bitLength` !== -1) checks to see if the bitLength is correct.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isHex } from '@polkadot/util';
 *
 * isHex('0x1234'); // => true
 * isHex('0x1234', 8); // => false
 * ```
 */
function isHex(value, bitLength = -1, ignoreLength) {
    return (typeof value === 'string' && (value === '0x' ||
        REGEX_HEX_PREFIXED.test(value))) && (bitLength === -1
        ? (ignoreLength || (value.length % 2 === 0))
        : (value.length === (2 + Math.ceil(bitLength / 4))));
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/is/object.js":
/*!******************************************************!*\
  !*** ../../node_modules/@polkadot/util/is/object.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
/**
 * @name isObject
 * @summary Tests for an `object`.
 * @description
 * Checks to see if the input value is a JavaScript object.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObject } from '@polkadot/util';
 *
 * isObject({}); // => true
 * isObject('something'); // => false
 * ```
 */
function isObject(value) {
    return !!value && typeof value === 'object';
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/is/u8a.js":
/*!***************************************************!*\
  !*** ../../node_modules/@polkadot/util/is/u8a.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isU8a": () => (/* binding */ isU8a)
/* harmony export */ });
/**
 * @name isU8a
 * @summary Tests for a `Uint8Array` object instance.
 * @description
 * Checks to see if the input object is an instance of `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUint8Array } from '@polkadot/util';
 *
 * console.log('isU8a', isU8a([])); // => false
 * ```
 */
function isU8a(value) {
    // here we defer the instanceof check which is actually slightly
    // slower than just checking the constrctor (direct instances)
    return (((value && value.constructor) === Uint8Array) ||
        value instanceof Uint8Array);
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/is/undefined.js":
/*!*********************************************************!*\
  !*** ../../node_modules/@polkadot/util/is/undefined.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined)
/* harmony export */ });
/**
 * @name isUndefined
 * @summary Tests for a `undefined` values.
 * @description
 * Checks to see if the input value is `undefined`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUndefined } from '@polkadot/util';
 *
 * console.log('isUndefined', isUndefined(void(0))); // => true
 * ```
 */
function isUndefined(value) {
    return value === undefined;
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/logger.js":
/*!***************************************************!*\
  !*** ../../node_modules/@polkadot/util/logger.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger),
/* harmony export */   "loggerFormat": () => (/* binding */ loggerFormat)
/* harmony export */ });
/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polkadot/x-global */ "../../node_modules/@polkadot/util/node_modules/@polkadot/x-global/index.js");
/* harmony import */ var _format_formatDate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./format/formatDate.js */ "../../node_modules/@polkadot/util/format/formatDate.js");
/* harmony import */ var _is_bn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is/bn.js */ "../../node_modules/@polkadot/util/is/bn.js");
/* harmony import */ var _is_buffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is/buffer.js */ "../../node_modules/@polkadot/util/is/buffer.js");
/* harmony import */ var _is_function_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is/function.js */ "../../node_modules/@polkadot/util/is/function.js");
/* harmony import */ var _is_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is/object.js */ "../../node_modules/@polkadot/util/is/object.js");
/* harmony import */ var _is_u8a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is/u8a.js */ "../../node_modules/@polkadot/util/is/u8a.js");
/* harmony import */ var _u8a_toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./u8a/toHex.js */ "../../node_modules/@polkadot/util/u8a/toHex.js");
/* harmony import */ var _u8a_toU8a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./u8a/toU8a.js */ "../../node_modules/@polkadot/util/u8a/toU8a.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./has.js */ "../../node_modules/@polkadot/util/has.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./noop.js */ "../../node_modules/@polkadot/util/noop.js");











const logTo = {
    debug: 'log',
    error: 'error',
    log: 'log',
    warn: 'warn'
};
function formatOther(value) {
    if (value && (0,_is_object_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && value.constructor === Object) {
        const result = {};
        for (const [k, v] of Object.entries(value)) {
            result[k] = loggerFormat(v);
        }
        return result;
    }
    return value;
}
function loggerFormat(value) {
    if (Array.isArray(value)) {
        return value.map(loggerFormat);
    }
    else if ((0,_is_bn_js__WEBPACK_IMPORTED_MODULE_1__.isBn)(value)) {
        return value.toString();
    }
    else if ((0,_is_u8a_js__WEBPACK_IMPORTED_MODULE_2__.isU8a)(value) || (0,_is_buffer_js__WEBPACK_IMPORTED_MODULE_3__.isBuffer)(value)) {
        return (0,_u8a_toHex_js__WEBPACK_IMPORTED_MODULE_4__.u8aToHex)((0,_u8a_toU8a_js__WEBPACK_IMPORTED_MODULE_5__.u8aToU8a)(value));
    }
    return formatOther(value);
}
function formatWithLength(maxLength) {
    return (v) => {
        if (maxLength <= 0) {
            return v;
        }
        const r = `${v}`;
        return r.length < maxLength
            ? v
            : `${r.substring(0, maxLength)} ...`;
    };
}
function apply(log, type, values, maxSize = -1) {
    if (values.length === 1 && (0,_is_function_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(values[0])) {
        const fnResult = values[0]();
        return apply(log, type, Array.isArray(fnResult) ? fnResult : [fnResult], maxSize);
    }
    console[logTo[log]]((0,_format_formatDate_js__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date()), type, ...values
        .map(loggerFormat)
        .map(formatWithLength(maxSize)));
}
function isDebugOn(e, type) {
    return !!e && (e === '*' ||
        type === e ||
        (e.endsWith('*') &&
            type.startsWith(e.slice(0, -1))));
}
function isDebugOff(e, type) {
    return !!e && (e.startsWith('-') &&
        (type === e.slice(1) ||
            (e.endsWith('*') &&
                type.startsWith(e.slice(1, -1)))));
}
function getDebugFlag(env, type) {
    let flag = false;
    for (const e of env) {
        if (isDebugOn(e, type)) {
            flag = true;
        }
        else if (isDebugOff(e, type)) {
            flag = false;
        }
    }
    return flag;
}
function parseEnv(type) {
    const env = (_has_js__WEBPACK_IMPORTED_MODULE_8__.hasProcess ? _polkadot_x_global__WEBPACK_IMPORTED_MODULE_9__.xglobal.process : {}).env || {};
    const maxSize = parseInt(env['DEBUG_MAX'] || '-1', 10);
    return [
        getDebugFlag((env['DEBUG'] || '').toLowerCase().split(','), type),
        isNaN(maxSize)
            ? -1
            : maxSize
    ];
}
/**
 * @name Logger
 * @summary Creates a consistent log interface for messages
 * @description
 * Returns a `Logger` that has `.log`, `.error`, `.warn` and `.debug` (controlled with environment `DEBUG=typeA,typeB`) methods. Logging is done with a consistent prefix (type of logger, date) followed by the actual message using the underlying console.
 * @example
 * <BR>
 *
 * ```javascript
 * import { logger } from '@polkadot/util';
 *
 * const l = logger('test');
 * ```
 */
function logger(origin) {
    const type = `${origin.toUpperCase()}:`.padStart(16);
    const [isDebug, maxSize] = parseEnv(origin.toLowerCase());
    return {
        debug: isDebug
            ? (...values) => apply('debug', type, values, maxSize)
            : _noop_js__WEBPACK_IMPORTED_MODULE_10__.noop,
        error: (...values) => apply('error', type, values),
        log: (...values) => apply('log', type, values),
        noop: _noop_js__WEBPACK_IMPORTED_MODULE_10__.noop,
        warn: (...values) => apply('warn', type, values)
    };
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/node_modules/@polkadot/x-global/index.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@polkadot/util/node_modules/@polkadot/x-global/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exposeGlobal": () => (/* binding */ exposeGlobal),
/* harmony export */   "extractGlobal": () => (/* binding */ extractGlobal),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo),
/* harmony export */   "xglobal": () => (/* binding */ xglobal)
/* harmony export */ });
/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo.js */ "../../node_modules/@polkadot/util/node_modules/@polkadot/x-global/packageInfo.js");

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

/***/ "../../node_modules/@polkadot/util/node_modules/@polkadot/x-global/packageInfo.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/@polkadot/util/node_modules/@polkadot/x-global/packageInfo.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
const packageInfo = { name: '@polkadot/x-global', path: ( true) ? new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/util/node_modules/@polkadot/x-global/packageInfo.js").pathname.substring(0, new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/util/node_modules/@polkadot/x-global/packageInfo.js").pathname.lastIndexOf('/') + 1) : 0, type: 'esm', version: '12.3.2' };


/***/ }),

/***/ "../../node_modules/@polkadot/util/noop.js":
/*!*************************************************!*\
  !*** ../../node_modules/@polkadot/util/noop.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
/**
 * A sharable identity function. Returns the input as-is with no transformation applied.
 */
function identity(value) {
    return value;
}
/**
 * A sharable noop function. As the name suggests, does nothing
 */
function noop() {
    // noop
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/string/toU8a.js":
/*!*********************************************************!*\
  !*** ../../node_modules/@polkadot/util/string/toU8a.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringToU8a": () => (/* binding */ stringToU8a)
/* harmony export */ });
/* harmony import */ var _polkadot_x_textencoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/x-textencoder */ "../../node_modules/@polkadot/x-textencoder/browser.js");

const encoder = new _polkadot_x_textencoder__WEBPACK_IMPORTED_MODULE_0__.TextEncoder();
/**
 * @name stringToU8a
 * @summary Creates a Uint8Array object from a utf-8 string.
 * @description
 * String input values return the actual encoded `UInt8Array`. `null` or `undefined` values returns an empty encoded array.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToU8a } from '@polkadot/util';
 *
 * stringToU8a('hello'); // [0x68, 0x65, 0x6c, 0x6c, 0x6f]
 * ```
 */
function stringToU8a(value) {
    return value
        ? encoder.encode(value.toString())
        : new Uint8Array();
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/toHex.js":
/*!******************************************************!*\
  !*** ../../node_modules/@polkadot/util/u8a/toHex.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u8aToHex": () => (/* binding */ u8aToHex)
/* harmony export */ });
const U8 = new Array(256);
const U16 = new Array(256 * 256);
for (let n = 0; n < 256; n++) {
    U8[n] = n.toString(16).padStart(2, '0');
}
for (let i = 0; i < 256; i++) {
    const s = i << 8;
    for (let j = 0; j < 256; j++) {
        U16[s | j] = U8[i] + U8[j];
    }
}
/** @internal */
function hex(value, result) {
    const mod = (value.length % 2) | 0;
    const length = (value.length - mod) | 0;
    for (let i = 0; i < length; i += 2) {
        result += U16[(value[i] << 8) | value[i + 1]];
    }
    if (mod) {
        result += U8[value[length] | 0];
    }
    return result;
}
/**
 * @name u8aToHex
 * @summary Creates a hex string from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual hex string. `null` or `undefined` values returns an `0x` string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToHex } from '@polkadot/util';
 *
 * u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
 * ```
 */
function u8aToHex(value, bitLength = -1, isPrefixed = true) {
    // this is not 100% correct sinmce we support isPrefixed = false....
    const empty = isPrefixed
        ? '0x'
        : '';
    if (!value || !value.length) {
        return empty;
    }
    else if (bitLength > 0) {
        const length = Math.ceil(bitLength / 8);
        if (value.length > length) {
            return `${hex(value.subarray(0, length / 2), empty)}…${hex(value.subarray(value.length - length / 2), '')}`;
        }
    }
    return hex(value, empty);
}


/***/ }),

/***/ "../../node_modules/@polkadot/util/u8a/toU8a.js":
/*!******************************************************!*\
  !*** ../../node_modules/@polkadot/util/u8a/toU8a.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u8aToU8a": () => (/* binding */ u8aToU8a)
/* harmony export */ });
/* harmony import */ var _hex_toU8a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hex/toU8a.js */ "../../node_modules/@polkadot/util/hex/toU8a.js");
/* harmony import */ var _is_buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/buffer.js */ "../../node_modules/@polkadot/util/is/buffer.js");
/* harmony import */ var _is_hex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is/hex.js */ "../../node_modules/@polkadot/util/is/hex.js");
/* harmony import */ var _is_u8a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is/u8a.js */ "../../node_modules/@polkadot/util/is/u8a.js");
/* harmony import */ var _string_toU8a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../string/toU8a.js */ "../../node_modules/@polkadot/util/string/toU8a.js");





/**
 * @name u8aToU8a
 * @summary Creates a Uint8Array value from a Uint8Array, Buffer, string or hex input.
 * @description
 * `null` or `undefined` inputs returns a `[]` result, Uint8Array values returns the value, hex strings returns a Uint8Array representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToU8a } from '@polkadot/util';
 *
 * u8aToU8a(new Uint8Array([0x12, 0x34]); // => Uint8Array([0x12, 0x34])
 * u8aToU8a(0x1234); // => Uint8Array([0x12, 0x34])
 * ```
 */
function u8aToU8a(value) {
    return (0,_is_u8a_js__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value)
        // NOTE isBuffer needs to go here since it actually extends
        // Uint8Array on Node.js environments, so all Buffer are Uint8Array,
        // but Uint8Array is not Buffer
        ? (0,_is_buffer_js__WEBPACK_IMPORTED_MODULE_1__.isBuffer)(value)
            ? new Uint8Array(value)
            : value
        : (0,_is_hex_js__WEBPACK_IMPORTED_MODULE_2__.isHex)(value)
            ? (0,_hex_toU8a_js__WEBPACK_IMPORTED_MODULE_3__.hexToU8a)(value)
            : Array.isArray(value)
                ? new Uint8Array(value)
                : (0,_string_toU8a_js__WEBPACK_IMPORTED_MODULE_4__.stringToU8a)(value);
}


/***/ }),

/***/ "../../node_modules/@polkadot/x-bigint/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@polkadot/x-bigint/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BigInt": () => (/* binding */ BigInt),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)
/* harmony export */ });
/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/x-global */ "../../node_modules/@polkadot/x-bigint/node_modules/@polkadot/x-global/index.js");
/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo.js */ "../../node_modules/@polkadot/x-bigint/packageInfo.js");


/**
 * @internal
 *
 * There are _still_ some older environments (specifically RN < 0.70), that does
 * not have proper BigInt support - a non-working fallback is provided for those.
 *
 * We detect availability of BigInt upon usage, so this is purely to allow functional
 * compilation & bundling. Since we have operators such as *+-/ top-level, a number-ish
 * result is used here.
 */
function invalidFallback() {
    return Number.NaN;
}
const BigInt = /*#__PURE__*/ (0,_polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__.extractGlobal)('BigInt', invalidFallback);


/***/ }),

/***/ "../../node_modules/@polkadot/x-bigint/node_modules/@polkadot/x-global/index.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@polkadot/x-bigint/node_modules/@polkadot/x-global/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exposeGlobal": () => (/* binding */ exposeGlobal),
/* harmony export */   "extractGlobal": () => (/* binding */ extractGlobal),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo),
/* harmony export */   "xglobal": () => (/* binding */ xglobal)
/* harmony export */ });
/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo.js */ "../../node_modules/@polkadot/x-bigint/node_modules/@polkadot/x-global/packageInfo.js");

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

/***/ "../../node_modules/@polkadot/x-bigint/node_modules/@polkadot/x-global/packageInfo.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/@polkadot/x-bigint/node_modules/@polkadot/x-global/packageInfo.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
const packageInfo = { name: '@polkadot/x-global', path: ( true) ? new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-bigint/node_modules/@polkadot/x-global/packageInfo.js").pathname.substring(0, new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-bigint/node_modules/@polkadot/x-global/packageInfo.js").pathname.lastIndexOf('/') + 1) : 0, type: 'esm', version: '12.3.2' };


/***/ }),

/***/ "../../node_modules/@polkadot/x-bigint/packageInfo.js":
/*!************************************************************!*\
  !*** ../../node_modules/@polkadot/x-bigint/packageInfo.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
const packageInfo = { name: '@polkadot/x-bigint', path: ( true) ? new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-bigint/packageInfo.js").pathname.substring(0, new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-bigint/packageInfo.js").pathname.lastIndexOf('/') + 1) : 0, type: 'esm', version: '12.3.2' };


/***/ }),

/***/ "../../node_modules/@polkadot/x-textencoder/browser.js":
/*!*************************************************************!*\
  !*** ../../node_modules/@polkadot/x-textencoder/browser.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEncoder": () => (/* binding */ TextEncoder),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)
/* harmony export */ });
/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/x-global */ "../../node_modules/@polkadot/x-textencoder/node_modules/@polkadot/x-global/index.js");
/* harmony import */ var _fallback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fallback.js */ "../../node_modules/@polkadot/x-textencoder/fallback.js");
/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo.js */ "../../node_modules/@polkadot/x-textencoder/packageInfo.js");



const TextEncoder = /*#__PURE__*/ (0,_polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__.extractGlobal)('TextEncoder', _fallback_js__WEBPACK_IMPORTED_MODULE_2__.TextEncoder);


/***/ }),

/***/ "../../node_modules/@polkadot/x-textencoder/fallback.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@polkadot/x-textencoder/fallback.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEncoder": () => (/* binding */ TextEncoder)
/* harmony export */ });
class TextEncoder {
    encode(value) {
        const count = value.length;
        const u8a = new Uint8Array(count);
        for (let i = 0; i < count; i++) {
            u8a[i] = value.charCodeAt(i);
        }
        return u8a;
    }
}


/***/ }),

/***/ "../../node_modules/@polkadot/x-textencoder/node_modules/@polkadot/x-global/index.js":
/*!*******************************************************************************************!*\
  !*** ../../node_modules/@polkadot/x-textencoder/node_modules/@polkadot/x-global/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exposeGlobal": () => (/* binding */ exposeGlobal),
/* harmony export */   "extractGlobal": () => (/* binding */ extractGlobal),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo),
/* harmony export */   "xglobal": () => (/* binding */ xglobal)
/* harmony export */ });
/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo.js */ "../../node_modules/@polkadot/x-textencoder/node_modules/@polkadot/x-global/packageInfo.js");

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

/***/ "../../node_modules/@polkadot/x-textencoder/node_modules/@polkadot/x-global/packageInfo.js":
/*!*************************************************************************************************!*\
  !*** ../../node_modules/@polkadot/x-textencoder/node_modules/@polkadot/x-global/packageInfo.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
const packageInfo = { name: '@polkadot/x-global', path: ( true) ? new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-textencoder/node_modules/@polkadot/x-global/packageInfo.js").pathname.substring(0, new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-textencoder/node_modules/@polkadot/x-global/packageInfo.js").pathname.lastIndexOf('/') + 1) : 0, type: 'esm', version: '12.3.2' };


/***/ }),

/***/ "../../node_modules/@polkadot/x-textencoder/packageInfo.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@polkadot/x-textencoder/packageInfo.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
const packageInfo = { name: '@polkadot/x-textencoder', path: ( true) ? new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-textencoder/packageInfo.js").pathname.substring(0, new URL("file:///C:/Users/sharm/Downloads/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/SubWallet-Extension-1.1.17/node_modules/@polkadot/x-textencoder/packageInfo.js").pathname.lastIndexOf('/') + 1) : 0, type: 'esm', version: '12.3.2' };


/***/ }),

/***/ "../../node_modules/eventemitter3/index.mjs":
/*!**************************************************!*\
  !*** ../../node_modules/eventemitter3/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitter": () => (/* reexport default export from named module */ _index_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "../../node_modules/eventemitter3/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/page.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subwallet_extension_base_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-base/defaults */ "../extension-base/src/defaults.ts");
/* harmony import */ var _subwallet_extension_base_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-base/page */ "../extension-base/src/page/index.ts");
/* harmony import */ var _subwallet_extension_inject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-inject */ "../extension-inject/src/index.ts");
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0




const version = "1.1.17-0";
function inject() {
  (0,_subwallet_extension_inject__WEBPACK_IMPORTED_MODULE_0__.injectExtension)(_subwallet_extension_base_page__WEBPACK_IMPORTED_MODULE_1__.enable, {
    name: 'subwallet-js',
    version: version
  });
  (0,_subwallet_extension_inject__WEBPACK_IMPORTED_MODULE_0__.injectEvmExtension)((0,_subwallet_extension_base_page__WEBPACK_IMPORTED_MODULE_1__.initEvmProvider)(version));
}

// setup a response listener (events created by the loader for extension responses)
window.addEventListener('message', ({
  data,
  source
}) => {
  // only allow messages from our window, by the loader
  if (source !== window || data.origin !== _subwallet_extension_base_defaults__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_ORIGIN_CONTENT) {
    return;
  }
  if (data.id) {
    (0,_subwallet_extension_base_page__WEBPACK_IMPORTED_MODULE_1__.handleResponse)(data);
  } else {
    console.error('Missing id for response.');
  }
});
inject();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsaUJBQWlCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQixpQkFBaUI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFdBQVc7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxXQUFXO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7O0FBRUEsd0JBQXdCLE9BQU87QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixXQUFXO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3Qjs7QUFFQSxtQ0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwrQ0FBK0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLHNDQUFzQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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QSxJQUFJQSxNQUFNLEtBQUsxQyxNQUFNLElBQUl6RyxJQUFJLENBQUNzRyxNQUFNLEtBQUt4RixzRkFBc0IsRUFBRTtJQUMvRDtFQUNGO0VBRUEsSUFBSWQsSUFBSSxDQUFDeUIsRUFBRSxFQUFFO0lBQ1hrRyw4RUFBYyxDQUFDM0gsSUFBSSxDQUFxRDtFQUMxRSxDQUFDLE1BQU07SUFDTDZCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLDBCQUEwQixDQUFDO0VBQzNDO0FBQ0YsQ0FBQyxDQUFDO0FBRUZvSCxNQUFNLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9zYWZlLWV2ZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvYmFja2dyb3VuZC9Lb25pVHlwZXMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvYmFja2dyb3VuZC9lcnJvcnMvUHJvdmlkZXJFcnJvci50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9iYWNrZ3JvdW5kL2Vycm9ycy9TV0Vycm9yLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL2RlZmF1bHRzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3BhZ2UvQWNjb3VudHMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvcGFnZS9JbmplY3RlZC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9wYWdlL01ldGFkYXRhLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3BhZ2UvUG9zdE1lc3NhZ2VQcm92aWRlci50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9wYWdlL1NpZ25lci50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9wYWdlL1N1YldhbGxlRXZtUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvcGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9nZXRJZC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy90cmFuc2xhdGUudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24taW5qZWN0L3NyYy9idW5kbGUudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24taW5qZWN0L3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1pbmplY3Qvc3JjL3BhY2thZ2VJbmZvLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL2JuLmpzL2xpYi9ibi5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS9pZ25vcmVkfEM6XFxVc2Vyc1xcc2hhcm1cXERvd25sb2Fkc1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QvdXRpbC9mb3JtYXQvZm9ybWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QvdXRpbC9oYXMuanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvbGthZG90L3V0aWwvaGV4L3RvVThhLmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC91dGlsL2lzL2JuLmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC91dGlsL2lzL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QvdXRpbC9pcy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QvdXRpbC9pcy9oZXguanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvbGthZG90L3V0aWwvaXMvb2JqZWN0LmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC91dGlsL2lzL3U4YS5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QvdXRpbC9pcy91bmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvbGthZG90L3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC91dGlsL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC1nbG9iYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvbGthZG90L3V0aWwvbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC94LWdsb2JhbC9wYWNrYWdlSW5mby5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QvdXRpbC9ub29wLmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC91dGlsL3N0cmluZy90b1U4YS5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QvdXRpbC91OGEvdG9IZXguanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvbGthZG90L3V0aWwvdThhL3RvVThhLmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC94LWJpZ2ludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC1iaWdpbnQvbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC94LWdsb2JhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC1iaWdpbnQvbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC94LWdsb2JhbC9wYWNrYWdlSW5mby5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC1iaWdpbnQvcGFja2FnZUluZm8uanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvbGthZG90L3gtdGV4dGVuY29kZXIvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC10ZXh0ZW5jb2Rlci9mYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC10ZXh0ZW5jb2Rlci9ub2RlX21vZHVsZXMvQHBvbGthZG90L3gtZ2xvYmFsL2luZGV4LmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC94LXRleHRlbmNvZGVyL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC1nbG9iYWwvcGFja2FnZUluZm8uanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvbGthZG90L3gtdGV4dGVuY29kZXIvcGFja2FnZUluZm8uanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4vc3JjL3BhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5mdW5jdGlvbiBzYWZlQXBwbHkoaGFuZGxlciwgY29udGV4dCwgYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIFJlZmxlY3QuYXBwbHkoaGFuZGxlciwgY29udGV4dCwgYXJncyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gVGhyb3cgZXJyb3IgYWZ0ZXIgdGltZW91dCBzbyBhcyBub3QgdG8gaW50ZXJydXB0IHRoZSBzdGFja1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIpIHtcbiAgICBjb25zdCBuID0gYXJyLmxlbmd0aDtcbiAgICBjb25zdCBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gICAgfVxuICAgIHJldHVybiBjb3B5O1xufVxuY2xhc3MgU2FmZUV2ZW50RW1pdHRlciBleHRlbmRzIGV2ZW50c18xLkV2ZW50RW1pdHRlciB7XG4gICAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgICAgIGxldCBkb0Vycm9yID0gdHlwZSA9PT0gJ2Vycm9yJztcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRvRXJyb3IgPSBkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFkb0Vycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICAgICAgICBpZiAoZG9FcnJvcikge1xuICAgICAgICAgICAgbGV0IGVyO1xuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIFtlcl0gPSBhcmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgICAgICAgICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgICAgICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGBVbmhhbmRsZWQgZXJyb3IuJHtlciA/IGAgKCR7ZXIubWVzc2FnZX0pYCA6ICcnfWApO1xuICAgICAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuICAgICAgICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzYWZlQXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlcik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgc2FmZUFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2FmZUV2ZW50RW1pdHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9Bc3NldFJlZiwgX0Fzc2V0VHlwZSwgX0NoYWluQXNzZXQsIF9DaGFpbkluZm8sIF9NdWx0aUNoYWluQXNzZXQgfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25FcnJvciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9lcnJvcnMvVHJhbnNhY3Rpb25FcnJvcic7XG5pbXBvcnQgeyBBdXRoVXJscywgUmVzb2x2ZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvaGFuZGxlcnMvU3RhdGUnO1xuaW1wb3J0IHsgQWNjb3VudEF1dGhUeXBlLCBBY2NvdW50SnNvbiwgQWRkcmVzc0pzb24sIEF1dGhvcml6ZVJlcXVlc3QsIENvbmZpcm1hdGlvblJlcXVlc3RCYXNlLCBSZXF1ZXN0QWNjb3VudExpc3QsIFJlcXVlc3RBY2NvdW50U3Vic2NyaWJlLCBSZXF1ZXN0QWNjb3VudFVuc3Vic2NyaWJlLCBSZXF1ZXN0QXV0aG9yaXplQ2FuY2VsLCBSZXF1ZXN0QXV0aG9yaXplUmVqZWN0LCBSZXF1ZXN0QXV0aG9yaXplU3Vic2NyaWJlLCBSZXF1ZXN0QXV0aG9yaXplVGFiLCBSZXF1ZXN0Q3VycmVudEFjY291bnRBZGRyZXNzLCBSZXNwb25zZUF1dGhvcml6ZUxpc3QsIFJlc3BvbnNlSnNvbkdldEFjY291bnRJbmZvLCBTZWVkTGVuZ3RocyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS9oYW5kbGVyL3R5cGVzJztcbmltcG9ydCB7IF9DaGFpblN0YXRlLCBfRXZtQXBpLCBfTmV0d29ya1Vwc2VydFBhcmFtcywgX1N1YnN0cmF0ZUFwaSwgX1ZhbGlkYXRlQ3VzdG9tQXNzZXRSZXF1ZXN0LCBfVmFsaWRhdGVDdXN0b21Bc3NldFJlc3BvbnNlLCBFbmFibGVDaGFpblBhcmFtcywgRW5hYmxlTXVsdGlDaGFpblBhcmFtcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS90eXBlcyc7XG5pbXBvcnQgeyBTV1RyYW5zYWN0aW9uUmVzcG9uc2UsIFNXVHJhbnNhY3Rpb25SZXN1bHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnRSZXF1ZXN0LCBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3QgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3dhbGxldC1jb25uZWN0LXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0ZWRBY2NvdW50LCBJbmplY3RlZEFjY291bnRXaXRoTWV0YSwgTWV0YWRhdGFEZWZCYXNlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24taW5qZWN0L3R5cGVzJztcbmltcG9ydCB7IEtleXJpbmdQYWlyJEpzb24sIEtleXJpbmdQYWlyJE1ldGEgfSBmcm9tICdAc3Vid2FsbGV0L2tleXJpbmcvdHlwZXMnO1xuaW1wb3J0IHsgS2V5cmluZ09wdGlvbnMgfSBmcm9tICdAc3Vid2FsbGV0L3VpLWtleXJpbmcvb3B0aW9ucy90eXBlcyc7XG5pbXBvcnQgeyBLZXlyaW5nQWRkcmVzcywgS2V5cmluZ1BhaXJzJEpzb24gfSBmcm9tICdAc3Vid2FsbGV0L3VpLWtleXJpbmcvdHlwZXMnO1xuaW1wb3J0IHsgU2Vzc2lvblR5cGVzIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvdHlwZXMvZGlzdC90eXBlcy9zaWduLWNsaWVudC9zZXNzaW9uJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgUmVxdWVzdEFyZ3VtZW50cywgVHJhbnNhY3Rpb25Db25maWcgfSBmcm9tICd3ZWIzLWNvcmUnO1xuaW1wb3J0IHsgSnNvblJwY1BheWxvYWQsIEpzb25ScGNSZXNwb25zZSB9IGZyb20gJ3dlYjMtY29yZS1oZWxwZXJzJztcblxuaW1wb3J0IHsgU2lnbmVyUmVzdWx0IH0gZnJvbSAnQHBvbGthZG90L3R5cGVzL3R5cGVzL2V4dHJpbnNpYyc7XG5pbXBvcnQgeyBCTiB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbmltcG9ydCB7IEhleFN0cmluZyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsL3R5cGVzJztcbmltcG9ydCB7IEtleXBhaXJUeXBlIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvL3R5cGVzJztcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25XYXJuaW5nIH0gZnJvbSAnLi93YXJuaW5ncy9UcmFuc2FjdGlvbldhcm5pbmcnO1xuXG5leHBvcnQgZW51bSBSdW50aW1lRW52aXJvbm1lbnQge1xuICBXZWIgPSAnV2ViJyxcbiAgTm9kZSA9ICdOb2RlJyxcbiAgRXh0ZW5zaW9uQ2hyb21lID0gJ0V4dGVuc2lvbiAoQ2hyb21lKScsXG4gIEV4dGVuc2lvbkZpcmVmb3ggPSAnRXh0ZW5zaW9uIChGaXJlZm94KScsXG4gIFdlYldvcmtlciA9ICdXZWIgV29ya2VyJyxcbiAgU2VydmljZVdvcmtlciA9ICdTZXJ2aWNlIFdvcmtlcicsXG4gIFVua25vd24gPSAnVW5rbm93bicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnVudGltZUVudmlyb25tZW50SW5mbyB7XG4gIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQ7XG4gIHZlcnNpb246IHN0cmluZztcbiAgaG9zdD86IHN0cmluZztcbiAgcHJvdG9jb2w/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFRhcmdldEVudmlyb25tZW50ID0gJ2V4dGVuc2lvbicgfCAnd2ViYXBwJyB8ICd3ZWItcnVubmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBFbnZpcm9ubWVudFN1cHBvcnQge1xuICBNQU5UQV9aSzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlSW5mbyB7XG4gIGNoYWluSW5mb01hcDogUmVjb3JkPHN0cmluZywgX0NoYWluSW5mbz47XG4gIGNoYWluU3RhdGVNYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpblN0YXRlPjtcbiAgY2hhaW5BcGlNYXA6IEFwaU1hcDtcbiAgY3VycmVudEFjY291bnRJbmZvOiBDdXJyZW50QWNjb3VudEluZm87XG4gIGFzc2V0UmVnaXN0cnk6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkFzc2V0Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NldFNldHRpbmcge1xuICB2aXNpYmxlOiBib29sZWFuLFxuICAvLyByZXN0cmljdGlvbnMgb24gYXNzZXRzIGNhbiBiZSBpbXBsZW1lbnRlZCBsYXRlclxufVxuXG4vLy8gUmVxdWVzdCBBdXRoXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFJlcXVlc3RWMiBleHRlbmRzIFJlc29sdmVyPFJlc3VsdFJlc29sdmVyPiB7XG4gIGlkOiBzdHJpbmc7XG4gIGlkU3RyOiBzdHJpbmc7XG4gIHJlcXVlc3Q6IFJlcXVlc3RBdXRob3JpemVUYWI7XG4gIHVybDogc3RyaW5nO1xuICBhY2NvdW50QXV0aFR5cGU6IEFjY291bnRBdXRoVHlwZVxufVxuXG4vLy8gTWFuYWdlIEF1dGhcblxuLy8gR2V0IEF1dGhcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXplQXBwcm92ZVYyIHtcbiAgaWQ6IHN0cmluZztcbiAgYWNjb3VudHM6IHN0cmluZ1tdO1xufVxuXG4vLyBBdXRoIEFsbCBzaXRlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6YXRpb25BbGwge1xuICBjb25uZWN0VmFsdWU6IGJvb2xlYW47XG59XG5cbi8vIE1hbmFnZSBzaXRlIGF1dGggKGFsbCBhbGxvd2VkL3VuQWxsb3dlZClcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXphdGlvbiBleHRlbmRzIFJlcXVlc3RBdXRob3JpemF0aW9uQWxsIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbi8vIE1hbmFnZSBzaW5nbGUgYXV0aCB3aXRoIHNpbmdsZSBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6YXRpb25QZXJBY2NvdW50IGV4dGVuZHMgUmVxdWVzdEF1dGhvcml6YXRpb24ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbi8vIE1hbmFnZSBzaW5nbGUgc2l0ZSB3aXRoIG11bHRpIGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXphdGlvblBlclNpdGUge1xuICBpZDogc3RyaW5nO1xuICB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+O1xufVxuXG4vLyBNYW5hZ2Ugc2l0ZSBibG9ja1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBdXRob3JpemF0aW9uQmxvY2sge1xuICBpZDogc3RyaW5nO1xuICBjb25uZWN0ZWRWYWx1ZTogYm9vbGVhbjtcbn1cblxuLy8gRm9yZ2V0IHNpdGUgYXV0aFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RGb3JnZXRTaXRlIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0UmVzb2x2ZXIge1xuICByZXN1bHQ6IGJvb2xlYW47XG4gIGFjY291bnRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWplY3RSZXNvbHZlciB7XG4gIGVycm9yOiBFcnJvcjtcbiAgYWNjb3VudHM6IHN0cmluZ1tdO1xufVxuXG4vLy8gU3Rha2luZyBzdWJzY3JpYmVcblxuZXhwb3J0IGVudW0gU3Rha2luZ1R5cGUge1xuICBOT01JTkFURUQgPSAnbm9taW5hdGVkJyxcbiAgUE9PTEVEID0gJ3Bvb2xlZCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2luZ1Jld2FyZEl0ZW0ge1xuICBzdGF0ZTogQVBJSXRlbVN0YXRlLFxuICBuYW1lOiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgdHlwZTogU3Rha2luZ1R5cGUsXG5cbiAgbGF0ZXN0UmV3YXJkPzogc3RyaW5nLFxuICB0b3RhbFJld2FyZD86IHN0cmluZyxcbiAgdG90YWxTbGFzaD86IHN0cmluZyxcbiAgdW5jbGFpbWVkUmV3YXJkPzogc3RyaW5nXG59XG5leHBvcnQgaW50ZXJmYWNlIFVubG9ja2luZ1N0YWtlSW5mbyB7XG4gIGNoYWluOiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgdHlwZTogU3Rha2luZ1R5cGUsXG5cbiAgbmV4dFdpdGhkcmF3YWw6IG51bWJlcixcbiAgcmVkZWVtYWJsZTogbnVtYmVyLFxuICBuZXh0V2l0aGRyYXdhbEFtb3VudDogbnVtYmVyLFxuICBuZXh0V2l0aGRyYXdhbEFjdGlvbj86IHN0cmluZyxcbiAgdmFsaWRhdG9yQWRkcmVzcz86IHN0cmluZyAvLyB2YWxpZGF0b3IgdG8gdW5zdGFrZSBmcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2luZ0l0ZW0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgdHlwZTogU3Rha2luZ1R5cGUsXG5cbiAgYmFsYW5jZT86IHN0cmluZyxcbiAgYWN0aXZlQmFsYW5jZT86IHN0cmluZyxcbiAgdW5sb2NraW5nQmFsYW5jZT86IHN0cmluZyxcbiAgbmF0aXZlVG9rZW46IHN0cmluZyxcbiAgdW5pdD86IHN0cmluZyxcblxuICBzdGF0ZTogQVBJSXRlbVN0YXRlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2luZ0pzb24ge1xuICByZXNldD86IGJvb2xlYW4sXG4gIHJlYWR5PzogYm9vbGVhbixcbiAgZGV0YWlsczogU3Rha2luZ0l0ZW1bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtpbmdSZXdhcmRKc29uIHtcbiAgcmVhZHk6IGJvb2xlYW47XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIFN0YWtpbmdSZXdhcmRJdGVtPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmljZUpzb24ge1xuICByZWFkeT86IGJvb2xlYW4sXG4gIGN1cnJlbmN5OiBzdHJpbmcsXG4gIHByaWNlTWFwOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LFxuICBwcmljZTI0aE1hcDogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxufVxuXG5leHBvcnQgZW51bSBBUElJdGVtU3RhdGUge1xuICBQRU5ESU5HID0gJ3BlbmRpbmcnLFxuICBSRUFEWSA9ICdyZWFkeScsXG4gIENBQ0hFRCA9ICdjYWNoZWQnLFxuICBFUlJPUiA9ICdlcnJvcicsXG4gIE5PVF9TVVBQT1JUID0gJ25vdF9zdXBwb3J0J1xufVxuXG5leHBvcnQgZW51bSBSTVJLX1ZFUiB7XG4gIFZFUl8xID0gJzEuMC4wJyxcbiAgVkVSXzIgPSAnMi4wLjAnXG59XG5cbmV4cG9ydCBlbnVtIENyb3dkbG9hblBhcmFTdGF0ZSB7XG4gIE9OR09JTkcgPSAnb25nb2luZycsXG4gIENPTVBMRVRFRCA9ICdjb21wbGV0ZWQnLFxuICBGQUlMRUQgPSAnZmFpbGVkJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdEl0ZW0ge1xuICAvLyBtdXN0LWhhdmVcbiAgaWQ6IHN0cmluZztcbiAgY2hhaW46IHN0cmluZztcbiAgY29sbGVjdGlvbklkOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIG9yaWdpbkFzc2V0Pzogc3RyaW5nO1xuXG4gIG5hbWU/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBleHRlcm5hbFVybD86IHN0cmluZztcbiAgcmFyaXR5Pzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHJvcGVydGllcz86IFJlY29yZDxhbnksIGFueT4gfCBudWxsO1xuICB0eXBlPzogX0Fzc2V0VHlwZS5FUkM3MjEgfCBfQXNzZXRUeXBlLlBTUDM0IHwgUk1SS19WRVI7IC8vIGZvciBzZW5kaW5nXG4gIHJtcmtfdmVyPzogUk1SS19WRVI7XG4gIG9uQ2hhaW5PcHRpb24/OiBhbnk7IC8vIGZvciBzZW5kaW5nIFBTUC0zNCB0b2tlbnMsIHNob3VsZCBiZSBkb25lIGJldHRlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdENvbGxlY3Rpb24ge1xuICAvLyBtdXN0LWhhdmVcbiAgY29sbGVjdGlvbklkOiBzdHJpbmc7XG4gIGNoYWluOiBzdHJpbmc7XG4gIG9yaWdpbkFzc2V0Pzogc3RyaW5nO1xuXG4gIGNvbGxlY3Rpb25OYW1lPzogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbiAgaXRlbUNvdW50PzogbnVtYmVyO1xuICBleHRlcm5hbFVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZnRKc29uIHtcbiAgdG90YWw6IG51bWJlcjtcbiAgbmZ0TGlzdDogQXJyYXk8TmZ0SXRlbT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZ0Q29sbGVjdGlvbkpzb24ge1xuICByZWFkeTogYm9vbGVhbjtcbiAgbmZ0Q29sbGVjdGlvbkxpc3Q6IEFycmF5PE5mdENvbGxlY3Rpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhSXRlbSB7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7XG4gIHNwZWNWZXJzaW9uOiBzdHJpbmc7XG4gIGhleFZhbHVlOiBIZXhTdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5CYWxhbmNlUmF3IHtcbiAgcmVzZXJ2ZWQ6IEJOLFxuICBmcm96ZW46IEJOLFxuICBmcmVlOiBCTlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0cmF0ZUJhbGFuY2Uge1xuICByZXNlcnZlZD86IHN0cmluZyxcbiAgbWlzY0Zyb3plbj86IHN0cmluZyxcbiAgZmVlRnJvemVuPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFsYW5jZUl0ZW0ge1xuICAvLyBtZXRhZGF0YVxuICB0b2tlblNsdWc6IHN0cmluZyxcbiAgc3RhdGU6IEFQSUl0ZW1TdGF0ZSxcbiAgdGltZXN0YW1wPzogbnVtYmVyXG5cbiAgLy8gbXVzdC1oYXZlLCB0b3RhbCA9IGZyZWUgKyBsb2NrZWRcbiAgZnJlZTogc3RyaW5nLFxuICBsb2NrZWQ6IHN0cmluZyxcblxuICAvLyBzdWJzdHJhdGUgZmllbGRzXG4gIHN1YnN0cmF0ZUluZm8/OiBTdWJzdHJhdGVCYWxhbmNlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFsYW5jZUpzb24ge1xuICByZXNldD86IGJvb2xlYW4sXG4gIGRldGFpbHM6IFJlY29yZDxzdHJpbmcsIEJhbGFuY2VJdGVtPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb3dkbG9hbkl0ZW0ge1xuICBzdGF0ZTogQVBJSXRlbVN0YXRlLFxuICBwYXJhU3RhdGU/OiBDcm93ZGxvYW5QYXJhU3RhdGUsXG4gIGNvbnRyaWJ1dGU6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb3dkbG9hbkpzb24ge1xuICByZXNldD86IGJvb2xlYW4sXG4gIGRldGFpbHM6IFJlY29yZDxzdHJpbmcsIENyb3dkbG9hbkl0ZW0+XG59XG5cbmV4cG9ydCB0eXBlIE5ldFdvcmtHcm91cCA9ICdSRUxBWV9DSEFJTicgfCAnUE9MS0FET1RfUEFSQUNIQUlOJyB8ICdLVVNBTUFfUEFSQUNIQUlOJyB8ICdNQUlOX05FVCcgfCAnVEVTVF9ORVQnIHwgJ1VOS05PV04nO1xuXG5leHBvcnQgZW51bSBDb250cmFjdFR5cGUge1xuICB3YXNtID0gJ3dhc20nLFxuICBldm0gPSAnZXZtJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtKc29uIHtcbiAgLy8gR2VuZXJhbCBJbmZvcm1hdGlvblxuICBrZXk6IHN0cmluZzsgLy8gS2V5IG9mIG5ldHdvcmsgaW4gTmV0d29ya01hcFxuICBjaGFpbjogc3RyaW5nOyAvLyBOYW1lIG9mIHRoZSBuZXR3b3JrXG4gIGljb24/OiBzdHJpbmc7IC8vIEljb24gbmFtZSwgYXZhaWxhYmxlIHdpdGgga25vd24gbmV0d29ya1xuICBhY3RpdmU6IGJvb2xlYW47IC8vIE5ldHdvcmsgaXMgYWN0aXZlIG9yIG5vdFxuXG4gIC8vIFByb3ZpZGVyIEluZm9ybWF0aW9uXG4gIHByb3ZpZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgLy8gUHJlZGVmaW5lZCBwcm92aWRlciBtYXBcbiAgY3VycmVudFByb3ZpZGVyOiBzdHJpbmcgfCBudWxsOyAvLyBDdXJyZW50IHByb3ZpZGVyIGtleVxuICBjdXJyZW50UHJvdmlkZXJNb2RlOiAnaHR0cCcgfCAnd3MnOyAvLyBDdXJyZW50IHByb3ZpZGVyIG1vZGUsIGNvbXB1dGUgZGVwZW5kIG9uIHByb3ZpZGVyIHByb3RvY29sLiB0aGUgZmVhdHVyZSBuZWVkIHRvIGtub3cgdGhpcyB0byBkZWNpZGUgdXNlIHN1YnNjcmliZSBvciBjcm9uam9iIHRvIHVzZSB0aGlzIGZlYXR1cmVzLlxuICBjdXN0b21Qcm92aWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+OyAvLyBDdXN0b20gcHJvdmlkZXIgbWFwLCBwcm92aWRlciBuYW1lIHNhbWUgd2l0aCBwcm92aWRlciBtYXBcbiAgbmZ0UHJvdmlkZXI/OiBzdHJpbmc7XG5cbiAgLy8gTWV0YWRhdGEgZ2V0IGFmdGVyIGNvbm5lY3QgdG8gcHJvdmlkZXJcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZzsgLy8gaWRlbnRpZmllciBmb3IgbmV0d29ya1xuICBncm91cHM6IE5ldFdvcmtHcm91cFtdO1xuICBzczU4Rm9ybWF0OiBudW1iZXI7XG4gIHBhcmFJZD86IG51bWJlcjtcbiAgY2hhaW5UeXBlPzogJ3N1YnN0cmF0ZScgfCAnZXRoZXJldW0nO1xuICBjcm93ZGxvYW5Vcmw/OiBzdHJpbmc7XG5cbiAgLy8gRXRoZXJldW0gcmVsYXRlZCBpbmZvcm1hdGlvbiBmb3IgcHJlZGVmaW5lZCBuZXR3b3JrIG9ubHlcbiAgaXNFdGhlcmV1bT86IGJvb2xlYW47IC8vIE9ubHkgc2hvdyBuZXR3b3JrIHdpdGggaXNFdGhlcmV1bT10cnVlIHdoZW4gc2VsZWN0IG9uZSBFdm0gYWNjb3VudCAvLyB1c2VyIGlucHV0XG4gIGV2bUNoYWluSWQ/OiBudW1iZXI7XG5cbiAgaXNIeWJyaWQ/OiBib29sZWFuO1xuXG4gIC8vIE5hdGl2ZSB0b2tlbiBpbmZvcm1hdGlvblxuICBuYXRpdmVUb2tlbj86IHN0cmluZztcbiAgZGVjaW1hbHM/OiBudW1iZXI7XG5cbiAgLy8gT3RoZXIgaW5mb3JtYXRpb25cbiAgY29pbkdlY2tvS2V5Pzogc3RyaW5nOyAvLyBQcm92aWRlciBrZXkgdG8gZ2V0IHRva2VuIHByaWNlIGZyb20gQ29pbkdlY2tvIC8vIHVzZXIgaW5wdXRcbiAgYmxvY2tFeHBsb3Jlcj86IHN0cmluZzsgLy8gTGluayB0byBibG9jayBzY2FubmVyIHRvIGNoZWNrIHRyYW5zYWN0aW9uIHdpdGggZXh0cmluc2ljIGhhc2ggLy8gdXNlciBpbnB1dFxuICBhYmlFeHBsb3Jlcj86IHN0cmluZzsgLy8gTGluayB0byBibG9jayBzY2FubmVyIHRvIGNoZWNrIHRyYW5zYWN0aW9uIHdpdGggZXh0cmluc2ljIGhhc2ggLy8gdXNlciBpbnB1dFxuICBkZXBlbmRlbmNpZXM/OiBzdHJpbmdbXTsgLy8gQXV0byBhY3RpdmUgbmV0d29yayBpbiBkZXBlbmRlbmNpZXMgaWYgY3VycmVudCBuZXR3b3JrIGlzIGFjdGl2YXRlZFxuICBnZXRTdGFraW5nT25DaGFpbj86IGJvb2xlYW47IC8vIHN1cHBvcnQgZ2V0IGJvbmRlZCBvbiBjaGFpblxuICBzdXBwb3J0Qm9uZGluZz86IGJvb2xlYW47XG4gIHN1cHBvcnRTbWFydENvbnRyYWN0PzogQ29udHJhY3RUeXBlW107IC8vIGlmIG5ldHdvcmsgc3VwcG9ydHMgUFNQIHNtYXJ0IGNvbnRyYWN0c1xuXG4gIGFwaVN0YXR1cz86IE5FVFdPUktfU1RBVFVTO1xuICByZXF1ZXN0SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9uYXRlSW5mbyB7XG4gIGtleTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duVHJhbnNmb3JtT3B0aW9uVHlwZSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0V29ya01ldGFkYXRhRGVmIGV4dGVuZHMgTWV0YWRhdGFEZWZCYXNlIHtcbiAgbmV0d29ya0tleTogc3RyaW5nO1xuICBncm91cHM6IE5ldFdvcmtHcm91cFtdO1xuICBpc0V0aGVyZXVtOiBib29sZWFuO1xuICBwYXJhSWQ/OiBudW1iZXI7XG4gIGlzQXZhaWxhYmxlOiBib29sZWFuO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGFwaVN0YXR1czogTkVUV09SS19TVEFUVVM7XG59XG5cbmV4cG9ydCB0eXBlIEN1cnJlbnROZXR3b3JrSW5mbyA9IHtcbiAgbmV0d29ya0tleTogc3RyaW5nO1xuICBuZXR3b3JrUHJlZml4OiBudW1iZXI7XG4gIGljb246IHN0cmluZztcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbiAgaXNSZWFkeT86IGJvb2xlYW47IC8vIGNoZWNrIGlmIGN1cnJlbnQgbmV0d29yayBpbmZvIGlzIGxpZnRlZCBmcm9tIGluaXRpYWwgc3RhdGVcbn1cblxuLy8gYWxsIEFjY291bnRzIGFuZCB0aGUgYWRkcmVzcyBvZiB0aGUgY3VycmVudCBBY2NvdW50XG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRzV2l0aEN1cnJlbnRBZGRyZXNzIHtcbiAgYWNjb3VudHM6IEFjY291bnRKc29uW107XG4gIGN1cnJlbnRBZGRyZXNzPzogc3RyaW5nO1xuICBjdXJyZW50R2VuZXNpc0hhc2g/OiBzdHJpbmcgfCBudWxsO1xuICBpc1Nob3dCYWxhbmNlPzogYm9vbGVhbjsgLy8gRGVwcmVjYXRlZCBhbmQgbW92ZSB0byBzZXR0aW5nXG4gIGFsbEFjY291bnRMb2dvPzogc3RyaW5nOyAvLyBEZXByZWNhdGVkIGFuZCBtb3ZlIHRvIHNldHRpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25JbnB1dEFkZHJlc3Mge1xuICBvcHRpb25zOiBLZXlyaW5nT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW50QWNjb3VudEluZm8ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGN1cnJlbnRHZW5lc2lzSGFzaDogc3RyaW5nIHwgbnVsbDtcbiAgYWxsR2VuZXNpc0hhc2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIExhbmd1YWdlVHlwZSA9ICdlbidcbnwnemgnXG58J2ZyJ1xufCd0cidcbnwncGwnXG58J3RoJ1xufCd1cidcbnwndmknXG58J2phJ1xufCdydSc7XG5cbmV4cG9ydCB0eXBlIExhbmd1YWdlT3B0aW9uVHlwZSA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICB2YWx1ZTogTGFuZ3VhZ2VUeXBlO1xufVxuXG5leHBvcnQgdHlwZSBCcm93c2VyQ29uZmlybWF0aW9uVHlwZSA9ICdleHRlbnNpb24nfCdwb3B1cCd8J3dpbmRvdyc7XG5cbmV4cG9ydCBlbnVtIFdhbGxldFVubG9ja1R5cGUge1xuICBBTFdBWVNfUkVRVUlSRUQgPSAnYWx3YXlzX3JlcXVpcmVkJyxcbiAgV0hFTl9ORUVERUQgPSAnd2hlbl9uZWVkZWQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVpU2V0dGluZ3Mge1xuICBsYW5ndWFnZTogTGFuZ3VhZ2VUeXBlLFxuICBicm93c2VyQ29uZmlybWF0aW9uVHlwZTogQnJvd3NlckNvbmZpcm1hdGlvblR5cGU7XG4gIGlzU2hvd1plcm9CYWxhbmNlOiBib29sZWFuO1xuICBpc1Nob3dCYWxhbmNlOiBib29sZWFuO1xuICBhY2NvdW50QWxsTG9nbzogc3RyaW5nO1xuICB0aGVtZTogVGhlbWVOYW1lcztcbiAgY2FtZXJhOiBib29sZWFuO1xuICB0aW1lQXV0b0xvY2s6IG51bWJlcjtcbiAgdW5sb2NrVHlwZTogV2FsbGV0VW5sb2NrVHlwZTtcbiAgZW5hYmxlQ2hhaW5QYXRyb2w6IGJvb2xlYW47XG4gIC8vIE9uLXJhbXAgc2VydmljZSBhY2NvdW50IHJlZmVyZW5jZVxuICB3YWxsZXRSZWZlcmVuY2U6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFNldHRpbmdzVHlwZSA9IFVpU2V0dGluZ3M7XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDYW1lcmFTZXR0aW5ncyA9IHsgY2FtZXJhOiBib29sZWFuIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VUaW1lQXV0b0xvY2sgPSB7IGF1dG9Mb2NrVGltZTogbnVtYmVyIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RVbmxvY2tUeXBlID0geyB1bmxvY2tUeXBlOiBXYWxsZXRVbmxvY2tUeXBlIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VFbmFibGVDaGFpblBhdHJvbCA9IHsgZW5hYmxlOiBib29sZWFuIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VTaG93WmVyb0JhbGFuY2UgPSB7IHNob3c6IGJvb2xlYW4gfTtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENoYW5nZUxhbmd1YWdlID0geyBsYW5ndWFnZTogTGFuZ3VhZ2VUeXBlIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VTaG93QmFsYW5jZSA9IHsgZW5hYmxlOiBib29sZWFuIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZG9tVGVzdFJlcXVlc3Qge1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gVHJhbnNhY3Rpb25EaXJlY3Rpb24ge1xuICBTRU5EID0gJ3NlbmQnLFxuICBSRUNFSVZFRCA9ICdyZWNlaXZlZCdcbn1cblxuZXhwb3J0IGVudW0gQ2hhaW5UeXBlIHtcbiAgRVZNID0gJ2V2bScsXG4gIFNVQlNUUkFURSA9ICdzdWJzdHJhdGUnXG59XG5cbmV4cG9ydCBlbnVtIEV4dHJpbnNpY1R5cGUge1xuICBUUkFOU0ZFUl9CQUxBTkNFID0gJ3RyYW5zZmVyLmJhbGFuY2UnLFxuICBUUkFOU0ZFUl9UT0tFTiA9ICd0cmFuc2Zlci50b2tlbicsXG4gIFRSQU5TRkVSX1hDTSA9ICd0cmFuc2Zlci54Y20nLFxuICBTRU5EX05GVCA9ICdzZW5kX25mdCcsXG4gIENST1dETE9BTiA9ICdjcm93ZGxvYW4nLFxuICBTVEFLSU5HX0pPSU5fUE9PTCA9ICdzdGFraW5nLmpvaW5fcG9vbCcsXG4gIFNUQUtJTkdfTEVBVkVfUE9PTCA9ICdzdGFraW5nLmxlYXZlX3Bvb2wnLFxuICBTVEFLSU5HX1BPT0xfV0lUSERSQVcgPSAnc3Rha2luZy5wb29sX3dpdGhkcmF3JyxcbiAgU1RBS0lOR19CT05EID0gJ3N0YWtpbmcuYm9uZCcsXG4gIFNUQUtJTkdfVU5CT05EID0gJ3N0YWtpbmcudW5ib25kJyxcbiAgU1RBS0lOR19DTEFJTV9SRVdBUkQgPSAnc3Rha2luZy5jbGFpbV9yZXdhcmQnLFxuICBTVEFLSU5HX1dJVEhEUkFXID0gJ3N0YWtpbmcud2l0aGRyYXcnLFxuICBTVEFLSU5HX0NPTVBPVU5ESU5HID0gJ3N0YWtpbmcuY29tcG91bmRpbmcnLFxuICBTVEFLSU5HX0NBTkNFTF9DT01QT1VORElORyA9ICdzdGFraW5nLmNhbmNlbF9jb21wb3VuZGluZycsXG4gIFNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0UgPSAnc3Rha2luZy5jYW5jZWxfdW5zdGFrZScsXG4gIEVWTV9FWEVDVVRFID0gJ2V2bS5leGVjdXRlJyxcbiAgVU5LTk9XTiA9ICd1bmtub3duJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJpbnNpY0RhdGFUeXBlTWFwIHtcbiAgW0V4dHJpbnNpY1R5cGUuVFJBTlNGRVJfQkFMQU5DRV06IFJlcXVlc3RUcmFuc2ZlcixcbiAgW0V4dHJpbnNpY1R5cGUuVFJBTlNGRVJfVE9LRU5dOiBSZXF1ZXN0VHJhbnNmZXIsXG4gIFtFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1hDTV06IFJlcXVlc3RDcm9zc0NoYWluVHJhbnNmZXIsXG4gIFtFeHRyaW5zaWNUeXBlLlNFTkRfTkZUXTogTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0LFxuICBbRXh0cmluc2ljVHlwZS5DUk9XRExPQU5dOiBhbnksXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfSk9JTl9QT09MXTogUmVxdWVzdFN0YWtlUG9vbGluZ0JvbmRpbmcsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfTEVBVkVfUE9PTF06IFJlcXVlc3RTdGFrZVBvb2xpbmdVbmJvbmRpbmcsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQk9ORF06IFJlcXVlc3RTdGFrZVBvb2xpbmdCb25kaW5nLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX1VOQk9ORF06IFJlcXVlc3RVbmJvbmRpbmdTdWJtaXQsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0xBSU1fUkVXQVJEXTogUmVxdWVzdFN0YWtlQ2xhaW1SZXdhcmQsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfV0lUSERSQVddOiBSZXF1ZXN0U3Rha2VXaXRoZHJhd2FsLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NPTVBPVU5ESU5HXTogUmVxdWVzdFR1cmluZ1N0YWtlQ29tcG91bmQsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0FOQ0VMX0NPTVBPVU5ESU5HXTogUmVxdWVzdFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmQsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0VdOiBSZXF1ZXN0U3Rha2VDYW5jZWxXaXRoZHJhd2FsLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX1BPT0xfV0lUSERSQVddOiBhbnksXG4gIFtFeHRyaW5zaWNUeXBlLkVWTV9FWEVDVVRFXTogVHJhbnNhY3Rpb25Db25maWcsXG4gIFtFeHRyaW5zaWNUeXBlLlVOS05PV05dOiBhbnlcbn1cblxuZXhwb3J0IGVudW0gRXh0cmluc2ljU3RhdHVzIHtcbiAgUVVFVUVEID0gJ3F1ZXVlZCcsIC8vIFRyYW5zYWN0aW9uIGluIHF1ZXVlXG4gIFNVQk1JVFRJTkcgPSAnc3VibWl0dGluZycsIC8vIFRyYW5zYWN0aW9uIGluIHF1ZXVlXG4gIFBST0NFU1NJTkcgPSAncHJvY2Vzc2luZycsIC8vIFRyYW5zYWN0aW9uIGlzIHNlbmRpbmdcbiAgU1VDQ0VTUyA9ICdzdWNjZXNzJywgLy8gU2VuZCBzdWNjZXNzZnVsbHlcbiAgRkFJTCA9ICdmYWlsJywgLy8gU2VuZCBmYWlsZWRcbiAgQ0FOQ0VMTEVEID0gJ2NhbmNlbGxlZCcsIC8vIElzIHJlbW92ZSBiZWZvcmUgc2VuZGluZ1xuICBVTktOT1dOID0gJ3Vua25vd24nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHhIaXN0b3J5SXRlbSB7XG4gIHRpbWU6IG51bWJlciB8IHN0cmluZztcbiAgbmV0d29ya0tleTogc3RyaW5nO1xuICBpc1N1Y2Nlc3M6IGJvb2xlYW47XG4gIGFjdGlvbjogVHJhbnNhY3Rpb25EaXJlY3Rpb247XG4gIGV4dHJpbnNpY0hhc2g6IHN0cmluZztcblxuICBjaGFuZ2U/OiBzdHJpbmc7XG4gIGNoYW5nZVN5bWJvbD86IHN0cmluZzsgLy8gaWYgdW5kZWZpbmVkID0+IG1haW4gdG9rZW5cbiAgZmVlPzogc3RyaW5nO1xuICBmZWVTeW1ib2w/OiBzdHJpbmc7XG4gIC8vIGlmIHVuZGVmaW5lZCA9PiBtYWluIHRva2VuLCBzb21ldGltZSBcImZlZVwiIHVzZXMgZGlmZmVyZW50IHRva2VuIHRoYW4gXCJjaGFuZ2VcIlxuICAvLyBleDogc3ViIHRva2VuIChET1QsIEFVU0QsIEtTTSwgLi4uKSBvZiBBY2FsYSwgS2FydXJhIHVzZXMgbWFpbiB0b2tlbiB0byBwYXkgZmVlXG4gIG9yaWdpbj86ICdhcHAnIHwgJ25ldHdvcmsnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW1Kc29uIHtcbiAgaXRlbXM6IFR4SGlzdG9yeUl0ZW1bXSxcbiAgdG90YWw6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljVG9rZW5JbmZvIHtcbiAgZGVjaW1hbHM6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1vdW50RGF0YSBleHRlbmRzIEJhc2ljVG9rZW5JbmZvIHtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBYQ01UcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvIHtcbiAgZGVzdGluYXRpb25DaGFpbjogc3RyaW5nLFxuICBvcmlnaW5hbENoYWluOiBzdHJpbmcsXG4gIGZlZT86IEFtb3VudERhdGFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBORlRUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvIHtcbiAgY29sbGVjdGlvbk5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvPFQgZXh0ZW5kcyBFeHRyaW5zaWNUeXBlPiA9IFQgZXh0ZW5kcyBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1hDTVxuICA/IFhDTVRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm9cbiAgOiBUIGV4dGVuZHMgRXh0cmluc2ljVHlwZS5TRU5EX05GVFxuICAgID8gTkZUVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mb1xuICAgIDogdW5kZWZpbmVkO1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtPEVUIGV4dGVuZHMgRXh0cmluc2ljVHlwZSA9IEV4dHJpbnNpY1R5cGUuVFJBTlNGRVJfQkFMQU5DRT4ge1xuICBvcmlnaW4/OiAnYXBwJyB8ICdtaWdyYXRpb24nIHwgJ3N1YnNxdWlkJywgLy8gJ2FwcCcgb3IgaGlzdG9yeSBzb3VyY2VcbiAgY2FsbGhhc2g/OiBzdHJpbmcsXG4gIHNpZ25hdHVyZT86IHN0cmluZyxcbiAgY2hhaW46IHN0cmluZyxcbiAgY2hhaW5UeXBlPzogQ2hhaW5UeXBlLFxuICBjaGFpbk5hbWU/OiBzdHJpbmcsXG4gIGRpcmVjdGlvbjogVHJhbnNhY3Rpb25EaXJlY3Rpb24sXG4gIHR5cGU6IEV4dHJpbnNpY1R5cGUsXG4gIGZyb206IHN0cmluZyxcbiAgZnJvbU5hbWU/OiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4gIHRvTmFtZT86IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nLFxuICBzdGF0dXM6IEV4dHJpbnNpY1N0YXR1cyxcbiAgdHJhbnNhY3Rpb25JZD86IHN0cmluZywgLy8gQXZhaWxhYmxlIGZvciB0cmFuc2FjdGlvbiBoaXN0b3J5XG4gIGV4dHJpbnNpY0hhc2g6IHN0cmluZyxcbiAgdGltZTogbnVtYmVyLFxuICBkYXRhPzogc3RyaW5nLFxuICBibG9ja051bWJlcjogbnVtYmVyLFxuICBibG9ja0hhc2g6IHN0cmluZyxcbiAgYW1vdW50PzogQW1vdW50RGF0YSxcbiAgdGlwPzogQW1vdW50RGF0YSxcbiAgZmVlPzogQW1vdW50RGF0YSxcbiAgZXhwbG9yZXJVcmw/OiBzdHJpbmcsXG4gIGFkZGl0aW9uYWxJbmZvPzogVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mbzxFVD4sXG4gIHN0YXJ0QmxvY2s/OiBudW1iZXIsXG4gIG5vbmNlPzogbnVtYmVyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNXRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvZGU/OiBudW1iZXI7XG4gIGVycm9yVHlwZTogc3RyaW5nO1xuICBkYXRhPzogdW5rbm93bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTV1dhcm5pbmcge1xuICBlcnJvclR5cGU6IHN0cmluZztcbiAgY29kZT86IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkYXRhPzogdW5rbm93bjtcbn1cblxuZXhwb3J0IGVudW0gQmFzaWNUeEVycm9yVHlwZSB7XG4gIE5PVF9FTk9VR0hfQkFMQU5DRSA9ICdOT1RfRU5PVUdIX0JBTEFOQ0UnLFxuICBDSEFJTl9ESVNDT05ORUNURUQgPSAnQ0hBSU5fRElTQ09OTkVDVEVEJyxcbiAgSU5WQUxJRF9QQVJBTVMgPSAnSU5WQUxJRF9QQVJBTVMnLFxuICBEVVBMSUNBVEVfVFJBTlNBQ1RJT04gPSAnRFVQTElDQVRFX1RSQU5TQUNUSU9OJyxcbiAgVU5BQkxFX1RPX1NJR04gPSAnVU5BQkxFX1RPX1NJR04nLFxuICBVU0VSX1JFSkVDVF9SRVFVRVNUID0gJ1VTRVJfUkVKRUNUX1JFUVVFU1QnLFxuICBVTkFCTEVfVE9fU0VORCA9ICdVTkFCTEVfVE9fU0VORCcsXG4gIFNFTkRfVFJBTlNBQ1RJT05fRkFJTEVEID0gJ1NFTkRfVFJBTlNBQ1RJT05fRkFJTEVEJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnSU5URVJOQUxfRVJST1InLFxuICBVTlNVUFBPUlRFRCA9ICdVTlNVUFBPUlRFRCcsXG4gIFRJTUVPVVQgPSAnVElNRU9VVCcsXG4gIE5PVF9FTk9VR0hfRVhJU1RFTlRJQUxfREVQT1NJVCA9ICdOT1RfRU5PVUdIX0VYSVNURU5USUFMX0RFUE9TSVQnLFxufVxuXG5leHBvcnQgZW51bSBTdGFraW5nVHhFcnJvclR5cGUge1xuICBOT1RfRU5PVUdIX01JTl9TVEFLRSA9ICdOT1RfRU5PVUdIX01JTl9TVEFLRScsXG4gIEVYQ0VFRF9NQVhfTk9NSU5BVElPTlMgPSAnRVhDRUVEX01BWF9OT01JTkFUSU9OUycsXG4gIEVYSVNUX1VOU1RBS0lOR19SRVFVRVNUID0gJ0VYSVNUX1VOU1RBS0lOR19SRVFVRVNUJyxcbiAgSU5WQUxJRF9BQ1RJVkVfU1RBS0UgPSAnSU5WQUxJRF9BQ1RJVkVfU1RBS0UnLFxuICBFWENFRURfTUFYX1VOU1RBS0lORyA9ICdFWENFRURfTUFYX1VOU1RBS0lORycsXG4gIElOQUNUSVZFX05PTUlOQVRJT05fUE9PTCA9ICdJTkFDVElWRV9OT01JTkFUSU9OX1BPT0wnXG59XG5cbmV4cG9ydCBlbnVtIFRyYW5zZmVyVHhFcnJvclR5cGUge1xuICBOT1RfRU5PVUdIX1ZBTFVFID0gJ05PVF9FTk9VR0hfVkFMVUUnLFxuICBOT1RfRU5PVUdIX0ZFRSA9ICdOT1RfRU5PVUdIX0ZFRScsXG4gIElOVkFMSURfVE9LRU4gPSAnSU5WQUxJRF9UT0tFTicsXG4gIFRSQU5TRkVSX0VSUk9SID0gJ1RSQU5TRkVSX0VSUk9SJyxcbiAgUkVDRUlWRVJfTk9UX0VOT1VHSF9FWElTVEVOVElBTF9ERVBPU0lUID0gJ1JFQ0VJVkVSX05PVF9FTk9VR0hfRVhJU1RFTlRJQUxfREVQT1NJVCcsXG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zYWN0aW9uRXJyb3JUeXBlID0gQmFzaWNUeEVycm9yVHlwZSB8IFRyYW5zZmVyVHhFcnJvclR5cGUgfCBTdGFraW5nVHhFcnJvclR5cGVcbmV4cG9ydCBlbnVtIEJhc2ljVHhXYXJuaW5nQ29kZSB7XG4gIE5PVF9FTk9VR0hfRVhJU1RFTlRJQUxfREVQT1NJVCA9ICdub3RFbm91Z2hFeGlzdGVudGlhbERlcG9zaXQnXG59XG5cbmV4cG9ydCB0eXBlIEJhc2ljVHhFcnJvciA9IHtcbiAgZXJyb3JUeXBlOiBUeEVycm9yQ29kZSxcbiAgZGF0YT86IG9iamVjdCxcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEJhc2ljVHhXYXJuaW5nID0ge1xuICB3YXJuaW5nVHlwZTogVHJhbnNhY3Rpb25XYXJuaW5nVHlwZSxcbiAgZGF0YT86IG9iamVjdCxcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25SZXNwb25zZSB7XG4gIGV4dHJpbnNpY0hhc2g/OiBzdHJpbmc7XG4gIHR4RXJyb3I/OiBib29sZWFuO1xuICBlcnJvcnM/OiBUcmFuc2FjdGlvbkVycm9yW107XG4gIHN0YXR1cz86IGJvb2xlYW47XG4gIHR4UmVzdWx0PzogVHhSZXN1bHRUeXBlXG4gIHBhc3N3b3JkRXJyb3I/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdFRyYW5zYWN0aW9uUmVzcG9uc2UgZXh0ZW5kcyBTV1RyYW5zYWN0aW9uUmVzcG9uc2Uge1xuICBpc1NlbmRpbmdTZWxmOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBIYW5kbGVCYXNpY1R4ID0gKGRhdGE6IFRyYW5zYWN0aW9uUmVzcG9uc2UpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFR4RXJyb3JDb2RlID0gVHJhbnNmZXJUeEVycm9yVHlwZSB8IFRyYW5zYWN0aW9uRXJyb3JUeXBlXG5cbmV4cG9ydCBlbnVtIEJhbGFuY2VFcnJvclR5cGUge1xuICBORVRXT1JLX0VSUk9SID0gJ05FVFdPUktfRVJST1InLFxuICBUT0tFTl9FUlJPUiA9ICdUT0tFTl9FUlJPUicsXG4gIFRJTUVPVVQgPSAnVElNRU9VVCcsXG4gIEdFVF9CQUxBTkNFX0VSUk9SID0gJ0dFVF9CQUxBTkNFX0VSUk9SJyxcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25XYXJuaW5nVHlwZSA9IEJhc2ljVHhXYXJuaW5nQ29kZVxuXG5leHBvcnQgZW51bSBQcm92aWRlckVycm9yVHlwZSB7XG4gIENIQUlOX0RJU0NPTk5FQ1RFRCA9ICdDSEFJTl9ESVNDT05ORUNURUQnLFxuICBJTlZBTElEX1BBUkFNUyA9ICdJTlZBTElEX1BBUkFNUycsXG4gIElOVEVSTkFMX0VSUk9SID0gJ0lOVEVSTkFMX0VSUk9SJyxcbiAgVVNFUl9SRUpFQ1QgPSAnVVNFUl9SRUpFQ1QnLFxufVxuXG4vLy8gTWFuYWdlIGFjY291bnRcbi8vIEV4cG9ydCBwcml2YXRlIGtleVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50RXhwb3J0UHJpdmF0ZUtleSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUFjY291bnRFeHBvcnRQcml2YXRlS2V5IHtcbiAgcHJpdmF0ZUtleTogc3RyaW5nO1xuICBwdWJsaWNLZXk6IHN0cmluZztcbn1cblxuLy8gR2V0IGFjY291bnQgaW5mbyB3aXRoIHByaXZhdGUga2V5XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENoZWNrUHVibGljQW5kU2VjcmV0S2V5IHtcbiAgc2VjcmV0S2V5OiBzdHJpbmc7XG4gIHB1YmxpY0tleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlQ2hlY2tQdWJsaWNBbmRTZWNyZXRLZXkge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGlzVmFsaWQ6IGJvb2xlYW47XG4gIGlzRXRoZXJldW06IGJvb2xlYW47XG59XG5cbi8vIENyZWF0ZSBzZWVkIHBoYXNlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFNlZWRDcmVhdGVWMiB7XG4gIGxlbmd0aD86IFNlZWRMZW5ndGhzO1xuICBzZWVkPzogc3RyaW5nO1xuICB0eXBlcz86IEFycmF5PEtleXBhaXJUeXBlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVNlZWRDcmVhdGVWMiB7XG4gIHNlZWQ6IHN0cmluZyxcbiAgYWRkcmVzc01hcDogUmVjb3JkPEtleXBhaXJUeXBlLCBzdHJpbmc+XG59XG5cbi8vIEdldCBhY2NvdW50IGluZm8gd2l0aCBzdXJpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFNlZWRWYWxpZGF0ZVYyIHtcbiAgc3VyaTogc3RyaW5nO1xuICB0eXBlcz86IEFycmF5PEtleXBhaXJUeXBlPjtcbn1cblxuZXhwb3J0IHR5cGUgUmVzcG9uc2VTZWVkVmFsaWRhdGVWMiA9IFJlc3BvbnNlU2VlZENyZWF0ZVYyXG5cbi8vIENyZWF0ZSBhY2NvdW50IHdpdGggc3VyaVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50Q3JlYXRlU3VyaVYyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBnZW5lc2lzSGFzaD86IHN0cmluZyB8IG51bGw7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBzdXJpOiBzdHJpbmc7XG4gIHR5cGVzPzogQXJyYXk8S2V5cGFpclR5cGU+O1xuICBpc0FsbG93ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlQWNjb3VudENyZWF0ZVN1cmlWMiA9IFJlY29yZDxLZXlwYWlyVHlwZSwgc3RyaW5nPlxuXG4vLyBDcmVhdGUgZGVyaXZlIGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVyaXZlQ3JlYXRlVjIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGdlbmVzaXNIYXNoPzogc3RyaW5nIHwgbnVsbDtcbiAgc3VyaTogc3RyaW5nO1xuICBwYXJlbnRBZGRyZXNzOiBzdHJpbmc7XG4gIGlzQWxsb3dlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVEZXJpdmVBY2NvdW50SW5mbyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc3VyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3REZXJpdmVDcmVhdGVWMyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVyaXZlQ3JlYXRlTXVsdGlwbGUge1xuICBwYXJlbnRBZGRyZXNzOiBzdHJpbmc7XG4gIGlzQWxsb3dlZDogYm9vbGVhbjtcbiAgaXRlbXM6IENyZWF0ZURlcml2ZUFjY291bnRJbmZvW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVyaXZlQWNjb3VudEluZm8ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHN1cmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVyaXZlVmFsaWRhdGVWMiB7XG4gIHN1cmk6IHN0cmluZztcbiAgcGFyZW50QWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZXNwb25zZURlcml2ZVZhbGlkYXRlVjIgPSBEZXJpdmVBY2NvdW50SW5mbztcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEdldERlcml2ZUFjY291bnRzIHtcbiAgcGFnZTogbnVtYmVyO1xuICBsaW1pdDogbnVtYmVyO1xuICBwYXJlbnRBZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VHZXREZXJpdmVBY2NvdW50cyB7XG4gIHJlc3VsdDogRGVyaXZlQWNjb3VudEluZm9bXTtcbn1cblxuLy8gUmVzdG9yZSBhY2NvdW50IHdpdGgganNvbiBmaWxlIChzaW5nbGUgYWNjb3VudClcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SnNvblJlc3RvcmVWMiB7XG4gIGZpbGU6IEtleXJpbmdQYWlyJEpzb247XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgaXNBbGxvd2VkOiBib29sZWFuO1xuICB3aXRoTWFzdGVyUGFzc3dvcmQ6IGJvb2xlYW47XG59XG5cbi8vIFJlc3RvcmUgYWNjb3VudCB3aXRoIGpzb24gZmlsZSAobXVsdGkgYWNjb3VudClcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QmF0Y2hSZXN0b3JlVjIge1xuICBmaWxlOiBLZXlyaW5nUGFpcnMkSnNvbjtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgYWNjb3VudHNJbmZvOiBSZXNwb25zZUpzb25HZXRBY2NvdW50SW5mb1tdO1xuICBpc0FsbG93ZWQ6IGJvb2xlYW47XG59XG5cbi8vIFJlc3RvcmUgYWNjb3VudCB3aXRoIHByaXZhdGVLZXlcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVByaXZhdGVLZXlWYWxpZGF0ZVYyIHtcbiAgYWRkcmVzc01hcDogUmVjb3JkPEtleXBhaXJUeXBlLCBzdHJpbmc+LFxuICBhdXRvQWRkUHJlZml4OiBib29sZWFuXG59XG5cbi8vIEV4dGVybmFsIGFjY291bnRcblxuZXhwb3J0IGVudW0gQWNjb3VudEV4dGVybmFsRXJyb3JDb2RlIHtcbiAgSU5WQUxJRF9BRERSRVNTID0gJ2ludmFsaWRUb0FjY291bnQnLFxuICBLRVlSSU5HX0VSUk9SID0gJ2tleXJpbmdFcnJvcicsXG4gIFVOS05PV05fRVJST1IgPSAndW5rbm93bkVycm9yJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRFeHRlcm5hbEVycm9ye1xuICBjb2RlOiBBY2NvdW50RXh0ZXJuYWxFcnJvckNvZGU7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLy8gQXR0YWNoIFFSLXNpZ25lciBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRDcmVhdGVFeHRlcm5hbFYyIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBnZW5lc2lzSGFzaD86IHN0cmluZyB8IG51bGw7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbiAgaXNBbGxvd2VkOiBib29sZWFuO1xuICBpc1JlYWRPbmx5OiBib29sZWFuO1xufVxuXG4vLyBBdHRhY2ggTGVkZ2VyIGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudENyZWF0ZUhhcmR3YXJlVjIge1xuICBhY2NvdW50SW5kZXg6IG51bWJlcjtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBhZGRyZXNzT2Zmc2V0OiBudW1iZXI7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7XG4gIGhhcmR3YXJlVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzQWxsb3dlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlSGFyZHdhcmVBY2NvdW50SXRlbSB7XG4gIGFjY291bnRJbmRleDogbnVtYmVyO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGFkZHJlc3NPZmZzZXQ6IG51bWJlcjtcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbiAgaGFyZHdhcmVUeXBlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudENyZWF0ZUhhcmR3YXJlTXVsdGlwbGUge1xuICBhY2NvdW50czogQ3JlYXRlSGFyZHdhcmVBY2NvdW50SXRlbVtdO1xufVxuXG4vLyBSZXN0b3JlIGFjY291bnQgd2l0aCBwdWJsaWMgYW5kIHNlY3JldCBrZXlcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudENyZWF0ZVdpdGhTZWNyZXRLZXkge1xuICBwdWJsaWNLZXk6IHN0cmluZztcbiAgc2VjcmV0S2V5OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNBbGxvdzogYm9vbGVhbjtcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUFjY291bnRDcmVhdGVXaXRoU2VjcmV0S2V5IHtcbiAgZXJyb3JzOiBBY2NvdW50RXh0ZXJuYWxFcnJvcltdO1xuICBzdWNjZXNzOiBib29sZWFuO1xufVxuXG4vLyBTdWJzY3JpYmUgQWRkcmVzcyBCb29rXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc0Jvb2tJbmZvIHtcbiAgYWRkcmVzc2VzOiBBZGRyZXNzSnNvbltdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEVkaXRDb250YWN0QWNjb3VudCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgbWV0YTogS2V5cmluZ1BhaXIkTWV0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVsZXRlQ29udGFjdEFjY291bnQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbi8vIEluamVjdCBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFkZEluamVjdGVkQWNjb3VudHMge1xuICBhY2NvdW50czogSW5qZWN0ZWRBY2NvdW50V2l0aE1ldGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVtb3ZlSW5qZWN0ZWRBY2NvdW50cyB7XG4gIGFkZHJlc3Nlczogc3RyaW5nW107XG59XG5cbi8vLyBTaWduIFRyYW5zYWN0aW9uXG5cbi8vLyBTaWduIEV4dGVybmFsIFJlcXVlc3RcblxuLy8gU3RhdHVzXG5cbmV4cG9ydCBlbnVtIEV4dGVybmFsUmVxdWVzdFByb21pc2VTdGF0dXMge1xuICBQRU5ESU5HLFxuICBSRUpFQ1RFRCxcbiAgRkFJTEVELFxuICBDT01QTEVURURcbn1cblxuLy8gU3RydWN0dXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZXJuYWxSZXF1ZXN0UHJvbWlzZSB7XG4gIHJlc29sdmU/OiAocmVzdWx0OiBTaWduZXJSZXN1bHQgfCBQcm9taXNlTGlrZTxTaWduZXJSZXN1bHQ+KSA9PiB2b2lkLFxuICByZWplY3Q/OiAoZXJyb3I/OiBFcnJvcikgPT4gdm9pZCxcbiAgc3RhdHVzOiBFeHRlcm5hbFJlcXVlc3RQcm9taXNlU3RhdHVzLFxuICBtZXNzYWdlPzogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IG51bWJlclxufVxuXG4vLyBQcmVwYXJlIHRvIGNyZWF0ZVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXBhcmVFeHRlcm5hbFJlcXVlc3Qge1xuICBpZDogc3RyaW5nO1xuICBzZXRTdGF0ZTogKHByb21pc2U6IEV4dGVybmFsUmVxdWVzdFByb21pc2UpID0+IHZvaWQ7XG4gIHVwZGF0ZVN0YXRlOiAocHJvbWlzZTogUGFydGlhbDxFeHRlcm5hbFJlcXVlc3RQcm9taXNlPikgPT4gdm9pZDtcbn1cblxuLy8gUmVqZWN0XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlamVjdEV4dGVybmFsUmVxdWVzdCB7XG4gIGlkOiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHRocm93RXJyb3I/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBSZXNwb25zZVJlamVjdEV4dGVybmFsUmVxdWVzdCA9IHZvaWRcblxuLy8gUmVzb2x2ZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZXNvbHZlRXh0ZXJuYWxSZXF1ZXN0IHtcbiAgaWQ6IHN0cmluZztcbiAgZGF0YTogU2lnbmVyUmVzdWx0O1xufVxuXG5leHBvcnQgdHlwZSBSZXNwb25zZVJlc29sdmVFeHRlcm5hbFJlcXVlc3QgPSB2b2lkXG5cbi8vL1xuXG5leHBvcnQgdHlwZSBBY2NvdW50UmVmID0gQXJyYXk8c3RyaW5nPlxuZXhwb3J0IHR5cGUgQWNjb3VudFJlZk1hcCA9IFJlY29yZDxzdHJpbmcsIEFjY291bnRSZWY+XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RQcmljZSA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVQcmljZSA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RCYWxhbmNlID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZUJhbGFuY2UgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlQmFsYW5jZXNWaXNpYmlsaXR5ID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdENyb3dkbG9hbiA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVDcm93ZGxvYW4gPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlTmZ0ID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZVN0YWtpbmcgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlU3Rha2luZ1Jld2FyZCA9IG51bGxcbmV4cG9ydCBlbnVtIFRoZW1lTmFtZXMge1xuICBMSUdIVCA9ICdsaWdodCcsXG4gIERBUksgPSAnZGFyaycsXG4gIFNVQlNQQUNFID0gJ3N1YnNwYWNlJ1xufVxuXG5leHBvcnQgZW51bSBORVRXT1JLX0VSUk9SIHtcbiAgSU5WQUxJRF9JTkZPX1RZUEUgPSAnaW52YWxpZEluZm9UeXBlJyxcbiAgSU5KRUNUX1NDUklQVF9ERVRFQ1RFRCA9ICdpbmplY3RTY3JpcHREZXRlY3RlZCcsXG4gIEVYSVNURURfTkVUV09SSyA9ICdleGlzdGVkTmV0d29yaycsXG4gIEVYSVNURURfUFJPVklERVIgPSAnZXhpc3RlZFByb3ZpZGVyJyxcbiAgSU5WQUxJRF9QUk9WSURFUiA9ICdpbnZhbGlkUHJvdmlkZXInLFxuICBOT05FID0gJ25vbmUnLFxuICBDT05ORUNUSU9OX0ZBSUxVUkUgPSAnY29ubmVjdGlvbkZhaWx1cmUnLFxuICBQUk9WSURFUl9OT1RfU0FNRV9ORVRXT1JLID0gJ3Byb3ZpZGVyTm90U2FtZU5ldHdvcmsnXG59XG5cbmV4cG9ydCBlbnVtIE5FVFdPUktfU1RBVFVTIHtcbiAgQ09OTkVDVEVEID0gJ2Nvbm5lY3RlZCcsXG4gIENPTk5FQ1RJTkcgPSAnY29ubmVjdGluZycsXG4gIERJU0NPTk5FQ1RFRCA9ICdkaXNjb25uZWN0ZWQnLFxuICBQRU5ESU5HID0gJ3BlbmRpbmcnXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgdHlwZSBCYXNlUmVxdWVzdFNpZ24gPSB7XG4gIGlnbm9yZVdhcm5pbmdzPzogYm9vbGVhbjtcbn07XG5cbi8vIEludGVybmFsIHJlcXVlc3Q6IHJlcXVlc3QgZnJvbSBleHRlbnNpb24sIG5vdCBkQXBwLlxuZXhwb3J0IHR5cGUgSW50ZXJuYWxSZXF1ZXN0U2lnbjxUIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduPiA9IE9taXQ8VCwgJ3Bhc3N3b3JkJz47XG5cbmV4cG9ydCB0eXBlIFR4UmVzdWx0VHlwZSA9IHtcbiAgY2hhbmdlOiBzdHJpbmc7XG4gIGNoYW5nZVN5bWJvbD86IHN0cmluZztcbiAgZmVlPzogc3RyaW5nO1xuICBmZWVTeW1ib2w/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0IHtcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICBzZW5kZXJBZGRyZXNzOiBzdHJpbmcsXG4gIHJlY2lwaWVudEFkZHJlc3M6IHN0cmluZyxcblxuICBuZnRJdGVtTmFtZT86IHN0cmluZywgLy8gVXNlIGZvciBjb25maXJtYXRpb24gdmlldyBvbmx5XG4gIHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PixcbiAgbmZ0SXRlbTogTmZ0SXRlbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bU5mdFRyYW5zYWN0aW9uIGV4dGVuZHMgVmFsaWRhdGVUcmFuc2FjdGlvblJlc3BvbnNlIHtcbiAgdHg6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtTmZ0U3VibWl0VHJhbnNhY3Rpb24gZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBzZW5kZXJBZGRyZXNzOiBzdHJpbmcsXG4gIHJlY2lwaWVudEFkZHJlc3M6IHN0cmluZyxcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICBlc3RpbWF0ZUdhczogc3RyaW5nLFxuICByYXdUcmFuc2FjdGlvbjogUmVjb3JkPHN0cmluZywgYW55PlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlTmV0d29ya1Jlc3BvbnNlIHtcbiAgLy8gdmFsaWRhdGlvbiBzdGF0ZVxuICBzdWNjZXNzOiBib29sZWFuLFxuICBlcnJvcj86IF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SLFxuICBjb25mbGljdENoYWluPzogc3RyaW5nLFxuICBjb25mbGljdEtleT86IHN0cmluZyxcblxuICAvLyBjaGFpbiBzcGVjXG4gIGdlbmVzaXNIYXNoOiBzdHJpbmcsXG4gIGFkZHJlc3NQcmVmaXg6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBwYXJhSWQ6IG51bWJlciB8IG51bGwsXG4gIGV2bUNoYWluSWQ6IG51bWJlciB8IG51bGwsIC8vIG51bGwgaWYgbm90IGV2bSBjb21wYXRpYmxlXG4gIHN5bWJvbDogc3RyaW5nLFxuICBkZWNpbWFsczogbnVtYmVyLFxuICBleGlzdGVudGlhbERlcG9zaXQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlTmV0d29ya1JlcXVlc3Qge1xuICBwcm92aWRlcjogc3RyaW5nLFxuICBleGlzdGVkQ2hhaW5TbHVnPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpTWFwIHtcbiAgc3Vic3RyYXRlOiBSZWNvcmQ8c3RyaW5nLCBfU3Vic3RyYXRlQXBpPjtcbiAgZXZtOiBSZWNvcmQ8c3RyaW5nLCBfRXZtQXBpPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdXBwb3J0VHJhbnNmZXJSZXNwb25zZSB7XG4gIHN1cHBvcnRUcmFuc2ZlcjogYm9vbGVhbjtcbiAgc3VwcG9ydFRyYW5zZmVyQWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RGcmVlQmFsYW5jZSB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICB0b2tlbj86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RNYXhUcmFuc2ZlcmFibGUge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgdG9rZW4/OiBzdHJpbmcsXG4gIGlzWGNtVHJhbnNmZXI/OiBib29sZWFuLFxuICBkZXN0Q2hhaW46IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUcmFuc2ZlckNoZWNrUmVmZXJlbmNlQ291bnQge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5ldHdvcmtLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUcmFuc2ZlckNoZWNrU3VwcG9ydGluZyB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgdG9rZW5TbHVnOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJhbnNmZXJFeGlzdGVudGlhbERlcG9zaXQge1xuICB0b2tlblNsdWc6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RTYXZlUmVjZW50QWNjb3VudCB7XG4gIGFjY291bnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0cmF0ZU5mdFRyYW5zYWN0aW9uIHtcbiAgZXJyb3I6IGJvb2xlYW47XG4gIGVzdGltYXRlZEZlZT86IHN0cmluZztcbiAgYmFsYW5jZUVycm9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0cmF0ZU5mdFN1Ym1pdFRyYW5zYWN0aW9uIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbDtcbiAgc2VuZGVyQWRkcmVzczogc3RyaW5nO1xuICBuZnRJdGVtTmFtZT86IHN0cmluZztcbiAgcmVjaXBpZW50QWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic3RyYXRlTmZ0U3VibWl0VHJhbnNhY3Rpb24gPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN1YnN0cmF0ZU5mdFN1Ym1pdFRyYW5zYWN0aW9uPjtcbmV4cG9ydCB0eXBlIFJlcXVlc3RFdm1OZnRTdWJtaXRUcmFuc2FjdGlvbiA9IEludGVybmFsUmVxdWVzdFNpZ248RXZtTmZ0U3VibWl0VHJhbnNhY3Rpb24+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50TWV0YXtcbiAgYWRkcmVzczogc3RyaW5nIHwgVWludDhBcnJheTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUFjY291bnRNZXRhe1xuICBtZXRhOiBLZXlyaW5nUGFpciRNZXRhO1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0RXZtRXZlbnRzID0gbnVsbDtcbmV4cG9ydCB0eXBlIEV2bUV2ZW50VHlwZSA9ICdjb25uZWN0JyB8ICdkaXNjb25uZWN0JyB8ICdhY2NvdW50c0NoYW5nZWQnIHwgJ2NoYWluQ2hhbmdlZCcgfCAnbWVzc2FnZScgfCAnZGF0YScgfCAncmVjb25uZWN0JyB8ICdlcnJvcic7XG5leHBvcnQgdHlwZSBFdm1BY2NvdW50c0NoYW5nZWRQYXlsb2FkID0gc3RyaW5nIFtdO1xuZXhwb3J0IHR5cGUgRXZtQ2hhaW5DaGFuZ2VkUGF5bG9hZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEV2bUNvbm5lY3RQYXlsb2FkID0geyBjaGFpbklkOiBFdm1DaGFpbkNoYW5nZWRQYXlsb2FkIH1cbmV4cG9ydCB0eXBlIEV2bURpc2Nvbm5lY3RQYXlsb2FkID0gdW5rbm93blxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bUV2ZW50IHtcbiAgdHlwZTogRXZtRXZlbnRUeXBlLFxuICBwYXlsb2FkOiBFdm1BY2NvdW50c0NoYW5nZWRQYXlsb2FkIHwgRXZtQ2hhaW5DaGFuZ2VkUGF5bG9hZCB8IEV2bUNvbm5lY3RQYXlsb2FkIHwgRXZtRGlzY29ubmVjdFBheWxvYWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtQXBwU3RhdGUge1xuICBuZXR3b3JrS2V5Pzogc3RyaW5nLFxuICBjaGFpbklkPzogc3RyaW5nLFxuICBpc0Nvbm5lY3RlZD86IGJvb2xlYW4sXG4gIHdlYjM/OiBXZWIzLFxuICBsaXN0ZW5FdmVudHM/OiBzdHJpbmdbXVxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0RXZtUHJvdmlkZXJTZW5kID0gSnNvblJwY1BheWxvYWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VFdm1Qcm92aWRlclNlbmQge1xuICBlcnJvcjogKEVycm9yIHwgbnVsbCk7XG4gIHJlc3VsdD86IEpzb25ScGNSZXNwb25zZTtcbn1cblxuZXhwb3J0IGVudW0gRXZtUHJvdmlkZXJFcnJvclR5cGUge1xuICBVU0VSX1JFSkVDVEVEX1JFUVVFU1QgPSAnVVNFUl9SRUpFQ1RFRF9SRVFVRVNUJyxcbiAgVU5BVVRIT1JJWkVEID0gJ1VOQVVUSE9SSVpFRCcsXG4gIFVOU1VQUE9SVEVEX01FVEhPRCA9ICdVTlNVUFBPUlRFRF9NRVRIT0QnLFxuICBESVNDT05ORUNURUQgPSAnRElTQ09OTkVDVEVEJyxcbiAgQ0hBSU5fRElTQ09OTkVDVEVEID0gJ0NIQUlOX0RJU0NPTk5FQ1RFRCcsXG4gIElOVkFMSURfUEFSQU1TID0gJ0lOVkFMSURfUEFSQU1TJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnSU5URVJOQUxfRVJST1InLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNlbmRUcmFuc2FjdGlvblBhcmFtcyB7XG4gIGZyb206IHN0cmluZztcbiAgdG8/OiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBnYXNMaW1pdD86IHN0cmluZyB8IG51bWJlcjtcbiAgbWF4UHJpb3JpdHlGZWVQZXJHYXM/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG1heEZlZVBlckdhcz86IHN0cmluZyB8IG51bWJlcjtcbiAgZ2FzUHJpY2U/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGRhdGE/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hOZXR3b3JrUmVxdWVzdCB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1TaWduUmVxdWVzdCB7XG4gIGFjY291bnQ6IEFjY291bnRKc29uO1xuICBoYXNoUGF5bG9hZDogc3RyaW5nO1xuICBjYW5TaWduOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNpZ25hdHVyZVJlcXVlc3QgZXh0ZW5kcyBFdm1TaWduUmVxdWVzdCB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDogdW5rbm93bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1TZW5kVHJhbnNhY3Rpb25SZXF1ZXN0IGV4dGVuZHMgVHJhbnNhY3Rpb25Db25maWcsIEV2bVNpZ25SZXF1ZXN0IHtcbiAgZXN0aW1hdGVHYXM6IHN0cmluZztcbiAgcGFyc2VEYXRhOiBFdm1UcmFuc2FjdGlvbkRhdGE7XG4gIGlzVG9Db250cmFjdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgRXZtV2F0Y2hUcmFuc2FjdGlvblJlcXVlc3QgPSBFdm1TZW5kVHJhbnNhY3Rpb25SZXF1ZXN0O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbnNRdWV1ZUl0ZW1PcHRpb25zIHtcbiAgcmVxdWlyZWRQYXNzd29yZD86IGJvb2xlYW47XG4gIGFkZHJlc3M/OiBzdHJpbmc7XG4gIG5ldHdvcmtLZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxUPiBleHRlbmRzIENvbmZpcm1hdGlvbnNRdWV1ZUl0ZW1PcHRpb25zLCBDb25maXJtYXRpb25SZXF1ZXN0QmFzZSB7XG4gIHBheWxvYWQ6IFQ7XG4gIHBheWxvYWRKc29uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uUmVzdWx0PFQ+IGV4dGVuZHMgQ29uZmlybWF0aW9uUmVxdWVzdEJhc2Uge1xuICBpc0FwcHJvdmVkOiBib29sZWFuO1xuICBwYXlsb2FkPzogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1SZXF1ZXN0RXh0ZXJuYWwge1xuICBoYXNoUGF5bG9hZDogc3RyaW5nO1xuICBjYW5TaWduOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3RFeHRlcm5hbCBleHRlbmRzIEV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3QsIEV2bVJlcXVlc3RFeHRlcm5hbCB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNpZ25hdHVyZVJlcXVlc3RFeHRlcm5hbCBleHRlbmRzIEV2bVNpZ25hdHVyZVJlcXVlc3QsIEV2bVJlcXVlc3RFeHRlcm5hbCB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE5ldHdvcmtSZXF1ZXN0RXh0ZXJuYWwgeyAvLyBjdXJyZW50bHkgb25seSBzdXBwb3J0IGFkZGluZyBwdXJlIEV2bSBuZXR3b3JrXG4gIGNoYWluSWQ6IHN0cmluZztcbiAgcnBjVXJsczogc3RyaW5nW107XG4gIGNoYWluTmFtZTogc3RyaW5nO1xuICBibG9ja0V4cGxvcmVyVXJscz86IHN0cmluZ1tdO1xuICByZXF1ZXN0SWQ/OiBzdHJpbmc7XG4gIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHN5bWJvbDogc3RyaW5nO1xuICAgIGRlY2ltYWxzOiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkTmV0d29ya0V4dGVybmFsUmVxdWVzdCB7IC8vIGN1cnJlbnRseSBvbmx5IHN1cHBvcnQgYWRkaW5nIHB1cmUgRXZtIG5ldHdvcmtcbiAgY2hhaW5JZDogc3RyaW5nO1xuICBycGNVcmw6IHN0cmluZztcbiAgY2hhaW5OYW1lOiBzdHJpbmc7XG4gIGJsb2NrRXhwbG9yZXJVcmw6IHN0cmluZztcbiAgcmVxdWVzdElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkVG9rZW5SZXF1ZXN0RXh0ZXJuYWwge1xuICBzbHVnPzogc3RyaW5nO1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcbiAgb3JpZ2luQ2hhaW46IHN0cmluZztcbiAgdHlwZTogX0Fzc2V0VHlwZTtcbiAgbmFtZTogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbiAgZGVjaW1hbHM6IG51bWJlcjtcbiAgdmFsaWRhdGVkOiBib29sZWFuO1xuICBjb250cmFjdEVycm9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRlZmluaXRpb25zIHtcbiAgYWRkTmV0d29ya1JlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPF9OZXR3b3JrVXBzZXJ0UGFyYW1zPiwgQ29uZmlybWF0aW9uUmVzdWx0PG51bGw+XSxcbiAgYWRkVG9rZW5SZXF1ZXN0OiBbQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxBZGRUb2tlblJlcXVlc3RFeHRlcm5hbD4sIENvbmZpcm1hdGlvblJlc3VsdDxib29sZWFuPl0sXG4gIHN3aXRjaE5ldHdvcmtSZXF1ZXN0OiBbQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxTd2l0Y2hOZXR3b3JrUmVxdWVzdD4sIENvbmZpcm1hdGlvblJlc3VsdDxib29sZWFuPl0sXG4gIGV2bVNpZ25hdHVyZVJlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPEV2bVNpZ25hdHVyZVJlcXVlc3Q+LCBDb25maXJtYXRpb25SZXN1bHQ8c3RyaW5nPl0sXG4gIGV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPEV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3Q+LCBDb25maXJtYXRpb25SZXN1bHQ8c3RyaW5nPl1cbiAgZXZtV2F0Y2hUcmFuc2FjdGlvblJlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPEV2bVdhdGNoVHJhbnNhY3Rpb25SZXF1ZXN0PiwgQ29uZmlybWF0aW9uUmVzdWx0PHN0cmluZz5dXG59XG5cbmV4cG9ydCB0eXBlIENvbmZpcm1hdGlvblR5cGUgPSBrZXlvZiBDb25maXJtYXRpb25EZWZpbml0aW9ucztcblxuZXhwb3J0IHR5cGUgQ29uZmlybWF0aW9uc1F1ZXVlID0ge1xuICBbQ1QgaW4gQ29uZmlybWF0aW9uVHlwZV06IFJlY29yZDxzdHJpbmcsIENvbmZpcm1hdGlvbkRlZmluaXRpb25zW0NUXVswXT47XG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDb25maXJtYXRpb25zU3Vic2NyaWJlID0gbnVsbDtcblxuLy8gRGVzaWduIHRvIHVzZSBvbmx5IG9uZSBjb25maXJtYXRpb25cbmV4cG9ydCB0eXBlIFJlcXVlc3RDb25maXJtYXRpb25Db21wbGV0ZSA9IHtcbiAgW0NUIGluIENvbmZpcm1hdGlvblR5cGVdPzogQ29uZmlybWF0aW9uRGVmaW5pdGlvbnNbQ1RdWzFdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljVHhJbmZvIHtcbiAgZmVlOiBzdHJpbmcsXG4gIGJhbGFuY2VFcnJvcjogYm9vbGVhbixcbiAgcmF3RmVlPzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9uZGluZ09wdGlvblBhcmFtcyB7XG4gIGNoYWluOiBzdHJpbmc7XG4gIHR5cGU6IFN0YWtpbmdUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZU1vZGVKc29uIHtcbiAgbmV0d29ya0tleXM6IHN0cmluZ1tdLFxuICB0aGVtZTogVGhlbWVOYW1lcyxcbiAgYXV0b1RyaWdnZXJEb21haW46IHN0cmluZyAvLyBSZWdleCBmb3IgYXV0byB0cmlnZ2VyIHNpbmdsZSBtb2RlXG59XG5cbi8vLyBFdm0gdHJhbnNhY3Rpb25cblxuZXhwb3J0IHR5cGUgTmVzdGVkQXJyYXk8VD4gPSBUIHwgTmVzdGVkQXJyYXk8VD5bXTtcblxuLy8vIEV2bSBDb250cmFjdCBJbnB1dFxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVRyYW5zYWN0aW9uQXJnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogRXZtVHJhbnNhY3Rpb25BcmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZUV2bVRyYW5zYWN0aW9uRGF0YSB7XG4gIG1ldGhvZDogc3RyaW5nO1xuICBtZXRob2ROYW1lOiBzdHJpbmc7XG4gIGFyZ3M6IEV2bVRyYW5zYWN0aW9uQXJnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFBhcnNlRXZtQ29udHJhY3RJbnB1dCB7XG4gIGRhdGE6IHN0cmluZztcbiAgY29udHJhY3Q6IHN0cmluZztcbiAgY2hhaW5JZDogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBFdm1UcmFuc2FjdGlvbkRhdGEgPSBQYXJzZUV2bVRyYW5zYWN0aW9uRGF0YSB8IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVBhcnNlRXZtQ29udHJhY3RJbnB1dCB7XG4gIHJlc3VsdDogRXZtVHJhbnNhY3Rpb25EYXRhO1xufVxuXG4vLy8gTGVkZ2VyXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVkZ2VyTmV0d29yayB7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7IC8vIEdlbmVzaXNIYXNoIGZvciBzdWJzdHJhdGUgYXBwXG4gIG5ldHdvcmtOYW1lOiBzdHJpbmc7IC8vIERpc3BsYXkgaW4gc2VsZWN0b3JcbiAgYWNjb3VudE5hbWU6IHN0cmluZzsgLy8gTmFtZSBmb3IgYWNjb3VudChMZWRnZXIgWCBBY2NvdW50KVxuICBhcHBOYW1lOiBzdHJpbmc7IC8vIE5hbWUgaW4gTGVkZ2VyXG4gIG5ldHdvcms6IHN0cmluZzsgLy8gbmV0d29yayBpcyBwcmVkZWZpbmVkIGluIGxlZGdlciBsaWJcbiAgc2x1Zzogc3RyaW5nOyAvLyBzbHVnIGluIGNoYWluIGxpc3RcbiAgaWNvbjogJ3N1YnN0cmF0ZScgfCAnZXRoZXJldW0nOyAvLyBEZXByZWNhdGVkXG4gIGlzRGV2TW9kZTogYm9vbGVhbjsgLy8gRGV2IG1vZGUgb24gTGVkZ2VyXG4gIGlzRXRoZXJldW06IGJvb2xlYW47IC8vIFVzZSBmb3IgZXZtIGFjY291bnRcbn1cbi8vLyBPbi1yYW1wXG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNha05ldHdvcmsge1xuICBuZXR3b3Jrczogc3RyaW5nW107XG4gIHRva2Vucz86IHN0cmluZ1tdO1xufVxuXG4vLy8gUXIgU2lnblxuXG4vLyBQYXJzZSBTdWJzdHJhdGVcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXR0ZWRNZXRob2Qge1xuICBhcmdzPzogQXJnSW5mb1tdO1xuICBtZXRob2ROYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJnSW5mbyB7XG4gIGFyZ05hbWU6IHN0cmluZztcbiAgYXJnVmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVyYUluZm97XG4gIHBlcmlvZDogbnVtYmVyO1xuICBwaGFzZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUGFyc2VUcmFuc2FjdGlvblN1YnN0cmF0ZSB7XG4gIGVyYTogRXJhSW5mbyB8IHN0cmluZztcbiAgbm9uY2U6IG51bWJlcjtcbiAgbWV0aG9kOiBzdHJpbmcgfCBGb3JtYXR0ZWRNZXRob2RbXTtcbiAgdGlwOiBudW1iZXI7XG4gIHNwZWNWZXJzaW9uOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UGFyc2VUcmFuc2FjdGlvblN1YnN0cmF0ZSB7XG4gIGRhdGE6IHN0cmluZztcbiAgbmV0d29ya0tleTogc3RyaW5nO1xufVxuXG4vLyBQYXJzZSBFdm1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UXJQYXJzZVJMUCB7XG4gIGRhdGE6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVFyUGFyc2VSTFAge1xuICBkYXRhOiBFdm1UcmFuc2FjdGlvbkRhdGE7XG4gIGlucHV0OiBzdHJpbmc7XG4gIG5vbmNlOiBudW1iZXI7XG4gIHRvOiBzdHJpbmc7XG4gIGdhczogbnVtYmVyO1xuICBnYXNQcmljZTogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xufVxuXG4vLyBDaGVjayBsb2NrXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRJc0xvY2tlZCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUFjY291bnRJc0xvY2tlZCB7XG4gIGlzTG9ja2VkOiBib29sZWFuO1xuICByZW1haW5pbmdUaW1lOiBudW1iZXI7XG59XG5cbi8vIFNpZ25cblxuZXhwb3J0IHR5cGUgU2lnbmVyRGF0YVR5cGUgPSAndHJhbnNhY3Rpb24nIHwgJ21lc3NhZ2UnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFFyU2lnblN1YnN0cmF0ZSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0YTogc3RyaW5nO1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VRclNpZ25TdWJzdHJhdGUge1xuICBzaWduYXR1cmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UXJTaWduRXZtIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHR5cGU6ICdtZXNzYWdlJyB8ICd0cmFuc2FjdGlvbidcbiAgY2hhaW5JZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVFyU2lnbkV2bSB7XG4gIHNpZ25hdHVyZTogc3RyaW5nO1xufVxuXG4vLy8gVHJhbnNmZXJcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q2hlY2tUcmFuc2ZlciBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgZnJvbTogc3RyaW5nLFxuICB0bzogc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZyxcbiAgdHJhbnNmZXJBbGw/OiBib29sZWFuXG4gIHRva2VuU2x1Zzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGVUcmFuc2FjdGlvblJlc3BvbnNlIHtcbiAgZXJyb3JzOiBUcmFuc2FjdGlvbkVycm9yW10sXG4gIHdhcm5pbmdzOiBUcmFuc2FjdGlvbldhcm5pbmdbXSxcbiAgdHJhbnNmZXJOYXRpdmVBbW91bnQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFRyYW5zZmVyID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxSZXF1ZXN0Q2hlY2tUcmFuc2Zlcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENoZWNrQ3Jvc3NDaGFpblRyYW5zZmVyIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgb3JpZ2luTmV0d29ya0tleTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbk5ldHdvcmtLZXk6IHN0cmluZyxcbiAgZnJvbTogc3RyaW5nLFxuICB0bzogc3RyaW5nLFxuICB0cmFuc2ZlckFsbD86IGJvb2xlYW4sXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHRva2VuU2x1Zzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDcm9zc0NoYWluVHJhbnNmZXIgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFJlcXVlc3RDaGVja0Nyb3NzQ2hhaW5UcmFuc2Zlcj47XG5cbi8vLyBTdGFrZVxuXG4vLyBTdGFraW5nICYgQm9uZGluZ1xuZXhwb3J0IGludGVyZmFjZSBDaGFpblN0YWtpbmdNZXRhZGF0YSB7XG4gIGNoYWluOiBzdHJpbmc7XG4gIHR5cGU6IFN0YWtpbmdUeXBlO1xuXG4gIC8vIGVzc2VudGlhbFxuICBlcmE6IG51bWJlciwgLy8gYWxzbyByb3VuZCBmb3IgcGFyYWNoYWluc1xuICBtaW5Kb2luTm9taW5hdGlvblBvb2w/OiBzdHJpbmc7IC8vIGZvciByZWxheWNoYWluIHN1cHBvcnRzIG5vbWluYXRpb24gcG9vbFxuICBtaW5TdGFrZTogc3RyaW5nO1xuICBtYXhWYWxpZGF0b3JQZXJOb21pbmF0b3I6IG51bWJlcjtcbiAgbWF4V2l0aGRyYXdhbFJlcXVlc3RQZXJWYWxpZGF0b3I6IG51bWJlcjtcbiAgYWxsb3dDYW5jZWxVbnN0YWtpbmc6IGJvb2xlYW47XG4gIHVuc3Rha2luZ1BlcmlvZDogbnVtYmVyOyAvLyBpbiBob3Vyc1xuXG4gIC8vIHN1cHBsZW1lbnRhbFxuICBleHBlY3RlZFJldHVybj86IG51bWJlcjsgLy8gaW4gJSwgYW5udWFsbHlcbiAgaW5mbGF0aW9uPzogbnVtYmVyOyAvLyBpbiAlLCBhbm51YWxseVxuICBub21pbmF0b3JDb3VudD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb21pbmF0aW9uSW5mbyB7XG4gIGNoYWluOiBzdHJpbmc7XG4gIHZhbGlkYXRvckFkZHJlc3M6IHN0cmluZzsgLy8gY2FuIGJlIGEgbm9taW5hdGlvbiBwb29sIGlkXG4gIHZhbGlkYXRvcklkZW50aXR5Pzogc3RyaW5nO1xuICBhY3RpdmVTdGFrZTogc3RyaW5nO1xuXG4gIGhhc1Vuc3Rha2luZz86IGJvb2xlYW47XG4gIHZhbGlkYXRvck1pblN0YWtlPzogc3RyaW5nO1xuICBzdGF0dXM6IFN0YWtpbmdTdGF0dXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0Tm9taW5hdGlvblBvb2xzQm9uZGVkUG9vbElubmVyIHtcbiAgcG9pbnRzOiBudW1iZXIsXG4gIHN0YXRlOiAnT3BlbicgfCAnRGVzdHJveWluZycgfCAnTG9ja2VkJyxcbiAgbWVtYmVyQ291bnRlcjogbnVtYmVyLFxuICByb2xlczoge1xuICAgIGRlcG9zaXRvcjogc3RyaW5nLFxuICAgIHJvb3Q6IHN0cmluZyxcbiAgICBub21pbmF0b3I6IHN0cmluZyxcbiAgICBib3VuY2VyOiBzdHJpbmdcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vbWluYXRpb25Qb29sSW5mbyBleHRlbmRzIFBpY2s8UGFsbGV0Tm9taW5hdGlvblBvb2xzQm9uZGVkUG9vbElubmVyLCAncm9sZXMnIHwgJ21lbWJlckNvdW50ZXInIHwgJ3N0YXRlJz4ge1xuICBpZDogbnVtYmVyLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5hbWU/OiBzdHJpbmcsXG4gIGJvbmRlZEFtb3VudDogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIFVuc3Rha2luZ1N0YXR1cyB7XG4gIENMQUlNQUJMRSA9ICdDTEFJTUFCTEUnLFxuICBVTkxPQ0tJTkcgPSAnVU5MT0NLSU5HJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Rha2luZ0luZm8ge1xuICBjaGFpbjogc3RyaW5nO1xuICBzdGF0dXM6IFVuc3Rha2luZ1N0YXR1cztcbiAgY2xhaW1hYmxlOiBzdHJpbmc7IC8vIGFtb3VudCB0byBiZSB3aXRoZHJhd25cbiAgd2FpdGluZ1RpbWU6IG51bWJlcjsgLy8gaW4gaG91cnNcbiAgdmFsaWRhdG9yQWRkcmVzcz86IHN0cmluZzsgLy8gbWlnaHQgdW5zdGFrZSBmcm9tIGEgdmFsaWRhdG9yIG9yIG5vdFxufVxuXG5leHBvcnQgZW51bSBTdGFraW5nU3RhdHVzIHtcbiAgRUFSTklOR19SRVdBUkQgPSAnRUFSTklOR19SRVdBUkQnLFxuICBQQVJUSUFMTFlfRUFSTklORyA9ICdQQVJUSUFMTFlfRUFSTklORycsXG4gIE5PVF9FQVJOSU5HID0gJ05PVF9FQVJOSU5HJyxcbiAgV0FJVElORyA9ICdXQUlUSU5HJyxcbiAgTk9UX1NUQUtJTkcgPSAnTk9UX1NUQUtJTkcnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9taW5hdG9yTWV0YWRhdGEge1xuICBjaGFpbjogc3RyaW5nLFxuICB0eXBlOiBTdGFraW5nVHlwZSxcblxuICBzdGF0dXM6IFN0YWtpbmdTdGF0dXMsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgYWN0aXZlU3Rha2U6IHN0cmluZyxcbiAgbm9taW5hdGlvbnM6IE5vbWluYXRpb25JbmZvW10sXG4gIHVuc3Rha2luZ3M6IFVuc3Rha2luZ0luZm9bXSxcbiAgaXNCb25kZWRCZWZvcmU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdG9ySW5mbyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2hhaW46IHN0cmluZztcblxuICB0b3RhbFN0YWtlOiBzdHJpbmc7XG4gIG93blN0YWtlOiBzdHJpbmc7XG4gIG90aGVyU3Rha2U6IHN0cmluZztcblxuICBtaW5Cb25kOiBzdHJpbmc7XG4gIG5vbWluYXRvckNvdW50OiBudW1iZXI7XG4gIGNvbW1pc3Npb246IG51bWJlcjsgLy8gaW4gJVxuICBleHBlY3RlZFJldHVybj86IG51bWJlcjsgLy8gaW4gJSwgYW5udWFsbHlcblxuICBibG9ja2VkOiBib29sZWFuO1xuICBpZGVudGl0eT86IHN0cmluZztcbiAgaXNWZXJpZmllZDogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgaXNDcm93ZGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvbmRpbmdTdWJtaXRQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBjaGFpbjogc3RyaW5nLFxuICB0eXBlOiBTdGFraW5nVHlwZSxcbiAgbm9taW5hdG9yTWV0YWRhdGE/OiBOb21pbmF0b3JNZXRhZGF0YSwgLy8gdW5kZWZpbmVkIGlmIHVzZXIgaGFzIG5vIHN0YWtlXG4gIGFtb3VudDogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIHNlbGVjdGVkVmFsaWRhdG9yczogVmFsaWRhdG9ySW5mb1tdLFxuICBsb2NrUGVyaW9kPzogbnVtYmVyIC8vIGluIG1vbnRoXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RCb25kaW5nU3VibWl0ID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxCb25kaW5nU3VibWl0UGFyYW1zPjtcblxuLy8gVW5Cb25kaW5nXG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5ib25kaW5nU3VibWl0UGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgYW1vdW50OiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YSxcbiAgLy8gZm9yIHNvbWUgY2hhaW5zXG4gIHZhbGlkYXRvckFkZHJlc3M/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFVuYm9uZGluZ1N1Ym1pdCA9IEludGVybmFsUmVxdWVzdFNpZ248VW5ib25kaW5nU3VibWl0UGFyYW1zPjtcblxuLy8gV2l0aGRyYXdTdGFrZVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlV2l0aGRyYXdhbFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YSxcbiAgdW5zdGFraW5nSW5mbzogVW5zdGFraW5nSW5mbyxcbiAgY2hhaW46IHN0cmluZyxcbiAgdmFsaWRhdG9yQWRkcmVzcz86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VXaXRoZHJhd2FsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZVdpdGhkcmF3YWxQYXJhbXM+O1xuXG4vLyBDbGFpbVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlQ2xhaW1SZXdhcmRQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIHN0YWtpbmdUeXBlOiBTdGFraW5nVHlwZSxcbiAgdW5jbGFpbWVkUmV3YXJkPzogc3RyaW5nLFxuICBib25kUmV3YXJkPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VDbGFpbVJld2FyZCA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VDbGFpbVJld2FyZFBhcmFtcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2VDYW5jZWxXaXRoZHJhd2FsUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBjaGFpbjogc3RyaW5nLFxuICBzZWxlY3RlZFVuc3Rha2luZzogVW5zdGFraW5nSW5mb1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VDYW5jZWxXaXRoZHJhd2FsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZUNhbmNlbFdpdGhkcmF3YWxQYXJhbXM+O1xuXG4vLyBDb21wb3VuZFxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlUG9vbGluZ0JvbmRpbmdQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBub21pbmF0b3JNZXRhZGF0YT86IE5vbWluYXRvck1ldGFkYXRhLFxuICBjaGFpbjogc3RyaW5nLFxuICBzZWxlY3RlZFBvb2w6IE5vbWluYXRpb25Qb29sSW5mbyxcbiAgYW1vdW50OiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VQb29saW5nQm9uZGluZyA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VQb29saW5nQm9uZGluZ1BhcmFtcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2VQb29saW5nVW5ib25kaW5nUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgbm9taW5hdG9yTWV0YWRhdGE6IE5vbWluYXRvck1ldGFkYXRhLFxuICBjaGFpbjogc3RyaW5nLFxuICBhbW91bnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VQb29saW5nVW5ib25kaW5nID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZVBvb2xpbmdVbmJvbmRpbmdQYXJhbXM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERlbGVnYXRpb25JdGVtIHtcbiAgb3duZXI6IHN0cmluZyxcbiAgYW1vdW50OiBzdHJpbmcsIC8vIHJhdyBhbW91bnQgc3RyaW5nXG4gIGlkZW50aXR5Pzogc3RyaW5nLFxuICBtaW5Cb25kOiBzdHJpbmcsXG4gIGhhc1NjaGVkdWxlZFJlcXVlc3Q6IGJvb2xlYW5cbiAgaWNvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFrZURlbGVnYXRpb25SZXF1ZXN0IHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBuZXR3b3JrS2V5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGVja0V4aXN0aW5nVHVyaW5nQ29tcG91bmRQYXJhbXMge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNvbGxhdG9yQWRkcmVzczogc3RyaW5nO1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhpc3RpbmdUdXJpbmdDb21wb3VuZFRhc2sge1xuICBleGlzdDogYm9vbGVhbjtcbiAgdGFza0lkOiBzdHJpbmc7XG4gIGFjY291bnRNaW5pbXVtOiBudW1iZXI7XG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR1cmluZ1N0YWtlQ29tcG91bmRSZXNwIHtcbiAgdHhJbmZvOiBCYXNpY1R4SW5mbyxcbiAgb3B0aW1hbEZyZXF1ZW5jeTogc3RyaW5nLFxuICBpbml0VGltZTogbnVtYmVyLFxuICBjb21wb3VuZEZlZTogc3RyaW5nLFxuICByYXdDb21wb3VuZEZlZT86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR1cmluZ1N0YWtlQ29tcG91bmRQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGNvbGxhdG9yQWRkcmVzczogc3RyaW5nLFxuICBuZXR3b3JrS2V5OiBzdHJpbmcsXG4gIGFjY291bnRNaW5pbXVtOiBzdHJpbmcsXG4gIGJvbmRlZEFtb3VudDogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VHVyaW5nU3Rha2VDb21wb3VuZCA9IEludGVybmFsUmVxdWVzdFNpZ248VHVyaW5nU3Rha2VDb21wb3VuZFBhcmFtcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHVyaW5nQ2FuY2VsU3Rha2VDb21wb3VuZFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIHRhc2tJZDogc3RyaW5nO1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmQgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmRQYXJhbXM+O1xuXG4vLy8gQ3JlYXRlIFFSXG5cbi8vIFRyYW5zZmVyXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RUcmFuc2ZlckV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxSZXF1ZXN0Q2hlY2tUcmFuc2Zlcj47XG5cbi8vIFhDTVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q3Jvc3NDaGFpblRyYW5zZmVyRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFJlcXVlc3RDaGVja0Nyb3NzQ2hhaW5UcmFuc2Zlcj47XG5cbi8vIE5GVFxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0TmZ0VHJhbnNmZXJFeHRlcm5hbFN1YnN0cmF0ZSA9IEludGVybmFsUmVxdWVzdFNpZ248U3Vic3RyYXRlTmZ0U3VibWl0VHJhbnNhY3Rpb24+O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0TmZ0VHJhbnNmZXJFeHRlcm5hbEV2bSA9IEludGVybmFsUmVxdWVzdFNpZ248RXZtTmZ0U3VibWl0VHJhbnNhY3Rpb24+O1xuXG4vLyBTdGFrZVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248Qm9uZGluZ1N1Ym1pdFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RVblN0YWtlRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFVuYm9uZGluZ1N1Ym1pdFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RXaXRoZHJhd1N0YWtlRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN0YWtlV2l0aGRyYXdhbFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDbGFpbVJld2FyZEV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZUNsYWltUmV3YXJkUGFyYW1zPjtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENyZWF0ZUNvbXBvdW5kU3Rha2VFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248VHVyaW5nU3Rha2VDb21wb3VuZFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDYW5jZWxDb21wb3VuZFN0YWtlRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmRQYXJhbXM+O1xuXG5leHBvcnQgZW51bSBDaGFpbkVkaXRTdGFuZGFyZCB7XG4gIEVWTSA9ICdFVk0nLFxuICBTVUJTVFJBVEUgPSAnU1VCU1RSQVRFJyxcbiAgVU5LTk9XTiA9ICdVTktOT1dOJyxcbiAgTUlYRUQgPSAnTUlYRUQnIC8vIHRha2VzIHJvb3QgaW4gYSBzdGFuZGFyZCAoU3Vic3RyYXRlLCBFdm0sLi4uKSBidXQgYWxzbyBjb21wYXRpYmxlIHdpdGggb3RoZXIgc3RhbmRhcmRzXG59XG5cbi8vIENoYWluU2VydmljZVxuLy8gZm9yIGN1c3RvbSBuZXR3b3JrXG5leHBvcnQgdHlwZSBDaGFpbkVkaXRJbmZvID0geyAvLyBvbmx5IHN1cHBvcnQgcHVyZSBzdWJzdHJhdGUgb3IgRXZtIG5ldHdvcmtcbiAgc2x1Zzogc3RyaW5nO1xuICBjdXJyZW50UHJvdmlkZXI6IHN0cmluZztcbiAgcHJvdmlkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoYWluVHlwZTogQ2hhaW5FZGl0U3RhbmRhcmQ7XG4gIGJsb2NrRXhwbG9yZXI/OiBzdHJpbmc7XG4gIGNyb3dkbG9hblVybD86IHN0cmluZztcbiAgcHJpY2VJZD86IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhaW5TcGVjSW5mbyB7XG4gIC8vIFN1YnN0cmF0ZVxuICBhZGRyZXNzUHJlZml4OiBudW1iZXIsXG4gIGdlbmVzaXNIYXNoOiBzdHJpbmcsXG4gIHBhcmFJZDogbnVtYmVyIHwgbnVsbCxcblxuICAvLyBFdm1cbiAgZXZtQ2hhaW5JZDogbnVtYmVyIHwgbnVsbCAvLyBudWxsIG1lYW5zIG5vdCBFdm1cblxuICAvLyBDb21tb25cbiAgZXhpc3RlbnRpYWxEZXBvc2l0OiBzdHJpbmcsXG4gIGRlY2ltYWxzOiBudW1iZXJcbn1cblxuLy8vIEtleXJpbmcgc3RhdGVcblxuZXhwb3J0IGludGVyZmFjZSBLZXlyaW5nU3RhdGUge1xuICBpc1JlYWR5OiBib29sZWFuO1xuICBoYXNNYXN0ZXJQYXNzd29yZDogYm9vbGVhbjtcbiAgaXNMb2NrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlWaWV3U3RhdGUge1xuICBpc1VJTG9ja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NCb29rU3RhdGUge1xuICBjb250YWN0czogQWRkcmVzc0pzb25bXTtcbiAgcmVjZW50OiBBZGRyZXNzSnNvbltdO1xufVxuXG4vLyBDaGFuZ2UgbWFzdGVyIHBhc3N3b3JkXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDaGFuZ2VNYXN0ZXJQYXNzd29yZCB7XG4gIG9sZFBhc3N3b3JkPzogc3RyaW5nO1xuICBuZXdQYXNzd29yZDogc3RyaW5nO1xuXG4gIGNyZWF0ZU5ldzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUNoYW5nZU1hc3RlclBhc3N3b3JkIHtcbiAgc3RhdHVzOiBib29sZWFuO1xuICBlcnJvcnM6IHN0cmluZ1tdO1xufVxuXG4vLyBNaWdyYXRlIHBhc3N3b3JkXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdE1pZ3JhdGVQYXNzd29yZCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZU1pZ3JhdGVQYXNzd29yZCB7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JzOiBzdHJpbmdbXTtcbn1cblxuLy8gVW5sb2NrXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFVubG9ja0tleXJpbmcge1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVW5sb2NrS2V5cmluZyB7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JzOiBzdHJpbmdbXTtcbn1cblxuLy8gRXhwb3J0IG1uZW1vbmljXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEtleXJpbmdFeHBvcnRNbmVtb25pYyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUtleXJpbmdFeHBvcnRNbmVtb25pYyB7XG4gIHJlc3VsdDogc3RyaW5nO1xufVxuXG4vLyBSZXNldCB3YWxsZXRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVzZXRXYWxsZXQge1xuICByZXNldEFsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVJlc2V0V2FsbGV0IHtcbiAgc3RhdHVzOiBib29sZWFuO1xuICBlcnJvcnM6IHN0cmluZ1tdO1xufVxuXG4vLy8gU2lnbmluZ1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0U2lnbmluZ0FwcHJvdmVQYXNzd29yZFYyIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NldFNldHRpbmdVcGRhdGVSZXEge1xuICB0b2tlblNsdWc6IHN0cmluZztcbiAgYXNzZXRTZXR0aW5nOiBBc3NldFNldHRpbmc7XG4gIGF1dG9FbmFibGVOYXRpdmVUb2tlbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEdldFRyYW5zYWN0aW9uIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuLy8gTW9iaWxlIHVwZGF0ZVxuZXhwb3J0IHR5cGUgU3Vic2NyaXB0aW9uU2VydmljZVR5cGUgPSAnY2hhaW5SZWdpc3RyeScgfCAnYmFsYW5jZScgfCAnY3Jvd2Rsb2FuJyB8ICdzdGFraW5nJztcbmV4cG9ydCB0eXBlIENyb25TZXJ2aWNlVHlwZSA9ICdwcmljZScgfCAnbmZ0JyB8ICdzdGFraW5nJyB8ICdoaXN0b3J5JyB8ICdyZWNvdmVyQXBpJyB8ICdjaGVja0FwaVN0YXR1cyc7XG5leHBvcnQgdHlwZSBDcm9uVHlwZSA9XG4gICdyZWNvdmVyQXBpTWFwJyB8XG4gICdjaGVja0FwaU1hcFN0YXR1cycgfFxuICAncmVmcmVzaEhpc3RvcnknIHxcbiAgJ3JlZnJlc2hOZnQnIHxcbiAgJ3JlZnJlc2hQcmljZScgfFxuICAncmVmcmVzaFN0YWtlVW5sb2NraW5nSW5mbycgfFxuICAncmVmcmVzaFN0YWtpbmdSZXdhcmQnIHxcbiAgJ3JlZnJlc2hQb29saW5nU3Rha2luZ1Jld2FyZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEluaXRDcm9uQW5kU3Vic2NyaXB0aW9uIHtcbiAgc3Vic2NyaXB0aW9uOiB7XG4gICAgYWN0aXZlU2VydmljZXM6IFN1YnNjcmlwdGlvblNlcnZpY2VUeXBlW11cbiAgfSxcbiAgY3Jvbjoge1xuICAgIGludGVydmFsTWFwOiBQYXJ0aWFsPFJlY29yZDxDcm9uVHlwZSwgbnVtYmVyPj4sXG4gICAgYWN0aXZlU2VydmljZXM6IENyb25TZXJ2aWNlVHlwZVtdXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q3JvbkFuZFN1YnNjcmlwdGlvbkFjdGlvbiB7XG4gIHN1YnNjcmlwdGlvblNlcnZpY2VzOiBTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZVtdO1xuICBjcm9uU2VydmljZXM6IENyb25TZXJ2aWNlVHlwZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZUNyb25BbmRTdWJzY3JpcHRpb25NYXAge1xuICBzdWJzY3JpcHRpb246IFJlY29yZDxTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZSwgYm9vbGVhbj47XG4gIGNyb246IFJlY29yZDxDcm9uU2VydmljZVR5cGUsIGJvb2xlYW4+O1xufVxuXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25UeXBlIHtcbiAgSU5GTyA9ICdpbmZvJyxcbiAgU1VDQ0VTUyA9ICdzdWNjZXNzJyxcbiAgV0FSTklORyA9ICd3YXJuaW5nJyxcbiAgRVJST1IgPSAnZXJyb3InLFxufVxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBOb3RpZmljYXRpb25UeXBlO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG5vdGlmeVZpYUJyb3dzZXI/OiBib29sZWFuO1xuICBhY3Rpb24/OiB7XG4gICAgdXJsPzogc3RyaW5nOyAvLyBBZGQgbW9yZSBhY3Rpb24gaW4gdGhlIGZ1dHVyZVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvblBhcmFtcyA9IE9taXQ8Tm90aWZpY2F0aW9uLCAnaWQnPjtcblxuZXhwb3J0IGludGVyZmFjZSBDcm9uUmVsb2FkUmVxdWVzdCB7XG4gIGRhdGE6ICduZnQnIHwgJ3N0YWtpbmcnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxsTG9nb01hcCB7XG4gIGNoYWluTG9nb01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICBhc3NldExvZ29NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuLy8gUGhpc2hpbmcgZGV0ZWN0XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFzc1BoaXNoaW5nIHtcbiAgcGFzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UGFzc1BoaXNoaW5nUGFnZSB7XG4gIHVybDogc3RyaW5nO1xufVxuXG4vLyBQc3AgdG9rZW5cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWRkUHNwVG9rZW4ge1xuICBnZW5lc2lzSGFzaDogc3RyaW5nO1xuICB0b2tlbkluZm86IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIHN5bWJvbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZWNpbWFscz86IG51bWJlcjtcbiAgICBsb2dvPzogc3RyaW5nO1xuICB9O1xufVxuXG4vLy8gV2FsbGV0Q29ubmVjdFxuXG4vLyBDb25uZWN0XG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDb25uZWN0V2FsbGV0Q29ubmVjdCB7XG4gIHVyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZWplY3RDb25uZWN0V2FsbGV0U2Vzc2lvbiB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFwcHJvdmVDb25uZWN0V2FsbGV0U2Vzc2lvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIGFjY291bnRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVjb25uZWN0Q29ubmVjdFdhbGxldFNlc3Npb24ge1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3REaXNjb25uZWN0V2FsbGV0Q29ubmVjdFNlc3Npb24ge1xuICB0b3BpYzogc3RyaW5nXG59XG5cbi8vIE5vdCBzdXBwb3J0XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlamVjdFdhbGxldENvbm5lY3ROb3RTdXBwb3J0IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXBwcm92ZVdhbGxldENvbm5lY3ROb3RTdXBwb3J0IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuLy8vIE1hbnRhXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFudGFQYXlDb25maWcge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHprQWRkcmVzczogc3RyaW5nO1xuICBlbmFibGVkOiBib29sZWFuO1xuICBjaGFpbjogc3RyaW5nO1xuICBpc0luaXRpYWxTeW5jOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hbnRhQXV0aG9yaXphdGlvbkNvbnRleHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNoYWluOiBzdHJpbmc7XG4gIGRhdGE6IHVua25vd247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFudGFQYXlTeW5jU3RhdGUge1xuICBpc1N5bmNpbmc6IGJvb2xlYW4sXG4gIHByb2dyZXNzOiBudW1iZXIsXG4gIG5lZWRNYW51YWxTeW5jPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hbnRhUGF5RW5hYmxlUGFyYW1zIHtcbiAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIE1hbnRhUGF5RW5hYmxlTWVzc2FnZSB7XG4gIFdST05HX1BBU1NXT1JEID0gJ1dST05HX1BBU1NXT1JEJyxcbiAgQ0hBSU5fRElTQ09OTkVDVEVEID0gJ0NIQUlOX0RJU0NPTk5FQ1RFRCcsXG4gIFVOS05PV05fRVJST1IgPSAnVU5LTk9XTl9FUlJPUicsXG4gIFNVQ0NFU1MgPSAnU1VDQ0VTUydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYW50YVBheUVuYWJsZVJlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbWVzc2FnZTogTWFudGFQYXlFbmFibGVNZXNzYWdlXG59XG5cbi8vLyBNZXRhZGF0YVxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RmluZFJhd01ldGFkYXRhIHtcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUZpbmRSYXdNZXRhZGF0YSB7XG4gIHJhd01ldGFkYXRhOiBzdHJpbmc7XG4gIHNwZWNWZXJzaW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb2x2ZURvbWFpblJlcXVlc3Qge1xuICBjaGFpbjogc3RyaW5nLFxuICBkb21haW46IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVBZGRyZXNzVG9Eb21haW5SZXF1ZXN0IHtcbiAgY2hhaW46IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nXG59XG5cbi8vIFVzZSBzdHJpbmdpZnkgdG8gY29tbXVuaWNhdGUsIHB1cmUgYm9vbGVhbiB2YWx1ZSB3aWxsIGVycm9yIHdpdGggY2FzZSAnZmFsc2UnIHZhbHVlXG5leHBvcnQgaW50ZXJmYWNlIEtvbmlSZXF1ZXN0U2lnbmF0dXJlcyB7XG4gIC8vIEJvbmRpbmcgZnVuY3Rpb25zXG4gICdwcmkoc3Rha2luZy5zdWJtaXRUdXJpbmdDYW5jZWxDb21wb3VuZCknOiBbUmVxdWVzdFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoc3Rha2luZy5zdWJtaXRUdXJpbmdDb21wb3VuZCknOiBbUmVxdWVzdFR1cmluZ1N0YWtlQ29tcG91bmQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoc3Rha2luZy5zdWJtaXRDbGFpbVJld2FyZCknOiBbUmVxdWVzdFN0YWtlQ2xhaW1SZXdhcmQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoc3Rha2luZy5zdWJtaXRDYW5jZWxXaXRoZHJhd2FsKSc6IFtSZXF1ZXN0U3Rha2VDYW5jZWxXaXRoZHJhd2FsLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKHVuYm9uZGluZy5zdWJtaXRXaXRoZHJhd2FsKSc6IFtSZXF1ZXN0U3Rha2VXaXRoZHJhd2FsLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKHVuYm9uZGluZy5zdWJtaXRUcmFuc2FjdGlvbiknOiBbUmVxdWVzdFVuYm9uZGluZ1N1Ym1pdCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShib25kaW5nLnN1Ym1pdEJvbmRpbmdUcmFuc2FjdGlvbiknOiBbUmVxdWVzdEJvbmRpbmdTdWJtaXQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoYm9uZGluZy5zdWJzY3JpYmVDaGFpblN0YWtpbmdNZXRhZGF0YSknOiBbbnVsbCwgQ2hhaW5TdGFraW5nTWV0YWRhdGFbXSwgQ2hhaW5TdGFraW5nTWV0YWRhdGFbXV07XG4gICdwcmkoYm9uZGluZy5zdWJzY3JpYmVOb21pbmF0b3JNZXRhZGF0YSknOiBbbnVsbCwgTm9taW5hdG9yTWV0YWRhdGFbXSwgTm9taW5hdG9yTWV0YWRhdGFbXV07XG4gICdwcmkoYm9uZGluZy5nZXRCb25kaW5nT3B0aW9ucyknOiBbQm9uZGluZ09wdGlvblBhcmFtcywgVmFsaWRhdG9ySW5mb1tdXTtcbiAgJ3ByaShib25kaW5nLmdldE5vbWluYXRpb25Qb29sT3B0aW9ucyknOiBbc3RyaW5nLCBOb21pbmF0aW9uUG9vbEluZm9bXV07XG4gICdwcmkoYm9uZGluZy5ub21pbmF0aW9uUG9vbC5zdWJtaXRCb25kaW5nKSc6IFtSZXF1ZXN0U3Rha2VQb29saW5nQm9uZGluZywgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShib25kaW5nLm5vbWluYXRpb25Qb29sLnN1Ym1pdFVuYm9uZGluZyknOiBbUmVxdWVzdFN0YWtlUG9vbGluZ1VuYm9uZGluZywgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcblxuICAvLyBDaGFpbnMsIGFzc2V0cyBmdW5jdGlvbnNcbiAgJ3ByaShjaGFpblNlcnZpY2Uuc3Vic2NyaWJlQ2hhaW5JbmZvTWFwKSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBSZWNvcmQ8c3RyaW5nLCBhbnk+XTtcbiAgJ3ByaShjaGFpblNlcnZpY2Uuc3Vic2NyaWJlQ2hhaW5TdGF0ZU1hcCknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgYW55PiwgUmVjb3JkPHN0cmluZywgYW55Pl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnN1YnNjcmliZUFzc2V0UmVnaXN0cnkpJzogW251bGwsIFJlY29yZDxzdHJpbmcsIGFueT4sIFJlY29yZDxzdHJpbmcsIGFueT5dO1xuICAncHJpKGNoYWluU2VydmljZS5zdWJzY3JpYmVNdWx0aUNoYWluQXNzZXRNYXApJzogW251bGwsIFJlY29yZDxzdHJpbmcsIF9NdWx0aUNoYWluQXNzZXQ+LCBSZWNvcmQ8c3RyaW5nLCBfTXVsdGlDaGFpbkFzc2V0Pl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnN1YnNjcmliZVhjbVJlZk1hcCknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgX0Fzc2V0UmVmPiwgUmVjb3JkPHN0cmluZywgX0Fzc2V0UmVmPl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnVwc2VydENoYWluKSc6IFtfTmV0d29ya1Vwc2VydFBhcmFtcywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmVuYWJsZUNoYWlucyknOiBbRW5hYmxlTXVsdGlDaGFpblBhcmFtcywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmVuYWJsZUNoYWluKSc6IFtFbmFibGVDaGFpblBhcmFtcywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnJlY29ubmVjdENoYWluKSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5kaXNhYmxlQ2hhaW5zKSc6IFtzdHJpbmdbXSwgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmRpc2FibGVDaGFpbiknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UucmVtb3ZlQ2hhaW4pJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmRlbGV0ZUN1c3RvbUFzc2V0KSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS51cHNlcnRDdXN0b21Bc3NldCknOiBbUmVjb3JkPHN0cmluZywgYW55PiwgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnZhbGlkYXRlQ3VzdG9tQXNzZXQpJzogW19WYWxpZGF0ZUN1c3RvbUFzc2V0UmVxdWVzdCwgX1ZhbGlkYXRlQ3VzdG9tQXNzZXRSZXNwb25zZV07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnJlc2V0RGVmYXVsdENoYWlucyknOiBbbnVsbCwgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmdldFN1cHBvcnRlZENvbnRyYWN0VHlwZXMpJzogW251bGwsIHN0cmluZ1tdXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UudmFsaWRhdGVDdXN0b21DaGFpbiknOiBbVmFsaWRhdGVOZXR3b3JrUmVxdWVzdCwgVmFsaWRhdGVOZXR3b3JrUmVzcG9uc2VdO1xuICAncHJpKGNoYWluU2VydmljZS5yZWNvdmVyU3Vic3RyYXRlQXBpKSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5kaXNhYmxlQWxsQ2hhaW5zKSc6IFtudWxsLCBib29sZWFuXTtcbiAgJ3ByaShhc3NldFNldHRpbmcuZ2V0U3Vic2NyaXB0aW9uKSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBBc3NldFNldHRpbmc+LCBSZWNvcmQ8c3RyaW5nLCBBc3NldFNldHRpbmc+XVxuICAncHJpKGFzc2V0U2V0dGluZy51cGRhdGUpJzogW0Fzc2V0U2V0dGluZ1VwZGF0ZVJlcSwgYm9vbGVhbl07XG5cbiAgLy8gTkZUIGZ1bmN0aW9uc1xuICAncHJpKGV2bU5mdC5zdWJtaXRUcmFuc2FjdGlvbiknOiBbTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0LCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGV2bU5mdC5nZXRUcmFuc2FjdGlvbiknOiBbTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0LCBFdm1OZnRUcmFuc2FjdGlvbl07XG4gICdwcmkoc3Vic3RyYXRlTmZ0LnN1Ym1pdFRyYW5zYWN0aW9uKSc6IFtOZnRUcmFuc2FjdGlvblJlcXVlc3QsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoc3Vic3RyYXRlTmZ0LmdldFRyYW5zYWN0aW9uKSc6IFtOZnRUcmFuc2FjdGlvblJlcXVlc3QsIFN1YnN0cmF0ZU5mdFRyYW5zYWN0aW9uXTtcbiAgJ3ByaShuZnQuZ2V0TmZ0KSc6IFtudWxsLCBOZnRKc29uXTtcbiAgJ3ByaShuZnQuZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlTmZ0LCBOZnRKc29uLCBOZnRKc29uXTtcbiAgJ3ByaShuZnRDb2xsZWN0aW9uLmdldE5mdENvbGxlY3Rpb24pJzogW251bGwsIE5mdENvbGxlY3Rpb25Kc29uXTtcbiAgJ3ByaShuZnRDb2xsZWN0aW9uLmdldFN1YnNjcmlwdGlvbiknOiBbbnVsbCwgTmZ0Q29sbGVjdGlvbltdLCBOZnRDb2xsZWN0aW9uW11dO1xuXG4gIC8vIFN0YWtpbmcgZnVuY3Rpb25zXG4gICdwcmkoc3Rha2luZy5nZXRTdGFraW5nKSc6IFtudWxsLCBTdGFraW5nSnNvbl07XG4gICdwcmkoc3Rha2luZy5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVTdGFraW5nLCBTdGFraW5nSnNvbiwgU3Rha2luZ0pzb25dO1xuICAncHJpKHN0YWtpbmdSZXdhcmQuZ2V0U3Rha2luZ1Jld2FyZCknOiBbbnVsbCwgU3Rha2luZ1Jld2FyZEpzb25dO1xuICAncHJpKHN0YWtpbmdSZXdhcmQuZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlU3Rha2luZ1Jld2FyZCwgU3Rha2luZ1Jld2FyZEpzb24sIFN0YWtpbmdSZXdhcmRKc29uXTtcblxuICAvLyBQcmljZSwgYmFsYW5jZSwgY3Jvd2Rsb2FuIGZ1bmN0aW9uc1xuICAncHJpKHByaWNlLmdldFByaWNlKSc6IFtSZXF1ZXN0UHJpY2UsIFByaWNlSnNvbl07XG4gICdwcmkocHJpY2UuZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlUHJpY2UsIFByaWNlSnNvbiwgUHJpY2VKc29uXTtcbiAgJ3ByaShiYWxhbmNlLmdldEJhbGFuY2UpJzogW1JlcXVlc3RCYWxhbmNlLCBCYWxhbmNlSnNvbl07XG4gICdwcmkoYmFsYW5jZS5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVCYWxhbmNlLCBCYWxhbmNlSnNvbiwgQmFsYW5jZUpzb25dO1xuICAncHJpKGNyb3dkbG9hbi5nZXRDcm93ZGxvYW4pJzogW1JlcXVlc3RDcm93ZGxvYW4sIENyb3dkbG9hbkpzb25dO1xuICAncHJpKGNyb3dkbG9hbi5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVDcm93ZGxvYW4sIENyb3dkbG9hbkpzb24sIENyb3dkbG9hbkpzb25dO1xuXG4gIC8vIFBoaXNoaW5nIHBhZ2VcbiAgJ3ByaShwaGlzaGluZy5wYXNzKSc6IFtSZXF1ZXN0UGFzc1BoaXNoaW5nUGFnZSwgYm9vbGVhbl07XG5cbiAgLy8gTWFudGEgcGF5XG4gICdwcmkobWFudGFQYXkuZW5hYmxlKSc6IFtNYW50YVBheUVuYWJsZVBhcmFtcywgTWFudGFQYXlFbmFibGVSZXNwb25zZV07XG4gICdwcmkobWFudGFQYXkuZGlzYWJsZSknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShtYW50YVBheS5nZXRaa0JhbGFuY2UpJzogW251bGwsIG51bGxdO1xuICAncHJpKG1hbnRhUGF5LnN1YnNjcmliZUNvbmZpZyknOiBbbnVsbCwgTWFudGFQYXlDb25maWdbXSwgTWFudGFQYXlDb25maWdbXV07XG4gICdwcmkobWFudGFQYXkuc3Vic2NyaWJlU3luY2luZ1N0YXRlKSc6IFtudWxsLCBNYW50YVBheVN5bmNTdGF0ZSwgTWFudGFQYXlTeW5jU3RhdGVdO1xuICAncHJpKG1hbnRhUGF5LmluaXRTeW5jTWFudGFQYXkpJzogW3N0cmluZywgbnVsbF07XG5cbiAgLy8gQXV0aFxuICAncHJpKGF1dGhvcml6ZS5saXN0VjIpJzogW251bGwsIFJlc3BvbnNlQXV0aG9yaXplTGlzdF07XG4gICdwcmkoYXV0aG9yaXplLnJlcXVlc3RzVjIpJzogW1JlcXVlc3RBdXRob3JpemVTdWJzY3JpYmUsIEF1dGhvcml6ZVJlcXVlc3RbXSwgQXV0aG9yaXplUmVxdWVzdFtdXTtcbiAgJ3ByaShhdXRob3JpemUuYXBwcm92ZVYyKSc6IFtSZXF1ZXN0QXV0aG9yaXplQXBwcm92ZVYyLCBib29sZWFuXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZUFsbCknOiBbUmVxdWVzdEF1dGhvcml6YXRpb25BbGwsIGJvb2xlYW4sIEF1dGhVcmxzXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZSknOiBbUmVxdWVzdEF1dGhvcml6YXRpb24sIGJvb2xlYW4sIEF1dGhVcmxzXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZVBlckFjY291bnQpJzogW1JlcXVlc3RBdXRob3JpemF0aW9uUGVyQWNjb3VudCwgYm9vbGVhbiwgQXV0aFVybHNdO1xuICAncHJpKGF1dGhvcml6ZS5jaGFuZ2VTaXRlUGVyU2l0ZSknOiBbUmVxdWVzdEF1dGhvcml6YXRpb25QZXJTaXRlLCBib29sZWFuXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZUJsb2NrKSc6IFtSZXF1ZXN0QXV0aG9yaXphdGlvbkJsb2NrLCBib29sZWFuXTtcbiAgJ3ByaShhdXRob3JpemUuZm9yZ2V0U2l0ZSknOiBbUmVxdWVzdEZvcmdldFNpdGUsIGJvb2xlYW4sIEF1dGhVcmxzXTtcbiAgJ3ByaShhdXRob3JpemUuZm9yZ2V0QWxsU2l0ZSknOiBbbnVsbCwgYm9vbGVhbiwgQXV0aFVybHNdO1xuICAncHJpKGF1dGhvcml6ZS5yZWplY3RWMiknOiBbUmVxdWVzdEF1dGhvcml6ZVJlamVjdCwgYm9vbGVhbl07XG4gICdwcmkoYXV0aG9yaXplLmNhbmNlbFYyKSc6IFtSZXF1ZXN0QXV0aG9yaXplQ2FuY2VsLCBib29sZWFuXTtcblxuICAvKiBBY2NvdW50IG1hbmFnZW1lbnQgKi9cblxuICAvLyBWYWxpZGF0ZVxuICAncHJpKHNlZWQudmFsaWRhdGVWMiknOiBbUmVxdWVzdFNlZWRWYWxpZGF0ZVYyLCBSZXNwb25zZVNlZWRWYWxpZGF0ZVYyXTtcbiAgJ3ByaShwcml2YXRlS2V5LnZhbGlkYXRlVjIpJzogW1JlcXVlc3RTZWVkVmFsaWRhdGVWMiwgUmVzcG9uc2VQcml2YXRlS2V5VmFsaWRhdGVWMl07XG4gICdwcmkoYWNjb3VudHMuY2hlY2tQdWJsaWNBbmRTZWNyZXRLZXkpJzogW1JlcXVlc3RDaGVja1B1YmxpY0FuZFNlY3JldEtleSwgUmVzcG9uc2VDaGVja1B1YmxpY0FuZFNlY3JldEtleV07XG5cbiAgLy8gQ3JlYXRlIGFjY291bnRcbiAgJ3ByaShzZWVkLmNyZWF0ZVYyKSc6IFtSZXF1ZXN0U2VlZENyZWF0ZVYyLCBSZXNwb25zZVNlZWRDcmVhdGVWMl07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLnN1cmlWMiknOiBbUmVxdWVzdEFjY291bnRDcmVhdGVTdXJpVjIsIFJlc3BvbnNlQWNjb3VudENyZWF0ZVN1cmlWMl07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLmV4dGVybmFsVjIpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlRXh0ZXJuYWxWMiwgQWNjb3VudEV4dGVybmFsRXJyb3JbXV07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLmhhcmR3YXJlVjIpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlSGFyZHdhcmVWMiwgYm9vbGVhbl07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLmhhcmR3YXJlTXVsdGlwbGUpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlSGFyZHdhcmVNdWx0aXBsZSwgYm9vbGVhbl07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLndpdGhTZWNyZXQpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlV2l0aFNlY3JldEtleSwgUmVzcG9uc2VBY2NvdW50Q3JlYXRlV2l0aFNlY3JldEtleV07XG5cbiAgLy8gSW5qZWN0IGFjY291bnRcbiAgJ3ByaShhY2NvdW50cy5pbmplY3QuYWRkKSc6IFtSZXF1ZXN0QWRkSW5qZWN0ZWRBY2NvdW50cywgYm9vbGVhbl07XG4gICdwcmkoYWNjb3VudHMuaW5qZWN0LnJlbW92ZSknOiBbUmVxdWVzdFJlbW92ZUluamVjdGVkQWNjb3VudHMsIGJvb2xlYW5dO1xuXG4gIC8vIERlcml2ZVxuICAncHJpKGRlcml2YXRpb24uY3JlYXRlVjIpJzogW1JlcXVlc3REZXJpdmVDcmVhdGVWMiwgYm9vbGVhbl07IC8vIFN1YnN0cmF0ZVxuXG4gIC8vIFJlc3RvcmUgYnkganNvblxuICAncHJpKGpzb24ucmVzdG9yZVYyKSc6IFtSZXF1ZXN0SnNvblJlc3RvcmVWMiwgdm9pZF07XG4gICdwcmkoanNvbi5iYXRjaFJlc3RvcmVWMiknOiBbUmVxdWVzdEJhdGNoUmVzdG9yZVYyLCB2b2lkXTtcblxuICAvLyBFeHBvcnQgYWNjb3VudFxuICAncHJpKGFjY291bnRzLmV4cG9ydFByaXZhdGVLZXkpJzogW1JlcXVlc3RBY2NvdW50RXhwb3J0UHJpdmF0ZUtleSwgUmVzcG9uc2VBY2NvdW50RXhwb3J0UHJpdmF0ZUtleV07XG5cbiAgLy8gQ3VycmVudCBhY2NvdW50XG4gICdwcmkoYWNjb3VudHMuc3Vic2NyaWJlV2l0aEN1cnJlbnRBZGRyZXNzKSc6IFtSZXF1ZXN0QWNjb3VudFN1YnNjcmliZSwgQWNjb3VudHNXaXRoQ3VycmVudEFkZHJlc3MsIEFjY291bnRzV2l0aEN1cnJlbnRBZGRyZXNzXTtcbiAgJ3ByaShhY2NvdW50cy51cGRhdGVDdXJyZW50QWRkcmVzcyknOiBbc3RyaW5nLCBib29sZWFuXTsgLy8gb2xkXG4gICdwcmkoY3VycmVudEFjY291bnQuc2F2ZUFkZHJlc3MpJzogW1JlcXVlc3RDdXJyZW50QWNjb3VudEFkZHJlc3MsIEN1cnJlbnRBY2NvdW50SW5mb107XG4gICdwcmkoYWNjb3VudHMuZ2V0Lm1ldGEpJzogW1JlcXVlc3RBY2NvdW50TWV0YSwgUmVzcG9uc2VBY2NvdW50TWV0YV07XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gICdwcmkoYWNjb3VudHMuc2F2ZVJlY2VudCknOiBbUmVxdWVzdFNhdmVSZWNlbnRBY2NvdW50LCBLZXlyaW5nQWRkcmVzc107XG4gICdwcmkoYWNjb3VudHMuc3Vic2NyaWJlQWRkcmVzc2VzKSc6IFtudWxsLCBBZGRyZXNzQm9va0luZm8sIEFkZHJlc3NCb29rSW5mb107XG4gICdwcmkoYWNjb3VudHMuZWRpdENvbnRhY3QpJzogW1JlcXVlc3RFZGl0Q29udGFjdEFjY291bnQsIGJvb2xlYW5dO1xuICAncHJpKGFjY291bnRzLmRlbGV0ZUNvbnRhY3QpJzogW1JlcXVlc3REZWxldGVDb250YWN0QWNjb3VudCwgYm9vbGVhbl07XG5cbiAgLy8gRG9tYWluIG5hbWVcbiAgJ3ByaShhY2NvdW50cy5yZXNvbHZlRG9tYWluVG9BZGRyZXNzKSc6IFtSZXNvbHZlRG9tYWluUmVxdWVzdCwgc3RyaW5nIHwgdW5kZWZpbmVkXTtcbiAgJ3ByaShhY2NvdW50cy5yZXNvbHZlQWRkcmVzc1RvRG9tYWluKSc6IFtSZXNvbHZlQWRkcmVzc1RvRG9tYWluUmVxdWVzdCwgc3RyaW5nIHwgdW5kZWZpbmVkXTtcblxuICAvLyBGb3IgaW5wdXQgVUlcbiAgJ3ByaShhY2NvdW50cy5zdWJzY3JpYmVBY2NvdW50c0lucHV0QWRkcmVzcyknOiBbUmVxdWVzdEFjY291bnRTdWJzY3JpYmUsIHN0cmluZywgT3B0aW9uSW5wdXRBZGRyZXNzXTtcblxuICAvKiBBY2NvdW50IG1hbmFnZW1lbnQgKi9cblxuICAvLyBTZXR0aW5nc1xuICAncHJpKHNldHRpbmdzLmNoYW5nZUJhbGFuY2VzVmlzaWJpbGl0eSknOiBbbnVsbCwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc3Vic2NyaWJlKSc6IFtudWxsLCBVaVNldHRpbmdzLCBVaVNldHRpbmdzXTtcbiAgJ3ByaShzZXR0aW5ncy5nZXRMb2dvTWFwcyknOiBbbnVsbCwgQWxsTG9nb01hcF07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUFjY291bnRBbGxMb2dvKSc6IFtzdHJpbmcsIGJvb2xlYW4sIFVpU2V0dGluZ3NdO1xuICAncHJpKHNldHRpbmdzLnNhdmVUaGVtZSknOiBbVGhlbWVOYW1lcywgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUJyb3dzZXJDb25maXJtYXRpb25UeXBlKSc6IFtCcm93c2VyQ29uZmlybWF0aW9uVHlwZSwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUNhbWVyYSknOiBbUmVxdWVzdENhbWVyYVNldHRpbmdzLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlQXV0b0xvY2tUaW1lKSc6IFtSZXF1ZXN0Q2hhbmdlVGltZUF1dG9Mb2NrLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlVW5sb2NrVHlwZSknOiBbUmVxdWVzdFVubG9ja1R5cGUsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVFbmFibGVDaGFpblBhdHJvbCknOiBbUmVxdWVzdENoYW5nZUVuYWJsZUNoYWluUGF0cm9sLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlTGFuZ3VhZ2UpJzogW1JlcXVlc3RDaGFuZ2VMYW5ndWFnZSwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZVNob3daZXJvQmFsYW5jZSknOiBbUmVxdWVzdENoYW5nZVNob3daZXJvQmFsYW5jZSwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZVNob3dCYWxhbmNlKSc6IFtSZXF1ZXN0Q2hhbmdlU2hvd0JhbGFuY2UsIGJvb2xlYW5dO1xuXG4gIC8vIFN1YnNjcmlwdGlvblxuICAncHJpKHRyYW5zYWN0aW9uLmhpc3RvcnkuZ2V0U3Vic2NyaXB0aW9uKSc6IFtudWxsLCBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtW10sIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW1bXV07XG4gIC8vICdwcmkodHJhbnNhY3Rpb24uaGlzdG9yeS5hZGQpJzogW1JlcXVlc3RUcmFuc2FjdGlvbkhpc3RvcnlBZGQsIGJvb2xlYW4sIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW1bXV07XG4gICdwcmkodHJhbnNmZXIuY2hlY2tSZWZlcmVuY2VDb3VudCknOiBbUmVxdWVzdFRyYW5zZmVyQ2hlY2tSZWZlcmVuY2VDb3VudCwgYm9vbGVhbl07XG4gICdwcmkodHJhbnNmZXIuY2hlY2tTdXBwb3J0aW5nKSc6IFtSZXF1ZXN0VHJhbnNmZXJDaGVja1N1cHBvcnRpbmcsIFN1cHBvcnRUcmFuc2ZlclJlc3BvbnNlXTtcbiAgJ3ByaSh0cmFuc2Zlci5nZXRFeGlzdGVudGlhbERlcG9zaXQpJzogW1JlcXVlc3RUcmFuc2ZlckV4aXN0ZW50aWFsRGVwb3NpdCwgc3RyaW5nXTtcbiAgJ3ByaSh0cmFuc2Zlci5nZXRNYXhUcmFuc2ZlcmFibGUpJzogW1JlcXVlc3RNYXhUcmFuc2ZlcmFibGUsIEFtb3VudERhdGFdO1xuICAncHJpKHN1YnNjcmlwdGlvbi5jYW5jZWwpJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkoZnJlZUJhbGFuY2UuZ2V0KSc6IFtSZXF1ZXN0RnJlZUJhbGFuY2UsIEFtb3VudERhdGFdO1xuICAncHJpKGZyZWVCYWxhbmNlLnN1YnNjcmliZSknOiBbUmVxdWVzdEZyZWVCYWxhbmNlLCBBbW91bnREYXRhLCBBbW91bnREYXRhXTtcblxuICAvLyBUcmFuc2ZlclxuICAncHJpKGFjY291bnRzLmNoZWNrVHJhbnNmZXIpJzogW1JlcXVlc3RDaGVja1RyYW5zZmVyLCBWYWxpZGF0ZVRyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGFjY291bnRzLnRyYW5zZmVyKSc6IFtSZXF1ZXN0VHJhbnNmZXIsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG5cbiAgJ3ByaShhY2NvdW50cy5jaGVja0Nyb3NzQ2hhaW5UcmFuc2ZlciknOiBbUmVxdWVzdENoZWNrQ3Jvc3NDaGFpblRyYW5zZmVyLCBWYWxpZGF0ZVRyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGFjY291bnRzLmNyb3NzQ2hhaW5UcmFuc2ZlciknOiBbUmVxdWVzdENyb3NzQ2hhaW5UcmFuc2ZlciwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcblxuICAvLyBDb25maXJtYXRpb24gUXVldWVzXG4gICdwcmkoY29uZmlybWF0aW9ucy5zdWJzY3JpYmUpJzogW1JlcXVlc3RDb25maXJtYXRpb25zU3Vic2NyaWJlLCBDb25maXJtYXRpb25zUXVldWUsIENvbmZpcm1hdGlvbnNRdWV1ZV07XG4gICdwcmkoY29uZmlybWF0aW9ucy5jb21wbGV0ZSknOiBbUmVxdWVzdENvbmZpcm1hdGlvbkNvbXBsZXRlLCBib29sZWFuXTtcblxuICAncHViKHV0aWxzLmdldFJhbmRvbSknOiBbUmFuZG9tVGVzdFJlcXVlc3QsIG51bWJlcl07XG4gICdwdWIoYWNjb3VudHMubGlzdFYyKSc6IFtSZXF1ZXN0QWNjb3VudExpc3QsIEluamVjdGVkQWNjb3VudFtdXTtcbiAgJ3B1YihhY2NvdW50cy5zdWJzY3JpYmVWMiknOiBbUmVxdWVzdEFjY291bnRTdWJzY3JpYmUsIHN0cmluZywgSW5qZWN0ZWRBY2NvdW50W11dO1xuICAncHViKGFjY291bnRzLnVuc3Vic2NyaWJlKSc6IFtSZXF1ZXN0QWNjb3VudFVuc3Vic2NyaWJlLCBib29sZWFuXTtcblxuICAvLyBTaWduIFFSXG4gICdwcmkoYWNjb3VudC5pc0xvY2tlZCknOiBbUmVxdWVzdEFjY291bnRJc0xvY2tlZCwgUmVzcG9uc2VBY2NvdW50SXNMb2NrZWRdO1xuICAncHJpKHFyLnRyYW5zYWN0aW9uLnBhcnNlLnN1YnN0cmF0ZSknOiBbUmVxdWVzdFBhcnNlVHJhbnNhY3Rpb25TdWJzdHJhdGUsIFJlc3BvbnNlUGFyc2VUcmFuc2FjdGlvblN1YnN0cmF0ZV07XG4gICdwcmkocXIudHJhbnNhY3Rpb24ucGFyc2UuZXZtKSc6IFtSZXF1ZXN0UXJQYXJzZVJMUCwgUmVzcG9uc2VRclBhcnNlUkxQXTtcbiAgJ3ByaShxci5zaWduLnN1YnN0cmF0ZSknOiBbUmVxdWVzdFFyU2lnblN1YnN0cmF0ZSwgUmVzcG9uc2VRclNpZ25TdWJzdHJhdGVdO1xuICAncHJpKHFyLnNpZ24uZXZtKSc6IFtSZXF1ZXN0UXJTaWduRXZtLCBSZXNwb25zZVFyU2lnbkV2bV07XG5cbiAgLy8gRXh0ZXJuYWwgYWNjb3VudCByZXF1ZXN0XG4gICdwcmkoYWNjb3VudC5leHRlcm5hbC5yZWplY3QpJzogW1JlcXVlc3RSZWplY3RFeHRlcm5hbFJlcXVlc3QsIFJlc3BvbnNlUmVqZWN0RXh0ZXJuYWxSZXF1ZXN0XTtcbiAgJ3ByaShhY2NvdW50LmV4dGVybmFsLnJlc29sdmUpJzogW1JlcXVlc3RSZXNvbHZlRXh0ZXJuYWxSZXF1ZXN0LCBSZXNwb25zZVJlc29sdmVFeHRlcm5hbFJlcXVlc3RdO1xuXG4gIC8vIEV2bVxuICAnZXZtKGV2ZW50cy5zdWJzY3JpYmUpJzogW1JlcXVlc3RFdm1FdmVudHMsIGJvb2xlYW4sIEV2bUV2ZW50XTtcbiAgJ2V2bShyZXF1ZXN0KSc6IFtSZXF1ZXN0QXJndW1lbnRzLCB1bmtub3duXTtcbiAgJ2V2bShwcm92aWRlci5zZW5kKSc6IFtSZXF1ZXN0RXZtUHJvdmlkZXJTZW5kLCBzdHJpbmcgfCBudW1iZXIsIFJlc3BvbnNlRXZtUHJvdmlkZXJTZW5kXVxuXG4gIC8vIEV2bSBUcmFuc2FjdGlvblxuICAncHJpKGV2bS50cmFuc2FjdGlvbi5wYXJzZS5pbnB1dCknOiBbUmVxdWVzdFBhcnNlRXZtQ29udHJhY3RJbnB1dCwgUmVzcG9uc2VQYXJzZUV2bUNvbnRyYWN0SW5wdXRdO1xuXG4gIC8vIEF1dGhvcml6ZVxuICAncHJpKGF1dGhvcml6ZS5zdWJzY3JpYmUpJzogW251bGwsIEF1dGhVcmxzLCBBdXRoVXJsc107XG5cbiAgLy8gS2V5cmluZyBzdGF0ZVxuICAncHJpKGtleXJpbmcuc3Vic2NyaWJlKSc6IFtudWxsLCBLZXlyaW5nU3RhdGUsIEtleXJpbmdTdGF0ZV07XG4gICdwcmkoa2V5cmluZy5jaGFuZ2UpJzogW1JlcXVlc3RDaGFuZ2VNYXN0ZXJQYXNzd29yZCwgUmVzcG9uc2VDaGFuZ2VNYXN0ZXJQYXNzd29yZF07XG4gICdwcmkoa2V5cmluZy5taWdyYXRlKSc6IFtSZXF1ZXN0TWlncmF0ZVBhc3N3b3JkLCBSZXNwb25zZU1pZ3JhdGVQYXNzd29yZF07XG4gICdwcmkoa2V5cmluZy51bmxvY2spJzogW1JlcXVlc3RVbmxvY2tLZXlyaW5nLCBSZXNwb25zZVVubG9ja0tleXJpbmddO1xuICAncHJpKGtleXJpbmcubG9jayknOiBbbnVsbCwgdm9pZF07XG4gICdwcmkoa2V5cmluZy5leHBvcnQubW5lbW9uaWMpJzogW1JlcXVlc3RLZXlyaW5nRXhwb3J0TW5lbW9uaWMsIFJlc3BvbnNlS2V5cmluZ0V4cG9ydE1uZW1vbmljXTtcbiAgJ3ByaShrZXlyaW5nLnJlc2V0KSc6IFtSZXF1ZXN0UmVzZXRXYWxsZXQsIFJlc3BvbnNlUmVzZXRXYWxsZXRdO1xuXG4gIC8vIFNpZ25pbmdcbiAgJ3ByaShzaWduaW5nLmFwcHJvdmUucGFzc3dvcmRWMiknOiBbUmVxdWVzdFNpZ25pbmdBcHByb3ZlUGFzc3dvcmRWMiwgYm9vbGVhbl07XG5cbiAgLy8gRGVyaXZlXG4gICdwcmkoZGVyaXZhdGlvbi52YWxpZGF0ZVYyKSc6IFtSZXF1ZXN0RGVyaXZlVmFsaWRhdGVWMiwgUmVzcG9uc2VEZXJpdmVWYWxpZGF0ZVYyXTtcbiAgJ3ByaShkZXJpdmF0aW9uLmdldExpc3QpJzogW1JlcXVlc3RHZXREZXJpdmVBY2NvdW50cywgUmVzcG9uc2VHZXREZXJpdmVBY2NvdW50c107XG4gICdwcmkoZGVyaXZhdGlvbi5jcmVhdGUubXVsdGlwbGUpJzogW1JlcXVlc3REZXJpdmVDcmVhdGVNdWx0aXBsZSwgYm9vbGVhbl07XG4gICdwcmkoZGVyaXZhdGlvbi5jcmVhdGVWMyknOiBbUmVxdWVzdERlcml2ZUNyZWF0ZVYzLCBib29sZWFuXTtcblxuICAvLyBUcmFuc2FjdGlvblxuICAvLyBHZXQgVHJhbnNhY3Rpb25cbiAgJ3ByaSh0cmFuc2FjdGlvbnMuZ2V0T25lKSc6IFtSZXF1ZXN0R2V0VHJhbnNhY3Rpb24sIFNXVHJhbnNhY3Rpb25SZXN1bHRdO1xuICAncHJpKHRyYW5zYWN0aW9ucy5zdWJzY3JpYmUpJzogW251bGwsIFJlY29yZDxzdHJpbmcsIFNXVHJhbnNhY3Rpb25SZXN1bHQ+LCBSZWNvcmQ8c3RyaW5nLCBTV1RyYW5zYWN0aW9uUmVzdWx0Pl07XG5cbiAgLy8gTm90aWZpY2F0aW9uXG4gICdwcmkobm90aWZpY2F0aW9ucy5zdWJzY3JpYmUpJzogW251bGwsIE5vdGlmaWNhdGlvbltdLCBOb3RpZmljYXRpb25bXV07XG5cbiAgLy8gUHJpdmF0ZVxuICAncHJpKGNyb24ucmVsb2FkKSc6IFtDcm9uUmVsb2FkUmVxdWVzdCwgYm9vbGVhbl07XG5cbiAgLy8gTW9iaWxlXG4gICdtb2JpbGUocGluZyknOiBbbnVsbCwgc3RyaW5nXTtcbiAgJ21vYmlsZShjcm9uQW5kU3Vic2NyaXB0aW9uLmluaXQpJzogW1JlcXVlc3RJbml0Q3JvbkFuZFN1YnNjcmlwdGlvbiwgQWN0aXZlQ3JvbkFuZFN1YnNjcmlwdGlvbk1hcF07XG4gICdtb2JpbGUoY3JvbkFuZFN1YnNjcmlwdGlvbi5hY3RpdmVTZXJ2aWNlLnN1YnNjcmliZSknOiBbbnVsbCwgQWN0aXZlQ3JvbkFuZFN1YnNjcmlwdGlvbk1hcCwgQWN0aXZlQ3JvbkFuZFN1YnNjcmlwdGlvbk1hcF07XG4gICdtb2JpbGUoY3JvbkFuZFN1YnNjcmlwdGlvbi5zdGFydCknOiBbUmVxdWVzdENyb25BbmRTdWJzY3JpcHRpb25BY3Rpb24sIHZvaWRdO1xuICAnbW9iaWxlKGNyb25BbmRTdWJzY3JpcHRpb24uc3RvcCknOiBbUmVxdWVzdENyb25BbmRTdWJzY3JpcHRpb25BY3Rpb24sIHZvaWRdO1xuICAnbW9iaWxlKGNyb25BbmRTdWJzY3JpcHRpb24ucmVzdGFydCknOiBbUmVxdWVzdENyb25BbmRTdWJzY3JpcHRpb25BY3Rpb24sIHZvaWRdO1xuICAnbW9iaWxlKGNyb24uc3RhcnQpJzogW0Nyb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShjcm9uLnN0b3ApJzogW0Nyb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShjcm9uLnJlc3RhcnQpJzogW0Nyb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShzdWJzY3JpcHRpb24uc3RhcnQpJzogW1N1YnNjcmlwdGlvblNlcnZpY2VUeXBlW10sIHZvaWRdO1xuICAnbW9iaWxlKHN1YnNjcmlwdGlvbi5zdG9wKSc6IFtTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShzdWJzY3JpcHRpb24ucmVzdGFydCknOiBbU3Vic2NyaXB0aW9uU2VydmljZVR5cGVbXSwgdm9pZF07XG5cbiAgLy8gUHNwIHRva2VuXG4gICdwdWIodG9rZW4uYWRkKSc6IFtSZXF1ZXN0QWRkUHNwVG9rZW4sIGJvb2xlYW5dO1xuXG4gIC8vLyBXYWxsZXQgY29ubmVjdFxuICAncHJpKHdhbGxldENvbm5lY3QuY29ubmVjdCknOiBbUmVxdWVzdENvbm5lY3RXYWxsZXRDb25uZWN0LCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnJlcXVlc3RzLmNvbm5lY3Quc3Vic2NyaWJlKSc6IFtudWxsLCBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3RbXSwgV2FsbGV0Q29ubmVjdFNlc3Npb25SZXF1ZXN0W11dO1xuICAncHJpKHdhbGxldENvbm5lY3Quc2Vzc2lvbi5hcHByb3ZlKSc6IFtSZXF1ZXN0QXBwcm92ZUNvbm5lY3RXYWxsZXRTZXNzaW9uLCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnNlc3Npb24ucmVqZWN0KSc6IFtSZXF1ZXN0UmVqZWN0Q29ubmVjdFdhbGxldFNlc3Npb24sIGJvb2xlYW5dO1xuICAncHJpKHdhbGxldENvbm5lY3Quc2Vzc2lvbi5yZWNvbm5lY3QpJzogW1JlcXVlc3RSZWNvbm5lY3RDb25uZWN0V2FsbGV0U2Vzc2lvbiwgYm9vbGVhbl07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5zZXNzaW9uLnN1YnNjcmliZSknOiBbbnVsbCwgU2Vzc2lvblR5cGVzLlN0cnVjdFtdLCBTZXNzaW9uVHlwZXMuU3RydWN0W11dO1xuICAncHJpKHdhbGxldENvbm5lY3Quc2Vzc2lvbi5kaXNjb25uZWN0KSc6IFtSZXF1ZXN0RGlzY29ubmVjdFdhbGxldENvbm5lY3RTZXNzaW9uLCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnJlcXVlc3RzLm5vdFN1cHBvcnQuc3Vic2NyaWJlKSc6IFtudWxsLCBXYWxsZXRDb25uZWN0Tm90U3VwcG9ydFJlcXVlc3RbXSwgV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnRSZXF1ZXN0W11dO1xuICAncHJpKHdhbGxldENvbm5lY3Qubm90U3VwcG9ydC5hcHByb3ZlKSc6IFtSZXF1ZXN0QXBwcm92ZVdhbGxldENvbm5lY3ROb3RTdXBwb3J0LCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0Lm5vdFN1cHBvcnQucmVqZWN0KSc6IFtSZXF1ZXN0UmVqZWN0V2FsbGV0Q29ubmVjdE5vdFN1cHBvcnQsIGJvb2xlYW5dO1xuXG4gIC8vLyBNZXRhZGF0YVxuICAncHJpKG1ldGFkYXRhLmZpbmQpJzogW1JlcXVlc3RGaW5kUmF3TWV0YWRhdGEsIFJlc3BvbnNlRmluZFJhd01ldGFkYXRhXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvbk1ldGFkYXRhVHlwZSB7XG4gIHZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgT1NUeXBlID0gJ01hYyBPUycgfCAnaU9TJyB8ICdXaW5kb3dzJyB8ICdBbmRyb2lkJyB8ICdMaW51eCcgfCAnVW5rbm93bic7XG5leHBvcnQgY29uc3QgTW9iaWxlT1M6IE9TVHlwZVtdID0gWydpT1MnLCAnQW5kcm9pZCddO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFNXRXJyb3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvZXJyb3JzL1NXRXJyb3InO1xuaW1wb3J0IHsgUHJvdmlkZXJFcnJvclR5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IGRldGVjdFRyYW5zbGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuXG5jb25zdCBkZWZhdWx0RXJyb3JNYXA6IFJlY29yZDxQcm92aWRlckVycm9yVHlwZSwgeyBtZXNzYWdlOiBzdHJpbmcsIGNvZGU/OiBudW1iZXIgfT4gPSB7XG4gIENIQUlOX0RJU0NPTk5FQ1RFRDoge1xuICAgIG1lc3NhZ2U6IGRldGVjdFRyYW5zbGF0ZSgnTmV0d29yayBpcyBkaXNjb25uZWN0ZWQnKSxcbiAgICBjb2RlOiB1bmRlZmluZWRcbiAgfSxcbiAgSU5WQUxJRF9QQVJBTVM6IHtcbiAgICBtZXNzYWdlOiBkZXRlY3RUcmFuc2xhdGUoJ1VuZGVmaW5lZCBlcnJvci4gUGxlYXNlIGNvbnRhY3QgU3ViV2FsbGV0IHN1cHBvcnQnKSxcbiAgICBjb2RlOiB1bmRlZmluZWRcbiAgfSxcbiAgSU5URVJOQUxfRVJST1I6IHtcbiAgICBtZXNzYWdlOiBkZXRlY3RUcmFuc2xhdGUoJ1VuZGVmaW5lZCBlcnJvci4gUGxlYXNlIGNvbnRhY3QgU3ViV2FsbGV0IHN1cHBvcnQnKSxcbiAgICBjb2RlOiB1bmRlZmluZWRcbiAgfSxcbiAgVVNFUl9SRUpFQ1Q6IHtcbiAgICBtZXNzYWdlOiBkZXRlY3RUcmFuc2xhdGUoJ1JlamVjdGVkIGJ5IHVzZXInKSxcbiAgICBjb2RlOiB1bmRlZmluZWRcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyRXJyb3IgZXh0ZW5kcyBTV0Vycm9yIHtcbiAgb3ZlcnJpZGUgZXJyb3JUeXBlOiBQcm92aWRlckVycm9yVHlwZTtcblxuICBjb25zdHJ1Y3RvciAoZXJyb3JUeXBlOiBQcm92aWRlckVycm9yVHlwZSwgZXJyTWVzc2FnZT86IHN0cmluZywgZGF0YT86IHVua25vd24pIHtcbiAgICBjb25zdCB7IGNvZGUsIG1lc3NhZ2UgfSA9IGRlZmF1bHRFcnJvck1hcFtlcnJvclR5cGVdO1xuXG4gICAgc3VwZXIoZXJyb3JUeXBlLCBlcnJNZXNzYWdlIHx8IG1lc3NhZ2UsIGNvZGUsIGRhdGEpO1xuXG4gICAgdGhpcy5lcnJvclR5cGUgPSBlcnJvclR5cGU7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBTV0Vycm9yIGFzIFNXRXJyb3JUeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBTV0Vycm9yIGV4dGVuZHMgRXJyb3IgaW1wbGVtZW50cyBTV0Vycm9yVHlwZSB7XG4gIGVycm9yVHlwZTogc3RyaW5nO1xuICBjb2RlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRhdGE6IHVua25vd24gfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IgKGVycm9yVHlwZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGNvZGU/OiBudW1iZXIsIGRhdGE/OiB1bmtub3duKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5lcnJvclR5cGUgPSBlcnJvclR5cGU7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmNvbnN0IEFMTE9XRURfUEFUSCA9IFtcbiAgJy8nLFxuICAnL3NldHRpbmdzL3NlY3VyaXR5JyxcbiAgJy9hY2NvdW50cy9jb25uZWN0LWxlZGdlcicsXG4gICcvYWNjb3VudHMvcmVzdG9yZS1qc29uJyxcbiAgJy9hY2NvdW50cy9kZXRhaWwnLFxuICAnL2FjY291bnRzL25ldy1zZWVkLXBocmFzZSdcbl0gYXMgY29uc3Q7XG5jb25zdCBQSElTSElOR19QQUdFX1JFRElSRUNUID0gJy9waGlzaGluZy1wYWdlLWRldGVjdGVkJztcbmNvbnN0IEVYVEVOU0lPTl9QUkVGSVggPSBwcm9jZXNzLmVudi5FWFRFTlNJT05fUFJFRklYIGFzIHN0cmluZyB8fCAnJztcbmNvbnN0IElEX1BSRUZJWCA9IHByb2Nlc3MuZW52LklEX1BSRUZJWCBhcyBzdHJpbmcgfHwgRVhURU5TSU9OX1BSRUZJWCB8fCAnJztcbmNvbnN0IFBPUlRfTU9CSUxFID0gYCR7RVhURU5TSU9OX1BSRUZJWH1tb2JpbGVgO1xuY29uc3QgUE9SVF9DT05URU5UID0gYCR7RVhURU5TSU9OX1BSRUZJWH1rb25pLWNvbnRlbnRgO1xuY29uc3QgUE9SVF9FWFRFTlNJT04gPSBgJHtFWFRFTlNJT05fUFJFRklYfWtvbmktZXh0ZW5zaW9uYDtcbmNvbnN0IE1FU1NBR0VfT1JJR0lOX1BBR0UgPSBgJHtFWFRFTlNJT05fUFJFRklYfWtvbmktcGFnZWA7XG5jb25zdCBNRVNTQUdFX09SSUdJTl9DT05URU5UID0gYCR7RVhURU5TSU9OX1BSRUZJWH1rb25pLWNvbnRlbnRgO1xuY29uc3QgUEFTU1dPUkRfRVhQSVJZX01JTiA9IDE1O1xuY29uc3QgUEFTU1dPUkRfRVhQSVJZX01TID0gUEFTU1dPUkRfRVhQSVJZX01JTiAqIDYwICogMTAwMDtcblxuZXhwb3J0IHtcbiAgQUxMT1dFRF9QQVRILFxuICBQQVNTV09SRF9FWFBJUllfTUlOLFxuICBQQVNTV09SRF9FWFBJUllfTVMsXG4gIFBISVNISU5HX1BBR0VfUkVESVJFQ1QsXG4gIEVYVEVOU0lPTl9QUkVGSVgsXG4gIElEX1BSRUZJWCxcbiAgUE9SVF9NT0JJTEUsXG4gIFBPUlRfQ09OVEVOVCxcbiAgUE9SVF9FWFRFTlNJT04sXG4gIE1FU1NBR0VfT1JJR0lOX1BBR0UsXG4gIE1FU1NBR0VfT1JJR0lOX0NPTlRFTlRcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHR5cGUgeyBJbmplY3RlZEFjY291bnQsIEluamVjdGVkQWNjb3VudHMsIFVuc3ViY2FsbCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWluamVjdC90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFNlbmRSZXF1ZXN0IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIEV4dGVybmFsIHRvIGNsYXNzLCB0aGlzLiMgaXMgbm90IHByaXZhdGUgZW5vdWdoICh5ZXQpXG5sZXQgc2VuZFJlcXVlc3Q6IFNlbmRSZXF1ZXN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50cyBpbXBsZW1lbnRzIEluamVjdGVkQWNjb3VudHMge1xuICBjb25zdHJ1Y3RvciAoX3NlbmRSZXF1ZXN0OiBTZW5kUmVxdWVzdCkge1xuICAgIHNlbmRSZXF1ZXN0ID0gX3NlbmRSZXF1ZXN0O1xuICB9XG5cbiAgcHVibGljIGdldCAoYW55VHlwZT86IGJvb2xlYW4pOiBQcm9taXNlPEluamVjdGVkQWNjb3VudFtdPiB7XG4gICAgcmV0dXJuIHNlbmRSZXF1ZXN0KCdwdWIoYWNjb3VudHMubGlzdFYyKScsIHsgYW55VHlwZSwgYWNjb3VudEF1dGhUeXBlOiAnc3Vic3RyYXRlJyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdWJzY3JpYmUgKGNiOiAoYWNjb3VudHM6IEluamVjdGVkQWNjb3VudFtdKSA9PiB1bmtub3duKTogVW5zdWJjYWxsIHtcbiAgICBsZXQgaWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gICAgc2VuZFJlcXVlc3QoJ3B1YihhY2NvdW50cy5zdWJzY3JpYmVWMiknLCB7IGFjY291bnRBdXRoVHlwZTogJ3N1YnN0cmF0ZScgfSwgY2IpXG4gICAgICAudGhlbigoc3ViSWQpOiB2b2lkID0+IHtcbiAgICAgICAgaWQgPSBzdWJJZDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbiAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgaWQgJiYgc2VuZFJlcXVlc3QoJ3B1YihhY2NvdW50cy51bnN1YnNjcmliZSknLCB7IGlkIH0pXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICB9O1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHR5cGUgeyBJbmplY3RlZCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWluamVjdC90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFNlbmRSZXF1ZXN0IH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCBBY2NvdW50cyBmcm9tICcuL0FjY291bnRzJztcbmltcG9ydCBNZXRhZGF0YSBmcm9tICcuL01ldGFkYXRhJztcbmltcG9ydCBQb3N0TWVzc2FnZVByb3ZpZGVyIGZyb20gJy4vUG9zdE1lc3NhZ2VQcm92aWRlcic7XG5pbXBvcnQgU2lnbmVyIGZyb20gJy4vU2lnbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1wbGVtZW50cyBJbmplY3RlZCB7XG4gIHB1YmxpYyByZWFkb25seSBhY2NvdW50czogQWNjb3VudHM7XG5cbiAgcHVibGljIHJlYWRvbmx5IG1ldGFkYXRhOiBNZXRhZGF0YTtcblxuICBwdWJsaWMgcmVhZG9ubHkgcHJvdmlkZXI6IFBvc3RNZXNzYWdlUHJvdmlkZXI7XG5cbiAgcHVibGljIHJlYWRvbmx5IHNpZ25lcjogU2lnbmVyO1xuXG4gIGNvbnN0cnVjdG9yIChzZW5kUmVxdWVzdDogU2VuZFJlcXVlc3QpIHtcbiAgICB0aGlzLmFjY291bnRzID0gbmV3IEFjY291bnRzKHNlbmRSZXF1ZXN0KTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IE1ldGFkYXRhKHNlbmRSZXF1ZXN0KTtcbiAgICB0aGlzLnByb3ZpZGVyID0gbmV3IFBvc3RNZXNzYWdlUHJvdmlkZXIoc2VuZFJlcXVlc3QpO1xuICAgIHRoaXMuc2lnbmVyID0gbmV3IFNpZ25lcihzZW5kUmVxdWVzdCk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKTogdm9pZCA9PiB7XG4gICAgICBzZW5kUmVxdWVzdCgncHViKHBpbmcpJywgbnVsbCkuY2F0Y2goKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFeHRlbnNpb24gdW5hdmFpbGFibGUsIHBpbmcgZmFpbGVkJyk7XG4gICAgICB9KTtcbiAgICB9LCA1XzAwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDVfMDAwKSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbiBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgdHlwZSB7IEluamVjdGVkTWV0YWRhdGEsIEluamVjdGVkTWV0YWRhdGFLbm93biwgTWV0YWRhdGFEZWYgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1pbmplY3QvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBTZW5kUmVxdWVzdCB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBSZXF1ZXN0QWRkUHNwVG9rZW4gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcblxuLy8gRXh0ZXJuYWwgdG8gY2xhc3MsIHRoaXMuIyBpcyBub3QgcHJpdmF0ZSBlbm91Z2ggKHlldClcbmxldCBzZW5kUmVxdWVzdDogU2VuZFJlcXVlc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFkYXRhIGltcGxlbWVudHMgSW5qZWN0ZWRNZXRhZGF0YSB7XG4gIGNvbnN0cnVjdG9yIChfc2VuZFJlcXVlc3Q6IFNlbmRSZXF1ZXN0KSB7XG4gICAgc2VuZFJlcXVlc3QgPSBfc2VuZFJlcXVlc3Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0ICgpOiBQcm9taXNlPEluamVjdGVkTWV0YWRhdGFLbm93bltdPiB7XG4gICAgcmV0dXJuIHNlbmRSZXF1ZXN0KCdwdWIobWV0YWRhdGEubGlzdCknKTtcbiAgfVxuXG4gIHB1YmxpYyBwcm92aWRlIChkZWZpbml0aW9uOiBNZXRhZGF0YURlZik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBzZW5kUmVxdWVzdCgncHViKG1ldGFkYXRhLnByb3ZpZGUpJywgZGVmaW5pdGlvbik7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9rZW4gKHJlcXVlc3Q6IFJlcXVlc3RBZGRQc3BUb2tlbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBzZW5kUmVxdWVzdCgncHViKHRva2VuLmFkZCknLCByZXF1ZXN0KTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHR5cGUgeyBJbmplY3RlZFByb3ZpZGVyLCBQcm92aWRlckxpc3QsIFByb3ZpZGVyTWV0YSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWluamVjdC90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFByb3ZpZGVySW50ZXJmYWNlRW1pdENiLCBQcm92aWRlckludGVyZmFjZUVtaXR0ZWQgfSBmcm9tICdAcG9sa2Fkb3QvcnBjLXByb3ZpZGVyL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgQW55RnVuY3Rpb24gfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBTZW5kUmVxdWVzdCB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuXG5pbXBvcnQgeyBpc1VuZGVmaW5lZCwgbG9nZ2VyIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuXG5jb25zdCBsID0gbG9nZ2VyKCdQb3N0TWVzc2FnZVByb3ZpZGVyJyk7XG5cbnR5cGUgQ2FsbGJhY2tIYW5kbGVyID0gKGVycm9yPzogbnVsbCB8IEVycm9yLCB2YWx1ZT86IHVua25vd24pID0+IHZvaWQ7XG5cbi8vIFNhbWUgYXMgaHR0cHM6Ly9naXRodWIuY29tL3BvbGthZG90LWpzL2FwaS9ibG9iLzU3Y2E5YTljMzIwNDMzOWUxZTFmNjkzZmNhY2MzMzAzOTg2OGRjMjcvcGFja2FnZXMvcnBjLXByb3ZpZGVyL3NyYy93cy9Qcm92aWRlci50cyNMMTdcbmludGVyZmFjZSBTdWJzY3JpcHRpb25IYW5kbGVyIHtcbiAgY2FsbGJhY2s6IENhbGxiYWNrSGFuZGxlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG4vLyBFeHRlcm5hbCB0byBjbGFzcywgdGhpcy4jIGlzIG5vdCBwcml2YXRlIGVub3VnaCAoeWV0KVxubGV0IHNlbmRSZXF1ZXN0OiBTZW5kUmVxdWVzdDtcblxuLyoqXG4gKiBAbmFtZSBQb3N0TWVzc2FnZVByb3ZpZGVyXG4gKlxuICogQGRlc2NyaXB0aW9uIEV4dGVuc2lvbiBwcm92aWRlciB0byBiZSB1c2VkIGJ5IGRhcHBzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RNZXNzYWdlUHJvdmlkZXIgaW1wbGVtZW50cyBJbmplY3RlZFByb3ZpZGVyIHtcbiAgcmVhZG9ubHkgI2V2ZW50ZW1pdHRlcjogRXZlbnRFbWl0dGVyO1xuXG4gIGlzQ2xvbmFibGUgPSB0cnVlO1xuXG4gIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBhY3R1YWwgZXh0ZW5zaW9uIGJhY2tncm91bmQgcHJvdmlkZXIgaXMgY29ubmVjdGVkXG4gICNpc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gIC8vIFN1YnNjcmlwdGlvbiBJRHMgYXJlIChoaXN0b3JpY2FsbHkpIG5vdCBndWFyYW50ZWVkIHRvIGJlIGdsb2JhbGx5IHVuaXF1ZTtcbiAgLy8gb25seSB1bmlxdWUgZm9yIGEgZ2l2ZW4gc3Vic2NyaXB0aW9uIG1ldGhvZDsgd2hpY2ggaXMgd2h5IHdlIGlkZW50aWZ5XG4gIC8vIHRoZSBzdWJzY3JpcHRpb25zIGJhc2VkIG9uIHN1YnNjcmlwdGlvbiBpZCArIHR5cGVcbiAgcmVhZG9ubHkgI3N1YnNjcmlwdGlvbnM6IFJlY29yZDxzdHJpbmcsIEFueUZ1bmN0aW9uPiA9IHt9OyAvLyB7Wyh0eXBlLHN1YnNjcmlwdGlvbklkKV06IGNhbGxiYWNrfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgc2VuZFJlcXVlc3QgIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgdG8gc2VuZCByZXF1ZXN0cyB0byB0aGUgbm9kZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgc3Vic2NyaXB0aW9uTm90aWZpY2F0aW9uSGFuZGxlciAgQ2hhbm5lbCBmb3IgcmVjZWl2aW5nIHN1YnNjcmlwdGlvbiBtZXNzYWdlc1xuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yIChfc2VuZFJlcXVlc3Q6IFNlbmRSZXF1ZXN0KSB7XG4gICAgdGhpcy4jZXZlbnRlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgc2VuZFJlcXVlc3QgPSBfc2VuZFJlcXVlc3Q7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgY2xvbmUgKCk6IFBvc3RNZXNzYWdlUHJvdmlkZXIge1xuICAgIHJldHVybiBuZXcgUG9zdE1lc3NhZ2VQcm92aWRlcihzZW5kUmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIE1hbnVhbGx5IGRpc2Nvbm5lY3QgZnJvbSB0aGUgY29ubmVjdGlvbiwgY2xlYXJpbmcgYXV0b2Nvbm5lY3QgbG9naWNcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxuICBwdWJsaWMgYXN5bmMgY29ubmVjdCAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gRklYTUUgVGhpcyBzaG91bGQgc2VlIGlmIHRoZSBleHRlbnNpb24ncyBzdGF0ZSdzIHByb3ZpZGVyIGNhbiBkaXNjb25uZWN0XG4gICAgY29uc29sZS5lcnJvcignUG9zdE1lc3NhZ2VQcm92aWRlci5kaXNjb25uZWN0KCkgaXMgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBNYW51YWxseSBkaXNjb25uZWN0IGZyb20gdGhlIGNvbm5lY3Rpb24sIGNsZWFyaW5nIGF1dG9jb25uZWN0IGxvZ2ljXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcbiAgcHVibGljIGFzeW5jIGRpc2Nvbm5lY3QgKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIEZJWE1FIFRoaXMgc2hvdWxkIHNlZSBpZiB0aGUgZXh0ZW5zaW9uJ3Mgc3RhdGUncyBwcm92aWRlciBjYW4gZGlzY29ubmVjdFxuICAgIGNvbnNvbGUuZXJyb3IoJ1Bvc3RNZXNzYWdlUHJvdmlkZXIuZGlzY29ubmVjdCgpIGlzIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBgdHJ1ZWAgd2hlbiB0aGlzIHByb3ZpZGVyIHN1cHBvcnRzIHN1YnNjcmlwdGlvbnNcbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzU3Vic2NyaXB0aW9ucyAoKTogYm9vbGVhbiB7XG4gICAgLy8gRklYTUUgVGhpcyBzaG91bGQgc2VlIGlmIHRoZSBleHRlbnNpb24ncyBzdGF0ZSdzIHByb3ZpZGVyIGhhcyBzdWJzY3JpcHRpb25zXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgV2hldGhlciB0aGUgbm9kZSBpcyBjb25uZWN0ZWQgb3Igbm90LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGNvbm5lY3RlZFxuICAgKi9cbiAgcHVibGljIGdldCBpc0Nvbm5lY3RlZCAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuI2lzQ29ubmVjdGVkO1xuICB9XG5cbiAgcHVibGljIGxpc3RQcm92aWRlcnMgKCk6IFByb21pc2U8UHJvdmlkZXJMaXN0PiB7XG4gICAgcmV0dXJuIHNlbmRSZXF1ZXN0KCdwdWIocnBjLmxpc3RQcm92aWRlcnMpJywgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBMaXN0ZW5zIG9uIGV2ZW50cyBhZnRlciBoYXZpbmcgc3Vic2NyaWJlZCB1c2luZyB0aGUgW1tzdWJzY3JpYmVdXSBmdW5jdGlvbi5cbiAgICogQHBhcmFtICB7UHJvdmlkZXJJbnRlcmZhY2VFbWl0dGVkfSB0eXBlIEV2ZW50XG4gICAqIEBwYXJhbSAge1Byb3ZpZGVySW50ZXJmYWNlRW1pdENifSAgc3ViICBDYWxsYmFja1xuICAgKiBAcmV0dXJuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG4gICAqL1xuICBwdWJsaWMgb24gKHR5cGU6IFByb3ZpZGVySW50ZXJmYWNlRW1pdHRlZCwgc3ViOiBQcm92aWRlckludGVyZmFjZUVtaXRDYik6ICgpID0+IHZvaWQge1xuICAgIHRoaXMuI2V2ZW50ZW1pdHRlci5vbih0eXBlLCBzdWIpO1xuXG4gICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuI2V2ZW50ZW1pdHRlci5yZW1vdmVMaXN0ZW5lcih0eXBlLCBzdWIpO1xuICAgIH07XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBwdWJsaWMgYXN5bmMgc2VuZCAobWV0aG9kOiBzdHJpbmcsIHBhcmFtczogdW5rbm93bltdLCBfPzogYm9vbGVhbiwgc3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uSGFuZGxlcik6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgY29uc3QgeyBjYWxsYmFjaywgdHlwZSB9ID0gc3Vic2NyaXB0aW9uO1xuXG4gICAgICBjb25zdCBpZCA9IGF3YWl0IHNlbmRSZXF1ZXN0KCdwdWIocnBjLnN1YnNjcmliZSknLCB7IG1ldGhvZCwgcGFyYW1zLCB0eXBlIH0sIChyZXMpOiB2b2lkID0+IHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy4jc3Vic2NyaXB0aW9uc1tgJHt0eXBlfTo6JHtpZH1gXSA9IGNhbGxiYWNrO1xuXG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbmRSZXF1ZXN0KCdwdWIocnBjLnNlbmQpJywgeyBtZXRob2QsIHBhcmFtcyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBTcGF3biBhIHByb3ZpZGVyIG9uIHRoZSBleHRlbnNpb24gYmFja2dyb3VuZC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzdGFydFByb3ZpZGVyIChrZXk6IHN0cmluZyk6IFByb21pc2U8UHJvdmlkZXJNZXRhPiB7XG4gICAgLy8gRGlzY29ubmVjdCBmcm9tIHRoZSBwcmV2aW91cyBwcm92aWRlclxuICAgIHRoaXMuI2lzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy4jZXZlbnRlbWl0dGVyLmVtaXQoJ2Rpc2Nvbm5lY3RlZCcpO1xuXG4gICAgY29uc3QgbWV0YSA9IGF3YWl0IHNlbmRSZXF1ZXN0KCdwdWIocnBjLnN0YXJ0UHJvdmlkZXIpJywga2V5KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICBzZW5kUmVxdWVzdCgncHViKHJwYy5zdWJzY3JpYmVDb25uZWN0ZWQpJywgbnVsbCwgKGNvbm5lY3RlZCkgPT4ge1xuICAgICAgdGhpcy4jaXNDb25uZWN0ZWQgPSBjb25uZWN0ZWQ7XG5cbiAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy4jZXZlbnRlbWl0dGVyLmVtaXQoJ2Nvbm5lY3RlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jZXZlbnRlbWl0dGVyLmVtaXQoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhO1xuICB9XG5cbiAgcHVibGljIHN1YnNjcmliZSAodHlwZTogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgcGFyYW1zOiB1bmtub3duW10sIGNhbGxiYWNrOiBBbnlGdW5jdGlvbik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuc2VuZChtZXRob2QsIHBhcmFtcywgZmFsc2UsIHsgY2FsbGJhY2ssIHR5cGUgfSkgYXMgUHJvbWlzZTxudW1iZXI+O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEFsbG93cyB1bnN1YnNjcmliaW5nIHRvIHN1YnNjcmlwdGlvbnMgbWFkZSB3aXRoIFtbc3Vic2NyaWJlXV0uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgdW5zdWJzY3JpYmUgKHR5cGU6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIGlkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBgJHt0eXBlfTo6JHtpZH1gO1xuXG4gICAgLy8gRklYTUUgVGhpcyBub3cgY291bGQgaGFwcGVuIHdpdGggcmUtc3Vic2NyaXB0aW9ucy4gVGhlIGlzc3VlIGlzIHRoYXQgd2l0aCBhIHJlLXN1YlxuICAgIC8vIHRoZSBhc3NpZ25lZCBpZCBub3cgZG9lcyBub3QgbWF0Y2ggd2hhdCB0aGUgQVBJIHVzZXIgb3JpZ2luYWxseSByZWNlaXZlZC4gSXQgaGFzXG4gICAgLy8gYSBzbGlnaHQgY29tcGxpY2F0aW9uIGluIHNvbHZpbmcgLSBzaW5jZSB3ZSBjYW5ub3QgcmVseSBvbiB0aGUgc2VuZCBpZCwgYnV0IHJhdGhlclxuICAgIC8vIG5lZWQgdG8gZmluZCB0aGUgYWN0dWFsIHN1YnNjcmlwdGlvbiBpZCB0byBtYXAgaXRcbiAgICBpZiAoaXNVbmRlZmluZWQodGhpcy4jc3Vic2NyaXB0aW9uc1tzdWJzY3JpcHRpb25dKSkge1xuICAgICAgbC5kZWJ1ZygoKTogc3RyaW5nID0+IGBVbmFibGUgdG8gZmluZCBhY3RpdmUgc3Vic2NyaXB0aW9uPSR7c3Vic2NyaXB0aW9ufWApO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuI3N1YnNjcmlwdGlvbnNbc3Vic2NyaXB0aW9uXTtcblxuICAgIHJldHVybiB0aGlzLnNlbmQobWV0aG9kLCBbaWRdKSBhcyBQcm9taXNlPGJvb2xlYW4+O1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgdHlwZSB7IFNpZ25lciBhcyBTaWduZXJJbnRlcmZhY2UsIFNpZ25lclJlc3VsdCB9IGZyb20gJ0Bwb2xrYWRvdC9hcGkvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBTaWduZXJQYXlsb2FkSlNPTiwgU2lnbmVyUGF5bG9hZFJhdyB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFNlbmRSZXF1ZXN0IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIEV4dGVybmFsIHRvIGNsYXNzLCB0aGlzLiMgaXMgbm90IHByaXZhdGUgZW5vdWdoICh5ZXQpXG5sZXQgc2VuZFJlcXVlc3Q6IFNlbmRSZXF1ZXN0O1xubGV0IG5leHRJZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25lciBpbXBsZW1lbnRzIFNpZ25lckludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yIChfc2VuZFJlcXVlc3Q6IFNlbmRSZXF1ZXN0KSB7XG4gICAgc2VuZFJlcXVlc3QgPSBfc2VuZFJlcXVlc3Q7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2lnblBheWxvYWQgKHBheWxvYWQ6IFNpZ25lclBheWxvYWRKU09OKTogUHJvbWlzZTxTaWduZXJSZXN1bHQ+IHtcbiAgICBjb25zdCBpZCA9ICsrbmV4dElkO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRSZXF1ZXN0KCdwdWIoZXh0cmluc2ljLnNpZ24pJywgcGF5bG9hZCk7XG5cbiAgICAvLyB3ZSBhZGQgYW4gaW50ZXJuYWwgaWQgKG51bWJlcikgLSBzaG91bGQgaGF2ZSBhIG1hcHBpbmcgZnJvbSB0aGVcbiAgICAvLyBleHRlbnNpb24gaWQgKHN0cmluZykgLT4gaW50ZXJuYWwgaWQgKG51bWJlcikgaWYgd2Ugd2lzaCB0byBwcm92aWRlXG4gICAgLy8gdXBkYXRlZCB2aWEgdGhlIHVwZGF0ZSBmdW5jdGlvbmFsaXR5IChub29wIGF0IHRoaXMgcG9pbnQpXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGlkXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaWduUmF3IChwYXlsb2FkOiBTaWduZXJQYXlsb2FkUmF3KTogUHJvbWlzZTxTaWduZXJSZXN1bHQ+IHtcbiAgICBjb25zdCBpZCA9ICsrbmV4dElkO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRSZXF1ZXN0KCdwdWIoYnl0ZXMuc2lnbiknLCBwYXlsb2FkKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBpZFxuICAgIH07XG4gIH1cblxuICAvLyBOT1RFIFdlIGRvbid0IGxpc3RlbiB0byB1cGRhdGVzIGF0IGFsbCwgaWYgd2UgZG8gd2UgY2FuIGludGVycHJldCB0aGVcbiAgLy8gcmVzdWtsdCBhcyBwcm92aWRlZCBieSB0aGUgQVBJIGhlcmVcbiAgLy8gcHVibGljIHVwZGF0ZSAoaWQ6IG51bWJlciwgc3RhdHVzOiBIYXNoIHwgU3VibWl0dGFibGVSZXN1bHQpOiB2b2lkIHtcbiAgLy8gICAvLyBpZ25vcmVcbiAgLy8gfVxufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB0eXBlIHsgRXZtUHJvdmlkZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1pbmplY3QvdHlwZXMnO1xuXG5pbXBvcnQgU2FmZUV2ZW50RW1pdHRlciBmcm9tICdAbWV0YW1hc2svc2FmZS1ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7IEV2bVByb3ZpZGVyRXJyb3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvZXJyb3JzL0V2bVByb3ZpZGVyRXJyb3InO1xuaW1wb3J0IHsgU2VuZFJlcXVlc3QgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3BhZ2UvdHlwZXMnO1xuaW1wb3J0IHsgSnNvblJwY1JlcXVlc3QsIEpzb25ScGNSZXNwb25zZSwgSnNvblJwY1N1Y2Nlc3MgfSBmcm9tICdqc29uLXJwYy1lbmdpbmUnO1xuaW1wb3J0IHsgUmVxdWVzdEFyZ3VtZW50cyB9IGZyb20gJ3dlYjMtY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VuZFN5bmNKc29uUnBjUmVxdWVzdCBleHRlbmRzIEpzb25ScGNSZXF1ZXN0PHVua25vd24+IHtcbiAgbWV0aG9kOiAnbmV0X3ZlcnNpb24nO1xufVxuXG5sZXQgc3Vic2NyaWJlRmxhZyA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgU3ViV2FsbGV0RXZtUHJvdmlkZXIgZXh0ZW5kcyBTYWZlRXZlbnRFbWl0dGVyIGltcGxlbWVudHMgRXZtUHJvdmlkZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgaXNTdWJXYWxsZXQgPSB0cnVlO1xuICBwdWJsaWMgcmVhZG9ubHkgaXNNZXRhTWFzayA9IGZhbHNlO1xuICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjtcbiAgcHJvdGVjdGVkIHNlbmRNZXNzYWdlOiBTZW5kUmVxdWVzdDtcbiAgcHJvdGVjdGVkIF9jb25uZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvciAoc2VuZE1lc3NhZ2U6IFNlbmRSZXF1ZXN0LCB2ZXJzaW9uOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5zZW5kTWVzc2FnZSA9IHNlbmRNZXNzYWdlO1xuICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG4gIH1cblxuICBnZXQgY29ubmVjdGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkO1xuICB9XG5cbiAgcHVibGljIGlzQ29ubmVjdGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUV4dGVuc2lvbkV2ZW50cyAoKSB7XG4gICAgaWYgKHN1YnNjcmliZUZsYWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlbmRNZXNzYWdlKCdldm0oZXZlbnRzLnN1YnNjcmliZSknLCBudWxsLCAoeyBwYXlsb2FkLCB0eXBlIH0pID0+IHtcbiAgICAgIGlmIChbJ2Nvbm5lY3QnLCAnZGlzY29ubmVjdCcsICdhY2NvdW50c0NoYW5nZWQnLCAnY2hhaW5DaGFuZ2VkJywgJ21lc3NhZ2UnLCAnZGF0YScsICdyZWNvbm5lY3QnLCAnZXJyb3InXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2Nvbm5lY3QnKSB7XG4gICAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGlzY29ubmVjdCcpIHtcbiAgICAgICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbmFsVHlwZSA9IHR5cGUgPT09ICdkYXRhJyA/ICdtZXNzYWdlJyA6IHR5cGU7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuICAgICAgICB0aGlzLmVtaXQoZmluYWxUeXBlLCBwYXlsb2FkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ2FuIG5vdCBoYW5kbGUgZXZlbnQnLCB0eXBlLCBwYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oKGRvbmUpID0+IHtcbiAgICAgICAgc3Vic2NyaWJlRmxhZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgc3Vic2NyaWJlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICBzdWJzY3JpYmVGbGFnID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBlbmFibGUgKCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3Q8c3RyaW5nW10+KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgb24gKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgdGhpcy5zdWJzY3JpYmVFeHRlbnNpb25FdmVudHMoKTtcbiAgICBzdXBlci5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG9uY2UgKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgdGhpcy5zdWJzY3JpYmVFeHRlbnNpb25FdmVudHMoKTtcbiAgICBzdXBlci5vbmNlKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXF1ZXN0PFQ+ICh7IG1ldGhvZCwgcGFyYW1zIH06IFJlcXVlc3RBcmd1bWVudHMpOiBQcm9taXNlPFQ+IHtcbiAgICAvLyBTdWJzY3JpYmUgZXZlbnRzXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ2V0aF9yZXF1ZXN0QWNjb3VudHMnOlxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IGRvY3VtZW50LnRpdGxlICE9PSAnJyA/IGRvY3VtZW50LnRpdGxlIDogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuXG4gICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgncHViKGF1dGhvcml6ZS50YWJWMiknLCB7IG9yaWdpbiwgYWNjb3VudEF1dGhUeXBlOiAnZXZtJyB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBSZXR1cm4gYWNjb3VudCBsaXN0XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdDxzdHJpbmdbXT4oeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKGFjY291bnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICByZXNvbHZlKGFjY291bnRzKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZTogRXZtUHJvdmlkZXJFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGU6IEV2bVByb3ZpZGVyRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgnZXZtKHJlcXVlc3QpJywgeyBwYXJhbXMsIG1ldGhvZCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCBhcyBUKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGU6IEV2bVByb3ZpZGVyRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NlbmRTeW5jIChwYXlsb2FkOiBKc29uUnBjUmVxdWVzdDx1bmtub3duPik6IEpzb25ScGNSZXNwb25zZTx1bmtub3duPiB7XG4gICAgbGV0IHJlc3VsdDogSnNvblJwY1N1Y2Nlc3M8dW5rbm93bj5bJ3Jlc3VsdCddO1xuXG4gICAgc3dpdGNoIChwYXlsb2FkLm1ldGhvZCkge1xuICAgICAgY2FzZSAnbmV0X3ZlcnNpb24nOlxuICAgICAgICByZXN1bHQgPSB0aGlzLnZlcnNpb24gPyBgU3ViV2FsbGV0IHYke3RoaXMudmVyc2lvbn1gIDogbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBzdXBwb3J0ICR7cGF5bG9hZC5tZXRob2R9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBwYXlsb2FkLmlkLFxuICAgICAganNvbnJwYzogcGF5bG9hZC5qc29ucnBjLFxuICAgICAgcmVzdWx0XG4gICAgfTtcbiAgfVxuXG4gIHNlbmQ8VD4gKG1ldGhvZDogc3RyaW5nLCBwYXJhbXM/OiBUW10pOiBQcm9taXNlPEpzb25ScGNSZXNwb25zZTxUPj47XG4gIHNlbmQ8VD4gKHBheWxvYWQ6IEpzb25ScGNSZXF1ZXN0PHVua25vd24+LCBjYWxsYmFjazogKGVycm9yOiBFcnJvciB8IG51bGwsIHJlc3VsdD86IEpzb25ScGNSZXNwb25zZTxUPikgPT4gdm9pZCk6IHZvaWQ7XG4gIHNlbmQ8VD4gKHBheWxvYWQ6IFNlbmRTeW5jSnNvblJwY1JlcXVlc3QpOiBKc29uUnBjUmVzcG9uc2U8VD47XG4gIHNlbmQgKG1ldGhvZE9yUGF5bG9hZDogdW5rbm93biwgY2FsbGJhY2tPckFyZ3M/OiB1bmtub3duKTogdW5rbm93biB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG1ldGhvZE9yUGF5bG9hZCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICghY2FsbGJhY2tPckFyZ3MgfHwgQXJyYXkuaXNBcnJheShjYWxsYmFja09yQXJncykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHsgbWV0aG9kOiBtZXRob2RPclBheWxvYWQsIHBhcmFtczogY2FsbGJhY2tPckFyZ3MgfSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG1ldGhvZE9yUGF5bG9hZCAmJlxuICAgICAgdHlwZW9mIG1ldGhvZE9yUGF5bG9hZCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBjYWxsYmFja09yQXJncyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXRob2RPclBheWxvYWQgYXMgSnNvblJwY1JlcXVlc3Q8dW5rbm93bj4pLnRoZW4oKHJzKSA9PiB7XG4gICAgICAgIChjYWxsYmFja09yQXJncyBhcyAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkKShycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VuZFN5bmMobWV0aG9kT3JQYXlsb2FkIGFzIFNlbmRTeW5jSnNvblJwY1JlcXVlc3QpO1xuICB9XG5cbiAgc2VuZEFzeW5jPFQ+IChwYXlsb2FkOiBKc29uUnBjUmVxdWVzdDxUPiwgY2FsbGJhY2s6IChlcnJvcjogKEVycm9yIHwgbnVsbCksIHJlc3VsdD86IEpzb25ScGNSZXNwb25zZTxUPikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMucmVxdWVzdDxUPihwYXlsb2FkKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHsgcmVzdWx0IH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZTogRXZtUHJvdmlkZXJFcnJvcikgPT4ge1xuICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHR5cGUgeyBNZXNzYWdlVHlwZXMsIE1lc3NhZ2VUeXBlc1dpdGhOb1N1YnNjcmlwdGlvbnMsIE1lc3NhZ2VUeXBlc1dpdGhOdWxsUmVxdWVzdCwgTWVzc2FnZVR5cGVzV2l0aFN1YnNjcmlwdGlvbnMsIFJlcXVlc3RUeXBlcywgUmVzcG9uc2VUeXBlcywgU3Vic2NyaXB0aW9uTWVzc2FnZVR5cGVzLCBUcmFuc3BvcnRSZXF1ZXN0TWVzc2FnZSwgVHJhbnNwb3J0UmVzcG9uc2VNZXNzYWdlIH0gZnJvbSAnLi4vYmFja2dyb3VuZC90eXBlcyc7XG5cbmltcG9ydCB7IFByb3ZpZGVyRXJyb3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvZXJyb3JzL1Byb3ZpZGVyRXJyb3InO1xuaW1wb3J0IHsgUHJvdmlkZXJFcnJvclR5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IFN1YldhbGxldEV2bVByb3ZpZGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9wYWdlL1N1YldhbGxlRXZtUHJvdmlkZXInO1xuaW1wb3J0IHsgRXZtUHJvdmlkZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1pbmplY3QvdHlwZXMnO1xuXG5pbXBvcnQgeyBNRVNTQUdFX09SSUdJTl9QQUdFIH0gZnJvbSAnLi4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgZ2V0SWQgfSBmcm9tICcuLi91dGlscy9nZXRJZCc7XG5pbXBvcnQgSW5qZWN0ZWQgZnJvbSAnLi9JbmplY3RlZCc7XG4vLyB3aGVuIHNlbmRpbmcgYSBtZXNzYWdlIGZyb20gdGhlIGluamVjdG9yIHRvIHRoZSBleHRlbnNpb24sIHdlXG4vLyAgLSBjcmVhdGUgYW4gZXZlbnQgLSB0aGlzIHdlIHNlbmQgdG8gdGhlIGxvYWRlclxuLy8gIC0gdGhlIGxvYWRlciB0YWtlcyB0aGlzIGV2ZW50IGFuZCB1c2VzIHBvcnQucG9zdE1lc3NhZ2UgdG8gYmFja2dyb3VuZFxuLy8gIC0gb24gcmVzcG9uc2UsIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHJlcG9uc2UgZXZlbnRcbi8vICAtIHRoaXMgaW5qZWN0b3IsIGxpc3RlbnMgb24gdGhlIGV2ZW50cywgbWFwcyBpdCB0byB0aGUgb3JpZ2luYWxcbi8vICAtIHJlc29sdmVzL3JlamVjdHMgdGhlIHByb21pc2Ugd2l0aCB0aGUgcmVzdWx0IChvciBzdWIgZGF0YSlcblxuZXhwb3J0IGludGVyZmFjZSBIYW5kbGVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcmVzb2x2ZTogKGRhdGE/OiBhbnkpID0+IHZvaWQ7XG4gIHJlamVjdDogKGVycm9yOiBFcnJvcikgPT4gdm9pZDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgc3Vic2NyaWJlcj86IChkYXRhOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIEhhbmRsZXJzID0gUmVjb3JkPHN0cmluZywgSGFuZGxlcj47XG5cbmNvbnN0IGhhbmRsZXJzOiBIYW5kbGVycyA9IHt9O1xuXG4vLyBhIGdlbmVyaWMgbWVzc2FnZSBzZW5kZXIgdGhhdCBjcmVhdGVzIGFuIGV2ZW50LCByZXR1cm5pbmcgYSBwcm9taXNlIHRoYXQgd2lsbFxuLy8gcmVzb2x2ZSBvbmNlIHRoZSBldmVudCBpcyByZXNvbHZlZCAoYnkgdGhlIHJlc3BvbnNlIGxpc3RlbmVyIGp1c3QgYmVsb3cgdGhpcylcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZTxUTWVzc2FnZVR5cGUgZXh0ZW5kcyBNZXNzYWdlVHlwZXNXaXRoTnVsbFJlcXVlc3Q+KG1lc3NhZ2U6IFRNZXNzYWdlVHlwZSk6IFByb21pc2U8UmVzcG9uc2VUeXBlc1tUTWVzc2FnZVR5cGVdPjtcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZTxUTWVzc2FnZVR5cGUgZXh0ZW5kcyBNZXNzYWdlVHlwZXNXaXRoTm9TdWJzY3JpcHRpb25zPihtZXNzYWdlOiBUTWVzc2FnZVR5cGUsIHJlcXVlc3Q6IFJlcXVlc3RUeXBlc1tUTWVzc2FnZVR5cGVdKTogUHJvbWlzZTxSZXNwb25zZVR5cGVzW1RNZXNzYWdlVHlwZV0+O1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlPFRNZXNzYWdlVHlwZSBleHRlbmRzIE1lc3NhZ2VUeXBlc1dpdGhTdWJzY3JpcHRpb25zPihtZXNzYWdlOiBUTWVzc2FnZVR5cGUsIHJlcXVlc3Q6IFJlcXVlc3RUeXBlc1tUTWVzc2FnZVR5cGVdLCBzdWJzY3JpYmVyOiAoZGF0YTogU3Vic2NyaXB0aW9uTWVzc2FnZVR5cGVzW1RNZXNzYWdlVHlwZV0pID0+IHZvaWQpOiBQcm9taXNlPFJlc3BvbnNlVHlwZXNbVE1lc3NhZ2VUeXBlXT47XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZTxUTWVzc2FnZVR5cGUgZXh0ZW5kcyBNZXNzYWdlVHlwZXM+IChtZXNzYWdlOiBUTWVzc2FnZVR5cGUsIHJlcXVlc3Q/OiBSZXF1ZXN0VHlwZXNbVE1lc3NhZ2VUeXBlXSwgc3Vic2NyaWJlcj86IChkYXRhOiB1bmtub3duKSA9PiB2b2lkKTogUHJvbWlzZTxSZXNwb25zZVR5cGVzW1RNZXNzYWdlVHlwZV0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpZCA9IGdldElkKCk7XG5cbiAgICBoYW5kbGVyc1tpZF0gPSB7IHJlamVjdCwgcmVzb2x2ZSwgc3Vic2NyaWJlciB9O1xuXG4gICAgY29uc3QgdHJhbnNwb3J0UmVxdWVzdE1lc3NhZ2U6IFRyYW5zcG9ydFJlcXVlc3RNZXNzYWdlPFRNZXNzYWdlVHlwZT4gPSB7XG4gICAgICBpZCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBvcmlnaW46IE1FU1NBR0VfT1JJR0lOX1BBR0UsXG4gICAgICByZXF1ZXN0OiByZXF1ZXN0IHx8IG51bGwgYXMgUmVxdWVzdFR5cGVzW1RNZXNzYWdlVHlwZV1cbiAgICB9O1xuXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKHRyYW5zcG9ydFJlcXVlc3RNZXNzYWdlLCAnKicpO1xuICB9KTtcbn1cblxuLy8gdGhlIGVuYWJsZSBmdW5jdGlvbiwgY2FsbGVkIGJ5IHRoZSBkYXBwIHRvIGFsbG93IGFjY2Vzc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuYWJsZSAob3JpZ2luOiBzdHJpbmcpOiBQcm9taXNlPEluamVjdGVkPiB7XG4gIGF3YWl0IHNlbmRNZXNzYWdlKCdwdWIoYXV0aG9yaXplLnRhYlYyKScsIHsgb3JpZ2luIH0pO1xuXG4gIHJldHVybiBuZXcgSW5qZWN0ZWQoc2VuZE1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2U8VE1lc3NhZ2VUeXBlIGV4dGVuZHMgTWVzc2FnZVR5cGVzPiAoZGF0YTogVHJhbnNwb3J0UmVzcG9uc2VNZXNzYWdlPFRNZXNzYWdlVHlwZT4gJiB7IHN1YnNjcmlwdGlvbj86IHN0cmluZyB9KTogdm9pZCB7XG4gIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyc1tkYXRhLmlkXTtcblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKGBVbmtub3duIHJlc3BvbnNlOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFoYW5kbGVyLnN1YnNjcmliZXIpIHtcbiAgICBkZWxldGUgaGFuZGxlcnNbZGF0YS5pZF07XG4gIH1cblxuICBpZiAoZGF0YS5zdWJzY3JpcHRpb24pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICAgIChoYW5kbGVyLnN1YnNjcmliZXIgYXMgRnVuY3Rpb24pKGRhdGEuc3Vic2NyaXB0aW9uKTtcbiAgfSBlbHNlIGlmIChkYXRhLmVycm9yKSB7XG4gICAgaGFuZGxlci5yZWplY3QobmV3IFByb3ZpZGVyRXJyb3IoUHJvdmlkZXJFcnJvclR5cGUuSU5URVJOQUxfRVJST1IsIGRhdGEuZXJyb3IsIGRhdGEuZXJyb3JDb2RlKSk7XG4gIH0gZWxzZSB7XG4gICAgaGFuZGxlci5yZXNvbHZlKGRhdGEucmVzcG9uc2UpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RXZtUHJvdmlkZXIgKHZlcnNpb246IHN0cmluZyk6IEV2bVByb3ZpZGVyIHtcbiAgcmV0dXJuIG5ldyBTdWJXYWxsZXRFdm1Qcm92aWRlcihzZW5kTWVzc2FnZSwgdmVyc2lvbik7XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgSURfUFJFRklYIH0gZnJvbSAnLi4vZGVmYXVsdHMnO1xuXG5sZXQgY291bnRlciA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZCAoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke0lEX1BSRUZJWH0uJHtEYXRlLm5vdygpfS4keysrY291bnRlcn1gO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgY29uc3QgZGV0ZWN0VHJhbnNsYXRlID0gKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyA9PiBtZXNzYWdlO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWluamVjdCBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgdHlwZSB7IEluamVjdGVkLCBJbmplY3RlZFdpbmRvdywgSW5qZWN0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBFdm1Qcm92aWRlciB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJy4vcGFja2FnZUluZm8nO1xuXG4vLyBJdCBpcyByZWNvbW1lbmRlZCB0byBhbHdheXMgdXNlIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBzaGllbGQgdGhlIGV4dGVuc2lvbiBhbmQgZGFwcCBmcm9tXG4vLyBhbnkgZnV0dXJlIGNoYW5nZXMuIFRoZSBleHBvc2VkIGludGVyZmFjZSB3aWxsIG1hbmFnZSBhY2Nlc3MgYmV0d2VlbiB0aGUgMiBlbnZpcm9ubWVudHMsXG4vLyBiZSBpdCB2aWEgd2luZG93IChjdXJyZW50KSwgcG9zdE1lc3NhZ2UgKHVuZGVyIGNvbnNpZGVyYXRpb24pIG9yIGFueSBvdGhlciBtZWNoYW5pc21cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RFeHRlbnNpb24gKGVuYWJsZTogKG9yaWdpbjogc3RyaW5nKSA9PiBQcm9taXNlPEluamVjdGVkPiwgeyBuYW1lLCB2ZXJzaW9uIH06IEluamVjdE9wdGlvbnMpOiB2b2lkIHtcbiAgLy8gc21hbGwgaGVscGVyIHdpdGggdGhlIHR5cGVzY3JpcHQgdHlwZXMsIGp1c3QgY2FzdCB3aW5kb3dcbiAgY29uc3Qgd2luZG93SW5qZWN0ID0gd2luZG93IGFzIFdpbmRvdyAmIEluamVjdGVkV2luZG93O1xuXG4gIC8vIGRvbid0IGNsb2JiZXIgdGhlIGV4aXN0aW5nIG9iamVjdCwgd2Ugd2lsbCBhZGQgaXQgKG9yIGNyZWF0ZSBhcyBuZWVkZWQpXG4gIHdpbmRvd0luamVjdC5pbmplY3RlZFdlYjMgPSB3aW5kb3dJbmplY3QuaW5qZWN0ZWRXZWIzIHx8IHt9O1xuXG4gIC8vIGFkZCBvdXIgZW5hYmxlIGZ1bmN0aW9uXG4gIHdpbmRvd0luamVjdC5pbmplY3RlZFdlYjNbbmFtZV0gPSB7XG4gICAgZW5hYmxlOiAob3JpZ2luOiBzdHJpbmcpOiBQcm9taXNlPEluamVjdGVkPiA9PlxuICAgICAgZW5hYmxlKG9yaWdpbiksXG4gICAgdmVyc2lvblxuICB9O1xufVxuXG4vLyBJbmplY3QgRVZNIFByb3ZpZGVyXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0RXZtRXh0ZW5zaW9uIChldm1Qcm92aWRlcjogRXZtUHJvdmlkZXIpOiB2b2lkIHtcbiAgLy8gc21hbGwgaGVscGVyIHdpdGggdGhlIHR5cGVzY3JpcHQgdHlwZXMsIGp1c3QgY2FzdCB3aW5kb3dcbiAgY29uc3Qgd2luZG93SW5qZWN0ID0gd2luZG93IGFzIFdpbmRvdyAmIEluamVjdGVkV2luZG93O1xuXG4gIC8vIGFkZCBvdXIgZW5hYmxlIGZ1bmN0aW9uXG4gIGlmICh3aW5kb3dJbmplY3QuU3ViV2FsbGV0KSB7XG4gICAgLy8gUHJvdmlkZXIgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgaW4gcHJveHkgbW9kZVxuICAgIHdpbmRvd0luamVjdC5TdWJXYWxsZXQucHJvdmlkZXIgPSBldm1Qcm92aWRlcjtcbiAgfSBlbHNlIHtcbiAgICAvLyBQcm92aWRlciBoYXMgYmVlbiBpbml0aWFsaXplZCBpbiBkaXJlY3QgbW9kZVxuICAgIHdpbmRvd0luamVjdC5TdWJXYWxsZXQgPSBldm1Qcm92aWRlcjtcbiAgfVxuXG4gIHdpbmRvd0luamVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc3Vid2FsbGV0I2luaXRpYWxpemVkJykpO1xuXG4gIC8vIFB1Ymxpc2ggdG8gZ2xvYmFsIGlmIHdpbmRvdy5ldGhlcmV1bSBpcyBub3QgYXZhaWxhYmxlXG4gIHdpbmRvd0luamVjdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGlmICghd2luZG93SW5qZWN0LmV0aGVyZXVtKSB7XG4gICAgICB3aW5kb3dJbmplY3QuZXRoZXJldW0gPSBldm1Qcm92aWRlcjtcbiAgICAgIHdpbmRvd0luamVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnZXRoZXJldW0jaW5pdGlhbGl6ZWQnKSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBUb2RvOiBOZWVkIG1vcmUgZGlzY3VzcyB0byBtYWtlIFN1YldhbGxldCBhcyBnbG9iYWwgYmVmb3JlIHdpbmRvdyBsb2FkIGJlY2F1c2UgaXQgY2FuIGJlIGNvbmZsaWN0IHdpdGggTWV0YU1hc2tcbiAgLy8gd2luZG93SW5qZWN0LmV0aGVyZXVtID0gZXZtUHJvdmlkZXI7XG4gIC8vIHdpbmRvd0luamVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnZXRoZXJldW0jaW5pdGlhbGl6ZWQnKSk7XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24taW5qZWN0IGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIFNpbmNlIHdlIGluamVjdCBpbnRvIHBhZ2VzLCB3ZSBza2lwIHRoaXNcbi8vIGltcG9ydCAnLi9kZXRlY3RQYWNrYWdlJztcblxuZXhwb3J0ICogZnJvbSAnLi9idW5kbGUnO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTctMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1pbmplY3QgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLy8gRG8gbm90IGVkaXQsIGF1dG8tZ2VuZXJhdGVkIGJ5IEBwb2xrYWRvdC9kZXZcblxuZXhwb3J0IGNvbnN0IHBhY2thZ2VJbmZvID0geyBuYW1lOiAnQHN1YndhbGxldC9leHRlbnNpb24taW5qZWN0JywgcGF0aDogJ2F1dG8nLCB0eXBlOiAnYXV0bycsIHZlcnNpb246ICcxLjEuMTctMCcgfTtcbiIsIihmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBVdGlsc1xuICBmdW5jdGlvbiBhc3NlcnQgKHZhbCwgbXNnKSB7XG4gICAgaWYgKCF2YWwpIHRocm93IG5ldyBFcnJvcihtc2cgfHwgJ0Fzc2VydGlvbiBmYWlsZWQnKTtcbiAgfVxuXG4gIC8vIENvdWxkIHVzZSBgaW5oZXJpdHNgIG1vZHVsZSwgYnV0IGRvbid0IHdhbnQgdG8gbW92ZSBmcm9tIHNpbmdsZSBmaWxlXG4gIC8vIGFyY2hpdGVjdHVyZSB5ZXQuXG4gIGZ1bmN0aW9uIGluaGVyaXRzIChjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvcjtcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlO1xuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKCk7XG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yO1xuICB9XG5cbiAgLy8gQk5cblxuICBmdW5jdGlvbiBCTiAobnVtYmVyLCBiYXNlLCBlbmRpYW4pIHtcbiAgICBpZiAoQk4uaXNCTihudW1iZXIpKSB7XG4gICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH1cblxuICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgIHRoaXMud29yZHMgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIC8vIFJlZHVjdGlvbiBjb250ZXh0XG4gICAgdGhpcy5yZWQgPSBudWxsO1xuXG4gICAgaWYgKG51bWJlciAhPT0gbnVsbCkge1xuICAgICAgaWYgKGJhc2UgPT09ICdsZScgfHwgYmFzZSA9PT0gJ2JlJykge1xuICAgICAgICBlbmRpYW4gPSBiYXNlO1xuICAgICAgICBiYXNlID0gMTA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luaXQobnVtYmVyIHx8IDAsIGJhc2UgfHwgMTAsIGVuZGlhbiB8fCAnYmUnKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBCTjtcbiAgfSBlbHNlIHtcbiAgICBleHBvcnRzLkJOID0gQk47XG4gIH1cblxuICBCTi5CTiA9IEJOO1xuICBCTi53b3JkU2l6ZSA9IDI2O1xuXG4gIHZhciBCdWZmZXI7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQnVmZmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgQnVmZmVyID0gd2luZG93LkJ1ZmZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG5cbiAgQk4uaXNCTiA9IGZ1bmN0aW9uIGlzQk4gKG51bSkge1xuICAgIGlmIChudW0gaW5zdGFuY2VvZiBCTikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bSAhPT0gbnVsbCAmJiB0eXBlb2YgbnVtID09PSAnb2JqZWN0JyAmJlxuICAgICAgbnVtLmNvbnN0cnVjdG9yLndvcmRTaXplID09PSBCTi53b3JkU2l6ZSAmJiBBcnJheS5pc0FycmF5KG51bS53b3Jkcyk7XG4gIH07XG5cbiAgQk4ubWF4ID0gZnVuY3Rpb24gbWF4IChsZWZ0LCByaWdodCkge1xuICAgIGlmIChsZWZ0LmNtcChyaWdodCkgPiAwKSByZXR1cm4gbGVmdDtcbiAgICByZXR1cm4gcmlnaHQ7XG4gIH07XG5cbiAgQk4ubWluID0gZnVuY3Rpb24gbWluIChsZWZ0LCByaWdodCkge1xuICAgIGlmIChsZWZ0LmNtcChyaWdodCkgPCAwKSByZXR1cm4gbGVmdDtcbiAgICByZXR1cm4gcmlnaHQ7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gaW5pdCAobnVtYmVyLCBiYXNlLCBlbmRpYW4pIHtcbiAgICBpZiAodHlwZW9mIG51bWJlciA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0TnVtYmVyKG51bWJlciwgYmFzZSwgZW5kaWFuKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG51bWJlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0QXJyYXkobnVtYmVyLCBiYXNlLCBlbmRpYW4pO1xuICAgIH1cblxuICAgIGlmIChiYXNlID09PSAnaGV4Jykge1xuICAgICAgYmFzZSA9IDE2O1xuICAgIH1cbiAgICBhc3NlcnQoYmFzZSA9PT0gKGJhc2UgfCAwKSAmJiBiYXNlID49IDIgJiYgYmFzZSA8PSAzNik7XG5cbiAgICBudW1iZXIgPSBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMrL2csICcnKTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGlmIChudW1iZXJbMF0gPT09ICctJykge1xuICAgICAgc3RhcnQrKztcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA8IG51bWJlci5sZW5ndGgpIHtcbiAgICAgIGlmIChiYXNlID09PSAxNikge1xuICAgICAgICB0aGlzLl9wYXJzZUhleChudW1iZXIsIHN0YXJ0LCBlbmRpYW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGFyc2VCYXNlKG51bWJlciwgYmFzZSwgc3RhcnQpO1xuICAgICAgICBpZiAoZW5kaWFuID09PSAnbGUnKSB7XG4gICAgICAgICAgdGhpcy5faW5pdEFycmF5KHRoaXMudG9BcnJheSgpLCBiYXNlLCBlbmRpYW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5faW5pdE51bWJlciA9IGZ1bmN0aW9uIF9pbml0TnVtYmVyIChudW1iZXIsIGJhc2UsIGVuZGlhbikge1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPCAweDQwMDAwMDApIHtcbiAgICAgIHRoaXMud29yZHMgPSBbbnVtYmVyICYgMHgzZmZmZmZmXTtcbiAgICAgIHRoaXMubGVuZ3RoID0gMTtcbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IDB4MTAwMDAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMud29yZHMgPSBbXG4gICAgICAgIG51bWJlciAmIDB4M2ZmZmZmZixcbiAgICAgICAgKG51bWJlciAvIDB4NDAwMDAwMCkgJiAweDNmZmZmZmZcbiAgICAgIF07XG4gICAgICB0aGlzLmxlbmd0aCA9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydChudW1iZXIgPCAweDIwMDAwMDAwMDAwMDAwKTsgLy8gMiBeIDUzICh1bnNhZmUpXG4gICAgICB0aGlzLndvcmRzID0gW1xuICAgICAgICBudW1iZXIgJiAweDNmZmZmZmYsXG4gICAgICAgIChudW1iZXIgLyAweDQwMDAwMDApICYgMHgzZmZmZmZmLFxuICAgICAgICAxXG4gICAgICBdO1xuICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgIH1cblxuICAgIGlmIChlbmRpYW4gIT09ICdsZScpIHJldHVybjtcblxuICAgIC8vIFJldmVyc2UgdGhlIGJ5dGVzXG4gICAgdGhpcy5faW5pdEFycmF5KHRoaXMudG9BcnJheSgpLCBiYXNlLCBlbmRpYW4pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5faW5pdEFycmF5ID0gZnVuY3Rpb24gX2luaXRBcnJheSAobnVtYmVyLCBiYXNlLCBlbmRpYW4pIHtcbiAgICAvLyBQZXJoYXBzIGEgVWludDhBcnJheVxuICAgIGFzc2VydCh0eXBlb2YgbnVtYmVyLmxlbmd0aCA9PT0gJ251bWJlcicpO1xuICAgIGlmIChudW1iZXIubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMud29yZHMgPSBbMF07XG4gICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguY2VpbChudW1iZXIubGVuZ3RoIC8gMyk7XG4gICAgdGhpcy53b3JkcyA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gMDtcbiAgICB9XG5cbiAgICB2YXIgaiwgdztcbiAgICB2YXIgb2ZmID0gMDtcbiAgICBpZiAoZW5kaWFuID09PSAnYmUnKSB7XG4gICAgICBmb3IgKGkgPSBudW1iZXIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaSAtPSAzKSB7XG4gICAgICAgIHcgPSBudW1iZXJbaV0gfCAobnVtYmVyW2kgLSAxXSA8PCA4KSB8IChudW1iZXJbaSAtIDJdIDw8IDE2KTtcbiAgICAgICAgdGhpcy53b3Jkc1tqXSB8PSAodyA8PCBvZmYpICYgMHgzZmZmZmZmO1xuICAgICAgICB0aGlzLndvcmRzW2ogKyAxXSA9ICh3ID4+PiAoMjYgLSBvZmYpKSAmIDB4M2ZmZmZmZjtcbiAgICAgICAgb2ZmICs9IDI0O1xuICAgICAgICBpZiAob2ZmID49IDI2KSB7XG4gICAgICAgICAgb2ZmIC09IDI2O1xuICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZW5kaWFuID09PSAnbGUnKSB7XG4gICAgICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IG51bWJlci5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICB3ID0gbnVtYmVyW2ldIHwgKG51bWJlcltpICsgMV0gPDwgOCkgfCAobnVtYmVyW2kgKyAyXSA8PCAxNik7XG4gICAgICAgIHRoaXMud29yZHNbal0gfD0gKHcgPDwgb2ZmKSAmIDB4M2ZmZmZmZjtcbiAgICAgICAgdGhpcy53b3Jkc1tqICsgMV0gPSAodyA+Pj4gKDI2IC0gb2ZmKSkgJiAweDNmZmZmZmY7XG4gICAgICAgIG9mZiArPSAyNDtcbiAgICAgICAgaWYgKG9mZiA+PSAyNikge1xuICAgICAgICAgIG9mZiAtPSAyNjtcbiAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0cmlwKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGFyc2VIZXg0Qml0cyAoc3RyaW5nLCBpbmRleCkge1xuICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIC8vICcwJyAtICc5J1xuICAgIGlmIChjID49IDQ4ICYmIGMgPD0gNTcpIHtcbiAgICAgIHJldHVybiBjIC0gNDg7XG4gICAgLy8gJ0EnIC0gJ0YnXG4gICAgfSBlbHNlIGlmIChjID49IDY1ICYmIGMgPD0gNzApIHtcbiAgICAgIHJldHVybiBjIC0gNTU7XG4gICAgLy8gJ2EnIC0gJ2YnXG4gICAgfSBlbHNlIGlmIChjID49IDk3ICYmIGMgPD0gMTAyKSB7XG4gICAgICByZXR1cm4gYyAtIDg3O1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NlcnQoZmFsc2UsICdJbnZhbGlkIGNoYXJhY3RlciBpbiAnICsgc3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhleEJ5dGUgKHN0cmluZywgbG93ZXJCb3VuZCwgaW5kZXgpIHtcbiAgICB2YXIgciA9IHBhcnNlSGV4NEJpdHMoc3RyaW5nLCBpbmRleCk7XG4gICAgaWYgKGluZGV4IC0gMSA+PSBsb3dlckJvdW5kKSB7XG4gICAgICByIHw9IHBhcnNlSGV4NEJpdHMoc3RyaW5nLCBpbmRleCAtIDEpIDw8IDQ7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG5cbiAgQk4ucHJvdG90eXBlLl9wYXJzZUhleCA9IGZ1bmN0aW9uIF9wYXJzZUhleCAobnVtYmVyLCBzdGFydCwgZW5kaWFuKSB7XG4gICAgLy8gQ3JlYXRlIHBvc3NpYmx5IGJpZ2dlciBhcnJheSB0byBlbnN1cmUgdGhhdCBpdCBmaXRzIHRoZSBudW1iZXJcbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguY2VpbCgobnVtYmVyLmxlbmd0aCAtIHN0YXJ0KSAvIDYpO1xuICAgIHRoaXMud29yZHMgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IDA7XG4gICAgfVxuXG4gICAgLy8gMjQtYml0cyBjaHVua3NcbiAgICB2YXIgb2ZmID0gMDtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICB2YXIgdztcbiAgICBpZiAoZW5kaWFuID09PSAnYmUnKSB7XG4gICAgICBmb3IgKGkgPSBudW1iZXIubGVuZ3RoIC0gMTsgaSA+PSBzdGFydDsgaSAtPSAyKSB7XG4gICAgICAgIHcgPSBwYXJzZUhleEJ5dGUobnVtYmVyLCBzdGFydCwgaSkgPDwgb2ZmO1xuICAgICAgICB0aGlzLndvcmRzW2pdIHw9IHcgJiAweDNmZmZmZmY7XG4gICAgICAgIGlmIChvZmYgPj0gMTgpIHtcbiAgICAgICAgICBvZmYgLT0gMTg7XG4gICAgICAgICAgaiArPSAxO1xuICAgICAgICAgIHRoaXMud29yZHNbal0gfD0gdyA+Pj4gMjY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2ZmICs9IDg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnNlTGVuZ3RoID0gbnVtYmVyLmxlbmd0aCAtIHN0YXJ0O1xuICAgICAgZm9yIChpID0gcGFyc2VMZW5ndGggJSAyID09PSAwID8gc3RhcnQgKyAxIDogc3RhcnQ7IGkgPCBudW1iZXIubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdyA9IHBhcnNlSGV4Qnl0ZShudW1iZXIsIHN0YXJ0LCBpKSA8PCBvZmY7XG4gICAgICAgIHRoaXMud29yZHNbal0gfD0gdyAmIDB4M2ZmZmZmZjtcbiAgICAgICAgaWYgKG9mZiA+PSAxOCkge1xuICAgICAgICAgIG9mZiAtPSAxODtcbiAgICAgICAgICBqICs9IDE7XG4gICAgICAgICAgdGhpcy53b3Jkc1tqXSB8PSB3ID4+PiAyNjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmYgKz0gODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3N0cmlwKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGFyc2VCYXNlIChzdHIsIHN0YXJ0LCBlbmQsIG11bCkge1xuICAgIHZhciByID0gMDtcbiAgICB2YXIgYiA9IDA7XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKHN0ci5sZW5ndGgsIGVuZCk7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSkgLSA0ODtcblxuICAgICAgciAqPSBtdWw7XG5cbiAgICAgIC8vICdhJ1xuICAgICAgaWYgKGMgPj0gNDkpIHtcbiAgICAgICAgYiA9IGMgLSA0OSArIDB4YTtcblxuICAgICAgLy8gJ0EnXG4gICAgICB9IGVsc2UgaWYgKGMgPj0gMTcpIHtcbiAgICAgICAgYiA9IGMgLSAxNyArIDB4YTtcblxuICAgICAgLy8gJzAnIC0gJzknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiID0gYztcbiAgICAgIH1cbiAgICAgIGFzc2VydChjID49IDAgJiYgYiA8IG11bCwgJ0ludmFsaWQgY2hhcmFjdGVyJyk7XG4gICAgICByICs9IGI7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG5cbiAgQk4ucHJvdG90eXBlLl9wYXJzZUJhc2UgPSBmdW5jdGlvbiBfcGFyc2VCYXNlIChudW1iZXIsIGJhc2UsIHN0YXJ0KSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBhcyB6ZXJvXG4gICAgdGhpcy53b3JkcyA9IFswXTtcbiAgICB0aGlzLmxlbmd0aCA9IDE7XG5cbiAgICAvLyBGaW5kIGxlbmd0aCBvZiBsaW1iIGluIGJhc2VcbiAgICBmb3IgKHZhciBsaW1iTGVuID0gMCwgbGltYlBvdyA9IDE7IGxpbWJQb3cgPD0gMHgzZmZmZmZmOyBsaW1iUG93ICo9IGJhc2UpIHtcbiAgICAgIGxpbWJMZW4rKztcbiAgICB9XG4gICAgbGltYkxlbi0tO1xuICAgIGxpbWJQb3cgPSAobGltYlBvdyAvIGJhc2UpIHwgMDtcblxuICAgIHZhciB0b3RhbCA9IG51bWJlci5sZW5ndGggLSBzdGFydDtcbiAgICB2YXIgbW9kID0gdG90YWwgJSBsaW1iTGVuO1xuICAgIHZhciBlbmQgPSBNYXRoLm1pbih0b3RhbCwgdG90YWwgLSBtb2QpICsgc3RhcnQ7XG5cbiAgICB2YXIgd29yZCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IGxpbWJMZW4pIHtcbiAgICAgIHdvcmQgPSBwYXJzZUJhc2UobnVtYmVyLCBpLCBpICsgbGltYkxlbiwgYmFzZSk7XG5cbiAgICAgIHRoaXMuaW11bG4obGltYlBvdyk7XG4gICAgICBpZiAodGhpcy53b3Jkc1swXSArIHdvcmQgPCAweDQwMDAwMDApIHtcbiAgICAgICAgdGhpcy53b3Jkc1swXSArPSB3b3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faWFkZG4od29yZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1vZCAhPT0gMCkge1xuICAgICAgdmFyIHBvdyA9IDE7XG4gICAgICB3b3JkID0gcGFyc2VCYXNlKG51bWJlciwgaSwgbnVtYmVyLmxlbmd0aCwgYmFzZSk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBtb2Q7IGkrKykge1xuICAgICAgICBwb3cgKj0gYmFzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbXVsbihwb3cpO1xuICAgICAgaWYgKHRoaXMud29yZHNbMF0gKyB3b3JkIDwgMHg0MDAwMDAwKSB7XG4gICAgICAgIHRoaXMud29yZHNbMF0gKz0gd29yZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lhZGRuKHdvcmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3N0cmlwKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5IChkZXN0KSB7XG4gICAgZGVzdC53b3JkcyA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXN0LndvcmRzW2ldID0gdGhpcy53b3Jkc1tpXTtcbiAgICB9XG4gICAgZGVzdC5sZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICBkZXN0Lm5lZ2F0aXZlID0gdGhpcy5uZWdhdGl2ZTtcbiAgICBkZXN0LnJlZCA9IHRoaXMucmVkO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdmUgKGRlc3QsIHNyYykge1xuICAgIGRlc3Qud29yZHMgPSBzcmMud29yZHM7XG4gICAgZGVzdC5sZW5ndGggPSBzcmMubGVuZ3RoO1xuICAgIGRlc3QubmVnYXRpdmUgPSBzcmMubmVnYXRpdmU7XG4gICAgZGVzdC5yZWQgPSBzcmMucmVkO1xuICB9XG5cbiAgQk4ucHJvdG90eXBlLl9tb3ZlID0gZnVuY3Rpb24gX21vdmUgKGRlc3QpIHtcbiAgICBtb3ZlKGRlc3QsIHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lICgpIHtcbiAgICB2YXIgciA9IG5ldyBCTihudWxsKTtcbiAgICB0aGlzLmNvcHkocik7XG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9leHBhbmQgPSBmdW5jdGlvbiBfZXhwYW5kIChzaXplKSB7XG4gICAgd2hpbGUgKHRoaXMubGVuZ3RoIDwgc2l6ZSkge1xuICAgICAgdGhpcy53b3Jkc1t0aGlzLmxlbmd0aCsrXSA9IDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIFJlbW92ZSBsZWFkaW5nIGAwYCBmcm9tIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuX3N0cmlwID0gZnVuY3Rpb24gc3RyaXAgKCkge1xuICAgIHdoaWxlICh0aGlzLmxlbmd0aCA+IDEgJiYgdGhpcy53b3Jkc1t0aGlzLmxlbmd0aCAtIDFdID09PSAwKSB7XG4gICAgICB0aGlzLmxlbmd0aC0tO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbm9ybVNpZ24oKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX25vcm1TaWduID0gZnVuY3Rpb24gX25vcm1TaWduICgpIHtcbiAgICAvLyAtMCA9IDBcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEgJiYgdGhpcy53b3Jkc1swXSA9PT0gMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIENoZWNrIFN5bWJvbC5mb3IgYmVjYXVzZSBub3QgZXZlcnl3aGVyZSB3aGVyZSBTeW1ib2wgZGVmaW5lZFxuICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3ltYm9sI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgQk4ucHJvdG90eXBlW1N5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJyldID0gaW5zcGVjdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBCTi5wcm90b3R5cGUuaW5zcGVjdCA9IGluc3BlY3Q7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIEJOLnByb3RvdHlwZS5pbnNwZWN0ID0gaW5zcGVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICAgIHJldHVybiAodGhpcy5yZWQgPyAnPEJOLVI6ICcgOiAnPEJOOiAnKSArIHRoaXMudG9TdHJpbmcoMTYpICsgJz4nO1xuICB9XG5cbiAgLypcblxuICB2YXIgemVyb3MgPSBbXTtcbiAgdmFyIGdyb3VwU2l6ZXMgPSBbXTtcbiAgdmFyIGdyb3VwQmFzZXMgPSBbXTtcblxuICB2YXIgcyA9ICcnO1xuICB2YXIgaSA9IC0xO1xuICB3aGlsZSAoKytpIDwgQk4ud29yZFNpemUpIHtcbiAgICB6ZXJvc1tpXSA9IHM7XG4gICAgcyArPSAnMCc7XG4gIH1cbiAgZ3JvdXBTaXplc1swXSA9IDA7XG4gIGdyb3VwU2l6ZXNbMV0gPSAwO1xuICBncm91cEJhc2VzWzBdID0gMDtcbiAgZ3JvdXBCYXNlc1sxXSA9IDA7XG4gIHZhciBiYXNlID0gMiAtIDE7XG4gIHdoaWxlICgrK2Jhc2UgPCAzNiArIDEpIHtcbiAgICB2YXIgZ3JvdXBTaXplID0gMDtcbiAgICB2YXIgZ3JvdXBCYXNlID0gMTtcbiAgICB3aGlsZSAoZ3JvdXBCYXNlIDwgKDEgPDwgQk4ud29yZFNpemUpIC8gYmFzZSkge1xuICAgICAgZ3JvdXBCYXNlICo9IGJhc2U7XG4gICAgICBncm91cFNpemUgKz0gMTtcbiAgICB9XG4gICAgZ3JvdXBTaXplc1tiYXNlXSA9IGdyb3VwU2l6ZTtcbiAgICBncm91cEJhc2VzW2Jhc2VdID0gZ3JvdXBCYXNlO1xuICB9XG5cbiAgKi9cblxuICB2YXIgemVyb3MgPSBbXG4gICAgJycsXG4gICAgJzAnLFxuICAgICcwMCcsXG4gICAgJzAwMCcsXG4gICAgJzAwMDAnLFxuICAgICcwMDAwMCcsXG4gICAgJzAwMDAwMCcsXG4gICAgJzAwMDAwMDAnLFxuICAgICcwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnXG4gIF07XG5cbiAgdmFyIGdyb3VwU2l6ZXMgPSBbXG4gICAgMCwgMCxcbiAgICAyNSwgMTYsIDEyLCAxMSwgMTAsIDksIDgsXG4gICAgOCwgNywgNywgNywgNywgNiwgNixcbiAgICA2LCA2LCA2LCA2LCA2LCA1LCA1LFxuICAgIDUsIDUsIDUsIDUsIDUsIDUsIDUsXG4gICAgNSwgNSwgNSwgNSwgNSwgNSwgNVxuICBdO1xuXG4gIHZhciBncm91cEJhc2VzID0gW1xuICAgIDAsIDAsXG4gICAgMzM1NTQ0MzIsIDQzMDQ2NzIxLCAxNjc3NzIxNiwgNDg4MjgxMjUsIDYwNDY2MTc2LCA0MDM1MzYwNywgMTY3NzcyMTYsXG4gICAgNDMwNDY3MjEsIDEwMDAwMDAwLCAxOTQ4NzE3MSwgMzU4MzE4MDgsIDYyNzQ4NTE3LCA3NTI5NTM2LCAxMTM5MDYyNSxcbiAgICAxNjc3NzIxNiwgMjQxMzc1NjksIDM0MDEyMjI0LCA0NzA0NTg4MSwgNjQwMDAwMDAsIDQwODQxMDEsIDUxNTM2MzIsXG4gICAgNjQzNjM0MywgNzk2MjYyNCwgOTc2NTYyNSwgMTE4ODEzNzYsIDE0MzQ4OTA3LCAxNzIxMDM2OCwgMjA1MTExNDksXG4gICAgMjQzMDAwMDAsIDI4NjI5MTUxLCAzMzU1NDQzMiwgMzkxMzUzOTMsIDQ1NDM1NDI0LCA1MjUyMTg3NSwgNjA0NjYxNzZcbiAgXTtcblxuICBCTi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoYmFzZSwgcGFkZGluZykge1xuICAgIGJhc2UgPSBiYXNlIHx8IDEwO1xuICAgIHBhZGRpbmcgPSBwYWRkaW5nIHwgMCB8fCAxO1xuXG4gICAgdmFyIG91dDtcbiAgICBpZiAoYmFzZSA9PT0gMTYgfHwgYmFzZSA9PT0gJ2hleCcpIHtcbiAgICAgIG91dCA9ICcnO1xuICAgICAgdmFyIG9mZiA9IDA7XG4gICAgICB2YXIgY2FycnkgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB3ID0gdGhpcy53b3Jkc1tpXTtcbiAgICAgICAgdmFyIHdvcmQgPSAoKCh3IDw8IG9mZikgfCBjYXJyeSkgJiAweGZmZmZmZikudG9TdHJpbmcoMTYpO1xuICAgICAgICBjYXJyeSA9ICh3ID4+PiAoMjQgLSBvZmYpKSAmIDB4ZmZmZmZmO1xuICAgICAgICBvZmYgKz0gMjtcbiAgICAgICAgaWYgKG9mZiA+PSAyNikge1xuICAgICAgICAgIG9mZiAtPSAyNjtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcnJ5ICE9PSAwIHx8IGkgIT09IHRoaXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIG91dCA9IHplcm9zWzYgLSB3b3JkLmxlbmd0aF0gKyB3b3JkICsgb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dCA9IHdvcmQgKyBvdXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgICBvdXQgPSBjYXJyeS50b1N0cmluZygxNikgKyBvdXQ7XG4gICAgICB9XG4gICAgICB3aGlsZSAob3V0Lmxlbmd0aCAlIHBhZGRpbmcgIT09IDApIHtcbiAgICAgICAgb3V0ID0gJzAnICsgb3V0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHtcbiAgICAgICAgb3V0ID0gJy0nICsgb3V0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBpZiAoYmFzZSA9PT0gKGJhc2UgfCAwKSAmJiBiYXNlID49IDIgJiYgYmFzZSA8PSAzNikge1xuICAgICAgLy8gdmFyIGdyb3VwU2l6ZSA9IE1hdGguZmxvb3IoQk4ud29yZFNpemUgKiBNYXRoLkxOMiAvIE1hdGgubG9nKGJhc2UpKTtcbiAgICAgIHZhciBncm91cFNpemUgPSBncm91cFNpemVzW2Jhc2VdO1xuICAgICAgLy8gdmFyIGdyb3VwQmFzZSA9IE1hdGgucG93KGJhc2UsIGdyb3VwU2l6ZSk7XG4gICAgICB2YXIgZ3JvdXBCYXNlID0gZ3JvdXBCYXNlc1tiYXNlXTtcbiAgICAgIG91dCA9ICcnO1xuICAgICAgdmFyIGMgPSB0aGlzLmNsb25lKCk7XG4gICAgICBjLm5lZ2F0aXZlID0gMDtcbiAgICAgIHdoaWxlICghYy5pc1plcm8oKSkge1xuICAgICAgICB2YXIgciA9IGMubW9kcm4oZ3JvdXBCYXNlKS50b1N0cmluZyhiYXNlKTtcbiAgICAgICAgYyA9IGMuaWRpdm4oZ3JvdXBCYXNlKTtcblxuICAgICAgICBpZiAoIWMuaXNaZXJvKCkpIHtcbiAgICAgICAgICBvdXQgPSB6ZXJvc1tncm91cFNpemUgLSByLmxlbmd0aF0gKyByICsgb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dCA9IHIgKyBvdXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzWmVybygpKSB7XG4gICAgICAgIG91dCA9ICcwJyArIG91dDtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChvdXQubGVuZ3RoICUgcGFkZGluZyAhPT0gMCkge1xuICAgICAgICBvdXQgPSAnMCcgKyBvdXQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgICBvdXQgPSAnLScgKyBvdXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIGFzc2VydChmYWxzZSwgJ0Jhc2Ugc2hvdWxkIGJlIGJldHdlZW4gMiBhbmQgMzYnKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudG9OdW1iZXIgPSBmdW5jdGlvbiB0b051bWJlciAoKSB7XG4gICAgdmFyIHJldCA9IHRoaXMud29yZHNbMF07XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXQgKz0gdGhpcy53b3Jkc1sxXSAqIDB4NDAwMDAwMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSAzICYmIHRoaXMud29yZHNbMl0gPT09IDB4MDEpIHtcbiAgICAgIC8vIE5PVEU6IGF0IHRoaXMgc3RhZ2UgaXQgaXMga25vd24gdGhhdCB0aGUgdG9wIGJpdCBpcyBzZXRcbiAgICAgIHJldCArPSAweDEwMDAwMDAwMDAwMDAwICsgKHRoaXMud29yZHNbMV0gKiAweDQwMDAwMDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPiAyKSB7XG4gICAgICBhc3NlcnQoZmFsc2UsICdOdW1iZXIgY2FuIG9ubHkgc2FmZWx5IHN0b3JlIHVwIHRvIDUzIGJpdHMnKTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLm5lZ2F0aXZlICE9PSAwKSA/IC1yZXQgOiByZXQ7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoMTYsIDIpO1xuICB9O1xuXG4gIGlmIChCdWZmZXIpIHtcbiAgICBCTi5wcm90b3R5cGUudG9CdWZmZXIgPSBmdW5jdGlvbiB0b0J1ZmZlciAoZW5kaWFuLCBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvQXJyYXlMaWtlKEJ1ZmZlciwgZW5kaWFuLCBsZW5ndGgpO1xuICAgIH07XG4gIH1cblxuICBCTi5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkgKGVuZGlhbiwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9BcnJheUxpa2UoQXJyYXksIGVuZGlhbiwgbGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgYWxsb2NhdGUgPSBmdW5jdGlvbiBhbGxvY2F0ZSAoQXJyYXlUeXBlLCBzaXplKSB7XG4gICAgaWYgKEFycmF5VHlwZS5hbGxvY1Vuc2FmZSkge1xuICAgICAgcmV0dXJuIEFycmF5VHlwZS5hbGxvY1Vuc2FmZShzaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBcnJheVR5cGUoc2l6ZSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnRvQXJyYXlMaWtlID0gZnVuY3Rpb24gdG9BcnJheUxpa2UgKEFycmF5VHlwZSwgZW5kaWFuLCBsZW5ndGgpIHtcbiAgICB0aGlzLl9zdHJpcCgpO1xuXG4gICAgdmFyIGJ5dGVMZW5ndGggPSB0aGlzLmJ5dGVMZW5ndGgoKTtcbiAgICB2YXIgcmVxTGVuZ3RoID0gbGVuZ3RoIHx8IE1hdGgubWF4KDEsIGJ5dGVMZW5ndGgpO1xuICAgIGFzc2VydChieXRlTGVuZ3RoIDw9IHJlcUxlbmd0aCwgJ2J5dGUgYXJyYXkgbG9uZ2VyIHRoYW4gZGVzaXJlZCBsZW5ndGgnKTtcbiAgICBhc3NlcnQocmVxTGVuZ3RoID4gMCwgJ1JlcXVlc3RlZCBhcnJheSBsZW5ndGggPD0gMCcpO1xuXG4gICAgdmFyIHJlcyA9IGFsbG9jYXRlKEFycmF5VHlwZSwgcmVxTGVuZ3RoKTtcbiAgICB2YXIgcG9zdGZpeCA9IGVuZGlhbiA9PT0gJ2xlJyA/ICdMRScgOiAnQkUnO1xuICAgIHRoaXNbJ190b0FycmF5TGlrZScgKyBwb3N0Zml4XShyZXMsIGJ5dGVMZW5ndGgpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl90b0FycmF5TGlrZUxFID0gZnVuY3Rpb24gX3RvQXJyYXlMaWtlTEUgKHJlcywgYnl0ZUxlbmd0aCkge1xuICAgIHZhciBwb3NpdGlvbiA9IDA7XG4gICAgdmFyIGNhcnJ5ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBzaGlmdCA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgd29yZCA9ICh0aGlzLndvcmRzW2ldIDw8IHNoaWZ0KSB8IGNhcnJ5O1xuXG4gICAgICByZXNbcG9zaXRpb24rK10gPSB3b3JkICYgMHhmZjtcbiAgICAgIGlmIChwb3NpdGlvbiA8IHJlcy5sZW5ndGgpIHtcbiAgICAgICAgcmVzW3Bvc2l0aW9uKytdID0gKHdvcmQgPj4gOCkgJiAweGZmO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uIDwgcmVzLmxlbmd0aCkge1xuICAgICAgICByZXNbcG9zaXRpb24rK10gPSAod29yZCA+PiAxNikgJiAweGZmO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hpZnQgPT09IDYpIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgcmVzLmxlbmd0aCkge1xuICAgICAgICAgIHJlc1twb3NpdGlvbisrXSA9ICh3b3JkID4+IDI0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgY2FycnkgPSAwO1xuICAgICAgICBzaGlmdCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXJyeSA9IHdvcmQgPj4+IDI0O1xuICAgICAgICBzaGlmdCArPSAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IHJlcy5sZW5ndGgpIHtcbiAgICAgIHJlc1twb3NpdGlvbisrXSA9IGNhcnJ5O1xuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPCByZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc1twb3NpdGlvbisrXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5fdG9BcnJheUxpa2VCRSA9IGZ1bmN0aW9uIF90b0FycmF5TGlrZUJFIChyZXMsIGJ5dGVMZW5ndGgpIHtcbiAgICB2YXIgcG9zaXRpb24gPSByZXMubGVuZ3RoIC0gMTtcbiAgICB2YXIgY2FycnkgPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIHNoaWZ0ID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB3b3JkID0gKHRoaXMud29yZHNbaV0gPDwgc2hpZnQpIHwgY2Fycnk7XG5cbiAgICAgIHJlc1twb3NpdGlvbi0tXSA9IHdvcmQgJiAweGZmO1xuICAgICAgaWYgKHBvc2l0aW9uID49IDApIHtcbiAgICAgICAgcmVzW3Bvc2l0aW9uLS1dID0gKHdvcmQgPj4gOCkgJiAweGZmO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uID49IDApIHtcbiAgICAgICAgcmVzW3Bvc2l0aW9uLS1dID0gKHdvcmQgPj4gMTYpICYgMHhmZjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaWZ0ID09PSA2KSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSAwKSB7XG4gICAgICAgICAgcmVzW3Bvc2l0aW9uLS1dID0gKHdvcmQgPj4gMjQpICYgMHhmZjtcbiAgICAgICAgfVxuICAgICAgICBjYXJyeSA9IDA7XG4gICAgICAgIHNoaWZ0ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcnJ5ID0gd29yZCA+Pj4gMjQ7XG4gICAgICAgIHNoaWZ0ICs9IDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID49IDApIHtcbiAgICAgIHJlc1twb3NpdGlvbi0tXSA9IGNhcnJ5O1xuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPj0gMCkge1xuICAgICAgICByZXNbcG9zaXRpb24tLV0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAoTWF0aC5jbHozMikge1xuICAgIEJOLnByb3RvdHlwZS5fY291bnRCaXRzID0gZnVuY3Rpb24gX2NvdW50Qml0cyAodykge1xuICAgICAgcmV0dXJuIDMyIC0gTWF0aC5jbHozMih3KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIEJOLnByb3RvdHlwZS5fY291bnRCaXRzID0gZnVuY3Rpb24gX2NvdW50Qml0cyAodykge1xuICAgICAgdmFyIHQgPSB3O1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgaWYgKHQgPj0gMHgxMDAwKSB7XG4gICAgICAgIHIgKz0gMTM7XG4gICAgICAgIHQgPj4+PSAxMztcbiAgICAgIH1cbiAgICAgIGlmICh0ID49IDB4NDApIHtcbiAgICAgICAgciArPSA3O1xuICAgICAgICB0ID4+Pj0gNztcbiAgICAgIH1cbiAgICAgIGlmICh0ID49IDB4OCkge1xuICAgICAgICByICs9IDQ7XG4gICAgICAgIHQgPj4+PSA0O1xuICAgICAgfVxuICAgICAgaWYgKHQgPj0gMHgwMikge1xuICAgICAgICByICs9IDI7XG4gICAgICAgIHQgPj4+PSAyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHIgKyB0O1xuICAgIH07XG4gIH1cblxuICBCTi5wcm90b3R5cGUuX3plcm9CaXRzID0gZnVuY3Rpb24gX3plcm9CaXRzICh3KSB7XG4gICAgLy8gU2hvcnQtY3V0XG4gICAgaWYgKHcgPT09IDApIHJldHVybiAyNjtcblxuICAgIHZhciB0ID0gdztcbiAgICB2YXIgciA9IDA7XG4gICAgaWYgKCh0ICYgMHgxZmZmKSA9PT0gMCkge1xuICAgICAgciArPSAxMztcbiAgICAgIHQgPj4+PSAxMztcbiAgICB9XG4gICAgaWYgKCh0ICYgMHg3ZikgPT09IDApIHtcbiAgICAgIHIgKz0gNztcbiAgICAgIHQgPj4+PSA3O1xuICAgIH1cbiAgICBpZiAoKHQgJiAweGYpID09PSAwKSB7XG4gICAgICByICs9IDQ7XG4gICAgICB0ID4+Pj0gNDtcbiAgICB9XG4gICAgaWYgKCh0ICYgMHgzKSA9PT0gMCkge1xuICAgICAgciArPSAyO1xuICAgICAgdCA+Pj49IDI7XG4gICAgfVxuICAgIGlmICgodCAmIDB4MSkgPT09IDApIHtcbiAgICAgIHIrKztcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgLy8gUmV0dXJuIG51bWJlciBvZiB1c2VkIGJpdHMgaW4gYSBCTlxuICBCTi5wcm90b3R5cGUuYml0TGVuZ3RoID0gZnVuY3Rpb24gYml0TGVuZ3RoICgpIHtcbiAgICB2YXIgdyA9IHRoaXMud29yZHNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgaGkgPSB0aGlzLl9jb3VudEJpdHModyk7XG4gICAgcmV0dXJuICh0aGlzLmxlbmd0aCAtIDEpICogMjYgKyBoaTtcbiAgfTtcblxuICBmdW5jdGlvbiB0b0JpdEFycmF5IChudW0pIHtcbiAgICB2YXIgdyA9IG5ldyBBcnJheShudW0uYml0TGVuZ3RoKCkpO1xuXG4gICAgZm9yICh2YXIgYml0ID0gMDsgYml0IDwgdy5sZW5ndGg7IGJpdCsrKSB7XG4gICAgICB2YXIgb2ZmID0gKGJpdCAvIDI2KSB8IDA7XG4gICAgICB2YXIgd2JpdCA9IGJpdCAlIDI2O1xuXG4gICAgICB3W2JpdF0gPSAobnVtLndvcmRzW29mZl0gPj4+IHdiaXQpICYgMHgwMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdztcbiAgfVxuXG4gIC8vIE51bWJlciBvZiB0cmFpbGluZyB6ZXJvIGJpdHNcbiAgQk4ucHJvdG90eXBlLnplcm9CaXRzID0gZnVuY3Rpb24gemVyb0JpdHMgKCkge1xuICAgIGlmICh0aGlzLmlzWmVybygpKSByZXR1cm4gMDtcblxuICAgIHZhciByID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBiID0gdGhpcy5femVyb0JpdHModGhpcy53b3Jkc1tpXSk7XG4gICAgICByICs9IGI7XG4gICAgICBpZiAoYiAhPT0gMjYpIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIGJ5dGVMZW5ndGggKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5iaXRMZW5ndGgoKSAvIDgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS50b1R3b3MgPSBmdW5jdGlvbiB0b1R3b3MgKHdpZHRoKSB7XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmFicygpLmlub3RuKHdpZHRoKS5pYWRkbigxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZnJvbVR3b3MgPSBmdW5jdGlvbiBmcm9tVHdvcyAod2lkdGgpIHtcbiAgICBpZiAodGhpcy50ZXN0bih3aWR0aCAtIDEpKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub3RuKHdpZHRoKS5pYWRkbigxKS5pbmVnKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsb25lKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzTmVnID0gZnVuY3Rpb24gaXNOZWcgKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0aXZlICE9PSAwO1xuICB9O1xuXG4gIC8vIFJldHVybiBuZWdhdGl2ZSBjbG9uZSBvZiBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLm5lZyA9IGZ1bmN0aW9uIG5lZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pbmVnKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmluZWcgPSBmdW5jdGlvbiBpbmVnICgpIHtcbiAgICBpZiAoIXRoaXMuaXNaZXJvKCkpIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgXj0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBPciBgbnVtYCB3aXRoIGB0aGlzYCBpbi1wbGFjZVxuICBCTi5wcm90b3R5cGUuaXVvciA9IGZ1bmN0aW9uIGl1b3IgKG51bSkge1xuICAgIHdoaWxlICh0aGlzLmxlbmd0aCA8IG51bS5sZW5ndGgpIHtcbiAgICAgIHRoaXMud29yZHNbdGhpcy5sZW5ndGgrK10gPSAwO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gdGhpcy53b3Jkc1tpXSB8IG51bS53b3Jkc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaW9yID0gZnVuY3Rpb24gaW9yIChudW0pIHtcbiAgICBhc3NlcnQoKHRoaXMubmVnYXRpdmUgfCBudW0ubmVnYXRpdmUpID09PSAwKTtcbiAgICByZXR1cm4gdGhpcy5pdW9yKG51bSk7XG4gIH07XG5cbiAgLy8gT3IgYG51bWAgd2l0aCBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gb3IgKG51bSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaW9yKG51bSk7XG4gICAgcmV0dXJuIG51bS5jbG9uZSgpLmlvcih0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudW9yID0gZnVuY3Rpb24gdW9yIChudW0pIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSByZXR1cm4gdGhpcy5jbG9uZSgpLml1b3IobnVtKTtcbiAgICByZXR1cm4gbnVtLmNsb25lKCkuaXVvcih0aGlzKTtcbiAgfTtcblxuICAvLyBBbmQgYG51bWAgd2l0aCBgdGhpc2AgaW4tcGxhY2VcbiAgQk4ucHJvdG90eXBlLml1YW5kID0gZnVuY3Rpb24gaXVhbmQgKG51bSkge1xuICAgIC8vIGIgPSBtaW4tbGVuZ3RoKG51bSwgdGhpcylcbiAgICB2YXIgYjtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSB7XG4gICAgICBiID0gbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBiID0gdGhpcztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMud29yZHNbaV0gPSB0aGlzLndvcmRzW2ldICYgbnVtLndvcmRzW2ldO1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gYi5sZW5ndGg7XG5cbiAgICByZXR1cm4gdGhpcy5fc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaWFuZCA9IGZ1bmN0aW9uIGlhbmQgKG51bSkge1xuICAgIGFzc2VydCgodGhpcy5uZWdhdGl2ZSB8IG51bS5uZWdhdGl2ZSkgPT09IDApO1xuICAgIHJldHVybiB0aGlzLml1YW5kKG51bSk7XG4gIH07XG5cbiAgLy8gQW5kIGBudW1gIHdpdGggYHRoaXNgXG4gIEJOLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbiBhbmQgKG51bSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaWFuZChudW0pO1xuICAgIHJldHVybiBudW0uY2xvbmUoKS5pYW5kKHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51YW5kID0gZnVuY3Rpb24gdWFuZCAobnVtKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkgcmV0dXJuIHRoaXMuY2xvbmUoKS5pdWFuZChudW0pO1xuICAgIHJldHVybiBudW0uY2xvbmUoKS5pdWFuZCh0aGlzKTtcbiAgfTtcblxuICAvLyBYb3IgYG51bWAgd2l0aCBgdGhpc2AgaW4tcGxhY2VcbiAgQk4ucHJvdG90eXBlLml1eG9yID0gZnVuY3Rpb24gaXV4b3IgKG51bSkge1xuICAgIC8vIGEubGVuZ3RoID4gYi5sZW5ndGhcbiAgICB2YXIgYTtcbiAgICB2YXIgYjtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSB7XG4gICAgICBhID0gdGhpcztcbiAgICAgIGIgPSBudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSBudW07XG4gICAgICBiID0gdGhpcztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMud29yZHNbaV0gPSBhLndvcmRzW2ldIF4gYi53b3Jkc1tpXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcyAhPT0gYSkge1xuICAgICAgZm9yICg7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMud29yZHNbaV0gPSBhLndvcmRzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gYS5sZW5ndGg7XG5cbiAgICByZXR1cm4gdGhpcy5fc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaXhvciA9IGZ1bmN0aW9uIGl4b3IgKG51bSkge1xuICAgIGFzc2VydCgodGhpcy5uZWdhdGl2ZSB8IG51bS5uZWdhdGl2ZSkgPT09IDApO1xuICAgIHJldHVybiB0aGlzLml1eG9yKG51bSk7XG4gIH07XG5cbiAgLy8gWG9yIGBudW1gIHdpdGggYHRoaXNgXG4gIEJOLnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiB4b3IgKG51bSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaXhvcihudW0pO1xuICAgIHJldHVybiBudW0uY2xvbmUoKS5peG9yKHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51eG9yID0gZnVuY3Rpb24gdXhvciAobnVtKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkgcmV0dXJuIHRoaXMuY2xvbmUoKS5pdXhvcihudW0pO1xuICAgIHJldHVybiBudW0uY2xvbmUoKS5pdXhvcih0aGlzKTtcbiAgfTtcblxuICAvLyBOb3QgYGB0aGlzYGAgd2l0aCBgYHdpZHRoYGAgYml0d2lkdGhcbiAgQk4ucHJvdG90eXBlLmlub3RuID0gZnVuY3Rpb24gaW5vdG4gKHdpZHRoKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicgJiYgd2lkdGggPj0gMCk7XG5cbiAgICB2YXIgYnl0ZXNOZWVkZWQgPSBNYXRoLmNlaWwod2lkdGggLyAyNikgfCAwO1xuICAgIHZhciBiaXRzTGVmdCA9IHdpZHRoICUgMjY7XG5cbiAgICAvLyBFeHRlbmQgdGhlIGJ1ZmZlciB3aXRoIGxlYWRpbmcgemVyb2VzXG4gICAgdGhpcy5fZXhwYW5kKGJ5dGVzTmVlZGVkKTtcblxuICAgIGlmIChiaXRzTGVmdCA+IDApIHtcbiAgICAgIGJ5dGVzTmVlZGVkLS07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGNvbXBsZXRlIHdvcmRzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlc05lZWRlZDsgaSsrKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gfnRoaXMud29yZHNbaV0gJiAweDNmZmZmZmY7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHRoZSByZXNpZHVlXG4gICAgaWYgKGJpdHNMZWZ0ID4gMCkge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IH50aGlzLndvcmRzW2ldICYgKDB4M2ZmZmZmZiA+PiAoMjYgLSBiaXRzTGVmdCkpO1xuICAgIH1cblxuICAgIC8vIEFuZCByZW1vdmUgbGVhZGluZyB6ZXJvZXNcbiAgICByZXR1cm4gdGhpcy5fc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUubm90biA9IGZ1bmN0aW9uIG5vdG4gKHdpZHRoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pbm90bih3aWR0aCk7XG4gIH07XG5cbiAgLy8gU2V0IGBiaXRgIG9mIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuc2V0biA9IGZ1bmN0aW9uIHNldG4gKGJpdCwgdmFsKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiaXQgPT09ICdudW1iZXInICYmIGJpdCA+PSAwKTtcblxuICAgIHZhciBvZmYgPSAoYml0IC8gMjYpIHwgMDtcbiAgICB2YXIgd2JpdCA9IGJpdCAlIDI2O1xuXG4gICAgdGhpcy5fZXhwYW5kKG9mZiArIDEpO1xuXG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy53b3Jkc1tvZmZdID0gdGhpcy53b3Jkc1tvZmZdIHwgKDEgPDwgd2JpdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZHNbb2ZmXSA9IHRoaXMud29yZHNbb2ZmXSAmIH4oMSA8PCB3Yml0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc3RyaXAoKTtcbiAgfTtcblxuICAvLyBBZGQgYG51bWAgdG8gYHRoaXNgIGluLXBsYWNlXG4gIEJOLnByb3RvdHlwZS5pYWRkID0gZnVuY3Rpb24gaWFkZCAobnVtKSB7XG4gICAgdmFyIHI7XG5cbiAgICAvLyBuZWdhdGl2ZSArIHBvc2l0aXZlXG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDAgJiYgbnVtLm5lZ2F0aXZlID09PSAwKSB7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMDtcbiAgICAgIHIgPSB0aGlzLmlzdWIobnVtKTtcbiAgICAgIHRoaXMubmVnYXRpdmUgXj0gMTtcbiAgICAgIHJldHVybiB0aGlzLl9ub3JtU2lnbigpO1xuXG4gICAgLy8gcG9zaXRpdmUgKyBuZWdhdGl2ZVxuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGl2ZSA9PT0gMCAmJiBudW0ubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIG51bS5uZWdhdGl2ZSA9IDA7XG4gICAgICByID0gdGhpcy5pc3ViKG51bSk7XG4gICAgICBudW0ubmVnYXRpdmUgPSAxO1xuICAgICAgcmV0dXJuIHIuX25vcm1TaWduKCk7XG4gICAgfVxuXG4gICAgLy8gYS5sZW5ndGggPiBiLmxlbmd0aFxuICAgIHZhciBhLCBiO1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHtcbiAgICAgIGEgPSB0aGlzO1xuICAgICAgYiA9IG51bTtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IG51bTtcbiAgICAgIGIgPSB0aGlzO1xuICAgIH1cblxuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICByID0gKGEud29yZHNbaV0gfCAwKSArIChiLndvcmRzW2ldIHwgMCkgKyBjYXJyeTtcbiAgICAgIHRoaXMud29yZHNbaV0gPSByICYgMHgzZmZmZmZmO1xuICAgICAgY2FycnkgPSByID4+PiAyNjtcbiAgICB9XG4gICAgZm9yICg7IGNhcnJ5ICE9PSAwICYmIGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICByID0gKGEud29yZHNbaV0gfCAwKSArIGNhcnJ5O1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHIgJiAweDNmZmZmZmY7XG4gICAgICBjYXJyeSA9IHIgPj4+IDI2O1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgaWYgKGNhcnJ5ICE9PSAwKSB7XG4gICAgICB0aGlzLndvcmRzW3RoaXMubGVuZ3RoXSA9IGNhcnJ5O1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAvLyBDb3B5IHRoZSByZXN0IG9mIHRoZSB3b3Jkc1xuICAgIH0gZWxzZSBpZiAoYSAhPT0gdGhpcykge1xuICAgICAgZm9yICg7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMud29yZHNbaV0gPSBhLndvcmRzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEFkZCBgbnVtYCB0byBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAobnVtKSB7XG4gICAgdmFyIHJlcztcbiAgICBpZiAobnVtLm5lZ2F0aXZlICE9PSAwICYmIHRoaXMubmVnYXRpdmUgPT09IDApIHtcbiAgICAgIG51bS5uZWdhdGl2ZSA9IDA7XG4gICAgICByZXMgPSB0aGlzLnN1YihudW0pO1xuICAgICAgbnVtLm5lZ2F0aXZlIF49IDE7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSBpZiAobnVtLm5lZ2F0aXZlID09PSAwICYmIHRoaXMubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgICAgcmVzID0gbnVtLnN1Yih0aGlzKTtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSByZXR1cm4gdGhpcy5jbG9uZSgpLmlhZGQobnVtKTtcblxuICAgIHJldHVybiBudW0uY2xvbmUoKS5pYWRkKHRoaXMpO1xuICB9O1xuXG4gIC8vIFN1YnRyYWN0IGBudW1gIGZyb20gYHRoaXNgIGluLXBsYWNlXG4gIEJOLnByb3RvdHlwZS5pc3ViID0gZnVuY3Rpb24gaXN1YiAobnVtKSB7XG4gICAgLy8gdGhpcyAtICgtbnVtKSA9IHRoaXMgKyBudW1cbiAgICBpZiAobnVtLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICBudW0ubmVnYXRpdmUgPSAwO1xuICAgICAgdmFyIHIgPSB0aGlzLmlhZGQobnVtKTtcbiAgICAgIG51bS5uZWdhdGl2ZSA9IDE7XG4gICAgICByZXR1cm4gci5fbm9ybVNpZ24oKTtcblxuICAgIC8vIC10aGlzIC0gbnVtID0gLSh0aGlzICsgbnVtKVxuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICB0aGlzLmlhZGQobnVtKTtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuICAgICAgcmV0dXJuIHRoaXMuX25vcm1TaWduKCk7XG4gICAgfVxuXG4gICAgLy8gQXQgdGhpcyBwb2ludCBib3RoIG51bWJlcnMgYXJlIHBvc2l0aXZlXG4gICAgdmFyIGNtcCA9IHRoaXMuY21wKG51bSk7XG5cbiAgICAvLyBPcHRpbWl6YXRpb24gLSB6ZXJvaWZ5XG4gICAgaWYgKGNtcCA9PT0gMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgICB0aGlzLndvcmRzWzBdID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIGEgPiBiXG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGNtcCA+IDApIHtcbiAgICAgIGEgPSB0aGlzO1xuICAgICAgYiA9IG51bTtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IG51bTtcbiAgICAgIGIgPSB0aGlzO1xuICAgIH1cblxuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICByID0gKGEud29yZHNbaV0gfCAwKSAtIChiLndvcmRzW2ldIHwgMCkgKyBjYXJyeTtcbiAgICAgIGNhcnJ5ID0gciA+PiAyNjtcbiAgICAgIHRoaXMud29yZHNbaV0gPSByICYgMHgzZmZmZmZmO1xuICAgIH1cbiAgICBmb3IgKDsgY2FycnkgIT09IDAgJiYgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHIgPSAoYS53b3Jkc1tpXSB8IDApICsgY2Fycnk7XG4gICAgICBjYXJyeSA9IHIgPj4gMjY7XG4gICAgICB0aGlzLndvcmRzW2ldID0gciAmIDB4M2ZmZmZmZjtcbiAgICB9XG5cbiAgICAvLyBDb3B5IHJlc3Qgb2YgdGhlIHdvcmRzXG4gICAgaWYgKGNhcnJ5ID09PSAwICYmIGkgPCBhLmxlbmd0aCAmJiBhICE9PSB0aGlzKSB7XG4gICAgICBmb3IgKDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy53b3Jkc1tpXSA9IGEud29yZHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBNYXRoLm1heCh0aGlzLmxlbmd0aCwgaSk7XG5cbiAgICBpZiAoYSAhPT0gdGhpcykge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3N0cmlwKCk7XG4gIH07XG5cbiAgLy8gU3VidHJhY3QgYG51bWAgZnJvbSBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uIHN1YiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pc3ViKG51bSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc21hbGxNdWxUbyAoc2VsZiwgbnVtLCBvdXQpIHtcbiAgICBvdXQubmVnYXRpdmUgPSBudW0ubmVnYXRpdmUgXiBzZWxmLm5lZ2F0aXZlO1xuICAgIHZhciBsZW4gPSAoc2VsZi5sZW5ndGggKyBudW0ubGVuZ3RoKSB8IDA7XG4gICAgb3V0Lmxlbmd0aCA9IGxlbjtcbiAgICBsZW4gPSAobGVuIC0gMSkgfCAwO1xuXG4gICAgLy8gUGVlbCBvbmUgaXRlcmF0aW9uIChjb21waWxlciBjYW4ndCBkbyBpdCwgYmVjYXVzZSBvZiBjb2RlIGNvbXBsZXhpdHkpXG4gICAgdmFyIGEgPSBzZWxmLndvcmRzWzBdIHwgMDtcbiAgICB2YXIgYiA9IG51bS53b3Jkc1swXSB8IDA7XG4gICAgdmFyIHIgPSBhICogYjtcblxuICAgIHZhciBsbyA9IHIgJiAweDNmZmZmZmY7XG4gICAgdmFyIGNhcnJ5ID0gKHIgLyAweDQwMDAwMDApIHwgMDtcbiAgICBvdXQud29yZHNbMF0gPSBsbztcblxuICAgIGZvciAodmFyIGsgPSAxOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgIC8vIFN1bSBhbGwgd29yZHMgd2l0aCB0aGUgc2FtZSBgaSArIGogPSBrYCBhbmQgYWNjdW11bGF0ZSBgbmNhcnJ5YCxcbiAgICAgIC8vIG5vdGUgdGhhdCBuY2FycnkgY291bGQgYmUgPj0gMHgzZmZmZmZmXG4gICAgICB2YXIgbmNhcnJ5ID0gY2FycnkgPj4+IDI2O1xuICAgICAgdmFyIHJ3b3JkID0gY2FycnkgJiAweDNmZmZmZmY7XG4gICAgICB2YXIgbWF4SiA9IE1hdGgubWluKGssIG51bS5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGogPSBNYXRoLm1heCgwLCBrIC0gc2VsZi5sZW5ndGggKyAxKTsgaiA8PSBtYXhKOyBqKyspIHtcbiAgICAgICAgdmFyIGkgPSAoayAtIGopIHwgMDtcbiAgICAgICAgYSA9IHNlbGYud29yZHNbaV0gfCAwO1xuICAgICAgICBiID0gbnVtLndvcmRzW2pdIHwgMDtcbiAgICAgICAgciA9IGEgKiBiICsgcndvcmQ7XG4gICAgICAgIG5jYXJyeSArPSAociAvIDB4NDAwMDAwMCkgfCAwO1xuICAgICAgICByd29yZCA9IHIgJiAweDNmZmZmZmY7XG4gICAgICB9XG4gICAgICBvdXQud29yZHNba10gPSByd29yZCB8IDA7XG4gICAgICBjYXJyeSA9IG5jYXJyeSB8IDA7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgb3V0LndvcmRzW2tdID0gY2FycnkgfCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQubGVuZ3RoLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dC5fc3RyaXAoKTtcbiAgfVxuXG4gIC8vIFRPRE8oaW5kdXRueSk6IGl0IG1heSBiZSByZWFzb25hYmxlIHRvIG9taXQgaXQgZm9yIHVzZXJzIHdobyBkb24ndCBuZWVkXG4gIC8vIHRvIHdvcmsgd2l0aCAyNTYtYml0IG51bWJlcnMsIG90aGVyd2lzZSBpdCBnaXZlcyAyMCUgaW1wcm92ZW1lbnQgZm9yIDI1Ni1iaXRcbiAgLy8gbXVsdGlwbGljYXRpb24gKGxpa2UgZWxsaXB0aWMgc2VjcDI1NmsxKS5cbiAgdmFyIGNvbWIxME11bFRvID0gZnVuY3Rpb24gY29tYjEwTXVsVG8gKHNlbGYsIG51bSwgb3V0KSB7XG4gICAgdmFyIGEgPSBzZWxmLndvcmRzO1xuICAgIHZhciBiID0gbnVtLndvcmRzO1xuICAgIHZhciBvID0gb3V0LndvcmRzO1xuICAgIHZhciBjID0gMDtcbiAgICB2YXIgbG87XG4gICAgdmFyIG1pZDtcbiAgICB2YXIgaGk7XG4gICAgdmFyIGEwID0gYVswXSB8IDA7XG4gICAgdmFyIGFsMCA9IGEwICYgMHgxZmZmO1xuICAgIHZhciBhaDAgPSBhMCA+Pj4gMTM7XG4gICAgdmFyIGExID0gYVsxXSB8IDA7XG4gICAgdmFyIGFsMSA9IGExICYgMHgxZmZmO1xuICAgIHZhciBhaDEgPSBhMSA+Pj4gMTM7XG4gICAgdmFyIGEyID0gYVsyXSB8IDA7XG4gICAgdmFyIGFsMiA9IGEyICYgMHgxZmZmO1xuICAgIHZhciBhaDIgPSBhMiA+Pj4gMTM7XG4gICAgdmFyIGEzID0gYVszXSB8IDA7XG4gICAgdmFyIGFsMyA9IGEzICYgMHgxZmZmO1xuICAgIHZhciBhaDMgPSBhMyA+Pj4gMTM7XG4gICAgdmFyIGE0ID0gYVs0XSB8IDA7XG4gICAgdmFyIGFsNCA9IGE0ICYgMHgxZmZmO1xuICAgIHZhciBhaDQgPSBhNCA+Pj4gMTM7XG4gICAgdmFyIGE1ID0gYVs1XSB8IDA7XG4gICAgdmFyIGFsNSA9IGE1ICYgMHgxZmZmO1xuICAgIHZhciBhaDUgPSBhNSA+Pj4gMTM7XG4gICAgdmFyIGE2ID0gYVs2XSB8IDA7XG4gICAgdmFyIGFsNiA9IGE2ICYgMHgxZmZmO1xuICAgIHZhciBhaDYgPSBhNiA+Pj4gMTM7XG4gICAgdmFyIGE3ID0gYVs3XSB8IDA7XG4gICAgdmFyIGFsNyA9IGE3ICYgMHgxZmZmO1xuICAgIHZhciBhaDcgPSBhNyA+Pj4gMTM7XG4gICAgdmFyIGE4ID0gYVs4XSB8IDA7XG4gICAgdmFyIGFsOCA9IGE4ICYgMHgxZmZmO1xuICAgIHZhciBhaDggPSBhOCA+Pj4gMTM7XG4gICAgdmFyIGE5ID0gYVs5XSB8IDA7XG4gICAgdmFyIGFsOSA9IGE5ICYgMHgxZmZmO1xuICAgIHZhciBhaDkgPSBhOSA+Pj4gMTM7XG4gICAgdmFyIGIwID0gYlswXSB8IDA7XG4gICAgdmFyIGJsMCA9IGIwICYgMHgxZmZmO1xuICAgIHZhciBiaDAgPSBiMCA+Pj4gMTM7XG4gICAgdmFyIGIxID0gYlsxXSB8IDA7XG4gICAgdmFyIGJsMSA9IGIxICYgMHgxZmZmO1xuICAgIHZhciBiaDEgPSBiMSA+Pj4gMTM7XG4gICAgdmFyIGIyID0gYlsyXSB8IDA7XG4gICAgdmFyIGJsMiA9IGIyICYgMHgxZmZmO1xuICAgIHZhciBiaDIgPSBiMiA+Pj4gMTM7XG4gICAgdmFyIGIzID0gYlszXSB8IDA7XG4gICAgdmFyIGJsMyA9IGIzICYgMHgxZmZmO1xuICAgIHZhciBiaDMgPSBiMyA+Pj4gMTM7XG4gICAgdmFyIGI0ID0gYls0XSB8IDA7XG4gICAgdmFyIGJsNCA9IGI0ICYgMHgxZmZmO1xuICAgIHZhciBiaDQgPSBiNCA+Pj4gMTM7XG4gICAgdmFyIGI1ID0gYls1XSB8IDA7XG4gICAgdmFyIGJsNSA9IGI1ICYgMHgxZmZmO1xuICAgIHZhciBiaDUgPSBiNSA+Pj4gMTM7XG4gICAgdmFyIGI2ID0gYls2XSB8IDA7XG4gICAgdmFyIGJsNiA9IGI2ICYgMHgxZmZmO1xuICAgIHZhciBiaDYgPSBiNiA+Pj4gMTM7XG4gICAgdmFyIGI3ID0gYls3XSB8IDA7XG4gICAgdmFyIGJsNyA9IGI3ICYgMHgxZmZmO1xuICAgIHZhciBiaDcgPSBiNyA+Pj4gMTM7XG4gICAgdmFyIGI4ID0gYls4XSB8IDA7XG4gICAgdmFyIGJsOCA9IGI4ICYgMHgxZmZmO1xuICAgIHZhciBiaDggPSBiOCA+Pj4gMTM7XG4gICAgdmFyIGI5ID0gYls5XSB8IDA7XG4gICAgdmFyIGJsOSA9IGI5ICYgMHgxZmZmO1xuICAgIHZhciBiaDkgPSBiOSA+Pj4gMTM7XG5cbiAgICBvdXQubmVnYXRpdmUgPSBzZWxmLm5lZ2F0aXZlIF4gbnVtLm5lZ2F0aXZlO1xuICAgIG91dC5sZW5ndGggPSAxOTtcbiAgICAvKiBrID0gMCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsMCwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWwwLCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgwLCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWgwLCBiaDApO1xuICAgIHZhciB3MCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzAgPj4+IDI2KSkgfCAwO1xuICAgIHcwICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMSAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsMSwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWwxLCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWgxLCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMCwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwwLCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDAsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDAsIGJoMSkpIHwgMDtcbiAgICB2YXIgdzEgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxID4+PiAyNikpIHwgMDtcbiAgICB3MSAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDIgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDIsIGJsMCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsMiwgYmgwKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMiwgYmwwKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoMiwgYmgwKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmgxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDEpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDEpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmwyKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmgyKSkgfCAwO1xuICAgIHZhciB3MiA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzIgPj4+IDI2KSkgfCAwO1xuICAgIHcyICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMyAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsMywgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWwzLCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgzLCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWgzLCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmgzKSkgfCAwO1xuICAgIHZhciB3MyA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzMgPj4+IDI2KSkgfCAwO1xuICAgIHczICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gNCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsNCwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw0LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg0LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMywgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwzLCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDMsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDIsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMiwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgyLCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwxLCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDEsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMSwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMSwgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMCwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwwLCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDAsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDAsIGJoNCkpIHwgMDtcbiAgICB2YXIgdzQgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHc0ID4+PiAyNikpIHwgMDtcbiAgICB3NCAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDUgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDUsIGJsMCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsNSwgYmgwKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNSwgYmwwKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoNSwgYmgwKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmgxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDEpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDEpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmwyKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmgyKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmwzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsMykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoMykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDQpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDQpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw1KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg1KSkgfCAwO1xuICAgIHZhciB3NSA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzUgPj4+IDI2KSkgfCAwO1xuICAgIHc1ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gNiAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsNiwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw2LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg2LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg2LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg2KSkgfCAwO1xuICAgIHZhciB3NiA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzYgPj4+IDI2KSkgfCAwO1xuICAgIHc2ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gNyAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsNywgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw3LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg3LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw0LCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDQsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNCwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNCwgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMywgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwzLCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDMsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDIsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMiwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgyLCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwxLCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDEsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMSwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMSwgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMCwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwwLCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDAsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDAsIGJoNykpIHwgMDtcbiAgICB2YXIgdzcgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHc3ID4+PiAyNikpIHwgMDtcbiAgICB3NyAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDggKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDgsIGJsMCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOCwgYmgwKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOCwgYmwwKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOCwgYmgwKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmgxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDEpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDEpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmwyKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmgyKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmwzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsMykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoMykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDQpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDQpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw1KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg1KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsNikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoNikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDcpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDcpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw4KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg4KSkgfCAwO1xuICAgIHZhciB3OCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzggPj4+IDI2KSkgfCAwO1xuICAgIHc4ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gOSAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg5KSkgfCAwO1xuICAgIHZhciB3OSA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzkgPj4+IDI2KSkgfCAwO1xuICAgIHc5ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTAgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsMSk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmgxKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmwxKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmgxKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw0LCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDQsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNCwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNCwgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMywgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwzLCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDMsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDIsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMiwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgyLCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwxLCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDEsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMSwgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMSwgYmg5KSkgfCAwO1xuICAgIHZhciB3MTAgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxMCA+Pj4gMjYpKSB8IDA7XG4gICAgdzEwICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTEgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsMik7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmgyKTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmwyKSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmgyKTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmgzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDMpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDMpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmw0KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmg0KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmw1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsNSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoNSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw0LCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDQsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNCwgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNCwgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMywgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwzLCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDMsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDIsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMiwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgyLCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxMSA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzExID4+PiAyNikpIHwgMDtcbiAgICB3MTEgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxMiAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmwzKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDMpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDMpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDMpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg5KSkgfCAwO1xuICAgIHZhciB3MTIgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxMiA+Pj4gMjYpKSB8IDA7XG4gICAgdzEyICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTMgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsNCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmg0KTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmw0KSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmg0KTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw0LCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDQsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNCwgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNCwgYmg5KSkgfCAwO1xuICAgIHZhciB3MTMgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxMyA+Pj4gMjYpKSB8IDA7XG4gICAgdzEzICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTQgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsNSk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmg1KTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmw1KSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmg1KTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNiwgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw2LCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDYsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDUsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNSwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg1LCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxNCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzE0ID4+PiAyNikpIHwgMDtcbiAgICB3MTQgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxNSAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmw2KTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDYpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDYpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDYpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmg5KSkgfCAwO1xuICAgIHZhciB3MTUgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxNSA+Pj4gMjYpKSB8IDA7XG4gICAgdzE1ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTYgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsNyk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmg3KTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmw3KSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmg3KTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDgpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw3LCBibDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDcsIGJoOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNywgYmw5KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNywgYmg5KSkgfCAwO1xuICAgIHZhciB3MTYgPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxNiA+Pj4gMjYpKSB8IDA7XG4gICAgdzE2ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMTcgKi9cbiAgICBsbyA9IE1hdGguaW11bChhbDksIGJsOCk7XG4gICAgbWlkID0gTWF0aC5pbXVsKGFsOSwgYmg4KTtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOSwgYmw4KSkgfCAwO1xuICAgIGhpID0gTWF0aC5pbXVsKGFoOSwgYmg4KTtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDgsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsOCwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg4LCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxNyA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzE3ID4+PiAyNikpIHwgMDtcbiAgICB3MTcgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxOCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmw5KTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDkpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDkpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDkpO1xuICAgIHZhciB3MTggPSAoKChjICsgbG8pIHwgMCkgKyAoKG1pZCAmIDB4MWZmZikgPDwgMTMpKSB8IDA7XG4gICAgYyA9ICgoKGhpICsgKG1pZCA+Pj4gMTMpKSB8IDApICsgKHcxOCA+Pj4gMjYpKSB8IDA7XG4gICAgdzE4ICY9IDB4M2ZmZmZmZjtcbiAgICBvWzBdID0gdzA7XG4gICAgb1sxXSA9IHcxO1xuICAgIG9bMl0gPSB3MjtcbiAgICBvWzNdID0gdzM7XG4gICAgb1s0XSA9IHc0O1xuICAgIG9bNV0gPSB3NTtcbiAgICBvWzZdID0gdzY7XG4gICAgb1s3XSA9IHc3O1xuICAgIG9bOF0gPSB3ODtcbiAgICBvWzldID0gdzk7XG4gICAgb1sxMF0gPSB3MTA7XG4gICAgb1sxMV0gPSB3MTE7XG4gICAgb1sxMl0gPSB3MTI7XG4gICAgb1sxM10gPSB3MTM7XG4gICAgb1sxNF0gPSB3MTQ7XG4gICAgb1sxNV0gPSB3MTU7XG4gICAgb1sxNl0gPSB3MTY7XG4gICAgb1sxN10gPSB3MTc7XG4gICAgb1sxOF0gPSB3MTg7XG4gICAgaWYgKGMgIT09IDApIHtcbiAgICAgIG9bMTldID0gYztcbiAgICAgIG91dC5sZW5ndGgrKztcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICAvLyBQb2x5ZmlsbCBjb21iXG4gIGlmICghTWF0aC5pbXVsKSB7XG4gICAgY29tYjEwTXVsVG8gPSBzbWFsbE11bFRvO1xuICB9XG5cbiAgZnVuY3Rpb24gYmlnTXVsVG8gKHNlbGYsIG51bSwgb3V0KSB7XG4gICAgb3V0Lm5lZ2F0aXZlID0gbnVtLm5lZ2F0aXZlIF4gc2VsZi5uZWdhdGl2ZTtcbiAgICBvdXQubGVuZ3RoID0gc2VsZi5sZW5ndGggKyBudW0ubGVuZ3RoO1xuXG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICB2YXIgaG5jYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBvdXQubGVuZ3RoIC0gMTsgaysrKSB7XG4gICAgICAvLyBTdW0gYWxsIHdvcmRzIHdpdGggdGhlIHNhbWUgYGkgKyBqID0ga2AgYW5kIGFjY3VtdWxhdGUgYG5jYXJyeWAsXG4gICAgICAvLyBub3RlIHRoYXQgbmNhcnJ5IGNvdWxkIGJlID49IDB4M2ZmZmZmZlxuICAgICAgdmFyIG5jYXJyeSA9IGhuY2Fycnk7XG4gICAgICBobmNhcnJ5ID0gMDtcbiAgICAgIHZhciByd29yZCA9IGNhcnJ5ICYgMHgzZmZmZmZmO1xuICAgICAgdmFyIG1heEogPSBNYXRoLm1pbihrLCBudW0ubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBqID0gTWF0aC5tYXgoMCwgayAtIHNlbGYubGVuZ3RoICsgMSk7IGogPD0gbWF4SjsgaisrKSB7XG4gICAgICAgIHZhciBpID0gayAtIGo7XG4gICAgICAgIHZhciBhID0gc2VsZi53b3Jkc1tpXSB8IDA7XG4gICAgICAgIHZhciBiID0gbnVtLndvcmRzW2pdIHwgMDtcbiAgICAgICAgdmFyIHIgPSBhICogYjtcblxuICAgICAgICB2YXIgbG8gPSByICYgMHgzZmZmZmZmO1xuICAgICAgICBuY2FycnkgPSAobmNhcnJ5ICsgKChyIC8gMHg0MDAwMDAwKSB8IDApKSB8IDA7XG4gICAgICAgIGxvID0gKGxvICsgcndvcmQpIHwgMDtcbiAgICAgICAgcndvcmQgPSBsbyAmIDB4M2ZmZmZmZjtcbiAgICAgICAgbmNhcnJ5ID0gKG5jYXJyeSArIChsbyA+Pj4gMjYpKSB8IDA7XG5cbiAgICAgICAgaG5jYXJyeSArPSBuY2FycnkgPj4+IDI2O1xuICAgICAgICBuY2FycnkgJj0gMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgb3V0LndvcmRzW2tdID0gcndvcmQ7XG4gICAgICBjYXJyeSA9IG5jYXJyeTtcbiAgICAgIG5jYXJyeSA9IGhuY2Fycnk7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgb3V0LndvcmRzW2tdID0gY2Fycnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dC5sZW5ndGgtLTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0Ll9zdHJpcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24ganVtYm9NdWxUbyAoc2VsZiwgbnVtLCBvdXQpIHtcbiAgICAvLyBUZW1wb3JhcnkgZGlzYWJsZSwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9pbmR1dG55L2JuLmpzL2lzc3Vlcy8yMTFcbiAgICAvLyB2YXIgZmZ0bSA9IG5ldyBGRlRNKCk7XG4gICAgLy8gcmV0dXJuIGZmdG0ubXVscChzZWxmLCBudW0sIG91dCk7XG4gICAgcmV0dXJuIGJpZ011bFRvKHNlbGYsIG51bSwgb3V0KTtcbiAgfVxuXG4gIEJOLnByb3RvdHlwZS5tdWxUbyA9IGZ1bmN0aW9uIG11bFRvIChudW0sIG91dCkge1xuICAgIHZhciByZXM7XG4gICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoICsgbnVtLmxlbmd0aDtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEwICYmIG51bS5sZW5ndGggPT09IDEwKSB7XG4gICAgICByZXMgPSBjb21iMTBNdWxUbyh0aGlzLCBudW0sIG91dCk7XG4gICAgfSBlbHNlIGlmIChsZW4gPCA2Mykge1xuICAgICAgcmVzID0gc21hbGxNdWxUbyh0aGlzLCBudW0sIG91dCk7XG4gICAgfSBlbHNlIGlmIChsZW4gPCAxMDI0KSB7XG4gICAgICByZXMgPSBiaWdNdWxUbyh0aGlzLCBudW0sIG91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IGp1bWJvTXVsVG8odGhpcywgbnVtLCBvdXQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgLy8gQ29vbGV5LVR1a2V5IGFsZ29yaXRobSBmb3IgRkZUXG4gIC8vIHNsaWdodGx5IHJldmlzaXRlZCB0byByZWx5IG9uIGxvb3BpbmcgaW5zdGVhZCBvZiByZWN1cnNpb25cblxuICBmdW5jdGlvbiBGRlRNICh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgRkZUTS5wcm90b3R5cGUubWFrZVJCVCA9IGZ1bmN0aW9uIG1ha2VSQlQgKE4pIHtcbiAgICB2YXIgdCA9IG5ldyBBcnJheShOKTtcbiAgICB2YXIgbCA9IEJOLnByb3RvdHlwZS5fY291bnRCaXRzKE4pIC0gMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgdFtpXSA9IHRoaXMucmV2QmluKGksIGwsIE4pO1xuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYmluYXJ5LXJldmVyc2VkIHJlcHJlc2VudGF0aW9uIG9mIGB4YFxuICBGRlRNLnByb3RvdHlwZS5yZXZCaW4gPSBmdW5jdGlvbiByZXZCaW4gKHgsIGwsIE4pIHtcbiAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSBOIC0gMSkgcmV0dXJuIHg7XG5cbiAgICB2YXIgcmIgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICByYiB8PSAoeCAmIDEpIDw8IChsIC0gaSAtIDEpO1xuICAgICAgeCA+Pj0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmI7XG4gIH07XG5cbiAgLy8gUGVyZm9ybXMgXCJ0d2VlZGxpbmdcIiBwaGFzZSwgdGhlcmVmb3JlICdlbXVsYXRpbmcnXG4gIC8vIGJlaGF2aW91ciBvZiB0aGUgcmVjdXJzaXZlIGFsZ29yaXRobVxuICBGRlRNLnByb3RvdHlwZS5wZXJtdXRlID0gZnVuY3Rpb24gcGVybXV0ZSAocmJ0LCByd3MsIGl3cywgcnR3cywgaXR3cywgTikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBydHdzW2ldID0gcndzW3JidFtpXV07XG4gICAgICBpdHdzW2ldID0gaXdzW3JidFtpXV07XG4gICAgfVxuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybSAocndzLCBpd3MsIHJ0d3MsIGl0d3MsIE4sIHJidCkge1xuICAgIHRoaXMucGVybXV0ZShyYnQsIHJ3cywgaXdzLCBydHdzLCBpdHdzLCBOKTtcblxuICAgIGZvciAodmFyIHMgPSAxOyBzIDwgTjsgcyA8PD0gMSkge1xuICAgICAgdmFyIGwgPSBzIDw8IDE7XG5cbiAgICAgIHZhciBydHdkZiA9IE1hdGguY29zKDIgKiBNYXRoLlBJIC8gbCk7XG4gICAgICB2YXIgaXR3ZGYgPSBNYXRoLnNpbigyICogTWF0aC5QSSAvIGwpO1xuXG4gICAgICBmb3IgKHZhciBwID0gMDsgcCA8IE47IHAgKz0gbCkge1xuICAgICAgICB2YXIgcnR3ZGZfID0gcnR3ZGY7XG4gICAgICAgIHZhciBpdHdkZl8gPSBpdHdkZjtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHM7IGorKykge1xuICAgICAgICAgIHZhciByZSA9IHJ0d3NbcCArIGpdO1xuICAgICAgICAgIHZhciBpZSA9IGl0d3NbcCArIGpdO1xuXG4gICAgICAgICAgdmFyIHJvID0gcnR3c1twICsgaiArIHNdO1xuICAgICAgICAgIHZhciBpbyA9IGl0d3NbcCArIGogKyBzXTtcblxuICAgICAgICAgIHZhciByeCA9IHJ0d2RmXyAqIHJvIC0gaXR3ZGZfICogaW87XG5cbiAgICAgICAgICBpbyA9IHJ0d2RmXyAqIGlvICsgaXR3ZGZfICogcm87XG4gICAgICAgICAgcm8gPSByeDtcblxuICAgICAgICAgIHJ0d3NbcCArIGpdID0gcmUgKyBybztcbiAgICAgICAgICBpdHdzW3AgKyBqXSA9IGllICsgaW87XG5cbiAgICAgICAgICBydHdzW3AgKyBqICsgc10gPSByZSAtIHJvO1xuICAgICAgICAgIGl0d3NbcCArIGogKyBzXSA9IGllIC0gaW87XG5cbiAgICAgICAgICAvKiBqc2hpbnQgbWF4ZGVwdGggOiBmYWxzZSAqL1xuICAgICAgICAgIGlmIChqICE9PSBsKSB7XG4gICAgICAgICAgICByeCA9IHJ0d2RmICogcnR3ZGZfIC0gaXR3ZGYgKiBpdHdkZl87XG5cbiAgICAgICAgICAgIGl0d2RmXyA9IHJ0d2RmICogaXR3ZGZfICsgaXR3ZGYgKiBydHdkZl87XG4gICAgICAgICAgICBydHdkZl8gPSByeDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUuZ3Vlc3NMZW4xM2IgPSBmdW5jdGlvbiBndWVzc0xlbjEzYiAobiwgbSkge1xuICAgIHZhciBOID0gTWF0aC5tYXgobSwgbikgfCAxO1xuICAgIHZhciBvZGQgPSBOICYgMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yIChOID0gTiAvIDIgfCAwOyBOOyBOID0gTiA+Pj4gMSkge1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiAxIDw8IGkgKyAxICsgb2RkO1xuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLmNvbmp1Z2F0ZSA9IGZ1bmN0aW9uIGNvbmp1Z2F0ZSAocndzLCBpd3MsIE4pIHtcbiAgICBpZiAoTiA8PSAxKSByZXR1cm47XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE4gLyAyOyBpKyspIHtcbiAgICAgIHZhciB0ID0gcndzW2ldO1xuXG4gICAgICByd3NbaV0gPSByd3NbTiAtIGkgLSAxXTtcbiAgICAgIHJ3c1tOIC0gaSAtIDFdID0gdDtcblxuICAgICAgdCA9IGl3c1tpXTtcblxuICAgICAgaXdzW2ldID0gLWl3c1tOIC0gaSAtIDFdO1xuICAgICAgaXdzW04gLSBpIC0gMV0gPSAtdDtcbiAgICB9XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUubm9ybWFsaXplMTNiID0gZnVuY3Rpb24gbm9ybWFsaXplMTNiICh3cywgTikge1xuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOIC8gMjsgaSsrKSB7XG4gICAgICB2YXIgdyA9IE1hdGgucm91bmQod3NbMiAqIGkgKyAxXSAvIE4pICogMHgyMDAwICtcbiAgICAgICAgTWF0aC5yb3VuZCh3c1syICogaV0gLyBOKSArXG4gICAgICAgIGNhcnJ5O1xuXG4gICAgICB3c1tpXSA9IHcgJiAweDNmZmZmZmY7XG5cbiAgICAgIGlmICh3IDwgMHg0MDAwMDAwKSB7XG4gICAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcnJ5ID0gdyAvIDB4NDAwMDAwMCB8IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdzO1xuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLmNvbnZlcnQxM2IgPSBmdW5jdGlvbiBjb252ZXJ0MTNiICh3cywgbGVuLCByd3MsIE4pIHtcbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNhcnJ5ID0gY2FycnkgKyAod3NbaV0gfCAwKTtcblxuICAgICAgcndzWzIgKiBpXSA9IGNhcnJ5ICYgMHgxZmZmOyBjYXJyeSA9IGNhcnJ5ID4+PiAxMztcbiAgICAgIHJ3c1syICogaSArIDFdID0gY2FycnkgJiAweDFmZmY7IGNhcnJ5ID0gY2FycnkgPj4+IDEzO1xuICAgIH1cblxuICAgIC8vIFBhZCB3aXRoIHplcm9lc1xuICAgIGZvciAoaSA9IDIgKiBsZW47IGkgPCBOOyArK2kpIHtcbiAgICAgIHJ3c1tpXSA9IDA7XG4gICAgfVxuXG4gICAgYXNzZXJ0KGNhcnJ5ID09PSAwKTtcbiAgICBhc3NlcnQoKGNhcnJ5ICYgfjB4MWZmZikgPT09IDApO1xuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLnN0dWIgPSBmdW5jdGlvbiBzdHViIChOKSB7XG4gICAgdmFyIHBoID0gbmV3IEFycmF5KE4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBwaFtpXSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBoO1xuICB9O1xuXG4gIEZGVE0ucHJvdG90eXBlLm11bHAgPSBmdW5jdGlvbiBtdWxwICh4LCB5LCBvdXQpIHtcbiAgICB2YXIgTiA9IDIgKiB0aGlzLmd1ZXNzTGVuMTNiKHgubGVuZ3RoLCB5Lmxlbmd0aCk7XG5cbiAgICB2YXIgcmJ0ID0gdGhpcy5tYWtlUkJUKE4pO1xuXG4gICAgdmFyIF8gPSB0aGlzLnN0dWIoTik7XG5cbiAgICB2YXIgcndzID0gbmV3IEFycmF5KE4pO1xuICAgIHZhciByd3N0ID0gbmV3IEFycmF5KE4pO1xuICAgIHZhciBpd3N0ID0gbmV3IEFycmF5KE4pO1xuXG4gICAgdmFyIG5yd3MgPSBuZXcgQXJyYXkoTik7XG4gICAgdmFyIG5yd3N0ID0gbmV3IEFycmF5KE4pO1xuICAgIHZhciBuaXdzdCA9IG5ldyBBcnJheShOKTtcblxuICAgIHZhciBybXdzID0gb3V0LndvcmRzO1xuICAgIHJtd3MubGVuZ3RoID0gTjtcblxuICAgIHRoaXMuY29udmVydDEzYih4LndvcmRzLCB4Lmxlbmd0aCwgcndzLCBOKTtcbiAgICB0aGlzLmNvbnZlcnQxM2IoeS53b3JkcywgeS5sZW5ndGgsIG5yd3MsIE4pO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0ocndzLCBfLCByd3N0LCBpd3N0LCBOLCByYnQpO1xuICAgIHRoaXMudHJhbnNmb3JtKG5yd3MsIF8sIG5yd3N0LCBuaXdzdCwgTiwgcmJ0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICB2YXIgcnggPSByd3N0W2ldICogbnJ3c3RbaV0gLSBpd3N0W2ldICogbml3c3RbaV07XG4gICAgICBpd3N0W2ldID0gcndzdFtpXSAqIG5pd3N0W2ldICsgaXdzdFtpXSAqIG5yd3N0W2ldO1xuICAgICAgcndzdFtpXSA9IHJ4O1xuICAgIH1cblxuICAgIHRoaXMuY29uanVnYXRlKHJ3c3QsIGl3c3QsIE4pO1xuICAgIHRoaXMudHJhbnNmb3JtKHJ3c3QsIGl3c3QsIHJtd3MsIF8sIE4sIHJidCk7XG4gICAgdGhpcy5jb25qdWdhdGUocm13cywgXywgTik7XG4gICAgdGhpcy5ub3JtYWxpemUxM2Iocm13cywgTik7XG5cbiAgICBvdXQubmVnYXRpdmUgPSB4Lm5lZ2F0aXZlIF4geS5uZWdhdGl2ZTtcbiAgICBvdXQubGVuZ3RoID0geC5sZW5ndGggKyB5Lmxlbmd0aDtcbiAgICByZXR1cm4gb3V0Ll9zdHJpcCgpO1xuICB9O1xuXG4gIC8vIE11bHRpcGx5IGB0aGlzYCBieSBgbnVtYFxuICBCTi5wcm90b3R5cGUubXVsID0gZnVuY3Rpb24gbXVsIChudW0pIHtcbiAgICB2YXIgb3V0ID0gbmV3IEJOKG51bGwpO1xuICAgIG91dC53b3JkcyA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCArIG51bS5sZW5ndGgpO1xuICAgIHJldHVybiB0aGlzLm11bFRvKG51bSwgb3V0KTtcbiAgfTtcblxuICAvLyBNdWx0aXBseSBlbXBsb3lpbmcgRkZUXG4gIEJOLnByb3RvdHlwZS5tdWxmID0gZnVuY3Rpb24gbXVsZiAobnVtKSB7XG4gICAgdmFyIG91dCA9IG5ldyBCTihudWxsKTtcbiAgICBvdXQud29yZHMgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGggKyBudW0ubGVuZ3RoKTtcbiAgICByZXR1cm4ganVtYm9NdWxUbyh0aGlzLCBudW0sIG91dCk7XG4gIH07XG5cbiAgLy8gSW4tcGxhY2UgTXVsdGlwbGljYXRpb25cbiAgQk4ucHJvdG90eXBlLmltdWwgPSBmdW5jdGlvbiBpbXVsIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm11bFRvKG51bSwgdGhpcyk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmltdWxuID0gZnVuY3Rpb24gaW11bG4gKG51bSkge1xuICAgIHZhciBpc05lZ051bSA9IG51bSA8IDA7XG4gICAgaWYgKGlzTmVnTnVtKSBudW0gPSAtbnVtO1xuXG4gICAgYXNzZXJ0KHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICBhc3NlcnQobnVtIDwgMHg0MDAwMDAwKTtcblxuICAgIC8vIENhcnJ5XG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB3ID0gKHRoaXMud29yZHNbaV0gfCAwKSAqIG51bTtcbiAgICAgIHZhciBsbyA9ICh3ICYgMHgzZmZmZmZmKSArIChjYXJyeSAmIDB4M2ZmZmZmZik7XG4gICAgICBjYXJyeSA+Pj0gMjY7XG4gICAgICBjYXJyeSArPSAodyAvIDB4NDAwMDAwMCkgfCAwO1xuICAgICAgLy8gTk9URTogbG8gaXMgMjdiaXQgbWF4aW11bVxuICAgICAgY2FycnkgKz0gbG8gPj4+IDI2O1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IGxvICYgMHgzZmZmZmZmO1xuICAgIH1cblxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IGNhcnJ5O1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gaXNOZWdOdW0gPyB0aGlzLmluZWcoKSA6IHRoaXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLm11bG4gPSBmdW5jdGlvbiBtdWxuIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmltdWxuKG51bSk7XG4gIH07XG5cbiAgLy8gYHRoaXNgICogYHRoaXNgXG4gIEJOLnByb3RvdHlwZS5zcXIgPSBmdW5jdGlvbiBzcXIgKCkge1xuICAgIHJldHVybiB0aGlzLm11bCh0aGlzKTtcbiAgfTtcblxuICAvLyBgdGhpc2AgKiBgdGhpc2AgaW4tcGxhY2VcbiAgQk4ucHJvdG90eXBlLmlzcXIgPSBmdW5jdGlvbiBpc3FyICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbXVsKHRoaXMuY2xvbmUoKSk7XG4gIH07XG5cbiAgLy8gTWF0aC5wb3coYHRoaXNgLCBgbnVtYClcbiAgQk4ucHJvdG90eXBlLnBvdyA9IGZ1bmN0aW9uIHBvdyAobnVtKSB7XG4gICAgdmFyIHcgPSB0b0JpdEFycmF5KG51bSk7XG4gICAgaWYgKHcubGVuZ3RoID09PSAwKSByZXR1cm4gbmV3IEJOKDEpO1xuXG4gICAgLy8gU2tpcCBsZWFkaW5nIHplcm9lc1xuICAgIHZhciByZXMgPSB0aGlzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdy5sZW5ndGg7IGkrKywgcmVzID0gcmVzLnNxcigpKSB7XG4gICAgICBpZiAod1tpXSAhPT0gMCkgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCsraSA8IHcubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBxID0gcmVzLnNxcigpOyBpIDwgdy5sZW5ndGg7IGkrKywgcSA9IHEuc3FyKCkpIHtcbiAgICAgICAgaWYgKHdbaV0gPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgIHJlcyA9IHJlcy5tdWwocSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICAvLyBTaGlmdC1sZWZ0IGluLXBsYWNlXG4gIEJOLnByb3RvdHlwZS5pdXNobG4gPSBmdW5jdGlvbiBpdXNobG4gKGJpdHMpIHtcbiAgICBhc3NlcnQodHlwZW9mIGJpdHMgPT09ICdudW1iZXInICYmIGJpdHMgPj0gMCk7XG4gICAgdmFyIHIgPSBiaXRzICUgMjY7XG4gICAgdmFyIHMgPSAoYml0cyAtIHIpIC8gMjY7XG4gICAgdmFyIGNhcnJ5TWFzayA9ICgweDNmZmZmZmYgPj4+ICgyNiAtIHIpKSA8PCAoMjYgLSByKTtcbiAgICB2YXIgaTtcblxuICAgIGlmIChyICE9PSAwKSB7XG4gICAgICB2YXIgY2FycnkgPSAwO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmV3Q2FycnkgPSB0aGlzLndvcmRzW2ldICYgY2FycnlNYXNrO1xuICAgICAgICB2YXIgYyA9ICgodGhpcy53b3Jkc1tpXSB8IDApIC0gbmV3Q2FycnkpIDw8IHI7XG4gICAgICAgIHRoaXMud29yZHNbaV0gPSBjIHwgY2Fycnk7XG4gICAgICAgIGNhcnJ5ID0gbmV3Q2FycnkgPj4+ICgyNiAtIHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FycnkpIHtcbiAgICAgICAgdGhpcy53b3Jkc1tpXSA9IGNhcnJ5O1xuICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzICE9PSAwKSB7XG4gICAgICBmb3IgKGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMud29yZHNbaSArIHNdID0gdGhpcy53b3Jkc1tpXTtcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzW2ldID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sZW5ndGggKz0gcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaXNobG4gPSBmdW5jdGlvbiBpc2hsbiAoYml0cykge1xuICAgIC8vIFRPRE8oaW5kdXRueSk6IGltcGxlbWVudCBtZVxuICAgIGFzc2VydCh0aGlzLm5lZ2F0aXZlID09PSAwKTtcbiAgICByZXR1cm4gdGhpcy5pdXNobG4oYml0cyk7XG4gIH07XG5cbiAgLy8gU2hpZnQtcmlnaHQgaW4tcGxhY2VcbiAgLy8gTk9URTogYGhpbnRgIGlzIGEgbG93ZXN0IGJpdCBiZWZvcmUgdHJhaWxpbmcgemVyb2VzXG4gIC8vIE5PVEU6IGlmIGBleHRlbmRlZGAgaXMgcHJlc2VudCAtIGl0IHdpbGwgYmUgZmlsbGVkIHdpdGggZGVzdHJveWVkIGJpdHNcbiAgQk4ucHJvdG90eXBlLml1c2hybiA9IGZ1bmN0aW9uIGl1c2hybiAoYml0cywgaGludCwgZXh0ZW5kZWQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGJpdHMgPT09ICdudW1iZXInICYmIGJpdHMgPj0gMCk7XG4gICAgdmFyIGg7XG4gICAgaWYgKGhpbnQpIHtcbiAgICAgIGggPSAoaGludCAtIChoaW50ICUgMjYpKSAvIDI2O1xuICAgIH0gZWxzZSB7XG4gICAgICBoID0gMDtcbiAgICB9XG5cbiAgICB2YXIgciA9IGJpdHMgJSAyNjtcbiAgICB2YXIgcyA9IE1hdGgubWluKChiaXRzIC0gcikgLyAyNiwgdGhpcy5sZW5ndGgpO1xuICAgIHZhciBtYXNrID0gMHgzZmZmZmZmIF4gKCgweDNmZmZmZmYgPj4+IHIpIDw8IHIpO1xuICAgIHZhciBtYXNrZWRXb3JkcyA9IGV4dGVuZGVkO1xuXG4gICAgaCAtPSBzO1xuICAgIGggPSBNYXRoLm1heCgwLCBoKTtcblxuICAgIC8vIEV4dGVuZGVkIG1vZGUsIGNvcHkgbWFza2VkIHBhcnRcbiAgICBpZiAobWFza2VkV29yZHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICAgIG1hc2tlZFdvcmRzLndvcmRzW2ldID0gdGhpcy53b3Jkc1tpXTtcbiAgICAgIH1cbiAgICAgIG1hc2tlZFdvcmRzLmxlbmd0aCA9IHM7XG4gICAgfVxuXG4gICAgaWYgKHMgPT09IDApIHtcbiAgICAgIC8vIE5vLW9wLCB3ZSBzaG91bGQgbm90IG1vdmUgYW55dGhpbmcgYXQgYWxsXG4gICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA+IHMpIHtcbiAgICAgIHRoaXMubGVuZ3RoIC09IHM7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzW2ldID0gdGhpcy53b3Jkc1tpICsgc107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZHNbMF0gPSAwO1xuICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgIH1cblxuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yIChpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDAgJiYgKGNhcnJ5ICE9PSAwIHx8IGkgPj0gaCk7IGktLSkge1xuICAgICAgdmFyIHdvcmQgPSB0aGlzLndvcmRzW2ldIHwgMDtcbiAgICAgIHRoaXMud29yZHNbaV0gPSAoY2FycnkgPDwgKDI2IC0gcikpIHwgKHdvcmQgPj4+IHIpO1xuICAgICAgY2FycnkgPSB3b3JkICYgbWFzaztcbiAgICB9XG5cbiAgICAvLyBQdXNoIGNhcnJpZWQgYml0cyBhcyBhIG1hc2tcbiAgICBpZiAobWFza2VkV29yZHMgJiYgY2FycnkgIT09IDApIHtcbiAgICAgIG1hc2tlZFdvcmRzLndvcmRzW21hc2tlZFdvcmRzLmxlbmd0aCsrXSA9IGNhcnJ5O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy53b3Jkc1swXSA9IDA7XG4gICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3N0cmlwKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzaHJuID0gZnVuY3Rpb24gaXNocm4gKGJpdHMsIGhpbnQsIGV4dGVuZGVkKSB7XG4gICAgLy8gVE9ETyhpbmR1dG55KTogaW1wbGVtZW50IG1lXG4gICAgYXNzZXJ0KHRoaXMubmVnYXRpdmUgPT09IDApO1xuICAgIHJldHVybiB0aGlzLml1c2hybihiaXRzLCBoaW50LCBleHRlbmRlZCk7XG4gIH07XG5cbiAgLy8gU2hpZnQtbGVmdFxuICBCTi5wcm90b3R5cGUuc2hsbiA9IGZ1bmN0aW9uIHNobG4gKGJpdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmlzaGxuKGJpdHMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51c2hsbiA9IGZ1bmN0aW9uIHVzaGxuIChiaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pdXNobG4oYml0cyk7XG4gIH07XG5cbiAgLy8gU2hpZnQtcmlnaHRcbiAgQk4ucHJvdG90eXBlLnNocm4gPSBmdW5jdGlvbiBzaHJuIChiaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pc2hybihiaXRzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudXNocm4gPSBmdW5jdGlvbiB1c2hybiAoYml0cykge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaXVzaHJuKGJpdHMpO1xuICB9O1xuXG4gIC8vIFRlc3QgaWYgbiBiaXQgaXMgc2V0XG4gIEJOLnByb3RvdHlwZS50ZXN0biA9IGZ1bmN0aW9uIHRlc3RuIChiaXQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGJpdCA9PT0gJ251bWJlcicgJiYgYml0ID49IDApO1xuICAgIHZhciByID0gYml0ICUgMjY7XG4gICAgdmFyIHMgPSAoYml0IC0gcikgLyAyNjtcbiAgICB2YXIgcSA9IDEgPDwgcjtcblxuICAgIC8vIEZhc3QgY2FzZTogYml0IGlzIG11Y2ggaGlnaGVyIHRoYW4gYWxsIGV4aXN0aW5nIHdvcmRzXG4gICAgaWYgKHRoaXMubGVuZ3RoIDw9IHMpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIENoZWNrIGJpdCBhbmQgcmV0dXJuXG4gICAgdmFyIHcgPSB0aGlzLndvcmRzW3NdO1xuXG4gICAgcmV0dXJuICEhKHcgJiBxKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gb25seSBsb3dlcnMgYml0cyBvZiBudW1iZXIgKGluLXBsYWNlKVxuICBCTi5wcm90b3R5cGUuaW1hc2tuID0gZnVuY3Rpb24gaW1hc2tuIChiaXRzKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiaXRzID09PSAnbnVtYmVyJyAmJiBiaXRzID49IDApO1xuICAgIHZhciByID0gYml0cyAlIDI2O1xuICAgIHZhciBzID0gKGJpdHMgLSByKSAvIDI2O1xuXG4gICAgYXNzZXJ0KHRoaXMubmVnYXRpdmUgPT09IDAsICdpbWFza24gd29ya3Mgb25seSB3aXRoIHBvc2l0aXZlIG51bWJlcnMnKTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA8PSBzKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAociAhPT0gMCkge1xuICAgICAgcysrO1xuICAgIH1cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGgubWluKHMsIHRoaXMubGVuZ3RoKTtcblxuICAgIGlmIChyICE9PSAwKSB7XG4gICAgICB2YXIgbWFzayA9IDB4M2ZmZmZmZiBeICgoMHgzZmZmZmZmID4+PiByKSA8PCByKTtcbiAgICAgIHRoaXMud29yZHNbdGhpcy5sZW5ndGggLSAxXSAmPSBtYXNrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zdHJpcCgpO1xuICB9O1xuXG4gIC8vIFJldHVybiBvbmx5IGxvd2VycyBiaXRzIG9mIG51bWJlclxuICBCTi5wcm90b3R5cGUubWFza24gPSBmdW5jdGlvbiBtYXNrbiAoYml0cykge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaW1hc2tuKGJpdHMpO1xuICB9O1xuXG4gIC8vIEFkZCBwbGFpbiBudW1iZXIgYG51bWAgdG8gYHRoaXNgXG4gIEJOLnByb3RvdHlwZS5pYWRkbiA9IGZ1bmN0aW9uIGlhZGRuIChudW0pIHtcbiAgICBhc3NlcnQodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIGFzc2VydChudW0gPCAweDQwMDAwMDApO1xuICAgIGlmIChudW0gPCAwKSByZXR1cm4gdGhpcy5pc3VibigtbnVtKTtcblxuICAgIC8vIFBvc3NpYmxlIHNpZ24gY2hhbmdlXG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSAmJiAodGhpcy53b3Jkc1swXSB8IDApIDw9IG51bSkge1xuICAgICAgICB0aGlzLndvcmRzWzBdID0gbnVtIC0gKHRoaXMud29yZHNbMF0gfCAwKTtcbiAgICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMDtcbiAgICAgIHRoaXMuaXN1Ym4obnVtKTtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhvdXQgY2hlY2tzXG4gICAgcmV0dXJuIHRoaXMuX2lhZGRuKG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9pYWRkbiA9IGZ1bmN0aW9uIF9pYWRkbiAobnVtKSB7XG4gICAgdGhpcy53b3Jkc1swXSArPSBudW07XG5cbiAgICAvLyBDYXJyeVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGggJiYgdGhpcy53b3Jkc1tpXSA+PSAweDQwMDAwMDA7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSAtPSAweDQwMDAwMDA7XG4gICAgICBpZiAoaSA9PT0gdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMud29yZHNbaSArIDFdID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud29yZHNbaSArIDFdKys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGVuZ3RoID0gTWF0aC5tYXgodGhpcy5sZW5ndGgsIGkgKyAxKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIFN1YnRyYWN0IHBsYWluIG51bWJlciBgbnVtYCBmcm9tIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuaXN1Ym4gPSBmdW5jdGlvbiBpc3VibiAobnVtKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICBhc3NlcnQobnVtIDwgMHg0MDAwMDAwKTtcbiAgICBpZiAobnVtIDwgMCkgcmV0dXJuIHRoaXMuaWFkZG4oLW51bSk7XG5cbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICB0aGlzLmlhZGRuKG51bSk7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMud29yZHNbMF0gLT0gbnVtO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxICYmIHRoaXMud29yZHNbMF0gPCAwKSB7XG4gICAgICB0aGlzLndvcmRzWzBdID0gLXRoaXMud29yZHNbMF07XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FycnlcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGggJiYgdGhpcy53b3Jkc1tpXSA8IDA7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzW2ldICs9IDB4NDAwMDAwMDtcbiAgICAgICAgdGhpcy53b3Jkc1tpICsgMV0gLT0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuYWRkbiA9IGZ1bmN0aW9uIGFkZG4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaWFkZG4obnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuc3VibiA9IGZ1bmN0aW9uIHN1Ym4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaXN1Ym4obnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaWFicyA9IGZ1bmN0aW9uIGlhYnMgKCkge1xuICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uIGFicyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pYWJzKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9pc2hsbnN1Ym11bCA9IGZ1bmN0aW9uIF9pc2hsbnN1Ym11bCAobnVtLCBtdWwsIHNoaWZ0KSB7XG4gICAgdmFyIGxlbiA9IG51bS5sZW5ndGggKyBzaGlmdDtcbiAgICB2YXIgaTtcblxuICAgIHRoaXMuX2V4cGFuZChsZW4pO1xuXG4gICAgdmFyIHc7XG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3ID0gKHRoaXMud29yZHNbaSArIHNoaWZ0XSB8IDApICsgY2Fycnk7XG4gICAgICB2YXIgcmlnaHQgPSAobnVtLndvcmRzW2ldIHwgMCkgKiBtdWw7XG4gICAgICB3IC09IHJpZ2h0ICYgMHgzZmZmZmZmO1xuICAgICAgY2FycnkgPSAodyA+PiAyNikgLSAoKHJpZ2h0IC8gMHg0MDAwMDAwKSB8IDApO1xuICAgICAgdGhpcy53b3Jkc1tpICsgc2hpZnRdID0gdyAmIDB4M2ZmZmZmZjtcbiAgICB9XG4gICAgZm9yICg7IGkgPCB0aGlzLmxlbmd0aCAtIHNoaWZ0OyBpKyspIHtcbiAgICAgIHcgPSAodGhpcy53b3Jkc1tpICsgc2hpZnRdIHwgMCkgKyBjYXJyeTtcbiAgICAgIGNhcnJ5ID0gdyA+PiAyNjtcbiAgICAgIHRoaXMud29yZHNbaSArIHNoaWZ0XSA9IHcgJiAweDNmZmZmZmY7XG4gICAgfVxuXG4gICAgaWYgKGNhcnJ5ID09PSAwKSByZXR1cm4gdGhpcy5fc3RyaXAoKTtcblxuICAgIC8vIFN1YnRyYWN0aW9uIG92ZXJmbG93XG4gICAgYXNzZXJ0KGNhcnJ5ID09PSAtMSk7XG4gICAgY2FycnkgPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3ID0gLSh0aGlzLndvcmRzW2ldIHwgMCkgKyBjYXJyeTtcbiAgICAgIGNhcnJ5ID0gdyA+PiAyNjtcbiAgICAgIHRoaXMud29yZHNbaV0gPSB3ICYgMHgzZmZmZmZmO1xuICAgIH1cbiAgICB0aGlzLm5lZ2F0aXZlID0gMTtcblxuICAgIHJldHVybiB0aGlzLl9zdHJpcCgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5fd29yZERpdiA9IGZ1bmN0aW9uIF93b3JkRGl2IChudW0sIG1vZGUpIHtcbiAgICB2YXIgc2hpZnQgPSB0aGlzLmxlbmd0aCAtIG51bS5sZW5ndGg7XG5cbiAgICB2YXIgYSA9IHRoaXMuY2xvbmUoKTtcbiAgICB2YXIgYiA9IG51bTtcblxuICAgIC8vIE5vcm1hbGl6ZVxuICAgIHZhciBiaGkgPSBiLndvcmRzW2IubGVuZ3RoIC0gMV0gfCAwO1xuICAgIHZhciBiaGlCaXRzID0gdGhpcy5fY291bnRCaXRzKGJoaSk7XG4gICAgc2hpZnQgPSAyNiAtIGJoaUJpdHM7XG4gICAgaWYgKHNoaWZ0ICE9PSAwKSB7XG4gICAgICBiID0gYi51c2hsbihzaGlmdCk7XG4gICAgICBhLml1c2hsbihzaGlmdCk7XG4gICAgICBiaGkgPSBiLndvcmRzW2IubGVuZ3RoIC0gMV0gfCAwO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgcXVvdGllbnRcbiAgICB2YXIgbSA9IGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gICAgdmFyIHE7XG5cbiAgICBpZiAobW9kZSAhPT0gJ21vZCcpIHtcbiAgICAgIHEgPSBuZXcgQk4obnVsbCk7XG4gICAgICBxLmxlbmd0aCA9IG0gKyAxO1xuICAgICAgcS53b3JkcyA9IG5ldyBBcnJheShxLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcS53b3Jkc1tpXSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRpZmYgPSBhLmNsb25lKCkuX2lzaGxuc3VibXVsKGIsIDEsIG0pO1xuICAgIGlmIChkaWZmLm5lZ2F0aXZlID09PSAwKSB7XG4gICAgICBhID0gZGlmZjtcbiAgICAgIGlmIChxKSB7XG4gICAgICAgIHEud29yZHNbbV0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSBtIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIHZhciBxaiA9IChhLndvcmRzW2IubGVuZ3RoICsgal0gfCAwKSAqIDB4NDAwMDAwMCArXG4gICAgICAgIChhLndvcmRzW2IubGVuZ3RoICsgaiAtIDFdIHwgMCk7XG5cbiAgICAgIC8vIE5PVEU6IChxaiAvIGJoaSkgaXMgKDB4M2ZmZmZmZiAqIDB4NDAwMDAwMCArIDB4M2ZmZmZmZikgLyAweDIwMDAwMDAgbWF4XG4gICAgICAvLyAoMHg3ZmZmZmZmKVxuICAgICAgcWogPSBNYXRoLm1pbigocWogLyBiaGkpIHwgMCwgMHgzZmZmZmZmKTtcblxuICAgICAgYS5faXNobG5zdWJtdWwoYiwgcWosIGopO1xuICAgICAgd2hpbGUgKGEubmVnYXRpdmUgIT09IDApIHtcbiAgICAgICAgcWotLTtcbiAgICAgICAgYS5uZWdhdGl2ZSA9IDA7XG4gICAgICAgIGEuX2lzaGxuc3VibXVsKGIsIDEsIGopO1xuICAgICAgICBpZiAoIWEuaXNaZXJvKCkpIHtcbiAgICAgICAgICBhLm5lZ2F0aXZlIF49IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChxKSB7XG4gICAgICAgIHEud29yZHNbal0gPSBxajtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHEpIHtcbiAgICAgIHEuX3N0cmlwKCk7XG4gICAgfVxuICAgIGEuX3N0cmlwKCk7XG5cbiAgICAvLyBEZW5vcm1hbGl6ZVxuICAgIGlmIChtb2RlICE9PSAnZGl2JyAmJiBzaGlmdCAhPT0gMCkge1xuICAgICAgYS5pdXNocm4oc2hpZnQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkaXY6IHEgfHwgbnVsbCxcbiAgICAgIG1vZDogYVxuICAgIH07XG4gIH07XG5cbiAgLy8gTk9URTogMSkgYG1vZGVgIGNhbiBiZSBzZXQgdG8gYG1vZGAgdG8gcmVxdWVzdCBtb2Qgb25seSxcbiAgLy8gICAgICAgdG8gYGRpdmAgdG8gcmVxdWVzdCBkaXYgb25seSwgb3IgYmUgYWJzZW50IHRvXG4gIC8vICAgICAgIHJlcXVlc3QgYm90aCBkaXYgJiBtb2RcbiAgLy8gICAgICAgMikgYHBvc2l0aXZlYCBpcyB0cnVlIGlmIHVuc2lnbmVkIG1vZCBpcyByZXF1ZXN0ZWRcbiAgQk4ucHJvdG90eXBlLmRpdm1vZCA9IGZ1bmN0aW9uIGRpdm1vZCAobnVtLCBtb2RlLCBwb3NpdGl2ZSkge1xuICAgIGFzc2VydCghbnVtLmlzWmVybygpKTtcblxuICAgIGlmICh0aGlzLmlzWmVybygpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXY6IG5ldyBCTigwKSxcbiAgICAgICAgbW9kOiBuZXcgQk4oMClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGRpdiwgbW9kLCByZXM7XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDAgJiYgbnVtLm5lZ2F0aXZlID09PSAwKSB7XG4gICAgICByZXMgPSB0aGlzLm5lZygpLmRpdm1vZChudW0sIG1vZGUpO1xuXG4gICAgICBpZiAobW9kZSAhPT0gJ21vZCcpIHtcbiAgICAgICAgZGl2ID0gcmVzLmRpdi5uZWcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZGUgIT09ICdkaXYnKSB7XG4gICAgICAgIG1vZCA9IHJlcy5tb2QubmVnKCk7XG4gICAgICAgIGlmIChwb3NpdGl2ZSAmJiBtb2QubmVnYXRpdmUgIT09IDApIHtcbiAgICAgICAgICBtb2QuaWFkZChudW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpdjogZGl2LFxuICAgICAgICBtb2Q6IG1vZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZWdhdGl2ZSA9PT0gMCAmJiBudW0ubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIHJlcyA9IHRoaXMuZGl2bW9kKG51bS5uZWcoKSwgbW9kZSk7XG5cbiAgICAgIGlmIChtb2RlICE9PSAnbW9kJykge1xuICAgICAgICBkaXYgPSByZXMuZGl2Lm5lZygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXY6IGRpdixcbiAgICAgICAgbW9kOiByZXMubW9kXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICgodGhpcy5uZWdhdGl2ZSAmIG51bS5uZWdhdGl2ZSkgIT09IDApIHtcbiAgICAgIHJlcyA9IHRoaXMubmVnKCkuZGl2bW9kKG51bS5uZWcoKSwgbW9kZSk7XG5cbiAgICAgIGlmIChtb2RlICE9PSAnZGl2Jykge1xuICAgICAgICBtb2QgPSByZXMubW9kLm5lZygpO1xuICAgICAgICBpZiAocG9zaXRpdmUgJiYgbW9kLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICAgICAgbW9kLmlzdWIobnVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXY6IHJlcy5kaXYsXG4gICAgICAgIG1vZDogbW9kXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEJvdGggbnVtYmVycyBhcmUgcG9zaXRpdmUgYXQgdGhpcyBwb2ludFxuXG4gICAgLy8gU3RyaXAgYm90aCBudW1iZXJzIHRvIGFwcHJveGltYXRlIHNoaWZ0IHZhbHVlXG4gICAgaWYgKG51bS5sZW5ndGggPiB0aGlzLmxlbmd0aCB8fCB0aGlzLmNtcChudW0pIDwgMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGl2OiBuZXcgQk4oMCksXG4gICAgICAgIG1vZDogdGhpc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBWZXJ5IHNob3J0IHJlZHVjdGlvblxuICAgIGlmIChudW0ubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAobW9kZSA9PT0gJ2RpdicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaXY6IHRoaXMuZGl2bihudW0ud29yZHNbMF0pLFxuICAgICAgICAgIG1vZDogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kZSA9PT0gJ21vZCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaXY6IG51bGwsXG4gICAgICAgICAgbW9kOiBuZXcgQk4odGhpcy5tb2RybihudW0ud29yZHNbMF0pKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXY6IHRoaXMuZGl2bihudW0ud29yZHNbMF0pLFxuICAgICAgICBtb2Q6IG5ldyBCTih0aGlzLm1vZHJuKG51bS53b3Jkc1swXSkpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl93b3JkRGl2KG51bSwgbW9kZSk7XG4gIH07XG5cbiAgLy8gRmluZCBgdGhpc2AgLyBgbnVtYFxuICBCTi5wcm90b3R5cGUuZGl2ID0gZnVuY3Rpb24gZGl2IChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5kaXZtb2QobnVtLCAnZGl2JywgZmFsc2UpLmRpdjtcbiAgfTtcblxuICAvLyBGaW5kIGB0aGlzYCAlIGBudW1gXG4gIEJOLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbiBtb2QgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmRpdm1vZChudW0sICdtb2QnLCBmYWxzZSkubW9kO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51bW9kID0gZnVuY3Rpb24gdW1vZCAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2bW9kKG51bSwgJ21vZCcsIHRydWUpLm1vZDtcbiAgfTtcblxuICAvLyBGaW5kIFJvdW5kKGB0aGlzYCAvIGBudW1gKVxuICBCTi5wcm90b3R5cGUuZGl2Um91bmQgPSBmdW5jdGlvbiBkaXZSb3VuZCAobnVtKSB7XG4gICAgdmFyIGRtID0gdGhpcy5kaXZtb2QobnVtKTtcblxuICAgIC8vIEZhc3QgY2FzZSAtIGV4YWN0IGRpdmlzaW9uXG4gICAgaWYgKGRtLm1vZC5pc1plcm8oKSkgcmV0dXJuIGRtLmRpdjtcblxuICAgIHZhciBtb2QgPSBkbS5kaXYubmVnYXRpdmUgIT09IDAgPyBkbS5tb2QuaXN1YihudW0pIDogZG0ubW9kO1xuXG4gICAgdmFyIGhhbGYgPSBudW0udXNocm4oMSk7XG4gICAgdmFyIHIyID0gbnVtLmFuZGxuKDEpO1xuICAgIHZhciBjbXAgPSBtb2QuY21wKGhhbGYpO1xuXG4gICAgLy8gUm91bmQgZG93blxuICAgIGlmIChjbXAgPCAwIHx8IChyMiA9PT0gMSAmJiBjbXAgPT09IDApKSByZXR1cm4gZG0uZGl2O1xuXG4gICAgLy8gUm91bmQgdXBcbiAgICByZXR1cm4gZG0uZGl2Lm5lZ2F0aXZlICE9PSAwID8gZG0uZGl2LmlzdWJuKDEpIDogZG0uZGl2LmlhZGRuKDEpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5tb2RybiA9IGZ1bmN0aW9uIG1vZHJuIChudW0pIHtcbiAgICB2YXIgaXNOZWdOdW0gPSBudW0gPCAwO1xuICAgIGlmIChpc05lZ051bSkgbnVtID0gLW51bTtcblxuICAgIGFzc2VydChudW0gPD0gMHgzZmZmZmZmKTtcbiAgICB2YXIgcCA9ICgxIDw8IDI2KSAlIG51bTtcblxuICAgIHZhciBhY2MgPSAwO1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBhY2MgPSAocCAqIGFjYyArICh0aGlzLndvcmRzW2ldIHwgMCkpICUgbnVtO1xuICAgIH1cblxuICAgIHJldHVybiBpc05lZ051bSA/IC1hY2MgOiBhY2M7XG4gIH07XG5cbiAgLy8gV0FSTklORzogREVQUkVDQVRFRFxuICBCTi5wcm90b3R5cGUubW9kbiA9IGZ1bmN0aW9uIG1vZG4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLm1vZHJuKG51bSk7XG4gIH07XG5cbiAgLy8gSW4tcGxhY2UgZGl2aXNpb24gYnkgbnVtYmVyXG4gIEJOLnByb3RvdHlwZS5pZGl2biA9IGZ1bmN0aW9uIGlkaXZuIChudW0pIHtcbiAgICB2YXIgaXNOZWdOdW0gPSBudW0gPCAwO1xuICAgIGlmIChpc05lZ051bSkgbnVtID0gLW51bTtcblxuICAgIGFzc2VydChudW0gPD0gMHgzZmZmZmZmKTtcblxuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciB3ID0gKHRoaXMud29yZHNbaV0gfCAwKSArIGNhcnJ5ICogMHg0MDAwMDAwO1xuICAgICAgdGhpcy53b3Jkc1tpXSA9ICh3IC8gbnVtKSB8IDA7XG4gICAgICBjYXJyeSA9IHcgJSBudW07XG4gICAgfVxuXG4gICAgdGhpcy5fc3RyaXAoKTtcbiAgICByZXR1cm4gaXNOZWdOdW0gPyB0aGlzLmluZWcoKSA6IHRoaXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmRpdm4gPSBmdW5jdGlvbiBkaXZuIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmlkaXZuKG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmVnY2QgPSBmdW5jdGlvbiBlZ2NkIChwKSB7XG4gICAgYXNzZXJ0KHAubmVnYXRpdmUgPT09IDApO1xuICAgIGFzc2VydCghcC5pc1plcm8oKSk7XG5cbiAgICB2YXIgeCA9IHRoaXM7XG4gICAgdmFyIHkgPSBwLmNsb25lKCk7XG5cbiAgICBpZiAoeC5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgeCA9IHgudW1vZChwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IHguY2xvbmUoKTtcbiAgICB9XG5cbiAgICAvLyBBICogeCArIEIgKiB5ID0geFxuICAgIHZhciBBID0gbmV3IEJOKDEpO1xuICAgIHZhciBCID0gbmV3IEJOKDApO1xuXG4gICAgLy8gQyAqIHggKyBEICogeSA9IHlcbiAgICB2YXIgQyA9IG5ldyBCTigwKTtcbiAgICB2YXIgRCA9IG5ldyBCTigxKTtcblxuICAgIHZhciBnID0gMDtcblxuICAgIHdoaWxlICh4LmlzRXZlbigpICYmIHkuaXNFdmVuKCkpIHtcbiAgICAgIHguaXVzaHJuKDEpO1xuICAgICAgeS5pdXNocm4oMSk7XG4gICAgICArK2c7XG4gICAgfVxuXG4gICAgdmFyIHlwID0geS5jbG9uZSgpO1xuICAgIHZhciB4cCA9IHguY2xvbmUoKTtcblxuICAgIHdoaWxlICgheC5pc1plcm8oKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGltID0gMTsgKHgud29yZHNbMF0gJiBpbSkgPT09IDAgJiYgaSA8IDI2OyArK2ksIGltIDw8PSAxKTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICB4Lml1c2hybihpKTtcbiAgICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgICBpZiAoQS5pc09kZCgpIHx8IEIuaXNPZGQoKSkge1xuICAgICAgICAgICAgQS5pYWRkKHlwKTtcbiAgICAgICAgICAgIEIuaXN1Yih4cCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQS5pdXNocm4oMSk7XG4gICAgICAgICAgQi5pdXNocm4oMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaiA9IDAsIGptID0gMTsgKHkud29yZHNbMF0gJiBqbSkgPT09IDAgJiYgaiA8IDI2OyArK2osIGptIDw8PSAxKTtcbiAgICAgIGlmIChqID4gMCkge1xuICAgICAgICB5Lml1c2hybihqKTtcbiAgICAgICAgd2hpbGUgKGotLSA+IDApIHtcbiAgICAgICAgICBpZiAoQy5pc09kZCgpIHx8IEQuaXNPZGQoKSkge1xuICAgICAgICAgICAgQy5pYWRkKHlwKTtcbiAgICAgICAgICAgIEQuaXN1Yih4cCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQy5pdXNocm4oMSk7XG4gICAgICAgICAgRC5pdXNocm4oMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHguY21wKHkpID49IDApIHtcbiAgICAgICAgeC5pc3ViKHkpO1xuICAgICAgICBBLmlzdWIoQyk7XG4gICAgICAgIEIuaXN1YihEKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHkuaXN1Yih4KTtcbiAgICAgICAgQy5pc3ViKEEpO1xuICAgICAgICBELmlzdWIoQik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGE6IEMsXG4gICAgICBiOiBELFxuICAgICAgZ2NkOiB5Lml1c2hsbihnKVxuICAgIH07XG4gIH07XG5cbiAgLy8gVGhpcyBpcyByZWR1Y2VkIGluY2FybmF0aW9uIG9mIHRoZSBiaW5hcnkgRUVBXG4gIC8vIGFib3ZlLCBkZXNpZ25hdGVkIHRvIGludmVydCBtZW1iZXJzIG9mIHRoZVxuICAvLyBfcHJpbWVfIGZpZWxkcyBGKHApIGF0IGEgbWF4aW1hbCBzcGVlZFxuICBCTi5wcm90b3R5cGUuX2ludm1wID0gZnVuY3Rpb24gX2ludm1wIChwKSB7XG4gICAgYXNzZXJ0KHAubmVnYXRpdmUgPT09IDApO1xuICAgIGFzc2VydCghcC5pc1plcm8oKSk7XG5cbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgdmFyIGIgPSBwLmNsb25lKCk7XG5cbiAgICBpZiAoYS5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgYSA9IGEudW1vZChwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IGEuY2xvbmUoKTtcbiAgICB9XG5cbiAgICB2YXIgeDEgPSBuZXcgQk4oMSk7XG4gICAgdmFyIHgyID0gbmV3IEJOKDApO1xuXG4gICAgdmFyIGRlbHRhID0gYi5jbG9uZSgpO1xuXG4gICAgd2hpbGUgKGEuY21wbigxKSA+IDAgJiYgYi5jbXBuKDEpID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGltID0gMTsgKGEud29yZHNbMF0gJiBpbSkgPT09IDAgJiYgaSA8IDI2OyArK2ksIGltIDw8PSAxKTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBhLml1c2hybihpKTtcbiAgICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgICBpZiAoeDEuaXNPZGQoKSkge1xuICAgICAgICAgICAgeDEuaWFkZChkZWx0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeDEuaXVzaHJuKDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGogPSAwLCBqbSA9IDE7IChiLndvcmRzWzBdICYgam0pID09PSAwICYmIGogPCAyNjsgKytqLCBqbSA8PD0gMSk7XG4gICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgYi5pdXNocm4oaik7XG4gICAgICAgIHdoaWxlIChqLS0gPiAwKSB7XG4gICAgICAgICAgaWYgKHgyLmlzT2RkKCkpIHtcbiAgICAgICAgICAgIHgyLmlhZGQoZGVsdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHgyLml1c2hybigxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYS5jbXAoYikgPj0gMCkge1xuICAgICAgICBhLmlzdWIoYik7XG4gICAgICAgIHgxLmlzdWIoeDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYi5pc3ViKGEpO1xuICAgICAgICB4Mi5pc3ViKHgxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzO1xuICAgIGlmIChhLmNtcG4oMSkgPT09IDApIHtcbiAgICAgIHJlcyA9IHgxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSB4MjtcbiAgICB9XG5cbiAgICBpZiAocmVzLmNtcG4oMCkgPCAwKSB7XG4gICAgICByZXMuaWFkZChwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5nY2QgPSBmdW5jdGlvbiBnY2QgKG51bSkge1xuICAgIGlmICh0aGlzLmlzWmVybygpKSByZXR1cm4gbnVtLmFicygpO1xuICAgIGlmIChudW0uaXNaZXJvKCkpIHJldHVybiB0aGlzLmFicygpO1xuXG4gICAgdmFyIGEgPSB0aGlzLmNsb25lKCk7XG4gICAgdmFyIGIgPSBudW0uY2xvbmUoKTtcbiAgICBhLm5lZ2F0aXZlID0gMDtcbiAgICBiLm5lZ2F0aXZlID0gMDtcblxuICAgIC8vIFJlbW92ZSBjb21tb24gZmFjdG9yIG9mIHR3b1xuICAgIGZvciAodmFyIHNoaWZ0ID0gMDsgYS5pc0V2ZW4oKSAmJiBiLmlzRXZlbigpOyBzaGlmdCsrKSB7XG4gICAgICBhLml1c2hybigxKTtcbiAgICAgIGIuaXVzaHJuKDEpO1xuICAgIH1cblxuICAgIGRvIHtcbiAgICAgIHdoaWxlIChhLmlzRXZlbigpKSB7XG4gICAgICAgIGEuaXVzaHJuKDEpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGIuaXNFdmVuKCkpIHtcbiAgICAgICAgYi5pdXNocm4oMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByID0gYS5jbXAoYik7XG4gICAgICBpZiAociA8IDApIHtcbiAgICAgICAgLy8gU3dhcCBgYWAgYW5kIGBiYCB0byBtYWtlIGBhYCBhbHdheXMgYmlnZ2VyIHRoYW4gYGJgXG4gICAgICAgIHZhciB0ID0gYTtcbiAgICAgICAgYSA9IGI7XG4gICAgICAgIGIgPSB0O1xuICAgICAgfSBlbHNlIGlmIChyID09PSAwIHx8IGIuY21wbigxKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgYS5pc3ViKGIpO1xuICAgIH0gd2hpbGUgKHRydWUpO1xuXG4gICAgcmV0dXJuIGIuaXVzaGxuKHNoaWZ0KTtcbiAgfTtcblxuICAvLyBJbnZlcnQgbnVtYmVyIGluIHRoZSBmaWVsZCBGKG51bSlcbiAgQk4ucHJvdG90eXBlLmludm0gPSBmdW5jdGlvbiBpbnZtIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5lZ2NkKG51bSkuYS51bW9kKG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uIGlzRXZlbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLndvcmRzWzBdICYgMSkgPT09IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gaXNPZGQgKCkge1xuICAgIHJldHVybiAodGhpcy53b3Jkc1swXSAmIDEpID09PSAxO1xuICB9O1xuXG4gIC8vIEFuZCBmaXJzdCB3b3JkIGFuZCBudW1cbiAgQk4ucHJvdG90eXBlLmFuZGxuID0gZnVuY3Rpb24gYW5kbG4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLndvcmRzWzBdICYgbnVtO1xuICB9O1xuXG4gIC8vIEluY3JlbWVudCBhdCB0aGUgYml0IHBvc2l0aW9uIGluLWxpbmVcbiAgQk4ucHJvdG90eXBlLmJpbmNuID0gZnVuY3Rpb24gYmluY24gKGJpdCkge1xuICAgIGFzc2VydCh0eXBlb2YgYml0ID09PSAnbnVtYmVyJyk7XG4gICAgdmFyIHIgPSBiaXQgJSAyNjtcbiAgICB2YXIgcyA9IChiaXQgLSByKSAvIDI2O1xuICAgIHZhciBxID0gMSA8PCByO1xuXG4gICAgLy8gRmFzdCBjYXNlOiBiaXQgaXMgbXVjaCBoaWdoZXIgdGhhbiBhbGwgZXhpc3Rpbmcgd29yZHNcbiAgICBpZiAodGhpcy5sZW5ndGggPD0gcykge1xuICAgICAgdGhpcy5fZXhwYW5kKHMgKyAxKTtcbiAgICAgIHRoaXMud29yZHNbc10gfD0gcTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEFkZCBiaXQgYW5kIHByb3BhZ2F0ZSwgaWYgbmVlZGVkXG4gICAgdmFyIGNhcnJ5ID0gcTtcbiAgICBmb3IgKHZhciBpID0gczsgY2FycnkgIT09IDAgJiYgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB3ID0gdGhpcy53b3Jkc1tpXSB8IDA7XG4gICAgICB3ICs9IGNhcnJ5O1xuICAgICAgY2FycnkgPSB3ID4+PiAyNjtcbiAgICAgIHcgJj0gMHgzZmZmZmZmO1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHc7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IGNhcnJ5O1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uIGlzWmVybyAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAxICYmIHRoaXMud29yZHNbMF0gPT09IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmNtcG4gPSBmdW5jdGlvbiBjbXBuIChudW0pIHtcbiAgICB2YXIgbmVnYXRpdmUgPSBudW0gPCAwO1xuXG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDAgJiYgIW5lZ2F0aXZlKSByZXR1cm4gLTE7XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgPT09IDAgJiYgbmVnYXRpdmUpIHJldHVybiAxO1xuXG4gICAgdGhpcy5fc3RyaXAoKTtcblxuICAgIHZhciByZXM7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVzID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5lZ2F0aXZlKSB7XG4gICAgICAgIG51bSA9IC1udW07XG4gICAgICB9XG5cbiAgICAgIGFzc2VydChudW0gPD0gMHgzZmZmZmZmLCAnTnVtYmVyIGlzIHRvbyBiaWcnKTtcblxuICAgICAgdmFyIHcgPSB0aGlzLndvcmRzWzBdIHwgMDtcbiAgICAgIHJlcyA9IHcgPT09IG51bSA/IDAgOiB3IDwgbnVtID8gLTEgOiAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCkgcmV0dXJuIC1yZXMgfCAwO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgLy8gQ29tcGFyZSB0d28gbnVtYmVycyBhbmQgcmV0dXJuOlxuICAvLyAxIC0gaWYgYHRoaXNgID4gYG51bWBcbiAgLy8gMCAtIGlmIGB0aGlzYCA9PSBgbnVtYFxuICAvLyAtMSAtIGlmIGB0aGlzYCA8IGBudW1gXG4gIEJOLnByb3RvdHlwZS5jbXAgPSBmdW5jdGlvbiBjbXAgKG51bSkge1xuICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwICYmIG51bS5uZWdhdGl2ZSA9PT0gMCkgcmV0dXJuIC0xO1xuICAgIGlmICh0aGlzLm5lZ2F0aXZlID09PSAwICYmIG51bS5uZWdhdGl2ZSAhPT0gMCkgcmV0dXJuIDE7XG5cbiAgICB2YXIgcmVzID0gdGhpcy51Y21wKG51bSk7XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHJldHVybiAtcmVzIHwgMDtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8vIFVuc2lnbmVkIGNvbXBhcmlzb25cbiAgQk4ucHJvdG90eXBlLnVjbXAgPSBmdW5jdGlvbiB1Y21wIChudW0pIHtcbiAgICAvLyBBdCB0aGlzIHBvaW50IGJvdGggbnVtYmVycyBoYXZlIHRoZSBzYW1lIHNpZ25cbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSByZXR1cm4gMTtcbiAgICBpZiAodGhpcy5sZW5ndGggPCBudW0ubGVuZ3RoKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgcmVzID0gMDtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGEgPSB0aGlzLndvcmRzW2ldIHwgMDtcbiAgICAgIHZhciBiID0gbnVtLndvcmRzW2ldIHwgMDtcblxuICAgICAgaWYgKGEgPT09IGIpIGNvbnRpbnVlO1xuICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJlcyA9IC0xO1xuICAgICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgICByZXMgPSAxO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmd0biA9IGZ1bmN0aW9uIGd0biAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wbihudW0pID09PSAxO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5ndCA9IGZ1bmN0aW9uIGd0IChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXAobnVtKSA9PT0gMTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZ3RlbiA9IGZ1bmN0aW9uIGd0ZW4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcG4obnVtKSA+PSAwO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5ndGUgPSBmdW5jdGlvbiBndGUgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcChudW0pID49IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmx0biA9IGZ1bmN0aW9uIGx0biAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wbihudW0pID09PSAtMTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUubHQgPSBmdW5jdGlvbiBsdCAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wKG51bSkgPT09IC0xO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5sdGVuID0gZnVuY3Rpb24gbHRlbiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wbihudW0pIDw9IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmx0ZSA9IGZ1bmN0aW9uIGx0ZSAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wKG51bSkgPD0gMDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZXFuID0gZnVuY3Rpb24gZXFuIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXBuKG51bSkgPT09IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmVxID0gZnVuY3Rpb24gZXEgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcChudW0pID09PSAwO1xuICB9O1xuXG4gIC8vXG4gIC8vIEEgcmVkdWNlIGNvbnRleHQsIGNvdWxkIGJlIHVzaW5nIG1vbnRnb21lcnkgb3Igc29tZXRoaW5nIGJldHRlciwgZGVwZW5kaW5nXG4gIC8vIG9uIHRoZSBgbWAgaXRzZWxmLlxuICAvL1xuICBCTi5yZWQgPSBmdW5jdGlvbiByZWQgKG51bSkge1xuICAgIHJldHVybiBuZXcgUmVkKG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnRvUmVkID0gZnVuY3Rpb24gdG9SZWQgKGN0eCkge1xuICAgIGFzc2VydCghdGhpcy5yZWQsICdBbHJlYWR5IGEgbnVtYmVyIGluIHJlZHVjdGlvbiBjb250ZXh0Jyk7XG4gICAgYXNzZXJ0KHRoaXMubmVnYXRpdmUgPT09IDAsICdyZWQgd29ya3Mgb25seSB3aXRoIHBvc2l0aXZlcycpO1xuICAgIHJldHVybiBjdHguY29udmVydFRvKHRoaXMpLl9mb3JjZVJlZChjdHgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5mcm9tUmVkID0gZnVuY3Rpb24gZnJvbVJlZCAoKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAnZnJvbVJlZCB3b3JrcyBvbmx5IHdpdGggbnVtYmVycyBpbiByZWR1Y3Rpb24gY29udGV4dCcpO1xuICAgIHJldHVybiB0aGlzLnJlZC5jb252ZXJ0RnJvbSh0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX2ZvcmNlUmVkID0gZnVuY3Rpb24gX2ZvcmNlUmVkIChjdHgpIHtcbiAgICB0aGlzLnJlZCA9IGN0eDtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZm9yY2VSZWQgPSBmdW5jdGlvbiBmb3JjZVJlZCAoY3R4KSB7XG4gICAgYXNzZXJ0KCF0aGlzLnJlZCwgJ0FscmVhZHkgYSBudW1iZXIgaW4gcmVkdWN0aW9uIGNvbnRleHQnKTtcbiAgICByZXR1cm4gdGhpcy5fZm9yY2VSZWQoY3R4KTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkQWRkID0gZnVuY3Rpb24gcmVkQWRkIChudW0pIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRBZGQgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLmFkZCh0aGlzLCBudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRJQWRkID0gZnVuY3Rpb24gcmVkSUFkZCAobnVtKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkSUFkZCB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuaWFkZCh0aGlzLCBudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRTdWIgPSBmdW5jdGlvbiByZWRTdWIgKG51bSkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZFN1YiB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuc3ViKHRoaXMsIG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZElTdWIgPSBmdW5jdGlvbiByZWRJU3ViIChudW0pIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRJU3ViIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHJldHVybiB0aGlzLnJlZC5pc3ViKHRoaXMsIG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZFNobCA9IGZ1bmN0aW9uIHJlZFNobCAobnVtKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkU2hsIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHJldHVybiB0aGlzLnJlZC5zaGwodGhpcywgbnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkTXVsID0gZnVuY3Rpb24gcmVkTXVsIChudW0pIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRNdWwgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgdGhpcy5yZWQuX3ZlcmlmeTIodGhpcywgbnVtKTtcbiAgICByZXR1cm4gdGhpcy5yZWQubXVsKHRoaXMsIG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZElNdWwgPSBmdW5jdGlvbiByZWRJTXVsIChudW0pIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRNdWwgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgdGhpcy5yZWQuX3ZlcmlmeTIodGhpcywgbnVtKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuaW11bCh0aGlzLCBudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRTcXIgPSBmdW5jdGlvbiByZWRTcXIgKCkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZFNxciB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICB0aGlzLnJlZC5fdmVyaWZ5MSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuc3FyKHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRJU3FyID0gZnVuY3Rpb24gcmVkSVNxciAoKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkSVNxciB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICB0aGlzLnJlZC5fdmVyaWZ5MSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuaXNxcih0aGlzKTtcbiAgfTtcblxuICAvLyBTcXVhcmUgcm9vdCBvdmVyIHBcbiAgQk4ucHJvdG90eXBlLnJlZFNxcnQgPSBmdW5jdGlvbiByZWRTcXJ0ICgpIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRTcXJ0IHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHRoaXMucmVkLl92ZXJpZnkxKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnJlZC5zcXJ0KHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRJbnZtID0gZnVuY3Rpb24gcmVkSW52bSAoKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkSW52bSB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICB0aGlzLnJlZC5fdmVyaWZ5MSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuaW52bSh0aGlzKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gbmVnYXRpdmUgY2xvbmUgb2YgYHRoaXNgICUgYHJlZCBtb2R1bG9gXG4gIEJOLnByb3RvdHlwZS5yZWROZWcgPSBmdW5jdGlvbiByZWROZWcgKCkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZE5lZyB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICB0aGlzLnJlZC5fdmVyaWZ5MSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5yZWQubmVnKHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRQb3cgPSBmdW5jdGlvbiByZWRQb3cgKG51bSkge1xuICAgIGFzc2VydCh0aGlzLnJlZCAmJiAhbnVtLnJlZCwgJ3JlZFBvdyhub3JtYWxOdW0pJyk7XG4gICAgdGhpcy5yZWQuX3ZlcmlmeTEodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLnBvdyh0aGlzLCBudW0pO1xuICB9O1xuXG4gIC8vIFByaW1lIG51bWJlcnMgd2l0aCBlZmZpY2llbnQgcmVkdWN0aW9uXG4gIHZhciBwcmltZXMgPSB7XG4gICAgazI1NjogbnVsbCxcbiAgICBwMjI0OiBudWxsLFxuICAgIHAxOTI6IG51bGwsXG4gICAgcDI1NTE5OiBudWxsXG4gIH07XG5cbiAgLy8gUHNldWRvLU1lcnNlbm5lIHByaW1lXG4gIGZ1bmN0aW9uIE1QcmltZSAobmFtZSwgcCkge1xuICAgIC8vIFAgPSAyIF4gTiAtIEtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucCA9IG5ldyBCTihwLCAxNik7XG4gICAgdGhpcy5uID0gdGhpcy5wLmJpdExlbmd0aCgpO1xuICAgIHRoaXMuayA9IG5ldyBCTigxKS5pdXNobG4odGhpcy5uKS5pc3ViKHRoaXMucCk7XG5cbiAgICB0aGlzLnRtcCA9IHRoaXMuX3RtcCgpO1xuICB9XG5cbiAgTVByaW1lLnByb3RvdHlwZS5fdG1wID0gZnVuY3Rpb24gX3RtcCAoKSB7XG4gICAgdmFyIHRtcCA9IG5ldyBCTihudWxsKTtcbiAgICB0bXAud29yZHMgPSBuZXcgQXJyYXkoTWF0aC5jZWlsKHRoaXMubiAvIDEzKSk7XG4gICAgcmV0dXJuIHRtcDtcbiAgfTtcblxuICBNUHJpbWUucHJvdG90eXBlLmlyZWR1Y2UgPSBmdW5jdGlvbiBpcmVkdWNlIChudW0pIHtcbiAgICAvLyBBc3N1bWVzIHRoYXQgYG51bWAgaXMgbGVzcyB0aGFuIGBQXjJgXG4gICAgLy8gbnVtID0gSEkgKiAoMiBeIE4gLSBLKSArIEhJICogSyArIExPID0gSEkgKiBLICsgTE8gKG1vZCBQKVxuICAgIHZhciByID0gbnVtO1xuICAgIHZhciBybGVuO1xuXG4gICAgZG8ge1xuICAgICAgdGhpcy5zcGxpdChyLCB0aGlzLnRtcCk7XG4gICAgICByID0gdGhpcy5pbXVsSyhyKTtcbiAgICAgIHIgPSByLmlhZGQodGhpcy50bXApO1xuICAgICAgcmxlbiA9IHIuYml0TGVuZ3RoKCk7XG4gICAgfSB3aGlsZSAocmxlbiA+IHRoaXMubik7XG5cbiAgICB2YXIgY21wID0gcmxlbiA8IHRoaXMubiA/IC0xIDogci51Y21wKHRoaXMucCk7XG4gICAgaWYgKGNtcCA9PT0gMCkge1xuICAgICAgci53b3Jkc1swXSA9IDA7XG4gICAgICByLmxlbmd0aCA9IDE7XG4gICAgfSBlbHNlIGlmIChjbXAgPiAwKSB7XG4gICAgICByLmlzdWIodGhpcy5wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHIuc3RyaXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyByIGlzIGEgQk4gdjQgaW5zdGFuY2VcbiAgICAgICAgci5zdHJpcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gciBpcyBhIEJOIHY1IGluc3RhbmNlXG4gICAgICAgIHIuX3N0cmlwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgTVByaW1lLnByb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uIHNwbGl0IChpbnB1dCwgb3V0KSB7XG4gICAgaW5wdXQuaXVzaHJuKHRoaXMubiwgMCwgb3V0KTtcbiAgfTtcblxuICBNUHJpbWUucHJvdG90eXBlLmltdWxLID0gZnVuY3Rpb24gaW11bEsgKG51bSkge1xuICAgIHJldHVybiBudW0uaW11bCh0aGlzLmspO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEsyNTYgKCkge1xuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICdrMjU2JyxcbiAgICAgICdmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZSBmZmZmZmMyZicpO1xuICB9XG4gIGluaGVyaXRzKEsyNTYsIE1QcmltZSk7XG5cbiAgSzI1Ni5wcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiBzcGxpdCAoaW5wdXQsIG91dHB1dCkge1xuICAgIC8vIDI1NiA9IDkgKiAyNiArIDIyXG4gICAgdmFyIG1hc2sgPSAweDNmZmZmZjtcblxuICAgIHZhciBvdXRMZW4gPSBNYXRoLm1pbihpbnB1dC5sZW5ndGgsIDkpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0TGVuOyBpKyspIHtcbiAgICAgIG91dHB1dC53b3Jkc1tpXSA9IGlucHV0LndvcmRzW2ldO1xuICAgIH1cbiAgICBvdXRwdXQubGVuZ3RoID0gb3V0TGVuO1xuXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA8PSA5KSB7XG4gICAgICBpbnB1dC53b3Jkc1swXSA9IDA7XG4gICAgICBpbnB1dC5sZW5ndGggPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNoaWZ0IGJ5IDkgbGltYnNcbiAgICB2YXIgcHJldiA9IGlucHV0LndvcmRzWzldO1xuICAgIG91dHB1dC53b3Jkc1tvdXRwdXQubGVuZ3RoKytdID0gcHJldiAmIG1hc2s7XG5cbiAgICBmb3IgKGkgPSAxMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbmV4dCA9IGlucHV0LndvcmRzW2ldIHwgMDtcbiAgICAgIGlucHV0LndvcmRzW2kgLSAxMF0gPSAoKG5leHQgJiBtYXNrKSA8PCA0KSB8IChwcmV2ID4+PiAyMik7XG4gICAgICBwcmV2ID0gbmV4dDtcbiAgICB9XG4gICAgcHJldiA+Pj49IDIyO1xuICAgIGlucHV0LndvcmRzW2kgLSAxMF0gPSBwcmV2O1xuICAgIGlmIChwcmV2ID09PSAwICYmIGlucHV0Lmxlbmd0aCA+IDEwKSB7XG4gICAgICBpbnB1dC5sZW5ndGggLT0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0Lmxlbmd0aCAtPSA5O1xuICAgIH1cbiAgfTtcblxuICBLMjU2LnByb3RvdHlwZS5pbXVsSyA9IGZ1bmN0aW9uIGltdWxLIChudW0pIHtcbiAgICAvLyBLID0gMHgxMDAwMDAzZDEgPSBbIDB4NDAsIDB4M2QxIF1cbiAgICBudW0ud29yZHNbbnVtLmxlbmd0aF0gPSAwO1xuICAgIG51bS53b3Jkc1tudW0ubGVuZ3RoICsgMV0gPSAwO1xuICAgIG51bS5sZW5ndGggKz0gMjtcblxuICAgIC8vIGJvdW5kZWQgYXQ6IDB4NDAgKiAweDNmZmZmZmYgKyAweDNkMCA9IDB4MTAwMDAwMzkwXG4gICAgdmFyIGxvID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHcgPSBudW0ud29yZHNbaV0gfCAwO1xuICAgICAgbG8gKz0gdyAqIDB4M2QxO1xuICAgICAgbnVtLndvcmRzW2ldID0gbG8gJiAweDNmZmZmZmY7XG4gICAgICBsbyA9IHcgKiAweDQwICsgKChsbyAvIDB4NDAwMDAwMCkgfCAwKTtcbiAgICB9XG5cbiAgICAvLyBGYXN0IGxlbmd0aCByZWR1Y3Rpb25cbiAgICBpZiAobnVtLndvcmRzW251bS5sZW5ndGggLSAxXSA9PT0gMCkge1xuICAgICAgbnVtLmxlbmd0aC0tO1xuICAgICAgaWYgKG51bS53b3Jkc1tudW0ubGVuZ3RoIC0gMV0gPT09IDApIHtcbiAgICAgICAgbnVtLmxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVtO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFAyMjQgKCkge1xuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICdwMjI0JyxcbiAgICAgICdmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMScpO1xuICB9XG4gIGluaGVyaXRzKFAyMjQsIE1QcmltZSk7XG5cbiAgZnVuY3Rpb24gUDE5MiAoKSB7XG4gICAgTVByaW1lLmNhbGwoXG4gICAgICB0aGlzLFxuICAgICAgJ3AxOTInLFxuICAgICAgJ2ZmZmZmZmZmIGZmZmZmZmZmIGZmZmZmZmZmIGZmZmZmZmZlIGZmZmZmZmZmIGZmZmZmZmZmJyk7XG4gIH1cbiAgaW5oZXJpdHMoUDE5MiwgTVByaW1lKTtcblxuICBmdW5jdGlvbiBQMjU1MTkgKCkge1xuICAgIC8vIDIgXiAyNTUgLSAxOVxuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICcyNTUxOScsXG4gICAgICAnN2ZmZmZmZmZmZmZmZmZmZiBmZmZmZmZmZmZmZmZmZmZmIGZmZmZmZmZmZmZmZmZmZmYgZmZmZmZmZmZmZmZmZmZlZCcpO1xuICB9XG4gIGluaGVyaXRzKFAyNTUxOSwgTVByaW1lKTtcblxuICBQMjU1MTkucHJvdG90eXBlLmltdWxLID0gZnVuY3Rpb24gaW11bEsgKG51bSkge1xuICAgIC8vIEsgPSAweDEzXG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhpID0gKG51bS53b3Jkc1tpXSB8IDApICogMHgxMyArIGNhcnJ5O1xuICAgICAgdmFyIGxvID0gaGkgJiAweDNmZmZmZmY7XG4gICAgICBoaSA+Pj49IDI2O1xuXG4gICAgICBudW0ud29yZHNbaV0gPSBsbztcbiAgICAgIGNhcnJ5ID0gaGk7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgbnVtLndvcmRzW251bS5sZW5ndGgrK10gPSBjYXJyeTtcbiAgICB9XG4gICAgcmV0dXJuIG51bTtcbiAgfTtcblxuICAvLyBFeHBvcnRlZCBtb3N0bHkgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHVzZSBwbGFpbiBuYW1lIGluc3RlYWRcbiAgQk4uX3ByaW1lID0gZnVuY3Rpb24gcHJpbWUgKG5hbWUpIHtcbiAgICAvLyBDYWNoZWQgdmVyc2lvbiBvZiBwcmltZVxuICAgIGlmIChwcmltZXNbbmFtZV0pIHJldHVybiBwcmltZXNbbmFtZV07XG5cbiAgICB2YXIgcHJpbWU7XG4gICAgaWYgKG5hbWUgPT09ICdrMjU2Jykge1xuICAgICAgcHJpbWUgPSBuZXcgSzI1NigpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3AyMjQnKSB7XG4gICAgICBwcmltZSA9IG5ldyBQMjI0KCk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAncDE5MicpIHtcbiAgICAgIHByaW1lID0gbmV3IFAxOTIoKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdwMjU1MTknKSB7XG4gICAgICBwcmltZSA9IG5ldyBQMjU1MTkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHByaW1lICcgKyBuYW1lKTtcbiAgICB9XG4gICAgcHJpbWVzW25hbWVdID0gcHJpbWU7XG5cbiAgICByZXR1cm4gcHJpbWU7XG4gIH07XG5cbiAgLy9cbiAgLy8gQmFzZSByZWR1Y3Rpb24gZW5naW5lXG4gIC8vXG4gIGZ1bmN0aW9uIFJlZCAobSkge1xuICAgIGlmICh0eXBlb2YgbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcmltZSA9IEJOLl9wcmltZShtKTtcbiAgICAgIHRoaXMubSA9IHByaW1lLnA7XG4gICAgICB0aGlzLnByaW1lID0gcHJpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydChtLmd0bigxKSwgJ21vZHVsdXMgbXVzdCBiZSBncmVhdGVyIHRoYW4gMScpO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMucHJpbWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIFJlZC5wcm90b3R5cGUuX3ZlcmlmeTEgPSBmdW5jdGlvbiBfdmVyaWZ5MSAoYSkge1xuICAgIGFzc2VydChhLm5lZ2F0aXZlID09PSAwLCAncmVkIHdvcmtzIG9ubHkgd2l0aCBwb3NpdGl2ZXMnKTtcbiAgICBhc3NlcnQoYS5yZWQsICdyZWQgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5fdmVyaWZ5MiA9IGZ1bmN0aW9uIF92ZXJpZnkyIChhLCBiKSB7XG4gICAgYXNzZXJ0KChhLm5lZ2F0aXZlIHwgYi5uZWdhdGl2ZSkgPT09IDAsICdyZWQgd29ya3Mgb25seSB3aXRoIHBvc2l0aXZlcycpO1xuICAgIGFzc2VydChhLnJlZCAmJiBhLnJlZCA9PT0gYi5yZWQsXG4gICAgICAncmVkIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuaW1vZCA9IGZ1bmN0aW9uIGltb2QgKGEpIHtcbiAgICBpZiAodGhpcy5wcmltZSkgcmV0dXJuIHRoaXMucHJpbWUuaXJlZHVjZShhKS5fZm9yY2VSZWQodGhpcyk7XG5cbiAgICBtb3ZlKGEsIGEudW1vZCh0aGlzLm0pLl9mb3JjZVJlZCh0aGlzKSk7XG4gICAgcmV0dXJuIGE7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5uZWcgPSBmdW5jdGlvbiBuZWcgKGEpIHtcbiAgICBpZiAoYS5pc1plcm8oKSkge1xuICAgICAgcmV0dXJuIGEuY2xvbmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tLnN1YihhKS5fZm9yY2VSZWQodGhpcyk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGEsIGIpIHtcbiAgICB0aGlzLl92ZXJpZnkyKGEsIGIpO1xuXG4gICAgdmFyIHJlcyA9IGEuYWRkKGIpO1xuICAgIGlmIChyZXMuY21wKHRoaXMubSkgPj0gMCkge1xuICAgICAgcmVzLmlzdWIodGhpcy5tKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5fZm9yY2VSZWQodGhpcyk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5pYWRkID0gZnVuY3Rpb24gaWFkZCAoYSwgYikge1xuICAgIHRoaXMuX3ZlcmlmeTIoYSwgYik7XG5cbiAgICB2YXIgcmVzID0gYS5pYWRkKGIpO1xuICAgIGlmIChyZXMuY21wKHRoaXMubSkgPj0gMCkge1xuICAgICAgcmVzLmlzdWIodGhpcy5tKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uIHN1YiAoYSwgYikge1xuICAgIHRoaXMuX3ZlcmlmeTIoYSwgYik7XG5cbiAgICB2YXIgcmVzID0gYS5zdWIoYik7XG4gICAgaWYgKHJlcy5jbXBuKDApIDwgMCkge1xuICAgICAgcmVzLmlhZGQodGhpcy5tKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5fZm9yY2VSZWQodGhpcyk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5pc3ViID0gZnVuY3Rpb24gaXN1YiAoYSwgYikge1xuICAgIHRoaXMuX3ZlcmlmeTIoYSwgYik7XG5cbiAgICB2YXIgcmVzID0gYS5pc3ViKGIpO1xuICAgIGlmIChyZXMuY21wbigwKSA8IDApIHtcbiAgICAgIHJlcy5pYWRkKHRoaXMubSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5zaGwgPSBmdW5jdGlvbiBzaGwgKGEsIG51bSkge1xuICAgIHRoaXMuX3ZlcmlmeTEoYSk7XG4gICAgcmV0dXJuIHRoaXMuaW1vZChhLnVzaGxuKG51bSkpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuaW11bCA9IGZ1bmN0aW9uIGltdWwgKGEsIGIpIHtcbiAgICB0aGlzLl92ZXJpZnkyKGEsIGIpO1xuICAgIHJldHVybiB0aGlzLmltb2QoYS5pbXVsKGIpKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uIG11bCAoYSwgYikge1xuICAgIHRoaXMuX3ZlcmlmeTIoYSwgYik7XG4gICAgcmV0dXJuIHRoaXMuaW1vZChhLm11bChiKSk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5pc3FyID0gZnVuY3Rpb24gaXNxciAoYSkge1xuICAgIHJldHVybiB0aGlzLmltdWwoYSwgYS5jbG9uZSgpKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLnNxciA9IGZ1bmN0aW9uIHNxciAoYSkge1xuICAgIHJldHVybiB0aGlzLm11bChhLCBhKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLnNxcnQgPSBmdW5jdGlvbiBzcXJ0IChhKSB7XG4gICAgaWYgKGEuaXNaZXJvKCkpIHJldHVybiBhLmNsb25lKCk7XG5cbiAgICB2YXIgbW9kMyA9IHRoaXMubS5hbmRsbigzKTtcbiAgICBhc3NlcnQobW9kMyAlIDIgPT09IDEpO1xuXG4gICAgLy8gRmFzdCBjYXNlXG4gICAgaWYgKG1vZDMgPT09IDMpIHtcbiAgICAgIHZhciBwb3cgPSB0aGlzLm0uYWRkKG5ldyBCTigxKSkuaXVzaHJuKDIpO1xuICAgICAgcmV0dXJuIHRoaXMucG93KGEsIHBvdyk7XG4gICAgfVxuXG4gICAgLy8gVG9uZWxsaS1TaGFua3MgYWxnb3JpdGhtIChUb3RhbGx5IHVub3B0aW1pemVkIGFuZCBzbG93KVxuICAgIC8vXG4gICAgLy8gRmluZCBRIGFuZCBTLCB0aGF0IFEgKiAyIF4gUyA9IChQIC0gMSlcbiAgICB2YXIgcSA9IHRoaXMubS5zdWJuKDEpO1xuICAgIHZhciBzID0gMDtcbiAgICB3aGlsZSAoIXEuaXNaZXJvKCkgJiYgcS5hbmRsbigxKSA9PT0gMCkge1xuICAgICAgcysrO1xuICAgICAgcS5pdXNocm4oMSk7XG4gICAgfVxuICAgIGFzc2VydCghcS5pc1plcm8oKSk7XG5cbiAgICB2YXIgb25lID0gbmV3IEJOKDEpLnRvUmVkKHRoaXMpO1xuICAgIHZhciBuT25lID0gb25lLnJlZE5lZygpO1xuXG4gICAgLy8gRmluZCBxdWFkcmF0aWMgbm9uLXJlc2lkdWVcbiAgICAvLyBOT1RFOiBNYXggaXMgc3VjaCBiZWNhdXNlIG9mIGdlbmVyYWxpemVkIFJpZW1hbm4gaHlwb3RoZXNpcy5cbiAgICB2YXIgbHBvdyA9IHRoaXMubS5zdWJuKDEpLml1c2hybigxKTtcbiAgICB2YXIgeiA9IHRoaXMubS5iaXRMZW5ndGgoKTtcbiAgICB6ID0gbmV3IEJOKDIgKiB6ICogeikudG9SZWQodGhpcyk7XG5cbiAgICB3aGlsZSAodGhpcy5wb3coeiwgbHBvdykuY21wKG5PbmUpICE9PSAwKSB7XG4gICAgICB6LnJlZElBZGQobk9uZSk7XG4gICAgfVxuXG4gICAgdmFyIGMgPSB0aGlzLnBvdyh6LCBxKTtcbiAgICB2YXIgciA9IHRoaXMucG93KGEsIHEuYWRkbigxKS5pdXNocm4oMSkpO1xuICAgIHZhciB0ID0gdGhpcy5wb3coYSwgcSk7XG4gICAgdmFyIG0gPSBzO1xuICAgIHdoaWxlICh0LmNtcChvbmUpICE9PSAwKSB7XG4gICAgICB2YXIgdG1wID0gdDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyB0bXAuY21wKG9uZSkgIT09IDA7IGkrKykge1xuICAgICAgICB0bXAgPSB0bXAucmVkU3FyKCk7XG4gICAgICB9XG4gICAgICBhc3NlcnQoaSA8IG0pO1xuICAgICAgdmFyIGIgPSB0aGlzLnBvdyhjLCBuZXcgQk4oMSkuaXVzaGxuKG0gLSBpIC0gMSkpO1xuXG4gICAgICByID0gci5yZWRNdWwoYik7XG4gICAgICBjID0gYi5yZWRTcXIoKTtcbiAgICAgIHQgPSB0LnJlZE11bChjKTtcbiAgICAgIG0gPSBpO1xuICAgIH1cblxuICAgIHJldHVybiByO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuaW52bSA9IGZ1bmN0aW9uIGludm0gKGEpIHtcbiAgICB2YXIgaW52ID0gYS5faW52bXAodGhpcy5tKTtcbiAgICBpZiAoaW52Lm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICBpbnYubmVnYXRpdmUgPSAwO1xuICAgICAgcmV0dXJuIHRoaXMuaW1vZChpbnYpLnJlZE5lZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbW9kKGludik7XG4gICAgfVxuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUucG93ID0gZnVuY3Rpb24gcG93IChhLCBudW0pIHtcbiAgICBpZiAobnVtLmlzWmVybygpKSByZXR1cm4gbmV3IEJOKDEpLnRvUmVkKHRoaXMpO1xuICAgIGlmIChudW0uY21wbigxKSA9PT0gMCkgcmV0dXJuIGEuY2xvbmUoKTtcblxuICAgIHZhciB3aW5kb3dTaXplID0gNDtcbiAgICB2YXIgd25kID0gbmV3IEFycmF5KDEgPDwgd2luZG93U2l6ZSk7XG4gICAgd25kWzBdID0gbmV3IEJOKDEpLnRvUmVkKHRoaXMpO1xuICAgIHduZFsxXSA9IGE7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCB3bmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHduZFtpXSA9IHRoaXMubXVsKHduZFtpIC0gMV0sIGEpO1xuICAgIH1cblxuICAgIHZhciByZXMgPSB3bmRbMF07XG4gICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgIHZhciBjdXJyZW50TGVuID0gMDtcbiAgICB2YXIgc3RhcnQgPSBudW0uYml0TGVuZ3RoKCkgJSAyNjtcbiAgICBpZiAoc3RhcnQgPT09IDApIHtcbiAgICAgIHN0YXJ0ID0gMjY7XG4gICAgfVxuXG4gICAgZm9yIChpID0gbnVtLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgd29yZCA9IG51bS53b3Jkc1tpXTtcbiAgICAgIGZvciAodmFyIGogPSBzdGFydCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgIHZhciBiaXQgPSAod29yZCA+PiBqKSAmIDE7XG4gICAgICAgIGlmIChyZXMgIT09IHduZFswXSkge1xuICAgICAgICAgIHJlcyA9IHRoaXMuc3FyKHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYml0ID09PSAwICYmIGN1cnJlbnQgPT09IDApIHtcbiAgICAgICAgICBjdXJyZW50TGVuID0gMDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnQgPDw9IDE7XG4gICAgICAgIGN1cnJlbnQgfD0gYml0O1xuICAgICAgICBjdXJyZW50TGVuKys7XG4gICAgICAgIGlmIChjdXJyZW50TGVuICE9PSB3aW5kb3dTaXplICYmIChpICE9PSAwIHx8IGogIT09IDApKSBjb250aW51ZTtcblxuICAgICAgICByZXMgPSB0aGlzLm11bChyZXMsIHduZFtjdXJyZW50XSk7XG4gICAgICAgIGN1cnJlbnRMZW4gPSAwO1xuICAgICAgICBjdXJyZW50ID0gMDtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gMjY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmNvbnZlcnRUbyA9IGZ1bmN0aW9uIGNvbnZlcnRUbyAobnVtKSB7XG4gICAgdmFyIHIgPSBudW0udW1vZCh0aGlzLm0pO1xuXG4gICAgcmV0dXJuIHIgPT09IG51bSA/IHIuY2xvbmUoKSA6IHI7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5jb252ZXJ0RnJvbSA9IGZ1bmN0aW9uIGNvbnZlcnRGcm9tIChudW0pIHtcbiAgICB2YXIgcmVzID0gbnVtLmNsb25lKCk7XG4gICAgcmVzLnJlZCA9IG51bGw7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICAvL1xuICAvLyBNb250Z29tZXJ5IG1ldGhvZCBlbmdpbmVcbiAgLy9cblxuICBCTi5tb250ID0gZnVuY3Rpb24gbW9udCAobnVtKSB7XG4gICAgcmV0dXJuIG5ldyBNb250KG51bSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gTW9udCAobSkge1xuICAgIFJlZC5jYWxsKHRoaXMsIG0pO1xuXG4gICAgdGhpcy5zaGlmdCA9IHRoaXMubS5iaXRMZW5ndGgoKTtcbiAgICBpZiAodGhpcy5zaGlmdCAlIDI2ICE9PSAwKSB7XG4gICAgICB0aGlzLnNoaWZ0ICs9IDI2IC0gKHRoaXMuc2hpZnQgJSAyNik7XG4gICAgfVxuXG4gICAgdGhpcy5yID0gbmV3IEJOKDEpLml1c2hsbih0aGlzLnNoaWZ0KTtcbiAgICB0aGlzLnIyID0gdGhpcy5pbW9kKHRoaXMuci5zcXIoKSk7XG4gICAgdGhpcy5yaW52ID0gdGhpcy5yLl9pbnZtcCh0aGlzLm0pO1xuXG4gICAgdGhpcy5taW52ID0gdGhpcy5yaW52Lm11bCh0aGlzLnIpLmlzdWJuKDEpLmRpdih0aGlzLm0pO1xuICAgIHRoaXMubWludiA9IHRoaXMubWludi51bW9kKHRoaXMucik7XG4gICAgdGhpcy5taW52ID0gdGhpcy5yLnN1Yih0aGlzLm1pbnYpO1xuICB9XG4gIGluaGVyaXRzKE1vbnQsIFJlZCk7XG5cbiAgTW9udC5wcm90b3R5cGUuY29udmVydFRvID0gZnVuY3Rpb24gY29udmVydFRvIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5pbW9kKG51bS51c2hsbih0aGlzLnNoaWZ0KSk7XG4gIH07XG5cbiAgTW9udC5wcm90b3R5cGUuY29udmVydEZyb20gPSBmdW5jdGlvbiBjb252ZXJ0RnJvbSAobnVtKSB7XG4gICAgdmFyIHIgPSB0aGlzLmltb2QobnVtLm11bCh0aGlzLnJpbnYpKTtcbiAgICByLnJlZCA9IG51bGw7XG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgTW9udC5wcm90b3R5cGUuaW11bCA9IGZ1bmN0aW9uIGltdWwgKGEsIGIpIHtcbiAgICBpZiAoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKSB7XG4gICAgICBhLndvcmRzWzBdID0gMDtcbiAgICAgIGEubGVuZ3RoID0gMTtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHZhciB0ID0gYS5pbXVsKGIpO1xuICAgIHZhciBjID0gdC5tYXNrbih0aGlzLnNoaWZ0KS5tdWwodGhpcy5taW52KS5pbWFza24odGhpcy5zaGlmdCkubXVsKHRoaXMubSk7XG4gICAgdmFyIHUgPSB0LmlzdWIoYykuaXVzaHJuKHRoaXMuc2hpZnQpO1xuICAgIHZhciByZXMgPSB1O1xuXG4gICAgaWYgKHUuY21wKHRoaXMubSkgPj0gMCkge1xuICAgICAgcmVzID0gdS5pc3ViKHRoaXMubSk7XG4gICAgfSBlbHNlIGlmICh1LmNtcG4oMCkgPCAwKSB7XG4gICAgICByZXMgPSB1LmlhZGQodGhpcy5tKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBNb250LnByb3RvdHlwZS5tdWwgPSBmdW5jdGlvbiBtdWwgKGEsIGIpIHtcbiAgICBpZiAoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKSByZXR1cm4gbmV3IEJOKDApLl9mb3JjZVJlZCh0aGlzKTtcblxuICAgIHZhciB0ID0gYS5tdWwoYik7XG4gICAgdmFyIGMgPSB0Lm1hc2tuKHRoaXMuc2hpZnQpLm11bCh0aGlzLm1pbnYpLmltYXNrbih0aGlzLnNoaWZ0KS5tdWwodGhpcy5tKTtcbiAgICB2YXIgdSA9IHQuaXN1YihjKS5pdXNocm4odGhpcy5zaGlmdCk7XG4gICAgdmFyIHJlcyA9IHU7XG4gICAgaWYgKHUuY21wKHRoaXMubSkgPj0gMCkge1xuICAgICAgcmVzID0gdS5pc3ViKHRoaXMubSk7XG4gICAgfSBlbHNlIGlmICh1LmNtcG4oMCkgPCAwKSB7XG4gICAgICByZXMgPSB1LmlhZGQodGhpcy5tKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBNb250LnByb3RvdHlwZS5pbnZtID0gZnVuY3Rpb24gaW52bSAoYSkge1xuICAgIC8vIChBUileLTEgKiBSXjIgPSAoQV4tMSAqIFJeLTEpICogUl4yID0gQV4tMSAqIFJcbiAgICB2YXIgcmVzID0gdGhpcy5pbW9kKGEuX2ludm1wKHRoaXMubSkubXVsKHRoaXMucjIpKTtcbiAgICByZXR1cm4gcmVzLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcbn0pKHR5cGVvZiBtb2R1bGUgPT09ICd1bmRlZmluZWQnIHx8IG1vZHVsZSwgdGhpcyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgcHJlZml4ID0gJ34nO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIHN0b3JhZ2UgZm9yIG91ciBgRUVgIG9iamVjdHMuXG4gKiBBbiBgRXZlbnRzYCBpbnN0YW5jZSBpcyBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCBlbWl0dGVyLCBvbmNlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdKSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCBlbWl0dGVyLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0uZm4pIGVtaXR0ZXIuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gW2VtaXR0ZXIuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIGVtaXR0ZXI7XG59XG5cbi8qKlxuICogQ2xlYXIgZXZlbnQgYnkgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2dCBUaGUgRXZlbnQgbmFtZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyRXZlbnQoZW1pdHRlciwgZXZ0KSB7XG4gIGlmICgtLWVtaXR0ZXIuX2V2ZW50c0NvdW50ID09PSAwKSBlbWl0dGVyLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIGVsc2UgZGVsZXRlIGVtaXR0ZXIuX2V2ZW50c1tldnRdO1xufVxuXG4vKipcbiAqIE1pbmltYWwgYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFoYW5kbGVycykgcmV0dXJuIFtdO1xuICBpZiAoaGFuZGxlcnMuZm4pIHJldHVybiBbaGFuZGxlcnMuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gaGFuZGxlcnNbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtYmVyIG9mIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gbGlzdGVuZXJDb3VudChldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiAwO1xuICBpZiAobGlzdGVuZXJzLmZuKSByZXR1cm4gMTtcbiAgcmV0dXJuIGxpc3RlbmVycy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGVsc2UgYGZhbHNlYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIGZhbHNlKTtcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIHRydWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG4gIGlmICghZm4pIHtcbiAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm4gJiZcbiAgICAgICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSkgJiZcbiAgICAgICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmbiB8fFxuICAgICAgICAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpIHx8XG4gICAgICAgIChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBBbGxvdyBgRXZlbnRFbWl0dGVyYCB0byBiZSBpbXBvcnRlZCBhcyBtb2R1bGUgbmFtZXNwYWNlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyoqIEBpbnRlcm5hbCAqL1xuZnVuY3Rpb24gemVyb1BhZCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG59XG4vKipcbiAqIEBuYW1lIGZvcm1hdERhdGVcbiAqIEBkZXNjcmlwdGlvbiBGb3JtYXRzIGEgZGF0ZSBpbiBDQ1lZLU1NLUREIEhIOk1NOlNTIGZvcm1hdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgIGNvbnN0IG1vbnRoID0gemVyb1BhZCgoZGF0ZS5nZXRNb250aCgpICsgMSkpO1xuICAgIGNvbnN0IGRheSA9IHplcm9QYWQoZGF0ZS5nZXREYXRlKCkpO1xuICAgIGNvbnN0IGhvdXIgPSB6ZXJvUGFkKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgY29uc3QgbWludXRlID0gemVyb1BhZChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgY29uc3Qgc2Vjb25kID0gemVyb1BhZChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH1gO1xufVxuIiwiaW1wb3J0IHsgQmlnSW50IH0gZnJvbSAnQHBvbGthZG90L3gtYmlnaW50JztcbmltcG9ydCB7IHhnbG9iYWwgfSBmcm9tICdAcG9sa2Fkb3QveC1nbG9iYWwnO1xuLyoqIHRydWUgaWYgdGhlIGVudmlyb25tZW50IGhhcyBwcm9wZXIgQmlnSW50IHN1cHBvcnQgKi9cbmV4cG9ydCBjb25zdCBoYXNCaWdJbnQgPSB0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBCaWdJbnQuYXNJbnROID09PSAnZnVuY3Rpb24nO1xuLyoqIHRydWUgaWYgdGhlIGVudmlyb25tZW50IGlzIENKUyAqL1xuZXhwb3J0IGNvbnN0IGhhc0NqcyA9IHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnO1xuLyoqIHRydWUgaWYgdGhlIGVudmlyb25tZW50IGhhcyBfX2Rpcm5hbWUgYXZhaWxhYmxlICovXG5leHBvcnQgY29uc3QgaGFzRGlybmFtZSA9IHR5cGVvZiBfX2Rpcm5hbWUgIT09ICd1bmRlZmluZWQnO1xuLyoqIHRydWUgaWYgdGhlIGVudmlyb25tZW50IGlzIEVTTSAqL1xuZXhwb3J0IGNvbnN0IGhhc0VzbSA9ICFoYXNDanM7XG4vKiogdHJ1ZSBpZiB0aGUgZW52aXJvbm1lbnQgaGFzIFdlYkFzc2VtYmx5IGF2YWlsYWJsZSAqL1xuZXhwb3J0IGNvbnN0IGhhc1dhc20gPSB0eXBlb2YgV2ViQXNzZW1ibHkgIT09ICd1bmRlZmluZWQnO1xuLyoqIHRydWUgaWYgdGhlIGVudmlyb25tZW50IGhhcyBzdXBwb3J0IGZvciBCdWZmZXIgKHR5cGljYWxseSBOb2RlLmpzKSAqL1xuZXhwb3J0IGNvbnN0IGhhc0J1ZmZlciA9IHR5cGVvZiB4Z2xvYmFsLkJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgeGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbic7XG4vKiogdHJ1ZSBpZiB0aGUgZW52aXJvbm1lbnQgaGFzIHByb2Nlc3MgYXZhaWxhYmxlICh0eXBpY2FsbHkgTm9kZS5qcykgKi9cbmV4cG9ydCBjb25zdCBoYXNQcm9jZXNzID0gdHlwZW9mIHhnbG9iYWwucHJvY2VzcyA9PT0gJ29iamVjdCc7XG4iLCJjb25zdCBDSFIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5jb25zdCBVOCA9IG5ldyBVaW50OEFycmF5KDI1Nik7XG5jb25zdCBVMTYgPSBuZXcgVWludDhBcnJheSgyNTYgKiAyNTYpO1xuZm9yIChsZXQgaSA9IDAsIGNvdW50ID0gQ0hSLmxlbmd0aDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBVOFtDSFJbaV0uY2hhckNvZGVBdCgwKSB8IDBdID0gaSB8IDA7XG4gICAgaWYgKGkgPiA5KSB7XG4gICAgICAgIFU4W0NIUltpXS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgfCAwXSA9IGkgfCAwO1xuICAgIH1cbn1cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBjb25zdCBzID0gaSA8PCA4O1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjU2OyBqKyspIHtcbiAgICAgICAgVTE2W3MgfCBqXSA9IChVOFtpXSA8PCA0KSB8IFU4W2pdO1xuICAgIH1cbn1cbi8qKlxuICogQG5hbWUgaGV4VG9VOGFcbiAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBVaW50OEFycmF5IG9iamVjdCBmcm9tIGEgaGV4IHN0cmluZy5cbiAqIEBkZXNjcmlwdGlvblxuICogYG51bGxgIGlucHV0cyByZXR1cm5zIGFuIGVtcHR5IGBVaW50OEFycmF5YCByZXN1bHQuIEhleCBpbnB1dCB2YWx1ZXMgcmV0dXJuIHRoZSBhY3R1YWwgYnl0ZXMgdmFsdWUgY29udmVydGVkIHRvIGEgVWludDhBcnJheS4gQW55dGhpbmcgdGhhdCBpcyBub3QgYSBoZXggc3RyaW5nIChpbmNsdWRpbmcgdGhlIGAweGAgcHJlZml4KSB0aHJvd3MgYW4gZXJyb3IuXG4gKiBAZXhhbXBsZVxuICogPEJSPlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IGhleFRvVThhIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuICpcbiAqIGhleFRvVThhKCcweDgwMDAxZicpOyAvLyBVaW50OEFycmF5KFsweDgwLCAweDAwLCAweDFmXSlcbiAqIGhleFRvVThhKCcweDgwMDAxZicsIDMyKTsgLy8gVWludDhBcnJheShbMHgwMCwgMHg4MCwgMHgwMCwgMHgxZl0pXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvVThhKHZhbHVlLCBiaXRMZW5ndGggPSAtMSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KCk7XG4gICAgfVxuICAgIGxldCBzID0gdmFsdWUuc3RhcnRzV2l0aCgnMHgnKVxuICAgICAgICA/IDJcbiAgICAgICAgOiAwO1xuICAgIGNvbnN0IGRlY0xlbmd0aCA9IE1hdGguY2VpbCgodmFsdWUubGVuZ3RoIC0gcykgLyAyKTtcbiAgICBjb25zdCBlbmRMZW5ndGggPSBNYXRoLmNlaWwoYml0TGVuZ3RoID09PSAtMVxuICAgICAgICA/IGRlY0xlbmd0aFxuICAgICAgICA6IGJpdExlbmd0aCAvIDgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGVuZExlbmd0aCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gZW5kTGVuZ3RoID4gZGVjTGVuZ3RoXG4gICAgICAgID8gZW5kTGVuZ3RoIC0gZGVjTGVuZ3RoXG4gICAgICAgIDogMDtcbiAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kTGVuZ3RoOyBpKyssIHMgKz0gMikge1xuICAgICAgICAvLyBUaGUgYmlnIGZhY3RvciBoZXJlIGlzIGFjdHVhbGx5IHRoZSBzdHJpbmcgbG9va3Vwcy4gSWYgd2UgZG9cbiAgICAgICAgLy8gSEVYX1RPX1UxNlt2YWx1ZS5zdWJzdHJpbmcoKV0gd2UgZ2V0IGFuIDEweCBzbG93ZG93bi4gSW4gdGhlXG4gICAgICAgIC8vIHNhbWUgdmVpbiB1c2luZyBjaGFyQ29kZUF0IChhcyBvcHBvc2VkIHRvIHZhbHVlW3NdIG9yIHZhbHVlLmNoYXJBdChzKSkgaXNcbiAgICAgICAgLy8gYWxzbyB0aGUgZmFzdGVyIG9wZXJhdGlvbiBieSBhdCBsZWFzdCAyeCB3aXRoIHRoZSBjaGFyYWN0ZXIgbWFwIGFib3ZlXG4gICAgICAgIHJlc3VsdFtpXSA9IFUxNlsodmFsdWUuY2hhckNvZGVBdChzKSA8PCA4KSB8IHZhbHVlLmNoYXJDb2RlQXQocyArIDEpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IEJOIH0gZnJvbSAnLi4vYm4vYm4uanMnO1xuLyoqXG4gKiBAbmFtZSBpc0JuXG4gKiBAc3VtbWFyeSBUZXN0cyBmb3IgYSBgQk5gIG9iamVjdCBpbnN0YW5jZS5cbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaW5wdXQgb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIGBCTmAgKGJuLmpzKS5cbiAqIEBleGFtcGxlXG4gKiA8QlI+XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IEJOIGZyb20gJ2JuLmpzJztcbiAqIGltcG9ydCB7IGlzQm4gfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG4gKlxuICogY29uc29sZS5sb2coJ2lzQm4nLCBpc0JuKG5ldyBCTigxKSkpOyAvLyA9PiB0cnVlXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm4odmFsdWUpIHtcbiAgICByZXR1cm4gQk4uaXNCTih2YWx1ZSk7XG59XG4iLCJpbXBvcnQgeyB4Z2xvYmFsIH0gZnJvbSAnQHBvbGthZG90L3gtZ2xvYmFsJztcbmltcG9ydCB7IGhhc0J1ZmZlciB9IGZyb20gJy4uL2hhcy5qcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbi5qcyc7XG4vKipcbiAqIEBuYW1lIGlzQnVmZmVyXG4gKiBAc3VtbWFyeSBUZXN0cyBmb3IgYSBgQnVmZmVyYCBvYmplY3QgaW5zdGFuY2UuXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGlucHV0IG9iamVjdCBpcyBhbiBpbnN0YW5jZSBvZiBgQnVmZmVyYC5cbiAqIEBleGFtcGxlXG4gKiA8QlI+XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgaXNCdWZmZXIgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG4gKlxuICogY29uc29sZS5sb2coJ2lzQnVmZmVyJywgaXNCdWZmZXIoQnVmZmVyLmZyb20oW10pKSk7IC8vID0+IHRydWVcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCdWZmZXIodmFsdWUpIHtcbiAgICAvLyB3ZSBkbyBjaGVjayBhIGZ1bmN0aW9uIGZpcnN0LCBzaW5jZSBpdCBpcyBzbGlnaHRseSBmYXN0ZXIgdGhhbiBpc0J1ZmZlciBpdHNlbGZcbiAgICByZXR1cm4gaGFzQnVmZmVyICYmICEhdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5yZWFkRG91YmxlTEUpICYmIHhnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKHZhbHVlKTtcbn1cbiIsIi8qKlxuICogQG5hbWUgaXNGdW5jdGlvblxuICogQHN1bW1hcnkgVGVzdHMgZm9yIGEgYGZ1bmN0aW9uYC5cbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgYSBKYXZhU2NyaXB0IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqIDxCUj5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuICpcbiAqIGlzRnVuY3Rpb24oKCkgPT4gZmFsc2UpOyAvLyA9PiB0cnVlXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuIiwiZXhwb3J0IGNvbnN0IFJFR0VYX0hFWF9QUkVGSVhFRCA9IC9eMHhbXFxkYS1mQS1GXSskLztcbmV4cG9ydCBjb25zdCBSRUdFWF9IRVhfTk9QUkVGSVggPSAvXltcXGRhLWZBLUZdKyQvO1xuLyoqXG4gKiBAbmFtZSBpc0hleFxuICogQHN1bW1hcnkgVGVzdHMgZm9yIGEgaGV4IHN0cmluZy5cbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgYSBgMHhgIHByZWZpeGVkIGhleCBzdHJpbmcuIE9wdGlvbmFsbHkgKGBiaXRMZW5ndGhgICE9PSAtMSkgY2hlY2tzIHRvIHNlZSBpZiB0aGUgYml0TGVuZ3RoIGlzIGNvcnJlY3QuXG4gKiBAZXhhbXBsZVxuICogPEJSPlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IGlzSGV4IH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuICpcbiAqIGlzSGV4KCcweDEyMzQnKTsgLy8gPT4gdHJ1ZVxuICogaXNIZXgoJzB4MTIzNCcsIDgpOyAvLyA9PiBmYWxzZVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0hleCh2YWx1ZSwgYml0TGVuZ3RoID0gLTEsIGlnbm9yZUxlbmd0aCkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAodmFsdWUgPT09ICcweCcgfHxcbiAgICAgICAgUkVHRVhfSEVYX1BSRUZJWEVELnRlc3QodmFsdWUpKSkgJiYgKGJpdExlbmd0aCA9PT0gLTFcbiAgICAgICAgPyAoaWdub3JlTGVuZ3RoIHx8ICh2YWx1ZS5sZW5ndGggJSAyID09PSAwKSlcbiAgICAgICAgOiAodmFsdWUubGVuZ3RoID09PSAoMiArIE1hdGguY2VpbChiaXRMZW5ndGggLyA0KSkpKTtcbn1cbiIsIi8qKlxuICogQG5hbWUgaXNPYmplY3RcbiAqIEBzdW1tYXJ5IFRlc3RzIGZvciBhbiBgb2JqZWN0YC5cbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgYSBKYXZhU2NyaXB0IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKiA8QlI+XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG4gKlxuICogaXNPYmplY3Qoe30pOyAvLyA9PiB0cnVlXG4gKiBpc09iamVjdCgnc29tZXRoaW5nJyk7IC8vID0+IGZhbHNlXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cbiIsIi8qKlxuICogQG5hbWUgaXNVOGFcbiAqIEBzdW1tYXJ5IFRlc3RzIGZvciBhIGBVaW50OEFycmF5YCBvYmplY3QgaW5zdGFuY2UuXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGlucHV0IG9iamVjdCBpcyBhbiBpbnN0YW5jZSBvZiBgVWludDhBcnJheWAuXG4gKiBAZXhhbXBsZVxuICogPEJSPlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IGlzVWludDhBcnJheSB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbiAqXG4gKiBjb25zb2xlLmxvZygnaXNVOGEnLCBpc1U4YShbXSkpOyAvLyA9PiBmYWxzZVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1U4YSh2YWx1ZSkge1xuICAgIC8vIGhlcmUgd2UgZGVmZXIgdGhlIGluc3RhbmNlb2YgY2hlY2sgd2hpY2ggaXMgYWN0dWFsbHkgc2xpZ2h0bHlcbiAgICAvLyBzbG93ZXIgdGhhbiBqdXN0IGNoZWNraW5nIHRoZSBjb25zdHJjdG9yIChkaXJlY3QgaW5zdGFuY2VzKVxuICAgIHJldHVybiAoKCh2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcikgPT09IFVpbnQ4QXJyYXkpIHx8XG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheSk7XG59XG4iLCIvKipcbiAqIEBuYW1lIGlzVW5kZWZpbmVkXG4gKiBAc3VtbWFyeSBUZXN0cyBmb3IgYSBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGB1bmRlZmluZWRgLlxuICogQGV4YW1wbGVcbiAqIDxCUj5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBpc1VuZGVmaW5lZCB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbiAqXG4gKiBjb25zb2xlLmxvZygnaXNVbmRlZmluZWQnLCBpc1VuZGVmaW5lZCh2b2lkKDApKSk7IC8vID0+IHRydWVcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IHhnbG9iYWwgfSBmcm9tICdAcG9sa2Fkb3QveC1nbG9iYWwnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4vZm9ybWF0L2Zvcm1hdERhdGUuanMnO1xuaW1wb3J0IHsgaXNCbiB9IGZyb20gJy4vaXMvYm4uanMnO1xuaW1wb3J0IHsgaXNCdWZmZXIgfSBmcm9tICcuL2lzL2J1ZmZlci5qcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pcy9mdW5jdGlvbi5qcyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vaXMvb2JqZWN0LmpzJztcbmltcG9ydCB7IGlzVThhIH0gZnJvbSAnLi9pcy91OGEuanMnO1xuaW1wb3J0IHsgdThhVG9IZXggfSBmcm9tICcuL3U4YS90b0hleC5qcyc7XG5pbXBvcnQgeyB1OGFUb1U4YSB9IGZyb20gJy4vdThhL3RvVThhLmpzJztcbmltcG9ydCB7IGhhc1Byb2Nlc3MgfSBmcm9tICcuL2hhcy5qcyc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9ub29wLmpzJztcbmNvbnN0IGxvZ1RvID0ge1xuICAgIGRlYnVnOiAnbG9nJyxcbiAgICBlcnJvcjogJ2Vycm9yJyxcbiAgICBsb2c6ICdsb2cnLFxuICAgIHdhcm46ICd3YXJuJ1xufTtcbmZ1bmN0aW9uIGZvcm1hdE90aGVyKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IGxvZ2dlckZvcm1hdCh2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nZ2VyRm9ybWF0KHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAobG9nZ2VyRm9ybWF0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNCbih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVThhKHZhbHVlKSB8fCBpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHU4YVRvSGV4KHU4YVRvVThhKHZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXRPdGhlcih2YWx1ZSk7XG59XG5mdW5jdGlvbiBmb3JtYXRXaXRoTGVuZ3RoKG1heExlbmd0aCkge1xuICAgIHJldHVybiAodikgPT4ge1xuICAgICAgICBpZiAobWF4TGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHIgPSBgJHt2fWA7XG4gICAgICAgIHJldHVybiByLmxlbmd0aCA8IG1heExlbmd0aFxuICAgICAgICAgICAgPyB2XG4gICAgICAgICAgICA6IGAke3Iuc3Vic3RyaW5nKDAsIG1heExlbmd0aCl9IC4uLmA7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFwcGx5KGxvZywgdHlwZSwgdmFsdWVzLCBtYXhTaXplID0gLTEpIHtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSAmJiBpc0Z1bmN0aW9uKHZhbHVlc1swXSkpIHtcbiAgICAgICAgY29uc3QgZm5SZXN1bHQgPSB2YWx1ZXNbMF0oKTtcbiAgICAgICAgcmV0dXJuIGFwcGx5KGxvZywgdHlwZSwgQXJyYXkuaXNBcnJheShmblJlc3VsdCkgPyBmblJlc3VsdCA6IFtmblJlc3VsdF0sIG1heFNpemUpO1xuICAgIH1cbiAgICBjb25zb2xlW2xvZ1RvW2xvZ11dKGZvcm1hdERhdGUobmV3IERhdGUoKSksIHR5cGUsIC4uLnZhbHVlc1xuICAgICAgICAubWFwKGxvZ2dlckZvcm1hdClcbiAgICAgICAgLm1hcChmb3JtYXRXaXRoTGVuZ3RoKG1heFNpemUpKSk7XG59XG5mdW5jdGlvbiBpc0RlYnVnT24oZSwgdHlwZSkge1xuICAgIHJldHVybiAhIWUgJiYgKGUgPT09ICcqJyB8fFxuICAgICAgICB0eXBlID09PSBlIHx8XG4gICAgICAgIChlLmVuZHNXaXRoKCcqJykgJiZcbiAgICAgICAgICAgIHR5cGUuc3RhcnRzV2l0aChlLnNsaWNlKDAsIC0xKSkpKTtcbn1cbmZ1bmN0aW9uIGlzRGVidWdPZmYoZSwgdHlwZSkge1xuICAgIHJldHVybiAhIWUgJiYgKGUuc3RhcnRzV2l0aCgnLScpICYmXG4gICAgICAgICh0eXBlID09PSBlLnNsaWNlKDEpIHx8XG4gICAgICAgICAgICAoZS5lbmRzV2l0aCgnKicpICYmXG4gICAgICAgICAgICAgICAgdHlwZS5zdGFydHNXaXRoKGUuc2xpY2UoMSwgLTEpKSkpKTtcbn1cbmZ1bmN0aW9uIGdldERlYnVnRmxhZyhlbnYsIHR5cGUpIHtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgZSBvZiBlbnYpIHtcbiAgICAgICAgaWYgKGlzRGVidWdPbihlLCB0eXBlKSkge1xuICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNEZWJ1Z09mZihlLCB0eXBlKSkge1xuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbGFnO1xufVxuZnVuY3Rpb24gcGFyc2VFbnYodHlwZSkge1xuICAgIGNvbnN0IGVudiA9IChoYXNQcm9jZXNzID8geGdsb2JhbC5wcm9jZXNzIDoge30pLmVudiB8fCB7fTtcbiAgICBjb25zdCBtYXhTaXplID0gcGFyc2VJbnQoZW52WydERUJVR19NQVgnXSB8fCAnLTEnLCAxMCk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgZ2V0RGVidWdGbGFnKChlbnZbJ0RFQlVHJ10gfHwgJycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKSwgdHlwZSksXG4gICAgICAgIGlzTmFOKG1heFNpemUpXG4gICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICA6IG1heFNpemVcbiAgICBdO1xufVxuLyoqXG4gKiBAbmFtZSBMb2dnZXJcbiAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBjb25zaXN0ZW50IGxvZyBpbnRlcmZhY2UgZm9yIG1lc3NhZ2VzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgYSBgTG9nZ2VyYCB0aGF0IGhhcyBgLmxvZ2AsIGAuZXJyb3JgLCBgLndhcm5gIGFuZCBgLmRlYnVnYCAoY29udHJvbGxlZCB3aXRoIGVudmlyb25tZW50IGBERUJVRz10eXBlQSx0eXBlQmApIG1ldGhvZHMuIExvZ2dpbmcgaXMgZG9uZSB3aXRoIGEgY29uc2lzdGVudCBwcmVmaXggKHR5cGUgb2YgbG9nZ2VyLCBkYXRlKSBmb2xsb3dlZCBieSB0aGUgYWN0dWFsIG1lc3NhZ2UgdXNpbmcgdGhlIHVuZGVybHlpbmcgY29uc29sZS5cbiAqIEBleGFtcGxlXG4gKiA8QlI+XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuICpcbiAqIGNvbnN0IGwgPSBsb2dnZXIoJ3Rlc3QnKTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9nZ2VyKG9yaWdpbikge1xuICAgIGNvbnN0IHR5cGUgPSBgJHtvcmlnaW4udG9VcHBlckNhc2UoKX06YC5wYWRTdGFydCgxNik7XG4gICAgY29uc3QgW2lzRGVidWcsIG1heFNpemVdID0gcGFyc2VFbnYob3JpZ2luLnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlYnVnOiBpc0RlYnVnXG4gICAgICAgICAgICA/ICguLi52YWx1ZXMpID0+IGFwcGx5KCdkZWJ1ZycsIHR5cGUsIHZhbHVlcywgbWF4U2l6ZSlcbiAgICAgICAgICAgIDogbm9vcCxcbiAgICAgICAgZXJyb3I6ICguLi52YWx1ZXMpID0+IGFwcGx5KCdlcnJvcicsIHR5cGUsIHZhbHVlcyksXG4gICAgICAgIGxvZzogKC4uLnZhbHVlcykgPT4gYXBwbHkoJ2xvZycsIHR5cGUsIHZhbHVlcyksXG4gICAgICAgIG5vb3AsXG4gICAgICAgIHdhcm46ICguLi52YWx1ZXMpID0+IGFwcGx5KCd3YXJuJywgdHlwZSwgdmFsdWVzKVxuICAgIH07XG59XG4iLCJleHBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJy4vcGFja2FnZUluZm8uanMnO1xuLyoqIEBpbnRlcm5hbCBMYXN0LXJlc29ydCBcInRoaXNcIiwgaWYgaXQgZ2V0cyBoZXJlIGl0IHByb2JhYmx5IHdvdWxkIGZhaWwgYW55d2F5ICovXG5mdW5jdGlvbiBldmFsdWF0ZVRoaXMoZm4pIHtcbiAgICByZXR1cm4gZm4oJ3JldHVybiB0aGlzJyk7XG59XG4vKipcbiAqIEEgY3Jvc3MtZW52aXJvbm1lbnQgaW1wbGVtZW50YXRpb24gZm9yIGdsb2JhbFRoaXNcbiAqL1xuZXhwb3J0IGNvbnN0IHhnbG9iYWwgPSAvKiNfX1BVUkVfXyovICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGdsb2JhbFRoaXNcbiAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZ2xvYmFsXG4gICAgICAgIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHNlbGZcbiAgICAgICAgICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/IHdpbmRvd1xuICAgICAgICAgICAgICAgIDogZXZhbHVhdGVUaGlzKEZ1bmN0aW9uKSk7XG4vKipcbiAqIEV4dHJhY3RzIGEga25vd24gZ2xvYmFsIGZyb20gdGhlIGVudmlyb25tZW50LCBhcHBseWluZyBhIGZhbGxiYWNrIGlmIG5vdCBmb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEdsb2JhbChuYW1lLCBmYWxsYmFjaykge1xuICAgIC8vIE5vdCBxdWl0ZSBzdXJlIHdoeSB0aGlzIGlzIGhlcmUgLSBzbnVjayBpbiB3aXRoIFRTIDQuNy4yIHdpdGggbm8gcmVhbCBpZGVhXG4gICAgLy8gKGFzIG9mIG5vdykgYXMgdG8gd2h5IHRoaXMgbG9va3MgbGlrZSBhbiBcImFueVwiIHdoZW4gd2UgZG8gY2FzdCBpdCB0byBhIFRcbiAgICAvL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuICAgIHJldHVybiB0eXBlb2YgeGdsb2JhbFtuYW1lXSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBmYWxsYmFja1xuICAgICAgICA6IHhnbG9iYWxbbmFtZV07XG59XG4vKipcbiAqIEV4cG9zZSBhIHZhbHVlIGFzIGEga25vd24gZ2xvYmFsLCBpZiBub3QgYWxyZWFkeSBkZWZpbmVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBvc2VHbG9iYWwobmFtZSwgZmFsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIHhnbG9iYWxbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHhnbG9iYWxbbmFtZV0gPSBmYWxsYmFjaztcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgcGFja2FnZUluZm8gPSB7IG5hbWU6ICdAcG9sa2Fkb3QveC1nbG9iYWwnLCBwYXRoOiAoaW1wb3J0Lm1ldGEgJiYgaW1wb3J0Lm1ldGEudXJsKSA/IG5ldyBVUkwoaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZS5zdWJzdHJpbmcoMCwgbmV3IFVSTChpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykgKyAxKSA6ICdhdXRvJywgdHlwZTogJ2VzbScsIHZlcnNpb246ICcxMi4zLjInIH07XG4iLCIvKipcbiAqIEEgc2hhcmFibGUgaWRlbnRpdHkgZnVuY3Rpb24uIFJldHVybnMgdGhlIGlucHV0IGFzLWlzIHdpdGggbm8gdHJhbnNmb3JtYXRpb24gYXBwbGllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBIHNoYXJhYmxlIG5vb3AgZnVuY3Rpb24uIEFzIHRoZSBuYW1lIHN1Z2dlc3RzLCBkb2VzIG5vdGhpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7XG4gICAgLy8gbm9vcFxufVxuIiwiaW1wb3J0IHsgVGV4dEVuY29kZXIgfSBmcm9tICdAcG9sa2Fkb3QveC10ZXh0ZW5jb2Rlcic7XG5jb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4vKipcbiAqIEBuYW1lIHN0cmluZ1RvVThhXG4gKiBAc3VtbWFyeSBDcmVhdGVzIGEgVWludDhBcnJheSBvYmplY3QgZnJvbSBhIHV0Zi04IHN0cmluZy5cbiAqIEBkZXNjcmlwdGlvblxuICogU3RyaW5nIGlucHV0IHZhbHVlcyByZXR1cm4gdGhlIGFjdHVhbCBlbmNvZGVkIGBVSW50OEFycmF5YC4gYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcyByZXR1cm5zIGFuIGVtcHR5IGVuY29kZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogPEJSPlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IHN0cmluZ1RvVThhIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuICpcbiAqIHN0cmluZ1RvVThhKCdoZWxsbycpOyAvLyBbMHg2OCwgMHg2NSwgMHg2YywgMHg2YywgMHg2Zl1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9VOGEodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgPyBlbmNvZGVyLmVuY29kZSh2YWx1ZS50b1N0cmluZygpKVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KCk7XG59XG4iLCJjb25zdCBVOCA9IG5ldyBBcnJheSgyNTYpO1xuY29uc3QgVTE2ID0gbmV3IEFycmF5KDI1NiAqIDI1Nik7XG5mb3IgKGxldCBuID0gMDsgbiA8IDI1NjsgbisrKSB7XG4gICAgVThbbl0gPSBuLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xufVxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIGNvbnN0IHMgPSBpIDw8IDg7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAyNTY7IGorKykge1xuICAgICAgICBVMTZbcyB8IGpdID0gVThbaV0gKyBVOFtqXTtcbiAgICB9XG59XG4vKiogQGludGVybmFsICovXG5mdW5jdGlvbiBoZXgodmFsdWUsIHJlc3VsdCkge1xuICAgIGNvbnN0IG1vZCA9ICh2YWx1ZS5sZW5ndGggJSAyKSB8IDA7XG4gICAgY29uc3QgbGVuZ3RoID0gKHZhbHVlLmxlbmd0aCAtIG1vZCkgfCAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IFUxNlsodmFsdWVbaV0gPDwgOCkgfCB2YWx1ZVtpICsgMV1dO1xuICAgIH1cbiAgICBpZiAobW9kKSB7XG4gICAgICAgIHJlc3VsdCArPSBVOFt2YWx1ZVtsZW5ndGhdIHwgMF07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEBuYW1lIHU4YVRvSGV4XG4gKiBAc3VtbWFyeSBDcmVhdGVzIGEgaGV4IHN0cmluZyBmcm9tIGEgVWludDhBcnJheSBvYmplY3QuXG4gKiBAZGVzY3JpcHRpb25cbiAqIGBVSW50OEFycmF5YCBpbnB1dCB2YWx1ZXMgcmV0dXJuIHRoZSBhY3R1YWwgaGV4IHN0cmluZy4gYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcyByZXR1cm5zIGFuIGAweGAgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqIDxCUj5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyB1OGFUb0hleCB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbiAqXG4gKiB1OGFUb0hleChuZXcgVWludDhBcnJheShbMHg2OCwgMHg2NSwgMHg2YywgMHg2YywgMHhmXSkpOyAvLyAweDY4NjU2YzBmXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHU4YVRvSGV4KHZhbHVlLCBiaXRMZW5ndGggPSAtMSwgaXNQcmVmaXhlZCA9IHRydWUpIHtcbiAgICAvLyB0aGlzIGlzIG5vdCAxMDAlIGNvcnJlY3Qgc2lubWNlIHdlIHN1cHBvcnQgaXNQcmVmaXhlZCA9IGZhbHNlLi4uLlxuICAgIGNvbnN0IGVtcHR5ID0gaXNQcmVmaXhlZFxuICAgICAgICA/ICcweCdcbiAgICAgICAgOiAnJztcbiAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH1cbiAgICBlbHNlIGlmIChiaXRMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguY2VpbChiaXRMZW5ndGggLyA4KTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke2hleCh2YWx1ZS5zdWJhcnJheSgwLCBsZW5ndGggLyAyKSwgZW1wdHkpfeKApiR7aGV4KHZhbHVlLnN1YmFycmF5KHZhbHVlLmxlbmd0aCAtIGxlbmd0aCAvIDIpLCAnJyl9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGV4KHZhbHVlLCBlbXB0eSk7XG59XG4iLCJpbXBvcnQgeyBoZXhUb1U4YSB9IGZyb20gJy4uL2hleC90b1U4YS5qcyc7XG5pbXBvcnQgeyBpc0J1ZmZlciB9IGZyb20gJy4uL2lzL2J1ZmZlci5qcyc7XG5pbXBvcnQgeyBpc0hleCB9IGZyb20gJy4uL2lzL2hleC5qcyc7XG5pbXBvcnQgeyBpc1U4YSB9IGZyb20gJy4uL2lzL3U4YS5qcyc7XG5pbXBvcnQgeyBzdHJpbmdUb1U4YSB9IGZyb20gJy4uL3N0cmluZy90b1U4YS5qcyc7XG4vKipcbiAqIEBuYW1lIHU4YVRvVThhXG4gKiBAc3VtbWFyeSBDcmVhdGVzIGEgVWludDhBcnJheSB2YWx1ZSBmcm9tIGEgVWludDhBcnJheSwgQnVmZmVyLCBzdHJpbmcgb3IgaGV4IGlucHV0LlxuICogQGRlc2NyaXB0aW9uXG4gKiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgaW5wdXRzIHJldHVybnMgYSBgW11gIHJlc3VsdCwgVWludDhBcnJheSB2YWx1ZXMgcmV0dXJucyB0aGUgdmFsdWUsIGhleCBzdHJpbmdzIHJldHVybnMgYSBVaW50OEFycmF5IHJlcHJlc2VudGF0aW9uLlxuICogQGV4YW1wbGVcbiAqIDxCUj5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyB1OGFUb1U4YSB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbiAqXG4gKiB1OGFUb1U4YShuZXcgVWludDhBcnJheShbMHgxMiwgMHgzNF0pOyAvLyA9PiBVaW50OEFycmF5KFsweDEyLCAweDM0XSlcbiAqIHU4YVRvVThhKDB4MTIzNCk7IC8vID0+IFVpbnQ4QXJyYXkoWzB4MTIsIDB4MzRdKVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1OGFUb1U4YSh2YWx1ZSkge1xuICAgIHJldHVybiBpc1U4YSh2YWx1ZSlcbiAgICAgICAgLy8gTk9URSBpc0J1ZmZlciBuZWVkcyB0byBnbyBoZXJlIHNpbmNlIGl0IGFjdHVhbGx5IGV4dGVuZHNcbiAgICAgICAgLy8gVWludDhBcnJheSBvbiBOb2RlLmpzIGVudmlyb25tZW50cywgc28gYWxsIEJ1ZmZlciBhcmUgVWludDhBcnJheSxcbiAgICAgICAgLy8gYnV0IFVpbnQ4QXJyYXkgaXMgbm90IEJ1ZmZlclxuICAgICAgICA/IGlzQnVmZmVyKHZhbHVlKVxuICAgICAgICAgICAgPyBuZXcgVWludDhBcnJheSh2YWx1ZSlcbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgOiBpc0hleCh2YWx1ZSlcbiAgICAgICAgICAgID8gaGV4VG9VOGEodmFsdWUpXG4gICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICAgICAgPyBuZXcgVWludDhBcnJheSh2YWx1ZSlcbiAgICAgICAgICAgICAgICA6IHN0cmluZ1RvVThhKHZhbHVlKTtcbn1cbiIsImltcG9ydCB7IGV4dHJhY3RHbG9iYWwgfSBmcm9tICdAcG9sa2Fkb3QveC1nbG9iYWwnO1xuZXhwb3J0IHsgcGFja2FnZUluZm8gfSBmcm9tICcuL3BhY2thZ2VJbmZvLmpzJztcbi8qKlxuICogQGludGVybmFsXG4gKlxuICogVGhlcmUgYXJlIF9zdGlsbF8gc29tZSBvbGRlciBlbnZpcm9ubWVudHMgKHNwZWNpZmljYWxseSBSTiA8IDAuNzApLCB0aGF0IGRvZXNcbiAqIG5vdCBoYXZlIHByb3BlciBCaWdJbnQgc3VwcG9ydCAtIGEgbm9uLXdvcmtpbmcgZmFsbGJhY2sgaXMgcHJvdmlkZWQgZm9yIHRob3NlLlxuICpcbiAqIFdlIGRldGVjdCBhdmFpbGFiaWxpdHkgb2YgQmlnSW50IHVwb24gdXNhZ2UsIHNvIHRoaXMgaXMgcHVyZWx5IHRvIGFsbG93IGZ1bmN0aW9uYWxcbiAqIGNvbXBpbGF0aW9uICYgYnVuZGxpbmcuIFNpbmNlIHdlIGhhdmUgb3BlcmF0b3JzIHN1Y2ggYXMgKistLyB0b3AtbGV2ZWwsIGEgbnVtYmVyLWlzaFxuICogcmVzdWx0IGlzIHVzZWQgaGVyZS5cbiAqL1xuZnVuY3Rpb24gaW52YWxpZEZhbGxiYWNrKCkge1xuICAgIHJldHVybiBOdW1iZXIuTmFOO1xufVxuZXhwb3J0IGNvbnN0IEJpZ0ludCA9IC8qI19fUFVSRV9fKi8gZXh0cmFjdEdsb2JhbCgnQmlnSW50JywgaW52YWxpZEZhbGxiYWNrKTtcbiIsImV4cG9ydCB7IHBhY2thZ2VJbmZvIH0gZnJvbSAnLi9wYWNrYWdlSW5mby5qcyc7XG4vKiogQGludGVybmFsIExhc3QtcmVzb3J0IFwidGhpc1wiLCBpZiBpdCBnZXRzIGhlcmUgaXQgcHJvYmFibHkgd291bGQgZmFpbCBhbnl3YXkgKi9cbmZ1bmN0aW9uIGV2YWx1YXRlVGhpcyhmbikge1xuICAgIHJldHVybiBmbigncmV0dXJuIHRoaXMnKTtcbn1cbi8qKlxuICogQSBjcm9zcy1lbnZpcm9ubWVudCBpbXBsZW1lbnRhdGlvbiBmb3IgZ2xvYmFsVGhpc1xuICovXG5leHBvcnQgY29uc3QgeGdsb2JhbCA9IC8qI19fUFVSRV9fKi8gKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuICAgID8gZ2xvYmFsVGhpc1xuICAgIDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxcbiAgICAgICAgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gc2VsZlxuICAgICAgICAgICAgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgID8gd2luZG93XG4gICAgICAgICAgICAgICAgOiBldmFsdWF0ZVRoaXMoRnVuY3Rpb24pKTtcbi8qKlxuICogRXh0cmFjdHMgYSBrbm93biBnbG9iYWwgZnJvbSB0aGUgZW52aXJvbm1lbnQsIGFwcGx5aW5nIGEgZmFsbGJhY2sgaWYgbm90IGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0R2xvYmFsKG5hbWUsIGZhbGxiYWNrKSB7XG4gICAgLy8gTm90IHF1aXRlIHN1cmUgd2h5IHRoaXMgaXMgaGVyZSAtIHNudWNrIGluIHdpdGggVFMgNC43LjIgd2l0aCBubyByZWFsIGlkZWFcbiAgICAvLyAoYXMgb2Ygbm93KSBhcyB0byB3aHkgdGhpcyBsb29rcyBsaWtlIGFuIFwiYW55XCIgd2hlbiB3ZSBkbyBjYXN0IGl0IHRvIGEgVFxuICAgIC8vXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gICAgcmV0dXJuIHR5cGVvZiB4Z2xvYmFsW25hbWVdID09PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGZhbGxiYWNrXG4gICAgICAgIDogeGdsb2JhbFtuYW1lXTtcbn1cbi8qKlxuICogRXhwb3NlIGEgdmFsdWUgYXMgYSBrbm93biBnbG9iYWwsIGlmIG5vdCBhbHJlYWR5IGRlZmluZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cG9zZUdsb2JhbChuYW1lLCBmYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgeGdsb2JhbFtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgeGdsb2JhbFtuYW1lXSA9IGZhbGxiYWNrO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBwYWNrYWdlSW5mbyA9IHsgbmFtZTogJ0Bwb2xrYWRvdC94LWdsb2JhbCcsIHBhdGg6IChpbXBvcnQubWV0YSAmJiBpbXBvcnQubWV0YS51cmwpID8gbmV3IFVSTChpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLnN1YnN0cmluZygwLCBuZXcgVVJMKGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSArIDEpIDogJ2F1dG8nLCB0eXBlOiAnZXNtJywgdmVyc2lvbjogJzEyLjMuMicgfTtcbiIsImV4cG9ydCBjb25zdCBwYWNrYWdlSW5mbyA9IHsgbmFtZTogJ0Bwb2xrYWRvdC94LWJpZ2ludCcsIHBhdGg6IChpbXBvcnQubWV0YSAmJiBpbXBvcnQubWV0YS51cmwpID8gbmV3IFVSTChpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLnN1YnN0cmluZygwLCBuZXcgVVJMKGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSArIDEpIDogJ2F1dG8nLCB0eXBlOiAnZXNtJywgdmVyc2lvbjogJzEyLjMuMicgfTtcbiIsImltcG9ydCB7IGV4dHJhY3RHbG9iYWwgfSBmcm9tICdAcG9sa2Fkb3QveC1nbG9iYWwnO1xuaW1wb3J0IHsgVGV4dEVuY29kZXIgYXMgRmFsbGJhY2sgfSBmcm9tICcuL2ZhbGxiYWNrLmpzJztcbmV4cG9ydCB7IHBhY2thZ2VJbmZvIH0gZnJvbSAnLi9wYWNrYWdlSW5mby5qcyc7XG5leHBvcnQgY29uc3QgVGV4dEVuY29kZXIgPSAvKiNfX1BVUkVfXyovIGV4dHJhY3RHbG9iYWwoJ1RleHRFbmNvZGVyJywgRmFsbGJhY2spO1xuIiwiZXhwb3J0IGNsYXNzIFRleHRFbmNvZGVyIHtcbiAgICBlbmNvZGUodmFsdWUpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHU4YSA9IG5ldyBVaW50OEFycmF5KGNvdW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB1OGFbaV0gPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1OGE7XG4gICAgfVxufVxuIiwiZXhwb3J0IHsgcGFja2FnZUluZm8gfSBmcm9tICcuL3BhY2thZ2VJbmZvLmpzJztcbi8qKiBAaW50ZXJuYWwgTGFzdC1yZXNvcnQgXCJ0aGlzXCIsIGlmIGl0IGdldHMgaGVyZSBpdCBwcm9iYWJseSB3b3VsZCBmYWlsIGFueXdheSAqL1xuZnVuY3Rpb24gZXZhbHVhdGVUaGlzKGZuKSB7XG4gICAgcmV0dXJuIGZuKCdyZXR1cm4gdGhpcycpO1xufVxuLyoqXG4gKiBBIGNyb3NzLWVudmlyb25tZW50IGltcGxlbWVudGF0aW9uIGZvciBnbG9iYWxUaGlzXG4gKi9cbmV4cG9ydCBjb25zdCB4Z2xvYmFsID0gLyojX19QVVJFX18qLyAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgPyBnbG9iYWxUaGlzXG4gICAgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGdsb2JhbFxuICAgICAgICA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBzZWxmXG4gICAgICAgICAgICA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyB3aW5kb3dcbiAgICAgICAgICAgICAgICA6IGV2YWx1YXRlVGhpcyhGdW5jdGlvbikpO1xuLyoqXG4gKiBFeHRyYWN0cyBhIGtub3duIGdsb2JhbCBmcm9tIHRoZSBlbnZpcm9ubWVudCwgYXBwbHlpbmcgYSBmYWxsYmFjayBpZiBub3QgZm91bmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RHbG9iYWwobmFtZSwgZmFsbGJhY2spIHtcbiAgICAvLyBOb3QgcXVpdGUgc3VyZSB3aHkgdGhpcyBpcyBoZXJlIC0gc251Y2sgaW4gd2l0aCBUUyA0LjcuMiB3aXRoIG5vIHJlYWwgaWRlYVxuICAgIC8vIChhcyBvZiBub3cpIGFzIHRvIHdoeSB0aGlzIGxvb2tzIGxpa2UgYW4gXCJhbnlcIiB3aGVuIHdlIGRvIGNhc3QgaXQgdG8gYSBUXG4gICAgLy9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cbiAgICByZXR1cm4gdHlwZW9mIHhnbG9iYWxbbmFtZV0gPT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZmFsbGJhY2tcbiAgICAgICAgOiB4Z2xvYmFsW25hbWVdO1xufVxuLyoqXG4gKiBFeHBvc2UgYSB2YWx1ZSBhcyBhIGtub3duIGdsb2JhbCwgaWYgbm90IGFscmVhZHkgZGVmaW5lZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwb3NlR2xvYmFsKG5hbWUsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiB4Z2xvYmFsW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB4Z2xvYmFsW25hbWVdID0gZmFsbGJhY2s7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHBhY2thZ2VJbmZvID0geyBuYW1lOiAnQHBvbGthZG90L3gtZ2xvYmFsJywgcGF0aDogKGltcG9ydC5tZXRhICYmIGltcG9ydC5tZXRhLnVybCkgPyBuZXcgVVJMKGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUuc3Vic3RyaW5nKDAsIG5ldyBVUkwoaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpICsgMSkgOiAnYXV0bycsIHR5cGU6ICdlc20nLCB2ZXJzaW9uOiAnMTIuMy4yJyB9O1xuIiwiZXhwb3J0IGNvbnN0IHBhY2thZ2VJbmZvID0geyBuYW1lOiAnQHBvbGthZG90L3gtdGV4dGVuY29kZXInLCBwYXRoOiAoaW1wb3J0Lm1ldGEgJiYgaW1wb3J0Lm1ldGEudXJsKSA/IG5ldyBVUkwoaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZS5zdWJzdHJpbmcoMCwgbmV3IFVSTChpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykgKyAxKSA6ICdhdXRvJywgdHlwZTogJ2VzbScsIHZlcnNpb246ICcxMi4zLjInIH07XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vaW5kZXguanMnXG5cbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9XG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB0eXBlIHsgUmVxdWVzdFNpZ25hdHVyZXMsIFRyYW5zcG9ydFJlcXVlc3RNZXNzYWdlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdHlwZXMnO1xuXG5pbXBvcnQgeyBNRVNTQUdFX09SSUdJTl9DT05URU5UIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9kZWZhdWx0cyc7XG5pbXBvcnQgeyBlbmFibGUsIGhhbmRsZVJlc3BvbnNlLCBpbml0RXZtUHJvdmlkZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3BhZ2UnO1xuaW1wb3J0IHsgaW5qZWN0RXZtRXh0ZW5zaW9uLCBpbmplY3RFeHRlbnNpb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1pbmplY3QnO1xuXG5jb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYuUEtHX1ZFUlNJT04gYXMgc3RyaW5nO1xuXG5mdW5jdGlvbiBpbmplY3QgKCkge1xuICBpbmplY3RFeHRlbnNpb24oZW5hYmxlLCB7XG4gICAgbmFtZTogJ3N1YndhbGxldC1qcycsXG4gICAgdmVyc2lvbjogdmVyc2lvblxuICB9KTtcbiAgaW5qZWN0RXZtRXh0ZW5zaW9uKGluaXRFdm1Qcm92aWRlcih2ZXJzaW9uKSk7XG59XG5cbi8vIHNldHVwIGEgcmVzcG9uc2UgbGlzdGVuZXIgKGV2ZW50cyBjcmVhdGVkIGJ5IHRoZSBsb2FkZXIgZm9yIGV4dGVuc2lvbiByZXNwb25zZXMpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICh7IGRhdGEsIHNvdXJjZSB9OiBNZXNzYWdlKTogdm9pZCA9PiB7XG4gIC8vIG9ubHkgYWxsb3cgbWVzc2FnZXMgZnJvbSBvdXIgd2luZG93LCBieSB0aGUgbG9hZGVyXG4gIGlmIChzb3VyY2UgIT09IHdpbmRvdyB8fCBkYXRhLm9yaWdpbiAhPT0gTUVTU0FHRV9PUklHSU5fQ09OVEVOVCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlkKSB7XG4gICAgaGFuZGxlUmVzcG9uc2UoZGF0YSBhcyBUcmFuc3BvcnRSZXF1ZXN0TWVzc2FnZTxrZXlvZiBSZXF1ZXN0U2lnbmF0dXJlcz4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01pc3NpbmcgaWQgZm9yIHJlc3BvbnNlLicpO1xuICB9XG59KTtcblxuaW5qZWN0KCk7XG4iXSwibmFtZXMiOlsiUnVudGltZUVudmlyb25tZW50IiwiU3Rha2luZ1R5cGUiLCJBUElJdGVtU3RhdGUiLCJSTVJLX1ZFUiIsIkNyb3dkbG9hblBhcmFTdGF0ZSIsIkNvbnRyYWN0VHlwZSIsIldhbGxldFVubG9ja1R5cGUiLCJUcmFuc2FjdGlvbkRpcmVjdGlvbiIsIkNoYWluVHlwZSIsIkV4dHJpbnNpY1R5cGUiLCJFeHRyaW5zaWNTdGF0dXMiLCJCYXNpY1R4RXJyb3JUeXBlIiwiU3Rha2luZ1R4RXJyb3JUeXBlIiwiVHJhbnNmZXJUeEVycm9yVHlwZSIsIkJhc2ljVHhXYXJuaW5nQ29kZSIsIkJhbGFuY2VFcnJvclR5cGUiLCJQcm92aWRlckVycm9yVHlwZSIsIkFjY291bnRFeHRlcm5hbEVycm9yQ29kZSIsIkV4dGVybmFsUmVxdWVzdFByb21pc2VTdGF0dXMiLCJUaGVtZU5hbWVzIiwiTkVUV09SS19FUlJPUiIsIk5FVFdPUktfU1RBVFVTIiwiRXZtUHJvdmlkZXJFcnJvclR5cGUiLCJVbnN0YWtpbmdTdGF0dXMiLCJTdGFraW5nU3RhdHVzIiwiQ2hhaW5FZGl0U3RhbmRhcmQiLCJOb3RpZmljYXRpb25UeXBlIiwiTWFudGFQYXlFbmFibGVNZXNzYWdlIiwiTW9iaWxlT1MiLCJTV0Vycm9yIiwiZGV0ZWN0VHJhbnNsYXRlIiwiZGVmYXVsdEVycm9yTWFwIiwiQ0hBSU5fRElTQ09OTkVDVEVEIiwibWVzc2FnZSIsImNvZGUiLCJ1bmRlZmluZWQiLCJJTlZBTElEX1BBUkFNUyIsIklOVEVSTkFMX0VSUk9SIiwiVVNFUl9SRUpFQ1QiLCJQcm92aWRlckVycm9yIiwiY29uc3RydWN0b3IiLCJlcnJvclR5cGUiLCJlcnJNZXNzYWdlIiwiZGF0YSIsIkVycm9yIiwidG9KU09OIiwibmFtZSIsIkFMTE9XRURfUEFUSCIsIlBISVNISU5HX1BBR0VfUkVESVJFQ1QiLCJFWFRFTlNJT05fUFJFRklYIiwicHJvY2VzcyIsImVudiIsIklEX1BSRUZJWCIsIlBPUlRfTU9CSUxFIiwiUE9SVF9DT05URU5UIiwiUE9SVF9FWFRFTlNJT04iLCJNRVNTQUdFX09SSUdJTl9QQUdFIiwiTUVTU0FHRV9PUklHSU5fQ09OVEVOVCIsIlBBU1NXT1JEX0VYUElSWV9NSU4iLCJQQVNTV09SRF9FWFBJUllfTVMiLCJzZW5kUmVxdWVzdCIsIkFjY291bnRzIiwiX3NlbmRSZXF1ZXN0IiwiZ2V0IiwiYW55VHlwZSIsImFjY291bnRBdXRoVHlwZSIsInN1YnNjcmliZSIsImNiIiwiaWQiLCJ0aGVuIiwic3ViSWQiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsIk1ldGFkYXRhIiwiUG9zdE1lc3NhZ2VQcm92aWRlciIsIlNpZ25lciIsImFjY291bnRzIiwibWV0YWRhdGEiLCJwcm92aWRlciIsInNpZ25lciIsInNldEludGVydmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvdmlkZSIsImRlZmluaXRpb24iLCJhZGRUb2tlbiIsInJlcXVlc3QiLCJFdmVudEVtaXR0ZXIiLCJpc1VuZGVmaW5lZCIsImxvZ2dlciIsImwiLCJldmVudGVtaXR0ZXIiLCJpc0Nsb25hYmxlIiwiaXNDb25uZWN0ZWQiLCJzdWJzY3JpcHRpb25zIiwiY2xvbmUiLCJjb25uZWN0IiwiZGlzY29ubmVjdCIsImhhc1N1YnNjcmlwdGlvbnMiLCJsaXN0UHJvdmlkZXJzIiwib24iLCJ0eXBlIiwic3ViIiwicmVtb3ZlTGlzdGVuZXIiLCJzZW5kIiwibWV0aG9kIiwicGFyYW1zIiwiXyIsInN1YnNjcmlwdGlvbiIsImNhbGxiYWNrIiwicmVzIiwic3RhcnRQcm92aWRlciIsImtleSIsImVtaXQiLCJtZXRhIiwiY29ubmVjdGVkIiwidW5zdWJzY3JpYmUiLCJkZWJ1ZyIsIm5leHRJZCIsInNpZ25QYXlsb2FkIiwicGF5bG9hZCIsInJlc3VsdCIsInNpZ25SYXciLCJTYWZlRXZlbnRFbWl0dGVyIiwic3Vic2NyaWJlRmxhZyIsIlN1YldhbGxldEV2bVByb3ZpZGVyIiwiaXNTdWJXYWxsZXQiLCJpc01ldGFNYXNrIiwiX2Nvbm5lY3RlZCIsInNlbmRNZXNzYWdlIiwidmVyc2lvbiIsInN1YnNjcmliZUV4dGVuc2lvbkV2ZW50cyIsImluY2x1ZGVzIiwiZmluYWxUeXBlIiwid2FybiIsImRvbmUiLCJlbmFibGUiLCJldmVudE5hbWUiLCJsaXN0ZW5lciIsIm9uY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9yaWdpbiIsImRvY3VtZW50IiwidGl0bGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiZSIsIl9zZW5kU3luYyIsImpzb25ycGMiLCJtZXRob2RPclBheWxvYWQiLCJjYWxsYmFja09yQXJncyIsIkFycmF5IiwiaXNBcnJheSIsInJzIiwic2VuZEFzeW5jIiwiZ2V0SWQiLCJJbmplY3RlZCIsImhhbmRsZXJzIiwic3Vic2NyaWJlciIsInRyYW5zcG9ydFJlcXVlc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJoYW5kbGVSZXNwb25zZSIsImhhbmRsZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3JDb2RlIiwicmVzcG9uc2UiLCJpbml0RXZtUHJvdmlkZXIiLCJjb3VudGVyIiwiRGF0ZSIsIm5vdyIsInBhY2thZ2VJbmZvIiwiaW5qZWN0RXh0ZW5zaW9uIiwid2luZG93SW5qZWN0IiwiaW5qZWN0ZWRXZWIzIiwiaW5qZWN0RXZtRXh0ZW5zaW9uIiwiZXZtUHJvdmlkZXIiLCJTdWJXYWxsZXQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXRoZXJldW0iLCJwYXRoIiwiUEtHX1ZFUlNJT04iLCJpbmplY3QiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9