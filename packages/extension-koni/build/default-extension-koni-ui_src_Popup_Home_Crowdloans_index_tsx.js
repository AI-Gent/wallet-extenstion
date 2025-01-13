"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_Crowdloans_index_tsx"],{

/***/ "../../node_modules/@subwallet/react-ui/es/web3-block/crowdloan-item/index.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@subwallet/react-ui/es/web3-block/crowdloan-item/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config-provider */ "../../node_modules/@subwallet/react-ui/es/config-provider/context.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "../../node_modules/@subwallet/react-ui/es/web3-block/crowdloan-item/style/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "../../node_modules/@subwallet/react-ui/es/web3-block/base/index.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logo */ "../../node_modules/@subwallet/react-ui/es/logo/index.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../number */ "../../node_modules/@subwallet/react-ui/es/number/index.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const CrowdloanItem = _a => {
  var {
      displayNetwork,
      paraChain,
      networkKey,
      subNetworkKey,
      symbol,
      subSymbol,
      networkMainLogoSize = 40,
      networkMainLogoShape = 'squircle',
      networkSubLogoShape = 'circle',
      isShowSubLogo,
      crowdloanStatusTag,
      balanceValue,
      convertedBalanceValue,
      decimal,
      displayToken,
      leftItem,
      middleItem,
      rightItem,
      className,
      hideBalance
    } = _a,
    props = __rest(_a, ["displayNetwork", "paraChain", "networkKey", "subNetworkKey", "symbol", "subSymbol", "networkMainLogoSize", "networkMainLogoShape", "networkSubLogoShape", "isShowSubLogo", "crowdloanStatusTag", "balanceValue", "convertedBalanceValue", "decimal", "displayToken", "leftItem", "middleItem", "rightItem", "className", "hideBalance"]);
  const {
    getPrefixCls
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  const prefixCls = getPrefixCls('crowdloan-item');
  const [wrapSSR, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_3__["default"])(prefixCls);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, hashId, className);
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, {
    className: classes,
    leftItem: leftItem || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: networkMainLogoSize,
      network: networkKey,
      token: symbol,
      shape: networkMainLogoShape,
      isShowSubLogo: isShowSubLogo,
      subLogoShape: networkSubLogoShape,
      subNetwork: subNetworkKey,
      subToken: subSymbol
    }),
    middleItem: middleItem || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `${prefixCls}-left-content`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `${prefixCls}-name`
    }, displayNetwork), crowdloanStatusTag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `${prefixCls}-parachain`
    }, paraChain)),
    rightItem: rightItem || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `${prefixCls}-right-part`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: balanceValue,
      decimal: decimal,
      decimalOpacity: 0.45,
      hide: hideBalance,
      suffix: displayToken
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 12,
      decimal: 0,
      hide: hideBalance,
      value: convertedBalanceValue,
      prefix: "$",
      intOpacity: 0.45,
      decimalOpacity: 0.45,
      unitOpacity: 0.45
    }))
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrowdloanItem);

/***/ }),

/***/ "../../node_modules/@subwallet/react-ui/es/web3-block/crowdloan-item/style/index.js":
/*!******************************************************************************************!*\
  !*** ../../node_modules/@subwallet/react-ui/es/web3-block/crowdloan-item/style/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/internal */ "../../node_modules/@subwallet/react-ui/es/theme/util/genComponentStyleHook.js");
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/internal */ "../../node_modules/@subwallet/react-ui/es/theme/util/statistic.js");

const genCrowdloanItemStyle = token => {
  const {
    componentCls
  } = token;
  return [{
    [componentCls]: {
      backgroundColor: token.colorBgSecondary,
      borderRadius: token.borderRadiusLG,
      '&:hover': {
        backgroundColor: token.colorBgInput
      },
      [`${componentCls}-name`]: {
        fontSize: token.fontSizeLG,
        lineHeight: token.lineHeightLG,
        fontWeight: 600,
        color: token.colorTextLight1,
        paddingRight: 8,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      [`${componentCls}-parachain`]: {
        fontSize: token.fontSizeSM,
        lineHeight: token.lineHeightSM,
        fontWeight: 500,
        color: token.colorTextLight4
      },
      [`${componentCls}-right-part`]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingRight: token.paddingXS
      },
      [`${componentCls}-left-content`]: {
        display: 'flex',
        alignItems: 'center'
      }
    }
  }];
};
// ============================== Export ==============================
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__["default"])('CrowdloanItem', token => {
  const accountItemToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.merge)(token);
  return [genCrowdloanItemStyle(accountItemToken)];
}));

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/Crowdloans/index.tsx":
/*!****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Crowdloans/index.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/crowdloan-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/tag/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Rocket.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0











var FilterValue;
(function (FilterValue) {
  FilterValue["POLKADOT_PARACHAIN"] = "Polkadot parachain";
  FilterValue["KUSAMA_PARACHAIN"] = "Kusama parachain";
  FilterValue["WINNER"] = "completed";
  FilterValue["FAIL"] = "failed";
})(FilterValue || (FilterValue = {}));
function getTagColor(paraState) {
  if (!paraState) {
    return 'default';
  }
  if (paraState.valueOf() === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.COMPLETED.valueOf()) {
    return 'success';
  }
  if (paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.FAILED.valueOf()) {
    return 'error';
  }
  if (paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.ONGOING.valueOf()) {
    return 'warning';
  }
  return 'default';
}
function getRelayParentKey(groupDisplayName) {
  if (groupDisplayName === 'Polkadot parachain') {
    return 'polkadot';
  } else {
    return 'kusama';
  }
}
const FILTER_MODAL_ID = 'crowdloan-filter-modal';
function Component({
  className = ''
}) {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetCurrentPage)('/home/crowdloans');
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const items = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetCrowdloanList)();
  const {
    activeModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__.ModalContext);
  const {
    isShowBalance
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.settings);
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useFilterModal)(FILTER_MODAL_ID);
  const filterOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [{
    label: t('Polkadot parachain'),
    value: FilterValue.POLKADOT_PARACHAIN
  }, {
    label: t('Kusama parachain'),
    value: FilterValue.KUSAMA_PARACHAIN
  }, {
    label: t('Win'),
    value: FilterValue.WINNER
  }, {
    label: t('Fail'),
    value: FilterValue.FAIL
  }], [t]);
  const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return item => {
      if (!selectedFilters.length) {
        return true;
      }
      for (const filter of selectedFilters) {
        if (filter === FilterValue.POLKADOT_PARACHAIN) {
          if (item.relayParentDisplayName === 'Polkadot parachain') {
            return true;
          }
        } else if (filter === FilterValue.KUSAMA_PARACHAIN) {
          if (item.relayParentDisplayName === 'Kusama parachain') {
            return true;
          }
        } else if (filter === FilterValue.WINNER) {
          if (item.paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.COMPLETED) {
            return true;
          }
        } else if (filter === FilterValue.FAIL) {
          if (item.paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.FAILED) {
            return true;
          }
        }
      }
      return false;
    };
  }, [selectedFilters]);

  // filter
  const onClickActionBtn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(e => {
    e && e.stopPropagation();
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);
  const searchFunction = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((item, searchText) => {
    const searchTextLowerCase = searchText.toLowerCase();
    return item.chainDisplayName.toLowerCase().includes(searchTextLowerCase);
  }, []);

  // render item
  const getParaStateLabel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(paraState => {
    if (!paraState) {
      return '';
    }
    if (paraState.valueOf() === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.COMPLETED.valueOf()) {
      return t('Win');
    }
    if (paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.FAILED.valueOf()) {
      return t('Fail');
    }
    if (paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.ONGOING.valueOf()) {
      return t('Active');
    }
    return '';
  }, [t]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(item => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__["default"], {
      balanceValue: item.contribute,
      className: 'crowdloan-item',
      convertedBalanceValue: item.convertedContribute,
      crowdloanStatusTag: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: getTagColor(item.paraState),
        children: getParaStateLabel(item.paraState)
      }),
      decimal: 0,
      displayNetwork: item.chainDisplayName,
      displayToken: item.symbol,
      hideBalance: !isShowBalance,
      isShowSubLogo: true,
      networkKey: item.slug,
      paraChain: item.relayParentDisplayName,
      subNetworkKey: getRelayParentKey(item.relayParentDisplayName)
    }, `${item.symbol}_${item.slug}`);
  }, [getParaStateLabel, isShowBalance]);

  // empty list
  const emptyCrowdloanList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      emptyMessage: t('Your crowdloans will show up here'),
      emptyTitle: t('No crowdloans found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_9__["default"]
    });
  }, [t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `crowdloans ${className}`,
    resolve: dataContext.awaitStores(['crowdloan', 'price', 'chainStore']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: false,
      subHeaderPaddingVertical: true,
      title: t('Crowdloans'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Section, {
        actionBtnIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"]
        }),
        enableSearchInput: true,
        filterBy: filterFunction,
        list: items,
        onClickActionBtn: onClickActionBtn,
        renderItem: renderItem,
        renderWhenEmpty: emptyCrowdloanList,
        searchFunction: searchFunction,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search project'),
        showActionBtn: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.FilterModal, {
        applyFilterButtonTitle: t('Apply filter'),
        id: FILTER_MODAL_ID,
        onApplyFilter: onApplyFilter,
        onCancel: onCloseFilterModal,
        onChangeOption: onChangeFilterOption,
        optionSelectionMap: filterSelectionMap,
        options: filterOptions,
        title: t('Filter')
      })]
    })
  });
}
const Crowdloans = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(Component).withConfig({
  displayName: "Crowdloans",
  componentId: "sc-14oyusp-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    color: token.colorTextLight1,
    fontSize: token.fontSizeLG,
    '.crowdloan-item': {
      marginBottom: token.marginXS
    },
    '.crowdloan__filter_option': {
      width: '100%'
    },
    '.crowdloan__filter_option_wrapper': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.marginLG
    },
    '.ant-sw-list-section': {
      height: '100%'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Crowdloans);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9Dcm93ZGxvYW5zX2luZGV4X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYSxTQUFJLElBQUksU0FBSTtBQUN6QjtBQUNBO0FBQ0EsNEhBQTRILGNBQWM7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7QUFDK0I7QUFDSztBQUNrQjtBQUN2QjtBQUNDO0FBQ0Y7QUFDSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsNkNBQWdCLENBQUMsMkRBQWE7QUFDcEM7QUFDQSw0QkFBNEIsa0RBQVE7QUFDcEMsa0JBQWtCLGlEQUFVO0FBQzVCLCtCQUErQixnREFBbUIsQ0FBQyw2Q0FBUyxrQkFBa0I7QUFDOUU7QUFDQSx1Q0FBdUMsZ0RBQW1CLENBQUMsNkNBQUk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQ0FBMkMsZ0RBQW1CLDJCQUEyQixnREFBbUI7QUFDNUcsb0JBQW9CLFVBQVU7QUFDOUIsS0FBSyxlQUFlLGdEQUFtQjtBQUN2QyxvQkFBb0IsVUFBVTtBQUM5QixLQUFLLHFEQUFxRCxnREFBbUI7QUFDN0Usb0JBQW9CLFVBQVU7QUFDOUIsS0FBSztBQUNMLHlDQUF5QyxnREFBbUI7QUFDNUQsb0JBQW9CLFVBQVU7QUFDOUIsS0FBSyxlQUFlLGdEQUFtQixDQUFDLCtDQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQixnREFBbUIsQ0FBQywrQ0FBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztB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MUIsaUJBQWlCLEVBQUU7TUFDakJDLFlBQVksRUFBRUwsS0FBSyxDQUFDTTtJQUN0QixDQUFDO0lBRUQsMkJBQTJCLEVBQUU7TUFDM0JDLEtBQUssRUFBRTtJQUNULENBQUM7SUFFRCxtQ0FBbUMsRUFBRTtNQUNuQ0MsT0FBTyxFQUFFLE1BQU07TUFDZkMsYUFBYSxFQUFFLFFBQVE7TUFDdkJDLEdBQUcsRUFBRVYsS0FBSyxDQUFDVztJQUNiLENBQUM7SUFFRCxzQkFBc0IsRUFBRTtNQUN0QkMsTUFBTSxFQUFFO0lBQ1Y7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVkLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3Vid2FsbGV0L3JlYWN0LXVpL2VzL3dlYjMtYmxvY2svY3Jvd2Rsb2FuLWl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvQHN1YndhbGxldC9yZWFjdC11aS9lcy93ZWIzLWJsb2NrL2Nyb3dkbG9hbi1pdGVtL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvQ3Jvd2Rsb2Fucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgV2ViM0Jsb2NrIGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vbG9nbyc7XG5pbXBvcnQgTnVtYmVyIGZyb20gJy4uLy4uL251bWJlcic7XG5jb25zdCBDcm93ZGxvYW5JdGVtID0gX2EgPT4ge1xuICB2YXIge1xuICAgICAgZGlzcGxheU5ldHdvcmssXG4gICAgICBwYXJhQ2hhaW4sXG4gICAgICBuZXR3b3JrS2V5LFxuICAgICAgc3ViTmV0d29ya0tleSxcbiAgICAgIHN5bWJvbCxcbiAgICAgIHN1YlN5bWJvbCxcbiAgICAgIG5ldHdvcmtNYWluTG9nb1NpemUgPSA0MCxcbiAgICAgIG5ldHdvcmtNYWluTG9nb1NoYXBlID0gJ3NxdWlyY2xlJyxcbiAgICAgIG5ldHdvcmtTdWJMb2dvU2hhcGUgPSAnY2lyY2xlJyxcbiAgICAgIGlzU2hvd1N1YkxvZ28sXG4gICAgICBjcm93ZGxvYW5TdGF0dXNUYWcsXG4gICAgICBiYWxhbmNlVmFsdWUsXG4gICAgICBjb252ZXJ0ZWRCYWxhbmNlVmFsdWUsXG4gICAgICBkZWNpbWFsLFxuICAgICAgZGlzcGxheVRva2VuLFxuICAgICAgbGVmdEl0ZW0sXG4gICAgICBtaWRkbGVJdGVtLFxuICAgICAgcmlnaHRJdGVtLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaGlkZUJhbGFuY2VcbiAgICB9ID0gX2EsXG4gICAgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImRpc3BsYXlOZXR3b3JrXCIsIFwicGFyYUNoYWluXCIsIFwibmV0d29ya0tleVwiLCBcInN1Yk5ldHdvcmtLZXlcIiwgXCJzeW1ib2xcIiwgXCJzdWJTeW1ib2xcIiwgXCJuZXR3b3JrTWFpbkxvZ29TaXplXCIsIFwibmV0d29ya01haW5Mb2dvU2hhcGVcIiwgXCJuZXR3b3JrU3ViTG9nb1NoYXBlXCIsIFwiaXNTaG93U3ViTG9nb1wiLCBcImNyb3dkbG9hblN0YXR1c1RhZ1wiLCBcImJhbGFuY2VWYWx1ZVwiLCBcImNvbnZlcnRlZEJhbGFuY2VWYWx1ZVwiLCBcImRlY2ltYWxcIiwgXCJkaXNwbGF5VG9rZW5cIiwgXCJsZWZ0SXRlbVwiLCBcIm1pZGRsZUl0ZW1cIiwgXCJyaWdodEl0ZW1cIiwgXCJjbGFzc05hbWVcIiwgXCJoaWRlQmFsYW5jZVwiXSk7XG4gIGNvbnN0IHtcbiAgICBnZXRQcmVmaXhDbHNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnY3Jvd2Rsb2FuLWl0ZW0nKTtcbiAgY29uc3QgW3dyYXBTU1IsIGhhc2hJZF0gPSB1c2VTdHlsZShwcmVmaXhDbHMpO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGhhc2hJZCwgY2xhc3NOYW1lKTtcbiAgcmV0dXJuIHdyYXBTU1IoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdlYjNCbG9jaywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgbGVmdEl0ZW06IGxlZnRJdGVtIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvZ28sIHtcbiAgICAgIHNpemU6IG5ldHdvcmtNYWluTG9nb1NpemUsXG4gICAgICBuZXR3b3JrOiBuZXR3b3JrS2V5LFxuICAgICAgdG9rZW46IHN5bWJvbCxcbiAgICAgIHNoYXBlOiBuZXR3b3JrTWFpbkxvZ29TaGFwZSxcbiAgICAgIGlzU2hvd1N1YkxvZ286IGlzU2hvd1N1YkxvZ28sXG4gICAgICBzdWJMb2dvU2hhcGU6IG5ldHdvcmtTdWJMb2dvU2hhcGUsXG4gICAgICBzdWJOZXR3b3JrOiBzdWJOZXR3b3JrS2V5LFxuICAgICAgc3ViVG9rZW46IHN1YlN5bWJvbFxuICAgIH0pLFxuICAgIG1pZGRsZUl0ZW06IG1pZGRsZUl0ZW0gfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWxlZnQtY29udGVudGBcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGAke3ByZWZpeENsc30tbmFtZWBcbiAgICB9LCBkaXNwbGF5TmV0d29yayksIGNyb3dkbG9hblN0YXR1c1RhZyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4Q2xzfS1wYXJhY2hhaW5gXG4gICAgfSwgcGFyYUNoYWluKSksXG4gICAgcmlnaHRJdGVtOiByaWdodEl0ZW0gfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LXJpZ2h0LXBhcnRgXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTnVtYmVyLCB7XG4gICAgICB2YWx1ZTogYmFsYW5jZVZhbHVlLFxuICAgICAgZGVjaW1hbDogZGVjaW1hbCxcbiAgICAgIGRlY2ltYWxPcGFjaXR5OiAwLjQ1LFxuICAgICAgaGlkZTogaGlkZUJhbGFuY2UsXG4gICAgICBzdWZmaXg6IGRpc3BsYXlUb2tlblxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOdW1iZXIsIHtcbiAgICAgIHNpemU6IDEyLFxuICAgICAgZGVjaW1hbDogMCxcbiAgICAgIGhpZGU6IGhpZGVCYWxhbmNlLFxuICAgICAgdmFsdWU6IGNvbnZlcnRlZEJhbGFuY2VWYWx1ZSxcbiAgICAgIHByZWZpeDogXCIkXCIsXG4gICAgICBpbnRPcGFjaXR5OiAwLjQ1LFxuICAgICAgZGVjaW1hbE9wYWNpdHk6IDAuNDUsXG4gICAgICB1bml0T3BhY2l0eTogMC40NVxuICAgIH0pKVxuICB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENyb3dkbG9hbkl0ZW07IiwiaW1wb3J0IHsgZ2VuQ29tcG9uZW50U3R5bGVIb29rLCBtZXJnZVRva2VuIH0gZnJvbSAnLi4vLi4vLi4vdGhlbWUvaW50ZXJuYWwnO1xuY29uc3QgZ2VuQ3Jvd2Rsb2FuSXRlbVN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIFt7XG4gICAgW2NvbXBvbmVudENsc106IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JCZ1NlY29uZGFyeSxcbiAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzTEcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnSW5wdXRcbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1uYW1lYF06IHtcbiAgICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplTEcsXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRMRyxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDgsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LXBhcmFjaGFpbmBdOiB7XG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVNNLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0U00sXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0NFxuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LXJpZ2h0LXBhcnRgXToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmdYU1xuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWxlZnQtY29udGVudGBdOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAgIH1cbiAgICB9XG4gIH1dO1xufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFeHBvcnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCBnZW5Db21wb25lbnRTdHlsZUhvb2soJ0Nyb3dkbG9hbkl0ZW0nLCB0b2tlbiA9PiB7XG4gIGNvbnN0IGFjY291bnRJdGVtVG9rZW4gPSBtZXJnZVRva2VuKHRva2VuKTtcbiAgcmV0dXJuIFtnZW5Dcm93ZGxvYW5JdGVtU3R5bGUoYWNjb3VudEl0ZW1Ub2tlbildO1xufSk7IiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IENyb3dkbG9hblBhcmFTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgRW1wdHlMaXN0LCBGaWx0ZXJNb2RhbCwgTGF5b3V0LCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29udGV4dHMvRGF0YUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlRmlsdGVyTW9kYWwsIHVzZUdldENyb3dkbG9hbkxpc3QsIHVzZVNlbGVjdG9yLCB1c2VTZXRDdXJyZW50UGFnZSwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB7IENyb3dkbG9hbkl0ZW1UeXBlLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBDcm93ZGxvYW5JdGVtLCBJY29uLCBNb2RhbENvbnRleHQsIFN3TGlzdCwgVGFnIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgeyBGYWRlcnNIb3Jpem9udGFsLCBSb2NrZXQgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5lbnVtIEZpbHRlclZhbHVlIHtcbiAgUE9MS0FET1RfUEFSQUNIQUlOID0gJ1BvbGthZG90IHBhcmFjaGFpbicsXG4gIEtVU0FNQV9QQVJBQ0hBSU4gPSAnS3VzYW1hIHBhcmFjaGFpbicsXG4gIFdJTk5FUiA9ICdjb21wbGV0ZWQnLFxuICBGQUlMID0gJ2ZhaWxlZCdcbn1cblxuZnVuY3Rpb24gZ2V0VGFnQ29sb3IgKHBhcmFTdGF0ZT86IENyb3dkbG9hblBhcmFTdGF0ZSkge1xuICBpZiAoIXBhcmFTdGF0ZSkge1xuICAgIHJldHVybiAnZGVmYXVsdCc7XG4gIH1cblxuICBpZiAocGFyYVN0YXRlLnZhbHVlT2YoKSA9PT0gQ3Jvd2Rsb2FuUGFyYVN0YXRlLkNPTVBMRVRFRC52YWx1ZU9mKCkpIHtcbiAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICB9XG5cbiAgaWYgKHBhcmFTdGF0ZSA9PT0gQ3Jvd2Rsb2FuUGFyYVN0YXRlLkZBSUxFRC52YWx1ZU9mKCkpIHtcbiAgICByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIGlmIChwYXJhU3RhdGUgPT09IENyb3dkbG9hblBhcmFTdGF0ZS5PTkdPSU5HLnZhbHVlT2YoKSkge1xuICAgIHJldHVybiAnd2FybmluZyc7XG4gIH1cblxuICByZXR1cm4gJ2RlZmF1bHQnO1xufVxuXG5mdW5jdGlvbiBnZXRSZWxheVBhcmVudEtleSAoZ3JvdXBEaXNwbGF5TmFtZTogc3RyaW5nKSB7XG4gIGlmIChncm91cERpc3BsYXlOYW1lID09PSAnUG9sa2Fkb3QgcGFyYWNoYWluJykge1xuICAgIHJldHVybiAncG9sa2Fkb3QnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAna3VzYW1hJztcbiAgfVxufVxuXG5jb25zdCBGSUxURVJfTU9EQUxfSUQgPSAnY3Jvd2Rsb2FuLWZpbHRlci1tb2RhbCc7XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICB1c2VTZXRDdXJyZW50UGFnZSgnL2hvbWUvY3Jvd2Rsb2FucycpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG4gIGNvbnN0IGl0ZW1zOiBDcm93ZGxvYW5JdGVtVHlwZVtdID0gdXNlR2V0Q3Jvd2Rsb2FuTGlzdCgpO1xuXG4gIGNvbnN0IHsgYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICBjb25zdCB7IGlzU2hvd0JhbGFuY2UgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MpO1xuXG4gIGNvbnN0IHsgZmlsdGVyU2VsZWN0aW9uTWFwLCBvbkFwcGx5RmlsdGVyLCBvbkNoYW5nZUZpbHRlck9wdGlvbiwgb25DbG9zZUZpbHRlck1vZGFsLCBzZWxlY3RlZEZpbHRlcnMgfSA9IHVzZUZpbHRlck1vZGFsKEZJTFRFUl9NT0RBTF9JRCk7XG5cbiAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gW1xuICAgIHsgbGFiZWw6IHQoJ1BvbGthZG90IHBhcmFjaGFpbicpLCB2YWx1ZTogRmlsdGVyVmFsdWUuUE9MS0FET1RfUEFSQUNIQUlOIH0sXG4gICAgeyBsYWJlbDogdCgnS3VzYW1hIHBhcmFjaGFpbicpLCB2YWx1ZTogRmlsdGVyVmFsdWUuS1VTQU1BX1BBUkFDSEFJTiB9LFxuICAgIHsgbGFiZWw6IHQoJ1dpbicpLCB2YWx1ZTogRmlsdGVyVmFsdWUuV0lOTkVSIH0sXG4gICAgeyBsYWJlbDogdCgnRmFpbCcpLCB2YWx1ZTogRmlsdGVyVmFsdWUuRkFJTCB9XG4gIF0sIFt0XSk7XG5cbiAgY29uc3QgZmlsdGVyRnVuY3Rpb24gPSB1c2VNZW1vPChpdGVtOiBDcm93ZGxvYW5JdGVtVHlwZSkgPT4gYm9vbGVhbj4oKCkgPT4ge1xuICAgIHJldHVybiAoaXRlbSkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZEZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBzZWxlY3RlZEZpbHRlcnMpIHtcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuUE9MS0FET1RfUEFSQUNIQUlOKSB7XG4gICAgICAgICAgaWYgKGl0ZW0ucmVsYXlQYXJlbnREaXNwbGF5TmFtZSA9PT0gJ1BvbGthZG90IHBhcmFjaGFpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLktVU0FNQV9QQVJBQ0hBSU4pIHtcbiAgICAgICAgICBpZiAoaXRlbS5yZWxheVBhcmVudERpc3BsYXlOYW1lID09PSAnS3VzYW1hIHBhcmFjaGFpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLldJTk5FUikge1xuICAgICAgICAgIGlmIChpdGVtLnBhcmFTdGF0ZSA9PT0gQ3Jvd2Rsb2FuUGFyYVN0YXRlLkNPTVBMRVRFRCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuRkFJTCkge1xuICAgICAgICAgIGlmIChpdGVtLnBhcmFTdGF0ZSA9PT0gQ3Jvd2Rsb2FuUGFyYVN0YXRlLkZBSUxFRCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9LCBbc2VsZWN0ZWRGaWx0ZXJzXSk7XG5cbiAgLy8gZmlsdGVyXG4gIGNvbnN0IG9uQ2xpY2tBY3Rpb25CdG4gPSB1c2VDYWxsYmFjayhcbiAgICAoZT86IFN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBhY3RpdmVNb2RhbChGSUxURVJfTU9EQUxfSUQpO1xuICAgIH0sXG4gICAgW2FjdGl2ZU1vZGFsXVxuICApO1xuXG4gIGNvbnN0IHNlYXJjaEZ1bmN0aW9uID0gdXNlQ2FsbGJhY2soKGl0ZW06IENyb3dkbG9hbkl0ZW1UeXBlLCBzZWFyY2hUZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0TG93ZXJDYXNlID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGl0ZW0uY2hhaW5EaXNwbGF5TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHRMb3dlckNhc2UpXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIC8vIHJlbmRlciBpdGVtXG4gIGNvbnN0IGdldFBhcmFTdGF0ZUxhYmVsID0gdXNlQ2FsbGJhY2soKHBhcmFTdGF0ZT86IENyb3dkbG9hblBhcmFTdGF0ZSkgPT4ge1xuICAgIGlmICghcGFyYVN0YXRlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFTdGF0ZS52YWx1ZU9mKCkgPT09IENyb3dkbG9hblBhcmFTdGF0ZS5DT01QTEVURUQudmFsdWVPZigpKSB7XG4gICAgICByZXR1cm4gdCgnV2luJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFTdGF0ZSA9PT0gQ3Jvd2Rsb2FuUGFyYVN0YXRlLkZBSUxFRC52YWx1ZU9mKCkpIHtcbiAgICAgIHJldHVybiB0KCdGYWlsJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFTdGF0ZSA9PT0gQ3Jvd2Rsb2FuUGFyYVN0YXRlLk9OR09JTkcudmFsdWVPZigpKSB7XG4gICAgICByZXR1cm4gdCgnQWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogQ3Jvd2Rsb2FuSXRlbVR5cGUpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDcm93ZGxvYW5JdGVtXG4gICAgICAgICAgYmFsYW5jZVZhbHVlPXtpdGVtLmNvbnRyaWJ1dGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXsnY3Jvd2Rsb2FuLWl0ZW0nfVxuICAgICAgICAgIGNvbnZlcnRlZEJhbGFuY2VWYWx1ZT17aXRlbS5jb252ZXJ0ZWRDb250cmlidXRlfVxuICAgICAgICAgIGNyb3dkbG9hblN0YXR1c1RhZz17XG4gICAgICAgICAgICA8VGFnIGNvbG9yPXtnZXRUYWdDb2xvcihpdGVtLnBhcmFTdGF0ZSl9PntnZXRQYXJhU3RhdGVMYWJlbChpdGVtLnBhcmFTdGF0ZSl9PC9UYWc+XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlY2ltYWw9ezB9XG4gICAgICAgICAgZGlzcGxheU5ldHdvcms9e2l0ZW0uY2hhaW5EaXNwbGF5TmFtZX1cbiAgICAgICAgICBkaXNwbGF5VG9rZW49e2l0ZW0uc3ltYm9sfVxuICAgICAgICAgIGhpZGVCYWxhbmNlPXshaXNTaG93QmFsYW5jZX1cbiAgICAgICAgICBpc1Nob3dTdWJMb2dvPXt0cnVlfVxuICAgICAgICAgIGtleT17YCR7aXRlbS5zeW1ib2x9XyR7aXRlbS5zbHVnfWB9XG4gICAgICAgICAgbmV0d29ya0tleT17aXRlbS5zbHVnfVxuICAgICAgICAgIHBhcmFDaGFpbj17aXRlbS5yZWxheVBhcmVudERpc3BsYXlOYW1lfVxuICAgICAgICAgIHN1Yk5ldHdvcmtLZXk9e2dldFJlbGF5UGFyZW50S2V5KGl0ZW0ucmVsYXlQYXJlbnREaXNwbGF5TmFtZSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gICAgW2dldFBhcmFTdGF0ZUxhYmVsLCBpc1Nob3dCYWxhbmNlXVxuICApO1xuXG4gIC8vIGVtcHR5IGxpc3RcbiAgY29uc3QgZW1wdHlDcm93ZGxvYW5MaXN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVtcHR5TGlzdFxuICAgICAgICAgIGVtcHR5TWVzc2FnZT17dCgnWW91ciBjcm93ZGxvYW5zIHdpbGwgc2hvdyB1cCBoZXJlJyl9XG4gICAgICAgICAgZW1wdHlUaXRsZT17dCgnTm8gY3Jvd2Rsb2FucyBmb3VuZCcpfVxuICAgICAgICAgIHBob3NwaG9ySWNvbj17Um9ja2V0fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuICAgIFt0XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2Bjcm93ZGxvYW5zICR7Y2xhc3NOYW1lfWB9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ2Nyb3dkbG9hbicsICdwcmljZScsICdjaGFpblN0b3JlJ10pfVxuICAgID5cbiAgICAgIDxMYXlvdXQuQmFzZVxuICAgICAgICBzaG93U3ViSGVhZGVyPXt0cnVlfVxuICAgICAgICBzdWJIZWFkZXJCYWNrZ3JvdW5kPXsndHJhbnNwYXJlbnQnfVxuICAgICAgICBzdWJIZWFkZXJDZW50ZXI9e2ZhbHNlfVxuICAgICAgICBzdWJIZWFkZXJQYWRkaW5nVmVydGljYWw9e3RydWV9XG4gICAgICAgIHRpdGxlPXt0PHN0cmluZz4oJ0Nyb3dkbG9hbnMnKX1cbiAgICAgID5cbiAgICAgICAgPFN3TGlzdC5TZWN0aW9uXG4gICAgICAgICAgYWN0aW9uQnRuSWNvbj17PEljb24gcGhvc3Bob3JJY29uPXtGYWRlcnNIb3Jpem9udGFsfSAvPn1cbiAgICAgICAgICBlbmFibGVTZWFyY2hJbnB1dFxuICAgICAgICAgIGZpbHRlckJ5PXtmaWx0ZXJGdW5jdGlvbn1cbiAgICAgICAgICBsaXN0PXtpdGVtc31cbiAgICAgICAgICBvbkNsaWNrQWN0aW9uQnRuPXtvbkNsaWNrQWN0aW9uQnRufVxuICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckl0ZW19XG4gICAgICAgICAgcmVuZGVyV2hlbkVtcHR5PXtlbXB0eUNyb3dkbG9hbkxpc3R9XG4gICAgICAgICAgc2VhcmNoRnVuY3Rpb249e3NlYXJjaEZ1bmN0aW9ufVxuICAgICAgICAgIHNlYXJjaE1pbkNoYXJhY3RlcnNDb3VudD17Mn1cbiAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dDxzdHJpbmc+KCdTZWFyY2ggcHJvamVjdCcpfVxuICAgICAgICAgIHNob3dBY3Rpb25CdG5cbiAgICAgICAgLz5cblxuICAgICAgICA8RmlsdGVyTW9kYWxcbiAgICAgICAgICBhcHBseUZpbHRlckJ1dHRvblRpdGxlPXt0KCdBcHBseSBmaWx0ZXInKX1cbiAgICAgICAgICBpZD17RklMVEVSX01PREFMX0lEfVxuICAgICAgICAgIG9uQXBwbHlGaWx0ZXI9e29uQXBwbHlGaWx0ZXJ9XG4gICAgICAgICAgb25DYW5jZWw9e29uQ2xvc2VGaWx0ZXJNb2RhbH1cbiAgICAgICAgICBvbkNoYW5nZU9wdGlvbj17b25DaGFuZ2VGaWx0ZXJPcHRpb259XG4gICAgICAgICAgb3B0aW9uU2VsZWN0aW9uTWFwPXtmaWx0ZXJTZWxlY3Rpb25NYXB9XG4gICAgICAgICAgb3B0aW9ucz17ZmlsdGVyT3B0aW9uc31cbiAgICAgICAgICB0aXRsZT17dCgnRmlsdGVyJyl9XG4gICAgICAgIC8+XG4gICAgICA8L0xheW91dC5CYXNlPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59XG5cbmNvbnN0IENyb3dkbG9hbnMgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxLFxuICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUxHLFxuXG4gICAgJy5jcm93ZGxvYW4taXRlbSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luWFNcbiAgICB9LFxuXG4gICAgJy5jcm93ZGxvYW5fX2ZpbHRlcl9vcHRpb24nOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgICcuY3Jvd2Rsb2FuX19maWx0ZXJfb3B0aW9uX3dyYXBwZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGdhcDogdG9rZW4ubWFyZ2luTEdcbiAgICB9LFxuXG4gICAgJy5hbnQtc3ctbGlzdC1zZWN0aW9uJzoge1xuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENyb3dkbG9hbnM7XG4iXSwibmFtZXMiOlsiQ3Jvd2Rsb2FuUGFyYVN0YXRlIiwiRW1wdHlMaXN0IiwiRmlsdGVyTW9kYWwiLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIkRhdGFDb250ZXh0IiwidXNlRmlsdGVyTW9kYWwiLCJ1c2VHZXRDcm93ZGxvYW5MaXN0IiwidXNlU2VsZWN0b3IiLCJ1c2VTZXRDdXJyZW50UGFnZSIsInVzZVRyYW5zbGF0aW9uIiwiQ3Jvd2Rsb2FuSXRlbSIsIkljb24iLCJNb2RhbENvbnRleHQiLCJTd0xpc3QiLCJUYWciLCJGYWRlcnNIb3Jpem9udGFsIiwiUm9ja2V0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwic3R5bGVkIiwiRmlsdGVyVmFsdWUiLCJnZXRUYWdDb2xvciIsInBhcmFTdGF0ZSIsInZhbHVlT2YiLCJDT01QTEVURUQiLCJGQUlMRUQiLCJPTkdPSU5HIiwiZ2V0UmVsYXlQYXJlbnRLZXkiLCJncm91cERpc3BsYXlOYW1lIiwiRklMVEVSX01PREFMX0lEIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwidCIsImRhdGFDb250ZXh0IiwiaXRlbXMiLCJhY3RpdmVNb2RhbCIsImlzU2hvd0JhbGFuY2UiLCJzdGF0ZSIsInNldHRpbmdzIiwiZmlsdGVyU2VsZWN0aW9uTWFwIiwib25BcHBseUZpbHRlciIsIm9uQ2hhbmdlRmlsdGVyT3B0aW9uIiwib25DbG9zZUZpbHRlck1vZGFsIiwic2VsZWN0ZWRGaWx0ZXJzIiwiZmlsdGVyT3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJQT0xLQURPVF9QQVJBQ0hBSU4iLCJLVVNBTUFfUEFSQUNIQUlOIiwiV0lOTkVSIiwiRkFJTCIsImZpbHRlckZ1bmN0aW9uIiwiaXRlbSIsImxlbmd0aCIsImZpbHRlciIsInJlbGF5UGFyZW50RGlzcGxheU5hbWUiLCJvbkNsaWNrQWN0aW9uQnRuIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInNlYXJjaEZ1bmN0aW9uIiwic2VhcmNoVGV4dCIsInNlYXJjaFRleHRMb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImNoYWluRGlzcGxheU5hbWUiLCJpbmNsdWRlcyIsImdldFBhcmFTdGF0ZUxhYmVsIiwicmVuZGVySXRlbSIsImNvbnRyaWJ1dGUiLCJjb252ZXJ0ZWRDb250cmlidXRlIiwic3ltYm9sIiwic2x1ZyIsImVtcHR5Q3Jvd2Rsb2FuTGlzdCIsImF3YWl0U3RvcmVzIiwiQ3Jvd2Rsb2FucyIsInRoZW1lIiwidG9rZW4iLCJjb2xvciIsImNvbG9yVGV4dExpZ2h0MSIsImZvbnRTaXplIiwiZm9udFNpemVMRyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblhTIiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1hcmdpbkxHIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==