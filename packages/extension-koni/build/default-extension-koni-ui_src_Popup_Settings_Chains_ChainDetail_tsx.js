"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_Chains_ChainDetail_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Chains/ChainDetail.tsx":
/*!**********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Chains/ChainDetail.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_ProviderSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/ProviderSelector */ "../extension-koni-ui/src/components/Field/ProviderSelector.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_modal_useConfirmModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/modal/useConfirmModal */ "../extension-koni-ui/src/hooks/modal/useConfirmModal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useFetchChainInfo */ "../extension-koni-ui/src/hooks/screen/common/useFetchChainInfo.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useFetchChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useFetchChainState */ "../extension-koni-ui/src/hooks/screen/common/useFetchChainState.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/field/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/row/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/col/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Trash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FloppyDiskBack.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShareNetwork.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Globe.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0



















function Component({
  className = ''
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.useTheme)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useLocation)();
  const showNotification = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].useForm();
  const {
    handleSimpleConfirmModal
  } = (0,_subwallet_extension_koni_ui_hooks_modal_useConfirmModal__WEBPACK_IMPORTED_MODULE_5__["default"])({
    title: t('Delete network'),
    maskClosable: true,
    closable: true,
    type: 'error',
    subTitle: t('You are about to delete this network'),
    content: t('Confirm delete this network'),
    okText: t('Remove')
  });
  const [isChanged, setIsChanged] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const [isValueValid, setIsValueValid] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const chainSlug = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return location.state;
  }, [location.state]);
  const _chainInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_6__["default"])(chainSlug);
  const _chainState = (0,_subwallet_extension_koni_ui_hooks_screen_common_useFetchChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(chainSlug);
  const [chainInfo] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(_chainInfo);
  const [chainState] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(_chainState);
  const isPureEvmChain = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return chainInfo && (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._isPureEvmChain)(chainInfo);
  }, [chainInfo]);
  const {
    decimals,
    symbol
  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._getChainNativeTokenBasicInfo)(chainInfo);
  }, [chainInfo]);
  const currentProviderUrl = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return chainInfo.providers[chainState.currentProvider];
  }, [chainInfo.providers, chainState.currentProvider]);
  const paraId = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._getSubstrateParaId)(chainInfo);
  }, [chainInfo]);
  const chainId = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._getEvmChainId)(chainInfo);
  }, [chainInfo]);
  const addressPrefix = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._getChainSubstrateAddressPrefix)(chainInfo);
  }, [chainInfo]);
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    navigate(-1);
  }, [navigate]);
  const handleDeleteCustomChain = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    handleSimpleConfirmModal().then(() => {
      setIsDeleting(true);
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__.removeChain)(chainInfo.slug).then(result => {
        if (result) {
          navigate(-1);
          showNotification({
            message: t('Deleted network successfully')
          });
        } else {
          showNotification({
            message: t('Error. Please try again')
          });
          setIsDeleting(false);
        }
      }).catch(() => {
        showNotification({
          message: t('Error. Please try again')
        });
        setIsDeleting(false);
      });
    }).catch(console.log);
  }, [chainInfo.slug, handleSimpleConfirmModal, navigate, showNotification, t]);
  const chainTypeString = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    let result = '';
    const types = [];
    if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._isSubstrateChain)(chainInfo)) {
      types.push('Substrate');
    }
    if ((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._isChainEvmCompatible)(chainInfo)) {
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
  const formInitValues = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return {
      currentProvider: chainState.currentProvider,
      blockExplorer: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._getBlockExplorerFromChain)(chainInfo),
      crowdloanUrl: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._getCrowdloanUrlFromChain)(chainInfo)
    };
  }, [chainInfo, chainState.currentProvider]);
  const subHeaderButton = [{
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
      customSize: `${token.fontSizeHeading3}px`,
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
      type: "phosphor",
      weight: 'light'
    }),
    onClick: handleDeleteCustomChain,
    disabled: !((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._isCustomChain)(chainInfo.slug) && !chainState.active)
  }];
  const handleClickProviderSuffix = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    navigate('/settings/chains/add-provider', {
      state: chainInfo.slug
    });
  }, [chainInfo.slug, navigate]);
  const isSubmitDisabled = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    return !isChanged || !isValueValid || isDeleting;
  }, [isChanged, isDeleting, isValueValid]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    setLoading(true);
    const blockExplorer = form.getFieldValue('blockExplorer');
    const crowdloanUrl = form.getFieldValue('crowdloanUrl');
    const currentProvider = form.getFieldValue('currentProvider');
    const params = {
      mode: 'update',
      chainEditInfo: {
        slug: chainInfo.slug,
        currentProvider: currentProvider,
        providers: chainInfo.providers,
        blockExplorer,
        crowdloanUrl
      }
    };
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__.upsertChain)(params).then(result => {
      setLoading(false);
      if (result) {
        showNotification({
          message: t('Updated network successfully')
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
  const providerFieldSuffix = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: 'chain_detail__provider_suffix_btn',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
        customSize: '20px',
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
        type: 'phosphor',
        weight: 'bold'
      }),
      onClick: handleClickProviderSuffix,
      size: 'xs',
      type: 'ghost'
    });
  }, [handleClickProviderSuffix]);
  const onFormValuesChange = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((changedFields, allFields) => {
    let isFieldsValid = true;
    for (const changedField of allFields) {
      if (changedField.errors && changedField.errors.length > 0) {
        isFieldsValid = false;
      }
    }
    setIsChanged(true);
    setIsValueValid(isFieldsValid);
  }, []);
  const crowdloanUrlValidator = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((rule, value) => {
    return new Promise((resolve, reject) => {
      if (value.length === 0 || (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_19__.isUrl)(value)) {
        resolve();
      } else {
        reject(new Error(t('Crowdloan URL must be a valid URL')));
      }
    });
  }, [t]);
  const blockExplorerValidator = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((rule, value) => {
    return new Promise((resolve, reject) => {
      if (value.length === 0 || (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_19__.isUrl)(value)) {
        resolve();
      } else {
        reject(new Error(t('Block explorer must be a valid URL')));
      }
    });
  }, [t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `chain_detail ${className}`,
    resolve: dataContext.awaitStores(['chainStore']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      onBack: onBack,
      rightFooterButton: {
        block: true,
        disabled: isSubmitDisabled(),
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
          type: "phosphor",
          weight: 'fill'
        }),
        loading: loading,
        onClick: onSubmit,
        children: t('Save')
      },
      showBackButton: true,
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: true,
      subHeaderIcons: subHeaderButton,
      subHeaderPaddingVertical: true,
      title: t('Network detail'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: 'chain_detail__container',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
          disabled: isDeleting,
          form: form,
          initialValues: formInitValues,
          onFieldsChange: onFormValuesChange,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: 'chain_detail__attributes_container',
            children: [Object.keys(chainInfo.providers).length > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Item, {
              name: 'currentProvider',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components_Field_ProviderSelector__WEBPACK_IMPORTED_MODULE_1__.ProviderSelector, {
                chainInfo: chainInfo,
                disabled: isDeleting,
                value: chainState.currentProvider
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              className: 'chain_detail__provider_url',
              content: currentProviderUrl,
              placeholder: t('Provider URL'),
              prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
                customSize: '24px',
                iconColor: token['gray-4'],
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_22__["default"],
                type: 'phosphor',
                weight: 'bold'
              }),
              suffix: providerFieldSuffix()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
              gutter: token.paddingSM,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
                span: 16,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  content: chainInfo.name,
                  placeholder: t('Network name'),
                  prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    customSize: '24px',
                    iconColor: token['gray-4'],
                    phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_25__["default"],
                    type: 'phosphor',
                    weight: 'bold'
                  }),
                  tooltip: t('Network name'),
                  tooltipPlacement: 'topLeft'
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
                span: 8,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  content: symbol,
                  placeholder: t('Symbol'),
                  tooltip: t('Symbol'),
                  tooltipPlacement: 'topLeft'
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
              gutter: token.paddingSM,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
                span: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  content: decimals,
                  placeholder: t('Decimals'),
                  tooltip: t('Decimals'),
                  tooltipPlacement: 'topLeft'
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
                span: 12,
                children: !isPureEvmChain ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  content: paraId > -1 ? paraId : undefined,
                  placeholder: t('ParaId'),
                  tooltip: t('ParaId'),
                  tooltipPlacement: 'topLeft'
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  content: chainId > -1 ? chainId : 'None',
                  placeholder: t('Chain ID'),
                  tooltip: t('Chain ID'),
                  tooltipPlacement: 'topLeft'
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
              gutter: token.paddingSM,
              children: [!isPureEvmChain && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
                span: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  content: addressPrefix.toString(),
                  placeholder: t('Address prefix'),
                  tooltip: t('Address prefix'),
                  tooltipPlacement: 'topLeft'
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
                span: !isPureEvmChain ? 12 : 24,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  content: chainTypeString(),
                  placeholder: t('Network type'),
                  tooltip: t('Network type'),
                  tooltipPlacement: 'topLeft'
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Item, {
              name: 'blockExplorer',
              rules: [{
                validator: blockExplorerValidator
              }],
              statusHelpAsTooltip: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
                placeholder: t('Block explorer'),
                tooltip: t('Block explorer'),
                tooltipPlacement: 'topLeft'
              })
            }), !(0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_14__._isPureEvmChain)(chainInfo) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Item, {
              name: 'crowdloanUrl',
              rules: [{
                validator: crowdloanUrlValidator
              }],
              statusHelpAsTooltip: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
                placeholder: t('Crowdloan URL'),
                tooltip: t('Crowdloan URL'),
                tooltipPlacement: 'topLeft'
              })
            })]
          })
        })
      })
    })
  });
}
const ChainDetail = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])(Component).withConfig({
  displayName: "ChainDetail",
  componentId: "sc-napjf0-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.chain_detail__container': {
      marginTop: 22,
      marginRight: token.margin,
      marginLeft: token.margin
    },
    '.chain_detail__attributes_container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.marginSM
    },
    '.chain_detail__provider_suffix_btn': {
      height: 'auto'
    },
    '.ant-btn.-size-xs.-icon-only': {
      minWidth: 0
    },
    '.ant-form-item': {
      marginBottom: 0
    },
    '.ant-field-container .ant-field-wrapper .ant-field-content-wrapper .ant-field-content': {
      color: token.colorTextLight5
    },
    '.chain_detail__provider_url .ant-field-wrapper .ant-field-content-wrapper .ant-field-content': {
      color: token.colorTextLight1
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChainDetail);

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


/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js":
/*!****************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/Plus.esm.js ***!
  \****************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
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

var Plus = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Plus.displayName = "Plus";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plus);
//# sourceMappingURL=Plus.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfQ2hhaW5zX0NoYWluRGV0YWlsX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRytTO0FBQ3ZQO0FBQ3NCO0FBQ29CO0FBQ2xCO0FBQ1E7QUFDRjtBQUNDO0FBQ1k7QUFDRTtBQUNuQjtBQUVZO0FBQ1o7QUFFUjtBQUNkO0FBQ1A7QUFBQTtBQUFBO0FBVXJELFNBQVMyQyxTQUFTLENBQUU7RUFBRUMsU0FBUyxHQUFHO0FBQVUsQ0FBQyxFQUE2QjtFQUN4RSxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHN0Isb0dBQWMsRUFBRTtFQUM5QixNQUFNOEIsUUFBUSxHQUFHTiw4REFBVyxFQUFFO0VBQzlCLE1BQU1PLFdBQVcsR0FBR1gsaURBQVUsQ0FBQ3RCLDBGQUFXLENBQUM7RUFDM0MsTUFBTTtJQUFFa0M7RUFBTSxDQUFDLEdBQUdOLDREQUFRLEVBQVc7RUFDckMsTUFBTU8sUUFBUSxHQUFHViw4REFBVyxFQUFFO0VBQzlCLE1BQU1XLGdCQUFnQixHQUFHbkMscUdBQWUsRUFBRTtFQUMxQyxNQUFNLENBQUNvQyxJQUFJLENBQUMsR0FBRzFCLG9FQUFZLEVBQW1CO0VBQzlDLE1BQU07SUFBRTRCO0VBQXlCLENBQUMsR0FBR3BDLG9HQUFlLENBQUM7SUFDbkRxQyxLQUFLLEVBQUVULENBQUMsQ0FBUyxnQkFBZ0IsQ0FBQztJQUNsQ1UsWUFBWSxFQUFFLElBQUk7SUFDbEJDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLElBQUksRUFBRSxPQUFPO0lBQ2JDLFFBQVEsRUFBRWIsQ0FBQyxDQUFTLHNDQUFzQyxDQUFDO0lBQzNEYyxPQUFPLEVBQUVkLENBQUMsQ0FBUyw2QkFBNkIsQ0FBQztJQUNqRGUsTUFBTSxFQUFFZixDQUFDLENBQVMsUUFBUTtFQUM1QixDQUFDLENBQUM7RUFFRixNQUFNLENBQUNnQixTQUFT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QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsU0FBUyxzRUFBbUI7QUFDNUI7O0FBRUEsd0JBQXdCLGlEQUFVO0FBQ2xDLFNBQVMsMERBQW1CLENBQUMsNERBQVE7QUFDckM7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBLGlFQUFlLElBQUksRUFBQztBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1NldHRpbmdzL0NoYWlucy9DaGFpbkRldGFpbC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvcGhvc3Bob3ItcmVhY3QvZGlzdC9pY29ucy9GbG9wcHlEaXNrQmFjay5lc20uanMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvcGhvc3Bob3ItcmVhY3QvZGlzdC9pY29ucy9QbHVzLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX05ldHdvcmtVcHNlcnRQYXJhbXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgX2dldEJsb2NrRXhwbG9yZXJGcm9tQ2hhaW4sIF9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvLCBfZ2V0Q2hhaW5TdWJzdHJhdGVBZGRyZXNzUHJlZml4LCBfZ2V0Q3Jvd2Rsb2FuVXJsRnJvbUNoYWluLCBfZ2V0RXZtQ2hhaW5JZCwgX2dldFN1YnN0cmF0ZVBhcmFJZCwgX2lzQ2hhaW5Fdm1Db21wYXRpYmxlLCBfaXNDdXN0b21DaGFpbiwgX2lzUHVyZUV2bUNoYWluLCBfaXNTdWJzdHJhdGVDaGFpbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuaW1wb3J0IHsgTGF5b3V0LCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQcm92aWRlclNlbGVjdG9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ZpZWxkL1Byb3ZpZGVyU2VsZWN0b3InO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB1c2VOb3RpZmljYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlTm90aWZpY2F0aW9uJztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgdXNlQ29uZmlybU1vZGFsIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvbW9kYWwvdXNlQ29uZmlybU1vZGFsJztcbmltcG9ydCB1c2VGZXRjaENoYWluSW5mbyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3NjcmVlbi9jb21tb24vdXNlRmV0Y2hDaGFpbkluZm8nO1xuaW1wb3J0IHVzZUZldGNoQ2hhaW5TdGF0ZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3NjcmVlbi9jb21tb24vdXNlRmV0Y2hDaGFpblN0YXRlJztcbmltcG9ydCB7IHJlbW92ZUNoYWluLCB1cHNlcnRDaGFpbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblByb3BzLCBDb2wsIEZpZWxkLCBGb3JtLCBJY29uLCBJbnB1dCwgUm93IH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgeyBGbG9wcHlEaXNrQmFjaywgR2xvYmUsIFBsdXMsIFNoYXJlTmV0d29yaywgVHJhc2ggfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgeyBGaWVsZERhdGEsIFJ1bGVPYmplY3QgfSBmcm9tICdyYy1maWVsZC1mb3JtL2xpYi9pbnRlcmZhY2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHNcblxuaW50ZXJmYWNlIENoYWluRGV0YWlsRm9ybSB7XG4gIGN1cnJlbnRQcm92aWRlcjogc3RyaW5nLFxuICBibG9ja0V4cGxvcmVyOiBzdHJpbmcsXG4gIGNyb3dkbG9hblVybDogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgZGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBzaG93Tm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxDaGFpbkRldGFpbEZvcm0+KCk7XG4gIGNvbnN0IHsgaGFuZGxlU2ltcGxlQ29uZmlybU1vZGFsIH0gPSB1c2VDb25maXJtTW9kYWwoe1xuICAgIHRpdGxlOiB0PHN0cmluZz4oJ0RlbGV0ZSBuZXR3b3JrJyksXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgIHR5cGU6ICdlcnJvcicsXG4gICAgc3ViVGl0bGU6IHQ8c3RyaW5nPignWW91IGFyZSBhYm91dCB0byBkZWxldGUgdGhpcyBuZXR3b3JrJyksXG4gICAgY29udGVudDogdDxzdHJpbmc+KCdDb25maXJtIGRlbGV0ZSB0aGlzIG5ldHdvcmsnKSxcbiAgICBva1RleHQ6IHQ8c3RyaW5nPignUmVtb3ZlJylcbiAgfSk7XG5cbiAgY29uc3QgW2lzQ2hhbmdlZCwgc2V0SXNDaGFuZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVmFsdWVWYWxpZCwgc2V0SXNWYWx1ZVZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hhaW5TbHVnID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLnN0YXRlIGFzIHN0cmluZztcbiAgfSwgW2xvY2F0aW9uLnN0YXRlXSk7XG5cbiAgY29uc3QgX2NoYWluSW5mbyA9IHVzZUZldGNoQ2hhaW5JbmZvKGNoYWluU2x1Zyk7XG4gIGNvbnN0IF9jaGFpblN0YXRlID0gdXNlRmV0Y2hDaGFpblN0YXRlKGNoYWluU2x1Zyk7XG5cbiAgY29uc3QgW2NoYWluSW5mb10gPSB1c2VTdGF0ZShfY2hhaW5JbmZvKTtcbiAgY29uc3QgW2NoYWluU3RhdGVdID0gdXNlU3RhdGUoX2NoYWluU3RhdGUpO1xuXG4gIGNvbnN0IGlzUHVyZUV2bUNoYWluID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGNoYWluSW5mbyAmJiBfaXNQdXJlRXZtQ2hhaW4oY2hhaW5JbmZvKTtcbiAgfSwgW2NoYWluSW5mb10pO1xuXG4gIGNvbnN0IHsgZGVjaW1hbHMsIHN5bWJvbCB9ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIF9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvKGNoYWluSW5mbyk7XG4gIH0sIFtjaGFpbkluZm9dKTtcblxuICBjb25zdCBjdXJyZW50UHJvdmlkZXJVcmwgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gY2hhaW5JbmZvLnByb3ZpZGVyc1tjaGFpblN0YXRlLmN1cnJlbnRQcm92aWRlcl07XG4gIH0sIFtjaGFpbkluZm8ucHJvdmlkZXJzLCBjaGFpblN0YXRlLmN1cnJlbnRQcm92aWRlcl0pO1xuXG4gIGNvbnN0IHBhcmFJZCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBfZ2V0U3Vic3RyYXRlUGFyYUlkKGNoYWluSW5mbyk7XG4gIH0sIFtjaGFpbkluZm9dKTtcblxuICBjb25zdCBjaGFpbklkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIF9nZXRFdm1DaGFpbklkKGNoYWluSW5mbyk7XG4gIH0sIFtjaGFpbkluZm9dKTtcblxuICBjb25zdCBhZGRyZXNzUHJlZml4ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIF9nZXRDaGFpblN1YnN0cmF0ZUFkZHJlc3NQcmVmaXgoY2hhaW5JbmZvKTtcbiAgfSwgW2NoYWluSW5mb10pO1xuXG4gIGNvbnN0IG9uQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgtMSk7XG4gIH0sIFtuYXZpZ2F0ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUN1c3RvbUNoYWluID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGhhbmRsZVNpbXBsZUNvbmZpcm1Nb2RhbCgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XG4gICAgICAgIHJlbW92ZUNoYWluKGNoYWluSW5mby5zbHVnKVxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdEZWxldGVkIG5ldHdvcmsgc3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdFcnJvci4gUGxlYXNlIHRyeSBhZ2FpbicpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogdCgnRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4nKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9LCBbY2hhaW5JbmZvLnNsdWcsIGhhbmRsZVNpbXBsZUNvbmZpcm1Nb2RhbCwgbmF2aWdhdGUsIHNob3dOb3RpZmljYXRpb24sIHRdKTtcblxuICBjb25zdCBjaGFpblR5cGVTdHJpbmcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IHR5cGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKF9pc1N1YnN0cmF0ZUNoYWluKGNoYWluSW5mbykpIHtcbiAgICAgIHR5cGVzLnB1c2goJ1N1YnN0cmF0ZScpO1xuICAgIH1cblxuICAgIGlmIChfaXNDaGFpbkV2bUNvbXBhdGlibGUoY2hhaW5JbmZvKSkge1xuICAgICAgdHlwZXMucHVzaCgnRVZNJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0eXBlc1tpXSk7XG5cbiAgICAgIGlmIChpICE9PSB0eXBlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoJywgJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgW2NoYWluSW5mb10pO1xuXG4gIGNvbnN0IGZvcm1Jbml0VmFsdWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRQcm92aWRlcjogY2hhaW5TdGF0ZS5jdXJyZW50UHJvdmlkZXIsXG4gICAgICBibG9ja0V4cGxvcmVyOiBfZ2V0QmxvY2tFeHBsb3JlckZyb21DaGFpbihjaGFpbkluZm8pLFxuICAgICAgY3Jvd2Rsb2FuVXJsOiBfZ2V0Q3Jvd2Rsb2FuVXJsRnJvbUNoYWluKGNoYWluSW5mbylcbiAgICB9IGFzIENoYWluRGV0YWlsRm9ybTtcbiAgfSwgW2NoYWluSW5mbywgY2hhaW5TdGF0ZS5jdXJyZW50UHJvdmlkZXJdKTtcblxuICBjb25zdCBzdWJIZWFkZXJCdXR0b246IEJ1dHRvblByb3BzW10gPSBbXG4gICAge1xuICAgICAgaWNvbjogPEljb25cbiAgICAgICAgY3VzdG9tU2l6ZT17YCR7dG9rZW4uZm9udFNpemVIZWFkaW5nM31weGB9XG4gICAgICAgIHBob3NwaG9ySWNvbj17VHJhc2h9XG4gICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICB3ZWlnaHQ9eydsaWdodCd9XG4gICAgICAvPixcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZURlbGV0ZUN1c3RvbUNoYWluLFxuICAgICAgZGlzYWJsZWQ6ICEoX2lzQ3VzdG9tQ2hhaW4oY2hhaW5JbmZvLnNsdWcpICYmICFjaGFpblN0YXRlLmFjdGl2ZSlcbiAgICB9XG4gIF07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tQcm92aWRlclN1ZmZpeCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgnL3NldHRpbmdzL2NoYWlucy9hZGQtcHJvdmlkZXInLCB7IHN0YXRlOiBjaGFpbkluZm8uc2x1ZyB9KTtcbiAgfSwgW2NoYWluSW5mby5zbHVnLCBuYXZpZ2F0ZV0pO1xuXG4gIGNvbnN0IGlzU3VibWl0RGlzYWJsZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuICFpc0NoYW5nZWQgfHwgIWlzVmFsdWVWYWxpZCB8fCBpc0RlbGV0aW5nO1xuICB9LCBbaXNDaGFuZ2VkLCBpc0RlbGV0aW5nLCBpc1ZhbHVlVmFsaWRdKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgYmxvY2tFeHBsb3JlciA9IGZvcm0uZ2V0RmllbGRWYWx1ZSgnYmxvY2tFeHBsb3JlcicpIGFzIHN0cmluZztcbiAgICBjb25zdCBjcm93ZGxvYW5VcmwgPSBmb3JtLmdldEZpZWxkVmFsdWUoJ2Nyb3dkbG9hblVybCcpIGFzIHN0cmluZztcbiAgICBjb25zdCBjdXJyZW50UHJvdmlkZXIgPSBmb3JtLmdldEZpZWxkVmFsdWUoJ2N1cnJlbnRQcm92aWRlcicpIGFzIHN0cmluZztcblxuICAgIGNvbnN0IHBhcmFtczogX05ldHdvcmtVcHNlcnRQYXJhbXMgPSB7XG4gICAgICBtb2RlOiAndXBkYXRlJyxcbiAgICAgIGNoYWluRWRpdEluZm86IHtcbiAgICAgICAgc2x1ZzogY2hhaW5JbmZvLnNsdWcsXG4gICAgICAgIGN1cnJlbnRQcm92aWRlcjogY3VycmVudFByb3ZpZGVyLFxuICAgICAgICBwcm92aWRlcnM6IGNoYWluSW5mby5wcm92aWRlcnMsXG4gICAgICAgIGJsb2NrRXhwbG9yZXIsXG4gICAgICAgIGNyb3dkbG9hblVybFxuICAgICAgfVxuICAgIH07XG5cbiAgICB1cHNlcnRDaGFpbihwYXJhbXMpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ1VwZGF0ZWQgbmV0d29yayBzdWNjZXNzZnVsbHknKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5hdmlnYXRlKC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0FuIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgdHJ5IGFnYWluJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICBtZXNzYWdlOiB0KCdBbiBlcnJvciBvY2N1cnJlZCwgcGxlYXNlIHRyeSBhZ2FpbicpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0sIFtjaGFpbkluZm8ucHJvdmlkZXJzLCBjaGFpbkluZm8uc2x1ZywgZm9ybSwgbmF2aWdhdGUsIHNob3dOb3RpZmljYXRpb24sIHRdKTtcblxuICBjb25zdCBwcm92aWRlckZpZWxkU3VmZml4ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17J2NoYWluX2RldGFpbF9fcHJvdmlkZXJfc3VmZml4X2J0bid9XG4gICAgICAgIGljb249ezxJY29uXG4gICAgICAgICAgY3VzdG9tU2l6ZT17JzIwcHgnfVxuICAgICAgICAgIHBob3NwaG9ySWNvbj17UGx1c31cbiAgICAgICAgICB0eXBlPXsncGhvc3Bob3InfVxuICAgICAgICAgIHdlaWdodD17J2JvbGQnfVxuICAgICAgICAvPn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tQcm92aWRlclN1ZmZpeH1cbiAgICAgICAgc2l6ZT17J3hzJ31cbiAgICAgICAgdHlwZT17J2dob3N0J31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW2hhbmRsZUNsaWNrUHJvdmlkZXJTdWZmaXhdKTtcblxuICBjb25zdCBvbkZvcm1WYWx1ZXNDaGFuZ2UgPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRmllbGREYXRhW10sIGFsbEZpZWxkczogRmllbGREYXRhW10pID0+IHtcbiAgICBsZXQgaXNGaWVsZHNWYWxpZCA9IHRydWU7XG5cbiAgICBmb3IgKGNvbnN0IGNoYW5nZWRGaWVsZCBvZiBhbGxGaWVsZHMpIHtcbiAgICAgIGlmIChjaGFuZ2VkRmllbGQuZXJyb3JzICYmIGNoYW5nZWRGaWVsZC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpc0ZpZWxkc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SXNDaGFuZ2VkKHRydWUpO1xuICAgIHNldElzVmFsdWVWYWxpZChpc0ZpZWxkc1ZhbGlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNyb3dkbG9hblVybFZhbGlkYXRvciA9IHVzZUNhbGxiYWNrKChydWxlOiBSdWxlT2JqZWN0LCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgaXNVcmwodmFsdWUpKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IodCgnQ3Jvd2Rsb2FuIFVSTCBtdXN0IGJlIGEgdmFsaWQgVVJMJykpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3RdKTtcblxuICBjb25zdCBibG9ja0V4cGxvcmVyVmFsaWRhdG9yID0gdXNlQ2FsbGJhY2soKHJ1bGU6IFJ1bGVPYmplY3QsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBpc1VybCh2YWx1ZSkpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih0KCdCbG9jayBleHBsb3JlciBtdXN0IGJlIGEgdmFsaWQgVVJMJykpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtgY2hhaW5fZGV0YWlsICR7Y2xhc3NOYW1lfWB9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ2NoYWluU3RvcmUnXSl9XG4gICAgPlxuICAgICAgPExheW91dC5CYXNlXG4gICAgICAgIG9uQmFjaz17b25CYWNrfVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGJsb2NrOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVkOiBpc1N1Ym1pdERpc2FibGVkKCksXG4gICAgICAgICAgaWNvbjogKFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtGbG9wcHlEaXNrQmFja31cbiAgICAgICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApLFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgb25DbGljazogb25TdWJtaXQsXG4gICAgICAgICAgY2hpbGRyZW46IHQoJ1NhdmUnKVxuICAgICAgICB9fVxuICAgICAgICBzaG93QmFja0J1dHRvbj17dHJ1ZX1cbiAgICAgICAgc2hvd1N1YkhlYWRlcj17dHJ1ZX1cbiAgICAgICAgc3ViSGVhZGVyQmFja2dyb3VuZD17J3RyYW5zcGFyZW50J31cbiAgICAgICAgc3ViSGVhZGVyQ2VudGVyPXt0cnVlfVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17c3ViSGVhZGVyQnV0dG9ufVxuICAgICAgICBzdWJIZWFkZXJQYWRkaW5nVmVydGljYWw9e3RydWV9XG4gICAgICAgIHRpdGxlPXt0PHN0cmluZz4oJ05ldHdvcmsgZGV0YWlsJyl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2hhaW5fZGV0YWlsX19jb250YWluZXInfT5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGVsZXRpbmd9XG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Zm9ybUluaXRWYWx1ZXN9XG4gICAgICAgICAgICBvbkZpZWxkc0NoYW5nZT17b25Gb3JtVmFsdWVzQ2hhbmdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2hhaW5fZGV0YWlsX19hdHRyaWJ1dGVzX2NvbnRhaW5lcid9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY2hhaW5JbmZvLnByb3ZpZGVycykubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgPyA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydjdXJyZW50UHJvdmlkZXInfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXJTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgIGNoYWluSW5mbz17Y2hhaW5JbmZvfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0RlbGV0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFpblN0YXRlLmN1cnJlbnRQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgOiA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnY2hhaW5fZGV0YWlsX19wcm92aWRlcl91cmwnfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtjdXJyZW50UHJvdmlkZXJVcmx9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdQcm92aWRlciBVUkwnKX1cbiAgICAgICAgICAgICAgICAgICAgcHJlZml4PXs8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVNpemU9eycyNHB4J31cbiAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e3Rva2VuWydncmF5LTQnXX1cbiAgICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e1NoYXJlTmV0d29ya31cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncGhvc3Bob3InfVxuICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD17J2JvbGQnfVxuICAgICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICAgICAgc3VmZml4PXtwcm92aWRlckZpZWxkU3VmZml4KCl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e3Rva2VuLnBhZGRpbmdTTX0+XG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxNn0+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y2hhaW5JbmZvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdOZXR3b3JrIG5hbWUnKX1cbiAgICAgICAgICAgICAgICAgICAgcHJlZml4PXs8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVNpemU9eycyNHB4J31cbiAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e3Rva2VuWydncmF5LTQnXX1cbiAgICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e0dsb2JlfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwaG9zcGhvcid9XG4gICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PXsnYm9sZCd9XG4gICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdOZXR3b3JrIG5hbWUnKX1cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezh9PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3N5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1N5bWJvbCcpfVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdTeW1ib2wnKX1cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e3Rva2VuLnBhZGRpbmdTTX0+XG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZGVjaW1hbHN9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdEZWNpbWFscycpfVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdEZWNpbWFscycpfVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50PXsndG9wTGVmdCd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhaXNQdXJlRXZtQ2hhaW5cbiAgICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwYXJhSWQgPiAtMSA/IHBhcmFJZCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1BhcmFJZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdQYXJhSWQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y2hhaW5JZCA+IC0xID8gY2hhaW5JZCA6ICdOb25lJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ0NoYWluIElEJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ0NoYWluIElEJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBQbGFjZW1lbnQ9eyd0b3BMZWZ0J31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17dG9rZW4ucGFkZGluZ1NNfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAhaXNQdXJlRXZtQ2hhaW4gJiZcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXthZGRyZXNzUHJlZml4LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ0FkZHJlc3MgcHJlZml4Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnQWRkcmVzcyBwcmVmaXgnKX1cbiAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50PXsndG9wTGVmdCd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49eyFpc1B1cmVFdm1DaGFpbiA/IDEyIDogMjR9PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2NoYWluVHlwZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnTmV0d29yayB0eXBlJyl9XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ05ldHdvcmsgdHlwZScpfVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50PXsndG9wTGVmdCd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgbmFtZT17J2Jsb2NrRXhwbG9yZXInfVxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyB2YWxpZGF0b3I6IGJsb2NrRXhwbG9yZXJWYWxpZGF0b3IgfV19XG4gICAgICAgICAgICAgICAgc3RhdHVzSGVscEFzVG9vbHRpcD17dHJ1ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ0Jsb2NrIGV4cGxvcmVyJyl9XG4gICAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdCbG9jayBleHBsb3JlcicpfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhX2lzUHVyZUV2bUNoYWluKGNoYWluSW5mbykgJiYgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgbmFtZT17J2Nyb3dkbG9hblVybCd9XG4gICAgICAgICAgICAgICAgICBydWxlcz17W3sgdmFsaWRhdG9yOiBjcm93ZGxvYW5VcmxWYWxpZGF0b3IgfV19XG4gICAgICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnQ3Jvd2Rsb2FuIFVSTCcpfVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdDcm93ZGxvYW4gVVJMJyl9XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBQbGFjZW1lbnQ9eyd0b3BMZWZ0J31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5CYXNlPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59XG5cbmNvbnN0IENoYWluRGV0YWlsID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgJy5jaGFpbl9kZXRhaWxfX2NvbnRhaW5lcic6IHtcbiAgICAgIG1hcmdpblRvcDogMjIsXG4gICAgICBtYXJnaW5SaWdodDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luTGVmdDogdG9rZW4ubWFyZ2luXG4gICAgfSxcblxuICAgICcuY2hhaW5fZGV0YWlsX19hdHRyaWJ1dGVzX2NvbnRhaW5lcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0b2tlbi5tYXJnaW5TTVxuICAgIH0sXG5cbiAgICAnLmNoYWluX2RldGFpbF9fcHJvdmlkZXJfc3VmZml4X2J0bic6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfSxcblxuICAgICcuYW50LWJ0bi4tc2l6ZS14cy4taWNvbi1vbmx5Jzoge1xuICAgICAgbWluV2lkdGg6IDBcbiAgICB9LFxuXG4gICAgJy5hbnQtZm9ybS1pdGVtJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgfSxcblxuICAgICcuYW50LWZpZWxkLWNvbnRhaW5lciAuYW50LWZpZWxkLXdyYXBwZXIgLmFudC1maWVsZC1jb250ZW50LXdyYXBwZXIgLmFudC1maWVsZC1jb250ZW50Jzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0NVxuICAgIH0sXG5cbiAgICAnLmNoYWluX2RldGFpbF9fcHJvdmlkZXJfdXJsIC5hbnQtZmllbGQtd3JhcHBlciAuYW50LWZpZWxkLWNvbnRlbnQtd3JhcHBlciAuYW50LWZpZWxkLWNvbnRlbnQnOiB7XG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxXG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFpbkRldGFpbDtcbiIsImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyUGF0aEZvcldlaWdodCB9IGZyb20gJy4uL2xpYi9pbmRleC5lc20uanMnO1xuaW1wb3J0IEljb25CYXNlIGZyb20gJy4uL2xpYi9JY29uQmFzZS5lc20uanMnO1xuXG4vKiBHRU5FUkFURUQgRklMRSAqL1xudmFyIHBhdGhzQnlXZWlnaHQgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xucGF0aHNCeVdlaWdodC5zZXQoXCJib2xkXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQwLDkxLjNWMjA4YTgsOCwwLDAsMCw4LDhIMjA4YTgsOCwwLDAsMCw4LThWNDhhOCw4LDAsMCwwLTgtOEg5MS4zYTcuOSw3LjksMCwwLDAtNS42LDIuM0w0Mi4zLDg1LjdBNy45LDcuOSwwLDAsMCw0MCw5MS4zWlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTQ4XCIsXG4gICAgcjogXCIyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTA0IDgwIDE2MCA4MCAxNjAgNDBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImR1b3RvbmVcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjA4LDQwSDkxLjNhNy45LDcuOSwwLDAsMC01LjYsMi4zTDQyLjMsODUuN0E3LjksNy45LDAsMCwwLDQwLDkxLjNWMjA4YTgsOCwwLDAsMCw4LDhIMjA4YTgsOCwwLDAsMCw4LThWNDhBOCw4LDAsMCwwLDIwOCw0MFpNMTI4LDE3NmEyOCwyOCwwLDEsMSwyOC0yOEEyOCwyOCwwLDAsMSwxMjgsMTc2WlwiLFxuICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MCw5MS4zVjIwOGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjQ4YTgsOCwwLDAsMC04LThIOTEuM2E3LjksNy45LDAsMCwwLTUuNiwyLjNMNDIuMyw4NS43QTcuOSw3LjksMCwwLDAsNDAsOTEuM1pcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjE0OFwiLFxuICAgIHI6IFwiMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjk2IDgwIDE2MCA4MCAxNjAgNDBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIwOCwzMkgxNzJhNCw0LDAsMCwwLTQsNFY4MGE4LDgsMCwwLDEtOCw4SDk2LjNBOC4yLDguMiwwLDAsMSw4OCw4MC41LDgsOCwwLDAsMSw5Niw3Mmg1NlYzNmE0LDQsMCwwLDAtNC00SDkxLjNBMTUuOSwxNS45LDAsMCwwLDgwLDM2LjdMMzYuNyw4MEExNS45LDE1LjksMCwwLDAsMzIsOTEuM1YyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNMTI4LDE3NmEyOCwyOCwwLDEsMSwyOC0yOEEyOC4xLDI4LjEsMCwwLDEsMTI4LDE3NlpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDAsOTEuM1YyMDhhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY0OGE4LDgsMCwwLDAtOC04SDkxLjNhNy45LDcuOSwwLDAsMC01LjYsMi4zTDQyLjMsODUuN0E3LjksNy45LDAsMCwwLDQwLDkxLjNaXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxNDhcIixcbiAgICByOiBcIjI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI5NiA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQwLDkxLjNWMjA4YTgsOCwwLDAsMCw4LDhIMjA4YTgsOCwwLDAsMCw4LThWNDhhOCw4LDAsMCwwLTgtOEg5MS4zYTcuOSw3LjksMCwwLDAtNS42LDIuM0w0Mi4zLDg1LjdBNy45LDcuOSwwLDAsMCw0MCw5MS4zWlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxNDhcIixcbiAgICByOiBcIjI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjk2IDgwIDE2MCA4MCAxNjAgNDBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwicmVndWxhclwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MCw5MS4zVjIwOGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjQ4YTgsOCwwLDAsMC04LThIOTEuM2E3LjksNy45LDAsMCwwLTUuNiwyLjNMNDIuMyw4NS43QTcuOSw3LjksMCwwLDAsNDAsOTEuM1pcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjE0OFwiLFxuICAgIHI6IFwiMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjk2IDgwIDE2MCA4MCAxNjAgNDBcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5cbnZhciByZW5kZXJQYXRoID0gZnVuY3Rpb24gcmVuZGVyUGF0aCh3ZWlnaHQsIGNvbG9yKSB7XG4gIHJldHVybiByZW5kZXJQYXRoRm9yV2VpZ2h0KHdlaWdodCwgY29sb3IsIHBhdGhzQnlXZWlnaHQpO1xufTtcblxudmFyIEZsb3BweURpc2tCYWNrID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgcmVuZGVyUGF0aDogcmVuZGVyUGF0aFxuICB9KSk7XG59KTtcbkZsb3BweURpc2tCYWNrLmRpc3BsYXlOYW1lID0gXCJGbG9wcHlEaXNrQmFja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBGbG9wcHlEaXNrQmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb3BweURpc2tCYWNrLmVzbS5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyUGF0aEZvcldlaWdodCB9IGZyb20gJy4uL2xpYi9pbmRleC5lc20uanMnO1xuaW1wb3J0IEljb25CYXNlIGZyb20gJy4uL2xpYi9JY29uQmFzZS5lc20uanMnO1xuXG4vKiBHRU5FUkFURUQgRklMRSAqL1xudmFyIHBhdGhzQnlXZWlnaHQgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xucGF0aHNCeVdlaWdodC5zZXQoXCJib2xkXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImR1b3RvbmVcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiNDBcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIyMTZcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjIxNlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZmlsbFwiLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjE2LDEyMEgxMzZWNDBhOCw4LDAsMCwwLTE2LDB2ODBINDBhOCw4LDAsMCwwLDAsMTZoODB2ODBhOCw4LDAsMCwwLDE2LDBWMTM2aDgwYTgsOCwwLDAsMCwwLTE2WlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMjE2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjIxNlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJyZWd1bGFyXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5cbnZhciByZW5kZXJQYXRoID0gZnVuY3Rpb24gcmVuZGVyUGF0aCh3ZWlnaHQsIGNvbG9yKSB7XG4gIHJldHVybiByZW5kZXJQYXRoRm9yV2VpZ2h0KHdlaWdodCwgY29sb3IsIHBhdGhzQnlXZWlnaHQpO1xufTtcblxudmFyIFBsdXMgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuUGx1cy5kaXNwbGF5TmFtZSA9IFwiUGx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBQbHVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGx1cy5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiX2dldEJsb2NrRXhwbG9yZXJGcm9tQ2hhaW4iLCJfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbyIsIl9nZXRDaGFpblN1YnN0cmF0ZUFkZHJlc3NQcmVmaXgiLCJfZ2V0Q3Jvd2Rsb2FuVXJsRnJvbUNoYWluIiwiX2dldEV2bUNoYWluSWQiLCJfZ2V0U3Vic3RyYXRlUGFyYUlkIiwiX2lzQ2hhaW5Fdm1Db21wYXRpYmxlIiwiX2lzQ3VzdG9tQ2hhaW4iLCJfaXNQdXJlRXZtQ2hhaW4iLCJfaXNTdWJzdHJhdGVDaGFpbiIsImlzVXJsIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJQcm92aWRlclNlbGVjdG9yIiwiRGF0YUNvbnRleHQiLCJ1c2VOb3RpZmljYXRpb24iLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpcm1Nb2RhbCIsInVzZUZldGNoQ2hhaW5JbmZvIiwidXNlRmV0Y2hDaGFpblN0YXRlIiwicmVtb3ZlQ2hhaW4iLCJ1cHNlcnRDaGFpbiIsIkJ1dHRvbiIsIkNvbCIsIkZpZWxkIiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIlJvdyIsIkZsb3BweURpc2tCYWNrIiwiR2xvYmUiLCJQbHVzIiwiU2hhcmVOZXR3b3JrIiwiVHJhc2giLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUxvY2F0aW9uIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJuYXZpZ2F0ZSIsImRhdGFDb250ZXh0IiwidG9rZW4iLCJsb2NhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJmb3JtIiwidXNlRm9ybSIsImhhbmRsZVNpbXBsZUNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibWFza0Nsb3NhYmxlIiwiY2xvc2FibGUiLCJ0eXBlIiwic3ViVGl0bGUiLCJjb250ZW50Iiwib2tUZXh0IiwiaXNDaGFuZ2VkIiwic2V0SXNDaGFuZ2VkIiwiaXNWYWx1ZVZhbGlkIiwic2V0SXNWYWx1ZVZhbGlkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsImNoYWluU2x1ZyIsInN0YXRlIiwiX2NoYWluSW5mbyIsIl9jaGFpblN0YXRlIiwiY2hhaW5JbmZvIiwiY2hhaW5TdGF0ZSIsImlzUHVyZUV2bUNoYWluIiwiZGVjaW1hbHMiLCJzeW1ib2wiLCJjdXJyZW50UHJvdmlkZXJVcmwiLCJwcm92aWRlcnMiLCJjdXJyZW50UHJvdmlkZXIiLCJwYXJhSWQiLCJjaGFpbklkIiwiYWRkcmVzc1ByZWZpeCIsIm9uQmFjayIsImhhbmRsZURlbGV0ZUN1c3RvbUNoYWluIiwidGhlbiIsInNsdWciLCJyZXN1bHQiLCJtZXNzYWdlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiY2hhaW5UeXBlU3RyaW5nIiwidHlwZXMiLCJwdXNoIiwiaSIsImxlbmd0aCIsImNvbmNhdCIsImZvcm1Jbml0VmFsdWVzIiwiYmxvY2tFeHBsb3JlciIsImNyb3dkbG9hblVybCIsInN1YkhlYWRlckJ1dHRvbiIsImljb24iLCJmb250U2l6ZUhlYWRpbmczIiwib25DbGljayIsImRpc2FibGVkIiwiYWN0aXZlIiwiaGFuZGxlQ2xpY2tQcm92aWRlclN1ZmZpeCIsImlzU3VibWl0RGlzYWJsZWQiLCJvblN1Ym1pdCIsImdldEZpZWxkVmFsdWUiLCJwYXJhbXMiLCJtb2RlIiwiY2hhaW5FZGl0SW5mbyIsInByb3ZpZGVyRmllbGRTdWZmaXgiLCJvbkZvcm1WYWx1ZXNDaGFuZ2UiLCJjaGFuZ2VkRmllbGRzIiwiYWxsRmllbGRzIiwiaXNGaWVsZHNWYWxpZCIsImNoYW5nZWRGaWVsZCIsImVycm9ycyIsImNyb3dkbG9hblVybFZhbGlkYXRvciIsInJ1bGUiLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJibG9ja0V4cGxvcmVyVmFsaWRhdG9yIiwiYXdhaXRTdG9yZXMiLCJibG9jayIsImNoaWxkcmVuIiwiT2JqZWN0Iiwia2V5cyIsInBhZGRpbmdTTSIsIm5hbWUiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsInZhbGlkYXRvciIsIkNoYWluRGV0YWlsIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1hcmdpblNNIiwiaGVpZ2h0IiwibWluV2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImNvbG9yVGV4dExpZ2h0NSIsImNvbG9yVGV4dExpZ2h0MSJdLCJzb3VyY2VSb290IjoiIn0=