"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_Nfts_NftImport_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/Nfts/NftImport.tsx":
/*!**************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Nfts/NftImport.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/chain-list/types */ "../../node_modules/@subwallet/chain-list/types.js");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlusCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/is.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

















function getNftTypeSupported(chainInfo) {
  if (!chainInfo) {
    return [];
  }
  const nftTypes = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__._getNftTypesSupportedByChain)(chainInfo);
  const result = [];
  nftTypes.forEach(nftType => {
    result.push({
      label: nftType.toString(),
      value: nftType
    });
  });
  return result;
}
function Component({
  className = ''
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const showNotification = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useNotification)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const chainInfoMap = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetContractSupportedChains)();
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"].useForm();
  const selectedChain = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"].useWatch('chain', form);
  const selectedNftType = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"].useWatch('type', form);
  const collectionName = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"].useWatch('collectionName', form);
  const chains = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => Object.values(chainInfoMap), [chainInfoMap]);
  const chainNetworkPrefix = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetChainPrefixBySlug)(selectedChain);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [isDisabled, setIsDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const [nameDisabled, setNameDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const nftTypeOptions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return getNftTypeSupported(chainInfoMap[selectedChain]);
  }, [chainInfoMap, selectedChain]);
  const checkChain = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useChainChecker)();
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    navigate('/home/nfts/collections');
  }, [navigate]);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((changedFields, allFields) => {
    const {
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.simpleCheckForm)(allFields);
    const changes = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.convertFieldToObject)(changedFields);
    const all = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.convertFieldToObject)(allFields);
    const allError = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.convertFieldToError)(allFields);
    const empty = Object.entries(all).some(([key, value]) => key !== 'symbol' ? !value : false);
    const {
      chain,
      type
    } = changes;
    if (chain) {
      const nftTypes = getNftTypeSupported(chainInfoMap[chain]);
      if (nftTypes.length === 1) {
        form.setFieldValue('type', nftTypes[0].value);
      } else {
        form.resetFields(['type']);
      }
      form.resetFields(['contractAddress', 'collectionName']);
    }
    if (type) {
      form.resetFields(['contractAddress', 'collectionName']);
    }
    if (allError.contractAddress.length > 0) {
      form.resetFields(['collectionName']);
    }
    setNameDisabled(!all.chain || !all.type || allError.contractAddress.length > 0);
    setIsDisabled(empty || error);
  }, [chainInfoMap, form]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(formValues => {
    const {
      chain,
      contractAddress,
      symbol,
      type
    } = formValues;
    const formattedCollectionName = collectionName.replaceAll(' ', '').toUpperCase();
    const reformattedAddress = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.reformatAddress)(contractAddress, chainNetworkPrefix);
    setLoading(true);
    setTimeout(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.upsertCustomToken)({
        originChain: chain,
        slug: '',
        name: collectionName,
        symbol: symbol !== '' ? symbol : formattedCollectionName,
        decimals: null,
        priceId: null,
        minAmount: null,
        assetType: type,
        metadata: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__._parseMetadataForSmartContractAsset)(reformattedAddress),
        multiChainAsset: null,
        hasValue: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__._isChainTestNet)(chainInfoMap[chain]),
        icon: ''
      }).then(result => {
        if (result) {
          showNotification({
            message: t('Imported NFT successfully')
          });
          goBack();
        } else {
          showNotification({
            message: t('An error occurred, please try again')
          });
        }
      }).catch(() => {
        showNotification({
          message: t('An error occurred, please try again')
        });
      }).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [collectionName, chainNetworkPrefix, chainInfoMap, showNotification, t, goBack]);
  const collectionNameValidator = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((rule, value) => {
    return new Promise((resolve, reject) => {
      const parsedValue = value.replaceAll(' ', '');
      if (parsedValue.length >= 3) {
        resolve();
      } else {
        reject(new Error(t('Collection name must have at least 3 characters')));
      }
    });
  }, [t]);
  const contractAddressValidator = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((rule, contractAddress) => {
    return new Promise((resolve, reject) => {
      if (!(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_10__.isAddress)(contractAddress)) {
        reject(t('Invalid contract address'));
      } else {
        const isValidEvmContract = [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_11__._AssetType.ERC721].includes(selectedNftType) && (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_12__.isEthereumAddress)(contractAddress);
        const isValidWasmContract = [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_11__._AssetType.PSP34].includes(selectedNftType) && (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_13__.isValidSubstrateAddress)(contractAddress);
        const reformattedAddress = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.reformatAddress)(contractAddress, chainNetworkPrefix);
        if (isValidEvmContract || isValidWasmContract) {
          setLoading(true);
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.validateCustomToken)({
            contractAddress: reformattedAddress,
            originChain: selectedChain,
            type: selectedNftType
          }).then(validationResult => {
            setLoading(false);
            if (validationResult.isExist) {
              reject(t('Existed NFT'));
            }
            if (validationResult.contractError) {
              reject(t('Invalid contract for the selected chain'));
            }
            if (!validationResult.isExist && !validationResult.contractError) {
              form.setFieldValue('collectionName', validationResult.name);
              form.setFieldValue('symbol', validationResult.symbol);
              resolve();
            }
          }).catch(() => {
            setLoading(false);
            reject(t('Invalid contract for the selected chain'));
          });
        } else {
          reject(t('Invalid contract address'));
        }
      }
    });
  }, [chainNetworkPrefix, form, selectedChain, selectedNftType, t]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    selectedChain && checkChain(selectedChain);
  }, [selectedChain, checkChain]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: className,
    resolve: dataContext.awaitStores(['nft']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: goBack,
      rightFooterButton: {
        disabled: isDisabled,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
          weight: "fill"
        }),
        loading: loading,
        onClick: form.submit,
        children: t('Import')
      },
      title: t('Import NFT'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: 'nft_import__container',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "form-space-xs",
          form: form,
          initialValues: {
            contractAddress: '',
            chain: '',
            collectionName: '',
            type: ''
          },
          name: "nft-import",
          onFieldsChange: onFieldsChange,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
            name: "chain",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.ChainSelector, {
              items: chains,
              label: t('Network'),
              placeholder: t('Select network'),
              title: t('Select network')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
            name: "type",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.TokenTypeSelector, {
              className: className,
              disabled: !selectedChain,
              items: nftTypeOptions,
              label: t('Type'),
              placeholder: t('Select NFT type'),
              title: t('Select NFT type')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
            name: "contractAddress",
            rules: [{
              validator: contractAddressValidator
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AddressInput, {
              addressPrefix: chainNetworkPrefix,
              disabled: !selectedNftType,
              label: t('Contract address'),
              placeholder: t('Enter or paste an address'),
              showScanner: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
            name: "collectionName",
            required: true,
            rules: [{
              validator: collectionNameValidator
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
              disabled: nameDisabled,
              label: t('NFT collection name')
            })
          })]
        })
      })
    })
  });
}
const NftImport = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__["default"])(Component).withConfig({
  displayName: "NftImport",
  componentId: "sc-h8ppt5-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.nft_import__container': {
      marginTop: token.margin,
      paddingLeft: token.padding,
      paddingRight: token.padding
    },
    '.nft_import__Qr': {
      cursor: 'pointer'
    },
    '.ant-web3-block-right-item': {
      marginRight: 0
    },
    '.ant-input-suffix': {
      marginRight: 0
    },
    '.nft_import__selected_option': {
      color: token.colorTextHeading
    },
    '.nft-type-item': {
      '--nft-type-icon-bg-color': token['orange-6'],
      '--nft-type-icon-color': token.colorWhite,
      '--nft-selected-icon-color': token.colorSuccess,
      '.ant-web3-block-right-item': {
        marginRight: 0
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NftImport);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9OZnRzX05mdEltcG9ydF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVxRTtBQUN1RjtBQUNsRjtBQUNvRDtBQUM5QztBQUM4RTtBQUM5RDtBQUVpQztBQUN6RTtBQUNaO0FBRXlDO0FBQ3RDO0FBQ1I7QUFFOEI7QUFBQTtBQUFBO0FBaUJyRSxTQUFTb0MsbUJBQW1CLENBQUVDLFNBQXFCLEVBQUU7RUFDbkQsSUFBSSxDQUFDQSxTQUFTLEVBQUU7SUFDZCxPQUFPLEVBQUU7RUFDWDtFQUVBLE1BQU1DLFFBQVEsR0FBR3JDLG9IQUE0QixDQUFDb0MsU0FBUyxDQUFDO0VBQ3hELE1BQU1FLE1BQXVCLEdBQUcsRUFBRTtFQUVsQ0QsUUFBUSxDQUFDRSxPQUFPLENBQUVDLE9BQU8sSUFBSztJQUM1QkYsTUFBTSxDQUFDRyxJQUFJLENBQUM7TUFDVkMsS0FBSyxFQUFFRixPQUFPLENBQUNHLFFBQVEsRUFBRTtNQUN6QkMsS0FBSyxFQUFFSjtJQUNULENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUVGLE9BQU9GLE1BQU07QUFDZjtBQUVBLFNBQVNPLFNBQVMsQ0FBRTtFQUFFQyxTQUFTLEdBQUc7QUFBVSxDQUFDLEVBQTZCO0VBQ3hFLE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdqQyxrRkFBYyxFQUFFO0VBQzlCLE1BQU1rQyxnQkFBZ0IsR0FBR25DLG1GQUFlLEVBQUU7RUFDMUMsTUFBTW9DLFFBQVEsR0FBR2xCLDZEQUFXLEVBQUU7RUFFOUIsTUFBTW1CLFdBQVcsR0FBR3ZCLGlEQUFVLENBQUNsQiwwRkFBVyxDQUFDO0VBRTNDLE1BQU0wQyxZQUFZLEdBQUd2QyxpR0FBNkIsRUFBRTtFQUVwRCxNQUFNLENBQUN3QyxJQUFJLENBQUMsR0FBRy9CLG1FQUFZLEVBQXFCO0VBQ2hELE1BQU1pQyxhQUFhLEdBQUdqQyxvRUFB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QUFFO0lBQ1YsQ0FBQztJQUVELDRCQUE0QixFQUFFO01BQzVCQyxXQUFXLEVBQUU7SUFDZixDQUFDO0lBRUQsbUJBQW1CLEVBQUU7TUFDbkJBLFdBQVcsRUFBRTtJQUNmLENBQUM7SUFFRCw4QkFBOEIsRUFBRTtNQUM5QkMsS0FBSyxFQUFFUixLQUFLLENBQUNTO0lBQ2YsQ0FBQztJQUVELGdCQUFnQixFQUFFO01BQ2hCLDBCQUEwQixFQUFFVCxLQUFLLENBQUMsVUFBVSxDQUFDO01BQzdDLHVCQUF1QixFQUFFQSxLQUFLLENBQUNVLFVBQVU7TUFDekMsMkJBQTJCLEVBQUVWLEtBQUssQ0FBQ1csWUFBWTtNQUUvQyw0QkFBNEIsRUFBRTtRQUM1QkosV0FBVyxFQUFFO01BQ2Y7SUFDRjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZVQsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvTmZ0cy9OZnRJbXBvcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQXNzZXRUeXBlLCBfQ2hhaW5JbmZvIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IF9nZXROZnRUeXBlc1N1cHBvcnRlZEJ5Q2hhaW4sIF9pc0NoYWluVGVzdE5ldCwgX3BhcnNlTWV0YWRhdGFGb3JTbWFydENvbnRyYWN0QXNzZXQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgaXNWYWxpZFN1YnN0cmF0ZUFkZHJlc3MgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IEFkZHJlc3NJbnB1dCwgQ2hhaW5TZWxlY3RvciwgTGF5b3V0LCBQYWdlV3JhcHBlciwgVG9rZW5UeXBlU2VsZWN0b3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IHVzZUNoYWluQ2hlY2tlciwgdXNlR2V0Q2hhaW5QcmVmaXhCeVNsdWcsIHVzZUdldENvbnRyYWN0U3VwcG9ydGVkQ2hhaW5zLCB1c2VOb3RpZmljYXRpb24sIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyB1cHNlcnRDdXN0b21Ub2tlbiwgdmFsaWRhdGVDdXN0b21Ub2tlbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IEZvcm1DYWxsYmFja3MsIEZvcm1GaWVsZERhdGEsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IGNvbnZlcnRGaWVsZFRvRXJyb3IsIGNvbnZlcnRGaWVsZFRvT2JqZWN0LCByZWZvcm1hdEFkZHJlc3MsIHNpbXBsZUNoZWNrRm9ybSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgRm9ybSwgSWNvbiwgSW5wdXQgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCB7IFBsdXNDaXJjbGUgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgeyBSdWxlT2JqZWN0IH0gZnJvbSAncmMtZmllbGQtZm9ybS9saWIvaW50ZXJmYWNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgaXNBZGRyZXNzLCBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5pbnRlcmZhY2UgTmZ0SW1wb3J0Rm9ybVR5cGUge1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcbiAgY2hhaW46IHN0cmluZztcbiAgY29sbGVjdGlvbk5hbWU6IHN0cmluZztcbiAgdHlwZTogX0Fzc2V0VHlwZTtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBOZnRUeXBlT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZyxcbiAgdmFsdWU6IF9Bc3NldFR5cGVcbn1cblxuZnVuY3Rpb24gZ2V0TmZ0VHlwZVN1cHBvcnRlZCAoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvKSB7XG4gIGlmICghY2hhaW5JbmZvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgbmZ0VHlwZXMgPSBfZ2V0TmZ0VHlwZXNTdXBwb3J0ZWRCeUNoYWluKGNoYWluSW5mbyk7XG4gIGNvbnN0IHJlc3VsdDogTmZ0VHlwZU9wdGlvbltdID0gW107XG5cbiAgbmZ0VHlwZXMuZm9yRWFjaCgobmZ0VHlwZSkgPT4ge1xuICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgIGxhYmVsOiBuZnRUeXBlLnRvU3RyaW5nKCksXG4gICAgICB2YWx1ZTogbmZ0VHlwZVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UHJvcHM+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBzaG93Tm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuXG4gIGNvbnN0IGNoYWluSW5mb01hcCA9IHVzZUdldENvbnRyYWN0U3VwcG9ydGVkQ2hhaW5zKCk7XG5cbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtPE5mdEltcG9ydEZvcm1UeXBlPigpO1xuICBjb25zdCBzZWxlY3RlZENoYWluID0gRm9ybS51c2VXYXRjaCgnY2hhaW4nLCBmb3JtKTtcbiAgY29uc3Qgc2VsZWN0ZWROZnRUeXBlID0gRm9ybS51c2VXYXRjaCgndHlwZScsIGZvcm0pO1xuICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IEZvcm0udXNlV2F0Y2goJ2NvbGxlY3Rpb25OYW1lJywgZm9ybSk7XG5cbiAgY29uc3QgY2hhaW5zID0gdXNlTWVtbygoKSA9PiBPYmplY3QudmFsdWVzKGNoYWluSW5mb01hcCksIFtjaGFpbkluZm9NYXBdKTtcbiAgY29uc3QgY2hhaW5OZXR3b3JrUHJlZml4ID0gdXNlR2V0Q2hhaW5QcmVmaXhCeVNsdWcoc2VsZWN0ZWRDaGFpbik7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0SXNEaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25hbWVEaXNhYmxlZCwgc2V0TmFtZURpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG5mdFR5cGVPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGdldE5mdFR5cGVTdXBwb3J0ZWQoY2hhaW5JbmZvTWFwW3NlbGVjdGVkQ2hhaW5dKTtcbiAgfSwgW2NoYWluSW5mb01hcCwgc2VsZWN0ZWRDaGFpbl0pO1xuXG4gIGNvbnN0IGNoZWNrQ2hhaW4gPSB1c2VDaGFpbkNoZWNrZXIoKTtcblxuICBjb25zdCBnb0JhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoJy9ob21lL25mdHMvY29sbGVjdGlvbnMnKTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3Qgb25GaWVsZHNDaGFuZ2U6IEZvcm1DYWxsYmFja3M8TmZ0SW1wb3J0Rm9ybVR5cGU+WydvbkZpZWxkc0NoYW5nZSddID0gdXNlQ2FsbGJhY2soKGNoYW5nZWRGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSwgYWxsRmllbGRzOiBGb3JtRmllbGREYXRhW10pID0+IHtcbiAgICBjb25zdCB7IGVycm9yIH0gPSBzaW1wbGVDaGVja0Zvcm0oYWxsRmllbGRzKTtcblxuICAgIGNvbnN0IGNoYW5nZXMgPSBjb252ZXJ0RmllbGRUb09iamVjdDxOZnRJbXBvcnRGb3JtVHlwZT4oY2hhbmdlZEZpZWxkcyk7XG4gICAgY29uc3QgYWxsID0gY29udmVydEZpZWxkVG9PYmplY3Q8TmZ0SW1wb3J0Rm9ybVR5cGU+KGFsbEZpZWxkcyk7XG4gICAgY29uc3QgYWxsRXJyb3IgPSBjb252ZXJ0RmllbGRUb0Vycm9yPE5mdEltcG9ydEZvcm1UeXBlPihhbGxGaWVsZHMpO1xuXG4gICAgY29uc3QgZW1wdHkgPSBPYmplY3QuZW50cmllcyhhbGwpLnNvbWUoKFtrZXksIHZhbHVlXSkgPT4ga2V5ICE9PSAnc3ltYm9sJyA/ICF2YWx1ZSA6IGZhbHNlKTtcblxuICAgIGNvbnN0IHsgY2hhaW4sIHR5cGUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAoY2hhaW4pIHtcbiAgICAgIGNvbnN0IG5mdFR5cGVzID0gZ2V0TmZ0VHlwZVN1cHBvcnRlZChjaGFpbkluZm9NYXBbY2hhaW5dKTtcblxuICAgICAgaWYgKG5mdFR5cGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3R5cGUnLCBuZnRUeXBlc1swXS52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtLnJlc2V0RmllbGRzKFsndHlwZSddKTtcbiAgICAgIH1cblxuICAgICAgZm9ybS5yZXNldEZpZWxkcyhbJ2NvbnRyYWN0QWRkcmVzcycsICdjb2xsZWN0aW9uTmFtZSddKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSkge1xuICAgICAgZm9ybS5yZXNldEZpZWxkcyhbJ2NvbnRyYWN0QWRkcmVzcycsICdjb2xsZWN0aW9uTmFtZSddKTtcbiAgICB9XG5cbiAgICBpZiAoYWxsRXJyb3IuY29udHJhY3RBZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcm0ucmVzZXRGaWVsZHMoWydjb2xsZWN0aW9uTmFtZSddKTtcbiAgICB9XG5cbiAgICBzZXROYW1lRGlzYWJsZWQoIWFsbC5jaGFpbiB8fCAhYWxsLnR5cGUgfHwgYWxsRXJyb3IuY29udHJhY3RBZGRyZXNzLmxlbmd0aCA+IDApO1xuICAgIHNldElzRGlzYWJsZWQoZW1wdHkgfHwgZXJyb3IpO1xuICB9LCBbY2hhaW5JbmZvTWFwLCBmb3JtXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQ6IEZvcm1DYWxsYmFja3M8TmZ0SW1wb3J0Rm9ybVR5cGU+WydvbkZpbmlzaCddID0gdXNlQ2FsbGJhY2soKGZvcm1WYWx1ZXM6IE5mdEltcG9ydEZvcm1UeXBlKSA9PiB7XG4gICAgY29uc3QgeyBjaGFpbiwgY29udHJhY3RBZGRyZXNzLCBzeW1ib2wsIHR5cGUgfSA9IGZvcm1WYWx1ZXM7XG4gICAgY29uc3QgZm9ybWF0dGVkQ29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZS5yZXBsYWNlQWxsKCcgJywgJycpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcmVmb3JtYXR0ZWRBZGRyZXNzID0gcmVmb3JtYXRBZGRyZXNzKGNvbnRyYWN0QWRkcmVzcywgY2hhaW5OZXR3b3JrUHJlZml4KTtcblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVwc2VydEN1c3RvbVRva2VuKHtcbiAgICAgICAgb3JpZ2luQ2hhaW46IGNoYWluLFxuICAgICAgICBzbHVnOiAnJyxcbiAgICAgICAgbmFtZTogY29sbGVjdGlvbk5hbWUsXG4gICAgICAgIHN5bWJvbDogc3ltYm9sICE9PSAnJyA/IHN5bWJvbCA6IGZvcm1hdHRlZENvbGxlY3Rpb25OYW1lLFxuICAgICAgICBkZWNpbWFsczogbnVsbCxcbiAgICAgICAgcHJpY2VJZDogbnVsbCxcbiAgICAgICAgbWluQW1vdW50OiBudWxsLFxuICAgICAgICBhc3NldFR5cGU6IHR5cGUsXG4gICAgICAgIG1ldGFkYXRhOiBfcGFyc2VNZXRhZGF0YUZvclNtYXJ0Q29udHJhY3RBc3NldChyZWZvcm1hdHRlZEFkZHJlc3MpLFxuICAgICAgICBtdWx0aUNoYWluQXNzZXQ6IG51bGwsXG4gICAgICAgIGhhc1ZhbHVlOiBfaXNDaGFpblRlc3ROZXQoY2hhaW5JbmZvTWFwW2NoYWluXSksXG4gICAgICAgIGljb246ICcnXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0ltcG9ydGVkIE5GVCBzdWNjZXNzZnVsbHknKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnb0JhY2soKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0FuIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgdHJ5IGFnYWluJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0FuIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgdHJ5IGFnYWluJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9LCAzMDApO1xuICB9LCBbY29sbGVjdGlvbk5hbWUsIGNoYWluTmV0d29ya1ByZWZpeCwgY2hhaW5JbmZvTWFwLCBzaG93Tm90aWZpY2F0aW9uLCB0LCBnb0JhY2tdKTtcblxuICBjb25zdCBjb2xsZWN0aW9uTmFtZVZhbGlkYXRvciA9IHVzZUNhbGxiYWNrKChydWxlOiBSdWxlT2JqZWN0LCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdmFsdWUucmVwbGFjZUFsbCgnICcsICcnKTtcblxuICAgICAgaWYgKHBhcnNlZFZhbHVlLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IodCgnQ29sbGVjdGlvbiBuYW1lIG11c3QgaGF2ZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnKSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzc1ZhbGlkYXRvciA9IHVzZUNhbGxiYWNrKChydWxlOiBSdWxlT2JqZWN0LCBjb250cmFjdEFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIWlzQWRkcmVzcyhjb250cmFjdEFkZHJlc3MpKSB7XG4gICAgICAgIHJlamVjdCh0KCdJbnZhbGlkIGNvbnRyYWN0IGFkZHJlc3MnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpc1ZhbGlkRXZtQ29udHJhY3QgPSBbX0Fzc2V0VHlwZS5FUkM3MjFdLmluY2x1ZGVzKHNlbGVjdGVkTmZ0VHlwZSkgJiYgaXNFdGhlcmV1bUFkZHJlc3MoY29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgY29uc3QgaXNWYWxpZFdhc21Db250cmFjdCA9IFtfQXNzZXRUeXBlLlBTUDM0XS5pbmNsdWRlcyhzZWxlY3RlZE5mdFR5cGUpICYmIGlzVmFsaWRTdWJzdHJhdGVBZGRyZXNzKGNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IHJlZm9ybWF0dGVkQWRkcmVzcyA9IHJlZm9ybWF0QWRkcmVzcyhjb250cmFjdEFkZHJlc3MsIGNoYWluTmV0d29ya1ByZWZpeCk7XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFdm1Db250cmFjdCB8fCBpc1ZhbGlkV2FzbUNvbnRyYWN0KSB7XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICB2YWxpZGF0ZUN1c3RvbVRva2VuKHtcbiAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogcmVmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgICAgb3JpZ2luQ2hhaW46IHNlbGVjdGVkQ2hhaW4sXG4gICAgICAgICAgICB0eXBlOiBzZWxlY3RlZE5mdFR5cGVcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHZhbGlkYXRpb25SZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25SZXN1bHQuaXNFeGlzdCkge1xuICAgICAgICAgICAgICAgIHJlamVjdCh0KCdFeGlzdGVkIE5GVCcpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0LmNvbnRyYWN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QodCgnSW52YWxpZCBjb250cmFjdCBmb3IgdGhlIHNlbGVjdGVkIGNoYWluJykpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LmlzRXhpc3QgJiYgIXZhbGlkYXRpb25SZXN1bHQuY29udHJhY3RFcnJvcikge1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnY29sbGVjdGlvbk5hbWUnLCB2YWxpZGF0aW9uUmVzdWx0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgnc3ltYm9sJywgdmFsaWRhdGlvblJlc3VsdC5zeW1ib2wpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICByZWplY3QodCgnSW52YWxpZCBjb250cmFjdCBmb3IgdGhlIHNlbGVjdGVkIGNoYWluJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHQoJ0ludmFsaWQgY29udHJhY3QgYWRkcmVzcycpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbY2hhaW5OZXR3b3JrUHJlZml4LCBmb3JtLCBzZWxlY3RlZENoYWluLCBzZWxlY3RlZE5mdFR5cGUsIHRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlbGVjdGVkQ2hhaW4gJiYgY2hlY2tDaGFpbihzZWxlY3RlZENoYWluKTtcbiAgfSwgW3NlbGVjdGVkQ2hhaW4sIGNoZWNrQ2hhaW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ25mdCddKX1cbiAgICA+XG4gICAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICAgIG9uQmFjaz17Z29CYWNrfVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGljb246IChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17UGx1c0NpcmNsZX1cbiAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICApLFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgb25DbGljazogZm9ybS5zdWJtaXQsXG4gICAgICAgICAgY2hpbGRyZW46IHQoJ0ltcG9ydCcpXG4gICAgICAgIH19XG4gICAgICAgIHRpdGxlPXt0PHN0cmluZz4oJ0ltcG9ydCBORlQnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduZnRfaW1wb3J0X19jb250YWluZXInfT5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLXNwYWNlLXhzJ1xuICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgY2hhaW46ICcnLFxuICAgICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICcnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbmFtZT0nbmZ0LWltcG9ydCdcbiAgICAgICAgICAgIG9uRmllbGRzQ2hhbmdlPXtvbkZpZWxkc0NoYW5nZX1cbiAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9J2NoYWluJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2hhaW5TZWxlY3RvclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtjaGFpbnN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3Q8c3RyaW5nPignTmV0d29yaycpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdTZWxlY3QgbmV0d29yaycpfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdTZWxlY3QgbmV0d29yaycpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT0ndHlwZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRva2VuVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZENoYWlufVxuICAgICAgICAgICAgICAgIGl0ZW1zPXtuZnRUeXBlT3B0aW9uc31cbiAgICAgICAgICAgICAgICBsYWJlbD17dDxzdHJpbmc+KCdUeXBlJyl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1NlbGVjdCBORlQgdHlwZScpfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdTZWxlY3QgTkZUIHR5cGUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9J2NvbnRyYWN0QWRkcmVzcydcbiAgICAgICAgICAgICAgcnVsZXM9e1t7IHZhbGlkYXRvcjogY29udHJhY3RBZGRyZXNzVmFsaWRhdG9yIH1dfVxuICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWRkcmVzc0lucHV0XG4gICAgICAgICAgICAgICAgYWRkcmVzc1ByZWZpeD17Y2hhaW5OZXR3b3JrUHJlZml4fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWROZnRUeXBlfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0PHN0cmluZz4oJ0NvbnRyYWN0IGFkZHJlc3MnKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnRW50ZXIgb3IgcGFzdGUgYW4gYWRkcmVzcycpfVxuICAgICAgICAgICAgICAgIHNob3dTY2FubmVyPXt0cnVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT0nY29sbGVjdGlvbk5hbWUnXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgICBydWxlcz17W3sgdmFsaWRhdG9yOiBjb2xsZWN0aW9uTmFtZVZhbGlkYXRvciB9XX1cbiAgICAgICAgICAgICAgc3RhdHVzSGVscEFzVG9vbHRpcD17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e25hbWVEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBsYWJlbD17dDxzdHJpbmc+KCdORlQgY29sbGVjdGlvbiBuYW1lJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQuV2l0aFN1YkhlYWRlck9ubHk+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgTmZ0SW1wb3J0ID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgJy5uZnRfaW1wb3J0X19jb250YWluZXInOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpbixcbiAgICAgIHBhZGRpbmdMZWZ0OiB0b2tlbi5wYWRkaW5nLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0b2tlbi5wYWRkaW5nXG4gICAgfSxcblxuICAgICcubmZ0X2ltcG9ydF9fUXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH0sXG5cbiAgICAnLmFudC13ZWIzLWJsb2NrLXJpZ2h0LWl0ZW0nOiB7XG4gICAgICBtYXJnaW5SaWdodDogMFxuICAgIH0sXG5cbiAgICAnLmFudC1pbnB1dC1zdWZmaXgnOiB7XG4gICAgICBtYXJnaW5SaWdodDogMFxuICAgIH0sXG5cbiAgICAnLm5mdF9pbXBvcnRfX3NlbGVjdGVkX29wdGlvbic6IHtcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRIZWFkaW5nXG4gICAgfSxcblxuICAgICcubmZ0LXR5cGUtaXRlbSc6IHtcbiAgICAgICctLW5mdC10eXBlLWljb24tYmctY29sb3InOiB0b2tlblsnb3JhbmdlLTYnXSxcbiAgICAgICctLW5mdC10eXBlLWljb24tY29sb3InOiB0b2tlbi5jb2xvcldoaXRlLFxuICAgICAgJy0tbmZ0LXNlbGVjdGVkLWljb24tY29sb3InOiB0b2tlbi5jb2xvclN1Y2Nlc3MsXG5cbiAgICAgICcuYW50LXdlYjMtYmxvY2stcmlnaHQtaXRlbSc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDBcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5mdEltcG9ydDtcbiJdLCJuYW1lcyI6WyJfQXNzZXRUeXBlIiwiX2dldE5mdFR5cGVzU3VwcG9ydGVkQnlDaGFpbiIsIl9pc0NoYWluVGVzdE5ldCIsIl9wYXJzZU1ldGFkYXRhRm9yU21hcnRDb250cmFjdEFzc2V0IiwiaXNWYWxpZFN1YnN0cmF0ZUFkZHJlc3MiLCJBZGRyZXNzSW5wdXQiLCJDaGFpblNlbGVjdG9yIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJUb2tlblR5cGVTZWxlY3RvciIsIkRhdGFDb250ZXh0IiwidXNlQ2hhaW5DaGVja2VyIiwidXNlR2V0Q2hhaW5QcmVmaXhCeVNsdWciLCJ1c2VHZXRDb250cmFjdFN1cHBvcnRlZENoYWlucyIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVRyYW5zbGF0aW9uIiwidXBzZXJ0Q3VzdG9tVG9rZW4iLCJ2YWxpZGF0ZUN1c3RvbVRva2VuIiwiY29udmVydEZpZWxkVG9FcnJvciIsImNvbnZlcnRGaWVsZFRvT2JqZWN0IiwicmVmb3JtYXRBZGRyZXNzIiwic2ltcGxlQ2hlY2tGb3JtIiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIlBsdXNDaXJjbGUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwiaXNBZGRyZXNzIiwiaXNFdGhlcmV1bUFkZHJlc3MiLCJnZXROZnRUeXBlU3VwcG9ydGVkIiwiY2hhaW5JbmZvIiwibmZ0VHlwZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwibmZ0VHlwZSIsInB1c2giLCJsYWJlbCIsInRvU3RyaW5nIiwidmFsdWUiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ0Iiwic2hvd05vdGlmaWNhdGlvbiIsIm5hdmlnYXRlIiwiZGF0YUNvbnRleHQiLCJjaGFpbkluZm9NYXAiLCJmb3JtIiwidXNlRm9ybSIsInNlbGVjdGVkQ2hhaW4iLCJ1c2VXYXRjaCIsInNlbGVjdGVkTmZ0VHlwZSIsImNvbGxlY3Rpb25OYW1lIiwiY2hhaW5zIiwiT2JqZWN0IiwidmFsdWVzIiwiY2hhaW5OZXR3b3JrUHJlZml4IiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0Rpc2FibGVkIiwic2V0SXNEaXNhYmxlZCIsIm5hbWVEaXNhYmxlZCIsInNldE5hbWVEaXNhYmxlZCIsIm5mdFR5cGVPcHRpb25zIiwiY2hlY2tDaGFpbiIsImdvQmFjayIsIm9uRmllbGRzQ2hhbmdlIiwiY2hhbmdlZEZpZWxkcyIsImFsbEZpZWxkcyIsImVycm9yIiwiY2hhbmdlcyIsImFsbCIsImFsbEVycm9yIiwiZW1wdHkiLCJlbnRyaWVzIiwic29tZSIsImtleSIsImNoYWluIiwidHlwZSIsImxlbmd0aCIsInNldEZpZWxkVmFsdWUiLCJyZXNldEZpZWxkcyIsImNvbnRyYWN0QWRkcmVzcyIsIm9uU3VibWl0IiwiZm9ybVZhbHVlcyIsInN5bWJvbCIsImZvcm1hdHRlZENvbGxlY3Rpb25OYW1lIiwicmVwbGFjZUFsbCIsInRvVXBwZXJDYXNlIiwicmVmb3JtYXR0ZWRBZGRyZXNzIiwic2V0VGltZW91dCIsIm9yaWdpbkNoYWluIiwic2x1ZyIsIm5hbWUiLCJkZWNpbWFscyIsInByaWNlSWQiLCJtaW5BbW91bnQiLCJhc3NldFR5cGUiLCJtZXRhZGF0YSIsIm11bHRpQ2hhaW5Bc3NldCIsImhhc1ZhbHVlIiwiaWNvbiIsInRoZW4iLCJtZXNzYWdlIiwiY2F0Y2giLCJmaW5hbGx5IiwiY29sbGVjdGlvbk5hbWVWYWxpZGF0b3IiLCJydWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZWRWYWx1ZSIsIkVycm9yIiwiY29udHJhY3RBZGRyZXNzVmFsaWRhdG9yIiwiaXNWYWxpZEV2bUNvbnRyYWN0IiwiRVJDNzIxIiwiaW5jbHVkZXMiLCJpc1ZhbGlkV2FzbUNvbnRyYWN0IiwiUFNQMzQiLCJ2YWxpZGF0aW9uUmVzdWx0IiwiaXNFeGlzdCIsImNvbnRyYWN0RXJyb3IiLCJhd2FpdFN0b3JlcyIsImRpc2FibGVkIiwib25DbGljayIsInN1Ym1pdCIsImNoaWxkcmVuIiwidmFsaWRhdG9yIiwiTmZ0SW1wb3J0IiwidGhlbWUiLCJ0b2tlbiIsIm1hcmdpblRvcCIsIm1hcmdpbiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZyIsInBhZGRpbmdSaWdodCIsImN1cnNvciIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJjb2xvclRleHRIZWFkaW5nIiwiY29sb3JXaGl0ZSIsImNvbG9yU3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=