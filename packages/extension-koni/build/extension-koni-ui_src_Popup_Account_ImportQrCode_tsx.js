"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Account_ImportQrCode_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/ImportQrCode.tsx":
/*!***************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/ImportQrCode.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
/* harmony import */ var _subwallet_extension_koni_ui_assets_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/assets/logo */ "../extension-koni-ui/src/assets/logo/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/CloseIcon */ "../extension-koni-ui/src/components/Icon/CloseIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Logo_DualLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Logo/DualLogo */ "../extension-koni-ui/src/components/Logo/DualLogo.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Qr_Scanner_ErrorNotice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Qr/Scanner/ErrorNotice */ "../extension-koni-ui/src/components/Qr/Scanner/ErrorNotice.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/modal */ "../extension-koni-ui/src/constants/modal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useCompleteCreateAccount */ "../extension-koni-ui/src/hooks/account/useCompleteCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetDefaultAccountName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetDefaultAccountName */ "../extension-koni-ui/src/hooks/account/useGetDefaultAccountName.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGoBackFromCreateAccount */ "../extension-koni-ui/src/hooks/account/useGoBackFromCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useUnlockChecker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useUnlockChecker */ "../extension-koni-ui/src/hooks/common/useUnlockChecker.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_qr_useScanAccountQr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/qr/useScanAccountQr */ "../extension-koni-ui/src/hooks/qr/useScanAccountQr.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useAutoNavigateToCreatePassword */ "../extension-koni-ui/src/hooks/router/useAutoNavigateToCreatePassword.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/scanner/attach */ "../extension-koni-ui/src/utils/scanner/attach.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-qr-scanner/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/QrCode.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Scan.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/XCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

























const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
  weight: "fill"
});
const checkAccount = qrAccount => {
  return new Promise((resolve, reject) => {
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_13__.checkPublicAndPrivateKey)(qrAccount.genesisHash, qrAccount.content).then(({
      isEthereum,
      isValid
    }) => {
      if (isValid) {
        resolve(isEthereum);
      } else {
        reject(new Error('Invalid QR code'));
      }
    }).catch(e => {
      reject(e);
    });
  });
};
const modalId = 'import-qr-code-scanner-modal';
const Component = props => {
  (0,_subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_20__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const accountName = (0,_subwallet_extension_koni_ui_hooks_account_useGetDefaultAccountName__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const onBack = (0,_subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_8__["default"])(_subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_5__.IMPORT_ACCOUNT_MODAL);
  const checkUnlock = (0,_subwallet_extension_koni_ui_hooks_common_useUnlockChecker__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_16__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__.ModalContext);
  const [validateState, setValidateState] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)({});
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_16__.useCallback)(_account => {
    setLoading(true);
    inactiveModal(modalId);
    setValidateState({
      message: '',
      status: 'success'
    });
    setTimeout(() => {
      checkAccount(_account).then(isEthereum => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_13__.createAccountWithSecret)({
          name: accountName,
          isAllow: true,
          secretKey: _account.content,
          publicKey: _account.genesisHash,
          isEthereum: isEthereum
        }).then(({
          errors,
          success
        }) => {
          if (success) {
            setValidateState({});
            onComplete();
          } else {
            setValidateState({
              message: errors[0].message,
              status: 'error'
            });
          }
        }).catch(error => {
          setValidateState({
            message: error.message,
            status: 'error'
          });
        }).finally(() => {
          setLoading(false);
        });
      }).catch(error => {
        setValidateState({
          message: t(error.message),
          status: 'error'
        });
        setLoading(false);
      });
    }, 300);
  }, [accountName, onComplete, inactiveModal, t]);
  const {
    onClose,
    onError,
    onSuccess,
    openCamera
  } = (0,_subwallet_extension_koni_ui_hooks_qr_useScanAccountQr__WEBPACK_IMPORTED_MODULE_10__["default"])(modalId, _subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_14__.importQrScan, setValidateState, onSubmit);
  const onScan = (0,react__WEBPACK_IMPORTED_MODULE_16__.useCallback)(() => {
    checkUnlock().then(() => {
      setTimeout(() => {
        openCamera();
      }, 300);
    }).catch(() => {
      // User cancelled unlock
    });
  }, [checkUnlock, openCamera]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_1__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_1__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      rightFooterButton: {
        children: loading ? t('Creating') : t('Scan QR'),
        icon: FooterIcon,
        onClick: onScan,
        loading: loading
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
        onClick: goHome
      }],
      title: t('Import by QR code'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()('container'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "sub-title",
          children: t("Please make sure that you have granted SubWallet the access to your device's camera.")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "logo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_extension_koni_ui_components_Logo_DualLogo__WEBPACK_IMPORTED_MODULE_3__["default"], {
            leftLogo: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
              height: 56,
              shape: "squircle",
              src: _subwallet_extension_koni_ui_assets_logo__WEBPACK_IMPORTED_MODULE_0__["default"].subwallet,
              width: 56
            }),
            linkIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_23__["default"],
              size: "md"
            }),
            rightLogo: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
              height: 56,
              shape: "squircle",
              src: _subwallet_extension_koni_ui_assets_logo__WEBPACK_IMPORTED_MODULE_0__.IconMap.__qr_code__,
              width: 56
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "instruction",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "instruction",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_24__.Trans, {
              components: {
                highlight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                  className: "link",
                  href: "https://docs.subwallet.app/main/extension-user-guide/account-management/import-and-restore-an-account#import-by-qr-code"
                })
              },
              i18nKey: (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_25__.detectTranslate)('Click the "Scan QR" button, or read <highlight>this instruction</highlight>, for more details.')
            })
          })
        }), validateState.message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "error-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
            customSize: "28px",
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_26__["default"],
            weight: "fill"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
            className: "error-content",
            children: validateState.message
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__["default"], {
          className: className,
          id: modalId,
          isError: !!validateState.status,
          onClose: onClose,
          onError: onError,
          onSuccess: onSuccess,
          overlay: validateState.message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_subwallet_extension_koni_ui_components_Qr_Scanner_ErrorNotice__WEBPACK_IMPORTED_MODULE_4__["default"], {
            message: validateState.message
          }),
          title: t('Scan QR')
        })]
      })
    })
  });
};
const ImportQrCode = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__["default"])(Component).withConfig({
  displayName: "ImportQrCode",
  componentId: "sc-1frgihv-0"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportQrCode);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0FjY291bnRfSW1wb3J0UXJDb2RlX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWtFO0FBQ2tCO0FBQ047QUFDQztBQUNGO0FBQ3FCO0FBQ2Q7QUFDdUI7QUFDQTtBQUNJO0FBQ3JCO0FBQ0o7QUFDa0M7QUFDMUI7QUFDYTtBQUcxQjtBQUNKO0FBQ2pEO0FBQzJCO0FBQ1U7QUFDWDtBQUNmO0FBQUE7QUFBQTtBQUl2QyxNQUFNa0MsVUFBVSxnQkFDZCx3REFBQyw0REFBSTtFQUNILFlBQVksRUFBRVYsdURBQU87RUFDckIsTUFBTSxFQUFDO0FBQU0sRUFFaEI7QUFFRCxNQUFNVyxZQUFZLEdBQUlDLFNBQW9CLElBQXVCO0VBQy9ELE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO0lBQ3RDdkIsaUdBQXdCLENBQUNvQixTQUFTLENBQUNJLFdBQVcsRUFBRUosU0FBUyxDQUFDSyxPQUFPLENBQUMsQ0FDL0RDLElBQUksQ0FBQyxDQUFDO01BQUVDLFVBQVU7TUFBRUM7SUFBUSxDQUFDLEtBQUs7TUFDakMsSUFBSUEsT0FBTyxFQUFFO1FBQ1hOLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDO01BQ3JCLENBQUMsTUFBTTtRQUNMSixNQUFNLENBQUMsSUFBSU0sS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7TUFDdEM7SUFDRixDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFFQyxDQUFRLElBQUs7TUFDbkJSLE1BQU0sQ0FBQ1EsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU1DLE9BQU8sR0FBRyw4QkFBOEI7QUFFOUMsTUFBTUMsU0FBMEIsR0FBSUMsS0FBWSxJQUFLO0VBQ25EcEMsc0hBQStCLEVBQUU7RUFFakMsTUFBTTtJQUFFcUM7RUFBVSxDQUFDLEdBQUdELEtBQUs7RUFDM0IsTUFBTTtJQUFFRTtFQUFFLENBQUMsR0FBR3BCLDhEQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFcUI7RUFBTyxDQUFDLEdBQUd0Qyx5R0FBa0IsRUFBRTtFQUV2QyxNQUFNdUMsV0FBVyxHQUFHNUMsK0dBQXdCLEVBQUU7RUFDOUMsTUFBTTZDLFVBQVUsR0FBRzlDLCtHQUF3QixFQUFFO0VBQzdDLE1BQU0rQyxNQUFNLEdBQUc3QyxpSEFBMEIsQ0FBQ0gsOEZBQW9CLENBQUM7RUFDL0QsTUFBTWlELFdBQVcsR0FBRzdDLHNHQUFnQixFQUFFO0VBRXRDLE1BQU07SUFBRThDO0VBQWMsQ0FBQyxHQUFHN0Isa0RBQVUsQ0FBQ1IsOERBQVksQ0FBQztFQUVsRCxNQUFNLENBQUNzQyxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUc5QixnREFBUSxDQUFnQixDQUFDLENBQUMsQ0FBQztFQUNyRSxNQUFNLENBQUMrQixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHaEMsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7RUFFN0MsTUFBTWlDLFFBQVEsR0FBR25DLG1EQUFXLENBQUVvQyxRQUFtQixJQUFLO0lBQ3BERixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCSixhQUFhLENBQUNWLE9BQU8sQ0FBQztJQUN0QlksZ0JBQWdCLENBQUM7TUFDZkssT0FBTyxFQUFFLEVBQUU7TUFDWEMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUZDLFVBQVUsQ0FBQyxNQUFNO01BQ2ZoQyxZQUFZLENBQUM2QixRQUFRLENBQUMsQ0FDbkJ0QixJQUFJLENBQUVDLFVBQVUsSUFBSztRQUNwQjFCLGdHQUF1QixDQUFDO1VBQUVtRCxJQUFJLEVBQUVkLFdBQVc7VUFDekNlLE9BQU8sRUFBRSxJQUFJO1VBQ2JDLFNBQVMsRUFBRU4sUUFBUSxDQUFDdkIsT0FBTztVQUMzQjhCLFNBQVMsRUFBRVAsUUFBUSxDQUFDeEIsV0FBVztVQUMvQkcsVUFBVSxFQUFFQTtRQUFXLENBQUMsQ0FBQyxDQUN4QkQsSUFBSSxDQUFDLENBQUM7VUFBRThCLE1BQU07VUFBRUM7UUFBUSxDQUFDLEtBQUs7VUFDN0IsSUFBSUEsT0FBTyxFQUFFO1lBQ1hiLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCTCxVQUFVLEVBQUU7VUFDZCxDQUFDLE1BQU07WUFDTEssZ0JBQWdCLENBQUM7Y0FDZkssT0FBTyxFQUFFTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNQLE9BQU87Y0FDMUJDLE1BQU0sRUFBRTtZQUNWLENBQUMsQ0FBQztVQUNKO1FBQ0YsQ0FBQyxDQUFDLENBQ0RwQixLQUFLLENBQUU0QixLQUFZLElBQUs7VUFDdkJkLGdCQUFnQixDQUFDO1lBQ2ZLLE9BQU8sRUFBRVMsS0FBSyxDQUFDVCxPQUFPO1lBQ3RCQyxNQUFNLEVBQUU7VUFDVixDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDRFMsT0FBTyxDQUFDLE1BQU07VUFDYmIsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDLENBQUM7TUFDTixDQUFDLENBQUMsQ0FDRGhCLEtBQUssQ0FBRTRCLEtBQVksSUFBSztRQUN2QmQsZ0JBQWdCLENBQUM7VUFDZkssT0FBTyxFQUFFYixDQUFDLENBQUNzQixLQUFLLENBQUNULE9BQU8sQ0FBQztVQUN6QkMsTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO1FBQ0ZKLFVBQVUsQ0FBQyxLQUFLLENBQUM7TUFDbkIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUMsRUFBRSxDQUFDUixXQUFXLEVBQUVDLFVBQVUsRUFBRUcsYUFBYSxFQUFFTixDQUFDLENBQUMsQ0FBQztFQUUvQyxNQUFNO0lBQUV3QixPQUFPO0lBQUVDLE9BQU87SUFBRUMsU0FBUztJQUFFQztFQUFXLENBQUMsR0FBR2xFLG1HQUFnQixDQUFDbUMsT0FBTyxFQUFFOUIsNEZBQVksRUFBRTBDLGdCQUFnQixFQUFFRyxRQUFRLENBQUM7RUFFdkgsTUFBTWlCLE1BQU0sR0FBR3BELG1EQUFXLENBQUMsTUFBTTtJQUMvQjZCLFdBQVcsRUFBRSxDQUFDZixJQUFJLENBQUMsTUFBTTtNQUN2QnlCLFVBQVUsQ0FBQyxNQUFNO1FBQ2ZZLFVBQVUsRUFBRTtNQUNkLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQ2pDLEtBQUssQ0FBQyxNQUFNO01BQ2I7SUFBQSxDQUNELENBQUM7RUFDSixDQUFDLEVBQUUsQ0FBQ1csV0FBVyxFQUFFc0IsVUFBVSxDQUFDLENBQUM7RUFFN0Isb0JBQ0Usd0RBQUMsZ0ZBQVc7SUFBQyxTQUFTLEVBQUV4RCxrREFBRSxDQUFDNEIsU0FBUyxDQUFFO0lBQUEsdUJBQ3BDLHdEQUFDLDZGQUF3QjtNQUN2QixNQUFNLEVBQUVLLE1BQU87TUFDZixpQkFBaUIsRUFBRTtRQUNqQnlCLFFBQVEsRUFBRXBCLE9BQU8sR0FBR1QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hEOEIsSUFBSSxFQUFFaEQsVUFBVTtRQUNoQmlELE9BQU8sRUFBRUgsTUFBTTtRQUNmbkIsT0FBTyxFQUFFQTtNQUNYLENBQUU7TUFDRixjQUFjLEVBQUUsQ0FDZDtRQUNFcUIsSUFBSSxlQUFFLHdEQUFDLDhGQUFTLEtBQUc7UUFDbkJDLE9BQU8sRUFBRTlCO01BQ1gsQ0FBQyxDQUNEO01BQ0YsS0FBSyxFQUFFRCxDQUFDLENBQUMsbUJBQW1CLENBQUU7TUFBQSx1QkFFOUI7UUFBSyxTQUFTLEVBQUU3QixrREFBRSxDQUFDLFdBQVcsQ0FBRTtRQUFBLHdCQUM5QjtVQUFLLFNBQVMsRUFBQyxXQUFXO1VBQUEsVUFDdkI2QixDQUFDLENBQUMsc0ZBQXNGO1FBQUMsRUFDdEYsZUFDTjtVQUFLLFNBQVMsRUFBQyxNQUFNO1VBQUEsdUJBQ25CLHdEQUFDLDZGQUFRO1lBQ1AsUUFBUSxlQUNOLHdEQUFDLDREQUFLO2NBQ0osTUFBTSxFQUFFLEVBQUc7Y0FDWCxLQUFLLEVBQUMsVUFBVTtjQUNoQixHQUFHLEVBQUVuRCwwRkFBMEI7Y0FDL0IsS0FBSyxFQUFFO1lBQUcsRUFFWjtZQUNGLFFBQVEsZUFDTix3REFBQyw0REFBSTtjQUNILFlBQVksRUFBRXdCLHVEQUFLO2NBQ25CLElBQUksRUFBQztZQUFJLEVBRVg7WUFDRixTQUFTLGVBQ1Asd0RBQUMsNERBQUs7Y0FDSixNQUFNLEVBQUUsRUFBRztjQUNYLEtBQUssRUFBQyxVQUFVO2NBQ2hCLEdBQUcsRUFBRXZCLHlGQUFvQjtjQUN6QixLQUFLLEVBQUU7WUFBRztVQUVaO1FBQ0YsRUFDRSxlQUNOO1VBQUssU0FBUyxFQUFDLGFBQWE7VUFBQSx1QkFDMUI7WUFBSyxTQUFTLEVBQUMsYUFBYTtZQUFBLHVCQUMxQix3REFBQyxpREFBSztjQUNKLFVBQVUsRUFBRTtnQkFDVm9GLFNBQVMsZUFDUDtrQkFDRSxTQUFTLEVBQUMsTUFBTTtrQkFDaEIsSUFBSSxFQUFDO2dCQUF5SDtjQUdwSSxDQUFFO2NBQ0YsT0FBTyxFQUFFdEYsaUZBQWUsQ0FBQyxnR0FBZ0c7WUFBRTtVQUMzSDtRQUNFLEVBQ0YsRUFFSjJELGFBQWEsQ0FBQ00sT0FBTyxpQkFDbkI7VUFBSyxTQUFTLEVBQUMsaUJBQWlCO1VBQUEsd0JBQzlCLHdEQUFDLDREQUFJO1lBQ0gsVUFBVSxFQUFDLE1BQU07WUFDakIsWUFBWSxFQUFFdkMsdURBQVE7WUFDdEIsTUFBTSxFQUFDO1VBQU0sRUFDYixlQUNGO1lBQU0sU0FBUyxFQUFDLGVBQWU7WUFBQSxVQUFFaUMsYUFBYSxDQUFDTTtVQUFPLEVBQVE7UUFBQSxFQUVqRSxlQUVILHdEQUFDLDREQUFXO1VBQ1YsU0FBUyxFQUFFZCxTQUFVO1VBQ3JCLEVBQUUsRUFBRUgsT0FBUTtVQUNaLE9BQU8sRUFBRSxDQUFDLENBQUNXLGFBQWEsQ0FBQ08sTUFBTztVQUNoQyxPQUFPLEVBQUVVLE9BQVE7VUFDakIsT0FBTyxFQUFFQyxPQUFRO1VBQ2pCLFNBQVMsRUFBRUMsU0FBVTtVQUNyQixPQUFPLEVBQUVuQixhQUFhLENBQUNNLE9BQU8saUJBQUssd0RBQUMsc0dBQW9CO1lBQUMsT0FBTyxFQUFFTixhQUFhLENBQUNNO1VBQVEsRUFBSztVQUM3RixLQUFLLEVBQUViLENBQUMsQ0FBQyxTQUFTO1FBQUUsRUFDcEI7TUFBQTtJQUNFO0VBQ21CLEVBQ2Y7QUFFbEIsQ0FBQztBQUVELE1BQU1tQyxZQUFZLEdBQUd0RCw4REFBTSxDQUFDZ0IsU0FBUyxDQUFDO0VBQUE7RUFBQTtBQUFBLEdBQVEsQ0FBQztFQUFFdUMsS0FBSyxFQUFFO0lBQUVDO0VBQU07QUFBUyxDQUFDLEtBQUs7RUFDN0UsT0FBTztJQUNMLFlBQVksRUFBRTtNQUNaQyxPQUFPLEVBQUVELEtBQUssQ0FBQ0M7SUFDakIsQ0FBQztJQUVELFlBQVksRUFBRTtNQUNaQSxPQUFPLEVBQUcsS0FBSUQsS0FBSyxDQUFDQyxPQUFRLElBQUc7TUFDL0JDLFFBQVEsRUFBRUYsS0FBSyxDQUFDRyxnQkFBZ0I7TUFDaENDLFVBQVUsRUFBRUosS0FBSyxDQUFDSyxrQkFBa0I7TUFDcENDLEtBQUssRUFBRU4sS0FBSyxDQUFDTyxvQkFBb0I7TUFDakNDLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFFRCxPQUFPLEVBQUU7TUFDUEMsTUFBTSxFQUFHLEdBQUVULEtBQUssQ0FBQ1UsZUFBZ0IsTUFBSztNQUN0QyxhQUFhLEVBQUVWLEtBQUssQ0FBQ1UsZUFBZSxHQUFHVixLQUFLLENBQUNXO0lBQy9DLENBQUM7SUFFRCxjQUFjLEVBQUU7TUFDZFYsT0FBTyxFQUFHLEtBQUlELEtBQUssQ0FBQ0MsT0FBUSxJQUFHO01BQy9CVyxZQUFZLEVBQUVaLEtBQUssQ0FBQ1MsTUFBTTtNQUMxQlAsUUFBUSxFQUFFRixLQUFLLENBQUNHLGdCQUFnQjtNQUNoQ0MsVUFBVSxFQUFFSixLQUFLLENBQUNLLGtCQUFrQjtNQUNwQ0MsS0FBSyxFQUFFTixLQUFLLENBQUNPLG9CQUFvQjtNQUNqQ0MsU0FBUyxFQUFFO0lBQ2IsQ0FBQztJQUVELE9BQU8sRUFBRTtNQUNQRixLQUFLLEVBQUVOLEtBQUssQ0FBQ2EsU0FBUztNQUN0QkMsY0FBYyxFQUFFO0lBQ2xCLENBQUM7SUFFRCxrQkFBa0IsRUFBRTtNQUNsQlIsS0FBSyxFQUFFTixLQUFLLENBQUNlLFVBQVU7TUFDdkJDLE9BQU8sRUFBRSxNQUFNO01BQ2ZDLGFBQWEsRUFBRSxLQUFLO01BQ3BCQyxVQUFVLEVBQUUsUUFBUTtNQUNwQkMsU0FBUyxFQUFFbkIsS0FBSyxDQUFDb0IsU0FBUyxHQUFHLENBQUM7TUFDOUJDLGNBQWMsRUFBRTtJQUNsQixDQUFDO0lBRUQsZ0JBQWdCLEVBQUU7TUFDaEJDLFVBQVUsRUFBRXRCLEtBQUssQ0FBQ3VCLFFBQVE7TUFDMUJyQixRQUFRLEVBQUVGLEtBQUssQ0FBQ0csZ0JBQWdCO01BQ2hDQyxVQUFVLEVBQUVKLEtBQUssQ0FBQ0s7SUFDcEI7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVQLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9BY2NvdW50L0ltcG9ydFFyQ29kZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IGRldGVjdFRyYW5zbGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuaW1wb3J0IERlZmF1bHRMb2dvc01hcCwgeyBJY29uTWFwIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9hc3NldHMvbG9nbyc7XG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ljb24vQ2xvc2VJY29uJztcbmltcG9ydCBEdWFsTG9nbyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvTG9nby9EdWFsTG9nbyc7XG5pbXBvcnQgUXJTY2FubmVyRXJyb3JOb3RpY2UgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL1FyL1NjYW5uZXIvRXJyb3JOb3RpY2UnO1xuaW1wb3J0IHsgSU1QT1JUX0FDQ09VTlRfTU9EQUwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cy9tb2RhbCc7XG5pbXBvcnQgdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR2V0RGVmYXVsdEFjY291bnROYW1lJztcbmltcG9ydCB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZVVubG9ja0NoZWNrZXIgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlVW5sb2NrQ2hlY2tlcic7XG5pbXBvcnQgdXNlU2NhbkFjY291bnRRciBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3FyL3VzZVNjYW5BY2NvdW50UXInO1xuaW1wb3J0IHVzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9yb3V0ZXIvdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCc7XG5pbXBvcnQgdXNlRGVmYXVsdE5hdmlnYXRlIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZURlZmF1bHROYXZpZ2F0ZSc7XG5pbXBvcnQgeyBjaGVja1B1YmxpY0FuZFByaXZhdGVLZXksIGNyZWF0ZUFjY291bnRXaXRoU2VjcmV0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgVGhlbWVQcm9wcywgVmFsaWRhdGVTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgUXJBY2NvdW50IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcy9zY2FubmVyJztcbmltcG9ydCB7IGltcG9ydFFyU2NhbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvc2Nhbm5lci9hdHRhY2gnO1xuaW1wb3J0IHsgSWNvbiwgSW1hZ2UsIE1vZGFsQ29udGV4dCwgU3dRclNjYW5uZXIgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IFFyQ29kZSwgU2NhbiwgWENpcmNsZSB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmFucywgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wc1xuXG5jb25zdCBGb290ZXJJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17UXJDb2RlfVxuICAgIHdlaWdodD0nZmlsbCdcbiAgLz5cbik7XG5cbmNvbnN0IGNoZWNrQWNjb3VudCA9IChxckFjY291bnQ6IFFyQWNjb3VudCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNoZWNrUHVibGljQW5kUHJpdmF0ZUtleShxckFjY291bnQuZ2VuZXNpc0hhc2gsIHFyQWNjb3VudC5jb250ZW50KVxuICAgICAgLnRoZW4oKHsgaXNFdGhlcmV1bSwgaXNWYWxpZCB9KSA9PiB7XG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgcmVzb2x2ZShpc0V0aGVyZXVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnZhbGlkIFFSIGNvZGUnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IG1vZGFsSWQgPSAnaW1wb3J0LXFyLWNvZGUtc2Nhbm5lci1tb2RhbCc7XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICB1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkKCk7XG5cbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgZ29Ib21lIH0gPSB1c2VEZWZhdWx0TmF2aWdhdGUoKTtcblxuICBjb25zdCBhY2NvdW50TmFtZSA9IHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSgpO1xuICBjb25zdCBvbkNvbXBsZXRlID0gdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50KCk7XG4gIGNvbnN0IG9uQmFjayA9IHVzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50KElNUE9SVF9BQ0NPVU5UX01PREFMKTtcbiAgY29uc3QgY2hlY2tVbmxvY2sgPSB1c2VVbmxvY2tDaGVja2VyKCk7XG5cbiAgY29uc3QgeyBpbmFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgY29uc3QgW3ZhbGlkYXRlU3RhdGUsIHNldFZhbGlkYXRlU3RhdGVdID0gdXNlU3RhdGU8VmFsaWRhdGVTdGF0ZT4oe30pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoX2FjY291bnQ6IFFyQWNjb3VudCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgaW5hY3RpdmVNb2RhbChtb2RhbElkKTtcbiAgICBzZXRWYWxpZGF0ZVN0YXRlKHtcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgc3RhdHVzOiAnc3VjY2VzcydcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2hlY2tBY2NvdW50KF9hY2NvdW50KVxuICAgICAgICAudGhlbigoaXNFdGhlcmV1bSkgPT4ge1xuICAgICAgICAgIGNyZWF0ZUFjY291bnRXaXRoU2VjcmV0KHsgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgICBpc0FsbG93OiB0cnVlLFxuICAgICAgICAgICAgc2VjcmV0S2V5OiBfYWNjb3VudC5jb250ZW50LFxuICAgICAgICAgICAgcHVibGljS2V5OiBfYWNjb3VudC5nZW5lc2lzSGFzaCxcbiAgICAgICAgICAgIGlzRXRoZXJldW06IGlzRXRoZXJldW0gfSlcbiAgICAgICAgICAgIC50aGVuKCh7IGVycm9ycywgc3VjY2VzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsaWRhdGVTdGF0ZSh7fSk7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JzWzBdLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICBzZXRWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHQoZXJyb3IubWVzc2FnZSksXG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMzAwKTtcbiAgfSwgW2FjY291bnROYW1lLCBvbkNvbXBsZXRlLCBpbmFjdGl2ZU1vZGFsLCB0XSk7XG5cbiAgY29uc3QgeyBvbkNsb3NlLCBvbkVycm9yLCBvblN1Y2Nlc3MsIG9wZW5DYW1lcmEgfSA9IHVzZVNjYW5BY2NvdW50UXIobW9kYWxJZCwgaW1wb3J0UXJTY2FuLCBzZXRWYWxpZGF0ZVN0YXRlLCBvblN1Ym1pdCk7XG5cbiAgY29uc3Qgb25TY2FuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNoZWNrVW5sb2NrKCkudGhlbigoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb3BlbkNhbWVyYSgpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBVc2VyIGNhbmNlbGxlZCB1bmxvY2tcbiAgICB9KTtcbiAgfSwgW2NoZWNrVW5sb2NrLCBvcGVuQ2FtZXJhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfT5cbiAgICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgICAgb25CYWNrPXtvbkJhY2t9XG4gICAgICAgIHJpZ2h0Rm9vdGVyQnV0dG9uPXt7XG4gICAgICAgICAgY2hpbGRyZW46IGxvYWRpbmcgPyB0KCdDcmVhdGluZycpIDogdCgnU2NhbiBRUicpLFxuICAgICAgICAgIGljb246IEZvb3Rlckljb24sXG4gICAgICAgICAgb25DbGljazogb25TY2FuLFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgICAgfX1cbiAgICAgICAgc3ViSGVhZGVySWNvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiA8Q2xvc2VJY29uIC8+LFxuICAgICAgICAgICAgb25DbGljazogZ29Ib21lXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgICB0aXRsZT17dCgnSW1wb3J0IGJ5IFFSIGNvZGUnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NOKCdjb250YWluZXInKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Yi10aXRsZSc+XG4gICAgICAgICAgICB7dChcIlBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgaGF2ZSBncmFudGVkIFN1YldhbGxldCB0aGUgYWNjZXNzIHRvIHlvdXIgZGV2aWNlJ3MgY2FtZXJhLlwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICAgICAgICA8RHVhbExvZ29cbiAgICAgICAgICAgICAgbGVmdExvZ289eyhcbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NTZ9XG4gICAgICAgICAgICAgICAgICBzaGFwZT0nc3F1aXJjbGUnXG4gICAgICAgICAgICAgICAgICBzcmM9e0RlZmF1bHRMb2dvc01hcC5zdWJ3YWxsZXR9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbGlua0ljb249eyhcbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtTY2FufVxuICAgICAgICAgICAgICAgICAgc2l6ZT0nbWQnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgcmlnaHRMb2dvPXsoXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezU2fVxuICAgICAgICAgICAgICAgICAgc2hhcGU9J3NxdWlyY2xlJ1xuICAgICAgICAgICAgICAgICAgc3JjPXtJY29uTWFwLl9fcXJfY29kZV9ffVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezU2fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnN0cnVjdGlvbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5zdHJ1Y3Rpb24nPlxuICAgICAgICAgICAgICA8VHJhbnNcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IChcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9kb2NzLnN1YndhbGxldC5hcHAvbWFpbi9leHRlbnNpb24tdXNlci1ndWlkZS9hY2NvdW50LW1hbmFnZW1lbnQvaW1wb3J0LWFuZC1yZXN0b3JlLWFuLWFjY291bnQjaW1wb3J0LWJ5LXFyLWNvZGUnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpMThuS2V5PXtkZXRlY3RUcmFuc2xhdGUoJ0NsaWNrIHRoZSBcIlNjYW4gUVJcIiBidXR0b24sIG9yIHJlYWQgPGhpZ2hsaWdodD50aGlzIGluc3RydWN0aW9uPC9oaWdobGlnaHQ+LCBmb3IgbW9yZSBkZXRhaWxzLicpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsaWRhdGVTdGF0ZS5tZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Vycm9yLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIGN1c3RvbVNpemU9JzI4cHgnXG4gICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e1hDaXJjbGV9XG4gICAgICAgICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Vycm9yLWNvbnRlbnQnPnt2YWxpZGF0ZVN0YXRlLm1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgPFN3UXJTY2FubmVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgIGlkPXttb2RhbElkfVxuICAgICAgICAgICAgaXNFcnJvcj17ISF2YWxpZGF0ZVN0YXRlLnN0YXR1c31cbiAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgICBvbkVycm9yPXtvbkVycm9yfVxuICAgICAgICAgICAgb25TdWNjZXNzPXtvblN1Y2Nlc3N9XG4gICAgICAgICAgICBvdmVybGF5PXt2YWxpZGF0ZVN0YXRlLm1lc3NhZ2UgJiYgKDxRclNjYW5uZXJFcnJvck5vdGljZSBtZXNzYWdlPXt2YWxpZGF0ZVN0YXRlLm1lc3NhZ2V9IC8+KX1cbiAgICAgICAgICAgIHRpdGxlPXt0KCdTY2FuIFFSJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgSW1wb3J0UXJDb2RlID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLmNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmdcbiAgICB9LFxuXG4gICAgJy5zdWItdGl0bGUnOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3Rva2VuLnBhZGRpbmd9cHhgLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcubG9nbyc6IHtcbiAgICAgIG1hcmdpbjogYCR7dG9rZW4uY29udHJvbEhlaWdodExHfXB4IDBgLFxuICAgICAgJy0tbG9nby1zaXplJzogdG9rZW4uY29udHJvbEhlaWdodExHICsgdG9rZW4uY29udHJvbEhlaWdodFhTXG4gICAgfSxcblxuICAgICcuaW5zdHJ1Y3Rpb24nOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3Rva2VuLnBhZGRpbmd9cHhgLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4sXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNixcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNixcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgJy5saW5rJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yTGluayxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ1xuICAgIH0sXG5cbiAgICAnLmVycm9yLWNvbnRhaW5lcic6IHtcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvckVycm9yLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luWFhMIC0gMixcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLmVycm9yLWNvbnRlbnQnOiB7XG4gICAgICBtYXJnaW5MZWZ0OiB0b2tlbi5tYXJnaW5YUyxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2XG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydFFyQ29kZTtcbiJdLCJuYW1lcyI6WyJkZXRlY3RUcmFuc2xhdGUiLCJEZWZhdWx0TG9nb3NNYXAiLCJJY29uTWFwIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJDbG9zZUljb24iLCJEdWFsTG9nbyIsIlFyU2Nhbm5lckVycm9yTm90aWNlIiwiSU1QT1JUX0FDQ09VTlRfTU9EQUwiLCJ1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQiLCJ1c2VHZXREZWZhdWx0QWNjb3VudE5hbWUiLCJ1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCIsInVzZVVubG9ja0NoZWNrZXIiLCJ1c2VTY2FuQWNjb3VudFFyIiwidXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCIsInVzZURlZmF1bHROYXZpZ2F0ZSIsImNoZWNrUHVibGljQW5kUHJpdmF0ZUtleSIsImNyZWF0ZUFjY291bnRXaXRoU2VjcmV0IiwiaW1wb3J0UXJTY2FuIiwiSWNvbiIsIkltYWdlIiwiTW9kYWxDb250ZXh0IiwiU3dRclNjYW5uZXIiLCJDTiIsIlFyQ29kZSIsIlNjYW4iLCJYQ2lyY2xlIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRyYW5zIiwidXNlVHJhbnNsYXRpb24iLCJzdHlsZWQiLCJGb290ZXJJY29uIiwiY2hlY2tBY2NvdW50IiwicXJBY2NvdW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZW5lc2lzSGFzaCIsImNvbnRlbnQiLCJ0aGVuIiwiaXNFdGhlcmV1bSIsImlzVmFsaWQiLCJFcnJvciIsImNhdGNoIiwiZSIsIm1vZGFsSWQiLCJDb21wb25lbnQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInQiLCJnb0hvbWUiLCJhY2NvdW50TmFtZSIsIm9uQ29tcGxldGUiLCJvbkJhY2siLCJjaGVja1VubG9jayIsImluYWN0aXZlTW9kYWwiLCJ2YWxpZGF0ZVN0YXRlIiwic2V0VmFsaWRhdGVTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJfYWNjb3VudCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwibmFtZSIsImlzQWxsb3ciLCJzZWNyZXRLZXkiLCJwdWJsaWNLZXkiLCJlcnJvcnMiLCJzdWNjZXNzIiwiZXJyb3IiLCJmaW5hbGx5Iiwib25DbG9zZSIsIm9uRXJyb3IiLCJvblN1Y2Nlc3MiLCJvcGVuQ2FtZXJhIiwib25TY2FuIiwiY2hpbGRyZW4iLCJpY29uIiwib25DbGljayIsInN1YndhbGxldCIsIl9fcXJfY29kZV9fIiwiaGlnaGxpZ2h0IiwiSW1wb3J0UXJDb2RlIiwidGhlbWUiLCJ0b2tlbiIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzYiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmc2IiwiY29sb3IiLCJjb2xvclRleHREZXNjcmlwdGlvbiIsInRleHRBbGlnbiIsIm1hcmdpbiIsImNvbnRyb2xIZWlnaHRMRyIsImNvbnRyb2xIZWlnaHRYUyIsIm1hcmdpbkJvdHRvbSIsImNvbG9yTGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3JFcnJvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsIm1hcmdpblhYTCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsIm1hcmdpblhTIl0sInNvdXJjZVJvb3QiOiIifQ==