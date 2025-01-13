"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Transaction_helper_index_ts-extension-koni-ui_src_Popup_T-2d1a52"],{

/***/ "../extension-koni-ui/src/Popup/Transaction/helper/index.ts":
/*!******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/helper/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountFilterFunc": () => (/* reexport safe */ _staking__WEBPACK_IMPORTED_MODULE_1__.accountFilterFunc),
/* harmony export */   "fetchChainValidators": () => (/* reexport safe */ _staking__WEBPACK_IMPORTED_MODULE_1__.fetchChainValidators),
/* harmony export */   "getUnstakingPeriod": () => (/* reexport safe */ _staking__WEBPACK_IMPORTED_MODULE_1__.getUnstakingPeriod),
/* harmony export */   "getWaitingTime": () => (/* reexport safe */ _staking__WEBPACK_IMPORTED_MODULE_1__.getWaitingTime),
/* harmony export */   "nftParamsHandler": () => (/* reexport safe */ _nftParamsHandler__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _nftParamsHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nftParamsHandler */ "../extension-koni-ui/src/Popup/Transaction/helper/nftParamsHandler.ts");
/* harmony import */ var _staking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staking */ "../extension-koni-ui/src/Popup/Transaction/helper/staking/index.ts");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




/***/ }),

/***/ "../extension-koni-ui/src/Popup/Transaction/helper/nftParamsHandler.ts":
/*!*****************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/helper/nftParamsHandler.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nftParamsHandler)
/* harmony export */ });
/* harmony import */ var _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/chain-list/types */ "../../node_modules/@subwallet/chain-list/types.js");
/* harmony import */ var _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/constants */ "../extension-base/src/services/chain-service/constants.ts");
// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0



const RMRK_PREFIX = 'RMRK';
const RMRK_OP_TYPE = 'SEND';
function acalaParser(nftItem) {
  const collectionId = parseInt(nftItem.collectionId);
  const itemId = parseInt(nftItem.id);
  return {
    collectionId,
    itemId,
    networkKey: nftItem.chain
  };
}
function rmrkParser(nftItem) {
  if (!nftItem.rmrk_ver) {
    return {};
  }

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const remark = `${RMRK_PREFIX}::${RMRK_OP_TYPE}::${nftItem.rmrk_ver}::${nftItem.id}::`;
  return {
    remark,
    networkKey: nftItem.chain
  };
}
function uniqueParser(nftItem) {
  const collectionId = parseInt(nftItem.collectionId);
  const itemId = parseInt(nftItem.id);
  return {
    collectionId,
    itemId,
    networkKey: nftItem.chain
  };
}
function statemineParser(nftItem) {
  const collectionId = parseInt(nftItem.collectionId);
  const itemId = parseInt(nftItem.id);
  return {
    collectionId,
    itemId,
    networkKey: nftItem.chain
  };
}
function web3Parser(nftItem) {
  const contractAddress = nftItem.collectionId;
  const tokenId = parseInt(nftItem.id);
  return {
    contractAddress,
    tokenId
  };
}
function psp34Parser(nftItem) {
  const contractAddress = nftItem.collectionId;
  const onChainOption = nftItem.onChainOption;
  return {
    contractAddress,
    onChainOption,
    isPsp34: true,
    networkKey: nftItem.chain
  };
}
function varaParser(nftItem) {
  const contractAddress = nftItem.collectionId;
  const tokenId = nftItem.id;
  return {
    contractAddress,
    tokenId,
    networkKey: nftItem.chain
  };
}
function nftParamsHandler(nftItem, chain) {
  if (nftItem.type === _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_0__._AssetType.ERC721) {
    return web3Parser(nftItem);
  } else if (nftItem.type === _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_0__._AssetType.PSP34) {
    return psp34Parser(nftItem);
  } else {
    if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._NFT_CHAIN_GROUP.acala.includes(chain) || _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._NFT_CHAIN_GROUP.karura.includes(chain) || _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._NFT_CHAIN_GROUP.bitcountry.includes(chain)) {
      return acalaParser(nftItem);
    } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._NFT_CHAIN_GROUP.rmrk.includes(chain)) {
      return rmrkParser(nftItem);
    } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._NFT_CHAIN_GROUP.statemine.includes(chain) || _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._NFT_CHAIN_GROUP.statemint.includes(chain)) {
      return statemineParser(nftItem);
    } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._NFT_CHAIN_GROUP.unique_network.includes(chain)) {
      return uniqueParser(nftItem);
    } else if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_1__._NFT_CHAIN_GROUP.vara.includes(chain)) {
      return varaParser(nftItem);
    }
  }
  return {};
}

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Transaction/helper/staking/base.ts":
/*!*************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/helper/staking/base.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountFilterFunc": () => (/* binding */ accountFilterFunc)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/common */ "../extension-koni-ui/src/constants/common.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0






const defaultAccountFilter = (stakingType, chain) => {
  return account => {
    const isEvmAddress = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__.isEthereumAddress)(account.address);
    const availableGen = account.availableGenesisHashes || [];
    if (account.isHardware) {
      if (isEvmAddress) {
        return false;
      } else {
        if (chain && !availableGen.includes((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_3__._getSubstrateGenesisHash)(chain))) {
          return false;
        }
      }
    }
    if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__.isAccountAll)(account.address)) {
      return false;
    }
    if (account.isReadOnly) {
      return false;
    }
    return !(stakingType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_4__.StakingType.POOLED && (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__.isEthereumAddress)(account.address));
  };
};
const accountFilterFunc = (chainInfoMap, stakingType, stakingChain) => {
  return account => {
    if (stakingChain && stakingChain !== _subwallet_extension_koni_ui_constants_common__WEBPACK_IMPORTED_MODULE_0__.ALL_KEY) {
      const chain = chainInfoMap[stakingChain];
      const defaultFilter = defaultAccountFilter(stakingType, chain);
      const isEvmChain = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_3__._isChainEvmCompatible)(chain);
      const isEvmAddress = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__.isEthereumAddress)(account.address);
      return defaultFilter(account) && isEvmChain === isEvmAddress;
    } else {
      return defaultAccountFilter(stakingType)(account);
    }
  };
};

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Transaction/helper/staking/index.ts":
/*!**************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/helper/staking/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountFilterFunc": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.accountFilterFunc),
/* harmony export */   "fetchChainValidators": () => (/* reexport safe */ _stakingHandler__WEBPACK_IMPORTED_MODULE_1__.fetchChainValidators),
/* harmony export */   "getUnstakingPeriod": () => (/* reexport safe */ _stakingHandler__WEBPACK_IMPORTED_MODULE_1__.getUnstakingPeriod),
/* harmony export */   "getWaitingTime": () => (/* reexport safe */ _stakingHandler__WEBPACK_IMPORTED_MODULE_1__.getWaitingTime)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../extension-koni-ui/src/Popup/Transaction/helper/staking/base.ts");
/* harmony import */ var _stakingHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stakingHandler */ "../extension-koni-ui/src/Popup/Transaction/helper/staking/stakingHandler.ts");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




/***/ }),

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






/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfVHJhbnNhY3Rpb25faGVscGVyX2luZGV4X3RzLWV4dGVuc2lvbi1rb25pLXVpX3NyY19Qb3B1cF9ULTJkMWE1Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFaUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGpFO0FBQ0E7O0FBRXlEO0FBRXFDO0FBRTlGLE1BQU1JLFdBQVcsR0FBRyxNQUFNO0FBQzFCLE1BQU1DLFlBQVksR0FBRyxNQUFNO0FBRTNCLFNBQVNDLFdBQVcsQ0FBRUMsT0FBZ0IsRUFBRTtFQUN0QyxNQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDQyxZQUFZLENBQUM7RUFDbkQsTUFBTUUsTUFBTSxHQUFHRCxRQUFRLENBQUNGLE9BQU8sQ0FBQ0ksRUFBRSxDQUFDO0VBRW5DLE9BQU87SUFDTEgsWUFBWTtJQUNaRSxNQUFNO0lBQ05FLFVBQVUsRUFBRUwsT0FBTyxDQUFDTTtFQUN0QixDQUFDO0FBQ0g7QUFFQSxTQUFTQyxVQUFVLENBQUVQLE9BQWdCLEVBQUU7RUFDckMsSUFBSSxDQUFDQSxPQUFPLENBQUNRLFFBQVEsRUFBRTtJQUNyQixPQUFPLENBQUMsQ0FBQztFQUNYOztFQUVBO0VBQ0EsTUFBTUMsTUFBTSxHQUFJLEdBQUVaLFdBQVksS0FBSUMsWUFBYSxLQUFJRSxPQUFPLENBQUNRLFFBQVMsS0FBSVIsT0FBTyxDQUFDSSxFQUFHLElBQUc7RUFFdEYsT0FBTztJQUNMSyxNQUFNO0lBQ05KLFVBQVUsRUFBRUwsT0FBTyxDQUFDTTtFQUN0QixDQUFDO0FBQ0g7QUFFQSxTQUFTSSxZQUFZLENBQUVWLE9BQWdCLEVBQUU7RUFDdkMsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNGLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDO0VBQ25ELE1BQU1FLE1BQU0sR0FBR0QsUUFBUSxDQUFDRixPQUFPLENBQUNJLEVBQUUsQ0FBQztFQUVuQyxPQUFPO0lBQ0xILFlBQVk7SUFDWkUsTUFBTTtJQUNORSxVQUFVLEVBQUVMLE9BQU8sQ0FBQ007RUFDdEIsQ0FBQztBQUNIO0FBRUEsU0FBU0ssZUFBZSxDQUFFWCxPQUFnQixFQUFFO0VBQzFDLE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDRixPQUFPLENBQUNDLFlBQVksQ0FBQztFQUNuRCxNQUFNRSxNQUFNLEdBQUdELFFBQVEsQ0FBQ0YsT0FBTyxDQUFDSSxFQUFFLENBQUM7RUFFbkMsT0FBTztJQUNMSCxZQUFZO0lBQ1pFLE1BQU07SUFDTkUsVUFBVSxFQUFFTCxPQUFPLENBQUNNO0VBQ3RCLENBQUM7QUFDSDtBQUVBLFNBQVNNLFVBQVUsQ0FBRVosT0FBZ0IsRUFBRTtFQUNyQyxNQUFNYSxlQUFlLEdBQUdiLE9BQU8sQ0FBQ0MsWUFBWTtFQUM1QyxNQUFNYSxPQUFPLEdBQUdaLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDSSxFQUFFLENBQUM7RUFFcEMsT0FBTztJQUNMUyxlQUFlO0lBQ2ZDO0VBQ0YsQ0FBQztBQUNIO0FBRUEsU0FBU0MsV0FBVyxDQUFFZixPQUFnQixFQUFFO0VBQ3RDLE1BQU1hLGVBQWUsR0FBR2IsT0FBTyxDQUFDQyxZQUFZO0VBQzVDLE1BQU1lLGFBQWEsR0FBR2hCLE9BQU8sQ0FBQ2dCLGFBQXVDO0VBRXJFLE9BQU87SUFDTEgsZUFBZTtJQUNmRyxhQUFhO0lBQ2JDLE9BQU8sRUFBRSxJQUFJO0lBQ2JaLFVBQVUsRUFBRUwsT0FBTyxDQUFDTTtFQUN0QixDQUFDO0FBQ0g7QUFFQSxTQUFTWSxVQUFVLENBQUVsQixPQUFnQixFQUFFO0VBQ3JDLE1BQU1hLGVBQWUsR0FBR2IsT0FBTyxDQUFDQyxZQUFZO0VBQzVDLE1BQU1hLE9BQU8sR0FBR2QsT0FBTyxDQUFDSSxFQUFFO0VBRTFCLE9BQU87SUFDTFMsZUFBZTtJQUNmQyxPQUFPO0lBQ1BULFVBQVUsRUFBRUwsT0FBTyxDQUFDTTtFQUN0QixDQUFDO0FBQ0g7QUFFZSxTQUFTWixnQkFBZ0IsQ0FBRU0sT0FBZ0IsRUFBRU0sS0FBYSxFQUFFO0VBQ3pFLElBQUlOLE9BQU8sQ0FBQ21CLElBQUksS0FBS3hCLDBFQUFpQixFQUFFO0lBQ3RDLE9BQU9pQixVQUFVLENBQUNaLE9BQU8sQ0FBQztFQUM1QixDQUFDLE1BQU0sSUFBSUEsT0FBTyxDQUFDbUIsSUFBSSxLQUFLeEIseUVBQWdCLEVBQUU7SUFDNUMsT0FBT29CLFdBQVcsQ0FBQ2YsT0FBTyxDQUFDO0VBQzdCLENBQUMsTUFBTTtJQUNMLElBQUlKLHVIQUErQixDQUFDVSxLQUFLLENBQUMsSUFBSVYsd0hBQWdDLENBQUNVLEtBQUssQ0FBQyxJQUFJViw0SEFBb0MsQ0FBQ1UsS0FBSyxDQUFDLEVBQUU7TUFDcEksT0FBT1AsV0FBVyxDQUFDQyxPQUFPLENBQUM7SUFDN0IsQ0FBQyxNQUFNLElBQUlKLHNIQUE4QixDQUFDVSxLQUFLLENBQUMsRUFBRTtNQUNoRCxPQUFPQyxVQUFVLENBQUNQLE9BQU8sQ0FBQztJQUM1QixDQUFDLE1BQU0sSUFBSUosMkhBQW1DLENBQUNVLEtBQUssQ0FBQyxJQUFJViwySEFBbUMsQ0FBQ1UsS0FBSyxDQUFDLEVBQUU7TUFDbkcsT0FBT0ssZUFBZSxDQUFDWCxPQUFPLENBQUM7SUFDakMsQ0FBQyxNQUFNLElBQUlKLGdJQUF3QyxDQUFDVSxLQUFLLENBQUMsRUFBRTtNQUMxRCxPQUFPSSxZQUFZLENBQUNWLE9BQU8sQ0FBQztJQUM5QixDQUFDLE1BQU0sSUFBSUosc0hBQThCLENBQUNVLEtBQUssQ0FBQyxFQUFFO01BQ2hELE9BQU9ZLFVBQVUsQ0FBQ2xCLE9BQU8sQ0FBQztJQUM1QjtFQUNGO0VBRUEsT0FBTyxDQUFDLENBQUM7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBOztBQUc2RTtBQUU0QztBQUNqRDtBQUNOO0FBRVI7QUFFMUQsTUFBTXFDLG9CQUFvQixHQUFHLENBQUNDLFdBQXdCLEVBQUVoQyxLQUFrQixLQUEwQztFQUNsSCxPQUFRaUMsT0FBb0IsSUFBSztJQUMvQixNQUFNQyxZQUFZLEdBQUdKLHdFQUFpQixDQUFDRyxPQUFPLENBQUNFLE9BQU8sQ0FBQztJQUN2RCxNQUFNQyxZQUFzQixHQUFHSCxPQUFPLENBQUNJLHNCQUFzQixJQUFJLEVBQUU7SUFFbkUsSUFBSUosT0FBTyxDQUFDSyxVQUFVLEVBQUU7TUFDdEIsSUFBSUosWUFBWSxFQUFFO1FBQ2hCLE9BQU8sS0FBSztNQUNkLENBQUMsTUFBTTtRQUNMLElBQUlsQyxLQUFLLElBQUksQ0FBQ29DLFlBQVksQ0FBQ25CLFFBQVEsQ0FBQ1MsZ0hBQXdCLENBQUMxQixLQUFLLENBQUMsQ0FBQyxFQUFFO1VBQ3BFLE9BQU8sS0FBSztRQUNkO01BQ0Y7SUFDRjtJQUVBLElBQUk2QixnRkFBWSxDQUFDSSxPQUFPLENBQUNFLE9BQU8sQ0FBQyxFQUFFO01BQ2pDLE9BQU8sS0FBSztJQUNkO0lBRUEsSUFBSUYsT0FBTyxDQUFDTSxVQUFVLEVBQUU7TUFDdEIsT0FBTyxLQUFLO0lBQ2Q7SUFFQSxPQUFPLEVBQUVQLFdBQVcsS0FBS1AsOEZBQWtCLElBQUlLLHdFQUFpQixDQUFDRyxPQUFPLENBQUNFLE9BQU8sQ0FBQyxDQUFDO0VBQ3BGLENBQUM7QUFDSCxDQUFDO0FBRU0sTUFBTU0saUJBQWlCLEdBQUcsQ0FBQ0MsWUFBd0MsRUFBRVYsV0FBd0IsRUFBRVcsWUFBcUIsS0FBMEM7RUFDbkssT0FBUVYsT0FBb0IsSUFBSztJQUMvQixJQUFJVSxZQUFZLElBQUlBLFlBQVksS0FBS2Ysa0ZBQU8sRUFBRTtNQUM1QyxNQUFNNUIsS0FBSyxHQUFHMEMsWUFBWSxDQUFDQyxZQUFZLENBQUM7TUFDeEMsTUFBTUMsYUFBYSxHQUFHYixvQkFBb0IsQ0FBQ0MsV0FBVyxFQUFFaEMsS0FBSyxDQUFDO01BQzlELE1BQU02QyxVQUFVLEdBQUdsQiw2R0FBcUIsQ0FBQzNCLEtBQUssQ0FBQztNQUMvQyxNQUFNa0MsWUFBWSxHQUFHSix3RUFBaUIsQ0FBQ0csT0FBTyxDQUFDRSxPQUFPLENBQUM7TUFFdkQsT0FBT1MsYUFBYSxDQUFDWCxPQUFPLENBQUMsSUFBSVksVUFBVSxLQUFLWCxZQUFZO0lBQzlELENBQUMsTUFBTTtNQUNMLE9BQU9ILG9CQUFvQixDQUFDQyxXQUFXLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO0lBQ25EO0VBQ0YsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2QjtBQUNBOztBQUVzRjtBQUU3QjtBQUU3QjtBQUNGO0FBQzJCO0FBQUE7QUFBQTtBQVNyRCxNQUFNb0IsU0FBUyxHQUFHLENBQUM7RUFBRUMsYUFBYTtFQUFFQyxTQUFTO0VBQUVDLFFBQVE7RUFBRUMsS0FBSztFQUFFQztBQUFjLENBQUMsS0FBSztFQUNsRixNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHYixvR0FBYyxFQUFFO0VBQzlCLE1BQU07SUFBRWM7RUFBTSxDQUFDLEdBQUdSLDJEQUFRLEVBQVc7RUFFckMsb0JBQ0Usd0RBQUMscUVBQW9CO0lBQUMsU0FBUyxFQUFFSCxpREFBRSxDQUFDTSxTQUFTLEVBQUUsZ0JBQWdCLENBQUU7SUFBQSx3QkFDL0QsdURBQUMsMkRBQU07TUFDTCxPQUFPLEVBQUVDLFFBQVM7TUFDbEIsWUFBWSxFQUFFSSxLQUFLLENBQUNDLGlCQUFrQjtNQUN0QyxRQUFRLEVBQUVELEtBQUssQ0FBQ0MsaUJBQWtCO01BQ2xDLElBQUksRUFBRSxFQUFHO01BQ1QsTUFBTSxFQUFFSCxNQUFPO01BQ2YsU0FBUyxFQUFFRSxLQUFLLENBQUNDLGlCQUFrQjtNQUNuQyxLQUFLLEVBQUVQLGFBQWEsSUFBSTtJQUFFLEVBQzFCLEVBQ0RHLEtBQUssSUFBSUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztFQUFBLEVBQ0E7QUFFM0IsQ0FBQztBQUVELE1BQU1HLGFBQWEsR0FBR1gsNkRBQU0sQ0FBQ0UsU0FBUyxDQUFDO0VBQUE7RUFBQTtBQUFBLEdBQUMsQ0FBQztFQUFFVSxLQUFLLEVBQUU7SUFBRUg7RUFBTTtBQUFTLENBQUMsS0FBSztFQUN2RSxPQUFRO0lBQ05JLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLEtBQUssRUFBRUwsS0FBSyxDQUFDQyxpQkFBaUI7SUFFOUIsa0JBQWtCLEVBQUU7TUFDbEJLLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBRUQsYUFBYSxFQUFFO01BQ2JDLFdBQVcsRUFBRTtJQUNmO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlTCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckQ1QjtBQUNBOztBQUVtRTtBQUNtQjtBQUVWO0FBQ2hEO0FBQ2E7QUFDWTtBQUFBO0FBQUE7QUFBQTtBQVVyRCxNQUFNVCxTQUFTLEdBQUcsQ0FBQztFQUFFbEIsT0FBTztFQUFFbkMsS0FBSztFQUFFdUQsU0FBUztFQUFFRSxLQUFLO0VBQUVjLGNBQWM7RUFBRUM7QUFBaUIsQ0FBQyxLQUFLO0VBQzVGLE1BQU07SUFBRWI7RUFBRSxDQUFDLEdBQUdiLG9HQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFYztFQUFNLENBQUMsR0FBR1IsMkRBQVEsRUFBVztFQUNyQyxNQUFNO0lBQUVxQixLQUFLO0lBQUVDLFNBQVM7SUFBRUMsa0JBQWtCO0lBQUVDLGVBQWU7SUFBRUM7RUFBYSxDQUFDLEdBQUdULGlGQUFhLENBQUNwRSxLQUFLLEVBQUVtQyxPQUFPLEVBQUVxQyxTQUFTLENBQUM7RUFFeEhGLGdEQUFTLENBQUMsTUFBTTtJQUNkQyxjQUFjLGFBQWRBLGNBQWMsdUJBQWRBLGNBQWMsQ0FBRyxDQUFDRyxTQUFTLElBQUksQ0FBQ0QsS0FBSyxDQUFDO0VBQ3hDLENBQUMsRUFBRSxDQUFDQSxLQUFLLEVBQUVDLFNBQVMsRUFBRUgsY0FBYyxDQUFDLENBQUM7RUFFdEMsSUFBSSxDQUFDcEMsT0FBTyxJQUFJLENBQUNuQyxLQUFLLEVBQUU7SUFDdEIsb0JBQU8sbUhBQUs7RUFDZDtFQUVBLG9CQUNFLHdEQUFDLHFFQUFvQjtJQUFDLFNBQVMsRUFBRWlELGlEQUFFLENBQUNNLFNBQVMsRUFBRSxjQUFjLENBQUU7SUFBQSxXQUM1RCxDQUFDa0IsS0FBSyxpQkFBSTtNQUFNLFNBQVMsRUFBQyxTQUFTO01BQUEsVUFBRWhCLEtBQUssSUFBSUUsQ0FBQyxDQUFDLDJCQUEyQjtJQUFDLEVBQVEsRUFDcEZlLFNBQVMsaUJBQUksdURBQUMsMkRBQWlCO01BQUMsSUFBSSxFQUFFO0lBQUcsRUFBRyxFQUM1Q0QsS0FBSyxpQkFBSSx1REFBQyxnRUFBZTtNQUFDLFNBQVMsRUFBRSxlQUFnQjtNQUFBLFVBQUVBO0lBQUssRUFBbUIsRUFFOUUsQ0FBQ0MsU0FBUyxJQUFJLENBQUNELEtBQUssSUFBSSxDQUFDLENBQUNHLGVBQWUsaUJBQ3ZDLHVEQUFDLDJEQUFNO01BQ0wsT0FBTyxFQUFFRCxrQkFBa0IsQ0FBQ25CLFFBQVEsSUFBSSxFQUFHO01BQzNDLFlBQVksRUFBRUksS0FBSyxDQUFDQyxpQkFBa0I7TUFDdEMsUUFBUSxFQUFFRCxLQUFLLENBQUNDLGlCQUFrQjtNQUNsQyxJQUFJLEVBQUUsRUFBRztNQUNULE1BQU0sRUFBRWMsa0JBQWtCLENBQUNqQixNQUFPO01BQ2xDLFNBQVMsRUFBRUUsS0FBSyxDQUFDQyxpQkFBa0I7TUFDbkMsS0FBSyxFQUFFYyxrQkFBa0IsQ0FBQ0c7SUFBTSxFQUVuQyxFQUdELENBQUNKLFNBQVMsSUFBSSxDQUFDRCxLQUFLLElBQUksQ0FBQyxDQUFDRCxTQUFTLElBQUtBLFNBQVMsS0FBS0ksZUFBZ0IsaUJBQ3BFO01BQUEsd0JBQ0U7UUFBTSxTQUFTLEVBQUUsUUFBUztRQUFBLG1CQUFRakIsQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUFBLEVBQWMsZUFDeEQsdURBQUMsMkRBQU07UUFDTCxPQUFPLEVBQUUsQ0FBQWtCLFlBQVksYUFBWkEsWUFBWSx1QkFBWkEsWUFBWSxDQUFFckIsUUFBUSxLQUFJLEVBQUc7UUFDdEMsWUFBWSxFQUFFSSxLQUFLLENBQUNDLGlCQUFrQjtRQUN0QyxRQUFRLEVBQUVELEtBQUssQ0FBQ0MsaUJBQWtCO1FBQ2xDLElBQUksRUFBRSxFQUFHO1FBQ1QsTUFBTSxFQUFFZ0IsWUFBWSxhQUFaQSxZQUFZLHVCQUFaQSxZQUFZLENBQUVuQixNQUFPO1FBQzdCLFNBQVMsRUFBRUUsS0FBSyxDQUFDQyxpQkFBa0I7UUFDbkMsS0FBSyxFQUFFZ0IsWUFBWSxDQUFDQztNQUFNLEVBQzFCO0lBQUEsRUFFTDtFQUFBLEVBRWtCO0FBRTNCLENBQUM7QUFFRCxNQUFNQyxXQUFXLEdBQUc1Qiw2REFBTSxDQUFDRSxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBUSxDQUFDO0VBQUVVLEtBQUssRUFBRTtJQUFFSDtFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQzVFLE9BQU87SUFDTEksT0FBTyxFQUFFLE1BQU07SUFDZmdCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCZixLQUFLLEVBQUVMLEtBQUssQ0FBQ0MsaUJBQWlCO0lBRTlCLFVBQVUsRUFBRTtNQUNWTSxXQUFXLEVBQUU7SUFDZixDQUFDO0lBRUQsZ0JBQWdCLEVBQUU7TUFDaEJGLEtBQUssRUFBRUwsS0FBSyxDQUFDcUI7SUFDZixDQUFDO0lBRUQsa0JBQWtCLEVBQUU7TUFDbEJmLFlBQVksRUFBRTtJQUNoQjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZWEsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUYxQjtBQUNBOztBQUcwQjtBQUNhO0FBQUE7QUFNdkMsTUFBTTFCLFNBQVMsR0FBRyxDQUFDO0VBQUU2QixRQUFRO0VBQUUzQixTQUFTLEdBQUc7QUFBVSxDQUFDLEtBQUs7RUFDekQsb0JBQ0U7SUFBSyxTQUFTLEVBQUcsdUJBQXNCQSxTQUFVLEVBQUU7SUFBQSxVQUNoRDJCO0VBQVEsRUFDTDtBQUVWLENBQUM7QUFFRCxNQUFNQyxrQkFBa0IsR0FBR2hDLDZEQUFNLENBQUNFLFNBQVMsQ0FBQztFQUFBO0VBQUE7QUFBQSxHQUFDLENBQUM7RUFBRVU7QUFBTSxDQUFDLEtBQUs7RUFDMUQsT0FBUSxDQUVSLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZW9CLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJqQztBQUNBOztBQUcwQjtBQUNhO0FBQUE7QUFBQTtBQVF2QyxNQUFNOUIsU0FBUyxHQUFHLENBQUM7RUFBRTZCLFFBQVE7RUFBRTNCLFNBQVMsR0FBRyxFQUFFO0VBQUU2QixNQUFNO0VBQUVDO0FBQWdCLENBQUMsS0FBSztFQUMzRSxvQkFDRTtJQUFLLFNBQVMsRUFBRyxzQkFBcUI5QixTQUFVLEVBQUU7SUFBQSxXQUMvQzZCLE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLENBQUMsaUJBQUk7TUFBSyxTQUFTLEVBQUMsZ0JBQWdCO01BQUEsVUFDbERGLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLENBQUNDLENBQUMsRUFBRUMsS0FBSyxrQkFDbkI7UUFBQSxVQUFrQkQ7TUFBQyxHQUFUQyxLQUFLLENBQ2hCO0lBQUMsRUFDRSxFQUNMSixRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLGlCQUFJO01BQUssU0FBUyxFQUFDLGtCQUFrQjtNQUFBLFVBQ3RERCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxDQUFDRyxDQUFDLEVBQUVELEtBQUssa0JBQ3JCO1FBQUEsVUFBa0JDO01BQUMsR0FBVEQsS0FBSyxDQUNoQjtJQUFDLEVBQ0UsRUFDTFAsUUFBUTtFQUFBLEVBQ0w7QUFFVixDQUFDO0FBRUQsTUFBTVMsaUJBQWlCLEdBQUd4Qyw2REFBTSxDQUFDRSxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBQyxDQUFDO0VBQUVVO0FBQU0sQ0FBQyxLQUFLO0VBQ3pELE9BQVEsQ0FFUixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWU0QixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDaEM7QUFDQTs7QUFFMkQ7QUFDSjtBQUNjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vaGVscGVyL2luZGV4LnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL2hlbHBlci9uZnRQYXJhbXNIYW5kbGVyLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL2hlbHBlci9zdGFraW5nL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vaGVscGVyL3N0YWtpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vcGFydHMvQm9uZGVkQmFsYW5jZS50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vcGFydHMvRnJlZUJhbGFuY2UudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL3BhcnRzL1RyYW5zYWN0aW9uQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vcGFydHMvVHJhbnNhY3Rpb25Gb290ZXIudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL3BhcnRzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5mdFBhcmFtc0hhbmRsZXIgfSBmcm9tICcuL25mdFBhcmFtc0hhbmRsZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL3N0YWtpbmcnO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9Bc3NldFR5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgTmZ0SXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgX05GVF9DSEFJTl9HUk9VUCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS9jb25zdGFudHMnO1xuXG5jb25zdCBSTVJLX1BSRUZJWCA9ICdSTVJLJztcbmNvbnN0IFJNUktfT1BfVFlQRSA9ICdTRU5EJztcblxuZnVuY3Rpb24gYWNhbGFQYXJzZXIgKG5mdEl0ZW06IE5mdEl0ZW0pIHtcbiAgY29uc3QgY29sbGVjdGlvbklkID0gcGFyc2VJbnQobmZ0SXRlbS5jb2xsZWN0aW9uSWQpO1xuICBjb25zdCBpdGVtSWQgPSBwYXJzZUludChuZnRJdGVtLmlkKTtcblxuICByZXR1cm4ge1xuICAgIGNvbGxlY3Rpb25JZCxcbiAgICBpdGVtSWQsXG4gICAgbmV0d29ya0tleTogbmZ0SXRlbS5jaGFpblxuICB9O1xufVxuXG5mdW5jdGlvbiBybXJrUGFyc2VyIChuZnRJdGVtOiBOZnRJdGVtKSB7XG4gIGlmICghbmZ0SXRlbS5ybXJrX3Zlcikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtdGVtcGxhdGUtZXhwcmVzc2lvbnNcbiAgY29uc3QgcmVtYXJrID0gYCR7Uk1SS19QUkVGSVh9Ojoke1JNUktfT1BfVFlQRX06OiR7bmZ0SXRlbS5ybXJrX3Zlcn06OiR7bmZ0SXRlbS5pZH06OmA7XG5cbiAgcmV0dXJuIHtcbiAgICByZW1hcmssXG4gICAgbmV0d29ya0tleTogbmZ0SXRlbS5jaGFpblxuICB9O1xufVxuXG5mdW5jdGlvbiB1bmlxdWVQYXJzZXIgKG5mdEl0ZW06IE5mdEl0ZW0pIHtcbiAgY29uc3QgY29sbGVjdGlvbklkID0gcGFyc2VJbnQobmZ0SXRlbS5jb2xsZWN0aW9uSWQpO1xuICBjb25zdCBpdGVtSWQgPSBwYXJzZUludChuZnRJdGVtLmlkKTtcblxuICByZXR1cm4ge1xuICAgIGNvbGxlY3Rpb25JZCxcbiAgICBpdGVtSWQsXG4gICAgbmV0d29ya0tleTogbmZ0SXRlbS5jaGFpblxuICB9O1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1pbmVQYXJzZXIgKG5mdEl0ZW06IE5mdEl0ZW0pIHtcbiAgY29uc3QgY29sbGVjdGlvbklkID0gcGFyc2VJbnQobmZ0SXRlbS5jb2xsZWN0aW9uSWQpO1xuICBjb25zdCBpdGVtSWQgPSBwYXJzZUludChuZnRJdGVtLmlkKTtcblxuICByZXR1cm4ge1xuICAgIGNvbGxlY3Rpb25JZCxcbiAgICBpdGVtSWQsXG4gICAgbmV0d29ya0tleTogbmZ0SXRlbS5jaGFpblxuICB9O1xufVxuXG5mdW5jdGlvbiB3ZWIzUGFyc2VyIChuZnRJdGVtOiBOZnRJdGVtKSB7XG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IG5mdEl0ZW0uY29sbGVjdGlvbklkO1xuICBjb25zdCB0b2tlbklkID0gcGFyc2VJbnQobmZ0SXRlbS5pZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgdG9rZW5JZFxuICB9O1xufVxuXG5mdW5jdGlvbiBwc3AzNFBhcnNlciAobmZ0SXRlbTogTmZ0SXRlbSkge1xuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBuZnRJdGVtLmNvbGxlY3Rpb25JZDtcbiAgY29uc3Qgb25DaGFpbk9wdGlvbiA9IG5mdEl0ZW0ub25DaGFpbk9wdGlvbiBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIHJldHVybiB7XG4gICAgY29udHJhY3RBZGRyZXNzLFxuICAgIG9uQ2hhaW5PcHRpb24sXG4gICAgaXNQc3AzNDogdHJ1ZSxcbiAgICBuZXR3b3JrS2V5OiBuZnRJdGVtLmNoYWluXG4gIH07XG59XG5cbmZ1bmN0aW9uIHZhcmFQYXJzZXIgKG5mdEl0ZW06IE5mdEl0ZW0pIHtcbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gbmZ0SXRlbS5jb2xsZWN0aW9uSWQ7XG4gIGNvbnN0IHRva2VuSWQgPSBuZnRJdGVtLmlkO1xuXG4gIHJldHVybiB7XG4gICAgY29udHJhY3RBZGRyZXNzLFxuICAgIHRva2VuSWQsXG4gICAgbmV0d29ya0tleTogbmZ0SXRlbS5jaGFpblxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZnRQYXJhbXNIYW5kbGVyIChuZnRJdGVtOiBOZnRJdGVtLCBjaGFpbjogc3RyaW5nKSB7XG4gIGlmIChuZnRJdGVtLnR5cGUgPT09IF9Bc3NldFR5cGUuRVJDNzIxKSB7XG4gICAgcmV0dXJuIHdlYjNQYXJzZXIobmZ0SXRlbSk7XG4gIH0gZWxzZSBpZiAobmZ0SXRlbS50eXBlID09PSBfQXNzZXRUeXBlLlBTUDM0KSB7XG4gICAgcmV0dXJuIHBzcDM0UGFyc2VyKG5mdEl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChfTkZUX0NIQUlOX0dST1VQLmFjYWxhLmluY2x1ZGVzKGNoYWluKSB8fCBfTkZUX0NIQUlOX0dST1VQLmthcnVyYS5pbmNsdWRlcyhjaGFpbikgfHwgX05GVF9DSEFJTl9HUk9VUC5iaXRjb3VudHJ5LmluY2x1ZGVzKGNoYWluKSkge1xuICAgICAgcmV0dXJuIGFjYWxhUGFyc2VyKG5mdEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoX05GVF9DSEFJTl9HUk9VUC5ybXJrLmluY2x1ZGVzKGNoYWluKSkge1xuICAgICAgcmV0dXJuIHJtcmtQYXJzZXIobmZ0SXRlbSk7XG4gICAgfSBlbHNlIGlmIChfTkZUX0NIQUlOX0dST1VQLnN0YXRlbWluZS5pbmNsdWRlcyhjaGFpbikgfHwgX05GVF9DSEFJTl9HUk9VUC5zdGF0ZW1pbnQuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgICByZXR1cm4gc3RhdGVtaW5lUGFyc2VyKG5mdEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoX05GVF9DSEFJTl9HUk9VUC51bmlxdWVfbmV0d29yay5pbmNsdWRlcyhjaGFpbikpIHtcbiAgICAgIHJldHVybiB1bmlxdWVQYXJzZXIobmZ0SXRlbSk7XG4gICAgfSBlbHNlIGlmIChfTkZUX0NIQUlOX0dST1VQLnZhcmEuaW5jbHVkZXMoY2hhaW4pKSB7XG4gICAgICByZXR1cm4gdmFyYVBhcnNlcihuZnRJdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge307XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0NoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBTdGFraW5nVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgQWNjb3VudEpzb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvdHlwZXMnO1xuaW1wb3J0IHsgX2dldFN1YnN0cmF0ZUdlbmVzaXNIYXNoLCBfaXNDaGFpbkV2bUNvbXBhdGlibGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgQUxMX0tFWSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0FjY291bnRBbGwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcblxuaW1wb3J0IHsgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG5jb25zdCBkZWZhdWx0QWNjb3VudEZpbHRlciA9IChzdGFraW5nVHlwZTogU3Rha2luZ1R5cGUsIGNoYWluPzogX0NoYWluSW5mbyk6ICgoYWNjb3VudDogQWNjb3VudEpzb24pID0+IGJvb2xlYW4pID0+IHtcbiAgcmV0dXJuIChhY2NvdW50OiBBY2NvdW50SnNvbikgPT4ge1xuICAgIGNvbnN0IGlzRXZtQWRkcmVzcyA9IGlzRXRoZXJldW1BZGRyZXNzKGFjY291bnQuYWRkcmVzcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlR2VuOiBzdHJpbmdbXSA9IGFjY291bnQuYXZhaWxhYmxlR2VuZXNpc0hhc2hlcyB8fCBbXTtcblxuICAgIGlmIChhY2NvdW50LmlzSGFyZHdhcmUpIHtcbiAgICAgIGlmIChpc0V2bUFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoYWluICYmICFhdmFpbGFibGVHZW4uaW5jbHVkZXMoX2dldFN1YnN0cmF0ZUdlbmVzaXNIYXNoKGNoYWluKSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBY2NvdW50QWxsKGFjY291bnQuYWRkcmVzcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYWNjb3VudC5pc1JlYWRPbmx5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEoc3Rha2luZ1R5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCAmJiBpc0V0aGVyZXVtQWRkcmVzcyhhY2NvdW50LmFkZHJlc3MpKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY2NvdW50RmlsdGVyRnVuYyA9IChjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+LCBzdGFraW5nVHlwZTogU3Rha2luZ1R5cGUsIHN0YWtpbmdDaGFpbj86IHN0cmluZyk6ICgoYWNjb3VudDogQWNjb3VudEpzb24pID0+IGJvb2xlYW4pID0+IHtcbiAgcmV0dXJuIChhY2NvdW50OiBBY2NvdW50SnNvbikgPT4ge1xuICAgIGlmIChzdGFraW5nQ2hhaW4gJiYgc3Rha2luZ0NoYWluICE9PSBBTExfS0VZKSB7XG4gICAgICBjb25zdCBjaGFpbiA9IGNoYWluSW5mb01hcFtzdGFraW5nQ2hhaW5dO1xuICAgICAgY29uc3QgZGVmYXVsdEZpbHRlciA9IGRlZmF1bHRBY2NvdW50RmlsdGVyKHN0YWtpbmdUeXBlLCBjaGFpbik7XG4gICAgICBjb25zdCBpc0V2bUNoYWluID0gX2lzQ2hhaW5Fdm1Db21wYXRpYmxlKGNoYWluKTtcbiAgICAgIGNvbnN0IGlzRXZtQWRkcmVzcyA9IGlzRXRoZXJldW1BZGRyZXNzKGFjY291bnQuYWRkcmVzcyk7XG5cbiAgICAgIHJldHVybiBkZWZhdWx0RmlsdGVyKGFjY291bnQpICYmIGlzRXZtQ2hhaW4gPT09IGlzRXZtQWRkcmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlZmF1bHRBY2NvdW50RmlsdGVyKHN0YWtpbmdUeXBlKShhY2NvdW50KTtcbiAgICB9XG4gIH07XG59O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCAqIGZyb20gJy4vYmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0YWtpbmdIYW5kbGVyJztcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgTnVtYmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQmlnTiBmcm9tICdiaWdudW1iZXIuanMnO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzICYge1xuICBsYWJlbD86IHN0cmluZztcbiAgYm9uZGVkQmFsYW5jZT86IHN0cmluZyB8IG51bWJlciB8IEJpZ047XG4gIGRlY2ltYWxzOiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBDb21wb25lbnQgPSAoeyBib25kZWRCYWxhbmNlLCBjbGFzc05hbWUsIGRlY2ltYWxzLCBsYWJlbCwgc3ltYm9sIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5LlBhcmFncmFwaCBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSwgJ2JvbmRlZC1iYWxhbmNlJyl9PlxuICAgICAgPE51bWJlclxuICAgICAgICBkZWNpbWFsPXtkZWNpbWFsc31cbiAgICAgICAgZGVjaW1hbENvbG9yPXt0b2tlbi5jb2xvclRleHRUZXJ0aWFyeX1cbiAgICAgICAgaW50Q29sb3I9e3Rva2VuLmNvbG9yVGV4dFRlcnRpYXJ5fVxuICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgc3VmZml4PXtzeW1ib2x9XG4gICAgICAgIHVuaXRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgIHZhbHVlPXtib25kZWRCYWxhbmNlIHx8IDB9XG4gICAgICAvPlxuICAgICAge2xhYmVsIHx8IHQoJ0JvbmRlZCcpfVxuICAgIDwvVHlwb2dyYXBoeS5QYXJhZ3JhcGg+XG4gICk7XG59O1xuXG5jb25zdCBCb25kZWRCYWxhbmNlID0gc3R5bGVkKENvbXBvbmVudCkoKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dFRlcnRpYXJ5LFxuXG4gICAgJyYuYW50LXR5cG9ncmFwaHknOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICB9LFxuXG4gICAgJy5hbnQtbnVtYmVyJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcwLjNlbSdcbiAgICB9XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJvbmRlZEJhbGFuY2U7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyB1c2VHZXRCYWxhbmNlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVGhlbWUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yLCBOdW1iZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcyAmIHtcbiAgYWRkcmVzcz86IHN0cmluZyxcbiAgdG9rZW5TbHVnPzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgY2hhaW4/OiBzdHJpbmc7XG4gIG9uQmFsYW5jZVJlYWR5PzogKHJzOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDb21wb25lbnQgPSAoeyBhZGRyZXNzLCBjaGFpbiwgY2xhc3NOYW1lLCBsYWJlbCwgb25CYWxhbmNlUmVhZHksIHRva2VuU2x1ZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG4gIGNvbnN0IHsgZXJyb3IsIGlzTG9hZGluZywgbmF0aXZlVG9rZW5CYWxhbmNlLCBuYXRpdmVUb2tlblNsdWcsIHRva2VuQmFsYW5jZSB9ID0gdXNlR2V0QmFsYW5jZShjaGFpbiwgYWRkcmVzcywgdG9rZW5TbHVnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uQmFsYW5jZVJlYWR5Py4oIWlzTG9hZGluZyAmJiAhZXJyb3IpO1xuICB9LCBbZXJyb3IsIGlzTG9hZGluZywgb25CYWxhbmNlUmVhZHldKTtcblxuICBpZiAoIWFkZHJlc3MgJiYgIWNoYWluKSB7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VHlwb2dyYXBoeS5QYXJhZ3JhcGggY2xhc3NOYW1lPXtDTihjbGFzc05hbWUsICdmcmVlLWJhbGFuY2UnKX0+XG4gICAgICB7IWVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT0nX19sYWJlbCc+e2xhYmVsIHx8IHQoJ1NlbmRlciBhdmFpbGFibGUgYmFsYW5jZTonKX08L3NwYW4+fVxuICAgICAge2lzTG9hZGluZyAmJiA8QWN0aXZpdHlJbmRpY2F0b3Igc2l6ZT17MTR9IC8+fVxuICAgICAge2Vycm9yICYmIDxUeXBvZ3JhcGh5LlRleHQgY2xhc3NOYW1lPXsnZXJyb3ItbWVzc2FnZSd9PntlcnJvcn08L1R5cG9ncmFwaHkuVGV4dD59XG4gICAgICB7XG4gICAgICAgICFpc0xvYWRpbmcgJiYgIWVycm9yICYmICEhbmF0aXZlVG9rZW5TbHVnICYmIChcbiAgICAgICAgICA8TnVtYmVyXG4gICAgICAgICAgICBkZWNpbWFsPXtuYXRpdmVUb2tlbkJhbGFuY2UuZGVjaW1hbHMgfHwgMTh9XG4gICAgICAgICAgICBkZWNpbWFsQ29sb3I9e3Rva2VuLmNvbG9yVGV4dFRlcnRpYXJ5fVxuICAgICAgICAgICAgaW50Q29sb3I9e3Rva2VuLmNvbG9yVGV4dFRlcnRpYXJ5fVxuICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICBzdWZmaXg9e25hdGl2ZVRva2VuQmFsYW5jZS5zeW1ib2x9XG4gICAgICAgICAgICB1bml0Q29sb3I9e3Rva2VuLmNvbG9yVGV4dFRlcnRpYXJ5fVxuICAgICAgICAgICAgdmFsdWU9e25hdGl2ZVRva2VuQmFsYW5jZS52YWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgICFpc0xvYWRpbmcgJiYgIWVycm9yICYmICEhdG9rZW5TbHVnICYmICh0b2tlblNsdWcgIT09IG5hdGl2ZVRva2VuU2x1ZykgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydfX25hbWUnfT4mbmJzcDt7dCgnYW5kJyl9Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgPE51bWJlclxuICAgICAgICAgICAgICBkZWNpbWFsPXt0b2tlbkJhbGFuY2U/LmRlY2ltYWxzIHx8IDE4fVxuICAgICAgICAgICAgICBkZWNpbWFsQ29sb3I9e3Rva2VuLmNvbG9yVGV4dFRlcnRpYXJ5fVxuICAgICAgICAgICAgICBpbnRDb2xvcj17dG9rZW4uY29sb3JUZXh0VGVydGlhcnl9XG4gICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICBzdWZmaXg9e3Rva2VuQmFsYW5jZT8uc3ltYm9sfVxuICAgICAgICAgICAgICB1bml0Q29sb3I9e3Rva2VuLmNvbG9yVGV4dFRlcnRpYXJ5fVxuICAgICAgICAgICAgICB2YWx1ZT17dG9rZW5CYWxhbmNlLnZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvVHlwb2dyYXBoeS5QYXJhZ3JhcGg+XG4gICk7XG59O1xuXG5jb25zdCBGcmVlQmFsYW5jZSA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dFRlcnRpYXJ5LFxuXG4gICAgJy5fX2xhYmVsJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6IDNcbiAgICB9LFxuXG4gICAgJy5lcnJvci1tZXNzYWdlJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JcbiAgICB9LFxuXG4gICAgJyYuYW50LXR5cG9ncmFwaHknOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRnJlZUJhbGFuY2U7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IENvbXBvbmVudCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdHJhbnNhY3Rpb24tY29udGVudCAke2NsYXNzTmFtZX1gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFRyYW5zYWN0aW9uQ29udGVudCA9IHN0eWxlZChDb21wb25lbnQpKCh7IHRoZW1lIH0pID0+IHtcbiAgcmV0dXJuICh7XG5cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25Db250ZW50O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBUaGVtZVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBlcnJvcnM6IHN0cmluZ1tdXG4gIHdhcm5pbmdzOiBzdHJpbmdbXVxufVxuXG5jb25zdCBDb21wb25lbnQgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lID0gJycsIGVycm9ycywgd2FybmluZ3MgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRyYW5zYWN0aW9uLWZvb3RlciAke2NsYXNzTmFtZX1gfT5cbiAgICAgIHtlcnJvcnMubGVuZ3RoID4gMCAmJiA8ZGl2IGNsYXNzTmFtZT0nZXJyb3ItbWVzc2FnZXMnPlxuICAgICAgICB7ZXJyb3JzLm1hcCgoZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PntlfTwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2Pn1cbiAgICAgIHt3YXJuaW5ncy5sZW5ndGggPiAwICYmIDxkaXYgY2xhc3NOYW1lPSd3YXJuaW5nLW1lc3NhZ2VzJz5cbiAgICAgICAge3dhcm5pbmdzLm1hcCgodywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9Pnt3fTwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2Pn1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFRyYW5zYWN0aW9uRm9vdGVyID0gc3R5bGVkKENvbXBvbmVudCkoKHsgdGhlbWUgfSkgPT4ge1xuICByZXR1cm4gKHtcblxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkZvb3RlcjtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvbmRlZEJhbGFuY2UgfSBmcm9tICcuL0JvbmRlZEJhbGFuY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGcmVlQmFsYW5jZSB9IGZyb20gJy4vRnJlZUJhbGFuY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFuc2FjdGlvbkNvbnRlbnQgfSBmcm9tICcuL1RyYW5zYWN0aW9uQ29udGVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zYWN0aW9uRm9vdGVyIH0gZnJvbSAnLi9UcmFuc2FjdGlvbkZvb3Rlcic7XG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIm5mdFBhcmFtc0hhbmRsZXIiLCJfQXNzZXRUeXBlIiwiX05GVF9DSEFJTl9HUk9VUCIsIlJNUktfUFJFRklYIiwiUk1SS19PUF9UWVBFIiwiYWNhbGFQYXJzZXIiLCJuZnRJdGVtIiwiY29sbGVjdGlvbklkIiwicGFyc2VJbnQiLCJpdGVtSWQiLCJpZCIsIm5ldHdvcmtLZXkiLCJjaGFpbiIsInJtcmtQYXJzZXIiLCJybXJrX3ZlciIsInJlbWFyayIsInVuaXF1ZVBhcnNlciIsInN0YXRlbWluZVBhcnNlciIsIndlYjNQYXJzZXIiLCJjb250cmFjdEFkZHJlc3MiLCJ0b2tlbklkIiwicHNwMzRQYXJzZXIiLCJvbkNoYWluT3B0aW9uIiwiaXNQc3AzNCIsInZhcmFQYXJzZXIiLCJ0eXBlIiwiRVJDNzIxIiwiUFNQMzQiLCJhY2FsYSIsImluY2x1ZGVzIiwia2FydXJhIiwiYml0Y291bnRyeSIsInJtcmsiLCJzdGF0ZW1pbmUiLCJzdGF0ZW1pbnQiLCJ1bmlxdWVfbmV0d29yayIsInZhcmEiLCJTdGFraW5nVHlwZSIsIl9nZXRTdWJzdHJhdGVHZW5lc2lzSGFzaCIsIl9pc0NoYWluRXZtQ29tcGF0aWJsZSIsIkFMTF9LRVkiLCJpc0FjY291bnRBbGwiLCJpc0V0aGVyZXVtQWRkcmVzcyIsImRlZmF1bHRBY2NvdW50RmlsdGVyIiwic3Rha2luZ1R5cGUiLCJhY2NvdW50IiwiaXNFdm1BZGRyZXNzIiwiYWRkcmVzcyIsImF2YWlsYWJsZUdlbiIsImF2YWlsYWJsZUdlbmVzaXNIYXNoZXMiLCJpc0hhcmR3YXJlIiwiaXNSZWFkT25seSIsIlBPT0xFRCIsImFjY291bnRGaWx0ZXJGdW5jIiwiY2hhaW5JbmZvTWFwIiwic3Rha2luZ0NoYWluIiwiZGVmYXVsdEZpbHRlciIsImlzRXZtQ2hhaW4iLCJ1c2VUcmFuc2xhdGlvbiIsIk51bWJlciIsIlR5cG9ncmFwaHkiLCJDTiIsIlJlYWN0Iiwic3R5bGVkIiwidXNlVGhlbWUiLCJDb21wb25lbnQiLCJib25kZWRCYWxhbmNlIiwiY2xhc3NOYW1lIiwiZGVjaW1hbHMiLCJsYWJlbCIsInN5bWJvbCIsInQiLCJ0b2tlbiIsImNvbG9yVGV4dFRlcnRpYXJ5IiwiQm9uZGVkQmFsYW5jZSIsInRoZW1lIiwiZGlzcGxheSIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJ1c2VHZXRCYWxhbmNlIiwiQWN0aXZpdHlJbmRpY2F0b3IiLCJ1c2VFZmZlY3QiLCJvbkJhbGFuY2VSZWFkeSIsInRva2VuU2x1ZyIsImVycm9yIiwiaXNMb2FkaW5nIiwibmF0aXZlVG9rZW5CYWxhbmNlIiwibmF0aXZlVG9rZW5TbHVnIiwidG9rZW5CYWxhbmNlIiwidmFsdWUiLCJGcmVlQmFsYW5jZSIsImZsZXhXcmFwIiwiY29sb3JFcnJvciIsImNoaWxkcmVuIiwiVHJhbnNhY3Rpb25Db250ZW50IiwiZXJyb3JzIiwid2FybmluZ3MiLCJsZW5ndGgiLCJtYXAiLCJlIiwiaW5kZXgiLCJ3IiwiVHJhbnNhY3Rpb25Gb290ZXIiXSwic291cmNlUm9vdCI6IiJ9