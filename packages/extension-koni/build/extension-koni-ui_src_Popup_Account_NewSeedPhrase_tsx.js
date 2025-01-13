"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Account_NewSeedPhrase_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/NewSeedPhrase.tsx":
/*!****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/NewSeedPhrase.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0
















const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_11__["default"],
  weight: "fill"
});
const Component = ({
  className
}) => {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useAutoNavigateToCreatePassword)();
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const notify = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useNotification)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useDefaultNavigate)();
  const {
    activeModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__.ModalContext);
  const checkUnlock = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnlockChecker)();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useCompleteCreateAccount)();
  const accountName = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetDefaultAccountName)();
  const isPopup = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useIsPopup)();
  const {
    accounts,
    hasMasterPassword
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.accountState);
  const isOpenWindowRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(false);
  const [typesStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTED_ACCOUNT_TYPE, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ACCOUNT_TYPES);
  const [preventModalStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.SEED_PREVENT_MODAL, false);
  const [preventModal] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(preventModalStorage);
  const [accountTypes] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(typesStorage);
  const [seedPhrase, setSeedPhrase] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const noAccount = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.isNoAccount)(accounts), [accounts]);
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    navigate(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ROUTER_PATH);
    if (!preventModal) {
      if (!noAccount) {
        activeModal(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.NEW_SEED_MODAL);
      }
    }
  }, [preventModal, navigate, noAccount, activeModal]);
  const _onCreate = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    if (!seedPhrase) {
      return;
    }
    checkUnlock().then(() => {
      setLoading(true);
      setTimeout(() => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.createAccountSuriV2)({
          name: accountName,
          suri: seedPhrase,
          types: accountTypes,
          isAllowed: true
        }).then(() => {
          onComplete();
        }).catch(error => {
          notify({
            message: error.message,
            type: 'error'
          });
        }).finally(() => {
          setLoading(false);
        });
      }, 500);
    }).catch(() => {
      // User cancel unlock
    });
  }, [seedPhrase, checkUnlock, accountName, accountTypes, onComplete, notify]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.createSeedV2)(undefined, undefined, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ACCOUNT_TYPES).then(response => {
      const phrase = response.seed;
      setSeedPhrase(phrase);
    }).catch(e => {
      console.error(e);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (isPopup && (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.isFirefox)() && hasMasterPassword && !isOpenWindowRef.current) {
      isOpenWindowRef.current = true;
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.windowOpen)({
        allowedPath: '/accounts/new-seed-phrase'
      }).then(window.close).catch(console.log);
    }
  }, [isPopup, hasMasterPassword]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className),
    resolve: new Promise(resolve => !!seedPhrase && resolve(true)),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      rightFooterButton: {
        children: t('I have kept it somewhere safe'),
        icon: FooterIcon,
        onClick: _onCreate,
        disabled: !seedPhrase,
        loading: loading
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
        onClick: goHome
      }],
      title: t('Your seed phrase'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: 'container',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "description",
          children: t('Keep your recovery phrase in a safe place and never disclose it. Anyone with this phrase can take control of your assets.')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.WordPhrase, {
          enableDownload: true,
          seedPhrase: seedPhrase
        })]
      })
    })
  });
};
const NewSeedPhrase = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(Component).withConfig({
  displayName: "NewSeedPhrase",
  componentId: "sc-1kgbkpw-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.container': {
      padding: token.padding,
      textAlign: 'center'
    },
    '.description': {
      padding: `0 ${token.padding}px`,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      marginBottom: token.margin
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewSeedPhrase);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0FjY291bnRfTmV3U2VlZFBocmFzZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFcUc7QUFDMEQ7QUFDNkQ7QUFDckg7QUFHM0I7QUFDbkI7QUFDN0I7QUFDaUI7QUFDZ0Q7QUFDbkQ7QUFDSztBQUNSO0FBQ087QUFBQTtBQUFBO0FBSTlDLE1BQU1xQyxVQUFVLGdCQUNkLHVEQUFDLDREQUFJO0VBQ0gsWUFBWSxFQUFFWix1REFBWTtFQUMxQixNQUFNLEVBQUM7QUFBTSxFQUVoQjtBQUVELE1BQU1hLFNBQTBCLEdBQUcsQ0FBQztFQUFFQztBQUFpQixDQUFDLEtBQUs7RUFDM0Q5QixtR0FBK0IsRUFBRTtFQUNqQyxNQUFNO0lBQUUrQjtFQUFFLENBQUMsR0FBR3pCLGtGQUFjLEVBQUU7RUFDOUIsTUFBTTBCLE1BQU0sR0FBRzNCLG1GQUFlLEVBQUU7RUFDaEMsTUFBTTRCLFFBQVEsR0FBR1IsOERBQVcsRUFBRTtFQUU5QixNQUFNO0lBQUVTO0VBQU8sQ0FBQyxHQUFHaEMsc0ZBQWtCLEVBQUU7RUFDdkMsTUFBTTtJQUFFaUM7RUFBWSxDQUFDLEdBQUdoQixpREFBVSxDQUFDTCw4REFBWSxDQUFDO0VBQ2hELE1BQU1zQixXQUFXLEdBQUc3QixvRkFBZ0IsRUFBRTtFQUV0QyxNQUFNOEIsVUFBVSxHQUFHcEMsNEZBQXdCLEVBQUU7RUFDN0MsTUFBTXFDLFdBQVcsR0FBR25DLDRGQUF3QixFQUFFO0VBQzlDLE1BQU1vQyxPQUFPLEdBQUduQyw4RUFBVSxFQUFFO0VBRTVCLE1BQU07SUFBRW9DLFFBQVE7SUFBRUM7RUFBa0IsQ0FBQyxHQUFHakIsd0RBQVcsQ0FBRWtCLEtBQWdCLElBQUtBLEtBQUssQ0FBQ0MsWUFBWSxDQUFDO0VBRTdGLE1BQU1DLGVBQWUsR0FBR3RCLDZDQUFNLENBQUMsS0FBSyxDQUFDO0VBRXJDLE1BQU0sQ0FBQ3VCLFlBQVks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QTtJQUNFO0VBQ21CLEVBQ2Y7QUFFbEIsQ0FBQztBQUVELE1BQU1tQyxhQUFhLEdBQUcxRCw4REFBTSxDQUFDRyxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBUSxDQUFDO0VBQUV3RCxLQUFLLEVBQUU7SUFBRUM7RUFBTTtBQUFTLENBQUMsS0FBSztFQUM5RSxPQUFPO0lBQ0wsWUFBWSxFQUFFO01BQ1pDLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPO01BQ3RCQyxTQUFTLEVBQUU7SUFDYixDQUFDO0lBRUQsY0FBYyxFQUFFO01BQ2RELE9BQU8sRUFBRyxLQUFJRCxLQUFLLENBQUNDLE9BQVEsSUFBRztNQUMvQkUsUUFBUSxFQUFFSCxLQUFLLENBQUNJLGdCQUFnQjtNQUNoQ0MsVUFBVSxFQUFFTCxLQUFLLENBQUNNLGtCQUFrQjtNQUNwQ0MsS0FBSyxFQUFFUCxLQUFLLENBQUNRLG9CQUFvQjtNQUNqQ0MsWUFBWSxFQUFFVCxLQUFLLENBQUNVO0lBQ3RCO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlWixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvQWNjb3VudC9OZXdTZWVkUGhyYXNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgQ2xvc2VJY29uLCBMYXlvdXQsIFBhZ2VXcmFwcGVyLCBXb3JkUGhyYXNlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IERFRkFVTFRfQUNDT1VOVF9UWVBFUywgREVGQVVMVF9ST1VURVJfUEFUSCwgTkVXX1NFRURfTU9EQUwsIFNFRURfUFJFVkVOVF9NT0RBTCwgU0VMRUNURURfQUNDT1VOVF9UWVBFIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCwgdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50LCB1c2VEZWZhdWx0TmF2aWdhdGUsIHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSwgdXNlSXNQb3B1cCwgdXNlTm90aWZpY2F0aW9uLCB1c2VUcmFuc2xhdGlvbiwgdXNlVW5sb2NrQ2hlY2tlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgY3JlYXRlQWNjb3VudFN1cmlWMiwgY3JlYXRlU2VlZFYyLCB3aW5kb3dPcGVuIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgaXNGaXJlZm94LCBpc05vQWNjb3VudCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgSWNvbiwgTW9kYWxDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDaGVja0NpcmNsZSB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICd1c2Vob29rcy10cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBGb290ZXJJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17Q2hlY2tDaXJjbGV9XG4gICAgd2VpZ2h0PSdmaWxsJ1xuICAvPlxuKTtcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUgfTogUHJvcHMpID0+IHtcbiAgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IG5vdGlmeSA9IHVzZU5vdGlmaWNhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgY29uc3QgeyBnb0hvbWUgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuICBjb25zdCB7IGFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG4gIGNvbnN0IGNoZWNrVW5sb2NrID0gdXNlVW5sb2NrQ2hlY2tlcigpO1xuXG4gIGNvbnN0IG9uQ29tcGxldGUgPSB1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQoKTtcbiAgY29uc3QgYWNjb3VudE5hbWUgPSB1c2VHZXREZWZhdWx0QWNjb3VudE5hbWUoKTtcbiAgY29uc3QgaXNQb3B1cCA9IHVzZUlzUG9wdXAoKTtcblxuICBjb25zdCB7IGFjY291bnRzLCBoYXNNYXN0ZXJQYXNzd29yZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZSk7XG5cbiAgY29uc3QgaXNPcGVuV2luZG93UmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBbdHlwZXNTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZShTRUxFQ1RFRF9BQ0NPVU5UX1RZUEUsIERFRkFVTFRfQUNDT1VOVF9UWVBFUyk7XG4gIGNvbnN0IFtwcmV2ZW50TW9kYWxTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZShTRUVEX1BSRVZFTlRfTU9EQUwsIGZhbHNlKTtcbiAgY29uc3QgW3ByZXZlbnRNb2RhbF0gPSB1c2VTdGF0ZShwcmV2ZW50TW9kYWxTdG9yYWdlKTtcblxuICBjb25zdCBbYWNjb3VudFR5cGVzXSA9IHVzZVN0YXRlKHR5cGVzU3RvcmFnZSk7XG5cbiAgY29uc3QgW3NlZWRQaHJhc2UsIHNldFNlZWRQaHJhc2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgbm9BY2NvdW50ID0gdXNlTWVtbygoKSA9PiBpc05vQWNjb3VudChhY2NvdW50cyksIFthY2NvdW50c10pO1xuXG4gIGNvbnN0IG9uQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZShERUZBVUxUX1JPVVRFUl9QQVRIKTtcblxuICAgIGlmICghcHJldmVudE1vZGFsKSB7XG4gICAgICBpZiAoIW5vQWNjb3VudCkge1xuICAgICAgICBhY3RpdmVNb2RhbChORVdfU0VFRF9NT0RBTCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbcHJldmVudE1vZGFsLCBuYXZpZ2F0ZSwgbm9BY2NvdW50LCBhY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IF9vbkNyZWF0ZSA9IHVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAoIXNlZWRQaHJhc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaGVja1VubG9jaygpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjcmVhdGVBY2NvdW50U3VyaVYyKHtcbiAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICBzdXJpOiBzZWVkUGhyYXNlLFxuICAgICAgICAgIHR5cGVzOiBhY2NvdW50VHlwZXMsXG4gICAgICAgICAgaXNBbGxvd2VkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIG5vdGlmeSh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9LCA1MDApO1xuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIC8vIFVzZXIgY2FuY2VsIHVubG9ja1xuICAgIH0pO1xuICB9LCBbc2VlZFBocmFzZSwgY2hlY2tVbmxvY2ssIGFjY291bnROYW1lLCBhY2NvdW50VHlwZXMsIG9uQ29tcGxldGUsIG5vdGlmeV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3JlYXRlU2VlZFYyKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBERUZBVUxUX0FDQ09VTlRfVFlQRVMpXG4gICAgICAudGhlbigocmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgcGhyYXNlID0gcmVzcG9uc2Uuc2VlZDtcblxuICAgICAgICBzZXRTZWVkUGhyYXNlKHBocmFzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlOiBFcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1BvcHVwICYmIGlzRmlyZWZveCgpICYmIGhhc01hc3RlclBhc3N3b3JkICYmICFpc09wZW5XaW5kb3dSZWYuY3VycmVudCkge1xuICAgICAgaXNPcGVuV2luZG93UmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgd2luZG93T3Blbih7IGFsbG93ZWRQYXRoOiAnL2FjY291bnRzL25ldy1zZWVkLXBocmFzZScgfSkudGhlbih3aW5kb3cuY2xvc2UpLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9XG4gIH0sIFtpc1BvcHVwLCBoYXNNYXN0ZXJQYXNzd29yZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9XG4gICAgICByZXNvbHZlPXtuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gISFzZWVkUGhyYXNlICYmIHJlc29sdmUodHJ1ZSkpfVxuICAgID5cbiAgICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgICAgb25CYWNrPXtvbkJhY2t9XG4gICAgICAgIHJpZ2h0Rm9vdGVyQnV0dG9uPXt7XG4gICAgICAgICAgY2hpbGRyZW46IHQoJ0kgaGF2ZSBrZXB0IGl0IHNvbWV3aGVyZSBzYWZlJyksXG4gICAgICAgICAgaWNvbjogRm9vdGVySWNvbixcbiAgICAgICAgICBvbkNsaWNrOiBfb25DcmVhdGUsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFzZWVkUGhyYXNlLFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgICAgfX1cbiAgICAgICAgc3ViSGVhZGVySWNvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiA8Q2xvc2VJY29uIC8+LFxuICAgICAgICAgICAgb25DbGljazogZ29Ib21lXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgICB0aXRsZT17dCgnWW91ciBzZWVkIHBocmFzZScpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRhaW5lcid9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+XG4gICAgICAgICAgICB7dCgnS2VlcCB5b3VyIHJlY292ZXJ5IHBocmFzZSBpbiBhIHNhZmUgcGxhY2UgYW5kIG5ldmVyIGRpc2Nsb3NlIGl0LiBBbnlvbmUgd2l0aCB0aGlzIHBocmFzZSBjYW4gdGFrZSBjb250cm9sIG9mIHlvdXIgYXNzZXRzLicpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxXb3JkUGhyYXNlXG4gICAgICAgICAgICBlbmFibGVEb3dubG9hZD17dHJ1ZX1cbiAgICAgICAgICAgIHNlZWRQaHJhc2U9e3NlZWRQaHJhc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgTmV3U2VlZFBocmFzZSA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5jb250YWluZXInOiB7XG4gICAgICBwYWRkaW5nOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5cbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3U2VlZFBocmFzZTtcbiJdLCJuYW1lcyI6WyJDbG9zZUljb24iLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIldvcmRQaHJhc2UiLCJERUZBVUxUX0FDQ09VTlRfVFlQRVMiLCJERUZBVUxUX1JPVVRFUl9QQVRIIiwiTkVXX1NFRURfTU9EQUwiLCJTRUVEX1BSRVZFTlRfTU9EQUwiLCJTRUxFQ1RFRF9BQ0NPVU5UX1RZUEUiLCJ1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkIiwidXNlQ29tcGxldGVDcmVhdGVBY2NvdW50IiwidXNlRGVmYXVsdE5hdmlnYXRlIiwidXNlR2V0RGVmYXVsdEFjY291bnROYW1lIiwidXNlSXNQb3B1cCIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVRyYW5zbGF0aW9uIiwidXNlVW5sb2NrQ2hlY2tlciIsImNyZWF0ZUFjY291bnRTdXJpVjIiLCJjcmVhdGVTZWVkVjIiLCJ3aW5kb3dPcGVuIiwiaXNGaXJlZm94IiwiaXNOb0FjY291bnQiLCJJY29uIiwiTW9kYWxDb250ZXh0IiwiQ04iLCJDaGVja0NpcmNsZSIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsInVzZUxvY2FsU3RvcmFnZSIsIkZvb3Rlckljb24iLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ0Iiwibm90aWZ5IiwibmF2aWdhdGUiLCJnb0hvbWUiLCJhY3RpdmVNb2RhbCIsImNoZWNrVW5sb2NrIiwib25Db21wbGV0ZSIsImFjY291bnROYW1lIiwiaXNQb3B1cCIsImFjY291bnRzIiwiaGFzTWFzdGVyUGFzc3dvcmQiLCJzdGF0ZSIsImFjY291bnRTdGF0ZSIsImlzT3BlbldpbmRvd1JlZiIsInR5cGVzU3RvcmFnZSIsInByZXZlbnRNb2RhbFN0b3JhZ2UiLCJwcmV2ZW50TW9kYWwiLCJhY2NvdW50VHlwZXMiLCJzZWVkUGhyYXNlIiwic2V0U2VlZFBocmFzZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibm9BY2NvdW50Iiwib25CYWNrIiwiX29uQ3JlYXRlIiwidGhlbiIsInNldFRpbWVvdXQiLCJuYW1lIiwic3VyaSIsInR5cGVzIiwiaXNBbGxvd2VkIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJ0eXBlIiwiZmluYWxseSIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwicGhyYXNlIiwic2VlZCIsImUiLCJjb25zb2xlIiwiY3VycmVudCIsImFsbG93ZWRQYXRoIiwid2luZG93IiwiY2xvc2UiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoaWxkcmVuIiwiaWNvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIk5ld1NlZWRQaHJhc2UiLCJ0aGVtZSIsInRva2VuIiwicGFkZGluZyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZm9udFNpemVIZWFkaW5nNiIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzYiLCJjb2xvciIsImNvbG9yVGV4dERlc2NyaXB0aW9uIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==