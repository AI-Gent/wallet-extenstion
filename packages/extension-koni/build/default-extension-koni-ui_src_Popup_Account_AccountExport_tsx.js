"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Account_AccountExport_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/AccountExport.tsx":
/*!****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/AccountExport.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Alert */ "../extension-koni-ui/src/components/Alert/index.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/CloseIcon */ "../extension-koni-ui/src/components/Icon/CloseIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_WordPhrase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/WordPhrase */ "../extension-koni-ui/src/components/WordPhrase.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/router */ "../extension-koni-ui/src/constants/router.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetAccountByAddress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetAccountByAddress */ "../extension-koni-ui/src/hooks/account/useGetAccountByAddress.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useCopy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useCopy */ "../extension-koni-ui/src/hooks/common/useCopy.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_form_useFocusFormItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/form/useFocusFormItem */ "../extension-koni-ui/src/hooks/form/useFocusFormItem.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/setting-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/field/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-qr-code/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "../../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Leaf.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FileJs.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Wallet.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/QrCode.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CopySimple.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/DownloadSimple.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0























var ExportType;
(function (ExportType) {
  ExportType["JSON_FILE"] = "json-file";
  ExportType["PRIVATE_KEY"] = "private-key";
  ExportType["QR_CODE"] = "qr-code";
  ExportType["SEED_PHRASE"] = "seed-phrase";
})(ExportType || (ExportType = {}));
var FormFieldName;
(function (FormFieldName) {
  FormFieldName["PASSWORD"] = "password";
  FormFieldName["TYPES"] = "types";
})(FormFieldName || (FormFieldName = {}));
const onExportJson = (jsonData, address) => {
  return () => {
    if (jsonData) {
      const blob = new Blob([JSON.stringify(jsonData)], {
        type: 'application/json; charset=utf-8'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_11__.saveAs)(blob, `${address}.json`);
    }
  };
};
const FinishIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
  weight: "fill"
});
const formName = 'account-export-form';
const Component = props => {
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useNavigate)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    accountAddress
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)();
  const account = (0,_subwallet_extension_koni_ui_hooks_account_useGetAccountByAddress__WEBPACK_IMPORTED_MODULE_5__["default"])(accountAddress);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].useForm();
  const [exportTypes, setExportTypes] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
  const exportSingle = exportTypes.length <= 1;
  const [firstStep, setFirstStep] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(true);
  const [isDisabled, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(true);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const [privateKey, setPrivateKey] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)('');
  const [publicKey, setPublicKey] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)('');
  const [jsonData, setJsonData] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null);
  const [seedPhrase, setSeedPhrase] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)('');
  const titleMap = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(() => ({
    [ExportType.JSON_FILE]: t('Successful'),
    [ExportType.QR_CODE]: t('Your QR code'),
    [ExportType.PRIVATE_KEY]: t('Your private key'),
    [ExportType.SEED_PHRASE]: t('Your seed phrase')
  }), [t]);
  const qrData = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(() => {
    const prefix = 'secret';
    const result = [prefix, privateKey || '', publicKey];
    if (account !== null && account !== void 0 && account.name) {
      result.push(account.name);
    }
    return result.join(':');
  }, [account === null || account === void 0 ? void 0 : account.name, publicKey, privateKey]);
  const onCopyPrivateKey = (0,_subwallet_extension_koni_ui_hooks_common_useCopy__WEBPACK_IMPORTED_MODULE_6__["default"])(privateKey);
  const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((changedFields, allFields) => {
    const error = allFields.map(data => data.errors || []).reduce((old, value) => [...old, ...value]).some(value => !!value);
    const empty = allFields.map(data => data.value).some(value => !value);
    setIsDisable(error || empty);
  }, []);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(values => {
    const password = values[FormFieldName.PASSWORD];
    const exportTypes = values[FormFieldName.TYPES];
    const exportSingle = exportTypes.length <= 1;
    if (!exportTypes.length) {
      return;
    }
    if (!account) {
      return;
    }
    const address = account.address;
    if (!address) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const promise = new Promise((resolve, reject) => {
        const result = {
          privateKey: false,
          seedPhrase: false,
          jsonFile: false
        };
        const checkDone = () => {
          if (Object.values(result).every(value => value)) {
            resolve();
          }
        };
        if (exportTypes.includes(ExportType.PRIVATE_KEY) || exportTypes.includes(ExportType.QR_CODE)) {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_9__.exportAccountPrivateKey)(address, password).then(res => {
            setPrivateKey(res.privateKey);
            setPublicKey(res.publicKey);
            result.privateKey = true;
            checkDone();
          }).catch(e => {
            reject(new Error(e.message));
          });
        } else {
          result.privateKey = true;
        }
        if (exportTypes.includes(ExportType.SEED_PHRASE) && account !== null && account !== void 0 && account.isMasterAccount) {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_9__.keyringExportMnemonic)({
            address,
            password: password
          }).then(res => {
            setSeedPhrase(res.result);
            result.seedPhrase = true;
            checkDone();
          }).catch(e => {
            reject(new Error(e.message));
          });
        } else {
          result.seedPhrase = true;
        }
        if (exportTypes.includes(ExportType.JSON_FILE)) {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_9__.exportAccount)(address, password).then(res => {
            setJsonData(res.exportedJson);
            result.jsonFile = true;
            checkDone();
            if (exportSingle) {
              onExportJson(res.exportedJson, address)();
            }
          }).catch(e => {
            reject(new Error(e.message));
          });
        } else {
          result.jsonFile = true;
        }
      });
      promise.then(() => {
        setFirstStep(false);
      }).catch(e => {
        let message = e.message;
        if (message === 'Unable to decode using the supplied passphrase') {
          message = t('Wrong password');
        }
        form.setFields([{
          name: FormFieldName.PASSWORD,
          errors: [message]
        }]);
      }).finally(() => {
        setLoading(false);
      });
    }, 500);
  }, [account, form, t]);
  const onPressType = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(value => {
    return () => {
      const types = form.getFieldValue(FormFieldName.TYPES);
      const exists = types.includes(value);
      let result;
      if (exists) {
        result = types.filter(i => i !== value);
      } else {
        result = [...types, value];
      }
      form.setFieldValue(FormFieldName.TYPES, result);
      setExportTypes(result);
    };
  }, [form]);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(() => {
    return [{
      disable: !account || account.isExternal || !account.isMasterAccount,
      hidden: false,
      icon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
      label: t('Export seed phrase'),
      type: ExportType.SEED_PHRASE
    }, {
      disable: !account || !!account.isExternal,
      hidden: false,
      icon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
      label: t('Export JSON file'),
      type: ExportType.JSON_FILE
    }, {
      disable: !account || account.isExternal || !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_21__.isEthereumAddress)(account.address),
      hidden: !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_21__.isEthereumAddress)((account === null || account === void 0 ? void 0 : account.address) || ''),
      icon: phosphor_react__WEBPACK_IMPORTED_MODULE_22__["default"],
      label: t('Export private key'),
      type: ExportType.PRIVATE_KEY
    }, {
      disable: !account || !!(account !== null && account !== void 0 && account.isExternal),
      hidden: false,
      icon: phosphor_react__WEBPACK_IMPORTED_MODULE_23__["default"],
      label: t('Export QR Code'),
      type: ExportType.QR_CODE
    }];
  }, [account, t]);
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    if (accountAddress) {
      navigate(`/accounts/detail/${accountAddress}`);
    } else {
      navigate(_subwallet_extension_koni_ui_constants_router__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_ROUTER_PATH);
    }
  }, [accountAddress, navigate]);
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(() => {
    if (!account) {
      goHome();
    }
  }, [account, goHome, navigate]);
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(() => {
    if (account !== null && account !== void 0 && account.address) {
      form.resetFields();
    }
  }, [account === null || account === void 0 ? void 0 : account.address, form]);
  (0,_subwallet_extension_koni_ui_hooks_form_useFocusFormItem__WEBPACK_IMPORTED_MODULE_7__["default"])(form, FormFieldName.PASSWORD);
  if (!account) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      disableBack: loading,
      onBack: onBack,
      rightFooterButton: {
        children: firstStep ? t('Confirm') : t('Finish'),
        icon: firstStep ? undefined : FinishIcon,
        disabled: isDisabled || !exportTypes.length,
        loading: loading,
        onClick: firstStep ? form.submit : goHome
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
        onClick: goHome,
        disabled: loading
      }],
      title: firstStep ? t('Export account') : !exportSingle ? t('Export successful') : titleMap[exportTypes[0]],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "body-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('notice', {
            'mb-large': !firstStep
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
            description: t('Anyone with your key can use any assets held in your account.'),
            title: t('Warning: Never disclose this key'),
            type: "warning"
          })
        }), firstStep && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
          form: form,
          initialValues: {
            [FormFieldName.PASSWORD]: '',
            [FormFieldName.TYPES]: []
          },
          name: formName,
          onFieldsChange: onUpdate,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            name: FormFieldName.PASSWORD,
            rules: [{
              message: t('Password is required'),
              required: true
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
              disabled: loading,
              placeholder: t('Type your Subwallet password'),
              suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {}),
              type: "password"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            className: "mb-0",
            name: FormFieldName.TYPES,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "export-types-container",
              children: items.map(item => {
                const _selected = exportTypes === null || exportTypes === void 0 ? void 0 : exportTypes.includes(item.type);
                if (item.hidden) {
                  return null;
                }
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
                  className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('export-item', `export-${item.type}`, {
                    selected: _selected,
                    disabled: item.disable
                  }),
                  leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
                    backgroundColor: "var(--icon-bg-color)",
                    phosphorIcon: item.icon,
                    size: "sm",
                    weight: "fill"
                  }),
                  name: item.label,
                  onPressItem: item.disable || loading ? undefined : onPressType(item.type),
                  rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    className: "setting-item-right-icon",
                    iconColor: "var(--selected-icon-color)",
                    phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
                    size: "sm",
                    weight: "fill"
                  })
                }, item.type);
              })
            })
          })]
        }), !firstStep && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('result-container', {
            'export-single': exportSingle
          }),
          children: [exportTypes.includes(ExportType.PRIVATE_KEY) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "result-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "result-title",
              children: titleMap[ExportType.PRIVATE_KEY]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__["default"], {
              className: "private-key-field",
              content: privateKey,
              maxLine: 10
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__["default"], {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_29__["default"]
              }),
              onClick: onCopyPrivateKey,
              type: "ghost",
              children: t('Copy to clipboard')
            })]
          }), exportTypes.includes(ExportType.SEED_PHRASE) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "result-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "result-title",
              children: titleMap[ExportType.SEED_PHRASE]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components_WordPhrase__WEBPACK_IMPORTED_MODULE_3__["default"], {
              seedPhrase: seedPhrase
            })]
          }), exportTypes.includes(ExportType.QR_CODE) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "result-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "result-title",
              children: titleMap[ExportType.QR_CODE]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "qr-area",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_30__["default"], {
                errorLevel: "Q",
                logoPadding: !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_21__.isEthereumAddress)(account.address) ? 4 : 3,
                size: 264,
                value: qrData
              })
            })]
          }), exportTypes.includes(ExportType.JSON_FILE) && jsonData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "result-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "result-title",
              children: t('Your json file')
            }), exportSingle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                className: "page-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_31__["default"], {
                  color: "var(--page-icon-color)",
                  iconProps: {
                    phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
                    weight: 'fill'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                className: "json-done-tile",
                children: t('Success!')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                className: "json-done-description",
                children: t('You have successfully exported JSON file for this account')
              })]
            }), !exportSingle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
              className: "download-json",
              leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
                backgroundColor: "var(--icon-bg-color)",
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
                size: "sm",
                weight: "fill"
              }),
              name: `${account.address}.json`,
              onPressItem: onExportJson(jsonData, account.address),
              rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                className: "setting-item-right-icon",
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_32__["default"],
                size: "sm",
                weight: "fill"
              })
            })]
          })]
        })]
      })
    })
  });
};
const AccountExport = (0,styled_components__WEBPACK_IMPORTED_MODULE_33__["default"])(Component).withConfig({
  displayName: "AccountExport",
  componentId: "sc-nxcsoe-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.body-container': {
      padding: `0 ${token.padding}px`
    },
    '.notice': {
      marginTop: token.margin,
      marginBottom: token.margin,
      '&.mb-large': {
        marginBottom: token.marginLG
      }
    },
    '.export-types-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeXS
    },
    '.export-item': {
      '--selected-icon-color': token['gray-4'],
      textAlign: 'start',
      '&.selected': {
        '--selected-icon-color': token.colorSecondary
      },
      '&.disabled': {
        opacity: 0.4,
        '.ant-web3-block': {
          cursor: 'not-allowed',
          '&:hover': {
            backgroundColor: token['gray-1']
          }
        }
      }
    },
    '.setting-item-right-icon': {
      paddingRight: 8
    },
    '.download-json': {
      '.ant-web3-block-middle-item': {
        overflow: 'hidden',
        '.ant-setting-item-name': {
          textOverflow: 'ellipsis',
          width: '100%',
          overflow: 'hidden',
          paddingRight: token.paddingXS
        }
      }
    },
    [`.export-${ExportType.SEED_PHRASE}`]: {
      '--icon-bg-color': token['green-7']
    },
    [`.export-${ExportType.JSON_FILE}, .download-json`]: {
      '--icon-bg-color': token['orange-7']
    },
    [`.export-${ExportType.PRIVATE_KEY}`]: {
      '--icon-bg-color': token['gray-3']
    },
    [`.export-${ExportType.QR_CODE}`]: {
      '--icon-bg-color': token['geekblue-7']
    },
    '.result-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeLG
    },
    '.result-content': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.size,
      '.result-title': {
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeHeading6,
        lineHeight: token.lineHeightHeading6,
        color: token.colorTextLabel,
        textTransform: 'uppercase'
      },
      '.private-key-field': {
        '.ant-field-wrapper': {
          alignItems: 'start',
          textAlign: 'center'
        }
      },
      '.qr-area': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }
    },
    '.export-single': {
      '.result-title': {
        display: 'none'
      }
    },
    '.page-icon': {
      display: 'flex',
      justifyContent: 'center',
      '--page-icon-color': token.colorSecondary
    },
    '.json-done-tile': {
      color: token.colorTextHeading,
      textAlign: 'center',
      fontWeight: token.fontWeightStrong,
      fontSize: token.fontSizeHeading3,
      lineHeight: token.lineHeightHeading3
    },
    '.json-done-description': {
      padding: `0 ${token.controlHeightLG - token.padding}px`,
      color: token.colorTextLabel,
      textAlign: 'center',
      fontSize: token.fontSizeHeading5,
      lineHeight: token.lineHeightHeading5
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountExport);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/DownloadSimple.esm.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/DownloadSimple.esm.js ***!
  \**************************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "86 110 128 152 170 110",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "86 110 128 152 170 110",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M80.3,115.7a8.2,8.2,0,0,1-1.7-8.7,8,8,0,0,1,7.4-5h34V40a8,8,0,0,1,16,0v62h34a8,8,0,0,1,7.4,5,8.2,8.2,0,0,1-1.7,8.7l-42,42a8.2,8.2,0,0,1-11.4,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "86 110 128 152 170 110",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "86 110 128 152 170 110",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "86 110 128 152 170 110",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",
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

var DownloadSimple = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DownloadSimple.displayName = "DownloadSimple";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadSimple);
//# sourceMappingURL=DownloadSimple.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfQWNjb3VudF9BY2NvdW50RXhwb3J0X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRThFO0FBQ1Q7QUFDVTtBQUNIO0FBQ1E7QUFDbUI7QUFDL0I7QUFDZ0I7QUFDTTtBQUN5QjtBQUlDO0FBQzVGO0FBQ1E7QUFDbUU7QUFDOUI7QUFDMUI7QUFDVztBQUNuQjtBQUVtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSXJEeUMsVUFBVTtBQUFBLFdBQVZBLFVBQVU7RUFBVkEsVUFBVTtFQUFWQSxVQUFVO0VBQVZBLFVBQVU7RUFBVkEsVUFBVTtBQUFBLEdBQVZBLFVBQVUsS0FBVkEsVUFBVTtBQUFBLElBZVZDLGFBQWE7QUFBQSxXQUFiQSxhQUFhO0VBQWJBLGFBQWE7RUFBYkEsYUFBYTtBQUFBLEdBQWJBLGFBQWEsS0FBYkEsYUFBYTtBQVVsQixNQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsUUFBMEIsRUFBRUMsT0FBZSxLQUFtQjtFQUNsRixPQUFPLE1BQU07SUFDWCxJQUFJRCxRQUFRLEVBQUU7TUFDWixNQUFNRSxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQUVNLElBQUksRUFBRTtNQUFrQyxDQUFDLENBQUM7TUFFOUYzQixtREFBTSxDQUFDdUIsSUFBSSxFQUFHLEdBQUVELE9BQVEsT0FBTSxDQUFDO0lBQ2pDO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNTSxVQUFVLGdCQUNkLHdEQUFDLDREQUFJO0VBQ0gsWUFBWSxFQUFFM0IsdURBQVk7RUFDMUIsTUFBTSxFQUFDO0FBQU0sRUFFaEI7QUFFRCxNQUFNNEIsUUFBUSxHQUFHLHFCQUFxQjtBQUV0QyxNQUFNQyxTQUEwQixHQUFJQyxLQUFZLElBQUs7RUFDbkQsTUFBTTtJQUFFQztFQUFVLENBQUMsR0FBR0QsS0FBSztFQUUzQixNQUFNO0lBQUVFO0VBQUUsQ0FBQyxHQUFHcEIsOERBQWMsRUFBRTtFQUM5QixNQUFNcUIsUUFBUSxHQUFHcEIsOERBQVcsRUFBRTtFQUM5QixNQUFNO0lBQUVxQjtFQUFPLENBQUMsR0FBR2pELHdHQUFrQixFQUFFO0VBQ3ZDLE1BQU07SUFBRWtEO0VBQWUsQ0FBQyxHQUFHckIsNERBQVMsRUFBRTtFQUV0QyxNQUFNc0IsT0FBTyxHQUFHdEQsNkdBQXNCLENBQUNxRCxjQUFjLENBQUM7RUFFdEQsTUFBTSxDQUFDRSxJQUFJLENBQUMsR0FBRzdDLG9FQUFZLEVBQW1CO0VBRTlDLE1BQU0sQ0FBQytDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUc3QixnREFBUSxDQUFlLEVBQUUsQ0FBQztFQUNoRSxNQUFNOEIsWUFBWSxHQUFHRixXQUFXLENBQUNHLE1BQU0sSUFBSSxDQUFDO0VBRTVDLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2pDLGdEQUFRLENBQUMsSUFBSSxDQUFDO0VBRWhELE1BQU0sQ0FBQ2tDLFVBQVUsRUFBRUMsWUFBWSxDQUFDLEdBQUduQyxnREFBUSxDQUFDLElBQUksQ0FBQztFQUNqRCxNQUFNLENBQUNvQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHckMsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7RUFFN0MsTUFBTSxDQUFDc0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3ZDLGdEQUFRLENBQVMsRUFBRSxDQUFDO0VBQ3hELE1BQU0sQ0FBQ3dDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUd6QyxnREFBUSxDQUFTLEVBQUUsQ0FBQztFQUN0RCxNQUFNLENBQUNTLFFBQVEsRUFBRWlDLFdBQVcsQ0FBQyxHQUFHMUMsZ0RBQVEsQ0FBMEIsSUFBSSxDQUFDO0VBQ3ZFLE1BQU0sQ0FBQzJDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc1QyxnREFBUSxDQUFTLEVBQUUsQ0FBQztFQUV4RCxNQUFNNkMsUUFBUSxHQUFHOUMsK0NBQU8sQ0FBQyxPQUFtQztJQUMxRCxDQUFDTyxVQUFVLENBQUN3QyxTQUFTLEdBQUd6QixDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3ZDLENBQUNmLFVBQVUsQ0FBQ3lDLE9BQU8sR0FBRzFCLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFDdkMsQ0FBQ2YsVUFBVSxDQUFDMEMsV0FBVyxHQUFHM0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBQy9DLENBQUNmLFVBQVUsQ0FBQzJDLFdBQVcsR0FBRzVCLENBQUMsQ0FBQyxrQkFBa0I7RUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQ0EsQ0FBQyxDQUFDLENBQUM7RUFFUixNQUFNNkIsTUFBTSxHQUFHbkQsK0NBQU8sQ0FBQyxNQUFjO0lBQ25DLE1BQU1vRCxNQUFNLEdBQUcsUUFBUTtJQUN2QixNQUFNQyxNQUFnQixHQUFHLENBQUNELE1BQU0sRUFBRWIsVUFBVSxJQUFJLEVBQUUsRUFBRUUsU0FBUyxDQUFDO0lBRTlELElBQUlmLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUU0QixJQUFJLEVBQUU7TUFDakJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDN0IsT0FBTyxDQUFDNEIsSUFBSSxDQUFDO0lBQzNCO0lBRUEsT0FBT0QsTUFBTSxDQUFDRyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ3pCLENBQUMsRUFBRSxDQUFDOUIsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUU0QixJQUFJLEVBQUViLFNBQVMsRUFBRUYsVUFBVSxDQUFDLENBQUM7RUFFMUMsTUFBTWtCLGdCQUFnQixHQUFHcEYsNkZBQU8sQ0FBQ2tFLFVBQVUsQ0FBQztFQUU1QyxNQUFNbUIsUUFBMEQsR0FBRzVELG1EQUFXLENBQUMsQ0FBQzZELGFBQThCLEVBQUVDLFNBQTBCLEtBQUs7SUFDN0ksTUFBTUMsS0FBSyxHQUFHRCxTQUFTLENBQUNFLEdBQUcsQ0FBRUMsSUFBSSxJQUFLQSxJQUFJLENBQUNDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FDckRDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLEtBQUssS0FBSyxDQUFDLEdBQUdELEdBQUcsRUFBRSxHQUFHQyxLQUFLLENBQUMsQ0FBQyxDQUMxQ0MsSUFBSSxDQUFFRCxLQUFLLElBQUssQ0FBQyxDQUFDQSxLQUFLLENBQUM7SUFFM0IsTUFBTUUsS0FBSyxHQUFHVCxTQUFTLENBQUNFLEdBQUcsQ0FBRUMsSUFBSSxJQUFLQSxJQUFJLENBQUNJLEtBQWdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFFRCxLQUFLLElBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBRXBGL0IsWUFBWSxDQUFDeUIsS0FBSyxJQUFJUSxLQUFLLENBQUM7RUFDOUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU1DLFFBQW9ELEdBQUd4RSxtREFBVyxDQUFFeUUsTUFBdUIsSUFBSztJQUNwRyxNQUFNQyxRQUFRLEdBQUdELE1BQU0sQ0FBQy9ELGFBQWEsQ0FBQ2lFLFFBQVEsQ0FBQztJQUMvQyxNQUFNNUMsV0FBVyxHQUFHMEMsTUFBTSxDQUFDL0QsYUFBYSxDQUFDa0UsS0FBSyxDQUFDO0lBQy9DLE1BQU0zQyxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csTUFBTSxJQUFJLENBQUM7SUFFNUMsSUFBSSxDQUFDSCxXQUFXLENBQUNHLE1BQU0sRUFBRTtNQUN2QjtJQUNGO0lBRUEsSUFBSSxDQUFDTixPQUFPLEVBQUU7TUFDWjtJQUNGO0lBRUEsTUFBTWYsT0FBTyxHQUFHZSxPQUFPLENBQUNmLE9BQU87SUFFL0IsSUFBSSxDQUFDQSxPQUFPLEVBQUU7TUFDWjtJQUNGO0lBRUEyQixVQUFVLENBQUMsSUFBSSxDQUFDO0lBRWhCcUMsVUFBVSxDQUFDLE1BQU07TUFDZixNQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBTyxDQUFPLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO1FBQ3JELE1BQU0xQixNQUFNLEdBQUc7VUFDYmQsVUFBVSxFQUFFLEtBQUs7VUFDakJLLFVBQVUsRUFBRSxLQUFLO1VBQ2pCb0MsUUFBUSxFQUFFO1FBQ1osQ0FBQztRQUVELE1BQU1DLFNBQVMsR0FBRyxNQUFNO1VBQ3RCLElBQUlDLE1BQU0sQ0FBQ1gsTUFBTSxDQUFDbEIsTUFBTSxDQUFDLENBQUM4QixLQUFLLENBQUVoQixLQUFLLElBQUtBLEtBQUssQ0FBQyxFQUFFO1lBQ2pEVyxPQUFPLEVBQUU7VUFDWDtRQUNGLENBQUM7UUFFRCxJQUFJakQsV0FBVyxDQUFDdUQsUUFBUSxDQUFDN0UsVUFBVSxDQUFDMEMsV0FBVyxDQUFDLElBQUlwQixXQUFXLENBQUN1RCxRQUFRLENBQUM3RSxVQUFVLENBQUN5QyxPQUFPLENBQUMsRUFBRTtVQUM1RnZFLCtGQUF1QixDQUFDa0MsT0FBTyxFQUFFNkQsUUFBUSxDQUFDLENBQUNhLElBQUksQ0FBRUMsR0FBRyxJQUFLO1lBQ3ZEOUMsYUFBYSxDQUFDOEMsR0FBRyxDQUFDL0MsVUFBVSxDQUFDO1lBQzdCRyxZQUFZLENBQUM0QyxHQUFHLENBQUM3QyxTQUFTLENBQUM7WUFDM0JZLE1BQU0sQ0FBQ2QsVUFBVSxHQUFHLElBQUk7WUFDeEIwQyxTQUFTLEVBQUU7VUFDYixDQUFDLENBQUMsQ0FBQ00sS0FBSyxDQUFFQyxDQUFRLElBQUs7WUFDckJULE1BQU0sQ0FBQyxJQUFJVSxLQUFLLENBQUNELENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7VUFDOUIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxNQUFNO1VBQ0xyQyxNQUFNLENBQUNkLFVBQVUsR0FBRyxJQUFJO1FBQzFCO1FBRUEsSUFBSVYsV0FBVyxDQUFDdUQsUUFBUSxDQUFDN0UsVUFBVSxDQUFDMkMsV0FBVyxDQUFDLElBQUl4QixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFaUUsZUFBZSxFQUFFO1VBQzVFakgsNkZBQXFCLENBQUM7WUFBRWlDLE9BQU87WUFBRTZELFFBQVEsRUFBRUE7VUFBUyxDQUFDLENBQUMsQ0FDbkRhLElBQUksQ0FBRUMsR0FBRyxJQUFLO1lBQ2J6QyxhQUFhLENBQUN5QyxHQUFHLENBQUNqQyxNQUFNLENBQUM7WUFDekJBLE1BQU0sQ0FBQ1QsVUFBVSxHQUFHLElBQUk7WUFDeEJxQyxTQUFTLEVBQUU7VUFDYixDQUFDLENBQUMsQ0FDRE0sS0FBSyxDQUFFQyxDQUFRLElBQUs7WUFDbkJULE1BQU0sQ0FBQyxJQUFJVSxLQUFLLENBQUNELENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7VUFDOUIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxNQUFNO1VBQ0xyQyxNQUFNLENBQUNULFVBQVUsR0FBRyxJQUFJO1FBQzFCO1FBRUEsSUFBSWYsV0FBVyxDQUFDdUQsUUFBUSxDQUFDN0UsVUFBVSxDQUFDd0MsU0FBUyxDQUFDLEVBQUU7VUFDOUN2RSxxRkFBYSxDQUFDbUMsT0FBTyxFQUFFNkQsUUFBUSxDQUFDLENBQUNhLElBQUksQ0FBRUMsR0FBRyxJQUFLO1lBQzdDM0MsV0FBVyxDQUFDMkMsR0FBRyxDQUFDTSxZQUFZLENBQUM7WUFDN0J2QyxNQUFNLENBQUMyQixRQUFRLEdBQUcsSUFBSTtZQUN0QkMsU0FBUyxFQUFFO1lBRVgsSUFBSWxELFlBQVksRUFBRTtjQUNoQnRCLFlBQVksQ0FBQzZFLEdBQUcsQ0FBQ00sWUFBWSxFQUFFakYsT0FBTyxDQUFDLEVBQUU7WUFDM0M7VUFDRixDQUFDLENBQUMsQ0FBQzRFLEtBQUssQ0FBRUMsQ0FBUSxJQUFLO1lBQ3JCVCxNQUFNLENBQUMsSUFBSVUsS0FBSyxDQUFDRCxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1VBQzlCLENBQUMsQ0FBQztRQUNKLENBQUMsTUFBTTtVQUNMckMsTUFBTSxDQUFDMkIsUUFBUSxHQUFHLElBQUk7UUFDeEI7TUFDRixDQUFDLENBQUM7TUFFRkosT0FBTyxDQUNKUyxJQUFJLENBQUMsTUFBTTtRQUNWbkQsWUFBWSxDQUFDLEtBQUssQ0FBQztNQUNyQixDQUFDLENBQUMsQ0FDRHFELEtBQUssQ0FBRUMsQ0FBUSxJQUFLO1FBQ25CLElBQUlFLE9BQU8sR0FBR0YsQ0FBQyxDQUFDRSxPQUFPO1FBRXZCLElBQUlBLE9BQU8sS0FBSyxnREFBZ0QsRUFBRTtVQUNoRUEsT0FBTyxHQUFHcEUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQy9CO1FBRUFLLElBQUksQ0FBQ2tFLFNBQVMsQ0FBQyxDQUFDO1VBQUV2QyxJQUFJLEVBQUU5QyxhQUFhLENBQUNpRSxRQUFRO1VBQUVULE1BQU0sRUFBRSxDQUFDMEIsT0FBTztRQUFFLENBQUMsQ0FBQyxDQUFDO01BQ3ZFLENBQUMsQ0FBQyxDQUNESSxPQUFPLENBQUMsTUFBTTtRQUNieEQsVUFBVSxDQUFDLEtBQUssQ0FBQztNQUNuQixDQUFDLENBQUM7SUFDTixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1QsQ0FBQyxFQUFFLENBQUNaLE9BQU8sRUFBRUMsSUFBSSxFQUFFTCxDQUFDLENBQUMsQ0FBQztFQUV0QixNQUFNeUUsV0FBVyxHQUFHakcsbURBQVcsQ0FBRXFFLEtBQWlCLElBQUs7SUFDckQsT0FBTyxNQUFNO01BQ1gsTUFBTTZCLEtBQUssR0FBR3JFLElBQUksQ0FBQ3NFLGFBQWEsQ0FBQ3pGLGFBQWEsQ0FBQ2tFLEtBQUssQ0FBaUI7TUFDckUsTUFBTXdCLE1BQU0sR0FBR0YsS0FBSyxDQUFDWixRQUFRLENBQUNqQixLQUFLLENBQUM7TUFDcEMsSUFBSWQsTUFBb0I7TUFFeEIsSUFBSTZDLE1BQU0sRUFBRTtRQUNWN0MsTUFBTSxHQUFHMkMsS0FBSyxDQUFDRyxNQUFNLENBQUVDLENBQUMsSUFBS0EsQ0FBQyxLQUFLakMsS0FBSyxDQUFDO01BQzNDLENBQUMsTUFBTTtRQUNMZCxNQUFNLEdBQUcsQ0FBQyxHQUFHMkMsS0FBSyxFQUFFN0IsS0FBSyxDQUFDO01BQzVCO01BRUF4QyxJQUFJLENBQUMwRSxhQUFhLENBQUM3RixhQUFhLENBQUNrRSxLQUFLLEVBQUVyQixNQUFNLENBQUM7TUFDL0N2QixjQUFjLENBQUN1QixNQUFNLENBQUM7SUFDeEIsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDMUIsSUFBSSxDQUFDLENBQUM7RUFFVixNQUFNMkUsS0FBSyxHQUFHdEcsK0NBQU8sQ0FBQyxNQUFvQjtJQUN4QyxPQUFPLENBQ0w7TUFDRXVHLE9BQU8sRUFBRSxDQUFDN0UsT0FBTyxJQUFJQSxPQUFPLENBQUM4RSxVQUFVLElBQUksQ0FBQzlFLE9BQU8sQ0FBQ2lFLGVBQWU7TUFDbkVjLE1BQU0sRUFBRSxLQUFLO01BQ2JDLElBQUksRUFBRWhILHVEQUFJO01BQ1ZpSCxLQUFLLEVBQUVyRixDQUFDLENBQUMsb0JBQW9CLENBQUM7TUFDOUJOLElBQUksRUFBRVQsVUFBVSxDQUFDMkM7SUFDbkIsQ0FBQyxFQUNEO01BQ0VxRCxPQUFPLEVBQUUsQ0FBQzdFLE9BQU8sSUFBSSxDQUFDLENBQUNBLE9BQU8sQ0FBQzhFLFVBQVU7TUFDekNDLE1BQU0sRUFBRSxLQUFLO01BQ2JDLElBQUksRUFBRWpILHVEQUFNO01BQ1prSCxLQUFLLEVBQUVyRixDQUFDLENBQUMsa0JBQWtCLENBQUM7TUFDNUJOLElBQUksRUFBRVQsVUFBVSxDQUFDd0M7SUFDbkIsQ0FBQyxFQUNEO01BQ0V3RCxPQUFPLEVBQUUsQ0FBQzdFLE9BQU8sSUFBSUEsT0FBTyxDQUFDOEUsVUFBVSxJQUFJLENBQUNsRyx5RUFBaUIsQ0FBQ29CLE9BQU8sQ0FBQ2YsT0FBTyxDQUFDO01BQzlFOEYsTUFBTSxFQUFFLENBQUNuRyx5RUFBaUIsQ0FBQyxDQUFBb0IsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUVmLE9BQU8sS0FBSSxFQUFFLENBQUM7TUFDbEQrRixJQUFJLEVBQUU5Ryx1REFBTTtNQUNaK0csS0FBSyxFQUFFckYsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO01BQzlCTixJQUFJLEVBQUVULFVBQVUsQ0FBQzBDO0lBQ25CLENBQUMsRUFDRDtNQUNFc0QsT0FBTyxFQUFFLENBQUM3RSxPQUFPLElBQUksQ0FBQyxFQUFDQSxPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFOEUsVUFBVTtNQUMxQ0MsTUFBTSxFQUFFLEtBQUs7TUFDYkMsSUFBSSxFQUFFL0csdURBQU07TUFDWmdILEtBQUssRUFBRXJGLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztNQUMxQk4sSUFBSSxFQUFFVCxVQUFVLENBQUN5QztJQUNuQixDQUFDLENBQ0Y7RUFDSCxDQUFDLEVBQUUsQ0FBQ3RCLE9BQU8sRUFBRUosQ0FBQyxDQUFDLENBQUM7RUFFaEIsTUFBTXNGLE1BQU0sR0FBRzlHLG1EQUFXLENBQUMsTUFBTTtJQUMvQixJQUFJMkIsY0FBYyxFQUFFO01BQ2xCRixRQUFRLENBQUUsb0JBQW1CRSxjQUFlLEVBQUMsQ0FBQztJQUNoRCxDQUFDLE1BQU07TUFDTEYsUUFBUSxDQUFDcEQsOEZBQW1CLENBQUM7SUFDL0I7RUFDRixDQUFDLEVBQUUsQ0FBQ3NELGNBQWMsRUFBRUYsUUFBUSxDQUFDLENBQUM7RUFFOUJ4QixpREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJLENBQUMyQixPQUFPLEVBQUU7TUFDWkYsTUFBTSxFQUFFO0lBQ1Y7RUFDRixDQUFDLEVBQUUsQ0FBQ0UsT0FBTyxFQUFFRixNQUFNLEVBQUVELFFBQVEsQ0FBQyxDQUFDO0VBRS9CeEIsaURBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSTJCLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVmLE9BQU8sRUFBRTtNQUNwQmdCLElBQUksQ0FBQ2tGLFdBQVcsRUFBRTtJQUNwQjtFQUNGLENBQUMsRUFBRSxDQUFDbkYsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUVmLE9BQU8sRUFBRWdCLElBQUksQ0FBQyxDQUFDO0VBRTVCckQsb0dBQWdCLENBQUNxRCxJQUFJLEVBQUVuQixhQUFhLENBQUNpRSxRQUFRLENBQUM7RUFFOUMsSUFBSSxDQUFDL0MsT0FBTyxFQUFFO0lBQ1osT0FBTyxJQUFJO0VBQ2I7RUFFQSxvQkFDRSx3REFBQyxnRkFBVztJQUFDLFNBQVMsRUFBRXRDLGtEQUFFLENBQUNpQyxTQUFTLENBQUU7SUFBQSx1QkFDcEMsd0RBQUMsNkZBQXdCO01BQ3ZCLFdBQVcsRUFBRWdCLE9BQVE7TUFDckIsTUFBTSxFQUFFdUUsTUFBTztNQUNmLGlCQUFpQixFQUFFO1FBQ2pCRSxRQUFRLEVBQUU3RSxTQUFTLEdBQUdYLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBR0EsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNoRG9GLElBQUksRUFBRXpFLFNBQVMsR0FBRzhFLFNBQVMsR0FBRzlGLFVBQVU7UUFDeEMrRixRQUFRLEVBQUU3RSxVQUFVLElBQUksQ0FBQ04sV0FBVyxDQUFDRyxNQUFNO1FBQzNDSyxPQUFPLEVBQUVBLE9BQU87UUFDaEI0RSxPQUFPLEVBQUVoRixTQUFTLEdBQUdOLElBQUksQ0FBQ3VGLE1BQU0sR0FBRzFGO01BQ3JDLENBQUU7TUFDRixjQUFjLEVBQUUsQ0FDZDtRQUNFa0YsSUFBSSxlQUFFLHdEQUFDLDhGQUFTLEtBQUc7UUFDbkJPLE9BQU8sRUFBRXpGLE1BQU07UUFDZndGLFFBQVEsRUFBRTNFO01BQ1osQ0FBQyxDQUNEO01BQ0YsS0FBSyxFQUNISixTQUFTLEdBQ0xYLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUNuQixDQUFDUyxZQUFZLEdBQ1hULENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUN0QndCLFFBQVEsQ0FBQ2pCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FDOUI7TUFBQSx1QkFFRDtRQUFLLFNBQVMsRUFBQyxnQkFBZ0I7UUFBQSx3QkFDN0I7VUFBSyxTQUFTLEVBQUV6QyxrREFBRSxDQUFDLFFBQVEsRUFBRTtZQUFFLFVBQVUsRUFBRSxDQUFDNkM7VUFBVSxDQUFDLENBQUU7VUFBQSx1QkFDdkQsd0RBQUMscUZBQVE7WUFDUCxXQUFXLEVBQUVYLENBQUMsQ0FBQywrREFBK0QsQ0FBRTtZQUNoRixLQUFLLEVBQUVBLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBRTtZQUM3QyxJQUFJLEVBQUM7VUFBUztRQUNkLEVBQ0UsRUFFSlcsU0FBUyxpQkFDUCx5REFBQyw0REFBSTtVQUNILElBQUksRUFBRU4sSUFBSztVQUNYLGFBQWEsRUFBRTtZQUNiLENBQUNuQixhQUFhLENBQUNpRSxRQUFRLEdBQUcsRUFBRTtZQUM1QixDQUFDakUsYUFBYSxDQUFDa0UsS0FBSyxHQUFHO1VBQ3pCLENBQUU7VUFDRixJQUFJLEVBQUV4RCxRQUFTO1VBQ2YsY0FBYyxFQUFFd0MsUUFBUztVQUN6QixRQUFRLEVBQUVZLFFBQVM7VUFBQSx3QkFFbkIsd0RBQUMsaUVBQVM7WUFDUixJQUFJLEVBQUU5RCxhQUFhLENBQUNpRSxRQUFTO1lBQzdCLEtBQUssRUFBRSxDQUNMO2NBQ0VpQixPQUFPLEVBQUVwRSxDQUFDLENBQUMsc0JBQXNCLENBQUM7Y0FDbEM2RixRQUFRLEVBQUU7WUFDWixDQUFDLENBQ0Q7WUFDRixtQkFBbUIsRUFBRSxJQUFLO1lBQUEsdUJBRTFCLHdEQUFDLDREQUFLO2NBQ0osUUFBUSxFQUFFOUUsT0FBUTtjQUNsQixXQUFXLEVBQUVmLENBQUMsQ0FBQyw4QkFBOEIsQ0FBRTtjQUMvQyxNQUFNLGVBQUUsbUVBQVM7Y0FDakIsSUFBSSxFQUFDO1lBQVU7VUFDZixFQUNRLGVBQ1osd0RBQUMsaUVBQVM7WUFDUixTQUFTLEVBQUMsTUFBTTtZQUNoQixJQUFJLEVBQUVkLGFBQWEsQ0FBQ2tFLEtBQU07WUFBQSx1QkFFMUI7Y0FBSyxTQUFTLEVBQUMsd0JBQXdCO2NBQUEsVUFFbkM0QixLQUFLLENBQUN4QyxHQUFHLENBQUVzRCxJQUFJLElBQUs7Z0JBQ2xCLE1BQU1DLFNBQVMsR0FBR3hGLFdBQVcsYUFBWEEsV0FBVyx1QkFBWEEsV0FBVyxDQUFFdUQsUUFBUSxDQUFDZ0MsSUFBSSxDQUFDcEcsSUFBSSxDQUFDO2dCQUVsRCxJQUFJb0csSUFBSSxDQUFDWCxNQUFNLEVBQUU7a0JBQ2YsT0FBTyxJQUFJO2dCQUNiO2dCQUVBLG9CQUNFLHdEQUFDLDREQUFXO2tCQUNWLFNBQVMsRUFBRXJILGtEQUFFLENBQ1gsYUFBYSxFQUNaLFVBQVNnSSxJQUFJLENBQUNwRyxJQUFLLEVBQUMsRUFDckI7b0JBQ0VzRyxRQUFRLEVBQUVELFNBQVM7b0JBQ25CTCxRQUFRLEVBQUVJLElBQUksQ0FBQ2I7a0JBQ2pCLENBQUMsQ0FDRDtrQkFFRixZQUFZLGVBQ1Ysd0RBQUMsNERBQWM7b0JBQ2IsZUFBZSxFQUFDLHNCQUFzQjtvQkFDdEMsWUFBWSxFQUFFYSxJQUFJLENBQUNWLElBQUs7b0JBQ3hCLElBQUksRUFBQyxJQUFJO29CQUNULE1BQU0sRUFBQztrQkFBTSxFQUVmO2tCQUNGLElBQUksRUFBRVUsSUFBSSxDQUFDVCxLQUFNO2tCQUNqQixXQUFXLEVBQUdTLElBQUksQ0FBQ2IsT0FBTyxJQUFJbEUsT0FBTyxHQUFJMEUsU0FBUyxHQUFHaEIsV0FBVyxDQUFDcUIsSUFBSSxDQUFDcEcsSUFBSSxDQUFFO2tCQUM1RSxTQUFTLGVBQ1Asd0RBQUMsNERBQUk7b0JBQ0gsU0FBUyxFQUFDLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFDLDRCQUE0QjtvQkFDdEMsWUFBWSxFQUFFMUIsdURBQVk7b0JBQzFCLElBQUksRUFBQyxJQUFJO29CQUNULE1BQU0sRUFBQztrQkFBTTtnQkFFZixHQW5CRzhILElBQUksQ0FBQ3BHLElBQUksQ0FvQmQ7Y0FFTixDQUFDO1lBQUM7VUFFQSxFQUNJO1FBQUEsRUFFZixFQUdELENBQUNpQixTQUFTLGlCQUNSO1VBQ0UsU0FBUyxFQUFFN0Msa0RBQUUsQ0FDWCxrQkFBa0IsRUFDbEI7WUFBRSxlQUFlLEVBQUUyQztVQUFhLENBQUMsQ0FDakM7VUFBQSxXQUdBRixXQUFXLENBQUN1RCxRQUFRLENBQUM3RSxVQUFVLENBQUMwQyxXQUFXLENBQUMsaUJBQzFDO1lBQUssU0FBUyxFQUFDLGdCQUFnQjtZQUFBLHdCQUM3QjtjQUFLLFNBQVMsRUFBQyxjQUFjO2NBQUEsVUFBRUgsUUFBUSxDQUFDdkMsVUFBVSxDQUFDMEMsV0FBVztZQUFDLEVBQU8sZUFDdEUsd0RBQUMsNERBQUs7Y0FDSixTQUFTLEVBQUMsbUJBQW1CO2NBQzdCLE9BQU8sRUFBRVYsVUFBVztjQUNwQixPQUFPLEVBQUU7WUFBRyxFQUNaLGVBQ0Ysd0RBQUMsNERBQU07Y0FDTCxJQUFJLGVBQ0Ysd0RBQUMsNERBQUk7Z0JBQUMsWUFBWSxFQUFFaEQsdURBQVVBO2NBQUMsRUFDL0I7Y0FDRixPQUFPLEVBQUVrRSxnQkFBaUI7Y0FDMUIsSUFBSSxFQUFDLE9BQU87Y0FBQSxVQUVYbkMsQ0FBQyxDQUFDLG1CQUFtQjtZQUFDLEVBQ2hCO1VBQUEsRUFFWixFQUdETyxXQUFXLENBQUN1RCxRQUFRLENBQUM3RSxVQUFVLENBQUMyQyxXQUFXLENBQUMsaUJBQzFDO1lBQUssU0FBUyxFQUFDLGdCQUFnQjtZQUFBLHdCQUM3QjtjQUFLLFNBQVMsRUFBQyxjQUFjO2NBQUEsVUFBRUosUUFBUSxDQUFDdkMsVUFBVSxDQUFDMkMsV0FBVztZQUFDLEVBQU8sZUFDdEUsd0RBQUMsMEZBQVU7Y0FBQyxVQUFVLEVBQUVOO1lBQVcsRUFBRztVQUFBLEVBRXpDLEVBR0RmLFdBQVcsQ0FBQ3VELFFBQVEsQ0FBQzdFLFVBQVUsQ0FBQ3lDLE9BQU8sQ0FBQyxpQkFDdEM7WUFBSyxTQUFTLEVBQUMsZ0JBQWdCO1lBQUEsd0JBQzdCO2NBQUssU0FBUyxFQUFDLGNBQWM7Y0FBQSxVQUFFRixRQUFRLENBQUN2QyxVQUFVLENBQUN5QyxPQUFPO1lBQUMsRUFBTyxlQUNsRTtjQUFLLFNBQVMsRUFBQyxTQUFTO2NBQUEsdUJBQ3RCLHdEQUFDLDREQUFRO2dCQUNQLFVBQVUsRUFBQyxHQUFHO2dCQUNkLFdBQVcsRUFBRSxDQUFDMUMseUVBQWlCLENBQUNvQixPQUFPLENBQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFO2dCQUN6RCxJQUFJLEVBQUUsR0FBSTtnQkFDVixLQUFLLEVBQUV3QztjQUFPO1lBQ2QsRUFDRTtVQUFBLEVBRVQsRUFHRHRCLFdBQVcsQ0FBQ3VELFFBQVEsQ0FBQzdFLFVBQVUsQ0FBQ3dDLFNBQVMsQ0FBQyxJQUFJckMsUUFBUSxpQkFDcEQ7WUFBSyxTQUFTLEVBQUMsZ0JBQWdCO1lBQUEsd0JBQzdCO2NBQUssU0FBUyxFQUFDLGNBQWM7Y0FBQSxVQUFFWSxDQUFDLENBQUMsZ0JBQWdCO1lBQUMsRUFBTyxFQUV2RFMsWUFBWSxpQkFDVjtjQUFBLHdCQUNFO2dCQUFLLFNBQVMsRUFBQyxXQUFXO2dCQUFBLHVCQUN4Qix3REFBQyw0REFBUTtrQkFDUCxLQUFLLEVBQUMsd0JBQXdCO2tCQUM5QixTQUFTLEVBQUU7b0JBQ1R3RixZQUFZLEVBQUVqSSx1REFBVztvQkFDekJrSSxNQUFNLEVBQUU7a0JBQ1Y7Z0JBQUU7Y0FDRixFQUNFLGVBQ047Z0JBQUssU0FBUyxFQUFDLGdCQUFnQjtnQkFBQSxVQUM1QmxHLENBQUMsQ0FBQyxVQUFVO2NBQUMsRUFDVixlQUNOO2dCQUFLLFNBQVMsRUFBQyx1QkFBdUI7Z0JBQUEsVUFDbkNBLENBQUMsQ0FBQywyREFBMkQ7Y0FBQyxFQUMzRDtZQUFBLEVBRVQsRUFHRCxDQUFDUyxZQUFZLGlCQUNYLHdEQUFDLDREQUFXO2NBQ1YsU0FBUyxFQUFDLGVBQWU7Y0FDekIsWUFBWSxlQUNWLHdEQUFDLDREQUFjO2dCQUNiLGVBQWUsRUFBQyxzQkFBc0I7Z0JBQ3RDLFlBQVksRUFBRXRDLHVEQUFPO2dCQUNyQixJQUFJLEVBQUMsSUFBSTtnQkFDVCxNQUFNLEVBQUM7Y0FBTSxFQUVmO2NBQ0YsSUFBSSxFQUFHLEdBQUVpQyxPQUFPLENBQUNmLE9BQVEsT0FBTztjQUNoQyxXQUFXLEVBQUVGLFlBQVksQ0FBQ0MsUUFBUSxFQUFFZ0IsT0FBTyxDQUFDZixPQUFPLENBQUU7Y0FDckQsU0FBUyxlQUNQLHdEQUFDLDREQUFJO2dCQUNILFNBQVMsRUFBQyx5QkFBeUI7Z0JBQ25DLFlBQVksRUFBRW5CLHVEQUFlO2dCQUM3QixJQUFJLEVBQUMsSUFBSTtnQkFDVCxNQUFNLEVBQUM7Y0FBTTtZQUVmLEVBRUw7VUFBQSxFQUdOO1FBQUEsRUFHTjtNQUFBO0lBRUM7RUFDbUIsRUFDZjtBQUVsQixDQUFDO0FBRUQsTUFBTWlJLGFBQWEsR0FBR3BILDhEQUFNLENBQUNjLFNBQVMsQ0FBQztFQUFBO0VBQUE7QUFBQSxHQUFRLENBQUM7RUFBRXVHLEtBQUssRUFBRTtJQUFFQztFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQzlFLE9BQU87SUFDTCxpQkFBaUIsRUFBRTtNQUNqQkMsT0FBTyxFQUFHLEtBQUlELEtBQUssQ0FBQ0MsT0FBUTtJQUM5QixDQUFDO0lBRUQsU0FBUyxFQUFFO01BQ1RDLFNBQVMsRUFBRUYsS0FBSyxDQUFDRyxNQUFNO01BQ3ZCQyxZQUFZLEVBQUVKLEtBQUssQ0FBQ0csTUFBTTtNQUUxQixZQUFZLEVBQUU7UUFDWkMsWUFBWSxFQUFFSixLQUFLLENBQUNLO01BQ3RCO0lBQ0YsQ0FBQztJQUVELHlCQUF5QixFQUFFO01BQ3pCQyxPQUFPLEVBQUUsTUFBTTtNQUNmQyxhQUFhLEVBQUUsUUFBUTtNQUN2QkMsR0FBRyxFQUFFUixLQUFLLENBQUNTO0lBQ2IsQ0FBQztJQUVELGNBQWMsRUFBRTtNQUNkLHVCQUF1QixFQUFFVCxLQUFLLENBQUMsUUFBUSxDQUFDO01BQ3hDVSxTQUFTLEVBQUUsT0FBTztNQUVsQixZQUFZLEVBQUU7UUFDWix1QkFBdUIsRUFBRVYsS0FBSyxDQUFDVztNQUNqQyxDQUFDO01BRUQsWUFBWSxFQUFFO1FBQ1pDLE9BQU8sRUFBRSxHQUFHO1FBRVosaUJBQWlCLEVBQUU7VUFDakJDLE1BQU0sRUFBRSxhQUFhO1VBRXJCLFNBQVMsRUFBRTtZQUNUQyxlQUFlLEVBQUVkLEtBQUssQ0FBQyxRQUFRO1VBQ2pDO1FBQ0Y7TUFDRjtJQUNGLENBQUM7SUFFRCwwQkFBMEIsRUFBRTtNQUMxQmUsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFFRCxnQkFBZ0IsRUFBRTtNQUNoQiw2QkFBNkIsRUFBRTtRQUM3QkMsUUFBUSxFQUFFLFFBQVE7UUFFbEIsd0JBQXdCLEVBQUU7VUFDeEJDLFlBQVksRUFBRSxVQUFVO1VBQ3hCQyxLQUFLLEVBQUUsTUFBTTtVQUNiRixRQUFRLEVBQUUsUUFBUTtVQUNsQkQsWUFBWSxFQUFFZixLQUFLLENBQUNtQjtRQUN0QjtNQUNGO0lBQ0YsQ0FBQztJQUVELENBQUUsV0FBVXZJLFVBQVUsQ0FBQzJDLFdBQVksRUFBQyxHQUFHO01BQ3JDLGlCQUFpQixFQUFFeUUsS0FBSyxDQUFDLFNBQVM7SUFDcEMsQ0FBQztJQUVELENBQUUsV0FBVXBILFVBQVUsQ0FBQ3dDLFNBQVUsa0JBQWlCLEdBQUc7TUFDbkQsaUJBQWlCLEVBQUU0RSxLQUFLLENBQUMsVUFBVTtJQUNyQyxDQUFDO0lBRUQsQ0FBRSxXQUFVcEgsVUFBVSxDQUFDMEMsV0FBWSxFQUFDLEdBQUc7TUFDckMsaUJBQWlCLEVBQUUwRSxLQUFLLENBQUMsUUFBUTtJQUNuQyxDQUFDO0lBRUQsQ0FBRSxXQUFVcEgsVUFBVSxDQUFDeUMsT0FBUSxFQUFDLEdBQUc7TUFDakMsaUJBQWlCLEVBQUUyRSxLQUFLLENBQUMsWUFBWTtJQUN2QyxDQUFDO0lBRUQsbUJBQW1CLEVBQUU7TUFDbkJNLE9BQU8sRUFBRSxNQUFNO01BQ2ZDLGFBQWEsRUFBRSxRQUFRO01BQ3ZCQyxHQUFHLEVBQUVSLEtBQUssQ0FBQ29CO0lBQ2IsQ0FBQztJQUVELGlCQUFpQixFQUFFO01BQ2pCZCxPQUFPLEVBQUUsTUFBTTtNQUNmQyxhQUFhLEVBQUUsUUFBUTtNQUN2QkMsR0FBRyxFQUFFUixLQUFLLENBQUNxQixJQUFJO01BRWYsZUFBZSxFQUFFO1FBQ2ZDLFVBQVUsRUFBRXRCLEtBQUssQ0FBQ3VCLGdCQUFnQjtRQUNsQ0MsUUFBUSxFQUFFeEIsS0FBSyxDQUFDeUIsZ0JBQWdCO1FBQ2hDQyxVQUFVLEVBQUUxQixLQUFLLENBQUMyQixrQkFBa0I7UUFDcENDLEtBQUssRUFBRTVCLEtBQUssQ0FBQzZCLGNBQWM7UUFDM0JDLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BRUQsb0JBQW9CLEVBQUU7UUFDcEIsb0JBQW9CLEVBQUU7VUFDcEJDLFVBQVUsRUFBRSxPQUFPO1VBQ25CckIsU0FBUyxFQUFFO1FBQ2I7TUFDRixDQUFDO01BRUQsVUFBVSxFQUFFO1FBQ1ZKLE9BQU8sRUFBRSxNQUFNO1FBQ2ZDLGFBQWEsRUFBRSxLQUFLO1FBQ3BCeUIsY0FBYyxFQUFFO01BQ2xCO0lBQ0YsQ0FBQztJQUVELGdCQUFnQixFQUFFO01BQ2hCLGVBQWUsRUFBRTtRQUNmMUIsT0FBTyxFQUFFO01BQ1g7SUFDRixDQUFDO0lBRUQsWUFBWSxFQUFFO01BQ1pBLE9BQU8sRUFBRSxNQUFNO01BQ2YwQixjQUFjLEVBQUUsUUFBUTtNQUN4QixtQkFBbUIsRUFBRWhDLEtBQUssQ0FBQ1c7SUFDN0IsQ0FBQztJQUVELGlCQUFpQixFQUFFO01BQ2pCaUIsS0FBSyxFQUFFNUIsS0FBSyxDQUFDaUMsZ0JBQWdCO01BQzdCdkIsU0FBUyxFQUFFLFFBQVE7TUFDbkJZLFVBQVUsRUFBRXRCLEtBQUssQ0FBQ3VCLGdCQUFnQjtNQUNsQ0MsUUFBUSxFQUFFeEIsS0FBSyxDQUFDa0MsZ0JBQWdCO01BQ2hDUixVQUFVLEVBQUUxQixLQUFLLENBQUNtQztJQUNwQixDQUFDO0lBRUQsd0JBQXdCLEVBQUU7TUFDeEJsQyxPQUFPLEVBQUcsS0FBSUQsS0FBSyxDQUFDb0MsZUFBZSxHQUFHcEMsS0FBSyxDQUFDQyxPQUFRLElBQUc7TUFDdkQyQixLQUFLLEVBQUU1QixLQUFLLENBQUM2QixjQUFjO01BQzNCbkIsU0FBUyxFQUFFLFFBQVE7TUFDbkJjLFFBQVEsRUFBRXhCLEtBQUssQ0FBQ3FDLGdCQUFnQjtNQUNoQ1gsVUFBVSxFQUFFMUIsS0FBSyxDQUFDc0M7SUFDcEI7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWV4QyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5cEJjO0FBQ2dCO0FBQ1o7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsU0FBUyxzRUFBbUI7QUFDNUI7O0FBRUEsa0NBQWtDLGlEQUFVO0FBQzVDLFNBQVMsMERBQW1CLENBQUMsNERBQVE7QUFDckM7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBLGlFQUFlLGNBQWMsRUFBQztBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvQWNjb3VudEV4cG9ydC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvcGhvc3Bob3ItcmVhY3QvZGlzdC9pY29ucy9Eb3dubG9hZFNpbXBsZS5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IExheW91dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IEFsZXJ0Qm94IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9BbGVydCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9JY29uL0Nsb3NlSWNvbic7XG5pbXBvcnQgV29yZFBocmFzZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvV29yZFBocmFzZSc7XG5pbXBvcnQgeyBERUZBVUxUX1JPVVRFUl9QQVRIIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMvcm91dGVyJztcbmltcG9ydCB1c2VHZXRBY2NvdW50QnlBZGRyZXNzIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VHZXRBY2NvdW50QnlBZGRyZXNzJztcbmltcG9ydCB1c2VDb3B5IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZUNvcHknO1xuaW1wb3J0IHVzZUZvY3VzRm9ybUl0ZW0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9mb3JtL3VzZUZvY3VzRm9ybUl0ZW0nO1xuaW1wb3J0IHVzZURlZmF1bHROYXZpZ2F0ZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3JvdXRlci91c2VEZWZhdWx0TmF2aWdhdGUnO1xuaW1wb3J0IHsgZXhwb3J0QWNjb3VudCwgZXhwb3J0QWNjb3VudFByaXZhdGVLZXksIGtleXJpbmdFeHBvcnRNbmVtb25pYyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFBob3NwaG9ySWNvbiwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUNhbGxiYWNrcywgRm9ybUZpZWxkRGF0YSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMvZm9ybSc7XG5pbXBvcnQgeyBLZXlyaW5nUGFpciRKc29uIH0gZnJvbSAnQHN1YndhbGxldC9rZXlyaW5nL3R5cGVzJztcbmltcG9ydCB7IEJhY2tncm91bmRJY29uLCBCdXR0b24sIEZpZWxkLCBGb3JtLCBJY29uLCBJbnB1dCwgUGFnZUljb24sIFNldHRpbmdJdGVtLCBTd1FSQ29kZSB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBDaGVja0NpcmNsZSwgQ29weVNpbXBsZSwgRG93bmxvYWRTaW1wbGUsIEZpbGVKcywgTGVhZiwgUXJDb2RlLCBXYWxsZXQgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGlzRXRoZXJldW1BZGRyZXNzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHM7XG5cbmVudW0gRXhwb3J0VHlwZSB7XG4gIEpTT05fRklMRSA9ICdqc29uLWZpbGUnLFxuICBQUklWQVRFX0tFWSA9ICdwcml2YXRlLWtleScsXG4gIFFSX0NPREUgPSAncXItY29kZScsXG4gIFNFRURfUEhSQVNFID0gJ3NlZWQtcGhyYXNlJ1xufVxuXG5pbnRlcmZhY2UgRXhwb3J0SXRlbSB7XG4gIGRpc2FibGU6IGJvb2xlYW47XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgaWNvbjogUGhvc3Bob3JJY29uO1xuICBsYWJlbDogc3RyaW5nO1xuICB0eXBlOiBFeHBvcnRUeXBlO1xufVxuXG5lbnVtIEZvcm1GaWVsZE5hbWUge1xuICBQQVNTV09SRCA9ICdwYXNzd29yZCcsXG4gIFRZUEVTID0gJ3R5cGVzJyxcbn1cblxuaW50ZXJmYWNlIEV4cG9ydEZvcm1TdGF0ZSB7XG4gIFtGb3JtRmllbGROYW1lLlBBU1NXT1JEXTogc3RyaW5nO1xuICBbRm9ybUZpZWxkTmFtZS5UWVBFU106IEV4cG9ydFR5cGVbXTtcbn1cblxuY29uc3Qgb25FeHBvcnRKc29uID0gKGpzb25EYXRhOiBLZXlyaW5nUGFpciRKc29uLCBhZGRyZXNzOiBzdHJpbmcpOiAoKCkgPT4gdm9pZCkgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmIChqc29uRGF0YSkge1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShqc29uRGF0YSldLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyB9KTtcblxuICAgICAgc2F2ZUFzKGJsb2IsIGAke2FkZHJlc3N9Lmpzb25gKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBGaW5pc2hJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17Q2hlY2tDaXJjbGV9XG4gICAgd2VpZ2h0PSdmaWxsJ1xuICAvPlxuKTtcblxuY29uc3QgZm9ybU5hbWUgPSAnYWNjb3VudC1leHBvcnQtZm9ybSc7XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgZ29Ib21lIH0gPSB1c2VEZWZhdWx0TmF2aWdhdGUoKTtcbiAgY29uc3QgeyBhY2NvdW50QWRkcmVzcyB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgYWNjb3VudCA9IHVzZUdldEFjY291bnRCeUFkZHJlc3MoYWNjb3VudEFkZHJlc3MpO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxFeHBvcnRGb3JtU3RhdGU+KCk7XG5cbiAgY29uc3QgW2V4cG9ydFR5cGVzLCBzZXRFeHBvcnRUeXBlc10gPSB1c2VTdGF0ZTxFeHBvcnRUeXBlW10+KFtdKTtcbiAgY29uc3QgZXhwb3J0U2luZ2xlID0gZXhwb3J0VHlwZXMubGVuZ3RoIDw9IDE7XG5cbiAgY29uc3QgW2ZpcnN0U3RlcCwgc2V0Rmlyc3RTdGVwXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXRJc0Rpc2FibGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcHJpdmF0ZUtleSwgc2V0UHJpdmF0ZUtleV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3B1YmxpY0tleSwgc2V0UHVibGljS2V5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbanNvbkRhdGEsIHNldEpzb25EYXRhXSA9IHVzZVN0YXRlPG51bGwgfCBLZXlyaW5nUGFpciRKc29uPihudWxsKTtcbiAgY29uc3QgW3NlZWRQaHJhc2UsIHNldFNlZWRQaHJhc2VdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3QgdGl0bGVNYXAgPSB1c2VNZW1vKCgpOiBSZWNvcmQ8RXhwb3J0VHlwZSwgc3RyaW5nPiA9PiAoe1xuICAgIFtFeHBvcnRUeXBlLkpTT05fRklMRV06IHQoJ1N1Y2Nlc3NmdWwnKSxcbiAgICBbRXhwb3J0VHlwZS5RUl9DT0RFXTogdCgnWW91ciBRUiBjb2RlJyksXG4gICAgW0V4cG9ydFR5cGUuUFJJVkFURV9LRVldOiB0KCdZb3VyIHByaXZhdGUga2V5JyksXG4gICAgW0V4cG9ydFR5cGUuU0VFRF9QSFJBU0VdOiB0KCdZb3VyIHNlZWQgcGhyYXNlJylcbiAgfSksIFt0XSk7XG5cbiAgY29uc3QgcXJEYXRhID0gdXNlTWVtbygoKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBwcmVmaXggPSAnc2VjcmV0JztcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW3ByZWZpeCwgcHJpdmF0ZUtleSB8fCAnJywgcHVibGljS2V5XTtcblxuICAgIGlmIChhY2NvdW50Py5uYW1lKSB7XG4gICAgICByZXN1bHQucHVzaChhY2NvdW50Lm5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuam9pbignOicpO1xuICB9LCBbYWNjb3VudD8ubmFtZSwgcHVibGljS2V5LCBwcml2YXRlS2V5XSk7XG5cbiAgY29uc3Qgb25Db3B5UHJpdmF0ZUtleSA9IHVzZUNvcHkocHJpdmF0ZUtleSk7XG5cbiAgY29uc3Qgb25VcGRhdGU6IEZvcm1DYWxsYmFja3M8RXhwb3J0Rm9ybVN0YXRlPlsnb25GaWVsZHNDaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKChjaGFuZ2VkRmllbGRzOiBGb3JtRmllbGREYXRhW10sIGFsbEZpZWxkczogRm9ybUZpZWxkRGF0YVtdKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBhbGxGaWVsZHMubWFwKChkYXRhKSA9PiBkYXRhLmVycm9ycyB8fCBbXSlcbiAgICAgIC5yZWR1Y2UoKG9sZCwgdmFsdWUpID0+IFsuLi5vbGQsIC4uLnZhbHVlXSlcbiAgICAgIC5zb21lKCh2YWx1ZSkgPT4gISF2YWx1ZSk7XG5cbiAgICBjb25zdCBlbXB0eSA9IGFsbEZpZWxkcy5tYXAoKGRhdGEpID0+IGRhdGEudmFsdWUgYXMgdW5rbm93bikuc29tZSgodmFsdWUpID0+ICF2YWx1ZSk7XG5cbiAgICBzZXRJc0Rpc2FibGUoZXJyb3IgfHwgZW1wdHkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQ6IEZvcm1DYWxsYmFja3M8RXhwb3J0Rm9ybVN0YXRlPlsnb25GaW5pc2gnXSA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IEV4cG9ydEZvcm1TdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdmFsdWVzW0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkRdO1xuICAgIGNvbnN0IGV4cG9ydFR5cGVzID0gdmFsdWVzW0Zvcm1GaWVsZE5hbWUuVFlQRVNdO1xuICAgIGNvbnN0IGV4cG9ydFNpbmdsZSA9IGV4cG9ydFR5cGVzLmxlbmd0aCA8PSAxO1xuXG4gICAgaWYgKCFleHBvcnRUeXBlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRyZXNzID0gYWNjb3VudC5hZGRyZXNzO1xuXG4gICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIHByaXZhdGVLZXk6IGZhbHNlLFxuICAgICAgICAgIHNlZWRQaHJhc2U6IGZhbHNlLFxuICAgICAgICAgIGpzb25GaWxlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNoZWNrRG9uZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhyZXN1bHQpLmV2ZXJ5KCh2YWx1ZSkgPT4gdmFsdWUpKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChleHBvcnRUeXBlcy5pbmNsdWRlcyhFeHBvcnRUeXBlLlBSSVZBVEVfS0VZKSB8fCBleHBvcnRUeXBlcy5pbmNsdWRlcyhFeHBvcnRUeXBlLlFSX0NPREUpKSB7XG4gICAgICAgICAgZXhwb3J0QWNjb3VudFByaXZhdGVLZXkoYWRkcmVzcywgcGFzc3dvcmQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgc2V0UHJpdmF0ZUtleShyZXMucHJpdmF0ZUtleSk7XG4gICAgICAgICAgICBzZXRQdWJsaWNLZXkocmVzLnB1YmxpY0tleSk7XG4gICAgICAgICAgICByZXN1bHQucHJpdmF0ZUtleSA9IHRydWU7XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9KS5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZS5tZXNzYWdlKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnByaXZhdGVLZXkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4cG9ydFR5cGVzLmluY2x1ZGVzKEV4cG9ydFR5cGUuU0VFRF9QSFJBU0UpICYmIGFjY291bnQ/LmlzTWFzdGVyQWNjb3VudCkge1xuICAgICAgICAgIGtleXJpbmdFeHBvcnRNbmVtb25pYyh7IGFkZHJlc3MsIHBhc3N3b3JkOiBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWVkUGhyYXNlKHJlcy5yZXN1bHQpO1xuICAgICAgICAgICAgICByZXN1bHQuc2VlZFBocmFzZSA9IHRydWU7XG4gICAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5zZWVkUGhyYXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHBvcnRUeXBlcy5pbmNsdWRlcyhFeHBvcnRUeXBlLkpTT05fRklMRSkpIHtcbiAgICAgICAgICBleHBvcnRBY2NvdW50KGFkZHJlc3MsIHBhc3N3b3JkKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldEpzb25EYXRhKHJlcy5leHBvcnRlZEpzb24pO1xuICAgICAgICAgICAgcmVzdWx0Lmpzb25GaWxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXhwb3J0U2luZ2xlKSB7XG4gICAgICAgICAgICAgIG9uRXhwb3J0SnNvbihyZXMuZXhwb3J0ZWRKc29uLCBhZGRyZXNzKSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLmNhdGNoKChlOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuanNvbkZpbGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcHJvbWlzZVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2V0Rmlyc3RTdGVwKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlOiBFcnJvcikgPT4ge1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gZS5tZXNzYWdlO1xuXG4gICAgICAgICAgaWYgKG1lc3NhZ2UgPT09ICdVbmFibGUgdG8gZGVjb2RlIHVzaW5nIHRoZSBzdXBwbGllZCBwYXNzcGhyYXNlJykge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHQoJ1dyb25nIHBhc3N3b3JkJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybS5zZXRGaWVsZHMoW3sgbmFtZTogRm9ybUZpZWxkTmFtZS5QQVNTV09SRCwgZXJyb3JzOiBbbWVzc2FnZV0gfV0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDUwMCk7XG4gIH0sIFthY2NvdW50LCBmb3JtLCB0XSk7XG5cbiAgY29uc3Qgb25QcmVzc1R5cGUgPSB1c2VDYWxsYmFjaygodmFsdWU6IEV4cG9ydFR5cGUpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgdHlwZXMgPSBmb3JtLmdldEZpZWxkVmFsdWUoRm9ybUZpZWxkTmFtZS5UWVBFUykgYXMgRXhwb3J0VHlwZVtdO1xuICAgICAgY29uc3QgZXhpc3RzID0gdHlwZXMuaW5jbHVkZXModmFsdWUpO1xuICAgICAgbGV0IHJlc3VsdDogRXhwb3J0VHlwZVtdO1xuXG4gICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgIHJlc3VsdCA9IHR5cGVzLmZpbHRlcigoaSkgPT4gaSAhPT0gdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gWy4uLnR5cGVzLCB2YWx1ZV07XG4gICAgICB9XG5cbiAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZShGb3JtRmllbGROYW1lLlRZUEVTLCByZXN1bHQpO1xuICAgICAgc2V0RXhwb3J0VHlwZXMocmVzdWx0KTtcbiAgICB9O1xuICB9LCBbZm9ybV0pO1xuXG4gIGNvbnN0IGl0ZW1zID0gdXNlTWVtbygoKTogRXhwb3J0SXRlbVtdID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBkaXNhYmxlOiAhYWNjb3VudCB8fCBhY2NvdW50LmlzRXh0ZXJuYWwgfHwgIWFjY291bnQuaXNNYXN0ZXJBY2NvdW50LFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICBpY29uOiBMZWFmLFxuICAgICAgICBsYWJlbDogdCgnRXhwb3J0IHNlZWQgcGhyYXNlJyksXG4gICAgICAgIHR5cGU6IEV4cG9ydFR5cGUuU0VFRF9QSFJBU0VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpc2FibGU6ICFhY2NvdW50IHx8ICEhYWNjb3VudC5pc0V4dGVybmFsLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICBpY29uOiBGaWxlSnMsXG4gICAgICAgIGxhYmVsOiB0KCdFeHBvcnQgSlNPTiBmaWxlJyksXG4gICAgICAgIHR5cGU6IEV4cG9ydFR5cGUuSlNPTl9GSUxFXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXNhYmxlOiAhYWNjb3VudCB8fCBhY2NvdW50LmlzRXh0ZXJuYWwgfHwgIWlzRXRoZXJldW1BZGRyZXNzKGFjY291bnQuYWRkcmVzcyksXG4gICAgICAgIGhpZGRlbjogIWlzRXRoZXJldW1BZGRyZXNzKGFjY291bnQ/LmFkZHJlc3MgfHwgJycpLFxuICAgICAgICBpY29uOiBXYWxsZXQsXG4gICAgICAgIGxhYmVsOiB0KCdFeHBvcnQgcHJpdmF0ZSBrZXknKSxcbiAgICAgICAgdHlwZTogRXhwb3J0VHlwZS5QUklWQVRFX0tFWVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGlzYWJsZTogIWFjY291bnQgfHwgISFhY2NvdW50Py5pc0V4dGVybmFsLFxuICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICBpY29uOiBRckNvZGUsXG4gICAgICAgIGxhYmVsOiB0KCdFeHBvcnQgUVIgQ29kZScpLFxuICAgICAgICB0eXBlOiBFeHBvcnRUeXBlLlFSX0NPREVcbiAgICAgIH1cbiAgICBdO1xuICB9LCBbYWNjb3VudCwgdF0pO1xuXG4gIGNvbnN0IG9uQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoYWNjb3VudEFkZHJlc3MpIHtcbiAgICAgIG5hdmlnYXRlKGAvYWNjb3VudHMvZGV0YWlsLyR7YWNjb3VudEFkZHJlc3N9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmlnYXRlKERFRkFVTFRfUk9VVEVSX1BBVEgpO1xuICAgIH1cbiAgfSwgW2FjY291bnRBZGRyZXNzLCBuYXZpZ2F0ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICBnb0hvbWUoKTtcbiAgICB9XG4gIH0sIFthY2NvdW50LCBnb0hvbWUsIG5hdmlnYXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWNjb3VudD8uYWRkcmVzcykge1xuICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgIH1cbiAgfSwgW2FjY291bnQ/LmFkZHJlc3MsIGZvcm1dKTtcblxuICB1c2VGb2N1c0Zvcm1JdGVtKGZvcm0sIEZvcm1GaWVsZE5hbWUuUEFTU1dPUkQpO1xuXG4gIGlmICghYWNjb3VudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfT5cbiAgICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgICAgZGlzYWJsZUJhY2s9e2xvYWRpbmd9XG4gICAgICAgIG9uQmFjaz17b25CYWNrfVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGNoaWxkcmVuOiBmaXJzdFN0ZXAgPyB0KCdDb25maXJtJykgOiB0KCdGaW5pc2gnKSxcbiAgICAgICAgICBpY29uOiBmaXJzdFN0ZXAgPyB1bmRlZmluZWQgOiBGaW5pc2hJY29uLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkIHx8ICFleHBvcnRUeXBlcy5sZW5ndGgsXG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgICBvbkNsaWNrOiBmaXJzdFN0ZXAgPyBmb3JtLnN1Ym1pdCA6IGdvSG9tZVxuICAgICAgICB9fVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246IDxDbG9zZUljb24gLz4sXG4gICAgICAgICAgICBvbkNsaWNrOiBnb0hvbWUsXG4gICAgICAgICAgICBkaXNhYmxlZDogbG9hZGluZ1xuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIGZpcnN0U3RlcFxuICAgICAgICAgICAgPyB0KCdFeHBvcnQgYWNjb3VudCcpXG4gICAgICAgICAgICA6ICFleHBvcnRTaW5nbGVcbiAgICAgICAgICAgICAgPyB0KCdFeHBvcnQgc3VjY2Vzc2Z1bCcpXG4gICAgICAgICAgICAgIDogdGl0bGVNYXBbZXhwb3J0VHlwZXNbMF1dXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHktY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q04oJ25vdGljZScsIHsgJ21iLWxhcmdlJzogIWZpcnN0U3RlcCB9KX0+XG4gICAgICAgICAgICA8QWxlcnRCb3hcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ0FueW9uZSB3aXRoIHlvdXIga2V5IGNhbiB1c2UgYW55IGFzc2V0cyBoZWxkIGluIHlvdXIgYWNjb3VudC4nKX1cbiAgICAgICAgICAgICAgdGl0bGU9e3QoJ1dhcm5pbmc6IE5ldmVyIGRpc2Nsb3NlIHRoaXMga2V5Jyl9XG4gICAgICAgICAgICAgIHR5cGU9J3dhcm5pbmcnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0U3RlcCAmJiAoXG4gICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgICBbRm9ybUZpZWxkTmFtZS5QQVNTV09SRF06ICcnLFxuICAgICAgICAgICAgICAgICAgW0Zvcm1GaWVsZE5hbWUuVFlQRVNdOiBbXVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT17Zm9ybU5hbWV9XG4gICAgICAgICAgICAgICAgb25GaWVsZHNDaGFuZ2U9e29uVXBkYXRlfVxuICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkR9XG4gICAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgc3RhdHVzSGVscEFzVG9vbHRpcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdUeXBlIHlvdXIgU3Vid2FsbGV0IHBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAgIHN1ZmZpeD17PHNwYW4gLz59XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21iLTAnXG4gICAgICAgICAgICAgICAgICBuYW1lPXtGb3JtRmllbGROYW1lLlRZUEVTfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdleHBvcnQtdHlwZXMtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3NlbGVjdGVkID0gZXhwb3J0VHlwZXM/LmluY2x1ZGVzKGl0ZW0udHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtDTihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdleHBvcnQtaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZXhwb3J0LSR7aXRlbS50eXBlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBfc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpdGVtLmRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRJdGVtSWNvbj17KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0ndmFyKC0taWNvbi1iZy1jb2xvciknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QcmVzc0l0ZW09eyhpdGVtLmRpc2FibGUgfHwgbG9hZGluZykgPyB1bmRlZmluZWQgOiBvblByZXNzVHlwZShpdGVtLnR5cGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0SXRlbT17KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZXR0aW5nLWl0ZW0tcmlnaHQtaWNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPSd2YXIoLS1zZWxlY3RlZC1pY29uLWNvbG9yKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtDaGVja0NpcmNsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgIWZpcnN0U3RlcCAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e0NOKFxuICAgICAgICAgICAgICAgICAgJ3Jlc3VsdC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgeyAnZXhwb3J0LXNpbmdsZSc6IGV4cG9ydFNpbmdsZSB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGV4cG9ydFR5cGVzLmluY2x1ZGVzKEV4cG9ydFR5cGUuUFJJVkFURV9LRVkpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0LXRpdGxlJz57dGl0bGVNYXBbRXhwb3J0VHlwZS5QUklWQVRFX0tFWV19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ByaXZhdGUta2V5LWZpZWxkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJpdmF0ZUtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExpbmU9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBwaG9zcGhvckljb249e0NvcHlTaW1wbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Db3B5UHJpdmF0ZUtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2dob3N0J1xuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdDb3B5IHRvIGNsaXBib2FyZCcpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXhwb3J0VHlwZXMuaW5jbHVkZXMoRXhwb3J0VHlwZS5TRUVEX1BIUkFTRSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0LWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQtdGl0bGUnPnt0aXRsZU1hcFtFeHBvcnRUeXBlLlNFRURfUEhSQVNFXX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8V29yZFBocmFzZSBzZWVkUGhyYXNlPXtzZWVkUGhyYXNlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXhwb3J0VHlwZXMuaW5jbHVkZXMoRXhwb3J0VHlwZS5RUl9DT0RFKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQtY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdC10aXRsZSc+e3RpdGxlTWFwW0V4cG9ydFR5cGUuUVJfQ09ERV19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FyLWFyZWEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3UVJDb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGV2ZWw9J1EnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ29QYWRkaW5nPXshaXNFdGhlcmV1bUFkZHJlc3MoYWNjb3VudC5hZGRyZXNzKSA/IDQgOiAzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNjR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxckRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXhwb3J0VHlwZXMuaW5jbHVkZXMoRXhwb3J0VHlwZS5KU09OX0ZJTEUpICYmIGpzb25EYXRhICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0LXRpdGxlJz57dCgnWW91ciBqc29uIGZpbGUnKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRTaW5nbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLWljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd2YXIoLS1wYWdlLWljb24tY29sb3IpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb246IENoZWNrQ2lyY2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ2ZpbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqc29uLWRvbmUtdGlsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnU3VjY2VzcyEnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanNvbi1kb25lLWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZXhwb3J0ZWQgSlNPTiBmaWxlIGZvciB0aGlzIGFjY291bnQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFleHBvcnRTaW5nbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0l0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Rvd25sb2FkLWpzb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEl0ZW1JY29uPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPSd2YXIoLS1pY29uLWJnLWNvbG9yKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtGaWxlSnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YCR7YWNjb3VudC5hZGRyZXNzfS5qc29uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByZXNzSXRlbT17b25FeHBvcnRKc29uKGpzb25EYXRhLCBhY2NvdW50LmFkZHJlc3MpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0SXRlbT17KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZXR0aW5nLWl0ZW0tcmlnaHQtaWNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtEb3dubG9hZFNpbXBsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBBY2NvdW50RXhwb3J0ID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLmJvZHktY29udGFpbmVyJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5wYWRkaW5nfXB4YFxuICAgIH0sXG5cbiAgICAnLm5vdGljZSc6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4sXG5cbiAgICAgICcmLm1iLWxhcmdlJzoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbkxHXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuZXhwb3J0LXR5cGVzLWNvbnRhaW5lcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0b2tlbi5zaXplWFNcbiAgICB9LFxuXG4gICAgJy5leHBvcnQtaXRlbSc6IHtcbiAgICAgICctLXNlbGVjdGVkLWljb24tY29sb3InOiB0b2tlblsnZ3JheS00J10sXG4gICAgICB0ZXh0QWxpZ246ICdzdGFydCcsXG5cbiAgICAgICcmLnNlbGVjdGVkJzoge1xuICAgICAgICAnLS1zZWxlY3RlZC1pY29uLWNvbG9yJzogdG9rZW4uY29sb3JTZWNvbmRhcnlcbiAgICAgIH0sXG5cbiAgICAgICcmLmRpc2FibGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAwLjQsXG5cbiAgICAgICAgJy5hbnQtd2ViMy1ibG9jayc6IHtcbiAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG5cbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW5bJ2dyYXktMSddXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgICcuc2V0dGluZy1pdGVtLXJpZ2h0LWljb24nOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IDhcbiAgICB9LFxuXG4gICAgJy5kb3dubG9hZC1qc29uJzoge1xuICAgICAgJy5hbnQtd2ViMy1ibG9jay1taWRkbGUtaXRlbSc6IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICAgICcuYW50LXNldHRpbmctaXRlbS1uYW1lJzoge1xuICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmdYU1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFtgLmV4cG9ydC0ke0V4cG9ydFR5cGUuU0VFRF9QSFJBU0V9YF06IHtcbiAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnZ3JlZW4tNyddXG4gICAgfSxcblxuICAgIFtgLmV4cG9ydC0ke0V4cG9ydFR5cGUuSlNPTl9GSUxFfSwgLmRvd25sb2FkLWpzb25gXToge1xuICAgICAgJy0taWNvbi1iZy1jb2xvcic6IHRva2VuWydvcmFuZ2UtNyddXG4gICAgfSxcblxuICAgIFtgLmV4cG9ydC0ke0V4cG9ydFR5cGUuUFJJVkFURV9LRVl9YF06IHtcbiAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnZ3JheS0zJ11cbiAgICB9LFxuXG4gICAgW2AuZXhwb3J0LSR7RXhwb3J0VHlwZS5RUl9DT0RFfWBdOiB7XG4gICAgICAnLS1pY29uLWJnLWNvbG9yJzogdG9rZW5bJ2dlZWtibHVlLTcnXVxuICAgIH0sXG5cbiAgICAnLnJlc3VsdC1jb250YWluZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGdhcDogdG9rZW4uc2l6ZUxHXG4gICAgfSxcblxuICAgICcucmVzdWx0LWNvbnRlbnQnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGdhcDogdG9rZW4uc2l6ZSxcblxuICAgICAgJy5yZXN1bHQtdGl0bGUnOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmZvbnRXZWlnaHRTdHJvbmcsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMYWJlbCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgICAgIH0sXG5cbiAgICAgICcucHJpdmF0ZS1rZXktZmllbGQnOiB7XG4gICAgICAgICcuYW50LWZpZWxkLXdyYXBwZXInOiB7XG4gICAgICAgICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICcucXItYXJlYSc6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuZXhwb3J0LXNpbmdsZSc6IHtcbiAgICAgICcucmVzdWx0LXRpdGxlJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5wYWdlLWljb24nOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAnLS1wYWdlLWljb24tY29sb3InOiB0b2tlbi5jb2xvclNlY29uZGFyeVxuICAgIH0sXG5cbiAgICAnLmpzb24tZG9uZS10aWxlJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dEhlYWRpbmcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogdG9rZW4uZm9udFdlaWdodFN0cm9uZyxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmczLFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmczXG4gICAgfSxcblxuICAgICcuanNvbi1kb25lLWRlc2NyaXB0aW9uJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5jb250cm9sSGVpZ2h0TEcgLSB0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMYWJlbCxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNSxcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50RXhwb3J0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJQYXRoRm9yV2VpZ2h0IH0gZnJvbSAnLi4vbGliL2luZGV4LmVzbS5qcyc7XG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vbGliL0ljb25CYXNlLmVzbS5qcyc7XG5cbi8qIEdFTkVSQVRFRCBGSUxFICovXG52YXIgcGF0aHNCeVdlaWdodCA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImJvbGRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI4NiAxMTAgMTI4IDE1MiAxNzAgMTEwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIxNTJcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMTYsMTUydjU2YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFYxNTJcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImR1b3RvbmVcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI4NiAxMTAgMTI4IDE1MiAxNzAgMTEwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIxNTJcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMTYsMTUydjU2YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFYxNTJcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTgwLjMsMTE1LjdhOC4yLDguMiwwLDAsMS0xLjctOC43LDgsOCwwLDAsMSw3LjQtNWgzNFY0MGE4LDgsMCwwLDEsMTYsMHY2MmgzNGE4LDgsMCwwLDEsNy40LDUsOC4yLDguMiwwLDAsMS0xLjcsOC43bC00Miw0MmE4LjIsOC4yLDAsMCwxLTExLjQsMFpNMjE2LDE0NGE4LDgsMCwwLDAtOCw4djU2SDQ4VjE1MmE4LDgsMCwwLDAtMTYsMHY1NmExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWMTUyQTgsOCwwLDAsMCwyMTYsMTQ0WlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjg2IDExMCAxMjggMTUyIDE3MCAxMTBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjE1MlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxNiwxNTJ2NTZhOCw4LDAsMCwxLTgsOEg0OGE4LDgsMCwwLDEtOC04VjE1MlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjg2IDExMCAxMjggMTUyIDE3MCAxMTBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMTUyXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMTYsMTUydjU2YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFYxNTJcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwicmVndWxhclwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjg2IDExMCAxMjggMTUyIDE3MCAxMTBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjE1MlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxNiwxNTJ2NTZhOCw4LDAsMCwxLTgsOEg0OGE4LDgsMCwwLDEtOC04VjE1MlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSk7XG59KTtcblxudmFyIHJlbmRlclBhdGggPSBmdW5jdGlvbiByZW5kZXJQYXRoKHdlaWdodCwgY29sb3IpIHtcbiAgcmV0dXJuIHJlbmRlclBhdGhGb3JXZWlnaHQod2VpZ2h0LCBjb2xvciwgcGF0aHNCeVdlaWdodCk7XG59O1xuXG52YXIgRG93bmxvYWRTaW1wbGUgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuRG93bmxvYWRTaW1wbGUuZGlzcGxheU5hbWUgPSBcIkRvd25sb2FkU2ltcGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkU2ltcGxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RG93bmxvYWRTaW1wbGUuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiQWxlcnRCb3giLCJDbG9zZUljb24iLCJXb3JkUGhyYXNlIiwiREVGQVVMVF9ST1VURVJfUEFUSCIsInVzZUdldEFjY291bnRCeUFkZHJlc3MiLCJ1c2VDb3B5IiwidXNlRm9jdXNGb3JtSXRlbSIsInVzZURlZmF1bHROYXZpZ2F0ZSIsImV4cG9ydEFjY291bnQiLCJleHBvcnRBY2NvdW50UHJpdmF0ZUtleSIsImtleXJpbmdFeHBvcnRNbmVtb25pYyIsIkJhY2tncm91bmRJY29uIiwiQnV0dG9uIiwiRmllbGQiLCJGb3JtIiwiSWNvbiIsIklucHV0IiwiUGFnZUljb24iLCJTZXR0aW5nSXRlbSIsIlN3UVJDb2RlIiwiQ04iLCJzYXZlQXMiLCJDaGVja0NpcmNsZSIsIkNvcHlTaW1wbGUiLCJEb3dubG9hZFNpbXBsZSIsIkZpbGVKcyIsIkxlYWYiLCJRckNvZGUiLCJXYWxsZXQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsInN0eWxlZCIsImlzRXRoZXJldW1BZGRyZXNzIiwiRXhwb3J0VHlwZSIsIkZvcm1GaWVsZE5hbWUiLCJvbkV4cG9ydEpzb24iLCJqc29uRGF0YSIsImFkZHJlc3MiLCJibG9iIiwiQmxvYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiRmluaXNoSWNvbiIsImZvcm1OYW1lIiwiQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0IiwibmF2aWdhdGUiLCJnb0hvbWUiLCJhY2NvdW50QWRkcmVzcyIsImFjY291bnQiLCJmb3JtIiwidXNlRm9ybSIsImV4cG9ydFR5cGVzIiwic2V0RXhwb3J0VHlwZXMiLCJleHBvcnRTaW5nbGUiLCJsZW5ndGgiLCJmaXJzdFN0ZXAiLCJzZXRGaXJzdFN0ZXAiLCJpc0Rpc2FibGVkIiwic2V0SXNEaXNhYmxlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwcml2YXRlS2V5Iiwic2V0UHJpdmF0ZUtleSIsInB1YmxpY0tleSIsInNldFB1YmxpY0tleSIsInNldEpzb25EYXRhIiwic2VlZFBocmFzZSIsInNldFNlZWRQaHJhc2UiLCJ0aXRsZU1hcCIsIkpTT05fRklMRSIsIlFSX0NPREUiLCJQUklWQVRFX0tFWSIsIlNFRURfUEhSQVNFIiwicXJEYXRhIiwicHJlZml4IiwicmVzdWx0IiwibmFtZSIsInB1c2giLCJqb2luIiwib25Db3B5UHJpdmF0ZUtleSIsIm9uVXBkYXRlIiwiY2hhbmdlZEZpZWxkcyIsImFsbEZpZWxkcyIsImVycm9yIiwibWFwIiwiZGF0YSIsImVycm9ycyIsInJlZHVjZSIsIm9sZCIsInZhbHVlIiwic29tZSIsImVtcHR5Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJwYXNzd29yZCIsIlBBU1NXT1JEIiwiVFlQRVMiLCJzZXRUaW1lb3V0IiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwianNvbkZpbGUiLCJjaGVja0RvbmUiLCJPYmplY3QiLCJldmVyeSIsImluY2x1ZGVzIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsImlzTWFzdGVyQWNjb3VudCIsImV4cG9ydGVkSnNvbiIsInNldEZpZWxkcyIsImZpbmFsbHkiLCJvblByZXNzVHlwZSIsInR5cGVzIiwiZ2V0RmllbGRWYWx1ZSIsImV4aXN0cyIsImZpbHRlciIsImkiLCJzZXRGaWVsZFZhbHVlIiwiaXRlbXMiLCJkaXNhYmxlIiwiaXNFeHRlcm5hbCIsImhpZGRlbiIsImljb24iLCJsYWJlbCIsIm9uQmFjayIsInJlc2V0RmllbGRzIiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJzdWJtaXQiLCJyZXF1aXJlZCIsIml0ZW0iLCJfc2VsZWN0ZWQiLCJzZWxlY3RlZCIsInBob3NwaG9ySWNvbiIsIndlaWdodCIsIkFjY291bnRFeHBvcnQiLCJ0aGVtZSIsInRva2VuIiwicGFkZGluZyIsIm1hcmdpblRvcCIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxHIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJzaXplWFMiLCJ0ZXh0QWxpZ24iLCJjb2xvclNlY29uZGFyeSIsIm9wYWNpdHkiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nUmlnaHQiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndpZHRoIiwicGFkZGluZ1hTIiwic2l6ZUxHIiwic2l6ZSIsImZvbnRXZWlnaHQiLCJmb250V2VpZ2h0U3Ryb25nIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImNvbG9yIiwiY29sb3JUZXh0TGFiZWwiLCJ0ZXh0VHJhbnNmb3JtIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3JUZXh0SGVhZGluZyIsImZvbnRTaXplSGVhZGluZzMiLCJsaW5lSGVpZ2h0SGVhZGluZzMiLCJjb250cm9sSGVpZ2h0TEciLCJmb250U2l6ZUhlYWRpbmc1IiwibGluZUhlaWdodEhlYWRpbmc1Il0sInNvdXJjZVJvb3QiOiIifQ==