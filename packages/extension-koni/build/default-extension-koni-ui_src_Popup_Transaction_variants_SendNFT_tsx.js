"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Transaction_variants_SendNFT_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Transaction/variants/SendNFT.tsx":
/*!***********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/variants/SendNFT.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/typography/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/is.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper */ "../extension-koni-ui/src/Popup/Transaction/helper/index.ts");
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts */ "../extension-koni-ui/src/Popup/Transaction/parts/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0






















const DEFAULT_COLLECTION = {
  collectionId: 'unknown',
  chain: 'unknown'
};
const DEFAULT_ITEM = {
  collectionId: 'unknown',
  chain: 'unknown',
  owner: 'unknown',
  id: 'unknown'
};
const hiddenFields = ['from', 'chain', 'asset', 'itemId', 'collectionId'];
const validateFields = ['to'];
const Component = () => {
  var _chainInfoMap$chain, _chainInfoMap$chain$s;
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetCurrentPage)('/transaction/send-nft');
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const {
    defaultData,
    onDone,
    persistData
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useTransactionContext)();
  const {
    collectionId,
    itemId
  } = defaultData;
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].useForm();
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    return {
      ...defaultData
    };
  }, [defaultData]);
  const from = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('from', form, defaultData);
  const chain = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('chain', form, defaultData);
  const {
    chainInfoMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.chainStore);
  const {
    nftCollections,
    nftItems
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.nft);
  const {
    accounts
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.accountState);
  const [isBalanceReady, setIsBalanceReady] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
  const nftItem = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => nftItems.find(item => (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_14__.isSameAddress)(item.owner, from) && chain === item.chain && item.collectionId === collectionId && item.id === itemId) || DEFAULT_ITEM, [collectionId, itemId, chain, nftItems, from]);
  const collectionInfo = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => nftCollections.find(item => chain === item.chain && item.collectionId === collectionId) || DEFAULT_COLLECTION, [collectionId, chain, nftCollections]);
  const chainInfo = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => chainInfoMap[chain], [chainInfoMap, chain]);
  const addressPrefix = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetChainPrefixBySlug)(chain);
  const chainGenesisHash = ((_chainInfoMap$chain = chainInfoMap[chain]) === null || _chainInfoMap$chain === void 0 ? void 0 : (_chainInfoMap$chain$s = _chainInfoMap$chain.substrateInfo) === null || _chainInfoMap$chain$s === void 0 ? void 0 : _chainInfoMap$chain$s.genesisHash) || '';
  const {
    onError,
    onSuccess
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useHandleSubmitTransaction)(onDone);
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const recipientValidator = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(({
    getFieldValue
  }) => {
    return {
      validator: (rule, _recipientAddress) => {
        if (!_recipientAddress) {
          return Promise.reject(t('The recipient address is required'));
        }
        if (!(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_15__.isAddress)(_recipientAddress)) {
          return Promise.reject(t('Invalid recipient address'));
        }
        if ((0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_14__.isSameAddress)(_recipientAddress, from)) {
          return Promise.reject(t('The recipient address can not be the same as the sender address'));
        }
        if ((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_16__.isEthereumAddress)(_recipientAddress) !== (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_16__.isEthereumAddress)(from)) {
          const message = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_16__.isEthereumAddress)(from) ? t('Receive address must be of EVM account.') : t('Receive address must be of Substrate account.');
          return Promise.reject(message);
        }
        const account = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.findAccountByAddress)(accounts, _recipientAddress);
        if (account && account.isHardware) {
          var _chainInfo$substrateI;
          const chainInfo = chainInfoMap[chain];
          const availableGen = account.availableGenesisHashes || [];
          if (!(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_16__.isEthereumAddress)(account.address) && !availableGen.includes((chainInfo === null || chainInfo === void 0 ? void 0 : (_chainInfo$substrateI = chainInfo.substrateInfo) === null || _chainInfo$substrateI === void 0 ? void 0 : _chainInfo$substrateI.genesisHash) || '')) {
            const chainName = (chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.name) || 'Unknown';
            return Promise.reject(t('Wrong network. Your Ledger account is not supported by {{network}}. Please choose another receiving account and try again.', {
              replace: {
                network: chainName
              }
            }));
          }
        }
        return Promise.resolve();
      }
    };
  }, [from, accounts, t, chainInfoMap, chain]);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((changedFields, allFields) => {
    const {
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.simpleCheckForm)(allFields);
    persistData(form.getFieldsValue());
    setIsDisable(error);
  }, [form, persistData]);

  // Submit transaction
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(values => {
    const isEthereumInterface = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_16__.isEthereumAddress)(from);
    const {
      to
    } = values;
    const params = (0,_helper__WEBPACK_IMPORTED_MODULE_8__.nftParamsHandler)(nftItem, chain);
    let sendPromise;
    if (isEthereumInterface) {
      // Send NFT with EVM interface
      sendPromise = (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__.evmNftSubmitTransaction)({
        senderAddress: from,
        networkKey: chain,
        recipientAddress: to,
        nftItemName: nftItem === null || nftItem === void 0 ? void 0 : nftItem.name,
        params,
        nftItem
      });
    } else {
      // Send NFT with substrate interface
      sendPromise = (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__.substrateNftSubmitTransaction)({
        networkKey: chain,
        recipientAddress: to,
        senderAddress: from,
        nftItemName: nftItem === null || nftItem === void 0 ? void 0 : nftItem.name,
        params,
        nftItem
      });
    }
    setLoading(true);
    setTimeout(() => {
      // Handle transfer action
      sendPromise.then(onSuccess).catch(onError).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [chain, from, nftItem, onError, onSuccess]);
  const checkAction = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.usePreCheckAction)(from);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (nftItem === DEFAULT_ITEM || collectionInfo === DEFAULT_COLLECTION) {
      navigate('/home/nfts/collections');
    }
  }, [collectionInfo, navigate, nftItem]);

  // enable button at first time
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (defaultData.to) {
      // First time the form is empty, so need time out
      setTimeout(() => {
        form.validateFields().finally(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
      }, 500);
    }
  }, [form, defaultData]);

  // Focus to the first field
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useFocusFormItem)(form, 'to');
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useRestoreTransaction)(form);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useInitValidateTransaction)(validateFields, form, defaultData);
  const show3DModel = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.SHOW_3D_MODELS_CHAIN.includes(nftItem.chain);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_parts__WEBPACK_IMPORTED_MODULE_9__.TransactionContent, {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('-transaction-content'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: 'nft_item_detail text-center',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
          height: 120,
          modelViewerProps: show3DModel ? _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MODEL_VIEWER_PROPS : undefined,
          src: nftItem.image,
          width: 120
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].Title, {
          level: 5,
          children: nftItem.name
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: 'form-container form-space-sm',
        form: form,
        initialValues: formDefault,
        onFieldsChange: onFieldsChange,
        onFinish: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.HiddenInput, {
          fields: hiddenFields
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Item, {
          name: 'to',
          rules: [recipientValidator],
          statusHelpAsTooltip: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AddressInput, {
            addressPrefix: addressPrefix,
            allowDomain: true,
            chain: chain,
            label: t('Send to'),
            networkGenesisHash: chainGenesisHash,
            placeholder: t('Account address'),
            saveAddress: true,
            showAddressBook: true,
            showScanner: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Item, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.ChainSelector, {
            disabled: true,
            items: chainInfo ? [{
              name: chainInfo.name,
              slug: chainInfo.slug
            }] : [],
            label: t('Network'),
            value: collectionInfo.chain
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_9__.FreeBalance, {
        address: from,
        chain: chain,
        label: t('Sender transferable balance') + ':',
        onBalanceReady: setIsBalanceReady
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_9__.TransactionFooter, {
      className: 'send-nft-transaction-footer',
      errors: [],
      warnings: [],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
        disabled: isDisable || !isBalanceReady,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"],
          weight: 'fill'
        }),
        loading: loading,
        onClick: checkAction(form.submit, _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_22__.ExtrinsicType.SEND_NFT),
        children: t('Next')
      })
    })]
  });
};
const Wrapper = props => {
  const {
    className
  } = props;
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: className,
    resolve: dataContext.awaitStores(['nft']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Component, {})
  });
};
const SendNFT = (0,styled_components__WEBPACK_IMPORTED_MODULE_23__["default"])(Wrapper).withConfig({
  displayName: "SendNFT",
  componentId: "sc-13wb87a-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '.nft_item_detail h5': {
      marginTop: token.marginXS,
      marginBottom: token.margin
    },
    '.nft_item_detail': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '.ant-image-img': {
        maxWidth: '100%',
        objectFit: 'cover'
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendNFT);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js ***!
  \****************************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm47.4,107.1a8.7,8.7,0,0,1-1.8,2.6l-33.9,33.9a7.6,7.6,0,0,1-5.6,2.3,7.8,7.8,0,0,1-5.7-2.3,8,8,0,0,1,0-11.3L148.7,136H88a8,8,0,0,1,0-16h60.7L128.4,99.7a8,8,0,0,1,11.3-11.3l33.9,33.9a8.7,8.7,0,0,1,1.8,2.6A8.3,8.3,0,0,1,175.4,131.1Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "134.1 161.9 168 128 134.1 94.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "88",
    y1: "128",
    x2: "168",
    y2: "128",
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

var ArrowCircleRight = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ArrowCircleRight.displayName = "ArrowCircleRight";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowCircleRight);
//# sourceMappingURL=ArrowCircleRight.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfVHJhbnNhY3Rpb25fdmFyaWFudHNfU2VuZE5GVF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFdUc7QUFFdkM7QUFDZ0Q7QUFDTjtBQUMxQjtBQUM2TDtBQUM3SjtBQUVmO0FBQ3JCO0FBQ2hEO0FBQ3NCO0FBQ21DO0FBQ3RDO0FBQ0E7QUFDUjtBQUU4QjtBQUV4QjtBQUNpQztBQUFBO0FBQUE7QUFBQTtBQUk5RSxNQUFNOEMsa0JBQWlDLEdBQUc7RUFDeENDLFlBQVksRUFBRSxTQUFTO0VBQ3ZCQyxLQUFLLEVBQUU7QUFDVCxDQUFDO0FBRUQsTUFBTUMsWUFBcUIsR0FBRztFQUM1QkYsWUFBWSxFQUFFLFNBQVM7RUFDdkJDLEtBQUssRUFBRSxTQUFTO0VBQ2hCRSxLQUFLLEVBQUUsU0FBUztFQUNoQkMsRUFBRSxFQUFFO0FBQ04sQ0FBQztBQUVELE1BQU1DLFlBQXdDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDO0FBQ3JHLE1BQU1DLGNBQTBDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFekQsTUFBTUMsU0FBbUIsR0FBRyxNQUFNO0VBQUE7RUFDaEN0QyxxRkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQztFQUMxQyxNQUFNO0lBQUV1QztFQUFFLENBQUMsR0FBR2xCLDhEQUFjLEVBQUU7RUFDOUIsTUFBTW1CLFFBQVEsR0FBR2xCLDhEQUFXLEVBQUU7RUFFOUIsTUFBTTtJQUFFbUIsV0FBVztJQUFFQyxNQUFNO0lBQUVDO0VBQVksQ0FBQyxHQUFHMUMseUZBQXFCLEVBQWlCO0VBRW5GLE1BQU07SUFBRThCLFlBQVk7SUFBRWE7RUFBTyxDQUFDLEdBQUdILFdBQVc7RUFFNUMsTUFBTSxDQUFDSSxJQUFJLENBQUMsR0FBR3BDLG9FQUFZLEVBQWlCO0VBQzVDLE1BQU1zQyxXQUFXLEdBQUc1Qiw4Q0FBTyxDQUFDLE1BQU07SUFDaEMsT0FBTztNQUNMLEdBQUdzQjtJQUNMLENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ0EsV0FBVyxDQUFDLENBQUM7RUFFakIsTUFBTU8sSUFBSSxHQUFHOUMsdUZBQW1CLENBQUMsTUFBTSxFQUFFMkMsSUFBSSxFQUFFSixXQUFXLENBQUM7RUFDM0QsTUFBTVQsS0FBSyxHQUFHOUIsdUZBQW1CLENBQUMsT0FBTyxFQUFFMkMsSUFBSSxFQUFFSixXQUFXLENBQUM7RUFFN0QsTUFBTTtJQUFFUTtFQUFhLENBQUMsR0FBR2xELCtFQUFXLENBQUVtRCxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDO0VBQ2pFLE1BQU07SUFBRUMsY0FBYztJQUFFQztFQUFTLENBQUMsR0FBR3RELCtFQUFXLENBQUVtRCxLQUFLLElBQUtBLEtBQUssQ0FBQ0ksR0FBRyxDQUFDO0VBQ3RFLE1BQU07SUFBRUM7RUFBUyxDQUFDLEdBQUd4RCwrRUFBVyxDQUFFbUQsS0FBSyxJQUFLQSxLQUFLLENBQUNNLFlBQVksQ0FBQztFQUMvRCxNQUFNLENBQUNDLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR3RDLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBRTFELE1BQU11QyxPQUFPLEdBQUd4Qyw4Q0FBTyxDQUFDLE1BQ3RCa0MsUUFBUSxDQUFDTyxJQUFJLENBQ1ZDLElBQUksSUFDSDVFLCtFQUFhLENBQUM0RSxJQUFJLENBQUMzQixLQUFLLEVBQUVjLElBQUksQ0FBQyxJQUMvQmhCLEtBQUssS0FBSzZCLElBQUksQ0FBQzdCLEtBQUssSUFDcEI2QixJQUFJLENBQUM5QixZQUFZLEtBQUtBLFlBQVksSUFDbEM4QixJQUFJLENBQUMxQixFQUFFLEtBQUtTLE1BQU0sQ0FDckIsSUFBSVgsWUFBWSxFQUNqQixDQUFDRixZQUFZLEVBQUVhLE1BQU0sRUFBRVosS0FBSyxFQUFFcUIsUUFBUSxFQUFFTCxJQUFJLENBQUMsQ0FBQztFQUVoRCxNQUFNYyxjQUFjLEdBQUczQyw4Q0FBTyxDQUFDLE1BQzdCaUMsY0FBYyxDQUFDUSxJQUFJLENBQ2hCQyxJQUFJLElBQ0g3QixLQUFLLEtBQUs2QixJQUFJLENBQUM3QixLQUFLLElBQ3RCNkIsSUFBSSxDQUFDOUIsWUFBWSxLQUFLQSxZQUFZLENBQ25DLElBQUlELGtCQUFrQixFQUN2QixDQUFDQyxZQUFZLEVBQUVDLEtBQUssRUFBRW9CLGNBQWMsQ0FBQyxDQUFDO0VBRXhDLE1BQU1XLFNBQVMsR0FBRzVDLDhDQUFPLENBQUMsTUFBTThCLFlBQVksQ0FBQ2pCLEtBQUssQ0FBQyxFQUFFLENBQUNpQixZQUFZLEVBQUVqQixLQUFLLENBQUMsQ0FBQztFQUMzRSxNQUFNZ0MsYUFBYSxHQUFHdEUsMkZBQXVCLENBQUNzQyxLQUFLLENBQUM7RUFDcEQsTUFBTWlDLGdCQUFnQixHQUFHLHdCQUFBaEIsWUFBWSxDQUFDakIsS0FBSyxDQUFDLGlGQUFuQixvQkFBcUJrQyxhQUFhLDBEQUFsQyxzQkFBb0NDLFdBQVcsS0FBSSxFQUFFO0VBRTlFLE1BQU07SUFBRUMsT0FBTztJQUFFQztFQUFVLENBQUMsR0FBRzFFLDhGQUEwQixDQUFDK0MsTUFBTSxDQUFDO0VBRWpFLE1BQU0sQ0FBQzRCLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUduRCwrQ0FBUSxDQUFDLElBQUksQ0FBQztFQUNoRCxNQUFNLENBQUNvRCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHckQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFFN0MsTUFBTXNELGtCQUFrQixHQUFHMUQsa0RBQVcsQ0FBQyxDQUFDO0lBQUUyRDtFQUEyQyxDQUFDLEtBQUs7SUFDekYsT0FBUTtNQUNOQyxTQUFTLEVBQUUsQ0FBQ0MsSUFBYyxFQUFFQyxpQkFBeUIsS0FBb0I7UUFDdkUsSUFBSSxDQUFDQSxpQkFBaUIsRUFBRTtVQUN0QixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ3pDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQy9EO1FBRUEsSUFBSSxDQUFDZixpRUFBUyxDQUFDc0QsaUJBQWlCLENBQUMsRUFBRTtVQUNqQyxPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ3pDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3ZEO1FBRUEsSUFBSXRELCtFQUFhLENBQUM2RixpQkFBaUIsRUFBRTlCLElBQUksQ0FBQyxFQUFFO1VBQzFDLE9BQU8rQixPQUFPLENBQUNDLE1BQU0sQ0FBQ3pDLENBQUMsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO1FBQzdGO1FBRUEsSUFBSWQseUVBQWlCLENBQUNxRCxpQkFBaUIsQ0FBQyxLQUFLckQseUVBQWlCLENBQUN1QixJQUFJLENBQUMsRUFBRTtVQUNwRSxNQUFNaUMsT0FBTyxHQUFHeEQseUVBQWlCLENBQUN1QixJQUFJLENBQUMsR0FBR1QsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLEdBQUdBLENBQUMsQ0FBQywrQ0FBK0MsQ0FBQztVQUUzSSxPQUFPd0MsT0FBTyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztRQUNoQztRQUVBLE1BQU1DLE9BQU8sR0FBRzdFLHdGQUFvQixDQUFDa0QsUUFBUSxFQUFFdUIsaUJBQWlCLENBQUM7UUFFakUsSUFBSUksT0FBTyxJQUFJQSxPQUFPLENBQUNDLFVBQVUsRUFBRTtVQUFBO1VBQ2pDLE1BQU1wQixTQUFTLEdBQUdkLFlBQVksQ0FBQ2pCLEtBQUssQ0FBQztVQUNyQyxNQUFNb0QsWUFBc0IsR0FBR0YsT0FBTyxDQUFDRyxzQkFBc0IsSUFBSSxFQUFFO1VBRW5FLElBQUksQ0FBQzVELHlFQUFpQixDQUFDeUQsT0FBTyxDQUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDRixZQUFZLENBQUNHLFFBQVEsQ0FBQyxDQUFBeEIsU0FBUyxhQUFUQSxTQUFTLGdEQUFUQSxTQUFTLENBQUVHLGFBQWEsMERBQXhCLHNCQUEwQkMsV0FBVyxLQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQzlHLE1BQU1xQixTQUFTLEdBQUcsQ0FBQXpCLFNBQVMsYUFBVEEsU0FBUyx1QkFBVEEsU0FBUyxDQUFFMEIsSUFBSSxLQUFJLFNBQVM7WUFFOUMsT0FBT1YsT0FBTyxDQUFDQyxNQUFNLENBQUN6QyxDQUFDLENBQUMsNEhBQTRILEVBQUU7Y0FBRW1ELE9BQU8sRUFBRTtnQkFBRUMsT0FBTyxFQUFFSDtjQUFVO1lBQUUsQ0FBQyxDQUFDLENBQUM7VUFDN0w7UUFDRjtRQUVBLE9BQU9ULE9BQU8sQ0FBQ2EsT0FBTyxFQUFFO01BQzFCO0lBQ0YsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDNUMsSUFBSSxFQUFFTyxRQUFRLEVBQUVoQixDQUFDLEVBQUVVLFlBQVksRUFBRWpCLEtBQUssQ0FBQyxDQUFDO0VBRTVDLE1BQU02RCxjQUE4RCxHQUFHN0Usa0RBQVcsQ0FBQyxDQUFDOEUsYUFBOEIsRUFBRUMsU0FBMEIsS0FBSztJQUNqSixNQUFNO01BQUVDO0lBQU0sQ0FBQyxHQUFHekYsbUZBQWUsQ0FBQ3dGLFNBQVMsQ0FBQztJQUU1Q3BELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDb0QsY0FBYyxFQUFFLENBQUM7SUFDbEMxQixZQUFZLENBQUN5QixLQUFLLENBQUM7RUFDckIsQ0FBQyxFQUFFLENBQUNuRCxJQUFJLEVBQUVGLFdBQVcsQ0FBQyxDQUFDOztFQUV2QjtFQUNBLE1BQU11RCxRQUFrRCxHQUFHbEYsa0RBQVcsQ0FDbkVtRixNQUFxQixJQUFLO0lBQ3pCLE1BQU1DLG1CQUFtQixHQUFHM0UseUVBQWlCLENBQUN1QixJQUFJLENBQUM7SUFDbkQsTUFBTTtNQUFFcUQ7SUFBRyxDQUFDLEdBQUdGLE1BQU07SUFDckIsTUFBTUcsTUFBTSxHQUFHNUUseURBQWdCLENBQUNpQyxPQUFPLEVBQUUzQixLQUFLLENBQUM7SUFDL0MsSUFBSXVFLFdBQTJDO0lBRS9DLElBQUlILG1CQUFtQixFQUFFO01BQ3ZCO01BQ0FHLFdBQVcsR0FBR3BHLCtGQUF1QixDQUFDO1FBQ3BDcUcsYUFBYSxFQUFFeEQsSUFBSTtRQUNuQnlELFVBQVUsRUFBRXpFLEtBQUs7UUFDakIwRSxnQkFBZ0IsRUFBRUwsRUFBRTtRQUNwQk0sV0FBVyxFQUFFaEQsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUU4QixJQUFJO1FBQzFCYSxNQUFNO1FBQ04zQztNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsTUFBTTtNQUNMO01BQ0E0QyxXQUFXLEdBQUduRyxxR0FBNkIsQ0FBQztRQUMxQ3FHLFVBQVUsRUFBRXpFLEtBQUs7UUFDakIwRSxnQkFBZ0IsRUFBRUwsRUFBRTtRQUNwQkcsYUFBYSxFQUFFeEQsSUFBSTtRQUNuQjJELFdBQVcsRUFBRWhELE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFOEIsSUFBSTtRQUMxQmEsTUFBTTtRQUNOM0M7TUFDRixDQUFDLENBQUM7SUFDSjtJQUVBYyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBRWhCbUMsVUFBVSxDQUFDLE1BQU07TUFDZjtNQUNBTCxXQUFXLENBQ1JNLElBQUksQ0FBQ3hDLFNBQVMsQ0FBQyxDQUNmeUMsS0FBSyxDQUFDMUMsT0FBTyxDQUFDLENBQ2QyQyxPQUFPLENBQUMsTUFBTTtRQUNidEMsVUFBVSxDQUFDLEtBQUssQ0FBQztNQUNuQixDQUFDLENBQUM7SUFDTixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1QsQ0FBQyxFQUNELENBQUN6QyxLQUFLLEVBQUVnQixJQUFJLEVBQUVXLE9BQU8sRUFBRVMsT0FBTyxFQUFFQyxTQUFTLENBQUMsQ0FDM0M7RUFFRCxNQUFNMkMsV0FBVyxHQUFHbkgscUZBQWlCLENBQUNtRCxJQUFJLENBQUM7RUFFM0M5QixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJeUMsT0FBTyxLQUFLMUIsWUFBWSxJQUFJNkIsY0FBYyxLQUFLaEMsa0JBQWtCLEVBQUU7TUFDckVVLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztJQUNwQztFQUNGLENBQUMsRUFBRSxDQUFDc0IsY0FBYyxFQUFFdEIsUUFBUSxFQUFFbUIsT0FBTyxDQUFDLENBQUM7O0VBRXZDO0VBQ0F6QyxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJdUIsV0FBVyxDQUFDNEQsRUFBRSxFQUFFO01BQ2xCO01BQ0FPLFVBQVUsQ0FBQyxNQUFNO1FBQ2YvRCxJQUFJLENBQUNSLGNBQWMsRUFBRSxDQUFDMEUsT0FBTyxDQUFDekcsb0VBQUksQ0FBQztNQUNyQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1Q7RUFDRixDQUFDLEVBQUUsQ0FBQ3VDLElBQUksRUFBRUosV0FBVyxDQUFDLENBQUM7O0VBRXZCO0VBQ0FoRCxvRkFBZ0IsQ0FBQ29ELElBQUksRUFBRSxJQUFJLENBQUM7RUFDNUIvQyx5RkFBcUIsQ0FBQytDLElBQUksQ0FBQztFQUMzQmpELDhGQUEwQixDQUFDeUMsY0FBYyxFQUFFUSxJQUFJLEVBQUVKLFdBQVcsQ0FBQztFQUU3RCxNQUFNd0UsV0FBVyxHQUFHMUgsaUdBQTZCLENBQUNvRSxPQUFPLENBQUMzQixLQUFLLENBQUM7RUFFaEUsb0JBQ0U7SUFBQSx3QkFDRSx5REFBQyxzREFBa0I7TUFBQyxTQUFTLEVBQUVuQixpREFBRSxDQUFDLHNCQUFzQixDQUFFO01BQUEsd0JBQ3hEO1FBQUssU0FBUyxFQUFFLDZCQUE4QjtRQUFBLHdCQUM1Qyx3REFBQyw0REFBSztVQUNKLE1BQU0sRUFBRSxHQUFJO1VBQ1osZ0JBQWdCLEVBQUVvRyxXQUFXLEdBQUczSCw4RkFBMEIsR0FBRzRILFNBQVU7VUFDdkUsR0FBRyxFQUFFdkQsT0FBTyxDQUFDd0QsS0FBTTtVQUNuQixLQUFLLEVBQUU7UUFBSSxFQUNYLGVBQ0Ysd0RBQUMsa0VBQWdCO1VBQUMsS0FBSyxFQUFFLENBQUU7VUFBQSxVQUN4QnhELE9BQU8sQ0FBQzhCO1FBQUksRUFDSTtNQUFBLEVBQ2YsZUFFTix5REFBQyw0REFBSTtRQUNILFNBQVMsRUFBRSw4QkFBK0I7UUFDMUMsSUFBSSxFQUFFNUMsSUFBSztRQUNYLGFBQWEsRUFBRUUsV0FBWTtRQUMzQixjQUFjLEVBQUU4QyxjQUFlO1FBQy9CLFFBQVEsRUFBRUssUUFBUztRQUFBLHdCQUVuQix3REFBQyxnRkFBVztVQUFDLE1BQU0sRUFBRTlEO1FBQWEsRUFBRyxlQUNyQyx3REFBQyxpRUFBUztVQUNSLElBQUksRUFBRSxJQUFLO1VBQ1gsS0FBSyxFQUFFLENBQ0xzQyxrQkFBa0IsQ0FDbEI7VUFDRixtQkFBbUIsRUFBRSxJQUFLO1VBQUEsdUJBRTFCLHdEQUFDLGlGQUFZO1lBQ1gsYUFBYSxFQUFFVixhQUFjO1lBQzdCLFdBQVcsRUFBRSxJQUFLO1lBQ2xCLEtBQUssRUFBRWhDLEtBQU07WUFDYixLQUFLLEVBQUVPLENBQUMsQ0FBQyxTQUFTLENBQUU7WUFDcEIsa0JBQWtCLEVBQUUwQixnQkFBaUI7WUFDckMsV0FBVyxFQUFFMUIsQ0FBQyxDQUFDLGlCQUFpQixDQUFFO1lBQ2xDLFdBQVcsRUFBRSxJQUFLO1lBQ2xCLGVBQWUsRUFBRSxJQUFLO1lBQ3RCLFdBQVcsRUFBRTtVQUFLO1FBQ2xCLEVBQ1EsZUFFWix3REFBQyxpRUFBUztVQUFBLHVCQUNSLHdEQUFDLGtGQUFhO1lBQ1osUUFBUSxFQUFFLElBQUs7WUFDZixLQUFLLEVBQUV3QixTQUFTLEdBQUcsQ0FBQztjQUFFMEIsSUFBSSxFQUFFMUIsU0FBUyxDQUFDMEIsSUFBSTtjQUFFMkIsSUFBSSxFQUFFckQsU0FBUyxDQUFDcUQ7WUFBSyxDQUFDLENBQUMsR0FBRyxFQUFHO1lBQ3pFLEtBQUssRUFBRTdFLENBQUMsQ0FBQyxTQUFTLENBQUU7WUFDcEIsS0FBSyxFQUFFdUIsY0FBYyxDQUFDOUI7VUFBTTtRQUM1QixFQUNRO01BQUEsRUFDUCxlQUVQLHdEQUFDLCtDQUFXO1FBQ1YsT0FBTyxFQUFFZ0IsSUFBSztRQUNkLEtBQUssRUFBRWhCLEtBQU07UUFDYixLQUFLLEVBQUVPLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLEdBQUk7UUFDOUMsY0FBYyxFQUFFbUI7TUFBa0IsRUFDbEM7SUFBQSxFQUNpQixlQUNyQix3REFBQyxxREFBaUI7TUFDaEIsU0FBUyxFQUFFLDZCQUE4QjtNQUN6QyxNQUFNLEVBQUUsRUFBRztNQUNYLFFBQVEsRUFBRSxFQUFHO01BQUEsdUJBRWIsd0RBQUMsNERBQU07UUFDTCxRQUFRLEVBQUVZLFNBQVMsSUFBSSxDQUFDYixjQUFlO1FBQ3ZDLElBQUksZUFDRix3REFBQyw0REFBSTtVQUNILFlBQVksRUFBRTNDLHVEQUFpQjtVQUMvQixNQUFNLEVBQUU7UUFBTyxFQUVqQjtRQUNGLE9BQU8sRUFBRTBELE9BQVE7UUFDakIsT0FBTyxFQUFFd0MsV0FBVyxDQUFDbkUsSUFBSSxDQUFDd0UsTUFBTSxFQUFFckksbUdBQXNCLENBQUU7UUFBQSxVQUV6RHVELENBQUMsQ0FBQyxNQUFNO01BQUM7SUFDSCxFQUNTO0VBQUEsRUFDbkI7QUFFUCxDQUFDO0FBRUQsTUFBTWdGLE9BQXdCLEdBQUlDLEtBQVksSUFBSztFQUNqRCxNQUFNO0lBQUVDO0VBQVUsQ0FBQyxHQUFHRCxLQUFLO0VBRTNCLE1BQU1FLFdBQVcsR0FBR3pHLGlEQUFVLENBQUN6QiwwRkFBVyxDQUFDO0VBRTNDLG9CQUNFLHdEQUFDLGdGQUFXO0lBQ1YsU0FBUyxFQUFFaUksU0FBVTtJQUNyQixPQUFPLEVBQUVDLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUU7SUFBQSx1QkFFMUMsd0RBQUMsU0FBUztFQUFHLEVBQ0Q7QUFFbEIsQ0FBQztBQUVELE1BQU1DLE9BQU8sR0FBR3JHLDhEQUFNLENBQUNnRyxPQUFPLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBUSxDQUFDO0VBQUVNLEtBQUssRUFBRTtJQUFFQztFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQ3RFLE9BQU87SUFDTEMsSUFBSSxFQUFFLENBQUM7SUFDUEMsT0FBTyxFQUFFLE1BQU07SUFDZkMsYUFBYSxFQUFFLFFBQVE7SUFDdkJDLFFBQVEsRUFBRSxRQUFRO0lBRWxCLHFCQUFxQixFQUFFO01BQ3JCQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sUUFBUTtNQUN6QkMsWUFBWSxFQUFFUCxLQUFLLENBQUNRO0lBQ3RCLENBQUM7SUFFRCxrQkFBa0IsRUFBRTtNQUNsQkMsS0FBSyxFQUFFLE1BQU07TUFDYlAsT0FBTyxFQUFFLE1BQU07TUFDZkMsYUFBYSxFQUFFLFFBQVE7TUFDdkJPLFVBQVUsRUFBRSxRQUFRO01BRXBCLGdCQUFnQixFQUFFO1FBQ2hCQyxRQUFRLEVBQUUsTUFBTTtRQUNoQkMsU0FBUyxFQUFFO01BQ2I7SUFDRjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZWQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVVvQjtBQUNnQjtBQUNaOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsU0FBUyxzRUFBbUI7QUFDNUI7O0FBRUEsb0NBQW9DLGlEQUFVO0FBQzlDLFNBQVMsMERBQW1CLENBQUMsNERBQVE7QUFDckM7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vdmFyaWFudHMvU2VuZE5GVC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvcGhvc3Bob3ItcmVhY3QvZGlzdC9pY29ucy9BcnJvd0NpcmNsZVJpZ2h0LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFeHRyaW5zaWNUeXBlLCBOZnRDb2xsZWN0aW9uLCBOZnRJdGVtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBTV1RyYW5zYWN0aW9uUmVzcG9uc2UgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgaXNTYW1lQWRkcmVzcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuaW1wb3J0IHsgQWRkcmVzc0lucHV0LCBDaGFpblNlbGVjdG9yLCBIaWRkZW5JbnB1dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgREVGQVVMVF9NT0RFTF9WSUVXRVJfUFJPUFMsIFNIT1dfM0RfTU9ERUxTX0NIQUlOIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IHVzZUZvY3VzRm9ybUl0ZW0sIHVzZUdldENoYWluUHJlZml4QnlTbHVnLCB1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiwgdXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24sIHVzZVByZUNoZWNrQWN0aW9uLCB1c2VSZXN0b3JlVHJhbnNhY3Rpb24sIHVzZVNlbGVjdG9yLCB1c2VTZXRDdXJyZW50UGFnZSwgdXNlVHJhbnNhY3Rpb25Db250ZXh0LCB1c2VXYXRjaFRyYW5zYWN0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBldm1OZnRTdWJtaXRUcmFuc2FjdGlvbiwgc3Vic3RyYXRlTmZ0U3VibWl0VHJhbnNhY3Rpb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBGb3JtQ2FsbGJhY2tzLCBGb3JtRmllbGREYXRhLCBGb3JtSW5zdGFuY2UsIEZvcm1SdWxlLCBTZW5kTmZ0UGFyYW1zLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBmaW5kQWNjb3VudEJ5QWRkcmVzcywgbm9vcCwgc2ltcGxlQ2hlY2tGb3JtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscyc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEljb24sIEltYWdlLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBBcnJvd0NpcmNsZVJpZ2h0IH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgaXNBZGRyZXNzLCBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmltcG9ydCB7IG5mdFBhcmFtc0hhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgRnJlZUJhbGFuY2UsIFRyYW5zYWN0aW9uQ29udGVudCwgVHJhbnNhY3Rpb25Gb290ZXIgfSBmcm9tICcuLi9wYXJ0cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBERUZBVUxUX0NPTExFQ1RJT046IE5mdENvbGxlY3Rpb24gPSB7XG4gIGNvbGxlY3Rpb25JZDogJ3Vua25vd24nLFxuICBjaGFpbjogJ3Vua25vd24nXG59O1xuXG5jb25zdCBERUZBVUxUX0lURU06IE5mdEl0ZW0gPSB7XG4gIGNvbGxlY3Rpb25JZDogJ3Vua25vd24nLFxuICBjaGFpbjogJ3Vua25vd24nLFxuICBvd25lcjogJ3Vua25vd24nLFxuICBpZDogJ3Vua25vd24nXG59O1xuXG5jb25zdCBoaWRkZW5GaWVsZHM6IEFycmF5PGtleW9mIFNlbmROZnRQYXJhbXM+ID0gWydmcm9tJywgJ2NoYWluJywgJ2Fzc2V0JywgJ2l0ZW1JZCcsICdjb2xsZWN0aW9uSWQnXTtcbmNvbnN0IHZhbGlkYXRlRmllbGRzOiBBcnJheTxrZXlvZiBTZW5kTmZ0UGFyYW1zPiA9IFsndG8nXTtcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgdXNlU2V0Q3VycmVudFBhZ2UoJy90cmFuc2FjdGlvbi9zZW5kLW5mdCcpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCB7IGRlZmF1bHREYXRhLCBvbkRvbmUsIHBlcnNpc3REYXRhIH0gPSB1c2VUcmFuc2FjdGlvbkNvbnRleHQ8U2VuZE5mdFBhcmFtcz4oKTtcblxuICBjb25zdCB7IGNvbGxlY3Rpb25JZCwgaXRlbUlkIH0gPSBkZWZhdWx0RGF0YTtcblxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm08U2VuZE5mdFBhcmFtcz4oKTtcbiAgY29uc3QgZm9ybURlZmF1bHQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdERhdGFcbiAgICB9O1xuICB9LCBbZGVmYXVsdERhdGFdKTtcblxuICBjb25zdCBmcm9tID0gdXNlV2F0Y2hUcmFuc2FjdGlvbignZnJvbScsIGZvcm0sIGRlZmF1bHREYXRhKTtcbiAgY29uc3QgY2hhaW4gPSB1c2VXYXRjaFRyYW5zYWN0aW9uKCdjaGFpbicsIGZvcm0sIGRlZmF1bHREYXRhKTtcblxuICBjb25zdCB7IGNoYWluSW5mb01hcCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jaGFpblN0b3JlKTtcbiAgY29uc3QgeyBuZnRDb2xsZWN0aW9ucywgbmZ0SXRlbXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmZ0KTtcbiAgY29uc3QgeyBhY2NvdW50cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUpO1xuICBjb25zdCBbaXNCYWxhbmNlUmVhZHksIHNldElzQmFsYW5jZVJlYWR5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG5mdEl0ZW0gPSB1c2VNZW1vKCgpOiBOZnRJdGVtID0+XG4gICAgbmZ0SXRlbXMuZmluZChcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpc1NhbWVBZGRyZXNzKGl0ZW0ub3duZXIsIGZyb20pICYmXG4gICAgICAgIGNoYWluID09PSBpdGVtLmNoYWluICYmXG4gICAgICAgIGl0ZW0uY29sbGVjdGlvbklkID09PSBjb2xsZWN0aW9uSWQgJiZcbiAgICAgICAgaXRlbS5pZCA9PT0gaXRlbUlkXG4gICAgKSB8fCBERUZBVUxUX0lURU1cbiAgLCBbY29sbGVjdGlvbklkLCBpdGVtSWQsIGNoYWluLCBuZnRJdGVtcywgZnJvbV0pO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb25JbmZvID0gdXNlTWVtbygoKTogTmZ0Q29sbGVjdGlvbiA9PlxuICAgIG5mdENvbGxlY3Rpb25zLmZpbmQoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgY2hhaW4gPT09IGl0ZW0uY2hhaW4gJiZcbiAgICAgIGl0ZW0uY29sbGVjdGlvbklkID09PSBjb2xsZWN0aW9uSWRcbiAgICApIHx8IERFRkFVTFRfQ09MTEVDVElPTlxuICAsIFtjb2xsZWN0aW9uSWQsIGNoYWluLCBuZnRDb2xsZWN0aW9uc10pO1xuXG4gIGNvbnN0IGNoYWluSW5mbyA9IHVzZU1lbW8oKCkgPT4gY2hhaW5JbmZvTWFwW2NoYWluXSwgW2NoYWluSW5mb01hcCwgY2hhaW5dKTtcbiAgY29uc3QgYWRkcmVzc1ByZWZpeCA9IHVzZUdldENoYWluUHJlZml4QnlTbHVnKGNoYWluKTtcbiAgY29uc3QgY2hhaW5HZW5lc2lzSGFzaCA9IGNoYWluSW5mb01hcFtjaGFpbl0/LnN1YnN0cmF0ZUluZm8/LmdlbmVzaXNIYXNoIHx8ICcnO1xuXG4gIGNvbnN0IHsgb25FcnJvciwgb25TdWNjZXNzIH0gPSB1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbihvbkRvbmUpO1xuXG4gIGNvbnN0IFtpc0Rpc2FibGUsIHNldElzRGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJlY2lwaWVudFZhbGlkYXRvciA9IHVzZUNhbGxiYWNrKCh7IGdldEZpZWxkVmFsdWUgfTogRm9ybUluc3RhbmNlPFNlbmROZnRQYXJhbXM+KSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgICB2YWxpZGF0b3I6IChydWxlOiBGb3JtUnVsZSwgX3JlY2lwaWVudEFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICBpZiAoIV9yZWNpcGllbnRBZGRyZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ1RoZSByZWNpcGllbnQgYWRkcmVzcyBpcyByZXF1aXJlZCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNBZGRyZXNzKF9yZWNpcGllbnRBZGRyZXNzKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdJbnZhbGlkIHJlY2lwaWVudCBhZGRyZXNzJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2FtZUFkZHJlc3MoX3JlY2lwaWVudEFkZHJlc3MsIGZyb20pKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ1RoZSByZWNpcGllbnQgYWRkcmVzcyBjYW4gbm90IGJlIHRoZSBzYW1lIGFzIHRoZSBzZW5kZXIgYWRkcmVzcycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0V0aGVyZXVtQWRkcmVzcyhfcmVjaXBpZW50QWRkcmVzcykgIT09IGlzRXRoZXJldW1BZGRyZXNzKGZyb20pKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGlzRXRoZXJldW1BZGRyZXNzKGZyb20pID8gdCgnUmVjZWl2ZSBhZGRyZXNzIG11c3QgYmUgb2YgRVZNIGFjY291bnQuJykgOiB0KCdSZWNlaXZlIGFkZHJlc3MgbXVzdCBiZSBvZiBTdWJzdHJhdGUgYWNjb3VudC4nKTtcblxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBmaW5kQWNjb3VudEJ5QWRkcmVzcyhhY2NvdW50cywgX3JlY2lwaWVudEFkZHJlc3MpO1xuXG4gICAgICAgIGlmIChhY2NvdW50ICYmIGFjY291bnQuaXNIYXJkd2FyZSkge1xuICAgICAgICAgIGNvbnN0IGNoYWluSW5mbyA9IGNoYWluSW5mb01hcFtjaGFpbl07XG4gICAgICAgICAgY29uc3QgYXZhaWxhYmxlR2VuOiBzdHJpbmdbXSA9IGFjY291bnQuYXZhaWxhYmxlR2VuZXNpc0hhc2hlcyB8fCBbXTtcblxuICAgICAgICAgIGlmICghaXNFdGhlcmV1bUFkZHJlc3MoYWNjb3VudC5hZGRyZXNzKSAmJiAhYXZhaWxhYmxlR2VuLmluY2x1ZGVzKGNoYWluSW5mbz8uc3Vic3RyYXRlSW5mbz8uZ2VuZXNpc0hhc2ggfHwgJycpKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFpbk5hbWUgPSBjaGFpbkluZm8/Lm5hbWUgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnV3JvbmcgbmV0d29yay4gWW91ciBMZWRnZXIgYWNjb3VudCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHt7bmV0d29ya319LiBQbGVhc2UgY2hvb3NlIGFub3RoZXIgcmVjZWl2aW5nIGFjY291bnQgYW5kIHRyeSBhZ2Fpbi4nLCB7IHJlcGxhY2U6IHsgbmV0d29yazogY2hhaW5OYW1lIH0gfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2Zyb20sIGFjY291bnRzLCB0LCBjaGFpbkluZm9NYXAsIGNoYWluXSk7XG5cbiAgY29uc3Qgb25GaWVsZHNDaGFuZ2U6IEZvcm1DYWxsYmFja3M8U2VuZE5mdFBhcmFtcz5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSkgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3IgfSA9IHNpbXBsZUNoZWNrRm9ybShhbGxGaWVsZHMpO1xuXG4gICAgcGVyc2lzdERhdGEoZm9ybS5nZXRGaWVsZHNWYWx1ZSgpKTtcbiAgICBzZXRJc0Rpc2FibGUoZXJyb3IpO1xuICB9LCBbZm9ybSwgcGVyc2lzdERhdGFdKTtcblxuICAvLyBTdWJtaXQgdHJhbnNhY3Rpb25cbiAgY29uc3Qgb25TdWJtaXQ6IEZvcm1DYWxsYmFja3M8U2VuZE5mdFBhcmFtcz5bJ29uRmluaXNoJ10gPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWVzOiBTZW5kTmZ0UGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBpc0V0aGVyZXVtSW50ZXJmYWNlID0gaXNFdGhlcmV1bUFkZHJlc3MoZnJvbSk7XG4gICAgICBjb25zdCB7IHRvIH0gPSB2YWx1ZXM7XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZnRQYXJhbXNIYW5kbGVyKG5mdEl0ZW0sIGNoYWluKTtcbiAgICAgIGxldCBzZW5kUHJvbWlzZTogUHJvbWlzZTxTV1RyYW5zYWN0aW9uUmVzcG9uc2U+O1xuXG4gICAgICBpZiAoaXNFdGhlcmV1bUludGVyZmFjZSkge1xuICAgICAgICAvLyBTZW5kIE5GVCB3aXRoIEVWTSBpbnRlcmZhY2VcbiAgICAgICAgc2VuZFByb21pc2UgPSBldm1OZnRTdWJtaXRUcmFuc2FjdGlvbih7XG4gICAgICAgICAgc2VuZGVyQWRkcmVzczogZnJvbSxcbiAgICAgICAgICBuZXR3b3JrS2V5OiBjaGFpbixcbiAgICAgICAgICByZWNpcGllbnRBZGRyZXNzOiB0byxcbiAgICAgICAgICBuZnRJdGVtTmFtZTogbmZ0SXRlbT8ubmFtZSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgbmZ0SXRlbVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlbmQgTkZUIHdpdGggc3Vic3RyYXRlIGludGVyZmFjZVxuICAgICAgICBzZW5kUHJvbWlzZSA9IHN1YnN0cmF0ZU5mdFN1Ym1pdFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICBuZXR3b3JrS2V5OiBjaGFpbixcbiAgICAgICAgICByZWNpcGllbnRBZGRyZXNzOiB0byxcbiAgICAgICAgICBzZW5kZXJBZGRyZXNzOiBmcm9tLFxuICAgICAgICAgIG5mdEl0ZW1OYW1lOiBuZnRJdGVtPy5uYW1lLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBuZnRJdGVtXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIHRyYW5zZmVyIGFjdGlvblxuICAgICAgICBzZW5kUHJvbWlzZVxuICAgICAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgICAgICAuY2F0Y2gob25FcnJvcilcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSxcbiAgICBbY2hhaW4sIGZyb20sIG5mdEl0ZW0sIG9uRXJyb3IsIG9uU3VjY2Vzc11cbiAgKTtcblxuICBjb25zdCBjaGVja0FjdGlvbiA9IHVzZVByZUNoZWNrQWN0aW9uKGZyb20pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5mdEl0ZW0gPT09IERFRkFVTFRfSVRFTSB8fCBjb2xsZWN0aW9uSW5mbyA9PT0gREVGQVVMVF9DT0xMRUNUSU9OKSB7XG4gICAgICBuYXZpZ2F0ZSgnL2hvbWUvbmZ0cy9jb2xsZWN0aW9ucycpO1xuICAgIH1cbiAgfSwgW2NvbGxlY3Rpb25JbmZvLCBuYXZpZ2F0ZSwgbmZ0SXRlbV0pO1xuXG4gIC8vIGVuYWJsZSBidXR0b24gYXQgZmlyc3QgdGltZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWZhdWx0RGF0YS50bykge1xuICAgICAgLy8gRmlyc3QgdGltZSB0aGUgZm9ybSBpcyBlbXB0eSwgc28gbmVlZCB0aW1lIG91dFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKS5maW5hbGx5KG5vb3ApO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH0sIFtmb3JtLCBkZWZhdWx0RGF0YV0pO1xuXG4gIC8vIEZvY3VzIHRvIHRoZSBmaXJzdCBmaWVsZFxuICB1c2VGb2N1c0Zvcm1JdGVtKGZvcm0sICd0bycpO1xuICB1c2VSZXN0b3JlVHJhbnNhY3Rpb24oZm9ybSk7XG4gIHVzZUluaXRWYWxpZGF0ZVRyYW5zYWN0aW9uKHZhbGlkYXRlRmllbGRzLCBmb3JtLCBkZWZhdWx0RGF0YSk7XG5cbiAgY29uc3Qgc2hvdzNETW9kZWwgPSBTSE9XXzNEX01PREVMU19DSEFJTi5pbmNsdWRlcyhuZnRJdGVtLmNoYWluKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VHJhbnNhY3Rpb25Db250ZW50IGNsYXNzTmFtZT17Q04oJy10cmFuc2FjdGlvbi1jb250ZW50Jyl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbCB0ZXh0LWNlbnRlcid9PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgaGVpZ2h0PXsxMjB9XG4gICAgICAgICAgICBtb2RlbFZpZXdlclByb3BzPXtzaG93M0RNb2RlbCA/IERFRkFVTFRfTU9ERUxfVklFV0VSX1BST1BTIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgc3JjPXtuZnRJdGVtLmltYWdlfVxuICAgICAgICAgICAgd2lkdGg9ezEyMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5LlRpdGxlIGxldmVsPXs1fT5cbiAgICAgICAgICAgIHtuZnRJdGVtLm5hbWV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5LlRpdGxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT17J2Zvcm0tY29udGFpbmVyIGZvcm0tc3BhY2Utc20nfVxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17Zm9ybURlZmF1bHR9XG4gICAgICAgICAgb25GaWVsZHNDaGFuZ2U9e29uRmllbGRzQ2hhbmdlfVxuICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxIaWRkZW5JbnB1dCBmaWVsZHM9e2hpZGRlbkZpZWxkc30gLz5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBuYW1lPXsndG8nfVxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgcmVjaXBpZW50VmFsaWRhdG9yXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgc3RhdHVzSGVscEFzVG9vbHRpcD17dHJ1ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWRkcmVzc0lucHV0XG4gICAgICAgICAgICAgIGFkZHJlc3NQcmVmaXg9e2FkZHJlc3NQcmVmaXh9XG4gICAgICAgICAgICAgIGFsbG93RG9tYWluPXt0cnVlfVxuICAgICAgICAgICAgICBjaGFpbj17Y2hhaW59XG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdTZW5kIHRvJyl9XG4gICAgICAgICAgICAgIG5ldHdvcmtHZW5lc2lzSGFzaD17Y2hhaW5HZW5lc2lzSGFzaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ0FjY291bnQgYWRkcmVzcycpfVxuICAgICAgICAgICAgICBzYXZlQWRkcmVzcz17dHJ1ZX1cbiAgICAgICAgICAgICAgc2hvd0FkZHJlc3NCb29rPXt0cnVlfVxuICAgICAgICAgICAgICBzaG93U2Nhbm5lcj17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgPENoYWluU2VsZWN0b3JcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgIGl0ZW1zPXtjaGFpbkluZm8gPyBbeyBuYW1lOiBjaGFpbkluZm8ubmFtZSwgc2x1ZzogY2hhaW5JbmZvLnNsdWcgfV0gOiBbXX1cbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ05ldHdvcmsnKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2NvbGxlY3Rpb25JbmZvLmNoYWlufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgIDxGcmVlQmFsYW5jZVxuICAgICAgICAgIGFkZHJlc3M9e2Zyb219XG4gICAgICAgICAgY2hhaW49e2NoYWlufVxuICAgICAgICAgIGxhYmVsPXt0KCdTZW5kZXIgdHJhbnNmZXJhYmxlIGJhbGFuY2UnKSArICc6J31cbiAgICAgICAgICBvbkJhbGFuY2VSZWFkeT17c2V0SXNCYWxhbmNlUmVhZHl9XG4gICAgICAgIC8+XG4gICAgICA8L1RyYW5zYWN0aW9uQ29udGVudD5cbiAgICAgIDxUcmFuc2FjdGlvbkZvb3RlclxuICAgICAgICBjbGFzc05hbWU9eydzZW5kLW5mdC10cmFuc2FjdGlvbi1mb290ZXInfVxuICAgICAgICBlcnJvcnM9e1tdfVxuICAgICAgICB3YXJuaW5ncz17W119XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlIHx8ICFpc0JhbGFuY2VSZWFkeX1cbiAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBwaG9zcGhvckljb249e0Fycm93Q2lyY2xlUmlnaHR9XG4gICAgICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgb25DbGljaz17Y2hlY2tBY3Rpb24oZm9ybS5zdWJtaXQsIEV4dHJpbnNpY1R5cGUuU0VORF9ORlQpfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ05leHQnKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1RyYW5zYWN0aW9uRm9vdGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgV3JhcHBlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ25mdCddKX1cbiAgICA+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlbmRORlQgPSBzdHlsZWQoV3JhcHBlcik8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmbGV4OiAxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbCBoNSc6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luWFMsXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblxuICAgIH0sXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbCc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXG4gICAgICAnLmFudC1pbWFnZS1pbWcnOiB7XG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTZW5kTkZUO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJQYXRoRm9yV2VpZ2h0IH0gZnJvbSAnLi4vbGliL2luZGV4LmVzbS5qcyc7XG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vbGliL0ljb25CYXNlLmVzbS5qcyc7XG5cbi8qIEdFTkVSQVRFRCBGSUxFICovXG52YXIgcGF0aHNCeVdlaWdodCA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImJvbGRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZHVvdG9uZVwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBvcGFjaXR5OiBcIjAuMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjIsMTA0LjIsMCwwLDAsMTI4LDI0Wm00Ny40LDEwNy4xYTguNyw4LjcsMCwwLDEtMS44LDIuNmwtMzMuOSwzMy45YTcuNiw3LjYsMCwwLDEtNS42LDIuMyw3LjgsNy44LDAsMCwxLTUuNy0yLjMsOCw4LDAsMCwxLDAtMTEuM0wxNDguNywxMzZIODhhOCw4LDAsMCwxLDAtMTZoNjAuN0wxMjguNCw5OS43YTgsOCwwLDAsMSwxMS4zLTExLjNsMzMuOSwzMy45YTguNyw4LjcsMCwwLDEsMS44LDIuNkE4LjMsOC4zLDAsMCwxLDE3NS40LDEzMS4xWlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEzNC4xIDE2MS45IDE2OCAxMjggMTM0LjEgOTQuMVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInJlZ3VsYXJcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5cbnZhciByZW5kZXJQYXRoID0gZnVuY3Rpb24gcmVuZGVyUGF0aCh3ZWlnaHQsIGNvbG9yKSB7XG4gIHJldHVybiByZW5kZXJQYXRoRm9yV2VpZ2h0KHdlaWdodCwgY29sb3IsIHBhdGhzQnlXZWlnaHQpO1xufTtcblxudmFyIEFycm93Q2lyY2xlUmlnaHQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuQXJyb3dDaXJjbGVSaWdodC5kaXNwbGF5TmFtZSA9IFwiQXJyb3dDaXJjbGVSaWdodFwiO1xuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0NpcmNsZVJpZ2h0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyb3dDaXJjbGVSaWdodC5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiRXh0cmluc2ljVHlwZSIsImlzU2FtZUFkZHJlc3MiLCJBZGRyZXNzSW5wdXQiLCJDaGFpblNlbGVjdG9yIiwiSGlkZGVuSW5wdXQiLCJQYWdlV3JhcHBlciIsIkRFRkFVTFRfTU9ERUxfVklFV0VSX1BST1BTIiwiU0hPV18zRF9NT0RFTFNfQ0hBSU4iLCJEYXRhQ29udGV4dCIsInVzZUZvY3VzRm9ybUl0ZW0iLCJ1c2VHZXRDaGFpblByZWZpeEJ5U2x1ZyIsInVzZUhhbmRsZVN1Ym1pdFRyYW5zYWN0aW9uIiwidXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24iLCJ1c2VQcmVDaGVja0FjdGlvbiIsInVzZVJlc3RvcmVUcmFuc2FjdGlvbiIsInVzZVNlbGVjdG9yIiwidXNlU2V0Q3VycmVudFBhZ2UiLCJ1c2VUcmFuc2FjdGlvbkNvbnRleHQiLCJ1c2VXYXRjaFRyYW5zYWN0aW9uIiwiZXZtTmZ0U3VibWl0VHJhbnNhY3Rpb24iLCJzdWJzdHJhdGVOZnRTdWJtaXRUcmFuc2FjdGlvbiIsImZpbmRBY2NvdW50QnlBZGRyZXNzIiwibm9vcCIsInNpbXBsZUNoZWNrRm9ybSIsIkJ1dHRvbiIsIkZvcm0iLCJJY29uIiwiSW1hZ2UiLCJUeXBvZ3JhcGh5IiwiQ04iLCJBcnJvd0NpcmNsZVJpZ2h0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwiaXNBZGRyZXNzIiwiaXNFdGhlcmV1bUFkZHJlc3MiLCJuZnRQYXJhbXNIYW5kbGVyIiwiRnJlZUJhbGFuY2UiLCJUcmFuc2FjdGlvbkNvbnRlbnQiLCJUcmFuc2FjdGlvbkZvb3RlciIsIkRFRkFVTFRfQ09MTEVDVElPTiIsImNvbGxlY3Rpb25JZCIsImNoYWluIiwiREVGQVVMVF9JVEVNIiwib3duZXIiLCJpZCIsImhpZGRlbkZpZWxkcyIsInZhbGlkYXRlRmllbGRzIiwiQ29tcG9uZW50IiwidCIsIm5hdmlnYXRlIiwiZGVmYXVsdERhdGEiLCJvbkRvbmUiLCJwZXJzaXN0RGF0YSIsIml0ZW1JZCIsImZvcm0iLCJ1c2VGb3JtIiwiZm9ybURlZmF1bHQiLCJmcm9tIiwiY2hhaW5JbmZvTWFwIiwic3RhdGUiLCJjaGFpblN0b3JlIiwibmZ0Q29sbGVjdGlvbnMiLCJuZnRJdGVtcyIsIm5mdCIsImFjY291bnRzIiwiYWNjb3VudFN0YXRlIiwiaXNCYWxhbmNlUmVhZHkiLCJzZXRJc0JhbGFuY2VSZWFkeSIsIm5mdEl0ZW0iLCJmaW5kIiwiaXRlbSIsImNvbGxlY3Rpb25JbmZvIiwiY2hhaW5JbmZvIiwiYWRkcmVzc1ByZWZpeCIsImNoYWluR2VuZXNpc0hhc2giLCJzdWJzdHJhdGVJbmZvIiwiZ2VuZXNpc0hhc2giLCJvbkVycm9yIiwib25TdWNjZXNzIiwiaXNEaXNhYmxlIiwic2V0SXNEaXNhYmxlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZWNpcGllbnRWYWxpZGF0b3IiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwicnVsZSIsIl9yZWNpcGllbnRBZGRyZXNzIiwiUHJvbWlzZSIsInJlamVjdCIsIm1lc3NhZ2UiLCJhY2NvdW50IiwiaXNIYXJkd2FyZSIsImF2YWlsYWJsZUdlbiIsImF2YWlsYWJsZUdlbmVzaXNIYXNoZXMiLCJhZGRyZXNzIiwiaW5jbHVkZXMiLCJjaGFpbk5hbWUiLCJuYW1lIiwicmVwbGFjZSIsIm5ldHdvcmsiLCJyZXNvbHZlIiwib25GaWVsZHNDaGFuZ2UiLCJjaGFuZ2VkRmllbGRzIiwiYWxsRmllbGRzIiwiZXJyb3IiLCJnZXRGaWVsZHNWYWx1ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiaXNFdGhlcmV1bUludGVyZmFjZSIsInRvIiwicGFyYW1zIiwic2VuZFByb21pc2UiLCJzZW5kZXJBZGRyZXNzIiwibmV0d29ya0tleSIsInJlY2lwaWVudEFkZHJlc3MiLCJuZnRJdGVtTmFtZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY2F0Y2giLCJmaW5hbGx5IiwiY2hlY2tBY3Rpb24iLCJzaG93M0RNb2RlbCIsInVuZGVmaW5lZCIsImltYWdlIiwic2x1ZyIsInN1Ym1pdCIsIlNFTkRfTkZUIiwiV3JhcHBlciIsInByb3BzIiwiY2xhc3NOYW1lIiwiZGF0YUNvbnRleHQiLCJhd2FpdFN0b3JlcyIsIlNlbmRORlQiLCJ0aGVtZSIsInRva2VuIiwiZmxleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3ciLCJtYXJnaW5Ub3AiLCJtYXJnaW5YUyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsIndpZHRoIiwiYWxpZ25JdGVtcyIsIm1heFdpZHRoIiwib2JqZWN0Rml0Il0sInNvdXJjZVJvb3QiOiIifQ==