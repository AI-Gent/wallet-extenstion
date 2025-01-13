"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_Chains_AddProvider_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Chains/AddProvider.tsx":
/*!**********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Chains/AddProvider.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_handler_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/handler/types */ "../extension-base/src/services/chain-service/handler/types.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_InfoIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/InfoIcon */ "../extension-koni-ui/src/components/Icon/InfoIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useFetchChainInfo */ "../extension-koni-ui/src/hooks/screen/common/useFetchChainInfo.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/activity-indicator/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/row/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/col/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/WifiHigh.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/WifiSlash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShareNetwork.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Globe.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0



















function parseProviders(newProvider, existingProviders) {
  let count = 0;
  Object.keys(existingProviders).forEach(providerKey => {
    if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_9__._isCustomProvider)(providerKey)) {
      count += 1;
    }
  });
  const newProviderKey = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_9__._generateCustomProviderKey)(count);
  return {
    newProviderKey,
    newProviders: {
      ...existingProviders,
      [newProviderKey]: newProvider
    }
  };
}
function Component({
  className = ''
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.useTheme)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
  const showNotification = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const chainSlug = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    return location.state;
  }, [location.state]);
  const chainInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_5__["default"])(chainSlug);
  const chainType = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    let result = '';
    const types = [];
    if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_9__._isSubstrateChain)(chainInfo)) {
      types.push('Substrate');
    }
    if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_9__._isChainEvmCompatible)(chainInfo)) {
      types.push('EVM');
    }
    for (let i = 0; i < types.length; i++) {
      result = result.concat(types[i]);
      if (i !== types.length - 1) {
        result = result.concat(', ');
      }
    }
    return result;
  }, [chainInfo]);
  const formInitValues = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    return {
      provider: '',
      name: chainInfo.name,
      chainType: chainType(),
      symbol: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_9__._getChainNativeTokenBasicInfo)(chainInfo).symbol
    };
  }, [chainInfo, chainType]);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].useForm();
  const [isValidating, setIsValidating] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [isShowConnectionStatus, setIsShowConnectionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [providerValidation, setProviderValidation] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    status: ''
  });
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    navigate(-1);
  }, [navigate]);
  const isSubmitDisabled = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    return providerValidation.status !== 'success';
  }, [providerValidation.status]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    setLoading(true);
    const newProvider = form.getFieldValue('provider');
    const {
      newProviderKey,
      newProviders
    } = parseProviders(newProvider.replaceAll(' ', ''), chainInfo.providers);
    const params = {
      mode: 'update',
      chainEditInfo: {
        slug: chainInfo.slug,
        currentProvider: newProviderKey,
        providers: newProviders
      }
    };
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_6__.upsertChain)(params).then(result => {
      setLoading(false);
      if (result) {
        showNotification({
          message: t('Added a provider successfully')
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
  }, [chainInfo.providers, chainInfo.slug, form, navigate, showNotification, t]);
  const onCancel = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    navigate(-1);
  }, [navigate]);
  const handleErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(errorCode => {
    switch (errorCode) {
      case _subwallet_extension_base_services_chain_service_handler_types__WEBPACK_IMPORTED_MODULE_13__._CHAIN_VALIDATION_ERROR.CONNECTION_FAILURE:
        return t('Cannot connect to this provider');
      case _subwallet_extension_base_services_chain_service_handler_types__WEBPACK_IMPORTED_MODULE_13__._CHAIN_VALIDATION_ERROR.EXISTED_PROVIDER:
        return t('This provider has already been added');
      case _subwallet_extension_base_services_chain_service_handler_types__WEBPACK_IMPORTED_MODULE_13__._CHAIN_VALIDATION_ERROR.PROVIDER_NOT_SAME_CHAIN:
        return t('This provider is not for this network');
      default:
        return t('Error validating this provider');
    }
  }, [t]);
  const providerSuffix = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    if (!isShowConnectionStatus) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {});
    }
    if (providerValidation.status === 'success') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
        customSize: '20px',
        iconColor: token.colorSuccess,
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
        type: 'phosphor',
        weight: 'bold'
      });
    }
    if (isValidating) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
        size: '20px'
      });
    }
    if (providerValidation.status === 'error') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
        customSize: '20px',
        iconColor: token['gray-4'],
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"],
        type: 'phosphor',
        weight: 'bold'
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {});
  }, [isShowConnectionStatus, isValidating, providerValidation.status, token]);
  const providerValidator = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((rule, provider) => {
    return new Promise((resolve, reject) => {
      if ((0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__.isUrl)(provider)) {
        setIsShowConnectionStatus(true);
        setIsValidating(true);
        const parsedProvider = provider.replaceAll(' ', '');
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_6__.validateCustomChain)(parsedProvider, chainInfo.slug).then(result => {
          setIsValidating(false);
          if (result.success) {
            resolve();
            setProviderValidation({
              status: 'success'
            });
          }
          if (result.error) {
            reject(new Error(handleErrorMessage(result.error)));
            setProviderValidation({
              status: 'error',
              message: handleErrorMessage(result.error)
            });
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
  }, [chainInfo.slug, handleErrorMessage, t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `add_provider ${className}`,
    resolve: dataContext.awaitStores(['chainStore']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      leftFooterButton: {
        onClick: onCancel,
        children: t('Cancel')
      },
      onBack: onBack,
      rightFooterButton: {
        block: true,
        disabled: isSubmitDisabled(),
        loading: loading,
        onClick: onSubmit,
        children: t('Save')
      },
      showBackButton: true,
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: true,
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components_Icon_InfoIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      }],
      subHeaderPaddingVertical: true,
      title: t('Add new provider'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: 'add_provider__container',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "description",
          children: t('Currently support WSS provider for Substrate networks and HTTP provider for EVM network')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
          form: form,
          initialValues: formInitValues(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: 'add_provider__attributes_container',
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].Item, {
              name: 'provider',
              rules: [{
                validator: providerValidator
              }],
              statusHelpAsTooltip: true,
              validateTrigger: ['onBlur'],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                disabled: isValidating,
                placeholder: t('Provider URL'),
                prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  customSize: '24px',
                  iconColor: token['gray-4'],
                  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
                  type: 'phosphor',
                  weight: 'bold'
                }),
                suffix: providerSuffix()
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              gutter: token.paddingSM,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
                span: 16,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].Item, {
                  name: 'name',
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    disabled: true,
                    placeholder: t('Network name'),
                    prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                      customSize: '24px',
                      iconColor: token['gray-4'],
                      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_23__["default"],
                      type: 'phosphor',
                      weight: 'bold'
                    }),
                    tooltip: t('Network name'),
                    tooltipPlacement: "topLeft",
                    value: chainInfo.name
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
                span: 8,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].Item, {
                  name: 'symbol',
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    disabled: true,
                    placeholder: t('Symbol'),
                    tooltip: t('Symbol'),
                    tooltipPlacement: "topLeft",
                    value: chainInfo.slug
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].Item, {
              name: 'chainType',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
                disabled: true,
                placeholder: t('Network type'),
                tooltip: t('Network type'),
                tooltipPlacement: "topLeft",
                value: chainInfo.slug
              })
            })]
          })
        })]
      })
    })
  });
}
const AddProvider = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(Component).withConfig({
  displayName: "AddProvider",
  componentId: "sc-1rrdntg-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.add_provider__container': {
      padding: token.padding
    },
    '.description': {
      padding: token.padding,
      paddingTop: 0,
      textAlign: 'center',
      color: token.colorTextDescription,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6
    },
    '.ant-btn >span': {
      fontSize: token.fontSizeLG
    },
    '.add_provider__attributes_container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.marginSM
    },
    '.ant-input-container .ant-input-suffix': {
      marginRight: 0,
      marginLeft: token.margin + 2
    },
    '.ant-form-item': {
      marginBottom: 0
    },
    '.ant-input-container .ant-input-affix-wrapper': {
      overflow: 'hidden'
    },
    '.ant-form-item-with-help .ant-form-item-explain': {
      paddingBottom: 0
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProvider);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfQ2hhaW5zX0FkZFByb3ZpZGVyX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRXlHO0FBRXVGO0FBQ3hJO0FBQ3NCO0FBQ0Q7QUFDRztBQUNRO0FBQ0Y7QUFDYTtBQUNUO0FBRUw7QUFDWDtBQUVBO0FBQ2Q7QUFDUDtBQUFBO0FBQUE7QUFBQTtBQWdCckQsU0FBU21DLGNBQWMsQ0FBRUMsV0FBbUIsRUFBRUMsaUJBQXlDLEVBQUU7RUFDdkYsSUFBSUMsS0FBSyxHQUFHLENBQUM7RUFFYkMsTUFBTSxDQUFDQyxJQUFJLENBQUNILGlCQUFpQixDQUFDLENBQUNJLE9BQU8sQ0FBRUMsV0FBVyxJQUFLO0lBQ3RELElBQUl0Qyx5R0FBaUIsQ0FBQ3NDLFdBQVcsQ0FBQyxFQUFFO01BQ2xDSixLQUFLLElBQUksQ0FBQztJQUNaO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsTUFBTUssY0FBYyxHQUFHMUMsa0hBQTBCLENBQUNxQyxLQUFLLENBQUM7RUFFeEQsT0FBTztJQUNMSyxjQUFjO0lBQ2RDLFlBQVksRUFBRTtNQUNaLEdBQUdQLGlCQUFpQjtNQUNwQixDQUFDTSxjQUFjLEdBQUdQO0lBQ3BCO0VBQ0YsQ0FBQztBQUNIO0FBRUEsU0FBU1MsU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEUsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR25DLG9HQUFjLEVBQUU7RUFDOUIsTUFBTW9DLFFBQVEsR0FBR2hCLDhEQUFXLEVBQUU7RUFDOUIsTUFBTWlCLFdBQVcsR0FBR3JCLGlEQUFVLENBQUNsQiwwRkFBVyxDQUFDO0VBQzNDLE1BQU07SUFBRXdDO0VBQU0sQ0FBQyxHQUFHaEIsNERBQVEsRUFBVztFQUNyQyxNQUFNaUIsUUFBUSxHQUFHcEIsOERBQVcsRUFBRTtFQUM5QixNQUFNcUIs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b25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9TZXR0aW5ncy9DaGFpbnMvQWRkUHJvdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS9oYW5kbGVyL3R5cGVzJztcbmltcG9ydCB7IF9OZXR3b3JrVXBzZXJ0UGFyYW1zIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3R5cGVzJztcbmltcG9ydCB7IF9nZW5lcmF0ZUN1c3RvbVByb3ZpZGVyS2V5LCBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbywgX2lzQ2hhaW5Fdm1Db21wYXRpYmxlLCBfaXNDdXN0b21Qcm92aWRlciwgX2lzU3Vic3RyYXRlQ2hhaW4gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IExheW91dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9JY29uL0luZm9JY29uJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgdXNlTm90aWZpY2F0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZU5vdGlmaWNhdGlvbic7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZUZldGNoQ2hhaW5JbmZvIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvc2NyZWVuL2NvbW1vbi91c2VGZXRjaENoYWluSW5mbyc7XG5pbXBvcnQgeyB1cHNlcnRDaGFpbiwgdmFsaWRhdGVDdXN0b21DaGFpbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFRoZW1lLCBUaGVtZVByb3BzLCBWYWxpZGF0ZVN0YXR1cyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IsIENvbCwgRm9ybSwgSWNvbiwgSW5wdXQsIFJvdyB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgR2xvYmUsIFNoYXJlTmV0d29yaywgV2lmaUhpZ2gsIFdpZmlTbGFzaCB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCB7IFJ1bGVPYmplY3QgfSBmcm9tICdyYy1maWVsZC1mb3JtL2xpYi9pbnRlcmZhY2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHNcblxuaW50ZXJmYWNlIEFkZFByb3ZpZGVyRm9ybSB7XG4gIHByb3ZpZGVyOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgY2hhaW5UeXBlOiBzdHJpbmcsXG4gIHN5bWJvbDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBWYWxpZGF0aW9uSW5mbyB7XG4gIHN0YXR1czogVmFsaWRhdGVTdGF0dXMsXG4gIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gcGFyc2VQcm92aWRlcnMgKG5ld1Byb3ZpZGVyOiBzdHJpbmcsIGV4aXN0aW5nUHJvdmlkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgT2JqZWN0LmtleXMoZXhpc3RpbmdQcm92aWRlcnMpLmZvckVhY2goKHByb3ZpZGVyS2V5KSA9PiB7XG4gICAgaWYgKF9pc0N1c3RvbVByb3ZpZGVyKHByb3ZpZGVyS2V5KSkge1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG5ld1Byb3ZpZGVyS2V5ID0gX2dlbmVyYXRlQ3VzdG9tUHJvdmlkZXJLZXkoY291bnQpO1xuXG4gIHJldHVybiB7XG4gICAgbmV3UHJvdmlkZXJLZXksXG4gICAgbmV3UHJvdmlkZXJzOiB7XG4gICAgICAuLi5leGlzdGluZ1Byb3ZpZGVycyxcbiAgICAgIFtuZXdQcm92aWRlcktleV06IG5ld1Byb3ZpZGVyXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UHJvcHM+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3Qgc2hvd05vdGlmaWNhdGlvbiA9IHVzZU5vdGlmaWNhdGlvbigpO1xuXG4gIGNvbnN0IGNoYWluU2x1ZyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBsb2NhdGlvbi5zdGF0ZSBhcyBzdHJpbmc7XG4gIH0sIFtsb2NhdGlvbi5zdGF0ZV0pO1xuXG4gIGNvbnN0IGNoYWluSW5mbyA9IHVzZUZldGNoQ2hhaW5JbmZvKGNoYWluU2x1Zyk7XG5cbiAgY29uc3QgY2hhaW5UeXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCB0eXBlczogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmIChfaXNTdWJzdHJhdGVDaGFpbihjaGFpbkluZm8pKSB7XG4gICAgICB0eXBlcy5wdXNoKCdTdWJzdHJhdGUnKTtcbiAgICB9XG5cbiAgICBpZiAoX2lzQ2hhaW5Fdm1Db21wYXRpYmxlKGNoYWluSW5mbykpIHtcbiAgICAgIHR5cGVzLnB1c2goJ0VWTScpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodHlwZXNbaV0pO1xuXG4gICAgICBpZiAoaSAhPT0gdHlwZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KCcsICcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFtjaGFpbkluZm9dKTtcblxuICBjb25zdCBmb3JtSW5pdFZhbHVlcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXI6ICcnLFxuICAgICAgbmFtZTogY2hhaW5JbmZvLm5hbWUsXG4gICAgICBjaGFpblR5cGU6IGNoYWluVHlwZSgpLFxuICAgICAgc3ltYm9sOiBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyhjaGFpbkluZm8pLnN5bWJvbFxuICAgIH07XG4gIH0sIFtjaGFpbkluZm8sIGNoYWluVHlwZV0pO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxBZGRQcm92aWRlckZvcm0+KCk7XG4gIGNvbnN0IFtpc1ZhbGlkYXRpbmcsIHNldElzVmFsaWRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU2hvd0Nvbm5lY3Rpb25TdGF0dXMsIHNldElzU2hvd0Nvbm5lY3Rpb25TdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvdmlkZXJWYWxpZGF0aW9uLCBzZXRQcm92aWRlclZhbGlkYXRpb25dID0gdXNlU3RhdGU8VmFsaWRhdGlvbkluZm8+KHsgc3RhdHVzOiAnJyB9KTtcblxuICBjb25zdCBvbkJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoLTEpO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCBpc1N1Ym1pdERpc2FibGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiBwcm92aWRlclZhbGlkYXRpb24uc3RhdHVzICE9PSAnc3VjY2Vzcyc7XG4gIH0sIFtwcm92aWRlclZhbGlkYXRpb24uc3RhdHVzXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IG5ld1Byb3ZpZGVyID0gZm9ybS5nZXRGaWVsZFZhbHVlKCdwcm92aWRlcicpIGFzIHN0cmluZztcblxuICAgIGNvbnN0IHsgbmV3UHJvdmlkZXJLZXksIG5ld1Byb3ZpZGVycyB9ID0gcGFyc2VQcm92aWRlcnMobmV3UHJvdmlkZXIucmVwbGFjZUFsbCgnICcsICcnKSwgY2hhaW5JbmZvLnByb3ZpZGVycyk7XG5cbiAgICBjb25zdCBwYXJhbXM6IF9OZXR3b3JrVXBzZXJ0UGFyYW1zID0ge1xuICAgICAgbW9kZTogJ3VwZGF0ZScsXG4gICAgICBjaGFpbkVkaXRJbmZvOiB7XG4gICAgICAgIHNsdWc6IGNoYWluSW5mby5zbHVnLFxuICAgICAgICBjdXJyZW50UHJvdmlkZXI6IG5ld1Byb3ZpZGVyS2V5LFxuICAgICAgICBwcm92aWRlcnM6IG5ld1Byb3ZpZGVyc1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cHNlcnRDaGFpbihwYXJhbXMpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0FkZGVkIGEgcHJvdmlkZXIgc3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiB0KCdBbiBlcnJvciBvY2N1cnJlZCwgcGxlYXNlIHRyeSBhZ2FpbicpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgbWVzc2FnZTogdCgnQW4gZXJyb3Igb2NjdXJyZWQsIHBsZWFzZSB0cnkgYWdhaW4nKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9LCBbY2hhaW5JbmZvLnByb3ZpZGVycywgY2hhaW5JbmZvLnNsdWcsIGZvcm0sIG5hdmlnYXRlLCBzaG93Tm90aWZpY2F0aW9uLCB0XSk7XG5cbiAgY29uc3Qgb25DYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoLTEpO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCBoYW5kbGVFcnJvck1lc3NhZ2UgPSB1c2VDYWxsYmFjaygoZXJyb3JDb2RlOiBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUikgPT4ge1xuICAgIHN3aXRjaCAoZXJyb3JDb2RlKSB7XG4gICAgICBjYXNlIF9DSEFJTl9WQUxJREFUSU9OX0VSUk9SLkNPTk5FQ1RJT05fRkFJTFVSRTpcbiAgICAgICAgcmV0dXJuIHQoJ0Nhbm5vdCBjb25uZWN0IHRvIHRoaXMgcHJvdmlkZXInKTtcbiAgICAgIGNhc2UgX0NIQUlOX1ZBTElEQVRJT05fRVJST1IuRVhJU1RFRF9QUk9WSURFUjpcbiAgICAgICAgcmV0dXJuIHQoJ1RoaXMgcHJvdmlkZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCcpO1xuICAgICAgY2FzZSBfQ0hBSU5fVkFMSURBVElPTl9FUlJPUi5QUk9WSURFUl9OT1RfU0FNRV9DSEFJTjpcbiAgICAgICAgcmV0dXJuIHQoJ1RoaXMgcHJvdmlkZXIgaXMgbm90IGZvciB0aGlzIG5ldHdvcmsnKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0KCdFcnJvciB2YWxpZGF0aW5nIHRoaXMgcHJvdmlkZXInKTtcbiAgICB9XG4gIH0sIFt0XSk7XG5cbiAgY29uc3QgcHJvdmlkZXJTdWZmaXggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpc1Nob3dDb25uZWN0aW9uU3RhdHVzKSB7XG4gICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxuXG4gICAgaWYgKHByb3ZpZGVyVmFsaWRhdGlvbi5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEljb25cbiAgICAgICAgICBjdXN0b21TaXplPXsnMjBweCd9XG4gICAgICAgICAgaWNvbkNvbG9yPXt0b2tlbi5jb2xvclN1Y2Nlc3N9XG4gICAgICAgICAgcGhvc3Bob3JJY29uPXtXaWZpSGlnaH1cbiAgICAgICAgICB0eXBlPXsncGhvc3Bob3InfVxuICAgICAgICAgIHdlaWdodD17J2JvbGQnfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZGF0aW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igc2l6ZT17JzIwcHgnfSAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocHJvdmlkZXJWYWxpZGF0aW9uLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEljb25cbiAgICAgICAgICBjdXN0b21TaXplPXsnMjBweCd9XG4gICAgICAgICAgaWNvbkNvbG9yPXt0b2tlblsnZ3JheS00J119XG4gICAgICAgICAgcGhvc3Bob3JJY29uPXtXaWZpU2xhc2h9XG4gICAgICAgICAgdHlwZT17J3Bob3NwaG9yJ31cbiAgICAgICAgICB3ZWlnaHQ9eydib2xkJ31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDw+PC8+O1xuICB9LCBbaXNTaG93Q29ubmVjdGlvblN0YXR1cywgaXNWYWxpZGF0aW5nLCBwcm92aWRlclZhbGlkYXRpb24uc3RhdHVzLCB0b2tlbl0pO1xuXG4gIGNvbnN0IHByb3ZpZGVyVmFsaWRhdG9yID0gdXNlQ2FsbGJhY2soKHJ1bGU6IFJ1bGVPYmplY3QsIHByb3ZpZGVyOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGlzVXJsKHByb3ZpZGVyKSkge1xuICAgICAgICBzZXRJc1Nob3dDb25uZWN0aW9uU3RhdHVzKHRydWUpO1xuICAgICAgICBzZXRJc1ZhbGlkYXRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZFByb3ZpZGVyID0gcHJvdmlkZXIucmVwbGFjZUFsbCgnICcsICcnKTtcblxuICAgICAgICB2YWxpZGF0ZUN1c3RvbUNoYWluKHBhcnNlZFByb3ZpZGVyLCBjaGFpbkluZm8uc2x1ZylcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBzZXRJc1ZhbGlkYXRpbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICBzZXRQcm92aWRlclZhbGlkYXRpb24oeyBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGhhbmRsZUVycm9yTWVzc2FnZShyZXN1bHQuZXJyb3IpKSk7XG4gICAgICAgICAgICAgIHNldFByb3ZpZGVyVmFsaWRhdGlvbih7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogaGFuZGxlRXJyb3JNZXNzYWdlKHJlc3VsdC5lcnJvcikgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNWYWxpZGF0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IodCgnRXJyb3IgdmFsaWRhdGluZyB0aGlzIHByb3ZpZGVyJykpKTtcbiAgICAgICAgICAgIHNldFByb3ZpZGVyVmFsaWRhdGlvbih7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogdCgnRXJyb3IgdmFsaWRhdGluZyB0aGlzIHByb3ZpZGVyJykgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKHQoJ1Byb3ZpZGVyIFVSTCBpcyBub3QgdmFsaWQnKSkpO1xuICAgICAgICBzZXRQcm92aWRlclZhbGlkYXRpb24oeyBzdGF0dXM6ICcnIH0pO1xuICAgICAgICBzZXRJc1Nob3dDb25uZWN0aW9uU3RhdHVzKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2NoYWluSW5mby5zbHVnLCBoYW5kbGVFcnJvck1lc3NhZ2UsIHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtgYWRkX3Byb3ZpZGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ2NoYWluU3RvcmUnXSl9XG4gICAgPlxuICAgICAgPExheW91dC5CYXNlXG4gICAgICAgIGxlZnRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICBvbkNsaWNrOiBvbkNhbmNlbCxcbiAgICAgICAgICBjaGlsZHJlbjogdCgnQ2FuY2VsJylcbiAgICAgICAgfX1cbiAgICAgICAgb25CYWNrPXtvbkJhY2t9XG4gICAgICAgIHJpZ2h0Rm9vdGVyQnV0dG9uPXt7XG4gICAgICAgICAgYmxvY2s6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzU3VibWl0RGlzYWJsZWQoKSxcbiAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uU3VibWl0LFxuICAgICAgICAgIGNoaWxkcmVuOiB0KCdTYXZlJylcbiAgICAgICAgfX1cbiAgICAgICAgc2hvd0JhY2tCdXR0b249e3RydWV9XG4gICAgICAgIHNob3dTdWJIZWFkZXI9e3RydWV9XG4gICAgICAgIHN1YkhlYWRlckJhY2tncm91bmQ9eyd0cmFuc3BhcmVudCd9XG4gICAgICAgIHN1YkhlYWRlckNlbnRlcj17dHJ1ZX1cbiAgICAgICAgc3ViSGVhZGVySWNvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiA8SW5mb0ljb24gLz5cbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAgIHN1YkhlYWRlclBhZGRpbmdWZXJ0aWNhbD17dHJ1ZX1cbiAgICAgICAgdGl0bGU9e3Q8c3RyaW5nPignQWRkIG5ldyBwcm92aWRlcicpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FkZF9wcm92aWRlcl9fY29udGFpbmVyJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIHt0KCdDdXJyZW50bHkgc3VwcG9ydCBXU1MgcHJvdmlkZXIgZm9yIFN1YnN0cmF0ZSBuZXR3b3JrcyBhbmQgSFRUUCBwcm92aWRlciBmb3IgRVZNIG5ldHdvcmsnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2Zvcm1Jbml0VmFsdWVzKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhZGRfcHJvdmlkZXJfX2F0dHJpYnV0ZXNfY29udGFpbmVyJ30+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPXsncHJvdmlkZXInfVxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyB2YWxpZGF0b3I6IHByb3ZpZGVyVmFsaWRhdG9yIH1dfVxuICAgICAgICAgICAgICAgIHN0YXR1c0hlbHBBc1Rvb2x0aXA9e3RydWV9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyPXtbJ29uQmx1ciddfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNWYWxpZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1Byb3ZpZGVyIFVSTCcpfVxuICAgICAgICAgICAgICAgICAgcHJlZml4PXs8SWNvblxuICAgICAgICAgICAgICAgICAgICBjdXN0b21TaXplPXsnMjRweCd9XG4gICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17dG9rZW5bJ2dyYXktNCddfVxuICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e1NoYXJlTmV0d29ya31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17J3Bob3NwaG9yJ31cbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PXsnYm9sZCd9XG4gICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICAgIHN1ZmZpeD17cHJvdmlkZXJTdWZmaXgoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17dG9rZW4ucGFkZGluZ1NNfT5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE2fT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT17J25hbWUnfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ05ldHdvcmsgbmFtZScpfVxuICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17KFxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17JzI0cHgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e3Rva2VuWydncmF5LTQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtHbG9iZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3Bob3NwaG9yJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PXsnYm9sZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnTmV0d29yayBuYW1lJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD0ndG9wTGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhaW5JbmZvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydzeW1ib2wnfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnU3ltYm9sJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnU3ltYm9sJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD0ndG9wTGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhaW5JbmZvLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPXsnY2hhaW5UeXBlJ30+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdOZXR3b3JrIHR5cGUnKX1cbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ05ldHdvcmsgdHlwZScpfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD0ndG9wTGVmdCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFpbkluZm8uc2x1Z31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5CYXNlPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59XG5cbmNvbnN0IEFkZFByb3ZpZGVyID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgJy5hZGRfcHJvdmlkZXJfX2NvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmdcbiAgICB9LFxuXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nVG9wOiAwLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2XG4gICAgfSxcblxuICAgICcuYW50LWJ0biA+c3Bhbic6IHtcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUxHXG4gICAgfSxcblxuICAgICcuYWRkX3Byb3ZpZGVyX19hdHRyaWJ1dGVzX2NvbnRhaW5lcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0b2tlbi5tYXJnaW5TTVxuICAgIH0sXG5cbiAgICAnLmFudC1pbnB1dC1jb250YWluZXIgLmFudC1pbnB1dC1zdWZmaXgnOiB7XG4gICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IHRva2VuLm1hcmdpbiArIDJcbiAgICB9LFxuXG4gICAgJy5hbnQtZm9ybS1pdGVtJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgfSxcblxuICAgICcuYW50LWlucHV0LWNvbnRhaW5lciAuYW50LWlucHV0LWFmZml4LXdyYXBwZXInOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgJy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCAuYW50LWZvcm0taXRlbS1leHBsYWluJzoge1xuICAgICAgcGFkZGluZ0JvdHRvbTogMFxuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiX0NIQUlOX1ZBTElEQVRJT05fRVJST1IiLCJfZ2VuZXJhdGVDdXN0b21Qcm92aWRlcktleSIsIl9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvIiwiX2lzQ2hhaW5Fdm1Db21wYXRpYmxlIiwiX2lzQ3VzdG9tUHJvdmlkZXIiLCJfaXNTdWJzdHJhdGVDaGFpbiIsImlzVXJsIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJJbmZvSWNvbiIsIkRhdGFDb250ZXh0IiwidXNlTm90aWZpY2F0aW9uIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VGZXRjaENoYWluSW5mbyIsInVwc2VydENoYWluIiwidmFsaWRhdGVDdXN0b21DaGFpbiIsIkFjdGl2aXR5SW5kaWNhdG9yIiwiQ29sIiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIlJvdyIsIkdsb2JlIiwiU2hhcmVOZXR3b3JrIiwiV2lmaUhpZ2giLCJXaWZpU2xhc2giLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUxvY2F0aW9uIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsInBhcnNlUHJvdmlkZXJzIiwibmV3UHJvdmlkZXIiLCJleGlzdGluZ1Byb3ZpZGVycyIsImNvdW50IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm92aWRlcktleSIsIm5ld1Byb3ZpZGVyS2V5IiwibmV3UHJvdmlkZXJzIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwidCIsIm5hdmlnYXRlIiwiZGF0YUNvbnRleHQiLCJ0b2tlbiIsImxvY2F0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsImNoYWluU2x1ZyIsInN0YXRlIiwiY2hhaW5JbmZvIiwiY2hhaW5UeXBlIiwicmVzdWx0IiwidHlwZXMiLCJwdXNoIiwiaSIsImxlbmd0aCIsImNvbmNhdCIsImZvcm1Jbml0VmFsdWVzIiwicHJvdmlkZXIiLCJuYW1lIiwic3ltYm9sIiwiZm9ybSIsInVzZUZvcm0iLCJpc1ZhbGlkYXRpbmciLCJzZXRJc1ZhbGlkYXRpbmciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzU2hvd0Nvbm5lY3Rpb25TdGF0dXMiLCJzZXRJc1Nob3dDb25uZWN0aW9uU3RhdHVzIiwicHJvdmlkZXJWYWxpZGF0aW9uIiwic2V0UHJvdmlkZXJWYWxpZGF0aW9uIiwic3RhdHVzIiwib25CYWNrIiwiaXNTdWJtaXREaXNhYmxlZCIsIm9uU3VibWl0IiwiZ2V0RmllbGRWYWx1ZSIsInJlcGxhY2VBbGwiLCJwcm92aWRlcnMiLCJwYXJhbXMiLCJtb2RlIiwiY2hhaW5FZGl0SW5mbyIsInNsdWciLCJjdXJyZW50UHJvdmlkZXIiLCJ0aGVuIiwibWVzc2FnZSIsImNhdGNoIiwib25DYW5jZWwiLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJlcnJvckNvZGUiLCJDT05ORUNUSU9OX0ZBSUxVUkUiLCJFWElTVEVEX1BST1ZJREVSIiwiUFJPVklERVJfTk9UX1NBTUVfQ0hBSU4iLCJwcm92aWRlclN1ZmZpeCIsImNvbG9yU3VjY2VzcyIsInByb3ZpZGVyVmFsaWRhdG9yIiwicnVsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VkUHJvdmlkZXIiLCJzdWNjZXNzIiwiZXJyb3IiLCJFcnJvciIsImF3YWl0U3RvcmVzIiwib25DbGljayIsImNoaWxkcmVuIiwiYmxvY2siLCJkaXNhYmxlZCIsImljb24iLCJ2YWxpZGF0b3IiLCJwYWRkaW5nU00iLCJBZGRQcm92aWRlciIsInRoZW1lIiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImNvbG9yVGV4dERlc2NyaXB0aW9uIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImZvbnRTaXplTEciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1hcmdpblNNIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwib3ZlcmZsb3ciLCJwYWRkaW5nQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==