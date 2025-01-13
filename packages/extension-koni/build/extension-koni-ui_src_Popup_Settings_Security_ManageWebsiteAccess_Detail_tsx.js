"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Settings_Security_ManageWebsiteAccess_Detail_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Security/ManageWebsiteAccess/Detail.tsx":
/*!***************************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Security/ManageWebsiteAccess/Detail.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_ActionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/ActionModal */ "../extension-koni-ui/src/components/Modal/ActionModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/stores/utils */ "../extension-koni-ui/src/stores/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/switch/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldSlash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldCheck.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/X.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plugs.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlugsConnected.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/MagnifyingGlass.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/GearSix.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

















const ActionModalId = 'actionModalId';
// const FilterModalId = 'filterModalId';

function Component({
  accountAuthType,
  authInfo,
  className = '',
  goBack,
  origin,
  siteName
}) {
  const accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.accountState.accounts);
  const [pendingMap, setPendingMap] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__.ModalContext);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
  const accountItems = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    const accountListWithoutAll = accounts.filter(opt => opt.address !== 'ALL');
    if (accountAuthType === 'substrate') {
      return accountListWithoutAll.filter(acc => !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_11__.isEthereumAddress)(acc.address));
    } else if (accountAuthType === 'evm') {
      return accountListWithoutAll.filter(acc => (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_11__.isEthereumAddress)(acc.address));
    } else {
      return accountListWithoutAll;
    }
  }, [accountAuthType, accounts]);
  const onOpenActionModal = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    activeModal(ActionModalId);
  }, [activeModal]);
  const onCloseActionModal = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    inactiveModal(ActionModalId);
  }, [inactiveModal]);
  const actions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    const isAllowed = authInfo.isAllowed;
    const result = [{
      key: isAllowed ? 'block' : 'unblock',
      icon: isAllowed ? phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"] : phosphor_react__WEBPACK_IMPORTED_MODULE_13__["default"],
      iconBackgroundColor: isAllowed ? token.colorError : token.colorSuccess,
      title: isAllowed ? t('Block this site') : t('Unblock this site'),
      onClick: () => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.toggleAuthorization)(origin).then(({
          list
        }) => {
          (0,_subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_4__.updateAuthUrls)(list);
        }).catch(console.error);
        onCloseActionModal();
      }
    }, {
      key: 'forget-site',
      icon: phosphor_react__WEBPACK_IMPORTED_MODULE_14__["default"],
      iconBackgroundColor: token.colorWarning,
      title: t('Forget this site'),
      onClick: () => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.forgetSite)(origin, _subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_4__.updateAuthUrls).catch(console.error);
        onCloseActionModal();
      }
    }];
    if (isAllowed) {
      result.push({
        key: 'disconnect-all',
        icon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
        iconBackgroundColor: token['gray-3'],
        title: t('Disconnect all accounts'),
        onClick: () => {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.changeAuthorization)(false, origin, _subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_4__.updateAuthUrls).catch(console.error);
          onCloseActionModal();
        }
      }, {
        key: 'connect-all',
        icon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
        iconBackgroundColor: token['green-6'],
        title: t('Connect all accounts'),
        onClick: () => {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.changeAuthorization)(true, origin, _subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_4__.updateAuthUrls).catch(console.error);
          onCloseActionModal();
        }
      });
    }
    return result;
  }, [authInfo.isAllowed, onCloseActionModal, origin, t, token]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(item => {
    const isEnabled = authInfo.isAllowedMap[item.address];
    const onClick = () => {
      setPendingMap(prevMap => {
        return {
          ...prevMap,
          [item.address]: !isEnabled
        };
      });
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.changeAuthorizationPerAccount)(item.address, !isEnabled, origin, _subwallet_extension_koni_ui_stores_utils__WEBPACK_IMPORTED_MODULE_4__.updateAuthUrls).catch(console.log).finally(() => {
        setPendingMap(prevMap => {
          const newMap = {
            ...prevMap
          };
          delete newMap[item.address];
          return newMap;
        });
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountItemWithName, {
      accountName: item.name,
      address: item.address,
      avatarSize: token.sizeLG,
      rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
        checked: pendingMap[item.address] === undefined ? isEnabled : pendingMap[item.address],
        disabled: !authInfo.isAllowed || pendingMap[item.address] !== undefined,
        onClick,
        style: {
          marginRight: 8
        }
      })
    }, item.address);
  }, [authInfo.isAllowed, authInfo.isAllowedMap, origin, pendingMap, token.sizeLG]);
  const searchFunc = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((item, searchText) => {
    const searchTextLowerCase = searchText.toLowerCase();
    return item.address.toLowerCase().includes(searchTextLowerCase) || (item.name ? item.name.toLowerCase().includes(searchTextLowerCase) : false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setPendingMap(prevMap => {
      if (!Object.keys(prevMap).length) {
        return prevMap;
      }
      return {};
    });
  }, [authInfo]);
  const renderEmptyList = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      emptyMessage: t('Your accounts will appear here.'),
      emptyTitle: t('No account found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"]
    });
  }, [t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `manage-website-access-detail ${className}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: goBack,
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
          size: "md",
          type: "phosphor",
          weight: "bold"
        }),
        onClick: onOpenActionModal
      }]
      // title={siteName || authInfo.id}
      ,
      title: "AIGENT",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"].Section, {
        displayRow: true,
        enableSearchInput: true,
        list: accountItems,
        renderItem: renderItem,
        renderWhenEmpty: renderEmptyList,
        rowGap: '8px',
        searchFunction: searchFunc,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search account')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components_Modal_ActionModal__WEBPACK_IMPORTED_MODULE_1__.ActionModal, {
        actions: actions,
        className: `${className} action-modal`,
        id: ActionModalId,
        onCancel: onCloseActionModal,
        title: t('dApp configuration')
      })]
    })
  });
}
function WrapperComponent(props) {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useLocation)();
  const {
    accountAuthType,
    origin,
    siteName
  } = location.state;
  const authInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.settings.authUrls[origin]);
  const goBack = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_2__["default"])().goBack;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!authInfo) {
      goBack();
    }
  }, [goBack, authInfo]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: !!authInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Component, {
      ...props,
      accountAuthType: accountAuthType,
      authInfo: authInfo,
      goBack: goBack,
      origin: origin,
      siteName: siteName
    })
  });
}
const ManageWebsiteAccessDetail = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(WrapperComponent).withConfig({
  displayName: "Detail__ManageWebsiteAccessDetail",
  componentId: "sc-kvk64y-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.ant-sw-list-section': {
      height: '100%'
    },
    '&.manage-website-access-detail': {
      backgroundColor: token.colorBgDefault
    },
    '.ant-sw-screen-layout-body': {
      paddingTop: token.paddingSM
    },
    '&.action-modal': {
      '.__action-item.block .ant-setting-item-name': {
        color: token.colorError
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageWebsiteAccessDetail);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1NldHRpbmdzX1NlY3VyaXR5X01hbmFnZVdlYnNpdGVBY2Nlc3NfRGV0YWlsX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJOEc7QUFDTjtBQUNWO0FBQytDO0FBRWxFO0FBR0Y7QUFDcUM7QUFDekI7QUFDdEM7QUFDTDtBQUNLO0FBQ007QUFFSztBQUFBO0FBQUE7QUFBQTtBQVMxRCxNQUFNa0MsYUFBYSxHQUFHLGVBQWU7QUFDckM7O0FBRUEsU0FBU0MsU0FBUyxDQUFFO0VBQUVDLGVBQWU7RUFBRUMsUUFBUTtFQUFFQyxTQUFTLEdBQUcsRUFBRTtFQUFFQyxNQUFNO0VBQUVDLE1BQU07RUFBRUM7QUFBZ0IsQ0FBQyxFQUE2QjtFQUM3SCxNQUFNQyxRQUFRLEdBQUdiLHdEQUFXLENBQUVjLEtBQWdCLElBQUtBLEtBQUssQ0FBQ0MsWUFBWSxDQUFDRixRQUFRLENBQUM7RUFDL0UsTUFBTSxDQUFDRyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHbkIsK0NBQVEsQ0FBMEIsQ0FBQyxDQUFDLENBQUM7RUFDekUsTUFBTTtJQUFFb0IsV0FBVztJQUFFQztFQUFjLENBQUMsR0FBR3hCLGlEQUFVLENBQUNaLDZEQUFZLENBQUM7RUFDL0QsTUFBTTtJQUFFcUM7RUFBRSxDQUFDLEdBQUdyQiw2REFBYyxFQUFFO0VBQzlCLE1BQU07SUFBRXNCO0VBQU0sQ0FBQyxHQUFHbEIsNERBQVEsRUFBVztFQUNyQyxNQUFNbUIsWUFBWSxHQUFHekIsOENBQU8sQ0FBQyxNQUFNO0lBQ2pDLE1BQU0wQixxQkFBcUIsR0FBR1YsUUFBUSxDQUFDVyxNQUFNLENBQUVDLEdBQUcsSUFBS0EsR0FBRyxDQUFDQyxPQUFPLEtBQUssS0FBSyxDQUFDO0lBRTdFLElBQUluQixlQUFlLEtBQUssV0FBVyxFQUFFO01BQ25DLE9BQU9nQixxQkFBcUIsQ0FBQ0MsTUFBTSxD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QUFNO0FBQVMsQ0FBQyxLQUFLO0VBQ2pHLE9BQVE7SUFDTixzQkFBc0IsRUFBRTtNQUN0QnNELE1BQU0sRUFBRTtJQUNWLENBQUM7SUFFRCxnQ0FBZ0MsRUFBRTtNQUNoQ0MsZUFBZSxFQUFFdkQsS0FBSyxDQUFDd0Q7SUFDekIsQ0FBQztJQUVELDRCQUE0QixFQUFFO01BQzVCQyxVQUFVLEVBQUV6RCxLQUFLLENBQUMwRDtJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLEVBQUU7TUFDaEIsNkNBQTZDLEVBQUU7UUFDN0NDLEtBQUssRUFBRTNELEtBQUssQ0FBQ2U7TUFDZjtJQUNGO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlcUMseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvU2V0dGluZ3MvU2VjdXJpdHkvTWFuYWdlV2Vic2l0ZUFjY2Vzcy9EZXRhaWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBBdXRoVXJsSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9oYW5kbGVycy9TdGF0ZSc7XG5pbXBvcnQgeyBBY2NvdW50SnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBBY2NvdW50SXRlbVdpdGhOYW1lLCBFbXB0eUxpc3QsIExheW91dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWN0aW9uSXRlbVR5cGUsIEFjdGlvbk1vZGFsIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL01vZGFsL0FjdGlvbk1vZGFsJztcbmltcG9ydCB1c2VEZWZhdWx0TmF2aWdhdGUgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9yb3V0ZXIvdXNlRGVmYXVsdE5hdmlnYXRlJztcbmltcG9ydCB7IGNoYW5nZUF1dGhvcml6YXRpb24sIGNoYW5nZUF1dGhvcml6YXRpb25QZXJBY2NvdW50LCBmb3JnZXRTaXRlLCB0b2dnbGVBdXRob3JpemF0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgdXBkYXRlQXV0aFVybHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcy91dGlscyc7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgTWFuYWdlV2Vic2l0ZUFjY2Vzc0RldGFpbFBhcmFtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IEljb24sIE1vZGFsQ29udGV4dCwgU3dpdGNoLCBTd0xpc3QgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCB7IEdlYXJTaXgsIE1hZ25pZnlpbmdHbGFzcywgUGx1Z3MsIFBsdWdzQ29ubmVjdGVkLCBTaGllbGRDaGVjaywgU2hpZWxkU2xhc2gsIFggfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcyAmIE1hbmFnZVdlYnNpdGVBY2Nlc3NEZXRhaWxQYXJhbSAmIHtcbiAgYXV0aEluZm86IEF1dGhVcmxJbmZvO1xuICBnb0JhY2s6ICgpID0+IHZvaWRcbn07XG5cbnR5cGUgV3JhcHBlclByb3BzID0gVGhlbWVQcm9wcztcblxuY29uc3QgQWN0aW9uTW9kYWxJZCA9ICdhY3Rpb25Nb2RhbElkJztcbi8vIGNvbnN0IEZpbHRlck1vZGFsSWQgPSAnZmlsdGVyTW9kYWxJZCc7XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBhY2NvdW50QXV0aFR5cGUsIGF1dGhJbmZvLCBjbGFzc05hbWUgPSAnJywgZ29CYWNrLCBvcmlnaW4sIHNpdGVOYW1lIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIGNvbnN0IGFjY291bnRzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZS5hY2NvdW50cyk7XG4gIGNvbnN0IFtwZW5kaW5nTWFwLCBzZXRQZW5kaW5nTWFwXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+Pih7fSk7XG4gIGNvbnN0IHsgYWN0aXZlTW9kYWwsIGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IHRva2VuIH0gPSB1c2VUaGVtZSgpIGFzIFRoZW1lO1xuICBjb25zdCBhY2NvdW50SXRlbXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBhY2NvdW50TGlzdFdpdGhvdXRBbGwgPSBhY2NvdW50cy5maWx0ZXIoKG9wdCkgPT4gb3B0LmFkZHJlc3MgIT09ICdBTEwnKTtcblxuICAgIGlmIChhY2NvdW50QXV0aFR5cGUgPT09ICdzdWJzdHJhdGUnKSB7XG4gICAgICByZXR1cm4gYWNjb3VudExpc3RXaXRob3V0QWxsLmZpbHRlcigoYWNjKSA9PiAhaXNFdGhlcmV1bUFkZHJlc3MoYWNjLmFkZHJlc3MpKTtcbiAgICB9IGVsc2UgaWYgKGFjY291bnRBdXRoVHlwZSA9PT0gJ2V2bScpIHtcbiAgICAgIHJldHVybiBhY2NvdW50TGlzdFdpdGhvdXRBbGwuZmlsdGVyKChhY2MpID0+IGlzRXRoZXJldW1BZGRyZXNzKGFjYy5hZGRyZXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2NvdW50TGlzdFdpdGhvdXRBbGw7XG4gICAgfVxuICB9LCBbYWNjb3VudEF1dGhUeXBlLCBhY2NvdW50c10pO1xuXG4gIGNvbnN0IG9uT3BlbkFjdGlvbk1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGFjdGl2ZU1vZGFsKEFjdGlvbk1vZGFsSWQpO1xuICB9LCBbYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBvbkNsb3NlQWN0aW9uTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW5hY3RpdmVNb2RhbChBY3Rpb25Nb2RhbElkKTtcbiAgfSwgW2luYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBhY3Rpb25zOiBBY3Rpb25JdGVtVHlwZVtdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaXNBbGxvd2VkID0gYXV0aEluZm8uaXNBbGxvd2VkO1xuXG4gICAgY29uc3QgcmVzdWx0OiBBY3Rpb25JdGVtVHlwZVtdID0gW1xuICAgICAge1xuICAgICAgICBrZXk6IGlzQWxsb3dlZCA/ICdibG9jaycgOiAndW5ibG9jaycsXG4gICAgICAgIGljb246IGlzQWxsb3dlZCA/IFNoaWVsZFNsYXNoIDogU2hpZWxkQ2hlY2ssXG4gICAgICAgIGljb25CYWNrZ3JvdW5kQ29sb3I6IGlzQWxsb3dlZCA/IHRva2VuLmNvbG9yRXJyb3IgOiB0b2tlbi5jb2xvclN1Y2Nlc3MsXG4gICAgICAgIHRpdGxlOiBpc0FsbG93ZWQgPyB0KCdCbG9jayB0aGlzIHNpdGUnKSA6IHQoJ1VuYmxvY2sgdGhpcyBzaXRlJyksXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICB0b2dnbGVBdXRob3JpemF0aW9uKG9yaWdpbilcbiAgICAgICAgICAgIC50aGVuKCh7IGxpc3QgfSkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVBdXRoVXJscyhsaXN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgb25DbG9zZUFjdGlvbk1vZGFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2ZvcmdldC1zaXRlJyxcbiAgICAgICAgaWNvbjogWCxcbiAgICAgICAgaWNvbkJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JXYXJuaW5nLFxuICAgICAgICB0aXRsZTogdCgnRm9yZ2V0IHRoaXMgc2l0ZScpLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgZm9yZ2V0U2l0ZShvcmlnaW4sIHVwZGF0ZUF1dGhVcmxzKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgICAgICBvbkNsb3NlQWN0aW9uTW9kYWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBpZiAoaXNBbGxvd2VkKSB7XG4gICAgICByZXN1bHQucHVzaChcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QtYWxsJyxcbiAgICAgICAgICBpY29uOiBQbHVncyxcbiAgICAgICAgICBpY29uQmFja2dyb3VuZENvbG9yOiB0b2tlblsnZ3JheS0zJ10sXG4gICAgICAgICAgdGl0bGU6IHQoJ0Rpc2Nvbm5lY3QgYWxsIGFjY291bnRzJyksXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQXV0aG9yaXphdGlvbihmYWxzZSwgb3JpZ2luLCB1cGRhdGVBdXRoVXJscykuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBvbkNsb3NlQWN0aW9uTW9kYWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdjb25uZWN0LWFsbCcsXG4gICAgICAgICAgaWNvbjogUGx1Z3NDb25uZWN0ZWQsXG4gICAgICAgICAgaWNvbkJhY2tncm91bmRDb2xvcjogdG9rZW5bJ2dyZWVuLTYnXSxcbiAgICAgICAgICB0aXRsZTogdCgnQ29ubmVjdCBhbGwgYWNjb3VudHMnKSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VBdXRob3JpemF0aW9uKHRydWUsIG9yaWdpbiwgdXBkYXRlQXV0aFVybHMpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICAgICAgb25DbG9zZUFjdGlvbk1vZGFsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFthdXRoSW5mby5pc0FsbG93ZWQsIG9uQ2xvc2VBY3Rpb25Nb2RhbCwgb3JpZ2luLCB0LCB0b2tlbl0pO1xuXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSB1c2VDYWxsYmFjaygoaXRlbTogQWNjb3VudEpzb24pID0+IHtcbiAgICBjb25zdCBpc0VuYWJsZWQ6IGJvb2xlYW4gPSBhdXRoSW5mby5pc0FsbG93ZWRNYXBbaXRlbS5hZGRyZXNzXTtcblxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBzZXRQZW5kaW5nTWFwKChwcmV2TWFwKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucHJldk1hcCxcbiAgICAgICAgICBbaXRlbS5hZGRyZXNzXTogIWlzRW5hYmxlZFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjaGFuZ2VBdXRob3JpemF0aW9uUGVyQWNjb3VudChpdGVtLmFkZHJlc3MsICFpc0VuYWJsZWQsIG9yaWdpbiwgdXBkYXRlQXV0aFVybHMpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldFBlbmRpbmdNYXAoKHByZXZNYXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcCA9IHsgLi4ucHJldk1hcCB9O1xuXG4gICAgICAgICAgICBkZWxldGUgbmV3TWFwW2l0ZW0uYWRkcmVzc107XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFjY291bnRJdGVtV2l0aE5hbWVcbiAgICAgICAgYWNjb3VudE5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgYWRkcmVzcz17aXRlbS5hZGRyZXNzfVxuICAgICAgICBhdmF0YXJTaXplPXt0b2tlbi5zaXplTEd9XG4gICAgICAgIGtleT17aXRlbS5hZGRyZXNzfVxuICAgICAgICByaWdodEl0ZW09eyhcbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICBjaGVja2VkPXtwZW5kaW5nTWFwW2l0ZW0uYWRkcmVzc10gPT09IHVuZGVmaW5lZCA/IGlzRW5hYmxlZCA6IHBlbmRpbmdNYXBbaXRlbS5hZGRyZXNzXX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshYXV0aEluZm8uaXNBbGxvd2VkIHx8IHBlbmRpbmdNYXBbaXRlbS5hZGRyZXNzXSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgey4uLnsgb25DbGljayB9fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDggfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbYXV0aEluZm8uaXNBbGxvd2VkLCBhdXRoSW5mby5pc0FsbG93ZWRNYXAsIG9yaWdpbiwgcGVuZGluZ01hcCwgdG9rZW4uc2l6ZUxHXSk7XG5cbiAgY29uc3Qgc2VhcmNoRnVuYyA9IHVzZUNhbGxiYWNrKChpdGVtOiBBY2NvdW50SnNvbiwgc2VhcmNoVGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dExvd2VyQ2FzZSA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiAoXG4gICAgICBpdGVtLmFkZHJlc3MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKSB8fFxuICAgICAgKGl0ZW0ubmFtZVxuICAgICAgICA/IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHRMb3dlckNhc2UpXG4gICAgICAgIDogZmFsc2UpXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGVuZGluZ01hcCgocHJldk1hcCkgPT4ge1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhwcmV2TWFwKS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByZXZNYXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9KTtcbiAgfSwgW2F1dGhJbmZvXSk7XG5cbiAgY29uc3QgcmVuZGVyRW1wdHlMaXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlMaXN0XG4gICAgICAgIGVtcHR5TWVzc2FnZT17dCgnWW91ciBhY2NvdW50cyB3aWxsIGFwcGVhciBoZXJlLicpfVxuICAgICAgICBlbXB0eVRpdGxlPXt0KCdObyBhY2NvdW50IGZvdW5kJyl9XG4gICAgICAgIHBob3NwaG9ySWNvbj17TWFnbmlmeWluZ0dsYXNzfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT17YG1hbmFnZS13ZWJzaXRlLWFjY2Vzcy1kZXRhaWwgJHtjbGFzc05hbWV9YH0+XG4gICAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICAgIG9uQmFjaz17Z29CYWNrfVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246IChcbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e0dlYXJTaXh9XG4gICAgICAgICAgICAgICAgc2l6ZT0nbWQnXG4gICAgICAgICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgICAgICAgd2VpZ2h0PSdib2xkJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG9uT3BlbkFjdGlvbk1vZGFsXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgICAvLyB0aXRsZT17c2l0ZU5hbWUgfHwgYXV0aEluZm8uaWR9XG4gICAgICAgIHRpdGxlPSdBSUdFTlQnXG4gICAgICA+XG4gICAgICAgIDxTd0xpc3QuU2VjdGlvblxuICAgICAgICAgIGRpc3BsYXlSb3dcbiAgICAgICAgICBlbmFibGVTZWFyY2hJbnB1dFxuICAgICAgICAgIGxpc3Q9e2FjY291bnRJdGVtc31cbiAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJJdGVtfVxuICAgICAgICAgIHJlbmRlcldoZW5FbXB0eT17cmVuZGVyRW1wdHlMaXN0fVxuICAgICAgICAgIHJvd0dhcCA9IHsnOHB4J31cbiAgICAgICAgICBzZWFyY2hGdW5jdGlvbj17c2VhcmNoRnVuY31cbiAgICAgICAgICBzZWFyY2hNaW5DaGFyYWN0ZXJzQ291bnQ9ezJ9XG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI9e3Q8c3RyaW5nPignU2VhcmNoIGFjY291bnQnKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8QWN0aW9uTW9kYWxcbiAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBhY3Rpb24tbW9kYWxgfVxuICAgICAgICAgIGlkPXtBY3Rpb25Nb2RhbElkfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlQWN0aW9uTW9kYWx9XG4gICAgICAgICAgdGl0bGU9e3QoJ2RBcHAgY29uZmlndXJhdGlvbicpfVxuICAgICAgICAvPlxuICAgICAgPC9MYXlvdXQuV2l0aFN1YkhlYWRlck9ubHk+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gV3JhcHBlckNvbXBvbmVudCAocHJvcHM6IFdyYXBwZXJQcm9wcykge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHsgYWNjb3VudEF1dGhUeXBlLCBvcmlnaW4sIHNpdGVOYW1lIH0gPSBsb2NhdGlvbi5zdGF0ZSBhcyBNYW5hZ2VXZWJzaXRlQWNjZXNzRGV0YWlsUGFyYW07XG4gIGNvbnN0IGF1dGhJbmZvOiB1bmRlZmluZWQgfCBBdXRoVXJsSW5mbyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXR0aW5ncy5hdXRoVXJsc1tvcmlnaW5dKTtcbiAgY29uc3QgZ29CYWNrID0gdXNlRGVmYXVsdE5hdmlnYXRlKCkuZ29CYWNrO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhdXRoSW5mbykge1xuICAgICAgZ29CYWNrKCk7XG4gICAgfVxuICB9LCBbZ29CYWNrLCBhdXRoSW5mb10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshIWF1dGhJbmZvICYmIChcbiAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBhY2NvdW50QXV0aFR5cGU9e2FjY291bnRBdXRoVHlwZX1cbiAgICAgICAgICBhdXRoSW5mbz17YXV0aEluZm99XG4gICAgICAgICAgZ29CYWNrPXtnb0JhY2t9XG4gICAgICAgICAgb3JpZ2luPXtvcmlnaW59XG4gICAgICAgICAgc2l0ZU5hbWU9e3NpdGVOYW1lfVxuICAgICAgICAvPil9XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IE1hbmFnZVdlYnNpdGVBY2Nlc3NEZXRhaWwgPSBzdHlsZWQoV3JhcHBlckNvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgJy5hbnQtc3ctbGlzdC1zZWN0aW9uJzoge1xuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9LFxuXG4gICAgJyYubWFuYWdlLXdlYnNpdGUtYWNjZXNzLWRldGFpbCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JCZ0RlZmF1bHRcbiAgICB9LFxuXG4gICAgJy5hbnQtc3ctc2NyZWVuLWxheW91dC1ib2R5Jzoge1xuICAgICAgcGFkZGluZ1RvcDogdG9rZW4ucGFkZGluZ1NNXG4gICAgfSxcblxuICAgICcmLmFjdGlvbi1tb2RhbCc6IHtcbiAgICAgICcuX19hY3Rpb24taXRlbS5ibG9jayAuYW50LXNldHRpbmctaXRlbS1uYW1lJzoge1xuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JFcnJvclxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlV2Vic2l0ZUFjY2Vzc0RldGFpbDtcbiJdLCJuYW1lcyI6WyJBY2NvdW50SXRlbVdpdGhOYW1lIiwiRW1wdHlMaXN0IiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJBY3Rpb25Nb2RhbCIsInVzZURlZmF1bHROYXZpZ2F0ZSIsImNoYW5nZUF1dGhvcml6YXRpb24iLCJjaGFuZ2VBdXRob3JpemF0aW9uUGVyQWNjb3VudCIsImZvcmdldFNpdGUiLCJ0b2dnbGVBdXRob3JpemF0aW9uIiwidXBkYXRlQXV0aFVybHMiLCJJY29uIiwiTW9kYWxDb250ZXh0IiwiU3dpdGNoIiwiU3dMaXN0IiwiR2VhclNpeCIsIk1hZ25pZnlpbmdHbGFzcyIsIlBsdWdzIiwiUGx1Z3NDb25uZWN0ZWQiLCJTaGllbGRDaGVjayIsIlNoaWVsZFNsYXNoIiwiWCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTZWxlY3RvciIsInVzZUxvY2F0aW9uIiwic3R5bGVkIiwidXNlVGhlbWUiLCJpc0V0aGVyZXVtQWRkcmVzcyIsIkFjdGlvbk1vZGFsSWQiLCJDb21wb25lbnQiLCJhY2NvdW50QXV0aFR5cGUiLCJhdXRoSW5mbyIsImNsYXNzTmFtZSIsImdvQmFjayIsIm9yaWdpbiIsInNpdGVOYW1lIiwiYWNjb3VudHMiLCJzdGF0ZSIsImFjY291bnRTdGF0ZSIsInBlbmRpbmdNYXAiLCJzZXRQZW5kaW5nTWFwIiwiYWN0aXZlTW9kYWwiLCJpbmFjdGl2ZU1vZGFsIiwidCIsInRva2VuIiwiYWNjb3VudEl0ZW1zIiwiYWNjb3VudExpc3RXaXRob3V0QWxsIiwiZmlsdGVyIiwib3B0IiwiYWRkcmVzcyIsImFjYyIsIm9uT3BlbkFjdGlvbk1vZGFsIiwib25DbG9zZUFjdGlvbk1vZGFsIiwiYWN0aW9ucyIsImlzQWxsb3dlZCIsInJlc3VsdCIsImtleSIsImljb24iLCJpY29uQmFja2dyb3VuZENvbG9yIiwiY29sb3JFcnJvciIsImNvbG9yU3VjY2VzcyIsInRpdGxlIiwib25DbGljayIsInRoZW4iLCJsaXN0IiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJjb2xvcldhcm5pbmciLCJwdXNoIiwicmVuZGVySXRlbSIsIml0ZW0iLCJpc0VuYWJsZWQiLCJpc0FsbG93ZWRNYXAiLCJwcmV2TWFwIiwibG9nIiwiZmluYWxseSIsIm5ld01hcCIsIm5hbWUiLCJzaXplTEciLCJ1bmRlZmluZWQiLCJtYXJnaW5SaWdodCIsInNlYXJjaEZ1bmMiLCJzZWFyY2hUZXh0Iiwic2VhcmNoVGV4dExvd2VyQ2FzZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicmVuZGVyRW1wdHlMaXN0IiwiV3JhcHBlckNvbXBvbmVudCIsInByb3BzIiwibG9jYXRpb24iLCJzZXR0aW5ncyIsImF1dGhVcmxzIiwiTWFuYWdlV2Vic2l0ZUFjY2Vzc0RldGFpbCIsInRoZW1lIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JCZ0RlZmF1bHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1NNIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9