"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Account_ConnectQrSigner_ConnectKeystone_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/ConnectQrSigner/ConnectKeystone.tsx":
/*!**********************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/ConnectQrSigner/ConnectKeystone.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_assets_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/assets/logo */ "../extension-koni-ui/src/assets/logo/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Account_ConnectQrSigner_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Account/ConnectQrSigner/index */ "../extension-koni-ui/src/Popup/Account/ConnectQrSigner/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0







const Component = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_Popup_Account_ConnectQrSigner_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    deviceName: t('Keystone'),
    instructionUrl: 'https://docs.subwallet.app/main/extension-user-guide/account-management/connect-keystone-device',
    logoUrl: _subwallet_extension_koni_ui_assets_logo__WEBPACK_IMPORTED_MODULE_0__["default"].keystone,
    subTitle: t('Open "Software Wallet" section on your Keystone and choose SubWallet'),
    title: t('Connect Keystone device')
  });
};
const ConnectKeystone = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Component).withConfig({
  displayName: "ConnectKeystone",
  componentId: "sc-khixlu-0"
})(({
  theme: {
    token
  }
}) => {
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectKeystone);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Account/ConnectQrSigner/index.tsx":
/*!************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/ConnectQrSigner/index.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/CloseIcon */ "../extension-koni-ui/src/components/Icon/CloseIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Logo_DualLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Logo/DualLogo */ "../extension-koni-ui/src/components/Logo/DualLogo.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Qr_Scanner_ErrorNotice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Qr/Scanner/ErrorNotice */ "../extension-koni-ui/src/components/Qr/Scanner/ErrorNotice.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/modal */ "../extension-koni-ui/src/constants/modal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useCompleteCreateAccount */ "../extension-koni-ui/src/hooks/account/useCompleteCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetDefaultAccountName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetDefaultAccountName */ "../extension-koni-ui/src/hooks/account/useGetDefaultAccountName.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGoBackFromCreateAccount */ "../extension-koni-ui/src/hooks/account/useGoBackFromCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_qr_useScanAccountQr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/qr/useScanAccountQr */ "../extension-koni-ui/src/hooks/qr/useScanAccountQr.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useAutoNavigateToCreatePassword */ "../extension-koni-ui/src/hooks/router/useAutoNavigateToCreatePassword.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/scanner/attach */ "../extension-koni-ui/src/utils/scanner/attach.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-qr-scanner/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/QrCode.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/XCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_logo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/logo */ "../extension-koni-ui/src/assets/logo/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0
























const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
  weight: "fill"
});
const modalId = 'attach-qr-signer-scanner-modal';
const Component = props => {
  (0,_subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    className,
    deviceName,
    instructionUrl,
    logoUrl,
    subTitle,
    title
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_19__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const onBack = (0,_subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_7__["default"])(_subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_4__.ATTACH_ACCOUNT_MODAL);
  const accountName = (0,_subwallet_extension_koni_ui_hooks_account_useGetDefaultAccountName__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__.ModalContext);
  const [validateState, setValidateState] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)({});
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(account => {
    setLoading(true);
    inactiveModal(modalId);
    setValidateState({
      message: '',
      status: 'validating'
    });
    setTimeout(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__.createAccountExternalV2)({
        name: accountName,
        address: account.content,
        genesisHash: '',
        isEthereum: account.isEthereum,
        isAllowed: true,
        isReadOnly: false
      }).then(errors => {
        if (errors.length) {
          setValidateState({
            message: errors[0].message,
            status: 'error'
          });
        } else {
          setValidateState({});
          onComplete();
        }
      }).catch(error => {
        setValidateState({
          message: error.message,
          status: 'error'
        });
      }).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [accountName, onComplete, inactiveModal]);
  const {
    onClose,
    onError,
    onSuccess,
    openCamera
  } = (0,_subwallet_extension_koni_ui_hooks_qr_useScanAccountQr__WEBPACK_IMPORTED_MODULE_8__["default"])(modalId, _subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_12__.qrSignerScan, setValidateState, onSubmit);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      rightFooterButton: {
        children: loading ? t('Creating') : t('Scan QR code'),
        icon: FooterIcon,
        onClick: openCamera,
        loading: loading
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
        onClick: goHome
      }],
      title: title,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()('container'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "sub-title",
          children: subTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "logo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Logo_DualLogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
            leftLogo: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              height: 56,
              shape: "squircle",
              src: _assets_logo__WEBPACK_IMPORTED_MODULE_15__["default"].subwallet,
              width: 56
            }),
            rightLogo: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              height: 56,
              shape: "squircle",
              src: logoUrl,
              width: 56
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "instruction",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_22__.Trans, {
            components: {
              highlight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("a", {
                className: "link",
                href: instructionUrl
              })
            },
            i18nKey: (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_23__.detectTranslate)('{{deviceName}} will provide you with a QR code to scan. Read <highlight>this instruction</highlight>, for more details.'),
            values: {
              deviceName
            }
          })
        }), validateState.message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "error-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
            customSize: "28px",
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
            weight: "fill"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
            className: "error-content",
            children: validateState.message
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
          className: className,
          id: modalId,
          isError: !!validateState.status,
          onClose: onClose,
          onError: onError,
          onSuccess: onSuccess,
          overlay: validateState.message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Qr_Scanner_ErrorNotice__WEBPACK_IMPORTED_MODULE_3__["default"], {
            message: validateState.message
          })
        })]
      })
    })
  });
};
const ConnectQrSigner = (0,styled_components__WEBPACK_IMPORTED_MODULE_26__["default"])(Component).withConfig({
  displayName: "ConnectQrSigner",
  componentId: "sc-tg52mm-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.container': {
      padding: token.padding
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
      '--logo-size': token.controlHeightLG + token.controlHeightXS
    },
    '.instruction': {
      padding: `0 ${token.padding}px`,
      marginBottom: token.margin,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      textAlign: 'center'
    },
    '.link': {
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorLink,
      textDecoration: 'underline'
    },
    '.error-container': {
      color: token.colorError,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: token.marginXXL - 2,
      justifyContent: 'center'
    },
    '.error-content': {
      marginLeft: token.marginXS,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectQrSigner);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0FjY291bnRfQ29ubmVjdFFyU2lnbmVyX0Nvbm5lY3RLZXlzdG9uZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUV1RTtBQUN3QjtBQUVyRTtBQUNxQjtBQUNSO0FBQUE7QUFJdkMsTUFBTUssU0FBK0IsR0FBRyxNQUFNO0VBQzVDLE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdILDZEQUFjLEVBQUU7RUFFOUIsb0JBQ0UsdURBQUMsd0dBQWU7SUFDZCxVQUFVLEVBQUVHLENBQUMsQ0FBQyxVQUFVLENBQUU7SUFDMUIsY0FBYyxFQUFFLGlHQUFrRztJQUNsSCxPQUFPLEVBQUVOLHlGQUF5QjtJQUNsQyxRQUFRLEVBQUVNLENBQUMsQ0FBQyxzRUFBc0UsQ0FBRTtJQUNwRixLQUFLLEVBQUVBLENBQUMsQ0FBQyx5QkFBeUI7RUFBRSxFQUNwQztBQUVOLENBQUM7QUFFRCxNQUFNRSxlQUFlLEdBQUdKLDZEQUFNLENBQUNDLFNBQVMsQ0FBQztFQUFBO0VBQUE7QUFBQSxHQUFRLENBQUM7RUFBRUksS0FBSyxFQUFFO0lBQUVDO0VBQU07QUFBUyxDQUFDLEtBQUs7RUFDaEYsT0FBTyxDQUVQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZUYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDOUI7QUFDQTs7QUFFa0U7QUFDWTtBQUNDO0FBQ0Y7QUFDcUI7QUFDZDtBQUN1QjtBQUNBO0FBQ0k7QUFDekI7QUFDa0M7QUFDMUI7QUFDYjtBQUdBO0FBQ0o7QUFDakQ7QUFDcUI7QUFDZ0I7QUFDWDtBQUNmO0FBRVk7QUFBQTtBQUFBO0FBRW5ELE1BQU02QixVQUFVLGdCQUNkLHdEQUFDLDREQUFJO0VBQ0gsWUFBWSxFQUFFTix1REFBTztFQUNyQixNQUFNLEVBQUM7QUFBTSxFQUVoQjtBQVVELE1BQU1PLE9BQU8sR0FBRyxnQ0FB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LEtBQUssQ0FBQ2tGO0lBQy9DLENBQUM7SUFFRCxjQUFjLEVBQUU7TUFDZFYsT0FBTyxFQUFHLEtBQUl4RSxLQUFLLENBQUN3RSxPQUFRLElBQUc7TUFDL0JXLFlBQVksRUFBRW5GLEtBQUssQ0FBQ2dGLE1BQU07TUFDMUJQLFFBQVEsRUFBRXpFLEtBQUssQ0FBQzBFLGdCQUFnQjtNQUNoQ0MsVUFBVSxFQUFFM0UsS0FBSyxDQUFDNEUsa0JBQWtCO01BQ3BDQyxLQUFLLEVBQUU3RSxLQUFLLENBQUM4RSxvQkFBb0I7TUFDakNDLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFFRCxPQUFPLEVBQUU7TUFDUE4sUUFBUSxFQUFFekUsS0FBSyxDQUFDMEUsZ0JBQWdCO01BQ2hDQyxVQUFVLEVBQUUzRSxLQUFLLENBQUM0RSxrQkFBa0I7TUFDcENDLEtBQUssRUFBRTdFLEtBQUssQ0FBQ29GLFNBQVM7TUFDdEJDLGNBQWMsRUFBRTtJQUNsQixDQUFDO0lBRUQsa0JBQWtCLEVBQUU7TUFDbEJSLEtBQUssRUFBRTdFLEtBQUssQ0FBQ3NGLFVBQVU7TUFDdkJDLE9BQU8sRUFBRSxNQUFNO01BQ2ZDLGFBQWEsRUFBRSxLQUFLO01BQ3BCQyxVQUFVLEVBQUUsUUFBUTtNQUNwQkMsU0FBUyxFQUFFMUYsS0FBSyxDQUFDMkYsU0FBUyxHQUFHLENBQUM7TUFDOUJDLGNBQWMsRUFBRTtJQUNsQixDQUFDO0lBRUQsZ0JBQWdCLEVBQUU7TUFDaEJDLFVBQVUsRUFBRTdGLEtBQUssQ0FBQzhGLFFBQVE7TUFDMUJyQixRQUFRLEVBQUV6RSxLQUFLLENBQUMwRSxnQkFBZ0I7TUFDaENDLFVBQVUsRUFBRTNFLEtBQUssQ0FBQzRFO0lBQ3BCO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlckYsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvQ29ubmVjdFFyU2lnbmVyL0Nvbm5lY3RLZXlzdG9uZS50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvQWNjb3VudC9Db25uZWN0UXJTaWduZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgRGVmYXVsdExvZ29zTWFwIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvYXNzZXRzL2xvZ28nO1xuaW1wb3J0IENvbm5lY3RRclNpZ25lciBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL1BvcHVwL0FjY291bnQvQ29ubmVjdFFyU2lnbmVyL2luZGV4JztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFRoZW1lUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29ubmVjdFFyU2lnbmVyXG4gICAgICBkZXZpY2VOYW1lPXt0KCdLZXlzdG9uZScpfVxuICAgICAgaW5zdHJ1Y3Rpb25Vcmw9eydodHRwczovL2RvY3Muc3Vid2FsbGV0LmFwcC9tYWluL2V4dGVuc2lvbi11c2VyLWd1aWRlL2FjY291bnQtbWFuYWdlbWVudC9jb25uZWN0LWtleXN0b25lLWRldmljZSd9XG4gICAgICBsb2dvVXJsPXtEZWZhdWx0TG9nb3NNYXAua2V5c3RvbmV9XG4gICAgICBzdWJUaXRsZT17dCgnT3BlbiBcIlNvZnR3YXJlIFdhbGxldFwiIHNlY3Rpb24gb24geW91ciBLZXlzdG9uZSBhbmQgY2hvb3NlIFN1YldhbGxldCcpfVxuICAgICAgdGl0bGU9e3QoJ0Nvbm5lY3QgS2V5c3RvbmUgZGV2aWNlJyl9XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IENvbm5lY3RLZXlzdG9uZSA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG5cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0S2V5c3RvbmU7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgZGV0ZWN0VHJhbnNsYXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ljb24vQ2xvc2VJY29uJztcbmltcG9ydCBEdWFsTG9nbyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvTG9nby9EdWFsTG9nbyc7XG5pbXBvcnQgUXJTY2FubmVyRXJyb3JOb3RpY2UgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL1FyL1NjYW5uZXIvRXJyb3JOb3RpY2UnO1xuaW1wb3J0IHsgQVRUQUNIX0FDQ09VTlRfTU9EQUwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cy9tb2RhbCc7XG5pbXBvcnQgdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR2V0RGVmYXVsdEFjY291bnROYW1lJztcbmltcG9ydCB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZVNjYW5BY2NvdW50UXIgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9xci91c2VTY2FuQWNjb3VudFFyJztcbmltcG9ydCB1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQnO1xuaW1wb3J0IHVzZURlZmF1bHROYXZpZ2F0ZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3JvdXRlci91c2VEZWZhdWx0TmF2aWdhdGUnO1xuaW1wb3J0IHsgY3JlYXRlQWNjb3VudEV4dGVybmFsVjIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzLCBWYWxpZGF0ZVN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBRckFjY291bnQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL3NjYW5uZXInO1xuaW1wb3J0IHsgcXJTaWduZXJTY2FuIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9zY2FubmVyL2F0dGFjaCc7XG5pbXBvcnQgeyBJY29uLCBJbWFnZSwgTW9kYWxDb250ZXh0LCBTd1FyU2Nhbm5lciB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgUXJDb2RlLCBYQ2lyY2xlIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBEZWZhdWx0TG9nb3NNYXAgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2xvZ28nO1xuXG5jb25zdCBGb290ZXJJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17UXJDb2RlfVxuICAgIHdlaWdodD0nZmlsbCdcbiAgLz5cbik7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJUaXRsZTogc3RyaW5nO1xuICBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gIGluc3RydWN0aW9uVXJsOiBzdHJpbmc7XG4gIGxvZ29Vcmw6IHN0cmluZztcbn1cblxuY29uc3QgbW9kYWxJZCA9ICdhdHRhY2gtcXItc2lnbmVyLXNjYW5uZXItbW9kYWwnO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCgpO1xuXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBkZXZpY2VOYW1lLCBpbnN0cnVjdGlvblVybCwgbG9nb1VybCwgc3ViVGl0bGUsIHRpdGxlIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG5cbiAgY29uc3Qgb25Db21wbGV0ZSA9IHVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCgpO1xuICBjb25zdCBvbkJhY2sgPSB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudChBVFRBQ0hfQUNDT1VOVF9NT0RBTCk7XG5cbiAgY29uc3QgYWNjb3VudE5hbWUgPSB1c2VHZXREZWZhdWx0QWNjb3VudE5hbWUoKTtcbiAgY29uc3QgeyBpbmFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgY29uc3QgW3ZhbGlkYXRlU3RhdGUsIHNldFZhbGlkYXRlU3RhdGVdID0gdXNlU3RhdGU8VmFsaWRhdGVTdGF0ZT4oe30pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoYWNjb3VudDogUXJBY2NvdW50KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBpbmFjdGl2ZU1vZGFsKG1vZGFsSWQpO1xuICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgbWVzc2FnZTogJycsXG4gICAgICBzdGF0dXM6ICd2YWxpZGF0aW5nJ1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjcmVhdGVBY2NvdW50RXh0ZXJuYWxWMih7XG4gICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICBhZGRyZXNzOiBhY2NvdW50LmNvbnRlbnQsXG4gICAgICAgIGdlbmVzaXNIYXNoOiAnJyxcbiAgICAgICAgaXNFdGhlcmV1bTogYWNjb3VudC5pc0V0aGVyZXVtLFxuICAgICAgICBpc0FsbG93ZWQ6IHRydWUsXG4gICAgICAgIGlzUmVhZE9ubHk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvcnNbMF0ubWVzc2FnZSxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VmFsaWRhdGVTdGF0ZSh7fSk7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG4gIH0sIFthY2NvdW50TmFtZSwgb25Db21wbGV0ZSwgaW5hY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IHsgb25DbG9zZSwgb25FcnJvciwgb25TdWNjZXNzLCBvcGVuQ2FtZXJhIH0gPSB1c2VTY2FuQWNjb3VudFFyKG1vZGFsSWQsIHFyU2lnbmVyU2Nhbiwgc2V0VmFsaWRhdGVTdGF0ZSwgb25TdWJtaXQpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX0+XG4gICAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICAgIG9uQmFjaz17b25CYWNrfVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGNoaWxkcmVuOiBsb2FkaW5nID8gdCgnQ3JlYXRpbmcnKSA6IHQoJ1NjYW4gUVIgY29kZScpLFxuICAgICAgICAgIGljb246IEZvb3Rlckljb24sXG4gICAgICAgICAgb25DbGljazogb3BlbkNhbWVyYSxcbiAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXG4gICAgICAgIH19XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogPENsb3NlSWNvbiAvPixcbiAgICAgICAgICAgIG9uQ2xpY2s6IGdvSG9tZVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q04oJ2NvbnRhaW5lcicpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ViLXRpdGxlJz5cbiAgICAgICAgICAgIHtzdWJUaXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICAgICAgICA8RHVhbExvZ29cbiAgICAgICAgICAgICAgbGVmdExvZ289eyhcbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NTZ9XG4gICAgICAgICAgICAgICAgICBzaGFwZT0nc3F1aXJjbGUnXG4gICAgICAgICAgICAgICAgICBzcmM9e0RlZmF1bHRMb2dvc01hcC5zdWJ3YWxsZXR9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgcmlnaHRMb2dvPXsoXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezU2fVxuICAgICAgICAgICAgICAgICAgc2hhcGU9J3NxdWlyY2xlJ1xuICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvVXJsfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezU2fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnN0cnVjdGlvbic+XG4gICAgICAgICAgICA8VHJhbnNcbiAgICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaW5rJ1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtpbnN0cnVjdGlvblVybH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpMThuS2V5PXtkZXRlY3RUcmFuc2xhdGUoJ3t7ZGV2aWNlTmFtZX19IHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIFFSIGNvZGUgdG8gc2Nhbi4gUmVhZCA8aGlnaGxpZ2h0PnRoaXMgaW5zdHJ1Y3Rpb248L2hpZ2hsaWdodD4sIGZvciBtb3JlIGRldGFpbHMuJyl9XG4gICAgICAgICAgICAgIHZhbHVlcz17eyBkZXZpY2VOYW1lIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbGlkYXRlU3RhdGUubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBjdXN0b21TaXplPScyOHB4J1xuICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtYQ2lyY2xlfVxuICAgICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdlcnJvci1jb250ZW50Jz57dmFsaWRhdGVTdGF0ZS5tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxTd1FyU2Nhbm5lclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBpZD17bW9kYWxJZH1cbiAgICAgICAgICAgIGlzRXJyb3I9eyEhdmFsaWRhdGVTdGF0ZS5zdGF0dXN9XG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgb25FcnJvcj17b25FcnJvcn1cbiAgICAgICAgICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxuICAgICAgICAgICAgb3ZlcmxheT17dmFsaWRhdGVTdGF0ZS5tZXNzYWdlICYmICg8UXJTY2FubmVyRXJyb3JOb3RpY2UgbWVzc2FnZT17dmFsaWRhdGVTdGF0ZS5tZXNzYWdlfSAvPil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgQ29ubmVjdFFyU2lnbmVyID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLmNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmdcbiAgICB9LFxuXG4gICAgJy5zdWItdGl0bGUnOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3Rva2VuLnBhZGRpbmd9cHhgLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcubG9nbyc6IHtcbiAgICAgIG1hcmdpbjogYCR7dG9rZW4uY29udHJvbEhlaWdodExHfXB4IDBgLFxuICAgICAgJy0tbG9nby1zaXplJzogdG9rZW4uY29udHJvbEhlaWdodExHICsgdG9rZW4uY29udHJvbEhlaWdodFhTXG4gICAgfSxcblxuICAgICcuaW5zdHJ1Y3Rpb24nOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3Rva2VuLnBhZGRpbmd9cHhgLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4sXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNixcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNixcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgJy5saW5rJzoge1xuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JMaW5rLFxuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfSxcblxuICAgICcuZXJyb3ItY29udGFpbmVyJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3IsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5YWEwgLSAyLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcuZXJyb3ItY29udGVudCc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRva2VuLm1hcmdpblhTLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzZcbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdFFyU2lnbmVyO1xuIl0sIm5hbWVzIjpbIkRlZmF1bHRMb2dvc01hcCIsIkNvbm5lY3RRclNpZ25lciIsIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJzdHlsZWQiLCJDb21wb25lbnQiLCJ0Iiwia2V5c3RvbmUiLCJDb25uZWN0S2V5c3RvbmUiLCJ0aGVtZSIsInRva2VuIiwiZGV0ZWN0VHJhbnNsYXRlIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJDbG9zZUljb24iLCJEdWFsTG9nbyIsIlFyU2Nhbm5lckVycm9yTm90aWNlIiwiQVRUQUNIX0FDQ09VTlRfTU9EQUwiLCJ1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQiLCJ1c2VHZXREZWZhdWx0QWNjb3VudE5hbWUiLCJ1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCIsInVzZVNjYW5BY2NvdW50UXIiLCJ1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkIiwidXNlRGVmYXVsdE5hdmlnYXRlIiwiY3JlYXRlQWNjb3VudEV4dGVybmFsVjIiLCJxclNpZ25lclNjYW4iLCJJY29uIiwiSW1hZ2UiLCJNb2RhbENvbnRleHQiLCJTd1FyU2Nhbm5lciIsIkNOIiwiUXJDb2RlIiwiWENpcmNsZSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVHJhbnMiLCJGb290ZXJJY29uIiwibW9kYWxJZCIsInByb3BzIiwiY2xhc3NOYW1lIiwiZGV2aWNlTmFtZSIsImluc3RydWN0aW9uVXJsIiwibG9nb1VybCIsInN1YlRpdGxlIiwidGl0bGUiLCJnb0hvbWUiLCJvbkNvbXBsZXRlIiwib25CYWNrIiwiYWNjb3VudE5hbWUiLCJpbmFjdGl2ZU1vZGFsIiwidmFsaWRhdGVTdGF0ZSIsInNldFZhbGlkYXRlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiYWNjb3VudCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwibmFtZSIsImFkZHJlc3MiLCJjb250ZW50IiwiZ2VuZXNpc0hhc2giLCJpc0V0aGVyZXVtIiwiaXNBbGxvd2VkIiwiaXNSZWFkT25seSIsInRoZW4iLCJlcnJvcnMiLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiZmluYWxseSIsIm9uQ2xvc2UiLCJvbkVycm9yIiwib25TdWNjZXNzIiwib3BlbkNhbWVyYSIsImNoaWxkcmVuIiwiaWNvbiIsIm9uQ2xpY2siLCJzdWJ3YWxsZXQiLCJoaWdobGlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImNvbG9yIiwiY29sb3JUZXh0RGVzY3JpcHRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJjb250cm9sSGVpZ2h0TEciLCJjb250cm9sSGVpZ2h0WFMiLCJtYXJnaW5Cb3R0b20iLCJjb2xvckxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yRXJyb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5YWEwiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5YUyJdLCJzb3VyY2VSb290IjoiIn0=