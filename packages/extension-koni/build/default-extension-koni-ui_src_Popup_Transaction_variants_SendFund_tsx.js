"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Transaction_variants_SendFund_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Transaction/parts/BondedBalance.tsx":
/*!**************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/parts/BondedBalance.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/typography/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/number/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0








const Component = ({
  bondedBalance,
  className,
  decimals,
  label,
  symbol
}) => {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"].Paragraph, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'bonded-balance'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
      decimal: decimals,
      decimalColor: token.colorTextTertiary,
      intColor: token.colorTextTertiary,
      size: 14,
      suffix: symbol,
      unitColor: token.colorTextTertiary,
      value: bondedBalance || 0
    }), label || t('Bonded')]
  });
};
const BondedBalance = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(Component).withConfig({
  displayName: "BondedBalance",
  componentId: "sc-15arqr7-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    display: 'flex',
    color: token.colorTextTertiary,
    '&.ant-typography': {
      marginBottom: 0
    },
    '.ant-number': {
      marginRight: '0.3em'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BondedBalance);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Transaction/parts/FreeBalance.tsx":
/*!************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/parts/FreeBalance.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/typography/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/activity-indicator/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/number/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0










const Component = ({
  address,
  chain,
  className,
  label,
  onBalanceReady,
  tokenSlug
}) => {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  const {
    error,
    isLoading,
    nativeTokenBalance,
    nativeTokenSlug,
    tokenBalance
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_0__.useGetBalance)(chain, address, tokenSlug);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    onBalanceReady === null || onBalanceReady === void 0 ? void 0 : onBalanceReady(!isLoading && !error);
  }, [error, isLoading, onBalanceReady]);
  if (!address && !chain) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"].Paragraph, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'free-balance'),
    children: [!error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "__label",
      children: label || t('Sender available balance:')
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: 14
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"].Text, {
      className: 'error-message',
      children: error
    }), !isLoading && !error && !!nativeTokenSlug && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
      decimal: nativeTokenBalance.decimals || 18,
      decimalColor: token.colorTextTertiary,
      intColor: token.colorTextTertiary,
      size: 14,
      suffix: nativeTokenBalance.symbol,
      unitColor: token.colorTextTertiary,
      value: nativeTokenBalance.value
    }), !isLoading && !error && !!tokenSlug && tokenSlug !== nativeTokenSlug && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        className: '__name',
        children: ["\xA0", t('and'), "\xA0"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
        decimal: (tokenBalance === null || tokenBalance === void 0 ? void 0 : tokenBalance.decimals) || 18,
        decimalColor: token.colorTextTertiary,
        intColor: token.colorTextTertiary,
        size: 14,
        suffix: tokenBalance === null || tokenBalance === void 0 ? void 0 : tokenBalance.symbol,
        unitColor: token.colorTextTertiary,
        value: tokenBalance.value
      })]
    })]
  });
};
const FreeBalance = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Component).withConfig({
  displayName: "FreeBalance",
  componentId: "sc-f3bkwa-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    color: token.colorTextTertiary,
    '.__label': {
      marginRight: 3
    },
    '.error-message': {
      color: token.colorError
    },
    '&.ant-typography': {
      marginBottom: 0
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreeBalance);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Transaction/parts/TransactionContent.tsx":
/*!*******************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/parts/TransactionContent.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




const Component = ({
  children,
  className = ''
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `transaction-content ${className}`,
    children: children
  });
};
const TransactionContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Component).withConfig({
  displayName: "TransactionContent",
  componentId: "sc-17nushy-0"
})(({
  theme
}) => {
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionContent);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Transaction/parts/TransactionFooter.tsx":
/*!******************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/parts/TransactionFooter.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0





const Component = ({
  children,
  className = '',
  errors,
  warnings
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `transaction-footer ${className}`,
    children: [errors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "error-messages",
      children: errors.map((e, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: e
      }, index))
    }), warnings.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "warning-messages",
      children: warnings.map((w, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: w
      }, index))
    }), children]
  });
};
const TransactionFooter = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Component).withConfig({
  displayName: "TransactionFooter",
  componentId: "sc-bpci6r-0"
})(({
  theme
}) => {
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionFooter);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Transaction/parts/index.ts":
/*!*****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/parts/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BondedBalance": () => (/* reexport safe */ _BondedBalance__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "FreeBalance": () => (/* reexport safe */ _FreeBalance__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "TransactionContent": () => (/* reexport safe */ _TransactionContent__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "TransactionFooter": () => (/* reexport safe */ _TransactionFooter__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _BondedBalance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BondedBalance */ "../extension-koni-ui/src/Popup/Transaction/parts/BondedBalance.tsx");
/* harmony import */ var _FreeBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FreeBalance */ "../extension-koni-ui/src/Popup/Transaction/parts/FreeBalance.tsx");
/* harmony import */ var _TransactionContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionContent */ "../extension-koni-ui/src/Popup/Transaction/parts/TransactionContent.tsx");
/* harmony import */ var _TransactionFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionFooter */ "../extension-koni-ui/src/Popup/Transaction/parts/TransactionFooter.tsx");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0






/***/ }),

/***/ "../extension-koni-ui/src/Popup/Transaction/variants/SendFund.tsx":
/*!************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/variants/SendFund.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/chain-list/types */ "../../node_modules/@subwallet/chain-list/types.js");
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/AccountSelector */ "../extension-koni-ui/src/components/Field/AccountSelector.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_AddressInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/AddressInput */ "../extension-koni-ui/src/components/Field/AddressInput.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_AmountInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/AmountInput */ "../extension-koni-ui/src/components/Field/AmountInput.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_ChainSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/ChainSelector */ "../extension-koni-ui/src/components/Field/ChainSelector.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_TokenSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/TokenSelector */ "../extension-koni-ui/src/components/Field/TokenSelector.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useIsMantaPayEnabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useIsMantaPayEnabled */ "../extension-koni-ui/src/hooks/account/useIsMantaPayEnabled.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_chain_getNetworkJsonByGenesisHash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/chain/getNetworkJsonByGenesisHash */ "../extension-koni-ui/src/utils/chain/getNetworkJsonByGenesisHash.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bignumber.js */ "../../node_modules/bignumber.js/bignumber.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PaperPlaneRight.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PaperPlaneTilt.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/bn.js/lib/bn.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_polkadot_util__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/consts.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/is.js");
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts */ "../extension-koni-ui/src/Popup/Transaction/parts/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0






























function isAssetTypeValid(chainAsset, chainInfoMap, isAccountEthereum) {
  return (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__._isChainEvmCompatible)(chainInfoMap[chainAsset.originChain]) === isAccountEthereum;
}
function getTokenItems(address, accounts, chainInfoMap, assetRegistry, assetSettingMap, multiChainAssetMap, tokenGroupSlug,
// is ether a token slug or a multiChainAsset slug
isZkModeEnabled) {
  const account = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.findAccountByAddress)(accounts, address);
  if (!account) {
    return [];
  }
  const isLedger = !!account.isHardware;
  const validGen = account.availableGenesisHashes || [];
  const validLedgerNetwork = validGen.map(genesisHash => {
    var _findNetworkJsonByGen;
    return (_findNetworkJsonByGen = (0,_subwallet_extension_koni_ui_utils_chain_getNetworkJsonByGenesisHash__WEBPACK_IMPORTED_MODULE_10__.findNetworkJsonByGenesisHash)(chainInfoMap, genesisHash)) === null || _findNetworkJsonByGen === void 0 ? void 0 : _findNetworkJsonByGen.slug;
  });
  const isAccountEthereum = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(address);
  const isSetTokenSlug = !!tokenGroupSlug && !!assetRegistry[tokenGroupSlug];
  const isSetMultiChainAssetSlug = !!tokenGroupSlug && !!multiChainAssetMap[tokenGroupSlug];
  if (tokenGroupSlug) {
    if (!(isSetTokenSlug || isSetMultiChainAssetSlug)) {
      return [];
    }
    const chainAsset = assetRegistry[tokenGroupSlug];
    const isValidLedger = isLedger ? isAccountEthereum || validLedgerNetwork.includes(chainAsset === null || chainAsset === void 0 ? void 0 : chainAsset.originChain) : true;
    if (isSetTokenSlug) {
      if (isAssetTypeValid(chainAsset, chainInfoMap, isAccountEthereum) && isValidLedger) {
        const {
          name,
          originChain,
          slug,
          symbol
        } = assetRegistry[tokenGroupSlug];
        return [{
          name,
          slug,
          symbol,
          originChain
        }];
      } else {
        return [];
      }
    }
  }
  const items = [];
  Object.values(assetRegistry).forEach(chainAsset => {
    const isValidLedger = isLedger ? isAccountEthereum || validLedgerNetwork.includes(chainAsset === null || chainAsset === void 0 ? void 0 : chainAsset.originChain) : true;
    const isTokenFungible = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__._isAssetFungibleToken)(chainAsset);
    if (!(isTokenFungible && isAssetTypeValid(chainAsset, chainInfoMap, isAccountEthereum) && isValidLedger)) {
      return;
    }
    if (!isZkModeEnabled && (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__._isMantaZkAsset)(chainAsset)) {
      return;
    }
    if (isSetMultiChainAssetSlug) {
      if (chainAsset.multiChainAsset === tokenGroupSlug) {
        items.push({
          name: chainAsset.name,
          slug: chainAsset.slug,
          symbol: chainAsset.symbol,
          originChain: chainAsset.originChain
        });
      }
    } else {
      items.push({
        name: chainAsset.name,
        slug: chainAsset.slug,
        symbol: chainAsset.symbol,
        originChain: chainAsset.originChain
      });
    }
  });
  return items;
}

// function getTokenAvailableDestinations (
//   tokenSlug: string,
//   xcmRefMap: Record<string, _AssetRef>,
//   chainInfoMap: Record<string, _ChainInfo>
// ): ChainItemType[] {
//   if (!tokenSlug) {
//     console.warn('Token slug is empty or undefined.');

//     return [];
//   }

//   const result: ChainItemType[] = [];

//   // Get the origin chain
//   const originChainKey = _getOriginChainOfAsset(tokenSlug);

//   console.log('Origin Chain Key:', originChainKey);

//   const originChain = chainInfoMap[originChainKey];

//   console.log('Origin Chain Data:', originChain);

//   // Safely add the origin chain to the result
//   if (originChain) {
//     result.push({
//       name: originChain.name,
//       slug: originChain.slug
//     });
//     console.log('Added Origin Chain:', {
//       name: originChain.name,
//       slug: originChain.slug
//     });
//   } else {
//     console.warn(`Origin chain not found for key: ${originChainKey}`);
//   }

//   // Process XCM references
//   console.log('Processing XCM References:', xcmRefMap);

//   Object.values(xcmRefMap).forEach((xcmRef) => {
//     console.log('Current XCM Reference:', xcmRef);

//     if (xcmRef.srcAsset === tokenSlug) {
//       console.log('Matched Token Slug in XCM Reference:', xcmRef);

//       const destinationChain = chainInfoMap[xcmRef.destChain];

//       console.log('Destination Chain Data:', destinationChain);

//       if (destinationChain) {
//         result.push({
//           name: destinationChain.name,
//           slug: destinationChain.slug
//         });
//         console.log('Added Destination Chain:', {
//           name: destinationChain.name,
//           slug: destinationChain.slug
//         });
//       } else {
//         console.warn(`Destination chain not found for key: ${xcmRef.destChain}`);
//       }
//     }
//   });

//   console.log('Final Result:', result);

//   return result;
// }

function getTokenAvailableDestinations(tokenSlug, xcmRefMap, chainInfoMap) {
  if (!tokenSlug) {
    console.warn('Token slug is empty or undefined.');
    return [];
  }
  const result = [];

  // Get the origin chain
  const originChainKey = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__._getOriginChainOfAsset)(tokenSlug);
  console.log('Origin Chain Key:', originChainKey);
  const originChain = chainInfoMap[originChainKey];
  console.log('Origin Chain Data >>>>>>>>>>>>>', originChain);
  if (originChain) {
    result.push({
      name: originChain.name,
      slug: originChain.slug
    });
    console.log('Added Origin Chain:', {
      name: originChain.name,
      slug: originChain.slug
    });
  } else {
    console.warn(`Origin chain not found for key: ${originChainKey}`);
  }

  // Process XCM references
  console.log('Processing XCM References:', xcmRefMap);
  Object.values(xcmRefMap).forEach(xcmRef => {
    console.log('Current XCM Reference:', xcmRef);
    if (xcmRef.srcAsset === tokenSlug) {
      console.log('Matched Token Slug in XCM Reference:', xcmRef);
      const destinationChain = chainInfoMap[xcmRef.destChain];
      console.log('Destination Chain Data:', destinationChain);
      if (destinationChain) {
        result.push({
          name: destinationChain.name,
          slug: destinationChain.slug
        });
        console.log('Added Destination Chain:', {
          name: destinationChain.name,
          slug: destinationChain.slug
        });
      } else {
        console.warn(`Destination chain not found for key: ${xcmRef.destChain}`);
        console.log('Keys in chainInfoMap:', Object.keys(chainInfoMap)); // Log all available keys
      }
    }
  });

  console.log('Final Result:', result);
  return result;
}
const defaultFilterAccount = account => !((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.isAccountAll)(account.address) || account.isReadOnly);
const filterAccountFunc = (chainInfoMap, assetRegistry, multiChainAssetMap, tokenGroupSlug) => {
  const isSetTokenSlug = !!tokenGroupSlug && !!assetRegistry[tokenGroupSlug];
  const isSetMultiChainAssetSlug = !!tokenGroupSlug && !!multiChainAssetMap[tokenGroupSlug];
  if (!tokenGroupSlug) {
    return defaultFilterAccount;
  }
  const chainAssets = Object.values(assetRegistry).filter(chainAsset => {
    const isTokenFungible = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__._isAssetFungibleToken)(chainAsset);
    if (isTokenFungible) {
      if (isSetTokenSlug) {
        return chainAsset.slug === tokenGroupSlug;
      }
      if (isSetMultiChainAssetSlug) {
        return chainAsset.multiChainAsset === tokenGroupSlug;
      }
    } else {
      return false;
    }
    return false;
  });
  return account => {
    const isLedger = !!account.isHardware;
    const isAccountEthereum = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(account.address);
    const validGen = account.availableGenesisHashes || [];
    const validLedgerNetwork = validGen.map(genesisHash => {
      var _findNetworkJsonByGen2;
      return (_findNetworkJsonByGen2 = (0,_subwallet_extension_koni_ui_utils_chain_getNetworkJsonByGenesisHash__WEBPACK_IMPORTED_MODULE_10__.findNetworkJsonByGenesisHash)(chainInfoMap, genesisHash)) === null || _findNetworkJsonByGen2 === void 0 ? void 0 : _findNetworkJsonByGen2.slug;
    }) || [];
    if (!defaultFilterAccount(account)) {
      return false;
    }
    return chainAssets.some(chainAsset => {
      const isValidLedger = isLedger ? isAccountEthereum || validLedgerNetwork.includes(chainAsset === null || chainAsset === void 0 ? void 0 : chainAsset.originChain) : true;
      return isAssetTypeValid(chainAsset, chainInfoMap, isAccountEthereum) && isValidLedger;
    });
  };
};
const hiddenFields = ['chain'];
const validateFields = ['value', 'to'];
const _SendFund = ({
  className = ''
}) => {
  var _chainInfoMap$destCha, _chainInfoMap$destCha2;
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useSetCurrentPage)('/transaction/send-fund');
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_19__.useTranslation)();
  const notification = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useNotification)();
  const {
    defaultData,
    onDone,
    persistData
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useTransactionContext)();
  const {
    defaultSlug: sendFundSlug
  } = defaultData;
  const isFirstRender = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_14__.useIsFirstRender)();
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].useForm();
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    return {
      ...defaultData
    };
  }, [defaultData]);
  const destChain = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useWatchTransaction)('destChain', form, defaultData);
  const transferAmount = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useWatchTransaction)('value', form, defaultData);
  const from = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useWatchTransaction)('from', form, defaultData);
  const chain = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useWatchTransaction)('chain', form, defaultData);
  const asset = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useWatchTransaction)('asset', form, defaultData);
  const {
    chainInfoMap,
    chainStateMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useSelector)(root => root.chainStore);
  const {
    assetRegistry,
    assetSettingMap,
    multiChainAssetMap,
    xcmRefMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useSelector)(root => root.assetRegistry);
  const {
    accounts,
    isAllAccount
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.accountState);
  const [maxTransfer, setMaxTransfer] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)('0');
  const checkAction = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.usePreCheckAction)(from, true, (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_21__.detectTranslate)('The account you are using is {{accountTitle}}, you cannot send assets with it'));
  const isZKModeEnabled = (0,_subwallet_extension_koni_ui_hooks_account_useIsMantaPayEnabled__WEBPACK_IMPORTED_MODULE_7__.useIsMantaPayEnabled)(from);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
  const [isTransferAll, setIsTransferAll] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
  const [, update] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)({});
  const [isBalanceReady, setIsBalanceReady] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(true);
  const [forceUpdateMaxValue, setForceUpdateMaxValue] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(undefined);
  const chainStatus = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    var _chainStateMap$chain;
    return (_chainStateMap$chain = chainStateMap[chain]) === null || _chainStateMap$chain === void 0 ? void 0 : _chainStateMap$chain.connectionStatus;
  }, [chain, chainStateMap]);
  const handleTransferAll = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(value => {
    setForceUpdateMaxValue({});
    setIsTransferAll(value);
  }, []);
  const {
    onError,
    onSuccess
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useHandleSubmitTransaction)(onDone, handleTransferAll);
  const destChainItems = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    return getTokenAvailableDestinations(asset, xcmRefMap, chainInfoMap);
  }, [chainInfoMap, asset, xcmRefMap]);
  const currentChainAsset = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    const _asset = isFirstRender ? defaultData.asset : asset;
    return _asset ? assetRegistry[_asset] : undefined;
  }, [isFirstRender, defaultData.asset, asset, assetRegistry]);
  const decimals = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    return currentChainAsset ? (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__._getAssetDecimals)(currentChainAsset) : 0;
  }, [currentChainAsset]);
  const extrinsicType = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    console.log('Debugging useMemo - chain:', chain);
    console.log('Debugging useMemo - destChain:', destChain);
    console.log('Debugging useMemo - currentChainAsset:', currentChainAsset);
    if (!currentChainAsset) {
      console.log('Debugging useMemo - No currentChainAsset. Returning ExtrinsicType.UNKNOWN.');
      return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_22__.ExtrinsicType.UNKNOWN;
    } else {
      if (chain !== destChain) {
        console.log('Debugging useMemo - chain !== destChain. Returning ExtrinsicType.TRANSFER_XCM.');
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_22__.ExtrinsicType.TRANSFER_XCM;
      } else {
        if (currentChainAsset.assetType === _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_23__._AssetType.NATIVE) {
          console.log('Debugging useMemo - currentChainAsset.assetType is NATIVE. Returning ExtrinsicType.TRANSFER_BALANCE.');
          return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_22__.ExtrinsicType.TRANSFER_BALANCE;
        } else {
          console.log('Debugging useMemo - currentChainAsset.assetType is not NATIVE. Returning ExtrinsicType.TRANSFER_TOKEN.');
          return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_22__.ExtrinsicType.TRANSFER_TOKEN;
        }
      }
    }
  }, [chain, currentChainAsset, destChain]);
  const fromChainNetworkPrefix = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useGetChainPrefixBySlug)(chain);
  const destChainNetworkPrefix = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useGetChainPrefixBySlug)(destChain);
  const destChainGenesisHash = ((_chainInfoMap$destCha = chainInfoMap[destChain]) === null || _chainInfoMap$destCha === void 0 ? void 0 : (_chainInfoMap$destCha2 = _chainInfoMap$destCha.substrateInfo) === null || _chainInfoMap$destCha2 === void 0 ? void 0 : _chainInfoMap$destCha2.genesisHash) || '';
  const tokenItems = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    return getTokenItems(from, accounts, chainInfoMap, assetRegistry, assetSettingMap, multiChainAssetMap, sendFundSlug, isZKModeEnabled);
  }, [accounts, assetRegistry, assetSettingMap, chainInfoMap, from, isZKModeEnabled, multiChainAssetMap, sendFundSlug]);
  const validateRecipientAddress = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)((rule, _recipientAddress) => {
    if (!_recipientAddress) {
      return Promise.reject(t('Recipient address is required'));
    }
    if (!(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_24__.isAddress)(_recipientAddress)) {
      return Promise.reject(t('Invalid recipient address'));
    }
    const {
      chain,
      destChain,
      from,
      to
    } = form.getFieldsValue();
    if (!from || !chain || !destChain) {
      return Promise.resolve();
    }
    const isOnChain = chain === destChain;
    const account = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.findAccountByAddress)(accounts, _recipientAddress);
    if (isOnChain) {
      if ((0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_25__.isSameAddress)(from, _recipientAddress)) {
        // todo: change message later
        return Promise.reject(t('The recipient address can not be the same as the sender address'));
      }
      const isNotSameAddressType = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(from) && !!_recipientAddress && !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(_recipientAddress) || !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(from) && !!_recipientAddress && (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(_recipientAddress);
      if (isNotSameAddressType) {
        // todo: change message later
        return Promise.reject(t('The recipient address must be same type as the current account address.'));
      }
    } else {
      const isDestChainEvmCompatible = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__._isChainEvmCompatible)(chainInfoMap[destChain]);
      if (isDestChainEvmCompatible !== (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(to)) {
        // todo: change message later
        if (isDestChainEvmCompatible) {
          return Promise.reject(t('The recipient address must be EVM type'));
        } else {
          return Promise.reject(t('The recipient address must be Substrate type'));
        }
      }
    }
    if (account !== null && account !== void 0 && account.isHardware) {
      var _destChainInfo$substr;
      const destChainInfo = chainInfoMap[destChain];
      const availableGen = account.availableGenesisHashes || [];
      if (!(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(account.address) && !availableGen.includes((destChainInfo === null || destChainInfo === void 0 ? void 0 : (_destChainInfo$substr = destChainInfo.substrateInfo) === null || _destChainInfo$substr === void 0 ? void 0 : _destChainInfo$substr.genesisHash) || '')) {
        const destChainName = (destChainInfo === null || destChainInfo === void 0 ? void 0 : destChainInfo.name) || 'Unknown';
        return Promise.reject(t('Wrong network. Your Ledger account is not supported by {{network}}. Please choose another receiving account and try again.', {
          replace: {
            network: destChainName
          }
        }));
      }
    }
    return Promise.resolve();
  }, [accounts, chainInfoMap, form, t]);
  const validateAmount = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)((rule, amount) => {
    if (!amount) {
      return Promise.reject(t('Amount is required'));
    }
    if (new bignumber_js__WEBPACK_IMPORTED_MODULE_11__["default"](amount).eq(new bignumber_js__WEBPACK_IMPORTED_MODULE_11__["default"](0))) {
      return Promise.reject(t('Amount must be greater than 0'));
    }
    if (new bignumber_js__WEBPACK_IMPORTED_MODULE_11__["default"](amount).gt(new bignumber_js__WEBPACK_IMPORTED_MODULE_11__["default"](maxTransfer))) {
      const maxString = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.formatBalance)(maxTransfer, decimals);
      return Promise.reject(t('Amount must be equal or less than {{number}}', {
        replace: {
          number: maxString
        }
      }));
    }
    return Promise.resolve();
  }, [decimals, maxTransfer, t]);
  const onValuesChange = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)((part, values) => {
    const validateField = [];
    if (part.from) {
      setForceUpdateMaxValue(undefined);
      form.resetFields(['asset']);
      // Because cache data, so next data may be same with default data
      form.setFields([{
        name: 'asset',
        value: ''
      }]);
    }
    if (part.destChain) {
      setForceUpdateMaxValue(isTransferAll ? {} : undefined);
      if (values.to) {
        validateField.push('to');
      }
    }
    if (part.asset) {
      const chain = assetRegistry[part.asset].originChain;
      if (values.value) {
        validateField.push('value');
      }
      form.setFieldsValue({
        chain: chain,
        destChain: chain
      });
      if (values.to) {
        validateField.push('to');
      }
      setIsTransferAll(false);
      setForceUpdateMaxValue(undefined);
    }
    if (validateField.length) {
      form.validateFields(validateField).catch(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.noop);
    }
    persistData(form.getFieldsValue());
  }, [form, assetRegistry, isTransferAll, persistData]);

  // Submit transaction
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(values => {
    console.log('Form submitted with values:', values);
    setLoading(true);
    const {
      asset,
      chain,
      destChain,
      from,
      to,
      value
    } = values;
    let sendPromise;
    console.log('Fetching account for address:', from);
    const account = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.findAccountByAddress)(accounts, from);
    if (!account) {
      setLoading(false);
      notification({
        message: t("Can't find account"),
        type: 'error'
      });
      return;
    }
    const isLedger = !!account.isHardware;
    const isEthereum = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(account.address);
    const chainAsset = assetRegistry[asset];
    console.log('Account details:', account);
    console.log('isLedger:', isLedger, 'isEthereum:', isEthereum);
    console.log('Chain asset details:', chainAsset);
    if (chain === destChain) {
      if (isLedger) {
        if (isEthereum) {
          if (!(0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_17__._isTokenTransferredByEvm)(chainAsset)) {
            setLoading(false);
            notification({
              message: t('Ledger does not support transfer for this token'),
              type: 'warning'
            });
            return;
          }
        }
      }

      // Transfer token or send fund
      sendPromise = (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__.makeTransfer)({
        from,
        networkKey: chain,
        to: to,
        tokenSlug: asset,
        value: value,
        transferAll: isTransferAll
      });
    } else {
      if (isLedger) {
        setLoading(false);
        notification({
          message: t('This feature is not available for Ledger account'),
          type: 'warning'
        });
        return;
      }

      // Make cross chain transfer
      sendPromise = (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__.makeCrossChainTransfer)({
        destinationNetworkKey: destChain,
        from,
        originNetworkKey: chain,
        tokenSlug: asset,
        to,
        value,
        transferAll: isTransferAll
      });
    }
    setTimeout(() => {
      // Handle transfer action
      sendPromise.then(onSuccess).catch(onError).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [accounts, assetRegistry, notification, t, isTransferAll, onSuccess, onError]);
  const onFilterAccountFunc = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => filterAccountFunc(chainInfoMap, assetRegistry, multiChainAssetMap, sendFundSlug), [assetRegistry, chainInfoMap, multiChainAssetMap, sendFundSlug]);
  const onSetMaxTransferable = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(value => {
    const bnMaxTransfer = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_26___default())(maxTransfer);
    if (!bnMaxTransfer.isZero()) {
      setIsTransferAll(value);
    }
  }, [maxTransfer]);

  // TODO: Need to review
  // Auto fill logic
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    const {
      asset,
      from
    } = form.getFieldsValue();
    const updateInfoWithTokenSlug = tokenSlug => {
      const tokenInfo = assetRegistry[tokenSlug];
      form.setFieldsValue({
        asset: tokenSlug,
        chain: tokenInfo.originChain,
        destChain: tokenInfo.originChain
      });
    };
    if (tokenItems.length) {
      let isApplyDefaultAsset = true;
      if (!asset) {
        const account = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.findAccountByAddress)(accounts, from);
        if (account !== null && account !== void 0 && account.originGenesisHash) {
          const network = (0,_subwallet_extension_koni_ui_utils_chain_getNetworkJsonByGenesisHash__WEBPACK_IMPORTED_MODULE_10__.findNetworkJsonByGenesisHash)(chainInfoMap, account.originGenesisHash);
          if (network) {
            const token = tokenItems.find(item => item.originChain === network.slug);
            if (token) {
              updateInfoWithTokenSlug(token.slug);
              isApplyDefaultAsset = false;
            }
          }
        }
      } else {
        // Apply default asset if current asset is not in token list
        isApplyDefaultAsset = !tokenItems.some(i => i.slug === asset);
      }
      if (isApplyDefaultAsset) {
        updateInfoWithTokenSlug(tokenItems[0].slug);
      }
    }
  }, [accounts, tokenItems, assetRegistry, form, chainInfoMap]);

  // Get max transfer value
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    let cancel = false;
    if (from && asset) {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__.getMaxTransfer)({
        address: from,
        networkKey: assetRegistry[asset].originChain,
        token: asset,
        isXcmTransfer: chain !== destChain,
        destChain
      }).then(balance => {
        !cancel && setMaxTransfer(balance.value);
      }).catch(() => {
        !cancel && setMaxTransfer('0');
      }).finally(() => {
        if (!cancel) {
          const value = form.getFieldValue('value');
          if (value) {
            setTimeout(() => {
              form.validateFields(['value']).finally(() => update({}));
            }, 100);
          }
        }
      });
    }
    return () => {
      cancel = true;
    };
  }, [asset, assetRegistry, chain, chainStatus, destChain, form, from]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    const bnTransferAmount = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_26___default())(transferAmount || '0');
    const bnMaxTransfer = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_26___default())(maxTransfer || '0');
    if (bnTransferAmount.gt(_polkadot_util__WEBPACK_IMPORTED_MODULE_27__.BN_ZERO) && bnTransferAmount.eq(bnMaxTransfer)) {
      setIsTransferAll(true);
    }
  }, [maxTransfer, transferAmount]);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useRestoreTransaction)(form);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useInitValidateTransaction)(validateFields, form, defaultData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_parts__WEBPACK_IMPORTED_MODULE_15__.TransactionContent, {
      className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(`${className} -transaction-content`),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: '__brief common-text text-light-4 text-center',
        children: t('You are performing a transfer of a fungible token')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: 'form-container form-space-sm',
        form: form,
        initialValues: formDefault,
        onFinish: onSubmit,
        onValuesChange: onValuesChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()({
            hidden: !isAllAccount
          }),
          name: 'from',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Field_AccountSelector__WEBPACK_IMPORTED_MODULE_1__.AccountSelector, {
            addressPrefix: fromChainNetworkPrefix,
            disabled: !isAllAccount,
            filter: onFilterAccountFunc,
            label: t('Send from')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: 'form-row',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
            name: 'asset',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Field_TokenSelector__WEBPACK_IMPORTED_MODULE_5__.TokenSelector, {
              disabled: !tokenItems.length,
              items: tokenItems,
              placeholder: t('Select token'),
              showChainInSelected: true,
              tooltip: t('Select token')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__["default"], {
            className: 'middle-item',
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_29__["default"],
            size: 'md'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
            name: 'destChain',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Field_ChainSelector__WEBPACK_IMPORTED_MODULE_4__.ChainSelector, {
              disabled: !destChainItems.length,
              items: destChainItems,
              title: t('Select destination chain'),
              tooltip: t('Select destination chain')
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.HiddenInput, {
          fields: hiddenFields
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
          name: 'to',
          rules: [{
            validator: validateRecipientAddress
          }],
          statusHelpAsTooltip: true,
          validateTrigger: "onBlur",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Field_AddressInput__WEBPACK_IMPORTED_MODULE_2__.AddressInput, {
            addressPrefix: destChainNetworkPrefix,
            allowDomain: true,
            chain: chain,
            label: t('Send to'),
            networkGenesisHash: destChainGenesisHash,
            placeholder: t('Account address'),
            saveAddress: true,
            showAddressBook: true,
            showScanner: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
          name: 'value',
          rules: [{
            validator: validateAmount
          }],
          statusHelpAsTooltip: true,
          validateTrigger: "onBlur",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Field_AmountInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
            decimals: decimals,
            forceUpdateMaxValue: forceUpdateMaxValue,
            maxValue: maxTransfer,
            onSetMax: onSetMaxTransferable,
            showMaxButton: true,
            tooltip: t('Amount')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_15__.FreeBalance, {
        address: from,
        chain: chain,
        onBalanceReady: setIsBalanceReady,
        tokenSlug: asset
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_15__.TransactionFooter, {
      className: `${className} -transaction-footer`,
      errors: [],
      warnings: [],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_30__["default"], {
        disabled: !isBalanceReady,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_31__["default"],
          weight: 'fill'
        }),
        loading: loading,
        onClick: checkAction(form.submit, extrinsicType),
        schema: isTransferAll ? 'warning' : undefined,
        children: isTransferAll ? t('Transfer all') : t('Transfer')
      })
    })]
  });
};
const SendFund = (0,styled_components__WEBPACK_IMPORTED_MODULE_32__["default"])(_SendFund).withConfig({
  displayName: "SendFund",
  componentId: "sc-wyykvt-0"
})(({
  theme
}) => {
  const token = theme.token;
  return {
    '.__brief': {
      paddingLeft: token.padding,
      paddingRight: token.padding,
      marginBottom: token.marginMD
    },
    '.form-row': {
      gap: 8
    },
    '.middle-item': {
      marginBottom: token.marginSM
    },
    '&.-transaction-content.-is-zero-balance': {
      '.free-balance .ant-number': {
        '.ant-number-integer, .ant-number-decimal': {
          color: `${token.colorError} !important`
        }
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendFund);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/PaperPlaneRight.esm.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/PaperPlaneRight.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/index.esm.js */ "../../node_modules/phosphor-react/dist/lib/index.esm.js");
/* harmony import */ var _lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/IconBase.esm.js */ "../../node_modules/phosphor-react/dist/lib/IconBase.esm.js");




/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "72",
    y1: "128",
    x2: "136",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "72",
    y1: "128",
    x2: "136",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "72",
    y1: "128",
    x2: "136",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "72",
    y1: "128",
    x2: "136",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "72",
    y1: "128",
    x2: "136",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath = function renderPath(weight, color) {
  return (0,_lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__.renderPathForWeight)(weight, color, pathsByWeight);
};

var PaperPlaneRight = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
PaperPlaneRight.displayName = "PaperPlaneRight";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaperPlaneRight);
//# sourceMappingURL=PaperPlaneRight.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfVHJhbnNhY3Rpb25fdmFyaWFudHNfU2VuZEZ1bmRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVzRjtBQUU3QjtBQUU3QjtBQUNGO0FBQzJCO0FBQUE7QUFBQTtBQVNyRCxNQUFNTyxTQUFTLEdBQUcsQ0FBQztFQUFFQyxhQUFhO0VBQUVDLFNBQVM7RUFBRUMsUUFBUTtFQUFFQyxLQUFLO0VBQUVDO0FBQWMsQ0FBQyxLQUFLO0VBQ2xGLE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdiLG9HQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFYztFQUFNLENBQUMsR0FBR1IsMkRBQVEsRUFBVztFQUVyQyxvQkFDRSx3REFBQyxxRUFBb0I7SUFBQyxTQUFTLEVBQUVILGlEQUFFLENBQUNNLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBRTtJQUFBLHdCQUMvRCx1REFBQywyREFBTTtNQUNMLE9BQU8sRUFBRUMsUUFBUztNQUNsQixZQUFZLEVBQUVJLEtBQUssQ0FBQ0MsaUJBQWtCO01BQ3RDLFFBQVEsRUFBRUQsS0FBSyxDQUFDQyxpQkFBa0I7TUFDbEMsSUFBSSxFQUFFLEVBQUc7TUFDVCxNQUFNLEVBQUVILE1BQU87TUFDZixTQUFTLEVBQUVFLEtBQUssQ0FBQ0MsaUJBQWtCO01BQ25DLEtBQUssRUFBRVAsYUFBYSxJQUFJO0lBQUUsRUFDMUIsRUFDREcsS0FBSyxJQUFJRSxDQUFDLENBQUMsUUFBUSxDQUFDO0VBQUEsRUFDQTtBQUUzQixDQUFDO0FBRUQsTUFBTUcsYUFBYSxHQUFHWCw2REFBTSxDQUFDRSxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBQyxDQUFDO0VBQUVVLEtBQUssRUFBRTtJQUFFSDtFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQ3ZFLE9BQVE7SUFDTkksT0FBTyxFQUFFLE1BQU07SUFDZkMsS0FBSyxFQUFFTCxLQUFLLENBQUNDLGlCQUFpQjtJQUU5QixrQkFBa0IsRUFBRTtNQUNsQkssWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFFRCxhQUFhLEVBQUU7TUFDYkMsV0FBVyxFQUFFO0lBQ2Y7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVMLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRDVCO0FBQ0E7O0FBRW1FO0FBQ21CO0FBRVY7QUFDaEQ7QUFDYTtBQUNZO0FBQUE7QUFBQTtBQUFBO0FBVXJELE1BQU1ULFNBQVMsR0FBRyxDQUFDO0VBQUVrQixPQUFPO0VBQUVDLEtBQUs7RUFBRWpCLFNBQVM7RUFBRUUsS0FBSztFQUFFZ0IsY0FBYztFQUFFQztBQUFpQixDQUFDLEtBQUs7RUFDNUYsTUFBTTtJQUFFZjtFQUFFLENBQUMsR0FBR2Isb0dBQWMsRUFBRTtFQUM5QixNQUFNO0lBQUVjO0VBQU0sQ0FBQyxHQUFHUiwyREFBUSxFQUFXO0VBQ3JDLE1BQU07SUFBRXVCLEtBQUs7SUFBRUMsU0FBUztJQUFFQyxrQkFBa0I7SUFBRUMsZUFBZTtJQUFFQztFQUFhLENBQUMsR0FBR1gsaUZBQWEsQ0FBQ0ksS0FBSyxFQUFFRCxPQUFPLEVBQUVHLFNBQVMsQ0FBQztFQUV4SEosZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RHLGNBQWMsYUFBZEEsY0FBYyx1QkFBZEEsY0FBYyxDQUFHLENBQUNHLFNBQVMsSUFBSSxDQUFDRCxLQUFLLENBQUM7RUFDeEMsQ0FBQyxFQUFFLENBQUNBLEtBQUssRUFBRUMsU0FBUyxFQUFFSCxjQUFjLENBQUMsQ0FBQztFQUV0QyxJQUFJLENBQUNGLE9BQU8sSUFBSSxDQUFDQyxLQUFLLEVBQUU7SUFDdEIsb0JBQU8sbUhBQUs7RUFDZDtFQUVBLG9CQUNFLHdEQUFDLHFFQUFvQjtJQUFDLFNBQVMsRUFBRXZCLGlEQUFFLENBQUNNLFNBQVMsRUFBRSxjQUFjLENBQUU7SUFBQSxXQUM1RCxDQUFDb0IsS0FBSyxpQkFBSTtNQUFNLFNBQVMsRUFBQyxTQUFTO01BQUEsVUFBRWxCLEtBQUssSUFBSUUsQ0FBQyxDQUFDLDJCQUEyQjtJQUFDLEVBQVEsRUFDcEZpQixTQUFTLGlCQUFJLHVEQUFDLDJEQUFpQjtNQUFDLElBQUksRUFBRTtJQUFHLEVBQUcsRUFDNUNELEtBQUssaUJBQUksdURBQUMsZ0VBQWU7TUFBQyxTQUFTLEVBQUUsZUFBZ0I7TUFBQSxVQUFFQTtJQUFLLEVBQW1CLEVBRTlFLENBQUNDLFNBQVMsSUFBSSxDQUFDRCxLQUFLLElBQUksQ0FBQyxDQUFDRyxlQUFlLGlCQUN2Qyx1REFBQywyREFBTTtNQUNMLE9BQU8sRUFBRUQsa0JBQWtCLENBQUNyQixRQUFRLElBQUksRUFBRztNQUMzQyxZQUFZLEVBQUVJLEtBQUssQ0FBQ0MsaUJBQWtCO01BQ3RDLFFBQVEsRUFBRUQsS0FBSyxDQUFDQyxpQkFBa0I7TUFDbEMsSUFBSSxFQUFFLEVBQUc7TUFDVCxNQUFNLEVBQUVnQixrQkFBa0IsQ0FBQ25CLE1BQU87TUFDbEMsU0FBUyxFQUFFRSxLQUFLLENBQUNDLGlCQUFrQjtNQUNuQyxLQUFLLEVBQUVnQixrQkFBa0IsQ0FBQ0c7SUFBTSxFQUVuQyxFQUdELENBQUNKLFNBQVMsSUFBSSxDQUFDRCxLQUFLLElBQUksQ0FBQyxDQUFDRCxTQUFTLElBQUtBLFNBQVMsS0FBS0ksZUFBZ0IsaUJBQ3BFO01BQUEsd0JBQ0U7UUFBTSxTQUFTLEVBQUUsUUFBUztRQUFBLG1CQUFRbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUFBLEVBQWMsZUFDeEQsdURBQUMsMkRBQU07UUFDTCxPQUFPLEVBQUUsQ0FBQW9CLFlBQVksYUFBWkEsWUFBWSx1QkFBWkEsWUFBWSxDQUFFdkIsUUFBUSxLQUFJLEVBQUc7UUFDdEMsWUFBWSxFQUFFSSxLQUFLLENBQUNDLGlCQUFrQjtRQUN0QyxRQUFRLEVBQUVELEtBQUssQ0FBQ0MsaUJBQWtCO1FBQ2xDLElBQUksRUFBRSxFQUFHO1FBQ1QsTUFBTSxFQUFFa0IsWUFBWSxhQUFaQSxZQUFZLHVCQUFaQSxZQUFZLENBQUVyQixNQUFPO1FBQzdCLFNBQVMsRUFBRUUsS0FBSyxDQUFDQyxpQkFBa0I7UUFDbkMsS0FBSyxFQUFFa0IsWUFBWSxDQUFDQztNQUFNLEVBQzFCO0lBQUEsRUFFTDtFQUFBLEVBRWtCO0FBRTNCLENBQUM7QUFFRCxNQUFNQyxXQUFXLEdBQUc5Qiw2REFBTSxDQUFDRSxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBUSxDQUFDO0VBQUVVLEtBQUssRUFBRTtJQUFFSDtFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQzVFLE9BQU87SUFDTEksT0FBTyxFQUFFLE1BQU07SUFDZmtCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCakIsS0FBSyxFQUFFTCxLQUFLLENBQUNDLGlCQUFpQjtJQUU5QixVQUFVLEVBQUU7TUFDVk0sV0FBVyxFQUFFO0lBQ2YsQ0FBQztJQUVELGdCQUFnQixFQUFFO01BQ2hCRixLQUFLLEVBQUVMLEtBQUssQ0FBQ3VCO0lBQ2YsQ0FBQztJQUVELGtCQUFrQixFQUFFO01BQ2xCakIsWUFBWSxFQUFFO0lBQ2hCO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRjFCO0FBQ0E7O0FBRzBCO0FBQ2E7QUFBQTtBQU12QyxNQUFNNUIsU0FBUyxHQUFHLENBQUM7RUFBRStCLFFBQVE7RUFBRTdCLFNBQVMsR0FBRztBQUFVLENBQUMsS0FBSztFQUN6RCxvQkFDRTtJQUFLLFNBQVMsRUFBRyx1QkFBc0JBLFNBQVUsRUFBRTtJQUFBLFVBQ2hENkI7RUFBUSxFQUNMO0FBRVYsQ0FBQztBQUVELE1BQU1DLGtCQUFrQixHQUFHbEMsNkRBQU0sQ0FBQ0UsU0FBUyxDQUFDO0VBQUE7RUFBQTtBQUFBLEdBQUMsQ0FBQztFQUFFVTtBQUFNLENBQUMsS0FBSztFQUMxRCxPQUFRLENBRVIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlc0Isa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmpDO0FBQ0E7O0FBRzBCO0FBQ2E7QUFBQTtBQUFBO0FBUXZDLE1BQU1oQyxTQUFTLEdBQUcsQ0FBQztFQUFFK0IsUUFBUTtFQUFFN0IsU0FBUyxHQUFHLEVBQUU7RUFBRStCLE1BQU07RUFBRUM7QUFBZ0IsQ0FBQyxLQUFLO0VBQzNFLG9CQUNFO0lBQUssU0FBUyxFQUFHLHNCQUFxQmhDLFNBQVUsRUFBRTtJQUFBLFdBQy9DK0IsTUFBTSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxpQkFBSTtNQUFLLFNBQVMsRUFBQyxnQkFBZ0I7TUFBQSxVQUNsREYsTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxLQUFLLGtCQUNuQjtRQUFBLFVBQWtCRDtNQUFDLEdBQVRDLEtBQUssQ0FDaEI7SUFBQyxFQUNFLEVBQ0xKLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsaUJBQUk7TUFBSyxTQUFTLEVBQUMsa0JBQWtCO01BQUEsVUFDdERELFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLENBQUNHLENBQUMsRUFBRUQsS0FBSyxrQkFDckI7UUFBQSxVQUFrQkM7TUFBQyxHQUFURCxLQUFLLENBQ2hCO0lBQUMsRUFDRSxFQUNMUCxRQUFRO0VBQUEsRUFDTDtBQUVWLENBQUM7QUFFRCxNQUFNUyxpQkFBaUIsR0FBRzFDLDZEQUFNLENBQUNFLFNBQVMsQ0FBQztFQUFBO0VBQUE7QUFBQSxHQUFDLENBQUM7RUFBRVU7QUFBTSxDQUFDLEtBQUs7RUFDekQsT0FBUSxDQUVSLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZThCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNoQztBQUNBOztBQUUyRDtBQUNKO0FBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyRTtBQUNBOztBQUUrRztBQUNsQjtBQUUrRztBQUUzSDtBQUNYO0FBQzBCO0FBQ047QUFDTjtBQUNRO0FBQ2U7QUFDaUs7QUFDcks7QUFDTztBQUdEO0FBQ087QUFDM0Q7QUFFekI7QUFDSjtBQUNxQztBQUNRO0FBQzFCO0FBQ1I7QUFDUTtBQUVGO0FBQ3dCO0FBRVM7QUFBQTtBQUFBO0FBQUE7QUFJOUUsU0FBU21ELGdCQUFnQixDQUN2QkMsVUFBdUIsRUFDdkJDLFlBQXdDLEVBQ3hDQyxpQkFBMEIsRUFDMUI7RUFDQSxPQUFPL0MsOEdBQXFCLENBQUM4QyxZQUFZLENBQUNELFVBQVUsQ0FBQ0csV0FBVyxDQUFDLENBQUMsS0FBS0QsaUJBQWlCO0FBQzFGO0FBRUEsU0FBU0UsYUFBYSxDQUNwQjlFLE9BQWUsRUFDZitFLFFBQXVCLEVBQ3ZCSixZQUF3QyxFQUN4Q0ssYUFBMEMsRUFDMUNDLGVBQTZDLEVBQzdDQyxrQkFBb0QsRUFDcERDLGNBQXVCO0FBQUU7QUFDekJDLGVBQXlCLEVBQ1I7RUFDakIsTUFBTUMsT0FBTyxHQUFHL0Isd0ZBQW9CLENBQUN5QixRQUFRLEVBQUUvRSxPQUFPLENBQUM7RUFFdkQsSUFBSSxDQUFDcUYsT0FBTyxFQUFFO0lBQ1osT0FBTyxFQUFFO0VBQ1g7RUFFQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxDQUFDRCxPQUFPLENBQUNFLFVBQVU7RUFDckMsTUFBTUMsUUFBa0IsR0FBR0gsT0FBTyxDQUFDSSxzQkFBc0IsSUFBSSxFQUFFO0VBQy9ELE1BQU1DLGtCQUFrQixHQUFHRixRQUFRLENBQUN0RSxHQUFHLENBQUV5RSxXQUFXO0lBQUE7SUFBQSxnQ0FBS2pDLG1JQUE0QixDQUFDaUIsWUFBWSxFQUFFZ0IsV0FBVyxDQUFDLDBEQUF2RCxzQkFBeURDLElBQUk7RUFBQSxFQUFDO0VBQ3ZILE1BQU1oQixpQkFBaUIsR0FBR0oseUVBQWlCLENBQUN4RSxPQUFPLENBQUM7RUFDcEQsTUFBTTZGLGNBQWMsR0FBRyxDQUFDLENBQUNWLGNBQWMsSUFBSSxDQUFDLENBQUNILGFBQWEsQ0FBQ0csY0FBYyxDQUFDO0VBQzFFLE1BQU1XLHdCQUF3QixHQUFHLENBQUMsQ0FBQ1gsY0FBYyxJQUFJLENBQUMsQ0FBQ0Qsa0JBQWtCLENBQUNDLGNBQWMsQ0FBQztFQUV6RixJQUFJQSxjQUFjLEVBQUU7SUFDbEIsSUFBSSxFQUFFVSxjQUFjLElBQUlDLHdCQUF3QixDQUFDLEVBQUU7TUFDakQsT0FBTyxFQUFFO0lBQ1g7SUFFQSxNQUFNcEIsVUFBVSxHQUFHTSxhQUFhLENBQUNHLGNBQWMsQ0FBQztJQUNoRCxNQUFNWSxhQUFhLEdBQUdULFFBQVEsR0FBSVYsaUJBQWlCLElBQUljLGtCQUFrQixDQUFDTSxRQUFRLENBQUN0QixVQUFVLGFBQVZBLFVBQVUsdUJBQVZBLFVBQVUsQ0FBRUcsV0FBVyxDQUFDLEdBQUksSUFBSTtJQUVuSCxJQUFJZ0IsY0FBYyxFQUFFO01BQ2xCLElBQUlwQixnQkFBZ0IsQ0FBQ0MsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGlCQUFpQixDQUFDLElBQUltQixhQUFhLEVBQUU7UUFDbEYsTUFBTTtVQUFFRSxJQUFJO1VBQUVwQixXQUFXO1VBQUVlLElBQUk7VUFBRXpHO1FBQU8sQ0FBQyxHQUFHNkYsYUFBYSxDQUFDRyxjQUFjLENBQUM7UUFFekUsT0FBTyxDQUNMO1VBQ0VjLElBQUk7VUFDSkwsSUFBSTtVQUNKekcsTUFBTTtVQUNOMEY7UUFDRixDQUFDLENBQ0Y7TUFDSCxDQUFDLE1BQU07UUFDTCxPQUFPLEVBQUU7TUFDWDtJQUNGO0VBQ0Y7RUFFQSxNQUFNcUIsS0FBc0IsR0FBRyxFQUFFO0VBRWpDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ3BCLGFBQWEsQ0FBQyxDQUFDcUIsT0FBTyxDQUFFM0IsVUFBVSxJQUFLO0lBQ25ELE1BQU1xQixhQUFhLEdBQUdULFFBQVEsR0FBSVYsaUJBQWlCLElBQUljLGtCQUFrQixDQUFDTSxRQUFRLENBQUN0QixVQUFVLGFBQVZBLFVBQVUsdUJBQVZBLFVBQVUsQ0FBRUcsV0FBVyxDQUFDLEdBQUksSUFBSTtJQUNuSCxNQUFNeUIsZUFBZSxHQUFHMUUsOEdBQXFCLENBQUM4QyxVQUFVLENBQUM7SUFFekQsSUFBSSxFQUFFNEIsZUFBZSxJQUFJN0IsZ0JBQWdCLENBQUNDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxpQkFBaUIsQ0FBQyxJQUFJbUIsYUFBYSxDQUFDLEVBQUU7TUFDeEc7SUFDRjtJQUVBLElBQUksQ0FBQ1gsZUFBZSxJQUFJdEQsd0dBQWUsQ0FBQzRDLFVBQVUsQ0FBQyxFQUFFO01BQ25EO0lBQ0Y7SUFFQSxJQUFJb0Isd0JBQXdCLEVBQUU7TUFDNUIsSUFBSXBCLFVBQVUsQ0FBQzZCLGVBQWUsS0FBS3BCLGNBQWMsRUFBRTtRQUNqRGUsS0FBSyxDQUFDTSxJQUFJLENBQUM7VUFDVFAsSUFBSSxFQUFFdkIsVUFBVSxDQUFDdUIsSUFBSTtVQUNyQkwsSUFBSSxFQUFFbEIsVUFBVSxDQUFDa0IsSUFBSTtVQUNyQnpHLE1BQU0sRUFBRXVGLFVBQVUsQ0FBQ3ZGLE1BQU07VUFDekIwRixXQUFXLEVBQUVILFVBQVUsQ0FBQ0c7UUFDMUIsQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLE1BQU07TUFDTHFCLEtBQUssQ0FBQ00sSUFBSSxDQUFDO1FBQ1RQLElBQUksRUFBRXZCLFVBQVUsQ0FBQ3VCLElBQUk7UUFDckJMLElBQUksRUFBRWxCLFVBQVUsQ0FBQ2tCLElBQUk7UUFDckJ6RyxNQUFNLEVBQUV1RixVQUFVLENBQUN2RixNQUFNO1FBQ3pCMEYsV0FBVyxFQUFFSCxVQUFVLENBQUNHO01BQzFCLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsT0FBT3FCLEtBQUs7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFNBQVNPLDZCQUE2QixDQUNwQ3RHLFNBQWlCLEVBQ2pCdUcsU0FBb0MsRUFDcEMvQixZQUF3QyxFQUN2QjtFQUNqQixJQUFJLENBQUN4RSxTQUFTLEVBQUU7SUFDZHdHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO0lBRWpELE9BQU8sRUFBRTtFQUNYO0VBRUEsTUFBTUMsTUFBdUIsR0FBRyxFQUFFOztFQUVsQztFQUNBLE1BQU1DLGNBQWMsR0FBR25GLCtHQUFzQixDQUFDeEIsU0FBUyxDQUFDO0VBRXhEd0csT0FBTyxDQUFDSSxHQUFHLENBQUMsbUJBQW1CLEVBQUVELGNBQWMsQ0FBQztFQUVoRCxNQUFNakMsV0FBVyxHQUFHRixZQUFZLENBQUNtQyxjQUFjLENBQUM7RUFFaERILE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLGlDQUFpQyxFQUFFbEMsV0FBVyxDQUFDO0VBRTNELElBQUlBLFdBQVcsRUFBRTtJQUNmZ0MsTUFBTSxDQUFDTCxJQUFJLENBQUM7TUFDVlAsSUFBSSxFQUFFcEIsV0FBVyxDQUFDb0IsSUFBSTtNQUN0QkwsSUFBSSxFQUFFZixXQUFXLENBQUNlO0lBQ3BCLENBQUMsQ0FBQztJQUNGZSxPQUFPLENBQUNJLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtNQUNqQ2QsSUFBSSxFQUFFcEIsV0FBVyxDQUFDb0IsSUFBSTtNQUN0QkwsSUFBSSxFQUFFZixXQUFXLENBQUNlO0lBQ3BCLENBQUMsQ0FBQztFQUNKLENBQUMsTUFBTTtJQUNMZSxPQUFPLENBQUNDLElBQUksQ0FBRSxtQ0FBa0NFLGNBQWUsRUFBQyxDQUFDO0VBQ25FOztFQUVBO0VBQ0FILE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLDRCQUE0QixFQUFFTCxTQUFTLENBQUM7RUFFcERQLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDTSxTQUFTLENBQUMsQ0FBQ0wsT0FBTyxDQUFFVyxNQUFNLElBQUs7SUFDM0NMLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLHdCQUF3QixFQUFFQyxNQUFNLENBQUM7SUFFN0MsSUFBSUEsTUFBTSxDQUFDQyxRQUFRLEtBQUs5RyxTQUFTLEVBQUU7TUFDakN3RyxPQUFPLENBQUNJLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRUMsTUFBTSxDQUFDO01BRTNELE1BQU1FLGdCQUFnQixHQUFHdkMsWUFBWSxDQUFDcUMsTUFBTSxDQUFDRyxTQUFTLENBQUM7TUFFdkRSLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLHlCQUF5QixFQUFFRyxnQkFBZ0IsQ0FBQztNQUV4RCxJQUFJQSxnQkFBZ0IsRUFBRTtRQUNwQkwsTUFBTSxDQUFDTCxJQUFJLENBQUM7VUFDVlAsSUFBSSxFQUFFaUIsZ0JBQWdCLENBQUNqQixJQUFJO1VBQzNCTCxJQUFJLEVBQUVzQixnQkFBZ0IsQ0FBQ3RCO1FBQ3pCLENBQUMsQ0FBQztRQUNGZSxPQUFPLENBQUNJLEdBQUcsQ0FBQywwQkFBMEIsRUFBRTtVQUN0Q2QsSUFBSSxFQUFFaUIsZ0JBQWdCLENBQUNqQixJQUFJO1VBQzNCTCxJQUFJLEVBQUVzQixnQkFBZ0IsQ0FBQ3RCO1FBQ3pCLENBQUMsQ0FBQztNQUNKLENBQUMsTUFBTTtRQUNMZSxPQUFPLENBQUNDLElBQUksQ0FBRSx3Q0FBdUNJLE1BQU0sQ0FBQ0csU0FBVSxFQUFDLENBQUM7UUFDeEVSLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLHVCQUF1QixFQUFFWixNQUFNLENBQUNpQixJQUFJLENBQUN6QyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbkU7SUFDRjtFQUNGLENBQUMsQ0FBQzs7RUFFRmdDLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLGVBQWUsRUFBRUYsTUFBTSxDQUFDO0VBRXBDLE9BQU9BLE1BQU07QUFDZjtBQUVBLE1BQU1RLG9CQUFvQixHQUFJaEMsT0FBb0IsSUFBYyxFQUFFN0IsZ0ZBQVksQ0FBQzZCLE9BQU8sQ0FBQ3JGLE9BQU8sQ0FBQyxJQUFJcUYsT0FBTyxDQUFDaUMsVUFBVSxDQUFDO0FBRXRILE1BQU1DLGlCQUFpQixHQUFHLENBQ3hCNUMsWUFBd0MsRUFDeENLLGFBQTBDLEVBQzFDRSxrQkFBb0QsRUFDcERDLGNBQXVCLEtBQ2U7RUFDdEMsTUFBTVUsY0FBYyxHQUFHLENBQUMsQ0FBQ1YsY0FBYyxJQUFJLENBQUMsQ0FBQ0gsYUFBYSxDQUFDRyxjQUFjLENBQUM7RUFDMUUsTUFBTVcsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDWCxjQUFjLElBQUksQ0FBQyxDQUFDRCxrQkFBa0IsQ0FBQ0MsY0FBYyxDQUFDO0VBRXpGLElBQUksQ0FBQ0EsY0FBYyxFQUFFO0lBQ25CLE9BQU9rQyxvQkFBb0I7RUFDN0I7RUFFQSxNQUFNRyxXQUFXLEdBQUdyQixNQUFNLENBQUNDLE1BQU0sQ0FBQ3BCLGFBQWEsQ0FBQyxDQUFDeUMsTUFBTSxDQUFFL0MsVUFBVSxJQUFLO0lBQ3RFLE1BQU00QixlQUFlLEdBQUcxRSw4R0FBcUIsQ0FBQzhDLFVBQVUsQ0FBQztJQUV6RCxJQUFJNEIsZUFBZSxFQUFFO01BQ25CLElBQUlULGNBQWMsRUFBRTtRQUNsQixPQUFPbkIsVUFBVSxDQUFDa0IsSUFBSSxLQUFLVCxjQUFjO01BQzNDO01BRUEsSUFBSVcsd0JBQXdCLEVBQUU7UUFDNUIsT0FBT3BCLFVBQVUsQ0FBQzZCLGVBQWUsS0FBS3BCLGNBQWM7TUFDdEQ7SUFDRixDQUFDLE1BQU07TUFDTCxPQUFPLEtBQUs7SUFDZDtJQUVBLE9BQU8sS0FBSztFQUNkLENBQUMsQ0FBQztFQUVGLE9BQVFFLE9BQW9CLElBQWM7SUFDeEMsTUFBTUMsUUFBUSxHQUFHLENBQUMsQ0FBQ0QsT0FBTyxDQUFDRSxVQUFVO0lBQ3JDLE1BQU1YLGlCQUFpQixHQUFHSix5RUFBaUIsQ0FBQ2EsT0FBTyxDQUFDckYsT0FBTyxDQUFDO0lBQzVELE1BQU13RixRQUFrQixHQUFHSCxPQUFPLENBQUNJLHNCQUFzQixJQUFJLEVBQUU7SUFDL0QsTUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FBQ3RFLEdBQUcsQ0FBRXlFLFdBQVc7TUFBQTtNQUFBLGlDQUFLakMsbUlBQTRCLENBQUNpQixZQUFZLEVBQUVnQixXQUFXLENBQUMsMkRBQXZELHVCQUF5REMsSUFBSTtJQUFBLEVBQUMsSUFBSSxFQUFFO0lBRTdILElBQUksQ0FBQ3lCLG9CQUFvQixDQUFDaEMsT0FBTyxDQUFDLEVBQUU7TUFDbEMsT0FBTyxLQUFLO0lBQ2Q7SUFFQSxPQUFPbUMsV0FBVyxDQUFDRSxJQUFJLENBQUVoRCxVQUFVLElBQUs7TUFDdEMsTUFBTXFCLGFBQWEsR0FBR1QsUUFBUSxHQUFJVixpQkFBaUIsSUFBSWMsa0JBQWtCLENBQUNNLFFBQVEsQ0FBQ3RCLFVBQVUsYUFBVkEsVUFBVSx1QkFBVkEsVUFBVSxDQUFFRyxXQUFXLENBQUMsR0FBSSxJQUFJO01BRW5ILE9BQU9KLGdCQUFnQixDQUFDQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsaUJBQWlCLENBQUMsSUFBSW1CLGFBQWE7SUFDdkYsQ0FBQyxDQUFDO0VBQ0osQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNNEIsWUFBeUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUMzRCxNQUFNQyxjQUEyQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztBQUVuRSxNQUFNQyxTQUFTLEdBQUcsQ0FBQztFQUFFN0ksU0FBUyxHQUFHO0FBQVUsQ0FBQyxLQUFnQztFQUFBO0VBQzFFK0QscUZBQWlCLENBQUMsd0JBQXdCLENBQUM7RUFDM0MsTUFBTTtJQUFFM0Q7RUFBRSxDQUFDLEdBQUdiLDhEQUFjLEVBQUU7RUFDOUIsTUFBTXVKLFlBQVksR0FBR25GLG1GQUFlLEVBQUU7RUFFdEMsTUFBTTtJQUFFb0YsV0FBVztJQUFFQyxNQUFNO0lBQUVDO0VBQVksQ0FBQyxHQUFHakYseUZBQXFCLEVBQWtCO0VBQ3BGLE1BQU07SUFBRWtGLFdBQVcsRUFBRUM7RUFBYSxDQUFDLEdBQUdKLFdBQVc7RUFDakQsTUFBTUssYUFBYSxHQUFHaEUsOERBQWdCLEVBQUU7RUFFeEMsTUFBTSxDQUFDaUUsSUFBSSxDQUFDLEdBQUd6RSxvRUFBWSxFQUFrQjtFQUM3QyxNQUFNMkUsV0FBVyxHQUFHckUsK0NBQU8sQ0FBQyxNQUFzQjtJQUNoRCxPQUFPO01BQ0wsR0FBRzZEO0lBQ0wsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDQSxXQUFXLENBQUMsQ0FBQztFQUVqQixNQUFNWixTQUFTLEdBQUdsRSx1RkFBbUIsQ0FBQyxXQUFXLEVBQUVvRixJQUFJLEVBQUVOLFdBQVcsQ0FBQztFQUNyRSxNQUFNUyxjQUFjLEdBQUd2Rix1RkFBbUIsQ0FBQyxPQUFPLEVBQUVvRixJQUFJLEVBQUVOLFdBQVcsQ0FBQztFQUN0RSxNQUFNVSxJQUFJLEdBQUd4Rix1RkFBbUIsQ0FBQyxNQUFNLEVBQUVvRixJQUFJLEVBQUVOLFdBQVcsQ0FBQztFQUMzRCxNQUFNOUgsS0FBSyxHQUFHZ0QsdUZBQW1CLENBQUMsT0FBTyxFQUFFb0YsSUFBSSxFQUFFTixXQUFXLENBQUM7RUFDN0QsTUFBTVcsS0FBSyxHQUFHekYsdUZBQW1CLENBQUMsT0FBTyxFQUFFb0YsSUFBSSxFQUFFTixXQUFXLENBQUM7RUFFN0QsTUFBTTtJQUFFcEQsWUFBWTtJQUFFZ0U7RUFBYyxDQUFDLEdBQUc3RiwrRUFBVyxDQUFFOEYsSUFBSSxJQUFLQSxJQUFJLENBQUNDLFVBQVUsQ0FBQztFQUM5RSxNQUFNO0lBQUU3RCxhQUFhO0lBQUVDLGVBQWU7SUFBRUMsa0JBQWtCO0lBQUV3QjtFQUFVLENBQUMsR0FBRzVELCtFQUFXLENBQUU4RixJQUFJLElBQUtBLElBQUksQ0FBQzVELGFBQWEsQ0FBQztFQUNuSCxNQUFNO0lBQUVELFFBQVE7SUFBRStEO0VBQWEsQ0FBQyxHQUFHaEcsK0VBQVcsQ0FBRWlHLEtBQWdCLElBQUtBLEtBQUssQ0FBQ0MsWUFBWSxDQUFDO0VBQ3hGLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRy9FLGdEQUFRLENBQVMsR0FBRyxDQUFDO0VBQzNELE1BQU1nRixXQUFXLEdBQUd2RyxxRkFBaUIsQ0FBQzZGLElBQUksRUFBRSxJQUFJLEVBQUV6RyxpRkFBZSxDQUFDLCtFQUErRSxDQUFDLENBQUM7RUFDbkosTUFBTW9ILGVBQWUsR0FBR2xHLHFIQUFvQixDQUFDdUYsSUFBSSxDQUFDO0VBRWxELE1BQU0sQ0FBQ1ksT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR25GLGdEQUFRLENBQUMsS0FBSyxDQUFDO0VBQzdDLE1BQU0sQ0FBQ29GLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR3JGLGdEQUFRLENBQUMsS0FBSyxDQUFDO0VBQ3pELE1BQU0sR0FBR3NGLE1BQU0sQ0FBQyxHQUFHdEYsZ0RBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMvQixNQUFNLENBQUN1RixjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUd4RixnREFBUSxDQUFDLElBQUksQ0FBQztFQUMxRCxNQUFNLENBQUN5RixtQkFBbUIsRUFBRUMsc0JBQXNCLENBQUMsR0FBRzFGLGdEQUFRLENBQW1CMkYsU0FBUyxDQUFDO0VBQzNGLE1BQU1DLFdBQVcsR0FBRzdGLCtDQUFPLENBQUM7SUFBQTtJQUFBLCtCQUFNeUUsYUFBYSxDQUFDMUksS0FBSyxDQUFDLHlEQUFwQixxQkFBc0IrSixnQkFBZ0I7RUFBQSxHQUFFLENBQUMvSixLQUFLLEVBQUUwSSxhQUFhLENBQUMsQ0FBQztFQUVqRyxNQUFNc0IsaUJBQWlCLEdBQUdoRyxtREFBVyxDQUFFeEQsS0FBYyxJQUFLO0lBQ3hEb0osc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUJMLGdCQUFnQixDQUFDL0ksS0FBSyxDQUFDO0VBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixNQUFNO0lBQUV5SixPQUFPO0lBQUVDO0VBQVUsQ0FBQyxHQUFHMUgsOEZBQTBCLENBQUN1RixNQUFNLEVBQUVpQyxpQkFBaUIsQ0FBQztFQUVwRixNQUFNRyxjQUFjLEdBQUdsRywrQ0FBTyxDQUFrQixNQUFNO0lBQ3BELE9BQU91Qyw2QkFBNkIsQ0FBQ2lDLEtBQUssRUFBRWhDLFNBQVMsRUFBRS9CLFlBQVksQ0FBQztFQUN0RSxDQUFDLEVBQUUsQ0FBQ0EsWUFBWSxFQUFFK0QsS0FBSyxFQUFFaEMsU0FBUyxDQUFDLENBQUM7RUFFcEMsTUFBTTJELGlCQUFpQixHQUFHbkcsK0NBQU8sQ0FBQyxNQUFNO0lBQ3RDLE1BQU1vRyxNQUFNLEdBQUdsQyxhQUFhLEdBQUdMLFdBQVcsQ0FBQ1csS0FBSyxHQUFHQSxLQUFLO0lBRXhELE9BQU80QixNQUFNLEdBQUd0RixhQUFhLENBQUNzRixNQUFNLENBQUMsR0FBR1IsU0FBUztFQUNuRCxDQUFDLEVBQUUsQ0FBQzFCLGFBQWEsRUFBRUwsV0FBVyxDQUFDVyxLQUFLLEVBQUVBLEtBQUssRUFBRTFELGFBQWEsQ0FBQyxDQUFDO0VBRTVELE1BQU0vRixRQUFRLEdBQUdpRiwrQ0FBTyxDQUFDLE1BQU07SUFDN0IsT0FBT21HLGlCQUFpQixHQUFHM0ksMEdBQWlCLENBQUMySSxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7RUFDckUsQ0FBQyxFQUFFLENBQUNBLGlCQUFpQixDQUFDLENBQUM7RUFFdkIsTUFBTUUsYUFBYSxHQUFHckcsK0NBQU8sQ0FBQyxNQUFxQjtJQUNqRHlDLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLDRCQUE0QixFQUFFOUcsS0FBSyxDQUFDO0lBQ2hEMEcsT0FBTyxDQUFDSSxHQUFHLENBQUMsZ0NBQWdDLEVBQUVJLFNBQVMsQ0FBQztJQUN4RFIsT0FBTyxDQUFDSSxHQUFHLENBQUMsd0NBQXdDLEVBQUVzRCxpQkFBaUIsQ0FBQztJQUV4RSxJQUFJLENBQUNBLGlCQUFpQixFQUFFO01BQ3RCMUQsT0FBTyxDQUFDSSxHQUFHLENBQUMsNEVBQTRFLENBQUM7TUFFekYsT0FBT3RGLGtHQUFxQjtJQUM5QixDQUFDLE1BQU07TUFDTCxJQUFJeEIsS0FBSyxLQUFLa0gsU0FBUyxFQUFFO1FBQ3ZCUixPQUFPLENBQUNJLEdBQUcsQ0FBQyxnRkFBZ0YsQ0FBQztRQUU3RixPQUFPdEYsdUdBQTBCO01BQ25DLENBQUMsTUFBTTtRQUNMLElBQUk0SSxpQkFBaUIsQ0FBQ0ssU0FBUyxLQUFLbEosMkVBQWlCLEVBQUU7VUFDckRtRixPQUFPLENBQUNJLEdBQUcsQ0FBQyxzR0FBc0csQ0FBQztVQUVuSCxPQUFPdEYsMkdBQThCO1FBQ3ZDLENBQUMsTUFBTTtVQUNMa0YsT0FBTyxDQUFDSSxHQUFHLENBQUMsd0dBQXdHLENBQUM7VUFFckgsT0FBT3RGLHlHQUE0QjtRQUNyQztNQUNGO0lBQ0Y7RUFDRixDQUFDLEVBQUUsQ0FBQ3hCLEtBQUssRUFBRW9LLGlCQUFpQixFQUFFbEQsU0FBUyxDQUFDLENBQUM7RUFFekMsTUFBTTJELHNCQUFzQixHQUFHdEksMkZBQXVCLENBQUN2QyxLQUFLLENBQUM7RUFDN0QsTUFBTThLLHNCQUFzQixHQUFHdkksMkZBQXVCLENBQUMyRSxTQUFTLENBQUM7RUFDakUsTUFBTTZELG9CQUFvQixHQUFHLDBCQUFBckcsWUFBWSxDQUFDd0MsU0FBUyxDQUFDLG9GQUF2QixzQkFBeUI4RCxhQUFhLDJEQUF0Qyx1QkFBd0N0RixXQUFXLEtBQUksRUFBRTtFQUV0RixNQUFNdUYsVUFBVSxHQUFHaEgsK0NBQU8sQ0FBa0IsTUFBTTtJQUNoRCxPQUFPWSxhQUFhLENBQ2xCMkQsSUFBSSxFQUNKMUQsUUFBUSxFQUNSSixZQUFZLEVBQ1pLLGFBQWEsRUFDYkMsZUFBZSxFQUNmQyxrQkFBa0IsRUFDbEJpRCxZQUFZLEVBQ1ppQixlQUFlLENBQ2hCO0VBQ0gsQ0FBQyxFQUFFLENBQUNyRSxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsZUFBZSxFQUFFTixZQUFZLEVBQUU4RCxJQUFJLEVBQUVXLGVBQWUsRUFBRWxFLGtCQUFrQixFQUFFaUQsWUFBWSxDQUFDLENBQUM7RUFFckgsTUFBTWdELHdCQUF3QixHQUFHbEgsbURBQVcsQ0FBQyxDQUFDbUgsSUFBVSxFQUFFQyxpQkFBeUIsS0FBb0I7SUFDckcsSUFBSSxDQUFDQSxpQkFBaUIsRUFBRTtNQUN0QixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ25NLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQzNEO0lBRUEsSUFBSSxDQUFDbUYsaUVBQVMsQ0FBQzhHLGlCQUFpQixDQUFDLEVBQUU7TUFDakMsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUNuTSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN2RDtJQUVBLE1BQU07TUFBRWEsS0FBSztNQUFFa0gsU0FBUztNQUFFc0IsSUFBSTtNQUFFK0M7SUFBRyxDQUFDLEdBQUduRCxJQUFJLENBQUNvRCxjQUFjLEVBQUU7SUFFNUQsSUFBSSxDQUFDaEQsSUFBSSxJQUFJLENBQUN4SSxLQUFLLElBQUksQ0FBQ2tILFNBQVMsRUFBRTtNQUNqQyxPQUFPbUUsT0FBTyxDQUFDSSxPQUFPLEVBQUU7SUFDMUI7SUFFQSxNQUFNQyxTQUFTLEdBQUcxTCxLQUFLLEtBQUtrSCxTQUFTO0lBRXJDLE1BQU05QixPQUFPLEdBQUcvQix3RkFBb0IsQ0FBQ3lCLFFBQVEsRUFBRXNHLGlCQUFpQixDQUFDO0lBRWpFLElBQUlNLFNBQVMsRUFBRTtNQUNiLElBQUkxSiwrRUFBYSxDQUFDd0csSUFBSSxFQUFFNEMsaUJBQWlCLENBQUMsRUFBRTtRQUMxQztRQUNBLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDbk0sQ0FBQyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7TUFDN0Y7TUFFQSxNQUFNd00sb0JBQW9CLEdBQUlwSCx5RUFBaUIsQ0FBQ2lFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzRDLGlCQUFpQixJQUFJLENBQUM3Ryx5RUFBaUIsQ0FBQzZHLGlCQUFpQixDQUFDLElBQ2xILENBQUM3Ryx5RUFBaUIsQ0FBQ2lFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzRDLGlCQUFpQixJQUFJN0cseUVBQWlCLENBQUM2RyxpQkFBaUIsQ0FBRTtNQUUzRixJQUFJTyxvQkFBb0IsRUFBRTtRQUN4QjtRQUNBLE9BQU9OLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDbk0sQ0FBQyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7TUFDckc7SUFDRixDQUFDLE1BQU07TUFDTCxNQUFNeU0sd0JBQXdCLEdBQUdoSyw4R0FBcUIsQ0FBQzhDLFlBQVksQ0FBQ3dDLFNBQVMsQ0FBQyxDQUFDO01BRS9FLElBQUkwRSx3QkFBd0IsS0FBS3JILHlFQUFpQixDQUFDZ0gsRUFBRSxDQUFDLEVBQUU7UUFDdEQ7UUFDQSxJQUFJSyx3QkFBd0IsRUFBRTtVQUM1QixPQUFPUCxPQUFPLENBQUNDLE1BQU0sQ0FBQ25NLENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsTUFBTTtVQUNMLE9BQU9rTSxPQUFPLENBQUNDLE1BQU0sQ0FBQ25NLENBQUMsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1FBQzFFO01BQ0Y7SUFDRjtJQUVBLElBQUlpRyxPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFRSxVQUFVLEVBQUU7TUFBQTtNQUN2QixNQUFNdUcsYUFBYSxHQUFHbkgsWUFBWSxDQUFDd0MsU0FBUyxDQUFDO01BQzdDLE1BQU00RSxZQUFzQixHQUFHMUcsT0FBTyxDQUFDSSxzQkFBc0IsSUFBSSxFQUFFO01BRW5FLElBQUksQ0FBQ2pCLHlFQUFpQixDQUFDYSxPQUFPLENBQUNyRixPQUFPLENBQUMsSUFBSSxDQUFDK0wsWUFBWSxDQUFDL0YsUUFBUSxDQUFDLENBQUE4RixhQUFhLGFBQWJBLGFBQWEsZ0RBQWJBLGFBQWEsQ0FBRWIsYUFBYSwwREFBNUIsc0JBQThCdEYsV0FBVyxLQUFJLEVBQUUsQ0FBQyxFQUFFO1FBQ2xILE1BQU1xRyxhQUFhLEdBQUcsQ0FBQUYsYUFBYSxhQUFiQSxhQUFhLHVCQUFiQSxhQUFhLENBQUU3RixJQUFJLEtBQUksU0FBUztRQUV0RCxPQUFPcUYsT0FBTyxDQUFDQyxNQUFNLENBQUNuTSxDQUFDLENBQUMsNEhBQTRILEVBQUU7VUFBRTZNLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUVGO1VBQWM7UUFBRSxDQUFDLENBQUMsQ0FBQztNQUNqTTtJQUNGO0lBRUEsT0FBT1YsT0FBTyxDQUFDSSxPQUFPLEVBQUU7RUFDMUIsQ0FBQyxFQUFFLENBQUMzRyxRQUFRLEVBQUVKLFlBQVksRUFBRTBELElBQUksRUFBRWpKLENBQUMsQ0FBQyxDQUFDO0VBRXJDLE1BQU0rTSxjQUFjLEdBQUdsSSxtREFBVyxDQUFDLENBQUNtSCxJQUFVLEVBQUVnQixNQUFjLEtBQW9CO0lBQ2hGLElBQUksQ0FBQ0EsTUFBTSxFQUFFO01BQ1gsT0FBT2QsT0FBTyxDQUFDQyxNQUFNLENBQUNuTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoRDtJQUVBLElBQUssSUFBSTBFLHFEQUFJLENBQUNzSSxNQUFNLENBQUMsQ0FBRUMsRUFBRSxDQUFDLElBQUl2SSxxREFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDdEMsT0FBT3dILE9BQU8sQ0FBQ0MsTUFBTSxDQUFDbk0sQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDM0Q7SUFFQSxJQUFLLElBQUkwRSxxREFBSSxDQUFDc0ksTUFBTSxDQUFDLENBQUVFLEVBQUUsQ0FBQyxJQUFJeEkscURBQUksQ0FBQ21GLFdBQVcsQ0FBQyxDQUFDLEVBQUU7TUFDaEQsTUFBTXNELFNBQVMsR0FBR2hKLGlGQUFhLENBQUMwRixXQUFXLEVBQUVoSyxRQUFRLENBQUM7TUFFdEQsT0FBT3FNLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDbk0sQ0FBQyxDQUFDLDhDQUE4QyxFQUFFO1FBQUU2TSxPQUFPLEVBQUU7VUFBRU8sTUFBTSxFQUFFRDtRQUFVO01BQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUc7SUFFQSxPQUFPakIsT0FBTyxDQUFDSSxPQUFPLEVBQUU7RUFDMUIsQ0FBQyxFQUFFLENBQUN6TSxRQUFRLEVBQUVnSyxXQUFXLEVBQUU3SixDQUFDLENBQUMsQ0FBQztFQUU5QixNQUFNcU4sY0FBK0QsR0FBR3hJLG1EQUFXLENBQ2pGLENBQUN5SSxJQUE2QixFQUFFdEcsTUFBc0IsS0FBSztJQUN6RCxNQUFNdUcsYUFBdUIsR0FBRyxFQUFFO0lBRWxDLElBQUlELElBQUksQ0FBQ2pFLElBQUksRUFBRTtNQUNib0Isc0JBQXNCLENBQUNDLFNBQVMsQ0FBQztNQUNqQ3pCLElBQUksQ0FBQ3VFLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO01BQzNCO01BQ0F2RSxJQUFJLENBQUN3RSxTQUFTLENBQUMsQ0FBQztRQUFFNUcsSUFBSSxFQUFFLE9BQU87UUFBRXhGLEtBQUssRUFBRTtNQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hEO0lBRUEsSUFBSWlNLElBQUksQ0FBQ3ZGLFNBQVMsRUFBRTtNQUNsQjBDLHNCQUFzQixDQUFDTixhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUdPLFNBQVMsQ0FBQztNQUV0RCxJQUFJMUQsTUFBTSxDQUFDb0YsRUFBRSxFQUFFO1FBQ2JtQixhQUFhLENBQUNuRyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQzFCO0lBQ0Y7SUFFQSxJQUFJa0csSUFBSSxDQUFDaEUsS0FBSyxFQUFFO01BQ2QsTUFBTXpJLEtBQUssR0FBRytFLGFBQWEsQ0FBQzBILElBQUksQ0FBQ2hFLEtBQUssQ0FBQyxDQUFDN0QsV0FBVztNQUVuRCxJQUFJdUIsTUFBTSxDQUFDM0YsS0FBSyxFQUFFO1FBQ2hCa00sYUFBYSxDQUFDbkcsSUFBSSxDQUFDLE9BQU8sQ0FBQztNQUM3QjtNQUVBNkIsSUFBSSxDQUFDeUUsY0FBYyxDQUFDO1FBQ2xCN00sS0FBSyxFQUFFQSxLQUFLO1FBQ1prSCxTQUFTLEVBQUVsSDtNQUNiLENBQUMsQ0FBQztNQUVGLElBQUltRyxNQUFNLENBQUNvRixFQUFFLEVBQUU7UUFDYm1CLGFBQWEsQ0FBQ25HLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDMUI7TUFFQWdELGdCQUFnQixDQUFDLEtBQUssQ0FBQztNQUN2Qkssc0JBQXNCLENBQUNDLFNBQVMsQ0FBQztJQUNuQztJQUVBLElBQUk2QyxhQUFhLENBQUMxTCxNQUFNLEVBQUU7TUFDeEJvSCxJQUFJLENBQUNULGNBQWMsQ0FBQytFLGFBQWEsQ0FBQyxDQUFDSSxLQUFLLENBQUN0SixvRUFBSSxDQUFDO0lBQ2hEO0lBRUF3RSxXQUFXLENBQUNJLElBQUksQ0FBQ29ELGNBQWMsRUFBRSxDQUFDO0VBQ3BDLENBQUMsRUFDRCxDQUFDcEQsSUFBSSxFQUFFckQsYUFBYSxFQUFFdUUsYUFBYSxFQUFFdEIsV0FBVyxDQUFDLENBQ2xEOztFQUVEO0VBQ0EsTUFBTStFLFFBQW1ELEdBQUcvSSxtREFBVyxDQUFFbUMsTUFBc0IsSUFBSztJQUNsR08sT0FBTyxDQUFDSSxHQUFHLENBQUMsNkJBQTZCLEVBQUVYLE1BQU0sQ0FBQztJQUNsRGtELFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDaEIsTUFBTTtNQUFFWixLQUFLO01BQUV6SSxLQUFLO01BQUVrSCxTQUFTO01BQUVzQixJQUFJO01BQUUrQyxFQUFFO01BQUUvSztJQUFNLENBQUMsR0FBRzJGLE1BQU07SUFFM0QsSUFBSTZHLFdBQTJDO0lBRS9DdEcsT0FBTyxDQUFDSSxHQUFHLENBQUMsK0JBQStCLEVBQUUwQixJQUFJLENBQUM7SUFDbEQsTUFBTXBELE9BQU8sR0FBRy9CLHdGQUFvQixDQUFDeUIsUUFBUSxFQUFFMEQsSUFBSSxDQUFDO0lBRXBELElBQUksQ0FBQ3BELE9BQU8sRUFBRTtNQUNaaUUsVUFBVSxDQUFDLEtBQUssQ0FBQztNQUNqQnhCLFlBQVksQ0FBQztRQUNYb0YsT0FBTyxFQUFFOU4sQ0FBQyxDQUFDLG9CQUFvQixDQUFDO1FBQ2hDK04sSUFBSSxFQUFFO01BQ1IsQ0FBQyxDQUFDO01BRUY7SUFDRjtJQUVBLE1BQU03SCxRQUFRLEdBQUcsQ0FBQyxDQUFDRCxPQUFPLENBQUNFLFVBQVU7SUFDckMsTUFBTTZILFVBQVUsR0FBRzVJLHlFQUFpQixDQUFDYSxPQUFPLENBQUNyRixPQUFPLENBQUM7SUFDckQsTUFBTTBFLFVBQVUsR0FBR00sYUFBYSxDQUFDMEQsS0FBSyxDQUFDO0lBRXZDL0IsT0FBTyxDQUFDSSxHQUFHLENBQUMsa0JBQWtCLEVBQUUxQixPQUFPLENBQUM7SUFDeENzQixPQUFPLENBQUNJLEdBQUcsQ0FBQyxXQUFXLEVBQUV6QixRQUFRLEVBQUUsYUFBYSxFQUFFOEgsVUFBVSxDQUFDO0lBQzdEekcsT0FBTyxDQUFDSSxHQUFHLENBQUMsc0JBQXNCLEVBQUVyQyxVQUFVLENBQUM7SUFFL0MsSUFBSXpFLEtBQUssS0FBS2tILFNBQVMsRUFBRTtNQUN2QixJQUFJN0IsUUFBUSxFQUFFO1FBQ1osSUFBSThILFVBQVUsRUFBRTtVQUNkLElBQUksQ0FBQ3JMLGlIQUF3QixDQUFDMkMsVUFBVSxDQUFDLEVBQUU7WUFDekM0RSxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pCeEIsWUFBWSxDQUFDO2NBQ1hvRixPQUFPLEVBQUU5TixDQUFDLENBQUMsaURBQWlELENBQUM7Y0FDN0QrTixJQUFJLEVBQUU7WUFDUixDQUFDLENBQUM7WUFFRjtVQUNGO1FBQ0Y7TUFDRjs7TUFFQTtNQUNBRixXQUFXLEdBQUc1SixvRkFBWSxDQUFDO1FBQ3pCb0YsSUFBSTtRQUNKNEUsVUFBVSxFQUFFcE4sS0FBSztRQUNqQnVMLEVBQUUsRUFBRUEsRUFBRTtRQUNOckwsU0FBUyxFQUFFdUksS0FBSztRQUNoQmpJLEtBQUssRUFBRUEsS0FBSztRQUNaNk0sV0FBVyxFQUFFL0Q7TUFDZixDQUFDLENBQUM7SUFDSixDQUFDLE1BQU07TUFDTCxJQUFJakUsUUFBUSxFQUFFO1FBQ1pnRSxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2pCeEIsWUFBWSxDQUFDO1VBQ1hvRixPQUFPLEVBQUU5TixDQUFDLENBQUMsa0RBQWtELENBQUM7VUFDOUQrTixJQUFJLEVBQUU7UUFDUixDQUFDLENBQUM7UUFFRjtNQUNGOztNQUVBO01BQ0FGLFdBQVcsR0FBRzdKLDhGQUFzQixDQUFDO1FBQ25DbUsscUJBQXFCLEVBQUVwRyxTQUFTO1FBQ2hDc0IsSUFBSTtRQUNKK0UsZ0JBQWdCLEVBQUV2TixLQUFLO1FBQ3ZCRSxTQUFTLEVBQUV1SSxLQUFLO1FBQ2hCOEMsRUFBRTtRQUNGL0ssS0FBSztRQUNMNk0sV0FBVyxFQUFFL0Q7TUFDZixDQUFDLENBQUM7SUFDSjtJQUVBa0UsVUFBVSxDQUFDLE1BQU07TUFDZjtNQUNBUixXQUFXLENBQ1JTLElBQUksQ0FBQ3ZELFNBQVMsQ0FBQyxDQUNmNEMsS0FBSyxDQUFDN0MsT0FBTyxDQUFDLENBQ2R5RCxPQUFPLENBQUMsTUFBTTtRQUNickUsVUFBVSxDQUFDLEtBQUssQ0FBQztNQUNuQixDQUFDLENBQUM7SUFFTixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1QsQ0FBQyxFQUFFLENBQUN2RSxRQUFRLEVBQUVDLGFBQWEsRUFBRThDLFlBQVksRUFBRTFJLENBQUMsRUFBRW1LLGFBQWEsRUFBRVksU0FBUyxFQUFFRCxPQUFPLENBQUMsQ0FBQztFQUVqRixNQUFNMEQsbUJBQW1CLEdBQUcxSiwrQ0FBTyxDQUFDLE1BQU1xRCxpQkFBaUIsQ0FBQzVDLFlBQVksRUFBRUssYUFBYSxFQUFFRSxrQkFBa0IsRUFBRWlELFlBQVksQ0FBQyxFQUFFLENBQUNuRCxhQUFhLEVBQUVMLFlBQVksRUFBRU8sa0JBQWtCLEVBQUVpRCxZQUFZLENBQUMsQ0FBQztFQUU1TCxNQUFNMEYsb0JBQW9CLEdBQUc1SixtREFBVyxDQUFFeEQsS0FBYyxJQUFLO0lBQzNELE1BQU1xTixhQUFhLEdBQUcsSUFBSXpKLHdEQUFFLENBQUM0RSxXQUFXLENBQUM7SUFFekMsSUFBSSxDQUFDNkUsYUFBYSxDQUFDQyxNQUFNLEVBQUUsRUFBRTtNQUMzQnZFLGdCQUFnQixDQUFDL0ksS0FBSyxDQUFDO0lBQ3pCO0VBQ0YsQ0FBQyxFQUFFLENBQUN3SSxXQUFXLENBQUMsQ0FBQzs7RUFFakI7RUFDQTtFQUNBbEosaURBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTTtNQUFFMkksS0FBSztNQUFFRDtJQUFLLENBQUMsR0FBR0osSUFBSSxDQUFDb0QsY0FBYyxFQUFFO0lBRTdDLE1BQU11Qyx1QkFBdUIsR0FBSTdOLFNBQWlCLElBQUs7TUFDckQsTUFBTThOLFNBQVMsR0FBR2pKLGFBQWEsQ0FBQzdFLFNBQVMsQ0FBQztNQUUxQ2tJLElBQUksQ0FBQ3lFLGNBQWMsQ0FBQztRQUNsQnBFLEtBQUssRUFBRXZJLFNBQVM7UUFDaEJGLEtBQUssRUFBRWdPLFNBQVMsQ0FBQ3BKLFdBQVc7UUFDNUJzQyxTQUFTLEVBQUU4RyxTQUFTLENBQUNwSjtNQUN2QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSXFHLFVBQVUsQ0FBQ2pLLE1BQU0sRUFBRTtNQUNyQixJQUFJaU4sbUJBQW1CLEdBQUcsSUFBSTtNQUU5QixJQUFJLENBQUN4RixLQUFLLEVBQUU7UUFDVixNQUFNckQsT0FBTyxHQUFHL0Isd0ZBQW9CLENBQUN5QixRQUFRLEVBQUUwRCxJQUFJLENBQUM7UUFFcEQsSUFBSXBELE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUU4SSxpQkFBaUIsRUFBRTtVQUM5QixNQUFNakMsT0FBTyxHQUFHeEksbUlBQTRCLENBQUNpQixZQUFZLEVBQUVVLE9BQU8sQ0FBQzhJLGlCQUFpQixDQUFDO1VBRXJGLElBQUlqQyxPQUFPLEVBQUU7WUFDWCxNQUFNN00sS0FBSyxHQUFHNkwsVUFBVSxDQUFDa0QsSUFBSSxDQUFFQyxJQUFJLElBQUtBLElBQUksQ0FBQ3hKLFdBQVcsS0FBS3FILE9BQU8sQ0FBQ3RHLElBQUksQ0FBQztZQUUxRSxJQUFJdkcsS0FBSyxFQUFFO2NBQ1QyTyx1QkFBdUIsQ0FBQzNPLEtBQUssQ0FBQ3VHLElBQUksQ0FBQztjQUNuQ3NJLG1CQUFtQixHQUFHLEtBQUs7WUFDN0I7VUFDRjtRQUNGO01BQ0YsQ0FBQyxNQUFNO1FBQ0w7UUFDQUEsbUJBQW1CLEdBQUcsQ0FBQ2hELFVBQVUsQ0FBQ3hELElBQUksQ0FBRTRHLENBQUMsSUFBS0EsQ0FBQyxDQUFDMUksSUFBSSxLQUFLOEMsS0FBSyxDQUFDO01BQ2pFO01BRUEsSUFBSXdGLG1CQUFtQixFQUFFO1FBQ3ZCRix1QkFBdUIsQ0FBQzlDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ3RGLElBQUksQ0FBQztNQUM3QztJQUNGO0VBQ0YsQ0FBQyxFQUFFLENBQUNiLFFBQVEsRUFBRW1HLFVBQVUsRUFBRWxHLGFBQWEsRUFBRXFELElBQUksRUFBRTFELFlBQVksQ0FBQyxDQUFDOztFQUU3RDtFQUNBNUUsaURBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSXdPLE1BQU0sR0FBRyxLQUFLO0lBRWxCLElBQUk5RixJQUFJLElBQUlDLEtBQUssRUFBRTtNQUNqQnZGLHNGQUFjLENBQUM7UUFDYm5ELE9BQU8sRUFBRXlJLElBQUk7UUFDYjRFLFVBQVUsRUFBRXJJLGFBQWEsQ0FBQzBELEtBQUssQ0FBQyxDQUFDN0QsV0FBVztRQUM1Q3hGLEtBQUssRUFBRXFKLEtBQUs7UUFDWjhGLGFBQWEsRUFBRXZPLEtBQUssS0FBS2tILFNBQVM7UUFDbENBO01BQ0YsQ0FBQyxDQUFDLENBQ0N1RyxJQUFJLENBQUVlLE9BQU8sSUFBSztRQUNqQixDQUFDRixNQUFNLElBQUlyRixjQUFjLENBQUN1RixPQUFPLENBQUNoTyxLQUFLLENBQUM7TUFDMUMsQ0FBQyxDQUFDLENBQ0RzTSxLQUFLLENBQUMsTUFBTTtRQUNYLENBQUN3QixNQUFNLElBQUlyRixjQUFjLENBQUMsR0FBRyxDQUFDO01BQ2hDLENBQUMsQ0FBQyxDQUNEeUUsT0FBTyxDQUFDLE1BQU07UUFDYixJQUFJLENBQUNZLE1BQU0sRUFBRTtVQUNYLE1BQU05TixLQUFLLEdBQUc0SCxJQUFJLENBQUNxRyxhQUFhLENBQUMsT0FBTyxDQUFXO1VBRW5ELElBQUlqTyxLQUFLLEVBQUU7WUFDVGdOLFVBQVUsQ0FBQyxNQUFNO2NBQ2ZwRixJQUFJLENBQUNULGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMrRixPQUFPLENBQUMsTUFBTWxFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELENBQUMsRUFBRSxHQUFHLENBQUM7VUFDVDtRQUNGO01BQ0YsQ0FBQyxDQUFDO0lBQ047SUFFQSxPQUFPLE1BQU07TUFDWDhFLE1BQU0sR0FBRyxJQUFJO0lBQ2YsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDN0YsS0FBSyxFQUFFMUQsYUFBYSxFQUFFL0UsS0FBSyxFQUFFOEosV0FBVyxFQUFFNUMsU0FBUyxFQUFFa0IsSUFBSSxFQUFFSSxJQUFJLENBQUMsQ0FBQztFQUVyRTFJLGlEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU00TyxnQkFBZ0IsR0FBRyxJQUFJdEssd0RBQUUsQ0FBQ21FLGNBQWMsSUFBSSxHQUFHLENBQUM7SUFDdEQsTUFBTXNGLGFBQWEsR0FBRyxJQUFJekosd0RBQUUsQ0FBQzRFLFdBQVcsSUFBSSxHQUFHLENBQUM7SUFFaEQsSUFBSTBGLGdCQUFnQixDQUFDckMsRUFBRSxDQUFDaEksb0RBQU8sQ0FBQyxJQUFJcUssZ0JBQWdCLENBQUN0QyxFQUFFLENBQUN5QixhQUFhLENBQUMsRUFBRTtNQUN0RXRFLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUN4QjtFQUNGLENBQUMsRUFBRSxDQUFDUCxXQUFXLEVBQUVULGNBQWMsQ0FBQyxDQUFDO0VBRWpDM0YseUZBQXFCLENBQUN3RixJQUFJLENBQUM7RUFDM0IzRiw4RkFBMEIsQ0FBQ2tGLGNBQWMsRUFBRVMsSUFBSSxFQUFFTixXQUFXLENBQUM7RUFFN0Qsb0JBQ0U7SUFBQSx3QkFDRSx5REFBQyx1REFBa0I7TUFBQyxTQUFTLEVBQUVySixrREFBRSxDQUFFLEdBQUVNLFNBQVUsdUJBQXNCLENBQUU7TUFBQSx3QkFDckU7UUFBSyxTQUFTLEVBQUUsOENBQStDO1FBQUEsVUFDNURJLENBQUMsQ0FBQyxtREFBbUQ7TUFBQyxFQUNuRCxlQUVOLHlEQUFDLDREQUFJO1FBQ0gsU0FBUyxFQUFFLDhCQUErQjtRQUMxQyxJQUFJLEVBQUVpSixJQUFLO1FBQ1gsYUFBYSxFQUFFRSxXQUFZO1FBQzNCLFFBQVEsRUFBRXlFLFFBQVM7UUFDbkIsY0FBYyxFQUFFUCxjQUFlO1FBQUEsd0JBRS9CLHdEQUFDLGlFQUFTO1VBQ1IsU0FBUyxFQUFFL04sa0RBQUUsQ0FBQztZQUFFa1EsTUFBTSxFQUFFLENBQUM5RjtVQUFhLENBQUMsQ0FBRTtVQUN6QyxJQUFJLEVBQUUsTUFBTztVQUFBLHVCQUViLHdEQUFDLDBHQUFlO1lBQ2QsYUFBYSxFQUFFZ0Msc0JBQXVCO1lBQ3RDLFFBQVEsRUFBRSxDQUFDaEMsWUFBYTtZQUN4QixNQUFNLEVBQUU4RSxtQkFBb0I7WUFDNUIsS0FBSyxFQUFFeE8sQ0FBQyxDQUFDLFdBQVc7VUFBRTtRQUN0QixFQUNRLGVBRVo7VUFBSyxTQUFTLEVBQUUsVUFBVztVQUFBLHdCQUN6Qix3REFBQyxpRUFBUztZQUFDLElBQUksRUFBRSxPQUFRO1lBQUEsdUJBQ3ZCLHdEQUFDLHNHQUFhO2NBQ1osUUFBUSxFQUFFLENBQUM4TCxVQUFVLENBQUNqSyxNQUFPO2NBQzdCLEtBQUssRUFBRWlLLFVBQVc7Y0FDbEIsV0FBVyxFQUFFOUwsQ0FBQyxDQUFDLGNBQWMsQ0FBRTtjQUMvQixtQkFBbUI7Y0FDbkIsT0FBTyxFQUFFQSxDQUFDLENBQUMsY0FBYztZQUFFO1VBQzNCLEVBQ1EsZUFFWix3REFBQyw0REFBSTtZQUNILFNBQVMsRUFBRSxhQUFjO1lBQ3pCLFlBQVksRUFBRTJFLHVEQUFnQjtZQUM5QixJQUFJLEVBQUU7VUFBSyxFQUNYLGVBRUYsd0RBQUMsaUVBQVM7WUFBQyxJQUFJLEVBQUUsV0FBWTtZQUFBLHVCQUMzQix3REFBQyxzR0FBYTtjQUNaLFFBQVEsRUFBRSxDQUFDcUcsY0FBYyxDQUFDbkosTUFBTztjQUNqQyxLQUFLLEVBQUVtSixjQUFlO2NBQ3RCLEtBQUssRUFBRWhMLENBQUMsQ0FBQywwQkFBMEIsQ0FBRTtjQUNyQyxPQUFPLEVBQUVBLENBQUMsQ0FBQywwQkFBMEI7WUFBRTtVQUN2QyxFQUNRO1FBQUEsRUFDUixlQUVOLHdEQUFDLGdGQUFXO1VBQUMsTUFBTSxFQUFFdUk7UUFBYSxFQUFHLGVBRXJDLHdEQUFDLGlFQUFTO1VBQ1IsSUFBSSxFQUFFLElBQUs7VUFDWCxLQUFLLEVBQUUsQ0FDTDtZQUNFa0gsU0FBUyxFQUFFMUQ7VUFDYixDQUFDLENBQ0Q7VUFDRixtQkFBbUIsRUFBRSxJQUFLO1VBQzFCLGVBQWUsRUFBQyxRQUFRO1VBQUEsdUJBRXhCLHdEQUFDLG9HQUFZO1lBQ1gsYUFBYSxFQUFFSixzQkFBdUI7WUFDdEMsV0FBVyxFQUFFLElBQUs7WUFDbEIsS0FBSyxFQUFFOUssS0FBTTtZQUNiLEtBQUssRUFBRWIsQ0FBQyxDQUFDLFNBQVMsQ0FBRTtZQUNwQixrQkFBa0IsRUFBRTRMLG9CQUFxQjtZQUN6QyxXQUFXLEVBQUU1TCxDQUFDLENBQUMsaUJBQWlCLENBQUU7WUFDbEMsV0FBVyxFQUFFLElBQUs7WUFDbEIsZUFBZSxFQUFFLElBQUs7WUFDdEIsV0FBVyxFQUFFO1VBQUs7UUFDbEIsRUFDUSxlQUVaLHdEQUFDLGlFQUFTO1VBQ1IsSUFBSSxFQUFFLE9BQVE7VUFDZCxLQUFLLEVBQUUsQ0FDTDtZQUNFeVAsU0FBUyxFQUFFMUM7VUFDYixDQUFDLENBQ0Q7VUFDRixtQkFBbUIsRUFBRSxJQUFLO1VBQzFCLGVBQWUsRUFBQyxRQUFRO1VBQUEsdUJBRXhCLHdEQUFDLGlHQUFXO1lBQ1YsUUFBUSxFQUFFbE4sUUFBUztZQUNuQixtQkFBbUIsRUFBRTJLLG1CQUFvQjtZQUN6QyxRQUFRLEVBQUVYLFdBQVk7WUFDdEIsUUFBUSxFQUFFNEUsb0JBQXFCO1lBQy9CLGFBQWEsRUFBRSxJQUFLO1lBQ3BCLE9BQU8sRUFBRXpPLENBQUMsQ0FBQyxRQUFRO1VBQUU7UUFDckIsRUFDUTtNQUFBLEVBQ1AsZUFFUCx3REFBQyxnREFBVztRQUNWLE9BQU8sRUFBRXFKLElBQUs7UUFDZCxLQUFLLEVBQUV4SSxLQUFNO1FBQ2IsY0FBYyxFQUFFMEosaUJBQWtCO1FBQ2xDLFNBQVMsRUFBRWpCO01BQU0sRUFDakI7SUFBQSxFQUNpQixlQUNyQix3REFBQyxzREFBaUI7TUFDaEIsU0FBUyxFQUFHLEdBQUUxSixTQUFVLHNCQUFzQjtNQUM5QyxNQUFNLEVBQUUsRUFBRztNQUNYLFFBQVEsRUFBRSxFQUFHO01BQUEsdUJBRWIsd0RBQUMsNERBQU07UUFDTCxRQUFRLEVBQUUsQ0FBQzBLLGNBQWU7UUFDMUIsSUFBSSxlQUNGLHdEQUFDLDREQUFJO1VBQ0gsWUFBWSxFQUFFMUYsdURBQWU7VUFDN0IsTUFBTSxFQUFFO1FBQU8sRUFFakI7UUFDRixPQUFPLEVBQUVxRixPQUFRO1FBQ2pCLE9BQU8sRUFBRUYsV0FBVyxDQUFDZCxJQUFJLENBQUN5RyxNQUFNLEVBQUV2RSxhQUFhLENBQUU7UUFDakQsTUFBTSxFQUFFaEIsYUFBYSxHQUFHLFNBQVMsR0FBR08sU0FBVTtRQUFBLFVBRTdDUCxhQUFhLEdBQUduSyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxVQUFVO01BQUM7SUFDM0MsRUFDUztFQUFBLEVBQ25CO0FBRVAsQ0FBQztBQUVELE1BQU0yUCxRQUFRLEdBQUduUSw4REFBTSxDQUFDaUosU0FBUyxDQUFDO0VBQUE7RUFBQTtBQUFBLEdBQUMsQ0FBQztFQUFFckk7QUFBTSxDQUFDLEtBQUs7RUFDaEQsTUFBTUgsS0FBSyxHQUFJRyxLQUFLLENBQVdILEtBQUs7RUFFcEMsT0FBUTtJQUNOLFVBQVUsRUFBRTtNQUNWMlAsV0FBVyxFQUFFM1AsS0FBSyxDQUFDNFAsT0FBTztNQUMxQkMsWUFBWSxFQUFFN1AsS0FBSyxDQUFDNFAsT0FBTztNQUMzQnRQLFlBQVksRUFBRU4sS0FBSyxDQUFDOFA7SUFDdEIsQ0FBQztJQUVELFdBQVcsRUFBRTtNQUNYQyxHQUFHLEVBQUU7SUFDUCxDQUFDO0lBRUQsY0FBYyxFQUFFO01BQ2R6UCxZQUFZLEVBQUVOLEtBQUssQ0FBQ2dRO0lBQ3RCLENBQUM7SUFFRCx5Q0FBeUMsRUFBRTtNQUN6QywyQkFBMkIsRUFBRTtRQUMzQiwwQ0FBMEMsRUFBRTtVQUMxQzNQLEtBQUssRUFBRyxHQUFFTCxLQUFLLENBQUN1QixVQUFXO1FBQzdCO01BQ0Y7SUFDRjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZW1PLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ240Qm1CO0FBQ2dCO0FBQ1o7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSxTQUFTLHNFQUFtQjtBQUM1Qjs7QUFFQSxtQ0FBbUMsaURBQVU7QUFDN0MsU0FBUywwREFBbUIsQ0FBQyw0REFBUTtBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRUEsaUVBQWUsZUFBZSxFQUFDO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vcGFydHMvQm9uZGVkQmFsYW5jZS50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vcGFydHMvRnJlZUJhbGFuY2UudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL3BhcnRzL1RyYW5zYWN0aW9uQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vcGFydHMvVHJhbnNhY3Rpb25Gb290ZXIudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL3BhcnRzL2luZGV4LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL3ZhcmlhbnRzL1NlbmRGdW5kLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9waG9zcGhvci1yZWFjdC9kaXN0L2ljb25zL1BhcGVyUGxhbmVSaWdodC5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZVRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBOdW1iZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBCaWdOIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHMgJiB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBib25kZWRCYWxhbmNlPzogc3RyaW5nIHwgbnVtYmVyIHwgQmlnTjtcbiAgZGVjaW1hbHM6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9ICh7IGJvbmRlZEJhbGFuY2UsIGNsYXNzTmFtZSwgZGVjaW1hbHMsIGxhYmVsLCBzeW1ib2wgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IHRva2VuIH0gPSB1c2VUaGVtZSgpIGFzIFRoZW1lO1xuXG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkuUGFyYWdyYXBoIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lLCAnYm9uZGVkLWJhbGFuY2UnKX0+XG4gICAgICA8TnVtYmVyXG4gICAgICAgIGRlY2ltYWw9e2RlY2ltYWxzfVxuICAgICAgICBkZWNpbWFsQ29sb3I9e3Rva2VuLmNvbG9yVGV4dFRlcnRpYXJ5fVxuICAgICAgICBpbnRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgIHNpemU9ezE0fVxuICAgICAgICBzdWZmaXg9e3N5bWJvbH1cbiAgICAgICAgdW5pdENvbG9yPXt0b2tlbi5jb2xvclRleHRUZXJ0aWFyeX1cbiAgICAgICAgdmFsdWU9e2JvbmRlZEJhbGFuY2UgfHwgMH1cbiAgICAgIC8+XG4gICAgICB7bGFiZWwgfHwgdCgnQm9uZGVkJyl9XG4gICAgPC9UeXBvZ3JhcGh5LlBhcmFncmFwaD5cbiAgKTtcbn07XG5cbmNvbnN0IEJvbmRlZEJhbGFuY2UgPSBzdHlsZWQoQ29tcG9uZW50KSgoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0VGVydGlhcnksXG5cbiAgICAnJi5hbnQtdHlwb2dyYXBoeSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgIH0sXG5cbiAgICAnLmFudC1udW1iZXInOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzAuM2VtJ1xuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkQmFsYW5jZTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IHVzZUdldEJhbGFuY2UgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IsIE51bWJlciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzICYge1xuICBhZGRyZXNzPzogc3RyaW5nLFxuICB0b2tlblNsdWc/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjaGFpbj86IHN0cmluZztcbiAgb25CYWxhbmNlUmVhZHk/OiAocnM6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9ICh7IGFkZHJlc3MsIGNoYWluLCBjbGFzc05hbWUsIGxhYmVsLCBvbkJhbGFuY2VSZWFkeSwgdG9rZW5TbHVnIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcbiAgY29uc3QgeyBlcnJvciwgaXNMb2FkaW5nLCBuYXRpdmVUb2tlbkJhbGFuY2UsIG5hdGl2ZVRva2VuU2x1ZywgdG9rZW5CYWxhbmNlIH0gPSB1c2VHZXRCYWxhbmNlKGNoYWluLCBhZGRyZXNzLCB0b2tlblNsdWcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25CYWxhbmNlUmVhZHk/LighaXNMb2FkaW5nICYmICFlcnJvcik7XG4gIH0sIFtlcnJvciwgaXNMb2FkaW5nLCBvbkJhbGFuY2VSZWFkeV0pO1xuXG4gIGlmICghYWRkcmVzcyAmJiAhY2hhaW4pIHtcbiAgICByZXR1cm4gPD48Lz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5LlBhcmFncmFwaCBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSwgJ2ZyZWUtYmFsYW5jZScpfT5cbiAgICAgIHshZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPSdfX2xhYmVsJz57bGFiZWwgfHwgdCgnU2VuZGVyIGF2YWlsYWJsZSBiYWxhbmNlOicpfTwvc3Bhbj59XG4gICAgICB7aXNMb2FkaW5nICYmIDxBY3Rpdml0eUluZGljYXRvciBzaXplPXsxNH0gLz59XG4gICAgICB7ZXJyb3IgJiYgPFR5cG9ncmFwaHkuVGV4dCBjbGFzc05hbWU9eydlcnJvci1tZXNzYWdlJ30+e2Vycm9yfTwvVHlwb2dyYXBoeS5UZXh0Pn1cbiAgICAgIHtcbiAgICAgICAgIWlzTG9hZGluZyAmJiAhZXJyb3IgJiYgISFuYXRpdmVUb2tlblNsdWcgJiYgKFxuICAgICAgICAgIDxOdW1iZXJcbiAgICAgICAgICAgIGRlY2ltYWw9e25hdGl2ZVRva2VuQmFsYW5jZS5kZWNpbWFscyB8fCAxOH1cbiAgICAgICAgICAgIGRlY2ltYWxDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICBpbnRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgIHN1ZmZpeD17bmF0aXZlVG9rZW5CYWxhbmNlLnN5bWJvbH1cbiAgICAgICAgICAgIHVuaXRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICB2YWx1ZT17bmF0aXZlVG9rZW5CYWxhbmNlLnZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgIWlzTG9hZGluZyAmJiAhZXJyb3IgJiYgISF0b2tlblNsdWcgJiYgKHRva2VuU2x1ZyAhPT0gbmF0aXZlVG9rZW5TbHVnKSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J19fbmFtZSd9PiZuYnNwO3t0KCdhbmQnKX0mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICA8TnVtYmVyXG4gICAgICAgICAgICAgIGRlY2ltYWw9e3Rva2VuQmFsYW5jZT8uZGVjaW1hbHMgfHwgMTh9XG4gICAgICAgICAgICAgIGRlY2ltYWxDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICAgIGludENvbG9yPXt0b2tlbi5jb2xvclRleHRUZXJ0aWFyeX1cbiAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgIHN1ZmZpeD17dG9rZW5CYWxhbmNlPy5zeW1ib2x9XG4gICAgICAgICAgICAgIHVuaXRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0b2tlbkJhbGFuY2UudmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9UeXBvZ3JhcGh5LlBhcmFncmFwaD5cbiAgKTtcbn07XG5cbmNvbnN0IEZyZWVCYWxhbmNlID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0VGVydGlhcnksXG5cbiAgICAnLl9fbGFiZWwnOiB7XG4gICAgICBtYXJnaW5SaWdodDogM1xuICAgIH0sXG5cbiAgICAnLmVycm9yLW1lc3NhZ2UnOiB7XG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JFcnJvclxuICAgIH0sXG5cbiAgICAnJi5hbnQtdHlwb2dyYXBoeSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGcmVlQmFsYW5jZTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGhlbWVQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0cmFuc2FjdGlvbi1jb250ZW50ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVHJhbnNhY3Rpb25Db250ZW50ID0gc3R5bGVkKENvbXBvbmVudCkoKHsgdGhlbWUgfSkgPT4ge1xuICByZXR1cm4gKHtcblxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkNvbnRlbnQ7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGVycm9yczogc3RyaW5nW11cbiAgd2FybmluZ3M6IHN0cmluZ1tdXG59XG5cbmNvbnN0IENvbXBvbmVudCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgPSAnJywgZXJyb3JzLCB3YXJuaW5ncyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdHJhbnNhY3Rpb24tZm9vdGVyICR7Y2xhc3NOYW1lfWB9PlxuICAgICAge2Vycm9ycy5sZW5ndGggPiAwICYmIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1tZXNzYWdlcyc+XG4gICAgICAgIHtlcnJvcnMubWFwKChlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+e2V9PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+fVxuICAgICAge3dhcm5pbmdzLmxlbmd0aCA+IDAgJiYgPGRpdiBjbGFzc05hbWU9J3dhcm5pbmctbWVzc2FnZXMnPlxuICAgICAgICB7d2FybmluZ3MubWFwKCh3LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+e3d9PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+fVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVHJhbnNhY3Rpb25Gb290ZXIgPSBzdHlsZWQoQ29tcG9uZW50KSgoeyB0aGVtZSB9KSA9PiB7XG4gIHJldHVybiAoe1xuXG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uRm9vdGVyO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9uZGVkQmFsYW5jZSB9IGZyb20gJy4vQm9uZGVkQmFsYW5jZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZyZWVCYWxhbmNlIH0gZnJvbSAnLi9GcmVlQmFsYW5jZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zYWN0aW9uQ29udGVudCB9IGZyb20gJy4vVHJhbnNhY3Rpb25Db250ZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNhY3Rpb25Gb290ZXIgfSBmcm9tICcuL1RyYW5zYWN0aW9uRm9vdGVyJztcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9Bc3NldFJlZiwgX0Fzc2V0VHlwZSwgX0NoYWluQXNzZXQsIF9DaGFpbkluZm8sIF9NdWx0aUNoYWluQXNzZXQgfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgQXNzZXRTZXR0aW5nLCBFeHRyaW5zaWNUeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBBY2NvdW50SnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBfZ2V0QXNzZXREZWNpbWFscywgX2dldE9yaWdpbkNoYWluT2ZBc3NldCwgX2lzQXNzZXRGdW5naWJsZVRva2VuLCBfaXNDaGFpbkV2bUNvbXBhdGlibGUsIF9pc01hbnRhWmtBc3NldCwgX2lzVG9rZW5UcmFuc2ZlcnJlZEJ5RXZtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3V0aWxzJztcbmltcG9ydCB7IFNXVHJhbnNhY3Rpb25SZXNwb25zZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS90eXBlcyc7XG5pbXBvcnQgeyBkZXRlY3RUcmFuc2xhdGUsIGlzU2FtZUFkZHJlc3MgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IEhpZGRlbklucHV0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IEFjY291bnRTZWxlY3RvciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9GaWVsZC9BY2NvdW50U2VsZWN0b3InO1xuaW1wb3J0IHsgQWRkcmVzc0lucHV0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ZpZWxkL0FkZHJlc3NJbnB1dCc7XG5pbXBvcnQgQW1vdW50SW5wdXQgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ZpZWxkL0Ftb3VudElucHV0JztcbmltcG9ydCB7IENoYWluU2VsZWN0b3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvRmllbGQvQ2hhaW5TZWxlY3Rvcic7XG5pbXBvcnQgeyBUb2tlbkl0ZW1UeXBlLCBUb2tlblNlbGVjdG9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ZpZWxkL1Rva2VuU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlR2V0Q2hhaW5QcmVmaXhCeVNsdWcsIHVzZUhhbmRsZVN1Ym1pdFRyYW5zYWN0aW9uLCB1c2VJbml0VmFsaWRhdGVUcmFuc2FjdGlvbiwgdXNlTm90aWZpY2F0aW9uLCB1c2VQcmVDaGVja0FjdGlvbiwgdXNlUmVzdG9yZVRyYW5zYWN0aW9uLCB1c2VTZWxlY3RvciwgdXNlU2V0Q3VycmVudFBhZ2UsIHVzZVRyYW5zYWN0aW9uQ29udGV4dCwgdXNlV2F0Y2hUcmFuc2FjdGlvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgdXNlSXNNYW50YVBheUVuYWJsZWQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlSXNNYW50YVBheUVuYWJsZWQnO1xuaW1wb3J0IHsgZ2V0TWF4VHJhbnNmZXIsIG1ha2VDcm9zc0NoYWluVHJhbnNmZXIsIG1ha2VUcmFuc2ZlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvc3RvcmVzJztcbmltcG9ydCB7IENoYWluSXRlbVR5cGUsIEZvcm1DYWxsYmFja3MsIFRoZW1lLCBUaGVtZVByb3BzLCBUcmFuc2ZlclBhcmFtcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgZmluZEFjY291bnRCeUFkZHJlc3MsIGZvcm1hdEJhbGFuY2UsIGlzQWNjb3VudEFsbCwgbm9vcCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgZmluZE5ldHdvcmtKc29uQnlHZW5lc2lzSGFzaCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvY2hhaW4vZ2V0TmV0d29ya0pzb25CeUdlbmVzaXNIYXNoJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSWNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgUnVsZSB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWkvZXMvZm9ybSc7XG5pbXBvcnQgQmlnTiBmcm9tICdiaWdudW1iZXIuanMnO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgUGFwZXJQbGFuZVJpZ2h0LCBQYXBlclBsYW5lVGlsdCB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUlzRmlyc3RSZW5kZXIgfSBmcm9tICd1c2Vob29rcy10cyc7XG5cbmltcG9ydCB7IEJOLCBCTl9aRVJPIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuaW1wb3J0IHsgaXNBZGRyZXNzLCBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmltcG9ydCB7IEZyZWVCYWxhbmNlLCBUcmFuc2FjdGlvbkNvbnRlbnQsIFRyYW5zYWN0aW9uRm9vdGVyIH0gZnJvbSAnLi4vcGFydHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuZnVuY3Rpb24gaXNBc3NldFR5cGVWYWxpZCAoXG4gIGNoYWluQXNzZXQ6IF9DaGFpbkFzc2V0LFxuICBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+LFxuICBpc0FjY291bnRFdGhlcmV1bTogYm9vbGVhblxuKSB7XG4gIHJldHVybiBfaXNDaGFpbkV2bUNvbXBhdGlibGUoY2hhaW5JbmZvTWFwW2NoYWluQXNzZXQub3JpZ2luQ2hhaW5dKSA9PT0gaXNBY2NvdW50RXRoZXJldW07XG59XG5cbmZ1bmN0aW9uIGdldFRva2VuSXRlbXMgKFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGFjY291bnRzOiBBY2NvdW50SnNvbltdLFxuICBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+LFxuICBhc3NldFJlZ2lzdHJ5OiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5Bc3NldD4sXG4gIGFzc2V0U2V0dGluZ01hcDogUmVjb3JkPHN0cmluZywgQXNzZXRTZXR0aW5nPixcbiAgbXVsdGlDaGFpbkFzc2V0TWFwOiBSZWNvcmQ8c3RyaW5nLCBfTXVsdGlDaGFpbkFzc2V0PixcbiAgdG9rZW5Hcm91cFNsdWc/OiBzdHJpbmcsIC8vIGlzIGV0aGVyIGEgdG9rZW4gc2x1ZyBvciBhIG11bHRpQ2hhaW5Bc3NldCBzbHVnXG4gIGlzWmtNb2RlRW5hYmxlZD86IGJvb2xlYW5cbik6IFRva2VuSXRlbVR5cGVbXSB7XG4gIGNvbnN0IGFjY291bnQgPSBmaW5kQWNjb3VudEJ5QWRkcmVzcyhhY2NvdW50cywgYWRkcmVzcyk7XG5cbiAgaWYgKCFhY2NvdW50KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgaXNMZWRnZXIgPSAhIWFjY291bnQuaXNIYXJkd2FyZTtcbiAgY29uc3QgdmFsaWRHZW46IHN0cmluZ1tdID0gYWNjb3VudC5hdmFpbGFibGVHZW5lc2lzSGFzaGVzIHx8IFtdO1xuICBjb25zdCB2YWxpZExlZGdlck5ldHdvcmsgPSB2YWxpZEdlbi5tYXAoKGdlbmVzaXNIYXNoKSA9PiBmaW5kTmV0d29ya0pzb25CeUdlbmVzaXNIYXNoKGNoYWluSW5mb01hcCwgZ2VuZXNpc0hhc2gpPy5zbHVnKTtcbiAgY29uc3QgaXNBY2NvdW50RXRoZXJldW0gPSBpc0V0aGVyZXVtQWRkcmVzcyhhZGRyZXNzKTtcbiAgY29uc3QgaXNTZXRUb2tlblNsdWcgPSAhIXRva2VuR3JvdXBTbHVnICYmICEhYXNzZXRSZWdpc3RyeVt0b2tlbkdyb3VwU2x1Z107XG4gIGNvbnN0IGlzU2V0TXVsdGlDaGFpbkFzc2V0U2x1ZyA9ICEhdG9rZW5Hcm91cFNsdWcgJiYgISFtdWx0aUNoYWluQXNzZXRNYXBbdG9rZW5Hcm91cFNsdWddO1xuXG4gIGlmICh0b2tlbkdyb3VwU2x1Zykge1xuICAgIGlmICghKGlzU2V0VG9rZW5TbHVnIHx8IGlzU2V0TXVsdGlDaGFpbkFzc2V0U2x1ZykpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFpbkFzc2V0ID0gYXNzZXRSZWdpc3RyeVt0b2tlbkdyb3VwU2x1Z107XG4gICAgY29uc3QgaXNWYWxpZExlZGdlciA9IGlzTGVkZ2VyID8gKGlzQWNjb3VudEV0aGVyZXVtIHx8IHZhbGlkTGVkZ2VyTmV0d29yay5pbmNsdWRlcyhjaGFpbkFzc2V0Py5vcmlnaW5DaGFpbikpIDogdHJ1ZTtcblxuICAgIGlmIChpc1NldFRva2VuU2x1Zykge1xuICAgICAgaWYgKGlzQXNzZXRUeXBlVmFsaWQoY2hhaW5Bc3NldCwgY2hhaW5JbmZvTWFwLCBpc0FjY291bnRFdGhlcmV1bSkgJiYgaXNWYWxpZExlZGdlcikge1xuICAgICAgICBjb25zdCB7IG5hbWUsIG9yaWdpbkNoYWluLCBzbHVnLCBzeW1ib2wgfSA9IGFzc2V0UmVnaXN0cnlbdG9rZW5Hcm91cFNsdWddO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICBvcmlnaW5DaGFpblxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBpdGVtczogVG9rZW5JdGVtVHlwZVtdID0gW107XG5cbiAgT2JqZWN0LnZhbHVlcyhhc3NldFJlZ2lzdHJ5KS5mb3JFYWNoKChjaGFpbkFzc2V0KSA9PiB7XG4gICAgY29uc3QgaXNWYWxpZExlZGdlciA9IGlzTGVkZ2VyID8gKGlzQWNjb3VudEV0aGVyZXVtIHx8IHZhbGlkTGVkZ2VyTmV0d29yay5pbmNsdWRlcyhjaGFpbkFzc2V0Py5vcmlnaW5DaGFpbikpIDogdHJ1ZTtcbiAgICBjb25zdCBpc1Rva2VuRnVuZ2libGUgPSBfaXNBc3NldEZ1bmdpYmxlVG9rZW4oY2hhaW5Bc3NldCk7XG5cbiAgICBpZiAoIShpc1Rva2VuRnVuZ2libGUgJiYgaXNBc3NldFR5cGVWYWxpZChjaGFpbkFzc2V0LCBjaGFpbkluZm9NYXAsIGlzQWNjb3VudEV0aGVyZXVtKSAmJiBpc1ZhbGlkTGVkZ2VyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaXNaa01vZGVFbmFibGVkICYmIF9pc01hbnRhWmtBc3NldChjaGFpbkFzc2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1NldE11bHRpQ2hhaW5Bc3NldFNsdWcpIHtcbiAgICAgIGlmIChjaGFpbkFzc2V0Lm11bHRpQ2hhaW5Bc3NldCA9PT0gdG9rZW5Hcm91cFNsdWcpIHtcbiAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogY2hhaW5Bc3NldC5uYW1lLFxuICAgICAgICAgIHNsdWc6IGNoYWluQXNzZXQuc2x1ZyxcbiAgICAgICAgICBzeW1ib2w6IGNoYWluQXNzZXQuc3ltYm9sLFxuICAgICAgICAgIG9yaWdpbkNoYWluOiBjaGFpbkFzc2V0Lm9yaWdpbkNoYWluXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgbmFtZTogY2hhaW5Bc3NldC5uYW1lLFxuICAgICAgICBzbHVnOiBjaGFpbkFzc2V0LnNsdWcsXG4gICAgICAgIHN5bWJvbDogY2hhaW5Bc3NldC5zeW1ib2wsXG4gICAgICAgIG9yaWdpbkNoYWluOiBjaGFpbkFzc2V0Lm9yaWdpbkNoYWluXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpdGVtcztcbn1cblxuLy8gZnVuY3Rpb24gZ2V0VG9rZW5BdmFpbGFibGVEZXN0aW5hdGlvbnMgKFxuLy8gICB0b2tlblNsdWc6IHN0cmluZyxcbi8vICAgeGNtUmVmTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQXNzZXRSZWY+LFxuLy8gICBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+XG4vLyApOiBDaGFpbkl0ZW1UeXBlW10ge1xuLy8gICBpZiAoIXRva2VuU2x1Zykge1xuLy8gICAgIGNvbnNvbGUud2FybignVG9rZW4gc2x1ZyBpcyBlbXB0eSBvciB1bmRlZmluZWQuJyk7XG5cbi8vICAgICByZXR1cm4gW107XG4vLyAgIH1cblxuLy8gICBjb25zdCByZXN1bHQ6IENoYWluSXRlbVR5cGVbXSA9IFtdO1xuXG4vLyAgIC8vIEdldCB0aGUgb3JpZ2luIGNoYWluXG4vLyAgIGNvbnN0IG9yaWdpbkNoYWluS2V5ID0gX2dldE9yaWdpbkNoYWluT2ZBc3NldCh0b2tlblNsdWcpO1xuXG4vLyAgIGNvbnNvbGUubG9nKCdPcmlnaW4gQ2hhaW4gS2V5OicsIG9yaWdpbkNoYWluS2V5KTtcblxuLy8gICBjb25zdCBvcmlnaW5DaGFpbiA9IGNoYWluSW5mb01hcFtvcmlnaW5DaGFpbktleV07XG5cbi8vICAgY29uc29sZS5sb2coJ09yaWdpbiBDaGFpbiBEYXRhOicsIG9yaWdpbkNoYWluKTtcblxuLy8gICAvLyBTYWZlbHkgYWRkIHRoZSBvcmlnaW4gY2hhaW4gdG8gdGhlIHJlc3VsdFxuLy8gICBpZiAob3JpZ2luQ2hhaW4pIHtcbi8vICAgICByZXN1bHQucHVzaCh7XG4vLyAgICAgICBuYW1lOiBvcmlnaW5DaGFpbi5uYW1lLFxuLy8gICAgICAgc2x1Zzogb3JpZ2luQ2hhaW4uc2x1Z1xuLy8gICAgIH0pO1xuLy8gICAgIGNvbnNvbGUubG9nKCdBZGRlZCBPcmlnaW4gQ2hhaW46Jywge1xuLy8gICAgICAgbmFtZTogb3JpZ2luQ2hhaW4ubmFtZSxcbi8vICAgICAgIHNsdWc6IG9yaWdpbkNoYWluLnNsdWdcbi8vICAgICB9KTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLndhcm4oYE9yaWdpbiBjaGFpbiBub3QgZm91bmQgZm9yIGtleTogJHtvcmlnaW5DaGFpbktleX1gKTtcbi8vICAgfVxuXG4vLyAgIC8vIFByb2Nlc3MgWENNIHJlZmVyZW5jZXNcbi8vICAgY29uc29sZS5sb2coJ1Byb2Nlc3NpbmcgWENNIFJlZmVyZW5jZXM6JywgeGNtUmVmTWFwKTtcblxuLy8gICBPYmplY3QudmFsdWVzKHhjbVJlZk1hcCkuZm9yRWFjaCgoeGNtUmVmKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgWENNIFJlZmVyZW5jZTonLCB4Y21SZWYpO1xuXG4vLyAgICAgaWYgKHhjbVJlZi5zcmNBc3NldCA9PT0gdG9rZW5TbHVnKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnTWF0Y2hlZCBUb2tlbiBTbHVnIGluIFhDTSBSZWZlcmVuY2U6JywgeGNtUmVmKTtcblxuLy8gICAgICAgY29uc3QgZGVzdGluYXRpb25DaGFpbiA9IGNoYWluSW5mb01hcFt4Y21SZWYuZGVzdENoYWluXTtcblxuLy8gICAgICAgY29uc29sZS5sb2coJ0Rlc3RpbmF0aW9uIENoYWluIERhdGE6JywgZGVzdGluYXRpb25DaGFpbik7XG5cbi8vICAgICAgIGlmIChkZXN0aW5hdGlvbkNoYWluKSB7XG4vLyAgICAgICAgIHJlc3VsdC5wdXNoKHtcbi8vICAgICAgICAgICBuYW1lOiBkZXN0aW5hdGlvbkNoYWluLm5hbWUsXG4vLyAgICAgICAgICAgc2x1ZzogZGVzdGluYXRpb25DaGFpbi5zbHVnXG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnQWRkZWQgRGVzdGluYXRpb24gQ2hhaW46Jywge1xuLy8gICAgICAgICAgIG5hbWU6IGRlc3RpbmF0aW9uQ2hhaW4ubmFtZSxcbi8vICAgICAgICAgICBzbHVnOiBkZXN0aW5hdGlvbkNoYWluLnNsdWdcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLndhcm4oYERlc3RpbmF0aW9uIGNoYWluIG5vdCBmb3VuZCBmb3Iga2V5OiAke3hjbVJlZi5kZXN0Q2hhaW59YCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gICBjb25zb2xlLmxvZygnRmluYWwgUmVzdWx0OicsIHJlc3VsdCk7XG5cbi8vICAgcmV0dXJuIHJlc3VsdDtcbi8vIH1cblxuZnVuY3Rpb24gZ2V0VG9rZW5BdmFpbGFibGVEZXN0aW5hdGlvbnMgKFxuICB0b2tlblNsdWc6IHN0cmluZyxcbiAgeGNtUmVmTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQXNzZXRSZWY+LFxuICBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+XG4pOiBDaGFpbkl0ZW1UeXBlW10ge1xuICBpZiAoIXRva2VuU2x1Zykge1xuICAgIGNvbnNvbGUud2FybignVG9rZW4gc2x1ZyBpcyBlbXB0eSBvciB1bmRlZmluZWQuJyk7XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCByZXN1bHQ6IENoYWluSXRlbVR5cGVbXSA9IFtdO1xuXG4gIC8vIEdldCB0aGUgb3JpZ2luIGNoYWluXG4gIGNvbnN0IG9yaWdpbkNoYWluS2V5ID0gX2dldE9yaWdpbkNoYWluT2ZBc3NldCh0b2tlblNsdWcpO1xuXG4gIGNvbnNvbGUubG9nKCdPcmlnaW4gQ2hhaW4gS2V5OicsIG9yaWdpbkNoYWluS2V5KTtcblxuICBjb25zdCBvcmlnaW5DaGFpbiA9IGNoYWluSW5mb01hcFtvcmlnaW5DaGFpbktleV07XG5cbiAgY29uc29sZS5sb2coJ09yaWdpbiBDaGFpbiBEYXRhID4+Pj4+Pj4+Pj4+Pj4nLCBvcmlnaW5DaGFpbik7XG5cbiAgaWYgKG9yaWdpbkNoYWluKSB7XG4gICAgcmVzdWx0LnB1c2goe1xuICAgICAgbmFtZTogb3JpZ2luQ2hhaW4ubmFtZSxcbiAgICAgIHNsdWc6IG9yaWdpbkNoYWluLnNsdWdcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnQWRkZWQgT3JpZ2luIENoYWluOicsIHtcbiAgICAgIG5hbWU6IG9yaWdpbkNoYWluLm5hbWUsXG4gICAgICBzbHVnOiBvcmlnaW5DaGFpbi5zbHVnXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKGBPcmlnaW4gY2hhaW4gbm90IGZvdW5kIGZvciBrZXk6ICR7b3JpZ2luQ2hhaW5LZXl9YCk7XG4gIH1cblxuICAvLyBQcm9jZXNzIFhDTSByZWZlcmVuY2VzXG4gIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIFhDTSBSZWZlcmVuY2VzOicsIHhjbVJlZk1hcCk7XG5cbiAgT2JqZWN0LnZhbHVlcyh4Y21SZWZNYXApLmZvckVhY2goKHhjbVJlZikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IFhDTSBSZWZlcmVuY2U6JywgeGNtUmVmKTtcblxuICAgIGlmICh4Y21SZWYuc3JjQXNzZXQgPT09IHRva2VuU2x1Zykge1xuICAgICAgY29uc29sZS5sb2coJ01hdGNoZWQgVG9rZW4gU2x1ZyBpbiBYQ00gUmVmZXJlbmNlOicsIHhjbVJlZik7XG5cbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uQ2hhaW4gPSBjaGFpbkluZm9NYXBbeGNtUmVmLmRlc3RDaGFpbl07XG5cbiAgICAgIGNvbnNvbGUubG9nKCdEZXN0aW5hdGlvbiBDaGFpbiBEYXRhOicsIGRlc3RpbmF0aW9uQ2hhaW4pO1xuXG4gICAgICBpZiAoZGVzdGluYXRpb25DaGFpbikge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgbmFtZTogZGVzdGluYXRpb25DaGFpbi5uYW1lLFxuICAgICAgICAgIHNsdWc6IGRlc3RpbmF0aW9uQ2hhaW4uc2x1Z1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0FkZGVkIERlc3RpbmF0aW9uIENoYWluOicsIHtcbiAgICAgICAgICBuYW1lOiBkZXN0aW5hdGlvbkNoYWluLm5hbWUsXG4gICAgICAgICAgc2x1ZzogZGVzdGluYXRpb25DaGFpbi5zbHVnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBEZXN0aW5hdGlvbiBjaGFpbiBub3QgZm91bmQgZm9yIGtleTogJHt4Y21SZWYuZGVzdENoYWlufWApO1xuICAgICAgICBjb25zb2xlLmxvZygnS2V5cyBpbiBjaGFpbkluZm9NYXA6JywgT2JqZWN0LmtleXMoY2hhaW5JbmZvTWFwKSk7IC8vIExvZyBhbGwgYXZhaWxhYmxlIGtleXNcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKCdGaW5hbCBSZXN1bHQ6JywgcmVzdWx0KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBkZWZhdWx0RmlsdGVyQWNjb3VudCA9IChhY2NvdW50OiBBY2NvdW50SnNvbik6IGJvb2xlYW4gPT4gIShpc0FjY291bnRBbGwoYWNjb3VudC5hZGRyZXNzKSB8fCBhY2NvdW50LmlzUmVhZE9ubHkpO1xuXG5jb25zdCBmaWx0ZXJBY2NvdW50RnVuYyA9IChcbiAgY2hhaW5JbmZvTWFwOiBSZWNvcmQ8c3RyaW5nLCBfQ2hhaW5JbmZvPixcbiAgYXNzZXRSZWdpc3RyeTogUmVjb3JkPHN0cmluZywgX0NoYWluQXNzZXQ+LFxuICBtdWx0aUNoYWluQXNzZXRNYXA6IFJlY29yZDxzdHJpbmcsIF9NdWx0aUNoYWluQXNzZXQ+LFxuICB0b2tlbkdyb3VwU2x1Zz86IHN0cmluZyAvLyBpcyBldGhlciBhIHRva2VuIHNsdWcgb3IgYSBtdWx0aUNoYWluQXNzZXQgc2x1Z1xuKTogKGFjY291bnQ6IEFjY291bnRKc29uKSA9PiBib29sZWFuID0+IHtcbiAgY29uc3QgaXNTZXRUb2tlblNsdWcgPSAhIXRva2VuR3JvdXBTbHVnICYmICEhYXNzZXRSZWdpc3RyeVt0b2tlbkdyb3VwU2x1Z107XG4gIGNvbnN0IGlzU2V0TXVsdGlDaGFpbkFzc2V0U2x1ZyA9ICEhdG9rZW5Hcm91cFNsdWcgJiYgISFtdWx0aUNoYWluQXNzZXRNYXBbdG9rZW5Hcm91cFNsdWddO1xuXG4gIGlmICghdG9rZW5Hcm91cFNsdWcpIHtcbiAgICByZXR1cm4gZGVmYXVsdEZpbHRlckFjY291bnQ7XG4gIH1cblxuICBjb25zdCBjaGFpbkFzc2V0cyA9IE9iamVjdC52YWx1ZXMoYXNzZXRSZWdpc3RyeSkuZmlsdGVyKChjaGFpbkFzc2V0KSA9PiB7XG4gICAgY29uc3QgaXNUb2tlbkZ1bmdpYmxlID0gX2lzQXNzZXRGdW5naWJsZVRva2VuKGNoYWluQXNzZXQpO1xuXG4gICAgaWYgKGlzVG9rZW5GdW5naWJsZSkge1xuICAgICAgaWYgKGlzU2V0VG9rZW5TbHVnKSB7XG4gICAgICAgIHJldHVybiBjaGFpbkFzc2V0LnNsdWcgPT09IHRva2VuR3JvdXBTbHVnO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZXRNdWx0aUNoYWluQXNzZXRTbHVnKSB7XG4gICAgICAgIHJldHVybiBjaGFpbkFzc2V0Lm11bHRpQ2hhaW5Bc3NldCA9PT0gdG9rZW5Hcm91cFNsdWc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJldHVybiAoYWNjb3VudDogQWNjb3VudEpzb24pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBpc0xlZGdlciA9ICEhYWNjb3VudC5pc0hhcmR3YXJlO1xuICAgIGNvbnN0IGlzQWNjb3VudEV0aGVyZXVtID0gaXNFdGhlcmV1bUFkZHJlc3MoYWNjb3VudC5hZGRyZXNzKTtcbiAgICBjb25zdCB2YWxpZEdlbjogc3RyaW5nW10gPSBhY2NvdW50LmF2YWlsYWJsZUdlbmVzaXNIYXNoZXMgfHwgW107XG4gICAgY29uc3QgdmFsaWRMZWRnZXJOZXR3b3JrID0gdmFsaWRHZW4ubWFwKChnZW5lc2lzSGFzaCkgPT4gZmluZE5ldHdvcmtKc29uQnlHZW5lc2lzSGFzaChjaGFpbkluZm9NYXAsIGdlbmVzaXNIYXNoKT8uc2x1ZykgfHwgW107XG5cbiAgICBpZiAoIWRlZmF1bHRGaWx0ZXJBY2NvdW50KGFjY291bnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYWluQXNzZXRzLnNvbWUoKGNoYWluQXNzZXQpID0+IHtcbiAgICAgIGNvbnN0IGlzVmFsaWRMZWRnZXIgPSBpc0xlZGdlciA/IChpc0FjY291bnRFdGhlcmV1bSB8fCB2YWxpZExlZGdlck5ldHdvcmsuaW5jbHVkZXMoY2hhaW5Bc3NldD8ub3JpZ2luQ2hhaW4pKSA6IHRydWU7XG5cbiAgICAgIHJldHVybiBpc0Fzc2V0VHlwZVZhbGlkKGNoYWluQXNzZXQsIGNoYWluSW5mb01hcCwgaXNBY2NvdW50RXRoZXJldW0pICYmIGlzVmFsaWRMZWRnZXI7XG4gICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCBoaWRkZW5GaWVsZHM6IEFycmF5PGtleW9mIFRyYW5zZmVyUGFyYW1zPiA9IFsnY2hhaW4nXTtcbmNvbnN0IHZhbGlkYXRlRmllbGRzOiBBcnJheTxrZXlvZiBUcmFuc2ZlclBhcmFtcz4gPSBbJ3ZhbHVlJywgJ3RvJ107XG5cbmNvbnN0IF9TZW5kRnVuZCA9ICh7IGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiA9PiB7XG4gIHVzZVNldEN1cnJlbnRQYWdlKCcvdHJhbnNhY3Rpb24vc2VuZC1mdW5kJyk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XG5cbiAgY29uc3QgeyBkZWZhdWx0RGF0YSwgb25Eb25lLCBwZXJzaXN0RGF0YSB9ID0gdXNlVHJhbnNhY3Rpb25Db250ZXh0PFRyYW5zZmVyUGFyYW1zPigpO1xuICBjb25zdCB7IGRlZmF1bHRTbHVnOiBzZW5kRnVuZFNsdWcgfSA9IGRlZmF1bHREYXRhO1xuICBjb25zdCBpc0ZpcnN0UmVuZGVyID0gdXNlSXNGaXJzdFJlbmRlcigpO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxUcmFuc2ZlclBhcmFtcz4oKTtcbiAgY29uc3QgZm9ybURlZmF1bHQgPSB1c2VNZW1vKCgpOiBUcmFuc2ZlclBhcmFtcyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHREYXRhXG4gICAgfTtcbiAgfSwgW2RlZmF1bHREYXRhXSk7XG5cbiAgY29uc3QgZGVzdENoYWluID0gdXNlV2F0Y2hUcmFuc2FjdGlvbignZGVzdENoYWluJywgZm9ybSwgZGVmYXVsdERhdGEpO1xuICBjb25zdCB0cmFuc2ZlckFtb3VudCA9IHVzZVdhdGNoVHJhbnNhY3Rpb24oJ3ZhbHVlJywgZm9ybSwgZGVmYXVsdERhdGEpO1xuICBjb25zdCBmcm9tID0gdXNlV2F0Y2hUcmFuc2FjdGlvbignZnJvbScsIGZvcm0sIGRlZmF1bHREYXRhKTtcbiAgY29uc3QgY2hhaW4gPSB1c2VXYXRjaFRyYW5zYWN0aW9uKCdjaGFpbicsIGZvcm0sIGRlZmF1bHREYXRhKTtcbiAgY29uc3QgYXNzZXQgPSB1c2VXYXRjaFRyYW5zYWN0aW9uKCdhc3NldCcsIGZvcm0sIGRlZmF1bHREYXRhKTtcblxuICBjb25zdCB7IGNoYWluSW5mb01hcCwgY2hhaW5TdGF0ZU1hcCB9ID0gdXNlU2VsZWN0b3IoKHJvb3QpID0+IHJvb3QuY2hhaW5TdG9yZSk7XG4gIGNvbnN0IHsgYXNzZXRSZWdpc3RyeSwgYXNzZXRTZXR0aW5nTWFwLCBtdWx0aUNoYWluQXNzZXRNYXAsIHhjbVJlZk1hcCB9ID0gdXNlU2VsZWN0b3IoKHJvb3QpID0+IHJvb3QuYXNzZXRSZWdpc3RyeSk7XG4gIGNvbnN0IHsgYWNjb3VudHMsIGlzQWxsQWNjb3VudCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZSk7XG4gIGNvbnN0IFttYXhUcmFuc2Zlciwgc2V0TWF4VHJhbnNmZXJdID0gdXNlU3RhdGU8c3RyaW5nPignMCcpO1xuICBjb25zdCBjaGVja0FjdGlvbiA9IHVzZVByZUNoZWNrQWN0aW9uKGZyb20sIHRydWUsIGRldGVjdFRyYW5zbGF0ZSgnVGhlIGFjY291bnQgeW91IGFyZSB1c2luZyBpcyB7e2FjY291bnRUaXRsZX19LCB5b3UgY2Fubm90IHNlbmQgYXNzZXRzIHdpdGggaXQnKSk7XG4gIGNvbnN0IGlzWktNb2RlRW5hYmxlZCA9IHVzZUlzTWFudGFQYXlFbmFibGVkKGZyb20pO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVHJhbnNmZXJBbGwsIHNldElzVHJhbnNmZXJBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbLCB1cGRhdGVdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaXNCYWxhbmNlUmVhZHksIHNldElzQmFsYW5jZVJlYWR5XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZm9yY2VVcGRhdGVNYXhWYWx1ZSwgc2V0Rm9yY2VVcGRhdGVNYXhWYWx1ZV0gPSB1c2VTdGF0ZTxvYmplY3R8dW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBjaGFpblN0YXR1cyA9IHVzZU1lbW8oKCkgPT4gY2hhaW5TdGF0ZU1hcFtjaGFpbl0/LmNvbm5lY3Rpb25TdGF0dXMsIFtjaGFpbiwgY2hhaW5TdGF0ZU1hcF0pO1xuXG4gIGNvbnN0IGhhbmRsZVRyYW5zZmVyQWxsID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0Rm9yY2VVcGRhdGVNYXhWYWx1ZSh7fSk7XG4gICAgc2V0SXNUcmFuc2ZlckFsbCh2YWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IG9uRXJyb3IsIG9uU3VjY2VzcyB9ID0gdXNlSGFuZGxlU3VibWl0VHJhbnNhY3Rpb24ob25Eb25lLCBoYW5kbGVUcmFuc2ZlckFsbCk7XG5cbiAgY29uc3QgZGVzdENoYWluSXRlbXMgPSB1c2VNZW1vPENoYWluSXRlbVR5cGVbXT4oKCkgPT4ge1xuICAgIHJldHVybiBnZXRUb2tlbkF2YWlsYWJsZURlc3RpbmF0aW9ucyhhc3NldCwgeGNtUmVmTWFwLCBjaGFpbkluZm9NYXApO1xuICB9LCBbY2hhaW5JbmZvTWFwLCBhc3NldCwgeGNtUmVmTWFwXSk7XG5cbiAgY29uc3QgY3VycmVudENoYWluQXNzZXQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBfYXNzZXQgPSBpc0ZpcnN0UmVuZGVyID8gZGVmYXVsdERhdGEuYXNzZXQgOiBhc3NldDtcblxuICAgIHJldHVybiBfYXNzZXQgPyBhc3NldFJlZ2lzdHJ5W19hc3NldF0gOiB1bmRlZmluZWQ7XG4gIH0sIFtpc0ZpcnN0UmVuZGVyLCBkZWZhdWx0RGF0YS5hc3NldCwgYXNzZXQsIGFzc2V0UmVnaXN0cnldKTtcblxuICBjb25zdCBkZWNpbWFscyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50Q2hhaW5Bc3NldCA/IF9nZXRBc3NldERlY2ltYWxzKGN1cnJlbnRDaGFpbkFzc2V0KSA6IDA7XG4gIH0sIFtjdXJyZW50Q2hhaW5Bc3NldF0pO1xuXG4gIGNvbnN0IGV4dHJpbnNpY1R5cGUgPSB1c2VNZW1vKCgpOiBFeHRyaW5zaWNUeXBlID0+IHtcbiAgICBjb25zb2xlLmxvZygnRGVidWdnaW5nIHVzZU1lbW8gLSBjaGFpbjonLCBjaGFpbik7XG4gICAgY29uc29sZS5sb2coJ0RlYnVnZ2luZyB1c2VNZW1vIC0gZGVzdENoYWluOicsIGRlc3RDaGFpbik7XG4gICAgY29uc29sZS5sb2coJ0RlYnVnZ2luZyB1c2VNZW1vIC0gY3VycmVudENoYWluQXNzZXQ6JywgY3VycmVudENoYWluQXNzZXQpO1xuXG4gICAgaWYgKCFjdXJyZW50Q2hhaW5Bc3NldCkge1xuICAgICAgY29uc29sZS5sb2coJ0RlYnVnZ2luZyB1c2VNZW1vIC0gTm8gY3VycmVudENoYWluQXNzZXQuIFJldHVybmluZyBFeHRyaW5zaWNUeXBlLlVOS05PV04uJyk7XG5cbiAgICAgIHJldHVybiBFeHRyaW5zaWNUeXBlLlVOS05PV047XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjaGFpbiAhPT0gZGVzdENoYWluKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEZWJ1Z2dpbmcgdXNlTWVtbyAtIGNoYWluICE9PSBkZXN0Q2hhaW4uIFJldHVybmluZyBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1hDTS4nKTtcblxuICAgICAgICByZXR1cm4gRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ007XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudENoYWluQXNzZXQuYXNzZXRUeXBlID09PSBfQXNzZXRUeXBlLk5BVElWRSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWJ1Z2dpbmcgdXNlTWVtbyAtIGN1cnJlbnRDaGFpbkFzc2V0LmFzc2V0VHlwZSBpcyBOQVRJVkUuIFJldHVybmluZyBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX0JBTEFOQ0UuJyk7XG5cbiAgICAgICAgICByZXR1cm4gRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9CQUxBTkNFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWJ1Z2dpbmcgdXNlTWVtbyAtIGN1cnJlbnRDaGFpbkFzc2V0LmFzc2V0VHlwZSBpcyBub3QgTkFUSVZFLiBSZXR1cm5pbmcgRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9UT0tFTi4nKTtcblxuICAgICAgICAgIHJldHVybiBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1RPS0VOO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbY2hhaW4sIGN1cnJlbnRDaGFpbkFzc2V0LCBkZXN0Q2hhaW5dKTtcblxuICBjb25zdCBmcm9tQ2hhaW5OZXR3b3JrUHJlZml4ID0gdXNlR2V0Q2hhaW5QcmVmaXhCeVNsdWcoY2hhaW4pO1xuICBjb25zdCBkZXN0Q2hhaW5OZXR3b3JrUHJlZml4ID0gdXNlR2V0Q2hhaW5QcmVmaXhCeVNsdWcoZGVzdENoYWluKTtcbiAgY29uc3QgZGVzdENoYWluR2VuZXNpc0hhc2ggPSBjaGFpbkluZm9NYXBbZGVzdENoYWluXT8uc3Vic3RyYXRlSW5mbz8uZ2VuZXNpc0hhc2ggfHwgJyc7XG5cbiAgY29uc3QgdG9rZW5JdGVtcyA9IHVzZU1lbW88VG9rZW5JdGVtVHlwZVtdPigoKSA9PiB7XG4gICAgcmV0dXJuIGdldFRva2VuSXRlbXMoXG4gICAgICBmcm9tLFxuICAgICAgYWNjb3VudHMsXG4gICAgICBjaGFpbkluZm9NYXAsXG4gICAgICBhc3NldFJlZ2lzdHJ5LFxuICAgICAgYXNzZXRTZXR0aW5nTWFwLFxuICAgICAgbXVsdGlDaGFpbkFzc2V0TWFwLFxuICAgICAgc2VuZEZ1bmRTbHVnLFxuICAgICAgaXNaS01vZGVFbmFibGVkXG4gICAgKTtcbiAgfSwgW2FjY291bnRzLCBhc3NldFJlZ2lzdHJ5LCBhc3NldFNldHRpbmdNYXAsIGNoYWluSW5mb01hcCwgZnJvbSwgaXNaS01vZGVFbmFibGVkLCBtdWx0aUNoYWluQXNzZXRNYXAsIHNlbmRGdW5kU2x1Z10pO1xuXG4gIGNvbnN0IHZhbGlkYXRlUmVjaXBpZW50QWRkcmVzcyA9IHVzZUNhbGxiYWNrKChydWxlOiBSdWxlLCBfcmVjaXBpZW50QWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCFfcmVjaXBpZW50QWRkcmVzcykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ1JlY2lwaWVudCBhZGRyZXNzIGlzIHJlcXVpcmVkJykpO1xuICAgIH1cblxuICAgIGlmICghaXNBZGRyZXNzKF9yZWNpcGllbnRBZGRyZXNzKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ0ludmFsaWQgcmVjaXBpZW50IGFkZHJlc3MnKSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBjaGFpbiwgZGVzdENoYWluLCBmcm9tLCB0byB9ID0gZm9ybS5nZXRGaWVsZHNWYWx1ZSgpO1xuXG4gICAgaWYgKCFmcm9tIHx8ICFjaGFpbiB8fCAhZGVzdENoYWluKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNPbkNoYWluID0gY2hhaW4gPT09IGRlc3RDaGFpbjtcblxuICAgIGNvbnN0IGFjY291bnQgPSBmaW5kQWNjb3VudEJ5QWRkcmVzcyhhY2NvdW50cywgX3JlY2lwaWVudEFkZHJlc3MpO1xuXG4gICAgaWYgKGlzT25DaGFpbikge1xuICAgICAgaWYgKGlzU2FtZUFkZHJlc3MoZnJvbSwgX3JlY2lwaWVudEFkZHJlc3MpKSB7XG4gICAgICAgIC8vIHRvZG86IGNoYW5nZSBtZXNzYWdlIGxhdGVyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdUaGUgcmVjaXBpZW50IGFkZHJlc3MgY2FuIG5vdCBiZSB0aGUgc2FtZSBhcyB0aGUgc2VuZGVyIGFkZHJlc3MnKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzTm90U2FtZUFkZHJlc3NUeXBlID0gKGlzRXRoZXJldW1BZGRyZXNzKGZyb20pICYmICEhX3JlY2lwaWVudEFkZHJlc3MgJiYgIWlzRXRoZXJldW1BZGRyZXNzKF9yZWNpcGllbnRBZGRyZXNzKSkgfHxcbiAgICAgICAgKCFpc0V0aGVyZXVtQWRkcmVzcyhmcm9tKSAmJiAhIV9yZWNpcGllbnRBZGRyZXNzICYmIGlzRXRoZXJldW1BZGRyZXNzKF9yZWNpcGllbnRBZGRyZXNzKSk7XG5cbiAgICAgIGlmIChpc05vdFNhbWVBZGRyZXNzVHlwZSkge1xuICAgICAgICAvLyB0b2RvOiBjaGFuZ2UgbWVzc2FnZSBsYXRlclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnVGhlIHJlY2lwaWVudCBhZGRyZXNzIG11c3QgYmUgc2FtZSB0eXBlIGFzIHRoZSBjdXJyZW50IGFjY291bnQgYWRkcmVzcy4nKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzRGVzdENoYWluRXZtQ29tcGF0aWJsZSA9IF9pc0NoYWluRXZtQ29tcGF0aWJsZShjaGFpbkluZm9NYXBbZGVzdENoYWluXSk7XG5cbiAgICAgIGlmIChpc0Rlc3RDaGFpbkV2bUNvbXBhdGlibGUgIT09IGlzRXRoZXJldW1BZGRyZXNzKHRvKSkge1xuICAgICAgICAvLyB0b2RvOiBjaGFuZ2UgbWVzc2FnZSBsYXRlclxuICAgICAgICBpZiAoaXNEZXN0Q2hhaW5Fdm1Db21wYXRpYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ1RoZSByZWNpcGllbnQgYWRkcmVzcyBtdXN0IGJlIEVWTSB0eXBlJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdUaGUgcmVjaXBpZW50IGFkZHJlc3MgbXVzdCBiZSBTdWJzdHJhdGUgdHlwZScpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY2NvdW50Py5pc0hhcmR3YXJlKSB7XG4gICAgICBjb25zdCBkZXN0Q2hhaW5JbmZvID0gY2hhaW5JbmZvTWFwW2Rlc3RDaGFpbl07XG4gICAgICBjb25zdCBhdmFpbGFibGVHZW46IHN0cmluZ1tdID0gYWNjb3VudC5hdmFpbGFibGVHZW5lc2lzSGFzaGVzIHx8IFtdO1xuXG4gICAgICBpZiAoIWlzRXRoZXJldW1BZGRyZXNzKGFjY291bnQuYWRkcmVzcykgJiYgIWF2YWlsYWJsZUdlbi5pbmNsdWRlcyhkZXN0Q2hhaW5JbmZvPy5zdWJzdHJhdGVJbmZvPy5nZW5lc2lzSGFzaCB8fCAnJykpIHtcbiAgICAgICAgY29uc3QgZGVzdENoYWluTmFtZSA9IGRlc3RDaGFpbkluZm8/Lm5hbWUgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdXcm9uZyBuZXR3b3JrLiBZb3VyIExlZGdlciBhY2NvdW50IGlzIG5vdCBzdXBwb3J0ZWQgYnkge3tuZXR3b3JrfX0uIFBsZWFzZSBjaG9vc2UgYW5vdGhlciByZWNlaXZpbmcgYWNjb3VudCBhbmQgdHJ5IGFnYWluLicsIHsgcmVwbGFjZTogeyBuZXR3b3JrOiBkZXN0Q2hhaW5OYW1lIH0gfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSwgW2FjY291bnRzLCBjaGFpbkluZm9NYXAsIGZvcm0sIHRdKTtcblxuICBjb25zdCB2YWxpZGF0ZUFtb3VudCA9IHVzZUNhbGxiYWNrKChydWxlOiBSdWxlLCBhbW91bnQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmICghYW1vdW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnQW1vdW50IGlzIHJlcXVpcmVkJykpO1xuICAgIH1cblxuICAgIGlmICgobmV3IEJpZ04oYW1vdW50KSkuZXEobmV3IEJpZ04oMCkpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnQW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKSk7XG4gICAgfVxuXG4gICAgaWYgKChuZXcgQmlnTihhbW91bnQpKS5ndChuZXcgQmlnTihtYXhUcmFuc2ZlcikpKSB7XG4gICAgICBjb25zdCBtYXhTdHJpbmcgPSBmb3JtYXRCYWxhbmNlKG1heFRyYW5zZmVyLCBkZWNpbWFscyk7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdBbW91bnQgbXVzdCBiZSBlcXVhbCBvciBsZXNzIHRoYW4ge3tudW1iZXJ9fScsIHsgcmVwbGFjZTogeyBudW1iZXI6IG1heFN0cmluZyB9IH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sIFtkZWNpbWFscywgbWF4VHJhbnNmZXIsIHRdKTtcblxuICBjb25zdCBvblZhbHVlc0NoYW5nZTogRm9ybUNhbGxiYWNrczxUcmFuc2ZlclBhcmFtcz5bJ29uVmFsdWVzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjayhcbiAgICAocGFydDogUGFydGlhbDxUcmFuc2ZlclBhcmFtcz4sIHZhbHVlczogVHJhbnNmZXJQYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlRmllbGQ6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGlmIChwYXJ0LmZyb20pIHtcbiAgICAgICAgc2V0Rm9yY2VVcGRhdGVNYXhWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICBmb3JtLnJlc2V0RmllbGRzKFsnYXNzZXQnXSk7XG4gICAgICAgIC8vIEJlY2F1c2UgY2FjaGUgZGF0YSwgc28gbmV4dCBkYXRhIG1heSBiZSBzYW1lIHdpdGggZGVmYXVsdCBkYXRhXG4gICAgICAgIGZvcm0uc2V0RmllbGRzKFt7IG5hbWU6ICdhc3NldCcsIHZhbHVlOiAnJyB9XSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJ0LmRlc3RDaGFpbikge1xuICAgICAgICBzZXRGb3JjZVVwZGF0ZU1heFZhbHVlKGlzVHJhbnNmZXJBbGwgPyB7fSA6IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgaWYgKHZhbHVlcy50bykge1xuICAgICAgICAgIHZhbGlkYXRlRmllbGQucHVzaCgndG8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFydC5hc3NldCkge1xuICAgICAgICBjb25zdCBjaGFpbiA9IGFzc2V0UmVnaXN0cnlbcGFydC5hc3NldF0ub3JpZ2luQ2hhaW47XG5cbiAgICAgICAgaWYgKHZhbHVlcy52YWx1ZSkge1xuICAgICAgICAgIHZhbGlkYXRlRmllbGQucHVzaCgndmFsdWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xuICAgICAgICAgIGNoYWluOiBjaGFpbixcbiAgICAgICAgICBkZXN0Q2hhaW46IGNoYWluXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2YWx1ZXMudG8pIHtcbiAgICAgICAgICB2YWxpZGF0ZUZpZWxkLnB1c2goJ3RvJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRJc1RyYW5zZmVyQWxsKGZhbHNlKTtcbiAgICAgICAgc2V0Rm9yY2VVcGRhdGVNYXhWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVGaWVsZC5sZW5ndGgpIHtcbiAgICAgICAgZm9ybS52YWxpZGF0ZUZpZWxkcyh2YWxpZGF0ZUZpZWxkKS5jYXRjaChub29wKTtcbiAgICAgIH1cblxuICAgICAgcGVyc2lzdERhdGEoZm9ybS5nZXRGaWVsZHNWYWx1ZSgpKTtcbiAgICB9LFxuICAgIFtmb3JtLCBhc3NldFJlZ2lzdHJ5LCBpc1RyYW5zZmVyQWxsLCBwZXJzaXN0RGF0YV1cbiAgKTtcblxuICAvLyBTdWJtaXQgdHJhbnNhY3Rpb25cbiAgY29uc3Qgb25TdWJtaXQ6IEZvcm1DYWxsYmFja3M8VHJhbnNmZXJQYXJhbXM+WydvbkZpbmlzaCddID0gdXNlQ2FsbGJhY2soKHZhbHVlczogVHJhbnNmZXJQYXJhbXMpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRm9ybSBzdWJtaXR0ZWQgd2l0aCB2YWx1ZXM6JywgdmFsdWVzKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHsgYXNzZXQsIGNoYWluLCBkZXN0Q2hhaW4sIGZyb20sIHRvLCB2YWx1ZSB9ID0gdmFsdWVzO1xuXG4gICAgbGV0IHNlbmRQcm9taXNlOiBQcm9taXNlPFNXVHJhbnNhY3Rpb25SZXNwb25zZT47XG5cbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgYWNjb3VudCBmb3IgYWRkcmVzczonLCBmcm9tKTtcbiAgICBjb25zdCBhY2NvdW50ID0gZmluZEFjY291bnRCeUFkZHJlc3MoYWNjb3VudHMsIGZyb20pO1xuXG4gICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIG5vdGlmaWNhdGlvbih7XG4gICAgICAgIG1lc3NhZ2U6IHQoXCJDYW4ndCBmaW5kIGFjY291bnRcIiksXG4gICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNMZWRnZXIgPSAhIWFjY291bnQuaXNIYXJkd2FyZTtcbiAgICBjb25zdCBpc0V0aGVyZXVtID0gaXNFdGhlcmV1bUFkZHJlc3MoYWNjb3VudC5hZGRyZXNzKTtcbiAgICBjb25zdCBjaGFpbkFzc2V0ID0gYXNzZXRSZWdpc3RyeVthc3NldF07XG5cbiAgICBjb25zb2xlLmxvZygnQWNjb3VudCBkZXRhaWxzOicsIGFjY291bnQpO1xuICAgIGNvbnNvbGUubG9nKCdpc0xlZGdlcjonLCBpc0xlZGdlciwgJ2lzRXRoZXJldW06JywgaXNFdGhlcmV1bSk7XG4gICAgY29uc29sZS5sb2coJ0NoYWluIGFzc2V0IGRldGFpbHM6JywgY2hhaW5Bc3NldCk7XG4gICAgXG4gICAgaWYgKGNoYWluID09PSBkZXN0Q2hhaW4pIHtcbiAgICAgIGlmIChpc0xlZGdlcikge1xuICAgICAgICBpZiAoaXNFdGhlcmV1bSkge1xuICAgICAgICAgIGlmICghX2lzVG9rZW5UcmFuc2ZlcnJlZEJ5RXZtKGNoYWluQXNzZXQpKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0xlZGdlciBkb2VzIG5vdCBzdXBwb3J0IHRyYW5zZmVyIGZvciB0aGlzIHRva2VuJyksXG4gICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmZXIgdG9rZW4gb3Igc2VuZCBmdW5kXG4gICAgICBzZW5kUHJvbWlzZSA9IG1ha2VUcmFuc2Zlcih7XG4gICAgICAgIGZyb20sXG4gICAgICAgIG5ldHdvcmtLZXk6IGNoYWluLFxuICAgICAgICB0bzogdG8sXG4gICAgICAgIHRva2VuU2x1ZzogYXNzZXQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgdHJhbnNmZXJBbGw6IGlzVHJhbnNmZXJBbGxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNMZWRnZXIpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgbWVzc2FnZTogdCgnVGhpcyBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgZm9yIExlZGdlciBhY2NvdW50JyksXG4gICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBjcm9zcyBjaGFpbiB0cmFuc2ZlclxuICAgICAgc2VuZFByb21pc2UgPSBtYWtlQ3Jvc3NDaGFpblRyYW5zZmVyKHtcbiAgICAgICAgZGVzdGluYXRpb25OZXR3b3JrS2V5OiBkZXN0Q2hhaW4sXG4gICAgICAgIGZyb20sXG4gICAgICAgIG9yaWdpbk5ldHdvcmtLZXk6IGNoYWluLFxuICAgICAgICB0b2tlblNsdWc6IGFzc2V0LFxuICAgICAgICB0byxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHRyYW5zZmVyQWxsOiBpc1RyYW5zZmVyQWxsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIEhhbmRsZSB0cmFuc2ZlciBhY3Rpb25cbiAgICAgIHNlbmRQcm9taXNlXG4gICAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgIDtcbiAgICB9LCAzMDApO1xuICB9LCBbYWNjb3VudHMsIGFzc2V0UmVnaXN0cnksIG5vdGlmaWNhdGlvbiwgdCwgaXNUcmFuc2ZlckFsbCwgb25TdWNjZXNzLCBvbkVycm9yXSk7XG5cbiAgY29uc3Qgb25GaWx0ZXJBY2NvdW50RnVuYyA9IHVzZU1lbW8oKCkgPT4gZmlsdGVyQWNjb3VudEZ1bmMoY2hhaW5JbmZvTWFwLCBhc3NldFJlZ2lzdHJ5LCBtdWx0aUNoYWluQXNzZXRNYXAsIHNlbmRGdW5kU2x1ZyksIFthc3NldFJlZ2lzdHJ5LCBjaGFpbkluZm9NYXAsIG11bHRpQ2hhaW5Bc3NldE1hcCwgc2VuZEZ1bmRTbHVnXSk7XG5cbiAgY29uc3Qgb25TZXRNYXhUcmFuc2ZlcmFibGUgPSB1c2VDYWxsYmFjaygodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBibk1heFRyYW5zZmVyID0gbmV3IEJOKG1heFRyYW5zZmVyKTtcblxuICAgIGlmICghYm5NYXhUcmFuc2Zlci5pc1plcm8oKSkge1xuICAgICAgc2V0SXNUcmFuc2ZlckFsbCh2YWx1ZSk7XG4gICAgfVxuICB9LCBbbWF4VHJhbnNmZXJdKTtcblxuICAvLyBUT0RPOiBOZWVkIHRvIHJldmlld1xuICAvLyBBdXRvIGZpbGwgbG9naWNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGFzc2V0LCBmcm9tIH0gPSBmb3JtLmdldEZpZWxkc1ZhbHVlKCk7XG5cbiAgICBjb25zdCB1cGRhdGVJbmZvV2l0aFRva2VuU2x1ZyA9ICh0b2tlblNsdWc6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdG9rZW5JbmZvID0gYXNzZXRSZWdpc3RyeVt0b2tlblNsdWddO1xuXG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcbiAgICAgICAgYXNzZXQ6IHRva2VuU2x1ZyxcbiAgICAgICAgY2hhaW46IHRva2VuSW5mby5vcmlnaW5DaGFpbixcbiAgICAgICAgZGVzdENoYWluOiB0b2tlbkluZm8ub3JpZ2luQ2hhaW5cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodG9rZW5JdGVtcy5sZW5ndGgpIHtcbiAgICAgIGxldCBpc0FwcGx5RGVmYXVsdEFzc2V0ID0gdHJ1ZTtcblxuICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gZmluZEFjY291bnRCeUFkZHJlc3MoYWNjb3VudHMsIGZyb20pO1xuXG4gICAgICAgIGlmIChhY2NvdW50Py5vcmlnaW5HZW5lc2lzSGFzaCkge1xuICAgICAgICAgIGNvbnN0IG5ldHdvcmsgPSBmaW5kTmV0d29ya0pzb25CeUdlbmVzaXNIYXNoKGNoYWluSW5mb01hcCwgYWNjb3VudC5vcmlnaW5HZW5lc2lzSGFzaCk7XG5cbiAgICAgICAgICBpZiAobmV0d29yaykge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbkl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ub3JpZ2luQ2hhaW4gPT09IG5ldHdvcmsuc2x1Zyk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICB1cGRhdGVJbmZvV2l0aFRva2VuU2x1Zyh0b2tlbi5zbHVnKTtcbiAgICAgICAgICAgICAgaXNBcHBseURlZmF1bHRBc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCBhc3NldCBpZiBjdXJyZW50IGFzc2V0IGlzIG5vdCBpbiB0b2tlbiBsaXN0XG4gICAgICAgIGlzQXBwbHlEZWZhdWx0QXNzZXQgPSAhdG9rZW5JdGVtcy5zb21lKChpKSA9PiBpLnNsdWcgPT09IGFzc2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQXBwbHlEZWZhdWx0QXNzZXQpIHtcbiAgICAgICAgdXBkYXRlSW5mb1dpdGhUb2tlblNsdWcodG9rZW5JdGVtc1swXS5zbHVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthY2NvdW50cywgdG9rZW5JdGVtcywgYXNzZXRSZWdpc3RyeSwgZm9ybSwgY2hhaW5JbmZvTWFwXSk7XG5cbiAgLy8gR2V0IG1heCB0cmFuc2ZlciB2YWx1ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWwgPSBmYWxzZTtcblxuICAgIGlmIChmcm9tICYmIGFzc2V0KSB7XG4gICAgICBnZXRNYXhUcmFuc2Zlcih7XG4gICAgICAgIGFkZHJlc3M6IGZyb20sXG4gICAgICAgIG5ldHdvcmtLZXk6IGFzc2V0UmVnaXN0cnlbYXNzZXRdLm9yaWdpbkNoYWluLFxuICAgICAgICB0b2tlbjogYXNzZXQsXG4gICAgICAgIGlzWGNtVHJhbnNmZXI6IGNoYWluICE9PSBkZXN0Q2hhaW4sXG4gICAgICAgIGRlc3RDaGFpblxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGJhbGFuY2UpID0+IHtcbiAgICAgICAgICAhY2FuY2VsICYmIHNldE1heFRyYW5zZmVyKGJhbGFuY2UudmFsdWUpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICFjYW5jZWwgJiYgc2V0TWF4VHJhbnNmZXIoJzAnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIGlmICghY2FuY2VsKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm0uZ2V0RmllbGRWYWx1ZSgndmFsdWUnKSBhcyBzdHJpbmc7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtLnZhbGlkYXRlRmllbGRzKFsndmFsdWUnXSkuZmluYWxseSgoKSA9PiB1cGRhdGUoe30pKTtcbiAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWwgPSB0cnVlO1xuICAgIH07XG4gIH0sIFthc3NldCwgYXNzZXRSZWdpc3RyeSwgY2hhaW4sIGNoYWluU3RhdHVzLCBkZXN0Q2hhaW4sIGZvcm0sIGZyb21dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJuVHJhbnNmZXJBbW91bnQgPSBuZXcgQk4odHJhbnNmZXJBbW91bnQgfHwgJzAnKTtcbiAgICBjb25zdCBibk1heFRyYW5zZmVyID0gbmV3IEJOKG1heFRyYW5zZmVyIHx8ICcwJyk7XG5cbiAgICBpZiAoYm5UcmFuc2ZlckFtb3VudC5ndChCTl9aRVJPKSAmJiBiblRyYW5zZmVyQW1vdW50LmVxKGJuTWF4VHJhbnNmZXIpKSB7XG4gICAgICBzZXRJc1RyYW5zZmVyQWxsKHRydWUpO1xuICAgIH1cbiAgfSwgW21heFRyYW5zZmVyLCB0cmFuc2ZlckFtb3VudF0pO1xuXG4gIHVzZVJlc3RvcmVUcmFuc2FjdGlvbihmb3JtKTtcbiAgdXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24odmFsaWRhdGVGaWVsZHMsIGZvcm0sIGRlZmF1bHREYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VHJhbnNhY3Rpb25Db250ZW50IGNsYXNzTmFtZT17Q04oYCR7Y2xhc3NOYW1lfSAtdHJhbnNhY3Rpb24tY29udGVudGApfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydfX2JyaWVmIGNvbW1vbi10ZXh0IHRleHQtbGlnaHQtNCB0ZXh0LWNlbnRlcid9PlxuICAgICAgICAgIHt0KCdZb3UgYXJlIHBlcmZvcm1pbmcgYSB0cmFuc2ZlciBvZiBhIGZ1bmdpYmxlIHRva2VuJyl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPXsnZm9ybS1jb250YWluZXIgZm9ybS1zcGFjZS1zbSd9XG4gICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXtmb3JtRGVmYXVsdH1cbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e29uVmFsdWVzQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtDTih7IGhpZGRlbjogIWlzQWxsQWNjb3VudCB9KX1cbiAgICAgICAgICAgIG5hbWU9eydmcm9tJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgIGFkZHJlc3NQcmVmaXg9e2Zyb21DaGFpbk5ldHdvcmtQcmVmaXh9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBbGxBY2NvdW50fVxuICAgICAgICAgICAgICBmaWx0ZXI9e29uRmlsdGVyQWNjb3VudEZ1bmN9XG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdTZW5kIGZyb20nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tcm93J30+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9eydhc3NldCd9PlxuICAgICAgICAgICAgICA8VG9rZW5TZWxlY3RvclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdG9rZW5JdGVtcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgaXRlbXM9e3Rva2VuSXRlbXN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1NlbGVjdCB0b2tlbicpfVxuICAgICAgICAgICAgICAgIHNob3dDaGFpbkluU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdTZWxlY3QgdG9rZW4nKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydtaWRkbGUtaXRlbSd9XG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17UGFwZXJQbGFuZVJpZ2h0fVxuICAgICAgICAgICAgICBzaXplPXsnbWQnfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPXsnZGVzdENoYWluJ30+XG4gICAgICAgICAgICAgIDxDaGFpblNlbGVjdG9yXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkZXN0Q2hhaW5JdGVtcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgaXRlbXM9e2Rlc3RDaGFpbkl0ZW1zfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdTZWxlY3QgZGVzdGluYXRpb24gY2hhaW4nKX1cbiAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdTZWxlY3QgZGVzdGluYXRpb24gY2hhaW4nKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEhpZGRlbklucHV0IGZpZWxkcz17aGlkZGVuRmllbGRzfSAvPlxuXG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT17J3RvJ31cbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlUmVjaXBpZW50QWRkcmVzc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgc3RhdHVzSGVscEFzVG9vbHRpcD17dHJ1ZX1cbiAgICAgICAgICAgIHZhbGlkYXRlVHJpZ2dlcj0nb25CbHVyJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBZGRyZXNzSW5wdXRcbiAgICAgICAgICAgICAgYWRkcmVzc1ByZWZpeD17ZGVzdENoYWluTmV0d29ya1ByZWZpeH1cbiAgICAgICAgICAgICAgYWxsb3dEb21haW49e3RydWV9XG4gICAgICAgICAgICAgIGNoYWluPXtjaGFpbn1cbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ1NlbmQgdG8nKX1cbiAgICAgICAgICAgICAgbmV0d29ya0dlbmVzaXNIYXNoPXtkZXN0Q2hhaW5HZW5lc2lzSGFzaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ0FjY291bnQgYWRkcmVzcycpfVxuICAgICAgICAgICAgICBzYXZlQWRkcmVzcz17dHJ1ZX1cbiAgICAgICAgICAgICAgc2hvd0FkZHJlc3NCb29rPXt0cnVlfVxuICAgICAgICAgICAgICBzaG93U2Nhbm5lcj17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBuYW1lPXsndmFsdWUnfVxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdGVBbW91bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHN0YXR1c0hlbHBBc1Rvb2x0aXA9e3RydWV9XG4gICAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXI9J29uQmx1cidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QW1vdW50SW5wdXRcbiAgICAgICAgICAgICAgZGVjaW1hbHM9e2RlY2ltYWxzfVxuICAgICAgICAgICAgICBmb3JjZVVwZGF0ZU1heFZhbHVlPXtmb3JjZVVwZGF0ZU1heFZhbHVlfVxuICAgICAgICAgICAgICBtYXhWYWx1ZT17bWF4VHJhbnNmZXJ9XG4gICAgICAgICAgICAgIG9uU2V0TWF4PXtvblNldE1heFRyYW5zZmVyYWJsZX1cbiAgICAgICAgICAgICAgc2hvd01heEJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgdG9vbHRpcD17dCgnQW1vdW50Jyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgPEZyZWVCYWxhbmNlXG4gICAgICAgICAgYWRkcmVzcz17ZnJvbX1cbiAgICAgICAgICBjaGFpbj17Y2hhaW59XG4gICAgICAgICAgb25CYWxhbmNlUmVhZHk9e3NldElzQmFsYW5jZVJlYWR5fVxuICAgICAgICAgIHRva2VuU2x1Zz17YXNzZXR9XG4gICAgICAgIC8+XG4gICAgICA8L1RyYW5zYWN0aW9uQ29udGVudD5cbiAgICAgIDxUcmFuc2FjdGlvbkZvb3RlclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gLXRyYW5zYWN0aW9uLWZvb3RlcmB9XG4gICAgICAgIGVycm9ycz17W119XG4gICAgICAgIHdhcm5pbmdzPXtbXX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXshaXNCYWxhbmNlUmVhZHl9XG4gICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtQYXBlclBsYW5lVGlsdH1cbiAgICAgICAgICAgICAgd2VpZ2h0PXsnZmlsbCd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICBvbkNsaWNrPXtjaGVja0FjdGlvbihmb3JtLnN1Ym1pdCwgZXh0cmluc2ljVHlwZSl9XG4gICAgICAgICAgc2NoZW1hPXtpc1RyYW5zZmVyQWxsID8gJ3dhcm5pbmcnIDogdW5kZWZpbmVkfVxuICAgICAgICA+XG4gICAgICAgICAge2lzVHJhbnNmZXJBbGwgPyB0KCdUcmFuc2ZlciBhbGwnKSA6IHQoJ1RyYW5zZmVyJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9UcmFuc2FjdGlvbkZvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFNlbmRGdW5kID0gc3R5bGVkKF9TZW5kRnVuZCkoKHsgdGhlbWUgfSkgPT4ge1xuICBjb25zdCB0b2tlbiA9ICh0aGVtZSBhcyBUaGVtZSkudG9rZW47XG5cbiAgcmV0dXJuICh7XG4gICAgJy5fX2JyaWVmJzoge1xuICAgICAgcGFkZGluZ0xlZnQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbk1EXG4gICAgfSxcblxuICAgICcuZm9ybS1yb3cnOiB7XG4gICAgICBnYXA6IDhcbiAgICB9LFxuXG4gICAgJy5taWRkbGUtaXRlbSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luU01cbiAgICB9LFxuXG4gICAgJyYuLXRyYW5zYWN0aW9uLWNvbnRlbnQuLWlzLXplcm8tYmFsYW5jZSc6IHtcbiAgICAgICcuZnJlZS1iYWxhbmNlIC5hbnQtbnVtYmVyJzoge1xuICAgICAgICAnLmFudC1udW1iZXItaW50ZWdlciwgLmFudC1udW1iZXItZGVjaW1hbCc6IHtcbiAgICAgICAgICBjb2xvcjogYCR7dG9rZW4uY29sb3JFcnJvcn0gIWltcG9ydGFudGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VuZEZ1bmQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMTkuNSwxMjEsNTAuNiwyNi40YTgsOCwwLDAsMC0xMS40LDkuN0w3MSwxMjUuM2E3LjIsNy4yLDAsMCwxLDAsNS40TDM5LjIsMjE5LjlhOCw4LDAsMCwwLDExLjQsOS43TDIxOS41LDEzNUE4LDgsMCwwLDAsMjE5LjUsMTIxWlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjcyXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTM2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJkdW90b25lXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxOS41LDEyMSw1MC42LDI2LjRhOCw4LDAsMCwwLTExLjQsOS43TDcxLDEyNS4zYTcuMiw3LjIsMCwwLDEsMCw1LjRMMzkuMiwyMTkuOWE4LDgsMCwwLDAsMTEuNCw5LjdMMjE5LjUsMTM1QTgsOCwwLDAsMCwyMTkuNSwxMjFaXCIsXG4gICAgb3BhY2l0eTogXCIwLjJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxOS41LDEyMSw1MC42LDI2LjRhOCw4LDAsMCwwLTExLjQsOS43TDcxLDEyNS4zYTcuMiw3LjIsMCwwLDEsMCw1LjRMMzkuMiwyMTkuOWE4LDgsMCwwLDAsMTEuNCw5LjdMMjE5LjUsMTM1QTgsOCwwLDAsMCwyMTkuNSwxMjFaXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiNzJcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxMzZcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIyMy40LDExNCw1NC45LDE5LjdhMTYuMywxNi4zLDAsMCwwLTE4LjIsMS4yLDE1LjksMTUuOSwwLDAsMC01LjEsMTcuOWwyOC4xLDc4LjVhNC4xLDQuMSwwLDAsMCwzLjgsMi43aDcyLjJhOC4yLDguMiwwLDAsMSw4LjMsNy41LDgsOCwwLDAsMS04LDguNUg2My41YTQuMSw0LjEsMCwwLDAtMy44LDIuN0wzMS42LDIxNy4yYTE2LjEsMTYuMSwwLDAsMCwxNS4xLDIxLjQsMTYuNSwxNi41LDAsMCwwLDcuOC0yTDIyMy40LDE0MmExNi4xLDE2LjEsMCwwLDAsMC0yOFpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjE5LjUsMTIxLDUwLjYsMjYuNGE4LDgsMCwwLDAtMTEuNCw5LjdMNzEsMTI1LjNhNy4yLDcuMiwwLDAsMSwwLDUuNEwzOS4yLDIxOS45YTgsOCwwLDAsMCwxMS40LDkuN0wyMTkuNSwxMzVBOCw4LDAsMCwwLDIxOS41LDEyMVpcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI3MlwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjEzNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMTkuNSwxMjEsNTAuNiwyNi40YTgsOCwwLDAsMC0xMS40LDkuN0w3MSwxMjUuM2E3LjIsNy4yLDAsMCwxLDAsNS40TDM5LjIsMjE5LjlhOCw4LDAsMCwwLDExLjQsOS43TDIxOS41LDEzNUE4LDgsMCwwLDAsMjE5LjUsMTIxWlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiNzJcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxMzZcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwicmVndWxhclwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMTkuNSwxMjEsNTAuNiwyNi40YTgsOCwwLDAsMC0xMS40LDkuN0w3MSwxMjUuM2E3LjIsNy4yLDAsMCwxLDAsNS40TDM5LjIsMjE5LjlhOCw4LDAsMCwwLDExLjQsOS43TDIxOS41LDEzNUE4LDgsMCwwLDAsMjE5LjUsMTIxWlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjcyXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTM2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBQYXBlclBsYW5lUmlnaHQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuUGFwZXJQbGFuZVJpZ2h0LmRpc3BsYXlOYW1lID0gXCJQYXBlclBsYW5lUmlnaHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGFwZXJQbGFuZVJpZ2h0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGFwZXJQbGFuZVJpZ2h0LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbiIsIk51bWJlciIsIlR5cG9ncmFwaHkiLCJDTiIsIlJlYWN0Iiwic3R5bGVkIiwidXNlVGhlbWUiLCJDb21wb25lbnQiLCJib25kZWRCYWxhbmNlIiwiY2xhc3NOYW1lIiwiZGVjaW1hbHMiLCJsYWJlbCIsInN5bWJvbCIsInQiLCJ0b2tlbiIsImNvbG9yVGV4dFRlcnRpYXJ5IiwiQm9uZGVkQmFsYW5jZSIsInRoZW1lIiwiZGlzcGxheSIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJ1c2VHZXRCYWxhbmNlIiwiQWN0aXZpdHlJbmRpY2F0b3IiLCJ1c2VFZmZlY3QiLCJhZGRyZXNzIiwiY2hhaW4iLCJvbkJhbGFuY2VSZWFkeSIsInRva2VuU2x1ZyIsImVycm9yIiwiaXNMb2FkaW5nIiwibmF0aXZlVG9rZW5CYWxhbmNlIiwibmF0aXZlVG9rZW5TbHVnIiwidG9rZW5CYWxhbmNlIiwidmFsdWUiLCJGcmVlQmFsYW5jZSIsImZsZXhXcmFwIiwiY29sb3JFcnJvciIsImNoaWxkcmVuIiwiVHJhbnNhY3Rpb25Db250ZW50IiwiZXJyb3JzIiwid2FybmluZ3MiLCJsZW5ndGgiLCJtYXAiLCJlIiwiaW5kZXgiLCJ3IiwiVHJhbnNhY3Rpb25Gb290ZXIiLCJkZWZhdWx0IiwiX0Fzc2V0VHlwZSIsIkV4dHJpbnNpY1R5cGUiLCJfZ2V0QXNzZXREZWNpbWFscyIsIl9nZXRPcmlnaW5DaGFpbk9mQXNzZXQiLCJfaXNBc3NldEZ1bmdpYmxlVG9rZW4iLCJfaXNDaGFpbkV2bUNvbXBhdGlibGUiLCJfaXNNYW50YVprQXNzZXQiLCJfaXNUb2tlblRyYW5zZmVycmVkQnlFdm0iLCJkZXRlY3RUcmFuc2xhdGUiLCJpc1NhbWVBZGRyZXNzIiwiSGlkZGVuSW5wdXQiLCJBY2NvdW50U2VsZWN0b3IiLCJBZGRyZXNzSW5wdXQiLCJBbW91bnRJbnB1dCIsIkNoYWluU2VsZWN0b3IiLCJUb2tlblNlbGVjdG9yIiwidXNlR2V0Q2hhaW5QcmVmaXhCeVNsdWciLCJ1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiIsInVzZUluaXRWYWxpZGF0ZVRyYW5zYWN0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwidXNlUHJlQ2hlY2tBY3Rpb24iLCJ1c2VSZXN0b3JlVHJhbnNhY3Rpb24iLCJ1c2VTZWxlY3RvciIsInVzZVNldEN1cnJlbnRQYWdlIiwidXNlVHJhbnNhY3Rpb25Db250ZXh0IiwidXNlV2F0Y2hUcmFuc2FjdGlvbiIsInVzZUlzTWFudGFQYXlFbmFibGVkIiwiZ2V0TWF4VHJhbnNmZXIiLCJtYWtlQ3Jvc3NDaGFpblRyYW5zZmVyIiwibWFrZVRyYW5zZmVyIiwiZmluZEFjY291bnRCeUFkZHJlc3MiLCJmb3JtYXRCYWxhbmNlIiwiaXNBY2NvdW50QWxsIiwibm9vcCIsImZpbmROZXR3b3JrSnNvbkJ5R2VuZXNpc0hhc2giLCJCdXR0b24iLCJGb3JtIiwiSWNvbiIsIkJpZ04iLCJQYXBlclBsYW5lUmlnaHQiLCJQYXBlclBsYW5lVGlsdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlSXNGaXJzdFJlbmRlciIsIkJOIiwiQk5fWkVSTyIsImlzQWRkcmVzcyIsImlzRXRoZXJldW1BZGRyZXNzIiwiaXNBc3NldFR5cGVWYWxpZCIsImNoYWluQXNzZXQiLCJjaGFpbkluZm9NYXAiLCJpc0FjY291bnRFdGhlcmV1bSIsIm9yaWdpbkNoYWluIiwiZ2V0VG9rZW5JdGVtcyIsImFjY291bnRzIiwiYXNzZXRSZWdpc3RyeSIsImFzc2V0U2V0dGluZ01hcCIsIm11bHRpQ2hhaW5Bc3NldE1hcCIsInRva2VuR3JvdXBTbHVnIiwiaXNaa01vZGVFbmFibGVkIiwiYWNjb3VudCIsImlzTGVkZ2VyIiwiaXNIYXJkd2FyZSIsInZhbGlkR2VuIiwiYXZhaWxhYmxlR2VuZXNpc0hhc2hlcyIsInZhbGlkTGVkZ2VyTmV0d29yayIsImdlbmVzaXNIYXNoIiwic2x1ZyIsImlzU2V0VG9rZW5TbHVnIiwiaXNTZXRNdWx0aUNoYWluQXNzZXRTbHVnIiwiaXNWYWxpZExlZGdlciIsImluY2x1ZGVzIiwibmFtZSIsIml0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImlzVG9rZW5GdW5naWJsZSIsIm11bHRpQ2hhaW5Bc3NldCIsInB1c2giLCJnZXRUb2tlbkF2YWlsYWJsZURlc3RpbmF0aW9ucyIsInhjbVJlZk1hcCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzdWx0Iiwib3JpZ2luQ2hhaW5LZXkiLCJsb2ciLCJ4Y21SZWYiLCJzcmNBc3NldCIsImRlc3RpbmF0aW9uQ2hhaW4iLCJkZXN0Q2hhaW4iLCJrZXlzIiwiZGVmYXVsdEZpbHRlckFjY291bnQiLCJpc1JlYWRPbmx5IiwiZmlsdGVyQWNjb3VudEZ1bmMiLCJjaGFpbkFzc2V0cyIsImZpbHRlciIsInNvbWUiLCJoaWRkZW5GaWVsZHMiLCJ2YWxpZGF0ZUZpZWxkcyIsIl9TZW5kRnVuZCIsIm5vdGlmaWNhdGlvbiIsImRlZmF1bHREYXRhIiwib25Eb25lIiwicGVyc2lzdERhdGEiLCJkZWZhdWx0U2x1ZyIsInNlbmRGdW5kU2x1ZyIsImlzRmlyc3RSZW5kZXIiLCJmb3JtIiwidXNlRm9ybSIsImZvcm1EZWZhdWx0IiwidHJhbnNmZXJBbW91bnQiLCJmcm9tIiwiYXNzZXQiLCJjaGFpblN0YXRlTWFwIiwicm9vdCIsImNoYWluU3RvcmUiLCJpc0FsbEFjY291bnQiLCJzdGF0ZSIsImFjY291bnRTdGF0ZSIsIm1heFRyYW5zZmVyIiwic2V0TWF4VHJhbnNmZXIiLCJjaGVja0FjdGlvbiIsImlzWktNb2RlRW5hYmxlZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNUcmFuc2ZlckFsbCIsInNldElzVHJhbnNmZXJBbGwiLCJ1cGRhdGUiLCJpc0JhbGFuY2VSZWFkeSIsInNldElzQmFsYW5jZVJlYWR5IiwiZm9yY2VVcGRhdGVNYXhWYWx1ZSIsInNldEZvcmNlVXBkYXRlTWF4VmFsdWUiLCJ1bmRlZmluZWQiLCJjaGFpblN0YXR1cyIsImNvbm5lY3Rpb25TdGF0dXMiLCJoYW5kbGVUcmFuc2ZlckFsbCIsIm9uRXJyb3IiLCJvblN1Y2Nlc3MiLCJkZXN0Q2hhaW5JdGVtcyIsImN1cnJlbnRDaGFpbkFzc2V0IiwiX2Fzc2V0IiwiZXh0cmluc2ljVHlwZSIsIlVOS05PV04iLCJUUkFOU0ZFUl9YQ00iLCJhc3NldFR5cGUiLCJOQVRJVkUiLCJUUkFOU0ZFUl9CQUxBTkNFIiwiVFJBTlNGRVJfVE9LRU4iLCJmcm9tQ2hhaW5OZXR3b3JrUHJlZml4IiwiZGVzdENoYWluTmV0d29ya1ByZWZpeCIsImRlc3RDaGFpbkdlbmVzaXNIYXNoIiwic3Vic3RyYXRlSW5mbyIsInRva2VuSXRlbXMiLCJ2YWxpZGF0ZVJlY2lwaWVudEFkZHJlc3MiLCJydWxlIiwiX3JlY2lwaWVudEFkZHJlc3MiLCJQcm9taXNlIiwicmVqZWN0IiwidG8iLCJnZXRGaWVsZHNWYWx1ZSIsInJlc29sdmUiLCJpc09uQ2hhaW4iLCJpc05vdFNhbWVBZGRyZXNzVHlwZSIsImlzRGVzdENoYWluRXZtQ29tcGF0aWJsZSIsImRlc3RDaGFpbkluZm8iLCJhdmFpbGFibGVHZW4iLCJkZXN0Q2hhaW5OYW1lIiwicmVwbGFjZSIsIm5ldHdvcmsiLCJ2YWxpZGF0ZUFtb3VudCIsImFtb3VudCIsImVxIiwiZ3QiLCJtYXhTdHJpbmciLCJudW1iZXIiLCJvblZhbHVlc0NoYW5nZSIsInBhcnQiLCJ2YWxpZGF0ZUZpZWxkIiwicmVzZXRGaWVsZHMiLCJzZXRGaWVsZHMiLCJzZXRGaWVsZHNWYWx1ZSIsImNhdGNoIiwib25TdWJtaXQiLCJzZW5kUHJvbWlzZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiaXNFdGhlcmV1bSIsIm5ldHdvcmtLZXkiLCJ0cmFuc2ZlckFsbCIsImRlc3RpbmF0aW9uTmV0d29ya0tleSIsIm9yaWdpbk5ldHdvcmtLZXkiLCJzZXRUaW1lb3V0IiwidGhlbiIsImZpbmFsbHkiLCJvbkZpbHRlckFjY291bnRGdW5jIiwib25TZXRNYXhUcmFuc2ZlcmFibGUiLCJibk1heFRyYW5zZmVyIiwiaXNaZXJvIiwidXBkYXRlSW5mb1dpdGhUb2tlblNsdWciLCJ0b2tlbkluZm8iLCJpc0FwcGx5RGVmYXVsdEFzc2V0Iiwib3JpZ2luR2VuZXNpc0hhc2giLCJmaW5kIiwiaXRlbSIsImkiLCJjYW5jZWwiLCJpc1hjbVRyYW5zZmVyIiwiYmFsYW5jZSIsImdldEZpZWxkVmFsdWUiLCJiblRyYW5zZmVyQW1vdW50IiwiaGlkZGVuIiwidmFsaWRhdG9yIiwic3VibWl0IiwiU2VuZEZ1bmQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5NRCIsImdhcCIsIm1hcmdpblNNIl0sInNvdXJjZVJvb3QiOiIifQ==