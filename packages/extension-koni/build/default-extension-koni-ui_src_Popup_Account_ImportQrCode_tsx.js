"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Account_ImportQrCode_tsx"],{

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

/***/ }),

/***/ "../extension-koni-ui/src/utils/scanner/attach.ts":
/*!********************************************************!*\
  !*** ../extension-koni-ui/src/utils/scanner/attach.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFunctionScan": () => (/* binding */ getFunctionScan),
/* harmony export */   "importQrScan": () => (/* binding */ importQrScan),
/* harmony export */   "qrSignerScan": () => (/* binding */ qrSignerScan),
/* harmony export */   "readOnlyScan": () => (/* binding */ readOnlyScan)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_constants_qr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/qr */ "../extension-koni-ui/src/constants/qr.ts");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/is/hex.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/encode.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/decode.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




const qrSignerScan = data => {
  const arr = data.split(':');
  const prefix = arr[0];
  let content = '';
  let genesisHash = '';
  let name = [];
  let isEthereum = false;
  if (prefix === _subwallet_extension_koni_ui_constants_qr__WEBPACK_IMPORTED_MODULE_0__.SUBSTRATE_PREFIX) {
    [content, genesisHash, ...name] = arr.slice(1);
  } else if (prefix === _subwallet_extension_koni_ui_constants_qr__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_PREFIX) {
    [content, ...name] = arr.slice(1);
    genesisHash = content.split('@')[1] || '';
    content = content.substring(0, 42);
    isEthereum = true;
  } else {
    return null;
  }
  return {
    content,
    genesisHash,
    isAddress: true,
    isEthereum,
    name: name.length ? name.join(':') : undefined,
    isReadOnly: false
  };
};
const importQrScan = data => {
  const arr = data.split(':');
  const prefix = arr[0];
  let content = '';
  let genesisHash = '';
  let name = [];
  const isEthereum = false;
  if (prefix === _subwallet_extension_koni_ui_constants_qr__WEBPACK_IMPORTED_MODULE_0__.SECRET_PREFIX) {
    [content, genesisHash, ...name] = arr.slice(1);
  } else {
    return null;
  }
  return {
    content,
    genesisHash,
    isAddress: false,
    isEthereum,
    name: name.length ? name.join(':') : undefined,
    isReadOnly: false
  };
};
const readOnlyScan = data => {
  if (!data) {
    return null;
  }
  if ((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__.isEthereumAddress)(data)) {
    return {
      content: data,
      genesisHash: data,
      isAddress: true,
      isEthereum: true,
      name: undefined,
      isReadOnly: true
    };
  }
  try {
    if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.isHex)(data)) {
      return null;
    }
    const address = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_3__.encodeAddress)((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_4__.decodeAddress)(data));
    return {
      content: address,
      genesisHash: data,
      isAddress: true,
      isEthereum: false,
      name: undefined,
      isReadOnly: true
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};
const getFunctionScan = type => {
  switch (type) {
    case _subwallet_extension_koni_ui_constants_qr__WEBPACK_IMPORTED_MODULE_0__.SCAN_TYPE.READONLY:
      return readOnlyScan;
    case _subwallet_extension_koni_ui_constants_qr__WEBPACK_IMPORTED_MODULE_0__.SCAN_TYPE.SECRET:
      return importQrScan;
    case _subwallet_extension_koni_ui_constants_qr__WEBPACK_IMPORTED_MODULE_0__.SCAN_TYPE.QR_SIGNER:
    default:
      return qrSignerScan;
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfQWNjb3VudF9JbXBvcnRRckNvZGVfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFa0U7QUFDa0I7QUFDTjtBQUNDO0FBQ0Y7QUFDcUI7QUFDZDtBQUN1QjtBQUNBO0FBQ0k7QUFDckI7QUFDSjtBQUNrQztBQUMxQjtBQUNhO0FBRzFCO0FBQ0o7QUFDakQ7QUFDMkI7QUFDVTtBQUNYO0FBQ2Y7QUFBQTtBQUFBO0FBSXZDLE1BQU1rQyxVQUFVLGdCQUNkLHdEQUFDLDREQUFJO0VBQ0gsWUFBWSxFQUFFVix1REFBTztFQUNyQixNQUFNLEVBQUM7QUFBTSxFQUVoQjtBQUVELE1BQU1XLFlBQVksR0FBSUMsU0FBb0IsSUFBdUI7RUFDL0QsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEtBQUs7SUFDdEN2QixpR0FBd0IsQ0FBQ29CLFNBQVMsQ0FBQ0ksV0FBVyxFQUFFSixTQUFTLENBQUNLLE9BQU8sQ0FBQyxDQUMvREMsSUFBSSxDQUFDLENBQUM7TUFBRUMsVUFBVTtNQUFFQztJQUFRLENBQUMsS0FBSztNQUNqQyxJQUFJQSxPQUFPLEVBQUU7UUFDWE4sT0FBTyxDQUFDSyxVQUFVLENBQUM7TUFDckIsQ0FBQyxNQUFNO1FBQ0xKLE1BQU0sQ0FBQyxJQUFJTSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztNQUN0QztJQUNGLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUVDLENBQVEsSUFBSztNQUNuQlIsTUFBTSxDQUFDUSxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTUMsT0FBTyxHQUFHLDhCQUE4QjtBQUU5QyxNQUFNQyxTQUEwQixHQUFJQyxLQUFZLElBQUs7RUFDbkRwQyxzSEFBK0IsRUFBRTtFQUVqQyxNQUFNO0lB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MUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvSW1wb3J0UXJDb2RlLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy91dGlscy9zY2FubmVyL2F0dGFjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgZGV0ZWN0VHJhbnNsYXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgRGVmYXVsdExvZ29zTWFwLCB7IEljb25NYXAgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2Fzc2V0cy9sb2dvJztcbmltcG9ydCB7IExheW91dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvSWNvbi9DbG9zZUljb24nO1xuaW1wb3J0IER1YWxMb2dvIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9Mb2dvL0R1YWxMb2dvJztcbmltcG9ydCBRclNjYW5uZXJFcnJvck5vdGljZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvUXIvU2Nhbm5lci9FcnJvck5vdGljZSc7XG5pbXBvcnQgeyBJTVBPUlRfQUNDT1VOVF9NT0RBTCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzL21vZGFsJztcbmltcG9ydCB1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9hY2NvdW50L3VzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCc7XG5pbXBvcnQgdXNlR2V0RGVmYXVsdEFjY291bnROYW1lIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VHZXREZWZhdWx0QWNjb3VudE5hbWUnO1xuaW1wb3J0IHVzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCc7XG5pbXBvcnQgdXNlVW5sb2NrQ2hlY2tlciBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VVbmxvY2tDaGVja2VyJztcbmltcG9ydCB1c2VTY2FuQWNjb3VudFFyIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvcXIvdXNlU2NhbkFjY291bnRRcic7XG5pbXBvcnQgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3JvdXRlci91c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkJztcbmltcG9ydCB1c2VEZWZhdWx0TmF2aWdhdGUgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9yb3V0ZXIvdXNlRGVmYXVsdE5hdmlnYXRlJztcbmltcG9ydCB7IGNoZWNrUHVibGljQW5kUHJpdmF0ZUtleSwgY3JlYXRlQWNjb3VudFdpdGhTZWNyZXQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzLCBWYWxpZGF0ZVN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBRckFjY291bnQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL3NjYW5uZXInO1xuaW1wb3J0IHsgaW1wb3J0UXJTY2FuIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9zY2FubmVyL2F0dGFjaCc7XG5pbXBvcnQgeyBJY29uLCBJbWFnZSwgTW9kYWxDb250ZXh0LCBTd1FyU2Nhbm5lciB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgUXJDb2RlLCBTY2FuLCBYQ2lyY2xlIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzXG5cbmNvbnN0IEZvb3Rlckljb24gPSAoXG4gIDxJY29uXG4gICAgcGhvc3Bob3JJY29uPXtRckNvZGV9XG4gICAgd2VpZ2h0PSdmaWxsJ1xuICAvPlxuKTtcblxuY29uc3QgY2hlY2tBY2NvdW50ID0gKHFyQWNjb3VudDogUXJBY2NvdW50KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hlY2tQdWJsaWNBbmRQcml2YXRlS2V5KHFyQWNjb3VudC5nZW5lc2lzSGFzaCwgcXJBY2NvdW50LmNvbnRlbnQpXG4gICAgICAudGhlbigoeyBpc0V0aGVyZXVtLCBpc1ZhbGlkIH0pID0+IHtcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICByZXNvbHZlKGlzRXRoZXJldW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludmFsaWQgUVIgY29kZScpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbW9kYWxJZCA9ICdpbXBvcnQtcXItY29kZS1zY2FubmVyLW1vZGFsJztcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHVzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQoKTtcblxuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBnb0hvbWUgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IGFjY291bnROYW1lID0gdXNlR2V0RGVmYXVsdEFjY291bnROYW1lKCk7XG4gIGNvbnN0IG9uQ29tcGxldGUgPSB1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQoKTtcbiAgY29uc3Qgb25CYWNrID0gdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQoSU1QT1JUX0FDQ09VTlRfTU9EQUwpO1xuICBjb25zdCBjaGVja1VubG9jayA9IHVzZVVubG9ja0NoZWNrZXIoKTtcblxuICBjb25zdCB7IGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICBjb25zdCBbdmFsaWRhdGVTdGF0ZSwgc2V0VmFsaWRhdGVTdGF0ZV0gPSB1c2VTdGF0ZTxWYWxpZGF0ZVN0YXRlPih7fSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChfYWNjb3VudDogUXJBY2NvdW50KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBpbmFjdGl2ZU1vZGFsKG1vZGFsSWQpO1xuICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgbWVzc2FnZTogJycsXG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJ1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjaGVja0FjY291bnQoX2FjY291bnQpXG4gICAgICAgIC50aGVuKChpc0V0aGVyZXVtKSA9PiB7XG4gICAgICAgICAgY3JlYXRlQWNjb3VudFdpdGhTZWNyZXQoeyBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgIGlzQWxsb3c6IHRydWUsXG4gICAgICAgICAgICBzZWNyZXRLZXk6IF9hY2NvdW50LmNvbnRlbnQsXG4gICAgICAgICAgICBwdWJsaWNLZXk6IF9hY2NvdW50LmdlbmVzaXNIYXNoLFxuICAgICAgICAgICAgaXNFdGhlcmV1bTogaXNFdGhlcmV1bSB9KVxuICAgICAgICAgICAgLnRoZW4oKHsgZXJyb3JzLCBzdWNjZXNzIH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWxpZGF0ZVN0YXRlKHt9KTtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsaWRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvcnNbMF0ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgc2V0VmFsaWRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogdChlcnJvci5tZXNzYWdlKSxcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9LCAzMDApO1xuICB9LCBbYWNjb3VudE5hbWUsIG9uQ29tcGxldGUsIGluYWN0aXZlTW9kYWwsIHRdKTtcblxuICBjb25zdCB7IG9uQ2xvc2UsIG9uRXJyb3IsIG9uU3VjY2Vzcywgb3BlbkNhbWVyYSB9ID0gdXNlU2NhbkFjY291bnRRcihtb2RhbElkLCBpbXBvcnRRclNjYW4sIHNldFZhbGlkYXRlU3RhdGUsIG9uU3VibWl0KTtcblxuICBjb25zdCBvblNjYW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2hlY2tVbmxvY2soKS50aGVuKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvcGVuQ2FtZXJhKCk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIC8vIFVzZXIgY2FuY2VsbGVkIHVubG9ja1xuICAgIH0pO1xuICB9LCBbY2hlY2tVbmxvY2ssIG9wZW5DYW1lcmFdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlciBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9PlxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICBvbkJhY2s9e29uQmFja31cbiAgICAgICAgcmlnaHRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICBjaGlsZHJlbjogbG9hZGluZyA/IHQoJ0NyZWF0aW5nJykgOiB0KCdTY2FuIFFSJyksXG4gICAgICAgICAgaWNvbjogRm9vdGVySWNvbixcbiAgICAgICAgICBvbkNsaWNrOiBvblNjYW4sXG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZ1xuICAgICAgICB9fVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246IDxDbG9zZUljb24gLz4sXG4gICAgICAgICAgICBvbkNsaWNrOiBnb0hvbWVcbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAgIHRpdGxlPXt0KCdJbXBvcnQgYnkgUVIgY29kZScpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q04oJ2NvbnRhaW5lcicpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ViLXRpdGxlJz5cbiAgICAgICAgICAgIHt0KFwiUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBoYXZlIGdyYW50ZWQgU3ViV2FsbGV0IHRoZSBhY2Nlc3MgdG8geW91ciBkZXZpY2UncyBjYW1lcmEuXCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cbiAgICAgICAgICAgIDxEdWFsTG9nb1xuICAgICAgICAgICAgICBsZWZ0TG9nbz17KFxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1Nn1cbiAgICAgICAgICAgICAgICAgIHNoYXBlPSdzcXVpcmNsZSdcbiAgICAgICAgICAgICAgICAgIHNyYz17RGVmYXVsdExvZ29zTWFwLnN1YndhbGxldH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs1Nn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBsaW5rSWNvbj17KFxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e1NjYW59XG4gICAgICAgICAgICAgICAgICBzaXplPSdtZCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICByaWdodExvZ289eyhcbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NTZ9XG4gICAgICAgICAgICAgICAgICBzaGFwZT0nc3F1aXJjbGUnXG4gICAgICAgICAgICAgICAgICBzcmM9e0ljb25NYXAuX19xcl9jb2RlX199XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luc3RydWN0aW9uJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnN0cnVjdGlvbic+XG4gICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogKFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGluaydcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2RvY3Muc3Vid2FsbGV0LmFwcC9tYWluL2V4dGVuc2lvbi11c2VyLWd1aWRlL2FjY291bnQtbWFuYWdlbWVudC9pbXBvcnQtYW5kLXJlc3RvcmUtYW4tYWNjb3VudCNpbXBvcnQtYnktcXItY29kZSdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGkxOG5LZXk9e2RldGVjdFRyYW5zbGF0ZSgnQ2xpY2sgdGhlIFwiU2NhbiBRUlwiIGJ1dHRvbiwgb3IgcmVhZCA8aGlnaGxpZ2h0PnRoaXMgaW5zdHJ1Y3Rpb248L2hpZ2hsaWdodD4sIGZvciBtb3JlIGRldGFpbHMuJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWxpZGF0ZVN0YXRlLm1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXJyb3ItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT0nMjhweCdcbiAgICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17WENpcmNsZX1cbiAgICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZXJyb3ItY29udGVudCc+e3ZhbGlkYXRlU3RhdGUubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8U3dRclNjYW5uZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgaWQ9e21vZGFsSWR9XG4gICAgICAgICAgICBpc0Vycm9yPXshIXZhbGlkYXRlU3RhdGUuc3RhdHVzfVxuICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgIG9uRXJyb3I9e29uRXJyb3J9XG4gICAgICAgICAgICBvblN1Y2Nlc3M9e29uU3VjY2Vzc31cbiAgICAgICAgICAgIG92ZXJsYXk9e3ZhbGlkYXRlU3RhdGUubWVzc2FnZSAmJiAoPFFyU2Nhbm5lckVycm9yTm90aWNlIG1lc3NhZ2U9e3ZhbGlkYXRlU3RhdGUubWVzc2FnZX0gLz4pfVxuICAgICAgICAgICAgdGl0bGU9e3QoJ1NjYW4gUVInKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBJbXBvcnRRckNvZGUgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgICcuY29udGFpbmVyJzoge1xuICAgICAgcGFkZGluZzogdG9rZW4ucGFkZGluZ1xuICAgIH0sXG5cbiAgICAnLnN1Yi10aXRsZSc6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNixcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNixcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgJy5sb2dvJzoge1xuICAgICAgbWFyZ2luOiBgJHt0b2tlbi5jb250cm9sSGVpZ2h0TEd9cHggMGAsXG4gICAgICAnLS1sb2dvLXNpemUnOiB0b2tlbi5jb250cm9sSGVpZ2h0TEcgKyB0b2tlbi5jb250cm9sSGVpZ2h0WFNcbiAgICB9LFxuXG4gICAgJy5pbnN0cnVjdGlvbic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbixcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLmxpbmsnOiB7XG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JMaW5rLFxuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfSxcblxuICAgICcuZXJyb3ItY29udGFpbmVyJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3IsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5YWEwgLSAyLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcuZXJyb3ItY29udGVudCc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRva2VuLm1hcmdpblhTLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzZcbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0UXJDb2RlO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEVUSEVSRVVNX1BSRUZJWCwgU0NBTl9UWVBFLCBTRUNSRVRfUFJFRklYLCBTVUJTVFJBVEVfUFJFRklYIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMvcXInO1xuaW1wb3J0IHsgUXJBY2NvdW50IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcy9zY2FubmVyJztcblxuaW1wb3J0IHsgaXNIZXggfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5pbXBvcnQgeyBkZWNvZGVBZGRyZXNzLCBlbmNvZGVBZGRyZXNzLCBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmV4cG9ydCBjb25zdCBxclNpZ25lclNjYW4gPSAoZGF0YTogc3RyaW5nKTogUXJBY2NvdW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IGFycjogc3RyaW5nW10gPSBkYXRhLnNwbGl0KCc6Jyk7XG5cbiAgY29uc3QgcHJlZml4ID0gYXJyWzBdO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgZ2VuZXNpc0hhc2ggPSAnJztcbiAgbGV0IG5hbWU6IHN0cmluZ1tdID0gW107XG4gIGxldCBpc0V0aGVyZXVtID0gZmFsc2U7XG5cbiAgaWYgKHByZWZpeCA9PT0gU1VCU1RSQVRFX1BSRUZJWCkge1xuICAgIFtjb250ZW50LCBnZW5lc2lzSGFzaCwgLi4ubmFtZV0gPSBhcnIuc2xpY2UoMSk7XG4gIH0gZWxzZSBpZiAocHJlZml4ID09PSBFVEhFUkVVTV9QUkVGSVgpIHtcbiAgICBbY29udGVudCwgLi4ubmFtZV0gPSBhcnIuc2xpY2UoMSk7XG4gICAgZ2VuZXNpc0hhc2ggPSBjb250ZW50LnNwbGl0KCdAJylbMV0gfHwgJyc7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIDQyKTtcbiAgICBpc0V0aGVyZXVtID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGVudCxcbiAgICBnZW5lc2lzSGFzaCxcbiAgICBpc0FkZHJlc3M6IHRydWUsXG4gICAgaXNFdGhlcmV1bSxcbiAgICBuYW1lOiBuYW1lLmxlbmd0aCA/IG5hbWUuam9pbignOicpIDogdW5kZWZpbmVkLFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgaW1wb3J0UXJTY2FuID0gKGRhdGE6IHN0cmluZyk6IFFyQWNjb3VudCB8IG51bGwgPT4ge1xuICBjb25zdCBhcnI6IHN0cmluZ1tdID0gZGF0YS5zcGxpdCgnOicpO1xuXG4gIGNvbnN0IHByZWZpeCA9IGFyclswXTtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IGdlbmVzaXNIYXNoID0gJyc7XG4gIGxldCBuYW1lOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBpc0V0aGVyZXVtID0gZmFsc2U7XG5cbiAgaWYgKHByZWZpeCA9PT0gU0VDUkVUX1BSRUZJWCkge1xuICAgIFtjb250ZW50LCBnZW5lc2lzSGFzaCwgLi4ubmFtZV0gPSBhcnIuc2xpY2UoMSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQsXG4gICAgZ2VuZXNpc0hhc2gsXG4gICAgaXNBZGRyZXNzOiBmYWxzZSxcbiAgICBpc0V0aGVyZXVtLFxuICAgIG5hbWU6IG5hbWUubGVuZ3RoID8gbmFtZS5qb2luKCc6JykgOiB1bmRlZmluZWQsXG4gICAgaXNSZWFkT25seTogZmFsc2VcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWFkT25seVNjYW4gPSAoZGF0YTogc3RyaW5nKTogUXJBY2NvdW50IHwgbnVsbCA9PiB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlzRXRoZXJldW1BZGRyZXNzKGRhdGEpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICBnZW5lc2lzSGFzaDogZGF0YSxcbiAgICAgIGlzQWRkcmVzczogdHJ1ZSxcbiAgICAgIGlzRXRoZXJldW06IHRydWUsXG4gICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICBpc1JlYWRPbmx5OiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGlzSGV4KGRhdGEpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZW5jb2RlQWRkcmVzcyhkZWNvZGVBZGRyZXNzKGRhdGEpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBhZGRyZXNzLFxuICAgICAgZ2VuZXNpc0hhc2g6IGRhdGEsXG4gICAgICBpc0FkZHJlc3M6IHRydWUsXG4gICAgICBpc0V0aGVyZXVtOiBmYWxzZSxcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIGlzUmVhZE9ubHk6IHRydWVcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEZ1bmN0aW9uU2NhbiA9ICh0eXBlOiBTQ0FOX1RZUEUpOiAoKGRhdGE6IHN0cmluZykgPT4gUXJBY2NvdW50IHwgbnVsbCkgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNDQU5fVFlQRS5SRUFET05MWTpcbiAgICAgIHJldHVybiByZWFkT25seVNjYW47XG4gICAgY2FzZSBTQ0FOX1RZUEUuU0VDUkVUOlxuICAgICAgcmV0dXJuIGltcG9ydFFyU2NhbjtcbiAgICBjYXNlIFNDQU5fVFlQRS5RUl9TSUdORVI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBxclNpZ25lclNjYW47XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZGV0ZWN0VHJhbnNsYXRlIiwiRGVmYXVsdExvZ29zTWFwIiwiSWNvbk1hcCIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiQ2xvc2VJY29uIiwiRHVhbExvZ28iLCJRclNjYW5uZXJFcnJvck5vdGljZSIsIklNUE9SVF9BQ0NPVU5UX01PREFMIiwidXNlQ29tcGxldGVDcmVhdGVBY2NvdW50IiwidXNlR2V0RGVmYXVsdEFjY291bnROYW1lIiwidXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQiLCJ1c2VVbmxvY2tDaGVja2VyIiwidXNlU2NhbkFjY291bnRRciIsInVzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQiLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJjaGVja1B1YmxpY0FuZFByaXZhdGVLZXkiLCJjcmVhdGVBY2NvdW50V2l0aFNlY3JldCIsImltcG9ydFFyU2NhbiIsIkljb24iLCJJbWFnZSIsIk1vZGFsQ29udGV4dCIsIlN3UXJTY2FubmVyIiwiQ04iLCJRckNvZGUiLCJTY2FuIiwiWENpcmNsZSIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJUcmFucyIsInVzZVRyYW5zbGF0aW9uIiwic3R5bGVkIiwiRm9vdGVySWNvbiIsImNoZWNrQWNjb3VudCIsInFyQWNjb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2VuZXNpc0hhc2giLCJjb250ZW50IiwidGhlbiIsImlzRXRoZXJldW0iLCJpc1ZhbGlkIiwiRXJyb3IiLCJjYXRjaCIsImUiLCJtb2RhbElkIiwiQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0IiwiZ29Ib21lIiwiYWNjb3VudE5hbWUiLCJvbkNvbXBsZXRlIiwib25CYWNrIiwiY2hlY2tVbmxvY2siLCJpbmFjdGl2ZU1vZGFsIiwidmFsaWRhdGVTdGF0ZSIsInNldFZhbGlkYXRlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiX2FjY291bnQiLCJtZXNzYWdlIiwic3RhdHVzIiwic2V0VGltZW91dCIsIm5hbWUiLCJpc0FsbG93Iiwic2VjcmV0S2V5IiwicHVibGljS2V5IiwiZXJyb3JzIiwic3VjY2VzcyIsImVycm9yIiwiZmluYWxseSIsIm9uQ2xvc2UiLCJvbkVycm9yIiwib25TdWNjZXNzIiwib3BlbkNhbWVyYSIsIm9uU2NhbiIsImNoaWxkcmVuIiwiaWNvbiIsIm9uQ2xpY2siLCJzdWJ3YWxsZXQiLCJfX3FyX2NvZGVfXyIsImhpZ2hsaWdodCIsIkltcG9ydFFyQ29kZSIsInRoZW1lIiwidG9rZW4iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImNvbG9yIiwiY29sb3JUZXh0RGVzY3JpcHRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJjb250cm9sSGVpZ2h0TEciLCJjb250cm9sSGVpZ2h0WFMiLCJtYXJnaW5Cb3R0b20iLCJjb2xvckxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yRXJyb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5YWEwiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5YUyIsIkVUSEVSRVVNX1BSRUZJWCIsIlNDQU5fVFlQRSIsIlNFQ1JFVF9QUkVGSVgiLCJTVUJTVFJBVEVfUFJFRklYIiwiaXNIZXgiLCJkZWNvZGVBZGRyZXNzIiwiZW5jb2RlQWRkcmVzcyIsImlzRXRoZXJldW1BZGRyZXNzIiwicXJTaWduZXJTY2FuIiwiZGF0YSIsImFyciIsInNwbGl0IiwicHJlZml4Iiwic2xpY2UiLCJzdWJzdHJpbmciLCJpc0FkZHJlc3MiLCJsZW5ndGgiLCJqb2luIiwidW5kZWZpbmVkIiwiaXNSZWFkT25seSIsInJlYWRPbmx5U2NhbiIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0RnVuY3Rpb25TY2FuIiwidHlwZSIsIlJFQURPTkxZIiwiU0VDUkVUIiwiUVJfU0lHTkVSIl0sInNvdXJjZVJvb3QiOiIifQ==