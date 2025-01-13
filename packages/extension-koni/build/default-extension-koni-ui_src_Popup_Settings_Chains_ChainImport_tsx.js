"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_Chains_ChainImport_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Chains/ChainImport.tsx":
/*!**********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Chains/ChainImport.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_handler_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/handler/types */ "../extension-base/src/services/chain-service/handler/types.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_InfoIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/InfoIcon */ "../extension-koni-ui/src/components/Icon/InfoIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_form_useFocusFormItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/form/useFocusFormItem */ "../extension-koni-ui/src/hooks/form/useFocusFormItem.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/activity-indicator/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/row/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/col/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/WifiHigh.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/WifiSlash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FloppyDiskBack.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShareNetwork.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Globe.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


















function Component({
  className = ''
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
  const showNotification = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].useForm();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [isPureEvmChain, setIsPureEvmChain] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [isShowConnectionStatus, setIsShowConnectionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [providerValidation, setProviderValidation] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    status: ''
  });
  const [isValidating, setIsValidating] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [genesisHash, setGenesisHash] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');
  const [existentialDeposit, setExistentialDeposit] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('0');
  const handleClickSubheaderButton = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    console.log('click subheader');
  }, []);
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    navigate(-1);
  }, [navigate]);
  const isSubmitDisabled = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    return providerValidation.status !== 'success';
  }, [providerValidation.status]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    setLoading(true);
    const blockExplorer = form.getFieldValue('blockExplorer');
    const crowdloanUrl = form.getFieldValue('crowdloanUrl');
    const provider = form.getFieldValue('provider');
    const decimals = form.getFieldValue('decimals');
    const symbol = form.getFieldValue('symbol');
    const addressPrefix = form.getFieldValue('addressPrefix');
    const paraId = form.getFieldValue('paraId');
    const evmChainId = form.getFieldValue('evmChainId');
    const name = form.getFieldValue('name');
    const priceId = form.getFieldValue('priceId');
    const newProviderKey = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_11__._generateCustomProviderKey)(0);
    const params = {
      mode: 'insert',
      chainEditInfo: {
        slug: '',
        currentProvider: newProviderKey,
        providers: {
          [newProviderKey]: provider
        },
        blockExplorer,
        crowdloanUrl,
        symbol,
        chainType: isPureEvmChain ? 'EVM' : 'Substrate',
        name,
        priceId
      },
      chainSpec: {
        genesisHash,
        decimals,
        addressPrefix,
        paraId,
        evmChainId,
        existentialDeposit
      }
    };
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.upsertChain)(params).then(result => {
      setLoading(false);
      if (result) {
        showNotification({
          message: t('Imported chain successfully')
        });
        navigate(-1);
      } else {
        showNotification({
          message: t('An error occurred, please try again')
        });
      }
    }).catch(() => {
      setLoading(false);
      showNotification({
        message: t('An error occurred, please try again')
      });
    });
  }, [existentialDeposit, form, genesisHash, isPureEvmChain, navigate, showNotification, t]);
  const blockExplorerValidator = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((rule, value) => {
    return new Promise((resolve, reject) => {
      if (value.length === 0 || (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.isUrl)(value)) {
        resolve();
      } else {
        reject(new Error(t('Block explorer must be a valid URL')));
      }
    });
  }, [t]);
  const crowdloanUrlValidator = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((rule, value) => {
    return new Promise((resolve, reject) => {
      if (value.length === 0 || (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.isUrl)(value)) {
        resolve();
      } else {
        reject(new Error(t('Crowdloan URL must be a valid URL')));
      }
    });
  }, [t]);
  const handleErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(errorCode => {
    switch (errorCode) {
      case _subwallet_extension_base_services_chain_service_handler_types__WEBPACK_IMPORTED_MODULE_13__._CHAIN_VALIDATION_ERROR.CONNECTION_FAILURE:
        return t('Cannot connect to this provider');
      case _subwallet_extension_base_services_chain_service_handler_types__WEBPACK_IMPORTED_MODULE_13__._CHAIN_VALIDATION_ERROR.EXISTED_PROVIDER:
        return t('This provider has already been added');
      case _subwallet_extension_base_services_chain_service_handler_types__WEBPACK_IMPORTED_MODULE_13__._CHAIN_VALIDATION_ERROR.EXISTED_CHAIN:
        return t('This chain has already been added');
      default:
        return t('Error validating this provider');
    }
  }, [t]);
  const providerValidator = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((rule, provider) => {
    return new Promise((resolve, reject) => {
      if ((0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.isUrl)(provider)) {
        setIsShowConnectionStatus(true);
        setIsValidating(true);
        const parsedProvider = provider.replaceAll(' ', '');
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.validateCustomChain)(parsedProvider).then(result => {
          setIsValidating(false);
          if (result.success) {
            setProviderValidation({
              status: 'success'
            });
            if (result.evmChainId) {
              setIsPureEvmChain(true);
              form.setFieldValue('evmChainId', result.evmChainId);
              form.setFieldValue('type', 'EVM');
            } else {
              setIsPureEvmChain(false);
              form.setFieldValue('addressPrefix', result.addressPrefix);
              form.setFieldValue('paraId', result.paraId);
              form.setFieldValue('type', 'Substrate');
              setGenesisHash(result.genesisHash);
              setExistentialDeposit(result.existentialDeposit);
            }
            form.setFieldValue('decimals', result.decimals);
            form.setFieldValue('name', result.name);
            form.setFieldValue('symbol', result.symbol);
            resolve();
          }
          if (result.error) {
            if (result.evmChainId) {
              setIsPureEvmChain(true);
              form.setFieldValue('evmChainId', result.evmChainId);
              form.setFieldValue('type', 'EVM');
            } else {
              setIsPureEvmChain(false);
              form.setFieldValue('addressPrefix', result.addressPrefix);
              form.setFieldValue('paraId', result.paraId);
              form.setFieldValue('type', 'Substrate');
            }
            form.setFieldValue('decimals', result.decimals);
            form.setFieldValue('name', result.name);
            form.setFieldValue('symbol', result.symbol);
            setProviderValidation({
              status: 'error',
              message: handleErrorMessage(result.error)
            });
            reject(new Error(handleErrorMessage(result.error)));
          }
        }).catch(() => {
          setIsValidating(false);
          reject(new Error(t('Error validating this provider')));
          setProviderValidation({
            status: 'error',
            message: t('Error validating this provider')
          });
        });
      } else {
        reject(new Error(t('Provider URL is not valid')));
        setProviderValidation({
          status: ''
        });
        setIsShowConnectionStatus(false);
      }
    });
  }, [form, handleErrorMessage, t]);
  const providerSuffix = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    if (!isShowConnectionStatus) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
    }
    if (providerValidation.status === 'success') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
        customSize: '20px',
        iconColor: token.colorSuccess,
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
        type: 'phosphor',
        weight: 'bold'
      });
    }
    if (isValidating) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
        size: '20px'
      });
    }
    if (providerValidation.status === 'error') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
        customSize: '20px',
        iconColor: token['gray-4'],
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"],
        type: 'phosphor',
        weight: 'bold'
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
  }, [isShowConnectionStatus, isValidating, providerValidation.status, token]);
  (0,_subwallet_extension_koni_ui_hooks_form_useFocusFormItem__WEBPACK_IMPORTED_MODULE_4__["default"])(form, 'provider');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `chain_import ${className}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      leftFooterButton: {
        onClick: onBack,
        children: t('Cancel')
      },
      onBack: onBack,
      rightFooterButton: {
        block: true,
        disabled: isSubmitDisabled(),
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
          type: "phosphor",
          weight: 'fill'
        }),
        loading: loading,
        onClick: onSubmit,
        children: t('Save')
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components_Icon_InfoIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
        onClick: handleClickSubheaderButton
      }],
      title: t('Import network'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: 'chain_import__container',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: 'chain_import__header_info',
          children: t('Currently support WSS provider for Substrate networks and HTTP provider for EVM network')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
          disabled: loading,
          form: form,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: 'chain_import__attributes_container',
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
              name: 'provider',
              rules: [{
                validator: providerValidator
              }],
              statusHelpAsTooltip: true,
              validateTrigger: ['onBlur'],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                disabled: isValidating,
                placeholder: t('Provider URL'),
                prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  customSize: '24px',
                  iconColor: token['gray-4'],
                  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
                  type: 'phosphor',
                  weight: 'bold'
                }),
                suffix: providerSuffix(),
                tooltip: t('Provider URL'),
                tooltipPlacement: 'topLeft'
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              gutter: token.paddingSM,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
                span: 16,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
                  name: 'name',
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    disabled: true,
                    placeholder: t('Network name'),
                    prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                      customSize: '24px',
                      iconColor: token['gray-4'],
                      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_23__["default"],
                      type: 'phosphor',
                      weight: 'bold'
                    }),
                    tooltip: t('Network name'),
                    tooltipPlacement: 'topLeft'
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
                span: 8,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
                  name: 'symbol',
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    disabled: true,
                    placeholder: t('Symbol'),
                    tooltip: t('Symbol'),
                    tooltipPlacement: 'topLeft'
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              gutter: token.paddingSM,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
                span: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
                  name: 'priceId',
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    placeholder: t('Price ID'),
                    tooltip: t('Price ID'),
                    tooltipPlacement: 'topLeft'
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
                span: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
                  name: 'type',
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    disabled: true,
                    placeholder: t('Network type'),
                    tooltip: t('Network type'),
                    tooltipPlacement: 'topLeft'
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
              name: 'blockExplorer',
              rules: [{
                validator: blockExplorerValidator
              }],
              statusHelpAsTooltip: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                placeholder: t('Block explorer'),
                tooltip: t('Block explorer'),
                tooltipPlacement: 'topLeft'
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
              name: 'crowdloanUrl',
              rules: [{
                validator: crowdloanUrlValidator
              }],
              statusHelpAsTooltip: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                placeholder: t('Crowdloan URL'),
                tooltip: t('Crowdloan URL'),
                tooltipPlacement: 'topLeft'
              })
            })]
          })
        })]
      })
    })
  });
}
const ChainImport = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(Component).withConfig({
  displayName: "ChainImport",
  componentId: "sc-jyrbbz-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.chain_import__header_info': {
      color: token.colorTextTertiary,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      fontWeight: token.bodyFontWeight,
      width: '100%',
      textAlign: 'center',
      marginBottom: token.margin,
      marginTop: 22
    },
    '.chain_import__container': {
      marginRight: token.margin,
      marginLeft: token.margin
    },
    '.chain_import__attributes_container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.marginSM
    },
    '.ant-input-container .ant-input-wrapper': {
      overflow: 'hidden'
    },
    '.ant-form-item': {
      marginBottom: 0
    },
    '.ant-input-container.-disabled .ant-input': {
      cursor: 'default'
    },
    '.ant-input-container.-disabled': {
      cursor: 'default'
    },
    '.ant-form-item-with-help .ant-form-item-explain': {
      paddingBottom: 0
    },
    '.ant-input-container .ant-input-suffix': {
      marginRight: 0
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChainImport);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/FloppyDiskBack.esm.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/FloppyDiskBack.esm.js ***!
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "104 80 160 80 160 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M208,40H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM128,176a28,28,0,1,1,28-28A28,28,0,0,1,128,176Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "96 80 160 80 160 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M208,32H172a4,4,0,0,0-4,4V80a8,8,0,0,1-8,8H96.3A8.2,8.2,0,0,1,88,80.5,8,8,0,0,1,96,72h56V36a4,4,0,0,0-4-4H91.3A15.9,15.9,0,0,0,80,36.7L36.7,80A15.9,15.9,0,0,0,32,91.3V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,176a28,28,0,1,1,28-28A28.1,28.1,0,0,1,128,176Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "96 80 160 80 160 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "96 80 160 80 160 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "96 80 160 80 160 40",
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

var FloppyDiskBack = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
FloppyDiskBack.displayName = "FloppyDiskBack";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloppyDiskBack);
//# sourceMappingURL=FloppyDiskBack.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfQ2hhaW5zX0NoYWluSW1wb3J0X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRXlHO0FBRUw7QUFDNUM7QUFDc0I7QUFDRDtBQUNXO0FBQ0Y7QUFDRTtBQUNFO0FBRUw7QUFDSztBQUVyQztBQUNOO0FBQ007QUFBQTtBQUFBO0FBQUE7QUF1QnJELFNBQVM0QixTQUFTLENBQUU7RUFBRUMsU0FBUyxHQUFHO0FBQVUsQ0FBQyxFQUE2QjtFQUN4RSxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHdkIsb0dBQWMsRUFBRTtFQUM5QixNQUFNd0IsUUFBUSxHQUFHTiw2REFBVyxFQUFFO0VBQzlCLE1BQU07SUFBRU87RUFBTSxDQUFDLEdBQUdMLDJEQUFRLEVBQVc7RUFDckMsTUFBTU0sZ0JBQWdCLEdBQUczQixxR0FBZSxFQUFFO0VBQzFDLE1BQU0sQ0FBQzRCLElBQUksQ0FBQyxHQUFHckIsb0VBQVksRUFBbUI7RUFFOUMsTUFBTSxDQUFDdUIsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR2IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDN0MsTUFBTSxDQUFDYyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdmLCtDQUFRLENBQUMsS0FBSyxDQUFDO0VBQzNELE1BQU0sQ0FBQ2dCLHNCQUFzQixFQUFFQyx5QkFBeUIsQ0FBQyxHQUFHakIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDM0UsTUFBTSxDQUFDa0Isa0JBQWtCLEVBQUVDLHFCQUFxQixDQUFDLEdBQUduQiwrQ0FBUSxDQUFpQjtJQUFFb0IsTUFBTSxFQUFFO0VBQUcsQ0FBQyxDQUFDO0VBQzVGLE1BQU0sQ0FBQ0MsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR3RCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0VBRXZELE1BQU0sQ0FBQ3VCLFdBQVcsRUFBRUMs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QUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsU0FBUyxzRUFBbUI7QUFDNUI7O0FBRUEsa0NBQWtDLGlEQUFVO0FBQzVDLFNBQVMsMERBQW1CLENBQUMsNERBQVE7QUFDckM7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBLGlFQUFlLGNBQWMsRUFBQztBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1NldHRpbmdzL0NoYWlucy9DaGFpbkltcG9ydC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvcGhvc3Bob3ItcmVhY3QvZGlzdC9pY29ucy9GbG9wcHlEaXNrQmFjay5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2hhbmRsZXIvdHlwZXMnO1xuaW1wb3J0IHsgX05ldHdvcmtVcHNlcnRQYXJhbXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgX2dlbmVyYXRlQ3VzdG9tUHJvdmlkZXJLZXkgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IExheW91dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9JY29uL0luZm9JY29uJztcbmltcG9ydCB1c2VOb3RpZmljYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlTm90aWZpY2F0aW9uJztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgdXNlRm9jdXNGb3JtSXRlbSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2Zvcm0vdXNlRm9jdXNGb3JtSXRlbSc7XG5pbXBvcnQgeyB1cHNlcnRDaGFpbiwgdmFsaWRhdGVDdXN0b21DaGFpbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFRoZW1lLCBUaGVtZVByb3BzLCBWYWxpZGF0ZVN0YXR1cyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IsIENvbCwgRm9ybSwgSWNvbiwgSW5wdXQsIFJvdyB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgRmxvcHB5RGlza0JhY2ssIEdsb2JlLCBTaGFyZU5ldHdvcmssIFdpZmlIaWdoLCBXaWZpU2xhc2ggfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgeyBSdWxlT2JqZWN0IH0gZnJvbSAncmMtZmllbGQtZm9ybS9saWIvaW50ZXJmYWNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHNcblxuaW50ZXJmYWNlIENoYWluSW1wb3J0Rm9ybSB7XG4gIHByb3ZpZGVyOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgc3ltYm9sOiBzdHJpbmcsXG4gIGRlY2ltYWxzOiBudW1iZXIsXG4gIHR5cGU6IHN0cmluZyxcbiAgYWRkcmVzc1ByZWZpeDogbnVtYmVyLFxuICBwYXJhSWQ6IG51bWJlcixcbiAgZXZtQ2hhaW5JZDogbnVtYmVyLFxuICBibG9ja0V4cGxvcmVyOiBzdHJpbmcsXG4gIGNyb3dkbG9hblVybDogc3RyaW5nLFxuICBwcmljZUlkOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFZhbGlkYXRpb25JbmZvIHtcbiAgc3RhdHVzOiBWYWxpZGF0ZVN0YXR1cyxcbiAgbWVzc2FnZT86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UHJvcHM+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG4gIGNvbnN0IHNob3dOb3RpZmljYXRpb24gPSB1c2VOb3RpZmljYXRpb24oKTtcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtPENoYWluSW1wb3J0Rm9ybT4oKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1B1cmVFdm1DaGFpbiwgc2V0SXNQdXJlRXZtQ2hhaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTaG93Q29ubmVjdGlvblN0YXR1cywgc2V0SXNTaG93Q29ubmVjdGlvblN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm92aWRlclZhbGlkYXRpb24sIHNldFByb3ZpZGVyVmFsaWRhdGlvbl0gPSB1c2VTdGF0ZTxWYWxpZGF0aW9uSW5mbz4oeyBzdGF0dXM6ICcnIH0pO1xuICBjb25zdCBbaXNWYWxpZGF0aW5nLCBzZXRJc1ZhbGlkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtnZW5lc2lzSGFzaCwgc2V0R2VuZXNpc0hhc2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXhpc3RlbnRpYWxEZXBvc2l0LCBzZXRFeGlzdGVudGlhbERlcG9zaXRdID0gdXNlU3RhdGUoJzAnKTtcblxuICBjb25zdCBoYW5kbGVDbGlja1N1YmhlYWRlckJ1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgc3ViaGVhZGVyJyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoLTEpO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCBpc1N1Ym1pdERpc2FibGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiBwcm92aWRlclZhbGlkYXRpb24uc3RhdHVzICE9PSAnc3VjY2Vzcyc7XG4gIH0sIFtwcm92aWRlclZhbGlkYXRpb24uc3RhdHVzXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGJsb2NrRXhwbG9yZXIgPSBmb3JtLmdldEZpZWxkVmFsdWUoJ2Jsb2NrRXhwbG9yZXInKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY3Jvd2Rsb2FuVXJsID0gZm9ybS5nZXRGaWVsZFZhbHVlKCdjcm93ZGxvYW5VcmwnKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBmb3JtLmdldEZpZWxkVmFsdWUoJ3Byb3ZpZGVyJykgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgZGVjaW1hbHMgPSBmb3JtLmdldEZpZWxkVmFsdWUoJ2RlY2ltYWxzJykgYXMgbnVtYmVyO1xuICAgIGNvbnN0IHN5bWJvbCA9IGZvcm0uZ2V0RmllbGRWYWx1ZSgnc3ltYm9sJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGFkZHJlc3NQcmVmaXggPSBmb3JtLmdldEZpZWxkVmFsdWUoJ2FkZHJlc3NQcmVmaXgnKSBhcyBudW1iZXI7XG4gICAgY29uc3QgcGFyYUlkID0gZm9ybS5nZXRGaWVsZFZhbHVlKCdwYXJhSWQnKSBhcyBudW1iZXI7XG4gICAgY29uc3QgZXZtQ2hhaW5JZCA9IGZvcm0uZ2V0RmllbGRWYWx1ZSgnZXZtQ2hhaW5JZCcpIGFzIG51bWJlcjtcbiAgICBjb25zdCBuYW1lID0gZm9ybS5nZXRGaWVsZFZhbHVlKCduYW1lJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHByaWNlSWQgPSBmb3JtLmdldEZpZWxkVmFsdWUoJ3ByaWNlSWQnKSBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCBuZXdQcm92aWRlcktleSA9IF9nZW5lcmF0ZUN1c3RvbVByb3ZpZGVyS2V5KDApO1xuXG4gICAgY29uc3QgcGFyYW1zOiBfTmV0d29ya1Vwc2VydFBhcmFtcyA9IHtcbiAgICAgIG1vZGU6ICdpbnNlcnQnLFxuICAgICAgY2hhaW5FZGl0SW5mbzoge1xuICAgICAgICBzbHVnOiAnJyxcbiAgICAgICAgY3VycmVudFByb3ZpZGVyOiBuZXdQcm92aWRlcktleSxcbiAgICAgICAgcHJvdmlkZXJzOiB7IFtuZXdQcm92aWRlcktleV06IHByb3ZpZGVyIH0sXG4gICAgICAgIGJsb2NrRXhwbG9yZXIsXG4gICAgICAgIGNyb3dkbG9hblVybCxcbiAgICAgICAgc3ltYm9sLFxuICAgICAgICBjaGFpblR5cGU6IGlzUHVyZUV2bUNoYWluID8gJ0VWTScgOiAnU3Vic3RyYXRlJyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcHJpY2VJZFxuICAgICAgfSxcbiAgICAgIGNoYWluU3BlYzoge1xuICAgICAgICBnZW5lc2lzSGFzaCxcbiAgICAgICAgZGVjaW1hbHMsXG4gICAgICAgIGFkZHJlc3NQcmVmaXgsXG4gICAgICAgIHBhcmFJZCxcbiAgICAgICAgZXZtQ2hhaW5JZCxcbiAgICAgICAgZXhpc3RlbnRpYWxEZXBvc2l0XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVwc2VydENoYWluKHBhcmFtcylcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogdCgnSW1wb3J0ZWQgY2hhaW4gc3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiB0KCdBbiBlcnJvciBvY2N1cnJlZCwgcGxlYXNlIHRyeSBhZ2FpbicpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgbWVzc2FnZTogdCgnQW4gZXJyb3Igb2NjdXJyZWQsIHBsZWFzZSB0cnkgYWdhaW4nKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9LCBbZXhpc3RlbnRpYWxEZXBvc2l0LCBmb3JtLCBnZW5lc2lzSGFzaCwgaXNQdXJlRXZtQ2hhaW4sIG5hdmlnYXRlLCBzaG93Tm90aWZpY2F0aW9uLCB0XSk7XG5cbiAgY29uc3QgYmxvY2tFeHBsb3JlclZhbGlkYXRvciA9IHVzZUNhbGxiYWNrKChydWxlOiBSdWxlT2JqZWN0LCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgaXNVcmwodmFsdWUpKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IodCgnQmxvY2sgZXhwbG9yZXIgbXVzdCBiZSBhIHZhbGlkIFVSTCcpKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFt0XSk7XG5cbiAgY29uc3QgY3Jvd2Rsb2FuVXJsVmFsaWRhdG9yID0gdXNlQ2FsbGJhY2soKHJ1bGU6IFJ1bGVPYmplY3QsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBpc1VybCh2YWx1ZSkpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih0KCdDcm93ZGxvYW4gVVJMIG11c3QgYmUgYSB2YWxpZCBVUkwnKSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IGhhbmRsZUVycm9yTWVzc2FnZSA9IHVzZUNhbGxiYWNrKChlcnJvckNvZGU6IF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SKSA9PiB7XG4gICAgc3dpdGNoIChlcnJvckNvZGUpIHtcbiAgICAgIGNhc2UgX0NIQUlOX1ZBTElEQVRJT05fRVJST1IuQ09OTkVDVElPTl9GQUlMVVJFOlxuICAgICAgICByZXR1cm4gdCgnQ2Fubm90IGNvbm5lY3QgdG8gdGhpcyBwcm92aWRlcicpO1xuICAgICAgY2FzZSBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUi5FWElTVEVEX1BST1ZJREVSOlxuICAgICAgICByZXR1cm4gdCgnVGhpcyBwcm92aWRlciBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkJyk7XG4gICAgICBjYXNlIF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SLkVYSVNURURfQ0hBSU46XG4gICAgICAgIHJldHVybiB0KCdUaGlzIGNoYWluIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQnKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0KCdFcnJvciB2YWxpZGF0aW5nIHRoaXMgcHJvdmlkZXInKTtcbiAgICB9XG4gIH0sIFt0XSk7XG5cbiAgY29uc3QgcHJvdmlkZXJWYWxpZGF0b3IgPSB1c2VDYWxsYmFjaygocnVsZTogUnVsZU9iamVjdCwgcHJvdmlkZXI6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoaXNVcmwocHJvdmlkZXIpKSB7XG4gICAgICAgIHNldElzU2hvd0Nvbm5lY3Rpb25TdGF0dXModHJ1ZSk7XG4gICAgICAgIHNldElzVmFsaWRhdGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcGFyc2VkUHJvdmlkZXIgPSBwcm92aWRlci5yZXBsYWNlQWxsKCcgJywgJycpO1xuXG4gICAgICAgIHZhbGlkYXRlQ3VzdG9tQ2hhaW4ocGFyc2VkUHJvdmlkZXIpXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNWYWxpZGF0aW5nKGZhbHNlKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHNldFByb3ZpZGVyVmFsaWRhdGlvbih7IHN0YXR1czogJ3N1Y2Nlc3MnIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZXZtQ2hhaW5JZCkge1xuICAgICAgICAgICAgICAgIHNldElzUHVyZUV2bUNoYWluKHRydWUpO1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnZXZtQ2hhaW5JZCcsIHJlc3VsdC5ldm1DaGFpbklkKTtcbiAgICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3R5cGUnLCAnRVZNJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SXNQdXJlRXZtQ2hhaW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnYWRkcmVzc1ByZWZpeCcsIHJlc3VsdC5hZGRyZXNzUHJlZml4KTtcbiAgICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3BhcmFJZCcsIHJlc3VsdC5wYXJhSWQpO1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgndHlwZScsICdTdWJzdHJhdGUnKTtcbiAgICAgICAgICAgICAgICBzZXRHZW5lc2lzSGFzaChyZXN1bHQuZ2VuZXNpc0hhc2gpO1xuICAgICAgICAgICAgICAgIHNldEV4aXN0ZW50aWFsRGVwb3NpdChyZXN1bHQuZXhpc3RlbnRpYWxEZXBvc2l0KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnZGVjaW1hbHMnLCByZXN1bHQuZGVjaW1hbHMpO1xuICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ25hbWUnLCByZXN1bHQubmFtZSk7XG4gICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnc3ltYm9sJywgcmVzdWx0LnN5bWJvbCk7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZXZtQ2hhaW5JZCkge1xuICAgICAgICAgICAgICAgIHNldElzUHVyZUV2bUNoYWluKHRydWUpO1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnZXZtQ2hhaW5JZCcsIHJlc3VsdC5ldm1DaGFpbklkKTtcbiAgICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3R5cGUnLCAnRVZNJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SXNQdXJlRXZtQ2hhaW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnYWRkcmVzc1ByZWZpeCcsIHJlc3VsdC5hZGRyZXNzUHJlZml4KTtcbiAgICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3BhcmFJZCcsIHJlc3VsdC5wYXJhSWQpO1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgndHlwZScsICdTdWJzdHJhdGUnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnZGVjaW1hbHMnLCByZXN1bHQuZGVjaW1hbHMpO1xuICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ25hbWUnLCByZXN1bHQubmFtZSk7XG4gICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnc3ltYm9sJywgcmVzdWx0LnN5bWJvbCk7XG5cbiAgICAgICAgICAgICAgc2V0UHJvdmlkZXJWYWxpZGF0aW9uKHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiBoYW5kbGVFcnJvck1lc3NhZ2UocmVzdWx0LmVycm9yKSB9KTtcblxuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGhhbmRsZUVycm9yTWVzc2FnZShyZXN1bHQuZXJyb3IpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNWYWxpZGF0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IodCgnRXJyb3IgdmFsaWRhdGluZyB0aGlzIHByb3ZpZGVyJykpKTtcbiAgICAgICAgICAgIHNldFByb3ZpZGVyVmFsaWRhdGlvbih7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogdCgnRXJyb3IgdmFsaWRhdGluZyB0aGlzIHByb3ZpZGVyJykgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKHQoJ1Byb3ZpZGVyIFVSTCBpcyBub3QgdmFsaWQnKSkpO1xuICAgICAgICBzZXRQcm92aWRlclZhbGlkYXRpb24oeyBzdGF0dXM6ICcnIH0pO1xuICAgICAgICBzZXRJc1Nob3dDb25uZWN0aW9uU3RhdHVzKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2Zvcm0sIGhhbmRsZUVycm9yTWVzc2FnZSwgdF0pO1xuXG4gIGNvbnN0IHByb3ZpZGVyU3VmZml4ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaXNTaG93Q29ubmVjdGlvblN0YXR1cykge1xuICAgICAgcmV0dXJuIDw+PC8+O1xuICAgIH1cblxuICAgIGlmIChwcm92aWRlclZhbGlkYXRpb24uc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uXG4gICAgICAgICAgY3VzdG9tU2l6ZT17JzIwcHgnfVxuICAgICAgICAgIGljb25Db2xvcj17dG9rZW4uY29sb3JTdWNjZXNzfVxuICAgICAgICAgIHBob3NwaG9ySWNvbj17V2lmaUhpZ2h9XG4gICAgICAgICAgdHlwZT17J3Bob3NwaG9yJ31cbiAgICAgICAgICB3ZWlnaHQ9eydib2xkJ31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWRhdGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHNpemU9eycyMHB4J30gLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHByb3ZpZGVyVmFsaWRhdGlvbi5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uXG4gICAgICAgICAgY3VzdG9tU2l6ZT17JzIwcHgnfVxuICAgICAgICAgIGljb25Db2xvcj17dG9rZW5bJ2dyYXktNCddfVxuICAgICAgICAgIHBob3NwaG9ySWNvbj17V2lmaVNsYXNofVxuICAgICAgICAgIHR5cGU9eydwaG9zcGhvcid9XG4gICAgICAgICAgd2VpZ2h0PXsnYm9sZCd9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiA8PjwvPjtcbiAgfSwgW2lzU2hvd0Nvbm5lY3Rpb25TdGF0dXMsIGlzVmFsaWRhdGluZywgcHJvdmlkZXJWYWxpZGF0aW9uLnN0YXR1cywgdG9rZW5dKTtcblxuICB1c2VGb2N1c0Zvcm1JdGVtKGZvcm0sICdwcm92aWRlcicpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT17YGNoYWluX2ltcG9ydCAke2NsYXNzTmFtZX1gfT5cbiAgICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgICAgbGVmdEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIG9uQ2xpY2s6IG9uQmFjayxcbiAgICAgICAgICBjaGlsZHJlbjogdCgnQ2FuY2VsJylcbiAgICAgICAgfX1cbiAgICAgICAgb25CYWNrPXtvbkJhY2t9XG4gICAgICAgIHJpZ2h0Rm9vdGVyQnV0dG9uPXt7XG4gICAgICAgICAgYmxvY2s6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzU3VibWl0RGlzYWJsZWQoKSxcbiAgICAgICAgICBpY29uOiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBwaG9zcGhvckljb249e0Zsb3BweURpc2tCYWNrfVxuICAgICAgICAgICAgICB0eXBlPSdwaG9zcGhvcidcbiAgICAgICAgICAgICAgd2VpZ2h0PXsnZmlsbCd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICksXG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgICBvbkNsaWNrOiBvblN1Ym1pdCxcbiAgICAgICAgICBjaGlsZHJlbjogdCgnU2F2ZScpXG4gICAgICAgIH19XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogPEluZm9JY29uIC8+LFxuICAgICAgICAgICAgb25DbGljazogaGFuZGxlQ2xpY2tTdWJoZWFkZXJCdXR0b25cbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAgIHRpdGxlPXt0PHN0cmluZz4oJ0ltcG9ydCBuZXR3b3JrJyl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2hhaW5faW1wb3J0X19jb250YWluZXInfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NoYWluX2ltcG9ydF9faGVhZGVyX2luZm8nfT5cbiAgICAgICAgICAgIHt0KCdDdXJyZW50bHkgc3VwcG9ydCBXU1MgcHJvdmlkZXIgZm9yIFN1YnN0cmF0ZSBuZXR3b3JrcyBhbmQgSFRUUCBwcm92aWRlciBmb3IgRVZNIG5ldHdvcmsnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2hhaW5faW1wb3J0X19hdHRyaWJ1dGVzX2NvbnRhaW5lcid9PlxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgbmFtZT17J3Byb3ZpZGVyJ31cbiAgICAgICAgICAgICAgICBydWxlcz17W3sgdmFsaWRhdG9yOiBwcm92aWRlclZhbGlkYXRvciB9XX1cbiAgICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlVHJpZ2dlcj17WydvbkJsdXInXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVmFsaWRhdGluZ31cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdQcm92aWRlciBVUkwnKX1cbiAgICAgICAgICAgICAgICAgIHByZWZpeD17KFxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVNpemU9eycyNHB4J31cbiAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e3Rva2VuWydncmF5LTQnXX1cbiAgICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e1NoYXJlTmV0d29ya31cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncGhvc3Bob3InfVxuICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD17J2JvbGQnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHN1ZmZpeD17cHJvdmlkZXJTdWZmaXgoKX1cbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ1Byb3ZpZGVyIFVSTCcpfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXt0b2tlbi5wYWRkaW5nU019PlxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTZ9PlxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPXsnbmFtZSd9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnTmV0d29yayBuYW1lJyl9XG4gICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXs8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17JzI0cHgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPXt0b2tlblsnZ3JheS00J119XG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e0dsb2JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3Bob3NwaG9yJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD17J2JvbGQnfVxuICAgICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ05ldHdvcmsgbmFtZScpfVxuICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBQbGFjZW1lbnQ9eyd0b3BMZWZ0J31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9eydzeW1ib2wnfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1N5bWJvbCcpfVxuICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ1N5bWJvbCcpfVxuICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBQbGFjZW1lbnQ9eyd0b3BMZWZ0J31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17dG9rZW4ucGFkZGluZ1NNfT5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT17J3ByaWNlSWQnfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1ByaWNlIElEJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnUHJpY2UgSUQnKX1cbiAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50PXsndG9wTGVmdCd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPXsndHlwZSd9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnTmV0d29yayB0eXBlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnTmV0d29yayB0eXBlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPXsnYmxvY2tFeHBsb3Jlcid9XG4gICAgICAgICAgICAgICAgcnVsZXM9e1t7IHZhbGlkYXRvcjogYmxvY2tFeHBsb3JlclZhbGlkYXRvciB9XX1cbiAgICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnQmxvY2sgZXhwbG9yZXInKX1cbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ0Jsb2NrIGV4cGxvcmVyJyl9XG4gICAgICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50PXsndG9wTGVmdCd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgIG5hbWU9eydjcm93ZGxvYW5VcmwnfVxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyB2YWxpZGF0b3I6IGNyb3dkbG9hblVybFZhbGlkYXRvciB9XX1cbiAgICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnQ3Jvd2Rsb2FuIFVSTCcpfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnQ3Jvd2Rsb2FuIFVSTCcpfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59XG5cbmNvbnN0IENoYWluSW1wb3J0ID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgJy5jaGFpbl9pbXBvcnRfX2hlYWRlcl9pbmZvJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dFRlcnRpYXJ5LFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5ib2R5Rm9udFdlaWdodCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4sXG4gICAgICBtYXJnaW5Ub3A6IDIyXG4gICAgfSxcblxuICAgICcuY2hhaW5faW1wb3J0X19jb250YWluZXInOiB7XG4gICAgICBtYXJnaW5SaWdodDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luTGVmdDogdG9rZW4ubWFyZ2luXG4gICAgfSxcblxuICAgICcuY2hhaW5faW1wb3J0X19hdHRyaWJ1dGVzX2NvbnRhaW5lcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0b2tlbi5tYXJnaW5TTVxuICAgIH0sXG5cbiAgICAnLmFudC1pbnB1dC1jb250YWluZXIgLmFudC1pbnB1dC13cmFwcGVyJzoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcblxuICAgICcuYW50LWZvcm0taXRlbSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgIH0sXG5cbiAgICAnLmFudC1pbnB1dC1jb250YWluZXIuLWRpc2FibGVkIC5hbnQtaW5wdXQnOiB7XG4gICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgIH0sXG5cbiAgICAnLmFudC1pbnB1dC1jb250YWluZXIuLWRpc2FibGVkJzoge1xuICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICB9LFxuXG4gICAgJy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCAuYW50LWZvcm0taXRlbS1leHBsYWluJzoge1xuICAgICAgcGFkZGluZ0JvdHRvbTogMFxuICAgIH0sXG5cbiAgICAnLmFudC1pbnB1dC1jb250YWluZXIgLmFudC1pbnB1dC1zdWZmaXgnOiB7XG4gICAgICBtYXJnaW5SaWdodDogMFxuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhaW5JbXBvcnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MCw5MS4zVjIwOGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjQ4YTgsOCwwLDAsMC04LThIOTEuM2E3LjksNy45LDAsMCwwLTUuNiwyLjNMNDIuMyw4NS43QTcuOSw3LjksMCwwLDAsNDAsOTEuM1pcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjE0OFwiLFxuICAgIHI6IFwiMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEwNCA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJkdW90b25lXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIwOCw0MEg5MS4zYTcuOSw3LjksMCwwLDAtNS42LDIuM0w0Mi4zLDg1LjdBNy45LDcuOSwwLDAsMCw0MCw5MS4zVjIwOGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjQ4QTgsOCwwLDAsMCwyMDgsNDBaTTEyOCwxNzZhMjgsMjgsMCwxLDEsMjgtMjhBMjgsMjgsMCwwLDEsMTI4LDE3NlpcIixcbiAgICBvcGFjaXR5OiBcIjAuMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDAsOTEuM1YyMDhhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY0OGE4LDgsMCwwLDAtOC04SDkxLjNhNy45LDcuOSwwLDAsMC01LjYsMi4zTDQyLjMsODUuN0E3LjksNy45LDAsMCwwLDQwLDkxLjNaXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxNDhcIixcbiAgICByOiBcIjI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI5NiA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJmaWxsXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMDgsMzJIMTcyYTQsNCwwLDAsMC00LDRWODBhOCw4LDAsMCwxLTgsOEg5Ni4zQTguMiw4LjIsMCwwLDEsODgsODAuNSw4LDgsMCwwLDEsOTYsNzJoNTZWMzZhNCw0LDAsMCwwLTQtNEg5MS4zQTE1LjksMTUuOSwwLDAsMCw4MCwzNi43TDM2LjcsODBBMTUuOSwxNS45LDAsMCwwLDMyLDkxLjNWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEyOCwxNzZhMjgsMjgsMCwxLDEsMjgtMjhBMjguMSwyOC4xLDAsMCwxLDEyOCwxNzZaXCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImxpZ2h0XCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQwLDkxLjNWMjA4YTgsOCwwLDAsMCw4LDhIMjA4YTgsOCwwLDAsMCw4LThWNDhhOCw4LDAsMCwwLTgtOEg5MS4zYTcuOSw3LjksMCwwLDAtNS42LDIuM0w0Mi4zLDg1LjdBNy45LDcuOSwwLDAsMCw0MCw5MS4zWlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTQ4XCIsXG4gICAgcjogXCIyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiOTYgODAgMTYwIDgwIDE2MCA0MFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MCw5MS4zVjIwOGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjQ4YTgsOCwwLDAsMC04LThIOTEuM2E3LjksNy45LDAsMCwwLTUuNiwyLjNMNDIuMyw4NS43QTcuOSw3LjksMCwwLDAsNDAsOTEuM1pcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTQ4XCIsXG4gICAgcjogXCIyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI5NiA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInJlZ3VsYXJcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDAsOTEuM1YyMDhhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY0OGE4LDgsMCwwLDAtOC04SDkxLjNhNy45LDcuOSwwLDAsMC01LjYsMi4zTDQyLjMsODUuN0E3LjksNy45LDAsMCwwLDQwLDkxLjNaXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxNDhcIixcbiAgICByOiBcIjI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI5NiA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBGbG9wcHlEaXNrQmFjayA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CYXNlLCBPYmplY3QuYXNzaWduKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIHJlbmRlclBhdGg6IHJlbmRlclBhdGhcbiAgfSkpO1xufSk7XG5GbG9wcHlEaXNrQmFjay5kaXNwbGF5TmFtZSA9IFwiRmxvcHB5RGlza0JhY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgRmxvcHB5RGlza0JhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GbG9wcHlEaXNrQmFjay5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiX0NIQUlOX1ZBTElEQVRJT05fRVJST1IiLCJfZ2VuZXJhdGVDdXN0b21Qcm92aWRlcktleSIsImlzVXJsIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJJbmZvSWNvbiIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVRyYW5zbGF0aW9uIiwidXNlRm9jdXNGb3JtSXRlbSIsInVwc2VydENoYWluIiwidmFsaWRhdGVDdXN0b21DaGFpbiIsIkFjdGl2aXR5SW5kaWNhdG9yIiwiQ29sIiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIlJvdyIsIkZsb3BweURpc2tCYWNrIiwiR2xvYmUiLCJTaGFyZU5ldHdvcmsiLCJXaWZpSGlnaCIsIldpZmlTbGFzaCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwidXNlVGhlbWUiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ0IiwibmF2aWdhdGUiLCJ0b2tlbiIsInNob3dOb3RpZmljYXRpb24iLCJmb3JtIiwidXNlRm9ybSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNQdXJlRXZtQ2hhaW4iLCJzZXRJc1B1cmVFdm1DaGFpbiIsImlzU2hvd0Nvbm5lY3Rpb25TdGF0dXMiLCJzZXRJc1Nob3dDb25uZWN0aW9uU3RhdHVzIiwicHJvdmlkZXJWYWxpZGF0aW9uIiwic2V0UHJvdmlkZXJWYWxpZGF0aW9uIiwic3RhdHVzIiwiaXNWYWxpZGF0aW5nIiwic2V0SXNWYWxpZGF0aW5nIiwiZ2VuZXNpc0hhc2giLCJzZXRHZW5lc2lzSGFzaCIsImV4aXN0ZW50aWFsRGVwb3NpdCIsInNldEV4aXN0ZW50aWFsRGVwb3NpdCIsImhhbmRsZUNsaWNrU3ViaGVhZGVyQnV0dG9uIiwiY29uc29sZSIsImxvZyIsIm9uQmFjayIsImlzU3VibWl0RGlzYWJsZWQiLCJvblN1Ym1pdCIsImJsb2NrRXhwbG9yZXIiLCJnZXRGaWVsZFZhbHVlIiwiY3Jvd2Rsb2FuVXJsIiwicHJvdmlkZXIiLCJkZWNpbWFscyIsInN5bWJvbCIsImFkZHJlc3NQcmVmaXgiLCJwYXJhSWQiLCJldm1DaGFpbklkIiwibmFtZSIsInByaWNlSWQiLCJuZXdQcm92aWRlcktleSIsInBhcmFtcyIsIm1vZGUiLCJjaGFpbkVkaXRJbmZvIiwic2x1ZyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVycyIsImNoYWluVHlwZSIsImNoYWluU3BlYyIsInRoZW4iLCJyZXN1bHQiLCJtZXNzYWdlIiwiY2F0Y2giLCJibG9ja0V4cGxvcmVyVmFsaWRhdG9yIiwicnVsZSIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsZW5ndGgiLCJFcnJvciIsImNyb3dkbG9hblVybFZhbGlkYXRvciIsImhhbmRsZUVycm9yTWVzc2FnZSIsImVycm9yQ29kZSIsIkNPTk5FQ1RJT05fRkFJTFVSRSIsIkVYSVNURURfUFJPVklERVIiLCJFWElTVEVEX0NIQUlOIiwicHJvdmlkZXJWYWxpZGF0b3IiLCJwYXJzZWRQcm92aWRlciIsInJlcGxhY2VBbGwiLCJzdWNjZXNzIiwic2V0RmllbGRWYWx1ZSIsImVycm9yIiwicHJvdmlkZXJTdWZmaXgiLCJjb2xvclN1Y2Nlc3MiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJibG9jayIsImRpc2FibGVkIiwiaWNvbiIsInZhbGlkYXRvciIsInBhZGRpbmdTTSIsIkNoYWluSW1wb3J0IiwidGhlbWUiLCJjb2xvciIsImNvbG9yVGV4dFRlcnRpYXJ5IiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImZvbnRXZWlnaHQiLCJib2R5Rm9udFdlaWdodCIsIndpZHRoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtYXJnaW5TTSIsIm92ZXJmbG93IiwiY3Vyc29yIiwicGFkZGluZ0JvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=