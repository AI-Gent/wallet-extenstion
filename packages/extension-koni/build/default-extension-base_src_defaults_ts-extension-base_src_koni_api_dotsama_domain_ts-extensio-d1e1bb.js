((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-base_src_defaults_ts-extension-base_src_koni_api_dotsama_domain_ts-extensio-d1e1bb"],{

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

/***/ "../extension-base/src/constants/index.ts":
/*!************************************************!*\
  !*** ../extension-base/src/constants/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACALA_REFRESH_CROWDLOAN_INTERVAL": () => (/* binding */ ACALA_REFRESH_CROWDLOAN_INTERVAL),
/* harmony export */   "ALL_ACCOUNT_KEY": () => (/* binding */ ALL_ACCOUNT_KEY),
/* harmony export */   "ALL_GENESIS_HASH": () => (/* binding */ ALL_GENESIS_HASH),
/* harmony export */   "ALL_NETWORK_KEY": () => (/* binding */ ALL_NETWORK_KEY),
/* harmony export */   "ASTAR_REFRESH_BALANCE_INTERVAL": () => (/* binding */ ASTAR_REFRESH_BALANCE_INTERVAL),
/* harmony export */   "CRON_AUTO_RECOVER_DOTSAMA_INTERVAL": () => (/* binding */ CRON_AUTO_RECOVER_DOTSAMA_INTERVAL),
/* harmony export */   "CRON_AUTO_RECOVER_WEB3_INTERVAL": () => (/* binding */ CRON_AUTO_RECOVER_WEB3_INTERVAL),
/* harmony export */   "CRON_GET_API_MAP_STATUS": () => (/* binding */ CRON_GET_API_MAP_STATUS),
/* harmony export */   "CRON_RECOVER_HISTORY_INTERVAL": () => (/* binding */ CRON_RECOVER_HISTORY_INTERVAL),
/* harmony export */   "CRON_REFRESH_CHAIN_NOMINATOR_METADATA": () => (/* binding */ CRON_REFRESH_CHAIN_NOMINATOR_METADATA),
/* harmony export */   "CRON_REFRESH_CHAIN_STAKING_METADATA": () => (/* binding */ CRON_REFRESH_CHAIN_STAKING_METADATA),
/* harmony export */   "CRON_REFRESH_HISTORY_INTERVAL": () => (/* binding */ CRON_REFRESH_HISTORY_INTERVAL),
/* harmony export */   "CRON_REFRESH_NFT_INTERVAL": () => (/* binding */ CRON_REFRESH_NFT_INTERVAL),
/* harmony export */   "CRON_REFRESH_PRICE_INTERVAL": () => (/* binding */ CRON_REFRESH_PRICE_INTERVAL),
/* harmony export */   "CRON_REFRESH_STAKING_REWARD_FAST_INTERVAL": () => (/* binding */ CRON_REFRESH_STAKING_REWARD_FAST_INTERVAL),
/* harmony export */   "CRON_REFRESH_STAKING_REWARD_INTERVAL": () => (/* binding */ CRON_REFRESH_STAKING_REWARD_INTERVAL),
/* harmony export */   "CRON_SYNC_MANTA_PAY": () => (/* binding */ CRON_SYNC_MANTA_PAY),
/* harmony export */   "IGNORE_GET_SUBSTRATE_FEATURES_LIST": () => (/* binding */ IGNORE_GET_SUBSTRATE_FEATURES_LIST),
/* harmony export */   "IGNORE_QR_SIGNER": () => (/* binding */ IGNORE_QR_SIGNER),
/* harmony export */   "LANGUAGE": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE),
/* harmony export */   "MANTA_PAY_BALANCE_INTERVAL": () => (/* binding */ MANTA_PAY_BALANCE_INTERVAL),
/* harmony export */   "PREDEFINED_STAKING_POOL": () => (/* reexport safe */ _staking__WEBPACK_IMPORTED_MODULE_0__.PREDEFINED_STAKING_POOL),
/* harmony export */   "SUB_TOKEN_REFRESH_BALANCE_INTERVAL": () => (/* binding */ SUB_TOKEN_REFRESH_BALANCE_INTERVAL),
/* harmony export */   "XCM_MIN_AMOUNT_RATIO": () => (/* binding */ XCM_MIN_AMOUNT_RATIO)
/* harmony export */ });
/* harmony import */ var _staking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staking */ "../extension-base/src/constants/staking.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "../extension-base/src/constants/storage.ts");
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0

const CRON_REFRESH_PRICE_INTERVAL = 30000;
const CRON_AUTO_RECOVER_DOTSAMA_INTERVAL = 60000;
const CRON_AUTO_RECOVER_WEB3_INTERVAL = 90000;
const ACALA_REFRESH_CROWDLOAN_INTERVAL = 300000;
const ASTAR_REFRESH_BALANCE_INTERVAL = 60000;
const SUB_TOKEN_REFRESH_BALANCE_INTERVAL = 60000;
const CRON_REFRESH_NFT_INTERVAL = 7200000;
const CRON_REFRESH_STAKING_REWARD_INTERVAL = 900000;
const CRON_REFRESH_STAKING_REWARD_FAST_INTERVAL = 300000;
const CRON_REFRESH_HISTORY_INTERVAL = 900000;
const CRON_GET_API_MAP_STATUS = 10000;
const CRON_REFRESH_CHAIN_STAKING_METADATA = 900000;
const CRON_REFRESH_CHAIN_NOMINATOR_METADATA = 1800000;
const CRON_RECOVER_HISTORY_INTERVAL = 30000;
const CRON_SYNC_MANTA_PAY = 300000;
const MANTA_PAY_BALANCE_INTERVAL = 30000;
const ALL_ACCOUNT_KEY = 'ALL';
const ALL_NETWORK_KEY = 'all';
const ALL_GENESIS_HASH = null;
const IGNORE_GET_SUBSTRATE_FEATURES_LIST = ['astarEvm', 'ethereum', 'ethereum_goerli', 'binance', 'binance_test', 'boba_rinkeby', 'boba', 'bobabase', 'bobabeam'];
const IGNORE_QR_SIGNER = [];
const XCM_MIN_AMOUNT_RATIO = 1.2;



/***/ }),

/***/ "../extension-base/src/constants/staking.ts":
/*!**************************************************!*\
  !*** ../extension-base/src/constants/staking.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PREDEFINED_STAKING_POOL": () => (/* binding */ PREDEFINED_STAKING_POOL)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

const PREDEFINED_STAKING_POOL = {
  kusama: 80,
  polkadot: 39
};

/***/ }),

/***/ "../extension-base/src/constants/storage.ts":
/*!**************************************************!*\
  !*** ../extension-base/src/constants/storage.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGE": () => (/* binding */ LANGUAGE)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

const LANGUAGE = 'current-language';

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
const EXTENSION_PREFIX = ({"NODE_ENV":"development","PKG_NAME":"@subwallet/extension-koni","PKG_VERSION":"1.1.17-0","TARGET_ENV":"extension","ID_PREDIX":"sw-ext-","TRANSAK_API_KEY":undefined,"COINBASE_PAY_ID":undefined,"TRANSAK_TEST_MODE":true,"BANXA_TEST_MODE":true}).EXTENSION_PREFIX || '';
const ID_PREFIX = ({"NODE_ENV":"development","PKG_NAME":"@subwallet/extension-koni","PKG_VERSION":"1.1.17-0","TARGET_ENV":"extension","ID_PREDIX":"sw-ext-","TRANSAK_API_KEY":undefined,"COINBASE_PAY_ID":undefined,"TRANSAK_TEST_MODE":true,"BANXA_TEST_MODE":true}).ID_PREFIX || EXTENSION_PREFIX || '';
const PORT_MOBILE = `${EXTENSION_PREFIX}mobile`;
const PORT_CONTENT = `${EXTENSION_PREFIX}koni-content`;
const PORT_EXTENSION = `${EXTENSION_PREFIX}koni-extension`;
const MESSAGE_ORIGIN_PAGE = `${EXTENSION_PREFIX}koni-page`;
const MESSAGE_ORIGIN_CONTENT = `${EXTENSION_PREFIX}koni-content`;
const PASSWORD_EXPIRY_MIN = 15;
const PASSWORD_EXPIRY_MS = PASSWORD_EXPIRY_MIN * 60 * 1000;


/***/ }),

/***/ "../extension-base/src/koni/api/dotsama/domain.ts":
/*!********************************************************!*\
  !*** ../extension-base/src/koni/api/dotsama/domain.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AZERO_DOMAIN_CONTRACTS": () => (/* binding */ AZERO_DOMAIN_CONTRACTS),
/* harmony export */   "AZERO_ID_SUFFIX": () => (/* binding */ AZERO_ID_SUFFIX),
/* harmony export */   "CHAINS_SUPPORTED_DOMAIN": () => (/* binding */ CHAINS_SUPPORTED_DOMAIN),
/* harmony export */   "ENS_SUFFIX": () => (/* binding */ ENS_SUFFIX),
/* harmony export */   "SUPPORTED_DOMAIN_SUFFIX": () => (/* binding */ SUPPORTED_DOMAIN_SUFFIX),
/* harmony export */   "TZERO_ID_SUFFIX": () => (/* binding */ TZERO_ID_SUFFIX),
/* harmony export */   "isAzeroDomain": () => (/* binding */ isAzeroDomain),
/* harmony export */   "resolveAzeroAddressToDomain": () => (/* binding */ resolveAzeroAddressToDomain),
/* harmony export */   "resolveAzeroDomainToAddress": () => (/* binding */ resolveAzeroDomainToAddress)
/* harmony export */ });
/* harmony import */ var _azns_resolver_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azns/resolver-core */ "../../node_modules/@azns/resolver-core/dist/index.js");
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0


const ENS_SUFFIX = '.eth';
const TZERO_ID_SUFFIX = '.tzero';
const AZERO_ID_SUFFIX = '.azero';
const SUPPORTED_DOMAIN_SUFFIX = [ENS_SUFFIX, TZERO_ID_SUFFIX, AZERO_ID_SUFFIX];
const CHAINS_SUPPORTED_DOMAIN = ['aleph', 'alephTest'];
const AZERO_DOMAIN_CONTRACTS = ['5FsB91tXSEuMj6akzdPczAtmBaVKToqHmtAwSUzXh49AYzaD', '5CTQBfBC9SfdrCDBJdfLiyW2pg9z5W6C6Es8sK313BLnFgDf'];
async function resolveAzeroDomainToAddress(domain, chain, api) {
  let chainId = _azns_resolver_core__WEBPACK_IMPORTED_MODULE_0__.SupportedChainId.AlephZero;
  if (chain === 'alephTest') {
    chainId = _azns_resolver_core__WEBPACK_IMPORTED_MODULE_0__.SupportedChainId.AlephZeroTestnet;
  }
  const primaryDomains = await (0,_azns_resolver_core__WEBPACK_IMPORTED_MODULE_0__.resolveDomainToAddress)(domain, {
    chainId,
    customApi: api
  });
  if (primaryDomains.error) {
    console.debug(primaryDomains.error);
  }
  return (primaryDomains === null || primaryDomains === void 0 ? void 0 : primaryDomains.address) || undefined;
}
async function resolveAzeroAddressToDomain(address, chain, api) {
  let chainId = _azns_resolver_core__WEBPACK_IMPORTED_MODULE_0__.SupportedChainId.AlephZero;
  if (chain === 'alephTest') {
    chainId = _azns_resolver_core__WEBPACK_IMPORTED_MODULE_0__.SupportedChainId.AlephZeroTestnet;
  }
  const primaryDomains = await (0,_azns_resolver_core__WEBPACK_IMPORTED_MODULE_0__.resolveAddressToDomain)(address, {
    chainId,
    customApi: api
  });
  if (primaryDomains.error) {
    console.debug(primaryDomains.error);
  }
  return (primaryDomains === null || primaryDomains === void 0 ? void 0 : primaryDomains.primaryDomain) || undefined;
}
function isAzeroDomain(input) {
  return input.includes(AZERO_ID_SUFFIX) || input.includes(TZERO_ID_SUFFIX);
}

/***/ }),

/***/ "../extension-base/src/koni/api/staking/bonding/astar.ts":
/*!***************************************************************!*\
  !*** ../extension-base/src/koni/api/staking/bonding/astar.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAstarBondingExtrinsic": () => (/* binding */ getAstarBondingExtrinsic),
/* harmony export */   "getAstarClaimRewardExtrinsic": () => (/* binding */ getAstarClaimRewardExtrinsic),
/* harmony export */   "getAstarDappsInfo": () => (/* binding */ getAstarDappsInfo),
/* harmony export */   "getAstarNominatorMetadata": () => (/* binding */ getAstarNominatorMetadata),
/* harmony export */   "getAstarStakingMetadata": () => (/* binding */ getAstarStakingMetadata),
/* harmony export */   "getAstarUnbondingExtrinsic": () => (/* binding */ getAstarUnbondingExtrinsic),
/* harmony export */   "getAstarWithdrawable": () => (/* binding */ getAstarWithdrawable),
/* harmony export */   "getAstarWithdrawalExtrinsic": () => (/* binding */ getAstarWithdrawalExtrinsic),
/* harmony export */   "subscribeAstarNominatorMetadata": () => (/* binding */ subscribeAstarNominatorMetadata),
/* harmony export */   "subscribeAstarStakingMetadata": () => (/* binding */ subscribeAstarStakingMetadata)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-base/koni/api/staking/bonding/utils */ "../extension-base/src/koni/api/staking/bonding/utils.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/constants */ "../extension-base/src/services/chain-service/constants.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "../../node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/consts.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/bn.js/lib/bn.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polkadot_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0








function subscribeAstarStakingMetadata(chain, substrateApi, callback) {
  return substrateApi.api.query.dappsStaking.currentEra(_currentEra => {
    const era = _currentEra.toString();
    const minDelegatorStake = substrateApi.api.consts.dappsStaking.minimumStakingAmount.toString();
    const unstakingDelay = substrateApi.api.consts.dappsStaking.unbondingPeriod.toString();
    const unstakingPeriod = parseInt(unstakingDelay) * _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._STAKING_ERA_LENGTH_MAP[chain];
    callback(chain, {
      chain,
      type: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingType.NOMINATED,
      era: parseInt(era),
      minStake: minDelegatorStake,
      maxValidatorPerNominator: 100,
      // temporary fix for Astar, there's no limit for now
      maxWithdrawalRequestPerValidator: 1,
      // by default
      allowCancelUnstaking: true,
      unstakingPeriod
    });
  });
}
async function getAstarStakingMetadata(chain, substrateApi) {
  const aprPromise = new Promise(function (resolve) {
    cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.astar.network/api/v1/${chain}/dapps-staking/apr`, {
      method: 'GET'
    }).then(resp => {
      resolve(resp.json());
    }).catch(console.error);
  });
  const timeout = new Promise(resolve => {
    const id = setTimeout(() => {
      clearTimeout(id);
      resolve(null);
    }, 8000);
  });
  const aprRacePromise = Promise.race([timeout, aprPromise]); // need race because API often timeout

  const [aprInfo, chainApi] = await Promise.all([aprRacePromise, substrateApi.isReady]);
  const era = (await chainApi.api.query.dappsStaking.currentEra()).toString();
  const minDelegatorStake = chainApi.api.consts.dappsStaking.minimumStakingAmount.toString();
  const unstakingDelay = chainApi.api.consts.dappsStaking.unbondingPeriod.toString();
  const unstakingPeriod = parseInt(unstakingDelay) * _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._STAKING_ERA_LENGTH_MAP[chain];
  return {
    chain,
    type: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingType.NOMINATED,
    expectedReturn: aprInfo !== null ? aprInfo : undefined,
    era: parseInt(era),
    minStake: minDelegatorStake,
    maxValidatorPerNominator: 100,
    // temporary fix for Astar, there's no limit for now
    maxWithdrawalRequestPerValidator: 1,
    // by default
    allowCancelUnstaking: true,
    unstakingPeriod
  };
}
async function subscribeAstarNominatorMetadata(chainInfo, address, substrateApi, ledger) {
  const nominationList = [];
  const unstakingList = [];
  const allDappsReq = new Promise(function (resolve) {
    cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.astar.network/api/v1/${chainInfo.slug}/dapps-staking/dapps`, {
      method: 'GET'
    }).then(resp => {
      resolve(resp.json());
    }).catch(console.error);
  });
  const [_allDapps, _era, _stakerInfo] = await Promise.all([allDappsReq, substrateApi.api.query.dappsStaking.currentEra(), substrateApi.api.query.dappsStaking.generalStakerInfo.entries(address)]);
  const currentEra = _era.toString();
  const minDelegatorStake = substrateApi.api.consts.dappsStaking.minimumStakingAmount.toString();
  const allDapps = _allDapps;
  let bnTotalActiveStake = _polkadot_util__WEBPACK_IMPORTED_MODULE_3__.BN_ZERO;
  if (_stakerInfo.length > 0) {
    const dAppInfoMap = {};
    allDapps.forEach(dappInfo => {
      dAppInfoMap[dappInfo.address.toLowerCase()] = dappInfo;
    });
    for (const item of _stakerInfo) {
      const data = item[0].toHuman();
      const stakedDapp = data[1];
      const stakeData = item[1].toPrimitive();
      const stakeList = stakeData.stakes;
      const dappAddress = stakedDapp.Evm ? stakedDapp.Evm.toLowerCase() : stakedDapp.Wasm;
      const currentStake = stakeList.slice(-1)[0].staked.toString() || '0';
      const bnCurrentStake = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(currentStake);
      if (bnCurrentStake.gt(_polkadot_util__WEBPACK_IMPORTED_MODULE_3__.BN_ZERO)) {
        const dappStakingStatus = bnCurrentStake.gt(_polkadot_util__WEBPACK_IMPORTED_MODULE_3__.BN_ZERO) && bnCurrentStake.gte(new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(minDelegatorStake)) ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingStatus.EARNING_REWARD : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingStatus.NOT_EARNING;
        bnTotalActiveStake = bnTotalActiveStake.add(bnCurrentStake);
        const dappInfo = dAppInfoMap[dappAddress];
        nominationList.push({
          status: dappStakingStatus,
          chain: chainInfo.slug,
          validatorAddress: dappAddress.toLowerCase(),
          activeStake: currentStake,
          validatorMinStake: '0',
          validatorIdentity: dappInfo === null || dappInfo === void 0 ? void 0 : dappInfo.name,
          hasUnstaking: false // cannot get unstaking info by dapp
        });
      }
    }
  }

  const unlockingChunks = ledger.unbondingInfo.unlockingChunks;
  if (unlockingChunks.length > 0) {
    for (const unlockingChunk of unlockingChunks) {
      const isClaimable = unlockingChunk.unlockEra - parseInt(currentEra) < 0;
      const remainingEra = unlockingChunk.unlockEra - parseInt(currentEra);
      const waitingTime = remainingEra * _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._STAKING_ERA_LENGTH_MAP[chainInfo.slug];
      unstakingList.push({
        chain: chainInfo.slug,
        status: isClaimable ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.UnstakingStatus.CLAIMABLE : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.UnstakingStatus.UNLOCKING,
        claimable: unlockingChunk.amount.toString(),
        waitingTime
      });
    }
  }
  if (nominationList.length === 0 && unstakingList.length === 0) {
    return {
      chain: chainInfo.slug,
      type: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingType.NOMINATED,
      address,
      status: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingStatus.NOT_STAKING,
      activeStake: '0',
      nominations: [],
      unstakings: []
    };
  }
  const stakingStatus = (0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_5__.getStakingStatusByNominations)(bnTotalActiveStake, nominationList);
  return {
    chain: chainInfo.slug,
    type: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingType.NOMINATED,
    address: address,
    activeStake: bnTotalActiveStake.toString(),
    nominations: nominationList,
    unstakings: unstakingList,
    status: stakingStatus
  };
}
async function getAstarNominatorMetadata(chainInfo, address, substrateApi) {
  if ((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(address)) {
    return;
  }
  const chain = chainInfo.slug;
  const chainApi = await substrateApi.isReady;
  const nominationList = [];
  const unstakingList = [];
  const allDappsReq = new Promise(function (resolve) {
    cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.astar.network/api/v1/${chain}/dapps-staking/dapps`, {
      method: 'GET'
    }).then(resp => {
      resolve(resp.json());
    }).catch(console.error);
  });
  const [_ledger, _era, _stakerInfo] = await Promise.all([chainApi.api.query.dappsStaking.ledger(address), chainApi.api.query.dappsStaking.currentEra(), chainApi.api.query.dappsStaking.generalStakerInfo.entries(address)]);
  const ledger = _ledger.toPrimitive();
  const currentEra = _era.toString();
  const minDelegatorStake = chainApi.api.consts.dappsStaking.minimumStakingAmount.toString();
  let bnTotalActiveStake = _polkadot_util__WEBPACK_IMPORTED_MODULE_3__.BN_ZERO;
  if (_stakerInfo.length > 0) {
    const dAppInfoMap = {};
    const allDapps = await allDappsReq;
    allDapps.forEach(dappInfo => {
      const address = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(dappInfo.address) ? dappInfo.address.toLowerCase() : dappInfo.address;
      dAppInfoMap[address] = dappInfo;
    });
    for (const item of _stakerInfo) {
      const data = item[0].toHuman();
      const stakedDapp = data[1];
      const stakeData = item[1].toPrimitive();
      const stakeList = stakeData.stakes;
      const dappAddress = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(stakedDapp.Evm) ? stakedDapp.Evm.toLowerCase() : stakedDapp.Evm;
      const currentStake = stakeList.slice(-1)[0].staked.toString() || '0';
      const bnCurrentStake = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(currentStake);
      if (bnCurrentStake.gt(_polkadot_util__WEBPACK_IMPORTED_MODULE_3__.BN_ZERO)) {
        const dappStakingStatus = bnCurrentStake.gt(_polkadot_util__WEBPACK_IMPORTED_MODULE_3__.BN_ZERO) && bnCurrentStake.gte(new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(minDelegatorStake)) ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingStatus.EARNING_REWARD : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingStatus.NOT_EARNING;
        bnTotalActiveStake = bnTotalActiveStake.add(bnCurrentStake);
        const dappInfo = dAppInfoMap[dappAddress];
        nominationList.push({
          status: dappStakingStatus,
          chain,
          validatorAddress: dappAddress,
          activeStake: currentStake,
          validatorMinStake: '0',
          validatorIdentity: dappInfo === null || dappInfo === void 0 ? void 0 : dappInfo.name,
          hasUnstaking: false // cannot get unstaking info by dapp
        });
      }
    }
  }

  const unlockingChunks = ledger.unbondingInfo.unlockingChunks;
  if (unlockingChunks.length > 0) {
    for (const unlockingChunk of unlockingChunks) {
      const isClaimable = unlockingChunk.unlockEra - parseInt(currentEra) < 0;
      const remainingEra = unlockingChunk.unlockEra - parseInt(currentEra);
      const waitingTime = remainingEra * _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._STAKING_ERA_LENGTH_MAP[chain];
      unstakingList.push({
        chain,
        status: isClaimable ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.UnstakingStatus.CLAIMABLE : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.UnstakingStatus.UNLOCKING,
        claimable: unlockingChunk.amount.toString(),
        waitingTime
      });
    }
  }
  if (nominationList.length === 0 && unstakingList.length === 0) {
    return {
      chain: chainInfo.slug,
      type: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingType.NOMINATED,
      address,
      status: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingStatus.NOT_STAKING,
      activeStake: '0',
      nominations: [],
      unstakings: []
    };
  }
  const stakingStatus = (0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_5__.getStakingStatusByNominations)(bnTotalActiveStake, nominationList);
  return {
    chain,
    type: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.StakingType.NOMINATED,
    address: address,
    activeStake: bnTotalActiveStake.toString(),
    nominations: nominationList,
    unstakings: unstakingList,
    status: stakingStatus
  };
}
async function getAstarDappsInfo(networkKey, substrateApi) {
  const chainApi = await substrateApi.isReady;
  const rawMaxStakerPerContract = chainApi.api.consts.dappsStaking.maxNumberOfStakersPerContract.toHuman();
  const allDappsInfo = [];
  const maxStakerPerContract = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.parseRawNumber)(rawMaxStakerPerContract);
  const allDappsReq = new Promise(function (resolve) {
    cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.astar.network/api/v1/${networkKey}/dapps-staking/dapps`, {
      method: 'GET'
    }).then(resp => {
      resolve(resp.json());
    }).catch(console.error);
  });
  const [_era, _allDapps] = await Promise.all([chainApi.api.query.dappsStaking.currentEra(), allDappsReq]);
  const era = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.parseRawNumber)(_era.toHuman());
  const allDapps = _allDapps;
  await Promise.all(allDapps.map(async dapp => {
    const dappName = dapp.name;
    const dappAddress = dapp.address;
    const dappIcon = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.isUrl)(dapp.iconUrl) ? dapp.iconUrl : undefined;
    const contractParam = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(dappAddress) ? {
      Evm: dappAddress
    } : {
      Wasm: dappAddress
    };
    const _contractInfo = await chainApi.api.query.dappsStaking.contractEraStake(contractParam, era);
    const contractInfo = _contractInfo.toPrimitive();
    let totalStake = '0';
    let stakerCount = 0;
    if (contractInfo !== null) {
      var _contractInfo$total;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      totalStake = contractInfo === null || contractInfo === void 0 ? void 0 : (_contractInfo$total = contractInfo.total) === null || _contractInfo$total === void 0 ? void 0 : _contractInfo$total.toString();
      stakerCount = contractInfo.numberOfStakers;
    }
    allDappsInfo.push({
      commission: 0,
      expectedReturn: 0,
      address: (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(dappAddress) ? dappAddress.toLowerCase() : dappAddress,
      totalStake: totalStake,
      ownStake: '0',
      otherStake: totalStake.toString(),
      nominatorCount: stakerCount,
      blocked: false,
      isVerified: false,
      minBond: '0',
      icon: dappIcon,
      identity: dappName,
      chain: networkKey,
      isCrowded: stakerCount >= maxStakerPerContract
    });
  }));
  return allDappsInfo;
}
async function getAstarBondingExtrinsic(substrateApi, amount, dappInfo) {
  const chainApi = await substrateApi.isReady;
  const binaryAmount = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(amount);
  const dappParam = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(dappInfo.address) ? {
    Evm: dappInfo.address
  } : {
    Wasm: dappInfo.address
  };
  return chainApi.api.tx.dappsStaking.bondAndStake(dappParam, binaryAmount);
}
async function getAstarUnbondingExtrinsic(substrateApi, amount, dappAddress) {
  const apiPromise = await substrateApi.isReady;
  const binaryAmount = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(amount);
  const dappParam = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(dappAddress) ? {
    Evm: dappAddress
  } : {
    Wasm: dappAddress
  };
  return apiPromise.api.tx.dappsStaking.unbondAndUnstake(dappParam, binaryAmount);
}
async function getAstarWithdrawalExtrinsic(substrateApi) {
  const chainApi = await substrateApi.isReady;
  return chainApi.api.tx.dappsStaking.withdrawUnbonded();
}
async function getAstarClaimRewardExtrinsic(substrateApi, address) {
  const apiPromise = await substrateApi.isReady;
  const [_stakedDapps, _currentEra] = await Promise.all([apiPromise.api.query.dappsStaking.generalStakerInfo.entries(address), apiPromise.api.query.dappsStaking.currentEra()]);
  const currentEra = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.parseRawNumber)(_currentEra.toHuman());
  const transactions = [];
  for (const item of _stakedDapps) {
    const data = item[0].toHuman();
    const stakedDapp = data[1];
    const stakeData = item[1].toHuman();
    const stakes = stakeData.stakes;
    const dappAddress = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(stakedDapp.Evm) ? stakedDapp.Evm.toLowerCase() : stakedDapp.Evm;
    let numberOfUnclaimedEra = 0;
    const maxTx = 50;
    for (let i = 0; i < stakes.length; i++) {
      var _stakes;
      const {
        era,
        staked
      } = stakes[i];
      const bnStaked = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(staked.replaceAll(',', ''));
      const parsedEra = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.parseRawNumber)(era);
      if (bnStaked.eq(new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(0))) {
        continue;
      }
      const nextEraData = (_stakes = stakes[i + 1]) !== null && _stakes !== void 0 ? _stakes : null;
      const nextEra = nextEraData && (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.parseRawNumber)(nextEraData.era);
      const isLastEra = i === stakes.length - 1;
      const eraToClaim = isLastEra ? currentEra - parsedEra : nextEra - parsedEra;
      numberOfUnclaimedEra += eraToClaim;
    }
    const dappParam = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.isEthereumAddress)(dappAddress) ? {
      Evm: dappAddress
    } : {
      Wasm: dappAddress
    };
    for (let i = 0; i < Math.min(numberOfUnclaimedEra, maxTx); i++) {
      const tx = apiPromise.api.tx.dappsStaking.claimStaker(dappParam);
      transactions.push(tx);
    }
  }
  return apiPromise.api.tx.utility.batch(transactions);
}
function getAstarWithdrawable(nominatorMetadata) {
  const unstakingInfo = {
    chain: nominatorMetadata.chain,
    status: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.UnstakingStatus.CLAIMABLE,
    claimable: '0',
    waitingTime: 0
  };
  let bnWithdrawable = _polkadot_util__WEBPACK_IMPORTED_MODULE_3__.BN_ZERO;
  for (const unstaking of nominatorMetadata.unstakings) {
    if (unstaking.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_2__.UnstakingStatus.CLAIMABLE) {
      bnWithdrawable = bnWithdrawable.add(new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(unstaking.claimable));
    }
  }
  unstakingInfo.claimable = bnWithdrawable.toString();
  return unstakingInfo;
}

/***/ }),

/***/ "../extension-base/src/koni/api/staking/bonding/utils.ts":
/*!***************************************************************!*\
  !*** ../extension-base/src/koni/api/staking/bonding/utils.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PalletParachainStakingRequestType": () => (/* binding */ PalletParachainStakingRequestType),
/* harmony export */   "StakingAction": () => (/* binding */ StakingAction),
/* harmony export */   "calcInflationRewardCurve": () => (/* binding */ calcInflationRewardCurve),
/* harmony export */   "calcInflationUniformEraPayout": () => (/* binding */ calcInflationUniformEraPayout),
/* harmony export */   "calculateAlephZeroValidatorReturn": () => (/* binding */ calculateAlephZeroValidatorReturn),
/* harmony export */   "calculateChainStakedReturn": () => (/* binding */ calculateChainStakedReturn),
/* harmony export */   "calculateInflation": () => (/* binding */ calculateInflation),
/* harmony export */   "calculateTernoaValidatorReturn": () => (/* binding */ calculateTernoaValidatorReturn),
/* harmony export */   "calculateValidatorStakedReturn": () => (/* binding */ calculateValidatorStakedReturn),
/* harmony export */   "getBondedValidators": () => (/* binding */ getBondedValidators),
/* harmony export */   "getCommission": () => (/* binding */ getCommission),
/* harmony export */   "getExistUnstakeErrorMessage": () => (/* binding */ getExistUnstakeErrorMessage),
/* harmony export */   "getInflationParams": () => (/* binding */ getInflationParams),
/* harmony export */   "getMaxValidatorErrorMessage": () => (/* binding */ getMaxValidatorErrorMessage),
/* harmony export */   "getMinStakeErrorMessage": () => (/* binding */ getMinStakeErrorMessage),
/* harmony export */   "getParaCurrentInflation": () => (/* binding */ getParaCurrentInflation),
/* harmony export */   "getStakingAvailableActionsByChain": () => (/* binding */ getStakingAvailableActionsByChain),
/* harmony export */   "getStakingAvailableActionsByNominator": () => (/* binding */ getStakingAvailableActionsByNominator),
/* harmony export */   "getStakingStatusByNominations": () => (/* binding */ getStakingStatusByNominations),
/* harmony export */   "getValidatorLabel": () => (/* binding */ getValidatorLabel),
/* harmony export */   "getWithdrawalInfo": () => (/* binding */ getWithdrawalInfo),
/* harmony export */   "isActionFromValidator": () => (/* binding */ isActionFromValidator),
/* harmony export */   "isShowNominationByValidator": () => (/* binding */ isShowNominationByValidator),
/* harmony export */   "isUnstakeAll": () => (/* binding */ isUnstakeAll),
/* harmony export */   "parseIdentity": () => (/* binding */ parseIdentity),
/* harmony export */   "parsePoolStashAddress": () => (/* binding */ parsePoolStashAddress),
/* harmony export */   "transformPoolName": () => (/* binding */ transformPoolName)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_koni_api_staking_bonding_astar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-base/koni/api/staking/bonding/astar */ "../extension-base/src/koni/api/staking/bonding/astar.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/constants */ "../extension-base/src/services/chain-service/constants.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
/* harmony import */ var _subwallet_extension_base_utils_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-base/utils/number */ "../extension-base/src/utils/number.ts");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "../../node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/string/toU8a.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/u8a/concat.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/toU8a.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/bn.js/lib/bn.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polkadot_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/consts.js");
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0









let PalletParachainStakingRequestType;
(function (PalletParachainStakingRequestType) {
  PalletParachainStakingRequestType["REVOKE"] = "revoke";
  PalletParachainStakingRequestType["DECREASE"] = "decrease";
  PalletParachainStakingRequestType["BOND_LESS"] = "bondLess";
})(PalletParachainStakingRequestType || (PalletParachainStakingRequestType = {}));
function parsePoolStashAddress(api, index, poolId, poolsPalletId) {
  const ModPrefix = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.stringToU8a)('modl');
  const U32Opts = {
    bitLength: 32,
    isLe: true
  };
  const EmptyH256 = new Uint8Array(32);
  return api.registry.createType('AccountId32', (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.u8aConcat)(ModPrefix, poolsPalletId, new Uint8Array([index]), (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_3__.bnToU8a)(new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(poolId.toString()), U32Opts), EmptyH256)).toString();
}
function transformPoolName(input) {
  return input.replace(/[^\x20-\x7E]/g, '');
}
function parseIdentity(identityInfo) {
  let identity;
  if (identityInfo) {
    var _identityInfo$info, _identityInfo$info$di, _identityInfo$info2, _identityInfo$info2$w, _identityInfo$info3, _identityInfo$info3$r, _identityInfo$info4, _identityInfo$info4$t;
    const displayName = identityInfo === null || identityInfo === void 0 ? void 0 : (_identityInfo$info = identityInfo.info) === null || _identityInfo$info === void 0 ? void 0 : (_identityInfo$info$di = _identityInfo$info.display) === null || _identityInfo$info$di === void 0 ? void 0 : _identityInfo$info$di.Raw;
    const web = identityInfo === null || identityInfo === void 0 ? void 0 : (_identityInfo$info2 = identityInfo.info) === null || _identityInfo$info2 === void 0 ? void 0 : (_identityInfo$info2$w = _identityInfo$info2.web) === null || _identityInfo$info2$w === void 0 ? void 0 : _identityInfo$info2$w.Raw;
    const riot = identityInfo === null || identityInfo === void 0 ? void 0 : (_identityInfo$info3 = identityInfo.info) === null || _identityInfo$info3 === void 0 ? void 0 : (_identityInfo$info3$r = _identityInfo$info3.riot) === null || _identityInfo$info3$r === void 0 ? void 0 : _identityInfo$info3$r.Raw;
    const twitter = identityInfo === null || identityInfo === void 0 ? void 0 : (_identityInfo$info4 = identityInfo.info) === null || _identityInfo$info4 === void 0 ? void 0 : (_identityInfo$info4$t = _identityInfo$info4.twitter) === null || _identityInfo$info4$t === void 0 ? void 0 : _identityInfo$info4$t.Raw;
    if (displayName && !displayName.startsWith('0x')) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      identity = displayName;
    } else {
      identity = twitter || web || riot;
    }
  }
  return identity;
}
function getInflationParams(networkKey) {
  return _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._KNOWN_CHAIN_INFLATION_PARAMS[networkKey] || _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._SUBSTRATE_DEFAULT_INFLATION_PARAMS;
}
function calcInflationUniformEraPayout(totalIssuance, yearlyInflationInTokens) {
  const totalIssuanceInTokens = totalIssuance.div(_polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_BILLION).div(_polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_THOUSAND).toNumber();
  return totalIssuanceInTokens === 0 ? 0.0 : yearlyInflationInTokens / totalIssuanceInTokens;
}
function calcInflationRewardCurve(minInflation, stakedFraction, idealStake, idealInterest, falloff) {
  return minInflation + (stakedFraction <= idealStake ? stakedFraction * (idealInterest - minInflation / idealStake) : (idealInterest * idealStake - minInflation) * Math.pow(2, (idealStake - stakedFraction) / falloff));
}
function calculateInflation(totalEraStake, totalIssuance, numAuctions, networkKey) {
  const inflationParams = getInflationParams(networkKey);
  const {
    auctionAdjust,
    auctionMax,
    falloff,
    maxInflation,
    minInflation,
    stakeTarget
  } = inflationParams;
  const idealStake = stakeTarget - Math.min(auctionMax, numAuctions) * auctionAdjust;
  const idealInterest = maxInflation / idealStake;
  const stakedFraction = totalEraStake.mul(_polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_MILLION).div(totalIssuance).toNumber() / _polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_MILLION.toNumber();
  if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.aleph.includes(networkKey)) {
    if (inflationParams.yearlyInflationInTokens) {
      return 100 * calcInflationUniformEraPayout(totalIssuance, inflationParams.yearlyInflationInTokens);
    } else {
      return 100 * calcInflationRewardCurve(minInflation, stakedFraction, idealStake, idealInterest, falloff);
    }
  } else {
    return 100 * (minInflation + (stakedFraction <= idealStake ? stakedFraction * (idealInterest - minInflation / idealStake) : (idealInterest * idealStake - minInflation) * Math.pow(2, (idealStake - stakedFraction) / falloff)));
  }
}
function calculateChainStakedReturn(inflation, totalEraStake, totalIssuance, networkKey) {
  const stakedFraction = totalEraStake.mul(_polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_MILLION).div(totalIssuance).toNumber() / _polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_MILLION.toNumber();
  let stakedReturn = inflation / stakedFraction;
  if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.aleph.includes(networkKey)) {
    stakedReturn *= 0.9; // 10% goes to treasury
  }

  return stakedReturn;
}
function calculateAlephZeroValidatorReturn(chainStakedReturn, commission) {
  return chainStakedReturn * (100 - commission) / 100;
}
function calculateTernoaValidatorReturn(rewardPerValidator, validatorStake, commission) {
  const percentRewardForNominators = (100 - commission) / 100;
  const rewardForNominators = rewardPerValidator * percentRewardForNominators;
  const stakeRatio = rewardForNominators / validatorStake;
  return stakeRatio * 365 * 100;
}
function calculateValidatorStakedReturn(chainStakedReturn, totalValidatorStake, avgStake, commission) {
  const bnAdjusted = avgStake.mul(_polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_HUNDRED).div(totalValidatorStake);
  const adjusted = bnAdjusted.toNumber() * chainStakedReturn;
  const stakedReturn = (adjusted > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : adjusted) / 100;
  return stakedReturn * (100 - commission) / 100; // Deduct commission
}

function getCommission(commissionString) {
  return parseFloat(commissionString.split('%')[0]); // Example: 12%
}

function getParaCurrentInflation(totalStaked, inflationConfig) {
  // read more at https://hackmd.io/@sbAqOuXkRvyiZPOB3Ryn6Q/Sypr3ZJh5
  const expectMin = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.parseRawNumber)(inflationConfig.expect.min);
  const expectMax = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.parseRawNumber)(inflationConfig.expect.max);
  if (totalStaked < expectMin) {
    const inflationString = inflationConfig.annual.min.split('%')[0];
    return parseFloat(inflationString);
  } else if (totalStaked > expectMax) {
    const inflationString = inflationConfig.annual.max.split('%')[0];
    return parseFloat(inflationString);
  }
  const inflationString = inflationConfig.annual.ideal.split('%')[0];
  return parseFloat(inflationString);
}
// validations and check conditions
function isShowNominationByValidator(chain) {
  if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.amplitude.includes(chain)) {
    return 'showByValue';
  } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.astar.includes(chain)) {
    return 'mixed';
  } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.para.includes(chain)) {
    return 'showByValidator';
  }
  return 'showByValue';
}
function getBondedValidators(nominations) {
  const bondedValidators = [];
  let nominationCount = 0;
  for (const nomination of nominations) {
    nominationCount += 1;
    bondedValidators.push((0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.reformatAddress)(nomination.validatorAddress, 0));
  }
  return {
    nominationCount,
    bondedValidators
  };
}
function isUnstakeAll(selectedValidator, nominations, unstakeAmount) {
  let isUnstakeAll = false;
  for (const nomination of nominations) {
    const parsedValidatorAddress = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.reformatAddress)(nomination.validatorAddress, 0);
    const parsedSelectedValidator = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_7__.reformatAddress)(selectedValidator, 0);
    if (parsedValidatorAddress === parsedSelectedValidator) {
      if (unstakeAmount === nomination.activeStake) {
        isUnstakeAll = true;
      }
      break;
    }
  }
  return isUnstakeAll;
}
let StakingAction;
(function (StakingAction) {
  StakingAction["STAKE"] = "STAKE";
  StakingAction["UNSTAKE"] = "UNSTAKE";
  StakingAction["WITHDRAW"] = "WITHDRAW";
  StakingAction["CLAIM_REWARD"] = "CLAIM_REWARD";
  StakingAction["CANCEL_UNSTAKE"] = "CANCEL_UNSTAKE";
})(StakingAction || (StakingAction = {}));
function getStakingAvailableActionsByChain(chain, type) {
  if (type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.StakingType.POOLED) {
    return [StakingAction.STAKE, StakingAction.UNSTAKE, StakingAction.WITHDRAW, StakingAction.CLAIM_REWARD];
  }
  if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.para.includes(chain)) {
    return [StakingAction.STAKE, StakingAction.UNSTAKE, StakingAction.WITHDRAW, StakingAction.CANCEL_UNSTAKE];
  } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.astar.includes(chain)) {
    return [StakingAction.STAKE, StakingAction.UNSTAKE, StakingAction.WITHDRAW, StakingAction.CLAIM_REWARD];
  } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.amplitude.includes(chain)) {
    return [StakingAction.STAKE, StakingAction.UNSTAKE, StakingAction.WITHDRAW];
  }
  return [StakingAction.STAKE, StakingAction.UNSTAKE, StakingAction.WITHDRAW, StakingAction.CANCEL_UNSTAKE];
}
function getStakingAvailableActionsByNominator(nominatorMetadata, unclaimedReward) {
  const result = [StakingAction.STAKE];
  const bnActiveStake = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(nominatorMetadata.activeStake);
  if (nominatorMetadata.activeStake && bnActiveStake.gt(_polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_ZERO)) {
    result.push(StakingAction.UNSTAKE);
    const isAstarNetwork = _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.astar.includes(nominatorMetadata.chain);
    const isAmplitudeNetwork = _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.amplitude.includes(nominatorMetadata.chain);
    const bnUnclaimedReward = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_4___default())(unclaimedReward || '0');
    if ((nominatorMetadata.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.StakingType.POOLED || isAmplitudeNetwork) && bnUnclaimedReward.gt(_polkadot_util__WEBPACK_IMPORTED_MODULE_6__.BN_ZERO) || isAstarNetwork) {
      result.push(StakingAction.CLAIM_REWARD);
    }
  }
  if (nominatorMetadata.unstakings.length > 0) {
    result.push(StakingAction.CANCEL_UNSTAKE);
    const hasClaimable = nominatorMetadata.unstakings.some(unstaking => unstaking.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.UnstakingStatus.CLAIMABLE);
    if (hasClaimable) {
      result.push(StakingAction.WITHDRAW);
    }
  }
  return result;
}
function isActionFromValidator(stakingType, chain) {
  if (stakingType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.StakingType.POOLED) {
    return false;
  }
  if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.astar.includes(chain)) {
    return true;
  } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.amplitude.includes(chain)) {
    return true;
  } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.para.includes(chain)) {
    return true;
  }
  return false;
}
function getWithdrawalInfo(nominatorMetadata) {
  const unstakings = nominatorMetadata.unstakings;
  let result;
  if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.astar.includes(nominatorMetadata.chain)) {
    return (0,_subwallet_extension_base_koni_api_staking_bonding_astar__WEBPACK_IMPORTED_MODULE_9__.getAstarWithdrawable)(nominatorMetadata);
  }
  for (const unstaking of unstakings) {
    if (unstaking.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.UnstakingStatus.CLAIMABLE) {
      result = unstaking; // only get the first withdrawal
      break;
    }
  }
  return result;
}
function getStakingStatusByNominations(bnTotalActiveStake, nominationList) {
  let stakingStatus = _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.StakingStatus.EARNING_REWARD;
  if (bnTotalActiveStake.isZero()) {
    stakingStatus = _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.StakingStatus.NOT_EARNING;
  } else {
    let invalidDelegationCount = 0;
    for (const nomination of nominationList) {
      if (nomination.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.StakingStatus.NOT_EARNING) {
        invalidDelegationCount += 1;
      }
    }
    if (invalidDelegationCount > 0 && invalidDelegationCount < nominationList.length) {
      stakingStatus = _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.StakingStatus.PARTIALLY_EARNING;
    } else if (invalidDelegationCount === nominationList.length) {
      stakingStatus = _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_8__.StakingStatus.NOT_EARNING;
    }
  }
  return stakingStatus;
}
function getValidatorLabel(chain) {
  if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.astar.includes(chain)) {
    return 'dApp';
  } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_5__._STAKING_CHAIN_GROUP.relay.includes(chain)) {
    return 'Validator';
  }
  return 'Collator';
}
const getMinStakeErrorMessage = (chainInfo, bnMinStake) => {
  const tokenInfo = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_10__._getChainNativeTokenBasicInfo)(chainInfo);
  const number = (0,_subwallet_extension_base_utils_number__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(bnMinStake.toString(), tokenInfo.decimals || 0, _subwallet_extension_base_utils_number__WEBPACK_IMPORTED_MODULE_11__.balanceFormatter);
  return (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)('Insufficient stake. Please stake at least {{number}} {{tokenSymbol}} to get rewards', {
    replace: {
      tokenSymbol: tokenInfo.symbol,
      number
    }
  });
};
const getMaxValidatorErrorMessage = (chainInfo, max) => {
  let message = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.detectTranslate)('You cannot select more than {{number}} validators for this network');
  const label = getValidatorLabel(chainInfo.slug);
  if (max > 1) {
    switch (label) {
      case 'dApp':
        message = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.detectTranslate)('You cannot select more than {{number}} dApps for this network');
        break;
      case 'Collator':
        message = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.detectTranslate)('You cannot select more than {{number}} collators for this network');
        break;
      case 'Validator':
        message = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.detectTranslate)('You cannot select more than {{number}} validators for this network');
        break;
    }
  } else {
    switch (label) {
      case 'dApp':
        message = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.detectTranslate)('You cannot select more than {{number}} dApp for this network');
        break;
      case 'Collator':
        message = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.detectTranslate)('You cannot select more than {{number}} collator for this network');
        break;
      case 'Validator':
        message = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.detectTranslate)('You cannot select more than {{number}} validator for this network');
        break;
    }
  }
  return (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)(message, {
    replace: {
      number: max
    }
  });
};
const getExistUnstakeErrorMessage = (chain, isStakeMore) => {
  const label = getValidatorLabel(chain);
  if (!isStakeMore) {
    switch (label) {
      case 'dApp':
        return (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)('You can unstake from a dApp once');
      case 'Collator':
        return (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)('You can unstake from a collator once');
      case 'Validator':
        return (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)('You can unstake from a validator once');
    }
  } else {
    switch (label) {
      case 'dApp':
        return (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)('You cannot stake more for a dApp you are unstaking from');
      case 'Collator':
        return (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)('You cannot stake more for a collator you are unstaking from');
      case 'Validator':
        return (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)('You cannot stake more for a validator you are unstaking from');
    }
  }
};

/***/ }),

/***/ "../extension-base/src/services/chain-service/constants.ts":
/*!*****************************************************************!*\
  !*** ../extension-base/src/services/chain-service/constants.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_AUTO_CONNECT_MS": () => (/* binding */ API_AUTO_CONNECT_MS),
/* harmony export */   "API_CONNECT_TIMEOUT": () => (/* binding */ API_CONNECT_TIMEOUT),
/* harmony export */   "API_MAX_RETRY": () => (/* binding */ API_MAX_RETRY),
/* harmony export */   "EVM_PASS_CONNECT_STATUS": () => (/* binding */ EVM_PASS_CONNECT_STATUS),
/* harmony export */   "EVM_REFORMAT_DECIMALS": () => (/* binding */ EVM_REFORMAT_DECIMALS),
/* harmony export */   "_API_OPTIONS_CHAIN_GROUP": () => (/* binding */ _API_OPTIONS_CHAIN_GROUP),
/* harmony export */   "_ASSET_LOGO_MAP_SRC": () => (/* binding */ _ASSET_LOGO_MAP_SRC),
/* harmony export */   "_ASSET_REF_SRC": () => (/* binding */ _ASSET_REF_SRC),
/* harmony export */   "_BALANCE_CHAIN_GROUP": () => (/* binding */ _BALANCE_CHAIN_GROUP),
/* harmony export */   "_BALANCE_PARSING_CHAIN_GROUP": () => (/* binding */ _BALANCE_PARSING_CHAIN_GROUP),
/* harmony export */   "_BALANCE_TOKEN_GROUP": () => (/* binding */ _BALANCE_TOKEN_GROUP),
/* harmony export */   "_CHAIN_ASSET_SRC": () => (/* binding */ _CHAIN_ASSET_SRC),
/* harmony export */   "_CHAIN_INFO_SRC": () => (/* binding */ _CHAIN_INFO_SRC),
/* harmony export */   "_CHAIN_LOGO_MAP_SRC": () => (/* binding */ _CHAIN_LOGO_MAP_SRC),
/* harmony export */   "_DEFAULT_ACTIVE_CHAINS": () => (/* binding */ _DEFAULT_ACTIVE_CHAINS),
/* harmony export */   "_DEFAULT_MANTA_ZK_CHAIN": () => (/* binding */ _DEFAULT_MANTA_ZK_CHAIN),
/* harmony export */   "_KNOWN_CHAIN_INFLATION_PARAMS": () => (/* binding */ _KNOWN_CHAIN_INFLATION_PARAMS),
/* harmony export */   "_MANTA_ZK_CHAIN_GROUP": () => (/* binding */ _MANTA_ZK_CHAIN_GROUP),
/* harmony export */   "_MULTI_CHAIN_ASSET_SRC": () => (/* binding */ _MULTI_CHAIN_ASSET_SRC),
/* harmony export */   "_NFT_CHAIN_GROUP": () => (/* binding */ _NFT_CHAIN_GROUP),
/* harmony export */   "_PARACHAIN_INFLATION_DISTRIBUTION": () => (/* binding */ _PARACHAIN_INFLATION_DISTRIBUTION),
/* harmony export */   "_PREDEFINED_SINGLE_MODES": () => (/* binding */ _PREDEFINED_SINGLE_MODES),
/* harmony export */   "_PURE_EVM_CHAINS": () => (/* binding */ _PURE_EVM_CHAINS),
/* harmony export */   "_STAKING_CHAIN_GROUP": () => (/* binding */ _STAKING_CHAIN_GROUP),
/* harmony export */   "_STAKING_ERA_LENGTH_MAP": () => (/* binding */ _STAKING_ERA_LENGTH_MAP),
/* harmony export */   "_SUBSTRATE_DEFAULT_INFLATION_PARAMS": () => (/* binding */ _SUBSTRATE_DEFAULT_INFLATION_PARAMS),
/* harmony export */   "_TRANSFER_CHAIN_GROUP": () => (/* binding */ _TRANSFER_CHAIN_GROUP),
/* harmony export */   "_TRANSFER_NOT_SUPPORTED_CHAINS": () => (/* binding */ _TRANSFER_NOT_SUPPORTED_CHAINS),
/* harmony export */   "_XCM_CHAIN_GROUP": () => (/* binding */ _XCM_CHAIN_GROUP),
/* harmony export */   "_XCM_TYPE": () => (/* binding */ _XCM_TYPE),
/* harmony export */   "_ZK_ASSET_PREFIX": () => (/* binding */ _ZK_ASSET_PREFIX)
/* harmony export */ });
/* harmony import */ var _subwallet_chain_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/chain-list */ "../../node_modules/@subwallet/chain-list/index.js");
/* harmony import */ var _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/chain-list/types */ "../../node_modules/@subwallet/chain-list/types.js");
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0




const API_AUTO_CONNECT_MS = 3000;
const API_CONNECT_TIMEOUT = 30000;
const API_MAX_RETRY = 2;
const _API_OPTIONS_CHAIN_GROUP = {
  acala: ['acala', 'karura', 'origintrail', 'kintsugi'],
  turing: ['turingStaging', 'turing'],
  avail: ['kate']
};
const _PREDEFINED_SINGLE_MODES = {
  subspace: {
    networkKeys: ['subspace_gemini_2a', 'subspace_test', 'subspace_gemini_3a'],
    theme: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.ThemeNames.SUBSPACE,
    autoTriggerDomain: 'subspace.network'
  }
};
const _PURE_EVM_CHAINS = ['binance', 'binance_test', 'ethereum', 'ethereum_goerli', 'astarEvm', 'shidenEvm', 'shibuyaEvm', 'crabEvm', 'pangolinEvm', 'cloverEvm', 'boba_rinkeby', 'boba', 'bobabase', 'bobabeam', 'watr_network_evm'];

// Get balance----------------------------------------------------------------------------------------------------------

const _BALANCE_CHAIN_GROUP = {
  kintsugi: ['kintsugi', 'interlay', 'kintsugi_test', 'mangatax_para'],
  genshiro: ['genshiro_testnet', 'genshiro'],
  equilibrium_parachain: ['equilibrium_parachain'],
  bifrost: ['bifrost', 'acala', 'karura', 'acala_testnet', 'pioneer', 'bitcountry', 'bifrost_dot', 'hydradx_main', 'pendulum', 'amplitude'],
  statemine: ['statemine', 'astar', 'shiden', 'statemint', 'moonbeam', 'moonbase', 'moonriver', 'crabParachain', 'darwinia2', 'parallel', 'calamari'],
  kusama: ['kusama', 'kintsugi', 'kintsugi_test', 'interlay', 'acala', 'statemint', 'karura', 'bifrost'] // perhaps there are some runtime updates
};

const _BALANCE_TOKEN_GROUP = {
  crab: ['CKTON', 'PKTON'],
  bitcountry: ['BIT']
};
const _NFT_CHAIN_GROUP = {
  acala: ['acala'],
  karura: ['karura'],
  // TODO: karura and acala should be the same
  rmrk: ['kusama'],
  statemine: ['statemine'],
  statemint: ['statemint'],
  unique_network: ['unique_network'],
  bitcountry: ['bitcountry', 'pioneer'],
  vara: ['vara_network']
};

// Staking--------------------------------------------------------------------------------------------------------------

const _STAKING_CHAIN_GROUP = {
  relay: ['polkadot', 'kusama', 'aleph', 'polkadex', 'ternoa', 'ternoa_alphanet', 'alephTest', 'polkadexTest', 'westend', 'kate', 'edgeware', 'creditcoin', 'vara_network'],
  para: ['moonbeam', 'moonriver', 'moonbase', 'turing', 'turingStaging', 'bifrost', 'bifrost_testnet', 'calamari_test', 'calamari'],
  astar: ['astar', 'shiden', 'shibuya'],
  amplitude: ['amplitude', 'amplitude_test', 'kilt', 'kilt_peregrine', 'pendulum'],
  // amplitude and kilt only share some common logic
  kilt: ['kilt', 'kilt_peregrine'],
  nominationPool: ['polkadot', 'kusama', 'westend', 'alephTest', 'aleph', 'kate'],
  bifrost: ['bifrost', 'bifrost_testnet'],
  aleph: ['aleph', 'alephTest'],
  // A0 has distinct tokenomics
  ternoa: ['ternoa', 'ternoa_alphanet']
};
const _STAKING_ERA_LENGTH_MAP = {
  // in hours
  alephTest: 24,
  aleph: 24,
  polkadot: 24,
  kusama: 6,
  westend: 6,
  hydradx: 24,
  default: 24,
  moonbeam: 6,
  moonriver: 2,
  moonbase: 2,
  turing: 2,
  turingStaging: 2,
  astar: 24,
  shiden: 24,
  shibuya: 24,
  bifrost_testnet: 0.5,
  bifrost: 2,
  ternoa: 24,
  calamari: 6,
  calamari_test: 6,
  amplitude: 2,
  amplitude_test: 2,
  pendulum: 2,
  kilt: 2,
  kilt_peregrine: 2,
  edgeware: 6,
  kate: 6,
  creditcoin: 24,
  vara_network: 12
};
const _PARACHAIN_INFLATION_DISTRIBUTION = {
  moonbeam: {
    // https://docs.moonbeam.network/learn/features/staking/#annual-inflation
    reward: 0.5,
    collatorCommission: 0.2,
    bondReserve: 0.3
  },
  moonriver: {
    reward: 0.5,
    collatorCommission: 0.2,
    bondReserve: 0.3
  },
  moonbase: {
    reward: 0.5,
    collatorCommission: 0.2,
    bondReserve: 0.3
  },
  turing: {
    // https://docs.oak.tech/docs/delegators/
    reward: 0.5
  },
  turingStaging: {
    // https://docs.oak.tech/docs/delegators/
    reward: 0.5
  },
  bifrost: {
    reward: 0
  },
  bifrost_testnet: {
    reward: 0
  },
  calamari_test: {
    reward: 0.9
  },
  calamari: {
    reward: 0.9
  },
  default: {
    reward: 0
  }
};
const _SUBSTRATE_DEFAULT_INFLATION_PARAMS = {
  auctionAdjust: 0,
  auctionMax: 0,
  // 5% for falloff, as per the defaults, see
  // https://github.com/paritytech/polkadot/blob/816cb64ea16102c6c79f6be2a917d832d98df757/runtime/kusama/src/lib.rs#L534
  falloff: 0.05,
  // 10% max, 0.25% min, see
  // https://github.com/paritytech/polkadot/blob/816cb64ea16102c6c79f6be2a917d832d98df757/runtime/kusama/src/lib.rs#L523
  maxInflation: 0.1,
  minInflation: 0.025,
  stakeTarget: 0.5
};
const _ALEPH_DEFAULT_UNIFORM_ERA_PAYOUT_PARAMS = {
  ..._SUBSTRATE_DEFAULT_INFLATION_PARAMS,
  yearlyInflationInTokens: 30000000
};
const _KNOWN_CHAIN_INFLATION_PARAMS = {
  aleph: _ALEPH_DEFAULT_UNIFORM_ERA_PAYOUT_PARAMS,
  alephTest: _ALEPH_DEFAULT_UNIFORM_ERA_PAYOUT_PARAMS,
  dock_pos: {
    ..._SUBSTRATE_DEFAULT_INFLATION_PARAMS,
    stakeTarget: 0.75
  },
  kusama: {
    ..._SUBSTRATE_DEFAULT_INFLATION_PARAMS,
    auctionAdjust: 0.3 / 60,
    auctionMax: 60,
    stakeTarget: 0.75
  },
  neatcoin: {
    ..._SUBSTRATE_DEFAULT_INFLATION_PARAMS,
    stakeTarget: 0.75
  },
  nft_mart: {
    ..._SUBSTRATE_DEFAULT_INFLATION_PARAMS,
    falloff: 0.04,
    stakeTarget: 0.60
  },
  polkadot: {
    ..._SUBSTRATE_DEFAULT_INFLATION_PARAMS,
    stakeTarget: 0.75
  }
};

// Send fund------------------------------------------------------------------------------------------------------------

const _TRANSFER_NOT_SUPPORTED_CHAINS = ['subspace_gemini_3a', 'kulupu', 'joystream', 'equilibrium_parachain', 'genshiro_testnet', 'genshiro'];
const _TRANSFER_CHAIN_GROUP = {
  acala: ['karura', 'acala', 'acala_testnet'],
  kintsugi: ['kintsugi', 'kintsugi_test', 'interlay', 'hydradx_main', 'mangatax_para'],
  genshiro: ['genshiro_testnet', 'genshiro', 'equilibrium_parachain'],
  crab: ['crab', 'pangolin'],
  bitcountry: ['pioneer', 'bitcountry', 'bifrost', 'bifrost_dot'],
  statemine: ['statemint', 'statemine', 'darwinia2', 'astar', 'shiden', 'shibuya', 'parallel'],
  riochain: ['riochain'],
  sora_substrate: ['sora_substrate'],
  avail: ['kate'],
  pendulum: ['pendulum', 'amplitude', 'amplitude_test']
};
const _BALANCE_PARSING_CHAIN_GROUP = {
  bobabeam: ['bobabeam', 'bobabase']
};
const _MANTA_ZK_CHAIN_GROUP = ['calamari'];
const _ZK_ASSET_PREFIX = 'zk';
const _DEFAULT_MANTA_ZK_CHAIN = 'calamari';

// XCM------------------------------------------------------------------------------------------------------------------

const _XCM_CHAIN_GROUP = {
  polkadotXcm: ['astar', 'shiden', 'statemine', 'statemint', 'equilibrium_parachain'],
  xcmPallet: ['polkadot', 'kusama']
  // default is xTokens pallet
};

const _XCM_TYPE = {
  RP: `${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_1__._SubstrateChainType.RELAYCHAIN}-${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_1__._SubstrateChainType.PARACHAIN}`,
  // DMP
  PP: `${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_1__._SubstrateChainType.PARACHAIN}-${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_1__._SubstrateChainType.PARACHAIN}`,
  // HRMP
  PR: `${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_1__._SubstrateChainType.PARACHAIN}-${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_1__._SubstrateChainType.RELAYCHAIN}` // UMP
};

const _DEFAULT_ACTIVE_CHAINS = [..._subwallet_chain_list__WEBPACK_IMPORTED_MODULE_2__._DEFAULT_CHAINS, 'vara_network'];
const EVM_PASS_CONNECT_STATUS = {
  acala: ['acala_evm', 'karura_evm']
};
const EVM_REFORMAT_DECIMALS = {
  acala: ['acala_evm', 'karura_evm']
};

// TODO: review
const TARGET_BRANCH =  true ? 'koni-dev' : 0;
const _CHAIN_INFO_SRC = `https://raw.githubusercontent.com/Koniverse/SubWallet-Chain/${TARGET_BRANCH}/packages/chain-list/src/data/ChainInfo.json`;
const _CHAIN_ASSET_SRC = `https://raw.githubusercontent.com/Koniverse/SubWallet-Chain/${TARGET_BRANCH}/packages/chain-list/src/data/ChainAsset.json`;
const _ASSET_REF_SRC = `https://raw.githubusercontent.com/Koniverse/SubWallet-Chain/${TARGET_BRANCH}/packages/chain-list/src/data/AssetRef.json`;
const _MULTI_CHAIN_ASSET_SRC = `https://raw.githubusercontent.com/Koniverse/SubWallet-Chain/${TARGET_BRANCH}/packages/chain-list/src/data/MultiChainAsset.json`;
const _CHAIN_LOGO_MAP_SRC = `https://raw.githubusercontent.com/Koniverse/SubWallet-Chain/${TARGET_BRANCH}/packages/chain-list/src/data/ChainLogoMap.json`;
const _ASSET_LOGO_MAP_SRC = `https://raw.githubusercontent.com/Koniverse/SubWallet-Chain/${TARGET_BRANCH}/packages/chain-list/src/data/AssetLogoMap.json`;

/***/ }),

/***/ "../extension-base/src/services/chain-service/handler/types.ts":
/*!*********************************************************************!*\
  !*** ../extension-base/src/services/chain-service/handler/types.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CHAIN_VALIDATION_ERROR": () => (/* binding */ _CHAIN_VALIDATION_ERROR)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

let _CHAIN_VALIDATION_ERROR;
(function (_CHAIN_VALIDATION_ERROR) {
  _CHAIN_VALIDATION_ERROR["INVALID_INFO_TYPE"] = "invalidInfoType";
  _CHAIN_VALIDATION_ERROR["INJECT_SCRIPT_DETECTED"] = "injectScriptDetected";
  _CHAIN_VALIDATION_ERROR["EXISTED_CHAIN"] = "existedChain";
  _CHAIN_VALIDATION_ERROR["EXISTED_PROVIDER"] = "existedProvider";
  _CHAIN_VALIDATION_ERROR["INVALID_PROVIDER"] = "invalidProvider";
  _CHAIN_VALIDATION_ERROR["NONE"] = "none";
  _CHAIN_VALIDATION_ERROR["CONNECTION_FAILURE"] = "connectionFailure";
  _CHAIN_VALIDATION_ERROR["PROVIDER_NOT_SAME_CHAIN"] = "providerNotSameChain";
})(_CHAIN_VALIDATION_ERROR || (_CHAIN_VALIDATION_ERROR = {}));

/***/ }),

/***/ "../extension-base/src/services/chain-service/types.ts":
/*!*************************************************************!*\
  !*** ../extension-base/src/services/chain-service/types.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CUSTOM_PREFIX": () => (/* binding */ _CUSTOM_PREFIX),
/* harmony export */   "_ChainConnectionStatus": () => (/* binding */ _ChainConnectionStatus),
/* harmony export */   "_FUNGIBLE_CONTRACT_STANDARDS": () => (/* binding */ _FUNGIBLE_CONTRACT_STANDARDS),
/* harmony export */   "_NFT_CONTRACT_STANDARDS": () => (/* binding */ _NFT_CONTRACT_STANDARDS),
/* harmony export */   "_SMART_CONTRACT_STANDARDS": () => (/* binding */ _SMART_CONTRACT_STANDARDS)
/* harmony export */ });
/* harmony import */ var _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/chain-list/types */ "../../node_modules/@subwallet/chain-list/types.js");
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

/* eslint @typescript-eslint/no-empty-interface: "off" */


let _ChainConnectionStatus;
(function (_ChainConnectionStatus) {
  _ChainConnectionStatus["CONNECTED"] = "CONNECTED";
  _ChainConnectionStatus["DISCONNECTED"] = "DISCONNECTED";
  _ChainConnectionStatus["UNSTABLE"] = "UNSTABLE";
  _ChainConnectionStatus["CONNECTING"] = "CONNECTING";
})(_ChainConnectionStatus || (_ChainConnectionStatus = {}));
const _CUSTOM_PREFIX = 'custom-';
const _FUNGIBLE_CONTRACT_STANDARDS = [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_0__._AssetType.ERC20, _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_0__._AssetType.PSP22];
const _NFT_CONTRACT_STANDARDS = [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_0__._AssetType.PSP34, _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_0__._AssetType.ERC721];
const _SMART_CONTRACT_STANDARDS = [..._FUNGIBLE_CONTRACT_STANDARDS, ..._NFT_CONTRACT_STANDARDS];

/***/ }),

/***/ "../extension-base/src/services/chain-service/utils.ts":
/*!*************************************************************!*\
  !*** ../extension-base/src/services/chain-service/utils.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_checkSmartContractSupportByChain": () => (/* binding */ _checkSmartContractSupportByChain),
/* harmony export */   "_generateCustomProviderKey": () => (/* binding */ _generateCustomProviderKey),
/* harmony export */   "_getAssetDecimals": () => (/* binding */ _getAssetDecimals),
/* harmony export */   "_getAssetOriginChain": () => (/* binding */ _getAssetOriginChain),
/* harmony export */   "_getAssetPriceId": () => (/* binding */ _getAssetPriceId),
/* harmony export */   "_getAssetSymbol": () => (/* binding */ _getAssetSymbol),
/* harmony export */   "_getBlockExplorerFromChain": () => (/* binding */ _getBlockExplorerFromChain),
/* harmony export */   "_getChainName": () => (/* binding */ _getChainName),
/* harmony export */   "_getChainNativeTokenBasicInfo": () => (/* binding */ _getChainNativeTokenBasicInfo),
/* harmony export */   "_getChainNativeTokenSlug": () => (/* binding */ _getChainNativeTokenSlug),
/* harmony export */   "_getChainSubstrateAddressPrefix": () => (/* binding */ _getChainSubstrateAddressPrefix),
/* harmony export */   "_getContractAddressOfToken": () => (/* binding */ _getContractAddressOfToken),
/* harmony export */   "_getCrowdloanUrlFromChain": () => (/* binding */ _getCrowdloanUrlFromChain),
/* harmony export */   "_getCustomAssets": () => (/* binding */ _getCustomAssets),
/* harmony export */   "_getEvmAbiExplorer": () => (/* binding */ _getEvmAbiExplorer),
/* harmony export */   "_getEvmChainId": () => (/* binding */ _getEvmChainId),
/* harmony export */   "_getMultiChainAsset": () => (/* binding */ _getMultiChainAsset),
/* harmony export */   "_getMultiChainAssetPriceId": () => (/* binding */ _getMultiChainAssetPriceId),
/* harmony export */   "_getMultiChainAssetSymbol": () => (/* binding */ _getMultiChainAssetSymbol),
/* harmony export */   "_getNftTypesSupportedByChain": () => (/* binding */ _getNftTypesSupportedByChain),
/* harmony export */   "_getOriginChainOfAsset": () => (/* binding */ _getOriginChainOfAsset),
/* harmony export */   "_getSubstrateGenesisHash": () => (/* binding */ _getSubstrateGenesisHash),
/* harmony export */   "_getSubstrateParaId": () => (/* binding */ _getSubstrateParaId),
/* harmony export */   "_getSubstrateRelayParent": () => (/* binding */ _getSubstrateRelayParent),
/* harmony export */   "_getTokenMinAmount": () => (/* binding */ _getTokenMinAmount),
/* harmony export */   "_getTokenOnChainAssetId": () => (/* binding */ _getTokenOnChainAssetId),
/* harmony export */   "_getTokenOnChainInfo": () => (/* binding */ _getTokenOnChainInfo),
/* harmony export */   "_getTokenTypesSupportedByChain": () => (/* binding */ _getTokenTypesSupportedByChain),
/* harmony export */   "_getXcmAssetId": () => (/* binding */ _getXcmAssetId),
/* harmony export */   "_getXcmAssetMultilocation": () => (/* binding */ _getXcmAssetMultilocation),
/* harmony export */   "_getXcmAssetType": () => (/* binding */ _getXcmAssetType),
/* harmony export */   "_getXcmTransferType": () => (/* binding */ _getXcmTransferType),
/* harmony export */   "_isAssetFungibleToken": () => (/* binding */ _isAssetFungibleToken),
/* harmony export */   "_isAssetSmartContractNft": () => (/* binding */ _isAssetSmartContractNft),
/* harmony export */   "_isAssetValuable": () => (/* binding */ _isAssetValuable),
/* harmony export */   "_isChainEnabled": () => (/* binding */ _isChainEnabled),
/* harmony export */   "_isChainEvmCompatible": () => (/* binding */ _isChainEvmCompatible),
/* harmony export */   "_isChainSupportEvmNft": () => (/* binding */ _isChainSupportEvmNft),
/* harmony export */   "_isChainSupportNativeNft": () => (/* binding */ _isChainSupportNativeNft),
/* harmony export */   "_isChainSupportSubstrateStaking": () => (/* binding */ _isChainSupportSubstrateStaking),
/* harmony export */   "_isChainSupportWasmNft": () => (/* binding */ _isChainSupportWasmNft),
/* harmony export */   "_isChainTestNet": () => (/* binding */ _isChainTestNet),
/* harmony export */   "_isCustomAsset": () => (/* binding */ _isCustomAsset),
/* harmony export */   "_isCustomChain": () => (/* binding */ _isCustomChain),
/* harmony export */   "_isCustomProvider": () => (/* binding */ _isCustomProvider),
/* harmony export */   "_isEqualContractAddress": () => (/* binding */ _isEqualContractAddress),
/* harmony export */   "_isEqualSmartContractAsset": () => (/* binding */ _isEqualSmartContractAsset),
/* harmony export */   "_isLocalToken": () => (/* binding */ _isLocalToken),
/* harmony export */   "_isMantaZkAsset": () => (/* binding */ _isMantaZkAsset),
/* harmony export */   "_isNativeToken": () => (/* binding */ _isNativeToken),
/* harmony export */   "_isNativeTokenBySlug": () => (/* binding */ _isNativeTokenBySlug),
/* harmony export */   "_isPureEvmChain": () => (/* binding */ _isPureEvmChain),
/* harmony export */   "_isPureSubstrateChain": () => (/* binding */ _isPureSubstrateChain),
/* harmony export */   "_isSmartContractToken": () => (/* binding */ _isSmartContractToken),
/* harmony export */   "_isSubstrateChain": () => (/* binding */ _isSubstrateChain),
/* harmony export */   "_isSubstrateParaChain": () => (/* binding */ _isSubstrateParaChain),
/* harmony export */   "_isSubstrateRelayChain": () => (/* binding */ _isSubstrateRelayChain),
/* harmony export */   "_isTokenEvmSmartContract": () => (/* binding */ _isTokenEvmSmartContract),
/* harmony export */   "_isTokenTransferredByEvm": () => (/* binding */ _isTokenTransferredByEvm),
/* harmony export */   "_isTokenWasmSmartContract": () => (/* binding */ _isTokenWasmSmartContract),
/* harmony export */   "_isXcmPathSupported": () => (/* binding */ _isXcmPathSupported),
/* harmony export */   "_parseAssetRefKey": () => (/* binding */ _parseAssetRefKey),
/* harmony export */   "_parseMetadataForSmartContractAsset": () => (/* binding */ _parseMetadataForSmartContractAsset),
/* harmony export */   "findChainInfoByChainId": () => (/* binding */ findChainInfoByChainId),
/* harmony export */   "findChainInfoByHalfGenesisHash": () => (/* binding */ findChainInfoByHalfGenesisHash)
/* harmony export */ });
/* harmony import */ var _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/chain-list/types */ "../../node_modules/@subwallet/chain-list/types.js");
/* harmony import */ var _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/constants */ "../extension-base/src/services/chain-service/constants.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/types */ "../extension-base/src/services/chain-service/types.ts");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0





function _isCustomChain(slug) {
  if (slug.length === 0) {
    return true;
  }
  return slug.startsWith(_subwallet_extension_base_services_chain_service_types__WEBPACK_IMPORTED_MODULE_0__._CUSTOM_PREFIX);
}
function _isCustomAsset(slug) {
  // might be different from _isCustomNetwork
  if (slug.length === 0) {
    return true;
  }
  return slug.startsWith(_subwallet_extension_base_services_chain_service_types__WEBPACK_IMPORTED_MODULE_0__._CUSTOM_PREFIX);
}
function _getCustomAssets(assetRegistry) {
  const filteredAssetMap = {};
  Object.values(assetRegistry).forEach(chainAsset => {
    if (_isCustomAsset(chainAsset.slug)) {
      filteredAssetMap[chainAsset.slug] = chainAsset;
    }
  });
  return filteredAssetMap;
}
function _isEqualContractAddress(address1, address2) {
  if ((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__.isEthereumAddress)(address1) && (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__.isEthereumAddress)(address2)) {
    return address1.toLowerCase() === address2.toLowerCase(); // EVM address is case-insensitive
  }

  return address2 === address1;
}
function _isEqualSmartContractAsset(asset1, asset2) {
  var _asset1$metadata, _asset2$metadata;
  const contract1 = ((_asset1$metadata = asset1.metadata) === null || _asset1$metadata === void 0 ? void 0 : _asset1$metadata.contractAddress) || undefined || null;
  const contract2 = ((_asset2$metadata = asset2.metadata) === null || _asset2$metadata === void 0 ? void 0 : _asset2$metadata.contractAddress) || undefined || null;
  if (!contract1 || !contract2) {
    return false;
  }
  if (_isEqualContractAddress(contract1, contract2) && asset1.assetType === asset2.assetType && asset1.originChain === asset2.originChain) {
    return true;
  }
  return false;
}
function _isPureEvmChain(chainInfo) {
  return chainInfo.evmInfo !== null && chainInfo.substrateInfo === null;
}
function _isPureSubstrateChain(chainInfo) {
  return chainInfo.evmInfo === null && chainInfo.substrateInfo !== null;
}
function _getOriginChainOfAsset(assetSlug) {
  if (assetSlug.startsWith(_subwallet_extension_base_services_chain_service_types__WEBPACK_IMPORTED_MODULE_0__._CUSTOM_PREFIX)) {
    const arr = assetSlug.split('-').slice(1);
    if (arr[0] === 'custom') {
      const end = arr.findIndex(str => Object.values(_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType).includes(str));
      return arr.slice(0, end).join('-');
    }
    return arr[0];
  }
  return assetSlug.split('-')[0];
}
function _getContractAddressOfToken(tokenInfo) {
  var _tokenInfo$metadata;
  return ((_tokenInfo$metadata = tokenInfo.metadata) === null || _tokenInfo$metadata === void 0 ? void 0 : _tokenInfo$metadata.contractAddress) || '';
}
function _isTokenTransferredByEvm(tokenInfo) {
  var _tokenInfo$metadata2;
  return !!((_tokenInfo$metadata2 = tokenInfo.metadata) !== null && _tokenInfo$metadata2 !== void 0 && _tokenInfo$metadata2.contractAddress) || _isNativeToken(tokenInfo);
}
function _checkSmartContractSupportByChain(chainInfo, contractType) {
  // EVM chains support smart contract by default so just checking Substrate chains
  if (chainInfo.substrateInfo === null || chainInfo.substrateInfo && chainInfo.substrateInfo.supportSmartContract === null) {
    return false;
  }
  return chainInfo.substrateInfo.supportSmartContract !== null && chainInfo.substrateInfo.supportSmartContract.includes(contractType);
}

// Utils for balance functions
function _getTokenOnChainAssetId(tokenInfo) {
  var _tokenInfo$metadata3;
  return ((_tokenInfo$metadata3 = tokenInfo.metadata) === null || _tokenInfo$metadata3 === void 0 ? void 0 : _tokenInfo$metadata3.assetId) || '-1';
}
function _getTokenOnChainInfo(tokenInfo) {
  var _tokenInfo$metadata4;
  return (_tokenInfo$metadata4 = tokenInfo.metadata) === null || _tokenInfo$metadata4 === void 0 ? void 0 : _tokenInfo$metadata4.onChainInfo;
}
function _getTokenMinAmount(tokenInfo) {
  return tokenInfo.minAmount || '0';
}
function _isChainEvmCompatible(chainInfo) {
  return chainInfo.evmInfo !== undefined && chainInfo.evmInfo !== null;
}
function _isNativeToken(tokenInfo) {
  return tokenInfo.assetType === _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.NATIVE;
}
function _isNativeTokenBySlug(tokenSlug) {
  return tokenSlug.includes(_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.NATIVE);
}
function _isSmartContractToken(tokenInfo) {
  return _subwallet_extension_base_services_chain_service_types__WEBPACK_IMPORTED_MODULE_0__._SMART_CONTRACT_STANDARDS.includes(tokenInfo.assetType);
}
function _isSubstrateChain(chainInfo) {
  return !!chainInfo.substrateInfo; // fallback to Ethereum
}

function _getEvmChainId(chainInfo) {
  var _chainInfo$evmInfo;
  return ((_chainInfo$evmInfo = chainInfo.evmInfo) === null || _chainInfo$evmInfo === void 0 ? void 0 : _chainInfo$evmInfo.evmChainId) || 1; // fallback to Ethereum
}

function _getSubstrateParaId(chainInfo) {
  var _chainInfo$substrateI;
  return ((_chainInfo$substrateI = chainInfo.substrateInfo) === null || _chainInfo$substrateI === void 0 ? void 0 : _chainInfo$substrateI.paraId) || -1;
}
function _getSubstrateRelayParent(chainInfo) {
  var _chainInfo$substrateI2;
  return ((_chainInfo$substrateI2 = chainInfo.substrateInfo) === null || _chainInfo$substrateI2 === void 0 ? void 0 : _chainInfo$substrateI2.relaySlug) || '';
}
function _getSubstrateGenesisHash(chainInfo) {
  var _chainInfo$substrateI3;
  return ((_chainInfo$substrateI3 = chainInfo.substrateInfo) === null || _chainInfo$substrateI3 === void 0 ? void 0 : _chainInfo$substrateI3.genesisHash) || '';
}
function _isChainSupportSubstrateStaking(chainInfo) {
  var _chainInfo$substrateI4;
  return ((_chainInfo$substrateI4 = chainInfo.substrateInfo) === null || _chainInfo$substrateI4 === void 0 ? void 0 : _chainInfo$substrateI4.supportStaking) || false;
}
function _isChainEnabled(chainState) {
  return chainState.active;
}
function _getChainSubstrateAddressPrefix(chainInfo) {
  var _chainInfo$substrateI5, _chainInfo$substrateI6;
  return (_chainInfo$substrateI5 = chainInfo === null || chainInfo === void 0 ? void 0 : (_chainInfo$substrateI6 = chainInfo.substrateInfo) === null || _chainInfo$substrateI6 === void 0 ? void 0 : _chainInfo$substrateI6.addressPrefix) !== null && _chainInfo$substrateI5 !== void 0 ? _chainInfo$substrateI5 : -1;
}
function _isChainSupportNativeNft(chainInfo) {
  var _chainInfo$substrateI7;
  return ((_chainInfo$substrateI7 = chainInfo.substrateInfo) === null || _chainInfo$substrateI7 === void 0 ? void 0 : _chainInfo$substrateI7.hasNativeNft) || false;
}
function _isChainSupportEvmNft(chainInfo) {
  var _chainInfo$evmInfo2, _chainInfo$evmInfo2$s;
  return ((_chainInfo$evmInfo2 = chainInfo.evmInfo) === null || _chainInfo$evmInfo2 === void 0 ? void 0 : (_chainInfo$evmInfo2$s = _chainInfo$evmInfo2.supportSmartContract) === null || _chainInfo$evmInfo2$s === void 0 ? void 0 : _chainInfo$evmInfo2$s.includes(_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.ERC721)) || false;
}
function _isChainSupportWasmNft(chainInfo) {
  var _chainInfo$substrateI8, _chainInfo$substrateI9;
  return ((_chainInfo$substrateI8 = chainInfo.substrateInfo) === null || _chainInfo$substrateI8 === void 0 ? void 0 : (_chainInfo$substrateI9 = _chainInfo$substrateI8.supportSmartContract) === null || _chainInfo$substrateI9 === void 0 ? void 0 : _chainInfo$substrateI9.includes(_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.PSP34)) || false;
}
function _getNftTypesSupportedByChain(chainInfo) {
  const result = [];
  if (chainInfo.substrateInfo && chainInfo.substrateInfo.supportSmartContract) {
    chainInfo.substrateInfo.supportSmartContract.forEach(assetType => {
      if ([_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.PSP34].includes(assetType)) {
        result.push(assetType);
      }
    });
  }
  if (chainInfo.evmInfo && chainInfo.evmInfo.supportSmartContract) {
    chainInfo.evmInfo.supportSmartContract.forEach(assetType => {
      if ([_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.ERC721].includes(assetType)) {
        result.push(assetType);
      }
    });
  }
  return result;
}
function _getTokenTypesSupportedByChain(chainInfo) {
  const result = [];
  if (chainInfo.substrateInfo && chainInfo.substrateInfo.supportSmartContract) {
    chainInfo.substrateInfo.supportSmartContract.forEach(assetType => {
      if ([_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.PSP22].includes(assetType)) {
        result.push(assetType);
      }
    });
  }
  if (chainInfo.evmInfo && chainInfo.evmInfo.supportSmartContract) {
    chainInfo.evmInfo.supportSmartContract.forEach(assetType => {
      if ([_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.ERC20].includes(assetType)) {
        result.push(assetType);
      }
    });
  }
  return result;
}
function _getChainNativeTokenBasicInfo(chainInfo) {
  if (!chainInfo) {
    return {
      symbol: '',
      decimals: -1
    };
  }
  if (chainInfo.substrateInfo !== null) {
    // substrate by default
    return {
      symbol: chainInfo.substrateInfo.symbol,
      decimals: chainInfo.substrateInfo.decimals
    };
  } else if (chainInfo.evmInfo !== null) {
    return {
      symbol: chainInfo.evmInfo.symbol,
      decimals: chainInfo.evmInfo.decimals
    };
  }
  return {
    symbol: '',
    decimals: -1
  };
}
function _getChainNativeTokenSlug(chainInfo) {
  if (_isCustomChain(chainInfo.slug)) {
    return `${_subwallet_extension_base_services_chain_service_types__WEBPACK_IMPORTED_MODULE_0__._CUSTOM_PREFIX}${chainInfo.slug}-${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.NATIVE}-${_getChainNativeTokenBasicInfo(chainInfo).symbol}`;
  }
  return `${chainInfo.slug}-${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.NATIVE}-${_getChainNativeTokenBasicInfo(chainInfo).symbol}`;
}
function _isLocalToken(tokenInfo) {
  return tokenInfo.assetType === _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.LOCAL;
}
function _isTokenEvmSmartContract(tokenInfo) {
  return [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.ERC721, _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.ERC20].includes(tokenInfo.assetType);
}
function _isTokenWasmSmartContract(tokenInfo) {
  return [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.PSP22, _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.PSP34].includes(tokenInfo.assetType);
}
function _isAssetSmartContractNft(assetInfo) {
  return [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.PSP34, _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.ERC721].includes(assetInfo.assetType);
}
function _parseAssetRefKey(originTokenSlug, destinationTokenSlug) {
  return `${originTokenSlug}___${destinationTokenSlug}`;
}
function _isXcmPathSupported(originTokenSlug, destinationTokenSlug, assetRefMap) {
  const assetRef = assetRefMap[_parseAssetRefKey(originTokenSlug, destinationTokenSlug)];
  if (!assetRef) {
    return false;
  }
  return assetRef.path === _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetRefPath.XCM;
}
function _getXcmAssetType(tokenInfo) {
  var _tokenInfo$metadata5;
  return ((_tokenInfo$metadata5 = tokenInfo.metadata) === null || _tokenInfo$metadata5 === void 0 ? void 0 : _tokenInfo$metadata5.assetType) || '';
}
function _getXcmAssetId(tokenInfo) {
  var _tokenInfo$metadata6;
  return ((_tokenInfo$metadata6 = tokenInfo.metadata) === null || _tokenInfo$metadata6 === void 0 ? void 0 : _tokenInfo$metadata6.assetId) || '-1';
}
function _getXcmAssetMultilocation(tokenInfo) {
  var _tokenInfo$metadata7;
  return (_tokenInfo$metadata7 = tokenInfo.metadata) === null || _tokenInfo$metadata7 === void 0 ? void 0 : _tokenInfo$metadata7.multilocation;
}
function _getXcmTransferType(originChainInfo, destinationChainInfo) {
  var _originChainInfo$subs, _destinationChainInfo;
  return `${((_originChainInfo$subs = originChainInfo.substrateInfo) === null || _originChainInfo$subs === void 0 ? void 0 : _originChainInfo$subs.chainType) || ''}-${((_destinationChainInfo = destinationChainInfo.substrateInfo) === null || _destinationChainInfo === void 0 ? void 0 : _destinationChainInfo.chainType) || ''}`;
}
function _isSubstrateRelayChain(chainInfo) {
  var _chainInfo$substrateI10;
  return ((_chainInfo$substrateI10 = chainInfo.substrateInfo) === null || _chainInfo$substrateI10 === void 0 ? void 0 : _chainInfo$substrateI10.chainType) === _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._SubstrateChainType.RELAYCHAIN;
}
function _isSubstrateParaChain(chainInfo) {
  var _chainInfo$substrateI11;
  return chainInfo.substrateInfo !== null && chainInfo.substrateInfo.paraId !== null && ((_chainInfo$substrateI11 = chainInfo.substrateInfo) === null || _chainInfo$substrateI11 === void 0 ? void 0 : _chainInfo$substrateI11.chainType) === _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._SubstrateChainType.PARACHAIN;
}
function _getEvmAbiExplorer(chainInfo) {
  var _chainInfo$evmInfo3;
  return ((_chainInfo$evmInfo3 = chainInfo.evmInfo) === null || _chainInfo$evmInfo3 === void 0 ? void 0 : _chainInfo$evmInfo3.abiExplorer) || '';
}
function _isAssetValuable(assetInfo) {
  return assetInfo.hasValue;
}
function _getMultiChainAsset(assetInfo) {
  return (assetInfo === null || assetInfo === void 0 ? void 0 : assetInfo.multiChainAsset) || '';
}
function _getAssetPriceId(assetInfo) {
  return (assetInfo === null || assetInfo === void 0 ? void 0 : assetInfo.priceId) || '';
}
function _getMultiChainAssetPriceId(multiChainAsset) {
  return (multiChainAsset === null || multiChainAsset === void 0 ? void 0 : multiChainAsset.priceId) || '';
}
function _getAssetSymbol(assetInfo) {
  return (assetInfo === null || assetInfo === void 0 ? void 0 : assetInfo.symbol) || '';
}
function _getMultiChainAssetSymbol(multiChainAsset) {
  return multiChainAsset.symbol;
}
function _getAssetOriginChain(assetInfo) {
  return assetInfo.originChain;
}
function _getChainName(chainInfo) {
  return chainInfo.name;
}
function _getAssetDecimals(assetInfo) {
  return assetInfo.decimals || 0;
}
function _getBlockExplorerFromChain(chainInfo) {
  let blockExplorer;
  if (!chainInfo) {
    return;
  }
  if (_isPureEvmChain(chainInfo)) {
    var _chainInfo$evmInfo4;
    blockExplorer = chainInfo === null || chainInfo === void 0 ? void 0 : (_chainInfo$evmInfo4 = chainInfo.evmInfo) === null || _chainInfo$evmInfo4 === void 0 ? void 0 : _chainInfo$evmInfo4.blockExplorer;
  } else {
    var _chainInfo$substrateI12;
    blockExplorer = chainInfo === null || chainInfo === void 0 ? void 0 : (_chainInfo$substrateI12 = chainInfo.substrateInfo) === null || _chainInfo$substrateI12 === void 0 ? void 0 : _chainInfo$substrateI12.blockExplorer;
  }
  if (!blockExplorer) {
    return undefined;
  }
  if (blockExplorer !== '' && !blockExplorer.endsWith('/')) {
    return `${blockExplorer}/`;
  } else {
    return blockExplorer;
  }
}
function _parseMetadataForSmartContractAsset(contractAddress) {
  return {
    contractAddress
  };
}
function _isChainTestNet(chainInfo) {
  return chainInfo.isTestnet || false;
}
function _isAssetFungibleToken(chainAsset) {
  return ![_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.ERC721, _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.PSP34, _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._AssetType.UNKNOWN].includes(chainAsset.assetType);
}
function _getCrowdloanUrlFromChain(chainInfo) {
  var _chainInfo$substrateI13;
  return (chainInfo === null || chainInfo === void 0 ? void 0 : (_chainInfo$substrateI13 = chainInfo.substrateInfo) === null || _chainInfo$substrateI13 === void 0 ? void 0 : _chainInfo$substrateI13.crowdloanUrl) || '';
}
function _isCustomProvider(providerKey) {
  return providerKey.startsWith(_subwallet_extension_base_services_chain_service_types__WEBPACK_IMPORTED_MODULE_0__._CUSTOM_PREFIX);
}
function _generateCustomProviderKey(index) {
  return `${_subwallet_extension_base_services_chain_service_types__WEBPACK_IMPORTED_MODULE_0__._CUSTOM_PREFIX}provider-${index}`;
}
const findChainInfoByHalfGenesisHash = (chainMap, halfGenesisHash) => {
  if (!halfGenesisHash) {
    return null;
  }
  for (const chainInfo of Object.values(chainMap)) {
    var _getSubstrateGenesisH;
    if (((_getSubstrateGenesisH = _getSubstrateGenesisHash(chainInfo)) === null || _getSubstrateGenesisH === void 0 ? void 0 : _getSubstrateGenesisH.toLowerCase().substring(2, 2 + 32)) === halfGenesisHash.toLowerCase()) {
      return chainInfo;
    }
  }
  return null;
};
const findChainInfoByChainId = (chainMap, chainId) => {
  if (!chainId) {
    return null;
  }
  for (const chainInfo of Object.values(chainMap)) {
    var _chainInfo$evmInfo5;
    if (((_chainInfo$evmInfo5 = chainInfo.evmInfo) === null || _chainInfo$evmInfo5 === void 0 ? void 0 : _chainInfo$evmInfo5.evmChainId) === chainId) {
      return chainInfo;
    }
  }
  return null;
};
function _isMantaZkAsset(chainAsset) {
  return _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_3__._MANTA_ZK_CHAIN_GROUP.includes(chainAsset.originChain) && chainAsset.symbol.startsWith(_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_3__._ZK_ASSET_PREFIX);
}

/***/ }),

/***/ "../extension-base/src/services/setting-service/constants.ts":
/*!*******************************************************************!*\
  !*** ../extension-base/src/services/setting-service/constants.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ALL_LOGO": () => (/* binding */ DEFAULT_ALL_LOGO),
/* harmony export */   "DEFAULT_AUTO_LOCK_TIME": () => (/* binding */ DEFAULT_AUTO_LOCK_TIME),
/* harmony export */   "DEFAULT_CAMERA_ENABLE": () => (/* binding */ DEFAULT_CAMERA_ENABLE),
/* harmony export */   "DEFAULT_CHAIN_PATROL_ENABLE": () => (/* binding */ DEFAULT_CHAIN_PATROL_ENABLE),
/* harmony export */   "DEFAULT_LANGUAGE": () => (/* binding */ DEFAULT_LANGUAGE),
/* harmony export */   "DEFAULT_NOTIFICATION_TYPE": () => (/* binding */ DEFAULT_NOTIFICATION_TYPE),
/* harmony export */   "DEFAULT_SETTING": () => (/* binding */ DEFAULT_SETTING),
/* harmony export */   "DEFAULT_SHOW_BALANCE": () => (/* binding */ DEFAULT_SHOW_BALANCE),
/* harmony export */   "DEFAULT_SHOW_ZERO_BALANCE": () => (/* binding */ DEFAULT_SHOW_ZERO_BALANCE),
/* harmony export */   "DEFAULT_THEME": () => (/* binding */ DEFAULT_THEME),
/* harmony export */   "DEFAULT_UNLOCK_TYPE": () => (/* binding */ DEFAULT_UNLOCK_TYPE)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/environment.ts");
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0



const DEFAULT_THEME = _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.ThemeNames.DARK;
const DEFAULT_NOTIFICATION_TYPE = 'popup';
const DEFAULT_AUTO_LOCK_TIME = 15;
const DEFAULT_UNLOCK_TYPE = _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_1__.TARGET_ENV === 'extension' ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.WalletUnlockType.ALWAYS_REQUIRED : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.WalletUnlockType.WHEN_NEEDED;
const DEFAULT_CHAIN_PATROL_ENABLE = false;
const DEFAULT_LANGUAGE = 'en';
const DEFAULT_SHOW_ZERO_BALANCE = true;
const DEFAULT_SHOW_BALANCE = false;
const DEFAULT_ALL_LOGO = '';
const DEFAULT_CAMERA_ENABLE = false;
const DEFAULT_SETTING = {
  language: DEFAULT_LANGUAGE,
  browserConfirmationType: DEFAULT_NOTIFICATION_TYPE,
  isShowZeroBalance: DEFAULT_SHOW_ZERO_BALANCE,
  isShowBalance: DEFAULT_SHOW_BALANCE,
  accountAllLogo: DEFAULT_ALL_LOGO,
  theme: DEFAULT_THEME,
  unlockType: DEFAULT_UNLOCK_TYPE,
  camera: DEFAULT_CAMERA_ENABLE,
  timeAutoLock: DEFAULT_AUTO_LOCK_TIME,
  enableChainPatrol: DEFAULT_CHAIN_PATROL_ENABLE,
  walletReference: ''
};

/***/ }),

/***/ "../extension-base/src/services/wallet-connect-service/constants.ts":
/*!**************************************************************************!*\
  !*** ../extension-base/src/services/wallet-connect-service/constants.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_WALLET_CONNECT_EVENT": () => (/* binding */ ALL_WALLET_CONNECT_EVENT),
/* harmony export */   "DEFAULT_WALLET_CONNECT_OPTIONS": () => (/* binding */ DEFAULT_WALLET_CONNECT_OPTIONS),
/* harmony export */   "PROJECT_ID_EXTENSION": () => (/* binding */ PROJECT_ID_EXTENSION),
/* harmony export */   "PROJECT_ID_MOBILE": () => (/* binding */ PROJECT_ID_MOBILE),
/* harmony export */   "RELAY_URL": () => (/* binding */ RELAY_URL),
/* harmony export */   "WALLET_CONNECT_EIP155_NAMESPACE": () => (/* binding */ WALLET_CONNECT_EIP155_NAMESPACE),
/* harmony export */   "WALLET_CONNECT_POLKADOT_NAMESPACE": () => (/* binding */ WALLET_CONNECT_POLKADOT_NAMESPACE),
/* harmony export */   "WALLET_CONNECT_REQUEST_KEY": () => (/* binding */ WALLET_CONNECT_REQUEST_KEY),
/* harmony export */   "WALLET_CONNECT_SUPPORTED_METHODS": () => (/* binding */ WALLET_CONNECT_SUPPORTED_METHODS),
/* harmony export */   "WALLET_CONNECT_SUPPORT_NAMESPACES": () => (/* binding */ WALLET_CONNECT_SUPPORT_NAMESPACES)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_wallet_connect_service_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-base/services/wallet-connect-service/types */ "../extension-base/src/services/wallet-connect-service/types.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0



const PROJECT_ID_EXTENSION = '6da34c0b48164d27681924dd9a46d6be';
const PROJECT_ID_MOBILE = '6da34c0b48164d27681924dd9a46d6be';
const RELAY_URL = 'wss://relay.walletconnect.com';
const DEFAULT_WALLET_CONNECT_OPTIONS = {
  logger: 'debug',
  projectId: !_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_0__.isMobile ? PROJECT_ID_EXTENSION : PROJECT_ID_MOBILE,
  relayUrl: RELAY_URL,
  metadata: {
    name: 'SubWallet',
    description: 'React Wallet for WalletConnect',
    url: 'https://www.subwallet.app/',
    icons: ['https://raw.githubusercontent.com/Koniverse/SubWallet-Extension/master/packages/extension-koni/public/images/icon-128.png']
  }
};
const ALL_WALLET_CONNECT_EVENT = ['session_proposal', 'session_update', 'session_extend', 'session_ping', 'session_delete', 'session_expire', 'session_request', 'session_request_sent', 'session_event', 'proposal_expire'];
const WALLET_CONNECT_SUPPORTED_METHODS = [_subwallet_extension_base_services_wallet_connect_service_types__WEBPACK_IMPORTED_MODULE_1__.POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_MESSAGE, _subwallet_extension_base_services_wallet_connect_service_types__WEBPACK_IMPORTED_MODULE_1__.POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_TRANSACTION, _subwallet_extension_base_services_wallet_connect_service_types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION, _subwallet_extension_base_services_wallet_connect_service_types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.PERSONAL_SIGN, _subwallet_extension_base_services_wallet_connect_service_types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V1, _subwallet_extension_base_services_wallet_connect_service_types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V3, _subwallet_extension_base_services_wallet_connect_service_types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V4];
const WALLET_CONNECT_REQUEST_KEY = 'wallet-connect';
const WALLET_CONNECT_EIP155_NAMESPACE = 'eip155';
const WALLET_CONNECT_POLKADOT_NAMESPACE = 'polkadot';
const WALLET_CONNECT_SUPPORT_NAMESPACES = [WALLET_CONNECT_EIP155_NAMESPACE, WALLET_CONNECT_POLKADOT_NAMESPACE];

/***/ }),

/***/ "../extension-base/src/services/wallet-connect-service/helpers.ts":
/*!************************************************************************!*\
  !*** ../extension-base/src/services/wallet-connect-service/helpers.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertConnectRequest": () => (/* binding */ convertConnectRequest),
/* harmony export */   "convertNotSupportRequest": () => (/* binding */ convertNotSupportRequest),
/* harmony export */   "getEip155MessageAddress": () => (/* binding */ getEip155MessageAddress),
/* harmony export */   "getWCId": () => (/* binding */ getWCId),
/* harmony export */   "isProposalExpired": () => (/* binding */ isProposalExpired),
/* harmony export */   "isSupportWalletConnectChain": () => (/* binding */ isSupportWalletConnectChain),
/* harmony export */   "isSupportWalletConnectNamespace": () => (/* binding */ isSupportWalletConnectNamespace),
/* harmony export */   "isWalletConnectRequest": () => (/* binding */ isWalletConnectRequest),
/* harmony export */   "parseRequestParams": () => (/* binding */ parseRequestParams)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../extension-base/src/services/wallet-connect-service/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../extension-base/src/services/wallet-connect-service/types.ts");
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0





const getWCId = id => {
  return [_constants__WEBPACK_IMPORTED_MODULE_0__.WALLET_CONNECT_REQUEST_KEY, Date.now(), id].join('.');
};
const convertConnectRequest = request => {
  return {
    id: getWCId(request.id),
    isInternal: false,
    request: request,
    url: request.params.proposer.metadata.url
  };
};
const convertNotSupportRequest = (request, url) => {
  return {
    id: getWCId(request.id),
    isInternal: false,
    request: request,
    url: url
  };
};
const parseRequestParams = params => {
  // @ts-ignore
  return params;
};
const getEip155MessageAddress = (method, param) => {
  switch (method) {
    case _types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.PERSONAL_SIGN:
    case _types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA:
    case _types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.ETH_SIGN:
    case _types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V3:
    case _types__WEBPACK_IMPORTED_MODULE_1__.EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V4:
      // eslint-disable-next-line no-case-declarations
      const [p1, p2] = parseRequestParams(param);
      if (typeof p1 === 'string' && (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__.isEthereumAddress)(p1)) {
        return p1;
      } else if (typeof p2 === 'string' && (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__.isEthereumAddress)(p2)) {
        return p2;
      }
      return '';
    default:
      return '';
  }
};
const isWalletConnectRequest = id => {
  if (!id) {
    return false;
  }
  const [prefix] = id.split('.');
  return prefix === _constants__WEBPACK_IMPORTED_MODULE_0__.WALLET_CONNECT_REQUEST_KEY;
};
const isProposalExpired = params => {
  const timeNum = params.expiry;
  const expireTime = new Date(timeNum > 10 ** 12 ? timeNum : timeNum * 1000);
  const now = new Date();
  return now.getTime() >= expireTime.getTime();
};
const isSupportWalletConnectNamespace = namespace => {
  return _constants__WEBPACK_IMPORTED_MODULE_0__.WALLET_CONNECT_SUPPORT_NAMESPACES.includes(namespace);
};
const isSupportWalletConnectChain = (chain, chainInfoMap) => {
  const [namespace, info] = chain.split(':');
  if (namespace === _constants__WEBPACK_IMPORTED_MODULE_0__.WALLET_CONNECT_POLKADOT_NAMESPACE) {
    return !!(0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_3__.findChainInfoByHalfGenesisHash)(chainInfoMap, info);
  } else if (namespace === _constants__WEBPACK_IMPORTED_MODULE_0__.WALLET_CONNECT_EIP155_NAMESPACE) {
    return !!(0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_3__.findChainInfoByChainId)(chainInfoMap, parseInt(info));
  } else {
    return false;
  }
};

/***/ }),

/***/ "../extension-base/src/services/wallet-connect-service/types.ts":
/*!**********************************************************************!*\
  !*** ../extension-base/src/services/wallet-connect-service/types.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EIP155_SIGNING_METHODS": () => (/* binding */ EIP155_SIGNING_METHODS),
/* harmony export */   "POLKADOT_SIGNING_METHODS": () => (/* binding */ POLKADOT_SIGNING_METHODS)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

let EIP155_SIGNING_METHODS;
(function (EIP155_SIGNING_METHODS) {
  EIP155_SIGNING_METHODS["PERSONAL_SIGN"] = "personal_sign";
  EIP155_SIGNING_METHODS["ETH_SIGN"] = "eth_sign";
  EIP155_SIGNING_METHODS["ETH_SIGN_TRANSACTION"] = "eth_signTransaction";
  EIP155_SIGNING_METHODS["ETH_SIGN_TYPED_DATA"] = "eth_signTypedData";
  EIP155_SIGNING_METHODS["ETH_SIGN_TYPED_DATA_V1"] = "eth_signTypedData_v1";
  EIP155_SIGNING_METHODS["ETH_SIGN_TYPED_DATA_V3"] = "eth_signTypedData_v3";
  EIP155_SIGNING_METHODS["ETH_SIGN_TYPED_DATA_V4"] = "eth_signTypedData_v4";
  EIP155_SIGNING_METHODS["ETH_SEND_RAW_TRANSACTION"] = "eth_sendRawTransaction";
  EIP155_SIGNING_METHODS["ETH_SEND_TRANSACTION"] = "eth_sendTransaction";
})(EIP155_SIGNING_METHODS || (EIP155_SIGNING_METHODS = {}));
let POLKADOT_SIGNING_METHODS;
(function (POLKADOT_SIGNING_METHODS) {
  POLKADOT_SIGNING_METHODS["POLKADOT_SIGN_TRANSACTION"] = "polkadot_signTransaction";
  POLKADOT_SIGNING_METHODS["POLKADOT_SIGN_MESSAGE"] = "polkadot_signMessage";
})(POLKADOT_SIGNING_METHODS || (POLKADOT_SIGNING_METHODS = {}));

/***/ }),

/***/ "../extension-base/src/utils/array.ts":
/*!********************************************!*\
  !*** ../extension-base/src/utils/array.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueStringArray": () => (/* binding */ uniqueStringArray)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

const uniqueStringArray = array => {
  const map = {};
  array.forEach(v => {
    map[v] = v;
  });
  return Object.keys(map);
};

/***/ }),

/***/ "../extension-base/src/utils/canDerive.ts":
/*!************************************************!*\
  !*** ../extension-base/src/utils/canDerive.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canDerive": () => (/* binding */ canDerive)
/* harmony export */ });
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0

function canDerive(type) {
  return !!type && ['ed25519', 'sr25519', 'ecdsa', 'ethereum'].includes(type);
}

/***/ }),

/***/ "../extension-base/src/utils/environment.ts":
/*!**************************************************!*\
  !*** ../extension-base/src/utils/environment.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODULE_SUPPORT": () => (/* binding */ MODULE_SUPPORT),
/* harmony export */   "RuntimeInfo": () => (/* binding */ RuntimeInfo),
/* harmony export */   "TARGET_ENV": () => (/* binding */ TARGET_ENV),
/* harmony export */   "getOS": () => (/* binding */ getOS)
/* harmony export */ });
/* harmony import */ var _background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "../../node_modules/process/browser.js");
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0


function detectRuntimeEnvironment() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Web environment
    return {
      environment: _background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.RuntimeEnvironment.Web,
      version: navigator.userAgent,
      host: window.location.host,
      protocol: window.location.protocol
    };
  } else if (typeof self !== 'undefined' && typeof importScripts !== 'undefined') {
    // Service Worker environment
    return {
      environment: _background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.RuntimeEnvironment.ServiceWorker,
      version: navigator.userAgent,
      host: self.location.host,
      protocol: window.location.protocol
    };
  } else if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    // Node.js environment
    return {
      environment: _background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.RuntimeEnvironment.Node,
      version: process.versions.node
    };
  } else if (typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined') {
    // Extension environment (Chrome)
    return {
      environment: _background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.RuntimeEnvironment.ExtensionChrome,
      version: chrome.runtime.getManifest().version,
      host: window.location.host,
      protocol: window.location.protocol
    };
  } else if (typeof browser !== 'undefined' && typeof browser.runtime !== 'undefined') {
    // Extension environment (Firefox)
    return {
      environment: _background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.RuntimeEnvironment.ExtensionFirefox,
      version: browser.runtime.getManifest().version,
      host: window.location.host,
      protocol: window.location.protocol
    };
    // @ts-ignore
  } else if (typeof WorkerGlobalScope !== 'undefined') {
    // Web Worker environment
    return {
      environment: _background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.RuntimeEnvironment.WebWorker,
      version: ''
    };
  } else {
    // Unknown environment
    return {
      environment: _background_KoniTypes__WEBPACK_IMPORTED_MODULE_0__.RuntimeEnvironment.Unknown,
      version: ''
    };
  }
}
const RuntimeInfo = detectRuntimeEnvironment();
const getOS = () => {
  var _window$navigator, _window$navigator$use;
  const userAgent = window.navigator.userAgent;
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
  const platform = ((_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : (_window$navigator$use = _window$navigator.userAgentData) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = 'Unknown';
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }
  return os;
};
const TARGET_ENV = "extension" || 0;
const MODULE_SUPPORT = {
  MANTA_ZK: TARGET_ENV === 'extension'
};

/***/ }),

/***/ "../extension-base/src/utils/eth.ts":
/*!******************************************!*\
  !*** ../extension-base/src/utils/eth.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transaction": () => (/* binding */ Transaction),
/* harmony export */   "anyNumberToBN": () => (/* binding */ anyNumberToBN),
/* harmony export */   "createTransactionFromRLP": () => (/* binding */ createTransactionFromRLP),
/* harmony export */   "signatureToHex": () => (/* binding */ signatureToHex)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "../../node_modules/bignumber.js/bignumber.mjs");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "../../node_modules/ethers/lib.esm/transaction/transaction.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/hex/stripPrefix.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/number/toHex.js");
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0




const hexToNumberString = s => {
  const temp = parseInt(s, 16);
  if (isNaN(temp)) {
    return '0';
  } else {
    return temp.toString();
  }
};
class Transaction {
  constructor(nonce, gasPrice, gas, to, value, data, ethereumChainId) {
    this.nonce = hexToNumberString(nonce);
    this.gasPrice = hexToNumberString(gasPrice);
    this.gas = hexToNumberString(gas);
    this.to = to;
    this.value = hexToNumberString(value);
    this.data = data || '';
    this.ethereumChainId = parseInt(ethereumChainId, 16).toString();
    this.isSafe = true;
  }
}
const anyNumberToBN = value => {
  if (typeof value === 'string' || typeof value === 'number') {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](value);
  } else if (typeof value === 'undefined') {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](0);
  } else {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](value.toNumber());
  }
};
const createTransactionFromRLP = rlp => {
  try {
    var _transaction$gasPrice;
    const transaction = ethers__WEBPACK_IMPORTED_MODULE_1__.Transaction.from(rlp);
    const nonce = transaction.nonce.toString(16);
    const gasPrice = ((_transaction$gasPrice = transaction.gasPrice) === null || _transaction$gasPrice === void 0 ? void 0 : _transaction$gasPrice.toString(16)) || '';
    const gas = transaction.gasLimit.toString(16);
    const to = transaction.to || '';
    const value = transaction.value.toString(16);
    const data = transaction.data;
    const ethereumChainId = transaction.chainId.toString(16);
    return new Transaction(nonce, gasPrice, gas, to, value, data, ethereumChainId);
  } catch (e) {
    console.log(e.message);
    return null;
  }
};
const signatureToHex = sig => {
  const v = parseInt(sig.v);
  const r = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.hexStripPrefix)(sig.r);
  const s = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.hexStripPrefix)(sig.s);
  const hexR = r.length % 2 === 1 ? `0${r}` : r;
  const hexS = s.length % 2 === 1 ? `0${s}` : s;
  const hexV = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.hexStripPrefix)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_3__.numberToHex)(v));
  return hexR + hexS + hexV;
};

/***/ }),

/***/ "../extension-base/src/utils/index.ts":
/*!********************************************!*\
  !*** ../extension-base/src/utils/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODULE_SUPPORT": () => (/* reexport safe */ _subwallet_extension_base_utils_environment__WEBPACK_IMPORTED_MODULE_4__.MODULE_SUPPORT),
/* harmony export */   "RuntimeInfo": () => (/* reexport safe */ _subwallet_extension_base_utils_environment__WEBPACK_IMPORTED_MODULE_4__.RuntimeInfo),
/* harmony export */   "TARGET_ENV": () => (/* reexport safe */ _subwallet_extension_base_utils_environment__WEBPACK_IMPORTED_MODULE_4__.TARGET_ENV),
/* harmony export */   "addLazy": () => (/* reexport safe */ _lazy__WEBPACK_IMPORTED_MODULE_14__.addLazy),
/* harmony export */   "canDerive": () => (/* reexport safe */ _canDerive__WEBPACK_IMPORTED_MODULE_1__.canDerive),
/* harmony export */   "categoryAddresses": () => (/* binding */ categoryAddresses),
/* harmony export */   "categoryNetworks": () => (/* binding */ categoryNetworks),
/* harmony export */   "convertFundStatus": () => (/* binding */ convertFundStatus),
/* harmony export */   "convertToEvmAddress": () => (/* binding */ convertToEvmAddress),
/* harmony export */   "createRegistry": () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_15__.createRegistry),
/* harmony export */   "detectTranslate": () => (/* reexport safe */ _translate__WEBPACK_IMPORTED_MODULE_16__.detectTranslate),
/* harmony export */   "filterAddressByNetworkKey": () => (/* binding */ filterAddressByNetworkKey),
/* harmony export */   "filterAndSortingAccountByAuthType": () => (/* binding */ filterAndSortingAccountByAuthType),
/* harmony export */   "getCurrentProvider": () => (/* binding */ getCurrentProvider),
/* harmony export */   "getDomainFromUrl": () => (/* binding */ getDomainFromUrl),
/* harmony export */   "getNftProvider": () => (/* binding */ getNftProvider),
/* harmony export */   "getOS": () => (/* reexport safe */ _subwallet_extension_base_utils_environment__WEBPACK_IMPORTED_MODULE_4__.getOS),
/* harmony export */   "hexToStr": () => (/* binding */ hexToStr),
/* harmony export */   "hexToUTF16": () => (/* binding */ hexToUTF16),
/* harmony export */   "inJestTest": () => (/* binding */ inJestTest),
/* harmony export */   "isAccountAll": () => (/* binding */ isAccountAll),
/* harmony export */   "isAddressesEqual": () => (/* binding */ isAddressesEqual),
/* harmony export */   "isDef": () => (/* binding */ isDef),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isSameAddress": () => (/* binding */ isSameAddress),
/* harmony export */   "isUrl": () => (/* binding */ isUrl),
/* harmony export */   "isValidProvider": () => (/* binding */ isValidProvider),
/* harmony export */   "isValidSubstrateAddress": () => (/* binding */ isValidSubstrateAddress),
/* harmony export */   "mergeNetworkProviders": () => (/* binding */ mergeNetworkProviders),
/* harmony export */   "nonEmptyArr": () => (/* binding */ nonEmptyArr),
/* harmony export */   "notDef": () => (/* binding */ notDef),
/* harmony export */   "parseIpfsLink": () => (/* binding */ parseIpfsLink),
/* harmony export */   "parseRawNumber": () => (/* binding */ parseRawNumber),
/* harmony export */   "reformatAddress": () => (/* binding */ reformatAddress),
/* harmony export */   "removeLazy": () => (/* reexport safe */ _lazy__WEBPACK_IMPORTED_MODULE_14__.removeLazy),
/* harmony export */   "stripUrl": () => (/* binding */ stripUrl),
/* harmony export */   "sumBN": () => (/* binding */ sumBN),
/* harmony export */   "toUnit": () => (/* binding */ toUnit),
/* harmony export */   "uniqueStringArray": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_13__.uniqueStringArray),
/* harmony export */   "utf16ToString": () => (/* binding */ utf16ToString),
/* harmony export */   "waitTimeout": () => (/* binding */ waitTimeout)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-base/constants */ "../extension-base/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_base_utils_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment */ "../extension-base/src/utils/environment.ts");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "../../node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/is/hex.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/hex/toU8a.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/bn.js/lib/bn.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_polkadot_util__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/assert.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/decode.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/encode.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/encode.js");
/* harmony import */ var _canDerive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canDerive */ "../extension-base/src/utils/canDerive.ts");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array */ "../extension-base/src/utils/array.ts");
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lazy */ "../extension-base/src/utils/lazy.ts");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./registry */ "../extension-base/src/utils/registry.ts");
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./translate */ "../extension-base/src/utils/translate.ts");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")["Buffer"];
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0








const notDef = x => x === null || typeof x === 'undefined';
const isDef = x => !notDef(x);
const nonEmptyArr = x => Array.isArray(x) && x.length > 0;
const isEmptyArray = x => !Array.isArray(x) || Array.isArray(x) && x.length === 0;
function isAccountAll(address) {
  return address === _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_2__.ALL_ACCOUNT_KEY;
}
const isMobile = _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_3__.MobileOS.includes((0,_subwallet_extension_base_utils_environment__WEBPACK_IMPORTED_MODULE_4__.getOS)());
function reformatAddress(address, networkPrefix = 42, isEthereum = false) {
  try {
    if (!address || address === '') {
      return '';
    }
    if ((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_5__.isEthereumAddress)(address)) {
      return address;
    }
    if (isAccountAll(address)) {
      return address;
    }
    const publicKey = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.decodeAddress)(address);
    if (isEthereum) {
      return (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_7__.ethereumEncode)(publicKey);
    }
    if (networkPrefix < 0) {
      return address;
    }
    return (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_8__.encodeAddress)(publicKey, networkPrefix);
  } catch (e) {
    console.warn('Get error while reformat address', address, e);
    return address;
  }
}
function filterAddressByNetworkKey(addresses, networkKey, isEthereum) {
  if (isEthereum) {
    return addresses.filter(address => {
      return (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_5__.isEthereumAddress)(address);
    });
  } else {
    return addresses.filter(address => {
      return !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_5__.isEthereumAddress)(address);
    });
  }
}
function categoryAddresses(addresses) {
  const substrateAddresses = [];
  const evmAddresses = [];
  addresses.forEach(address => {
    if ((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_5__.isEthereumAddress)(address)) {
      evmAddresses.push(address);
    } else {
      substrateAddresses.push(address);
    }
  });
  return [substrateAddresses, evmAddresses];
}
function categoryNetworks(networks) {
  const substrateAddresses = [];
  const evmAddresses = [];
  return [substrateAddresses, evmAddresses];
}
function convertToEvmAddress(substrateAddress) {
  const addressBytes = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.decodeAddress)(substrateAddress);
  return (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_7__.ethereumEncode)('0x' + Buffer.from(addressBytes.subarray(0, 20)).toString('hex'));
}
function isUrl(targetString) {
  let url;
  try {
    url = new URL(targetString);
  } catch (_) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:' || url.protocol === 'wss:';
}
function inJestTest() {
  return ({"NODE_ENV":"development","PKG_NAME":"@subwallet/extension-koni","PKG_VERSION":"1.1.17-0","TARGET_ENV":"extension","ID_PREDIX":"sw-ext-","TRANSAK_API_KEY":undefined,"COINBASE_PAY_ID":undefined,"TRANSAK_TEST_MODE":true,"BANXA_TEST_MODE":true}).JEST_WORKER_ID !== undefined;
}
const parseIpfsLink = ipfsLink => {
  if (!ipfsLink.includes('ipfs://ipfs/')) {
    return ipfsLink;
  }
  return ipfsLink.split('ipfs://ipfs/')[1];
};
function hexToStr(buf) {
  let str = '';
  let hexStart = buf.indexOf('0x');
  if (hexStart < 0) {
    hexStart = 0;
  } else {
    hexStart = 2;
  }
  for (let i = hexStart, strLen = buf.length; i < strLen; i += 2) {
    const ch = buf[i] + buf[i + 1];
    const num = parseInt(ch, 16);

    // eslint-disable-next-line eqeqeq
    if (num != 0) {
      str += String.fromCharCode(num);
    } else {
      break;
    }
  }
  return str;
}

// eslint-disable-next-line camelcase
function utf16ToString(uInt16Array) {
  let str = '';

  // eslint-disable-next-line camelcase
  for (let i = 0; i < uInt16Array.length; i++) {
    str += String.fromCharCode(uInt16Array[i]);
  }
  return str;
}
function hexToUTF16(hex) {
  const buf = [];
  let hexStart = hex.indexOf('0x');
  if (hexStart < 0) {
    hexStart = 0;
  } else {
    hexStart = 2;
  }
  for (let i = hexStart, strLen = hex.length; i < strLen; i += 2) {
    const ch = hex[i] + hex[i + 1];
    const num = parseInt(ch, 16);
    buf.push(num);
  }
  return new Uint8Array(buf);
}
const isValidSubstrateAddress = address => {
  try {
    (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_8__.encodeAddress)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_9__.isHex)(address) ? (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_10__.hexToU8a)(address) : (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_6__.decodeAddress)(address));
    return true;
  } catch (error) {
    return false;
  }
};
const toUnit = (balance, decimals) => {
  if (balance === 0) {
    return 0;
  }
  return balance / 10 ** decimals;
};
function sumBN(inputArr) {
  let rs = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_11___default())(0);
  inputArr.forEach(input => {
    rs = rs.add(input);
  });
  return rs;
}
const convertFundStatus = status => {
  if (status === 'Won' || status === 'Retiring') {
    return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_3__.CrowdloanParaState.COMPLETED;
  } else if (status === 'Started') {
    return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_3__.CrowdloanParaState.ONGOING;
  } else if (status === 'Dissolved') {
    return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_3__.CrowdloanParaState.FAILED;
  } else {
    return undefined;
  }
};
const isAddressesEqual = (addresses, prevAddresses) => {
  if (addresses.length !== prevAddresses.length) {
    return false;
  }
  for (const address of addresses) {
    if (!prevAddresses.includes(address)) {
      return false;
    }
  }
  return true;
};
const isValidProvider = provider => {
  if (isUrl(provider)) {
    return true;
  } else if (provider.startsWith('wss://') || provider.startsWith('light://')) {
    return true;
  }
  return false;
};
const getCurrentProvider = data => {
  if (!(data !== null && data !== void 0 && data.currentProvider)) {
    return null;
  }
  if (data.currentProvider.startsWith('custom') && data.customProviders) {
    return data.customProviders[data.currentProvider];
  } else {
    return data.providers[data.currentProvider];
  }
};
const getNftProvider = data => {
  if (data.nftProvider) {
    return data.providers[data.nftProvider];
  }
  return '';
};
function mergeNetworkProviders(customNetwork, predefinedNetwork) {
  // merge providers for 2 networks with the same genesisHash
  if (customNetwork.customProviders) {
    const parsedCustomProviders = {};
    const currentProvider = customNetwork.customProviders[customNetwork.currentProvider || ''] || '';
    const currentProviderMethod = currentProvider.startsWith('http') ? 'http' : 'ws';
    let parsedProviderKey = '';
    for (const customProvider of Object.values(customNetwork.customProviders)) {
      let exist = false;
      for (const [key, provider] of Object.entries(predefinedNetwork.providers)) {
        if (currentProvider === provider) {
          // point currentProvider to predefined
          parsedProviderKey = key;
        }
        if (provider === customProvider) {
          exist = true;
          break;
        }
      }
      if (!exist) {
        const index = Object.values(parsedCustomProviders).length;
        parsedCustomProviders[`custom_${index}`] = customProvider;
      }
    }
    for (const [key, parsedProvider] of Object.entries(parsedCustomProviders)) {
      if (currentProvider === parsedProvider) {
        parsedProviderKey = key;
      }
    }
    return {
      currentProviderMethod,
      parsedProviderKey,
      parsedCustomProviders
    };
  } else {
    return {
      currentProviderMethod: '',
      parsedProviderKey: '',
      parsedCustomProviders: {}
    };
  }
}
const filterAndSortingAccountByAuthType = (accounts, accountAuthType, sorting = false) => {
  let rs = [...accounts];
  rs = rs.filter(acc => acc.address !== 'ALL');
  if (accountAuthType === 'substrate') {
    rs = rs.filter(acc => acc.type !== 'ethereum');
  } else if (accountAuthType === 'evm') {
    rs = rs.filter(acc => acc.type === 'ethereum');
  } else {
    if (sorting) {
      rs.sort((acc, acc2) => {
        if (acc.type === 'ethereum' && acc2.type === 'ethereum' || acc.type !== 'ethereum' && acc2.type !== 'ethereum') {
          return 0;
        } else {
          return acc.type === 'ethereum' ? 1 : -1;
        }
      });
    }
  }
  return rs;
};
function parseRawNumber(value) {
  return parseFloat(value.replaceAll(',', ''));
}
function isSameAddress(address1, address2) {
  if ((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_5__.isEthereumAddress)(address1)) {
    return address1.toLowerCase() === address2.toLowerCase();
  }
  return reformatAddress(address1, 0) === reformatAddress(address2, 0); // TODO: maybe there's a better way
}

function getDomainFromUrl(url) {
  return url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
}
async function waitTimeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const stripUrl = url => {
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_12__.assert)(url && (url.startsWith('http:') || url.startsWith('https:') || url.startsWith('ipfs:') || url.startsWith('ipns:')), (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)('Invalid URL for provider'));
  const parts = url.split('/');
  return parts[2];
};






/***/ }),

/***/ "../extension-base/src/utils/lazy.ts":
/*!*******************************************!*\
  !*** ../extension-base/src/utils/lazy.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLazy": () => (/* binding */ addLazy),
/* harmony export */   "removeLazy": () => (/* binding */ removeLazy)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

const lazyMap = {};
function removeLazy(key) {
  if (lazyMap[key]) {
    clearTimeout(lazyMap[key].timeout);
    delete lazyMap[key];
  }
}

// Add or update new lazy thread
function addLazy(key, callback, lazyTime = 300, maxLazyTime = 3000, fireOnFirst = true) {
  const existed = lazyMap[key];
  const now = new Date().getTime();
  if (existed) {
    clearTimeout(existed.timeout);
    lazyMap[key] = {
      ...existed,
      callback
    };

    // Fire callback if last fire is too long
    if (now - existed.lastFire >= maxLazyTime) {
      callback();
      lazyMap[key].lastFire = now;
    } else {
      lazyMap[key].timeout = setTimeout(() => {
        // This will be fire in the last call of lazy thread
        callback();
        lazyMap[key].lastFire = new Date().getTime();
        removeLazy(key);
      }, lazyTime);
    }
  } else {
    if (fireOnFirst) {
      // Fire callback immediately in the first time
      callback();
      lazyMap[key] = {
        callback,
        lastFire: now
      };
    } else {
      lazyMap[key] = {
        callback,
        lastFire: now
      };
      lazyMap[key].timeout = setTimeout(() => {
        // This will be fire in the last call of lazy thread
        callback();
        lazyMap[key].lastFire = new Date().getTime();
        removeLazy(key);
      }, lazyTime);
    }
  }
}

/***/ }),

/***/ "../extension-base/src/utils/number.ts":
/*!*********************************************!*\
  !*** ../extension-base/src/utils/number.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BN_TEN": () => (/* binding */ BN_TEN),
/* harmony export */   "PREDEFINED_FORMATTER": () => (/* binding */ PREDEFINED_FORMATTER),
/* harmony export */   "balanceFormatter": () => (/* binding */ balanceFormatter),
/* harmony export */   "formatNumber": () => (/* binding */ formatNumber),
/* harmony export */   "toBNString": () => (/* binding */ toBNString)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "../../node_modules/bignumber.js/bignumber.mjs");
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0


const BN_TEN = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](10);
// Clear zero from end, use with decimal only
const clearZero = result => {
  let index = result.length - 1;
  while (result[index] === '0') {
    result = result.slice(0, index);
    index--;
  }
  return result;
};
const NUM_1T = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e12);
const TLIM = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e17);
const NUM_1B = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e9);
const BLIM = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e14);
const NUM_1M = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e6);
const NUM_100M = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e8);
const balanceFormatter = (input, metadata) => {
  const absGteOne = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](input).abs().gte(1);
  const minNumberFormat = (metadata === null || metadata === void 0 ? void 0 : metadata.minNumberFormat) || 2;
  const maxNumberFormat = (metadata === null || metadata === void 0 ? void 0 : metadata.maxNumberFormat) || 6;
  const [int, decimal = '0'] = input.split('.');
  let _decimal = '';
  if (absGteOne) {
    const intNumber = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](int);
    const max = BN_TEN.pow(maxNumberFormat);

    // If count of number in integer part greater or equal maxNumberFormat, do not show decimal
    if (intNumber.gte(max)) {
      if (intNumber.gte(NUM_100M)) {
        if (intNumber.gte(BLIM)) {
          if (intNumber.gte(TLIM)) {
            return `${intNumber.dividedBy(NUM_1T).toFixed(2)} T`;
          }
          return `${intNumber.dividedBy(NUM_1B).toFixed(2)} B`;
        }
        return `${intNumber.dividedBy(NUM_1M).toFixed(2)} M`;
      }
      return int;
    }

    // Get only minNumberFormat number at decimal
    if (decimal.length <= minNumberFormat) {
      _decimal = decimal;
    } else {
      _decimal = decimal.slice(0, minNumberFormat);
    }

    // Clear zero number for decimal
    _decimal = clearZero(_decimal);
  } else {
    // Index of cursor
    let index = 0;

    // Count of not zero number in decimal
    let current = 0;

    // Find a not zero number in decimal
    let metNotZero = false;

    // Get at least minNumberFormat number not 0 from index 0
    // If count of 0 number at prefix greater or equal maxNumberFormat should stop and return 0

    // current === minNumberFormat: get enough number
    // index === decimal.length: end of decimal
    // index === maxNumberFormat: reach limit of 0 number at prefix
    while (current < minNumberFormat && index < decimal.length && (index < maxNumberFormat || metNotZero)) {
      const _char = decimal[index];
      _decimal += _char;
      index++;
      if (_char !== '0') {
        metNotZero = true;
      }
      if (metNotZero) {
        current++;
      }
    }

    // Clear zero number for decimal
    _decimal = clearZero(_decimal);
  }
  if (_decimal) {
    return `${int}.${_decimal}`;
  }
  return int;
};
const PREDEFINED_FORMATTER = {
  balance: balanceFormatter
};
const toBNString = (input, decimal) => {
  const raw = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](input);
  return raw.multipliedBy(BN_TEN.pow(decimal)).toFixed();
};
const formatNumber = (input, decimal, formatter, metadata) => {
  const raw = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](input).dividedBy(BN_TEN.pow(decimal)).toFixed();
  return formatter(raw, metadata);
};

/***/ }),

/***/ "../extension-base/src/utils/registry.ts":
/*!***********************************************!*\
  !*** ../extension-base/src/utils/registry.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRegistry": () => (/* binding */ createRegistry)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _polkadot_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/types */ "../../node_modules/@polkadot/types/create/registry.js");
/* harmony import */ var _polkadot_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/types */ "../../node_modules/@polkadot/types/metadata/Metadata.js");
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0



const createRegistry = (chain, rawMetadata) => {
  var _chain$substrateInfo;
  const registry = new _polkadot_types__WEBPACK_IMPORTED_MODULE_0__.TypeRegistry();
  const metadata = new _polkadot_types__WEBPACK_IMPORTED_MODULE_1__.Metadata(registry, rawMetadata);
  registry.setMetadata(metadata);
  const tokenInfo = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_2__._getChainNativeTokenBasicInfo)(chain);
  registry.setChainProperties(registry.createType('ChainProperties', {
    ss58Format: ((_chain$substrateInfo = chain.substrateInfo) === null || _chain$substrateInfo === void 0 ? void 0 : _chain$substrateInfo.addressPrefix) || 42,
    tokenDecimals: tokenInfo.decimals,
    tokenSymbol: tokenInfo.symbol
  }));
  return registry;
};

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

/***/ "../extension-dapp/src/wrapBytes.ts":
/*!******************************************!*\
  !*** ../extension-dapp/src/wrapBytes.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ETHEREUM": () => (/* binding */ ETHEREUM),
/* harmony export */   "POSTFIX": () => (/* binding */ POSTFIX),
/* harmony export */   "PREFIX": () => (/* binding */ PREFIX),
/* harmony export */   "isWrapped": () => (/* binding */ isWrapped),
/* harmony export */   "unwrapBytes": () => (/* binding */ unwrapBytes),
/* harmony export */   "wrapBytes": () => (/* binding */ wrapBytes)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/u8a/wrap.js");
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0


const ETHEREUM = _polkadot_util__WEBPACK_IMPORTED_MODULE_0__.U8A_WRAP_ETHEREUM;
const POSTFIX = _polkadot_util__WEBPACK_IMPORTED_MODULE_0__.U8A_WRAP_POSTFIX;
const PREFIX = _polkadot_util__WEBPACK_IMPORTED_MODULE_0__.U8A_WRAP_PREFIX;
const isWrapped = _polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aIsWrapped;
const unwrapBytes = _polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aUnwrapBytes;
const wrapBytes = _polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aWrapBytes;

/***/ }),

/***/ "../extension-inject/src/crossenv.ts":
/*!*******************************************!*\
  !*** ../extension-inject/src/crossenv.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/x-global */ "../../node_modules/@polkadot/x-global/index.js");
// Copyright 2019-2022 @polkadot/extension-inject authors & contributors
// SPDX-License-Identifier: Apache-2.0


(0,_polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__.exposeGlobal)('chrome', _polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__.xglobal.browser);

/***/ }),

/***/ "?9d5c":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2e65":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?745d":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24tYmFzZV9zcmNfZGVmYXVsdHNfdHMtZXh0ZW5zaW9uLWJhc2Vfc3JjX2tvbmlfYXBpX2RvdHNhbWFfZG9tYWluX3RzLWV4dGVuc2lvLWQxZTFiYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBMEJPLElBQUtBLGtCQUFrQjtBQVE3QixXQVJXQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtBQUFBLEdBQWxCQSxrQkFBa0IsS0FBbEJBLGtCQUFrQjtBQXVHOUI7O0FBRU8sSUFBS0MsV0FBVztBQUd0QixXQUhXQSxXQUFXO0VBQVhBLFdBQVc7RUFBWEEsV0FBVztBQUFBLEdBQVhBLFdBQVcsS0FBWEEsV0FBVztBQThEaEIsSUFBS0MsWUFBWTtBQU12QixXQU5XQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtFQUFaQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtBQUFBLEdBQVpBLFlBQVksS0FBWkEsWUFBWTtBQVFqQixJQUFLQyxRQUFRO0FBR25CLFdBSFdBLFFBQVE7RUFBUkEsUUFBUTtFQUFSQSxRQUFRO0FBQUEsR0FBUkEsUUFBUSxLQUFSQSxRQUFRO0FBS2IsSUFBS0Msa0JBQWtCO0FBSTdCLFdBSldBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtBQUFBLEdBQWxCQSxrQkFBa0IsS0FBbEJBLGtCQUFrQjtBQWlHdkIsSUFBS0MsWUFBWTtBQUd2QixXQUhXQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtBQUFBLEdBQVpBLFlBQVksS0FBWkEsWUFBWTtBQXVIakIsSUFBS0MsZ0JBQWdCO0FBRzNCLFdBSFdBLGdCQUFnQjtFQUFoQkEsZ0JBQWdCO0VB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Ozs7QUNYckM7QUFDQTs7QUFFMkQ7QUFFM0RPLGdFQUFZLENBQUMsUUFBUSxFQUFFQywrREFBZSxDQUFDOzs7Ozs7Ozs7O0FDTHZDOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL2JhY2tncm91bmQvS29uaVR5cGVzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9jb25zdGFudHMvc3Rha2luZy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9jb25zdGFudHMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9rb25pL2FwaS9kb3RzYW1hL2RvbWFpbi50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9rb25pL2FwaS9zdGFraW5nL2JvbmRpbmcvYXN0YXIudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMva29uaS9hcGkvc3Rha2luZy9ib25kaW5nL3V0aWxzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvaGFuZGxlci90eXBlcy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3R5cGVzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvc2V0dGluZy1zZXJ2aWNlL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy93YWxsZXQtY29ubmVjdC1zZXJ2aWNlL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy93YWxsZXQtY29ubmVjdC1zZXJ2aWNlL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvd2FsbGV0LWNvbm5lY3Qtc2VydmljZS90eXBlcy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9hcnJheS50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9jYW5EZXJpdmUudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvZXRoLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL2xhenkudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvbnVtYmVyLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL3JlZ2lzdHJ5LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL3RyYW5zbGF0ZS50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1kYXBwL3NyYy93cmFwQnl0ZXMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24taW5qZWN0L3NyYy9jcm9zc2Vudi50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pL2lnbm9yZWR8QzpcXFVzZXJzXFxzaGFybVxcRG93bmxvYWRzXFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxub2RlX21vZHVsZXNcXEBzdGFibGVsaWJcXHJhbmRvbVxcbGliXFxzb3VyY2V8Y3J5cHRvIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvaWdub3JlZHxDOlxcVXNlcnNcXHNoYXJtXFxEb3dubG9hZHNcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS9pZ25vcmVkfEM6XFxVc2Vyc1xcc2hhcm1cXERvd25sb2Fkc1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcbm9kZV9tb2R1bGVzXFxldGhlcnNcXG5vZGVfbW9kdWxlc1xcQG5vYmxlXFxzZWNwMjU2azFcXGxpYlxcZXNtfGNyeXB0byJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24ta29uaSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQXNzZXRSZWYsIF9Bc3NldFR5cGUsIF9DaGFpbkFzc2V0LCBfQ2hhaW5JbmZvLCBfTXVsdGlDaGFpbkFzc2V0IH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uRXJyb3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvZXJyb3JzL1RyYW5zYWN0aW9uRXJyb3InO1xuaW1wb3J0IHsgQXV0aFVybHMsIFJlc29sdmVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL2hhbmRsZXJzL1N0YXRlJztcbmltcG9ydCB7IEFjY291bnRBdXRoVHlwZSwgQWNjb3VudEpzb24sIEFkZHJlc3NKc29uLCBBdXRob3JpemVSZXF1ZXN0LCBDb25maXJtYXRpb25SZXF1ZXN0QmFzZSwgUmVxdWVzdEFjY291bnRMaXN0LCBSZXF1ZXN0QWNjb3VudFN1YnNjcmliZSwgUmVxdWVzdEFjY291bnRVbnN1YnNjcmliZSwgUmVxdWVzdEF1dGhvcml6ZUNhbmNlbCwgUmVxdWVzdEF1dGhvcml6ZVJlamVjdCwgUmVxdWVzdEF1dGhvcml6ZVN1YnNjcmliZSwgUmVxdWVzdEF1dGhvcml6ZVRhYiwgUmVxdWVzdEN1cnJlbnRBY2NvdW50QWRkcmVzcywgUmVzcG9uc2VBdXRob3JpemVMaXN0LCBSZXNwb25zZUpzb25HZXRBY2NvdW50SW5mbywgU2VlZExlbmd0aHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvdHlwZXMnO1xuaW1wb3J0IHsgX0NIQUlOX1ZBTElEQVRJT05fRVJST1IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvaGFuZGxlci90eXBlcyc7XG5pbXBvcnQgeyBfQ2hhaW5TdGF0ZSwgX0V2bUFwaSwgX05ldHdvcmtVcHNlcnRQYXJhbXMsIF9TdWJzdHJhdGVBcGksIF9WYWxpZGF0ZUN1c3RvbUFzc2V0UmVxdWVzdCwgX1ZhbGlkYXRlQ3VzdG9tQXNzZXRSZXNwb25zZSwgRW5hYmxlQ2hhaW5QYXJhbXMsIEVuYWJsZU11bHRpQ2hhaW5QYXJhbXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgU1dUcmFuc2FjdGlvblJlc3BvbnNlLCBTV1RyYW5zYWN0aW9uUmVzdWx0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlL3R5cGVzJztcbmltcG9ydCB7IFdhbGxldENvbm5lY3ROb3RTdXBwb3J0UmVxdWVzdCwgV2FsbGV0Q29ubmVjdFNlc3Npb25SZXF1ZXN0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy93YWxsZXQtY29ubmVjdC1zZXJ2aWNlL3R5cGVzJztcbmltcG9ydCB7IEluamVjdGVkQWNjb3VudCwgSW5qZWN0ZWRBY2NvdW50V2l0aE1ldGEsIE1ldGFkYXRhRGVmQmFzZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWluamVjdC90eXBlcyc7XG5pbXBvcnQgeyBLZXlyaW5nUGFpciRKc29uLCBLZXlyaW5nUGFpciRNZXRhIH0gZnJvbSAnQHN1YndhbGxldC9rZXlyaW5nL3R5cGVzJztcbmltcG9ydCB7IEtleXJpbmdPcHRpb25zIH0gZnJvbSAnQHN1YndhbGxldC91aS1rZXlyaW5nL29wdGlvbnMvdHlwZXMnO1xuaW1wb3J0IHsgS2V5cmluZ0FkZHJlc3MsIEtleXJpbmdQYWlycyRKc29uIH0gZnJvbSAnQHN1YndhbGxldC91aS1rZXlyaW5nL3R5cGVzJztcbmltcG9ydCB7IFNlc3Npb25UeXBlcyB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L3R5cGVzL2Rpc3QvdHlwZXMvc2lnbi1jbGllbnQvc2Vzc2lvbic7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IFJlcXVlc3RBcmd1bWVudHMsIFRyYW5zYWN0aW9uQ29uZmlnIH0gZnJvbSAnd2ViMy1jb3JlJztcbmltcG9ydCB7IEpzb25ScGNQYXlsb2FkLCBKc29uUnBjUmVzcG9uc2UgfSBmcm9tICd3ZWIzLWNvcmUtaGVscGVycyc7XG5cbmltcG9ydCB7IFNpZ25lclJlc3VsdCB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy90eXBlcy9leHRyaW5zaWMnO1xuaW1wb3J0IHsgQk4gfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5pbXBvcnQgeyBIZXhTdHJpbmcgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC90eXBlcyc7XG5pbXBvcnQgeyBLZXlwYWlyVHlwZSB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0by90eXBlcyc7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uV2FybmluZyB9IGZyb20gJy4vd2FybmluZ3MvVHJhbnNhY3Rpb25XYXJuaW5nJztcblxuZXhwb3J0IGVudW0gUnVudGltZUVudmlyb25tZW50IHtcbiAgV2ViID0gJ1dlYicsXG4gIE5vZGUgPSAnTm9kZScsXG4gIEV4dGVuc2lvbkNocm9tZSA9ICdFeHRlbnNpb24gKENocm9tZSknLFxuICBFeHRlbnNpb25GaXJlZm94ID0gJ0V4dGVuc2lvbiAoRmlyZWZveCknLFxuICBXZWJXb3JrZXIgPSAnV2ViIFdvcmtlcicsXG4gIFNlcnZpY2VXb3JrZXIgPSAnU2VydmljZSBXb3JrZXInLFxuICBVbmtub3duID0gJ1Vua25vd24nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJ1bnRpbWVFbnZpcm9ubWVudEluZm8ge1xuICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50O1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIGhvc3Q/OiBzdHJpbmc7XG4gIHByb3RvY29sPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBUYXJnZXRFbnZpcm9ubWVudCA9ICdleHRlbnNpb24nIHwgJ3dlYmFwcCcgfCAnd2ViLXJ1bm5lcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW52aXJvbm1lbnRTdXBwb3J0IHtcbiAgTUFOVEFfWks6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZUluZm8ge1xuICBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+O1xuICBjaGFpblN0YXRlTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5TdGF0ZT47XG4gIGNoYWluQXBpTWFwOiBBcGlNYXA7XG4gIGN1cnJlbnRBY2NvdW50SW5mbzogQ3VycmVudEFjY291bnRJbmZvO1xuICBhc3NldFJlZ2lzdHJ5OiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5Bc3NldD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNzZXRTZXR0aW5nIHtcbiAgdmlzaWJsZTogYm9vbGVhbixcbiAgLy8gcmVzdHJpY3Rpb25zIG9uIGFzc2V0cyBjYW4gYmUgaW1wbGVtZW50ZWQgbGF0ZXJcbn1cblxuLy8vIFJlcXVlc3QgQXV0aFxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhSZXF1ZXN0VjIgZXh0ZW5kcyBSZXNvbHZlcjxSZXN1bHRSZXNvbHZlcj4ge1xuICBpZDogc3RyaW5nO1xuICBpZFN0cjogc3RyaW5nO1xuICByZXF1ZXN0OiBSZXF1ZXN0QXV0aG9yaXplVGFiO1xuICB1cmw6IHN0cmluZztcbiAgYWNjb3VudEF1dGhUeXBlOiBBY2NvdW50QXV0aFR5cGVcbn1cblxuLy8vIE1hbmFnZSBBdXRoXG5cbi8vIEdldCBBdXRoXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6ZUFwcHJvdmVWMiB7XG4gIGlkOiBzdHJpbmc7XG4gIGFjY291bnRzOiBzdHJpbmdbXTtcbn1cblxuLy8gQXV0aCBBbGwgc2l0ZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBdXRob3JpemF0aW9uQWxsIHtcbiAgY29ubmVjdFZhbHVlOiBib29sZWFuO1xufVxuXG4vLyBNYW5hZ2Ugc2l0ZSBhdXRoIChhbGwgYWxsb3dlZC91bkFsbG93ZWQpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6YXRpb24gZXh0ZW5kcyBSZXF1ZXN0QXV0aG9yaXphdGlvbkFsbCB7XG4gIHVybDogc3RyaW5nO1xufVxuXG4vLyBNYW5hZ2Ugc2luZ2xlIGF1dGggd2l0aCBzaW5nbGUgYWNjb3VudFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBdXRob3JpemF0aW9uUGVyQWNjb3VudCBleHRlbmRzIFJlcXVlc3RBdXRob3JpemF0aW9uIHtcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuXG4vLyBNYW5hZ2Ugc2luZ2xlIHNpdGUgd2l0aCBtdWx0aSBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6YXRpb25QZXJTaXRlIHtcbiAgaWQ6IHN0cmluZztcbiAgdmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcbn1cblxuLy8gTWFuYWdlIHNpdGUgYmxvY2tcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXphdGlvbkJsb2NrIHtcbiAgaWQ6IHN0cmluZztcbiAgY29ubmVjdGVkVmFsdWU6IGJvb2xlYW47XG59XG5cbi8vIEZvcmdldCBzaXRlIGF1dGhcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Rm9yZ2V0U2l0ZSB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdFJlc29sdmVyIHtcbiAgcmVzdWx0OiBib29sZWFuO1xuICBhY2NvdW50czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVqZWN0UmVzb2x2ZXIge1xuICBlcnJvcjogRXJyb3I7XG4gIGFjY291bnRzOiBzdHJpbmdbXTtcbn1cblxuLy8vIFN0YWtpbmcgc3Vic2NyaWJlXG5cbmV4cG9ydCBlbnVtIFN0YWtpbmdUeXBlIHtcbiAgTk9NSU5BVEVEID0gJ25vbWluYXRlZCcsXG4gIFBPT0xFRCA9ICdwb29sZWQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtpbmdSZXdhcmRJdGVtIHtcbiAgc3RhdGU6IEFQSUl0ZW1TdGF0ZSxcbiAgbmFtZTogc3RyaW5nLFxuICBjaGFpbjogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIHR5cGU6IFN0YWtpbmdUeXBlLFxuXG4gIGxhdGVzdFJld2FyZD86IHN0cmluZyxcbiAgdG90YWxSZXdhcmQ/OiBzdHJpbmcsXG4gIHRvdGFsU2xhc2g/OiBzdHJpbmcsXG4gIHVuY2xhaW1lZFJld2FyZD86IHN0cmluZ1xufVxuZXhwb3J0IGludGVyZmFjZSBVbmxvY2tpbmdTdGFrZUluZm8ge1xuICBjaGFpbjogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIHR5cGU6IFN0YWtpbmdUeXBlLFxuXG4gIG5leHRXaXRoZHJhd2FsOiBudW1iZXIsXG4gIHJlZGVlbWFibGU6IG51bWJlcixcbiAgbmV4dFdpdGhkcmF3YWxBbW91bnQ6IG51bWJlcixcbiAgbmV4dFdpdGhkcmF3YWxBY3Rpb24/OiBzdHJpbmcsXG4gIHZhbGlkYXRvckFkZHJlc3M/OiBzdHJpbmcgLy8gdmFsaWRhdG9yIHRvIHVuc3Rha2UgZnJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtpbmdJdGVtIHtcbiAgbmFtZTogc3RyaW5nLFxuICBjaGFpbjogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIHR5cGU6IFN0YWtpbmdUeXBlLFxuXG4gIGJhbGFuY2U/OiBzdHJpbmcsXG4gIGFjdGl2ZUJhbGFuY2U/OiBzdHJpbmcsXG4gIHVubG9ja2luZ0JhbGFuY2U/OiBzdHJpbmcsXG4gIG5hdGl2ZVRva2VuOiBzdHJpbmcsXG4gIHVuaXQ/OiBzdHJpbmcsXG5cbiAgc3RhdGU6IEFQSUl0ZW1TdGF0ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtpbmdKc29uIHtcbiAgcmVzZXQ/OiBib29sZWFuLFxuICByZWFkeT86IGJvb2xlYW4sXG4gIGRldGFpbHM6IFN0YWtpbmdJdGVtW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFraW5nUmV3YXJkSnNvbiB7XG4gIHJlYWR5OiBib29sZWFuO1xuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBTdGFraW5nUmV3YXJkSXRlbT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpY2VKc29uIHtcbiAgcmVhZHk/OiBib29sZWFuLFxuICBjdXJyZW5jeTogc3RyaW5nLFxuICBwcmljZU1hcDogUmVjb3JkPHN0cmluZywgbnVtYmVyPixcbiAgcHJpY2UyNGhNYXA6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbn1cblxuZXhwb3J0IGVudW0gQVBJSXRlbVN0YXRlIHtcbiAgUEVORElORyA9ICdwZW5kaW5nJyxcbiAgUkVBRFkgPSAncmVhZHknLFxuICBDQUNIRUQgPSAnY2FjaGVkJyxcbiAgRVJST1IgPSAnZXJyb3InLFxuICBOT1RfU1VQUE9SVCA9ICdub3Rfc3VwcG9ydCdcbn1cblxuZXhwb3J0IGVudW0gUk1SS19WRVIge1xuICBWRVJfMSA9ICcxLjAuMCcsXG4gIFZFUl8yID0gJzIuMC4wJ1xufVxuXG5leHBvcnQgZW51bSBDcm93ZGxvYW5QYXJhU3RhdGUge1xuICBPTkdPSU5HID0gJ29uZ29pbmcnLFxuICBDT01QTEVURUQgPSAnY29tcGxldGVkJyxcbiAgRkFJTEVEID0gJ2ZhaWxlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZnRJdGVtIHtcbiAgLy8gbXVzdC1oYXZlXG4gIGlkOiBzdHJpbmc7XG4gIGNoYWluOiBzdHJpbmc7XG4gIGNvbGxlY3Rpb25JZDogc3RyaW5nO1xuICBvd25lcjogc3RyaW5nO1xuICBvcmlnaW5Bc3NldD86IHN0cmluZztcblxuICBuYW1lPzogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbiAgZXh0ZXJuYWxVcmw/OiBzdHJpbmc7XG4gIHJhcml0eT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHByb3BlcnRpZXM/OiBSZWNvcmQ8YW55LCBhbnk+IHwgbnVsbDtcbiAgdHlwZT86IF9Bc3NldFR5cGUuRVJDNzIxIHwgX0Fzc2V0VHlwZS5QU1AzNCB8IFJNUktfVkVSOyAvLyBmb3Igc2VuZGluZ1xuICBybXJrX3Zlcj86IFJNUktfVkVSO1xuICBvbkNoYWluT3B0aW9uPzogYW55OyAvLyBmb3Igc2VuZGluZyBQU1AtMzQgdG9rZW5zLCBzaG91bGQgYmUgZG9uZSBiZXR0ZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZnRDb2xsZWN0aW9uIHtcbiAgLy8gbXVzdC1oYXZlXG4gIGNvbGxlY3Rpb25JZDogc3RyaW5nO1xuICBjaGFpbjogc3RyaW5nO1xuICBvcmlnaW5Bc3NldD86IHN0cmluZztcblxuICBjb2xsZWN0aW9uTmFtZT86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGl0ZW1Db3VudD86IG51bWJlcjtcbiAgZXh0ZXJuYWxVcmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZ0SnNvbiB7XG4gIHRvdGFsOiBudW1iZXI7XG4gIG5mdExpc3Q6IEFycmF5PE5mdEl0ZW0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdENvbGxlY3Rpb25Kc29uIHtcbiAgcmVhZHk6IGJvb2xlYW47XG4gIG5mdENvbGxlY3Rpb25MaXN0OiBBcnJheTxOZnRDb2xsZWN0aW9uPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUl0ZW0ge1xuICBnZW5lc2lzSGFzaDogc3RyaW5nO1xuICBzcGVjVmVyc2lvbjogc3RyaW5nO1xuICBoZXhWYWx1ZTogSGV4U3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuQmFsYW5jZVJhdyB7XG4gIHJlc2VydmVkOiBCTixcbiAgZnJvemVuOiBCTixcbiAgZnJlZTogQk5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdWJzdHJhdGVCYWxhbmNlIHtcbiAgcmVzZXJ2ZWQ/OiBzdHJpbmcsXG4gIG1pc2NGcm96ZW4/OiBzdHJpbmcsXG4gIGZlZUZyb3plbj86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhbGFuY2VJdGVtIHtcbiAgLy8gbWV0YWRhdGFcbiAgdG9rZW5TbHVnOiBzdHJpbmcsXG4gIHN0YXRlOiBBUElJdGVtU3RhdGUsXG4gIHRpbWVzdGFtcD86IG51bWJlclxuXG4gIC8vIG11c3QtaGF2ZSwgdG90YWwgPSBmcmVlICsgbG9ja2VkXG4gIGZyZWU6IHN0cmluZyxcbiAgbG9ja2VkOiBzdHJpbmcsXG5cbiAgLy8gc3Vic3RyYXRlIGZpZWxkc1xuICBzdWJzdHJhdGVJbmZvPzogU3Vic3RyYXRlQmFsYW5jZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhbGFuY2VKc29uIHtcbiAgcmVzZXQ/OiBib29sZWFuLFxuICBkZXRhaWxzOiBSZWNvcmQ8c3RyaW5nLCBCYWxhbmNlSXRlbT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcm93ZGxvYW5JdGVtIHtcbiAgc3RhdGU6IEFQSUl0ZW1TdGF0ZSxcbiAgcGFyYVN0YXRlPzogQ3Jvd2Rsb2FuUGFyYVN0YXRlLFxuICBjb250cmlidXRlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcm93ZGxvYW5Kc29uIHtcbiAgcmVzZXQ/OiBib29sZWFuLFxuICBkZXRhaWxzOiBSZWNvcmQ8c3RyaW5nLCBDcm93ZGxvYW5JdGVtPlxufVxuXG5leHBvcnQgdHlwZSBOZXRXb3JrR3JvdXAgPSAnUkVMQVlfQ0hBSU4nIHwgJ1BPTEtBRE9UX1BBUkFDSEFJTicgfCAnS1VTQU1BX1BBUkFDSEFJTicgfCAnTUFJTl9ORVQnIHwgJ1RFU1RfTkVUJyB8ICdVTktOT1dOJztcblxuZXhwb3J0IGVudW0gQ29udHJhY3RUeXBlIHtcbiAgd2FzbSA9ICd3YXNtJyxcbiAgZXZtID0gJ2V2bSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrSnNvbiB7XG4gIC8vIEdlbmVyYWwgSW5mb3JtYXRpb25cbiAga2V5OiBzdHJpbmc7IC8vIEtleSBvZiBuZXR3b3JrIGluIE5ldHdvcmtNYXBcbiAgY2hhaW46IHN0cmluZzsgLy8gTmFtZSBvZiB0aGUgbmV0d29ya1xuICBpY29uPzogc3RyaW5nOyAvLyBJY29uIG5hbWUsIGF2YWlsYWJsZSB3aXRoIGtub3duIG5ldHdvcmtcbiAgYWN0aXZlOiBib29sZWFuOyAvLyBOZXR3b3JrIGlzIGFjdGl2ZSBvciBub3RcblxuICAvLyBQcm92aWRlciBJbmZvcm1hdGlvblxuICBwcm92aWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47IC8vIFByZWRlZmluZWQgcHJvdmlkZXIgbWFwXG4gIGN1cnJlbnRQcm92aWRlcjogc3RyaW5nIHwgbnVsbDsgLy8gQ3VycmVudCBwcm92aWRlciBrZXlcbiAgY3VycmVudFByb3ZpZGVyTW9kZTogJ2h0dHAnIHwgJ3dzJzsgLy8gQ3VycmVudCBwcm92aWRlciBtb2RlLCBjb21wdXRlIGRlcGVuZCBvbiBwcm92aWRlciBwcm90b2NvbC4gdGhlIGZlYXR1cmUgbmVlZCB0byBrbm93IHRoaXMgdG8gZGVjaWRlIHVzZSBzdWJzY3JpYmUgb3IgY3JvbmpvYiB0byB1c2UgdGhpcyBmZWF0dXJlcy5cbiAgY3VzdG9tUHJvdmlkZXJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgLy8gQ3VzdG9tIHByb3ZpZGVyIG1hcCwgcHJvdmlkZXIgbmFtZSBzYW1lIHdpdGggcHJvdmlkZXIgbWFwXG4gIG5mdFByb3ZpZGVyPzogc3RyaW5nO1xuXG4gIC8vIE1ldGFkYXRhIGdldCBhZnRlciBjb25uZWN0IHRvIHByb3ZpZGVyXG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7IC8vIGlkZW50aWZpZXIgZm9yIG5ldHdvcmtcbiAgZ3JvdXBzOiBOZXRXb3JrR3JvdXBbXTtcbiAgc3M1OEZvcm1hdDogbnVtYmVyO1xuICBwYXJhSWQ/OiBudW1iZXI7XG4gIGNoYWluVHlwZT86ICdzdWJzdHJhdGUnIHwgJ2V0aGVyZXVtJztcbiAgY3Jvd2Rsb2FuVXJsPzogc3RyaW5nO1xuXG4gIC8vIEV0aGVyZXVtIHJlbGF0ZWQgaW5mb3JtYXRpb24gZm9yIHByZWRlZmluZWQgbmV0d29yayBvbmx5XG4gIGlzRXRoZXJldW0/OiBib29sZWFuOyAvLyBPbmx5IHNob3cgbmV0d29yayB3aXRoIGlzRXRoZXJldW09dHJ1ZSB3aGVuIHNlbGVjdCBvbmUgRXZtIGFjY291bnQgLy8gdXNlciBpbnB1dFxuICBldm1DaGFpbklkPzogbnVtYmVyO1xuXG4gIGlzSHlicmlkPzogYm9vbGVhbjtcblxuICAvLyBOYXRpdmUgdG9rZW4gaW5mb3JtYXRpb25cbiAgbmF0aXZlVG9rZW4/OiBzdHJpbmc7XG4gIGRlY2ltYWxzPzogbnVtYmVyO1xuXG4gIC8vIE90aGVyIGluZm9ybWF0aW9uXG4gIGNvaW5HZWNrb0tleT86IHN0cmluZzsgLy8gUHJvdmlkZXIga2V5IHRvIGdldCB0b2tlbiBwcmljZSBmcm9tIENvaW5HZWNrbyAvLyB1c2VyIGlucHV0XG4gIGJsb2NrRXhwbG9yZXI/OiBzdHJpbmc7IC8vIExpbmsgdG8gYmxvY2sgc2Nhbm5lciB0byBjaGVjayB0cmFuc2FjdGlvbiB3aXRoIGV4dHJpbnNpYyBoYXNoIC8vIHVzZXIgaW5wdXRcbiAgYWJpRXhwbG9yZXI/OiBzdHJpbmc7IC8vIExpbmsgdG8gYmxvY2sgc2Nhbm5lciB0byBjaGVjayB0cmFuc2FjdGlvbiB3aXRoIGV4dHJpbnNpYyBoYXNoIC8vIHVzZXIgaW5wdXRcbiAgZGVwZW5kZW5jaWVzPzogc3RyaW5nW107IC8vIEF1dG8gYWN0aXZlIG5ldHdvcmsgaW4gZGVwZW5kZW5jaWVzIGlmIGN1cnJlbnQgbmV0d29yayBpcyBhY3RpdmF0ZWRcbiAgZ2V0U3Rha2luZ09uQ2hhaW4/OiBib29sZWFuOyAvLyBzdXBwb3J0IGdldCBib25kZWQgb24gY2hhaW5cbiAgc3VwcG9ydEJvbmRpbmc/OiBib29sZWFuO1xuICBzdXBwb3J0U21hcnRDb250cmFjdD86IENvbnRyYWN0VHlwZVtdOyAvLyBpZiBuZXR3b3JrIHN1cHBvcnRzIFBTUCBzbWFydCBjb250cmFjdHNcblxuICBhcGlTdGF0dXM/OiBORVRXT1JLX1NUQVRVUztcbiAgcmVxdWVzdElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvbmF0ZUluZm8ge1xuICBrZXk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blRyYW5zZm9ybU9wdGlvblR5cGUge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldFdvcmtNZXRhZGF0YURlZiBleHRlbmRzIE1ldGFkYXRhRGVmQmFzZSB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbiAgZ3JvdXBzOiBOZXRXb3JrR3JvdXBbXTtcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbiAgcGFyYUlkPzogbnVtYmVyO1xuICBpc0F2YWlsYWJsZTogYm9vbGVhbjtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBhcGlTdGF0dXM6IE5FVFdPUktfU1RBVFVTO1xufVxuXG5leHBvcnQgdHlwZSBDdXJyZW50TmV0d29ya0luZm8gPSB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbiAgbmV0d29ya1ByZWZpeDogbnVtYmVyO1xuICBpY29uOiBzdHJpbmc7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7XG4gIGlzRXRoZXJldW06IGJvb2xlYW47XG4gIGlzUmVhZHk/OiBib29sZWFuOyAvLyBjaGVjayBpZiBjdXJyZW50IG5ldHdvcmsgaW5mbyBpcyBsaWZ0ZWQgZnJvbSBpbml0aWFsIHN0YXRlXG59XG5cbi8vIGFsbCBBY2NvdW50cyBhbmQgdGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbnQgQWNjb3VudFxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50c1dpdGhDdXJyZW50QWRkcmVzcyB7XG4gIGFjY291bnRzOiBBY2NvdW50SnNvbltdO1xuICBjdXJyZW50QWRkcmVzcz86IHN0cmluZztcbiAgY3VycmVudEdlbmVzaXNIYXNoPzogc3RyaW5nIHwgbnVsbDtcbiAgaXNTaG93QmFsYW5jZT86IGJvb2xlYW47IC8vIERlcHJlY2F0ZWQgYW5kIG1vdmUgdG8gc2V0dGluZ1xuICBhbGxBY2NvdW50TG9nbz86IHN0cmluZzsgLy8gRGVwcmVjYXRlZCBhbmQgbW92ZSB0byBzZXR0aW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uSW5wdXRBZGRyZXNzIHtcbiAgb3B0aW9uczogS2V5cmluZ09wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudEFjY291bnRJbmZvIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjdXJyZW50R2VuZXNpc0hhc2g6IHN0cmluZyB8IG51bGw7XG4gIGFsbEdlbmVzaXNIYXNoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBMYW5ndWFnZVR5cGUgPSAnZW4nXG58J3poJ1xufCdmcidcbnwndHInXG58J3BsJ1xufCd0aCdcbnwndXInXG58J3ZpJ1xufCdqYSdcbnwncnUnO1xuXG5leHBvcnQgdHlwZSBMYW5ndWFnZU9wdGlvblR5cGUgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IExhbmd1YWdlVHlwZTtcbn1cblxuZXhwb3J0IHR5cGUgQnJvd3NlckNvbmZpcm1hdGlvblR5cGUgPSAnZXh0ZW5zaW9uJ3wncG9wdXAnfCd3aW5kb3cnO1xuXG5leHBvcnQgZW51bSBXYWxsZXRVbmxvY2tUeXBlIHtcbiAgQUxXQVlTX1JFUVVJUkVEID0gJ2Fsd2F5c19yZXF1aXJlZCcsXG4gIFdIRU5fTkVFREVEID0gJ3doZW5fbmVlZGVkJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVaVNldHRpbmdzIHtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlVHlwZSxcbiAgYnJvd3NlckNvbmZpcm1hdGlvblR5cGU6IEJyb3dzZXJDb25maXJtYXRpb25UeXBlO1xuICBpc1Nob3daZXJvQmFsYW5jZTogYm9vbGVhbjtcbiAgaXNTaG93QmFsYW5jZTogYm9vbGVhbjtcbiAgYWNjb3VudEFsbExvZ286IHN0cmluZztcbiAgdGhlbWU6IFRoZW1lTmFtZXM7XG4gIGNhbWVyYTogYm9vbGVhbjtcbiAgdGltZUF1dG9Mb2NrOiBudW1iZXI7XG4gIHVubG9ja1R5cGU6IFdhbGxldFVubG9ja1R5cGU7XG4gIGVuYWJsZUNoYWluUGF0cm9sOiBib29sZWFuO1xuICAvLyBPbi1yYW1wIHNlcnZpY2UgYWNjb3VudCByZWZlcmVuY2VcbiAgd2FsbGV0UmVmZXJlbmNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTZXR0aW5nc1R5cGUgPSBVaVNldHRpbmdzO1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q2FtZXJhU2V0dGluZ3MgPSB7IGNhbWVyYTogYm9vbGVhbiB9O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q2hhbmdlVGltZUF1dG9Mb2NrID0geyBhdXRvTG9ja1RpbWU6IG51bWJlciB9O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VW5sb2NrVHlwZSA9IHsgdW5sb2NrVHlwZTogV2FsbGV0VW5sb2NrVHlwZSB9O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q2hhbmdlRW5hYmxlQ2hhaW5QYXRyb2wgPSB7IGVuYWJsZTogYm9vbGVhbiB9O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q2hhbmdlU2hvd1plcm9CYWxhbmNlID0geyBzaG93OiBib29sZWFuIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VMYW5ndWFnZSA9IHsgbGFuZ3VhZ2U6IExhbmd1YWdlVHlwZSB9O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q2hhbmdlU2hvd0JhbGFuY2UgPSB7IGVuYWJsZTogYm9vbGVhbiB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmRvbVRlc3RSZXF1ZXN0IHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIFRyYW5zYWN0aW9uRGlyZWN0aW9uIHtcbiAgU0VORCA9ICdzZW5kJyxcbiAgUkVDRUlWRUQgPSAncmVjZWl2ZWQnXG59XG5cbmV4cG9ydCBlbnVtIENoYWluVHlwZSB7XG4gIEVWTSA9ICdldm0nLFxuICBTVUJTVFJBVEUgPSAnc3Vic3RyYXRlJ1xufVxuXG5leHBvcnQgZW51bSBFeHRyaW5zaWNUeXBlIHtcbiAgVFJBTlNGRVJfQkFMQU5DRSA9ICd0cmFuc2Zlci5iYWxhbmNlJyxcbiAgVFJBTlNGRVJfVE9LRU4gPSAndHJhbnNmZXIudG9rZW4nLFxuICBUUkFOU0ZFUl9YQ00gPSAndHJhbnNmZXIueGNtJyxcbiAgU0VORF9ORlQgPSAnc2VuZF9uZnQnLFxuICBDUk9XRExPQU4gPSAnY3Jvd2Rsb2FuJyxcbiAgU1RBS0lOR19KT0lOX1BPT0wgPSAnc3Rha2luZy5qb2luX3Bvb2wnLFxuICBTVEFLSU5HX0xFQVZFX1BPT0wgPSAnc3Rha2luZy5sZWF2ZV9wb29sJyxcbiAgU1RBS0lOR19QT09MX1dJVEhEUkFXID0gJ3N0YWtpbmcucG9vbF93aXRoZHJhdycsXG4gIFNUQUtJTkdfQk9ORCA9ICdzdGFraW5nLmJvbmQnLFxuICBTVEFLSU5HX1VOQk9ORCA9ICdzdGFraW5nLnVuYm9uZCcsXG4gIFNUQUtJTkdfQ0xBSU1fUkVXQVJEID0gJ3N0YWtpbmcuY2xhaW1fcmV3YXJkJyxcbiAgU1RBS0lOR19XSVRIRFJBVyA9ICdzdGFraW5nLndpdGhkcmF3JyxcbiAgU1RBS0lOR19DT01QT1VORElORyA9ICdzdGFraW5nLmNvbXBvdW5kaW5nJyxcbiAgU1RBS0lOR19DQU5DRUxfQ09NUE9VTkRJTkcgPSAnc3Rha2luZy5jYW5jZWxfY29tcG91bmRpbmcnLFxuICBTVEFLSU5HX0NBTkNFTF9VTlNUQUtFID0gJ3N0YWtpbmcuY2FuY2VsX3Vuc3Rha2UnLFxuICBFVk1fRVhFQ1VURSA9ICdldm0uZXhlY3V0ZScsXG4gIFVOS05PV04gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRyaW5zaWNEYXRhVHlwZU1hcCB7XG4gIFtFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX0JBTEFOQ0VdOiBSZXF1ZXN0VHJhbnNmZXIsXG4gIFtFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1RPS0VOXTogUmVxdWVzdFRyYW5zZmVyLFxuICBbRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ01dOiBSZXF1ZXN0Q3Jvc3NDaGFpblRyYW5zZmVyLFxuICBbRXh0cmluc2ljVHlwZS5TRU5EX05GVF06IE5mdFRyYW5zYWN0aW9uUmVxdWVzdCxcbiAgW0V4dHJpbnNpY1R5cGUuQ1JPV0RMT0FOXTogYW55LFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0pPSU5fUE9PTF06IFJlcXVlc3RTdGFrZVBvb2xpbmdCb25kaW5nLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0xFQVZFX1BPT0xdOiBSZXF1ZXN0U3Rha2VQb29saW5nVW5ib25kaW5nLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0JPTkRdOiBSZXF1ZXN0U3Rha2VQb29saW5nQm9uZGluZyxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19VTkJPTkRdOiBSZXF1ZXN0VW5ib25kaW5nU3VibWl0LFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NMQUlNX1JFV0FSRF06IFJlcXVlc3RTdGFrZUNsYWltUmV3YXJkLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX1dJVEhEUkFXXTogUmVxdWVzdFN0YWtlV2l0aGRyYXdhbCxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19DT01QT1VORElOR106IFJlcXVlc3RUdXJpbmdTdGFrZUNvbXBvdW5kLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NBTkNFTF9DT01QT1VORElOR106IFJlcXVlc3RUdXJpbmdDYW5jZWxTdGFrZUNvbXBvdW5kLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NBTkNFTF9VTlNUQUtFXTogUmVxdWVzdFN0YWtlQ2FuY2VsV2l0aGRyYXdhbCxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19QT09MX1dJVEhEUkFXXTogYW55LFxuICBbRXh0cmluc2ljVHlwZS5FVk1fRVhFQ1VURV06IFRyYW5zYWN0aW9uQ29uZmlnLFxuICBbRXh0cmluc2ljVHlwZS5VTktOT1dOXTogYW55XG59XG5cbmV4cG9ydCBlbnVtIEV4dHJpbnNpY1N0YXR1cyB7XG4gIFFVRVVFRCA9ICdxdWV1ZWQnLCAvLyBUcmFuc2FjdGlvbiBpbiBxdWV1ZVxuICBTVUJNSVRUSU5HID0gJ3N1Ym1pdHRpbmcnLCAvLyBUcmFuc2FjdGlvbiBpbiBxdWV1ZVxuICBQUk9DRVNTSU5HID0gJ3Byb2Nlc3NpbmcnLCAvLyBUcmFuc2FjdGlvbiBpcyBzZW5kaW5nXG4gIFNVQ0NFU1MgPSAnc3VjY2VzcycsIC8vIFNlbmQgc3VjY2Vzc2Z1bGx5XG4gIEZBSUwgPSAnZmFpbCcsIC8vIFNlbmQgZmFpbGVkXG4gIENBTkNFTExFRCA9ICdjYW5jZWxsZWQnLCAvLyBJcyByZW1vdmUgYmVmb3JlIHNlbmRpbmdcbiAgVU5LTk9XTiA9ICd1bmtub3duJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR4SGlzdG9yeUl0ZW0ge1xuICB0aW1lOiBudW1iZXIgfCBzdHJpbmc7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbiAgaXNTdWNjZXNzOiBib29sZWFuO1xuICBhY3Rpb246IFRyYW5zYWN0aW9uRGlyZWN0aW9uO1xuICBleHRyaW5zaWNIYXNoOiBzdHJpbmc7XG5cbiAgY2hhbmdlPzogc3RyaW5nO1xuICBjaGFuZ2VTeW1ib2w/OiBzdHJpbmc7IC8vIGlmIHVuZGVmaW5lZCA9PiBtYWluIHRva2VuXG4gIGZlZT86IHN0cmluZztcbiAgZmVlU3ltYm9sPzogc3RyaW5nO1xuICAvLyBpZiB1bmRlZmluZWQgPT4gbWFpbiB0b2tlbiwgc29tZXRpbWUgXCJmZWVcIiB1c2VzIGRpZmZlcmVudCB0b2tlbiB0aGFuIFwiY2hhbmdlXCJcbiAgLy8gZXg6IHN1YiB0b2tlbiAoRE9ULCBBVVNELCBLU00sIC4uLikgb2YgQWNhbGEsIEthcnVyYSB1c2VzIG1haW4gdG9rZW4gdG8gcGF5IGZlZVxuICBvcmlnaW4/OiAnYXBwJyB8ICduZXR3b3JrJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtSnNvbiB7XG4gIGl0ZW1zOiBUeEhpc3RvcnlJdGVtW10sXG4gIHRvdGFsOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1Rva2VuSW5mbyB7XG4gIGRlY2ltYWxzOiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFtb3VudERhdGEgZXh0ZW5kcyBCYXNpY1Rva2VuSW5mbyB7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWENNVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mbyB7XG4gIGRlc3RpbmF0aW9uQ2hhaW46IHN0cmluZyxcbiAgb3JpZ2luYWxDaGFpbjogc3RyaW5nLFxuICBmZWU/OiBBbW91bnREYXRhXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTkZUVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mbyB7XG4gIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mbzxUIGV4dGVuZHMgRXh0cmluc2ljVHlwZT4gPSBUIGV4dGVuZHMgRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ01cbiAgPyBYQ01UcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvXG4gIDogVCBleHRlbmRzIEV4dHJpbnNpY1R5cGUuU0VORF9ORlRcbiAgICA/IE5GVFRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm9cbiAgICA6IHVuZGVmaW5lZDtcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25IaXN0b3J5SXRlbTxFVCBleHRlbmRzIEV4dHJpbnNpY1R5cGUgPSBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX0JBTEFOQ0U+IHtcbiAgb3JpZ2luPzogJ2FwcCcgfCAnbWlncmF0aW9uJyB8ICdzdWJzcXVpZCcsIC8vICdhcHAnIG9yIGhpc3Rvcnkgc291cmNlXG4gIGNhbGxoYXNoPzogc3RyaW5nLFxuICBzaWduYXR1cmU/OiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIGNoYWluVHlwZT86IENoYWluVHlwZSxcbiAgY2hhaW5OYW1lPzogc3RyaW5nLFxuICBkaXJlY3Rpb246IFRyYW5zYWN0aW9uRGlyZWN0aW9uLFxuICB0eXBlOiBFeHRyaW5zaWNUeXBlLFxuICBmcm9tOiBzdHJpbmcsXG4gIGZyb21OYW1lPzogc3RyaW5nLFxuICB0bzogc3RyaW5nLFxuICB0b05hbWU/OiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgc3RhdHVzOiBFeHRyaW5zaWNTdGF0dXMsXG4gIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmcsIC8vIEF2YWlsYWJsZSBmb3IgdHJhbnNhY3Rpb24gaGlzdG9yeVxuICBleHRyaW5zaWNIYXNoOiBzdHJpbmcsXG4gIHRpbWU6IG51bWJlcixcbiAgZGF0YT86IHN0cmluZyxcbiAgYmxvY2tOdW1iZXI6IG51bWJlcixcbiAgYmxvY2tIYXNoOiBzdHJpbmcsXG4gIGFtb3VudD86IEFtb3VudERhdGEsXG4gIHRpcD86IEFtb3VudERhdGEsXG4gIGZlZT86IEFtb3VudERhdGEsXG4gIGV4cGxvcmVyVXJsPzogc3RyaW5nLFxuICBhZGRpdGlvbmFsSW5mbz86IFRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm88RVQ+LFxuICBzdGFydEJsb2NrPzogbnVtYmVyLFxuICBub25jZT86IG51bWJlcixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTV0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb2RlPzogbnVtYmVyO1xuICBlcnJvclR5cGU6IHN0cmluZztcbiAgZGF0YT86IHVua25vd247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1dXYXJuaW5nIHtcbiAgZXJyb3JUeXBlOiBzdHJpbmc7XG4gIGNvZGU/OiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZGF0YT86IHVua25vd247XG59XG5cbmV4cG9ydCBlbnVtIEJhc2ljVHhFcnJvclR5cGUge1xuICBOT1RfRU5PVUdIX0JBTEFOQ0UgPSAnTk9UX0VOT1VHSF9CQUxBTkNFJyxcbiAgQ0hBSU5fRElTQ09OTkVDVEVEID0gJ0NIQUlOX0RJU0NPTk5FQ1RFRCcsXG4gIElOVkFMSURfUEFSQU1TID0gJ0lOVkFMSURfUEFSQU1TJyxcbiAgRFVQTElDQVRFX1RSQU5TQUNUSU9OID0gJ0RVUExJQ0FURV9UUkFOU0FDVElPTicsXG4gIFVOQUJMRV9UT19TSUdOID0gJ1VOQUJMRV9UT19TSUdOJyxcbiAgVVNFUl9SRUpFQ1RfUkVRVUVTVCA9ICdVU0VSX1JFSkVDVF9SRVFVRVNUJyxcbiAgVU5BQkxFX1RPX1NFTkQgPSAnVU5BQkxFX1RPX1NFTkQnLFxuICBTRU5EX1RSQU5TQUNUSU9OX0ZBSUxFRCA9ICdTRU5EX1RSQU5TQUNUSU9OX0ZBSUxFRCcsXG4gIElOVEVSTkFMX0VSUk9SID0gJ0lOVEVSTkFMX0VSUk9SJyxcbiAgVU5TVVBQT1JURUQgPSAnVU5TVVBQT1JURUQnLFxuICBUSU1FT1VUID0gJ1RJTUVPVVQnLFxuICBOT1RfRU5PVUdIX0VYSVNURU5USUFMX0RFUE9TSVQgPSAnTk9UX0VOT1VHSF9FWElTVEVOVElBTF9ERVBPU0lUJyxcbn1cblxuZXhwb3J0IGVudW0gU3Rha2luZ1R4RXJyb3JUeXBlIHtcbiAgTk9UX0VOT1VHSF9NSU5fU1RBS0UgPSAnTk9UX0VOT1VHSF9NSU5fU1RBS0UnLFxuICBFWENFRURfTUFYX05PTUlOQVRJT05TID0gJ0VYQ0VFRF9NQVhfTk9NSU5BVElPTlMnLFxuICBFWElTVF9VTlNUQUtJTkdfUkVRVUVTVCA9ICdFWElTVF9VTlNUQUtJTkdfUkVRVUVTVCcsXG4gIElOVkFMSURfQUNUSVZFX1NUQUtFID0gJ0lOVkFMSURfQUNUSVZFX1NUQUtFJyxcbiAgRVhDRUVEX01BWF9VTlNUQUtJTkcgPSAnRVhDRUVEX01BWF9VTlNUQUtJTkcnLFxuICBJTkFDVElWRV9OT01JTkFUSU9OX1BPT0wgPSAnSU5BQ1RJVkVfTk9NSU5BVElPTl9QT09MJ1xufVxuXG5leHBvcnQgZW51bSBUcmFuc2ZlclR4RXJyb3JUeXBlIHtcbiAgTk9UX0VOT1VHSF9WQUxVRSA9ICdOT1RfRU5PVUdIX1ZBTFVFJyxcbiAgTk9UX0VOT1VHSF9GRUUgPSAnTk9UX0VOT1VHSF9GRUUnLFxuICBJTlZBTElEX1RPS0VOID0gJ0lOVkFMSURfVE9LRU4nLFxuICBUUkFOU0ZFUl9FUlJPUiA9ICdUUkFOU0ZFUl9FUlJPUicsXG4gIFJFQ0VJVkVSX05PVF9FTk9VR0hfRVhJU1RFTlRJQUxfREVQT1NJVCA9ICdSRUNFSVZFUl9OT1RfRU5PVUdIX0VYSVNURU5USUFMX0RFUE9TSVQnLFxufVxuXG5leHBvcnQgdHlwZSBUcmFuc2FjdGlvbkVycm9yVHlwZSA9IEJhc2ljVHhFcnJvclR5cGUgfCBUcmFuc2ZlclR4RXJyb3JUeXBlIHwgU3Rha2luZ1R4RXJyb3JUeXBlXG5leHBvcnQgZW51bSBCYXNpY1R4V2FybmluZ0NvZGUge1xuICBOT1RfRU5PVUdIX0VYSVNURU5USUFMX0RFUE9TSVQgPSAnbm90RW5vdWdoRXhpc3RlbnRpYWxEZXBvc2l0J1xufVxuXG5leHBvcnQgdHlwZSBCYXNpY1R4RXJyb3IgPSB7XG4gIGVycm9yVHlwZTogVHhFcnJvckNvZGUsXG4gIGRhdGE/OiBvYmplY3QsXG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBCYXNpY1R4V2FybmluZyA9IHtcbiAgd2FybmluZ1R5cGU6IFRyYW5zYWN0aW9uV2FybmluZ1R5cGUsXG4gIGRhdGE/OiBvYmplY3QsXG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uUmVzcG9uc2Uge1xuICBleHRyaW5zaWNIYXNoPzogc3RyaW5nO1xuICB0eEVycm9yPzogYm9vbGVhbjtcbiAgZXJyb3JzPzogVHJhbnNhY3Rpb25FcnJvcltdO1xuICBzdGF0dXM/OiBib29sZWFuO1xuICB0eFJlc3VsdD86IFR4UmVzdWx0VHlwZVxuICBwYXNzd29yZEVycm9yPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZnRUcmFuc2FjdGlvblJlc3BvbnNlIGV4dGVuZHMgU1dUcmFuc2FjdGlvblJlc3BvbnNlIHtcbiAgaXNTZW5kaW5nU2VsZjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgSGFuZGxlQmFzaWNUeCA9IChkYXRhOiBUcmFuc2FjdGlvblJlc3BvbnNlKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBUeEVycm9yQ29kZSA9IFRyYW5zZmVyVHhFcnJvclR5cGUgfCBUcmFuc2FjdGlvbkVycm9yVHlwZVxuXG5leHBvcnQgZW51bSBCYWxhbmNlRXJyb3JUeXBlIHtcbiAgTkVUV09SS19FUlJPUiA9ICdORVRXT1JLX0VSUk9SJyxcbiAgVE9LRU5fRVJST1IgPSAnVE9LRU5fRVJST1InLFxuICBUSU1FT1VUID0gJ1RJTUVPVVQnLFxuICBHRVRfQkFMQU5DRV9FUlJPUiA9ICdHRVRfQkFMQU5DRV9FUlJPUicsXG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zYWN0aW9uV2FybmluZ1R5cGUgPSBCYXNpY1R4V2FybmluZ0NvZGVcblxuZXhwb3J0IGVudW0gUHJvdmlkZXJFcnJvclR5cGUge1xuICBDSEFJTl9ESVNDT05ORUNURUQgPSAnQ0hBSU5fRElTQ09OTkVDVEVEJyxcbiAgSU5WQUxJRF9QQVJBTVMgPSAnSU5WQUxJRF9QQVJBTVMnLFxuICBJTlRFUk5BTF9FUlJPUiA9ICdJTlRFUk5BTF9FUlJPUicsXG4gIFVTRVJfUkVKRUNUID0gJ1VTRVJfUkVKRUNUJyxcbn1cblxuLy8vIE1hbmFnZSBhY2NvdW50XG4vLyBFeHBvcnQgcHJpdmF0ZSBrZXlcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudEV4cG9ydFByaXZhdGVLZXkge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VBY2NvdW50RXhwb3J0UHJpdmF0ZUtleSB7XG4gIHByaXZhdGVLZXk6IHN0cmluZztcbiAgcHVibGljS2V5OiBzdHJpbmc7XG59XG5cbi8vIEdldCBhY2NvdW50IGluZm8gd2l0aCBwcml2YXRlIGtleVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDaGVja1B1YmxpY0FuZFNlY3JldEtleSB7XG4gIHNlY3JldEtleTogc3RyaW5nO1xuICBwdWJsaWNLZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUNoZWNrUHVibGljQW5kU2VjcmV0S2V5IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBpc1ZhbGlkOiBib29sZWFuO1xuICBpc0V0aGVyZXVtOiBib29sZWFuO1xufVxuXG4vLyBDcmVhdGUgc2VlZCBwaGFzZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RTZWVkQ3JlYXRlVjIge1xuICBsZW5ndGg/OiBTZWVkTGVuZ3RocztcbiAgc2VlZD86IHN0cmluZztcbiAgdHlwZXM/OiBBcnJheTxLZXlwYWlyVHlwZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VTZWVkQ3JlYXRlVjIge1xuICBzZWVkOiBzdHJpbmcsXG4gIGFkZHJlc3NNYXA6IFJlY29yZDxLZXlwYWlyVHlwZSwgc3RyaW5nPlxufVxuXG4vLyBHZXQgYWNjb3VudCBpbmZvIHdpdGggc3VyaVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RTZWVkVmFsaWRhdGVWMiB7XG4gIHN1cmk6IHN0cmluZztcbiAgdHlwZXM/OiBBcnJheTxLZXlwYWlyVHlwZT47XG59XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlU2VlZFZhbGlkYXRlVjIgPSBSZXNwb25zZVNlZWRDcmVhdGVWMlxuXG4vLyBDcmVhdGUgYWNjb3VudCB3aXRoIHN1cmlcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudENyZWF0ZVN1cmlWMiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ2VuZXNpc0hhc2g/OiBzdHJpbmcgfCBudWxsO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgc3VyaTogc3RyaW5nO1xuICB0eXBlcz86IEFycmF5PEtleXBhaXJUeXBlPjtcbiAgaXNBbGxvd2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBSZXNwb25zZUFjY291bnRDcmVhdGVTdXJpVjIgPSBSZWNvcmQ8S2V5cGFpclR5cGUsIHN0cmluZz5cblxuLy8gQ3JlYXRlIGRlcml2ZSBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdERlcml2ZUNyZWF0ZVYyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBnZW5lc2lzSGFzaD86IHN0cmluZyB8IG51bGw7XG4gIHN1cmk6IHN0cmluZztcbiAgcGFyZW50QWRkcmVzczogc3RyaW5nO1xuICBpc0FsbG93ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRGVyaXZlQWNjb3VudEluZm8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHN1cmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVyaXZlQ3JlYXRlVjMge1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdERlcml2ZUNyZWF0ZU11bHRpcGxlIHtcbiAgcGFyZW50QWRkcmVzczogc3RyaW5nO1xuICBpc0FsbG93ZWQ6IGJvb2xlYW47XG4gIGl0ZW1zOiBDcmVhdGVEZXJpdmVBY2NvdW50SW5mb1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlcml2ZUFjY291bnRJbmZvIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBzdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdERlcml2ZVZhbGlkYXRlVjIge1xuICBzdXJpOiBzdHJpbmc7XG4gIHBhcmVudEFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVzcG9uc2VEZXJpdmVWYWxpZGF0ZVYyID0gRGVyaXZlQWNjb3VudEluZm87XG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RHZXREZXJpdmVBY2NvdW50cyB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbGltaXQ6IG51bWJlcjtcbiAgcGFyZW50QWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlR2V0RGVyaXZlQWNjb3VudHMge1xuICByZXN1bHQ6IERlcml2ZUFjY291bnRJbmZvW107XG59XG5cbi8vIFJlc3RvcmUgYWNjb3VudCB3aXRoIGpzb24gZmlsZSAoc2luZ2xlIGFjY291bnQpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEpzb25SZXN0b3JlVjIge1xuICBmaWxlOiBLZXlyaW5nUGFpciRKc29uO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGlzQWxsb3dlZDogYm9vbGVhbjtcbiAgd2l0aE1hc3RlclBhc3N3b3JkOiBib29sZWFuO1xufVxuXG4vLyBSZXN0b3JlIGFjY291bnQgd2l0aCBqc29uIGZpbGUgKG11bHRpIGFjY291bnQpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEJhdGNoUmVzdG9yZVYyIHtcbiAgZmlsZTogS2V5cmluZ1BhaXJzJEpzb247XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGFjY291bnRzSW5mbzogUmVzcG9uc2VKc29uR2V0QWNjb3VudEluZm9bXTtcbiAgaXNBbGxvd2VkOiBib29sZWFuO1xufVxuXG4vLyBSZXN0b3JlIGFjY291bnQgd2l0aCBwcml2YXRlS2V5XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VQcml2YXRlS2V5VmFsaWRhdGVWMiB7XG4gIGFkZHJlc3NNYXA6IFJlY29yZDxLZXlwYWlyVHlwZSwgc3RyaW5nPixcbiAgYXV0b0FkZFByZWZpeDogYm9vbGVhblxufVxuXG4vLyBFeHRlcm5hbCBhY2NvdW50XG5cbmV4cG9ydCBlbnVtIEFjY291bnRFeHRlcm5hbEVycm9yQ29kZSB7XG4gIElOVkFMSURfQUREUkVTUyA9ICdpbnZhbGlkVG9BY2NvdW50JyxcbiAgS0VZUklOR19FUlJPUiA9ICdrZXlyaW5nRXJyb3InLFxuICBVTktOT1dOX0VSUk9SID0gJ3Vua25vd25FcnJvcidcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50RXh0ZXJuYWxFcnJvcntcbiAgY29kZTogQWNjb3VudEV4dGVybmFsRXJyb3JDb2RlO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbi8vIEF0dGFjaCBRUi1zaWduZXIgYWNjb3VudFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50Q3JlYXRlRXh0ZXJuYWxWMiB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZ2VuZXNpc0hhc2g/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzRXRoZXJldW06IGJvb2xlYW47XG4gIGlzQWxsb3dlZDogYm9vbGVhbjtcbiAgaXNSZWFkT25seTogYm9vbGVhbjtcbn1cblxuLy8gQXR0YWNoIExlZGdlciBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRDcmVhdGVIYXJkd2FyZVYyIHtcbiAgYWNjb3VudEluZGV4OiBudW1iZXI7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYWRkcmVzc09mZnNldDogbnVtYmVyO1xuICBnZW5lc2lzSGFzaDogc3RyaW5nO1xuICBoYXJkd2FyZVR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpc0FsbG93ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUhhcmR3YXJlQWNjb3VudEl0ZW0ge1xuICBhY2NvdW50SW5kZXg6IG51bWJlcjtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBhZGRyZXNzT2Zmc2V0OiBudW1iZXI7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7XG4gIGhhcmR3YXJlVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzRXRoZXJldW06IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRDcmVhdGVIYXJkd2FyZU11bHRpcGxlIHtcbiAgYWNjb3VudHM6IENyZWF0ZUhhcmR3YXJlQWNjb3VudEl0ZW1bXTtcbn1cblxuLy8gUmVzdG9yZSBhY2NvdW50IHdpdGggcHVibGljIGFuZCBzZWNyZXQga2V5XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRDcmVhdGVXaXRoU2VjcmV0S2V5IHtcbiAgcHVibGljS2V5OiBzdHJpbmc7XG4gIHNlY3JldEtleTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzQWxsb3c6IGJvb2xlYW47XG4gIGlzRXRoZXJldW06IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VBY2NvdW50Q3JlYXRlV2l0aFNlY3JldEtleSB7XG4gIGVycm9yczogQWNjb3VudEV4dGVybmFsRXJyb3JbXTtcbiAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuLy8gU3Vic2NyaWJlIEFkZHJlc3MgQm9va1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NCb29rSW5mbyB7XG4gIGFkZHJlc3NlczogQWRkcmVzc0pzb25bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RFZGl0Q29udGFjdEFjY291bnQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG1ldGE6IEtleXJpbmdQYWlyJE1ldGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdERlbGV0ZUNvbnRhY3RBY2NvdW50IHtcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuXG4vLyBJbmplY3QgYWNjb3VudFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBZGRJbmplY3RlZEFjY291bnRzIHtcbiAgYWNjb3VudHM6IEluamVjdGVkQWNjb3VudFdpdGhNZXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlbW92ZUluamVjdGVkQWNjb3VudHMge1xuICBhZGRyZXNzZXM6IHN0cmluZ1tdO1xufVxuXG4vLy8gU2lnbiBUcmFuc2FjdGlvblxuXG4vLy8gU2lnbiBFeHRlcm5hbCBSZXF1ZXN0XG5cbi8vIFN0YXR1c1xuXG5leHBvcnQgZW51bSBFeHRlcm5hbFJlcXVlc3RQcm9taXNlU3RhdHVzIHtcbiAgUEVORElORyxcbiAgUkVKRUNURUQsXG4gIEZBSUxFRCxcbiAgQ09NUExFVEVEXG59XG5cbi8vIFN0cnVjdHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVybmFsUmVxdWVzdFByb21pc2Uge1xuICByZXNvbHZlPzogKHJlc3VsdDogU2lnbmVyUmVzdWx0IHwgUHJvbWlzZUxpa2U8U2lnbmVyUmVzdWx0PikgPT4gdm9pZCxcbiAgcmVqZWN0PzogKGVycm9yPzogRXJyb3IpID0+IHZvaWQsXG4gIHN0YXR1czogRXh0ZXJuYWxSZXF1ZXN0UHJvbWlzZVN0YXR1cyxcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgY3JlYXRlZEF0OiBudW1iZXJcbn1cblxuLy8gUHJlcGFyZSB0byBjcmVhdGVcblxuZXhwb3J0IGludGVyZmFjZSBQcmVwYXJlRXh0ZXJuYWxSZXF1ZXN0IHtcbiAgaWQ6IHN0cmluZztcbiAgc2V0U3RhdGU6IChwcm9taXNlOiBFeHRlcm5hbFJlcXVlc3RQcm9taXNlKSA9PiB2b2lkO1xuICB1cGRhdGVTdGF0ZTogKHByb21pc2U6IFBhcnRpYWw8RXh0ZXJuYWxSZXF1ZXN0UHJvbWlzZT4pID0+IHZvaWQ7XG59XG5cbi8vIFJlamVjdFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZWplY3RFeHRlcm5hbFJlcXVlc3Qge1xuICBpZDogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICB0aHJvd0Vycm9yPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgUmVzcG9uc2VSZWplY3RFeHRlcm5hbFJlcXVlc3QgPSB2b2lkXG5cbi8vIFJlc29sdmVcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVzb2x2ZUV4dGVybmFsUmVxdWVzdCB7XG4gIGlkOiBzdHJpbmc7XG4gIGRhdGE6IFNpZ25lclJlc3VsdDtcbn1cblxuZXhwb3J0IHR5cGUgUmVzcG9uc2VSZXNvbHZlRXh0ZXJuYWxSZXF1ZXN0ID0gdm9pZFxuXG4vLy9cblxuZXhwb3J0IHR5cGUgQWNjb3VudFJlZiA9IEFycmF5PHN0cmluZz5cbmV4cG9ydCB0eXBlIEFjY291bnRSZWZNYXAgPSBSZWNvcmQ8c3RyaW5nLCBBY2NvdW50UmVmPlxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0UHJpY2UgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlUHJpY2UgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0QmFsYW5jZSA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVCYWxhbmNlID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZUJhbGFuY2VzVmlzaWJpbGl0eSA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RDcm93ZGxvYW4gPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlQ3Jvd2Rsb2FuID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZU5mdCA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVTdGFraW5nID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZVN0YWtpbmdSZXdhcmQgPSBudWxsXG5leHBvcnQgZW51bSBUaGVtZU5hbWVzIHtcbiAgTElHSFQgPSAnbGlnaHQnLFxuICBEQVJLID0gJ2RhcmsnLFxuICBTVUJTUEFDRSA9ICdzdWJzcGFjZSdcbn1cblxuZXhwb3J0IGVudW0gTkVUV09SS19FUlJPUiB7XG4gIElOVkFMSURfSU5GT19UWVBFID0gJ2ludmFsaWRJbmZvVHlwZScsXG4gIElOSkVDVF9TQ1JJUFRfREVURUNURUQgPSAnaW5qZWN0U2NyaXB0RGV0ZWN0ZWQnLFxuICBFWElTVEVEX05FVFdPUksgPSAnZXhpc3RlZE5ldHdvcmsnLFxuICBFWElTVEVEX1BST1ZJREVSID0gJ2V4aXN0ZWRQcm92aWRlcicsXG4gIElOVkFMSURfUFJPVklERVIgPSAnaW52YWxpZFByb3ZpZGVyJyxcbiAgTk9ORSA9ICdub25lJyxcbiAgQ09OTkVDVElPTl9GQUlMVVJFID0gJ2Nvbm5lY3Rpb25GYWlsdXJlJyxcbiAgUFJPVklERVJfTk9UX1NBTUVfTkVUV09SSyA9ICdwcm92aWRlck5vdFNhbWVOZXR3b3JrJ1xufVxuXG5leHBvcnQgZW51bSBORVRXT1JLX1NUQVRVUyB7XG4gIENPTk5FQ1RFRCA9ICdjb25uZWN0ZWQnLFxuICBDT05ORUNUSU5HID0gJ2Nvbm5lY3RpbmcnLFxuICBESVNDT05ORUNURUQgPSAnZGlzY29ubmVjdGVkJyxcbiAgUEVORElORyA9ICdwZW5kaW5nJ1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZXhwb3J0IHR5cGUgQmFzZVJlcXVlc3RTaWduID0ge1xuICBpZ25vcmVXYXJuaW5ncz86IGJvb2xlYW47XG59O1xuXG4vLyBJbnRlcm5hbCByZXF1ZXN0OiByZXF1ZXN0IGZyb20gZXh0ZW5zaW9uLCBub3QgZEFwcC5cbmV4cG9ydCB0eXBlIEludGVybmFsUmVxdWVzdFNpZ248VCBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbj4gPSBPbWl0PFQsICdwYXNzd29yZCc+O1xuXG5leHBvcnQgdHlwZSBUeFJlc3VsdFR5cGUgPSB7XG4gIGNoYW5nZTogc3RyaW5nO1xuICBjaGFuZ2VTeW1ib2w/OiBzdHJpbmc7XG4gIGZlZT86IHN0cmluZztcbiAgZmVlU3ltYm9sPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdFRyYW5zYWN0aW9uUmVxdWVzdCB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgc2VuZGVyQWRkcmVzczogc3RyaW5nLFxuICByZWNpcGllbnRBZGRyZXNzOiBzdHJpbmcsXG5cbiAgbmZ0SXRlbU5hbWU/OiBzdHJpbmcsIC8vIFVzZSBmb3IgY29uZmlybWF0aW9uIHZpZXcgb25seVxuICBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4sXG4gIG5mdEl0ZW06IE5mdEl0ZW1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1OZnRUcmFuc2FjdGlvbiBleHRlbmRzIFZhbGlkYXRlVHJhbnNhY3Rpb25SZXNwb25zZSB7XG4gIHR4OiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bU5mdFN1Ym1pdFRyYW5zYWN0aW9uIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgc2VuZGVyQWRkcmVzczogc3RyaW5nLFxuICByZWNpcGllbnRBZGRyZXNzOiBzdHJpbmcsXG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgZXN0aW1hdGVHYXM6IHN0cmluZyxcbiAgcmF3VHJhbnNhY3Rpb246IFJlY29yZDxzdHJpbmcsIGFueT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0ZU5ldHdvcmtSZXNwb25zZSB7XG4gIC8vIHZhbGlkYXRpb24gc3RhdGVcbiAgc3VjY2VzczogYm9vbGVhbixcbiAgZXJyb3I/OiBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUixcbiAgY29uZmxpY3RDaGFpbj86IHN0cmluZyxcbiAgY29uZmxpY3RLZXk/OiBzdHJpbmcsXG5cbiAgLy8gY2hhaW4gc3BlY1xuICBnZW5lc2lzSGFzaDogc3RyaW5nLFxuICBhZGRyZXNzUHJlZml4OiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgcGFyYUlkOiBudW1iZXIgfCBudWxsLFxuICBldm1DaGFpbklkOiBudW1iZXIgfCBudWxsLCAvLyBudWxsIGlmIG5vdCBldm0gY29tcGF0aWJsZVxuICBzeW1ib2w6IHN0cmluZyxcbiAgZGVjaW1hbHM6IG51bWJlcixcbiAgZXhpc3RlbnRpYWxEZXBvc2l0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0ZU5ldHdvcmtSZXF1ZXN0IHtcbiAgcHJvdmlkZXI6IHN0cmluZyxcbiAgZXhpc3RlZENoYWluU2x1Zz86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaU1hcCB7XG4gIHN1YnN0cmF0ZTogUmVjb3JkPHN0cmluZywgX1N1YnN0cmF0ZUFwaT47XG4gIGV2bTogUmVjb3JkPHN0cmluZywgX0V2bUFwaT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VwcG9ydFRyYW5zZmVyUmVzcG9uc2Uge1xuICBzdXBwb3J0VHJhbnNmZXI6IGJvb2xlYW47XG4gIHN1cHBvcnRUcmFuc2ZlckFsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RnJlZUJhbGFuY2Uge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgdG9rZW4/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0TWF4VHJhbnNmZXJhYmxlIHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBuZXR3b3JrS2V5OiBzdHJpbmcsXG4gIHRva2VuPzogc3RyaW5nLFxuICBpc1hjbVRyYW5zZmVyPzogYm9vbGVhbixcbiAgZGVzdENoYWluOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJhbnNmZXJDaGVja1JlZmVyZW5jZUNvdW50IHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBuZXR3b3JrS2V5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJhbnNmZXJDaGVja1N1cHBvcnRpbmcge1xuICBuZXR3b3JrS2V5OiBzdHJpbmcsXG4gIHRva2VuU2x1Zzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyYW5zZmVyRXhpc3RlbnRpYWxEZXBvc2l0IHtcbiAgdG9rZW5TbHVnOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0U2F2ZVJlY2VudEFjY291bnQge1xuICBhY2NvdW50SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdWJzdHJhdGVOZnRUcmFuc2FjdGlvbiB7XG4gIGVycm9yOiBib29sZWFuO1xuICBlc3RpbWF0ZWRGZWU/OiBzdHJpbmc7XG4gIGJhbGFuY2VFcnJvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdWJzdHJhdGVOZnRTdWJtaXRUcmFuc2FjdGlvbiBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGw7XG4gIHNlbmRlckFkZHJlc3M6IHN0cmluZztcbiAgbmZ0SXRlbU5hbWU/OiBzdHJpbmc7XG4gIHJlY2lwaWVudEFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnN0cmF0ZU5mdFN1Ym1pdFRyYW5zYWN0aW9uID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdWJzdHJhdGVOZnRTdWJtaXRUcmFuc2FjdGlvbj47XG5leHBvcnQgdHlwZSBSZXF1ZXN0RXZtTmZ0U3VibWl0VHJhbnNhY3Rpb24gPSBJbnRlcm5hbFJlcXVlc3RTaWduPEV2bU5mdFN1Ym1pdFRyYW5zYWN0aW9uPjtcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudE1ldGF7XG4gIGFkZHJlc3M6IHN0cmluZyB8IFVpbnQ4QXJyYXk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VBY2NvdW50TWV0YXtcbiAgbWV0YTogS2V5cmluZ1BhaXIkTWV0YTtcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdEV2bUV2ZW50cyA9IG51bGw7XG5leHBvcnQgdHlwZSBFdm1FdmVudFR5cGUgPSAnY29ubmVjdCcgfCAnZGlzY29ubmVjdCcgfCAnYWNjb3VudHNDaGFuZ2VkJyB8ICdjaGFpbkNoYW5nZWQnIHwgJ21lc3NhZ2UnIHwgJ2RhdGEnIHwgJ3JlY29ubmVjdCcgfCAnZXJyb3InO1xuZXhwb3J0IHR5cGUgRXZtQWNjb3VudHNDaGFuZ2VkUGF5bG9hZCA9IHN0cmluZyBbXTtcbmV4cG9ydCB0eXBlIEV2bUNoYWluQ2hhbmdlZFBheWxvYWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBFdm1Db25uZWN0UGF5bG9hZCA9IHsgY2hhaW5JZDogRXZtQ2hhaW5DaGFuZ2VkUGF5bG9hZCB9XG5leHBvcnQgdHlwZSBFdm1EaXNjb25uZWN0UGF5bG9hZCA9IHVua25vd25cblxuZXhwb3J0IGludGVyZmFjZSBFdm1FdmVudCB7XG4gIHR5cGU6IEV2bUV2ZW50VHlwZSxcbiAgcGF5bG9hZDogRXZtQWNjb3VudHNDaGFuZ2VkUGF5bG9hZCB8IEV2bUNoYWluQ2hhbmdlZFBheWxvYWQgfCBFdm1Db25uZWN0UGF5bG9hZCB8IEV2bURpc2Nvbm5lY3RQYXlsb2FkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bUFwcFN0YXRlIHtcbiAgbmV0d29ya0tleT86IHN0cmluZyxcbiAgY2hhaW5JZD86IHN0cmluZyxcbiAgaXNDb25uZWN0ZWQ/OiBib29sZWFuLFxuICB3ZWIzPzogV2ViMyxcbiAgbGlzdGVuRXZlbnRzPzogc3RyaW5nW11cbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdEV2bVByb3ZpZGVyU2VuZCA9IEpzb25ScGNQYXlsb2FkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlRXZtUHJvdmlkZXJTZW5kIHtcbiAgZXJyb3I6IChFcnJvciB8IG51bGwpO1xuICByZXN1bHQ/OiBKc29uUnBjUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBlbnVtIEV2bVByb3ZpZGVyRXJyb3JUeXBlIHtcbiAgVVNFUl9SRUpFQ1RFRF9SRVFVRVNUID0gJ1VTRVJfUkVKRUNURURfUkVRVUVTVCcsXG4gIFVOQVVUSE9SSVpFRCA9ICdVTkFVVEhPUklaRUQnLFxuICBVTlNVUFBPUlRFRF9NRVRIT0QgPSAnVU5TVVBQT1JURURfTUVUSE9EJyxcbiAgRElTQ09OTkVDVEVEID0gJ0RJU0NPTk5FQ1RFRCcsXG4gIENIQUlOX0RJU0NPTk5FQ1RFRCA9ICdDSEFJTl9ESVNDT05ORUNURUQnLFxuICBJTlZBTElEX1BBUkFNUyA9ICdJTlZBTElEX1BBUkFNUycsXG4gIElOVEVSTkFMX0VSUk9SID0gJ0lOVEVSTkFMX0VSUk9SJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1TZW5kVHJhbnNhY3Rpb25QYXJhbXMge1xuICBmcm9tOiBzdHJpbmc7XG4gIHRvPzogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgZ2FzTGltaXQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG1heFByaW9yaXR5RmVlUGVyR2FzPzogc3RyaW5nIHwgbnVtYmVyO1xuICBtYXhGZWVQZXJHYXM/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGdhc1ByaWNlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBkYXRhPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoTmV0d29ya1JlcXVlc3Qge1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG4gIGFkZHJlc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtU2lnblJlcXVlc3Qge1xuICBhY2NvdW50OiBBY2NvdW50SnNvbjtcbiAgaGFzaFBheWxvYWQ6IHN0cmluZztcbiAgY2FuU2lnbjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1TaWduYXR1cmVSZXF1ZXN0IGV4dGVuZHMgRXZtU2lnblJlcXVlc3Qge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHBheWxvYWQ6IHVua25vd247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtU2VuZFRyYW5zYWN0aW9uUmVxdWVzdCBleHRlbmRzIFRyYW5zYWN0aW9uQ29uZmlnLCBFdm1TaWduUmVxdWVzdCB7XG4gIGVzdGltYXRlR2FzOiBzdHJpbmc7XG4gIHBhcnNlRGF0YTogRXZtVHJhbnNhY3Rpb25EYXRhO1xuICBpc1RvQ29udHJhY3Q6IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIEV2bVdhdGNoVHJhbnNhY3Rpb25SZXF1ZXN0ID0gRXZtU2VuZFRyYW5zYWN0aW9uUmVxdWVzdDtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25zUXVldWVJdGVtT3B0aW9ucyB7XG4gIHJlcXVpcmVkUGFzc3dvcmQ/OiBib29sZWFuO1xuICBhZGRyZXNzPzogc3RyaW5nO1xuICBuZXR3b3JrS2V5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbnNRdWV1ZUl0ZW08VD4gZXh0ZW5kcyBDb25maXJtYXRpb25zUXVldWVJdGVtT3B0aW9ucywgQ29uZmlybWF0aW9uUmVxdWVzdEJhc2Uge1xuICBwYXlsb2FkOiBUO1xuICBwYXlsb2FkSnNvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvblJlc3VsdDxUPiBleHRlbmRzIENvbmZpcm1hdGlvblJlcXVlc3RCYXNlIHtcbiAgaXNBcHByb3ZlZDogYm9vbGVhbjtcbiAgcGF5bG9hZD86IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtUmVxdWVzdEV4dGVybmFsIHtcbiAgaGFzaFBheWxvYWQ6IHN0cmluZztcbiAgY2FuU2lnbjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1TZW5kVHJhbnNhY3Rpb25SZXF1ZXN0RXh0ZXJuYWwgZXh0ZW5kcyBFdm1TZW5kVHJhbnNhY3Rpb25SZXF1ZXN0LCBFdm1SZXF1ZXN0RXh0ZXJuYWwge31cblxuZXhwb3J0IGludGVyZmFjZSBFdm1TaWduYXR1cmVSZXF1ZXN0RXh0ZXJuYWwgZXh0ZW5kcyBFdm1TaWduYXR1cmVSZXF1ZXN0LCBFdm1SZXF1ZXN0RXh0ZXJuYWwge31cblxuZXhwb3J0IGludGVyZmFjZSBBZGROZXR3b3JrUmVxdWVzdEV4dGVybmFsIHsgLy8gY3VycmVudGx5IG9ubHkgc3VwcG9ydCBhZGRpbmcgcHVyZSBFdm0gbmV0d29ya1xuICBjaGFpbklkOiBzdHJpbmc7XG4gIHJwY1VybHM6IHN0cmluZ1tdO1xuICBjaGFpbk5hbWU6IHN0cmluZztcbiAgYmxvY2tFeHBsb3JlclVybHM/OiBzdHJpbmdbXTtcbiAgcmVxdWVzdElkPzogc3RyaW5nO1xuICBuYXRpdmVDdXJyZW5jeToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzeW1ib2w6IHN0cmluZztcbiAgICBkZWNpbWFsczogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE5ldHdvcmtFeHRlcm5hbFJlcXVlc3QgeyAvLyBjdXJyZW50bHkgb25seSBzdXBwb3J0IGFkZGluZyBwdXJlIEV2bSBuZXR3b3JrXG4gIGNoYWluSWQ6IHN0cmluZztcbiAgcnBjVXJsOiBzdHJpbmc7XG4gIGNoYWluTmFtZTogc3RyaW5nO1xuICBibG9ja0V4cGxvcmVyVXJsOiBzdHJpbmc7XG4gIHJlcXVlc3RJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZFRva2VuUmVxdWVzdEV4dGVybmFsIHtcbiAgc2x1Zz86IHN0cmluZztcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gIG9yaWdpbkNoYWluOiBzdHJpbmc7XG4gIHR5cGU6IF9Bc3NldFR5cGU7XG4gIG5hbWU6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGRlY2ltYWxzOiBudW1iZXI7XG4gIHZhbGlkYXRlZDogYm9vbGVhbjtcbiAgY29udHJhY3RFcnJvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25EZWZpbml0aW9ucyB7XG4gIGFkZE5ldHdvcmtSZXF1ZXN0OiBbQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxfTmV0d29ya1Vwc2VydFBhcmFtcz4sIENvbmZpcm1hdGlvblJlc3VsdDxudWxsPl0sXG4gIGFkZFRva2VuUmVxdWVzdDogW0NvbmZpcm1hdGlvbnNRdWV1ZUl0ZW08QWRkVG9rZW5SZXF1ZXN0RXh0ZXJuYWw+LCBDb25maXJtYXRpb25SZXN1bHQ8Ym9vbGVhbj5dLFxuICBzd2l0Y2hOZXR3b3JrUmVxdWVzdDogW0NvbmZpcm1hdGlvbnNRdWV1ZUl0ZW08U3dpdGNoTmV0d29ya1JlcXVlc3Q+LCBDb25maXJtYXRpb25SZXN1bHQ8Ym9vbGVhbj5dLFxuICBldm1TaWduYXR1cmVSZXF1ZXN0OiBbQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxFdm1TaWduYXR1cmVSZXF1ZXN0PiwgQ29uZmlybWF0aW9uUmVzdWx0PHN0cmluZz5dLFxuICBldm1TZW5kVHJhbnNhY3Rpb25SZXF1ZXN0OiBbQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxFdm1TZW5kVHJhbnNhY3Rpb25SZXF1ZXN0PiwgQ29uZmlybWF0aW9uUmVzdWx0PHN0cmluZz5dXG4gIGV2bVdhdGNoVHJhbnNhY3Rpb25SZXF1ZXN0OiBbQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxFdm1XYXRjaFRyYW5zYWN0aW9uUmVxdWVzdD4sIENvbmZpcm1hdGlvblJlc3VsdDxzdHJpbmc+XVxufVxuXG5leHBvcnQgdHlwZSBDb25maXJtYXRpb25UeXBlID0ga2V5b2YgQ29uZmlybWF0aW9uRGVmaW5pdGlvbnM7XG5cbmV4cG9ydCB0eXBlIENvbmZpcm1hdGlvbnNRdWV1ZSA9IHtcbiAgW0NUIGluIENvbmZpcm1hdGlvblR5cGVdOiBSZWNvcmQ8c3RyaW5nLCBDb25maXJtYXRpb25EZWZpbml0aW9uc1tDVF1bMF0+O1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q29uZmlybWF0aW9uc1N1YnNjcmliZSA9IG51bGw7XG5cbi8vIERlc2lnbiB0byB1c2Ugb25seSBvbmUgY29uZmlybWF0aW9uXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q29uZmlybWF0aW9uQ29tcGxldGUgPSB7XG4gIFtDVCBpbiBDb25maXJtYXRpb25UeXBlXT86IENvbmZpcm1hdGlvbkRlZmluaXRpb25zW0NUXVsxXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1R4SW5mbyB7XG4gIGZlZTogc3RyaW5nLFxuICBiYWxhbmNlRXJyb3I6IGJvb2xlYW4sXG4gIHJhd0ZlZT86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvbmRpbmdPcHRpb25QYXJhbXMge1xuICBjaGFpbjogc3RyaW5nO1xuICB0eXBlOiBTdGFraW5nVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVNb2RlSnNvbiB7XG4gIG5ldHdvcmtLZXlzOiBzdHJpbmdbXSxcbiAgdGhlbWU6IFRoZW1lTmFtZXMsXG4gIGF1dG9UcmlnZ2VyRG9tYWluOiBzdHJpbmcgLy8gUmVnZXggZm9yIGF1dG8gdHJpZ2dlciBzaW5nbGUgbW9kZVxufVxuXG4vLy8gRXZtIHRyYW5zYWN0aW9uXG5cbmV4cG9ydCB0eXBlIE5lc3RlZEFycmF5PFQ+ID0gVCB8IE5lc3RlZEFycmF5PFQ+W107XG5cbi8vLyBFdm0gQ29udHJhY3QgSW5wdXRcblxuZXhwb3J0IGludGVyZmFjZSBFdm1UcmFuc2FjdGlvbkFyZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IEV2bVRyYW5zYWN0aW9uQXJnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VFdm1UcmFuc2FjdGlvbkRhdGEge1xuICBtZXRob2Q6IHN0cmluZztcbiAgbWV0aG9kTmFtZTogc3RyaW5nO1xuICBhcmdzOiBFdm1UcmFuc2FjdGlvbkFyZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RQYXJzZUV2bUNvbnRyYWN0SW5wdXQge1xuICBkYXRhOiBzdHJpbmc7XG4gIGNvbnRyYWN0OiBzdHJpbmc7XG4gIGNoYWluSWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgRXZtVHJhbnNhY3Rpb25EYXRhID0gUGFyc2VFdm1UcmFuc2FjdGlvbkRhdGEgfCBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VQYXJzZUV2bUNvbnRyYWN0SW5wdXQge1xuICByZXN1bHQ6IEV2bVRyYW5zYWN0aW9uRGF0YTtcbn1cblxuLy8vIExlZGdlclxuXG5leHBvcnQgaW50ZXJmYWNlIExlZGdlck5ldHdvcmsge1xuICBnZW5lc2lzSGFzaDogc3RyaW5nOyAvLyBHZW5lc2lzSGFzaCBmb3Igc3Vic3RyYXRlIGFwcFxuICBuZXR3b3JrTmFtZTogc3RyaW5nOyAvLyBEaXNwbGF5IGluIHNlbGVjdG9yXG4gIGFjY291bnROYW1lOiBzdHJpbmc7IC8vIE5hbWUgZm9yIGFjY291bnQoTGVkZ2VyIFggQWNjb3VudClcbiAgYXBwTmFtZTogc3RyaW5nOyAvLyBOYW1lIGluIExlZGdlclxuICBuZXR3b3JrOiBzdHJpbmc7IC8vIG5ldHdvcmsgaXMgcHJlZGVmaW5lZCBpbiBsZWRnZXIgbGliXG4gIHNsdWc6IHN0cmluZzsgLy8gc2x1ZyBpbiBjaGFpbiBsaXN0XG4gIGljb246ICdzdWJzdHJhdGUnIHwgJ2V0aGVyZXVtJzsgLy8gRGVwcmVjYXRlZFxuICBpc0Rldk1vZGU6IGJvb2xlYW47IC8vIERldiBtb2RlIG9uIExlZGdlclxuICBpc0V0aGVyZXVtOiBib29sZWFuOyAvLyBVc2UgZm9yIGV2bSBhY2NvdW50XG59XG4vLy8gT24tcmFtcFxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWtOZXR3b3JrIHtcbiAgbmV0d29ya3M6IHN0cmluZ1tdO1xuICB0b2tlbnM/OiBzdHJpbmdbXTtcbn1cblxuLy8vIFFyIFNpZ25cblxuLy8gUGFyc2UgU3Vic3RyYXRlXG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWF0dGVkTWV0aG9kIHtcbiAgYXJncz86IEFyZ0luZm9bXTtcbiAgbWV0aG9kTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFyZ0luZm8ge1xuICBhcmdOYW1lOiBzdHJpbmc7XG4gIGFyZ1ZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcmFJbmZve1xuICBwZXJpb2Q6IG51bWJlcjtcbiAgcGhhc2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVBhcnNlVHJhbnNhY3Rpb25TdWJzdHJhdGUge1xuICBlcmE6IEVyYUluZm8gfCBzdHJpbmc7XG4gIG5vbmNlOiBudW1iZXI7XG4gIG1ldGhvZDogc3RyaW5nIHwgRm9ybWF0dGVkTWV0aG9kW107XG4gIHRpcDogbnVtYmVyO1xuICBzcGVjVmVyc2lvbjogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFBhcnNlVHJhbnNhY3Rpb25TdWJzdHJhdGUge1xuICBkYXRhOiBzdHJpbmc7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbn1cblxuLy8gUGFyc2UgRXZtXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFFyUGFyc2VSTFAge1xuICBkYXRhOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VRclBhcnNlUkxQIHtcbiAgZGF0YTogRXZtVHJhbnNhY3Rpb25EYXRhO1xuICBpbnB1dDogc3RyaW5nO1xuICBub25jZTogbnVtYmVyO1xuICB0bzogc3RyaW5nO1xuICBnYXM6IG51bWJlcjtcbiAgZ2FzUHJpY2U6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuLy8gQ2hlY2sgbG9ja1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50SXNMb2NrZWQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VBY2NvdW50SXNMb2NrZWQge1xuICBpc0xvY2tlZDogYm9vbGVhbjtcbiAgcmVtYWluaW5nVGltZTogbnVtYmVyO1xufVxuXG4vLyBTaWduXG5cbmV4cG9ydCB0eXBlIFNpZ25lckRhdGFUeXBlID0gJ3RyYW5zYWN0aW9uJyB8ICdtZXNzYWdlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RRclNpZ25TdWJzdHJhdGUge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGE6IHN0cmluZztcbiAgbmV0d29ya0tleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUXJTaWduU3Vic3RyYXRlIHtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFFyU2lnbkV2bSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0eXBlOiAnbWVzc2FnZScgfCAndHJhbnNhY3Rpb24nXG4gIGNoYWluSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VRclNpZ25Fdm0ge1xuICBzaWduYXR1cmU6IHN0cmluZztcbn1cblxuLy8vIFRyYW5zZmVyXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENoZWNrVHJhbnNmZXIgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBuZXR3b3JrS2V5OiBzdHJpbmcsXG4gIGZyb206IHN0cmluZyxcbiAgdG86IHN0cmluZyxcbiAgdmFsdWU/OiBzdHJpbmcsXG4gIHRyYW5zZmVyQWxsPzogYm9vbGVhblxuICB0b2tlblNsdWc6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlVHJhbnNhY3Rpb25SZXNwb25zZSB7XG4gIGVycm9yczogVHJhbnNhY3Rpb25FcnJvcltdLFxuICB3YXJuaW5nczogVHJhbnNhY3Rpb25XYXJuaW5nW10sXG4gIHRyYW5zZmVyTmF0aXZlQW1vdW50Pzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RUcmFuc2ZlciA9IEludGVybmFsUmVxdWVzdFNpZ248UmVxdWVzdENoZWNrVHJhbnNmZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDaGVja0Nyb3NzQ2hhaW5UcmFuc2ZlciBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIG9yaWdpbk5ldHdvcmtLZXk6IHN0cmluZyxcbiAgZGVzdGluYXRpb25OZXR3b3JrS2V5OiBzdHJpbmcsXG4gIGZyb206IHN0cmluZyxcbiAgdG86IHN0cmluZyxcbiAgdHJhbnNmZXJBbGw/OiBib29sZWFuLFxuICB2YWx1ZTogc3RyaW5nLFxuICB0b2tlblNsdWc6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q3Jvc3NDaGFpblRyYW5zZmVyID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxSZXF1ZXN0Q2hlY2tDcm9zc0NoYWluVHJhbnNmZXI+O1xuXG4vLy8gU3Rha2VcblxuLy8gU3Rha2luZyAmIEJvbmRpbmdcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhaW5TdGFraW5nTWV0YWRhdGEge1xuICBjaGFpbjogc3RyaW5nO1xuICB0eXBlOiBTdGFraW5nVHlwZTtcblxuICAvLyBlc3NlbnRpYWxcbiAgZXJhOiBudW1iZXIsIC8vIGFsc28gcm91bmQgZm9yIHBhcmFjaGFpbnNcbiAgbWluSm9pbk5vbWluYXRpb25Qb29sPzogc3RyaW5nOyAvLyBmb3IgcmVsYXljaGFpbiBzdXBwb3J0cyBub21pbmF0aW9uIHBvb2xcbiAgbWluU3Rha2U6IHN0cmluZztcbiAgbWF4VmFsaWRhdG9yUGVyTm9taW5hdG9yOiBudW1iZXI7XG4gIG1heFdpdGhkcmF3YWxSZXF1ZXN0UGVyVmFsaWRhdG9yOiBudW1iZXI7XG4gIGFsbG93Q2FuY2VsVW5zdGFraW5nOiBib29sZWFuO1xuICB1bnN0YWtpbmdQZXJpb2Q6IG51bWJlcjsgLy8gaW4gaG91cnNcblxuICAvLyBzdXBwbGVtZW50YWxcbiAgZXhwZWN0ZWRSZXR1cm4/OiBudW1iZXI7IC8vIGluICUsIGFubnVhbGx5XG4gIGluZmxhdGlvbj86IG51bWJlcjsgLy8gaW4gJSwgYW5udWFsbHlcbiAgbm9taW5hdG9yQ291bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9taW5hdGlvbkluZm8ge1xuICBjaGFpbjogc3RyaW5nO1xuICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmc7IC8vIGNhbiBiZSBhIG5vbWluYXRpb24gcG9vbCBpZFxuICB2YWxpZGF0b3JJZGVudGl0eT86IHN0cmluZztcbiAgYWN0aXZlU3Rha2U6IHN0cmluZztcblxuICBoYXNVbnN0YWtpbmc/OiBib29sZWFuO1xuICB2YWxpZGF0b3JNaW5TdGFrZT86IHN0cmluZztcbiAgc3RhdHVzOiBTdGFraW5nU3RhdHVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldE5vbWluYXRpb25Qb29sc0JvbmRlZFBvb2xJbm5lciB7XG4gIHBvaW50czogbnVtYmVyLFxuICBzdGF0ZTogJ09wZW4nIHwgJ0Rlc3Ryb3lpbmcnIHwgJ0xvY2tlZCcsXG4gIG1lbWJlckNvdW50ZXI6IG51bWJlcixcbiAgcm9sZXM6IHtcbiAgICBkZXBvc2l0b3I6IHN0cmluZyxcbiAgICByb290OiBzdHJpbmcsXG4gICAgbm9taW5hdG9yOiBzdHJpbmcsXG4gICAgYm91bmNlcjogc3RyaW5nXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb21pbmF0aW9uUG9vbEluZm8gZXh0ZW5kcyBQaWNrPFBhbGxldE5vbWluYXRpb25Qb29sc0JvbmRlZFBvb2xJbm5lciwgJ3JvbGVzJyB8ICdtZW1iZXJDb3VudGVyJyB8ICdzdGF0ZSc+IHtcbiAgaWQ6IG51bWJlcixcbiAgYWRkcmVzczogc3RyaW5nLFxuICBuYW1lPzogc3RyaW5nLFxuICBib25kZWRBbW91bnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgZW51bSBVbnN0YWtpbmdTdGF0dXMge1xuICBDTEFJTUFCTEUgPSAnQ0xBSU1BQkxFJyxcbiAgVU5MT0NLSU5HID0gJ1VOTE9DS0lORydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbnN0YWtpbmdJbmZvIHtcbiAgY2hhaW46IHN0cmluZztcbiAgc3RhdHVzOiBVbnN0YWtpbmdTdGF0dXM7XG4gIGNsYWltYWJsZTogc3RyaW5nOyAvLyBhbW91bnQgdG8gYmUgd2l0aGRyYXduXG4gIHdhaXRpbmdUaW1lOiBudW1iZXI7IC8vIGluIGhvdXJzXG4gIHZhbGlkYXRvckFkZHJlc3M/OiBzdHJpbmc7IC8vIG1pZ2h0IHVuc3Rha2UgZnJvbSBhIHZhbGlkYXRvciBvciBub3Rcbn1cblxuZXhwb3J0IGVudW0gU3Rha2luZ1N0YXR1cyB7XG4gIEVBUk5JTkdfUkVXQVJEID0gJ0VBUk5JTkdfUkVXQVJEJyxcbiAgUEFSVElBTExZX0VBUk5JTkcgPSAnUEFSVElBTExZX0VBUk5JTkcnLFxuICBOT1RfRUFSTklORyA9ICdOT1RfRUFSTklORycsXG4gIFdBSVRJTkcgPSAnV0FJVElORycsXG4gIE5PVF9TVEFLSU5HID0gJ05PVF9TVEFLSU5HJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vbWluYXRvck1ldGFkYXRhIHtcbiAgY2hhaW46IHN0cmluZyxcbiAgdHlwZTogU3Rha2luZ1R5cGUsXG5cbiAgc3RhdHVzOiBTdGFraW5nU3RhdHVzLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGFjdGl2ZVN0YWtlOiBzdHJpbmcsXG4gIG5vbWluYXRpb25zOiBOb21pbmF0aW9uSW5mb1tdLFxuICB1bnN0YWtpbmdzOiBVbnN0YWtpbmdJbmZvW10sXG4gIGlzQm9uZGVkQmVmb3JlPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRvckluZm8ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNoYWluOiBzdHJpbmc7XG5cbiAgdG90YWxTdGFrZTogc3RyaW5nO1xuICBvd25TdGFrZTogc3RyaW5nO1xuICBvdGhlclN0YWtlOiBzdHJpbmc7XG5cbiAgbWluQm9uZDogc3RyaW5nO1xuICBub21pbmF0b3JDb3VudDogbnVtYmVyO1xuICBjb21taXNzaW9uOiBudW1iZXI7IC8vIGluICVcbiAgZXhwZWN0ZWRSZXR1cm4/OiBudW1iZXI7IC8vIGluICUsIGFubnVhbGx5XG5cbiAgYmxvY2tlZDogYm9vbGVhbjtcbiAgaWRlbnRpdHk/OiBzdHJpbmc7XG4gIGlzVmVyaWZpZWQ6IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIGlzQ3Jvd2RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb25kaW5nU3VibWl0UGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgY2hhaW46IHN0cmluZyxcbiAgdHlwZTogU3Rha2luZ1R5cGUsXG4gIG5vbWluYXRvck1ldGFkYXRhPzogTm9taW5hdG9yTWV0YWRhdGEsIC8vIHVuZGVmaW5lZCBpZiB1c2VyIGhhcyBubyBzdGFrZVxuICBhbW91bnQ6IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nLFxuICBzZWxlY3RlZFZhbGlkYXRvcnM6IFZhbGlkYXRvckluZm9bXSxcbiAgbG9ja1BlcmlvZD86IG51bWJlciAvLyBpbiBtb250aFxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9uZGluZ1N1Ym1pdCA9IEludGVybmFsUmVxdWVzdFNpZ248Qm9uZGluZ1N1Ym1pdFBhcmFtcz47XG5cbi8vIFVuQm9uZGluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuYm9uZGluZ1N1Ym1pdFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIGFtb3VudDogc3RyaW5nLFxuICBjaGFpbjogc3RyaW5nLFxuICBub21pbmF0b3JNZXRhZGF0YTogTm9taW5hdG9yTWV0YWRhdGEsXG4gIC8vIGZvciBzb21lIGNoYWluc1xuICB2YWxpZGF0b3JBZGRyZXNzPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RVbmJvbmRpbmdTdWJtaXQgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFVuYm9uZGluZ1N1Ym1pdFBhcmFtcz47XG5cbi8vIFdpdGhkcmF3U3Rha2VcblxuZXhwb3J0IGludGVyZmFjZSBTdGFrZVdpdGhkcmF3YWxQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBub21pbmF0b3JNZXRhZGF0YTogTm9taW5hdG9yTWV0YWRhdGEsXG4gIHVuc3Rha2luZ0luZm86IFVuc3Rha2luZ0luZm8sXG4gIGNoYWluOiBzdHJpbmcsXG4gIHZhbGlkYXRvckFkZHJlc3M/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFN0YWtlV2l0aGRyYXdhbCA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VXaXRoZHJhd2FsUGFyYW1zPjtcblxuLy8gQ2xhaW1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFrZUNsYWltUmV3YXJkUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBjaGFpbjogc3RyaW5nLFxuICBzdGFraW5nVHlwZTogU3Rha2luZ1R5cGUsXG4gIHVuY2xhaW1lZFJld2FyZD86IHN0cmluZyxcbiAgYm9uZFJld2FyZD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFN0YWtlQ2xhaW1SZXdhcmQgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN0YWtlQ2xhaW1SZXdhcmRQYXJhbXM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlQ2FuY2VsV2l0aGRyYXdhbFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgY2hhaW46IHN0cmluZyxcbiAgc2VsZWN0ZWRVbnN0YWtpbmc6IFVuc3Rha2luZ0luZm9cbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFN0YWtlQ2FuY2VsV2l0aGRyYXdhbCA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VDYW5jZWxXaXRoZHJhd2FsUGFyYW1zPjtcblxuLy8gQ29tcG91bmRcblxuZXhwb3J0IGludGVyZmFjZSBTdGFrZVBvb2xpbmdCb25kaW5nUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgbm9taW5hdG9yTWV0YWRhdGE/OiBOb21pbmF0b3JNZXRhZGF0YSxcbiAgY2hhaW46IHN0cmluZyxcbiAgc2VsZWN0ZWRQb29sOiBOb21pbmF0aW9uUG9vbEluZm8sXG4gIGFtb3VudDogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFN0YWtlUG9vbGluZ0JvbmRpbmcgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN0YWtlUG9vbGluZ0JvbmRpbmdQYXJhbXM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlUG9vbGluZ1VuYm9uZGluZ1BhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YSxcbiAgY2hhaW46IHN0cmluZyxcbiAgYW1vdW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFN0YWtlUG9vbGluZ1VuYm9uZGluZyA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VQb29saW5nVW5ib25kaW5nUGFyYW1zPjtcblxuZXhwb3J0IGludGVyZmFjZSBEZWxlZ2F0aW9uSXRlbSB7XG4gIG93bmVyOiBzdHJpbmcsXG4gIGFtb3VudDogc3RyaW5nLCAvLyByYXcgYW1vdW50IHN0cmluZ1xuICBpZGVudGl0eT86IHN0cmluZyxcbiAgbWluQm9uZDogc3RyaW5nLFxuICBoYXNTY2hlZHVsZWRSZXF1ZXN0OiBib29sZWFuXG4gIGljb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2VEZWxlZ2F0aW9uUmVxdWVzdCB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgbmV0d29ya0tleTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tFeGlzdGluZ1R1cmluZ0NvbXBvdW5kUGFyYW1zIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjb2xsYXRvckFkZHJlc3M6IHN0cmluZztcbiAgbmV0d29ya0tleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4aXN0aW5nVHVyaW5nQ29tcG91bmRUYXNrIHtcbiAgZXhpc3Q6IGJvb2xlYW47XG4gIHRhc2tJZDogc3RyaW5nO1xuICBhY2NvdW50TWluaW11bTogbnVtYmVyO1xuICBmcmVxdWVuY3k6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUdXJpbmdTdGFrZUNvbXBvdW5kUmVzcCB7XG4gIHR4SW5mbzogQmFzaWNUeEluZm8sXG4gIG9wdGltYWxGcmVxdWVuY3k6IHN0cmluZyxcbiAgaW5pdFRpbWU6IG51bWJlcixcbiAgY29tcG91bmRGZWU6IHN0cmluZyxcbiAgcmF3Q29tcG91bmRGZWU/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUdXJpbmdTdGFrZUNvbXBvdW5kUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBjb2xsYXRvckFkZHJlc3M6IHN0cmluZyxcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICBhY2NvdW50TWluaW11bTogc3RyaW5nLFxuICBib25kZWRBbW91bnQ6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFR1cmluZ1N0YWtlQ29tcG91bmQgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFR1cmluZ1N0YWtlQ29tcG91bmRQYXJhbXM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmRQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICB0YXNrSWQ6IHN0cmluZztcbiAgbmV0d29ya0tleTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RUdXJpbmdDYW5jZWxTdGFrZUNvbXBvdW5kID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxUdXJpbmdDYW5jZWxTdGFrZUNvbXBvdW5kUGFyYW1zPjtcblxuLy8vIENyZWF0ZSBRUlxuXG4vLyBUcmFuc2ZlclxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VHJhbnNmZXJFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248UmVxdWVzdENoZWNrVHJhbnNmZXI+O1xuXG4vLyBYQ01cblxuZXhwb3J0IHR5cGUgUmVxdWVzdENyb3NzQ2hhaW5UcmFuc2ZlckV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxSZXF1ZXN0Q2hlY2tDcm9zc0NoYWluVHJhbnNmZXI+O1xuXG4vLyBORlRcblxuZXhwb3J0IHR5cGUgUmVxdWVzdE5mdFRyYW5zZmVyRXh0ZXJuYWxTdWJzdHJhdGUgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN1YnN0cmF0ZU5mdFN1Ym1pdFRyYW5zYWN0aW9uPjtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdE5mdFRyYW5zZmVyRXh0ZXJuYWxFdm0gPSBJbnRlcm5hbFJlcXVlc3RTaWduPEV2bU5mdFN1Ym1pdFRyYW5zYWN0aW9uPjtcblxuLy8gU3Rha2VcblxuZXhwb3J0IHR5cGUgUmVxdWVzdFN0YWtlRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPEJvbmRpbmdTdWJtaXRQYXJhbXM+O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VW5TdGFrZUV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxVbmJvbmRpbmdTdWJtaXRQYXJhbXM+O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0V2l0aGRyYXdTdGFrZUV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZVdpdGhkcmF3YWxQYXJhbXM+O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q2xhaW1SZXdhcmRFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VDbGFpbVJld2FyZFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDcmVhdGVDb21wb3VuZFN0YWtlRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFR1cmluZ1N0YWtlQ29tcG91bmRQYXJhbXM+O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q2FuY2VsQ29tcG91bmRTdGFrZUV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxUdXJpbmdDYW5jZWxTdGFrZUNvbXBvdW5kUGFyYW1zPjtcblxuZXhwb3J0IGVudW0gQ2hhaW5FZGl0U3RhbmRhcmQge1xuICBFVk0gPSAnRVZNJyxcbiAgU1VCU1RSQVRFID0gJ1NVQlNUUkFURScsXG4gIFVOS05PV04gPSAnVU5LTk9XTicsXG4gIE1JWEVEID0gJ01JWEVEJyAvLyB0YWtlcyByb290IGluIGEgc3RhbmRhcmQgKFN1YnN0cmF0ZSwgRXZtLC4uLikgYnV0IGFsc28gY29tcGF0aWJsZSB3aXRoIG90aGVyIHN0YW5kYXJkc1xufVxuXG4vLyBDaGFpblNlcnZpY2Vcbi8vIGZvciBjdXN0b20gbmV0d29ya1xuZXhwb3J0IHR5cGUgQ2hhaW5FZGl0SW5mbyA9IHsgLy8gb25seSBzdXBwb3J0IHB1cmUgc3Vic3RyYXRlIG9yIEV2bSBuZXR3b3JrXG4gIHNsdWc6IHN0cmluZztcbiAgY3VycmVudFByb3ZpZGVyOiBzdHJpbmc7XG4gIHByb3ZpZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgbmFtZTogc3RyaW5nO1xuICBjaGFpblR5cGU6IENoYWluRWRpdFN0YW5kYXJkO1xuICBibG9ja0V4cGxvcmVyPzogc3RyaW5nO1xuICBjcm93ZGxvYW5Vcmw/OiBzdHJpbmc7XG4gIHByaWNlSWQ/OiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYWluU3BlY0luZm8ge1xuICAvLyBTdWJzdHJhdGVcbiAgYWRkcmVzc1ByZWZpeDogbnVtYmVyLFxuICBnZW5lc2lzSGFzaDogc3RyaW5nLFxuICBwYXJhSWQ6IG51bWJlciB8IG51bGwsXG5cbiAgLy8gRXZtXG4gIGV2bUNoYWluSWQ6IG51bWJlciB8IG51bGwgLy8gbnVsbCBtZWFucyBub3QgRXZtXG5cbiAgLy8gQ29tbW9uXG4gIGV4aXN0ZW50aWFsRGVwb3NpdDogc3RyaW5nLFxuICBkZWNpbWFsczogbnVtYmVyXG59XG5cbi8vLyBLZXlyaW5nIHN0YXRlXG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5cmluZ1N0YXRlIHtcbiAgaXNSZWFkeTogYm9vbGVhbjtcbiAgaGFzTWFzdGVyUGFzc3dvcmQ6IGJvb2xlYW47XG4gIGlzTG9ja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVJVmlld1N0YXRlIHtcbiAgaXNVSUxvY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzQm9va1N0YXRlIHtcbiAgY29udGFjdHM6IEFkZHJlc3NKc29uW107XG4gIHJlY2VudDogQWRkcmVzc0pzb25bXTtcbn1cblxuLy8gQ2hhbmdlIG1hc3RlciBwYXNzd29yZFxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q2hhbmdlTWFzdGVyUGFzc3dvcmQge1xuICBvbGRQYXNzd29yZD86IHN0cmluZztcbiAgbmV3UGFzc3dvcmQ6IHN0cmluZztcblxuICBjcmVhdGVOZXc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VDaGFuZ2VNYXN0ZXJQYXNzd29yZCB7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JzOiBzdHJpbmdbXTtcbn1cblxuLy8gTWlncmF0ZSBwYXNzd29yZFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RNaWdyYXRlUGFzc3dvcmQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VNaWdyYXRlUGFzc3dvcmQge1xuICBzdGF0dXM6IGJvb2xlYW47XG4gIGVycm9yczogc3RyaW5nW107XG59XG5cbi8vIFVubG9ja1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RVbmxvY2tLZXlyaW5nIHtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVVubG9ja0tleXJpbmcge1xuICBzdGF0dXM6IGJvb2xlYW47XG4gIGVycm9yczogc3RyaW5nW107XG59XG5cbi8vIEV4cG9ydCBtbmVtb25pY1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RLZXlyaW5nRXhwb3J0TW5lbW9uaWMge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VLZXlyaW5nRXhwb3J0TW5lbW9uaWMge1xuICByZXN1bHQ6IHN0cmluZztcbn1cblxuLy8gUmVzZXQgd2FsbGV0XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlc2V0V2FsbGV0IHtcbiAgcmVzZXRBbGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VSZXNldFdhbGxldCB7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JzOiBzdHJpbmdbXTtcbn1cblxuLy8vIFNpZ25pbmdcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFNpZ25pbmdBcHByb3ZlUGFzc3dvcmRWMiB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNzZXRTZXR0aW5nVXBkYXRlUmVxIHtcbiAgdG9rZW5TbHVnOiBzdHJpbmc7XG4gIGFzc2V0U2V0dGluZzogQXNzZXRTZXR0aW5nO1xuICBhdXRvRW5hYmxlTmF0aXZlVG9rZW4/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RHZXRUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbi8vIE1vYmlsZSB1cGRhdGVcbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvblNlcnZpY2VUeXBlID0gJ2NoYWluUmVnaXN0cnknIHwgJ2JhbGFuY2UnIHwgJ2Nyb3dkbG9hbicgfCAnc3Rha2luZyc7XG5leHBvcnQgdHlwZSBDcm9uU2VydmljZVR5cGUgPSAncHJpY2UnIHwgJ25mdCcgfCAnc3Rha2luZycgfCAnaGlzdG9yeScgfCAncmVjb3ZlckFwaScgfCAnY2hlY2tBcGlTdGF0dXMnO1xuZXhwb3J0IHR5cGUgQ3JvblR5cGUgPVxuICAncmVjb3ZlckFwaU1hcCcgfFxuICAnY2hlY2tBcGlNYXBTdGF0dXMnIHxcbiAgJ3JlZnJlc2hIaXN0b3J5JyB8XG4gICdyZWZyZXNoTmZ0JyB8XG4gICdyZWZyZXNoUHJpY2UnIHxcbiAgJ3JlZnJlc2hTdGFrZVVubG9ja2luZ0luZm8nIHxcbiAgJ3JlZnJlc2hTdGFraW5nUmV3YXJkJyB8XG4gICdyZWZyZXNoUG9vbGluZ1N0YWtpbmdSZXdhcmQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RJbml0Q3JvbkFuZFN1YnNjcmlwdGlvbiB7XG4gIHN1YnNjcmlwdGlvbjoge1xuICAgIGFjdGl2ZVNlcnZpY2VzOiBTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZVtdXG4gIH0sXG4gIGNyb246IHtcbiAgICBpbnRlcnZhbE1hcDogUGFydGlhbDxSZWNvcmQ8Q3JvblR5cGUsIG51bWJlcj4+LFxuICAgIGFjdGl2ZVNlcnZpY2VzOiBDcm9uU2VydmljZVR5cGVbXVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENyb25BbmRTdWJzY3JpcHRpb25BY3Rpb24ge1xuICBzdWJzY3JpcHRpb25TZXJ2aWNlczogU3Vic2NyaXB0aW9uU2VydmljZVR5cGVbXTtcbiAgY3JvblNlcnZpY2VzOiBDcm9uU2VydmljZVR5cGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVDcm9uQW5kU3Vic2NyaXB0aW9uTWFwIHtcbiAgc3Vic2NyaXB0aW9uOiBSZWNvcmQ8U3Vic2NyaXB0aW9uU2VydmljZVR5cGUsIGJvb2xlYW4+O1xuICBjcm9uOiBSZWNvcmQ8Q3JvblNlcnZpY2VUeXBlLCBib29sZWFuPjtcbn1cblxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uVHlwZSB7XG4gIElORk8gPSAnaW5mbycsXG4gIFNVQ0NFU1MgPSAnc3VjY2VzcycsXG4gIFdBUk5JTkcgPSAnd2FybmluZycsXG4gIEVSUk9SID0gJ2Vycm9yJyxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uIHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogTm90aWZpY2F0aW9uVHlwZTtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBub3RpZnlWaWFCcm93c2VyPzogYm9vbGVhbjtcbiAgYWN0aW9uPzoge1xuICAgIHVybD86IHN0cmluZzsgLy8gQWRkIG1vcmUgYWN0aW9uIGluIHRoZSBmdXR1cmVcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25QYXJhbXMgPSBPbWl0PE5vdGlmaWNhdGlvbiwgJ2lkJz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvblJlbG9hZFJlcXVlc3Qge1xuICBkYXRhOiAnbmZ0JyB8ICdzdGFraW5nJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsbExvZ29NYXAge1xuICBjaGFpbkxvZ29NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgYXNzZXRMb2dvTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbi8vIFBoaXNoaW5nIGRldGVjdFxuXG5leHBvcnQgaW50ZXJmYWNlIFBhc3NQaGlzaGluZyB7XG4gIHBhc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFBhc3NQaGlzaGluZ1BhZ2Uge1xuICB1cmw6IHN0cmluZztcbn1cblxuLy8gUHNwIHRva2VuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFkZFBzcFRva2VuIHtcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbiAgdG9rZW5JbmZvOiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBzeW1ib2w6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVjaW1hbHM/OiBudW1iZXI7XG4gICAgbG9nbz86IHN0cmluZztcbiAgfTtcbn1cblxuLy8vIFdhbGxldENvbm5lY3RcblxuLy8gQ29ubmVjdFxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q29ubmVjdFdhbGxldENvbm5lY3Qge1xuICB1cmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVqZWN0Q29ubmVjdFdhbGxldFNlc3Npb24ge1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBcHByb3ZlQ29ubmVjdFdhbGxldFNlc3Npb24ge1xuICBpZDogc3RyaW5nO1xuICBhY2NvdW50czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlY29ubmVjdENvbm5lY3RXYWxsZXRTZXNzaW9uIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGlzY29ubmVjdFdhbGxldENvbm5lY3RTZXNzaW9uIHtcbiAgdG9waWM6IHN0cmluZ1xufVxuXG4vLyBOb3Qgc3VwcG9ydFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZWplY3RXYWxsZXRDb25uZWN0Tm90U3VwcG9ydCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFwcHJvdmVXYWxsZXRDb25uZWN0Tm90U3VwcG9ydCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbi8vLyBNYW50YVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hbnRhUGF5Q29uZmlnIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICB6a0FkZHJlc3M6IHN0cmluZztcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgY2hhaW46IHN0cmluZztcbiAgaXNJbml0aWFsU3luYzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYW50YUF1dGhvcml6YXRpb25Db250ZXh0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjaGFpbjogc3RyaW5nO1xuICBkYXRhOiB1bmtub3duO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hbnRhUGF5U3luY1N0YXRlIHtcbiAgaXNTeW5jaW5nOiBib29sZWFuLFxuICBwcm9ncmVzczogbnVtYmVyLFxuICBuZWVkTWFudWFsU3luYz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYW50YVBheUVuYWJsZVBhcmFtcyB7XG4gIHBhc3N3b3JkOiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZ1xufVxuXG5leHBvcnQgZW51bSBNYW50YVBheUVuYWJsZU1lc3NhZ2Uge1xuICBXUk9OR19QQVNTV09SRCA9ICdXUk9OR19QQVNTV09SRCcsXG4gIENIQUlOX0RJU0NPTk5FQ1RFRCA9ICdDSEFJTl9ESVNDT05ORUNURUQnLFxuICBVTktOT1dOX0VSUk9SID0gJ1VOS05PV05fRVJST1InLFxuICBTVUNDRVNTID0gJ1NVQ0NFU1MnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFudGFQYXlFbmFibGVSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lc3NhZ2U6IE1hbnRhUGF5RW5hYmxlTWVzc2FnZVxufVxuXG4vLy8gTWV0YWRhdGFcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEZpbmRSYXdNZXRhZGF0YSB7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VGaW5kUmF3TWV0YWRhdGEge1xuICByYXdNZXRhZGF0YTogc3RyaW5nO1xuICBzcGVjVmVyc2lvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVEb21haW5SZXF1ZXN0IHtcbiAgY2hhaW46IHN0cmluZyxcbiAgZG9tYWluOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlQWRkcmVzc1RvRG9tYWluUmVxdWVzdCB7XG4gIGNoYWluOiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZ1xufVxuXG4vLyBVc2Ugc3RyaW5naWZ5IHRvIGNvbW11bmljYXRlLCBwdXJlIGJvb2xlYW4gdmFsdWUgd2lsbCBlcnJvciB3aXRoIGNhc2UgJ2ZhbHNlJyB2YWx1ZVxuZXhwb3J0IGludGVyZmFjZSBLb25pUmVxdWVzdFNpZ25hdHVyZXMge1xuICAvLyBCb25kaW5nIGZ1bmN0aW9uc1xuICAncHJpKHN0YWtpbmcuc3VibWl0VHVyaW5nQ2FuY2VsQ29tcG91bmQpJzogW1JlcXVlc3RUdXJpbmdDYW5jZWxTdGFrZUNvbXBvdW5kLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKHN0YWtpbmcuc3VibWl0VHVyaW5nQ29tcG91bmQpJzogW1JlcXVlc3RUdXJpbmdTdGFrZUNvbXBvdW5kLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKHN0YWtpbmcuc3VibWl0Q2xhaW1SZXdhcmQpJzogW1JlcXVlc3RTdGFrZUNsYWltUmV3YXJkLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKHN0YWtpbmcuc3VibWl0Q2FuY2VsV2l0aGRyYXdhbCknOiBbUmVxdWVzdFN0YWtlQ2FuY2VsV2l0aGRyYXdhbCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaSh1bmJvbmRpbmcuc3VibWl0V2l0aGRyYXdhbCknOiBbUmVxdWVzdFN0YWtlV2l0aGRyYXdhbCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaSh1bmJvbmRpbmcuc3VibWl0VHJhbnNhY3Rpb24pJzogW1JlcXVlc3RVbmJvbmRpbmdTdWJtaXQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoYm9uZGluZy5zdWJtaXRCb25kaW5nVHJhbnNhY3Rpb24pJzogW1JlcXVlc3RCb25kaW5nU3VibWl0LCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGJvbmRpbmcuc3Vic2NyaWJlQ2hhaW5TdGFraW5nTWV0YWRhdGEpJzogW251bGwsIENoYWluU3Rha2luZ01ldGFkYXRhW10sIENoYWluU3Rha2luZ01ldGFkYXRhW11dO1xuICAncHJpKGJvbmRpbmcuc3Vic2NyaWJlTm9taW5hdG9yTWV0YWRhdGEpJzogW251bGwsIE5vbWluYXRvck1ldGFkYXRhW10sIE5vbWluYXRvck1ldGFkYXRhW11dO1xuICAncHJpKGJvbmRpbmcuZ2V0Qm9uZGluZ09wdGlvbnMpJzogW0JvbmRpbmdPcHRpb25QYXJhbXMsIFZhbGlkYXRvckluZm9bXV07XG4gICdwcmkoYm9uZGluZy5nZXROb21pbmF0aW9uUG9vbE9wdGlvbnMpJzogW3N0cmluZywgTm9taW5hdGlvblBvb2xJbmZvW11dO1xuICAncHJpKGJvbmRpbmcubm9taW5hdGlvblBvb2wuc3VibWl0Qm9uZGluZyknOiBbUmVxdWVzdFN0YWtlUG9vbGluZ0JvbmRpbmcsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoYm9uZGluZy5ub21pbmF0aW9uUG9vbC5zdWJtaXRVbmJvbmRpbmcpJzogW1JlcXVlc3RTdGFrZVBvb2xpbmdVbmJvbmRpbmcsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG5cbiAgLy8gQ2hhaW5zLCBhc3NldHMgZnVuY3Rpb25zXG4gICdwcmkoY2hhaW5TZXJ2aWNlLnN1YnNjcmliZUNoYWluSW5mb01hcCknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgYW55PiwgUmVjb3JkPHN0cmluZywgYW55Pl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnN1YnNjcmliZUNoYWluU3RhdGVNYXApJzogW251bGwsIFJlY29yZDxzdHJpbmcsIGFueT4sIFJlY29yZDxzdHJpbmcsIGFueT5dO1xuICAncHJpKGNoYWluU2VydmljZS5zdWJzY3JpYmVBc3NldFJlZ2lzdHJ5KSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBSZWNvcmQ8c3RyaW5nLCBhbnk+XTtcbiAgJ3ByaShjaGFpblNlcnZpY2Uuc3Vic2NyaWJlTXVsdGlDaGFpbkFzc2V0TWFwKSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBfTXVsdGlDaGFpbkFzc2V0PiwgUmVjb3JkPHN0cmluZywgX011bHRpQ2hhaW5Bc3NldD5dO1xuICAncHJpKGNoYWluU2VydmljZS5zdWJzY3JpYmVYY21SZWZNYXApJzogW251bGwsIFJlY29yZDxzdHJpbmcsIF9Bc3NldFJlZj4sIFJlY29yZDxzdHJpbmcsIF9Bc3NldFJlZj5dO1xuICAncHJpKGNoYWluU2VydmljZS51cHNlcnRDaGFpbiknOiBbX05ldHdvcmtVcHNlcnRQYXJhbXMsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5lbmFibGVDaGFpbnMpJzogW0VuYWJsZU11bHRpQ2hhaW5QYXJhbXMsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5lbmFibGVDaGFpbiknOiBbRW5hYmxlQ2hhaW5QYXJhbXMsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5yZWNvbm5lY3RDaGFpbiknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UuZGlzYWJsZUNoYWlucyknOiBbc3RyaW5nW10sIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5kaXNhYmxlQ2hhaW4pJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnJlbW92ZUNoYWluKSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5kZWxldGVDdXN0b21Bc3NldCknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UudXBzZXJ0Q3VzdG9tQXNzZXQpJzogW1JlY29yZDxzdHJpbmcsIGFueT4sIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS52YWxpZGF0ZUN1c3RvbUFzc2V0KSc6IFtfVmFsaWRhdGVDdXN0b21Bc3NldFJlcXVlc3QsIF9WYWxpZGF0ZUN1c3RvbUFzc2V0UmVzcG9uc2VdO1xuICAncHJpKGNoYWluU2VydmljZS5yZXNldERlZmF1bHRDaGFpbnMpJzogW251bGwsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5nZXRTdXBwb3J0ZWRDb250cmFjdFR5cGVzKSc6IFtudWxsLCBzdHJpbmdbXV07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnZhbGlkYXRlQ3VzdG9tQ2hhaW4pJzogW1ZhbGlkYXRlTmV0d29ya1JlcXVlc3QsIFZhbGlkYXRlTmV0d29ya1Jlc3BvbnNlXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UucmVjb3ZlclN1YnN0cmF0ZUFwaSknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UuZGlzYWJsZUFsbENoYWlucyknOiBbbnVsbCwgYm9vbGVhbl07XG4gICdwcmkoYXNzZXRTZXR0aW5nLmdldFN1YnNjcmlwdGlvbiknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgQXNzZXRTZXR0aW5nPiwgUmVjb3JkPHN0cmluZywgQXNzZXRTZXR0aW5nPl1cbiAgJ3ByaShhc3NldFNldHRpbmcudXBkYXRlKSc6IFtBc3NldFNldHRpbmdVcGRhdGVSZXEsIGJvb2xlYW5dO1xuXG4gIC8vIE5GVCBmdW5jdGlvbnNcbiAgJ3ByaShldm1OZnQuc3VibWl0VHJhbnNhY3Rpb24pJzogW05mdFRyYW5zYWN0aW9uUmVxdWVzdCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShldm1OZnQuZ2V0VHJhbnNhY3Rpb24pJzogW05mdFRyYW5zYWN0aW9uUmVxdWVzdCwgRXZtTmZ0VHJhbnNhY3Rpb25dO1xuICAncHJpKHN1YnN0cmF0ZU5mdC5zdWJtaXRUcmFuc2FjdGlvbiknOiBbTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0LCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKHN1YnN0cmF0ZU5mdC5nZXRUcmFuc2FjdGlvbiknOiBbTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0LCBTdWJzdHJhdGVOZnRUcmFuc2FjdGlvbl07XG4gICdwcmkobmZ0LmdldE5mdCknOiBbbnVsbCwgTmZ0SnNvbl07XG4gICdwcmkobmZ0LmdldFN1YnNjcmlwdGlvbiknOiBbUmVxdWVzdFN1YnNjcmliZU5mdCwgTmZ0SnNvbiwgTmZ0SnNvbl07XG4gICdwcmkobmZ0Q29sbGVjdGlvbi5nZXROZnRDb2xsZWN0aW9uKSc6IFtudWxsLCBOZnRDb2xsZWN0aW9uSnNvbl07XG4gICdwcmkobmZ0Q29sbGVjdGlvbi5nZXRTdWJzY3JpcHRpb24pJzogW251bGwsIE5mdENvbGxlY3Rpb25bXSwgTmZ0Q29sbGVjdGlvbltdXTtcblxuICAvLyBTdGFraW5nIGZ1bmN0aW9uc1xuICAncHJpKHN0YWtpbmcuZ2V0U3Rha2luZyknOiBbbnVsbCwgU3Rha2luZ0pzb25dO1xuICAncHJpKHN0YWtpbmcuZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlU3Rha2luZywgU3Rha2luZ0pzb24sIFN0YWtpbmdKc29uXTtcbiAgJ3ByaShzdGFraW5nUmV3YXJkLmdldFN0YWtpbmdSZXdhcmQpJzogW251bGwsIFN0YWtpbmdSZXdhcmRKc29uXTtcbiAgJ3ByaShzdGFraW5nUmV3YXJkLmdldFN1YnNjcmlwdGlvbiknOiBbUmVxdWVzdFN1YnNjcmliZVN0YWtpbmdSZXdhcmQsIFN0YWtpbmdSZXdhcmRKc29uLCBTdGFraW5nUmV3YXJkSnNvbl07XG5cbiAgLy8gUHJpY2UsIGJhbGFuY2UsIGNyb3dkbG9hbiBmdW5jdGlvbnNcbiAgJ3ByaShwcmljZS5nZXRQcmljZSknOiBbUmVxdWVzdFByaWNlLCBQcmljZUpzb25dO1xuICAncHJpKHByaWNlLmdldFN1YnNjcmlwdGlvbiknOiBbUmVxdWVzdFN1YnNjcmliZVByaWNlLCBQcmljZUpzb24sIFByaWNlSnNvbl07XG4gICdwcmkoYmFsYW5jZS5nZXRCYWxhbmNlKSc6IFtSZXF1ZXN0QmFsYW5jZSwgQmFsYW5jZUpzb25dO1xuICAncHJpKGJhbGFuY2UuZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlQmFsYW5jZSwgQmFsYW5jZUpzb24sIEJhbGFuY2VKc29uXTtcbiAgJ3ByaShjcm93ZGxvYW4uZ2V0Q3Jvd2Rsb2FuKSc6IFtSZXF1ZXN0Q3Jvd2Rsb2FuLCBDcm93ZGxvYW5Kc29uXTtcbiAgJ3ByaShjcm93ZGxvYW4uZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlQ3Jvd2Rsb2FuLCBDcm93ZGxvYW5Kc29uLCBDcm93ZGxvYW5Kc29uXTtcblxuICAvLyBQaGlzaGluZyBwYWdlXG4gICdwcmkocGhpc2hpbmcucGFzcyknOiBbUmVxdWVzdFBhc3NQaGlzaGluZ1BhZ2UsIGJvb2xlYW5dO1xuXG4gIC8vIE1hbnRhIHBheVxuICAncHJpKG1hbnRhUGF5LmVuYWJsZSknOiBbTWFudGFQYXlFbmFibGVQYXJhbXMsIE1hbnRhUGF5RW5hYmxlUmVzcG9uc2VdO1xuICAncHJpKG1hbnRhUGF5LmRpc2FibGUpJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkobWFudGFQYXkuZ2V0WmtCYWxhbmNlKSc6IFtudWxsLCBudWxsXTtcbiAgJ3ByaShtYW50YVBheS5zdWJzY3JpYmVDb25maWcpJzogW251bGwsIE1hbnRhUGF5Q29uZmlnW10sIE1hbnRhUGF5Q29uZmlnW11dO1xuICAncHJpKG1hbnRhUGF5LnN1YnNjcmliZVN5bmNpbmdTdGF0ZSknOiBbbnVsbCwgTWFudGFQYXlTeW5jU3RhdGUsIE1hbnRhUGF5U3luY1N0YXRlXTtcbiAgJ3ByaShtYW50YVBheS5pbml0U3luY01hbnRhUGF5KSc6IFtzdHJpbmcsIG51bGxdO1xuXG4gIC8vIEF1dGhcbiAgJ3ByaShhdXRob3JpemUubGlzdFYyKSc6IFtudWxsLCBSZXNwb25zZUF1dGhvcml6ZUxpc3RdO1xuICAncHJpKGF1dGhvcml6ZS5yZXF1ZXN0c1YyKSc6IFtSZXF1ZXN0QXV0aG9yaXplU3Vic2NyaWJlLCBBdXRob3JpemVSZXF1ZXN0W10sIEF1dGhvcml6ZVJlcXVlc3RbXV07XG4gICdwcmkoYXV0aG9yaXplLmFwcHJvdmVWMiknOiBbUmVxdWVzdEF1dGhvcml6ZUFwcHJvdmVWMiwgYm9vbGVhbl07XG4gICdwcmkoYXV0aG9yaXplLmNoYW5nZVNpdGVBbGwpJzogW1JlcXVlc3RBdXRob3JpemF0aW9uQWxsLCBib29sZWFuLCBBdXRoVXJsc107XG4gICdwcmkoYXV0aG9yaXplLmNoYW5nZVNpdGUpJzogW1JlcXVlc3RBdXRob3JpemF0aW9uLCBib29sZWFuLCBBdXRoVXJsc107XG4gICdwcmkoYXV0aG9yaXplLmNoYW5nZVNpdGVQZXJBY2NvdW50KSc6IFtSZXF1ZXN0QXV0aG9yaXphdGlvblBlckFjY291bnQsIGJvb2xlYW4sIEF1dGhVcmxzXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZVBlclNpdGUpJzogW1JlcXVlc3RBdXRob3JpemF0aW9uUGVyU2l0ZSwgYm9vbGVhbl07XG4gICdwcmkoYXV0aG9yaXplLmNoYW5nZVNpdGVCbG9jayknOiBbUmVxdWVzdEF1dGhvcml6YXRpb25CbG9jaywgYm9vbGVhbl07XG4gICdwcmkoYXV0aG9yaXplLmZvcmdldFNpdGUpJzogW1JlcXVlc3RGb3JnZXRTaXRlLCBib29sZWFuLCBBdXRoVXJsc107XG4gICdwcmkoYXV0aG9yaXplLmZvcmdldEFsbFNpdGUpJzogW251bGwsIGJvb2xlYW4sIEF1dGhVcmxzXTtcbiAgJ3ByaShhdXRob3JpemUucmVqZWN0VjIpJzogW1JlcXVlc3RBdXRob3JpemVSZWplY3QsIGJvb2xlYW5dO1xuICAncHJpKGF1dGhvcml6ZS5jYW5jZWxWMiknOiBbUmVxdWVzdEF1dGhvcml6ZUNhbmNlbCwgYm9vbGVhbl07XG5cbiAgLyogQWNjb3VudCBtYW5hZ2VtZW50ICovXG5cbiAgLy8gVmFsaWRhdGVcbiAgJ3ByaShzZWVkLnZhbGlkYXRlVjIpJzogW1JlcXVlc3RTZWVkVmFsaWRhdGVWMiwgUmVzcG9uc2VTZWVkVmFsaWRhdGVWMl07XG4gICdwcmkocHJpdmF0ZUtleS52YWxpZGF0ZVYyKSc6IFtSZXF1ZXN0U2VlZFZhbGlkYXRlVjIsIFJlc3BvbnNlUHJpdmF0ZUtleVZhbGlkYXRlVjJdO1xuICAncHJpKGFjY291bnRzLmNoZWNrUHVibGljQW5kU2VjcmV0S2V5KSc6IFtSZXF1ZXN0Q2hlY2tQdWJsaWNBbmRTZWNyZXRLZXksIFJlc3BvbnNlQ2hlY2tQdWJsaWNBbmRTZWNyZXRLZXldO1xuXG4gIC8vIENyZWF0ZSBhY2NvdW50XG4gICdwcmkoc2VlZC5jcmVhdGVWMiknOiBbUmVxdWVzdFNlZWRDcmVhdGVWMiwgUmVzcG9uc2VTZWVkQ3JlYXRlVjJdO1xuICAncHJpKGFjY291bnRzLmNyZWF0ZS5zdXJpVjIpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlU3VyaVYyLCBSZXNwb25zZUFjY291bnRDcmVhdGVTdXJpVjJdO1xuICAncHJpKGFjY291bnRzLmNyZWF0ZS5leHRlcm5hbFYyKSc6IFtSZXF1ZXN0QWNjb3VudENyZWF0ZUV4dGVybmFsVjIsIEFjY291bnRFeHRlcm5hbEVycm9yW11dO1xuICAncHJpKGFjY291bnRzLmNyZWF0ZS5oYXJkd2FyZVYyKSc6IFtSZXF1ZXN0QWNjb3VudENyZWF0ZUhhcmR3YXJlVjIsIGJvb2xlYW5dO1xuICAncHJpKGFjY291bnRzLmNyZWF0ZS5oYXJkd2FyZU11bHRpcGxlKSc6IFtSZXF1ZXN0QWNjb3VudENyZWF0ZUhhcmR3YXJlTXVsdGlwbGUsIGJvb2xlYW5dO1xuICAncHJpKGFjY291bnRzLmNyZWF0ZS53aXRoU2VjcmV0KSc6IFtSZXF1ZXN0QWNjb3VudENyZWF0ZVdpdGhTZWNyZXRLZXksIFJlc3BvbnNlQWNjb3VudENyZWF0ZVdpdGhTZWNyZXRLZXldO1xuXG4gIC8vIEluamVjdCBhY2NvdW50XG4gICdwcmkoYWNjb3VudHMuaW5qZWN0LmFkZCknOiBbUmVxdWVzdEFkZEluamVjdGVkQWNjb3VudHMsIGJvb2xlYW5dO1xuICAncHJpKGFjY291bnRzLmluamVjdC5yZW1vdmUpJzogW1JlcXVlc3RSZW1vdmVJbmplY3RlZEFjY291bnRzLCBib29sZWFuXTtcblxuICAvLyBEZXJpdmVcbiAgJ3ByaShkZXJpdmF0aW9uLmNyZWF0ZVYyKSc6IFtSZXF1ZXN0RGVyaXZlQ3JlYXRlVjIsIGJvb2xlYW5dOyAvLyBTdWJzdHJhdGVcblxuICAvLyBSZXN0b3JlIGJ5IGpzb25cbiAgJ3ByaShqc29uLnJlc3RvcmVWMiknOiBbUmVxdWVzdEpzb25SZXN0b3JlVjIsIHZvaWRdO1xuICAncHJpKGpzb24uYmF0Y2hSZXN0b3JlVjIpJzogW1JlcXVlc3RCYXRjaFJlc3RvcmVWMiwgdm9pZF07XG5cbiAgLy8gRXhwb3J0IGFjY291bnRcbiAgJ3ByaShhY2NvdW50cy5leHBvcnRQcml2YXRlS2V5KSc6IFtSZXF1ZXN0QWNjb3VudEV4cG9ydFByaXZhdGVLZXksIFJlc3BvbnNlQWNjb3VudEV4cG9ydFByaXZhdGVLZXldO1xuXG4gIC8vIEN1cnJlbnQgYWNjb3VudFxuICAncHJpKGFjY291bnRzLnN1YnNjcmliZVdpdGhDdXJyZW50QWRkcmVzcyknOiBbUmVxdWVzdEFjY291bnRTdWJzY3JpYmUsIEFjY291bnRzV2l0aEN1cnJlbnRBZGRyZXNzLCBBY2NvdW50c1dpdGhDdXJyZW50QWRkcmVzc107XG4gICdwcmkoYWNjb3VudHMudXBkYXRlQ3VycmVudEFkZHJlc3MpJzogW3N0cmluZywgYm9vbGVhbl07IC8vIG9sZFxuICAncHJpKGN1cnJlbnRBY2NvdW50LnNhdmVBZGRyZXNzKSc6IFtSZXF1ZXN0Q3VycmVudEFjY291bnRBZGRyZXNzLCBDdXJyZW50QWNjb3VudEluZm9dO1xuICAncHJpKGFjY291bnRzLmdldC5tZXRhKSc6IFtSZXF1ZXN0QWNjb3VudE1ldGEsIFJlc3BvbnNlQWNjb3VudE1ldGFdO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICAncHJpKGFjY291bnRzLnNhdmVSZWNlbnQpJzogW1JlcXVlc3RTYXZlUmVjZW50QWNjb3VudCwgS2V5cmluZ0FkZHJlc3NdO1xuICAncHJpKGFjY291bnRzLnN1YnNjcmliZUFkZHJlc3NlcyknOiBbbnVsbCwgQWRkcmVzc0Jvb2tJbmZvLCBBZGRyZXNzQm9va0luZm9dO1xuICAncHJpKGFjY291bnRzLmVkaXRDb250YWN0KSc6IFtSZXF1ZXN0RWRpdENvbnRhY3RBY2NvdW50LCBib29sZWFuXTtcbiAgJ3ByaShhY2NvdW50cy5kZWxldGVDb250YWN0KSc6IFtSZXF1ZXN0RGVsZXRlQ29udGFjdEFjY291bnQsIGJvb2xlYW5dO1xuXG4gIC8vIERvbWFpbiBuYW1lXG4gICdwcmkoYWNjb3VudHMucmVzb2x2ZURvbWFpblRvQWRkcmVzcyknOiBbUmVzb2x2ZURvbWFpblJlcXVlc3QsIHN0cmluZyB8IHVuZGVmaW5lZF07XG4gICdwcmkoYWNjb3VudHMucmVzb2x2ZUFkZHJlc3NUb0RvbWFpbiknOiBbUmVzb2x2ZUFkZHJlc3NUb0RvbWFpblJlcXVlc3QsIHN0cmluZyB8IHVuZGVmaW5lZF07XG5cbiAgLy8gRm9yIGlucHV0IFVJXG4gICdwcmkoYWNjb3VudHMuc3Vic2NyaWJlQWNjb3VudHNJbnB1dEFkZHJlc3MpJzogW1JlcXVlc3RBY2NvdW50U3Vic2NyaWJlLCBzdHJpbmcsIE9wdGlvbklucHV0QWRkcmVzc107XG5cbiAgLyogQWNjb3VudCBtYW5hZ2VtZW50ICovXG5cbiAgLy8gU2V0dGluZ3NcbiAgJ3ByaShzZXR0aW5ncy5jaGFuZ2VCYWxhbmNlc1Zpc2liaWxpdHkpJzogW251bGwsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnN1YnNjcmliZSknOiBbbnVsbCwgVWlTZXR0aW5ncywgVWlTZXR0aW5nc107XG4gICdwcmkoc2V0dGluZ3MuZ2V0TG9nb01hcHMpJzogW251bGwsIEFsbExvZ29NYXBdO1xuICAncHJpKHNldHRpbmdzLnNhdmVBY2NvdW50QWxsTG9nbyknOiBbc3RyaW5nLCBib29sZWFuLCBVaVNldHRpbmdzXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlVGhlbWUpJzogW1RoZW1lTmFtZXMsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVCcm93c2VyQ29uZmlybWF0aW9uVHlwZSknOiBbQnJvd3NlckNvbmZpcm1hdGlvblR5cGUsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVDYW1lcmEpJzogW1JlcXVlc3RDYW1lcmFTZXR0aW5ncywgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUF1dG9Mb2NrVGltZSknOiBbUmVxdWVzdENoYW5nZVRpbWVBdXRvTG9jaywgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZVVubG9ja1R5cGUpJzogW1JlcXVlc3RVbmxvY2tUeXBlLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlRW5hYmxlQ2hhaW5QYXRyb2wpJzogW1JlcXVlc3RDaGFuZ2VFbmFibGVDaGFpblBhdHJvbCwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUxhbmd1YWdlKSc6IFtSZXF1ZXN0Q2hhbmdlTGFuZ3VhZ2UsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVTaG93WmVyb0JhbGFuY2UpJzogW1JlcXVlc3RDaGFuZ2VTaG93WmVyb0JhbGFuY2UsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVTaG93QmFsYW5jZSknOiBbUmVxdWVzdENoYW5nZVNob3dCYWxhbmNlLCBib29sZWFuXTtcblxuICAvLyBTdWJzY3JpcHRpb25cbiAgJ3ByaSh0cmFuc2FjdGlvbi5oaXN0b3J5LmdldFN1YnNjcmlwdGlvbiknOiBbbnVsbCwgVHJhbnNhY3Rpb25IaXN0b3J5SXRlbVtdLCBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtW11dO1xuICAvLyAncHJpKHRyYW5zYWN0aW9uLmhpc3RvcnkuYWRkKSc6IFtSZXF1ZXN0VHJhbnNhY3Rpb25IaXN0b3J5QWRkLCBib29sZWFuLCBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtW11dO1xuICAncHJpKHRyYW5zZmVyLmNoZWNrUmVmZXJlbmNlQ291bnQpJzogW1JlcXVlc3RUcmFuc2ZlckNoZWNrUmVmZXJlbmNlQ291bnQsIGJvb2xlYW5dO1xuICAncHJpKHRyYW5zZmVyLmNoZWNrU3VwcG9ydGluZyknOiBbUmVxdWVzdFRyYW5zZmVyQ2hlY2tTdXBwb3J0aW5nLCBTdXBwb3J0VHJhbnNmZXJSZXNwb25zZV07XG4gICdwcmkodHJhbnNmZXIuZ2V0RXhpc3RlbnRpYWxEZXBvc2l0KSc6IFtSZXF1ZXN0VHJhbnNmZXJFeGlzdGVudGlhbERlcG9zaXQsIHN0cmluZ107XG4gICdwcmkodHJhbnNmZXIuZ2V0TWF4VHJhbnNmZXJhYmxlKSc6IFtSZXF1ZXN0TWF4VHJhbnNmZXJhYmxlLCBBbW91bnREYXRhXTtcbiAgJ3ByaShzdWJzY3JpcHRpb24uY2FuY2VsKSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGZyZWVCYWxhbmNlLmdldCknOiBbUmVxdWVzdEZyZWVCYWxhbmNlLCBBbW91bnREYXRhXTtcbiAgJ3ByaShmcmVlQmFsYW5jZS5zdWJzY3JpYmUpJzogW1JlcXVlc3RGcmVlQmFsYW5jZSwgQW1vdW50RGF0YSwgQW1vdW50RGF0YV07XG5cbiAgLy8gVHJhbnNmZXJcbiAgJ3ByaShhY2NvdW50cy5jaGVja1RyYW5zZmVyKSc6IFtSZXF1ZXN0Q2hlY2tUcmFuc2ZlciwgVmFsaWRhdGVUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShhY2NvdW50cy50cmFuc2ZlciknOiBbUmVxdWVzdFRyYW5zZmVyLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuXG4gICdwcmkoYWNjb3VudHMuY2hlY2tDcm9zc0NoYWluVHJhbnNmZXIpJzogW1JlcXVlc3RDaGVja0Nyb3NzQ2hhaW5UcmFuc2ZlciwgVmFsaWRhdGVUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShhY2NvdW50cy5jcm9zc0NoYWluVHJhbnNmZXIpJzogW1JlcXVlc3RDcm9zc0NoYWluVHJhbnNmZXIsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG5cbiAgLy8gQ29uZmlybWF0aW9uIFF1ZXVlc1xuICAncHJpKGNvbmZpcm1hdGlvbnMuc3Vic2NyaWJlKSc6IFtSZXF1ZXN0Q29uZmlybWF0aW9uc1N1YnNjcmliZSwgQ29uZmlybWF0aW9uc1F1ZXVlLCBDb25maXJtYXRpb25zUXVldWVdO1xuICAncHJpKGNvbmZpcm1hdGlvbnMuY29tcGxldGUpJzogW1JlcXVlc3RDb25maXJtYXRpb25Db21wbGV0ZSwgYm9vbGVhbl07XG5cbiAgJ3B1Yih1dGlscy5nZXRSYW5kb20pJzogW1JhbmRvbVRlc3RSZXF1ZXN0LCBudW1iZXJdO1xuICAncHViKGFjY291bnRzLmxpc3RWMiknOiBbUmVxdWVzdEFjY291bnRMaXN0LCBJbmplY3RlZEFjY291bnRbXV07XG4gICdwdWIoYWNjb3VudHMuc3Vic2NyaWJlVjIpJzogW1JlcXVlc3RBY2NvdW50U3Vic2NyaWJlLCBzdHJpbmcsIEluamVjdGVkQWNjb3VudFtdXTtcbiAgJ3B1YihhY2NvdW50cy51bnN1YnNjcmliZSknOiBbUmVxdWVzdEFjY291bnRVbnN1YnNjcmliZSwgYm9vbGVhbl07XG5cbiAgLy8gU2lnbiBRUlxuICAncHJpKGFjY291bnQuaXNMb2NrZWQpJzogW1JlcXVlc3RBY2NvdW50SXNMb2NrZWQsIFJlc3BvbnNlQWNjb3VudElzTG9ja2VkXTtcbiAgJ3ByaShxci50cmFuc2FjdGlvbi5wYXJzZS5zdWJzdHJhdGUpJzogW1JlcXVlc3RQYXJzZVRyYW5zYWN0aW9uU3Vic3RyYXRlLCBSZXNwb25zZVBhcnNlVHJhbnNhY3Rpb25TdWJzdHJhdGVdO1xuICAncHJpKHFyLnRyYW5zYWN0aW9uLnBhcnNlLmV2bSknOiBbUmVxdWVzdFFyUGFyc2VSTFAsIFJlc3BvbnNlUXJQYXJzZVJMUF07XG4gICdwcmkocXIuc2lnbi5zdWJzdHJhdGUpJzogW1JlcXVlc3RRclNpZ25TdWJzdHJhdGUsIFJlc3BvbnNlUXJTaWduU3Vic3RyYXRlXTtcbiAgJ3ByaShxci5zaWduLmV2bSknOiBbUmVxdWVzdFFyU2lnbkV2bSwgUmVzcG9uc2VRclNpZ25Fdm1dO1xuXG4gIC8vIEV4dGVybmFsIGFjY291bnQgcmVxdWVzdFxuICAncHJpKGFjY291bnQuZXh0ZXJuYWwucmVqZWN0KSc6IFtSZXF1ZXN0UmVqZWN0RXh0ZXJuYWxSZXF1ZXN0LCBSZXNwb25zZVJlamVjdEV4dGVybmFsUmVxdWVzdF07XG4gICdwcmkoYWNjb3VudC5leHRlcm5hbC5yZXNvbHZlKSc6IFtSZXF1ZXN0UmVzb2x2ZUV4dGVybmFsUmVxdWVzdCwgUmVzcG9uc2VSZXNvbHZlRXh0ZXJuYWxSZXF1ZXN0XTtcblxuICAvLyBFdm1cbiAgJ2V2bShldmVudHMuc3Vic2NyaWJlKSc6IFtSZXF1ZXN0RXZtRXZlbnRzLCBib29sZWFuLCBFdm1FdmVudF07XG4gICdldm0ocmVxdWVzdCknOiBbUmVxdWVzdEFyZ3VtZW50cywgdW5rbm93bl07XG4gICdldm0ocHJvdmlkZXIuc2VuZCknOiBbUmVxdWVzdEV2bVByb3ZpZGVyU2VuZCwgc3RyaW5nIHwgbnVtYmVyLCBSZXNwb25zZUV2bVByb3ZpZGVyU2VuZF1cblxuICAvLyBFdm0gVHJhbnNhY3Rpb25cbiAgJ3ByaShldm0udHJhbnNhY3Rpb24ucGFyc2UuaW5wdXQpJzogW1JlcXVlc3RQYXJzZUV2bUNvbnRyYWN0SW5wdXQsIFJlc3BvbnNlUGFyc2VFdm1Db250cmFjdElucHV0XTtcblxuICAvLyBBdXRob3JpemVcbiAgJ3ByaShhdXRob3JpemUuc3Vic2NyaWJlKSc6IFtudWxsLCBBdXRoVXJscywgQXV0aFVybHNdO1xuXG4gIC8vIEtleXJpbmcgc3RhdGVcbiAgJ3ByaShrZXlyaW5nLnN1YnNjcmliZSknOiBbbnVsbCwgS2V5cmluZ1N0YXRlLCBLZXlyaW5nU3RhdGVdO1xuICAncHJpKGtleXJpbmcuY2hhbmdlKSc6IFtSZXF1ZXN0Q2hhbmdlTWFzdGVyUGFzc3dvcmQsIFJlc3BvbnNlQ2hhbmdlTWFzdGVyUGFzc3dvcmRdO1xuICAncHJpKGtleXJpbmcubWlncmF0ZSknOiBbUmVxdWVzdE1pZ3JhdGVQYXNzd29yZCwgUmVzcG9uc2VNaWdyYXRlUGFzc3dvcmRdO1xuICAncHJpKGtleXJpbmcudW5sb2NrKSc6IFtSZXF1ZXN0VW5sb2NrS2V5cmluZywgUmVzcG9uc2VVbmxvY2tLZXlyaW5nXTtcbiAgJ3ByaShrZXlyaW5nLmxvY2spJzogW251bGwsIHZvaWRdO1xuICAncHJpKGtleXJpbmcuZXhwb3J0Lm1uZW1vbmljKSc6IFtSZXF1ZXN0S2V5cmluZ0V4cG9ydE1uZW1vbmljLCBSZXNwb25zZUtleXJpbmdFeHBvcnRNbmVtb25pY107XG4gICdwcmkoa2V5cmluZy5yZXNldCknOiBbUmVxdWVzdFJlc2V0V2FsbGV0LCBSZXNwb25zZVJlc2V0V2FsbGV0XTtcblxuICAvLyBTaWduaW5nXG4gICdwcmkoc2lnbmluZy5hcHByb3ZlLnBhc3N3b3JkVjIpJzogW1JlcXVlc3RTaWduaW5nQXBwcm92ZVBhc3N3b3JkVjIsIGJvb2xlYW5dO1xuXG4gIC8vIERlcml2ZVxuICAncHJpKGRlcml2YXRpb24udmFsaWRhdGVWMiknOiBbUmVxdWVzdERlcml2ZVZhbGlkYXRlVjIsIFJlc3BvbnNlRGVyaXZlVmFsaWRhdGVWMl07XG4gICdwcmkoZGVyaXZhdGlvbi5nZXRMaXN0KSc6IFtSZXF1ZXN0R2V0RGVyaXZlQWNjb3VudHMsIFJlc3BvbnNlR2V0RGVyaXZlQWNjb3VudHNdO1xuICAncHJpKGRlcml2YXRpb24uY3JlYXRlLm11bHRpcGxlKSc6IFtSZXF1ZXN0RGVyaXZlQ3JlYXRlTXVsdGlwbGUsIGJvb2xlYW5dO1xuICAncHJpKGRlcml2YXRpb24uY3JlYXRlVjMpJzogW1JlcXVlc3REZXJpdmVDcmVhdGVWMywgYm9vbGVhbl07XG5cbiAgLy8gVHJhbnNhY3Rpb25cbiAgLy8gR2V0IFRyYW5zYWN0aW9uXG4gICdwcmkodHJhbnNhY3Rpb25zLmdldE9uZSknOiBbUmVxdWVzdEdldFRyYW5zYWN0aW9uLCBTV1RyYW5zYWN0aW9uUmVzdWx0XTtcbiAgJ3ByaSh0cmFuc2FjdGlvbnMuc3Vic2NyaWJlKSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBTV1RyYW5zYWN0aW9uUmVzdWx0PiwgUmVjb3JkPHN0cmluZywgU1dUcmFuc2FjdGlvblJlc3VsdD5dO1xuXG4gIC8vIE5vdGlmaWNhdGlvblxuICAncHJpKG5vdGlmaWNhdGlvbnMuc3Vic2NyaWJlKSc6IFtudWxsLCBOb3RpZmljYXRpb25bXSwgTm90aWZpY2F0aW9uW11dO1xuXG4gIC8vIFByaXZhdGVcbiAgJ3ByaShjcm9uLnJlbG9hZCknOiBbQ3JvblJlbG9hZFJlcXVlc3QsIGJvb2xlYW5dO1xuXG4gIC8vIE1vYmlsZVxuICAnbW9iaWxlKHBpbmcpJzogW251bGwsIHN0cmluZ107XG4gICdtb2JpbGUoY3JvbkFuZFN1YnNjcmlwdGlvbi5pbml0KSc6IFtSZXF1ZXN0SW5pdENyb25BbmRTdWJzY3JpcHRpb24sIEFjdGl2ZUNyb25BbmRTdWJzY3JpcHRpb25NYXBdO1xuICAnbW9iaWxlKGNyb25BbmRTdWJzY3JpcHRpb24uYWN0aXZlU2VydmljZS5zdWJzY3JpYmUpJzogW251bGwsIEFjdGl2ZUNyb25BbmRTdWJzY3JpcHRpb25NYXAsIEFjdGl2ZUNyb25BbmRTdWJzY3JpcHRpb25NYXBdO1xuICAnbW9iaWxlKGNyb25BbmRTdWJzY3JpcHRpb24uc3RhcnQpJzogW1JlcXVlc3RDcm9uQW5kU3Vic2NyaXB0aW9uQWN0aW9uLCB2b2lkXTtcbiAgJ21vYmlsZShjcm9uQW5kU3Vic2NyaXB0aW9uLnN0b3ApJzogW1JlcXVlc3RDcm9uQW5kU3Vic2NyaXB0aW9uQWN0aW9uLCB2b2lkXTtcbiAgJ21vYmlsZShjcm9uQW5kU3Vic2NyaXB0aW9uLnJlc3RhcnQpJzogW1JlcXVlc3RDcm9uQW5kU3Vic2NyaXB0aW9uQWN0aW9uLCB2b2lkXTtcbiAgJ21vYmlsZShjcm9uLnN0YXJ0KSc6IFtDcm9uU2VydmljZVR5cGVbXSwgdm9pZF07XG4gICdtb2JpbGUoY3Jvbi5zdG9wKSc6IFtDcm9uU2VydmljZVR5cGVbXSwgdm9pZF07XG4gICdtb2JpbGUoY3Jvbi5yZXN0YXJ0KSc6IFtDcm9uU2VydmljZVR5cGVbXSwgdm9pZF07XG4gICdtb2JpbGUoc3Vic2NyaXB0aW9uLnN0YXJ0KSc6IFtTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShzdWJzY3JpcHRpb24uc3RvcCknOiBbU3Vic2NyaXB0aW9uU2VydmljZVR5cGVbXSwgdm9pZF07XG4gICdtb2JpbGUoc3Vic2NyaXB0aW9uLnJlc3RhcnQpJzogW1N1YnNjcmlwdGlvblNlcnZpY2VUeXBlW10sIHZvaWRdO1xuXG4gIC8vIFBzcCB0b2tlblxuICAncHViKHRva2VuLmFkZCknOiBbUmVxdWVzdEFkZFBzcFRva2VuLCBib29sZWFuXTtcblxuICAvLy8gV2FsbGV0IGNvbm5lY3RcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LmNvbm5lY3QpJzogW1JlcXVlc3RDb25uZWN0V2FsbGV0Q29ubmVjdCwgYm9vbGVhbl07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5yZXF1ZXN0cy5jb25uZWN0LnN1YnNjcmliZSknOiBbbnVsbCwgV2FsbGV0Q29ubmVjdFNlc3Npb25SZXF1ZXN0W10sIFdhbGxldENvbm5lY3RTZXNzaW9uUmVxdWVzdFtdXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnNlc3Npb24uYXBwcm92ZSknOiBbUmVxdWVzdEFwcHJvdmVDb25uZWN0V2FsbGV0U2Vzc2lvbiwgYm9vbGVhbl07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5zZXNzaW9uLnJlamVjdCknOiBbUmVxdWVzdFJlamVjdENvbm5lY3RXYWxsZXRTZXNzaW9uLCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnNlc3Npb24ucmVjb25uZWN0KSc6IFtSZXF1ZXN0UmVjb25uZWN0Q29ubmVjdFdhbGxldFNlc3Npb24sIGJvb2xlYW5dO1xuICAncHJpKHdhbGxldENvbm5lY3Quc2Vzc2lvbi5zdWJzY3JpYmUpJzogW251bGwsIFNlc3Npb25UeXBlcy5TdHJ1Y3RbXSwgU2Vzc2lvblR5cGVzLlN0cnVjdFtdXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnNlc3Npb24uZGlzY29ubmVjdCknOiBbUmVxdWVzdERpc2Nvbm5lY3RXYWxsZXRDb25uZWN0U2Vzc2lvbiwgYm9vbGVhbl07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5yZXF1ZXN0cy5ub3RTdXBwb3J0LnN1YnNjcmliZSknOiBbbnVsbCwgV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnRSZXF1ZXN0W10sIFdhbGxldENvbm5lY3ROb3RTdXBwb3J0UmVxdWVzdFtdXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0Lm5vdFN1cHBvcnQuYXBwcm92ZSknOiBbUmVxdWVzdEFwcHJvdmVXYWxsZXRDb25uZWN0Tm90U3VwcG9ydCwgYm9vbGVhbl07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5ub3RTdXBwb3J0LnJlamVjdCknOiBbUmVxdWVzdFJlamVjdFdhbGxldENvbm5lY3ROb3RTdXBwb3J0LCBib29sZWFuXTtcblxuICAvLy8gTWV0YWRhdGFcbiAgJ3ByaShtZXRhZGF0YS5maW5kKSc6IFtSZXF1ZXN0RmluZFJhd01ldGFkYXRhLCBSZXNwb25zZUZpbmRSYXdNZXRhZGF0YV07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25NZXRhZGF0YVR5cGUge1xuICB2ZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE9TVHlwZSA9ICdNYWMgT1MnIHwgJ2lPUycgfCAnV2luZG93cycgfCAnQW5kcm9pZCcgfCAnTGludXgnIHwgJ1Vua25vd24nO1xuZXhwb3J0IGNvbnN0IE1vYmlsZU9TOiBPU1R5cGVbXSA9IFsnaU9TJywgJ0FuZHJvaWQnXTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgY29uc3QgQ1JPTl9SRUZSRVNIX1BSSUNFX0lOVEVSVkFMID0gMzAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9BVVRPX1JFQ09WRVJfRE9UU0FNQV9JTlRFUlZBTCA9IDYwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fQVVUT19SRUNPVkVSX1dFQjNfSU5URVJWQUwgPSA5MDAwMDtcbmV4cG9ydCBjb25zdCBBQ0FMQV9SRUZSRVNIX0NST1dETE9BTl9JTlRFUlZBTCA9IDMwMDAwMDtcbmV4cG9ydCBjb25zdCBBU1RBUl9SRUZSRVNIX0JBTEFOQ0VfSU5URVJWQUwgPSA2MDAwMDtcbmV4cG9ydCBjb25zdCBTVUJfVE9LRU5fUkVGUkVTSF9CQUxBTkNFX0lOVEVSVkFMID0gNjAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9SRUZSRVNIX05GVF9JTlRFUlZBTCA9IDcyMDAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9SRUZSRVNIX1NUQUtJTkdfUkVXQVJEX0lOVEVSVkFMID0gOTAwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fUkVGUkVTSF9TVEFLSU5HX1JFV0FSRF9GQVNUX0lOVEVSVkFMID0gMzAwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fUkVGUkVTSF9ISVNUT1JZX0lOVEVSVkFMID0gOTAwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fR0VUX0FQSV9NQVBfU1RBVFVTID0gMTAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9SRUZSRVNIX0NIQUlOX1NUQUtJTkdfTUVUQURBVEEgPSA5MDAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9SRUZSRVNIX0NIQUlOX05PTUlOQVRPUl9NRVRBREFUQSA9IDE4MDAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9SRUNPVkVSX0hJU1RPUllfSU5URVJWQUwgPSAzMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX1NZTkNfTUFOVEFfUEFZID0gMzAwMDAwO1xuZXhwb3J0IGNvbnN0IE1BTlRBX1BBWV9CQUxBTkNFX0lOVEVSVkFMID0gMzAwMDA7XG5cbmV4cG9ydCBjb25zdCBBTExfQUNDT1VOVF9LRVkgPSAnQUxMJztcbmV4cG9ydCBjb25zdCBBTExfTkVUV09SS19LRVkgPSAnYWxsJztcbmV4cG9ydCBjb25zdCBBTExfR0VORVNJU19IQVNIID0gbnVsbDtcbmV4cG9ydCBjb25zdCBJR05PUkVfR0VUX1NVQlNUUkFURV9GRUFUVVJFU19MSVNUOiBzdHJpbmdbXSA9IFsnYXN0YXJFdm0nLCAnZXRoZXJldW0nLCAnZXRoZXJldW1fZ29lcmxpJywgJ2JpbmFuY2UnLCAnYmluYW5jZV90ZXN0JywgJ2JvYmFfcmlua2VieScsICdib2JhJywgJ2JvYmFiYXNlJywgJ2JvYmFiZWFtJ107XG5leHBvcnQgY29uc3QgSUdOT1JFX1FSX1NJR05FUjogc3RyaW5nW10gPSBbXTtcblxuZXhwb3J0IGNvbnN0IFhDTV9NSU5fQU1PVU5UX1JBVElPID0gMS4yO1xuXG5leHBvcnQgKiBmcm9tICcuL3N0YWtpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9zdG9yYWdlJztcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgY29uc3QgUFJFREVGSU5FRF9TVEFLSU5HX1BPT0w6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG4gIGt1c2FtYTogODAsXG4gIHBvbGthZG90OiAzOVxufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgY29uc3QgTEFOR1VBR0UgPSAnY3VycmVudC1sYW5ndWFnZSc7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5jb25zdCBBTExPV0VEX1BBVEggPSBbXG4gICcvJyxcbiAgJy9zZXR0aW5ncy9zZWN1cml0eScsXG4gICcvYWNjb3VudHMvY29ubmVjdC1sZWRnZXInLFxuICAnL2FjY291bnRzL3Jlc3RvcmUtanNvbicsXG4gICcvYWNjb3VudHMvZGV0YWlsJyxcbiAgJy9hY2NvdW50cy9uZXctc2VlZC1waHJhc2UnXG5dIGFzIGNvbnN0O1xuY29uc3QgUEhJU0hJTkdfUEFHRV9SRURJUkVDVCA9ICcvcGhpc2hpbmctcGFnZS1kZXRlY3RlZCc7XG5jb25zdCBFWFRFTlNJT05fUFJFRklYID0gcHJvY2Vzcy5lbnYuRVhURU5TSU9OX1BSRUZJWCBhcyBzdHJpbmcgfHwgJyc7XG5jb25zdCBJRF9QUkVGSVggPSBwcm9jZXNzLmVudi5JRF9QUkVGSVggYXMgc3RyaW5nIHx8IEVYVEVOU0lPTl9QUkVGSVggfHwgJyc7XG5jb25zdCBQT1JUX01PQklMRSA9IGAke0VYVEVOU0lPTl9QUkVGSVh9bW9iaWxlYDtcbmNvbnN0IFBPUlRfQ09OVEVOVCA9IGAke0VYVEVOU0lPTl9QUkVGSVh9a29uaS1jb250ZW50YDtcbmNvbnN0IFBPUlRfRVhURU5TSU9OID0gYCR7RVhURU5TSU9OX1BSRUZJWH1rb25pLWV4dGVuc2lvbmA7XG5jb25zdCBNRVNTQUdFX09SSUdJTl9QQUdFID0gYCR7RVhURU5TSU9OX1BSRUZJWH1rb25pLXBhZ2VgO1xuY29uc3QgTUVTU0FHRV9PUklHSU5fQ09OVEVOVCA9IGAke0VYVEVOU0lPTl9QUkVGSVh9a29uaS1jb250ZW50YDtcbmNvbnN0IFBBU1NXT1JEX0VYUElSWV9NSU4gPSAxNTtcbmNvbnN0IFBBU1NXT1JEX0VYUElSWV9NUyA9IFBBU1NXT1JEX0VYUElSWV9NSU4gKiA2MCAqIDEwMDA7XG5cbmV4cG9ydCB7XG4gIEFMTE9XRURfUEFUSCxcbiAgUEFTU1dPUkRfRVhQSVJZX01JTixcbiAgUEFTU1dPUkRfRVhQSVJZX01TLFxuICBQSElTSElOR19QQUdFX1JFRElSRUNULFxuICBFWFRFTlNJT05fUFJFRklYLFxuICBJRF9QUkVGSVgsXG4gIFBPUlRfTU9CSUxFLFxuICBQT1JUX0NPTlRFTlQsXG4gIFBPUlRfRVhURU5TSU9OLFxuICBNRVNTQUdFX09SSUdJTl9QQUdFLFxuICBNRVNTQUdFX09SSUdJTl9DT05URU5UXG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyByZXNvbHZlQWRkcmVzc1RvRG9tYWluLCByZXNvbHZlRG9tYWluVG9BZGRyZXNzLCBTdXBwb3J0ZWRDaGFpbklkIH0gZnJvbSAnQGF6bnMvcmVzb2x2ZXItY29yZSc7XG5cbmltcG9ydCB7IEFwaVByb21pc2UgfSBmcm9tICdAcG9sa2Fkb3QvYXBpJztcblxuZXhwb3J0IGNvbnN0IEVOU19TVUZGSVggPSAnLmV0aCc7XG5leHBvcnQgY29uc3QgVFpFUk9fSURfU1VGRklYID0gJy50emVybyc7XG5cbmV4cG9ydCBjb25zdCBBWkVST19JRF9TVUZGSVggPSAnLmF6ZXJvJztcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9ET01BSU5fU1VGRklYID0gW1xuICBFTlNfU1VGRklYLFxuICBUWkVST19JRF9TVUZGSVgsXG4gIEFaRVJPX0lEX1NVRkZJWFxuXTtcblxuZXhwb3J0IGNvbnN0IENIQUlOU19TVVBQT1JURURfRE9NQUlOID0gW1xuICAnYWxlcGgnLFxuICAnYWxlcGhUZXN0J1xuXTtcblxuZXhwb3J0IGNvbnN0IEFaRVJPX0RPTUFJTl9DT05UUkFDVFMgPSBbXG4gICc1RnNCOTF0WFNFdU1qNmFremRQY3pBdG1CYVZLVG9xSG10QXdTVXpYaDQ5QVl6YUQnLFxuICAnNUNUUUJmQkM5U2ZkckNEQkpkZkxpeVcycGc5ejVXNkM2RXM4c0szMTNCTG5GZ0RmJ1xuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVBemVyb0RvbWFpblRvQWRkcmVzcyAoZG9tYWluOiBzdHJpbmcsIGNoYWluOiBzdHJpbmcsIGFwaTogQXBpUHJvbWlzZSk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gIGxldCBjaGFpbklkOiBTdXBwb3J0ZWRDaGFpbklkID0gU3VwcG9ydGVkQ2hhaW5JZC5BbGVwaFplcm87XG5cbiAgaWYgKGNoYWluID09PSAnYWxlcGhUZXN0Jykge1xuICAgIGNoYWluSWQgPSBTdXBwb3J0ZWRDaGFpbklkLkFsZXBoWmVyb1Rlc3RuZXQ7XG4gIH1cblxuICBjb25zdCBwcmltYXJ5RG9tYWlucyA9IGF3YWl0IHJlc29sdmVEb21haW5Ub0FkZHJlc3MoXG4gICAgZG9tYWluLFxuICAgIHtcbiAgICAgIGNoYWluSWQsXG4gICAgICBjdXN0b21BcGk6IGFwaVxuICAgIH1cbiAgKTtcblxuICBpZiAocHJpbWFyeURvbWFpbnMuZXJyb3IpIHtcbiAgICBjb25zb2xlLmRlYnVnKHByaW1hcnlEb21haW5zLmVycm9yKTtcbiAgfVxuXG4gIHJldHVybiBwcmltYXJ5RG9tYWlucz8uYWRkcmVzcyB8fCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlQXplcm9BZGRyZXNzVG9Eb21haW4gKGFkZHJlc3M6IHN0cmluZywgY2hhaW46IHN0cmluZywgYXBpOiBBcGlQcm9taXNlKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgbGV0IGNoYWluSWQ6IFN1cHBvcnRlZENoYWluSWQgPSBTdXBwb3J0ZWRDaGFpbklkLkFsZXBoWmVybztcblxuICBpZiAoY2hhaW4gPT09ICdhbGVwaFRlc3QnKSB7XG4gICAgY2hhaW5JZCA9IFN1cHBvcnRlZENoYWluSWQuQWxlcGhaZXJvVGVzdG5ldDtcbiAgfVxuXG4gIGNvbnN0IHByaW1hcnlEb21haW5zID0gYXdhaXQgcmVzb2x2ZUFkZHJlc3NUb0RvbWFpbihcbiAgICBhZGRyZXNzLFxuICAgIHtcbiAgICAgIGNoYWluSWQsXG4gICAgICBjdXN0b21BcGk6IGFwaVxuICAgIH1cbiAgKTtcblxuICBpZiAocHJpbWFyeURvbWFpbnMuZXJyb3IpIHtcbiAgICBjb25zb2xlLmRlYnVnKHByaW1hcnlEb21haW5zLmVycm9yKTtcbiAgfVxuXG4gIHJldHVybiBwcmltYXJ5RG9tYWlucz8ucHJpbWFyeURvbWFpbiB8fCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0F6ZXJvRG9tYWluIChpbnB1dDogc3RyaW5nKSB7XG4gIHJldHVybiBpbnB1dC5pbmNsdWRlcyhBWkVST19JRF9TVUZGSVgpIHx8IGlucHV0LmluY2x1ZGVzKFRaRVJPX0lEX1NVRkZJWCk7XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0NoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBDaGFpblN0YWtpbmdNZXRhZGF0YSwgTm9taW5hdGlvbkluZm8sIE5vbWluYXRvck1ldGFkYXRhLCBTdGFraW5nU3RhdHVzLCBTdGFraW5nVHlwZSwgVW5zdGFraW5nSW5mbywgVW5zdGFraW5nU3RhdHVzLCBWYWxpZGF0b3JJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBnZXRTdGFraW5nU3RhdHVzQnlOb21pbmF0aW9ucywgUGFsbGV0RGFwcHNTdGFraW5nQWNjb3VudExlZGdlciwgUGFsbGV0RGFwcHNTdGFraW5nRGFwcEluZm8gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2tvbmkvYXBpL3N0YWtpbmcvYm9uZGluZy91dGlscyc7XG5pbXBvcnQgeyBfU1RBS0lOR19FUkFfTEVOR1RIX01BUCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgX1N1YnN0cmF0ZUFwaSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS90eXBlcyc7XG5pbXBvcnQgeyBpc1VybCwgcGFyc2VSYXdOdW1iZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCc7XG5cbmltcG9ydCB7IFN1Ym1pdHRhYmxlRXh0cmluc2ljIH0gZnJvbSAnQHBvbGthZG90L2FwaS9wcm9taXNlL3R5cGVzJztcbmltcG9ydCB7IENvZGVjIH0gZnJvbSAnQHBvbGthZG90L3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IEJOLCBCTl9aRVJPIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuaW1wb3J0IHsgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlQXN0YXJTdGFraW5nTWV0YWRhdGEgKGNoYWluOiBzdHJpbmcsIHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSwgY2FsbGJhY2s6IChjaGFpbjogc3RyaW5nLCByczogQ2hhaW5TdGFraW5nTWV0YWRhdGEpID0+IHZvaWQpIHtcbiAgcmV0dXJuIHN1YnN0cmF0ZUFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmN1cnJlbnRFcmEoKF9jdXJyZW50RXJhOiBDb2RlYykgPT4ge1xuICAgIGNvbnN0IGVyYSA9IF9jdXJyZW50RXJhLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbWluRGVsZWdhdG9yU3Rha2UgPSBzdWJzdHJhdGVBcGkuYXBpLmNvbnN0cy5kYXBwc1N0YWtpbmcubWluaW11bVN0YWtpbmdBbW91bnQudG9TdHJpbmcoKTtcbiAgICBjb25zdCB1bnN0YWtpbmdEZWxheSA9IHN1YnN0cmF0ZUFwaS5hcGkuY29uc3RzLmRhcHBzU3Rha2luZy51bmJvbmRpbmdQZXJpb2QudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IHVuc3Rha2luZ1BlcmlvZCA9IHBhcnNlSW50KHVuc3Rha2luZ0RlbGF5KSAqIF9TVEFLSU5HX0VSQV9MRU5HVEhfTUFQW2NoYWluXTtcblxuICAgIGNhbGxiYWNrKGNoYWluLCB7XG4gICAgICBjaGFpbixcbiAgICAgIHR5cGU6IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCxcbiAgICAgIGVyYTogcGFyc2VJbnQoZXJhKSxcbiAgICAgIG1pblN0YWtlOiBtaW5EZWxlZ2F0b3JTdGFrZSxcbiAgICAgIG1heFZhbGlkYXRvclBlck5vbWluYXRvcjogMTAwLCAvLyB0ZW1wb3JhcnkgZml4IGZvciBBc3RhciwgdGhlcmUncyBubyBsaW1pdCBmb3Igbm93XG4gICAgICBtYXhXaXRoZHJhd2FsUmVxdWVzdFBlclZhbGlkYXRvcjogMSwgLy8gYnkgZGVmYXVsdFxuICAgICAgYWxsb3dDYW5jZWxVbnN0YWtpbmc6IHRydWUsXG4gICAgICB1bnN0YWtpbmdQZXJpb2RcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3RhclN0YWtpbmdNZXRhZGF0YSAoY2hhaW46IHN0cmluZywgc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpKTogUHJvbWlzZTxDaGFpblN0YWtpbmdNZXRhZGF0YT4ge1xuICBjb25zdCBhcHJQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXN0YXIubmV0d29yay9hcGkvdjEvJHtjaGFpbn0vZGFwcHMtc3Rha2luZy9hcHJgLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXNwLmpzb24oKSk7XG4gICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH0pO1xuXG4gIGNvbnN0IHRpbWVvdXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICB9LCA4MDAwKTtcbiAgfSk7XG5cbiAgY29uc3QgYXByUmFjZVByb21pc2UgPSBQcm9taXNlLnJhY2UoW1xuICAgIHRpbWVvdXQsXG4gICAgYXByUHJvbWlzZVxuICBdKTsgLy8gbmVlZCByYWNlIGJlY2F1c2UgQVBJIG9mdGVuIHRpbWVvdXRcblxuICBjb25zdCBbYXBySW5mbywgY2hhaW5BcGldID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGFwclJhY2VQcm9taXNlLFxuICAgIHN1YnN0cmF0ZUFwaS5pc1JlYWR5XG4gIF0pO1xuXG4gIGNvbnN0IGVyYSA9IChhd2FpdCBjaGFpbkFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmN1cnJlbnRFcmEoKSkudG9TdHJpbmcoKTtcbiAgY29uc3QgbWluRGVsZWdhdG9yU3Rha2UgPSBjaGFpbkFwaS5hcGkuY29uc3RzLmRhcHBzU3Rha2luZy5taW5pbXVtU3Rha2luZ0Ftb3VudC50b1N0cmluZygpO1xuICBjb25zdCB1bnN0YWtpbmdEZWxheSA9IGNoYWluQXBpLmFwaS5jb25zdHMuZGFwcHNTdGFraW5nLnVuYm9uZGluZ1BlcmlvZC50b1N0cmluZygpO1xuXG4gIGNvbnN0IHVuc3Rha2luZ1BlcmlvZCA9IHBhcnNlSW50KHVuc3Rha2luZ0RlbGF5KSAqIF9TVEFLSU5HX0VSQV9MRU5HVEhfTUFQW2NoYWluXTtcblxuICByZXR1cm4ge1xuICAgIGNoYWluLFxuICAgIHR5cGU6IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCxcbiAgICBleHBlY3RlZFJldHVybjogYXBySW5mbyAhPT0gbnVsbCA/IGFwckluZm8gYXMgbnVtYmVyIDogdW5kZWZpbmVkLFxuICAgIGVyYTogcGFyc2VJbnQoZXJhKSxcbiAgICBtaW5TdGFrZTogbWluRGVsZWdhdG9yU3Rha2UsXG4gICAgbWF4VmFsaWRhdG9yUGVyTm9taW5hdG9yOiAxMDAsIC8vIHRlbXBvcmFyeSBmaXggZm9yIEFzdGFyLCB0aGVyZSdzIG5vIGxpbWl0IGZvciBub3dcbiAgICBtYXhXaXRoZHJhd2FsUmVxdWVzdFBlclZhbGlkYXRvcjogMSwgLy8gYnkgZGVmYXVsdFxuICAgIGFsbG93Q2FuY2VsVW5zdGFraW5nOiB0cnVlLFxuICAgIHVuc3Rha2luZ1BlcmlvZFxuICB9IGFzIENoYWluU3Rha2luZ01ldGFkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3Vic2NyaWJlQXN0YXJOb21pbmF0b3JNZXRhZGF0YSAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCBhZGRyZXNzOiBzdHJpbmcsIHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSwgbGVkZ2VyOiBQYWxsZXREYXBwc1N0YWtpbmdBY2NvdW50TGVkZ2VyKSB7XG4gIGNvbnN0IG5vbWluYXRpb25MaXN0OiBOb21pbmF0aW9uSW5mb1tdID0gW107XG4gIGNvbnN0IHVuc3Rha2luZ0xpc3Q6IFVuc3Rha2luZ0luZm9bXSA9IFtdO1xuXG4gIGNvbnN0IGFsbERhcHBzUmVxID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXN0YXIubmV0d29yay9hcGkvdjEvJHtjaGFpbkluZm8uc2x1Z30vZGFwcHMtc3Rha2luZy9kYXBwc2AsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3AuanNvbigpKTtcbiAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfSk7XG5cbiAgY29uc3QgW19hbGxEYXBwcywgX2VyYSwgX3N0YWtlckluZm9dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGFsbERhcHBzUmVxLFxuICAgIHN1YnN0cmF0ZUFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmN1cnJlbnRFcmEoKSxcbiAgICBzdWJzdHJhdGVBcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5nZW5lcmFsU3Rha2VySW5mby5lbnRyaWVzKGFkZHJlc3MpXG4gIF0pO1xuXG4gIGNvbnN0IGN1cnJlbnRFcmEgPSBfZXJhLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG1pbkRlbGVnYXRvclN0YWtlID0gc3Vic3RyYXRlQXBpLmFwaS5jb25zdHMuZGFwcHNTdGFraW5nLm1pbmltdW1TdGFraW5nQW1vdW50LnRvU3RyaW5nKCk7XG4gIGNvbnN0IGFsbERhcHBzID0gX2FsbERhcHBzIGFzIFBhbGxldERhcHBzU3Rha2luZ0RhcHBJbmZvW107XG5cbiAgbGV0IGJuVG90YWxBY3RpdmVTdGFrZSA9IEJOX1pFUk87XG5cbiAgaWYgKF9zdGFrZXJJbmZvLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBkQXBwSW5mb01hcDogUmVjb3JkPHN0cmluZywgUGFsbGV0RGFwcHNTdGFraW5nRGFwcEluZm8+ID0ge307XG5cbiAgICBhbGxEYXBwcy5mb3JFYWNoKChkYXBwSW5mbykgPT4ge1xuICAgICAgZEFwcEluZm9NYXBbZGFwcEluZm8uYWRkcmVzcy50b0xvd2VyQ2FzZSgpXSA9IGRhcHBJbmZvO1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIF9zdGFrZXJJbmZvKSB7XG4gICAgICBjb25zdCBkYXRhID0gaXRlbVswXS50b0h1bWFuKCkgYXMgdW5rbm93biBhcyBhbnlbXTtcbiAgICAgIGNvbnN0IHN0YWtlZERhcHAgPSBkYXRhWzFdIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgICBjb25zdCBzdGFrZURhdGEgPSBpdGVtWzFdLnRvUHJpbWl0aXZlKCkgYXMgUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPltdPjtcbiAgICAgIGNvbnN0IHN0YWtlTGlzdCA9IHN0YWtlRGF0YS5zdGFrZXM7XG5cbiAgICAgIGNvbnN0IGRhcHBBZGRyZXNzID0gc3Rha2VkRGFwcC5Fdm0gPyBzdGFrZWREYXBwLkV2bS50b0xvd2VyQ2FzZSgpIDogc3Rha2VkRGFwcC5XYXNtO1xuICAgICAgY29uc3QgY3VycmVudFN0YWtlID0gc3Rha2VMaXN0LnNsaWNlKC0xKVswXS5zdGFrZWQudG9TdHJpbmcoKSB8fCAnMCc7XG5cbiAgICAgIGNvbnN0IGJuQ3VycmVudFN0YWtlID0gbmV3IEJOKGN1cnJlbnRTdGFrZSk7XG5cbiAgICAgIGlmIChibkN1cnJlbnRTdGFrZS5ndChCTl9aRVJPKSkge1xuICAgICAgICBjb25zdCBkYXBwU3Rha2luZ1N0YXR1cyA9IGJuQ3VycmVudFN0YWtlLmd0KEJOX1pFUk8pICYmIGJuQ3VycmVudFN0YWtlLmd0ZShuZXcgQk4obWluRGVsZWdhdG9yU3Rha2UpKSA/IFN0YWtpbmdTdGF0dXMuRUFSTklOR19SRVdBUkQgOiBTdGFraW5nU3RhdHVzLk5PVF9FQVJOSU5HO1xuXG4gICAgICAgIGJuVG90YWxBY3RpdmVTdGFrZSA9IGJuVG90YWxBY3RpdmVTdGFrZS5hZGQoYm5DdXJyZW50U3Rha2UpO1xuICAgICAgICBjb25zdCBkYXBwSW5mbyA9IGRBcHBJbmZvTWFwW2RhcHBBZGRyZXNzXTtcblxuICAgICAgICBub21pbmF0aW9uTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdGF0dXM6IGRhcHBTdGFraW5nU3RhdHVzLFxuICAgICAgICAgIGNoYWluOiBjaGFpbkluZm8uc2x1ZyxcbiAgICAgICAgICB2YWxpZGF0b3JBZGRyZXNzOiBkYXBwQWRkcmVzcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIGFjdGl2ZVN0YWtlOiBjdXJyZW50U3Rha2UsXG4gICAgICAgICAgdmFsaWRhdG9yTWluU3Rha2U6ICcwJyxcbiAgICAgICAgICB2YWxpZGF0b3JJZGVudGl0eTogZGFwcEluZm8/Lm5hbWUsXG4gICAgICAgICAgaGFzVW5zdGFraW5nOiBmYWxzZSAvLyBjYW5ub3QgZ2V0IHVuc3Rha2luZyBpbmZvIGJ5IGRhcHBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdW5sb2NraW5nQ2h1bmtzID0gbGVkZ2VyLnVuYm9uZGluZ0luZm8udW5sb2NraW5nQ2h1bmtzO1xuXG4gIGlmICh1bmxvY2tpbmdDaHVua3MubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgdW5sb2NraW5nQ2h1bmsgb2YgdW5sb2NraW5nQ2h1bmtzKSB7XG4gICAgICBjb25zdCBpc0NsYWltYWJsZSA9IHVubG9ja2luZ0NodW5rLnVubG9ja0VyYSAtIHBhcnNlSW50KGN1cnJlbnRFcmEpIDwgMDtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0VyYSA9IHVubG9ja2luZ0NodW5rLnVubG9ja0VyYSAtIHBhcnNlSW50KGN1cnJlbnRFcmEpO1xuICAgICAgY29uc3Qgd2FpdGluZ1RpbWUgPSByZW1haW5pbmdFcmEgKiBfU1RBS0lOR19FUkFfTEVOR1RIX01BUFtjaGFpbkluZm8uc2x1Z107XG5cbiAgICAgIHVuc3Rha2luZ0xpc3QucHVzaCh7XG4gICAgICAgIGNoYWluOiBjaGFpbkluZm8uc2x1ZyxcbiAgICAgICAgc3RhdHVzOiBpc0NsYWltYWJsZSA/IFVuc3Rha2luZ1N0YXR1cy5DTEFJTUFCTEUgOiBVbnN0YWtpbmdTdGF0dXMuVU5MT0NLSU5HLFxuICAgICAgICBjbGFpbWFibGU6IHVubG9ja2luZ0NodW5rLmFtb3VudC50b1N0cmluZygpLFxuICAgICAgICB3YWl0aW5nVGltZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vbWluYXRpb25MaXN0Lmxlbmd0aCA9PT0gMCAmJiB1bnN0YWtpbmdMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFpbjogY2hhaW5JbmZvLnNsdWcsXG4gICAgICB0eXBlOiBTdGFraW5nVHlwZS5OT01JTkFURUQsXG4gICAgICBhZGRyZXNzLFxuICAgICAgc3RhdHVzOiBTdGFraW5nU3RhdHVzLk5PVF9TVEFLSU5HLFxuICAgICAgYWN0aXZlU3Rha2U6ICcwJyxcbiAgICAgIG5vbWluYXRpb25zOiBbXSxcbiAgICAgIHVuc3Rha2luZ3M6IFtdXG4gICAgfSBhcyBOb21pbmF0b3JNZXRhZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHN0YWtpbmdTdGF0dXMgPSBnZXRTdGFraW5nU3RhdHVzQnlOb21pbmF0aW9ucyhiblRvdGFsQWN0aXZlU3Rha2UsIG5vbWluYXRpb25MaXN0KTtcblxuICByZXR1cm4ge1xuICAgIGNoYWluOiBjaGFpbkluZm8uc2x1ZyxcbiAgICB0eXBlOiBTdGFraW5nVHlwZS5OT01JTkFURUQsXG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBhY3RpdmVTdGFrZTogYm5Ub3RhbEFjdGl2ZVN0YWtlLnRvU3RyaW5nKCksXG4gICAgbm9taW5hdGlvbnM6IG5vbWluYXRpb25MaXN0LFxuICAgIHVuc3Rha2luZ3M6IHVuc3Rha2luZ0xpc3QsXG4gICAgc3RhdHVzOiBzdGFraW5nU3RhdHVzXG4gIH0gYXMgTm9taW5hdG9yTWV0YWRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3Rhck5vbWluYXRvck1ldGFkYXRhIChjaGFpbkluZm86IF9DaGFpbkluZm8sIGFkZHJlc3M6IHN0cmluZywgc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpKTogUHJvbWlzZTxOb21pbmF0b3JNZXRhZGF0YSB8IHVuZGVmaW5lZD4ge1xuICBpZiAoaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjaGFpbiA9IGNoYWluSW5mby5zbHVnO1xuICBjb25zdCBjaGFpbkFwaSA9IGF3YWl0IHN1YnN0cmF0ZUFwaS5pc1JlYWR5O1xuXG4gIGNvbnN0IG5vbWluYXRpb25MaXN0OiBOb21pbmF0aW9uSW5mb1tdID0gW107XG4gIGNvbnN0IHVuc3Rha2luZ0xpc3Q6IFVuc3Rha2luZ0luZm9bXSA9IFtdO1xuXG4gIGNvbnN0IGFsbERhcHBzUmVxID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXN0YXIubmV0d29yay9hcGkvdjEvJHtjaGFpbn0vZGFwcHMtc3Rha2luZy9kYXBwc2AsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3AuanNvbigpKTtcbiAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfSk7XG5cbiAgY29uc3QgW19sZWRnZXIsIF9lcmEsIF9zdGFrZXJJbmZvXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBjaGFpbkFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmxlZGdlcihhZGRyZXNzKSxcbiAgICBjaGFpbkFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmN1cnJlbnRFcmEoKSxcbiAgICBjaGFpbkFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmdlbmVyYWxTdGFrZXJJbmZvLmVudHJpZXMoYWRkcmVzcylcbiAgXSk7XG5cbiAgY29uc3QgbGVkZ2VyID0gX2xlZGdlci50b1ByaW1pdGl2ZSgpIGFzIHVua25vd24gYXMgUGFsbGV0RGFwcHNTdGFraW5nQWNjb3VudExlZGdlcjtcbiAgY29uc3QgY3VycmVudEVyYSA9IF9lcmEudG9TdHJpbmcoKTtcbiAgY29uc3QgbWluRGVsZWdhdG9yU3Rha2UgPSBjaGFpbkFwaS5hcGkuY29uc3RzLmRhcHBzU3Rha2luZy5taW5pbXVtU3Rha2luZ0Ftb3VudC50b1N0cmluZygpO1xuXG4gIGxldCBiblRvdGFsQWN0aXZlU3Rha2UgPSBCTl9aRVJPO1xuXG4gIGlmIChfc3Rha2VySW5mby5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZEFwcEluZm9NYXA6IFJlY29yZDxzdHJpbmcsIFBhbGxldERhcHBzU3Rha2luZ0RhcHBJbmZvPiA9IHt9O1xuICAgIGNvbnN0IGFsbERhcHBzID0gYXdhaXQgYWxsRGFwcHNSZXEgYXMgUGFsbGV0RGFwcHNTdGFraW5nRGFwcEluZm9bXTtcblxuICAgIGFsbERhcHBzLmZvckVhY2goKGRhcHBJbmZvKSA9PiB7XG4gICAgICBjb25zdCBhZGRyZXNzID0gaXNFdGhlcmV1bUFkZHJlc3MoZGFwcEluZm8uYWRkcmVzcykgPyBkYXBwSW5mby5hZGRyZXNzLnRvTG93ZXJDYXNlKCkgOiBkYXBwSW5mby5hZGRyZXNzO1xuXG4gICAgICBkQXBwSW5mb01hcFthZGRyZXNzXSA9IGRhcHBJbmZvO1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIF9zdGFrZXJJbmZvKSB7XG4gICAgICBjb25zdCBkYXRhID0gaXRlbVswXS50b0h1bWFuKCkgYXMgdW5rbm93biBhcyBhbnlbXTtcbiAgICAgIGNvbnN0IHN0YWtlZERhcHAgPSBkYXRhWzFdIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgICBjb25zdCBzdGFrZURhdGEgPSBpdGVtWzFdLnRvUHJpbWl0aXZlKCkgYXMgUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPltdPjtcbiAgICAgIGNvbnN0IHN0YWtlTGlzdCA9IHN0YWtlRGF0YS5zdGFrZXM7XG5cbiAgICAgIGNvbnN0IGRhcHBBZGRyZXNzID0gaXNFdGhlcmV1bUFkZHJlc3Moc3Rha2VkRGFwcC5Fdm0pID8gc3Rha2VkRGFwcC5Fdm0udG9Mb3dlckNhc2UoKSA6IHN0YWtlZERhcHAuRXZtO1xuICAgICAgY29uc3QgY3VycmVudFN0YWtlID0gc3Rha2VMaXN0LnNsaWNlKC0xKVswXS5zdGFrZWQudG9TdHJpbmcoKSB8fCAnMCc7XG5cbiAgICAgIGNvbnN0IGJuQ3VycmVudFN0YWtlID0gbmV3IEJOKGN1cnJlbnRTdGFrZSk7XG5cbiAgICAgIGlmIChibkN1cnJlbnRTdGFrZS5ndChCTl9aRVJPKSkge1xuICAgICAgICBjb25zdCBkYXBwU3Rha2luZ1N0YXR1cyA9IGJuQ3VycmVudFN0YWtlLmd0KEJOX1pFUk8pICYmIGJuQ3VycmVudFN0YWtlLmd0ZShuZXcgQk4obWluRGVsZWdhdG9yU3Rha2UpKSA/IFN0YWtpbmdTdGF0dXMuRUFSTklOR19SRVdBUkQgOiBTdGFraW5nU3RhdHVzLk5PVF9FQVJOSU5HO1xuXG4gICAgICAgIGJuVG90YWxBY3RpdmVTdGFrZSA9IGJuVG90YWxBY3RpdmVTdGFrZS5hZGQoYm5DdXJyZW50U3Rha2UpO1xuICAgICAgICBjb25zdCBkYXBwSW5mbyA9IGRBcHBJbmZvTWFwW2RhcHBBZGRyZXNzXTtcblxuICAgICAgICBub21pbmF0aW9uTGlzdC5wdXNoKHtcbiAgICAgICAgICBzdGF0dXM6IGRhcHBTdGFraW5nU3RhdHVzLFxuICAgICAgICAgIGNoYWluLFxuICAgICAgICAgIHZhbGlkYXRvckFkZHJlc3M6IGRhcHBBZGRyZXNzLFxuICAgICAgICAgIGFjdGl2ZVN0YWtlOiBjdXJyZW50U3Rha2UsXG4gICAgICAgICAgdmFsaWRhdG9yTWluU3Rha2U6ICcwJyxcbiAgICAgICAgICB2YWxpZGF0b3JJZGVudGl0eTogZGFwcEluZm8/Lm5hbWUsXG4gICAgICAgICAgaGFzVW5zdGFraW5nOiBmYWxzZSAvLyBjYW5ub3QgZ2V0IHVuc3Rha2luZyBpbmZvIGJ5IGRhcHBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdW5sb2NraW5nQ2h1bmtzID0gbGVkZ2VyLnVuYm9uZGluZ0luZm8udW5sb2NraW5nQ2h1bmtzO1xuXG4gIGlmICh1bmxvY2tpbmdDaHVua3MubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgdW5sb2NraW5nQ2h1bmsgb2YgdW5sb2NraW5nQ2h1bmtzKSB7XG4gICAgICBjb25zdCBpc0NsYWltYWJsZSA9IHVubG9ja2luZ0NodW5rLnVubG9ja0VyYSAtIHBhcnNlSW50KGN1cnJlbnRFcmEpIDwgMDtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0VyYSA9IHVubG9ja2luZ0NodW5rLnVubG9ja0VyYSAtIHBhcnNlSW50KGN1cnJlbnRFcmEpO1xuICAgICAgY29uc3Qgd2FpdGluZ1RpbWUgPSByZW1haW5pbmdFcmEgKiBfU1RBS0lOR19FUkFfTEVOR1RIX01BUFtjaGFpbl07XG5cbiAgICAgIHVuc3Rha2luZ0xpc3QucHVzaCh7XG4gICAgICAgIGNoYWluLFxuICAgICAgICBzdGF0dXM6IGlzQ2xhaW1hYmxlID8gVW5zdGFraW5nU3RhdHVzLkNMQUlNQUJMRSA6IFVuc3Rha2luZ1N0YXR1cy5VTkxPQ0tJTkcsXG4gICAgICAgIGNsYWltYWJsZTogdW5sb2NraW5nQ2h1bmsuYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgIHdhaXRpbmdUaW1lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAobm9taW5hdGlvbkxpc3QubGVuZ3RoID09PSAwICYmIHVuc3Rha2luZ0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYWluOiBjaGFpbkluZm8uc2x1ZyxcbiAgICAgIHR5cGU6IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCxcbiAgICAgIGFkZHJlc3MsXG4gICAgICBzdGF0dXM6IFN0YWtpbmdTdGF0dXMuTk9UX1NUQUtJTkcsXG4gICAgICBhY3RpdmVTdGFrZTogJzAnLFxuICAgICAgbm9taW5hdGlvbnM6IFtdLFxuICAgICAgdW5zdGFraW5nczogW11cbiAgICB9IGFzIE5vbWluYXRvck1ldGFkYXRhO1xuICB9XG5cbiAgY29uc3Qgc3Rha2luZ1N0YXR1cyA9IGdldFN0YWtpbmdTdGF0dXNCeU5vbWluYXRpb25zKGJuVG90YWxBY3RpdmVTdGFrZSwgbm9taW5hdGlvbkxpc3QpO1xuXG4gIHJldHVybiB7XG4gICAgY2hhaW4sXG4gICAgdHlwZTogU3Rha2luZ1R5cGUuTk9NSU5BVEVELFxuICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgYWN0aXZlU3Rha2U6IGJuVG90YWxBY3RpdmVTdGFrZS50b1N0cmluZygpLFxuICAgIG5vbWluYXRpb25zOiBub21pbmF0aW9uTGlzdCxcbiAgICB1bnN0YWtpbmdzOiB1bnN0YWtpbmdMaXN0LFxuICAgIHN0YXR1czogc3Rha2luZ1N0YXR1c1xuICB9IGFzIE5vbWluYXRvck1ldGFkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXN0YXJEYXBwc0luZm8gKG5ldHdvcmtLZXk6IHN0cmluZywgc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpKSB7XG4gIGNvbnN0IGNoYWluQXBpID0gYXdhaXQgc3Vic3RyYXRlQXBpLmlzUmVhZHk7XG4gIGNvbnN0IHJhd01heFN0YWtlclBlckNvbnRyYWN0ID0gKGNoYWluQXBpLmFwaS5jb25zdHMuZGFwcHNTdGFraW5nLm1heE51bWJlck9mU3Rha2Vyc1BlckNvbnRyYWN0KS50b0h1bWFuKCkgYXMgc3RyaW5nO1xuXG4gIGNvbnN0IGFsbERhcHBzSW5mbzogVmFsaWRhdG9ySW5mb1tdID0gW107XG4gIGNvbnN0IG1heFN0YWtlclBlckNvbnRyYWN0ID0gcGFyc2VSYXdOdW1iZXIocmF3TWF4U3Rha2VyUGVyQ29udHJhY3QpO1xuXG4gIGNvbnN0IGFsbERhcHBzUmVxID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXN0YXIubmV0d29yay9hcGkvdjEvJHtuZXR3b3JrS2V5fS9kYXBwcy1zdGFraW5nL2RhcHBzYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIHJlc29sdmUocmVzcC5qc29uKCkpO1xuICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9KTtcblxuICBjb25zdCBbX2VyYSwgX2FsbERhcHBzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBjaGFpbkFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmN1cnJlbnRFcmEoKSxcbiAgICBhbGxEYXBwc1JlcVxuICBdKTtcblxuICBjb25zdCBlcmEgPSBwYXJzZVJhd051bWJlcihfZXJhLnRvSHVtYW4oKSBhcyBzdHJpbmcpO1xuICBjb25zdCBhbGxEYXBwcyA9IF9hbGxEYXBwcyBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+W107XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwoYWxsRGFwcHMubWFwKGFzeW5jIChkYXBwKSA9PiB7XG4gICAgY29uc3QgZGFwcE5hbWUgPSBkYXBwLm5hbWUgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhcHBBZGRyZXNzID0gZGFwcC5hZGRyZXNzIGFzIHN0cmluZztcbiAgICBjb25zdCBkYXBwSWNvbiA9IGlzVXJsKGRhcHAuaWNvblVybCBhcyBzdHJpbmcpID8gZGFwcC5pY29uVXJsIGFzIHN0cmluZyA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjb250cmFjdFBhcmFtID0gaXNFdGhlcmV1bUFkZHJlc3MoZGFwcEFkZHJlc3MpID8geyBFdm06IGRhcHBBZGRyZXNzIH0gOiB7IFdhc206IGRhcHBBZGRyZXNzIH07XG4gICAgY29uc3QgX2NvbnRyYWN0SW5mbyA9IGF3YWl0IGNoYWluQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuY29udHJhY3RFcmFTdGFrZShjb250cmFjdFBhcmFtLCBlcmEpO1xuICAgIGNvbnN0IGNvbnRyYWN0SW5mbyA9IF9jb250cmFjdEluZm8udG9QcmltaXRpdmUoKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgIGxldCB0b3RhbFN0YWtlID0gJzAnO1xuICAgIGxldCBzdGFrZXJDb3VudCA9IDA7XG5cbiAgICBpZiAoY29udHJhY3RJbmZvICE9PSBudWxsKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyxAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgIHRvdGFsU3Rha2UgPSBjb250cmFjdEluZm8/LnRvdGFsPy50b1N0cmluZygpO1xuICAgICAgc3Rha2VyQ291bnQgPSBjb250cmFjdEluZm8ubnVtYmVyT2ZTdGFrZXJzIGFzIG51bWJlcjtcbiAgICB9XG5cbiAgICBhbGxEYXBwc0luZm8ucHVzaCh7XG4gICAgICBjb21taXNzaW9uOiAwLFxuICAgICAgZXhwZWN0ZWRSZXR1cm46IDAsXG4gICAgICBhZGRyZXNzOiBpc0V0aGVyZXVtQWRkcmVzcyhkYXBwQWRkcmVzcykgPyBkYXBwQWRkcmVzcy50b0xvd2VyQ2FzZSgpIDogZGFwcEFkZHJlc3MsXG4gICAgICB0b3RhbFN0YWtlOiB0b3RhbFN0YWtlLFxuICAgICAgb3duU3Rha2U6ICcwJyxcbiAgICAgIG90aGVyU3Rha2U6IHRvdGFsU3Rha2UudG9TdHJpbmcoKSxcbiAgICAgIG5vbWluYXRvckNvdW50OiBzdGFrZXJDb3VudCxcbiAgICAgIGJsb2NrZWQ6IGZhbHNlLFxuICAgICAgaXNWZXJpZmllZDogZmFsc2UsXG4gICAgICBtaW5Cb25kOiAnMCcsXG4gICAgICBpY29uOiBkYXBwSWNvbixcbiAgICAgIGlkZW50aXR5OiBkYXBwTmFtZSxcbiAgICAgIGNoYWluOiBuZXR3b3JrS2V5LFxuICAgICAgaXNDcm93ZGVkOiBzdGFrZXJDb3VudCA+PSBtYXhTdGFrZXJQZXJDb250cmFjdFxuICAgIH0pO1xuICB9KSk7XG5cbiAgcmV0dXJuIGFsbERhcHBzSW5mbztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzdGFyQm9uZGluZ0V4dHJpbnNpYyAoc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpLCBhbW91bnQ6IHN0cmluZywgZGFwcEluZm86IFZhbGlkYXRvckluZm8pIHtcbiAgY29uc3QgY2hhaW5BcGkgPSBhd2FpdCBzdWJzdHJhdGVBcGkuaXNSZWFkeTtcbiAgY29uc3QgYmluYXJ5QW1vdW50ID0gbmV3IEJOKGFtb3VudCk7XG5cbiAgY29uc3QgZGFwcFBhcmFtID0gaXNFdGhlcmV1bUFkZHJlc3MoZGFwcEluZm8uYWRkcmVzcykgPyB7IEV2bTogZGFwcEluZm8uYWRkcmVzcyB9IDogeyBXYXNtOiBkYXBwSW5mby5hZGRyZXNzIH07XG5cbiAgcmV0dXJuIGNoYWluQXBpLmFwaS50eC5kYXBwc1N0YWtpbmcuYm9uZEFuZFN0YWtlKGRhcHBQYXJhbSwgYmluYXJ5QW1vdW50KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzdGFyVW5ib25kaW5nRXh0cmluc2ljIChzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGksIGFtb3VudDogc3RyaW5nLCBkYXBwQWRkcmVzczogc3RyaW5nKSB7XG4gIGNvbnN0IGFwaVByb21pc2UgPSBhd2FpdCBzdWJzdHJhdGVBcGkuaXNSZWFkeTtcbiAgY29uc3QgYmluYXJ5QW1vdW50ID0gbmV3IEJOKGFtb3VudCk7XG5cbiAgY29uc3QgZGFwcFBhcmFtID0gaXNFdGhlcmV1bUFkZHJlc3MoZGFwcEFkZHJlc3MpID8geyBFdm06IGRhcHBBZGRyZXNzIH0gOiB7IFdhc206IGRhcHBBZGRyZXNzIH07XG5cbiAgcmV0dXJuIGFwaVByb21pc2UuYXBpLnR4LmRhcHBzU3Rha2luZy51bmJvbmRBbmRVbnN0YWtlKGRhcHBQYXJhbSwgYmluYXJ5QW1vdW50KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzdGFyV2l0aGRyYXdhbEV4dHJpbnNpYyAoc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpKSB7XG4gIGNvbnN0IGNoYWluQXBpID0gYXdhaXQgc3Vic3RyYXRlQXBpLmlzUmVhZHk7XG5cbiAgcmV0dXJuIGNoYWluQXBpLmFwaS50eC5kYXBwc1N0YWtpbmcud2l0aGRyYXdVbmJvbmRlZCgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXN0YXJDbGFpbVJld2FyZEV4dHJpbnNpYyAoc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpLCBhZGRyZXNzOiBzdHJpbmcpIHtcbiAgY29uc3QgYXBpUHJvbWlzZSA9IGF3YWl0IHN1YnN0cmF0ZUFwaS5pc1JlYWR5O1xuXG4gIGNvbnN0IFtfc3Rha2VkRGFwcHMsIF9jdXJyZW50RXJhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBhcGlQcm9taXNlLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuZ2VuZXJhbFN0YWtlckluZm8uZW50cmllcyhhZGRyZXNzKSxcbiAgICBhcGlQcm9taXNlLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuY3VycmVudEVyYSgpXG4gIF0pO1xuXG4gIGNvbnN0IGN1cnJlbnRFcmEgPSBwYXJzZVJhd051bWJlcihfY3VycmVudEVyYS50b0h1bWFuKCkgYXMgc3RyaW5nKTtcbiAgY29uc3QgdHJhbnNhY3Rpb25zOiBTdWJtaXR0YWJsZUV4dHJpbnNpY1tdID0gW107XG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIF9zdGFrZWREYXBwcykge1xuICAgIGNvbnN0IGRhdGEgPSBpdGVtWzBdLnRvSHVtYW4oKSBhcyBhbnlbXTtcbiAgICBjb25zdCBzdGFrZWREYXBwID0gZGF0YVsxXSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgIGNvbnN0IHN0YWtlRGF0YSA9IGl0ZW1bMV0udG9IdW1hbigpIGFzIFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXT47XG4gICAgY29uc3Qgc3Rha2VzID0gc3Rha2VEYXRhLnN0YWtlcztcbiAgICBjb25zdCBkYXBwQWRkcmVzcyA9IGlzRXRoZXJldW1BZGRyZXNzKHN0YWtlZERhcHAuRXZtKSA/IHN0YWtlZERhcHAuRXZtLnRvTG93ZXJDYXNlKCkgOiBzdGFrZWREYXBwLkV2bTtcblxuICAgIGxldCBudW1iZXJPZlVuY2xhaW1lZEVyYSA9IDA7XG4gICAgY29uc3QgbWF4VHggPSA1MDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Rha2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGVyYSwgc3Rha2VkIH0gPSBzdGFrZXNbaV07XG4gICAgICBjb25zdCBiblN0YWtlZCA9IG5ldyBCTihzdGFrZWQucmVwbGFjZUFsbCgnLCcsICcnKSk7XG4gICAgICBjb25zdCBwYXJzZWRFcmEgPSBwYXJzZVJhd051bWJlcihlcmEpO1xuXG4gICAgICBpZiAoYm5TdGFrZWQuZXEobmV3IEJOKDApKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dEVyYURhdGEgPSBzdGFrZXNbaSArIDFdID8/IG51bGw7XG4gICAgICBjb25zdCBuZXh0RXJhID0gbmV4dEVyYURhdGEgJiYgcGFyc2VSYXdOdW1iZXIobmV4dEVyYURhdGEuZXJhKTtcbiAgICAgIGNvbnN0IGlzTGFzdEVyYSA9IGkgPT09IHN0YWtlcy5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgZXJhVG9DbGFpbSA9IGlzTGFzdEVyYSA/IGN1cnJlbnRFcmEgLSBwYXJzZWRFcmEgOiBuZXh0RXJhIC0gcGFyc2VkRXJhO1xuXG4gICAgICBudW1iZXJPZlVuY2xhaW1lZEVyYSArPSBlcmFUb0NsYWltO1xuICAgIH1cblxuICAgIGNvbnN0IGRhcHBQYXJhbSA9IGlzRXRoZXJldW1BZGRyZXNzKGRhcHBBZGRyZXNzKSA/IHsgRXZtOiBkYXBwQWRkcmVzcyB9IDogeyBXYXNtOiBkYXBwQWRkcmVzcyB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihudW1iZXJPZlVuY2xhaW1lZEVyYSwgbWF4VHgpOyBpKyspIHtcbiAgICAgIGNvbnN0IHR4ID0gYXBpUHJvbWlzZS5hcGkudHguZGFwcHNTdGFraW5nLmNsYWltU3Rha2VyKGRhcHBQYXJhbSk7XG5cbiAgICAgIHRyYW5zYWN0aW9ucy5wdXNoKHR4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXBpUHJvbWlzZS5hcGkudHgudXRpbGl0eS5iYXRjaCh0cmFuc2FjdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXN0YXJXaXRoZHJhd2FibGUgKG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YSk6IFVuc3Rha2luZ0luZm8ge1xuICBjb25zdCB1bnN0YWtpbmdJbmZvOiBVbnN0YWtpbmdJbmZvID0ge1xuICAgIGNoYWluOiBub21pbmF0b3JNZXRhZGF0YS5jaGFpbixcbiAgICBzdGF0dXM6IFVuc3Rha2luZ1N0YXR1cy5DTEFJTUFCTEUsXG4gICAgY2xhaW1hYmxlOiAnMCcsXG4gICAgd2FpdGluZ1RpbWU6IDBcbiAgfTtcblxuICBsZXQgYm5XaXRoZHJhd2FibGUgPSBCTl9aRVJPO1xuXG4gIGZvciAoY29uc3QgdW5zdGFraW5nIG9mIG5vbWluYXRvck1ldGFkYXRhLnVuc3Rha2luZ3MpIHtcbiAgICBpZiAodW5zdGFraW5nLnN0YXR1cyA9PT0gVW5zdGFraW5nU3RhdHVzLkNMQUlNQUJMRSkge1xuICAgICAgYm5XaXRoZHJhd2FibGUgPSBibldpdGhkcmF3YWJsZS5hZGQobmV3IEJOKHVuc3Rha2luZy5jbGFpbWFibGUpKTtcbiAgICB9XG4gIH1cblxuICB1bnN0YWtpbmdJbmZvLmNsYWltYWJsZSA9IGJuV2l0aGRyYXdhYmxlLnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIHVuc3Rha2luZ0luZm87XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0NoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBOb21pbmF0aW9uSW5mbywgTm9taW5hdG9yTWV0YWRhdGEsIFN0YWtpbmdTdGF0dXMsIFN0YWtpbmdUeXBlLCBVbnN0YWtpbmdJbmZvLCBVbnN0YWtpbmdTdGF0dXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IGdldEFzdGFyV2l0aGRyYXdhYmxlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9rb25pL2FwaS9zdGFraW5nL2JvbmRpbmcvYXN0YXInO1xuaW1wb3J0IHsgX0tOT1dOX0NIQUlOX0lORkxBVElPTl9QQVJBTVMsIF9TVEFLSU5HX0NIQUlOX0dST1VQLCBfU1VCU1RSQVRFX0RFRkFVTFRfSU5GTEFUSU9OX1BBUkFNUywgX1N1YnN0cmF0ZUluZmxhdGlvblBhcmFtcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgX2dldENoYWluTmF0aXZlVG9rZW5CYXNpY0luZm8gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgZGV0ZWN0VHJhbnNsYXRlLCBwYXJzZVJhd051bWJlciwgcmVmb3JtYXRBZGRyZXNzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBiYWxhbmNlRm9ybWF0dGVyLCBmb3JtYXROdW1iZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzL251bWJlcic7XG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XG5cbmltcG9ydCB7IEFwaVByb21pc2UgfSBmcm9tICdAcG9sa2Fkb3QvYXBpJztcbmltcG9ydCB7IEJOLCBCTl9CSUxMSU9OLCBCTl9IVU5EUkVELCBCTl9NSUxMSU9OLCBCTl9USE9VU0FORCwgQk5fWkVSTywgYm5Ub1U4YSwgc3RyaW5nVG9VOGEsIHU4YUNvbmNhdCB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXROb21pbmF0aW9uUG9vbHNQb29sTWVtYmVyIHtcbiAgcG9vbElkOiBudW1iZXIsXG4gIHBvaW50czogbnVtYmVyLFxuICBsYXNSZWNvcmRlZFJld2FyZENvdW50ZXI6IG51bWJlcixcbiAgdW5ib25kaW5nRXJhczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldERhcHBzU3Rha2luZ0RhcHBJbmZvIHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIGdpdEh1YlVybDogc3RyaW5nLFxuICB0YWdzOiBzdHJpbmdbXSxcbiAgdXJsOiBzdHJpbmcsXG4gIGltYWdlc1VybDogc3RyaW5nW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXREYXBwc1N0YWtpbmdVbmxvY2tpbmdDaHVuayB7XG4gIGFtb3VudDogbnVtYmVyLFxuICB1bmxvY2tFcmE6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldERhcHBzU3Rha2luZ0FjY291bnRMZWRnZXIge1xuICBsb2NrZWQ6IG51bWJlcixcbiAgdW5ib25kaW5nSW5mbzoge1xuICAgIHVubG9ja2luZ0NodW5rczogUGFsbGV0RGFwcHNTdGFraW5nVW5sb2NraW5nQ2h1bmtbXVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tIZWFkZXIge1xuICBwYXJlbnRIYXNoOiBzdHJpbmcsXG4gIG51bWJlcjogbnVtYmVyLFxuICBzdGF0ZVJvb3Q6IHN0cmluZyxcbiAgZXh0cmluc2ljc1Jvb3Q6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFjaGFpblN0YWtpbmdTdGFrZU9wdGlvbiB7XG4gIG93bmVyOiBzdHJpbmcsXG4gIGFtb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYWNoYWluU3Rha2luZ0NhbmRpZGF0ZU1ldGFkYXRhIHtcbiAgYm9uZDogc3RyaW5nLFxuICBkZWxlZ2F0aW9uQ291bnQ6IG51bWJlcixcbiAgdG90YWxDb3VudGVkOiBzdHJpbmcsXG4gIGxvd2VzdFRvcERlbGVnYXRpb25BbW91bnQ6IHN0cmluZyxcbiAgc3RhdHVzOiBhbnkgfCAnQWN0aXZlJ1xufVxuXG5leHBvcnQgZW51bSBQYWxsZXRQYXJhY2hhaW5TdGFraW5nUmVxdWVzdFR5cGUge1xuICBSRVZPS0UgPSAncmV2b2tlJyxcbiAgREVDUkVBU0UgPSAnZGVjcmVhc2UnLFxuICBCT05EX0xFU1MgPSAnYm9uZExlc3MnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0UGFyYWNoYWluU3Rha2luZ0RlbGVnYXRpb25SZXF1ZXN0c1NjaGVkdWxlZFJlcXVlc3Qge1xuICBkZWxlZ2F0b3I6IHN0cmluZyxcbiAgd2hlbkV4ZWN1dGFibGU6IG51bWJlcixcbiAgYWN0aW9uOiBSZWNvcmQ8UGFsbGV0UGFyYWNoYWluU3Rha2luZ1JlcXVlc3RUeXBlLCBudW1iZXI+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0UGFyYWNoYWluU3Rha2luZ0RlbGVnYXRpb25JbmZvIHtcbiAgb3duZXI6IHN0cmluZyxcbiAgYW1vdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXRQYXJhY2hhaW5TdGFraW5nRGVsZWdhdG9yIHtcbiAgaWQ6IHN0cmluZyxcbiAgZGVsZWdhdGlvbnM6IFBhbGxldFBhcmFjaGFpblN0YWtpbmdEZWxlZ2F0aW9uSW5mb1tdLFxuICB0b3RhbDogbnVtYmVyLFxuICBsZXNzVG90YWw6IG51bWJlcixcbiAgc3RhdHVzOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXRTdGFraW5nRXhwb3N1cmVJdGVtIHtcbiAgd2hvOiBzdHJpbmcsXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXRTdGFraW5nRXhwb3N1cmUge1xuICB0b3RhbDogbnVtYmVyLFxuICBvd246IG51bWJlcixcbiAgb3RoZXJzOiBQYWxsZXRTdGFraW5nRXhwb3N1cmVJdGVtW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXRJZGVudGl0eVJlZ2lzdHJhdGlvbiB7XG4gIGp1ZGdlbWVudHM6IGFueVtdLFxuICBkZXBvc2l0OiBudW1iZXIsXG4gIGluZm86IHtcbiAgICBkaXNwbGF5OiB7XG4gICAgICBSYXc6IHN0cmluZ1xuICAgIH0sXG4gICAgd2ViOiB7XG4gICAgICBSYXc6IHN0cmluZ1xuICAgIH0sXG4gICAgdHdpdHRlcjoge1xuICAgICAgUmF3OiBzdHJpbmdcbiAgICB9LFxuICAgIHJpb3Q6IHtcbiAgICAgIFJhdzogc3RyaW5nXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdG9yRXh0cmFJbmZvIHtcbiAgY29tbWlzc2lvbjogc3RyaW5nLFxuICBibG9ja2VkOiBmYWxzZSxcbiAgaWRlbnRpdHk/OiBzdHJpbmcsXG4gIGlzVmVyaWZpZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbmxvY2tpbmcge1xuICByZW1haW5pbmdFcmFzOiBCTjtcbiAgdmFsdWU6IEJOO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlcm5vYVN0YWtpbmdSZXdhcmRzU3Rha2luZ1Jld2FyZHNEYXRhIHtcbiAgc2Vzc2lvbkVyYVBheW91dDogc3RyaW5nLFxuICBzZXNzaW9uRXh0cmFSZXdhcmRQYXlvdXQ6IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQb29sU3Rhc2hBZGRyZXNzIChhcGk6IEFwaVByb21pc2UsIGluZGV4OiBudW1iZXIsIHBvb2xJZDogbnVtYmVyLCBwb29sc1BhbGxldElkOiBzdHJpbmcpIHtcbiAgY29uc3QgTW9kUHJlZml4ID0gc3RyaW5nVG9VOGEoJ21vZGwnKTtcbiAgY29uc3QgVTMyT3B0cyA9IHsgYml0TGVuZ3RoOiAzMiwgaXNMZTogdHJ1ZSB9O1xuICBjb25zdCBFbXB0eUgyNTYgPSBuZXcgVWludDhBcnJheSgzMik7XG5cbiAgcmV0dXJuIGFwaS5yZWdpc3RyeVxuICAgIC5jcmVhdGVUeXBlKFxuICAgICAgJ0FjY291bnRJZDMyJyxcbiAgICAgIHU4YUNvbmNhdChcbiAgICAgICAgTW9kUHJlZml4LFxuICAgICAgICBwb29sc1BhbGxldElkLFxuICAgICAgICBuZXcgVWludDhBcnJheShbaW5kZXhdKSxcbiAgICAgICAgYm5Ub1U4YShuZXcgQk4ocG9vbElkLnRvU3RyaW5nKCkpLCBVMzJPcHRzKSxcbiAgICAgICAgRW1wdHlIMjU2XG4gICAgICApXG4gICAgKVxuICAgIC50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUG9vbE5hbWUgKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvW15cXHgyMC1cXHg3RV0vZywgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJZGVudGl0eSAoaWRlbnRpdHlJbmZvOiBQYWxsZXRJZGVudGl0eVJlZ2lzdHJhdGlvbiB8IG51bGwpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBsZXQgaWRlbnRpdHk7XG5cbiAgaWYgKGlkZW50aXR5SW5mbykge1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gaWRlbnRpdHlJbmZvPy5pbmZvPy5kaXNwbGF5Py5SYXc7XG4gICAgY29uc3Qgd2ViID0gaWRlbnRpdHlJbmZvPy5pbmZvPy53ZWI/LlJhdztcbiAgICBjb25zdCByaW90ID0gaWRlbnRpdHlJbmZvPy5pbmZvPy5yaW90Py5SYXc7XG4gICAgY29uc3QgdHdpdHRlciA9IGlkZW50aXR5SW5mbz8uaW5mbz8udHdpdHRlcj8uUmF3O1xuXG4gICAgaWYgKGRpc3BsYXlOYW1lICYmICFkaXNwbGF5TmFtZS5zdGFydHNXaXRoKCcweCcpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICBpZGVudGl0eSA9IGRpc3BsYXlOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZGVudGl0eSA9IHR3aXR0ZXIgfHwgd2ViIHx8IHJpb3Q7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlkZW50aXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5mbGF0aW9uUGFyYW1zIChuZXR3b3JrS2V5OiBzdHJpbmcpOiBfU3Vic3RyYXRlSW5mbGF0aW9uUGFyYW1zIHtcbiAgcmV0dXJuIF9LTk9XTl9DSEFJTl9JTkZMQVRJT05fUEFSQU1TW25ldHdvcmtLZXldIHx8IF9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0luZmxhdGlvblVuaWZvcm1FcmFQYXlvdXQgKHRvdGFsSXNzdWFuY2U6IEJOLCB5ZWFybHlJbmZsYXRpb25JblRva2VuczogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgdG90YWxJc3N1YW5jZUluVG9rZW5zID0gdG90YWxJc3N1YW5jZS5kaXYoQk5fQklMTElPTikuZGl2KEJOX1RIT1VTQU5EKS50b051bWJlcigpO1xuXG4gIHJldHVybiAodG90YWxJc3N1YW5jZUluVG9rZW5zID09PSAwID8gMC4wIDogeWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnMgLyB0b3RhbElzc3VhbmNlSW5Ub2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0luZmxhdGlvblJld2FyZEN1cnZlIChtaW5JbmZsYXRpb246IG51bWJlciwgc3Rha2VkRnJhY3Rpb246IG51bWJlciwgaWRlYWxTdGFrZTogbnVtYmVyLCBpZGVhbEludGVyZXN0OiBudW1iZXIsIGZhbGxvZmY6IG51bWJlcikge1xuICByZXR1cm4gKG1pbkluZmxhdGlvbiArIChcbiAgICBzdGFrZWRGcmFjdGlvbiA8PSBpZGVhbFN0YWtlXG4gICAgICA/IChzdGFrZWRGcmFjdGlvbiAqIChpZGVhbEludGVyZXN0IC0gKG1pbkluZmxhdGlvbiAvIGlkZWFsU3Rha2UpKSlcbiAgICAgIDogKCgoaWRlYWxJbnRlcmVzdCAqIGlkZWFsU3Rha2UpIC0gbWluSW5mbGF0aW9uKSAqIE1hdGgucG93KDIsIChpZGVhbFN0YWtlIC0gc3Rha2VkRnJhY3Rpb24pIC8gZmFsbG9mZikpXG4gICkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW5mbGF0aW9uICh0b3RhbEVyYVN0YWtlOiBCTiwgdG90YWxJc3N1YW5jZTogQk4sIG51bUF1Y3Rpb25zOiBudW1iZXIsIG5ldHdvcmtLZXk6IHN0cmluZykge1xuICBjb25zdCBpbmZsYXRpb25QYXJhbXMgPSBnZXRJbmZsYXRpb25QYXJhbXMobmV0d29ya0tleSk7XG4gIGNvbnN0IHsgYXVjdGlvbkFkanVzdCwgYXVjdGlvbk1heCwgZmFsbG9mZiwgbWF4SW5mbGF0aW9uLCBtaW5JbmZsYXRpb24sIHN0YWtlVGFyZ2V0IH0gPSBpbmZsYXRpb25QYXJhbXM7XG4gIGNvbnN0IGlkZWFsU3Rha2UgPSBzdGFrZVRhcmdldCAtIChNYXRoLm1pbihhdWN0aW9uTWF4LCBudW1BdWN0aW9ucykgKiBhdWN0aW9uQWRqdXN0KTtcbiAgY29uc3QgaWRlYWxJbnRlcmVzdCA9IG1heEluZmxhdGlvbiAvIGlkZWFsU3Rha2U7XG4gIGNvbnN0IHN0YWtlZEZyYWN0aW9uID0gdG90YWxFcmFTdGFrZS5tdWwoQk5fTUlMTElPTikuZGl2KHRvdGFsSXNzdWFuY2UpLnRvTnVtYmVyKCkgLyBCTl9NSUxMSU9OLnRvTnVtYmVyKCk7XG5cbiAgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFsZXBoLmluY2x1ZGVzKG5ldHdvcmtLZXkpKSB7XG4gICAgaWYgKGluZmxhdGlvblBhcmFtcy55ZWFybHlJbmZsYXRpb25JblRva2Vucykge1xuICAgICAgcmV0dXJuIDEwMCAqIGNhbGNJbmZsYXRpb25Vbmlmb3JtRXJhUGF5b3V0KHRvdGFsSXNzdWFuY2UsIGluZmxhdGlvblBhcmFtcy55ZWFybHlJbmZsYXRpb25JblRva2Vucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxMDAgKiBjYWxjSW5mbGF0aW9uUmV3YXJkQ3VydmUobWluSW5mbGF0aW9uLCBzdGFrZWRGcmFjdGlvbiwgaWRlYWxTdGFrZSwgaWRlYWxJbnRlcmVzdCwgZmFsbG9mZik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAxMDAgKiAobWluSW5mbGF0aW9uICsgKFxuICAgICAgc3Rha2VkRnJhY3Rpb24gPD0gaWRlYWxTdGFrZVxuICAgICAgICA/IChzdGFrZWRGcmFjdGlvbiAqIChpZGVhbEludGVyZXN0IC0gKG1pbkluZmxhdGlvbiAvIGlkZWFsU3Rha2UpKSlcbiAgICAgICAgOiAoKChpZGVhbEludGVyZXN0ICogaWRlYWxTdGFrZSkgLSBtaW5JbmZsYXRpb24pICogTWF0aC5wb3coMiwgKGlkZWFsU3Rha2UgLSBzdGFrZWRGcmFjdGlvbikgLyBmYWxsb2ZmKSlcbiAgICApKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQ2hhaW5TdGFrZWRSZXR1cm4gKGluZmxhdGlvbjogbnVtYmVyLCB0b3RhbEVyYVN0YWtlOiBCTiwgdG90YWxJc3N1YW5jZTogQk4sIG5ldHdvcmtLZXk6IHN0cmluZykge1xuICBjb25zdCBzdGFrZWRGcmFjdGlvbiA9IHRvdGFsRXJhU3Rha2UubXVsKEJOX01JTExJT04pLmRpdih0b3RhbElzc3VhbmNlKS50b051bWJlcigpIC8gQk5fTUlMTElPTi50b051bWJlcigpO1xuXG4gIGxldCBzdGFrZWRSZXR1cm4gPSBpbmZsYXRpb24gLyBzdGFrZWRGcmFjdGlvbjtcblxuICBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYWxlcGguaW5jbHVkZXMobmV0d29ya0tleSkpIHtcbiAgICBzdGFrZWRSZXR1cm4gKj0gMC45OyAvLyAxMCUgZ29lcyB0byB0cmVhc3VyeVxuICB9XG5cbiAgcmV0dXJuIHN0YWtlZFJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFsZXBoWmVyb1ZhbGlkYXRvclJldHVybiAoY2hhaW5TdGFrZWRSZXR1cm46IG51bWJlciwgY29tbWlzc2lvbjogbnVtYmVyKSB7XG4gIHJldHVybiBjaGFpblN0YWtlZFJldHVybiAqICgxMDAgLSBjb21taXNzaW9uKSAvIDEwMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVRlcm5vYVZhbGlkYXRvclJldHVybiAocmV3YXJkUGVyVmFsaWRhdG9yOiBudW1iZXIsIHZhbGlkYXRvclN0YWtlOiBudW1iZXIsIGNvbW1pc3Npb246IG51bWJlcikge1xuICBjb25zdCBwZXJjZW50UmV3YXJkRm9yTm9taW5hdG9ycyA9ICgxMDAgLSBjb21taXNzaW9uKSAvIDEwMDtcbiAgY29uc3QgcmV3YXJkRm9yTm9taW5hdG9ycyA9IHJld2FyZFBlclZhbGlkYXRvciAqIHBlcmNlbnRSZXdhcmRGb3JOb21pbmF0b3JzO1xuXG4gIGNvbnN0IHN0YWtlUmF0aW8gPSByZXdhcmRGb3JOb21pbmF0b3JzIC8gdmFsaWRhdG9yU3Rha2U7XG5cbiAgcmV0dXJuIHN0YWtlUmF0aW8gKiAzNjUgKiAxMDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVWYWxpZGF0b3JTdGFrZWRSZXR1cm4gKGNoYWluU3Rha2VkUmV0dXJuOiBudW1iZXIsIHRvdGFsVmFsaWRhdG9yU3Rha2U6IEJOLCBhdmdTdGFrZTogQk4sIGNvbW1pc3Npb246IG51bWJlcikge1xuICBjb25zdCBibkFkanVzdGVkID0gYXZnU3Rha2UubXVsKEJOX0hVTkRSRUQpLmRpdih0b3RhbFZhbGlkYXRvclN0YWtlKTtcbiAgY29uc3QgYWRqdXN0ZWQgPSBibkFkanVzdGVkLnRvTnVtYmVyKCkgKiBjaGFpblN0YWtlZFJldHVybjtcblxuICBjb25zdCBzdGFrZWRSZXR1cm4gPSAoYWRqdXN0ZWQgPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogYWRqdXN0ZWQpIC8gMTAwO1xuXG4gIHJldHVybiBzdGFrZWRSZXR1cm4gKiAoMTAwIC0gY29tbWlzc2lvbikgLyAxMDA7IC8vIERlZHVjdCBjb21taXNzaW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21taXNzaW9uIChjb21taXNzaW9uU3RyaW5nOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoY29tbWlzc2lvblN0cmluZy5zcGxpdCgnJScpWzBdKTsgLy8gRXhhbXBsZTogMTIlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mbGF0aW9uQ29uZmlnIHtcbiAgZXhwZWN0OiB7XG4gICAgbWluOiBzdHJpbmcsXG4gICAgaWRlYWw6IHN0cmluZyxcbiAgICBtYXg6IHN0cmluZ1xuICB9LFxuICBhbm51YWw6IHtcbiAgICBtaW46IHN0cmluZyxcbiAgICBpZGVhbDogc3RyaW5nLFxuICAgIG1heDogc3RyaW5nXG4gIH0sXG4gIHJvdW5kOiB7XG4gICAgbWluOiBzdHJpbmcsXG4gICAgaWRlYWw6IHN0cmluZyxcbiAgICBtYXg6IHN0cmluZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhQ3VycmVudEluZmxhdGlvbiAodG90YWxTdGFrZWQ6IG51bWJlciwgaW5mbGF0aW9uQ29uZmlnOiBJbmZsYXRpb25Db25maWcpIHsgLy8gcmVhZCBtb3JlIGF0IGh0dHBzOi8vaGFja21kLmlvL0BzYkFxT3VYa1J2eWlaUE9CM1J5bjZRL1N5cHIzWkpoNVxuICBjb25zdCBleHBlY3RNaW4gPSBwYXJzZVJhd051bWJlcihpbmZsYXRpb25Db25maWcuZXhwZWN0Lm1pbik7XG4gIGNvbnN0IGV4cGVjdE1heCA9IHBhcnNlUmF3TnVtYmVyKGluZmxhdGlvbkNvbmZpZy5leHBlY3QubWF4KTtcblxuICBpZiAodG90YWxTdGFrZWQgPCBleHBlY3RNaW4pIHtcbiAgICBjb25zdCBpbmZsYXRpb25TdHJpbmcgPSBpbmZsYXRpb25Db25maWcuYW5udWFsLm1pbi5zcGxpdCgnJScpWzBdO1xuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoaW5mbGF0aW9uU3RyaW5nKTtcbiAgfSBlbHNlIGlmICh0b3RhbFN0YWtlZCA+IGV4cGVjdE1heCkge1xuICAgIGNvbnN0IGluZmxhdGlvblN0cmluZyA9IGluZmxhdGlvbkNvbmZpZy5hbm51YWwubWF4LnNwbGl0KCclJylbMF07XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChpbmZsYXRpb25TdHJpbmcpO1xuICB9XG5cbiAgY29uc3QgaW5mbGF0aW9uU3RyaW5nID0gaW5mbGF0aW9uQ29uZmlnLmFubnVhbC5pZGVhbC5zcGxpdCgnJScpWzBdO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KGluZmxhdGlvblN0cmluZyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHVyaW5nT3B0aW1hbENvbXBvdW5kRm9ybWF0IHtcbiAgcGVyaW9kOiBzdHJpbmc7IC8vIGluIGRheXNcbiAgYXB5OiBzdHJpbmc7XG59XG5cbi8vIHZhbGlkYXRpb25zIGFuZCBjaGVjayBjb25kaXRpb25zXG5leHBvcnQgZnVuY3Rpb24gaXNTaG93Tm9taW5hdGlvbkJ5VmFsaWRhdG9yIChjaGFpbjogc3RyaW5nKTogJ3Nob3dCeVZhbHVlJyB8ICdzaG93QnlWYWxpZGF0b3InIHwgJ21peGVkJyB7XG4gIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hbXBsaXR1ZGUuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuICdzaG93QnlWYWx1ZSc7XG4gIH0gZWxzZSBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYXN0YXIuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuICdtaXhlZCc7XG4gIH0gZWxzZSBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAucGFyYS5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gJ3Nob3dCeVZhbGlkYXRvcic7XG4gIH1cblxuICByZXR1cm4gJ3Nob3dCeVZhbHVlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvbmRlZFZhbGlkYXRvcnMgKG5vbWluYXRpb25zOiBOb21pbmF0aW9uSW5mb1tdKSB7XG4gIGNvbnN0IGJvbmRlZFZhbGlkYXRvcnM6IHN0cmluZ1tdID0gW107XG4gIGxldCBub21pbmF0aW9uQ291bnQgPSAwO1xuXG4gIGZvciAoY29uc3Qgbm9taW5hdGlvbiBvZiBub21pbmF0aW9ucykge1xuICAgIG5vbWluYXRpb25Db3VudCArPSAxO1xuICAgIGJvbmRlZFZhbGlkYXRvcnMucHVzaChyZWZvcm1hdEFkZHJlc3Mobm9taW5hdGlvbi52YWxpZGF0b3JBZGRyZXNzLCAwKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5vbWluYXRpb25Db3VudCxcbiAgICBib25kZWRWYWxpZGF0b3JzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Vuc3Rha2VBbGwgKHNlbGVjdGVkVmFsaWRhdG9yOiBzdHJpbmcsIG5vbWluYXRpb25zOiBOb21pbmF0aW9uSW5mb1tdLCB1bnN0YWtlQW1vdW50OiBzdHJpbmcpIHtcbiAgbGV0IGlzVW5zdGFrZUFsbCA9IGZhbHNlO1xuXG4gIGZvciAoY29uc3Qgbm9taW5hdGlvbiBvZiBub21pbmF0aW9ucykge1xuICAgIGNvbnN0IHBhcnNlZFZhbGlkYXRvckFkZHJlc3MgPSByZWZvcm1hdEFkZHJlc3Mobm9taW5hdGlvbi52YWxpZGF0b3JBZGRyZXNzLCAwKTtcbiAgICBjb25zdCBwYXJzZWRTZWxlY3RlZFZhbGlkYXRvciA9IHJlZm9ybWF0QWRkcmVzcyhzZWxlY3RlZFZhbGlkYXRvciwgMCk7XG5cbiAgICBpZiAocGFyc2VkVmFsaWRhdG9yQWRkcmVzcyA9PT0gcGFyc2VkU2VsZWN0ZWRWYWxpZGF0b3IpIHtcbiAgICAgIGlmICh1bnN0YWtlQW1vdW50ID09PSBub21pbmF0aW9uLmFjdGl2ZVN0YWtlKSB7XG4gICAgICAgIGlzVW5zdGFrZUFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc1Vuc3Rha2VBbGw7XG59XG5cbmV4cG9ydCBlbnVtIFN0YWtpbmdBY3Rpb24ge1xuICBTVEFLRSA9ICdTVEFLRScsXG4gIFVOU1RBS0UgPSAnVU5TVEFLRScsXG4gIFdJVEhEUkFXID0gJ1dJVEhEUkFXJyxcbiAgQ0xBSU1fUkVXQVJEID0gJ0NMQUlNX1JFV0FSRCcsXG4gIENBTkNFTF9VTlNUQUtFID0gJ0NBTkNFTF9VTlNUQUtFJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3Rha2luZ0F2YWlsYWJsZUFjdGlvbnNCeUNoYWluIChjaGFpbjogc3RyaW5nLCB0eXBlOiBTdGFraW5nVHlwZSk6IFN0YWtpbmdBY3Rpb25bXSB7XG4gIGlmICh0eXBlID09PSBTdGFraW5nVHlwZS5QT09MRUQpIHtcbiAgICByZXR1cm4gW1N0YWtpbmdBY3Rpb24uU1RBS0UsIFN0YWtpbmdBY3Rpb24uVU5TVEFLRSwgU3Rha2luZ0FjdGlvbi5XSVRIRFJBVywgU3Rha2luZ0FjdGlvbi5DTEFJTV9SRVdBUkRdO1xuICB9XG5cbiAgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLnBhcmEuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuIFtTdGFraW5nQWN0aW9uLlNUQUtFLCBTdGFraW5nQWN0aW9uLlVOU1RBS0UsIFN0YWtpbmdBY3Rpb24uV0lUSERSQVcsIFN0YWtpbmdBY3Rpb24uQ0FOQ0VMX1VOU1RBS0VdO1xuICB9IGVsc2UgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFzdGFyLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiBbU3Rha2luZ0FjdGlvbi5TVEFLRSwgU3Rha2luZ0FjdGlvbi5VTlNUQUtFLCBTdGFraW5nQWN0aW9uLldJVEhEUkFXLCBTdGFraW5nQWN0aW9uLkNMQUlNX1JFV0FSRF07XG4gIH0gZWxzZSBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYW1wbGl0dWRlLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiBbU3Rha2luZ0FjdGlvbi5TVEFLRSwgU3Rha2luZ0FjdGlvbi5VTlNUQUtFLCBTdGFraW5nQWN0aW9uLldJVEhEUkFXXTtcbiAgfVxuXG4gIHJldHVybiBbU3Rha2luZ0FjdGlvbi5TVEFLRSwgU3Rha2luZ0FjdGlvbi5VTlNUQUtFLCBTdGFraW5nQWN0aW9uLldJVEhEUkFXLCBTdGFraW5nQWN0aW9uLkNBTkNFTF9VTlNUQUtFXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YWtpbmdBdmFpbGFibGVBY3Rpb25zQnlOb21pbmF0b3IgKG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YSwgdW5jbGFpbWVkUmV3YXJkPzogc3RyaW5nKTogU3Rha2luZ0FjdGlvbltdIHtcbiAgY29uc3QgcmVzdWx0OiBTdGFraW5nQWN0aW9uW10gPSBbU3Rha2luZ0FjdGlvbi5TVEFLRV07XG5cbiAgY29uc3QgYm5BY3RpdmVTdGFrZSA9IG5ldyBCTihub21pbmF0b3JNZXRhZGF0YS5hY3RpdmVTdGFrZSk7XG5cbiAgaWYgKG5vbWluYXRvck1ldGFkYXRhLmFjdGl2ZVN0YWtlICYmIGJuQWN0aXZlU3Rha2UuZ3QoQk5fWkVSTykpIHtcbiAgICByZXN1bHQucHVzaChTdGFraW5nQWN0aW9uLlVOU1RBS0UpO1xuXG4gICAgY29uc3QgaXNBc3Rhck5ldHdvcmsgPSBfU1RBS0lOR19DSEFJTl9HUk9VUC5hc3Rhci5pbmNsdWRlcyhub21pbmF0b3JNZXRhZGF0YS5jaGFpbik7XG4gICAgY29uc3QgaXNBbXBsaXR1ZGVOZXR3b3JrID0gX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYW1wbGl0dWRlLmluY2x1ZGVzKG5vbWluYXRvck1ldGFkYXRhLmNoYWluKTtcbiAgICBjb25zdCBiblVuY2xhaW1lZFJld2FyZCA9IG5ldyBCTih1bmNsYWltZWRSZXdhcmQgfHwgJzAnKTtcblxuICAgIGlmIChcbiAgICAgICgobm9taW5hdG9yTWV0YWRhdGEudHlwZSA9PT0gU3Rha2luZ1R5cGUuUE9PTEVEIHx8IGlzQW1wbGl0dWRlTmV0d29yaykgJiYgYm5VbmNsYWltZWRSZXdhcmQuZ3QoQk5fWkVSTykpIHx8XG4gICAgICBpc0FzdGFyTmV0d29ya1xuICAgICkge1xuICAgICAgcmVzdWx0LnB1c2goU3Rha2luZ0FjdGlvbi5DTEFJTV9SRVdBUkQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChub21pbmF0b3JNZXRhZGF0YS51bnN0YWtpbmdzLmxlbmd0aCA+IDApIHtcbiAgICByZXN1bHQucHVzaChTdGFraW5nQWN0aW9uLkNBTkNFTF9VTlNUQUtFKTtcbiAgICBjb25zdCBoYXNDbGFpbWFibGUgPSBub21pbmF0b3JNZXRhZGF0YS51bnN0YWtpbmdzLnNvbWUoKHVuc3Rha2luZykgPT4gdW5zdGFraW5nLnN0YXR1cyA9PT0gVW5zdGFraW5nU3RhdHVzLkNMQUlNQUJMRSk7XG5cbiAgICBpZiAoaGFzQ2xhaW1hYmxlKSB7XG4gICAgICByZXN1bHQucHVzaChTdGFraW5nQWN0aW9uLldJVEhEUkFXKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBY3Rpb25Gcm9tVmFsaWRhdG9yIChzdGFraW5nVHlwZTogU3Rha2luZ1R5cGUsIGNoYWluOiBzdHJpbmcpIHtcbiAgaWYgKHN0YWtpbmdUeXBlID09PSBTdGFraW5nVHlwZS5QT09MRUQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYXN0YXIuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYW1wbGl0dWRlLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLnBhcmEuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaXRoZHJhd2FsSW5mbyAobm9taW5hdG9yTWV0YWRhdGE6IE5vbWluYXRvck1ldGFkYXRhKSB7XG4gIGNvbnN0IHVuc3Rha2luZ3MgPSBub21pbmF0b3JNZXRhZGF0YS51bnN0YWtpbmdzO1xuXG4gIGxldCByZXN1bHQ6IFVuc3Rha2luZ0luZm8gfCB1bmRlZmluZWQ7XG5cbiAgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFzdGFyLmluY2x1ZGVzKG5vbWluYXRvck1ldGFkYXRhLmNoYWluKSkge1xuICAgIHJldHVybiBnZXRBc3RhcldpdGhkcmF3YWJsZShub21pbmF0b3JNZXRhZGF0YSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHVuc3Rha2luZyBvZiB1bnN0YWtpbmdzKSB7XG4gICAgaWYgKHVuc3Rha2luZy5zdGF0dXMgPT09IFVuc3Rha2luZ1N0YXR1cy5DTEFJTUFCTEUpIHtcbiAgICAgIHJlc3VsdCA9IHVuc3Rha2luZzsgLy8gb25seSBnZXQgdGhlIGZpcnN0IHdpdGhkcmF3YWxcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFraW5nU3RhdHVzQnlOb21pbmF0aW9ucyAoYm5Ub3RhbEFjdGl2ZVN0YWtlOiBCTiwgbm9taW5hdGlvbkxpc3Q6IE5vbWluYXRpb25JbmZvW10pOiBTdGFraW5nU3RhdHVzIHtcbiAgbGV0IHN0YWtpbmdTdGF0dXM6IFN0YWtpbmdTdGF0dXMgPSBTdGFraW5nU3RhdHVzLkVBUk5JTkdfUkVXQVJEO1xuXG4gIGlmIChiblRvdGFsQWN0aXZlU3Rha2UuaXNaZXJvKCkpIHtcbiAgICBzdGFraW5nU3RhdHVzID0gU3Rha2luZ1N0YXR1cy5OT1RfRUFSTklORztcbiAgfSBlbHNlIHtcbiAgICBsZXQgaW52YWxpZERlbGVnYXRpb25Db3VudCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IG5vbWluYXRpb24gb2Ygbm9taW5hdGlvbkxpc3QpIHtcbiAgICAgIGlmIChub21pbmF0aW9uLnN0YXR1cyA9PT0gU3Rha2luZ1N0YXR1cy5OT1RfRUFSTklORykge1xuICAgICAgICBpbnZhbGlkRGVsZWdhdGlvbkNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGludmFsaWREZWxlZ2F0aW9uQ291bnQgPiAwICYmIGludmFsaWREZWxlZ2F0aW9uQ291bnQgPCBub21pbmF0aW9uTGlzdC5sZW5ndGgpIHtcbiAgICAgIHN0YWtpbmdTdGF0dXMgPSBTdGFraW5nU3RhdHVzLlBBUlRJQUxMWV9FQVJOSU5HO1xuICAgIH0gZWxzZSBpZiAoaW52YWxpZERlbGVnYXRpb25Db3VudCA9PT0gbm9taW5hdGlvbkxpc3QubGVuZ3RoKSB7XG4gICAgICBzdGFraW5nU3RhdHVzID0gU3Rha2luZ1N0YXR1cy5OT1RfRUFSTklORztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3Rha2luZ1N0YXR1cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkYXRvckxhYmVsIChjaGFpbjogc3RyaW5nKSB7XG4gIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hc3Rhci5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gJ2RBcHAnO1xuICB9IGVsc2UgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLnJlbGF5LmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiAnVmFsaWRhdG9yJztcbiAgfVxuXG4gIHJldHVybiAnQ29sbGF0b3InO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0TWluU3Rha2VFcnJvck1lc3NhZ2UgPSAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCBibk1pblN0YWtlOiBCTik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHRva2VuSW5mbyA9IF9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvKGNoYWluSW5mbyk7XG4gIGNvbnN0IG51bWJlciA9IGZvcm1hdE51bWJlcihibk1pblN0YWtlLnRvU3RyaW5nKCksIHRva2VuSW5mby5kZWNpbWFscyB8fCAwLCBiYWxhbmNlRm9ybWF0dGVyKTtcblxuICByZXR1cm4gdCgnSW5zdWZmaWNpZW50IHN0YWtlLiBQbGVhc2Ugc3Rha2UgYXQgbGVhc3Qge3tudW1iZXJ9fSB7e3Rva2VuU3ltYm9sfX0gdG8gZ2V0IHJld2FyZHMnLCB7IHJlcGxhY2U6IHsgdG9rZW5TeW1ib2w6IHRva2VuSW5mby5zeW1ib2wsIG51bWJlciB9IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1heFZhbGlkYXRvckVycm9yTWVzc2FnZSA9IChjaGFpbkluZm86IF9DaGFpbkluZm8sIG1heDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgbGV0IG1lc3NhZ2UgPSBkZXRlY3RUcmFuc2xhdGUoJ1lvdSBjYW5ub3Qgc2VsZWN0IG1vcmUgdGhhbiB7e251bWJlcn19IHZhbGlkYXRvcnMgZm9yIHRoaXMgbmV0d29yaycpO1xuICBjb25zdCBsYWJlbCA9IGdldFZhbGlkYXRvckxhYmVsKGNoYWluSW5mby5zbHVnKTtcblxuICBpZiAobWF4ID4gMSkge1xuICAgIHN3aXRjaCAobGFiZWwpIHtcbiAgICAgIGNhc2UgJ2RBcHAnOlxuICAgICAgICBtZXNzYWdlID0gZGV0ZWN0VHJhbnNsYXRlKCdZb3UgY2Fubm90IHNlbGVjdCBtb3JlIHRoYW4ge3tudW1iZXJ9fSBkQXBwcyBmb3IgdGhpcyBuZXR3b3JrJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ29sbGF0b3InOlxuICAgICAgICBtZXNzYWdlID0gZGV0ZWN0VHJhbnNsYXRlKCdZb3UgY2Fubm90IHNlbGVjdCBtb3JlIHRoYW4ge3tudW1iZXJ9fSBjb2xsYXRvcnMgZm9yIHRoaXMgbmV0d29yaycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1ZhbGlkYXRvcic6XG4gICAgICAgIG1lc3NhZ2UgPSBkZXRlY3RUcmFuc2xhdGUoJ1lvdSBjYW5ub3Qgc2VsZWN0IG1vcmUgdGhhbiB7e251bWJlcn19IHZhbGlkYXRvcnMgZm9yIHRoaXMgbmV0d29yaycpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChsYWJlbCkge1xuICAgICAgY2FzZSAnZEFwcCc6XG4gICAgICAgIG1lc3NhZ2UgPSBkZXRlY3RUcmFuc2xhdGUoJ1lvdSBjYW5ub3Qgc2VsZWN0IG1vcmUgdGhhbiB7e251bWJlcn19IGRBcHAgZm9yIHRoaXMgbmV0d29yaycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NvbGxhdG9yJzpcbiAgICAgICAgbWVzc2FnZSA9IGRldGVjdFRyYW5zbGF0ZSgnWW91IGNhbm5vdCBzZWxlY3QgbW9yZSB0aGFuIHt7bnVtYmVyfX0gY29sbGF0b3IgZm9yIHRoaXMgbmV0d29yaycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1ZhbGlkYXRvcic6XG4gICAgICAgIG1lc3NhZ2UgPSBkZXRlY3RUcmFuc2xhdGUoJ1lvdSBjYW5ub3Qgc2VsZWN0IG1vcmUgdGhhbiB7e251bWJlcn19IHZhbGlkYXRvciBmb3IgdGhpcyBuZXR3b3JrJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0KG1lc3NhZ2UsIHsgcmVwbGFjZTogeyBudW1iZXI6IG1heCB9IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEV4aXN0VW5zdGFrZUVycm9yTWVzc2FnZSA9IChjaGFpbjogc3RyaW5nLCBpc1N0YWtlTW9yZT86IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBsYWJlbCA9IGdldFZhbGlkYXRvckxhYmVsKGNoYWluKTtcblxuICBpZiAoIWlzU3Rha2VNb3JlKSB7XG4gICAgc3dpdGNoIChsYWJlbCkge1xuICAgICAgY2FzZSAnZEFwcCc6XG4gICAgICAgIHJldHVybiB0KCdZb3UgY2FuIHVuc3Rha2UgZnJvbSBhIGRBcHAgb25jZScpO1xuICAgICAgY2FzZSAnQ29sbGF0b3InOlxuICAgICAgICByZXR1cm4gdCgnWW91IGNhbiB1bnN0YWtlIGZyb20gYSBjb2xsYXRvciBvbmNlJyk7XG4gICAgICBjYXNlICdWYWxpZGF0b3InOlxuICAgICAgICByZXR1cm4gdCgnWW91IGNhbiB1bnN0YWtlIGZyb20gYSB2YWxpZGF0b3Igb25jZScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGxhYmVsKSB7XG4gICAgICBjYXNlICdkQXBwJzpcbiAgICAgICAgcmV0dXJuIHQoJ1lvdSBjYW5ub3Qgc3Rha2UgbW9yZSBmb3IgYSBkQXBwIHlvdSBhcmUgdW5zdGFraW5nIGZyb20nKTtcbiAgICAgIGNhc2UgJ0NvbGxhdG9yJzpcbiAgICAgICAgcmV0dXJuIHQoJ1lvdSBjYW5ub3Qgc3Rha2UgbW9yZSBmb3IgYSBjb2xsYXRvciB5b3UgYXJlIHVuc3Rha2luZyBmcm9tJyk7XG4gICAgICBjYXNlICdWYWxpZGF0b3InOlxuICAgICAgICByZXR1cm4gdCgnWW91IGNhbm5vdCBzdGFrZSBtb3JlIGZvciBhIHZhbGlkYXRvciB5b3UgYXJlIHVuc3Rha2luZyBmcm9tJyk7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfREVGQVVMVF9DSEFJTlMgfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QnO1xuaW1wb3J0IHsgX1N1YnN0cmF0ZUNoYWluVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBTaW5nbGVNb2RlSnNvbiwgVGhlbWVOYW1lcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQVBJX0FVVE9fQ09OTkVDVF9NUyA9IDMwMDA7XG5leHBvcnQgY29uc3QgQVBJX0NPTk5FQ1RfVElNRU9VVCA9IDMwMDAwO1xuZXhwb3J0IGNvbnN0IEFQSV9NQVhfUkVUUlkgPSAyO1xuXG5leHBvcnQgY29uc3QgX0FQSV9PUFRJT05TX0NIQUlOX0dST1VQID0ge1xuICBhY2FsYTogWydhY2FsYScsICdrYXJ1cmEnLCAnb3JpZ2ludHJhaWwnLCAna2ludHN1Z2knXSxcbiAgdHVyaW5nOiBbJ3R1cmluZ1N0YWdpbmcnLCAndHVyaW5nJ10sXG4gIGF2YWlsOiBbJ2thdGUnXVxufTtcblxuZXhwb3J0IGNvbnN0IF9QUkVERUZJTkVEX1NJTkdMRV9NT0RFUzogUmVjb3JkPHN0cmluZywgU2luZ2xlTW9kZUpzb24+ID0ge1xuICBzdWJzcGFjZToge1xuICAgIG5ldHdvcmtLZXlzOiBbJ3N1YnNwYWNlX2dlbWluaV8yYScsICdzdWJzcGFjZV90ZXN0JywgJ3N1YnNwYWNlX2dlbWluaV8zYSddLFxuICAgIHRoZW1lOiBUaGVtZU5hbWVzLlNVQlNQQUNFLFxuICAgIGF1dG9UcmlnZ2VyRG9tYWluOiAnc3Vic3BhY2UubmV0d29yaydcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9QVVJFX0VWTV9DSEFJTlMgPSBbJ2JpbmFuY2UnLCAnYmluYW5jZV90ZXN0JywgJ2V0aGVyZXVtJywgJ2V0aGVyZXVtX2dvZXJsaScsICdhc3RhckV2bScsICdzaGlkZW5Fdm0nLCAnc2hpYnV5YUV2bScsICdjcmFiRXZtJywgJ3BhbmdvbGluRXZtJywgJ2Nsb3ZlckV2bScsICdib2JhX3JpbmtlYnknLCAnYm9iYScsICdib2JhYmFzZScsICdib2JhYmVhbScsICd3YXRyX25ldHdvcmtfZXZtJ107XG5cbi8vIEdldCBiYWxhbmNlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgX0JBTEFOQ0VfQ0hBSU5fR1JPVVAgPSB7XG4gIGtpbnRzdWdpOiBbJ2tpbnRzdWdpJywgJ2ludGVybGF5JywgJ2tpbnRzdWdpX3Rlc3QnLCAnbWFuZ2F0YXhfcGFyYSddLFxuICBnZW5zaGlybzogWydnZW5zaGlyb190ZXN0bmV0JywgJ2dlbnNoaXJvJ10sXG4gIGVxdWlsaWJyaXVtX3BhcmFjaGFpbjogWydlcXVpbGlicml1bV9wYXJhY2hhaW4nXSxcbiAgYmlmcm9zdDogWydiaWZyb3N0JywgJ2FjYWxhJywgJ2thcnVyYScsICdhY2FsYV90ZXN0bmV0JywgJ3Bpb25lZXInLCAnYml0Y291bnRyeScsICdiaWZyb3N0X2RvdCcsICdoeWRyYWR4X21haW4nLCAncGVuZHVsdW0nLCAnYW1wbGl0dWRlJ10sXG4gIHN0YXRlbWluZTogWydzdGF0ZW1pbmUnLCAnYXN0YXInLCAnc2hpZGVuJywgJ3N0YXRlbWludCcsICdtb29uYmVhbScsICdtb29uYmFzZScsICdtb29ucml2ZXInLCAnY3JhYlBhcmFjaGFpbicsICdkYXJ3aW5pYTInLCAncGFyYWxsZWwnLCAnY2FsYW1hcmknXSxcbiAga3VzYW1hOiBbJ2t1c2FtYScsICdraW50c3VnaScsICdraW50c3VnaV90ZXN0JywgJ2ludGVybGF5JywgJ2FjYWxhJywgJ3N0YXRlbWludCcsICdrYXJ1cmEnLCAnYmlmcm9zdCddIC8vIHBlcmhhcHMgdGhlcmUgYXJlIHNvbWUgcnVudGltZSB1cGRhdGVzXG59O1xuXG5leHBvcnQgY29uc3QgX0JBTEFOQ0VfVE9LRU5fR1JPVVAgPSB7XG4gIGNyYWI6IFsnQ0tUT04nLCAnUEtUT04nXSxcbiAgYml0Y291bnRyeTogWydCSVQnXVxufTtcblxuZXhwb3J0IGNvbnN0IF9ORlRfQ0hBSU5fR1JPVVAgPSB7XG4gIGFjYWxhOiBbJ2FjYWxhJ10sXG4gIGthcnVyYTogWydrYXJ1cmEnXSwgLy8gVE9ETzoga2FydXJhIGFuZCBhY2FsYSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgcm1yazogWydrdXNhbWEnXSxcbiAgc3RhdGVtaW5lOiBbJ3N0YXRlbWluZSddLFxuICBzdGF0ZW1pbnQ6IFsnc3RhdGVtaW50J10sXG4gIHVuaXF1ZV9uZXR3b3JrOiBbJ3VuaXF1ZV9uZXR3b3JrJ10sXG4gIGJpdGNvdW50cnk6IFsnYml0Y291bnRyeScsICdwaW9uZWVyJ10sXG4gIHZhcmE6IFsndmFyYV9uZXR3b3JrJ11cbn07XG5cbi8vIFN0YWtpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgX1NUQUtJTkdfQ0hBSU5fR1JPVVAgPSB7XG4gIHJlbGF5OiBbJ3BvbGthZG90JywgJ2t1c2FtYScsICdhbGVwaCcsICdwb2xrYWRleCcsICd0ZXJub2EnLCAndGVybm9hX2FscGhhbmV0JywgJ2FsZXBoVGVzdCcsICdwb2xrYWRleFRlc3QnLCAnd2VzdGVuZCcsICdrYXRlJywgJ2VkZ2V3YXJlJywgJ2NyZWRpdGNvaW4nLCAndmFyYV9uZXR3b3JrJ10sXG4gIHBhcmE6IFsnbW9vbmJlYW0nLCAnbW9vbnJpdmVyJywgJ21vb25iYXNlJywgJ3R1cmluZycsICd0dXJpbmdTdGFnaW5nJywgJ2JpZnJvc3QnLCAnYmlmcm9zdF90ZXN0bmV0JywgJ2NhbGFtYXJpX3Rlc3QnLCAnY2FsYW1hcmknXSxcbiAgYXN0YXI6IFsnYXN0YXInLCAnc2hpZGVuJywgJ3NoaWJ1eWEnXSxcbiAgYW1wbGl0dWRlOiBbJ2FtcGxpdHVkZScsICdhbXBsaXR1ZGVfdGVzdCcsICdraWx0JywgJ2tpbHRfcGVyZWdyaW5lJywgJ3BlbmR1bHVtJ10sIC8vIGFtcGxpdHVkZSBhbmQga2lsdCBvbmx5IHNoYXJlIHNvbWUgY29tbW9uIGxvZ2ljXG4gIGtpbHQ6IFsna2lsdCcsICdraWx0X3BlcmVncmluZSddLFxuICBub21pbmF0aW9uUG9vbDogWydwb2xrYWRvdCcsICdrdXNhbWEnLCAnd2VzdGVuZCcsICdhbGVwaFRlc3QnLCAnYWxlcGgnLCAna2F0ZSddLFxuICBiaWZyb3N0OiBbJ2JpZnJvc3QnLCAnYmlmcm9zdF90ZXN0bmV0J10sXG4gIGFsZXBoOiBbJ2FsZXBoJywgJ2FsZXBoVGVzdCddLCAvLyBBMCBoYXMgZGlzdGluY3QgdG9rZW5vbWljc1xuICB0ZXJub2E6IFsndGVybm9hJywgJ3Rlcm5vYV9hbHBoYW5ldCddXG59O1xuXG5leHBvcnQgY29uc3QgX1NUQUtJTkdfRVJBX0xFTkdUSF9NQVA6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7IC8vIGluIGhvdXJzXG4gIGFsZXBoVGVzdDogMjQsXG4gIGFsZXBoOiAyNCxcbiAgcG9sa2Fkb3Q6IDI0LFxuICBrdXNhbWE6IDYsXG4gIHdlc3RlbmQ6IDYsXG4gIGh5ZHJhZHg6IDI0LFxuICBkZWZhdWx0OiAyNCxcbiAgbW9vbmJlYW06IDYsXG4gIG1vb25yaXZlcjogMixcbiAgbW9vbmJhc2U6IDIsXG4gIHR1cmluZzogMixcbiAgdHVyaW5nU3RhZ2luZzogMixcbiAgYXN0YXI6IDI0LFxuICBzaGlkZW46IDI0LFxuICBzaGlidXlhOiAyNCxcbiAgYmlmcm9zdF90ZXN0bmV0OiAwLjUsXG4gIGJpZnJvc3Q6IDIsXG4gIHRlcm5vYTogMjQsXG4gIGNhbGFtYXJpOiA2LFxuICBjYWxhbWFyaV90ZXN0OiA2LFxuICBhbXBsaXR1ZGU6IDIsXG4gIGFtcGxpdHVkZV90ZXN0OiAyLFxuICBwZW5kdWx1bTogMixcbiAga2lsdDogMixcbiAga2lsdF9wZXJlZ3JpbmU6IDIsXG4gIGVkZ2V3YXJlOiA2LFxuICBrYXRlOiA2LFxuICBjcmVkaXRjb2luOiAyNCxcbiAgdmFyYV9uZXR3b3JrOiAxMlxufTtcblxuZXhwb3J0IGNvbnN0IF9QQVJBQ0hBSU5fSU5GTEFUSU9OX0RJU1RSSUJVVElPTjogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgbnVtYmVyPj4gPSB7XG4gIG1vb25iZWFtOiB7IC8vIGh0dHBzOi8vZG9jcy5tb29uYmVhbS5uZXR3b3JrL2xlYXJuL2ZlYXR1cmVzL3N0YWtpbmcvI2FubnVhbC1pbmZsYXRpb25cbiAgICByZXdhcmQ6IDAuNSxcbiAgICBjb2xsYXRvckNvbW1pc3Npb246IDAuMixcbiAgICBib25kUmVzZXJ2ZTogMC4zXG4gIH0sXG4gIG1vb25yaXZlcjoge1xuICAgIHJld2FyZDogMC41LFxuICAgIGNvbGxhdG9yQ29tbWlzc2lvbjogMC4yLFxuICAgIGJvbmRSZXNlcnZlOiAwLjNcbiAgfSxcbiAgbW9vbmJhc2U6IHtcbiAgICByZXdhcmQ6IDAuNSxcbiAgICBjb2xsYXRvckNvbW1pc3Npb246IDAuMixcbiAgICBib25kUmVzZXJ2ZTogMC4zXG4gIH0sXG4gIHR1cmluZzogeyAvLyBodHRwczovL2RvY3Mub2FrLnRlY2gvZG9jcy9kZWxlZ2F0b3JzL1xuICAgIHJld2FyZDogMC41XG4gIH0sXG4gIHR1cmluZ1N0YWdpbmc6IHsgLy8gaHR0cHM6Ly9kb2NzLm9hay50ZWNoL2RvY3MvZGVsZWdhdG9ycy9cbiAgICByZXdhcmQ6IDAuNVxuICB9LFxuICBiaWZyb3N0OiB7XG4gICAgcmV3YXJkOiAwXG4gIH0sXG4gIGJpZnJvc3RfdGVzdG5ldDoge1xuICAgIHJld2FyZDogMFxuICB9LFxuICBjYWxhbWFyaV90ZXN0OiB7XG4gICAgcmV3YXJkOiAwLjlcbiAgfSxcbiAgY2FsYW1hcmk6IHtcbiAgICByZXdhcmQ6IDAuOVxuICB9LFxuICBkZWZhdWx0OiB7XG4gICAgcmV3YXJkOiAwXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZUluZmxhdGlvblBhcmFtcyB7XG4gIGF1Y3Rpb25BZGp1c3Q6IG51bWJlcjtcbiAgYXVjdGlvbk1heDogbnVtYmVyO1xuICBmYWxsb2ZmOiBudW1iZXI7XG4gIG1heEluZmxhdGlvbjogbnVtYmVyO1xuICBtaW5JbmZsYXRpb246IG51bWJlcjtcbiAgc3Rha2VUYXJnZXQ6IG51bWJlcjtcbiAgeWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZVVuaWZvcm1FcmFQYXlvdXRJbmZsYXRpb25QYXJhbXMgZXh0ZW5kcyBfU3Vic3RyYXRlSW5mbGF0aW9uUGFyYW1zIHtcbiAgeWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IF9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TOiBfU3Vic3RyYXRlSW5mbGF0aW9uUGFyYW1zID0ge1xuICBhdWN0aW9uQWRqdXN0OiAwLFxuICBhdWN0aW9uTWF4OiAwLFxuICAvLyA1JSBmb3IgZmFsbG9mZiwgYXMgcGVyIHRoZSBkZWZhdWx0cywgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXJpdHl0ZWNoL3BvbGthZG90L2Jsb2IvODE2Y2I2NGVhMTYxMDJjNmM3OWY2YmUyYTkxN2Q4MzJkOThkZjc1Ny9ydW50aW1lL2t1c2FtYS9zcmMvbGliLnJzI0w1MzRcbiAgZmFsbG9mZjogMC4wNSxcbiAgLy8gMTAlIG1heCwgMC4yNSUgbWluLCBzZWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bhcml0eXRlY2gvcG9sa2Fkb3QvYmxvYi84MTZjYjY0ZWExNjEwMmM2Yzc5ZjZiZTJhOTE3ZDgzMmQ5OGRmNzU3L3J1bnRpbWUva3VzYW1hL3NyYy9saWIucnMjTDUyM1xuICBtYXhJbmZsYXRpb246IDAuMSxcbiAgbWluSW5mbGF0aW9uOiAwLjAyNSxcbiAgc3Rha2VUYXJnZXQ6IDAuNVxufTtcblxuY29uc3QgX0FMRVBIX0RFRkFVTFRfVU5JRk9STV9FUkFfUEFZT1VUX1BBUkFNUzogX1N1YnN0cmF0ZVVuaWZvcm1FcmFQYXlvdXRJbmZsYXRpb25QYXJhbXMgPSB7XG4gIC4uLl9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TLFxuICB5ZWFybHlJbmZsYXRpb25JblRva2VuczogMzAwMDAwMDBcbn07XG5cbmV4cG9ydCBjb25zdCBfS05PV05fQ0hBSU5fSU5GTEFUSU9OX1BBUkFNUzogUmVjb3JkPHN0cmluZywgX1N1YnN0cmF0ZUluZmxhdGlvblBhcmFtcz4gPSB7XG4gIGFsZXBoOiBfQUxFUEhfREVGQVVMVF9VTklGT1JNX0VSQV9QQVlPVVRfUEFSQU1TLFxuICBhbGVwaFRlc3Q6IF9BTEVQSF9ERUZBVUxUX1VOSUZPUk1fRVJBX1BBWU9VVF9QQVJBTVMsXG4gIGRvY2tfcG9zOiB7IC4uLl9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TLCBzdGFrZVRhcmdldDogMC43NSB9LFxuICBrdXNhbWE6IHsgLi4uX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMsIGF1Y3Rpb25BZGp1c3Q6ICgwLjMgLyA2MCksIGF1Y3Rpb25NYXg6IDYwLCBzdGFrZVRhcmdldDogMC43NSB9LFxuICBuZWF0Y29pbjogeyAuLi5fU1VCU1RSQVRFX0RFRkFVTFRfSU5GTEFUSU9OX1BBUkFNUywgc3Rha2VUYXJnZXQ6IDAuNzUgfSxcbiAgbmZ0X21hcnQ6IHsgLi4uX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMsIGZhbGxvZmY6IDAuMDQsIHN0YWtlVGFyZ2V0OiAwLjYwIH0sXG4gIHBvbGthZG90OiB7IC4uLl9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TLCBzdGFrZVRhcmdldDogMC43NSB9XG59O1xuXG4vLyBTZW5kIGZ1bmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IF9UUkFOU0ZFUl9OT1RfU1VQUE9SVEVEX0NIQUlOUyA9IFsnc3Vic3BhY2VfZ2VtaW5pXzNhJywgJ2t1bHVwdScsICdqb3lzdHJlYW0nLCAnZXF1aWxpYnJpdW1fcGFyYWNoYWluJywgJ2dlbnNoaXJvX3Rlc3RuZXQnLCAnZ2Vuc2hpcm8nXTtcblxuZXhwb3J0IGNvbnN0IF9UUkFOU0ZFUl9DSEFJTl9HUk9VUCA9IHtcbiAgYWNhbGE6IFsna2FydXJhJywgJ2FjYWxhJywgJ2FjYWxhX3Rlc3RuZXQnXSxcbiAga2ludHN1Z2k6IFsna2ludHN1Z2knLCAna2ludHN1Z2lfdGVzdCcsICdpbnRlcmxheScsICdoeWRyYWR4X21haW4nLCAnbWFuZ2F0YXhfcGFyYSddLFxuICBnZW5zaGlybzogWydnZW5zaGlyb190ZXN0bmV0JywgJ2dlbnNoaXJvJywgJ2VxdWlsaWJyaXVtX3BhcmFjaGFpbiddLFxuICBjcmFiOiBbJ2NyYWInLCAncGFuZ29saW4nXSxcbiAgYml0Y291bnRyeTogWydwaW9uZWVyJywgJ2JpdGNvdW50cnknLCAnYmlmcm9zdCcsICdiaWZyb3N0X2RvdCddLFxuICBzdGF0ZW1pbmU6IFsnc3RhdGVtaW50JywgJ3N0YXRlbWluZScsICdkYXJ3aW5pYTInLCAnYXN0YXInLCAnc2hpZGVuJywgJ3NoaWJ1eWEnLCAncGFyYWxsZWwnXSxcbiAgcmlvY2hhaW46IFsncmlvY2hhaW4nXSxcbiAgc29yYV9zdWJzdHJhdGU6IFsnc29yYV9zdWJzdHJhdGUnXSxcbiAgYXZhaWw6IFsna2F0ZSddLFxuICBwZW5kdWx1bTogWydwZW5kdWx1bScsICdhbXBsaXR1ZGUnLCAnYW1wbGl0dWRlX3Rlc3QnXVxufTtcblxuZXhwb3J0IGNvbnN0IF9CQUxBTkNFX1BBUlNJTkdfQ0hBSU5fR1JPVVAgPSB7XG4gIGJvYmFiZWFtOiBbJ2JvYmFiZWFtJywgJ2JvYmFiYXNlJ11cbn07XG5cbmV4cG9ydCBjb25zdCBfTUFOVEFfWktfQ0hBSU5fR1JPVVAgPSBbJ2NhbGFtYXJpJ107XG5cbmV4cG9ydCBjb25zdCBfWktfQVNTRVRfUFJFRklYID0gJ3prJztcblxuZXhwb3J0IGNvbnN0IF9ERUZBVUxUX01BTlRBX1pLX0NIQUlOID0gJ2NhbGFtYXJpJztcblxuLy8gWENNLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBfWENNX0NIQUlOX0dST1VQID0ge1xuICBwb2xrYWRvdFhjbTogWydhc3RhcicsICdzaGlkZW4nLCAnc3RhdGVtaW5lJywgJ3N0YXRlbWludCcsICdlcXVpbGlicml1bV9wYXJhY2hhaW4nXSxcbiAgeGNtUGFsbGV0OiBbJ3BvbGthZG90JywgJ2t1c2FtYSddXG4gIC8vIGRlZmF1bHQgaXMgeFRva2VucyBwYWxsZXRcbn07XG5cbmV4cG9ydCBjb25zdCBfWENNX1RZUEUgPSB7XG4gIFJQOiBgJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlJFTEFZQ0hBSU59LSR7X1N1YnN0cmF0ZUNoYWluVHlwZS5QQVJBQ0hBSU59YCwgLy8gRE1QXG4gIFBQOiBgJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlBBUkFDSEFJTn0tJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlBBUkFDSEFJTn1gLCAvLyBIUk1QXG4gIFBSOiBgJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlBBUkFDSEFJTn0tJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlJFTEFZQ0hBSU59YCAvLyBVTVBcbn07XG5cbmV4cG9ydCBjb25zdCBfREVGQVVMVF9BQ1RJVkVfQ0hBSU5TID0gW1xuICAuLi5fREVGQVVMVF9DSEFJTlMsXG4gICd2YXJhX25ldHdvcmsnXG5dO1xuXG5leHBvcnQgY29uc3QgRVZNX1BBU1NfQ09OTkVDVF9TVEFUVVMgPSB7XG4gIGFjYWxhOiBbJ2FjYWxhX2V2bScsICdrYXJ1cmFfZXZtJ11cbn07XG5cbmV4cG9ydCBjb25zdCBFVk1fUkVGT1JNQVRfREVDSU1BTFMgPSB7XG4gIGFjYWxhOiBbJ2FjYWxhX2V2bScsICdrYXJ1cmFfZXZtJ11cbn07XG5cbi8vIFRPRE86IHJldmlld1xuY29uc3QgVEFSR0VUX0JSQU5DSCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAna29uaS1kZXYnIDogJ21hc3Rlcic7XG5cbmV4cG9ydCBjb25zdCBfQ0hBSU5fSU5GT19TUkMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtQ2hhaW4vJHtUQVJHRVRfQlJBTkNIfS9wYWNrYWdlcy9jaGFpbi1saXN0L3NyYy9kYXRhL0NoYWluSW5mby5qc29uYDtcbmV4cG9ydCBjb25zdCBfQ0hBSU5fQVNTRVRfU1JDID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Lb25pdmVyc2UvU3ViV2FsbGV0LUNoYWluLyR7VEFSR0VUX0JSQU5DSH0vcGFja2FnZXMvY2hhaW4tbGlzdC9zcmMvZGF0YS9DaGFpbkFzc2V0Lmpzb25gO1xuZXhwb3J0IGNvbnN0IF9BU1NFVF9SRUZfU1JDID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Lb25pdmVyc2UvU3ViV2FsbGV0LUNoYWluLyR7VEFSR0VUX0JSQU5DSH0vcGFja2FnZXMvY2hhaW4tbGlzdC9zcmMvZGF0YS9Bc3NldFJlZi5qc29uYDtcbmV4cG9ydCBjb25zdCBfTVVMVElfQ0hBSU5fQVNTRVRfU1JDID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Lb25pdmVyc2UvU3ViV2FsbGV0LUNoYWluLyR7VEFSR0VUX0JSQU5DSH0vcGFja2FnZXMvY2hhaW4tbGlzdC9zcmMvZGF0YS9NdWx0aUNoYWluQXNzZXQuanNvbmA7XG5leHBvcnQgY29uc3QgX0NIQUlOX0xPR09fTUFQX1NSQyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vS29uaXZlcnNlL1N1YldhbGxldC1DaGFpbi8ke1RBUkdFVF9CUkFOQ0h9L3BhY2thZ2VzL2NoYWluLWxpc3Qvc3JjL2RhdGEvQ2hhaW5Mb2dvTWFwLmpzb25gO1xuZXhwb3J0IGNvbnN0IF9BU1NFVF9MT0dPX01BUF9TUkMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtQ2hhaW4vJHtUQVJHRVRfQlJBTkNIfS9wYWNrYWdlcy9jaGFpbi1saXN0L3NyYy9kYXRhL0Fzc2V0TG9nb01hcC5qc29uYDtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBNZXRhZGF0YUl0ZW0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IF9DaGFpbkNvbm5lY3Rpb25TdGF0dXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdHlwZXMnO1xuXG5pbXBvcnQgeyBBcGlQcm9taXNlIH0gZnJvbSAnQHBvbGthZG90L2FwaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgX0V2bUNoYWluU3BlYyB7XG4gIGV2bUNoYWluSWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICBzeW1ib2w6IHN0cmluZyxcbiAgZGVjaW1hbHM6IG51bWJlcixcbiAgZXhpc3RlbnRpYWxEZXBvc2l0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfU3Vic3RyYXRlQ2hhaW5TcGVjIHtcbiAgbmFtZTogc3RyaW5nLFxuICBhZGRyZXNzUHJlZml4OiBudW1iZXIsXG4gIGdlbmVzaXNIYXNoOiBzdHJpbmcsXG4gIHN5bWJvbDogc3RyaW5nLFxuICBkZWNpbWFsczogbnVtYmVyLFxuICBleGlzdGVudGlhbERlcG9zaXQ6IHN0cmluZyxcbiAgcGFyYUlkOiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX0FwaU9wdGlvbnMge1xuICBwcm92aWRlck5hbWU/OiBzdHJpbmcsXG4gIG1ldGFkYXRhPzogTWV0YWRhdGFJdGVtLFxuICBvblVwZGF0ZVN0YXR1cz86IChzdGF0dXM6IF9DaGFpbkNvbm5lY3Rpb25TdGF0dXMpID0+IHZvaWQsXG4gIGV4dGVybmFsQXBpUHJvbWlzZT86IEFwaVByb21pc2Vcbn1cblxuZXhwb3J0IGVudW0gX0NIQUlOX1ZBTElEQVRJT05fRVJST1Ige1xuICBJTlZBTElEX0lORk9fVFlQRSA9ICdpbnZhbGlkSW5mb1R5cGUnLFxuICBJTkpFQ1RfU0NSSVBUX0RFVEVDVEVEID0gJ2luamVjdFNjcmlwdERldGVjdGVkJyxcbiAgRVhJU1RFRF9DSEFJTiA9ICdleGlzdGVkQ2hhaW4nLFxuICBFWElTVEVEX1BST1ZJREVSID0gJ2V4aXN0ZWRQcm92aWRlcicsXG4gIElOVkFMSURfUFJPVklERVIgPSAnaW52YWxpZFByb3ZpZGVyJyxcbiAgTk9ORSA9ICdub25lJyxcbiAgQ09OTkVDVElPTl9GQUlMVVJFID0gJ2Nvbm5lY3Rpb25GYWlsdXJlJyxcbiAgUFJPVklERVJfTk9UX1NBTUVfQ0hBSU4gPSAncHJvdmlkZXJOb3RTYW1lQ2hhaW4nXG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Vcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8qIGVzbGludCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlOiBcIm9mZlwiICovXG5cbmltcG9ydCB7IF9Bc3NldFJlZiwgX0Fzc2V0VHlwZSwgX0NoYWluQXNzZXQsIF9DaGFpbkluZm8sIF9Dcm93ZGxvYW5GdW5kIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2hhbmRsZXIvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcblxuaW1wb3J0IHsgQXBpUHJvbWlzZSB9IGZyb20gJ0Bwb2xrYWRvdC9hcGknO1xuaW1wb3J0IHsgU3VibWl0dGFibGVFeHRyaW5zaWNGdW5jdGlvbiB9IGZyb20gJ0Bwb2xrYWRvdC9hcGkvcHJvbWlzZS90eXBlcyc7XG5pbXBvcnQgeyBDaGFpblByb3BlcnRpZXMsIENoYWluVHlwZSB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSAnQHBvbGthZG90L3R5cGVzL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBfRGF0YU1hcCB7XG4gIGNoYWluSW5mb01hcDogUmVjb3JkPHN0cmluZywgX0NoYWluSW5mbz4sXG4gIGNoYWluU3RhdGVNYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpblN0YXRlPixcbiAgYXNzZXRSZWdpc3RyeTogUmVjb3JkPHN0cmluZywgX0NoYWluQXNzZXQ+LFxuICBhc3NldFJlZk1hcDogUmVjb3JkPHN0cmluZywgX0Fzc2V0UmVmPlxufVxuXG5leHBvcnQgZW51bSBfQ2hhaW5Db25uZWN0aW9uU3RhdHVzIHtcbiAgQ09OTkVDVEVEID0gJ0NPTk5FQ1RFRCcsXG4gIERJU0NPTk5FQ1RFRCA9ICdESVNDT05ORUNURUQnLFxuICBVTlNUQUJMRSA9ICdVTlNUQUJMRScsXG4gIENPTk5FQ1RJTkcgPSAnQ09OTkVDVElORycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX0NoYWluU3RhdGUge1xuICBzbHVnOiBzdHJpbmcsXG4gIGFjdGl2ZTogYm9vbGVhbixcbiAgY3VycmVudFByb3ZpZGVyOiBzdHJpbmcsXG4gIGNvbm5lY3Rpb25TdGF0dXM6IF9DaGFpbkNvbm5lY3Rpb25TdGF0dXNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfU3Vic3RyYXRlRGVmYXVsdEZvcm1hdEJhbGFuY2Uge1xuICBkZWNpbWFscz86IG51bWJlcltdIHwgbnVtYmVyO1xuICB1bml0Pzogc3RyaW5nW10gfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX0NoYWluQmFzZUFwaSB7XG4gIGNoYWluU2x1Zzogc3RyaW5nO1xuICBhcGlVcmw6IHN0cmluZztcbiAgcHJvdmlkZXJOYW1lPzogc3RyaW5nO1xuXG4gIGFwaUVycm9yPzogc3RyaW5nO1xuICBhcGlSZXRyeT86IG51bWJlcjtcbiAgaXNBcGlSZWFkeTogYm9vbGVhbjtcbiAgaXNBcGlDb25uZWN0ZWRTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gIGlzQXBpUmVhZHlPbmNlOiBib29sZWFuO1xuICBpc0FwaUNvbm5lY3RlZDogYm9vbGVhbjsgLy8gbWlnaHQgYmUgcmVkdW5kYW50XG4gIGNvbm5lY3Rpb25TdGF0dXM6IF9DaGFpbkNvbm5lY3Rpb25TdGF0dXM7IC8vIG1pZ2h0IGJlIHJlZHVuZGFudFxuICB1cGRhdGVBcGlVcmw6IChhcGlVcmw6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgZGlzY29ubmVjdDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgcmVjb3ZlckNvbm5lY3Q6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGRlc3Ryb3k6ICgpID0+IFByb21pc2U8dm9pZD47XG5cbiAgaXNSZWFkeTogUHJvbWlzZTxfQ2hhaW5CYXNlQXBpPjsgLy8gdG8gYmUgb3ZlcndyaXR0ZW4gYnkgY2hpbGQgaW50ZXJmYWNlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZUNoYWluTWV0YWRhdGEge1xuICBwcm9wZXJ0aWVzOiBDaGFpblByb3BlcnRpZXM7XG4gIHN5c3RlbUNoYWluOiBzdHJpbmc7XG4gIHN5c3RlbUNoYWluVHlwZTogQ2hhaW5UeXBlO1xuICBzeXN0ZW1OYW1lOiBzdHJpbmc7XG4gIHN5c3RlbVZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfU3Vic3RyYXRlQXBpU3RhdGUge1xuICBhcGlEZWZhdWx0VHg/OiBTdWJtaXR0YWJsZUV4dHJpbnNpY0Z1bmN0aW9uO1xuICBhcGlEZWZhdWx0VHhTdWRvPzogU3VibWl0dGFibGVFeHRyaW5zaWNGdW5jdGlvbjtcbiAgZGVmYXVsdEZvcm1hdEJhbGFuY2U/OiBfU3Vic3RyYXRlRGVmYXVsdEZvcm1hdEJhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZUFwaSBleHRlbmRzIF9TdWJzdHJhdGVBcGlTdGF0ZSwgX0NoYWluQmFzZUFwaSB7XG4gIGFwaTogQXBpUHJvbWlzZTtcbiAgaXNSZWFkeTogUHJvbWlzZTxfU3Vic3RyYXRlQXBpPjtcblxuICBzcGVjTmFtZTogc3RyaW5nO1xuICBzcGVjVmVyc2lvbjogc3RyaW5nO1xuICBzeXN0ZW1DaGFpbjogc3RyaW5nO1xuICBzeXN0ZW1OYW1lOiBzdHJpbmc7XG4gIHN5c3RlbVZlcnNpb246IHN0cmluZztcbiAgcmVnaXN0cnk6IFJlZ2lzdHJ5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9Fdm1BcGkgZXh0ZW5kcyBfQ2hhaW5CYXNlQXBpIHtcbiAgYXBpOiBXZWIzO1xuXG4gIGlzUmVhZHk6IFByb21pc2U8X0V2bUFwaT47XG59XG5cbmV4cG9ydCB0eXBlIF9OZXR3b3JrVXBzZXJ0UGFyYW1zID0ge1xuICBtb2RlOiAndXBkYXRlJyB8ICdpbnNlcnQnLFxuICBjaGFpbkVkaXRJbmZvOiB7XG4gICAgY2hhaW5UeXBlPzogc3RyaW5nLFxuICAgIGN1cnJlbnRQcm92aWRlcjogc3RyaW5nLFxuICAgIG5hbWU/OiBzdHJpbmcsXG4gICAgcHJvdmlkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIHNsdWc6IHN0cmluZyxcbiAgICBzeW1ib2w/OiBzdHJpbmcsXG4gICAgYmxvY2tFeHBsb3Jlcj86IHN0cmluZyxcbiAgICBjcm93ZGxvYW5Vcmw/OiBzdHJpbmcsXG4gICAgcHJpY2VJZD86IHN0cmluZ1xuICB9LFxuICBjaGFpblNwZWM/OiB7XG4gICAgLy8gU3Vic3RyYXRlXG4gICAgZ2VuZXNpc0hhc2g6IHN0cmluZyxcbiAgICBwYXJhSWQ6IG51bWJlciB8IG51bGwsXG4gICAgYWRkcmVzc1ByZWZpeDogbnVtYmVyLFxuICAgIGNyb3dkbG9hbkZ1bmRzPzogX0Nyb3dkbG9hbkZ1bmRbXSB8IG51bGwsXG4gICAgY3Jvd2Rsb2FuUGFyYUlkPzogbnVtYmVyIHwgbnVsbCxcblxuICAgIC8vIEVWTVxuICAgIGV2bUNoYWluSWQ6IG51bWJlciB8IG51bGwsXG5cbiAgICAvLyBDb21tb25cbiAgICBleGlzdGVudGlhbERlcG9zaXQ6IHN0cmluZyxcbiAgICBkZWNpbWFsczogbnVtYmVyXG4gIH0sXG4gIHVuY29uZmlybWVkPzogYm9vbGVhbjtcbiAgcHJvdmlkZXJFcnJvcj86IF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SO1xufVxuXG5leHBvcnQgY29uc3QgX0NVU1RPTV9QUkVGSVggPSAnY3VzdG9tLSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5hYmxlQ2hhaW5QYXJhbXMge1xuICBjaGFpblNsdWc6IHN0cmluZyxcbiAgZW5hYmxlVG9rZW5zPzogYm9vbGVhblxufVxuZXhwb3J0IGludGVyZmFjZSBFbmFibGVNdWx0aUNoYWluUGFyYW1zIHtcbiAgY2hhaW5TbHVnczogc3RyaW5nW10sXG4gIGVuYWJsZVRva2Vucz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBfVmFsaWRhdGVDdXN0b21Bc3NldFJlcXVlc3Qge1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZyxcbiAgb3JpZ2luQ2hhaW46IHN0cmluZyxcbiAgdHlwZTogX0Fzc2V0VHlwZSxcbiAgY29udHJhY3RDYWxsZXI/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfU21hcnRDb250cmFjdFRva2VuSW5mbyB7XG4gIG5hbWU6IHN0cmluZyxcbiAgc3ltYm9sOiBzdHJpbmcsXG4gIGRlY2ltYWxzOiBudW1iZXIsXG4gIGNvbnRyYWN0RXJyb3I6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBfVmFsaWRhdGVDdXN0b21Bc3NldFJlc3BvbnNlIGV4dGVuZHMgX1NtYXJ0Q29udHJhY3RUb2tlbkluZm8ge1xuICBpc0V4aXN0OiBib29sZWFuLFxuICBleGlzdGVkU2x1Zz86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgX0ZVTkdJQkxFX0NPTlRSQUNUX1NUQU5EQVJEUyA9IFtcbiAgX0Fzc2V0VHlwZS5FUkMyMCxcbiAgX0Fzc2V0VHlwZS5QU1AyMlxuXTtcblxuZXhwb3J0IGNvbnN0IF9ORlRfQ09OVFJBQ1RfU1RBTkRBUkRTID0gW1xuICBfQXNzZXRUeXBlLlBTUDM0LFxuICBfQXNzZXRUeXBlLkVSQzcyMVxuXTtcblxuZXhwb3J0IGNvbnN0IF9TTUFSVF9DT05UUkFDVF9TVEFOREFSRFMgPSBbLi4uX0ZVTkdJQkxFX0NPTlRSQUNUX1NUQU5EQVJEUywgLi4uX05GVF9DT05UUkFDVF9TVEFOREFSRFNdO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQXNzZXRSZWYsIF9Bc3NldFJlZlBhdGgsIF9Bc3NldFR5cGUsIF9DaGFpbkFzc2V0LCBfQ2hhaW5JbmZvLCBfTXVsdGlDaGFpbkFzc2V0LCBfU3Vic3RyYXRlQ2hhaW5UeXBlIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IEJhc2ljVG9rZW5JbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBfTUFOVEFfWktfQ0hBSU5fR1JPVVAsIF9aS19BU1NFVF9QUkVGSVggfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvY29uc3RhbnRzJztcbmltcG9ydCB7IF9DaGFpblN0YXRlLCBfQ1VTVE9NX1BSRUZJWCwgX1NNQVJUX0NPTlRSQUNUX1NUQU5EQVJEUyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS90eXBlcyc7XG5cbmltcG9ydCB7IGlzRXRoZXJldW1BZGRyZXNzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0N1c3RvbUNoYWluIChzbHVnOiBzdHJpbmcpIHtcbiAgaWYgKHNsdWcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gc2x1Zy5zdGFydHNXaXRoKF9DVVNUT01fUFJFRklYKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0N1c3RvbUFzc2V0IChzbHVnOiBzdHJpbmcpIHsgLy8gbWlnaHQgYmUgZGlmZmVyZW50IGZyb20gX2lzQ3VzdG9tTmV0d29ya1xuICBpZiAoc2x1Zy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzbHVnLnN0YXJ0c1dpdGgoX0NVU1RPTV9QUkVGSVgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEN1c3RvbUFzc2V0cyAoYXNzZXRSZWdpc3RyeTogUmVjb3JkPHN0cmluZywgX0NoYWluQXNzZXQ+KTogUmVjb3JkPHN0cmluZywgX0NoYWluQXNzZXQ+IHtcbiAgY29uc3QgZmlsdGVyZWRBc3NldE1hcDogUmVjb3JkPHN0cmluZywgX0NoYWluQXNzZXQ+ID0ge307XG5cbiAgT2JqZWN0LnZhbHVlcyhhc3NldFJlZ2lzdHJ5KS5mb3JFYWNoKChjaGFpbkFzc2V0KSA9PiB7XG4gICAgaWYgKF9pc0N1c3RvbUFzc2V0KGNoYWluQXNzZXQuc2x1ZykpIHtcbiAgICAgIGZpbHRlcmVkQXNzZXRNYXBbY2hhaW5Bc3NldC5zbHVnXSA9IGNoYWluQXNzZXQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRBc3NldE1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0VxdWFsQ29udHJhY3RBZGRyZXNzIChhZGRyZXNzMTogc3RyaW5nLCBhZGRyZXNzMjogc3RyaW5nKSB7XG4gIGlmIChpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzMSkgJiYgaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzczIpKSB7XG4gICAgcmV0dXJuIGFkZHJlc3MxLnRvTG93ZXJDYXNlKCkgPT09IGFkZHJlc3MyLnRvTG93ZXJDYXNlKCk7IC8vIEVWTSBhZGRyZXNzIGlzIGNhc2UtaW5zZW5zaXRpdmVcbiAgfVxuXG4gIHJldHVybiBhZGRyZXNzMiA9PT0gYWRkcmVzczE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNFcXVhbFNtYXJ0Q29udHJhY3RBc3NldCAoYXNzZXQxOiBfQ2hhaW5Bc3NldCwgYXNzZXQyOiBfQ2hhaW5Bc3NldCkge1xuICBjb25zdCBjb250cmFjdDEgPSBhc3NldDEubWV0YWRhdGE/LmNvbnRyYWN0QWRkcmVzcyBhcyBzdHJpbmcgfHwgdW5kZWZpbmVkIHx8IG51bGw7XG4gIGNvbnN0IGNvbnRyYWN0MiA9IGFzc2V0Mi5tZXRhZGF0YT8uY29udHJhY3RBZGRyZXNzIGFzIHN0cmluZyB8fCB1bmRlZmluZWQgfHwgbnVsbDtcblxuICBpZiAoIWNvbnRyYWN0MSB8fCAhY29udHJhY3QyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKF9pc0VxdWFsQ29udHJhY3RBZGRyZXNzKGNvbnRyYWN0MSwgY29udHJhY3QyKSAmJiBhc3NldDEuYXNzZXRUeXBlID09PSBhc3NldDIuYXNzZXRUeXBlICYmIGFzc2V0MS5vcmlnaW5DaGFpbiA9PT0gYXNzZXQyLm9yaWdpbkNoYWluKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNQdXJlRXZtQ2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gKGNoYWluSW5mby5ldm1JbmZvICE9PSBudWxsICYmIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvID09PSBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1B1cmVTdWJzdHJhdGVDaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiAoY2hhaW5JbmZvLmV2bUluZm8gPT09IG51bGwgJiYgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8gIT09IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldE9yaWdpbkNoYWluT2ZBc3NldCAoYXNzZXRTbHVnOiBzdHJpbmcpIHtcbiAgaWYgKGFzc2V0U2x1Zy5zdGFydHNXaXRoKF9DVVNUT01fUFJFRklYKSkge1xuICAgIGNvbnN0IGFyciA9IGFzc2V0U2x1Zy5zcGxpdCgnLScpLnNsaWNlKDEpO1xuXG4gICAgaWYgKGFyclswXSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIGNvbnN0IGVuZCA9IGFyci5maW5kSW5kZXgoKHN0cikgPT4gT2JqZWN0LnZhbHVlcyhfQXNzZXRUeXBlKS5pbmNsdWRlcyhzdHIgYXMgX0Fzc2V0VHlwZSkpO1xuXG4gICAgICByZXR1cm4gYXJyLnNsaWNlKDAsIGVuZCkuam9pbignLScpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJbMF07XG4gIH1cblxuICByZXR1cm4gYXNzZXRTbHVnLnNwbGl0KCctJylbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0Q29udHJhY3RBZGRyZXNzT2ZUb2tlbiAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gdG9rZW5JbmZvLm1ldGFkYXRhPy5jb250cmFjdEFkZHJlc3MgYXMgc3RyaW5nIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzVG9rZW5UcmFuc2ZlcnJlZEJ5RXZtICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiAhIXRva2VuSW5mby5tZXRhZGF0YT8uY29udHJhY3RBZGRyZXNzIHx8IF9pc05hdGl2ZVRva2VuKHRva2VuSW5mbyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY2hlY2tTbWFydENvbnRyYWN0U3VwcG9ydEJ5Q2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbywgY29udHJhY3RUeXBlOiBfQXNzZXRUeXBlKSB7XG4gIC8vIEVWTSBjaGFpbnMgc3VwcG9ydCBzbWFydCBjb250cmFjdCBieSBkZWZhdWx0IHNvIGp1c3QgY2hlY2tpbmcgU3Vic3RyYXRlIGNoYWluc1xuICBpZiAoY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8gPT09IG51bGwgfHwgKGNoYWluSW5mby5zdWJzdHJhdGVJbmZvICYmIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0ID09PSBudWxsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QgIT09IG51bGwgJiYgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QuaW5jbHVkZXMoY29udHJhY3RUeXBlKSk7XG59XG5cbi8vIFV0aWxzIGZvciBiYWxhbmNlIGZ1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRUb2tlbk9uQ2hhaW5Bc3NldElkICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KTogc3RyaW5nIHtcbiAgcmV0dXJuIHRva2VuSW5mby5tZXRhZGF0YT8uYXNzZXRJZCBhcyBzdHJpbmcgfHwgJy0xJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRUb2tlbk9uQ2hhaW5JbmZvICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gIHJldHVybiB0b2tlbkluZm8ubWV0YWRhdGE/Lm9uQ2hhaW5JbmZvIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VG9rZW5NaW5BbW91bnQgKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIHRva2VuSW5mby5taW5BbW91bnQgfHwgJzAnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ2hhaW5Fdm1Db21wYXRpYmxlIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5ldm1JbmZvICE9PSB1bmRlZmluZWQgJiYgY2hhaW5JbmZvLmV2bUluZm8gIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNOYXRpdmVUb2tlbiAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gdG9rZW5JbmZvLmFzc2V0VHlwZSA9PT0gX0Fzc2V0VHlwZS5OQVRJVkU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNOYXRpdmVUb2tlbkJ5U2x1ZyAodG9rZW5TbHVnOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHRva2VuU2x1Zy5pbmNsdWRlcyhfQXNzZXRUeXBlLk5BVElWRSBhcyBzdHJpbmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzU21hcnRDb250cmFjdFRva2VuICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBfU01BUlRfQ09OVFJBQ1RfU1RBTkRBUkRTLmluY2x1ZGVzKHRva2VuSW5mby5hc3NldFR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzU3Vic3RyYXRlQ2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gISFjaGFpbkluZm8uc3Vic3RyYXRlSW5mbzsgLy8gZmFsbGJhY2sgdG8gRXRoZXJldW1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRFdm1DaGFpbklkIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5ldm1JbmZvPy5ldm1DaGFpbklkIHx8IDE7IC8vIGZhbGxiYWNrIHRvIEV0aGVyZXVtXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0U3Vic3RyYXRlUGFyYUlkIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5wYXJhSWQgfHwgLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0U3Vic3RyYXRlUmVsYXlQYXJlbnQgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LnJlbGF5U2x1ZyB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRTdWJzdHJhdGVHZW5lc2lzSGFzaCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8uZ2VuZXNpc0hhc2ggfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDaGFpblN1cHBvcnRTdWJzdHJhdGVTdGFraW5nIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5zdXBwb3J0U3Rha2luZyB8fCBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0NoYWluRW5hYmxlZCAoY2hhaW5TdGF0ZTogX0NoYWluU3RhdGUpIHtcbiAgcmV0dXJuIGNoYWluU3RhdGUuYWN0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldENoYWluU3Vic3RyYXRlQWRkcmVzc1ByZWZpeCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8/LnN1YnN0cmF0ZUluZm8/LmFkZHJlc3NQcmVmaXggPz8gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDaGFpblN1cHBvcnROYXRpdmVOZnQgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/Lmhhc05hdGl2ZU5mdCB8fCBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0NoYWluU3VwcG9ydEV2bU5mdCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uZXZtSW5mbz8uc3VwcG9ydFNtYXJ0Q29udHJhY3Q/LmluY2x1ZGVzKF9Bc3NldFR5cGUuRVJDNzIxKSB8fCBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0NoYWluU3VwcG9ydFdhc21OZnQgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LnN1cHBvcnRTbWFydENvbnRyYWN0Py5pbmNsdWRlcyhfQXNzZXRUeXBlLlBTUDM0KSB8fCBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXROZnRUeXBlc1N1cHBvcnRlZEJ5Q2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbyk6IF9Bc3NldFR5cGVbXSB7XG4gIGNvbnN0IHJlc3VsdDogX0Fzc2V0VHlwZVtdID0gW107XG5cbiAgaWYgKGNoYWluSW5mby5zdWJzdHJhdGVJbmZvICYmIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0KSB7XG4gICAgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QuZm9yRWFjaCgoYXNzZXRUeXBlKSA9PiB7XG4gICAgICBpZiAoW19Bc3NldFR5cGUuUFNQMzRdLmluY2x1ZGVzKGFzc2V0VHlwZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXNzZXRUeXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjaGFpbkluZm8uZXZtSW5mbyAmJiBjaGFpbkluZm8uZXZtSW5mby5zdXBwb3J0U21hcnRDb250cmFjdCkge1xuICAgIGNoYWluSW5mby5ldm1JbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0LmZvckVhY2goKGFzc2V0VHlwZSkgPT4ge1xuICAgICAgaWYgKFtfQXNzZXRUeXBlLkVSQzcyMV0uaW5jbHVkZXMoYXNzZXRUeXBlKSkge1xuICAgICAgICByZXN1bHQucHVzaChhc3NldFR5cGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRUb2tlblR5cGVzU3VwcG9ydGVkQnlDaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKTogX0Fzc2V0VHlwZVtdIHtcbiAgY29uc3QgcmVzdWx0OiBfQXNzZXRUeXBlW10gPSBbXTtcblxuICBpZiAoY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8gJiYgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QpIHtcbiAgICBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5zdXBwb3J0U21hcnRDb250cmFjdC5mb3JFYWNoKChhc3NldFR5cGUpID0+IHtcbiAgICAgIGlmIChbX0Fzc2V0VHlwZS5QU1AyMl0uaW5jbHVkZXMoYXNzZXRUeXBlKSkge1xuICAgICAgICByZXN1bHQucHVzaChhc3NldFR5cGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNoYWluSW5mby5ldm1JbmZvICYmIGNoYWluSW5mby5ldm1JbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0KSB7XG4gICAgY2hhaW5JbmZvLmV2bUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QuZm9yRWFjaCgoYXNzZXRUeXBlKSA9PiB7XG4gICAgICBpZiAoW19Bc3NldFR5cGUuRVJDMjBdLmluY2x1ZGVzKGFzc2V0VHlwZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXNzZXRUeXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKTogQmFzaWNUb2tlbkluZm8ge1xuICBpZiAoIWNoYWluSW5mbykge1xuICAgIHJldHVybiB7XG4gICAgICBzeW1ib2w6ICcnLFxuICAgICAgZGVjaW1hbHM6IC0xXG4gICAgfTtcbiAgfVxuXG4gIGlmIChjaGFpbkluZm8uc3Vic3RyYXRlSW5mbyAhPT0gbnVsbCkgeyAvLyBzdWJzdHJhdGUgYnkgZGVmYXVsdFxuICAgIHJldHVybiB7XG4gICAgICBzeW1ib2w6IGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnN5bWJvbCxcbiAgICAgIGRlY2ltYWxzOiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5kZWNpbWFsc1xuICAgIH07XG4gIH0gZWxzZSBpZiAoY2hhaW5JbmZvLmV2bUluZm8gIT09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3ltYm9sOiBjaGFpbkluZm8uZXZtSW5mby5zeW1ib2wsXG4gICAgICBkZWNpbWFsczogY2hhaW5JbmZvLmV2bUluZm8uZGVjaW1hbHNcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzeW1ib2w6ICcnLFxuICAgIGRlY2ltYWxzOiAtMVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldENoYWluTmF0aXZlVG9rZW5TbHVnIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgaWYgKF9pc0N1c3RvbUNoYWluKGNoYWluSW5mby5zbHVnKSkge1xuICAgIHJldHVybiBgJHtfQ1VTVE9NX1BSRUZJWH0ke2NoYWluSW5mby5zbHVnfS0ke19Bc3NldFR5cGUuTkFUSVZFfS0ke19nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvKGNoYWluSW5mbykuc3ltYm9sfWA7XG4gIH1cblxuICByZXR1cm4gYCR7Y2hhaW5JbmZvLnNsdWd9LSR7X0Fzc2V0VHlwZS5OQVRJVkV9LSR7X2dldENoYWluTmF0aXZlVG9rZW5CYXNpY0luZm8oY2hhaW5JbmZvKS5zeW1ib2x9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0xvY2FsVG9rZW4gKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIHRva2VuSW5mby5hc3NldFR5cGUgPT09IF9Bc3NldFR5cGUuTE9DQUw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNUb2tlbkV2bVNtYXJ0Q29udHJhY3QgKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIFtfQXNzZXRUeXBlLkVSQzcyMSwgX0Fzc2V0VHlwZS5FUkMyMF0uaW5jbHVkZXModG9rZW5JbmZvLmFzc2V0VHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNUb2tlbldhc21TbWFydENvbnRyYWN0ICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBbX0Fzc2V0VHlwZS5QU1AyMiwgX0Fzc2V0VHlwZS5QU1AzNF0uaW5jbHVkZXModG9rZW5JbmZvLmFzc2V0VHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNBc3NldFNtYXJ0Q29udHJhY3ROZnQgKGFzc2V0SW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIFtfQXNzZXRUeXBlLlBTUDM0LCBfQXNzZXRUeXBlLkVSQzcyMV0uaW5jbHVkZXMoYXNzZXRJbmZvLmFzc2V0VHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcGFyc2VBc3NldFJlZktleSAob3JpZ2luVG9rZW5TbHVnOiBzdHJpbmcsIGRlc3RpbmF0aW9uVG9rZW5TbHVnOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGAke29yaWdpblRva2VuU2x1Z31fX18ke2Rlc3RpbmF0aW9uVG9rZW5TbHVnfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNYY21QYXRoU3VwcG9ydGVkIChvcmlnaW5Ub2tlblNsdWc6IHN0cmluZywgZGVzdGluYXRpb25Ub2tlblNsdWc6IHN0cmluZywgYXNzZXRSZWZNYXA6IFJlY29yZDxzdHJpbmcsIF9Bc3NldFJlZj4pIHtcbiAgY29uc3QgYXNzZXRSZWYgPSBhc3NldFJlZk1hcFtfcGFyc2VBc3NldFJlZktleShvcmlnaW5Ub2tlblNsdWcsIGRlc3RpbmF0aW9uVG9rZW5TbHVnKV07XG5cbiAgaWYgKCFhc3NldFJlZikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoYXNzZXRSZWYucGF0aCA9PT0gX0Fzc2V0UmVmUGF0aC5YQ00pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFhjbUFzc2V0VHlwZSAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gdG9rZW5JbmZvLm1ldGFkYXRhPy5hc3NldFR5cGUgYXMgc3RyaW5nIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFhjbUFzc2V0SWQgKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIHRva2VuSW5mby5tZXRhZGF0YT8uYXNzZXRJZCBhcyBzdHJpbmcgfHwgJy0xJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRYY21Bc3NldE11bHRpbG9jYXRpb24gKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIHRva2VuSW5mby5tZXRhZGF0YT8ubXVsdGlsb2NhdGlvbiBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFhjbVRyYW5zZmVyVHlwZSAob3JpZ2luQ2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCBkZXN0aW5hdGlvbkNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gYCR7b3JpZ2luQ2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LmNoYWluVHlwZSB8fCAnJ30tJHtkZXN0aW5hdGlvbkNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5jaGFpblR5cGUgfHwgJyd9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1N1YnN0cmF0ZVJlbGF5Q2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LmNoYWluVHlwZSA9PT0gX1N1YnN0cmF0ZUNoYWluVHlwZS5SRUxBWUNIQUlOO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzU3Vic3RyYXRlUGFyYUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvICE9PSBudWxsICYmIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnBhcmFJZCAhPT0gbnVsbCAmJiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8uY2hhaW5UeXBlID09PSBfU3Vic3RyYXRlQ2hhaW5UeXBlLlBBUkFDSEFJTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRFdm1BYmlFeHBsb3JlciAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uZXZtSW5mbz8uYWJpRXhwbG9yZXIgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNBc3NldFZhbHVhYmxlIChhc3NldEluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBhc3NldEluZm8uaGFzVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0TXVsdGlDaGFpbkFzc2V0IChhc3NldEluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBhc3NldEluZm8/Lm11bHRpQ2hhaW5Bc3NldCB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBc3NldFByaWNlSWQgKGFzc2V0SW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIGFzc2V0SW5mbz8ucHJpY2VJZCB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRNdWx0aUNoYWluQXNzZXRQcmljZUlkIChtdWx0aUNoYWluQXNzZXQ6IF9NdWx0aUNoYWluQXNzZXQpIHtcbiAgcmV0dXJuIG11bHRpQ2hhaW5Bc3NldD8ucHJpY2VJZCB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBc3NldFN5bWJvbCAoYXNzZXRJbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gYXNzZXRJbmZvPy5zeW1ib2wgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0TXVsdGlDaGFpbkFzc2V0U3ltYm9sIChtdWx0aUNoYWluQXNzZXQ6IF9NdWx0aUNoYWluQXNzZXQpIHtcbiAgcmV0dXJuIG11bHRpQ2hhaW5Bc3NldC5zeW1ib2w7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QXNzZXRPcmlnaW5DaGFpbiAoYXNzZXRJbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gYXNzZXRJbmZvLm9yaWdpbkNoYWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldENoYWluTmFtZSAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8ubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBc3NldERlY2ltYWxzIChhc3NldEluZm86IF9DaGFpbkFzc2V0KTogbnVtYmVyIHtcbiAgcmV0dXJuIGFzc2V0SW5mby5kZWNpbWFscyB8fCAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEJsb2NrRXhwbG9yZXJGcm9tQ2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBibG9ja0V4cGxvcmVyO1xuXG4gIGlmICghY2hhaW5JbmZvKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKF9pc1B1cmVFdm1DaGFpbihjaGFpbkluZm8pKSB7XG4gICAgYmxvY2tFeHBsb3JlciA9IGNoYWluSW5mbz8uZXZtSW5mbz8uYmxvY2tFeHBsb3JlcjtcbiAgfSBlbHNlIHtcbiAgICBibG9ja0V4cGxvcmVyID0gY2hhaW5JbmZvPy5zdWJzdHJhdGVJbmZvPy5ibG9ja0V4cGxvcmVyO1xuICB9XG5cbiAgaWYgKCFibG9ja0V4cGxvcmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChibG9ja0V4cGxvcmVyICE9PSAnJyAmJiAhYmxvY2tFeHBsb3Jlci5lbmRzV2l0aCgnLycpKSB7XG4gICAgcmV0dXJuIGAke2Jsb2NrRXhwbG9yZXJ9L2A7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJsb2NrRXhwbG9yZXI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wYXJzZU1ldGFkYXRhRm9yU21hcnRDb250cmFjdEFzc2V0IChjb250cmFjdEFkZHJlc3M6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRyYWN0QWRkcmVzc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ2hhaW5UZXN0TmV0IChjaGFpbkluZm86IF9DaGFpbkluZm8pOiBib29sZWFuIHtcbiAgcmV0dXJuIGNoYWluSW5mby5pc1Rlc3RuZXQgfHwgZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNBc3NldEZ1bmdpYmxlVG9rZW4gKGNoYWluQXNzZXQ6IF9DaGFpbkFzc2V0KTogYm9vbGVhbiB7XG4gIHJldHVybiAhW19Bc3NldFR5cGUuRVJDNzIxLCBfQXNzZXRUeXBlLlBTUDM0LCBfQXNzZXRUeXBlLlVOS05PV05dLmluY2x1ZGVzKGNoYWluQXNzZXQuYXNzZXRUeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRDcm93ZGxvYW5VcmxGcm9tQ2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbyk6IHN0cmluZyB7XG4gIHJldHVybiBjaGFpbkluZm8/LnN1YnN0cmF0ZUluZm8/LmNyb3dkbG9hblVybCB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0N1c3RvbVByb3ZpZGVyIChwcm92aWRlcktleTogc3RyaW5nKSB7XG4gIHJldHVybiBwcm92aWRlcktleS5zdGFydHNXaXRoKF9DVVNUT01fUFJFRklYKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZW5lcmF0ZUN1c3RvbVByb3ZpZGVyS2V5IChpbmRleDogbnVtYmVyKSB7XG4gIHJldHVybiBgJHtfQ1VTVE9NX1BSRUZJWH1wcm92aWRlci0ke2luZGV4fWA7XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kQ2hhaW5JbmZvQnlIYWxmR2VuZXNpc0hhc2ggPSAoY2hhaW5NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+LCBoYWxmR2VuZXNpc0hhc2g/OiBzdHJpbmcpOiBfQ2hhaW5JbmZvIHwgbnVsbCA9PiB7XG4gIGlmICghaGFsZkdlbmVzaXNIYXNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3IgKGNvbnN0IGNoYWluSW5mbyBvZiBPYmplY3QudmFsdWVzKGNoYWluTWFwKSkge1xuICAgIGlmIChfZ2V0U3Vic3RyYXRlR2VuZXNpc0hhc2goY2hhaW5JbmZvKT8udG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMiwgMiArIDMyKSA9PT0gaGFsZkdlbmVzaXNIYXNoLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBjaGFpbkluZm87XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZENoYWluSW5mb0J5Q2hhaW5JZCA9IChjaGFpbk1hcDogUmVjb3JkPHN0cmluZywgX0NoYWluSW5mbz4sIGNoYWluSWQ/OiBudW1iZXIpOiBfQ2hhaW5JbmZvIHwgbnVsbCA9PiB7XG4gIGlmICghY2hhaW5JZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yIChjb25zdCBjaGFpbkluZm8gb2YgT2JqZWN0LnZhbHVlcyhjaGFpbk1hcCkpIHtcbiAgICBpZiAoY2hhaW5JbmZvLmV2bUluZm8/LmV2bUNoYWluSWQgPT09IGNoYWluSWQpIHtcbiAgICAgIHJldHVybiBjaGFpbkluZm87XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX2lzTWFudGFaa0Fzc2V0IChjaGFpbkFzc2V0OiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gX01BTlRBX1pLX0NIQUlOX0dST1VQLmluY2x1ZGVzKGNoYWluQXNzZXQub3JpZ2luQ2hhaW4pICYmIGNoYWluQXNzZXQuc3ltYm9sLnN0YXJ0c1dpdGgoX1pLX0FTU0VUX1BSRUZJWCk7XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgQnJvd3NlckNvbmZpcm1hdGlvblR5cGUsIExhbmd1YWdlVHlwZSwgVGhlbWVOYW1lcywgVWlTZXR0aW5ncywgV2FsbGV0VW5sb2NrVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgVEFSR0VUX0VOViB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USEVNRTogVGhlbWVOYW1lcyA9IFRoZW1lTmFtZXMuREFSSztcbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFOiBCcm93c2VyQ29uZmlybWF0aW9uVHlwZSA9ICdwb3B1cCc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9BVVRPX0xPQ0tfVElNRSA9IDE1O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVU5MT0NLX1RZUEU6IFdhbGxldFVubG9ja1R5cGUgPSBUQVJHRVRfRU5WID09PSAnZXh0ZW5zaW9uJyA/IFdhbGxldFVubG9ja1R5cGUuQUxXQVlTX1JFUVVJUkVEIDogV2FsbGV0VW5sb2NrVHlwZS5XSEVOX05FRURFRDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NIQUlOX1BBVFJPTF9FTkFCTEUgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBTkdVQUdFOiBMYW5ndWFnZVR5cGUgPSAnZW4nO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0hPV19aRVJPX0JBTEFOQ0UgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0hPV19CQUxBTkNFID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVGQVVMVF9BTExfTE9HTyA9ICcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FNRVJBX0VOQUJMRSA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRVRUSU5HOiBVaVNldHRpbmdzID0ge1xuICBsYW5ndWFnZTogREVGQVVMVF9MQU5HVUFHRSxcbiAgYnJvd3NlckNvbmZpcm1hdGlvblR5cGU6IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEUsXG4gIGlzU2hvd1plcm9CYWxhbmNlOiBERUZBVUxUX1NIT1dfWkVST19CQUxBTkNFLFxuICBpc1Nob3dCYWxhbmNlOiBERUZBVUxUX1NIT1dfQkFMQU5DRSxcbiAgYWNjb3VudEFsbExvZ286IERFRkFVTFRfQUxMX0xPR08sXG4gIHRoZW1lOiBERUZBVUxUX1RIRU1FLFxuICB1bmxvY2tUeXBlOiBERUZBVUxUX1VOTE9DS19UWVBFLFxuICBjYW1lcmE6IERFRkFVTFRfQ0FNRVJBX0VOQUJMRSxcbiAgdGltZUF1dG9Mb2NrOiBERUZBVUxUX0FVVE9fTE9DS19USU1FLFxuICBlbmFibGVDaGFpblBhdHJvbDogREVGQVVMVF9DSEFJTl9QQVRST0xfRU5BQkxFLFxuICB3YWxsZXRSZWZlcmVuY2U6ICcnXG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEVJUDE1NV9TSUdOSU5HX01FVEhPRFMsIFBPTEtBRE9UX1NJR05JTkdfTUVUSE9EUywgV2FsbGV0Q29ubmVjdFNpZ25pbmdNZXRob2QgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3dhbGxldC1jb25uZWN0LXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IFNpZ25DbGllbnRUeXBlcyB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RfSURfRVhURU5TSU9OID0gJzZkYTM0YzBiNDgxNjRkMjc2ODE5MjRkZDlhNDZkNmJlJztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX0lEX01PQklMRSA9ICc2ZGEzNGMwYjQ4MTY0ZDI3NjgxOTI0ZGQ5YTQ2ZDZiZSc7XG5leHBvcnQgY29uc3QgUkVMQVlfVVJMID0gJ3dzczovL3JlbGF5LndhbGxldGNvbm5lY3QuY29tJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0FMTEVUX0NPTk5FQ1RfT1BUSU9OUzogU2lnbkNsaWVudFR5cGVzLk9wdGlvbnMgPSB7XG4gIGxvZ2dlcjogJ2RlYnVnJyxcbiAgcHJvamVjdElkOiAhaXNNb2JpbGUgPyBQUk9KRUNUX0lEX0VYVEVOU0lPTiA6IFBST0pFQ1RfSURfTU9CSUxFLFxuICByZWxheVVybDogUkVMQVlfVVJMLFxuICBtZXRhZGF0YToge1xuICAgIG5hbWU6ICdTdWJXYWxsZXQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVhY3QgV2FsbGV0IGZvciBXYWxsZXRDb25uZWN0JyxcbiAgICB1cmw6ICdodHRwczovL3d3dy5zdWJ3YWxsZXQuYXBwLycsXG4gICAgaWNvbnM6IFsnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtRXh0ZW5zaW9uL21hc3Rlci9wYWNrYWdlcy9leHRlbnNpb24ta29uaS9wdWJsaWMvaW1hZ2VzL2ljb24tMTI4LnBuZyddXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBTExfV0FMTEVUX0NPTk5FQ1RfRVZFTlQ6IFNpZ25DbGllbnRUeXBlcy5FdmVudFtdID0gWydzZXNzaW9uX3Byb3Bvc2FsJywgJ3Nlc3Npb25fdXBkYXRlJywgJ3Nlc3Npb25fZXh0ZW5kJywgJ3Nlc3Npb25fcGluZycsICdzZXNzaW9uX2RlbGV0ZScsICdzZXNzaW9uX2V4cGlyZScsICdzZXNzaW9uX3JlcXVlc3QnLCAnc2Vzc2lvbl9yZXF1ZXN0X3NlbnQnLCAnc2Vzc2lvbl9ldmVudCcsICdwcm9wb3NhbF9leHBpcmUnXTtcblxuZXhwb3J0IGNvbnN0IFdBTExFVF9DT05ORUNUX1NVUFBPUlRFRF9NRVRIT0RTOiBXYWxsZXRDb25uZWN0U2lnbmluZ01ldGhvZFtdID0gW1xuICBQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMuUE9MS0FET1RfU0lHTl9NRVNTQUdFLFxuICBQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMuUE9MS0FET1RfU0lHTl9UUkFOU0FDVElPTixcbiAgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0VORF9UUkFOU0FDVElPTixcbiAgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5QRVJTT05BTF9TSUdOLFxuICBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjEsXG4gIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV9WMyxcbiAgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0lHTl9UWVBFRF9EQVRBX1Y0XG5dO1xuXG5leHBvcnQgY29uc3QgV0FMTEVUX0NPTk5FQ1RfUkVRVUVTVF9LRVkgPSAnd2FsbGV0LWNvbm5lY3QnO1xuXG5leHBvcnQgY29uc3QgV0FMTEVUX0NPTk5FQ1RfRUlQMTU1X05BTUVTUEFDRSA9ICdlaXAxNTUnO1xuZXhwb3J0IGNvbnN0IFdBTExFVF9DT05ORUNUX1BPTEtBRE9UX05BTUVTUEFDRSA9ICdwb2xrYWRvdCc7XG5cbmV4cG9ydCBjb25zdCBXQUxMRVRfQ09OTkVDVF9TVVBQT1JUX05BTUVTUEFDRVM6IHN0cmluZ1tdID0gW1dBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UsIFdBTExFVF9DT05ORUNUX1BPTEtBRE9UX05BTUVTUEFDRV07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0NoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBmaW5kQ2hhaW5JbmZvQnlDaGFpbklkLCBmaW5kQ2hhaW5JbmZvQnlIYWxmR2VuZXNpc0hhc2ggfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgU2lnbkNsaWVudFR5cGVzIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvdHlwZXMnO1xuaW1wb3J0IHsgUHJvcG9zYWxUeXBlcyB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L3R5cGVzL2Rpc3QvdHlwZXMvc2lnbi1jbGllbnQvcHJvcG9zYWwnO1xuXG5pbXBvcnQgeyBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmltcG9ydCB7IFdBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UsIFdBTExFVF9DT05ORUNUX1BPTEtBRE9UX05BTUVTUEFDRSwgV0FMTEVUX0NPTk5FQ1RfUkVRVUVTVF9LRVksIFdBTExFVF9DT05ORUNUX1NVUFBPUlRfTkFNRVNQQUNFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEVJUDE1NV9TSUdOSU5HX01FVEhPRFMsIFdhbGxldENvbm5lY3ROb3RTdXBwb3J0UmVxdWVzdCwgV2FsbGV0Q29ubmVjdFBhcmFtTWFwLCBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3QsIFdhbGxldENvbm5lY3RTaWduaW5nTWV0aG9kIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRXQ0lkID0gKGlkOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gW1dBTExFVF9DT05ORUNUX1JFUVVFU1RfS0VZLCBEYXRlLm5vdygpLCBpZF0uam9pbignLicpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRDb25uZWN0UmVxdWVzdCA9IChyZXF1ZXN0OiBTaWduQ2xpZW50VHlwZXMuRXZlbnRBcmd1bWVudHNbJ3Nlc3Npb25fcHJvcG9zYWwnXSk6IFdhbGxldENvbm5lY3RTZXNzaW9uUmVxdWVzdCA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGdldFdDSWQocmVxdWVzdC5pZCksXG4gICAgaXNJbnRlcm5hbDogZmFsc2UsXG4gICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICB1cmw6IHJlcXVlc3QucGFyYW1zLnByb3Bvc2VyLm1ldGFkYXRhLnVybFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnROb3RTdXBwb3J0UmVxdWVzdCA9IChyZXF1ZXN0OiBTaWduQ2xpZW50VHlwZXMuRXZlbnRBcmd1bWVudHNbJ3Nlc3Npb25fcmVxdWVzdCddLCB1cmw6IHN0cmluZyk6IFdhbGxldENvbm5lY3ROb3RTdXBwb3J0UmVxdWVzdCA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGdldFdDSWQocmVxdWVzdC5pZCksXG4gICAgaXNJbnRlcm5hbDogZmFsc2UsXG4gICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICB1cmw6IHVybFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlUmVxdWVzdFBhcmFtcyA9IDxUIGV4dGVuZHMgV2FsbGV0Q29ubmVjdFNpZ25pbmdNZXRob2Q+IChwYXJhbXM6IHVua25vd24pID0+IHtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcGFyYW1zIGFzIFdhbGxldENvbm5lY3RQYXJhbU1hcFtUXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFaXAxNTVNZXNzYWdlQWRkcmVzcyA9IChtZXRob2Q6IEVJUDE1NV9TSUdOSU5HX01FVEhPRFMsIHBhcmFtOiB1bmtub3duKTogc3RyaW5nID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuUEVSU09OQUxfU0lHTjpcbiAgICBjYXNlIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQTpcbiAgICBjYXNlIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR046XG4gICAgY2FzZSBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjM6XG4gICAgY2FzZSBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjQ6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcbiAgICAgIGNvbnN0IFtwMSwgcDJdID0gcGFyc2VSZXF1ZXN0UGFyYW1zPEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuUEVSU09OQUxfU0lHTj4ocGFyYW0pO1xuXG4gICAgICBpZiAodHlwZW9mIHAxID09PSAnc3RyaW5nJyAmJiBpc0V0aGVyZXVtQWRkcmVzcyhwMSkpIHtcbiAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcDIgPT09ICdzdHJpbmcnICYmIGlzRXRoZXJldW1BZGRyZXNzKHAyKSkge1xuICAgICAgICByZXR1cm4gcDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNXYWxsZXRDb25uZWN0UmVxdWVzdCA9IChpZD86IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgW3ByZWZpeF0gPSBpZC5zcGxpdCgnLicpO1xuXG4gIHJldHVybiBwcmVmaXggPT09IFdBTExFVF9DT05ORUNUX1JFUVVFU1RfS0VZO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJvcG9zYWxFeHBpcmVkID0gKHBhcmFtczogUHJvcG9zYWxUeXBlcy5TdHJ1Y3QpOiBib29sZWFuID0+IHtcbiAgY29uc3QgdGltZU51bSA9IHBhcmFtcy5leHBpcnk7XG4gIGNvbnN0IGV4cGlyZVRpbWUgPSBuZXcgRGF0ZSh0aW1lTnVtID4gMTAgKiogMTIgPyB0aW1lTnVtIDogdGltZU51bSAqIDEwMDApO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIHJldHVybiBub3cuZ2V0VGltZSgpID49IGV4cGlyZVRpbWUuZ2V0VGltZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFdhbGxldENvbm5lY3ROYW1lc3BhY2UgPSAobmFtZXNwYWNlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIFdBTExFVF9DT05ORUNUX1NVUFBPUlRfTkFNRVNQQUNFUy5pbmNsdWRlcyhuYW1lc3BhY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFdhbGxldENvbm5lY3RDaGFpbiA9IChjaGFpbjogc3RyaW5nLCBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IFtuYW1lc3BhY2UsIGluZm9dID0gY2hhaW4uc3BsaXQoJzonKTtcblxuICBpZiAobmFtZXNwYWNlID09PSBXQUxMRVRfQ09OTkVDVF9QT0xLQURPVF9OQU1FU1BBQ0UpIHtcbiAgICByZXR1cm4gISFmaW5kQ2hhaW5JbmZvQnlIYWxmR2VuZXNpc0hhc2goY2hhaW5JbmZvTWFwLCBpbmZvKTtcbiAgfSBlbHNlIGlmIChuYW1lc3BhY2UgPT09IFdBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UpIHtcbiAgICByZXR1cm4gISFmaW5kQ2hhaW5JbmZvQnlDaGFpbklkKGNoYWluSW5mb01hcCwgcGFyc2VJbnQoaW5mbykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFdm1TZW5kVHJhbnNhY3Rpb25QYXJhbXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblJlcXVlc3RCYXNlLCBSZXNvbHZlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBFbmdpbmVUeXBlcywgU2lnbkNsaWVudFR5cGVzIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvdHlwZXMnO1xuXG5pbXBvcnQgeyBTaWduZXJQYXlsb2FkSlNPTiB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0Q29ubmVjdFNlc3Npb25SZXF1ZXN0IGV4dGVuZHMgQ29uZmlybWF0aW9uUmVxdWVzdEJhc2Uge1xuICByZXF1ZXN0OiBTaWduQ2xpZW50VHlwZXMuRXZlbnRBcmd1bWVudHNbJ3Nlc3Npb25fcHJvcG9zYWwnXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWxsZXRDb25uZWN0Tm90U3VwcG9ydFJlcXVlc3QgZXh0ZW5kcyBDb25maXJtYXRpb25SZXF1ZXN0QmFzZSB7XG4gIHJlcXVlc3Q6IFNpZ25DbGllbnRUeXBlcy5FdmVudEFyZ3VtZW50c1snc2Vzc2lvbl9yZXF1ZXN0J107XG59XG5cbmV4cG9ydCB0eXBlIFJlc3VsdEFwcHJvdmVXYWxsZXRDb25uZWN0U2Vzc2lvbiA9IEVuZ2luZVR5cGVzLkFwcHJvdmVQYXJhbXM7XG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RXYWxsZXRDb25uZWN0U2Vzc2lvbiBleHRlbmRzIFdhbGxldENvbm5lY3RTZXNzaW9uUmVxdWVzdCwgUmVzb2x2ZXI8dm9pZD4ge31cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFdhbGxldENvbm5lY3ROb3RTdXBwb3J0IGV4dGVuZHMgV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnRSZXF1ZXN0LCBSZXNvbHZlcjx2b2lkPiB7fVxuXG5leHBvcnQgZW51bSBFSVAxNTVfU0lHTklOR19NRVRIT0RTIHtcbiAgUEVSU09OQUxfU0lHTiA9ICdwZXJzb25hbF9zaWduJyxcbiAgRVRIX1NJR04gPSAnZXRoX3NpZ24nLFxuICBFVEhfU0lHTl9UUkFOU0FDVElPTiA9ICdldGhfc2lnblRyYW5zYWN0aW9uJyxcbiAgRVRIX1NJR05fVFlQRURfREFUQSA9ICdldGhfc2lnblR5cGVkRGF0YScsXG4gIEVUSF9TSUdOX1RZUEVEX0RBVEFfVjEgPSAnZXRoX3NpZ25UeXBlZERhdGFfdjEnLFxuICBFVEhfU0lHTl9UWVBFRF9EQVRBX1YzID0gJ2V0aF9zaWduVHlwZWREYXRhX3YzJyxcbiAgRVRIX1NJR05fVFlQRURfREFUQV9WNCA9ICdldGhfc2lnblR5cGVkRGF0YV92NCcsXG4gIEVUSF9TRU5EX1JBV19UUkFOU0FDVElPTiA9ICdldGhfc2VuZFJhd1RyYW5zYWN0aW9uJyxcbiAgRVRIX1NFTkRfVFJBTlNBQ1RJT04gPSAnZXRoX3NlbmRUcmFuc2FjdGlvbidcbn1cblxuZXhwb3J0IGVudW0gUE9MS0FET1RfU0lHTklOR19NRVRIT0RTIHtcbiAgUE9MS0FET1RfU0lHTl9UUkFOU0FDVElPTiA9ICdwb2xrYWRvdF9zaWduVHJhbnNhY3Rpb24nLFxuICBQT0xLQURPVF9TSUdOX01FU1NBR0UgPSAncG9sa2Fkb3Rfc2lnbk1lc3NhZ2UnXG59XG5cbmV4cG9ydCB0eXBlIFdhbGxldENvbm5lY3RTaWduaW5nTWV0aG9kID0gRUlQMTU1X1NJR05JTkdfTUVUSE9EUyB8IFBPTEtBRE9UX1NJR05JTkdfTUVUSE9EUztcblxuZXhwb3J0IGludGVyZmFjZSBXYWxsZXRDb25uZWN0UG9sa2Fkb3RTaWduTWVzc2FnZVBhcmFtcyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhbGxldENvbm5lY3RQb2xrYWRvdFNpZ25UcmFuc2FjdGlvblBhcmFtcyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgdHJhbnNhY3Rpb25QYXlsb2FkOiBTaWduZXJQYXlsb2FkSlNPTjtcbn1cblxuZXhwb3J0IHR5cGUgV2FsbGV0Q29ubmVjdEVpcDE1NVNpZ25NZXNzYWdlID0gW3N0cmluZywgc3RyaW5nXSAvLyBwYXlsb2FkIGFuZCBhZGRyZXNzXG5leHBvcnQgdHlwZSBXYWxsZXRDb25uZWN0RWlwMTU1U2VuZFRyYW5zYWN0aW9uID0gW0V2bVNlbmRUcmFuc2FjdGlvblBhcmFtc107XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0Q29ubmVjdFBhcmFtTWFwIHtcbiAgW1BPTEtBRE9UX1NJR05JTkdfTUVUSE9EUy5QT0xLQURPVF9TSUdOX01FU1NBR0VdOiBXYWxsZXRDb25uZWN0UG9sa2Fkb3RTaWduTWVzc2FnZVBhcmFtcztcbiAgW1BPTEtBRE9UX1NJR05JTkdfTUVUSE9EUy5QT0xLQURPVF9TSUdOX1RSQU5TQUNUSU9OXTogV2FsbGV0Q29ubmVjdFBvbGthZG90U2lnblRyYW5zYWN0aW9uUGFyYW1zO1xuICBbRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5QRVJTT05BTF9TSUdOXTogV2FsbGV0Q29ubmVjdEVpcDE1NVNpZ25NZXNzYWdlO1xuICBbRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0lHTl06IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV06IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV9WM106IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV9WNF06IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NFTkRfVFJBTlNBQ1RJT05dOiBXYWxsZXRDb25uZWN0RWlwMTU1U2VuZFRyYW5zYWN0aW9uO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCBjb25zdCB1bmlxdWVTdHJpbmdBcnJheSA9IChhcnJheTogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goKHYpID0+IHtcbiAgICBtYXBbdl0gPSB2O1xuICB9KTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHR5cGUgeyBLZXlwYWlyVHlwZSB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0by90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5EZXJpdmUgKHR5cGU/OiBLZXlwYWlyVHlwZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gISF0eXBlICYmIFsnZWQyNTUxOScsICdzcjI1NTE5JywgJ2VjZHNhJywgJ2V0aGVyZXVtJ10uaW5jbHVkZXModHlwZSk7XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgRW52aXJvbm1lbnRTdXBwb3J0LCBPU1R5cGUsIFJ1bnRpbWVFbnZpcm9ubWVudCwgUnVudGltZUVudmlyb25tZW50SW5mbywgVGFyZ2V0RW52aXJvbm1lbnQgfSBmcm9tICcuLi9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5cbmZ1bmN0aW9uIGRldGVjdFJ1bnRpbWVFbnZpcm9ubWVudCAoKTogUnVudGltZUVudmlyb25tZW50SW5mbyB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gV2ViIGVudmlyb25tZW50XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQuV2ViLFxuICAgICAgdmVyc2lvbjogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgcHJvdG9jb2w6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFNlcnZpY2UgV29ya2VyIGVudmlyb25tZW50XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQuU2VydmljZVdvcmtlcixcbiAgICAgIHZlcnNpb246IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICBob3N0OiBzZWxmLmxvY2F0aW9uLmhvc3QsXG4gICAgICBwcm90b2NvbDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGUpIHtcbiAgICAvLyBOb2RlLmpzIGVudmlyb25tZW50XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQuTm9kZSxcbiAgICAgIHZlcnNpb246IHByb2Nlc3MudmVyc2lvbnMubm9kZVxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNocm9tZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNocm9tZS5ydW50aW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEV4dGVuc2lvbiBlbnZpcm9ubWVudCAoQ2hyb21lKVxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50LkV4dGVuc2lvbkNocm9tZSxcbiAgICAgIHZlcnNpb246IGNocm9tZS5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcbiAgICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgcHJvdG9jb2w6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIGJyb3dzZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBicm93c2VyLnJ1bnRpbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRXh0ZW5zaW9uIGVudmlyb25tZW50IChGaXJlZm94KVxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50LkV4dGVuc2lvbkZpcmVmb3gsXG4gICAgICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxuICAgICAgaG9zdDogd2luZG93LmxvY2F0aW9uLmhvc3QsXG4gICAgICBwcm90b2NvbDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sXG4gICAgfTtcbiAgICAvLyBAdHMtaWdub3JlXG4gIH0gZWxzZSBpZiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFdlYiBXb3JrZXIgZW52aXJvbm1lbnRcbiAgICByZXR1cm4ge1xuICAgICAgZW52aXJvbm1lbnQ6IFJ1bnRpbWVFbnZpcm9ubWVudC5XZWJXb3JrZXIsXG4gICAgICB2ZXJzaW9uOiAnJ1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gVW5rbm93biBlbnZpcm9ubWVudFxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50LlVua25vd24sXG4gICAgICB2ZXJzaW9uOiAnJ1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJ1bnRpbWVJbmZvOiBSdW50aW1lRW52aXJvbm1lbnRJbmZvID0gZGV0ZWN0UnVudGltZUVudmlyb25tZW50KCk7XG5cbmV4cG9ydCBjb25zdCBnZXRPUyA9ICgpOiBPU1R5cGUgPT4ge1xuICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgLy8gQHRzLWlnbm9yZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzLEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICBjb25zdCBwbGF0Zm9ybTogc3RyaW5nID0gd2luZG93Lm5hdmlnYXRvcj8udXNlckFnZW50RGF0YT8ucGxhdGZvcm0gfHwgd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybTtcbiAgY29uc3QgbWFjb3NQbGF0Zm9ybXMgPSBbJ01hY2ludG9zaCcsICdNYWNJbnRlbCcsICdNYWNQUEMnLCAnTWFjNjhLJywgJ21hY09TJ107XG4gIGNvbnN0IHdpbmRvd3NQbGF0Zm9ybXMgPSBbJ1dpbjMyJywgJ1dpbjY0JywgJ1dpbmRvd3MnLCAnV2luQ0UnXTtcbiAgY29uc3QgaW9zUGxhdGZvcm1zID0gWydpUGhvbmUnLCAnaVBhZCcsICdpUG9kJ107XG4gIGxldCBvczogT1NUeXBlID0gJ1Vua25vd24nO1xuXG4gIGlmIChtYWNvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcbiAgICBvcyA9ICdNYWMgT1MnO1xuICB9IGVsc2UgaWYgKGlvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcbiAgICBvcyA9ICdpT1MnO1xuICB9IGVsc2UgaWYgKHdpbmRvd3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgb3MgPSAnV2luZG93cyc7XG4gIH0gZWxzZSBpZiAoL0FuZHJvaWQvLnRlc3QodXNlckFnZW50KSkge1xuICAgIG9zID0gJ0FuZHJvaWQnO1xuICB9IGVsc2UgaWYgKC9MaW51eC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICBvcyA9ICdMaW51eCc7XG4gIH1cblxuICByZXR1cm4gb3M7XG59O1xuXG5leHBvcnQgY29uc3QgVEFSR0VUX0VOViA9IChwcm9jZXNzLmVudi5UQVJHRVRfRU5WIHx8ICdleHRlbnNpb24nKSBhcyBUYXJnZXRFbnZpcm9ubWVudDtcblxuZXhwb3J0IGNvbnN0IE1PRFVMRV9TVVBQT1JUOiBFbnZpcm9ubWVudFN1cHBvcnQgPSB7XG4gIE1BTlRBX1pLOiBUQVJHRVRfRU5WID09PSAnZXh0ZW5zaW9uJ1xufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IEJpZ04gZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCBCTkV0aGVyIGZyb20gJ2JuLmpzJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBTaWduZWRUcmFuc2FjdGlvbiB9IGZyb20gJ3dlYjMtY29yZSc7XG5cbmltcG9ydCB7IGhleFN0cmlwUHJlZml4LCBudW1iZXJUb0hleCB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcblxuY29uc3QgaGV4VG9OdW1iZXJTdHJpbmcgPSAoczogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgdGVtcCA9IHBhcnNlSW50KHMsIDE2KTtcblxuICBpZiAoaXNOYU4odGVtcCkpIHtcbiAgICByZXR1cm4gJzAnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZW1wLnRvU3RyaW5nKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbiB7XG4gIHJlYWRvbmx5IG5vbmNlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGdhc1ByaWNlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGdhczogc3RyaW5nO1xuICByZWFkb25seSB0bzogc3RyaW5nO1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xuICByZWFkb25seSBkYXRhOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGV0aGVyZXVtQ2hhaW5JZDogc3RyaW5nO1xuICByZWFkb25seSBpc1NhZmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IgKG5vbmNlOiBzdHJpbmcsXG4gICAgZ2FzUHJpY2U6IHN0cmluZyxcbiAgICBnYXM6IHN0cmluZyxcbiAgICB0bzogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgZGF0YTogc3RyaW5nLFxuICAgIGV0aGVyZXVtQ2hhaW5JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5ub25jZSA9IGhleFRvTnVtYmVyU3RyaW5nKG5vbmNlKTtcbiAgICB0aGlzLmdhc1ByaWNlID0gaGV4VG9OdW1iZXJTdHJpbmcoZ2FzUHJpY2UpO1xuICAgIHRoaXMuZ2FzID0gaGV4VG9OdW1iZXJTdHJpbmcoZ2FzKTtcbiAgICB0aGlzLnRvID0gdG87XG4gICAgdGhpcy52YWx1ZSA9IGhleFRvTnVtYmVyU3RyaW5nKHZhbHVlKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8ICcnO1xuICAgIHRoaXMuZXRoZXJldW1DaGFpbklkID0gcGFyc2VJbnQoZXRoZXJldW1DaGFpbklkLCAxNikudG9TdHJpbmcoKTtcbiAgICB0aGlzLmlzU2FmZSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFueU51bWJlclRvQk4gPSAodmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBCTkV0aGVyKTogQmlnTiA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbmV3IEJpZ04odmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IEJpZ04oMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCaWdOKHZhbHVlLnRvTnVtYmVyKCkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNhY3Rpb25Gcm9tUkxQID0gKHJscDogc3RyaW5nKTogVHJhbnNhY3Rpb24gfCBudWxsID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGV0aGVycy5UcmFuc2FjdGlvbi5mcm9tKHJscCk7XG4gICAgY29uc3Qgbm9uY2UgPSB0cmFuc2FjdGlvbi5ub25jZS50b1N0cmluZygxNik7XG4gICAgY29uc3QgZ2FzUHJpY2UgPSB0cmFuc2FjdGlvbi5nYXNQcmljZT8udG9TdHJpbmcoMTYpIHx8ICcnO1xuICAgIGNvbnN0IGdhcyA9IHRyYW5zYWN0aW9uLmdhc0xpbWl0LnRvU3RyaW5nKDE2KTtcbiAgICBjb25zdCB0byA9IHRyYW5zYWN0aW9uLnRvIHx8ICcnO1xuICAgIGNvbnN0IHZhbHVlID0gdHJhbnNhY3Rpb24udmFsdWUudG9TdHJpbmcoMTYpO1xuICAgIGNvbnN0IGRhdGEgPSB0cmFuc2FjdGlvbi5kYXRhO1xuICAgIGNvbnN0IGV0aGVyZXVtQ2hhaW5JZCA9IHRyYW5zYWN0aW9uLmNoYWluSWQudG9TdHJpbmcoMTYpO1xuXG4gICAgcmV0dXJuIG5ldyBUcmFuc2FjdGlvbihub25jZSxcbiAgICAgIGdhc1ByaWNlLFxuICAgICAgZ2FzLFxuICAgICAgdG8sXG4gICAgICB2YWx1ZSxcbiAgICAgIGRhdGEsXG4gICAgICBldGhlcmV1bUNoYWluSWQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coKGUgYXMgRXJyb3IpLm1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaWduYXR1cmVUb0hleCA9IChzaWc6IFNpZ25lZFRyYW5zYWN0aW9uKTogc3RyaW5nID0+IHtcbiAgY29uc3QgdiA9IHBhcnNlSW50KHNpZy52KTtcbiAgY29uc3QgciA9IGhleFN0cmlwUHJlZml4KHNpZy5yKTtcbiAgY29uc3QgcyA9IGhleFN0cmlwUHJlZml4KHNpZy5zKTtcbiAgY29uc3QgaGV4UiA9IHIubGVuZ3RoICUgMiA9PT0gMSA/IGAwJHtyfWAgOiByO1xuICBjb25zdCBoZXhTID0gcy5sZW5ndGggJSAyID09PSAxID8gYDAke3N9YCA6IHM7XG4gIGNvbnN0IGhleFYgPSBoZXhTdHJpcFByZWZpeChudW1iZXJUb0hleCh2KSk7XG5cbiAgcmV0dXJuIGhleFIgKyBoZXhTICsgaGV4Vjtcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgQ3Jvd2Rsb2FuUGFyYVN0YXRlLCBNb2JpbGVPUywgTmV0d29ya0pzb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IEFjY291bnRBdXRoVHlwZSwgQWNjb3VudEpzb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvdHlwZXMnO1xuaW1wb3J0IHsgQUxMX0FDQ09VTlRfS0VZIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0T1MgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcblxuaW1wb3J0IHsgYXNzZXJ0LCBCTiwgaGV4VG9VOGEsIGlzSGV4IH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuaW1wb3J0IHsgZGVjb2RlQWRkcmVzcywgZW5jb2RlQWRkcmVzcywgZXRoZXJldW1FbmNvZGUsIGlzRXRoZXJldW1BZGRyZXNzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxuZXhwb3J0IHsgY2FuRGVyaXZlIH0gZnJvbSAnLi9jYW5EZXJpdmUnO1xuXG5leHBvcnQgY29uc3Qgbm90RGVmID0gKHg6IGFueSkgPT4geCA9PT0gbnVsbCB8fCB0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgY29uc3QgaXNEZWYgPSAoeDogYW55KSA9PiAhbm90RGVmKHgpO1xuZXhwb3J0IGNvbnN0IG5vbkVtcHR5QXJyID0gKHg6IGFueSkgPT4gQXJyYXkuaXNBcnJheSh4KSAmJiB4Lmxlbmd0aCA+IDA7XG5leHBvcnQgY29uc3QgaXNFbXB0eUFycmF5ID0gKHg6IGFueSkgPT4gIUFycmF5LmlzQXJyYXkoeCkgfHwgKEFycmF5LmlzQXJyYXkoeCkgJiYgeC5sZW5ndGggPT09IDApO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBY2NvdW50QWxsIChhZGRyZXNzPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBhZGRyZXNzID09PSBBTExfQUNDT1VOVF9LRVk7XG59XG5cbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9IE1vYmlsZU9TLmluY2x1ZGVzKGdldE9TKCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVmb3JtYXRBZGRyZXNzIChhZGRyZXNzOiBzdHJpbmcsIG5ldHdvcmtQcmVmaXggPSA0MiwgaXNFdGhlcmV1bSA9IGZhbHNlKTogc3RyaW5nIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWFkZHJlc3MgfHwgYWRkcmVzcyA9PT0gJycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzcykpIHtcbiAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH1cblxuICAgIGlmIChpc0FjY291bnRBbGwoYWRkcmVzcykpIHtcbiAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH1cblxuICAgIGNvbnN0IHB1YmxpY0tleSA9IGRlY29kZUFkZHJlc3MoYWRkcmVzcyk7XG5cbiAgICBpZiAoaXNFdGhlcmV1bSkge1xuICAgICAgcmV0dXJuIGV0aGVyZXVtRW5jb2RlKHB1YmxpY0tleSk7XG4gICAgfVxuXG4gICAgaWYgKG5ldHdvcmtQcmVmaXggPCAwKSB7XG4gICAgICByZXR1cm4gYWRkcmVzcztcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jb2RlQWRkcmVzcyhwdWJsaWNLZXksIG5ldHdvcmtQcmVmaXgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdHZXQgZXJyb3Igd2hpbGUgcmVmb3JtYXQgYWRkcmVzcycsIGFkZHJlc3MsIGUpO1xuXG4gICAgcmV0dXJuIGFkZHJlc3M7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckFkZHJlc3NCeU5ldHdvcmtLZXkgKGFkZHJlc3Nlczogc3RyaW5nW10sIG5ldHdvcmtLZXk6IHN0cmluZywgaXNFdGhlcmV1bT86IGJvb2xlYW4pIHtcbiAgaWYgKGlzRXRoZXJldW0pIHtcbiAgICByZXR1cm4gYWRkcmVzc2VzLmZpbHRlcigoYWRkcmVzcykgPT4ge1xuICAgICAgcmV0dXJuIGlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhZGRyZXNzZXMuZmlsdGVyKChhZGRyZXNzKSA9PiB7XG4gICAgICByZXR1cm4gIWlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yeUFkZHJlc3NlcyAoYWRkcmVzc2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBzdWJzdHJhdGVBZGRyZXNzZXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGV2bUFkZHJlc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICBhZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgIGlmIChpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzKSkge1xuICAgICAgZXZtQWRkcmVzc2VzLnB1c2goYWRkcmVzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnN0cmF0ZUFkZHJlc3Nlcy5wdXNoKGFkZHJlc3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtzdWJzdHJhdGVBZGRyZXNzZXMsIGV2bUFkZHJlc3Nlc107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yeU5ldHdvcmtzIChuZXR3b3JrczogTmV0d29ya0pzb25bXSkge1xuICBjb25zdCBzdWJzdHJhdGVBZGRyZXNzZXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGV2bUFkZHJlc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICByZXR1cm4gW3N1YnN0cmF0ZUFkZHJlc3NlcywgZXZtQWRkcmVzc2VzXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0V2bUFkZHJlc3MgKHN1YnN0cmF0ZUFkZHJlc3M6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGFkZHJlc3NCeXRlcyA9IGRlY29kZUFkZHJlc3Moc3Vic3RyYXRlQWRkcmVzcyk7XG5cbiAgcmV0dXJuIGV0aGVyZXVtRW5jb2RlKCcweCcgKyBCdWZmZXIuZnJvbShhZGRyZXNzQnl0ZXMuc3ViYXJyYXkoMCwgMjApKS50b1N0cmluZygnaGV4JykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVcmwgKHRhcmdldFN0cmluZzogc3RyaW5nKSB7XG4gIGxldCB1cmw7XG5cbiAgdHJ5IHtcbiAgICB1cmwgPSBuZXcgVVJMKHRhcmdldFN0cmluZyk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdXJsLnByb3RvY29sID09PSAnaHR0cDonIHx8IHVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOicgfHwgdXJsLnByb3RvY29sID09PSAnd3NzOic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbkplc3RUZXN0ICgpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LkpFU1RfV09SS0VSX0lEICE9PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBwYXJzZUlwZnNMaW5rID0gKGlwZnNMaW5rOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFpcGZzTGluay5pbmNsdWRlcygnaXBmczovL2lwZnMvJykpIHtcbiAgICByZXR1cm4gaXBmc0xpbms7XG4gIH1cblxuICByZXR1cm4gaXBmc0xpbmsuc3BsaXQoJ2lwZnM6Ly9pcGZzLycpWzFdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvU3RyIChidWY6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBzdHIgPSAnJztcbiAgbGV0IGhleFN0YXJ0ID0gYnVmLmluZGV4T2YoJzB4Jyk7XG5cbiAgaWYgKGhleFN0YXJ0IDwgMCkge1xuICAgIGhleFN0YXJ0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBoZXhTdGFydCA9IDI7XG4gIH1cblxuICBmb3IgKGxldCBpID0gaGV4U3RhcnQsIHN0ckxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBzdHJMZW47IGkgKz0gMikge1xuICAgIGNvbnN0IGNoID0gYnVmW2ldICsgYnVmW2kgKyAxXTtcbiAgICBjb25zdCBudW0gPSBwYXJzZUludChjaCwgMTYpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIGlmIChudW0gIT0gMCkge1xuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobnVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuZXhwb3J0IGZ1bmN0aW9uIHV0ZjE2VG9TdHJpbmcgKHVJbnQxNkFycmF5OiBBcnJheTxudW1iZXI+KTogc3RyaW5nIHtcbiAgbGV0IHN0ciA9ICcnO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1SW50MTZBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVJbnQxNkFycmF5W2ldKTtcbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1VURjE2IChoZXg6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICBjb25zdCBidWYgPSBbXTtcbiAgbGV0IGhleFN0YXJ0ID0gaGV4LmluZGV4T2YoJzB4Jyk7XG5cbiAgaWYgKGhleFN0YXJ0IDwgMCkge1xuICAgIGhleFN0YXJ0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBoZXhTdGFydCA9IDI7XG4gIH1cblxuICBmb3IgKGxldCBpID0gaGV4U3RhcnQsIHN0ckxlbiA9IGhleC5sZW5ndGg7IGkgPCBzdHJMZW47IGkgKz0gMikge1xuICAgIGNvbnN0IGNoID0gaGV4W2ldICsgaGV4W2kgKyAxXTtcbiAgICBjb25zdCBudW0gPSBwYXJzZUludChjaCwgMTYpO1xuXG4gICAgYnVmLnB1c2gobnVtKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShidWYpO1xufVxuXG5leHBvcnQgY29uc3QgaXNWYWxpZFN1YnN0cmF0ZUFkZHJlc3MgPSAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgZW5jb2RlQWRkcmVzcyhcbiAgICAgIGlzSGV4KGFkZHJlc3MpXG4gICAgICAgID8gaGV4VG9VOGEoYWRkcmVzcylcbiAgICAgICAgOiBkZWNvZGVBZGRyZXNzKGFkZHJlc3MpXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRvVW5pdCA9IChiYWxhbmNlOiBudW1iZXIsIGRlY2ltYWxzOiBudW1iZXIpID0+IHtcbiAgaWYgKGJhbGFuY2UgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiBiYWxhbmNlIC8gKDEwICoqIGRlY2ltYWxzKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1CTiAoaW5wdXRBcnI6IEJOW10pIHtcbiAgbGV0IHJzID0gbmV3IEJOKDApO1xuXG4gIGlucHV0QXJyLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgcnMgPSBycy5hZGQoaW5wdXQpO1xuICB9KTtcblxuICByZXR1cm4gcnM7XG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0RnVuZFN0YXR1cyA9IChzdGF0dXM6IHN0cmluZykgPT4ge1xuICBpZiAoc3RhdHVzID09PSAnV29uJyB8fCBzdGF0dXMgPT09ICdSZXRpcmluZycpIHtcbiAgICByZXR1cm4gQ3Jvd2Rsb2FuUGFyYVN0YXRlLkNPTVBMRVRFRDtcbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdTdGFydGVkJykge1xuICAgIHJldHVybiBDcm93ZGxvYW5QYXJhU3RhdGUuT05HT0lORztcbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdEaXNzb2x2ZWQnKSB7XG4gICAgcmV0dXJuIENyb3dkbG9hblBhcmFTdGF0ZS5GQUlMRUQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzQWRkcmVzc2VzRXF1YWwgPSAoYWRkcmVzc2VzOiBzdHJpbmdbXSwgcHJldkFkZHJlc3Nlczogc3RyaW5nW10pID0+IHtcbiAgaWYgKGFkZHJlc3Nlcy5sZW5ndGggIT09IHByZXZBZGRyZXNzZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChjb25zdCBhZGRyZXNzIG9mIGFkZHJlc3Nlcykge1xuICAgIGlmICghcHJldkFkZHJlc3Nlcy5pbmNsdWRlcyhhZGRyZXNzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRQcm92aWRlciA9IChwcm92aWRlcjogc3RyaW5nKSA9PiB7XG4gIGlmIChpc1VybChwcm92aWRlcikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwcm92aWRlci5zdGFydHNXaXRoKCd3c3M6Ly8nKSB8fCBwcm92aWRlci5zdGFydHNXaXRoKCdsaWdodDovLycpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFByb3ZpZGVyID0gKGRhdGE6IE5ldHdvcmtKc29uKSA9PiB7XG4gIGlmICghZGF0YT8uY3VycmVudFByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZGF0YS5jdXJyZW50UHJvdmlkZXIuc3RhcnRzV2l0aCgnY3VzdG9tJykgJiYgZGF0YS5jdXN0b21Qcm92aWRlcnMpIHtcbiAgICByZXR1cm4gZGF0YS5jdXN0b21Qcm92aWRlcnNbZGF0YS5jdXJyZW50UHJvdmlkZXJdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkYXRhLnByb3ZpZGVyc1tkYXRhLmN1cnJlbnRQcm92aWRlcl07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXROZnRQcm92aWRlciA9IChkYXRhOiBOZXR3b3JrSnNvbikgPT4ge1xuICBpZiAoZGF0YS5uZnRQcm92aWRlcikge1xuICAgIHJldHVybiBkYXRhLnByb3ZpZGVyc1tkYXRhLm5mdFByb3ZpZGVyXTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU5ldHdvcmtQcm92aWRlcnMgKGN1c3RvbU5ldHdvcms6IE5ldHdvcmtKc29uLCBwcmVkZWZpbmVkTmV0d29yazogTmV0d29ya0pzb24pIHsgLy8gbWVyZ2UgcHJvdmlkZXJzIGZvciAyIG5ldHdvcmtzIHdpdGggdGhlIHNhbWUgZ2VuZXNpc0hhc2hcbiAgaWYgKGN1c3RvbU5ldHdvcmsuY3VzdG9tUHJvdmlkZXJzKSB7XG4gICAgY29uc3QgcGFyc2VkQ3VzdG9tUHJvdmlkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgY29uc3QgY3VycmVudFByb3ZpZGVyID0gY3VzdG9tTmV0d29yay5jdXN0b21Qcm92aWRlcnNbY3VzdG9tTmV0d29yay5jdXJyZW50UHJvdmlkZXIgfHwgJyddIHx8ICcnO1xuICAgIGNvbnN0IGN1cnJlbnRQcm92aWRlck1ldGhvZCA9IGN1cnJlbnRQcm92aWRlci5zdGFydHNXaXRoKCdodHRwJykgPyAnaHR0cCcgOiAnd3MnO1xuICAgIGxldCBwYXJzZWRQcm92aWRlcktleSA9ICcnO1xuXG4gICAgZm9yIChjb25zdCBjdXN0b21Qcm92aWRlciBvZiBPYmplY3QudmFsdWVzKGN1c3RvbU5ldHdvcmsuY3VzdG9tUHJvdmlkZXJzKSkge1xuICAgICAgbGV0IGV4aXN0ID0gZmFsc2U7XG5cbiAgICAgIGZvciAoY29uc3QgW2tleSwgcHJvdmlkZXJdIG9mIE9iamVjdC5lbnRyaWVzKHByZWRlZmluZWROZXR3b3JrLnByb3ZpZGVycykpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm92aWRlciA9PT0gcHJvdmlkZXIpIHsgLy8gcG9pbnQgY3VycmVudFByb3ZpZGVyIHRvIHByZWRlZmluZWRcbiAgICAgICAgICBwYXJzZWRQcm92aWRlcktleSA9IGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm92aWRlciA9PT0gY3VzdG9tUHJvdmlkZXIpIHtcbiAgICAgICAgICBleGlzdCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IE9iamVjdC52YWx1ZXMocGFyc2VkQ3VzdG9tUHJvdmlkZXJzKS5sZW5ndGg7XG5cbiAgICAgICAgcGFyc2VkQ3VzdG9tUHJvdmlkZXJzW2BjdXN0b21fJHtpbmRleH1gXSA9IGN1c3RvbVByb3ZpZGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW2tleSwgcGFyc2VkUHJvdmlkZXJdIG9mIE9iamVjdC5lbnRyaWVzKHBhcnNlZEN1c3RvbVByb3ZpZGVycykpIHtcbiAgICAgIGlmIChjdXJyZW50UHJvdmlkZXIgPT09IHBhcnNlZFByb3ZpZGVyKSB7XG4gICAgICAgIHBhcnNlZFByb3ZpZGVyS2V5ID0ga2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGN1cnJlbnRQcm92aWRlck1ldGhvZCwgcGFyc2VkUHJvdmlkZXJLZXksIHBhcnNlZEN1c3RvbVByb3ZpZGVycyB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGN1cnJlbnRQcm92aWRlck1ldGhvZDogJycsIHBhcnNlZFByb3ZpZGVyS2V5OiAnJywgcGFyc2VkQ3VzdG9tUHJvdmlkZXJzOiB7fSB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJBbmRTb3J0aW5nQWNjb3VudEJ5QXV0aFR5cGUgPSAoYWNjb3VudHM6IEFjY291bnRKc29uW10sIGFjY291bnRBdXRoVHlwZTogQWNjb3VudEF1dGhUeXBlLCBzb3J0aW5nID0gZmFsc2UpID0+IHtcbiAgbGV0IHJzID0gWy4uLmFjY291bnRzXTtcblxuICBycyA9IHJzLmZpbHRlcigoYWNjKSA9PiBhY2MuYWRkcmVzcyAhPT0gJ0FMTCcpO1xuXG4gIGlmIChhY2NvdW50QXV0aFR5cGUgPT09ICdzdWJzdHJhdGUnKSB7XG4gICAgcnMgPSBycy5maWx0ZXIoKGFjYykgPT4gKGFjYy50eXBlICE9PSAnZXRoZXJldW0nKSk7XG4gIH0gZWxzZSBpZiAoYWNjb3VudEF1dGhUeXBlID09PSAnZXZtJykge1xuICAgIHJzID0gcnMuZmlsdGVyKChhY2MpID0+IChhY2MudHlwZSA9PT0gJ2V0aGVyZXVtJykpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzb3J0aW5nKSB7XG4gICAgICBycy5zb3J0KChhY2MsIGFjYzIpID0+IHtcbiAgICAgICAgaWYgKChhY2MudHlwZSA9PT0gJ2V0aGVyZXVtJyAmJiBhY2MyLnR5cGUgPT09ICdldGhlcmV1bScpIHx8IChhY2MudHlwZSAhPT0gJ2V0aGVyZXVtJyAmJiBhY2MyLnR5cGUgIT09ICdldGhlcmV1bScpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFjYy50eXBlID09PSAnZXRoZXJldW0nID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSYXdOdW1iZXIgKHZhbHVlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZUFsbCgnLCcsICcnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVBZGRyZXNzIChhZGRyZXNzMTogc3RyaW5nLCBhZGRyZXNzMjogc3RyaW5nKSB7XG4gIGlmIChpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzMSkpIHtcbiAgICByZXR1cm4gYWRkcmVzczEudG9Mb3dlckNhc2UoKSA9PT0gYWRkcmVzczIudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHJldHVybiByZWZvcm1hdEFkZHJlc3MoYWRkcmVzczEsIDApID09PSByZWZvcm1hdEFkZHJlc3MoYWRkcmVzczIsIDApOyAvLyBUT0RPOiBtYXliZSB0aGVyZSdzIGEgYmV0dGVyIHdheVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluRnJvbVVybCAodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL14oaHR0cHM/OlxcL1xcLyk/KHd3d1xcLik/LywgJycpLnNwbGl0KCcvJylbMF07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0VGltZW91dCAobXM6IG51bWJlcikge1xuICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN0cmlwVXJsID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgYXNzZXJ0KHVybCAmJiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHA6JykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOicpIHx8IHVybC5zdGFydHNXaXRoKCdpcGZzOicpIHx8IHVybC5zdGFydHNXaXRoKCdpcG5zOicpKSwgdCgnSW52YWxpZCBVUkwgZm9yIHByb3ZpZGVyJykpO1xuXG4gIGNvbnN0IHBhcnRzID0gdXJsLnNwbGl0KCcvJyk7XG5cbiAgcmV0dXJuIHBhcnRzWzJdO1xufTtcblxuZXhwb3J0ICogZnJvbSAnLi9hcnJheSc7XG5leHBvcnQgKiBmcm9tICcuL2Vudmlyb25tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGF6eSc7XG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNsYXRlJztcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW50ZXJmYWNlIExhenlJdGVtIHtcbiAgdGltZW91dD86IE5vZGVKUy5UaW1lb3V0O1xuICBjYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgbGFzdEZpcmU6IG51bWJlcjtcbn1cblxuY29uc3QgbGF6eU1hcDogUmVjb3JkPHN0cmluZywgTGF6eUl0ZW0+ID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMYXp5IChrZXk6IHN0cmluZykge1xuICBpZiAobGF6eU1hcFtrZXldKSB7XG4gICAgY2xlYXJUaW1lb3V0KGxhenlNYXBba2V5XS50aW1lb3V0KTtcbiAgICBkZWxldGUgbGF6eU1hcFtrZXldO1xuICB9XG59XG5cbi8vIEFkZCBvciB1cGRhdGUgbmV3IGxhenkgdGhyZWFkXG5leHBvcnQgZnVuY3Rpb24gYWRkTGF6eSAoa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkLCBsYXp5VGltZSA9IDMwMCwgbWF4TGF6eVRpbWUgPSAzMDAwLCBmaXJlT25GaXJzdCA9IHRydWUpIHtcbiAgY29uc3QgZXhpc3RlZCA9IGxhenlNYXBba2V5XTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgaWYgKGV4aXN0ZWQpIHtcbiAgICBjbGVhclRpbWVvdXQoZXhpc3RlZC50aW1lb3V0KTtcbiAgICBsYXp5TWFwW2tleV0gPSB7XG4gICAgICAuLi5leGlzdGVkLFxuICAgICAgY2FsbGJhY2tcbiAgICB9O1xuXG4gICAgLy8gRmlyZSBjYWxsYmFjayBpZiBsYXN0IGZpcmUgaXMgdG9vIGxvbmdcbiAgICBpZiAobm93IC0gZXhpc3RlZC5sYXN0RmlyZSA+PSBtYXhMYXp5VGltZSkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIGxhenlNYXBba2V5XS5sYXN0RmlyZSA9IG5vdztcbiAgICB9IGVsc2Uge1xuICAgICAgbGF6eU1hcFtrZXldLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGZpcmUgaW4gdGhlIGxhc3QgY2FsbCBvZiBsYXp5IHRocmVhZFxuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICBsYXp5TWFwW2tleV0ubGFzdEZpcmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgcmVtb3ZlTGF6eShrZXkpO1xuICAgICAgfSwgbGF6eVRpbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZmlyZU9uRmlyc3QpIHtcbiAgICAgIC8vIEZpcmUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgaW4gdGhlIGZpcnN0IHRpbWVcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICBsYXp5TWFwW2tleV0gPSB7XG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBsYXN0RmlyZTogbm93XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXp5TWFwW2tleV0gPSB7XG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBsYXN0RmlyZTogbm93XG4gICAgICB9O1xuXG4gICAgICBsYXp5TWFwW2tleV0udGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBUaGlzIHdpbGwgYmUgZmlyZSBpbiB0aGUgbGFzdCBjYWxsIG9mIGxhenkgdGhyZWFkXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIGxhenlNYXBba2V5XS5sYXN0RmlyZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICByZW1vdmVMYXp5KGtleSk7XG4gICAgICB9LCBsYXp5VGltZSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IEJpZ051bWJlciBmcm9tICdiaWdudW1iZXIuanMnO1xuXG5leHBvcnQgY29uc3QgQk5fVEVOID0gbmV3IEJpZ051bWJlcigxMCk7XG5leHBvcnQgaW50ZXJmYWNlIE51bWJlckZvcm1hdHRlciB7XG4gIChpbnB1dDogc3RyaW5nLCBtZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pOiBzdHJpbmc7XG59XG5cbi8vIENsZWFyIHplcm8gZnJvbSBlbmQsIHVzZSB3aXRoIGRlY2ltYWwgb25seVxuY29uc3QgY2xlYXJaZXJvID0gKHJlc3VsdDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgbGV0IGluZGV4ID0gcmVzdWx0Lmxlbmd0aCAtIDE7XG5cbiAgd2hpbGUgKHJlc3VsdFtpbmRleF0gPT09ICcwJykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCBpbmRleCk7XG4gICAgaW5kZXgtLTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBOVU1fMVQgPSBuZXcgQmlnTnVtYmVyKDFlMTIpO1xuY29uc3QgVExJTSA9IG5ldyBCaWdOdW1iZXIoMWUxNyk7XG5jb25zdCBOVU1fMUIgPSBuZXcgQmlnTnVtYmVyKDFlOSk7XG5jb25zdCBCTElNID0gbmV3IEJpZ051bWJlcigxZTE0KTtcbmNvbnN0IE5VTV8xTSA9IG5ldyBCaWdOdW1iZXIoMWU2KTtcbmNvbnN0IE5VTV8xMDBNID0gbmV3IEJpZ051bWJlcigxZTgpO1xuXG5leHBvcnQgY29uc3QgYmFsYW5jZUZvcm1hdHRlcjogTnVtYmVyRm9ybWF0dGVyID0gKFxuICBpbnB1dDogc3RyaW5nLFxuICBtZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGFic0d0ZU9uZSA9IG5ldyBCaWdOdW1iZXIoaW5wdXQpLmFicygpLmd0ZSgxKTtcbiAgY29uc3QgbWluTnVtYmVyRm9ybWF0ID0gbWV0YWRhdGE/Lm1pbk51bWJlckZvcm1hdCB8fCAyO1xuICBjb25zdCBtYXhOdW1iZXJGb3JtYXQgPSBtZXRhZGF0YT8ubWF4TnVtYmVyRm9ybWF0IHx8IDY7XG5cbiAgY29uc3QgW2ludCwgZGVjaW1hbCA9ICcwJ10gPSBpbnB1dC5zcGxpdCgnLicpO1xuICBsZXQgX2RlY2ltYWwgPSAnJztcblxuICBpZiAoYWJzR3RlT25lKSB7XG4gICAgY29uc3QgaW50TnVtYmVyID0gbmV3IEJpZ051bWJlcihpbnQpO1xuICAgIGNvbnN0IG1heCA9IEJOX1RFTi5wb3cobWF4TnVtYmVyRm9ybWF0KTtcblxuICAgIC8vIElmIGNvdW50IG9mIG51bWJlciBpbiBpbnRlZ2VyIHBhcnQgZ3JlYXRlciBvciBlcXVhbCBtYXhOdW1iZXJGb3JtYXQsIGRvIG5vdCBzaG93IGRlY2ltYWxcbiAgICBpZiAoaW50TnVtYmVyLmd0ZShtYXgpKSB7XG4gICAgICBpZiAoaW50TnVtYmVyLmd0ZShOVU1fMTAwTSkpIHtcbiAgICAgICAgaWYgKGludE51bWJlci5ndGUoQkxJTSkpIHtcbiAgICAgICAgICBpZiAoaW50TnVtYmVyLmd0ZShUTElNKSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke2ludE51bWJlci5kaXZpZGVkQnkoTlVNXzFUKS50b0ZpeGVkKDIpfSBUYDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYCR7aW50TnVtYmVyLmRpdmlkZWRCeShOVU1fMUIpLnRvRml4ZWQoMil9IEJgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2ludE51bWJlci5kaXZpZGVkQnkoTlVNXzFNKS50b0ZpeGVkKDIpfSBNYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGludDtcbiAgICB9XG5cbiAgICAvLyBHZXQgb25seSBtaW5OdW1iZXJGb3JtYXQgbnVtYmVyIGF0IGRlY2ltYWxcbiAgICBpZiAoZGVjaW1hbC5sZW5ndGggPD0gbWluTnVtYmVyRm9ybWF0KSB7XG4gICAgICBfZGVjaW1hbCA9IGRlY2ltYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9kZWNpbWFsID0gZGVjaW1hbC5zbGljZSgwLCBtaW5OdW1iZXJGb3JtYXQpO1xuICAgIH1cblxuICAgIC8vIENsZWFyIHplcm8gbnVtYmVyIGZvciBkZWNpbWFsXG4gICAgX2RlY2ltYWwgPSBjbGVhclplcm8oX2RlY2ltYWwpO1xuICB9IGVsc2Uge1xuICAgIC8vIEluZGV4IG9mIGN1cnNvclxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAvLyBDb3VudCBvZiBub3QgemVybyBudW1iZXIgaW4gZGVjaW1hbFxuICAgIGxldCBjdXJyZW50ID0gMDtcblxuICAgIC8vIEZpbmQgYSBub3QgemVybyBudW1iZXIgaW4gZGVjaW1hbFxuICAgIGxldCBtZXROb3RaZXJvID0gZmFsc2U7XG5cbiAgICAvLyBHZXQgYXQgbGVhc3QgbWluTnVtYmVyRm9ybWF0IG51bWJlciBub3QgMCBmcm9tIGluZGV4IDBcbiAgICAvLyBJZiBjb3VudCBvZiAwIG51bWJlciBhdCBwcmVmaXggZ3JlYXRlciBvciBlcXVhbCBtYXhOdW1iZXJGb3JtYXQgc2hvdWxkIHN0b3AgYW5kIHJldHVybiAwXG5cbiAgICAvLyBjdXJyZW50ID09PSBtaW5OdW1iZXJGb3JtYXQ6IGdldCBlbm91Z2ggbnVtYmVyXG4gICAgLy8gaW5kZXggPT09IGRlY2ltYWwubGVuZ3RoOiBlbmQgb2YgZGVjaW1hbFxuICAgIC8vIGluZGV4ID09PSBtYXhOdW1iZXJGb3JtYXQ6IHJlYWNoIGxpbWl0IG9mIDAgbnVtYmVyIGF0IHByZWZpeFxuICAgIHdoaWxlIChcbiAgICAgIGN1cnJlbnQgPCBtaW5OdW1iZXJGb3JtYXQgJiZcbiAgICAgIGluZGV4IDwgZGVjaW1hbC5sZW5ndGggJiZcbiAgICAgIChpbmRleCA8IG1heE51bWJlckZvcm1hdCB8fCBtZXROb3RaZXJvKVxuICAgICkge1xuICAgICAgY29uc3QgX2NoYXIgPSBkZWNpbWFsW2luZGV4XTtcblxuICAgICAgX2RlY2ltYWwgKz0gX2NoYXI7XG4gICAgICBpbmRleCsrO1xuXG4gICAgICBpZiAoX2NoYXIgIT09ICcwJykge1xuICAgICAgICBtZXROb3RaZXJvID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldE5vdFplcm8pIHtcbiAgICAgICAgY3VycmVudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsZWFyIHplcm8gbnVtYmVyIGZvciBkZWNpbWFsXG4gICAgX2RlY2ltYWwgPSBjbGVhclplcm8oX2RlY2ltYWwpO1xuICB9XG5cbiAgaWYgKF9kZWNpbWFsKSB7XG4gICAgcmV0dXJuIGAke2ludH0uJHtfZGVjaW1hbH1gO1xuICB9XG5cbiAgcmV0dXJuIGludDtcbn07XG5cbmV4cG9ydCBjb25zdCBQUkVERUZJTkVEX0ZPUk1BVFRFUjogUmVjb3JkPHN0cmluZywgTnVtYmVyRm9ybWF0dGVyPiA9IHtcbiAgYmFsYW5jZTogYmFsYW5jZUZvcm1hdHRlclxufTtcblxuZXhwb3J0IGNvbnN0IHRvQk5TdHJpbmcgPSAoaW5wdXQ6IHN0cmluZyB8IG51bWJlciB8IEJpZ051bWJlciwgZGVjaW1hbDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcmF3ID0gbmV3IEJpZ051bWJlcihpbnB1dCk7XG5cbiAgcmV0dXJuIHJhdy5tdWx0aXBsaWVkQnkoQk5fVEVOLnBvdyhkZWNpbWFsKSkudG9GaXhlZCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlciA9IChcbiAgaW5wdXQ6IHN0cmluZyB8IG51bWJlciB8IEJpZ051bWJlcixcbiAgZGVjaW1hbDogbnVtYmVyLFxuICBmb3JtYXR0ZXI6IE51bWJlckZvcm1hdHRlcixcbiAgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCByYXcgPSBuZXcgQmlnTnVtYmVyKGlucHV0KS5kaXZpZGVkQnkoQk5fVEVOLnBvdyhkZWNpbWFsKSkudG9GaXhlZCgpO1xuXG4gIHJldHVybiBmb3JtYXR0ZXIocmF3LCBtZXRhZGF0YSk7XG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQ2hhaW5JbmZvIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IF9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3V0aWxzJztcblxuaW1wb3J0IHsgTWV0YWRhdGEsIFR5cGVSZWdpc3RyeSB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcyc7XG5pbXBvcnQgeyBDaGFpblByb3BlcnRpZXMgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBIZXhTdHJpbmcgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZWdpc3RyeSA9IChjaGFpbjogX0NoYWluSW5mbywgcmF3TWV0YWRhdGE6IEhleFN0cmluZyk6IFJlZ2lzdHJ5ID0+IHtcbiAgY29uc3QgcmVnaXN0cnk6IFJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpO1xuICBjb25zdCBtZXRhZGF0YSA9IG5ldyBNZXRhZGF0YShyZWdpc3RyeSwgcmF3TWV0YWRhdGEpO1xuXG4gIHJlZ2lzdHJ5LnNldE1ldGFkYXRhKG1ldGFkYXRhKTtcblxuICBjb25zdCB0b2tlbkluZm8gPSBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyhjaGFpbik7XG5cbiAgcmVnaXN0cnkuc2V0Q2hhaW5Qcm9wZXJ0aWVzKHJlZ2lzdHJ5LmNyZWF0ZVR5cGUoJ0NoYWluUHJvcGVydGllcycsIHtcbiAgICBzczU4Rm9ybWF0OiBjaGFpbi5zdWJzdHJhdGVJbmZvPy5hZGRyZXNzUHJlZml4IHx8IDQyLFxuICAgIHRva2VuRGVjaW1hbHM6IHRva2VuSW5mby5kZWNpbWFscyxcbiAgICB0b2tlblN5bWJvbDogdG9rZW5JbmZvLnN5bWJvbFxuICB9KSBhcyB1bmtub3duIGFzIENoYWluUHJvcGVydGllcyk7XG5cbiAgcmV0dXJuIHJlZ2lzdHJ5O1xufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IGNvbnN0IGRldGVjdFRyYW5zbGF0ZSA9IChtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcgPT4gbWVzc2FnZTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbiBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBVOEFfV1JBUF9FVEhFUkVVTSwgVThBX1dSQVBfUE9TVEZJWCwgVThBX1dSQVBfUFJFRklYLCB1OGFJc1dyYXBwZWQsIHU4YVVud3JhcEJ5dGVzLCB1OGFXcmFwQnl0ZXMgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBFVEhFUkVVTSA9IFU4QV9XUkFQX0VUSEVSRVVNO1xuZXhwb3J0IGNvbnN0IFBPU1RGSVggPSBVOEFfV1JBUF9QT1NURklYO1xuZXhwb3J0IGNvbnN0IFBSRUZJWCA9IFU4QV9XUkFQX1BSRUZJWDtcblxuZXhwb3J0IGNvbnN0IGlzV3JhcHBlZCA9IHU4YUlzV3JhcHBlZDtcbmV4cG9ydCBjb25zdCB1bndyYXBCeXRlcyA9IHU4YVVud3JhcEJ5dGVzO1xuZXhwb3J0IGNvbnN0IHdyYXBCeXRlcyA9IHU4YVdyYXBCeXRlcztcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1pbmplY3QgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgZXhwb3NlR2xvYmFsLCB4Z2xvYmFsIH0gZnJvbSAnQHBvbGthZG90L3gtZ2xvYmFsJztcblxuZXhwb3NlR2xvYmFsKCdjaHJvbWUnLCB4Z2xvYmFsLmJyb3dzZXIpO1xuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlJ1bnRpbWVFbnZpcm9ubWVudCIsIlN0YWtpbmdUeXBlIiwiQVBJSXRlbVN0YXRlIiwiUk1SS19WRVIiLCJDcm93ZGxvYW5QYXJhU3RhdGUiLCJDb250cmFjdFR5cGUiLCJXYWxsZXRVbmxvY2tUeXBlIiwiVHJhbnNhY3Rpb25EaXJlY3Rpb24iLCJDaGFpblR5cGUiLCJFeHRyaW5zaWNUeXBlIiwiRXh0cmluc2ljU3RhdHVzIiwiQmFzaWNUeEVycm9yVHlwZSIsIlN0YWtpbmdUeEVycm9yVHlwZSIsIlRyYW5zZmVyVHhFcnJvclR5cGUiLCJCYXNpY1R4V2FybmluZ0NvZGUiLCJCYWxhbmNlRXJyb3JUeXBlIiwiUHJvdmlkZXJFcnJvclR5cGUiLCJBY2NvdW50RXh0ZXJuYWxFcnJvckNvZGUiLCJFeHRlcm5hbFJlcXVlc3RQcm9taXNlU3RhdHVzIiwiVGhlbWVOYW1lcyIsIk5FVFdPUktfRVJST1IiLCJORVRXT1JLX1NUQVRVUyIsIkV2bVByb3ZpZGVyRXJyb3JUeXBlIiwiVW5zdGFraW5nU3RhdHVzIiwiU3Rha2luZ1N0YXR1cyIsIkNoYWluRWRpdFN0YW5kYXJkIiwiTm90aWZpY2F0aW9uVHlwZSIsIk1hbnRhUGF5RW5hYmxlTWVzc2FnZSIsIk1vYmlsZU9TIiwiQ1JPTl9SRUZSRVNIX1BSSUNFX0lOVEVSVkFMIiwiQ1JPTl9BVVRPX1JFQ09WRVJfRE9UU0FNQV9JTlRFUlZBTCIsIkNST05fQVVUT19SRUNPVkVSX1dFQjNfSU5URVJWQUwiLCJBQ0FMQV9SRUZSRVNIX0NST1dETE9BTl9JTlRFUlZBTCIsIkFTVEFSX1JFRlJFU0hfQkFMQU5DRV9JTlRFUlZBTCIsIlNVQl9UT0tFTl9SRUZSRVNIX0JBTEFOQ0VfSU5URVJWQUwiLCJDUk9OX1JFRlJFU0hfTkZUX0lOVEVSVkFMIiwiQ1JPTl9SRUZSRVNIX1NUQUtJTkdfUkVXQVJEX0lOVEVSVkFMIiwiQ1JPTl9SRUZSRVNIX1NUQUtJTkdfUkVXQVJEX0ZBU1RfSU5URVJWQUwiLCJDUk9OX1JFRlJFU0hfSElTVE9SWV9JTlRFUlZBTCIsIkNST05fR0VUX0FQSV9NQVBfU1RBVFVTIiwiQ1JPTl9SRUZSRVNIX0NIQUlOX1NUQUtJTkdfTUVUQURBVEEiLCJDUk9OX1JFRlJFU0hfQ0hBSU5fTk9NSU5BVE9SX01FVEFEQVRBIiwiQ1JPTl9SRUNPVkVSX0hJU1RPUllfSU5URVJWQUwiLCJDUk9OX1NZTkNfTUFOVEFfUEFZIiwiTUFOVEFfUEFZX0JBTEFOQ0VfSU5URVJWQUwiLCJBTExfQUNDT1VOVF9LRVkiLCJBTExfTkVUV09SS19LRVkiLCJBTExfR0VORVNJU19IQVNIIiwiSUdOT1JFX0dFVF9TVUJTVFJBVEVfRkVBVFVSRVNfTElTVCIsIklHTk9SRV9RUl9TSUdORVIiLCJYQ01fTUlOX0FNT1VOVF9SQVRJTyIsIlBSRURFRklORURfU1RBS0lOR19QT09MIiwia3VzYW1hIiwicG9sa2Fkb3QiLCJMQU5HVUFHRSIsIkFMTE9XRURfUEFUSCIsIlBISVNISU5HX1BBR0VfUkVESVJFQ1QiLCJFWFRFTlNJT05fUFJFRklYIiwicHJvY2VzcyIsImVudiIsIklEX1BSRUZJWCIsIlBPUlRfTU9CSUxFIiwiUE9SVF9DT05URU5UIiwiUE9SVF9FWFRFTlNJT04iLCJNRVNTQUdFX09SSUdJTl9QQUdFIiwiTUVTU0FHRV9PUklHSU5fQ09OVEVOVCIsIlBBU1NXT1JEX0VYUElSWV9NSU4iLCJQQVNTV09SRF9FWFBJUllfTVMiLCJyZXNvbHZlQWRkcmVzc1RvRG9tYWluIiwicmVzb2x2ZURvbWFpblRvQWRkcmVzcyIsIlN1cHBvcnRlZENoYWluSWQiLCJFTlNfU1VGRklYIiwiVFpFUk9fSURfU1VGRklYIiwiQVpFUk9fSURfU1VGRklYIiwiU1VQUE9SVEVEX0RPTUFJTl9TVUZGSVgiLCJDSEFJTlNfU1VQUE9SVEVEX0RPTUFJTiIsIkFaRVJPX0RPTUFJTl9DT05UUkFDVFMiLCJyZXNvbHZlQXplcm9Eb21haW5Ub0FkZHJlc3MiLCJkb21haW4iLCJjaGFpbiIsImFwaSIsImNoYWluSWQiLCJBbGVwaFplcm8iLCJBbGVwaFplcm9UZXN0bmV0IiwicHJpbWFyeURvbWFpbnMiLCJjdXN0b21BcGkiLCJlcnJvciIsImNvbnNvbGUiLCJkZWJ1ZyIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJyZXNvbHZlQXplcm9BZGRyZXNzVG9Eb21haW4iLCJwcmltYXJ5RG9tYWluIiwiaXNBemVyb0RvbWFpbiIsImlucHV0IiwiaW5jbHVkZXMiLCJnZXRTdGFraW5nU3RhdHVzQnlOb21pbmF0aW9ucyIsIl9TVEFLSU5HX0VSQV9MRU5HVEhfTUFQIiwiaXNVcmwiLCJwYXJzZVJhd051bWJlciIsImZldGNoIiwiQk4iLCJCTl9aRVJPIiwiaXNFdGhlcmV1bUFkZHJlc3MiLCJzdWJzY3JpYmVBc3RhclN0YWtpbmdNZXRhZGF0YSIsInN1YnN0cmF0ZUFwaSIsImNhbGxiYWNrIiwicXVlcnkiLCJkYXBwc1N0YWtpbmciLCJjdXJyZW50RXJhIiwiX2N1cnJlbnRFcmEiLCJlcmEiLCJ0b1N0cmluZyIsIm1pbkRlbGVnYXRvclN0YWtlIiwiY29uc3RzIiwibWluaW11bVN0YWtpbmdBbW91bnQiLCJ1bnN0YWtpbmdEZWxheSIsInVuYm9uZGluZ1BlcmlvZCIsInVuc3Rha2luZ1BlcmlvZCIsInBhcnNlSW50IiwidHlwZSIsIk5PTUlOQVRFRCIsIm1pblN0YWtlIiwibWF4VmFsaWRhdG9yUGVyTm9taW5hdG9yIiwibWF4V2l0aGRyYXdhbFJlcXVlc3RQZXJWYWxpZGF0b3IiLCJhbGxvd0NhbmNlbFVuc3Rha2luZyIsImdldEFzdGFyU3Rha2luZ01ldGFkYXRhIiwiYXByUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwibWV0aG9kIiwidGhlbiIsInJlc3AiLCJqc29uIiwiY2F0Y2giLCJ0aW1lb3V0IiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYXByUmFjZVByb21pc2UiLCJyYWNlIiwiYXBySW5mbyIsImNoYWluQXBpIiwiYWxsIiwiaXNSZWFkeSIsImV4cGVjdGVkUmV0dXJuIiwic3Vic2NyaWJlQXN0YXJOb21pbmF0b3JNZXRhZGF0YSIsImNoYWluSW5mbyIsImxlZGdlciIsIm5vbWluYXRpb25MaXN0IiwidW5zdGFraW5nTGlzdCIsImFsbERhcHBzUmVxIiwic2x1ZyIsIl9hbGxEYXBwcyIsIl9lcmEiLCJfc3Rha2VySW5mbyIsImdlbmVyYWxTdGFrZXJJbmZvIiwiZW50cmllcyIsImFsbERhcHBzIiwiYm5Ub3RhbEFjdGl2ZVN0YWtlIiwibGVuZ3RoIiwiZEFwcEluZm9NYXAiLCJmb3JFYWNoIiwiZGFwcEluZm8iLCJ0b0xvd2VyQ2FzZSIsIml0ZW0iLCJkYXRhIiwidG9IdW1hbiIsInN0YWtlZERhcHAiLCJzdGFrZURhdGEiLCJ0b1ByaW1pdGl2ZSIsInN0YWtlTGlzdCIsInN0YWtlcyIsImRhcHBBZGRyZXNzIiwiRXZtIiwiV2FzbSIsImN1cnJlbnRTdGFrZSIsInNsaWNlIiwic3Rha2VkIiwiYm5DdXJyZW50U3Rha2UiLCJndCIsImRhcHBTdGFraW5nU3RhdHVzIiwiZ3RlIiwiRUFSTklOR19SRVdBUkQiLCJOT1RfRUFSTklORyIsImFkZCIsInB1c2giLCJzdGF0dXMiLCJ2YWxpZGF0b3JBZGRyZXNzIiwiYWN0aXZlU3Rha2UiLCJ2YWxpZGF0b3JNaW5TdGFrZSIsInZhbGlkYXRvcklkZW50aXR5IiwibmFtZSIsImhhc1Vuc3Rha2luZyIsInVubG9ja2luZ0NodW5rcyIsInVuYm9uZGluZ0luZm8iLCJ1bmxvY2tpbmdDaHVuayIsImlzQ2xhaW1hYmxlIiwidW5sb2NrRXJhIiwicmVtYWluaW5nRXJhIiwid2FpdGluZ1RpbWUiLCJDTEFJTUFCTEUiLCJVTkxPQ0tJTkciLCJjbGFpbWFibGUiLCJhbW91bnQiLCJOT1RfU1RBS0lORyIsIm5vbWluYXRpb25zIiwidW5zdGFraW5ncyIsInN0YWtpbmdTdGF0dXMiLCJnZXRBc3Rhck5vbWluYXRvck1ldGFkYXRhIiwiX2xlZGdlciIsImdldEFzdGFyRGFwcHNJbmZvIiwibmV0d29ya0tleSIsInJhd01heFN0YWtlclBlckNvbnRyYWN0IiwibWF4TnVtYmVyT2ZTdGFrZXJzUGVyQ29udHJhY3QiLCJhbGxEYXBwc0luZm8iLCJtYXhTdGFrZXJQZXJDb250cmFjdCIsIm1hcCIsImRhcHAiLCJkYXBwTmFtZSIsImRhcHBJY29uIiwiaWNvblVybCIsImNvbnRyYWN0UGFyYW0iLCJfY29udHJhY3RJbmZvIiwiY29udHJhY3RFcmFTdGFrZSIsImNvbnRyYWN0SW5mbyIsInRvdGFsU3Rha2UiLCJzdGFrZXJDb3VudCIsInRvdGFsIiwibnVtYmVyT2ZTdGFrZXJzIiwiY29tbWlzc2lvbiIsIm93blN0YWtlIiwib3RoZXJTdGFrZSIsIm5vbWluYXRvckNvdW50IiwiYmxvY2tlZCIsImlzVmVyaWZpZWQiLCJtaW5Cb25kIiwiaWNvbiIsImlkZW50aXR5IiwiaXNDcm93ZGVkIiwiZ2V0QXN0YXJCb25kaW5nRXh0cmluc2ljIiwiYmluYXJ5QW1vdW50IiwiZGFwcFBhcmFtIiwidHgiLCJib25kQW5kU3Rha2UiLCJnZXRBc3RhclVuYm9uZGluZ0V4dHJpbnNpYyIsImFwaVByb21pc2UiLCJ1bmJvbmRBbmRVbnN0YWtlIiwiZ2V0QXN0YXJXaXRoZHJhd2FsRXh0cmluc2ljIiwid2l0aGRyYXdVbmJvbmRlZCIsImdldEFzdGFyQ2xhaW1SZXdhcmRFeHRyaW5zaWMiLCJfc3Rha2VkRGFwcHMiLCJ0cmFuc2FjdGlvbnMiLCJudW1iZXJPZlVuY2xhaW1lZEVyYSIsIm1heFR4IiwiaSIsImJuU3Rha2VkIiwicmVwbGFjZUFsbCIsInBhcnNlZEVyYSIsImVxIiwibmV4dEVyYURhdGEiLCJuZXh0RXJhIiwiaXNMYXN0RXJhIiwiZXJhVG9DbGFpbSIsIk1hdGgiLCJtaW4iLCJjbGFpbVN0YWtlciIsInV0aWxpdHkiLCJiYXRjaCIsImdldEFzdGFyV2l0aGRyYXdhYmxlIiwibm9taW5hdG9yTWV0YWRhdGEiLCJ1bnN0YWtpbmdJbmZvIiwiYm5XaXRoZHJhd2FibGUiLCJ1bnN0YWtpbmciLCJfS05PV05fQ0hBSU5fSU5GTEFUSU9OX1BBUkFNUyIsIl9TVEFLSU5HX0NIQUlOX0dST1VQIiwiX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMiLCJfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyIsImRldGVjdFRyYW5zbGF0ZSIsInJlZm9ybWF0QWRkcmVzcyIsImJhbGFuY2VGb3JtYXR0ZXIiLCJmb3JtYXROdW1iZXIiLCJ0IiwiQk5fQklMTElPTiIsIkJOX0hVTkRSRUQiLCJCTl9NSUxMSU9OIiwiQk5fVEhPVVNBTkQiLCJiblRvVThhIiwic3RyaW5nVG9VOGEiLCJ1OGFDb25jYXQiLCJQYWxsZXRQYXJhY2hhaW5TdGFraW5nUmVxdWVzdFR5cGUiLCJwYXJzZVBvb2xTdGFzaEFkZHJlc3MiLCJpbmRleCIsInBvb2xJZCIsInBvb2xzUGFsbGV0SWQiLCJNb2RQcmVmaXgiLCJVMzJPcHRzIiwiYml0TGVuZ3RoIiwiaXNMZSIsIkVtcHR5SDI1NiIsIlVpbnQ4QXJyYXkiLCJyZWdpc3RyeSIsImNyZWF0ZVR5cGUiLCJ0cmFuc2Zvcm1Qb29sTmFtZSIsInJlcGxhY2UiLCJwYXJzZUlkZW50aXR5IiwiaWRlbnRpdHlJbmZvIiwiZGlzcGxheU5hbWUiLCJpbmZvIiwiZGlzcGxheSIsIlJhdyIsIndlYiIsInJpb3QiLCJ0d2l0dGVyIiwic3RhcnRzV2l0aCIsImdldEluZmxhdGlvblBhcmFtcyIsImNhbGNJbmZsYXRpb25Vbmlmb3JtRXJhUGF5b3V0IiwidG90YWxJc3N1YW5jZSIsInllYXJseUluZmxhdGlvbkluVG9rZW5zIiwidG90YWxJc3N1YW5jZUluVG9rZW5zIiwiZGl2IiwidG9OdW1iZXIiLCJjYWxjSW5mbGF0aW9uUmV3YXJkQ3VydmUiLCJtaW5JbmZsYXRpb24iLCJzdGFrZWRGcmFjdGlvbiIsImlkZWFsU3Rha2UiLCJpZGVhbEludGVyZXN0IiwiZmFsbG9mZiIsInBvdyIsImNhbGN1bGF0ZUluZmxhdGlvbiIsInRvdGFsRXJhU3Rha2UiLCJudW1BdWN0aW9ucyIsImluZmxhdGlvblBhcmFtcyIsImF1Y3Rpb25BZGp1c3QiLCJhdWN0aW9uTWF4IiwibWF4SW5mbGF0aW9uIiwic3Rha2VUYXJnZXQiLCJtdWwiLCJhbGVwaCIsImNhbGN1bGF0ZUNoYWluU3Rha2VkUmV0dXJuIiwiaW5mbGF0aW9uIiwic3Rha2VkUmV0dXJuIiwiY2FsY3VsYXRlQWxlcGhaZXJvVmFsaWRhdG9yUmV0dXJuIiwiY2hhaW5TdGFrZWRSZXR1cm4iLCJjYWxjdWxhdGVUZXJub2FWYWxpZGF0b3JSZXR1cm4iLCJyZXdhcmRQZXJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JTdGFrZSIsInBlcmNlbnRSZXdhcmRGb3JOb21pbmF0b3JzIiwicmV3YXJkRm9yTm9taW5hdG9ycyIsInN0YWtlUmF0aW8iLCJjYWxjdWxhdGVWYWxpZGF0b3JTdGFrZWRSZXR1cm4iLCJ0b3RhbFZhbGlkYXRvclN0YWtlIiwiYXZnU3Rha2UiLCJibkFkanVzdGVkIiwiYWRqdXN0ZWQiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiZ2V0Q29tbWlzc2lvbiIsImNvbW1pc3Npb25TdHJpbmciLCJwYXJzZUZsb2F0Iiwic3BsaXQiLCJnZXRQYXJhQ3VycmVudEluZmxhdGlvbiIsInRvdGFsU3Rha2VkIiwiaW5mbGF0aW9uQ29uZmlnIiwiZXhwZWN0TWluIiwiZXhwZWN0IiwiZXhwZWN0TWF4IiwibWF4IiwiaW5mbGF0aW9uU3RyaW5nIiwiYW5udWFsIiwiaWRlYWwiLCJpc1Nob3dOb21pbmF0aW9uQnlWYWxpZGF0b3IiLCJhbXBsaXR1ZGUiLCJhc3RhciIsInBhcmEiLCJnZXRCb25kZWRWYWxpZGF0b3JzIiwiYm9uZGVkVmFsaWRhdG9ycyIsIm5vbWluYXRpb25Db3VudCIsIm5vbWluYXRpb24iLCJpc1Vuc3Rha2VBbGwiLCJzZWxlY3RlZFZhbGlkYXRvciIsInVuc3Rha2VBbW91bnQiLCJwYXJzZWRWYWxpZGF0b3JBZGRyZXNzIiwicGFyc2VkU2VsZWN0ZWRWYWxpZGF0b3IiLCJTdGFraW5nQWN0aW9uIiwiZ2V0U3Rha2luZ0F2YWlsYWJsZUFjdGlvbnNCeUNoYWluIiwiUE9PTEVEIiwiU1RBS0UiLCJVTlNUQUtFIiwiV0lUSERSQVciLCJDTEFJTV9SRVdBUkQiLCJDQU5DRUxfVU5TVEFLRSIsImdldFN0YWtpbmdBdmFpbGFibGVBY3Rpb25zQnlOb21pbmF0b3IiLCJ1bmNsYWltZWRSZXdhcmQiLCJyZXN1bHQiLCJibkFjdGl2ZVN0YWtlIiwiaXNBc3Rhck5ldHdvcmsiLCJpc0FtcGxpdHVkZU5ldHdvcmsiLCJiblVuY2xhaW1lZFJld2FyZCIsImhhc0NsYWltYWJsZSIsInNvbWUiLCJpc0FjdGlvbkZyb21WYWxpZGF0b3IiLCJzdGFraW5nVHlwZSIsImdldFdpdGhkcmF3YWxJbmZvIiwiaXNaZXJvIiwiaW52YWxpZERlbGVnYXRpb25Db3VudCIsIlBBUlRJQUxMWV9FQVJOSU5HIiwiZ2V0VmFsaWRhdG9yTGFiZWwiLCJyZWxheSIsImdldE1pblN0YWtlRXJyb3JNZXNzYWdlIiwiYm5NaW5TdGFrZSIsInRva2VuSW5mbyIsIm51bWJlciIsImRlY2ltYWxzIiwidG9rZW5TeW1ib2wiLCJzeW1ib2wiLCJnZXRNYXhWYWxpZGF0b3JFcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwibGFiZWwiLCJnZXRFeGlzdFVuc3Rha2VFcnJvck1lc3NhZ2UiLCJpc1N0YWtlTW9yZSIsIl9ERUZBVUxUX0NIQUlOUyIsIl9TdWJzdHJhdGVDaGFpblR5cGUiLCJBUElfQVVUT19DT05ORUNUX01TIiwiQVBJX0NPTk5FQ1RfVElNRU9VVCIsIkFQSV9NQVhfUkVUUlkiLCJfQVBJX09QVElPTlNfQ0hBSU5fR1JPVVAiLCJhY2FsYSIsInR1cmluZyIsImF2YWlsIiwiX1BSRURFRklORURfU0lOR0xFX01PREVTIiwic3Vic3BhY2UiLCJuZXR3b3JrS2V5cyIsInRoZW1lIiwiU1VCU1BBQ0UiLCJhdXRvVHJpZ2dlckRvbWFpbiIsIl9QVVJFX0VWTV9DSEFJTlMiLCJfQkFMQU5DRV9DSEFJTl9HUk9VUCIsImtpbnRzdWdpIiwiZ2Vuc2hpcm8iLCJlcXVpbGlicml1bV9wYXJhY2hhaW4iLCJiaWZyb3N0Iiwic3RhdGVtaW5lIiwiX0JBTEFOQ0VfVE9LRU5fR1JPVVAiLCJjcmFiIiwiYml0Y291bnRyeSIsIl9ORlRfQ0hBSU5fR1JPVVAiLCJrYXJ1cmEiLCJybXJrIiwic3RhdGVtaW50IiwidW5pcXVlX25ldHdvcmsiLCJ2YXJhIiwia2lsdCIsIm5vbWluYXRpb25Qb29sIiwidGVybm9hIiwiYWxlcGhUZXN0Iiwid2VzdGVuZCIsImh5ZHJhZHgiLCJkZWZhdWx0IiwibW9vbmJlYW0iLCJtb29ucml2ZXIiLCJtb29uYmFzZSIsInR1cmluZ1N0YWdpbmciLCJzaGlkZW4iLCJzaGlidXlhIiwiYmlmcm9zdF90ZXN0bmV0IiwiY2FsYW1hcmkiLCJjYWxhbWFyaV90ZXN0IiwiYW1wbGl0dWRlX3Rlc3QiLCJwZW5kdWx1bSIsImtpbHRfcGVyZWdyaW5lIiwiZWRnZXdhcmUiLCJrYXRlIiwiY3JlZGl0Y29pbiIsInZhcmFfbmV0d29yayIsIl9QQVJBQ0hBSU5fSU5GTEFUSU9OX0RJU1RSSUJVVElPTiIsInJld2FyZCIsImNvbGxhdG9yQ29tbWlzc2lvbiIsImJvbmRSZXNlcnZlIiwiX0FMRVBIX0RFRkFVTFRfVU5JRk9STV9FUkFfUEFZT1VUX1BBUkFNUyIsImRvY2tfcG9zIiwibmVhdGNvaW4iLCJuZnRfbWFydCIsIl9UUkFOU0ZFUl9OT1RfU1VQUE9SVEVEX0NIQUlOUyIsIl9UUkFOU0ZFUl9DSEFJTl9HUk9VUCIsInJpb2NoYWluIiwic29yYV9zdWJzdHJhdGUiLCJfQkFMQU5DRV9QQVJTSU5HX0NIQUlOX0dST1VQIiwiYm9iYWJlYW0iLCJfTUFOVEFfWktfQ0hBSU5fR1JPVVAiLCJfWktfQVNTRVRfUFJFRklYIiwiX0RFRkFVTFRfTUFOVEFfWktfQ0hBSU4iLCJfWENNX0NIQUlOX0dST1VQIiwicG9sa2Fkb3RYY20iLCJ4Y21QYWxsZXQiLCJfWENNX1RZUEUiLCJSUCIsIlJFTEFZQ0hBSU4iLCJQQVJBQ0hBSU4iLCJQUCIsIlBSIiwiX0RFRkFVTFRfQUNUSVZFX0NIQUlOUyIsIkVWTV9QQVNTX0NPTk5FQ1RfU1RBVFVTIiwiRVZNX1JFRk9STUFUX0RFQ0lNQUxTIiwiVEFSR0VUX0JSQU5DSCIsIk5PREVfRU5WIiwiX0NIQUlOX0lORk9fU1JDIiwiX0NIQUlOX0FTU0VUX1NSQyIsIl9BU1NFVF9SRUZfU1JDIiwiX01VTFRJX0NIQUlOX0FTU0VUX1NSQyIsIl9DSEFJTl9MT0dPX01BUF9TUkMiLCJfQVNTRVRfTE9HT19NQVBfU1JDIiwiX0NIQUlOX1ZBTElEQVRJT05fRVJST1IiLCJfQXNzZXRUeXBlIiwiX0NoYWluQ29ubmVjdGlvblN0YXR1cyIsIl9DVVNUT01fUFJFRklYIiwiX0ZVTkdJQkxFX0NPTlRSQUNUX1NUQU5EQVJEUyIsIkVSQzIwIiwiUFNQMjIiLCJfTkZUX0NPTlRSQUNUX1NUQU5EQVJEUyIsIlBTUDM0IiwiRVJDNzIxIiwiX1NNQVJUX0NPTlRSQUNUX1NUQU5EQVJEUyIsIl9Bc3NldFJlZlBhdGgiLCJfaXNDdXN0b21DaGFpbiIsIl9pc0N1c3RvbUFzc2V0IiwiX2dldEN1c3RvbUFzc2V0cyIsImFzc2V0UmVnaXN0cnkiLCJmaWx0ZXJlZEFzc2V0TWFwIiwiT2JqZWN0IiwidmFsdWVzIiwiY2hhaW5Bc3NldCIsIl9pc0VxdWFsQ29udHJhY3RBZGRyZXNzIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsIl9pc0VxdWFsU21hcnRDb250cmFjdEFzc2V0IiwiYXNzZXQxIiwiYXNzZXQyIiwiY29udHJhY3QxIiwibWV0YWRhdGEiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdDIiLCJhc3NldFR5cGUiLCJvcmlnaW5DaGFpbiIsIl9pc1B1cmVFdm1DaGFpbiIsImV2bUluZm8iLCJzdWJzdHJhdGVJbmZvIiwiX2lzUHVyZVN1YnN0cmF0ZUNoYWluIiwiX2dldE9yaWdpbkNoYWluT2ZBc3NldCIsImFzc2V0U2x1ZyIsImFyciIsImVuZCIsImZpbmRJbmRleCIsInN0ciIsImpvaW4iLCJfZ2V0Q29udHJhY3RBZGRyZXNzT2ZUb2tlbiIsIl9pc1Rva2VuVHJhbnNmZXJyZWRCeUV2bSIsIl9pc05hdGl2ZVRva2VuIiwiX2NoZWNrU21hcnRDb250cmFjdFN1cHBvcnRCeUNoYWluIiwiY29udHJhY3RUeXBlIiwic3VwcG9ydFNtYXJ0Q29udHJhY3QiLCJfZ2V0VG9rZW5PbkNoYWluQXNzZXRJZCIsImFzc2V0SWQiLCJfZ2V0VG9rZW5PbkNoYWluSW5mbyIsIm9uQ2hhaW5JbmZvIiwiX2dldFRva2VuTWluQW1vdW50IiwibWluQW1vdW50IiwiX2lzQ2hhaW5Fdm1Db21wYXRpYmxlIiwiTkFUSVZFIiwiX2lzTmF0aXZlVG9rZW5CeVNsdWciLCJ0b2tlblNsdWciLCJfaXNTbWFydENvbnRyYWN0VG9rZW4iLCJfaXNTdWJzdHJhdGVDaGFpbiIsIl9nZXRFdm1DaGFpbklkIiwiZXZtQ2hhaW5JZCIsIl9nZXRTdWJzdHJhdGVQYXJhSWQiLCJwYXJhSWQiLCJfZ2V0U3Vic3RyYXRlUmVsYXlQYXJlbnQiLCJyZWxheVNsdWciLCJfZ2V0U3Vic3RyYXRlR2VuZXNpc0hhc2giLCJnZW5lc2lzSGFzaCIsIl9pc0NoYWluU3VwcG9ydFN1YnN0cmF0ZVN0YWtpbmciLCJzdXBwb3J0U3Rha2luZyIsIl9pc0NoYWluRW5hYmxlZCIsImNoYWluU3RhdGUiLCJhY3RpdmUiLCJfZ2V0Q2hhaW5TdWJzdHJhdGVBZGRyZXNzUHJlZml4IiwiYWRkcmVzc1ByZWZpeCIsIl9pc0NoYWluU3VwcG9ydE5hdGl2ZU5mdCIsImhhc05hdGl2ZU5mdCIsIl9pc0NoYWluU3VwcG9ydEV2bU5mdCIsIl9pc0NoYWluU3VwcG9ydFdhc21OZnQiLCJfZ2V0TmZ0VHlwZXNTdXBwb3J0ZWRCeUNoYWluIiwiX2dldFRva2VuVHlwZXNTdXBwb3J0ZWRCeUNoYWluIiwiX2dldENoYWluTmF0aXZlVG9rZW5TbHVnIiwiX2lzTG9jYWxUb2tlbiIsIkxPQ0FMIiwiX2lzVG9rZW5Fdm1TbWFydENvbnRyYWN0IiwiX2lzVG9rZW5XYXNtU21hcnRDb250cmFjdCIsIl9pc0Fzc2V0U21hcnRDb250cmFjdE5mdCIsImFzc2V0SW5mbyIsIl9wYXJzZUFzc2V0UmVmS2V5Iiwib3JpZ2luVG9rZW5TbHVnIiwiZGVzdGluYXRpb25Ub2tlblNsdWciLCJfaXNYY21QYXRoU3VwcG9ydGVkIiwiYXNzZXRSZWZNYXAiLCJhc3NldFJlZiIsInBhdGgiLCJYQ00iLCJfZ2V0WGNtQXNzZXRUeXBlIiwiX2dldFhjbUFzc2V0SWQiLCJfZ2V0WGNtQXNzZXRNdWx0aWxvY2F0aW9uIiwibXVsdGlsb2NhdGlvbiIsIl9nZXRYY21UcmFuc2ZlclR5cGUiLCJvcmlnaW5DaGFpbkluZm8iLCJkZXN0aW5hdGlvbkNoYWluSW5mbyIsImNoYWluVHlwZSIsIl9pc1N1YnN0cmF0ZVJlbGF5Q2hhaW4iLCJfaXNTdWJzdHJhdGVQYXJhQ2hhaW4iLCJfZ2V0RXZtQWJpRXhwbG9yZXIiLCJhYmlFeHBsb3JlciIsIl9pc0Fzc2V0VmFsdWFibGUiLCJoYXNWYWx1ZSIsIl9nZXRNdWx0aUNoYWluQXNzZXQiLCJtdWx0aUNoYWluQXNzZXQiLCJfZ2V0QXNzZXRQcmljZUlkIiwicHJpY2VJZCIsIl9nZXRNdWx0aUNoYWluQXNzZXRQcmljZUlkIiwiX2dldEFzc2V0U3ltYm9sIiwiX2dldE11bHRpQ2hhaW5Bc3NldFN5bWJvbCIsIl9nZXRBc3NldE9yaWdpbkNoYWluIiwiX2dldENoYWluTmFtZSIsIl9nZXRBc3NldERlY2ltYWxzIiwiX2dldEJsb2NrRXhwbG9yZXJGcm9tQ2hhaW4iLCJibG9ja0V4cGxvcmVyIiwiZW5kc1dpdGgiLCJfcGFyc2VNZXRhZGF0YUZvclNtYXJ0Q29udHJhY3RBc3NldCIsIl9pc0NoYWluVGVzdE5ldCIsImlzVGVzdG5ldCIsIl9pc0Fzc2V0RnVuZ2libGVUb2tlbiIsIlVOS05PV04iLCJfZ2V0Q3Jvd2Rsb2FuVXJsRnJvbUNoYWluIiwiY3Jvd2Rsb2FuVXJsIiwiX2lzQ3VzdG9tUHJvdmlkZXIiLCJwcm92aWRlcktleSIsIl9nZW5lcmF0ZUN1c3RvbVByb3ZpZGVyS2V5IiwiZmluZENoYWluSW5mb0J5SGFsZkdlbmVzaXNIYXNoIiwiY2hhaW5NYXAiLCJoYWxmR2VuZXNpc0hhc2giLCJzdWJzdHJpbmciLCJmaW5kQ2hhaW5JbmZvQnlDaGFpbklkIiwiX2lzTWFudGFaa0Fzc2V0IiwiVEFSR0VUX0VOViIsIkRFRkFVTFRfVEhFTUUiLCJEQVJLIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRSIsIkRFRkFVTFRfQVVUT19MT0NLX1RJTUUiLCJERUZBVUxUX1VOTE9DS19UWVBFIiwiQUxXQVlTX1JFUVVJUkVEIiwiV0hFTl9ORUVERUQiLCJERUZBVUxUX0NIQUlOX1BBVFJPTF9FTkFCTEUiLCJERUZBVUxUX0xBTkdVQUdFIiwiREVGQVVMVF9TSE9XX1pFUk9fQkFMQU5DRSIsIkRFRkFVTFRfU0hPV19CQUxBTkNFIiwiREVGQVVMVF9BTExfTE9HTyIsIkRFRkFVTFRfQ0FNRVJBX0VOQUJMRSIsIkRFRkFVTFRfU0VUVElORyIsImxhbmd1YWdlIiwiYnJvd3NlckNvbmZpcm1hdGlvblR5cGUiLCJpc1Nob3daZXJvQmFsYW5jZSIsImlzU2hvd0JhbGFuY2UiLCJhY2NvdW50QWxsTG9nbyIsInVubG9ja1R5cGUiLCJjYW1lcmEiLCJ0aW1lQXV0b0xvY2siLCJlbmFibGVDaGFpblBhdHJvbCIsIndhbGxldFJlZmVyZW5jZSIsIkVJUDE1NV9TSUdOSU5HX01FVEhPRFMiLCJQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMiLCJpc01vYmlsZSIsIlBST0pFQ1RfSURfRVhURU5TSU9OIiwiUFJPSkVDVF9JRF9NT0JJTEUiLCJSRUxBWV9VUkwiLCJERUZBVUxUX1dBTExFVF9DT05ORUNUX09QVElPTlMiLCJsb2dnZXIiLCJwcm9qZWN0SWQiLCJyZWxheVVybCIsImRlc2NyaXB0aW9uIiwidXJsIiwiaWNvbnMiLCJBTExfV0FMTEVUX0NPTk5FQ1RfRVZFTlQiLCJXQUxMRVRfQ09OTkVDVF9TVVBQT1JURURfTUVUSE9EUyIsIlBPTEtBRE9UX1NJR05fTUVTU0FHRSIsIlBPTEtBRE9UX1NJR05fVFJBTlNBQ1RJT04iLCJFVEhfU0VORF9UUkFOU0FDVElPTiIsIlBFUlNPTkFMX1NJR04iLCJFVEhfU0lHTl9UWVBFRF9EQVRBX1YxIiwiRVRIX1NJR05fVFlQRURfREFUQV9WMyIsIkVUSF9TSUdOX1RZUEVEX0RBVEFfVjQiLCJXQUxMRVRfQ09OTkVDVF9SRVFVRVNUX0tFWSIsIldBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UiLCJXQUxMRVRfQ09OTkVDVF9QT0xLQURPVF9OQU1FU1BBQ0UiLCJXQUxMRVRfQ09OTkVDVF9TVVBQT1JUX05BTUVTUEFDRVMiLCJnZXRXQ0lkIiwiRGF0ZSIsIm5vdyIsImNvbnZlcnRDb25uZWN0UmVxdWVzdCIsInJlcXVlc3QiLCJpc0ludGVybmFsIiwicGFyYW1zIiwicHJvcG9zZXIiLCJjb252ZXJ0Tm90U3VwcG9ydFJlcXVlc3QiLCJwYXJzZVJlcXVlc3RQYXJhbXMiLCJnZXRFaXAxNTVNZXNzYWdlQWRkcmVzcyIsInBhcmFtIiwiRVRIX1NJR05fVFlQRURfREFUQSIsIkVUSF9TSUdOIiwicDEiLCJwMiIsImlzV2FsbGV0Q29ubmVjdFJlcXVlc3QiLCJwcmVmaXgiLCJpc1Byb3Bvc2FsRXhwaXJlZCIsInRpbWVOdW0iLCJleHBpcnkiLCJleHBpcmVUaW1lIiwiZ2V0VGltZSIsImlzU3VwcG9ydFdhbGxldENvbm5lY3ROYW1lc3BhY2UiLCJuYW1lc3BhY2UiLCJpc1N1cHBvcnRXYWxsZXRDb25uZWN0Q2hhaW4iLCJjaGFpbkluZm9NYXAiLCJ1bmlxdWVTdHJpbmdBcnJheSIsImFycmF5IiwidiIsImtleXMiLCJjYW5EZXJpdmUiLCJkZXRlY3RSdW50aW1lRW52aXJvbm1lbnQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImVudmlyb25tZW50IiwiV2ViIiwidmVyc2lvbiIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhvc3QiLCJsb2NhdGlvbiIsInByb3RvY29sIiwic2VsZiIsImltcG9ydFNjcmlwdHMiLCJTZXJ2aWNlV29ya2VyIiwidmVyc2lvbnMiLCJub2RlIiwiTm9kZSIsImNocm9tZSIsInJ1bnRpbWUiLCJFeHRlbnNpb25DaHJvbWUiLCJnZXRNYW5pZmVzdCIsImJyb3dzZXIiLCJFeHRlbnNpb25GaXJlZm94IiwiV29ya2VyR2xvYmFsU2NvcGUiLCJXZWJXb3JrZXIiLCJVbmtub3duIiwiUnVudGltZUluZm8iLCJnZXRPUyIsInBsYXRmb3JtIiwidXNlckFnZW50RGF0YSIsIm1hY29zUGxhdGZvcm1zIiwid2luZG93c1BsYXRmb3JtcyIsImlvc1BsYXRmb3JtcyIsIm9zIiwiaW5kZXhPZiIsInRlc3QiLCJNT0RVTEVfU1VQUE9SVCIsIk1BTlRBX1pLIiwiQmlnTiIsImV0aGVycyIsImhleFN0cmlwUHJlZml4IiwibnVtYmVyVG9IZXgiLCJoZXhUb051bWJlclN0cmluZyIsInMiLCJ0ZW1wIiwiaXNOYU4iLCJUcmFuc2FjdGlvbiIsImNvbnN0cnVjdG9yIiwibm9uY2UiLCJnYXNQcmljZSIsImdhcyIsInRvIiwidmFsdWUiLCJldGhlcmV1bUNoYWluSWQiLCJpc1NhZmUiLCJhbnlOdW1iZXJUb0JOIiwiY3JlYXRlVHJhbnNhY3Rpb25Gcm9tUkxQIiwicmxwIiwidHJhbnNhY3Rpb24iLCJmcm9tIiwiZ2FzTGltaXQiLCJlIiwibG9nIiwic2lnbmF0dXJlVG9IZXgiLCJzaWciLCJyIiwiaGV4UiIsImhleFMiLCJoZXhWIiwiYXNzZXJ0IiwiaGV4VG9VOGEiLCJpc0hleCIsImRlY29kZUFkZHJlc3MiLCJlbmNvZGVBZGRyZXNzIiwiZXRoZXJldW1FbmNvZGUiLCJub3REZWYiLCJ4IiwiaXNEZWYiLCJub25FbXB0eUFyciIsIkFycmF5IiwiaXNBcnJheSIsImlzRW1wdHlBcnJheSIsImlzQWNjb3VudEFsbCIsIm5ldHdvcmtQcmVmaXgiLCJpc0V0aGVyZXVtIiwicHVibGljS2V5Iiwid2FybiIsImZpbHRlckFkZHJlc3NCeU5ldHdvcmtLZXkiLCJhZGRyZXNzZXMiLCJmaWx0ZXIiLCJjYXRlZ29yeUFkZHJlc3NlcyIsInN1YnN0cmF0ZUFkZHJlc3NlcyIsImV2bUFkZHJlc3NlcyIsImNhdGVnb3J5TmV0d29ya3MiLCJuZXR3b3JrcyIsImNvbnZlcnRUb0V2bUFkZHJlc3MiLCJzdWJzdHJhdGVBZGRyZXNzIiwiYWRkcmVzc0J5dGVzIiwiQnVmZmVyIiwic3ViYXJyYXkiLCJ0YXJnZXRTdHJpbmciLCJVUkwiLCJfIiwiaW5KZXN0VGVzdCIsIkpFU1RfV09SS0VSX0lEIiwicGFyc2VJcGZzTGluayIsImlwZnNMaW5rIiwiaGV4VG9TdHIiLCJidWYiLCJoZXhTdGFydCIsInN0ckxlbiIsImNoIiwibnVtIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwidXRmMTZUb1N0cmluZyIsInVJbnQxNkFycmF5IiwiaGV4VG9VVEYxNiIsImhleCIsImlzVmFsaWRTdWJzdHJhdGVBZGRyZXNzIiwidG9Vbml0IiwiYmFsYW5jZSIsInN1bUJOIiwiaW5wdXRBcnIiLCJycyIsImNvbnZlcnRGdW5kU3RhdHVzIiwiQ09NUExFVEVEIiwiT05HT0lORyIsIkZBSUxFRCIsImlzQWRkcmVzc2VzRXF1YWwiLCJwcmV2QWRkcmVzc2VzIiwiaXNWYWxpZFByb3ZpZGVyIiwicHJvdmlkZXIiLCJnZXRDdXJyZW50UHJvdmlkZXIiLCJjdXJyZW50UHJvdmlkZXIiLCJjdXN0b21Qcm92aWRlcnMiLCJwcm92aWRlcnMiLCJnZXROZnRQcm92aWRlciIsIm5mdFByb3ZpZGVyIiwibWVyZ2VOZXR3b3JrUHJvdmlkZXJzIiwiY3VzdG9tTmV0d29yayIsInByZWRlZmluZWROZXR3b3JrIiwicGFyc2VkQ3VzdG9tUHJvdmlkZXJzIiwiY3VycmVudFByb3ZpZGVyTWV0aG9kIiwicGFyc2VkUHJvdmlkZXJLZXkiLCJjdXN0b21Qcm92aWRlciIsImV4aXN0Iiwia2V5IiwicGFyc2VkUHJvdmlkZXIiLCJmaWx0ZXJBbmRTb3J0aW5nQWNjb3VudEJ5QXV0aFR5cGUiLCJhY2NvdW50cyIsImFjY291bnRBdXRoVHlwZSIsInNvcnRpbmciLCJhY2MiLCJzb3J0IiwiYWNjMiIsImlzU2FtZUFkZHJlc3MiLCJnZXREb21haW5Gcm9tVXJsIiwid2FpdFRpbWVvdXQiLCJtcyIsInN0cmlwVXJsIiwicGFydHMiLCJsYXp5TWFwIiwicmVtb3ZlTGF6eSIsImFkZExhenkiLCJsYXp5VGltZSIsIm1heExhenlUaW1lIiwiZmlyZU9uRmlyc3QiLCJleGlzdGVkIiwibGFzdEZpcmUiLCJCaWdOdW1iZXIiLCJCTl9URU4iLCJjbGVhclplcm8iLCJOVU1fMVQiLCJUTElNIiwiTlVNXzFCIiwiQkxJTSIsIk5VTV8xTSIsIk5VTV8xMDBNIiwiYWJzR3RlT25lIiwiYWJzIiwibWluTnVtYmVyRm9ybWF0IiwibWF4TnVtYmVyRm9ybWF0IiwiaW50IiwiZGVjaW1hbCIsIl9kZWNpbWFsIiwiaW50TnVtYmVyIiwiZGl2aWRlZEJ5IiwidG9GaXhlZCIsImN1cnJlbnQiLCJtZXROb3RaZXJvIiwiX2NoYXIiLCJQUkVERUZJTkVEX0ZPUk1BVFRFUiIsInRvQk5TdHJpbmciLCJyYXciLCJtdWx0aXBsaWVkQnkiLCJmb3JtYXR0ZXIiLCJNZXRhZGF0YSIsIlR5cGVSZWdpc3RyeSIsImNyZWF0ZVJlZ2lzdHJ5IiwicmF3TWV0YWRhdGEiLCJzZXRNZXRhZGF0YSIsInNldENoYWluUHJvcGVydGllcyIsInNzNThGb3JtYXQiLCJ0b2tlbkRlY2ltYWxzIiwiVThBX1dSQVBfRVRIRVJFVU0iLCJVOEFfV1JBUF9QT1NURklYIiwiVThBX1dSQVBfUFJFRklYIiwidThhSXNXcmFwcGVkIiwidThhVW53cmFwQnl0ZXMiLCJ1OGFXcmFwQnl0ZXMiLCJFVEhFUkVVTSIsIlBPU1RGSVgiLCJQUkVGSVgiLCJpc1dyYXBwZWQiLCJ1bndyYXBCeXRlcyIsIndyYXBCeXRlcyIsImV4cG9zZUdsb2JhbCIsInhnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9