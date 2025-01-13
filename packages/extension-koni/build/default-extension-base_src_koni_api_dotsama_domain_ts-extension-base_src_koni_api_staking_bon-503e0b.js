((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-base_src_koni_api_dotsama_domain_ts-extension-base_src_koni_api_staking_bon-503e0b"],{

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

/***/ "../extension-base/src/services/chain-service/custom-tokens/ChainLogoMap.ts":
/*!**********************************************************************************!*\
  !*** ../extension-base/src/services/chain-service/custom-tokens/ChainLogoMap.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChainLogoMap": () => (/* binding */ ChainLogoMap)
/* harmony export */ });
const ChainLogoMap = {
  "default": "https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/aigent-logo.png",
  "kusama": "https://chain-list-assets.subwallet.app/assets/chains/kusama.png",
  "aigent": "https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/aigent-logo.png"
};

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

/***/ "../extension-base/src/services/transaction-service/utils.ts":
/*!*******************************************************************!*\
  !*** ../extension-base/src/services/transaction-service/utils.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getExplorerLink": () => (/* binding */ getExplorerLink),
/* harmony export */   "parseTransactionData": () => (/* binding */ parseTransactionData)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0



// @ts-ignore
function parseTransactionData(data) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
}
function getBlockExplorerAccountRoute(explorerLink) {
  if (explorerLink.includes('explorer.subspace.network')) {
    return 'accounts';
  }
  if (explorerLink.includes('deeperscan.io')) {
    return 'account';
  }
  if (explorerLink.includes('subscan.io')) {
    return 'account';
  }
  return 'address';
}
function getBlockExplorerTxRoute(chainInfo) {
  if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_0__._isPureEvmChain)(chainInfo)) {
    return 'tx';
  }
  if (['aventus', 'deeper_network'].includes(chainInfo.slug)) {
    return 'transaction';
  }
  return 'extrinsic';
}
function getExplorerLink(chainInfo, value, type) {
  const explorerLink = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_0__._getBlockExplorerFromChain)(chainInfo);
  if (explorerLink && type === 'account') {
    const route = getBlockExplorerAccountRoute(explorerLink);
    return `${explorerLink}${explorerLink.endsWith('/') ? '' : '/'}${route}/${value}`;
  }
  if (explorerLink && value.startsWith('0x')) {
    const route = getBlockExplorerTxRoute(chainInfo);
    return `${explorerLink}${explorerLink.endsWith('/') ? '' : '/'}${route}/${value}`;
  }
  return undefined;
}

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

/***/ "../extension-base/src/utils/promise.ts":
/*!**********************************************!*\
  !*** ../extension-base/src/utils/promise.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPromiseHandler": () => (/* binding */ createPromiseHandler)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

function createPromiseHandler() {
  let _resolve = () => {
    console.warn('This promise handler is not implemented');
  };
  let _reject = () => {
    console.warn('This promise handler is not implemented');
  };
  const promise = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });
  return {
    resolve: _resolve,
    reject: _reject,
    promise
  };
}

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

/***/ "../extension-chains/src/bundle.ts":
/*!*****************************************!*\
  !*** ../extension-chains/src/bundle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMetadata": () => (/* binding */ addMetadata),
/* harmony export */   "findChain": () => (/* binding */ findChain),
/* harmony export */   "knownMetadata": () => (/* binding */ knownMetadata),
/* harmony export */   "metadataExpand": () => (/* binding */ metadataExpand),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo__WEBPACK_IMPORTED_MODULE_0__.packageInfo)
/* harmony export */ });
/* harmony import */ var _polkadot_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/types */ "../../node_modules/@polkadot/types/create/registry.js");
/* harmony import */ var _polkadot_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/types */ "../../node_modules/@polkadot/types/metadata/Metadata.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/base64/bs64.js");
/* harmony import */ var _packageInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo */ "../extension-chains/src/packageInfo.ts");
// Copyright 2019-2022 @polkadot/extension-chains authors & contributors
// SPDX-License-Identifier: Apache-2.0





// imports chain details, generally metadata. For the generation of these,
// inside the api, run `yarn chain:info --ws <url>`

const definitions = new Map(
  // [kusama].map((def) => [def.genesisHash, def])
);
const expanded = new Map();
function metadataExpand(definition, isPartial = false) {
  const cached = expanded.get(definition.genesisHash);
  if (cached && cached.specVersion === definition.specVersion) {
    return cached;
  }
  const {
    chain,
    genesisHash,
    icon,
    metaCalls,
    specVersion,
    ss58Format,
    tokenDecimals,
    tokenSymbol,
    types,
    userExtensions
  } = definition;
  const registry = new _polkadot_types__WEBPACK_IMPORTED_MODULE_1__.TypeRegistry();
  if (!isPartial) {
    registry.register(types);
  }
  registry.setChainProperties(registry.createType('ChainProperties', {
    ss58Format,
    tokenDecimals,
    tokenSymbol
  }));
  const hasMetadata = !!metaCalls && !isPartial;
  if (hasMetadata) {
    registry.setMetadata(new _polkadot_types__WEBPACK_IMPORTED_MODULE_2__.Metadata(registry, (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_3__.base64Decode)(metaCalls)), undefined, userExtensions);
  }
  const isUnknown = genesisHash === '0x';
  const result = {
    definition,
    genesisHash: isUnknown ? undefined : genesisHash,
    hasMetadata,
    icon: icon || 'substrate',
    isUnknown,
    name: chain,
    registry,
    specVersion,
    ss58Format,
    tokenDecimals,
    tokenSymbol
  };
  if (result.genesisHash && !isPartial) {
    expanded.set(result.genesisHash, result);
  }
  return result;
}
function findChain(definitions, genesisHash) {
  const def = definitions.find(def => def.genesisHash === genesisHash);
  return def ? metadataExpand(def) : null;
}
function addMetadata(def) {
  definitions.set(def.genesisHash, def);
}
function knownMetadata() {
  return [...definitions.values()];
}

/***/ }),

/***/ "../extension-chains/src/packageInfo.ts":
/*!**********************************************!*\
  !*** ../extension-chains/src/packageInfo.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
// Copyright 2017-2022 @subwallet/extension-chains authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Do not edit, auto-generated by @polkadot/dev

const packageInfo = {
  name: '@subwallet/extension-chains',
  path: 'auto',
  type: 'auto',
  version: '1.1.17-0'
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24tYmFzZV9zcmNfa29uaV9hcGlfZG90c2FtYV9kb21haW5fdHMtZXh0ZW5zaW9uLWJhc2Vfc3JjX2tvbmlfYXBpX3N0YWtpbmdfYm9uLTUwM2UwYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBMEJPLElBQUtBLGtCQUFrQjtBQVE3QixXQVJXQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtBQUFBLEdBQWxCQSxrQkFBa0IsS0FBbEJBLGtCQUFrQjtBQXVHOUI7O0FBRU8sSUFBS0MsV0FBVztBQUd0QixXQUhXQSxXQUFXO0VBQVhBLFdBQVc7RUFBWEEsV0FBVztBQUFBLEdBQVhBLFdBQVcsS0FBWEEsV0FBVztBQThEaEIsSUFBS0MsWUFBWTtBQU12QixXQU5XQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtFQUFaQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtBQUFBLEdBQVpBLFlBQVksS0FBWkEsWUFBWTtBQVFqQixJQUFLQyxRQUFRO0FBR25CLFdBSFdBLFFBQVE7RUFBUkEsUUFBUTtFQUFSQSxRQUFRO0FBQUEsR0FBUkEsUUFBUSxLQUFSQSxRQUFRO0FBS2IsSUFBS0Msa0JBQWtCO0FBSTdCLFdBSldBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtBQUFBLEdBQWxCQSxrQkFBa0IsS0FBbEJBLGtCQUFrQjtBQWlHdkIsSUFBS0MsWUFBWTtBQUd2QixXQUhXQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtBQUFBLEdBQVpBLFlBQVksS0FBWkEsWUFBWTtBQXVIakIsSUFBS0MsZ0JBQWdCO0FBRzNCLFdBSFdBLGdCQUFnQjtFQUFoQkEsZ0JBQWdCO0VB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bkg7QUFDQTs7QUFFa0k7QUFFM0gsTUFBTTJPLFFBQVEsR0FBR04sNkRBQWlCO0FBQ2xDLE1BQU1PLE9BQU8sR0FBR04sNERBQWdCO0FBQ2hDLE1BQU1PLE1BQU0sR0FBR04sMkRBQWU7QUFFOUIsTUFBTU8sU0FBUyxHQUFHTix3REFBWTtBQUM5QixNQUFNTyxXQUFXLEdBQUdOLDBEQUFjO0FBQ2xDLE1BQU1PLFNBQVMsR0FBR04sd0RBQVk7Ozs7Ozs7Ozs7Ozs7QUNYckM7QUFDQTs7QUFFMkQ7QUFFM0RPLGdFQUFZLENBQUMsUUFBUSxFQUFFQywrREFBZSxDQUFDOzs7Ozs7Ozs7O0FDTHZDOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL2JhY2tncm91bmQvS29uaVR5cGVzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9jb25zdGFudHMvc3Rha2luZy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9jb25zdGFudHMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9rb25pL2FwaS9kb3RzYW1hL2RvbWFpbi50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9rb25pL2FwaS9zdGFraW5nL2JvbmRpbmcvYXN0YXIudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMva29uaS9hcGkvc3Rha2luZy9ib25kaW5nL3V0aWxzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvY3VzdG9tLXRva2Vucy9DaGFpbkxvZ29NYXAudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvY2hhaW4tc2VydmljZS9oYW5kbGVyL3R5cGVzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy9zZXR0aW5nLXNlcnZpY2UvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvd2FsbGV0LWNvbm5lY3Qtc2VydmljZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvd2FsbGV0LWNvbm5lY3Qtc2VydmljZS9oZWxwZXJzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL3dhbGxldC1jb25uZWN0LXNlcnZpY2UvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvYXJyYXkudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvY2FuRGVyaXZlLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL2V0aC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9nZXRJZC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9sYXp5LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL251bWJlci50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9wcm9taXNlLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL3JlZ2lzdHJ5LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL3RyYW5zbGF0ZS50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1jaGFpbnMvc3JjL2J1bmRsZS50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1jaGFpbnMvc3JjL3BhY2thZ2VJbmZvLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWRhcHAvc3JjL3dyYXBCeXRlcy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1pbmplY3Qvc3JjL2Nyb3NzZW52LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvaWdub3JlZHxDOlxcVXNlcnNcXHNoYXJtXFxEb3dubG9hZHNcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXG5vZGVfbW9kdWxlc1xcQHN0YWJsZWxpYlxccmFuZG9tXFxsaWJcXHNvdXJjZXxjcnlwdG8iLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS9pZ25vcmVkfEM6XFxVc2Vyc1xcc2hhcm1cXERvd25sb2Fkc1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pL2lnbm9yZWR8QzpcXFVzZXJzXFxzaGFybVxcRG93bmxvYWRzXFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxub2RlX21vZHVsZXNcXGV0aGVyc1xcbm9kZV9tb2R1bGVzXFxAbm9ibGVcXHNlY3AyNTZrMVxcbGliXFxlc218Y3J5cHRvIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9Bc3NldFJlZiwgX0Fzc2V0VHlwZSwgX0NoYWluQXNzZXQsIF9DaGFpbkluZm8sIF9NdWx0aUNoYWluQXNzZXQgfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25FcnJvciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9lcnJvcnMvVHJhbnNhY3Rpb25FcnJvcic7XG5pbXBvcnQgeyBBdXRoVXJscywgUmVzb2x2ZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvaGFuZGxlcnMvU3RhdGUnO1xuaW1wb3J0IHsgQWNjb3VudEF1dGhUeXBlLCBBY2NvdW50SnNvbiwgQWRkcmVzc0pzb24sIEF1dGhvcml6ZVJlcXVlc3QsIENvbmZpcm1hdGlvblJlcXVlc3RCYXNlLCBSZXF1ZXN0QWNjb3VudExpc3QsIFJlcXVlc3RBY2NvdW50U3Vic2NyaWJlLCBSZXF1ZXN0QWNjb3VudFVuc3Vic2NyaWJlLCBSZXF1ZXN0QXV0aG9yaXplQ2FuY2VsLCBSZXF1ZXN0QXV0aG9yaXplUmVqZWN0LCBSZXF1ZXN0QXV0aG9yaXplU3Vic2NyaWJlLCBSZXF1ZXN0QXV0aG9yaXplVGFiLCBSZXF1ZXN0Q3VycmVudEFjY291bnRBZGRyZXNzLCBSZXNwb25zZUF1dGhvcml6ZUxpc3QsIFJlc3BvbnNlSnNvbkdldEFjY291bnRJbmZvLCBTZWVkTGVuZ3RocyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS9oYW5kbGVyL3R5cGVzJztcbmltcG9ydCB7IF9DaGFpblN0YXRlLCBfRXZtQXBpLCBfTmV0d29ya1Vwc2VydFBhcmFtcywgX1N1YnN0cmF0ZUFwaSwgX1ZhbGlkYXRlQ3VzdG9tQXNzZXRSZXF1ZXN0LCBfVmFsaWRhdGVDdXN0b21Bc3NldFJlc3BvbnNlLCBFbmFibGVDaGFpblBhcmFtcywgRW5hYmxlTXVsdGlDaGFpblBhcmFtcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS90eXBlcyc7XG5pbXBvcnQgeyBTV1RyYW5zYWN0aW9uUmVzcG9uc2UsIFNXVHJhbnNhY3Rpb25SZXN1bHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnRSZXF1ZXN0LCBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3QgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3dhbGxldC1jb25uZWN0LXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0ZWRBY2NvdW50LCBJbmplY3RlZEFjY291bnRXaXRoTWV0YSwgTWV0YWRhdGFEZWZCYXNlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24taW5qZWN0L3R5cGVzJztcbmltcG9ydCB7IEtleXJpbmdQYWlyJEpzb24sIEtleXJpbmdQYWlyJE1ldGEgfSBmcm9tICdAc3Vid2FsbGV0L2tleXJpbmcvdHlwZXMnO1xuaW1wb3J0IHsgS2V5cmluZ09wdGlvbnMgfSBmcm9tICdAc3Vid2FsbGV0L3VpLWtleXJpbmcvb3B0aW9ucy90eXBlcyc7XG5pbXBvcnQgeyBLZXlyaW5nQWRkcmVzcywgS2V5cmluZ1BhaXJzJEpzb24gfSBmcm9tICdAc3Vid2FsbGV0L3VpLWtleXJpbmcvdHlwZXMnO1xuaW1wb3J0IHsgU2Vzc2lvblR5cGVzIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvdHlwZXMvZGlzdC90eXBlcy9zaWduLWNsaWVudC9zZXNzaW9uJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgUmVxdWVzdEFyZ3VtZW50cywgVHJhbnNhY3Rpb25Db25maWcgfSBmcm9tICd3ZWIzLWNvcmUnO1xuaW1wb3J0IHsgSnNvblJwY1BheWxvYWQsIEpzb25ScGNSZXNwb25zZSB9IGZyb20gJ3dlYjMtY29yZS1oZWxwZXJzJztcblxuaW1wb3J0IHsgU2lnbmVyUmVzdWx0IH0gZnJvbSAnQHBvbGthZG90L3R5cGVzL3R5cGVzL2V4dHJpbnNpYyc7XG5pbXBvcnQgeyBCTiB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbmltcG9ydCB7IEhleFN0cmluZyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsL3R5cGVzJztcbmltcG9ydCB7IEtleXBhaXJUeXBlIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvL3R5cGVzJztcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25XYXJuaW5nIH0gZnJvbSAnLi93YXJuaW5ncy9UcmFuc2FjdGlvbldhcm5pbmcnO1xuXG5leHBvcnQgZW51bSBSdW50aW1lRW52aXJvbm1lbnQge1xuICBXZWIgPSAnV2ViJyxcbiAgTm9kZSA9ICdOb2RlJyxcbiAgRXh0ZW5zaW9uQ2hyb21lID0gJ0V4dGVuc2lvbiAoQ2hyb21lKScsXG4gIEV4dGVuc2lvbkZpcmVmb3ggPSAnRXh0ZW5zaW9uIChGaXJlZm94KScsXG4gIFdlYldvcmtlciA9ICdXZWIgV29ya2VyJyxcbiAgU2VydmljZVdvcmtlciA9ICdTZXJ2aWNlIFdvcmtlcicsXG4gIFVua25vd24gPSAnVW5rbm93bicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnVudGltZUVudmlyb25tZW50SW5mbyB7XG4gIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQ7XG4gIHZlcnNpb246IHN0cmluZztcbiAgaG9zdD86IHN0cmluZztcbiAgcHJvdG9jb2w/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFRhcmdldEVudmlyb25tZW50ID0gJ2V4dGVuc2lvbicgfCAnd2ViYXBwJyB8ICd3ZWItcnVubmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBFbnZpcm9ubWVudFN1cHBvcnQge1xuICBNQU5UQV9aSzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlSW5mbyB7XG4gIGNoYWluSW5mb01hcDogUmVjb3JkPHN0cmluZywgX0NoYWluSW5mbz47XG4gIGNoYWluU3RhdGVNYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpblN0YXRlPjtcbiAgY2hhaW5BcGlNYXA6IEFwaU1hcDtcbiAgY3VycmVudEFjY291bnRJbmZvOiBDdXJyZW50QWNjb3VudEluZm87XG4gIGFzc2V0UmVnaXN0cnk6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkFzc2V0Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NldFNldHRpbmcge1xuICB2aXNpYmxlOiBib29sZWFuLFxuICAvLyByZXN0cmljdGlvbnMgb24gYXNzZXRzIGNhbiBiZSBpbXBsZW1lbnRlZCBsYXRlclxufVxuXG4vLy8gUmVxdWVzdCBBdXRoXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFJlcXVlc3RWMiBleHRlbmRzIFJlc29sdmVyPFJlc3VsdFJlc29sdmVyPiB7XG4gIGlkOiBzdHJpbmc7XG4gIGlkU3RyOiBzdHJpbmc7XG4gIHJlcXVlc3Q6IFJlcXVlc3RBdXRob3JpemVUYWI7XG4gIHVybDogc3RyaW5nO1xuICBhY2NvdW50QXV0aFR5cGU6IEFjY291bnRBdXRoVHlwZVxufVxuXG4vLy8gTWFuYWdlIEF1dGhcblxuLy8gR2V0IEF1dGhcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXplQXBwcm92ZVYyIHtcbiAgaWQ6IHN0cmluZztcbiAgYWNjb3VudHM6IHN0cmluZ1tdO1xufVxuXG4vLyBBdXRoIEFsbCBzaXRlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6YXRpb25BbGwge1xuICBjb25uZWN0VmFsdWU6IGJvb2xlYW47XG59XG5cbi8vIE1hbmFnZSBzaXRlIGF1dGggKGFsbCBhbGxvd2VkL3VuQWxsb3dlZClcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXphdGlvbiBleHRlbmRzIFJlcXVlc3RBdXRob3JpemF0aW9uQWxsIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbi8vIE1hbmFnZSBzaW5nbGUgYXV0aCB3aXRoIHNpbmdsZSBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6YXRpb25QZXJBY2NvdW50IGV4dGVuZHMgUmVxdWVzdEF1dGhvcml6YXRpb24ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbi8vIE1hbmFnZSBzaW5nbGUgc2l0ZSB3aXRoIG11bHRpIGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXphdGlvblBlclNpdGUge1xuICBpZDogc3RyaW5nO1xuICB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+O1xufVxuXG4vLyBNYW5hZ2Ugc2l0ZSBibG9ja1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBdXRob3JpemF0aW9uQmxvY2sge1xuICBpZDogc3RyaW5nO1xuICBjb25uZWN0ZWRWYWx1ZTogYm9vbGVhbjtcbn1cblxuLy8gRm9yZ2V0IHNpdGUgYXV0aFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RGb3JnZXRTaXRlIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0UmVzb2x2ZXIge1xuICByZXN1bHQ6IGJvb2xlYW47XG4gIGFjY291bnRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWplY3RSZXNvbHZlciB7XG4gIGVycm9yOiBFcnJvcjtcbiAgYWNjb3VudHM6IHN0cmluZ1tdO1xufVxuXG4vLy8gU3Rha2luZyBzdWJzY3JpYmVcblxuZXhwb3J0IGVudW0gU3Rha2luZ1R5cGUge1xuICBOT01JTkFURUQgPSAnbm9taW5hdGVkJyxcbiAgUE9PTEVEID0gJ3Bvb2xlZCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2luZ1Jld2FyZEl0ZW0ge1xuICBzdGF0ZTogQVBJSXRlbVN0YXRlLFxuICBuYW1lOiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgdHlwZTogU3Rha2luZ1R5cGUsXG5cbiAgbGF0ZXN0UmV3YXJkPzogc3RyaW5nLFxuICB0b3RhbFJld2FyZD86IHN0cmluZyxcbiAgdG90YWxTbGFzaD86IHN0cmluZyxcbiAgdW5jbGFpbWVkUmV3YXJkPzogc3RyaW5nXG59XG5leHBvcnQgaW50ZXJmYWNlIFVubG9ja2luZ1N0YWtlSW5mbyB7XG4gIGNoYWluOiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgdHlwZTogU3Rha2luZ1R5cGUsXG5cbiAgbmV4dFdpdGhkcmF3YWw6IG51bWJlcixcbiAgcmVkZWVtYWJsZTogbnVtYmVyLFxuICBuZXh0V2l0aGRyYXdhbEFtb3VudDogbnVtYmVyLFxuICBuZXh0V2l0aGRyYXdhbEFjdGlvbj86IHN0cmluZyxcbiAgdmFsaWRhdG9yQWRkcmVzcz86IHN0cmluZyAvLyB2YWxpZGF0b3IgdG8gdW5zdGFrZSBmcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2luZ0l0ZW0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgdHlwZTogU3Rha2luZ1R5cGUsXG5cbiAgYmFsYW5jZT86IHN0cmluZyxcbiAgYWN0aXZlQmFsYW5jZT86IHN0cmluZyxcbiAgdW5sb2NraW5nQmFsYW5jZT86IHN0cmluZyxcbiAgbmF0aXZlVG9rZW46IHN0cmluZyxcbiAgdW5pdD86IHN0cmluZyxcblxuICBzdGF0ZTogQVBJSXRlbVN0YXRlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2luZ0pzb24ge1xuICByZXNldD86IGJvb2xlYW4sXG4gIHJlYWR5PzogYm9vbGVhbixcbiAgZGV0YWlsczogU3Rha2luZ0l0ZW1bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtpbmdSZXdhcmRKc29uIHtcbiAgcmVhZHk6IGJvb2xlYW47XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIFN0YWtpbmdSZXdhcmRJdGVtPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmljZUpzb24ge1xuICByZWFkeT86IGJvb2xlYW4sXG4gIGN1cnJlbmN5OiBzdHJpbmcsXG4gIHByaWNlTWFwOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LFxuICBwcmljZTI0aE1hcDogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxufVxuXG5leHBvcnQgZW51bSBBUElJdGVtU3RhdGUge1xuICBQRU5ESU5HID0gJ3BlbmRpbmcnLFxuICBSRUFEWSA9ICdyZWFkeScsXG4gIENBQ0hFRCA9ICdjYWNoZWQnLFxuICBFUlJPUiA9ICdlcnJvcicsXG4gIE5PVF9TVVBQT1JUID0gJ25vdF9zdXBwb3J0J1xufVxuXG5leHBvcnQgZW51bSBSTVJLX1ZFUiB7XG4gIFZFUl8xID0gJzEuMC4wJyxcbiAgVkVSXzIgPSAnMi4wLjAnXG59XG5cbmV4cG9ydCBlbnVtIENyb3dkbG9hblBhcmFTdGF0ZSB7XG4gIE9OR09JTkcgPSAnb25nb2luZycsXG4gIENPTVBMRVRFRCA9ICdjb21wbGV0ZWQnLFxuICBGQUlMRUQgPSAnZmFpbGVkJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdEl0ZW0ge1xuICAvLyBtdXN0LWhhdmVcbiAgaWQ6IHN0cmluZztcbiAgY2hhaW46IHN0cmluZztcbiAgY29sbGVjdGlvbklkOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIG9yaWdpbkFzc2V0Pzogc3RyaW5nO1xuXG4gIG5hbWU/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBleHRlcm5hbFVybD86IHN0cmluZztcbiAgcmFyaXR5Pzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHJvcGVydGllcz86IFJlY29yZDxhbnksIGFueT4gfCBudWxsO1xuICB0eXBlPzogX0Fzc2V0VHlwZS5FUkM3MjEgfCBfQXNzZXRUeXBlLlBTUDM0IHwgUk1SS19WRVI7IC8vIGZvciBzZW5kaW5nXG4gIHJtcmtfdmVyPzogUk1SS19WRVI7XG4gIG9uQ2hhaW5PcHRpb24/OiBhbnk7IC8vIGZvciBzZW5kaW5nIFBTUC0zNCB0b2tlbnMsIHNob3VsZCBiZSBkb25lIGJldHRlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdENvbGxlY3Rpb24ge1xuICAvLyBtdXN0LWhhdmVcbiAgY29sbGVjdGlvbklkOiBzdHJpbmc7XG4gIGNoYWluOiBzdHJpbmc7XG4gIG9yaWdpbkFzc2V0Pzogc3RyaW5nO1xuXG4gIGNvbGxlY3Rpb25OYW1lPzogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbiAgaXRlbUNvdW50PzogbnVtYmVyO1xuICBleHRlcm5hbFVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZnRKc29uIHtcbiAgdG90YWw6IG51bWJlcjtcbiAgbmZ0TGlzdDogQXJyYXk8TmZ0SXRlbT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZ0Q29sbGVjdGlvbkpzb24ge1xuICByZWFkeTogYm9vbGVhbjtcbiAgbmZ0Q29sbGVjdGlvbkxpc3Q6IEFycmF5PE5mdENvbGxlY3Rpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhSXRlbSB7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7XG4gIHNwZWNWZXJzaW9uOiBzdHJpbmc7XG4gIGhleFZhbHVlOiBIZXhTdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5CYWxhbmNlUmF3IHtcbiAgcmVzZXJ2ZWQ6IEJOLFxuICBmcm96ZW46IEJOLFxuICBmcmVlOiBCTlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0cmF0ZUJhbGFuY2Uge1xuICByZXNlcnZlZD86IHN0cmluZyxcbiAgbWlzY0Zyb3plbj86IHN0cmluZyxcbiAgZmVlRnJvemVuPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFsYW5jZUl0ZW0ge1xuICAvLyBtZXRhZGF0YVxuICB0b2tlblNsdWc6IHN0cmluZyxcbiAgc3RhdGU6IEFQSUl0ZW1TdGF0ZSxcbiAgdGltZXN0YW1wPzogbnVtYmVyXG5cbiAgLy8gbXVzdC1oYXZlLCB0b3RhbCA9IGZyZWUgKyBsb2NrZWRcbiAgZnJlZTogc3RyaW5nLFxuICBsb2NrZWQ6IHN0cmluZyxcblxuICAvLyBzdWJzdHJhdGUgZmllbGRzXG4gIHN1YnN0cmF0ZUluZm8/OiBTdWJzdHJhdGVCYWxhbmNlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFsYW5jZUpzb24ge1xuICByZXNldD86IGJvb2xlYW4sXG4gIGRldGFpbHM6IFJlY29yZDxzdHJpbmcsIEJhbGFuY2VJdGVtPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb3dkbG9hbkl0ZW0ge1xuICBzdGF0ZTogQVBJSXRlbVN0YXRlLFxuICBwYXJhU3RhdGU/OiBDcm93ZGxvYW5QYXJhU3RhdGUsXG4gIGNvbnRyaWJ1dGU6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb3dkbG9hbkpzb24ge1xuICByZXNldD86IGJvb2xlYW4sXG4gIGRldGFpbHM6IFJlY29yZDxzdHJpbmcsIENyb3dkbG9hbkl0ZW0+XG59XG5cbmV4cG9ydCB0eXBlIE5ldFdvcmtHcm91cCA9ICdSRUxBWV9DSEFJTicgfCAnUE9MS0FET1RfUEFSQUNIQUlOJyB8ICdLVVNBTUFfUEFSQUNIQUlOJyB8ICdNQUlOX05FVCcgfCAnVEVTVF9ORVQnIHwgJ1VOS05PV04nO1xuXG5leHBvcnQgZW51bSBDb250cmFjdFR5cGUge1xuICB3YXNtID0gJ3dhc20nLFxuICBldm0gPSAnZXZtJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtKc29uIHtcbiAgLy8gR2VuZXJhbCBJbmZvcm1hdGlvblxuICBrZXk6IHN0cmluZzsgLy8gS2V5IG9mIG5ldHdvcmsgaW4gTmV0d29ya01hcFxuICBjaGFpbjogc3RyaW5nOyAvLyBOYW1lIG9mIHRoZSBuZXR3b3JrXG4gIGljb24/OiBzdHJpbmc7IC8vIEljb24gbmFtZSwgYXZhaWxhYmxlIHdpdGgga25vd24gbmV0d29ya1xuICBhY3RpdmU6IGJvb2xlYW47IC8vIE5ldHdvcmsgaXMgYWN0aXZlIG9yIG5vdFxuXG4gIC8vIFByb3ZpZGVyIEluZm9ybWF0aW9uXG4gIHByb3ZpZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgLy8gUHJlZGVmaW5lZCBwcm92aWRlciBtYXBcbiAgY3VycmVudFByb3ZpZGVyOiBzdHJpbmcgfCBudWxsOyAvLyBDdXJyZW50IHByb3ZpZGVyIGtleVxuICBjdXJyZW50UHJvdmlkZXJNb2RlOiAnaHR0cCcgfCAnd3MnOyAvLyBDdXJyZW50IHByb3ZpZGVyIG1vZGUsIGNvbXB1dGUgZGVwZW5kIG9uIHByb3ZpZGVyIHByb3RvY29sLiB0aGUgZmVhdHVyZSBuZWVkIHRvIGtub3cgdGhpcyB0byBkZWNpZGUgdXNlIHN1YnNjcmliZSBvciBjcm9uam9iIHRvIHVzZSB0aGlzIGZlYXR1cmVzLlxuICBjdXN0b21Qcm92aWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+OyAvLyBDdXN0b20gcHJvdmlkZXIgbWFwLCBwcm92aWRlciBuYW1lIHNhbWUgd2l0aCBwcm92aWRlciBtYXBcbiAgbmZ0UHJvdmlkZXI/OiBzdHJpbmc7XG5cbiAgLy8gTWV0YWRhdGEgZ2V0IGFmdGVyIGNvbm5lY3QgdG8gcHJvdmlkZXJcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZzsgLy8gaWRlbnRpZmllciBmb3IgbmV0d29ya1xuICBncm91cHM6IE5ldFdvcmtHcm91cFtdO1xuICBzczU4Rm9ybWF0OiBudW1iZXI7XG4gIHBhcmFJZD86IG51bWJlcjtcbiAgY2hhaW5UeXBlPzogJ3N1YnN0cmF0ZScgfCAnZXRoZXJldW0nO1xuICBjcm93ZGxvYW5Vcmw/OiBzdHJpbmc7XG5cbiAgLy8gRXRoZXJldW0gcmVsYXRlZCBpbmZvcm1hdGlvbiBmb3IgcHJlZGVmaW5lZCBuZXR3b3JrIG9ubHlcbiAgaXNFdGhlcmV1bT86IGJvb2xlYW47IC8vIE9ubHkgc2hvdyBuZXR3b3JrIHdpdGggaXNFdGhlcmV1bT10cnVlIHdoZW4gc2VsZWN0IG9uZSBFdm0gYWNjb3VudCAvLyB1c2VyIGlucHV0XG4gIGV2bUNoYWluSWQ/OiBudW1iZXI7XG5cbiAgaXNIeWJyaWQ/OiBib29sZWFuO1xuXG4gIC8vIE5hdGl2ZSB0b2tlbiBpbmZvcm1hdGlvblxuICBuYXRpdmVUb2tlbj86IHN0cmluZztcbiAgZGVjaW1hbHM/OiBudW1iZXI7XG5cbiAgLy8gT3RoZXIgaW5mb3JtYXRpb25cbiAgY29pbkdlY2tvS2V5Pzogc3RyaW5nOyAvLyBQcm92aWRlciBrZXkgdG8gZ2V0IHRva2VuIHByaWNlIGZyb20gQ29pbkdlY2tvIC8vIHVzZXIgaW5wdXRcbiAgYmxvY2tFeHBsb3Jlcj86IHN0cmluZzsgLy8gTGluayB0byBibG9jayBzY2FubmVyIHRvIGNoZWNrIHRyYW5zYWN0aW9uIHdpdGggZXh0cmluc2ljIGhhc2ggLy8gdXNlciBpbnB1dFxuICBhYmlFeHBsb3Jlcj86IHN0cmluZzsgLy8gTGluayB0byBibG9jayBzY2FubmVyIHRvIGNoZWNrIHRyYW5zYWN0aW9uIHdpdGggZXh0cmluc2ljIGhhc2ggLy8gdXNlciBpbnB1dFxuICBkZXBlbmRlbmNpZXM/OiBzdHJpbmdbXTsgLy8gQXV0byBhY3RpdmUgbmV0d29yayBpbiBkZXBlbmRlbmNpZXMgaWYgY3VycmVudCBuZXR3b3JrIGlzIGFjdGl2YXRlZFxuICBnZXRTdGFraW5nT25DaGFpbj86IGJvb2xlYW47IC8vIHN1cHBvcnQgZ2V0IGJvbmRlZCBvbiBjaGFpblxuICBzdXBwb3J0Qm9uZGluZz86IGJvb2xlYW47XG4gIHN1cHBvcnRTbWFydENvbnRyYWN0PzogQ29udHJhY3RUeXBlW107IC8vIGlmIG5ldHdvcmsgc3VwcG9ydHMgUFNQIHNtYXJ0IGNvbnRyYWN0c1xuXG4gIGFwaVN0YXR1cz86IE5FVFdPUktfU1RBVFVTO1xuICByZXF1ZXN0SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9uYXRlSW5mbyB7XG4gIGtleTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duVHJhbnNmb3JtT3B0aW9uVHlwZSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0V29ya01ldGFkYXRhRGVmIGV4dGVuZHMgTWV0YWRhdGFEZWZCYXNlIHtcbiAgbmV0d29ya0tleTogc3RyaW5nO1xuICBncm91cHM6IE5ldFdvcmtHcm91cFtdO1xuICBpc0V0aGVyZXVtOiBib29sZWFuO1xuICBwYXJhSWQ/OiBudW1iZXI7XG4gIGlzQXZhaWxhYmxlOiBib29sZWFuO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGFwaVN0YXR1czogTkVUV09SS19TVEFUVVM7XG59XG5cbmV4cG9ydCB0eXBlIEN1cnJlbnROZXR3b3JrSW5mbyA9IHtcbiAgbmV0d29ya0tleTogc3RyaW5nO1xuICBuZXR3b3JrUHJlZml4OiBudW1iZXI7XG4gIGljb246IHN0cmluZztcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbiAgaXNSZWFkeT86IGJvb2xlYW47IC8vIGNoZWNrIGlmIGN1cnJlbnQgbmV0d29yayBpbmZvIGlzIGxpZnRlZCBmcm9tIGluaXRpYWwgc3RhdGVcbn1cblxuLy8gYWxsIEFjY291bnRzIGFuZCB0aGUgYWRkcmVzcyBvZiB0aGUgY3VycmVudCBBY2NvdW50XG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRzV2l0aEN1cnJlbnRBZGRyZXNzIHtcbiAgYWNjb3VudHM6IEFjY291bnRKc29uW107XG4gIGN1cnJlbnRBZGRyZXNzPzogc3RyaW5nO1xuICBjdXJyZW50R2VuZXNpc0hhc2g/OiBzdHJpbmcgfCBudWxsO1xuICBpc1Nob3dCYWxhbmNlPzogYm9vbGVhbjsgLy8gRGVwcmVjYXRlZCBhbmQgbW92ZSB0byBzZXR0aW5nXG4gIGFsbEFjY291bnRMb2dvPzogc3RyaW5nOyAvLyBEZXByZWNhdGVkIGFuZCBtb3ZlIHRvIHNldHRpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25JbnB1dEFkZHJlc3Mge1xuICBvcHRpb25zOiBLZXlyaW5nT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW50QWNjb3VudEluZm8ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGN1cnJlbnRHZW5lc2lzSGFzaDogc3RyaW5nIHwgbnVsbDtcbiAgYWxsR2VuZXNpc0hhc2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIExhbmd1YWdlVHlwZSA9ICdlbidcbnwnemgnXG58J2ZyJ1xufCd0cidcbnwncGwnXG58J3RoJ1xufCd1cidcbnwndmknXG58J2phJ1xufCdydSc7XG5cbmV4cG9ydCB0eXBlIExhbmd1YWdlT3B0aW9uVHlwZSA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICB2YWx1ZTogTGFuZ3VhZ2VUeXBlO1xufVxuXG5leHBvcnQgdHlwZSBCcm93c2VyQ29uZmlybWF0aW9uVHlwZSA9ICdleHRlbnNpb24nfCdwb3B1cCd8J3dpbmRvdyc7XG5cbmV4cG9ydCBlbnVtIFdhbGxldFVubG9ja1R5cGUge1xuICBBTFdBWVNfUkVRVUlSRUQgPSAnYWx3YXlzX3JlcXVpcmVkJyxcbiAgV0hFTl9ORUVERUQgPSAnd2hlbl9uZWVkZWQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVpU2V0dGluZ3Mge1xuICBsYW5ndWFnZTogTGFuZ3VhZ2VUeXBlLFxuICBicm93c2VyQ29uZmlybWF0aW9uVHlwZTogQnJvd3NlckNvbmZpcm1hdGlvblR5cGU7XG4gIGlzU2hvd1plcm9CYWxhbmNlOiBib29sZWFuO1xuICBpc1Nob3dCYWxhbmNlOiBib29sZWFuO1xuICBhY2NvdW50QWxsTG9nbzogc3RyaW5nO1xuICB0aGVtZTogVGhlbWVOYW1lcztcbiAgY2FtZXJhOiBib29sZWFuO1xuICB0aW1lQXV0b0xvY2s6IG51bWJlcjtcbiAgdW5sb2NrVHlwZTogV2FsbGV0VW5sb2NrVHlwZTtcbiAgZW5hYmxlQ2hhaW5QYXRyb2w6IGJvb2xlYW47XG4gIC8vIE9uLXJhbXAgc2VydmljZSBhY2NvdW50IHJlZmVyZW5jZVxuICB3YWxsZXRSZWZlcmVuY2U6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFNldHRpbmdzVHlwZSA9IFVpU2V0dGluZ3M7XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDYW1lcmFTZXR0aW5ncyA9IHsgY2FtZXJhOiBib29sZWFuIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VUaW1lQXV0b0xvY2sgPSB7IGF1dG9Mb2NrVGltZTogbnVtYmVyIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RVbmxvY2tUeXBlID0geyB1bmxvY2tUeXBlOiBXYWxsZXRVbmxvY2tUeXBlIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VFbmFibGVDaGFpblBhdHJvbCA9IHsgZW5hYmxlOiBib29sZWFuIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VTaG93WmVyb0JhbGFuY2UgPSB7IHNob3c6IGJvb2xlYW4gfTtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENoYW5nZUxhbmd1YWdlID0geyBsYW5ndWFnZTogTGFuZ3VhZ2VUeXBlIH07XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDaGFuZ2VTaG93QmFsYW5jZSA9IHsgZW5hYmxlOiBib29sZWFuIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZG9tVGVzdFJlcXVlc3Qge1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gVHJhbnNhY3Rpb25EaXJlY3Rpb24ge1xuICBTRU5EID0gJ3NlbmQnLFxuICBSRUNFSVZFRCA9ICdyZWNlaXZlZCdcbn1cblxuZXhwb3J0IGVudW0gQ2hhaW5UeXBlIHtcbiAgRVZNID0gJ2V2bScsXG4gIFNVQlNUUkFURSA9ICdzdWJzdHJhdGUnXG59XG5cbmV4cG9ydCBlbnVtIEV4dHJpbnNpY1R5cGUge1xuICBUUkFOU0ZFUl9CQUxBTkNFID0gJ3RyYW5zZmVyLmJhbGFuY2UnLFxuICBUUkFOU0ZFUl9UT0tFTiA9ICd0cmFuc2Zlci50b2tlbicsXG4gIFRSQU5TRkVSX1hDTSA9ICd0cmFuc2Zlci54Y20nLFxuICBTRU5EX05GVCA9ICdzZW5kX25mdCcsXG4gIENST1dETE9BTiA9ICdjcm93ZGxvYW4nLFxuICBTVEFLSU5HX0pPSU5fUE9PTCA9ICdzdGFraW5nLmpvaW5fcG9vbCcsXG4gIFNUQUtJTkdfTEVBVkVfUE9PTCA9ICdzdGFraW5nLmxlYXZlX3Bvb2wnLFxuICBTVEFLSU5HX1BPT0xfV0lUSERSQVcgPSAnc3Rha2luZy5wb29sX3dpdGhkcmF3JyxcbiAgU1RBS0lOR19CT05EID0gJ3N0YWtpbmcuYm9uZCcsXG4gIFNUQUtJTkdfVU5CT05EID0gJ3N0YWtpbmcudW5ib25kJyxcbiAgU1RBS0lOR19DTEFJTV9SRVdBUkQgPSAnc3Rha2luZy5jbGFpbV9yZXdhcmQnLFxuICBTVEFLSU5HX1dJVEhEUkFXID0gJ3N0YWtpbmcud2l0aGRyYXcnLFxuICBTVEFLSU5HX0NPTVBPVU5ESU5HID0gJ3N0YWtpbmcuY29tcG91bmRpbmcnLFxuICBTVEFLSU5HX0NBTkNFTF9DT01QT1VORElORyA9ICdzdGFraW5nLmNhbmNlbF9jb21wb3VuZGluZycsXG4gIFNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0UgPSAnc3Rha2luZy5jYW5jZWxfdW5zdGFrZScsXG4gIEVWTV9FWEVDVVRFID0gJ2V2bS5leGVjdXRlJyxcbiAgVU5LTk9XTiA9ICd1bmtub3duJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJpbnNpY0RhdGFUeXBlTWFwIHtcbiAgW0V4dHJpbnNpY1R5cGUuVFJBTlNGRVJfQkFMQU5DRV06IFJlcXVlc3RUcmFuc2ZlcixcbiAgW0V4dHJpbnNpY1R5cGUuVFJBTlNGRVJfVE9LRU5dOiBSZXF1ZXN0VHJhbnNmZXIsXG4gIFtFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1hDTV06IFJlcXVlc3RDcm9zc0NoYWluVHJhbnNmZXIsXG4gIFtFeHRyaW5zaWNUeXBlLlNFTkRfTkZUXTogTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0LFxuICBbRXh0cmluc2ljVHlwZS5DUk9XRExPQU5dOiBhbnksXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfSk9JTl9QT09MXTogUmVxdWVzdFN0YWtlUG9vbGluZ0JvbmRpbmcsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfTEVBVkVfUE9PTF06IFJlcXVlc3RTdGFrZVBvb2xpbmdVbmJvbmRpbmcsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQk9ORF06IFJlcXVlc3RTdGFrZVBvb2xpbmdCb25kaW5nLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX1VOQk9ORF06IFJlcXVlc3RVbmJvbmRpbmdTdWJtaXQsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0xBSU1fUkVXQVJEXTogUmVxdWVzdFN0YWtlQ2xhaW1SZXdhcmQsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfV0lUSERSQVddOiBSZXF1ZXN0U3Rha2VXaXRoZHJhd2FsLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NPTVBPVU5ESU5HXTogUmVxdWVzdFR1cmluZ1N0YWtlQ29tcG91bmQsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0FOQ0VMX0NPTVBPVU5ESU5HXTogUmVxdWVzdFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmQsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0VdOiBSZXF1ZXN0U3Rha2VDYW5jZWxXaXRoZHJhd2FsLFxuICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX1BPT0xfV0lUSERSQVddOiBhbnksXG4gIFtFeHRyaW5zaWNUeXBlLkVWTV9FWEVDVVRFXTogVHJhbnNhY3Rpb25Db25maWcsXG4gIFtFeHRyaW5zaWNUeXBlLlVOS05PV05dOiBhbnlcbn1cblxuZXhwb3J0IGVudW0gRXh0cmluc2ljU3RhdHVzIHtcbiAgUVVFVUVEID0gJ3F1ZXVlZCcsIC8vIFRyYW5zYWN0aW9uIGluIHF1ZXVlXG4gIFNVQk1JVFRJTkcgPSAnc3VibWl0dGluZycsIC8vIFRyYW5zYWN0aW9uIGluIHF1ZXVlXG4gIFBST0NFU1NJTkcgPSAncHJvY2Vzc2luZycsIC8vIFRyYW5zYWN0aW9uIGlzIHNlbmRpbmdcbiAgU1VDQ0VTUyA9ICdzdWNjZXNzJywgLy8gU2VuZCBzdWNjZXNzZnVsbHlcbiAgRkFJTCA9ICdmYWlsJywgLy8gU2VuZCBmYWlsZWRcbiAgQ0FOQ0VMTEVEID0gJ2NhbmNlbGxlZCcsIC8vIElzIHJlbW92ZSBiZWZvcmUgc2VuZGluZ1xuICBVTktOT1dOID0gJ3Vua25vd24nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHhIaXN0b3J5SXRlbSB7XG4gIHRpbWU6IG51bWJlciB8IHN0cmluZztcbiAgbmV0d29ya0tleTogc3RyaW5nO1xuICBpc1N1Y2Nlc3M6IGJvb2xlYW47XG4gIGFjdGlvbjogVHJhbnNhY3Rpb25EaXJlY3Rpb247XG4gIGV4dHJpbnNpY0hhc2g6IHN0cmluZztcblxuICBjaGFuZ2U/OiBzdHJpbmc7XG4gIGNoYW5nZVN5bWJvbD86IHN0cmluZzsgLy8gaWYgdW5kZWZpbmVkID0+IG1haW4gdG9rZW5cbiAgZmVlPzogc3RyaW5nO1xuICBmZWVTeW1ib2w/OiBzdHJpbmc7XG4gIC8vIGlmIHVuZGVmaW5lZCA9PiBtYWluIHRva2VuLCBzb21ldGltZSBcImZlZVwiIHVzZXMgZGlmZmVyZW50IHRva2VuIHRoYW4gXCJjaGFuZ2VcIlxuICAvLyBleDogc3ViIHRva2VuIChET1QsIEFVU0QsIEtTTSwgLi4uKSBvZiBBY2FsYSwgS2FydXJhIHVzZXMgbWFpbiB0b2tlbiB0byBwYXkgZmVlXG4gIG9yaWdpbj86ICdhcHAnIHwgJ25ldHdvcmsnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW1Kc29uIHtcbiAgaXRlbXM6IFR4SGlzdG9yeUl0ZW1bXSxcbiAgdG90YWw6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljVG9rZW5JbmZvIHtcbiAgZGVjaW1hbHM6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1vdW50RGF0YSBleHRlbmRzIEJhc2ljVG9rZW5JbmZvIHtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBYQ01UcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvIHtcbiAgZGVzdGluYXRpb25DaGFpbjogc3RyaW5nLFxuICBvcmlnaW5hbENoYWluOiBzdHJpbmcsXG4gIGZlZT86IEFtb3VudERhdGFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBORlRUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvIHtcbiAgY29sbGVjdGlvbk5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvPFQgZXh0ZW5kcyBFeHRyaW5zaWNUeXBlPiA9IFQgZXh0ZW5kcyBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1hDTVxuICA/IFhDTVRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm9cbiAgOiBUIGV4dGVuZHMgRXh0cmluc2ljVHlwZS5TRU5EX05GVFxuICAgID8gTkZUVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mb1xuICAgIDogdW5kZWZpbmVkO1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtPEVUIGV4dGVuZHMgRXh0cmluc2ljVHlwZSA9IEV4dHJpbnNpY1R5cGUuVFJBTlNGRVJfQkFMQU5DRT4ge1xuICBvcmlnaW4/OiAnYXBwJyB8ICdtaWdyYXRpb24nIHwgJ3N1YnNxdWlkJywgLy8gJ2FwcCcgb3IgaGlzdG9yeSBzb3VyY2VcbiAgY2FsbGhhc2g/OiBzdHJpbmcsXG4gIHNpZ25hdHVyZT86IHN0cmluZyxcbiAgY2hhaW46IHN0cmluZyxcbiAgY2hhaW5UeXBlPzogQ2hhaW5UeXBlLFxuICBjaGFpbk5hbWU/OiBzdHJpbmcsXG4gIGRpcmVjdGlvbjogVHJhbnNhY3Rpb25EaXJlY3Rpb24sXG4gIHR5cGU6IEV4dHJpbnNpY1R5cGUsXG4gIGZyb206IHN0cmluZyxcbiAgZnJvbU5hbWU/OiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4gIHRvTmFtZT86IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nLFxuICBzdGF0dXM6IEV4dHJpbnNpY1N0YXR1cyxcbiAgdHJhbnNhY3Rpb25JZD86IHN0cmluZywgLy8gQXZhaWxhYmxlIGZvciB0cmFuc2FjdGlvbiBoaXN0b3J5XG4gIGV4dHJpbnNpY0hhc2g6IHN0cmluZyxcbiAgdGltZTogbnVtYmVyLFxuICBkYXRhPzogc3RyaW5nLFxuICBibG9ja051bWJlcjogbnVtYmVyLFxuICBibG9ja0hhc2g6IHN0cmluZyxcbiAgYW1vdW50PzogQW1vdW50RGF0YSxcbiAgdGlwPzogQW1vdW50RGF0YSxcbiAgZmVlPzogQW1vdW50RGF0YSxcbiAgZXhwbG9yZXJVcmw/OiBzdHJpbmcsXG4gIGFkZGl0aW9uYWxJbmZvPzogVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mbzxFVD4sXG4gIHN0YXJ0QmxvY2s/OiBudW1iZXIsXG4gIG5vbmNlPzogbnVtYmVyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNXRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvZGU/OiBudW1iZXI7XG4gIGVycm9yVHlwZTogc3RyaW5nO1xuICBkYXRhPzogdW5rbm93bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTV1dhcm5pbmcge1xuICBlcnJvclR5cGU6IHN0cmluZztcbiAgY29kZT86IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkYXRhPzogdW5rbm93bjtcbn1cblxuZXhwb3J0IGVudW0gQmFzaWNUeEVycm9yVHlwZSB7XG4gIE5PVF9FTk9VR0hfQkFMQU5DRSA9ICdOT1RfRU5PVUdIX0JBTEFOQ0UnLFxuICBDSEFJTl9ESVNDT05ORUNURUQgPSAnQ0hBSU5fRElTQ09OTkVDVEVEJyxcbiAgSU5WQUxJRF9QQVJBTVMgPSAnSU5WQUxJRF9QQVJBTVMnLFxuICBEVVBMSUNBVEVfVFJBTlNBQ1RJT04gPSAnRFVQTElDQVRFX1RSQU5TQUNUSU9OJyxcbiAgVU5BQkxFX1RPX1NJR04gPSAnVU5BQkxFX1RPX1NJR04nLFxuICBVU0VSX1JFSkVDVF9SRVFVRVNUID0gJ1VTRVJfUkVKRUNUX1JFUVVFU1QnLFxuICBVTkFCTEVfVE9fU0VORCA9ICdVTkFCTEVfVE9fU0VORCcsXG4gIFNFTkRfVFJBTlNBQ1RJT05fRkFJTEVEID0gJ1NFTkRfVFJBTlNBQ1RJT05fRkFJTEVEJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnSU5URVJOQUxfRVJST1InLFxuICBVTlNVUFBPUlRFRCA9ICdVTlNVUFBPUlRFRCcsXG4gIFRJTUVPVVQgPSAnVElNRU9VVCcsXG4gIE5PVF9FTk9VR0hfRVhJU1RFTlRJQUxfREVQT1NJVCA9ICdOT1RfRU5PVUdIX0VYSVNURU5USUFMX0RFUE9TSVQnLFxufVxuXG5leHBvcnQgZW51bSBTdGFraW5nVHhFcnJvclR5cGUge1xuICBOT1RfRU5PVUdIX01JTl9TVEFLRSA9ICdOT1RfRU5PVUdIX01JTl9TVEFLRScsXG4gIEVYQ0VFRF9NQVhfTk9NSU5BVElPTlMgPSAnRVhDRUVEX01BWF9OT01JTkFUSU9OUycsXG4gIEVYSVNUX1VOU1RBS0lOR19SRVFVRVNUID0gJ0VYSVNUX1VOU1RBS0lOR19SRVFVRVNUJyxcbiAgSU5WQUxJRF9BQ1RJVkVfU1RBS0UgPSAnSU5WQUxJRF9BQ1RJVkVfU1RBS0UnLFxuICBFWENFRURfTUFYX1VOU1RBS0lORyA9ICdFWENFRURfTUFYX1VOU1RBS0lORycsXG4gIElOQUNUSVZFX05PTUlOQVRJT05fUE9PTCA9ICdJTkFDVElWRV9OT01JTkFUSU9OX1BPT0wnXG59XG5cbmV4cG9ydCBlbnVtIFRyYW5zZmVyVHhFcnJvclR5cGUge1xuICBOT1RfRU5PVUdIX1ZBTFVFID0gJ05PVF9FTk9VR0hfVkFMVUUnLFxuICBOT1RfRU5PVUdIX0ZFRSA9ICdOT1RfRU5PVUdIX0ZFRScsXG4gIElOVkFMSURfVE9LRU4gPSAnSU5WQUxJRF9UT0tFTicsXG4gIFRSQU5TRkVSX0VSUk9SID0gJ1RSQU5TRkVSX0VSUk9SJyxcbiAgUkVDRUlWRVJfTk9UX0VOT1VHSF9FWElTVEVOVElBTF9ERVBPU0lUID0gJ1JFQ0VJVkVSX05PVF9FTk9VR0hfRVhJU1RFTlRJQUxfREVQT1NJVCcsXG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zYWN0aW9uRXJyb3JUeXBlID0gQmFzaWNUeEVycm9yVHlwZSB8IFRyYW5zZmVyVHhFcnJvclR5cGUgfCBTdGFraW5nVHhFcnJvclR5cGVcbmV4cG9ydCBlbnVtIEJhc2ljVHhXYXJuaW5nQ29kZSB7XG4gIE5PVF9FTk9VR0hfRVhJU1RFTlRJQUxfREVQT1NJVCA9ICdub3RFbm91Z2hFeGlzdGVudGlhbERlcG9zaXQnXG59XG5cbmV4cG9ydCB0eXBlIEJhc2ljVHhFcnJvciA9IHtcbiAgZXJyb3JUeXBlOiBUeEVycm9yQ29kZSxcbiAgZGF0YT86IG9iamVjdCxcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEJhc2ljVHhXYXJuaW5nID0ge1xuICB3YXJuaW5nVHlwZTogVHJhbnNhY3Rpb25XYXJuaW5nVHlwZSxcbiAgZGF0YT86IG9iamVjdCxcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25SZXNwb25zZSB7XG4gIGV4dHJpbnNpY0hhc2g/OiBzdHJpbmc7XG4gIHR4RXJyb3I/OiBib29sZWFuO1xuICBlcnJvcnM/OiBUcmFuc2FjdGlvbkVycm9yW107XG4gIHN0YXR1cz86IGJvb2xlYW47XG4gIHR4UmVzdWx0PzogVHhSZXN1bHRUeXBlXG4gIHBhc3N3b3JkRXJyb3I/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdFRyYW5zYWN0aW9uUmVzcG9uc2UgZXh0ZW5kcyBTV1RyYW5zYWN0aW9uUmVzcG9uc2Uge1xuICBpc1NlbmRpbmdTZWxmOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBIYW5kbGVCYXNpY1R4ID0gKGRhdGE6IFRyYW5zYWN0aW9uUmVzcG9uc2UpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFR4RXJyb3JDb2RlID0gVHJhbnNmZXJUeEVycm9yVHlwZSB8IFRyYW5zYWN0aW9uRXJyb3JUeXBlXG5cbmV4cG9ydCBlbnVtIEJhbGFuY2VFcnJvclR5cGUge1xuICBORVRXT1JLX0VSUk9SID0gJ05FVFdPUktfRVJST1InLFxuICBUT0tFTl9FUlJPUiA9ICdUT0tFTl9FUlJPUicsXG4gIFRJTUVPVVQgPSAnVElNRU9VVCcsXG4gIEdFVF9CQUxBTkNFX0VSUk9SID0gJ0dFVF9CQUxBTkNFX0VSUk9SJyxcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25XYXJuaW5nVHlwZSA9IEJhc2ljVHhXYXJuaW5nQ29kZVxuXG5leHBvcnQgZW51bSBQcm92aWRlckVycm9yVHlwZSB7XG4gIENIQUlOX0RJU0NPTk5FQ1RFRCA9ICdDSEFJTl9ESVNDT05ORUNURUQnLFxuICBJTlZBTElEX1BBUkFNUyA9ICdJTlZBTElEX1BBUkFNUycsXG4gIElOVEVSTkFMX0VSUk9SID0gJ0lOVEVSTkFMX0VSUk9SJyxcbiAgVVNFUl9SRUpFQ1QgPSAnVVNFUl9SRUpFQ1QnLFxufVxuXG4vLy8gTWFuYWdlIGFjY291bnRcbi8vIEV4cG9ydCBwcml2YXRlIGtleVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50RXhwb3J0UHJpdmF0ZUtleSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUFjY291bnRFeHBvcnRQcml2YXRlS2V5IHtcbiAgcHJpdmF0ZUtleTogc3RyaW5nO1xuICBwdWJsaWNLZXk6IHN0cmluZztcbn1cblxuLy8gR2V0IGFjY291bnQgaW5mbyB3aXRoIHByaXZhdGUga2V5XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENoZWNrUHVibGljQW5kU2VjcmV0S2V5IHtcbiAgc2VjcmV0S2V5OiBzdHJpbmc7XG4gIHB1YmxpY0tleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlQ2hlY2tQdWJsaWNBbmRTZWNyZXRLZXkge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGlzVmFsaWQ6IGJvb2xlYW47XG4gIGlzRXRoZXJldW06IGJvb2xlYW47XG59XG5cbi8vIENyZWF0ZSBzZWVkIHBoYXNlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFNlZWRDcmVhdGVWMiB7XG4gIGxlbmd0aD86IFNlZWRMZW5ndGhzO1xuICBzZWVkPzogc3RyaW5nO1xuICB0eXBlcz86IEFycmF5PEtleXBhaXJUeXBlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVNlZWRDcmVhdGVWMiB7XG4gIHNlZWQ6IHN0cmluZyxcbiAgYWRkcmVzc01hcDogUmVjb3JkPEtleXBhaXJUeXBlLCBzdHJpbmc+XG59XG5cbi8vIEdldCBhY2NvdW50IGluZm8gd2l0aCBzdXJpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFNlZWRWYWxpZGF0ZVYyIHtcbiAgc3VyaTogc3RyaW5nO1xuICB0eXBlcz86IEFycmF5PEtleXBhaXJUeXBlPjtcbn1cblxuZXhwb3J0IHR5cGUgUmVzcG9uc2VTZWVkVmFsaWRhdGVWMiA9IFJlc3BvbnNlU2VlZENyZWF0ZVYyXG5cbi8vIENyZWF0ZSBhY2NvdW50IHdpdGggc3VyaVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50Q3JlYXRlU3VyaVYyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBnZW5lc2lzSGFzaD86IHN0cmluZyB8IG51bGw7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBzdXJpOiBzdHJpbmc7XG4gIHR5cGVzPzogQXJyYXk8S2V5cGFpclR5cGU+O1xuICBpc0FsbG93ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlQWNjb3VudENyZWF0ZVN1cmlWMiA9IFJlY29yZDxLZXlwYWlyVHlwZSwgc3RyaW5nPlxuXG4vLyBDcmVhdGUgZGVyaXZlIGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVyaXZlQ3JlYXRlVjIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGdlbmVzaXNIYXNoPzogc3RyaW5nIHwgbnVsbDtcbiAgc3VyaTogc3RyaW5nO1xuICBwYXJlbnRBZGRyZXNzOiBzdHJpbmc7XG4gIGlzQWxsb3dlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVEZXJpdmVBY2NvdW50SW5mbyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc3VyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3REZXJpdmVDcmVhdGVWMyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVyaXZlQ3JlYXRlTXVsdGlwbGUge1xuICBwYXJlbnRBZGRyZXNzOiBzdHJpbmc7XG4gIGlzQWxsb3dlZDogYm9vbGVhbjtcbiAgaXRlbXM6IENyZWF0ZURlcml2ZUFjY291bnRJbmZvW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVyaXZlQWNjb3VudEluZm8ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHN1cmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVyaXZlVmFsaWRhdGVWMiB7XG4gIHN1cmk6IHN0cmluZztcbiAgcGFyZW50QWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZXNwb25zZURlcml2ZVZhbGlkYXRlVjIgPSBEZXJpdmVBY2NvdW50SW5mbztcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEdldERlcml2ZUFjY291bnRzIHtcbiAgcGFnZTogbnVtYmVyO1xuICBsaW1pdDogbnVtYmVyO1xuICBwYXJlbnRBZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VHZXREZXJpdmVBY2NvdW50cyB7XG4gIHJlc3VsdDogRGVyaXZlQWNjb3VudEluZm9bXTtcbn1cblxuLy8gUmVzdG9yZSBhY2NvdW50IHdpdGgganNvbiBmaWxlIChzaW5nbGUgYWNjb3VudClcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SnNvblJlc3RvcmVWMiB7XG4gIGZpbGU6IEtleXJpbmdQYWlyJEpzb247XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgaXNBbGxvd2VkOiBib29sZWFuO1xuICB3aXRoTWFzdGVyUGFzc3dvcmQ6IGJvb2xlYW47XG59XG5cbi8vIFJlc3RvcmUgYWNjb3VudCB3aXRoIGpzb24gZmlsZSAobXVsdGkgYWNjb3VudClcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QmF0Y2hSZXN0b3JlVjIge1xuICBmaWxlOiBLZXlyaW5nUGFpcnMkSnNvbjtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgYWNjb3VudHNJbmZvOiBSZXNwb25zZUpzb25HZXRBY2NvdW50SW5mb1tdO1xuICBpc0FsbG93ZWQ6IGJvb2xlYW47XG59XG5cbi8vIFJlc3RvcmUgYWNjb3VudCB3aXRoIHByaXZhdGVLZXlcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVByaXZhdGVLZXlWYWxpZGF0ZVYyIHtcbiAgYWRkcmVzc01hcDogUmVjb3JkPEtleXBhaXJUeXBlLCBzdHJpbmc+LFxuICBhdXRvQWRkUHJlZml4OiBib29sZWFuXG59XG5cbi8vIEV4dGVybmFsIGFjY291bnRcblxuZXhwb3J0IGVudW0gQWNjb3VudEV4dGVybmFsRXJyb3JDb2RlIHtcbiAgSU5WQUxJRF9BRERSRVNTID0gJ2ludmFsaWRUb0FjY291bnQnLFxuICBLRVlSSU5HX0VSUk9SID0gJ2tleXJpbmdFcnJvcicsXG4gIFVOS05PV05fRVJST1IgPSAndW5rbm93bkVycm9yJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRFeHRlcm5hbEVycm9ye1xuICBjb2RlOiBBY2NvdW50RXh0ZXJuYWxFcnJvckNvZGU7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLy8gQXR0YWNoIFFSLXNpZ25lciBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRDcmVhdGVFeHRlcm5hbFYyIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBnZW5lc2lzSGFzaD86IHN0cmluZyB8IG51bGw7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbiAgaXNBbGxvd2VkOiBib29sZWFuO1xuICBpc1JlYWRPbmx5OiBib29sZWFuO1xufVxuXG4vLyBBdHRhY2ggTGVkZ2VyIGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudENyZWF0ZUhhcmR3YXJlVjIge1xuICBhY2NvdW50SW5kZXg6IG51bWJlcjtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBhZGRyZXNzT2Zmc2V0OiBudW1iZXI7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7XG4gIGhhcmR3YXJlVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzQWxsb3dlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlSGFyZHdhcmVBY2NvdW50SXRlbSB7XG4gIGFjY291bnRJbmRleDogbnVtYmVyO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGFkZHJlc3NPZmZzZXQ6IG51bWJlcjtcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbiAgaGFyZHdhcmVUeXBlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudENyZWF0ZUhhcmR3YXJlTXVsdGlwbGUge1xuICBhY2NvdW50czogQ3JlYXRlSGFyZHdhcmVBY2NvdW50SXRlbVtdO1xufVxuXG4vLyBSZXN0b3JlIGFjY291bnQgd2l0aCBwdWJsaWMgYW5kIHNlY3JldCBrZXlcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudENyZWF0ZVdpdGhTZWNyZXRLZXkge1xuICBwdWJsaWNLZXk6IHN0cmluZztcbiAgc2VjcmV0S2V5OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNBbGxvdzogYm9vbGVhbjtcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUFjY291bnRDcmVhdGVXaXRoU2VjcmV0S2V5IHtcbiAgZXJyb3JzOiBBY2NvdW50RXh0ZXJuYWxFcnJvcltdO1xuICBzdWNjZXNzOiBib29sZWFuO1xufVxuXG4vLyBTdWJzY3JpYmUgQWRkcmVzcyBCb29rXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc0Jvb2tJbmZvIHtcbiAgYWRkcmVzc2VzOiBBZGRyZXNzSnNvbltdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEVkaXRDb250YWN0QWNjb3VudCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgbWV0YTogS2V5cmluZ1BhaXIkTWV0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGVsZXRlQ29udGFjdEFjY291bnQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbi8vIEluamVjdCBhY2NvdW50XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFkZEluamVjdGVkQWNjb3VudHMge1xuICBhY2NvdW50czogSW5qZWN0ZWRBY2NvdW50V2l0aE1ldGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVtb3ZlSW5qZWN0ZWRBY2NvdW50cyB7XG4gIGFkZHJlc3Nlczogc3RyaW5nW107XG59XG5cbi8vLyBTaWduIFRyYW5zYWN0aW9uXG5cbi8vLyBTaWduIEV4dGVybmFsIFJlcXVlc3RcblxuLy8gU3RhdHVzXG5cbmV4cG9ydCBlbnVtIEV4dGVybmFsUmVxdWVzdFByb21pc2VTdGF0dXMge1xuICBQRU5ESU5HLFxuICBSRUpFQ1RFRCxcbiAgRkFJTEVELFxuICBDT01QTEVURURcbn1cblxuLy8gU3RydWN0dXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZXJuYWxSZXF1ZXN0UHJvbWlzZSB7XG4gIHJlc29sdmU/OiAocmVzdWx0OiBTaWduZXJSZXN1bHQgfCBQcm9taXNlTGlrZTxTaWduZXJSZXN1bHQ+KSA9PiB2b2lkLFxuICByZWplY3Q/OiAoZXJyb3I/OiBFcnJvcikgPT4gdm9pZCxcbiAgc3RhdHVzOiBFeHRlcm5hbFJlcXVlc3RQcm9taXNlU3RhdHVzLFxuICBtZXNzYWdlPzogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IG51bWJlclxufVxuXG4vLyBQcmVwYXJlIHRvIGNyZWF0ZVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXBhcmVFeHRlcm5hbFJlcXVlc3Qge1xuICBpZDogc3RyaW5nO1xuICBzZXRTdGF0ZTogKHByb21pc2U6IEV4dGVybmFsUmVxdWVzdFByb21pc2UpID0+IHZvaWQ7XG4gIHVwZGF0ZVN0YXRlOiAocHJvbWlzZTogUGFydGlhbDxFeHRlcm5hbFJlcXVlc3RQcm9taXNlPikgPT4gdm9pZDtcbn1cblxuLy8gUmVqZWN0XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlamVjdEV4dGVybmFsUmVxdWVzdCB7XG4gIGlkOiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHRocm93RXJyb3I/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBSZXNwb25zZVJlamVjdEV4dGVybmFsUmVxdWVzdCA9IHZvaWRcblxuLy8gUmVzb2x2ZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZXNvbHZlRXh0ZXJuYWxSZXF1ZXN0IHtcbiAgaWQ6IHN0cmluZztcbiAgZGF0YTogU2lnbmVyUmVzdWx0O1xufVxuXG5leHBvcnQgdHlwZSBSZXNwb25zZVJlc29sdmVFeHRlcm5hbFJlcXVlc3QgPSB2b2lkXG5cbi8vL1xuXG5leHBvcnQgdHlwZSBBY2NvdW50UmVmID0gQXJyYXk8c3RyaW5nPlxuZXhwb3J0IHR5cGUgQWNjb3VudFJlZk1hcCA9IFJlY29yZDxzdHJpbmcsIEFjY291bnRSZWY+XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RQcmljZSA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVQcmljZSA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RCYWxhbmNlID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZUJhbGFuY2UgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlQmFsYW5jZXNWaXNpYmlsaXR5ID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdENyb3dkbG9hbiA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVDcm93ZGxvYW4gPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlTmZ0ID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZVN0YWtpbmcgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlU3Rha2luZ1Jld2FyZCA9IG51bGxcbmV4cG9ydCBlbnVtIFRoZW1lTmFtZXMge1xuICBMSUdIVCA9ICdsaWdodCcsXG4gIERBUksgPSAnZGFyaycsXG4gIFNVQlNQQUNFID0gJ3N1YnNwYWNlJ1xufVxuXG5leHBvcnQgZW51bSBORVRXT1JLX0VSUk9SIHtcbiAgSU5WQUxJRF9JTkZPX1RZUEUgPSAnaW52YWxpZEluZm9UeXBlJyxcbiAgSU5KRUNUX1NDUklQVF9ERVRFQ1RFRCA9ICdpbmplY3RTY3JpcHREZXRlY3RlZCcsXG4gIEVYSVNURURfTkVUV09SSyA9ICdleGlzdGVkTmV0d29yaycsXG4gIEVYSVNURURfUFJPVklERVIgPSAnZXhpc3RlZFByb3ZpZGVyJyxcbiAgSU5WQUxJRF9QUk9WSURFUiA9ICdpbnZhbGlkUHJvdmlkZXInLFxuICBOT05FID0gJ25vbmUnLFxuICBDT05ORUNUSU9OX0ZBSUxVUkUgPSAnY29ubmVjdGlvbkZhaWx1cmUnLFxuICBQUk9WSURFUl9OT1RfU0FNRV9ORVRXT1JLID0gJ3Byb3ZpZGVyTm90U2FtZU5ldHdvcmsnXG59XG5cbmV4cG9ydCBlbnVtIE5FVFdPUktfU1RBVFVTIHtcbiAgQ09OTkVDVEVEID0gJ2Nvbm5lY3RlZCcsXG4gIENPTk5FQ1RJTkcgPSAnY29ubmVjdGluZycsXG4gIERJU0NPTk5FQ1RFRCA9ICdkaXNjb25uZWN0ZWQnLFxuICBQRU5ESU5HID0gJ3BlbmRpbmcnXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgdHlwZSBCYXNlUmVxdWVzdFNpZ24gPSB7XG4gIGlnbm9yZVdhcm5pbmdzPzogYm9vbGVhbjtcbn07XG5cbi8vIEludGVybmFsIHJlcXVlc3Q6IHJlcXVlc3QgZnJvbSBleHRlbnNpb24sIG5vdCBkQXBwLlxuZXhwb3J0IHR5cGUgSW50ZXJuYWxSZXF1ZXN0U2lnbjxUIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduPiA9IE9taXQ8VCwgJ3Bhc3N3b3JkJz47XG5cbmV4cG9ydCB0eXBlIFR4UmVzdWx0VHlwZSA9IHtcbiAgY2hhbmdlOiBzdHJpbmc7XG4gIGNoYW5nZVN5bWJvbD86IHN0cmluZztcbiAgZmVlPzogc3RyaW5nO1xuICBmZWVTeW1ib2w/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0IHtcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICBzZW5kZXJBZGRyZXNzOiBzdHJpbmcsXG4gIHJlY2lwaWVudEFkZHJlc3M6IHN0cmluZyxcblxuICBuZnRJdGVtTmFtZT86IHN0cmluZywgLy8gVXNlIGZvciBjb25maXJtYXRpb24gdmlldyBvbmx5XG4gIHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PixcbiAgbmZ0SXRlbTogTmZ0SXRlbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bU5mdFRyYW5zYWN0aW9uIGV4dGVuZHMgVmFsaWRhdGVUcmFuc2FjdGlvblJlc3BvbnNlIHtcbiAgdHg6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtTmZ0U3VibWl0VHJhbnNhY3Rpb24gZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBzZW5kZXJBZGRyZXNzOiBzdHJpbmcsXG4gIHJlY2lwaWVudEFkZHJlc3M6IHN0cmluZyxcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICBlc3RpbWF0ZUdhczogc3RyaW5nLFxuICByYXdUcmFuc2FjdGlvbjogUmVjb3JkPHN0cmluZywgYW55PlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlTmV0d29ya1Jlc3BvbnNlIHtcbiAgLy8gdmFsaWRhdGlvbiBzdGF0ZVxuICBzdWNjZXNzOiBib29sZWFuLFxuICBlcnJvcj86IF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SLFxuICBjb25mbGljdENoYWluPzogc3RyaW5nLFxuICBjb25mbGljdEtleT86IHN0cmluZyxcblxuICAvLyBjaGFpbiBzcGVjXG4gIGdlbmVzaXNIYXNoOiBzdHJpbmcsXG4gIGFkZHJlc3NQcmVmaXg6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBwYXJhSWQ6IG51bWJlciB8IG51bGwsXG4gIGV2bUNoYWluSWQ6IG51bWJlciB8IG51bGwsIC8vIG51bGwgaWYgbm90IGV2bSBjb21wYXRpYmxlXG4gIHN5bWJvbDogc3RyaW5nLFxuICBkZWNpbWFsczogbnVtYmVyLFxuICBleGlzdGVudGlhbERlcG9zaXQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlTmV0d29ya1JlcXVlc3Qge1xuICBwcm92aWRlcjogc3RyaW5nLFxuICBleGlzdGVkQ2hhaW5TbHVnPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpTWFwIHtcbiAgc3Vic3RyYXRlOiBSZWNvcmQ8c3RyaW5nLCBfU3Vic3RyYXRlQXBpPjtcbiAgZXZtOiBSZWNvcmQ8c3RyaW5nLCBfRXZtQXBpPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdXBwb3J0VHJhbnNmZXJSZXNwb25zZSB7XG4gIHN1cHBvcnRUcmFuc2ZlcjogYm9vbGVhbjtcbiAgc3VwcG9ydFRyYW5zZmVyQWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RGcmVlQmFsYW5jZSB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICB0b2tlbj86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RNYXhUcmFuc2ZlcmFibGUge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgdG9rZW4/OiBzdHJpbmcsXG4gIGlzWGNtVHJhbnNmZXI/OiBib29sZWFuLFxuICBkZXN0Q2hhaW46IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUcmFuc2ZlckNoZWNrUmVmZXJlbmNlQ291bnQge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5ldHdvcmtLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUcmFuc2ZlckNoZWNrU3VwcG9ydGluZyB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgdG9rZW5TbHVnOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJhbnNmZXJFeGlzdGVudGlhbERlcG9zaXQge1xuICB0b2tlblNsdWc6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RTYXZlUmVjZW50QWNjb3VudCB7XG4gIGFjY291bnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0cmF0ZU5mdFRyYW5zYWN0aW9uIHtcbiAgZXJyb3I6IGJvb2xlYW47XG4gIGVzdGltYXRlZEZlZT86IHN0cmluZztcbiAgYmFsYW5jZUVycm9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0cmF0ZU5mdFN1Ym1pdFRyYW5zYWN0aW9uIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbDtcbiAgc2VuZGVyQWRkcmVzczogc3RyaW5nO1xuICBuZnRJdGVtTmFtZT86IHN0cmluZztcbiAgcmVjaXBpZW50QWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic3RyYXRlTmZ0U3VibWl0VHJhbnNhY3Rpb24gPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN1YnN0cmF0ZU5mdFN1Ym1pdFRyYW5zYWN0aW9uPjtcbmV4cG9ydCB0eXBlIFJlcXVlc3RFdm1OZnRTdWJtaXRUcmFuc2FjdGlvbiA9IEludGVybmFsUmVxdWVzdFNpZ248RXZtTmZ0U3VibWl0VHJhbnNhY3Rpb24+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50TWV0YXtcbiAgYWRkcmVzczogc3RyaW5nIHwgVWludDhBcnJheTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUFjY291bnRNZXRhe1xuICBtZXRhOiBLZXlyaW5nUGFpciRNZXRhO1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0RXZtRXZlbnRzID0gbnVsbDtcbmV4cG9ydCB0eXBlIEV2bUV2ZW50VHlwZSA9ICdjb25uZWN0JyB8ICdkaXNjb25uZWN0JyB8ICdhY2NvdW50c0NoYW5nZWQnIHwgJ2NoYWluQ2hhbmdlZCcgfCAnbWVzc2FnZScgfCAnZGF0YScgfCAncmVjb25uZWN0JyB8ICdlcnJvcic7XG5leHBvcnQgdHlwZSBFdm1BY2NvdW50c0NoYW5nZWRQYXlsb2FkID0gc3RyaW5nIFtdO1xuZXhwb3J0IHR5cGUgRXZtQ2hhaW5DaGFuZ2VkUGF5bG9hZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEV2bUNvbm5lY3RQYXlsb2FkID0geyBjaGFpbklkOiBFdm1DaGFpbkNoYW5nZWRQYXlsb2FkIH1cbmV4cG9ydCB0eXBlIEV2bURpc2Nvbm5lY3RQYXlsb2FkID0gdW5rbm93blxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bUV2ZW50IHtcbiAgdHlwZTogRXZtRXZlbnRUeXBlLFxuICBwYXlsb2FkOiBFdm1BY2NvdW50c0NoYW5nZWRQYXlsb2FkIHwgRXZtQ2hhaW5DaGFuZ2VkUGF5bG9hZCB8IEV2bUNvbm5lY3RQYXlsb2FkIHwgRXZtRGlzY29ubmVjdFBheWxvYWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtQXBwU3RhdGUge1xuICBuZXR3b3JrS2V5Pzogc3RyaW5nLFxuICBjaGFpbklkPzogc3RyaW5nLFxuICBpc0Nvbm5lY3RlZD86IGJvb2xlYW4sXG4gIHdlYjM/OiBXZWIzLFxuICBsaXN0ZW5FdmVudHM/OiBzdHJpbmdbXVxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0RXZtUHJvdmlkZXJTZW5kID0gSnNvblJwY1BheWxvYWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VFdm1Qcm92aWRlclNlbmQge1xuICBlcnJvcjogKEVycm9yIHwgbnVsbCk7XG4gIHJlc3VsdD86IEpzb25ScGNSZXNwb25zZTtcbn1cblxuZXhwb3J0IGVudW0gRXZtUHJvdmlkZXJFcnJvclR5cGUge1xuICBVU0VSX1JFSkVDVEVEX1JFUVVFU1QgPSAnVVNFUl9SRUpFQ1RFRF9SRVFVRVNUJyxcbiAgVU5BVVRIT1JJWkVEID0gJ1VOQVVUSE9SSVpFRCcsXG4gIFVOU1VQUE9SVEVEX01FVEhPRCA9ICdVTlNVUFBPUlRFRF9NRVRIT0QnLFxuICBESVNDT05ORUNURUQgPSAnRElTQ09OTkVDVEVEJyxcbiAgQ0hBSU5fRElTQ09OTkVDVEVEID0gJ0NIQUlOX0RJU0NPTk5FQ1RFRCcsXG4gIElOVkFMSURfUEFSQU1TID0gJ0lOVkFMSURfUEFSQU1TJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnSU5URVJOQUxfRVJST1InLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNlbmRUcmFuc2FjdGlvblBhcmFtcyB7XG4gIGZyb206IHN0cmluZztcbiAgdG8/OiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBnYXNMaW1pdD86IHN0cmluZyB8IG51bWJlcjtcbiAgbWF4UHJpb3JpdHlGZWVQZXJHYXM/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG1heEZlZVBlckdhcz86IHN0cmluZyB8IG51bWJlcjtcbiAgZ2FzUHJpY2U/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGRhdGE/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hOZXR3b3JrUmVxdWVzdCB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1TaWduUmVxdWVzdCB7XG4gIGFjY291bnQ6IEFjY291bnRKc29uO1xuICBoYXNoUGF5bG9hZDogc3RyaW5nO1xuICBjYW5TaWduOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNpZ25hdHVyZVJlcXVlc3QgZXh0ZW5kcyBFdm1TaWduUmVxdWVzdCB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDogdW5rbm93bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1TZW5kVHJhbnNhY3Rpb25SZXF1ZXN0IGV4dGVuZHMgVHJhbnNhY3Rpb25Db25maWcsIEV2bVNpZ25SZXF1ZXN0IHtcbiAgZXN0aW1hdGVHYXM6IHN0cmluZztcbiAgcGFyc2VEYXRhOiBFdm1UcmFuc2FjdGlvbkRhdGE7XG4gIGlzVG9Db250cmFjdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgRXZtV2F0Y2hUcmFuc2FjdGlvblJlcXVlc3QgPSBFdm1TZW5kVHJhbnNhY3Rpb25SZXF1ZXN0O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbnNRdWV1ZUl0ZW1PcHRpb25zIHtcbiAgcmVxdWlyZWRQYXNzd29yZD86IGJvb2xlYW47XG4gIGFkZHJlc3M/OiBzdHJpbmc7XG4gIG5ldHdvcmtLZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxUPiBleHRlbmRzIENvbmZpcm1hdGlvbnNRdWV1ZUl0ZW1PcHRpb25zLCBDb25maXJtYXRpb25SZXF1ZXN0QmFzZSB7XG4gIHBheWxvYWQ6IFQ7XG4gIHBheWxvYWRKc29uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uUmVzdWx0PFQ+IGV4dGVuZHMgQ29uZmlybWF0aW9uUmVxdWVzdEJhc2Uge1xuICBpc0FwcHJvdmVkOiBib29sZWFuO1xuICBwYXlsb2FkPzogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1SZXF1ZXN0RXh0ZXJuYWwge1xuICBoYXNoUGF5bG9hZDogc3RyaW5nO1xuICBjYW5TaWduOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3RFeHRlcm5hbCBleHRlbmRzIEV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3QsIEV2bVJlcXVlc3RFeHRlcm5hbCB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNpZ25hdHVyZVJlcXVlc3RFeHRlcm5hbCBleHRlbmRzIEV2bVNpZ25hdHVyZVJlcXVlc3QsIEV2bVJlcXVlc3RFeHRlcm5hbCB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE5ldHdvcmtSZXF1ZXN0RXh0ZXJuYWwgeyAvLyBjdXJyZW50bHkgb25seSBzdXBwb3J0IGFkZGluZyBwdXJlIEV2bSBuZXR3b3JrXG4gIGNoYWluSWQ6IHN0cmluZztcbiAgcnBjVXJsczogc3RyaW5nW107XG4gIGNoYWluTmFtZTogc3RyaW5nO1xuICBibG9ja0V4cGxvcmVyVXJscz86IHN0cmluZ1tdO1xuICByZXF1ZXN0SWQ/OiBzdHJpbmc7XG4gIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHN5bWJvbDogc3RyaW5nO1xuICAgIGRlY2ltYWxzOiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkTmV0d29ya0V4dGVybmFsUmVxdWVzdCB7IC8vIGN1cnJlbnRseSBvbmx5IHN1cHBvcnQgYWRkaW5nIHB1cmUgRXZtIG5ldHdvcmtcbiAgY2hhaW5JZDogc3RyaW5nO1xuICBycGNVcmw6IHN0cmluZztcbiAgY2hhaW5OYW1lOiBzdHJpbmc7XG4gIGJsb2NrRXhwbG9yZXJVcmw6IHN0cmluZztcbiAgcmVxdWVzdElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkVG9rZW5SZXF1ZXN0RXh0ZXJuYWwge1xuICBzbHVnPzogc3RyaW5nO1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcbiAgb3JpZ2luQ2hhaW46IHN0cmluZztcbiAgdHlwZTogX0Fzc2V0VHlwZTtcbiAgbmFtZTogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbiAgZGVjaW1hbHM6IG51bWJlcjtcbiAgdmFsaWRhdGVkOiBib29sZWFuO1xuICBjb250cmFjdEVycm9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRlZmluaXRpb25zIHtcbiAgYWRkTmV0d29ya1JlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPF9OZXR3b3JrVXBzZXJ0UGFyYW1zPiwgQ29uZmlybWF0aW9uUmVzdWx0PG51bGw+XSxcbiAgYWRkVG9rZW5SZXF1ZXN0OiBbQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxBZGRUb2tlblJlcXVlc3RFeHRlcm5hbD4sIENvbmZpcm1hdGlvblJlc3VsdDxib29sZWFuPl0sXG4gIHN3aXRjaE5ldHdvcmtSZXF1ZXN0OiBbQ29uZmlybWF0aW9uc1F1ZXVlSXRlbTxTd2l0Y2hOZXR3b3JrUmVxdWVzdD4sIENvbmZpcm1hdGlvblJlc3VsdDxib29sZWFuPl0sXG4gIGV2bVNpZ25hdHVyZVJlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPEV2bVNpZ25hdHVyZVJlcXVlc3Q+LCBDb25maXJtYXRpb25SZXN1bHQ8c3RyaW5nPl0sXG4gIGV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPEV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3Q+LCBDb25maXJtYXRpb25SZXN1bHQ8c3RyaW5nPl1cbiAgZXZtV2F0Y2hUcmFuc2FjdGlvblJlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPEV2bVdhdGNoVHJhbnNhY3Rpb25SZXF1ZXN0PiwgQ29uZmlybWF0aW9uUmVzdWx0PHN0cmluZz5dXG59XG5cbmV4cG9ydCB0eXBlIENvbmZpcm1hdGlvblR5cGUgPSBrZXlvZiBDb25maXJtYXRpb25EZWZpbml0aW9ucztcblxuZXhwb3J0IHR5cGUgQ29uZmlybWF0aW9uc1F1ZXVlID0ge1xuICBbQ1QgaW4gQ29uZmlybWF0aW9uVHlwZV06IFJlY29yZDxzdHJpbmcsIENvbmZpcm1hdGlvbkRlZmluaXRpb25zW0NUXVswXT47XG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDb25maXJtYXRpb25zU3Vic2NyaWJlID0gbnVsbDtcblxuLy8gRGVzaWduIHRvIHVzZSBvbmx5IG9uZSBjb25maXJtYXRpb25cbmV4cG9ydCB0eXBlIFJlcXVlc3RDb25maXJtYXRpb25Db21wbGV0ZSA9IHtcbiAgW0NUIGluIENvbmZpcm1hdGlvblR5cGVdPzogQ29uZmlybWF0aW9uRGVmaW5pdGlvbnNbQ1RdWzFdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljVHhJbmZvIHtcbiAgZmVlOiBzdHJpbmcsXG4gIGJhbGFuY2VFcnJvcjogYm9vbGVhbixcbiAgcmF3RmVlPzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9uZGluZ09wdGlvblBhcmFtcyB7XG4gIGNoYWluOiBzdHJpbmc7XG4gIHR5cGU6IFN0YWtpbmdUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZU1vZGVKc29uIHtcbiAgbmV0d29ya0tleXM6IHN0cmluZ1tdLFxuICB0aGVtZTogVGhlbWVOYW1lcyxcbiAgYXV0b1RyaWdnZXJEb21haW46IHN0cmluZyAvLyBSZWdleCBmb3IgYXV0byB0cmlnZ2VyIHNpbmdsZSBtb2RlXG59XG5cbi8vLyBFdm0gdHJhbnNhY3Rpb25cblxuZXhwb3J0IHR5cGUgTmVzdGVkQXJyYXk8VD4gPSBUIHwgTmVzdGVkQXJyYXk8VD5bXTtcblxuLy8vIEV2bSBDb250cmFjdCBJbnB1dFxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVRyYW5zYWN0aW9uQXJnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogRXZtVHJhbnNhY3Rpb25BcmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZUV2bVRyYW5zYWN0aW9uRGF0YSB7XG4gIG1ldGhvZDogc3RyaW5nO1xuICBtZXRob2ROYW1lOiBzdHJpbmc7XG4gIGFyZ3M6IEV2bVRyYW5zYWN0aW9uQXJnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFBhcnNlRXZtQ29udHJhY3RJbnB1dCB7XG4gIGRhdGE6IHN0cmluZztcbiAgY29udHJhY3Q6IHN0cmluZztcbiAgY2hhaW5JZDogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBFdm1UcmFuc2FjdGlvbkRhdGEgPSBQYXJzZUV2bVRyYW5zYWN0aW9uRGF0YSB8IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVBhcnNlRXZtQ29udHJhY3RJbnB1dCB7XG4gIHJlc3VsdDogRXZtVHJhbnNhY3Rpb25EYXRhO1xufVxuXG4vLy8gTGVkZ2VyXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVkZ2VyTmV0d29yayB7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7IC8vIEdlbmVzaXNIYXNoIGZvciBzdWJzdHJhdGUgYXBwXG4gIG5ldHdvcmtOYW1lOiBzdHJpbmc7IC8vIERpc3BsYXkgaW4gc2VsZWN0b3JcbiAgYWNjb3VudE5hbWU6IHN0cmluZzsgLy8gTmFtZSBmb3IgYWNjb3VudChMZWRnZXIgWCBBY2NvdW50KVxuICBhcHBOYW1lOiBzdHJpbmc7IC8vIE5hbWUgaW4gTGVkZ2VyXG4gIG5ldHdvcms6IHN0cmluZzsgLy8gbmV0d29yayBpcyBwcmVkZWZpbmVkIGluIGxlZGdlciBsaWJcbiAgc2x1Zzogc3RyaW5nOyAvLyBzbHVnIGluIGNoYWluIGxpc3RcbiAgaWNvbjogJ3N1YnN0cmF0ZScgfCAnZXRoZXJldW0nOyAvLyBEZXByZWNhdGVkXG4gIGlzRGV2TW9kZTogYm9vbGVhbjsgLy8gRGV2IG1vZGUgb24gTGVkZ2VyXG4gIGlzRXRoZXJldW06IGJvb2xlYW47IC8vIFVzZSBmb3IgZXZtIGFjY291bnRcbn1cbi8vLyBPbi1yYW1wXG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNha05ldHdvcmsge1xuICBuZXR3b3Jrczogc3RyaW5nW107XG4gIHRva2Vucz86IHN0cmluZ1tdO1xufVxuXG4vLy8gUXIgU2lnblxuXG4vLyBQYXJzZSBTdWJzdHJhdGVcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXR0ZWRNZXRob2Qge1xuICBhcmdzPzogQXJnSW5mb1tdO1xuICBtZXRob2ROYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJnSW5mbyB7XG4gIGFyZ05hbWU6IHN0cmluZztcbiAgYXJnVmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVyYUluZm97XG4gIHBlcmlvZDogbnVtYmVyO1xuICBwaGFzZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUGFyc2VUcmFuc2FjdGlvblN1YnN0cmF0ZSB7XG4gIGVyYTogRXJhSW5mbyB8IHN0cmluZztcbiAgbm9uY2U6IG51bWJlcjtcbiAgbWV0aG9kOiBzdHJpbmcgfCBGb3JtYXR0ZWRNZXRob2RbXTtcbiAgdGlwOiBudW1iZXI7XG4gIHNwZWNWZXJzaW9uOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UGFyc2VUcmFuc2FjdGlvblN1YnN0cmF0ZSB7XG4gIGRhdGE6IHN0cmluZztcbiAgbmV0d29ya0tleTogc3RyaW5nO1xufVxuXG4vLyBQYXJzZSBFdm1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UXJQYXJzZVJMUCB7XG4gIGRhdGE6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVFyUGFyc2VSTFAge1xuICBkYXRhOiBFdm1UcmFuc2FjdGlvbkRhdGE7XG4gIGlucHV0OiBzdHJpbmc7XG4gIG5vbmNlOiBudW1iZXI7XG4gIHRvOiBzdHJpbmc7XG4gIGdhczogbnVtYmVyO1xuICBnYXNQcmljZTogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xufVxuXG4vLyBDaGVjayBsb2NrXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRJc0xvY2tlZCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUFjY291bnRJc0xvY2tlZCB7XG4gIGlzTG9ja2VkOiBib29sZWFuO1xuICByZW1haW5pbmdUaW1lOiBudW1iZXI7XG59XG5cbi8vIFNpZ25cblxuZXhwb3J0IHR5cGUgU2lnbmVyRGF0YVR5cGUgPSAndHJhbnNhY3Rpb24nIHwgJ21lc3NhZ2UnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFFyU2lnblN1YnN0cmF0ZSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0YTogc3RyaW5nO1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VRclNpZ25TdWJzdHJhdGUge1xuICBzaWduYXR1cmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UXJTaWduRXZtIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHR5cGU6ICdtZXNzYWdlJyB8ICd0cmFuc2FjdGlvbidcbiAgY2hhaW5JZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVFyU2lnbkV2bSB7XG4gIHNpZ25hdHVyZTogc3RyaW5nO1xufVxuXG4vLy8gVHJhbnNmZXJcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q2hlY2tUcmFuc2ZlciBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgZnJvbTogc3RyaW5nLFxuICB0bzogc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZyxcbiAgdHJhbnNmZXJBbGw/OiBib29sZWFuXG4gIHRva2VuU2x1Zzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGVUcmFuc2FjdGlvblJlc3BvbnNlIHtcbiAgZXJyb3JzOiBUcmFuc2FjdGlvbkVycm9yW10sXG4gIHdhcm5pbmdzOiBUcmFuc2FjdGlvbldhcm5pbmdbXSxcbiAgdHJhbnNmZXJOYXRpdmVBbW91bnQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFRyYW5zZmVyID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxSZXF1ZXN0Q2hlY2tUcmFuc2Zlcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENoZWNrQ3Jvc3NDaGFpblRyYW5zZmVyIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgb3JpZ2luTmV0d29ya0tleTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbk5ldHdvcmtLZXk6IHN0cmluZyxcbiAgZnJvbTogc3RyaW5nLFxuICB0bzogc3RyaW5nLFxuICB0cmFuc2ZlckFsbD86IGJvb2xlYW4sXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHRva2VuU2x1Zzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDcm9zc0NoYWluVHJhbnNmZXIgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFJlcXVlc3RDaGVja0Nyb3NzQ2hhaW5UcmFuc2Zlcj47XG5cbi8vLyBTdGFrZVxuXG4vLyBTdGFraW5nICYgQm9uZGluZ1xuZXhwb3J0IGludGVyZmFjZSBDaGFpblN0YWtpbmdNZXRhZGF0YSB7XG4gIGNoYWluOiBzdHJpbmc7XG4gIHR5cGU6IFN0YWtpbmdUeXBlO1xuXG4gIC8vIGVzc2VudGlhbFxuICBlcmE6IG51bWJlciwgLy8gYWxzbyByb3VuZCBmb3IgcGFyYWNoYWluc1xuICBtaW5Kb2luTm9taW5hdGlvblBvb2w/OiBzdHJpbmc7IC8vIGZvciByZWxheWNoYWluIHN1cHBvcnRzIG5vbWluYXRpb24gcG9vbFxuICBtaW5TdGFrZTogc3RyaW5nO1xuICBtYXhWYWxpZGF0b3JQZXJOb21pbmF0b3I6IG51bWJlcjtcbiAgbWF4V2l0aGRyYXdhbFJlcXVlc3RQZXJWYWxpZGF0b3I6IG51bWJlcjtcbiAgYWxsb3dDYW5jZWxVbnN0YWtpbmc6IGJvb2xlYW47XG4gIHVuc3Rha2luZ1BlcmlvZDogbnVtYmVyOyAvLyBpbiBob3Vyc1xuXG4gIC8vIHN1cHBsZW1lbnRhbFxuICBleHBlY3RlZFJldHVybj86IG51bWJlcjsgLy8gaW4gJSwgYW5udWFsbHlcbiAgaW5mbGF0aW9uPzogbnVtYmVyOyAvLyBpbiAlLCBhbm51YWxseVxuICBub21pbmF0b3JDb3VudD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb21pbmF0aW9uSW5mbyB7XG4gIGNoYWluOiBzdHJpbmc7XG4gIHZhbGlkYXRvckFkZHJlc3M6IHN0cmluZzsgLy8gY2FuIGJlIGEgbm9taW5hdGlvbiBwb29sIGlkXG4gIHZhbGlkYXRvcklkZW50aXR5Pzogc3RyaW5nO1xuICBhY3RpdmVTdGFrZTogc3RyaW5nO1xuXG4gIGhhc1Vuc3Rha2luZz86IGJvb2xlYW47XG4gIHZhbGlkYXRvck1pblN0YWtlPzogc3RyaW5nO1xuICBzdGF0dXM6IFN0YWtpbmdTdGF0dXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0Tm9taW5hdGlvblBvb2xzQm9uZGVkUG9vbElubmVyIHtcbiAgcG9pbnRzOiBudW1iZXIsXG4gIHN0YXRlOiAnT3BlbicgfCAnRGVzdHJveWluZycgfCAnTG9ja2VkJyxcbiAgbWVtYmVyQ291bnRlcjogbnVtYmVyLFxuICByb2xlczoge1xuICAgIGRlcG9zaXRvcjogc3RyaW5nLFxuICAgIHJvb3Q6IHN0cmluZyxcbiAgICBub21pbmF0b3I6IHN0cmluZyxcbiAgICBib3VuY2VyOiBzdHJpbmdcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vbWluYXRpb25Qb29sSW5mbyBleHRlbmRzIFBpY2s8UGFsbGV0Tm9taW5hdGlvblBvb2xzQm9uZGVkUG9vbElubmVyLCAncm9sZXMnIHwgJ21lbWJlckNvdW50ZXInIHwgJ3N0YXRlJz4ge1xuICBpZDogbnVtYmVyLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5hbWU/OiBzdHJpbmcsXG4gIGJvbmRlZEFtb3VudDogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIFVuc3Rha2luZ1N0YXR1cyB7XG4gIENMQUlNQUJMRSA9ICdDTEFJTUFCTEUnLFxuICBVTkxPQ0tJTkcgPSAnVU5MT0NLSU5HJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Rha2luZ0luZm8ge1xuICBjaGFpbjogc3RyaW5nO1xuICBzdGF0dXM6IFVuc3Rha2luZ1N0YXR1cztcbiAgY2xhaW1hYmxlOiBzdHJpbmc7IC8vIGFtb3VudCB0byBiZSB3aXRoZHJhd25cbiAgd2FpdGluZ1RpbWU6IG51bWJlcjsgLy8gaW4gaG91cnNcbiAgdmFsaWRhdG9yQWRkcmVzcz86IHN0cmluZzsgLy8gbWlnaHQgdW5zdGFrZSBmcm9tIGEgdmFsaWRhdG9yIG9yIG5vdFxufVxuXG5leHBvcnQgZW51bSBTdGFraW5nU3RhdHVzIHtcbiAgRUFSTklOR19SRVdBUkQgPSAnRUFSTklOR19SRVdBUkQnLFxuICBQQVJUSUFMTFlfRUFSTklORyA9ICdQQVJUSUFMTFlfRUFSTklORycsXG4gIE5PVF9FQVJOSU5HID0gJ05PVF9FQVJOSU5HJyxcbiAgV0FJVElORyA9ICdXQUlUSU5HJyxcbiAgTk9UX1NUQUtJTkcgPSAnTk9UX1NUQUtJTkcnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9taW5hdG9yTWV0YWRhdGEge1xuICBjaGFpbjogc3RyaW5nLFxuICB0eXBlOiBTdGFraW5nVHlwZSxcblxuICBzdGF0dXM6IFN0YWtpbmdTdGF0dXMsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgYWN0aXZlU3Rha2U6IHN0cmluZyxcbiAgbm9taW5hdGlvbnM6IE5vbWluYXRpb25JbmZvW10sXG4gIHVuc3Rha2luZ3M6IFVuc3Rha2luZ0luZm9bXSxcbiAgaXNCb25kZWRCZWZvcmU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdG9ySW5mbyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2hhaW46IHN0cmluZztcblxuICB0b3RhbFN0YWtlOiBzdHJpbmc7XG4gIG93blN0YWtlOiBzdHJpbmc7XG4gIG90aGVyU3Rha2U6IHN0cmluZztcblxuICBtaW5Cb25kOiBzdHJpbmc7XG4gIG5vbWluYXRvckNvdW50OiBudW1iZXI7XG4gIGNvbW1pc3Npb246IG51bWJlcjsgLy8gaW4gJVxuICBleHBlY3RlZFJldHVybj86IG51bWJlcjsgLy8gaW4gJSwgYW5udWFsbHlcblxuICBibG9ja2VkOiBib29sZWFuO1xuICBpZGVudGl0eT86IHN0cmluZztcbiAgaXNWZXJpZmllZDogYm9vbGVhbjtcbiAgaWNvbj86IHN0cmluZztcbiAgaXNDcm93ZGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvbmRpbmdTdWJtaXRQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBjaGFpbjogc3RyaW5nLFxuICB0eXBlOiBTdGFraW5nVHlwZSxcbiAgbm9taW5hdG9yTWV0YWRhdGE/OiBOb21pbmF0b3JNZXRhZGF0YSwgLy8gdW5kZWZpbmVkIGlmIHVzZXIgaGFzIG5vIHN0YWtlXG4gIGFtb3VudDogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIHNlbGVjdGVkVmFsaWRhdG9yczogVmFsaWRhdG9ySW5mb1tdLFxuICBsb2NrUGVyaW9kPzogbnVtYmVyIC8vIGluIG1vbnRoXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RCb25kaW5nU3VibWl0ID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxCb25kaW5nU3VibWl0UGFyYW1zPjtcblxuLy8gVW5Cb25kaW5nXG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5ib25kaW5nU3VibWl0UGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgYW1vdW50OiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YSxcbiAgLy8gZm9yIHNvbWUgY2hhaW5zXG4gIHZhbGlkYXRvckFkZHJlc3M/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFVuYm9uZGluZ1N1Ym1pdCA9IEludGVybmFsUmVxdWVzdFNpZ248VW5ib25kaW5nU3VibWl0UGFyYW1zPjtcblxuLy8gV2l0aGRyYXdTdGFrZVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlV2l0aGRyYXdhbFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YSxcbiAgdW5zdGFraW5nSW5mbzogVW5zdGFraW5nSW5mbyxcbiAgY2hhaW46IHN0cmluZyxcbiAgdmFsaWRhdG9yQWRkcmVzcz86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VXaXRoZHJhd2FsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZVdpdGhkcmF3YWxQYXJhbXM+O1xuXG4vLyBDbGFpbVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlQ2xhaW1SZXdhcmRQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIHN0YWtpbmdUeXBlOiBTdGFraW5nVHlwZSxcbiAgdW5jbGFpbWVkUmV3YXJkPzogc3RyaW5nLFxuICBib25kUmV3YXJkPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VDbGFpbVJld2FyZCA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VDbGFpbVJld2FyZFBhcmFtcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2VDYW5jZWxXaXRoZHJhd2FsUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBjaGFpbjogc3RyaW5nLFxuICBzZWxlY3RlZFVuc3Rha2luZzogVW5zdGFraW5nSW5mb1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VDYW5jZWxXaXRoZHJhd2FsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZUNhbmNlbFdpdGhkcmF3YWxQYXJhbXM+O1xuXG4vLyBDb21wb3VuZFxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlUG9vbGluZ0JvbmRpbmdQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBub21pbmF0b3JNZXRhZGF0YT86IE5vbWluYXRvck1ldGFkYXRhLFxuICBjaGFpbjogc3RyaW5nLFxuICBzZWxlY3RlZFBvb2w6IE5vbWluYXRpb25Qb29sSW5mbyxcbiAgYW1vdW50OiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VQb29saW5nQm9uZGluZyA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VQb29saW5nQm9uZGluZ1BhcmFtcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2VQb29saW5nVW5ib25kaW5nUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgbm9taW5hdG9yTWV0YWRhdGE6IE5vbWluYXRvck1ldGFkYXRhLFxuICBjaGFpbjogc3RyaW5nLFxuICBhbW91bnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VQb29saW5nVW5ib25kaW5nID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZVBvb2xpbmdVbmJvbmRpbmdQYXJhbXM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERlbGVnYXRpb25JdGVtIHtcbiAgb3duZXI6IHN0cmluZyxcbiAgYW1vdW50OiBzdHJpbmcsIC8vIHJhdyBhbW91bnQgc3RyaW5nXG4gIGlkZW50aXR5Pzogc3RyaW5nLFxuICBtaW5Cb25kOiBzdHJpbmcsXG4gIGhhc1NjaGVkdWxlZFJlcXVlc3Q6IGJvb2xlYW5cbiAgaWNvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFrZURlbGVnYXRpb25SZXF1ZXN0IHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBuZXR3b3JrS2V5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGVja0V4aXN0aW5nVHVyaW5nQ29tcG91bmRQYXJhbXMge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNvbGxhdG9yQWRkcmVzczogc3RyaW5nO1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhpc3RpbmdUdXJpbmdDb21wb3VuZFRhc2sge1xuICBleGlzdDogYm9vbGVhbjtcbiAgdGFza0lkOiBzdHJpbmc7XG4gIGFjY291bnRNaW5pbXVtOiBudW1iZXI7XG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR1cmluZ1N0YWtlQ29tcG91bmRSZXNwIHtcbiAgdHhJbmZvOiBCYXNpY1R4SW5mbyxcbiAgb3B0aW1hbEZyZXF1ZW5jeTogc3RyaW5nLFxuICBpbml0VGltZTogbnVtYmVyLFxuICBjb21wb3VuZEZlZTogc3RyaW5nLFxuICByYXdDb21wb3VuZEZlZT86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR1cmluZ1N0YWtlQ29tcG91bmRQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGNvbGxhdG9yQWRkcmVzczogc3RyaW5nLFxuICBuZXR3b3JrS2V5OiBzdHJpbmcsXG4gIGFjY291bnRNaW5pbXVtOiBzdHJpbmcsXG4gIGJvbmRlZEFtb3VudDogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VHVyaW5nU3Rha2VDb21wb3VuZCA9IEludGVybmFsUmVxdWVzdFNpZ248VHVyaW5nU3Rha2VDb21wb3VuZFBhcmFtcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHVyaW5nQ2FuY2VsU3Rha2VDb21wb3VuZFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIHRhc2tJZDogc3RyaW5nO1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmQgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmRQYXJhbXM+O1xuXG4vLy8gQ3JlYXRlIFFSXG5cbi8vIFRyYW5zZmVyXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RUcmFuc2ZlckV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxSZXF1ZXN0Q2hlY2tUcmFuc2Zlcj47XG5cbi8vIFhDTVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q3Jvc3NDaGFpblRyYW5zZmVyRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFJlcXVlc3RDaGVja0Nyb3NzQ2hhaW5UcmFuc2Zlcj47XG5cbi8vIE5GVFxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0TmZ0VHJhbnNmZXJFeHRlcm5hbFN1YnN0cmF0ZSA9IEludGVybmFsUmVxdWVzdFNpZ248U3Vic3RyYXRlTmZ0U3VibWl0VHJhbnNhY3Rpb24+O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0TmZ0VHJhbnNmZXJFeHRlcm5hbEV2bSA9IEludGVybmFsUmVxdWVzdFNpZ248RXZtTmZ0U3VibWl0VHJhbnNhY3Rpb24+O1xuXG4vLyBTdGFrZVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Rha2VFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248Qm9uZGluZ1N1Ym1pdFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RVblN0YWtlRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFVuYm9uZGluZ1N1Ym1pdFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RXaXRoZHJhd1N0YWtlRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN0YWtlV2l0aGRyYXdhbFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDbGFpbVJld2FyZEV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZUNsYWltUmV3YXJkUGFyYW1zPjtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENyZWF0ZUNvbXBvdW5kU3Rha2VFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248VHVyaW5nU3Rha2VDb21wb3VuZFBhcmFtcz47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDYW5jZWxDb21wb3VuZFN0YWtlRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmRQYXJhbXM+O1xuXG5leHBvcnQgZW51bSBDaGFpbkVkaXRTdGFuZGFyZCB7XG4gIEVWTSA9ICdFVk0nLFxuICBTVUJTVFJBVEUgPSAnU1VCU1RSQVRFJyxcbiAgVU5LTk9XTiA9ICdVTktOT1dOJyxcbiAgTUlYRUQgPSAnTUlYRUQnIC8vIHRha2VzIHJvb3QgaW4gYSBzdGFuZGFyZCAoU3Vic3RyYXRlLCBFdm0sLi4uKSBidXQgYWxzbyBjb21wYXRpYmxlIHdpdGggb3RoZXIgc3RhbmRhcmRzXG59XG5cbi8vIENoYWluU2VydmljZVxuLy8gZm9yIGN1c3RvbSBuZXR3b3JrXG5leHBvcnQgdHlwZSBDaGFpbkVkaXRJbmZvID0geyAvLyBvbmx5IHN1cHBvcnQgcHVyZSBzdWJzdHJhdGUgb3IgRXZtIG5ldHdvcmtcbiAgc2x1Zzogc3RyaW5nO1xuICBjdXJyZW50UHJvdmlkZXI6IHN0cmluZztcbiAgcHJvdmlkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoYWluVHlwZTogQ2hhaW5FZGl0U3RhbmRhcmQ7XG4gIGJsb2NrRXhwbG9yZXI/OiBzdHJpbmc7XG4gIGNyb3dkbG9hblVybD86IHN0cmluZztcbiAgcHJpY2VJZD86IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhaW5TcGVjSW5mbyB7XG4gIC8vIFN1YnN0cmF0ZVxuICBhZGRyZXNzUHJlZml4OiBudW1iZXIsXG4gIGdlbmVzaXNIYXNoOiBzdHJpbmcsXG4gIHBhcmFJZDogbnVtYmVyIHwgbnVsbCxcblxuICAvLyBFdm1cbiAgZXZtQ2hhaW5JZDogbnVtYmVyIHwgbnVsbCAvLyBudWxsIG1lYW5zIG5vdCBFdm1cblxuICAvLyBDb21tb25cbiAgZXhpc3RlbnRpYWxEZXBvc2l0OiBzdHJpbmcsXG4gIGRlY2ltYWxzOiBudW1iZXJcbn1cblxuLy8vIEtleXJpbmcgc3RhdGVcblxuZXhwb3J0IGludGVyZmFjZSBLZXlyaW5nU3RhdGUge1xuICBpc1JlYWR5OiBib29sZWFuO1xuICBoYXNNYXN0ZXJQYXNzd29yZDogYm9vbGVhbjtcbiAgaXNMb2NrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlWaWV3U3RhdGUge1xuICBpc1VJTG9ja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NCb29rU3RhdGUge1xuICBjb250YWN0czogQWRkcmVzc0pzb25bXTtcbiAgcmVjZW50OiBBZGRyZXNzSnNvbltdO1xufVxuXG4vLyBDaGFuZ2UgbWFzdGVyIHBhc3N3b3JkXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDaGFuZ2VNYXN0ZXJQYXNzd29yZCB7XG4gIG9sZFBhc3N3b3JkPzogc3RyaW5nO1xuICBuZXdQYXNzd29yZDogc3RyaW5nO1xuXG4gIGNyZWF0ZU5ldzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUNoYW5nZU1hc3RlclBhc3N3b3JkIHtcbiAgc3RhdHVzOiBib29sZWFuO1xuICBlcnJvcnM6IHN0cmluZ1tdO1xufVxuXG4vLyBNaWdyYXRlIHBhc3N3b3JkXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdE1pZ3JhdGVQYXNzd29yZCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZU1pZ3JhdGVQYXNzd29yZCB7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JzOiBzdHJpbmdbXTtcbn1cblxuLy8gVW5sb2NrXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFVubG9ja0tleXJpbmcge1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVW5sb2NrS2V5cmluZyB7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JzOiBzdHJpbmdbXTtcbn1cblxuLy8gRXhwb3J0IG1uZW1vbmljXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEtleXJpbmdFeHBvcnRNbmVtb25pYyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUtleXJpbmdFeHBvcnRNbmVtb25pYyB7XG4gIHJlc3VsdDogc3RyaW5nO1xufVxuXG4vLyBSZXNldCB3YWxsZXRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVzZXRXYWxsZXQge1xuICByZXNldEFsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVJlc2V0V2FsbGV0IHtcbiAgc3RhdHVzOiBib29sZWFuO1xuICBlcnJvcnM6IHN0cmluZ1tdO1xufVxuXG4vLy8gU2lnbmluZ1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0U2lnbmluZ0FwcHJvdmVQYXNzd29yZFYyIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NldFNldHRpbmdVcGRhdGVSZXEge1xuICB0b2tlblNsdWc6IHN0cmluZztcbiAgYXNzZXRTZXR0aW5nOiBBc3NldFNldHRpbmc7XG4gIGF1dG9FbmFibGVOYXRpdmVUb2tlbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEdldFRyYW5zYWN0aW9uIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuLy8gTW9iaWxlIHVwZGF0ZVxuZXhwb3J0IHR5cGUgU3Vic2NyaXB0aW9uU2VydmljZVR5cGUgPSAnY2hhaW5SZWdpc3RyeScgfCAnYmFsYW5jZScgfCAnY3Jvd2Rsb2FuJyB8ICdzdGFraW5nJztcbmV4cG9ydCB0eXBlIENyb25TZXJ2aWNlVHlwZSA9ICdwcmljZScgfCAnbmZ0JyB8ICdzdGFraW5nJyB8ICdoaXN0b3J5JyB8ICdyZWNvdmVyQXBpJyB8ICdjaGVja0FwaVN0YXR1cyc7XG5leHBvcnQgdHlwZSBDcm9uVHlwZSA9XG4gICdyZWNvdmVyQXBpTWFwJyB8XG4gICdjaGVja0FwaU1hcFN0YXR1cycgfFxuICAncmVmcmVzaEhpc3RvcnknIHxcbiAgJ3JlZnJlc2hOZnQnIHxcbiAgJ3JlZnJlc2hQcmljZScgfFxuICAncmVmcmVzaFN0YWtlVW5sb2NraW5nSW5mbycgfFxuICAncmVmcmVzaFN0YWtpbmdSZXdhcmQnIHxcbiAgJ3JlZnJlc2hQb29saW5nU3Rha2luZ1Jld2FyZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEluaXRDcm9uQW5kU3Vic2NyaXB0aW9uIHtcbiAgc3Vic2NyaXB0aW9uOiB7XG4gICAgYWN0aXZlU2VydmljZXM6IFN1YnNjcmlwdGlvblNlcnZpY2VUeXBlW11cbiAgfSxcbiAgY3Jvbjoge1xuICAgIGludGVydmFsTWFwOiBQYXJ0aWFsPFJlY29yZDxDcm9uVHlwZSwgbnVtYmVyPj4sXG4gICAgYWN0aXZlU2VydmljZXM6IENyb25TZXJ2aWNlVHlwZVtdXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q3JvbkFuZFN1YnNjcmlwdGlvbkFjdGlvbiB7XG4gIHN1YnNjcmlwdGlvblNlcnZpY2VzOiBTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZVtdO1xuICBjcm9uU2VydmljZXM6IENyb25TZXJ2aWNlVHlwZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZUNyb25BbmRTdWJzY3JpcHRpb25NYXAge1xuICBzdWJzY3JpcHRpb246IFJlY29yZDxTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZSwgYm9vbGVhbj47XG4gIGNyb246IFJlY29yZDxDcm9uU2VydmljZVR5cGUsIGJvb2xlYW4+O1xufVxuXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25UeXBlIHtcbiAgSU5GTyA9ICdpbmZvJyxcbiAgU1VDQ0VTUyA9ICdzdWNjZXNzJyxcbiAgV0FSTklORyA9ICd3YXJuaW5nJyxcbiAgRVJST1IgPSAnZXJyb3InLFxufVxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBOb3RpZmljYXRpb25UeXBlO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG5vdGlmeVZpYUJyb3dzZXI/OiBib29sZWFuO1xuICBhY3Rpb24/OiB7XG4gICAgdXJsPzogc3RyaW5nOyAvLyBBZGQgbW9yZSBhY3Rpb24gaW4gdGhlIGZ1dHVyZVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvblBhcmFtcyA9IE9taXQ8Tm90aWZpY2F0aW9uLCAnaWQnPjtcblxuZXhwb3J0IGludGVyZmFjZSBDcm9uUmVsb2FkUmVxdWVzdCB7XG4gIGRhdGE6ICduZnQnIHwgJ3N0YWtpbmcnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxsTG9nb01hcCB7XG4gIGNoYWluTG9nb01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICBhc3NldExvZ29NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuLy8gUGhpc2hpbmcgZGV0ZWN0XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFzc1BoaXNoaW5nIHtcbiAgcGFzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UGFzc1BoaXNoaW5nUGFnZSB7XG4gIHVybDogc3RyaW5nO1xufVxuXG4vLyBQc3AgdG9rZW5cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWRkUHNwVG9rZW4ge1xuICBnZW5lc2lzSGFzaDogc3RyaW5nO1xuICB0b2tlbkluZm86IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIHN5bWJvbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZWNpbWFscz86IG51bWJlcjtcbiAgICBsb2dvPzogc3RyaW5nO1xuICB9O1xufVxuXG4vLy8gV2FsbGV0Q29ubmVjdFxuXG4vLyBDb25uZWN0XG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDb25uZWN0V2FsbGV0Q29ubmVjdCB7XG4gIHVyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZWplY3RDb25uZWN0V2FsbGV0U2Vzc2lvbiB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFwcHJvdmVDb25uZWN0V2FsbGV0U2Vzc2lvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIGFjY291bnRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVjb25uZWN0Q29ubmVjdFdhbGxldFNlc3Npb24ge1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3REaXNjb25uZWN0V2FsbGV0Q29ubmVjdFNlc3Npb24ge1xuICB0b3BpYzogc3RyaW5nXG59XG5cbi8vIE5vdCBzdXBwb3J0XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlamVjdFdhbGxldENvbm5lY3ROb3RTdXBwb3J0IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXBwcm92ZVdhbGxldENvbm5lY3ROb3RTdXBwb3J0IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuLy8vIE1hbnRhXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFudGFQYXlDb25maWcge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHprQWRkcmVzczogc3RyaW5nO1xuICBlbmFibGVkOiBib29sZWFuO1xuICBjaGFpbjogc3RyaW5nO1xuICBpc0luaXRpYWxTeW5jOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hbnRhQXV0aG9yaXphdGlvbkNvbnRleHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNoYWluOiBzdHJpbmc7XG4gIGRhdGE6IHVua25vd247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFudGFQYXlTeW5jU3RhdGUge1xuICBpc1N5bmNpbmc6IGJvb2xlYW4sXG4gIHByb2dyZXNzOiBudW1iZXIsXG4gIG5lZWRNYW51YWxTeW5jPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hbnRhUGF5RW5hYmxlUGFyYW1zIHtcbiAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIE1hbnRhUGF5RW5hYmxlTWVzc2FnZSB7XG4gIFdST05HX1BBU1NXT1JEID0gJ1dST05HX1BBU1NXT1JEJyxcbiAgQ0hBSU5fRElTQ09OTkVDVEVEID0gJ0NIQUlOX0RJU0NPTk5FQ1RFRCcsXG4gIFVOS05PV05fRVJST1IgPSAnVU5LTk9XTl9FUlJPUicsXG4gIFNVQ0NFU1MgPSAnU1VDQ0VTUydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYW50YVBheUVuYWJsZVJlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbWVzc2FnZTogTWFudGFQYXlFbmFibGVNZXNzYWdlXG59XG5cbi8vLyBNZXRhZGF0YVxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RmluZFJhd01ldGFkYXRhIHtcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUZpbmRSYXdNZXRhZGF0YSB7XG4gIHJhd01ldGFkYXRhOiBzdHJpbmc7XG4gIHNwZWNWZXJzaW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb2x2ZURvbWFpblJlcXVlc3Qge1xuICBjaGFpbjogc3RyaW5nLFxuICBkb21haW46IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVBZGRyZXNzVG9Eb21haW5SZXF1ZXN0IHtcbiAgY2hhaW46IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nXG59XG5cbi8vIFVzZSBzdHJpbmdpZnkgdG8gY29tbXVuaWNhdGUsIHB1cmUgYm9vbGVhbiB2YWx1ZSB3aWxsIGVycm9yIHdpdGggY2FzZSAnZmFsc2UnIHZhbHVlXG5leHBvcnQgaW50ZXJmYWNlIEtvbmlSZXF1ZXN0U2lnbmF0dXJlcyB7XG4gIC8vIEJvbmRpbmcgZnVuY3Rpb25zXG4gICdwcmkoc3Rha2luZy5zdWJtaXRUdXJpbmdDYW5jZWxDb21wb3VuZCknOiBbUmVxdWVzdFR1cmluZ0NhbmNlbFN0YWtlQ29tcG91bmQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoc3Rha2luZy5zdWJtaXRUdXJpbmdDb21wb3VuZCknOiBbUmVxdWVzdFR1cmluZ1N0YWtlQ29tcG91bmQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoc3Rha2luZy5zdWJtaXRDbGFpbVJld2FyZCknOiBbUmVxdWVzdFN0YWtlQ2xhaW1SZXdhcmQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoc3Rha2luZy5zdWJtaXRDYW5jZWxXaXRoZHJhd2FsKSc6IFtSZXF1ZXN0U3Rha2VDYW5jZWxXaXRoZHJhd2FsLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKHVuYm9uZGluZy5zdWJtaXRXaXRoZHJhd2FsKSc6IFtSZXF1ZXN0U3Rha2VXaXRoZHJhd2FsLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKHVuYm9uZGluZy5zdWJtaXRUcmFuc2FjdGlvbiknOiBbUmVxdWVzdFVuYm9uZGluZ1N1Ym1pdCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShib25kaW5nLnN1Ym1pdEJvbmRpbmdUcmFuc2FjdGlvbiknOiBbUmVxdWVzdEJvbmRpbmdTdWJtaXQsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoYm9uZGluZy5zdWJzY3JpYmVDaGFpblN0YWtpbmdNZXRhZGF0YSknOiBbbnVsbCwgQ2hhaW5TdGFraW5nTWV0YWRhdGFbXSwgQ2hhaW5TdGFraW5nTWV0YWRhdGFbXV07XG4gICdwcmkoYm9uZGluZy5zdWJzY3JpYmVOb21pbmF0b3JNZXRhZGF0YSknOiBbbnVsbCwgTm9taW5hdG9yTWV0YWRhdGFbXSwgTm9taW5hdG9yTWV0YWRhdGFbXV07XG4gICdwcmkoYm9uZGluZy5nZXRCb25kaW5nT3B0aW9ucyknOiBbQm9uZGluZ09wdGlvblBhcmFtcywgVmFsaWRhdG9ySW5mb1tdXTtcbiAgJ3ByaShib25kaW5nLmdldE5vbWluYXRpb25Qb29sT3B0aW9ucyknOiBbc3RyaW5nLCBOb21pbmF0aW9uUG9vbEluZm9bXV07XG4gICdwcmkoYm9uZGluZy5ub21pbmF0aW9uUG9vbC5zdWJtaXRCb25kaW5nKSc6IFtSZXF1ZXN0U3Rha2VQb29saW5nQm9uZGluZywgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShib25kaW5nLm5vbWluYXRpb25Qb29sLnN1Ym1pdFVuYm9uZGluZyknOiBbUmVxdWVzdFN0YWtlUG9vbGluZ1VuYm9uZGluZywgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcblxuICAvLyBDaGFpbnMsIGFzc2V0cyBmdW5jdGlvbnNcbiAgJ3ByaShjaGFpblNlcnZpY2Uuc3Vic2NyaWJlQ2hhaW5JbmZvTWFwKSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBSZWNvcmQ8c3RyaW5nLCBhbnk+XTtcbiAgJ3ByaShjaGFpblNlcnZpY2Uuc3Vic2NyaWJlQ2hhaW5TdGF0ZU1hcCknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgYW55PiwgUmVjb3JkPHN0cmluZywgYW55Pl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnN1YnNjcmliZUFzc2V0UmVnaXN0cnkpJzogW251bGwsIFJlY29yZDxzdHJpbmcsIGFueT4sIFJlY29yZDxzdHJpbmcsIGFueT5dO1xuICAncHJpKGNoYWluU2VydmljZS5zdWJzY3JpYmVNdWx0aUNoYWluQXNzZXRNYXApJzogW251bGwsIFJlY29yZDxzdHJpbmcsIF9NdWx0aUNoYWluQXNzZXQ+LCBSZWNvcmQ8c3RyaW5nLCBfTXVsdGlDaGFpbkFzc2V0Pl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnN1YnNjcmliZVhjbVJlZk1hcCknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgX0Fzc2V0UmVmPiwgUmVjb3JkPHN0cmluZywgX0Fzc2V0UmVmPl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnVwc2VydENoYWluKSc6IFtfTmV0d29ya1Vwc2VydFBhcmFtcywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmVuYWJsZUNoYWlucyknOiBbRW5hYmxlTXVsdGlDaGFpblBhcmFtcywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmVuYWJsZUNoYWluKSc6IFtFbmFibGVDaGFpblBhcmFtcywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnJlY29ubmVjdENoYWluKSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5kaXNhYmxlQ2hhaW5zKSc6IFtzdHJpbmdbXSwgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmRpc2FibGVDaGFpbiknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UucmVtb3ZlQ2hhaW4pJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmRlbGV0ZUN1c3RvbUFzc2V0KSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS51cHNlcnRDdXN0b21Bc3NldCknOiBbUmVjb3JkPHN0cmluZywgYW55PiwgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnZhbGlkYXRlQ3VzdG9tQXNzZXQpJzogW19WYWxpZGF0ZUN1c3RvbUFzc2V0UmVxdWVzdCwgX1ZhbGlkYXRlQ3VzdG9tQXNzZXRSZXNwb25zZV07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnJlc2V0RGVmYXVsdENoYWlucyknOiBbbnVsbCwgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmdldFN1cHBvcnRlZENvbnRyYWN0VHlwZXMpJzogW251bGwsIHN0cmluZ1tdXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UudmFsaWRhdGVDdXN0b21DaGFpbiknOiBbVmFsaWRhdGVOZXR3b3JrUmVxdWVzdCwgVmFsaWRhdGVOZXR3b3JrUmVzcG9uc2VdO1xuICAncHJpKGNoYWluU2VydmljZS5yZWNvdmVyU3Vic3RyYXRlQXBpKSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5kaXNhYmxlQWxsQ2hhaW5zKSc6IFtudWxsLCBib29sZWFuXTtcbiAgJ3ByaShhc3NldFNldHRpbmcuZ2V0U3Vic2NyaXB0aW9uKSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBBc3NldFNldHRpbmc+LCBSZWNvcmQ8c3RyaW5nLCBBc3NldFNldHRpbmc+XVxuICAncHJpKGFzc2V0U2V0dGluZy51cGRhdGUpJzogW0Fzc2V0U2V0dGluZ1VwZGF0ZVJlcSwgYm9vbGVhbl07XG5cbiAgLy8gTkZUIGZ1bmN0aW9uc1xuICAncHJpKGV2bU5mdC5zdWJtaXRUcmFuc2FjdGlvbiknOiBbTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0LCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGV2bU5mdC5nZXRUcmFuc2FjdGlvbiknOiBbTmZ0VHJhbnNhY3Rpb25SZXF1ZXN0LCBFdm1OZnRUcmFuc2FjdGlvbl07XG4gICdwcmkoc3Vic3RyYXRlTmZ0LnN1Ym1pdFRyYW5zYWN0aW9uKSc6IFtOZnRUcmFuc2FjdGlvblJlcXVlc3QsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoc3Vic3RyYXRlTmZ0LmdldFRyYW5zYWN0aW9uKSc6IFtOZnRUcmFuc2FjdGlvblJlcXVlc3QsIFN1YnN0cmF0ZU5mdFRyYW5zYWN0aW9uXTtcbiAgJ3ByaShuZnQuZ2V0TmZ0KSc6IFtudWxsLCBOZnRKc29uXTtcbiAgJ3ByaShuZnQuZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlTmZ0LCBOZnRKc29uLCBOZnRKc29uXTtcbiAgJ3ByaShuZnRDb2xsZWN0aW9uLmdldE5mdENvbGxlY3Rpb24pJzogW251bGwsIE5mdENvbGxlY3Rpb25Kc29uXTtcbiAgJ3ByaShuZnRDb2xsZWN0aW9uLmdldFN1YnNjcmlwdGlvbiknOiBbbnVsbCwgTmZ0Q29sbGVjdGlvbltdLCBOZnRDb2xsZWN0aW9uW11dO1xuXG4gIC8vIFN0YWtpbmcgZnVuY3Rpb25zXG4gICdwcmkoc3Rha2luZy5nZXRTdGFraW5nKSc6IFtudWxsLCBTdGFraW5nSnNvbl07XG4gICdwcmkoc3Rha2luZy5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVTdGFraW5nLCBTdGFraW5nSnNvbiwgU3Rha2luZ0pzb25dO1xuICAncHJpKHN0YWtpbmdSZXdhcmQuZ2V0U3Rha2luZ1Jld2FyZCknOiBbbnVsbCwgU3Rha2luZ1Jld2FyZEpzb25dO1xuICAncHJpKHN0YWtpbmdSZXdhcmQuZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlU3Rha2luZ1Jld2FyZCwgU3Rha2luZ1Jld2FyZEpzb24sIFN0YWtpbmdSZXdhcmRKc29uXTtcblxuICAvLyBQcmljZSwgYmFsYW5jZSwgY3Jvd2Rsb2FuIGZ1bmN0aW9uc1xuICAncHJpKHByaWNlLmdldFByaWNlKSc6IFtSZXF1ZXN0UHJpY2UsIFByaWNlSnNvbl07XG4gICdwcmkocHJpY2UuZ2V0U3Vic2NyaXB0aW9uKSc6IFtSZXF1ZXN0U3Vic2NyaWJlUHJpY2UsIFByaWNlSnNvbiwgUHJpY2VKc29uXTtcbiAgJ3ByaShiYWxhbmNlLmdldEJhbGFuY2UpJzogW1JlcXVlc3RCYWxhbmNlLCBCYWxhbmNlSnNvbl07XG4gICdwcmkoYmFsYW5jZS5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVCYWxhbmNlLCBCYWxhbmNlSnNvbiwgQmFsYW5jZUpzb25dO1xuICAncHJpKGNyb3dkbG9hbi5nZXRDcm93ZGxvYW4pJzogW1JlcXVlc3RDcm93ZGxvYW4sIENyb3dkbG9hbkpzb25dO1xuICAncHJpKGNyb3dkbG9hbi5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVDcm93ZGxvYW4sIENyb3dkbG9hbkpzb24sIENyb3dkbG9hbkpzb25dO1xuXG4gIC8vIFBoaXNoaW5nIHBhZ2VcbiAgJ3ByaShwaGlzaGluZy5wYXNzKSc6IFtSZXF1ZXN0UGFzc1BoaXNoaW5nUGFnZSwgYm9vbGVhbl07XG5cbiAgLy8gTWFudGEgcGF5XG4gICdwcmkobWFudGFQYXkuZW5hYmxlKSc6IFtNYW50YVBheUVuYWJsZVBhcmFtcywgTWFudGFQYXlFbmFibGVSZXNwb25zZV07XG4gICdwcmkobWFudGFQYXkuZGlzYWJsZSknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShtYW50YVBheS5nZXRaa0JhbGFuY2UpJzogW251bGwsIG51bGxdO1xuICAncHJpKG1hbnRhUGF5LnN1YnNjcmliZUNvbmZpZyknOiBbbnVsbCwgTWFudGFQYXlDb25maWdbXSwgTWFudGFQYXlDb25maWdbXV07XG4gICdwcmkobWFudGFQYXkuc3Vic2NyaWJlU3luY2luZ1N0YXRlKSc6IFtudWxsLCBNYW50YVBheVN5bmNTdGF0ZSwgTWFudGFQYXlTeW5jU3RhdGVdO1xuICAncHJpKG1hbnRhUGF5LmluaXRTeW5jTWFudGFQYXkpJzogW3N0cmluZywgbnVsbF07XG5cbiAgLy8gQXV0aFxuICAncHJpKGF1dGhvcml6ZS5saXN0VjIpJzogW251bGwsIFJlc3BvbnNlQXV0aG9yaXplTGlzdF07XG4gICdwcmkoYXV0aG9yaXplLnJlcXVlc3RzVjIpJzogW1JlcXVlc3RBdXRob3JpemVTdWJzY3JpYmUsIEF1dGhvcml6ZVJlcXVlc3RbXSwgQXV0aG9yaXplUmVxdWVzdFtdXTtcbiAgJ3ByaShhdXRob3JpemUuYXBwcm92ZVYyKSc6IFtSZXF1ZXN0QXV0aG9yaXplQXBwcm92ZVYyLCBib29sZWFuXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZUFsbCknOiBbUmVxdWVzdEF1dGhvcml6YXRpb25BbGwsIGJvb2xlYW4sIEF1dGhVcmxzXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZSknOiBbUmVxdWVzdEF1dGhvcml6YXRpb24sIGJvb2xlYW4sIEF1dGhVcmxzXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZVBlckFjY291bnQpJzogW1JlcXVlc3RBdXRob3JpemF0aW9uUGVyQWNjb3VudCwgYm9vbGVhbiwgQXV0aFVybHNdO1xuICAncHJpKGF1dGhvcml6ZS5jaGFuZ2VTaXRlUGVyU2l0ZSknOiBbUmVxdWVzdEF1dGhvcml6YXRpb25QZXJTaXRlLCBib29sZWFuXTtcbiAgJ3ByaShhdXRob3JpemUuY2hhbmdlU2l0ZUJsb2NrKSc6IFtSZXF1ZXN0QXV0aG9yaXphdGlvbkJsb2NrLCBib29sZWFuXTtcbiAgJ3ByaShhdXRob3JpemUuZm9yZ2V0U2l0ZSknOiBbUmVxdWVzdEZvcmdldFNpdGUsIGJvb2xlYW4sIEF1dGhVcmxzXTtcbiAgJ3ByaShhdXRob3JpemUuZm9yZ2V0QWxsU2l0ZSknOiBbbnVsbCwgYm9vbGVhbiwgQXV0aFVybHNdO1xuICAncHJpKGF1dGhvcml6ZS5yZWplY3RWMiknOiBbUmVxdWVzdEF1dGhvcml6ZVJlamVjdCwgYm9vbGVhbl07XG4gICdwcmkoYXV0aG9yaXplLmNhbmNlbFYyKSc6IFtSZXF1ZXN0QXV0aG9yaXplQ2FuY2VsLCBib29sZWFuXTtcblxuICAvKiBBY2NvdW50IG1hbmFnZW1lbnQgKi9cblxuICAvLyBWYWxpZGF0ZVxuICAncHJpKHNlZWQudmFsaWRhdGVWMiknOiBbUmVxdWVzdFNlZWRWYWxpZGF0ZVYyLCBSZXNwb25zZVNlZWRWYWxpZGF0ZVYyXTtcbiAgJ3ByaShwcml2YXRlS2V5LnZhbGlkYXRlVjIpJzogW1JlcXVlc3RTZWVkVmFsaWRhdGVWMiwgUmVzcG9uc2VQcml2YXRlS2V5VmFsaWRhdGVWMl07XG4gICdwcmkoYWNjb3VudHMuY2hlY2tQdWJsaWNBbmRTZWNyZXRLZXkpJzogW1JlcXVlc3RDaGVja1B1YmxpY0FuZFNlY3JldEtleSwgUmVzcG9uc2VDaGVja1B1YmxpY0FuZFNlY3JldEtleV07XG5cbiAgLy8gQ3JlYXRlIGFjY291bnRcbiAgJ3ByaShzZWVkLmNyZWF0ZVYyKSc6IFtSZXF1ZXN0U2VlZENyZWF0ZVYyLCBSZXNwb25zZVNlZWRDcmVhdGVWMl07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLnN1cmlWMiknOiBbUmVxdWVzdEFjY291bnRDcmVhdGVTdXJpVjIsIFJlc3BvbnNlQWNjb3VudENyZWF0ZVN1cmlWMl07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLmV4dGVybmFsVjIpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlRXh0ZXJuYWxWMiwgQWNjb3VudEV4dGVybmFsRXJyb3JbXV07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLmhhcmR3YXJlVjIpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlSGFyZHdhcmVWMiwgYm9vbGVhbl07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLmhhcmR3YXJlTXVsdGlwbGUpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlSGFyZHdhcmVNdWx0aXBsZSwgYm9vbGVhbl07XG4gICdwcmkoYWNjb3VudHMuY3JlYXRlLndpdGhTZWNyZXQpJzogW1JlcXVlc3RBY2NvdW50Q3JlYXRlV2l0aFNlY3JldEtleSwgUmVzcG9uc2VBY2NvdW50Q3JlYXRlV2l0aFNlY3JldEtleV07XG5cbiAgLy8gSW5qZWN0IGFjY291bnRcbiAgJ3ByaShhY2NvdW50cy5pbmplY3QuYWRkKSc6IFtSZXF1ZXN0QWRkSW5qZWN0ZWRBY2NvdW50cywgYm9vbGVhbl07XG4gICdwcmkoYWNjb3VudHMuaW5qZWN0LnJlbW92ZSknOiBbUmVxdWVzdFJlbW92ZUluamVjdGVkQWNjb3VudHMsIGJvb2xlYW5dO1xuXG4gIC8vIERlcml2ZVxuICAncHJpKGRlcml2YXRpb24uY3JlYXRlVjIpJzogW1JlcXVlc3REZXJpdmVDcmVhdGVWMiwgYm9vbGVhbl07IC8vIFN1YnN0cmF0ZVxuXG4gIC8vIFJlc3RvcmUgYnkganNvblxuICAncHJpKGpzb24ucmVzdG9yZVYyKSc6IFtSZXF1ZXN0SnNvblJlc3RvcmVWMiwgdm9pZF07XG4gICdwcmkoanNvbi5iYXRjaFJlc3RvcmVWMiknOiBbUmVxdWVzdEJhdGNoUmVzdG9yZVYyLCB2b2lkXTtcblxuICAvLyBFeHBvcnQgYWNjb3VudFxuICAncHJpKGFjY291bnRzLmV4cG9ydFByaXZhdGVLZXkpJzogW1JlcXVlc3RBY2NvdW50RXhwb3J0UHJpdmF0ZUtleSwgUmVzcG9uc2VBY2NvdW50RXhwb3J0UHJpdmF0ZUtleV07XG5cbiAgLy8gQ3VycmVudCBhY2NvdW50XG4gICdwcmkoYWNjb3VudHMuc3Vic2NyaWJlV2l0aEN1cnJlbnRBZGRyZXNzKSc6IFtSZXF1ZXN0QWNjb3VudFN1YnNjcmliZSwgQWNjb3VudHNXaXRoQ3VycmVudEFkZHJlc3MsIEFjY291bnRzV2l0aEN1cnJlbnRBZGRyZXNzXTtcbiAgJ3ByaShhY2NvdW50cy51cGRhdGVDdXJyZW50QWRkcmVzcyknOiBbc3RyaW5nLCBib29sZWFuXTsgLy8gb2xkXG4gICdwcmkoY3VycmVudEFjY291bnQuc2F2ZUFkZHJlc3MpJzogW1JlcXVlc3RDdXJyZW50QWNjb3VudEFkZHJlc3MsIEN1cnJlbnRBY2NvdW50SW5mb107XG4gICdwcmkoYWNjb3VudHMuZ2V0Lm1ldGEpJzogW1JlcXVlc3RBY2NvdW50TWV0YSwgUmVzcG9uc2VBY2NvdW50TWV0YV07XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gICdwcmkoYWNjb3VudHMuc2F2ZVJlY2VudCknOiBbUmVxdWVzdFNhdmVSZWNlbnRBY2NvdW50LCBLZXlyaW5nQWRkcmVzc107XG4gICdwcmkoYWNjb3VudHMuc3Vic2NyaWJlQWRkcmVzc2VzKSc6IFtudWxsLCBBZGRyZXNzQm9va0luZm8sIEFkZHJlc3NCb29rSW5mb107XG4gICdwcmkoYWNjb3VudHMuZWRpdENvbnRhY3QpJzogW1JlcXVlc3RFZGl0Q29udGFjdEFjY291bnQsIGJvb2xlYW5dO1xuICAncHJpKGFjY291bnRzLmRlbGV0ZUNvbnRhY3QpJzogW1JlcXVlc3REZWxldGVDb250YWN0QWNjb3VudCwgYm9vbGVhbl07XG5cbiAgLy8gRG9tYWluIG5hbWVcbiAgJ3ByaShhY2NvdW50cy5yZXNvbHZlRG9tYWluVG9BZGRyZXNzKSc6IFtSZXNvbHZlRG9tYWluUmVxdWVzdCwgc3RyaW5nIHwgdW5kZWZpbmVkXTtcbiAgJ3ByaShhY2NvdW50cy5yZXNvbHZlQWRkcmVzc1RvRG9tYWluKSc6IFtSZXNvbHZlQWRkcmVzc1RvRG9tYWluUmVxdWVzdCwgc3RyaW5nIHwgdW5kZWZpbmVkXTtcblxuICAvLyBGb3IgaW5wdXQgVUlcbiAgJ3ByaShhY2NvdW50cy5zdWJzY3JpYmVBY2NvdW50c0lucHV0QWRkcmVzcyknOiBbUmVxdWVzdEFjY291bnRTdWJzY3JpYmUsIHN0cmluZywgT3B0aW9uSW5wdXRBZGRyZXNzXTtcblxuICAvKiBBY2NvdW50IG1hbmFnZW1lbnQgKi9cblxuICAvLyBTZXR0aW5nc1xuICAncHJpKHNldHRpbmdzLmNoYW5nZUJhbGFuY2VzVmlzaWJpbGl0eSknOiBbbnVsbCwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc3Vic2NyaWJlKSc6IFtudWxsLCBVaVNldHRpbmdzLCBVaVNldHRpbmdzXTtcbiAgJ3ByaShzZXR0aW5ncy5nZXRMb2dvTWFwcyknOiBbbnVsbCwgQWxsTG9nb01hcF07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUFjY291bnRBbGxMb2dvKSc6IFtzdHJpbmcsIGJvb2xlYW4sIFVpU2V0dGluZ3NdO1xuICAncHJpKHNldHRpbmdzLnNhdmVUaGVtZSknOiBbVGhlbWVOYW1lcywgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUJyb3dzZXJDb25maXJtYXRpb25UeXBlKSc6IFtCcm93c2VyQ29uZmlybWF0aW9uVHlwZSwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUNhbWVyYSknOiBbUmVxdWVzdENhbWVyYVNldHRpbmdzLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlQXV0b0xvY2tUaW1lKSc6IFtSZXF1ZXN0Q2hhbmdlVGltZUF1dG9Mb2NrLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlVW5sb2NrVHlwZSknOiBbUmVxdWVzdFVubG9ja1R5cGUsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVFbmFibGVDaGFpblBhdHJvbCknOiBbUmVxdWVzdENoYW5nZUVuYWJsZUNoYWluUGF0cm9sLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlTGFuZ3VhZ2UpJzogW1JlcXVlc3RDaGFuZ2VMYW5ndWFnZSwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZVNob3daZXJvQmFsYW5jZSknOiBbUmVxdWVzdENoYW5nZVNob3daZXJvQmFsYW5jZSwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZVNob3dCYWxhbmNlKSc6IFtSZXF1ZXN0Q2hhbmdlU2hvd0JhbGFuY2UsIGJvb2xlYW5dO1xuXG4gIC8vIFN1YnNjcmlwdGlvblxuICAncHJpKHRyYW5zYWN0aW9uLmhpc3RvcnkuZ2V0U3Vic2NyaXB0aW9uKSc6IFtudWxsLCBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtW10sIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW1bXV07XG4gIC8vICdwcmkodHJhbnNhY3Rpb24uaGlzdG9yeS5hZGQpJzogW1JlcXVlc3RUcmFuc2FjdGlvbkhpc3RvcnlBZGQsIGJvb2xlYW4sIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW1bXV07XG4gICdwcmkodHJhbnNmZXIuY2hlY2tSZWZlcmVuY2VDb3VudCknOiBbUmVxdWVzdFRyYW5zZmVyQ2hlY2tSZWZlcmVuY2VDb3VudCwgYm9vbGVhbl07XG4gICdwcmkodHJhbnNmZXIuY2hlY2tTdXBwb3J0aW5nKSc6IFtSZXF1ZXN0VHJhbnNmZXJDaGVja1N1cHBvcnRpbmcsIFN1cHBvcnRUcmFuc2ZlclJlc3BvbnNlXTtcbiAgJ3ByaSh0cmFuc2Zlci5nZXRFeGlzdGVudGlhbERlcG9zaXQpJzogW1JlcXVlc3RUcmFuc2ZlckV4aXN0ZW50aWFsRGVwb3NpdCwgc3RyaW5nXTtcbiAgJ3ByaSh0cmFuc2Zlci5nZXRNYXhUcmFuc2ZlcmFibGUpJzogW1JlcXVlc3RNYXhUcmFuc2ZlcmFibGUsIEFtb3VudERhdGFdO1xuICAncHJpKHN1YnNjcmlwdGlvbi5jYW5jZWwpJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkoZnJlZUJhbGFuY2UuZ2V0KSc6IFtSZXF1ZXN0RnJlZUJhbGFuY2UsIEFtb3VudERhdGFdO1xuICAncHJpKGZyZWVCYWxhbmNlLnN1YnNjcmliZSknOiBbUmVxdWVzdEZyZWVCYWxhbmNlLCBBbW91bnREYXRhLCBBbW91bnREYXRhXTtcblxuICAvLyBUcmFuc2ZlclxuICAncHJpKGFjY291bnRzLmNoZWNrVHJhbnNmZXIpJzogW1JlcXVlc3RDaGVja1RyYW5zZmVyLCBWYWxpZGF0ZVRyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGFjY291bnRzLnRyYW5zZmVyKSc6IFtSZXF1ZXN0VHJhbnNmZXIsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG5cbiAgJ3ByaShhY2NvdW50cy5jaGVja0Nyb3NzQ2hhaW5UcmFuc2ZlciknOiBbUmVxdWVzdENoZWNrQ3Jvc3NDaGFpblRyYW5zZmVyLCBWYWxpZGF0ZVRyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGFjY291bnRzLmNyb3NzQ2hhaW5UcmFuc2ZlciknOiBbUmVxdWVzdENyb3NzQ2hhaW5UcmFuc2ZlciwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcblxuICAvLyBDb25maXJtYXRpb24gUXVldWVzXG4gICdwcmkoY29uZmlybWF0aW9ucy5zdWJzY3JpYmUpJzogW1JlcXVlc3RDb25maXJtYXRpb25zU3Vic2NyaWJlLCBDb25maXJtYXRpb25zUXVldWUsIENvbmZpcm1hdGlvbnNRdWV1ZV07XG4gICdwcmkoY29uZmlybWF0aW9ucy5jb21wbGV0ZSknOiBbUmVxdWVzdENvbmZpcm1hdGlvbkNvbXBsZXRlLCBib29sZWFuXTtcblxuICAncHViKHV0aWxzLmdldFJhbmRvbSknOiBbUmFuZG9tVGVzdFJlcXVlc3QsIG51bWJlcl07XG4gICdwdWIoYWNjb3VudHMubGlzdFYyKSc6IFtSZXF1ZXN0QWNjb3VudExpc3QsIEluamVjdGVkQWNjb3VudFtdXTtcbiAgJ3B1YihhY2NvdW50cy5zdWJzY3JpYmVWMiknOiBbUmVxdWVzdEFjY291bnRTdWJzY3JpYmUsIHN0cmluZywgSW5qZWN0ZWRBY2NvdW50W11dO1xuICAncHViKGFjY291bnRzLnVuc3Vic2NyaWJlKSc6IFtSZXF1ZXN0QWNjb3VudFVuc3Vic2NyaWJlLCBib29sZWFuXTtcblxuICAvLyBTaWduIFFSXG4gICdwcmkoYWNjb3VudC5pc0xvY2tlZCknOiBbUmVxdWVzdEFjY291bnRJc0xvY2tlZCwgUmVzcG9uc2VBY2NvdW50SXNMb2NrZWRdO1xuICAncHJpKHFyLnRyYW5zYWN0aW9uLnBhcnNlLnN1YnN0cmF0ZSknOiBbUmVxdWVzdFBhcnNlVHJhbnNhY3Rpb25TdWJzdHJhdGUsIFJlc3BvbnNlUGFyc2VUcmFuc2FjdGlvblN1YnN0cmF0ZV07XG4gICdwcmkocXIudHJhbnNhY3Rpb24ucGFyc2UuZXZtKSc6IFtSZXF1ZXN0UXJQYXJzZVJMUCwgUmVzcG9uc2VRclBhcnNlUkxQXTtcbiAgJ3ByaShxci5zaWduLnN1YnN0cmF0ZSknOiBbUmVxdWVzdFFyU2lnblN1YnN0cmF0ZSwgUmVzcG9uc2VRclNpZ25TdWJzdHJhdGVdO1xuICAncHJpKHFyLnNpZ24uZXZtKSc6IFtSZXF1ZXN0UXJTaWduRXZtLCBSZXNwb25zZVFyU2lnbkV2bV07XG5cbiAgLy8gRXh0ZXJuYWwgYWNjb3VudCByZXF1ZXN0XG4gICdwcmkoYWNjb3VudC5leHRlcm5hbC5yZWplY3QpJzogW1JlcXVlc3RSZWplY3RFeHRlcm5hbFJlcXVlc3QsIFJlc3BvbnNlUmVqZWN0RXh0ZXJuYWxSZXF1ZXN0XTtcbiAgJ3ByaShhY2NvdW50LmV4dGVybmFsLnJlc29sdmUpJzogW1JlcXVlc3RSZXNvbHZlRXh0ZXJuYWxSZXF1ZXN0LCBSZXNwb25zZVJlc29sdmVFeHRlcm5hbFJlcXVlc3RdO1xuXG4gIC8vIEV2bVxuICAnZXZtKGV2ZW50cy5zdWJzY3JpYmUpJzogW1JlcXVlc3RFdm1FdmVudHMsIGJvb2xlYW4sIEV2bUV2ZW50XTtcbiAgJ2V2bShyZXF1ZXN0KSc6IFtSZXF1ZXN0QXJndW1lbnRzLCB1bmtub3duXTtcbiAgJ2V2bShwcm92aWRlci5zZW5kKSc6IFtSZXF1ZXN0RXZtUHJvdmlkZXJTZW5kLCBzdHJpbmcgfCBudW1iZXIsIFJlc3BvbnNlRXZtUHJvdmlkZXJTZW5kXVxuXG4gIC8vIEV2bSBUcmFuc2FjdGlvblxuICAncHJpKGV2bS50cmFuc2FjdGlvbi5wYXJzZS5pbnB1dCknOiBbUmVxdWVzdFBhcnNlRXZtQ29udHJhY3RJbnB1dCwgUmVzcG9uc2VQYXJzZUV2bUNvbnRyYWN0SW5wdXRdO1xuXG4gIC8vIEF1dGhvcml6ZVxuICAncHJpKGF1dGhvcml6ZS5zdWJzY3JpYmUpJzogW251bGwsIEF1dGhVcmxzLCBBdXRoVXJsc107XG5cbiAgLy8gS2V5cmluZyBzdGF0ZVxuICAncHJpKGtleXJpbmcuc3Vic2NyaWJlKSc6IFtudWxsLCBLZXlyaW5nU3RhdGUsIEtleXJpbmdTdGF0ZV07XG4gICdwcmkoa2V5cmluZy5jaGFuZ2UpJzogW1JlcXVlc3RDaGFuZ2VNYXN0ZXJQYXNzd29yZCwgUmVzcG9uc2VDaGFuZ2VNYXN0ZXJQYXNzd29yZF07XG4gICdwcmkoa2V5cmluZy5taWdyYXRlKSc6IFtSZXF1ZXN0TWlncmF0ZVBhc3N3b3JkLCBSZXNwb25zZU1pZ3JhdGVQYXNzd29yZF07XG4gICdwcmkoa2V5cmluZy51bmxvY2spJzogW1JlcXVlc3RVbmxvY2tLZXlyaW5nLCBSZXNwb25zZVVubG9ja0tleXJpbmddO1xuICAncHJpKGtleXJpbmcubG9jayknOiBbbnVsbCwgdm9pZF07XG4gICdwcmkoa2V5cmluZy5leHBvcnQubW5lbW9uaWMpJzogW1JlcXVlc3RLZXlyaW5nRXhwb3J0TW5lbW9uaWMsIFJlc3BvbnNlS2V5cmluZ0V4cG9ydE1uZW1vbmljXTtcbiAgJ3ByaShrZXlyaW5nLnJlc2V0KSc6IFtSZXF1ZXN0UmVzZXRXYWxsZXQsIFJlc3BvbnNlUmVzZXRXYWxsZXRdO1xuXG4gIC8vIFNpZ25pbmdcbiAgJ3ByaShzaWduaW5nLmFwcHJvdmUucGFzc3dvcmRWMiknOiBbUmVxdWVzdFNpZ25pbmdBcHByb3ZlUGFzc3dvcmRWMiwgYm9vbGVhbl07XG5cbiAgLy8gRGVyaXZlXG4gICdwcmkoZGVyaXZhdGlvbi52YWxpZGF0ZVYyKSc6IFtSZXF1ZXN0RGVyaXZlVmFsaWRhdGVWMiwgUmVzcG9uc2VEZXJpdmVWYWxpZGF0ZVYyXTtcbiAgJ3ByaShkZXJpdmF0aW9uLmdldExpc3QpJzogW1JlcXVlc3RHZXREZXJpdmVBY2NvdW50cywgUmVzcG9uc2VHZXREZXJpdmVBY2NvdW50c107XG4gICdwcmkoZGVyaXZhdGlvbi5jcmVhdGUubXVsdGlwbGUpJzogW1JlcXVlc3REZXJpdmVDcmVhdGVNdWx0aXBsZSwgYm9vbGVhbl07XG4gICdwcmkoZGVyaXZhdGlvbi5jcmVhdGVWMyknOiBbUmVxdWVzdERlcml2ZUNyZWF0ZVYzLCBib29sZWFuXTtcblxuICAvLyBUcmFuc2FjdGlvblxuICAvLyBHZXQgVHJhbnNhY3Rpb25cbiAgJ3ByaSh0cmFuc2FjdGlvbnMuZ2V0T25lKSc6IFtSZXF1ZXN0R2V0VHJhbnNhY3Rpb24sIFNXVHJhbnNhY3Rpb25SZXN1bHRdO1xuICAncHJpKHRyYW5zYWN0aW9ucy5zdWJzY3JpYmUpJzogW251bGwsIFJlY29yZDxzdHJpbmcsIFNXVHJhbnNhY3Rpb25SZXN1bHQ+LCBSZWNvcmQ8c3RyaW5nLCBTV1RyYW5zYWN0aW9uUmVzdWx0Pl07XG5cbiAgLy8gTm90aWZpY2F0aW9uXG4gICdwcmkobm90aWZpY2F0aW9ucy5zdWJzY3JpYmUpJzogW251bGwsIE5vdGlmaWNhdGlvbltdLCBOb3RpZmljYXRpb25bXV07XG5cbiAgLy8gUHJpdmF0ZVxuICAncHJpKGNyb24ucmVsb2FkKSc6IFtDcm9uUmVsb2FkUmVxdWVzdCwgYm9vbGVhbl07XG5cbiAgLy8gTW9iaWxlXG4gICdtb2JpbGUocGluZyknOiBbbnVsbCwgc3RyaW5nXTtcbiAgJ21vYmlsZShjcm9uQW5kU3Vic2NyaXB0aW9uLmluaXQpJzogW1JlcXVlc3RJbml0Q3JvbkFuZFN1YnNjcmlwdGlvbiwgQWN0aXZlQ3JvbkFuZFN1YnNjcmlwdGlvbk1hcF07XG4gICdtb2JpbGUoY3JvbkFuZFN1YnNjcmlwdGlvbi5hY3RpdmVTZXJ2aWNlLnN1YnNjcmliZSknOiBbbnVsbCwgQWN0aXZlQ3JvbkFuZFN1YnNjcmlwdGlvbk1hcCwgQWN0aXZlQ3JvbkFuZFN1YnNjcmlwdGlvbk1hcF07XG4gICdtb2JpbGUoY3JvbkFuZFN1YnNjcmlwdGlvbi5zdGFydCknOiBbUmVxdWVzdENyb25BbmRTdWJzY3JpcHRpb25BY3Rpb24sIHZvaWRdO1xuICAnbW9iaWxlKGNyb25BbmRTdWJzY3JpcHRpb24uc3RvcCknOiBbUmVxdWVzdENyb25BbmRTdWJzY3JpcHRpb25BY3Rpb24sIHZvaWRdO1xuICAnbW9iaWxlKGNyb25BbmRTdWJzY3JpcHRpb24ucmVzdGFydCknOiBbUmVxdWVzdENyb25BbmRTdWJzY3JpcHRpb25BY3Rpb24sIHZvaWRdO1xuICAnbW9iaWxlKGNyb24uc3RhcnQpJzogW0Nyb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShjcm9uLnN0b3ApJzogW0Nyb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShjcm9uLnJlc3RhcnQpJzogW0Nyb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShzdWJzY3JpcHRpb24uc3RhcnQpJzogW1N1YnNjcmlwdGlvblNlcnZpY2VUeXBlW10sIHZvaWRdO1xuICAnbW9iaWxlKHN1YnNjcmlwdGlvbi5zdG9wKSc6IFtTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcbiAgJ21vYmlsZShzdWJzY3JpcHRpb24ucmVzdGFydCknOiBbU3Vic2NyaXB0aW9uU2VydmljZVR5cGVbXSwgdm9pZF07XG5cbiAgLy8gUHNwIHRva2VuXG4gICdwdWIodG9rZW4uYWRkKSc6IFtSZXF1ZXN0QWRkUHNwVG9rZW4sIGJvb2xlYW5dO1xuXG4gIC8vLyBXYWxsZXQgY29ubmVjdFxuICAncHJpKHdhbGxldENvbm5lY3QuY29ubmVjdCknOiBbUmVxdWVzdENvbm5lY3RXYWxsZXRDb25uZWN0LCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnJlcXVlc3RzLmNvbm5lY3Quc3Vic2NyaWJlKSc6IFtudWxsLCBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3RbXSwgV2FsbGV0Q29ubmVjdFNlc3Npb25SZXF1ZXN0W11dO1xuICAncHJpKHdhbGxldENvbm5lY3Quc2Vzc2lvbi5hcHByb3ZlKSc6IFtSZXF1ZXN0QXBwcm92ZUNvbm5lY3RXYWxsZXRTZXNzaW9uLCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnNlc3Npb24ucmVqZWN0KSc6IFtSZXF1ZXN0UmVqZWN0Q29ubmVjdFdhbGxldFNlc3Npb24sIGJvb2xlYW5dO1xuICAncHJpKHdhbGxldENvbm5lY3Quc2Vzc2lvbi5yZWNvbm5lY3QpJzogW1JlcXVlc3RSZWNvbm5lY3RDb25uZWN0V2FsbGV0U2Vzc2lvbiwgYm9vbGVhbl07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5zZXNzaW9uLnN1YnNjcmliZSknOiBbbnVsbCwgU2Vzc2lvblR5cGVzLlN0cnVjdFtdLCBTZXNzaW9uVHlwZXMuU3RydWN0W11dO1xuICAncHJpKHdhbGxldENvbm5lY3Quc2Vzc2lvbi5kaXNjb25uZWN0KSc6IFtSZXF1ZXN0RGlzY29ubmVjdFdhbGxldENvbm5lY3RTZXNzaW9uLCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnJlcXVlc3RzLm5vdFN1cHBvcnQuc3Vic2NyaWJlKSc6IFtudWxsLCBXYWxsZXRDb25uZWN0Tm90U3VwcG9ydFJlcXVlc3RbXSwgV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnRSZXF1ZXN0W11dO1xuICAncHJpKHdhbGxldENvbm5lY3Qubm90U3VwcG9ydC5hcHByb3ZlKSc6IFtSZXF1ZXN0QXBwcm92ZVdhbGxldENvbm5lY3ROb3RTdXBwb3J0LCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0Lm5vdFN1cHBvcnQucmVqZWN0KSc6IFtSZXF1ZXN0UmVqZWN0V2FsbGV0Q29ubmVjdE5vdFN1cHBvcnQsIGJvb2xlYW5dO1xuXG4gIC8vLyBNZXRhZGF0YVxuICAncHJpKG1ldGFkYXRhLmZpbmQpJzogW1JlcXVlc3RGaW5kUmF3TWV0YWRhdGEsIFJlc3BvbnNlRmluZFJhd01ldGFkYXRhXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvbk1ldGFkYXRhVHlwZSB7XG4gIHZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgT1NUeXBlID0gJ01hYyBPUycgfCAnaU9TJyB8ICdXaW5kb3dzJyB8ICdBbmRyb2lkJyB8ICdMaW51eCcgfCAnVW5rbm93bic7XG5leHBvcnQgY29uc3QgTW9iaWxlT1M6IE9TVHlwZVtdID0gWydpT1MnLCAnQW5kcm9pZCddO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCBjb25zdCBDUk9OX1JFRlJFU0hfUFJJQ0VfSU5URVJWQUwgPSAzMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX0FVVE9fUkVDT1ZFUl9ET1RTQU1BX0lOVEVSVkFMID0gNjAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9BVVRPX1JFQ09WRVJfV0VCM19JTlRFUlZBTCA9IDkwMDAwO1xuZXhwb3J0IGNvbnN0IEFDQUxBX1JFRlJFU0hfQ1JPV0RMT0FOX0lOVEVSVkFMID0gMzAwMDAwO1xuZXhwb3J0IGNvbnN0IEFTVEFSX1JFRlJFU0hfQkFMQU5DRV9JTlRFUlZBTCA9IDYwMDAwO1xuZXhwb3J0IGNvbnN0IFNVQl9UT0tFTl9SRUZSRVNIX0JBTEFOQ0VfSU5URVJWQUwgPSA2MDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX1JFRlJFU0hfTkZUX0lOVEVSVkFMID0gNzIwMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX1JFRlJFU0hfU1RBS0lOR19SRVdBUkRfSU5URVJWQUwgPSA5MDAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9SRUZSRVNIX1NUQUtJTkdfUkVXQVJEX0ZBU1RfSU5URVJWQUwgPSAzMDAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9SRUZSRVNIX0hJU1RPUllfSU5URVJWQUwgPSA5MDAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9HRVRfQVBJX01BUF9TVEFUVVMgPSAxMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX1JFRlJFU0hfQ0hBSU5fU1RBS0lOR19NRVRBREFUQSA9IDkwMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX1JFRlJFU0hfQ0hBSU5fTk9NSU5BVE9SX01FVEFEQVRBID0gMTgwMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX1JFQ09WRVJfSElTVE9SWV9JTlRFUlZBTCA9IDMwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fU1lOQ19NQU5UQV9QQVkgPSAzMDAwMDA7XG5leHBvcnQgY29uc3QgTUFOVEFfUEFZX0JBTEFOQ0VfSU5URVJWQUwgPSAzMDAwMDtcblxuZXhwb3J0IGNvbnN0IEFMTF9BQ0NPVU5UX0tFWSA9ICdBTEwnO1xuZXhwb3J0IGNvbnN0IEFMTF9ORVRXT1JLX0tFWSA9ICdhbGwnO1xuZXhwb3J0IGNvbnN0IEFMTF9HRU5FU0lTX0hBU0ggPSBudWxsO1xuZXhwb3J0IGNvbnN0IElHTk9SRV9HRVRfU1VCU1RSQVRFX0ZFQVRVUkVTX0xJU1Q6IHN0cmluZ1tdID0gWydhc3RhckV2bScsICdldGhlcmV1bScsICdldGhlcmV1bV9nb2VybGknLCAnYmluYW5jZScsICdiaW5hbmNlX3Rlc3QnLCAnYm9iYV9yaW5rZWJ5JywgJ2JvYmEnLCAnYm9iYWJhc2UnLCAnYm9iYWJlYW0nXTtcbmV4cG9ydCBjb25zdCBJR05PUkVfUVJfU0lHTkVSOiBzdHJpbmdbXSA9IFtdO1xuXG5leHBvcnQgY29uc3QgWENNX01JTl9BTU9VTlRfUkFUSU8gPSAxLjI7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3Rha2luZyc7XG5leHBvcnQgKiBmcm9tICcuL3N0b3JhZ2UnO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCBjb25zdCBQUkVERUZJTkVEX1NUQUtJTkdfUE9PTDogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHtcbiAga3VzYW1hOiA4MCxcbiAgcG9sa2Fkb3Q6IDM5XG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCBjb25zdCBMQU5HVUFHRSA9ICdjdXJyZW50LWxhbmd1YWdlJztcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmNvbnN0IEFMTE9XRURfUEFUSCA9IFtcbiAgJy8nLFxuICAnL3NldHRpbmdzL3NlY3VyaXR5JyxcbiAgJy9hY2NvdW50cy9jb25uZWN0LWxlZGdlcicsXG4gICcvYWNjb3VudHMvcmVzdG9yZS1qc29uJyxcbiAgJy9hY2NvdW50cy9kZXRhaWwnLFxuICAnL2FjY291bnRzL25ldy1zZWVkLXBocmFzZSdcbl0gYXMgY29uc3Q7XG5jb25zdCBQSElTSElOR19QQUdFX1JFRElSRUNUID0gJy9waGlzaGluZy1wYWdlLWRldGVjdGVkJztcbmNvbnN0IEVYVEVOU0lPTl9QUkVGSVggPSBwcm9jZXNzLmVudi5FWFRFTlNJT05fUFJFRklYIGFzIHN0cmluZyB8fCAnJztcbmNvbnN0IElEX1BSRUZJWCA9IHByb2Nlc3MuZW52LklEX1BSRUZJWCBhcyBzdHJpbmcgfHwgRVhURU5TSU9OX1BSRUZJWCB8fCAnJztcbmNvbnN0IFBPUlRfTU9CSUxFID0gYCR7RVhURU5TSU9OX1BSRUZJWH1tb2JpbGVgO1xuY29uc3QgUE9SVF9DT05URU5UID0gYCR7RVhURU5TSU9OX1BSRUZJWH1rb25pLWNvbnRlbnRgO1xuY29uc3QgUE9SVF9FWFRFTlNJT04gPSBgJHtFWFRFTlNJT05fUFJFRklYfWtvbmktZXh0ZW5zaW9uYDtcbmNvbnN0IE1FU1NBR0VfT1JJR0lOX1BBR0UgPSBgJHtFWFRFTlNJT05fUFJFRklYfWtvbmktcGFnZWA7XG5jb25zdCBNRVNTQUdFX09SSUdJTl9DT05URU5UID0gYCR7RVhURU5TSU9OX1BSRUZJWH1rb25pLWNvbnRlbnRgO1xuY29uc3QgUEFTU1dPUkRfRVhQSVJZX01JTiA9IDE1O1xuY29uc3QgUEFTU1dPUkRfRVhQSVJZX01TID0gUEFTU1dPUkRfRVhQSVJZX01JTiAqIDYwICogMTAwMDtcblxuZXhwb3J0IHtcbiAgQUxMT1dFRF9QQVRILFxuICBQQVNTV09SRF9FWFBJUllfTUlOLFxuICBQQVNTV09SRF9FWFBJUllfTVMsXG4gIFBISVNISU5HX1BBR0VfUkVESVJFQ1QsXG4gIEVYVEVOU0lPTl9QUkVGSVgsXG4gIElEX1BSRUZJWCxcbiAgUE9SVF9NT0JJTEUsXG4gIFBPUlRfQ09OVEVOVCxcbiAgUE9SVF9FWFRFTlNJT04sXG4gIE1FU1NBR0VfT1JJR0lOX1BBR0UsXG4gIE1FU1NBR0VfT1JJR0lOX0NPTlRFTlRcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Vcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IHJlc29sdmVBZGRyZXNzVG9Eb21haW4sIHJlc29sdmVEb21haW5Ub0FkZHJlc3MsIFN1cHBvcnRlZENoYWluSWQgfSBmcm9tICdAYXpucy9yZXNvbHZlci1jb3JlJztcblxuaW1wb3J0IHsgQXBpUHJvbWlzZSB9IGZyb20gJ0Bwb2xrYWRvdC9hcGknO1xuXG5leHBvcnQgY29uc3QgRU5TX1NVRkZJWCA9ICcuZXRoJztcbmV4cG9ydCBjb25zdCBUWkVST19JRF9TVUZGSVggPSAnLnR6ZXJvJztcblxuZXhwb3J0IGNvbnN0IEFaRVJPX0lEX1NVRkZJWCA9ICcuYXplcm8nO1xuXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEX0RPTUFJTl9TVUZGSVggPSBbXG4gIEVOU19TVUZGSVgsXG4gIFRaRVJPX0lEX1NVRkZJWCxcbiAgQVpFUk9fSURfU1VGRklYXG5dO1xuXG5leHBvcnQgY29uc3QgQ0hBSU5TX1NVUFBPUlRFRF9ET01BSU4gPSBbXG4gICdhbGVwaCcsXG4gICdhbGVwaFRlc3QnXG5dO1xuXG5leHBvcnQgY29uc3QgQVpFUk9fRE9NQUlOX0NPTlRSQUNUUyA9IFtcbiAgJzVGc0I5MXRYU0V1TWo2YWt6ZFBjekF0bUJhVktUb3FIbXRBd1NVelhoNDlBWXphRCcsXG4gICc1Q1RRQmZCQzlTZmRyQ0RCSmRmTGl5VzJwZzl6NVc2QzZFczhzSzMxM0JMbkZnRGYnXG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUF6ZXJvRG9tYWluVG9BZGRyZXNzIChkb21haW46IHN0cmluZywgY2hhaW46IHN0cmluZywgYXBpOiBBcGlQcm9taXNlKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgbGV0IGNoYWluSWQ6IFN1cHBvcnRlZENoYWluSWQgPSBTdXBwb3J0ZWRDaGFpbklkLkFsZXBoWmVybztcblxuICBpZiAoY2hhaW4gPT09ICdhbGVwaFRlc3QnKSB7XG4gICAgY2hhaW5JZCA9IFN1cHBvcnRlZENoYWluSWQuQWxlcGhaZXJvVGVzdG5ldDtcbiAgfVxuXG4gIGNvbnN0IHByaW1hcnlEb21haW5zID0gYXdhaXQgcmVzb2x2ZURvbWFpblRvQWRkcmVzcyhcbiAgICBkb21haW4sXG4gICAge1xuICAgICAgY2hhaW5JZCxcbiAgICAgIGN1c3RvbUFwaTogYXBpXG4gICAgfVxuICApO1xuXG4gIGlmIChwcmltYXJ5RG9tYWlucy5lcnJvcikge1xuICAgIGNvbnNvbGUuZGVidWcocHJpbWFyeURvbWFpbnMuZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1hcnlEb21haW5zPy5hZGRyZXNzIHx8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVBemVyb0FkZHJlc3NUb0RvbWFpbiAoYWRkcmVzczogc3RyaW5nLCBjaGFpbjogc3RyaW5nLCBhcGk6IEFwaVByb21pc2UpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBsZXQgY2hhaW5JZDogU3VwcG9ydGVkQ2hhaW5JZCA9IFN1cHBvcnRlZENoYWluSWQuQWxlcGhaZXJvO1xuXG4gIGlmIChjaGFpbiA9PT0gJ2FsZXBoVGVzdCcpIHtcbiAgICBjaGFpbklkID0gU3VwcG9ydGVkQ2hhaW5JZC5BbGVwaFplcm9UZXN0bmV0O1xuICB9XG5cbiAgY29uc3QgcHJpbWFyeURvbWFpbnMgPSBhd2FpdCByZXNvbHZlQWRkcmVzc1RvRG9tYWluKFxuICAgIGFkZHJlc3MsXG4gICAge1xuICAgICAgY2hhaW5JZCxcbiAgICAgIGN1c3RvbUFwaTogYXBpXG4gICAgfVxuICApO1xuXG4gIGlmIChwcmltYXJ5RG9tYWlucy5lcnJvcikge1xuICAgIGNvbnNvbGUuZGVidWcocHJpbWFyeURvbWFpbnMuZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1hcnlEb21haW5zPy5wcmltYXJ5RG9tYWluIHx8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXplcm9Eb21haW4gKGlucHV0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGlucHV0LmluY2x1ZGVzKEFaRVJPX0lEX1NVRkZJWCkgfHwgaW5wdXQuaW5jbHVkZXMoVFpFUk9fSURfU1VGRklYKTtcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQ2hhaW5JbmZvIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IENoYWluU3Rha2luZ01ldGFkYXRhLCBOb21pbmF0aW9uSW5mbywgTm9taW5hdG9yTWV0YWRhdGEsIFN0YWtpbmdTdGF0dXMsIFN0YWtpbmdUeXBlLCBVbnN0YWtpbmdJbmZvLCBVbnN0YWtpbmdTdGF0dXMsIFZhbGlkYXRvckluZm8gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IGdldFN0YWtpbmdTdGF0dXNCeU5vbWluYXRpb25zLCBQYWxsZXREYXBwc1N0YWtpbmdBY2NvdW50TGVkZ2VyLCBQYWxsZXREYXBwc1N0YWtpbmdEYXBwSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uva29uaS9hcGkvc3Rha2luZy9ib25kaW5nL3V0aWxzJztcbmltcG9ydCB7IF9TVEFLSU5HX0VSQV9MRU5HVEhfTUFQIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBfU3Vic3RyYXRlQXBpIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3R5cGVzJztcbmltcG9ydCB7IGlzVXJsLCBwYXJzZVJhd051bWJlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcblxuaW1wb3J0IHsgU3VibWl0dGFibGVFeHRyaW5zaWMgfSBmcm9tICdAcG9sa2Fkb3QvYXBpL3Byb21pc2UvdHlwZXMnO1xuaW1wb3J0IHsgQ29kZWMgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgQk4sIEJOX1pFUk8gfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5pbXBvcnQgeyBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVBc3RhclN0YWtpbmdNZXRhZGF0YSAoY2hhaW46IHN0cmluZywgc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpLCBjYWxsYmFjazogKGNoYWluOiBzdHJpbmcsIHJzOiBDaGFpblN0YWtpbmdNZXRhZGF0YSkgPT4gdm9pZCkge1xuICByZXR1cm4gc3Vic3RyYXRlQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuY3VycmVudEVyYSgoX2N1cnJlbnRFcmE6IENvZGVjKSA9PiB7XG4gICAgY29uc3QgZXJhID0gX2N1cnJlbnRFcmEudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtaW5EZWxlZ2F0b3JTdGFrZSA9IHN1YnN0cmF0ZUFwaS5hcGkuY29uc3RzLmRhcHBzU3Rha2luZy5taW5pbXVtU3Rha2luZ0Ftb3VudC50b1N0cmluZygpO1xuICAgIGNvbnN0IHVuc3Rha2luZ0RlbGF5ID0gc3Vic3RyYXRlQXBpLmFwaS5jb25zdHMuZGFwcHNTdGFraW5nLnVuYm9uZGluZ1BlcmlvZC50b1N0cmluZygpO1xuXG4gICAgY29uc3QgdW5zdGFraW5nUGVyaW9kID0gcGFyc2VJbnQodW5zdGFraW5nRGVsYXkpICogX1NUQUtJTkdfRVJBX0xFTkdUSF9NQVBbY2hhaW5dO1xuXG4gICAgY2FsbGJhY2soY2hhaW4sIHtcbiAgICAgIGNoYWluLFxuICAgICAgdHlwZTogU3Rha2luZ1R5cGUuTk9NSU5BVEVELFxuICAgICAgZXJhOiBwYXJzZUludChlcmEpLFxuICAgICAgbWluU3Rha2U6IG1pbkRlbGVnYXRvclN0YWtlLFxuICAgICAgbWF4VmFsaWRhdG9yUGVyTm9taW5hdG9yOiAxMDAsIC8vIHRlbXBvcmFyeSBmaXggZm9yIEFzdGFyLCB0aGVyZSdzIG5vIGxpbWl0IGZvciBub3dcbiAgICAgIG1heFdpdGhkcmF3YWxSZXF1ZXN0UGVyVmFsaWRhdG9yOiAxLCAvLyBieSBkZWZhdWx0XG4gICAgICBhbGxvd0NhbmNlbFVuc3Rha2luZzogdHJ1ZSxcbiAgICAgIHVuc3Rha2luZ1BlcmlvZFxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzdGFyU3Rha2luZ01ldGFkYXRhIChjaGFpbjogc3RyaW5nLCBzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGkpOiBQcm9taXNlPENoYWluU3Rha2luZ01ldGFkYXRhPiB7XG4gIGNvbnN0IGFwclByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5hc3Rhci5uZXR3b3JrL2FwaS92MS8ke2NoYWlufS9kYXBwcy1zdGFraW5nL2FwcmAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3AuanNvbigpKTtcbiAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfSk7XG5cbiAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICByZXNvbHZlKG51bGwpO1xuICAgIH0sIDgwMDApO1xuICB9KTtcblxuICBjb25zdCBhcHJSYWNlUHJvbWlzZSA9IFByb21pc2UucmFjZShbXG4gICAgdGltZW91dCxcbiAgICBhcHJQcm9taXNlXG4gIF0pOyAvLyBuZWVkIHJhY2UgYmVjYXVzZSBBUEkgb2Z0ZW4gdGltZW91dFxuXG4gIGNvbnN0IFthcHJJbmZvLCBjaGFpbkFwaV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgYXByUmFjZVByb21pc2UsXG4gICAgc3Vic3RyYXRlQXBpLmlzUmVhZHlcbiAgXSk7XG5cbiAgY29uc3QgZXJhID0gKGF3YWl0IGNoYWluQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuY3VycmVudEVyYSgpKS50b1N0cmluZygpO1xuICBjb25zdCBtaW5EZWxlZ2F0b3JTdGFrZSA9IGNoYWluQXBpLmFwaS5jb25zdHMuZGFwcHNTdGFraW5nLm1pbmltdW1TdGFraW5nQW1vdW50LnRvU3RyaW5nKCk7XG4gIGNvbnN0IHVuc3Rha2luZ0RlbGF5ID0gY2hhaW5BcGkuYXBpLmNvbnN0cy5kYXBwc1N0YWtpbmcudW5ib25kaW5nUGVyaW9kLnRvU3RyaW5nKCk7XG5cbiAgY29uc3QgdW5zdGFraW5nUGVyaW9kID0gcGFyc2VJbnQodW5zdGFraW5nRGVsYXkpICogX1NUQUtJTkdfRVJBX0xFTkdUSF9NQVBbY2hhaW5dO1xuXG4gIHJldHVybiB7XG4gICAgY2hhaW4sXG4gICAgdHlwZTogU3Rha2luZ1R5cGUuTk9NSU5BVEVELFxuICAgIGV4cGVjdGVkUmV0dXJuOiBhcHJJbmZvICE9PSBudWxsID8gYXBySW5mbyBhcyBudW1iZXIgOiB1bmRlZmluZWQsXG4gICAgZXJhOiBwYXJzZUludChlcmEpLFxuICAgIG1pblN0YWtlOiBtaW5EZWxlZ2F0b3JTdGFrZSxcbiAgICBtYXhWYWxpZGF0b3JQZXJOb21pbmF0b3I6IDEwMCwgLy8gdGVtcG9yYXJ5IGZpeCBmb3IgQXN0YXIsIHRoZXJlJ3Mgbm8gbGltaXQgZm9yIG5vd1xuICAgIG1heFdpdGhkcmF3YWxSZXF1ZXN0UGVyVmFsaWRhdG9yOiAxLCAvLyBieSBkZWZhdWx0XG4gICAgYWxsb3dDYW5jZWxVbnN0YWtpbmc6IHRydWUsXG4gICAgdW5zdGFraW5nUGVyaW9kXG4gIH0gYXMgQ2hhaW5TdGFraW5nTWV0YWRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJzY3JpYmVBc3Rhck5vbWluYXRvck1ldGFkYXRhIChjaGFpbkluZm86IF9DaGFpbkluZm8sIGFkZHJlc3M6IHN0cmluZywgc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpLCBsZWRnZXI6IFBhbGxldERhcHBzU3Rha2luZ0FjY291bnRMZWRnZXIpIHtcbiAgY29uc3Qgbm9taW5hdGlvbkxpc3Q6IE5vbWluYXRpb25JbmZvW10gPSBbXTtcbiAgY29uc3QgdW5zdGFraW5nTGlzdDogVW5zdGFraW5nSW5mb1tdID0gW107XG5cbiAgY29uc3QgYWxsRGFwcHNSZXEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5hc3Rhci5uZXR3b3JrL2FwaS92MS8ke2NoYWluSW5mby5zbHVnfS9kYXBwcy1zdGFraW5nL2RhcHBzYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIHJlc29sdmUocmVzcC5qc29uKCkpO1xuICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9KTtcblxuICBjb25zdCBbX2FsbERhcHBzLCBfZXJhLCBfc3Rha2VySW5mb10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgYWxsRGFwcHNSZXEsXG4gICAgc3Vic3RyYXRlQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuY3VycmVudEVyYSgpLFxuICAgIHN1YnN0cmF0ZUFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmdlbmVyYWxTdGFrZXJJbmZvLmVudHJpZXMoYWRkcmVzcylcbiAgXSk7XG5cbiAgY29uc3QgY3VycmVudEVyYSA9IF9lcmEudG9TdHJpbmcoKTtcbiAgY29uc3QgbWluRGVsZWdhdG9yU3Rha2UgPSBzdWJzdHJhdGVBcGkuYXBpLmNvbnN0cy5kYXBwc1N0YWtpbmcubWluaW11bVN0YWtpbmdBbW91bnQudG9TdHJpbmcoKTtcbiAgY29uc3QgYWxsRGFwcHMgPSBfYWxsRGFwcHMgYXMgUGFsbGV0RGFwcHNTdGFraW5nRGFwcEluZm9bXTtcblxuICBsZXQgYm5Ub3RhbEFjdGl2ZVN0YWtlID0gQk5fWkVSTztcblxuICBpZiAoX3N0YWtlckluZm8ubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGRBcHBJbmZvTWFwOiBSZWNvcmQ8c3RyaW5nLCBQYWxsZXREYXBwc1N0YWtpbmdEYXBwSW5mbz4gPSB7fTtcblxuICAgIGFsbERhcHBzLmZvckVhY2goKGRhcHBJbmZvKSA9PiB7XG4gICAgICBkQXBwSW5mb01hcFtkYXBwSW5mby5hZGRyZXNzLnRvTG93ZXJDYXNlKCldID0gZGFwcEluZm87XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgX3N0YWtlckluZm8pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBpdGVtWzBdLnRvSHVtYW4oKSBhcyB1bmtub3duIGFzIGFueVtdO1xuICAgICAgY29uc3Qgc3Rha2VkRGFwcCA9IGRhdGFbMV0gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgICAgIGNvbnN0IHN0YWtlRGF0YSA9IGl0ZW1bMV0udG9QcmltaXRpdmUoKSBhcyBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10+O1xuICAgICAgY29uc3Qgc3Rha2VMaXN0ID0gc3Rha2VEYXRhLnN0YWtlcztcblxuICAgICAgY29uc3QgZGFwcEFkZHJlc3MgPSBzdGFrZWREYXBwLkV2bSA/IHN0YWtlZERhcHAuRXZtLnRvTG93ZXJDYXNlKCkgOiBzdGFrZWREYXBwLldhc207XG4gICAgICBjb25zdCBjdXJyZW50U3Rha2UgPSBzdGFrZUxpc3Quc2xpY2UoLTEpWzBdLnN0YWtlZC50b1N0cmluZygpIHx8ICcwJztcblxuICAgICAgY29uc3QgYm5DdXJyZW50U3Rha2UgPSBuZXcgQk4oY3VycmVudFN0YWtlKTtcblxuICAgICAgaWYgKGJuQ3VycmVudFN0YWtlLmd0KEJOX1pFUk8pKSB7XG4gICAgICAgIGNvbnN0IGRhcHBTdGFraW5nU3RhdHVzID0gYm5DdXJyZW50U3Rha2UuZ3QoQk5fWkVSTykgJiYgYm5DdXJyZW50U3Rha2UuZ3RlKG5ldyBCTihtaW5EZWxlZ2F0b3JTdGFrZSkpID8gU3Rha2luZ1N0YXR1cy5FQVJOSU5HX1JFV0FSRCA6IFN0YWtpbmdTdGF0dXMuTk9UX0VBUk5JTkc7XG5cbiAgICAgICAgYm5Ub3RhbEFjdGl2ZVN0YWtlID0gYm5Ub3RhbEFjdGl2ZVN0YWtlLmFkZChibkN1cnJlbnRTdGFrZSk7XG4gICAgICAgIGNvbnN0IGRhcHBJbmZvID0gZEFwcEluZm9NYXBbZGFwcEFkZHJlc3NdO1xuXG4gICAgICAgIG5vbWluYXRpb25MaXN0LnB1c2goe1xuICAgICAgICAgIHN0YXR1czogZGFwcFN0YWtpbmdTdGF0dXMsXG4gICAgICAgICAgY2hhaW46IGNoYWluSW5mby5zbHVnLFxuICAgICAgICAgIHZhbGlkYXRvckFkZHJlc3M6IGRhcHBBZGRyZXNzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgYWN0aXZlU3Rha2U6IGN1cnJlbnRTdGFrZSxcbiAgICAgICAgICB2YWxpZGF0b3JNaW5TdGFrZTogJzAnLFxuICAgICAgICAgIHZhbGlkYXRvcklkZW50aXR5OiBkYXBwSW5mbz8ubmFtZSxcbiAgICAgICAgICBoYXNVbnN0YWtpbmc6IGZhbHNlIC8vIGNhbm5vdCBnZXQgdW5zdGFraW5nIGluZm8gYnkgZGFwcFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCB1bmxvY2tpbmdDaHVua3MgPSBsZWRnZXIudW5ib25kaW5nSW5mby51bmxvY2tpbmdDaHVua3M7XG5cbiAgaWYgKHVubG9ja2luZ0NodW5rcy5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChjb25zdCB1bmxvY2tpbmdDaHVuayBvZiB1bmxvY2tpbmdDaHVua3MpIHtcbiAgICAgIGNvbnN0IGlzQ2xhaW1hYmxlID0gdW5sb2NraW5nQ2h1bmsudW5sb2NrRXJhIC0gcGFyc2VJbnQoY3VycmVudEVyYSkgPCAwO1xuICAgICAgY29uc3QgcmVtYWluaW5nRXJhID0gdW5sb2NraW5nQ2h1bmsudW5sb2NrRXJhIC0gcGFyc2VJbnQoY3VycmVudEVyYSk7XG4gICAgICBjb25zdCB3YWl0aW5nVGltZSA9IHJlbWFpbmluZ0VyYSAqIF9TVEFLSU5HX0VSQV9MRU5HVEhfTUFQW2NoYWluSW5mby5zbHVnXTtcblxuICAgICAgdW5zdGFraW5nTGlzdC5wdXNoKHtcbiAgICAgICAgY2hhaW46IGNoYWluSW5mby5zbHVnLFxuICAgICAgICBzdGF0dXM6IGlzQ2xhaW1hYmxlID8gVW5zdGFraW5nU3RhdHVzLkNMQUlNQUJMRSA6IFVuc3Rha2luZ1N0YXR1cy5VTkxPQ0tJTkcsXG4gICAgICAgIGNsYWltYWJsZTogdW5sb2NraW5nQ2h1bmsuYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgIHdhaXRpbmdUaW1lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAobm9taW5hdGlvbkxpc3QubGVuZ3RoID09PSAwICYmIHVuc3Rha2luZ0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYWluOiBjaGFpbkluZm8uc2x1ZyxcbiAgICAgIHR5cGU6IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCxcbiAgICAgIGFkZHJlc3MsXG4gICAgICBzdGF0dXM6IFN0YWtpbmdTdGF0dXMuTk9UX1NUQUtJTkcsXG4gICAgICBhY3RpdmVTdGFrZTogJzAnLFxuICAgICAgbm9taW5hdGlvbnM6IFtdLFxuICAgICAgdW5zdGFraW5nczogW11cbiAgICB9IGFzIE5vbWluYXRvck1ldGFkYXRhO1xuICB9XG5cbiAgY29uc3Qgc3Rha2luZ1N0YXR1cyA9IGdldFN0YWtpbmdTdGF0dXNCeU5vbWluYXRpb25zKGJuVG90YWxBY3RpdmVTdGFrZSwgbm9taW5hdGlvbkxpc3QpO1xuXG4gIHJldHVybiB7XG4gICAgY2hhaW46IGNoYWluSW5mby5zbHVnLFxuICAgIHR5cGU6IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCxcbiAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgIGFjdGl2ZVN0YWtlOiBiblRvdGFsQWN0aXZlU3Rha2UudG9TdHJpbmcoKSxcbiAgICBub21pbmF0aW9uczogbm9taW5hdGlvbkxpc3QsXG4gICAgdW5zdGFraW5nczogdW5zdGFraW5nTGlzdCxcbiAgICBzdGF0dXM6IHN0YWtpbmdTdGF0dXNcbiAgfSBhcyBOb21pbmF0b3JNZXRhZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzdGFyTm9taW5hdG9yTWV0YWRhdGEgKGNoYWluSW5mbzogX0NoYWluSW5mbywgYWRkcmVzczogc3RyaW5nLCBzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGkpOiBQcm9taXNlPE5vbWluYXRvck1ldGFkYXRhIHwgdW5kZWZpbmVkPiB7XG4gIGlmIChpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNoYWluID0gY2hhaW5JbmZvLnNsdWc7XG4gIGNvbnN0IGNoYWluQXBpID0gYXdhaXQgc3Vic3RyYXRlQXBpLmlzUmVhZHk7XG5cbiAgY29uc3Qgbm9taW5hdGlvbkxpc3Q6IE5vbWluYXRpb25JbmZvW10gPSBbXTtcbiAgY29uc3QgdW5zdGFraW5nTGlzdDogVW5zdGFraW5nSW5mb1tdID0gW107XG5cbiAgY29uc3QgYWxsRGFwcHNSZXEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5hc3Rhci5uZXR3b3JrL2FwaS92MS8ke2NoYWlufS9kYXBwcy1zdGFraW5nL2RhcHBzYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIHJlc29sdmUocmVzcC5qc29uKCkpO1xuICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9KTtcblxuICBjb25zdCBbX2xlZGdlciwgX2VyYSwgX3N0YWtlckluZm9dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGNoYWluQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcubGVkZ2VyKGFkZHJlc3MpLFxuICAgIGNoYWluQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuY3VycmVudEVyYSgpLFxuICAgIGNoYWluQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuZ2VuZXJhbFN0YWtlckluZm8uZW50cmllcyhhZGRyZXNzKVxuICBdKTtcblxuICBjb25zdCBsZWRnZXIgPSBfbGVkZ2VyLnRvUHJpbWl0aXZlKCkgYXMgdW5rbm93biBhcyBQYWxsZXREYXBwc1N0YWtpbmdBY2NvdW50TGVkZ2VyO1xuICBjb25zdCBjdXJyZW50RXJhID0gX2VyYS50b1N0cmluZygpO1xuICBjb25zdCBtaW5EZWxlZ2F0b3JTdGFrZSA9IGNoYWluQXBpLmFwaS5jb25zdHMuZGFwcHNTdGFraW5nLm1pbmltdW1TdGFraW5nQW1vdW50LnRvU3RyaW5nKCk7XG5cbiAgbGV0IGJuVG90YWxBY3RpdmVTdGFrZSA9IEJOX1pFUk87XG5cbiAgaWYgKF9zdGFrZXJJbmZvLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBkQXBwSW5mb01hcDogUmVjb3JkPHN0cmluZywgUGFsbGV0RGFwcHNTdGFraW5nRGFwcEluZm8+ID0ge307XG4gICAgY29uc3QgYWxsRGFwcHMgPSBhd2FpdCBhbGxEYXBwc1JlcSBhcyBQYWxsZXREYXBwc1N0YWtpbmdEYXBwSW5mb1tdO1xuXG4gICAgYWxsRGFwcHMuZm9yRWFjaCgoZGFwcEluZm8pID0+IHtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBpc0V0aGVyZXVtQWRkcmVzcyhkYXBwSW5mby5hZGRyZXNzKSA/IGRhcHBJbmZvLmFkZHJlc3MudG9Mb3dlckNhc2UoKSA6IGRhcHBJbmZvLmFkZHJlc3M7XG5cbiAgICAgIGRBcHBJbmZvTWFwW2FkZHJlc3NdID0gZGFwcEluZm87XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgX3N0YWtlckluZm8pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBpdGVtWzBdLnRvSHVtYW4oKSBhcyB1bmtub3duIGFzIGFueVtdO1xuICAgICAgY29uc3Qgc3Rha2VkRGFwcCA9IGRhdGFbMV0gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgICAgIGNvbnN0IHN0YWtlRGF0YSA9IGl0ZW1bMV0udG9QcmltaXRpdmUoKSBhcyBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10+O1xuICAgICAgY29uc3Qgc3Rha2VMaXN0ID0gc3Rha2VEYXRhLnN0YWtlcztcblxuICAgICAgY29uc3QgZGFwcEFkZHJlc3MgPSBpc0V0aGVyZXVtQWRkcmVzcyhzdGFrZWREYXBwLkV2bSkgPyBzdGFrZWREYXBwLkV2bS50b0xvd2VyQ2FzZSgpIDogc3Rha2VkRGFwcC5Fdm07XG4gICAgICBjb25zdCBjdXJyZW50U3Rha2UgPSBzdGFrZUxpc3Quc2xpY2UoLTEpWzBdLnN0YWtlZC50b1N0cmluZygpIHx8ICcwJztcblxuICAgICAgY29uc3QgYm5DdXJyZW50U3Rha2UgPSBuZXcgQk4oY3VycmVudFN0YWtlKTtcblxuICAgICAgaWYgKGJuQ3VycmVudFN0YWtlLmd0KEJOX1pFUk8pKSB7XG4gICAgICAgIGNvbnN0IGRhcHBTdGFraW5nU3RhdHVzID0gYm5DdXJyZW50U3Rha2UuZ3QoQk5fWkVSTykgJiYgYm5DdXJyZW50U3Rha2UuZ3RlKG5ldyBCTihtaW5EZWxlZ2F0b3JTdGFrZSkpID8gU3Rha2luZ1N0YXR1cy5FQVJOSU5HX1JFV0FSRCA6IFN0YWtpbmdTdGF0dXMuTk9UX0VBUk5JTkc7XG5cbiAgICAgICAgYm5Ub3RhbEFjdGl2ZVN0YWtlID0gYm5Ub3RhbEFjdGl2ZVN0YWtlLmFkZChibkN1cnJlbnRTdGFrZSk7XG4gICAgICAgIGNvbnN0IGRhcHBJbmZvID0gZEFwcEluZm9NYXBbZGFwcEFkZHJlc3NdO1xuXG4gICAgICAgIG5vbWluYXRpb25MaXN0LnB1c2goe1xuICAgICAgICAgIHN0YXR1czogZGFwcFN0YWtpbmdTdGF0dXMsXG4gICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgdmFsaWRhdG9yQWRkcmVzczogZGFwcEFkZHJlc3MsXG4gICAgICAgICAgYWN0aXZlU3Rha2U6IGN1cnJlbnRTdGFrZSxcbiAgICAgICAgICB2YWxpZGF0b3JNaW5TdGFrZTogJzAnLFxuICAgICAgICAgIHZhbGlkYXRvcklkZW50aXR5OiBkYXBwSW5mbz8ubmFtZSxcbiAgICAgICAgICBoYXNVbnN0YWtpbmc6IGZhbHNlIC8vIGNhbm5vdCBnZXQgdW5zdGFraW5nIGluZm8gYnkgZGFwcFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCB1bmxvY2tpbmdDaHVua3MgPSBsZWRnZXIudW5ib25kaW5nSW5mby51bmxvY2tpbmdDaHVua3M7XG5cbiAgaWYgKHVubG9ja2luZ0NodW5rcy5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChjb25zdCB1bmxvY2tpbmdDaHVuayBvZiB1bmxvY2tpbmdDaHVua3MpIHtcbiAgICAgIGNvbnN0IGlzQ2xhaW1hYmxlID0gdW5sb2NraW5nQ2h1bmsudW5sb2NrRXJhIC0gcGFyc2VJbnQoY3VycmVudEVyYSkgPCAwO1xuICAgICAgY29uc3QgcmVtYWluaW5nRXJhID0gdW5sb2NraW5nQ2h1bmsudW5sb2NrRXJhIC0gcGFyc2VJbnQoY3VycmVudEVyYSk7XG4gICAgICBjb25zdCB3YWl0aW5nVGltZSA9IHJlbWFpbmluZ0VyYSAqIF9TVEFLSU5HX0VSQV9MRU5HVEhfTUFQW2NoYWluXTtcblxuICAgICAgdW5zdGFraW5nTGlzdC5wdXNoKHtcbiAgICAgICAgY2hhaW4sXG4gICAgICAgIHN0YXR1czogaXNDbGFpbWFibGUgPyBVbnN0YWtpbmdTdGF0dXMuQ0xBSU1BQkxFIDogVW5zdGFraW5nU3RhdHVzLlVOTE9DS0lORyxcbiAgICAgICAgY2xhaW1hYmxlOiB1bmxvY2tpbmdDaHVuay5hbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgd2FpdGluZ1RpbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChub21pbmF0aW9uTGlzdC5sZW5ndGggPT09IDAgJiYgdW5zdGFraW5nTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhaW46IGNoYWluSW5mby5zbHVnLFxuICAgICAgdHlwZTogU3Rha2luZ1R5cGUuTk9NSU5BVEVELFxuICAgICAgYWRkcmVzcyxcbiAgICAgIHN0YXR1czogU3Rha2luZ1N0YXR1cy5OT1RfU1RBS0lORyxcbiAgICAgIGFjdGl2ZVN0YWtlOiAnMCcsXG4gICAgICBub21pbmF0aW9uczogW10sXG4gICAgICB1bnN0YWtpbmdzOiBbXVxuICAgIH0gYXMgTm9taW5hdG9yTWV0YWRhdGE7XG4gIH1cblxuICBjb25zdCBzdGFraW5nU3RhdHVzID0gZ2V0U3Rha2luZ1N0YXR1c0J5Tm9taW5hdGlvbnMoYm5Ub3RhbEFjdGl2ZVN0YWtlLCBub21pbmF0aW9uTGlzdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFpbixcbiAgICB0eXBlOiBTdGFraW5nVHlwZS5OT01JTkFURUQsXG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBhY3RpdmVTdGFrZTogYm5Ub3RhbEFjdGl2ZVN0YWtlLnRvU3RyaW5nKCksXG4gICAgbm9taW5hdGlvbnM6IG5vbWluYXRpb25MaXN0LFxuICAgIHVuc3Rha2luZ3M6IHVuc3Rha2luZ0xpc3QsXG4gICAgc3RhdHVzOiBzdGFraW5nU3RhdHVzXG4gIH0gYXMgTm9taW5hdG9yTWV0YWRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3RhckRhcHBzSW5mbyAobmV0d29ya0tleTogc3RyaW5nLCBzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGkpIHtcbiAgY29uc3QgY2hhaW5BcGkgPSBhd2FpdCBzdWJzdHJhdGVBcGkuaXNSZWFkeTtcbiAgY29uc3QgcmF3TWF4U3Rha2VyUGVyQ29udHJhY3QgPSAoY2hhaW5BcGkuYXBpLmNvbnN0cy5kYXBwc1N0YWtpbmcubWF4TnVtYmVyT2ZTdGFrZXJzUGVyQ29udHJhY3QpLnRvSHVtYW4oKSBhcyBzdHJpbmc7XG5cbiAgY29uc3QgYWxsRGFwcHNJbmZvOiBWYWxpZGF0b3JJbmZvW10gPSBbXTtcbiAgY29uc3QgbWF4U3Rha2VyUGVyQ29udHJhY3QgPSBwYXJzZVJhd051bWJlcihyYXdNYXhTdGFrZXJQZXJDb250cmFjdCk7XG5cbiAgY29uc3QgYWxsRGFwcHNSZXEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5hc3Rhci5uZXR3b3JrL2FwaS92MS8ke25ldHdvcmtLZXl9L2RhcHBzLXN0YWtpbmcvZGFwcHNgLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXNwLmpzb24oKSk7XG4gICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH0pO1xuXG4gIGNvbnN0IFtfZXJhLCBfYWxsRGFwcHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGNoYWluQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuY3VycmVudEVyYSgpLFxuICAgIGFsbERhcHBzUmVxXG4gIF0pO1xuXG4gIGNvbnN0IGVyYSA9IHBhcnNlUmF3TnVtYmVyKF9lcmEudG9IdW1hbigpIGFzIHN0cmluZyk7XG4gIGNvbnN0IGFsbERhcHBzID0gX2FsbERhcHBzIGFzIFJlY29yZDxzdHJpbmcsIGFueT5bXTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChhbGxEYXBwcy5tYXAoYXN5bmMgKGRhcHApID0+IHtcbiAgICBjb25zdCBkYXBwTmFtZSA9IGRhcHAubmFtZSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGFwcEFkZHJlc3MgPSBkYXBwLmFkZHJlc3MgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhcHBJY29uID0gaXNVcmwoZGFwcC5pY29uVXJsIGFzIHN0cmluZykgPyBkYXBwLmljb25VcmwgYXMgc3RyaW5nIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNvbnRyYWN0UGFyYW0gPSBpc0V0aGVyZXVtQWRkcmVzcyhkYXBwQWRkcmVzcykgPyB7IEV2bTogZGFwcEFkZHJlc3MgfSA6IHsgV2FzbTogZGFwcEFkZHJlc3MgfTtcbiAgICBjb25zdCBfY29udHJhY3RJbmZvID0gYXdhaXQgY2hhaW5BcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5jb250cmFjdEVyYVN0YWtlKGNvbnRyYWN0UGFyYW0sIGVyYSk7XG4gICAgY29uc3QgY29udHJhY3RJbmZvID0gX2NvbnRyYWN0SW5mby50b1ByaW1pdGl2ZSgpIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgbGV0IHRvdGFsU3Rha2UgPSAnMCc7XG4gICAgbGV0IHN0YWtlckNvdW50ID0gMDtcblxuICAgIGlmIChjb250cmFjdEluZm8gIT09IG51bGwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzLEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICAgICAgdG90YWxTdGFrZSA9IGNvbnRyYWN0SW5mbz8udG90YWw/LnRvU3RyaW5nKCk7XG4gICAgICBzdGFrZXJDb3VudCA9IGNvbnRyYWN0SW5mby5udW1iZXJPZlN0YWtlcnMgYXMgbnVtYmVyO1xuICAgIH1cblxuICAgIGFsbERhcHBzSW5mby5wdXNoKHtcbiAgICAgIGNvbW1pc3Npb246IDAsXG4gICAgICBleHBlY3RlZFJldHVybjogMCxcbiAgICAgIGFkZHJlc3M6IGlzRXRoZXJldW1BZGRyZXNzKGRhcHBBZGRyZXNzKSA/IGRhcHBBZGRyZXNzLnRvTG93ZXJDYXNlKCkgOiBkYXBwQWRkcmVzcyxcbiAgICAgIHRvdGFsU3Rha2U6IHRvdGFsU3Rha2UsXG4gICAgICBvd25TdGFrZTogJzAnLFxuICAgICAgb3RoZXJTdGFrZTogdG90YWxTdGFrZS50b1N0cmluZygpLFxuICAgICAgbm9taW5hdG9yQ291bnQ6IHN0YWtlckNvdW50LFxuICAgICAgYmxvY2tlZDogZmFsc2UsXG4gICAgICBpc1ZlcmlmaWVkOiBmYWxzZSxcbiAgICAgIG1pbkJvbmQ6ICcwJyxcbiAgICAgIGljb246IGRhcHBJY29uLFxuICAgICAgaWRlbnRpdHk6IGRhcHBOYW1lLFxuICAgICAgY2hhaW46IG5ldHdvcmtLZXksXG4gICAgICBpc0Nyb3dkZWQ6IHN0YWtlckNvdW50ID49IG1heFN0YWtlclBlckNvbnRyYWN0XG4gICAgfSk7XG4gIH0pKTtcblxuICByZXR1cm4gYWxsRGFwcHNJbmZvO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXN0YXJCb25kaW5nRXh0cmluc2ljIChzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGksIGFtb3VudDogc3RyaW5nLCBkYXBwSW5mbzogVmFsaWRhdG9ySW5mbykge1xuICBjb25zdCBjaGFpbkFwaSA9IGF3YWl0IHN1YnN0cmF0ZUFwaS5pc1JlYWR5O1xuICBjb25zdCBiaW5hcnlBbW91bnQgPSBuZXcgQk4oYW1vdW50KTtcblxuICBjb25zdCBkYXBwUGFyYW0gPSBpc0V0aGVyZXVtQWRkcmVzcyhkYXBwSW5mby5hZGRyZXNzKSA/IHsgRXZtOiBkYXBwSW5mby5hZGRyZXNzIH0gOiB7IFdhc206IGRhcHBJbmZvLmFkZHJlc3MgfTtcblxuICByZXR1cm4gY2hhaW5BcGkuYXBpLnR4LmRhcHBzU3Rha2luZy5ib25kQW5kU3Rha2UoZGFwcFBhcmFtLCBiaW5hcnlBbW91bnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXN0YXJVbmJvbmRpbmdFeHRyaW5zaWMgKHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSwgYW1vdW50OiBzdHJpbmcsIGRhcHBBZGRyZXNzOiBzdHJpbmcpIHtcbiAgY29uc3QgYXBpUHJvbWlzZSA9IGF3YWl0IHN1YnN0cmF0ZUFwaS5pc1JlYWR5O1xuICBjb25zdCBiaW5hcnlBbW91bnQgPSBuZXcgQk4oYW1vdW50KTtcblxuICBjb25zdCBkYXBwUGFyYW0gPSBpc0V0aGVyZXVtQWRkcmVzcyhkYXBwQWRkcmVzcykgPyB7IEV2bTogZGFwcEFkZHJlc3MgfSA6IHsgV2FzbTogZGFwcEFkZHJlc3MgfTtcblxuICByZXR1cm4gYXBpUHJvbWlzZS5hcGkudHguZGFwcHNTdGFraW5nLnVuYm9uZEFuZFVuc3Rha2UoZGFwcFBhcmFtLCBiaW5hcnlBbW91bnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXN0YXJXaXRoZHJhd2FsRXh0cmluc2ljIChzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGkpIHtcbiAgY29uc3QgY2hhaW5BcGkgPSBhd2FpdCBzdWJzdHJhdGVBcGkuaXNSZWFkeTtcblxuICByZXR1cm4gY2hhaW5BcGkuYXBpLnR4LmRhcHBzU3Rha2luZy53aXRoZHJhd1VuYm9uZGVkKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3RhckNsYWltUmV3YXJkRXh0cmluc2ljIChzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGksIGFkZHJlc3M6IHN0cmluZykge1xuICBjb25zdCBhcGlQcm9taXNlID0gYXdhaXQgc3Vic3RyYXRlQXBpLmlzUmVhZHk7XG5cbiAgY29uc3QgW19zdGFrZWREYXBwcywgX2N1cnJlbnRFcmFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGFwaVByb21pc2UuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5nZW5lcmFsU3Rha2VySW5mby5lbnRyaWVzKGFkZHJlc3MpLFxuICAgIGFwaVByb21pc2UuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5jdXJyZW50RXJhKClcbiAgXSk7XG5cbiAgY29uc3QgY3VycmVudEVyYSA9IHBhcnNlUmF3TnVtYmVyKF9jdXJyZW50RXJhLnRvSHVtYW4oKSBhcyBzdHJpbmcpO1xuICBjb25zdCB0cmFuc2FjdGlvbnM6IFN1Ym1pdHRhYmxlRXh0cmluc2ljW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgX3N0YWtlZERhcHBzKSB7XG4gICAgY29uc3QgZGF0YSA9IGl0ZW1bMF0udG9IdW1hbigpIGFzIGFueVtdO1xuICAgIGNvbnN0IHN0YWtlZERhcHAgPSBkYXRhWzFdIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgY29uc3Qgc3Rha2VEYXRhID0gaXRlbVsxXS50b0h1bWFuKCkgYXMgUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPltdPjtcbiAgICBjb25zdCBzdGFrZXMgPSBzdGFrZURhdGEuc3Rha2VzO1xuICAgIGNvbnN0IGRhcHBBZGRyZXNzID0gaXNFdGhlcmV1bUFkZHJlc3Moc3Rha2VkRGFwcC5Fdm0pID8gc3Rha2VkRGFwcC5Fdm0udG9Mb3dlckNhc2UoKSA6IHN0YWtlZERhcHAuRXZtO1xuXG4gICAgbGV0IG51bWJlck9mVW5jbGFpbWVkRXJhID0gMDtcbiAgICBjb25zdCBtYXhUeCA9IDUwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFrZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgZXJhLCBzdGFrZWQgfSA9IHN0YWtlc1tpXTtcbiAgICAgIGNvbnN0IGJuU3Rha2VkID0gbmV3IEJOKHN0YWtlZC5yZXBsYWNlQWxsKCcsJywgJycpKTtcbiAgICAgIGNvbnN0IHBhcnNlZEVyYSA9IHBhcnNlUmF3TnVtYmVyKGVyYSk7XG5cbiAgICAgIGlmIChiblN0YWtlZC5lcShuZXcgQk4oMCkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXh0RXJhRGF0YSA9IHN0YWtlc1tpICsgMV0gPz8gbnVsbDtcbiAgICAgIGNvbnN0IG5leHRFcmEgPSBuZXh0RXJhRGF0YSAmJiBwYXJzZVJhd051bWJlcihuZXh0RXJhRGF0YS5lcmEpO1xuICAgICAgY29uc3QgaXNMYXN0RXJhID0gaSA9PT0gc3Rha2VzLmxlbmd0aCAtIDE7XG4gICAgICBjb25zdCBlcmFUb0NsYWltID0gaXNMYXN0RXJhID8gY3VycmVudEVyYSAtIHBhcnNlZEVyYSA6IG5leHRFcmEgLSBwYXJzZWRFcmE7XG5cbiAgICAgIG51bWJlck9mVW5jbGFpbWVkRXJhICs9IGVyYVRvQ2xhaW07XG4gICAgfVxuXG4gICAgY29uc3QgZGFwcFBhcmFtID0gaXNFdGhlcmV1bUFkZHJlc3MoZGFwcEFkZHJlc3MpID8geyBFdm06IGRhcHBBZGRyZXNzIH0gOiB7IFdhc206IGRhcHBBZGRyZXNzIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKG51bWJlck9mVW5jbGFpbWVkRXJhLCBtYXhUeCk7IGkrKykge1xuICAgICAgY29uc3QgdHggPSBhcGlQcm9taXNlLmFwaS50eC5kYXBwc1N0YWtpbmcuY2xhaW1TdGFrZXIoZGFwcFBhcmFtKTtcblxuICAgICAgdHJhbnNhY3Rpb25zLnB1c2godHgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcGlQcm9taXNlLmFwaS50eC51dGlsaXR5LmJhdGNoKHRyYW5zYWN0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3RhcldpdGhkcmF3YWJsZSAobm9taW5hdG9yTWV0YWRhdGE6IE5vbWluYXRvck1ldGFkYXRhKTogVW5zdGFraW5nSW5mbyB7XG4gIGNvbnN0IHVuc3Rha2luZ0luZm86IFVuc3Rha2luZ0luZm8gPSB7XG4gICAgY2hhaW46IG5vbWluYXRvck1ldGFkYXRhLmNoYWluLFxuICAgIHN0YXR1czogVW5zdGFraW5nU3RhdHVzLkNMQUlNQUJMRSxcbiAgICBjbGFpbWFibGU6ICcwJyxcbiAgICB3YWl0aW5nVGltZTogMFxuICB9O1xuXG4gIGxldCBibldpdGhkcmF3YWJsZSA9IEJOX1pFUk87XG5cbiAgZm9yIChjb25zdCB1bnN0YWtpbmcgb2Ygbm9taW5hdG9yTWV0YWRhdGEudW5zdGFraW5ncykge1xuICAgIGlmICh1bnN0YWtpbmcuc3RhdHVzID09PSBVbnN0YWtpbmdTdGF0dXMuQ0xBSU1BQkxFKSB7XG4gICAgICBibldpdGhkcmF3YWJsZSA9IGJuV2l0aGRyYXdhYmxlLmFkZChuZXcgQk4odW5zdGFraW5nLmNsYWltYWJsZSkpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Rha2luZ0luZm8uY2xhaW1hYmxlID0gYm5XaXRoZHJhd2FibGUudG9TdHJpbmcoKTtcblxuICByZXR1cm4gdW5zdGFraW5nSW5mbztcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQ2hhaW5JbmZvIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IE5vbWluYXRpb25JbmZvLCBOb21pbmF0b3JNZXRhZGF0YSwgU3Rha2luZ1N0YXR1cywgU3Rha2luZ1R5cGUsIFVuc3Rha2luZ0luZm8sIFVuc3Rha2luZ1N0YXR1cyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgZ2V0QXN0YXJXaXRoZHJhd2FibGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2tvbmkvYXBpL3N0YWtpbmcvYm9uZGluZy9hc3Rhcic7XG5pbXBvcnQgeyBfS05PV05fQ0hBSU5fSU5GTEFUSU9OX1BBUkFNUywgX1NUQUtJTkdfQ0hBSU5fR1JPVVAsIF9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TLCBfU3Vic3RyYXRlSW5mbGF0aW9uUGFyYW1zIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBkZXRlY3RUcmFuc2xhdGUsIHBhcnNlUmF3TnVtYmVyLCByZWZvcm1hdEFkZHJlc3MgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IGJhbGFuY2VGb3JtYXR0ZXIsIGZvcm1hdE51bWJlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMvbnVtYmVyJztcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcblxuaW1wb3J0IHsgQXBpUHJvbWlzZSB9IGZyb20gJ0Bwb2xrYWRvdC9hcGknO1xuaW1wb3J0IHsgQk4sIEJOX0JJTExJT04sIEJOX0hVTkRSRUQsIEJOX01JTExJT04sIEJOX1RIT1VTQU5ELCBCTl9aRVJPLCBiblRvVThhLCBzdHJpbmdUb1U4YSwgdThhQ29uY2F0IH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldE5vbWluYXRpb25Qb29sc1Bvb2xNZW1iZXIge1xuICBwb29sSWQ6IG51bWJlcixcbiAgcG9pbnRzOiBudW1iZXIsXG4gIGxhc1JlY29yZGVkUmV3YXJkQ291bnRlcjogbnVtYmVyLFxuICB1bmJvbmRpbmdFcmFzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0RGFwcHNTdGFraW5nRGFwcEluZm8ge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgZ2l0SHViVXJsOiBzdHJpbmcsXG4gIHRhZ3M6IHN0cmluZ1tdLFxuICB1cmw6IHN0cmluZyxcbiAgaW1hZ2VzVXJsOiBzdHJpbmdbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldERhcHBzU3Rha2luZ1VubG9ja2luZ0NodW5rIHtcbiAgYW1vdW50OiBudW1iZXIsXG4gIHVubG9ja0VyYTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0RGFwcHNTdGFraW5nQWNjb3VudExlZGdlciB7XG4gIGxvY2tlZDogbnVtYmVyLFxuICB1bmJvbmRpbmdJbmZvOiB7XG4gICAgdW5sb2NraW5nQ2h1bmtzOiBQYWxsZXREYXBwc1N0YWtpbmdVbmxvY2tpbmdDaHVua1tdXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja0hlYWRlciB7XG4gIHBhcmVudEhhc2g6IHN0cmluZyxcbiAgbnVtYmVyOiBudW1iZXIsXG4gIHN0YXRlUm9vdDogc3RyaW5nLFxuICBleHRyaW5zaWNzUm9vdDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYWNoYWluU3Rha2luZ1N0YWtlT3B0aW9uIHtcbiAgb3duZXI6IHN0cmluZyxcbiAgYW1vdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJhY2hhaW5TdGFraW5nQ2FuZGlkYXRlTWV0YWRhdGEge1xuICBib25kOiBzdHJpbmcsXG4gIGRlbGVnYXRpb25Db3VudDogbnVtYmVyLFxuICB0b3RhbENvdW50ZWQ6IHN0cmluZyxcbiAgbG93ZXN0VG9wRGVsZWdhdGlvbkFtb3VudDogc3RyaW5nLFxuICBzdGF0dXM6IGFueSB8ICdBY3RpdmUnXG59XG5cbmV4cG9ydCBlbnVtIFBhbGxldFBhcmFjaGFpblN0YWtpbmdSZXF1ZXN0VHlwZSB7XG4gIFJFVk9LRSA9ICdyZXZva2UnLFxuICBERUNSRUFTRSA9ICdkZWNyZWFzZScsXG4gIEJPTkRfTEVTUyA9ICdib25kTGVzcydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXRQYXJhY2hhaW5TdGFraW5nRGVsZWdhdGlvblJlcXVlc3RzU2NoZWR1bGVkUmVxdWVzdCB7XG4gIGRlbGVnYXRvcjogc3RyaW5nLFxuICB3aGVuRXhlY3V0YWJsZTogbnVtYmVyLFxuICBhY3Rpb246IFJlY29yZDxQYWxsZXRQYXJhY2hhaW5TdGFraW5nUmVxdWVzdFR5cGUsIG51bWJlcj5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXRQYXJhY2hhaW5TdGFraW5nRGVsZWdhdGlvbkluZm8ge1xuICBvd25lcjogc3RyaW5nLFxuICBhbW91bnQ6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldFBhcmFjaGFpblN0YWtpbmdEZWxlZ2F0b3Ige1xuICBpZDogc3RyaW5nLFxuICBkZWxlZ2F0aW9uczogUGFsbGV0UGFyYWNoYWluU3Rha2luZ0RlbGVnYXRpb25JbmZvW10sXG4gIHRvdGFsOiBudW1iZXIsXG4gIGxlc3NUb3RhbDogbnVtYmVyLFxuICBzdGF0dXM6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldFN0YWtpbmdFeHBvc3VyZUl0ZW0ge1xuICB3aG86IHN0cmluZyxcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldFN0YWtpbmdFeHBvc3VyZSB7XG4gIHRvdGFsOiBudW1iZXIsXG4gIG93bjogbnVtYmVyLFxuICBvdGhlcnM6IFBhbGxldFN0YWtpbmdFeHBvc3VyZUl0ZW1bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldElkZW50aXR5UmVnaXN0cmF0aW9uIHtcbiAganVkZ2VtZW50czogYW55W10sXG4gIGRlcG9zaXQ6IG51bWJlcixcbiAgaW5mbzoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIFJhdzogc3RyaW5nXG4gICAgfSxcbiAgICB3ZWI6IHtcbiAgICAgIFJhdzogc3RyaW5nXG4gICAgfSxcbiAgICB0d2l0dGVyOiB7XG4gICAgICBSYXc6IHN0cmluZ1xuICAgIH0sXG4gICAgcmlvdDoge1xuICAgICAgUmF3OiBzdHJpbmdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0b3JFeHRyYUluZm8ge1xuICBjb21taXNzaW9uOiBzdHJpbmcsXG4gIGJsb2NrZWQ6IGZhbHNlLFxuICBpZGVudGl0eT86IHN0cmluZyxcbiAgaXNWZXJpZmllZDogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVubG9ja2luZyB7XG4gIHJlbWFpbmluZ0VyYXM6IEJOO1xuICB2YWx1ZTogQk47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVybm9hU3Rha2luZ1Jld2FyZHNTdGFraW5nUmV3YXJkc0RhdGEge1xuICBzZXNzaW9uRXJhUGF5b3V0OiBzdHJpbmcsXG4gIHNlc3Npb25FeHRyYVJld2FyZFBheW91dDogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBvb2xTdGFzaEFkZHJlc3MgKGFwaTogQXBpUHJvbWlzZSwgaW5kZXg6IG51bWJlciwgcG9vbElkOiBudW1iZXIsIHBvb2xzUGFsbGV0SWQ6IHN0cmluZykge1xuICBjb25zdCBNb2RQcmVmaXggPSBzdHJpbmdUb1U4YSgnbW9kbCcpO1xuICBjb25zdCBVMzJPcHRzID0geyBiaXRMZW5ndGg6IDMyLCBpc0xlOiB0cnVlIH07XG4gIGNvbnN0IEVtcHR5SDI1NiA9IG5ldyBVaW50OEFycmF5KDMyKTtcblxuICByZXR1cm4gYXBpLnJlZ2lzdHJ5XG4gICAgLmNyZWF0ZVR5cGUoXG4gICAgICAnQWNjb3VudElkMzInLFxuICAgICAgdThhQ29uY2F0KFxuICAgICAgICBNb2RQcmVmaXgsXG4gICAgICAgIHBvb2xzUGFsbGV0SWQsXG4gICAgICAgIG5ldyBVaW50OEFycmF5KFtpbmRleF0pLFxuICAgICAgICBiblRvVThhKG5ldyBCTihwb29sSWQudG9TdHJpbmcoKSksIFUzMk9wdHMpLFxuICAgICAgICBFbXB0eUgyNTZcbiAgICAgIClcbiAgICApXG4gICAgLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Qb29sTmFtZSAoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9bXlxceDIwLVxceDdFXS9nLCAnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlkZW50aXR5IChpZGVudGl0eUluZm86IFBhbGxldElkZW50aXR5UmVnaXN0cmF0aW9uIHwgbnVsbCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBpZGVudGl0eTtcblxuICBpZiAoaWRlbnRpdHlJbmZvKSB7XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSBpZGVudGl0eUluZm8/LmluZm8/LmRpc3BsYXk/LlJhdztcbiAgICBjb25zdCB3ZWIgPSBpZGVudGl0eUluZm8/LmluZm8/LndlYj8uUmF3O1xuICAgIGNvbnN0IHJpb3QgPSBpZGVudGl0eUluZm8/LmluZm8/LnJpb3Q/LlJhdztcbiAgICBjb25zdCB0d2l0dGVyID0gaWRlbnRpdHlJbmZvPy5pbmZvPy50d2l0dGVyPy5SYXc7XG5cbiAgICBpZiAoZGlzcGxheU5hbWUgJiYgIWRpc3BsYXlOYW1lLnN0YXJ0c1dpdGgoJzB4JykpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgIGlkZW50aXR5ID0gZGlzcGxheU5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkZW50aXR5ID0gdHdpdHRlciB8fCB3ZWIgfHwgcmlvdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaWRlbnRpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmZsYXRpb25QYXJhbXMgKG5ldHdvcmtLZXk6IHN0cmluZyk6IF9TdWJzdHJhdGVJbmZsYXRpb25QYXJhbXMge1xuICByZXR1cm4gX0tOT1dOX0NIQUlOX0lORkxBVElPTl9QQVJBTVNbbmV0d29ya0tleV0gfHwgX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjSW5mbGF0aW9uVW5pZm9ybUVyYVBheW91dCAodG90YWxJc3N1YW5jZTogQk4sIHllYXJseUluZmxhdGlvbkluVG9rZW5zOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCB0b3RhbElzc3VhbmNlSW5Ub2tlbnMgPSB0b3RhbElzc3VhbmNlLmRpdihCTl9CSUxMSU9OKS5kaXYoQk5fVEhPVVNBTkQpLnRvTnVtYmVyKCk7XG5cbiAgcmV0dXJuICh0b3RhbElzc3VhbmNlSW5Ub2tlbnMgPT09IDAgPyAwLjAgOiB5ZWFybHlJbmZsYXRpb25JblRva2VucyAvIHRvdGFsSXNzdWFuY2VJblRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjSW5mbGF0aW9uUmV3YXJkQ3VydmUgKG1pbkluZmxhdGlvbjogbnVtYmVyLCBzdGFrZWRGcmFjdGlvbjogbnVtYmVyLCBpZGVhbFN0YWtlOiBudW1iZXIsIGlkZWFsSW50ZXJlc3Q6IG51bWJlciwgZmFsbG9mZjogbnVtYmVyKSB7XG4gIHJldHVybiAobWluSW5mbGF0aW9uICsgKFxuICAgIHN0YWtlZEZyYWN0aW9uIDw9IGlkZWFsU3Rha2VcbiAgICAgID8gKHN0YWtlZEZyYWN0aW9uICogKGlkZWFsSW50ZXJlc3QgLSAobWluSW5mbGF0aW9uIC8gaWRlYWxTdGFrZSkpKVxuICAgICAgOiAoKChpZGVhbEludGVyZXN0ICogaWRlYWxTdGFrZSkgLSBtaW5JbmZsYXRpb24pICogTWF0aC5wb3coMiwgKGlkZWFsU3Rha2UgLSBzdGFrZWRGcmFjdGlvbikgLyBmYWxsb2ZmKSlcbiAgKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbmZsYXRpb24gKHRvdGFsRXJhU3Rha2U6IEJOLCB0b3RhbElzc3VhbmNlOiBCTiwgbnVtQXVjdGlvbnM6IG51bWJlciwgbmV0d29ya0tleTogc3RyaW5nKSB7XG4gIGNvbnN0IGluZmxhdGlvblBhcmFtcyA9IGdldEluZmxhdGlvblBhcmFtcyhuZXR3b3JrS2V5KTtcbiAgY29uc3QgeyBhdWN0aW9uQWRqdXN0LCBhdWN0aW9uTWF4LCBmYWxsb2ZmLCBtYXhJbmZsYXRpb24sIG1pbkluZmxhdGlvbiwgc3Rha2VUYXJnZXQgfSA9IGluZmxhdGlvblBhcmFtcztcbiAgY29uc3QgaWRlYWxTdGFrZSA9IHN0YWtlVGFyZ2V0IC0gKE1hdGgubWluKGF1Y3Rpb25NYXgsIG51bUF1Y3Rpb25zKSAqIGF1Y3Rpb25BZGp1c3QpO1xuICBjb25zdCBpZGVhbEludGVyZXN0ID0gbWF4SW5mbGF0aW9uIC8gaWRlYWxTdGFrZTtcbiAgY29uc3Qgc3Rha2VkRnJhY3Rpb24gPSB0b3RhbEVyYVN0YWtlLm11bChCTl9NSUxMSU9OKS5kaXYodG90YWxJc3N1YW5jZSkudG9OdW1iZXIoKSAvIEJOX01JTExJT04udG9OdW1iZXIoKTtcblxuICBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYWxlcGguaW5jbHVkZXMobmV0d29ya0tleSkpIHtcbiAgICBpZiAoaW5mbGF0aW9uUGFyYW1zLnllYXJseUluZmxhdGlvbkluVG9rZW5zKSB7XG4gICAgICByZXR1cm4gMTAwICogY2FsY0luZmxhdGlvblVuaWZvcm1FcmFQYXlvdXQodG90YWxJc3N1YW5jZSwgaW5mbGF0aW9uUGFyYW1zLnllYXJseUluZmxhdGlvbkluVG9rZW5zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDEwMCAqIGNhbGNJbmZsYXRpb25SZXdhcmRDdXJ2ZShtaW5JbmZsYXRpb24sIHN0YWtlZEZyYWN0aW9uLCBpZGVhbFN0YWtlLCBpZGVhbEludGVyZXN0LCBmYWxsb2ZmKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDEwMCAqIChtaW5JbmZsYXRpb24gKyAoXG4gICAgICBzdGFrZWRGcmFjdGlvbiA8PSBpZGVhbFN0YWtlXG4gICAgICAgID8gKHN0YWtlZEZyYWN0aW9uICogKGlkZWFsSW50ZXJlc3QgLSAobWluSW5mbGF0aW9uIC8gaWRlYWxTdGFrZSkpKVxuICAgICAgICA6ICgoKGlkZWFsSW50ZXJlc3QgKiBpZGVhbFN0YWtlKSAtIG1pbkluZmxhdGlvbikgKiBNYXRoLnBvdygyLCAoaWRlYWxTdGFrZSAtIHN0YWtlZEZyYWN0aW9uKSAvIGZhbGxvZmYpKVxuICAgICkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVDaGFpblN0YWtlZFJldHVybiAoaW5mbGF0aW9uOiBudW1iZXIsIHRvdGFsRXJhU3Rha2U6IEJOLCB0b3RhbElzc3VhbmNlOiBCTiwgbmV0d29ya0tleTogc3RyaW5nKSB7XG4gIGNvbnN0IHN0YWtlZEZyYWN0aW9uID0gdG90YWxFcmFTdGFrZS5tdWwoQk5fTUlMTElPTikuZGl2KHRvdGFsSXNzdWFuY2UpLnRvTnVtYmVyKCkgLyBCTl9NSUxMSU9OLnRvTnVtYmVyKCk7XG5cbiAgbGV0IHN0YWtlZFJldHVybiA9IGluZmxhdGlvbiAvIHN0YWtlZEZyYWN0aW9uO1xuXG4gIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hbGVwaC5pbmNsdWRlcyhuZXR3b3JrS2V5KSkge1xuICAgIHN0YWtlZFJldHVybiAqPSAwLjk7IC8vIDEwJSBnb2VzIHRvIHRyZWFzdXJ5XG4gIH1cblxuICByZXR1cm4gc3Rha2VkUmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQWxlcGhaZXJvVmFsaWRhdG9yUmV0dXJuIChjaGFpblN0YWtlZFJldHVybjogbnVtYmVyLCBjb21taXNzaW9uOiBudW1iZXIpIHtcbiAgcmV0dXJuIGNoYWluU3Rha2VkUmV0dXJuICogKDEwMCAtIGNvbW1pc3Npb24pIC8gMTAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVGVybm9hVmFsaWRhdG9yUmV0dXJuIChyZXdhcmRQZXJWYWxpZGF0b3I6IG51bWJlciwgdmFsaWRhdG9yU3Rha2U6IG51bWJlciwgY29tbWlzc2lvbjogbnVtYmVyKSB7XG4gIGNvbnN0IHBlcmNlbnRSZXdhcmRGb3JOb21pbmF0b3JzID0gKDEwMCAtIGNvbW1pc3Npb24pIC8gMTAwO1xuICBjb25zdCByZXdhcmRGb3JOb21pbmF0b3JzID0gcmV3YXJkUGVyVmFsaWRhdG9yICogcGVyY2VudFJld2FyZEZvck5vbWluYXRvcnM7XG5cbiAgY29uc3Qgc3Rha2VSYXRpbyA9IHJld2FyZEZvck5vbWluYXRvcnMgLyB2YWxpZGF0b3JTdGFrZTtcblxuICByZXR1cm4gc3Rha2VSYXRpbyAqIDM2NSAqIDEwMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVZhbGlkYXRvclN0YWtlZFJldHVybiAoY2hhaW5TdGFrZWRSZXR1cm46IG51bWJlciwgdG90YWxWYWxpZGF0b3JTdGFrZTogQk4sIGF2Z1N0YWtlOiBCTiwgY29tbWlzc2lvbjogbnVtYmVyKSB7XG4gIGNvbnN0IGJuQWRqdXN0ZWQgPSBhdmdTdGFrZS5tdWwoQk5fSFVORFJFRCkuZGl2KHRvdGFsVmFsaWRhdG9yU3Rha2UpO1xuICBjb25zdCBhZGp1c3RlZCA9IGJuQWRqdXN0ZWQudG9OdW1iZXIoKSAqIGNoYWluU3Rha2VkUmV0dXJuO1xuXG4gIGNvbnN0IHN0YWtlZFJldHVybiA9IChhZGp1c3RlZCA+IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBhZGp1c3RlZCkgLyAxMDA7XG5cbiAgcmV0dXJuIHN0YWtlZFJldHVybiAqICgxMDAgLSBjb21taXNzaW9uKSAvIDEwMDsgLy8gRGVkdWN0IGNvbW1pc3Npb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1pc3Npb24gKGNvbW1pc3Npb25TdHJpbmc6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VGbG9hdChjb21taXNzaW9uU3RyaW5nLnNwbGl0KCclJylbMF0pOyAvLyBFeGFtcGxlOiAxMiVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmZsYXRpb25Db25maWcge1xuICBleHBlY3Q6IHtcbiAgICBtaW46IHN0cmluZyxcbiAgICBpZGVhbDogc3RyaW5nLFxuICAgIG1heDogc3RyaW5nXG4gIH0sXG4gIGFubnVhbDoge1xuICAgIG1pbjogc3RyaW5nLFxuICAgIGlkZWFsOiBzdHJpbmcsXG4gICAgbWF4OiBzdHJpbmdcbiAgfSxcbiAgcm91bmQ6IHtcbiAgICBtaW46IHN0cmluZyxcbiAgICBpZGVhbDogc3RyaW5nLFxuICAgIG1heDogc3RyaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFDdXJyZW50SW5mbGF0aW9uICh0b3RhbFN0YWtlZDogbnVtYmVyLCBpbmZsYXRpb25Db25maWc6IEluZmxhdGlvbkNvbmZpZykgeyAvLyByZWFkIG1vcmUgYXQgaHR0cHM6Ly9oYWNrbWQuaW8vQHNiQXFPdVhrUnZ5aVpQT0IzUnluNlEvU3lwcjNaSmg1XG4gIGNvbnN0IGV4cGVjdE1pbiA9IHBhcnNlUmF3TnVtYmVyKGluZmxhdGlvbkNvbmZpZy5leHBlY3QubWluKTtcbiAgY29uc3QgZXhwZWN0TWF4ID0gcGFyc2VSYXdOdW1iZXIoaW5mbGF0aW9uQ29uZmlnLmV4cGVjdC5tYXgpO1xuXG4gIGlmICh0b3RhbFN0YWtlZCA8IGV4cGVjdE1pbikge1xuICAgIGNvbnN0IGluZmxhdGlvblN0cmluZyA9IGluZmxhdGlvbkNvbmZpZy5hbm51YWwubWluLnNwbGl0KCclJylbMF07XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChpbmZsYXRpb25TdHJpbmcpO1xuICB9IGVsc2UgaWYgKHRvdGFsU3Rha2VkID4gZXhwZWN0TWF4KSB7XG4gICAgY29uc3QgaW5mbGF0aW9uU3RyaW5nID0gaW5mbGF0aW9uQ29uZmlnLmFubnVhbC5tYXguc3BsaXQoJyUnKVswXTtcblxuICAgIHJldHVybiBwYXJzZUZsb2F0KGluZmxhdGlvblN0cmluZyk7XG4gIH1cblxuICBjb25zdCBpbmZsYXRpb25TdHJpbmcgPSBpbmZsYXRpb25Db25maWcuYW5udWFsLmlkZWFsLnNwbGl0KCclJylbMF07XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoaW5mbGF0aW9uU3RyaW5nKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUdXJpbmdPcHRpbWFsQ29tcG91bmRGb3JtYXQge1xuICBwZXJpb2Q6IHN0cmluZzsgLy8gaW4gZGF5c1xuICBhcHk6IHN0cmluZztcbn1cblxuLy8gdmFsaWRhdGlvbnMgYW5kIGNoZWNrIGNvbmRpdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBpc1Nob3dOb21pbmF0aW9uQnlWYWxpZGF0b3IgKGNoYWluOiBzdHJpbmcpOiAnc2hvd0J5VmFsdWUnIHwgJ3Nob3dCeVZhbGlkYXRvcicgfCAnbWl4ZWQnIHtcbiAgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFtcGxpdHVkZS5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gJ3Nob3dCeVZhbHVlJztcbiAgfSBlbHNlIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hc3Rhci5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gJ21peGVkJztcbiAgfSBlbHNlIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5wYXJhLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiAnc2hvd0J5VmFsaWRhdG9yJztcbiAgfVxuXG4gIHJldHVybiAnc2hvd0J5VmFsdWUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9uZGVkVmFsaWRhdG9ycyAobm9taW5hdGlvbnM6IE5vbWluYXRpb25JbmZvW10pIHtcbiAgY29uc3QgYm9uZGVkVmFsaWRhdG9yczogc3RyaW5nW10gPSBbXTtcbiAgbGV0IG5vbWluYXRpb25Db3VudCA9IDA7XG5cbiAgZm9yIChjb25zdCBub21pbmF0aW9uIG9mIG5vbWluYXRpb25zKSB7XG4gICAgbm9taW5hdGlvbkNvdW50ICs9IDE7XG4gICAgYm9uZGVkVmFsaWRhdG9ycy5wdXNoKHJlZm9ybWF0QWRkcmVzcyhub21pbmF0aW9uLnZhbGlkYXRvckFkZHJlc3MsIDApKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbm9taW5hdGlvbkNvdW50LFxuICAgIGJvbmRlZFZhbGlkYXRvcnNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5zdGFrZUFsbCAoc2VsZWN0ZWRWYWxpZGF0b3I6IHN0cmluZywgbm9taW5hdGlvbnM6IE5vbWluYXRpb25JbmZvW10sIHVuc3Rha2VBbW91bnQ6IHN0cmluZykge1xuICBsZXQgaXNVbnN0YWtlQWxsID0gZmFsc2U7XG5cbiAgZm9yIChjb25zdCBub21pbmF0aW9uIG9mIG5vbWluYXRpb25zKSB7XG4gICAgY29uc3QgcGFyc2VkVmFsaWRhdG9yQWRkcmVzcyA9IHJlZm9ybWF0QWRkcmVzcyhub21pbmF0aW9uLnZhbGlkYXRvckFkZHJlc3MsIDApO1xuICAgIGNvbnN0IHBhcnNlZFNlbGVjdGVkVmFsaWRhdG9yID0gcmVmb3JtYXRBZGRyZXNzKHNlbGVjdGVkVmFsaWRhdG9yLCAwKTtcblxuICAgIGlmIChwYXJzZWRWYWxpZGF0b3JBZGRyZXNzID09PSBwYXJzZWRTZWxlY3RlZFZhbGlkYXRvcikge1xuICAgICAgaWYgKHVuc3Rha2VBbW91bnQgPT09IG5vbWluYXRpb24uYWN0aXZlU3Rha2UpIHtcbiAgICAgICAgaXNVbnN0YWtlQWxsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzVW5zdGFrZUFsbDtcbn1cblxuZXhwb3J0IGVudW0gU3Rha2luZ0FjdGlvbiB7XG4gIFNUQUtFID0gJ1NUQUtFJyxcbiAgVU5TVEFLRSA9ICdVTlNUQUtFJyxcbiAgV0lUSERSQVcgPSAnV0lUSERSQVcnLFxuICBDTEFJTV9SRVdBUkQgPSAnQ0xBSU1fUkVXQVJEJyxcbiAgQ0FOQ0VMX1VOU1RBS0UgPSAnQ0FOQ0VMX1VOU1RBS0UnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFraW5nQXZhaWxhYmxlQWN0aW9uc0J5Q2hhaW4gKGNoYWluOiBzdHJpbmcsIHR5cGU6IFN0YWtpbmdUeXBlKTogU3Rha2luZ0FjdGlvbltdIHtcbiAgaWYgKHR5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCkge1xuICAgIHJldHVybiBbU3Rha2luZ0FjdGlvbi5TVEFLRSwgU3Rha2luZ0FjdGlvbi5VTlNUQUtFLCBTdGFraW5nQWN0aW9uLldJVEhEUkFXLCBTdGFraW5nQWN0aW9uLkNMQUlNX1JFV0FSRF07XG4gIH1cblxuICBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAucGFyYS5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gW1N0YWtpbmdBY3Rpb24uU1RBS0UsIFN0YWtpbmdBY3Rpb24uVU5TVEFLRSwgU3Rha2luZ0FjdGlvbi5XSVRIRFJBVywgU3Rha2luZ0FjdGlvbi5DQU5DRUxfVU5TVEFLRV07XG4gIH0gZWxzZSBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYXN0YXIuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuIFtTdGFraW5nQWN0aW9uLlNUQUtFLCBTdGFraW5nQWN0aW9uLlVOU1RBS0UsIFN0YWtpbmdBY3Rpb24uV0lUSERSQVcsIFN0YWtpbmdBY3Rpb24uQ0xBSU1fUkVXQVJEXTtcbiAgfSBlbHNlIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hbXBsaXR1ZGUuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuIFtTdGFraW5nQWN0aW9uLlNUQUtFLCBTdGFraW5nQWN0aW9uLlVOU1RBS0UsIFN0YWtpbmdBY3Rpb24uV0lUSERSQVddO1xuICB9XG5cbiAgcmV0dXJuIFtTdGFraW5nQWN0aW9uLlNUQUtFLCBTdGFraW5nQWN0aW9uLlVOU1RBS0UsIFN0YWtpbmdBY3Rpb24uV0lUSERSQVcsIFN0YWtpbmdBY3Rpb24uQ0FOQ0VMX1VOU1RBS0VdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3Rha2luZ0F2YWlsYWJsZUFjdGlvbnNCeU5vbWluYXRvciAobm9taW5hdG9yTWV0YWRhdGE6IE5vbWluYXRvck1ldGFkYXRhLCB1bmNsYWltZWRSZXdhcmQ/OiBzdHJpbmcpOiBTdGFraW5nQWN0aW9uW10ge1xuICBjb25zdCByZXN1bHQ6IFN0YWtpbmdBY3Rpb25bXSA9IFtTdGFraW5nQWN0aW9uLlNUQUtFXTtcblxuICBjb25zdCBibkFjdGl2ZVN0YWtlID0gbmV3IEJOKG5vbWluYXRvck1ldGFkYXRhLmFjdGl2ZVN0YWtlKTtcblxuICBpZiAobm9taW5hdG9yTWV0YWRhdGEuYWN0aXZlU3Rha2UgJiYgYm5BY3RpdmVTdGFrZS5ndChCTl9aRVJPKSkge1xuICAgIHJlc3VsdC5wdXNoKFN0YWtpbmdBY3Rpb24uVU5TVEFLRSk7XG5cbiAgICBjb25zdCBpc0FzdGFyTmV0d29yayA9IF9TVEFLSU5HX0NIQUlOX0dST1VQLmFzdGFyLmluY2x1ZGVzKG5vbWluYXRvck1ldGFkYXRhLmNoYWluKTtcbiAgICBjb25zdCBpc0FtcGxpdHVkZU5ldHdvcmsgPSBfU1RBS0lOR19DSEFJTl9HUk9VUC5hbXBsaXR1ZGUuaW5jbHVkZXMobm9taW5hdG9yTWV0YWRhdGEuY2hhaW4pO1xuICAgIGNvbnN0IGJuVW5jbGFpbWVkUmV3YXJkID0gbmV3IEJOKHVuY2xhaW1lZFJld2FyZCB8fCAnMCcpO1xuXG4gICAgaWYgKFxuICAgICAgKChub21pbmF0b3JNZXRhZGF0YS50eXBlID09PSBTdGFraW5nVHlwZS5QT09MRUQgfHwgaXNBbXBsaXR1ZGVOZXR3b3JrKSAmJiBiblVuY2xhaW1lZFJld2FyZC5ndChCTl9aRVJPKSkgfHxcbiAgICAgIGlzQXN0YXJOZXR3b3JrXG4gICAgKSB7XG4gICAgICByZXN1bHQucHVzaChTdGFraW5nQWN0aW9uLkNMQUlNX1JFV0FSRCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vbWluYXRvck1ldGFkYXRhLnVuc3Rha2luZ3MubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdC5wdXNoKFN0YWtpbmdBY3Rpb24uQ0FOQ0VMX1VOU1RBS0UpO1xuICAgIGNvbnN0IGhhc0NsYWltYWJsZSA9IG5vbWluYXRvck1ldGFkYXRhLnVuc3Rha2luZ3Muc29tZSgodW5zdGFraW5nKSA9PiB1bnN0YWtpbmcuc3RhdHVzID09PSBVbnN0YWtpbmdTdGF0dXMuQ0xBSU1BQkxFKTtcblxuICAgIGlmIChoYXNDbGFpbWFibGUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKFN0YWtpbmdBY3Rpb24uV0lUSERSQVcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FjdGlvbkZyb21WYWxpZGF0b3IgKHN0YWtpbmdUeXBlOiBTdGFraW5nVHlwZSwgY2hhaW46IHN0cmluZykge1xuICBpZiAoc3Rha2luZ1R5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hc3Rhci5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hbXBsaXR1ZGUuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAucGFyYS5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpdGhkcmF3YWxJbmZvIChub21pbmF0b3JNZXRhZGF0YTogTm9taW5hdG9yTWV0YWRhdGEpIHtcbiAgY29uc3QgdW5zdGFraW5ncyA9IG5vbWluYXRvck1ldGFkYXRhLnVuc3Rha2luZ3M7XG5cbiAgbGV0IHJlc3VsdDogVW5zdGFraW5nSW5mbyB8IHVuZGVmaW5lZDtcblxuICBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYXN0YXIuaW5jbHVkZXMobm9taW5hdG9yTWV0YWRhdGEuY2hhaW4pKSB7XG4gICAgcmV0dXJuIGdldEFzdGFyV2l0aGRyYXdhYmxlKG5vbWluYXRvck1ldGFkYXRhKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgdW5zdGFraW5nIG9mIHVuc3Rha2luZ3MpIHtcbiAgICBpZiAodW5zdGFraW5nLnN0YXR1cyA9PT0gVW5zdGFraW5nU3RhdHVzLkNMQUlNQUJMRSkge1xuICAgICAgcmVzdWx0ID0gdW5zdGFraW5nOyAvLyBvbmx5IGdldCB0aGUgZmlyc3Qgd2l0aGRyYXdhbFxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YWtpbmdTdGF0dXNCeU5vbWluYXRpb25zIChiblRvdGFsQWN0aXZlU3Rha2U6IEJOLCBub21pbmF0aW9uTGlzdDogTm9taW5hdGlvbkluZm9bXSk6IFN0YWtpbmdTdGF0dXMge1xuICBsZXQgc3Rha2luZ1N0YXR1czogU3Rha2luZ1N0YXR1cyA9IFN0YWtpbmdTdGF0dXMuRUFSTklOR19SRVdBUkQ7XG5cbiAgaWYgKGJuVG90YWxBY3RpdmVTdGFrZS5pc1plcm8oKSkge1xuICAgIHN0YWtpbmdTdGF0dXMgPSBTdGFraW5nU3RhdHVzLk5PVF9FQVJOSU5HO1xuICB9IGVsc2Uge1xuICAgIGxldCBpbnZhbGlkRGVsZWdhdGlvbkNvdW50ID0gMDtcblxuICAgIGZvciAoY29uc3Qgbm9taW5hdGlvbiBvZiBub21pbmF0aW9uTGlzdCkge1xuICAgICAgaWYgKG5vbWluYXRpb24uc3RhdHVzID09PSBTdGFraW5nU3RhdHVzLk5PVF9FQVJOSU5HKSB7XG4gICAgICAgIGludmFsaWREZWxlZ2F0aW9uQ291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZERlbGVnYXRpb25Db3VudCA+IDAgJiYgaW52YWxpZERlbGVnYXRpb25Db3VudCA8IG5vbWluYXRpb25MaXN0Lmxlbmd0aCkge1xuICAgICAgc3Rha2luZ1N0YXR1cyA9IFN0YWtpbmdTdGF0dXMuUEFSVElBTExZX0VBUk5JTkc7XG4gICAgfSBlbHNlIGlmIChpbnZhbGlkRGVsZWdhdGlvbkNvdW50ID09PSBub21pbmF0aW9uTGlzdC5sZW5ndGgpIHtcbiAgICAgIHN0YWtpbmdTdGF0dXMgPSBTdGFraW5nU3RhdHVzLk5PVF9FQVJOSU5HO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGFraW5nU3RhdHVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRhdG9yTGFiZWwgKGNoYWluOiBzdHJpbmcpIHtcbiAgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFzdGFyLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiAnZEFwcCc7XG4gIH0gZWxzZSBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAucmVsYXkuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuICdWYWxpZGF0b3InO1xuICB9XG5cbiAgcmV0dXJuICdDb2xsYXRvcic7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNaW5TdGFrZUVycm9yTWVzc2FnZSA9IChjaGFpbkluZm86IF9DaGFpbkluZm8sIGJuTWluU3Rha2U6IEJOKTogc3RyaW5nID0+IHtcbiAgY29uc3QgdG9rZW5JbmZvID0gX2dldENoYWluTmF0aXZlVG9rZW5CYXNpY0luZm8oY2hhaW5JbmZvKTtcbiAgY29uc3QgbnVtYmVyID0gZm9ybWF0TnVtYmVyKGJuTWluU3Rha2UudG9TdHJpbmcoKSwgdG9rZW5JbmZvLmRlY2ltYWxzIHx8IDAsIGJhbGFuY2VGb3JtYXR0ZXIpO1xuXG4gIHJldHVybiB0KCdJbnN1ZmZpY2llbnQgc3Rha2UuIFBsZWFzZSBzdGFrZSBhdCBsZWFzdCB7e251bWJlcn19IHt7dG9rZW5TeW1ib2x9fSB0byBnZXQgcmV3YXJkcycsIHsgcmVwbGFjZTogeyB0b2tlblN5bWJvbDogdG9rZW5JbmZvLnN5bWJvbCwgbnVtYmVyIH0gfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWF4VmFsaWRhdG9yRXJyb3JNZXNzYWdlID0gKGNoYWluSW5mbzogX0NoYWluSW5mbywgbWF4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgbWVzc2FnZSA9IGRldGVjdFRyYW5zbGF0ZSgnWW91IGNhbm5vdCBzZWxlY3QgbW9yZSB0aGFuIHt7bnVtYmVyfX0gdmFsaWRhdG9ycyBmb3IgdGhpcyBuZXR3b3JrJyk7XG4gIGNvbnN0IGxhYmVsID0gZ2V0VmFsaWRhdG9yTGFiZWwoY2hhaW5JbmZvLnNsdWcpO1xuXG4gIGlmIChtYXggPiAxKSB7XG4gICAgc3dpdGNoIChsYWJlbCkge1xuICAgICAgY2FzZSAnZEFwcCc6XG4gICAgICAgIG1lc3NhZ2UgPSBkZXRlY3RUcmFuc2xhdGUoJ1lvdSBjYW5ub3Qgc2VsZWN0IG1vcmUgdGhhbiB7e251bWJlcn19IGRBcHBzIGZvciB0aGlzIG5ldHdvcmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDb2xsYXRvcic6XG4gICAgICAgIG1lc3NhZ2UgPSBkZXRlY3RUcmFuc2xhdGUoJ1lvdSBjYW5ub3Qgc2VsZWN0IG1vcmUgdGhhbiB7e251bWJlcn19IGNvbGxhdG9ycyBmb3IgdGhpcyBuZXR3b3JrJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVmFsaWRhdG9yJzpcbiAgICAgICAgbWVzc2FnZSA9IGRldGVjdFRyYW5zbGF0ZSgnWW91IGNhbm5vdCBzZWxlY3QgbW9yZSB0aGFuIHt7bnVtYmVyfX0gdmFsaWRhdG9ycyBmb3IgdGhpcyBuZXR3b3JrJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGxhYmVsKSB7XG4gICAgICBjYXNlICdkQXBwJzpcbiAgICAgICAgbWVzc2FnZSA9IGRldGVjdFRyYW5zbGF0ZSgnWW91IGNhbm5vdCBzZWxlY3QgbW9yZSB0aGFuIHt7bnVtYmVyfX0gZEFwcCBmb3IgdGhpcyBuZXR3b3JrJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ29sbGF0b3InOlxuICAgICAgICBtZXNzYWdlID0gZGV0ZWN0VHJhbnNsYXRlKCdZb3UgY2Fubm90IHNlbGVjdCBtb3JlIHRoYW4ge3tudW1iZXJ9fSBjb2xsYXRvciBmb3IgdGhpcyBuZXR3b3JrJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVmFsaWRhdG9yJzpcbiAgICAgICAgbWVzc2FnZSA9IGRldGVjdFRyYW5zbGF0ZSgnWW91IGNhbm5vdCBzZWxlY3QgbW9yZSB0aGFuIHt7bnVtYmVyfX0gdmFsaWRhdG9yIGZvciB0aGlzIG5ldHdvcmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHQobWVzc2FnZSwgeyByZXBsYWNlOiB7IG51bWJlcjogbWF4IH0gfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RXhpc3RVbnN0YWtlRXJyb3JNZXNzYWdlID0gKGNoYWluOiBzdHJpbmcsIGlzU3Rha2VNb3JlPzogYm9vbGVhbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZ2V0VmFsaWRhdG9yTGFiZWwoY2hhaW4pO1xuXG4gIGlmICghaXNTdGFrZU1vcmUpIHtcbiAgICBzd2l0Y2ggKGxhYmVsKSB7XG4gICAgICBjYXNlICdkQXBwJzpcbiAgICAgICAgcmV0dXJuIHQoJ1lvdSBjYW4gdW5zdGFrZSBmcm9tIGEgZEFwcCBvbmNlJyk7XG4gICAgICBjYXNlICdDb2xsYXRvcic6XG4gICAgICAgIHJldHVybiB0KCdZb3UgY2FuIHVuc3Rha2UgZnJvbSBhIGNvbGxhdG9yIG9uY2UnKTtcbiAgICAgIGNhc2UgJ1ZhbGlkYXRvcic6XG4gICAgICAgIHJldHVybiB0KCdZb3UgY2FuIHVuc3Rha2UgZnJvbSBhIHZhbGlkYXRvciBvbmNlJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAobGFiZWwpIHtcbiAgICAgIGNhc2UgJ2RBcHAnOlxuICAgICAgICByZXR1cm4gdCgnWW91IGNhbm5vdCBzdGFrZSBtb3JlIGZvciBhIGRBcHAgeW91IGFyZSB1bnN0YWtpbmcgZnJvbScpO1xuICAgICAgY2FzZSAnQ29sbGF0b3InOlxuICAgICAgICByZXR1cm4gdCgnWW91IGNhbm5vdCBzdGFrZSBtb3JlIGZvciBhIGNvbGxhdG9yIHlvdSBhcmUgdW5zdGFraW5nIGZyb20nKTtcbiAgICAgIGNhc2UgJ1ZhbGlkYXRvcic6XG4gICAgICAgIHJldHVybiB0KCdZb3UgY2Fubm90IHN0YWtlIG1vcmUgZm9yIGEgdmFsaWRhdG9yIHlvdSBhcmUgdW5zdGFraW5nIGZyb20nKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Vcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9ERUZBVUxUX0NIQUlOUyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdCc7XG5pbXBvcnQgeyBfU3Vic3RyYXRlQ2hhaW5UeXBlIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IFNpbmdsZU1vZGVKc29uLCBUaGVtZU5hbWVzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBBUElfQVVUT19DT05ORUNUX01TID0gMzAwMDtcbmV4cG9ydCBjb25zdCBBUElfQ09OTkVDVF9USU1FT1VUID0gMzAwMDA7XG5leHBvcnQgY29uc3QgQVBJX01BWF9SRVRSWSA9IDI7XG5cbmV4cG9ydCBjb25zdCBfQVBJX09QVElPTlNfQ0hBSU5fR1JPVVAgPSB7XG4gIGFjYWxhOiBbJ2FjYWxhJywgJ2thcnVyYScsICdvcmlnaW50cmFpbCcsICdraW50c3VnaSddLFxuICB0dXJpbmc6IFsndHVyaW5nU3RhZ2luZycsICd0dXJpbmcnXSxcbiAgYXZhaWw6IFsna2F0ZSddXG59O1xuXG5leHBvcnQgY29uc3QgX1BSRURFRklORURfU0lOR0xFX01PREVTOiBSZWNvcmQ8c3RyaW5nLCBTaW5nbGVNb2RlSnNvbj4gPSB7XG4gIHN1YnNwYWNlOiB7XG4gICAgbmV0d29ya0tleXM6IFsnc3Vic3BhY2VfZ2VtaW5pXzJhJywgJ3N1YnNwYWNlX3Rlc3QnLCAnc3Vic3BhY2VfZ2VtaW5pXzNhJ10sXG4gICAgdGhlbWU6IFRoZW1lTmFtZXMuU1VCU1BBQ0UsXG4gICAgYXV0b1RyaWdnZXJEb21haW46ICdzdWJzcGFjZS5uZXR3b3JrJ1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgX1BVUkVfRVZNX0NIQUlOUyA9IFsnYmluYW5jZScsICdiaW5hbmNlX3Rlc3QnLCAnZXRoZXJldW0nLCAnZXRoZXJldW1fZ29lcmxpJywgJ2FzdGFyRXZtJywgJ3NoaWRlbkV2bScsICdzaGlidXlhRXZtJywgJ2NyYWJFdm0nLCAncGFuZ29saW5Fdm0nLCAnY2xvdmVyRXZtJywgJ2JvYmFfcmlua2VieScsICdib2JhJywgJ2JvYmFiYXNlJywgJ2JvYmFiZWFtJywgJ3dhdHJfbmV0d29ya19ldm0nXTtcblxuLy8gR2V0IGJhbGFuY2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBfQkFMQU5DRV9DSEFJTl9HUk9VUCA9IHtcbiAga2ludHN1Z2k6IFsna2ludHN1Z2knLCAnaW50ZXJsYXknLCAna2ludHN1Z2lfdGVzdCcsICdtYW5nYXRheF9wYXJhJ10sXG4gIGdlbnNoaXJvOiBbJ2dlbnNoaXJvX3Rlc3RuZXQnLCAnZ2Vuc2hpcm8nXSxcbiAgZXF1aWxpYnJpdW1fcGFyYWNoYWluOiBbJ2VxdWlsaWJyaXVtX3BhcmFjaGFpbiddLFxuICBiaWZyb3N0OiBbJ2JpZnJvc3QnLCAnYWNhbGEnLCAna2FydXJhJywgJ2FjYWxhX3Rlc3RuZXQnLCAncGlvbmVlcicsICdiaXRjb3VudHJ5JywgJ2JpZnJvc3RfZG90JywgJ2h5ZHJhZHhfbWFpbicsICdwZW5kdWx1bScsICdhbXBsaXR1ZGUnXSxcbiAgc3RhdGVtaW5lOiBbJ3N0YXRlbWluZScsICdhc3RhcicsICdzaGlkZW4nLCAnc3RhdGVtaW50JywgJ21vb25iZWFtJywgJ21vb25iYXNlJywgJ21vb25yaXZlcicsICdjcmFiUGFyYWNoYWluJywgJ2RhcndpbmlhMicsICdwYXJhbGxlbCcsICdjYWxhbWFyaSddLFxuICBrdXNhbWE6IFsna3VzYW1hJywgJ2tpbnRzdWdpJywgJ2tpbnRzdWdpX3Rlc3QnLCAnaW50ZXJsYXknLCAnYWNhbGEnLCAnc3RhdGVtaW50JywgJ2thcnVyYScsICdiaWZyb3N0J10gLy8gcGVyaGFwcyB0aGVyZSBhcmUgc29tZSBydW50aW1lIHVwZGF0ZXNcbn07XG5cbmV4cG9ydCBjb25zdCBfQkFMQU5DRV9UT0tFTl9HUk9VUCA9IHtcbiAgY3JhYjogWydDS1RPTicsICdQS1RPTiddLFxuICBiaXRjb3VudHJ5OiBbJ0JJVCddXG59O1xuXG5leHBvcnQgY29uc3QgX05GVF9DSEFJTl9HUk9VUCA9IHtcbiAgYWNhbGE6IFsnYWNhbGEnXSxcbiAga2FydXJhOiBbJ2thcnVyYSddLCAvLyBUT0RPOiBrYXJ1cmEgYW5kIGFjYWxhIHNob3VsZCBiZSB0aGUgc2FtZVxuICBybXJrOiBbJ2t1c2FtYSddLFxuICBzdGF0ZW1pbmU6IFsnc3RhdGVtaW5lJ10sXG4gIHN0YXRlbWludDogWydzdGF0ZW1pbnQnXSxcbiAgdW5pcXVlX25ldHdvcms6IFsndW5pcXVlX25ldHdvcmsnXSxcbiAgYml0Y291bnRyeTogWydiaXRjb3VudHJ5JywgJ3Bpb25lZXInXSxcbiAgdmFyYTogWyd2YXJhX25ldHdvcmsnXVxufTtcblxuLy8gU3Rha2luZy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBfU1RBS0lOR19DSEFJTl9HUk9VUCA9IHtcbiAgcmVsYXk6IFsncG9sa2Fkb3QnLCAna3VzYW1hJywgJ2FsZXBoJywgJ3BvbGthZGV4JywgJ3Rlcm5vYScsICd0ZXJub2FfYWxwaGFuZXQnLCAnYWxlcGhUZXN0JywgJ3BvbGthZGV4VGVzdCcsICd3ZXN0ZW5kJywgJ2thdGUnLCAnZWRnZXdhcmUnLCAnY3JlZGl0Y29pbicsICd2YXJhX25ldHdvcmsnXSxcbiAgcGFyYTogWydtb29uYmVhbScsICdtb29ucml2ZXInLCAnbW9vbmJhc2UnLCAndHVyaW5nJywgJ3R1cmluZ1N0YWdpbmcnLCAnYmlmcm9zdCcsICdiaWZyb3N0X3Rlc3RuZXQnLCAnY2FsYW1hcmlfdGVzdCcsICdjYWxhbWFyaSddLFxuICBhc3RhcjogWydhc3RhcicsICdzaGlkZW4nLCAnc2hpYnV5YSddLFxuICBhbXBsaXR1ZGU6IFsnYW1wbGl0dWRlJywgJ2FtcGxpdHVkZV90ZXN0JywgJ2tpbHQnLCAna2lsdF9wZXJlZ3JpbmUnLCAncGVuZHVsdW0nXSwgLy8gYW1wbGl0dWRlIGFuZCBraWx0IG9ubHkgc2hhcmUgc29tZSBjb21tb24gbG9naWNcbiAga2lsdDogWydraWx0JywgJ2tpbHRfcGVyZWdyaW5lJ10sXG4gIG5vbWluYXRpb25Qb29sOiBbJ3BvbGthZG90JywgJ2t1c2FtYScsICd3ZXN0ZW5kJywgJ2FsZXBoVGVzdCcsICdhbGVwaCcsICdrYXRlJ10sXG4gIGJpZnJvc3Q6IFsnYmlmcm9zdCcsICdiaWZyb3N0X3Rlc3RuZXQnXSxcbiAgYWxlcGg6IFsnYWxlcGgnLCAnYWxlcGhUZXN0J10sIC8vIEEwIGhhcyBkaXN0aW5jdCB0b2tlbm9taWNzXG4gIHRlcm5vYTogWyd0ZXJub2EnLCAndGVybm9hX2FscGhhbmV0J11cbn07XG5cbmV4cG9ydCBjb25zdCBfU1RBS0lOR19FUkFfTEVOR1RIX01BUDogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgLy8gaW4gaG91cnNcbiAgYWxlcGhUZXN0OiAyNCxcbiAgYWxlcGg6IDI0LFxuICBwb2xrYWRvdDogMjQsXG4gIGt1c2FtYTogNixcbiAgd2VzdGVuZDogNixcbiAgaHlkcmFkeDogMjQsXG4gIGRlZmF1bHQ6IDI0LFxuICBtb29uYmVhbTogNixcbiAgbW9vbnJpdmVyOiAyLFxuICBtb29uYmFzZTogMixcbiAgdHVyaW5nOiAyLFxuICB0dXJpbmdTdGFnaW5nOiAyLFxuICBhc3RhcjogMjQsXG4gIHNoaWRlbjogMjQsXG4gIHNoaWJ1eWE6IDI0LFxuICBiaWZyb3N0X3Rlc3RuZXQ6IDAuNSxcbiAgYmlmcm9zdDogMixcbiAgdGVybm9hOiAyNCxcbiAgY2FsYW1hcmk6IDYsXG4gIGNhbGFtYXJpX3Rlc3Q6IDYsXG4gIGFtcGxpdHVkZTogMixcbiAgYW1wbGl0dWRlX3Rlc3Q6IDIsXG4gIHBlbmR1bHVtOiAyLFxuICBraWx0OiAyLFxuICBraWx0X3BlcmVncmluZTogMixcbiAgZWRnZXdhcmU6IDYsXG4gIGthdGU6IDYsXG4gIGNyZWRpdGNvaW46IDI0LFxuICB2YXJhX25ldHdvcms6IDEyXG59O1xuXG5leHBvcnQgY29uc3QgX1BBUkFDSEFJTl9JTkZMQVRJT05fRElTVFJJQlVUSU9OOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PiA9IHtcbiAgbW9vbmJlYW06IHsgLy8gaHR0cHM6Ly9kb2NzLm1vb25iZWFtLm5ldHdvcmsvbGVhcm4vZmVhdHVyZXMvc3Rha2luZy8jYW5udWFsLWluZmxhdGlvblxuICAgIHJld2FyZDogMC41LFxuICAgIGNvbGxhdG9yQ29tbWlzc2lvbjogMC4yLFxuICAgIGJvbmRSZXNlcnZlOiAwLjNcbiAgfSxcbiAgbW9vbnJpdmVyOiB7XG4gICAgcmV3YXJkOiAwLjUsXG4gICAgY29sbGF0b3JDb21taXNzaW9uOiAwLjIsXG4gICAgYm9uZFJlc2VydmU6IDAuM1xuICB9LFxuICBtb29uYmFzZToge1xuICAgIHJld2FyZDogMC41LFxuICAgIGNvbGxhdG9yQ29tbWlzc2lvbjogMC4yLFxuICAgIGJvbmRSZXNlcnZlOiAwLjNcbiAgfSxcbiAgdHVyaW5nOiB7IC8vIGh0dHBzOi8vZG9jcy5vYWsudGVjaC9kb2NzL2RlbGVnYXRvcnMvXG4gICAgcmV3YXJkOiAwLjVcbiAgfSxcbiAgdHVyaW5nU3RhZ2luZzogeyAvLyBodHRwczovL2RvY3Mub2FrLnRlY2gvZG9jcy9kZWxlZ2F0b3JzL1xuICAgIHJld2FyZDogMC41XG4gIH0sXG4gIGJpZnJvc3Q6IHtcbiAgICByZXdhcmQ6IDBcbiAgfSxcbiAgYmlmcm9zdF90ZXN0bmV0OiB7XG4gICAgcmV3YXJkOiAwXG4gIH0sXG4gIGNhbGFtYXJpX3Rlc3Q6IHtcbiAgICByZXdhcmQ6IDAuOVxuICB9LFxuICBjYWxhbWFyaToge1xuICAgIHJld2FyZDogMC45XG4gIH0sXG4gIGRlZmF1bHQ6IHtcbiAgICByZXdhcmQ6IDBcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBfU3Vic3RyYXRlSW5mbGF0aW9uUGFyYW1zIHtcbiAgYXVjdGlvbkFkanVzdDogbnVtYmVyO1xuICBhdWN0aW9uTWF4OiBudW1iZXI7XG4gIGZhbGxvZmY6IG51bWJlcjtcbiAgbWF4SW5mbGF0aW9uOiBudW1iZXI7XG4gIG1pbkluZmxhdGlvbjogbnVtYmVyO1xuICBzdGFrZVRhcmdldDogbnVtYmVyO1xuICB5ZWFybHlJbmZsYXRpb25JblRva2Vucz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfU3Vic3RyYXRlVW5pZm9ybUVyYVBheW91dEluZmxhdGlvblBhcmFtcyBleHRlbmRzIF9TdWJzdHJhdGVJbmZsYXRpb25QYXJhbXMge1xuICB5ZWFybHlJbmZsYXRpb25JblRva2VuczogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVM6IF9TdWJzdHJhdGVJbmZsYXRpb25QYXJhbXMgPSB7XG4gIGF1Y3Rpb25BZGp1c3Q6IDAsXG4gIGF1Y3Rpb25NYXg6IDAsXG4gIC8vIDUlIGZvciBmYWxsb2ZmLCBhcyBwZXIgdGhlIGRlZmF1bHRzLCBzZWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bhcml0eXRlY2gvcG9sa2Fkb3QvYmxvYi84MTZjYjY0ZWExNjEwMmM2Yzc5ZjZiZTJhOTE3ZDgzMmQ5OGRmNzU3L3J1bnRpbWUva3VzYW1hL3NyYy9saWIucnMjTDUzNFxuICBmYWxsb2ZmOiAwLjA1LFxuICAvLyAxMCUgbWF4LCAwLjI1JSBtaW4sIHNlZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGFyaXR5dGVjaC9wb2xrYWRvdC9ibG9iLzgxNmNiNjRlYTE2MTAyYzZjNzlmNmJlMmE5MTdkODMyZDk4ZGY3NTcvcnVudGltZS9rdXNhbWEvc3JjL2xpYi5ycyNMNTIzXG4gIG1heEluZmxhdGlvbjogMC4xLFxuICBtaW5JbmZsYXRpb246IDAuMDI1LFxuICBzdGFrZVRhcmdldDogMC41XG59O1xuXG5jb25zdCBfQUxFUEhfREVGQVVMVF9VTklGT1JNX0VSQV9QQVlPVVRfUEFSQU1TOiBfU3Vic3RyYXRlVW5pZm9ybUVyYVBheW91dEluZmxhdGlvblBhcmFtcyA9IHtcbiAgLi4uX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMsXG4gIHllYXJseUluZmxhdGlvbkluVG9rZW5zOiAzMDAwMDAwMFxufTtcblxuZXhwb3J0IGNvbnN0IF9LTk9XTl9DSEFJTl9JTkZMQVRJT05fUEFSQU1TOiBSZWNvcmQ8c3RyaW5nLCBfU3Vic3RyYXRlSW5mbGF0aW9uUGFyYW1zPiA9IHtcbiAgYWxlcGg6IF9BTEVQSF9ERUZBVUxUX1VOSUZPUk1fRVJBX1BBWU9VVF9QQVJBTVMsXG4gIGFsZXBoVGVzdDogX0FMRVBIX0RFRkFVTFRfVU5JRk9STV9FUkFfUEFZT1VUX1BBUkFNUyxcbiAgZG9ja19wb3M6IHsgLi4uX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMsIHN0YWtlVGFyZ2V0OiAwLjc1IH0sXG4gIGt1c2FtYTogeyAuLi5fU1VCU1RSQVRFX0RFRkFVTFRfSU5GTEFUSU9OX1BBUkFNUywgYXVjdGlvbkFkanVzdDogKDAuMyAvIDYwKSwgYXVjdGlvbk1heDogNjAsIHN0YWtlVGFyZ2V0OiAwLjc1IH0sXG4gIG5lYXRjb2luOiB7IC4uLl9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TLCBzdGFrZVRhcmdldDogMC43NSB9LFxuICBuZnRfbWFydDogeyAuLi5fU1VCU1RSQVRFX0RFRkFVTFRfSU5GTEFUSU9OX1BBUkFNUywgZmFsbG9mZjogMC4wNCwgc3Rha2VUYXJnZXQ6IDAuNjAgfSxcbiAgcG9sa2Fkb3Q6IHsgLi4uX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMsIHN0YWtlVGFyZ2V0OiAwLjc1IH1cbn07XG5cbi8vIFNlbmQgZnVuZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgX1RSQU5TRkVSX05PVF9TVVBQT1JURURfQ0hBSU5TID0gWydzdWJzcGFjZV9nZW1pbmlfM2EnLCAna3VsdXB1JywgJ2pveXN0cmVhbScsICdlcXVpbGlicml1bV9wYXJhY2hhaW4nLCAnZ2Vuc2hpcm9fdGVzdG5ldCcsICdnZW5zaGlybyddO1xuXG5leHBvcnQgY29uc3QgX1RSQU5TRkVSX0NIQUlOX0dST1VQID0ge1xuICBhY2FsYTogWydrYXJ1cmEnLCAnYWNhbGEnLCAnYWNhbGFfdGVzdG5ldCddLFxuICBraW50c3VnaTogWydraW50c3VnaScsICdraW50c3VnaV90ZXN0JywgJ2ludGVybGF5JywgJ2h5ZHJhZHhfbWFpbicsICdtYW5nYXRheF9wYXJhJ10sXG4gIGdlbnNoaXJvOiBbJ2dlbnNoaXJvX3Rlc3RuZXQnLCAnZ2Vuc2hpcm8nLCAnZXF1aWxpYnJpdW1fcGFyYWNoYWluJ10sXG4gIGNyYWI6IFsnY3JhYicsICdwYW5nb2xpbiddLFxuICBiaXRjb3VudHJ5OiBbJ3Bpb25lZXInLCAnYml0Y291bnRyeScsICdiaWZyb3N0JywgJ2JpZnJvc3RfZG90J10sXG4gIHN0YXRlbWluZTogWydzdGF0ZW1pbnQnLCAnc3RhdGVtaW5lJywgJ2RhcndpbmlhMicsICdhc3RhcicsICdzaGlkZW4nLCAnc2hpYnV5YScsICdwYXJhbGxlbCddLFxuICByaW9jaGFpbjogWydyaW9jaGFpbiddLFxuICBzb3JhX3N1YnN0cmF0ZTogWydzb3JhX3N1YnN0cmF0ZSddLFxuICBhdmFpbDogWydrYXRlJ10sXG4gIHBlbmR1bHVtOiBbJ3BlbmR1bHVtJywgJ2FtcGxpdHVkZScsICdhbXBsaXR1ZGVfdGVzdCddXG59O1xuXG5leHBvcnQgY29uc3QgX0JBTEFOQ0VfUEFSU0lOR19DSEFJTl9HUk9VUCA9IHtcbiAgYm9iYWJlYW06IFsnYm9iYWJlYW0nLCAnYm9iYWJhc2UnXVxufTtcblxuZXhwb3J0IGNvbnN0IF9NQU5UQV9aS19DSEFJTl9HUk9VUCA9IFsnY2FsYW1hcmknXTtcblxuZXhwb3J0IGNvbnN0IF9aS19BU1NFVF9QUkVGSVggPSAnemsnO1xuXG5leHBvcnQgY29uc3QgX0RFRkFVTFRfTUFOVEFfWktfQ0hBSU4gPSAnY2FsYW1hcmknO1xuXG4vLyBYQ00tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IF9YQ01fQ0hBSU5fR1JPVVAgPSB7XG4gIHBvbGthZG90WGNtOiBbJ2FzdGFyJywgJ3NoaWRlbicsICdzdGF0ZW1pbmUnLCAnc3RhdGVtaW50JywgJ2VxdWlsaWJyaXVtX3BhcmFjaGFpbiddLFxuICB4Y21QYWxsZXQ6IFsncG9sa2Fkb3QnLCAna3VzYW1hJ11cbiAgLy8gZGVmYXVsdCBpcyB4VG9rZW5zIHBhbGxldFxufTtcblxuZXhwb3J0IGNvbnN0IF9YQ01fVFlQRSA9IHtcbiAgUlA6IGAke19TdWJzdHJhdGVDaGFpblR5cGUuUkVMQVlDSEFJTn0tJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlBBUkFDSEFJTn1gLCAvLyBETVBcbiAgUFA6IGAke19TdWJzdHJhdGVDaGFpblR5cGUuUEFSQUNIQUlOfS0ke19TdWJzdHJhdGVDaGFpblR5cGUuUEFSQUNIQUlOfWAsIC8vIEhSTVBcbiAgUFI6IGAke19TdWJzdHJhdGVDaGFpblR5cGUuUEFSQUNIQUlOfS0ke19TdWJzdHJhdGVDaGFpblR5cGUuUkVMQVlDSEFJTn1gIC8vIFVNUFxufTtcblxuZXhwb3J0IGNvbnN0IF9ERUZBVUxUX0FDVElWRV9DSEFJTlMgPSBbXG4gIC4uLl9ERUZBVUxUX0NIQUlOUyxcbiAgJ3ZhcmFfbmV0d29yaydcbl07XG5cbmV4cG9ydCBjb25zdCBFVk1fUEFTU19DT05ORUNUX1NUQVRVUyA9IHtcbiAgYWNhbGE6IFsnYWNhbGFfZXZtJywgJ2thcnVyYV9ldm0nXVxufTtcblxuZXhwb3J0IGNvbnN0IEVWTV9SRUZPUk1BVF9ERUNJTUFMUyA9IHtcbiAgYWNhbGE6IFsnYWNhbGFfZXZtJywgJ2thcnVyYV9ldm0nXVxufTtcblxuLy8gVE9ETzogcmV2aWV3XG5jb25zdCBUQVJHRVRfQlJBTkNIID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdrb25pLWRldicgOiAnbWFzdGVyJztcblxuZXhwb3J0IGNvbnN0IF9DSEFJTl9JTkZPX1NSQyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vS29uaXZlcnNlL1N1YldhbGxldC1DaGFpbi8ke1RBUkdFVF9CUkFOQ0h9L3BhY2thZ2VzL2NoYWluLWxpc3Qvc3JjL2RhdGEvQ2hhaW5JbmZvLmpzb25gO1xuZXhwb3J0IGNvbnN0IF9DSEFJTl9BU1NFVF9TUkMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtQ2hhaW4vJHtUQVJHRVRfQlJBTkNIfS9wYWNrYWdlcy9jaGFpbi1saXN0L3NyYy9kYXRhL0NoYWluQXNzZXQuanNvbmA7XG5leHBvcnQgY29uc3QgX0FTU0VUX1JFRl9TUkMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtQ2hhaW4vJHtUQVJHRVRfQlJBTkNIfS9wYWNrYWdlcy9jaGFpbi1saXN0L3NyYy9kYXRhL0Fzc2V0UmVmLmpzb25gO1xuZXhwb3J0IGNvbnN0IF9NVUxUSV9DSEFJTl9BU1NFVF9TUkMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtQ2hhaW4vJHtUQVJHRVRfQlJBTkNIfS9wYWNrYWdlcy9jaGFpbi1saXN0L3NyYy9kYXRhL011bHRpQ2hhaW5Bc3NldC5qc29uYDtcbmV4cG9ydCBjb25zdCBfQ0hBSU5fTE9HT19NQVBfU1JDID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Lb25pdmVyc2UvU3ViV2FsbGV0LUNoYWluLyR7VEFSR0VUX0JSQU5DSH0vcGFja2FnZXMvY2hhaW4tbGlzdC9zcmMvZGF0YS9DaGFpbkxvZ29NYXAuanNvbmA7XG5leHBvcnQgY29uc3QgX0FTU0VUX0xPR09fTUFQX1NSQyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vS29uaXZlcnNlL1N1YldhbGxldC1DaGFpbi8ke1RBUkdFVF9CUkFOQ0h9L3BhY2thZ2VzL2NoYWluLWxpc3Qvc3JjL2RhdGEvQXNzZXRMb2dvTWFwLmpzb25gO1xuIiwiZXhwb3J0IGNvbnN0IENoYWluTG9nb01hcCA9IHtcclxuICAgIFwiZGVmYXVsdFwiOiBcImh0dHBzOi8vZ2Z4dnNzdG9yYWdlLmJsb2IuY29yZS53aW5kb3dzLm5ldC9nZnh2c2NvbnRhaW5lci9haWdlbnQtbG9nby5wbmdcIixcclxuICAgIFwia3VzYW1hXCI6IFwiaHR0cHM6Ly9jaGFpbi1saXN0LWFzc2V0cy5zdWJ3YWxsZXQuYXBwL2Fzc2V0cy9jaGFpbnMva3VzYW1hLnBuZ1wiLFxyXG4gICAgXCJhaWdlbnRcIjogXCJodHRwczovL2dmeHZzc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZ2Z4dnNjb250YWluZXIvYWlnZW50LWxvZ28ucG5nXCJcclxuICB9IiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IE1ldGFkYXRhSXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgX0NoYWluQ29ubmVjdGlvblN0YXR1cyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS90eXBlcyc7XG5cbmltcG9ydCB7IEFwaVByb21pc2UgfSBmcm9tICdAcG9sa2Fkb3QvYXBpJztcblxuZXhwb3J0IGludGVyZmFjZSBfRXZtQ2hhaW5TcGVjIHtcbiAgZXZtQ2hhaW5JZDogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmcsXG4gIHN5bWJvbDogc3RyaW5nLFxuICBkZWNpbWFsczogbnVtYmVyLFxuICBleGlzdGVudGlhbERlcG9zaXQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9TdWJzdHJhdGVDaGFpblNwZWMge1xuICBuYW1lOiBzdHJpbmcsXG4gIGFkZHJlc3NQcmVmaXg6IG51bWJlcixcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZyxcbiAgc3ltYm9sOiBzdHJpbmcsXG4gIGRlY2ltYWxzOiBudW1iZXIsXG4gIGV4aXN0ZW50aWFsRGVwb3NpdDogc3RyaW5nLFxuICBwYXJhSWQ6IG51bWJlciB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfQXBpT3B0aW9ucyB7XG4gIHByb3ZpZGVyTmFtZT86IHN0cmluZyxcbiAgbWV0YWRhdGE/OiBNZXRhZGF0YUl0ZW0sXG4gIG9uVXBkYXRlU3RhdHVzPzogKHN0YXR1czogX0NoYWluQ29ubmVjdGlvblN0YXR1cykgPT4gdm9pZCxcbiAgZXh0ZXJuYWxBcGlQcm9taXNlPzogQXBpUHJvbWlzZVxufVxuXG5leHBvcnQgZW51bSBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUiB7XG4gIElOVkFMSURfSU5GT19UWVBFID0gJ2ludmFsaWRJbmZvVHlwZScsXG4gIElOSkVDVF9TQ1JJUFRfREVURUNURUQgPSAnaW5qZWN0U2NyaXB0RGV0ZWN0ZWQnLFxuICBFWElTVEVEX0NIQUlOID0gJ2V4aXN0ZWRDaGFpbicsXG4gIEVYSVNURURfUFJPVklERVIgPSAnZXhpc3RlZFByb3ZpZGVyJyxcbiAgSU5WQUxJRF9QUk9WSURFUiA9ICdpbnZhbGlkUHJvdmlkZXInLFxuICBOT05FID0gJ25vbmUnLFxuICBDT05ORUNUSU9OX0ZBSUxVUkUgPSAnY29ubmVjdGlvbkZhaWx1cmUnLFxuICBQUk9WSURFUl9OT1RfU0FNRV9DSEFJTiA9ICdwcm92aWRlck5vdFNhbWVDaGFpbidcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuLyogZXNsaW50IEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1pbnRlcmZhY2U6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgX0Fzc2V0UmVmLCBfQXNzZXRUeXBlLCBfQ2hhaW5Bc3NldCwgX0NoYWluSW5mbywgX0Nyb3dkbG9hbkZ1bmQgfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgX0NIQUlOX1ZBTElEQVRJT05fRVJST1IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvaGFuZGxlci90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5pbXBvcnQgeyBBcGlQcm9taXNlIH0gZnJvbSAnQHBvbGthZG90L2FwaSc7XG5pbXBvcnQgeyBTdWJtaXR0YWJsZUV4dHJpbnNpY0Z1bmN0aW9uIH0gZnJvbSAnQHBvbGthZG90L2FwaS9wcm9taXNlL3R5cGVzJztcbmltcG9ydCB7IENoYWluUHJvcGVydGllcywgQ2hhaW5UeXBlIH0gZnJvbSAnQHBvbGthZG90L3R5cGVzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIF9EYXRhTWFwIHtcbiAgY2hhaW5JbmZvTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5JbmZvPixcbiAgY2hhaW5TdGF0ZU1hcDogUmVjb3JkPHN0cmluZywgX0NoYWluU3RhdGU+LFxuICBhc3NldFJlZ2lzdHJ5OiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5Bc3NldD4sXG4gIGFzc2V0UmVmTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQXNzZXRSZWY+XG59XG5cbmV4cG9ydCBlbnVtIF9DaGFpbkNvbm5lY3Rpb25TdGF0dXMge1xuICBDT05ORUNURUQgPSAnQ09OTkVDVEVEJyxcbiAgRElTQ09OTkVDVEVEID0gJ0RJU0NPTk5FQ1RFRCcsXG4gIFVOU1RBQkxFID0gJ1VOU1RBQkxFJyxcbiAgQ09OTkVDVElORyA9ICdDT05ORUNUSU5HJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfQ2hhaW5TdGF0ZSB7XG4gIHNsdWc6IHN0cmluZyxcbiAgYWN0aXZlOiBib29sZWFuLFxuICBjdXJyZW50UHJvdmlkZXI6IHN0cmluZyxcbiAgY29ubmVjdGlvblN0YXR1czogX0NoYWluQ29ubmVjdGlvblN0YXR1c1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9TdWJzdHJhdGVEZWZhdWx0Rm9ybWF0QmFsYW5jZSB7XG4gIGRlY2ltYWxzPzogbnVtYmVyW10gfCBudW1iZXI7XG4gIHVuaXQ/OiBzdHJpbmdbXSB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfQ2hhaW5CYXNlQXBpIHtcbiAgY2hhaW5TbHVnOiBzdHJpbmc7XG4gIGFwaVVybDogc3RyaW5nO1xuICBwcm92aWRlck5hbWU/OiBzdHJpbmc7XG5cbiAgYXBpRXJyb3I/OiBzdHJpbmc7XG4gIGFwaVJldHJ5PzogbnVtYmVyO1xuICBpc0FwaVJlYWR5OiBib29sZWFuO1xuICBpc0FwaUNvbm5lY3RlZFN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcbiAgaXNBcGlSZWFkeU9uY2U6IGJvb2xlYW47XG4gIGlzQXBpQ29ubmVjdGVkOiBib29sZWFuOyAvLyBtaWdodCBiZSByZWR1bmRhbnRcbiAgY29ubmVjdGlvblN0YXR1czogX0NoYWluQ29ubmVjdGlvblN0YXR1czsgLy8gbWlnaHQgYmUgcmVkdW5kYW50XG4gIHVwZGF0ZUFwaVVybDogKGFwaVVybDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBkaXNjb25uZWN0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICByZWNvdmVyQ29ubmVjdDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgZGVzdHJveTogKCkgPT4gUHJvbWlzZTx2b2lkPjtcblxuICBpc1JlYWR5OiBQcm9taXNlPF9DaGFpbkJhc2VBcGk+OyAvLyB0byBiZSBvdmVyd3JpdHRlbiBieSBjaGlsZCBpbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfU3Vic3RyYXRlQ2hhaW5NZXRhZGF0YSB7XG4gIHByb3BlcnRpZXM6IENoYWluUHJvcGVydGllcztcbiAgc3lzdGVtQ2hhaW46IHN0cmluZztcbiAgc3lzdGVtQ2hhaW5UeXBlOiBDaGFpblR5cGU7XG4gIHN5c3RlbU5hbWU6IHN0cmluZztcbiAgc3lzdGVtVmVyc2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9TdWJzdHJhdGVBcGlTdGF0ZSB7XG4gIGFwaURlZmF1bHRUeD86IFN1Ym1pdHRhYmxlRXh0cmluc2ljRnVuY3Rpb247XG4gIGFwaURlZmF1bHRUeFN1ZG8/OiBTdWJtaXR0YWJsZUV4dHJpbnNpY0Z1bmN0aW9uO1xuICBkZWZhdWx0Rm9ybWF0QmFsYW5jZT86IF9TdWJzdHJhdGVEZWZhdWx0Rm9ybWF0QmFsYW5jZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfU3Vic3RyYXRlQXBpIGV4dGVuZHMgX1N1YnN0cmF0ZUFwaVN0YXRlLCBfQ2hhaW5CYXNlQXBpIHtcbiAgYXBpOiBBcGlQcm9taXNlO1xuICBpc1JlYWR5OiBQcm9taXNlPF9TdWJzdHJhdGVBcGk+O1xuXG4gIHNwZWNOYW1lOiBzdHJpbmc7XG4gIHNwZWNWZXJzaW9uOiBzdHJpbmc7XG4gIHN5c3RlbUNoYWluOiBzdHJpbmc7XG4gIHN5c3RlbU5hbWU6IHN0cmluZztcbiAgc3lzdGVtVmVyc2lvbjogc3RyaW5nO1xuICByZWdpc3RyeTogUmVnaXN0cnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX0V2bUFwaSBleHRlbmRzIF9DaGFpbkJhc2VBcGkge1xuICBhcGk6IFdlYjM7XG5cbiAgaXNSZWFkeTogUHJvbWlzZTxfRXZtQXBpPjtcbn1cblxuZXhwb3J0IHR5cGUgX05ldHdvcmtVcHNlcnRQYXJhbXMgPSB7XG4gIG1vZGU6ICd1cGRhdGUnIHwgJ2luc2VydCcsXG4gIGNoYWluRWRpdEluZm86IHtcbiAgICBjaGFpblR5cGU/OiBzdHJpbmcsXG4gICAgY3VycmVudFByb3ZpZGVyOiBzdHJpbmcsXG4gICAgbmFtZT86IHN0cmluZyxcbiAgICBwcm92aWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgc2x1Zzogc3RyaW5nLFxuICAgIHN5bWJvbD86IHN0cmluZyxcbiAgICBibG9ja0V4cGxvcmVyPzogc3RyaW5nLFxuICAgIGNyb3dkbG9hblVybD86IHN0cmluZyxcbiAgICBwcmljZUlkPzogc3RyaW5nXG4gIH0sXG4gIGNoYWluU3BlYz86IHtcbiAgICAvLyBTdWJzdHJhdGVcbiAgICBnZW5lc2lzSGFzaDogc3RyaW5nLFxuICAgIHBhcmFJZDogbnVtYmVyIHwgbnVsbCxcbiAgICBhZGRyZXNzUHJlZml4OiBudW1iZXIsXG4gICAgY3Jvd2Rsb2FuRnVuZHM/OiBfQ3Jvd2Rsb2FuRnVuZFtdIHwgbnVsbCxcbiAgICBjcm93ZGxvYW5QYXJhSWQ/OiBudW1iZXIgfCBudWxsLFxuXG4gICAgLy8gRVZNXG4gICAgZXZtQ2hhaW5JZDogbnVtYmVyIHwgbnVsbCxcblxuICAgIC8vIENvbW1vblxuICAgIGV4aXN0ZW50aWFsRGVwb3NpdDogc3RyaW5nLFxuICAgIGRlY2ltYWxzOiBudW1iZXJcbiAgfSxcbiAgdW5jb25maXJtZWQ/OiBib29sZWFuO1xuICBwcm92aWRlckVycm9yPzogX0NIQUlOX1ZBTElEQVRJT05fRVJST1I7XG59XG5cbmV4cG9ydCBjb25zdCBfQ1VTVE9NX1BSRUZJWCA9ICdjdXN0b20tJztcblxuZXhwb3J0IGludGVyZmFjZSBFbmFibGVDaGFpblBhcmFtcyB7XG4gIGNoYWluU2x1Zzogc3RyaW5nLFxuICBlbmFibGVUb2tlbnM/OiBib29sZWFuXG59XG5leHBvcnQgaW50ZXJmYWNlIEVuYWJsZU11bHRpQ2hhaW5QYXJhbXMge1xuICBjaGFpblNsdWdzOiBzdHJpbmdbXSxcbiAgZW5hYmxlVG9rZW5zPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9WYWxpZGF0ZUN1c3RvbUFzc2V0UmVxdWVzdCB7XG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nLFxuICBvcmlnaW5DaGFpbjogc3RyaW5nLFxuICB0eXBlOiBfQXNzZXRUeXBlLFxuICBjb250cmFjdENhbGxlcj86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9TbWFydENvbnRyYWN0VG9rZW5JbmZvIHtcbiAgbmFtZTogc3RyaW5nLFxuICBzeW1ib2w6IHN0cmluZyxcbiAgZGVjaW1hbHM6IG51bWJlcixcbiAgY29udHJhY3RFcnJvcjogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9WYWxpZGF0ZUN1c3RvbUFzc2V0UmVzcG9uc2UgZXh0ZW5kcyBfU21hcnRDb250cmFjdFRva2VuSW5mbyB7XG4gIGlzRXhpc3Q6IGJvb2xlYW4sXG4gIGV4aXN0ZWRTbHVnPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBfRlVOR0lCTEVfQ09OVFJBQ1RfU1RBTkRBUkRTID0gW1xuICBfQXNzZXRUeXBlLkVSQzIwLFxuICBfQXNzZXRUeXBlLlBTUDIyXG5dO1xuXG5leHBvcnQgY29uc3QgX05GVF9DT05UUkFDVF9TVEFOREFSRFMgPSBbXG4gIF9Bc3NldFR5cGUuUFNQMzQsXG4gIF9Bc3NldFR5cGUuRVJDNzIxXG5dO1xuXG5leHBvcnQgY29uc3QgX1NNQVJUX0NPTlRSQUNUX1NUQU5EQVJEUyA9IFsuLi5fRlVOR0lCTEVfQ09OVFJBQ1RfU1RBTkRBUkRTLCAuLi5fTkZUX0NPTlRSQUNUX1NUQU5EQVJEU107XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Vcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9Bc3NldFJlZiwgX0Fzc2V0UmVmUGF0aCwgX0Fzc2V0VHlwZSwgX0NoYWluQXNzZXQsIF9DaGFpbkluZm8sIF9NdWx0aUNoYWluQXNzZXQsIF9TdWJzdHJhdGVDaGFpblR5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgQmFzaWNUb2tlbkluZm8gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IF9NQU5UQV9aS19DSEFJTl9HUk9VUCwgX1pLX0FTU0VUX1BSRUZJWCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgX0NoYWluU3RhdGUsIF9DVVNUT01fUFJFRklYLCBfU01BUlRfQ09OVFJBQ1RfU1RBTkRBUkRTIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3R5cGVzJztcblxuaW1wb3J0IHsgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ3VzdG9tQ2hhaW4gKHNsdWc6IHN0cmluZykge1xuICBpZiAoc2x1Zy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzbHVnLnN0YXJ0c1dpdGgoX0NVU1RPTV9QUkVGSVgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ3VzdG9tQXNzZXQgKHNsdWc6IHN0cmluZykgeyAvLyBtaWdodCBiZSBkaWZmZXJlbnQgZnJvbSBfaXNDdXN0b21OZXR3b3JrXG4gIGlmIChzbHVnLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHNsdWcuc3RhcnRzV2l0aChfQ1VTVE9NX1BSRUZJWCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0Q3VzdG9tQXNzZXRzIChhc3NldFJlZ2lzdHJ5OiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5Bc3NldD4pOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5Bc3NldD4ge1xuICBjb25zdCBmaWx0ZXJlZEFzc2V0TWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5Bc3NldD4gPSB7fTtcblxuICBPYmplY3QudmFsdWVzKGFzc2V0UmVnaXN0cnkpLmZvckVhY2goKGNoYWluQXNzZXQpID0+IHtcbiAgICBpZiAoX2lzQ3VzdG9tQXNzZXQoY2hhaW5Bc3NldC5zbHVnKSkge1xuICAgICAgZmlsdGVyZWRBc3NldE1hcFtjaGFpbkFzc2V0LnNsdWddID0gY2hhaW5Bc3NldDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZEFzc2V0TWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzRXF1YWxDb250cmFjdEFkZHJlc3MgKGFkZHJlc3MxOiBzdHJpbmcsIGFkZHJlc3MyOiBzdHJpbmcpIHtcbiAgaWYgKGlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MxKSAmJiBpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzMikpIHtcbiAgICByZXR1cm4gYWRkcmVzczEudG9Mb3dlckNhc2UoKSA9PT0gYWRkcmVzczIudG9Mb3dlckNhc2UoKTsgLy8gRVZNIGFkZHJlc3MgaXMgY2FzZS1pbnNlbnNpdGl2ZVxuICB9XG5cbiAgcmV0dXJuIGFkZHJlc3MyID09PSBhZGRyZXNzMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0VxdWFsU21hcnRDb250cmFjdEFzc2V0IChhc3NldDE6IF9DaGFpbkFzc2V0LCBhc3NldDI6IF9DaGFpbkFzc2V0KSB7XG4gIGNvbnN0IGNvbnRyYWN0MSA9IGFzc2V0MS5tZXRhZGF0YT8uY29udHJhY3RBZGRyZXNzIGFzIHN0cmluZyB8fCB1bmRlZmluZWQgfHwgbnVsbDtcbiAgY29uc3QgY29udHJhY3QyID0gYXNzZXQyLm1ldGFkYXRhPy5jb250cmFjdEFkZHJlc3MgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCB8fCBudWxsO1xuXG4gIGlmICghY29udHJhY3QxIHx8ICFjb250cmFjdDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoX2lzRXF1YWxDb250cmFjdEFkZHJlc3MoY29udHJhY3QxLCBjb250cmFjdDIpICYmIGFzc2V0MS5hc3NldFR5cGUgPT09IGFzc2V0Mi5hc3NldFR5cGUgJiYgYXNzZXQxLm9yaWdpbkNoYWluID09PSBhc3NldDIub3JpZ2luQ2hhaW4pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1B1cmVFdm1DaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiAoY2hhaW5JbmZvLmV2bUluZm8gIT09IG51bGwgJiYgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8gPT09IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzUHVyZVN1YnN0cmF0ZUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIChjaGFpbkluZm8uZXZtSW5mbyA9PT0gbnVsbCAmJiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbyAhPT0gbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0T3JpZ2luQ2hhaW5PZkFzc2V0IChhc3NldFNsdWc6IHN0cmluZykge1xuICBpZiAoYXNzZXRTbHVnLnN0YXJ0c1dpdGgoX0NVU1RPTV9QUkVGSVgpKSB7XG4gICAgY29uc3QgYXJyID0gYXNzZXRTbHVnLnNwbGl0KCctJykuc2xpY2UoMSk7XG5cbiAgICBpZiAoYXJyWzBdID09PSAnY3VzdG9tJykge1xuICAgICAgY29uc3QgZW5kID0gYXJyLmZpbmRJbmRleCgoc3RyKSA9PiBPYmplY3QudmFsdWVzKF9Bc3NldFR5cGUpLmluY2x1ZGVzKHN0ciBhcyBfQXNzZXRUeXBlKSk7XG5cbiAgICAgIHJldHVybiBhcnIuc2xpY2UoMCwgZW5kKS5qb2luKCctJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyclswXTtcbiAgfVxuXG4gIHJldHVybiBhc3NldFNsdWcuc3BsaXQoJy0nKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRDb250cmFjdEFkZHJlc3NPZlRva2VuICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiB0b2tlbkluZm8ubWV0YWRhdGE/LmNvbnRyYWN0QWRkcmVzcyBhcyBzdHJpbmcgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNUb2tlblRyYW5zZmVycmVkQnlFdm0gKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuICEhdG9rZW5JbmZvLm1ldGFkYXRhPy5jb250cmFjdEFkZHJlc3MgfHwgX2lzTmF0aXZlVG9rZW4odG9rZW5JbmZvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jaGVja1NtYXJ0Q29udHJhY3RTdXBwb3J0QnlDaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCBjb250cmFjdFR5cGU6IF9Bc3NldFR5cGUpIHtcbiAgLy8gRVZNIGNoYWlucyBzdXBwb3J0IHNtYXJ0IGNvbnRyYWN0IGJ5IGRlZmF1bHQgc28ganVzdCBjaGVja2luZyBTdWJzdHJhdGUgY2hhaW5zXG4gIGlmIChjaGFpbkluZm8uc3Vic3RyYXRlSW5mbyA9PT0gbnVsbCB8fCAoY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8gJiYgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QgPT09IG51bGwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5zdXBwb3J0U21hcnRDb250cmFjdCAhPT0gbnVsbCAmJiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5zdXBwb3J0U21hcnRDb250cmFjdC5pbmNsdWRlcyhjb250cmFjdFR5cGUpKTtcbn1cblxuLy8gVXRpbHMgZm9yIGJhbGFuY2UgZnVuY3Rpb25zXG5leHBvcnQgZnVuY3Rpb24gX2dldFRva2VuT25DaGFpbkFzc2V0SWQgKHRva2VuSW5mbzogX0NoYWluQXNzZXQpOiBzdHJpbmcge1xuICByZXR1cm4gdG9rZW5JbmZvLm1ldGFkYXRhPy5hc3NldElkIGFzIHN0cmluZyB8fCAnLTEnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFRva2VuT25DaGFpbkluZm8gKHRva2VuSW5mbzogX0NoYWluQXNzZXQpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgcmV0dXJuIHRva2VuSW5mby5tZXRhZGF0YT8ub25DaGFpbkluZm8gYXMgUmVjb3JkPHN0cmluZywgYW55Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRUb2tlbk1pbkFtb3VudCAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gdG9rZW5JbmZvLm1pbkFtb3VudCB8fCAnMCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDaGFpbkV2bUNvbXBhdGlibGUgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLmV2bUluZm8gIT09IHVuZGVmaW5lZCAmJiBjaGFpbkluZm8uZXZtSW5mbyAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc05hdGl2ZVRva2VuICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiB0b2tlbkluZm8uYXNzZXRUeXBlID09PSBfQXNzZXRUeXBlLk5BVElWRTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc05hdGl2ZVRva2VuQnlTbHVnICh0b2tlblNsdWc6IHN0cmluZykge1xuICByZXR1cm4gdG9rZW5TbHVnLmluY2x1ZGVzKF9Bc3NldFR5cGUuTkFUSVZFIGFzIHN0cmluZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNTbWFydENvbnRyYWN0VG9rZW4gKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIF9TTUFSVF9DT05UUkFDVF9TVEFOREFSRFMuaW5jbHVkZXModG9rZW5JbmZvLmFzc2V0VHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNTdWJzdHJhdGVDaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiAhIWNoYWluSW5mby5zdWJzdHJhdGVJbmZvOyAvLyBmYWxsYmFjayB0byBFdGhlcmV1bVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEV2bUNoYWluSWQgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLmV2bUluZm8/LmV2bUNoYWluSWQgfHwgMTsgLy8gZmFsbGJhY2sgdG8gRXRoZXJldW1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRTdWJzdHJhdGVQYXJhSWQgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LnBhcmFJZCB8fCAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRTdWJzdHJhdGVSZWxheVBhcmVudCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8ucmVsYXlTbHVnIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFN1YnN0cmF0ZUdlbmVzaXNIYXNoIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5nZW5lc2lzSGFzaCB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0NoYWluU3VwcG9ydFN1YnN0cmF0ZVN0YWtpbmcgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LnN1cHBvcnRTdGFraW5nIHx8IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ2hhaW5FbmFibGVkIChjaGFpblN0YXRlOiBfQ2hhaW5TdGF0ZSkge1xuICByZXR1cm4gY2hhaW5TdGF0ZS5hY3RpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0Q2hhaW5TdWJzdHJhdGVBZGRyZXNzUHJlZml4IChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mbz8uc3Vic3RyYXRlSW5mbz8uYWRkcmVzc1ByZWZpeCA/PyAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0NoYWluU3VwcG9ydE5hdGl2ZU5mdCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8uaGFzTmF0aXZlTmZ0IHx8IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ2hhaW5TdXBwb3J0RXZtTmZ0IChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5ldm1JbmZvPy5zdXBwb3J0U21hcnRDb250cmFjdD8uaW5jbHVkZXMoX0Fzc2V0VHlwZS5FUkM3MjEpIHx8IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ2hhaW5TdXBwb3J0V2FzbU5mdCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8uc3VwcG9ydFNtYXJ0Q29udHJhY3Q/LmluY2x1ZGVzKF9Bc3NldFR5cGUuUFNQMzQpIHx8IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldE5mdFR5cGVzU3VwcG9ydGVkQnlDaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKTogX0Fzc2V0VHlwZVtdIHtcbiAgY29uc3QgcmVzdWx0OiBfQXNzZXRUeXBlW10gPSBbXTtcblxuICBpZiAoY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8gJiYgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QpIHtcbiAgICBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5zdXBwb3J0U21hcnRDb250cmFjdC5mb3JFYWNoKChhc3NldFR5cGUpID0+IHtcbiAgICAgIGlmIChbX0Fzc2V0VHlwZS5QU1AzNF0uaW5jbHVkZXMoYXNzZXRUeXBlKSkge1xuICAgICAgICByZXN1bHQucHVzaChhc3NldFR5cGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNoYWluSW5mby5ldm1JbmZvICYmIGNoYWluSW5mby5ldm1JbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0KSB7XG4gICAgY2hhaW5JbmZvLmV2bUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QuZm9yRWFjaCgoYXNzZXRUeXBlKSA9PiB7XG4gICAgICBpZiAoW19Bc3NldFR5cGUuRVJDNzIxXS5pbmNsdWRlcyhhc3NldFR5cGUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFzc2V0VHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFRva2VuVHlwZXNTdXBwb3J0ZWRCeUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pOiBfQXNzZXRUeXBlW10ge1xuICBjb25zdCByZXN1bHQ6IF9Bc3NldFR5cGVbXSA9IFtdO1xuXG4gIGlmIChjaGFpbkluZm8uc3Vic3RyYXRlSW5mbyAmJiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5zdXBwb3J0U21hcnRDb250cmFjdCkge1xuICAgIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0LmZvckVhY2goKGFzc2V0VHlwZSkgPT4ge1xuICAgICAgaWYgKFtfQXNzZXRUeXBlLlBTUDIyXS5pbmNsdWRlcyhhc3NldFR5cGUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFzc2V0VHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY2hhaW5JbmZvLmV2bUluZm8gJiYgY2hhaW5JbmZvLmV2bUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QpIHtcbiAgICBjaGFpbkluZm8uZXZtSW5mby5zdXBwb3J0U21hcnRDb250cmFjdC5mb3JFYWNoKChhc3NldFR5cGUpID0+IHtcbiAgICAgIGlmIChbX0Fzc2V0VHlwZS5FUkMyMF0uaW5jbHVkZXMoYXNzZXRUeXBlKSkge1xuICAgICAgICByZXN1bHQucHVzaChhc3NldFR5cGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvIChjaGFpbkluZm86IF9DaGFpbkluZm8pOiBCYXNpY1Rva2VuSW5mbyB7XG4gIGlmICghY2hhaW5JbmZvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN5bWJvbDogJycsXG4gICAgICBkZWNpbWFsczogLTFcbiAgICB9O1xuICB9XG5cbiAgaWYgKGNoYWluSW5mby5zdWJzdHJhdGVJbmZvICE9PSBudWxsKSB7IC8vIHN1YnN0cmF0ZSBieSBkZWZhdWx0XG4gICAgcmV0dXJuIHtcbiAgICAgIHN5bWJvbDogY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uc3ltYm9sLFxuICAgICAgZGVjaW1hbHM6IGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLmRlY2ltYWxzXG4gICAgfTtcbiAgfSBlbHNlIGlmIChjaGFpbkluZm8uZXZtSW5mbyAhPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBzeW1ib2w6IGNoYWluSW5mby5ldm1JbmZvLnN5bWJvbCxcbiAgICAgIGRlY2ltYWxzOiBjaGFpbkluZm8uZXZtSW5mby5kZWNpbWFsc1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN5bWJvbDogJycsXG4gICAgZGVjaW1hbHM6IC0xXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0Q2hhaW5OYXRpdmVUb2tlblNsdWcgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICBpZiAoX2lzQ3VzdG9tQ2hhaW4oY2hhaW5JbmZvLnNsdWcpKSB7XG4gICAgcmV0dXJuIGAke19DVVNUT01fUFJFRklYfSR7Y2hhaW5JbmZvLnNsdWd9LSR7X0Fzc2V0VHlwZS5OQVRJVkV9LSR7X2dldENoYWluTmF0aXZlVG9rZW5CYXNpY0luZm8oY2hhaW5JbmZvKS5zeW1ib2x9YDtcbiAgfVxuXG4gIHJldHVybiBgJHtjaGFpbkluZm8uc2x1Z30tJHtfQXNzZXRUeXBlLk5BVElWRX0tJHtfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyhjaGFpbkluZm8pLnN5bWJvbH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzTG9jYWxUb2tlbiAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gdG9rZW5JbmZvLmFzc2V0VHlwZSA9PT0gX0Fzc2V0VHlwZS5MT0NBTDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1Rva2VuRXZtU21hcnRDb250cmFjdCAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gW19Bc3NldFR5cGUuRVJDNzIxLCBfQXNzZXRUeXBlLkVSQzIwXS5pbmNsdWRlcyh0b2tlbkluZm8uYXNzZXRUeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1Rva2VuV2FzbVNtYXJ0Q29udHJhY3QgKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIFtfQXNzZXRUeXBlLlBTUDIyLCBfQXNzZXRUeXBlLlBTUDM0XS5pbmNsdWRlcyh0b2tlbkluZm8uYXNzZXRUeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0Fzc2V0U21hcnRDb250cmFjdE5mdCAoYXNzZXRJbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gW19Bc3NldFR5cGUuUFNQMzQsIF9Bc3NldFR5cGUuRVJDNzIxXS5pbmNsdWRlcyhhc3NldEluZm8uYXNzZXRUeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wYXJzZUFzc2V0UmVmS2V5IChvcmlnaW5Ub2tlblNsdWc6IHN0cmluZywgZGVzdGluYXRpb25Ub2tlblNsdWc6IHN0cmluZykge1xuICByZXR1cm4gYCR7b3JpZ2luVG9rZW5TbHVnfV9fXyR7ZGVzdGluYXRpb25Ub2tlblNsdWd9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1hjbVBhdGhTdXBwb3J0ZWQgKG9yaWdpblRva2VuU2x1Zzogc3RyaW5nLCBkZXN0aW5hdGlvblRva2VuU2x1Zzogc3RyaW5nLCBhc3NldFJlZk1hcDogUmVjb3JkPHN0cmluZywgX0Fzc2V0UmVmPikge1xuICBjb25zdCBhc3NldFJlZiA9IGFzc2V0UmVmTWFwW19wYXJzZUFzc2V0UmVmS2V5KG9yaWdpblRva2VuU2x1ZywgZGVzdGluYXRpb25Ub2tlblNsdWcpXTtcblxuICBpZiAoIWFzc2V0UmVmKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChhc3NldFJlZi5wYXRoID09PSBfQXNzZXRSZWZQYXRoLlhDTSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0WGNtQXNzZXRUeXBlICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiB0b2tlbkluZm8ubWV0YWRhdGE/LmFzc2V0VHlwZSBhcyBzdHJpbmcgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0WGNtQXNzZXRJZCAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gdG9rZW5JbmZvLm1ldGFkYXRhPy5hc3NldElkIGFzIHN0cmluZyB8fCAnLTEnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFhjbUFzc2V0TXVsdGlsb2NhdGlvbiAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gdG9rZW5JbmZvLm1ldGFkYXRhPy5tdWx0aWxvY2F0aW9uIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0WGNtVHJhbnNmZXJUeXBlIChvcmlnaW5DaGFpbkluZm86IF9DaGFpbkluZm8sIGRlc3RpbmF0aW9uQ2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBgJHtvcmlnaW5DaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8uY2hhaW5UeXBlIHx8ICcnfS0ke2Rlc3RpbmF0aW9uQ2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LmNoYWluVHlwZSB8fCAnJ31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzU3Vic3RyYXRlUmVsYXlDaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8uY2hhaW5UeXBlID09PSBfU3Vic3RyYXRlQ2hhaW5UeXBlLlJFTEFZQ0hBSU47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNTdWJzdHJhdGVQYXJhQ2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8gIT09IG51bGwgJiYgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8ucGFyYUlkICE9PSBudWxsICYmIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5jaGFpblR5cGUgPT09IF9TdWJzdHJhdGVDaGFpblR5cGUuUEFSQUNIQUlOO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEV2bUFiaUV4cGxvcmVyIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5ldm1JbmZvPy5hYmlFeHBsb3JlciB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0Fzc2V0VmFsdWFibGUgKGFzc2V0SW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIGFzc2V0SW5mby5oYXNWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRNdWx0aUNoYWluQXNzZXQgKGFzc2V0SW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIGFzc2V0SW5mbz8ubXVsdGlDaGFpbkFzc2V0IHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFzc2V0UHJpY2VJZCAoYXNzZXRJbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gYXNzZXRJbmZvPy5wcmljZUlkIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldE11bHRpQ2hhaW5Bc3NldFByaWNlSWQgKG11bHRpQ2hhaW5Bc3NldDogX011bHRpQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gbXVsdGlDaGFpbkFzc2V0Py5wcmljZUlkIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFzc2V0U3ltYm9sIChhc3NldEluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBhc3NldEluZm8/LnN5bWJvbCB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRNdWx0aUNoYWluQXNzZXRTeW1ib2wgKG11bHRpQ2hhaW5Bc3NldDogX011bHRpQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gbXVsdGlDaGFpbkFzc2V0LnN5bWJvbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBc3NldE9yaWdpbkNoYWluIChhc3NldEluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBhc3NldEluZm8ub3JpZ2luQ2hhaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0Q2hhaW5OYW1lIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5uYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFzc2V0RGVjaW1hbHMgKGFzc2V0SW5mbzogX0NoYWluQXNzZXQpOiBudW1iZXIge1xuICByZXR1cm4gYXNzZXRJbmZvLmRlY2ltYWxzIHx8IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QmxvY2tFeHBsb3JlckZyb21DaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgbGV0IGJsb2NrRXhwbG9yZXI7XG5cbiAgaWYgKCFjaGFpbkluZm8pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoX2lzUHVyZUV2bUNoYWluKGNoYWluSW5mbykpIHtcbiAgICBibG9ja0V4cGxvcmVyID0gY2hhaW5JbmZvPy5ldm1JbmZvPy5ibG9ja0V4cGxvcmVyO1xuICB9IGVsc2Uge1xuICAgIGJsb2NrRXhwbG9yZXIgPSBjaGFpbkluZm8/LnN1YnN0cmF0ZUluZm8/LmJsb2NrRXhwbG9yZXI7XG4gIH1cblxuICBpZiAoIWJsb2NrRXhwbG9yZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGJsb2NrRXhwbG9yZXIgIT09ICcnICYmICFibG9ja0V4cGxvcmVyLmVuZHNXaXRoKCcvJykpIHtcbiAgICByZXR1cm4gYCR7YmxvY2tFeHBsb3Jlcn0vYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmxvY2tFeHBsb3JlcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX3BhcnNlTWV0YWRhdGFGb3JTbWFydENvbnRyYWN0QXNzZXQgKGNvbnRyYWN0QWRkcmVzczogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gIHJldHVybiB7XG4gICAgY29udHJhY3RBZGRyZXNzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDaGFpblRlc3ROZXQgKGNoYWluSW5mbzogX0NoYWluSW5mbyk6IGJvb2xlYW4ge1xuICByZXR1cm4gY2hhaW5JbmZvLmlzVGVzdG5ldCB8fCBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0Fzc2V0RnVuZ2libGVUb2tlbiAoY2hhaW5Bc3NldDogX0NoYWluQXNzZXQpOiBib29sZWFuIHtcbiAgcmV0dXJuICFbX0Fzc2V0VHlwZS5FUkM3MjEsIF9Bc3NldFR5cGUuUFNQMzQsIF9Bc3NldFR5cGUuVU5LTk9XTl0uaW5jbHVkZXMoY2hhaW5Bc3NldC5hc3NldFR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldENyb3dkbG9hblVybEZyb21DaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNoYWluSW5mbz8uc3Vic3RyYXRlSW5mbz8uY3Jvd2Rsb2FuVXJsIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ3VzdG9tUHJvdmlkZXIgKHByb3ZpZGVyS2V5OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByb3ZpZGVyS2V5LnN0YXJ0c1dpdGgoX0NVU1RPTV9QUkVGSVgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dlbmVyYXRlQ3VzdG9tUHJvdmlkZXJLZXkgKGluZGV4OiBudW1iZXIpIHtcbiAgcmV0dXJuIGAke19DVVNUT01fUFJFRklYfXByb3ZpZGVyLSR7aW5kZXh9YDtcbn1cblxuZXhwb3J0IGNvbnN0IGZpbmRDaGFpbkluZm9CeUhhbGZHZW5lc2lzSGFzaCA9IChjaGFpbk1hcDogUmVjb3JkPHN0cmluZywgX0NoYWluSW5mbz4sIGhhbGZHZW5lc2lzSGFzaD86IHN0cmluZyk6IF9DaGFpbkluZm8gfCBudWxsID0+IHtcbiAgaWYgKCFoYWxmR2VuZXNpc0hhc2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2hhaW5JbmZvIG9mIE9iamVjdC52YWx1ZXMoY2hhaW5NYXApKSB7XG4gICAgaWYgKF9nZXRTdWJzdHJhdGVHZW5lc2lzSGFzaChjaGFpbkluZm8pPy50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyLCAyICsgMzIpID09PSBoYWxmR2VuZXNpc0hhc2gudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIGNoYWluSW5mbztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kQ2hhaW5JbmZvQnlDaGFpbklkID0gKGNoYWluTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5JbmZvPiwgY2hhaW5JZD86IG51bWJlcik6IF9DaGFpbkluZm8gfCBudWxsID0+IHtcbiAgaWYgKCFjaGFpbklkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3IgKGNvbnN0IGNoYWluSW5mbyBvZiBPYmplY3QudmFsdWVzKGNoYWluTWFwKSkge1xuICAgIGlmIChjaGFpbkluZm8uZXZtSW5mbz8uZXZtQ2hhaW5JZCA9PT0gY2hhaW5JZCkge1xuICAgICAgcmV0dXJuIGNoYWluSW5mbztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNNYW50YVprQXNzZXQgKGNoYWluQXNzZXQ6IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBfTUFOVEFfWktfQ0hBSU5fR1JPVVAuaW5jbHVkZXMoY2hhaW5Bc3NldC5vcmlnaW5DaGFpbikgJiYgY2hhaW5Bc3NldC5zeW1ib2wuc3RhcnRzV2l0aChfWktfQVNTRVRfUFJFRklYKTtcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBCcm93c2VyQ29uZmlybWF0aW9uVHlwZSwgTGFuZ3VhZ2VUeXBlLCBUaGVtZU5hbWVzLCBVaVNldHRpbmdzLCBXYWxsZXRVbmxvY2tUeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBUQVJHRVRfRU5WIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RIRU1FOiBUaGVtZU5hbWVzID0gVGhlbWVOYW1lcy5EQVJLO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEU6IEJyb3dzZXJDb25maXJtYXRpb25UeXBlID0gJ3BvcHVwJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX0FVVE9fTE9DS19USU1FID0gMTU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9VTkxPQ0tfVFlQRTogV2FsbGV0VW5sb2NrVHlwZSA9IFRBUkdFVF9FTlYgPT09ICdleHRlbnNpb24nID8gV2FsbGV0VW5sb2NrVHlwZS5BTFdBWVNfUkVRVUlSRUQgOiBXYWxsZXRVbmxvY2tUeXBlLldIRU5fTkVFREVEO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0hBSU5fUEFUUk9MX0VOQUJMRSA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFOR1VBR0U6IExhbmd1YWdlVHlwZSA9ICdlbic7XG5leHBvcnQgY29uc3QgREVGQVVMVF9TSE9XX1pFUk9fQkFMQU5DRSA9IHRydWU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9TSE9XX0JBTEFOQ0UgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0FMTF9MT0dPID0gJyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9DQU1FUkFfRU5BQkxFID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkc6IFVpU2V0dGluZ3MgPSB7XG4gIGxhbmd1YWdlOiBERUZBVUxUX0xBTkdVQUdFLFxuICBicm93c2VyQ29uZmlybWF0aW9uVHlwZTogREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRSxcbiAgaXNTaG93WmVyb0JhbGFuY2U6IERFRkFVTFRfU0hPV19aRVJPX0JBTEFOQ0UsXG4gIGlzU2hvd0JhbGFuY2U6IERFRkFVTFRfU0hPV19CQUxBTkNFLFxuICBhY2NvdW50QWxsTG9nbzogREVGQVVMVF9BTExfTE9HTyxcbiAgdGhlbWU6IERFRkFVTFRfVEhFTUUsXG4gIHVubG9ja1R5cGU6IERFRkFVTFRfVU5MT0NLX1RZUEUsXG4gIGNhbWVyYTogREVGQVVMVF9DQU1FUkFfRU5BQkxFLFxuICB0aW1lQXV0b0xvY2s6IERFRkFVTFRfQVVUT19MT0NLX1RJTUUsXG4gIGVuYWJsZUNoYWluUGF0cm9sOiBERUZBVUxUX0NIQUlOX1BBVFJPTF9FTkFCTEUsXG4gIHdhbGxldFJlZmVyZW5jZTogJydcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0NoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBFeHRyaW5zaWNEYXRhVHlwZU1hcCwgRXh0cmluc2ljVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgX2dldEJsb2NrRXhwbG9yZXJGcm9tQ2hhaW4sIF9pc1B1cmVFdm1DaGFpbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyYW5zYWN0aW9uRGF0YTxUIGV4dGVuZHMgRXh0cmluc2ljVHlwZT4gKGRhdGE6IHVua25vd24pOiBFeHRyaW5zaWNEYXRhVHlwZU1hcFtUXSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuICByZXR1cm4gZGF0YSBhcyBFeHRyaW5zaWNEYXRhVHlwZU1hcFtUXTtcbn1cblxuZnVuY3Rpb24gZ2V0QmxvY2tFeHBsb3JlckFjY291bnRSb3V0ZSAoZXhwbG9yZXJMaW5rOiBzdHJpbmcpIHtcbiAgaWYgKGV4cGxvcmVyTGluay5pbmNsdWRlcygnZXhwbG9yZXIuc3Vic3BhY2UubmV0d29yaycpKSB7XG4gICAgcmV0dXJuICdhY2NvdW50cyc7XG4gIH1cblxuICBpZiAoZXhwbG9yZXJMaW5rLmluY2x1ZGVzKCdkZWVwZXJzY2FuLmlvJykpIHtcbiAgICByZXR1cm4gJ2FjY291bnQnO1xuICB9XG5cbiAgaWYgKGV4cGxvcmVyTGluay5pbmNsdWRlcygnc3Vic2Nhbi5pbycpKSB7XG4gICAgcmV0dXJuICdhY2NvdW50JztcbiAgfVxuXG4gIHJldHVybiAnYWRkcmVzcyc7XG59XG5cbmZ1bmN0aW9uIGdldEJsb2NrRXhwbG9yZXJUeFJvdXRlIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgaWYgKF9pc1B1cmVFdm1DaGFpbihjaGFpbkluZm8pKSB7XG4gICAgcmV0dXJuICd0eCc7XG4gIH1cblxuICBpZiAoWydhdmVudHVzJywgJ2RlZXBlcl9uZXR3b3JrJ10uaW5jbHVkZXMoY2hhaW5JbmZvLnNsdWcpKSB7XG4gICAgcmV0dXJuICd0cmFuc2FjdGlvbic7XG4gIH1cblxuICByZXR1cm4gJ2V4dHJpbnNpYyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHBsb3JlckxpbmsgKGNoYWluSW5mbzogX0NoYWluSW5mbywgdmFsdWU6IHN0cmluZywgdHlwZTogJ2FjY291bnQnIHwgJ3R4Jyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGV4cGxvcmVyTGluayA9IF9nZXRCbG9ja0V4cGxvcmVyRnJvbUNoYWluKGNoYWluSW5mbyk7XG5cbiAgaWYgKGV4cGxvcmVyTGluayAmJiB0eXBlID09PSAnYWNjb3VudCcpIHtcbiAgICBjb25zdCByb3V0ZSA9IGdldEJsb2NrRXhwbG9yZXJBY2NvdW50Um91dGUoZXhwbG9yZXJMaW5rKTtcblxuICAgIHJldHVybiBgJHtleHBsb3Jlckxpbmt9JHtleHBsb3JlckxpbmsuZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nfSR7cm91dGV9LyR7dmFsdWV9YDtcbiAgfVxuXG4gIGlmIChleHBsb3JlckxpbmsgJiYgdmFsdWUuc3RhcnRzV2l0aCgnMHgnKSkge1xuICAgIGNvbnN0IHJvdXRlID0gZ2V0QmxvY2tFeHBsb3JlclR4Um91dGUoY2hhaW5JbmZvKTtcblxuICAgIHJldHVybiAoYCR7ZXhwbG9yZXJMaW5rfSR7ZXhwbG9yZXJMaW5rLmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJ30ke3JvdXRlfS8ke3ZhbHVlfWApO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFSVAxNTVfU0lHTklOR19NRVRIT0RTLCBQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMsIFdhbGxldENvbm5lY3RTaWduaW5nTWV0aG9kIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy93YWxsZXQtY29ubmVjdC1zZXJ2aWNlL3R5cGVzJztcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBTaWduQ2xpZW50VHlwZXMgfSBmcm9tICdAd2FsbGV0Y29ubmVjdC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUX0lEX0VYVEVOU0lPTiA9ICc2ZGEzNGMwYjQ4MTY0ZDI3NjgxOTI0ZGQ5YTQ2ZDZiZSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9JRF9NT0JJTEUgPSAnNmRhMzRjMGI0ODE2NGQyNzY4MTkyNGRkOWE0NmQ2YmUnO1xuZXhwb3J0IGNvbnN0IFJFTEFZX1VSTCA9ICd3c3M6Ly9yZWxheS53YWxsZXRjb25uZWN0LmNvbSc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1dBTExFVF9DT05ORUNUX09QVElPTlM6IFNpZ25DbGllbnRUeXBlcy5PcHRpb25zID0ge1xuICBsb2dnZXI6ICdkZWJ1ZycsXG4gIHByb2plY3RJZDogIWlzTW9iaWxlID8gUFJPSkVDVF9JRF9FWFRFTlNJT04gOiBQUk9KRUNUX0lEX01PQklMRSxcbiAgcmVsYXlVcmw6IFJFTEFZX1VSTCxcbiAgbWV0YWRhdGE6IHtcbiAgICBuYW1lOiAnU3ViV2FsbGV0JyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlYWN0IFdhbGxldCBmb3IgV2FsbGV0Q29ubmVjdCcsXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuc3Vid2FsbGV0LmFwcC8nLFxuICAgIGljb25zOiBbJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Lb25pdmVyc2UvU3ViV2FsbGV0LUV4dGVuc2lvbi9tYXN0ZXIvcGFja2FnZXMvZXh0ZW5zaW9uLWtvbmkvcHVibGljL2ltYWdlcy9pY29uLTEyOC5wbmcnXVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgQUxMX1dBTExFVF9DT05ORUNUX0VWRU5UOiBTaWduQ2xpZW50VHlwZXMuRXZlbnRbXSA9IFsnc2Vzc2lvbl9wcm9wb3NhbCcsICdzZXNzaW9uX3VwZGF0ZScsICdzZXNzaW9uX2V4dGVuZCcsICdzZXNzaW9uX3BpbmcnLCAnc2Vzc2lvbl9kZWxldGUnLCAnc2Vzc2lvbl9leHBpcmUnLCAnc2Vzc2lvbl9yZXF1ZXN0JywgJ3Nlc3Npb25fcmVxdWVzdF9zZW50JywgJ3Nlc3Npb25fZXZlbnQnLCAncHJvcG9zYWxfZXhwaXJlJ107XG5cbmV4cG9ydCBjb25zdCBXQUxMRVRfQ09OTkVDVF9TVVBQT1JURURfTUVUSE9EUzogV2FsbGV0Q29ubmVjdFNpZ25pbmdNZXRob2RbXSA9IFtcbiAgUE9MS0FET1RfU0lHTklOR19NRVRIT0RTLlBPTEtBRE9UX1NJR05fTUVTU0FHRSxcbiAgUE9MS0FET1RfU0lHTklOR19NRVRIT0RTLlBPTEtBRE9UX1NJR05fVFJBTlNBQ1RJT04sXG4gIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NFTkRfVFJBTlNBQ1RJT04sXG4gIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuUEVSU09OQUxfU0lHTixcbiAgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0lHTl9UWVBFRF9EQVRBX1YxLFxuICBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjMsXG4gIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV9WNFxuXTtcblxuZXhwb3J0IGNvbnN0IFdBTExFVF9DT05ORUNUX1JFUVVFU1RfS0VZID0gJ3dhbGxldC1jb25uZWN0JztcblxuZXhwb3J0IGNvbnN0IFdBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UgPSAnZWlwMTU1JztcbmV4cG9ydCBjb25zdCBXQUxMRVRfQ09OTkVDVF9QT0xLQURPVF9OQU1FU1BBQ0UgPSAncG9sa2Fkb3QnO1xuXG5leHBvcnQgY29uc3QgV0FMTEVUX0NPTk5FQ1RfU1VQUE9SVF9OQU1FU1BBQ0VTOiBzdHJpbmdbXSA9IFtXQUxMRVRfQ09OTkVDVF9FSVAxNTVfTkFNRVNQQUNFLCBXQUxMRVRfQ09OTkVDVF9QT0xLQURPVF9OQU1FU1BBQ0VdO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9DaGFpbkluZm8gfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgZmluZENoYWluSW5mb0J5Q2hhaW5JZCwgZmluZENoYWluSW5mb0J5SGFsZkdlbmVzaXNIYXNoIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3V0aWxzJztcbmltcG9ydCB7IFNpZ25DbGllbnRUeXBlcyB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L3R5cGVzJztcbmltcG9ydCB7IFByb3Bvc2FsVHlwZXMgfSBmcm9tICdAd2FsbGV0Y29ubmVjdC90eXBlcy9kaXN0L3R5cGVzL3NpZ24tY2xpZW50L3Byb3Bvc2FsJztcblxuaW1wb3J0IHsgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG5pbXBvcnQgeyBXQUxMRVRfQ09OTkVDVF9FSVAxNTVfTkFNRVNQQUNFLCBXQUxMRVRfQ09OTkVDVF9QT0xLQURPVF9OQU1FU1BBQ0UsIFdBTExFVF9DT05ORUNUX1JFUVVFU1RfS0VZLCBXQUxMRVRfQ09OTkVDVF9TVVBQT1JUX05BTUVTUEFDRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFSVAxNTVfU0lHTklOR19NRVRIT0RTLCBXYWxsZXRDb25uZWN0Tm90U3VwcG9ydFJlcXVlc3QsIFdhbGxldENvbm5lY3RQYXJhbU1hcCwgV2FsbGV0Q29ubmVjdFNlc3Npb25SZXF1ZXN0LCBXYWxsZXRDb25uZWN0U2lnbmluZ01ldGhvZCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0V0NJZCA9IChpZDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIFtXQUxMRVRfQ09OTkVDVF9SRVFVRVNUX0tFWSwgRGF0ZS5ub3coKSwgaWRdLmpvaW4oJy4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0Q29ubmVjdFJlcXVlc3QgPSAocmVxdWVzdDogU2lnbkNsaWVudFR5cGVzLkV2ZW50QXJndW1lbnRzWydzZXNzaW9uX3Byb3Bvc2FsJ10pOiBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3QgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkOiBnZXRXQ0lkKHJlcXVlc3QuaWQpLFxuICAgIGlzSW50ZXJuYWw6IGZhbHNlLFxuICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgdXJsOiByZXF1ZXN0LnBhcmFtcy5wcm9wb3Nlci5tZXRhZGF0YS51cmxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0Tm90U3VwcG9ydFJlcXVlc3QgPSAocmVxdWVzdDogU2lnbkNsaWVudFR5cGVzLkV2ZW50QXJndW1lbnRzWydzZXNzaW9uX3JlcXVlc3QnXSwgdXJsOiBzdHJpbmcpOiBXYWxsZXRDb25uZWN0Tm90U3VwcG9ydFJlcXVlc3QgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkOiBnZXRXQ0lkKHJlcXVlc3QuaWQpLFxuICAgIGlzSW50ZXJuYWw6IGZhbHNlLFxuICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgdXJsOiB1cmxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJzZVJlcXVlc3RQYXJhbXMgPSA8VCBleHRlbmRzIFdhbGxldENvbm5lY3RTaWduaW5nTWV0aG9kPiAocGFyYW1zOiB1bmtub3duKSA9PiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHBhcmFtcyBhcyBXYWxsZXRDb25uZWN0UGFyYW1NYXBbVF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RWlwMTU1TWVzc2FnZUFkZHJlc3MgPSAobWV0aG9kOiBFSVAxNTVfU0lHTklOR19NRVRIT0RTLCBwYXJhbTogdW5rbm93bik6IHN0cmluZyA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBFSVAxNTVfU0lHTklOR19NRVRIT0RTLlBFUlNPTkFMX1NJR046XG4gICAgY2FzZSBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEE6XG4gICAgY2FzZSBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOOlxuICAgIGNhc2UgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0lHTl9UWVBFRF9EQVRBX1YzOlxuICAgIGNhc2UgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0lHTl9UWVBFRF9EQVRBX1Y0OlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNhc2UtZGVjbGFyYXRpb25zXG4gICAgICBjb25zdCBbcDEsIHAyXSA9IHBhcnNlUmVxdWVzdFBhcmFtczxFSVAxNTVfU0lHTklOR19NRVRIT0RTLlBFUlNPTkFMX1NJR04+KHBhcmFtKTtcblxuICAgICAgaWYgKHR5cGVvZiBwMSA9PT0gJ3N0cmluZycgJiYgaXNFdGhlcmV1bUFkZHJlc3MocDEpKSB7XG4gICAgICAgIHJldHVybiBwMTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHAyID09PSAnc3RyaW5nJyAmJiBpc0V0aGVyZXVtQWRkcmVzcyhwMikpIHtcbiAgICAgICAgcmV0dXJuIHAyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzV2FsbGV0Q29ubmVjdFJlcXVlc3QgPSAoaWQ/OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKCFpZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IFtwcmVmaXhdID0gaWQuc3BsaXQoJy4nKTtcblxuICByZXR1cm4gcHJlZml4ID09PSBXQUxMRVRfQ09OTkVDVF9SRVFVRVNUX0tFWTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb3Bvc2FsRXhwaXJlZCA9IChwYXJhbXM6IFByb3Bvc2FsVHlwZXMuU3RydWN0KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHRpbWVOdW0gPSBwYXJhbXMuZXhwaXJ5O1xuICBjb25zdCBleHBpcmVUaW1lID0gbmV3IERhdGUodGltZU51bSA+IDEwICoqIDEyID8gdGltZU51bSA6IHRpbWVOdW0gKiAxMDAwKTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICByZXR1cm4gbm93LmdldFRpbWUoKSA+PSBleHBpcmVUaW1lLmdldFRpbWUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRXYWxsZXRDb25uZWN0TmFtZXNwYWNlID0gKG5hbWVzcGFjZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBXQUxMRVRfQ09OTkVDVF9TVVBQT1JUX05BTUVTUEFDRVMuaW5jbHVkZXMobmFtZXNwYWNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRXYWxsZXRDb25uZWN0Q2hhaW4gPSAoY2hhaW46IHN0cmluZywgY2hhaW5JbmZvTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5JbmZvPik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBbbmFtZXNwYWNlLCBpbmZvXSA9IGNoYWluLnNwbGl0KCc6Jyk7XG5cbiAgaWYgKG5hbWVzcGFjZSA9PT0gV0FMTEVUX0NPTk5FQ1RfUE9MS0FET1RfTkFNRVNQQUNFKSB7XG4gICAgcmV0dXJuICEhZmluZENoYWluSW5mb0J5SGFsZkdlbmVzaXNIYXNoKGNoYWluSW5mb01hcCwgaW5mbyk7XG4gIH0gZWxzZSBpZiAobmFtZXNwYWNlID09PSBXQUxMRVRfQ09OTkVDVF9FSVAxNTVfTkFNRVNQQUNFKSB7XG4gICAgcmV0dXJuICEhZmluZENoYWluSW5mb0J5Q2hhaW5JZChjaGFpbkluZm9NYXAsIHBhcnNlSW50KGluZm8pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgRXZtU2VuZFRyYW5zYWN0aW9uUGFyYW1zIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25SZXF1ZXN0QmFzZSwgUmVzb2x2ZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvdHlwZXMnO1xuaW1wb3J0IHsgRW5naW5lVHlwZXMsIFNpZ25DbGllbnRUeXBlcyB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L3R5cGVzJztcblxuaW1wb3J0IHsgU2lnbmVyUGF5bG9hZEpTT04gfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdhbGxldENvbm5lY3RTZXNzaW9uUmVxdWVzdCBleHRlbmRzIENvbmZpcm1hdGlvblJlcXVlc3RCYXNlIHtcbiAgcmVxdWVzdDogU2lnbkNsaWVudFR5cGVzLkV2ZW50QXJndW1lbnRzWydzZXNzaW9uX3Byb3Bvc2FsJ107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnRSZXF1ZXN0IGV4dGVuZHMgQ29uZmlybWF0aW9uUmVxdWVzdEJhc2Uge1xuICByZXF1ZXN0OiBTaWduQ2xpZW50VHlwZXMuRXZlbnRBcmd1bWVudHNbJ3Nlc3Npb25fcmVxdWVzdCddO1xufVxuXG5leHBvcnQgdHlwZSBSZXN1bHRBcHByb3ZlV2FsbGV0Q29ubmVjdFNlc3Npb24gPSBFbmdpbmVUeXBlcy5BcHByb3ZlUGFyYW1zO1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0V2FsbGV0Q29ubmVjdFNlc3Npb24gZXh0ZW5kcyBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3QsIFJlc29sdmVyPHZvaWQ+IHt9XG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RXYWxsZXRDb25uZWN0Tm90U3VwcG9ydCBleHRlbmRzIFdhbGxldENvbm5lY3ROb3RTdXBwb3J0UmVxdWVzdCwgUmVzb2x2ZXI8dm9pZD4ge31cblxuZXhwb3J0IGVudW0gRUlQMTU1X1NJR05JTkdfTUVUSE9EUyB7XG4gIFBFUlNPTkFMX1NJR04gPSAncGVyc29uYWxfc2lnbicsXG4gIEVUSF9TSUdOID0gJ2V0aF9zaWduJyxcbiAgRVRIX1NJR05fVFJBTlNBQ1RJT04gPSAnZXRoX3NpZ25UcmFuc2FjdGlvbicsXG4gIEVUSF9TSUdOX1RZUEVEX0RBVEEgPSAnZXRoX3NpZ25UeXBlZERhdGEnLFxuICBFVEhfU0lHTl9UWVBFRF9EQVRBX1YxID0gJ2V0aF9zaWduVHlwZWREYXRhX3YxJyxcbiAgRVRIX1NJR05fVFlQRURfREFUQV9WMyA9ICdldGhfc2lnblR5cGVkRGF0YV92MycsXG4gIEVUSF9TSUdOX1RZUEVEX0RBVEFfVjQgPSAnZXRoX3NpZ25UeXBlZERhdGFfdjQnLFxuICBFVEhfU0VORF9SQVdfVFJBTlNBQ1RJT04gPSAnZXRoX3NlbmRSYXdUcmFuc2FjdGlvbicsXG4gIEVUSF9TRU5EX1RSQU5TQUNUSU9OID0gJ2V0aF9zZW5kVHJhbnNhY3Rpb24nXG59XG5cbmV4cG9ydCBlbnVtIFBPTEtBRE9UX1NJR05JTkdfTUVUSE9EUyB7XG4gIFBPTEtBRE9UX1NJR05fVFJBTlNBQ1RJT04gPSAncG9sa2Fkb3Rfc2lnblRyYW5zYWN0aW9uJyxcbiAgUE9MS0FET1RfU0lHTl9NRVNTQUdFID0gJ3BvbGthZG90X3NpZ25NZXNzYWdlJ1xufVxuXG5leHBvcnQgdHlwZSBXYWxsZXRDb25uZWN0U2lnbmluZ01ldGhvZCA9IEVJUDE1NV9TSUdOSU5HX01FVEhPRFMgfCBQT0xLQURPVF9TSUdOSU5HX01FVEhPRFM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0Q29ubmVjdFBvbGthZG90U2lnbk1lc3NhZ2VQYXJhbXMge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWxsZXRDb25uZWN0UG9sa2Fkb3RTaWduVHJhbnNhY3Rpb25QYXJhbXMge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHRyYW5zYWN0aW9uUGF5bG9hZDogU2lnbmVyUGF5bG9hZEpTT047XG59XG5cbmV4cG9ydCB0eXBlIFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZSA9IFtzdHJpbmcsIHN0cmluZ10gLy8gcGF5bG9hZCBhbmQgYWRkcmVzc1xuZXhwb3J0IHR5cGUgV2FsbGV0Q29ubmVjdEVpcDE1NVNlbmRUcmFuc2FjdGlvbiA9IFtFdm1TZW5kVHJhbnNhY3Rpb25QYXJhbXNdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdhbGxldENvbm5lY3RQYXJhbU1hcCB7XG4gIFtQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMuUE9MS0FET1RfU0lHTl9NRVNTQUdFXTogV2FsbGV0Q29ubmVjdFBvbGthZG90U2lnbk1lc3NhZ2VQYXJhbXM7XG4gIFtQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMuUE9MS0FET1RfU0lHTl9UUkFOU0FDVElPTl06IFdhbGxldENvbm5lY3RQb2xrYWRvdFNpZ25UcmFuc2FjdGlvblBhcmFtcztcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuUEVSU09OQUxfU0lHTl06IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05dOiBXYWxsZXRDb25uZWN0RWlwMTU1U2lnbk1lc3NhZ2U7XG4gIFtFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFdOiBXYWxsZXRDb25uZWN0RWlwMTU1U2lnbk1lc3NhZ2U7XG4gIFtFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjNdOiBXYWxsZXRDb25uZWN0RWlwMTU1U2lnbk1lc3NhZ2U7XG4gIFtFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjRdOiBXYWxsZXRDb25uZWN0RWlwMTU1U2lnbk1lc3NhZ2U7XG4gIFtFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TRU5EX1RSQU5TQUNUSU9OXTogV2FsbGV0Q29ubmVjdEVpcDE1NVNlbmRUcmFuc2FjdGlvbjtcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgY29uc3QgdW5pcXVlU3RyaW5nQXJyYXkgPSAoYXJyYXk6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgbWFwW3ZdID0gdjtcbiAgfSk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB0eXBlIHsgS2V5cGFpclR5cGUgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuRGVyaXZlICh0eXBlPzogS2V5cGFpclR5cGUpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhdHlwZSAmJiBbJ2VkMjU1MTknLCAnc3IyNTUxOScsICdlY2RzYScsICdldGhlcmV1bSddLmluY2x1ZGVzKHR5cGUpO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEVudmlyb25tZW50U3VwcG9ydCwgT1NUeXBlLCBSdW50aW1lRW52aXJvbm1lbnQsIFJ1bnRpbWVFbnZpcm9ubWVudEluZm8sIFRhcmdldEVudmlyb25tZW50IH0gZnJvbSAnLi4vYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuXG5mdW5jdGlvbiBkZXRlY3RSdW50aW1lRW52aXJvbm1lbnQgKCk6IFJ1bnRpbWVFbnZpcm9ubWVudEluZm8ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFdlYiBlbnZpcm9ubWVudFxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50LldlYixcbiAgICAgIHZlcnNpb246IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICBob3N0OiB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgIHByb3RvY29sOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2xcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBTZXJ2aWNlIFdvcmtlciBlbnZpcm9ubWVudFxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50LlNlcnZpY2VXb3JrZXIsXG4gICAgICB2ZXJzaW9uOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgaG9zdDogc2VsZi5sb2NhdGlvbi5ob3N0LFxuICAgICAgcHJvdG9jb2w6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudmVyc2lvbnMgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlKSB7XG4gICAgLy8gTm9kZS5qcyBlbnZpcm9ubWVudFxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50Lk5vZGUsXG4gICAgICB2ZXJzaW9uOiBwcm9jZXNzLnZlcnNpb25zLm5vZGVcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjaHJvbWUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjaHJvbWUucnVudGltZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBFeHRlbnNpb24gZW52aXJvbm1lbnQgKENocm9tZSlcbiAgICByZXR1cm4ge1xuICAgICAgZW52aXJvbm1lbnQ6IFJ1bnRpbWVFbnZpcm9ubWVudC5FeHRlbnNpb25DaHJvbWUsXG4gICAgICB2ZXJzaW9uOiBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXG4gICAgICBob3N0OiB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgIHByb3RvY29sOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2xcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBicm93c2VyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYnJvd3Nlci5ydW50aW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEV4dGVuc2lvbiBlbnZpcm9ubWVudCAoRmlyZWZveClcbiAgICByZXR1cm4ge1xuICAgICAgZW52aXJvbm1lbnQ6IFJ1bnRpbWVFbnZpcm9ubWVudC5FeHRlbnNpb25GaXJlZm94LFxuICAgICAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcbiAgICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgcHJvdG9jb2w6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbFxuICAgIH07XG4gICAgLy8gQHRzLWlnbm9yZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBXZWIgV29ya2VyIGVudmlyb25tZW50XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQuV2ViV29ya2VyLFxuICAgICAgdmVyc2lvbjogJydcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIFVua25vd24gZW52aXJvbm1lbnRcbiAgICByZXR1cm4ge1xuICAgICAgZW52aXJvbm1lbnQ6IFJ1bnRpbWVFbnZpcm9ubWVudC5Vbmtub3duLFxuICAgICAgdmVyc2lvbjogJydcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSdW50aW1lSW5mbzogUnVudGltZUVudmlyb25tZW50SW5mbyA9IGRldGVjdFJ1bnRpbWVFbnZpcm9ubWVudCgpO1xuXG5leHBvcnQgY29uc3QgZ2V0T1MgPSAoKTogT1NUeXBlID0+IHtcbiAgY29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyxAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgY29uc3QgcGxhdGZvcm06IHN0cmluZyA9IHdpbmRvdy5uYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/LnBsYXRmb3JtIHx8IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG4gIGNvbnN0IG1hY29zUGxhdGZvcm1zID0gWydNYWNpbnRvc2gnLCAnTWFjSW50ZWwnLCAnTWFjUFBDJywgJ01hYzY4SycsICdtYWNPUyddO1xuICBjb25zdCB3aW5kb3dzUGxhdGZvcm1zID0gWydXaW4zMicsICdXaW42NCcsICdXaW5kb3dzJywgJ1dpbkNFJ107XG4gIGNvbnN0IGlvc1BsYXRmb3JtcyA9IFsnaVBob25lJywgJ2lQYWQnLCAnaVBvZCddO1xuICBsZXQgb3M6IE9TVHlwZSA9ICdVbmtub3duJztcblxuICBpZiAobWFjb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgb3MgPSAnTWFjIE9TJztcbiAgfSBlbHNlIGlmIChpb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgb3MgPSAnaU9TJztcbiAgfSBlbHNlIGlmICh3aW5kb3dzUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xuICAgIG9zID0gJ1dpbmRvd3MnO1xuICB9IGVsc2UgaWYgKC9BbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICBvcyA9ICdBbmRyb2lkJztcbiAgfSBlbHNlIGlmICgvTGludXgvLnRlc3QocGxhdGZvcm0pKSB7XG4gICAgb3MgPSAnTGludXgnO1xuICB9XG5cbiAgcmV0dXJuIG9zO1xufTtcblxuZXhwb3J0IGNvbnN0IFRBUkdFVF9FTlYgPSAocHJvY2Vzcy5lbnYuVEFSR0VUX0VOViB8fCAnZXh0ZW5zaW9uJykgYXMgVGFyZ2V0RW52aXJvbm1lbnQ7XG5cbmV4cG9ydCBjb25zdCBNT0RVTEVfU1VQUE9SVDogRW52aXJvbm1lbnRTdXBwb3J0ID0ge1xuICBNQU5UQV9aSzogVEFSR0VUX0VOViA9PT0gJ2V4dGVuc2lvbidcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Vcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCBCaWdOIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgQk5FdGhlciBmcm9tICdibi5qcyc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgU2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tICd3ZWIzLWNvcmUnO1xuXG5pbXBvcnQgeyBoZXhTdHJpcFByZWZpeCwgbnVtYmVyVG9IZXggfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5cbmNvbnN0IGhleFRvTnVtYmVyU3RyaW5nID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHRlbXAgPSBwYXJzZUludChzLCAxNik7XG5cbiAgaWYgKGlzTmFOKHRlbXApKSB7XG4gICAgcmV0dXJuICcwJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGVtcC50b1N0cmluZygpO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb24ge1xuICByZWFkb25seSBub25jZTogc3RyaW5nO1xuICByZWFkb25seSBnYXNQcmljZTogc3RyaW5nO1xuICByZWFkb25seSBnYXM6IHN0cmluZztcbiAgcmVhZG9ubHkgdG86IHN0cmluZztcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbiAgcmVhZG9ubHkgZGF0YTogc3RyaW5nO1xuICByZWFkb25seSBldGhlcmV1bUNoYWluSWQ6IHN0cmluZztcbiAgcmVhZG9ubHkgaXNTYWZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yIChub25jZTogc3RyaW5nLFxuICAgIGdhc1ByaWNlOiBzdHJpbmcsXG4gICAgZ2FzOiBzdHJpbmcsXG4gICAgdG86IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIGRhdGE6IHN0cmluZyxcbiAgICBldGhlcmV1bUNoYWluSWQ6IHN0cmluZykge1xuICAgIHRoaXMubm9uY2UgPSBoZXhUb051bWJlclN0cmluZyhub25jZSk7XG4gICAgdGhpcy5nYXNQcmljZSA9IGhleFRvTnVtYmVyU3RyaW5nKGdhc1ByaWNlKTtcbiAgICB0aGlzLmdhcyA9IGhleFRvTnVtYmVyU3RyaW5nKGdhcyk7XG4gICAgdGhpcy50byA9IHRvO1xuICAgIHRoaXMudmFsdWUgPSBoZXhUb051bWJlclN0cmluZyh2YWx1ZSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCAnJztcbiAgICB0aGlzLmV0aGVyZXVtQ2hhaW5JZCA9IHBhcnNlSW50KGV0aGVyZXVtQ2hhaW5JZCwgMTYpLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5pc1NhZmUgPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbnlOdW1iZXJUb0JOID0gKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgQk5FdGhlcik6IEJpZ04gPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG5ldyBCaWdOKHZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBCaWdOKDApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQmlnTih2YWx1ZS50b051bWJlcigpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zYWN0aW9uRnJvbVJMUCA9IChybHA6IHN0cmluZyk6IFRyYW5zYWN0aW9uIHwgbnVsbCA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBldGhlcnMuVHJhbnNhY3Rpb24uZnJvbShybHApO1xuICAgIGNvbnN0IG5vbmNlID0gdHJhbnNhY3Rpb24ubm9uY2UudG9TdHJpbmcoMTYpO1xuICAgIGNvbnN0IGdhc1ByaWNlID0gdHJhbnNhY3Rpb24uZ2FzUHJpY2U/LnRvU3RyaW5nKDE2KSB8fCAnJztcbiAgICBjb25zdCBnYXMgPSB0cmFuc2FjdGlvbi5nYXNMaW1pdC50b1N0cmluZygxNik7XG4gICAgY29uc3QgdG8gPSB0cmFuc2FjdGlvbi50byB8fCAnJztcbiAgICBjb25zdCB2YWx1ZSA9IHRyYW5zYWN0aW9uLnZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgICBjb25zdCBkYXRhID0gdHJhbnNhY3Rpb24uZGF0YTtcbiAgICBjb25zdCBldGhlcmV1bUNoYWluSWQgPSB0cmFuc2FjdGlvbi5jaGFpbklkLnRvU3RyaW5nKDE2KTtcblxuICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24obm9uY2UsXG4gICAgICBnYXNQcmljZSxcbiAgICAgIGdhcyxcbiAgICAgIHRvLFxuICAgICAgdmFsdWUsXG4gICAgICBkYXRhLFxuICAgICAgZXRoZXJldW1DaGFpbklkKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKChlIGFzIEVycm9yKS5tZXNzYWdlKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbmF0dXJlVG9IZXggPSAoc2lnOiBTaWduZWRUcmFuc2FjdGlvbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHYgPSBwYXJzZUludChzaWcudik7XG4gIGNvbnN0IHIgPSBoZXhTdHJpcFByZWZpeChzaWcucik7XG4gIGNvbnN0IHMgPSBoZXhTdHJpcFByZWZpeChzaWcucyk7XG4gIGNvbnN0IGhleFIgPSByLmxlbmd0aCAlIDIgPT09IDEgPyBgMCR7cn1gIDogcjtcbiAgY29uc3QgaGV4UyA9IHMubGVuZ3RoICUgMiA9PT0gMSA/IGAwJHtzfWAgOiBzO1xuICBjb25zdCBoZXhWID0gaGV4U3RyaXBQcmVmaXgobnVtYmVyVG9IZXgodikpO1xuXG4gIHJldHVybiBoZXhSICsgaGV4UyArIGhleFY7XG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IElEX1BSRUZJWCB9IGZyb20gJy4uL2RlZmF1bHRzJztcblxubGV0IGNvdW50ZXIgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWQgKCk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtJRF9QUkVGSVh9LiR7RGF0ZS5ub3coKX0uJHsrK2NvdW50ZXJ9YDtcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBDcm93ZGxvYW5QYXJhU3RhdGUsIE1vYmlsZU9TLCBOZXR3b3JrSnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgQWNjb3VudEF1dGhUeXBlLCBBY2NvdW50SnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBBTExfQUNDT1VOVF9LRVkgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRPUyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xuXG5pbXBvcnQgeyBhc3NlcnQsIEJOLCBoZXhUb1U4YSwgaXNIZXggfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5pbXBvcnQgeyBkZWNvZGVBZGRyZXNzLCBlbmNvZGVBZGRyZXNzLCBldGhlcmV1bUVuY29kZSwgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG5leHBvcnQgeyBjYW5EZXJpdmUgfSBmcm9tICcuL2NhbkRlcml2ZSc7XG5cbmV4cG9ydCBjb25zdCBub3REZWYgPSAoeDogYW55KSA9PiB4ID09PSBudWxsIHx8IHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJztcbmV4cG9ydCBjb25zdCBpc0RlZiA9ICh4OiBhbnkpID0+ICFub3REZWYoeCk7XG5leHBvcnQgY29uc3Qgbm9uRW1wdHlBcnIgPSAoeDogYW55KSA9PiBBcnJheS5pc0FycmF5KHgpICYmIHgubGVuZ3RoID4gMDtcbmV4cG9ydCBjb25zdCBpc0VtcHR5QXJyYXkgPSAoeDogYW55KSA9PiAhQXJyYXkuaXNBcnJheSh4KSB8fCAoQXJyYXkuaXNBcnJheSh4KSAmJiB4Lmxlbmd0aCA9PT0gMCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FjY291bnRBbGwgKGFkZHJlc3M/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGFkZHJlc3MgPT09IEFMTF9BQ0NPVU5UX0tFWTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gTW9iaWxlT1MuaW5jbHVkZXMoZ2V0T1MoKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZvcm1hdEFkZHJlc3MgKGFkZHJlc3M6IHN0cmluZywgbmV0d29ya1ByZWZpeCA9IDQyLCBpc0V0aGVyZXVtID0gZmFsc2UpOiBzdHJpbmcge1xuICB0cnkge1xuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzID09PSAnJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlmIChpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzKSkge1xuICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgfVxuXG4gICAgaWYgKGlzQWNjb3VudEFsbChhZGRyZXNzKSkge1xuICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgfVxuXG4gICAgY29uc3QgcHVibGljS2V5ID0gZGVjb2RlQWRkcmVzcyhhZGRyZXNzKTtcblxuICAgIGlmIChpc0V0aGVyZXVtKSB7XG4gICAgICByZXR1cm4gZXRoZXJldW1FbmNvZGUocHVibGljS2V5KTtcbiAgICB9XG5cbiAgICBpZiAobmV0d29ya1ByZWZpeCA8IDApIHtcbiAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGVBZGRyZXNzKHB1YmxpY0tleSwgbmV0d29ya1ByZWZpeCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ0dldCBlcnJvciB3aGlsZSByZWZvcm1hdCBhZGRyZXNzJywgYWRkcmVzcywgZSk7XG5cbiAgICByZXR1cm4gYWRkcmVzcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQWRkcmVzc0J5TmV0d29ya0tleSAoYWRkcmVzc2VzOiBzdHJpbmdbXSwgbmV0d29ya0tleTogc3RyaW5nLCBpc0V0aGVyZXVtPzogYm9vbGVhbikge1xuICBpZiAoaXNFdGhlcmV1bSkge1xuICAgIHJldHVybiBhZGRyZXNzZXMuZmlsdGVyKChhZGRyZXNzKSA9PiB7XG4gICAgICByZXR1cm4gaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzcyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFkZHJlc3Nlcy5maWx0ZXIoKGFkZHJlc3MpID0+IHtcbiAgICAgIHJldHVybiAhaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhdGVnb3J5QWRkcmVzc2VzIChhZGRyZXNzZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHN1YnN0cmF0ZUFkZHJlc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgZXZtQWRkcmVzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGFkZHJlc3Nlcy5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgaWYgKGlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MpKSB7XG4gICAgICBldm1BZGRyZXNzZXMucHVzaChhZGRyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RyYXRlQWRkcmVzc2VzLnB1c2goYWRkcmVzcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3N1YnN0cmF0ZUFkZHJlc3NlcywgZXZtQWRkcmVzc2VzXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhdGVnb3J5TmV0d29ya3MgKG5ldHdvcmtzOiBOZXR3b3JrSnNvbltdKSB7XG4gIGNvbnN0IHN1YnN0cmF0ZUFkZHJlc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgZXZtQWRkcmVzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHJldHVybiBbc3Vic3RyYXRlQWRkcmVzc2VzLCBldm1BZGRyZXNzZXNdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvRXZtQWRkcmVzcyAoc3Vic3RyYXRlQWRkcmVzczogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgYWRkcmVzc0J5dGVzID0gZGVjb2RlQWRkcmVzcyhzdWJzdHJhdGVBZGRyZXNzKTtcblxuICByZXR1cm4gZXRoZXJldW1FbmNvZGUoJzB4JyArIEJ1ZmZlci5mcm9tKGFkZHJlc3NCeXRlcy5zdWJhcnJheSgwLCAyMCkpLnRvU3RyaW5nKCdoZXgnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VybCAodGFyZ2V0U3RyaW5nOiBzdHJpbmcpIHtcbiAgbGV0IHVybDtcblxuICB0cnkge1xuICAgIHVybCA9IG5ldyBVUkwodGFyZ2V0U3RyaW5nKTtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB1cmwucHJvdG9jb2wgPT09ICdodHRwOicgfHwgdXJsLnByb3RvY29sID09PSAnaHR0cHM6JyB8fCB1cmwucHJvdG9jb2wgPT09ICd3c3M6Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluSmVzdFRlc3QgKCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuSkVTVF9XT1JLRVJfSUQgIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHBhcnNlSXBmc0xpbmsgPSAoaXBmc0xpbms6IHN0cmluZykgPT4ge1xuICBpZiAoIWlwZnNMaW5rLmluY2x1ZGVzKCdpcGZzOi8vaXBmcy8nKSkge1xuICAgIHJldHVybiBpcGZzTGluaztcbiAgfVxuXG4gIHJldHVybiBpcGZzTGluay5zcGxpdCgnaXBmczovL2lwZnMvJylbMV07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9TdHIgKGJ1Zjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHN0ciA9ICcnO1xuICBsZXQgaGV4U3RhcnQgPSBidWYuaW5kZXhPZignMHgnKTtcblxuICBpZiAoaGV4U3RhcnQgPCAwKSB7XG4gICAgaGV4U3RhcnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGhleFN0YXJ0ID0gMjtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBoZXhTdGFydCwgc3RyTGVuID0gYnVmLmxlbmd0aDsgaSA8IHN0ckxlbjsgaSArPSAyKSB7XG4gICAgY29uc3QgY2ggPSBidWZbaV0gKyBidWZbaSArIDFdO1xuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KGNoLCAxNik7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgaWYgKG51bSAhPSAwKSB7XG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShudW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5leHBvcnQgZnVuY3Rpb24gdXRmMTZUb1N0cmluZyAodUludDE2QXJyYXk6IEFycmF5PG51bWJlcj4pOiBzdHJpbmcge1xuICBsZXQgc3RyID0gJyc7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHVJbnQxNkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodUludDE2QXJyYXlbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvVVRGMTYgKGhleDogc3RyaW5nKTogVWludDhBcnJheSB7XG4gIGNvbnN0IGJ1ZiA9IFtdO1xuICBsZXQgaGV4U3RhcnQgPSBoZXguaW5kZXhPZignMHgnKTtcblxuICBpZiAoaGV4U3RhcnQgPCAwKSB7XG4gICAgaGV4U3RhcnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGhleFN0YXJ0ID0gMjtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBoZXhTdGFydCwgc3RyTGVuID0gaGV4Lmxlbmd0aDsgaSA8IHN0ckxlbjsgaSArPSAyKSB7XG4gICAgY29uc3QgY2ggPSBoZXhbaV0gKyBoZXhbaSArIDFdO1xuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KGNoLCAxNik7XG5cbiAgICBidWYucHVzaChudW0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1Zik7XG59XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3Vic3RyYXRlQWRkcmVzcyA9IChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBlbmNvZGVBZGRyZXNzKFxuICAgICAgaXNIZXgoYWRkcmVzcylcbiAgICAgICAgPyBoZXhUb1U4YShhZGRyZXNzKVxuICAgICAgICA6IGRlY29kZUFkZHJlc3MoYWRkcmVzcylcbiAgICApO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdG9Vbml0ID0gKGJhbGFuY2U6IG51bWJlciwgZGVjaW1hbHM6IG51bWJlcikgPT4ge1xuICBpZiAoYmFsYW5jZSA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIGJhbGFuY2UgLyAoMTAgKiogZGVjaW1hbHMpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUJOIChpbnB1dEFycjogQk5bXSkge1xuICBsZXQgcnMgPSBuZXcgQk4oMCk7XG5cbiAgaW5wdXRBcnIuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBycyA9IHJzLmFkZChpbnB1dCk7XG4gIH0pO1xuXG4gIHJldHVybiBycztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRGdW5kU3RhdHVzID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gIGlmIChzdGF0dXMgPT09ICdXb24nIHx8IHN0YXR1cyA9PT0gJ1JldGlyaW5nJykge1xuICAgIHJldHVybiBDcm93ZGxvYW5QYXJhU3RhdGUuQ09NUExFVEVEO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ1N0YXJ0ZWQnKSB7XG4gICAgcmV0dXJuIENyb3dkbG9hblBhcmFTdGF0ZS5PTkdPSU5HO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ0Rpc3NvbHZlZCcpIHtcbiAgICByZXR1cm4gQ3Jvd2Rsb2FuUGFyYVN0YXRlLkZBSUxFRDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNBZGRyZXNzZXNFcXVhbCA9IChhZGRyZXNzZXM6IHN0cmluZ1tdLCBwcmV2QWRkcmVzc2VzOiBzdHJpbmdbXSkgPT4ge1xuICBpZiAoYWRkcmVzc2VzLmxlbmd0aCAhPT0gcHJldkFkZHJlc3Nlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGNvbnN0IGFkZHJlc3Mgb2YgYWRkcmVzc2VzKSB7XG4gICAgaWYgKCFwcmV2QWRkcmVzc2VzLmluY2x1ZGVzKGFkZHJlc3MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZFByb3ZpZGVyID0gKHByb3ZpZGVyOiBzdHJpbmcpID0+IHtcbiAgaWYgKGlzVXJsKHByb3ZpZGVyKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHByb3ZpZGVyLnN0YXJ0c1dpdGgoJ3dzczovLycpIHx8IHByb3ZpZGVyLnN0YXJ0c1dpdGgoJ2xpZ2h0Oi8vJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50UHJvdmlkZXIgPSAoZGF0YTogTmV0d29ya0pzb24pID0+IHtcbiAgaWYgKCFkYXRhPy5jdXJyZW50UHJvdmlkZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhLmN1cnJlbnRQcm92aWRlci5zdGFydHNXaXRoKCdjdXN0b20nKSAmJiBkYXRhLmN1c3RvbVByb3ZpZGVycykge1xuICAgIHJldHVybiBkYXRhLmN1c3RvbVByb3ZpZGVyc1tkYXRhLmN1cnJlbnRQcm92aWRlcl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRhdGEucHJvdmlkZXJzW2RhdGEuY3VycmVudFByb3ZpZGVyXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldE5mdFByb3ZpZGVyID0gKGRhdGE6IE5ldHdvcmtKc29uKSA9PiB7XG4gIGlmIChkYXRhLm5mdFByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIGRhdGEucHJvdmlkZXJzW2RhdGEubmZ0UHJvdmlkZXJdO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTmV0d29ya1Byb3ZpZGVycyAoY3VzdG9tTmV0d29yazogTmV0d29ya0pzb24sIHByZWRlZmluZWROZXR3b3JrOiBOZXR3b3JrSnNvbikgeyAvLyBtZXJnZSBwcm92aWRlcnMgZm9yIDIgbmV0d29ya3Mgd2l0aCB0aGUgc2FtZSBnZW5lc2lzSGFzaFxuICBpZiAoY3VzdG9tTmV0d29yay5jdXN0b21Qcm92aWRlcnMpIHtcbiAgICBjb25zdCBwYXJzZWRDdXN0b21Qcm92aWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBjb25zdCBjdXJyZW50UHJvdmlkZXIgPSBjdXN0b21OZXR3b3JrLmN1c3RvbVByb3ZpZGVyc1tjdXN0b21OZXR3b3JrLmN1cnJlbnRQcm92aWRlciB8fCAnJ10gfHwgJyc7XG4gICAgY29uc3QgY3VycmVudFByb3ZpZGVyTWV0aG9kID0gY3VycmVudFByb3ZpZGVyLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/ICdodHRwJyA6ICd3cyc7XG4gICAgbGV0IHBhcnNlZFByb3ZpZGVyS2V5ID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IGN1c3RvbVByb3ZpZGVyIG9mIE9iamVjdC52YWx1ZXMoY3VzdG9tTmV0d29yay5jdXN0b21Qcm92aWRlcnMpKSB7XG4gICAgICBsZXQgZXhpc3QgPSBmYWxzZTtcblxuICAgICAgZm9yIChjb25zdCBba2V5LCBwcm92aWRlcl0gb2YgT2JqZWN0LmVudHJpZXMocHJlZGVmaW5lZE5ldHdvcmsucHJvdmlkZXJzKSkge1xuICAgICAgICBpZiAoY3VycmVudFByb3ZpZGVyID09PSBwcm92aWRlcikgeyAvLyBwb2ludCBjdXJyZW50UHJvdmlkZXIgdG8gcHJlZGVmaW5lZFxuICAgICAgICAgIHBhcnNlZFByb3ZpZGVyS2V5ID0ga2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3ZpZGVyID09PSBjdXN0b21Qcm92aWRlcikge1xuICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gT2JqZWN0LnZhbHVlcyhwYXJzZWRDdXN0b21Qcm92aWRlcnMpLmxlbmd0aDtcblxuICAgICAgICBwYXJzZWRDdXN0b21Qcm92aWRlcnNbYGN1c3RvbV8ke2luZGV4fWBdID0gY3VzdG9tUHJvdmlkZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5LCBwYXJzZWRQcm92aWRlcl0gb2YgT2JqZWN0LmVudHJpZXMocGFyc2VkQ3VzdG9tUHJvdmlkZXJzKSkge1xuICAgICAgaWYgKGN1cnJlbnRQcm92aWRlciA9PT0gcGFyc2VkUHJvdmlkZXIpIHtcbiAgICAgICAgcGFyc2VkUHJvdmlkZXJLZXkgPSBrZXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3VycmVudFByb3ZpZGVyTWV0aG9kLCBwYXJzZWRQcm92aWRlcktleSwgcGFyc2VkQ3VzdG9tUHJvdmlkZXJzIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgY3VycmVudFByb3ZpZGVyTWV0aG9kOiAnJywgcGFyc2VkUHJvdmlkZXJLZXk6ICcnLCBwYXJzZWRDdXN0b21Qcm92aWRlcnM6IHt9IH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlckFuZFNvcnRpbmdBY2NvdW50QnlBdXRoVHlwZSA9IChhY2NvdW50czogQWNjb3VudEpzb25bXSwgYWNjb3VudEF1dGhUeXBlOiBBY2NvdW50QXV0aFR5cGUsIHNvcnRpbmcgPSBmYWxzZSkgPT4ge1xuICBsZXQgcnMgPSBbLi4uYWNjb3VudHNdO1xuXG4gIHJzID0gcnMuZmlsdGVyKChhY2MpID0+IGFjYy5hZGRyZXNzICE9PSAnQUxMJyk7XG5cbiAgaWYgKGFjY291bnRBdXRoVHlwZSA9PT0gJ3N1YnN0cmF0ZScpIHtcbiAgICBycyA9IHJzLmZpbHRlcigoYWNjKSA9PiAoYWNjLnR5cGUgIT09ICdldGhlcmV1bScpKTtcbiAgfSBlbHNlIGlmIChhY2NvdW50QXV0aFR5cGUgPT09ICdldm0nKSB7XG4gICAgcnMgPSBycy5maWx0ZXIoKGFjYykgPT4gKGFjYy50eXBlID09PSAnZXRoZXJldW0nKSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNvcnRpbmcpIHtcbiAgICAgIHJzLnNvcnQoKGFjYywgYWNjMikgPT4ge1xuICAgICAgICBpZiAoKGFjYy50eXBlID09PSAnZXRoZXJldW0nICYmIGFjYzIudHlwZSA9PT0gJ2V0aGVyZXVtJykgfHwgKGFjYy50eXBlICE9PSAnZXRoZXJldW0nICYmIGFjYzIudHlwZSAhPT0gJ2V0aGVyZXVtJykpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYWNjLnR5cGUgPT09ICdldGhlcmV1bScgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBycztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJhd051bWJlciAodmFsdWU6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlQWxsKCcsJywgJycpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZUFkZHJlc3MgKGFkZHJlc3MxOiBzdHJpbmcsIGFkZHJlc3MyOiBzdHJpbmcpIHtcbiAgaWYgKGlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MxKSkge1xuICAgIHJldHVybiBhZGRyZXNzMS50b0xvd2VyQ2FzZSgpID09PSBhZGRyZXNzMi50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZm9ybWF0QWRkcmVzcyhhZGRyZXNzMSwgMCkgPT09IHJlZm9ybWF0QWRkcmVzcyhhZGRyZXNzMiwgMCk7IC8vIFRPRE86IG1heWJlIHRoZXJlJ3MgYSBiZXR0ZXIgd2F5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Gcm9tVXJsICh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXihodHRwcz86XFwvXFwvKT8od3d3XFwuKT8vLCAnJykuc3BsaXQoJy8nKVswXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXRUaW1lb3V0IChtczogbnVtYmVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5leHBvcnQgY29uc3Qgc3RyaXBVcmwgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBhc3NlcnQodXJsICYmICh1cmwuc3RhcnRzV2l0aCgnaHR0cDonKSB8fCB1cmwuc3RhcnRzV2l0aCgnaHR0cHM6JykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2lwZnM6JykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2lwbnM6JykpLCB0KCdJbnZhbGlkIFVSTCBmb3IgcHJvdmlkZXInKSk7XG5cbiAgY29uc3QgcGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcblxuICByZXR1cm4gcGFydHNbMl07XG59O1xuXG5leHBvcnQgKiBmcm9tICcuL2FycmF5JztcbmV4cG9ydCAqIGZyb20gJy4vZW52aXJvbm1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXp5JztcbmV4cG9ydCAqIGZyb20gJy4vcmVnaXN0cnknO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2xhdGUnO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbnRlcmZhY2UgTGF6eUl0ZW0ge1xuICB0aW1lb3V0PzogTm9kZUpTLlRpbWVvdXQ7XG4gIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICBsYXN0RmlyZTogbnVtYmVyO1xufVxuXG5jb25zdCBsYXp5TWFwOiBSZWNvcmQ8c3RyaW5nLCBMYXp5SXRlbT4gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxhenkgKGtleTogc3RyaW5nKSB7XG4gIGlmIChsYXp5TWFwW2tleV0pIHtcbiAgICBjbGVhclRpbWVvdXQobGF6eU1hcFtrZXldLnRpbWVvdXQpO1xuICAgIGRlbGV0ZSBsYXp5TWFwW2tleV07XG4gIH1cbn1cblxuLy8gQWRkIG9yIHVwZGF0ZSBuZXcgbGF6eSB0aHJlYWRcbmV4cG9ydCBmdW5jdGlvbiBhZGRMYXp5IChrZXk6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQsIGxhenlUaW1lID0gMzAwLCBtYXhMYXp5VGltZSA9IDMwMDAsIGZpcmVPbkZpcnN0ID0gdHJ1ZSkge1xuICBjb25zdCBleGlzdGVkID0gbGF6eU1hcFtrZXldO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICBpZiAoZXhpc3RlZCkge1xuICAgIGNsZWFyVGltZW91dChleGlzdGVkLnRpbWVvdXQpO1xuICAgIGxhenlNYXBba2V5XSA9IHtcbiAgICAgIC4uLmV4aXN0ZWQsXG4gICAgICBjYWxsYmFja1xuICAgIH07XG5cbiAgICAvLyBGaXJlIGNhbGxiYWNrIGlmIGxhc3QgZmlyZSBpcyB0b28gbG9uZ1xuICAgIGlmIChub3cgLSBleGlzdGVkLmxhc3RGaXJlID49IG1heExhenlUaW1lKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgbGF6eU1hcFtrZXldLmxhc3RGaXJlID0gbm93O1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXp5TWFwW2tleV0udGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBUaGlzIHdpbGwgYmUgZmlyZSBpbiB0aGUgbGFzdCBjYWxsIG9mIGxhenkgdGhyZWFkXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIGxhenlNYXBba2V5XS5sYXN0RmlyZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICByZW1vdmVMYXp5KGtleSk7XG4gICAgICB9LCBsYXp5VGltZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChmaXJlT25GaXJzdCkge1xuICAgICAgLy8gRmlyZSBjYWxsYmFjayBpbW1lZGlhdGVseSBpbiB0aGUgZmlyc3QgdGltZVxuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIGxhenlNYXBba2V5XSA9IHtcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIGxhc3RGaXJlOiBub3dcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhenlNYXBba2V5XSA9IHtcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIGxhc3RGaXJlOiBub3dcbiAgICAgIH07XG5cbiAgICAgIGxhenlNYXBba2V5XS50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBmaXJlIGluIHRoZSBsYXN0IGNhbGwgb2YgbGF6eSB0aHJlYWRcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgbGF6eU1hcFtrZXldLmxhc3RGaXJlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHJlbW92ZUxhenkoa2V5KTtcbiAgICAgIH0sIGxhenlUaW1lKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBCTl9URU4gPSBuZXcgQmlnTnVtYmVyKDEwKTtcbmV4cG9ydCBpbnRlcmZhY2UgTnVtYmVyRm9ybWF0dGVyIHtcbiAgKGlucHV0OiBzdHJpbmcsIG1ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgbnVtYmVyPik6IHN0cmluZztcbn1cblxuLy8gQ2xlYXIgemVybyBmcm9tIGVuZCwgdXNlIHdpdGggZGVjaW1hbCBvbmx5XG5jb25zdCBjbGVhclplcm8gPSAocmVzdWx0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBsZXQgaW5kZXggPSByZXN1bHQubGVuZ3RoIC0gMTtcblxuICB3aGlsZSAocmVzdWx0W2luZGV4XSA9PT0gJzAnKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIGluZGV4KTtcbiAgICBpbmRleC0tO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IE5VTV8xVCA9IG5ldyBCaWdOdW1iZXIoMWUxMik7XG5jb25zdCBUTElNID0gbmV3IEJpZ051bWJlcigxZTE3KTtcbmNvbnN0IE5VTV8xQiA9IG5ldyBCaWdOdW1iZXIoMWU5KTtcbmNvbnN0IEJMSU0gPSBuZXcgQmlnTnVtYmVyKDFlMTQpO1xuY29uc3QgTlVNXzFNID0gbmV3IEJpZ051bWJlcigxZTYpO1xuY29uc3QgTlVNXzEwME0gPSBuZXcgQmlnTnVtYmVyKDFlOCk7XG5cbmV4cG9ydCBjb25zdCBiYWxhbmNlRm9ybWF0dGVyOiBOdW1iZXJGb3JtYXR0ZXIgPSAoXG4gIGlucHV0OiBzdHJpbmcsXG4gIG1ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgYWJzR3RlT25lID0gbmV3IEJpZ051bWJlcihpbnB1dCkuYWJzKCkuZ3RlKDEpO1xuICBjb25zdCBtaW5OdW1iZXJGb3JtYXQgPSBtZXRhZGF0YT8ubWluTnVtYmVyRm9ybWF0IHx8IDI7XG4gIGNvbnN0IG1heE51bWJlckZvcm1hdCA9IG1ldGFkYXRhPy5tYXhOdW1iZXJGb3JtYXQgfHwgNjtcblxuICBjb25zdCBbaW50LCBkZWNpbWFsID0gJzAnXSA9IGlucHV0LnNwbGl0KCcuJyk7XG4gIGxldCBfZGVjaW1hbCA9ICcnO1xuXG4gIGlmIChhYnNHdGVPbmUpIHtcbiAgICBjb25zdCBpbnROdW1iZXIgPSBuZXcgQmlnTnVtYmVyKGludCk7XG4gICAgY29uc3QgbWF4ID0gQk5fVEVOLnBvdyhtYXhOdW1iZXJGb3JtYXQpO1xuXG4gICAgLy8gSWYgY291bnQgb2YgbnVtYmVyIGluIGludGVnZXIgcGFydCBncmVhdGVyIG9yIGVxdWFsIG1heE51bWJlckZvcm1hdCwgZG8gbm90IHNob3cgZGVjaW1hbFxuICAgIGlmIChpbnROdW1iZXIuZ3RlKG1heCkpIHtcbiAgICAgIGlmIChpbnROdW1iZXIuZ3RlKE5VTV8xMDBNKSkge1xuICAgICAgICBpZiAoaW50TnVtYmVyLmd0ZShCTElNKSkge1xuICAgICAgICAgIGlmIChpbnROdW1iZXIuZ3RlKFRMSU0pKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7aW50TnVtYmVyLmRpdmlkZWRCeShOVU1fMVQpLnRvRml4ZWQoMil9IFRgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBgJHtpbnROdW1iZXIuZGl2aWRlZEJ5KE5VTV8xQikudG9GaXhlZCgyKX0gQmA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7aW50TnVtYmVyLmRpdmlkZWRCeShOVU1fMU0pLnRvRml4ZWQoMil9IE1gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW50O1xuICAgIH1cblxuICAgIC8vIEdldCBvbmx5IG1pbk51bWJlckZvcm1hdCBudW1iZXIgYXQgZGVjaW1hbFxuICAgIGlmIChkZWNpbWFsLmxlbmd0aCA8PSBtaW5OdW1iZXJGb3JtYXQpIHtcbiAgICAgIF9kZWNpbWFsID0gZGVjaW1hbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2RlY2ltYWwgPSBkZWNpbWFsLnNsaWNlKDAsIG1pbk51bWJlckZvcm1hdCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgemVybyBudW1iZXIgZm9yIGRlY2ltYWxcbiAgICBfZGVjaW1hbCA9IGNsZWFyWmVybyhfZGVjaW1hbCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSW5kZXggb2YgY3Vyc29yXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIC8vIENvdW50IG9mIG5vdCB6ZXJvIG51bWJlciBpbiBkZWNpbWFsXG4gICAgbGV0IGN1cnJlbnQgPSAwO1xuXG4gICAgLy8gRmluZCBhIG5vdCB6ZXJvIG51bWJlciBpbiBkZWNpbWFsXG4gICAgbGV0IG1ldE5vdFplcm8gPSBmYWxzZTtcblxuICAgIC8vIEdldCBhdCBsZWFzdCBtaW5OdW1iZXJGb3JtYXQgbnVtYmVyIG5vdCAwIGZyb20gaW5kZXggMFxuICAgIC8vIElmIGNvdW50IG9mIDAgbnVtYmVyIGF0IHByZWZpeCBncmVhdGVyIG9yIGVxdWFsIG1heE51bWJlckZvcm1hdCBzaG91bGQgc3RvcCBhbmQgcmV0dXJuIDBcblxuICAgIC8vIGN1cnJlbnQgPT09IG1pbk51bWJlckZvcm1hdDogZ2V0IGVub3VnaCBudW1iZXJcbiAgICAvLyBpbmRleCA9PT0gZGVjaW1hbC5sZW5ndGg6IGVuZCBvZiBkZWNpbWFsXG4gICAgLy8gaW5kZXggPT09IG1heE51bWJlckZvcm1hdDogcmVhY2ggbGltaXQgb2YgMCBudW1iZXIgYXQgcHJlZml4XG4gICAgd2hpbGUgKFxuICAgICAgY3VycmVudCA8IG1pbk51bWJlckZvcm1hdCAmJlxuICAgICAgaW5kZXggPCBkZWNpbWFsLmxlbmd0aCAmJlxuICAgICAgKGluZGV4IDwgbWF4TnVtYmVyRm9ybWF0IHx8IG1ldE5vdFplcm8pXG4gICAgKSB7XG4gICAgICBjb25zdCBfY2hhciA9IGRlY2ltYWxbaW5kZXhdO1xuXG4gICAgICBfZGVjaW1hbCArPSBfY2hhcjtcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIGlmIChfY2hhciAhPT0gJzAnKSB7XG4gICAgICAgIG1ldE5vdFplcm8gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0Tm90WmVybykge1xuICAgICAgICBjdXJyZW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgemVybyBudW1iZXIgZm9yIGRlY2ltYWxcbiAgICBfZGVjaW1hbCA9IGNsZWFyWmVybyhfZGVjaW1hbCk7XG4gIH1cblxuICBpZiAoX2RlY2ltYWwpIHtcbiAgICByZXR1cm4gYCR7aW50fS4ke19kZWNpbWFsfWA7XG4gIH1cblxuICByZXR1cm4gaW50O1xufTtcblxuZXhwb3J0IGNvbnN0IFBSRURFRklORURfRk9STUFUVEVSOiBSZWNvcmQ8c3RyaW5nLCBOdW1iZXJGb3JtYXR0ZXI+ID0ge1xuICBiYWxhbmNlOiBiYWxhbmNlRm9ybWF0dGVyXG59O1xuXG5leHBvcnQgY29uc3QgdG9CTlN0cmluZyA9IChpbnB1dDogc3RyaW5nIHwgbnVtYmVyIHwgQmlnTnVtYmVyLCBkZWNpbWFsOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCByYXcgPSBuZXcgQmlnTnVtYmVyKGlucHV0KTtcblxuICByZXR1cm4gcmF3Lm11bHRpcGxpZWRCeShCTl9URU4ucG93KGRlY2ltYWwpKS50b0ZpeGVkKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKFxuICBpbnB1dDogc3RyaW5nIHwgbnVtYmVyIHwgQmlnTnVtYmVyLFxuICBkZWNpbWFsOiBudW1iZXIsXG4gIGZvcm1hdHRlcjogTnVtYmVyRm9ybWF0dGVyLFxuICBtZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHJhdyA9IG5ldyBCaWdOdW1iZXIoaW5wdXQpLmRpdmlkZWRCeShCTl9URU4ucG93KGRlY2ltYWwpKS50b0ZpeGVkKCk7XG5cbiAgcmV0dXJuIGZvcm1hdHRlcihyYXcsIG1ldGFkYXRhKTtcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Vcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9taXNlSGFuZGxlcjxUPiAoKSB7XG4gIGxldCBfcmVzb2x2ZTogKHZhbHVlOiBUKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybignVGhpcyBwcm9taXNlIGhhbmRsZXIgaXMgbm90IGltcGxlbWVudGVkJyk7XG4gIH07XG5cbiAgbGV0IF9yZWplY3Q6IChyZWFzb24/OiB1bmtub3duKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybignVGhpcyBwcm9taXNlIGhhbmRsZXIgaXMgbm90IGltcGxlbWVudGVkJyk7XG4gIH07XG5cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgX3JlamVjdCA9IHJlamVjdDtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICByZXNvbHZlOiBfcmVzb2x2ZSxcbiAgICByZWplY3Q6IF9yZWplY3QsXG4gICAgcHJvbWlzZVxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBQcm9taXNlSGFuZGxlcjxUPiA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVByb21pc2VIYW5kbGVyPFQ+PjtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0NoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5cbmltcG9ydCB7IE1ldGFkYXRhLCBUeXBlUmVnaXN0cnkgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMnO1xuaW1wb3J0IHsgQ2hhaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnQHBvbGthZG90L3R5cGVzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgSGV4U3RyaW5nIH0gZnJvbSAnQHBvbGthZG90L3V0aWwvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVnaXN0cnkgPSAoY2hhaW46IF9DaGFpbkluZm8sIHJhd01ldGFkYXRhOiBIZXhTdHJpbmcpOiBSZWdpc3RyeSA9PiB7XG4gIGNvbnN0IHJlZ2lzdHJ5OiBSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKTtcbiAgY29uc3QgbWV0YWRhdGEgPSBuZXcgTWV0YWRhdGEocmVnaXN0cnksIHJhd01ldGFkYXRhKTtcblxuICByZWdpc3RyeS5zZXRNZXRhZGF0YShtZXRhZGF0YSk7XG5cbiAgY29uc3QgdG9rZW5JbmZvID0gX2dldENoYWluTmF0aXZlVG9rZW5CYXNpY0luZm8oY2hhaW4pO1xuXG4gIHJlZ2lzdHJ5LnNldENoYWluUHJvcGVydGllcyhyZWdpc3RyeS5jcmVhdGVUeXBlKCdDaGFpblByb3BlcnRpZXMnLCB7XG4gICAgc3M1OEZvcm1hdDogY2hhaW4uc3Vic3RyYXRlSW5mbz8uYWRkcmVzc1ByZWZpeCB8fCA0MixcbiAgICB0b2tlbkRlY2ltYWxzOiB0b2tlbkluZm8uZGVjaW1hbHMsXG4gICAgdG9rZW5TeW1ib2w6IHRva2VuSW5mby5zeW1ib2xcbiAgfSkgYXMgdW5rbm93biBhcyBDaGFpblByb3BlcnRpZXMpO1xuXG4gIHJldHVybiByZWdpc3RyeTtcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Vcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCBjb25zdCBkZXRlY3RUcmFuc2xhdGUgPSAobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nID0+IG1lc3NhZ2U7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24tY2hhaW5zIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB0eXBlIHsgTWV0YWRhdGFEZWYgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1pbmplY3QvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBDaGFpblByb3BlcnRpZXMgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgdHlwZSB7IENoYWluIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IE1ldGFkYXRhLCBUeXBlUmVnaXN0cnkgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMnO1xuaW1wb3J0IHsgYmFzZTY0RGVjb2RlIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxuZXhwb3J0IHsgcGFja2FnZUluZm8gfSBmcm9tICcuL3BhY2thZ2VJbmZvJztcblxuLy8gaW1wb3J0cyBjaGFpbiBkZXRhaWxzLCBnZW5lcmFsbHkgbWV0YWRhdGEuIEZvciB0aGUgZ2VuZXJhdGlvbiBvZiB0aGVzZSxcbi8vIGluc2lkZSB0aGUgYXBpLCBydW4gYHlhcm4gY2hhaW46aW5mbyAtLXdzIDx1cmw+YFxuXG5jb25zdCBkZWZpbml0aW9ucyA9IG5ldyBNYXA8c3RyaW5nLCBNZXRhZGF0YURlZj4oXG4gIC8vIFtrdXNhbWFdLm1hcCgoZGVmKSA9PiBbZGVmLmdlbmVzaXNIYXNoLCBkZWZdKVxuKTtcblxuY29uc3QgZXhwYW5kZWQgPSBuZXcgTWFwPHN0cmluZywgQ2hhaW4+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhZGF0YUV4cGFuZCAoZGVmaW5pdGlvbjogTWV0YWRhdGFEZWYsIGlzUGFydGlhbCA9IGZhbHNlKTogQ2hhaW4ge1xuICBjb25zdCBjYWNoZWQgPSBleHBhbmRlZC5nZXQoZGVmaW5pdGlvbi5nZW5lc2lzSGFzaCk7XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuc3BlY1ZlcnNpb24gPT09IGRlZmluaXRpb24uc3BlY1ZlcnNpb24pIHtcbiAgICByZXR1cm4gY2FjaGVkO1xuICB9XG5cbiAgY29uc3QgeyBjaGFpbiwgZ2VuZXNpc0hhc2gsIGljb24sIG1ldGFDYWxscywgc3BlY1ZlcnNpb24sIHNzNThGb3JtYXQsIHRva2VuRGVjaW1hbHMsIHRva2VuU3ltYm9sLCB0eXBlcywgdXNlckV4dGVuc2lvbnMgfSA9IGRlZmluaXRpb247XG4gIGNvbnN0IHJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpO1xuXG4gIGlmICghaXNQYXJ0aWFsKSB7XG4gICAgcmVnaXN0cnkucmVnaXN0ZXIodHlwZXMpO1xuICB9XG5cbiAgcmVnaXN0cnkuc2V0Q2hhaW5Qcm9wZXJ0aWVzKHJlZ2lzdHJ5LmNyZWF0ZVR5cGUoJ0NoYWluUHJvcGVydGllcycsIHtcbiAgICBzczU4Rm9ybWF0LFxuICAgIHRva2VuRGVjaW1hbHMsXG4gICAgdG9rZW5TeW1ib2xcbiAgfSkgYXMgdW5rbm93biBhcyBDaGFpblByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IGhhc01ldGFkYXRhID0gISFtZXRhQ2FsbHMgJiYgIWlzUGFydGlhbDtcblxuICBpZiAoaGFzTWV0YWRhdGEpIHtcbiAgICByZWdpc3RyeS5zZXRNZXRhZGF0YShuZXcgTWV0YWRhdGEocmVnaXN0cnksIGJhc2U2NERlY29kZShtZXRhQ2FsbHMpKSwgdW5kZWZpbmVkLCB1c2VyRXh0ZW5zaW9ucyk7XG4gIH1cblxuICBjb25zdCBpc1Vua25vd24gPSBnZW5lc2lzSGFzaCA9PT0gJzB4JztcblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgZGVmaW5pdGlvbixcbiAgICBnZW5lc2lzSGFzaDogaXNVbmtub3duXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBnZW5lc2lzSGFzaCxcbiAgICBoYXNNZXRhZGF0YSxcbiAgICBpY29uOiBpY29uIHx8ICdzdWJzdHJhdGUnLFxuICAgIGlzVW5rbm93bixcbiAgICBuYW1lOiBjaGFpbixcbiAgICByZWdpc3RyeSxcbiAgICBzcGVjVmVyc2lvbixcbiAgICBzczU4Rm9ybWF0LFxuICAgIHRva2VuRGVjaW1hbHMsXG4gICAgdG9rZW5TeW1ib2xcbiAgfTtcblxuICBpZiAocmVzdWx0LmdlbmVzaXNIYXNoICYmICFpc1BhcnRpYWwpIHtcbiAgICBleHBhbmRlZC5zZXQocmVzdWx0LmdlbmVzaXNIYXNoLCByZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDaGFpbiAoZGVmaW5pdGlvbnM6IE1ldGFkYXRhRGVmW10sIGdlbmVzaXNIYXNoPzogc3RyaW5nIHwgbnVsbCk6IENoYWluIHwgbnVsbCB7XG4gIGNvbnN0IGRlZiA9IGRlZmluaXRpb25zLmZpbmQoKGRlZikgPT4gZGVmLmdlbmVzaXNIYXNoID09PSBnZW5lc2lzSGFzaCk7XG5cbiAgcmV0dXJuIGRlZlxuICAgID8gbWV0YWRhdGFFeHBhbmQoZGVmKVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1ldGFkYXRhIChkZWY6IE1ldGFkYXRhRGVmKTogdm9pZCB7XG4gIGRlZmluaXRpb25zLnNldChkZWYuZ2VuZXNpc0hhc2gsIGRlZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrbm93bk1ldGFkYXRhICgpOiBNZXRhZGF0YURlZltdIHtcbiAgcmV0dXJuIFsuLi5kZWZpbml0aW9ucy52YWx1ZXMoKV07XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxNy0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWNoYWlucyBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBEbyBub3QgZWRpdCwgYXV0by1nZW5lcmF0ZWQgYnkgQHBvbGthZG90L2RldlxuXG5leHBvcnQgY29uc3QgcGFja2FnZUluZm8gPSB7IG5hbWU6ICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1jaGFpbnMnLCBwYXRoOiAnYXV0bycsIHR5cGU6ICdhdXRvJywgdmVyc2lvbjogJzEuMS4xNy0wJyB9O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFU4QV9XUkFQX0VUSEVSRVVNLCBVOEFfV1JBUF9QT1NURklYLCBVOEFfV1JBUF9QUkVGSVgsIHU4YUlzV3JhcHBlZCwgdThhVW53cmFwQnl0ZXMsIHU4YVdyYXBCeXRlcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcblxuZXhwb3J0IGNvbnN0IEVUSEVSRVVNID0gVThBX1dSQVBfRVRIRVJFVU07XG5leHBvcnQgY29uc3QgUE9TVEZJWCA9IFU4QV9XUkFQX1BPU1RGSVg7XG5leHBvcnQgY29uc3QgUFJFRklYID0gVThBX1dSQVBfUFJFRklYO1xuXG5leHBvcnQgY29uc3QgaXNXcmFwcGVkID0gdThhSXNXcmFwcGVkO1xuZXhwb3J0IGNvbnN0IHVud3JhcEJ5dGVzID0gdThhVW53cmFwQnl0ZXM7XG5leHBvcnQgY29uc3Qgd3JhcEJ5dGVzID0gdThhV3JhcEJ5dGVzO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWluamVjdCBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBleHBvc2VHbG9iYWwsIHhnbG9iYWwgfSBmcm9tICdAcG9sa2Fkb3QveC1nbG9iYWwnO1xuXG5leHBvc2VHbG9iYWwoJ2Nocm9tZScsIHhnbG9iYWwuYnJvd3Nlcik7XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiUnVudGltZUVudmlyb25tZW50IiwiU3Rha2luZ1R5cGUiLCJBUElJdGVtU3RhdGUiLCJSTVJLX1ZFUiIsIkNyb3dkbG9hblBhcmFTdGF0ZSIsIkNvbnRyYWN0VHlwZSIsIldhbGxldFVubG9ja1R5cGUiLCJUcmFuc2FjdGlvbkRpcmVjdGlvbiIsIkNoYWluVHlwZSIsIkV4dHJpbnNpY1R5cGUiLCJFeHRyaW5zaWNTdGF0dXMiLCJCYXNpY1R4RXJyb3JUeXBlIiwiU3Rha2luZ1R4RXJyb3JUeXBlIiwiVHJhbnNmZXJUeEVycm9yVHlwZSIsIkJhc2ljVHhXYXJuaW5nQ29kZSIsIkJhbGFuY2VFcnJvclR5cGUiLCJQcm92aWRlckVycm9yVHlwZSIsIkFjY291bnRFeHRlcm5hbEVycm9yQ29kZSIsIkV4dGVybmFsUmVxdWVzdFByb21pc2VTdGF0dXMiLCJUaGVtZU5hbWVzIiwiTkVUV09SS19FUlJPUiIsIk5FVFdPUktfU1RBVFVTIiwiRXZtUHJvdmlkZXJFcnJvclR5cGUiLCJVbnN0YWtpbmdTdGF0dXMiLCJTdGFraW5nU3RhdHVzIiwiQ2hhaW5FZGl0U3RhbmRhcmQiLCJOb3RpZmljYXRpb25UeXBlIiwiTWFudGFQYXlFbmFibGVNZXNzYWdlIiwiTW9iaWxlT1MiLCJDUk9OX1JFRlJFU0hfUFJJQ0VfSU5URVJWQUwiLCJDUk9OX0FVVE9fUkVDT1ZFUl9ET1RTQU1BX0lOVEVSVkFMIiwiQ1JPTl9BVVRPX1JFQ09WRVJfV0VCM19JTlRFUlZBTCIsIkFDQUxBX1JFRlJFU0hfQ1JPV0RMT0FOX0lOVEVSVkFMIiwiQVNUQVJfUkVGUkVTSF9CQUxBTkNFX0lOVEVSVkFMIiwiU1VCX1RPS0VOX1JFRlJFU0hfQkFMQU5DRV9JTlRFUlZBTCIsIkNST05fUkVGUkVTSF9ORlRfSU5URVJWQUwiLCJDUk9OX1JFRlJFU0hfU1RBS0lOR19SRVdBUkRfSU5URVJWQUwiLCJDUk9OX1JFRlJFU0hfU1RBS0lOR19SRVdBUkRfRkFTVF9JTlRFUlZBTCIsIkNST05fUkVGUkVTSF9ISVNUT1JZX0lOVEVSVkFMIiwiQ1JPTl9HRVRfQVBJX01BUF9TVEFUVVMiLCJDUk9OX1JFRlJFU0hfQ0hBSU5fU1RBS0lOR19NRVRBREFUQSIsIkNST05fUkVGUkVTSF9DSEFJTl9OT01JTkFUT1JfTUVUQURBVEEiLCJDUk9OX1JFQ09WRVJfSElTVE9SWV9JTlRFUlZBTCIsIkNST05fU1lOQ19NQU5UQV9QQVkiLCJNQU5UQV9QQVlfQkFMQU5DRV9JTlRFUlZBTCIsIkFMTF9BQ0NPVU5UX0tFWSIsIkFMTF9ORVRXT1JLX0tFWSIsIkFMTF9HRU5FU0lTX0hBU0giLCJJR05PUkVfR0VUX1NVQlNUUkFURV9GRUFUVVJFU19MSVNUIiwiSUdOT1JFX1FSX1NJR05FUiIsIlhDTV9NSU5fQU1PVU5UX1JBVElPIiwiUFJFREVGSU5FRF9TVEFLSU5HX1BPT0wiLCJrdXNhbWEiLCJwb2xrYWRvdCIsIkxBTkdVQUdFIiwiQUxMT1dFRF9QQVRIIiwiUEhJU0hJTkdfUEFHRV9SRURJUkVDVCIsIkVYVEVOU0lPTl9QUkVGSVgiLCJwcm9jZXNzIiwiZW52IiwiSURfUFJFRklYIiwiUE9SVF9NT0JJTEUiLCJQT1JUX0NPTlRFTlQiLCJQT1JUX0VYVEVOU0lPTiIsIk1FU1NBR0VfT1JJR0lOX1BBR0UiLCJNRVNTQUdFX09SSUdJTl9DT05URU5UIiwiUEFTU1dPUkRfRVhQSVJZX01JTiIsIlBBU1NXT1JEX0VYUElSWV9NUyIsInJlc29sdmVBZGRyZXNzVG9Eb21haW4iLCJyZXNvbHZlRG9tYWluVG9BZGRyZXNzIiwiU3VwcG9ydGVkQ2hhaW5JZCIsIkVOU19TVUZGSVgiLCJUWkVST19JRF9TVUZGSVgiLCJBWkVST19JRF9TVUZGSVgiLCJTVVBQT1JURURfRE9NQUlOX1NVRkZJWCIsIkNIQUlOU19TVVBQT1JURURfRE9NQUlOIiwiQVpFUk9fRE9NQUlOX0NPTlRSQUNUUyIsInJlc29sdmVBemVyb0RvbWFpblRvQWRkcmVzcyIsImRvbWFpbiIsImNoYWluIiwiYXBpIiwiY2hhaW5JZCIsIkFsZXBoWmVybyIsIkFsZXBoWmVyb1Rlc3RuZXQiLCJwcmltYXJ5RG9tYWlucyIsImN1c3RvbUFwaSIsImVycm9yIiwiY29uc29sZSIsImRlYnVnIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsInJlc29sdmVBemVyb0FkZHJlc3NUb0RvbWFpbiIsInByaW1hcnlEb21haW4iLCJpc0F6ZXJvRG9tYWluIiwiaW5wdXQiLCJpbmNsdWRlcyIsImdldFN0YWtpbmdTdGF0dXNCeU5vbWluYXRpb25zIiwiX1NUQUtJTkdfRVJBX0xFTkdUSF9NQVAiLCJpc1VybCIsInBhcnNlUmF3TnVtYmVyIiwiZmV0Y2giLCJCTiIsIkJOX1pFUk8iLCJpc0V0aGVyZXVtQWRkcmVzcyIsInN1YnNjcmliZUFzdGFyU3Rha2luZ01ldGFkYXRhIiwic3Vic3RyYXRlQXBpIiwiY2FsbGJhY2siLCJxdWVyeSIsImRhcHBzU3Rha2luZyIsImN1cnJlbnRFcmEiLCJfY3VycmVudEVyYSIsImVyYSIsInRvU3RyaW5nIiwibWluRGVsZWdhdG9yU3Rha2UiLCJjb25zdHMiLCJtaW5pbXVtU3Rha2luZ0Ftb3VudCIsInVuc3Rha2luZ0RlbGF5IiwidW5ib25kaW5nUGVyaW9kIiwidW5zdGFraW5nUGVyaW9kIiwicGFyc2VJbnQiLCJ0eXBlIiwiTk9NSU5BVEVEIiwibWluU3Rha2UiLCJtYXhWYWxpZGF0b3JQZXJOb21pbmF0b3IiLCJtYXhXaXRoZHJhd2FsUmVxdWVzdFBlclZhbGlkYXRvciIsImFsbG93Q2FuY2VsVW5zdGFraW5nIiwiZ2V0QXN0YXJTdGFraW5nTWV0YWRhdGEiLCJhcHJQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJtZXRob2QiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJjYXRjaCIsInRpbWVvdXQiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhcHJSYWNlUHJvbWlzZSIsInJhY2UiLCJhcHJJbmZvIiwiY2hhaW5BcGkiLCJhbGwiLCJpc1JlYWR5IiwiZXhwZWN0ZWRSZXR1cm4iLCJzdWJzY3JpYmVBc3Rhck5vbWluYXRvck1ldGFkYXRhIiwiY2hhaW5JbmZvIiwibGVkZ2VyIiwibm9taW5hdGlvbkxpc3QiLCJ1bnN0YWtpbmdMaXN0IiwiYWxsRGFwcHNSZXEiLCJzbHVnIiwiX2FsbERhcHBzIiwiX2VyYSIsIl9zdGFrZXJJbmZvIiwiZ2VuZXJhbFN0YWtlckluZm8iLCJlbnRyaWVzIiwiYWxsRGFwcHMiLCJiblRvdGFsQWN0aXZlU3Rha2UiLCJsZW5ndGgiLCJkQXBwSW5mb01hcCIsImZvckVhY2giLCJkYXBwSW5mbyIsInRvTG93ZXJDYXNlIiwiaXRlbSIsImRhdGEiLCJ0b0h1bWFuIiwic3Rha2VkRGFwcCIsInN0YWtlRGF0YSIsInRvUHJpbWl0aXZlIiwic3Rha2VMaXN0Iiwic3Rha2VzIiwiZGFwcEFkZHJlc3MiLCJFdm0iLCJXYXNtIiwiY3VycmVudFN0YWtlIiwic2xpY2UiLCJzdGFrZWQiLCJibkN1cnJlbnRTdGFrZSIsImd0IiwiZGFwcFN0YWtpbmdTdGF0dXMiLCJndGUiLCJFQVJOSU5HX1JFV0FSRCIsIk5PVF9FQVJOSU5HIiwiYWRkIiwicHVzaCIsInN0YXR1cyIsInZhbGlkYXRvckFkZHJlc3MiLCJhY3RpdmVTdGFrZSIsInZhbGlkYXRvck1pblN0YWtlIiwidmFsaWRhdG9ySWRlbnRpdHkiLCJuYW1lIiwiaGFzVW5zdGFraW5nIiwidW5sb2NraW5nQ2h1bmtzIiwidW5ib25kaW5nSW5mbyIsInVubG9ja2luZ0NodW5rIiwiaXNDbGFpbWFibGUiLCJ1bmxvY2tFcmEiLCJyZW1haW5pbmdFcmEiLCJ3YWl0aW5nVGltZSIsIkNMQUlNQUJMRSIsIlVOTE9DS0lORyIsImNsYWltYWJsZSIsImFtb3VudCIsIk5PVF9TVEFLSU5HIiwibm9taW5hdGlvbnMiLCJ1bnN0YWtpbmdzIiwic3Rha2luZ1N0YXR1cyIsImdldEFzdGFyTm9taW5hdG9yTWV0YWRhdGEiLCJfbGVkZ2VyIiwiZ2V0QXN0YXJEYXBwc0luZm8iLCJuZXR3b3JrS2V5IiwicmF3TWF4U3Rha2VyUGVyQ29udHJhY3QiLCJtYXhOdW1iZXJPZlN0YWtlcnNQZXJDb250cmFjdCIsImFsbERhcHBzSW5mbyIsIm1heFN0YWtlclBlckNvbnRyYWN0IiwibWFwIiwiZGFwcCIsImRhcHBOYW1lIiwiZGFwcEljb24iLCJpY29uVXJsIiwiY29udHJhY3RQYXJhbSIsIl9jb250cmFjdEluZm8iLCJjb250cmFjdEVyYVN0YWtlIiwiY29udHJhY3RJbmZvIiwidG90YWxTdGFrZSIsInN0YWtlckNvdW50IiwidG90YWwiLCJudW1iZXJPZlN0YWtlcnMiLCJjb21taXNzaW9uIiwib3duU3Rha2UiLCJvdGhlclN0YWtlIiwibm9taW5hdG9yQ291bnQiLCJibG9ja2VkIiwiaXNWZXJpZmllZCIsIm1pbkJvbmQiLCJpY29uIiwiaWRlbnRpdHkiLCJpc0Nyb3dkZWQiLCJnZXRBc3RhckJvbmRpbmdFeHRyaW5zaWMiLCJiaW5hcnlBbW91bnQiLCJkYXBwUGFyYW0iLCJ0eCIsImJvbmRBbmRTdGFrZSIsImdldEFzdGFyVW5ib25kaW5nRXh0cmluc2ljIiwiYXBpUHJvbWlzZSIsInVuYm9uZEFuZFVuc3Rha2UiLCJnZXRBc3RhcldpdGhkcmF3YWxFeHRyaW5zaWMiLCJ3aXRoZHJhd1VuYm9uZGVkIiwiZ2V0QXN0YXJDbGFpbVJld2FyZEV4dHJpbnNpYyIsIl9zdGFrZWREYXBwcyIsInRyYW5zYWN0aW9ucyIsIm51bWJlck9mVW5jbGFpbWVkRXJhIiwibWF4VHgiLCJpIiwiYm5TdGFrZWQiLCJyZXBsYWNlQWxsIiwicGFyc2VkRXJhIiwiZXEiLCJuZXh0RXJhRGF0YSIsIm5leHRFcmEiLCJpc0xhc3RFcmEiLCJlcmFUb0NsYWltIiwiTWF0aCIsIm1pbiIsImNsYWltU3Rha2VyIiwidXRpbGl0eSIsImJhdGNoIiwiZ2V0QXN0YXJXaXRoZHJhd2FibGUiLCJub21pbmF0b3JNZXRhZGF0YSIsInVuc3Rha2luZ0luZm8iLCJibldpdGhkcmF3YWJsZSIsInVuc3Rha2luZyIsIl9LTk9XTl9DSEFJTl9JTkZMQVRJT05fUEFSQU1TIiwiX1NUQUtJTkdfQ0hBSU5fR1JPVVAiLCJfU1VCU1RSQVRFX0RFRkFVTFRfSU5GTEFUSU9OX1BBUkFNUyIsIl9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvIiwiZGV0ZWN0VHJhbnNsYXRlIiwicmVmb3JtYXRBZGRyZXNzIiwiYmFsYW5jZUZvcm1hdHRlciIsImZvcm1hdE51bWJlciIsInQiLCJCTl9CSUxMSU9OIiwiQk5fSFVORFJFRCIsIkJOX01JTExJT04iLCJCTl9USE9VU0FORCIsImJuVG9VOGEiLCJzdHJpbmdUb1U4YSIsInU4YUNvbmNhdCIsIlBhbGxldFBhcmFjaGFpblN0YWtpbmdSZXF1ZXN0VHlwZSIsInBhcnNlUG9vbFN0YXNoQWRkcmVzcyIsImluZGV4IiwicG9vbElkIiwicG9vbHNQYWxsZXRJZCIsIk1vZFByZWZpeCIsIlUzMk9wdHMiLCJiaXRMZW5ndGgiLCJpc0xlIiwiRW1wdHlIMjU2IiwiVWludDhBcnJheSIsInJlZ2lzdHJ5IiwiY3JlYXRlVHlwZSIsInRyYW5zZm9ybVBvb2xOYW1lIiwicmVwbGFjZSIsInBhcnNlSWRlbnRpdHkiLCJpZGVudGl0eUluZm8iLCJkaXNwbGF5TmFtZSIsImluZm8iLCJkaXNwbGF5IiwiUmF3Iiwid2ViIiwicmlvdCIsInR3aXR0ZXIiLCJzdGFydHNXaXRoIiwiZ2V0SW5mbGF0aW9uUGFyYW1zIiwiY2FsY0luZmxhdGlvblVuaWZvcm1FcmFQYXlvdXQiLCJ0b3RhbElzc3VhbmNlIiwieWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnMiLCJ0b3RhbElzc3VhbmNlSW5Ub2tlbnMiLCJkaXYiLCJ0b051bWJlciIsImNhbGNJbmZsYXRpb25SZXdhcmRDdXJ2ZSIsIm1pbkluZmxhdGlvbiIsInN0YWtlZEZyYWN0aW9uIiwiaWRlYWxTdGFrZSIsImlkZWFsSW50ZXJlc3QiLCJmYWxsb2ZmIiwicG93IiwiY2FsY3VsYXRlSW5mbGF0aW9uIiwidG90YWxFcmFTdGFrZSIsIm51bUF1Y3Rpb25zIiwiaW5mbGF0aW9uUGFyYW1zIiwiYXVjdGlvbkFkanVzdCIsImF1Y3Rpb25NYXgiLCJtYXhJbmZsYXRpb24iLCJzdGFrZVRhcmdldCIsIm11bCIsImFsZXBoIiwiY2FsY3VsYXRlQ2hhaW5TdGFrZWRSZXR1cm4iLCJpbmZsYXRpb24iLCJzdGFrZWRSZXR1cm4iLCJjYWxjdWxhdGVBbGVwaFplcm9WYWxpZGF0b3JSZXR1cm4iLCJjaGFpblN0YWtlZFJldHVybiIsImNhbGN1bGF0ZVRlcm5vYVZhbGlkYXRvclJldHVybiIsInJld2FyZFBlclZhbGlkYXRvciIsInZhbGlkYXRvclN0YWtlIiwicGVyY2VudFJld2FyZEZvck5vbWluYXRvcnMiLCJyZXdhcmRGb3JOb21pbmF0b3JzIiwic3Rha2VSYXRpbyIsImNhbGN1bGF0ZVZhbGlkYXRvclN0YWtlZFJldHVybiIsInRvdGFsVmFsaWRhdG9yU3Rha2UiLCJhdmdTdGFrZSIsImJuQWRqdXN0ZWQiLCJhZGp1c3RlZCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJnZXRDb21taXNzaW9uIiwiY29tbWlzc2lvblN0cmluZyIsInBhcnNlRmxvYXQiLCJzcGxpdCIsImdldFBhcmFDdXJyZW50SW5mbGF0aW9uIiwidG90YWxTdGFrZWQiLCJpbmZsYXRpb25Db25maWciLCJleHBlY3RNaW4iLCJleHBlY3QiLCJleHBlY3RNYXgiLCJtYXgiLCJpbmZsYXRpb25TdHJpbmciLCJhbm51YWwiLCJpZGVhbCIsImlzU2hvd05vbWluYXRpb25CeVZhbGlkYXRvciIsImFtcGxpdHVkZSIsImFzdGFyIiwicGFyYSIsImdldEJvbmRlZFZhbGlkYXRvcnMiLCJib25kZWRWYWxpZGF0b3JzIiwibm9taW5hdGlvbkNvdW50Iiwibm9taW5hdGlvbiIsImlzVW5zdGFrZUFsbCIsInNlbGVjdGVkVmFsaWRhdG9yIiwidW5zdGFrZUFtb3VudCIsInBhcnNlZFZhbGlkYXRvckFkZHJlc3MiLCJwYXJzZWRTZWxlY3RlZFZhbGlkYXRvciIsIlN0YWtpbmdBY3Rpb24iLCJnZXRTdGFraW5nQXZhaWxhYmxlQWN0aW9uc0J5Q2hhaW4iLCJQT09MRUQiLCJTVEFLRSIsIlVOU1RBS0UiLCJXSVRIRFJBVyIsIkNMQUlNX1JFV0FSRCIsIkNBTkNFTF9VTlNUQUtFIiwiZ2V0U3Rha2luZ0F2YWlsYWJsZUFjdGlvbnNCeU5vbWluYXRvciIsInVuY2xhaW1lZFJld2FyZCIsInJlc3VsdCIsImJuQWN0aXZlU3Rha2UiLCJpc0FzdGFyTmV0d29yayIsImlzQW1wbGl0dWRlTmV0d29yayIsImJuVW5jbGFpbWVkUmV3YXJkIiwiaGFzQ2xhaW1hYmxlIiwic29tZSIsImlzQWN0aW9uRnJvbVZhbGlkYXRvciIsInN0YWtpbmdUeXBlIiwiZ2V0V2l0aGRyYXdhbEluZm8iLCJpc1plcm8iLCJpbnZhbGlkRGVsZWdhdGlvbkNvdW50IiwiUEFSVElBTExZX0VBUk5JTkciLCJnZXRWYWxpZGF0b3JMYWJlbCIsInJlbGF5IiwiZ2V0TWluU3Rha2VFcnJvck1lc3NhZ2UiLCJibk1pblN0YWtlIiwidG9rZW5JbmZvIiwibnVtYmVyIiwiZGVjaW1hbHMiLCJ0b2tlblN5bWJvbCIsInN5bWJvbCIsImdldE1heFZhbGlkYXRvckVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJsYWJlbCIsImdldEV4aXN0VW5zdGFrZUVycm9yTWVzc2FnZSIsImlzU3Rha2VNb3JlIiwiX0RFRkFVTFRfQ0hBSU5TIiwiX1N1YnN0cmF0ZUNoYWluVHlwZSIsIkFQSV9BVVRPX0NPTk5FQ1RfTVMiLCJBUElfQ09OTkVDVF9USU1FT1VUIiwiQVBJX01BWF9SRVRSWSIsIl9BUElfT1BUSU9OU19DSEFJTl9HUk9VUCIsImFjYWxhIiwidHVyaW5nIiwiYXZhaWwiLCJfUFJFREVGSU5FRF9TSU5HTEVfTU9ERVMiLCJzdWJzcGFjZSIsIm5ldHdvcmtLZXlzIiwidGhlbWUiLCJTVUJTUEFDRSIsImF1dG9UcmlnZ2VyRG9tYWluIiwiX1BVUkVfRVZNX0NIQUlOUyIsIl9CQUxBTkNFX0NIQUlOX0dST1VQIiwia2ludHN1Z2kiLCJnZW5zaGlybyIsImVxdWlsaWJyaXVtX3BhcmFjaGFpbiIsImJpZnJvc3QiLCJzdGF0ZW1pbmUiLCJfQkFMQU5DRV9UT0tFTl9HUk9VUCIsImNyYWIiLCJiaXRjb3VudHJ5IiwiX05GVF9DSEFJTl9HUk9VUCIsImthcnVyYSIsInJtcmsiLCJzdGF0ZW1pbnQiLCJ1bmlxdWVfbmV0d29yayIsInZhcmEiLCJraWx0Iiwibm9taW5hdGlvblBvb2wiLCJ0ZXJub2EiLCJhbGVwaFRlc3QiLCJ3ZXN0ZW5kIiwiaHlkcmFkeCIsImRlZmF1bHQiLCJtb29uYmVhbSIsIm1vb25yaXZlciIsIm1vb25iYXNlIiwidHVyaW5nU3RhZ2luZyIsInNoaWRlbiIsInNoaWJ1eWEiLCJiaWZyb3N0X3Rlc3RuZXQiLCJjYWxhbWFyaSIsImNhbGFtYXJpX3Rlc3QiLCJhbXBsaXR1ZGVfdGVzdCIsInBlbmR1bHVtIiwia2lsdF9wZXJlZ3JpbmUiLCJlZGdld2FyZSIsImthdGUiLCJjcmVkaXRjb2luIiwidmFyYV9uZXR3b3JrIiwiX1BBUkFDSEFJTl9JTkZMQVRJT05fRElTVFJJQlVUSU9OIiwicmV3YXJkIiwiY29sbGF0b3JDb21taXNzaW9uIiwiYm9uZFJlc2VydmUiLCJfQUxFUEhfREVGQVVMVF9VTklGT1JNX0VSQV9QQVlPVVRfUEFSQU1TIiwiZG9ja19wb3MiLCJuZWF0Y29pbiIsIm5mdF9tYXJ0IiwiX1RSQU5TRkVSX05PVF9TVVBQT1JURURfQ0hBSU5TIiwiX1RSQU5TRkVSX0NIQUlOX0dST1VQIiwicmlvY2hhaW4iLCJzb3JhX3N1YnN0cmF0ZSIsIl9CQUxBTkNFX1BBUlNJTkdfQ0hBSU5fR1JPVVAiLCJib2JhYmVhbSIsIl9NQU5UQV9aS19DSEFJTl9HUk9VUCIsIl9aS19BU1NFVF9QUkVGSVgiLCJfREVGQVVMVF9NQU5UQV9aS19DSEFJTiIsIl9YQ01fQ0hBSU5fR1JPVVAiLCJwb2xrYWRvdFhjbSIsInhjbVBhbGxldCIsIl9YQ01fVFlQRSIsIlJQIiwiUkVMQVlDSEFJTiIsIlBBUkFDSEFJTiIsIlBQIiwiUFIiLCJfREVGQVVMVF9BQ1RJVkVfQ0hBSU5TIiwiRVZNX1BBU1NfQ09OTkVDVF9TVEFUVVMiLCJFVk1fUkVGT1JNQVRfREVDSU1BTFMiLCJUQVJHRVRfQlJBTkNIIiwiTk9ERV9FTlYiLCJfQ0hBSU5fSU5GT19TUkMiLCJfQ0hBSU5fQVNTRVRfU1JDIiwiX0FTU0VUX1JFRl9TUkMiLCJfTVVMVElfQ0hBSU5fQVNTRVRfU1JDIiwiX0NIQUlOX0xPR09fTUFQX1NSQyIsIl9BU1NFVF9MT0dPX01BUF9TUkMiLCJDaGFpbkxvZ29NYXAiLCJfQ0hBSU5fVkFMSURBVElPTl9FUlJPUiIsIl9Bc3NldFR5cGUiLCJfQ2hhaW5Db25uZWN0aW9uU3RhdHVzIiwiX0NVU1RPTV9QUkVGSVgiLCJfRlVOR0lCTEVfQ09OVFJBQ1RfU1RBTkRBUkRTIiwiRVJDMjAiLCJQU1AyMiIsIl9ORlRfQ09OVFJBQ1RfU1RBTkRBUkRTIiwiUFNQMzQiLCJFUkM3MjEiLCJfU01BUlRfQ09OVFJBQ1RfU1RBTkRBUkRTIiwiX0Fzc2V0UmVmUGF0aCIsIl9pc0N1c3RvbUNoYWluIiwiX2lzQ3VzdG9tQXNzZXQiLCJfZ2V0Q3VzdG9tQXNzZXRzIiwiYXNzZXRSZWdpc3RyeSIsImZpbHRlcmVkQXNzZXRNYXAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjaGFpbkFzc2V0IiwiX2lzRXF1YWxDb250cmFjdEFkZHJlc3MiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiX2lzRXF1YWxTbWFydENvbnRyYWN0QXNzZXQiLCJhc3NldDEiLCJhc3NldDIiLCJjb250cmFjdDEiLCJtZXRhZGF0YSIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0MiIsImFzc2V0VHlwZSIsIm9yaWdpbkNoYWluIiwiX2lzUHVyZUV2bUNoYWluIiwiZXZtSW5mbyIsInN1YnN0cmF0ZUluZm8iLCJfaXNQdXJlU3Vic3RyYXRlQ2hhaW4iLCJfZ2V0T3JpZ2luQ2hhaW5PZkFzc2V0IiwiYXNzZXRTbHVnIiwiYXJyIiwiZW5kIiwiZmluZEluZGV4Iiwic3RyIiwiam9pbiIsIl9nZXRDb250cmFjdEFkZHJlc3NPZlRva2VuIiwiX2lzVG9rZW5UcmFuc2ZlcnJlZEJ5RXZtIiwiX2lzTmF0aXZlVG9rZW4iLCJfY2hlY2tTbWFydENvbnRyYWN0U3VwcG9ydEJ5Q2hhaW4iLCJjb250cmFjdFR5cGUiLCJzdXBwb3J0U21hcnRDb250cmFjdCIsIl9nZXRUb2tlbk9uQ2hhaW5Bc3NldElkIiwiYXNzZXRJZCIsIl9nZXRUb2tlbk9uQ2hhaW5JbmZvIiwib25DaGFpbkluZm8iLCJfZ2V0VG9rZW5NaW5BbW91bnQiLCJtaW5BbW91bnQiLCJfaXNDaGFpbkV2bUNvbXBhdGlibGUiLCJOQVRJVkUiLCJfaXNOYXRpdmVUb2tlbkJ5U2x1ZyIsInRva2VuU2x1ZyIsIl9pc1NtYXJ0Q29udHJhY3RUb2tlbiIsIl9pc1N1YnN0cmF0ZUNoYWluIiwiX2dldEV2bUNoYWluSWQiLCJldm1DaGFpbklkIiwiX2dldFN1YnN0cmF0ZVBhcmFJZCIsInBhcmFJZCIsIl9nZXRTdWJzdHJhdGVSZWxheVBhcmVudCIsInJlbGF5U2x1ZyIsIl9nZXRTdWJzdHJhdGVHZW5lc2lzSGFzaCIsImdlbmVzaXNIYXNoIiwiX2lzQ2hhaW5TdXBwb3J0U3Vic3RyYXRlU3Rha2luZyIsInN1cHBvcnRTdGFraW5nIiwiX2lzQ2hhaW5FbmFibGVkIiwiY2hhaW5TdGF0ZSIsImFjdGl2ZSIsIl9nZXRDaGFpblN1YnN0cmF0ZUFkZHJlc3NQcmVmaXgiLCJhZGRyZXNzUHJlZml4IiwiX2lzQ2hhaW5TdXBwb3J0TmF0aXZlTmZ0IiwiaGFzTmF0aXZlTmZ0IiwiX2lzQ2hhaW5TdXBwb3J0RXZtTmZ0IiwiX2lzQ2hhaW5TdXBwb3J0V2FzbU5mdCIsIl9nZXROZnRUeXBlc1N1cHBvcnRlZEJ5Q2hhaW4iLCJfZ2V0VG9rZW5UeXBlc1N1cHBvcnRlZEJ5Q2hhaW4iLCJfZ2V0Q2hhaW5OYXRpdmVUb2tlblNsdWciLCJfaXNMb2NhbFRva2VuIiwiTE9DQUwiLCJfaXNUb2tlbkV2bVNtYXJ0Q29udHJhY3QiLCJfaXNUb2tlbldhc21TbWFydENvbnRyYWN0IiwiX2lzQXNzZXRTbWFydENvbnRyYWN0TmZ0IiwiYXNzZXRJbmZvIiwiX3BhcnNlQXNzZXRSZWZLZXkiLCJvcmlnaW5Ub2tlblNsdWciLCJkZXN0aW5hdGlvblRva2VuU2x1ZyIsIl9pc1hjbVBhdGhTdXBwb3J0ZWQiLCJhc3NldFJlZk1hcCIsImFzc2V0UmVmIiwicGF0aCIsIlhDTSIsIl9nZXRYY21Bc3NldFR5cGUiLCJfZ2V0WGNtQXNzZXRJZCIsIl9nZXRYY21Bc3NldE11bHRpbG9jYXRpb24iLCJtdWx0aWxvY2F0aW9uIiwiX2dldFhjbVRyYW5zZmVyVHlwZSIsIm9yaWdpbkNoYWluSW5mbyIsImRlc3RpbmF0aW9uQ2hhaW5JbmZvIiwiY2hhaW5UeXBlIiwiX2lzU3Vic3RyYXRlUmVsYXlDaGFpbiIsIl9pc1N1YnN0cmF0ZVBhcmFDaGFpbiIsIl9nZXRFdm1BYmlFeHBsb3JlciIsImFiaUV4cGxvcmVyIiwiX2lzQXNzZXRWYWx1YWJsZSIsImhhc1ZhbHVlIiwiX2dldE11bHRpQ2hhaW5Bc3NldCIsIm11bHRpQ2hhaW5Bc3NldCIsIl9nZXRBc3NldFByaWNlSWQiLCJwcmljZUlkIiwiX2dldE11bHRpQ2hhaW5Bc3NldFByaWNlSWQiLCJfZ2V0QXNzZXRTeW1ib2wiLCJfZ2V0TXVsdGlDaGFpbkFzc2V0U3ltYm9sIiwiX2dldEFzc2V0T3JpZ2luQ2hhaW4iLCJfZ2V0Q2hhaW5OYW1lIiwiX2dldEFzc2V0RGVjaW1hbHMiLCJfZ2V0QmxvY2tFeHBsb3JlckZyb21DaGFpbiIsImJsb2NrRXhwbG9yZXIiLCJlbmRzV2l0aCIsIl9wYXJzZU1ldGFkYXRhRm9yU21hcnRDb250cmFjdEFzc2V0IiwiX2lzQ2hhaW5UZXN0TmV0IiwiaXNUZXN0bmV0IiwiX2lzQXNzZXRGdW5naWJsZVRva2VuIiwiVU5LTk9XTiIsIl9nZXRDcm93ZGxvYW5VcmxGcm9tQ2hhaW4iLCJjcm93ZGxvYW5VcmwiLCJfaXNDdXN0b21Qcm92aWRlciIsInByb3ZpZGVyS2V5IiwiX2dlbmVyYXRlQ3VzdG9tUHJvdmlkZXJLZXkiLCJmaW5kQ2hhaW5JbmZvQnlIYWxmR2VuZXNpc0hhc2giLCJjaGFpbk1hcCIsImhhbGZHZW5lc2lzSGFzaCIsInN1YnN0cmluZyIsImZpbmRDaGFpbkluZm9CeUNoYWluSWQiLCJfaXNNYW50YVprQXNzZXQiLCJUQVJHRVRfRU5WIiwiREVGQVVMVF9USEVNRSIsIkRBUksiLCJERUZBVUxUX05PVElGSUNBVElPTl9UWVBFIiwiREVGQVVMVF9BVVRPX0xPQ0tfVElNRSIsIkRFRkFVTFRfVU5MT0NLX1RZUEUiLCJBTFdBWVNfUkVRVUlSRUQiLCJXSEVOX05FRURFRCIsIkRFRkFVTFRfQ0hBSU5fUEFUUk9MX0VOQUJMRSIsIkRFRkFVTFRfTEFOR1VBR0UiLCJERUZBVUxUX1NIT1dfWkVST19CQUxBTkNFIiwiREVGQVVMVF9TSE9XX0JBTEFOQ0UiLCJERUZBVUxUX0FMTF9MT0dPIiwiREVGQVVMVF9DQU1FUkFfRU5BQkxFIiwiREVGQVVMVF9TRVRUSU5HIiwibGFuZ3VhZ2UiLCJicm93c2VyQ29uZmlybWF0aW9uVHlwZSIsImlzU2hvd1plcm9CYWxhbmNlIiwiaXNTaG93QmFsYW5jZSIsImFjY291bnRBbGxMb2dvIiwidW5sb2NrVHlwZSIsImNhbWVyYSIsInRpbWVBdXRvTG9jayIsImVuYWJsZUNoYWluUGF0cm9sIiwid2FsbGV0UmVmZXJlbmNlIiwicGFyc2VUcmFuc2FjdGlvbkRhdGEiLCJnZXRCbG9ja0V4cGxvcmVyQWNjb3VudFJvdXRlIiwiZXhwbG9yZXJMaW5rIiwiZ2V0QmxvY2tFeHBsb3JlclR4Um91dGUiLCJnZXRFeHBsb3JlckxpbmsiLCJ2YWx1ZSIsInJvdXRlIiwiRUlQMTU1X1NJR05JTkdfTUVUSE9EUyIsIlBPTEtBRE9UX1NJR05JTkdfTUVUSE9EUyIsImlzTW9iaWxlIiwiUFJPSkVDVF9JRF9FWFRFTlNJT04iLCJQUk9KRUNUX0lEX01PQklMRSIsIlJFTEFZX1VSTCIsIkRFRkFVTFRfV0FMTEVUX0NPTk5FQ1RfT1BUSU9OUyIsImxvZ2dlciIsInByb2plY3RJZCIsInJlbGF5VXJsIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJpY29ucyIsIkFMTF9XQUxMRVRfQ09OTkVDVF9FVkVOVCIsIldBTExFVF9DT05ORUNUX1NVUFBPUlRFRF9NRVRIT0RTIiwiUE9MS0FET1RfU0lHTl9NRVNTQUdFIiwiUE9MS0FET1RfU0lHTl9UUkFOU0FDVElPTiIsIkVUSF9TRU5EX1RSQU5TQUNUSU9OIiwiUEVSU09OQUxfU0lHTiIsIkVUSF9TSUdOX1RZUEVEX0RBVEFfVjEiLCJFVEhfU0lHTl9UWVBFRF9EQVRBX1YzIiwiRVRIX1NJR05fVFlQRURfREFUQV9WNCIsIldBTExFVF9DT05ORUNUX1JFUVVFU1RfS0VZIiwiV0FMTEVUX0NPTk5FQ1RfRUlQMTU1X05BTUVTUEFDRSIsIldBTExFVF9DT05ORUNUX1BPTEtBRE9UX05BTUVTUEFDRSIsIldBTExFVF9DT05ORUNUX1NVUFBPUlRfTkFNRVNQQUNFUyIsImdldFdDSWQiLCJEYXRlIiwibm93IiwiY29udmVydENvbm5lY3RSZXF1ZXN0IiwicmVxdWVzdCIsImlzSW50ZXJuYWwiLCJwYXJhbXMiLCJwcm9wb3NlciIsImNvbnZlcnROb3RTdXBwb3J0UmVxdWVzdCIsInBhcnNlUmVxdWVzdFBhcmFtcyIsImdldEVpcDE1NU1lc3NhZ2VBZGRyZXNzIiwicGFyYW0iLCJFVEhfU0lHTl9UWVBFRF9EQVRBIiwiRVRIX1NJR04iLCJwMSIsInAyIiwiaXNXYWxsZXRDb25uZWN0UmVxdWVzdCIsInByZWZpeCIsImlzUHJvcG9zYWxFeHBpcmVkIiwidGltZU51bSIsImV4cGlyeSIsImV4cGlyZVRpbWUiLCJnZXRUaW1lIiwiaXNTdXBwb3J0V2FsbGV0Q29ubmVjdE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsImlzU3VwcG9ydFdhbGxldENvbm5lY3RDaGFpbiIsImNoYWluSW5mb01hcCIsInVuaXF1ZVN0cmluZ0FycmF5IiwiYXJyYXkiLCJ2Iiwia2V5cyIsImNhbkRlcml2ZSIsImRldGVjdFJ1bnRpbWVFbnZpcm9ubWVudCIsIndpbmRvdyIsImRvY3VtZW50IiwiZW52aXJvbm1lbnQiLCJXZWIiLCJ2ZXJzaW9uIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaG9zdCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJzZWxmIiwiaW1wb3J0U2NyaXB0cyIsIlNlcnZpY2VXb3JrZXIiLCJ2ZXJzaW9ucyIsIm5vZGUiLCJOb2RlIiwiY2hyb21lIiwicnVudGltZSIsIkV4dGVuc2lvbkNocm9tZSIsImdldE1hbmlmZXN0IiwiYnJvd3NlciIsIkV4dGVuc2lvbkZpcmVmb3giLCJXb3JrZXJHbG9iYWxTY29wZSIsIldlYldvcmtlciIsIlVua25vd24iLCJSdW50aW1lSW5mbyIsImdldE9TIiwicGxhdGZvcm0iLCJ1c2VyQWdlbnREYXRhIiwibWFjb3NQbGF0Zm9ybXMiLCJ3aW5kb3dzUGxhdGZvcm1zIiwiaW9zUGxhdGZvcm1zIiwib3MiLCJpbmRleE9mIiwidGVzdCIsIk1PRFVMRV9TVVBQT1JUIiwiTUFOVEFfWksiLCJCaWdOIiwiZXRoZXJzIiwiaGV4U3RyaXBQcmVmaXgiLCJudW1iZXJUb0hleCIsImhleFRvTnVtYmVyU3RyaW5nIiwicyIsInRlbXAiLCJpc05hTiIsIlRyYW5zYWN0aW9uIiwiY29uc3RydWN0b3IiLCJub25jZSIsImdhc1ByaWNlIiwiZ2FzIiwidG8iLCJldGhlcmV1bUNoYWluSWQiLCJpc1NhZmUiLCJhbnlOdW1iZXJUb0JOIiwiY3JlYXRlVHJhbnNhY3Rpb25Gcm9tUkxQIiwicmxwIiwidHJhbnNhY3Rpb24iLCJmcm9tIiwiZ2FzTGltaXQiLCJlIiwibG9nIiwic2lnbmF0dXJlVG9IZXgiLCJzaWciLCJyIiwiaGV4UiIsImhleFMiLCJoZXhWIiwiY291bnRlciIsImdldElkIiwiYXNzZXJ0IiwiaGV4VG9VOGEiLCJpc0hleCIsImRlY29kZUFkZHJlc3MiLCJlbmNvZGVBZGRyZXNzIiwiZXRoZXJldW1FbmNvZGUiLCJub3REZWYiLCJ4IiwiaXNEZWYiLCJub25FbXB0eUFyciIsIkFycmF5IiwiaXNBcnJheSIsImlzRW1wdHlBcnJheSIsImlzQWNjb3VudEFsbCIsIm5ldHdvcmtQcmVmaXgiLCJpc0V0aGVyZXVtIiwicHVibGljS2V5Iiwid2FybiIsImZpbHRlckFkZHJlc3NCeU5ldHdvcmtLZXkiLCJhZGRyZXNzZXMiLCJmaWx0ZXIiLCJjYXRlZ29yeUFkZHJlc3NlcyIsInN1YnN0cmF0ZUFkZHJlc3NlcyIsImV2bUFkZHJlc3NlcyIsImNhdGVnb3J5TmV0d29ya3MiLCJuZXR3b3JrcyIsImNvbnZlcnRUb0V2bUFkZHJlc3MiLCJzdWJzdHJhdGVBZGRyZXNzIiwiYWRkcmVzc0J5dGVzIiwiQnVmZmVyIiwic3ViYXJyYXkiLCJ0YXJnZXRTdHJpbmciLCJVUkwiLCJfIiwiaW5KZXN0VGVzdCIsIkpFU1RfV09SS0VSX0lEIiwicGFyc2VJcGZzTGluayIsImlwZnNMaW5rIiwiaGV4VG9TdHIiLCJidWYiLCJoZXhTdGFydCIsInN0ckxlbiIsImNoIiwibnVtIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwidXRmMTZUb1N0cmluZyIsInVJbnQxNkFycmF5IiwiaGV4VG9VVEYxNiIsImhleCIsImlzVmFsaWRTdWJzdHJhdGVBZGRyZXNzIiwidG9Vbml0IiwiYmFsYW5jZSIsInN1bUJOIiwiaW5wdXRBcnIiLCJycyIsImNvbnZlcnRGdW5kU3RhdHVzIiwiQ09NUExFVEVEIiwiT05HT0lORyIsIkZBSUxFRCIsImlzQWRkcmVzc2VzRXF1YWwiLCJwcmV2QWRkcmVzc2VzIiwiaXNWYWxpZFByb3ZpZGVyIiwicHJvdmlkZXIiLCJnZXRDdXJyZW50UHJvdmlkZXIiLCJjdXJyZW50UHJvdmlkZXIiLCJjdXN0b21Qcm92aWRlcnMiLCJwcm92aWRlcnMiLCJnZXROZnRQcm92aWRlciIsIm5mdFByb3ZpZGVyIiwibWVyZ2VOZXR3b3JrUHJvdmlkZXJzIiwiY3VzdG9tTmV0d29yayIsInByZWRlZmluZWROZXR3b3JrIiwicGFyc2VkQ3VzdG9tUHJvdmlkZXJzIiwiY3VycmVudFByb3ZpZGVyTWV0aG9kIiwicGFyc2VkUHJvdmlkZXJLZXkiLCJjdXN0b21Qcm92aWRlciIsImV4aXN0Iiwia2V5IiwicGFyc2VkUHJvdmlkZXIiLCJmaWx0ZXJBbmRTb3J0aW5nQWNjb3VudEJ5QXV0aFR5cGUiLCJhY2NvdW50cyIsImFjY291bnRBdXRoVHlwZSIsInNvcnRpbmciLCJhY2MiLCJzb3J0IiwiYWNjMiIsImlzU2FtZUFkZHJlc3MiLCJnZXREb21haW5Gcm9tVXJsIiwid2FpdFRpbWVvdXQiLCJtcyIsInN0cmlwVXJsIiwicGFydHMiLCJsYXp5TWFwIiwicmVtb3ZlTGF6eSIsImFkZExhenkiLCJsYXp5VGltZSIsIm1heExhenlUaW1lIiwiZmlyZU9uRmlyc3QiLCJleGlzdGVkIiwibGFzdEZpcmUiLCJCaWdOdW1iZXIiLCJCTl9URU4iLCJjbGVhclplcm8iLCJOVU1fMVQiLCJUTElNIiwiTlVNXzFCIiwiQkxJTSIsIk5VTV8xTSIsIk5VTV8xMDBNIiwiYWJzR3RlT25lIiwiYWJzIiwibWluTnVtYmVyRm9ybWF0IiwibWF4TnVtYmVyRm9ybWF0IiwiaW50IiwiZGVjaW1hbCIsIl9kZWNpbWFsIiwiaW50TnVtYmVyIiwiZGl2aWRlZEJ5IiwidG9GaXhlZCIsImN1cnJlbnQiLCJtZXROb3RaZXJvIiwiX2NoYXIiLCJQUkVERUZJTkVEX0ZPUk1BVFRFUiIsInRvQk5TdHJpbmciLCJyYXciLCJtdWx0aXBsaWVkQnkiLCJmb3JtYXR0ZXIiLCJjcmVhdGVQcm9taXNlSGFuZGxlciIsIl9yZXNvbHZlIiwiX3JlamVjdCIsInByb21pc2UiLCJyZWplY3QiLCJNZXRhZGF0YSIsIlR5cGVSZWdpc3RyeSIsImNyZWF0ZVJlZ2lzdHJ5IiwicmF3TWV0YWRhdGEiLCJzZXRNZXRhZGF0YSIsInNldENoYWluUHJvcGVydGllcyIsInNzNThGb3JtYXQiLCJ0b2tlbkRlY2ltYWxzIiwiYmFzZTY0RGVjb2RlIiwicGFja2FnZUluZm8iLCJkZWZpbml0aW9ucyIsIk1hcCIsImV4cGFuZGVkIiwibWV0YWRhdGFFeHBhbmQiLCJkZWZpbml0aW9uIiwiaXNQYXJ0aWFsIiwiY2FjaGVkIiwiZ2V0Iiwic3BlY1ZlcnNpb24iLCJtZXRhQ2FsbHMiLCJ0eXBlcyIsInVzZXJFeHRlbnNpb25zIiwicmVnaXN0ZXIiLCJoYXNNZXRhZGF0YSIsImlzVW5rbm93biIsInNldCIsImZpbmRDaGFpbiIsImRlZiIsImZpbmQiLCJhZGRNZXRhZGF0YSIsImtub3duTWV0YWRhdGEiLCJVOEFfV1JBUF9FVEhFUkVVTSIsIlU4QV9XUkFQX1BPU1RGSVgiLCJVOEFfV1JBUF9QUkVGSVgiLCJ1OGFJc1dyYXBwZWQiLCJ1OGFVbndyYXBCeXRlcyIsInU4YVdyYXBCeXRlcyIsIkVUSEVSRVVNIiwiUE9TVEZJWCIsIlBSRUZJWCIsImlzV3JhcHBlZCIsInVud3JhcEJ5dGVzIiwid3JhcEJ5dGVzIiwiZXhwb3NlR2xvYmFsIiwieGdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=