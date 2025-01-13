"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_Tokens_FungibleTokenImport_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Tokens/FungibleTokenImport.tsx":
/*!******************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Tokens/FungibleTokenImport.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/chain-list/types */ "../../node_modules/@subwallet/chain-list/types.js");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/network-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/setting-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/select-modal/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/row/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/col/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/field/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui_es_sw_avatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui/es/sw-avatar */ "../../node_modules/@subwallet/react-ui/es/sw-avatar/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Coin.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlusCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


















function getTokenTypeSupported(chainInfo) {
  if (!chainInfo) {
    return [];
  }
  const tokenTypes = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_8__._getTokenTypesSupportedByChain)(chainInfo);
  const result = [];
  tokenTypes.forEach(tokenType => {
    result.push({
      label: tokenType.toString(),
      value: tokenType
    });
  });
  return result;
}
const renderEmpty = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.GeneralEmptyList, {});
function Component({
  className = ''
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const {
    goBack
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useDefaultNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const logosMaps = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.settings.logoMaps.chainLogoMap);
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
  const showNotification = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useNotification)();
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const chainInfoMap = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetContractSupportedChains)();
  const [selectedChain, setSelectedChain] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [selectedTokenType, setSelectedTokenType] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [contractValidation, setContractValidation] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    status: ''
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const chainChecker = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useChainChecker)();
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [symbol, setSymbol] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [decimals, setDecimals] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(-1);
  const chainNetworkPrefix = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetChainPrefixBySlug)(selectedChain);
  const tokenTypeOptions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return getTokenTypeSupported(chainInfoMap[selectedChain]);
  }, [chainInfoMap, selectedChain]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    var _formRef$current;
    const formValues = (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.getFieldsValue();
    const reformattedAddress = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.reformatAddress)(formValues.contractAddress, chainNetworkPrefix);
    setLoading(true);
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.upsertCustomToken)({
      originChain: formValues.chain,
      slug: '',
      name,
      symbol,
      decimals,
      priceId: formValues.priceId || null,
      minAmount: null,
      assetType: formValues.type,
      metadata: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_8__._parseMetadataForSmartContractAsset)(reformattedAddress),
      multiChainAsset: null,
      hasValue: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_8__._isChainTestNet)(chainInfoMap[formValues.chain]),
      icon: 'default.png'
    }).then(result => {
      setLoading(false);
      if (result) {
        showNotification({
          message: t('Imported token successfully')
        });
        goBack();
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
  }, [chainNetworkPrefix, name, symbol, decimals, chainInfoMap, showNotification, t, goBack]);
  const isSubmitDisabled = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    return contractValidation.status === '' || contractValidation.status === 'error';
  }, [contractValidation.status]);
  const contractAddressValidator = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((rule, contractAddress) => {
    return new Promise((resolve, reject) => {
      const isValidEvmContract = [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_10__._AssetType.ERC20].includes(selectedTokenType) && (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_11__.isEthereumAddress)(contractAddress);
      const isValidWasmContract = [_subwallet_chain_list_types__WEBPACK_IMPORTED_MODULE_10__._AssetType.PSP22].includes(selectedTokenType) && (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.isValidSubstrateAddress)(contractAddress);
      const reformattedAddress = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.reformatAddress)(contractAddress, chainNetworkPrefix);
      if (isValidEvmContract || isValidWasmContract) {
        setLoading(true);
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.validateCustomToken)({
          contractAddress: reformattedAddress,
          originChain: selectedChain,
          type: selectedTokenType
        }).then(validationResult => {
          setLoading(false);
          if (validationResult.isExist) {
            setContractValidation({
              status: 'error',
              message: t('Existed token')
            });
            resolve();
          }
          if (validationResult.contractError) {
            setContractValidation({
              status: 'error',
              message: t('Error validating this token')
            });
            resolve();
          }
          if (!validationResult.isExist && !validationResult.contractError) {
            setContractValidation({
              status: 'success'
            });
            setSymbol(validationResult.symbol);
            setDecimals(validationResult.decimals);
            setName(validationResult.name);
            resolve();
          }
        }).catch(() => {
          setLoading(false);
          setContractValidation({
            status: 'error',
            message: t('Error validating this token')
          });
          resolve();
        });
      } else {
        setContractValidation({
          status: 'error'
        });
        reject(t('Invalid contract address'));
      }
    });
  }, [chainNetworkPrefix, selectedChain, selectedTokenType, t]);
  const originChainLogo = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
      height: token.fontSizeXL,
      shape: 'circle',
      src: logosMaps[selectedChain],
      width: token.fontSizeXL
    });
  }, [logosMaps, selectedChain, token.fontSizeXL]);
  const onChangeChain = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(value => {
    var _formRef$current2, _formRef$current5;
    (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 ? void 0 : _formRef$current2.setFieldValue('chain', value);
    const tokenTypes = getTokenTypeSupported(chainInfoMap[value]);
    if (tokenTypes.length === 1) {
      var _formRef$current3;
      (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 ? void 0 : _formRef$current3.setFieldValue('type', tokenTypes[0].value);
      setSelectedTokenType(tokenTypes[0].value);
    } else {
      var _formRef$current4;
      (_formRef$current4 = formRef.current) === null || _formRef$current4 === void 0 ? void 0 : _formRef$current4.resetFields(['type']);
      setSelectedTokenType('');
    }
    (_formRef$current5 = formRef.current) === null || _formRef$current5 === void 0 ? void 0 : _formRef$current5.resetFields(['contractAddress']);
    setSelectedChain(value);
    setSymbol('');
    setDecimals(-1);
    setName('');
    setContractValidation({
      status: ''
    });
  }, [chainInfoMap]);
  const onChangeTokenType = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(value => {
    var _formRef$current7;
    if (selectedTokenType !== value) {
      var _formRef$current6;
      (_formRef$current6 = formRef.current) === null || _formRef$current6 === void 0 ? void 0 : _formRef$current6.resetFields(['contractAddress']);
      setSymbol('');
      setDecimals(-1);
      setName('');
    }
    (_formRef$current7 = formRef.current) === null || _formRef$current7 === void 0 ? void 0 : _formRef$current7.setFieldValue('type', value);
    setSelectedTokenType(value);
  }, [selectedTokenType]);
  const searchChain = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((chainInfo, searchText) => {
    const searchTextLowerCase = searchText.toLowerCase();
    return chainInfo.name.toLowerCase().includes(searchTextLowerCase);
  }, []);
  const renderChainOption = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((chainInfo, selected) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: chainInfo.name,
      networkKey: chainInfo.slug,
      networkMainLogoShape: 'circle',
      networkMainLogoSize: 28,
      rightItem: selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
        customSize: '20px',
        iconColor: token.colorSuccess,
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
        type: "phosphor",
        weight: 'fill'
      })
    });
  }, [token]);
  const renderChainSelected = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(chainInfo => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: 'import_token__selected_option',
      children: chainInfo.name
    });
  }, []);
  const renderTokenTypeOption = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((tokenTypeOption, selected) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: "token-type-item",
      leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
        backgroundColor: "var(--token-type-icon-bg-color)",
        iconColor: "var(--token-type-icon-color)",
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
        size: "sm",
        weight: "fill"
      }),
      name: tokenTypeOption.label,
      rightItem: selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
        iconColor: "var(--token-selected-icon-color)",
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
        size: "sm",
        weight: "fill"
      })
    });
  }, []);
  const renderNftTypeSelected = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(tokenType => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: 'token_import__selected_option',
      children: tokenType.label
    });
  }, []);
  const tokenDecimalsPrefix = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    var _formRef$current8;
    const contractAddress = (_formRef$current8 = formRef.current) === null || _formRef$current8 === void 0 ? void 0 : _formRef$current8.getFieldValue('contractAddress');
    const theme = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_11__.isEthereumAddress)(contractAddress) ? 'ethereum' : 'polkadot';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui_es_sw_avatar__WEBPACK_IMPORTED_MODULE_20__["default"], {
      identPrefix: 42,
      size: token.fontSizeXL,
      theme: theme,
      value: contractAddress
    });
  }, [token.fontSizeXL]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    chainChecker(selectedChain);
  }, [chainChecker, selectedChain]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `import_token ${className}`,
    resolve: dataContext.awaitStores(['assetRegistry']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: goBack,
      rightFooterButton: {
        block: true,
        disabled: isSubmitDisabled(),
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"],
          weight: "fill"
        }),
        loading,
        onClick: onSubmit,
        children: t('Import token')
      },
      title: t('Import token'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: 'import_token__container',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
          initialValues: {
            contractAddress: '',
            chain: '',
            type: ''
          },
          name: 'token-import',
          ref: formRef,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
            name: 'chain',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
              className: className,
              id: "import-nft-select-chain",
              itemKey: 'slug',
              items: Object.values(chainInfoMap),
              label: t('Network'),
              onSelect: onChangeChain,
              placeholder: t('Select network'),
              prefix: selectedChain !== '' && originChainLogo(),
              renderItem: renderChainOption,
              renderSelected: renderChainSelected,
              renderWhenEmpty: renderEmpty,
              searchFunction: searchChain,
              searchMinCharactersCount: 2,
              searchPlaceholder: t('Search network'),
              selected: selectedChain,
              title: t('Select network')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
            name: 'type',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
              className: className,
              disabled: selectedChain === '',
              id: "import-token-select-type",
              itemKey: 'value',
              items: tokenTypeOptions,
              label: t('Token type'),
              onSelect: onChangeTokenType,
              placeholder: t('Select token type'),
              renderItem: renderTokenTypeOption,
              renderSelected: renderNftTypeSelected,
              selected: selectedTokenType,
              title: t('Select token type')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
            name: 'contractAddress',
            rules: [{
              validator: contractAddressValidator
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AddressInput, {
              ...(!!contractValidation.status && contractValidation.status !== 'validating' ? {
                statusHelp: contractValidation.message,
                status: contractValidation.status
              } : {}),
              addressPrefix: chainNetworkPrefix,
              disabled: selectedTokenType === '',
              label: t('Contract address'),
              showScanner: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
            className: 'token-symbol-decimals',
            gutter: token.margin,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
              span: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
                content: symbol,
                placeholder: t('Symbol'),
                prefix: tokenDecimalsPrefix(),
                tooltip: t('Symbol'),
                tooltipPlacement: 'topLeft'
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
              span: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
                content: decimals === -1 ? '' : decimals,
                placeholder: t('Decimals'),
                tooltip: t('Decimals'),
                tooltipPlacement: 'topLeft'
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
            name: 'priceId',
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__["default"], {
              disabled: selectedTokenType === '',
              placeholder: t('Price ID'),
              tooltip: t('Price ID')
            })
          })]
        })
      })
    })
  });
}
const FungibleTokenImport = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(Component).withConfig({
  displayName: "FungibleTokenImport",
  componentId: "sc-1qamwgi-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.import_token__container': {
      paddingTop: token.padding,
      marginLeft: token.margin,
      marginRight: token.margin
    },
    '.import_token__selected_option': {
      color: token.colorTextHeading
    },
    '.ant-field-container.ant-field-size-medium .ant-field-wrapper': {
      padding: token.paddingSM
    },
    '.token-symbol-decimals': {
      marginBottom: token.margin
    },
    '.token-type-item': {
      '--token-type-icon-bg-color': token['orange-6'],
      '--token-type-icon-color': token.colorWhite,
      '--token-selected-icon-color': token.colorSuccess,
      '.ant-web3-block-right-item': {
        marginRight: 0
      }
    },
    '.token_import__selected_option': {
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorText
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FungibleTokenImport);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfVG9rZW5zX0Z1bmdpYmxlVG9rZW5JbXBvcnRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRXFFO0FBQ3lGO0FBQ3BGO0FBQ29DO0FBQzlCO0FBQ2tHO0FBQ2xGO0FBRzNCO0FBQ2tFO0FBRS9FO0FBQ087QUFFOEI7QUFDbkQ7QUFDVztBQUVLO0FBQUE7QUFBQTtBQXFCMUQsU0FBUzZDLHFCQUFxQixDQUFFQyxTQUFxQixFQUFFO0VBQ3JELElBQUksQ0FBQ0EsU0FBUyxFQUFFO0lBQ2QsT0FBTyxFQUFFO0VBQ1g7RUFFQSxNQUFNQyxVQUFVLEdBQUc5QyxzSEFBOEIsQ0FBQzZDLFNBQVMsQ0FBQztFQUM1RCxNQUFNRSxNQUF5QixHQUFHLEVBQUU7RUFFcENELFVBQVUsQ0FBQ0UsT0FBTyxDQUFFQyxTQUFTLElBQUs7SUFDaENGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDO01BQ1ZDLEtBQUssRUFBRUYsU0FBUyxDQUFDRyxRQUFRLEVBQUU7TUFDM0JDLEtBQUssRUFBRUo7SUFDVCxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFFRixPQUFPRixNQUFNO0FBQ2Y7QUFFQSxNQUFNTyxXQUFXLEdBQUcsbUJBQU0sdURBQUMscUZBQWdCLEtBQUc7QUFFOUMsU0FBU0MsU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEUsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBRzNDLGtGQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFNEM7RUFBTyxDQUFDLEdBQUdoRCxzRkFBa0IsRUFBRTtFQUN2QyxNQUFNaUQsV0FBVyxHQUFHeEIsaURBQVUsQ0FBQzNCLDBGQUFXLENBQUM7RUFDM0MsTUFBTW9ELFNBQVMsR0FBR3BCLHdEQUFXLENBQUVxQixLQUFnQixJQUFLQSxLQUFLLENBQUNDLFFB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bmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1NldHRpbmdzL1Rva2Vucy9GdW5naWJsZVRva2VuSW1wb3J0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgX0Fzc2V0VHlwZSwgX0NoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvY2hhaW4tbGlzdC90eXBlcyc7XG5pbXBvcnQgeyBfZ2V0VG9rZW5UeXBlc1N1cHBvcnRlZEJ5Q2hhaW4sIF9pc0NoYWluVGVzdE5ldCwgX3BhcnNlTWV0YWRhdGFGb3JTbWFydENvbnRyYWN0QXNzZXQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgaXNWYWxpZFN1YnN0cmF0ZUFkZHJlc3MgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IEFkZHJlc3NJbnB1dCwgR2VuZXJhbEVtcHR5TGlzdCwgTGF5b3V0LCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29udGV4dHMvRGF0YUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ2hhaW5DaGVja2VyLCB1c2VEZWZhdWx0TmF2aWdhdGUsIHVzZUdldENoYWluUHJlZml4QnlTbHVnLCB1c2VHZXRDb250cmFjdFN1cHBvcnRlZENoYWlucywgdXNlTm90aWZpY2F0aW9uLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgdXBzZXJ0Q3VzdG9tVG9rZW4sIHZhbGlkYXRlQ3VzdG9tVG9rZW4gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcyc7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVQcm9wcywgVmFsaWRhdGVTdGF0dXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IHJlZm9ybWF0QWRkcmVzcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgQmFja2dyb3VuZEljb24sIENvbCwgRmllbGQsIEZvcm0sIEljb24sIEltYWdlLCBJbnB1dCwgTmV0d29ya0l0ZW0sIFJvdywgU2VsZWN0TW9kYWwsIFNldHRpbmdJdGVtIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgeyBGb3JtSW5zdGFuY2UgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpL2VzL2Zvcm0vaG9va3MvdXNlRm9ybSc7XG5pbXBvcnQgU3dBdmF0YXIgZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aS9lcy9zdy1hdmF0YXInO1xuaW1wb3J0IHsgQ2hlY2tDaXJjbGUsIENvaW4sIFBsdXNDaXJjbGUgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgeyBSdWxlT2JqZWN0IH0gZnJvbSAncmMtZmllbGQtZm9ybS9saWIvaW50ZXJmYWNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzXG5cbmludGVyZmFjZSBUb2tlbkltcG9ydEZvcm1UeXBlIHtcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmcsXG4gIGNoYWluOiBzdHJpbmcsXG4gIHR5cGU6IF9Bc3NldFR5cGUsXG4gIHByaWNlSWQ6IHN0cmluZyxcbn1cblxuaW50ZXJmYWNlIFZhbGlkYXRpb25JbmZvIHtcbiAgc3RhdHVzOiBWYWxpZGF0ZVN0YXR1cyxcbiAgbWVzc2FnZT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgVG9rZW5UeXBlT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZyxcbiAgdmFsdWU6IF9Bc3NldFR5cGVcbn1cblxuZnVuY3Rpb24gZ2V0VG9rZW5UeXBlU3VwcG9ydGVkIChjaGFpbkluZm86IF9DaGFpbkluZm8pIHtcbiAgaWYgKCFjaGFpbkluZm8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCB0b2tlblR5cGVzID0gX2dldFRva2VuVHlwZXNTdXBwb3J0ZWRCeUNoYWluKGNoYWluSW5mbyk7XG4gIGNvbnN0IHJlc3VsdDogVG9rZW5UeXBlT3B0aW9uW10gPSBbXTtcblxuICB0b2tlblR5cGVzLmZvckVhY2goKHRva2VuVHlwZSkgPT4ge1xuICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgIGxhYmVsOiB0b2tlblR5cGUudG9TdHJpbmcoKSxcbiAgICAgIHZhbHVlOiB0b2tlblR5cGVcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgcmVuZGVyRW1wdHkgPSAoKSA9PiA8R2VuZXJhbEVtcHR5TGlzdCAvPjtcblxuZnVuY3Rpb24gQ29tcG9uZW50ICh7IGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBnb0JhY2sgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuICBjb25zdCBsb2dvc01hcHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MubG9nb01hcHMuY2hhaW5Mb2dvTWFwKTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcbiAgY29uc3Qgc2hvd05vdGlmaWNhdGlvbiA9IHVzZU5vdGlmaWNhdGlvbigpO1xuXG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8Rm9ybUluc3RhbmNlPFRva2VuSW1wb3J0Rm9ybVR5cGU+PihudWxsKTtcbiAgY29uc3QgY2hhaW5JbmZvTWFwID0gdXNlR2V0Q29udHJhY3RTdXBwb3J0ZWRDaGFpbnMoKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhaW4sIHNldFNlbGVjdGVkQ2hhaW5dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtzZWxlY3RlZFRva2VuVHlwZSwgc2V0U2VsZWN0ZWRUb2tlblR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtjb250cmFjdFZhbGlkYXRpb24sIHNldENvbnRyYWN0VmFsaWRhdGlvbl0gPSB1c2VTdGF0ZTxWYWxpZGF0aW9uSW5mbz4oeyBzdGF0dXM6ICcnIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hhaW5DaGVja2VyID0gdXNlQ2hhaW5DaGVja2VyKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N5bWJvbCwgc2V0U3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2RlY2ltYWxzLCBzZXREZWNpbWFsc10gPSB1c2VTdGF0ZSgtMSk7XG4gIGNvbnN0IGNoYWluTmV0d29ya1ByZWZpeCA9IHVzZUdldENoYWluUHJlZml4QnlTbHVnKHNlbGVjdGVkQ2hhaW4pO1xuXG4gIGNvbnN0IHRva2VuVHlwZU9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gZ2V0VG9rZW5UeXBlU3VwcG9ydGVkKGNoYWluSW5mb01hcFtzZWxlY3RlZENoYWluXSk7XG4gIH0sIFtjaGFpbkluZm9NYXAsIHNlbGVjdGVkQ2hhaW5dKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBmb3JtVmFsdWVzID0gZm9ybVJlZi5jdXJyZW50Py5nZXRGaWVsZHNWYWx1ZSgpIGFzIFRva2VuSW1wb3J0Rm9ybVR5cGU7XG4gICAgY29uc3QgcmVmb3JtYXR0ZWRBZGRyZXNzID0gcmVmb3JtYXRBZGRyZXNzKGZvcm1WYWx1ZXMuY29udHJhY3RBZGRyZXNzLCBjaGFpbk5ldHdvcmtQcmVmaXgpO1xuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHVwc2VydEN1c3RvbVRva2VuKHtcbiAgICAgIG9yaWdpbkNoYWluOiBmb3JtVmFsdWVzLmNoYWluLFxuICAgICAgc2x1ZzogJycsXG4gICAgICBuYW1lLFxuICAgICAgc3ltYm9sLFxuICAgICAgZGVjaW1hbHMsXG4gICAgICBwcmljZUlkOiBmb3JtVmFsdWVzLnByaWNlSWQgfHwgbnVsbCxcbiAgICAgIG1pbkFtb3VudDogbnVsbCxcbiAgICAgIGFzc2V0VHlwZTogZm9ybVZhbHVlcy50eXBlLFxuICAgICAgbWV0YWRhdGE6IF9wYXJzZU1ldGFkYXRhRm9yU21hcnRDb250cmFjdEFzc2V0KHJlZm9ybWF0dGVkQWRkcmVzcyksXG4gICAgICBtdWx0aUNoYWluQXNzZXQ6IG51bGwsXG4gICAgICBoYXNWYWx1ZTogX2lzQ2hhaW5UZXN0TmV0KGNoYWluSW5mb01hcFtmb3JtVmFsdWVzLmNoYWluXSksXG4gICAgICBpY29uOiAnZGVmYXVsdC5wbmcnXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogdCgnSW1wb3J0ZWQgdG9rZW4gc3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBnb0JhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0FuIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgdHJ5IGFnYWluJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgbWVzc2FnZTogdCgnQW4gZXJyb3Igb2NjdXJyZWQsIHBsZWFzZSB0cnkgYWdhaW4nKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9LCBbY2hhaW5OZXR3b3JrUHJlZml4LCBuYW1lLCBzeW1ib2wsIGRlY2ltYWxzLCBjaGFpbkluZm9NYXAsIHNob3dOb3RpZmljYXRpb24sIHQsIGdvQmFja10pO1xuXG4gIGNvbnN0IGlzU3VibWl0RGlzYWJsZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIGNvbnRyYWN0VmFsaWRhdGlvbi5zdGF0dXMgPT09ICcnIHx8IGNvbnRyYWN0VmFsaWRhdGlvbi5zdGF0dXMgPT09ICdlcnJvcic7XG4gIH0sIFtjb250cmFjdFZhbGlkYXRpb24uc3RhdHVzXSk7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzVmFsaWRhdG9yID0gdXNlQ2FsbGJhY2soKHJ1bGU6IFJ1bGVPYmplY3QsIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGlzVmFsaWRFdm1Db250cmFjdCA9IFtfQXNzZXRUeXBlLkVSQzIwXS5pbmNsdWRlcyhzZWxlY3RlZFRva2VuVHlwZSBhcyBfQXNzZXRUeXBlKSAmJiBpc0V0aGVyZXVtQWRkcmVzcyhjb250cmFjdEFkZHJlc3MpO1xuICAgICAgY29uc3QgaXNWYWxpZFdhc21Db250cmFjdCA9IFtfQXNzZXRUeXBlLlBTUDIyXS5pbmNsdWRlcyhzZWxlY3RlZFRva2VuVHlwZSBhcyBfQXNzZXRUeXBlKSAmJiBpc1ZhbGlkU3Vic3RyYXRlQWRkcmVzcyhjb250cmFjdEFkZHJlc3MpO1xuICAgICAgY29uc3QgcmVmb3JtYXR0ZWRBZGRyZXNzID0gcmVmb3JtYXRBZGRyZXNzKGNvbnRyYWN0QWRkcmVzcywgY2hhaW5OZXR3b3JrUHJlZml4KTtcblxuICAgICAgaWYgKGlzVmFsaWRFdm1Db250cmFjdCB8fCBpc1ZhbGlkV2FzbUNvbnRyYWN0KSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHZhbGlkYXRlQ3VzdG9tVG9rZW4oe1xuICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogcmVmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgIG9yaWdpbkNoYWluOiBzZWxlY3RlZENoYWluLFxuICAgICAgICAgIHR5cGU6IHNlbGVjdGVkVG9rZW5UeXBlIGFzIF9Bc3NldFR5cGVcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigodmFsaWRhdGlvblJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0LmlzRXhpc3QpIHtcbiAgICAgICAgICAgICAgc2V0Q29udHJhY3RWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnRXhpc3RlZCB0b2tlbicpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0LmNvbnRyYWN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgc2V0Q29udHJhY3RWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnRXJyb3IgdmFsaWRhdGluZyB0aGlzIHRva2VuJylcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LmlzRXhpc3QgJiYgIXZhbGlkYXRpb25SZXN1bHQuY29udHJhY3RFcnJvcikge1xuICAgICAgICAgICAgICBzZXRDb250cmFjdFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBzZXRTeW1ib2wodmFsaWRhdGlvblJlc3VsdC5zeW1ib2wpO1xuICAgICAgICAgICAgICBzZXREZWNpbWFscyh2YWxpZGF0aW9uUmVzdWx0LmRlY2ltYWxzKTtcbiAgICAgICAgICAgICAgc2V0TmFtZSh2YWxpZGF0aW9uUmVzdWx0Lm5hbWUpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRDb250cmFjdFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0Vycm9yIHZhbGlkYXRpbmcgdGhpcyB0b2tlbicpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvbnRyYWN0VmFsaWRhdGlvbih7XG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICAgIH0pO1xuICAgICAgICByZWplY3QodCgnSW52YWxpZCBjb250cmFjdCBhZGRyZXNzJykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbY2hhaW5OZXR3b3JrUHJlZml4LCBzZWxlY3RlZENoYWluLCBzZWxlY3RlZFRva2VuVHlwZSwgdF0pO1xuXG4gIGNvbnN0IG9yaWdpbkNoYWluTG9nbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEltYWdlXG4gICAgICAgIGhlaWdodD17dG9rZW4uZm9udFNpemVYTH1cbiAgICAgICAgc2hhcGU9eydjaXJjbGUnfVxuICAgICAgICBzcmM9e2xvZ29zTWFwc1tzZWxlY3RlZENoYWluXX1cbiAgICAgICAgd2lkdGg9e3Rva2VuLmZvbnRTaXplWEx9XG4gICAgICAvPlxuICAgICk7XG4gIH0sIFtsb2dvc01hcHMsIHNlbGVjdGVkQ2hhaW4sIHRva2VuLmZvbnRTaXplWExdKTtcblxuICBjb25zdCBvbkNoYW5nZUNoYWluID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBmb3JtUmVmLmN1cnJlbnQ/LnNldEZpZWxkVmFsdWUoJ2NoYWluJywgdmFsdWUpO1xuICAgIGNvbnN0IHRva2VuVHlwZXMgPSBnZXRUb2tlblR5cGVTdXBwb3J0ZWQoY2hhaW5JbmZvTWFwW3ZhbHVlXSk7XG5cbiAgICBpZiAodG9rZW5UeXBlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZvcm1SZWYuY3VycmVudD8uc2V0RmllbGRWYWx1ZSgndHlwZScsIHRva2VuVHlwZXNbMF0udmFsdWUpO1xuICAgICAgc2V0U2VsZWN0ZWRUb2tlblR5cGUodG9rZW5UeXBlc1swXS52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1SZWYuY3VycmVudD8ucmVzZXRGaWVsZHMoWyd0eXBlJ10pO1xuICAgICAgc2V0U2VsZWN0ZWRUb2tlblR5cGUoJycpO1xuICAgIH1cblxuICAgIGZvcm1SZWYuY3VycmVudD8ucmVzZXRGaWVsZHMoWydjb250cmFjdEFkZHJlc3MnXSk7XG4gICAgc2V0U2VsZWN0ZWRDaGFpbih2YWx1ZSk7XG4gICAgc2V0U3ltYm9sKCcnKTtcbiAgICBzZXREZWNpbWFscygtMSk7XG4gICAgc2V0TmFtZSgnJyk7XG4gICAgc2V0Q29udHJhY3RWYWxpZGF0aW9uKHsgc3RhdHVzOiAnJyB9KTtcbiAgfSwgW2NoYWluSW5mb01hcF0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVG9rZW5UeXBlID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRUb2tlblR5cGUgIT09IHZhbHVlKSB7XG4gICAgICBmb3JtUmVmLmN1cnJlbnQ/LnJlc2V0RmllbGRzKFsnY29udHJhY3RBZGRyZXNzJ10pO1xuICAgICAgc2V0U3ltYm9sKCcnKTtcbiAgICAgIHNldERlY2ltYWxzKC0xKTtcbiAgICAgIHNldE5hbWUoJycpO1xuICAgIH1cblxuICAgIGZvcm1SZWYuY3VycmVudD8uc2V0RmllbGRWYWx1ZSgndHlwZScsIHZhbHVlIGFzIF9Bc3NldFR5cGUpO1xuICAgIHNldFNlbGVjdGVkVG9rZW5UeXBlKHZhbHVlKTtcbiAgfSwgW3NlbGVjdGVkVG9rZW5UeXBlXSk7XG5cbiAgY29uc3Qgc2VhcmNoQ2hhaW4gPSB1c2VDYWxsYmFjaygoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCBzZWFyY2hUZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0TG93ZXJDYXNlID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGNoYWluSW5mby5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyQ2hhaW5PcHRpb24gPSB1c2VDYWxsYmFjaygoY2hhaW5JbmZvOiBfQ2hhaW5JbmZvLCBzZWxlY3RlZDogYm9vbGVhbikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TmV0d29ya0l0ZW1cbiAgICAgICAgbmFtZT17Y2hhaW5JbmZvLm5hbWV9XG4gICAgICAgIG5ldHdvcmtLZXk9e2NoYWluSW5mby5zbHVnfVxuICAgICAgICBuZXR3b3JrTWFpbkxvZ29TaGFwZT17J2NpcmNsZSd9XG4gICAgICAgIG5ldHdvcmtNYWluTG9nb1NpemU9ezI4fVxuICAgICAgICByaWdodEl0ZW09e3NlbGVjdGVkICYmIDxJY29uXG4gICAgICAgICAgY3VzdG9tU2l6ZT17JzIwcHgnfVxuICAgICAgICAgIGljb25Db2xvcj17dG9rZW4uY29sb3JTdWNjZXNzfVxuICAgICAgICAgIHBob3NwaG9ySWNvbj17Q2hlY2tDaXJjbGV9XG4gICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgd2VpZ2h0PXsnZmlsbCd9XG4gICAgICAgIC8+fVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbdG9rZW5dKTtcblxuICBjb25zdCByZW5kZXJDaGFpblNlbGVjdGVkID0gdXNlQ2FsbGJhY2soKGNoYWluSW5mbzogX0NoYWluSW5mbykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2ltcG9ydF90b2tlbl9fc2VsZWN0ZWRfb3B0aW9uJ30+e2NoYWluSW5mby5uYW1lfTwvZGl2PlxuICAgICk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJUb2tlblR5cGVPcHRpb24gPSB1c2VDYWxsYmFjaygodG9rZW5UeXBlT3B0aW9uOiBUb2tlblR5cGVPcHRpb24sIHNlbGVjdGVkOiBib29sZWFuKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZXR0aW5nSXRlbVxuICAgICAgICBjbGFzc05hbWU9J3Rva2VuLXR5cGUtaXRlbSdcbiAgICAgICAgbGVmdEl0ZW1JY29uPXsoXG4gICAgICAgICAgPEJhY2tncm91bmRJY29uXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9J3ZhcigtLXRva2VuLXR5cGUtaWNvbi1iZy1jb2xvciknXG4gICAgICAgICAgICBpY29uQ29sb3I9J3ZhcigtLXRva2VuLXR5cGUtaWNvbi1jb2xvciknXG4gICAgICAgICAgICBwaG9zcGhvckljb249e0NvaW59XG4gICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICBuYW1lPXt0b2tlblR5cGVPcHRpb24ubGFiZWx9XG4gICAgICAgIHJpZ2h0SXRlbT17XG4gICAgICAgICAgc2VsZWN0ZWQgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBpY29uQ29sb3I9J3ZhcigtLXRva2VuLXNlbGVjdGVkLWljb24tY29sb3IpJ1xuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17Q2hlY2tDaXJjbGV9XG4gICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJOZnRUeXBlU2VsZWN0ZWQgPSB1c2VDYWxsYmFjaygodG9rZW5UeXBlOiBUb2tlblR5cGVPcHRpb24pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyd0b2tlbl9pbXBvcnRfX3NlbGVjdGVkX29wdGlvbid9Pnt0b2tlblR5cGUubGFiZWx9PC9kaXY+XG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRva2VuRGVjaW1hbHNQcmVmaXggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gZm9ybVJlZi5jdXJyZW50Py5nZXRGaWVsZFZhbHVlKCdjb250cmFjdEFkZHJlc3MnKSBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCB0aGVtZSA9IGlzRXRoZXJldW1BZGRyZXNzKGNvbnRyYWN0QWRkcmVzcykgPyAnZXRoZXJldW0nIDogJ3BvbGthZG90JztcblxuICAgIHJldHVybiAoXG4gICAgICA8U3dBdmF0YXJcbiAgICAgICAgaWRlbnRQcmVmaXg9ezQyfVxuICAgICAgICBzaXplPXt0b2tlbi5mb250U2l6ZVhMfVxuICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgIHZhbHVlPXtjb250cmFjdEFkZHJlc3N9XG4gICAgICAvPlxuICAgICk7XG4gIH0sIFt0b2tlbi5mb250U2l6ZVhMXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGFpbkNoZWNrZXIoc2VsZWN0ZWRDaGFpbik7XG4gIH0sIFtjaGFpbkNoZWNrZXIsIHNlbGVjdGVkQ2hhaW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtgaW1wb3J0X3Rva2VuICR7Y2xhc3NOYW1lfWB9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ2Fzc2V0UmVnaXN0cnknXSl9XG4gICAgPlxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICBvbkJhY2s9e2dvQmFja31cbiAgICAgICAgcmlnaHRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICBibG9jazogdHJ1ZSxcbiAgICAgICAgICBkaXNhYmxlZDogaXNTdWJtaXREaXNhYmxlZCgpLFxuICAgICAgICAgIGljb246IChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17UGx1c0NpcmNsZX1cbiAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICApLFxuICAgICAgICAgIGxvYWRpbmcsXG4gICAgICAgICAgb25DbGljazogb25TdWJtaXQsXG4gICAgICAgICAgY2hpbGRyZW46IHQoJ0ltcG9ydCB0b2tlbicpXG4gICAgICAgIH19XG4gICAgICAgIHRpdGxlPXt0PHN0cmluZz4oJ0ltcG9ydCB0b2tlbicpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ltcG9ydF90b2tlbl9fY29udGFpbmVyJ30+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgY2hhaW46ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG5hbWU9eyd0b2tlbi1pbXBvcnQnfVxuICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17J2NoYWluJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlbGVjdE1vZGFsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgaWQ9J2ltcG9ydC1uZnQtc2VsZWN0LWNoYWluJ1xuICAgICAgICAgICAgICAgIGl0ZW1LZXk9eydzbHVnJ31cbiAgICAgICAgICAgICAgICBpdGVtcz17T2JqZWN0LnZhbHVlcyhjaGFpbkluZm9NYXApfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0PHN0cmluZz4oJ05ldHdvcmsnKX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17b25DaGFuZ2VDaGFpbn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnU2VsZWN0IG5ldHdvcmsnKX1cbiAgICAgICAgICAgICAgICBwcmVmaXg9e3NlbGVjdGVkQ2hhaW4gIT09ICcnICYmIG9yaWdpbkNoYWluTG9nbygpfVxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckNoYWluT3B0aW9ufVxuICAgICAgICAgICAgICAgIHJlbmRlclNlbGVjdGVkPXtyZW5kZXJDaGFpblNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIHJlbmRlcldoZW5FbXB0eT17cmVuZGVyRW1wdHl9XG4gICAgICAgICAgICAgICAgc2VhcmNoRnVuY3Rpb249e3NlYXJjaENoYWlufVxuICAgICAgICAgICAgICAgIHNlYXJjaE1pbkNoYXJhY3RlcnNDb3VudD17Mn1cbiAgICAgICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dCgnU2VhcmNoIG5ldHdvcmsnKX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRDaGFpbn1cbiAgICAgICAgICAgICAgICB0aXRsZT17dCgnU2VsZWN0IG5ldHdvcmsnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9eyd0eXBlJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlbGVjdE1vZGFsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQ2hhaW4gPT09ICcnfVxuICAgICAgICAgICAgICAgIGlkPSdpbXBvcnQtdG9rZW4tc2VsZWN0LXR5cGUnXG4gICAgICAgICAgICAgICAgaXRlbUtleT17J3ZhbHVlJ31cbiAgICAgICAgICAgICAgICBpdGVtcz17dG9rZW5UeXBlT3B0aW9uc31cbiAgICAgICAgICAgICAgICBsYWJlbD17dDxzdHJpbmc+KCdUb2tlbiB0eXBlJyl9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e29uQ2hhbmdlVG9rZW5UeXBlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdTZWxlY3QgdG9rZW4gdHlwZScpfVxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlclRva2VuVHlwZU9wdGlvbn1cbiAgICAgICAgICAgICAgICByZW5kZXJTZWxlY3RlZD17cmVuZGVyTmZ0VHlwZVNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZFRva2VuVHlwZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dCgnU2VsZWN0IHRva2VuIHR5cGUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9eydjb250cmFjdEFkZHJlc3MnfVxuICAgICAgICAgICAgICBydWxlcz17W3sgdmFsaWRhdG9yOiBjb250cmFjdEFkZHJlc3NWYWxpZGF0b3IgfV19XG4gICAgICAgICAgICAgIHN0YXR1c0hlbHBBc1Rvb2x0aXA9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBZGRyZXNzSW5wdXRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgKCEhY29udHJhY3RWYWxpZGF0aW9uLnN0YXR1cyAmJiBjb250cmFjdFZhbGlkYXRpb24uc3RhdHVzICE9PSAndmFsaWRhdGluZycpXG4gICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNIZWxwOiBjb250cmFjdFZhbGlkYXRpb24ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogY29udHJhY3RWYWxpZGF0aW9uLnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZHJlc3NQcmVmaXg9e2NoYWluTmV0d29ya1ByZWZpeH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRUb2tlblR5cGUgPT09ICcnfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdDb250cmFjdCBhZGRyZXNzJyl9XG4gICAgICAgICAgICAgICAgc2hvd1NjYW5uZXI9e3RydWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgPFJvd1xuICAgICAgICAgICAgICBjbGFzc05hbWU9eyd0b2tlbi1zeW1ib2wtZGVjaW1hbHMnfVxuICAgICAgICAgICAgICBndXR0ZXI9e3Rva2VuLm1hcmdpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtzeW1ib2x9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dDxzdHJpbmc+KCdTeW1ib2wnKX1cbiAgICAgICAgICAgICAgICAgIHByZWZpeD17dG9rZW5EZWNpbWFsc1ByZWZpeCgpfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnU3ltYm9sJyl9XG4gICAgICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50PXsndG9wTGVmdCd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgY29udGVudD17ZGVjaW1hbHMgPT09IC0xID8gJycgOiBkZWNpbWFsc31cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0PHN0cmluZz4oJ0RlY2ltYWxzJyl9XG4gICAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdEZWNpbWFscycpfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcFBsYWNlbWVudD17J3RvcExlZnQnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17J3ByaWNlSWQnfVxuICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRUb2tlblR5cGUgPT09ICcnfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdQcmljZSBJRCcpfVxuICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ1ByaWNlIElEJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQuV2l0aFN1YkhlYWRlck9ubHk+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgRnVuZ2libGVUb2tlbkltcG9ydCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgICcuaW1wb3J0X3Rva2VuX19jb250YWluZXInOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgbWFyZ2luTGVmdDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luUmlnaHQ6IHRva2VuLm1hcmdpblxuICAgIH0sXG5cbiAgICAnLmltcG9ydF90b2tlbl9fc2VsZWN0ZWRfb3B0aW9uJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dEhlYWRpbmdcbiAgICB9LFxuXG4gICAgJy5hbnQtZmllbGQtY29udGFpbmVyLmFudC1maWVsZC1zaXplLW1lZGl1bSAuYW50LWZpZWxkLXdyYXBwZXInOiB7XG4gICAgICBwYWRkaW5nOiB0b2tlbi5wYWRkaW5nU01cbiAgICB9LFxuXG4gICAgJy50b2tlbi1zeW1ib2wtZGVjaW1hbHMnOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblxuICAgIH0sXG5cbiAgICAnLnRva2VuLXR5cGUtaXRlbSc6IHtcbiAgICAgICctLXRva2VuLXR5cGUtaWNvbi1iZy1jb2xvcic6IHRva2VuWydvcmFuZ2UtNiddLFxuICAgICAgJy0tdG9rZW4tdHlwZS1pY29uLWNvbG9yJzogdG9rZW4uY29sb3JXaGl0ZSxcbiAgICAgICctLXRva2VuLXNlbGVjdGVkLWljb24tY29sb3InOiB0b2tlbi5jb2xvclN1Y2Nlc3MsXG5cbiAgICAgICcuYW50LXdlYjMtYmxvY2stcmlnaHQtaXRlbSc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy50b2tlbl9pbXBvcnRfX3NlbGVjdGVkX29wdGlvbic6IHtcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dFxuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRnVuZ2libGVUb2tlbkltcG9ydDtcbiJdLCJuYW1lcyI6WyJfQXNzZXRUeXBlIiwiX2dldFRva2VuVHlwZXNTdXBwb3J0ZWRCeUNoYWluIiwiX2lzQ2hhaW5UZXN0TmV0IiwiX3BhcnNlTWV0YWRhdGFGb3JTbWFydENvbnRyYWN0QXNzZXQiLCJpc1ZhbGlkU3Vic3RyYXRlQWRkcmVzcyIsIkFkZHJlc3NJbnB1dCIsIkdlbmVyYWxFbXB0eUxpc3QiLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIkRhdGFDb250ZXh0IiwidXNlQ2hhaW5DaGVja2VyIiwidXNlRGVmYXVsdE5hdmlnYXRlIiwidXNlR2V0Q2hhaW5QcmVmaXhCeVNsdWciLCJ1c2VHZXRDb250cmFjdFN1cHBvcnRlZENoYWlucyIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVRyYW5zbGF0aW9uIiwidXBzZXJ0Q3VzdG9tVG9rZW4iLCJ2YWxpZGF0ZUN1c3RvbVRva2VuIiwicmVmb3JtYXRBZGRyZXNzIiwiQmFja2dyb3VuZEljb24iLCJDb2wiLCJGaWVsZCIsIkZvcm0iLCJJY29uIiwiSW1hZ2UiLCJJbnB1dCIsIk5ldHdvcmtJdGVtIiwiUm93IiwiU2VsZWN0TW9kYWwiLCJTZXR0aW5nSXRlbSIsIlN3QXZhdGFyIiwiQ2hlY2tDaXJjbGUiLCJDb2luIiwiUGx1c0NpcmNsZSIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsImlzRXRoZXJldW1BZGRyZXNzIiwiZ2V0VG9rZW5UeXBlU3VwcG9ydGVkIiwiY2hhaW5JbmZvIiwidG9rZW5UeXBlcyIsInJlc3VsdCIsImZvckVhY2giLCJ0b2tlblR5cGUiLCJwdXNoIiwibGFiZWwiLCJ0b1N0cmluZyIsInZhbHVlIiwicmVuZGVyRW1wdHkiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ0IiwiZ29CYWNrIiwiZGF0YUNvbnRleHQiLCJsb2dvc01hcHMiLCJzdGF0ZSIsInNldHRpbmdzIiwibG9nb01hcHMiLCJjaGFpbkxvZ29NYXAiLCJ0b2tlbiIsInNob3dOb3RpZmljYXRpb24iLCJmb3JtUmVmIiwiY2hhaW5JbmZvTWFwIiwic2VsZWN0ZWRDaGFpbiIsInNldFNlbGVjdGVkQ2hhaW4iLCJzZWxlY3RlZFRva2VuVHlwZSIsInNldFNlbGVjdGVkVG9rZW5UeXBlIiwiY29udHJhY3RWYWxpZGF0aW9uIiwic2V0Q29udHJhY3RWYWxpZGF0aW9uIiwic3RhdHVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjaGFpbkNoZWNrZXIiLCJuYW1lIiwic2V0TmFtZSIsInN5bWJvbCIsInNldFN5bWJvbCIsImRlY2ltYWxzIiwic2V0RGVjaW1hbHMiLCJjaGFpbk5ldHdvcmtQcmVmaXgiLCJ0b2tlblR5cGVPcHRpb25zIiwib25TdWJtaXQiLCJmb3JtVmFsdWVzIiwiY3VycmVudCIsImdldEZpZWxkc1ZhbHVlIiwicmVmb3JtYXR0ZWRBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNzIiwib3JpZ2luQ2hhaW4iLCJjaGFpbiIsInNsdWciLCJwcmljZUlkIiwibWluQW1vdW50IiwiYXNzZXRUeXBlIiwidHlwZSIsIm1ldGFkYXRhIiwibXVsdGlDaGFpbkFzc2V0IiwiaGFzVmFsdWUiLCJpY29uIiwidGhlbiIsIm1lc3NhZ2UiLCJjYXRjaCIsImlzU3VibWl0RGlzYWJsZWQiLCJjb250cmFjdEFkZHJlc3NWYWxpZGF0b3IiLCJydWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpc1ZhbGlkRXZtQ29udHJhY3QiLCJFUkMyMCIsImluY2x1ZGVzIiwiaXNWYWxpZFdhc21Db250cmFjdCIsIlBTUDIyIiwidmFsaWRhdGlvblJlc3VsdCIsImlzRXhpc3QiLCJjb250cmFjdEVycm9yIiwib3JpZ2luQ2hhaW5Mb2dvIiwiZm9udFNpemVYTCIsIm9uQ2hhbmdlQ2hhaW4iLCJzZXRGaWVsZFZhbHVlIiwibGVuZ3RoIiwicmVzZXRGaWVsZHMiLCJvbkNoYW5nZVRva2VuVHlwZSIsInNlYXJjaENoYWluIiwic2VhcmNoVGV4dCIsInNlYXJjaFRleHRMb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsInJlbmRlckNoYWluT3B0aW9uIiwic2VsZWN0ZWQiLCJjb2xvclN1Y2Nlc3MiLCJyZW5kZXJDaGFpblNlbGVjdGVkIiwicmVuZGVyVG9rZW5UeXBlT3B0aW9uIiwidG9rZW5UeXBlT3B0aW9uIiwicmVuZGVyTmZ0VHlwZVNlbGVjdGVkIiwidG9rZW5EZWNpbWFsc1ByZWZpeCIsImdldEZpZWxkVmFsdWUiLCJ0aGVtZSIsImF3YWl0U3RvcmVzIiwiYmxvY2siLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsInZhbGlkYXRvciIsInN0YXR1c0hlbHAiLCJtYXJnaW4iLCJGdW5naWJsZVRva2VuSW1wb3J0IiwicGFkZGluZ1RvcCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJjb2xvciIsImNvbG9yVGV4dEhlYWRpbmciLCJwYWRkaW5nU00iLCJtYXJnaW5Cb3R0b20iLCJjb2xvcldoaXRlIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImNvbG9yVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=