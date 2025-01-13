"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Account_ConnectLedger_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/ConnectLedger.tsx":
/*!****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/ConnectLedger.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Swatches.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CircleNotch.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/logo */ "../extension-koni-ui/src/assets/logo/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

















const LIMIT_PER_PAGE = 5;
const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
  weight: "fill"
});
const Component = props => {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useAutoNavigateToCreatePassword)();
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useDefaultNavigate)();
  const supportedLedger = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetSupportedLedger)();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useCompleteCreateAccount)();
  const onBack = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGoBackFromCreateAccount)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.ATTACH_ACCOUNT_MODAL);
  const {
    accounts
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.accountState);
  const [firstStep, setFirstStep] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const networks = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => supportedLedger.map(network => ({
    name: network.networkName,
    slug: network.slug
  })), [supportedLedger]);
  const [chain, setChain] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(supportedLedger[0].slug);
  const [ledgerAccounts, setLedgerAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
  const [selectedAccounts, setSelectedAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const [isLoadMore, setIsLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const selectedChain = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return supportedLedger.find(n => n.slug === chain);
  }, [chain, supportedLedger]);
  const accountName = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => (selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.accountName) || 'Unknown', [selectedChain]);
  const {
    error,
    getAddress,
    isLoading,
    isLocked,
    ledger,
    refresh,
    warning
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useLedger)(chain);
  const onPreviousStep = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    setFirstStep(true);
    setSelectedAccounts([]);
  }, []);
  const onChainChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(event => {
    const value = event.target.value;
    setChain(value);
  }, []);
  const onLoadMore = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((loading, page) => {
    return () => {
      if (!loading) {
        setIsLoadMore(true);
        setPage(page + 1);
        const handler = async () => {
          const start = page * LIMIT_PER_PAGE;
          const end = (page + 1) * LIMIT_PER_PAGE;
          const rs = new Array(LIMIT_PER_PAGE).fill(null);
          setLedgerAccounts(prevState => {
            return [...prevState, ...rs];
          });
          for (let i = start; i < end; i++) {
            try {
              const {
                address
              } = await getAddress(i);
              rs[i - start] = {
                accountIndex: i,
                name: `Ledger ${accountName} ${i + 1}`,
                address: address
              };
            } catch (e) {
              refresh();
              setFirstStep(true);
              break;
            }
          }
          setLedgerAccounts(prevState => {
            const result = [...prevState];
            for (let i = start; i < end; i++) {
              result[i] = rs[i - start];
            }
            return result;
          });
        };
        handler().then().catch().finally(() => setIsLoadMore(false));
      }
    };
  }, [getAddress, accountName, refresh]);
  const onNextStep = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    setFirstStep(false);
    if (!page) {
      onLoadMore(isLoadMore, page)();
    }
  }, [isLoadMore, onLoadMore, page]);
  const onClickItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((selectedAccounts, item) => {
    return () => {
      const exists = selectedAccounts.find(it => it.address === item.address);
      let result;
      if (exists) {
        result = selectedAccounts.filter(it => it.address !== item.address);
      } else {
        result = [...selectedAccounts];
        result.push(item);
      }
      setSelectedAccounts(result);
    };
  }, []);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(selectedAccounts => {
    // eslint-disable-next-line react/display-name
    return (item, key) => {
      if (!item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountWithNameSkeleton, {
          direction: "vertical"
        }, key);
      }
      const selected = !!selectedAccounts.find(it => it.address === item.address);
      const originAddress = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.reformatAddress)(item.address, 42);
      const disabled = !!accounts.find(acc => acc.address === originAddress);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountItemWithName, {
        accountName: item.name,
        address: item.address,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
          disabled: disabled
        }),
        direction: "vertical",
        genesisHash: selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.genesisHash,
        isSelected: selected || disabled,
        onClick: disabled ? undefined : onClickItem(selectedAccounts, item),
        showUnselectIcon: true
      }, item.address);
    };
  }, [accounts, onClickItem, selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.genesisHash]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    if (!selectedAccounts.length || !selectedChain) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.createAccountHardwareMultiple)({
        accounts: selectedAccounts.map(item => ({
          accountIndex: item.accountIndex,
          address: item.address,
          addressOffset: 0,
          // don't change
          genesisHash: selectedChain.genesisHash,
          hardwareType: 'ledger',
          name: item.name,
          isEthereum: selectedChain.isEthereum
        }))
      }).then(() => {
        onComplete();
      }).catch(e => {
        console.log(e);
      }).finally(() => {
        setIsSubmitting(false);
      });
    }, 300);
  }, [selectedAccounts, selectedChain, onComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setSelectedAccounts([]);
    setLedgerAccounts([]);
    setPage(0);
  }, [ledger]);
  const isConnected = !isLocked && !isLoading && !!ledger;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: firstStep ? onBack : onPreviousStep,
      rightFooterButton: {
        children: t('Connect Ledger device'),
        icon: FooterIcon,
        disabled: !isConnected || !firstStep && !selectedAccounts.length,
        onClick: firstStep ? onNextStep : onSubmit,
        loading: isSubmitting
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
        onClick: goHome
      }],
      title: t('Connect Ledger device'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('container'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "sub-title",
          children: t('Connect and unlock your Ledger, then open the selected network on your Ledger.')
        }), firstStep && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "logo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.DualLogo, {
              leftLogo: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
                height: 56,
                shape: "squircle",
                src: _assets_logo__WEBPACK_IMPORTED_MODULE_7__["default"].subwallet,
                width: 56
              }),
              rightLogo: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
                height: 56,
                shape: "squircle",
                src: _assets_logo__WEBPACK_IMPORTED_MODULE_7__["default"].ledger,
                width: 56
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.ChainSelector, {
            items: networks,
            label: t('Select network'),
            onChange: onChainChange,
            placeholder: t('Select network'),
            value: chain
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
            block: true,
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('ledger-button', {
              connected: isConnected,
              loading: isLoading
            }),
            contentAlign: "left",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
              backgroundColor: "var(--icon-bg-color)",
              phosphorIcon: isConnected ? phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"] : phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
              size: "sm",
              weight: "fill"
            }),
            onClick: refresh,
            schema: "secondary",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "ledger-button-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "ledger-info-text",
                children: isConnected ? t('Device found') : warning || error || (ledger ? t('Loading') : t('Searching Ledger device'))
              }), isConnected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
                className: "check-icon",
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"],
                size: "md",
                weight: "fill"
              })]
            })
          })]
        }), !firstStep && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].Section, {
          className: "list-container",
          displayRow: true,
          list: ledgerAccounts,
          pagination: {
            hasMore: !isLoadMore,
            loadMore: onLoadMore(isLoadMore, page)
          },
          renderItem: renderItem(selectedAccounts),
          renderOnScroll: false,
          rowGap: "var(--list-gap)"
        })]
      })
    })
  });
};
const ConnectLedger = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__["default"])(Component).withConfig({
  displayName: "ConnectLedger",
  componentId: "sc-1o5hc6q-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '--list-gap': token.sizeXS,
    '.ant-sw-screen-layout-body': {
      overflow: 'hidden'
    },
    '.container': {
      padding: `${token.padding}px ${token.padding}px 0`,
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    '.sub-title': {
      padding: `0 ${token.padding}px`,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      textAlign: 'center'
    },
    '.logo': {
      margin: `${token.controlHeightLG}px 0`,
      '--logo-size': token.controlHeightLG + token.controlHeightXS,
      '.dual-logo-container': {
        marginBottom: 0,
        padding: 0
      }
    },
    '.ledger-button-content': {
      marginLeft: token.marginSM,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      overflow: 'hidden'
    },
    '.ledger-info-text': {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '.ledger-button': {
      marginTop: token.margin - 2,
      padding: `0 ${token.paddingSM}px`,
      '--icon-bg-color': token['gray-4'],
      '&.connected': {
        '--icon-bg-color': token['green-6']
      }
    },
    '.check-icon': {
      color: token.colorSuccess
    },
    '.list-container': {
      margin: `${token.margin}px -${token.margin}px 0`,
      flex: 1
    },
    '.ant-sw-list': {
      '.ant-web3-block': {
        display: 'flex',
        overflow: 'visible',
        '&.disabled': {
          opacity: 0.4,
          cursor: 'not-allowed'
        }
      },
      '.ant-account-item': {
        paddingTop: token.paddingSM,
        paddingBottom: token.paddingSM
      }
    },
    '.loading': {
      '.anticon': {
        animation: 'spinner-loading 1s infinite linear'
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectLedger);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/CircleNotch.esm.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/CircleNotch.esm.js ***!
  \***********************************************************************/
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
    d: "M168,40.7a96,96,0,1,1-80,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M168,40.7a96,96,0,1,1-80,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M232,128A104,104,0,1,1,84.7,33.4a8.1,8.1,0,0,1,10.6,4,8,8,0,0,1-4,10.6,88,88,0,1,0,73.4,0,8,8,0,0,1-4-10.6,8.1,8.1,0,0,1,10.6-4A104.4,104.4,0,0,1,232,128Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M168,40.7a96,96,0,1,1-80,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M168,40.7a96,96,0,1,1-80,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M168,40.7a96,96,0,1,1-80,0",
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

var CircleNotch = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
CircleNotch.displayName = "CircleNotch";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleNotch);
//# sourceMappingURL=CircleNotch.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfQWNjb3VudF9Db25uZWN0TGVkZ2VyX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR2tFO0FBQ3FIO0FBQ3pHO0FBQ21IO0FBQzFHO0FBR0w7QUFDdEQ7QUFDd0M7QUFDSztBQUMxQjtBQUNMO0FBQ0g7QUFFUztBQUFBO0FBQUE7QUFBQTtBQVVoRCxNQUFNa0MsY0FBYyxHQUFHLENBQUM7QUFFeEIsTUFBTUMsVUFBVSxnQkFDZCx1REFBQywyREFBSTtFQUNILFlBQVksRUFBRVgsdURBQVM7RUFDdkIsTUFBTSxFQUFDO0FBQU0sRUFFaEI7QUFFRCxNQUFNWSxTQUEwQixHQUFJQyxLQUFZLElBQUs7RUFDbkQ1QixtR0FBK0IsRUFBRTtFQUVqQyxNQUFNO0lBQUU2QjtFQUFVLENBQUMsR0FBR0QsS0FBSztFQUUzQixNQUFNO0lBQUVFO0VBQUUsQ0FBQyxHQUFHVCw4REFBYyxFQUFFO0VBQzlCLE1BQU07SUFBRVU7RUFBTyxDQUFDLEdBQUc3QixzRkFBa0IsRUFBRTtFQUV2QyxNQUFNOEIsZUFBZSxHQUFHN0IseUZBQXFCLEVBQUU7RUFDL0MsTUFBTThCLFVBQVUsR0FBR2hDLDRGQUF3QixFQUFFO0VBQzdDLE1BQU1pQyxNQUFNLEdBQUc5Qiw4RkFBMEIsQ0FBQ0wsd0ZBQW9CLENBQUM7RUFFL0QsTUFBTTtJQUFFb0M7RUFBUyxDQUFDLEdBQUdiLHdEQUFXLENBQUVjLEtBQWdCLElBQUtBLEtBQUssQ0FBQ0MsWUFBWSxDQUFDO0VBRTFFLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR25CLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBRWhELE1BQU1vQixRQUFRLEdBQUdyQiw4Q0FBTyxDQUFDLE1BQXVCYSxlQUFlLENBQUNTLEdBQUcsQ0FBRUMsT0FBTyxLQUFNO0lBQ2hGQyxJQUFJLEVBQUVELE9BQU8sQ0FBQ0Us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O0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlakMsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmJjO0FBQ2dCO0FBQ1o7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLFNBQVMsc0VBQW1CO0FBQzVCOztBQUVBLCtCQUErQixpREFBVTtBQUN6QyxTQUFTLDBEQUFtQixDQUFDLDREQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9BY2NvdW50L0Nvbm5lY3RMZWRnZXIudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXJlYWN0L2Rpc3QvaWNvbnMvQ2lyY2xlTm90Y2guZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBMZWRnZXJOZXR3b3JrIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyByZWZvcm1hdEFkZHJlc3MgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IEFjY291bnRJdGVtV2l0aE5hbWUsIEFjY291bnRXaXRoTmFtZVNrZWxldG9uLCBCYXNpY09uQ2hhbmdlRnVuY3Rpb24sIENoYWluU2VsZWN0b3IsIENsb3NlSWNvbiwgRHVhbExvZ28sIExheW91dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQVRUQUNIX0FDQ09VTlRfTU9EQUwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkLCB1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQsIHVzZURlZmF1bHROYXZpZ2F0ZSwgdXNlR2V0U3VwcG9ydGVkTGVkZ2VyLCB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCwgdXNlTGVkZ2VyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBjcmVhdGVBY2NvdW50SGFyZHdhcmVNdWx0aXBsZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvc3RvcmVzJztcbmltcG9ydCB7IENoYWluSXRlbVR5cGUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEJhY2tncm91bmRJY29uLCBCdXR0b24sIEljb24sIEltYWdlLCBTd0xpc3QgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENoZWNrQ2lyY2xlLCBDaXJjbGVOb3RjaCwgU3dhdGNoZXMgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IERlZmF1bHRMb2dvc01hcCBmcm9tICcuLi8uLi9hc3NldHMvbG9nbyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5pbnRlcmZhY2UgSW1wb3J0TGVkZ2VySXRlbSB7XG4gIGFjY291bnRJbmRleDogbnVtYmVyO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgTElNSVRfUEVSX1BBR0UgPSA1O1xuXG5jb25zdCBGb290ZXJJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17U3dhdGNoZXN9XG4gICAgd2VpZ2h0PSdmaWxsJ1xuICAvPlxuKTtcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHVzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQoKTtcblxuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG5cbiAgY29uc3Qgc3VwcG9ydGVkTGVkZ2VyID0gdXNlR2V0U3VwcG9ydGVkTGVkZ2VyKCk7XG4gIGNvbnN0IG9uQ29tcGxldGUgPSB1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQoKTtcbiAgY29uc3Qgb25CYWNrID0gdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQoQVRUQUNIX0FDQ09VTlRfTU9EQUwpO1xuXG4gIGNvbnN0IHsgYWNjb3VudHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUpO1xuXG4gIGNvbnN0IFtmaXJzdFN0ZXAsIHNldEZpcnN0U3RlcF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBuZXR3b3JrcyA9IHVzZU1lbW8oKCk6IENoYWluSXRlbVR5cGVbXSA9PiBzdXBwb3J0ZWRMZWRnZXIubWFwKChuZXR3b3JrKSA9PiAoe1xuICAgIG5hbWU6IG5ldHdvcmsubmV0d29ya05hbWUsXG4gICAgc2x1ZzogbmV0d29yay5zbHVnXG4gIH0pKSwgW3N1cHBvcnRlZExlZGdlcl0pO1xuXG4gIGNvbnN0IFtjaGFpbiwgc2V0Q2hhaW5dID0gdXNlU3RhdGUoc3VwcG9ydGVkTGVkZ2VyWzBdLnNsdWcpO1xuICBjb25zdCBbbGVkZ2VyQWNjb3VudHMsIHNldExlZGdlckFjY291bnRzXSA9IHVzZVN0YXRlPEFycmF5PEltcG9ydExlZGdlckl0ZW0gfCBudWxsPj4oW10pO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQWNjb3VudHMsIHNldFNlbGVjdGVkQWNjb3VudHNdID0gdXNlU3RhdGU8SW1wb3J0TGVkZ2VySXRlbVtdPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRNb3JlLCBzZXRJc0xvYWRNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzZWxlY3RlZENoYWluID0gdXNlTWVtbygoKTogTGVkZ2VyTmV0d29yayB8IHVuZGVmaW5lZCA9PiB7XG4gICAgcmV0dXJuIHN1cHBvcnRlZExlZGdlci5maW5kKChuKSA9PiBuLnNsdWcgPT09IGNoYWluKTtcbiAgfSwgW2NoYWluLCBzdXBwb3J0ZWRMZWRnZXJdKTtcblxuICBjb25zdCBhY2NvdW50TmFtZSA9IHVzZU1lbW8oKCkgPT4gc2VsZWN0ZWRDaGFpbj8uYWNjb3VudE5hbWUgfHwgJ1Vua25vd24nLCBbc2VsZWN0ZWRDaGFpbl0pO1xuXG4gIGNvbnN0IHsgZXJyb3IsIGdldEFkZHJlc3MsIGlzTG9hZGluZywgaXNMb2NrZWQsIGxlZGdlciwgcmVmcmVzaCwgd2FybmluZyB9ID0gdXNlTGVkZ2VyKGNoYWluKTtcblxuICBjb25zdCBvblByZXZpb3VzU3RlcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRGaXJzdFN0ZXAodHJ1ZSk7XG4gICAgc2V0U2VsZWN0ZWRBY2NvdW50cyhbXSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNoYWluQ2hhbmdlOiBCYXNpY09uQ2hhbmdlRnVuY3Rpb24gPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIHNldENoYWluKHZhbHVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uTG9hZE1vcmUgPSB1c2VDYWxsYmFjaygobG9hZGluZzogYm9vbGVhbiwgcGFnZTogbnVtYmVyKTogKCkgPT4gdm9pZCA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghbG9hZGluZykge1xuICAgICAgICBzZXRJc0xvYWRNb3JlKHRydWUpO1xuICAgICAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcblxuICAgICAgICBjb25zdCBoYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcGFnZSAqIExJTUlUX1BFUl9QQUdFO1xuICAgICAgICAgIGNvbnN0IGVuZCA9IChwYWdlICsgMSkgKiBMSU1JVF9QRVJfUEFHRTtcblxuICAgICAgICAgIGNvbnN0IHJzOiBBcnJheTxJbXBvcnRMZWRnZXJJdGVtIHwgbnVsbD4gPSBuZXcgQXJyYXk8SW1wb3J0TGVkZ2VySXRlbSB8IG51bGw+KExJTUlUX1BFUl9QQUdFKS5maWxsKG51bGwpO1xuXG4gICAgICAgICAgc2V0TGVkZ2VyQWNjb3VudHMoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2U3RhdGUsIC4uLnJzXTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGF3YWl0IGdldEFkZHJlc3MoaSk7XG5cbiAgICAgICAgICAgICAgcnNbaSAtIHN0YXJ0XSA9IHtcbiAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXg6IGksXG4gICAgICAgICAgICAgICAgbmFtZTogYExlZGdlciAke2FjY291bnROYW1lfSAke2kgKyAxfWAsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgICAgICAgIHNldEZpcnN0U3RlcCh0cnVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0TGVkZ2VyQWNjb3VudHMoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gWy4uLnByZXZTdGF0ZV07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHJzW2kgLSBzdGFydF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlcigpLnRoZW4oKS5jYXRjaCgpLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkTW9yZShmYWxzZSkpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtnZXRBZGRyZXNzLCBhY2NvdW50TmFtZSwgcmVmcmVzaF0pO1xuXG4gIGNvbnN0IG9uTmV4dFN0ZXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Rmlyc3RTdGVwKGZhbHNlKTtcblxuICAgIGlmICghcGFnZSkge1xuICAgICAgb25Mb2FkTW9yZShpc0xvYWRNb3JlLCBwYWdlKSgpO1xuICAgIH1cbiAgfSwgW2lzTG9hZE1vcmUsIG9uTG9hZE1vcmUsIHBhZ2VdKTtcblxuICBjb25zdCBvbkNsaWNrSXRlbSA9IHVzZUNhbGxiYWNrKChzZWxlY3RlZEFjY291bnRzOiBJbXBvcnRMZWRnZXJJdGVtW10sIGl0ZW06IEltcG9ydExlZGdlckl0ZW0pOiAoKSA9PiB2b2lkID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RzID0gc2VsZWN0ZWRBY2NvdW50cy5maW5kKChpdCkgPT4gaXQuYWRkcmVzcyA9PT0gaXRlbS5hZGRyZXNzKTtcbiAgICAgIGxldCByZXN1bHQ6IEltcG9ydExlZGdlckl0ZW1bXTtcblxuICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICByZXN1bHQgPSBzZWxlY3RlZEFjY291bnRzLmZpbHRlcigoaXQpID0+IGl0LmFkZHJlc3MgIT09IGl0ZW0uYWRkcmVzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBbLi4uc2VsZWN0ZWRBY2NvdW50c107XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBzZXRTZWxlY3RlZEFjY291bnRzKHJlc3VsdCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSB1c2VDYWxsYmFjaygoc2VsZWN0ZWRBY2NvdW50czogSW1wb3J0TGVkZ2VySXRlbVtdKTogKChpdGVtOiBJbXBvcnRMZWRnZXJJdGVtIHwgbnVsbCwga2V5OiBzdHJpbmcpID0+IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICByZXR1cm4gKGl0ZW06IEltcG9ydExlZGdlckl0ZW0gfCBudWxsLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEFjY291bnRXaXRoTmFtZVNrZWxldG9uXG4gICAgICAgICAgICBkaXJlY3Rpb249J3ZlcnRpY2FsJ1xuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSAhIXNlbGVjdGVkQWNjb3VudHMuZmluZCgoaXQpID0+IGl0LmFkZHJlc3MgPT09IGl0ZW0uYWRkcmVzcyk7XG4gICAgICBjb25zdCBvcmlnaW5BZGRyZXNzID0gcmVmb3JtYXRBZGRyZXNzKGl0ZW0uYWRkcmVzcywgNDIpO1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSAhIWFjY291bnRzLmZpbmQoKGFjYykgPT4gYWNjLmFkZHJlc3MgPT09IG9yaWdpbkFkZHJlc3MpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QWNjb3VudEl0ZW1XaXRoTmFtZVxuICAgICAgICAgIGFjY291bnROYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgYWRkcmVzcz17aXRlbS5hZGRyZXNzfVxuICAgICAgICAgIGNsYXNzTmFtZT17Q04oeyBkaXNhYmxlZDogZGlzYWJsZWQgfSl9XG4gICAgICAgICAgZGlyZWN0aW9uPSd2ZXJ0aWNhbCdcbiAgICAgICAgICBnZW5lc2lzSGFzaD17c2VsZWN0ZWRDaGFpbj8uZ2VuZXNpc0hhc2h9XG4gICAgICAgICAgaXNTZWxlY3RlZD17c2VsZWN0ZWQgfHwgZGlzYWJsZWR9XG4gICAgICAgICAga2V5PXtpdGVtLmFkZHJlc3N9XG4gICAgICAgICAgb25DbGljaz17ZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBvbkNsaWNrSXRlbShzZWxlY3RlZEFjY291bnRzLCBpdGVtKX1cbiAgICAgICAgICBzaG93VW5zZWxlY3RJY29uPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9O1xuICB9LCBbYWNjb3VudHMsIG9uQ2xpY2tJdGVtLCBzZWxlY3RlZENoYWluPy5nZW5lc2lzSGFzaF0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRBY2NvdW50cy5sZW5ndGggfHwgIXNlbGVjdGVkQ2hhaW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNyZWF0ZUFjY291bnRIYXJkd2FyZU11bHRpcGxlKHtcbiAgICAgICAgYWNjb3VudHM6IHNlbGVjdGVkQWNjb3VudHMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgIGFjY291bnRJbmRleDogaXRlbS5hY2NvdW50SW5kZXgsXG4gICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzLFxuICAgICAgICAgIGFkZHJlc3NPZmZzZXQ6IDAsIC8vIGRvbid0IGNoYW5nZVxuICAgICAgICAgIGdlbmVzaXNIYXNoOiBzZWxlY3RlZENoYWluLmdlbmVzaXNIYXNoLFxuICAgICAgICAgIGhhcmR3YXJlVHlwZTogJ2xlZGdlcicsXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgIGlzRXRoZXJldW06IHNlbGVjdGVkQ2hhaW4uaXNFdGhlcmV1bVxuICAgICAgICB9KSlcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG4gIH0sIFtzZWxlY3RlZEFjY291bnRzLCBzZWxlY3RlZENoYWluLCBvbkNvbXBsZXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFjY291bnRzKFtdKTtcbiAgICBzZXRMZWRnZXJBY2NvdW50cyhbXSk7XG4gICAgc2V0UGFnZSgwKTtcbiAgfSwgW2xlZGdlcl0pO1xuXG4gIGNvbnN0IGlzQ29ubmVjdGVkID0gIWlzTG9ja2VkICYmICFpc0xvYWRpbmcgJiYgISFsZWRnZXI7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfT5cbiAgICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgICAgb25CYWNrPXtmaXJzdFN0ZXAgPyBvbkJhY2sgOiBvblByZXZpb3VzU3RlcH1cbiAgICAgICAgcmlnaHRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICBjaGlsZHJlbjogdCgnQ29ubmVjdCBMZWRnZXIgZGV2aWNlJyksXG4gICAgICAgICAgaWNvbjogRm9vdGVySWNvbixcbiAgICAgICAgICBkaXNhYmxlZDogIWlzQ29ubmVjdGVkIHx8ICghZmlyc3RTdGVwICYmICFzZWxlY3RlZEFjY291bnRzLmxlbmd0aCksXG4gICAgICAgICAgb25DbGljazogZmlyc3RTdGVwID8gb25OZXh0U3RlcCA6IG9uU3VibWl0LFxuICAgICAgICAgIGxvYWRpbmc6IGlzU3VibWl0dGluZ1xuICAgICAgICB9fVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246IDxDbG9zZUljb24gLz4sXG4gICAgICAgICAgICBvbkNsaWNrOiBnb0hvbWVcbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAgIHRpdGxlPXt0KCdDb25uZWN0IExlZGdlciBkZXZpY2UnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NOKCdjb250YWluZXInKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Yi10aXRsZSc+XG4gICAgICAgICAgICB7dCgnQ29ubmVjdCBhbmQgdW5sb2NrIHlvdXIgTGVkZ2VyLCB0aGVuIG9wZW4gdGhlIHNlbGVjdGVkIG5ldHdvcmsgb24geW91ciBMZWRnZXIuJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlyc3RTdGVwICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICA8RHVhbExvZ29cbiAgICAgICAgICAgICAgICAgICAgbGVmdExvZ289eyhcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZT0nc3F1aXJjbGUnXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0RlZmF1bHRMb2dvc01hcC5zdWJ3YWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTZ9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgcmlnaHRMb2dvPXsoXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezU2fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU9J3NxdWlyY2xlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtEZWZhdWx0TG9nb3NNYXAubGVkZ2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezU2fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDaGFpblNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBpdGVtcz17bmV0d29ya3N9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17dCgnU2VsZWN0IG5ldHdvcmsnKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYWluQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1NlbGVjdCBuZXR3b3JrJyl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhaW59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBibG9jaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Q04oJ2xlZGdlci1idXR0b24nLCB7IGNvbm5lY3RlZDogaXNDb25uZWN0ZWQsIGxvYWRpbmc6IGlzTG9hZGluZyB9KX1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRBbGlnbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgIGljb249eyhcbiAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPSd2YXIoLS1pY29uLWJnLWNvbG9yKSdcbiAgICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e2lzQ29ubmVjdGVkID8gU3dhdGNoZXMgOiBDaXJjbGVOb3RjaH1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVmcmVzaH1cbiAgICAgICAgICAgICAgICAgIHNjaGVtYT0nc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWRnZXItYnV0dG9uLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xlZGdlci1pbmZvLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgIHtpc0Nvbm5lY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0KCdEZXZpY2UgZm91bmQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB3YXJuaW5nIHx8IGVycm9yIHx8IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVkZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0KCdMb2FkaW5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHQoJ1NlYXJjaGluZyBMZWRnZXIgZGV2aWNlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGlzQ29ubmVjdGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2staWNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtDaGVja0NpcmNsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nbWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICFmaXJzdFN0ZXAgJiYgKFxuICAgICAgICAgICAgICA8U3dMaXN0LlNlY3Rpb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpc3QtY29udGFpbmVyJ1xuICAgICAgICAgICAgICAgIGRpc3BsYXlSb3c9e3RydWV9XG4gICAgICAgICAgICAgICAgbGlzdD17bGVkZ2VyQWNjb3VudHN9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgICAgaGFzTW9yZTogIWlzTG9hZE1vcmUsXG4gICAgICAgICAgICAgICAgICBsb2FkTW9yZTogb25Mb2FkTW9yZShpc0xvYWRNb3JlLCBwYWdlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVySXRlbShzZWxlY3RlZEFjY291bnRzKX1cbiAgICAgICAgICAgICAgICByZW5kZXJPblNjcm9sbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgcm93R2FwPSd2YXIoLS1saXN0LWdhcCknXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBDb25uZWN0TGVkZ2VyID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLS1saXN0LWdhcCc6IHRva2VuLnNpemVYUyxcblxuICAgICcuYW50LXN3LXNjcmVlbi1sYXlvdXQtYm9keSc6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAnLmNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IGAke3Rva2VuLnBhZGRpbmd9cHggJHt0b2tlbi5wYWRkaW5nfXB4IDBgLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH0sXG5cbiAgICAnLnN1Yi10aXRsZSc6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNixcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNixcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgJy5sb2dvJzoge1xuICAgICAgbWFyZ2luOiBgJHt0b2tlbi5jb250cm9sSGVpZ2h0TEd9cHggMGAsXG4gICAgICAnLS1sb2dvLXNpemUnOiB0b2tlbi5jb250cm9sSGVpZ2h0TEcgKyB0b2tlbi5jb250cm9sSGVpZ2h0WFMsXG5cbiAgICAgICcuZHVhbC1sb2dvLWNvbnRhaW5lcic6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgICcubGVkZ2VyLWJ1dHRvbi1jb250ZW50Jzoge1xuICAgICAgbWFyZ2luTGVmdDogdG9rZW4ubWFyZ2luU00sXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXg6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgJy5sZWRnZXItaW5mby10ZXh0Jzoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG4gICAgfSxcblxuICAgICcubGVkZ2VyLWJ1dHRvbic6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luIC0gMixcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ1NNfXB4YCxcbiAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnZ3JheS00J10sXG5cbiAgICAgICcmLmNvbm5lY3RlZCc6IHtcbiAgICAgICAgJy0taWNvbi1iZy1jb2xvcic6IHRva2VuWydncmVlbi02J11cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5jaGVjay1pY29uJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yU3VjY2Vzc1xuICAgIH0sXG5cbiAgICAnLmxpc3QtY29udGFpbmVyJzoge1xuICAgICAgbWFyZ2luOiBgJHt0b2tlbi5tYXJnaW59cHggLSR7dG9rZW4ubWFyZ2lufXB4IDBgLFxuICAgICAgZmxleDogMVxuICAgIH0sXG5cbiAgICAnLmFudC1zdy1saXN0Jzoge1xuICAgICAgJy5hbnQtd2ViMy1ibG9jayc6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxuXG4gICAgICAgICcmLmRpc2FibGVkJzoge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCdcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJy5hbnQtYWNjb3VudC1pdGVtJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nU00sXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHRva2VuLnBhZGRpbmdTTVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLmxvYWRpbmcnOiB7XG4gICAgICAnLmFudGljb24nOiB7XG4gICAgICAgIGFuaW1hdGlvbjogJ3NwaW5uZXItbG9hZGluZyAxcyBpbmZpbml0ZSBsaW5lYXInXG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RMZWRnZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNjgsNDAuN2E5Niw5NiwwLDEsMS04MCwwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJkdW90b25lXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE2OCw0MC43YTk2LDk2LDAsMSwxLTgwLDBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIzMiwxMjhBMTA0LDEwNCwwLDEsMSw4NC43LDMzLjRhOC4xLDguMSwwLDAsMSwxMC42LDQsOCw4LDAsMCwxLTQsMTAuNiw4OCw4OCwwLDEsMCw3My40LDAsOCw4LDAsMCwxLTQtMTAuNiw4LjEsOC4xLDAsMCwxLDEwLjYtNEExMDQuNCwxMDQuNCwwLDAsMSwyMzIsMTI4WlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNjgsNDAuN2E5Niw5NiwwLDEsMS04MCwwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE2OCw0MC43YTk2LDk2LDAsMSwxLTgwLDBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwicmVndWxhclwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNjgsNDAuN2E5Niw5NiwwLDEsMS04MCwwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBDaXJjbGVOb3RjaCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CYXNlLCBPYmplY3QuYXNzaWduKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIHJlbmRlclBhdGg6IHJlbmRlclBhdGhcbiAgfSkpO1xufSk7XG5DaXJjbGVOb3RjaC5kaXNwbGF5TmFtZSA9IFwiQ2lyY2xlTm90Y2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlTm90Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaXJjbGVOb3RjaC5lc20uanMubWFwXG4iXSwibmFtZXMiOlsicmVmb3JtYXRBZGRyZXNzIiwiQWNjb3VudEl0ZW1XaXRoTmFtZSIsIkFjY291bnRXaXRoTmFtZVNrZWxldG9uIiwiQ2hhaW5TZWxlY3RvciIsIkNsb3NlSWNvbiIsIkR1YWxMb2dvIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJBVFRBQ0hfQUNDT1VOVF9NT0RBTCIsInVzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQiLCJ1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQiLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJ1c2VHZXRTdXBwb3J0ZWRMZWRnZXIiLCJ1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCIsInVzZUxlZGdlciIsImNyZWF0ZUFjY291bnRIYXJkd2FyZU11bHRpcGxlIiwiQmFja2dyb3VuZEljb24iLCJCdXR0b24iLCJJY29uIiwiSW1hZ2UiLCJTd0xpc3QiLCJDTiIsIkNoZWNrQ2lyY2xlIiwiQ2lyY2xlTm90Y2giLCJTd2F0Y2hlcyIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVNlbGVjdG9yIiwic3R5bGVkIiwiRGVmYXVsdExvZ29zTWFwIiwiTElNSVRfUEVSX1BBR0UiLCJGb290ZXJJY29uIiwiQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0IiwiZ29Ib21lIiwic3VwcG9ydGVkTGVkZ2VyIiwib25Db21wbGV0ZSIsIm9uQmFjayIsImFjY291bnRzIiwic3RhdGUiLCJhY2NvdW50U3RhdGUiLCJmaXJzdFN0ZXAiLCJzZXRGaXJzdFN0ZXAiLCJuZXR3b3JrcyIsIm1hcCIsIm5ldHdvcmsiLCJuYW1lIiwibmV0d29ya05hbWUiLCJzbHVnIiwiY2hhaW4iLCJzZXRDaGFpbiIsImxlZGdlckFjY291bnRzIiwic2V0TGVkZ2VyQWNjb3VudHMiLCJwYWdlIiwic2V0UGFnZSIsInNlbGVjdGVkQWNjb3VudHMiLCJzZXRTZWxlY3RlZEFjY291bnRzIiwiaXNMb2FkTW9yZSIsInNldElzTG9hZE1vcmUiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJzZWxlY3RlZENoYWluIiwiZmluZCIsIm4iLCJhY2NvdW50TmFtZSIsImVycm9yIiwiZ2V0QWRkcmVzcyIsImlzTG9hZGluZyIsImlzTG9ja2VkIiwibGVkZ2VyIiwicmVmcmVzaCIsIndhcm5pbmciLCJvblByZXZpb3VzU3RlcCIsIm9uQ2hhaW5DaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0Iiwib25Mb2FkTW9yZSIsImxvYWRpbmciLCJoYW5kbGVyIiwic3RhcnQiLCJlbmQiLCJycyIsIkFycmF5IiwiZmlsbCIsInByZXZTdGF0ZSIsImkiLCJhZGRyZXNzIiwiYWNjb3VudEluZGV4IiwiZSIsInJlc3VsdCIsInRoZW4iLCJjYXRjaCIsImZpbmFsbHkiLCJvbk5leHRTdGVwIiwib25DbGlja0l0ZW0iLCJpdGVtIiwiZXhpc3RzIiwiaXQiLCJmaWx0ZXIiLCJwdXNoIiwicmVuZGVySXRlbSIsImtleSIsInNlbGVjdGVkIiwib3JpZ2luQWRkcmVzcyIsImRpc2FibGVkIiwiYWNjIiwiZ2VuZXNpc0hhc2giLCJ1bmRlZmluZWQiLCJvblN1Ym1pdCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJhZGRyZXNzT2Zmc2V0IiwiaGFyZHdhcmVUeXBlIiwiaXNFdGhlcmV1bSIsImNvbnNvbGUiLCJsb2ciLCJpc0Nvbm5lY3RlZCIsImNoaWxkcmVuIiwiaWNvbiIsIm9uQ2xpY2siLCJzdWJ3YWxsZXQiLCJjb25uZWN0ZWQiLCJoYXNNb3JlIiwibG9hZE1vcmUiLCJDb25uZWN0TGVkZ2VyIiwidGhlbWUiLCJ0b2tlbiIsInNpemVYUyIsIm92ZXJmbG93IiwicGFkZGluZyIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImNvbG9yIiwiY29sb3JUZXh0RGVzY3JpcHRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJjb250cm9sSGVpZ2h0TEciLCJjb250cm9sSGVpZ2h0WFMiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luU00iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4IiwidGV4dE92ZXJmbG93IiwibWFyZ2luVG9wIiwicGFkZGluZ1NNIiwiY29sb3JTdWNjZXNzIiwib3BhY2l0eSIsImN1cnNvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiYW5pbWF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==