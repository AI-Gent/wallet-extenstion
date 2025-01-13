((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-base_src_koni_api_dotsama_domain_ts-extension-base_src_koni_api_staking_bon-7a7103"],{

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
/* harmony import */ var _custom_tokens_defaultChains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-tokens/defaultChains */ "../extension-base/src/services/chain-service/custom-tokens/defaultChains.ts");
/* harmony import */ var _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/chain-list/types */ "../../node_modules/@subwallet/chain-list/types.js");
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0




const API_AUTO_CONNECT_MS = 3000;
const API_CONNECT_TIMEOUT = 30000;
const API_MAX_RETRY = 2;
if (typeof window !== 'undefined') {
  // alert(`Default Chains: ${DEFAULT_CHAINS.join(', ')}`);
} else {
  console.log(`Default Chains: ${_custom_tokens_defaultChains__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CHAINS.join(', ')}`);
}
const _API_OPTIONS_CHAIN_GROUP = {
  acala: ['acala', 'karura', 'origintrail', 'kintsugi'],
  turing: ['turingStaging', 'turing'],
  avail: ['kate']
};
const _PREDEFINED_SINGLE_MODES = {
  subspace: {
    networkKeys: ['subspace_gemini_2a', 'subspace_test', 'subspace_gemini_3a'],
    theme: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_1__.ThemeNames.SUBSPACE,
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
  RP: `${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._SubstrateChainType.RELAYCHAIN}-${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._SubstrateChainType.PARACHAIN}`,
  // DMP
  PP: `${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._SubstrateChainType.PARACHAIN}-${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._SubstrateChainType.PARACHAIN}`,
  // HRMP
  PR: `${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._SubstrateChainType.PARACHAIN}-${_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_2__._SubstrateChainType.RELAYCHAIN}` // UMP
};

const _DEFAULT_ACTIVE_CHAINS = [..._custom_tokens_defaultChains__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CHAINS, 'vara_network'];
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

/***/ "../extension-base/src/services/chain-service/custom-tokens/defaultChains.ts":
/*!***********************************************************************************!*\
  !*** ../extension-base/src/services/chain-service/custom-tokens/defaultChains.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CHAINS": () => (/* binding */ DEFAULT_CHAINS)
/* harmony export */ });
/* eslint-disable header/header */
const DEFAULT_CHAINS = ['aigent'];

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
    return `${explorerLink}${explorerLink.endsWith('/') ? '' : '/'}query/${value}`;
  }
  if (explorerLink && value.startsWith('0x')) {
    const route = getBlockExplorerTxRoute(chainInfo);
    return `${explorerLink}${explorerLink.endsWith('/') ? '' : '/'}query/${value}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24tYmFzZV9zcmNfa29uaV9hcGlfZG90c2FtYV9kb21haW5fdHMtZXh0ZW5zaW9uLWJhc2Vfc3JjX2tvbmlfYXBpX3N0YWtpbmdfYm9uLTdhNzEwMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBMEJPLElBQUtBLGtCQUFrQjtBQVE3QixXQVJXQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtBQUFBLEdBQWxCQSxrQkFBa0IsS0FBbEJBLGtCQUFrQjtBQXVHOUI7O0FBRU8sSUFBS0MsV0FBVztBQUd0QixXQUhXQSxXQUFXO0VBQVhBLFdBQVc7RUFBWEEsV0FBVztBQUFBLEdBQVhBLFdBQVcsS0FBWEEsV0FBVztBQThEaEIsSUFBS0MsWUFBWTtBQU12QixXQU5XQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtFQUFaQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtBQUFBLEdBQVpBLFlBQVksS0FBWkEsWUFBWTtBQVFqQixJQUFLQyxRQUFRO0FBR25CLFdBSFdBLFFBQVE7RUFBUkEsUUFBUTtFQUFSQSxRQUFRO0FBQUEsR0FBUkEsUUFBUSxLQUFSQSxRQUFRO0FBS2IsSUFBS0Msa0JBQWtCO0FBSTdCLFdBSldBLGtCQUFrQjtFQUFsQkEsa0JBQWtCO0VBQWxCQSxrQkFBa0I7RUFBbEJBLGtCQUFrQjtBQUFBLEdBQWxCQSxrQkFBa0IsS0FBbEJBLGtCQUFrQjtBQWlHdkIsSUFBS0MsWUFBWTtBQUd2QixXQUhXQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtBQUFBLEdBQVpBLFlBQVksS0FBWkEsWUFBWTtBQXVIakIsSUFBS0MsZ0JBQWdCO0FBRzNCLFdBSFdBLGdCQUFnQjtFQUFoQkEsZ0JBQWdCO0VB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QUFFLE1BQU07RUFBRXplLElBQUksRUFBRSxNQUFNO0VBQUVvbkIsT0FBTyxFQUFFO0FBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTG5IO0FBQ0E7O0FBRWtJO0FBRTNILE1BQU0wTyxRQUFRLEdBQUdOLDZEQUFpQjtBQUNsQyxNQUFNTyxPQUFPLEdBQUdOLDREQUFnQjtBQUNoQyxNQUFNTyxNQUFNLEdBQUdOLDJEQUFlO0FBRTlCLE1BQU1PLFNBQVMsR0FBR04sd0RBQVk7QUFDOUIsTUFBTU8sV0FBVyxHQUFHTiwwREFBYztBQUNsQyxNQUFNTyxTQUFTLEdBQUdOLHdEQUFZOzs7Ozs7Ozs7Ozs7O0FDWHJDO0FBQ0E7O0FBRTJEO0FBRTNETyxnRUFBWSxDQUFDLFFBQVEsRUFBRUMsK0RBQWUsQ0FBQzs7Ozs7Ozs7OztBQ0x2Qzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9iYWNrZ3JvdW5kL0tvbmlUeXBlcy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvY29uc3RhbnRzL3N0YWtpbmcudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvY29uc3RhbnRzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMva29uaS9hcGkvZG90c2FtYS9kb21haW4udHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMva29uaS9hcGkvc3Rha2luZy9ib25kaW5nL2FzdGFyLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL2tvbmkvYXBpL3N0YWtpbmcvYm9uZGluZy91dGlscy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2N1c3RvbS10b2tlbnMvZGVmYXVsdENoYWlucy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2hhbmRsZXIvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvY2hhaW4tc2VydmljZS90eXBlcy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3V0aWxzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3NlcnZpY2VzL3NldHRpbmctc2VydmljZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS91dGlscy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy93YWxsZXQtY29ubmVjdC1zZXJ2aWNlL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9zZXJ2aWNlcy93YWxsZXQtY29ubmVjdC1zZXJ2aWNlL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvc2VydmljZXMvd2FsbGV0LWNvbm5lY3Qtc2VydmljZS90eXBlcy50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9hcnJheS50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy91dGlscy9jYW5EZXJpdmUudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvZXRoLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL2dldElkLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL2xhenkudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvbnVtYmVyLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL3Byb21pc2UudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tYmFzZS9zcmMvdXRpbHMvdHJhbnNsYXRlLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWNoYWlucy9zcmMvYnVuZGxlLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWNoYWlucy9zcmMvcGFja2FnZUluZm8udHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24tZGFwcC9zcmMvd3JhcEJ5dGVzLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWluamVjdC9zcmMvY3Jvc3NlbnYudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS9pZ25vcmVkfEM6XFxVc2Vyc1xcc2hhcm1cXERvd25sb2Fkc1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcbm9kZV9tb2R1bGVzXFxAc3RhYmxlbGliXFxyYW5kb21cXGxpYlxcc291cmNlfGNyeXB0byIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pL2lnbm9yZWR8QzpcXFVzZXJzXFxzaGFybVxcRG93bmxvYWRzXFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvaWdub3JlZHxDOlxcVXNlcnNcXHNoYXJtXFxEb3dubG9hZHNcXFN1YldhbGxldC1FeHRlbnNpb24tMS4xLjE3XFxTdWJXYWxsZXQtRXh0ZW5zaW9uLTEuMS4xN1xcU3ViV2FsbGV0LUV4dGVuc2lvbi0xLjEuMTdcXG5vZGVfbW9kdWxlc1xcZXRoZXJzXFxub2RlX21vZHVsZXNcXEBub2JsZVxcc2VjcDI1NmsxXFxsaWJcXGVzbXxjcnlwdG8iXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWtvbmkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0Fzc2V0UmVmLCBfQXNzZXRUeXBlLCBfQ2hhaW5Bc3NldCwgX0NoYWluSW5mbywgX011bHRpQ2hhaW5Bc3NldCB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbkVycm9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL2Vycm9ycy9UcmFuc2FjdGlvbkVycm9yJztcbmltcG9ydCB7IEF1dGhVcmxzLCBSZXNvbHZlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9oYW5kbGVycy9TdGF0ZSc7XG5pbXBvcnQgeyBBY2NvdW50QXV0aFR5cGUsIEFjY291bnRKc29uLCBBZGRyZXNzSnNvbiwgQXV0aG9yaXplUmVxdWVzdCwgQ29uZmlybWF0aW9uUmVxdWVzdEJhc2UsIFJlcXVlc3RBY2NvdW50TGlzdCwgUmVxdWVzdEFjY291bnRTdWJzY3JpYmUsIFJlcXVlc3RBY2NvdW50VW5zdWJzY3JpYmUsIFJlcXVlc3RBdXRob3JpemVDYW5jZWwsIFJlcXVlc3RBdXRob3JpemVSZWplY3QsIFJlcXVlc3RBdXRob3JpemVTdWJzY3JpYmUsIFJlcXVlc3RBdXRob3JpemVUYWIsIFJlcXVlc3RDdXJyZW50QWNjb3VudEFkZHJlc3MsIFJlc3BvbnNlQXV0aG9yaXplTGlzdCwgUmVzcG9uc2VKc29uR2V0QWNjb3VudEluZm8sIFNlZWRMZW5ndGhzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL3R5cGVzJztcbmltcG9ydCB7IF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2hhbmRsZXIvdHlwZXMnO1xuaW1wb3J0IHsgX0NoYWluU3RhdGUsIF9Fdm1BcGksIF9OZXR3b3JrVXBzZXJ0UGFyYW1zLCBfU3Vic3RyYXRlQXBpLCBfVmFsaWRhdGVDdXN0b21Bc3NldFJlcXVlc3QsIF9WYWxpZGF0ZUN1c3RvbUFzc2V0UmVzcG9uc2UsIEVuYWJsZUNoYWluUGFyYW1zLCBFbmFibGVNdWx0aUNoYWluUGFyYW1zIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3R5cGVzJztcbmltcG9ydCB7IFNXVHJhbnNhY3Rpb25SZXNwb25zZSwgU1dUcmFuc2FjdGlvblJlc3VsdCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS90eXBlcyc7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Tm90U3VwcG9ydFJlcXVlc3QsIFdhbGxldENvbm5lY3RTZXNzaW9uUmVxdWVzdCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvd2FsbGV0LWNvbm5lY3Qtc2VydmljZS90eXBlcyc7XG5pbXBvcnQgeyBJbmplY3RlZEFjY291bnQsIEluamVjdGVkQWNjb3VudFdpdGhNZXRhLCBNZXRhZGF0YURlZkJhc2UgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1pbmplY3QvdHlwZXMnO1xuaW1wb3J0IHsgS2V5cmluZ1BhaXIkSnNvbiwgS2V5cmluZ1BhaXIkTWV0YSB9IGZyb20gJ0BzdWJ3YWxsZXQva2V5cmluZy90eXBlcyc7XG5pbXBvcnQgeyBLZXlyaW5nT3B0aW9ucyB9IGZyb20gJ0BzdWJ3YWxsZXQvdWkta2V5cmluZy9vcHRpb25zL3R5cGVzJztcbmltcG9ydCB7IEtleXJpbmdBZGRyZXNzLCBLZXlyaW5nUGFpcnMkSnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvdWkta2V5cmluZy90eXBlcyc7XG5pbXBvcnQgeyBTZXNzaW9uVHlwZXMgfSBmcm9tICdAd2FsbGV0Y29ubmVjdC90eXBlcy9kaXN0L3R5cGVzL3NpZ24tY2xpZW50L3Nlc3Npb24nO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBSZXF1ZXN0QXJndW1lbnRzLCBUcmFuc2FjdGlvbkNvbmZpZyB9IGZyb20gJ3dlYjMtY29yZSc7XG5pbXBvcnQgeyBKc29uUnBjUGF5bG9hZCwgSnNvblJwY1Jlc3BvbnNlIH0gZnJvbSAnd2ViMy1jb3JlLWhlbHBlcnMnO1xuXG5pbXBvcnQgeyBTaWduZXJSZXN1bHQgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvdHlwZXMvZXh0cmluc2ljJztcbmltcG9ydCB7IEJOIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuaW1wb3J0IHsgSGV4U3RyaW5nIH0gZnJvbSAnQHBvbGthZG90L3V0aWwvdHlwZXMnO1xuaW1wb3J0IHsgS2V5cGFpclR5cGUgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8vdHlwZXMnO1xuXG5pbXBvcnQgeyBUcmFuc2FjdGlvbldhcm5pbmcgfSBmcm9tICcuL3dhcm5pbmdzL1RyYW5zYWN0aW9uV2FybmluZyc7XG5cbmV4cG9ydCBlbnVtIFJ1bnRpbWVFbnZpcm9ubWVudCB7XG4gIFdlYiA9ICdXZWInLFxuICBOb2RlID0gJ05vZGUnLFxuICBFeHRlbnNpb25DaHJvbWUgPSAnRXh0ZW5zaW9uIChDaHJvbWUpJyxcbiAgRXh0ZW5zaW9uRmlyZWZveCA9ICdFeHRlbnNpb24gKEZpcmVmb3gpJyxcbiAgV2ViV29ya2VyID0gJ1dlYiBXb3JrZXInLFxuICBTZXJ2aWNlV29ya2VyID0gJ1NlcnZpY2UgV29ya2VyJyxcbiAgVW5rbm93biA9ICdVbmtub3duJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSdW50aW1lRW52aXJvbm1lbnRJbmZvIHtcbiAgZW52aXJvbm1lbnQ6IFJ1bnRpbWVFbnZpcm9ubWVudDtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBob3N0Pzogc3RyaW5nO1xuICBwcm90b2NvbD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgVGFyZ2V0RW52aXJvbm1lbnQgPSAnZXh0ZW5zaW9uJyB8ICd3ZWJhcHAnIHwgJ3dlYi1ydW5uZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudmlyb25tZW50U3VwcG9ydCB7XG4gIE1BTlRBX1pLOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VJbmZvIHtcbiAgY2hhaW5JbmZvTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5JbmZvPjtcbiAgY2hhaW5TdGF0ZU1hcDogUmVjb3JkPHN0cmluZywgX0NoYWluU3RhdGU+O1xuICBjaGFpbkFwaU1hcDogQXBpTWFwO1xuICBjdXJyZW50QWNjb3VudEluZm86IEN1cnJlbnRBY2NvdW50SW5mbztcbiAgYXNzZXRSZWdpc3RyeTogUmVjb3JkPHN0cmluZywgX0NoYWluQXNzZXQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0U2V0dGluZyB7XG4gIHZpc2libGU6IGJvb2xlYW4sXG4gIC8vIHJlc3RyaWN0aW9ucyBvbiBhc3NldHMgY2FuIGJlIGltcGxlbWVudGVkIGxhdGVyXG59XG5cbi8vLyBSZXF1ZXN0IEF1dGhcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUmVxdWVzdFYyIGV4dGVuZHMgUmVzb2x2ZXI8UmVzdWx0UmVzb2x2ZXI+IHtcbiAgaWQ6IHN0cmluZztcbiAgaWRTdHI6IHN0cmluZztcbiAgcmVxdWVzdDogUmVxdWVzdEF1dGhvcml6ZVRhYjtcbiAgdXJsOiBzdHJpbmc7XG4gIGFjY291bnRBdXRoVHlwZTogQWNjb3VudEF1dGhUeXBlXG59XG5cbi8vLyBNYW5hZ2UgQXV0aFxuXG4vLyBHZXQgQXV0aFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBdXRob3JpemVBcHByb3ZlVjIge1xuICBpZDogc3RyaW5nO1xuICBhY2NvdW50czogc3RyaW5nW107XG59XG5cbi8vIEF1dGggQWxsIHNpdGVcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXphdGlvbkFsbCB7XG4gIGNvbm5lY3RWYWx1ZTogYm9vbGVhbjtcbn1cblxuLy8gTWFuYWdlIHNpdGUgYXV0aCAoYWxsIGFsbG93ZWQvdW5BbGxvd2VkKVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBdXRob3JpemF0aW9uIGV4dGVuZHMgUmVxdWVzdEF1dGhvcml6YXRpb25BbGwge1xuICB1cmw6IHN0cmluZztcbn1cblxuLy8gTWFuYWdlIHNpbmdsZSBhdXRoIHdpdGggc2luZ2xlIGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXV0aG9yaXphdGlvblBlckFjY291bnQgZXh0ZW5kcyBSZXF1ZXN0QXV0aG9yaXphdGlvbiB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuLy8gTWFuYWdlIHNpbmdsZSBzaXRlIHdpdGggbXVsdGkgYWNjb3VudFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBdXRob3JpemF0aW9uUGVyU2l0ZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHZhbHVlczogUmVjb3JkPHN0cmluZywgYm9vbGVhbj47XG59XG5cbi8vIE1hbmFnZSBzaXRlIGJsb2NrXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6YXRpb25CbG9jayB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbm5lY3RlZFZhbHVlOiBib29sZWFuO1xufVxuXG4vLyBGb3JnZXQgc2l0ZSBhdXRoXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEZvcmdldFNpdGUge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXN1bHRSZXNvbHZlciB7XG4gIHJlc3VsdDogYm9vbGVhbjtcbiAgYWNjb3VudHM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlamVjdFJlc29sdmVyIHtcbiAgZXJyb3I6IEVycm9yO1xuICBhY2NvdW50czogc3RyaW5nW107XG59XG5cbi8vLyBTdGFraW5nIHN1YnNjcmliZVxuXG5leHBvcnQgZW51bSBTdGFraW5nVHlwZSB7XG4gIE5PTUlOQVRFRCA9ICdub21pbmF0ZWQnLFxuICBQT09MRUQgPSAncG9vbGVkJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFraW5nUmV3YXJkSXRlbSB7XG4gIHN0YXRlOiBBUElJdGVtU3RhdGUsXG4gIG5hbWU6IHN0cmluZyxcbiAgY2hhaW46IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nLFxuICB0eXBlOiBTdGFraW5nVHlwZSxcblxuICBsYXRlc3RSZXdhcmQ/OiBzdHJpbmcsXG4gIHRvdGFsUmV3YXJkPzogc3RyaW5nLFxuICB0b3RhbFNsYXNoPzogc3RyaW5nLFxuICB1bmNsYWltZWRSZXdhcmQ/OiBzdHJpbmdcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVW5sb2NraW5nU3Rha2VJbmZvIHtcbiAgY2hhaW46IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nLFxuICB0eXBlOiBTdGFraW5nVHlwZSxcblxuICBuZXh0V2l0aGRyYXdhbDogbnVtYmVyLFxuICByZWRlZW1hYmxlOiBudW1iZXIsXG4gIG5leHRXaXRoZHJhd2FsQW1vdW50OiBudW1iZXIsXG4gIG5leHRXaXRoZHJhd2FsQWN0aW9uPzogc3RyaW5nLFxuICB2YWxpZGF0b3JBZGRyZXNzPzogc3RyaW5nIC8vIHZhbGlkYXRvciB0byB1bnN0YWtlIGZyb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFraW5nSXRlbSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgY2hhaW46IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nLFxuICB0eXBlOiBTdGFraW5nVHlwZSxcblxuICBiYWxhbmNlPzogc3RyaW5nLFxuICBhY3RpdmVCYWxhbmNlPzogc3RyaW5nLFxuICB1bmxvY2tpbmdCYWxhbmNlPzogc3RyaW5nLFxuICBuYXRpdmVUb2tlbjogc3RyaW5nLFxuICB1bml0Pzogc3RyaW5nLFxuXG4gIHN0YXRlOiBBUElJdGVtU3RhdGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFraW5nSnNvbiB7XG4gIHJlc2V0PzogYm9vbGVhbixcbiAgcmVhZHk/OiBib29sZWFuLFxuICBkZXRhaWxzOiBTdGFraW5nSXRlbVtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2luZ1Jld2FyZEpzb24ge1xuICByZWFkeTogYm9vbGVhbjtcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgU3Rha2luZ1Jld2FyZEl0ZW0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaWNlSnNvbiB7XG4gIHJlYWR5PzogYm9vbGVhbixcbiAgY3VycmVuY3k6IHN0cmluZyxcbiAgcHJpY2VNYXA6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4sXG4gIHByaWNlMjRoTWFwOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG59XG5cbmV4cG9ydCBlbnVtIEFQSUl0ZW1TdGF0ZSB7XG4gIFBFTkRJTkcgPSAncGVuZGluZycsXG4gIFJFQURZID0gJ3JlYWR5JyxcbiAgQ0FDSEVEID0gJ2NhY2hlZCcsXG4gIEVSUk9SID0gJ2Vycm9yJyxcbiAgTk9UX1NVUFBPUlQgPSAnbm90X3N1cHBvcnQnXG59XG5cbmV4cG9ydCBlbnVtIFJNUktfVkVSIHtcbiAgVkVSXzEgPSAnMS4wLjAnLFxuICBWRVJfMiA9ICcyLjAuMCdcbn1cblxuZXhwb3J0IGVudW0gQ3Jvd2Rsb2FuUGFyYVN0YXRlIHtcbiAgT05HT0lORyA9ICdvbmdvaW5nJyxcbiAgQ09NUExFVEVEID0gJ2NvbXBsZXRlZCcsXG4gIEZBSUxFRCA9ICdmYWlsZWQnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZ0SXRlbSB7XG4gIC8vIG11c3QtaGF2ZVxuICBpZDogc3RyaW5nO1xuICBjaGFpbjogc3RyaW5nO1xuICBjb2xsZWN0aW9uSWQ6IHN0cmluZztcbiAgb3duZXI6IHN0cmluZztcbiAgb3JpZ2luQXNzZXQ/OiBzdHJpbmc7XG5cbiAgbmFtZT86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGV4dGVybmFsVXJsPzogc3RyaW5nO1xuICByYXJpdHk/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcm9wZXJ0aWVzPzogUmVjb3JkPGFueSwgYW55PiB8IG51bGw7XG4gIHR5cGU/OiBfQXNzZXRUeXBlLkVSQzcyMSB8IF9Bc3NldFR5cGUuUFNQMzQgfCBSTVJLX1ZFUjsgLy8gZm9yIHNlbmRpbmdcbiAgcm1ya192ZXI/OiBSTVJLX1ZFUjtcbiAgb25DaGFpbk9wdGlvbj86IGFueTsgLy8gZm9yIHNlbmRpbmcgUFNQLTM0IHRva2Vucywgc2hvdWxkIGJlIGRvbmUgYmV0dGVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZ0Q29sbGVjdGlvbiB7XG4gIC8vIG11c3QtaGF2ZVxuICBjb2xsZWN0aW9uSWQ6IHN0cmluZztcbiAgY2hhaW46IHN0cmluZztcbiAgb3JpZ2luQXNzZXQ/OiBzdHJpbmc7XG5cbiAgY29sbGVjdGlvbk5hbWU/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBpdGVtQ291bnQ/OiBudW1iZXI7XG4gIGV4dGVybmFsVXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mdEpzb24ge1xuICB0b3RhbDogbnVtYmVyO1xuICBuZnRMaXN0OiBBcnJheTxOZnRJdGVtPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZnRDb2xsZWN0aW9uSnNvbiB7XG4gIHJlYWR5OiBib29sZWFuO1xuICBuZnRDb2xsZWN0aW9uTGlzdDogQXJyYXk8TmZ0Q29sbGVjdGlvbj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFJdGVtIHtcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbiAgc3BlY1ZlcnNpb246IHN0cmluZztcbiAgaGV4VmFsdWU6IEhleFN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbkJhbGFuY2VSYXcge1xuICByZXNlcnZlZDogQk4sXG4gIGZyb3plbjogQk4sXG4gIGZyZWU6IEJOXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic3RyYXRlQmFsYW5jZSB7XG4gIHJlc2VydmVkPzogc3RyaW5nLFxuICBtaXNjRnJvemVuPzogc3RyaW5nLFxuICBmZWVGcm96ZW4/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWxhbmNlSXRlbSB7XG4gIC8vIG1ldGFkYXRhXG4gIHRva2VuU2x1Zzogc3RyaW5nLFxuICBzdGF0ZTogQVBJSXRlbVN0YXRlLFxuICB0aW1lc3RhbXA/OiBudW1iZXJcblxuICAvLyBtdXN0LWhhdmUsIHRvdGFsID0gZnJlZSArIGxvY2tlZFxuICBmcmVlOiBzdHJpbmcsXG4gIGxvY2tlZDogc3RyaW5nLFxuXG4gIC8vIHN1YnN0cmF0ZSBmaWVsZHNcbiAgc3Vic3RyYXRlSW5mbz86IFN1YnN0cmF0ZUJhbGFuY2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWxhbmNlSnNvbiB7XG4gIHJlc2V0PzogYm9vbGVhbixcbiAgZGV0YWlsczogUmVjb3JkPHN0cmluZywgQmFsYW5jZUl0ZW0+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3Jvd2Rsb2FuSXRlbSB7XG4gIHN0YXRlOiBBUElJdGVtU3RhdGUsXG4gIHBhcmFTdGF0ZT86IENyb3dkbG9hblBhcmFTdGF0ZSxcbiAgY29udHJpYnV0ZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3Jvd2Rsb2FuSnNvbiB7XG4gIHJlc2V0PzogYm9vbGVhbixcbiAgZGV0YWlsczogUmVjb3JkPHN0cmluZywgQ3Jvd2Rsb2FuSXRlbT5cbn1cblxuZXhwb3J0IHR5cGUgTmV0V29ya0dyb3VwID0gJ1JFTEFZX0NIQUlOJyB8ICdQT0xLQURPVF9QQVJBQ0hBSU4nIHwgJ0tVU0FNQV9QQVJBQ0hBSU4nIHwgJ01BSU5fTkVUJyB8ICdURVNUX05FVCcgfCAnVU5LTk9XTic7XG5cbmV4cG9ydCBlbnVtIENvbnRyYWN0VHlwZSB7XG4gIHdhc20gPSAnd2FzbScsXG4gIGV2bSA9ICdldm0nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya0pzb24ge1xuICAvLyBHZW5lcmFsIEluZm9ybWF0aW9uXG4gIGtleTogc3RyaW5nOyAvLyBLZXkgb2YgbmV0d29yayBpbiBOZXR3b3JrTWFwXG4gIGNoYWluOiBzdHJpbmc7IC8vIE5hbWUgb2YgdGhlIG5ldHdvcmtcbiAgaWNvbj86IHN0cmluZzsgLy8gSWNvbiBuYW1lLCBhdmFpbGFibGUgd2l0aCBrbm93biBuZXR3b3JrXG4gIGFjdGl2ZTogYm9vbGVhbjsgLy8gTmV0d29yayBpcyBhY3RpdmUgb3Igbm90XG5cbiAgLy8gUHJvdmlkZXIgSW5mb3JtYXRpb25cbiAgcHJvdmlkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+OyAvLyBQcmVkZWZpbmVkIHByb3ZpZGVyIG1hcFxuICBjdXJyZW50UHJvdmlkZXI6IHN0cmluZyB8IG51bGw7IC8vIEN1cnJlbnQgcHJvdmlkZXIga2V5XG4gIGN1cnJlbnRQcm92aWRlck1vZGU6ICdodHRwJyB8ICd3cyc7IC8vIEN1cnJlbnQgcHJvdmlkZXIgbW9kZSwgY29tcHV0ZSBkZXBlbmQgb24gcHJvdmlkZXIgcHJvdG9jb2wuIHRoZSBmZWF0dXJlIG5lZWQgdG8ga25vdyB0aGlzIHRvIGRlY2lkZSB1c2Ugc3Vic2NyaWJlIG9yIGNyb25qb2IgdG8gdXNlIHRoaXMgZmVhdHVyZXMuXG4gIGN1c3RvbVByb3ZpZGVycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47IC8vIEN1c3RvbSBwcm92aWRlciBtYXAsIHByb3ZpZGVyIG5hbWUgc2FtZSB3aXRoIHByb3ZpZGVyIG1hcFxuICBuZnRQcm92aWRlcj86IHN0cmluZztcblxuICAvLyBNZXRhZGF0YSBnZXQgYWZ0ZXIgY29ubmVjdCB0byBwcm92aWRlclxuICBnZW5lc2lzSGFzaDogc3RyaW5nOyAvLyBpZGVudGlmaWVyIGZvciBuZXR3b3JrXG4gIGdyb3VwczogTmV0V29ya0dyb3VwW107XG4gIHNzNThGb3JtYXQ6IG51bWJlcjtcbiAgcGFyYUlkPzogbnVtYmVyO1xuICBjaGFpblR5cGU/OiAnc3Vic3RyYXRlJyB8ICdldGhlcmV1bSc7XG4gIGNyb3dkbG9hblVybD86IHN0cmluZztcblxuICAvLyBFdGhlcmV1bSByZWxhdGVkIGluZm9ybWF0aW9uIGZvciBwcmVkZWZpbmVkIG5ldHdvcmsgb25seVxuICBpc0V0aGVyZXVtPzogYm9vbGVhbjsgLy8gT25seSBzaG93IG5ldHdvcmsgd2l0aCBpc0V0aGVyZXVtPXRydWUgd2hlbiBzZWxlY3Qgb25lIEV2bSBhY2NvdW50IC8vIHVzZXIgaW5wdXRcbiAgZXZtQ2hhaW5JZD86IG51bWJlcjtcblxuICBpc0h5YnJpZD86IGJvb2xlYW47XG5cbiAgLy8gTmF0aXZlIHRva2VuIGluZm9ybWF0aW9uXG4gIG5hdGl2ZVRva2VuPzogc3RyaW5nO1xuICBkZWNpbWFscz86IG51bWJlcjtcblxuICAvLyBPdGhlciBpbmZvcm1hdGlvblxuICBjb2luR2Vja29LZXk/OiBzdHJpbmc7IC8vIFByb3ZpZGVyIGtleSB0byBnZXQgdG9rZW4gcHJpY2UgZnJvbSBDb2luR2Vja28gLy8gdXNlciBpbnB1dFxuICBibG9ja0V4cGxvcmVyPzogc3RyaW5nOyAvLyBMaW5rIHRvIGJsb2NrIHNjYW5uZXIgdG8gY2hlY2sgdHJhbnNhY3Rpb24gd2l0aCBleHRyaW5zaWMgaGFzaCAvLyB1c2VyIGlucHV0XG4gIGFiaUV4cGxvcmVyPzogc3RyaW5nOyAvLyBMaW5rIHRvIGJsb2NrIHNjYW5uZXIgdG8gY2hlY2sgdHJhbnNhY3Rpb24gd2l0aCBleHRyaW5zaWMgaGFzaCAvLyB1c2VyIGlucHV0XG4gIGRlcGVuZGVuY2llcz86IHN0cmluZ1tdOyAvLyBBdXRvIGFjdGl2ZSBuZXR3b3JrIGluIGRlcGVuZGVuY2llcyBpZiBjdXJyZW50IG5ldHdvcmsgaXMgYWN0aXZhdGVkXG4gIGdldFN0YWtpbmdPbkNoYWluPzogYm9vbGVhbjsgLy8gc3VwcG9ydCBnZXQgYm9uZGVkIG9uIGNoYWluXG4gIHN1cHBvcnRCb25kaW5nPzogYm9vbGVhbjtcbiAgc3VwcG9ydFNtYXJ0Q29udHJhY3Q/OiBDb250cmFjdFR5cGVbXTsgLy8gaWYgbmV0d29yayBzdXBwb3J0cyBQU1Agc21hcnQgY29udHJhY3RzXG5cbiAgYXBpU3RhdHVzPzogTkVUV09SS19TVEFUVVM7XG4gIHJlcXVlc3RJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb25hdGVJbmZvIHtcbiAga2V5OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25UcmFuc2Zvcm1PcHRpb25UeXBlIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRXb3JrTWV0YWRhdGFEZWYgZXh0ZW5kcyBNZXRhZGF0YURlZkJhc2Uge1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG4gIGdyb3VwczogTmV0V29ya0dyb3VwW107XG4gIGlzRXRoZXJldW06IGJvb2xlYW47XG4gIHBhcmFJZD86IG51bWJlcjtcbiAgaXNBdmFpbGFibGU6IGJvb2xlYW47XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgYXBpU3RhdHVzOiBORVRXT1JLX1NUQVRVUztcbn1cblxuZXhwb3J0IHR5cGUgQ3VycmVudE5ldHdvcmtJbmZvID0ge1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG4gIG5ldHdvcmtQcmVmaXg6IG51bWJlcjtcbiAgaWNvbjogc3RyaW5nO1xuICBnZW5lc2lzSGFzaDogc3RyaW5nO1xuICBpc0V0aGVyZXVtOiBib29sZWFuO1xuICBpc1JlYWR5PzogYm9vbGVhbjsgLy8gY2hlY2sgaWYgY3VycmVudCBuZXR3b3JrIGluZm8gaXMgbGlmdGVkIGZyb20gaW5pdGlhbCBzdGF0ZVxufVxuXG4vLyBhbGwgQWNjb3VudHMgYW5kIHRoZSBhZGRyZXNzIG9mIHRoZSBjdXJyZW50IEFjY291bnRcbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudHNXaXRoQ3VycmVudEFkZHJlc3Mge1xuICBhY2NvdW50czogQWNjb3VudEpzb25bXTtcbiAgY3VycmVudEFkZHJlc3M/OiBzdHJpbmc7XG4gIGN1cnJlbnRHZW5lc2lzSGFzaD86IHN0cmluZyB8IG51bGw7XG4gIGlzU2hvd0JhbGFuY2U/OiBib29sZWFuOyAvLyBEZXByZWNhdGVkIGFuZCBtb3ZlIHRvIHNldHRpbmdcbiAgYWxsQWNjb3VudExvZ28/OiBzdHJpbmc7IC8vIERlcHJlY2F0ZWQgYW5kIG1vdmUgdG8gc2V0dGluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbklucHV0QWRkcmVzcyB7XG4gIG9wdGlvbnM6IEtleXJpbmdPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbnRBY2NvdW50SW5mbyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY3VycmVudEdlbmVzaXNIYXNoOiBzdHJpbmcgfCBudWxsO1xuICBhbGxHZW5lc2lzSGFzaD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VUeXBlID0gJ2VuJ1xufCd6aCdcbnwnZnInXG58J3RyJ1xufCdwbCdcbnwndGgnXG58J3VyJ1xufCd2aSdcbnwnamEnXG58J3J1JztcblxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VPcHRpb25UeXBlID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHZhbHVlOiBMYW5ndWFnZVR5cGU7XG59XG5cbmV4cG9ydCB0eXBlIEJyb3dzZXJDb25maXJtYXRpb25UeXBlID0gJ2V4dGVuc2lvbid8J3BvcHVwJ3wnd2luZG93JztcblxuZXhwb3J0IGVudW0gV2FsbGV0VW5sb2NrVHlwZSB7XG4gIEFMV0FZU19SRVFVSVJFRCA9ICdhbHdheXNfcmVxdWlyZWQnLFxuICBXSEVOX05FRURFRCA9ICd3aGVuX25lZWRlZCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVWlTZXR0aW5ncyB7XG4gIGxhbmd1YWdlOiBMYW5ndWFnZVR5cGUsXG4gIGJyb3dzZXJDb25maXJtYXRpb25UeXBlOiBCcm93c2VyQ29uZmlybWF0aW9uVHlwZTtcbiAgaXNTaG93WmVyb0JhbGFuY2U6IGJvb2xlYW47XG4gIGlzU2hvd0JhbGFuY2U6IGJvb2xlYW47XG4gIGFjY291bnRBbGxMb2dvOiBzdHJpbmc7XG4gIHRoZW1lOiBUaGVtZU5hbWVzO1xuICBjYW1lcmE6IGJvb2xlYW47XG4gIHRpbWVBdXRvTG9jazogbnVtYmVyO1xuICB1bmxvY2tUeXBlOiBXYWxsZXRVbmxvY2tUeXBlO1xuICBlbmFibGVDaGFpblBhdHJvbDogYm9vbGVhbjtcbiAgLy8gT24tcmFtcCBzZXJ2aWNlIGFjY291bnQgcmVmZXJlbmNlXG4gIHdhbGxldFJlZmVyZW5jZTogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0U2V0dGluZ3NUeXBlID0gVWlTZXR0aW5ncztcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENhbWVyYVNldHRpbmdzID0geyBjYW1lcmE6IGJvb2xlYW4gfTtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENoYW5nZVRpbWVBdXRvTG9jayA9IHsgYXV0b0xvY2tUaW1lOiBudW1iZXIgfTtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdFVubG9ja1R5cGUgPSB7IHVubG9ja1R5cGU6IFdhbGxldFVubG9ja1R5cGUgfTtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENoYW5nZUVuYWJsZUNoYWluUGF0cm9sID0geyBlbmFibGU6IGJvb2xlYW4gfTtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENoYW5nZVNob3daZXJvQmFsYW5jZSA9IHsgc2hvdzogYm9vbGVhbiB9O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q2hhbmdlTGFuZ3VhZ2UgPSB7IGxhbmd1YWdlOiBMYW5ndWFnZVR5cGUgfTtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENoYW5nZVNob3dCYWxhbmNlID0geyBlbmFibGU6IGJvb2xlYW4gfTtcblxuZXhwb3J0IGludGVyZmFjZSBSYW5kb21UZXN0UmVxdWVzdCB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBUcmFuc2FjdGlvbkRpcmVjdGlvbiB7XG4gIFNFTkQgPSAnc2VuZCcsXG4gIFJFQ0VJVkVEID0gJ3JlY2VpdmVkJ1xufVxuXG5leHBvcnQgZW51bSBDaGFpblR5cGUge1xuICBFVk0gPSAnZXZtJyxcbiAgU1VCU1RSQVRFID0gJ3N1YnN0cmF0ZSdcbn1cblxuZXhwb3J0IGVudW0gRXh0cmluc2ljVHlwZSB7XG4gIFRSQU5TRkVSX0JBTEFOQ0UgPSAndHJhbnNmZXIuYmFsYW5jZScsXG4gIFRSQU5TRkVSX1RPS0VOID0gJ3RyYW5zZmVyLnRva2VuJyxcbiAgVFJBTlNGRVJfWENNID0gJ3RyYW5zZmVyLnhjbScsXG4gIFNFTkRfTkZUID0gJ3NlbmRfbmZ0JyxcbiAgQ1JPV0RMT0FOID0gJ2Nyb3dkbG9hbicsXG4gIFNUQUtJTkdfSk9JTl9QT09MID0gJ3N0YWtpbmcuam9pbl9wb29sJyxcbiAgU1RBS0lOR19MRUFWRV9QT09MID0gJ3N0YWtpbmcubGVhdmVfcG9vbCcsXG4gIFNUQUtJTkdfUE9PTF9XSVRIRFJBVyA9ICdzdGFraW5nLnBvb2xfd2l0aGRyYXcnLFxuICBTVEFLSU5HX0JPTkQgPSAnc3Rha2luZy5ib25kJyxcbiAgU1RBS0lOR19VTkJPTkQgPSAnc3Rha2luZy51bmJvbmQnLFxuICBTVEFLSU5HX0NMQUlNX1JFV0FSRCA9ICdzdGFraW5nLmNsYWltX3Jld2FyZCcsXG4gIFNUQUtJTkdfV0lUSERSQVcgPSAnc3Rha2luZy53aXRoZHJhdycsXG4gIFNUQUtJTkdfQ09NUE9VTkRJTkcgPSAnc3Rha2luZy5jb21wb3VuZGluZycsXG4gIFNUQUtJTkdfQ0FOQ0VMX0NPTVBPVU5ESU5HID0gJ3N0YWtpbmcuY2FuY2VsX2NvbXBvdW5kaW5nJyxcbiAgU1RBS0lOR19DQU5DRUxfVU5TVEFLRSA9ICdzdGFraW5nLmNhbmNlbF91bnN0YWtlJyxcbiAgRVZNX0VYRUNVVEUgPSAnZXZtLmV4ZWN1dGUnLFxuICBVTktOT1dOID0gJ3Vua25vd24nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0cmluc2ljRGF0YVR5cGVNYXAge1xuICBbRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9CQUxBTkNFXTogUmVxdWVzdFRyYW5zZmVyLFxuICBbRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9UT0tFTl06IFJlcXVlc3RUcmFuc2ZlcixcbiAgW0V4dHJpbnNpY1R5cGUuVFJBTlNGRVJfWENNXTogUmVxdWVzdENyb3NzQ2hhaW5UcmFuc2ZlcixcbiAgW0V4dHJpbnNpY1R5cGUuU0VORF9ORlRdOiBOZnRUcmFuc2FjdGlvblJlcXVlc3QsXG4gIFtFeHRyaW5zaWNUeXBlLkNST1dETE9BTl06IGFueSxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19KT0lOX1BPT0xdOiBSZXF1ZXN0U3Rha2VQb29saW5nQm9uZGluZyxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19MRUFWRV9QT09MXTogUmVxdWVzdFN0YWtlUG9vbGluZ1VuYm9uZGluZyxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19CT05EXTogUmVxdWVzdFN0YWtlUG9vbGluZ0JvbmRpbmcsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfVU5CT05EXTogUmVxdWVzdFVuYm9uZGluZ1N1Ym1pdCxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19DTEFJTV9SRVdBUkRdOiBSZXF1ZXN0U3Rha2VDbGFpbVJld2FyZCxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19XSVRIRFJBV106IFJlcXVlc3RTdGFrZVdpdGhkcmF3YWwsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ09NUE9VTkRJTkddOiBSZXF1ZXN0VHVyaW5nU3Rha2VDb21wb3VuZCxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19DQU5DRUxfQ09NUE9VTkRJTkddOiBSZXF1ZXN0VHVyaW5nQ2FuY2VsU3Rha2VDb21wb3VuZCxcbiAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19DQU5DRUxfVU5TVEFLRV06IFJlcXVlc3RTdGFrZUNhbmNlbFdpdGhkcmF3YWwsXG4gIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfUE9PTF9XSVRIRFJBV106IGFueSxcbiAgW0V4dHJpbnNpY1R5cGUuRVZNX0VYRUNVVEVdOiBUcmFuc2FjdGlvbkNvbmZpZyxcbiAgW0V4dHJpbnNpY1R5cGUuVU5LTk9XTl06IGFueVxufVxuXG5leHBvcnQgZW51bSBFeHRyaW5zaWNTdGF0dXMge1xuICBRVUVVRUQgPSAncXVldWVkJywgLy8gVHJhbnNhY3Rpb24gaW4gcXVldWVcbiAgU1VCTUlUVElORyA9ICdzdWJtaXR0aW5nJywgLy8gVHJhbnNhY3Rpb24gaW4gcXVldWVcbiAgUFJPQ0VTU0lORyA9ICdwcm9jZXNzaW5nJywgLy8gVHJhbnNhY3Rpb24gaXMgc2VuZGluZ1xuICBTVUNDRVNTID0gJ3N1Y2Nlc3MnLCAvLyBTZW5kIHN1Y2Nlc3NmdWxseVxuICBGQUlMID0gJ2ZhaWwnLCAvLyBTZW5kIGZhaWxlZFxuICBDQU5DRUxMRUQgPSAnY2FuY2VsbGVkJywgLy8gSXMgcmVtb3ZlIGJlZm9yZSBzZW5kaW5nXG4gIFVOS05PV04gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUeEhpc3RvcnlJdGVtIHtcbiAgdGltZTogbnVtYmVyIHwgc3RyaW5nO1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG4gIGlzU3VjY2VzczogYm9vbGVhbjtcbiAgYWN0aW9uOiBUcmFuc2FjdGlvbkRpcmVjdGlvbjtcbiAgZXh0cmluc2ljSGFzaDogc3RyaW5nO1xuXG4gIGNoYW5nZT86IHN0cmluZztcbiAgY2hhbmdlU3ltYm9sPzogc3RyaW5nOyAvLyBpZiB1bmRlZmluZWQgPT4gbWFpbiB0b2tlblxuICBmZWU/OiBzdHJpbmc7XG4gIGZlZVN5bWJvbD86IHN0cmluZztcbiAgLy8gaWYgdW5kZWZpbmVkID0+IG1haW4gdG9rZW4sIHNvbWV0aW1lIFwiZmVlXCIgdXNlcyBkaWZmZXJlbnQgdG9rZW4gdGhhbiBcImNoYW5nZVwiXG4gIC8vIGV4OiBzdWIgdG9rZW4gKERPVCwgQVVTRCwgS1NNLCAuLi4pIG9mIEFjYWxhLCBLYXJ1cmEgdXNlcyBtYWluIHRva2VuIHRvIHBheSBmZWVcbiAgb3JpZ2luPzogJ2FwcCcgfCAnbmV0d29yayc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25IaXN0b3J5SXRlbUpzb24ge1xuICBpdGVtczogVHhIaXN0b3J5SXRlbVtdLFxuICB0b3RhbDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNUb2tlbkluZm8ge1xuICBkZWNpbWFsczogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbW91bnREYXRhIGV4dGVuZHMgQmFzaWNUb2tlbkluZm8ge1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFhDTVRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm8ge1xuICBkZXN0aW5hdGlvbkNoYWluOiBzdHJpbmcsXG4gIG9yaWdpbmFsQ2hhaW46IHN0cmluZyxcbiAgZmVlPzogQW1vdW50RGF0YVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5GVFRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm8ge1xuICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm88VCBleHRlbmRzIEV4dHJpbnNpY1R5cGU+ID0gVCBleHRlbmRzIEV4dHJpbnNpY1R5cGUuVFJBTlNGRVJfWENNXG4gID8gWENNVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mb1xuICA6IFQgZXh0ZW5kcyBFeHRyaW5zaWNUeXBlLlNFTkRfTkZUXG4gICAgPyBORlRUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvXG4gICAgOiB1bmRlZmluZWQ7XG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW08RVQgZXh0ZW5kcyBFeHRyaW5zaWNUeXBlID0gRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9CQUxBTkNFPiB7XG4gIG9yaWdpbj86ICdhcHAnIHwgJ21pZ3JhdGlvbicgfCAnc3Vic3F1aWQnLCAvLyAnYXBwJyBvciBoaXN0b3J5IHNvdXJjZVxuICBjYWxsaGFzaD86IHN0cmluZyxcbiAgc2lnbmF0dXJlPzogc3RyaW5nLFxuICBjaGFpbjogc3RyaW5nLFxuICBjaGFpblR5cGU/OiBDaGFpblR5cGUsXG4gIGNoYWluTmFtZT86IHN0cmluZyxcbiAgZGlyZWN0aW9uOiBUcmFuc2FjdGlvbkRpcmVjdGlvbixcbiAgdHlwZTogRXh0cmluc2ljVHlwZSxcbiAgZnJvbTogc3RyaW5nLFxuICBmcm9tTmFtZT86IHN0cmluZyxcbiAgdG86IHN0cmluZyxcbiAgdG9OYW1lPzogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIHN0YXR1czogRXh0cmluc2ljU3RhdHVzLFxuICB0cmFuc2FjdGlvbklkPzogc3RyaW5nLCAvLyBBdmFpbGFibGUgZm9yIHRyYW5zYWN0aW9uIGhpc3RvcnlcbiAgZXh0cmluc2ljSGFzaDogc3RyaW5nLFxuICB0aW1lOiBudW1iZXIsXG4gIGRhdGE/OiBzdHJpbmcsXG4gIGJsb2NrTnVtYmVyOiBudW1iZXIsXG4gIGJsb2NrSGFzaDogc3RyaW5nLFxuICBhbW91bnQ/OiBBbW91bnREYXRhLFxuICB0aXA/OiBBbW91bnREYXRhLFxuICBmZWU/OiBBbW91bnREYXRhLFxuICBleHBsb3JlclVybD86IHN0cmluZyxcbiAgYWRkaXRpb25hbEluZm8/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvPEVUPixcbiAgc3RhcnRCbG9jaz86IG51bWJlcixcbiAgbm9uY2U/OiBudW1iZXIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1dFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29kZT86IG51bWJlcjtcbiAgZXJyb3JUeXBlOiBzdHJpbmc7XG4gIGRhdGE/OiB1bmtub3duO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNXV2FybmluZyB7XG4gIGVycm9yVHlwZTogc3RyaW5nO1xuICBjb2RlPzogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGRhdGE/OiB1bmtub3duO1xufVxuXG5leHBvcnQgZW51bSBCYXNpY1R4RXJyb3JUeXBlIHtcbiAgTk9UX0VOT1VHSF9CQUxBTkNFID0gJ05PVF9FTk9VR0hfQkFMQU5DRScsXG4gIENIQUlOX0RJU0NPTk5FQ1RFRCA9ICdDSEFJTl9ESVNDT05ORUNURUQnLFxuICBJTlZBTElEX1BBUkFNUyA9ICdJTlZBTElEX1BBUkFNUycsXG4gIERVUExJQ0FURV9UUkFOU0FDVElPTiA9ICdEVVBMSUNBVEVfVFJBTlNBQ1RJT04nLFxuICBVTkFCTEVfVE9fU0lHTiA9ICdVTkFCTEVfVE9fU0lHTicsXG4gIFVTRVJfUkVKRUNUX1JFUVVFU1QgPSAnVVNFUl9SRUpFQ1RfUkVRVUVTVCcsXG4gIFVOQUJMRV9UT19TRU5EID0gJ1VOQUJMRV9UT19TRU5EJyxcbiAgU0VORF9UUkFOU0FDVElPTl9GQUlMRUQgPSAnU0VORF9UUkFOU0FDVElPTl9GQUlMRUQnLFxuICBJTlRFUk5BTF9FUlJPUiA9ICdJTlRFUk5BTF9FUlJPUicsXG4gIFVOU1VQUE9SVEVEID0gJ1VOU1VQUE9SVEVEJyxcbiAgVElNRU9VVCA9ICdUSU1FT1VUJyxcbiAgTk9UX0VOT1VHSF9FWElTVEVOVElBTF9ERVBPU0lUID0gJ05PVF9FTk9VR0hfRVhJU1RFTlRJQUxfREVQT1NJVCcsXG59XG5cbmV4cG9ydCBlbnVtIFN0YWtpbmdUeEVycm9yVHlwZSB7XG4gIE5PVF9FTk9VR0hfTUlOX1NUQUtFID0gJ05PVF9FTk9VR0hfTUlOX1NUQUtFJyxcbiAgRVhDRUVEX01BWF9OT01JTkFUSU9OUyA9ICdFWENFRURfTUFYX05PTUlOQVRJT05TJyxcbiAgRVhJU1RfVU5TVEFLSU5HX1JFUVVFU1QgPSAnRVhJU1RfVU5TVEFLSU5HX1JFUVVFU1QnLFxuICBJTlZBTElEX0FDVElWRV9TVEFLRSA9ICdJTlZBTElEX0FDVElWRV9TVEFLRScsXG4gIEVYQ0VFRF9NQVhfVU5TVEFLSU5HID0gJ0VYQ0VFRF9NQVhfVU5TVEFLSU5HJyxcbiAgSU5BQ1RJVkVfTk9NSU5BVElPTl9QT09MID0gJ0lOQUNUSVZFX05PTUlOQVRJT05fUE9PTCdcbn1cblxuZXhwb3J0IGVudW0gVHJhbnNmZXJUeEVycm9yVHlwZSB7XG4gIE5PVF9FTk9VR0hfVkFMVUUgPSAnTk9UX0VOT1VHSF9WQUxVRScsXG4gIE5PVF9FTk9VR0hfRkVFID0gJ05PVF9FTk9VR0hfRkVFJyxcbiAgSU5WQUxJRF9UT0tFTiA9ICdJTlZBTElEX1RPS0VOJyxcbiAgVFJBTlNGRVJfRVJST1IgPSAnVFJBTlNGRVJfRVJST1InLFxuICBSRUNFSVZFUl9OT1RfRU5PVUdIX0VYSVNURU5USUFMX0RFUE9TSVQgPSAnUkVDRUlWRVJfTk9UX0VOT1VHSF9FWElTVEVOVElBTF9ERVBPU0lUJyxcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25FcnJvclR5cGUgPSBCYXNpY1R4RXJyb3JUeXBlIHwgVHJhbnNmZXJUeEVycm9yVHlwZSB8IFN0YWtpbmdUeEVycm9yVHlwZVxuZXhwb3J0IGVudW0gQmFzaWNUeFdhcm5pbmdDb2RlIHtcbiAgTk9UX0VOT1VHSF9FWElTVEVOVElBTF9ERVBPU0lUID0gJ25vdEVub3VnaEV4aXN0ZW50aWFsRGVwb3NpdCdcbn1cblxuZXhwb3J0IHR5cGUgQmFzaWNUeEVycm9yID0ge1xuICBlcnJvclR5cGU6IFR4RXJyb3JDb2RlLFxuICBkYXRhPzogb2JqZWN0LFxuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQmFzaWNUeFdhcm5pbmcgPSB7XG4gIHdhcm5pbmdUeXBlOiBUcmFuc2FjdGlvbldhcm5pbmdUeXBlLFxuICBkYXRhPzogb2JqZWN0LFxuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvblJlc3BvbnNlIHtcbiAgZXh0cmluc2ljSGFzaD86IHN0cmluZztcbiAgdHhFcnJvcj86IGJvb2xlYW47XG4gIGVycm9ycz86IFRyYW5zYWN0aW9uRXJyb3JbXTtcbiAgc3RhdHVzPzogYm9vbGVhbjtcbiAgdHhSZXN1bHQ/OiBUeFJlc3VsdFR5cGVcbiAgcGFzc3dvcmRFcnJvcj86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmZ0VHJhbnNhY3Rpb25SZXNwb25zZSBleHRlbmRzIFNXVHJhbnNhY3Rpb25SZXNwb25zZSB7XG4gIGlzU2VuZGluZ1NlbGY6IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIEhhbmRsZUJhc2ljVHggPSAoZGF0YTogVHJhbnNhY3Rpb25SZXNwb25zZSkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgVHhFcnJvckNvZGUgPSBUcmFuc2ZlclR4RXJyb3JUeXBlIHwgVHJhbnNhY3Rpb25FcnJvclR5cGVcblxuZXhwb3J0IGVudW0gQmFsYW5jZUVycm9yVHlwZSB7XG4gIE5FVFdPUktfRVJST1IgPSAnTkVUV09SS19FUlJPUicsXG4gIFRPS0VOX0VSUk9SID0gJ1RPS0VOX0VSUk9SJyxcbiAgVElNRU9VVCA9ICdUSU1FT1VUJyxcbiAgR0VUX0JBTEFOQ0VfRVJST1IgPSAnR0VUX0JBTEFOQ0VfRVJST1InLFxufVxuXG5leHBvcnQgdHlwZSBUcmFuc2FjdGlvbldhcm5pbmdUeXBlID0gQmFzaWNUeFdhcm5pbmdDb2RlXG5cbmV4cG9ydCBlbnVtIFByb3ZpZGVyRXJyb3JUeXBlIHtcbiAgQ0hBSU5fRElTQ09OTkVDVEVEID0gJ0NIQUlOX0RJU0NPTk5FQ1RFRCcsXG4gIElOVkFMSURfUEFSQU1TID0gJ0lOVkFMSURfUEFSQU1TJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnSU5URVJOQUxfRVJST1InLFxuICBVU0VSX1JFSkVDVCA9ICdVU0VSX1JFSkVDVCcsXG59XG5cbi8vLyBNYW5hZ2UgYWNjb3VudFxuLy8gRXhwb3J0IHByaXZhdGUga2V5XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRFeHBvcnRQcml2YXRlS2V5IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlQWNjb3VudEV4cG9ydFByaXZhdGVLZXkge1xuICBwcml2YXRlS2V5OiBzdHJpbmc7XG4gIHB1YmxpY0tleTogc3RyaW5nO1xufVxuXG4vLyBHZXQgYWNjb3VudCBpbmZvIHdpdGggcHJpdmF0ZSBrZXlcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q2hlY2tQdWJsaWNBbmRTZWNyZXRLZXkge1xuICBzZWNyZXRLZXk6IHN0cmluZztcbiAgcHVibGljS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VDaGVja1B1YmxpY0FuZFNlY3JldEtleSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgaXNWYWxpZDogYm9vbGVhbjtcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjtcbn1cblxuLy8gQ3JlYXRlIHNlZWQgcGhhc2VcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0U2VlZENyZWF0ZVYyIHtcbiAgbGVuZ3RoPzogU2VlZExlbmd0aHM7XG4gIHNlZWQ/OiBzdHJpbmc7XG4gIHR5cGVzPzogQXJyYXk8S2V5cGFpclR5cGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlU2VlZENyZWF0ZVYyIHtcbiAgc2VlZDogc3RyaW5nLFxuICBhZGRyZXNzTWFwOiBSZWNvcmQ8S2V5cGFpclR5cGUsIHN0cmluZz5cbn1cblxuLy8gR2V0IGFjY291bnQgaW5mbyB3aXRoIHN1cmlcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0U2VlZFZhbGlkYXRlVjIge1xuICBzdXJpOiBzdHJpbmc7XG4gIHR5cGVzPzogQXJyYXk8S2V5cGFpclR5cGU+O1xufVxuXG5leHBvcnQgdHlwZSBSZXNwb25zZVNlZWRWYWxpZGF0ZVYyID0gUmVzcG9uc2VTZWVkQ3JlYXRlVjJcblxuLy8gQ3JlYXRlIGFjY291bnQgd2l0aCBzdXJpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRDcmVhdGVTdXJpVjIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGdlbmVzaXNIYXNoPzogc3RyaW5nIHwgbnVsbDtcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHN1cmk6IHN0cmluZztcbiAgdHlwZXM/OiBBcnJheTxLZXlwYWlyVHlwZT47XG4gIGlzQWxsb3dlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgUmVzcG9uc2VBY2NvdW50Q3JlYXRlU3VyaVYyID0gUmVjb3JkPEtleXBhaXJUeXBlLCBzdHJpbmc+XG5cbi8vIENyZWF0ZSBkZXJpdmUgYWNjb3VudFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3REZXJpdmVDcmVhdGVWMiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ2VuZXNpc0hhc2g/OiBzdHJpbmcgfCBudWxsO1xuICBzdXJpOiBzdHJpbmc7XG4gIHBhcmVudEFkZHJlc3M6IHN0cmluZztcbiAgaXNBbGxvd2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZURlcml2ZUFjY291bnRJbmZvIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdERlcml2ZUNyZWF0ZVYzIHtcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3REZXJpdmVDcmVhdGVNdWx0aXBsZSB7XG4gIHBhcmVudEFkZHJlc3M6IHN0cmluZztcbiAgaXNBbGxvd2VkOiBib29sZWFuO1xuICBpdGVtczogQ3JlYXRlRGVyaXZlQWNjb3VudEluZm9bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXJpdmVBY2NvdW50SW5mbyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgc3VyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3REZXJpdmVWYWxpZGF0ZVYyIHtcbiAgc3VyaTogc3RyaW5nO1xuICBwYXJlbnRBZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlRGVyaXZlVmFsaWRhdGVWMiA9IERlcml2ZUFjY291bnRJbmZvO1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0R2V0RGVyaXZlQWNjb3VudHMge1xuICBwYWdlOiBudW1iZXI7XG4gIGxpbWl0OiBudW1iZXI7XG4gIHBhcmVudEFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUdldERlcml2ZUFjY291bnRzIHtcbiAgcmVzdWx0OiBEZXJpdmVBY2NvdW50SW5mb1tdO1xufVxuXG4vLyBSZXN0b3JlIGFjY291bnQgd2l0aCBqc29uIGZpbGUgKHNpbmdsZSBhY2NvdW50KVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RKc29uUmVzdG9yZVYyIHtcbiAgZmlsZTogS2V5cmluZ1BhaXIkSnNvbjtcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xuICBpc0FsbG93ZWQ6IGJvb2xlYW47XG4gIHdpdGhNYXN0ZXJQYXNzd29yZDogYm9vbGVhbjtcbn1cblxuLy8gUmVzdG9yZSBhY2NvdW50IHdpdGgganNvbiBmaWxlIChtdWx0aSBhY2NvdW50KVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RCYXRjaFJlc3RvcmVWMiB7XG4gIGZpbGU6IEtleXJpbmdQYWlycyRKc29uO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBhY2NvdW50c0luZm86IFJlc3BvbnNlSnNvbkdldEFjY291bnRJbmZvW107XG4gIGlzQWxsb3dlZDogYm9vbGVhbjtcbn1cblxuLy8gUmVzdG9yZSBhY2NvdW50IHdpdGggcHJpdmF0ZUtleVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUHJpdmF0ZUtleVZhbGlkYXRlVjIge1xuICBhZGRyZXNzTWFwOiBSZWNvcmQ8S2V5cGFpclR5cGUsIHN0cmluZz4sXG4gIGF1dG9BZGRQcmVmaXg6IGJvb2xlYW5cbn1cblxuLy8gRXh0ZXJuYWwgYWNjb3VudFxuXG5leHBvcnQgZW51bSBBY2NvdW50RXh0ZXJuYWxFcnJvckNvZGUge1xuICBJTlZBTElEX0FERFJFU1MgPSAnaW52YWxpZFRvQWNjb3VudCcsXG4gIEtFWVJJTkdfRVJST1IgPSAna2V5cmluZ0Vycm9yJyxcbiAgVU5LTk9XTl9FUlJPUiA9ICd1bmtub3duRXJyb3InXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudEV4dGVybmFsRXJyb3J7XG4gIGNvZGU6IEFjY291bnRFeHRlcm5hbEVycm9yQ29kZTtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG4vLyBBdHRhY2ggUVItc2lnbmVyIGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudENyZWF0ZUV4dGVybmFsVjIge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGdlbmVzaXNIYXNoPzogc3RyaW5nIHwgbnVsbDtcbiAgbmFtZTogc3RyaW5nO1xuICBpc0V0aGVyZXVtOiBib29sZWFuO1xuICBpc0FsbG93ZWQ6IGJvb2xlYW47XG4gIGlzUmVhZE9ubHk6IGJvb2xlYW47XG59XG5cbi8vIEF0dGFjaCBMZWRnZXIgYWNjb3VudFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50Q3JlYXRlSGFyZHdhcmVWMiB7XG4gIGFjY291bnRJbmRleDogbnVtYmVyO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGFkZHJlc3NPZmZzZXQ6IG51bWJlcjtcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZztcbiAgaGFyZHdhcmVUeXBlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNBbGxvd2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVIYXJkd2FyZUFjY291bnRJdGVtIHtcbiAgYWNjb3VudEluZGV4OiBudW1iZXI7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYWRkcmVzc09mZnNldDogbnVtYmVyO1xuICBnZW5lc2lzSGFzaDogc3RyaW5nO1xuICBoYXJkd2FyZVR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpc0V0aGVyZXVtOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50Q3JlYXRlSGFyZHdhcmVNdWx0aXBsZSB7XG4gIGFjY291bnRzOiBDcmVhdGVIYXJkd2FyZUFjY291bnRJdGVtW107XG59XG5cbi8vIFJlc3RvcmUgYWNjb3VudCB3aXRoIHB1YmxpYyBhbmQgc2VjcmV0IGtleVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBY2NvdW50Q3JlYXRlV2l0aFNlY3JldEtleSB7XG4gIHB1YmxpY0tleTogc3RyaW5nO1xuICBzZWNyZXRLZXk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpc0FsbG93OiBib29sZWFuO1xuICBpc0V0aGVyZXVtOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlQWNjb3VudENyZWF0ZVdpdGhTZWNyZXRLZXkge1xuICBlcnJvcnM6IEFjY291bnRFeHRlcm5hbEVycm9yW107XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbi8vIFN1YnNjcmliZSBBZGRyZXNzIEJvb2tcblxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzQm9va0luZm8ge1xuICBhZGRyZXNzZXM6IEFkZHJlc3NKc29uW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RWRpdENvbnRhY3RBY2NvdW50IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBtZXRhOiBLZXlyaW5nUGFpciRNZXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3REZWxldGVDb250YWN0QWNjb3VudCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuLy8gSW5qZWN0IGFjY291bnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWRkSW5qZWN0ZWRBY2NvdW50cyB7XG4gIGFjY291bnRzOiBJbmplY3RlZEFjY291bnRXaXRoTWV0YVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZW1vdmVJbmplY3RlZEFjY291bnRzIHtcbiAgYWRkcmVzc2VzOiBzdHJpbmdbXTtcbn1cblxuLy8vIFNpZ24gVHJhbnNhY3Rpb25cblxuLy8vIFNpZ24gRXh0ZXJuYWwgUmVxdWVzdFxuXG4vLyBTdGF0dXNcblxuZXhwb3J0IGVudW0gRXh0ZXJuYWxSZXF1ZXN0UHJvbWlzZVN0YXR1cyB7XG4gIFBFTkRJTkcsXG4gIFJFSkVDVEVELFxuICBGQUlMRUQsXG4gIENPTVBMRVRFRFxufVxuXG4vLyBTdHJ1Y3R1cmVcblxuZXhwb3J0IGludGVyZmFjZSBFeHRlcm5hbFJlcXVlc3RQcm9taXNlIHtcbiAgcmVzb2x2ZT86IChyZXN1bHQ6IFNpZ25lclJlc3VsdCB8IFByb21pc2VMaWtlPFNpZ25lclJlc3VsdD4pID0+IHZvaWQsXG4gIHJlamVjdD86IChlcnJvcj86IEVycm9yKSA9PiB2b2lkLFxuICBzdGF0dXM6IEV4dGVybmFsUmVxdWVzdFByb21pc2VTdGF0dXMsXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogbnVtYmVyXG59XG5cbi8vIFByZXBhcmUgdG8gY3JlYXRlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlcGFyZUV4dGVybmFsUmVxdWVzdCB7XG4gIGlkOiBzdHJpbmc7XG4gIHNldFN0YXRlOiAocHJvbWlzZTogRXh0ZXJuYWxSZXF1ZXN0UHJvbWlzZSkgPT4gdm9pZDtcbiAgdXBkYXRlU3RhdGU6IChwcm9taXNlOiBQYXJ0aWFsPEV4dGVybmFsUmVxdWVzdFByb21pc2U+KSA9PiB2b2lkO1xufVxuXG4vLyBSZWplY3RcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVqZWN0RXh0ZXJuYWxSZXF1ZXN0IHtcbiAgaWQ6IHN0cmluZztcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgdGhyb3dFcnJvcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlUmVqZWN0RXh0ZXJuYWxSZXF1ZXN0ID0gdm9pZFxuXG4vLyBSZXNvbHZlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlc29sdmVFeHRlcm5hbFJlcXVlc3Qge1xuICBpZDogc3RyaW5nO1xuICBkYXRhOiBTaWduZXJSZXN1bHQ7XG59XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlUmVzb2x2ZUV4dGVybmFsUmVxdWVzdCA9IHZvaWRcblxuLy8vXG5cbmV4cG9ydCB0eXBlIEFjY291bnRSZWYgPSBBcnJheTxzdHJpbmc+XG5leHBvcnQgdHlwZSBBY2NvdW50UmVmTWFwID0gUmVjb3JkPHN0cmluZywgQWNjb3VudFJlZj5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFByaWNlID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZVByaWNlID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdEJhbGFuY2UgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlQmFsYW5jZSA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVCYWxhbmNlc1Zpc2liaWxpdHkgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q3Jvd2Rsb2FuID0gbnVsbFxuZXhwb3J0IHR5cGUgUmVxdWVzdFN1YnNjcmliZUNyb3dkbG9hbiA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVOZnQgPSBudWxsXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3Vic2NyaWJlU3Rha2luZyA9IG51bGxcbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzY3JpYmVTdGFraW5nUmV3YXJkID0gbnVsbFxuZXhwb3J0IGVudW0gVGhlbWVOYW1lcyB7XG4gIExJR0hUID0gJ2xpZ2h0JyxcbiAgREFSSyA9ICdkYXJrJyxcbiAgU1VCU1BBQ0UgPSAnc3Vic3BhY2UnXG59XG5cbmV4cG9ydCBlbnVtIE5FVFdPUktfRVJST1Ige1xuICBJTlZBTElEX0lORk9fVFlQRSA9ICdpbnZhbGlkSW5mb1R5cGUnLFxuICBJTkpFQ1RfU0NSSVBUX0RFVEVDVEVEID0gJ2luamVjdFNjcmlwdERldGVjdGVkJyxcbiAgRVhJU1RFRF9ORVRXT1JLID0gJ2V4aXN0ZWROZXR3b3JrJyxcbiAgRVhJU1RFRF9QUk9WSURFUiA9ICdleGlzdGVkUHJvdmlkZXInLFxuICBJTlZBTElEX1BST1ZJREVSID0gJ2ludmFsaWRQcm92aWRlcicsXG4gIE5PTkUgPSAnbm9uZScsXG4gIENPTk5FQ1RJT05fRkFJTFVSRSA9ICdjb25uZWN0aW9uRmFpbHVyZScsXG4gIFBST1ZJREVSX05PVF9TQU1FX05FVFdPUksgPSAncHJvdmlkZXJOb3RTYW1lTmV0d29yaydcbn1cblxuZXhwb3J0IGVudW0gTkVUV09SS19TVEFUVVMge1xuICBDT05ORUNURUQgPSAnY29ubmVjdGVkJyxcbiAgQ09OTkVDVElORyA9ICdjb25uZWN0aW5nJyxcbiAgRElTQ09OTkVDVEVEID0gJ2Rpc2Nvbm5lY3RlZCcsXG4gIFBFTkRJTkcgPSAncGVuZGluZydcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCB0eXBlIEJhc2VSZXF1ZXN0U2lnbiA9IHtcbiAgaWdub3JlV2FybmluZ3M/OiBib29sZWFuO1xufTtcblxuLy8gSW50ZXJuYWwgcmVxdWVzdDogcmVxdWVzdCBmcm9tIGV4dGVuc2lvbiwgbm90IGRBcHAuXG5leHBvcnQgdHlwZSBJbnRlcm5hbFJlcXVlc3RTaWduPFQgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24+ID0gT21pdDxULCAncGFzc3dvcmQnPjtcblxuZXhwb3J0IHR5cGUgVHhSZXN1bHRUeXBlID0ge1xuICBjaGFuZ2U6IHN0cmluZztcbiAgY2hhbmdlU3ltYm9sPzogc3RyaW5nO1xuICBmZWU/OiBzdHJpbmc7XG4gIGZlZVN5bWJvbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZnRUcmFuc2FjdGlvblJlcXVlc3Qge1xuICBuZXR3b3JrS2V5OiBzdHJpbmcsXG4gIHNlbmRlckFkZHJlc3M6IHN0cmluZyxcbiAgcmVjaXBpZW50QWRkcmVzczogc3RyaW5nLFxuXG4gIG5mdEl0ZW1OYW1lPzogc3RyaW5nLCAvLyBVc2UgZm9yIGNvbmZpcm1hdGlvbiB2aWV3IG9ubHlcbiAgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuICBuZnRJdGVtOiBOZnRJdGVtXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtTmZ0VHJhbnNhY3Rpb24gZXh0ZW5kcyBWYWxpZGF0ZVRyYW5zYWN0aW9uUmVzcG9uc2Uge1xuICB0eDogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1OZnRTdWJtaXRUcmFuc2FjdGlvbiBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIHNlbmRlckFkZHJlc3M6IHN0cmluZyxcbiAgcmVjaXBpZW50QWRkcmVzczogc3RyaW5nLFxuICBuZXR3b3JrS2V5OiBzdHJpbmcsXG4gIGVzdGltYXRlR2FzOiBzdHJpbmcsXG4gIHJhd1RyYW5zYWN0aW9uOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGVOZXR3b3JrUmVzcG9uc2Uge1xuICAvLyB2YWxpZGF0aW9uIHN0YXRlXG4gIHN1Y2Nlc3M6IGJvb2xlYW4sXG4gIGVycm9yPzogX0NIQUlOX1ZBTElEQVRJT05fRVJST1IsXG4gIGNvbmZsaWN0Q2hhaW4/OiBzdHJpbmcsXG4gIGNvbmZsaWN0S2V5Pzogc3RyaW5nLFxuXG4gIC8vIGNoYWluIHNwZWNcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZyxcbiAgYWRkcmVzc1ByZWZpeDogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHBhcmFJZDogbnVtYmVyIHwgbnVsbCxcbiAgZXZtQ2hhaW5JZDogbnVtYmVyIHwgbnVsbCwgLy8gbnVsbCBpZiBub3QgZXZtIGNvbXBhdGlibGVcbiAgc3ltYm9sOiBzdHJpbmcsXG4gIGRlY2ltYWxzOiBudW1iZXIsXG4gIGV4aXN0ZW50aWFsRGVwb3NpdDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGVOZXR3b3JrUmVxdWVzdCB7XG4gIHByb3ZpZGVyOiBzdHJpbmcsXG4gIGV4aXN0ZWRDaGFpblNsdWc/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGlNYXAge1xuICBzdWJzdHJhdGU6IFJlY29yZDxzdHJpbmcsIF9TdWJzdHJhdGVBcGk+O1xuICBldm06IFJlY29yZDxzdHJpbmcsIF9Fdm1BcGk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1cHBvcnRUcmFuc2ZlclJlc3BvbnNlIHtcbiAgc3VwcG9ydFRyYW5zZmVyOiBib29sZWFuO1xuICBzdXBwb3J0VHJhbnNmZXJBbGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEZyZWVCYWxhbmNlIHtcbiAgYWRkcmVzczogc3RyaW5nLFxuICBuZXR3b3JrS2V5OiBzdHJpbmcsXG4gIHRva2VuPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdE1heFRyYW5zZmVyYWJsZSB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICB0b2tlbj86IHN0cmluZyxcbiAgaXNYY21UcmFuc2Zlcj86IGJvb2xlYW4sXG4gIGRlc3RDaGFpbjogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyYW5zZmVyQ2hlY2tSZWZlcmVuY2VDb3VudCB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgbmV0d29ya0tleTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyYW5zZmVyQ2hlY2tTdXBwb3J0aW5nIHtcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICB0b2tlblNsdWc6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUcmFuc2ZlckV4aXN0ZW50aWFsRGVwb3NpdCB7XG4gIHRva2VuU2x1Zzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFNhdmVSZWNlbnRBY2NvdW50IHtcbiAgYWNjb3VudElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic3RyYXRlTmZ0VHJhbnNhY3Rpb24ge1xuICBlcnJvcjogYm9vbGVhbjtcbiAgZXN0aW1hdGVkRmVlPzogc3RyaW5nO1xuICBiYWxhbmNlRXJyb3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic3RyYXRlTmZ0U3VibWl0VHJhbnNhY3Rpb24gZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsO1xuICBzZW5kZXJBZGRyZXNzOiBzdHJpbmc7XG4gIG5mdEl0ZW1OYW1lPzogc3RyaW5nO1xuICByZWNpcGllbnRBZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdWJzdHJhdGVOZnRTdWJtaXRUcmFuc2FjdGlvbiA9IEludGVybmFsUmVxdWVzdFNpZ248U3Vic3RyYXRlTmZ0U3VibWl0VHJhbnNhY3Rpb24+O1xuZXhwb3J0IHR5cGUgUmVxdWVzdEV2bU5mdFN1Ym1pdFRyYW5zYWN0aW9uID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxFdm1OZnRTdWJtaXRUcmFuc2FjdGlvbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFjY291bnRNZXRhe1xuICBhZGRyZXNzOiBzdHJpbmcgfCBVaW50OEFycmF5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlQWNjb3VudE1ldGF7XG4gIG1ldGE6IEtleXJpbmdQYWlyJE1ldGE7XG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RFdm1FdmVudHMgPSBudWxsO1xuZXhwb3J0IHR5cGUgRXZtRXZlbnRUeXBlID0gJ2Nvbm5lY3QnIHwgJ2Rpc2Nvbm5lY3QnIHwgJ2FjY291bnRzQ2hhbmdlZCcgfCAnY2hhaW5DaGFuZ2VkJyB8ICdtZXNzYWdlJyB8ICdkYXRhJyB8ICdyZWNvbm5lY3QnIHwgJ2Vycm9yJztcbmV4cG9ydCB0eXBlIEV2bUFjY291bnRzQ2hhbmdlZFBheWxvYWQgPSBzdHJpbmcgW107XG5leHBvcnQgdHlwZSBFdm1DaGFpbkNoYW5nZWRQYXlsb2FkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgRXZtQ29ubmVjdFBheWxvYWQgPSB7IGNoYWluSWQ6IEV2bUNoYWluQ2hhbmdlZFBheWxvYWQgfVxuZXhwb3J0IHR5cGUgRXZtRGlzY29ubmVjdFBheWxvYWQgPSB1bmtub3duXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtRXZlbnQge1xuICB0eXBlOiBFdm1FdmVudFR5cGUsXG4gIHBheWxvYWQ6IEV2bUFjY291bnRzQ2hhbmdlZFBheWxvYWQgfCBFdm1DaGFpbkNoYW5nZWRQYXlsb2FkIHwgRXZtQ29ubmVjdFBheWxvYWQgfCBFdm1EaXNjb25uZWN0UGF5bG9hZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdm1BcHBTdGF0ZSB7XG4gIG5ldHdvcmtLZXk/OiBzdHJpbmcsXG4gIGNoYWluSWQ/OiBzdHJpbmcsXG4gIGlzQ29ubmVjdGVkPzogYm9vbGVhbixcbiAgd2ViMz86IFdlYjMsXG4gIGxpc3RlbkV2ZW50cz86IHN0cmluZ1tdXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RFdm1Qcm92aWRlclNlbmQgPSBKc29uUnBjUGF5bG9hZDtcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUV2bVByb3ZpZGVyU2VuZCB7XG4gIGVycm9yOiAoRXJyb3IgfCBudWxsKTtcbiAgcmVzdWx0PzogSnNvblJwY1Jlc3BvbnNlO1xufVxuXG5leHBvcnQgZW51bSBFdm1Qcm92aWRlckVycm9yVHlwZSB7XG4gIFVTRVJfUkVKRUNURURfUkVRVUVTVCA9ICdVU0VSX1JFSkVDVEVEX1JFUVVFU1QnLFxuICBVTkFVVEhPUklaRUQgPSAnVU5BVVRIT1JJWkVEJyxcbiAgVU5TVVBQT1JURURfTUVUSE9EID0gJ1VOU1VQUE9SVEVEX01FVEhPRCcsXG4gIERJU0NPTk5FQ1RFRCA9ICdESVNDT05ORUNURUQnLFxuICBDSEFJTl9ESVNDT05ORUNURUQgPSAnQ0hBSU5fRElTQ09OTkVDVEVEJyxcbiAgSU5WQUxJRF9QQVJBTVMgPSAnSU5WQUxJRF9QQVJBTVMnLFxuICBJTlRFUk5BTF9FUlJPUiA9ICdJTlRFUk5BTF9FUlJPUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtU2VuZFRyYW5zYWN0aW9uUGFyYW1zIHtcbiAgZnJvbTogc3RyaW5nO1xuICB0bz86IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGdhc0xpbWl0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBtYXhQcmlvcml0eUZlZVBlckdhcz86IHN0cmluZyB8IG51bWJlcjtcbiAgbWF4RmVlUGVyR2FzPzogc3RyaW5nIHwgbnVtYmVyO1xuICBnYXNQcmljZT86IHN0cmluZyB8IG51bWJlcjtcbiAgZGF0YT86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXRjaE5ldHdvcmtSZXF1ZXN0IHtcbiAgbmV0d29ya0tleTogc3RyaW5nO1xuICBhZGRyZXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNpZ25SZXF1ZXN0IHtcbiAgYWNjb3VudDogQWNjb3VudEpzb247XG4gIGhhc2hQYXlsb2FkOiBzdHJpbmc7XG4gIGNhblNpZ246IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtU2lnbmF0dXJlUmVxdWVzdCBleHRlbmRzIEV2bVNpZ25SZXF1ZXN0IHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwYXlsb2FkOiB1bmtub3duO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3QgZXh0ZW5kcyBUcmFuc2FjdGlvbkNvbmZpZywgRXZtU2lnblJlcXVlc3Qge1xuICBlc3RpbWF0ZUdhczogc3RyaW5nO1xuICBwYXJzZURhdGE6IEV2bVRyYW5zYWN0aW9uRGF0YTtcbiAgaXNUb0NvbnRyYWN0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBFdm1XYXRjaFRyYW5zYWN0aW9uUmVxdWVzdCA9IEV2bVNlbmRUcmFuc2FjdGlvblJlcXVlc3Q7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uc1F1ZXVlSXRlbU9wdGlvbnMge1xuICByZXF1aXJlZFBhc3N3b3JkPzogYm9vbGVhbjtcbiAgYWRkcmVzcz86IHN0cmluZztcbiAgbmV0d29ya0tleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25zUXVldWVJdGVtPFQ+IGV4dGVuZHMgQ29uZmlybWF0aW9uc1F1ZXVlSXRlbU9wdGlvbnMsIENvbmZpcm1hdGlvblJlcXVlc3RCYXNlIHtcbiAgcGF5bG9hZDogVDtcbiAgcGF5bG9hZEpzb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25SZXN1bHQ8VD4gZXh0ZW5kcyBDb25maXJtYXRpb25SZXF1ZXN0QmFzZSB7XG4gIGlzQXBwcm92ZWQ6IGJvb2xlYW47XG4gIHBheWxvYWQ/OiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2bVJlcXVlc3RFeHRlcm5hbCB7XG4gIGhhc2hQYXlsb2FkOiBzdHJpbmc7XG4gIGNhblNpZ246IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtU2VuZFRyYW5zYWN0aW9uUmVxdWVzdEV4dGVybmFsIGV4dGVuZHMgRXZtU2VuZFRyYW5zYWN0aW9uUmVxdWVzdCwgRXZtUmVxdWVzdEV4dGVybmFsIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtU2lnbmF0dXJlUmVxdWVzdEV4dGVybmFsIGV4dGVuZHMgRXZtU2lnbmF0dXJlUmVxdWVzdCwgRXZtUmVxdWVzdEV4dGVybmFsIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkTmV0d29ya1JlcXVlc3RFeHRlcm5hbCB7IC8vIGN1cnJlbnRseSBvbmx5IHN1cHBvcnQgYWRkaW5nIHB1cmUgRXZtIG5ldHdvcmtcbiAgY2hhaW5JZDogc3RyaW5nO1xuICBycGNVcmxzOiBzdHJpbmdbXTtcbiAgY2hhaW5OYW1lOiBzdHJpbmc7XG4gIGJsb2NrRXhwbG9yZXJVcmxzPzogc3RyaW5nW107XG4gIHJlcXVlc3RJZD86IHN0cmluZztcbiAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc3ltYm9sOiBzdHJpbmc7XG4gICAgZGVjaW1hbHM6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGROZXR3b3JrRXh0ZXJuYWxSZXF1ZXN0IHsgLy8gY3VycmVudGx5IG9ubHkgc3VwcG9ydCBhZGRpbmcgcHVyZSBFdm0gbmV0d29ya1xuICBjaGFpbklkOiBzdHJpbmc7XG4gIHJwY1VybDogc3RyaW5nO1xuICBjaGFpbk5hbWU6IHN0cmluZztcbiAgYmxvY2tFeHBsb3JlclVybDogc3RyaW5nO1xuICByZXF1ZXN0SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRUb2tlblJlcXVlc3RFeHRlcm5hbCB7XG4gIHNsdWc/OiBzdHJpbmc7XG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xuICBvcmlnaW5DaGFpbjogc3RyaW5nO1xuICB0eXBlOiBfQXNzZXRUeXBlO1xuICBuYW1lOiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBkZWNpbWFsczogbnVtYmVyO1xuICB2YWxpZGF0ZWQ6IGJvb2xlYW47XG4gIGNvbnRyYWN0RXJyb3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGVmaW5pdGlvbnMge1xuICBhZGROZXR3b3JrUmVxdWVzdDogW0NvbmZpcm1hdGlvbnNRdWV1ZUl0ZW08X05ldHdvcmtVcHNlcnRQYXJhbXM+LCBDb25maXJtYXRpb25SZXN1bHQ8bnVsbD5dLFxuICBhZGRUb2tlblJlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPEFkZFRva2VuUmVxdWVzdEV4dGVybmFsPiwgQ29uZmlybWF0aW9uUmVzdWx0PGJvb2xlYW4+XSxcbiAgc3dpdGNoTmV0d29ya1JlcXVlc3Q6IFtDb25maXJtYXRpb25zUXVldWVJdGVtPFN3aXRjaE5ldHdvcmtSZXF1ZXN0PiwgQ29uZmlybWF0aW9uUmVzdWx0PGJvb2xlYW4+XSxcbiAgZXZtU2lnbmF0dXJlUmVxdWVzdDogW0NvbmZpcm1hdGlvbnNRdWV1ZUl0ZW08RXZtU2lnbmF0dXJlUmVxdWVzdD4sIENvbmZpcm1hdGlvblJlc3VsdDxzdHJpbmc+XSxcbiAgZXZtU2VuZFRyYW5zYWN0aW9uUmVxdWVzdDogW0NvbmZpcm1hdGlvbnNRdWV1ZUl0ZW08RXZtU2VuZFRyYW5zYWN0aW9uUmVxdWVzdD4sIENvbmZpcm1hdGlvblJlc3VsdDxzdHJpbmc+XVxuICBldm1XYXRjaFRyYW5zYWN0aW9uUmVxdWVzdDogW0NvbmZpcm1hdGlvbnNRdWV1ZUl0ZW08RXZtV2F0Y2hUcmFuc2FjdGlvblJlcXVlc3Q+LCBDb25maXJtYXRpb25SZXN1bHQ8c3RyaW5nPl1cbn1cblxuZXhwb3J0IHR5cGUgQ29uZmlybWF0aW9uVHlwZSA9IGtleW9mIENvbmZpcm1hdGlvbkRlZmluaXRpb25zO1xuXG5leHBvcnQgdHlwZSBDb25maXJtYXRpb25zUXVldWUgPSB7XG4gIFtDVCBpbiBDb25maXJtYXRpb25UeXBlXTogUmVjb3JkPHN0cmluZywgQ29uZmlybWF0aW9uRGVmaW5pdGlvbnNbQ1RdWzBdPjtcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdENvbmZpcm1hdGlvbnNTdWJzY3JpYmUgPSBudWxsO1xuXG4vLyBEZXNpZ24gdG8gdXNlIG9ubHkgb25lIGNvbmZpcm1hdGlvblxuZXhwb3J0IHR5cGUgUmVxdWVzdENvbmZpcm1hdGlvbkNvbXBsZXRlID0ge1xuICBbQ1QgaW4gQ29uZmlybWF0aW9uVHlwZV0/OiBDb25maXJtYXRpb25EZWZpbml0aW9uc1tDVF1bMV07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNUeEluZm8ge1xuICBmZWU6IHN0cmluZyxcbiAgYmFsYW5jZUVycm9yOiBib29sZWFuLFxuICByYXdGZWU/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb25kaW5nT3B0aW9uUGFyYW1zIHtcbiAgY2hhaW46IHN0cmluZztcbiAgdHlwZTogU3Rha2luZ1R5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlTW9kZUpzb24ge1xuICBuZXR3b3JrS2V5czogc3RyaW5nW10sXG4gIHRoZW1lOiBUaGVtZU5hbWVzLFxuICBhdXRvVHJpZ2dlckRvbWFpbjogc3RyaW5nIC8vIFJlZ2V4IGZvciBhdXRvIHRyaWdnZXIgc2luZ2xlIG1vZGVcbn1cblxuLy8vIEV2bSB0cmFuc2FjdGlvblxuXG5leHBvcnQgdHlwZSBOZXN0ZWRBcnJheTxUPiA9IFQgfCBOZXN0ZWRBcnJheTxUPltdO1xuXG4vLy8gRXZtIENvbnRyYWN0IElucHV0XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZtVHJhbnNhY3Rpb25Bcmcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgY2hpbGRyZW4/OiBFdm1UcmFuc2FjdGlvbkFyZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlRXZtVHJhbnNhY3Rpb25EYXRhIHtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIG1ldGhvZE5hbWU6IHN0cmluZztcbiAgYXJnczogRXZtVHJhbnNhY3Rpb25BcmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UGFyc2VFdm1Db250cmFjdElucHV0IHtcbiAgZGF0YTogc3RyaW5nO1xuICBjb250cmFjdDogc3RyaW5nO1xuICBjaGFpbklkOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIEV2bVRyYW5zYWN0aW9uRGF0YSA9IFBhcnNlRXZtVHJhbnNhY3Rpb25EYXRhIHwgc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUGFyc2VFdm1Db250cmFjdElucHV0IHtcbiAgcmVzdWx0OiBFdm1UcmFuc2FjdGlvbkRhdGE7XG59XG5cbi8vLyBMZWRnZXJcblxuZXhwb3J0IGludGVyZmFjZSBMZWRnZXJOZXR3b3JrIHtcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZzsgLy8gR2VuZXNpc0hhc2ggZm9yIHN1YnN0cmF0ZSBhcHBcbiAgbmV0d29ya05hbWU6IHN0cmluZzsgLy8gRGlzcGxheSBpbiBzZWxlY3RvclxuICBhY2NvdW50TmFtZTogc3RyaW5nOyAvLyBOYW1lIGZvciBhY2NvdW50KExlZGdlciBYIEFjY291bnQpXG4gIGFwcE5hbWU6IHN0cmluZzsgLy8gTmFtZSBpbiBMZWRnZXJcbiAgbmV0d29yazogc3RyaW5nOyAvLyBuZXR3b3JrIGlzIHByZWRlZmluZWQgaW4gbGVkZ2VyIGxpYlxuICBzbHVnOiBzdHJpbmc7IC8vIHNsdWcgaW4gY2hhaW4gbGlzdFxuICBpY29uOiAnc3Vic3RyYXRlJyB8ICdldGhlcmV1bSc7IC8vIERlcHJlY2F0ZWRcbiAgaXNEZXZNb2RlOiBib29sZWFuOyAvLyBEZXYgbW9kZSBvbiBMZWRnZXJcbiAgaXNFdGhlcmV1bTogYm9vbGVhbjsgLy8gVXNlIGZvciBldm0gYWNjb3VudFxufVxuLy8vIE9uLXJhbXBcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FrTmV0d29yayB7XG4gIG5ldHdvcmtzOiBzdHJpbmdbXTtcbiAgdG9rZW5zPzogc3RyaW5nW107XG59XG5cbi8vLyBRciBTaWduXG5cbi8vIFBhcnNlIFN1YnN0cmF0ZVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1hdHRlZE1ldGhvZCB7XG4gIGFyZ3M/OiBBcmdJbmZvW107XG4gIG1ldGhvZE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmdJbmZvIHtcbiAgYXJnTmFtZTogc3RyaW5nO1xuICBhcmdWYWx1ZTogc3RyaW5nIHwgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJhSW5mb3tcbiAgcGVyaW9kOiBudW1iZXI7XG4gIHBoYXNlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VQYXJzZVRyYW5zYWN0aW9uU3Vic3RyYXRlIHtcbiAgZXJhOiBFcmFJbmZvIHwgc3RyaW5nO1xuICBub25jZTogbnVtYmVyO1xuICBtZXRob2Q6IHN0cmluZyB8IEZvcm1hdHRlZE1ldGhvZFtdO1xuICB0aXA6IG51bWJlcjtcbiAgc3BlY1ZlcnNpb246IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RQYXJzZVRyYW5zYWN0aW9uU3Vic3RyYXRlIHtcbiAgZGF0YTogc3RyaW5nO1xuICBuZXR3b3JrS2V5OiBzdHJpbmc7XG59XG5cbi8vIFBhcnNlIEV2bVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RRclBhcnNlUkxQIHtcbiAgZGF0YTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUXJQYXJzZVJMUCB7XG4gIGRhdGE6IEV2bVRyYW5zYWN0aW9uRGF0YTtcbiAgaW5wdXQ6IHN0cmluZztcbiAgbm9uY2U6IG51bWJlcjtcbiAgdG86IHN0cmluZztcbiAgZ2FzOiBudW1iZXI7XG4gIGdhc1ByaWNlOiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbi8vIENoZWNrIGxvY2tcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QWNjb3VudElzTG9ja2VkIHtcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlQWNjb3VudElzTG9ja2VkIHtcbiAgaXNMb2NrZWQ6IGJvb2xlYW47XG4gIHJlbWFpbmluZ1RpbWU6IG51bWJlcjtcbn1cblxuLy8gU2lnblxuXG5leHBvcnQgdHlwZSBTaWduZXJEYXRhVHlwZSA9ICd0cmFuc2FjdGlvbicgfCAnbWVzc2FnZSdcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UXJTaWduU3Vic3RyYXRlIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRhOiBzdHJpbmc7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVFyU2lnblN1YnN0cmF0ZSB7XG4gIHNpZ25hdHVyZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RRclNpZ25Fdm0ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdHlwZTogJ21lc3NhZ2UnIHwgJ3RyYW5zYWN0aW9uJ1xuICBjaGFpbklkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUXJTaWduRXZtIHtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG59XG5cbi8vLyBUcmFuc2ZlclxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDaGVja1RyYW5zZmVyIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgbmV0d29ya0tleTogc3RyaW5nLFxuICBmcm9tOiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4gIHZhbHVlPzogc3RyaW5nLFxuICB0cmFuc2ZlckFsbD86IGJvb2xlYW5cbiAgdG9rZW5TbHVnOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0ZVRyYW5zYWN0aW9uUmVzcG9uc2Uge1xuICBlcnJvcnM6IFRyYW5zYWN0aW9uRXJyb3JbXSxcbiAgd2FybmluZ3M6IFRyYW5zYWN0aW9uV2FybmluZ1tdLFxuICB0cmFuc2Zlck5hdGl2ZUFtb3VudD86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VHJhbnNmZXIgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFJlcXVlc3RDaGVja1RyYW5zZmVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q2hlY2tDcm9zc0NoYWluVHJhbnNmZXIgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBvcmlnaW5OZXR3b3JrS2V5OiBzdHJpbmcsXG4gIGRlc3RpbmF0aW9uTmV0d29ya0tleTogc3RyaW5nLFxuICBmcm9tOiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4gIHRyYW5zZmVyQWxsPzogYm9vbGVhbixcbiAgdmFsdWU6IHN0cmluZyxcbiAgdG9rZW5TbHVnOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdENyb3NzQ2hhaW5UcmFuc2ZlciA9IEludGVybmFsUmVxdWVzdFNpZ248UmVxdWVzdENoZWNrQ3Jvc3NDaGFpblRyYW5zZmVyPjtcblxuLy8vIFN0YWtlXG5cbi8vIFN0YWtpbmcgJiBCb25kaW5nXG5leHBvcnQgaW50ZXJmYWNlIENoYWluU3Rha2luZ01ldGFkYXRhIHtcbiAgY2hhaW46IHN0cmluZztcbiAgdHlwZTogU3Rha2luZ1R5cGU7XG5cbiAgLy8gZXNzZW50aWFsXG4gIGVyYTogbnVtYmVyLCAvLyBhbHNvIHJvdW5kIGZvciBwYXJhY2hhaW5zXG4gIG1pbkpvaW5Ob21pbmF0aW9uUG9vbD86IHN0cmluZzsgLy8gZm9yIHJlbGF5Y2hhaW4gc3VwcG9ydHMgbm9taW5hdGlvbiBwb29sXG4gIG1pblN0YWtlOiBzdHJpbmc7XG4gIG1heFZhbGlkYXRvclBlck5vbWluYXRvcjogbnVtYmVyO1xuICBtYXhXaXRoZHJhd2FsUmVxdWVzdFBlclZhbGlkYXRvcjogbnVtYmVyO1xuICBhbGxvd0NhbmNlbFVuc3Rha2luZzogYm9vbGVhbjtcbiAgdW5zdGFraW5nUGVyaW9kOiBudW1iZXI7IC8vIGluIGhvdXJzXG5cbiAgLy8gc3VwcGxlbWVudGFsXG4gIGV4cGVjdGVkUmV0dXJuPzogbnVtYmVyOyAvLyBpbiAlLCBhbm51YWxseVxuICBpbmZsYXRpb24/OiBudW1iZXI7IC8vIGluICUsIGFubnVhbGx5XG4gIG5vbWluYXRvckNvdW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vbWluYXRpb25JbmZvIHtcbiAgY2hhaW46IHN0cmluZztcbiAgdmFsaWRhdG9yQWRkcmVzczogc3RyaW5nOyAvLyBjYW4gYmUgYSBub21pbmF0aW9uIHBvb2wgaWRcbiAgdmFsaWRhdG9ySWRlbnRpdHk/OiBzdHJpbmc7XG4gIGFjdGl2ZVN0YWtlOiBzdHJpbmc7XG5cbiAgaGFzVW5zdGFraW5nPzogYm9vbGVhbjtcbiAgdmFsaWRhdG9yTWluU3Rha2U/OiBzdHJpbmc7XG4gIHN0YXR1czogU3Rha2luZ1N0YXR1cztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXROb21pbmF0aW9uUG9vbHNCb25kZWRQb29sSW5uZXIge1xuICBwb2ludHM6IG51bWJlcixcbiAgc3RhdGU6ICdPcGVuJyB8ICdEZXN0cm95aW5nJyB8ICdMb2NrZWQnLFxuICBtZW1iZXJDb3VudGVyOiBudW1iZXIsXG4gIHJvbGVzOiB7XG4gICAgZGVwb3NpdG9yOiBzdHJpbmcsXG4gICAgcm9vdDogc3RyaW5nLFxuICAgIG5vbWluYXRvcjogc3RyaW5nLFxuICAgIGJvdW5jZXI6IHN0cmluZ1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9taW5hdGlvblBvb2xJbmZvIGV4dGVuZHMgUGljazxQYWxsZXROb21pbmF0aW9uUG9vbHNCb25kZWRQb29sSW5uZXIsICdyb2xlcycgfCAnbWVtYmVyQ291bnRlcicgfCAnc3RhdGUnPiB7XG4gIGlkOiBudW1iZXIsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgbmFtZT86IHN0cmluZyxcbiAgYm9uZGVkQW1vdW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGVudW0gVW5zdGFraW5nU3RhdHVzIHtcbiAgQ0xBSU1BQkxFID0gJ0NMQUlNQUJMRScsXG4gIFVOTE9DS0lORyA9ICdVTkxPQ0tJTkcnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5zdGFraW5nSW5mbyB7XG4gIGNoYWluOiBzdHJpbmc7XG4gIHN0YXR1czogVW5zdGFraW5nU3RhdHVzO1xuICBjbGFpbWFibGU6IHN0cmluZzsgLy8gYW1vdW50IHRvIGJlIHdpdGhkcmF3blxuICB3YWl0aW5nVGltZTogbnVtYmVyOyAvLyBpbiBob3Vyc1xuICB2YWxpZGF0b3JBZGRyZXNzPzogc3RyaW5nOyAvLyBtaWdodCB1bnN0YWtlIGZyb20gYSB2YWxpZGF0b3Igb3Igbm90XG59XG5cbmV4cG9ydCBlbnVtIFN0YWtpbmdTdGF0dXMge1xuICBFQVJOSU5HX1JFV0FSRCA9ICdFQVJOSU5HX1JFV0FSRCcsXG4gIFBBUlRJQUxMWV9FQVJOSU5HID0gJ1BBUlRJQUxMWV9FQVJOSU5HJyxcbiAgTk9UX0VBUk5JTkcgPSAnTk9UX0VBUk5JTkcnLFxuICBXQUlUSU5HID0gJ1dBSVRJTkcnLFxuICBOT1RfU1RBS0lORyA9ICdOT1RfU1RBS0lORydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb21pbmF0b3JNZXRhZGF0YSB7XG4gIGNoYWluOiBzdHJpbmcsXG4gIHR5cGU6IFN0YWtpbmdUeXBlLFxuXG4gIHN0YXR1czogU3Rha2luZ1N0YXR1cyxcbiAgYWRkcmVzczogc3RyaW5nLFxuICBhY3RpdmVTdGFrZTogc3RyaW5nLFxuICBub21pbmF0aW9uczogTm9taW5hdGlvbkluZm9bXSxcbiAgdW5zdGFraW5nczogVW5zdGFraW5nSW5mb1tdLFxuICBpc0JvbmRlZEJlZm9yZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0b3JJbmZvIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjaGFpbjogc3RyaW5nO1xuXG4gIHRvdGFsU3Rha2U6IHN0cmluZztcbiAgb3duU3Rha2U6IHN0cmluZztcbiAgb3RoZXJTdGFrZTogc3RyaW5nO1xuXG4gIG1pbkJvbmQ6IHN0cmluZztcbiAgbm9taW5hdG9yQ291bnQ6IG51bWJlcjtcbiAgY29tbWlzc2lvbjogbnVtYmVyOyAvLyBpbiAlXG4gIGV4cGVjdGVkUmV0dXJuPzogbnVtYmVyOyAvLyBpbiAlLCBhbm51YWxseVxuXG4gIGJsb2NrZWQ6IGJvb2xlYW47XG4gIGlkZW50aXR5Pzogc3RyaW5nO1xuICBpc1ZlcmlmaWVkOiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICBpc0Nyb3dkZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9uZGluZ1N1Ym1pdFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIGNoYWluOiBzdHJpbmcsXG4gIHR5cGU6IFN0YWtpbmdUeXBlLFxuICBub21pbmF0b3JNZXRhZGF0YT86IE5vbWluYXRvck1ldGFkYXRhLCAvLyB1bmRlZmluZWQgaWYgdXNlciBoYXMgbm8gc3Rha2VcbiAgYW1vdW50OiBzdHJpbmcsXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgc2VsZWN0ZWRWYWxpZGF0b3JzOiBWYWxpZGF0b3JJbmZvW10sXG4gIGxvY2tQZXJpb2Q/OiBudW1iZXIgLy8gaW4gbW9udGhcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdEJvbmRpbmdTdWJtaXQgPSBJbnRlcm5hbFJlcXVlc3RTaWduPEJvbmRpbmdTdWJtaXRQYXJhbXM+O1xuXG4vLyBVbkJvbmRpbmdcblxuZXhwb3J0IGludGVyZmFjZSBVbmJvbmRpbmdTdWJtaXRQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBhbW91bnQ6IHN0cmluZyxcbiAgY2hhaW46IHN0cmluZyxcbiAgbm9taW5hdG9yTWV0YWRhdGE6IE5vbWluYXRvck1ldGFkYXRhLFxuICAvLyBmb3Igc29tZSBjaGFpbnNcbiAgdmFsaWRhdG9yQWRkcmVzcz86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VW5ib25kaW5nU3VibWl0ID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxVbmJvbmRpbmdTdWJtaXRQYXJhbXM+O1xuXG4vLyBXaXRoZHJhd1N0YWtlXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2VXaXRoZHJhd2FsUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgbm9taW5hdG9yTWV0YWRhdGE6IE5vbWluYXRvck1ldGFkYXRhLFxuICB1bnN0YWtpbmdJbmZvOiBVbnN0YWtpbmdJbmZvLFxuICBjaGFpbjogc3RyaW5nLFxuICB2YWxpZGF0b3JBZGRyZXNzPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdGFrZVdpdGhkcmF3YWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN0YWtlV2l0aGRyYXdhbFBhcmFtcz47XG5cbi8vIENsYWltXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2VDbGFpbVJld2FyZFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgY2hhaW46IHN0cmluZyxcbiAgc3Rha2luZ1R5cGU6IFN0YWtpbmdUeXBlLFxuICB1bmNsYWltZWRSZXdhcmQ/OiBzdHJpbmcsXG4gIGJvbmRSZXdhcmQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdGFrZUNsYWltUmV3YXJkID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZUNsYWltUmV3YXJkUGFyYW1zPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGFrZUNhbmNlbFdpdGhkcmF3YWxQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIHNlbGVjdGVkVW5zdGFraW5nOiBVbnN0YWtpbmdJbmZvXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdGFrZUNhbmNlbFdpdGhkcmF3YWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN0YWtlQ2FuY2VsV2l0aGRyYXdhbFBhcmFtcz47XG5cbi8vIENvbXBvdW5kXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2VQb29saW5nQm9uZGluZ1BhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIG5vbWluYXRvck1ldGFkYXRhPzogTm9taW5hdG9yTWV0YWRhdGEsXG4gIGNoYWluOiBzdHJpbmcsXG4gIHNlbGVjdGVkUG9vbDogTm9taW5hdGlvblBvb2xJbmZvLFxuICBhbW91bnQ6IHN0cmluZyxcbiAgYWRkcmVzczogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdGFrZVBvb2xpbmdCb25kaW5nID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdGFrZVBvb2xpbmdCb25kaW5nUGFyYW1zPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGFrZVBvb2xpbmdVbmJvbmRpbmdQYXJhbXMgZXh0ZW5kcyBCYXNlUmVxdWVzdFNpZ24ge1xuICBub21pbmF0b3JNZXRhZGF0YTogTm9taW5hdG9yTWV0YWRhdGEsXG4gIGNoYWluOiBzdHJpbmcsXG4gIGFtb3VudDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdGFrZVBvb2xpbmdVbmJvbmRpbmcgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN0YWtlUG9vbGluZ1VuYm9uZGluZ1BhcmFtcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZWdhdGlvbkl0ZW0ge1xuICBvd25lcjogc3RyaW5nLFxuICBhbW91bnQ6IHN0cmluZywgLy8gcmF3IGFtb3VudCBzdHJpbmdcbiAgaWRlbnRpdHk/OiBzdHJpbmcsXG4gIG1pbkJvbmQ6IHN0cmluZyxcbiAgaGFzU2NoZWR1bGVkUmVxdWVzdDogYm9vbGVhblxuICBpY29uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWtlRGVsZWdhdGlvblJlcXVlc3Qge1xuICBhZGRyZXNzOiBzdHJpbmcsXG4gIG5ldHdvcmtLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrRXhpc3RpbmdUdXJpbmdDb21wb3VuZFBhcmFtcyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY29sbGF0b3JBZGRyZXNzOiBzdHJpbmc7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeGlzdGluZ1R1cmluZ0NvbXBvdW5kVGFzayB7XG4gIGV4aXN0OiBib29sZWFuO1xuICB0YXNrSWQ6IHN0cmluZztcbiAgYWNjb3VudE1pbmltdW06IG51bWJlcjtcbiAgZnJlcXVlbmN5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHVyaW5nU3Rha2VDb21wb3VuZFJlc3Age1xuICB0eEluZm86IEJhc2ljVHhJbmZvLFxuICBvcHRpbWFsRnJlcXVlbmN5OiBzdHJpbmcsXG4gIGluaXRUaW1lOiBudW1iZXIsXG4gIGNvbXBvdW5kRmVlOiBzdHJpbmcsXG4gIHJhd0NvbXBvdW5kRmVlPzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHVyaW5nU3Rha2VDb21wb3VuZFBhcmFtcyBleHRlbmRzIEJhc2VSZXF1ZXN0U2lnbiB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgY29sbGF0b3JBZGRyZXNzOiBzdHJpbmcsXG4gIG5ldHdvcmtLZXk6IHN0cmluZyxcbiAgYWNjb3VudE1pbmltdW06IHN0cmluZyxcbiAgYm9uZGVkQW1vdW50OiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RUdXJpbmdTdGFrZUNvbXBvdW5kID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxUdXJpbmdTdGFrZUNvbXBvdW5kUGFyYW1zPjtcblxuZXhwb3J0IGludGVyZmFjZSBUdXJpbmdDYW5jZWxTdGFrZUNvbXBvdW5kUGFyYW1zIGV4dGVuZHMgQmFzZVJlcXVlc3RTaWduIHtcbiAgdGFza0lkOiBzdHJpbmc7XG4gIG5ldHdvcmtLZXk6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VHVyaW5nQ2FuY2VsU3Rha2VDb21wb3VuZCA9IEludGVybmFsUmVxdWVzdFNpZ248VHVyaW5nQ2FuY2VsU3Rha2VDb21wb3VuZFBhcmFtcz47XG5cbi8vLyBDcmVhdGUgUVJcblxuLy8gVHJhbnNmZXJcblxuZXhwb3J0IHR5cGUgUmVxdWVzdFRyYW5zZmVyRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFJlcXVlc3RDaGVja1RyYW5zZmVyPjtcblxuLy8gWENNXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RDcm9zc0NoYWluVHJhbnNmZXJFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248UmVxdWVzdENoZWNrQ3Jvc3NDaGFpblRyYW5zZmVyPjtcblxuLy8gTkZUXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3ROZnRUcmFuc2ZlckV4dGVybmFsU3Vic3RyYXRlID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxTdWJzdHJhdGVOZnRTdWJtaXRUcmFuc2FjdGlvbj47XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3ROZnRUcmFuc2ZlckV4dGVybmFsRXZtID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxFdm1OZnRTdWJtaXRUcmFuc2FjdGlvbj47XG5cbi8vIFN0YWtlXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdGFrZUV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxCb25kaW5nU3VibWl0UGFyYW1zPjtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdFVuU3Rha2VFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248VW5ib25kaW5nU3VibWl0UGFyYW1zPjtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdFdpdGhkcmF3U3Rha2VFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248U3Rha2VXaXRoZHJhd2FsUGFyYW1zPjtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENsYWltUmV3YXJkRXh0ZXJuYWwgPSBJbnRlcm5hbFJlcXVlc3RTaWduPFN0YWtlQ2xhaW1SZXdhcmRQYXJhbXM+O1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Q3JlYXRlQ29tcG91bmRTdGFrZUV4dGVybmFsID0gSW50ZXJuYWxSZXF1ZXN0U2lnbjxUdXJpbmdTdGFrZUNvbXBvdW5kUGFyYW1zPjtcblxuZXhwb3J0IHR5cGUgUmVxdWVzdENhbmNlbENvbXBvdW5kU3Rha2VFeHRlcm5hbCA9IEludGVybmFsUmVxdWVzdFNpZ248VHVyaW5nQ2FuY2VsU3Rha2VDb21wb3VuZFBhcmFtcz47XG5cbmV4cG9ydCBlbnVtIENoYWluRWRpdFN0YW5kYXJkIHtcbiAgRVZNID0gJ0VWTScsXG4gIFNVQlNUUkFURSA9ICdTVUJTVFJBVEUnLFxuICBVTktOT1dOID0gJ1VOS05PV04nLFxuICBNSVhFRCA9ICdNSVhFRCcgLy8gdGFrZXMgcm9vdCBpbiBhIHN0YW5kYXJkIChTdWJzdHJhdGUsIEV2bSwuLi4pIGJ1dCBhbHNvIGNvbXBhdGlibGUgd2l0aCBvdGhlciBzdGFuZGFyZHNcbn1cblxuLy8gQ2hhaW5TZXJ2aWNlXG4vLyBmb3IgY3VzdG9tIG5ldHdvcmtcbmV4cG9ydCB0eXBlIENoYWluRWRpdEluZm8gPSB7IC8vIG9ubHkgc3VwcG9ydCBwdXJlIHN1YnN0cmF0ZSBvciBFdm0gbmV0d29ya1xuICBzbHVnOiBzdHJpbmc7XG4gIGN1cnJlbnRQcm92aWRlcjogc3RyaW5nO1xuICBwcm92aWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIG5hbWU6IHN0cmluZztcbiAgY2hhaW5UeXBlOiBDaGFpbkVkaXRTdGFuZGFyZDtcbiAgYmxvY2tFeHBsb3Jlcj86IHN0cmluZztcbiAgY3Jvd2Rsb2FuVXJsPzogc3RyaW5nO1xuICBwcmljZUlkPzogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFpblNwZWNJbmZvIHtcbiAgLy8gU3Vic3RyYXRlXG4gIGFkZHJlc3NQcmVmaXg6IG51bWJlcixcbiAgZ2VuZXNpc0hhc2g6IHN0cmluZyxcbiAgcGFyYUlkOiBudW1iZXIgfCBudWxsLFxuXG4gIC8vIEV2bVxuICBldm1DaGFpbklkOiBudW1iZXIgfCBudWxsIC8vIG51bGwgbWVhbnMgbm90IEV2bVxuXG4gIC8vIENvbW1vblxuICBleGlzdGVudGlhbERlcG9zaXQ6IHN0cmluZyxcbiAgZGVjaW1hbHM6IG51bWJlclxufVxuXG4vLy8gS2V5cmluZyBzdGF0ZVxuXG5leHBvcnQgaW50ZXJmYWNlIEtleXJpbmdTdGF0ZSB7XG4gIGlzUmVhZHk6IGJvb2xlYW47XG4gIGhhc01hc3RlclBhc3N3b3JkOiBib29sZWFuO1xuICBpc0xvY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVSVZpZXdTdGF0ZSB7XG4gIGlzVUlMb2NrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc0Jvb2tTdGF0ZSB7XG4gIGNvbnRhY3RzOiBBZGRyZXNzSnNvbltdO1xuICByZWNlbnQ6IEFkZHJlc3NKc29uW107XG59XG5cbi8vIENoYW5nZSBtYXN0ZXIgcGFzc3dvcmRcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENoYW5nZU1hc3RlclBhc3N3b3JkIHtcbiAgb2xkUGFzc3dvcmQ/OiBzdHJpbmc7XG4gIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XG5cbiAgY3JlYXRlTmV3OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlQ2hhbmdlTWFzdGVyUGFzc3dvcmQge1xuICBzdGF0dXM6IGJvb2xlYW47XG4gIGVycm9yczogc3RyaW5nW107XG59XG5cbi8vIE1pZ3JhdGUgcGFzc3dvcmRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0TWlncmF0ZVBhc3N3b3JkIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlTWlncmF0ZVBhc3N3b3JkIHtcbiAgc3RhdHVzOiBib29sZWFuO1xuICBlcnJvcnM6IHN0cmluZ1tdO1xufVxuXG4vLyBVbmxvY2tcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VW5sb2NrS2V5cmluZyB7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VVbmxvY2tLZXlyaW5nIHtcbiAgc3RhdHVzOiBib29sZWFuO1xuICBlcnJvcnM6IHN0cmluZ1tdO1xufVxuXG4vLyBFeHBvcnQgbW5lbW9uaWNcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0S2V5cmluZ0V4cG9ydE1uZW1vbmljIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlS2V5cmluZ0V4cG9ydE1uZW1vbmljIHtcbiAgcmVzdWx0OiBzdHJpbmc7XG59XG5cbi8vIFJlc2V0IHdhbGxldFxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZXNldFdhbGxldCB7XG4gIHJlc2V0QWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUmVzZXRXYWxsZXQge1xuICBzdGF0dXM6IGJvb2xlYW47XG4gIGVycm9yczogc3RyaW5nW107XG59XG5cbi8vLyBTaWduaW5nXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RTaWduaW5nQXBwcm92ZVBhc3N3b3JkVjIge1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0U2V0dGluZ1VwZGF0ZVJlcSB7XG4gIHRva2VuU2x1Zzogc3RyaW5nO1xuICBhc3NldFNldHRpbmc6IEFzc2V0U2V0dGluZztcbiAgYXV0b0VuYWJsZU5hdGl2ZVRva2VuPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0R2V0VHJhbnNhY3Rpb24ge1xuICBpZDogc3RyaW5nO1xufVxuXG4vLyBNb2JpbGUgdXBkYXRlXG5leHBvcnQgdHlwZSBTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZSA9ICdjaGFpblJlZ2lzdHJ5JyB8ICdiYWxhbmNlJyB8ICdjcm93ZGxvYW4nIHwgJ3N0YWtpbmcnO1xuZXhwb3J0IHR5cGUgQ3JvblNlcnZpY2VUeXBlID0gJ3ByaWNlJyB8ICduZnQnIHwgJ3N0YWtpbmcnIHwgJ2hpc3RvcnknIHwgJ3JlY292ZXJBcGknIHwgJ2NoZWNrQXBpU3RhdHVzJztcbmV4cG9ydCB0eXBlIENyb25UeXBlID1cbiAgJ3JlY292ZXJBcGlNYXAnIHxcbiAgJ2NoZWNrQXBpTWFwU3RhdHVzJyB8XG4gICdyZWZyZXNoSGlzdG9yeScgfFxuICAncmVmcmVzaE5mdCcgfFxuICAncmVmcmVzaFByaWNlJyB8XG4gICdyZWZyZXNoU3Rha2VVbmxvY2tpbmdJbmZvJyB8XG4gICdyZWZyZXNoU3Rha2luZ1Jld2FyZCcgfFxuICAncmVmcmVzaFBvb2xpbmdTdGFraW5nUmV3YXJkJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SW5pdENyb25BbmRTdWJzY3JpcHRpb24ge1xuICBzdWJzY3JpcHRpb246IHtcbiAgICBhY3RpdmVTZXJ2aWNlczogU3Vic2NyaXB0aW9uU2VydmljZVR5cGVbXVxuICB9LFxuICBjcm9uOiB7XG4gICAgaW50ZXJ2YWxNYXA6IFBhcnRpYWw8UmVjb3JkPENyb25UeXBlLCBudW1iZXI+PixcbiAgICBhY3RpdmVTZXJ2aWNlczogQ3JvblNlcnZpY2VUeXBlW11cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDcm9uQW5kU3Vic2NyaXB0aW9uQWN0aW9uIHtcbiAgc3Vic2NyaXB0aW9uU2VydmljZXM6IFN1YnNjcmlwdGlvblNlcnZpY2VUeXBlW107XG4gIGNyb25TZXJ2aWNlczogQ3JvblNlcnZpY2VUeXBlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlQ3JvbkFuZFN1YnNjcmlwdGlvbk1hcCB7XG4gIHN1YnNjcmlwdGlvbjogUmVjb3JkPFN1YnNjcmlwdGlvblNlcnZpY2VUeXBlLCBib29sZWFuPjtcbiAgY3JvbjogUmVjb3JkPENyb25TZXJ2aWNlVHlwZSwgYm9vbGVhbj47XG59XG5cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvblR5cGUge1xuICBJTkZPID0gJ2luZm8nLFxuICBTVUNDRVNTID0gJ3N1Y2Nlc3MnLFxuICBXQVJOSU5HID0gJ3dhcm5pbmcnLFxuICBFUlJPUiA9ICdlcnJvcicsXG59XG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbiB7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IE5vdGlmaWNhdGlvblR5cGU7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgbm90aWZ5VmlhQnJvd3Nlcj86IGJvb2xlYW47XG4gIGFjdGlvbj86IHtcbiAgICB1cmw/OiBzdHJpbmc7IC8vIEFkZCBtb3JlIGFjdGlvbiBpbiB0aGUgZnV0dXJlXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uUGFyYW1zID0gT21pdDxOb3RpZmljYXRpb24sICdpZCc+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb25SZWxvYWRSZXF1ZXN0IHtcbiAgZGF0YTogJ25mdCcgfCAnc3Rha2luZydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGxMb2dvTWFwIHtcbiAgY2hhaW5Mb2dvTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gIGFzc2V0TG9nb01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG4vLyBQaGlzaGluZyBkZXRlY3RcblxuZXhwb3J0IGludGVyZmFjZSBQYXNzUGhpc2hpbmcge1xuICBwYXNzOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RQYXNzUGhpc2hpbmdQYWdlIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbi8vIFBzcCB0b2tlblxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBZGRQc3BUb2tlbiB7XG4gIGdlbmVzaXNIYXNoOiBzdHJpbmc7XG4gIHRva2VuSW5mbzoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgc3ltYm9sOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlY2ltYWxzPzogbnVtYmVyO1xuICAgIGxvZ28/OiBzdHJpbmc7XG4gIH07XG59XG5cbi8vLyBXYWxsZXRDb25uZWN0XG5cbi8vIENvbm5lY3RcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENvbm5lY3RXYWxsZXRDb25uZWN0IHtcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFJlamVjdENvbm5lY3RXYWxsZXRTZXNzaW9uIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXBwcm92ZUNvbm5lY3RXYWxsZXRTZXNzaW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgYWNjb3VudHM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RSZWNvbm5lY3RDb25uZWN0V2FsbGV0U2Vzc2lvbiB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdERpc2Nvbm5lY3RXYWxsZXRDb25uZWN0U2Vzc2lvbiB7XG4gIHRvcGljOiBzdHJpbmdcbn1cblxuLy8gTm90IHN1cHBvcnRcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UmVqZWN0V2FsbGV0Q29ubmVjdE5vdFN1cHBvcnQge1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBcHByb3ZlV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnQge1xuICBpZDogc3RyaW5nO1xufVxuXG4vLy8gTWFudGFcblxuZXhwb3J0IGludGVyZmFjZSBNYW50YVBheUNvbmZpZyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgemtBZGRyZXNzOiBzdHJpbmc7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIGNoYWluOiBzdHJpbmc7XG4gIGlzSW5pdGlhbFN5bmM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFudGFBdXRob3JpemF0aW9uQ29udGV4dCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2hhaW46IHN0cmluZztcbiAgZGF0YTogdW5rbm93bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYW50YVBheVN5bmNTdGF0ZSB7XG4gIGlzU3luY2luZzogYm9vbGVhbixcbiAgcHJvZ3Jlc3M6IG51bWJlcixcbiAgbmVlZE1hbnVhbFN5bmM/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFudGFQYXlFbmFibGVQYXJhbXMge1xuICBwYXNzd29yZDogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmdcbn1cblxuZXhwb3J0IGVudW0gTWFudGFQYXlFbmFibGVNZXNzYWdlIHtcbiAgV1JPTkdfUEFTU1dPUkQgPSAnV1JPTkdfUEFTU1dPUkQnLFxuICBDSEFJTl9ESVNDT05ORUNURUQgPSAnQ0hBSU5fRElTQ09OTkVDVEVEJyxcbiAgVU5LTk9XTl9FUlJPUiA9ICdVTktOT1dOX0VSUk9SJyxcbiAgU1VDQ0VTUyA9ICdTVUNDRVNTJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hbnRhUGF5RW5hYmxlUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBtZXNzYWdlOiBNYW50YVBheUVuYWJsZU1lc3NhZ2Vcbn1cblxuLy8vIE1ldGFkYXRhXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RGaW5kUmF3TWV0YWRhdGEge1xuICBnZW5lc2lzSGFzaDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlRmluZFJhd01ldGFkYXRhIHtcbiAgcmF3TWV0YWRhdGE6IHN0cmluZztcbiAgc3BlY1ZlcnNpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlRG9tYWluUmVxdWVzdCB7XG4gIGNoYWluOiBzdHJpbmcsXG4gIGRvbWFpbjogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb2x2ZUFkZHJlc3NUb0RvbWFpblJlcXVlc3Qge1xuICBjaGFpbjogc3RyaW5nLFxuICBhZGRyZXNzOiBzdHJpbmdcbn1cblxuLy8gVXNlIHN0cmluZ2lmeSB0byBjb21tdW5pY2F0ZSwgcHVyZSBib29sZWFuIHZhbHVlIHdpbGwgZXJyb3Igd2l0aCBjYXNlICdmYWxzZScgdmFsdWVcbmV4cG9ydCBpbnRlcmZhY2UgS29uaVJlcXVlc3RTaWduYXR1cmVzIHtcbiAgLy8gQm9uZGluZyBmdW5jdGlvbnNcbiAgJ3ByaShzdGFraW5nLnN1Ym1pdFR1cmluZ0NhbmNlbENvbXBvdW5kKSc6IFtSZXF1ZXN0VHVyaW5nQ2FuY2VsU3Rha2VDb21wb3VuZCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShzdGFraW5nLnN1Ym1pdFR1cmluZ0NvbXBvdW5kKSc6IFtSZXF1ZXN0VHVyaW5nU3Rha2VDb21wb3VuZCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShzdGFraW5nLnN1Ym1pdENsYWltUmV3YXJkKSc6IFtSZXF1ZXN0U3Rha2VDbGFpbVJld2FyZCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShzdGFraW5nLnN1Ym1pdENhbmNlbFdpdGhkcmF3YWwpJzogW1JlcXVlc3RTdGFrZUNhbmNlbFdpdGhkcmF3YWwsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkodW5ib25kaW5nLnN1Ym1pdFdpdGhkcmF3YWwpJzogW1JlcXVlc3RTdGFrZVdpdGhkcmF3YWwsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkodW5ib25kaW5nLnN1Ym1pdFRyYW5zYWN0aW9uKSc6IFtSZXF1ZXN0VW5ib25kaW5nU3VibWl0LCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGJvbmRpbmcuc3VibWl0Qm9uZGluZ1RyYW5zYWN0aW9uKSc6IFtSZXF1ZXN0Qm9uZGluZ1N1Ym1pdCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShib25kaW5nLnN1YnNjcmliZUNoYWluU3Rha2luZ01ldGFkYXRhKSc6IFtudWxsLCBDaGFpblN0YWtpbmdNZXRhZGF0YVtdLCBDaGFpblN0YWtpbmdNZXRhZGF0YVtdXTtcbiAgJ3ByaShib25kaW5nLnN1YnNjcmliZU5vbWluYXRvck1ldGFkYXRhKSc6IFtudWxsLCBOb21pbmF0b3JNZXRhZGF0YVtdLCBOb21pbmF0b3JNZXRhZGF0YVtdXTtcbiAgJ3ByaShib25kaW5nLmdldEJvbmRpbmdPcHRpb25zKSc6IFtCb25kaW5nT3B0aW9uUGFyYW1zLCBWYWxpZGF0b3JJbmZvW11dO1xuICAncHJpKGJvbmRpbmcuZ2V0Tm9taW5hdGlvblBvb2xPcHRpb25zKSc6IFtzdHJpbmcsIE5vbWluYXRpb25Qb29sSW5mb1tdXTtcbiAgJ3ByaShib25kaW5nLm5vbWluYXRpb25Qb29sLnN1Ym1pdEJvbmRpbmcpJzogW1JlcXVlc3RTdGFrZVBvb2xpbmdCb25kaW5nLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuICAncHJpKGJvbmRpbmcubm9taW5hdGlvblBvb2wuc3VibWl0VW5ib25kaW5nKSc6IFtSZXF1ZXN0U3Rha2VQb29saW5nVW5ib25kaW5nLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuXG4gIC8vIENoYWlucywgYXNzZXRzIGZ1bmN0aW9uc1xuICAncHJpKGNoYWluU2VydmljZS5zdWJzY3JpYmVDaGFpbkluZm9NYXApJzogW251bGwsIFJlY29yZDxzdHJpbmcsIGFueT4sIFJlY29yZDxzdHJpbmcsIGFueT5dO1xuICAncHJpKGNoYWluU2VydmljZS5zdWJzY3JpYmVDaGFpblN0YXRlTWFwKSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBSZWNvcmQ8c3RyaW5nLCBhbnk+XTtcbiAgJ3ByaShjaGFpblNlcnZpY2Uuc3Vic2NyaWJlQXNzZXRSZWdpc3RyeSknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgYW55PiwgUmVjb3JkPHN0cmluZywgYW55Pl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnN1YnNjcmliZU11bHRpQ2hhaW5Bc3NldE1hcCknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgX011bHRpQ2hhaW5Bc3NldD4sIFJlY29yZDxzdHJpbmcsIF9NdWx0aUNoYWluQXNzZXQ+XTtcbiAgJ3ByaShjaGFpblNlcnZpY2Uuc3Vic2NyaWJlWGNtUmVmTWFwKSc6IFtudWxsLCBSZWNvcmQ8c3RyaW5nLCBfQXNzZXRSZWY+LCBSZWNvcmQ8c3RyaW5nLCBfQXNzZXRSZWY+XTtcbiAgJ3ByaShjaGFpblNlcnZpY2UudXBzZXJ0Q2hhaW4pJzogW19OZXR3b3JrVXBzZXJ0UGFyYW1zLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UuZW5hYmxlQ2hhaW5zKSc6IFtFbmFibGVNdWx0aUNoYWluUGFyYW1zLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UuZW5hYmxlQ2hhaW4pJzogW0VuYWJsZUNoYWluUGFyYW1zLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UucmVjb25uZWN0Q2hhaW4pJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmRpc2FibGVDaGFpbnMpJzogW3N0cmluZ1tdLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UuZGlzYWJsZUNoYWluKSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKGNoYWluU2VydmljZS5yZW1vdmVDaGFpbiknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UuZGVsZXRlQ3VzdG9tQXNzZXQpJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnVwc2VydEN1c3RvbUFzc2V0KSc6IFtSZWNvcmQ8c3RyaW5nLCBhbnk+LCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UudmFsaWRhdGVDdXN0b21Bc3NldCknOiBbX1ZhbGlkYXRlQ3VzdG9tQXNzZXRSZXF1ZXN0LCBfVmFsaWRhdGVDdXN0b21Bc3NldFJlc3BvbnNlXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UucmVzZXREZWZhdWx0Q2hhaW5zKSc6IFtudWxsLCBib29sZWFuXTtcbiAgJ3ByaShjaGFpblNlcnZpY2UuZ2V0U3VwcG9ydGVkQ29udHJhY3RUeXBlcyknOiBbbnVsbCwgc3RyaW5nW11dO1xuICAncHJpKGNoYWluU2VydmljZS52YWxpZGF0ZUN1c3RvbUNoYWluKSc6IFtWYWxpZGF0ZU5ldHdvcmtSZXF1ZXN0LCBWYWxpZGF0ZU5ldHdvcmtSZXNwb25zZV07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLnJlY292ZXJTdWJzdHJhdGVBcGkpJzogW3N0cmluZywgYm9vbGVhbl07XG4gICdwcmkoY2hhaW5TZXJ2aWNlLmRpc2FibGVBbGxDaGFpbnMpJzogW251bGwsIGJvb2xlYW5dO1xuICAncHJpKGFzc2V0U2V0dGluZy5nZXRTdWJzY3JpcHRpb24pJzogW251bGwsIFJlY29yZDxzdHJpbmcsIEFzc2V0U2V0dGluZz4sIFJlY29yZDxzdHJpbmcsIEFzc2V0U2V0dGluZz5dXG4gICdwcmkoYXNzZXRTZXR0aW5nLnVwZGF0ZSknOiBbQXNzZXRTZXR0aW5nVXBkYXRlUmVxLCBib29sZWFuXTtcblxuICAvLyBORlQgZnVuY3Rpb25zXG4gICdwcmkoZXZtTmZ0LnN1Ym1pdFRyYW5zYWN0aW9uKSc6IFtOZnRUcmFuc2FjdGlvblJlcXVlc3QsIFNXVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoZXZtTmZ0LmdldFRyYW5zYWN0aW9uKSc6IFtOZnRUcmFuc2FjdGlvblJlcXVlc3QsIEV2bU5mdFRyYW5zYWN0aW9uXTtcbiAgJ3ByaShzdWJzdHJhdGVOZnQuc3VibWl0VHJhbnNhY3Rpb24pJzogW05mdFRyYW5zYWN0aW9uUmVxdWVzdCwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcbiAgJ3ByaShzdWJzdHJhdGVOZnQuZ2V0VHJhbnNhY3Rpb24pJzogW05mdFRyYW5zYWN0aW9uUmVxdWVzdCwgU3Vic3RyYXRlTmZ0VHJhbnNhY3Rpb25dO1xuICAncHJpKG5mdC5nZXROZnQpJzogW251bGwsIE5mdEpzb25dO1xuICAncHJpKG5mdC5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVOZnQsIE5mdEpzb24sIE5mdEpzb25dO1xuICAncHJpKG5mdENvbGxlY3Rpb24uZ2V0TmZ0Q29sbGVjdGlvbiknOiBbbnVsbCwgTmZ0Q29sbGVjdGlvbkpzb25dO1xuICAncHJpKG5mdENvbGxlY3Rpb24uZ2V0U3Vic2NyaXB0aW9uKSc6IFtudWxsLCBOZnRDb2xsZWN0aW9uW10sIE5mdENvbGxlY3Rpb25bXV07XG5cbiAgLy8gU3Rha2luZyBmdW5jdGlvbnNcbiAgJ3ByaShzdGFraW5nLmdldFN0YWtpbmcpJzogW251bGwsIFN0YWtpbmdKc29uXTtcbiAgJ3ByaShzdGFraW5nLmdldFN1YnNjcmlwdGlvbiknOiBbUmVxdWVzdFN1YnNjcmliZVN0YWtpbmcsIFN0YWtpbmdKc29uLCBTdGFraW5nSnNvbl07XG4gICdwcmkoc3Rha2luZ1Jld2FyZC5nZXRTdGFraW5nUmV3YXJkKSc6IFtudWxsLCBTdGFraW5nUmV3YXJkSnNvbl07XG4gICdwcmkoc3Rha2luZ1Jld2FyZC5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVTdGFraW5nUmV3YXJkLCBTdGFraW5nUmV3YXJkSnNvbiwgU3Rha2luZ1Jld2FyZEpzb25dO1xuXG4gIC8vIFByaWNlLCBiYWxhbmNlLCBjcm93ZGxvYW4gZnVuY3Rpb25zXG4gICdwcmkocHJpY2UuZ2V0UHJpY2UpJzogW1JlcXVlc3RQcmljZSwgUHJpY2VKc29uXTtcbiAgJ3ByaShwcmljZS5nZXRTdWJzY3JpcHRpb24pJzogW1JlcXVlc3RTdWJzY3JpYmVQcmljZSwgUHJpY2VKc29uLCBQcmljZUpzb25dO1xuICAncHJpKGJhbGFuY2UuZ2V0QmFsYW5jZSknOiBbUmVxdWVzdEJhbGFuY2UsIEJhbGFuY2VKc29uXTtcbiAgJ3ByaShiYWxhbmNlLmdldFN1YnNjcmlwdGlvbiknOiBbUmVxdWVzdFN1YnNjcmliZUJhbGFuY2UsIEJhbGFuY2VKc29uLCBCYWxhbmNlSnNvbl07XG4gICdwcmkoY3Jvd2Rsb2FuLmdldENyb3dkbG9hbiknOiBbUmVxdWVzdENyb3dkbG9hbiwgQ3Jvd2Rsb2FuSnNvbl07XG4gICdwcmkoY3Jvd2Rsb2FuLmdldFN1YnNjcmlwdGlvbiknOiBbUmVxdWVzdFN1YnNjcmliZUNyb3dkbG9hbiwgQ3Jvd2Rsb2FuSnNvbiwgQ3Jvd2Rsb2FuSnNvbl07XG5cbiAgLy8gUGhpc2hpbmcgcGFnZVxuICAncHJpKHBoaXNoaW5nLnBhc3MpJzogW1JlcXVlc3RQYXNzUGhpc2hpbmdQYWdlLCBib29sZWFuXTtcblxuICAvLyBNYW50YSBwYXlcbiAgJ3ByaShtYW50YVBheS5lbmFibGUpJzogW01hbnRhUGF5RW5hYmxlUGFyYW1zLCBNYW50YVBheUVuYWJsZVJlc3BvbnNlXTtcbiAgJ3ByaShtYW50YVBheS5kaXNhYmxlKSc6IFtzdHJpbmcsIGJvb2xlYW5dO1xuICAncHJpKG1hbnRhUGF5LmdldFprQmFsYW5jZSknOiBbbnVsbCwgbnVsbF07XG4gICdwcmkobWFudGFQYXkuc3Vic2NyaWJlQ29uZmlnKSc6IFtudWxsLCBNYW50YVBheUNvbmZpZ1tdLCBNYW50YVBheUNvbmZpZ1tdXTtcbiAgJ3ByaShtYW50YVBheS5zdWJzY3JpYmVTeW5jaW5nU3RhdGUpJzogW251bGwsIE1hbnRhUGF5U3luY1N0YXRlLCBNYW50YVBheVN5bmNTdGF0ZV07XG4gICdwcmkobWFudGFQYXkuaW5pdFN5bmNNYW50YVBheSknOiBbc3RyaW5nLCBudWxsXTtcblxuICAvLyBBdXRoXG4gICdwcmkoYXV0aG9yaXplLmxpc3RWMiknOiBbbnVsbCwgUmVzcG9uc2VBdXRob3JpemVMaXN0XTtcbiAgJ3ByaShhdXRob3JpemUucmVxdWVzdHNWMiknOiBbUmVxdWVzdEF1dGhvcml6ZVN1YnNjcmliZSwgQXV0aG9yaXplUmVxdWVzdFtdLCBBdXRob3JpemVSZXF1ZXN0W11dO1xuICAncHJpKGF1dGhvcml6ZS5hcHByb3ZlVjIpJzogW1JlcXVlc3RBdXRob3JpemVBcHByb3ZlVjIsIGJvb2xlYW5dO1xuICAncHJpKGF1dGhvcml6ZS5jaGFuZ2VTaXRlQWxsKSc6IFtSZXF1ZXN0QXV0aG9yaXphdGlvbkFsbCwgYm9vbGVhbiwgQXV0aFVybHNdO1xuICAncHJpKGF1dGhvcml6ZS5jaGFuZ2VTaXRlKSc6IFtSZXF1ZXN0QXV0aG9yaXphdGlvbiwgYm9vbGVhbiwgQXV0aFVybHNdO1xuICAncHJpKGF1dGhvcml6ZS5jaGFuZ2VTaXRlUGVyQWNjb3VudCknOiBbUmVxdWVzdEF1dGhvcml6YXRpb25QZXJBY2NvdW50LCBib29sZWFuLCBBdXRoVXJsc107XG4gICdwcmkoYXV0aG9yaXplLmNoYW5nZVNpdGVQZXJTaXRlKSc6IFtSZXF1ZXN0QXV0aG9yaXphdGlvblBlclNpdGUsIGJvb2xlYW5dO1xuICAncHJpKGF1dGhvcml6ZS5jaGFuZ2VTaXRlQmxvY2spJzogW1JlcXVlc3RBdXRob3JpemF0aW9uQmxvY2ssIGJvb2xlYW5dO1xuICAncHJpKGF1dGhvcml6ZS5mb3JnZXRTaXRlKSc6IFtSZXF1ZXN0Rm9yZ2V0U2l0ZSwgYm9vbGVhbiwgQXV0aFVybHNdO1xuICAncHJpKGF1dGhvcml6ZS5mb3JnZXRBbGxTaXRlKSc6IFtudWxsLCBib29sZWFuLCBBdXRoVXJsc107XG4gICdwcmkoYXV0aG9yaXplLnJlamVjdFYyKSc6IFtSZXF1ZXN0QXV0aG9yaXplUmVqZWN0LCBib29sZWFuXTtcbiAgJ3ByaShhdXRob3JpemUuY2FuY2VsVjIpJzogW1JlcXVlc3RBdXRob3JpemVDYW5jZWwsIGJvb2xlYW5dO1xuXG4gIC8qIEFjY291bnQgbWFuYWdlbWVudCAqL1xuXG4gIC8vIFZhbGlkYXRlXG4gICdwcmkoc2VlZC52YWxpZGF0ZVYyKSc6IFtSZXF1ZXN0U2VlZFZhbGlkYXRlVjIsIFJlc3BvbnNlU2VlZFZhbGlkYXRlVjJdO1xuICAncHJpKHByaXZhdGVLZXkudmFsaWRhdGVWMiknOiBbUmVxdWVzdFNlZWRWYWxpZGF0ZVYyLCBSZXNwb25zZVByaXZhdGVLZXlWYWxpZGF0ZVYyXTtcbiAgJ3ByaShhY2NvdW50cy5jaGVja1B1YmxpY0FuZFNlY3JldEtleSknOiBbUmVxdWVzdENoZWNrUHVibGljQW5kU2VjcmV0S2V5LCBSZXNwb25zZUNoZWNrUHVibGljQW5kU2VjcmV0S2V5XTtcblxuICAvLyBDcmVhdGUgYWNjb3VudFxuICAncHJpKHNlZWQuY3JlYXRlVjIpJzogW1JlcXVlc3RTZWVkQ3JlYXRlVjIsIFJlc3BvbnNlU2VlZENyZWF0ZVYyXTtcbiAgJ3ByaShhY2NvdW50cy5jcmVhdGUuc3VyaVYyKSc6IFtSZXF1ZXN0QWNjb3VudENyZWF0ZVN1cmlWMiwgUmVzcG9uc2VBY2NvdW50Q3JlYXRlU3VyaVYyXTtcbiAgJ3ByaShhY2NvdW50cy5jcmVhdGUuZXh0ZXJuYWxWMiknOiBbUmVxdWVzdEFjY291bnRDcmVhdGVFeHRlcm5hbFYyLCBBY2NvdW50RXh0ZXJuYWxFcnJvcltdXTtcbiAgJ3ByaShhY2NvdW50cy5jcmVhdGUuaGFyZHdhcmVWMiknOiBbUmVxdWVzdEFjY291bnRDcmVhdGVIYXJkd2FyZVYyLCBib29sZWFuXTtcbiAgJ3ByaShhY2NvdW50cy5jcmVhdGUuaGFyZHdhcmVNdWx0aXBsZSknOiBbUmVxdWVzdEFjY291bnRDcmVhdGVIYXJkd2FyZU11bHRpcGxlLCBib29sZWFuXTtcbiAgJ3ByaShhY2NvdW50cy5jcmVhdGUud2l0aFNlY3JldCknOiBbUmVxdWVzdEFjY291bnRDcmVhdGVXaXRoU2VjcmV0S2V5LCBSZXNwb25zZUFjY291bnRDcmVhdGVXaXRoU2VjcmV0S2V5XTtcblxuICAvLyBJbmplY3QgYWNjb3VudFxuICAncHJpKGFjY291bnRzLmluamVjdC5hZGQpJzogW1JlcXVlc3RBZGRJbmplY3RlZEFjY291bnRzLCBib29sZWFuXTtcbiAgJ3ByaShhY2NvdW50cy5pbmplY3QucmVtb3ZlKSc6IFtSZXF1ZXN0UmVtb3ZlSW5qZWN0ZWRBY2NvdW50cywgYm9vbGVhbl07XG5cbiAgLy8gRGVyaXZlXG4gICdwcmkoZGVyaXZhdGlvbi5jcmVhdGVWMiknOiBbUmVxdWVzdERlcml2ZUNyZWF0ZVYyLCBib29sZWFuXTsgLy8gU3Vic3RyYXRlXG5cbiAgLy8gUmVzdG9yZSBieSBqc29uXG4gICdwcmkoanNvbi5yZXN0b3JlVjIpJzogW1JlcXVlc3RKc29uUmVzdG9yZVYyLCB2b2lkXTtcbiAgJ3ByaShqc29uLmJhdGNoUmVzdG9yZVYyKSc6IFtSZXF1ZXN0QmF0Y2hSZXN0b3JlVjIsIHZvaWRdO1xuXG4gIC8vIEV4cG9ydCBhY2NvdW50XG4gICdwcmkoYWNjb3VudHMuZXhwb3J0UHJpdmF0ZUtleSknOiBbUmVxdWVzdEFjY291bnRFeHBvcnRQcml2YXRlS2V5LCBSZXNwb25zZUFjY291bnRFeHBvcnRQcml2YXRlS2V5XTtcblxuICAvLyBDdXJyZW50IGFjY291bnRcbiAgJ3ByaShhY2NvdW50cy5zdWJzY3JpYmVXaXRoQ3VycmVudEFkZHJlc3MpJzogW1JlcXVlc3RBY2NvdW50U3Vic2NyaWJlLCBBY2NvdW50c1dpdGhDdXJyZW50QWRkcmVzcywgQWNjb3VudHNXaXRoQ3VycmVudEFkZHJlc3NdO1xuICAncHJpKGFjY291bnRzLnVwZGF0ZUN1cnJlbnRBZGRyZXNzKSc6IFtzdHJpbmcsIGJvb2xlYW5dOyAvLyBvbGRcbiAgJ3ByaShjdXJyZW50QWNjb3VudC5zYXZlQWRkcmVzcyknOiBbUmVxdWVzdEN1cnJlbnRBY2NvdW50QWRkcmVzcywgQ3VycmVudEFjY291bnRJbmZvXTtcbiAgJ3ByaShhY2NvdW50cy5nZXQubWV0YSknOiBbUmVxdWVzdEFjY291bnRNZXRhLCBSZXNwb25zZUFjY291bnRNZXRhXTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgJ3ByaShhY2NvdW50cy5zYXZlUmVjZW50KSc6IFtSZXF1ZXN0U2F2ZVJlY2VudEFjY291bnQsIEtleXJpbmdBZGRyZXNzXTtcbiAgJ3ByaShhY2NvdW50cy5zdWJzY3JpYmVBZGRyZXNzZXMpJzogW251bGwsIEFkZHJlc3NCb29rSW5mbywgQWRkcmVzc0Jvb2tJbmZvXTtcbiAgJ3ByaShhY2NvdW50cy5lZGl0Q29udGFjdCknOiBbUmVxdWVzdEVkaXRDb250YWN0QWNjb3VudCwgYm9vbGVhbl07XG4gICdwcmkoYWNjb3VudHMuZGVsZXRlQ29udGFjdCknOiBbUmVxdWVzdERlbGV0ZUNvbnRhY3RBY2NvdW50LCBib29sZWFuXTtcblxuICAvLyBEb21haW4gbmFtZVxuICAncHJpKGFjY291bnRzLnJlc29sdmVEb21haW5Ub0FkZHJlc3MpJzogW1Jlc29sdmVEb21haW5SZXF1ZXN0LCBzdHJpbmcgfCB1bmRlZmluZWRdO1xuICAncHJpKGFjY291bnRzLnJlc29sdmVBZGRyZXNzVG9Eb21haW4pJzogW1Jlc29sdmVBZGRyZXNzVG9Eb21haW5SZXF1ZXN0LCBzdHJpbmcgfCB1bmRlZmluZWRdO1xuXG4gIC8vIEZvciBpbnB1dCBVSVxuICAncHJpKGFjY291bnRzLnN1YnNjcmliZUFjY291bnRzSW5wdXRBZGRyZXNzKSc6IFtSZXF1ZXN0QWNjb3VudFN1YnNjcmliZSwgc3RyaW5nLCBPcHRpb25JbnB1dEFkZHJlc3NdO1xuXG4gIC8qIEFjY291bnQgbWFuYWdlbWVudCAqL1xuXG4gIC8vIFNldHRpbmdzXG4gICdwcmkoc2V0dGluZ3MuY2hhbmdlQmFsYW5jZXNWaXNpYmlsaXR5KSc6IFtudWxsLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zdWJzY3JpYmUpJzogW251bGwsIFVpU2V0dGluZ3MsIFVpU2V0dGluZ3NdO1xuICAncHJpKHNldHRpbmdzLmdldExvZ29NYXBzKSc6IFtudWxsLCBBbGxMb2dvTWFwXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlQWNjb3VudEFsbExvZ28pJzogW3N0cmluZywgYm9vbGVhbiwgVWlTZXR0aW5nc107XG4gICdwcmkoc2V0dGluZ3Muc2F2ZVRoZW1lKSc6IFtUaGVtZU5hbWVzLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlQnJvd3NlckNvbmZpcm1hdGlvblR5cGUpJzogW0Jyb3dzZXJDb25maXJtYXRpb25UeXBlLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlQ2FtZXJhKSc6IFtSZXF1ZXN0Q2FtZXJhU2V0dGluZ3MsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVBdXRvTG9ja1RpbWUpJzogW1JlcXVlc3RDaGFuZ2VUaW1lQXV0b0xvY2ssIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVVbmxvY2tUeXBlKSc6IFtSZXF1ZXN0VW5sb2NrVHlwZSwgYm9vbGVhbl07XG4gICdwcmkoc2V0dGluZ3Muc2F2ZUVuYWJsZUNoYWluUGF0cm9sKSc6IFtSZXF1ZXN0Q2hhbmdlRW5hYmxlQ2hhaW5QYXRyb2wsIGJvb2xlYW5dO1xuICAncHJpKHNldHRpbmdzLnNhdmVMYW5ndWFnZSknOiBbUmVxdWVzdENoYW5nZUxhbmd1YWdlLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlU2hvd1plcm9CYWxhbmNlKSc6IFtSZXF1ZXN0Q2hhbmdlU2hvd1plcm9CYWxhbmNlLCBib29sZWFuXTtcbiAgJ3ByaShzZXR0aW5ncy5zYXZlU2hvd0JhbGFuY2UpJzogW1JlcXVlc3RDaGFuZ2VTaG93QmFsYW5jZSwgYm9vbGVhbl07XG5cbiAgLy8gU3Vic2NyaXB0aW9uXG4gICdwcmkodHJhbnNhY3Rpb24uaGlzdG9yeS5nZXRTdWJzY3JpcHRpb24pJzogW251bGwsIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW1bXSwgVHJhbnNhY3Rpb25IaXN0b3J5SXRlbVtdXTtcbiAgLy8gJ3ByaSh0cmFuc2FjdGlvbi5oaXN0b3J5LmFkZCknOiBbUmVxdWVzdFRyYW5zYWN0aW9uSGlzdG9yeUFkZCwgYm9vbGVhbiwgVHJhbnNhY3Rpb25IaXN0b3J5SXRlbVtdXTtcbiAgJ3ByaSh0cmFuc2Zlci5jaGVja1JlZmVyZW5jZUNvdW50KSc6IFtSZXF1ZXN0VHJhbnNmZXJDaGVja1JlZmVyZW5jZUNvdW50LCBib29sZWFuXTtcbiAgJ3ByaSh0cmFuc2Zlci5jaGVja1N1cHBvcnRpbmcpJzogW1JlcXVlc3RUcmFuc2ZlckNoZWNrU3VwcG9ydGluZywgU3VwcG9ydFRyYW5zZmVyUmVzcG9uc2VdO1xuICAncHJpKHRyYW5zZmVyLmdldEV4aXN0ZW50aWFsRGVwb3NpdCknOiBbUmVxdWVzdFRyYW5zZmVyRXhpc3RlbnRpYWxEZXBvc2l0LCBzdHJpbmddO1xuICAncHJpKHRyYW5zZmVyLmdldE1heFRyYW5zZmVyYWJsZSknOiBbUmVxdWVzdE1heFRyYW5zZmVyYWJsZSwgQW1vdW50RGF0YV07XG4gICdwcmkoc3Vic2NyaXB0aW9uLmNhbmNlbCknOiBbc3RyaW5nLCBib29sZWFuXTtcbiAgJ3ByaShmcmVlQmFsYW5jZS5nZXQpJzogW1JlcXVlc3RGcmVlQmFsYW5jZSwgQW1vdW50RGF0YV07XG4gICdwcmkoZnJlZUJhbGFuY2Uuc3Vic2NyaWJlKSc6IFtSZXF1ZXN0RnJlZUJhbGFuY2UsIEFtb3VudERhdGEsIEFtb3VudERhdGFdO1xuXG4gIC8vIFRyYW5zZmVyXG4gICdwcmkoYWNjb3VudHMuY2hlY2tUcmFuc2ZlciknOiBbUmVxdWVzdENoZWNrVHJhbnNmZXIsIFZhbGlkYXRlVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoYWNjb3VudHMudHJhbnNmZXIpJzogW1JlcXVlc3RUcmFuc2ZlciwgU1dUcmFuc2FjdGlvblJlc3BvbnNlXTtcblxuICAncHJpKGFjY291bnRzLmNoZWNrQ3Jvc3NDaGFpblRyYW5zZmVyKSc6IFtSZXF1ZXN0Q2hlY2tDcm9zc0NoYWluVHJhbnNmZXIsIFZhbGlkYXRlVHJhbnNhY3Rpb25SZXNwb25zZV07XG4gICdwcmkoYWNjb3VudHMuY3Jvc3NDaGFpblRyYW5zZmVyKSc6IFtSZXF1ZXN0Q3Jvc3NDaGFpblRyYW5zZmVyLCBTV1RyYW5zYWN0aW9uUmVzcG9uc2VdO1xuXG4gIC8vIENvbmZpcm1hdGlvbiBRdWV1ZXNcbiAgJ3ByaShjb25maXJtYXRpb25zLnN1YnNjcmliZSknOiBbUmVxdWVzdENvbmZpcm1hdGlvbnNTdWJzY3JpYmUsIENvbmZpcm1hdGlvbnNRdWV1ZSwgQ29uZmlybWF0aW9uc1F1ZXVlXTtcbiAgJ3ByaShjb25maXJtYXRpb25zLmNvbXBsZXRlKSc6IFtSZXF1ZXN0Q29uZmlybWF0aW9uQ29tcGxldGUsIGJvb2xlYW5dO1xuXG4gICdwdWIodXRpbHMuZ2V0UmFuZG9tKSc6IFtSYW5kb21UZXN0UmVxdWVzdCwgbnVtYmVyXTtcbiAgJ3B1YihhY2NvdW50cy5saXN0VjIpJzogW1JlcXVlc3RBY2NvdW50TGlzdCwgSW5qZWN0ZWRBY2NvdW50W11dO1xuICAncHViKGFjY291bnRzLnN1YnNjcmliZVYyKSc6IFtSZXF1ZXN0QWNjb3VudFN1YnNjcmliZSwgc3RyaW5nLCBJbmplY3RlZEFjY291bnRbXV07XG4gICdwdWIoYWNjb3VudHMudW5zdWJzY3JpYmUpJzogW1JlcXVlc3RBY2NvdW50VW5zdWJzY3JpYmUsIGJvb2xlYW5dO1xuXG4gIC8vIFNpZ24gUVJcbiAgJ3ByaShhY2NvdW50LmlzTG9ja2VkKSc6IFtSZXF1ZXN0QWNjb3VudElzTG9ja2VkLCBSZXNwb25zZUFjY291bnRJc0xvY2tlZF07XG4gICdwcmkocXIudHJhbnNhY3Rpb24ucGFyc2Uuc3Vic3RyYXRlKSc6IFtSZXF1ZXN0UGFyc2VUcmFuc2FjdGlvblN1YnN0cmF0ZSwgUmVzcG9uc2VQYXJzZVRyYW5zYWN0aW9uU3Vic3RyYXRlXTtcbiAgJ3ByaShxci50cmFuc2FjdGlvbi5wYXJzZS5ldm0pJzogW1JlcXVlc3RRclBhcnNlUkxQLCBSZXNwb25zZVFyUGFyc2VSTFBdO1xuICAncHJpKHFyLnNpZ24uc3Vic3RyYXRlKSc6IFtSZXF1ZXN0UXJTaWduU3Vic3RyYXRlLCBSZXNwb25zZVFyU2lnblN1YnN0cmF0ZV07XG4gICdwcmkocXIuc2lnbi5ldm0pJzogW1JlcXVlc3RRclNpZ25Fdm0sIFJlc3BvbnNlUXJTaWduRXZtXTtcblxuICAvLyBFeHRlcm5hbCBhY2NvdW50IHJlcXVlc3RcbiAgJ3ByaShhY2NvdW50LmV4dGVybmFsLnJlamVjdCknOiBbUmVxdWVzdFJlamVjdEV4dGVybmFsUmVxdWVzdCwgUmVzcG9uc2VSZWplY3RFeHRlcm5hbFJlcXVlc3RdO1xuICAncHJpKGFjY291bnQuZXh0ZXJuYWwucmVzb2x2ZSknOiBbUmVxdWVzdFJlc29sdmVFeHRlcm5hbFJlcXVlc3QsIFJlc3BvbnNlUmVzb2x2ZUV4dGVybmFsUmVxdWVzdF07XG5cbiAgLy8gRXZtXG4gICdldm0oZXZlbnRzLnN1YnNjcmliZSknOiBbUmVxdWVzdEV2bUV2ZW50cywgYm9vbGVhbiwgRXZtRXZlbnRdO1xuICAnZXZtKHJlcXVlc3QpJzogW1JlcXVlc3RBcmd1bWVudHMsIHVua25vd25dO1xuICAnZXZtKHByb3ZpZGVyLnNlbmQpJzogW1JlcXVlc3RFdm1Qcm92aWRlclNlbmQsIHN0cmluZyB8IG51bWJlciwgUmVzcG9uc2VFdm1Qcm92aWRlclNlbmRdXG5cbiAgLy8gRXZtIFRyYW5zYWN0aW9uXG4gICdwcmkoZXZtLnRyYW5zYWN0aW9uLnBhcnNlLmlucHV0KSc6IFtSZXF1ZXN0UGFyc2VFdm1Db250cmFjdElucHV0LCBSZXNwb25zZVBhcnNlRXZtQ29udHJhY3RJbnB1dF07XG5cbiAgLy8gQXV0aG9yaXplXG4gICdwcmkoYXV0aG9yaXplLnN1YnNjcmliZSknOiBbbnVsbCwgQXV0aFVybHMsIEF1dGhVcmxzXTtcblxuICAvLyBLZXlyaW5nIHN0YXRlXG4gICdwcmkoa2V5cmluZy5zdWJzY3JpYmUpJzogW251bGwsIEtleXJpbmdTdGF0ZSwgS2V5cmluZ1N0YXRlXTtcbiAgJ3ByaShrZXlyaW5nLmNoYW5nZSknOiBbUmVxdWVzdENoYW5nZU1hc3RlclBhc3N3b3JkLCBSZXNwb25zZUNoYW5nZU1hc3RlclBhc3N3b3JkXTtcbiAgJ3ByaShrZXlyaW5nLm1pZ3JhdGUpJzogW1JlcXVlc3RNaWdyYXRlUGFzc3dvcmQsIFJlc3BvbnNlTWlncmF0ZVBhc3N3b3JkXTtcbiAgJ3ByaShrZXlyaW5nLnVubG9jayknOiBbUmVxdWVzdFVubG9ja0tleXJpbmcsIFJlc3BvbnNlVW5sb2NrS2V5cmluZ107XG4gICdwcmkoa2V5cmluZy5sb2NrKSc6IFtudWxsLCB2b2lkXTtcbiAgJ3ByaShrZXlyaW5nLmV4cG9ydC5tbmVtb25pYyknOiBbUmVxdWVzdEtleXJpbmdFeHBvcnRNbmVtb25pYywgUmVzcG9uc2VLZXlyaW5nRXhwb3J0TW5lbW9uaWNdO1xuICAncHJpKGtleXJpbmcucmVzZXQpJzogW1JlcXVlc3RSZXNldFdhbGxldCwgUmVzcG9uc2VSZXNldFdhbGxldF07XG5cbiAgLy8gU2lnbmluZ1xuICAncHJpKHNpZ25pbmcuYXBwcm92ZS5wYXNzd29yZFYyKSc6IFtSZXF1ZXN0U2lnbmluZ0FwcHJvdmVQYXNzd29yZFYyLCBib29sZWFuXTtcblxuICAvLyBEZXJpdmVcbiAgJ3ByaShkZXJpdmF0aW9uLnZhbGlkYXRlVjIpJzogW1JlcXVlc3REZXJpdmVWYWxpZGF0ZVYyLCBSZXNwb25zZURlcml2ZVZhbGlkYXRlVjJdO1xuICAncHJpKGRlcml2YXRpb24uZ2V0TGlzdCknOiBbUmVxdWVzdEdldERlcml2ZUFjY291bnRzLCBSZXNwb25zZUdldERlcml2ZUFjY291bnRzXTtcbiAgJ3ByaShkZXJpdmF0aW9uLmNyZWF0ZS5tdWx0aXBsZSknOiBbUmVxdWVzdERlcml2ZUNyZWF0ZU11bHRpcGxlLCBib29sZWFuXTtcbiAgJ3ByaShkZXJpdmF0aW9uLmNyZWF0ZVYzKSc6IFtSZXF1ZXN0RGVyaXZlQ3JlYXRlVjMsIGJvb2xlYW5dO1xuXG4gIC8vIFRyYW5zYWN0aW9uXG4gIC8vIEdldCBUcmFuc2FjdGlvblxuICAncHJpKHRyYW5zYWN0aW9ucy5nZXRPbmUpJzogW1JlcXVlc3RHZXRUcmFuc2FjdGlvbiwgU1dUcmFuc2FjdGlvblJlc3VsdF07XG4gICdwcmkodHJhbnNhY3Rpb25zLnN1YnNjcmliZSknOiBbbnVsbCwgUmVjb3JkPHN0cmluZywgU1dUcmFuc2FjdGlvblJlc3VsdD4sIFJlY29yZDxzdHJpbmcsIFNXVHJhbnNhY3Rpb25SZXN1bHQ+XTtcblxuICAvLyBOb3RpZmljYXRpb25cbiAgJ3ByaShub3RpZmljYXRpb25zLnN1YnNjcmliZSknOiBbbnVsbCwgTm90aWZpY2F0aW9uW10sIE5vdGlmaWNhdGlvbltdXTtcblxuICAvLyBQcml2YXRlXG4gICdwcmkoY3Jvbi5yZWxvYWQpJzogW0Nyb25SZWxvYWRSZXF1ZXN0LCBib29sZWFuXTtcblxuICAvLyBNb2JpbGVcbiAgJ21vYmlsZShwaW5nKSc6IFtudWxsLCBzdHJpbmddO1xuICAnbW9iaWxlKGNyb25BbmRTdWJzY3JpcHRpb24uaW5pdCknOiBbUmVxdWVzdEluaXRDcm9uQW5kU3Vic2NyaXB0aW9uLCBBY3RpdmVDcm9uQW5kU3Vic2NyaXB0aW9uTWFwXTtcbiAgJ21vYmlsZShjcm9uQW5kU3Vic2NyaXB0aW9uLmFjdGl2ZVNlcnZpY2Uuc3Vic2NyaWJlKSc6IFtudWxsLCBBY3RpdmVDcm9uQW5kU3Vic2NyaXB0aW9uTWFwLCBBY3RpdmVDcm9uQW5kU3Vic2NyaXB0aW9uTWFwXTtcbiAgJ21vYmlsZShjcm9uQW5kU3Vic2NyaXB0aW9uLnN0YXJ0KSc6IFtSZXF1ZXN0Q3JvbkFuZFN1YnNjcmlwdGlvbkFjdGlvbiwgdm9pZF07XG4gICdtb2JpbGUoY3JvbkFuZFN1YnNjcmlwdGlvbi5zdG9wKSc6IFtSZXF1ZXN0Q3JvbkFuZFN1YnNjcmlwdGlvbkFjdGlvbiwgdm9pZF07XG4gICdtb2JpbGUoY3JvbkFuZFN1YnNjcmlwdGlvbi5yZXN0YXJ0KSc6IFtSZXF1ZXN0Q3JvbkFuZFN1YnNjcmlwdGlvbkFjdGlvbiwgdm9pZF07XG4gICdtb2JpbGUoY3Jvbi5zdGFydCknOiBbQ3JvblNlcnZpY2VUeXBlW10sIHZvaWRdO1xuICAnbW9iaWxlKGNyb24uc3RvcCknOiBbQ3JvblNlcnZpY2VUeXBlW10sIHZvaWRdO1xuICAnbW9iaWxlKGNyb24ucmVzdGFydCknOiBbQ3JvblNlcnZpY2VUeXBlW10sIHZvaWRdO1xuICAnbW9iaWxlKHN1YnNjcmlwdGlvbi5zdGFydCknOiBbU3Vic2NyaXB0aW9uU2VydmljZVR5cGVbXSwgdm9pZF07XG4gICdtb2JpbGUoc3Vic2NyaXB0aW9uLnN0b3ApJzogW1N1YnNjcmlwdGlvblNlcnZpY2VUeXBlW10sIHZvaWRdO1xuICAnbW9iaWxlKHN1YnNjcmlwdGlvbi5yZXN0YXJ0KSc6IFtTdWJzY3JpcHRpb25TZXJ2aWNlVHlwZVtdLCB2b2lkXTtcblxuICAvLyBQc3AgdG9rZW5cbiAgJ3B1Yih0b2tlbi5hZGQpJzogW1JlcXVlc3RBZGRQc3BUb2tlbiwgYm9vbGVhbl07XG5cbiAgLy8vIFdhbGxldCBjb25uZWN0XG4gICdwcmkod2FsbGV0Q29ubmVjdC5jb25uZWN0KSc6IFtSZXF1ZXN0Q29ubmVjdFdhbGxldENvbm5lY3QsIGJvb2xlYW5dO1xuICAncHJpKHdhbGxldENvbm5lY3QucmVxdWVzdHMuY29ubmVjdC5zdWJzY3JpYmUpJzogW251bGwsIFdhbGxldENvbm5lY3RTZXNzaW9uUmVxdWVzdFtdLCBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3RbXV07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5zZXNzaW9uLmFwcHJvdmUpJzogW1JlcXVlc3RBcHByb3ZlQ29ubmVjdFdhbGxldFNlc3Npb24sIGJvb2xlYW5dO1xuICAncHJpKHdhbGxldENvbm5lY3Quc2Vzc2lvbi5yZWplY3QpJzogW1JlcXVlc3RSZWplY3RDb25uZWN0V2FsbGV0U2Vzc2lvbiwgYm9vbGVhbl07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5zZXNzaW9uLnJlY29ubmVjdCknOiBbUmVxdWVzdFJlY29ubmVjdENvbm5lY3RXYWxsZXRTZXNzaW9uLCBib29sZWFuXTtcbiAgJ3ByaSh3YWxsZXRDb25uZWN0LnNlc3Npb24uc3Vic2NyaWJlKSc6IFtudWxsLCBTZXNzaW9uVHlwZXMuU3RydWN0W10sIFNlc3Npb25UeXBlcy5TdHJ1Y3RbXV07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5zZXNzaW9uLmRpc2Nvbm5lY3QpJzogW1JlcXVlc3REaXNjb25uZWN0V2FsbGV0Q29ubmVjdFNlc3Npb24sIGJvb2xlYW5dO1xuICAncHJpKHdhbGxldENvbm5lY3QucmVxdWVzdHMubm90U3VwcG9ydC5zdWJzY3JpYmUpJzogW251bGwsIFdhbGxldENvbm5lY3ROb3RTdXBwb3J0UmVxdWVzdFtdLCBXYWxsZXRDb25uZWN0Tm90U3VwcG9ydFJlcXVlc3RbXV07XG4gICdwcmkod2FsbGV0Q29ubmVjdC5ub3RTdXBwb3J0LmFwcHJvdmUpJzogW1JlcXVlc3RBcHByb3ZlV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnQsIGJvb2xlYW5dO1xuICAncHJpKHdhbGxldENvbm5lY3Qubm90U3VwcG9ydC5yZWplY3QpJzogW1JlcXVlc3RSZWplY3RXYWxsZXRDb25uZWN0Tm90U3VwcG9ydCwgYm9vbGVhbl07XG5cbiAgLy8vIE1ldGFkYXRhXG4gICdwcmkobWV0YWRhdGEuZmluZCknOiBbUmVxdWVzdEZpbmRSYXdNZXRhZGF0YSwgUmVzcG9uc2VGaW5kUmF3TWV0YWRhdGFdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uTWV0YWRhdGFUeXBlIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBPU1R5cGUgPSAnTWFjIE9TJyB8ICdpT1MnIHwgJ1dpbmRvd3MnIHwgJ0FuZHJvaWQnIHwgJ0xpbnV4JyB8ICdVbmtub3duJztcbmV4cG9ydCBjb25zdCBNb2JpbGVPUzogT1NUeXBlW10gPSBbJ2lPUycsICdBbmRyb2lkJ107XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IGNvbnN0IENST05fUkVGUkVTSF9QUklDRV9JTlRFUlZBTCA9IDMwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fQVVUT19SRUNPVkVSX0RPVFNBTUFfSU5URVJWQUwgPSA2MDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX0FVVE9fUkVDT1ZFUl9XRUIzX0lOVEVSVkFMID0gOTAwMDA7XG5leHBvcnQgY29uc3QgQUNBTEFfUkVGUkVTSF9DUk9XRExPQU5fSU5URVJWQUwgPSAzMDAwMDA7XG5leHBvcnQgY29uc3QgQVNUQVJfUkVGUkVTSF9CQUxBTkNFX0lOVEVSVkFMID0gNjAwMDA7XG5leHBvcnQgY29uc3QgU1VCX1RPS0VOX1JFRlJFU0hfQkFMQU5DRV9JTlRFUlZBTCA9IDYwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fUkVGUkVTSF9ORlRfSU5URVJWQUwgPSA3MjAwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fUkVGUkVTSF9TVEFLSU5HX1JFV0FSRF9JTlRFUlZBTCA9IDkwMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX1JFRlJFU0hfU1RBS0lOR19SRVdBUkRfRkFTVF9JTlRFUlZBTCA9IDMwMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX1JFRlJFU0hfSElTVE9SWV9JTlRFUlZBTCA9IDkwMDAwMDtcbmV4cG9ydCBjb25zdCBDUk9OX0dFVF9BUElfTUFQX1NUQVRVUyA9IDEwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fUkVGUkVTSF9DSEFJTl9TVEFLSU5HX01FVEFEQVRBID0gOTAwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fUkVGUkVTSF9DSEFJTl9OT01JTkFUT1JfTUVUQURBVEEgPSAxODAwMDAwO1xuZXhwb3J0IGNvbnN0IENST05fUkVDT1ZFUl9ISVNUT1JZX0lOVEVSVkFMID0gMzAwMDA7XG5leHBvcnQgY29uc3QgQ1JPTl9TWU5DX01BTlRBX1BBWSA9IDMwMDAwMDtcbmV4cG9ydCBjb25zdCBNQU5UQV9QQVlfQkFMQU5DRV9JTlRFUlZBTCA9IDMwMDAwO1xuXG5leHBvcnQgY29uc3QgQUxMX0FDQ09VTlRfS0VZID0gJ0FMTCc7XG5leHBvcnQgY29uc3QgQUxMX05FVFdPUktfS0VZID0gJ2FsbCc7XG5leHBvcnQgY29uc3QgQUxMX0dFTkVTSVNfSEFTSCA9IG51bGw7XG5leHBvcnQgY29uc3QgSUdOT1JFX0dFVF9TVUJTVFJBVEVfRkVBVFVSRVNfTElTVDogc3RyaW5nW10gPSBbJ2FzdGFyRXZtJywgJ2V0aGVyZXVtJywgJ2V0aGVyZXVtX2dvZXJsaScsICdiaW5hbmNlJywgJ2JpbmFuY2VfdGVzdCcsICdib2JhX3JpbmtlYnknLCAnYm9iYScsICdib2JhYmFzZScsICdib2JhYmVhbSddO1xuZXhwb3J0IGNvbnN0IElHTk9SRV9RUl9TSUdORVI6IHN0cmluZ1tdID0gW107XG5cbmV4cG9ydCBjb25zdCBYQ01fTUlOX0FNT1VOVF9SQVRJTyA9IDEuMjtcblxuZXhwb3J0ICogZnJvbSAnLi9zdGFraW5nJztcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmFnZSc7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IGNvbnN0IFBSRURFRklORURfU1RBS0lOR19QT09MOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xuICBrdXNhbWE6IDgwLFxuICBwb2xrYWRvdDogMzlcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFID0gJ2N1cnJlbnQtbGFuZ3VhZ2UnO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuY29uc3QgQUxMT1dFRF9QQVRIID0gW1xuICAnLycsXG4gICcvc2V0dGluZ3Mvc2VjdXJpdHknLFxuICAnL2FjY291bnRzL2Nvbm5lY3QtbGVkZ2VyJyxcbiAgJy9hY2NvdW50cy9yZXN0b3JlLWpzb24nLFxuICAnL2FjY291bnRzL2RldGFpbCcsXG4gICcvYWNjb3VudHMvbmV3LXNlZWQtcGhyYXNlJ1xuXSBhcyBjb25zdDtcbmNvbnN0IFBISVNISU5HX1BBR0VfUkVESVJFQ1QgPSAnL3BoaXNoaW5nLXBhZ2UtZGV0ZWN0ZWQnO1xuY29uc3QgRVhURU5TSU9OX1BSRUZJWCA9IHByb2Nlc3MuZW52LkVYVEVOU0lPTl9QUkVGSVggYXMgc3RyaW5nIHx8ICcnO1xuY29uc3QgSURfUFJFRklYID0gcHJvY2Vzcy5lbnYuSURfUFJFRklYIGFzIHN0cmluZyB8fCBFWFRFTlNJT05fUFJFRklYIHx8ICcnO1xuY29uc3QgUE9SVF9NT0JJTEUgPSBgJHtFWFRFTlNJT05fUFJFRklYfW1vYmlsZWA7XG5jb25zdCBQT1JUX0NPTlRFTlQgPSBgJHtFWFRFTlNJT05fUFJFRklYfWtvbmktY29udGVudGA7XG5jb25zdCBQT1JUX0VYVEVOU0lPTiA9IGAke0VYVEVOU0lPTl9QUkVGSVh9a29uaS1leHRlbnNpb25gO1xuY29uc3QgTUVTU0FHRV9PUklHSU5fUEFHRSA9IGAke0VYVEVOU0lPTl9QUkVGSVh9a29uaS1wYWdlYDtcbmNvbnN0IE1FU1NBR0VfT1JJR0lOX0NPTlRFTlQgPSBgJHtFWFRFTlNJT05fUFJFRklYfWtvbmktY29udGVudGA7XG5jb25zdCBQQVNTV09SRF9FWFBJUllfTUlOID0gMTU7XG5jb25zdCBQQVNTV09SRF9FWFBJUllfTVMgPSBQQVNTV09SRF9FWFBJUllfTUlOICogNjAgKiAxMDAwO1xuXG5leHBvcnQge1xuICBBTExPV0VEX1BBVEgsXG4gIFBBU1NXT1JEX0VYUElSWV9NSU4sXG4gIFBBU1NXT1JEX0VYUElSWV9NUyxcbiAgUEhJU0hJTkdfUEFHRV9SRURJUkVDVCxcbiAgRVhURU5TSU9OX1BSRUZJWCxcbiAgSURfUFJFRklYLFxuICBQT1JUX01PQklMRSxcbiAgUE9SVF9DT05URU5ULFxuICBQT1JUX0VYVEVOU0lPTixcbiAgTUVTU0FHRV9PUklHSU5fUEFHRSxcbiAgTUVTU0FHRV9PUklHSU5fQ09OVEVOVFxufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgcmVzb2x2ZUFkZHJlc3NUb0RvbWFpbiwgcmVzb2x2ZURvbWFpblRvQWRkcmVzcywgU3VwcG9ydGVkQ2hhaW5JZCB9IGZyb20gJ0Bhem5zL3Jlc29sdmVyLWNvcmUnO1xuXG5pbXBvcnQgeyBBcGlQcm9taXNlIH0gZnJvbSAnQHBvbGthZG90L2FwaSc7XG5cbmV4cG9ydCBjb25zdCBFTlNfU1VGRklYID0gJy5ldGgnO1xuZXhwb3J0IGNvbnN0IFRaRVJPX0lEX1NVRkZJWCA9ICcudHplcm8nO1xuXG5leHBvcnQgY29uc3QgQVpFUk9fSURfU1VGRklYID0gJy5hemVybyc7XG5cbmV4cG9ydCBjb25zdCBTVVBQT1JURURfRE9NQUlOX1NVRkZJWCA9IFtcbiAgRU5TX1NVRkZJWCxcbiAgVFpFUk9fSURfU1VGRklYLFxuICBBWkVST19JRF9TVUZGSVhcbl07XG5cbmV4cG9ydCBjb25zdCBDSEFJTlNfU1VQUE9SVEVEX0RPTUFJTiA9IFtcbiAgJ2FsZXBoJyxcbiAgJ2FsZXBoVGVzdCdcbl07XG5cbmV4cG9ydCBjb25zdCBBWkVST19ET01BSU5fQ09OVFJBQ1RTID0gW1xuICAnNUZzQjkxdFhTRXVNajZha3pkUGN6QXRtQmFWS1RvcUhtdEF3U1V6WGg0OUFZemFEJyxcbiAgJzVDVFFCZkJDOVNmZHJDREJKZGZMaXlXMnBnOXo1VzZDNkVzOHNLMzEzQkxuRmdEZidcbl07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlQXplcm9Eb21haW5Ub0FkZHJlc3MgKGRvbWFpbjogc3RyaW5nLCBjaGFpbjogc3RyaW5nLCBhcGk6IEFwaVByb21pc2UpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBsZXQgY2hhaW5JZDogU3VwcG9ydGVkQ2hhaW5JZCA9IFN1cHBvcnRlZENoYWluSWQuQWxlcGhaZXJvO1xuXG4gIGlmIChjaGFpbiA9PT0gJ2FsZXBoVGVzdCcpIHtcbiAgICBjaGFpbklkID0gU3VwcG9ydGVkQ2hhaW5JZC5BbGVwaFplcm9UZXN0bmV0O1xuICB9XG5cbiAgY29uc3QgcHJpbWFyeURvbWFpbnMgPSBhd2FpdCByZXNvbHZlRG9tYWluVG9BZGRyZXNzKFxuICAgIGRvbWFpbixcbiAgICB7XG4gICAgICBjaGFpbklkLFxuICAgICAgY3VzdG9tQXBpOiBhcGlcbiAgICB9XG4gICk7XG5cbiAgaWYgKHByaW1hcnlEb21haW5zLmVycm9yKSB7XG4gICAgY29uc29sZS5kZWJ1ZyhwcmltYXJ5RG9tYWlucy5lcnJvcik7XG4gIH1cblxuICByZXR1cm4gcHJpbWFyeURvbWFpbnM/LmFkZHJlc3MgfHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUF6ZXJvQWRkcmVzc1RvRG9tYWluIChhZGRyZXNzOiBzdHJpbmcsIGNoYWluOiBzdHJpbmcsIGFwaTogQXBpUHJvbWlzZSk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gIGxldCBjaGFpbklkOiBTdXBwb3J0ZWRDaGFpbklkID0gU3VwcG9ydGVkQ2hhaW5JZC5BbGVwaFplcm87XG5cbiAgaWYgKGNoYWluID09PSAnYWxlcGhUZXN0Jykge1xuICAgIGNoYWluSWQgPSBTdXBwb3J0ZWRDaGFpbklkLkFsZXBoWmVyb1Rlc3RuZXQ7XG4gIH1cblxuICBjb25zdCBwcmltYXJ5RG9tYWlucyA9IGF3YWl0IHJlc29sdmVBZGRyZXNzVG9Eb21haW4oXG4gICAgYWRkcmVzcyxcbiAgICB7XG4gICAgICBjaGFpbklkLFxuICAgICAgY3VzdG9tQXBpOiBhcGlcbiAgICB9XG4gICk7XG5cbiAgaWYgKHByaW1hcnlEb21haW5zLmVycm9yKSB7XG4gICAgY29uc29sZS5kZWJ1ZyhwcmltYXJ5RG9tYWlucy5lcnJvcik7XG4gIH1cblxuICByZXR1cm4gcHJpbWFyeURvbWFpbnM/LnByaW1hcnlEb21haW4gfHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBemVyb0RvbWFpbiAoaW5wdXQ6IHN0cmluZykge1xuICByZXR1cm4gaW5wdXQuaW5jbHVkZXMoQVpFUk9fSURfU1VGRklYKSB8fCBpbnB1dC5pbmNsdWRlcyhUWkVST19JRF9TVUZGSVgpO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9DaGFpbkluZm8gfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgQ2hhaW5TdGFraW5nTWV0YWRhdGEsIE5vbWluYXRpb25JbmZvLCBOb21pbmF0b3JNZXRhZGF0YSwgU3Rha2luZ1N0YXR1cywgU3Rha2luZ1R5cGUsIFVuc3Rha2luZ0luZm8sIFVuc3Rha2luZ1N0YXR1cywgVmFsaWRhdG9ySW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3Rha2luZ1N0YXR1c0J5Tm9taW5hdGlvbnMsIFBhbGxldERhcHBzU3Rha2luZ0FjY291bnRMZWRnZXIsIFBhbGxldERhcHBzU3Rha2luZ0RhcHBJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9rb25pL2FwaS9zdGFraW5nL2JvbmRpbmcvdXRpbHMnO1xuaW1wb3J0IHsgX1NUQUtJTkdfRVJBX0xFTkdUSF9NQVAgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvY29uc3RhbnRzJztcbmltcG9ydCB7IF9TdWJzdHJhdGVBcGkgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgaXNVcmwsIHBhcnNlUmF3TnVtYmVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xuXG5pbXBvcnQgeyBTdWJtaXR0YWJsZUV4dHJpbnNpYyB9IGZyb20gJ0Bwb2xrYWRvdC9hcGkvcHJvbWlzZS90eXBlcyc7XG5pbXBvcnQgeyBDb2RlYyB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBCTiwgQk5fWkVSTyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbmltcG9ydCB7IGlzRXRoZXJldW1BZGRyZXNzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZUFzdGFyU3Rha2luZ01ldGFkYXRhIChjaGFpbjogc3RyaW5nLCBzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGksIGNhbGxiYWNrOiAoY2hhaW46IHN0cmluZywgcnM6IENoYWluU3Rha2luZ01ldGFkYXRhKSA9PiB2b2lkKSB7XG4gIHJldHVybiBzdWJzdHJhdGVBcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5jdXJyZW50RXJhKChfY3VycmVudEVyYTogQ29kZWMpID0+IHtcbiAgICBjb25zdCBlcmEgPSBfY3VycmVudEVyYS50b1N0cmluZygpO1xuICAgIGNvbnN0IG1pbkRlbGVnYXRvclN0YWtlID0gc3Vic3RyYXRlQXBpLmFwaS5jb25zdHMuZGFwcHNTdGFraW5nLm1pbmltdW1TdGFraW5nQW1vdW50LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgdW5zdGFraW5nRGVsYXkgPSBzdWJzdHJhdGVBcGkuYXBpLmNvbnN0cy5kYXBwc1N0YWtpbmcudW5ib25kaW5nUGVyaW9kLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCB1bnN0YWtpbmdQZXJpb2QgPSBwYXJzZUludCh1bnN0YWtpbmdEZWxheSkgKiBfU1RBS0lOR19FUkFfTEVOR1RIX01BUFtjaGFpbl07XG5cbiAgICBjYWxsYmFjayhjaGFpbiwge1xuICAgICAgY2hhaW4sXG4gICAgICB0eXBlOiBTdGFraW5nVHlwZS5OT01JTkFURUQsXG4gICAgICBlcmE6IHBhcnNlSW50KGVyYSksXG4gICAgICBtaW5TdGFrZTogbWluRGVsZWdhdG9yU3Rha2UsXG4gICAgICBtYXhWYWxpZGF0b3JQZXJOb21pbmF0b3I6IDEwMCwgLy8gdGVtcG9yYXJ5IGZpeCBmb3IgQXN0YXIsIHRoZXJlJ3Mgbm8gbGltaXQgZm9yIG5vd1xuICAgICAgbWF4V2l0aGRyYXdhbFJlcXVlc3RQZXJWYWxpZGF0b3I6IDEsIC8vIGJ5IGRlZmF1bHRcbiAgICAgIGFsbG93Q2FuY2VsVW5zdGFraW5nOiB0cnVlLFxuICAgICAgdW5zdGFraW5nUGVyaW9kXG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXN0YXJTdGFraW5nTWV0YWRhdGEgKGNoYWluOiBzdHJpbmcsIHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSk6IFByb21pc2U8Q2hhaW5TdGFraW5nTWV0YWRhdGE+IHtcbiAgY29uc3QgYXByUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmFzdGFyLm5ldHdvcmsvYXBpL3YxLyR7Y2hhaW59L2RhcHBzLXN0YWtpbmcvYXByYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIHJlc29sdmUocmVzcC5qc29uKCkpO1xuICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9KTtcblxuICBjb25zdCB0aW1lb3V0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgfSwgODAwMCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFwclJhY2VQcm9taXNlID0gUHJvbWlzZS5yYWNlKFtcbiAgICB0aW1lb3V0LFxuICAgIGFwclByb21pc2VcbiAgXSk7IC8vIG5lZWQgcmFjZSBiZWNhdXNlIEFQSSBvZnRlbiB0aW1lb3V0XG5cbiAgY29uc3QgW2FwckluZm8sIGNoYWluQXBpXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBhcHJSYWNlUHJvbWlzZSxcbiAgICBzdWJzdHJhdGVBcGkuaXNSZWFkeVxuICBdKTtcblxuICBjb25zdCBlcmEgPSAoYXdhaXQgY2hhaW5BcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5jdXJyZW50RXJhKCkpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG1pbkRlbGVnYXRvclN0YWtlID0gY2hhaW5BcGkuYXBpLmNvbnN0cy5kYXBwc1N0YWtpbmcubWluaW11bVN0YWtpbmdBbW91bnQudG9TdHJpbmcoKTtcbiAgY29uc3QgdW5zdGFraW5nRGVsYXkgPSBjaGFpbkFwaS5hcGkuY29uc3RzLmRhcHBzU3Rha2luZy51bmJvbmRpbmdQZXJpb2QudG9TdHJpbmcoKTtcblxuICBjb25zdCB1bnN0YWtpbmdQZXJpb2QgPSBwYXJzZUludCh1bnN0YWtpbmdEZWxheSkgKiBfU1RBS0lOR19FUkFfTEVOR1RIX01BUFtjaGFpbl07XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFpbixcbiAgICB0eXBlOiBTdGFraW5nVHlwZS5OT01JTkFURUQsXG4gICAgZXhwZWN0ZWRSZXR1cm46IGFwckluZm8gIT09IG51bGwgPyBhcHJJbmZvIGFzIG51bWJlciA6IHVuZGVmaW5lZCxcbiAgICBlcmE6IHBhcnNlSW50KGVyYSksXG4gICAgbWluU3Rha2U6IG1pbkRlbGVnYXRvclN0YWtlLFxuICAgIG1heFZhbGlkYXRvclBlck5vbWluYXRvcjogMTAwLCAvLyB0ZW1wb3JhcnkgZml4IGZvciBBc3RhciwgdGhlcmUncyBubyBsaW1pdCBmb3Igbm93XG4gICAgbWF4V2l0aGRyYXdhbFJlcXVlc3RQZXJWYWxpZGF0b3I6IDEsIC8vIGJ5IGRlZmF1bHRcbiAgICBhbGxvd0NhbmNlbFVuc3Rha2luZzogdHJ1ZSxcbiAgICB1bnN0YWtpbmdQZXJpb2RcbiAgfSBhcyBDaGFpblN0YWtpbmdNZXRhZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1YnNjcmliZUFzdGFyTm9taW5hdG9yTWV0YWRhdGEgKGNoYWluSW5mbzogX0NoYWluSW5mbywgYWRkcmVzczogc3RyaW5nLCBzdWJzdHJhdGVBcGk6IF9TdWJzdHJhdGVBcGksIGxlZGdlcjogUGFsbGV0RGFwcHNTdGFraW5nQWNjb3VudExlZGdlcikge1xuICBjb25zdCBub21pbmF0aW9uTGlzdDogTm9taW5hdGlvbkluZm9bXSA9IFtdO1xuICBjb25zdCB1bnN0YWtpbmdMaXN0OiBVbnN0YWtpbmdJbmZvW10gPSBbXTtcblxuICBjb25zdCBhbGxEYXBwc1JlcSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmFzdGFyLm5ldHdvcmsvYXBpL3YxLyR7Y2hhaW5JbmZvLnNsdWd9L2RhcHBzLXN0YWtpbmcvZGFwcHNgLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXNwLmpzb24oKSk7XG4gICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH0pO1xuXG4gIGNvbnN0IFtfYWxsRGFwcHMsIF9lcmEsIF9zdGFrZXJJbmZvXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBhbGxEYXBwc1JlcSxcbiAgICBzdWJzdHJhdGVBcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5jdXJyZW50RXJhKCksXG4gICAgc3Vic3RyYXRlQXBpLmFwaS5xdWVyeS5kYXBwc1N0YWtpbmcuZ2VuZXJhbFN0YWtlckluZm8uZW50cmllcyhhZGRyZXNzKVxuICBdKTtcblxuICBjb25zdCBjdXJyZW50RXJhID0gX2VyYS50b1N0cmluZygpO1xuICBjb25zdCBtaW5EZWxlZ2F0b3JTdGFrZSA9IHN1YnN0cmF0ZUFwaS5hcGkuY29uc3RzLmRhcHBzU3Rha2luZy5taW5pbXVtU3Rha2luZ0Ftb3VudC50b1N0cmluZygpO1xuICBjb25zdCBhbGxEYXBwcyA9IF9hbGxEYXBwcyBhcyBQYWxsZXREYXBwc1N0YWtpbmdEYXBwSW5mb1tdO1xuXG4gIGxldCBiblRvdGFsQWN0aXZlU3Rha2UgPSBCTl9aRVJPO1xuXG4gIGlmIChfc3Rha2VySW5mby5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZEFwcEluZm9NYXA6IFJlY29yZDxzdHJpbmcsIFBhbGxldERhcHBzU3Rha2luZ0RhcHBJbmZvPiA9IHt9O1xuXG4gICAgYWxsRGFwcHMuZm9yRWFjaCgoZGFwcEluZm8pID0+IHtcbiAgICAgIGRBcHBJbmZvTWFwW2RhcHBJbmZvLmFkZHJlc3MudG9Mb3dlckNhc2UoKV0gPSBkYXBwSW5mbztcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBfc3Rha2VySW5mbykge1xuICAgICAgY29uc3QgZGF0YSA9IGl0ZW1bMF0udG9IdW1hbigpIGFzIHVua25vd24gYXMgYW55W107XG4gICAgICBjb25zdCBzdGFrZWREYXBwID0gZGF0YVsxXSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgICAgY29uc3Qgc3Rha2VEYXRhID0gaXRlbVsxXS50b1ByaW1pdGl2ZSgpIGFzIFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXT47XG4gICAgICBjb25zdCBzdGFrZUxpc3QgPSBzdGFrZURhdGEuc3Rha2VzO1xuXG4gICAgICBjb25zdCBkYXBwQWRkcmVzcyA9IHN0YWtlZERhcHAuRXZtID8gc3Rha2VkRGFwcC5Fdm0udG9Mb3dlckNhc2UoKSA6IHN0YWtlZERhcHAuV2FzbTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGFrZSA9IHN0YWtlTGlzdC5zbGljZSgtMSlbMF0uc3Rha2VkLnRvU3RyaW5nKCkgfHwgJzAnO1xuXG4gICAgICBjb25zdCBibkN1cnJlbnRTdGFrZSA9IG5ldyBCTihjdXJyZW50U3Rha2UpO1xuXG4gICAgICBpZiAoYm5DdXJyZW50U3Rha2UuZ3QoQk5fWkVSTykpIHtcbiAgICAgICAgY29uc3QgZGFwcFN0YWtpbmdTdGF0dXMgPSBibkN1cnJlbnRTdGFrZS5ndChCTl9aRVJPKSAmJiBibkN1cnJlbnRTdGFrZS5ndGUobmV3IEJOKG1pbkRlbGVnYXRvclN0YWtlKSkgPyBTdGFraW5nU3RhdHVzLkVBUk5JTkdfUkVXQVJEIDogU3Rha2luZ1N0YXR1cy5OT1RfRUFSTklORztcblxuICAgICAgICBiblRvdGFsQWN0aXZlU3Rha2UgPSBiblRvdGFsQWN0aXZlU3Rha2UuYWRkKGJuQ3VycmVudFN0YWtlKTtcbiAgICAgICAgY29uc3QgZGFwcEluZm8gPSBkQXBwSW5mb01hcFtkYXBwQWRkcmVzc107XG5cbiAgICAgICAgbm9taW5hdGlvbkxpc3QucHVzaCh7XG4gICAgICAgICAgc3RhdHVzOiBkYXBwU3Rha2luZ1N0YXR1cyxcbiAgICAgICAgICBjaGFpbjogY2hhaW5JbmZvLnNsdWcsXG4gICAgICAgICAgdmFsaWRhdG9yQWRkcmVzczogZGFwcEFkZHJlc3MudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBhY3RpdmVTdGFrZTogY3VycmVudFN0YWtlLFxuICAgICAgICAgIHZhbGlkYXRvck1pblN0YWtlOiAnMCcsXG4gICAgICAgICAgdmFsaWRhdG9ySWRlbnRpdHk6IGRhcHBJbmZvPy5uYW1lLFxuICAgICAgICAgIGhhc1Vuc3Rha2luZzogZmFsc2UgLy8gY2Fubm90IGdldCB1bnN0YWtpbmcgaW5mbyBieSBkYXBwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVubG9ja2luZ0NodW5rcyA9IGxlZGdlci51bmJvbmRpbmdJbmZvLnVubG9ja2luZ0NodW5rcztcblxuICBpZiAodW5sb2NraW5nQ2h1bmtzLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IHVubG9ja2luZ0NodW5rIG9mIHVubG9ja2luZ0NodW5rcykge1xuICAgICAgY29uc3QgaXNDbGFpbWFibGUgPSB1bmxvY2tpbmdDaHVuay51bmxvY2tFcmEgLSBwYXJzZUludChjdXJyZW50RXJhKSA8IDA7XG4gICAgICBjb25zdCByZW1haW5pbmdFcmEgPSB1bmxvY2tpbmdDaHVuay51bmxvY2tFcmEgLSBwYXJzZUludChjdXJyZW50RXJhKTtcbiAgICAgIGNvbnN0IHdhaXRpbmdUaW1lID0gcmVtYWluaW5nRXJhICogX1NUQUtJTkdfRVJBX0xFTkdUSF9NQVBbY2hhaW5JbmZvLnNsdWddO1xuXG4gICAgICB1bnN0YWtpbmdMaXN0LnB1c2goe1xuICAgICAgICBjaGFpbjogY2hhaW5JbmZvLnNsdWcsXG4gICAgICAgIHN0YXR1czogaXNDbGFpbWFibGUgPyBVbnN0YWtpbmdTdGF0dXMuQ0xBSU1BQkxFIDogVW5zdGFraW5nU3RhdHVzLlVOTE9DS0lORyxcbiAgICAgICAgY2xhaW1hYmxlOiB1bmxvY2tpbmdDaHVuay5hbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgd2FpdGluZ1RpbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChub21pbmF0aW9uTGlzdC5sZW5ndGggPT09IDAgJiYgdW5zdGFraW5nTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhaW46IGNoYWluSW5mby5zbHVnLFxuICAgICAgdHlwZTogU3Rha2luZ1R5cGUuTk9NSU5BVEVELFxuICAgICAgYWRkcmVzcyxcbiAgICAgIHN0YXR1czogU3Rha2luZ1N0YXR1cy5OT1RfU1RBS0lORyxcbiAgICAgIGFjdGl2ZVN0YWtlOiAnMCcsXG4gICAgICBub21pbmF0aW9uczogW10sXG4gICAgICB1bnN0YWtpbmdzOiBbXVxuICAgIH0gYXMgTm9taW5hdG9yTWV0YWRhdGE7XG4gIH1cblxuICBjb25zdCBzdGFraW5nU3RhdHVzID0gZ2V0U3Rha2luZ1N0YXR1c0J5Tm9taW5hdGlvbnMoYm5Ub3RhbEFjdGl2ZVN0YWtlLCBub21pbmF0aW9uTGlzdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFpbjogY2hhaW5JbmZvLnNsdWcsXG4gICAgdHlwZTogU3Rha2luZ1R5cGUuTk9NSU5BVEVELFxuICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgYWN0aXZlU3Rha2U6IGJuVG90YWxBY3RpdmVTdGFrZS50b1N0cmluZygpLFxuICAgIG5vbWluYXRpb25zOiBub21pbmF0aW9uTGlzdCxcbiAgICB1bnN0YWtpbmdzOiB1bnN0YWtpbmdMaXN0LFxuICAgIHN0YXR1czogc3Rha2luZ1N0YXR1c1xuICB9IGFzIE5vbWluYXRvck1ldGFkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXN0YXJOb21pbmF0b3JNZXRhZGF0YSAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCBhZGRyZXNzOiBzdHJpbmcsIHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSk6IFByb21pc2U8Tm9taW5hdG9yTWV0YWRhdGEgfCB1bmRlZmluZWQ+IHtcbiAgaWYgKGlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY2hhaW4gPSBjaGFpbkluZm8uc2x1ZztcbiAgY29uc3QgY2hhaW5BcGkgPSBhd2FpdCBzdWJzdHJhdGVBcGkuaXNSZWFkeTtcblxuICBjb25zdCBub21pbmF0aW9uTGlzdDogTm9taW5hdGlvbkluZm9bXSA9IFtdO1xuICBjb25zdCB1bnN0YWtpbmdMaXN0OiBVbnN0YWtpbmdJbmZvW10gPSBbXTtcblxuICBjb25zdCBhbGxEYXBwc1JlcSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmFzdGFyLm5ldHdvcmsvYXBpL3YxLyR7Y2hhaW59L2RhcHBzLXN0YWtpbmcvZGFwcHNgLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXNwLmpzb24oKSk7XG4gICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH0pO1xuXG4gIGNvbnN0IFtfbGVkZ2VyLCBfZXJhLCBfc3Rha2VySW5mb10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgY2hhaW5BcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5sZWRnZXIoYWRkcmVzcyksXG4gICAgY2hhaW5BcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5jdXJyZW50RXJhKCksXG4gICAgY2hhaW5BcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5nZW5lcmFsU3Rha2VySW5mby5lbnRyaWVzKGFkZHJlc3MpXG4gIF0pO1xuXG4gIGNvbnN0IGxlZGdlciA9IF9sZWRnZXIudG9QcmltaXRpdmUoKSBhcyB1bmtub3duIGFzIFBhbGxldERhcHBzU3Rha2luZ0FjY291bnRMZWRnZXI7XG4gIGNvbnN0IGN1cnJlbnRFcmEgPSBfZXJhLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG1pbkRlbGVnYXRvclN0YWtlID0gY2hhaW5BcGkuYXBpLmNvbnN0cy5kYXBwc1N0YWtpbmcubWluaW11bVN0YWtpbmdBbW91bnQudG9TdHJpbmcoKTtcblxuICBsZXQgYm5Ub3RhbEFjdGl2ZVN0YWtlID0gQk5fWkVSTztcblxuICBpZiAoX3N0YWtlckluZm8ubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGRBcHBJbmZvTWFwOiBSZWNvcmQ8c3RyaW5nLCBQYWxsZXREYXBwc1N0YWtpbmdEYXBwSW5mbz4gPSB7fTtcbiAgICBjb25zdCBhbGxEYXBwcyA9IGF3YWl0IGFsbERhcHBzUmVxIGFzIFBhbGxldERhcHBzU3Rha2luZ0RhcHBJbmZvW107XG5cbiAgICBhbGxEYXBwcy5mb3JFYWNoKChkYXBwSW5mbykgPT4ge1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGlzRXRoZXJldW1BZGRyZXNzKGRhcHBJbmZvLmFkZHJlc3MpID8gZGFwcEluZm8uYWRkcmVzcy50b0xvd2VyQ2FzZSgpIDogZGFwcEluZm8uYWRkcmVzcztcblxuICAgICAgZEFwcEluZm9NYXBbYWRkcmVzc10gPSBkYXBwSW5mbztcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBfc3Rha2VySW5mbykge1xuICAgICAgY29uc3QgZGF0YSA9IGl0ZW1bMF0udG9IdW1hbigpIGFzIHVua25vd24gYXMgYW55W107XG4gICAgICBjb25zdCBzdGFrZWREYXBwID0gZGF0YVsxXSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgICAgY29uc3Qgc3Rha2VEYXRhID0gaXRlbVsxXS50b1ByaW1pdGl2ZSgpIGFzIFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXT47XG4gICAgICBjb25zdCBzdGFrZUxpc3QgPSBzdGFrZURhdGEuc3Rha2VzO1xuXG4gICAgICBjb25zdCBkYXBwQWRkcmVzcyA9IGlzRXRoZXJldW1BZGRyZXNzKHN0YWtlZERhcHAuRXZtKSA/IHN0YWtlZERhcHAuRXZtLnRvTG93ZXJDYXNlKCkgOiBzdGFrZWREYXBwLkV2bTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGFrZSA9IHN0YWtlTGlzdC5zbGljZSgtMSlbMF0uc3Rha2VkLnRvU3RyaW5nKCkgfHwgJzAnO1xuXG4gICAgICBjb25zdCBibkN1cnJlbnRTdGFrZSA9IG5ldyBCTihjdXJyZW50U3Rha2UpO1xuXG4gICAgICBpZiAoYm5DdXJyZW50U3Rha2UuZ3QoQk5fWkVSTykpIHtcbiAgICAgICAgY29uc3QgZGFwcFN0YWtpbmdTdGF0dXMgPSBibkN1cnJlbnRTdGFrZS5ndChCTl9aRVJPKSAmJiBibkN1cnJlbnRTdGFrZS5ndGUobmV3IEJOKG1pbkRlbGVnYXRvclN0YWtlKSkgPyBTdGFraW5nU3RhdHVzLkVBUk5JTkdfUkVXQVJEIDogU3Rha2luZ1N0YXR1cy5OT1RfRUFSTklORztcblxuICAgICAgICBiblRvdGFsQWN0aXZlU3Rha2UgPSBiblRvdGFsQWN0aXZlU3Rha2UuYWRkKGJuQ3VycmVudFN0YWtlKTtcbiAgICAgICAgY29uc3QgZGFwcEluZm8gPSBkQXBwSW5mb01hcFtkYXBwQWRkcmVzc107XG5cbiAgICAgICAgbm9taW5hdGlvbkxpc3QucHVzaCh7XG4gICAgICAgICAgc3RhdHVzOiBkYXBwU3Rha2luZ1N0YXR1cyxcbiAgICAgICAgICBjaGFpbixcbiAgICAgICAgICB2YWxpZGF0b3JBZGRyZXNzOiBkYXBwQWRkcmVzcyxcbiAgICAgICAgICBhY3RpdmVTdGFrZTogY3VycmVudFN0YWtlLFxuICAgICAgICAgIHZhbGlkYXRvck1pblN0YWtlOiAnMCcsXG4gICAgICAgICAgdmFsaWRhdG9ySWRlbnRpdHk6IGRhcHBJbmZvPy5uYW1lLFxuICAgICAgICAgIGhhc1Vuc3Rha2luZzogZmFsc2UgLy8gY2Fubm90IGdldCB1bnN0YWtpbmcgaW5mbyBieSBkYXBwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVubG9ja2luZ0NodW5rcyA9IGxlZGdlci51bmJvbmRpbmdJbmZvLnVubG9ja2luZ0NodW5rcztcblxuICBpZiAodW5sb2NraW5nQ2h1bmtzLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IHVubG9ja2luZ0NodW5rIG9mIHVubG9ja2luZ0NodW5rcykge1xuICAgICAgY29uc3QgaXNDbGFpbWFibGUgPSB1bmxvY2tpbmdDaHVuay51bmxvY2tFcmEgLSBwYXJzZUludChjdXJyZW50RXJhKSA8IDA7XG4gICAgICBjb25zdCByZW1haW5pbmdFcmEgPSB1bmxvY2tpbmdDaHVuay51bmxvY2tFcmEgLSBwYXJzZUludChjdXJyZW50RXJhKTtcbiAgICAgIGNvbnN0IHdhaXRpbmdUaW1lID0gcmVtYWluaW5nRXJhICogX1NUQUtJTkdfRVJBX0xFTkdUSF9NQVBbY2hhaW5dO1xuXG4gICAgICB1bnN0YWtpbmdMaXN0LnB1c2goe1xuICAgICAgICBjaGFpbixcbiAgICAgICAgc3RhdHVzOiBpc0NsYWltYWJsZSA/IFVuc3Rha2luZ1N0YXR1cy5DTEFJTUFCTEUgOiBVbnN0YWtpbmdTdGF0dXMuVU5MT0NLSU5HLFxuICAgICAgICBjbGFpbWFibGU6IHVubG9ja2luZ0NodW5rLmFtb3VudC50b1N0cmluZygpLFxuICAgICAgICB3YWl0aW5nVGltZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vbWluYXRpb25MaXN0Lmxlbmd0aCA9PT0gMCAmJiB1bnN0YWtpbmdMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFpbjogY2hhaW5JbmZvLnNsdWcsXG4gICAgICB0eXBlOiBTdGFraW5nVHlwZS5OT01JTkFURUQsXG4gICAgICBhZGRyZXNzLFxuICAgICAgc3RhdHVzOiBTdGFraW5nU3RhdHVzLk5PVF9TVEFLSU5HLFxuICAgICAgYWN0aXZlU3Rha2U6ICcwJyxcbiAgICAgIG5vbWluYXRpb25zOiBbXSxcbiAgICAgIHVuc3Rha2luZ3M6IFtdXG4gICAgfSBhcyBOb21pbmF0b3JNZXRhZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHN0YWtpbmdTdGF0dXMgPSBnZXRTdGFraW5nU3RhdHVzQnlOb21pbmF0aW9ucyhiblRvdGFsQWN0aXZlU3Rha2UsIG5vbWluYXRpb25MaXN0KTtcblxuICByZXR1cm4ge1xuICAgIGNoYWluLFxuICAgIHR5cGU6IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCxcbiAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgIGFjdGl2ZVN0YWtlOiBiblRvdGFsQWN0aXZlU3Rha2UudG9TdHJpbmcoKSxcbiAgICBub21pbmF0aW9uczogbm9taW5hdGlvbkxpc3QsXG4gICAgdW5zdGFraW5nczogdW5zdGFraW5nTGlzdCxcbiAgICBzdGF0dXM6IHN0YWtpbmdTdGF0dXNcbiAgfSBhcyBOb21pbmF0b3JNZXRhZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzdGFyRGFwcHNJbmZvIChuZXR3b3JrS2V5OiBzdHJpbmcsIHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSkge1xuICBjb25zdCBjaGFpbkFwaSA9IGF3YWl0IHN1YnN0cmF0ZUFwaS5pc1JlYWR5O1xuICBjb25zdCByYXdNYXhTdGFrZXJQZXJDb250cmFjdCA9IChjaGFpbkFwaS5hcGkuY29uc3RzLmRhcHBzU3Rha2luZy5tYXhOdW1iZXJPZlN0YWtlcnNQZXJDb250cmFjdCkudG9IdW1hbigpIGFzIHN0cmluZztcblxuICBjb25zdCBhbGxEYXBwc0luZm86IFZhbGlkYXRvckluZm9bXSA9IFtdO1xuICBjb25zdCBtYXhTdGFrZXJQZXJDb250cmFjdCA9IHBhcnNlUmF3TnVtYmVyKHJhd01heFN0YWtlclBlckNvbnRyYWN0KTtcblxuICBjb25zdCBhbGxEYXBwc1JlcSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmFzdGFyLm5ldHdvcmsvYXBpL3YxLyR7bmV0d29ya0tleX0vZGFwcHMtc3Rha2luZy9kYXBwc2AsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3AuanNvbigpKTtcbiAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfSk7XG5cbiAgY29uc3QgW19lcmEsIF9hbGxEYXBwc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgY2hhaW5BcGkuYXBpLnF1ZXJ5LmRhcHBzU3Rha2luZy5jdXJyZW50RXJhKCksXG4gICAgYWxsRGFwcHNSZXFcbiAgXSk7XG5cbiAgY29uc3QgZXJhID0gcGFyc2VSYXdOdW1iZXIoX2VyYS50b0h1bWFuKCkgYXMgc3RyaW5nKTtcbiAgY29uc3QgYWxsRGFwcHMgPSBfYWxsRGFwcHMgYXMgUmVjb3JkPHN0cmluZywgYW55PltdO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKGFsbERhcHBzLm1hcChhc3luYyAoZGFwcCkgPT4ge1xuICAgIGNvbnN0IGRhcHBOYW1lID0gZGFwcC5uYW1lIGFzIHN0cmluZztcbiAgICBjb25zdCBkYXBwQWRkcmVzcyA9IGRhcHAuYWRkcmVzcyBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGFwcEljb24gPSBpc1VybChkYXBwLmljb25VcmwgYXMgc3RyaW5nKSA/IGRhcHAuaWNvblVybCBhcyBzdHJpbmcgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY29udHJhY3RQYXJhbSA9IGlzRXRoZXJldW1BZGRyZXNzKGRhcHBBZGRyZXNzKSA/IHsgRXZtOiBkYXBwQWRkcmVzcyB9IDogeyBXYXNtOiBkYXBwQWRkcmVzcyB9O1xuICAgIGNvbnN0IF9jb250cmFjdEluZm8gPSBhd2FpdCBjaGFpbkFwaS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmNvbnRyYWN0RXJhU3Rha2UoY29udHJhY3RQYXJhbSwgZXJhKTtcbiAgICBjb25zdCBjb250cmFjdEluZm8gPSBfY29udHJhY3RJbmZvLnRvUHJpbWl0aXZlKCkgYXMgUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICBsZXQgdG90YWxTdGFrZSA9ICcwJztcbiAgICBsZXQgc3Rha2VyQ291bnQgPSAwO1xuXG4gICAgaWYgKGNvbnRyYWN0SW5mbyAhPT0gbnVsbCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCxAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MsQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICB0b3RhbFN0YWtlID0gY29udHJhY3RJbmZvPy50b3RhbD8udG9TdHJpbmcoKTtcbiAgICAgIHN0YWtlckNvdW50ID0gY29udHJhY3RJbmZvLm51bWJlck9mU3Rha2VycyBhcyBudW1iZXI7XG4gICAgfVxuXG4gICAgYWxsRGFwcHNJbmZvLnB1c2goe1xuICAgICAgY29tbWlzc2lvbjogMCxcbiAgICAgIGV4cGVjdGVkUmV0dXJuOiAwLFxuICAgICAgYWRkcmVzczogaXNFdGhlcmV1bUFkZHJlc3MoZGFwcEFkZHJlc3MpID8gZGFwcEFkZHJlc3MudG9Mb3dlckNhc2UoKSA6IGRhcHBBZGRyZXNzLFxuICAgICAgdG90YWxTdGFrZTogdG90YWxTdGFrZSxcbiAgICAgIG93blN0YWtlOiAnMCcsXG4gICAgICBvdGhlclN0YWtlOiB0b3RhbFN0YWtlLnRvU3RyaW5nKCksXG4gICAgICBub21pbmF0b3JDb3VudDogc3Rha2VyQ291bnQsXG4gICAgICBibG9ja2VkOiBmYWxzZSxcbiAgICAgIGlzVmVyaWZpZWQ6IGZhbHNlLFxuICAgICAgbWluQm9uZDogJzAnLFxuICAgICAgaWNvbjogZGFwcEljb24sXG4gICAgICBpZGVudGl0eTogZGFwcE5hbWUsXG4gICAgICBjaGFpbjogbmV0d29ya0tleSxcbiAgICAgIGlzQ3Jvd2RlZDogc3Rha2VyQ291bnQgPj0gbWF4U3Rha2VyUGVyQ29udHJhY3RcbiAgICB9KTtcbiAgfSkpO1xuXG4gIHJldHVybiBhbGxEYXBwc0luZm87XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3RhckJvbmRpbmdFeHRyaW5zaWMgKHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSwgYW1vdW50OiBzdHJpbmcsIGRhcHBJbmZvOiBWYWxpZGF0b3JJbmZvKSB7XG4gIGNvbnN0IGNoYWluQXBpID0gYXdhaXQgc3Vic3RyYXRlQXBpLmlzUmVhZHk7XG4gIGNvbnN0IGJpbmFyeUFtb3VudCA9IG5ldyBCTihhbW91bnQpO1xuXG4gIGNvbnN0IGRhcHBQYXJhbSA9IGlzRXRoZXJldW1BZGRyZXNzKGRhcHBJbmZvLmFkZHJlc3MpID8geyBFdm06IGRhcHBJbmZvLmFkZHJlc3MgfSA6IHsgV2FzbTogZGFwcEluZm8uYWRkcmVzcyB9O1xuXG4gIHJldHVybiBjaGFpbkFwaS5hcGkudHguZGFwcHNTdGFraW5nLmJvbmRBbmRTdGFrZShkYXBwUGFyYW0sIGJpbmFyeUFtb3VudCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3RhclVuYm9uZGluZ0V4dHJpbnNpYyAoc3Vic3RyYXRlQXBpOiBfU3Vic3RyYXRlQXBpLCBhbW91bnQ6IHN0cmluZywgZGFwcEFkZHJlc3M6IHN0cmluZykge1xuICBjb25zdCBhcGlQcm9taXNlID0gYXdhaXQgc3Vic3RyYXRlQXBpLmlzUmVhZHk7XG4gIGNvbnN0IGJpbmFyeUFtb3VudCA9IG5ldyBCTihhbW91bnQpO1xuXG4gIGNvbnN0IGRhcHBQYXJhbSA9IGlzRXRoZXJldW1BZGRyZXNzKGRhcHBBZGRyZXNzKSA/IHsgRXZtOiBkYXBwQWRkcmVzcyB9IDogeyBXYXNtOiBkYXBwQWRkcmVzcyB9O1xuXG4gIHJldHVybiBhcGlQcm9taXNlLmFwaS50eC5kYXBwc1N0YWtpbmcudW5ib25kQW5kVW5zdGFrZShkYXBwUGFyYW0sIGJpbmFyeUFtb3VudCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3RhcldpdGhkcmF3YWxFeHRyaW5zaWMgKHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSkge1xuICBjb25zdCBjaGFpbkFwaSA9IGF3YWl0IHN1YnN0cmF0ZUFwaS5pc1JlYWR5O1xuXG4gIHJldHVybiBjaGFpbkFwaS5hcGkudHguZGFwcHNTdGFraW5nLndpdGhkcmF3VW5ib25kZWQoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzdGFyQ2xhaW1SZXdhcmRFeHRyaW5zaWMgKHN1YnN0cmF0ZUFwaTogX1N1YnN0cmF0ZUFwaSwgYWRkcmVzczogc3RyaW5nKSB7XG4gIGNvbnN0IGFwaVByb21pc2UgPSBhd2FpdCBzdWJzdHJhdGVBcGkuaXNSZWFkeTtcblxuICBjb25zdCBbX3N0YWtlZERhcHBzLCBfY3VycmVudEVyYV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgYXBpUHJvbWlzZS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmdlbmVyYWxTdGFrZXJJbmZvLmVudHJpZXMoYWRkcmVzcyksXG4gICAgYXBpUHJvbWlzZS5hcGkucXVlcnkuZGFwcHNTdGFraW5nLmN1cnJlbnRFcmEoKVxuICBdKTtcblxuICBjb25zdCBjdXJyZW50RXJhID0gcGFyc2VSYXdOdW1iZXIoX2N1cnJlbnRFcmEudG9IdW1hbigpIGFzIHN0cmluZyk7XG4gIGNvbnN0IHRyYW5zYWN0aW9uczogU3VibWl0dGFibGVFeHRyaW5zaWNbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgaXRlbSBvZiBfc3Rha2VkRGFwcHMpIHtcbiAgICBjb25zdCBkYXRhID0gaXRlbVswXS50b0h1bWFuKCkgYXMgYW55W107XG4gICAgY29uc3Qgc3Rha2VkRGFwcCA9IGRhdGFbMV0gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgICBjb25zdCBzdGFrZURhdGEgPSBpdGVtWzFdLnRvSHVtYW4oKSBhcyBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10+O1xuICAgIGNvbnN0IHN0YWtlcyA9IHN0YWtlRGF0YS5zdGFrZXM7XG4gICAgY29uc3QgZGFwcEFkZHJlc3MgPSBpc0V0aGVyZXVtQWRkcmVzcyhzdGFrZWREYXBwLkV2bSkgPyBzdGFrZWREYXBwLkV2bS50b0xvd2VyQ2FzZSgpIDogc3Rha2VkRGFwcC5Fdm07XG5cbiAgICBsZXQgbnVtYmVyT2ZVbmNsYWltZWRFcmEgPSAwO1xuICAgIGNvbnN0IG1heFR4ID0gNTA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWtlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBlcmEsIHN0YWtlZCB9ID0gc3Rha2VzW2ldO1xuICAgICAgY29uc3QgYm5TdGFrZWQgPSBuZXcgQk4oc3Rha2VkLnJlcGxhY2VBbGwoJywnLCAnJykpO1xuICAgICAgY29uc3QgcGFyc2VkRXJhID0gcGFyc2VSYXdOdW1iZXIoZXJhKTtcblxuICAgICAgaWYgKGJuU3Rha2VkLmVxKG5ldyBCTigwKSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5leHRFcmFEYXRhID0gc3Rha2VzW2kgKyAxXSA/PyBudWxsO1xuICAgICAgY29uc3QgbmV4dEVyYSA9IG5leHRFcmFEYXRhICYmIHBhcnNlUmF3TnVtYmVyKG5leHRFcmFEYXRhLmVyYSk7XG4gICAgICBjb25zdCBpc0xhc3RFcmEgPSBpID09PSBzdGFrZXMubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGVyYVRvQ2xhaW0gPSBpc0xhc3RFcmEgPyBjdXJyZW50RXJhIC0gcGFyc2VkRXJhIDogbmV4dEVyYSAtIHBhcnNlZEVyYTtcblxuICAgICAgbnVtYmVyT2ZVbmNsYWltZWRFcmEgKz0gZXJhVG9DbGFpbTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXBwUGFyYW0gPSBpc0V0aGVyZXVtQWRkcmVzcyhkYXBwQWRkcmVzcykgPyB7IEV2bTogZGFwcEFkZHJlc3MgfSA6IHsgV2FzbTogZGFwcEFkZHJlc3MgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4obnVtYmVyT2ZVbmNsYWltZWRFcmEsIG1heFR4KTsgaSsrKSB7XG4gICAgICBjb25zdCB0eCA9IGFwaVByb21pc2UuYXBpLnR4LmRhcHBzU3Rha2luZy5jbGFpbVN0YWtlcihkYXBwUGFyYW0pO1xuXG4gICAgICB0cmFuc2FjdGlvbnMucHVzaCh0eCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFwaVByb21pc2UuYXBpLnR4LnV0aWxpdHkuYmF0Y2godHJhbnNhY3Rpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzdGFyV2l0aGRyYXdhYmxlIChub21pbmF0b3JNZXRhZGF0YTogTm9taW5hdG9yTWV0YWRhdGEpOiBVbnN0YWtpbmdJbmZvIHtcbiAgY29uc3QgdW5zdGFraW5nSW5mbzogVW5zdGFraW5nSW5mbyA9IHtcbiAgICBjaGFpbjogbm9taW5hdG9yTWV0YWRhdGEuY2hhaW4sXG4gICAgc3RhdHVzOiBVbnN0YWtpbmdTdGF0dXMuQ0xBSU1BQkxFLFxuICAgIGNsYWltYWJsZTogJzAnLFxuICAgIHdhaXRpbmdUaW1lOiAwXG4gIH07XG5cbiAgbGV0IGJuV2l0aGRyYXdhYmxlID0gQk5fWkVSTztcblxuICBmb3IgKGNvbnN0IHVuc3Rha2luZyBvZiBub21pbmF0b3JNZXRhZGF0YS51bnN0YWtpbmdzKSB7XG4gICAgaWYgKHVuc3Rha2luZy5zdGF0dXMgPT09IFVuc3Rha2luZ1N0YXR1cy5DTEFJTUFCTEUpIHtcbiAgICAgIGJuV2l0aGRyYXdhYmxlID0gYm5XaXRoZHJhd2FibGUuYWRkKG5ldyBCTih1bnN0YWtpbmcuY2xhaW1hYmxlKSk7XG4gICAgfVxuICB9XG5cbiAgdW5zdGFraW5nSW5mby5jbGFpbWFibGUgPSBibldpdGhkcmF3YWJsZS50b1N0cmluZygpO1xuXG4gIHJldHVybiB1bnN0YWtpbmdJbmZvO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9DaGFpbkluZm8gfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgTm9taW5hdGlvbkluZm8sIE5vbWluYXRvck1ldGFkYXRhLCBTdGFraW5nU3RhdHVzLCBTdGFraW5nVHlwZSwgVW5zdGFraW5nSW5mbywgVW5zdGFraW5nU3RhdHVzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBnZXRBc3RhcldpdGhkcmF3YWJsZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uva29uaS9hcGkvc3Rha2luZy9ib25kaW5nL2FzdGFyJztcbmltcG9ydCB7IF9LTk9XTl9DSEFJTl9JTkZMQVRJT05fUEFSQU1TLCBfU1RBS0lOR19DSEFJTl9HUk9VUCwgX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMsIF9TdWJzdHJhdGVJbmZsYXRpb25QYXJhbXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvY29uc3RhbnRzJztcbmltcG9ydCB7IF9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3V0aWxzJztcbmltcG9ydCB7IGRldGVjdFRyYW5zbGF0ZSwgcGFyc2VSYXdOdW1iZXIsIHJlZm9ybWF0QWRkcmVzcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuaW1wb3J0IHsgYmFsYW5jZUZvcm1hdHRlciwgZm9ybWF0TnVtYmVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscy9udW1iZXInO1xuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xuXG5pbXBvcnQgeyBBcGlQcm9taXNlIH0gZnJvbSAnQHBvbGthZG90L2FwaSc7XG5pbXBvcnQgeyBCTiwgQk5fQklMTElPTiwgQk5fSFVORFJFRCwgQk5fTUlMTElPTiwgQk5fVEhPVVNBTkQsIEJOX1pFUk8sIGJuVG9VOGEsIHN0cmluZ1RvVThhLCB1OGFDb25jYXQgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0Tm9taW5hdGlvblBvb2xzUG9vbE1lbWJlciB7XG4gIHBvb2xJZDogbnVtYmVyLFxuICBwb2ludHM6IG51bWJlcixcbiAgbGFzUmVjb3JkZWRSZXdhcmRDb3VudGVyOiBudW1iZXIsXG4gIHVuYm9uZGluZ0VyYXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXREYXBwc1N0YWtpbmdEYXBwSW5mbyB7XG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBnaXRIdWJVcmw6IHN0cmluZyxcbiAgdGFnczogc3RyaW5nW10sXG4gIHVybDogc3RyaW5nLFxuICBpbWFnZXNVcmw6IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0RGFwcHNTdGFraW5nVW5sb2NraW5nQ2h1bmsge1xuICBhbW91bnQ6IG51bWJlcixcbiAgdW5sb2NrRXJhOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxsZXREYXBwc1N0YWtpbmdBY2NvdW50TGVkZ2VyIHtcbiAgbG9ja2VkOiBudW1iZXIsXG4gIHVuYm9uZGluZ0luZm86IHtcbiAgICB1bmxvY2tpbmdDaHVua3M6IFBhbGxldERhcHBzU3Rha2luZ1VubG9ja2luZ0NodW5rW11cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrSGVhZGVyIHtcbiAgcGFyZW50SGFzaDogc3RyaW5nLFxuICBudW1iZXI6IG51bWJlcixcbiAgc3RhdGVSb290OiBzdHJpbmcsXG4gIGV4dHJpbnNpY3NSb290OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJhY2hhaW5TdGFraW5nU3Rha2VPcHRpb24ge1xuICBvd25lcjogc3RyaW5nLFxuICBhbW91bnQ6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFjaGFpblN0YWtpbmdDYW5kaWRhdGVNZXRhZGF0YSB7XG4gIGJvbmQ6IHN0cmluZyxcbiAgZGVsZWdhdGlvbkNvdW50OiBudW1iZXIsXG4gIHRvdGFsQ291bnRlZDogc3RyaW5nLFxuICBsb3dlc3RUb3BEZWxlZ2F0aW9uQW1vdW50OiBzdHJpbmcsXG4gIHN0YXR1czogYW55IHwgJ0FjdGl2ZSdcbn1cblxuZXhwb3J0IGVudW0gUGFsbGV0UGFyYWNoYWluU3Rha2luZ1JlcXVlc3RUeXBlIHtcbiAgUkVWT0tFID0gJ3Jldm9rZScsXG4gIERFQ1JFQVNFID0gJ2RlY3JlYXNlJyxcbiAgQk9ORF9MRVNTID0gJ2JvbmRMZXNzJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldFBhcmFjaGFpblN0YWtpbmdEZWxlZ2F0aW9uUmVxdWVzdHNTY2hlZHVsZWRSZXF1ZXN0IHtcbiAgZGVsZWdhdG9yOiBzdHJpbmcsXG4gIHdoZW5FeGVjdXRhYmxlOiBudW1iZXIsXG4gIGFjdGlvbjogUmVjb3JkPFBhbGxldFBhcmFjaGFpblN0YWtpbmdSZXF1ZXN0VHlwZSwgbnVtYmVyPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldFBhcmFjaGFpblN0YWtpbmdEZWxlZ2F0aW9uSW5mbyB7XG4gIG93bmVyOiBzdHJpbmcsXG4gIGFtb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0UGFyYWNoYWluU3Rha2luZ0RlbGVnYXRvciB7XG4gIGlkOiBzdHJpbmcsXG4gIGRlbGVnYXRpb25zOiBQYWxsZXRQYXJhY2hhaW5TdGFraW5nRGVsZWdhdGlvbkluZm9bXSxcbiAgdG90YWw6IG51bWJlcixcbiAgbGVzc1RvdGFsOiBudW1iZXIsXG4gIHN0YXR1czogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0U3Rha2luZ0V4cG9zdXJlSXRlbSB7XG4gIHdobzogc3RyaW5nLFxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0U3Rha2luZ0V4cG9zdXJlIHtcbiAgdG90YWw6IG51bWJlcixcbiAgb3duOiBudW1iZXIsXG4gIG90aGVyczogUGFsbGV0U3Rha2luZ0V4cG9zdXJlSXRlbVtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0SWRlbnRpdHlSZWdpc3RyYXRpb24ge1xuICBqdWRnZW1lbnRzOiBhbnlbXSxcbiAgZGVwb3NpdDogbnVtYmVyLFxuICBpbmZvOiB7XG4gICAgZGlzcGxheToge1xuICAgICAgUmF3OiBzdHJpbmdcbiAgICB9LFxuICAgIHdlYjoge1xuICAgICAgUmF3OiBzdHJpbmdcbiAgICB9LFxuICAgIHR3aXR0ZXI6IHtcbiAgICAgIFJhdzogc3RyaW5nXG4gICAgfSxcbiAgICByaW90OiB7XG4gICAgICBSYXc6IHN0cmluZ1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRvckV4dHJhSW5mbyB7XG4gIGNvbW1pc3Npb246IHN0cmluZyxcbiAgYmxvY2tlZDogZmFsc2UsXG4gIGlkZW50aXR5Pzogc3RyaW5nLFxuICBpc1ZlcmlmaWVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5sb2NraW5nIHtcbiAgcmVtYWluaW5nRXJhczogQk47XG4gIHZhbHVlOiBCTjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXJub2FTdGFraW5nUmV3YXJkc1N0YWtpbmdSZXdhcmRzRGF0YSB7XG4gIHNlc3Npb25FcmFQYXlvdXQ6IHN0cmluZyxcbiAgc2Vzc2lvbkV4dHJhUmV3YXJkUGF5b3V0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9vbFN0YXNoQWRkcmVzcyAoYXBpOiBBcGlQcm9taXNlLCBpbmRleDogbnVtYmVyLCBwb29sSWQ6IG51bWJlciwgcG9vbHNQYWxsZXRJZDogc3RyaW5nKSB7XG4gIGNvbnN0IE1vZFByZWZpeCA9IHN0cmluZ1RvVThhKCdtb2RsJyk7XG4gIGNvbnN0IFUzMk9wdHMgPSB7IGJpdExlbmd0aDogMzIsIGlzTGU6IHRydWUgfTtcbiAgY29uc3QgRW1wdHlIMjU2ID0gbmV3IFVpbnQ4QXJyYXkoMzIpO1xuXG4gIHJldHVybiBhcGkucmVnaXN0cnlcbiAgICAuY3JlYXRlVHlwZShcbiAgICAgICdBY2NvdW50SWQzMicsXG4gICAgICB1OGFDb25jYXQoXG4gICAgICAgIE1vZFByZWZpeCxcbiAgICAgICAgcG9vbHNQYWxsZXRJZCxcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoW2luZGV4XSksXG4gICAgICAgIGJuVG9VOGEobmV3IEJOKHBvb2xJZC50b1N0cmluZygpKSwgVTMyT3B0cyksXG4gICAgICAgIEVtcHR5SDI1NlxuICAgICAgKVxuICAgIClcbiAgICAudG9TdHJpbmcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVBvb2xOYW1lIChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1teXFx4MjAtXFx4N0VdL2csICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSWRlbnRpdHkgKGlkZW50aXR5SW5mbzogUGFsbGV0SWRlbnRpdHlSZWdpc3RyYXRpb24gfCBudWxsKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgbGV0IGlkZW50aXR5O1xuXG4gIGlmIChpZGVudGl0eUluZm8pIHtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGlkZW50aXR5SW5mbz8uaW5mbz8uZGlzcGxheT8uUmF3O1xuICAgIGNvbnN0IHdlYiA9IGlkZW50aXR5SW5mbz8uaW5mbz8ud2ViPy5SYXc7XG4gICAgY29uc3QgcmlvdCA9IGlkZW50aXR5SW5mbz8uaW5mbz8ucmlvdD8uUmF3O1xuICAgIGNvbnN0IHR3aXR0ZXIgPSBpZGVudGl0eUluZm8/LmluZm8/LnR3aXR0ZXI/LlJhdztcblxuICAgIGlmIChkaXNwbGF5TmFtZSAmJiAhZGlzcGxheU5hbWUuc3RhcnRzV2l0aCgnMHgnKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgaWRlbnRpdHkgPSBkaXNwbGF5TmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWRlbnRpdHkgPSB0d2l0dGVyIHx8IHdlYiB8fCByaW90O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpZGVudGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluZmxhdGlvblBhcmFtcyAobmV0d29ya0tleTogc3RyaW5nKTogX1N1YnN0cmF0ZUluZmxhdGlvblBhcmFtcyB7XG4gIHJldHVybiBfS05PV05fQ0hBSU5fSU5GTEFUSU9OX1BBUkFNU1tuZXR3b3JrS2V5XSB8fCBfU1VCU1RSQVRFX0RFRkFVTFRfSU5GTEFUSU9OX1BBUkFNUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNJbmZsYXRpb25Vbmlmb3JtRXJhUGF5b3V0ICh0b3RhbElzc3VhbmNlOiBCTiwgeWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnM6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHRvdGFsSXNzdWFuY2VJblRva2VucyA9IHRvdGFsSXNzdWFuY2UuZGl2KEJOX0JJTExJT04pLmRpdihCTl9USE9VU0FORCkudG9OdW1iZXIoKTtcblxuICByZXR1cm4gKHRvdGFsSXNzdWFuY2VJblRva2VucyA9PT0gMCA/IDAuMCA6IHllYXJseUluZmxhdGlvbkluVG9rZW5zIC8gdG90YWxJc3N1YW5jZUluVG9rZW5zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNJbmZsYXRpb25SZXdhcmRDdXJ2ZSAobWluSW5mbGF0aW9uOiBudW1iZXIsIHN0YWtlZEZyYWN0aW9uOiBudW1iZXIsIGlkZWFsU3Rha2U6IG51bWJlciwgaWRlYWxJbnRlcmVzdDogbnVtYmVyLCBmYWxsb2ZmOiBudW1iZXIpIHtcbiAgcmV0dXJuIChtaW5JbmZsYXRpb24gKyAoXG4gICAgc3Rha2VkRnJhY3Rpb24gPD0gaWRlYWxTdGFrZVxuICAgICAgPyAoc3Rha2VkRnJhY3Rpb24gKiAoaWRlYWxJbnRlcmVzdCAtIChtaW5JbmZsYXRpb24gLyBpZGVhbFN0YWtlKSkpXG4gICAgICA6ICgoKGlkZWFsSW50ZXJlc3QgKiBpZGVhbFN0YWtlKSAtIG1pbkluZmxhdGlvbikgKiBNYXRoLnBvdygyLCAoaWRlYWxTdGFrZSAtIHN0YWtlZEZyYWN0aW9uKSAvIGZhbGxvZmYpKVxuICApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUluZmxhdGlvbiAodG90YWxFcmFTdGFrZTogQk4sIHRvdGFsSXNzdWFuY2U6IEJOLCBudW1BdWN0aW9uczogbnVtYmVyLCBuZXR3b3JrS2V5OiBzdHJpbmcpIHtcbiAgY29uc3QgaW5mbGF0aW9uUGFyYW1zID0gZ2V0SW5mbGF0aW9uUGFyYW1zKG5ldHdvcmtLZXkpO1xuICBjb25zdCB7IGF1Y3Rpb25BZGp1c3QsIGF1Y3Rpb25NYXgsIGZhbGxvZmYsIG1heEluZmxhdGlvbiwgbWluSW5mbGF0aW9uLCBzdGFrZVRhcmdldCB9ID0gaW5mbGF0aW9uUGFyYW1zO1xuICBjb25zdCBpZGVhbFN0YWtlID0gc3Rha2VUYXJnZXQgLSAoTWF0aC5taW4oYXVjdGlvbk1heCwgbnVtQXVjdGlvbnMpICogYXVjdGlvbkFkanVzdCk7XG4gIGNvbnN0IGlkZWFsSW50ZXJlc3QgPSBtYXhJbmZsYXRpb24gLyBpZGVhbFN0YWtlO1xuICBjb25zdCBzdGFrZWRGcmFjdGlvbiA9IHRvdGFsRXJhU3Rha2UubXVsKEJOX01JTExJT04pLmRpdih0b3RhbElzc3VhbmNlKS50b051bWJlcigpIC8gQk5fTUlMTElPTi50b051bWJlcigpO1xuXG4gIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hbGVwaC5pbmNsdWRlcyhuZXR3b3JrS2V5KSkge1xuICAgIGlmIChpbmZsYXRpb25QYXJhbXMueWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnMpIHtcbiAgICAgIHJldHVybiAxMDAgKiBjYWxjSW5mbGF0aW9uVW5pZm9ybUVyYVBheW91dCh0b3RhbElzc3VhbmNlLCBpbmZsYXRpb25QYXJhbXMueWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMTAwICogY2FsY0luZmxhdGlvblJld2FyZEN1cnZlKG1pbkluZmxhdGlvbiwgc3Rha2VkRnJhY3Rpb24sIGlkZWFsU3Rha2UsIGlkZWFsSW50ZXJlc3QsIGZhbGxvZmYpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTAwICogKG1pbkluZmxhdGlvbiArIChcbiAgICAgIHN0YWtlZEZyYWN0aW9uIDw9IGlkZWFsU3Rha2VcbiAgICAgICAgPyAoc3Rha2VkRnJhY3Rpb24gKiAoaWRlYWxJbnRlcmVzdCAtIChtaW5JbmZsYXRpb24gLyBpZGVhbFN0YWtlKSkpXG4gICAgICAgIDogKCgoaWRlYWxJbnRlcmVzdCAqIGlkZWFsU3Rha2UpIC0gbWluSW5mbGF0aW9uKSAqIE1hdGgucG93KDIsIChpZGVhbFN0YWtlIC0gc3Rha2VkRnJhY3Rpb24pIC8gZmFsbG9mZikpXG4gICAgKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUNoYWluU3Rha2VkUmV0dXJuIChpbmZsYXRpb246IG51bWJlciwgdG90YWxFcmFTdGFrZTogQk4sIHRvdGFsSXNzdWFuY2U6IEJOLCBuZXR3b3JrS2V5OiBzdHJpbmcpIHtcbiAgY29uc3Qgc3Rha2VkRnJhY3Rpb24gPSB0b3RhbEVyYVN0YWtlLm11bChCTl9NSUxMSU9OKS5kaXYodG90YWxJc3N1YW5jZSkudG9OdW1iZXIoKSAvIEJOX01JTExJT04udG9OdW1iZXIoKTtcblxuICBsZXQgc3Rha2VkUmV0dXJuID0gaW5mbGF0aW9uIC8gc3Rha2VkRnJhY3Rpb247XG5cbiAgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFsZXBoLmluY2x1ZGVzKG5ldHdvcmtLZXkpKSB7XG4gICAgc3Rha2VkUmV0dXJuICo9IDAuOTsgLy8gMTAlIGdvZXMgdG8gdHJlYXN1cnlcbiAgfVxuXG4gIHJldHVybiBzdGFrZWRSZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBbGVwaFplcm9WYWxpZGF0b3JSZXR1cm4gKGNoYWluU3Rha2VkUmV0dXJuOiBudW1iZXIsIGNvbW1pc3Npb246IG51bWJlcikge1xuICByZXR1cm4gY2hhaW5TdGFrZWRSZXR1cm4gKiAoMTAwIC0gY29tbWlzc2lvbikgLyAxMDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVUZXJub2FWYWxpZGF0b3JSZXR1cm4gKHJld2FyZFBlclZhbGlkYXRvcjogbnVtYmVyLCB2YWxpZGF0b3JTdGFrZTogbnVtYmVyLCBjb21taXNzaW9uOiBudW1iZXIpIHtcbiAgY29uc3QgcGVyY2VudFJld2FyZEZvck5vbWluYXRvcnMgPSAoMTAwIC0gY29tbWlzc2lvbikgLyAxMDA7XG4gIGNvbnN0IHJld2FyZEZvck5vbWluYXRvcnMgPSByZXdhcmRQZXJWYWxpZGF0b3IgKiBwZXJjZW50UmV3YXJkRm9yTm9taW5hdG9ycztcblxuICBjb25zdCBzdGFrZVJhdGlvID0gcmV3YXJkRm9yTm9taW5hdG9ycyAvIHZhbGlkYXRvclN0YWtlO1xuXG4gIHJldHVybiBzdGFrZVJhdGlvICogMzY1ICogMTAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVmFsaWRhdG9yU3Rha2VkUmV0dXJuIChjaGFpblN0YWtlZFJldHVybjogbnVtYmVyLCB0b3RhbFZhbGlkYXRvclN0YWtlOiBCTiwgYXZnU3Rha2U6IEJOLCBjb21taXNzaW9uOiBudW1iZXIpIHtcbiAgY29uc3QgYm5BZGp1c3RlZCA9IGF2Z1N0YWtlLm11bChCTl9IVU5EUkVEKS5kaXYodG90YWxWYWxpZGF0b3JTdGFrZSk7XG4gIGNvbnN0IGFkanVzdGVkID0gYm5BZGp1c3RlZC50b051bWJlcigpICogY2hhaW5TdGFrZWRSZXR1cm47XG5cbiAgY29uc3Qgc3Rha2VkUmV0dXJuID0gKGFkanVzdGVkID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IGFkanVzdGVkKSAvIDEwMDtcblxuICByZXR1cm4gc3Rha2VkUmV0dXJuICogKDEwMCAtIGNvbW1pc3Npb24pIC8gMTAwOyAvLyBEZWR1Y3QgY29tbWlzc2lvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbWlzc2lvbiAoY29tbWlzc2lvblN0cmluZzogc3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KGNvbW1pc3Npb25TdHJpbmcuc3BsaXQoJyUnKVswXSk7IC8vIEV4YW1wbGU6IDEyJVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZmxhdGlvbkNvbmZpZyB7XG4gIGV4cGVjdDoge1xuICAgIG1pbjogc3RyaW5nLFxuICAgIGlkZWFsOiBzdHJpbmcsXG4gICAgbWF4OiBzdHJpbmdcbiAgfSxcbiAgYW5udWFsOiB7XG4gICAgbWluOiBzdHJpbmcsXG4gICAgaWRlYWw6IHN0cmluZyxcbiAgICBtYXg6IHN0cmluZ1xuICB9LFxuICByb3VuZDoge1xuICAgIG1pbjogc3RyaW5nLFxuICAgIGlkZWFsOiBzdHJpbmcsXG4gICAgbWF4OiBzdHJpbmdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYUN1cnJlbnRJbmZsYXRpb24gKHRvdGFsU3Rha2VkOiBudW1iZXIsIGluZmxhdGlvbkNvbmZpZzogSW5mbGF0aW9uQ29uZmlnKSB7IC8vIHJlYWQgbW9yZSBhdCBodHRwczovL2hhY2ttZC5pby9Ac2JBcU91WGtSdnlpWlBPQjNSeW42US9TeXByM1pKaDVcbiAgY29uc3QgZXhwZWN0TWluID0gcGFyc2VSYXdOdW1iZXIoaW5mbGF0aW9uQ29uZmlnLmV4cGVjdC5taW4pO1xuICBjb25zdCBleHBlY3RNYXggPSBwYXJzZVJhd051bWJlcihpbmZsYXRpb25Db25maWcuZXhwZWN0Lm1heCk7XG5cbiAgaWYgKHRvdGFsU3Rha2VkIDwgZXhwZWN0TWluKSB7XG4gICAgY29uc3QgaW5mbGF0aW9uU3RyaW5nID0gaW5mbGF0aW9uQ29uZmlnLmFubnVhbC5taW4uc3BsaXQoJyUnKVswXTtcblxuICAgIHJldHVybiBwYXJzZUZsb2F0KGluZmxhdGlvblN0cmluZyk7XG4gIH0gZWxzZSBpZiAodG90YWxTdGFrZWQgPiBleHBlY3RNYXgpIHtcbiAgICBjb25zdCBpbmZsYXRpb25TdHJpbmcgPSBpbmZsYXRpb25Db25maWcuYW5udWFsLm1heC5zcGxpdCgnJScpWzBdO1xuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoaW5mbGF0aW9uU3RyaW5nKTtcbiAgfVxuXG4gIGNvbnN0IGluZmxhdGlvblN0cmluZyA9IGluZmxhdGlvbkNvbmZpZy5hbm51YWwuaWRlYWwuc3BsaXQoJyUnKVswXTtcblxuICByZXR1cm4gcGFyc2VGbG9hdChpbmZsYXRpb25TdHJpbmcpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR1cmluZ09wdGltYWxDb21wb3VuZEZvcm1hdCB7XG4gIHBlcmlvZDogc3RyaW5nOyAvLyBpbiBkYXlzXG4gIGFweTogc3RyaW5nO1xufVxuXG4vLyB2YWxpZGF0aW9ucyBhbmQgY2hlY2sgY29uZGl0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2hvd05vbWluYXRpb25CeVZhbGlkYXRvciAoY2hhaW46IHN0cmluZyk6ICdzaG93QnlWYWx1ZScgfCAnc2hvd0J5VmFsaWRhdG9yJyB8ICdtaXhlZCcge1xuICBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYW1wbGl0dWRlLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiAnc2hvd0J5VmFsdWUnO1xuICB9IGVsc2UgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFzdGFyLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiAnbWl4ZWQnO1xuICB9IGVsc2UgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLnBhcmEuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuICdzaG93QnlWYWxpZGF0b3InO1xuICB9XG5cbiAgcmV0dXJuICdzaG93QnlWYWx1ZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb25kZWRWYWxpZGF0b3JzIChub21pbmF0aW9uczogTm9taW5hdGlvbkluZm9bXSkge1xuICBjb25zdCBib25kZWRWYWxpZGF0b3JzOiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgbm9taW5hdGlvbkNvdW50ID0gMDtcblxuICBmb3IgKGNvbnN0IG5vbWluYXRpb24gb2Ygbm9taW5hdGlvbnMpIHtcbiAgICBub21pbmF0aW9uQ291bnQgKz0gMTtcbiAgICBib25kZWRWYWxpZGF0b3JzLnB1c2gocmVmb3JtYXRBZGRyZXNzKG5vbWluYXRpb24udmFsaWRhdG9yQWRkcmVzcywgMCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBub21pbmF0aW9uQ291bnQsXG4gICAgYm9uZGVkVmFsaWRhdG9yc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbnN0YWtlQWxsIChzZWxlY3RlZFZhbGlkYXRvcjogc3RyaW5nLCBub21pbmF0aW9uczogTm9taW5hdGlvbkluZm9bXSwgdW5zdGFrZUFtb3VudDogc3RyaW5nKSB7XG4gIGxldCBpc1Vuc3Rha2VBbGwgPSBmYWxzZTtcblxuICBmb3IgKGNvbnN0IG5vbWluYXRpb24gb2Ygbm9taW5hdGlvbnMpIHtcbiAgICBjb25zdCBwYXJzZWRWYWxpZGF0b3JBZGRyZXNzID0gcmVmb3JtYXRBZGRyZXNzKG5vbWluYXRpb24udmFsaWRhdG9yQWRkcmVzcywgMCk7XG4gICAgY29uc3QgcGFyc2VkU2VsZWN0ZWRWYWxpZGF0b3IgPSByZWZvcm1hdEFkZHJlc3Moc2VsZWN0ZWRWYWxpZGF0b3IsIDApO1xuXG4gICAgaWYgKHBhcnNlZFZhbGlkYXRvckFkZHJlc3MgPT09IHBhcnNlZFNlbGVjdGVkVmFsaWRhdG9yKSB7XG4gICAgICBpZiAodW5zdGFrZUFtb3VudCA9PT0gbm9taW5hdGlvbi5hY3RpdmVTdGFrZSkge1xuICAgICAgICBpc1Vuc3Rha2VBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNVbnN0YWtlQWxsO1xufVxuXG5leHBvcnQgZW51bSBTdGFraW5nQWN0aW9uIHtcbiAgU1RBS0UgPSAnU1RBS0UnLFxuICBVTlNUQUtFID0gJ1VOU1RBS0UnLFxuICBXSVRIRFJBVyA9ICdXSVRIRFJBVycsXG4gIENMQUlNX1JFV0FSRCA9ICdDTEFJTV9SRVdBUkQnLFxuICBDQU5DRUxfVU5TVEFLRSA9ICdDQU5DRUxfVU5TVEFLRSdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YWtpbmdBdmFpbGFibGVBY3Rpb25zQnlDaGFpbiAoY2hhaW46IHN0cmluZywgdHlwZTogU3Rha2luZ1R5cGUpOiBTdGFraW5nQWN0aW9uW10ge1xuICBpZiAodHlwZSA9PT0gU3Rha2luZ1R5cGUuUE9PTEVEKSB7XG4gICAgcmV0dXJuIFtTdGFraW5nQWN0aW9uLlNUQUtFLCBTdGFraW5nQWN0aW9uLlVOU1RBS0UsIFN0YWtpbmdBY3Rpb24uV0lUSERSQVcsIFN0YWtpbmdBY3Rpb24uQ0xBSU1fUkVXQVJEXTtcbiAgfVxuXG4gIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5wYXJhLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiBbU3Rha2luZ0FjdGlvbi5TVEFLRSwgU3Rha2luZ0FjdGlvbi5VTlNUQUtFLCBTdGFraW5nQWN0aW9uLldJVEhEUkFXLCBTdGFraW5nQWN0aW9uLkNBTkNFTF9VTlNUQUtFXTtcbiAgfSBlbHNlIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hc3Rhci5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gW1N0YWtpbmdBY3Rpb24uU1RBS0UsIFN0YWtpbmdBY3Rpb24uVU5TVEFLRSwgU3Rha2luZ0FjdGlvbi5XSVRIRFJBVywgU3Rha2luZ0FjdGlvbi5DTEFJTV9SRVdBUkRdO1xuICB9IGVsc2UgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFtcGxpdHVkZS5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gW1N0YWtpbmdBY3Rpb24uU1RBS0UsIFN0YWtpbmdBY3Rpb24uVU5TVEFLRSwgU3Rha2luZ0FjdGlvbi5XSVRIRFJBV107XG4gIH1cblxuICByZXR1cm4gW1N0YWtpbmdBY3Rpb24uU1RBS0UsIFN0YWtpbmdBY3Rpb24uVU5TVEFLRSwgU3Rha2luZ0FjdGlvbi5XSVRIRFJBVywgU3Rha2luZ0FjdGlvbi5DQU5DRUxfVU5TVEFLRV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFraW5nQXZhaWxhYmxlQWN0aW9uc0J5Tm9taW5hdG9yIChub21pbmF0b3JNZXRhZGF0YTogTm9taW5hdG9yTWV0YWRhdGEsIHVuY2xhaW1lZFJld2FyZD86IHN0cmluZyk6IFN0YWtpbmdBY3Rpb25bXSB7XG4gIGNvbnN0IHJlc3VsdDogU3Rha2luZ0FjdGlvbltdID0gW1N0YWtpbmdBY3Rpb24uU1RBS0VdO1xuXG4gIGNvbnN0IGJuQWN0aXZlU3Rha2UgPSBuZXcgQk4obm9taW5hdG9yTWV0YWRhdGEuYWN0aXZlU3Rha2UpO1xuXG4gIGlmIChub21pbmF0b3JNZXRhZGF0YS5hY3RpdmVTdGFrZSAmJiBibkFjdGl2ZVN0YWtlLmd0KEJOX1pFUk8pKSB7XG4gICAgcmVzdWx0LnB1c2goU3Rha2luZ0FjdGlvbi5VTlNUQUtFKTtcblxuICAgIGNvbnN0IGlzQXN0YXJOZXR3b3JrID0gX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYXN0YXIuaW5jbHVkZXMobm9taW5hdG9yTWV0YWRhdGEuY2hhaW4pO1xuICAgIGNvbnN0IGlzQW1wbGl0dWRlTmV0d29yayA9IF9TVEFLSU5HX0NIQUlOX0dST1VQLmFtcGxpdHVkZS5pbmNsdWRlcyhub21pbmF0b3JNZXRhZGF0YS5jaGFpbik7XG4gICAgY29uc3QgYm5VbmNsYWltZWRSZXdhcmQgPSBuZXcgQk4odW5jbGFpbWVkUmV3YXJkIHx8ICcwJyk7XG5cbiAgICBpZiAoXG4gICAgICAoKG5vbWluYXRvck1ldGFkYXRhLnR5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCB8fCBpc0FtcGxpdHVkZU5ldHdvcmspICYmIGJuVW5jbGFpbWVkUmV3YXJkLmd0KEJOX1pFUk8pKSB8fFxuICAgICAgaXNBc3Rhck5ldHdvcmtcbiAgICApIHtcbiAgICAgIHJlc3VsdC5wdXNoKFN0YWtpbmdBY3Rpb24uQ0xBSU1fUkVXQVJEKTtcbiAgICB9XG4gIH1cblxuICBpZiAobm9taW5hdG9yTWV0YWRhdGEudW5zdGFraW5ncy5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0LnB1c2goU3Rha2luZ0FjdGlvbi5DQU5DRUxfVU5TVEFLRSk7XG4gICAgY29uc3QgaGFzQ2xhaW1hYmxlID0gbm9taW5hdG9yTWV0YWRhdGEudW5zdGFraW5ncy5zb21lKCh1bnN0YWtpbmcpID0+IHVuc3Rha2luZy5zdGF0dXMgPT09IFVuc3Rha2luZ1N0YXR1cy5DTEFJTUFCTEUpO1xuXG4gICAgaWYgKGhhc0NsYWltYWJsZSkge1xuICAgICAgcmVzdWx0LnB1c2goU3Rha2luZ0FjdGlvbi5XSVRIRFJBVyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWN0aW9uRnJvbVZhbGlkYXRvciAoc3Rha2luZ1R5cGU6IFN0YWtpbmdUeXBlLCBjaGFpbjogc3RyaW5nKSB7XG4gIGlmIChzdGFraW5nVHlwZSA9PT0gU3Rha2luZ1R5cGUuUE9PTEVEKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFzdGFyLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFtcGxpdHVkZS5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5wYXJhLmluY2x1ZGVzKGNoYWluKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2l0aGRyYXdhbEluZm8gKG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YSkge1xuICBjb25zdCB1bnN0YWtpbmdzID0gbm9taW5hdG9yTWV0YWRhdGEudW5zdGFraW5ncztcblxuICBsZXQgcmVzdWx0OiBVbnN0YWtpbmdJbmZvIHwgdW5kZWZpbmVkO1xuXG4gIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5hc3Rhci5pbmNsdWRlcyhub21pbmF0b3JNZXRhZGF0YS5jaGFpbikpIHtcbiAgICByZXR1cm4gZ2V0QXN0YXJXaXRoZHJhd2FibGUobm9taW5hdG9yTWV0YWRhdGEpO1xuICB9XG5cbiAgZm9yIChjb25zdCB1bnN0YWtpbmcgb2YgdW5zdGFraW5ncykge1xuICAgIGlmICh1bnN0YWtpbmcuc3RhdHVzID09PSBVbnN0YWtpbmdTdGF0dXMuQ0xBSU1BQkxFKSB7XG4gICAgICByZXN1bHQgPSB1bnN0YWtpbmc7IC8vIG9ubHkgZ2V0IHRoZSBmaXJzdCB3aXRoZHJhd2FsXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3Rha2luZ1N0YXR1c0J5Tm9taW5hdGlvbnMgKGJuVG90YWxBY3RpdmVTdGFrZTogQk4sIG5vbWluYXRpb25MaXN0OiBOb21pbmF0aW9uSW5mb1tdKTogU3Rha2luZ1N0YXR1cyB7XG4gIGxldCBzdGFraW5nU3RhdHVzOiBTdGFraW5nU3RhdHVzID0gU3Rha2luZ1N0YXR1cy5FQVJOSU5HX1JFV0FSRDtcblxuICBpZiAoYm5Ub3RhbEFjdGl2ZVN0YWtlLmlzWmVybygpKSB7XG4gICAgc3Rha2luZ1N0YXR1cyA9IFN0YWtpbmdTdGF0dXMuTk9UX0VBUk5JTkc7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGludmFsaWREZWxlZ2F0aW9uQ291bnQgPSAwO1xuXG4gICAgZm9yIChjb25zdCBub21pbmF0aW9uIG9mIG5vbWluYXRpb25MaXN0KSB7XG4gICAgICBpZiAobm9taW5hdGlvbi5zdGF0dXMgPT09IFN0YWtpbmdTdGF0dXMuTk9UX0VBUk5JTkcpIHtcbiAgICAgICAgaW52YWxpZERlbGVnYXRpb25Db3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbnZhbGlkRGVsZWdhdGlvbkNvdW50ID4gMCAmJiBpbnZhbGlkRGVsZWdhdGlvbkNvdW50IDwgbm9taW5hdGlvbkxpc3QubGVuZ3RoKSB7XG4gICAgICBzdGFraW5nU3RhdHVzID0gU3Rha2luZ1N0YXR1cy5QQVJUSUFMTFlfRUFSTklORztcbiAgICB9IGVsc2UgaWYgKGludmFsaWREZWxlZ2F0aW9uQ291bnQgPT09IG5vbWluYXRpb25MaXN0Lmxlbmd0aCkge1xuICAgICAgc3Rha2luZ1N0YXR1cyA9IFN0YWtpbmdTdGF0dXMuTk9UX0VBUk5JTkc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YWtpbmdTdGF0dXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZGF0b3JMYWJlbCAoY2hhaW46IHN0cmluZykge1xuICBpZiAoX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYXN0YXIuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgcmV0dXJuICdkQXBwJztcbiAgfSBlbHNlIGlmIChfU1RBS0lOR19DSEFJTl9HUk9VUC5yZWxheS5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICByZXR1cm4gJ1ZhbGlkYXRvcic7XG4gIH1cblxuICByZXR1cm4gJ0NvbGxhdG9yJztcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1pblN0YWtlRXJyb3JNZXNzYWdlID0gKGNoYWluSW5mbzogX0NoYWluSW5mbywgYm5NaW5TdGFrZTogQk4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0b2tlbkluZm8gPSBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyhjaGFpbkluZm8pO1xuICBjb25zdCBudW1iZXIgPSBmb3JtYXROdW1iZXIoYm5NaW5TdGFrZS50b1N0cmluZygpLCB0b2tlbkluZm8uZGVjaW1hbHMgfHwgMCwgYmFsYW5jZUZvcm1hdHRlcik7XG5cbiAgcmV0dXJuIHQoJ0luc3VmZmljaWVudCBzdGFrZS4gUGxlYXNlIHN0YWtlIGF0IGxlYXN0IHt7bnVtYmVyfX0ge3t0b2tlblN5bWJvbH19IHRvIGdldCByZXdhcmRzJywgeyByZXBsYWNlOiB7IHRva2VuU3ltYm9sOiB0b2tlbkluZm8uc3ltYm9sLCBudW1iZXIgfSB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNYXhWYWxpZGF0b3JFcnJvck1lc3NhZ2UgPSAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCBtYXg6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGxldCBtZXNzYWdlID0gZGV0ZWN0VHJhbnNsYXRlKCdZb3UgY2Fubm90IHNlbGVjdCBtb3JlIHRoYW4ge3tudW1iZXJ9fSB2YWxpZGF0b3JzIGZvciB0aGlzIG5ldHdvcmsnKTtcbiAgY29uc3QgbGFiZWwgPSBnZXRWYWxpZGF0b3JMYWJlbChjaGFpbkluZm8uc2x1Zyk7XG5cbiAgaWYgKG1heCA+IDEpIHtcbiAgICBzd2l0Y2ggKGxhYmVsKSB7XG4gICAgICBjYXNlICdkQXBwJzpcbiAgICAgICAgbWVzc2FnZSA9IGRldGVjdFRyYW5zbGF0ZSgnWW91IGNhbm5vdCBzZWxlY3QgbW9yZSB0aGFuIHt7bnVtYmVyfX0gZEFwcHMgZm9yIHRoaXMgbmV0d29yaycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NvbGxhdG9yJzpcbiAgICAgICAgbWVzc2FnZSA9IGRldGVjdFRyYW5zbGF0ZSgnWW91IGNhbm5vdCBzZWxlY3QgbW9yZSB0aGFuIHt7bnVtYmVyfX0gY29sbGF0b3JzIGZvciB0aGlzIG5ldHdvcmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdWYWxpZGF0b3InOlxuICAgICAgICBtZXNzYWdlID0gZGV0ZWN0VHJhbnNsYXRlKCdZb3UgY2Fubm90IHNlbGVjdCBtb3JlIHRoYW4ge3tudW1iZXJ9fSB2YWxpZGF0b3JzIGZvciB0aGlzIG5ldHdvcmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAobGFiZWwpIHtcbiAgICAgIGNhc2UgJ2RBcHAnOlxuICAgICAgICBtZXNzYWdlID0gZGV0ZWN0VHJhbnNsYXRlKCdZb3UgY2Fubm90IHNlbGVjdCBtb3JlIHRoYW4ge3tudW1iZXJ9fSBkQXBwIGZvciB0aGlzIG5ldHdvcmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDb2xsYXRvcic6XG4gICAgICAgIG1lc3NhZ2UgPSBkZXRlY3RUcmFuc2xhdGUoJ1lvdSBjYW5ub3Qgc2VsZWN0IG1vcmUgdGhhbiB7e251bWJlcn19IGNvbGxhdG9yIGZvciB0aGlzIG5ldHdvcmsnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdWYWxpZGF0b3InOlxuICAgICAgICBtZXNzYWdlID0gZGV0ZWN0VHJhbnNsYXRlKCdZb3UgY2Fubm90IHNlbGVjdCBtb3JlIHRoYW4ge3tudW1iZXJ9fSB2YWxpZGF0b3IgZm9yIHRoaXMgbmV0d29yaycpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdChtZXNzYWdlLCB7IHJlcGxhY2U6IHsgbnVtYmVyOiBtYXggfSB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFeGlzdFVuc3Rha2VFcnJvck1lc3NhZ2UgPSAoY2hhaW46IHN0cmluZywgaXNTdGFrZU1vcmU/OiBib29sZWFuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgbGFiZWwgPSBnZXRWYWxpZGF0b3JMYWJlbChjaGFpbik7XG5cbiAgaWYgKCFpc1N0YWtlTW9yZSkge1xuICAgIHN3aXRjaCAobGFiZWwpIHtcbiAgICAgIGNhc2UgJ2RBcHAnOlxuICAgICAgICByZXR1cm4gdCgnWW91IGNhbiB1bnN0YWtlIGZyb20gYSBkQXBwIG9uY2UnKTtcbiAgICAgIGNhc2UgJ0NvbGxhdG9yJzpcbiAgICAgICAgcmV0dXJuIHQoJ1lvdSBjYW4gdW5zdGFrZSBmcm9tIGEgY29sbGF0b3Igb25jZScpO1xuICAgICAgY2FzZSAnVmFsaWRhdG9yJzpcbiAgICAgICAgcmV0dXJuIHQoJ1lvdSBjYW4gdW5zdGFrZSBmcm9tIGEgdmFsaWRhdG9yIG9uY2UnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChsYWJlbCkge1xuICAgICAgY2FzZSAnZEFwcCc6XG4gICAgICAgIHJldHVybiB0KCdZb3UgY2Fubm90IHN0YWtlIG1vcmUgZm9yIGEgZEFwcCB5b3UgYXJlIHVuc3Rha2luZyBmcm9tJyk7XG4gICAgICBjYXNlICdDb2xsYXRvcic6XG4gICAgICAgIHJldHVybiB0KCdZb3UgY2Fubm90IHN0YWtlIG1vcmUgZm9yIGEgY29sbGF0b3IgeW91IGFyZSB1bnN0YWtpbmcgZnJvbScpO1xuICAgICAgY2FzZSAnVmFsaWRhdG9yJzpcbiAgICAgICAgcmV0dXJuIHQoJ1lvdSBjYW5ub3Qgc3Rha2UgbW9yZSBmb3IgYSB2YWxpZGF0b3IgeW91IGFyZSB1bnN0YWtpbmcgZnJvbScpO1xuICAgIH1cbiAgfVxufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgREVGQVVMVF9DSEFJTlMgfSBmcm9tICcuL2N1c3RvbS10b2tlbnMvZGVmYXVsdENoYWlucyc7XG5pbXBvcnQgeyBfU3Vic3RyYXRlQ2hhaW5UeXBlIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IFNpbmdsZU1vZGVKc29uLCBUaGVtZU5hbWVzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBBUElfQVVUT19DT05ORUNUX01TID0gMzAwMDtcbmV4cG9ydCBjb25zdCBBUElfQ09OTkVDVF9USU1FT1VUID0gMzAwMDA7XG5leHBvcnQgY29uc3QgQVBJX01BWF9SRVRSWSA9IDI7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBhbGVydChgRGVmYXVsdCBDaGFpbnM6ICR7REVGQVVMVF9DSEFJTlMuam9pbignLCAnKX1gKTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKGBEZWZhdWx0IENoYWluczogJHtERUZBVUxUX0NIQUlOUy5qb2luKCcsICcpfWApO1xufVxuXG5leHBvcnQgY29uc3QgX0FQSV9PUFRJT05TX0NIQUlOX0dST1VQID0ge1xuICBhY2FsYTogWydhY2FsYScsICdrYXJ1cmEnLCAnb3JpZ2ludHJhaWwnLCAna2ludHN1Z2knXSxcbiAgdHVyaW5nOiBbJ3R1cmluZ1N0YWdpbmcnLCAndHVyaW5nJ10sXG4gIGF2YWlsOiBbJ2thdGUnXVxufTtcblxuZXhwb3J0IGNvbnN0IF9QUkVERUZJTkVEX1NJTkdMRV9NT0RFUzogUmVjb3JkPHN0cmluZywgU2luZ2xlTW9kZUpzb24+ID0ge1xuICBzdWJzcGFjZToge1xuICAgIG5ldHdvcmtLZXlzOiBbJ3N1YnNwYWNlX2dlbWluaV8yYScsICdzdWJzcGFjZV90ZXN0JywgJ3N1YnNwYWNlX2dlbWluaV8zYSddLFxuICAgIHRoZW1lOiBUaGVtZU5hbWVzLlNVQlNQQUNFLFxuICAgIGF1dG9UcmlnZ2VyRG9tYWluOiAnc3Vic3BhY2UubmV0d29yaydcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9QVVJFX0VWTV9DSEFJTlMgPSBbJ2JpbmFuY2UnLCAnYmluYW5jZV90ZXN0JywgJ2V0aGVyZXVtJywgJ2V0aGVyZXVtX2dvZXJsaScsICdhc3RhckV2bScsICdzaGlkZW5Fdm0nLCAnc2hpYnV5YUV2bScsICdjcmFiRXZtJywgJ3BhbmdvbGluRXZtJywgJ2Nsb3ZlckV2bScsICdib2JhX3JpbmtlYnknLCAnYm9iYScsICdib2JhYmFzZScsICdib2JhYmVhbScsICd3YXRyX25ldHdvcmtfZXZtJ107XG5cbi8vIEdldCBiYWxhbmNlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgX0JBTEFOQ0VfQ0hBSU5fR1JPVVAgPSB7XG4gIGtpbnRzdWdpOiBbJ2tpbnRzdWdpJywgJ2ludGVybGF5JywgJ2tpbnRzdWdpX3Rlc3QnLCAnbWFuZ2F0YXhfcGFyYSddLFxuICBnZW5zaGlybzogWydnZW5zaGlyb190ZXN0bmV0JywgJ2dlbnNoaXJvJ10sXG4gIGVxdWlsaWJyaXVtX3BhcmFjaGFpbjogWydlcXVpbGlicml1bV9wYXJhY2hhaW4nXSxcbiAgYmlmcm9zdDogWydiaWZyb3N0JywgJ2FjYWxhJywgJ2thcnVyYScsICdhY2FsYV90ZXN0bmV0JywgJ3Bpb25lZXInLCAnYml0Y291bnRyeScsICdiaWZyb3N0X2RvdCcsICdoeWRyYWR4X21haW4nLCAncGVuZHVsdW0nLCAnYW1wbGl0dWRlJ10sXG4gIHN0YXRlbWluZTogWydzdGF0ZW1pbmUnLCAnYXN0YXInLCAnc2hpZGVuJywgJ3N0YXRlbWludCcsICdtb29uYmVhbScsICdtb29uYmFzZScsICdtb29ucml2ZXInLCAnY3JhYlBhcmFjaGFpbicsICdkYXJ3aW5pYTInLCAncGFyYWxsZWwnLCAnY2FsYW1hcmknXSxcbiAga3VzYW1hOiBbJ2t1c2FtYScsICdraW50c3VnaScsICdraW50c3VnaV90ZXN0JywgJ2ludGVybGF5JywgJ2FjYWxhJywgJ3N0YXRlbWludCcsICdrYXJ1cmEnLCAnYmlmcm9zdCddIC8vIHBlcmhhcHMgdGhlcmUgYXJlIHNvbWUgcnVudGltZSB1cGRhdGVzXG59O1xuXG5leHBvcnQgY29uc3QgX0JBTEFOQ0VfVE9LRU5fR1JPVVAgPSB7XG4gIGNyYWI6IFsnQ0tUT04nLCAnUEtUT04nXSxcbiAgYml0Y291bnRyeTogWydCSVQnXVxufTtcblxuZXhwb3J0IGNvbnN0IF9ORlRfQ0hBSU5fR1JPVVAgPSB7XG4gIGFjYWxhOiBbJ2FjYWxhJ10sXG4gIGthcnVyYTogWydrYXJ1cmEnXSwgLy8gVE9ETzoga2FydXJhIGFuZCBhY2FsYSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgcm1yazogWydrdXNhbWEnXSxcbiAgc3RhdGVtaW5lOiBbJ3N0YXRlbWluZSddLFxuICBzdGF0ZW1pbnQ6IFsnc3RhdGVtaW50J10sXG4gIHVuaXF1ZV9uZXR3b3JrOiBbJ3VuaXF1ZV9uZXR3b3JrJ10sXG4gIGJpdGNvdW50cnk6IFsnYml0Y291bnRyeScsICdwaW9uZWVyJ10sXG4gIHZhcmE6IFsndmFyYV9uZXR3b3JrJ11cbn07XG5cbi8vIFN0YWtpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgX1NUQUtJTkdfQ0hBSU5fR1JPVVAgPSB7XG4gIHJlbGF5OiBbJ3BvbGthZG90JywgJ2t1c2FtYScsICdhbGVwaCcsICdwb2xrYWRleCcsICd0ZXJub2EnLCAndGVybm9hX2FscGhhbmV0JywgJ2FsZXBoVGVzdCcsICdwb2xrYWRleFRlc3QnLCAnd2VzdGVuZCcsICdrYXRlJywgJ2VkZ2V3YXJlJywgJ2NyZWRpdGNvaW4nLCAndmFyYV9uZXR3b3JrJ10sXG4gIHBhcmE6IFsnbW9vbmJlYW0nLCAnbW9vbnJpdmVyJywgJ21vb25iYXNlJywgJ3R1cmluZycsICd0dXJpbmdTdGFnaW5nJywgJ2JpZnJvc3QnLCAnYmlmcm9zdF90ZXN0bmV0JywgJ2NhbGFtYXJpX3Rlc3QnLCAnY2FsYW1hcmknXSxcbiAgYXN0YXI6IFsnYXN0YXInLCAnc2hpZGVuJywgJ3NoaWJ1eWEnXSxcbiAgYW1wbGl0dWRlOiBbJ2FtcGxpdHVkZScsICdhbXBsaXR1ZGVfdGVzdCcsICdraWx0JywgJ2tpbHRfcGVyZWdyaW5lJywgJ3BlbmR1bHVtJ10sIC8vIGFtcGxpdHVkZSBhbmQga2lsdCBvbmx5IHNoYXJlIHNvbWUgY29tbW9uIGxvZ2ljXG4gIGtpbHQ6IFsna2lsdCcsICdraWx0X3BlcmVncmluZSddLFxuICBub21pbmF0aW9uUG9vbDogWydwb2xrYWRvdCcsICdrdXNhbWEnLCAnd2VzdGVuZCcsICdhbGVwaFRlc3QnLCAnYWxlcGgnLCAna2F0ZSddLFxuICBiaWZyb3N0OiBbJ2JpZnJvc3QnLCAnYmlmcm9zdF90ZXN0bmV0J10sXG4gIGFsZXBoOiBbJ2FsZXBoJywgJ2FsZXBoVGVzdCddLCAvLyBBMCBoYXMgZGlzdGluY3QgdG9rZW5vbWljc1xuICB0ZXJub2E6IFsndGVybm9hJywgJ3Rlcm5vYV9hbHBoYW5ldCddXG59O1xuXG5leHBvcnQgY29uc3QgX1NUQUtJTkdfRVJBX0xFTkdUSF9NQVA6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7IC8vIGluIGhvdXJzXG4gIGFsZXBoVGVzdDogMjQsXG4gIGFsZXBoOiAyNCxcbiAgcG9sa2Fkb3Q6IDI0LFxuICBrdXNhbWE6IDYsXG4gIHdlc3RlbmQ6IDYsXG4gIGh5ZHJhZHg6IDI0LFxuICBkZWZhdWx0OiAyNCxcbiAgbW9vbmJlYW06IDYsXG4gIG1vb25yaXZlcjogMixcbiAgbW9vbmJhc2U6IDIsXG4gIHR1cmluZzogMixcbiAgdHVyaW5nU3RhZ2luZzogMixcbiAgYXN0YXI6IDI0LFxuICBzaGlkZW46IDI0LFxuICBzaGlidXlhOiAyNCxcbiAgYmlmcm9zdF90ZXN0bmV0OiAwLjUsXG4gIGJpZnJvc3Q6IDIsXG4gIHRlcm5vYTogMjQsXG4gIGNhbGFtYXJpOiA2LFxuICBjYWxhbWFyaV90ZXN0OiA2LFxuICBhbXBsaXR1ZGU6IDIsXG4gIGFtcGxpdHVkZV90ZXN0OiAyLFxuICBwZW5kdWx1bTogMixcbiAga2lsdDogMixcbiAga2lsdF9wZXJlZ3JpbmU6IDIsXG4gIGVkZ2V3YXJlOiA2LFxuICBrYXRlOiA2LFxuICBjcmVkaXRjb2luOiAyNCxcbiAgdmFyYV9uZXR3b3JrOiAxMlxufTtcblxuZXhwb3J0IGNvbnN0IF9QQVJBQ0hBSU5fSU5GTEFUSU9OX0RJU1RSSUJVVElPTjogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgbnVtYmVyPj4gPSB7XG4gIG1vb25iZWFtOiB7IC8vIGh0dHBzOi8vZG9jcy5tb29uYmVhbS5uZXR3b3JrL2xlYXJuL2ZlYXR1cmVzL3N0YWtpbmcvI2FubnVhbC1pbmZsYXRpb25cbiAgICByZXdhcmQ6IDAuNSxcbiAgICBjb2xsYXRvckNvbW1pc3Npb246IDAuMixcbiAgICBib25kUmVzZXJ2ZTogMC4zXG4gIH0sXG4gIG1vb25yaXZlcjoge1xuICAgIHJld2FyZDogMC41LFxuICAgIGNvbGxhdG9yQ29tbWlzc2lvbjogMC4yLFxuICAgIGJvbmRSZXNlcnZlOiAwLjNcbiAgfSxcbiAgbW9vbmJhc2U6IHtcbiAgICByZXdhcmQ6IDAuNSxcbiAgICBjb2xsYXRvckNvbW1pc3Npb246IDAuMixcbiAgICBib25kUmVzZXJ2ZTogMC4zXG4gIH0sXG4gIHR1cmluZzogeyAvLyBodHRwczovL2RvY3Mub2FrLnRlY2gvZG9jcy9kZWxlZ2F0b3JzL1xuICAgIHJld2FyZDogMC41XG4gIH0sXG4gIHR1cmluZ1N0YWdpbmc6IHsgLy8gaHR0cHM6Ly9kb2NzLm9hay50ZWNoL2RvY3MvZGVsZWdhdG9ycy9cbiAgICByZXdhcmQ6IDAuNVxuICB9LFxuICBiaWZyb3N0OiB7XG4gICAgcmV3YXJkOiAwXG4gIH0sXG4gIGJpZnJvc3RfdGVzdG5ldDoge1xuICAgIHJld2FyZDogMFxuICB9LFxuICBjYWxhbWFyaV90ZXN0OiB7XG4gICAgcmV3YXJkOiAwLjlcbiAgfSxcbiAgY2FsYW1hcmk6IHtcbiAgICByZXdhcmQ6IDAuOVxuICB9LFxuICBkZWZhdWx0OiB7XG4gICAgcmV3YXJkOiAwXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZUluZmxhdGlvblBhcmFtcyB7XG4gIGF1Y3Rpb25BZGp1c3Q6IG51bWJlcjtcbiAgYXVjdGlvbk1heDogbnVtYmVyO1xuICBmYWxsb2ZmOiBudW1iZXI7XG4gIG1heEluZmxhdGlvbjogbnVtYmVyO1xuICBtaW5JbmZsYXRpb246IG51bWJlcjtcbiAgc3Rha2VUYXJnZXQ6IG51bWJlcjtcbiAgeWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZVVuaWZvcm1FcmFQYXlvdXRJbmZsYXRpb25QYXJhbXMgZXh0ZW5kcyBfU3Vic3RyYXRlSW5mbGF0aW9uUGFyYW1zIHtcbiAgeWVhcmx5SW5mbGF0aW9uSW5Ub2tlbnM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IF9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TOiBfU3Vic3RyYXRlSW5mbGF0aW9uUGFyYW1zID0ge1xuICBhdWN0aW9uQWRqdXN0OiAwLFxuICBhdWN0aW9uTWF4OiAwLFxuICAvLyA1JSBmb3IgZmFsbG9mZiwgYXMgcGVyIHRoZSBkZWZhdWx0cywgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXJpdHl0ZWNoL3BvbGthZG90L2Jsb2IvODE2Y2I2NGVhMTYxMDJjNmM3OWY2YmUyYTkxN2Q4MzJkOThkZjc1Ny9ydW50aW1lL2t1c2FtYS9zcmMvbGliLnJzI0w1MzRcbiAgZmFsbG9mZjogMC4wNSxcbiAgLy8gMTAlIG1heCwgMC4yNSUgbWluLCBzZWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bhcml0eXRlY2gvcG9sa2Fkb3QvYmxvYi84MTZjYjY0ZWExNjEwMmM2Yzc5ZjZiZTJhOTE3ZDgzMmQ5OGRmNzU3L3J1bnRpbWUva3VzYW1hL3NyYy9saWIucnMjTDUyM1xuICBtYXhJbmZsYXRpb246IDAuMSxcbiAgbWluSW5mbGF0aW9uOiAwLjAyNSxcbiAgc3Rha2VUYXJnZXQ6IDAuNVxufTtcblxuY29uc3QgX0FMRVBIX0RFRkFVTFRfVU5JRk9STV9FUkFfUEFZT1VUX1BBUkFNUzogX1N1YnN0cmF0ZVVuaWZvcm1FcmFQYXlvdXRJbmZsYXRpb25QYXJhbXMgPSB7XG4gIC4uLl9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TLFxuICB5ZWFybHlJbmZsYXRpb25JblRva2VuczogMzAwMDAwMDBcbn07XG5cbmV4cG9ydCBjb25zdCBfS05PV05fQ0hBSU5fSU5GTEFUSU9OX1BBUkFNUzogUmVjb3JkPHN0cmluZywgX1N1YnN0cmF0ZUluZmxhdGlvblBhcmFtcz4gPSB7XG4gIGFsZXBoOiBfQUxFUEhfREVGQVVMVF9VTklGT1JNX0VSQV9QQVlPVVRfUEFSQU1TLFxuICBhbGVwaFRlc3Q6IF9BTEVQSF9ERUZBVUxUX1VOSUZPUk1fRVJBX1BBWU9VVF9QQVJBTVMsXG4gIGRvY2tfcG9zOiB7IC4uLl9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TLCBzdGFrZVRhcmdldDogMC43NSB9LFxuICBrdXNhbWE6IHsgLi4uX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMsIGF1Y3Rpb25BZGp1c3Q6ICgwLjMgLyA2MCksIGF1Y3Rpb25NYXg6IDYwLCBzdGFrZVRhcmdldDogMC43NSB9LFxuICBuZWF0Y29pbjogeyAuLi5fU1VCU1RSQVRFX0RFRkFVTFRfSU5GTEFUSU9OX1BBUkFNUywgc3Rha2VUYXJnZXQ6IDAuNzUgfSxcbiAgbmZ0X21hcnQ6IHsgLi4uX1NVQlNUUkFURV9ERUZBVUxUX0lORkxBVElPTl9QQVJBTVMsIGZhbGxvZmY6IDAuMDQsIHN0YWtlVGFyZ2V0OiAwLjYwIH0sXG4gIHBvbGthZG90OiB7IC4uLl9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TLCBzdGFrZVRhcmdldDogMC43NSB9XG59O1xuXG4vLyBTZW5kIGZ1bmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IF9UUkFOU0ZFUl9OT1RfU1VQUE9SVEVEX0NIQUlOUyA9IFsnc3Vic3BhY2VfZ2VtaW5pXzNhJywgJ2t1bHVwdScsICdqb3lzdHJlYW0nLCAnZXF1aWxpYnJpdW1fcGFyYWNoYWluJywgJ2dlbnNoaXJvX3Rlc3RuZXQnLCAnZ2Vuc2hpcm8nXTtcblxuZXhwb3J0IGNvbnN0IF9UUkFOU0ZFUl9DSEFJTl9HUk9VUCA9IHtcbiAgYWNhbGE6IFsna2FydXJhJywgJ2FjYWxhJywgJ2FjYWxhX3Rlc3RuZXQnXSxcbiAga2ludHN1Z2k6IFsna2ludHN1Z2knLCAna2ludHN1Z2lfdGVzdCcsICdpbnRlcmxheScsICdoeWRyYWR4X21haW4nLCAnbWFuZ2F0YXhfcGFyYSddLFxuICBnZW5zaGlybzogWydnZW5zaGlyb190ZXN0bmV0JywgJ2dlbnNoaXJvJywgJ2VxdWlsaWJyaXVtX3BhcmFjaGFpbiddLFxuICBjcmFiOiBbJ2NyYWInLCAncGFuZ29saW4nXSxcbiAgYml0Y291bnRyeTogWydwaW9uZWVyJywgJ2JpdGNvdW50cnknLCAnYmlmcm9zdCcsICdiaWZyb3N0X2RvdCddLFxuICBzdGF0ZW1pbmU6IFsnc3RhdGVtaW50JywgJ3N0YXRlbWluZScsICdkYXJ3aW5pYTInLCAnYXN0YXInLCAnc2hpZGVuJywgJ3NoaWJ1eWEnLCAncGFyYWxsZWwnXSxcbiAgcmlvY2hhaW46IFsncmlvY2hhaW4nXSxcbiAgc29yYV9zdWJzdHJhdGU6IFsnc29yYV9zdWJzdHJhdGUnXSxcbiAgYXZhaWw6IFsna2F0ZSddLFxuICBwZW5kdWx1bTogWydwZW5kdWx1bScsICdhbXBsaXR1ZGUnLCAnYW1wbGl0dWRlX3Rlc3QnXVxufTtcblxuZXhwb3J0IGNvbnN0IF9CQUxBTkNFX1BBUlNJTkdfQ0hBSU5fR1JPVVAgPSB7XG4gIGJvYmFiZWFtOiBbJ2JvYmFiZWFtJywgJ2JvYmFiYXNlJ11cbn07XG5cbmV4cG9ydCBjb25zdCBfTUFOVEFfWktfQ0hBSU5fR1JPVVAgPSBbJ2NhbGFtYXJpJ107XG5cbmV4cG9ydCBjb25zdCBfWktfQVNTRVRfUFJFRklYID0gJ3prJztcblxuZXhwb3J0IGNvbnN0IF9ERUZBVUxUX01BTlRBX1pLX0NIQUlOID0gJ2NhbGFtYXJpJztcblxuLy8gWENNLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBfWENNX0NIQUlOX0dST1VQID0ge1xuICBwb2xrYWRvdFhjbTogWydhc3RhcicsICdzaGlkZW4nLCAnc3RhdGVtaW5lJywgJ3N0YXRlbWludCcsICdlcXVpbGlicml1bV9wYXJhY2hhaW4nXSxcbiAgeGNtUGFsbGV0OiBbJ3BvbGthZG90JywgJ2t1c2FtYSddXG4gIC8vIGRlZmF1bHQgaXMgeFRva2VucyBwYWxsZXRcbn07XG5cbmV4cG9ydCBjb25zdCBfWENNX1RZUEUgPSB7XG4gIFJQOiBgJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlJFTEFZQ0hBSU59LSR7X1N1YnN0cmF0ZUNoYWluVHlwZS5QQVJBQ0hBSU59YCwgLy8gRE1QXG4gIFBQOiBgJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlBBUkFDSEFJTn0tJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlBBUkFDSEFJTn1gLCAvLyBIUk1QXG4gIFBSOiBgJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlBBUkFDSEFJTn0tJHtfU3Vic3RyYXRlQ2hhaW5UeXBlLlJFTEFZQ0hBSU59YCAvLyBVTVBcbn07XG5cbmV4cG9ydCBjb25zdCBfREVGQVVMVF9BQ1RJVkVfQ0hBSU5TID0gW1xuICAuLi5ERUZBVUxUX0NIQUlOUyxcbiAgJ3ZhcmFfbmV0d29yaydcbl07XG5cbmV4cG9ydCBjb25zdCBFVk1fUEFTU19DT05ORUNUX1NUQVRVUyA9IHtcbiAgYWNhbGE6IFsnYWNhbGFfZXZtJywgJ2thcnVyYV9ldm0nXVxufTtcblxuZXhwb3J0IGNvbnN0IEVWTV9SRUZPUk1BVF9ERUNJTUFMUyA9IHtcbiAgYWNhbGE6IFsnYWNhbGFfZXZtJywgJ2thcnVyYV9ldm0nXVxufTtcblxuLy8gVE9ETzogcmV2aWV3XG5jb25zdCBUQVJHRVRfQlJBTkNIID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdrb25pLWRldicgOiAnbWFzdGVyJztcblxuZXhwb3J0IGNvbnN0IF9DSEFJTl9JTkZPX1NSQyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vS29uaXZlcnNlL1N1YldhbGxldC1DaGFpbi8ke1RBUkdFVF9CUkFOQ0h9L3BhY2thZ2VzL2NoYWluLWxpc3Qvc3JjL2RhdGEvQ2hhaW5JbmZvLmpzb25gO1xuZXhwb3J0IGNvbnN0IF9DSEFJTl9BU1NFVF9TUkMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtQ2hhaW4vJHtUQVJHRVRfQlJBTkNIfS9wYWNrYWdlcy9jaGFpbi1saXN0L3NyYy9kYXRhL0NoYWluQXNzZXQuanNvbmA7XG5leHBvcnQgY29uc3QgX0FTU0VUX1JFRl9TUkMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtQ2hhaW4vJHtUQVJHRVRfQlJBTkNIfS9wYWNrYWdlcy9jaGFpbi1saXN0L3NyYy9kYXRhL0Fzc2V0UmVmLmpzb25gO1xuZXhwb3J0IGNvbnN0IF9NVUxUSV9DSEFJTl9BU1NFVF9TUkMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtQ2hhaW4vJHtUQVJHRVRfQlJBTkNIfS9wYWNrYWdlcy9jaGFpbi1saXN0L3NyYy9kYXRhL011bHRpQ2hhaW5Bc3NldC5qc29uYDtcbmV4cG9ydCBjb25zdCBfQ0hBSU5fTE9HT19NQVBfU1JDID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Lb25pdmVyc2UvU3ViV2FsbGV0LUNoYWluLyR7VEFSR0VUX0JSQU5DSH0vcGFja2FnZXMvY2hhaW4tbGlzdC9zcmMvZGF0YS9DaGFpbkxvZ29NYXAuanNvbmA7XG5leHBvcnQgY29uc3QgX0FTU0VUX0xPR09fTUFQX1NSQyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vS29uaXZlcnNlL1N1YldhbGxldC1DaGFpbi8ke1RBUkdFVF9CUkFOQ0h9L3BhY2thZ2VzL2NoYWluLWxpc3Qvc3JjL2RhdGEvQXNzZXRMb2dvTWFwLmpzb25gO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaGVhZGVyL2hlYWRlciAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9DSEFJTlMgPSBbJ2FpZ2VudCddO1xyXG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgTWV0YWRhdGFJdGVtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBfQ2hhaW5Db25uZWN0aW9uU3RhdHVzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3R5cGVzJztcblxuaW1wb3J0IHsgQXBpUHJvbWlzZSB9IGZyb20gJ0Bwb2xrYWRvdC9hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIF9Fdm1DaGFpblNwZWMge1xuICBldm1DaGFpbklkOiBudW1iZXIsXG4gIG5hbWU6IHN0cmluZyxcbiAgc3ltYm9sOiBzdHJpbmcsXG4gIGRlY2ltYWxzOiBudW1iZXIsXG4gIGV4aXN0ZW50aWFsRGVwb3NpdDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZUNoYWluU3BlYyB7XG4gIG5hbWU6IHN0cmluZyxcbiAgYWRkcmVzc1ByZWZpeDogbnVtYmVyLFxuICBnZW5lc2lzSGFzaDogc3RyaW5nLFxuICBzeW1ib2w6IHN0cmluZyxcbiAgZGVjaW1hbHM6IG51bWJlcixcbiAgZXhpc3RlbnRpYWxEZXBvc2l0OiBzdHJpbmcsXG4gIHBhcmFJZDogbnVtYmVyIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9BcGlPcHRpb25zIHtcbiAgcHJvdmlkZXJOYW1lPzogc3RyaW5nLFxuICBtZXRhZGF0YT86IE1ldGFkYXRhSXRlbSxcbiAgb25VcGRhdGVTdGF0dXM/OiAoc3RhdHVzOiBfQ2hhaW5Db25uZWN0aW9uU3RhdHVzKSA9PiB2b2lkLFxuICBleHRlcm5hbEFwaVByb21pc2U/OiBBcGlQcm9taXNlXG59XG5cbmV4cG9ydCBlbnVtIF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SIHtcbiAgSU5WQUxJRF9JTkZPX1RZUEUgPSAnaW52YWxpZEluZm9UeXBlJyxcbiAgSU5KRUNUX1NDUklQVF9ERVRFQ1RFRCA9ICdpbmplY3RTY3JpcHREZXRlY3RlZCcsXG4gIEVYSVNURURfQ0hBSU4gPSAnZXhpc3RlZENoYWluJyxcbiAgRVhJU1RFRF9QUk9WSURFUiA9ICdleGlzdGVkUHJvdmlkZXInLFxuICBJTlZBTElEX1BST1ZJREVSID0gJ2ludmFsaWRQcm92aWRlcicsXG4gIE5PTkUgPSAnbm9uZScsXG4gIENPTk5FQ1RJT05fRkFJTFVSRSA9ICdjb25uZWN0aW9uRmFpbHVyZScsXG4gIFBST1ZJREVSX05PVF9TQU1FX0NIQUlOID0gJ3Byb3ZpZGVyTm90U2FtZUNoYWluJ1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vKiBlc2xpbnQgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWludGVyZmFjZTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBfQXNzZXRSZWYsIF9Bc3NldFR5cGUsIF9DaGFpbkFzc2V0LCBfQ2hhaW5JbmZvLCBfQ3Jvd2Rsb2FuRnVuZCB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS9oYW5kbGVyL3R5cGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbmltcG9ydCB7IEFwaVByb21pc2UgfSBmcm9tICdAcG9sa2Fkb3QvYXBpJztcbmltcG9ydCB7IFN1Ym1pdHRhYmxlRXh0cmluc2ljRnVuY3Rpb24gfSBmcm9tICdAcG9sa2Fkb3QvYXBpL3Byb21pc2UvdHlwZXMnO1xuaW1wb3J0IHsgQ2hhaW5Qcm9wZXJ0aWVzLCBDaGFpblR5cGUgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgX0RhdGFNYXAge1xuICBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+LFxuICBjaGFpblN0YXRlTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5TdGF0ZT4sXG4gIGFzc2V0UmVnaXN0cnk6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkFzc2V0PixcbiAgYXNzZXRSZWZNYXA6IFJlY29yZDxzdHJpbmcsIF9Bc3NldFJlZj5cbn1cblxuZXhwb3J0IGVudW0gX0NoYWluQ29ubmVjdGlvblN0YXR1cyB7XG4gIENPTk5FQ1RFRCA9ICdDT05ORUNURUQnLFxuICBESVNDT05ORUNURUQgPSAnRElTQ09OTkVDVEVEJyxcbiAgVU5TVEFCTEUgPSAnVU5TVEFCTEUnLFxuICBDT05ORUNUSU5HID0gJ0NPTk5FQ1RJTkcnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9DaGFpblN0YXRlIHtcbiAgc2x1Zzogc3RyaW5nLFxuICBhY3RpdmU6IGJvb2xlYW4sXG4gIGN1cnJlbnRQcm92aWRlcjogc3RyaW5nLFxuICBjb25uZWN0aW9uU3RhdHVzOiBfQ2hhaW5Db25uZWN0aW9uU3RhdHVzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZURlZmF1bHRGb3JtYXRCYWxhbmNlIHtcbiAgZGVjaW1hbHM/OiBudW1iZXJbXSB8IG51bWJlcjtcbiAgdW5pdD86IHN0cmluZ1tdIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9DaGFpbkJhc2VBcGkge1xuICBjaGFpblNsdWc6IHN0cmluZztcbiAgYXBpVXJsOiBzdHJpbmc7XG4gIHByb3ZpZGVyTmFtZT86IHN0cmluZztcblxuICBhcGlFcnJvcj86IHN0cmluZztcbiAgYXBpUmV0cnk/OiBudW1iZXI7XG4gIGlzQXBpUmVhZHk6IGJvb2xlYW47XG4gIGlzQXBpQ29ubmVjdGVkU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuICBpc0FwaVJlYWR5T25jZTogYm9vbGVhbjtcbiAgaXNBcGlDb25uZWN0ZWQ6IGJvb2xlYW47IC8vIG1pZ2h0IGJlIHJlZHVuZGFudFxuICBjb25uZWN0aW9uU3RhdHVzOiBfQ2hhaW5Db25uZWN0aW9uU3RhdHVzOyAvLyBtaWdodCBiZSByZWR1bmRhbnRcbiAgdXBkYXRlQXBpVXJsOiAoYXBpVXJsOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIGNvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIGRpc2Nvbm5lY3Q6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIHJlY292ZXJDb25uZWN0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBkZXN0cm95OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4gIGlzUmVhZHk6IFByb21pc2U8X0NoYWluQmFzZUFwaT47IC8vIHRvIGJlIG92ZXJ3cml0dGVuIGJ5IGNoaWxkIGludGVyZmFjZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9TdWJzdHJhdGVDaGFpbk1ldGFkYXRhIHtcbiAgcHJvcGVydGllczogQ2hhaW5Qcm9wZXJ0aWVzO1xuICBzeXN0ZW1DaGFpbjogc3RyaW5nO1xuICBzeXN0ZW1DaGFpblR5cGU6IENoYWluVHlwZTtcbiAgc3lzdGVtTmFtZTogc3RyaW5nO1xuICBzeXN0ZW1WZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1N1YnN0cmF0ZUFwaVN0YXRlIHtcbiAgYXBpRGVmYXVsdFR4PzogU3VibWl0dGFibGVFeHRyaW5zaWNGdW5jdGlvbjtcbiAgYXBpRGVmYXVsdFR4U3Vkbz86IFN1Ym1pdHRhYmxlRXh0cmluc2ljRnVuY3Rpb247XG4gIGRlZmF1bHRGb3JtYXRCYWxhbmNlPzogX1N1YnN0cmF0ZURlZmF1bHRGb3JtYXRCYWxhbmNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIF9TdWJzdHJhdGVBcGkgZXh0ZW5kcyBfU3Vic3RyYXRlQXBpU3RhdGUsIF9DaGFpbkJhc2VBcGkge1xuICBhcGk6IEFwaVByb21pc2U7XG4gIGlzUmVhZHk6IFByb21pc2U8X1N1YnN0cmF0ZUFwaT47XG5cbiAgc3BlY05hbWU6IHN0cmluZztcbiAgc3BlY1ZlcnNpb246IHN0cmluZztcbiAgc3lzdGVtQ2hhaW46IHN0cmluZztcbiAgc3lzdGVtTmFtZTogc3RyaW5nO1xuICBzeXN0ZW1WZXJzaW9uOiBzdHJpbmc7XG4gIHJlZ2lzdHJ5OiBSZWdpc3RyeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBfRXZtQXBpIGV4dGVuZHMgX0NoYWluQmFzZUFwaSB7XG4gIGFwaTogV2ViMztcblxuICBpc1JlYWR5OiBQcm9taXNlPF9Fdm1BcGk+O1xufVxuXG5leHBvcnQgdHlwZSBfTmV0d29ya1Vwc2VydFBhcmFtcyA9IHtcbiAgbW9kZTogJ3VwZGF0ZScgfCAnaW5zZXJ0JyxcbiAgY2hhaW5FZGl0SW5mbzoge1xuICAgIGNoYWluVHlwZT86IHN0cmluZyxcbiAgICBjdXJyZW50UHJvdmlkZXI6IHN0cmluZyxcbiAgICBuYW1lPzogc3RyaW5nLFxuICAgIHByb3ZpZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICBzbHVnOiBzdHJpbmcsXG4gICAgc3ltYm9sPzogc3RyaW5nLFxuICAgIGJsb2NrRXhwbG9yZXI/OiBzdHJpbmcsXG4gICAgY3Jvd2Rsb2FuVXJsPzogc3RyaW5nLFxuICAgIHByaWNlSWQ/OiBzdHJpbmdcbiAgfSxcbiAgY2hhaW5TcGVjPzoge1xuICAgIC8vIFN1YnN0cmF0ZVxuICAgIGdlbmVzaXNIYXNoOiBzdHJpbmcsXG4gICAgcGFyYUlkOiBudW1iZXIgfCBudWxsLFxuICAgIGFkZHJlc3NQcmVmaXg6IG51bWJlcixcbiAgICBjcm93ZGxvYW5GdW5kcz86IF9Dcm93ZGxvYW5GdW5kW10gfCBudWxsLFxuICAgIGNyb3dkbG9hblBhcmFJZD86IG51bWJlciB8IG51bGwsXG5cbiAgICAvLyBFVk1cbiAgICBldm1DaGFpbklkOiBudW1iZXIgfCBudWxsLFxuXG4gICAgLy8gQ29tbW9uXG4gICAgZXhpc3RlbnRpYWxEZXBvc2l0OiBzdHJpbmcsXG4gICAgZGVjaW1hbHM6IG51bWJlclxuICB9LFxuICB1bmNvbmZpcm1lZD86IGJvb2xlYW47XG4gIHByb3ZpZGVyRXJyb3I/OiBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUjtcbn1cblxuZXhwb3J0IGNvbnN0IF9DVVNUT01fUFJFRklYID0gJ2N1c3RvbS0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuYWJsZUNoYWluUGFyYW1zIHtcbiAgY2hhaW5TbHVnOiBzdHJpbmcsXG4gIGVuYWJsZVRva2Vucz86IGJvb2xlYW5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRW5hYmxlTXVsdGlDaGFpblBhcmFtcyB7XG4gIGNoYWluU2x1Z3M6IHN0cmluZ1tdLFxuICBlbmFibGVUb2tlbnM/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1ZhbGlkYXRlQ3VzdG9tQXNzZXRSZXF1ZXN0IHtcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmcsXG4gIG9yaWdpbkNoYWluOiBzdHJpbmcsXG4gIHR5cGU6IF9Bc3NldFR5cGUsXG4gIGNvbnRyYWN0Q2FsbGVyPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1NtYXJ0Q29udHJhY3RUb2tlbkluZm8ge1xuICBuYW1lOiBzdHJpbmcsXG4gIHN5bWJvbDogc3RyaW5nLFxuICBkZWNpbWFsczogbnVtYmVyLFxuICBjb250cmFjdEVycm9yOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgX1ZhbGlkYXRlQ3VzdG9tQXNzZXRSZXNwb25zZSBleHRlbmRzIF9TbWFydENvbnRyYWN0VG9rZW5JbmZvIHtcbiAgaXNFeGlzdDogYm9vbGVhbixcbiAgZXhpc3RlZFNsdWc/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IF9GVU5HSUJMRV9DT05UUkFDVF9TVEFOREFSRFMgPSBbXG4gIF9Bc3NldFR5cGUuRVJDMjAsXG4gIF9Bc3NldFR5cGUuUFNQMjJcbl07XG5cbmV4cG9ydCBjb25zdCBfTkZUX0NPTlRSQUNUX1NUQU5EQVJEUyA9IFtcbiAgX0Fzc2V0VHlwZS5QU1AzNCxcbiAgX0Fzc2V0VHlwZS5FUkM3MjFcbl07XG5cbmV4cG9ydCBjb25zdCBfU01BUlRfQ09OVFJBQ1RfU1RBTkRBUkRTID0gWy4uLl9GVU5HSUJMRV9DT05UUkFDVF9TVEFOREFSRFMsIC4uLl9ORlRfQ09OVFJBQ1RfU1RBTkRBUkRTXTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0Fzc2V0UmVmLCBfQXNzZXRSZWZQYXRoLCBfQXNzZXRUeXBlLCBfQ2hhaW5Bc3NldCwgX0NoYWluSW5mbywgX011bHRpQ2hhaW5Bc3NldCwgX1N1YnN0cmF0ZUNoYWluVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBCYXNpY1Rva2VuSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgX01BTlRBX1pLX0NIQUlOX0dST1VQLCBfWktfQVNTRVRfUFJFRklYIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBfQ2hhaW5TdGF0ZSwgX0NVU1RPTV9QUkVGSVgsIF9TTUFSVF9DT05UUkFDVF9TVEFOREFSRFMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdHlwZXMnO1xuXG5pbXBvcnQgeyBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDdXN0b21DaGFpbiAoc2x1Zzogc3RyaW5nKSB7XG4gIGlmIChzbHVnLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHNsdWcuc3RhcnRzV2l0aChfQ1VTVE9NX1BSRUZJWCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDdXN0b21Bc3NldCAoc2x1Zzogc3RyaW5nKSB7IC8vIG1pZ2h0IGJlIGRpZmZlcmVudCBmcm9tIF9pc0N1c3RvbU5ldHdvcmtcbiAgaWYgKHNsdWcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gc2x1Zy5zdGFydHNXaXRoKF9DVVNUT01fUFJFRklYKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRDdXN0b21Bc3NldHMgKGFzc2V0UmVnaXN0cnk6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkFzc2V0Pik6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkFzc2V0PiB7XG4gIGNvbnN0IGZpbHRlcmVkQXNzZXRNYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkFzc2V0PiA9IHt9O1xuXG4gIE9iamVjdC52YWx1ZXMoYXNzZXRSZWdpc3RyeSkuZm9yRWFjaCgoY2hhaW5Bc3NldCkgPT4ge1xuICAgIGlmIChfaXNDdXN0b21Bc3NldChjaGFpbkFzc2V0LnNsdWcpKSB7XG4gICAgICBmaWx0ZXJlZEFzc2V0TWFwW2NoYWluQXNzZXQuc2x1Z10gPSBjaGFpbkFzc2V0O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXNzZXRNYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNFcXVhbENvbnRyYWN0QWRkcmVzcyAoYWRkcmVzczE6IHN0cmluZywgYWRkcmVzczI6IHN0cmluZykge1xuICBpZiAoaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzczEpICYmIGlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MyKSkge1xuICAgIHJldHVybiBhZGRyZXNzMS50b0xvd2VyQ2FzZSgpID09PSBhZGRyZXNzMi50b0xvd2VyQ2FzZSgpOyAvLyBFVk0gYWRkcmVzcyBpcyBjYXNlLWluc2Vuc2l0aXZlXG4gIH1cblxuICByZXR1cm4gYWRkcmVzczIgPT09IGFkZHJlc3MxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzRXF1YWxTbWFydENvbnRyYWN0QXNzZXQgKGFzc2V0MTogX0NoYWluQXNzZXQsIGFzc2V0MjogX0NoYWluQXNzZXQpIHtcbiAgY29uc3QgY29udHJhY3QxID0gYXNzZXQxLm1ldGFkYXRhPy5jb250cmFjdEFkZHJlc3MgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCB8fCBudWxsO1xuICBjb25zdCBjb250cmFjdDIgPSBhc3NldDIubWV0YWRhdGE/LmNvbnRyYWN0QWRkcmVzcyBhcyBzdHJpbmcgfHwgdW5kZWZpbmVkIHx8IG51bGw7XG5cbiAgaWYgKCFjb250cmFjdDEgfHwgIWNvbnRyYWN0Mikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChfaXNFcXVhbENvbnRyYWN0QWRkcmVzcyhjb250cmFjdDEsIGNvbnRyYWN0MikgJiYgYXNzZXQxLmFzc2V0VHlwZSA9PT0gYXNzZXQyLmFzc2V0VHlwZSAmJiBhc3NldDEub3JpZ2luQ2hhaW4gPT09IGFzc2V0Mi5vcmlnaW5DaGFpbikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzUHVyZUV2bUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIChjaGFpbkluZm8uZXZtSW5mbyAhPT0gbnVsbCAmJiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbyA9PT0gbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNQdXJlU3Vic3RyYXRlQ2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gKGNoYWluSW5mby5ldm1JbmZvID09PSBudWxsICYmIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvICE9PSBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRPcmlnaW5DaGFpbk9mQXNzZXQgKGFzc2V0U2x1Zzogc3RyaW5nKSB7XG4gIGlmIChhc3NldFNsdWcuc3RhcnRzV2l0aChfQ1VTVE9NX1BSRUZJWCkpIHtcbiAgICBjb25zdCBhcnIgPSBhc3NldFNsdWcuc3BsaXQoJy0nKS5zbGljZSgxKTtcblxuICAgIGlmIChhcnJbMF0gPT09ICdjdXN0b20nKSB7XG4gICAgICBjb25zdCBlbmQgPSBhcnIuZmluZEluZGV4KChzdHIpID0+IE9iamVjdC52YWx1ZXMoX0Fzc2V0VHlwZSkuaW5jbHVkZXMoc3RyIGFzIF9Bc3NldFR5cGUpKTtcblxuICAgICAgcmV0dXJuIGFyci5zbGljZSgwLCBlbmQpLmpvaW4oJy0nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyWzBdO1xuICB9XG5cbiAgcmV0dXJuIGFzc2V0U2x1Zy5zcGxpdCgnLScpWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldENvbnRyYWN0QWRkcmVzc09mVG9rZW4gKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIHRva2VuSW5mby5tZXRhZGF0YT8uY29udHJhY3RBZGRyZXNzIGFzIHN0cmluZyB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1Rva2VuVHJhbnNmZXJyZWRCeUV2bSAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gISF0b2tlbkluZm8ubWV0YWRhdGE/LmNvbnRyYWN0QWRkcmVzcyB8fCBfaXNOYXRpdmVUb2tlbih0b2tlbkluZm8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2NoZWNrU21hcnRDb250cmFjdFN1cHBvcnRCeUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8sIGNvbnRyYWN0VHlwZTogX0Fzc2V0VHlwZSkge1xuICAvLyBFVk0gY2hhaW5zIHN1cHBvcnQgc21hcnQgY29udHJhY3QgYnkgZGVmYXVsdCBzbyBqdXN0IGNoZWNraW5nIFN1YnN0cmF0ZSBjaGFpbnNcbiAgaWYgKGNoYWluSW5mby5zdWJzdHJhdGVJbmZvID09PSBudWxsIHx8IChjaGFpbkluZm8uc3Vic3RyYXRlSW5mbyAmJiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5zdXBwb3J0U21hcnRDb250cmFjdCA9PT0gbnVsbCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0ICE9PSBudWxsICYmIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0LmluY2x1ZGVzKGNvbnRyYWN0VHlwZSkpO1xufVxuXG4vLyBVdGlscyBmb3IgYmFsYW5jZSBmdW5jdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VG9rZW5PbkNoYWluQXNzZXRJZCAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCk6IHN0cmluZyB7XG4gIHJldHVybiB0b2tlbkluZm8ubWV0YWRhdGE/LmFzc2V0SWQgYXMgc3RyaW5nIHx8ICctMSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VG9rZW5PbkNoYWluSW5mbyAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICByZXR1cm4gdG9rZW5JbmZvLm1ldGFkYXRhPy5vbkNoYWluSW5mbyBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFRva2VuTWluQW1vdW50ICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiB0b2tlbkluZm8ubWluQW1vdW50IHx8ICcwJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0NoYWluRXZtQ29tcGF0aWJsZSAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uZXZtSW5mbyAhPT0gdW5kZWZpbmVkICYmIGNoYWluSW5mby5ldm1JbmZvICE9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzTmF0aXZlVG9rZW4gKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIHRva2VuSW5mby5hc3NldFR5cGUgPT09IF9Bc3NldFR5cGUuTkFUSVZFO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzTmF0aXZlVG9rZW5CeVNsdWcgKHRva2VuU2x1Zzogc3RyaW5nKSB7XG4gIHJldHVybiB0b2tlblNsdWcuaW5jbHVkZXMoX0Fzc2V0VHlwZS5OQVRJVkUgYXMgc3RyaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1NtYXJ0Q29udHJhY3RUb2tlbiAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gX1NNQVJUX0NPTlRSQUNUX1NUQU5EQVJEUy5pbmNsdWRlcyh0b2tlbkluZm8uYXNzZXRUeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1N1YnN0cmF0ZUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuICEhY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm87IC8vIGZhbGxiYWNrIHRvIEV0aGVyZXVtXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0RXZtQ2hhaW5JZCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uZXZtSW5mbz8uZXZtQ2hhaW5JZCB8fCAxOyAvLyBmYWxsYmFjayB0byBFdGhlcmV1bVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFN1YnN0cmF0ZVBhcmFJZCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8ucGFyYUlkIHx8IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFN1YnN0cmF0ZVJlbGF5UGFyZW50IChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5yZWxheVNsdWcgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0U3Vic3RyYXRlR2VuZXNpc0hhc2ggKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LmdlbmVzaXNIYXNoIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ2hhaW5TdXBwb3J0U3Vic3RyYXRlU3Rha2luZyAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8uc3VwcG9ydFN0YWtpbmcgfHwgZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDaGFpbkVuYWJsZWQgKGNoYWluU3RhdGU6IF9DaGFpblN0YXRlKSB7XG4gIHJldHVybiBjaGFpblN0YXRlLmFjdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRDaGFpblN1YnN0cmF0ZUFkZHJlc3NQcmVmaXggKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvPy5zdWJzdHJhdGVJbmZvPy5hZGRyZXNzUHJlZml4ID8/IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQ2hhaW5TdXBwb3J0TmF0aXZlTmZ0IChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5oYXNOYXRpdmVOZnQgfHwgZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDaGFpblN1cHBvcnRFdm1OZnQgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLmV2bUluZm8/LnN1cHBvcnRTbWFydENvbnRyYWN0Py5pbmNsdWRlcyhfQXNzZXRUeXBlLkVSQzcyMSkgfHwgZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDaGFpblN1cHBvcnRXYXNtTmZ0IChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5zdXBwb3J0U21hcnRDb250cmFjdD8uaW5jbHVkZXMoX0Fzc2V0VHlwZS5QU1AzNCkgfHwgZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0TmZ0VHlwZXNTdXBwb3J0ZWRCeUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pOiBfQXNzZXRUeXBlW10ge1xuICBjb25zdCByZXN1bHQ6IF9Bc3NldFR5cGVbXSA9IFtdO1xuXG4gIGlmIChjaGFpbkluZm8uc3Vic3RyYXRlSW5mbyAmJiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5zdXBwb3J0U21hcnRDb250cmFjdCkge1xuICAgIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0LmZvckVhY2goKGFzc2V0VHlwZSkgPT4ge1xuICAgICAgaWYgKFtfQXNzZXRUeXBlLlBTUDM0XS5pbmNsdWRlcyhhc3NldFR5cGUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFzc2V0VHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY2hhaW5JbmZvLmV2bUluZm8gJiYgY2hhaW5JbmZvLmV2bUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QpIHtcbiAgICBjaGFpbkluZm8uZXZtSW5mby5zdXBwb3J0U21hcnRDb250cmFjdC5mb3JFYWNoKChhc3NldFR5cGUpID0+IHtcbiAgICAgIGlmIChbX0Fzc2V0VHlwZS5FUkM3MjFdLmluY2x1ZGVzKGFzc2V0VHlwZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXNzZXRUeXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VG9rZW5UeXBlc1N1cHBvcnRlZEJ5Q2hhaW4gKGNoYWluSW5mbzogX0NoYWluSW5mbyk6IF9Bc3NldFR5cGVbXSB7XG4gIGNvbnN0IHJlc3VsdDogX0Fzc2V0VHlwZVtdID0gW107XG5cbiAgaWYgKGNoYWluSW5mby5zdWJzdHJhdGVJbmZvICYmIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0KSB7XG4gICAgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uc3VwcG9ydFNtYXJ0Q29udHJhY3QuZm9yRWFjaCgoYXNzZXRUeXBlKSA9PiB7XG4gICAgICBpZiAoW19Bc3NldFR5cGUuUFNQMjJdLmluY2x1ZGVzKGFzc2V0VHlwZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXNzZXRUeXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjaGFpbkluZm8uZXZtSW5mbyAmJiBjaGFpbkluZm8uZXZtSW5mby5zdXBwb3J0U21hcnRDb250cmFjdCkge1xuICAgIGNoYWluSW5mby5ldm1JbmZvLnN1cHBvcnRTbWFydENvbnRyYWN0LmZvckVhY2goKGFzc2V0VHlwZSkgPT4ge1xuICAgICAgaWYgKFtfQXNzZXRUeXBlLkVSQzIwXS5pbmNsdWRlcyhhc3NldFR5cGUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFzc2V0VHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldENoYWluTmF0aXZlVG9rZW5CYXNpY0luZm8gKGNoYWluSW5mbzogX0NoYWluSW5mbyk6IEJhc2ljVG9rZW5JbmZvIHtcbiAgaWYgKCFjaGFpbkluZm8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3ltYm9sOiAnJyxcbiAgICAgIGRlY2ltYWxzOiAtMVxuICAgIH07XG4gIH1cblxuICBpZiAoY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8gIT09IG51bGwpIHsgLy8gc3Vic3RyYXRlIGJ5IGRlZmF1bHRcbiAgICByZXR1cm4ge1xuICAgICAgc3ltYm9sOiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5zeW1ib2wsXG4gICAgICBkZWNpbWFsczogY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8uZGVjaW1hbHNcbiAgICB9O1xuICB9IGVsc2UgaWYgKGNoYWluSW5mby5ldm1JbmZvICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN5bWJvbDogY2hhaW5JbmZvLmV2bUluZm8uc3ltYm9sLFxuICAgICAgZGVjaW1hbHM6IGNoYWluSW5mby5ldm1JbmZvLmRlY2ltYWxzXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3ltYm9sOiAnJyxcbiAgICBkZWNpbWFsczogLTFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRDaGFpbk5hdGl2ZVRva2VuU2x1ZyAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIGlmIChfaXNDdXN0b21DaGFpbihjaGFpbkluZm8uc2x1ZykpIHtcbiAgICByZXR1cm4gYCR7X0NVU1RPTV9QUkVGSVh9JHtjaGFpbkluZm8uc2x1Z30tJHtfQXNzZXRUeXBlLk5BVElWRX0tJHtfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyhjaGFpbkluZm8pLnN5bWJvbH1gO1xuICB9XG5cbiAgcmV0dXJuIGAke2NoYWluSW5mby5zbHVnfS0ke19Bc3NldFR5cGUuTkFUSVZFfS0ke19nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvKGNoYWluSW5mbykuc3ltYm9sfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNMb2NhbFRva2VuICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiB0b2tlbkluZm8uYXNzZXRUeXBlID09PSBfQXNzZXRUeXBlLkxPQ0FMO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzVG9rZW5Fdm1TbWFydENvbnRyYWN0ICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBbX0Fzc2V0VHlwZS5FUkM3MjEsIF9Bc3NldFR5cGUuRVJDMjBdLmluY2x1ZGVzKHRva2VuSW5mby5hc3NldFR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzVG9rZW5XYXNtU21hcnRDb250cmFjdCAodG9rZW5JbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gW19Bc3NldFR5cGUuUFNQMjIsIF9Bc3NldFR5cGUuUFNQMzRdLmluY2x1ZGVzKHRva2VuSW5mby5hc3NldFR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQXNzZXRTbWFydENvbnRyYWN0TmZ0IChhc3NldEluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBbX0Fzc2V0VHlwZS5QU1AzNCwgX0Fzc2V0VHlwZS5FUkM3MjFdLmluY2x1ZGVzKGFzc2V0SW5mby5hc3NldFR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3BhcnNlQXNzZXRSZWZLZXkgKG9yaWdpblRva2VuU2x1Zzogc3RyaW5nLCBkZXN0aW5hdGlvblRva2VuU2x1Zzogc3RyaW5nKSB7XG4gIHJldHVybiBgJHtvcmlnaW5Ub2tlblNsdWd9X19fJHtkZXN0aW5hdGlvblRva2VuU2x1Z31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzWGNtUGF0aFN1cHBvcnRlZCAob3JpZ2luVG9rZW5TbHVnOiBzdHJpbmcsIGRlc3RpbmF0aW9uVG9rZW5TbHVnOiBzdHJpbmcsIGFzc2V0UmVmTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQXNzZXRSZWY+KSB7XG4gIGNvbnN0IGFzc2V0UmVmID0gYXNzZXRSZWZNYXBbX3BhcnNlQXNzZXRSZWZLZXkob3JpZ2luVG9rZW5TbHVnLCBkZXN0aW5hdGlvblRva2VuU2x1ZyldO1xuXG4gIGlmICghYXNzZXRSZWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKGFzc2V0UmVmLnBhdGggPT09IF9Bc3NldFJlZlBhdGguWENNKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRYY21Bc3NldFR5cGUgKHRva2VuSW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIHRva2VuSW5mby5tZXRhZGF0YT8uYXNzZXRUeXBlIGFzIHN0cmluZyB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRYY21Bc3NldElkICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiB0b2tlbkluZm8ubWV0YWRhdGE/LmFzc2V0SWQgYXMgc3RyaW5nIHx8ICctMSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0WGNtQXNzZXRNdWx0aWxvY2F0aW9uICh0b2tlbkluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiB0b2tlbkluZm8ubWV0YWRhdGE/Lm11bHRpbG9jYXRpb24gYXMgUmVjb3JkPHN0cmluZywgYW55Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRYY21UcmFuc2ZlclR5cGUgKG9yaWdpbkNoYWluSW5mbzogX0NoYWluSW5mbywgZGVzdGluYXRpb25DaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGAke29yaWdpbkNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5jaGFpblR5cGUgfHwgJyd9LSR7ZGVzdGluYXRpb25DaGFpbkluZm8uc3Vic3RyYXRlSW5mbz8uY2hhaW5UeXBlIHx8ICcnfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNTdWJzdHJhdGVSZWxheUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgcmV0dXJuIGNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5jaGFpblR5cGUgPT09IF9TdWJzdHJhdGVDaGFpblR5cGUuUkVMQVlDSEFJTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1N1YnN0cmF0ZVBhcmFDaGFpbiAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIHJldHVybiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mbyAhPT0gbnVsbCAmJiBjaGFpbkluZm8uc3Vic3RyYXRlSW5mby5wYXJhSWQgIT09IG51bGwgJiYgY2hhaW5JbmZvLnN1YnN0cmF0ZUluZm8/LmNoYWluVHlwZSA9PT0gX1N1YnN0cmF0ZUNoYWluVHlwZS5QQVJBQ0hBSU47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0RXZtQWJpRXhwbG9yZXIgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLmV2bUluZm8/LmFiaUV4cGxvcmVyIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQXNzZXRWYWx1YWJsZSAoYXNzZXRJbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gYXNzZXRJbmZvLmhhc1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldE11bHRpQ2hhaW5Bc3NldCAoYXNzZXRJbmZvOiBfQ2hhaW5Bc3NldCkge1xuICByZXR1cm4gYXNzZXRJbmZvPy5tdWx0aUNoYWluQXNzZXQgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QXNzZXRQcmljZUlkIChhc3NldEluZm86IF9DaGFpbkFzc2V0KSB7XG4gIHJldHVybiBhc3NldEluZm8/LnByaWNlSWQgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0TXVsdGlDaGFpbkFzc2V0UHJpY2VJZCAobXVsdGlDaGFpbkFzc2V0OiBfTXVsdGlDaGFpbkFzc2V0KSB7XG4gIHJldHVybiBtdWx0aUNoYWluQXNzZXQ/LnByaWNlSWQgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QXNzZXRTeW1ib2wgKGFzc2V0SW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIGFzc2V0SW5mbz8uc3ltYm9sIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldE11bHRpQ2hhaW5Bc3NldFN5bWJvbCAobXVsdGlDaGFpbkFzc2V0OiBfTXVsdGlDaGFpbkFzc2V0KSB7XG4gIHJldHVybiBtdWx0aUNoYWluQXNzZXQuc3ltYm9sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFzc2V0T3JpZ2luQ2hhaW4gKGFzc2V0SW5mbzogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIGFzc2V0SW5mby5vcmlnaW5DaGFpbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRDaGFpbk5hbWUgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICByZXR1cm4gY2hhaW5JbmZvLm5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QXNzZXREZWNpbWFscyAoYXNzZXRJbmZvOiBfQ2hhaW5Bc3NldCk6IG51bWJlciB7XG4gIHJldHVybiBhc3NldEluZm8uZGVjaW1hbHMgfHwgMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRCbG9ja0V4cGxvcmVyRnJvbUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBsZXQgYmxvY2tFeHBsb3JlcjtcblxuICBpZiAoIWNoYWluSW5mbykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChfaXNQdXJlRXZtQ2hhaW4oY2hhaW5JbmZvKSkge1xuICAgIGJsb2NrRXhwbG9yZXIgPSBjaGFpbkluZm8/LmV2bUluZm8/LmJsb2NrRXhwbG9yZXI7XG4gIH0gZWxzZSB7XG4gICAgYmxvY2tFeHBsb3JlciA9IGNoYWluSW5mbz8uc3Vic3RyYXRlSW5mbz8uYmxvY2tFeHBsb3JlcjtcbiAgfVxuXG4gIGlmICghYmxvY2tFeHBsb3Jlcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoYmxvY2tFeHBsb3JlciAhPT0gJycgJiYgIWJsb2NrRXhwbG9yZXIuZW5kc1dpdGgoJy8nKSkge1xuICAgIHJldHVybiBgJHtibG9ja0V4cGxvcmVyfS9gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBibG9ja0V4cGxvcmVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcGFyc2VNZXRhZGF0YUZvclNtYXJ0Q29udHJhY3RBc3NldCAoY29udHJhY3RBZGRyZXNzOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250cmFjdEFkZHJlc3NcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc0NoYWluVGVzdE5ldCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKTogYm9vbGVhbiB7XG4gIHJldHVybiBjaGFpbkluZm8uaXNUZXN0bmV0IHx8IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzQXNzZXRGdW5naWJsZVRva2VuIChjaGFpbkFzc2V0OiBfQ2hhaW5Bc3NldCk6IGJvb2xlYW4ge1xuICByZXR1cm4gIVtfQXNzZXRUeXBlLkVSQzcyMSwgX0Fzc2V0VHlwZS5QU1AzNCwgX0Fzc2V0VHlwZS5VTktOT1dOXS5pbmNsdWRlcyhjaGFpbkFzc2V0LmFzc2V0VHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0Q3Jvd2Rsb2FuVXJsRnJvbUNoYWluIChjaGFpbkluZm86IF9DaGFpbkluZm8pOiBzdHJpbmcge1xuICByZXR1cm4gY2hhaW5JbmZvPy5zdWJzdHJhdGVJbmZvPy5jcm93ZGxvYW5VcmwgfHwgJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDdXN0b21Qcm92aWRlciAocHJvdmlkZXJLZXk6IHN0cmluZykge1xuICByZXR1cm4gcHJvdmlkZXJLZXkuc3RhcnRzV2l0aChfQ1VTVE9NX1BSRUZJWCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2VuZXJhdGVDdXN0b21Qcm92aWRlcktleSAoaW5kZXg6IG51bWJlcikge1xuICByZXR1cm4gYCR7X0NVU1RPTV9QUkVGSVh9cHJvdmlkZXItJHtpbmRleH1gO1xufVxuXG5leHBvcnQgY29uc3QgZmluZENoYWluSW5mb0J5SGFsZkdlbmVzaXNIYXNoID0gKGNoYWluTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5JbmZvPiwgaGFsZkdlbmVzaXNIYXNoPzogc3RyaW5nKTogX0NoYWluSW5mbyB8IG51bGwgPT4ge1xuICBpZiAoIWhhbGZHZW5lc2lzSGFzaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yIChjb25zdCBjaGFpbkluZm8gb2YgT2JqZWN0LnZhbHVlcyhjaGFpbk1hcCkpIHtcbiAgICBpZiAoX2dldFN1YnN0cmF0ZUdlbmVzaXNIYXNoKGNoYWluSW5mbyk/LnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIsIDIgKyAzMikgPT09IGhhbGZHZW5lc2lzSGFzaC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICByZXR1cm4gY2hhaW5JbmZvO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRDaGFpbkluZm9CeUNoYWluSWQgPSAoY2hhaW5NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+LCBjaGFpbklkPzogbnVtYmVyKTogX0NoYWluSW5mbyB8IG51bGwgPT4ge1xuICBpZiAoIWNoYWluSWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2hhaW5JbmZvIG9mIE9iamVjdC52YWx1ZXMoY2hhaW5NYXApKSB7XG4gICAgaWYgKGNoYWluSW5mby5ldm1JbmZvPy5ldm1DaGFpbklkID09PSBjaGFpbklkKSB7XG4gICAgICByZXR1cm4gY2hhaW5JbmZvO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9pc01hbnRhWmtBc3NldCAoY2hhaW5Bc3NldDogX0NoYWluQXNzZXQpIHtcbiAgcmV0dXJuIF9NQU5UQV9aS19DSEFJTl9HUk9VUC5pbmNsdWRlcyhjaGFpbkFzc2V0Lm9yaWdpbkNoYWluKSAmJiBjaGFpbkFzc2V0LnN5bWJvbC5zdGFydHNXaXRoKF9aS19BU1NFVF9QUkVGSVgpO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEJyb3dzZXJDb25maXJtYXRpb25UeXBlLCBMYW5ndWFnZVR5cGUsIFRoZW1lTmFtZXMsIFVpU2V0dGluZ3MsIFdhbGxldFVubG9ja1R5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IFRBUkdFVF9FTlYgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVEhFTUU6IFRoZW1lTmFtZXMgPSBUaGVtZU5hbWVzLkRBUks7XG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRTogQnJvd3NlckNvbmZpcm1hdGlvblR5cGUgPSAncG9wdXAnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQVVUT19MT0NLX1RJTUUgPSAxNTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1VOTE9DS19UWVBFOiBXYWxsZXRVbmxvY2tUeXBlID0gVEFSR0VUX0VOViA9PT0gJ2V4dGVuc2lvbicgPyBXYWxsZXRVbmxvY2tUeXBlLkFMV0FZU19SRVFVSVJFRCA6IFdhbGxldFVubG9ja1R5cGUuV0hFTl9ORUVERUQ7XG5leHBvcnQgY29uc3QgREVGQVVMVF9DSEFJTl9QQVRST0xfRU5BQkxFID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVGQVVMVF9MQU5HVUFHRTogTGFuZ3VhZ2VUeXBlID0gJ2VuJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NIT1dfWkVST19CQUxBTkNFID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NIT1dfQkFMQU5DRSA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUxMX0xPR08gPSAnJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NBTUVSQV9FTkFCTEUgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElORzogVWlTZXR0aW5ncyA9IHtcbiAgbGFuZ3VhZ2U6IERFRkFVTFRfTEFOR1VBR0UsXG4gIGJyb3dzZXJDb25maXJtYXRpb25UeXBlOiBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFLFxuICBpc1Nob3daZXJvQmFsYW5jZTogREVGQVVMVF9TSE9XX1pFUk9fQkFMQU5DRSxcbiAgaXNTaG93QmFsYW5jZTogREVGQVVMVF9TSE9XX0JBTEFOQ0UsXG4gIGFjY291bnRBbGxMb2dvOiBERUZBVUxUX0FMTF9MT0dPLFxuICB0aGVtZTogREVGQVVMVF9USEVNRSxcbiAgdW5sb2NrVHlwZTogREVGQVVMVF9VTkxPQ0tfVFlQRSxcbiAgY2FtZXJhOiBERUZBVUxUX0NBTUVSQV9FTkFCTEUsXG4gIHRpbWVBdXRvTG9jazogREVGQVVMVF9BVVRPX0xPQ0tfVElNRSxcbiAgZW5hYmxlQ2hhaW5QYXRyb2w6IERFRkFVTFRfQ0hBSU5fUEFUUk9MX0VOQUJMRSxcbiAgd2FsbGV0UmVmZXJlbmNlOiAnJ1xufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQ2hhaW5JbmZvIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IEV4dHJpbnNpY0RhdGFUeXBlTWFwLCBFeHRyaW5zaWNUeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBfZ2V0QmxvY2tFeHBsb3JlckZyb21DaGFpbiwgX2lzUHVyZUV2bUNoYWluIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3V0aWxzJztcblxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhbnNhY3Rpb25EYXRhPFQgZXh0ZW5kcyBFeHRyaW5zaWNUeXBlPiAoZGF0YTogdW5rbm93bik6IEV4dHJpbnNpY0RhdGFUeXBlTWFwW1RdIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gIHJldHVybiBkYXRhIGFzIEV4dHJpbnNpY0RhdGFUeXBlTWFwW1RdO1xufVxuXG5mdW5jdGlvbiBnZXRCbG9ja0V4cGxvcmVyQWNjb3VudFJvdXRlIChleHBsb3Jlckxpbms6IHN0cmluZykge1xuICBpZiAoZXhwbG9yZXJMaW5rLmluY2x1ZGVzKCdleHBsb3Jlci5zdWJzcGFjZS5uZXR3b3JrJykpIHtcbiAgICByZXR1cm4gJ2FjY291bnRzJztcbiAgfVxuXG4gIGlmIChleHBsb3JlckxpbmsuaW5jbHVkZXMoJ2RlZXBlcnNjYW4uaW8nKSkge1xuICAgIHJldHVybiAnYWNjb3VudCc7XG4gIH1cblxuICBpZiAoZXhwbG9yZXJMaW5rLmluY2x1ZGVzKCdzdWJzY2FuLmlvJykpIHtcbiAgICByZXR1cm4gJ2FjY291bnQnO1xuICB9XG5cbiAgcmV0dXJuICdhZGRyZXNzJztcbn1cblxuZnVuY3Rpb24gZ2V0QmxvY2tFeHBsb3JlclR4Um91dGUgKGNoYWluSW5mbzogX0NoYWluSW5mbykge1xuICBpZiAoX2lzUHVyZUV2bUNoYWluKGNoYWluSW5mbykpIHtcbiAgICByZXR1cm4gJ3R4JztcbiAgfVxuXG4gIGlmIChbJ2F2ZW50dXMnLCAnZGVlcGVyX25ldHdvcmsnXS5pbmNsdWRlcyhjaGFpbkluZm8uc2x1ZykpIHtcbiAgICByZXR1cm4gJ3RyYW5zYWN0aW9uJztcbiAgfVxuXG4gIHJldHVybiAnZXh0cmluc2ljJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGxvcmVyTGluayAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCB2YWx1ZTogc3RyaW5nLCB0eXBlOiAnYWNjb3VudCcgfCAndHgnKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgZXhwbG9yZXJMaW5rID0gX2dldEJsb2NrRXhwbG9yZXJGcm9tQ2hhaW4oY2hhaW5JbmZvKTtcblxuICBpZiAoZXhwbG9yZXJMaW5rICYmIHR5cGUgPT09ICdhY2NvdW50Jykge1xuICAgIGNvbnN0IHJvdXRlID0gZ2V0QmxvY2tFeHBsb3JlckFjY291bnRSb3V0ZShleHBsb3JlckxpbmspO1xuXG4gICAgcmV0dXJuIGAke2V4cGxvcmVyTGlua30ke2V4cGxvcmVyTGluay5lbmRzV2l0aCgnLycpID8gJycgOiAnLyd9cXVlcnkvJHt2YWx1ZX1gO1xuICB9XG5cbiAgaWYgKGV4cGxvcmVyTGluayAmJiB2YWx1ZS5zdGFydHNXaXRoKCcweCcpKSB7XG4gICAgY29uc3Qgcm91dGUgPSBnZXRCbG9ja0V4cGxvcmVyVHhSb3V0ZShjaGFpbkluZm8pO1xuXG4gICAgcmV0dXJuIChgJHtleHBsb3Jlckxpbmt9JHtleHBsb3JlckxpbmsuZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nfXF1ZXJ5LyR7dmFsdWV9YCk7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEVJUDE1NV9TSUdOSU5HX01FVEhPRFMsIFBPTEtBRE9UX1NJR05JTkdfTUVUSE9EUywgV2FsbGV0Q29ubmVjdFNpZ25pbmdNZXRob2QgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3dhbGxldC1jb25uZWN0LXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IFNpZ25DbGllbnRUeXBlcyB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RfSURfRVhURU5TSU9OID0gJzZkYTM0YzBiNDgxNjRkMjc2ODE5MjRkZDlhNDZkNmJlJztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX0lEX01PQklMRSA9ICc2ZGEzNGMwYjQ4MTY0ZDI3NjgxOTI0ZGQ5YTQ2ZDZiZSc7XG5leHBvcnQgY29uc3QgUkVMQVlfVVJMID0gJ3dzczovL3JlbGF5LndhbGxldGNvbm5lY3QuY29tJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0FMTEVUX0NPTk5FQ1RfT1BUSU9OUzogU2lnbkNsaWVudFR5cGVzLk9wdGlvbnMgPSB7XG4gIGxvZ2dlcjogJ2RlYnVnJyxcbiAgcHJvamVjdElkOiAhaXNNb2JpbGUgPyBQUk9KRUNUX0lEX0VYVEVOU0lPTiA6IFBST0pFQ1RfSURfTU9CSUxFLFxuICByZWxheVVybDogUkVMQVlfVVJMLFxuICBtZXRhZGF0YToge1xuICAgIG5hbWU6ICdTdWJXYWxsZXQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVhY3QgV2FsbGV0IGZvciBXYWxsZXRDb25uZWN0JyxcbiAgICB1cmw6ICdodHRwczovL3d3dy5zdWJ3YWxsZXQuYXBwLycsXG4gICAgaWNvbnM6IFsnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tvbml2ZXJzZS9TdWJXYWxsZXQtRXh0ZW5zaW9uL21hc3Rlci9wYWNrYWdlcy9leHRlbnNpb24ta29uaS9wdWJsaWMvaW1hZ2VzL2ljb24tMTI4LnBuZyddXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBTExfV0FMTEVUX0NPTk5FQ1RfRVZFTlQ6IFNpZ25DbGllbnRUeXBlcy5FdmVudFtdID0gWydzZXNzaW9uX3Byb3Bvc2FsJywgJ3Nlc3Npb25fdXBkYXRlJywgJ3Nlc3Npb25fZXh0ZW5kJywgJ3Nlc3Npb25fcGluZycsICdzZXNzaW9uX2RlbGV0ZScsICdzZXNzaW9uX2V4cGlyZScsICdzZXNzaW9uX3JlcXVlc3QnLCAnc2Vzc2lvbl9yZXF1ZXN0X3NlbnQnLCAnc2Vzc2lvbl9ldmVudCcsICdwcm9wb3NhbF9leHBpcmUnXTtcblxuZXhwb3J0IGNvbnN0IFdBTExFVF9DT05ORUNUX1NVUFBPUlRFRF9NRVRIT0RTOiBXYWxsZXRDb25uZWN0U2lnbmluZ01ldGhvZFtdID0gW1xuICBQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMuUE9MS0FET1RfU0lHTl9NRVNTQUdFLFxuICBQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMuUE9MS0FET1RfU0lHTl9UUkFOU0FDVElPTixcbiAgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0VORF9UUkFOU0FDVElPTixcbiAgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5QRVJTT05BTF9TSUdOLFxuICBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjEsXG4gIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV9WMyxcbiAgRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0lHTl9UWVBFRF9EQVRBX1Y0XG5dO1xuXG5leHBvcnQgY29uc3QgV0FMTEVUX0NPTk5FQ1RfUkVRVUVTVF9LRVkgPSAnd2FsbGV0LWNvbm5lY3QnO1xuXG5leHBvcnQgY29uc3QgV0FMTEVUX0NPTk5FQ1RfRUlQMTU1X05BTUVTUEFDRSA9ICdlaXAxNTUnO1xuZXhwb3J0IGNvbnN0IFdBTExFVF9DT05ORUNUX1BPTEtBRE9UX05BTUVTUEFDRSA9ICdwb2xrYWRvdCc7XG5cbmV4cG9ydCBjb25zdCBXQUxMRVRfQ09OTkVDVF9TVVBQT1JUX05BTUVTUEFDRVM6IHN0cmluZ1tdID0gW1dBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UsIFdBTExFVF9DT05ORUNUX1BPTEtBRE9UX05BTUVTUEFDRV07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0NoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBmaW5kQ2hhaW5JbmZvQnlDaGFpbklkLCBmaW5kQ2hhaW5JbmZvQnlIYWxmR2VuZXNpc0hhc2ggfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgU2lnbkNsaWVudFR5cGVzIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvdHlwZXMnO1xuaW1wb3J0IHsgUHJvcG9zYWxUeXBlcyB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L3R5cGVzL2Rpc3QvdHlwZXMvc2lnbi1jbGllbnQvcHJvcG9zYWwnO1xuXG5pbXBvcnQgeyBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmltcG9ydCB7IFdBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UsIFdBTExFVF9DT05ORUNUX1BPTEtBRE9UX05BTUVTUEFDRSwgV0FMTEVUX0NPTk5FQ1RfUkVRVUVTVF9LRVksIFdBTExFVF9DT05ORUNUX1NVUFBPUlRfTkFNRVNQQUNFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEVJUDE1NV9TSUdOSU5HX01FVEhPRFMsIFdhbGxldENvbm5lY3ROb3RTdXBwb3J0UmVxdWVzdCwgV2FsbGV0Q29ubmVjdFBhcmFtTWFwLCBXYWxsZXRDb25uZWN0U2Vzc2lvblJlcXVlc3QsIFdhbGxldENvbm5lY3RTaWduaW5nTWV0aG9kIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRXQ0lkID0gKGlkOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gW1dBTExFVF9DT05ORUNUX1JFUVVFU1RfS0VZLCBEYXRlLm5vdygpLCBpZF0uam9pbignLicpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRDb25uZWN0UmVxdWVzdCA9IChyZXF1ZXN0OiBTaWduQ2xpZW50VHlwZXMuRXZlbnRBcmd1bWVudHNbJ3Nlc3Npb25fcHJvcG9zYWwnXSk6IFdhbGxldENvbm5lY3RTZXNzaW9uUmVxdWVzdCA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGdldFdDSWQocmVxdWVzdC5pZCksXG4gICAgaXNJbnRlcm5hbDogZmFsc2UsXG4gICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICB1cmw6IHJlcXVlc3QucGFyYW1zLnByb3Bvc2VyLm1ldGFkYXRhLnVybFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnROb3RTdXBwb3J0UmVxdWVzdCA9IChyZXF1ZXN0OiBTaWduQ2xpZW50VHlwZXMuRXZlbnRBcmd1bWVudHNbJ3Nlc3Npb25fcmVxdWVzdCddLCB1cmw6IHN0cmluZyk6IFdhbGxldENvbm5lY3ROb3RTdXBwb3J0UmVxdWVzdCA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGdldFdDSWQocmVxdWVzdC5pZCksXG4gICAgaXNJbnRlcm5hbDogZmFsc2UsXG4gICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICB1cmw6IHVybFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlUmVxdWVzdFBhcmFtcyA9IDxUIGV4dGVuZHMgV2FsbGV0Q29ubmVjdFNpZ25pbmdNZXRob2Q+IChwYXJhbXM6IHVua25vd24pID0+IHtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcGFyYW1zIGFzIFdhbGxldENvbm5lY3RQYXJhbU1hcFtUXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFaXAxNTVNZXNzYWdlQWRkcmVzcyA9IChtZXRob2Q6IEVJUDE1NV9TSUdOSU5HX01FVEhPRFMsIHBhcmFtOiB1bmtub3duKTogc3RyaW5nID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuUEVSU09OQUxfU0lHTjpcbiAgICBjYXNlIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQTpcbiAgICBjYXNlIEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR046XG4gICAgY2FzZSBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjM6XG4gICAgY2FzZSBFSVAxNTVfU0lHTklOR19NRVRIT0RTLkVUSF9TSUdOX1RZUEVEX0RBVEFfVjQ6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcbiAgICAgIGNvbnN0IFtwMSwgcDJdID0gcGFyc2VSZXF1ZXN0UGFyYW1zPEVJUDE1NV9TSUdOSU5HX01FVEhPRFMuUEVSU09OQUxfU0lHTj4ocGFyYW0pO1xuXG4gICAgICBpZiAodHlwZW9mIHAxID09PSAnc3RyaW5nJyAmJiBpc0V0aGVyZXVtQWRkcmVzcyhwMSkpIHtcbiAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcDIgPT09ICdzdHJpbmcnICYmIGlzRXRoZXJldW1BZGRyZXNzKHAyKSkge1xuICAgICAgICByZXR1cm4gcDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNXYWxsZXRDb25uZWN0UmVxdWVzdCA9IChpZD86IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgW3ByZWZpeF0gPSBpZC5zcGxpdCgnLicpO1xuXG4gIHJldHVybiBwcmVmaXggPT09IFdBTExFVF9DT05ORUNUX1JFUVVFU1RfS0VZO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJvcG9zYWxFeHBpcmVkID0gKHBhcmFtczogUHJvcG9zYWxUeXBlcy5TdHJ1Y3QpOiBib29sZWFuID0+IHtcbiAgY29uc3QgdGltZU51bSA9IHBhcmFtcy5leHBpcnk7XG4gIGNvbnN0IGV4cGlyZVRpbWUgPSBuZXcgRGF0ZSh0aW1lTnVtID4gMTAgKiogMTIgPyB0aW1lTnVtIDogdGltZU51bSAqIDEwMDApO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIHJldHVybiBub3cuZ2V0VGltZSgpID49IGV4cGlyZVRpbWUuZ2V0VGltZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFdhbGxldENvbm5lY3ROYW1lc3BhY2UgPSAobmFtZXNwYWNlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIFdBTExFVF9DT05ORUNUX1NVUFBPUlRfTkFNRVNQQUNFUy5pbmNsdWRlcyhuYW1lc3BhY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFdhbGxldENvbm5lY3RDaGFpbiA9IChjaGFpbjogc3RyaW5nLCBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IFtuYW1lc3BhY2UsIGluZm9dID0gY2hhaW4uc3BsaXQoJzonKTtcblxuICBpZiAobmFtZXNwYWNlID09PSBXQUxMRVRfQ09OTkVDVF9QT0xLQURPVF9OQU1FU1BBQ0UpIHtcbiAgICByZXR1cm4gISFmaW5kQ2hhaW5JbmZvQnlIYWxmR2VuZXNpc0hhc2goY2hhaW5JbmZvTWFwLCBpbmZvKTtcbiAgfSBlbHNlIGlmIChuYW1lc3BhY2UgPT09IFdBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UpIHtcbiAgICByZXR1cm4gISFmaW5kQ2hhaW5JbmZvQnlDaGFpbklkKGNoYWluSW5mb01hcCwgcGFyc2VJbnQoaW5mbykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFdm1TZW5kVHJhbnNhY3Rpb25QYXJhbXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblJlcXVlc3RCYXNlLCBSZXNvbHZlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBFbmdpbmVUeXBlcywgU2lnbkNsaWVudFR5cGVzIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvdHlwZXMnO1xuXG5pbXBvcnQgeyBTaWduZXJQYXlsb2FkSlNPTiB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0Q29ubmVjdFNlc3Npb25SZXF1ZXN0IGV4dGVuZHMgQ29uZmlybWF0aW9uUmVxdWVzdEJhc2Uge1xuICByZXF1ZXN0OiBTaWduQ2xpZW50VHlwZXMuRXZlbnRBcmd1bWVudHNbJ3Nlc3Npb25fcHJvcG9zYWwnXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWxsZXRDb25uZWN0Tm90U3VwcG9ydFJlcXVlc3QgZXh0ZW5kcyBDb25maXJtYXRpb25SZXF1ZXN0QmFzZSB7XG4gIHJlcXVlc3Q6IFNpZ25DbGllbnRUeXBlcy5FdmVudEFyZ3VtZW50c1snc2Vzc2lvbl9yZXF1ZXN0J107XG59XG5cbmV4cG9ydCB0eXBlIFJlc3VsdEFwcHJvdmVXYWxsZXRDb25uZWN0U2Vzc2lvbiA9IEVuZ2luZVR5cGVzLkFwcHJvdmVQYXJhbXM7XG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RXYWxsZXRDb25uZWN0U2Vzc2lvbiBleHRlbmRzIFdhbGxldENvbm5lY3RTZXNzaW9uUmVxdWVzdCwgUmVzb2x2ZXI8dm9pZD4ge31cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFdhbGxldENvbm5lY3ROb3RTdXBwb3J0IGV4dGVuZHMgV2FsbGV0Q29ubmVjdE5vdFN1cHBvcnRSZXF1ZXN0LCBSZXNvbHZlcjx2b2lkPiB7fVxuXG5leHBvcnQgZW51bSBFSVAxNTVfU0lHTklOR19NRVRIT0RTIHtcbiAgUEVSU09OQUxfU0lHTiA9ICdwZXJzb25hbF9zaWduJyxcbiAgRVRIX1NJR04gPSAnZXRoX3NpZ24nLFxuICBFVEhfU0lHTl9UUkFOU0FDVElPTiA9ICdldGhfc2lnblRyYW5zYWN0aW9uJyxcbiAgRVRIX1NJR05fVFlQRURfREFUQSA9ICdldGhfc2lnblR5cGVkRGF0YScsXG4gIEVUSF9TSUdOX1RZUEVEX0RBVEFfVjEgPSAnZXRoX3NpZ25UeXBlZERhdGFfdjEnLFxuICBFVEhfU0lHTl9UWVBFRF9EQVRBX1YzID0gJ2V0aF9zaWduVHlwZWREYXRhX3YzJyxcbiAgRVRIX1NJR05fVFlQRURfREFUQV9WNCA9ICdldGhfc2lnblR5cGVkRGF0YV92NCcsXG4gIEVUSF9TRU5EX1JBV19UUkFOU0FDVElPTiA9ICdldGhfc2VuZFJhd1RyYW5zYWN0aW9uJyxcbiAgRVRIX1NFTkRfVFJBTlNBQ1RJT04gPSAnZXRoX3NlbmRUcmFuc2FjdGlvbidcbn1cblxuZXhwb3J0IGVudW0gUE9MS0FET1RfU0lHTklOR19NRVRIT0RTIHtcbiAgUE9MS0FET1RfU0lHTl9UUkFOU0FDVElPTiA9ICdwb2xrYWRvdF9zaWduVHJhbnNhY3Rpb24nLFxuICBQT0xLQURPVF9TSUdOX01FU1NBR0UgPSAncG9sa2Fkb3Rfc2lnbk1lc3NhZ2UnXG59XG5cbmV4cG9ydCB0eXBlIFdhbGxldENvbm5lY3RTaWduaW5nTWV0aG9kID0gRUlQMTU1X1NJR05JTkdfTUVUSE9EUyB8IFBPTEtBRE9UX1NJR05JTkdfTUVUSE9EUztcblxuZXhwb3J0IGludGVyZmFjZSBXYWxsZXRDb25uZWN0UG9sa2Fkb3RTaWduTWVzc2FnZVBhcmFtcyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhbGxldENvbm5lY3RQb2xrYWRvdFNpZ25UcmFuc2FjdGlvblBhcmFtcyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgdHJhbnNhY3Rpb25QYXlsb2FkOiBTaWduZXJQYXlsb2FkSlNPTjtcbn1cblxuZXhwb3J0IHR5cGUgV2FsbGV0Q29ubmVjdEVpcDE1NVNpZ25NZXNzYWdlID0gW3N0cmluZywgc3RyaW5nXSAvLyBwYXlsb2FkIGFuZCBhZGRyZXNzXG5leHBvcnQgdHlwZSBXYWxsZXRDb25uZWN0RWlwMTU1U2VuZFRyYW5zYWN0aW9uID0gW0V2bVNlbmRUcmFuc2FjdGlvblBhcmFtc107XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0Q29ubmVjdFBhcmFtTWFwIHtcbiAgW1BPTEtBRE9UX1NJR05JTkdfTUVUSE9EUy5QT0xLQURPVF9TSUdOX01FU1NBR0VdOiBXYWxsZXRDb25uZWN0UG9sa2Fkb3RTaWduTWVzc2FnZVBhcmFtcztcbiAgW1BPTEtBRE9UX1NJR05JTkdfTUVUSE9EUy5QT0xLQURPVF9TSUdOX1RSQU5TQUNUSU9OXTogV2FsbGV0Q29ubmVjdFBvbGthZG90U2lnblRyYW5zYWN0aW9uUGFyYW1zO1xuICBbRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5QRVJTT05BTF9TSUdOXTogV2FsbGV0Q29ubmVjdEVpcDE1NVNpZ25NZXNzYWdlO1xuICBbRUlQMTU1X1NJR05JTkdfTUVUSE9EUy5FVEhfU0lHTl06IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV06IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV9WM106IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NJR05fVFlQRURfREFUQV9WNF06IFdhbGxldENvbm5lY3RFaXAxNTVTaWduTWVzc2FnZTtcbiAgW0VJUDE1NV9TSUdOSU5HX01FVEhPRFMuRVRIX1NFTkRfVFJBTlNBQ1RJT05dOiBXYWxsZXRDb25uZWN0RWlwMTU1U2VuZFRyYW5zYWN0aW9uO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCBjb25zdCB1bmlxdWVTdHJpbmdBcnJheSA9IChhcnJheTogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goKHYpID0+IHtcbiAgICBtYXBbdl0gPSB2O1xuICB9KTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHR5cGUgeyBLZXlwYWlyVHlwZSB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0by90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5EZXJpdmUgKHR5cGU/OiBLZXlwYWlyVHlwZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gISF0eXBlICYmIFsnZWQyNTUxOScsICdzcjI1NTE5JywgJ2VjZHNhJywgJ2V0aGVyZXVtJ10uaW5jbHVkZXModHlwZSk7XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgRW52aXJvbm1lbnRTdXBwb3J0LCBPU1R5cGUsIFJ1bnRpbWVFbnZpcm9ubWVudCwgUnVudGltZUVudmlyb25tZW50SW5mbywgVGFyZ2V0RW52aXJvbm1lbnQgfSBmcm9tICcuLi9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5cbmZ1bmN0aW9uIGRldGVjdFJ1bnRpbWVFbnZpcm9ubWVudCAoKTogUnVudGltZUVudmlyb25tZW50SW5mbyB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gV2ViIGVudmlyb25tZW50XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQuV2ViLFxuICAgICAgdmVyc2lvbjogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgcHJvdG9jb2w6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFNlcnZpY2UgV29ya2VyIGVudmlyb25tZW50XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQuU2VydmljZVdvcmtlcixcbiAgICAgIHZlcnNpb246IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICBob3N0OiBzZWxmLmxvY2F0aW9uLmhvc3QsXG4gICAgICBwcm90b2NvbDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGUpIHtcbiAgICAvLyBOb2RlLmpzIGVudmlyb25tZW50XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudmlyb25tZW50OiBSdW50aW1lRW52aXJvbm1lbnQuTm9kZSxcbiAgICAgIHZlcnNpb246IHByb2Nlc3MudmVyc2lvbnMubm9kZVxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNocm9tZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNocm9tZS5ydW50aW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEV4dGVuc2lvbiBlbnZpcm9ubWVudCAoQ2hyb21lKVxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50LkV4dGVuc2lvbkNocm9tZSxcbiAgICAgIHZlcnNpb246IGNocm9tZS5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcbiAgICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgcHJvdG9jb2w6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIGJyb3dzZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBicm93c2VyLnJ1bnRpbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRXh0ZW5zaW9uIGVudmlyb25tZW50IChGaXJlZm94KVxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50LkV4dGVuc2lvbkZpcmVmb3gsXG4gICAgICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxuICAgICAgaG9zdDogd2luZG93LmxvY2F0aW9uLmhvc3QsXG4gICAgICBwcm90b2NvbDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sXG4gICAgfTtcbiAgICAvLyBAdHMtaWdub3JlXG4gIH0gZWxzZSBpZiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFdlYiBXb3JrZXIgZW52aXJvbm1lbnRcbiAgICByZXR1cm4ge1xuICAgICAgZW52aXJvbm1lbnQ6IFJ1bnRpbWVFbnZpcm9ubWVudC5XZWJXb3JrZXIsXG4gICAgICB2ZXJzaW9uOiAnJ1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gVW5rbm93biBlbnZpcm9ubWVudFxuICAgIHJldHVybiB7XG4gICAgICBlbnZpcm9ubWVudDogUnVudGltZUVudmlyb25tZW50LlVua25vd24sXG4gICAgICB2ZXJzaW9uOiAnJ1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJ1bnRpbWVJbmZvOiBSdW50aW1lRW52aXJvbm1lbnRJbmZvID0gZGV0ZWN0UnVudGltZUVudmlyb25tZW50KCk7XG5cbmV4cG9ydCBjb25zdCBnZXRPUyA9ICgpOiBPU1R5cGUgPT4ge1xuICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgLy8gQHRzLWlnbm9yZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzLEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICBjb25zdCBwbGF0Zm9ybTogc3RyaW5nID0gd2luZG93Lm5hdmlnYXRvcj8udXNlckFnZW50RGF0YT8ucGxhdGZvcm0gfHwgd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybTtcbiAgY29uc3QgbWFjb3NQbGF0Zm9ybXMgPSBbJ01hY2ludG9zaCcsICdNYWNJbnRlbCcsICdNYWNQUEMnLCAnTWFjNjhLJywgJ21hY09TJ107XG4gIGNvbnN0IHdpbmRvd3NQbGF0Zm9ybXMgPSBbJ1dpbjMyJywgJ1dpbjY0JywgJ1dpbmRvd3MnLCAnV2luQ0UnXTtcbiAgY29uc3QgaW9zUGxhdGZvcm1zID0gWydpUGhvbmUnLCAnaVBhZCcsICdpUG9kJ107XG4gIGxldCBvczogT1NUeXBlID0gJ1Vua25vd24nO1xuXG4gIGlmIChtYWNvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcbiAgICBvcyA9ICdNYWMgT1MnO1xuICB9IGVsc2UgaWYgKGlvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcbiAgICBvcyA9ICdpT1MnO1xuICB9IGVsc2UgaWYgKHdpbmRvd3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgb3MgPSAnV2luZG93cyc7XG4gIH0gZWxzZSBpZiAoL0FuZHJvaWQvLnRlc3QodXNlckFnZW50KSkge1xuICAgIG9zID0gJ0FuZHJvaWQnO1xuICB9IGVsc2UgaWYgKC9MaW51eC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICBvcyA9ICdMaW51eCc7XG4gIH1cblxuICByZXR1cm4gb3M7XG59O1xuXG5leHBvcnQgY29uc3QgVEFSR0VUX0VOViA9IChwcm9jZXNzLmVudi5UQVJHRVRfRU5WIHx8ICdleHRlbnNpb24nKSBhcyBUYXJnZXRFbnZpcm9ubWVudDtcblxuZXhwb3J0IGNvbnN0IE1PRFVMRV9TVVBQT1JUOiBFbnZpcm9ubWVudFN1cHBvcnQgPSB7XG4gIE1BTlRBX1pLOiBUQVJHRVRfRU5WID09PSAnZXh0ZW5zaW9uJ1xufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IEJpZ04gZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCBCTkV0aGVyIGZyb20gJ2JuLmpzJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBTaWduZWRUcmFuc2FjdGlvbiB9IGZyb20gJ3dlYjMtY29yZSc7XG5cbmltcG9ydCB7IGhleFN0cmlwUHJlZml4LCBudW1iZXJUb0hleCB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcblxuY29uc3QgaGV4VG9OdW1iZXJTdHJpbmcgPSAoczogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgdGVtcCA9IHBhcnNlSW50KHMsIDE2KTtcblxuICBpZiAoaXNOYU4odGVtcCkpIHtcbiAgICByZXR1cm4gJzAnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZW1wLnRvU3RyaW5nKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbiB7XG4gIHJlYWRvbmx5IG5vbmNlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGdhc1ByaWNlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGdhczogc3RyaW5nO1xuICByZWFkb25seSB0bzogc3RyaW5nO1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xuICByZWFkb25seSBkYXRhOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGV0aGVyZXVtQ2hhaW5JZDogc3RyaW5nO1xuICByZWFkb25seSBpc1NhZmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IgKG5vbmNlOiBzdHJpbmcsXG4gICAgZ2FzUHJpY2U6IHN0cmluZyxcbiAgICBnYXM6IHN0cmluZyxcbiAgICB0bzogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgZGF0YTogc3RyaW5nLFxuICAgIGV0aGVyZXVtQ2hhaW5JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5ub25jZSA9IGhleFRvTnVtYmVyU3RyaW5nKG5vbmNlKTtcbiAgICB0aGlzLmdhc1ByaWNlID0gaGV4VG9OdW1iZXJTdHJpbmcoZ2FzUHJpY2UpO1xuICAgIHRoaXMuZ2FzID0gaGV4VG9OdW1iZXJTdHJpbmcoZ2FzKTtcbiAgICB0aGlzLnRvID0gdG87XG4gICAgdGhpcy52YWx1ZSA9IGhleFRvTnVtYmVyU3RyaW5nKHZhbHVlKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8ICcnO1xuICAgIHRoaXMuZXRoZXJldW1DaGFpbklkID0gcGFyc2VJbnQoZXRoZXJldW1DaGFpbklkLCAxNikudG9TdHJpbmcoKTtcbiAgICB0aGlzLmlzU2FmZSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFueU51bWJlclRvQk4gPSAodmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBCTkV0aGVyKTogQmlnTiA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbmV3IEJpZ04odmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IEJpZ04oMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCaWdOKHZhbHVlLnRvTnVtYmVyKCkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNhY3Rpb25Gcm9tUkxQID0gKHJscDogc3RyaW5nKTogVHJhbnNhY3Rpb24gfCBudWxsID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGV0aGVycy5UcmFuc2FjdGlvbi5mcm9tKHJscCk7XG4gICAgY29uc3Qgbm9uY2UgPSB0cmFuc2FjdGlvbi5ub25jZS50b1N0cmluZygxNik7XG4gICAgY29uc3QgZ2FzUHJpY2UgPSB0cmFuc2FjdGlvbi5nYXNQcmljZT8udG9TdHJpbmcoMTYpIHx8ICcnO1xuICAgIGNvbnN0IGdhcyA9IHRyYW5zYWN0aW9uLmdhc0xpbWl0LnRvU3RyaW5nKDE2KTtcbiAgICBjb25zdCB0byA9IHRyYW5zYWN0aW9uLnRvIHx8ICcnO1xuICAgIGNvbnN0IHZhbHVlID0gdHJhbnNhY3Rpb24udmFsdWUudG9TdHJpbmcoMTYpO1xuICAgIGNvbnN0IGRhdGEgPSB0cmFuc2FjdGlvbi5kYXRhO1xuICAgIGNvbnN0IGV0aGVyZXVtQ2hhaW5JZCA9IHRyYW5zYWN0aW9uLmNoYWluSWQudG9TdHJpbmcoMTYpO1xuXG4gICAgcmV0dXJuIG5ldyBUcmFuc2FjdGlvbihub25jZSxcbiAgICAgIGdhc1ByaWNlLFxuICAgICAgZ2FzLFxuICAgICAgdG8sXG4gICAgICB2YWx1ZSxcbiAgICAgIGRhdGEsXG4gICAgICBldGhlcmV1bUNoYWluSWQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coKGUgYXMgRXJyb3IpLm1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaWduYXR1cmVUb0hleCA9IChzaWc6IFNpZ25lZFRyYW5zYWN0aW9uKTogc3RyaW5nID0+IHtcbiAgY29uc3QgdiA9IHBhcnNlSW50KHNpZy52KTtcbiAgY29uc3QgciA9IGhleFN0cmlwUHJlZml4KHNpZy5yKTtcbiAgY29uc3QgcyA9IGhleFN0cmlwUHJlZml4KHNpZy5zKTtcbiAgY29uc3QgaGV4UiA9IHIubGVuZ3RoICUgMiA9PT0gMSA/IGAwJHtyfWAgOiByO1xuICBjb25zdCBoZXhTID0gcy5sZW5ndGggJSAyID09PSAxID8gYDAke3N9YCA6IHM7XG4gIGNvbnN0IGhleFYgPSBoZXhTdHJpcFByZWZpeChudW1iZXJUb0hleCh2KSk7XG5cbiAgcmV0dXJuIGhleFIgKyBoZXhTICsgaGV4Vjtcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgSURfUFJFRklYIH0gZnJvbSAnLi4vZGVmYXVsdHMnO1xuXG5sZXQgY291bnRlciA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZCAoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke0lEX1BSRUZJWH0uJHtEYXRlLm5vdygpfS4keysrY291bnRlcn1gO1xufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IENyb3dkbG9hblBhcmFTdGF0ZSwgTW9iaWxlT1MsIE5ldHdvcmtKc29uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBBY2NvdW50QXV0aFR5cGUsIEFjY291bnRKc29uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL3R5cGVzJztcbmltcG9ydCB7IEFMTF9BQ0NPVU5UX0tFWSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE9TIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XG5cbmltcG9ydCB7IGFzc2VydCwgQk4sIGhleFRvVThhLCBpc0hleCB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbmltcG9ydCB7IGRlY29kZUFkZHJlc3MsIGVuY29kZUFkZHJlc3MsIGV0aGVyZXVtRW5jb2RlLCBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmV4cG9ydCB7IGNhbkRlcml2ZSB9IGZyb20gJy4vY2FuRGVyaXZlJztcblxuZXhwb3J0IGNvbnN0IG5vdERlZiA9ICh4OiBhbnkpID0+IHggPT09IG51bGwgfHwgdHlwZW9mIHggPT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IGNvbnN0IGlzRGVmID0gKHg6IGFueSkgPT4gIW5vdERlZih4KTtcbmV4cG9ydCBjb25zdCBub25FbXB0eUFyciA9ICh4OiBhbnkpID0+IEFycmF5LmlzQXJyYXkoeCkgJiYgeC5sZW5ndGggPiAwO1xuZXhwb3J0IGNvbnN0IGlzRW1wdHlBcnJheSA9ICh4OiBhbnkpID0+ICFBcnJheS5pc0FycmF5KHgpIHx8IChBcnJheS5pc0FycmF5KHgpICYmIHgubGVuZ3RoID09PSAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWNjb3VudEFsbCAoYWRkcmVzcz86IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gYWRkcmVzcyA9PT0gQUxMX0FDQ09VTlRfS0VZO1xufVxuXG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSBNb2JpbGVPUy5pbmNsdWRlcyhnZXRPUygpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZm9ybWF0QWRkcmVzcyAoYWRkcmVzczogc3RyaW5nLCBuZXR3b3JrUHJlZml4ID0gNDIsIGlzRXRoZXJldW0gPSBmYWxzZSk6IHN0cmluZyB7XG4gIHRyeSB7XG4gICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPT09ICcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKGlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MpKSB7XG4gICAgICByZXR1cm4gYWRkcmVzcztcbiAgICB9XG5cbiAgICBpZiAoaXNBY2NvdW50QWxsKGFkZHJlc3MpKSB7XG4gICAgICByZXR1cm4gYWRkcmVzcztcbiAgICB9XG5cbiAgICBjb25zdCBwdWJsaWNLZXkgPSBkZWNvZGVBZGRyZXNzKGFkZHJlc3MpO1xuXG4gICAgaWYgKGlzRXRoZXJldW0pIHtcbiAgICAgIHJldHVybiBldGhlcmV1bUVuY29kZShwdWJsaWNLZXkpO1xuICAgIH1cblxuICAgIGlmIChuZXR3b3JrUHJlZml4IDwgMCkge1xuICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY29kZUFkZHJlc3MocHVibGljS2V5LCBuZXR3b3JrUHJlZml4KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignR2V0IGVycm9yIHdoaWxlIHJlZm9ybWF0IGFkZHJlc3MnLCBhZGRyZXNzLCBlKTtcblxuICAgIHJldHVybiBhZGRyZXNzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJBZGRyZXNzQnlOZXR3b3JrS2V5IChhZGRyZXNzZXM6IHN0cmluZ1tdLCBuZXR3b3JrS2V5OiBzdHJpbmcsIGlzRXRoZXJldW0/OiBib29sZWFuKSB7XG4gIGlmIChpc0V0aGVyZXVtKSB7XG4gICAgcmV0dXJuIGFkZHJlc3Nlcy5maWx0ZXIoKGFkZHJlc3MpID0+IHtcbiAgICAgIHJldHVybiBpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYWRkcmVzc2VzLmZpbHRlcigoYWRkcmVzcykgPT4ge1xuICAgICAgcmV0dXJuICFpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2F0ZWdvcnlBZGRyZXNzZXMgKGFkZHJlc3Nlczogc3RyaW5nW10pIHtcbiAgY29uc3Qgc3Vic3RyYXRlQWRkcmVzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBldm1BZGRyZXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgYWRkcmVzc2VzLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICBpZiAoaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzcykpIHtcbiAgICAgIGV2bUFkZHJlc3Nlcy5wdXNoKGFkZHJlc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdHJhdGVBZGRyZXNzZXMucHVzaChhZGRyZXNzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbc3Vic3RyYXRlQWRkcmVzc2VzLCBldm1BZGRyZXNzZXNdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2F0ZWdvcnlOZXR3b3JrcyAobmV0d29ya3M6IE5ldHdvcmtKc29uW10pIHtcbiAgY29uc3Qgc3Vic3RyYXRlQWRkcmVzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBldm1BZGRyZXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgcmV0dXJuIFtzdWJzdHJhdGVBZGRyZXNzZXMsIGV2bUFkZHJlc3Nlc107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9Fdm1BZGRyZXNzIChzdWJzdHJhdGVBZGRyZXNzOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBhZGRyZXNzQnl0ZXMgPSBkZWNvZGVBZGRyZXNzKHN1YnN0cmF0ZUFkZHJlc3MpO1xuXG4gIHJldHVybiBldGhlcmV1bUVuY29kZSgnMHgnICsgQnVmZmVyLmZyb20oYWRkcmVzc0J5dGVzLnN1YmFycmF5KDAsIDIwKSkudG9TdHJpbmcoJ2hleCcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXJsICh0YXJnZXRTdHJpbmc6IHN0cmluZykge1xuICBsZXQgdXJsO1xuXG4gIHRyeSB7XG4gICAgdXJsID0gbmV3IFVSTCh0YXJnZXRTdHJpbmcpO1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gJ2h0dHA6JyB8fCB1cmwucHJvdG9jb2wgPT09ICdodHRwczonIHx8IHVybC5wcm90b2NvbCA9PT0gJ3dzczonO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5KZXN0VGVzdCAoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgcGFyc2VJcGZzTGluayA9IChpcGZzTGluazogc3RyaW5nKSA9PiB7XG4gIGlmICghaXBmc0xpbmsuaW5jbHVkZXMoJ2lwZnM6Ly9pcGZzLycpKSB7XG4gICAgcmV0dXJuIGlwZnNMaW5rO1xuICB9XG5cbiAgcmV0dXJuIGlwZnNMaW5rLnNwbGl0KCdpcGZzOi8vaXBmcy8nKVsxXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1N0ciAoYnVmOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgc3RyID0gJyc7XG4gIGxldCBoZXhTdGFydCA9IGJ1Zi5pbmRleE9mKCcweCcpO1xuXG4gIGlmIChoZXhTdGFydCA8IDApIHtcbiAgICBoZXhTdGFydCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaGV4U3RhcnQgPSAyO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IGhleFN0YXJ0LCBzdHJMZW4gPSBidWYubGVuZ3RoOyBpIDwgc3RyTGVuOyBpICs9IDIpIHtcbiAgICBjb25zdCBjaCA9IGJ1ZltpXSArIGJ1ZltpICsgMV07XG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoY2gsIDE2KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICBpZiAobnVtICE9IDApIHtcbiAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG51bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmV4cG9ydCBmdW5jdGlvbiB1dGYxNlRvU3RyaW5nICh1SW50MTZBcnJheTogQXJyYXk8bnVtYmVyPik6IHN0cmluZyB7XG4gIGxldCBzdHIgPSAnJztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdUludDE2QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1SW50MTZBcnJheVtpXSk7XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9VVEYxNiAoaGV4OiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgY29uc3QgYnVmID0gW107XG4gIGxldCBoZXhTdGFydCA9IGhleC5pbmRleE9mKCcweCcpO1xuXG4gIGlmIChoZXhTdGFydCA8IDApIHtcbiAgICBoZXhTdGFydCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaGV4U3RhcnQgPSAyO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IGhleFN0YXJ0LCBzdHJMZW4gPSBoZXgubGVuZ3RoOyBpIDwgc3RyTGVuOyBpICs9IDIpIHtcbiAgICBjb25zdCBjaCA9IGhleFtpXSArIGhleFtpICsgMV07XG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoY2gsIDE2KTtcblxuICAgIGJ1Zi5wdXNoKG51bSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRTdWJzdHJhdGVBZGRyZXNzID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGVuY29kZUFkZHJlc3MoXG4gICAgICBpc0hleChhZGRyZXNzKVxuICAgICAgICA/IGhleFRvVThhKGFkZHJlc3MpXG4gICAgICAgIDogZGVjb2RlQWRkcmVzcyhhZGRyZXNzKVxuICAgICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0b1VuaXQgPSAoYmFsYW5jZTogbnVtYmVyLCBkZWNpbWFsczogbnVtYmVyKSA9PiB7XG4gIGlmIChiYWxhbmNlID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gYmFsYW5jZSAvICgxMCAqKiBkZWNpbWFscyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3VtQk4gKGlucHV0QXJyOiBCTltdKSB7XG4gIGxldCBycyA9IG5ldyBCTigwKTtcblxuICBpbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIHJzID0gcnMuYWRkKGlucHV0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJzO1xufVxuXG5leHBvcnQgY29uc3QgY29udmVydEZ1bmRTdGF0dXMgPSAoc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgaWYgKHN0YXR1cyA9PT0gJ1dvbicgfHwgc3RhdHVzID09PSAnUmV0aXJpbmcnKSB7XG4gICAgcmV0dXJuIENyb3dkbG9hblBhcmFTdGF0ZS5DT01QTEVURUQ7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnU3RhcnRlZCcpIHtcbiAgICByZXR1cm4gQ3Jvd2Rsb2FuUGFyYVN0YXRlLk9OR09JTkc7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnRGlzc29sdmVkJykge1xuICAgIHJldHVybiBDcm93ZGxvYW5QYXJhU3RhdGUuRkFJTEVEO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc0FkZHJlc3Nlc0VxdWFsID0gKGFkZHJlc3Nlczogc3RyaW5nW10sIHByZXZBZGRyZXNzZXM6IHN0cmluZ1tdKSA9PiB7XG4gIGlmIChhZGRyZXNzZXMubGVuZ3RoICE9PSBwcmV2QWRkcmVzc2VzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAoY29uc3QgYWRkcmVzcyBvZiBhZGRyZXNzZXMpIHtcbiAgICBpZiAoIXByZXZBZGRyZXNzZXMuaW5jbHVkZXMoYWRkcmVzcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUHJvdmlkZXIgPSAocHJvdmlkZXI6IHN0cmluZykgPT4ge1xuICBpZiAoaXNVcmwocHJvdmlkZXIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAocHJvdmlkZXIuc3RhcnRzV2l0aCgnd3NzOi8vJykgfHwgcHJvdmlkZXIuc3RhcnRzV2l0aCgnbGlnaHQ6Ly8nKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRQcm92aWRlciA9IChkYXRhOiBOZXR3b3JrSnNvbikgPT4ge1xuICBpZiAoIWRhdGE/LmN1cnJlbnRQcm92aWRlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGRhdGEuY3VycmVudFByb3ZpZGVyLnN0YXJ0c1dpdGgoJ2N1c3RvbScpICYmIGRhdGEuY3VzdG9tUHJvdmlkZXJzKSB7XG4gICAgcmV0dXJuIGRhdGEuY3VzdG9tUHJvdmlkZXJzW2RhdGEuY3VycmVudFByb3ZpZGVyXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGF0YS5wcm92aWRlcnNbZGF0YS5jdXJyZW50UHJvdmlkZXJdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TmZ0UHJvdmlkZXIgPSAoZGF0YTogTmV0d29ya0pzb24pID0+IHtcbiAgaWYgKGRhdGEubmZ0UHJvdmlkZXIpIHtcbiAgICByZXR1cm4gZGF0YS5wcm92aWRlcnNbZGF0YS5uZnRQcm92aWRlcl07XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VOZXR3b3JrUHJvdmlkZXJzIChjdXN0b21OZXR3b3JrOiBOZXR3b3JrSnNvbiwgcHJlZGVmaW5lZE5ldHdvcms6IE5ldHdvcmtKc29uKSB7IC8vIG1lcmdlIHByb3ZpZGVycyBmb3IgMiBuZXR3b3JrcyB3aXRoIHRoZSBzYW1lIGdlbmVzaXNIYXNoXG4gIGlmIChjdXN0b21OZXR3b3JrLmN1c3RvbVByb3ZpZGVycykge1xuICAgIGNvbnN0IHBhcnNlZEN1c3RvbVByb3ZpZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGNvbnN0IGN1cnJlbnRQcm92aWRlciA9IGN1c3RvbU5ldHdvcmsuY3VzdG9tUHJvdmlkZXJzW2N1c3RvbU5ldHdvcmsuY3VycmVudFByb3ZpZGVyIHx8ICcnXSB8fCAnJztcbiAgICBjb25zdCBjdXJyZW50UHJvdmlkZXJNZXRob2QgPSBjdXJyZW50UHJvdmlkZXIuc3RhcnRzV2l0aCgnaHR0cCcpID8gJ2h0dHAnIDogJ3dzJztcbiAgICBsZXQgcGFyc2VkUHJvdmlkZXJLZXkgPSAnJztcblxuICAgIGZvciAoY29uc3QgY3VzdG9tUHJvdmlkZXIgb2YgT2JqZWN0LnZhbHVlcyhjdXN0b21OZXR3b3JrLmN1c3RvbVByb3ZpZGVycykpIHtcbiAgICAgIGxldCBleGlzdCA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHByb3ZpZGVyXSBvZiBPYmplY3QuZW50cmllcyhwcmVkZWZpbmVkTmV0d29yay5wcm92aWRlcnMpKSB7XG4gICAgICAgIGlmIChjdXJyZW50UHJvdmlkZXIgPT09IHByb3ZpZGVyKSB7IC8vIHBvaW50IGN1cnJlbnRQcm92aWRlciB0byBwcmVkZWZpbmVkXG4gICAgICAgICAgcGFyc2VkUHJvdmlkZXJLZXkgPSBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvdmlkZXIgPT09IGN1c3RvbVByb3ZpZGVyKSB7XG4gICAgICAgICAgZXhpc3QgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBPYmplY3QudmFsdWVzKHBhcnNlZEN1c3RvbVByb3ZpZGVycykubGVuZ3RoO1xuXG4gICAgICAgIHBhcnNlZEN1c3RvbVByb3ZpZGVyc1tgY3VzdG9tXyR7aW5kZXh9YF0gPSBjdXN0b21Qcm92aWRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHBhcnNlZFByb3ZpZGVyXSBvZiBPYmplY3QuZW50cmllcyhwYXJzZWRDdXN0b21Qcm92aWRlcnMpKSB7XG4gICAgICBpZiAoY3VycmVudFByb3ZpZGVyID09PSBwYXJzZWRQcm92aWRlcikge1xuICAgICAgICBwYXJzZWRQcm92aWRlcktleSA9IGtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBjdXJyZW50UHJvdmlkZXJNZXRob2QsIHBhcnNlZFByb3ZpZGVyS2V5LCBwYXJzZWRDdXN0b21Qcm92aWRlcnMgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBjdXJyZW50UHJvdmlkZXJNZXRob2Q6ICcnLCBwYXJzZWRQcm92aWRlcktleTogJycsIHBhcnNlZEN1c3RvbVByb3ZpZGVyczoge30gfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsdGVyQW5kU29ydGluZ0FjY291bnRCeUF1dGhUeXBlID0gKGFjY291bnRzOiBBY2NvdW50SnNvbltdLCBhY2NvdW50QXV0aFR5cGU6IEFjY291bnRBdXRoVHlwZSwgc29ydGluZyA9IGZhbHNlKSA9PiB7XG4gIGxldCBycyA9IFsuLi5hY2NvdW50c107XG5cbiAgcnMgPSBycy5maWx0ZXIoKGFjYykgPT4gYWNjLmFkZHJlc3MgIT09ICdBTEwnKTtcblxuICBpZiAoYWNjb3VudEF1dGhUeXBlID09PSAnc3Vic3RyYXRlJykge1xuICAgIHJzID0gcnMuZmlsdGVyKChhY2MpID0+IChhY2MudHlwZSAhPT0gJ2V0aGVyZXVtJykpO1xuICB9IGVsc2UgaWYgKGFjY291bnRBdXRoVHlwZSA9PT0gJ2V2bScpIHtcbiAgICBycyA9IHJzLmZpbHRlcigoYWNjKSA9PiAoYWNjLnR5cGUgPT09ICdldGhlcmV1bScpKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc29ydGluZykge1xuICAgICAgcnMuc29ydCgoYWNjLCBhY2MyKSA9PiB7XG4gICAgICAgIGlmICgoYWNjLnR5cGUgPT09ICdldGhlcmV1bScgJiYgYWNjMi50eXBlID09PSAnZXRoZXJldW0nKSB8fCAoYWNjLnR5cGUgIT09ICdldGhlcmV1bScgJiYgYWNjMi50eXBlICE9PSAnZXRoZXJldW0nKSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhY2MudHlwZSA9PT0gJ2V0aGVyZXVtJyA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmF3TnVtYmVyICh2YWx1ZTogc3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2VBbGwoJywnLCAnJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lQWRkcmVzcyAoYWRkcmVzczE6IHN0cmluZywgYWRkcmVzczI6IHN0cmluZykge1xuICBpZiAoaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzczEpKSB7XG4gICAgcmV0dXJuIGFkZHJlc3MxLnRvTG93ZXJDYXNlKCkgPT09IGFkZHJlc3MyLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICByZXR1cm4gcmVmb3JtYXRBZGRyZXNzKGFkZHJlc3MxLCAwKSA9PT0gcmVmb3JtYXRBZGRyZXNzKGFkZHJlc3MyLCAwKTsgLy8gVE9ETzogbWF5YmUgdGhlcmUncyBhIGJldHRlciB3YXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkZyb21VcmwgKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9eKGh0dHBzPzpcXC9cXC8pPyh3d3dcXC4pPy8sICcnKS5zcGxpdCgnLycpWzBdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdFRpbWVvdXQgKG1zOiBudW1iZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzdHJpcFVybCA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGFzc2VydCh1cmwgJiYgKHVybC5zdGFydHNXaXRoKCdodHRwOicpIHx8IHVybC5zdGFydHNXaXRoKCdodHRwczonKSB8fCB1cmwuc3RhcnRzV2l0aCgnaXBmczonKSB8fCB1cmwuc3RhcnRzV2l0aCgnaXBuczonKSksIHQoJ0ludmFsaWQgVVJMIGZvciBwcm92aWRlcicpKTtcblxuICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdCgnLycpO1xuXG4gIHJldHVybiBwYXJ0c1syXTtcbn07XG5cbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknO1xuZXhwb3J0ICogZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xhenknO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3RyeSc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zbGF0ZSc7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Vcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmludGVyZmFjZSBMYXp5SXRlbSB7XG4gIHRpbWVvdXQ/OiBOb2RlSlMuVGltZW91dDtcbiAgY2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gIGxhc3RGaXJlOiBudW1iZXI7XG59XG5cbmNvbnN0IGxhenlNYXA6IFJlY29yZDxzdHJpbmcsIExhenlJdGVtPiA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGF6eSAoa2V5OiBzdHJpbmcpIHtcbiAgaWYgKGxhenlNYXBba2V5XSkge1xuICAgIGNsZWFyVGltZW91dChsYXp5TWFwW2tleV0udGltZW91dCk7XG4gICAgZGVsZXRlIGxhenlNYXBba2V5XTtcbiAgfVxufVxuXG4vLyBBZGQgb3IgdXBkYXRlIG5ldyBsYXp5IHRocmVhZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZExhenkgKGtleTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCwgbGF6eVRpbWUgPSAzMDAsIG1heExhenlUaW1lID0gMzAwMCwgZmlyZU9uRmlyc3QgPSB0cnVlKSB7XG4gIGNvbnN0IGV4aXN0ZWQgPSBsYXp5TWFwW2tleV07XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIGlmIChleGlzdGVkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGV4aXN0ZWQudGltZW91dCk7XG4gICAgbGF6eU1hcFtrZXldID0ge1xuICAgICAgLi4uZXhpc3RlZCxcbiAgICAgIGNhbGxiYWNrXG4gICAgfTtcblxuICAgIC8vIEZpcmUgY2FsbGJhY2sgaWYgbGFzdCBmaXJlIGlzIHRvbyBsb25nXG4gICAgaWYgKG5vdyAtIGV4aXN0ZWQubGFzdEZpcmUgPj0gbWF4TGF6eVRpbWUpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICBsYXp5TWFwW2tleV0ubGFzdEZpcmUgPSBub3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhenlNYXBba2V5XS50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBmaXJlIGluIHRoZSBsYXN0IGNhbGwgb2YgbGF6eSB0aHJlYWRcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgbGF6eU1hcFtrZXldLmxhc3RGaXJlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHJlbW92ZUxhenkoa2V5KTtcbiAgICAgIH0sIGxhenlUaW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGZpcmVPbkZpcnN0KSB7XG4gICAgICAvLyBGaXJlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IGluIHRoZSBmaXJzdCB0aW1lXG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgbGF6eU1hcFtrZXldID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbGFzdEZpcmU6IG5vd1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF6eU1hcFtrZXldID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbGFzdEZpcmU6IG5vd1xuICAgICAgfTtcblxuICAgICAgbGF6eU1hcFtrZXldLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGZpcmUgaW4gdGhlIGxhc3QgY2FsbCBvZiBsYXp5IHRocmVhZFxuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICBsYXp5TWFwW2tleV0ubGFzdEZpcmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgcmVtb3ZlTGF6eShrZXkpO1xuICAgICAgfSwgbGF6eVRpbWUpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCBCaWdOdW1iZXIgZnJvbSAnYmlnbnVtYmVyLmpzJztcblxuZXhwb3J0IGNvbnN0IEJOX1RFTiA9IG5ldyBCaWdOdW1iZXIoMTApO1xuZXhwb3J0IGludGVyZmFjZSBOdW1iZXJGb3JtYXR0ZXIge1xuICAoaW5wdXQ6IHN0cmluZywgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTogc3RyaW5nO1xufVxuXG4vLyBDbGVhciB6ZXJvIGZyb20gZW5kLCB1c2Ugd2l0aCBkZWNpbWFsIG9ubHlcbmNvbnN0IGNsZWFyWmVybyA9IChyZXN1bHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGxldCBpbmRleCA9IHJlc3VsdC5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChyZXN1bHRbaW5kZXhdID09PSAnMCcpIHtcbiAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgaW5kZXgpO1xuICAgIGluZGV4LS07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgTlVNXzFUID0gbmV3IEJpZ051bWJlcigxZTEyKTtcbmNvbnN0IFRMSU0gPSBuZXcgQmlnTnVtYmVyKDFlMTcpO1xuY29uc3QgTlVNXzFCID0gbmV3IEJpZ051bWJlcigxZTkpO1xuY29uc3QgQkxJTSA9IG5ldyBCaWdOdW1iZXIoMWUxNCk7XG5jb25zdCBOVU1fMU0gPSBuZXcgQmlnTnVtYmVyKDFlNik7XG5jb25zdCBOVU1fMTAwTSA9IG5ldyBCaWdOdW1iZXIoMWU4KTtcblxuZXhwb3J0IGNvbnN0IGJhbGFuY2VGb3JtYXR0ZXI6IE51bWJlckZvcm1hdHRlciA9IChcbiAgaW5wdXQ6IHN0cmluZyxcbiAgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBhYnNHdGVPbmUgPSBuZXcgQmlnTnVtYmVyKGlucHV0KS5hYnMoKS5ndGUoMSk7XG4gIGNvbnN0IG1pbk51bWJlckZvcm1hdCA9IG1ldGFkYXRhPy5taW5OdW1iZXJGb3JtYXQgfHwgMjtcbiAgY29uc3QgbWF4TnVtYmVyRm9ybWF0ID0gbWV0YWRhdGE/Lm1heE51bWJlckZvcm1hdCB8fCA2O1xuXG4gIGNvbnN0IFtpbnQsIGRlY2ltYWwgPSAnMCddID0gaW5wdXQuc3BsaXQoJy4nKTtcbiAgbGV0IF9kZWNpbWFsID0gJyc7XG5cbiAgaWYgKGFic0d0ZU9uZSkge1xuICAgIGNvbnN0IGludE51bWJlciA9IG5ldyBCaWdOdW1iZXIoaW50KTtcbiAgICBjb25zdCBtYXggPSBCTl9URU4ucG93KG1heE51bWJlckZvcm1hdCk7XG5cbiAgICAvLyBJZiBjb3VudCBvZiBudW1iZXIgaW4gaW50ZWdlciBwYXJ0IGdyZWF0ZXIgb3IgZXF1YWwgbWF4TnVtYmVyRm9ybWF0LCBkbyBub3Qgc2hvdyBkZWNpbWFsXG4gICAgaWYgKGludE51bWJlci5ndGUobWF4KSkge1xuICAgICAgaWYgKGludE51bWJlci5ndGUoTlVNXzEwME0pKSB7XG4gICAgICAgIGlmIChpbnROdW1iZXIuZ3RlKEJMSU0pKSB7XG4gICAgICAgICAgaWYgKGludE51bWJlci5ndGUoVExJTSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtpbnROdW1iZXIuZGl2aWRlZEJ5KE5VTV8xVCkudG9GaXhlZCgyKX0gVGA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGAke2ludE51bWJlci5kaXZpZGVkQnkoTlVNXzFCKS50b0ZpeGVkKDIpfSBCYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtpbnROdW1iZXIuZGl2aWRlZEJ5KE5VTV8xTSkudG9GaXhlZCgyKX0gTWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnQ7XG4gICAgfVxuXG4gICAgLy8gR2V0IG9ubHkgbWluTnVtYmVyRm9ybWF0IG51bWJlciBhdCBkZWNpbWFsXG4gICAgaWYgKGRlY2ltYWwubGVuZ3RoIDw9IG1pbk51bWJlckZvcm1hdCkge1xuICAgICAgX2RlY2ltYWwgPSBkZWNpbWFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBfZGVjaW1hbCA9IGRlY2ltYWwuc2xpY2UoMCwgbWluTnVtYmVyRm9ybWF0KTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB6ZXJvIG51bWJlciBmb3IgZGVjaW1hbFxuICAgIF9kZWNpbWFsID0gY2xlYXJaZXJvKF9kZWNpbWFsKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJbmRleCBvZiBjdXJzb3JcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgLy8gQ291bnQgb2Ygbm90IHplcm8gbnVtYmVyIGluIGRlY2ltYWxcbiAgICBsZXQgY3VycmVudCA9IDA7XG5cbiAgICAvLyBGaW5kIGEgbm90IHplcm8gbnVtYmVyIGluIGRlY2ltYWxcbiAgICBsZXQgbWV0Tm90WmVybyA9IGZhbHNlO1xuXG4gICAgLy8gR2V0IGF0IGxlYXN0IG1pbk51bWJlckZvcm1hdCBudW1iZXIgbm90IDAgZnJvbSBpbmRleCAwXG4gICAgLy8gSWYgY291bnQgb2YgMCBudW1iZXIgYXQgcHJlZml4IGdyZWF0ZXIgb3IgZXF1YWwgbWF4TnVtYmVyRm9ybWF0IHNob3VsZCBzdG9wIGFuZCByZXR1cm4gMFxuXG4gICAgLy8gY3VycmVudCA9PT0gbWluTnVtYmVyRm9ybWF0OiBnZXQgZW5vdWdoIG51bWJlclxuICAgIC8vIGluZGV4ID09PSBkZWNpbWFsLmxlbmd0aDogZW5kIG9mIGRlY2ltYWxcbiAgICAvLyBpbmRleCA9PT0gbWF4TnVtYmVyRm9ybWF0OiByZWFjaCBsaW1pdCBvZiAwIG51bWJlciBhdCBwcmVmaXhcbiAgICB3aGlsZSAoXG4gICAgICBjdXJyZW50IDwgbWluTnVtYmVyRm9ybWF0ICYmXG4gICAgICBpbmRleCA8IGRlY2ltYWwubGVuZ3RoICYmXG4gICAgICAoaW5kZXggPCBtYXhOdW1iZXJGb3JtYXQgfHwgbWV0Tm90WmVybylcbiAgICApIHtcbiAgICAgIGNvbnN0IF9jaGFyID0gZGVjaW1hbFtpbmRleF07XG5cbiAgICAgIF9kZWNpbWFsICs9IF9jaGFyO1xuICAgICAgaW5kZXgrKztcblxuICAgICAgaWYgKF9jaGFyICE9PSAnMCcpIHtcbiAgICAgICAgbWV0Tm90WmVybyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXROb3RaZXJvKSB7XG4gICAgICAgIGN1cnJlbnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGVhciB6ZXJvIG51bWJlciBmb3IgZGVjaW1hbFxuICAgIF9kZWNpbWFsID0gY2xlYXJaZXJvKF9kZWNpbWFsKTtcbiAgfVxuXG4gIGlmIChfZGVjaW1hbCkge1xuICAgIHJldHVybiBgJHtpbnR9LiR7X2RlY2ltYWx9YDtcbiAgfVxuXG4gIHJldHVybiBpbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgUFJFREVGSU5FRF9GT1JNQVRURVI6IFJlY29yZDxzdHJpbmcsIE51bWJlckZvcm1hdHRlcj4gPSB7XG4gIGJhbGFuY2U6IGJhbGFuY2VGb3JtYXR0ZXJcbn07XG5cbmV4cG9ydCBjb25zdCB0b0JOU3RyaW5nID0gKGlucHV0OiBzdHJpbmcgfCBudW1iZXIgfCBCaWdOdW1iZXIsIGRlY2ltYWw6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHJhdyA9IG5ldyBCaWdOdW1iZXIoaW5wdXQpO1xuXG4gIHJldHVybiByYXcubXVsdGlwbGllZEJ5KEJOX1RFTi5wb3coZGVjaW1hbCkpLnRvRml4ZWQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXIgPSAoXG4gIGlucHV0OiBzdHJpbmcgfCBudW1iZXIgfCBCaWdOdW1iZXIsXG4gIGRlY2ltYWw6IG51bWJlcixcbiAgZm9ybWF0dGVyOiBOdW1iZXJGb3JtYXR0ZXIsXG4gIG1ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcmF3ID0gbmV3IEJpZ051bWJlcihpbnB1dCkuZGl2aWRlZEJ5KEJOX1RFTi5wb3coZGVjaW1hbCkpLnRvRml4ZWQoKTtcblxuICByZXR1cm4gZm9ybWF0dGVyKHJhdywgbWV0YWRhdGEpO1xufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb21pc2VIYW5kbGVyPFQ+ICgpIHtcbiAgbGV0IF9yZXNvbHZlOiAodmFsdWU6IFQpID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKCdUaGlzIHByb21pc2UgaGFuZGxlciBpcyBub3QgaW1wbGVtZW50ZWQnKTtcbiAgfTtcblxuICBsZXQgX3JlamVjdDogKHJlYXNvbj86IHVua25vd24pID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKCdUaGlzIHByb21pc2UgaGFuZGxlciBpcyBub3QgaW1wbGVtZW50ZWQnKTtcbiAgfTtcblxuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBfcmVqZWN0ID0gcmVqZWN0O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJlc29sdmU6IF9yZXNvbHZlLFxuICAgIHJlamVjdDogX3JlamVjdCxcbiAgICBwcm9taXNlXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFByb21pc2VIYW5kbGVyPFQ+ID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUHJvbWlzZUhhbmRsZXI8VD4+O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQ2hhaW5JbmZvIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IF9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3V0aWxzJztcblxuaW1wb3J0IHsgTWV0YWRhdGEsIFR5cGVSZWdpc3RyeSB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcyc7XG5pbXBvcnQgeyBDaGFpblByb3BlcnRpZXMgfSBmcm9tICdAcG9sa2Fkb3QvdHlwZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBIZXhTdHJpbmcgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZWdpc3RyeSA9IChjaGFpbjogX0NoYWluSW5mbywgcmF3TWV0YWRhdGE6IEhleFN0cmluZyk6IFJlZ2lzdHJ5ID0+IHtcbiAgY29uc3QgcmVnaXN0cnk6IFJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpO1xuICBjb25zdCBtZXRhZGF0YSA9IG5ldyBNZXRhZGF0YShyZWdpc3RyeSwgcmF3TWV0YWRhdGEpO1xuXG4gIHJlZ2lzdHJ5LnNldE1ldGFkYXRhKG1ldGFkYXRhKTtcblxuICBjb25zdCB0b2tlbkluZm8gPSBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyhjaGFpbik7XG5cbiAgcmVnaXN0cnkuc2V0Q2hhaW5Qcm9wZXJ0aWVzKHJlZ2lzdHJ5LmNyZWF0ZVR5cGUoJ0NoYWluUHJvcGVydGllcycsIHtcbiAgICBzczU4Rm9ybWF0OiBjaGFpbi5zdWJzdHJhdGVJbmZvPy5hZGRyZXNzUHJlZml4IHx8IDQyLFxuICAgIHRva2VuRGVjaW1hbHM6IHRva2VuSW5mby5kZWNpbWFscyxcbiAgICB0b2tlblN5bWJvbDogdG9rZW5JbmZvLnN5bWJvbFxuICB9KSBhcyB1bmtub3duIGFzIENoYWluUHJvcGVydGllcyk7XG5cbiAgcmV0dXJuIHJlZ2lzdHJ5O1xufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tYmFzZVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IGNvbnN0IGRldGVjdFRyYW5zbGF0ZSA9IChtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcgPT4gbWVzc2FnZTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1jaGFpbnMgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHR5cGUgeyBNZXRhZGF0YURlZiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWluamVjdC90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IENoYWluUHJvcGVydGllcyB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB0eXBlIHsgQ2hhaW4gfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHsgTWV0YWRhdGEsIFR5cGVSZWdpc3RyeSB9IGZyb20gJ0Bwb2xrYWRvdC90eXBlcyc7XG5pbXBvcnQgeyBiYXNlNjREZWNvZGUgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG5leHBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJy4vcGFja2FnZUluZm8nO1xuXG4vLyBpbXBvcnRzIGNoYWluIGRldGFpbHMsIGdlbmVyYWxseSBtZXRhZGF0YS4gRm9yIHRoZSBnZW5lcmF0aW9uIG9mIHRoZXNlLFxuLy8gaW5zaWRlIHRoZSBhcGksIHJ1biBgeWFybiBjaGFpbjppbmZvIC0td3MgPHVybD5gXG5cbmNvbnN0IGRlZmluaXRpb25zID0gbmV3IE1hcDxzdHJpbmcsIE1ldGFkYXRhRGVmPihcbiAgLy8gW2t1c2FtYV0ubWFwKChkZWYpID0+IFtkZWYuZ2VuZXNpc0hhc2gsIGRlZl0pXG4pO1xuXG5jb25zdCBleHBhbmRlZCA9IG5ldyBNYXA8c3RyaW5nLCBDaGFpbj4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFkYXRhRXhwYW5kIChkZWZpbml0aW9uOiBNZXRhZGF0YURlZiwgaXNQYXJ0aWFsID0gZmFsc2UpOiBDaGFpbiB7XG4gIGNvbnN0IGNhY2hlZCA9IGV4cGFuZGVkLmdldChkZWZpbml0aW9uLmdlbmVzaXNIYXNoKTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5zcGVjVmVyc2lvbiA9PT0gZGVmaW5pdGlvbi5zcGVjVmVyc2lvbikge1xuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cblxuICBjb25zdCB7IGNoYWluLCBnZW5lc2lzSGFzaCwgaWNvbiwgbWV0YUNhbGxzLCBzcGVjVmVyc2lvbiwgc3M1OEZvcm1hdCwgdG9rZW5EZWNpbWFscywgdG9rZW5TeW1ib2wsIHR5cGVzLCB1c2VyRXh0ZW5zaW9ucyB9ID0gZGVmaW5pdGlvbjtcbiAgY29uc3QgcmVnaXN0cnkgPSBuZXcgVHlwZVJlZ2lzdHJ5KCk7XG5cbiAgaWYgKCFpc1BhcnRpYWwpIHtcbiAgICByZWdpc3RyeS5yZWdpc3Rlcih0eXBlcyk7XG4gIH1cblxuICByZWdpc3RyeS5zZXRDaGFpblByb3BlcnRpZXMocmVnaXN0cnkuY3JlYXRlVHlwZSgnQ2hhaW5Qcm9wZXJ0aWVzJywge1xuICAgIHNzNThGb3JtYXQsXG4gICAgdG9rZW5EZWNpbWFscyxcbiAgICB0b2tlblN5bWJvbFxuICB9KSBhcyB1bmtub3duIGFzIENoYWluUHJvcGVydGllcyk7XG5cbiAgY29uc3QgaGFzTWV0YWRhdGEgPSAhIW1ldGFDYWxscyAmJiAhaXNQYXJ0aWFsO1xuXG4gIGlmIChoYXNNZXRhZGF0YSkge1xuICAgIHJlZ2lzdHJ5LnNldE1ldGFkYXRhKG5ldyBNZXRhZGF0YShyZWdpc3RyeSwgYmFzZTY0RGVjb2RlKG1ldGFDYWxscykpLCB1bmRlZmluZWQsIHVzZXJFeHRlbnNpb25zKTtcbiAgfVxuXG4gIGNvbnN0IGlzVW5rbm93biA9IGdlbmVzaXNIYXNoID09PSAnMHgnO1xuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBkZWZpbml0aW9uLFxuICAgIGdlbmVzaXNIYXNoOiBpc1Vua25vd25cbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IGdlbmVzaXNIYXNoLFxuICAgIGhhc01ldGFkYXRhLFxuICAgIGljb246IGljb24gfHwgJ3N1YnN0cmF0ZScsXG4gICAgaXNVbmtub3duLFxuICAgIG5hbWU6IGNoYWluLFxuICAgIHJlZ2lzdHJ5LFxuICAgIHNwZWNWZXJzaW9uLFxuICAgIHNzNThGb3JtYXQsXG4gICAgdG9rZW5EZWNpbWFscyxcbiAgICB0b2tlblN5bWJvbFxuICB9O1xuXG4gIGlmIChyZXN1bHQuZ2VuZXNpc0hhc2ggJiYgIWlzUGFydGlhbCkge1xuICAgIGV4cGFuZGVkLnNldChyZXN1bHQuZ2VuZXNpc0hhc2gsIHJlc3VsdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZENoYWluIChkZWZpbml0aW9uczogTWV0YWRhdGFEZWZbXSwgZ2VuZXNpc0hhc2g/OiBzdHJpbmcgfCBudWxsKTogQ2hhaW4gfCBudWxsIHtcbiAgY29uc3QgZGVmID0gZGVmaW5pdGlvbnMuZmluZCgoZGVmKSA9PiBkZWYuZ2VuZXNpc0hhc2ggPT09IGdlbmVzaXNIYXNoKTtcblxuICByZXR1cm4gZGVmXG4gICAgPyBtZXRhZGF0YUV4cGFuZChkZWYpXG4gICAgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWV0YWRhdGEgKGRlZjogTWV0YWRhdGFEZWYpOiB2b2lkIHtcbiAgZGVmaW5pdGlvbnMuc2V0KGRlZi5nZW5lc2lzSGFzaCwgZGVmKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtub3duTWV0YWRhdGEgKCk6IE1ldGFkYXRhRGVmW10ge1xuICByZXR1cm4gWy4uLmRlZmluaXRpb25zLnZhbHVlcygpXTtcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE3LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24tY2hhaW5zIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIERvIG5vdCBlZGl0LCBhdXRvLWdlbmVyYXRlZCBieSBAcG9sa2Fkb3QvZGV2XG5cbmV4cG9ydCBjb25zdCBwYWNrYWdlSW5mbyA9IHsgbmFtZTogJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWNoYWlucycsIHBhdGg6ICdhdXRvJywgdHlwZTogJ2F1dG8nLCB2ZXJzaW9uOiAnMS4xLjE3LTAnIH07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgVThBX1dSQVBfRVRIRVJFVU0sIFU4QV9XUkFQX1BPU1RGSVgsIFU4QV9XUkFQX1BSRUZJWCwgdThhSXNXcmFwcGVkLCB1OGFVbndyYXBCeXRlcywgdThhV3JhcEJ5dGVzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuXG5leHBvcnQgY29uc3QgRVRIRVJFVU0gPSBVOEFfV1JBUF9FVEhFUkVVTTtcbmV4cG9ydCBjb25zdCBQT1NURklYID0gVThBX1dSQVBfUE9TVEZJWDtcbmV4cG9ydCBjb25zdCBQUkVGSVggPSBVOEFfV1JBUF9QUkVGSVg7XG5cbmV4cG9ydCBjb25zdCBpc1dyYXBwZWQgPSB1OGFJc1dyYXBwZWQ7XG5leHBvcnQgY29uc3QgdW53cmFwQnl0ZXMgPSB1OGFVbndyYXBCeXRlcztcbmV4cG9ydCBjb25zdCB3cmFwQnl0ZXMgPSB1OGFXcmFwQnl0ZXM7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24taW5qZWN0IGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IGV4cG9zZUdsb2JhbCwgeGdsb2JhbCB9IGZyb20gJ0Bwb2xrYWRvdC94LWdsb2JhbCc7XG5cbmV4cG9zZUdsb2JhbCgnY2hyb21lJywgeGdsb2JhbC5icm93c2VyKTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSdW50aW1lRW52aXJvbm1lbnQiLCJTdGFraW5nVHlwZSIsIkFQSUl0ZW1TdGF0ZSIsIlJNUktfVkVSIiwiQ3Jvd2Rsb2FuUGFyYVN0YXRlIiwiQ29udHJhY3RUeXBlIiwiV2FsbGV0VW5sb2NrVHlwZSIsIlRyYW5zYWN0aW9uRGlyZWN0aW9uIiwiQ2hhaW5UeXBlIiwiRXh0cmluc2ljVHlwZSIsIkV4dHJpbnNpY1N0YXR1cyIsIkJhc2ljVHhFcnJvclR5cGUiLCJTdGFraW5nVHhFcnJvclR5cGUiLCJUcmFuc2ZlclR4RXJyb3JUeXBlIiwiQmFzaWNUeFdhcm5pbmdDb2RlIiwiQmFsYW5jZUVycm9yVHlwZSIsIlByb3ZpZGVyRXJyb3JUeXBlIiwiQWNjb3VudEV4dGVybmFsRXJyb3JDb2RlIiwiRXh0ZXJuYWxSZXF1ZXN0UHJvbWlzZVN0YXR1cyIsIlRoZW1lTmFtZXMiLCJORVRXT1JLX0VSUk9SIiwiTkVUV09SS19TVEFUVVMiLCJFdm1Qcm92aWRlckVycm9yVHlwZSIsIlVuc3Rha2luZ1N0YXR1cyIsIlN0YWtpbmdTdGF0dXMiLCJDaGFpbkVkaXRTdGFuZGFyZCIsIk5vdGlmaWNhdGlvblR5cGUiLCJNYW50YVBheUVuYWJsZU1lc3NhZ2UiLCJNb2JpbGVPUyIsIkNST05fUkVGUkVTSF9QUklDRV9JTlRFUlZBTCIsIkNST05fQVVUT19SRUNPVkVSX0RPVFNBTUFfSU5URVJWQUwiLCJDUk9OX0FVVE9fUkVDT1ZFUl9XRUIzX0lOVEVSVkFMIiwiQUNBTEFfUkVGUkVTSF9DUk9XRExPQU5fSU5URVJWQUwiLCJBU1RBUl9SRUZSRVNIX0JBTEFOQ0VfSU5URVJWQUwiLCJTVUJfVE9LRU5fUkVGUkVTSF9CQUxBTkNFX0lOVEVSVkFMIiwiQ1JPTl9SRUZSRVNIX05GVF9JTlRFUlZBTCIsIkNST05fUkVGUkVTSF9TVEFLSU5HX1JFV0FSRF9JTlRFUlZBTCIsIkNST05fUkVGUkVTSF9TVEFLSU5HX1JFV0FSRF9GQVNUX0lOVEVSVkFMIiwiQ1JPTl9SRUZSRVNIX0hJU1RPUllfSU5URVJWQUwiLCJDUk9OX0dFVF9BUElfTUFQX1NUQVRVUyIsIkNST05fUkVGUkVTSF9DSEFJTl9TVEFLSU5HX01FVEFEQVRBIiwiQ1JPTl9SRUZSRVNIX0NIQUlOX05PTUlOQVRPUl9NRVRBREFUQSIsIkNST05fUkVDT1ZFUl9ISVNUT1JZX0lOVEVSVkFMIiwiQ1JPTl9TWU5DX01BTlRBX1BBWSIsIk1BTlRBX1BBWV9CQUxBTkNFX0lOVEVSVkFMIiwiQUxMX0FDQ09VTlRfS0VZIiwiQUxMX05FVFdPUktfS0VZIiwiQUxMX0dFTkVTSVNfSEFTSCIsIklHTk9SRV9HRVRfU1VCU1RSQVRFX0ZFQVRVUkVTX0xJU1QiLCJJR05PUkVfUVJfU0lHTkVSIiwiWENNX01JTl9BTU9VTlRfUkFUSU8iLCJQUkVERUZJTkVEX1NUQUtJTkdfUE9PTCIsImt1c2FtYSIsInBvbGthZG90IiwiTEFOR1VBR0UiLCJBTExPV0VEX1BBVEgiLCJQSElTSElOR19QQUdFX1JFRElSRUNUIiwiRVhURU5TSU9OX1BSRUZJWCIsInByb2Nlc3MiLCJlbnYiLCJJRF9QUkVGSVgiLCJQT1JUX01PQklMRSIsIlBPUlRfQ09OVEVOVCIsIlBPUlRfRVhURU5TSU9OIiwiTUVTU0FHRV9PUklHSU5fUEFHRSIsIk1FU1NBR0VfT1JJR0lOX0NPTlRFTlQiLCJQQVNTV09SRF9FWFBJUllfTUlOIiwiUEFTU1dPUkRfRVhQSVJZX01TIiwicmVzb2x2ZUFkZHJlc3NUb0RvbWFpbiIsInJlc29sdmVEb21haW5Ub0FkZHJlc3MiLCJTdXBwb3J0ZWRDaGFpbklkIiwiRU5TX1NVRkZJWCIsIlRaRVJPX0lEX1NVRkZJWCIsIkFaRVJPX0lEX1NVRkZJWCIsIlNVUFBPUlRFRF9ET01BSU5fU1VGRklYIiwiQ0hBSU5TX1NVUFBPUlRFRF9ET01BSU4iLCJBWkVST19ET01BSU5fQ09OVFJBQ1RTIiwicmVzb2x2ZUF6ZXJvRG9tYWluVG9BZGRyZXNzIiwiZG9tYWluIiwiY2hhaW4iLCJhcGkiLCJjaGFpbklkIiwiQWxlcGhaZXJvIiwiQWxlcGhaZXJvVGVzdG5ldCIsInByaW1hcnlEb21haW5zIiwiY3VzdG9tQXBpIiwiZXJyb3IiLCJjb25zb2xlIiwiZGVidWciLCJhZGRyZXNzIiwidW5kZWZpbmVkIiwicmVzb2x2ZUF6ZXJvQWRkcmVzc1RvRG9tYWluIiwicHJpbWFyeURvbWFpbiIsImlzQXplcm9Eb21haW4iLCJpbnB1dCIsImluY2x1ZGVzIiwiZ2V0U3Rha2luZ1N0YXR1c0J5Tm9taW5hdGlvbnMiLCJfU1RBS0lOR19FUkFfTEVOR1RIX01BUCIsImlzVXJsIiwicGFyc2VSYXdOdW1iZXIiLCJmZXRjaCIsIkJOIiwiQk5fWkVSTyIsImlzRXRoZXJldW1BZGRyZXNzIiwic3Vic2NyaWJlQXN0YXJTdGFraW5nTWV0YWRhdGEiLCJzdWJzdHJhdGVBcGkiLCJjYWxsYmFjayIsInF1ZXJ5IiwiZGFwcHNTdGFraW5nIiwiY3VycmVudEVyYSIsIl9jdXJyZW50RXJhIiwiZXJhIiwidG9TdHJpbmciLCJtaW5EZWxlZ2F0b3JTdGFrZSIsImNvbnN0cyIsIm1pbmltdW1TdGFraW5nQW1vdW50IiwidW5zdGFraW5nRGVsYXkiLCJ1bmJvbmRpbmdQZXJpb2QiLCJ1bnN0YWtpbmdQZXJpb2QiLCJwYXJzZUludCIsInR5cGUiLCJOT01JTkFURUQiLCJtaW5TdGFrZSIsIm1heFZhbGlkYXRvclBlck5vbWluYXRvciIsIm1heFdpdGhkcmF3YWxSZXF1ZXN0UGVyVmFsaWRhdG9yIiwiYWxsb3dDYW5jZWxVbnN0YWtpbmciLCJnZXRBc3RhclN0YWtpbmdNZXRhZGF0YSIsImFwclByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInRoZW4iLCJyZXNwIiwianNvbiIsImNhdGNoIiwidGltZW91dCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImFwclJhY2VQcm9taXNlIiwicmFjZSIsImFwckluZm8iLCJjaGFpbkFwaSIsImFsbCIsImlzUmVhZHkiLCJleHBlY3RlZFJldHVybiIsInN1YnNjcmliZUFzdGFyTm9taW5hdG9yTWV0YWRhdGEiLCJjaGFpbkluZm8iLCJsZWRnZXIiLCJub21pbmF0aW9uTGlzdCIsInVuc3Rha2luZ0xpc3QiLCJhbGxEYXBwc1JlcSIsInNsdWciLCJfYWxsRGFwcHMiLCJfZXJhIiwiX3N0YWtlckluZm8iLCJnZW5lcmFsU3Rha2VySW5mbyIsImVudHJpZXMiLCJhbGxEYXBwcyIsImJuVG90YWxBY3RpdmVTdGFrZSIsImxlbmd0aCIsImRBcHBJbmZvTWFwIiwiZm9yRWFjaCIsImRhcHBJbmZvIiwidG9Mb3dlckNhc2UiLCJpdGVtIiwiZGF0YSIsInRvSHVtYW4iLCJzdGFrZWREYXBwIiwic3Rha2VEYXRhIiwidG9QcmltaXRpdmUiLCJzdGFrZUxpc3QiLCJzdGFrZXMiLCJkYXBwQWRkcmVzcyIsIkV2bSIsIldhc20iLCJjdXJyZW50U3Rha2UiLCJzbGljZSIsInN0YWtlZCIsImJuQ3VycmVudFN0YWtlIiwiZ3QiLCJkYXBwU3Rha2luZ1N0YXR1cyIsImd0ZSIsIkVBUk5JTkdfUkVXQVJEIiwiTk9UX0VBUk5JTkciLCJhZGQiLCJwdXNoIiwic3RhdHVzIiwidmFsaWRhdG9yQWRkcmVzcyIsImFjdGl2ZVN0YWtlIiwidmFsaWRhdG9yTWluU3Rha2UiLCJ2YWxpZGF0b3JJZGVudGl0eSIsIm5hbWUiLCJoYXNVbnN0YWtpbmciLCJ1bmxvY2tpbmdDaHVua3MiLCJ1bmJvbmRpbmdJbmZvIiwidW5sb2NraW5nQ2h1bmsiLCJpc0NsYWltYWJsZSIsInVubG9ja0VyYSIsInJlbWFpbmluZ0VyYSIsIndhaXRpbmdUaW1lIiwiQ0xBSU1BQkxFIiwiVU5MT0NLSU5HIiwiY2xhaW1hYmxlIiwiYW1vdW50IiwiTk9UX1NUQUtJTkciLCJub21pbmF0aW9ucyIsInVuc3Rha2luZ3MiLCJzdGFraW5nU3RhdHVzIiwiZ2V0QXN0YXJOb21pbmF0b3JNZXRhZGF0YSIsIl9sZWRnZXIiLCJnZXRBc3RhckRhcHBzSW5mbyIsIm5ldHdvcmtLZXkiLCJyYXdNYXhTdGFrZXJQZXJDb250cmFjdCIsIm1heE51bWJlck9mU3Rha2Vyc1BlckNvbnRyYWN0IiwiYWxsRGFwcHNJbmZvIiwibWF4U3Rha2VyUGVyQ29udHJhY3QiLCJtYXAiLCJkYXBwIiwiZGFwcE5hbWUiLCJkYXBwSWNvbiIsImljb25VcmwiLCJjb250cmFjdFBhcmFtIiwiX2NvbnRyYWN0SW5mbyIsImNvbnRyYWN0RXJhU3Rha2UiLCJjb250cmFjdEluZm8iLCJ0b3RhbFN0YWtlIiwic3Rha2VyQ291bnQiLCJ0b3RhbCIsIm51bWJlck9mU3Rha2VycyIsImNvbW1pc3Npb24iLCJvd25TdGFrZSIsIm90aGVyU3Rha2UiLCJub21pbmF0b3JDb3VudCIsImJsb2NrZWQiLCJpc1ZlcmlmaWVkIiwibWluQm9uZCIsImljb24iLCJpZGVudGl0eSIsImlzQ3Jvd2RlZCIsImdldEFzdGFyQm9uZGluZ0V4dHJpbnNpYyIsImJpbmFyeUFtb3VudCIsImRhcHBQYXJhbSIsInR4IiwiYm9uZEFuZFN0YWtlIiwiZ2V0QXN0YXJVbmJvbmRpbmdFeHRyaW5zaWMiLCJhcGlQcm9taXNlIiwidW5ib25kQW5kVW5zdGFrZSIsImdldEFzdGFyV2l0aGRyYXdhbEV4dHJpbnNpYyIsIndpdGhkcmF3VW5ib25kZWQiLCJnZXRBc3RhckNsYWltUmV3YXJkRXh0cmluc2ljIiwiX3N0YWtlZERhcHBzIiwidHJhbnNhY3Rpb25zIiwibnVtYmVyT2ZVbmNsYWltZWRFcmEiLCJtYXhUeCIsImkiLCJiblN0YWtlZCIsInJlcGxhY2VBbGwiLCJwYXJzZWRFcmEiLCJlcSIsIm5leHRFcmFEYXRhIiwibmV4dEVyYSIsImlzTGFzdEVyYSIsImVyYVRvQ2xhaW0iLCJNYXRoIiwibWluIiwiY2xhaW1TdGFrZXIiLCJ1dGlsaXR5IiwiYmF0Y2giLCJnZXRBc3RhcldpdGhkcmF3YWJsZSIsIm5vbWluYXRvck1ldGFkYXRhIiwidW5zdGFraW5nSW5mbyIsImJuV2l0aGRyYXdhYmxlIiwidW5zdGFraW5nIiwiX0tOT1dOX0NIQUlOX0lORkxBVElPTl9QQVJBTVMiLCJfU1RBS0lOR19DSEFJTl9HUk9VUCIsIl9TVUJTVFJBVEVfREVGQVVMVF9JTkZMQVRJT05fUEFSQU1TIiwiX2dldENoYWluTmF0aXZlVG9rZW5CYXNpY0luZm8iLCJkZXRlY3RUcmFuc2xhdGUiLCJyZWZvcm1hdEFkZHJlc3MiLCJiYWxhbmNlRm9ybWF0dGVyIiwiZm9ybWF0TnVtYmVyIiwidCIsIkJOX0JJTExJT04iLCJCTl9IVU5EUkVEIiwiQk5fTUlMTElPTiIsIkJOX1RIT1VTQU5EIiwiYm5Ub1U4YSIsInN0cmluZ1RvVThhIiwidThhQ29uY2F0IiwiUGFsbGV0UGFyYWNoYWluU3Rha2luZ1JlcXVlc3RUeXBlIiwicGFyc2VQb29sU3Rhc2hBZGRyZXNzIiwiaW5kZXgiLCJwb29sSWQiLCJwb29sc1BhbGxldElkIiwiTW9kUHJlZml4IiwiVTMyT3B0cyIsImJpdExlbmd0aCIsImlzTGUiLCJFbXB0eUgyNTYiLCJVaW50OEFycmF5IiwicmVnaXN0cnkiLCJjcmVhdGVUeXBlIiwidHJhbnNmb3JtUG9vbE5hbWUiLCJyZXBsYWNlIiwicGFyc2VJZGVudGl0eSIsImlkZW50aXR5SW5mbyIsImRpc3BsYXlOYW1lIiwiaW5mbyIsImRpc3BsYXkiLCJSYXciLCJ3ZWIiLCJyaW90IiwidHdpdHRlciIsInN0YXJ0c1dpdGgiLCJnZXRJbmZsYXRpb25QYXJhbXMiLCJjYWxjSW5mbGF0aW9uVW5pZm9ybUVyYVBheW91dCIsInRvdGFsSXNzdWFuY2UiLCJ5ZWFybHlJbmZsYXRpb25JblRva2VucyIsInRvdGFsSXNzdWFuY2VJblRva2VucyIsImRpdiIsInRvTnVtYmVyIiwiY2FsY0luZmxhdGlvblJld2FyZEN1cnZlIiwibWluSW5mbGF0aW9uIiwic3Rha2VkRnJhY3Rpb24iLCJpZGVhbFN0YWtlIiwiaWRlYWxJbnRlcmVzdCIsImZhbGxvZmYiLCJwb3ciLCJjYWxjdWxhdGVJbmZsYXRpb24iLCJ0b3RhbEVyYVN0YWtlIiwibnVtQXVjdGlvbnMiLCJpbmZsYXRpb25QYXJhbXMiLCJhdWN0aW9uQWRqdXN0IiwiYXVjdGlvbk1heCIsIm1heEluZmxhdGlvbiIsInN0YWtlVGFyZ2V0IiwibXVsIiwiYWxlcGgiLCJjYWxjdWxhdGVDaGFpblN0YWtlZFJldHVybiIsImluZmxhdGlvbiIsInN0YWtlZFJldHVybiIsImNhbGN1bGF0ZUFsZXBoWmVyb1ZhbGlkYXRvclJldHVybiIsImNoYWluU3Rha2VkUmV0dXJuIiwiY2FsY3VsYXRlVGVybm9hVmFsaWRhdG9yUmV0dXJuIiwicmV3YXJkUGVyVmFsaWRhdG9yIiwidmFsaWRhdG9yU3Rha2UiLCJwZXJjZW50UmV3YXJkRm9yTm9taW5hdG9ycyIsInJld2FyZEZvck5vbWluYXRvcnMiLCJzdGFrZVJhdGlvIiwiY2FsY3VsYXRlVmFsaWRhdG9yU3Rha2VkUmV0dXJuIiwidG90YWxWYWxpZGF0b3JTdGFrZSIsImF2Z1N0YWtlIiwiYm5BZGp1c3RlZCIsImFkanVzdGVkIiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsImdldENvbW1pc3Npb24iLCJjb21taXNzaW9uU3RyaW5nIiwicGFyc2VGbG9hdCIsInNwbGl0IiwiZ2V0UGFyYUN1cnJlbnRJbmZsYXRpb24iLCJ0b3RhbFN0YWtlZCIsImluZmxhdGlvbkNvbmZpZyIsImV4cGVjdE1pbiIsImV4cGVjdCIsImV4cGVjdE1heCIsIm1heCIsImluZmxhdGlvblN0cmluZyIsImFubnVhbCIsImlkZWFsIiwiaXNTaG93Tm9taW5hdGlvbkJ5VmFsaWRhdG9yIiwiYW1wbGl0dWRlIiwiYXN0YXIiLCJwYXJhIiwiZ2V0Qm9uZGVkVmFsaWRhdG9ycyIsImJvbmRlZFZhbGlkYXRvcnMiLCJub21pbmF0aW9uQ291bnQiLCJub21pbmF0aW9uIiwiaXNVbnN0YWtlQWxsIiwic2VsZWN0ZWRWYWxpZGF0b3IiLCJ1bnN0YWtlQW1vdW50IiwicGFyc2VkVmFsaWRhdG9yQWRkcmVzcyIsInBhcnNlZFNlbGVjdGVkVmFsaWRhdG9yIiwiU3Rha2luZ0FjdGlvbiIsImdldFN0YWtpbmdBdmFpbGFibGVBY3Rpb25zQnlDaGFpbiIsIlBPT0xFRCIsIlNUQUtFIiwiVU5TVEFLRSIsIldJVEhEUkFXIiwiQ0xBSU1fUkVXQVJEIiwiQ0FOQ0VMX1VOU1RBS0UiLCJnZXRTdGFraW5nQXZhaWxhYmxlQWN0aW9uc0J5Tm9taW5hdG9yIiwidW5jbGFpbWVkUmV3YXJkIiwicmVzdWx0IiwiYm5BY3RpdmVTdGFrZSIsImlzQXN0YXJOZXR3b3JrIiwiaXNBbXBsaXR1ZGVOZXR3b3JrIiwiYm5VbmNsYWltZWRSZXdhcmQiLCJoYXNDbGFpbWFibGUiLCJzb21lIiwiaXNBY3Rpb25Gcm9tVmFsaWRhdG9yIiwic3Rha2luZ1R5cGUiLCJnZXRXaXRoZHJhd2FsSW5mbyIsImlzWmVybyIsImludmFsaWREZWxlZ2F0aW9uQ291bnQiLCJQQVJUSUFMTFlfRUFSTklORyIsImdldFZhbGlkYXRvckxhYmVsIiwicmVsYXkiLCJnZXRNaW5TdGFrZUVycm9yTWVzc2FnZSIsImJuTWluU3Rha2UiLCJ0b2tlbkluZm8iLCJudW1iZXIiLCJkZWNpbWFscyIsInRva2VuU3ltYm9sIiwic3ltYm9sIiwiZ2V0TWF4VmFsaWRhdG9yRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImxhYmVsIiwiZ2V0RXhpc3RVbnN0YWtlRXJyb3JNZXNzYWdlIiwiaXNTdGFrZU1vcmUiLCJERUZBVUxUX0NIQUlOUyIsIl9TdWJzdHJhdGVDaGFpblR5cGUiLCJBUElfQVVUT19DT05ORUNUX01TIiwiQVBJX0NPTk5FQ1RfVElNRU9VVCIsIkFQSV9NQVhfUkVUUlkiLCJ3aW5kb3ciLCJsb2ciLCJqb2luIiwiX0FQSV9PUFRJT05TX0NIQUlOX0dST1VQIiwiYWNhbGEiLCJ0dXJpbmciLCJhdmFpbCIsIl9QUkVERUZJTkVEX1NJTkdMRV9NT0RFUyIsInN1YnNwYWNlIiwibmV0d29ya0tleXMiLCJ0aGVtZSIsIlNVQlNQQUNFIiwiYXV0b1RyaWdnZXJEb21haW4iLCJfUFVSRV9FVk1fQ0hBSU5TIiwiX0JBTEFOQ0VfQ0hBSU5fR1JPVVAiLCJraW50c3VnaSIsImdlbnNoaXJvIiwiZXF1aWxpYnJpdW1fcGFyYWNoYWluIiwiYmlmcm9zdCIsInN0YXRlbWluZSIsIl9CQUxBTkNFX1RPS0VOX0dST1VQIiwiY3JhYiIsImJpdGNvdW50cnkiLCJfTkZUX0NIQUlOX0dST1VQIiwia2FydXJhIiwicm1yayIsInN0YXRlbWludCIsInVuaXF1ZV9uZXR3b3JrIiwidmFyYSIsImtpbHQiLCJub21pbmF0aW9uUG9vbCIsInRlcm5vYSIsImFsZXBoVGVzdCIsIndlc3RlbmQiLCJoeWRyYWR4IiwiZGVmYXVsdCIsIm1vb25iZWFtIiwibW9vbnJpdmVyIiwibW9vbmJhc2UiLCJ0dXJpbmdTdGFnaW5nIiwic2hpZGVuIiwic2hpYnV5YSIsImJpZnJvc3RfdGVzdG5ldCIsImNhbGFtYXJpIiwiY2FsYW1hcmlfdGVzdCIsImFtcGxpdHVkZV90ZXN0IiwicGVuZHVsdW0iLCJraWx0X3BlcmVncmluZSIsImVkZ2V3YXJlIiwia2F0ZSIsImNyZWRpdGNvaW4iLCJ2YXJhX25ldHdvcmsiLCJfUEFSQUNIQUlOX0lORkxBVElPTl9ESVNUUklCVVRJT04iLCJyZXdhcmQiLCJjb2xsYXRvckNvbW1pc3Npb24iLCJib25kUmVzZXJ2ZSIsIl9BTEVQSF9ERUZBVUxUX1VOSUZPUk1fRVJBX1BBWU9VVF9QQVJBTVMiLCJkb2NrX3BvcyIsIm5lYXRjb2luIiwibmZ0X21hcnQiLCJfVFJBTlNGRVJfTk9UX1NVUFBPUlRFRF9DSEFJTlMiLCJfVFJBTlNGRVJfQ0hBSU5fR1JPVVAiLCJyaW9jaGFpbiIsInNvcmFfc3Vic3RyYXRlIiwiX0JBTEFOQ0VfUEFSU0lOR19DSEFJTl9HUk9VUCIsImJvYmFiZWFtIiwiX01BTlRBX1pLX0NIQUlOX0dST1VQIiwiX1pLX0FTU0VUX1BSRUZJWCIsIl9ERUZBVUxUX01BTlRBX1pLX0NIQUlOIiwiX1hDTV9DSEFJTl9HUk9VUCIsInBvbGthZG90WGNtIiwieGNtUGFsbGV0IiwiX1hDTV9UWVBFIiwiUlAiLCJSRUxBWUNIQUlOIiwiUEFSQUNIQUlOIiwiUFAiLCJQUiIsIl9ERUZBVUxUX0FDVElWRV9DSEFJTlMiLCJFVk1fUEFTU19DT05ORUNUX1NUQVRVUyIsIkVWTV9SRUZPUk1BVF9ERUNJTUFMUyIsIlRBUkdFVF9CUkFOQ0giLCJOT0RFX0VOViIsIl9DSEFJTl9JTkZPX1NSQyIsIl9DSEFJTl9BU1NFVF9TUkMiLCJfQVNTRVRfUkVGX1NSQyIsIl9NVUxUSV9DSEFJTl9BU1NFVF9TUkMiLCJfQ0hBSU5fTE9HT19NQVBfU1JDIiwiX0FTU0VUX0xPR09fTUFQX1NSQyIsIl9DSEFJTl9WQUxJREFUSU9OX0VSUk9SIiwiX0Fzc2V0VHlwZSIsIl9DaGFpbkNvbm5lY3Rpb25TdGF0dXMiLCJfQ1VTVE9NX1BSRUZJWCIsIl9GVU5HSUJMRV9DT05UUkFDVF9TVEFOREFSRFMiLCJFUkMyMCIsIlBTUDIyIiwiX05GVF9DT05UUkFDVF9TVEFOREFSRFMiLCJQU1AzNCIsIkVSQzcyMSIsIl9TTUFSVF9DT05UUkFDVF9TVEFOREFSRFMiLCJfQXNzZXRSZWZQYXRoIiwiX2lzQ3VzdG9tQ2hhaW4iLCJfaXNDdXN0b21Bc3NldCIsIl9nZXRDdXN0b21Bc3NldHMiLCJhc3NldFJlZ2lzdHJ5IiwiZmlsdGVyZWRBc3NldE1hcCIsIk9iamVjdCIsInZhbHVlcyIsImNoYWluQXNzZXQiLCJfaXNFcXVhbENvbnRyYWN0QWRkcmVzcyIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJfaXNFcXVhbFNtYXJ0Q29udHJhY3RBc3NldCIsImFzc2V0MSIsImFzc2V0MiIsImNvbnRyYWN0MSIsIm1ldGFkYXRhIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3QyIiwiYXNzZXRUeXBlIiwib3JpZ2luQ2hhaW4iLCJfaXNQdXJlRXZtQ2hhaW4iLCJldm1JbmZvIiwic3Vic3RyYXRlSW5mbyIsIl9pc1B1cmVTdWJzdHJhdGVDaGFpbiIsIl9nZXRPcmlnaW5DaGFpbk9mQXNzZXQiLCJhc3NldFNsdWciLCJhcnIiLCJlbmQiLCJmaW5kSW5kZXgiLCJzdHIiLCJfZ2V0Q29udHJhY3RBZGRyZXNzT2ZUb2tlbiIsIl9pc1Rva2VuVHJhbnNmZXJyZWRCeUV2bSIsIl9pc05hdGl2ZVRva2VuIiwiX2NoZWNrU21hcnRDb250cmFjdFN1cHBvcnRCeUNoYWluIiwiY29udHJhY3RUeXBlIiwic3VwcG9ydFNtYXJ0Q29udHJhY3QiLCJfZ2V0VG9rZW5PbkNoYWluQXNzZXRJZCIsImFzc2V0SWQiLCJfZ2V0VG9rZW5PbkNoYWluSW5mbyIsIm9uQ2hhaW5JbmZvIiwiX2dldFRva2VuTWluQW1vdW50IiwibWluQW1vdW50IiwiX2lzQ2hhaW5Fdm1Db21wYXRpYmxlIiwiTkFUSVZFIiwiX2lzTmF0aXZlVG9rZW5CeVNsdWciLCJ0b2tlblNsdWciLCJfaXNTbWFydENvbnRyYWN0VG9rZW4iLCJfaXNTdWJzdHJhdGVDaGFpbiIsIl9nZXRFdm1DaGFpbklkIiwiZXZtQ2hhaW5JZCIsIl9nZXRTdWJzdHJhdGVQYXJhSWQiLCJwYXJhSWQiLCJfZ2V0U3Vic3RyYXRlUmVsYXlQYXJlbnQiLCJyZWxheVNsdWciLCJfZ2V0U3Vic3RyYXRlR2VuZXNpc0hhc2giLCJnZW5lc2lzSGFzaCIsIl9pc0NoYWluU3VwcG9ydFN1YnN0cmF0ZVN0YWtpbmciLCJzdXBwb3J0U3Rha2luZyIsIl9pc0NoYWluRW5hYmxlZCIsImNoYWluU3RhdGUiLCJhY3RpdmUiLCJfZ2V0Q2hhaW5TdWJzdHJhdGVBZGRyZXNzUHJlZml4IiwiYWRkcmVzc1ByZWZpeCIsIl9pc0NoYWluU3VwcG9ydE5hdGl2ZU5mdCIsImhhc05hdGl2ZU5mdCIsIl9pc0NoYWluU3VwcG9ydEV2bU5mdCIsIl9pc0NoYWluU3VwcG9ydFdhc21OZnQiLCJfZ2V0TmZ0VHlwZXNTdXBwb3J0ZWRCeUNoYWluIiwiX2dldFRva2VuVHlwZXNTdXBwb3J0ZWRCeUNoYWluIiwiX2dldENoYWluTmF0aXZlVG9rZW5TbHVnIiwiX2lzTG9jYWxUb2tlbiIsIkxPQ0FMIiwiX2lzVG9rZW5Fdm1TbWFydENvbnRyYWN0IiwiX2lzVG9rZW5XYXNtU21hcnRDb250cmFjdCIsIl9pc0Fzc2V0U21hcnRDb250cmFjdE5mdCIsImFzc2V0SW5mbyIsIl9wYXJzZUFzc2V0UmVmS2V5Iiwib3JpZ2luVG9rZW5TbHVnIiwiZGVzdGluYXRpb25Ub2tlblNsdWciLCJfaXNYY21QYXRoU3VwcG9ydGVkIiwiYXNzZXRSZWZNYXAiLCJhc3NldFJlZiIsInBhdGgiLCJYQ00iLCJfZ2V0WGNtQXNzZXRUeXBlIiwiX2dldFhjbUFzc2V0SWQiLCJfZ2V0WGNtQXNzZXRNdWx0aWxvY2F0aW9uIiwibXVsdGlsb2NhdGlvbiIsIl9nZXRYY21UcmFuc2ZlclR5cGUiLCJvcmlnaW5DaGFpbkluZm8iLCJkZXN0aW5hdGlvbkNoYWluSW5mbyIsImNoYWluVHlwZSIsIl9pc1N1YnN0cmF0ZVJlbGF5Q2hhaW4iLCJfaXNTdWJzdHJhdGVQYXJhQ2hhaW4iLCJfZ2V0RXZtQWJpRXhwbG9yZXIiLCJhYmlFeHBsb3JlciIsIl9pc0Fzc2V0VmFsdWFibGUiLCJoYXNWYWx1ZSIsIl9nZXRNdWx0aUNoYWluQXNzZXQiLCJtdWx0aUNoYWluQXNzZXQiLCJfZ2V0QXNzZXRQcmljZUlkIiwicHJpY2VJZCIsIl9nZXRNdWx0aUNoYWluQXNzZXRQcmljZUlkIiwiX2dldEFzc2V0U3ltYm9sIiwiX2dldE11bHRpQ2hhaW5Bc3NldFN5bWJvbCIsIl9nZXRBc3NldE9yaWdpbkNoYWluIiwiX2dldENoYWluTmFtZSIsIl9nZXRBc3NldERlY2ltYWxzIiwiX2dldEJsb2NrRXhwbG9yZXJGcm9tQ2hhaW4iLCJibG9ja0V4cGxvcmVyIiwiZW5kc1dpdGgiLCJfcGFyc2VNZXRhZGF0YUZvclNtYXJ0Q29udHJhY3RBc3NldCIsIl9pc0NoYWluVGVzdE5ldCIsImlzVGVzdG5ldCIsIl9pc0Fzc2V0RnVuZ2libGVUb2tlbiIsIlVOS05PV04iLCJfZ2V0Q3Jvd2Rsb2FuVXJsRnJvbUNoYWluIiwiY3Jvd2Rsb2FuVXJsIiwiX2lzQ3VzdG9tUHJvdmlkZXIiLCJwcm92aWRlcktleSIsIl9nZW5lcmF0ZUN1c3RvbVByb3ZpZGVyS2V5IiwiZmluZENoYWluSW5mb0J5SGFsZkdlbmVzaXNIYXNoIiwiY2hhaW5NYXAiLCJoYWxmR2VuZXNpc0hhc2giLCJzdWJzdHJpbmciLCJmaW5kQ2hhaW5JbmZvQnlDaGFpbklkIiwiX2lzTWFudGFaa0Fzc2V0IiwiVEFSR0VUX0VOViIsIkRFRkFVTFRfVEhFTUUiLCJEQVJLIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRSIsIkRFRkFVTFRfQVVUT19MT0NLX1RJTUUiLCJERUZBVUxUX1VOTE9DS19UWVBFIiwiQUxXQVlTX1JFUVVJUkVEIiwiV0hFTl9ORUVERUQiLCJERUZBVUxUX0NIQUlOX1BBVFJPTF9FTkFCTEUiLCJERUZBVUxUX0xBTkdVQUdFIiwiREVGQVVMVF9TSE9XX1pFUk9fQkFMQU5DRSIsIkRFRkFVTFRfU0hPV19CQUxBTkNFIiwiREVGQVVMVF9BTExfTE9HTyIsIkRFRkFVTFRfQ0FNRVJBX0VOQUJMRSIsIkRFRkFVTFRfU0VUVElORyIsImxhbmd1YWdlIiwiYnJvd3NlckNvbmZpcm1hdGlvblR5cGUiLCJpc1Nob3daZXJvQmFsYW5jZSIsImlzU2hvd0JhbGFuY2UiLCJhY2NvdW50QWxsTG9nbyIsInVubG9ja1R5cGUiLCJjYW1lcmEiLCJ0aW1lQXV0b0xvY2siLCJlbmFibGVDaGFpblBhdHJvbCIsIndhbGxldFJlZmVyZW5jZSIsInBhcnNlVHJhbnNhY3Rpb25EYXRhIiwiZ2V0QmxvY2tFeHBsb3JlckFjY291bnRSb3V0ZSIsImV4cGxvcmVyTGluayIsImdldEJsb2NrRXhwbG9yZXJUeFJvdXRlIiwiZ2V0RXhwbG9yZXJMaW5rIiwidmFsdWUiLCJyb3V0ZSIsIkVJUDE1NV9TSUdOSU5HX01FVEhPRFMiLCJQT0xLQURPVF9TSUdOSU5HX01FVEhPRFMiLCJpc01vYmlsZSIsIlBST0pFQ1RfSURfRVhURU5TSU9OIiwiUFJPSkVDVF9JRF9NT0JJTEUiLCJSRUxBWV9VUkwiLCJERUZBVUxUX1dBTExFVF9DT05ORUNUX09QVElPTlMiLCJsb2dnZXIiLCJwcm9qZWN0SWQiLCJyZWxheVVybCIsImRlc2NyaXB0aW9uIiwidXJsIiwiaWNvbnMiLCJBTExfV0FMTEVUX0NPTk5FQ1RfRVZFTlQiLCJXQUxMRVRfQ09OTkVDVF9TVVBQT1JURURfTUVUSE9EUyIsIlBPTEtBRE9UX1NJR05fTUVTU0FHRSIsIlBPTEtBRE9UX1NJR05fVFJBTlNBQ1RJT04iLCJFVEhfU0VORF9UUkFOU0FDVElPTiIsIlBFUlNPTkFMX1NJR04iLCJFVEhfU0lHTl9UWVBFRF9EQVRBX1YxIiwiRVRIX1NJR05fVFlQRURfREFUQV9WMyIsIkVUSF9TSUdOX1RZUEVEX0RBVEFfVjQiLCJXQUxMRVRfQ09OTkVDVF9SRVFVRVNUX0tFWSIsIldBTExFVF9DT05ORUNUX0VJUDE1NV9OQU1FU1BBQ0UiLCJXQUxMRVRfQ09OTkVDVF9QT0xLQURPVF9OQU1FU1BBQ0UiLCJXQUxMRVRfQ09OTkVDVF9TVVBQT1JUX05BTUVTUEFDRVMiLCJnZXRXQ0lkIiwiRGF0ZSIsIm5vdyIsImNvbnZlcnRDb25uZWN0UmVxdWVzdCIsInJlcXVlc3QiLCJpc0ludGVybmFsIiwicGFyYW1zIiwicHJvcG9zZXIiLCJjb252ZXJ0Tm90U3VwcG9ydFJlcXVlc3QiLCJwYXJzZVJlcXVlc3RQYXJhbXMiLCJnZXRFaXAxNTVNZXNzYWdlQWRkcmVzcyIsInBhcmFtIiwiRVRIX1NJR05fVFlQRURfREFUQSIsIkVUSF9TSUdOIiwicDEiLCJwMiIsImlzV2FsbGV0Q29ubmVjdFJlcXVlc3QiLCJwcmVmaXgiLCJpc1Byb3Bvc2FsRXhwaXJlZCIsInRpbWVOdW0iLCJleHBpcnkiLCJleHBpcmVUaW1lIiwiZ2V0VGltZSIsImlzU3VwcG9ydFdhbGxldENvbm5lY3ROYW1lc3BhY2UiLCJuYW1lc3BhY2UiLCJpc1N1cHBvcnRXYWxsZXRDb25uZWN0Q2hhaW4iLCJjaGFpbkluZm9NYXAiLCJ1bmlxdWVTdHJpbmdBcnJheSIsImFycmF5IiwidiIsImtleXMiLCJjYW5EZXJpdmUiLCJkZXRlY3RSdW50aW1lRW52aXJvbm1lbnQiLCJkb2N1bWVudCIsImVudmlyb25tZW50IiwiV2ViIiwidmVyc2lvbiIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhvc3QiLCJsb2NhdGlvbiIsInByb3RvY29sIiwic2VsZiIsImltcG9ydFNjcmlwdHMiLCJTZXJ2aWNlV29ya2VyIiwidmVyc2lvbnMiLCJub2RlIiwiTm9kZSIsImNocm9tZSIsInJ1bnRpbWUiLCJFeHRlbnNpb25DaHJvbWUiLCJnZXRNYW5pZmVzdCIsImJyb3dzZXIiLCJFeHRlbnNpb25GaXJlZm94IiwiV29ya2VyR2xvYmFsU2NvcGUiLCJXZWJXb3JrZXIiLCJVbmtub3duIiwiUnVudGltZUluZm8iLCJnZXRPUyIsInBsYXRmb3JtIiwidXNlckFnZW50RGF0YSIsIm1hY29zUGxhdGZvcm1zIiwid2luZG93c1BsYXRmb3JtcyIsImlvc1BsYXRmb3JtcyIsIm9zIiwiaW5kZXhPZiIsInRlc3QiLCJNT0RVTEVfU1VQUE9SVCIsIk1BTlRBX1pLIiwiQmlnTiIsImV0aGVycyIsImhleFN0cmlwUHJlZml4IiwibnVtYmVyVG9IZXgiLCJoZXhUb051bWJlclN0cmluZyIsInMiLCJ0ZW1wIiwiaXNOYU4iLCJUcmFuc2FjdGlvbiIsImNvbnN0cnVjdG9yIiwibm9uY2UiLCJnYXNQcmljZSIsImdhcyIsInRvIiwiZXRoZXJldW1DaGFpbklkIiwiaXNTYWZlIiwiYW55TnVtYmVyVG9CTiIsImNyZWF0ZVRyYW5zYWN0aW9uRnJvbVJMUCIsInJscCIsInRyYW5zYWN0aW9uIiwiZnJvbSIsImdhc0xpbWl0IiwiZSIsInNpZ25hdHVyZVRvSGV4Iiwic2lnIiwiciIsImhleFIiLCJoZXhTIiwiaGV4ViIsImNvdW50ZXIiLCJnZXRJZCIsImFzc2VydCIsImhleFRvVThhIiwiaXNIZXgiLCJkZWNvZGVBZGRyZXNzIiwiZW5jb2RlQWRkcmVzcyIsImV0aGVyZXVtRW5jb2RlIiwibm90RGVmIiwieCIsImlzRGVmIiwibm9uRW1wdHlBcnIiLCJBcnJheSIsImlzQXJyYXkiLCJpc0VtcHR5QXJyYXkiLCJpc0FjY291bnRBbGwiLCJuZXR3b3JrUHJlZml4IiwiaXNFdGhlcmV1bSIsInB1YmxpY0tleSIsIndhcm4iLCJmaWx0ZXJBZGRyZXNzQnlOZXR3b3JrS2V5IiwiYWRkcmVzc2VzIiwiZmlsdGVyIiwiY2F0ZWdvcnlBZGRyZXNzZXMiLCJzdWJzdHJhdGVBZGRyZXNzZXMiLCJldm1BZGRyZXNzZXMiLCJjYXRlZ29yeU5ldHdvcmtzIiwibmV0d29ya3MiLCJjb252ZXJ0VG9Fdm1BZGRyZXNzIiwic3Vic3RyYXRlQWRkcmVzcyIsImFkZHJlc3NCeXRlcyIsIkJ1ZmZlciIsInN1YmFycmF5IiwidGFyZ2V0U3RyaW5nIiwiVVJMIiwiXyIsImluSmVzdFRlc3QiLCJKRVNUX1dPUktFUl9JRCIsInBhcnNlSXBmc0xpbmsiLCJpcGZzTGluayIsImhleFRvU3RyIiwiYnVmIiwiaGV4U3RhcnQiLCJzdHJMZW4iLCJjaCIsIm51bSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInV0ZjE2VG9TdHJpbmciLCJ1SW50MTZBcnJheSIsImhleFRvVVRGMTYiLCJoZXgiLCJpc1ZhbGlkU3Vic3RyYXRlQWRkcmVzcyIsInRvVW5pdCIsImJhbGFuY2UiLCJzdW1CTiIsImlucHV0QXJyIiwicnMiLCJjb252ZXJ0RnVuZFN0YXR1cyIsIkNPTVBMRVRFRCIsIk9OR09JTkciLCJGQUlMRUQiLCJpc0FkZHJlc3Nlc0VxdWFsIiwicHJldkFkZHJlc3NlcyIsImlzVmFsaWRQcm92aWRlciIsInByb3ZpZGVyIiwiZ2V0Q3VycmVudFByb3ZpZGVyIiwiY3VycmVudFByb3ZpZGVyIiwiY3VzdG9tUHJvdmlkZXJzIiwicHJvdmlkZXJzIiwiZ2V0TmZ0UHJvdmlkZXIiLCJuZnRQcm92aWRlciIsIm1lcmdlTmV0d29ya1Byb3ZpZGVycyIsImN1c3RvbU5ldHdvcmsiLCJwcmVkZWZpbmVkTmV0d29yayIsInBhcnNlZEN1c3RvbVByb3ZpZGVycyIsImN1cnJlbnRQcm92aWRlck1ldGhvZCIsInBhcnNlZFByb3ZpZGVyS2V5IiwiY3VzdG9tUHJvdmlkZXIiLCJleGlzdCIsImtleSIsInBhcnNlZFByb3ZpZGVyIiwiZmlsdGVyQW5kU29ydGluZ0FjY291bnRCeUF1dGhUeXBlIiwiYWNjb3VudHMiLCJhY2NvdW50QXV0aFR5cGUiLCJzb3J0aW5nIiwiYWNjIiwic29ydCIsImFjYzIiLCJpc1NhbWVBZGRyZXNzIiwiZ2V0RG9tYWluRnJvbVVybCIsIndhaXRUaW1lb3V0IiwibXMiLCJzdHJpcFVybCIsInBhcnRzIiwibGF6eU1hcCIsInJlbW92ZUxhenkiLCJhZGRMYXp5IiwibGF6eVRpbWUiLCJtYXhMYXp5VGltZSIsImZpcmVPbkZpcnN0IiwiZXhpc3RlZCIsImxhc3RGaXJlIiwiQmlnTnVtYmVyIiwiQk5fVEVOIiwiY2xlYXJaZXJvIiwiTlVNXzFUIiwiVExJTSIsIk5VTV8xQiIsIkJMSU0iLCJOVU1fMU0iLCJOVU1fMTAwTSIsImFic0d0ZU9uZSIsImFicyIsIm1pbk51bWJlckZvcm1hdCIsIm1heE51bWJlckZvcm1hdCIsImludCIsImRlY2ltYWwiLCJfZGVjaW1hbCIsImludE51bWJlciIsImRpdmlkZWRCeSIsInRvRml4ZWQiLCJjdXJyZW50IiwibWV0Tm90WmVybyIsIl9jaGFyIiwiUFJFREVGSU5FRF9GT1JNQVRURVIiLCJ0b0JOU3RyaW5nIiwicmF3IiwibXVsdGlwbGllZEJ5IiwiZm9ybWF0dGVyIiwiY3JlYXRlUHJvbWlzZUhhbmRsZXIiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJwcm9taXNlIiwicmVqZWN0IiwiTWV0YWRhdGEiLCJUeXBlUmVnaXN0cnkiLCJjcmVhdGVSZWdpc3RyeSIsInJhd01ldGFkYXRhIiwic2V0TWV0YWRhdGEiLCJzZXRDaGFpblByb3BlcnRpZXMiLCJzczU4Rm9ybWF0IiwidG9rZW5EZWNpbWFscyIsImJhc2U2NERlY29kZSIsInBhY2thZ2VJbmZvIiwiZGVmaW5pdGlvbnMiLCJNYXAiLCJleHBhbmRlZCIsIm1ldGFkYXRhRXhwYW5kIiwiZGVmaW5pdGlvbiIsImlzUGFydGlhbCIsImNhY2hlZCIsImdldCIsInNwZWNWZXJzaW9uIiwibWV0YUNhbGxzIiwidHlwZXMiLCJ1c2VyRXh0ZW5zaW9ucyIsInJlZ2lzdGVyIiwiaGFzTWV0YWRhdGEiLCJpc1Vua25vd24iLCJzZXQiLCJmaW5kQ2hhaW4iLCJkZWYiLCJmaW5kIiwiYWRkTWV0YWRhdGEiLCJrbm93bk1ldGFkYXRhIiwiVThBX1dSQVBfRVRIRVJFVU0iLCJVOEFfV1JBUF9QT1NURklYIiwiVThBX1dSQVBfUFJFRklYIiwidThhSXNXcmFwcGVkIiwidThhVW53cmFwQnl0ZXMiLCJ1OGFXcmFwQnl0ZXMiLCJFVEhFUkVVTSIsIlBPU1RGSVgiLCJQUkVGSVgiLCJpc1dyYXBwZWQiLCJ1bndyYXBCeXRlcyIsIndyYXBCeXRlcyIsImV4cG9zZUdsb2JhbCIsInhnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9