"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Account_ConnectQrSigner_ConnectKeystone_tsx"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfQWNjb3VudF9Db25uZWN0UXJTaWduZXJfQ29ubmVjdEtleXN0b25lX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRXVFO0FBQ3dCO0FBRXJFO0FBQ3FCO0FBQ1I7QUFBQTtBQUl2QyxNQUFNSyxTQUErQixHQUFHLE1BQU07RUFDNUMsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR0gsNkRBQWMsRUFBRTtFQUU5QixvQkFDRSx1REFBQyx3R0FBZTtJQUNkLFVBQVUsRUFBRUcsQ0FBQyxDQUFDLFVBQVUsQ0FBRTtJQUMxQixjQUFjLEVBQUUsaUdBQWtHO0lBQ2xILE9BQU8sRUFBRU4seUZBQXlCO0lBQ2xDLFFBQVEsRUFBRU0sQ0FBQyxDQUFDLHNFQUFzRSxDQUFFO0lBQ3BGLEtBQUssRUFBRUEsQ0FBQyxDQUFDLHlCQUF5QjtFQUFFLEVBQ3BDO0FBRU4sQ0FBQztBQUVELE1BQU1FLGVBQWUsR0FBR0osNkRBQU0sQ0FBQ0MsU0FBUyxDQUFDO0VBQUE7RUFBQTtBQUFBLEdBQVEsQ0FBQztFQUFFSSxLQUFLLEVBQUU7SUFBRUM7RUFBTTtBQUFTLENBQUMsS0FBSztFQUNoRixPQUFPLENBRVAsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlRixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEM5QjtBQUNBOztBQUVrRTtBQUNZO0FBQ0M7QUFDRjtBQUNxQjtBQUNkO0FBQ3VCO0FBQ0E7QUFDSTtBQUN6QjtBQUNrQztBQUMxQjtBQUNiO0FBR0E7QUFDSjtBQUNqRDtBQUNxQjtBQUNnQjtBQUNYO0FBQ2Y7QUFFWTtBQUFBO0FBQUE7QUFFbkQsTUFBTTZCLFVBQVUsZ0JBQ2Qsd0RBQUMsNERBQUk7RUFDSCxZQUFZLEVBQUVOLHVEQUFPO0VBQ3JCLE1BQU0sRUFBQztBQUFNLEVBRWhCO0FBVUQsTUFBTU8sT0FBTyxH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LENBQUM7SUFFbEQsT0FBTztNQUNMbkQsT0FBTyxFQUFFRCxPQUFPO01BQ2hCRSxXQUFXLEVBQUVrRCxJQUFJO01BQ2pCTSxTQUFTLEVBQUUsSUFBSTtNQUNmdkQsVUFBVSxFQUFFLEtBQUs7TUFDakJKLElBQUksRUFBRTZELFNBQVM7TUFDZnZELFVBQVUsRUFBRTtJQUNkLENBQUM7RUFDSCxDQUFDLENBQUMsT0FBTzBELENBQUMsRUFBRTtJQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDO0lBRWQsT0FBTyxJQUFJO0VBQ2I7QUFDRixDQUFDO0FBRU0sTUFBTUcsZUFBZSxHQUFJQyxJQUFlLElBQTJDO0VBQ3hGLFFBQVFBLElBQUk7SUFDVixLQUFLdEIseUZBQWtCO01BQ3JCLE9BQU9pQixZQUFZO0lBQ3JCLEtBQUtqQix1RkFBZ0I7TUFDbkIsT0FBT2dCLFlBQVk7SUFDckIsS0FBS2hCLDBGQUFtQjtJQUN4QjtNQUNFLE9BQU9qRixZQUFZO0VBQUM7QUFFMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvQ29ubmVjdFFyU2lnbmVyL0Nvbm5lY3RLZXlzdG9uZS50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvQWNjb3VudC9Db25uZWN0UXJTaWduZXIvaW5kZXgudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL3V0aWxzL3NjYW5uZXIvYXR0YWNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgRGVmYXVsdExvZ29zTWFwIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvYXNzZXRzL2xvZ28nO1xuaW1wb3J0IENvbm5lY3RRclNpZ25lciBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL1BvcHVwL0FjY291bnQvQ29ubmVjdFFyU2lnbmVyL2luZGV4JztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFRoZW1lUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29ubmVjdFFyU2lnbmVyXG4gICAgICBkZXZpY2VOYW1lPXt0KCdLZXlzdG9uZScpfVxuICAgICAgaW5zdHJ1Y3Rpb25Vcmw9eydodHRwczovL2RvY3Muc3Vid2FsbGV0LmFwcC9tYWluL2V4dGVuc2lvbi11c2VyLWd1aWRlL2FjY291bnQtbWFuYWdlbWVudC9jb25uZWN0LWtleXN0b25lLWRldmljZSd9XG4gICAgICBsb2dvVXJsPXtEZWZhdWx0TG9nb3NNYXAua2V5c3RvbmV9XG4gICAgICBzdWJUaXRsZT17dCgnT3BlbiBcIlNvZnR3YXJlIFdhbGxldFwiIHNlY3Rpb24gb24geW91ciBLZXlzdG9uZSBhbmQgY2hvb3NlIFN1YldhbGxldCcpfVxuICAgICAgdGl0bGU9e3QoJ0Nvbm5lY3QgS2V5c3RvbmUgZGV2aWNlJyl9XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IENvbm5lY3RLZXlzdG9uZSA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG5cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0S2V5c3RvbmU7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgZGV0ZWN0VHJhbnNsYXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ljb24vQ2xvc2VJY29uJztcbmltcG9ydCBEdWFsTG9nbyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvTG9nby9EdWFsTG9nbyc7XG5pbXBvcnQgUXJTY2FubmVyRXJyb3JOb3RpY2UgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL1FyL1NjYW5uZXIvRXJyb3JOb3RpY2UnO1xuaW1wb3J0IHsgQVRUQUNIX0FDQ09VTlRfTU9EQUwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cy9tb2RhbCc7XG5pbXBvcnQgdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR2V0RGVmYXVsdEFjY291bnROYW1lJztcbmltcG9ydCB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZVNjYW5BY2NvdW50UXIgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9xci91c2VTY2FuQWNjb3VudFFyJztcbmltcG9ydCB1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQnO1xuaW1wb3J0IHVzZURlZmF1bHROYXZpZ2F0ZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3JvdXRlci91c2VEZWZhdWx0TmF2aWdhdGUnO1xuaW1wb3J0IHsgY3JlYXRlQWNjb3VudEV4dGVybmFsVjIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzLCBWYWxpZGF0ZVN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBRckFjY291bnQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL3NjYW5uZXInO1xuaW1wb3J0IHsgcXJTaWduZXJTY2FuIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9zY2FubmVyL2F0dGFjaCc7XG5pbXBvcnQgeyBJY29uLCBJbWFnZSwgTW9kYWxDb250ZXh0LCBTd1FyU2Nhbm5lciB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgUXJDb2RlLCBYQ2lyY2xlIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBEZWZhdWx0TG9nb3NNYXAgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2xvZ28nO1xuXG5jb25zdCBGb290ZXJJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17UXJDb2RlfVxuICAgIHdlaWdodD0nZmlsbCdcbiAgLz5cbik7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJUaXRsZTogc3RyaW5nO1xuICBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gIGluc3RydWN0aW9uVXJsOiBzdHJpbmc7XG4gIGxvZ29Vcmw6IHN0cmluZztcbn1cblxuY29uc3QgbW9kYWxJZCA9ICdhdHRhY2gtcXItc2lnbmVyLXNjYW5uZXItbW9kYWwnO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCgpO1xuXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBkZXZpY2VOYW1lLCBpbnN0cnVjdGlvblVybCwgbG9nb1VybCwgc3ViVGl0bGUsIHRpdGxlIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG5cbiAgY29uc3Qgb25Db21wbGV0ZSA9IHVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCgpO1xuICBjb25zdCBvbkJhY2sgPSB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudChBVFRBQ0hfQUNDT1VOVF9NT0RBTCk7XG5cbiAgY29uc3QgYWNjb3VudE5hbWUgPSB1c2VHZXREZWZhdWx0QWNjb3VudE5hbWUoKTtcbiAgY29uc3QgeyBpbmFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgY29uc3QgW3ZhbGlkYXRlU3RhdGUsIHNldFZhbGlkYXRlU3RhdGVdID0gdXNlU3RhdGU8VmFsaWRhdGVTdGF0ZT4oe30pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoYWNjb3VudDogUXJBY2NvdW50KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBpbmFjdGl2ZU1vZGFsKG1vZGFsSWQpO1xuICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgbWVzc2FnZTogJycsXG4gICAgICBzdGF0dXM6ICd2YWxpZGF0aW5nJ1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjcmVhdGVBY2NvdW50RXh0ZXJuYWxWMih7XG4gICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICBhZGRyZXNzOiBhY2NvdW50LmNvbnRlbnQsXG4gICAgICAgIGdlbmVzaXNIYXNoOiAnJyxcbiAgICAgICAgaXNFdGhlcmV1bTogYWNjb3VudC5pc0V0aGVyZXVtLFxuICAgICAgICBpc0FsbG93ZWQ6IHRydWUsXG4gICAgICAgIGlzUmVhZE9ubHk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvcnNbMF0ubWVzc2FnZSxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VmFsaWRhdGVTdGF0ZSh7fSk7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgIHNldFZhbGlkYXRlU3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG4gIH0sIFthY2NvdW50TmFtZSwgb25Db21wbGV0ZSwgaW5hY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IHsgb25DbG9zZSwgb25FcnJvciwgb25TdWNjZXNzLCBvcGVuQ2FtZXJhIH0gPSB1c2VTY2FuQWNjb3VudFFyKG1vZGFsSWQsIHFyU2lnbmVyU2Nhbiwgc2V0VmFsaWRhdGVTdGF0ZSwgb25TdWJtaXQpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX0+XG4gICAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICAgIG9uQmFjaz17b25CYWNrfVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGNoaWxkcmVuOiBsb2FkaW5nID8gdCgnQ3JlYXRpbmcnKSA6IHQoJ1NjYW4gUVIgY29kZScpLFxuICAgICAgICAgIGljb246IEZvb3Rlckljb24sXG4gICAgICAgICAgb25DbGljazogb3BlbkNhbWVyYSxcbiAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXG4gICAgICAgIH19XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogPENsb3NlSWNvbiAvPixcbiAgICAgICAgICAgIG9uQ2xpY2s6IGdvSG9tZVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q04oJ2NvbnRhaW5lcicpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ViLXRpdGxlJz5cbiAgICAgICAgICAgIHtzdWJUaXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICAgICAgICA8RHVhbExvZ29cbiAgICAgICAgICAgICAgbGVmdExvZ289eyhcbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NTZ9XG4gICAgICAgICAgICAgICAgICBzaGFwZT0nc3F1aXJjbGUnXG4gICAgICAgICAgICAgICAgICBzcmM9e0RlZmF1bHRMb2dvc01hcC5zdWJ3YWxsZXR9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgcmlnaHRMb2dvPXsoXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezU2fVxuICAgICAgICAgICAgICAgICAgc2hhcGU9J3NxdWlyY2xlJ1xuICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvVXJsfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezU2fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnN0cnVjdGlvbic+XG4gICAgICAgICAgICA8VHJhbnNcbiAgICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaW5rJ1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtpbnN0cnVjdGlvblVybH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpMThuS2V5PXtkZXRlY3RUcmFuc2xhdGUoJ3t7ZGV2aWNlTmFtZX19IHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIFFSIGNvZGUgdG8gc2Nhbi4gUmVhZCA8aGlnaGxpZ2h0PnRoaXMgaW5zdHJ1Y3Rpb248L2hpZ2hsaWdodD4sIGZvciBtb3JlIGRldGFpbHMuJyl9XG4gICAgICAgICAgICAgIHZhbHVlcz17eyBkZXZpY2VOYW1lIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbGlkYXRlU3RhdGUubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBjdXN0b21TaXplPScyOHB4J1xuICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtYQ2lyY2xlfVxuICAgICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdlcnJvci1jb250ZW50Jz57dmFsaWRhdGVTdGF0ZS5tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxTd1FyU2Nhbm5lclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBpZD17bW9kYWxJZH1cbiAgICAgICAgICAgIGlzRXJyb3I9eyEhdmFsaWRhdGVTdGF0ZS5zdGF0dXN9XG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgb25FcnJvcj17b25FcnJvcn1cbiAgICAgICAgICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxuICAgICAgICAgICAgb3ZlcmxheT17dmFsaWRhdGVTdGF0ZS5tZXNzYWdlICYmICg8UXJTY2FubmVyRXJyb3JOb3RpY2UgbWVzc2FnZT17dmFsaWRhdGVTdGF0ZS5tZXNzYWdlfSAvPil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgQ29ubmVjdFFyU2lnbmVyID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLmNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmdcbiAgICB9LFxuXG4gICAgJy5zdWItdGl0bGUnOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3Rva2VuLnBhZGRpbmd9cHhgLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcubG9nbyc6IHtcbiAgICAgIG1hcmdpbjogYCR7dG9rZW4uY29udHJvbEhlaWdodExHfXB4IDBgLFxuICAgICAgJy0tbG9nby1zaXplJzogdG9rZW4uY29udHJvbEhlaWdodExHICsgdG9rZW4uY29udHJvbEhlaWdodFhTXG4gICAgfSxcblxuICAgICcuaW5zdHJ1Y3Rpb24nOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3Rva2VuLnBhZGRpbmd9cHhgLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4sXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNixcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNixcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgJy5saW5rJzoge1xuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JMaW5rLFxuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfSxcblxuICAgICcuZXJyb3ItY29udGFpbmVyJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3IsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5YWEwgLSAyLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcuZXJyb3ItY29udGVudCc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRva2VuLm1hcmdpblhTLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzZcbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdFFyU2lnbmVyO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEVUSEVSRVVNX1BSRUZJWCwgU0NBTl9UWVBFLCBTRUNSRVRfUFJFRklYLCBTVUJTVFJBVEVfUFJFRklYIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMvcXInO1xuaW1wb3J0IHsgUXJBY2NvdW50IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcy9zY2FubmVyJztcblxuaW1wb3J0IHsgaXNIZXggfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5pbXBvcnQgeyBkZWNvZGVBZGRyZXNzLCBlbmNvZGVBZGRyZXNzLCBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmV4cG9ydCBjb25zdCBxclNpZ25lclNjYW4gPSAoZGF0YTogc3RyaW5nKTogUXJBY2NvdW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IGFycjogc3RyaW5nW10gPSBkYXRhLnNwbGl0KCc6Jyk7XG5cbiAgY29uc3QgcHJlZml4ID0gYXJyWzBdO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgZ2VuZXNpc0hhc2ggPSAnJztcbiAgbGV0IG5hbWU6IHN0cmluZ1tdID0gW107XG4gIGxldCBpc0V0aGVyZXVtID0gZmFsc2U7XG5cbiAgaWYgKHByZWZpeCA9PT0gU1VCU1RSQVRFX1BSRUZJWCkge1xuICAgIFtjb250ZW50LCBnZW5lc2lzSGFzaCwgLi4ubmFtZV0gPSBhcnIuc2xpY2UoMSk7XG4gIH0gZWxzZSBpZiAocHJlZml4ID09PSBFVEhFUkVVTV9QUkVGSVgpIHtcbiAgICBbY29udGVudCwgLi4ubmFtZV0gPSBhcnIuc2xpY2UoMSk7XG4gICAgZ2VuZXNpc0hhc2ggPSBjb250ZW50LnNwbGl0KCdAJylbMV0gfHwgJyc7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIDQyKTtcbiAgICBpc0V0aGVyZXVtID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGVudCxcbiAgICBnZW5lc2lzSGFzaCxcbiAgICBpc0FkZHJlc3M6IHRydWUsXG4gICAgaXNFdGhlcmV1bSxcbiAgICBuYW1lOiBuYW1lLmxlbmd0aCA/IG5hbWUuam9pbignOicpIDogdW5kZWZpbmVkLFxuICAgIGlzUmVhZE9ubHk6IGZhbHNlXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgaW1wb3J0UXJTY2FuID0gKGRhdGE6IHN0cmluZyk6IFFyQWNjb3VudCB8IG51bGwgPT4ge1xuICBjb25zdCBhcnI6IHN0cmluZ1tdID0gZGF0YS5zcGxpdCgnOicpO1xuXG4gIGNvbnN0IHByZWZpeCA9IGFyclswXTtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IGdlbmVzaXNIYXNoID0gJyc7XG4gIGxldCBuYW1lOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBpc0V0aGVyZXVtID0gZmFsc2U7XG5cbiAgaWYgKHByZWZpeCA9PT0gU0VDUkVUX1BSRUZJWCkge1xuICAgIFtjb250ZW50LCBnZW5lc2lzSGFzaCwgLi4ubmFtZV0gPSBhcnIuc2xpY2UoMSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQsXG4gICAgZ2VuZXNpc0hhc2gsXG4gICAgaXNBZGRyZXNzOiBmYWxzZSxcbiAgICBpc0V0aGVyZXVtLFxuICAgIG5hbWU6IG5hbWUubGVuZ3RoID8gbmFtZS5qb2luKCc6JykgOiB1bmRlZmluZWQsXG4gICAgaXNSZWFkT25seTogZmFsc2VcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWFkT25seVNjYW4gPSAoZGF0YTogc3RyaW5nKTogUXJBY2NvdW50IHwgbnVsbCA9PiB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlzRXRoZXJldW1BZGRyZXNzKGRhdGEpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICBnZW5lc2lzSGFzaDogZGF0YSxcbiAgICAgIGlzQWRkcmVzczogdHJ1ZSxcbiAgICAgIGlzRXRoZXJldW06IHRydWUsXG4gICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICBpc1JlYWRPbmx5OiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGlzSGV4KGRhdGEpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZW5jb2RlQWRkcmVzcyhkZWNvZGVBZGRyZXNzKGRhdGEpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBhZGRyZXNzLFxuICAgICAgZ2VuZXNpc0hhc2g6IGRhdGEsXG4gICAgICBpc0FkZHJlc3M6IHRydWUsXG4gICAgICBpc0V0aGVyZXVtOiBmYWxzZSxcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIGlzUmVhZE9ubHk6IHRydWVcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEZ1bmN0aW9uU2NhbiA9ICh0eXBlOiBTQ0FOX1RZUEUpOiAoKGRhdGE6IHN0cmluZykgPT4gUXJBY2NvdW50IHwgbnVsbCkgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNDQU5fVFlQRS5SRUFET05MWTpcbiAgICAgIHJldHVybiByZWFkT25seVNjYW47XG4gICAgY2FzZSBTQ0FOX1RZUEUuU0VDUkVUOlxuICAgICAgcmV0dXJuIGltcG9ydFFyU2NhbjtcbiAgICBjYXNlIFNDQU5fVFlQRS5RUl9TSUdORVI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBxclNpZ25lclNjYW47XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiRGVmYXVsdExvZ29zTWFwIiwiQ29ubmVjdFFyU2lnbmVyIiwiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsInN0eWxlZCIsIkNvbXBvbmVudCIsInQiLCJrZXlzdG9uZSIsIkNvbm5lY3RLZXlzdG9uZSIsInRoZW1lIiwidG9rZW4iLCJkZXRlY3RUcmFuc2xhdGUiLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIkNsb3NlSWNvbiIsIkR1YWxMb2dvIiwiUXJTY2FubmVyRXJyb3JOb3RpY2UiLCJBVFRBQ0hfQUNDT1VOVF9NT0RBTCIsInVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCIsInVzZUdldERlZmF1bHRBY2NvdW50TmFtZSIsInVzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50IiwidXNlU2NhbkFjY291bnRRciIsInVzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQiLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJjcmVhdGVBY2NvdW50RXh0ZXJuYWxWMiIsInFyU2lnbmVyU2NhbiIsIkljb24iLCJJbWFnZSIsIk1vZGFsQ29udGV4dCIsIlN3UXJTY2FubmVyIiwiQ04iLCJRckNvZGUiLCJYQ2lyY2xlIiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJUcmFucyIsIkZvb3Rlckljb24iLCJtb2RhbElkIiwicHJvcHMiLCJjbGFzc05hbWUiLCJkZXZpY2VOYW1lIiwiaW5zdHJ1Y3Rpb25VcmwiLCJsb2dvVXJsIiwic3ViVGl0bGUiLCJ0aXRsZSIsImdvSG9tZSIsIm9uQ29tcGxldGUiLCJvbkJhY2siLCJhY2NvdW50TmFtZSIsImluYWN0aXZlTW9kYWwiLCJ2YWxpZGF0ZVN0YXRlIiwic2V0VmFsaWRhdGVTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJhY2NvdW50IiwibWVzc2FnZSIsInN0YXR1cyIsInNldFRpbWVvdXQiLCJuYW1lIiwiYWRkcmVzcyIsImNvbnRlbnQiLCJnZW5lc2lzSGFzaCIsImlzRXRoZXJldW0iLCJpc0FsbG93ZWQiLCJpc1JlYWRPbmx5IiwidGhlbiIsImVycm9ycyIsImxlbmd0aCIsImNhdGNoIiwiZXJyb3IiLCJmaW5hbGx5Iiwib25DbG9zZSIsIm9uRXJyb3IiLCJvblN1Y2Nlc3MiLCJvcGVuQ2FtZXJhIiwiY2hpbGRyZW4iLCJpY29uIiwib25DbGljayIsInN1YndhbGxldCIsImhpZ2hsaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzYiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmc2IiwiY29sb3IiLCJjb2xvclRleHREZXNjcmlwdGlvbiIsInRleHRBbGlnbiIsIm1hcmdpbiIsImNvbnRyb2xIZWlnaHRMRyIsImNvbnRyb2xIZWlnaHRYUyIsIm1hcmdpbkJvdHRvbSIsImNvbG9yTGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3JFcnJvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsIm1hcmdpblhYTCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsIm1hcmdpblhTIiwiRVRIRVJFVU1fUFJFRklYIiwiU0NBTl9UWVBFIiwiU0VDUkVUX1BSRUZJWCIsIlNVQlNUUkFURV9QUkVGSVgiLCJpc0hleCIsImRlY29kZUFkZHJlc3MiLCJlbmNvZGVBZGRyZXNzIiwiaXNFdGhlcmV1bUFkZHJlc3MiLCJkYXRhIiwiYXJyIiwic3BsaXQiLCJwcmVmaXgiLCJzbGljZSIsInN1YnN0cmluZyIsImlzQWRkcmVzcyIsImpvaW4iLCJ1bmRlZmluZWQiLCJpbXBvcnRRclNjYW4iLCJyZWFkT25seVNjYW4iLCJlIiwiY29uc29sZSIsImxvZyIsImdldEZ1bmN0aW9uU2NhbiIsInR5cGUiLCJSRUFET05MWSIsIlNFQ1JFVCIsIlFSX1NJR05FUiJdLCJzb3VyY2VSb290IjoiIn0=