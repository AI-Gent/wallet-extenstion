"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Transaction_variants_ClaimReward_tsx"],{

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

/***/ "../extension-koni-ui/src/Popup/Transaction/variants/ClaimReward.tsx":
/*!***************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/variants/ClaimReward.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/constants */ "../extension-base/src/services/chain-service/constants.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/checkbox/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/XCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/bn.js/lib/bn.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_polkadot_util__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/consts.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts */ "../extension-koni-ui/src/Popup/Transaction/parts/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0























const hideFields = ['chain', 'type', 'asset'];
const validateFields = ['from'];
const Component = props => {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetCurrentPage)('/transaction/claim-reward');
  const {
    className
  } = props;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const {
    defaultData,
    onDone,
    persistData
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTransactionContext)();
  const {
    chain,
    type
  } = defaultData;
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].useForm();
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => ({
    ...defaultData
  }), [defaultData]);
  const {
    isAllAccount
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.accountState);
  const {
    stakingRewardMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.staking);
  const {
    chainInfoMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.chainStore);
  const allNominatorInfo = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetNominatorInfo)(chain, type);
  const {
    decimals,
    symbol
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetNativeTokenBasicInfo)(chain);
  const from = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useWatchTransaction)('from', form, defaultData);
  const reward = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    return stakingRewardMap.find(item => item.chain === chain && item.address === from && item.type === type);
  }, [chain, from, stakingRewardMap, type]);
  const rewardList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    return stakingRewardMap.filter(item => item.chain === chain && item.type === type);
  }, [chain, stakingRewardMap, type]);
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [isBalanceReady, setIsBalanceReady] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const {
    onError,
    onSuccess
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useHandleSubmitTransaction)(onDone);
  const goHome = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    navigate('/home/staking');
  }, [navigate]);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((changedFields, allFields) => {
    // TODO: field change
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.simpleCheckForm)(allFields, ['asset']);
    const allMap = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.convertFieldToObject)(allFields);
    setIsDisable(error || empty);
    persistData(allMap);
  }, [persistData]);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(values => {
    setLoading(true);
    const {
      bondReward
    } = values;
    setTimeout(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.submitStakeClaimReward)({
        address: from,
        chain: chain,
        bondReward: bondReward,
        stakingType: type,
        unclaimedReward: reward === null || reward === void 0 ? void 0 : reward.unclaimedReward
      }).then(onSuccess).catch(onError).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [chain, from, onError, onSuccess, reward === null || reward === void 0 ? void 0 : reward.unclaimedReward, type]);
  const checkAction = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.usePreCheckAction)(from);
  const filterAccount = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(account => {
    const chainInfo = chainInfoMap[chain];
    if (!chainInfo) {
      return false;
    }
    if (account.originGenesisHash && (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_12__._getSubstrateGenesisHash)(chainInfo) !== account.originGenesisHash) {
      return false;
    }
    if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.isAccountAll)(account.address)) {
      return false;
    }
    if (account.isReadOnly) {
      return false;
    }
    const isEvmChain = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_12__._isChainEvmCompatible)(chainInfo);
    if (isEvmChain !== (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_13__.isEthereumAddress)(account.address)) {
      return false;
    }
    const nominatorMetadata = allNominatorInfo.find(value => (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_14__.isSameAddress)(value.address, account.address));
    if (!nominatorMetadata) {
      return false;
    }
    const reward = rewardList.find(value => (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_14__.isSameAddress)(value.address, account.address));
    const isAstarNetwork = _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_15__._STAKING_CHAIN_GROUP.astar.includes(chain);
    const isAmplitudeNetwork = _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_15__._STAKING_CHAIN_GROUP.amplitude.includes(chain);
    const bnUnclaimedReward = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_16___default())((reward === null || reward === void 0 ? void 0 : reward.unclaimedReward) || '0');
    return (type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingType.POOLED || isAmplitudeNetwork) && bnUnclaimedReward.gt(_polkadot_util__WEBPACK_IMPORTED_MODULE_18__.BN_ZERO) || isAstarNetwork && !!nominatorMetadata.nominations.length;
  }, [allNominatorInfo, chainInfoMap, rewardList, chain, type]);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useRestoreTransaction)(form);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useInitValidateTransaction)(validateFields, form, defaultData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_7__.TransactionContent, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
        resolve: dataContext.awaitStores(['staking']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'form-container form-space-sm'),
          form: form,
          initialValues: formDefault,
          onFieldsChange: onFieldsChange,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.HiddenInput, {
            fields: hideFields
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
            hidden: !isAllAccount,
            name: 'from',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountSelector, {
              filter: filterAccount
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_7__.FreeBalance, {
            address: from,
            chain: chain,
            className: 'free-balance',
            label: t('Available balance:'),
            onBalanceReady: setIsBalanceReady
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo, {
              className: "claim-reward-meta-info",
              hasBackgroundWrapper: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Chain, {
                chain: chain,
                label: t('Network')
              }), (reward === null || reward === void 0 ? void 0 : reward.unclaimedReward) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Number, {
                decimals: decimals,
                label: t('Reward claiming'),
                suffix: symbol,
                value: reward.unclaimedReward
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
            hidden: type !== _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingType.POOLED,
            name: 'bondReward',
            valuePropName: "checked",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: '__option-label',
                children: t('Bond reward after claim')
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_parts__WEBPACK_IMPORTED_MODULE_7__.TransactionFooter, {
      errors: [],
      warnings: [],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
        disabled: loading,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_22__["default"],
          weight: "fill"
        }),
        onClick: goHome,
        schema: 'secondary',
        children: t('Cancel')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
        disabled: isDisable || !isBalanceReady,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_23__["default"],
          weight: "fill"
        }),
        loading: loading,
        onClick: checkAction(form.submit, _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.ExtrinsicType.STAKING_CLAIM_REWARD),
        children: t('Continue')
      })]
    })]
  });
};
const ClaimReward = (0,styled_components__WEBPACK_IMPORTED_MODULE_24__["default"])(Component).withConfig({
  displayName: "ClaimReward",
  componentId: "sc-1xc3rai-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.unstaked-field, .free-balance': {
      marginBottom: token.marginXS
    },
    '.meta-info': {
      marginTop: token.paddingSM
    },
    '.cancel-unstake-info-item > .__col': {
      flex: 'initial',
      paddingRight: token.paddingXXS
    },
    '.claim-reward-meta-info': {
      marginTop: token.marginXXS
    },
    '.ant-checkbox-wrapper': {
      display: 'flex',
      alignItems: 'center',
      '.ant-checkbox': {
        top: 0
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimReward);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js ***!
  \****************************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
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
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm47.4,107.1a8.7,8.7,0,0,1-1.8,2.6l-33.9,33.9a7.6,7.6,0,0,1-5.6,2.3,7.8,7.8,0,0,1-5.7-2.3,8,8,0,0,1,0-11.3L148.7,136H88a8,8,0,0,1,0-16h60.7L128.4,99.7a8,8,0,0,1,11.3-11.3l33.9,33.9a8.7,8.7,0,0,1,1.8,2.6A8.3,8.3,0,0,1,175.4,131.1Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
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

var ArrowCircleRight = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ArrowCircleRight.displayName = "ArrowCircleRight";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowCircleRight);
//# sourceMappingURL=ArrowCircleRight.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfVHJhbnNhY3Rpb25fdmFyaWFudHNfQ2xhaW1SZXdhcmRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVzRjtBQUU3QjtBQUU3QjtBQUNGO0FBQzJCO0FBQUE7QUFBQTtBQVNyRCxNQUFNTyxTQUFTLEdBQUcsQ0FBQztFQUFFQyxhQUFhO0VBQUVDLFNBQVM7RUFBRUMsUUFBUTtFQUFFQyxLQUFLO0VBQUVDO0FBQWMsQ0FBQyxLQUFLO0VBQ2xGLE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdiLG9HQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFYztFQUFNLENBQUMsR0FBR1IsMkRBQVEsRUFBVztFQUVyQyxvQkFDRSx3REFBQyxxRUFBb0I7SUFBQyxTQUFTLEVBQUVILGlEQUFFLENBQUNNLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBRTtJQUFBLHdCQUMvRCx1REFBQywyREFBTTtNQUNMLE9BQU8sRUFBRUMsUUFBUztNQUNsQixZQUFZLEVBQUVJLEtBQUssQ0FBQ0MsaUJBQWtCO01BQ3RDLFFBQVEsRUFBRUQsS0FBSyxDQUFDQyxpQkFBa0I7TUFDbEMsSUFBSSxFQUFFLEVBQUc7TUFDVCxNQUFNLEVBQUVILE1BQU87TUFDZixTQUFTLEVBQUVFLEtBQUssQ0FBQ0MsaUJBQWtCO01BQ25DLEtBQUssRUFBRVAsYUFBYSxJQUFJO0lBQUUsRUFDMUIsRUFDREcsS0FBSyxJQUFJRSxDQUFDLENBQUMsUUFBUSxDQUFDO0VBQUEsRUFDQTtBQUUzQixDQUFDO0FBRUQsTUFBTUcsYUFBYSxHQUFHWCw2REFBTSxDQUFDRSxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBQyxDQUFDO0VBQUVVLEtBQUssRUFBRTtJQUFFSDtFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQ3ZFLE9BQVE7SUFDTkksT0FBTyxFQUFFLE1BQU07SUFDZkMsS0FBSyxFQUFFTCxLQUFLLENBQUNDLGlCQUFp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QW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSxTQUFTLHNFQUFtQjtBQUM1Qjs7QUFFQSxvQ0FBb0MsaURBQVU7QUFDOUMsU0FBUywwREFBbUIsQ0FBQyw0REFBUTtBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9UcmFuc2FjdGlvbi9wYXJ0cy9Cb25kZWRCYWxhbmNlLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9UcmFuc2FjdGlvbi9wYXJ0cy9GcmVlQmFsYW5jZS50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vcGFydHMvVHJhbnNhY3Rpb25Db250ZW50LnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9UcmFuc2FjdGlvbi9wYXJ0cy9UcmFuc2FjdGlvbkZvb3Rlci50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vcGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vdmFyaWFudHMvQ2xhaW1SZXdhcmQudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXJlYWN0L2Rpc3QvaWNvbnMvQXJyb3dDaXJjbGVSaWdodC5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZVRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBOdW1iZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBCaWdOIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHMgJiB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBib25kZWRCYWxhbmNlPzogc3RyaW5nIHwgbnVtYmVyIHwgQmlnTjtcbiAgZGVjaW1hbHM6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9ICh7IGJvbmRlZEJhbGFuY2UsIGNsYXNzTmFtZSwgZGVjaW1hbHMsIGxhYmVsLCBzeW1ib2wgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IHRva2VuIH0gPSB1c2VUaGVtZSgpIGFzIFRoZW1lO1xuXG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkuUGFyYWdyYXBoIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lLCAnYm9uZGVkLWJhbGFuY2UnKX0+XG4gICAgICA8TnVtYmVyXG4gICAgICAgIGRlY2ltYWw9e2RlY2ltYWxzfVxuICAgICAgICBkZWNpbWFsQ29sb3I9e3Rva2VuLmNvbG9yVGV4dFRlcnRpYXJ5fVxuICAgICAgICBpbnRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgIHNpemU9ezE0fVxuICAgICAgICBzdWZmaXg9e3N5bWJvbH1cbiAgICAgICAgdW5pdENvbG9yPXt0b2tlbi5jb2xvclRleHRUZXJ0aWFyeX1cbiAgICAgICAgdmFsdWU9e2JvbmRlZEJhbGFuY2UgfHwgMH1cbiAgICAgIC8+XG4gICAgICB7bGFiZWwgfHwgdCgnQm9uZGVkJyl9XG4gICAgPC9UeXBvZ3JhcGh5LlBhcmFncmFwaD5cbiAgKTtcbn07XG5cbmNvbnN0IEJvbmRlZEJhbGFuY2UgPSBzdHlsZWQoQ29tcG9uZW50KSgoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0VGVydGlhcnksXG5cbiAgICAnJi5hbnQtdHlwb2dyYXBoeSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgIH0sXG5cbiAgICAnLmFudC1udW1iZXInOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzAuM2VtJ1xuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkQmFsYW5jZTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IHVzZUdldEJhbGFuY2UgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IsIE51bWJlciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzICYge1xuICBhZGRyZXNzPzogc3RyaW5nLFxuICB0b2tlblNsdWc/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjaGFpbj86IHN0cmluZztcbiAgb25CYWxhbmNlUmVhZHk/OiAocnM6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9ICh7IGFkZHJlc3MsIGNoYWluLCBjbGFzc05hbWUsIGxhYmVsLCBvbkJhbGFuY2VSZWFkeSwgdG9rZW5TbHVnIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcbiAgY29uc3QgeyBlcnJvciwgaXNMb2FkaW5nLCBuYXRpdmVUb2tlbkJhbGFuY2UsIG5hdGl2ZVRva2VuU2x1ZywgdG9rZW5CYWxhbmNlIH0gPSB1c2VHZXRCYWxhbmNlKGNoYWluLCBhZGRyZXNzLCB0b2tlblNsdWcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25CYWxhbmNlUmVhZHk/LighaXNMb2FkaW5nICYmICFlcnJvcik7XG4gIH0sIFtlcnJvciwgaXNMb2FkaW5nLCBvbkJhbGFuY2VSZWFkeV0pO1xuXG4gIGlmICghYWRkcmVzcyAmJiAhY2hhaW4pIHtcbiAgICByZXR1cm4gPD48Lz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5LlBhcmFncmFwaCBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSwgJ2ZyZWUtYmFsYW5jZScpfT5cbiAgICAgIHshZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPSdfX2xhYmVsJz57bGFiZWwgfHwgdCgnU2VuZGVyIGF2YWlsYWJsZSBiYWxhbmNlOicpfTwvc3Bhbj59XG4gICAgICB7aXNMb2FkaW5nICYmIDxBY3Rpdml0eUluZGljYXRvciBzaXplPXsxNH0gLz59XG4gICAgICB7ZXJyb3IgJiYgPFR5cG9ncmFwaHkuVGV4dCBjbGFzc05hbWU9eydlcnJvci1tZXNzYWdlJ30+e2Vycm9yfTwvVHlwb2dyYXBoeS5UZXh0Pn1cbiAgICAgIHtcbiAgICAgICAgIWlzTG9hZGluZyAmJiAhZXJyb3IgJiYgISFuYXRpdmVUb2tlblNsdWcgJiYgKFxuICAgICAgICAgIDxOdW1iZXJcbiAgICAgICAgICAgIGRlY2ltYWw9e25hdGl2ZVRva2VuQmFsYW5jZS5kZWNpbWFscyB8fCAxOH1cbiAgICAgICAgICAgIGRlY2ltYWxDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICBpbnRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgIHN1ZmZpeD17bmF0aXZlVG9rZW5CYWxhbmNlLnN5bWJvbH1cbiAgICAgICAgICAgIHVuaXRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICB2YWx1ZT17bmF0aXZlVG9rZW5CYWxhbmNlLnZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgIWlzTG9hZGluZyAmJiAhZXJyb3IgJiYgISF0b2tlblNsdWcgJiYgKHRva2VuU2x1ZyAhPT0gbmF0aXZlVG9rZW5TbHVnKSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J19fbmFtZSd9PiZuYnNwO3t0KCdhbmQnKX0mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICA8TnVtYmVyXG4gICAgICAgICAgICAgIGRlY2ltYWw9e3Rva2VuQmFsYW5jZT8uZGVjaW1hbHMgfHwgMTh9XG4gICAgICAgICAgICAgIGRlY2ltYWxDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICAgIGludENvbG9yPXt0b2tlbi5jb2xvclRleHRUZXJ0aWFyeX1cbiAgICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICAgIHN1ZmZpeD17dG9rZW5CYWxhbmNlPy5zeW1ib2x9XG4gICAgICAgICAgICAgIHVuaXRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0b2tlbkJhbGFuY2UudmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9UeXBvZ3JhcGh5LlBhcmFncmFwaD5cbiAgKTtcbn07XG5cbmNvbnN0IEZyZWVCYWxhbmNlID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0VGVydGlhcnksXG5cbiAgICAnLl9fbGFiZWwnOiB7XG4gICAgICBtYXJnaW5SaWdodDogM1xuICAgIH0sXG5cbiAgICAnLmVycm9yLW1lc3NhZ2UnOiB7XG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JFcnJvclxuICAgIH0sXG5cbiAgICAnJi5hbnQtdHlwb2dyYXBoeSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGcmVlQmFsYW5jZTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGhlbWVQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0cmFuc2FjdGlvbi1jb250ZW50ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVHJhbnNhY3Rpb25Db250ZW50ID0gc3R5bGVkKENvbXBvbmVudCkoKHsgdGhlbWUgfSkgPT4ge1xuICByZXR1cm4gKHtcblxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkNvbnRlbnQ7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGVycm9yczogc3RyaW5nW11cbiAgd2FybmluZ3M6IHN0cmluZ1tdXG59XG5cbmNvbnN0IENvbXBvbmVudCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgPSAnJywgZXJyb3JzLCB3YXJuaW5ncyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdHJhbnNhY3Rpb24tZm9vdGVyICR7Y2xhc3NOYW1lfWB9PlxuICAgICAge2Vycm9ycy5sZW5ndGggPiAwICYmIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1tZXNzYWdlcyc+XG4gICAgICAgIHtlcnJvcnMubWFwKChlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+e2V9PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+fVxuICAgICAge3dhcm5pbmdzLmxlbmd0aCA+IDAgJiYgPGRpdiBjbGFzc05hbWU9J3dhcm5pbmctbWVzc2FnZXMnPlxuICAgICAgICB7d2FybmluZ3MubWFwKCh3LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+e3d9PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+fVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVHJhbnNhY3Rpb25Gb290ZXIgPSBzdHlsZWQoQ29tcG9uZW50KSgoeyB0aGVtZSB9KSA9PiB7XG4gIHJldHVybiAoe1xuXG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uRm9vdGVyO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9uZGVkQmFsYW5jZSB9IGZyb20gJy4vQm9uZGVkQmFsYW5jZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZyZWVCYWxhbmNlIH0gZnJvbSAnLi9GcmVlQmFsYW5jZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zYWN0aW9uQ29udGVudCB9IGZyb20gJy4vVHJhbnNhY3Rpb25Db250ZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNhY3Rpb25Gb290ZXIgfSBmcm9tICcuL1RyYW5zYWN0aW9uRm9vdGVyJztcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFeHRyaW5zaWNUeXBlLCBTdGFraW5nUmV3YXJkSXRlbSwgU3Rha2luZ1R5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IEFjY291bnRKc29uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL3R5cGVzJztcbmltcG9ydCB7IF9TVEFLSU5HX0NIQUlOX0dST1VQIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBfZ2V0U3Vic3RyYXRlR2VuZXNpc0hhc2gsIF9pc0NoYWluRXZtQ29tcGF0aWJsZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBpc1NhbWVBZGRyZXNzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBBY2NvdW50U2VsZWN0b3IsIEhpZGRlbklucHV0LCBNZXRhSW5mbywgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IHVzZUdldE5hdGl2ZVRva2VuQmFzaWNJbmZvLCB1c2VHZXROb21pbmF0b3JJbmZvLCB1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiwgdXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24sIHVzZVByZUNoZWNrQWN0aW9uLCB1c2VSZXN0b3JlVHJhbnNhY3Rpb24sIHVzZVNlbGVjdG9yLCB1c2VTZXRDdXJyZW50UGFnZSwgdXNlVHJhbnNhY3Rpb25Db250ZXh0LCB1c2VXYXRjaFRyYW5zYWN0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBzdWJtaXRTdGFrZUNsYWltUmV3YXJkIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgQ2xhaW1SZXdhcmRQYXJhbXMsIEZvcm1DYWxsYmFja3MsIEZvcm1GaWVsZERhdGEsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IGNvbnZlcnRGaWVsZFRvT2JqZWN0LCBpc0FjY291bnRBbGwsIHNpbXBsZUNoZWNrRm9ybSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSWNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQXJyb3dDaXJjbGVSaWdodCwgWENpcmNsZSB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCTiwgQk5fWkVSTyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbmltcG9ydCB7IGlzRXRoZXJldW1BZGRyZXNzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxuaW1wb3J0IHsgRnJlZUJhbGFuY2UsIFRyYW5zYWN0aW9uQ29udGVudCwgVHJhbnNhY3Rpb25Gb290ZXIgfSBmcm9tICcuLi9wYXJ0cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBoaWRlRmllbGRzOiBBcnJheTxrZXlvZiBDbGFpbVJld2FyZFBhcmFtcz4gPSBbJ2NoYWluJywgJ3R5cGUnLCAnYXNzZXQnXTtcbmNvbnN0IHZhbGlkYXRlRmllbGRzOiBBcnJheTxrZXlvZiBDbGFpbVJld2FyZFBhcmFtcz4gPSBbJ2Zyb20nXTtcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHVzZVNldEN1cnJlbnRQYWdlKCcvdHJhbnNhY3Rpb24vY2xhaW0tcmV3YXJkJyk7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgY29uc3QgZGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcbiAgY29uc3QgeyBkZWZhdWx0RGF0YSwgb25Eb25lLCBwZXJzaXN0RGF0YSB9ID0gdXNlVHJhbnNhY3Rpb25Db250ZXh0PENsYWltUmV3YXJkUGFyYW1zPigpO1xuICBjb25zdCB7IGNoYWluLCB0eXBlIH0gPSBkZWZhdWx0RGF0YTtcblxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm08Q2xhaW1SZXdhcmRQYXJhbXM+KCk7XG4gIGNvbnN0IGZvcm1EZWZhdWx0ID0gdXNlTWVtbygoKTogQ2xhaW1SZXdhcmRQYXJhbXMgPT4gKHsgLi4uZGVmYXVsdERhdGEgfSksIFtkZWZhdWx0RGF0YV0pO1xuXG4gIGNvbnN0IHsgaXNBbGxBY2NvdW50IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZSk7XG4gIGNvbnN0IHsgc3Rha2luZ1Jld2FyZE1hcCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdGFraW5nKTtcbiAgY29uc3QgeyBjaGFpbkluZm9NYXAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2hhaW5TdG9yZSk7XG5cbiAgY29uc3QgYWxsTm9taW5hdG9ySW5mbyA9IHVzZUdldE5vbWluYXRvckluZm8oY2hhaW4sIHR5cGUpO1xuICBjb25zdCB7IGRlY2ltYWxzLCBzeW1ib2wgfSA9IHVzZUdldE5hdGl2ZVRva2VuQmFzaWNJbmZvKGNoYWluKTtcblxuICBjb25zdCBmcm9tID0gdXNlV2F0Y2hUcmFuc2FjdGlvbignZnJvbScsIGZvcm0sIGRlZmF1bHREYXRhKTtcblxuICBjb25zdCByZXdhcmQgPSB1c2VNZW1vKCgpOiBTdGFraW5nUmV3YXJkSXRlbSB8IHVuZGVmaW5lZCA9PiB7XG4gICAgcmV0dXJuIHN0YWtpbmdSZXdhcmRNYXAuZmluZCgoaXRlbSkgPT4gaXRlbS5jaGFpbiA9PT0gY2hhaW4gJiYgaXRlbS5hZGRyZXNzID09PSBmcm9tICYmIGl0ZW0udHlwZSA9PT0gdHlwZSk7XG4gIH0sIFtjaGFpbiwgZnJvbSwgc3Rha2luZ1Jld2FyZE1hcCwgdHlwZV0pO1xuXG4gIGNvbnN0IHJld2FyZExpc3QgPSB1c2VNZW1vKCgpOiBTdGFraW5nUmV3YXJkSXRlbVtdID0+IHtcbiAgICByZXR1cm4gc3Rha2luZ1Jld2FyZE1hcC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2hhaW4gPT09IGNoYWluICYmIGl0ZW0udHlwZSA9PT0gdHlwZSk7XG4gIH0sIFtjaGFpbiwgc3Rha2luZ1Jld2FyZE1hcCwgdHlwZV0pO1xuXG4gIGNvbnN0IFtpc0Rpc2FibGUsIHNldElzRGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNCYWxhbmNlUmVhZHksIHNldElzQmFsYW5jZVJlYWR5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IHsgb25FcnJvciwgb25TdWNjZXNzIH0gPSB1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbihvbkRvbmUpO1xuXG4gIGNvbnN0IGdvSG9tZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgnL2hvbWUvc3Rha2luZycpO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCBvbkZpZWxkc0NoYW5nZTogRm9ybUNhbGxiYWNrczxDbGFpbVJld2FyZFBhcmFtcz5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSkgPT4ge1xuICAgIC8vIFRPRE86IGZpZWxkIGNoYW5nZVxuICAgIGNvbnN0IHsgZW1wdHksIGVycm9yIH0gPSBzaW1wbGVDaGVja0Zvcm0oYWxsRmllbGRzLCBbJ2Fzc2V0J10pO1xuXG4gICAgY29uc3QgYWxsTWFwID0gY29udmVydEZpZWxkVG9PYmplY3Q8Q2xhaW1SZXdhcmRQYXJhbXM+KGFsbEZpZWxkcyk7XG5cbiAgICBzZXRJc0Rpc2FibGUoZXJyb3IgfHwgZW1wdHkpO1xuICAgIHBlcnNpc3REYXRhKGFsbE1hcCk7XG4gIH0sIFtwZXJzaXN0RGF0YV0pO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBvblN1Ym1pdDogRm9ybUNhbGxiYWNrczxDbGFpbVJld2FyZFBhcmFtcz5bJ29uRmluaXNoJ10gPSB1c2VDYWxsYmFjaygodmFsdWVzOiBDbGFpbVJld2FyZFBhcmFtcykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCB7IGJvbmRSZXdhcmQgfSA9IHZhbHVlcztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc3VibWl0U3Rha2VDbGFpbVJld2FyZCh7XG4gICAgICAgIGFkZHJlc3M6IGZyb20sXG4gICAgICAgIGNoYWluOiBjaGFpbixcbiAgICAgICAgYm9uZFJld2FyZDogYm9uZFJld2FyZCxcbiAgICAgICAgc3Rha2luZ1R5cGU6IHR5cGUsXG4gICAgICAgIHVuY2xhaW1lZFJld2FyZDogcmV3YXJkPy51bmNsYWltZWRSZXdhcmRcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMzAwKTtcbiAgfSwgW2NoYWluLCBmcm9tLCBvbkVycm9yLCBvblN1Y2Nlc3MsIHJld2FyZD8udW5jbGFpbWVkUmV3YXJkLCB0eXBlXSk7XG5cbiAgY29uc3QgY2hlY2tBY3Rpb24gPSB1c2VQcmVDaGVja0FjdGlvbihmcm9tKTtcblxuICBjb25zdCBmaWx0ZXJBY2NvdW50ID0gdXNlQ2FsbGJhY2soKGFjY291bnQ6IEFjY291bnRKc29uKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgY2hhaW5JbmZvID0gY2hhaW5JbmZvTWFwW2NoYWluXTtcblxuICAgIGlmICghY2hhaW5JbmZvKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGFjY291bnQub3JpZ2luR2VuZXNpc0hhc2ggJiYgX2dldFN1YnN0cmF0ZUdlbmVzaXNIYXNoKGNoYWluSW5mbykgIT09IGFjY291bnQub3JpZ2luR2VuZXNpc0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBY2NvdW50QWxsKGFjY291bnQuYWRkcmVzcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYWNjb3VudC5pc1JlYWRPbmx5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaXNFdm1DaGFpbiA9IF9pc0NoYWluRXZtQ29tcGF0aWJsZShjaGFpbkluZm8pO1xuXG4gICAgaWYgKGlzRXZtQ2hhaW4gIT09IGlzRXRoZXJldW1BZGRyZXNzKGFjY291bnQuYWRkcmVzcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBub21pbmF0b3JNZXRhZGF0YSA9IGFsbE5vbWluYXRvckluZm8uZmluZCgodmFsdWUpID0+IGlzU2FtZUFkZHJlc3ModmFsdWUuYWRkcmVzcywgYWNjb3VudC5hZGRyZXNzKSk7XG5cbiAgICBpZiAoIW5vbWluYXRvck1ldGFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcmV3YXJkID0gcmV3YXJkTGlzdC5maW5kKCh2YWx1ZSkgPT4gaXNTYW1lQWRkcmVzcyh2YWx1ZS5hZGRyZXNzLCBhY2NvdW50LmFkZHJlc3MpKTtcblxuICAgIGNvbnN0IGlzQXN0YXJOZXR3b3JrID0gX1NUQUtJTkdfQ0hBSU5fR1JPVVAuYXN0YXIuaW5jbHVkZXMoY2hhaW4pO1xuICAgIGNvbnN0IGlzQW1wbGl0dWRlTmV0d29yayA9IF9TVEFLSU5HX0NIQUlOX0dST1VQLmFtcGxpdHVkZS5pbmNsdWRlcyhjaGFpbik7XG4gICAgY29uc3QgYm5VbmNsYWltZWRSZXdhcmQgPSBuZXcgQk4ocmV3YXJkPy51bmNsYWltZWRSZXdhcmQgfHwgJzAnKTtcblxuICAgIHJldHVybiAoKHR5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCB8fCBpc0FtcGxpdHVkZU5ldHdvcmspICYmIGJuVW5jbGFpbWVkUmV3YXJkLmd0KEJOX1pFUk8pKSB8fCAoaXNBc3Rhck5ldHdvcmsgJiYgISFub21pbmF0b3JNZXRhZGF0YS5ub21pbmF0aW9ucy5sZW5ndGgpO1xuICB9LCBbYWxsTm9taW5hdG9ySW5mbywgY2hhaW5JbmZvTWFwLCByZXdhcmRMaXN0LCBjaGFpbiwgdHlwZV0pO1xuXG4gIHVzZVJlc3RvcmVUcmFuc2FjdGlvbihmb3JtKTtcbiAgdXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24odmFsaWRhdGVGaWVsZHMsIGZvcm0sIGRlZmF1bHREYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VHJhbnNhY3Rpb25Db250ZW50PlxuICAgICAgICA8UGFnZVdyYXBwZXIgcmVzb2x2ZT17ZGF0YUNvbnRleHQuYXdhaXRTdG9yZXMoWydzdGFraW5nJ10pfT5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUsICdmb3JtLWNvbnRhaW5lciBmb3JtLXNwYWNlLXNtJyl9XG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Zm9ybURlZmF1bHR9XG4gICAgICAgICAgICBvbkZpZWxkc0NoYW5nZT17b25GaWVsZHNDaGFuZ2V9XG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhpZGRlbklucHV0IGZpZWxkcz17aGlkZUZpZWxkc30gLz5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgaGlkZGVuPXshaXNBbGxBY2NvdW50fVxuICAgICAgICAgICAgICBuYW1lPXsnZnJvbSd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3IgZmlsdGVyPXtmaWx0ZXJBY2NvdW50fSAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8RnJlZUJhbGFuY2VcbiAgICAgICAgICAgICAgYWRkcmVzcz17ZnJvbX1cbiAgICAgICAgICAgICAgY2hhaW49e2NoYWlufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydmcmVlLWJhbGFuY2UnfVxuICAgICAgICAgICAgICBsYWJlbD17dCgnQXZhaWxhYmxlIGJhbGFuY2U6Jyl9XG4gICAgICAgICAgICAgIG9uQmFsYW5jZVJlYWR5PXtzZXRJc0JhbGFuY2VSZWFkeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8TWV0YUluZm9cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NsYWltLXJld2FyZC1tZXRhLWluZm8nXG4gICAgICAgICAgICAgICAgaGFzQmFja2dyb3VuZFdyYXBwZXI9e3RydWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWV0YUluZm8uQ2hhaW5cbiAgICAgICAgICAgICAgICAgIGNoYWluPXtjaGFpbn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdOZXR3b3JrJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXdhcmQ/LnVuY2xhaW1lZFJld2FyZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZXRhSW5mby5OdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFscz17ZGVjaW1hbHN9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ1Jld2FyZCBjbGFpbWluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeD17c3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXdhcmQudW5jbGFpbWVkUmV3YXJkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9NZXRhSW5mbz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBoaWRkZW49e3R5cGUgIT09IFN0YWtpbmdUeXBlLlBPT0xFRH1cbiAgICAgICAgICAgICAgbmFtZT17J2JvbmRSZXdhcmQnfVxuICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPSdjaGVja2VkJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnX19vcHRpb24tbGFiZWwnfT57dCgnQm9uZCByZXdhcmQgYWZ0ZXIgY2xhaW0nKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XG4gICAgICA8L1RyYW5zYWN0aW9uQ29udGVudD5cbiAgICAgIDxUcmFuc2FjdGlvbkZvb3RlclxuICAgICAgICBlcnJvcnM9e1tdfVxuICAgICAgICB3YXJuaW5ncz17W119XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBwaG9zcGhvckljb249e1hDaXJjbGV9XG4gICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBvbkNsaWNrPXtnb0hvbWV9XG4gICAgICAgICAgc2NoZW1hPXsnc2Vjb25kYXJ5J31cbiAgICAgICAgPlxuICAgICAgICAgIHt0KCdDYW5jZWwnKX1cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGUgfHwgIWlzQmFsYW5jZVJlYWR5fVxuICAgICAgICAgIGljb249eyhcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17QXJyb3dDaXJjbGVSaWdodH1cbiAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgb25DbGljaz17Y2hlY2tBY3Rpb24oZm9ybS5zdWJtaXQsIEV4dHJpbnNpY1R5cGUuU1RBS0lOR19DTEFJTV9SRVdBUkQpfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ0NvbnRpbnVlJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9UcmFuc2FjdGlvbkZvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IENsYWltUmV3YXJkID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLnVuc3Rha2VkLWZpZWxkLCAuZnJlZS1iYWxhbmNlJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5YU1xuICAgIH0sXG5cbiAgICAnLm1ldGEtaW5mbyc6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ucGFkZGluZ1NNXG4gICAgfSxcblxuICAgICcuY2FuY2VsLXVuc3Rha2UtaW5mby1pdGVtID4gLl9fY29sJzoge1xuICAgICAgZmxleDogJ2luaXRpYWwnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0b2tlbi5wYWRkaW5nWFhTXG4gICAgfSxcblxuICAgICcuY2xhaW0tcmV3YXJkLW1ldGEtaW5mbyc6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luWFhTXG4gICAgfSxcblxuICAgICcuYW50LWNoZWNrYm94LXdyYXBwZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblxuICAgICAgJy5hbnQtY2hlY2tib3gnOiB7XG4gICAgICAgIHRvcDogMFxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDbGFpbVJld2FyZDtcbiIsImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyUGF0aEZvcldlaWdodCB9IGZyb20gJy4uL2xpYi9pbmRleC5lc20uanMnO1xuaW1wb3J0IEljb25CYXNlIGZyb20gJy4uL2xpYi9JY29uQmFzZS5lc20uanMnO1xuXG4vKiBHRU5FUkFURUQgRklMRSAqL1xudmFyIHBhdGhzQnlXZWlnaHQgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xucGF0aHNCeVdlaWdodC5zZXQoXCJib2xkXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImR1b3RvbmVcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgb3BhY2l0eTogXCIwLjJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEzNC4xIDE2MS45IDE2OCAxMjggMTM0LjEgOTQuMVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJmaWxsXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4yLDEwNC4yLDAsMCwwLDEyOCwyNFptNDcuNCwxMDcuMWE4LjcsOC43LDAsMCwxLTEuOCwyLjZsLTMzLjksMzMuOWE3LjYsNy42LDAsMCwxLTUuNiwyLjMsNy44LDcuOCwwLDAsMS01LjctMi4zLDgsOCwwLDAsMSwwLTExLjNMMTQ4LjcsMTM2SDg4YTgsOCwwLDAsMSwwLTE2aDYwLjdMMTI4LjQsOTkuN2E4LDgsMCwwLDEsMTEuMy0xMS4zbDMzLjksMzMuOWE4LjcsOC43LDAsMCwxLDEuOCwyLjZBOC4zLDguMywwLDAsMSwxNzUuNCwxMzEuMVpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJyZWd1bGFyXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEzNC4xIDE2MS45IDE2OCAxMjggMTM0LjEgOTQuMVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBBcnJvd0NpcmNsZVJpZ2h0ID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgcmVuZGVyUGF0aDogcmVuZGVyUGF0aFxuICB9KSk7XG59KTtcbkFycm93Q2lyY2xlUmlnaHQuZGlzcGxheU5hbWUgPSBcIkFycm93Q2lyY2xlUmlnaHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dDaXJjbGVSaWdodDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycm93Q2lyY2xlUmlnaHQuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0aW9uIiwiTnVtYmVyIiwiVHlwb2dyYXBoeSIsIkNOIiwiUmVhY3QiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsIkNvbXBvbmVudCIsImJvbmRlZEJhbGFuY2UiLCJjbGFzc05hbWUiLCJkZWNpbWFscyIsImxhYmVsIiwic3ltYm9sIiwidCIsInRva2VuIiwiY29sb3JUZXh0VGVydGlhcnkiLCJCb25kZWRCYWxhbmNlIiwidGhlbWUiLCJkaXNwbGF5IiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsInVzZUdldEJhbGFuY2UiLCJBY3Rpdml0eUluZGljYXRvciIsInVzZUVmZmVjdCIsImFkZHJlc3MiLCJjaGFpbiIsIm9uQmFsYW5jZVJlYWR5IiwidG9rZW5TbHVnIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJuYXRpdmVUb2tlbkJhbGFuY2UiLCJuYXRpdmVUb2tlblNsdWciLCJ0b2tlbkJhbGFuY2UiLCJ2YWx1ZSIsIkZyZWVCYWxhbmNlIiwiZmxleFdyYXAiLCJjb2xvckVycm9yIiwiY2hpbGRyZW4iLCJUcmFuc2FjdGlvbkNvbnRlbnQiLCJlcnJvcnMiLCJ3YXJuaW5ncyIsImxlbmd0aCIsIm1hcCIsImUiLCJpbmRleCIsInciLCJUcmFuc2FjdGlvbkZvb3RlciIsImRlZmF1bHQiLCJFeHRyaW5zaWNUeXBlIiwiU3Rha2luZ1R5cGUiLCJfU1RBS0lOR19DSEFJTl9HUk9VUCIsIl9nZXRTdWJzdHJhdGVHZW5lc2lzSGFzaCIsIl9pc0NoYWluRXZtQ29tcGF0aWJsZSIsImlzU2FtZUFkZHJlc3MiLCJBY2NvdW50U2VsZWN0b3IiLCJIaWRkZW5JbnB1dCIsIk1ldGFJbmZvIiwiUGFnZVdyYXBwZXIiLCJEYXRhQ29udGV4dCIsInVzZUdldE5hdGl2ZVRva2VuQmFzaWNJbmZvIiwidXNlR2V0Tm9taW5hdG9ySW5mbyIsInVzZUhhbmRsZVN1Ym1pdFRyYW5zYWN0aW9uIiwidXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24iLCJ1c2VQcmVDaGVja0FjdGlvbiIsInVzZVJlc3RvcmVUcmFuc2FjdGlvbiIsInVzZVNlbGVjdG9yIiwidXNlU2V0Q3VycmVudFBhZ2UiLCJ1c2VUcmFuc2FjdGlvbkNvbnRleHQiLCJ1c2VXYXRjaFRyYW5zYWN0aW9uIiwic3VibWl0U3Rha2VDbGFpbVJld2FyZCIsImNvbnZlcnRGaWVsZFRvT2JqZWN0IiwiaXNBY2NvdW50QWxsIiwic2ltcGxlQ2hlY2tGb3JtIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJGb3JtIiwiSWNvbiIsIkFycm93Q2lyY2xlUmlnaHQiLCJYQ2lyY2xlIiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlTmF2aWdhdGUiLCJCTiIsIkJOX1pFUk8iLCJpc0V0aGVyZXVtQWRkcmVzcyIsImhpZGVGaWVsZHMiLCJ2YWxpZGF0ZUZpZWxkcyIsInByb3BzIiwibmF2aWdhdGUiLCJkYXRhQ29udGV4dCIsImRlZmF1bHREYXRhIiwib25Eb25lIiwicGVyc2lzdERhdGEiLCJ0eXBlIiwiZm9ybSIsInVzZUZvcm0iLCJmb3JtRGVmYXVsdCIsImlzQWxsQWNjb3VudCIsInN0YXRlIiwiYWNjb3VudFN0YXRlIiwic3Rha2luZ1Jld2FyZE1hcCIsInN0YWtpbmciLCJjaGFpbkluZm9NYXAiLCJjaGFpblN0b3JlIiwiYWxsTm9taW5hdG9ySW5mbyIsImZyb20iLCJyZXdhcmQiLCJmaW5kIiwiaXRlbSIsInJld2FyZExpc3QiLCJmaWx0ZXIiLCJpc0Rpc2FibGUiLCJzZXRJc0Rpc2FibGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzQmFsYW5jZVJlYWR5Iiwic2V0SXNCYWxhbmNlUmVhZHkiLCJvbkVycm9yIiwib25TdWNjZXNzIiwiZ29Ib21lIiwib25GaWVsZHNDaGFuZ2UiLCJjaGFuZ2VkRmllbGRzIiwiYWxsRmllbGRzIiwiZW1wdHkiLCJhbGxNYXAiLCJvblN1Ym1pdCIsInZhbHVlcyIsImJvbmRSZXdhcmQiLCJzZXRUaW1lb3V0Iiwic3Rha2luZ1R5cGUiLCJ1bmNsYWltZWRSZXdhcmQiLCJ0aGVuIiwiY2F0Y2giLCJmaW5hbGx5IiwiY2hlY2tBY3Rpb24iLCJmaWx0ZXJBY2NvdW50IiwiYWNjb3VudCIsImNoYWluSW5mbyIsIm9yaWdpbkdlbmVzaXNIYXNoIiwiaXNSZWFkT25seSIsImlzRXZtQ2hhaW4iLCJub21pbmF0b3JNZXRhZGF0YSIsImlzQXN0YXJOZXR3b3JrIiwiYXN0YXIiLCJpbmNsdWRlcyIsImlzQW1wbGl0dWRlTmV0d29yayIsImFtcGxpdHVkZSIsImJuVW5jbGFpbWVkUmV3YXJkIiwiUE9PTEVEIiwiZ3QiLCJub21pbmF0aW9ucyIsImF3YWl0U3RvcmVzIiwic3VibWl0IiwiU1RBS0lOR19DTEFJTV9SRVdBUkQiLCJDbGFpbVJld2FyZCIsIm1hcmdpblhTIiwibWFyZ2luVG9wIiwicGFkZGluZ1NNIiwiZmxleCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdYWFMiLCJtYXJnaW5YWFMiLCJhbGlnbkl0ZW1zIiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==