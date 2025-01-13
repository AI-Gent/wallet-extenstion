"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Home_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/index.tsx":
/*!*****************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalSearchTokenModalId": () => (/* binding */ GlobalSearchTokenModalId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_GlobalSearchTokenModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/GlobalSearchTokenModal */ "../extension-koni-ui/src/components/Modal/GlobalSearchTokenModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_screen_HomeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/screen/HomeContext */ "../extension-koni-ui/src/contexts/screen/HomeContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetMantaPayConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetMantaPayConfig */ "../extension-koni-ui/src/hooks/account/useGetMantaPayConfig.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useHandleMantaPaySync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useHandleMantaPaySync */ "../extension-koni-ui/src/hooks/account/useHandleMantaPaySync.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_home_useAccountBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/home/useAccountBalance */ "../extension-koni-ui/src/hooks/screen/home/useAccountBalance.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_home_useGetChainSlugsByAccountType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/home/useGetChainSlugsByAccountType */ "../extension-koni-ui/src/hooks/screen/home/useGetChainSlugsByAccountType.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_home_useTokenGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/home/useTokenGroup */ "../extension-koni-ui/src/hooks/screen/home/useTokenGroup.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

















const GlobalSearchTokenModalId = 'globalSearchToken';
function Component({
  className = ''
}) {
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__.ModalContext);
  const chainsByAccountType = (0,_subwallet_extension_koni_ui_hooks_screen_home_useGetChainSlugsByAccountType__WEBPACK_IMPORTED_MODULE_6__.useGetChainSlugsByAccountType)();
  const tokenGroupStructure = (0,_subwallet_extension_koni_ui_hooks_screen_home_useTokenGroup__WEBPACK_IMPORTED_MODULE_7__["default"])(chainsByAccountType);
  const accountBalance = (0,_subwallet_extension_koni_ui_hooks_screen_home_useAccountBalance__WEBPACK_IMPORTED_MODULE_5__["default"])(tokenGroupStructure.tokenGroupMap);
  const currentAccount = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(state => state.accountState.currentAccount);
  const mantaPayConfig = (0,_subwallet_extension_koni_ui_hooks_account_useGetMantaPayConfig__WEBPACK_IMPORTED_MODULE_3__.useGetMantaPayConfig)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address);
  const isZkModeSyncing = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(state => state.mantaPay.isSyncing);
  const handleMantaPaySync = (0,_subwallet_extension_koni_ui_hooks_account_useHandleMantaPaySync__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const onOpenGlobalSearchToken = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(() => {
    activeModal(GlobalSearchTokenModalId);
  }, [activeModal]);
  const onCloseGlobalSearchToken = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(() => {
    inactiveModal(GlobalSearchTokenModalId);
  }, [inactiveModal]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (mantaPayConfig && mantaPayConfig.enabled && !mantaPayConfig.isInitialSync && !isZkModeSyncing) {
      handleMantaPaySync(mantaPayConfig.address);
    }
  }, [handleMantaPaySync, isZkModeSyncing, mantaPayConfig]);
  console.log('Token Group Map:', tokenGroupStructure.tokenGroupMap);
  console.log('Token Balance Map:', accountBalance.tokenBalanceMap);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_contexts_screen_HomeContext__WEBPACK_IMPORTED_MODULE_2__.HomeContext.Provider, {
      value: {
        tokenGroupStructure,
        accountBalance
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: `home home-container ${className}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Home, {
          onClickSearchIcon: onOpenGlobalSearchToken,
          showFilterIcon: true,
          showSearchIcon: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_12__.Outlet, {})
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components_Modal_GlobalSearchTokenModal__WEBPACK_IMPORTED_MODULE_1__.GlobalSearchTokenModal, {
      id: GlobalSearchTokenModalId,
      onCancel: onCloseGlobalSearchToken,
      sortedTokenSlugs: tokenGroupStructure.sortedTokenSlugs,
      tokenBalanceMap: accountBalance.tokenBalanceMap
    })]
  });
}
const Home = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(Component).withConfig({
  displayName: "Home",
  componentId: "sc-pxzema-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    height: '100%'
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0hvbWVfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFaUU7QUFDNkM7QUFDdkI7QUFDZ0I7QUFDRjtBQUNKO0FBQzRCO0FBQ3BDO0FBR3RDO0FBQ2U7QUFDeEI7QUFDSjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBSWhDLE1BQU1nQix3QkFBd0IsR0FBRyxtQkFBbUI7QUFFM0QsU0FBU0MsU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEUsTUFBTTtJQUFFQyxXQUFXO0lBQUVDO0VBQWMsQ0FBQyxHQUFHVCxpREFBVSxDQUFDSCw4REFBWSxDQUFDO0VBQy9ELE1BQU1hLG1CQUFtQixHQUFHZiwySUFBNkIsRUFBRTtFQUMzRCxNQUFNZ0IsbUJBQW1CLEdBQUdmLHdHQUFhLENBQUNjLG1CQUFtQixDQUFDO0VBQzlELE1BQU1FLGNBQWMsR0FBR2xCLDRHQUFpQixDQUFDaUIsbUJBQW1CLENBQUNFLGFBQWEsQ0FBQztFQUMzRSxNQUFNQyxjQUFjLEdBQUdaLHdEQUFXLENBQUVhLEtBQWdCLElBQUtBLEtBQUssQ0FBQ0MsWUFBWSxDQUFDRixjQUFjLENBQUM7RUFFM0YsTUFBTUcsY0FBYyxHQUFHekIscUhBQW9CLENBQUNzQixjQUFjLGFBQWRBLGNBQWMsdUJBQWRBLGNBQWMsQ0FBRUksT0FBTyxDQUFDO0VBQ3BFLE1BQU1DLGVBQWUsR0FBR2pCLHdEQUFXLENBQUVhLEtBQWdCLElBQUtBLEtBQUssQ0FBQ0ssUUFBUSxDQUFDQyxTQUFTLENBQUM7RUFDbkYsTUFBTUMsa0JBQWtCLEdBQUc3Qiw0R0FBcUIsRUFBRTtFQUVsRCxNQUFNOEIsdUJBQXVCLEdBQUd4QixrREFBVyxDQUFDLE1BQU07SUFDaERTLFdBQVcsQ0FBQ0gsd0JBQXdCLENBQUM7RUFDdkMsQ0FBQyxFQUFFLENBQUNHLFdBQVcsQ0FBQyxDQUFDO0VBRWpCLE1BQU1nQix3QkFBd0IsR0FBR3pCLGtEQUFXLENBQUMsTUFBTTtJQUNqRFUsYUFBYSxDQUFDSix3QkFBd0IsQ0FBQztFQUN6QyxDQUFDLEVBQUUsQ0FBQ0ksYUFBYSxDQUFDLENBQUM7RUFFbkJSLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlnQixjQUFjLElBQUlBLGNBQWMsQ0FBQ1EsT0FBTyxJQUFJLENBQUNSLGNBQWMsQ0FBQ1MsYUFBYSxJQUFJLENBQUNQLGVBQWUsRUFBRTtNQUNqR0csa0JBQWtCLENBQUNMLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDO0lBQzVDO0VBQ0YsQ0FBQyxFQUFFLENBQUNJLGtCQUFrQixFQUFFSCxlQUFlLEVBQUVGLGNBQWMsQ0FBQyxDQUFDO0VBQ3pEVSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRWpCLG1CQUFtQixDQUFDRSxhQUFhLENBQUM7RUFDbEVjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFaEIsY0FBYyxDQUFDaUIsZUFBZSxDQUFDO0VBRWpFLG9CQUNFO0lBQUEsd0JBQ0Usd0RBQUMsMEdBQW9CO01BQUMsS0FBSyxFQUFFO1FBQzNCbEIsbUJBQW1CO1FBQ25CQztNQUNGLENBQUU7TUFBQSx1QkFFQTtRQUFLLFNBQVMsRUFBRyx1QkFBc0JMLFNBQVUsRUFBRTtRQUFBLHVCQUNqRCx3REFBQyxnRkFBVztVQUNWLGlCQUFpQixFQUFFZ0IsdUJBQXdCO1VBQzNDLGNBQWM7VUFDZCxjQUFjO1VBQUEsdUJBRWQsd0RBQUMsaURBQU07UUFBRztNQUNFO0lBQ1YsRUFDZSxlQUV2Qix3REFBQyx3SEFBc0I7TUFDckIsRUFBRSxFQUFFbEIsd0JBQXlCO01BQzdCLFFBQVEsRUFBRW1CLHdCQUF5QjtNQUNuQyxnQkFBZ0IsRUFBRWIsbUJBQW1CLENBQUNtQixnQkFBaUI7TUFDdkQsZUFBZSxFQUFFbEIsY0FBYyxDQUFDaUI7SUFBZ0IsRUFDaEQ7RUFBQSxFQUNEO0FBRVA7QUFFQSxNQUFNRSxJQUFJLEdBQUczQiw4REFBTSxDQUFDRSxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBUSxDQUFDO0VBQUUwQixLQUFLLEVBQUU7SUFBRUM7RUFBTTtBQUFTLENBQUMsS0FBSztFQUNyRSxPQUFRO0lBQ05DLE1BQU0sRUFBRTtFQUNWLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZUgsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRm5CO0FBQ0E7O0FBR2dDO0FBQ047QUFFbkIsTUFBTXhDLFdBQVcsZ0JBQUdPLDBEQUFtQixDQUFrQjtFQUM5RGMsY0FBYyxFQUFFO0lBQ2RpQixlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ25CUSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDeEJDLGdCQUFnQixFQUFFO01BQ2hCQyxjQUFjLEVBQUUsSUFBSUosb0RBQUksQ0FBQyxDQUFDLENBQUM7TUFDM0JLLGlCQUFpQixFQUFFLElBQUlMLG9EQUFJLENBQUMsQ0FBQyxDQUFDO01BQzlCTSxNQUFNLEVBQUU7UUFDTkMsS0FBSyxFQUFFLElBQUlQLG9EQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCUSxPQUFPLEVBQUUsSUFBSVIsb0RBQUksQ0FBQyxDQUFDO01BQ3JCO0lBQ0Y7RUFDRixDQUFDO0VBQ0R4QixtQkFBbUIsRUFBRTtJQUNuQkUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNqQitCLGlCQUFpQixFQUFFLEVBQUU7SUFDckJkLGdCQUFnQixFQUFFO0VBQ3BCO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvY29udGV4dHMvc2NyZWVuL0hvbWVDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24tdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IEdsb2JhbFNlYXJjaFRva2VuTW9kYWwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvTW9kYWwvR2xvYmFsU2VhcmNoVG9rZW5Nb2RhbCc7XG5pbXBvcnQgeyBIb21lQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29udGV4dHMvc2NyZWVuL0hvbWVDb250ZXh0JztcbmltcG9ydCB7IHVzZUdldE1hbnRhUGF5Q29uZmlnIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9hY2NvdW50L3VzZUdldE1hbnRhUGF5Q29uZmlnJztcbmltcG9ydCB1c2VIYW5kbGVNYW50YVBheVN5bmMgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9hY2NvdW50L3VzZUhhbmRsZU1hbnRhUGF5U3luYyc7XG5pbXBvcnQgdXNlQWNjb3VudEJhbGFuY2UgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9zY3JlZW4vaG9tZS91c2VBY2NvdW50QmFsYW5jZSc7XG5pbXBvcnQgeyB1c2VHZXRDaGFpblNsdWdzQnlBY2NvdW50VHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvc2NyZWVuL2hvbWUvdXNlR2V0Q2hhaW5TbHVnc0J5QWNjb3VudFR5cGUnO1xuaW1wb3J0IHVzZVRva2VuR3JvdXAgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9zY3JlZW4vaG9tZS91c2VUb2tlbkdyb3VwJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvc3RvcmVzJztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHM7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTZWFyY2hUb2tlbk1vZGFsSWQgPSAnZ2xvYmFsU2VhcmNoVG9rZW4nO1xuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UHJvcHM+IHtcbiAgY29uc3QgeyBhY3RpdmVNb2RhbCwgaW5hY3RpdmVNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuICBjb25zdCBjaGFpbnNCeUFjY291bnRUeXBlID0gdXNlR2V0Q2hhaW5TbHVnc0J5QWNjb3VudFR5cGUoKTtcbiAgY29uc3QgdG9rZW5Hcm91cFN0cnVjdHVyZSA9IHVzZVRva2VuR3JvdXAoY2hhaW5zQnlBY2NvdW50VHlwZSk7XG4gIGNvbnN0IGFjY291bnRCYWxhbmNlID0gdXNlQWNjb3VudEJhbGFuY2UodG9rZW5Hcm91cFN0cnVjdHVyZS50b2tlbkdyb3VwTWFwKTtcbiAgY29uc3QgY3VycmVudEFjY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYWNjb3VudFN0YXRlLmN1cnJlbnRBY2NvdW50KTtcblxuICBjb25zdCBtYW50YVBheUNvbmZpZyA9IHVzZUdldE1hbnRhUGF5Q29uZmlnKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzKTtcbiAgY29uc3QgaXNaa01vZGVTeW5jaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLm1hbnRhUGF5LmlzU3luY2luZyk7XG4gIGNvbnN0IGhhbmRsZU1hbnRhUGF5U3luYyA9IHVzZUhhbmRsZU1hbnRhUGF5U3luYygpO1xuXG4gIGNvbnN0IG9uT3Blbkdsb2JhbFNlYXJjaFRva2VuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGFjdGl2ZU1vZGFsKEdsb2JhbFNlYXJjaFRva2VuTW9kYWxJZCk7XG4gIH0sIFthY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IG9uQ2xvc2VHbG9iYWxTZWFyY2hUb2tlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpbmFjdGl2ZU1vZGFsKEdsb2JhbFNlYXJjaFRva2VuTW9kYWxJZCk7XG4gIH0sIFtpbmFjdGl2ZU1vZGFsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWFudGFQYXlDb25maWcgJiYgbWFudGFQYXlDb25maWcuZW5hYmxlZCAmJiAhbWFudGFQYXlDb25maWcuaXNJbml0aWFsU3luYyAmJiAhaXNaa01vZGVTeW5jaW5nKSB7XG4gICAgICBoYW5kbGVNYW50YVBheVN5bmMobWFudGFQYXlDb25maWcuYWRkcmVzcyk7XG4gICAgfVxuICB9LCBbaGFuZGxlTWFudGFQYXlTeW5jLCBpc1prTW9kZVN5bmNpbmcsIG1hbnRhUGF5Q29uZmlnXSk7XG4gIGNvbnNvbGUubG9nKCdUb2tlbiBHcm91cCBNYXA6JywgdG9rZW5Hcm91cFN0cnVjdHVyZS50b2tlbkdyb3VwTWFwKTtcbiAgY29uc29sZS5sb2coJ1Rva2VuIEJhbGFuY2UgTWFwOicsIGFjY291bnRCYWxhbmNlLnRva2VuQmFsYW5jZU1hcCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhvbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgIHRva2VuR3JvdXBTdHJ1Y3R1cmUsXG4gICAgICAgIGFjY291bnRCYWxhbmNlXG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhvbWUgaG9tZS1jb250YWluZXIgJHtjbGFzc05hbWV9YH0+XG4gICAgICAgICAgPExheW91dC5Ib21lXG4gICAgICAgICAgICBvbkNsaWNrU2VhcmNoSWNvbj17b25PcGVuR2xvYmFsU2VhcmNoVG9rZW59XG4gICAgICAgICAgICBzaG93RmlsdGVySWNvblxuICAgICAgICAgICAgc2hvd1NlYXJjaEljb25cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPC9MYXlvdXQuSG9tZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0hvbWVDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgICA8R2xvYmFsU2VhcmNoVG9rZW5Nb2RhbFxuICAgICAgICBpZD17R2xvYmFsU2VhcmNoVG9rZW5Nb2RhbElkfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZUdsb2JhbFNlYXJjaFRva2VufVxuICAgICAgICBzb3J0ZWRUb2tlblNsdWdzPXt0b2tlbkdyb3VwU3RydWN0dXJlLnNvcnRlZFRva2VuU2x1Z3N9XG4gICAgICAgIHRva2VuQmFsYW5jZU1hcD17YWNjb3VudEJhbGFuY2UudG9rZW5CYWxhbmNlTWFwfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgSG9tZSA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgIGhlaWdodDogJzEwMCUnXG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24gYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgSG9tZUNvbnRleHRUeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcy9jb250ZXh0JztcbmltcG9ydCBCaWdOIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgSG9tZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEhvbWVDb250ZXh0VHlwZT4oe1xuICBhY2NvdW50QmFsYW5jZToge1xuICAgIHRva2VuQmFsYW5jZU1hcDoge30sXG4gICAgdG9rZW5Hcm91cEJhbGFuY2VNYXA6IHt9LFxuICAgIHRvdGFsQmFsYW5jZUluZm86IHtcbiAgICAgIGNvbnZlcnRlZFZhbHVlOiBuZXcgQmlnTigwKSxcbiAgICAgIGNvbnZlcnRlZDI0aFZhbHVlOiBuZXcgQmlnTigwKSxcbiAgICAgIGNoYW5nZToge1xuICAgICAgICB2YWx1ZTogbmV3IEJpZ04oMCksXG4gICAgICAgIHBlcmNlbnQ6IG5ldyBCaWdOKDApXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0b2tlbkdyb3VwU3RydWN0dXJlOiB7XG4gICAgdG9rZW5Hcm91cE1hcDoge30sXG4gICAgc29ydGVkVG9rZW5Hcm91cHM6IFtdLFxuICAgIHNvcnRlZFRva2VuU2x1Z3M6IFtdXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIkdsb2JhbFNlYXJjaFRva2VuTW9kYWwiLCJIb21lQ29udGV4dCIsInVzZUdldE1hbnRhUGF5Q29uZmlnIiwidXNlSGFuZGxlTWFudGFQYXlTeW5jIiwidXNlQWNjb3VudEJhbGFuY2UiLCJ1c2VHZXRDaGFpblNsdWdzQnlBY2NvdW50VHlwZSIsInVzZVRva2VuR3JvdXAiLCJNb2RhbENvbnRleHQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwiT3V0bGV0Iiwic3R5bGVkIiwiR2xvYmFsU2VhcmNoVG9rZW5Nb2RhbElkIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwiYWN0aXZlTW9kYWwiLCJpbmFjdGl2ZU1vZGFsIiwiY2hhaW5zQnlBY2NvdW50VHlwZSIsInRva2VuR3JvdXBTdHJ1Y3R1cmUiLCJhY2NvdW50QmFsYW5jZSIsInRva2VuR3JvdXBNYXAiLCJjdXJyZW50QWNjb3VudCIsInN0YXRlIiwiYWNjb3VudFN0YXRlIiwibWFudGFQYXlDb25maWciLCJhZGRyZXNzIiwiaXNaa01vZGVTeW5jaW5nIiwibWFudGFQYXkiLCJpc1N5bmNpbmciLCJoYW5kbGVNYW50YVBheVN5bmMiLCJvbk9wZW5HbG9iYWxTZWFyY2hUb2tlbiIsIm9uQ2xvc2VHbG9iYWxTZWFyY2hUb2tlbiIsImVuYWJsZWQiLCJpc0luaXRpYWxTeW5jIiwiY29uc29sZSIsImxvZyIsInRva2VuQmFsYW5jZU1hcCIsInNvcnRlZFRva2VuU2x1Z3MiLCJIb21lIiwidGhlbWUiLCJ0b2tlbiIsImhlaWdodCIsIkJpZ04iLCJjcmVhdGVDb250ZXh0IiwidG9rZW5Hcm91cEJhbGFuY2VNYXAiLCJ0b3RhbEJhbGFuY2VJbmZvIiwiY29udmVydGVkVmFsdWUiLCJjb252ZXJ0ZWQyNGhWYWx1ZSIsImNoYW5nZSIsInZhbHVlIiwicGVyY2VudCIsInNvcnRlZFRva2VuR3JvdXBzIl0sInNvdXJjZVJvb3QiOiIifQ==