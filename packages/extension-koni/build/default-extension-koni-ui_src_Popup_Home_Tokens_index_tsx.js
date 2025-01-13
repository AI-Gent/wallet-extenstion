"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_Tokens_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/Tokens/UpperBlock.tsx":
/*!*****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Tokens/UpperBlock.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpperBlock": () => (/* binding */ UpperBlock)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/number/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/tag/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Eye.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/EyeSlash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CopySimple.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PaperPlaneTilt.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShoppingCartSimple.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0









function Component({
  className = '',
  isPriceDecrease,
  isShrink,
  onOpenBuyTokens,
  onOpenReceive,
  onOpenSendFund,
  totalChangePercent,
  totalChangeValue,
  totalValue
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const {
    isShowBalance
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.settings);
  const onChangeShowBalance = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_1__.saveShowBalance)(!isShowBalance).catch(console.error);
  }, [isShowBalance]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `tokens-upper-block ${className} ${isShrink ? '-shrink' : ''}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "__total-balance-value-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "__total-balance-value-content",
        onClick: isShrink ? onChangeShowBalance : undefined,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: '__total-balance-value',
          decimal: 0,
          decimalOpacity: 0.45,
          hide: !isShowBalance,
          prefix: "$",
          size: 38,
          subFloatNumber: true,
          value: totalValue
        })
      })
    }), !isShrink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: '__balance-change-container',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "button-change-show-balance",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
          phosphorIcon: !isShowBalance ? phosphor_react__WEBPACK_IMPORTED_MODULE_7__["default"] : phosphor_react__WEBPACK_IMPORTED_MODULE_8__["default"]
        }),
        onClick: onChangeShowBalance,
        size: "xs",
        tooltip: isShowBalance ? t('Hide balance') : t('Show balance'),
        type: "ghost"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: '__balance-change-value',
        decimal: 0,
        decimalOpacity: 1,
        hide: !isShowBalance,
        prefix: isPriceDecrease ? '- $' : '+ $',
        value: totalChangeValue
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: `__balance-change-percent ${isPriceDecrease ? '-decrease' : ''}`,
        shape: 'round',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
          decimal: 0,
          decimalOpacity: 1,
          prefix: isPriceDecrease ? '-' : '+',
          suffix: '%',
          value: totalChangePercent,
          weight: 700
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: '__action-button-container',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
          size: isShrink ? 'sm' : 'md',
          weight: 'duotone'
        }),
        onClick: onOpenReceive,
        shape: "squircle",
        size: isShrink ? 'xs' : 'sm',
        tooltip: t('Get address')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: '__button-space'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_11__["default"],
          size: isShrink ? 'sm' : 'md',
          weight: 'duotone'
        }),
        onClick: onOpenSendFund,
        shape: "squircle",
        size: isShrink ? 'xs' : 'sm',
        tooltip: t('Send tokens')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: '__button-space'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
          size: isShrink ? 'sm' : 'md',
          weight: 'duotone'
        }),
        onClick: onOpenBuyTokens,
        shape: "squircle",
        size: isShrink ? 'xs' : 'sm',
        tooltip: t('Buy token')
      })]
    })]
  });
}
const UpperBlock = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(Component).withConfig({
  displayName: "UpperBlock",
  componentId: "sc-12e0a6v-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    padding: '0px 8px 24px 8px',
    display: 'flex',
    flexDirection: 'column',
    '.__total-balance-value': {
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
    '.ant-btn': {
      transition: 'width, height, padding 0s'
    },
    '.__balance-change-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: token.sizeXS,
      '.button-change-show-balance': {
        color: token.colorWhite,
        '&:hover': {
          color: token['gray-5']
        }
      },
      '.ant-typography': {
        lineHeight: 'inherit',
        // todo: may update number component to clear this !important
        color: 'inherit !important',
        fontSize: 'inherit !important'
      }
    },
    '.__balance-change-value': {
      lineHeight: token.lineHeight
    },
    '.__balance-change-percent': {
      backgroundColor: token['cyan-6'],
      color: token['green-1'],
      marginInlineEnd: 0,
      display: 'flex',
      '&.-decrease': {
        backgroundColor: token.colorError,
        color: token.colorTextLight1
      },
      '.ant-number': {
        fontSize: token.fontSizeXS
      }
    },
    '.__action-button-container': {
      display: 'flex',
      justifyContent: 'center',
      padding: '26px 8px 0 8px'
    },
    '.__button-space': {
      width: token.size
    },
    '&.-shrink': {
      paddingBottom: 32,
      flexDirection: 'row',
      '.__total-balance-value-container': {
        flex: 1
      },
      '.__total-balance-value-content': {
        cursor: 'pointer',
        width: 'fit-content'
      },
      '.__total-balance-value': {
        textAlign: 'left',
        lineHeight: token.lineHeightHeading2,
        fontSize: token.fontSizeHeading2,
        '.ant-number-prefix, .ant-number-integer, .ant-number-hide-content': {
          fontSize: 'inherit !important'
        }
      },
      '.__balance-change-container': {
        display: 'none'
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

/***/ "../extension-koni-ui/src/Popup/Home/Tokens/index.tsx":
/*!************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Tokens/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_AccountSelectorModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/AccountSelectorModal */ "../extension-koni-ui/src/components/Modal/AccountSelectorModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_ReceiveModal_ReceiveQrModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/ReceiveModal/ReceiveQrModal */ "../extension-koni-ui/src/components/Modal/ReceiveModal/ReceiveQrModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_ReceiveModal_TokensSelectorModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/ReceiveModal/TokensSelectorModal */ "../extension-koni-ui/src/components/Modal/ReceiveModal/TokensSelectorModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_TokenItem_TokenGroupBalanceItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/TokenItem/TokenGroupBalanceItem */ "../extension-koni-ui/src/components/TokenItem/TokenGroupBalanceItem.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_screen_HomeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/screen/HomeContext */ "../extension-koni-ui/src/contexts/screen/HomeContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_home_useReceiveQR__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/home/useReceiveQR */ "../extension-koni-ui/src/hooks/screen/home/useReceiveQR.ts");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Home_Tokens_UpperBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Home/Tokens/UpperBlock */ "../extension-koni-ui/src/Popup/Home/Tokens/UpperBlock.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-alert/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Coins.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

























const Component = () => {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_8__.useSetCurrentPage)('/home/tokens');
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const [isShrink, setIsShrink] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useNavigate)();
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)(null);
  const topBlockRef = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)(null);
  const {
    accountBalance: {
      tokenGroupBalanceMap,
      totalBalanceInfo
    },
    tokenGroupStructure: {
      sortedTokenGroups
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useContext)(_subwallet_extension_koni_ui_contexts_screen_HomeContext__WEBPACK_IMPORTED_MODULE_7__.HomeContext);
  const currentAccount = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useSelector)(state => state.accountState.currentAccount);
  const notify = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    accountSelectorItems,
    onOpenReceive,
    openSelectAccount,
    openSelectToken,
    selectedAccount,
    selectedNetwork,
    tokenSelectorItems
  } = (0,_subwallet_extension_koni_ui_hooks_screen_home_useReceiveQR__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const isZkModeSyncing = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useSelector)(state => state.mantaPay.isSyncing);
  const zkModeSyncProgress = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useSelector)(state => state.mantaPay.progress);
  const [, setStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_17__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__.TRANSFER_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TRANSFER_PARAMS);
  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(event => {
    const topPosition = event.currentTarget.scrollTop;
    if (topPosition > 80) {
      setIsShrink(value => {
        if (!value && topBlockRef.current && containerRef.current) {
          const containerProps = containerRef.current.getBoundingClientRect();
          topBlockRef.current.style.position = 'fixed';
          topBlockRef.current.style.top = `${Math.floor(containerProps.top)}px`;
          topBlockRef.current.style.left = `${containerProps.left}px`;
          topBlockRef.current.style.right = `${containerProps.right}px`;
          topBlockRef.current.style.width = `${containerProps.width}px`;
          topBlockRef.current.style.opacity = '0';
          topBlockRef.current.style.paddingTop = '0';
          setTimeout(() => {
            if (topBlockRef.current) {
              topBlockRef.current.style.opacity = '1';
              topBlockRef.current.style.paddingTop = '32px';
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
          topBlockRef.current.style.paddingTop = '0';
          setTimeout(() => {
            if (topBlockRef.current) {
              topBlockRef.current.style.opacity = '1';
              topBlockRef.current.style.paddingTop = '32px';
            }
          }, 100);
        }
        return false;
      });
    }
  }, []);
  const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(() => {
    var _containerRef$current;
    const topPosition = ((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.scrollTop) || 0;
    if (topPosition > 80) {
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
  const isTotalBalanceDecrease = totalBalanceInfo.change.status === 'decrease';
  const onClickItem = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(item => {
    return () => {
      navigate(`/home/tokens/detail/${item.slug}`);
    };
  }, [navigate]);
  const onClickManageToken = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(() => {
    navigate('/settings/tokens/manage');
  }, [navigate]);
  const onOpenSendFund = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(() => {
    if (currentAccount && currentAccount.isReadOnly) {
      notify({
        message: t('The account you are using is watch-only, you cannot send assets with it'),
        type: 'info',
        duration: 3
      });
      return;
    }
    const address = currentAccount ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_13__.isAccountAll)(currentAccount.address) ? '' : currentAccount.address : '';
    setStorage({
      ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TRANSFER_PARAMS,
      from: address
    });
    navigate('/transaction/send-fund');
  }, [currentAccount, navigate, notify, t, setStorage]);
  const onOpenBuyTokens = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(() => {
    navigate('/buy-tokens');
  }, [navigate]);
  const tokenGroupBalanceItems = (0,react__WEBPACK_IMPORTED_MODULE_15__.useMemo)(() => {
    const result = [];
    sortedTokenGroups.forEach(tokenGroupSlug => {
      if (tokenGroupBalanceMap[tokenGroupSlug]) {
        result.push(tokenGroupBalanceMap[tokenGroupSlug]);
      }
    });
    const sortedResult = result.sort(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_13__.sortTokenByValue);
    console.log('Token Group Balance Items:', sortedResult);
    console.log('Token Group Balance Map:', tokenGroupBalanceMap); // Log the items here

    return sortedResult;
  }, [sortedTokenGroups, tokenGroupBalanceMap]);
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    className: 'tokens-screen-container',
    onScroll: handleScroll,
    ref: containerRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('__upper-block-wrapper', {
        '-is-shrink': isShrink,
        '-decrease': isTotalBalanceDecrease
      }),
      ref: topBlockRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_extension_koni_ui_Popup_Home_Tokens_UpperBlock__WEBPACK_IMPORTED_MODULE_12__.UpperBlock, {
        isPriceDecrease: isTotalBalanceDecrease,
        isShrink: isShrink,
        onOpenBuyTokens: onOpenBuyTokens,
        onOpenReceive: onOpenReceive,
        onOpenSendFund: onOpenSendFund,
        totalChangePercent: totalBalanceInfo.change.percent,
        totalChangeValue: totalBalanceInfo.change.value,
        totalValue: totalBalanceInfo.convertedValue
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: '__scroll-container',
      children: [isZkModeSyncing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()('zk-mode-alert-area'),
        description: t('This may take a few minutes. Please keep the app open'),
        title: t('Zk mode is syncing: {{percent}}%', {
          replace: {
            percent: zkModeSyncProgress || '0'
          }
        }),
        type: 'warning'
      }), tokenGroupBalanceItems.map(item => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_extension_koni_ui_components_TokenItem_TokenGroupBalanceItem__WEBPACK_IMPORTED_MODULE_4__.TokenGroupBalanceItem, {
          ...item,
          onPressItem: onClickItem(item)
        }, item.slug);
      }), !tokenGroupBalanceItems.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
        className: '__empty-list',
        emptyMessage: t('Try searching or importing one'),
        emptyTitle: t('No tokens found'),
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: '__scroll-footer',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"]
          }),
          onClick: onClickManageToken,
          size: 'xs',
          type: 'ghost',
          children: t('Manage tokens')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_extension_koni_ui_components_Modal_AccountSelectorModal__WEBPACK_IMPORTED_MODULE_1__.AccountSelectorModal, {
      items: accountSelectorItems,
      onSelectItem: openSelectAccount
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_extension_koni_ui_components_Modal_ReceiveModal_TokensSelectorModal__WEBPACK_IMPORTED_MODULE_3__.TokensSelectorModal, {
      address: selectedAccount,
      items: tokenSelectorItems,
      onSelectItem: openSelectToken
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_extension_koni_ui_components_Modal_ReceiveModal_ReceiveQrModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      address: selectedAccount,
      selectedNetwork: selectedNetwork
    })]
  });
};
const WrapperComponent = ({
  className = ''
}) => {
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_15__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_6__.DataContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `tokens ${className}`,
    resolve: dataContext.awaitStores(['price', 'chainStore', 'assetRegistry', 'balance', 'mantaPay']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(Component, {})
  });
};
const Tokens = (0,styled_components__WEBPACK_IMPORTED_MODULE_25__["default"])(WrapperComponent).withConfig({
  displayName: "Tokens",
  componentId: "sc-xas0kf-0"
})(({
  theme: {
    extendToken,
    token
  }
}) => {
  return {
    overflow: 'hidden',
    '.__empty-list': {
      marginTop: token.marginSM,
      marginBottom: token.marginSM
    },
    '.tokens-screen-container': {
      height: '100%',
      color: token.colorTextLight1,
      fontSize: token.fontSizeLG,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingTop: 210
    },
    '.__scroll-container': {
      paddingLeft: token.size,
      paddingRight: token.size
    },
    '.__upper-block-wrapper': {
      backgroundColor: token.colorBgDefault,
      position: 'absolute',
      paddingTop: '32px',
      height: 210,
      zIndex: 10,
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: extendToken.tokensScreenSuccessBackgroundColor,
      transition: 'opacity, padding-top 0.27s ease',
      '&.-is-shrink': {
        height: 104
      },
      '&.-decrease': {
        backgroundImage: extendToken.tokensScreenDangerBackgroundColor
      }
    },
    '.tokens-upper-block': {
      flex: 1
    },
    '.__scroll-footer': {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: token.size
    },
    '.token-group-balance-item': {
      marginBottom: token.sizeXS
    },
    '.__upper-block-wrapper.-is-shrink': {
      '.__static-block': {
        display: 'none'
      },
      '.__scrolling-block': {
        display: 'flex'
      }
    },
    '.zk-mode-alert-area': {
      marginBottom: token.marginXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tokens);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9Ub2tlbnNfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVpRjtBQUNSO0FBRU07QUFDZ0I7QUFDcEQ7QUFDSjtBQUFBO0FBQUE7QUFhdkMsU0FBU2UsU0FBUyxDQUNoQjtFQUFFQyxTQUFTLEdBQUcsRUFBRTtFQUNkQyxlQUFlO0VBQ2ZDLFFBQVE7RUFDUkMsZUFBZTtFQUNmQyxhQUFhO0VBQ2JDLGNBQWM7RUFDZEMsa0JBQWtCO0VBQ2xCQyxnQkFBZ0I7RUFDaEJDO0FBQWtCLENBQUMsRUFBNkI7RUFDbEQsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR3hCLGtGQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFeUI7RUFBYyxDQUFDLEdBQUcxQiwrRUFBVyxDQUFFMkIsS0FBSyxJQUFLQSxLQUFLLENBQUNDLFFBQVEsQ0FBQztFQUVoRSxNQUFNQyxtQkFBbUIsR0FBR2hCLGtEQUFXLENBQUMsTUFBTTtJQUM1Q1gsdUZBQWUsQ0FBQyxDQUFDd0IsYUFBYSxDQUFDLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLENBQUM7RUFDdEQsQ0FBQyxFQUFFLENBQUNOLGFBQWEsQ0FBQyxDQUFDO0VBRW5CLG9CQUNFO0lBQUssU0FBUyxFQUFHLHNCQUFxQlYsU0FBVSxJQUFHRSxRQUFRLEdBQUcsU0FBUyxHQUFHLEVBQUcsRUFBRTtJQUFBLHdCQUM3RTtNQUFLLFNBQVMsRUFBQyxpQ0FBaUM7TUFBQSx1QkFDOUM7UUFDRSxTQUFTLEVBQUMsK0JBQStCO1FBQ3pDLE9BQU8sRUFBRUEsUUFBUSxHQUFHVyxtQkFBbUIsR0FBR0ksU0FBVTtRQUFBLHVCQUVwRCx1REFBQywyREFBTTtVQUNMLFNBQVMsRUFBRSx1QkFBd0I7VUFDbkMsT0FBTyxFQUFFLENBQUU7VUFDWCxjQUFjLEVBQUUsSUFBSztVQUNyQixJQUFJLEVBQUUsQ0FB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QUFDLENBQUMsQ0FBQztNQUMzQkcsaUJBQWlCLEVBQUUsSUFBSUgsb0RBQUksQ0FBQyxDQUFDLENBQUM7TUFDOUJoRCxNQUFNLEVBQUU7UUFDTmYsS0FBSyxFQUFFLElBQUkrRCxvREFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQnpCLE9BQU8sRUFBRSxJQUFJeUIsb0RBQUksQ0FBQyxDQUFDO01BQ3JCO0lBQ0Y7RUFDRixDQUFDO0VBQ0RyRixtQkFBbUIsRUFBRTtJQUNuQnlGLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDakJ4RixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCeUYsZ0JBQWdCLEVBQUU7RUFDcEI7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9Ib21lL1Rva2Vucy9VcHBlckJsb2NrLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9Ib21lL1Rva2Vucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvY29udGV4dHMvc2NyZWVuL0hvbWVDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24tdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBzYXZlU2hvd0JhbGFuY2UgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIEljb24sIE51bWJlciwgU3dOdW1iZXJQcm9wcywgVGFnIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgeyBDb3B5U2ltcGxlLCBFeWUsIEV5ZVNsYXNoLCBQYXBlclBsYW5lVGlsdCwgU2hvcHBpbmdDYXJ0U2ltcGxlIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzICYge1xuICB0b3RhbFZhbHVlOiBTd051bWJlclByb3BzWyd2YWx1ZSddO1xuICB0b3RhbENoYW5nZVZhbHVlOiBTd051bWJlclByb3BzWyd2YWx1ZSddO1xuICB0b3RhbENoYW5nZVBlcmNlbnQ6IFN3TnVtYmVyUHJvcHNbJ3ZhbHVlJ107XG4gIGlzUHJpY2VEZWNyZWFzZTogYm9vbGVhbjtcbiAgaXNTaHJpbms6IGJvb2xlYW47XG4gIG9uT3BlblNlbmRGdW5kOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5CdXlUb2tlbnM6ICgpID0+IHZvaWQ7XG4gIG9uT3BlblJlY2VpdmU6ICgpID0+IHZvaWQ7XG59O1xuXG5mdW5jdGlvbiBDb21wb25lbnQgKFxuICB7IGNsYXNzTmFtZSA9ICcnLFxuICAgIGlzUHJpY2VEZWNyZWFzZSxcbiAgICBpc1NocmluayxcbiAgICBvbk9wZW5CdXlUb2tlbnMsXG4gICAgb25PcGVuUmVjZWl2ZSxcbiAgICBvbk9wZW5TZW5kRnVuZCxcbiAgICB0b3RhbENoYW5nZVBlcmNlbnQsXG4gICAgdG90YWxDaGFuZ2VWYWx1ZSxcbiAgICB0b3RhbFZhbHVlIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBpc1Nob3dCYWxhbmNlIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNldHRpbmdzKTtcblxuICBjb25zdCBvbkNoYW5nZVNob3dCYWxhbmNlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNhdmVTaG93QmFsYW5jZSghaXNTaG93QmFsYW5jZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH0sIFtpc1Nob3dCYWxhbmNlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRva2Vucy11cHBlci1ibG9jayAke2NsYXNzTmFtZX0gJHtpc1NocmluayA/ICctc2hyaW5rJyA6ICcnfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J19fdG90YWwtYmFsYW5jZS12YWx1ZS1jb250YWluZXInPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdfX3RvdGFsLWJhbGFuY2UtdmFsdWUtY29udGVudCdcbiAgICAgICAgICBvbkNsaWNrPXtpc1NocmluayA/IG9uQ2hhbmdlU2hvd0JhbGFuY2UgOiB1bmRlZmluZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8TnVtYmVyXG4gICAgICAgICAgICBjbGFzc05hbWU9eydfX3RvdGFsLWJhbGFuY2UtdmFsdWUnfVxuICAgICAgICAgICAgZGVjaW1hbD17MH1cbiAgICAgICAgICAgIGRlY2ltYWxPcGFjaXR5PXswLjQ1fVxuICAgICAgICAgICAgaGlkZT17IWlzU2hvd0JhbGFuY2V9XG4gICAgICAgICAgICBwcmVmaXg9JyQnXG4gICAgICAgICAgICBzaXplPXszOH1cbiAgICAgICAgICAgIHN1YkZsb2F0TnVtYmVyXG4gICAgICAgICAgICB2YWx1ZT17dG90YWxWYWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyFpc1NocmluayAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnX19iYWxhbmNlLWNoYW5nZS1jb250YWluZXInfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbi1jaGFuZ2Utc2hvdy1iYWxhbmNlJ1xuICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17ICFpc1Nob3dCYWxhbmNlID8gRXllIDogRXllU2xhc2h9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgb25DbGljaz17b25DaGFuZ2VTaG93QmFsYW5jZX1cbiAgICAgICAgICAgIHNpemU9J3hzJ1xuICAgICAgICAgICAgdG9vbHRpcD17aXNTaG93QmFsYW5jZSA/IHQoJ0hpZGUgYmFsYW5jZScpIDogdCgnU2hvdyBiYWxhbmNlJyl9XG4gICAgICAgICAgICB0eXBlPSdnaG9zdCdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxOdW1iZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J19fYmFsYW5jZS1jaGFuZ2UtdmFsdWUnfVxuICAgICAgICAgICAgZGVjaW1hbD17MH1cbiAgICAgICAgICAgIGRlY2ltYWxPcGFjaXR5PXsxfVxuICAgICAgICAgICAgaGlkZT17IWlzU2hvd0JhbGFuY2V9XG4gICAgICAgICAgICBwcmVmaXg9e2lzUHJpY2VEZWNyZWFzZSA/ICctICQnIDogJysgJCd9XG4gICAgICAgICAgICB2YWx1ZT17dG90YWxDaGFuZ2VWYWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUYWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YF9fYmFsYW5jZS1jaGFuZ2UtcGVyY2VudCAke2lzUHJpY2VEZWNyZWFzZSA/ICctZGVjcmVhc2UnIDogJyd9YH1cbiAgICAgICAgICAgIHNoYXBlPXsncm91bmQnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOdW1iZXJcbiAgICAgICAgICAgICAgZGVjaW1hbD17MH1cbiAgICAgICAgICAgICAgZGVjaW1hbE9wYWNpdHk9ezF9XG4gICAgICAgICAgICAgIHByZWZpeD17aXNQcmljZURlY3JlYXNlID8gJy0nIDogJysnfVxuICAgICAgICAgICAgICBzdWZmaXg9eyclJ31cbiAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsQ2hhbmdlUGVyY2VudH1cbiAgICAgICAgICAgICAgd2VpZ2h0PXs3MDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVGFnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J19fYWN0aW9uLWJ1dHRvbi1jb250YWluZXInfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249eyhcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17Q29weVNpbXBsZX1cbiAgICAgICAgICAgICAgc2l6ZT17aXNTaHJpbmsgPyAnc20nIDogJ21kJyB9XG4gICAgICAgICAgICAgIHdlaWdodD17J2R1b3RvbmUnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlY2VpdmV9XG4gICAgICAgICAgc2hhcGU9J3NxdWlyY2xlJ1xuICAgICAgICAgIHNpemU9e2lzU2hyaW5rID8gJ3hzJyA6ICdzbSd9XG4gICAgICAgICAgdG9vbHRpcD17dCgnR2V0IGFkZHJlc3MnKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydfX2J1dHRvbi1zcGFjZSd9IC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBwaG9zcGhvckljb249e1BhcGVyUGxhbmVUaWx0fVxuICAgICAgICAgICAgICBzaXplPXtpc1NocmluayA/ICdzbScgOiAnbWQnIH1cbiAgICAgICAgICAgICAgd2VpZ2h0PXsnZHVvdG9uZSd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgb25DbGljaz17b25PcGVuU2VuZEZ1bmR9XG4gICAgICAgICAgc2hhcGU9J3NxdWlyY2xlJ1xuICAgICAgICAgIHNpemU9e2lzU2hyaW5rID8gJ3hzJyA6ICdzbSd9XG4gICAgICAgICAgdG9vbHRpcD17dCgnU2VuZCB0b2tlbnMnKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydfX2J1dHRvbi1zcGFjZSd9IC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17U2hvcHBpbmdDYXJ0U2ltcGxlfVxuICAgICAgICAgICAgICBzaXplPXtpc1NocmluayA/ICdzbScgOiAnbWQnIH1cbiAgICAgICAgICAgICAgd2VpZ2h0PXsnZHVvdG9uZSd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5CdXlUb2tlbnN9XG4gICAgICAgICAgc2hhcGU9J3NxdWlyY2xlJ1xuICAgICAgICAgIHNpemU9e2lzU2hyaW5rID8gJ3hzJyA6ICdzbSd9XG4gICAgICAgICAgdG9vbHRpcD17dCgnQnV5IHRva2VuJyl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFVwcGVyQmxvY2sgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBwYWRkaW5nOiAnMHB4IDhweCAyNHB4IDhweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXG4gICAgJy5fX3RvdGFsLWJhbGFuY2UtdmFsdWUnOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzBweCA4cHgnLFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmcxLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzEsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgJy5hbnQtdHlwb2dyYXBoeSc6IHtcbiAgICAgICAgbGluZUhlaWdodDogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuYW50LWJ0bic6IHtcbiAgICAgIHRyYW5zaXRpb246ICd3aWR0aCwgaGVpZ2h0LCBwYWRkaW5nIDBzJ1xuICAgIH0sXG5cbiAgICAnLl9fYmFsYW5jZS1jaGFuZ2UtY29udGFpbmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBnYXA6IHRva2VuLnNpemVYUyxcblxuICAgICAgJy5idXR0b24tY2hhbmdlLXNob3ctYmFsYW5jZSc6IHtcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yV2hpdGUsXG5cbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IHRva2VuWydncmF5LTUnXVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAnLmFudC10eXBvZ3JhcGh5Jzoge1xuICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIC8vIHRvZG86IG1heSB1cGRhdGUgbnVtYmVyIGNvbXBvbmVudCB0byBjbGVhciB0aGlzICFpbXBvcnRhbnRcbiAgICAgICAgY29sb3I6ICdpbmhlcml0ICFpbXBvcnRhbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQgIWltcG9ydGFudCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5fX2JhbGFuY2UtY2hhbmdlLXZhbHVlJzoge1xuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodFxuICAgIH0sXG5cbiAgICAnLl9fYmFsYW5jZS1jaGFuZ2UtcGVyY2VudCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW5bJ2N5YW4tNiddLFxuICAgICAgY29sb3I6IHRva2VuWydncmVlbi0xJ10sXG4gICAgICBtYXJnaW5JbmxpbmVFbmQ6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG5cbiAgICAgICcmLi1kZWNyZWFzZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckVycm9yLFxuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxXG4gICAgICB9LFxuXG4gICAgICAnLmFudC1udW1iZXInOiB7XG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVhTXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuX19hY3Rpb24tYnV0dG9uLWNvbnRhaW5lcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICcyNnB4IDhweCAwIDhweCdcbiAgICB9LFxuXG4gICAgJy5fX2J1dHRvbi1zcGFjZSc6IHtcbiAgICAgIHdpZHRoOiB0b2tlbi5zaXplXG4gICAgfSxcblxuICAgICcmLi1zaHJpbmsnOiB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAzMixcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuXG4gICAgICAnLl9fdG90YWwtYmFsYW5jZS12YWx1ZS1jb250YWluZXInOiB7XG4gICAgICAgIGZsZXg6IDFcbiAgICAgIH0sXG5cbiAgICAgICcuX190b3RhbC1iYWxhbmNlLXZhbHVlLWNvbnRlbnQnOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50J1xuICAgICAgfSxcblxuICAgICAgJy5fX3RvdGFsLWJhbGFuY2UtdmFsdWUnOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzIsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmcyLFxuXG4gICAgICAgICcuYW50LW51bWJlci1wcmVmaXgsIC5hbnQtbnVtYmVyLWludGVnZXIsIC5hbnQtbnVtYmVyLWhpZGUtY29udGVudCc6IHtcbiAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQgIWltcG9ydGFudCdcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJy5fX2JhbGFuY2UtY2hhbmdlLWNvbnRhaW5lcic6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuXG4gICAgICAnLl9fYWN0aW9uLWJ1dHRvbi1jb250YWluZXInOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IDBcbiAgICAgIH0sXG5cbiAgICAgICcuX19idXR0b24tc3BhY2UnOiB7XG4gICAgICAgIHdpZHRoOiB0b2tlbi5zaXplWFNcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24tdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgRW1wdHlMaXN0LCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBY2NvdW50U2VsZWN0b3JNb2RhbCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9Nb2RhbC9BY2NvdW50U2VsZWN0b3JNb2RhbCc7XG5pbXBvcnQgUmVjZWl2ZVFyTW9kYWwgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL01vZGFsL1JlY2VpdmVNb2RhbC9SZWNlaXZlUXJNb2RhbCc7XG5pbXBvcnQgeyBUb2tlbnNTZWxlY3Rvck1vZGFsIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL01vZGFsL1JlY2VpdmVNb2RhbC9Ub2tlbnNTZWxlY3Rvck1vZGFsJztcbmltcG9ydCB7IFRva2VuR3JvdXBCYWxhbmNlSXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9Ub2tlbkl0ZW0vVG9rZW5Hcm91cEJhbGFuY2VJdGVtJztcbmltcG9ydCB7IERFRkFVTFRfVFJBTlNGRVJfUEFSQU1TLCBUUkFOU0ZFUl9UUkFOU0FDVElPTiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgeyBIb21lQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29udGV4dHMvc2NyZWVuL0hvbWVDb250ZXh0JztcbmltcG9ydCB7IHVzZVNldEN1cnJlbnRQYWdlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgdXNlTm90aWZpY2F0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZU5vdGlmaWNhdGlvbic7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZVJlY2VpdmVRUiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3NjcmVlbi9ob21lL3VzZVJlY2VpdmVRUic7XG5pbXBvcnQgeyBVcHBlckJsb2NrIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9Qb3B1cC9Ib21lL1Rva2Vucy9VcHBlckJsb2NrJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvc3RvcmVzJztcbmltcG9ydCB7IFRoZW1lUHJvcHMsIFRyYW5zZmVyUGFyYW1zIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBUb2tlbkJhbGFuY2VJdGVtVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMvYmFsYW5jZSc7XG5pbXBvcnQgeyBpc0FjY291bnRBbGwsIHNvcnRUb2tlbkJ5VmFsdWUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgU3dBbGVydCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDb2lucywgRmFkZXJzSG9yaXpvbnRhbCB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICd1c2Vob29rcy10cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBDb21wb25lbnQgPSAoKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgdXNlU2V0Q3VycmVudFBhZ2UoJy9ob21lL3Rva2VucycpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IFtpc1Nocmluaywgc2V0SXNTaHJpbmtdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHRvcEJsb2NrUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgeyBhY2NvdW50QmFsYW5jZTogeyB0b2tlbkdyb3VwQmFsYW5jZU1hcCxcbiAgICB0b3RhbEJhbGFuY2VJbmZvIH0sIHRva2VuR3JvdXBTdHJ1Y3R1cmU6IHsgc29ydGVkVG9rZW5Hcm91cHMgfSB9ID0gdXNlQ29udGV4dChIb21lQ29udGV4dCk7XG4gIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZS5jdXJyZW50QWNjb3VudCk7XG4gIGNvbnN0IG5vdGlmeSA9IHVzZU5vdGlmaWNhdGlvbigpO1xuICBjb25zdCB7IGFjY291bnRTZWxlY3Rvckl0ZW1zLFxuICAgIG9uT3BlblJlY2VpdmUsXG4gICAgb3BlblNlbGVjdEFjY291bnQsXG4gICAgb3BlblNlbGVjdFRva2VuLFxuICAgIHNlbGVjdGVkQWNjb3VudCxcbiAgICBzZWxlY3RlZE5ldHdvcmssXG4gICAgdG9rZW5TZWxlY3Rvckl0ZW1zIH0gPSB1c2VSZWNlaXZlUVIoKTtcblxuICBjb25zdCBpc1prTW9kZVN5bmNpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubWFudGFQYXkuaXNTeW5jaW5nKTtcbiAgY29uc3QgemtNb2RlU3luY1Byb2dyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLm1hbnRhUGF5LnByb2dyZXNzKTtcbiAgY29uc3QgWywgc2V0U3RvcmFnZV0gPSB1c2VMb2NhbFN0b3JhZ2U8VHJhbnNmZXJQYXJhbXM+KFRSQU5TRkVSX1RSQU5TQUNUSU9OLCBERUZBVUxUX1RSQU5TRkVSX1BBUkFNUyk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBSZWFjdC5VSUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3A7XG5cbiAgICBpZiAodG9wUG9zaXRpb24gPiA4MCkge1xuICAgICAgc2V0SXNTaHJpbmsoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdG9wQmxvY2tSZWYuY3VycmVudCAmJiBjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclByb3BzID0gY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnRvcCA9IGAke01hdGguZmxvb3IoY29udGFpbmVyUHJvcHMudG9wKX1weGA7XG4gICAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0gYCR7Y29udGFpbmVyUHJvcHMubGVmdH1weGA7XG4gICAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5yaWdodCA9IGAke2NvbnRhaW5lclByb3BzLnJpZ2h0fXB4YDtcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7Y29udGFpbmVyUHJvcHMud2lkdGh9cHhgO1xuICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAnMCc7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b3BCbG9ja1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5wYWRkaW5nVG9wID0gJzMycHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc1NocmluaygodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRvcEJsb2NrUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5yaWdodCA9ICcwJztcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAnMCc7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b3BCbG9ja1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5wYWRkaW5nVG9wID0gJzMycHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdG9wUG9zaXRpb24gPSBjb250YWluZXJSZWYuY3VycmVudD8uc2Nyb2xsVG9wIHx8IDA7XG5cbiAgICBpZiAodG9wUG9zaXRpb24gPiA4MCkge1xuICAgICAgaWYgKHRvcEJsb2NrUmVmLmN1cnJlbnQgJiYgY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyUHJvcHMgPSBjb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnRvcCA9IGAke01hdGguZmxvb3IoY29udGFpbmVyUHJvcHMudG9wKX1weGA7XG4gICAgICAgIHRvcEJsb2NrUmVmLmN1cnJlbnQuc3R5bGUubGVmdCA9IGAke2NvbnRhaW5lclByb3BzLmxlZnR9cHhgO1xuICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnJpZ2h0ID0gYCR7Y29udGFpbmVyUHJvcHMucmlnaHR9cHhgO1xuICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7Y29udGFpbmVyUHJvcHMud2lkdGh9cHhgO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodG9wQmxvY2tSZWYuY3VycmVudCkge1xuICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgdG9wQmxvY2tSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLnJpZ2h0ID0gJzAnO1xuICAgICAgICB0b3BCbG9ja1JlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGlzVG90YWxCYWxhbmNlRGVjcmVhc2UgPSB0b3RhbEJhbGFuY2VJbmZvLmNoYW5nZS5zdGF0dXMgPT09ICdkZWNyZWFzZSc7XG5cbiAgY29uc3Qgb25DbGlja0l0ZW0gPSB1c2VDYWxsYmFjaygoaXRlbTogVG9rZW5CYWxhbmNlSXRlbVR5cGUpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbmF2aWdhdGUoYC9ob21lL3Rva2Vucy9kZXRhaWwvJHtpdGVtLnNsdWd9YCk7XG4gICAgfTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3Qgb25DbGlja01hbmFnZVRva2VuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRlKCcvc2V0dGluZ3MvdG9rZW5zL21hbmFnZScpO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCBvbk9wZW5TZW5kRnVuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoY3VycmVudEFjY291bnQgJiYgY3VycmVudEFjY291bnQuaXNSZWFkT25seSkge1xuICAgICAgbm90aWZ5KHtcbiAgICAgICAgbWVzc2FnZTogdCgnVGhlIGFjY291bnQgeW91IGFyZSB1c2luZyBpcyB3YXRjaC1vbmx5LCB5b3UgY2Fubm90IHNlbmQgYXNzZXRzIHdpdGggaXQnKSxcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICBkdXJhdGlvbjogM1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRyZXNzID0gY3VycmVudEFjY291bnQgPyBpc0FjY291bnRBbGwoY3VycmVudEFjY291bnQuYWRkcmVzcykgPyAnJyA6IGN1cnJlbnRBY2NvdW50LmFkZHJlc3MgOiAnJztcblxuICAgIHNldFN0b3JhZ2Uoe1xuICAgICAgLi4uREVGQVVMVF9UUkFOU0ZFUl9QQVJBTVMsXG4gICAgICBmcm9tOiBhZGRyZXNzXG4gICAgfSk7XG4gICAgbmF2aWdhdGUoJy90cmFuc2FjdGlvbi9zZW5kLWZ1bmQnKTtcbiAgfSxcbiAgW2N1cnJlbnRBY2NvdW50LCBuYXZpZ2F0ZSwgbm90aWZ5LCB0LCBzZXRTdG9yYWdlXVxuICApO1xuXG4gIGNvbnN0IG9uT3BlbkJ1eVRva2VucyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgnL2J1eS10b2tlbnMnKTtcbiAgfSxcbiAgW25hdmlnYXRlXVxuICApO1xuXG4gIGNvbnN0IHRva2VuR3JvdXBCYWxhbmNlSXRlbXMgPSB1c2VNZW1vPFRva2VuQmFsYW5jZUl0ZW1UeXBlW10+KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQ6IFRva2VuQmFsYW5jZUl0ZW1UeXBlW10gPSBbXTtcblxuICAgIHNvcnRlZFRva2VuR3JvdXBzLmZvckVhY2goKHRva2VuR3JvdXBTbHVnKSA9PiB7XG4gICAgICBpZiAodG9rZW5Hcm91cEJhbGFuY2VNYXBbdG9rZW5Hcm91cFNsdWddKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRva2VuR3JvdXBCYWxhbmNlTWFwW3Rva2VuR3JvdXBTbHVnXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzb3J0ZWRSZXN1bHQgPSByZXN1bHQuc29ydChzb3J0VG9rZW5CeVZhbHVlKTtcblxuICAgIGNvbnNvbGUubG9nKCdUb2tlbiBHcm91cCBCYWxhbmNlIEl0ZW1zOicsIHNvcnRlZFJlc3VsdCk7XG4gICAgY29uc29sZS5sb2coJ1Rva2VuIEdyb3VwIEJhbGFuY2UgTWFwOicsIHRva2VuR3JvdXBCYWxhbmNlTWFwKTsgLy8gTG9nIHRoZSBpdGVtcyBoZXJlXG5cbiAgICByZXR1cm4gc29ydGVkUmVzdWx0O1xuICB9LCBbc29ydGVkVG9rZW5Hcm91cHMsIHRva2VuR3JvdXBCYWxhbmNlTWFwXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlUmVzaXplXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9eyd0b2tlbnMtc2NyZWVuLWNvbnRhaW5lcid9XG4gICAgICBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfVxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ19fdXBwZXItYmxvY2std3JhcHBlcicsIHtcbiAgICAgICAgICAnLWlzLXNocmluayc6IGlzU2hyaW5rLFxuICAgICAgICAgICctZGVjcmVhc2UnOiBpc1RvdGFsQmFsYW5jZURlY3JlYXNlXG4gICAgICAgIH0pfVxuICAgICAgICByZWY9e3RvcEJsb2NrUmVmfVxuICAgICAgPlxuICAgICAgICA8VXBwZXJCbG9ja1xuICAgICAgICAgIGlzUHJpY2VEZWNyZWFzZT17aXNUb3RhbEJhbGFuY2VEZWNyZWFzZX1cbiAgICAgICAgICBpc1Nocmluaz17aXNTaHJpbmt9XG4gICAgICAgICAgb25PcGVuQnV5VG9rZW5zPXtvbk9wZW5CdXlUb2tlbnN9XG4gICAgICAgICAgb25PcGVuUmVjZWl2ZT17b25PcGVuUmVjZWl2ZX1cbiAgICAgICAgICBvbk9wZW5TZW5kRnVuZD17b25PcGVuU2VuZEZ1bmR9XG4gICAgICAgICAgdG90YWxDaGFuZ2VQZXJjZW50PXt0b3RhbEJhbGFuY2VJbmZvLmNoYW5nZS5wZXJjZW50fVxuICAgICAgICAgIHRvdGFsQ2hhbmdlVmFsdWU9e3RvdGFsQmFsYW5jZUluZm8uY2hhbmdlLnZhbHVlfVxuICAgICAgICAgIHRvdGFsVmFsdWU9e3RvdGFsQmFsYW5jZUluZm8uY29udmVydGVkVmFsdWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsnX19zY3JvbGwtY29udGFpbmVyJ31cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIGlzWmtNb2RlU3luY2luZyAmJiAoXG4gICAgICAgICAgICA8U3dBbGVydFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3prLW1vZGUtYWxlcnQtYXJlYScpfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnVGhpcyBtYXkgdGFrZSBhIGZldyBtaW51dGVzLiBQbGVhc2Uga2VlcCB0aGUgYXBwIG9wZW4nKX1cbiAgICAgICAgICAgICAgdGl0bGU9e3QoJ1prIG1vZGUgaXMgc3luY2luZzoge3twZXJjZW50fX0lJywgeyByZXBsYWNlOiB7IHBlcmNlbnQ6IHprTW9kZVN5bmNQcm9ncmVzcyB8fCAnMCcgfSB9KX1cbiAgICAgICAgICAgICAgdHlwZT17J3dhcm5pbmcnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW5Hcm91cEJhbGFuY2VJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUb2tlbkdyb3VwQmFsYW5jZUl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uc2x1Z31cbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBvblByZXNzSXRlbT17b25DbGlja0l0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICF0b2tlbkdyb3VwQmFsYW5jZUl0ZW1zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICA8RW1wdHlMaXN0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J19fZW1wdHktbGlzdCd9XG4gICAgICAgICAgICAgIGVtcHR5TWVzc2FnZT17dCgnVHJ5IHNlYXJjaGluZyBvciBpbXBvcnRpbmcgb25lJyl9XG4gICAgICAgICAgICAgIGVtcHR5VGl0bGU9e3QoJ05vIHRva2VucyBmb3VuZCcpfVxuICAgICAgICAgICAgICBwaG9zcGhvckljb249e0NvaW5zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydfX3Njcm9sbC1mb290ZXInfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPXs8SWNvbiBwaG9zcGhvckljb249e0ZhZGVyc0hvcml6b250YWx9IC8+fVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja01hbmFnZVRva2VufVxuICAgICAgICAgICAgc2l6ZT17J3hzJ31cbiAgICAgICAgICAgIHR5cGU9eydnaG9zdCd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ01hbmFnZSB0b2tlbnMnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEFjY291bnRTZWxlY3Rvck1vZGFsXG4gICAgICAgIGl0ZW1zPXthY2NvdW50U2VsZWN0b3JJdGVtc31cbiAgICAgICAgb25TZWxlY3RJdGVtPXtvcGVuU2VsZWN0QWNjb3VudH1cbiAgICAgIC8+XG5cbiAgICAgIDxUb2tlbnNTZWxlY3Rvck1vZGFsXG4gICAgICAgIGFkZHJlc3M9e3NlbGVjdGVkQWNjb3VudH1cbiAgICAgICAgaXRlbXM9e3Rva2VuU2VsZWN0b3JJdGVtc31cbiAgICAgICAgb25TZWxlY3RJdGVtPXtvcGVuU2VsZWN0VG9rZW59XG4gICAgICAvPlxuXG4gICAgICA8UmVjZWl2ZVFyTW9kYWxcbiAgICAgICAgYWRkcmVzcz17c2VsZWN0ZWRBY2NvdW50fVxuICAgICAgICBzZWxlY3RlZE5ldHdvcms9e3NlbGVjdGVkTmV0d29ya31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBXcmFwcGVyQ29tcG9uZW50ID0gKHsgY2xhc3NOYW1lID0gJycgfTogVGhlbWVQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4gPT4ge1xuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2B0b2tlbnMgJHtjbGFzc05hbWV9YH1cbiAgICAgIHJlc29sdmU9e2RhdGFDb250ZXh0LmF3YWl0U3RvcmVzKFsncHJpY2UnLCAnY2hhaW5TdG9yZScsICdhc3NldFJlZ2lzdHJ5JywgJ2JhbGFuY2UnLCAnbWFudGFQYXknXSl9XG4gICAgPlxuICAgICAgPENvbXBvbmVudCAvPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBUb2tlbnMgPSBzdHlsZWQoV3JhcHBlckNvbXBvbmVudCk8VGhlbWVQcm9wcz4oKHsgdGhlbWU6IHsgZXh0ZW5kVG9rZW4sIHRva2VuIH0gfTogVGhlbWVQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAnLl9fZW1wdHktbGlzdCc6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luU00sXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblNNXG4gICAgfSxcblxuICAgICcudG9rZW5zLXNjcmVlbi1jb250YWluZXInOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDEsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVMRyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nVG9wOiAyMTBcbiAgICB9LFxuXG4gICAgJy5fX3Njcm9sbC1jb250YWluZXInOiB7XG4gICAgICBwYWRkaW5nTGVmdDogdG9rZW4uc2l6ZSxcbiAgICAgIHBhZGRpbmdSaWdodDogdG9rZW4uc2l6ZVxuICAgIH0sXG5cbiAgICAnLl9fdXBwZXItYmxvY2std3JhcHBlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JCZ0RlZmF1bHQsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHBhZGRpbmdUb3A6ICczMnB4JyxcbiAgICAgIGhlaWdodDogMjEwLFxuICAgICAgekluZGV4OiAxMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGV4dGVuZFRva2VuLnRva2Vuc1NjcmVlblN1Y2Nlc3NCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSwgcGFkZGluZy10b3AgMC4yN3MgZWFzZScsXG5cbiAgICAgICcmLi1pcy1zaHJpbmsnOiB7XG4gICAgICAgIGhlaWdodDogMTA0XG4gICAgICB9LFxuXG4gICAgICAnJi4tZGVjcmVhc2UnOiB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogZXh0ZW5kVG9rZW4udG9rZW5zU2NyZWVuRGFuZ2VyQmFja2dyb3VuZENvbG9yXG4gICAgICB9XG4gICAgfSxcblxuICAgICcudG9rZW5zLXVwcGVyLWJsb2NrJzoge1xuICAgICAgZmxleDogMVxuICAgIH0sXG5cbiAgICAnLl9fc2Nyb2xsLWZvb3Rlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4uc2l6ZVxuICAgIH0sXG5cbiAgICAnLnRva2VuLWdyb3VwLWJhbGFuY2UtaXRlbSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4uc2l6ZVhTXG4gICAgfSxcblxuICAgICcuX191cHBlci1ibG9jay13cmFwcGVyLi1pcy1zaHJpbmsnOiB7XG4gICAgICAnLl9fc3RhdGljLWJsb2NrJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG5cbiAgICAgICcuX19zY3JvbGxpbmctYmxvY2snOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLnprLW1vZGUtYWxlcnQtYXJlYSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luWFNcbiAgICB9XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VucztcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbiBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBIb21lQ29udGV4dFR5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL2NvbnRleHQnO1xuaW1wb3J0IEJpZ04gZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBIb21lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8SG9tZUNvbnRleHRUeXBlPih7XG4gIGFjY291bnRCYWxhbmNlOiB7XG4gICAgdG9rZW5CYWxhbmNlTWFwOiB7fSxcbiAgICB0b2tlbkdyb3VwQmFsYW5jZU1hcDoge30sXG4gICAgdG90YWxCYWxhbmNlSW5mbzoge1xuICAgICAgY29udmVydGVkVmFsdWU6IG5ldyBCaWdOKDApLFxuICAgICAgY29udmVydGVkMjRoVmFsdWU6IG5ldyBCaWdOKDApLFxuICAgICAgY2hhbmdlOiB7XG4gICAgICAgIHZhbHVlOiBuZXcgQmlnTigwKSxcbiAgICAgICAgcGVyY2VudDogbmV3IEJpZ04oMClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRva2VuR3JvdXBTdHJ1Y3R1cmU6IHtcbiAgICB0b2tlbkdyb3VwTWFwOiB7fSxcbiAgICBzb3J0ZWRUb2tlbkdyb3VwczogW10sXG4gICAgc29ydGVkVG9rZW5TbHVnczogW11cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VUcmFuc2xhdGlvbiIsInNhdmVTaG93QmFsYW5jZSIsIkJ1dHRvbiIsIkljb24iLCJOdW1iZXIiLCJUYWciLCJDb3B5U2ltcGxlIiwiRXllIiwiRXllU2xhc2giLCJQYXBlclBsYW5lVGlsdCIsIlNob3BwaW5nQ2FydFNpbXBsZSIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJzdHlsZWQiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJpc1ByaWNlRGVjcmVhc2UiLCJpc1NocmluayIsIm9uT3BlbkJ1eVRva2VucyIsIm9uT3BlblJlY2VpdmUiLCJvbk9wZW5TZW5kRnVuZCIsInRvdGFsQ2hhbmdlUGVyY2VudCIsInRvdGFsQ2hhbmdlVmFsdWUiLCJ0b3RhbFZhbHVlIiwidCIsImlzU2hvd0JhbGFuY2UiLCJzdGF0ZSIsInNldHRpbmdzIiwib25DaGFuZ2VTaG93QmFsYW5jZSIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwidW5kZWZpbmVkIiwiVXBwZXJCbG9jayIsInRoZW1lIiwidG9rZW4iLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmcxIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmcxIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93IiwidHJhbnNpdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdhcCIsInNpemVYUyIsImNvbG9yIiwiY29sb3JXaGl0ZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbklubGluZUVuZCIsImNvbG9yRXJyb3IiLCJjb2xvclRleHRMaWdodDEiLCJmb250U2l6ZVhTIiwid2lkdGgiLCJzaXplIiwicGFkZGluZ0JvdHRvbSIsImZsZXgiLCJjdXJzb3IiLCJsaW5lSGVpZ2h0SGVhZGluZzIiLCJmb250U2l6ZUhlYWRpbmcyIiwicGFkZGluZ1RvcCIsIkVtcHR5TGlzdCIsIlBhZ2VXcmFwcGVyIiwiQWNjb3VudFNlbGVjdG9yTW9kYWwiLCJSZWNlaXZlUXJNb2RhbCIsIlRva2Vuc1NlbGVjdG9yTW9kYWwiLCJUb2tlbkdyb3VwQmFsYW5jZUl0ZW0iLCJERUZBVUxUX1RSQU5TRkVSX1BBUkFNUyIsIlRSQU5TRkVSX1RSQU5TQUNUSU9OIiwiRGF0YUNvbnRleHQiLCJIb21lQ29udGV4dCIsInVzZVNldEN1cnJlbnRQYWdlIiwidXNlTm90aWZpY2F0aW9uIiwidXNlUmVjZWl2ZVFSIiwiaXNBY2NvdW50QWxsIiwic29ydFRva2VuQnlWYWx1ZSIsIlN3QWxlcnQiLCJjbGFzc05hbWVzIiwiQ29pbnMiLCJGYWRlcnNIb3Jpem9udGFsIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwidXNlTG9jYWxTdG9yYWdlIiwic2V0SXNTaHJpbmsiLCJuYXZpZ2F0ZSIsImNvbnRhaW5lclJlZiIsInRvcEJsb2NrUmVmIiwiYWNjb3VudEJhbGFuY2UiLCJ0b2tlbkdyb3VwQmFsYW5jZU1hcCIsInRvdGFsQmFsYW5jZUluZm8iLCJ0b2tlbkdyb3VwU3RydWN0dXJlIiwic29ydGVkVG9rZW5Hcm91cHMiLCJjdXJyZW50QWNjb3VudCIsImFjY291bnRTdGF0ZSIsIm5vdGlmeSIsImFjY291bnRTZWxlY3Rvckl0ZW1zIiwib3BlblNlbGVjdEFjY291bnQiLCJvcGVuU2VsZWN0VG9rZW4iLCJzZWxlY3RlZEFjY291bnQiLCJzZWxlY3RlZE5ldHdvcmsiLCJ0b2tlblNlbGVjdG9ySXRlbXMiLCJpc1prTW9kZVN5bmNpbmciLCJtYW50YVBheSIsImlzU3luY2luZyIsInprTW9kZVN5bmNQcm9ncmVzcyIsInByb2dyZXNzIiwic2V0U3RvcmFnZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwidG9wUG9zaXRpb24iLCJjdXJyZW50VGFyZ2V0Iiwic2Nyb2xsVG9wIiwidmFsdWUiLCJjdXJyZW50IiwiY29udGFpbmVyUHJvcHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwiTWF0aCIsImZsb29yIiwibGVmdCIsInJpZ2h0Iiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJoYW5kbGVSZXNpemUiLCJpc1RvdGFsQmFsYW5jZURlY3JlYXNlIiwiY2hhbmdlIiwic3RhdHVzIiwib25DbGlja0l0ZW0iLCJpdGVtIiwic2x1ZyIsIm9uQ2xpY2tNYW5hZ2VUb2tlbiIsImlzUmVhZE9ubHkiLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwiYWRkcmVzcyIsImZyb20iLCJ0b2tlbkdyb3VwQmFsYW5jZUl0ZW1zIiwicmVzdWx0IiwiZm9yRWFjaCIsInRva2VuR3JvdXBTbHVnIiwicHVzaCIsInNvcnRlZFJlc3VsdCIsInNvcnQiLCJsb2ciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBlcmNlbnQiLCJjb252ZXJ0ZWRWYWx1ZSIsInJlcGxhY2UiLCJtYXAiLCJsZW5ndGgiLCJXcmFwcGVyQ29tcG9uZW50IiwiZGF0YUNvbnRleHQiLCJhd2FpdFN0b3JlcyIsIlRva2VucyIsImV4dGVuZFRva2VuIiwibWFyZ2luVG9wIiwibWFyZ2luU00iLCJtYXJnaW5Cb3R0b20iLCJoZWlnaHQiLCJmb250U2l6ZUxHIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJjb2xvckJnRGVmYXVsdCIsInpJbmRleCIsImJhY2tncm91bmRJbWFnZSIsInRva2Vuc1NjcmVlblN1Y2Nlc3NCYWNrZ3JvdW5kQ29sb3IiLCJ0b2tlbnNTY3JlZW5EYW5nZXJCYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5YUyIsIkJpZ04iLCJjcmVhdGVDb250ZXh0IiwidG9rZW5CYWxhbmNlTWFwIiwiY29udmVydGVkMjRoVmFsdWUiLCJ0b2tlbkdyb3VwTWFwIiwic29ydGVkVG9rZW5TbHVncyJdLCJzb3VyY2VSb290IjoiIn0=