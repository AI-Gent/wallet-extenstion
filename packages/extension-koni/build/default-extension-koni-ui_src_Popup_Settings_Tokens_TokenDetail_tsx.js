"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_Tokens_TokenDetail_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Tokens/TokenDetail.tsx":
/*!**********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Tokens/TokenDetail.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_modal_useConfirmModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/modal/useConfirmModal */ "../extension-koni-ui/src/hooks/modal/useConfirmModal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useFetchChainInfo */ "../extension-koni-ui/src/hooks/screen/common/useFetchChainInfo.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useGetChainAssetInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useGetChainAssetInfo */ "../extension-koni-ui/src/hooks/screen/common/useGetChainAssetInfo.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/logo/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/field/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/row/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/col/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/tooltip/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui_es_sw_avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui/es/sw-avatar */ "../../node_modules/@subwallet/react-ui/es/sw-avatar/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Trash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Copy.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




















function Component({
  className = ''
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.useTheme)();
  const goBack = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_5__["default"])().goBack;
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useLocation)();
  const showNotification = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const tokenSlug = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return location.state;
  }, [location.state]);
  const tokenInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useGetChainAssetInfo__WEBPACK_IMPORTED_MODULE_7__["default"])(tokenSlug);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    if (!tokenInfo) {
      goBack();
    }
  }, [goBack, tokenInfo]);
  const originChainInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_6__["default"])(tokenInfo.originChain);
  const [priceId, setPriceId] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(tokenInfo.priceId || '');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const {
    handleSimpleConfirmModal
  } = (0,_subwallet_extension_koni_ui_hooks_modal_useConfirmModal__WEBPACK_IMPORTED_MODULE_4__["default"])({
    title: t('Delete token'),
    maskClosable: true,
    closable: true,
    type: 'error',
    subTitle: t('You are about to delete this token'),
    content: t('Confirm delete this token'),
    okText: t('Remove')
  });
  const handleDeleteToken = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    handleSimpleConfirmModal().then(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__.deleteCustomAssets)(tokenInfo.slug).then(result => {
        if (result) {
          goBack();
          showNotification({
            message: t('Deleted token successfully')
          });
        } else {
          showNotification({
            message: t('Deleted token unsuccessfully')
          });
        }
      }).catch(() => {
        showNotification({
          message: t('Deleted token unsuccessfully')
        });
      });
    }).catch(console.log);
  }, [goBack, handleSimpleConfirmModal, showNotification, t, tokenInfo.slug]);
  const subHeaderButton = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return [{
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
        customSize: `${token.fontSizeHeading3}px`,
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_14__["default"],
        type: "phosphor",
        weight: 'light'
      }),
      onClick: handleDeleteToken,
      disabled: !((0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._isCustomAsset)(tokenInfo.slug) && (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._isSmartContractToken)(tokenInfo))
    }];
  }, [handleDeleteToken, token.fontSizeHeading3, tokenInfo]);
  const contractAddressIcon = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    const contractAddress = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._getContractAddressOfToken)(tokenInfo);
    const theme = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_16__.isEthereumAddress)(contractAddress) ? 'ethereum' : 'polkadot';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui_es_sw_avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
      identPrefix: 42,
      size: token.fontSizeXL,
      theme: theme,
      value: contractAddress
    });
  }, [token.fontSizeXL, tokenInfo]);
  const contractAddressInfo = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    const contractAddress = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._getContractAddressOfToken)(tokenInfo);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
      children: `${contractAddress.slice(0, 10)}...${contractAddress.slice(-10)}`
    });
  }, [tokenInfo]);
  const handleCopyContractAddress = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    const contractAddress = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._getContractAddressOfToken)(tokenInfo);
    navigator.clipboard.writeText(contractAddress).then().catch(console.error);
    showNotification({
      message: t('Copied to clipboard')
    });
  }, [showNotification, t, tokenInfo]);
  const contractAddressSuffix = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
        customSize: '20px',
        iconColor: token.colorIcon,
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
        type: "phosphor",
        weight: 'light'
      }),
      onClick: handleCopyContractAddress,
      size: 'xs',
      type: 'ghost'
    });
  }, [handleCopyContractAddress, token.colorIcon]);
  const onChangePriceId = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(e => {
    setPriceId(e.currentTarget.value);
  }, []);
  const isSubmitDisabled = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    return tokenInfo.priceId === priceId || priceId.length === 0;
  }, [priceId, tokenInfo.priceId]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    setLoading(true);
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_8__.upsertCustomToken)({
      ...tokenInfo,
      priceId
    }).then(result => {
      if (result) {
        setLoading(false);
        goBack();
      } else {
        setLoading(false);
        showNotification({
          message: t('Error')
        });
      }
    }).catch(() => {
      setLoading(false);
      showNotification({
        message: t('Error')
      });
    });
  }, [goBack, priceId, showNotification, t, tokenInfo]);
  const leftFooterButtonProps = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    return (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._isCustomAsset)(tokenInfo.slug) ? {
      onClick: goBack,
      children: t('Cancel')
    } : undefined;
  }, [goBack, tokenInfo.slug, t]);
  const rightFooterButtonProps = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    return (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._isCustomAsset)(tokenInfo.slug) ? {
      block: true,
      disabled: isSubmitDisabled(),
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
        weight: "fill"
      }),
      loading,
      onClick: onSubmit,
      children: t('Save')
    } : undefined;
  }, [isSubmitDisabled, loading, onSubmit, t, tokenInfo.slug]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `token_detail ${className}`,
    resolve: dataContext.awaitStores(['assetRegistry']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      leftFooterButton: leftFooterButtonProps(),
      onBack: goBack,
      rightFooterButton: rightFooterButtonProps(),
      showBackButton: true,
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: true,
      subHeaderIcons: subHeaderButton,
      subHeaderPaddingVertical: true,
      title: t('Token detail'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: 'token_detail__container',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: 'token_detail__header_container',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: 'token_detail__header_icon_wrapper',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              size: 112,
              token: tokenInfo.slug.toLowerCase()
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: 'token_detail__header_text_container',
            children: tokenInfo.symbol
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: 'token_detail__content_container',
          children: [(0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._isSmartContractToken)(tokenInfo) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
            content: contractAddressInfo(),
            label: t('Contract address'),
            placeholder: t('Contract address'),
            prefix: contractAddressIcon(),
            suffix: contractAddressSuffix()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
            content: originChainInfo.name,
            label: t('Network'),
            placeholder: t('Network'),
            prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              network: originChainInfo.slug,
              size: 20
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
            gutter: token.marginSM,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
              span: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
                placement: 'topLeft',
                title: t('Symbol'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
                    content: tokenInfo.symbol,
                    placeholder: t('Symbol'),
                    prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                      size: 20,
                      token: tokenInfo.slug.toLowerCase()
                    })
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
              span: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
                placement: 'topLeft',
                title: t('Decimals'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
                    content: tokenInfo.decimals,
                    placeholder: t('Decimals')
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
            placement: 'topLeft',
            title: t('Price ID'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
                disabled: !(0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_15__._isCustomAsset)(tokenInfo.slug),
                onChange: onChangePriceId,
                placeholder: t('Price ID'),
                value: priceId
              })
            })
          })]
        })]
      })
    })
  });
}
const TokenDetail = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(Component).withConfig({
  displayName: "TokenDetail",
  componentId: "sc-1268x1i-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.token_detail__container': {
      marginLeft: token.margin,
      marginRight: token.margin
    },
    '.token_detail__header_container': {
      marginTop: 30,
      display: 'flex',
      flexWrap: 'wrap',
      gap: token.padding,
      flexDirection: 'column',
      alignContent: 'center',
      marginBottom: token.marginLG
    },
    '.token_detail__header_text_container': {
      fontWeight: token.headingFontWeight,
      textAlign: 'center',
      fontSize: token.fontSizeHeading3,
      color: token.colorText
    },
    '.token_detail__header_icon_wrapper': {
      display: 'flex',
      justifyContent: 'center'
    },
    '.token_detail__content_container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.marginSM
    },
    '.ant-field-wrapper .ant-btn': {
      margin: -token.marginXS,
      height: 'auto'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenDetail);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfVG9rZW5zX1Rva2VuRGV0YWlsX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRzJJO0FBQzdEO0FBQ0U7QUFDUTtBQUNGO0FBQ0M7QUFDTztBQUNLO0FBQ007QUFDVjtBQUVRO0FBQy9DO0FBQ0U7QUFDMkI7QUFDdEM7QUFDTTtBQUVLO0FBQUE7QUFBQTtBQUkxRCxTQUFTb0MsU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEUsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBRy9CLG9HQUFjLEVBQUU7RUFDOUIsTUFBTWdDLFdBQVcsR0FBR1gsaURBQVUsQ0FBQ3ZCLDBGQUFXLENBQUM7RUFDM0MsTUFBTTtJQUFFbUM7RUFBTSxDQUFDLEdBQUdOLDREQUFRLEVBQVc7RUFDckMsTUFBTU8sTUFBTSxHQUFHaEMsd0dBQWtCLEVBQUUsQ0FBQ2dDLE1BQU07RUFDMUMsTUFBTUMsUUFBUSxHQUFHViw4REFBVyxFQUFFO0VBQzlCLE1BQU1XLGdCQUFnQixHQUFHckMscUdBQWUsRUFBRTtFQUUxQyxNQUFNc0MsU0FBUyxHQUFHZCw4Q0FBTyxDQUFDLE1BQU07SUFDOUIsT0FBT1ksUUFBUSxDQUFDRyxLQUFLO0VBQ3ZCLENBQUMsRUFBRSxDQUFDSCxRQUFRLENBQUNHLEtBQUssQ0FBQyxDQUFDO0VBQ3BCLE1BQU1DLFNBQVMsR0FBR25DLGlIQUFvQixDQUFDaUMsU0FBUyxDQUFnQjtFQUVoRWYsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSSxDQUFDaUIsU0FBUyxFQUFFO01BQ2RMLE1BQU0sRUFBRTtJQUNWO0VBQ0YsQ0FBQyxFQUFFLENBQUNBLE1BQU0sRUFBRUssU0FBUyxDQUFDLENBQUM7RUFFdkIsTUFBTUMsZUFBZSxHQUFHckMsOEdBQWlCLENBQUNvQyxTQUFTLENBQUNF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RUFBRTtNQUM3QkksTUFBTSxFQUFFLENBQUNuRSxLQUFLLENBQUNxRixRQUFRO01BQ3ZCQyxNQUFNLEVBQUU7SUFDVjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZXJCLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9TZXR0aW5ncy9Ub2tlbnMvVG9rZW5EZXRhaWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQ2hhaW5Bc3NldCB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBfZ2V0Q29udHJhY3RBZGRyZXNzT2ZUb2tlbiwgX2lzQ3VzdG9tQXNzZXQsIF9pc1NtYXJ0Q29udHJhY3RUb2tlbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgdXNlTm90aWZpY2F0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZU5vdGlmaWNhdGlvbic7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZUNvbmZpcm1Nb2RhbCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL21vZGFsL3VzZUNvbmZpcm1Nb2RhbCc7XG5pbXBvcnQgdXNlRGVmYXVsdE5hdmlnYXRlIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZURlZmF1bHROYXZpZ2F0ZSc7XG5pbXBvcnQgdXNlRmV0Y2hDaGFpbkluZm8gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9zY3JlZW4vY29tbW9uL3VzZUZldGNoQ2hhaW5JbmZvJztcbmltcG9ydCB1c2VHZXRDaGFpbkFzc2V0SW5mbyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3NjcmVlbi9jb21tb24vdXNlR2V0Q2hhaW5Bc3NldEluZm8nO1xuaW1wb3J0IHsgZGVsZXRlQ3VzdG9tQXNzZXRzLCB1cHNlcnRDdXN0b21Ub2tlbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblByb3BzLCBDb2wsIEZpZWxkLCBJY29uLCBJbnB1dCwgTG9nbywgUm93LCBUb29sdGlwIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgU3dBdmF0YXIgZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aS9lcy9zdy1hdmF0YXInO1xuaW1wb3J0IHsgQ2hlY2tDaXJjbGUsIENvcHksIFRyYXNoIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGlzRXRoZXJldW1BZGRyZXNzIH0gZnJvbSAnQHBvbGthZG90L3V0aWwtY3J5cHRvJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHNcblxuZnVuY3Rpb24gQ29tcG9uZW50ICh7IGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgZGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcbiAgY29uc3QgZ29CYWNrID0gdXNlRGVmYXVsdE5hdmlnYXRlKCkuZ29CYWNrO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHNob3dOb3RpZmljYXRpb24gPSB1c2VOb3RpZmljYXRpb24oKTtcblxuICBjb25zdCB0b2tlblNsdWcgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gbG9jYXRpb24uc3RhdGUgYXMgc3RyaW5nO1xuICB9LCBbbG9jYXRpb24uc3RhdGVdKTtcbiAgY29uc3QgdG9rZW5JbmZvID0gdXNlR2V0Q2hhaW5Bc3NldEluZm8odG9rZW5TbHVnKSBhcyBfQ2hhaW5Bc3NldDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdG9rZW5JbmZvKSB7XG4gICAgICBnb0JhY2soKTtcbiAgICB9XG4gIH0sIFtnb0JhY2ssIHRva2VuSW5mb10pO1xuXG4gIGNvbnN0IG9yaWdpbkNoYWluSW5mbyA9IHVzZUZldGNoQ2hhaW5JbmZvKHRva2VuSW5mby5vcmlnaW5DaGFpbik7XG5cbiAgY29uc3QgW3ByaWNlSWQsIHNldFByaWNlSWRdID0gdXNlU3RhdGUodG9rZW5JbmZvLnByaWNlSWQgfHwgJycpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBoYW5kbGVTaW1wbGVDb25maXJtTW9kYWwgfSA9IHVzZUNvbmZpcm1Nb2RhbCh7XG4gICAgdGl0bGU6IHQ8c3RyaW5nPignRGVsZXRlIHRva2VuJyksXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgIHR5cGU6ICdlcnJvcicsXG4gICAgc3ViVGl0bGU6IHQ8c3RyaW5nPignWW91IGFyZSBhYm91dCB0byBkZWxldGUgdGhpcyB0b2tlbicpLFxuICAgIGNvbnRlbnQ6IHQ8c3RyaW5nPignQ29uZmlybSBkZWxldGUgdGhpcyB0b2tlbicpLFxuICAgIG9rVGV4dDogdDxzdHJpbmc+KCdSZW1vdmUnKVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVUb2tlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBoYW5kbGVTaW1wbGVDb25maXJtTW9kYWwoKS50aGVuKCgpID0+IHtcbiAgICAgIGRlbGV0ZUN1c3RvbUFzc2V0cyh0b2tlbkluZm8uc2x1ZylcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGdvQmFjaygpO1xuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0RlbGV0ZWQgdG9rZW4gc3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogdCgnRGVsZXRlZCB0b2tlbiB1bnN1Y2Nlc3NmdWxseScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiB0KCdEZWxldGVkIHRva2VuIHVuc3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSkuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9LCBbZ29CYWNrLCBoYW5kbGVTaW1wbGVDb25maXJtTW9kYWwsIHNob3dOb3RpZmljYXRpb24sIHQsIHRva2VuSW5mby5zbHVnXSk7XG5cbiAgY29uc3Qgc3ViSGVhZGVyQnV0dG9uOiBCdXR0b25Qcm9wc1tdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPEljb25cbiAgICAgICAgICBjdXN0b21TaXplPXtgJHt0b2tlbi5mb250U2l6ZUhlYWRpbmczfXB4YH1cbiAgICAgICAgICBwaG9zcGhvckljb249e1RyYXNofVxuICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgIHdlaWdodD17J2xpZ2h0J31cbiAgICAgICAgLz4sXG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZURlbGV0ZVRva2VuLFxuICAgICAgICBkaXNhYmxlZDogIShfaXNDdXN0b21Bc3NldCh0b2tlbkluZm8uc2x1ZykgJiYgX2lzU21hcnRDb250cmFjdFRva2VuKHRva2VuSW5mbykpXG4gICAgICB9XG4gICAgXTtcbiAgfSwgW2hhbmRsZURlbGV0ZVRva2VuLCB0b2tlbi5mb250U2l6ZUhlYWRpbmczLCB0b2tlbkluZm9dKTtcblxuICBjb25zdCBjb250cmFjdEFkZHJlc3NJY29uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IF9nZXRDb250cmFjdEFkZHJlc3NPZlRva2VuKHRva2VuSW5mbyk7XG4gICAgY29uc3QgdGhlbWUgPSBpc0V0aGVyZXVtQWRkcmVzcyhjb250cmFjdEFkZHJlc3MpID8gJ2V0aGVyZXVtJyA6ICdwb2xrYWRvdCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN3QXZhdGFyXG4gICAgICAgIGlkZW50UHJlZml4PXs0Mn1cbiAgICAgICAgc2l6ZT17dG9rZW4uZm9udFNpemVYTH1cbiAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICB2YWx1ZT17Y29udHJhY3RBZGRyZXNzfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbdG9rZW4uZm9udFNpemVYTCwgdG9rZW5JbmZvXSk7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzSW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBfZ2V0Q29udHJhY3RBZGRyZXNzT2ZUb2tlbih0b2tlbkluZm8pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPntgJHtjb250cmFjdEFkZHJlc3Muc2xpY2UoMCwgMTApfS4uLiR7Y29udHJhY3RBZGRyZXNzLnNsaWNlKC0xMCl9YH08L3NwYW4+XG4gICAgKTtcbiAgfSwgW3Rva2VuSW5mb10pO1xuXG4gIGNvbnN0IGhhbmRsZUNvcHlDb250cmFjdEFkZHJlc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gX2dldENvbnRyYWN0QWRkcmVzc09mVG9rZW4odG9rZW5JbmZvKTtcblxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvbnRyYWN0QWRkcmVzcykudGhlbigpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG4gICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICBtZXNzYWdlOiB0KCdDb3BpZWQgdG8gY2xpcGJvYXJkJylcbiAgICB9KTtcbiAgfSwgW3Nob3dOb3RpZmljYXRpb24sIHQsIHRva2VuSW5mb10pO1xuXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzc1N1ZmZpeCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBpY29uPXs8SWNvblxuICAgICAgICAgIGN1c3RvbVNpemU9eycyMHB4J31cbiAgICAgICAgICBpY29uQ29sb3I9e3Rva2VuLmNvbG9ySWNvbn1cbiAgICAgICAgICBwaG9zcGhvckljb249e0NvcHl9XG4gICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgd2VpZ2h0PXsnbGlnaHQnfVxuICAgICAgICAvPn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ29weUNvbnRyYWN0QWRkcmVzc31cbiAgICAgICAgc2l6ZT17J3hzJ31cbiAgICAgICAgdHlwZT17J2dob3N0J31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW2hhbmRsZUNvcHlDb250cmFjdEFkZHJlc3MsIHRva2VuLmNvbG9ySWNvbl0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlUHJpY2VJZCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRQcmljZUlkKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc1N1Ym1pdERpc2FibGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiB0b2tlbkluZm8ucHJpY2VJZCA9PT0gcHJpY2VJZCB8fCBwcmljZUlkLmxlbmd0aCA9PT0gMDtcbiAgfSwgW3ByaWNlSWQsIHRva2VuSW5mby5wcmljZUlkXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHVwc2VydEN1c3RvbVRva2VuKHtcbiAgICAgIC4uLnRva2VuSW5mbyxcbiAgICAgIHByaWNlSWRcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgZ29CYWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiB0KCdFcnJvcicpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgbWVzc2FnZTogdCgnRXJyb3InKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9LCBbZ29CYWNrLCBwcmljZUlkLCBzaG93Tm90aWZpY2F0aW9uLCB0LCB0b2tlbkluZm9dKTtcblxuICBjb25zdCBsZWZ0Rm9vdGVyQnV0dG9uUHJvcHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIF9pc0N1c3RvbUFzc2V0KHRva2VuSW5mby5zbHVnKVxuICAgICAgPyB7XG4gICAgICAgIG9uQ2xpY2s6IGdvQmFjayxcbiAgICAgICAgY2hpbGRyZW46IHQoJ0NhbmNlbCcpXG4gICAgICB9XG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfSwgW2dvQmFjaywgdG9rZW5JbmZvLnNsdWcsIHRdKTtcblxuICBjb25zdCByaWdodEZvb3RlckJ1dHRvblByb3BzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiBfaXNDdXN0b21Bc3NldCh0b2tlbkluZm8uc2x1ZylcbiAgICAgID8ge1xuICAgICAgICBibG9jazogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IGlzU3VibWl0RGlzYWJsZWQoKSxcbiAgICAgICAgaWNvbjogKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBwaG9zcGhvckljb249e0NoZWNrQ2lyY2xlfVxuICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgIC8+XG4gICAgICAgICksXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIG9uQ2xpY2s6IG9uU3VibWl0LFxuICAgICAgICBjaGlsZHJlbjogdCgnU2F2ZScpXG4gICAgICB9XG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfSwgW2lzU3VibWl0RGlzYWJsZWQsIGxvYWRpbmcsIG9uU3VibWl0LCB0LCB0b2tlbkluZm8uc2x1Z10pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2B0b2tlbl9kZXRhaWwgJHtjbGFzc05hbWV9YH1cbiAgICAgIHJlc29sdmU9e2RhdGFDb250ZXh0LmF3YWl0U3RvcmVzKFsnYXNzZXRSZWdpc3RyeSddKX1cbiAgICA+XG4gICAgICA8TGF5b3V0LkJhc2VcbiAgICAgICAgbGVmdEZvb3RlckJ1dHRvbj17bGVmdEZvb3RlckJ1dHRvblByb3BzKCl9XG4gICAgICAgIG9uQmFjaz17Z29CYWNrfVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17cmlnaHRGb290ZXJCdXR0b25Qcm9wcygpfVxuICAgICAgICBzaG93QmFja0J1dHRvbj17dHJ1ZX1cbiAgICAgICAgc2hvd1N1YkhlYWRlcj17dHJ1ZX1cbiAgICAgICAgc3ViSGVhZGVyQmFja2dyb3VuZD17J3RyYW5zcGFyZW50J31cbiAgICAgICAgc3ViSGVhZGVyQ2VudGVyPXt0cnVlfVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17c3ViSGVhZGVyQnV0dG9ufVxuICAgICAgICBzdWJIZWFkZXJQYWRkaW5nVmVydGljYWw9e3RydWV9XG4gICAgICAgIHRpdGxlPXt0PHN0cmluZz4oJ1Rva2VuIGRldGFpbCcpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Rva2VuX2RldGFpbF9fY29udGFpbmVyJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0b2tlbl9kZXRhaWxfX2hlYWRlcl9jb250YWluZXInfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG9rZW5fZGV0YWlsX19oZWFkZXJfaWNvbl93cmFwcGVyJ30+XG4gICAgICAgICAgICAgIDxMb2dvXG4gICAgICAgICAgICAgICAgc2l6ZT17MTEyfVxuICAgICAgICAgICAgICAgIHRva2VuPXt0b2tlbkluZm8uc2x1Zy50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG9rZW5fZGV0YWlsX19oZWFkZXJfdGV4dF9jb250YWluZXInfT5cbiAgICAgICAgICAgICAge3Rva2VuSW5mby5zeW1ib2x9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG9rZW5fZGV0YWlsX19jb250ZW50X2NvbnRhaW5lcid9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfaXNTbWFydENvbnRyYWN0VG9rZW4odG9rZW5JbmZvKSAmJiA8RmllbGRcbiAgICAgICAgICAgICAgICBjb250ZW50PXtjb250cmFjdEFkZHJlc3NJbmZvKCl9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3Q8c3RyaW5nPignQ29udHJhY3QgYWRkcmVzcycpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0PHN0cmluZz4oJ0NvbnRyYWN0IGFkZHJlc3MnKX1cbiAgICAgICAgICAgICAgICBwcmVmaXg9e2NvbnRyYWN0QWRkcmVzc0ljb24oKX1cbiAgICAgICAgICAgICAgICBzdWZmaXg9e2NvbnRyYWN0QWRkcmVzc1N1ZmZpeCgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e29yaWdpbkNoYWluSW5mby5uYW1lfVxuICAgICAgICAgICAgICBsYWJlbD17dDxzdHJpbmc+KCdOZXR3b3JrJyl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0PHN0cmluZz4oJ05ldHdvcmsnKX1cbiAgICAgICAgICAgICAgcHJlZml4PXs8TG9nb1xuICAgICAgICAgICAgICAgIG5ldHdvcms9e29yaWdpbkNoYWluSW5mby5zbHVnfVxuICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXt0b2tlbi5tYXJnaW5TTX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9eyd0b3BMZWZ0J31cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdTeW1ib2wnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0b2tlbkluZm8uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0PHN0cmluZz4oJ1N5bWJvbCcpfVxuICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17KFxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuPXt0b2tlbkluZm8uc2x1Zy50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ0RlY2ltYWxzJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dG9rZW5JbmZvLmRlY2ltYWxzfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0PHN0cmluZz4oJ0RlY2ltYWxzJyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgIHBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICB0aXRsZT17dCgnUHJpY2UgSUQnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshX2lzQ3VzdG9tQXNzZXQodG9rZW5JbmZvLnNsdWcpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUHJpY2VJZH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdQcmljZSBJRCcpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlSWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQuQmFzZT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBUb2tlbkRldGFpbCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgICcudG9rZW5fZGV0YWlsX19jb250YWluZXInOiB7XG4gICAgICBtYXJnaW5MZWZ0OiB0b2tlbi5tYXJnaW4sXG4gICAgICBtYXJnaW5SaWdodDogdG9rZW4ubWFyZ2luXG4gICAgfSxcblxuICAgICcudG9rZW5fZGV0YWlsX19oZWFkZXJfY29udGFpbmVyJzoge1xuICAgICAgbWFyZ2luVG9wOiAzMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICBnYXA6IHRva2VuLnBhZGRpbmcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbkxHXG4gICAgfSxcblxuICAgICcudG9rZW5fZGV0YWlsX19oZWFkZXJfdGV4dF9jb250YWluZXInOiB7XG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5oZWFkaW5nRm9udFdlaWdodCxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nMyxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRcbiAgICB9LFxuXG4gICAgJy50b2tlbl9kZXRhaWxfX2hlYWRlcl9pY29uX3dyYXBwZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgJy50b2tlbl9kZXRhaWxfX2NvbnRlbnRfY29udGFpbmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRva2VuLm1hcmdpblNNXG4gICAgfSxcblxuICAgICcuYW50LWZpZWxkLXdyYXBwZXIgLmFudC1idG4nOiB7XG4gICAgICBtYXJnaW46IC10b2tlbi5tYXJnaW5YUyxcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUb2tlbkRldGFpbDtcbiJdLCJuYW1lcyI6WyJfZ2V0Q29udHJhY3RBZGRyZXNzT2ZUb2tlbiIsIl9pc0N1c3RvbUFzc2V0IiwiX2lzU21hcnRDb250cmFjdFRva2VuIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJEYXRhQ29udGV4dCIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlybU1vZGFsIiwidXNlRGVmYXVsdE5hdmlnYXRlIiwidXNlRmV0Y2hDaGFpbkluZm8iLCJ1c2VHZXRDaGFpbkFzc2V0SW5mbyIsImRlbGV0ZUN1c3RvbUFzc2V0cyIsInVwc2VydEN1c3RvbVRva2VuIiwiQnV0dG9uIiwiQ29sIiwiRmllbGQiLCJJY29uIiwiSW5wdXQiLCJMb2dvIiwiUm93IiwiVG9vbHRpcCIsIlN3QXZhdGFyIiwiQ2hlY2tDaXJjbGUiLCJDb3B5IiwiVHJhc2giLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUxvY2F0aW9uIiwic3R5bGVkIiwidXNlVGhlbWUiLCJpc0V0aGVyZXVtQWRkcmVzcyIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJkYXRhQ29udGV4dCIsInRva2VuIiwiZ29CYWNrIiwibG9jYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwidG9rZW5TbHVnIiwic3RhdGUiLCJ0b2tlbkluZm8iLCJvcmlnaW5DaGFpbkluZm8iLCJvcmlnaW5DaGFpbiIsInByaWNlSWQiLCJzZXRQcmljZUlkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTaW1wbGVDb25maXJtTW9kYWwiLCJ0aXRsZSIsIm1hc2tDbG9zYWJsZSIsImNsb3NhYmxlIiwidHlwZSIsInN1YlRpdGxlIiwiY29udGVudCIsIm9rVGV4dCIsImhhbmRsZURlbGV0ZVRva2VuIiwidGhlbiIsInNsdWciLCJyZXN1bHQiLCJtZXNzYWdlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwic3ViSGVhZGVyQnV0dG9uIiwiaWNvbiIsImZvbnRTaXplSGVhZGluZzMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjb250cmFjdEFkZHJlc3NJY29uIiwiY29udHJhY3RBZGRyZXNzIiwidGhlbWUiLCJmb250U2l6ZVhMIiwiY29udHJhY3RBZGRyZXNzSW5mbyIsInNsaWNlIiwiaGFuZGxlQ29weUNvbnRyYWN0QWRkcmVzcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImVycm9yIiwiY29udHJhY3RBZGRyZXNzU3VmZml4IiwiY29sb3JJY29uIiwib25DaGFuZ2VQcmljZUlkIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImlzU3VibWl0RGlzYWJsZWQiLCJsZW5ndGgiLCJvblN1Ym1pdCIsImxlZnRGb290ZXJCdXR0b25Qcm9wcyIsImNoaWxkcmVuIiwidW5kZWZpbmVkIiwicmlnaHRGb290ZXJCdXR0b25Qcm9wcyIsImJsb2NrIiwiYXdhaXRTdG9yZXMiLCJ0b0xvd2VyQ2FzZSIsInN5bWJvbCIsIm5hbWUiLCJtYXJnaW5TTSIsImRlY2ltYWxzIiwiVG9rZW5EZXRhaWwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJnYXAiLCJwYWRkaW5nIiwiZmxleERpcmVjdGlvbiIsImFsaWduQ29udGVudCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxHIiwiZm9udFdlaWdodCIsImhlYWRpbmdGb250V2VpZ2h0IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJjb2xvciIsImNvbG9yVGV4dCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luWFMiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9