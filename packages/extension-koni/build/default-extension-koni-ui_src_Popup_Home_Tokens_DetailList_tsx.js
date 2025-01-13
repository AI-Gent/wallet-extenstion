"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_Tokens_DetailList_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/Tokens/DetailList.tsx":
/*!*****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Tokens/DetailList.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components_Layout_PageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Layout/PageWrapper */ "../extension-koni-ui/src/components/Layout/PageWrapper.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_AccountSelectorModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/AccountSelectorModal */ "../extension-koni-ui/src/components/Modal/AccountSelectorModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_ReceiveModal_ReceiveQrModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/ReceiveModal/ReceiveQrModal */ "../extension-koni-ui/src/components/Modal/ReceiveModal/ReceiveQrModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_ReceiveModal_TokensSelectorModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/ReceiveModal/TokensSelectorModal */ "../extension-koni-ui/src/components/Modal/ReceiveModal/TokensSelectorModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_TokenItem_TokenBalanceDetailItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/TokenItem/TokenBalanceDetailItem */ "../extension-koni-ui/src/components/TokenItem/TokenBalanceDetailItem.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_screen_HomeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/screen/HomeContext */ "../extension-koni-ui/src/contexts/screen/HomeContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Home_Tokens_DetailModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Home/Tokens/DetailModal */ "../extension-koni-ui/src/Popup/Home/Tokens/DetailModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Home_Tokens_DetailUpperBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Home/Tokens/DetailUpperBlock */ "../extension-koni-ui/src/Popup/Home/Tokens/DetailUpperBlock.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0






















function WrapperComponent({
  className = ''
}) {
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_13__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_6__.DataContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_subwallet_extension_koni_ui_components_Layout_PageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: `tokens ${className}`,
    resolve: dataContext.awaitStores(['price', 'chainStore', 'assetRegistry', 'balance']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Component, {})
  });
}
const TokenDetailModalId = 'tokenDetailModalId';
function Component() {
  const {
    slug: tokenGroupSlug
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useParams)();
  const notify = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useNotification)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_17__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useDefaultNavigate)();
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__.ModalContext);
  const {
    accountBalance: {
      tokenBalanceMap,
      tokenGroupBalanceMap
    },
    tokenGroupStructure: {
      tokenGroupMap
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useContext)(_subwallet_extension_koni_ui_contexts_screen_HomeContext__WEBPACK_IMPORTED_MODULE_7__.HomeContext);
  const assetRegistryMap = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useSelector)(root => root.assetRegistry.assetRegistry);
  const multiChainAssetMap = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.assetRegistry.multiChainAssetMap);
  const currentAccount = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.accountState.currentAccount);
  const accounts = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.accountState.accounts);
  const [, setStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_14__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__.TRANSFER_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TRANSFER_PARAMS);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_13__.useRef)(null);
  const topBlockRef = (0,react__WEBPACK_IMPORTED_MODULE_13__.useRef)(null);
  const {
    accountSelectorItems,
    onOpenReceive,
    openSelectAccount,
    openSelectToken,
    selectedAccount,
    selectedNetwork,
    tokenSelectorItems
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useReceiveQR)(tokenGroupSlug);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useNavigateOnChangeAccount)('/home/tokens');
  const symbol = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    if (tokenGroupSlug) {
      if (multiChainAssetMap[tokenGroupSlug]) {
        return multiChainAssetMap[tokenGroupSlug].symbol;
      }
      if (assetRegistryMap[tokenGroupSlug]) {
        return assetRegistryMap[tokenGroupSlug].symbol;
      }
    }
    return '';
  }, [tokenGroupSlug, assetRegistryMap, multiChainAssetMap]);
  const buyInfos = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    const slug = tokenGroupSlug || '';
    const slugs = tokenGroupMap[slug] ? tokenGroupMap[slug] : [slug];
    const result = [];
    for (const [slug, buyInfo] of Object.entries(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__.MAP_PREDEFINED_BUY_TOKEN)) {
      if (slugs.includes(slug)) {
        const supportType = buyInfo.support;
        if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_11__.isAccountAll)((currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) || '')) {
          const support = accounts.some(account => supportType === (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_11__.getAccountType)(account.address));
          if (support) {
            result.push(buyInfo);
          }
        } else {
          if (currentAccount !== null && currentAccount !== void 0 && currentAccount.address && supportType === (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_11__.getAccountType)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address)) {
            result.push(buyInfo);
          }
        }
      }
    }
    return result;
  }, [accounts, currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, tokenGroupMap, tokenGroupSlug]);
  const tokenBalanceValue = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    if (tokenGroupSlug) {
      if (tokenGroupBalanceMap[tokenGroupSlug]) {
        return tokenGroupBalanceMap[tokenGroupSlug].total.convertedValue;
      }
      if (tokenBalanceMap[tokenGroupSlug]) {
        return tokenBalanceMap[tokenGroupSlug].total.convertedValue;
      }
    }
    return '0';
  }, [tokenGroupSlug, tokenBalanceMap, tokenGroupBalanceMap]);
  const tokenBalanceItems = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(() => {
    if (tokenGroupSlug) {
      if (tokenGroupMap[tokenGroupSlug]) {
        const items = [];
        tokenGroupMap[tokenGroupSlug].forEach(tokenSlug => {
          if (tokenBalanceMap[tokenSlug]) {
            items.push(tokenBalanceMap[tokenSlug]);
          }
        });
        return items.sort(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_11__.sortTokenByValue);
      }
      if (tokenBalanceMap[tokenGroupSlug]) {
        return [tokenBalanceMap[tokenGroupSlug]];
      }
    }
    return [];
  }, [tokenGroupSlug, tokenGroupMap, tokenBalanceMap]);
  const [currentTokenInfo, setCurrentTokenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(undefined);
  const [isShrink, setIsShrink] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(event => {
    const topPosition = event.currentTarget.scrollTop;
    if (topPosition > 60) {
      setIsShrink(value => {
        if (!value && topBlockRef.current && containerRef.current) {
          const containerProps = containerRef.current.getBoundingClientRect();
          topBlockRef.current.style.position = 'fixed';
          topBlockRef.current.style.opacity = '0';
          topBlockRef.current.style.paddingTop = '0';
          topBlockRef.current.style.top = `${Math.floor(containerProps.top)}px`;
          topBlockRef.current.style.left = `${containerProps.left}px`;
          topBlockRef.current.style.right = `${containerProps.right}px`;
          topBlockRef.current.style.width = `${containerProps.width}px`;
          setTimeout(() => {
            if (topBlockRef.current) {
              topBlockRef.current.style.paddingTop = '8px';
              topBlockRef.current.style.opacity = '1';
            }
          }, 100);
        }
        return true;
      });
    } else {
      setIsShrink(value => {
        if (value && topBlockRef.current) {
          topBlockRef.current.style.position = 'absolute';
          topBlockRef.current.style.top = '0';
          topBlockRef.current.style.left = '0';
          topBlockRef.current.style.right = '0';
          topBlockRef.current.style.width = '100%';
          topBlockRef.current.style.opacity = '0';
          setTimeout(() => {
            if (topBlockRef.current) {
              topBlockRef.current.style.opacity = '1';
            }
          }, 100);
        }
        return false;
      });
    }
  }, []);
  const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(() => {
    var _containerRef$current;
    const topPosition = ((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.scrollTop) || 0;
    if (topPosition > 60) {
      if (topBlockRef.current && containerRef.current) {
        const containerProps = containerRef.current.getBoundingClientRect();
        topBlockRef.current.style.top = `${Math.floor(containerProps.top)}px`;
        topBlockRef.current.style.left = `${containerProps.left}px`;
        topBlockRef.current.style.right = `${containerProps.right}px`;
        topBlockRef.current.style.width = `${containerProps.width}px`;
      }
    } else {
      if (topBlockRef.current) {
        topBlockRef.current.style.top = '0';
        topBlockRef.current.style.left = '0';
        topBlockRef.current.style.right = '0';
        topBlockRef.current.style.width = '100%';
      }
    }
  }, []);
  const onCloseDetail = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(() => {
    setCurrentTokenInfo(undefined);
  }, []);
  const onClickItem = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(item => {
    return () => {
      setCurrentTokenInfo({
        slug: item.slug,
        symbol: item.symbol
      });
    };
  }, []);
  const onOpenSendFund = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(() => {
    if (currentAccount && currentAccount.isReadOnly) {
      notify({
        message: t('The account you are using is watch-only, you cannot send assets with it'),
        type: 'info',
        duration: 3
      });
      return;
    }
    const address = currentAccount ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_11__.isAccountAll)(currentAccount.address) ? '' : currentAccount.address : '';
    setStorage({
      ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TRANSFER_PARAMS,
      from: address,
      defaultSlug: tokenGroupSlug || ''
    });
    navigate('/transaction/send-fund');
  }, [currentAccount, navigate, notify, setStorage, t, tokenGroupSlug]);
  const onOpenBuyTokens = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(() => {
    let symbol = '';
    if (buyInfos.length) {
      if (buyInfos.length === 1) {
        symbol = buyInfos[0].slug;
      } else {
        symbol = buyInfos[0].symbol;
      }
    }
    navigate('/buy-tokens', {
      state: {
        symbol
      }
    });
  }, [buyInfos, navigate]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    if (currentTokenInfo) {
      activeModal(TokenDetailModalId);
    } else {
      inactiveModal(TokenDetailModalId);
    }
  }, [activeModal, currentTokenInfo, inactiveModal]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    setIsShrink(false);
  }, [tokenGroupSlug]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    if (!tokenBalanceItems.length) {
      goHome();
    }
  }, [goHome, tokenBalanceItems.length]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: 'token-detail-container',
    onScroll: handleScroll,
    ref: containerRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('__upper-block-wrapper', {
        '-is-shrink': isShrink
      }),
      ref: topBlockRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_subwallet_extension_koni_ui_Popup_Home_Tokens_DetailUpperBlock__WEBPACK_IMPORTED_MODULE_10__.DetailUpperBlock, {
        balanceValue: tokenBalanceValue,
        className: '__static-block',
        isShrink: isShrink,
        isSupportBuyTokens: !!buyInfos.length,
        onClickBack: goHome,
        onOpenBuyTokens: onOpenBuyTokens,
        onOpenReceive: onOpenReceive,
        onOpenSendFund: onOpenSendFund,
        symbol: symbol
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: '__scroll-container',
      children: tokenBalanceItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_subwallet_extension_koni_ui_components_TokenItem_TokenBalanceDetailItem__WEBPACK_IMPORTED_MODULE_4__.TokenBalanceDetailItem, {
        ...item,
        onClick: onClickItem(item)
      }, item.slug))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_subwallet_extension_koni_ui_Popup_Home_Tokens_DetailModal__WEBPACK_IMPORTED_MODULE_9__.DetailModal, {
      currentTokenInfo: currentTokenInfo,
      id: TokenDetailModalId,
      onCancel: onCloseDetail,
      tokenBalanceMap: tokenBalanceMap
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_subwallet_extension_koni_ui_components_Modal_AccountSelectorModal__WEBPACK_IMPORTED_MODULE_1__.AccountSelectorModal, {
      items: accountSelectorItems,
      onSelectItem: openSelectAccount
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_subwallet_extension_koni_ui_components_Modal_ReceiveModal_TokensSelectorModal__WEBPACK_IMPORTED_MODULE_3__.TokensSelectorModal, {
      address: selectedAccount,
      items: tokenSelectorItems,
      onSelectItem: openSelectToken
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_subwallet_extension_koni_ui_components_Modal_ReceiveModal_ReceiveQrModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      address: selectedAccount,
      selectedNetwork: selectedNetwork
    })]
  });
}
const Tokens = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__["default"])(WrapperComponent).withConfig({
  displayName: "DetailList__Tokens",
  componentId: "sc-9cj0x6-0"
})(({
  theme: {
    extendToken,
    token
  }
}) => {
  return {
    overflow: 'hidden',
    '.token-detail-container': {
      height: '100%',
      overflow: 'auto',
      color: token.colorTextLight1,
      fontSize: token.fontSizeLG,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 206
    },
    '.__scroll-container': {
      flex: 1,
      paddingLeft: token.size,
      paddingRight: token.size
    },
    '.__upper-block-wrapper': {
      position: 'absolute',
      backgroundColor: token.colorBgDefault,
      zIndex: 10,
      height: 206,
      paddingTop: 8,
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      backgroundImage: extendToken.tokensScreenInfoBackgroundColor,
      transition: 'opacity, padding-top 0.27s ease',
      '&.-is-shrink': {
        height: 128
      }
    },
    '.tokens-upper-block': {
      flex: 1
    },
    '.__scrolling-block': {
      display: 'none'
    },
    '.token-balance-detail-item': {
      marginBottom: token.sizeXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tokens);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/Tokens/DetailModal.tsx":
/*!******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Tokens/DetailModal.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailModal": () => (/* binding */ DetailModal)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/number/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bignumber.js */ "../../node_modules/bignumber.js/bignumber.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0








function Component({
  className = '',
  currentTokenInfo,
  id,
  onCancel,
  tokenBalanceMap
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const items = (() => {
    const symbol = (currentTokenInfo === null || currentTokenInfo === void 0 ? void 0 : currentTokenInfo.symbol) || '';
    const balanceInfo = currentTokenInfo ? tokenBalanceMap[currentTokenInfo.slug] : undefined;
    return [{
      key: 'transferable',
      symbol,
      label: t('Transferable'),
      value: balanceInfo ? balanceInfo.free.value : new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](0)
    }, {
      key: 'locked',
      symbol,
      label: t('Locked'),
      value: balanceInfo ? balanceInfo.locked.value : new bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"](0)
    }];
  })();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: className,
    id: id,
    onCancel: onCancel,
    title: t('Token details'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: '__container',
      children: items.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: '__row',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: '__label',
          children: item.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: '__value',
          decimal: 0,
          decimalOpacity: 0.45,
          intOpacity: 0.85,
          size: 14,
          suffix: item.symbol,
          unitOpacity: 0.85,
          value: item.value
        })]
      }, item.key))
    })
  });
}
const DetailModal = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(Component).withConfig({
  displayName: "DetailModal",
  componentId: "sc-6oss6y-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.__container': {
      borderRadius: token.borderRadiusLG,
      backgroundColor: token.colorBgSecondary,
      padding: '12px 12px 4px'
    },
    '.__row': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: token.marginSM
    },
    '.__label': {
      paddingRight: token.paddingSM
    }
  };
});

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/Tokens/DetailUpperBlock.tsx":
/*!***********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Tokens/DetailUpperBlock.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailUpperBlock": () => (/* binding */ DetailUpperBlock)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/number/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CaretLeft.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CopySimple.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PaperPlaneTilt.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShoppingCartSimple.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0









function Component({
  balanceValue,
  className = '',
  isShrink,
  isSupportBuyTokens,
  onClickBack,
  onOpenBuyTokens,
  onOpenReceive,
  onOpenSendFund,
  symbol
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const {
    isShowBalance
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.settings);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `tokens-upper-block ${className} ${isShrink ? '-shrink' : ''}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "__top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: '__back-button',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
          customSize: '24px',
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_6__["default"]
        }),
        onClick: onClickBack,
        size: 'xs',
        type: 'ghost'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: '__token-display',
        children: [t('Token'), ": ", symbol]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "__bottom",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: '__balance-value',
        decimal: 0,
        decimalOpacity: 0.45,
        hide: !isShowBalance,
        prefix: "$",
        size: 38,
        subFloatNumber: true,
        value: balanceValue
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: '__action-button-container',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_8__["default"],
            size: isShrink ? 'sm' : 'md',
            weight: 'duotone'
          }),
          onClick: onOpenReceive,
          shape: "squircle",
          size: isShrink ? 'xs' : 'sm',
          tooltip: t('Get address')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: '__button-space'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_9__["default"],
            size: isShrink ? 'sm' : 'md',
            weight: 'duotone'
          }),
          onClick: onOpenSendFund,
          shape: "squircle",
          size: isShrink ? 'xs' : 'sm',
          tooltip: t('Send tokens')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: '__button-space'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
          disabled: !isSupportBuyTokens,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
            size: isShrink ? 'sm' : 'md',
            weight: 'duotone'
          }),
          onClick: onOpenBuyTokens,
          shape: "squircle",
          size: isShrink ? 'xs' : 'sm',
          tooltip: t('Buy token')
        })]
      })]
    })]
  });
}
const DetailUpperBlock = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(Component).withConfig({
  displayName: "DetailUpperBlock",
  componentId: "sc-bgq49z-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    padding: '0px 8px 24px 8px',
    display: 'flex',
    flexDirection: 'column',
    '.__top': {
      display: 'flex',
      marginBottom: 16,
      alignItems: 'center'
    },
    '.__token-display': {
      textAlign: 'center',
      flex: 1,
      fontSize: token.fontSizeHeading4,
      lineHeight: token.lineHeightHeading4,
      marginRight: 40
    },
    '.ant-btn': {
      transition: 'width, height, padding 0s'
    },
    '.__back-button': {
      color: token.colorTextLight1,
      '&:hover': {
        color: token.colorTextLight3
      },
      '&:active': {
        color: token.colorTextLight4
      }
    },
    '.__balance-value': {
      textAlign: 'center',
      padding: '0px 8px',
      lineHeight: token.lineHeightHeading1,
      fontSize: token.fontSizeHeading1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      '.ant-typography': {
        lineHeight: 'inherit'
      }
    },
    '.__action-button-container': {
      display: 'flex',
      justifyContent: 'center',
      padding: '24px 8px 0 8px'
    },
    '.__button-space': {
      width: token.size
    },
    '&.-shrink': {
      '.__bottom': {
        display: 'flex'
      },
      '.__balance-value': {
        textAlign: 'left',
        lineHeight: token.lineHeightHeading2,
        fontSize: token.fontSizeHeading2,
        flex: 1,
        '.ant-number-prefix, .ant-number-integer': {
          fontSize: 'inherit !important'
        }
      },
      '.__action-button-container': {
        paddingTop: 0
      },
      '.__button-space': {
        width: token.sizeXS
      }
    }
  };
});

/***/ }),

/***/ "../extension-koni-ui/src/contexts/screen/HomeContext.tsx":
/*!****************************************************************!*\
  !*** ../extension-koni-ui/src/contexts/screen/HomeContext.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeContext": () => (/* binding */ HomeContext)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "../../node_modules/bignumber.js/bignumber.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0



const HomeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
  accountBalance: {
    tokenBalanceMap: {},
    tokenGroupBalanceMap: {},
    totalBalanceInfo: {
      convertedValue: new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](0),
      converted24hValue: new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](0),
      change: {
        value: new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](0),
        percent: new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](0)
      }
    }
  },
  tokenGroupStructure: {
    tokenGroupMap: {},
    sortedTokenGroups: [],
    sortedTokenSlugs: []
  }
});

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/ShoppingCartSimple.esm.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/ShoppingCartSimple.esm.js ***!
  \******************************************************************************/
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
    cx: "80",
    cy: "216",
    r: "20"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "20"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-24.1,84.4A16,16,0,0,1,182.2,168H81.8a16,16,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "216",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM228.1,67.2a8.1,8.1,0,0,0-6.4-3.2H48.3L40.2,35.6A16.1,16.1,0,0,0,24.8,24H8A8,8,0,0,0,8,40H24.8l9.8,34.1v.2L61,166.6A24.1,24.1,0,0,0,84.1,184h95.8A24.1,24.1,0,0,0,203,166.6l26.4-92.4A8,8,0,0,0,228.1,67.2Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "216",
    r: "14"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "14"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "216",
    r: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "216",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
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

var ShoppingCartSimple = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ShoppingCartSimple.displayName = "ShoppingCartSimple";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCartSimple);
//# sourceMappingURL=ShoppingCartSimple.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9Ub2tlbnNfRGV0YWlsTGlzdF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVxRjtBQUNxQjtBQUNIO0FBQ2M7QUFDSDtBQUNlO0FBQ2pEO0FBQ087QUFDeUQ7QUFDdkQ7QUFDVTtBQUlDO0FBQ2pEO0FBRWY7QUFDeUQ7QUFDOUM7QUFDVztBQUNuQjtBQUNPO0FBQUE7QUFBQTtBQVM5QyxTQUFTa0MsZ0JBQWdCLENBQUU7RUFBRUMsU0FBUyxHQUFHO0FBQWUsQ0FBQyxFQUE2QjtFQUNwRixNQUFNQyxXQUFXLEdBQUdaLGtEQUFVLENBQUNoQiwwRkFBVyxDQUFDO0VBRTNDLG9CQUNFLHdEQUFDLGtHQUFXO0lBQ1YsU0FBUyxFQUFHLFVBQVMyQixTQUFVLEVBQUU7SUFDakMsT0FBTyxFQUFFQyxXQUFXLENBQUNDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFFO0lBQUEsdUJBRXRGLHdEQUFDLFNBQVM7RUFBRyxFQUNEO0FBRWxCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQW9CO0FBRS9DLFNBQVNDLFNBQVMsR0FBd0I7RUFDeEMsTUFBTTtJQUFFQyxJQUFJLEVBQUVDO0VBQWUsQ0FBQyxHQUFHViw0REFBUyxFQUFFO0VBRTVDLE1BQU1XLE1BQU0sR0FBRzlCLG1GQUFlLEVBQUU7RUFDaEMsTUFBTTtJQUFFK0I7RUFBRSxDQUFDLEdBQUdkLDhEQUFjLEVBQUU7RUFDOUIsTUFBTWUsUUFBUSxHQUFHZCw4REFBVyxFQUFFO0VBQzlCLE1BQU07SUFBRWU7RUFBTyxDQUFDLEdBQUduQyxzRkFBa0IsRUFBRTtFQUV2QyxNQUFNO0lBQUVvQyxXQUFXO0lBQUVDO0VBQWMsQ0FBQyxHQUFHdkIsa0RBQVUsQ0FBQ0osOERBQVksQ0FBQztFQUMvRCxNQUFNO0lBQUU0QixjQUFjLEVBQUU7TUFBRUMsZUFBZTtNQUFFQztJQUFxQixDQUFDO0lBQUVDLG1CQUFtQixFQUFFO01BQUVDO0lBQWM7RUFBRSxDQUFDLEdBQUc1QixrREFBVSxDQUFDZixpR0FBVyxDQUFDO0VBRXJJLE1BQU00QyxnQkFBZ0IsR0FBR3ZDLCtFQUFXLENBQUV3QyxJQUFlLElBQUtBLElBQUksQ0FBQ0MsYUFBYSxDQUFDQSxhQUFhLENBQUM7RUFDM0YsTUFBTUMsa0JBQWtCLEdBQUcxQywrRUFBVyxDQUFFMkMsS0FBZ0IsSUFBS0EsS0FBSyxDQUFDRixhQUFhLENBQUNDLGtCQUFrQixDQUFDO0VBQ3BHLE1BQU1FLGNBQWMsR0FBRzVDLCtFQUFXLENBQUUyQyxLQUFnQixJQUFLQSxLQUFLLENBQUNFLFlBQVksQ0FBQ0QsY0FBYyxDQUFDO0VBQzNGLE1BQU1FLFFBQVEsR0FBRzlDLCtFQUFXLENBQUUyQyxLQUFnQixJQUFLQSxLQUFLLENBQUNFLFlBQVksQ0FBQ0MsUUFBUSxDQUFDO0VBQy9FLE1BQU0sR0FBR0MsVUFBVSxDQUFDLEdBQUc1Qiw2REFBZSxDQUFDMUIsd0ZBQW9CLEVBQUVGLDJGQUF1QixDQUFDO0VBRXJGLE1BQU15RCxZQUFZLEdBQUduQyw4Q0FBTSxDQUFpQixJQUFJLENBQUM7RUFDakQsTUFBTW9DLFdBQVcsR0FBR3BDLDhDQUFNLENBQWlCLElBQUksQ0FBQztFQUVoRCxNQUFNO0lBQUVxQyxvQkFBb0I7SUFDMUJDLGFBQWE7SUFDYkMsaUJBQWlCO0lBQ2pCQyxlQUFlO0lBQ2ZDLGVBQWU7SUFDZkMsZUFBZTtJQUNmQztFQUFtQixDQUFDLEdBQUd6RCxnRkFBWSxDQUFDNEIsY0FBYyxDQUFDO0VBRXJEOUIsOEZBQTBCLENBQUMsY0FBYyxDQUFDO0VBRTFDLE1BQU00RCxNQUFNLEdBQUc3QywrQ0FBTyxDQUFTLE1BQU07SUFDbkMsSUFBSWUsY0FBYyxFQUFFO01BQ2xCLElBQUllLGtCQUFrQixDQUFDZixjQUFjLENBQUMsRUFBRTtRQUN0QyxPQUFPZSxrQkFBa0IsQ0FBQ2YsY0FBYyxDQUFDLENBQUM4QixNQUFNO01BQ2xEO01BRUEsSUFBSWxCLGdCQUFnQixDQUFDWixjQUFjLENBQUMsRUFBRTtRQUNwQyxPQUFPWSxnQkFBZ0IsQ0FBQ1osY0FBYyxDQUFDLENBQUM4QixNQUFNO01BQ2hEO0lBQ0Y7SUFFQSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUUsQ0FBQzlCLGNBQWMsRUFBRVksZ0JBQWdCLEVBQUVHLGtCQUFrQixDQUFDLENBQUM7RUFFMUQsTUFBTWdCLFFBQVEsR0FBRzlDLCtDQUFPLENBQUMsTUFBTTtJQUM3QixNQUFNYyxJQUFJLEdBQUdDLGNBQWMsSUFBSSxFQUFFO0lBQ2pDLE1BQU1nQyxLQUFLLEdBQUdyQixhQUFhLENBQUNaLElBQUksQ0FBQyxHQUFHWSxhQUFhLENBQUNaLElBQUksQ0FBQyxHQUFHLENBQUNBLElBQUksQ0FBQztJQUNoRSxNQUFNa0MsTUFBc0IsR0FBRyxFQUFFO0lBRWpDLEtBQUssTUFBTSxDQUFDbEMsSUFBSSxFQUFFbUMsT0FBTyxDQUFDLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDdkUsNEZBQXdCLENBQUMsRUFBRTtNQUN0RSxJQUFJbUUsS0FBSyxDQUFDSyxRQUFRLENBQUN0QyxJQUFJLENBQUMsRUFBRTtRQUN4QixNQUFNdUMsV0FBVyxHQUFHSixPQUFPLENBQUNLLE9BQU87UUFFbkMsSUFBSTlELGlGQUFZLENBQUMsQ0FBQXdDLGNBQWMsYUFBZEEsY0FBYyx1QkFBZEEsY0FBYyxDQUFFdUIsT0FBTyxLQUFJLEVBQUUsQ0FBQyxFQUFFO1VBQy9DLE1BQU1ELE9BQU8sR0FBR3BCLFFBQVEsQ0FBQ3NCLElBQUksQ0FBRUMsT0FBTyxJQUFLSixXQUFXLEtBQUs5RCxtRkFBYyxDQUFDa0UsT0FBTyxDQUFDRixPQUFPLENBQUMsQ0FBQztVQUUzRixJQUFJRCxPQUFPLEVBQUU7WUFDWE4sTUFBTSxDQUFDVSxJQUFJLENBQUNULE9BQU8sQ0FBQztVQUN0QjtRQUNGLENBQUMsTUFBTTtVQUNMLElBQUlqQixjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFFdUIsT0FBTyxJQUFLRixXQUFXLEtBQUs5RCxtRkFBYyxDQUFDeUMsY0FBYyxhQUFkQSxjQUFjLHVCQUFkQSxjQUFjLENBQUV1QixPQUFPLENBQUUsRUFBRTtZQUN4RlAsTUFBTSxDQUFDVSxJQUFJLENBQUNULE9BQU8sQ0FBQztVQUN0QjtRQUNGO01BQ0Y7SUFDRjtJQUVBLE9BQU9ELE1BQU07RUFDZixDQUFDLEVBQUUsQ0FBQ2QsUUFBUSxFQUFFRixjQUFjLGFBQWRBLGNBQWMsdUJBQWRBLGNBQWMsQ0FBRXVCLE9BQU8sRUFBRTdCLGFBQWEsRUFBRVgsY0FBYyxDQUFDLENBQUM7RUFFdEUsTUFBTTRDLGlCQUFpQixHQUFHM0QsK0NBQU8sQ0FBeUIsTUFBTTtJQUM5RCxJQUFJZSxjQUFjLEVBQUU7TUFDbEIsSUFBSVMsb0JBQW9CLENBQUNULGNBQWMsQ0FBQyxFQUFFO1FBQ3hDLE9BQU9TLG9CQUFvQixDQUFDVCxjQUFjLENBQUMsQ0FBQzZDLEtBQUssQ0FBQ0MsY0FBYztNQUNsRTtNQUVBLElBQUl0QyxlQUFlLENBQUNSLGNBQWMsQ0FBQyxFQUFFO1FBQ25DLE9BQU9RLGVBQWUsQ0FBQ1IsY0FBYyxDQUFDLENBQUM2QyxLQUFLLENBQUNDLGNBQWM7TUFDN0Q7SUFDRjtJQUVBLE9BQU8sR0FBRztFQUNaLENBQUMsRUFBRSxDQUFDOUMsY0FBYyxFQUFFUSxlQUFlLEVBQUVDLG9CQUFvQixDQUFDLENBQUM7RUFFM0QsTUFBTXNDLGlCQUFpQixHQUFHOUQsK0NBQU8sQ0FBeUIsTUFBTTtJQUM5RCxJQUFJZSxjQUFjLEVBQUU7TUFDbEIsSUFBSVcsYUFBYSxDQUFDWCxjQUFjLENBQUMsRUFBRTtRQUNqQyxNQUFNZ0QsS0FBNkIsR0FBRyxFQUFFO1FBRXhDckMsYUFBYSxDQUFDWCxjQUFjLENBQUMsQ0FBQ2lELE9BQU8sQ0FBRUMsU0FBUyxJQUFLO1VBQ25ELElBQUkxQyxlQUFlLENBQUMwQyxTQUFTLENBQUMsRUFBRTtZQUM5QkYsS0FBSyxDQUFDTCxJQUFJLENBQUNuQyxlQUFlLENBQUMwQyxTQUFTLENBQUMsQ0FBQztVQUN4QztRQUNGLENBQUMsQ0FBQztRQUVGLE9BQU9GLEtBQUssQ0FBQ0csSUFBSSxDQUFDekUsaUZBQWdCLENBQUM7TUFDckM7TUFFQSxJQUFJOEIsZUFBZSxDQUFDUixjQUFjLENBQUMsRUFBRTtRQUNuQyxPQUFPLENBQUNRLGVBQWUsQ0FBQ1IsY0FBYyxDQUFDLENBQUM7TUFDMUM7SUFDRjtJQUVBLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRSxDQUFDQSxjQUFjLEVBQUVXLGFBQWEsRUFBRUgsZUFBZSxDQUFDLENBQUM7RUFFcEQsTUFBTSxDQUFDNEMsZ0JBQWdCLEVBQUVDLG1CQUFtQixDQUFDLEdBQUdsRSxnREFBUSxDQUFnQ21FLFNBQVMsQ0FBQztFQUNsRyxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdyRSxnREFBUSxDQUFVLEtBQUssQ0FBQztFQUV4RCxNQUFNc0UsWUFBWSxHQUFHM0UsbURBQVcsQ0FBRTRFLEtBQWlDLElBQUs7SUFDdEUsTUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLGFBQWEsQ0FBQ0MsU0FBUztJQUVqRCxJQUFJRixXQUFXLEdBQUcsRUFBRSxFQUFFO01BQ3BCSCxXQUFXLENBQUVNLEtBQUssSUFBSztRQUNyQixJQUFJLENBQUNBLEtBQUssSUFBSXhDLFdBQVcsQ0FBQ3lDLE9BQU8sSUFBSTFDLFlBQVksQ0FBQzBDLE9BQU8sRUFBRTtVQUN6RCxNQUFNQyxjQUFjLEdBQUczQyxZQUFZLENBQUMwQyxPQUFPLENBQUNFLHFCQUFxQixFQUFFO1VBRW5FM0MsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNDLFFBQVEsR0FBRyxPQUFPO1VBQzVDN0MsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNFLE9BQU8sR0FBRyxHQUFHO1VBQ3ZDOUMsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNHLFVBQVUsR0FBRyxHQUFHO1VBQzFDL0MsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNJLEdBQUcsR0FBSSxHQUFFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1IsY0FBYyxDQUFDTSxHQUFHLENBQUUsSUFBRztVQUNyRWhELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDTyxJQUFJLEdBQUksR0FBRVQsY0FBYyxDQUFDUyxJQUFLLElBQUc7VUFDM0RuRCxXQUFXLENBQUN5QyxPQUFPLENBQUNHLEtBQUssQ0FBQ1EsS0FBSyxHQUFJLEdBQUVWLGNBQWMsQ0FBQ1UsS0FBTSxJQUFHO1VBQzdEcEQsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNTLEtBQUssR0FBSSxHQUFFWCxjQUFjLENBQUNXLEtBQU0sSUFBRztVQUU3REMsVUFBVSxDQUFDLE1BQU07WUFDZixJQUFJdEQsV0FBVyxDQUFDeUMsT0FBTyxFQUFFO2NBQ3ZCekMsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNHLFVBQVUsR0FBRyxLQUFLO2NBQzVDL0MsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNFLE9BQU8sR0FBRyxHQUFHO1lBQ3pDO1VBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNUO1FBRUEsT0FBTyxJQUFJO01BQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNO01BQ0xaLFdBQVcsQ0FBRU0sS0FBSyxJQUFLO1FBQ3JCLElBQUlBLEtBQUssSUFBSXhDLFdBQVcsQ0FBQ3lDLE9BQU8sRUFBRTtVQUNoQ3pDLFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDQyxRQUFRLEdBQUcsVUFBVTtVQUMvQzdDLFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDSSxHQUFHLEdBQUcsR0FBRztVQUNuQ2hELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDTyxJQUFJLEdBQUcsR0FBRztVQUNwQ25ELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDUSxLQUFLLEdBQUcsR0FBRztVQUNyQ3BELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDUyxLQUFLLEdBQUcsTUFBTTtVQUN4Q3JELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDRSxPQUFPLEdBQUcsR0FBRztVQUV2Q1EsVUFBVSxDQUFDLE1BQU07WUFDZixJQUFJdEQsV0FBVyxDQUFDeUMsT0FBTyxFQUFFO2NBQ3ZCekMsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNFLE9BQU8sR0FBRyxHQUFHO1lBQ3pDO1VBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNUO1FBRUEsT0FBTyxLQUFLO01BQ2QsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sTUFBTVMsWUFBWSxHQUFHL0YsbURBQVcsQ0FBQyxNQUFNO0lBQUE7SUFDckMsTUFBTTZFLFdBQVcsR0FBRywwQkFBQXRDLFlBQVksQ0FBQzBDLE9BQU8sMERBQXBCLHNCQUFzQkYsU0FBUyxLQUFJLENBQUM7SUFFeEQsSUFBSUYsV0FBVyxHQUFHLEVBQUUsRUFBRTtNQUNwQixJQUFJckMsV0FBVyxDQUFDeUMsT0FBTyxJQUFJMUMsWUFBWSxDQUFDMEMsT0FBTyxFQUFFO1FBQy9DLE1BQU1DLGNBQWMsR0FBRzNDLFlBQVksQ0FBQzBDLE9BQU8sQ0FBQ0UscUJBQXFCLEVBQUU7UUFFbkUzQyxXQUFXLENBQUN5QyxPQUFPLENBQUNHLEtBQUssQ0FBQ0ksR0FBRyxHQUFJLEdBQUVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixjQUFjLENBQUNNLEdBQUcsQ0FBRSxJQUFHO1FBQ3JFaEQsV0FBVyxDQUFDeUMsT0FBTyxDQUFDRyxLQUFLLENBQUNPLElBQUksR0FBSSxHQUFFVCxjQUFjLENBQUNTLElBQUssSUFBRztRQUMzRG5ELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDUSxLQUFLLEdBQUksR0FBRVYsY0FBYyxDQUFDVSxLQUFNLElBQUc7UUFDN0RwRCxXQUFXLENBQUN5QyxPQUFPLENBQUNHLEtBQUssQ0FBQ1MsS0FBSyxHQUFJLEdBQUVYLGNBQWMsQ0FBQ1csS0FBTSxJQUFHO01BQy9EO0lBQ0YsQ0FBQyxNQUFNO01BQ0wsSUFBSXJELFdBQVcsQ0FBQ3lDLE9BQU8sRUFBRTtRQUN2QnpDLFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDSSxHQUFHLEdBQUcsR0FBRztRQUNuQ2hELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDTyxJQUFJLEdBQUcsR0FBRztRQUNwQ25ELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDUSxLQUFLLEdBQUcsR0FBRztRQUNyQ3BELFdBQVcsQ0FBQ3lDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDUyxLQUFLLEdBQUcsTUFBTTtNQUMxQztJQUNGO0VBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU1HLGFBQWEsR0FBR2hHLG1EQUFXLENBQUMsTUFBTTtJQUN0Q3VFLG1CQUFtQixDQUFDQyxTQUFTLENBQUM7RUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU15QixXQUFXLEdBQUdqRyxtREFBVyxDQUFFa0csSUFBMEIsSUFBSztJQUM5RCxPQUFPLE1BQU07TUFDWDNCLG1CQUFtQixDQUFDO1FBQ2xCdEQsSUFBSSxFQUFFaUYsSUFBSSxDQUFDakYsSUFBSTtRQUNmK0IsTUFBTSxFQUFFa0QsSUFBSSxDQUFDbEQ7TUFDZixDQUFDLENBQUM7SUFDSixDQUFDO0VBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU1tRCxjQUFjLEdBQUduRyxtREFBVyxDQUFDLE1BQU07SUFDdkMsSUFBSW1DLGNBQWMsSUFBSUEsY0FBYyxDQUFDaUUsVUFBVSxFQUFFO01BQy9DakYsTUFBTSxDQUFDO1FBQ0xrRixPQUFPLEVBQUVqRixDQUFDLENBQUMseUVBQXlFLENBQUM7UUFDckZrRixJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7TUFFRjtJQUNGO0lBRUEsTUFBTTdDLE9BQU8sR0FBR3ZCLGNBQWMsR0FBR3hDLGlGQUFZLENBQUN3QyxjQUFjLENBQUN1QixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUd2QixjQUFjLENBQUN1QixPQUFPLEdBQUcsRUFBRTtJQUV4R3BCLFVBQVUsQ0FBQztNQUNULEdBQUd4RCwyRkFBdUI7TUFDMUIwSCxJQUFJLEVBQUU5QyxPQUFPO01BQ2IrQyxXQUFXLEVBQUV2RixjQUFjLElBQUk7SUFDakMsQ0FBQyxDQUFDO0lBRUZHLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztFQUNwQyxDQUFDLEVBQ0QsQ0FBQ2MsY0FBYyxFQUFFZCxRQUFRLEVBQUVGLE1BQU0sRUFBRW1CLFVBQVUsRUFBRWxCLENBQUMsRUFBRUYsY0FBYyxDQUFDLENBQ2hFO0VBRUQsTUFBTXdGLGVBQWUsR0FBRzFHLG1EQUFXLENBQUMsTUFBTTtJQUN4QyxJQUFJZ0QsTUFBTSxHQUFHLEVBQUU7SUFFZixJQUFJQyxRQUFRLENBQUMwRCxNQUFNLEVBQUU7TUFDbkIsSUFBSTFELFFBQVEsQ0FBQzBELE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDekIzRCxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2hDLElBQUk7TUFDM0IsQ0FBQyxNQUFNO1FBQ0wrQixNQUFNLEdBQUdDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0QsTUFBTTtNQUM3QjtJQUNGO0lBRUEzQixRQUFRLENBQUMsYUFBYSxFQUFFO01BQUVhLEtBQUssRUFBRTtRQUFFYztNQUFPO0lBQUUsQ0FBQyxDQUFDO0VBQ2hELENBQUMsRUFDRCxDQUFDQyxRQUFRLEVBQUU1QixRQUFRLENBQUMsQ0FDbkI7RUFFRG5CLGlEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlvRSxnQkFBZ0IsRUFBRTtNQUNwQi9DLFdBQVcsQ0FBQ1Isa0JBQWtCLENBQUM7SUFDakMsQ0FBQyxNQUFNO01BQ0xTLGFBQWEsQ0FBQ1Qsa0JBQWtCLENBQUM7SUFDbkM7RUFDRixDQUFDLEVBQUUsQ0FBQ1EsV0FBVyxFQUFFK0MsZ0JBQWdCLEVBQUU5QyxhQUFhLENBQUMsQ0FBQztFQUVsRHRCLGlEQUFTLENBQUMsTUFBTTtJQUNkd0UsV0FBVyxDQUFDLEtBQUssQ0FBQztFQUNwQixDQUFDLEVBQUUsQ0FBQ3hELGNBQWMsQ0FBQyxDQUFDO0VBRXBCaEIsaURBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSSxDQUFDK0QsaUJBQWlCLENBQUMwQyxNQUFNLEVBQUU7TUFDN0JyRixNQUFNLEVBQUU7SUFDVjtFQUNGLENBQUMsRUFBRSxDQUFDQSxNQUFNLEVBQUUyQyxpQkFBaUIsQ0FBQzBDLE1BQU0sQ0FBQyxDQUFDO0VBRXRDekcsaURBQVMsQ0FBQyxNQUFNO0lBQ2QwRyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRWQsWUFBWSxDQUFDO0lBRS9DLE9BQU8sTUFBTTtNQUNYYSxNQUFNLENBQUNFLG1CQUFtQixDQUFDLFFBQVEsRUFBRWYsWUFBWSxDQUFDO0lBQ3BELENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ0EsWUFBWSxDQUFDLENBQUM7RUFFbEIsb0JBQ0U7SUFDRSxTQUFTLEVBQUUsd0JBQXlCO0lBQ3BDLFFBQVEsRUFBRXBCLFlBQWE7SUFDdkIsR0FBRyxFQUFFcEMsWUFBYTtJQUFBLHdCQUVsQjtNQUNFLFNBQVMsRUFBRXpDLGtEQUFVLENBQUMsdUJBQXVCLEVBQUU7UUFDN0MsWUFBWSxFQUFFMkU7TUFDaEIsQ0FBQyxDQUFFO01BQ0gsR0FBRyxFQUFFakMsV0FBWTtNQUFBLHVCQUVqQix3REFBQyw4R0FBZ0I7UUFDZixZQUFZLEVBQUVzQixpQkFBa0I7UUFDaEMsU0FBUyxFQUFFLGdCQUFpQjtRQUM1QixRQUFRLEVBQUVXLFFBQVM7UUFDbkIsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDeEIsUUFBUSxDQUFDMEQsTUFBTztRQUN0QyxXQUFXLEVBQUVyRixNQUFPO1FBQ3BCLGVBQWUsRUFBRW9GLGVBQWdCO1FBQ2pDLGFBQWEsRUFBRWhFLGFBQWM7UUFDN0IsY0FBYyxFQUFFeUQsY0FBZTtRQUMvQixNQUFNLEVBQUVuRDtNQUFPO0lBQ2YsRUFDRSxlQUNOO01BQ0UsU0FBUyxFQUFFLG9CQUFxQjtNQUFBLFVBRzlCaUIsaUJBQWlCLENBQUM4QyxHQUFHLENBQUViLElBQUksaUJBQ3pCLHdEQUFDLDRIQUFzQjtRQUFBLEdBRWpCQSxJQUFJO1FBQ1IsT0FBTyxFQUFFRCxXQUFXLENBQUNDLElBQUk7TUFBRSxHQUZ0QkEsSUFBSSxDQUFDakYsSUFBSSxDQUlqQjtJQUFDLEVBRUEsZUFFTix3REFBQyxtR0FBVztNQUNWLGdCQUFnQixFQUFFcUQsZ0JBQWlCO01BQ25DLEVBQUUsRUFBRXZELGtCQUFtQjtNQUN2QixRQUFRLEVBQUVpRixhQUFjO01BQ3hCLGVBQWUsRUFBRXRFO0lBQWdCLEVBQ2pDLGVBRUYsd0RBQUMsb0hBQW9CO01BQ25CLEtBQUssRUFBRWUsb0JBQXFCO01BQzVCLFlBQVksRUFBRUU7SUFBa0IsRUFDaEMsZUFFRix3REFBQywrSEFBbUI7TUFDbEIsT0FBTyxFQUFFRSxlQUFnQjtNQUN6QixLQUFLLEVBQUVFLGtCQUFtQjtNQUMxQixZQUFZLEVBQUVIO0lBQWdCLEVBQzlCLGVBRUYsd0RBQUMsaUhBQWM7TUFDYixPQUFPLEVBQUVDLGVBQWdCO01BQ3pCLGVBQWUsRUFBRUM7SUFBZ0IsRUFDakM7RUFBQSxFQUNFO0FBRVY7QUFFQSxNQUFNa0UsTUFBTSxHQUFHdkcsOERBQU0sQ0FBQ0UsZ0JBQWdCLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBYSxDQUFDO0VBQUVzRyxLQUFLLEVBQUU7SUFBRUMsV0FBVztJQUFFQztFQUFNO0FBQWMsQ0FBQyxLQUFLO0VBQ3JHLE9BQVE7SUFDTkMsUUFBUSxFQUFFLFFBQVE7SUFFbEIseUJBQXlCLEVBQUU7TUFDekJDLE1BQU0sRUFBRSxNQUFNO01BQ2RELFFBQVEsRUFBRSxNQUFNO01BQ2hCRSxLQUFLLEVBQUVILEtBQUssQ0FBQ0ksZUFBZTtNQUM1QkMsUUFBUSxFQUFFTCxLQUFLLENBQUNNLFVBQVU7TUFDMUJwQyxRQUFRLEVBQUUsVUFBVTtNQUNwQnFDLE9BQU8sRUFBRSxNQUFNO01BQ2ZDLGFBQWEsRUFBRSxRQUFRO01BQ3ZCcEMsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUVELHFCQUFxQixFQUFFO01BQ3JCcUMsSUFBSSxFQUFFLENBQUM7TUFDUEMsV0FBVyxFQUFFVixLQUFLLENBQUNXLElBQUk7TUFDdkJDLFlBQVksRUFBRVosS0FBSyxDQUFDVztJQUN0QixDQUFDO0lBRUQsd0JBQXdCLEVBQUU7TUFDeEJ6QyxRQUFRLEVBQUUsVUFBVTtNQUNwQjJDLGVBQWUsRUFBRWIsS0FBSyxDQUFDYyxjQUFjO01BQ3JDQyxNQUFNLEVBQUUsRUFBRTtNQUNWYixNQUFNLEVBQUUsR0FBRztNQUNYOUIsVUFBVSxFQUFFLENBQUM7TUFDYkMsR0FBRyxFQUFFLENBQUM7TUFDTkcsSUFBSSxFQUFFLENBQUM7TUFDUEMsS0FBSyxFQUFFLENBQUM7TUFDUjhCLE9BQU8sRUFBRSxNQUFNO01BQ2ZTLFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxlQUFlLEVBQUVsQixXQUFXLENBQUNtQiwrQkFBK0I7TUFDNURDLFVBQVUsRUFBRSxpQ0FBaUM7TUFFN0MsY0FBYyxFQUFFO1FBQ2RqQixNQUFNLEVBQUU7TUFDVjtJQUNGLENBQUM7SUFFRCxxQkFBcUIsRUFBRTtNQUNyQk8sSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUVELG9CQUFvQixFQUFFO01BQ3BCRixPQUFPLEVBQUU7SUFDWCxDQUFDO0lBRUQsNEJBQTRCLEVBQUU7TUFDNUJhLFlBQVksRUFBRXBCLEtBQUssQ0FBQ3FCO0lBQ3RCO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFleEIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3phckI7QUFDQTs7QUFFc0Y7QUFHaEM7QUFDdEI7QUFDTjtBQUNhO0FBQUE7QUFBQTtBQW1CdkMsU0FBU2hHLFNBQVMsQ0FBRTtFQUFFSixTQUFTLEdBQUcsRUFBRTtFQUFFMEQsZ0JBQWdCO0VBQUVzRSxFQUFFO0VBQUVDLFFBQVE7RUFBRW5IO0FBQXVCLENBQUMsRUFBNkI7RUFDekgsTUFBTTtJQUFFTjtFQUFFLENBQUMsR0FBR2Qsb0dBQWMsRUFBRTtFQUU5QixNQUFNNEQsS0FBaUIsR0FBRyxDQUFDLE1BQU07SUFDL0IsTUFBTWxCLE1BQU0sR0FBRyxDQUFBc0IsZ0JBQWdCLGFBQWhCQSxnQkFBZ0IsdUJBQWhCQSxnQkFBZ0IsQ0FBRXRCLE1BQU0sS0FBSSxFQUFFO0lBQzdDLE1BQU04RixXQUFXLEdBQUd4RSxnQkFBZ0IsR0FBRzVDLGVBQWUsQ0FBQzRDLGdCQUFnQixDQUFDckQsSUFBSSxDQUFDLEdBQUd1RCxTQUFTO0lBRXpGLE9BQU8sQ0FDTDtNQUNFdUUsR0FBRyxFQUFFLGNBQWM7TUFDbkIvRixNQUFNO01BQ05nRyxLQUFLLEVBQUU1SCxDQUFDLENBQUMsY0FBYyxDQUFDO01BQ3hCNEQsS0FBSyxFQUFFOEQsV0FBVyxHQUFHQSxXQUFXLENBQUNHLElBQUksQ0FBQ2pFLEtBQUssR0FBRyxJQUFJMkQsb0RBQUksQ0FBQyxDQUFDO0lBQzFELENBQUMsRUFDRDtNQUNFSSxHQUFHLEVBQUUsUUFBUTtNQUNiL0YsTUFBTTtNQUNOZ0csS0FBSyxFQUFFNUgsQ0FBQyxDQUFDLFFBQVEsQ0FBQztNQUNsQjRELEtBQUssRUFBRThELFdBQVcsR0FBR0EsV0FBVyxDQUFDSSxNQUFNLENBQUNsRSxLQUFLLEdBQUcsSUFBSTJELG9EQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQ0Y7RUFDSCxDQUFDLEdBQUc7RUFFSixvQkFDRSx1REFBQywyREFBTztJQUNOLFNBQVMsRUFBRS9ILFNBQVU7SUFDckIsRUFBRSxFQUFFZ0ksRUFBRztJQUNQLFFBQVEsRUFBRUMsUUFBUztJQUNuQixLQUFLLEVBQUV6SCxDQUFDLENBQUMsZUFBZSxDQUFFO0lBQUEsdUJBRTFCO01BQUssU0FBUyxFQUFFLGFBQWM7TUFBQSxVQUMzQjhDLEtBQUssQ0FBQzZDLEdBQUcsQ0FBRWIsSUFBSSxpQkFDZDtRQUNFLFNBQVMsRUFBRSxPQUFRO1FBQUEsd0JBR25CO1VBQUssU0FBUyxFQUFFLFNBQVU7VUFBQSxVQUFFQSxJQUFJLENBQUM4QztRQUFLLEVBQU8sZUFFN0MsdURBQUMsMkRBQU07VUFDTCxTQUFTLEVBQUUsU0FBVTtVQUNyQixPQUFPLEVBQUUsQ0FBRTtVQUNYLGNBQWMsRUFBRSxJQUFLO1VBQ3JCLFVBQVUsRUFBRSxJQUFLO1VBQ2pCLElBQUksRUFBRSxFQUFHO1VBQ1QsTUFBTSxFQUFFOUMsSUFBSSxDQUFDbEQsTUFBTztVQUNwQixXQUFXLEVBQUUsSUFBSztVQUNsQixLQUFLLEVBQUVrRCxJQUFJLENBQUNsQjtRQUFNLEVBQ2xCO01BQUEsR0FiR2tCLElBQUksQ0FBQzZDLEdBQUcsQ0FlaEI7SUFBQztFQUNFLEVBQ0U7QUFFZDtBQUVPLE1BQU12SixXQUFXLEdBQUdpQiw2REFBTSxDQUFDTyxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBUSxDQUFDO0VBQUVpRyxLQUFLLEVBQUU7SUFBRUU7RUFBTTtBQUFTLENBQUMsS0FBSztFQUNuRixPQUFRO0lBQ04sY0FBYyxFQUFFO01BQ2RnQyxZQUFZLEVBQUVoQyxLQUFLLENBQUNpQyxjQUFjO01BQ2xDcEIsZUFBZSxFQUFFYixLQUFLLENBQUNrQyxnQkFBZ0I7TUFDdkNDLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFFRCxRQUFRLEVBQUU7TUFDUjVCLE9BQU8sRUFBRSxNQUFNO01BQ2Y2QixjQUFjLEVBQUUsZUFBZTtNQUMvQmhCLFlBQVksRUFBRXBCLEtBQUssQ0FBQ3FDO0lBQ3RCLENBQUM7SUFFRCxVQUFVLEVBQUU7TUFDVnpCLFlBQVksRUFBRVosS0FBSyxDQUFDc0M7SUFDdEI7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0Y7QUFDQTs7QUFFb0U7QUFHVDtBQUVnQztBQUNqRTtBQUNnQjtBQUNIO0FBQUE7QUFBQTtBQWF2QyxTQUFTekksU0FBUyxDQUNoQjtFQUFFZ0osWUFBWTtFQUNacEosU0FBUyxHQUFHLEVBQUU7RUFDZDZELFFBQVE7RUFDUndGLGtCQUFrQjtFQUNsQkMsV0FBVztFQUNYeEQsZUFBZTtFQUNmaEUsYUFBYTtFQUNieUQsY0FBYztFQUNkbkQ7QUFBYyxDQUFDLEVBQTZCO0VBQzlDLE1BQU07SUFBRTVCO0VBQUUsQ0FBQyxHQUFHZCxrRkFBYyxFQUFFO0VBQzlCLE1BQU07SUFBRTZKO0VBQWMsQ0FBQyxHQUFHNUssd0RBQVcsQ0FBRTJDLEtBQWdCLElBQUtBLEtBQUssQ0FBQ2tJLFFBQVEsQ0FBQztFQUUzRSxvQkFDRTtJQUFLLFNBQVMsRUFBRyxzQkFBcUJ4SixTQUFVLElBQUc2RCxRQUFRLEdBQUcsU0FBUyxHQUFHLEVBQUcsRUFBRTtJQUFBLHdCQUM3RTtNQUFLLFNBQVMsRUFBQyxPQUFPO01BQUEsd0JBQ3BCLHVEQUFDLDJEQUFNO1FBQ0wsU0FBUyxFQUFFLGVBQWdCO1FBQzNCLElBQUksZUFDRix1REFBQywyREFBSTtVQUNILFVBQVUsRUFBRSxNQUFPO1VBQ25CLFlBQVksRUFBRW1GLHNEQUFTQTtRQUFDLEVBRTNCO1FBQ0QsT0FBTyxFQUFFTSxXQUFZO1FBQ3JCLElBQUksRUFBRSxJQUFLO1FBQ1gsSUFBSSxFQUFFO01BQVEsRUFDZCxlQUNGO1FBQUssU0FBUyxFQUFFLGlCQUFrQjtRQUFBLFdBQUU5SSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQUk0QixNQUFNO01BQUEsRUFBTztJQUFBLEVBQzNELGVBQ047TUFBSyxTQUFTLEVBQUMsVUFBVTtNQUFBLHdCQUN2Qix1REFBQywyREFBTTtRQUNMLFNBQVMsRUFBRSxpQkFBa0I7UUFDN0IsT0FBTyxFQUFFLENBQUU7UUFDWCxjQUFjLEVBQUUsSUFBSztRQUNyQixJQUFJLEVBQUUsQ0FBQ21ILGFBQWM7UUFDckIsTUFBTSxFQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsRUFBRztRQUNULGNBQWM7UUFDZCxLQUFLLEVBQUVIO01BQWEsRUFDcEIsZUFDRjtRQUFLLFNBQVMsRUFBRSwyQkFBNEI7UUFBQSx3QkFDMUMsdURBQUMsMkRBQU07VUFDTCxJQUFJLGVBQ0YsdURBQUMsMkRBQUk7WUFDSCxZQUFZLEVBQUVILHNEQUFXO1lBQ3pCLElBQUksRUFBRXBGLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSztZQUM3QixNQUFNLEVBQUU7VUFBVSxFQUVwQjtVQUNGLE9BQU8sRUFBRS9CLGFBQWM7VUFDdkIsS0FBSyxFQUFDLFVBQVU7VUFDaEIsSUFBSSxFQUFFK0IsUUFBUSxHQUFHLElBQUksR0FBRyxJQUFLO1VBQzdCLE9BQU8sRUFBRXJELENBQUMsQ0FBQyxhQUFhO1FBQUUsRUFDMUIsZUFDRjtVQUFLLFNBQVMsRUFBRTtRQUFpQixFQUFHLGVBQ3BDLHVEQUFDLDJEQUFNO1VBQ0wsSUFBSSxlQUNGLHVEQUFDLDJEQUFJO1lBQ0gsWUFBWSxFQUFFMEksc0RBQWU7WUFDN0IsSUFBSSxFQUFFckYsUUFBUSxHQUFHLElBQUksR0FBRyxJQUFLO1lBQzdCLE1BQU0sRUFBRTtVQUFVLEVBRXBCO1VBQ0YsT0FBTyxFQUFFMEIsY0FBZTtVQUN4QixLQUFLLEVBQUMsVUFBVTtVQUNoQixJQUFJLEVBQUUxQixRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUs7VUFDN0IsT0FBTyxFQUFFckQsQ0FBQyxDQUFDLGFBQWE7UUFBRSxFQUMxQixlQUNGO1VBQUssU0FBUyxFQUFFO1FBQWlCLEVBQUcsZUFDcEMsdURBQUMsMkRBQU07VUFDTCxRQUFRLEVBQUUsQ0FBQzZJLGtCQUFtQjtVQUM5QixJQUFJLGVBQ0YsdURBQUMsMkRBQUk7WUFDSCxZQUFZLEVBQUVGLHVEQUFtQjtZQUNqQyxJQUFJLEVBQUV0RixRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUs7WUFDN0IsTUFBTSxFQUFFO1VBQVUsRUFFcEI7VUFDRixPQUFPLEVBQUVpQyxlQUFnQjtVQUN6QixLQUFLLEVBQUMsVUFBVTtVQUNoQixJQUFJLEVBQUVqQyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUs7VUFDN0IsT0FBTyxFQUFFckQsQ0FBQyxDQUFDLFdBQVc7UUFBRSxFQUN4QjtNQUFBLEVBQ0U7SUFBQSxFQUNGO0VBQUEsRUFDRjtBQUVWO0FBRU8sTUFBTTNCLGdCQUFnQixHQUFHZ0IsOERBQU0sQ0FBQ08sU0FBUyxDQUFDO0VBQUE7RUFBQTtBQUFBLEdBQVEsQ0FBQztFQUFFaUcsS0FBSyxFQUFFO0lBQUVFO0VBQU07QUFBUyxDQUFDLEtBQUs7RUFDeEYsT0FBUTtJQUNObUMsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQjVCLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGFBQWEsRUFBRSxRQUFRO0lBRXZCLFFBQVEsRUFBRTtNQUNSRCxPQUFPLEVBQUUsTUFBTTtNQUNmYSxZQUFZLEVBQUUsRUFBRTtNQUNoQkosVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUVELGtCQUFrQixFQUFFO01BQ2xCa0MsU0FBUyxFQUFFLFFBQVE7TUFDbkJ6QyxJQUFJLEVBQUUsQ0FBQztNQUNQSixRQUFRLEVBQUVMLEtBQUssQ0FBQ21ELGdCQUFnQjtNQUNoQ0MsVUFBVSxFQUFFcEQsS0FBSyxDQUFDcUQsa0JBQWtCO01BQ3BDQyxXQUFXLEVBQUU7SUFDZixDQUFDO0lBRUQsVUFBVSxFQUFFO01BQ1ZuQyxVQUFVLEVBQUU7SUFDZCxDQUFDO0lBRUQsZ0JBQWdCLEVBQUU7TUFDaEJoQixLQUFLLEVBQUVILEtBQUssQ0FBQ0ksZUFBZTtNQUU1QixTQUFTLEVBQUU7UUFDVEQsS0FBSyxFQUFFSCxLQUFLLENBQUN1RDtNQUNmLENBQUM7TUFFRCxVQUFVLEVBQUU7UUFDVnBELEtBQUssRUFBRUgsS0FBSyxDQUFDd0Q7TUFDZjtJQUNGLENBQUM7SUFFRCxrQkFBa0IsRUFBRTtNQUNsQk4sU0FBUyxFQUFFLFFBQVE7TUFDbkJmLE9BQU8sRUFBRSxTQUFTO01BQ2xCaUIsVUFBVSxFQUFFcEQsS0FBSyxDQUFDeUQsa0JBQWtCO01BQ3BDcEQsUUFBUSxFQUFFTCxLQUFLLENBQUMwRCxnQkFBZ0I7TUFDaENDLFVBQVUsRUFBRSxRQUFRO01BQ3BCMUQsUUFBUSxFQUFFLFFBQVE7TUFFbEIsaUJBQWlCLEVBQUU7UUFDakJtRCxVQUFVLEVBQUU7TUFDZDtJQUNGLENBQUM7SUFFRCw0QkFBNEIsRUFBRTtNQUM1QjdDLE9BQU8sRUFBRSxNQUFNO01BQ2Y2QixjQUFjLEVBQUUsUUFBUTtNQUN4QkQsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUVELGlCQUFpQixFQUFFO01BQ2pCekQsS0FBSyxFQUFFc0IsS0FBSyxDQUFDVztJQUNmLENBQUM7SUFFRCxXQUFXLEVBQUU7TUFFWCxXQUFXLEVBQUU7UUFDWEosT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUVELGtCQUFrQixFQUFFO1FBQ2xCMkMsU0FBUyxFQUFFLE1BQU07UUFDakJFLFVBQVUsRUFBRXBELEtBQUssQ0FBQzRELGtCQUFrQjtRQUNwQ3ZELFFBQVEsRUFBRUwsS0FBSyxDQUFDNkQsZ0JBQWdCO1FBQ2hDcEQsSUFBSSxFQUFFLENBQUM7UUFFUCx5Q0FBeUMsRUFBRTtVQUN6Q0osUUFBUSxFQUFFO1FBQ1o7TUFDRixDQUFDO01BRUQsNEJBQTRCLEVBQUU7UUFDNUJqQyxVQUFVLEVBQUU7TUFDZCxDQUFDO01BRUQsaUJBQWlCLEVBQUU7UUFDakJNLEtBQUssRUFBRXNCLEtBQUssQ0FBQ3FCO01BQ2Y7SUFDRjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk1GO0FBQ0E7O0FBR2dDO0FBQ047QUFFbkIsTUFBTXRKLFdBQVcsZ0JBQUdhLDBEQUFtQixDQUFrQjtFQUM5RDBCLGNBQWMsRUFBRTtJQUNkQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ25CQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDeEJ1SixnQkFBZ0IsRUFBRTtNQUNoQmxILGNBQWMsRUFBRSxJQUFJMkUsb0RBQUksQ0FBQyxDQUFDLENBQUM7TUFDM0J3QyxpQkFBaUIsRUFBRSxJQUFJeEMsb0RBQUksQ0FBQyxDQUFDLENBQUM7TUFDOUJ5QyxNQUFNLEVBQUU7UUFDTnBHLEtBQUssRUFBRSxJQUFJMkQsb0RBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIwQyxPQUFPLEVBQUUsSUFBSTFDLG9EQUFJLENBQUMsQ0FBQztNQUNyQjtJQUNGO0VBQ0YsQ0FBQztFQUNEL0csbUJBQW1CLEVBQUU7SUFDbkJDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDakJ5SixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCQyxnQkFBZ0IsRUFBRTtFQUNwQjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ3QztBQUNnQjtBQUNaOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLFNBQVMsc0VBQW1CO0FBQzVCOztBQUVBLHNDQUFzQyxpREFBVTtBQUNoRCxTQUFTLDBEQUFtQixDQUFDLDREQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQztBQUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvVG9rZW5zL0RldGFpbExpc3QudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvVG9rZW5zL0RldGFpbE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9Ib21lL1Rva2Vucy9EZXRhaWxVcHBlckJsb2NrLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9jb250ZXh0cy9zY3JlZW4vSG9tZUNvbnRleHQudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXJlYWN0L2Rpc3QvaWNvbnMvU2hvcHBpbmdDYXJ0U2ltcGxlLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24tdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9MYXlvdXQvUGFnZVdyYXBwZXInO1xuaW1wb3J0IHsgQWNjb3VudFNlbGVjdG9yTW9kYWwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvTW9kYWwvQWNjb3VudFNlbGVjdG9yTW9kYWwnO1xuaW1wb3J0IFJlY2VpdmVRck1vZGFsIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9Nb2RhbC9SZWNlaXZlTW9kYWwvUmVjZWl2ZVFyTW9kYWwnO1xuaW1wb3J0IHsgVG9rZW5zU2VsZWN0b3JNb2RhbCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9Nb2RhbC9SZWNlaXZlTW9kYWwvVG9rZW5zU2VsZWN0b3JNb2RhbCc7XG5pbXBvcnQgeyBUb2tlbkJhbGFuY2VEZXRhaWxJdGVtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL1Rva2VuSXRlbS9Ub2tlbkJhbGFuY2VEZXRhaWxJdGVtJztcbmltcG9ydCB7IERFRkFVTFRfVFJBTlNGRVJfUEFSQU1TLCBNQVBfUFJFREVGSU5FRF9CVVlfVE9LRU4sIFRSQU5TRkVSX1RSQU5TQUNUSU9OIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IEhvbWVDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9zY3JlZW4vSG9tZUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlRGVmYXVsdE5hdmlnYXRlLCB1c2VOYXZpZ2F0ZU9uQ2hhbmdlQWNjb3VudCwgdXNlTm90aWZpY2F0aW9uLCB1c2VSZWNlaXZlUVIsIHVzZVNlbGVjdG9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBEZXRhaWxNb2RhbCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvUG9wdXAvSG9tZS9Ub2tlbnMvRGV0YWlsTW9kYWwnO1xuaW1wb3J0IHsgRGV0YWlsVXBwZXJCbG9jayB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvUG9wdXAvSG9tZS9Ub2tlbnMvRGV0YWlsVXBwZXJCbG9jayc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcyc7XG5pbXBvcnQgeyBCdXlUb2tlbkluZm8sIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IFRva2VuQmFsYW5jZUl0ZW1UeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcy9iYWxhbmNlJztcbmltcG9ydCB7IGdldEFjY291bnRUeXBlLCBpc0FjY291bnRBbGwsIHNvcnRUb2tlbkJ5VmFsdWUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgU3dOdW1iZXJQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWkvZXMvbnVtYmVyJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICd1c2Vob29rcy10cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG50eXBlIEN1cnJlbnRTZWxlY3RUb2tlbiA9IHtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gV3JhcHBlckNvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJyB9OiBUaGVtZVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT17YHRva2VucyAke2NsYXNzTmFtZX1gfVxuICAgICAgcmVzb2x2ZT17ZGF0YUNvbnRleHQuYXdhaXRTdG9yZXMoWydwcmljZScsICdjaGFpblN0b3JlJywgJ2Fzc2V0UmVnaXN0cnknLCAnYmFsYW5jZSddKX1cbiAgICA+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgVG9rZW5EZXRhaWxNb2RhbElkID0gJ3Rva2VuRGV0YWlsTW9kYWxJZCc7XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBzbHVnOiB0b2tlbkdyb3VwU2x1ZyB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3Qgbm90aWZ5ID0gdXNlTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG5cbiAgY29uc3QgeyBhY3RpdmVNb2RhbCwgaW5hY3RpdmVNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuICBjb25zdCB7IGFjY291bnRCYWxhbmNlOiB7IHRva2VuQmFsYW5jZU1hcCwgdG9rZW5Hcm91cEJhbGFuY2VNYXAgfSwgdG9rZW5Hcm91cFN0cnVjdHVyZTogeyB0b2tlbkdyb3VwTWFwIH0gfSA9IHVzZUNvbnRleHQoSG9tZUNvbnRleHQpO1xuXG4gIGNvbnN0IGFzc2V0UmVnaXN0cnlNYXAgPSB1c2VTZWxlY3Rvcigocm9vdDogUm9vdFN0YXRlKSA9PiByb290LmFzc2V0UmVnaXN0cnkuYXNzZXRSZWdpc3RyeSk7XG4gIGNvbnN0IG11bHRpQ2hhaW5Bc3NldE1hcCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hc3NldFJlZ2lzdHJ5Lm11bHRpQ2hhaW5Bc3NldE1hcCk7XG4gIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZS5jdXJyZW50QWNjb3VudCk7XG4gIGNvbnN0IGFjY291bnRzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZS5hY2NvdW50cyk7XG4gIGNvbnN0IFssIHNldFN0b3JhZ2VdID0gdXNlTG9jYWxTdG9yYWdlKFRSQU5TRkVSX1RSQU5TQUNUSU9OLCBERUZBVUxUX1RSQU5TRkVSX1BBUkFNUyk7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgdG9wQmxvY2tSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHsgYWNjb3VudFNlbGVjdG9ySXRlbXMsXG4gICAgb25PcGVuUmVjZWl2ZSxcbiAgICBvcGVuU2VsZWN0QWNjb3VudCxcbiAgICBvcGVuU2VsZWN0VG9rZW4sXG4gICAgc2VsZWN0ZWRBY2NvdW50LFxuICAgIHNlbGVjdGVkTmV0d29yayxcbiAgICB0b2tlblNlbGVjdG9ySXRlbXMgfSA9IHVzZVJlY2VpdmVRUih0b2tlbkdyb3VwU2x1Zyk7XG5cbiAgdXNlTmF2aWdhdGVPbkNoYW5nZUFjY291bnQoJy9ob21lL3Rva2VucycpO1xuXG4gIGNvbnN0IHN5bWJvbCA9IHVzZU1lbW88c3RyaW5nPigoKSA9PiB7XG4gICAgaWYgKHRva2VuR3JvdXBTbHVnKSB7XG4gICAgICBpZiAobXVsdGlDaGFpbkFzc2V0TWFwW3Rva2VuR3JvdXBTbHVnXSkge1xuICAgICAgICByZXR1cm4gbXVsdGlDaGFpbkFzc2V0TWFwW3Rva2VuR3JvdXBTbHVnXS5zeW1ib2w7XG4gICAgICB9XG5cbiAgICAgIGlmIChhc3NldFJlZ2lzdHJ5TWFwW3Rva2VuR3JvdXBTbHVnXSkge1xuICAgICAgICByZXR1cm4gYXNzZXRSZWdpc3RyeU1hcFt0b2tlbkdyb3VwU2x1Z10uc3ltYm9sO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfSwgW3Rva2VuR3JvdXBTbHVnLCBhc3NldFJlZ2lzdHJ5TWFwLCBtdWx0aUNoYWluQXNzZXRNYXBdKTtcblxuICBjb25zdCBidXlJbmZvcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNsdWcgPSB0b2tlbkdyb3VwU2x1ZyB8fCAnJztcbiAgICBjb25zdCBzbHVncyA9IHRva2VuR3JvdXBNYXBbc2x1Z10gPyB0b2tlbkdyb3VwTWFwW3NsdWddIDogW3NsdWddO1xuICAgIGNvbnN0IHJlc3VsdDogQnV5VG9rZW5JbmZvW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgW3NsdWcsIGJ1eUluZm9dIG9mIE9iamVjdC5lbnRyaWVzKE1BUF9QUkVERUZJTkVEX0JVWV9UT0tFTikpIHtcbiAgICAgIGlmIChzbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICBjb25zdCBzdXBwb3J0VHlwZSA9IGJ1eUluZm8uc3VwcG9ydDtcblxuICAgICAgICBpZiAoaXNBY2NvdW50QWxsKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzIHx8ICcnKSkge1xuICAgICAgICAgIGNvbnN0IHN1cHBvcnQgPSBhY2NvdW50cy5zb21lKChhY2NvdW50KSA9PiBzdXBwb3J0VHlwZSA9PT0gZ2V0QWNjb3VudFR5cGUoYWNjb3VudC5hZGRyZXNzKSk7XG5cbiAgICAgICAgICBpZiAoc3VwcG9ydCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYnV5SW5mbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjdXJyZW50QWNjb3VudD8uYWRkcmVzcyAmJiAoc3VwcG9ydFR5cGUgPT09IGdldEFjY291bnRUeXBlKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJ1eUluZm8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFthY2NvdW50cywgY3VycmVudEFjY291bnQ/LmFkZHJlc3MsIHRva2VuR3JvdXBNYXAsIHRva2VuR3JvdXBTbHVnXSk7XG5cbiAgY29uc3QgdG9rZW5CYWxhbmNlVmFsdWUgPSB1c2VNZW1vPFN3TnVtYmVyUHJvcHNbJ3ZhbHVlJ10+KCgpID0+IHtcbiAgICBpZiAodG9rZW5Hcm91cFNsdWcpIHtcbiAgICAgIGlmICh0b2tlbkdyb3VwQmFsYW5jZU1hcFt0b2tlbkdyb3VwU2x1Z10pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuR3JvdXBCYWxhbmNlTWFwW3Rva2VuR3JvdXBTbHVnXS50b3RhbC5jb252ZXJ0ZWRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuQmFsYW5jZU1hcFt0b2tlbkdyb3VwU2x1Z10pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuQmFsYW5jZU1hcFt0b2tlbkdyb3VwU2x1Z10udG90YWwuY29udmVydGVkVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcwJztcbiAgfSwgW3Rva2VuR3JvdXBTbHVnLCB0b2tlbkJhbGFuY2VNYXAsIHRva2VuR3JvdXBCYWxhbmNlTWFwXSk7XG5cbiAgY29uc3QgdG9rZW5CYWxhbmNlSXRlbXMgPSB1c2VNZW1vPFRva2VuQmFsYW5jZUl0ZW1UeXBlW10+KCgpID0+IHtcbiAgICBpZiAodG9rZW5Hcm91cFNsdWcpIHtcbiAgICAgIGlmICh0b2tlbkdyb3VwTWFwW3Rva2VuR3JvdXBTbHVnXSkge1xuICAgICAgICBjb25zdCBpdGVtczogVG9rZW5CYWxhbmNlSXRlbVR5cGVbXSA9IFtdO1xuXG4gICAgICAgIHRva2VuR3JvdXBNYXBbdG9rZW5Hcm91cFNsdWddLmZvckVhY2goKHRva2VuU2x1ZykgPT4ge1xuICAgICAgICAgIGlmICh0b2tlbkJhbGFuY2VNYXBbdG9rZW5TbHVnXSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh0b2tlbkJhbGFuY2VNYXBbdG9rZW5TbHVnXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXRlbXMuc29ydChzb3J0VG9rZW5CeVZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuQmFsYW5jZU1hcFt0b2tlbkdyb3VwU2x1Z10pIHtcbiAgICAgICAgcmV0dXJuIFt0b2tlbkJhbGFuY2VNYXBbdG9rZW5Hcm91cFNsdWddXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW10gYXMgVG9rZW5CYWxhbmNlSXRlbVR5cGVbXTtcbiAgfSwgW3Rva2VuR3JvdXBTbHVnLCB0b2tlbkdyb3VwTWFwLCB0b2tlbkJhbGFuY2VNYXBdKTtcblxuICBjb25zdCBbY3VycmVudFRva2VuSW5mbywgc2V0Q3VycmVudFRva2VuSW5mb10gPSB1c2VTdGF0ZTxDdXJyZW50U2VsZWN0VG9rZW58IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgY29uc3QgW2lzU2hyaW5rLCBzZXRJc1Nocmlua10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBSZWFjdC5VSUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3A7XG5cbiAgICBpZiAodG9wUG9zaXRpb24gPiA2MCkge1xuICAgICAgc2V0SXNTaHJpbmsoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdG9wQmxvY2tSZWYuY3VycmVudCAmJiBjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclByb3BzID0gY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5wYWRkaW5nVG9wID0gJzAnO1xuICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUudG9wID0gYCR7TWF0aC5mbG9vcihjb250YWluZXJQcm9wcy50b3ApfXB4YDtcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLmxlZnQgPSBgJHtjb250YWluZXJQcm9wcy5sZWZ0fXB4YDtcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnJpZ2h0ID0gYCR7Y29udGFpbmVyUHJvcHMucmlnaHR9cHhgO1xuICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtjb250YWluZXJQcm9wcy53aWR0aH1weGA7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b3BCbG9ja1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUucGFkZGluZ1RvcCA9ICc4cHgnO1xuICAgICAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzU2hyaW5rKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgJiYgdG9wQmxvY2tSZWYuY3VycmVudCkge1xuICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnJpZ2h0ID0gJzAnO1xuICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9wQmxvY2tSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0b3BQb3NpdGlvbiA9IGNvbnRhaW5lclJlZi5jdXJyZW50Py5zY3JvbGxUb3AgfHwgMDtcblxuICAgIGlmICh0b3BQb3NpdGlvbiA+IDYwKSB7XG4gICAgICBpZiAodG9wQmxvY2tSZWYuY3VycmVudCAmJiBjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICBjb25zdCBjb250YWluZXJQcm9wcyA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUudG9wID0gYCR7TWF0aC5mbG9vcihjb250YWluZXJQcm9wcy50b3ApfXB4YDtcbiAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0gYCR7Y29udGFpbmVyUHJvcHMubGVmdH1weGA7XG4gICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUucmlnaHQgPSBgJHtjb250YWluZXJQcm9wcy5yaWdodH1weGA7XG4gICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtjb250YWluZXJQcm9wcy53aWR0aH1weGA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0b3BCbG9ja1JlZi5jdXJyZW50KSB7XG4gICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUucmlnaHQgPSAnMCc7XG4gICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbG9zZURldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDdXJyZW50VG9rZW5JbmZvKHVuZGVmaW5lZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNsaWNrSXRlbSA9IHVzZUNhbGxiYWNrKChpdGVtOiBUb2tlbkJhbGFuY2VJdGVtVHlwZSkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50VG9rZW5JbmZvKHtcbiAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxuICAgICAgICBzeW1ib2w6IGl0ZW0uc3ltYm9sXG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25PcGVuU2VuZEZ1bmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRBY2NvdW50ICYmIGN1cnJlbnRBY2NvdW50LmlzUmVhZE9ubHkpIHtcbiAgICAgIG5vdGlmeSh7XG4gICAgICAgIG1lc3NhZ2U6IHQoJ1RoZSBhY2NvdW50IHlvdSBhcmUgdXNpbmcgaXMgd2F0Y2gtb25seSwgeW91IGNhbm5vdCBzZW5kIGFzc2V0cyB3aXRoIGl0JyksXG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgZHVyYXRpb246IDNcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWRkcmVzcyA9IGN1cnJlbnRBY2NvdW50ID8gaXNBY2NvdW50QWxsKGN1cnJlbnRBY2NvdW50LmFkZHJlc3MpID8gJycgOiBjdXJyZW50QWNjb3VudC5hZGRyZXNzIDogJyc7XG5cbiAgICBzZXRTdG9yYWdlKHtcbiAgICAgIC4uLkRFRkFVTFRfVFJBTlNGRVJfUEFSQU1TLFxuICAgICAgZnJvbTogYWRkcmVzcyxcbiAgICAgIGRlZmF1bHRTbHVnOiB0b2tlbkdyb3VwU2x1ZyB8fCAnJ1xuICAgIH0pO1xuXG4gICAgbmF2aWdhdGUoJy90cmFuc2FjdGlvbi9zZW5kLWZ1bmQnKTtcbiAgfSxcbiAgW2N1cnJlbnRBY2NvdW50LCBuYXZpZ2F0ZSwgbm90aWZ5LCBzZXRTdG9yYWdlLCB0LCB0b2tlbkdyb3VwU2x1Z11cbiAgKTtcblxuICBjb25zdCBvbk9wZW5CdXlUb2tlbnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbGV0IHN5bWJvbCA9ICcnO1xuXG4gICAgaWYgKGJ1eUluZm9zLmxlbmd0aCkge1xuICAgICAgaWYgKGJ1eUluZm9zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBzeW1ib2wgPSBidXlJbmZvc1swXS5zbHVnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ltYm9sID0gYnV5SW5mb3NbMF0uc3ltYm9sO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlKCcvYnV5LXRva2VucycsIHsgc3RhdGU6IHsgc3ltYm9sIH0gfSk7XG4gIH0sXG4gIFtidXlJbmZvcywgbmF2aWdhdGVdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VycmVudFRva2VuSW5mbykge1xuICAgICAgYWN0aXZlTW9kYWwoVG9rZW5EZXRhaWxNb2RhbElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5hY3RpdmVNb2RhbChUb2tlbkRldGFpbE1vZGFsSWQpO1xuICAgIH1cbiAgfSwgW2FjdGl2ZU1vZGFsLCBjdXJyZW50VG9rZW5JbmZvLCBpbmFjdGl2ZU1vZGFsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc1NocmluayhmYWxzZSk7XG4gIH0sIFt0b2tlbkdyb3VwU2x1Z10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF0b2tlbkJhbGFuY2VJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGdvSG9tZSgpO1xuICAgIH1cbiAgfSwgW2dvSG9tZSwgdG9rZW5CYWxhbmNlSXRlbXMubGVuZ3RoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlUmVzaXplXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9eyd0b2tlbi1kZXRhaWwtY29udGFpbmVyJ31cbiAgICAgIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9XG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnX191cHBlci1ibG9jay13cmFwcGVyJywge1xuICAgICAgICAgICctaXMtc2hyaW5rJzogaXNTaHJpbmtcbiAgICAgICAgfSl9XG4gICAgICAgIHJlZj17dG9wQmxvY2tSZWZ9XG4gICAgICA+XG4gICAgICAgIDxEZXRhaWxVcHBlckJsb2NrXG4gICAgICAgICAgYmFsYW5jZVZhbHVlPXt0b2tlbkJhbGFuY2VWYWx1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9eydfX3N0YXRpYy1ibG9jayd9XG4gICAgICAgICAgaXNTaHJpbms9e2lzU2hyaW5rfVxuICAgICAgICAgIGlzU3VwcG9ydEJ1eVRva2Vucz17ISFidXlJbmZvcy5sZW5ndGh9XG4gICAgICAgICAgb25DbGlja0JhY2s9e2dvSG9tZX1cbiAgICAgICAgICBvbk9wZW5CdXlUb2tlbnM9e29uT3BlbkJ1eVRva2Vuc31cbiAgICAgICAgICBvbk9wZW5SZWNlaXZlPXtvbk9wZW5SZWNlaXZlfVxuICAgICAgICAgIG9uT3BlblNlbmRGdW5kPXtvbk9wZW5TZW5kRnVuZH1cbiAgICAgICAgICBzeW1ib2w9e3N5bWJvbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eydfX3Njcm9sbC1jb250YWluZXInfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW5CYWxhbmNlSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VG9rZW5CYWxhbmNlRGV0YWlsSXRlbVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uc2x1Z31cbiAgICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPERldGFpbE1vZGFsXG4gICAgICAgIGN1cnJlbnRUb2tlbkluZm89e2N1cnJlbnRUb2tlbkluZm99XG4gICAgICAgIGlkPXtUb2tlbkRldGFpbE1vZGFsSWR9XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlRGV0YWlsfVxuICAgICAgICB0b2tlbkJhbGFuY2VNYXA9e3Rva2VuQmFsYW5jZU1hcH1cbiAgICAgIC8+XG5cbiAgICAgIDxBY2NvdW50U2VsZWN0b3JNb2RhbFxuICAgICAgICBpdGVtcz17YWNjb3VudFNlbGVjdG9ySXRlbXN9XG4gICAgICAgIG9uU2VsZWN0SXRlbT17b3BlblNlbGVjdEFjY291bnR9XG4gICAgICAvPlxuXG4gICAgICA8VG9rZW5zU2VsZWN0b3JNb2RhbFxuICAgICAgICBhZGRyZXNzPXtzZWxlY3RlZEFjY291bnR9XG4gICAgICAgIGl0ZW1zPXt0b2tlblNlbGVjdG9ySXRlbXN9XG4gICAgICAgIG9uU2VsZWN0SXRlbT17b3BlblNlbGVjdFRva2VufVxuICAgICAgLz5cblxuICAgICAgPFJlY2VpdmVRck1vZGFsXG4gICAgICAgIGFkZHJlc3M9e3NlbGVjdGVkQWNjb3VudH1cbiAgICAgICAgc2VsZWN0ZWROZXR3b3JrPXtzZWxlY3RlZE5ldHdvcmt9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBUb2tlbnMgPSBzdHlsZWQoV3JhcHBlckNvbXBvbmVudCk8VGhlbWVQcm9wcz4oKHsgdGhlbWU6IHsgZXh0ZW5kVG9rZW4sIHRva2VuIH0gfTogVGhlbWVQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAnLnRva2VuLWRldGFpbC1jb250YWluZXInOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplTEcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgcGFkZGluZ1RvcDogMjA2XG4gICAgfSxcblxuICAgICcuX19zY3JvbGwtY29udGFpbmVyJzoge1xuICAgICAgZmxleDogMSxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0b2tlbi5zaXplLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0b2tlbi5zaXplXG4gICAgfSxcblxuICAgICcuX191cHBlci1ibG9jay13cmFwcGVyJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdEZWZhdWx0LFxuICAgICAgekluZGV4OiAxMCxcbiAgICAgIGhlaWdodDogMjA2LFxuICAgICAgcGFkZGluZ1RvcDogOCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBleHRlbmRUb2tlbi50b2tlbnNTY3JlZW5JbmZvQmFja2dyb3VuZENvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHksIHBhZGRpbmctdG9wIDAuMjdzIGVhc2UnLFxuXG4gICAgICAnJi4taXMtc2hyaW5rJzoge1xuICAgICAgICBoZWlnaHQ6IDEyOFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLnRva2Vucy11cHBlci1ibG9jayc6IHtcbiAgICAgIGZsZXg6IDFcbiAgICB9LFxuXG4gICAgJy5fX3Njcm9sbGluZy1ibG9jayc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0sXG5cbiAgICAnLnRva2VuLWJhbGFuY2UtZGV0YWlsLWl0ZW0nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLnNpemVYU1xuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5zO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBUb2tlbkJhbGFuY2VJdGVtVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMvYmFsYW5jZSc7XG5pbXBvcnQgeyBOdW1iZXIsIFN3TW9kYWwgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBCaWdOIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzICYge1xuICBpZDogc3RyaW5nLFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZCxcbiAgdG9rZW5CYWxhbmNlTWFwOiBSZWNvcmQ8c3RyaW5nLCBUb2tlbkJhbGFuY2VJdGVtVHlwZT4sXG4gIGN1cnJlbnRUb2tlbkluZm8/OiB7XG4gICAgc3ltYm9sOiBzdHJpbmc7XG4gICAgc2x1Zzogc3RyaW5nO1xuICB9XG59XG5cbnR5cGUgSXRlbVR5cGUgPSB7XG4gIHN5bWJvbDogc3RyaW5nLFxuICBsYWJlbDogc3RyaW5nLFxuICBrZXk6IHN0cmluZyxcbiAgdmFsdWU6IEJpZ05cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50ICh7IGNsYXNzTmFtZSA9ICcnLCBjdXJyZW50VG9rZW5JbmZvLCBpZCwgb25DYW5jZWwsIHRva2VuQmFsYW5jZU1hcCB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgaXRlbXM6IEl0ZW1UeXBlW10gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHN5bWJvbCA9IGN1cnJlbnRUb2tlbkluZm8/LnN5bWJvbCB8fCAnJztcbiAgICBjb25zdCBiYWxhbmNlSW5mbyA9IGN1cnJlbnRUb2tlbkluZm8gPyB0b2tlbkJhbGFuY2VNYXBbY3VycmVudFRva2VuSW5mby5zbHVnXSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3RyYW5zZmVyYWJsZScsXG4gICAgICAgIHN5bWJvbCxcbiAgICAgICAgbGFiZWw6IHQoJ1RyYW5zZmVyYWJsZScpLFxuICAgICAgICB2YWx1ZTogYmFsYW5jZUluZm8gPyBiYWxhbmNlSW5mby5mcmVlLnZhbHVlIDogbmV3IEJpZ04oMClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2xvY2tlZCcsXG4gICAgICAgIHN5bWJvbCxcbiAgICAgICAgbGFiZWw6IHQoJ0xvY2tlZCcpLFxuICAgICAgICB2YWx1ZTogYmFsYW5jZUluZm8gPyBiYWxhbmNlSW5mby5sb2NrZWQudmFsdWUgOiBuZXcgQmlnTigwKVxuICAgICAgfVxuICAgIF07XG4gIH0pKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3dNb2RhbFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBpZD17aWR9XG4gICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICB0aXRsZT17dCgnVG9rZW4gZGV0YWlscycpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnX19jb250YWluZXInfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J19fcm93J31cbiAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydfX2xhYmVsJ30+e2l0ZW0ubGFiZWx9PC9kaXY+XG5cbiAgICAgICAgICAgIDxOdW1iZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnX192YWx1ZSd9XG4gICAgICAgICAgICAgIGRlY2ltYWw9ezB9XG4gICAgICAgICAgICAgIGRlY2ltYWxPcGFjaXR5PXswLjQ1fVxuICAgICAgICAgICAgICBpbnRPcGFjaXR5PXswLjg1fVxuICAgICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgICAgc3VmZml4PXtpdGVtLnN5bWJvbH1cbiAgICAgICAgICAgICAgdW5pdE9wYWNpdHk9ezAuODV9XG4gICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1N3TW9kYWw+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBEZXRhaWxNb2RhbCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgICcuX19jb250YWluZXInOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1c0xHLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnU2Vjb25kYXJ5LFxuICAgICAgcGFkZGluZzogJzEycHggMTJweCA0cHgnXG4gICAgfSxcblxuICAgICcuX19yb3cnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5TTVxuICAgIH0sXG5cbiAgICAnLl9fbGFiZWwnOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmdTTVxuICAgIH1cbiAgfSk7XG59KTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBOdW1iZXIgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCB7IFN3TnVtYmVyUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpL2VzL251bWJlcic7XG5pbXBvcnQgeyBDYXJldExlZnQsIENvcHlTaW1wbGUsIFBhcGVyUGxhbmVUaWx0LCBTaG9wcGluZ0NhcnRTaW1wbGUgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHMgJiB7XG4gIGJhbGFuY2VWYWx1ZTogU3dOdW1iZXJQcm9wc1sndmFsdWUnXTtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGlzU3VwcG9ydEJ1eVRva2VuczogYm9vbGVhbjtcbiAgaXNTaHJpbms6IGJvb2xlYW47XG4gIG9uQ2xpY2tCYWNrOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5TZW5kRnVuZDogKCkgPT4gdm9pZDtcbiAgb25PcGVuQnV5VG9rZW5zOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5SZWNlaXZlOiAoKSA9PiB2b2lkO1xufTtcblxuZnVuY3Rpb24gQ29tcG9uZW50IChcbiAgeyBiYWxhbmNlVmFsdWUsXG4gICAgY2xhc3NOYW1lID0gJycsXG4gICAgaXNTaHJpbmssXG4gICAgaXNTdXBwb3J0QnV5VG9rZW5zLFxuICAgIG9uQ2xpY2tCYWNrLFxuICAgIG9uT3BlbkJ1eVRva2VucyxcbiAgICBvbk9wZW5SZWNlaXZlLFxuICAgIG9uT3BlblNlbmRGdW5kLFxuICAgIHN5bWJvbCB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgaXNTaG93QmFsYW5jZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNldHRpbmdzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9rZW5zLXVwcGVyLWJsb2NrICR7Y2xhc3NOYW1lfSAke2lzU2hyaW5rID8gJy1zaHJpbmsnIDogJyd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nX190b3AnPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXsnX19iYWNrLWJ1dHRvbid9XG4gICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjdXN0b21TaXplPXsnMjRweCd9XG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17Q2FyZXRMZWZ0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja0JhY2t9XG4gICAgICAgICAgc2l6ZT17J3hzJ31cbiAgICAgICAgICB0eXBlPXsnZ2hvc3QnfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J19fdG9rZW4tZGlzcGxheSd9Pnt0KCdUb2tlbicpfToge3N5bWJvbH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J19fYm90dG9tJz5cbiAgICAgICAgPE51bWJlclxuICAgICAgICAgIGNsYXNzTmFtZT17J19fYmFsYW5jZS12YWx1ZSd9XG4gICAgICAgICAgZGVjaW1hbD17MH1cbiAgICAgICAgICBkZWNpbWFsT3BhY2l0eT17MC40NX1cbiAgICAgICAgICBoaWRlPXshaXNTaG93QmFsYW5jZX1cbiAgICAgICAgICBwcmVmaXg9JyQnXG4gICAgICAgICAgc2l6ZT17Mzh9XG4gICAgICAgICAgc3ViRmxvYXROdW1iZXJcbiAgICAgICAgICB2YWx1ZT17YmFsYW5jZVZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J19fYWN0aW9uLWJ1dHRvbi1jb250YWluZXInfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtDb3B5U2ltcGxlfVxuICAgICAgICAgICAgICAgIHNpemU9e2lzU2hyaW5rID8gJ3NtJyA6ICdtZCd9XG4gICAgICAgICAgICAgICAgd2VpZ2h0PXsnZHVvdG9uZSd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgb25DbGljaz17b25PcGVuUmVjZWl2ZX1cbiAgICAgICAgICAgIHNoYXBlPSdzcXVpcmNsZSdcbiAgICAgICAgICAgIHNpemU9e2lzU2hyaW5rID8gJ3hzJyA6ICdzbSd9XG4gICAgICAgICAgICB0b29sdGlwPXt0KCdHZXQgYWRkcmVzcycpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydfX2J1dHRvbi1zcGFjZSd9IC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17UGFwZXJQbGFuZVRpbHR9XG4gICAgICAgICAgICAgICAgc2l6ZT17aXNTaHJpbmsgPyAnc20nIDogJ21kJ31cbiAgICAgICAgICAgICAgICB3ZWlnaHQ9eydkdW90b25lJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5TZW5kRnVuZH1cbiAgICAgICAgICAgIHNoYXBlPSdzcXVpcmNsZSdcbiAgICAgICAgICAgIHNpemU9e2lzU2hyaW5rID8gJ3hzJyA6ICdzbSd9XG4gICAgICAgICAgICB0b29sdGlwPXt0KCdTZW5kIHRva2VucycpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydfX2J1dHRvbi1zcGFjZSd9IC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1N1cHBvcnRCdXlUb2tlbnN9XG4gICAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtTaG9wcGluZ0NhcnRTaW1wbGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17aXNTaHJpbmsgPyAnc20nIDogJ21kJ31cbiAgICAgICAgICAgICAgICB3ZWlnaHQ9eydkdW90b25lJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5CdXlUb2tlbnN9XG4gICAgICAgICAgICBzaGFwZT0nc3F1aXJjbGUnXG4gICAgICAgICAgICBzaXplPXtpc1NocmluayA/ICd4cycgOiAnc20nfVxuICAgICAgICAgICAgdG9vbHRpcD17dCgnQnV5IHRva2VuJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IERldGFpbFVwcGVyQmxvY2sgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBwYWRkaW5nOiAnMHB4IDhweCAyNHB4IDhweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXG4gICAgJy5fX3RvcCc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLl9fdG9rZW4tZGlzcGxheSc6IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmbGV4OiAxLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzQsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzQsXG4gICAgICBtYXJnaW5SaWdodDogNDBcbiAgICB9LFxuXG4gICAgJy5hbnQtYnRuJzoge1xuICAgICAgdHJhbnNpdGlvbjogJ3dpZHRoLCBoZWlnaHQsIHBhZGRpbmcgMHMnXG4gICAgfSxcblxuICAgICcuX19iYWNrLWJ1dHRvbic6IHtcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDEsXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQzXG4gICAgICB9LFxuXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5fX2JhbGFuY2UtdmFsdWUnOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzBweCA4cHgnLFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmcxLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzEsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgJy5hbnQtdHlwb2dyYXBoeSc6IHtcbiAgICAgICAgbGluZUhlaWdodDogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuX19hY3Rpb24tYnV0dG9uLWNvbnRhaW5lcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICcyNHB4IDhweCAwIDhweCdcbiAgICB9LFxuXG4gICAgJy5fX2J1dHRvbi1zcGFjZSc6IHtcbiAgICAgIHdpZHRoOiB0b2tlbi5zaXplXG4gICAgfSxcblxuICAgICcmLi1zaHJpbmsnOiB7XG5cbiAgICAgICcuX19ib3R0b20nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgfSxcblxuICAgICAgJy5fX2JhbGFuY2UtdmFsdWUnOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzIsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmcyLFxuICAgICAgICBmbGV4OiAxLFxuXG4gICAgICAgICcuYW50LW51bWJlci1wcmVmaXgsIC5hbnQtbnVtYmVyLWludGVnZXInOiB7XG4gICAgICAgICAgZm9udFNpemU6ICdpbmhlcml0ICFpbXBvcnRhbnQnXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICcuX19hY3Rpb24tYnV0dG9uLWNvbnRhaW5lcic6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMFxuICAgICAgfSxcblxuICAgICAgJy5fX2J1dHRvbi1zcGFjZSc6IHtcbiAgICAgICAgd2lkdGg6IHRva2VuLnNpemVYU1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbiBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBIb21lQ29udGV4dFR5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL2NvbnRleHQnO1xuaW1wb3J0IEJpZ04gZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBIb21lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8SG9tZUNvbnRleHRUeXBlPih7XG4gIGFjY291bnRCYWxhbmNlOiB7XG4gICAgdG9rZW5CYWxhbmNlTWFwOiB7fSxcbiAgICB0b2tlbkdyb3VwQmFsYW5jZU1hcDoge30sXG4gICAgdG90YWxCYWxhbmNlSW5mbzoge1xuICAgICAgY29udmVydGVkVmFsdWU6IG5ldyBCaWdOKDApLFxuICAgICAgY29udmVydGVkMjRoVmFsdWU6IG5ldyBCaWdOKDApLFxuICAgICAgY2hhbmdlOiB7XG4gICAgICAgIHZhbHVlOiBuZXcgQmlnTigwKSxcbiAgICAgICAgcGVyY2VudDogbmV3IEJpZ04oMClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRva2VuR3JvdXBTdHJ1Y3R1cmU6IHtcbiAgICB0b2tlbkdyb3VwTWFwOiB7fSxcbiAgICBzb3J0ZWRUb2tlbkdyb3VwczogW10sXG4gICAgc29ydGVkVG9rZW5TbHVnczogW11cbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjgwXCIsXG4gICAgY3k6IFwiMjE2XCIsXG4gICAgcjogXCIyMFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxODRcIixcbiAgICBjeTogXCIyMTZcIixcbiAgICByOiBcIjIwXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00Mi4zLDcySDIyMS43bC0yNC4xLDg0LjRBMTYsMTYsMCwwLDEsMTgyLjIsMTY4SDgxLjhhMTYsMTYsMCwwLDEtMTUuNC0xMS42TDMyLjUsMzcuOEE4LDgsMCwwLDAsMjQuOCwzMkgxMlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZHVvdG9uZVwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00Mi4zLDcySDIyMS43bC0yNi40LDkyLjRBMTUuOSwxNS45LDAsMCwxLDE3OS45LDE3Nkg4NC4xYTE1LjksMTUuOSwwLDAsMS0xNS40LTExLjZaXCIsXG4gICAgb3BhY2l0eTogXCIwLjJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiODBcIixcbiAgICBjeTogXCIyMTZcIixcbiAgICByOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjE4NFwiLFxuICAgIGN5OiBcIjIxNlwiLFxuICAgIHI6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQyLjMsNzJIMjIxLjdsLTI2LjQsOTIuNEExNS45LDE1LjksMCwwLDEsMTc5LjksMTc2SDg0LjFhMTUuOSwxNS45LDAsMCwxLTE1LjQtMTEuNkwzMi41LDM3LjhBOCw4LDAsMCwwLDI0LjgsMzJIOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZmlsbFwiLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNOTYsMjE2YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDk2LDIxNlptODgtMTZhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsMTg0LDIwMFpNMjI4LjEsNjcuMmE4LjEsOC4xLDAsMCwwLTYuNC0zLjJINDguM0w0MC4yLDM1LjZBMTYuMSwxNi4xLDAsMCwwLDI0LjgsMjRIOEE4LDgsMCwwLDAsOCw0MEgyNC44bDkuOCwzNC4xdi4yTDYxLDE2Ni42QTI0LjEsMjQuMSwwLDAsMCw4NC4xLDE4NGg5NS44QTI0LjEsMjQuMSwwLDAsMCwyMDMsMTY2LjZsMjYuNC05Mi40QTgsOCwwLDAsMCwyMjguMSw2Ny4yWlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjgwXCIsXG4gICAgY3k6IFwiMjE2XCIsXG4gICAgcjogXCIxNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxODRcIixcbiAgICBjeTogXCIyMTZcIixcbiAgICByOiBcIjE0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00Mi4zLDcySDIyMS43bC0yNi40LDkyLjRBMTUuOSwxNS45LDAsMCwxLDE3OS45LDE3Nkg4NC4xYTE1LjksMTUuOSwwLDAsMS0xNS40LTExLjZMMzIuNSwzNy44QTgsOCwwLDAsMCwyNC44LDMySDhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInRoaW5cIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI4MFwiLFxuICAgIGN5OiBcIjIxNlwiLFxuICAgIHI6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTg0XCIsXG4gICAgY3k6IFwiMjE2XCIsXG4gICAgcjogXCIxMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDIuMyw3MkgyMjEuN2wtMjYuNCw5Mi40QTE1LjksMTUuOSwwLDAsMSwxNzkuOSwxNzZIODQuMWExNS45LDE1LjksMCwwLDEtMTUuNC0xMS42TDMyLjUsMzcuOEE4LDgsMCwwLDAsMjQuOCwzMkg4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInJlZ3VsYXJcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI4MFwiLFxuICAgIGN5OiBcIjIxNlwiLFxuICAgIHI6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTg0XCIsXG4gICAgY3k6IFwiMjE2XCIsXG4gICAgcjogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDIuMyw3MkgyMjEuN2wtMjYuNCw5Mi40QTE1LjksMTUuOSwwLDAsMSwxNzkuOSwxNzZIODQuMWExNS45LDE1LjksMCwwLDEtMTUuNC0xMS42TDMyLjUsMzcuOEE4LDgsMCwwLDAsMjQuOCwzMkg4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBTaG9wcGluZ0NhcnRTaW1wbGUgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuU2hvcHBpbmdDYXJ0U2ltcGxlLmRpc3BsYXlOYW1lID0gXCJTaG9wcGluZ0NhcnRTaW1wbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdDYXJ0U2ltcGxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2hvcHBpbmdDYXJ0U2ltcGxlLmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJQYWdlV3JhcHBlciIsIkFjY291bnRTZWxlY3Rvck1vZGFsIiwiUmVjZWl2ZVFyTW9kYWwiLCJUb2tlbnNTZWxlY3Rvck1vZGFsIiwiVG9rZW5CYWxhbmNlRGV0YWlsSXRlbSIsIkRFRkFVTFRfVFJBTlNGRVJfUEFSQU1TIiwiTUFQX1BSRURFRklORURfQlVZX1RPS0VOIiwiVFJBTlNGRVJfVFJBTlNBQ1RJT04iLCJEYXRhQ29udGV4dCIsIkhvbWVDb250ZXh0IiwidXNlRGVmYXVsdE5hdmlnYXRlIiwidXNlTmF2aWdhdGVPbkNoYW5nZUFjY291bnQiLCJ1c2VOb3RpZmljYXRpb24iLCJ1c2VSZWNlaXZlUVIiLCJ1c2VTZWxlY3RvciIsIkRldGFpbE1vZGFsIiwiRGV0YWlsVXBwZXJCbG9jayIsImdldEFjY291bnRUeXBlIiwiaXNBY2NvdW50QWxsIiwic29ydFRva2VuQnlWYWx1ZSIsIk1vZGFsQ29udGV4dCIsImNsYXNzTmFtZXMiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJzdHlsZWQiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJXcmFwcGVyQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwiZGF0YUNvbnRleHQiLCJhd2FpdFN0b3JlcyIsIlRva2VuRGV0YWlsTW9kYWxJZCIsIkNvbXBvbmVudCIsInNsdWciLCJ0b2tlbkdyb3VwU2x1ZyIsIm5vdGlmeSIsInQiLCJuYXZpZ2F0ZSIsImdvSG9tZSIsImFjdGl2ZU1vZGFsIiwiaW5hY3RpdmVNb2RhbCIsImFjY291bnRCYWxhbmNlIiwidG9rZW5CYWxhbmNlTWFwIiwidG9rZW5Hcm91cEJhbGFuY2VNYXAiLCJ0b2tlbkdyb3VwU3RydWN0dXJlIiwidG9rZW5Hcm91cE1hcCIsImFzc2V0UmVnaXN0cnlNYXAiLCJyb290IiwiYXNzZXRSZWdpc3RyeSIsIm11bHRpQ2hhaW5Bc3NldE1hcCIsInN0YXRlIiwiY3VycmVudEFjY291bnQiLCJhY2NvdW50U3RhdGUiLCJhY2NvdW50cyIsInNldFN0b3JhZ2UiLCJjb250YWluZXJSZWYiLCJ0b3BCbG9ja1JlZiIsImFjY291bnRTZWxlY3Rvckl0ZW1zIiwib25PcGVuUmVjZWl2ZSIsIm9wZW5TZWxlY3RBY2NvdW50Iiwib3BlblNlbGVjdFRva2VuIiwic2VsZWN0ZWRBY2NvdW50Iiwic2VsZWN0ZWROZXR3b3JrIiwidG9rZW5TZWxlY3Rvckl0ZW1zIiwic3ltYm9sIiwiYnV5SW5mb3MiLCJzbHVncyIsInJlc3VsdCIsImJ1eUluZm8iLCJPYmplY3QiLCJlbnRyaWVzIiwiaW5jbHVkZXMiLCJzdXBwb3J0VHlwZSIsInN1cHBvcnQiLCJhZGRyZXNzIiwic29tZSIsImFjY291bnQiLCJwdXNoIiwidG9rZW5CYWxhbmNlVmFsdWUiLCJ0b3RhbCIsImNvbnZlcnRlZFZhbHVlIiwidG9rZW5CYWxhbmNlSXRlbXMiLCJpdGVtcyIsImZvckVhY2giLCJ0b2tlblNsdWciLCJzb3J0IiwiY3VycmVudFRva2VuSW5mbyIsInNldEN1cnJlbnRUb2tlbkluZm8iLCJ1bmRlZmluZWQiLCJpc1NocmluayIsInNldElzU2hyaW5rIiwiaGFuZGxlU2Nyb2xsIiwiZXZlbnQiLCJ0b3BQb3NpdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJzY3JvbGxUb3AiLCJ2YWx1ZSIsImN1cnJlbnQiLCJjb250YWluZXJQcm9wcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlIiwicG9zaXRpb24iLCJvcGFjaXR5IiwicGFkZGluZ1RvcCIsInRvcCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwic2V0VGltZW91dCIsImhhbmRsZVJlc2l6ZSIsIm9uQ2xvc2VEZXRhaWwiLCJvbkNsaWNrSXRlbSIsIml0ZW0iLCJvbk9wZW5TZW5kRnVuZCIsImlzUmVhZE9ubHkiLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwiZnJvbSIsImRlZmF1bHRTbHVnIiwib25PcGVuQnV5VG9rZW5zIiwibGVuZ3RoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJUb2tlbnMiLCJ0aGVtZSIsImV4dGVuZFRva2VuIiwidG9rZW4iLCJvdmVyZmxvdyIsImhlaWdodCIsImNvbG9yIiwiY29sb3JUZXh0TGlnaHQxIiwiZm9udFNpemUiLCJmb250U2l6ZUxHIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwicGFkZGluZ0xlZnQiLCJzaXplIiwicGFkZGluZ1JpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JCZ0RlZmF1bHQiLCJ6SW5kZXgiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZEltYWdlIiwidG9rZW5zU2NyZWVuSW5mb0JhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJtYXJnaW5Cb3R0b20iLCJzaXplWFMiLCJOdW1iZXIiLCJTd01vZGFsIiwiQmlnTiIsImlkIiwib25DYW5jZWwiLCJiYWxhbmNlSW5mbyIsImtleSIsImxhYmVsIiwiZnJlZSIsImxvY2tlZCIsImJvcmRlclJhZGl1cyIsImJvcmRlclJhZGl1c0xHIiwiY29sb3JCZ1NlY29uZGFyeSIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblNNIiwicGFkZGluZ1NNIiwiQnV0dG9uIiwiSWNvbiIsIkNhcmV0TGVmdCIsIkNvcHlTaW1wbGUiLCJQYXBlclBsYW5lVGlsdCIsIlNob3BwaW5nQ2FydFNpbXBsZSIsImJhbGFuY2VWYWx1ZSIsImlzU3VwcG9ydEJ1eVRva2VucyIsIm9uQ2xpY2tCYWNrIiwiaXNTaG93QmFsYW5jZSIsInNldHRpbmdzIiwidGV4dEFsaWduIiwiZm9udFNpemVIZWFkaW5nNCIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzQiLCJtYXJnaW5SaWdodCIsImNvbG9yVGV4dExpZ2h0MyIsImNvbG9yVGV4dExpZ2h0NCIsImxpbmVIZWlnaHRIZWFkaW5nMSIsImZvbnRTaXplSGVhZGluZzEiLCJ3aGl0ZVNwYWNlIiwibGluZUhlaWdodEhlYWRpbmcyIiwiZm9udFNpemVIZWFkaW5nMiIsImNyZWF0ZUNvbnRleHQiLCJ0b3RhbEJhbGFuY2VJbmZvIiwiY29udmVydGVkMjRoVmFsdWUiLCJjaGFuZ2UiLCJwZXJjZW50Iiwic29ydGVkVG9rZW5Hcm91cHMiLCJzb3J0ZWRUb2tlblNsdWdzIl0sInNvdXJjZVJvb3QiOiIifQ==