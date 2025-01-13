"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_Tokens_ManageTokens_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Tokens/ManageTokens.tsx":
/*!***********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Tokens/ManageTokens.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0













const FILTER_MODAL_ID = 'filterTokenModal';
var FilterValue;
(function (FilterValue) {
  FilterValue["ENABLED"] = "enabled";
  FilterValue["DISABLED"] = "disabled";
  FilterValue["CUSTOM"] = "custom";
})(FilterValue || (FilterValue = {}));
const renderEmpty = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.TokenEmptyList, {});
function Component({
  className = ''
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const goBack = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useDefaultNavigate)().goBack;
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const {
    activeModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__.ModalContext);
  const {
    assetRegistry,
    assetSettingMap
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.assetRegistry);
  const assetItems = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const allFungibleTokens = [];
    Object.values(assetRegistry).forEach(asset => {
      if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_8__._isAssetFungibleToken)(asset)) {
        allFungibleTokens.push(asset);
      }
    });
    return allFungibleTokens;
  }, [assetRegistry]);
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useFilterModal)(FILTER_MODAL_ID);
  const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return chainAsset => {
      if (!selectedFilters.length) {
        return true;
      }
      for (const filter of selectedFilters) {
        if (filter === FilterValue.CUSTOM) {
          if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_8__._isCustomAsset)(chainAsset.slug)) {
            return true;
          }
        } else if (filter === FilterValue.ENABLED) {
          if (assetSettingMap[chainAsset.slug] && assetSettingMap[chainAsset.slug].visible) {
            return true;
          }
        } else if (filter === FilterValue.DISABLED) {
          if (!assetSettingMap[chainAsset.slug] || !assetSettingMap[chainAsset.slug].visible) {
            return true;
          }
        }
      }
      return false;
    };
  }, [assetSettingMap, selectedFilters]);
  const FILTER_OPTIONS = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [{
    label: t('Enabled tokens'),
    value: FilterValue.ENABLED
  }, {
    label: t('Disabled tokens'),
    value: FilterValue.DISABLED
  }, {
    label: t('Custom tokens'),
    value: FilterValue.CUSTOM
  }], [t]);
  const searchToken = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((token, searchText) => {
    const searchTextLowerCase = searchText.toLowerCase();
    return token.name.toLowerCase().includes(searchTextLowerCase) || token.symbol.toLowerCase().includes(searchTextLowerCase);
  }, []);
  const renderTokenItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(tokenInfo => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.TokenToggleItem, {
      assetSettingMap: assetSettingMap,
      tokenInfo: tokenInfo
    }, tokenInfo.slug);
  }, [assetSettingMap]);
  const subHeaderButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return [{
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
        size: "sm",
        type: "phosphor"
      }),
      onClick: () => {
        navigate('/settings/tokens/import-token', {
          state: {
            isExternalRequest: false
          }
        });
      }
    }];
  }, [navigate]);
  const openFilterModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(e => {
    e && e.stopPropagation();
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `manage_tokens ${className}`,
    resolve: dataContext.awaitStores(['assetRegistry']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      onBack: goBack,
      showBackButton: true,
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: true,
      subHeaderIcons: subHeaderButton,
      subHeaderPaddingVertical: true,
      title: t('Manage tokens'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].Section, {
        actionBtnIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
          customSize: '20px',
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
          size: "sm",
          type: "phosphor",
          weight: 'fill'
        }),
        className: 'manage_tokens__container',
        enableSearchInput: true,
        filterBy: filterFunction,
        gridGap: '14px',
        list: assetItems,
        minColumnWidth: '172px',
        mode: 'boxed',
        onClickActionBtn: openFilterModal,
        renderItem: renderTokenItem,
        renderWhenEmpty: renderEmpty,
        searchFunction: searchToken,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search token'),
        showActionBtn: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.FilterModal, {
        id: FILTER_MODAL_ID,
        onApplyFilter: onApplyFilter,
        onCancel: onCloseFilterModal,
        onChangeOption: onChangeFilterOption,
        optionSelectionMap: filterSelectionMap,
        options: FILTER_OPTIONS
      })]
    })
  });
}
const ManageTokens = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(Component).withConfig({
  displayName: "ManageTokens",
  componentId: "sc-c8azj0-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.ant-sw-screen-layout-body': {
      display: 'flex'
    },
    '.ant-sw-list-wrapper.ant-sw-list-wrapper:before': {
      zIndex: 0,
      borderRadius: token.borderRadiusLG
    },
    '.ant-sw-list-section.-boxed-mode .ant-sw-list': {
      paddingLeft: token.padding,
      paddingTop: token.paddingXS,
      paddingBottom: token.paddingXS
    },
    '.ant-sw-list-section.-boxed-mode .ant-sw-list.-ignore-scrollbar': {
      paddingRight: token.padding + 6
    },
    '.ant-network-item.-with-divider': {
      position: 'relative',
      zIndex: 1
    },
    '&__inner': {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    '.manage_tokens__container': {
      paddingTop: token.padding,
      paddingBottom: token.paddingSM,
      flex: 1,
      'button + button': {
        marginLeft: token.marginXS
      }
    },
    '.manage_tokens__right_item_container': {
      marginRight: -token.marginXXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageTokens);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js":
/*!****************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/Plus.esm.js ***!
  \****************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
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

var Plus = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Plus.displayName = "Plus";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plus);
//# sourceMappingURL=Plus.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfVG9rZW5zX01hbmFnZVRva2Vuc190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRytHO0FBQ3lCO0FBQ3hEO0FBQ3dCO0FBRzFCO0FBQ3RCO0FBQ3dCO0FBQ3RDO0FBQ0s7QUFDUjtBQUFBO0FBQUE7QUFJdkMsTUFBTXVCLGVBQWUsR0FBRyxrQkFBa0I7QUFBQyxJQUV0Q0MsV0FBVztBQUFBLFdBQVhBLFdBQVc7RUFBWEEsV0FBVztFQUFYQSxXQUFXO0VBQVhBLFdBQVc7QUFBQSxHQUFYQSxXQUFXLEtBQVhBLFdBQVc7QUFNaEIsTUFBTUMsV0FBVyxHQUFHLG1CQUFNLHVEQUFDLG1GQUFjLEtBQUc7QUFFNUMsU0FBU0MsU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEUsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR2xCLGtGQUFjLEVBQUU7RUFDOUIsTUFBTW1CLFFBQVEsR0FBR1IsNkRBQVcsRUFBRTtFQUM5QixNQUFNUyxNQUFNLEdBQUd0QixzRkFBa0IsRUFBRSxDQUFDc0IsTUFBTTtFQUMxQyxNQUFNQyxXQUFXLEdBQUdiLGlEQUFVLENBQUNYLDBGQUFXLENBQUM7RUFDM0MsTUFBTTtJQUFFeUI7RUFBWSxDQUFDLEdBQUdkLGlEQUFVLENBQUNOLDZEQUFZLENBQUM7RUFFaEQsTUFBTTtJQUFFcUIsYUFBYTtJQUFFQztFQUFnQixDQUFDLEdBQUdkLHdEQUFXLENBQUVlLEtBQWdCLElBQUtBLEtBQUssQ0FBQ0YsYUFBYSxDQUFDO0VBQ2pHLE1BQU1HLFVBQVUsR0FBR2pCLDhDQUFPLENBQUMsTUFBTTtJQUMvQixNQUFNa0IsaUJBQWdDLEdBQUcsRUFBRTtJQUUzQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNOLGFBQWEsQ0FBQyxDQUFDTyxPQUFPLENBQUVDLEtBQUssSUFBSztNQUM5QyxJ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSxTQUFTLHNFQUFtQjtBQUM1Qjs7QUFFQSx3QkFBd0IsaURBQVU7QUFDbEMsU0FBUywwREFBbUIsQ0FBQyw0REFBUTtBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRUEsaUVBQWUsSUFBSSxFQUFDO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvU2V0dGluZ3MvVG9rZW5zL01hbmFnZVRva2Vucy50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvcGhvc3Bob3ItcmVhY3QvZGlzdC9pY29ucy9QbHVzLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0NoYWluQXNzZXQgfSBmcm9tICdAc3Vid2FsbGV0L2NoYWluLWxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgX2lzQXNzZXRGdW5naWJsZVRva2VuLCBfaXNDdXN0b21Bc3NldCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBGaWx0ZXJNb2RhbCwgTGF5b3V0LCBPcHRpb25UeXBlLCBQYWdlV3JhcHBlciwgVG9rZW5FbXB0eUxpc3QsIFRva2VuVG9nZ2xlSXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29udGV4dHMvRGF0YUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlRGVmYXVsdE5hdmlnYXRlLCB1c2VGaWx0ZXJNb2RhbCwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvc3RvcmVzJztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEJ1dHRvblByb3BzLCBJY29uLCBNb2RhbENvbnRleHQsIFN3TGlzdCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgRmFkZXJzSG9yaXpvbnRhbCwgUGx1cyB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHM7XG5cbmNvbnN0IEZJTFRFUl9NT0RBTF9JRCA9ICdmaWx0ZXJUb2tlbk1vZGFsJztcblxuZW51bSBGaWx0ZXJWYWx1ZSB7XG4gIEVOQUJMRUQgPSAnZW5hYmxlZCcsXG4gIERJU0FCTEVEID0gJ2Rpc2FibGVkJyxcbiAgQ1VTVE9NID0gJ2N1c3RvbSdcbn1cblxuY29uc3QgcmVuZGVyRW1wdHkgPSAoKSA9PiA8VG9rZW5FbXB0eUxpc3QgLz47XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgZ29CYWNrID0gdXNlRGVmYXVsdE5hdmlnYXRlKCkuZ29CYWNrO1xuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuICBjb25zdCB7IGFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBhc3NldFJlZ2lzdHJ5LCBhc3NldFNldHRpbmdNYXAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hc3NldFJlZ2lzdHJ5KTtcbiAgY29uc3QgYXNzZXRJdGVtcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGFsbEZ1bmdpYmxlVG9rZW5zOiBfQ2hhaW5Bc3NldFtdID0gW107XG5cbiAgICBPYmplY3QudmFsdWVzKGFzc2V0UmVnaXN0cnkpLmZvckVhY2goKGFzc2V0KSA9PiB7XG4gICAgICBpZiAoX2lzQXNzZXRGdW5naWJsZVRva2VuKGFzc2V0KSkge1xuICAgICAgICBhbGxGdW5naWJsZVRva2Vucy5wdXNoKGFzc2V0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhbGxGdW5naWJsZVRva2VucztcbiAgfSwgW2Fzc2V0UmVnaXN0cnldKTtcbiAgY29uc3QgeyBmaWx0ZXJTZWxlY3Rpb25NYXAsIG9uQXBwbHlGaWx0ZXIsIG9uQ2hhbmdlRmlsdGVyT3B0aW9uLCBvbkNsb3NlRmlsdGVyTW9kYWwsIHNlbGVjdGVkRmlsdGVycyB9ID0gdXNlRmlsdGVyTW9kYWwoRklMVEVSX01PREFMX0lEKTtcbiAgY29uc3QgZmlsdGVyRnVuY3Rpb24gPSB1c2VNZW1vPChpdGVtOiBfQ2hhaW5Bc3NldCkgPT4gYm9vbGVhbj4oKCkgPT4ge1xuICAgIHJldHVybiAoY2hhaW5Bc3NldCkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZEZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBzZWxlY3RlZEZpbHRlcnMpIHtcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuQ1VTVE9NKSB7XG4gICAgICAgICAgaWYgKF9pc0N1c3RvbUFzc2V0KGNoYWluQXNzZXQuc2x1ZykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLkVOQUJMRUQpIHtcbiAgICAgICAgICBpZiAoYXNzZXRTZXR0aW5nTWFwW2NoYWluQXNzZXQuc2x1Z10gJiYgYXNzZXRTZXR0aW5nTWFwW2NoYWluQXNzZXQuc2x1Z10udmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuRElTQUJMRUQpIHtcbiAgICAgICAgICBpZiAoIWFzc2V0U2V0dGluZ01hcFtjaGFpbkFzc2V0LnNsdWddIHx8ICFhc3NldFNldHRpbmdNYXBbY2hhaW5Bc3NldC5zbHVnXS52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH0sIFthc3NldFNldHRpbmdNYXAsIHNlbGVjdGVkRmlsdGVyc10pO1xuXG4gIGNvbnN0IEZJTFRFUl9PUFRJT05TID0gdXNlTWVtbygoKTogT3B0aW9uVHlwZVtdID0+IChbXG4gICAgeyBsYWJlbDogdCgnRW5hYmxlZCB0b2tlbnMnKSwgdmFsdWU6IEZpbHRlclZhbHVlLkVOQUJMRUQgfSxcbiAgICB7IGxhYmVsOiB0KCdEaXNhYmxlZCB0b2tlbnMnKSwgdmFsdWU6IEZpbHRlclZhbHVlLkRJU0FCTEVEIH0sXG4gICAgeyBsYWJlbDogdCgnQ3VzdG9tIHRva2VucycpLCB2YWx1ZTogRmlsdGVyVmFsdWUuQ1VTVE9NIH1cbiAgXSksIFt0XSk7XG5cbiAgY29uc3Qgc2VhcmNoVG9rZW4gPSB1c2VDYWxsYmFjaygodG9rZW46IF9DaGFpbkFzc2V0LCBzZWFyY2hUZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0TG93ZXJDYXNlID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRva2VuLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKSB8fFxuICAgICAgdG9rZW4uc3ltYm9sLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyVG9rZW5JdGVtID0gdXNlQ2FsbGJhY2soKHRva2VuSW5mbzogX0NoYWluQXNzZXQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRva2VuVG9nZ2xlSXRlbVxuICAgICAgICBhc3NldFNldHRpbmdNYXA9e2Fzc2V0U2V0dGluZ01hcH1cbiAgICAgICAga2V5PXt0b2tlbkluZm8uc2x1Z31cbiAgICAgICAgdG9rZW5JbmZvPXt0b2tlbkluZm99XG4gICAgICAvPlxuICAgICk7XG4gIH0sIFthc3NldFNldHRpbmdNYXBdKTtcblxuICBjb25zdCBzdWJIZWFkZXJCdXR0b246IEJ1dHRvblByb3BzW10gPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpY29uOiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIHBob3NwaG9ySWNvbj17UGx1c31cbiAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIG5hdmlnYXRlKCcvc2V0dGluZ3MvdG9rZW5zL2ltcG9ydC10b2tlbicsIHsgc3RhdGU6IHsgaXNFeHRlcm5hbFJlcXVlc3Q6IGZhbHNlIH0gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCBvcGVuRmlsdGVyTW9kYWwgPSB1c2VDYWxsYmFjaygoZT86IFN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgZSAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFjdGl2ZU1vZGFsKEZJTFRFUl9NT0RBTF9JRCk7XG4gIH0sIFthY3RpdmVNb2RhbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2BtYW5hZ2VfdG9rZW5zICR7Y2xhc3NOYW1lfWB9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ2Fzc2V0UmVnaXN0cnknXSl9XG4gICAgPlxuICAgICAgPExheW91dC5CYXNlXG4gICAgICAgIG9uQmFjaz17Z29CYWNrfVxuICAgICAgICBzaG93QmFja0J1dHRvbj17dHJ1ZX1cbiAgICAgICAgc2hvd1N1YkhlYWRlcj17dHJ1ZX1cbiAgICAgICAgc3ViSGVhZGVyQmFja2dyb3VuZD17J3RyYW5zcGFyZW50J31cbiAgICAgICAgc3ViSGVhZGVyQ2VudGVyPXt0cnVlfVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17c3ViSGVhZGVyQnV0dG9ufVxuICAgICAgICBzdWJIZWFkZXJQYWRkaW5nVmVydGljYWw9e3RydWV9XG4gICAgICAgIHRpdGxlPXt0PHN0cmluZz4oJ01hbmFnZSB0b2tlbnMnKX1cbiAgICAgID5cbiAgICAgICAgPFN3TGlzdC5TZWN0aW9uXG4gICAgICAgICAgYWN0aW9uQnRuSWNvbj17KFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17JzIwcHgnfVxuICAgICAgICAgICAgICBwaG9zcGhvckljb249e0ZhZGVyc0hvcml6b250YWx9XG4gICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICB0eXBlPSdwaG9zcGhvcidcbiAgICAgICAgICAgICAgd2VpZ2h0PXsnZmlsbCd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgY2xhc3NOYW1lPXsnbWFuYWdlX3Rva2Vuc19fY29udGFpbmVyJ31cbiAgICAgICAgICBlbmFibGVTZWFyY2hJbnB1dD17dHJ1ZX1cbiAgICAgICAgICBmaWx0ZXJCeT17ZmlsdGVyRnVuY3Rpb259XG4gICAgICAgICAgZ3JpZEdhcD17JzE0cHgnfVxuICAgICAgICAgIGxpc3Q9e2Fzc2V0SXRlbXN9XG4gICAgICAgICAgbWluQ29sdW1uV2lkdGg9eycxNzJweCd9XG4gICAgICAgICAgbW9kZT17J2JveGVkJ31cbiAgICAgICAgICBvbkNsaWNrQWN0aW9uQnRuPXtvcGVuRmlsdGVyTW9kYWx9XG4gICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVyVG9rZW5JdGVtfVxuICAgICAgICAgIHJlbmRlcldoZW5FbXB0eT17cmVuZGVyRW1wdHl9XG4gICAgICAgICAgc2VhcmNoRnVuY3Rpb249e3NlYXJjaFRva2VufVxuICAgICAgICAgIHNlYXJjaE1pbkNoYXJhY3RlcnNDb3VudD17Mn1cbiAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dDxzdHJpbmc+KCdTZWFyY2ggdG9rZW4nKX1cbiAgICAgICAgICBzaG93QWN0aW9uQnRuPXt0cnVlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxGaWx0ZXJNb2RhbFxuICAgICAgICAgIGlkPXtGSUxURVJfTU9EQUxfSUR9XG4gICAgICAgICAgb25BcHBseUZpbHRlcj17b25BcHBseUZpbHRlcn1cbiAgICAgICAgICBvbkNhbmNlbD17b25DbG9zZUZpbHRlck1vZGFsfVxuICAgICAgICAgIG9uQ2hhbmdlT3B0aW9uPXtvbkNoYW5nZUZpbHRlck9wdGlvbn1cbiAgICAgICAgICBvcHRpb25TZWxlY3Rpb25NYXA9e2ZpbHRlclNlbGVjdGlvbk1hcH1cbiAgICAgICAgICBvcHRpb25zPXtGSUxURVJfT1BUSU9OU31cbiAgICAgICAgLz5cbiAgICAgIDwvTGF5b3V0LkJhc2U+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgTWFuYWdlVG9rZW5zID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgJy5hbnQtc3ctc2NyZWVuLWxheW91dC1ib2R5Jzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcblxuICAgICcuYW50LXN3LWxpc3Qtd3JhcHBlci5hbnQtc3ctbGlzdC13cmFwcGVyOmJlZm9yZSc6IHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzTEdcbiAgICB9LFxuXG4gICAgJy5hbnQtc3ctbGlzdC1zZWN0aW9uLi1ib3hlZC1tb2RlIC5hbnQtc3ctbGlzdCc6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0b2tlbi5wYWRkaW5nLFxuICAgICAgcGFkZGluZ1RvcDogdG9rZW4ucGFkZGluZ1hTLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdG9rZW4ucGFkZGluZ1hTXG4gICAgfSxcblxuICAgICcuYW50LXN3LWxpc3Qtc2VjdGlvbi4tYm94ZWQtbW9kZSAuYW50LXN3LWxpc3QuLWlnbm9yZS1zY3JvbGxiYXInOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmcgKyA2XG4gICAgfSxcblxuICAgICcuYW50LW5ldHdvcmstaXRlbS4td2l0aC1kaXZpZGVyJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDFcbiAgICB9LFxuXG4gICAgJyZfX2lubmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgJy5tYW5hZ2VfdG9rZW5zX19jb250YWluZXInOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdG9rZW4ucGFkZGluZ1NNLFxuICAgICAgZmxleDogMSxcblxuICAgICAgJ2J1dHRvbiArIGJ1dHRvbic6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogdG9rZW4ubWFyZ2luWFNcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5tYW5hZ2VfdG9rZW5zX19yaWdodF9pdGVtX2NvbnRhaW5lcic6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAtdG9rZW4ubWFyZ2luWFhTXG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VUb2tlbnM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMjE2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJkdW90b25lXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxNiwxMjBIMTM2VjQwYTgsOCwwLDAsMC0xNiwwdjgwSDQwYTgsOCwwLDAsMCwwLDE2aDgwdjgwYTgsOCwwLDAsMCwxNiwwVjEzNmg4MGE4LDgsMCwwLDAsMC0xNlpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiNDBcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIyMTZcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjIxNlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwicmVndWxhclwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMjE2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBQbHVzID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgcmVuZGVyUGF0aDogcmVuZGVyUGF0aFxuICB9KSk7XG59KTtcblBsdXMuZGlzcGxheU5hbWUgPSBcIlBsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGx1cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBsdXMuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbIl9pc0Fzc2V0RnVuZ2libGVUb2tlbiIsIl9pc0N1c3RvbUFzc2V0IiwiRmlsdGVyTW9kYWwiLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIlRva2VuRW1wdHlMaXN0IiwiVG9rZW5Ub2dnbGVJdGVtIiwiRGF0YUNvbnRleHQiLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJ1c2VGaWx0ZXJNb2RhbCIsInVzZVRyYW5zbGF0aW9uIiwiSWNvbiIsIk1vZGFsQ29udGV4dCIsIlN3TGlzdCIsIkZhZGVyc0hvcml6b250YWwiLCJQbHVzIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU2VsZWN0b3IiLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsIkZJTFRFUl9NT0RBTF9JRCIsIkZpbHRlclZhbHVlIiwicmVuZGVyRW1wdHkiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ0IiwibmF2aWdhdGUiLCJnb0JhY2siLCJkYXRhQ29udGV4dCIsImFjdGl2ZU1vZGFsIiwiYXNzZXRSZWdpc3RyeSIsImFzc2V0U2V0dGluZ01hcCIsInN0YXRlIiwiYXNzZXRJdGVtcyIsImFsbEZ1bmdpYmxlVG9rZW5zIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImFzc2V0IiwicHVzaCIsImZpbHRlclNlbGVjdGlvbk1hcCIsIm9uQXBwbHlGaWx0ZXIiLCJvbkNoYW5nZUZpbHRlck9wdGlvbiIsIm9uQ2xvc2VGaWx0ZXJNb2RhbCIsInNlbGVjdGVkRmlsdGVycyIsImZpbHRlckZ1bmN0aW9uIiwiY2hhaW5Bc3NldCIsImxlbmd0aCIsImZpbHRlciIsIkNVU1RPTSIsInNsdWciLCJFTkFCTEVEIiwidmlzaWJsZSIsIkRJU0FCTEVEIiwiRklMVEVSX09QVElPTlMiLCJsYWJlbCIsInZhbHVlIiwic2VhcmNoVG9rZW4iLCJ0b2tlbiIsInNlYXJjaFRleHQiLCJzZWFyY2hUZXh0TG93ZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJuYW1lIiwiaW5jbHVkZXMiLCJzeW1ib2wiLCJyZW5kZXJUb2tlbkl0ZW0iLCJ0b2tlbkluZm8iLCJzdWJIZWFkZXJCdXR0b24iLCJpY29uIiwib25DbGljayIsImlzRXh0ZXJuYWxSZXF1ZXN0Iiwib3BlbkZpbHRlck1vZGFsIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImF3YWl0U3RvcmVzIiwiTWFuYWdlVG9rZW5zIiwidGhlbWUiLCJkaXNwbGF5IiwiekluZGV4IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyUmFkaXVzTEciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ1hTIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdSaWdodCIsInBvc2l0aW9uIiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1NNIiwiZmxleCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5YUyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luWFhTIl0sInNvdXJjZVJvb3QiOiIifQ==