"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_Chains_ManageChains_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Chains/ManageChains.tsx":
/*!***********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Chains/ManageChains.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0












const FILTER_MODAL_ID = 'filterTokenModal';
var FilterValue;
(function (FilterValue) {
  FilterValue["ENABLED"] = "enabled";
  FilterValue["DISABLED"] = "disabled";
  FilterValue["CUSTOM"] = "custom";
  FilterValue["SUBSTRATE"] = "substrate";
  FilterValue["EVM"] = "evm";
})(FilterValue || (FilterValue = {}));
const renderEmpty = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.NetworkEmptyList, {});
function Component({
  className = ''
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const {
    activeModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__.ModalContext);
  const chainInfoList = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useChainInfoWithState)();
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useFilterModal)(FILTER_MODAL_ID);
  const FILTER_OPTIONS = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [{
    label: t('EVM networks'),
    value: FilterValue.EVM
  }, {
    label: t('Substrate networks'),
    value: FilterValue.SUBSTRATE
  }, {
    label: t('Custom networks'),
    value: FilterValue.CUSTOM
  }, {
    label: t('Enabled networks'),
    value: FilterValue.ENABLED
  }, {
    label: t('Disabled networks'),
    value: FilterValue.DISABLED
  }], [t]);
  const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return chainInfo => {
      if (!selectedFilters.length) {
        return true;
      }
      for (const filter of selectedFilters) {
        if (filter === FilterValue.CUSTOM) {
          if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__._isCustomChain)(chainInfo.slug)) {
            return true;
          }
        } else if (filter === FilterValue.ENABLED) {
          if (chainInfo.active) {
            return true;
          }
        } else if (filter === FilterValue.DISABLED) {
          if (!chainInfo.active) {
            return true;
          }
        } else if (filter === FilterValue.SUBSTRATE) {
          if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__._isSubstrateChain)(chainInfo)) {
            return true;
          }
        } else if (filter === FilterValue.EVM) {
          if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__._isChainEvmCompatible)(chainInfo)) {
            return true;
          }
        }
      }
      return false;
    };
  }, [selectedFilters]);
  const searchToken = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((chainInfo, searchText) => {
    const searchTextLowerCase = searchText.toLowerCase();
    return chainInfo.name.toLowerCase().includes(searchTextLowerCase);
  }, []);
  const renderChainItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(chainInfo => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.NetworkToggleItem, {
      chainInfo: chainInfo,
      isShowSubLogo: true
    }, chainInfo.slug);
  }, []);
  const subHeaderButton = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return [{
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_9__["default"],
        size: "md",
        type: "phosphor"
      }),
      onClick: () => {
        navigate('/settings/chains/import', {
          state: {
            isExternalRequest: false
          }
        });
      }
    }];
  }, [navigate]);
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    navigate(-1);
  }, [navigate]);
  const openFilterModal = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(e => {
    e && e.stopPropagation();
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `manage_chains ${className}`,
    resolve: dataContext.awaitStores(['chainStore']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      onBack: onBack,
      showBackButton: true,
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: true,
      subHeaderIcons: subHeaderButton,
      subHeaderPaddingVertical: true,
      title: t('Manage networks'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Section, {
        actionBtnIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_11__["default"],
          size: "sm",
          weight: 'fill'
        }),
        className: 'manage_chains__container',
        enableSearchInput: true,
        filterBy: filterFunction,
        list: chainInfoList,
        mode: 'boxed',
        onClickActionBtn: openFilterModal,
        renderItem: renderChainItem,
        renderWhenEmpty: renderEmpty,
        searchFunction: searchToken,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search network'),
        showActionBtn: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.FilterModal, {
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
const ManageChains = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])(Component).withConfig({
  displayName: "ManageChains",
  componentId: "sc-lwqocc-0"
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
    '.manage_chains__container': {
      paddingTop: token.padding,
      paddingBottom: token.paddingSM,
      flex: 1
    },
    '.ant-network-item-content .__toggle-area': {
      marginRight: -token.marginXXS,
      'button + button': {
        marginLeft: token.marginXS
      }
    },
    '.ant-web3-block .ant-web3-block-middle-item': {
      width: 190
    },
    '.ant-network-item-name': {
      overflow: 'hidden',
      textWrap: 'nowrap',
      textOverflow: 'ellipsis',
      paddingRight: token.paddingXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageChains);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfQ2hhaW5zX01hbmFnZUNoYWluc190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFa0k7QUFDVTtBQUM1RDtBQUMrQztBQUVqRDtBQUN0QjtBQUN3QjtBQUNqQztBQUNSO0FBQUE7QUFBQTtBQUl2QyxNQUFNdUIsZUFBZSxHQUFHLGtCQUFrQjtBQUFDLElBRXRDQyxXQUFXO0FBQUEsV0FBWEEsV0FBVztFQUFYQSxXQUFXO0VBQVhBLFdBQVc7RUFBWEEsV0FBVztFQUFYQSxXQUFXO0VBQVhBLFdBQVc7QUFBQSxHQUFYQSxXQUFXLEtBQVhBLFdBQVc7QUFRaEIsTUFBTUMsV0FBVyxHQUFHLG1CQUFNLHVEQUFDLHFGQUFnQixLQUFHO0FBRTlDLFNBQVNDLFNBQVMsQ0FBRTtFQUFFQyxTQUFTLEdBQUc7QUFBVSxDQUFDLEVBQTZCO0VBQ3hFLE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdqQixrRkFBYyxFQUFFO0VBQzlCLE1BQU1rQixRQUFRLEdBQUdSLDZEQUFXLEVBQUU7RUFDOUIsTUFBTVMsV0FBVyxHQUFHWCxpREFBVSxDQUFDWCwwRkFBVyxDQUFDO0VBQzNDLE1BQU07SUFBRXVCO0VBQVksQ0FBQyxHQUFHWixpREFBVSxDQUFDTiw2REFBWSxDQUFDO0VBQ2hELE1BQU1tQixhQUFhLEdBQUd2Qix5RkFBcUIsRUFBRTtFQUM3QyxNQUFNO0lBQUV3QixrQkFBa0I7SUFBRUMsYUFBYTtJQUFFQyxvQkFBb0I7SUFBRUMsa0JBQWtCO0lBQUVDO0VBQWdCLENBQUMsR0FBRzNCLGtGQUFjLENBQUNhLGVBQWUsQ0FBQztFQUV4SSxNQUFNZSxjQUFjLEdBQUdsQiw4Q0FBTyxDQUFDLE1BQXFCLENBQ2xEO0lBQUVtQixLQUFLLEVBQUVYLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFBRVksS0FBSyxFQUFFaEIsV0FBVyxDQUFDaUI7RUFBSSxD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QUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLFNBQVMsc0VBQW1CO0FBQzVCOztBQUVBLHdCQUF3QixpREFBVTtBQUNsQyxTQUFTLDBEQUFtQixDQUFDLDREQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9TZXR0aW5ncy9DaGFpbnMvTWFuYWdlQ2hhaW5zLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9waG9zcGhvci1yZWFjdC9kaXN0L2ljb25zL1BsdXMuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfaXNDaGFpbkV2bUNvbXBhdGlibGUsIF9pc0N1c3RvbUNoYWluLCBfaXNTdWJzdHJhdGVDaGFpbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBGaWx0ZXJNb2RhbCwgTGF5b3V0LCBOZXR3b3JrRW1wdHlMaXN0LCBOZXR3b3JrVG9nZ2xlSXRlbSwgT3B0aW9uVHlwZSwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IENoYWluSW5mb1dpdGhTdGF0ZSwgdXNlQ2hhaW5JbmZvV2l0aFN0YXRlLCB1c2VGaWx0ZXJNb2RhbCwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEJ1dHRvblByb3BzLCBJY29uLCBNb2RhbENvbnRleHQsIFN3TGlzdCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgRmFkZXJzSG9yaXpvbnRhbCwgUGx1cyB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzXG5cbmNvbnN0IEZJTFRFUl9NT0RBTF9JRCA9ICdmaWx0ZXJUb2tlbk1vZGFsJztcblxuZW51bSBGaWx0ZXJWYWx1ZSB7XG4gIEVOQUJMRUQgPSAnZW5hYmxlZCcsXG4gIERJU0FCTEVEID0gJ2Rpc2FibGVkJyxcbiAgQ1VTVE9NID0gJ2N1c3RvbScsXG4gIFNVQlNUUkFURSA9ICdzdWJzdHJhdGUnLFxuICBFVk0gPSAnZXZtJ1xufVxuXG5jb25zdCByZW5kZXJFbXB0eSA9ICgpID0+IDxOZXR3b3JrRW1wdHlMaXN0IC8+O1xuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UHJvcHM+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG4gIGNvbnN0IHsgYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgY29uc3QgY2hhaW5JbmZvTGlzdCA9IHVzZUNoYWluSW5mb1dpdGhTdGF0ZSgpO1xuICBjb25zdCB7IGZpbHRlclNlbGVjdGlvbk1hcCwgb25BcHBseUZpbHRlciwgb25DaGFuZ2VGaWx0ZXJPcHRpb24sIG9uQ2xvc2VGaWx0ZXJNb2RhbCwgc2VsZWN0ZWRGaWx0ZXJzIH0gPSB1c2VGaWx0ZXJNb2RhbChGSUxURVJfTU9EQUxfSUQpO1xuXG4gIGNvbnN0IEZJTFRFUl9PUFRJT05TID0gdXNlTWVtbygoKTogT3B0aW9uVHlwZVtdID0+IChbXG4gICAgeyBsYWJlbDogdCgnRVZNIG5ldHdvcmtzJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5FVk0gfSxcbiAgICB7IGxhYmVsOiB0KCdTdWJzdHJhdGUgbmV0d29ya3MnKSwgdmFsdWU6IEZpbHRlclZhbHVlLlNVQlNUUkFURSB9LFxuICAgIHsgbGFiZWw6IHQoJ0N1c3RvbSBuZXR3b3JrcycpLCB2YWx1ZTogRmlsdGVyVmFsdWUuQ1VTVE9NIH0sXG4gICAgeyBsYWJlbDogdCgnRW5hYmxlZCBuZXR3b3JrcycpLCB2YWx1ZTogRmlsdGVyVmFsdWUuRU5BQkxFRCB9LFxuICAgIHsgbGFiZWw6IHQoJ0Rpc2FibGVkIG5ldHdvcmtzJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5ESVNBQkxFRCB9XG4gIF0pLCBbdF0pO1xuXG4gIGNvbnN0IGZpbHRlckZ1bmN0aW9uID0gdXNlTWVtbzwoaXRlbTogQ2hhaW5JbmZvV2l0aFN0YXRlKSA9PiBib29sZWFuPigoKSA9PiB7XG4gICAgcmV0dXJuIChjaGFpbkluZm8pID0+IHtcbiAgICAgIGlmICghc2VsZWN0ZWRGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2Ygc2VsZWN0ZWRGaWx0ZXJzKSB7XG4gICAgICAgIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLkNVU1RPTSkge1xuICAgICAgICAgIGlmIChfaXNDdXN0b21DaGFpbihjaGFpbkluZm8uc2x1ZykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLkVOQUJMRUQpIHtcbiAgICAgICAgICBpZiAoY2hhaW5JbmZvLmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuRElTQUJMRUQpIHtcbiAgICAgICAgICBpZiAoIWNoYWluSW5mby5hY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLlNVQlNUUkFURSkge1xuICAgICAgICAgIGlmIChfaXNTdWJzdHJhdGVDaGFpbihjaGFpbkluZm8pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSBGaWx0ZXJWYWx1ZS5FVk0pIHtcbiAgICAgICAgICBpZiAoX2lzQ2hhaW5Fdm1Db21wYXRpYmxlKGNoYWluSW5mbykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3NlbGVjdGVkRmlsdGVyc10pO1xuXG4gIGNvbnN0IHNlYXJjaFRva2VuID0gdXNlQ2FsbGJhY2soKGNoYWluSW5mbzogQ2hhaW5JbmZvV2l0aFN0YXRlLCBzZWFyY2hUZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0TG93ZXJDYXNlID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGNoYWluSW5mby5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJDaGFpbkl0ZW0gPSB1c2VDYWxsYmFjaygoY2hhaW5JbmZvOiBDaGFpbkluZm9XaXRoU3RhdGUpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5ldHdvcmtUb2dnbGVJdGVtXG4gICAgICAgIGNoYWluSW5mbz17Y2hhaW5JbmZvfVxuICAgICAgICBpc1Nob3dTdWJMb2dvPXt0cnVlfVxuICAgICAgICBrZXk9e2NoYWluSW5mby5zbHVnfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3ViSGVhZGVyQnV0dG9uOiBCdXR0b25Qcm9wc1tdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBwaG9zcGhvckljb249e1BsdXN9XG4gICAgICAgICAgICBzaXplPSdtZCdcbiAgICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgIC8+XG4gICAgICAgICksXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICBuYXZpZ2F0ZSgnL3NldHRpbmdzL2NoYWlucy9pbXBvcnQnLCB7IHN0YXRlOiB7IGlzRXh0ZXJuYWxSZXF1ZXN0OiBmYWxzZSB9IH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3Qgb25CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRlKC0xKTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3Qgb3BlbkZpbHRlck1vZGFsID0gdXNlQ2FsbGJhY2soKGU/OiBTeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGUgJiYgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhY3RpdmVNb2RhbChGSUxURVJfTU9EQUxfSUQpO1xuICB9LCBbYWN0aXZlTW9kYWxdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtgbWFuYWdlX2NoYWlucyAke2NsYXNzTmFtZX1gfVxuICAgICAgcmVzb2x2ZT17ZGF0YUNvbnRleHQuYXdhaXRTdG9yZXMoWydjaGFpblN0b3JlJ10pfVxuICAgID5cbiAgICAgIDxMYXlvdXQuQmFzZVxuICAgICAgICBvbkJhY2s9e29uQmFja31cbiAgICAgICAgc2hvd0JhY2tCdXR0b249e3RydWV9XG4gICAgICAgIHNob3dTdWJIZWFkZXI9e3RydWV9XG4gICAgICAgIHN1YkhlYWRlckJhY2tncm91bmQ9eyd0cmFuc3BhcmVudCd9XG4gICAgICAgIHN1YkhlYWRlckNlbnRlcj17dHJ1ZX1cbiAgICAgICAgc3ViSGVhZGVySWNvbnM9e3N1YkhlYWRlckJ1dHRvbn1cbiAgICAgICAgc3ViSGVhZGVyUGFkZGluZ1ZlcnRpY2FsPXt0cnVlfVxuICAgICAgICB0aXRsZT17dDxzdHJpbmc+KCdNYW5hZ2UgbmV0d29ya3MnKX1cbiAgICAgID5cbiAgICAgICAgPFN3TGlzdC5TZWN0aW9uXG4gICAgICAgICAgYWN0aW9uQnRuSWNvbj17KFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtGYWRlcnNIb3Jpem9udGFsfVxuICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgd2VpZ2h0PXsnZmlsbCd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgY2xhc3NOYW1lPXsnbWFuYWdlX2NoYWluc19fY29udGFpbmVyJ31cbiAgICAgICAgICBlbmFibGVTZWFyY2hJbnB1dFxuICAgICAgICAgIGZpbHRlckJ5PXtmaWx0ZXJGdW5jdGlvbn1cbiAgICAgICAgICBsaXN0PXtjaGFpbkluZm9MaXN0fVxuICAgICAgICAgIG1vZGU9eydib3hlZCd9XG4gICAgICAgICAgb25DbGlja0FjdGlvbkJ0bj17b3BlbkZpbHRlck1vZGFsfVxuICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckNoYWluSXRlbX1cbiAgICAgICAgICByZW5kZXJXaGVuRW1wdHk9e3JlbmRlckVtcHR5fVxuICAgICAgICAgIHNlYXJjaEZ1bmN0aW9uPXtzZWFyY2hUb2tlbn1cbiAgICAgICAgICBzZWFyY2hNaW5DaGFyYWN0ZXJzQ291bnQ9ezJ9XG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI9e3Q8c3RyaW5nPignU2VhcmNoIG5ldHdvcmsnKX1cbiAgICAgICAgICBzaG93QWN0aW9uQnRuXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZpbHRlck1vZGFsXG4gICAgICAgICAgaWQ9e0ZJTFRFUl9NT0RBTF9JRH1cbiAgICAgICAgICBvbkFwcGx5RmlsdGVyPXtvbkFwcGx5RmlsdGVyfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlRmlsdGVyTW9kYWx9XG4gICAgICAgICAgb25DaGFuZ2VPcHRpb249e29uQ2hhbmdlRmlsdGVyT3B0aW9ufVxuICAgICAgICAgIG9wdGlvblNlbGVjdGlvbk1hcD17ZmlsdGVyU2VsZWN0aW9uTWFwfVxuICAgICAgICAgIG9wdGlvbnM9e0ZJTFRFUl9PUFRJT05TfVxuICAgICAgICAvPlxuICAgICAgPC9MYXlvdXQuQmFzZT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBNYW5hZ2VDaGFpbnMgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICAnLmFudC1zdy1zY3JlZW4tbGF5b3V0LWJvZHknOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuXG4gICAgJy5hbnQtc3ctbGlzdC13cmFwcGVyLmFudC1zdy1saXN0LXdyYXBwZXI6YmVmb3JlJzoge1xuICAgICAgekluZGV4OiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNMR1xuICAgIH0sXG5cbiAgICAnLmFudC1zdy1saXN0LXNlY3Rpb24uLWJveGVkLW1vZGUgLmFudC1zdy1saXN0Jzoge1xuICAgICAgcGFkZGluZ0xlZnQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nWFMsXG4gICAgICBwYWRkaW5nQm90dG9tOiB0b2tlbi5wYWRkaW5nWFNcbiAgICB9LFxuXG4gICAgJy5hbnQtc3ctbGlzdC1zZWN0aW9uLi1ib3hlZC1tb2RlIC5hbnQtc3ctbGlzdC4taWdub3JlLXNjcm9sbGJhcic6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogdG9rZW4ucGFkZGluZyArIDZcbiAgICB9LFxuXG4gICAgJy5hbnQtbmV0d29yay1pdGVtLi13aXRoLWRpdmlkZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMVxuICAgIH0sXG5cbiAgICAnJl9faW5uZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAnLm1hbmFnZV9jaGFpbnNfX2NvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nQm90dG9tOiB0b2tlbi5wYWRkaW5nU00sXG4gICAgICBmbGV4OiAxXG4gICAgfSxcblxuICAgICcuYW50LW5ldHdvcmstaXRlbS1jb250ZW50IC5fX3RvZ2dsZS1hcmVhJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6IC10b2tlbi5tYXJnaW5YWFMsXG5cbiAgICAgICdidXR0b24gKyBidXR0b24nOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IHRva2VuLm1hcmdpblhTXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuYW50LXdlYjMtYmxvY2sgLmFudC13ZWIzLWJsb2NrLW1pZGRsZS1pdGVtJzoge1xuICAgICAgd2lkdGg6IDE5MFxuICAgIH0sXG5cbiAgICAnLmFudC1uZXR3b3JrLWl0ZW0tbmFtZSc6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRXcmFwOiAnbm93cmFwJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHBhZGRpbmdSaWdodDogdG9rZW4ucGFkZGluZ1hTXG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VDaGFpbnM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMjE2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJkdW90b25lXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxNiwxMjBIMTM2VjQwYTgsOCwwLDAsMC0xNiwwdjgwSDQwYTgsOCwwLDAsMCwwLDE2aDgwdjgwYTgsOCwwLDAsMCwxNiwwVjEzNmg4MGE4LDgsMCwwLDAsMC0xNlpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiNDBcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIyMTZcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjIxNlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwicmVndWxhclwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMjE2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBQbHVzID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgcmVuZGVyUGF0aDogcmVuZGVyUGF0aFxuICB9KSk7XG59KTtcblBsdXMuZGlzcGxheU5hbWUgPSBcIlBsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGx1cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBsdXMuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbIl9pc0NoYWluRXZtQ29tcGF0aWJsZSIsIl9pc0N1c3RvbUNoYWluIiwiX2lzU3Vic3RyYXRlQ2hhaW4iLCJGaWx0ZXJNb2RhbCIsIkxheW91dCIsIk5ldHdvcmtFbXB0eUxpc3QiLCJOZXR3b3JrVG9nZ2xlSXRlbSIsIlBhZ2VXcmFwcGVyIiwiRGF0YUNvbnRleHQiLCJ1c2VDaGFpbkluZm9XaXRoU3RhdGUiLCJ1c2VGaWx0ZXJNb2RhbCIsInVzZVRyYW5zbGF0aW9uIiwiSWNvbiIsIk1vZGFsQ29udGV4dCIsIlN3TGlzdCIsIkZhZGVyc0hvcml6b250YWwiLCJQbHVzIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJGSUxURVJfTU9EQUxfSUQiLCJGaWx0ZXJWYWx1ZSIsInJlbmRlckVtcHR5IiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwidCIsIm5hdmlnYXRlIiwiZGF0YUNvbnRleHQiLCJhY3RpdmVNb2RhbCIsImNoYWluSW5mb0xpc3QiLCJmaWx0ZXJTZWxlY3Rpb25NYXAiLCJvbkFwcGx5RmlsdGVyIiwib25DaGFuZ2VGaWx0ZXJPcHRpb24iLCJvbkNsb3NlRmlsdGVyTW9kYWwiLCJzZWxlY3RlZEZpbHRlcnMiLCJGSUxURVJfT1BUSU9OUyIsImxhYmVsIiwidmFsdWUiLCJFVk0iLCJTVUJTVFJBVEUiLCJDVVNUT00iLCJFTkFCTEVEIiwiRElTQUJMRUQiLCJmaWx0ZXJGdW5jdGlvbiIsImNoYWluSW5mbyIsImxlbmd0aCIsImZpbHRlciIsInNsdWciLCJhY3RpdmUiLCJzZWFyY2hUb2tlbiIsInNlYXJjaFRleHQiLCJzZWFyY2hUZXh0TG93ZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJuYW1lIiwiaW5jbHVkZXMiLCJyZW5kZXJDaGFpbkl0ZW0iLCJzdWJIZWFkZXJCdXR0b24iLCJpY29uIiwib25DbGljayIsInN0YXRlIiwiaXNFeHRlcm5hbFJlcXVlc3QiLCJvbkJhY2siLCJvcGVuRmlsdGVyTW9kYWwiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiYXdhaXRTdG9yZXMiLCJNYW5hZ2VDaGFpbnMiLCJ0aGVtZSIsInRva2VuIiwiZGlzcGxheSIsInpJbmRleCIsImJvcmRlclJhZGl1cyIsImJvcmRlclJhZGl1c0xHIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdYUyIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nUmlnaHQiLCJwb3NpdGlvbiIsImZsZXhEaXJlY3Rpb24iLCJvdmVyZmxvdyIsInBhZGRpbmdTTSIsImZsZXgiLCJtYXJnaW5SaWdodCIsIm1hcmdpblhYUyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5YUyIsIndpZHRoIiwidGV4dFdyYXAiLCJ0ZXh0T3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9