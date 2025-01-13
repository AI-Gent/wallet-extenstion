"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Account_AttachReadOnly_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/AttachReadOnly.tsx":
/*!*****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/AttachReadOnly.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_AddressInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/AddressInput */ "../extension-koni-ui/src/components/Field/AddressInput.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/CloseIcon */ "../extension-koni-ui/src/components/Icon/CloseIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/modal */ "../extension-koni-ui/src/constants/modal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useCompleteCreateAccount */ "../extension-koni-ui/src/hooks/account/useCompleteCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetDefaultAccountName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetDefaultAccountName */ "../extension-koni-ui/src/hooks/account/useGetDefaultAccountName.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGoBackFromCreateAccount */ "../extension-koni-ui/src/hooks/account/useGoBackFromCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_form_useFocusById__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/form/useFocusById */ "../extension-koni-ui/src/hooks/form/useFocusById.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useAutoNavigateToCreatePassword */ "../extension-koni-ui/src/hooks/router/useAutoNavigateToCreatePassword.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/form/form */ "../extension-koni-ui/src/utils/form/form.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/scanner/attach */ "../extension-koni-ui/src/utils/scanner/attach.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Eye.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0























const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
  weight: "fill"
});
const modalId = 'attach-read-only-scanner-modal';
const formName = 'attach-read-only-form';
const fieldName = 'address';
const Component = ({
  className
}) => {
  (0,_subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_19__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const accountName = (0,_subwallet_extension_koni_ui_hooks_account_useGetDefaultAccountName__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)(root => root.accountState.accounts);
  const onBack = (0,_subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_6__["default"])(_subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_3__.ATTACH_ACCOUNT_MODAL);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].useForm();
  const [reformatAddress, setReformatAddress] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const [isEthereum, setIsEthereum] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(true);
  const handleResult = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(val => {
    const result = (0,_subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_12__.readOnlyScan)(val);
    if (result) {
      setReformatAddress(result.content);
      setIsEthereum(result.isEthereum);
    }
  }, []);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)((changes, allFields) => {
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_11__.simpleCheckForm)(allFields);
    setIsDisable(error || empty);
    const changeMap = (0,_subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_11__.convertFieldToObject)(changes);
    if (changeMap.address) {
      handleResult(changeMap.address);
    }
  }, [handleResult]);
  const accountAddressValidator = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)((rule, value) => {
    const result = (0,_subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_12__.readOnlyScan)(value);
    if (result) {
      // For each account, check if the address already exists return promise reject
      for (const account of accounts) {
        if (account.address === result.content) {
          setReformatAddress('');
          return Promise.reject(t('Account already exists'));
        }
      }
    } else {
      setReformatAddress('');
      if (value !== '') {
        return Promise.reject(t('This is not an address'));
      }
    }
    return Promise.resolve();
  }, [accounts, t]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(() => {
    setLoading(true);
    if (reformatAddress) {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_10__.createAccountExternalV2)({
        name: accountName,
        address: reformatAddress,
        genesisHash: '',
        isEthereum: isEthereum,
        isAllowed: true,
        isReadOnly: true
      }).then(errors => {
        if (errors.length) {
          form.setFields([{
            name: fieldName,
            errors: errors.map(e => e.message)
          }]);
        } else {
          onComplete();
        }
      }).catch(error => {
        form.setFields([{
          name: fieldName,
          errors: [error.message]
        }]);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [form, reformatAddress, accountName, isEthereum, onComplete]);
  (0,_subwallet_extension_koni_ui_hooks_form_useFocusById__WEBPACK_IMPORTED_MODULE_7__["default"])(modalId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      rightFooterButton: {
        children: t('Attach watch-only account'),
        icon: FooterIcon,
        disabled: isDisable,
        onClick: onSubmit,
        loading: loading
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
        onClick: goHome
      }],
      title: t('Attach watch-only account'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()('container'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "description",
          children: t('Track the activity of any wallet without a private key')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "page-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
            color: "var(--page-icon-color)",
            iconProps: {
              weight: 'fill',
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"]
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
          form: form,
          initialValues: {
            address: ''
          },
          name: formName,
          onFieldsChange: onFieldsChange,
          onFinish: onSubmit,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
            name: fieldName,
            rules: [{
              message: t('Account address is required'),
              required: true
            }, {
              validator: accountAddressValidator
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Field_AddressInput__WEBPACK_IMPORTED_MODULE_1__.AddressInput, {
              id: modalId,
              placeholder: t('Please type or paste account address'),
              showScanner: true
            })
          })
        })]
      })
    })
  });
};
const AttachReadOnly = (0,styled_components__WEBPACK_IMPORTED_MODULE_22__["default"])(Component).withConfig({
  displayName: "AttachReadOnly",
  componentId: "sc-1s88dfq-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.container': {
      padding: token.padding
    },
    '.description': {
      padding: `0 ${token.padding}px`,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      textAlign: 'center'
    },
    '.page-icon': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: token.controlHeightLG,
      marginBottom: token.sizeXXL,
      '--page-icon-color': token.colorSecondary
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachReadOnly);

/***/ }),

/***/ "../extension-koni-ui/src/utils/form/form.ts":
/*!***************************************************!*\
  !*** ../extension-koni-ui/src/utils/form/form.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertFieldToError": () => (/* binding */ convertFieldToError),
/* harmony export */   "convertFieldToObject": () => (/* binding */ convertFieldToObject),
/* harmony export */   "simpleCheckForm": () => (/* binding */ simpleCheckForm)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/is/array.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


function convertFieldToObject(fields) {
  const rs = fields.reduce((data, {
    name,
    value
  }) => {
    data[name] = value;
    return data;
  }, {});
  return rs;
}
function convertFieldToError(fields) {
  return fields.reduce((data, {
    errors,
    name
  }) => {
    data[name] = errors || [];
    return data;
  }, {});
}
const simpleCheckForm = (allFields, ignoreFields) => {
  const error = allFields.map(data => data.errors || []).reduce((old, value) => [...old, ...value], []).some(value => !!value);
  const empty = allFields.some(data => {
    const value = data.value;
    const names = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(data.name) ? data.name : [data.name];
    const isIgnore = ignoreFields === null || ignoreFields === void 0 ? void 0 : ignoreFields.some(name => names.includes(name));
    return isIgnore ? false : typeof value === 'boolean' ? false : !value;
  });
  return {
    error,
    empty
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfQWNjb3VudF9BdHRhY2hSZWFkT25seV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUU4RTtBQUNZO0FBQ1g7QUFDSztBQUN1QjtBQUNBO0FBQ0k7QUFDL0I7QUFDd0M7QUFDMUI7QUFDYjtBQUdvQjtBQUNwQjtBQUN0QjtBQUMvQjtBQUNTO0FBRWdCO0FBQ047QUFDTDtBQUNIO0FBQUE7QUFBQTtBQVF2QyxNQUFNMEIsVUFBVSxnQkFDZCx3REFBQyw0REFBSTtFQUNILFlBQVksRUFBRVAsdURBQUk7RUFDbEIsTUFBTSxFQUFDO0FBQU0sRUFFaEI7QUFFRCxNQUFNUSxPQUFPLEdBQUcsZ0NBQWdDO0FBQ2hELE1BQU1DLFFBQVEsR0FBRyx1QkFBdUI7QUFDeEMsTUFBTUMsU0FBUyxHQUFHLFNBQVM7QUFFM0IsTUFBTUMsU0FBMEIsR0FBRyxDQUFDO0VBQUVDO0FBQWlCLENBQUMsS0FBSztFQUMzRHRCLHFIQUErQixFQUFFO0VBRWpDLE1BQU07SUFBRXVCO0VBQUUsQ0FBQyxHQUFHVCw4REFBYyxFQUFFO0VBQzlCLE1BQU07SUFBRVU7RUFBTyxDQUFDLEdBQUd2Qix3R0FBa0IsRUFBRTtFQUV2QyxNQUFNd0IsVUFBVSxHQUFHN0IsK0dBQXdCLEVBQUU7RUFDN0MsTUFBTThCLFdBQVcsR0FBRzdCLCtHQUF3QixFQUFFO0VBRTlDLE1BQU04QixRQUFRLEdBQUdaLHlEQUFXLENBQUVhLElBQWUsSUFBS0EsSUFBSSxDQUFDQyxZQUFZLENBQUNGLFFBQVEsQ0FBQztFQUU3RSxNQUFNRyxNQUFNLEdBQUdoQyxpSEFBMEIsQ0FBQ0gsOEZBQW9CLENBQUM7RUFFL0QsTUFBTSxDQUFDb0MsSUFBSSxDQUFDLEdBQUd6QixvRUFBWSxFQUF3QjtFQUVuRCxNQUFNLENBQUMyQixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdyQixnREFB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Q2IsSUFBSSxDQUFDLENBQUM7SUFFbEQsT0FBTztNQUNMM0QsT0FBTyxFQUFFTyxPQUFPO01BQ2hCVSxXQUFXLEVBQUUwQyxJQUFJO01BQ2pCc0IsU0FBUyxFQUFFLElBQUk7TUFDZnhGLFVBQVUsRUFBRSxLQUFLO01BQ2pCdUIsSUFBSSxFQUFFbUUsU0FBUztNQUNmaEUsVUFBVSxFQUFFO0lBQ2QsQ0FBQztFQUNILENBQUMsQ0FBQyxPQUFPTSxDQUFDLEVBQUU7SUFDVjRELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDN0QsQ0FBQyxDQUFDO0lBRWQsT0FBTyxJQUFJO0VBQ2I7QUFDRixDQUFDO0FBRU0sTUFBTThELGVBQWUsR0FBSUMsSUFBZSxJQUEyQztFQUN4RixRQUFRQSxJQUFJO0lBQ1YsS0FBS3BCLHlGQUFrQjtNQUNyQixPQUFPM0csWUFBWTtJQUNyQixLQUFLMkcsdUZBQWdCO01BQ25CLE9BQU9nQixZQUFZO0lBQ3JCLEtBQUtoQiwwRkFBbUI7SUFDeEI7TUFDRSxPQUFPTyxZQUFZO0VBQUM7QUFFMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvQXR0YWNoUmVhZE9ubHkudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL3V0aWxzL2Zvcm0vZm9ybS50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy91dGlscy9zY2FubmVyL2F0dGFjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgTGF5b3V0LCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBZGRyZXNzSW5wdXQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvRmllbGQvQWRkcmVzc0lucHV0JztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ljb24vQ2xvc2VJY29uJztcbmltcG9ydCB7IEFUVEFDSF9BQ0NPVU5UX01PREFMIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMvbW9kYWwnO1xuaW1wb3J0IHVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50JztcbmltcG9ydCB1c2VHZXREZWZhdWx0QWNjb3VudE5hbWUgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9hY2NvdW50L3VzZUdldERlZmF1bHRBY2NvdW50TmFtZSc7XG5pbXBvcnQgdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9hY2NvdW50L3VzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50JztcbmltcG9ydCB1c2VGb2N1c0J5SWQgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9mb3JtL3VzZUZvY3VzQnlJZCc7XG5pbXBvcnQgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3JvdXRlci91c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkJztcbmltcG9ydCB1c2VEZWZhdWx0TmF2aWdhdGUgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9yb3V0ZXIvdXNlRGVmYXVsdE5hdmlnYXRlJztcbmltcG9ydCB7IGNyZWF0ZUFjY291bnRFeHRlcm5hbFYyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgY29udmVydEZpZWxkVG9PYmplY3QsIHNpbXBsZUNoZWNrRm9ybSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvZm9ybS9mb3JtJztcbmltcG9ydCB7IHJlYWRPbmx5U2NhbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvc2Nhbm5lci9hdHRhY2gnO1xuaW1wb3J0IHsgRm9ybSwgSWNvbiwgUGFnZUljb24gfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEV5ZSB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCB7IENhbGxiYWNrcywgRmllbGREYXRhLCBSdWxlT2JqZWN0IH0gZnJvbSAncmMtZmllbGQtZm9ybS9saWIvaW50ZXJmYWNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHM7XG5cbmludGVyZmFjZSBSZWFkT25seUFjY291bnRJbnB1dCB7XG4gIGFkZHJlc3M/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEZvb3Rlckljb24gPSAoXG4gIDxJY29uXG4gICAgcGhvc3Bob3JJY29uPXtFeWV9XG4gICAgd2VpZ2h0PSdmaWxsJ1xuICAvPlxuKTtcblxuY29uc3QgbW9kYWxJZCA9ICdhdHRhY2gtcmVhZC1vbmx5LXNjYW5uZXItbW9kYWwnO1xuY29uc3QgZm9ybU5hbWUgPSAnYXR0YWNoLXJlYWQtb25seS1mb3JtJztcbmNvbnN0IGZpZWxkTmFtZSA9ICdhZGRyZXNzJztcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUgfTogUHJvcHMpID0+IHtcbiAgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCgpO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBnb0hvbWUgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IG9uQ29tcGxldGUgPSB1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQoKTtcbiAgY29uc3QgYWNjb3VudE5hbWUgPSB1c2VHZXREZWZhdWx0QWNjb3VudE5hbWUoKTtcblxuICBjb25zdCBhY2NvdW50cyA9IHVzZVNlbGVjdG9yKChyb290OiBSb290U3RhdGUpID0+IHJvb3QuYWNjb3VudFN0YXRlLmFjY291bnRzKTtcblxuICBjb25zdCBvbkJhY2sgPSB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudChBVFRBQ0hfQUNDT1VOVF9NT0RBTCk7XG5cbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtPFJlYWRPbmx5QWNjb3VudElucHV0PigpO1xuXG4gIGNvbnN0IFtyZWZvcm1hdEFkZHJlc3MsIHNldFJlZm9ybWF0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXRoZXJldW0sIHNldElzRXRoZXJldW1dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEaXNhYmxlLCBzZXRJc0Rpc2FibGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlUmVzdWx0ID0gdXNlQ2FsbGJhY2soKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gcmVhZE9ubHlTY2FuKHZhbCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzZXRSZWZvcm1hdEFkZHJlc3MocmVzdWx0LmNvbnRlbnQpO1xuICAgICAgc2V0SXNFdGhlcmV1bShyZXN1bHQuaXNFdGhlcmV1bSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25GaWVsZHNDaGFuZ2U6IENhbGxiYWNrczxSZWFkT25seUFjY291bnRJbnB1dD5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlczogRmllbGREYXRhW10sIGFsbEZpZWxkczogRmllbGREYXRhW10pID0+IHtcbiAgICBjb25zdCB7IGVtcHR5LCBlcnJvciB9ID0gc2ltcGxlQ2hlY2tGb3JtKGFsbEZpZWxkcyk7XG5cbiAgICBzZXRJc0Rpc2FibGUoZXJyb3IgfHwgZW1wdHkpO1xuXG4gICAgY29uc3QgY2hhbmdlTWFwID0gY29udmVydEZpZWxkVG9PYmplY3Q8UmVhZE9ubHlBY2NvdW50SW5wdXQ+KGNoYW5nZXMpO1xuXG4gICAgaWYgKGNoYW5nZU1hcC5hZGRyZXNzKSB7XG4gICAgICBoYW5kbGVSZXN1bHQoY2hhbmdlTWFwLmFkZHJlc3MpO1xuICAgIH1cbiAgfSwgW2hhbmRsZVJlc3VsdF0pO1xuXG4gIGNvbnN0IGFjY291bnRBZGRyZXNzVmFsaWRhdG9yID0gdXNlQ2FsbGJhY2soKHJ1bGU6IFJ1bGVPYmplY3QsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSByZWFkT25seVNjYW4odmFsdWUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgLy8gRm9yIGVhY2ggYWNjb3VudCwgY2hlY2sgaWYgdGhlIGFkZHJlc3MgYWxyZWFkeSBleGlzdHMgcmV0dXJuIHByb21pc2UgcmVqZWN0XG4gICAgICBmb3IgKGNvbnN0IGFjY291bnQgb2YgYWNjb3VudHMpIHtcbiAgICAgICAgaWYgKGFjY291bnQuYWRkcmVzcyA9PT0gcmVzdWx0LmNvbnRlbnQpIHtcbiAgICAgICAgICBzZXRSZWZvcm1hdEFkZHJlc3MoJycpO1xuXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ0FjY291bnQgYWxyZWFkeSBleGlzdHMnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UmVmb3JtYXRBZGRyZXNzKCcnKTtcblxuICAgICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnVGhpcyBpcyBub3QgYW4gYWRkcmVzcycpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sIFthY2NvdW50cywgdF0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBpZiAocmVmb3JtYXRBZGRyZXNzKSB7XG4gICAgICBjcmVhdGVBY2NvdW50RXh0ZXJuYWxWMih7XG4gICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICBhZGRyZXNzOiByZWZvcm1hdEFkZHJlc3MsXG4gICAgICAgIGdlbmVzaXNIYXNoOiAnJyxcbiAgICAgICAgaXNFdGhlcmV1bTogaXNFdGhlcmV1bSxcbiAgICAgICAgaXNBbGxvd2VkOiB0cnVlLFxuICAgICAgICBpc1JlYWRPbmx5OiB0cnVlXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvcm0uc2V0RmllbGRzKFt7IG5hbWU6IGZpZWxkTmFtZSwgZXJyb3JzOiBlcnJvcnMubWFwKChlKSA9PiBlLm1lc3NhZ2UpIH1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICBmb3JtLnNldEZpZWxkcyhbeyBuYW1lOiBmaWVsZE5hbWUsIGVycm9yczogW2Vycm9yLm1lc3NhZ2VdIH1dKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbZm9ybSwgcmVmb3JtYXRBZGRyZXNzLCBhY2NvdW50TmFtZSwgaXNFdGhlcmV1bSwgb25Db21wbGV0ZV0pO1xuXG4gIHVzZUZvY3VzQnlJZChtb2RhbElkKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlciBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9PlxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICBvbkJhY2s9e29uQmFja31cbiAgICAgICAgcmlnaHRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICBjaGlsZHJlbjogdCgnQXR0YWNoIHdhdGNoLW9ubHkgYWNjb3VudCcpLFxuICAgICAgICAgIGljb246IEZvb3Rlckljb24sXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZSxcbiAgICAgICAgICBvbkNsaWNrOiBvblN1Ym1pdCxcbiAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXG4gICAgICAgIH19XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogPENsb3NlSWNvbiAvPixcbiAgICAgICAgICAgIG9uQ2xpY2s6IGdvSG9tZVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgdGl0bGU9e3Q8c3RyaW5nPignQXR0YWNoIHdhdGNoLW9ubHkgYWNjb3VudCcpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q04oJ2NvbnRhaW5lcicpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAge3QoJ1RyYWNrIHRoZSBhY3Rpdml0eSBvZiBhbnkgd2FsbGV0IHdpdGhvdXQgYSBwcml2YXRlIGtleScpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLWljb24nPlxuICAgICAgICAgICAgPFBhZ2VJY29uXG4gICAgICAgICAgICAgIGNvbG9yPSd2YXIoLS1wYWdlLWljb24tY29sb3IpJ1xuICAgICAgICAgICAgICBpY29uUHJvcHM9e3tcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdmaWxsJyxcbiAgICAgICAgICAgICAgICBwaG9zcGhvckljb246IEV5ZVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgYWRkcmVzczogJycgfX1cbiAgICAgICAgICAgIG5hbWU9e2Zvcm1OYW1lfVxuICAgICAgICAgICAgb25GaWVsZHNDaGFuZ2U9e29uRmllbGRzQ2hhbmdlfVxuICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17ZmllbGROYW1lfVxuICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0FjY291bnQgYWRkcmVzcyBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogYWNjb3VudEFkZHJlc3NWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIHN0YXR1c0hlbHBBc1Rvb2x0aXA9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBZGRyZXNzSW5wdXRcbiAgICAgICAgICAgICAgICBpZD17bW9kYWxJZH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnUGxlYXNlIHR5cGUgb3IgcGFzdGUgYWNjb3VudCBhZGRyZXNzJyl9XG4gICAgICAgICAgICAgICAgc2hvd1NjYW5uZXI9e3RydWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQuV2l0aFN1YkhlYWRlck9ubHk+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IEF0dGFjaFJlYWRPbmx5ID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLmNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmdcbiAgICB9LFxuXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNixcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNixcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgJy5wYWdlLWljb24nOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLmNvbnRyb2xIZWlnaHRMRyxcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4uc2l6ZVhYTCxcbiAgICAgICctLXBhZ2UtaWNvbi1jb2xvcic6IHRva2VuLmNvbG9yU2Vjb25kYXJ5XG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGFjaFJlYWRPbmx5O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEZvcm1GaWVsZERhdGEgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL2Zvcm0nO1xuaW1wb3J0IHsgRmllbGREYXRhIH0gZnJvbSAncmMtZmllbGQtZm9ybS9saWIvaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGaWVsZFRvT2JqZWN0PFQgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+PiAoZmllbGRzOiBGaWVsZERhdGFbXSkge1xuICBjb25zdCBycyA9IGZpZWxkcy5yZWR1Y2UoKGRhdGEsIHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgIGRhdGFbbmFtZSBhcyBzdHJpbmddID0gdmFsdWU7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pO1xuXG4gIHJldHVybiBycyBhcyBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEZpZWxkVG9FcnJvcjxUID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IChmaWVsZHM6IEZpZWxkRGF0YVtdKTogUmVjb3JkPGtleW9mIFQsIHN0cmluZ1tdPiB7XG4gIHJldHVybiBmaWVsZHMucmVkdWNlKChkYXRhLCB7IGVycm9ycywgbmFtZSB9KSA9PiB7XG4gICAgZGF0YVtuYW1lIGFzIGtleW9mIFRdID0gZXJyb3JzIHx8IFtdO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sIHt9IGFzIFJlY29yZDxrZXlvZiBULCBzdHJpbmdbXT4pO1xufVxuXG5leHBvcnQgY29uc3Qgc2ltcGxlQ2hlY2tGb3JtID0gKGFsbEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBpZ25vcmVGaWVsZHM/OiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBlcnJvciA9IGFsbEZpZWxkcy5tYXAoKGRhdGEpID0+IGRhdGEuZXJyb3JzIHx8IFtdKVxuICAgIC5yZWR1Y2UoKG9sZCwgdmFsdWUpID0+IFsuLi5vbGQsIC4uLnZhbHVlXSwgW10pXG4gICAgLnNvbWUoKHZhbHVlKSA9PiAhIXZhbHVlKTtcblxuICBjb25zdCBlbXB0eSA9IGFsbEZpZWxkcy5zb21lKChkYXRhKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBkYXRhLnZhbHVlIGFzIHVua25vd247XG4gICAgY29uc3QgbmFtZXMgPSBpc0FycmF5KGRhdGEubmFtZSkgPyBkYXRhLm5hbWUgOiBbZGF0YS5uYW1lXTtcblxuICAgIGNvbnN0IGlzSWdub3JlID0gaWdub3JlRmllbGRzPy5zb21lKChuYW1lKSA9PiBuYW1lcy5pbmNsdWRlcyhuYW1lKSk7XG5cbiAgICByZXR1cm4gaXNJZ25vcmUgPyBmYWxzZSA6IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gZmFsc2UgOiAhdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3IsXG4gICAgZW1wdHlcbiAgfTtcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgRVRIRVJFVU1fUFJFRklYLCBTQ0FOX1RZUEUsIFNFQ1JFVF9QUkVGSVgsIFNVQlNUUkFURV9QUkVGSVggfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cy9xcic7XG5pbXBvcnQgeyBRckFjY291bnQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL3NjYW5uZXInO1xuXG5pbXBvcnQgeyBpc0hleCB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcbmltcG9ydCB7IGRlY29kZUFkZHJlc3MsIGVuY29kZUFkZHJlc3MsIGlzRXRoZXJldW1BZGRyZXNzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxuZXhwb3J0IGNvbnN0IHFyU2lnbmVyU2NhbiA9IChkYXRhOiBzdHJpbmcpOiBRckFjY291bnQgfCBudWxsID0+IHtcbiAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IGRhdGEuc3BsaXQoJzonKTtcblxuICBjb25zdCBwcmVmaXggPSBhcnJbMF07XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBnZW5lc2lzSGFzaCA9ICcnO1xuICBsZXQgbmFtZTogc3RyaW5nW10gPSBbXTtcbiAgbGV0IGlzRXRoZXJldW0gPSBmYWxzZTtcblxuICBpZiAocHJlZml4ID09PSBTVUJTVFJBVEVfUFJFRklYKSB7XG4gICAgW2NvbnRlbnQsIGdlbmVzaXNIYXNoLCAuLi5uYW1lXSA9IGFyci5zbGljZSgxKTtcbiAgfSBlbHNlIGlmIChwcmVmaXggPT09IEVUSEVSRVVNX1BSRUZJWCkge1xuICAgIFtjb250ZW50LCAuLi5uYW1lXSA9IGFyci5zbGljZSgxKTtcbiAgICBnZW5lc2lzSGFzaCA9IGNvbnRlbnQuc3BsaXQoJ0AnKVsxXSB8fCAnJztcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgNDIpO1xuICAgIGlzRXRoZXJldW0gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50LFxuICAgIGdlbmVzaXNIYXNoLFxuICAgIGlzQWRkcmVzczogdHJ1ZSxcbiAgICBpc0V0aGVyZXVtLFxuICAgIG5hbWU6IG5hbWUubGVuZ3RoID8gbmFtZS5qb2luKCc6JykgOiB1bmRlZmluZWQsXG4gICAgaXNSZWFkT25seTogZmFsc2VcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRRclNjYW4gPSAoZGF0YTogc3RyaW5nKTogUXJBY2NvdW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IGFycjogc3RyaW5nW10gPSBkYXRhLnNwbGl0KCc6Jyk7XG5cbiAgY29uc3QgcHJlZml4ID0gYXJyWzBdO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgZ2VuZXNpc0hhc2ggPSAnJztcbiAgbGV0IG5hbWU6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGlzRXRoZXJldW0gPSBmYWxzZTtcblxuICBpZiAocHJlZml4ID09PSBTRUNSRVRfUFJFRklYKSB7XG4gICAgW2NvbnRlbnQsIGdlbmVzaXNIYXNoLCAuLi5uYW1lXSA9IGFyci5zbGljZSgxKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGVudCxcbiAgICBnZW5lc2lzSGFzaCxcbiAgICBpc0FkZHJlc3M6IGZhbHNlLFxuICAgIGlzRXRoZXJldW0sXG4gICAgbmFtZTogbmFtZS5sZW5ndGggPyBuYW1lLmpvaW4oJzonKSA6IHVuZGVmaW5lZCxcbiAgICBpc1JlYWRPbmx5OiBmYWxzZVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlYWRPbmx5U2NhbiA9IChkYXRhOiBzdHJpbmcpOiBRckFjY291bnQgfCBudWxsID0+IHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaXNFdGhlcmV1bUFkZHJlc3MoZGF0YSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudDogZGF0YSxcbiAgICAgIGdlbmVzaXNIYXNoOiBkYXRhLFxuICAgICAgaXNBZGRyZXNzOiB0cnVlLFxuICAgICAgaXNFdGhlcmV1bTogdHJ1ZSxcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIGlzUmVhZE9ubHk6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAoaXNIZXgoZGF0YSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZHJlc3MgPSBlbmNvZGVBZGRyZXNzKGRlY29kZUFkZHJlc3MoZGF0YSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IGFkZHJlc3MsXG4gICAgICBnZW5lc2lzSGFzaDogZGF0YSxcbiAgICAgIGlzQWRkcmVzczogdHJ1ZSxcbiAgICAgIGlzRXRoZXJldW06IGZhbHNlLFxuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgaXNSZWFkT25seTogdHJ1ZVxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RnVuY3Rpb25TY2FuID0gKHR5cGU6IFNDQU5fVFlQRSk6ICgoZGF0YTogc3RyaW5nKSA9PiBRckFjY291bnQgfCBudWxsKSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0NBTl9UWVBFLlJFQURPTkxZOlxuICAgICAgcmV0dXJuIHJlYWRPbmx5U2NhbjtcbiAgICBjYXNlIFNDQU5fVFlQRS5TRUNSRVQ6XG4gICAgICByZXR1cm4gaW1wb3J0UXJTY2FuO1xuICAgIGNhc2UgU0NBTl9UWVBFLlFSX1NJR05FUjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHFyU2lnbmVyU2NhbjtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIkFkZHJlc3NJbnB1dCIsIkNsb3NlSWNvbiIsIkFUVEFDSF9BQ0NPVU5UX01PREFMIiwidXNlQ29tcGxldGVDcmVhdGVBY2NvdW50IiwidXNlR2V0RGVmYXVsdEFjY291bnROYW1lIiwidXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQiLCJ1c2VGb2N1c0J5SWQiLCJ1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkIiwidXNlRGVmYXVsdE5hdmlnYXRlIiwiY3JlYXRlQWNjb3VudEV4dGVybmFsVjIiLCJjb252ZXJ0RmllbGRUb09iamVjdCIsInNpbXBsZUNoZWNrRm9ybSIsInJlYWRPbmx5U2NhbiIsIkZvcm0iLCJJY29uIiwiUGFnZUljb24iLCJDTiIsIkV5ZSIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlU2VsZWN0b3IiLCJzdHlsZWQiLCJGb290ZXJJY29uIiwibW9kYWxJZCIsImZvcm1OYW1lIiwiZmllbGROYW1lIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwidCIsImdvSG9tZSIsIm9uQ29tcGxldGUiLCJhY2NvdW50TmFtZSIsImFjY291bnRzIiwicm9vdCIsImFjY291bnRTdGF0ZSIsIm9uQmFjayIsImZvcm0iLCJ1c2VGb3JtIiwicmVmb3JtYXRBZGRyZXNzIiwic2V0UmVmb3JtYXRBZGRyZXNzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0V0aGVyZXVtIiwic2V0SXNFdGhlcmV1bSIsImlzRGlzYWJsZSIsInNldElzRGlzYWJsZSIsImhhbmRsZVJlc3VsdCIsInZhbCIsInJlc3VsdCIsImNvbnRlbnQiLCJvbkZpZWxkc0NoYW5nZSIsImNoYW5nZXMiLCJhbGxGaWVsZHMiLCJlbXB0eSIsImVycm9yIiwiY2hhbmdlTWFwIiwiYWRkcmVzcyIsImFjY291bnRBZGRyZXNzVmFsaWRhdG9yIiwicnVsZSIsInZhbHVlIiwiYWNjb3VudCIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwib25TdWJtaXQiLCJuYW1lIiwiZ2VuZXNpc0hhc2giLCJpc0FsbG93ZWQiLCJpc1JlYWRPbmx5IiwidGhlbiIsImVycm9ycyIsImxlbmd0aCIsInNldEZpZWxkcyIsIm1hcCIsImUiLCJtZXNzYWdlIiwiY2F0Y2giLCJmaW5hbGx5IiwiY2hpbGRyZW4iLCJpY29uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwid2VpZ2h0IiwicGhvc3Bob3JJY29uIiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJBdHRhY2hSZWFkT25seSIsInRoZW1lIiwidG9rZW4iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImNvbG9yIiwiY29sb3JUZXh0RGVzY3JpcHRpb24iLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJjb250cm9sSGVpZ2h0TEciLCJtYXJnaW5Cb3R0b20iLCJzaXplWFhMIiwiY29sb3JTZWNvbmRhcnkiLCJpc0FycmF5IiwiZmllbGRzIiwicnMiLCJyZWR1Y2UiLCJkYXRhIiwiY29udmVydEZpZWxkVG9FcnJvciIsImlnbm9yZUZpZWxkcyIsIm9sZCIsInNvbWUiLCJuYW1lcyIsImlzSWdub3JlIiwiaW5jbHVkZXMiLCJFVEhFUkVVTV9QUkVGSVgiLCJTQ0FOX1RZUEUiLCJTRUNSRVRfUFJFRklYIiwiU1VCU1RSQVRFX1BSRUZJWCIsImlzSGV4IiwiZGVjb2RlQWRkcmVzcyIsImVuY29kZUFkZHJlc3MiLCJpc0V0aGVyZXVtQWRkcmVzcyIsInFyU2lnbmVyU2NhbiIsImFyciIsInNwbGl0IiwicHJlZml4Iiwic2xpY2UiLCJzdWJzdHJpbmciLCJpc0FkZHJlc3MiLCJqb2luIiwidW5kZWZpbmVkIiwiaW1wb3J0UXJTY2FuIiwiY29uc29sZSIsImxvZyIsImdldEZ1bmN0aW9uU2NhbiIsInR5cGUiLCJSRUFET05MWSIsIlNFQ1JFVCIsIlFSX1NJR05FUiJdLCJzb3VyY2VSb290IjoiIn0=