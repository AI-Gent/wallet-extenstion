"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Settings_Security_ManageWebsiteAccess_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Security/ManageWebsiteAccess/index.tsx":
/*!**************************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Security/ManageWebsiteAccess/index.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/stores/utils */ "../extension-koni-ui/src/stores/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-sub-header/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/X.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plugs.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlugsConnected.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/GlobeHemisphereWest.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/GearSix.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0















function getWebsiteItems(authUrlMap) {
  return Object.values(authUrlMap);
}
function getAccountCount(item) {
  const authType = item.accountAuthType;
  if (authType === 'evm') {
    return item.isAllowedMap ? Object.entries(item.isAllowedMap).filter(([address, rs]) => rs && (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_7__.isEthereumAddress)(address)).length : 0;
  }
  if (authType === 'substrate') {
    return item.isAllowedMap ? Object.entries(item.isAllowedMap).filter(([address, rs]) => rs && !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_7__.isEthereumAddress)(address)).length : 0;
  }
  return Object.values(item.isAllowedMap).filter(i => i).length;
}
const ACTION_MODAL_ID = 'actionModalId';
const FILTER_MODAL_ID = 'manage-website-access-filter-id';
var FilterValue;
(function (FilterValue) {
  FilterValue["SUBSTRATE"] = "substrate";
  FilterValue["ETHEREUM"] = "ethereum";
  FilterValue["BLOCKED"] = "blocked";
  FilterValue["Connected"] = "connected";
})(FilterValue || (FilterValue = {}));
function Component({
  className = ''
}) {
  const authUrlMap = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.settings.authUrls);
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__.ModalContext);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const goBack = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useDefaultNavigate)().goBack;
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.useTheme)();
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useFilterModal)(FILTER_MODAL_ID);
  const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    return item => {
      if (!selectedFilters.length) {
        return true;
      }
      for (const filter of selectedFilters) {
        if (filter === FilterValue.SUBSTRATE) {
          if (item.accountAuthType === 'substrate' || item.accountAuthType === 'both') {
            return true;
          }
        } else if (filter === FilterValue.ETHEREUM) {
          if (item.accountAuthType === 'evm' || item.accountAuthType === 'both') {
            return true;
          }
        } else if (filter === FilterValue.BLOCKED) {
          if (!item.isAllowed) {
            return true;
          }
        } else if (filter === FilterValue.Connected) {
          if (item.isAllowed) {
            return true;
          }
        }
      }
      return false;
    };
  }, [selectedFilters]);
  const onClickActionBtn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);
  const filterOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    return [{
      label: t('Substrate dApp'),
      value: FilterValue.SUBSTRATE
    }, {
      label: t('Ethereum dApp'),
      value: FilterValue.ETHEREUM
    }, {
      label: t('Blocked dApp'),
      value: FilterValue.BLOCKED
    }, {
      label: t('Connected dApp'),
      value: FilterValue.Connected
    }];
  }, [t]);
  const websiteAccessItems = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    return getWebsiteItems(authUrlMap);
  }, [authUrlMap]);
  const onOpenActionModal = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    activeModal(ACTION_MODAL_ID);
  }, [activeModal]);
  const onCloseActionModal = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    inactiveModal(ACTION_MODAL_ID);
  }, [inactiveModal]);
  const actions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    return [{
      key: 'forget-all',
      icon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
      iconBackgroundColor: token.colorWarning,
      title: t('Forget all'),
      onClick: () => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.forgetAllSite)(_subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_3__.updateAuthUrls).catch(console.error);
        onCloseActionModal();
      }
    }, {
      key: 'disconnect-all',
      icon: phosphor_react__WEBPACK_IMPORTED_MODULE_13__["default"],
      iconBackgroundColor: token['gray-3'],
      title: t('Disconnect all'),
      onClick: () => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.changeAuthorizationAll)(false, _subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_3__.updateAuthUrls).catch(console.error);
        onCloseActionModal();
      }
    }, {
      key: 'connect-all',
      icon: phosphor_react__WEBPACK_IMPORTED_MODULE_14__["default"],
      iconBackgroundColor: token['green-6'],
      title: t('Connect all'),
      onClick: () => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.changeAuthorizationAll)(true, _subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_3__.updateAuthUrls).catch(console.error);
        onCloseActionModal();
      }
    }];
  }, [onCloseActionModal, t, token]);
  const onClickItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(item => {
    return () => {
      navigate('/settings/dapp-access-edit', {
        state: {
          siteName: item.origin,
          origin: item.id,
          accountAuthType: item.accountAuthType || ''
        }
      });
    };
  }, [navigate]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(item => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.WebsiteAccessItem, {
      accountCount: getAccountCount(item),
      className: '__item',
      domain: item.id,
      onClick: onClickItem(item),
      siteName: item.origin || item.id
    }, item.id);
  }, [onClickItem]);
  const renderEmptyList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      emptyMessage: t('Your dApps will show up here'),
      emptyTitle: t('No dApps found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"]
    });
  }, [t]);
  const searchFunc = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((item, searchText) => {
    var _item$origin, _item$id;
    const searchTextLowerCase = searchText.toLowerCase();
    return ((_item$origin = item.origin) === null || _item$origin === void 0 ? void 0 : _item$origin.toLowerCase().includes(searchTextLowerCase)) || ((_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.toLowerCase().includes(searchTextLowerCase));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `manage-website-access ${className}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
      background: 'transparent',
      center: true,
      onBack: goBack,
      paddingVertical: true,
      rightButtons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
          customSize: '24px',
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
          type: "phosphor",
          weight: 'bold'
        }),
        onClick: onOpenActionModal
      }],
      showBackButton: true,
      title: t('Manage website access')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"].Section, {
      actionBtnIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"]
      }),
      enableSearchInput: true,
      filterBy: filterFunction,
      list: websiteAccessItems,
      onClickActionBtn: onClickActionBtn,
      renderItem: renderItem,
      renderWhenEmpty: renderEmptyList,
      searchFunction: searchFunc,
      searchMinCharactersCount: 2,
      searchPlaceholder: t('Search or enter a website'),
      showActionBtn: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.ActionModal, {
      actions: actions,
      id: ACTION_MODAL_ID,
      onCancel: onCloseActionModal,
      title: t('Access configuration')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.FilterModal, {
      id: FILTER_MODAL_ID,
      onApplyFilter: onApplyFilter,
      onCancel: onCloseFilterModal,
      onChangeOption: onChangeFilterOption,
      optionSelectionMap: filterSelectionMap,
      options: filterOptions,
      title: t('Filter')
    })]
  });
}
const ManageWebsiteAccess = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(Component).withConfig({
  displayName: "ManageWebsiteAccess",
  componentId: "sc-mezssz-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    height: '100%',
    backgroundColor: token.colorBgDefault,
    display: 'flex',
    flexDirection: 'column',
    '.ant-sw-list-section': {
      paddingTop: token.padding,
      flex: 1,
      marginBottom: token.margin
    },
    '.ant-sw-list-section .ant-sw-list': {
      paddingBottom: 0
    },
    '.__item + .__item': {
      marginTop: token.marginXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageWebsiteAccess);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1NldHRpbmdzX1NlY3VyaXR5X01hbmFnZVdlYnNpdGVBY2Nlc3NfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHOEk7QUFDdEQ7QUFDTztBQUVwQjtBQUVHO0FBQzRCO0FBQzFDO0FBQ2pCO0FBQ0w7QUFDSztBQUNNO0FBRUs7QUFBQTtBQUFBO0FBSTFELFNBQVM4QixlQUFlLENBQUVDLFVBQXVDLEVBQWlCO0VBQ2hGLE9BQU9DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRixVQUFVLENBQUM7QUFDbEM7QUFFQSxTQUFTRyxlQUFlLENBQUVDLElBQWlCLEVBQVU7RUFDbkQsTUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLGVBQWU7RUFFckMsSUFBSUQsUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixPQUFPRCxJQUFJLENBQUNHLFlBQVksR0FBR04sTUFBTSxDQUFDTyxPQUFPLENBQUNKLElBQUksQ0FBQ0csWUFBWSxDQUFDLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsRUFBRSxDQUFDLEtBQUtBLEVBQUUsSUFBSWIsd0VBQWlCLENBQUNZLE9BQU8sQ0FBQyxDQUFDLENBQUNFLE1BQU0sR0FBRyxDQUFDO0VBQ3JJO0VBRUEsSUFBSVAsUUFBUSxLQUFLLFdBQVcsRUFBRTtJQUM1QixPQUFPRCxJQUFJLENBQUNHLFlBQVksR0FBR04sTUFBTSxDQUFDTyxPQUFPLENBQUNKLElBQUksQ0FBQ0csWUFBWSxDQUFDLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsRUFBRSxDQUFDLEtBQUtBLEVBQUUsSUFBSSxDQUFDYix3RUFBaUIsQ0FBQ1ksT0FBTyxDQUFDLENBQUMsQ0FBQ0UsTUFBTSxHQUFHLENBQUM7RUFDdEk7RUFFQSxPQUFPWCxNQUFNLENBQUNDLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDRyxZ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LENBQUMsQ0FBQyxRQUFRO0lBQUUsRUFDbkI7RUFBQSxFQUNVO0FBRWxCO0FBRUEsTUFBTTJDLG1CQUFtQixHQUFHdkUsOERBQU0sQ0FBQ3FCLFNBQVMsQ0FBQztFQUFBO0VBQUE7QUFBQSxHQUFRLENBQUM7RUFBRW1ELEtBQUssRUFBRTtJQUFFekM7RUFBTTtBQUFTLENBQUMsS0FBSztFQUNwRixPQUFRO0lBQ04wQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxlQUFlLEVBQUUzQyxLQUFLLENBQUM0QyxjQUFjO0lBQ3JDQyxPQUFPLEVBQUUsTUFBTTtJQUNmQyxhQUFhLEVBQUUsUUFBUTtJQUV2QixzQkFBc0IsRUFBRTtNQUN0QkMsVUFBVSxFQUFFL0MsS0FBSyxDQUFDZ0QsT0FBTztNQUN6QkMsSUFBSSxFQUFFLENBQUM7TUFDUEMsWUFBWSxFQUFFbEQsS0FBSyxDQUFDbUQ7SUFDdEIsQ0FBQztJQUVELG1DQUFtQyxFQUFFO01BQ25DQyxhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUVELG1CQUFtQixFQUFFO01BQ25CQyxTQUFTLEVBQUVyRCxLQUFLLENBQUNzRDtJQUNuQjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZWQsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvU2V0dGluZ3MvU2VjdXJpdHkvTWFuYWdlV2Vic2l0ZUFjY2Vzcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEF1dGhVcmxJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL2hhbmRsZXJzL1N0YXRlJztcbmltcG9ydCB7IEFjdGlvbkl0ZW1UeXBlLCBBY3Rpb25Nb2RhbCwgRW1wdHlMaXN0LCBGaWx0ZXJNb2RhbCwgUGFnZVdyYXBwZXIsIFdlYnNpdGVBY2Nlc3NJdGVtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURlZmF1bHROYXZpZ2F0ZSwgdXNlRmlsdGVyTW9kYWwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB7IGNoYW5nZUF1dGhvcml6YXRpb25BbGwsIGZvcmdldEFsbFNpdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcyc7XG5pbXBvcnQgeyB1cGRhdGVBdXRoVXJscyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvc3RvcmVzL3V0aWxzJztcbmltcG9ydCB7IE1hbmFnZVdlYnNpdGVBY2Nlc3NEZXRhaWxQYXJhbSwgVGhlbWUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEljb24sIE1vZGFsQ29udGV4dCwgU3dMaXN0LCBTd1N1YkhlYWRlciB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgRmFkZXJzSG9yaXpvbnRhbCwgR2VhclNpeCwgR2xvYmVIZW1pc3BoZXJlV2VzdCwgUGx1Z3MsIFBsdWdzQ29ubmVjdGVkLCBYIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGlzRXRoZXJldW1BZGRyZXNzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHM7XG5cbmZ1bmN0aW9uIGdldFdlYnNpdGVJdGVtcyAoYXV0aFVybE1hcDogUmVjb3JkPHN0cmluZywgQXV0aFVybEluZm8+KTogQXV0aFVybEluZm9bXSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGF1dGhVcmxNYXApO1xufVxuXG5mdW5jdGlvbiBnZXRBY2NvdW50Q291bnQgKGl0ZW06IEF1dGhVcmxJbmZvKTogbnVtYmVyIHtcbiAgY29uc3QgYXV0aFR5cGUgPSBpdGVtLmFjY291bnRBdXRoVHlwZTtcblxuICBpZiAoYXV0aFR5cGUgPT09ICdldm0nKSB7XG4gICAgcmV0dXJuIGl0ZW0uaXNBbGxvd2VkTWFwID8gT2JqZWN0LmVudHJpZXMoaXRlbS5pc0FsbG93ZWRNYXApLmZpbHRlcigoW2FkZHJlc3MsIHJzXSkgPT4gcnMgJiYgaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzcykpLmxlbmd0aCA6IDA7XG4gIH1cblxuICBpZiAoYXV0aFR5cGUgPT09ICdzdWJzdHJhdGUnKSB7XG4gICAgcmV0dXJuIGl0ZW0uaXNBbGxvd2VkTWFwID8gT2JqZWN0LmVudHJpZXMoaXRlbS5pc0FsbG93ZWRNYXApLmZpbHRlcigoW2FkZHJlc3MsIHJzXSkgPT4gcnMgJiYgIWlzRXRoZXJldW1BZGRyZXNzKGFkZHJlc3MpKS5sZW5ndGggOiAwO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaXRlbS5pc0FsbG93ZWRNYXApLmZpbHRlcigoaSkgPT4gaSkubGVuZ3RoO1xufVxuXG5jb25zdCBBQ1RJT05fTU9EQUxfSUQgPSAnYWN0aW9uTW9kYWxJZCc7XG5jb25zdCBGSUxURVJfTU9EQUxfSUQgPSAnbWFuYWdlLXdlYnNpdGUtYWNjZXNzLWZpbHRlci1pZCc7XG5cbmVudW0gRmlsdGVyVmFsdWUge1xuICBTVUJTVFJBVEUgPSAnc3Vic3RyYXRlJyxcbiAgRVRIRVJFVU0gPSAnZXRoZXJldW0nLFxuICBCTE9DS0VEID0gJ2Jsb2NrZWQnLFxuICBDb25uZWN0ZWQgPSAnY29ubmVjdGVkJyxcbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50ICh7IGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIGNvbnN0IGF1dGhVcmxNYXAgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MuYXV0aFVybHMpO1xuICBjb25zdCB7IGFjdGl2ZU1vZGFsLCBpbmFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBnb0JhY2sgPSB1c2VEZWZhdWx0TmF2aWdhdGUoKS5nb0JhY2s7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG4gIGNvbnN0IHsgZmlsdGVyU2VsZWN0aW9uTWFwLCBvbkFwcGx5RmlsdGVyLCBvbkNoYW5nZUZpbHRlck9wdGlvbiwgb25DbG9zZUZpbHRlck1vZGFsLCBzZWxlY3RlZEZpbHRlcnMgfSA9IHVzZUZpbHRlck1vZGFsKEZJTFRFUl9NT0RBTF9JRCk7XG4gIGNvbnN0IGZpbHRlckZ1bmN0aW9uID0gdXNlTWVtbzwoaXRlbTogQXV0aFVybEluZm8pID0+IGJvb2xlYW4+KCgpID0+IHtcbiAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgIGlmICghc2VsZWN0ZWRGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2Ygc2VsZWN0ZWRGaWx0ZXJzKSB7XG4gICAgICAgIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLlNVQlNUUkFURSkge1xuICAgICAgICAgIGlmIChpdGVtLmFjY291bnRBdXRoVHlwZSA9PT0gJ3N1YnN0cmF0ZScgfHwgaXRlbS5hY2NvdW50QXV0aFR5cGUgPT09ICdib3RoJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuRVRIRVJFVU0pIHtcbiAgICAgICAgICBpZiAoaXRlbS5hY2NvdW50QXV0aFR5cGUgPT09ICdldm0nIHx8IGl0ZW0uYWNjb3VudEF1dGhUeXBlID09PSAnYm90aCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLkJMT0NLRUQpIHtcbiAgICAgICAgICBpZiAoIWl0ZW0uaXNBbGxvd2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSBGaWx0ZXJWYWx1ZS5Db25uZWN0ZWQpIHtcbiAgICAgICAgICBpZiAoaXRlbS5pc0FsbG93ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3NlbGVjdGVkRmlsdGVyc10pO1xuXG4gIGNvbnN0IG9uQ2xpY2tBY3Rpb25CdG4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWN0aXZlTW9kYWwoRklMVEVSX01PREFMX0lEKTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7IGxhYmVsOiB0KCdTdWJzdHJhdGUgZEFwcCcpLCB2YWx1ZTogRmlsdGVyVmFsdWUuU1VCU1RSQVRFIH0sXG4gICAgICB7IGxhYmVsOiB0KCdFdGhlcmV1bSBkQXBwJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5FVEhFUkVVTSB9LFxuICAgICAgeyBsYWJlbDogdCgnQmxvY2tlZCBkQXBwJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5CTE9DS0VEIH0sXG4gICAgICB7IGxhYmVsOiB0KCdDb25uZWN0ZWQgZEFwcCcpLCB2YWx1ZTogRmlsdGVyVmFsdWUuQ29ubmVjdGVkIH1cbiAgICBdO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IHdlYnNpdGVBY2Nlc3NJdGVtcyA9IHVzZU1lbW88QXV0aFVybEluZm9bXT4oKCkgPT4ge1xuICAgIHJldHVybiBnZXRXZWJzaXRlSXRlbXMoYXV0aFVybE1hcCk7XG4gIH0sIFthdXRoVXJsTWFwXSk7XG5cbiAgY29uc3Qgb25PcGVuQWN0aW9uTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWN0aXZlTW9kYWwoQUNUSU9OX01PREFMX0lEKTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3Qgb25DbG9zZUFjdGlvbk1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGluYWN0aXZlTW9kYWwoQUNUSU9OX01PREFMX0lEKTtcbiAgfSwgW2luYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBhY3Rpb25zOiBBY3Rpb25JdGVtVHlwZVtdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZm9yZ2V0LWFsbCcsXG4gICAgICAgIGljb246IFgsXG4gICAgICAgIGljb25CYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yV2FybmluZyxcbiAgICAgICAgdGl0bGU6IHQoJ0ZvcmdldCBhbGwnKSxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIGZvcmdldEFsbFNpdGUodXBkYXRlQXV0aFVybHMpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICAgIG9uQ2xvc2VBY3Rpb25Nb2RhbCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0LWFsbCcsXG4gICAgICAgIGljb246IFBsdWdzLFxuICAgICAgICBpY29uQmFja2dyb3VuZENvbG9yOiB0b2tlblsnZ3JheS0zJ10sXG4gICAgICAgIHRpdGxlOiB0KCdEaXNjb25uZWN0IGFsbCcpLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgY2hhbmdlQXV0aG9yaXphdGlvbkFsbChmYWxzZSwgdXBkYXRlQXV0aFVybHMpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICAgIG9uQ2xvc2VBY3Rpb25Nb2RhbCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdjb25uZWN0LWFsbCcsXG4gICAgICAgIGljb246IFBsdWdzQ29ubmVjdGVkLFxuICAgICAgICBpY29uQmFja2dyb3VuZENvbG9yOiB0b2tlblsnZ3JlZW4tNiddLFxuICAgICAgICB0aXRsZTogdCgnQ29ubmVjdCBhbGwnKSxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZUF1dGhvcml6YXRpb25BbGwodHJ1ZSwgdXBkYXRlQXV0aFVybHMpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICAgIG9uQ2xvc2VBY3Rpb25Nb2RhbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcbiAgfSwgW29uQ2xvc2VBY3Rpb25Nb2RhbCwgdCwgdG9rZW5dKTtcblxuICBjb25zdCBvbkNsaWNrSXRlbSA9IHVzZUNhbGxiYWNrKChpdGVtOiBBdXRoVXJsSW5mbykgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBuYXZpZ2F0ZSgnL3NldHRpbmdzL2RhcHAtYWNjZXNzLWVkaXQnLCB7IHN0YXRlOiB7XG4gICAgICAgIHNpdGVOYW1lOiBpdGVtLm9yaWdpbixcbiAgICAgICAgb3JpZ2luOiBpdGVtLmlkLFxuICAgICAgICBhY2NvdW50QXV0aFR5cGU6IGl0ZW0uYWNjb3VudEF1dGhUeXBlIHx8ICcnXG4gICAgICB9IGFzIE1hbmFnZVdlYnNpdGVBY2Nlc3NEZXRhaWxQYXJhbSB9KTtcbiAgICB9O1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCByZW5kZXJJdGVtID0gdXNlQ2FsbGJhY2soXG4gICAgKGl0ZW06IEF1dGhVcmxJbmZvKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V2Vic2l0ZUFjY2Vzc0l0ZW1cbiAgICAgICAgICBhY2NvdW50Q291bnQ9e2dldEFjY291bnRDb3VudChpdGVtKX1cbiAgICAgICAgICBjbGFzc05hbWU9eydfX2l0ZW0nfVxuICAgICAgICAgIGRvbWFpbj17aXRlbS5pZH1cbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja0l0ZW0oaXRlbSl9XG4gICAgICAgICAgc2l0ZU5hbWU9e2l0ZW0ub3JpZ2luIHx8IGl0ZW0uaWR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gICAgW29uQ2xpY2tJdGVtXVxuICApO1xuXG4gIGNvbnN0IHJlbmRlckVtcHR5TGlzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVtcHR5TGlzdFxuICAgICAgICBlbXB0eU1lc3NhZ2U9e3QoJ1lvdXIgZEFwcHMgd2lsbCBzaG93IHVwIGhlcmUnKX1cbiAgICAgICAgZW1wdHlUaXRsZT17dCgnTm8gZEFwcHMgZm91bmQnKX1cbiAgICAgICAgcGhvc3Bob3JJY29uPXtHbG9iZUhlbWlzcGhlcmVXZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IHNlYXJjaEZ1bmMgPSB1c2VDYWxsYmFjaygoaXRlbTogQXV0aFVybEluZm8sIHNlYXJjaFRleHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFRleHRMb3dlckNhc2UgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgaXRlbS5vcmlnaW4/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSkgfHxcbiAgICAgIGl0ZW0uaWQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtgbWFuYWdlLXdlYnNpdGUtYWNjZXNzICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgPFN3U3ViSGVhZGVyXG4gICAgICAgIGJhY2tncm91bmQ9eyd0cmFuc3BhcmVudCd9XG4gICAgICAgIGNlbnRlclxuICAgICAgICBvbkJhY2s9e2dvQmFja31cbiAgICAgICAgcGFkZGluZ1ZlcnRpY2FsXG4gICAgICAgIHJpZ2h0QnV0dG9ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246IChcbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBjdXN0b21TaXplPXsnMjRweCd9XG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtHZWFyU2l4fVxuICAgICAgICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgICAgICAgIHdlaWdodD17J2JvbGQnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG9uT3BlbkFjdGlvbk1vZGFsXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgICBzaG93QmFja0J1dHRvblxuICAgICAgICB0aXRsZT17dCgnTWFuYWdlIHdlYnNpdGUgYWNjZXNzJyl9XG4gICAgICAvPlxuXG4gICAgICA8U3dMaXN0LlNlY3Rpb25cbiAgICAgICAgYWN0aW9uQnRuSWNvbj17PEljb24gcGhvc3Bob3JJY29uPXtGYWRlcnNIb3Jpem9udGFsfSAvPn1cbiAgICAgICAgZW5hYmxlU2VhcmNoSW5wdXRcbiAgICAgICAgZmlsdGVyQnk9e2ZpbHRlckZ1bmN0aW9ufVxuICAgICAgICBsaXN0PXt3ZWJzaXRlQWNjZXNzSXRlbXN9XG4gICAgICAgIG9uQ2xpY2tBY3Rpb25CdG49e29uQ2xpY2tBY3Rpb25CdG59XG4gICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckl0ZW19XG4gICAgICAgIHJlbmRlcldoZW5FbXB0eT17cmVuZGVyRW1wdHlMaXN0fVxuICAgICAgICBzZWFyY2hGdW5jdGlvbj17c2VhcmNoRnVuY31cbiAgICAgICAgc2VhcmNoTWluQ2hhcmFjdGVyc0NvdW50PXsyfVxuICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dDxzdHJpbmc+KCdTZWFyY2ggb3IgZW50ZXIgYSB3ZWJzaXRlJyl9XG4gICAgICAgIHNob3dBY3Rpb25CdG5cbiAgICAgIC8+XG5cbiAgICAgIDxBY3Rpb25Nb2RhbFxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICBpZD17QUNUSU9OX01PREFMX0lEfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZUFjdGlvbk1vZGFsfVxuICAgICAgICB0aXRsZT17dCgnQWNjZXNzIGNvbmZpZ3VyYXRpb24nKX1cbiAgICAgIC8+XG5cbiAgICAgIDxGaWx0ZXJNb2RhbFxuICAgICAgICBpZD17RklMVEVSX01PREFMX0lEfVxuICAgICAgICBvbkFwcGx5RmlsdGVyPXtvbkFwcGx5RmlsdGVyfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZUZpbHRlck1vZGFsfVxuICAgICAgICBvbkNoYW5nZU9wdGlvbj17b25DaGFuZ2VGaWx0ZXJPcHRpb259XG4gICAgICAgIG9wdGlvblNlbGVjdGlvbk1hcD17ZmlsdGVyU2VsZWN0aW9uTWFwfVxuICAgICAgICBvcHRpb25zPXtmaWx0ZXJPcHRpb25zfVxuICAgICAgICB0aXRsZT17dCgnRmlsdGVyJyl9XG4gICAgICAvPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59XG5cbmNvbnN0IE1hbmFnZVdlYnNpdGVBY2Nlc3MgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdEZWZhdWx0LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAgICcuYW50LXN3LWxpc3Qtc2VjdGlvbic6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRva2VuLnBhZGRpbmcsXG4gICAgICBmbGV4OiAxLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5cbiAgICB9LFxuXG4gICAgJy5hbnQtc3ctbGlzdC1zZWN0aW9uIC5hbnQtc3ctbGlzdCc6IHtcbiAgICAgIHBhZGRpbmdCb3R0b206IDBcbiAgICB9LFxuXG4gICAgJy5fX2l0ZW0gKyAuX19pdGVtJzoge1xuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5YU1xuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlV2Vic2l0ZUFjY2VzcztcbiJdLCJuYW1lcyI6WyJBY3Rpb25Nb2RhbCIsIkVtcHR5TGlzdCIsIkZpbHRlck1vZGFsIiwiUGFnZVdyYXBwZXIiLCJXZWJzaXRlQWNjZXNzSXRlbSIsInVzZURlZmF1bHROYXZpZ2F0ZSIsInVzZUZpbHRlck1vZGFsIiwiY2hhbmdlQXV0aG9yaXphdGlvbkFsbCIsImZvcmdldEFsbFNpdGUiLCJ1cGRhdGVBdXRoVXJscyIsIkljb24iLCJNb2RhbENvbnRleHQiLCJTd0xpc3QiLCJTd1N1YkhlYWRlciIsIkZhZGVyc0hvcml6b250YWwiLCJHZWFyU2l4IiwiR2xvYmVIZW1pc3BoZXJlV2VzdCIsIlBsdWdzIiwiUGx1Z3NDb25uZWN0ZWQiLCJYIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTZWxlY3RvciIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwidXNlVGhlbWUiLCJpc0V0aGVyZXVtQWRkcmVzcyIsImdldFdlYnNpdGVJdGVtcyIsImF1dGhVcmxNYXAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJnZXRBY2NvdW50Q291bnQiLCJpdGVtIiwiYXV0aFR5cGUiLCJhY2NvdW50QXV0aFR5cGUiLCJpc0FsbG93ZWRNYXAiLCJlbnRyaWVzIiwiZmlsdGVyIiwiYWRkcmVzcyIsInJzIiwibGVuZ3RoIiwiaSIsIkFDVElPTl9NT0RBTF9JRCIsIkZJTFRFUl9NT0RBTF9JRCIsIkZpbHRlclZhbHVlIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwic3RhdGUiLCJzZXR0aW5ncyIsImF1dGhVcmxzIiwiYWN0aXZlTW9kYWwiLCJpbmFjdGl2ZU1vZGFsIiwidCIsIm5hdmlnYXRlIiwiZ29CYWNrIiwidG9rZW4iLCJmaWx0ZXJTZWxlY3Rpb25NYXAiLCJvbkFwcGx5RmlsdGVyIiwib25DaGFuZ2VGaWx0ZXJPcHRpb24iLCJvbkNsb3NlRmlsdGVyTW9kYWwiLCJzZWxlY3RlZEZpbHRlcnMiLCJmaWx0ZXJGdW5jdGlvbiIsIlNVQlNUUkFURSIsIkVUSEVSRVVNIiwiQkxPQ0tFRCIsImlzQWxsb3dlZCIsIkNvbm5lY3RlZCIsIm9uQ2xpY2tBY3Rpb25CdG4iLCJmaWx0ZXJPcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsIndlYnNpdGVBY2Nlc3NJdGVtcyIsIm9uT3BlbkFjdGlvbk1vZGFsIiwib25DbG9zZUFjdGlvbk1vZGFsIiwiYWN0aW9ucyIsImtleSIsImljb24iLCJpY29uQmFja2dyb3VuZENvbG9yIiwiY29sb3JXYXJuaW5nIiwidGl0bGUiLCJvbkNsaWNrIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJvbkNsaWNrSXRlbSIsInNpdGVOYW1lIiwib3JpZ2luIiwiaWQiLCJyZW5kZXJJdGVtIiwicmVuZGVyRW1wdHlMaXN0Iiwic2VhcmNoRnVuYyIsInNlYXJjaFRleHQiLCJzZWFyY2hUZXh0TG93ZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIk1hbmFnZVdlYnNpdGVBY2Nlc3MiLCJ0aGVtZSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQmdEZWZhdWx0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nVG9wIiwicGFkZGluZyIsImZsZXgiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luWFMiXSwic291cmNlUm9vdCI6IiJ9