"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_History_index_tsx"],{

/***/ "../extension-base/src/utils/address.ts":
/*!**********************************************!*\
  !*** ../extension-base/src/utils/address.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertSubjectInfoToAddresses": () => (/* binding */ convertSubjectInfoToAddresses),
/* harmony export */   "quickFormatAddressToCompare": () => (/* binding */ quickFormatAddressToCompare),
/* harmony export */   "simpleAddress": () => (/* binding */ simpleAddress)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-base/utils/index */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/encode.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/decode.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/is.js");
// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0



const simpleAddress = address => {
  if ((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_0__.isEthereumAddress)(address)) {
    return address;
  }
  return (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__.encodeAddress)((0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_2__.decodeAddress)(address));
};
function quickFormatAddressToCompare(address) {
  if (!(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_3__.isAddress)(address)) {
    return address;
  }
  return (0,_subwallet_extension_base_utils_index__WEBPACK_IMPORTED_MODULE_4__.reformatAddress)(address, 42).toLowerCase();
}
const convertSubjectInfoToAddresses = subjectInfo => {
  return Object.values(subjectInfo).map(info => ({
    address: info.json.address,
    type: info.type,
    ...info.json.meta
  }));
};

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/History/Detail/index.tsx":
/*!********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/History/Detail/index.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryDetailModal": () => (/* binding */ HistoryDetailModal)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_services_transaction_service_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-base/services/transaction-service/utils */ "../extension-base/src/services/transaction-service/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowSquareUpRight.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _parts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/Layout */ "../extension-koni-ui/src/Popup/Home/History/Detail/parts/Layout.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0












function Component({
  className = '',
  data,
  onCancel
}) {
  var _data$displayData;
  const chainInfoMap = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.chainStore.chainInfoMap);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const openBlockExplorer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(link => {
    return () => {
      window.open(link, '_blank');
    };
  }, []);
  const modalFooter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!data) {
      return null;
    }
    const extrinsicType = data.type;
    const chainInfo = chainInfoMap[data.chain];
    let originChainInfo = chainInfo;
    if (extrinsicType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_6__.ExtrinsicType.TRANSFER_XCM && data.additionalInfo) {
      const additionalInfo = data.additionalInfo;
      originChainInfo = chainInfoMap[additionalInfo.originalChain] || chainInfo;
    }
    const link = data.extrinsicHash && data.extrinsicHash !== '' && (0,_subwallet_extension_base_services_transaction_service_utils__WEBPACK_IMPORTED_MODULE_7__.getExplorerLink)(originChainInfo, data.extrinsicHash, 'tx');
    console.log('Explorer Link:', link);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
      block: true,
      disabled: !link,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
        weight: 'fill'
      }),
      onClick: openBlockExplorer(link || ''),
      children: t('View on explorer')
    });
  }, [chainInfoMap, data, openBlockExplorer, t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: className,
    footer: modalFooter,
    id: _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.HISTORY_DETAIL_MODAL,
    onCancel: onCancel,
    title: (data === null || data === void 0 ? void 0 : (_data$displayData = data.displayData) === null || _data$displayData === void 0 ? void 0 : _data$displayData.title) || '',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: '__layout-container',
      children: data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_parts_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: data
      })
    })
  });
}
const HistoryDetailModal = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])(Component).withConfig({
  displayName: "Detail__HistoryDetailModal",
  componentId: "sc-5vqnl8-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.ant-sw-modal-body': {
      marginBottom: 0
    },
    '.ant-sw-modal-footer': {
      border: 0
    }
  };
});

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/History/Detail/parts/Amount.tsx":
/*!***************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/History/Detail/parts/Amount.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0










const Component = props => {
  const {
    data
  } = props;
  const {
    amount,
    type: transactionType
  } = data;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const isStaking = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeStaking)(data.type);
  const isCrowdloan = data.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.CROWDLOAN;
  const isNft = data.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.SEND_NFT;
  const amountLabel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    switch (transactionType) {
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.STAKING_BOND:
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.STAKING_JOIN_POOL:
        return t('Staking value');
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.STAKING_WITHDRAW:
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.STAKING_POOL_WITHDRAW:
        return t('Withdraw value');
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.STAKING_UNBOND:
        return t('Unstake value');
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.STAKING_CANCEL_UNSTAKE:
        return t('Cancel unstake value');
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.CROWDLOAN:
        return t('Contribute balance');
      default:
        return t('Amount');
    }
  }, [t, transactionType]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [(isStaking || isCrowdloan || amount) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Number, {
      decimals: (amount === null || amount === void 0 ? void 0 : amount.decimals) || undefined,
      label: amountLabel,
      suffix: (amount === null || amount === void 0 ? void 0 : amount.symbol) || undefined,
      value: (amount === null || amount === void 0 ? void 0 : amount.value) || '0'
    }), data.additionalInfo && isNft && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Default, {
      label: t('Collection Name'),
      children: data.additionalInfo.collectionName
    })]
  });
};
const HistoryDetailAmount = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(Component).withConfig({
  displayName: "Amount__HistoryDetailAmount",
  componentId: "sc-13nv896-0"
})(({
  theme: {
    token
  }
}) => {
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoryDetailAmount);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/History/Detail/parts/Fee.tsx":
/*!************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/History/Detail/parts/Fee.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0









const Component = props => {
  const {
    data
  } = props;
  const {
    fee
  } = data;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const xcmInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeTransfer)(data.type) && data.additionalInfo && data.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.ExtrinsicType.TRANSFER_XCM) {
      return data.additionalInfo;
    }
    return undefined;
  }, [data.additionalInfo, data.type]);
  if (xcmInfo) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Number, {
        decimals: (fee === null || fee === void 0 ? void 0 : fee.decimals) || undefined,
        label: t('Origin Chain fee'),
        suffix: (fee === null || fee === void 0 ? void 0 : fee.symbol) || undefined,
        value: (fee === null || fee === void 0 ? void 0 : fee.value) || '0'
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Number, {
    decimals: (fee === null || fee === void 0 ? void 0 : fee.decimals) || undefined,
    label: t('Network fee'),
    suffix: (fee === null || fee === void 0 ? void 0 : fee.symbol) || undefined,
    value: (fee === null || fee === void 0 ? void 0 : fee.value) || '0'
  });
};
const HistoryDetailFee = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(Component).withConfig({
  displayName: "Fee__HistoryDetailFee",
  componentId: "sc-lf1su0-0"
})(({
  theme: {
    token
  }
}) => {
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoryDetailFee);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/History/Detail/parts/Header.tsx":
/*!***************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/History/Detail/parts/Header.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0












const Component = props => {
  var _chainInfoMap$data$ch, _chainInfoMap$data$ch2;
  const {
    data
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const {
    chainInfoMap
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.chainStore);
  const isStaking = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeStaking)(data.type);
  const xcmInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeTransfer)(data.type) && data.additionalInfo && data.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_6__.ExtrinsicType.TRANSFER_XCM) {
      return data.additionalInfo;
    }
    return undefined;
  }, [data.additionalInfo, data.type]);
  if (xcmInfo) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Transfer, {
      destinationChain: {
        slug: xcmInfo.destinationChain,
        name: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__._getChainName)(chainInfoMap[xcmInfo.destinationChain])
      },
      originChain: {
        slug: xcmInfo.originalChain || data.chain,
        name: (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_7__._getChainName)(chainInfoMap[xcmInfo.originalChain || data.chain])
      },
      recipientAddress: data.to,
      recipientName: data.toName,
      senderAddress: data.from,
      senderName: data.fromName
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Chain, {
      chain: data.chain,
      label: t('Network')
    }), isStaking ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Account, {
      address: data.from,
      label: t('From account'),
      name: data.fromName,
      networkPrefix: (_chainInfoMap$data$ch = chainInfoMap[data.chain]) === null || _chainInfoMap$data$ch === void 0 ? void 0 : (_chainInfoMap$data$ch2 = _chainInfoMap$data$ch.substrateInfo) === null || _chainInfoMap$data$ch2 === void 0 ? void 0 : _chainInfoMap$data$ch2.addressPrefix
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Transfer, {
      recipientAddress: data.to,
      recipientName: data.toName,
      senderAddress: data.from,
      senderName: data.fromName
    })]
  });
};
const HistoryDetailHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(Component).withConfig({
  displayName: "Header__HistoryDetailHeader",
  componentId: "sc-4187my-0"
})(({
  theme: {
    token
  }
}) => {
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoryDetailHeader);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/History/Detail/parts/Layout.tsx":
/*!***************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/History/Detail/parts/Layout.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Amount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Amount */ "../extension-koni-ui/src/Popup/Home/History/Detail/parts/Amount.tsx");
/* harmony import */ var _Fee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fee */ "../extension-koni-ui/src/Popup/Home/History/Detail/parts/Fee.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "../extension-koni-ui/src/Popup/Home/History/Detail/parts/Header.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0














const Component = props => {
  const {
    className,
    data
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
  const {
    language
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.settings);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.DisplayType, {
      label: t('Transaction type'),
      typeName: t(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.TxTypeNameMap[data.type])
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: data
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Status, {
      label: t('Transaction status'),
      statusIcon: _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.HistoryStatusMap[data.status].icon,
      statusName: t(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.HistoryStatusMap[data.status].name),
      valueColorSchema: _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.HistoryStatusMap[data.status].schema
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Default, {
      label: t('Extrinsic hash'),
      children: (data.extrinsicHash || '').startsWith('0x') ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.toShort)(data.extrinsicHash, 8, 9) : '...'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Default, {
      label: t('Transaction time'),
      children: (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.formatHistoryDate)(data.time, language, 'detail')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Amount__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: data
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Fee__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data
    })]
  });
};
const HistoryDetailLayout = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(Component).withConfig({
  displayName: "Layout__HistoryDetailLayout",
  componentId: "sc-gc3ie8-0"
})(({
  theme: {
    token
  }
}) => {
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoryDetailLayout);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/History/index.tsx":
/*!*************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/History/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_base_utils_address__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/extension-base/utils/address */ "../extension-base/src/utils/address.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-sub-header/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowUpRight.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowDownLeft.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ClockCounterClockwise.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Database.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Rocket.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Aperture.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Spinner.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Clock.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Detail */ "../extension-koni-ui/src/Popup/Home/History/Detail/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0



















const IconMap = {
  send: phosphor_react__WEBPACK_IMPORTED_MODULE_8__["default"],
  receive: phosphor_react__WEBPACK_IMPORTED_MODULE_9__["default"],
  claim_reward: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
  staking: phosphor_react__WEBPACK_IMPORTED_MODULE_11__["default"],
  crowdloan: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
  nft: phosphor_react__WEBPACK_IMPORTED_MODULE_13__["default"],
  processing: phosphor_react__WEBPACK_IMPORTED_MODULE_14__["default"],
  default: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"]
};
function getIcon(item) {
  if (item.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicStatus.PROCESSING || item.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicStatus.SUBMITTING) {
    return IconMap.processing;
  }
  if (item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.SEND_NFT) {
    return IconMap.nft;
  }
  if (item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.CROWDLOAN) {
    return IconMap.crowdloan;
  }
  if (item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_CLAIM_REWARD) {
    return IconMap.claim_reward;
  }
  if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.isTypeStaking)(item.type)) {
    return IconMap.staking;
  }
  return IconMap.default;
}
function getDisplayData(item, nameMap, titleMap) {
  let displayData;
  const time = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.customFormatDate)(item.time, '#hhhh#:#mm#');
  const displayStatus = item.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicStatus.FAIL ? 'fail' : '';
  if (item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.TRANSFER_BALANCE || item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.TRANSFER_TOKEN || item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.TRANSFER_XCM || item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.EVM_EXECUTE) {
    if (item.direction === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.TransactionDirection.RECEIVED) {
      displayData = {
        className: `-receive -${item.status}`,
        title: titleMap.received,
        name: nameMap.received,
        typeName: `${nameMap.received} ${displayStatus} - ${time}`,
        icon: IconMap.receive
      };
    } else {
      displayData = {
        className: `-send -${item.status}`,
        title: titleMap.send,
        name: nameMap.send,
        typeName: `${nameMap.send} ${displayStatus} - ${time}`,
        icon: IconMap.send
      };
    }
  } else {
    const typeName = nameMap[item.type] || nameMap.default;
    displayData = {
      className: `-${item.type} -${item.status}`,
      title: titleMap[item.type],
      typeName: `${typeName} ${displayStatus} - ${time}`,
      name: nameMap[item.type],
      icon: getIcon(item)
    };
  }
  if (item.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicStatus.PROCESSING) {
    displayData.className = '-processing';
    displayData.typeName = nameMap.processing;
  }
  if (item.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicStatus.SUBMITTING) {
    displayData.className = '-processing';
    displayData.typeName = nameMap.submitting;
  }
  return displayData;
}
const FILTER_MODAL_ID = 'history-filter-id';
var FilterValue;
(function (FilterValue) {
  FilterValue["SEND"] = "send";
  FilterValue["RECEIVED"] = "received";
  FilterValue["NFT"] = "nft";
  FilterValue["STAKE"] = "stake";
  FilterValue["CLAIM"] = "claim";
  FilterValue["CROWDLOAN"] = "crowdloan";
  FilterValue["SUCCESSFUL"] = "successful";
  FilterValue["FAILED"] = "failed";
})(FilterValue || (FilterValue = {}));
function getHistoryItemKey(item) {
  return `${item.chain}-${item.address}-${item.transactionId || item.extrinsicHash}`;
}
const modalId = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.HISTORY_DETAIL_MODAL;
function Component({
  className = ''
}) {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetCurrentPage)('/home/history');
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  const {
    activeModal,
    checkActive,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__.ModalContext);
  const {
    accounts,
    currentAccount
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(root => root.accountState);
  const {
    historyList: rawHistoryList
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(root => root.transactionHistory);
  const {
    chainInfoMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(root => root.chainStore);
  const {
    language
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(root => root.settings);
  const isActive = checkActive(modalId);
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useFilterModal)(FILTER_MODAL_ID);
  const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return item => {
      if (!selectedFilters.length) {
        return true;
      }
      for (const filter of selectedFilters) {
        if (filter === FilterValue.SEND) {
          if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.isTypeTransfer)(item.type) && item.direction === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.TransactionDirection.SEND) {
            return true;
          }
        } else if (filter === FilterValue.RECEIVED) {
          if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.isTypeTransfer)(item.type) && item.direction === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.TransactionDirection.RECEIVED) {
            return true;
          }
        } else if (filter === FilterValue.NFT) {
          if (item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.SEND_NFT) {
            return true;
          }
        } else if (filter === FilterValue.STAKE) {
          if ((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.isTypeStaking)(item.type)) {
            return true;
          }
        } else if (filter === FilterValue.CLAIM) {
          if (item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_CLAIM_REWARD) {
            return true;
          }
        } else if (filter === FilterValue.CROWDLOAN) {
          if (item.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.CROWDLOAN) {
            return true;
          }
        } else if (filter === FilterValue.SUCCESSFUL) {
          if (item.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicStatus.SUCCESS) {
            return true;
          }
        } else if (filter === FilterValue.FAILED) {
          if (item.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicStatus.FAIL) {
            return true;
          }
        }
      }
      return false;
    };
  }, [selectedFilters]);
  const filterOptions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return [{
      label: t('Send token'),
      value: FilterValue.SEND
    }, {
      label: t('Receive token'),
      value: FilterValue.RECEIVED
    }, {
      label: t('NFT transaction'),
      value: FilterValue.NFT
    }, {
      label: t('Stake transaction'),
      value: FilterValue.STAKE
    }, {
      label: t('Claim staking reward'),
      value: FilterValue.CLAIM
    },
    // { label: t('Crowdloan transaction'), value: FilterValue.CROWDLOAN }, // support crowdloan later
    {
      label: t('Successful'),
      value: FilterValue.SUCCESSFUL
    }, {
      label: t('Failed'),
      value: FilterValue.FAILED
    }];
  }, [t]);
  const accountMap = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return accounts.reduce((accMap, cur) => {
      accMap[cur.address.toLowerCase()] = cur.name || '';
      return accMap;
    }, {});
  }, [accounts]);
  const typeNameMap = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => ({
    default: t('Transaction'),
    submitting: t('Submitting...'),
    processing: t('Processing...'),
    send: t('Send'),
    received: t('Receive'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.SEND_NFT]: t('NFT'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.CROWDLOAN]: t('Crowdloan'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_JOIN_POOL]: t('Stake'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_LEAVE_POOL]: t('Unstake'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_BOND]: t('Bond'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_UNBOND]: t('Unbond'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_CLAIM_REWARD]: t('Claim Reward'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_WITHDRAW]: t('Withdraw'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_CANCEL_UNSTAKE]: t('Cancel unstake'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.EVM_EXECUTE]: t('EVM Transaction')
  }), [t]);
  const typeTitleMap = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => ({
    default: t('Transaction'),
    send: t('Send token'),
    received: t('Receive token'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.SEND_NFT]: t('NFT transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.CROWDLOAN]: t('Crowdloan transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_JOIN_POOL]: t('Stake transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_LEAVE_POOL]: t('Unstake transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_BOND]: t('Bond transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_UNBOND]: t('Unbond transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_CLAIM_REWARD]: t('Claim Reward transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_WITHDRAW]: t('Withdraw transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_CANCEL_UNSTAKE]: t('Cancel unstake transaction'),
    [_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.EVM_EXECUTE]: t('EVM Transaction')
  }), [t]);

  // Fill display data to history list
  const historyMap = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    const currentAddress = (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) || '';
    const currentAddressLowerCase = currentAddress.toLowerCase();
    const isFilterByAddress = (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) && !(0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__.isAccountAll)(currentAddress);
    const finalHistoryMap = {};
    rawHistoryList.forEach(item => {
      // Filter account by current account
      if (isFilterByAddress && currentAddressLowerCase !== (0,_subwallet_extension_base_utils_address__WEBPACK_IMPORTED_MODULE_19__.quickFormatAddressToCompare)(item.address)) {
        return;
      }

      // Format display name for account by address
      const fromName = accountMap[(0,_subwallet_extension_base_utils_address__WEBPACK_IMPORTED_MODULE_19__.quickFormatAddressToCompare)(item.from) || ''];
      const toName = accountMap[(0,_subwallet_extension_base_utils_address__WEBPACK_IMPORTED_MODULE_19__.quickFormatAddressToCompare)(item.to) || ''];
      const key = getHistoryItemKey(item);
      finalHistoryMap[key] = {
        ...item,
        fromName,
        toName,
        displayData: getDisplayData(item, typeNameMap, typeTitleMap)
      };
    });
    return finalHistoryMap;
  }, [accountMap, rawHistoryList, typeNameMap, typeTitleMap, currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address]);
  const historyList = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return Object.values(historyMap).sort((a, b) => b.time - a.time);
  }, [historyMap]);
  const [curAdr] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address);

  // Handle detail modal
  const {
    chain,
    extrinsicHashOrId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)();
  const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const [openDetailLink, setOpenDetailLink] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(!!chain && !!extrinsicHashOrId);
  const onOpenDetail = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(item => {
    return () => {
      setSelectedItem(item);
      activeModal(modalId);
    };
  }, [activeModal]);
  const onCloseDetail = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    inactiveModal(modalId);
    setSelectedItem(null);
    setOpenDetailLink(false);
  }, [inactiveModal]);
  const onClickActionBtn = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (extrinsicHashOrId && chain && openDetailLink) {
      const existed = historyList.find(item => item.chain === chain && (item.transactionId === extrinsicHashOrId || item.extrinsicHash === extrinsicHashOrId));
      if (existed) {
        setSelectedItem(existed);
        activeModal(modalId);
      }
    }
  }, [activeModal, chain, extrinsicHashOrId, openDetailLink, historyList]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (isActive) {
      setSelectedItem(selected => {
        if (selected) {
          const key = getHistoryItemKey(selected);
          return historyMap[key] || null;
        } else {
          return selected;
        }
      });
    }
  }, [isActive, historyMap]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if ((currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) !== curAdr) {
      inactiveModal(modalId);
      setSelectedItem(null);
    }
  }, [curAdr, currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, inactiveModal]);
  const emptyList = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      emptyMessage: t('Your transactions will show up here'),
      emptyTitle: t('No transactions found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"]
    });
  }, [t]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(item => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.HistoryItem, {
      item: item,
      onClick: onOpenDetail(item)
    }, `${item.extrinsicHash}-${item.address}-${item.direction}`);
  }, [onOpenDetail]);
  const searchFunc = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((item, searchText) => {
    var _item$fromName, _item$toName, _ref, _item$amount, _item$fee, _item$tip, _chainInfoMap$item$ch, _chainInfoMap$item$ch2;
    const searchTextLowerCase = searchText.toLowerCase();
    const fromName = (_item$fromName = item.fromName) === null || _item$fromName === void 0 ? void 0 : _item$fromName.toLowerCase();
    const toName = (_item$toName = item.toName) === null || _item$toName === void 0 ? void 0 : _item$toName.toLowerCase();
    const symbol = (_ref = ((_item$amount = item.amount) === null || _item$amount === void 0 ? void 0 : _item$amount.symbol) || ((_item$fee = item.fee) === null || _item$fee === void 0 ? void 0 : _item$fee.symbol) || ((_item$tip = item.tip) === null || _item$tip === void 0 ? void 0 : _item$tip.symbol)) === null || _ref === void 0 ? void 0 : _ref.toLowerCase();
    const network = (_chainInfoMap$item$ch = chainInfoMap[item.chain]) === null || _chainInfoMap$item$ch === void 0 ? void 0 : (_chainInfoMap$item$ch2 = _chainInfoMap$item$ch.name) === null || _chainInfoMap$item$ch2 === void 0 ? void 0 : _chainInfoMap$item$ch2.toLowerCase();
    return (fromName === null || fromName === void 0 ? void 0 : fromName.includes(searchTextLowerCase)) || (toName === null || toName === void 0 ? void 0 : toName.includes(searchTextLowerCase)) || (symbol === null || symbol === void 0 ? void 0 : symbol.includes(searchTextLowerCase)) || (network === null || network === void 0 ? void 0 : network.includes(searchTextLowerCase));
  }, [chainInfoMap]);
  const groupBy = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(item => {
    return (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.formatHistoryDate)(item.time, language, 'list');
  }, [language]);
  const groupSeparator = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((group, idx, groupLabel) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "__group-separator",
      children: groupLabel
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
      className: `history ${className}`,
      resolve: dataContext.awaitStores(['transactionHistory']),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
        background: 'transparent',
        center: false,
        className: 'history-header',
        paddingVertical: true
        // todo: enable this code if support download feature
        // rightButtons={[
        //   {
        //     icon: (
        //       <Icon
        //         phosphorIcon={DownloadSimple}
        //         size={'md'}
        //         type='phosphor'
        //       />
        //     )
        //   }
        // ]}
        ,
        showBackButton: false,
        title: t('History')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"].Section, {
        actionBtnIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_25__["default"]
        }),
        enableSearchInput: true,
        filterBy: filterFunction,
        groupBy: groupBy,
        groupSeparator: groupSeparator,
        list: historyList,
        onClickActionBtn: onClickActionBtn,
        renderItem: renderItem,
        renderWhenEmpty: emptyList,
        searchFunction: searchFunc,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search history'),
        showActionBtn: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Detail__WEBPACK_IMPORTED_MODULE_6__.HistoryDetailModal, {
      data: selectedItem,
      onCancel: onCloseDetail
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.FilterModal, {
      id: FILTER_MODAL_ID,
      onApplyFilter: onApplyFilter,
      onCancel: onCloseFilterModal,
      onChangeOption: onChangeFilterOption,
      optionSelectionMap: filterSelectionMap,
      options: filterOptions
    })]
  });
}
const History = (0,styled_components__WEBPACK_IMPORTED_MODULE_26__["default"])(Component).withConfig({
  displayName: "History",
  componentId: "sc-9sdid2-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    '.history-header.ant-sw-sub-header-container': {
      marginBottom: 0
    },
    '.ant-sw-list-section': {
      flex: 1
    },
    '.ant-sw-sub-header-container': {
      marginBottom: token.marginXS
    },
    '.history-item + .history-item, .history-item + .___list-separator': {
      marginTop: token.marginXS
    },
    '.___list-separator': {
      fontSize: token.fontSizeSM,
      lineHeight: token.lineHeightSM,
      color: token.colorTextLight3,
      fontWeight: token.headingFontWeight,
      marginBottom: token.marginXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (History);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9IaXN0b3J5X2luZGV4X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR3dFO0FBRzJCO0FBRTVGLE1BQU1LLGFBQWEsR0FBSUMsT0FBZSxJQUFhO0VBQ3hELElBQUlGLHdFQUFpQixDQUFDRSxPQUFPLENBQUMsRUFBRTtJQUM5QixPQUFPQSxPQUFPO0VBQ2hCO0VBRUEsT0FBT0osb0VBQWEsQ0FBQ0Qsb0VBQWEsQ0FBQ0ssT0FBTyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVNLFNBQVNDLDJCQUEyQixDQUFFRCxPQUFnQixFQUFFO0VBQzdELElBQUksQ0FBQ0gsZ0VBQVMsQ0FBQ0csT0FBTyxDQUFDLEVBQUU7SUFDdkIsT0FBT0EsT0FBTztFQUNoQjtFQUVBLE9BQU9OLHNGQUFlLENBQUNNLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQ0UsV0FBVyxFQUFFO0FBQ25EO0FBRU8sTUFBTUMsNkJBQTZCLEdBQUlDLFdBQXdCLElBQW9CO0VBQ3hGLE9BQU9DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRixXQUFXLENBQUMsQ0FBQ0csR0FBRyxDQUFFQyxJQUFJLEtBQW1CO0lBQUVSLE9BQU8sRUFBRVEsSUFBSSxDQUFDQyxJQUFJLENBQUNULE9BQU87SUFBRVUsSUFBSSxFQUFFRixJQUFJLENBQUNFLElBQUk7SUFBRSxHQUFHRixJQUFJLENBQUNDLElBQUksQ0FBQ0U7RUFBSyxDQUFDLENBQUMsQ0FBQztBQUNwSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQ0E7O0FBRTBHO0FBQ1g7QUFFakI7QUFHTDtBQUNyQjtBQUNBO0FBQ0w7QUFDTDtBQUNIO0FBRVU7QUFBQTtBQWFqRCxTQUFTZSxTQUFTLENBQUU7RUFBRUMsU0FBUyxHQUFHLEVBQUU7RUFBRUMsSUFBSTtFQUFFQztBQUFnQixDQUFDLEVBQTZCO0VBQUE7RUFDeEYsTUFB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LEVBQUVGLGtCQUFtQjtNQUN2QyxPQUFPLEVBQUVlO0lBQWMsRUFDdkI7RUFBQSxFQUNEO0FBRVA7QUFFQSxNQUFNNkMsT0FBTyxHQUFHck4sOERBQU0sQ0FBQ0UsU0FBUyxDQUFDO0VBQUE7RUFBQTtBQUFBLEdBQVEsQ0FBQztFQUFFMEIsS0FBSyxFQUFFO0lBQUVDO0VBQU07QUFBUyxDQUFDLEtBQUs7RUFDeEUsT0FBUTtJQUNOeUwsT0FBTyxFQUFFLE1BQU07SUFDZkMsYUFBYSxFQUFFLFFBQVE7SUFFdkIsNkNBQTZDLEVBQUU7TUFDN0N6TCxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUVELHNCQUFzQixFQUFFO01BQ3RCMEwsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUNELDhCQUE4QixFQUFFO01BQzlCMUwsWUFBWSxFQUFFRCxLQUFLLENBQUM0TDtJQUN0QixDQUFDO0lBQ0QsbUVBQW1FLEVBQUU7TUFDbkVDLFNBQVMsRUFBRTdMLEtBQUssQ0FBQzRMO0lBQ25CLENBQUM7SUFDRCxvQkFBb0IsRUFBRTtNQUNwQkUsUUFBUSxFQUFFOUwsS0FBSyxDQUFDK0wsVUFBVTtNQUMxQkMsVUFBVSxFQUFFaE0sS0FBSyxDQUFDaU0sWUFBWTtNQUM5QkMsS0FBSyxFQUFFbE0sS0FBSyxDQUFDbU0sZUFBZTtNQUM1QkMsVUFBVSxFQUFFcE0sS0FBSyxDQUFDcU0saUJBQWlCO01BQ25DcE0sWUFBWSxFQUFFRCxLQUFLLENBQUM0TDtJQUN0QjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZUosT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWJhc2Uvc3JjL3V0aWxzL2FkZHJlc3MudHMiLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvSG9tZS9IaXN0b3J5L0RldGFpbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvSG9tZS9IaXN0b3J5L0RldGFpbC9wYXJ0cy9BbW91bnQudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvSGlzdG9yeS9EZXRhaWwvcGFydHMvRmVlLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9Ib21lL0hpc3RvcnkvRGV0YWlsL3BhcnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvSG9tZS9IaXN0b3J5L0RldGFpbC9wYXJ0cy9MYXlvdXQudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvSGlzdG9yeS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEFkZHJlc3NKc29uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL3R5cGVzJztcbmltcG9ydCB7IHJlZm9ybWF0QWRkcmVzcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgU3ViamVjdEluZm8gfSBmcm9tICdAc3Vid2FsbGV0L3VpLWtleXJpbmcvb2JzZXJ2YWJsZS90eXBlcyc7XG5cbmltcG9ydCB7IGRlY29kZUFkZHJlc3MsIGVuY29kZUFkZHJlc3MsIGlzQWRkcmVzcywgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG5leHBvcnQgY29uc3Qgc2ltcGxlQWRkcmVzcyA9IChhZGRyZXNzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoaXNFdGhlcmV1bUFkZHJlc3MoYWRkcmVzcykpIHtcbiAgICByZXR1cm4gYWRkcmVzcztcbiAgfVxuXG4gIHJldHVybiBlbmNvZGVBZGRyZXNzKGRlY29kZUFkZHJlc3MoYWRkcmVzcykpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrRm9ybWF0QWRkcmVzc1RvQ29tcGFyZSAoYWRkcmVzcz86IHN0cmluZykge1xuICBpZiAoIWlzQWRkcmVzcyhhZGRyZXNzKSkge1xuICAgIHJldHVybiBhZGRyZXNzO1xuICB9XG5cbiAgcmV0dXJuIHJlZm9ybWF0QWRkcmVzcyhhZGRyZXNzLCA0MikudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRTdWJqZWN0SW5mb1RvQWRkcmVzc2VzID0gKHN1YmplY3RJbmZvOiBTdWJqZWN0SW5mbyk6IEFkZHJlc3NKc29uW10gPT4ge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzdWJqZWN0SW5mbykubWFwKChpbmZvKTogQWRkcmVzc0pzb24gPT4gKHsgYWRkcmVzczogaW5mby5qc29uLmFkZHJlc3MsIHR5cGU6IGluZm8udHlwZSwgLi4uaW5mby5qc29uLm1ldGEgfSkpO1xufTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFeHRyaW5zaWNUeXBlLCBUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBnZXRFeHBsb3JlckxpbmsgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgSW5mb0l0ZW1CYXNlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IEhJU1RPUllfREVUQUlMX01PREFMIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wcywgVHJhbnNhY3Rpb25IaXN0b3J5RGlzcGxheUl0ZW0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgU3dJY29uUHJvcHMsIFN3TW9kYWwgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCB7IEFycm93U3F1YXJlVXBSaWdodCB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgSGlzdG9yeURldGFpbExheW91dCBmcm9tICcuL3BhcnRzL0xheW91dCc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzICYge1xuICBvbkNhbmNlbDogKCkgPT4gdm9pZCxcbiAgZGF0YTogVHJhbnNhY3Rpb25IaXN0b3J5RGlzcGxheUl0ZW0gfCBudWxsXG59XG5cbmV4cG9ydCB0eXBlIFN0YXR1c1R5cGUgPSB7XG4gIHNjaGVtYTogSW5mb0l0ZW1CYXNlWyd2YWx1ZUNvbG9yU2NoZW1hJ10sXG4gIGljb246IFN3SWNvblByb3BzWydwaG9zcGhvckljb24nXSxcbiAgbmFtZTogc3RyaW5nXG59O1xuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycsIGRhdGEsIG9uQ2FuY2VsIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIGNvbnN0IGNoYWluSW5mb01hcCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jaGFpblN0b3JlLmNoYWluSW5mb01hcCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBvcGVuQmxvY2tFeHBsb3JlciA9IHVzZUNhbGxiYWNrKFxuICAgIChsaW5rOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IG1vZGFsRm9vdGVyID0gdXNlTWVtbzxSZWFjdC5SZWFjdE5vZGU+KCgpID0+IHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dHJpbnNpY1R5cGUgPSBkYXRhLnR5cGU7XG4gICAgY29uc3QgY2hhaW5JbmZvID0gY2hhaW5JbmZvTWFwW2RhdGEuY2hhaW5dO1xuICAgIGxldCBvcmlnaW5DaGFpbkluZm8gPSBjaGFpbkluZm87XG5cbiAgICBpZiAoZXh0cmluc2ljVHlwZSA9PT0gRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ00gJiYgZGF0YS5hZGRpdGlvbmFsSW5mbykge1xuICAgICAgY29uc3QgYWRkaXRpb25hbEluZm8gPSBkYXRhLmFkZGl0aW9uYWxJbmZvIGFzIFRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm88RXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ00+O1xuXG4gICAgICBvcmlnaW5DaGFpbkluZm8gPSBjaGFpbkluZm9NYXBbYWRkaXRpb25hbEluZm8ub3JpZ2luYWxDaGFpbl0gfHwgY2hhaW5JbmZvO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmsgPSAoZGF0YS5leHRyaW5zaWNIYXNoICYmIGRhdGEuZXh0cmluc2ljSGFzaCAhPT0gJycpICYmIGdldEV4cGxvcmVyTGluayhvcmlnaW5DaGFpbkluZm8sIGRhdGEuZXh0cmluc2ljSGFzaCwgJ3R4Jyk7XG4gICAgY29uc29sZS5sb2coJ0V4cGxvcmVyIExpbms6JywgbGluayk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBibG9ja1xuICAgICAgICBkaXNhYmxlZD17IWxpbmt9XG4gICAgICAgIGljb249e1xuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBwaG9zcGhvckljb249e0Fycm93U3F1YXJlVXBSaWdodH1cbiAgICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgb25DbGljaz17b3BlbkJsb2NrRXhwbG9yZXIobGluayB8fCAnJyl9XG4gICAgICA+XG4gICAgICAgIHt0KCdWaWV3IG9uIGV4cGxvcmVyJyl9XG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9LCBbY2hhaW5JbmZvTWFwLCBkYXRhLCBvcGVuQmxvY2tFeHBsb3JlciwgdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN3TW9kYWxcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZm9vdGVyPXttb2RhbEZvb3Rlcn1cbiAgICAgIGlkPXtISVNUT1JZX0RFVEFJTF9NT0RBTH1cbiAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgIHRpdGxlPXtkYXRhPy5kaXNwbGF5RGF0YT8udGl0bGUgfHwgJyd9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydfX2xheW91dC1jb250YWluZXInfT5cbiAgICAgICAge2RhdGEgJiYgPEhpc3RvcnlEZXRhaWxMYXlvdXQgZGF0YT17ZGF0YX0gLz59XG4gICAgICA8L2Rpdj5cbiAgICA8L1N3TW9kYWw+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBIaXN0b3J5RGV0YWlsTW9kYWwgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICAnLmFudC1zdy1tb2RhbC1ib2R5Jzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgfSxcblxuICAgICcuYW50LXN3LW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgIGJvcmRlcjogMFxuICAgIH1cbiAgfSk7XG59KTtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFeHRyaW5zaWNUeXBlLCBUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBNZXRhSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzLCBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgaXNUeXBlU3Rha2luZyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICBkYXRhOiBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbTtcbn1cblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYW1vdW50LCB0eXBlOiB0cmFuc2FjdGlvblR5cGUgfSA9IGRhdGE7XG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IGlzU3Rha2luZyA9IGlzVHlwZVN0YWtpbmcoZGF0YS50eXBlKTtcbiAgY29uc3QgaXNDcm93ZGxvYW4gPSBkYXRhLnR5cGUgPT09IEV4dHJpbnNpY1R5cGUuQ1JPV0RMT0FOO1xuICBjb25zdCBpc05mdCA9IGRhdGEudHlwZSA9PT0gRXh0cmluc2ljVHlwZS5TRU5EX05GVDtcblxuICBjb25zdCBhbW91bnRMYWJlbCA9IHVzZU1lbW8oKCk6IHN0cmluZyA9PiB7XG4gICAgc3dpdGNoICh0cmFuc2FjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgRXh0cmluc2ljVHlwZS5TVEFLSU5HX0JPTkQ6XG4gICAgICBjYXNlIEV4dHJpbnNpY1R5cGUuU1RBS0lOR19KT0lOX1BPT0w6XG4gICAgICAgIHJldHVybiB0KCdTdGFraW5nIHZhbHVlJyk7XG4gICAgICBjYXNlIEV4dHJpbnNpY1R5cGUuU1RBS0lOR19XSVRIRFJBVzpcbiAgICAgIGNhc2UgRXh0cmluc2ljVHlwZS5TVEFLSU5HX1BPT0xfV0lUSERSQVc6XG4gICAgICAgIHJldHVybiB0KCdXaXRoZHJhdyB2YWx1ZScpO1xuICAgICAgY2FzZSBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfVU5CT05EOlxuICAgICAgICByZXR1cm4gdCgnVW5zdGFrZSB2YWx1ZScpO1xuICAgICAgY2FzZSBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0U6XG4gICAgICAgIHJldHVybiB0KCdDYW5jZWwgdW5zdGFrZSB2YWx1ZScpO1xuICAgICAgY2FzZSBFeHRyaW5zaWNUeXBlLkNST1dETE9BTjpcbiAgICAgICAgcmV0dXJuIHQoJ0NvbnRyaWJ1dGUgYmFsYW5jZScpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHQoJ0Ftb3VudCcpO1xuICAgIH1cbiAgfSwgW3QsIHRyYW5zYWN0aW9uVHlwZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtcbiAgICAgICAgKGlzU3Rha2luZyB8fCBpc0Nyb3dkbG9hbiB8fCBhbW91bnQpICYmXG4gICAgICAgICAgKFxuICAgICAgICAgICAgPE1ldGFJbmZvLk51bWJlclxuICAgICAgICAgICAgICBkZWNpbWFscz17YW1vdW50Py5kZWNpbWFscyB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGxhYmVsPXthbW91bnRMYWJlbH1cbiAgICAgICAgICAgICAgc3VmZml4PXthbW91bnQ/LnN5bWJvbCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIHZhbHVlPXthbW91bnQ/LnZhbHVlIHx8ICcwJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgfVxuICAgICAge2RhdGEuYWRkaXRpb25hbEluZm8gJiYgaXNOZnQgJiYgKFxuICAgICAgICA8TWV0YUluZm8uRGVmYXVsdFxuICAgICAgICAgIGxhYmVsPXt0KCdDb2xsZWN0aW9uIE5hbWUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoZGF0YS5hZGRpdGlvbmFsSW5mbyBhcyBUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvPEV4dHJpbnNpY1R5cGUuU0VORF9ORlQ+KS5jb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgPC9NZXRhSW5mby5EZWZhdWx0PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IEhpc3RvcnlEZXRhaWxBbW91bnQgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge307XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeURldGFpbEFtb3VudDtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFeHRyaW5zaWNUeXBlLCBUcmFuc2FjdGlvbkFkZGl0aW9uYWxJbmZvIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBNZXRhSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzLCBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgaXNUeXBlVHJhbnNmZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBUaGVtZVByb3BzIHtcbiAgZGF0YTogVHJhbnNhY3Rpb25IaXN0b3J5RGlzcGxheUl0ZW07XG59XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuICBjb25zdCB7IGZlZSB9ID0gZGF0YTtcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgeGNtSW5mbyA9IHVzZU1lbW8oKCk6IFRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm88RXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ00+IHwgdW5kZWZpbmVkID0+IHtcbiAgICBpZiAoaXNUeXBlVHJhbnNmZXIoZGF0YS50eXBlKSAmJiBkYXRhLmFkZGl0aW9uYWxJbmZvICYmIGRhdGEudHlwZSA9PT0gRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ00pIHtcbiAgICAgIHJldHVybiBkYXRhLmFkZGl0aW9uYWxJbmZvIGFzIFRyYW5zYWN0aW9uQWRkaXRpb25hbEluZm88RXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ00+O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFtkYXRhLmFkZGl0aW9uYWxJbmZvLCBkYXRhLnR5cGVdKTtcblxuICBpZiAoeGNtSW5mbykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICAgICAgZGVjaW1hbHM9e2ZlZT8uZGVjaW1hbHMgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgIGxhYmVsPXt0KCdPcmlnaW4gQ2hhaW4gZmVlJyl9XG4gICAgICAgICAgc3VmZml4PXtmZWU/LnN5bWJvbCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgdmFsdWU9e2ZlZT8udmFsdWUgfHwgJzAnfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiB7eGNtSW5mby5mZWUgJiYgPE1ldGFJbmZvLk51bWJlciAqL31cbiAgICAgICAgey8qICBkZWNpbWFscz17eGNtSW5mby5mZWU/LmRlY2ltYWxzIHx8IHVuZGVmaW5lZH0gKi99XG4gICAgICAgIHsvKiAgbGFiZWw9e3QoJ0Rlc3RpbmF0aW9uIGZlZScpfSAqL31cbiAgICAgICAgey8qICBzdWZmaXg9e3hjbUluZm8uZmVlPy5zeW1ib2wgfHwgdW5kZWZpbmVkfSAqL31cbiAgICAgICAgey8qICB2YWx1ZT17eGNtSW5mby5mZWU/LnZhbHVlIHx8ICcwJ30gKi99XG4gICAgICAgIHsvKiAvPn0gKi99XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICBkZWNpbWFscz17ZmVlPy5kZWNpbWFscyB8fCB1bmRlZmluZWR9XG4gICAgICBsYWJlbD17dCgnTmV0d29yayBmZWUnKX1cbiAgICAgIHN1ZmZpeD17ZmVlPy5zeW1ib2wgfHwgdW5kZWZpbmVkfVxuICAgICAgdmFsdWU9e2ZlZT8udmFsdWUgfHwgJzAnfVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBIaXN0b3J5RGV0YWlsRmVlID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHt9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlEZXRhaWxGZWU7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgRXh0cmluc2ljVHlwZSwgVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgX2dldENoYWluTmFtZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBNZXRhSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzLCBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgaXNUeXBlU3Rha2luZywgaXNUeXBlVHJhbnNmZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICBkYXRhOiBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbTtcbn1cblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGNoYWluSW5mb01hcCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmNoYWluU3RvcmUpO1xuXG4gIGNvbnN0IGlzU3Rha2luZyA9IGlzVHlwZVN0YWtpbmcoZGF0YS50eXBlKTtcblxuICBjb25zdCB4Y21JbmZvID0gdXNlTWVtbygoKTogVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mbzxFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1hDTT4gfCB1bmRlZmluZWQgPT4ge1xuICAgIGlmIChpc1R5cGVUcmFuc2ZlcihkYXRhLnR5cGUpICYmIGRhdGEuYWRkaXRpb25hbEluZm8gJiYgZGF0YS50eXBlID09PSBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1hDTSkge1xuICAgICAgcmV0dXJuIGRhdGEuYWRkaXRpb25hbEluZm8gYXMgVHJhbnNhY3Rpb25BZGRpdGlvbmFsSW5mbzxFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1hDTT47XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2RhdGEuYWRkaXRpb25hbEluZm8sIGRhdGEudHlwZV0pO1xuXG4gIGlmICh4Y21JbmZvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZXRhSW5mby5UcmFuc2ZlclxuICAgICAgICBkZXN0aW5hdGlvbkNoYWluPXt7XG4gICAgICAgICAgc2x1ZzogeGNtSW5mby5kZXN0aW5hdGlvbkNoYWluLFxuICAgICAgICAgIG5hbWU6IF9nZXRDaGFpbk5hbWUoY2hhaW5JbmZvTWFwW3hjbUluZm8uZGVzdGluYXRpb25DaGFpbl0pXG4gICAgICAgIH19XG4gICAgICAgIG9yaWdpbkNoYWluPXt7XG4gICAgICAgICAgc2x1ZzogeGNtSW5mby5vcmlnaW5hbENoYWluIHx8IGRhdGEuY2hhaW4sXG4gICAgICAgICAgbmFtZTogX2dldENoYWluTmFtZShjaGFpbkluZm9NYXBbeGNtSW5mby5vcmlnaW5hbENoYWluIHx8IGRhdGEuY2hhaW5dKVxuICAgICAgICB9fVxuICAgICAgICByZWNpcGllbnRBZGRyZXNzPXtkYXRhLnRvfVxuICAgICAgICByZWNpcGllbnROYW1lPXtkYXRhLnRvTmFtZX1cbiAgICAgICAgc2VuZGVyQWRkcmVzcz17ZGF0YS5mcm9tfVxuICAgICAgICBzZW5kZXJOYW1lPXtkYXRhLmZyb21OYW1lfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1ldGFJbmZvLkNoYWluXG4gICAgICAgIGNoYWluPXtkYXRhLmNoYWlufVxuICAgICAgICBsYWJlbD17dCgnTmV0d29yaycpfVxuICAgICAgLz5cblxuICAgICAge1xuICAgICAgICBpc1N0YWtpbmdcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIDxNZXRhSW5mby5BY2NvdW50XG4gICAgICAgICAgICAgIGFkZHJlc3M9e2RhdGEuZnJvbX1cbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ0Zyb20gYWNjb3VudCcpfVxuICAgICAgICAgICAgICBuYW1lPXtkYXRhLmZyb21OYW1lfVxuICAgICAgICAgICAgICBuZXR3b3JrUHJlZml4PXtjaGFpbkluZm9NYXBbZGF0YS5jaGFpbl0/LnN1YnN0cmF0ZUluZm8/LmFkZHJlc3NQcmVmaXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgIDxNZXRhSW5mby5UcmFuc2ZlclxuICAgICAgICAgICAgICByZWNpcGllbnRBZGRyZXNzPXtkYXRhLnRvfVxuICAgICAgICAgICAgICByZWNpcGllbnROYW1lPXtkYXRhLnRvTmFtZX1cbiAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17ZGF0YS5mcm9tfVxuICAgICAgICAgICAgICBzZW5kZXJOYW1lPXtkYXRhLmZyb21OYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICB9XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBIaXN0b3J5RGV0YWlsSGVhZGVyID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcblxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlEZXRhaWxIZWFkZXI7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgTWV0YUluZm8gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgSGlzdG9yeVN0YXR1c01hcCwgVHhUeXBlTmFtZU1hcCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzLCBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgZm9ybWF0SGlzdG9yeURhdGUsIHRvU2hvcnQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBIaXN0b3J5RGV0YWlsQW1vdW50IGZyb20gJy4vQW1vdW50JztcbmltcG9ydCBIaXN0b3J5RGV0YWlsRmVlIGZyb20gJy4vRmVlJztcbmltcG9ydCBIaXN0b3J5RGV0YWlsSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGhlbWVQcm9wcyB7XG4gIGRhdGE6IFRyYW5zYWN0aW9uSGlzdG9yeURpc3BsYXlJdGVtO1xufVxuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGRhdGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCB7IGxhbmd1YWdlIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNldHRpbmdzKTtcblxuICByZXR1cm4gKFxuICAgIDxNZXRhSW5mbyBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9PlxuICAgICAgPE1ldGFJbmZvLkRpc3BsYXlUeXBlXG4gICAgICAgIGxhYmVsPXt0KCdUcmFuc2FjdGlvbiB0eXBlJyl9XG4gICAgICAgIHR5cGVOYW1lPXt0KFR4VHlwZU5hbWVNYXBbZGF0YS50eXBlXSl9XG4gICAgICAvPlxuICAgICAgPEhpc3RvcnlEZXRhaWxIZWFkZXIgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDxNZXRhSW5mby5TdGF0dXNcbiAgICAgICAgbGFiZWw9e3QoJ1RyYW5zYWN0aW9uIHN0YXR1cycpfVxuICAgICAgICBzdGF0dXNJY29uPXtIaXN0b3J5U3RhdHVzTWFwW2RhdGEuc3RhdHVzXS5pY29ufVxuICAgICAgICBzdGF0dXNOYW1lPXt0KEhpc3RvcnlTdGF0dXNNYXBbZGF0YS5zdGF0dXNdLm5hbWUpfVxuICAgICAgICB2YWx1ZUNvbG9yU2NoZW1hPXtIaXN0b3J5U3RhdHVzTWFwW2RhdGEuc3RhdHVzXS5zY2hlbWF9XG4gICAgICAvPlxuICAgICAgPE1ldGFJbmZvLkRlZmF1bHQgbGFiZWw9e3QoJ0V4dHJpbnNpYyBoYXNoJyl9PnsoZGF0YS5leHRyaW5zaWNIYXNoIHx8ICcnKS5zdGFydHNXaXRoKCcweCcpID8gdG9TaG9ydChkYXRhLmV4dHJpbnNpY0hhc2gsIDgsIDkpIDogJy4uLid9PC9NZXRhSW5mby5EZWZhdWx0PlxuICAgICAgPE1ldGFJbmZvLkRlZmF1bHQgbGFiZWw9e3QoJ1RyYW5zYWN0aW9uIHRpbWUnKX0+e2Zvcm1hdEhpc3RvcnlEYXRlKGRhdGEudGltZSwgbGFuZ3VhZ2UsICdkZXRhaWwnKX08L01ldGFJbmZvLkRlZmF1bHQ+XG4gICAgICA8SGlzdG9yeURldGFpbEFtb3VudCBkYXRhPXtkYXRhfSAvPlxuICAgICAgPEhpc3RvcnlEZXRhaWxGZWUgZGF0YT17ZGF0YX0gLz5cbiAgICA8L01ldGFJbmZvPlxuICApO1xufTtcblxuY29uc3QgSGlzdG9yeURldGFpbExheW91dCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG5cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5RGV0YWlsTGF5b3V0O1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEV4dHJpbnNpY1N0YXR1cywgRXh0cmluc2ljVHlwZSwgVHJhbnNhY3Rpb25EaXJlY3Rpb24sIFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IGlzQWNjb3VudEFsbCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuaW1wb3J0IHsgcXVpY2tGb3JtYXRBZGRyZXNzVG9Db21wYXJlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscy9hZGRyZXNzJztcbmltcG9ydCB7IEVtcHR5TGlzdCwgRmlsdGVyTW9kYWwsIEhpc3RvcnlJdGVtLCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBISVNUT1JZX0RFVEFJTF9NT0RBTCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VGaWx0ZXJNb2RhbCwgdXNlU2VsZWN0b3IsIHVzZVNldEN1cnJlbnRQYWdlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzLCBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5RGF0YSwgVHJhbnNhY3Rpb25IaXN0b3J5RGlzcGxheUl0ZW0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IGN1c3RvbUZvcm1hdERhdGUsIGZvcm1hdEhpc3RvcnlEYXRlLCBpc1R5cGVTdGFraW5nLCBpc1R5cGVUcmFuc2ZlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgSWNvbiwgTW9kYWxDb250ZXh0LCBTd0ljb25Qcm9wcywgU3dMaXN0LCBTd1N1YkhlYWRlciB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgQXBlcnR1cmUsIEFycm93RG93bkxlZnQsIEFycm93VXBSaWdodCwgQ2xvY2ssIENsb2NrQ291bnRlckNsb2Nrd2lzZSwgRGF0YWJhc2UsIEZhZGVyc0hvcml6b250YWwsIFJvY2tldCwgU3Bpbm5lciB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBIaXN0b3J5RGV0YWlsTW9kYWwgfSBmcm9tICcuL0RldGFpbCc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzXG5cbmNvbnN0IEljb25NYXA6IFJlY29yZDxzdHJpbmcsIFN3SWNvblByb3BzWydwaG9zcGhvckljb24nXT4gPSB7XG4gIHNlbmQ6IEFycm93VXBSaWdodCxcbiAgcmVjZWl2ZTogQXJyb3dEb3duTGVmdCxcbiAgY2xhaW1fcmV3YXJkOiBDbG9ja0NvdW50ZXJDbG9ja3dpc2UsXG4gIHN0YWtpbmc6IERhdGFiYXNlLFxuICBjcm93ZGxvYW46IFJvY2tldCxcbiAgbmZ0OiBBcGVydHVyZSxcbiAgcHJvY2Vzc2luZzogU3Bpbm5lcixcbiAgZGVmYXVsdDogQ2xvY2tDb3VudGVyQ2xvY2t3aXNlXG59O1xuXG5mdW5jdGlvbiBnZXRJY29uIChpdGVtOiBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtKTogU3dJY29uUHJvcHNbJ3Bob3NwaG9ySWNvbiddIHtcbiAgaWYgKGl0ZW0uc3RhdHVzID09PSBFeHRyaW5zaWNTdGF0dXMuUFJPQ0VTU0lORyB8fCBpdGVtLnN0YXR1cyA9PT0gRXh0cmluc2ljU3RhdHVzLlNVQk1JVFRJTkcpIHtcbiAgICByZXR1cm4gSWNvbk1hcC5wcm9jZXNzaW5nO1xuICB9XG5cbiAgaWYgKGl0ZW0udHlwZSA9PT0gRXh0cmluc2ljVHlwZS5TRU5EX05GVCkge1xuICAgIHJldHVybiBJY29uTWFwLm5mdDtcbiAgfVxuXG4gIGlmIChpdGVtLnR5cGUgPT09IEV4dHJpbnNpY1R5cGUuQ1JPV0RMT0FOKSB7XG4gICAgcmV0dXJuIEljb25NYXAuY3Jvd2Rsb2FuO1xuICB9XG5cbiAgaWYgKGl0ZW0udHlwZSA9PT0gRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NMQUlNX1JFV0FSRCkge1xuICAgIHJldHVybiBJY29uTWFwLmNsYWltX3Jld2FyZDtcbiAgfVxuXG4gIGlmIChpc1R5cGVTdGFraW5nKGl0ZW0udHlwZSkpIHtcbiAgICByZXR1cm4gSWNvbk1hcC5zdGFraW5nO1xuICB9XG5cbiAgcmV0dXJuIEljb25NYXAuZGVmYXVsdDtcbn1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheURhdGEgKGl0ZW06IFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW0sIG5hbWVNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sIHRpdGxlTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogVHJhbnNhY3Rpb25IaXN0b3J5RGlzcGxheURhdGEge1xuICBsZXQgZGlzcGxheURhdGE6IFRyYW5zYWN0aW9uSGlzdG9yeURpc3BsYXlEYXRhO1xuICBjb25zdCB0aW1lID0gY3VzdG9tRm9ybWF0RGF0ZShpdGVtLnRpbWUsICcjaGhoaCM6I21tIycpO1xuXG4gIGNvbnN0IGRpc3BsYXlTdGF0dXMgPSBpdGVtLnN0YXR1cyA9PT0gRXh0cmluc2ljU3RhdHVzLkZBSUwgPyAnZmFpbCcgOiAnJztcblxuICBpZiAoaXRlbS50eXBlID09PSBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX0JBTEFOQ0UgfHwgaXRlbS50eXBlID09PSBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX1RPS0VOIHx8IGl0ZW0udHlwZSA9PT0gRXh0cmluc2ljVHlwZS5UUkFOU0ZFUl9YQ00gfHwgaXRlbS50eXBlID09PSBFeHRyaW5zaWNUeXBlLkVWTV9FWEVDVVRFKSB7XG4gICAgaWYgKGl0ZW0uZGlyZWN0aW9uID09PSBUcmFuc2FjdGlvbkRpcmVjdGlvbi5SRUNFSVZFRCkge1xuICAgICAgZGlzcGxheURhdGEgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogYC1yZWNlaXZlIC0ke2l0ZW0uc3RhdHVzfWAsXG4gICAgICAgIHRpdGxlOiB0aXRsZU1hcC5yZWNlaXZlZCxcbiAgICAgICAgbmFtZTogbmFtZU1hcC5yZWNlaXZlZCxcbiAgICAgICAgdHlwZU5hbWU6IGAke25hbWVNYXAucmVjZWl2ZWR9ICR7ZGlzcGxheVN0YXR1c30gLSAke3RpbWV9YCxcbiAgICAgICAgaWNvbjogSWNvbk1hcC5yZWNlaXZlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5RGF0YSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBgLXNlbmQgLSR7aXRlbS5zdGF0dXN9YCxcbiAgICAgICAgdGl0bGU6IHRpdGxlTWFwLnNlbmQsXG4gICAgICAgIG5hbWU6IG5hbWVNYXAuc2VuZCxcbiAgICAgICAgdHlwZU5hbWU6IGAke25hbWVNYXAuc2VuZH0gJHtkaXNwbGF5U3RhdHVzfSAtICR7dGltZX1gLFxuICAgICAgICBpY29uOiBJY29uTWFwLnNlbmRcbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gbmFtZU1hcFtpdGVtLnR5cGVdIHx8IG5hbWVNYXAuZGVmYXVsdDtcblxuICAgIGRpc3BsYXlEYXRhID0ge1xuICAgICAgY2xhc3NOYW1lOiBgLSR7aXRlbS50eXBlfSAtJHtpdGVtLnN0YXR1c31gLFxuICAgICAgdGl0bGU6IHRpdGxlTWFwW2l0ZW0udHlwZV0sXG4gICAgICB0eXBlTmFtZTogYCR7dHlwZU5hbWV9ICR7ZGlzcGxheVN0YXR1c30gLSAke3RpbWV9YCxcbiAgICAgIG5hbWU6IG5hbWVNYXBbaXRlbS50eXBlXSxcbiAgICAgIGljb246IGdldEljb24oaXRlbSlcbiAgICB9O1xuICB9XG5cbiAgaWYgKGl0ZW0uc3RhdHVzID09PSBFeHRyaW5zaWNTdGF0dXMuUFJPQ0VTU0lORykge1xuICAgIGRpc3BsYXlEYXRhLmNsYXNzTmFtZSA9ICctcHJvY2Vzc2luZyc7XG4gICAgZGlzcGxheURhdGEudHlwZU5hbWUgPSBuYW1lTWFwLnByb2Nlc3Npbmc7XG4gIH1cblxuICBpZiAoaXRlbS5zdGF0dXMgPT09IEV4dHJpbnNpY1N0YXR1cy5TVUJNSVRUSU5HKSB7XG4gICAgZGlzcGxheURhdGEuY2xhc3NOYW1lID0gJy1wcm9jZXNzaW5nJztcbiAgICBkaXNwbGF5RGF0YS50eXBlTmFtZSA9IG5hbWVNYXAuc3VibWl0dGluZztcbiAgfVxuXG4gIHJldHVybiBkaXNwbGF5RGF0YTtcbn1cblxuY29uc3QgRklMVEVSX01PREFMX0lEID0gJ2hpc3RvcnktZmlsdGVyLWlkJztcblxuZW51bSBGaWx0ZXJWYWx1ZSB7XG4gIFNFTkQgPSAnc2VuZCcsXG4gIFJFQ0VJVkVEID0gJ3JlY2VpdmVkJyxcbiAgTkZUID0gJ25mdCcsXG4gIFNUQUtFID0gJ3N0YWtlJyxcbiAgQ0xBSU0gPSAnY2xhaW0nLFxuICBDUk9XRExPQU4gPSAnY3Jvd2Rsb2FuJyxcbiAgU1VDQ0VTU0ZVTCA9ICdzdWNjZXNzZnVsJyxcbiAgRkFJTEVEID0gJ2ZhaWxlZCcsXG59XG5cbmZ1bmN0aW9uIGdldEhpc3RvcnlJdGVtS2V5IChpdGVtOiBQaWNrPFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW0sICdjaGFpbicgfCAnYWRkcmVzcycgfCAnZXh0cmluc2ljSGFzaCcgfCAndHJhbnNhY3Rpb25JZCc+KSB7XG4gIHJldHVybiBgJHtpdGVtLmNoYWlufS0ke2l0ZW0uYWRkcmVzc30tJHtpdGVtLnRyYW5zYWN0aW9uSWQgfHwgaXRlbS5leHRyaW5zaWNIYXNofWA7XG59XG5cbmNvbnN0IG1vZGFsSWQgPSBISVNUT1JZX0RFVEFJTF9NT0RBTDtcblxuZnVuY3Rpb24gQ29tcG9uZW50ICh7IGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIHVzZVNldEN1cnJlbnRQYWdlKCcvaG9tZS9oaXN0b3J5Jyk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgZGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcbiAgY29uc3QgeyBhY3RpdmVNb2RhbCwgY2hlY2tBY3RpdmUsIGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgY29uc3QgeyBhY2NvdW50cywgY3VycmVudEFjY291bnQgfSA9IHVzZVNlbGVjdG9yKChyb290KSA9PiByb290LmFjY291bnRTdGF0ZSk7XG4gIGNvbnN0IHsgaGlzdG9yeUxpc3Q6IHJhd0hpc3RvcnlMaXN0IH0gPSB1c2VTZWxlY3Rvcigocm9vdCkgPT4gcm9vdC50cmFuc2FjdGlvbkhpc3RvcnkpO1xuICBjb25zdCB7IGNoYWluSW5mb01hcCB9ID0gdXNlU2VsZWN0b3IoKHJvb3QpID0+IHJvb3QuY2hhaW5TdG9yZSk7XG4gIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHVzZVNlbGVjdG9yKChyb290KSA9PiByb290LnNldHRpbmdzKTtcblxuICBjb25zdCBpc0FjdGl2ZSA9IGNoZWNrQWN0aXZlKG1vZGFsSWQpO1xuXG4gIGNvbnN0IHsgZmlsdGVyU2VsZWN0aW9uTWFwLCBvbkFwcGx5RmlsdGVyLCBvbkNoYW5nZUZpbHRlck9wdGlvbiwgb25DbG9zZUZpbHRlck1vZGFsLCBzZWxlY3RlZEZpbHRlcnMgfSA9IHVzZUZpbHRlck1vZGFsKEZJTFRFUl9NT0RBTF9JRCk7XG5cbiAgY29uc3QgZmlsdGVyRnVuY3Rpb24gPSB1c2VNZW1vPChpdGVtOiBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbSkgPT4gYm9vbGVhbj4oKCkgPT4ge1xuICAgIHJldHVybiAoaXRlbSkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZEZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBzZWxlY3RlZEZpbHRlcnMpIHtcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuU0VORCkge1xuICAgICAgICAgIGlmIChpc1R5cGVUcmFuc2ZlcihpdGVtLnR5cGUpICYmIGl0ZW0uZGlyZWN0aW9uID09PSBUcmFuc2FjdGlvbkRpcmVjdGlvbi5TRU5EKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSBGaWx0ZXJWYWx1ZS5SRUNFSVZFRCkge1xuICAgICAgICAgIGlmIChpc1R5cGVUcmFuc2ZlcihpdGVtLnR5cGUpICYmIGl0ZW0uZGlyZWN0aW9uID09PSBUcmFuc2FjdGlvbkRpcmVjdGlvbi5SRUNFSVZFRCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuTkZUKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gRXh0cmluc2ljVHlwZS5TRU5EX05GVCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuU1RBS0UpIHtcbiAgICAgICAgICBpZiAoaXNUeXBlU3Rha2luZyhpdGVtLnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSBGaWx0ZXJWYWx1ZS5DTEFJTSkge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IEV4dHJpbnNpY1R5cGUuU1RBS0lOR19DTEFJTV9SRVdBUkQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLkNST1dETE9BTikge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IEV4dHJpbnNpY1R5cGUuQ1JPV0RMT0FOKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSBGaWx0ZXJWYWx1ZS5TVUNDRVNTRlVMKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSBFeHRyaW5zaWNTdGF0dXMuU1VDQ0VTUykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gRmlsdGVyVmFsdWUuRkFJTEVEKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSBFeHRyaW5zaWNTdGF0dXMuRkFJTCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9LCBbc2VsZWN0ZWRGaWx0ZXJzXSk7XG5cbiAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7IGxhYmVsOiB0KCdTZW5kIHRva2VuJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5TRU5EIH0sXG4gICAgICB7IGxhYmVsOiB0KCdSZWNlaXZlIHRva2VuJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5SRUNFSVZFRCB9LFxuICAgICAgeyBsYWJlbDogdCgnTkZUIHRyYW5zYWN0aW9uJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5ORlQgfSxcbiAgICAgIHsgbGFiZWw6IHQoJ1N0YWtlIHRyYW5zYWN0aW9uJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5TVEFLRSB9LFxuICAgICAgeyBsYWJlbDogdCgnQ2xhaW0gc3Rha2luZyByZXdhcmQnKSwgdmFsdWU6IEZpbHRlclZhbHVlLkNMQUlNIH0sXG4gICAgICAvLyB7IGxhYmVsOiB0KCdDcm93ZGxvYW4gdHJhbnNhY3Rpb24nKSwgdmFsdWU6IEZpbHRlclZhbHVlLkNST1dETE9BTiB9LCAvLyBzdXBwb3J0IGNyb3dkbG9hbiBsYXRlclxuICAgICAgeyBsYWJlbDogdCgnU3VjY2Vzc2Z1bCcpLCB2YWx1ZTogRmlsdGVyVmFsdWUuU1VDQ0VTU0ZVTCB9LFxuICAgICAgeyBsYWJlbDogdCgnRmFpbGVkJyksIHZhbHVlOiBGaWx0ZXJWYWx1ZS5GQUlMRUQgfVxuICAgIF07XG4gIH0sIFt0XSk7XG5cbiAgY29uc3QgYWNjb3VudE1hcCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBhY2NvdW50cy5yZWR1Y2UoKGFjY01hcCwgY3VyKSA9PiB7XG4gICAgICBhY2NNYXBbY3VyLmFkZHJlc3MudG9Mb3dlckNhc2UoKV0gPSBjdXIubmFtZSB8fCAnJztcblxuICAgICAgcmV0dXJuIGFjY01hcDtcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTtcbiAgfSwgW2FjY291bnRzXSk7XG5cbiAgY29uc3QgdHlwZU5hbWVNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgZGVmYXVsdDogdCgnVHJhbnNhY3Rpb24nKSxcbiAgICBzdWJtaXR0aW5nOiB0KCdTdWJtaXR0aW5nLi4uJyksXG4gICAgcHJvY2Vzc2luZzogdCgnUHJvY2Vzc2luZy4uLicpLFxuICAgIHNlbmQ6IHQoJ1NlbmQnKSxcbiAgICByZWNlaXZlZDogdCgnUmVjZWl2ZScpLFxuICAgIFtFeHRyaW5zaWNUeXBlLlNFTkRfTkZUXTogdCgnTkZUJyksXG4gICAgW0V4dHJpbnNpY1R5cGUuQ1JPV0RMT0FOXTogdCgnQ3Jvd2Rsb2FuJyksXG4gICAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19KT0lOX1BPT0xdOiB0KCdTdGFrZScpLFxuICAgIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfTEVBVkVfUE9PTF06IHQoJ1Vuc3Rha2UnKSxcbiAgICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0JPTkRdOiB0KCdCb25kJyksXG4gICAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19VTkJPTkRdOiB0KCdVbmJvbmQnKSxcbiAgICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NMQUlNX1JFV0FSRF06IHQoJ0NsYWltIFJld2FyZCcpLFxuICAgIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfV0lUSERSQVddOiB0KCdXaXRoZHJhdycpLFxuICAgIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0VdOiB0KCdDYW5jZWwgdW5zdGFrZScpLFxuICAgIFtFeHRyaW5zaWNUeXBlLkVWTV9FWEVDVVRFXTogdCgnRVZNIFRyYW5zYWN0aW9uJylcbiAgfSksIFt0XSk7XG5cbiAgY29uc3QgdHlwZVRpdGxlTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIGRlZmF1bHQ6IHQoJ1RyYW5zYWN0aW9uJyksXG4gICAgc2VuZDogdCgnU2VuZCB0b2tlbicpLFxuICAgIHJlY2VpdmVkOiB0KCdSZWNlaXZlIHRva2VuJyksXG4gICAgW0V4dHJpbnNpY1R5cGUuU0VORF9ORlRdOiB0KCdORlQgdHJhbnNhY3Rpb24nKSxcbiAgICBbRXh0cmluc2ljVHlwZS5DUk9XRExPQU5dOiB0KCdDcm93ZGxvYW4gdHJhbnNhY3Rpb24nKSxcbiAgICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX0pPSU5fUE9PTF06IHQoJ1N0YWtlIHRyYW5zYWN0aW9uJyksXG4gICAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19MRUFWRV9QT09MXTogdCgnVW5zdGFrZSB0cmFuc2FjdGlvbicpLFxuICAgIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQk9ORF06IHQoJ0JvbmQgdHJhbnNhY3Rpb24nKSxcbiAgICBbRXh0cmluc2ljVHlwZS5TVEFLSU5HX1VOQk9ORF06IHQoJ1VuYm9uZCB0cmFuc2FjdGlvbicpLFxuICAgIFtFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0xBSU1fUkVXQVJEXTogdCgnQ2xhaW0gUmV3YXJkIHRyYW5zYWN0aW9uJyksXG4gICAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19XSVRIRFJBV106IHQoJ1dpdGhkcmF3IHRyYW5zYWN0aW9uJyksXG4gICAgW0V4dHJpbnNpY1R5cGUuU1RBS0lOR19DQU5DRUxfVU5TVEFLRV06IHQoJ0NhbmNlbCB1bnN0YWtlIHRyYW5zYWN0aW9uJyksXG4gICAgW0V4dHJpbnNpY1R5cGUuRVZNX0VYRUNVVEVdOiB0KCdFVk0gVHJhbnNhY3Rpb24nKVxuICB9KSwgW3RdKTtcblxuICAvLyBGaWxsIGRpc3BsYXkgZGF0YSB0byBoaXN0b3J5IGxpc3RcbiAgY29uc3QgaGlzdG9yeU1hcCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBZGRyZXNzID0gY3VycmVudEFjY291bnQ/LmFkZHJlc3MgfHwgJyc7XG4gICAgY29uc3QgY3VycmVudEFkZHJlc3NMb3dlckNhc2UgPSBjdXJyZW50QWRkcmVzcy50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGlzRmlsdGVyQnlBZGRyZXNzID0gY3VycmVudEFjY291bnQ/LmFkZHJlc3MgJiYgIWlzQWNjb3VudEFsbChjdXJyZW50QWRkcmVzcyk7XG4gICAgY29uc3QgZmluYWxIaXN0b3J5TWFwOiBSZWNvcmQ8c3RyaW5nLCBUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbT4gPSB7fTtcblxuICAgIHJhd0hpc3RvcnlMaXN0LmZvckVhY2goKGl0ZW06IFRyYW5zYWN0aW9uSGlzdG9yeUl0ZW0pID0+IHtcbiAgICAgIC8vIEZpbHRlciBhY2NvdW50IGJ5IGN1cnJlbnQgYWNjb3VudFxuICAgICAgaWYgKGlzRmlsdGVyQnlBZGRyZXNzICYmIGN1cnJlbnRBZGRyZXNzTG93ZXJDYXNlICE9PSBxdWlja0Zvcm1hdEFkZHJlc3NUb0NvbXBhcmUoaXRlbS5hZGRyZXNzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEZvcm1hdCBkaXNwbGF5IG5hbWUgZm9yIGFjY291bnQgYnkgYWRkcmVzc1xuICAgICAgY29uc3QgZnJvbU5hbWUgPSBhY2NvdW50TWFwW3F1aWNrRm9ybWF0QWRkcmVzc1RvQ29tcGFyZShpdGVtLmZyb20pIHx8ICcnXTtcbiAgICAgIGNvbnN0IHRvTmFtZSA9IGFjY291bnRNYXBbcXVpY2tGb3JtYXRBZGRyZXNzVG9Db21wYXJlKGl0ZW0udG8pIHx8ICcnXTtcbiAgICAgIGNvbnN0IGtleSA9IGdldEhpc3RvcnlJdGVtS2V5KGl0ZW0pO1xuXG4gICAgICBmaW5hbEhpc3RvcnlNYXBba2V5XSA9IHsgLi4uaXRlbSwgZnJvbU5hbWUsIHRvTmFtZSwgZGlzcGxheURhdGE6IGdldERpc3BsYXlEYXRhKGl0ZW0sIHR5cGVOYW1lTWFwLCB0eXBlVGl0bGVNYXApIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmluYWxIaXN0b3J5TWFwO1xuICB9LCBbYWNjb3VudE1hcCwgcmF3SGlzdG9yeUxpc3QsIHR5cGVOYW1lTWFwLCB0eXBlVGl0bGVNYXAsIGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzXSk7XG5cbiAgY29uc3QgaGlzdG9yeUxpc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhoaXN0b3J5TWFwKS5zb3J0KChhLCBiKSA9PiAoYi50aW1lIC0gYS50aW1lKSk7XG4gIH0sIFtoaXN0b3J5TWFwXSk7XG5cbiAgY29uc3QgW2N1ckFkcl0gPSB1c2VTdGF0ZShjdXJyZW50QWNjb3VudD8uYWRkcmVzcyk7XG5cbiAgLy8gSGFuZGxlIGRldGFpbCBtb2RhbFxuICBjb25zdCB7IGNoYWluLCBleHRyaW5zaWNIYXNoT3JJZCB9ID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZTxUcmFuc2FjdGlvbkhpc3RvcnlEaXNwbGF5SXRlbSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbb3BlbkRldGFpbExpbmssIHNldE9wZW5EZXRhaWxMaW5rXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCEhY2hhaW4gJiYgISFleHRyaW5zaWNIYXNoT3JJZCk7XG5cbiAgY29uc3Qgb25PcGVuRGV0YWlsID0gdXNlQ2FsbGJhY2soKGl0ZW06IFRyYW5zYWN0aW9uSGlzdG9yeURpc3BsYXlJdGVtKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldFNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgIGFjdGl2ZU1vZGFsKG1vZGFsSWQpO1xuICAgIH07XG4gIH0sIFthY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IG9uQ2xvc2VEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW5hY3RpdmVNb2RhbChtb2RhbElkKTtcbiAgICBzZXRTZWxlY3RlZEl0ZW0obnVsbCk7XG4gICAgc2V0T3BlbkRldGFpbExpbmsoZmFsc2UpO1xuICB9LCBbaW5hY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IG9uQ2xpY2tBY3Rpb25CdG4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWN0aXZlTW9kYWwoRklMVEVSX01PREFMX0lEKTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXh0cmluc2ljSGFzaE9ySWQgJiYgY2hhaW4gJiYgb3BlbkRldGFpbExpbmspIHtcbiAgICAgIGNvbnN0IGV4aXN0ZWQgPSBoaXN0b3J5TGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmNoYWluID09PSBjaGFpbiAmJiAoaXRlbS50cmFuc2FjdGlvbklkID09PSBleHRyaW5zaWNIYXNoT3JJZCB8fCBpdGVtLmV4dHJpbnNpY0hhc2ggPT09IGV4dHJpbnNpY0hhc2hPcklkKSk7XG5cbiAgICAgIGlmIChleGlzdGVkKSB7XG4gICAgICAgIHNldFNlbGVjdGVkSXRlbShleGlzdGVkKTtcbiAgICAgICAgYWN0aXZlTW9kYWwobW9kYWxJZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbYWN0aXZlTW9kYWwsIGNoYWluLCBleHRyaW5zaWNIYXNoT3JJZCwgb3BlbkRldGFpbExpbmssIGhpc3RvcnlMaXN0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHNldFNlbGVjdGVkSXRlbSgoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZ2V0SGlzdG9yeUl0ZW1LZXkoc2VsZWN0ZWQpO1xuXG4gICAgICAgICAgcmV0dXJuIGhpc3RvcnlNYXBba2V5XSB8fCBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbaXNBY3RpdmUsIGhpc3RvcnlNYXBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyZW50QWNjb3VudD8uYWRkcmVzcyAhPT0gY3VyQWRyKSB7XG4gICAgICBpbmFjdGl2ZU1vZGFsKG1vZGFsSWQpO1xuICAgICAgc2V0U2VsZWN0ZWRJdGVtKG51bGwpO1xuICAgIH1cbiAgfSwgW2N1ckFkciwgY3VycmVudEFjY291bnQ/LmFkZHJlc3MsIGluYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBlbXB0eUxpc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFbXB0eUxpc3RcbiAgICAgICAgZW1wdHlNZXNzYWdlPXt0KCdZb3VyIHRyYW5zYWN0aW9ucyB3aWxsIHNob3cgdXAgaGVyZScpfVxuICAgICAgICBlbXB0eVRpdGxlPXt0KCdObyB0cmFuc2FjdGlvbnMgZm91bmQnKX1cbiAgICAgICAgcGhvc3Bob3JJY29uPXtDbG9ja31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW3RdKTtcblxuICBjb25zdCByZW5kZXJJdGVtID0gdXNlQ2FsbGJhY2soXG4gICAgKGl0ZW06IFRyYW5zYWN0aW9uSGlzdG9yeURpc3BsYXlJdGVtKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SGlzdG9yeUl0ZW1cbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIGtleT17YCR7aXRlbS5leHRyaW5zaWNIYXNofS0ke2l0ZW0uYWRkcmVzc30tJHtpdGVtLmRpcmVjdGlvbn1gfVxuICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkRldGFpbChpdGVtKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSxcbiAgICBbb25PcGVuRGV0YWlsXVxuICApO1xuXG4gIGNvbnN0IHNlYXJjaEZ1bmMgPSB1c2VDYWxsYmFjaygoaXRlbTogVHJhbnNhY3Rpb25IaXN0b3J5SXRlbSwgc2VhcmNoVGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dExvd2VyQ2FzZSA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBmcm9tTmFtZSA9IGl0ZW0uZnJvbU5hbWU/LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdG9OYW1lID0gaXRlbS50b05hbWU/LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgc3ltYm9sID0gKGl0ZW0uYW1vdW50Py5zeW1ib2wgfHwgaXRlbS5mZWU/LnN5bWJvbCB8fCBpdGVtLnRpcD8uc3ltYm9sKT8udG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBuZXR3b3JrID0gY2hhaW5JbmZvTWFwW2l0ZW0uY2hhaW5dPy5uYW1lPy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGZyb21OYW1lPy5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKSB8fFxuICAgICAgdG9OYW1lPy5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKSB8fFxuICAgICAgc3ltYm9sPy5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKSB8fFxuICAgICAgbmV0d29yaz8uaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSlcbiAgICApO1xuICB9LCBbY2hhaW5JbmZvTWFwXSk7XG5cbiAgY29uc3QgZ3JvdXBCeSA9IHVzZUNhbGxiYWNrKChpdGVtOiBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtKSA9PiB7XG4gICAgcmV0dXJuIGZvcm1hdEhpc3RvcnlEYXRlKGl0ZW0udGltZSwgbGFuZ3VhZ2UsICdsaXN0Jyk7XG4gIH0sIFtsYW5ndWFnZV0pO1xuXG4gIGNvbnN0IGdyb3VwU2VwYXJhdG9yID0gdXNlQ2FsbGJhY2soKGdyb3VwOiBUcmFuc2FjdGlvbkhpc3RvcnlJdGVtW10sIGlkeDogbnVtYmVyLCBncm91cExhYmVsOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J19fZ3JvdXAtc2VwYXJhdG9yJz57Z3JvdXBMYWJlbH08L2Rpdj5cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBhZ2VXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17YGhpc3RvcnkgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgcmVzb2x2ZT17ZGF0YUNvbnRleHQuYXdhaXRTdG9yZXMoWyd0cmFuc2FjdGlvbkhpc3RvcnknXSl9XG4gICAgICA+XG4gICAgICAgIDxTd1N1YkhlYWRlclxuICAgICAgICAgIGJhY2tncm91bmQ9eyd0cmFuc3BhcmVudCd9XG4gICAgICAgICAgY2VudGVyPXtmYWxzZX1cbiAgICAgICAgICBjbGFzc05hbWU9eydoaXN0b3J5LWhlYWRlcid9XG4gICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsXG4gICAgICAgICAgLy8gdG9kbzogZW5hYmxlIHRoaXMgY29kZSBpZiBzdXBwb3J0IGRvd25sb2FkIGZlYXR1cmVcbiAgICAgICAgICAvLyByaWdodEJ1dHRvbnM9e1tcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAgaWNvbjogKFxuICAgICAgICAgIC8vICAgICAgIDxJY29uXG4gICAgICAgICAgLy8gICAgICAgICBwaG9zcGhvckljb249e0Rvd25sb2FkU2ltcGxlfVxuICAgICAgICAgIC8vICAgICAgICAgc2l6ZT17J21kJ31cbiAgICAgICAgICAvLyAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgIC8vICAgICAgIC8+XG4gICAgICAgICAgLy8gICAgIClcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyBdfVxuICAgICAgICAgIHNob3dCYWNrQnV0dG9uPXtmYWxzZX1cbiAgICAgICAgICB0aXRsZT17dCgnSGlzdG9yeScpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxTd0xpc3QuU2VjdGlvblxuICAgICAgICAgIGFjdGlvbkJ0bkljb249ezxJY29uIHBob3NwaG9ySWNvbj17RmFkZXJzSG9yaXpvbnRhbH0gLz59XG4gICAgICAgICAgZW5hYmxlU2VhcmNoSW5wdXRcbiAgICAgICAgICBmaWx0ZXJCeT17ZmlsdGVyRnVuY3Rpb259XG4gICAgICAgICAgZ3JvdXBCeT17Z3JvdXBCeX1cbiAgICAgICAgICBncm91cFNlcGFyYXRvcj17Z3JvdXBTZXBhcmF0b3J9XG4gICAgICAgICAgbGlzdD17aGlzdG9yeUxpc3R9XG4gICAgICAgICAgb25DbGlja0FjdGlvbkJ0bj17b25DbGlja0FjdGlvbkJ0bn1cbiAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJJdGVtfVxuICAgICAgICAgIHJlbmRlcldoZW5FbXB0eT17ZW1wdHlMaXN0fVxuICAgICAgICAgIHNlYXJjaEZ1bmN0aW9uPXtzZWFyY2hGdW5jfVxuICAgICAgICAgIHNlYXJjaE1pbkNoYXJhY3RlcnNDb3VudD17Mn1cbiAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dDxzdHJpbmc+KCdTZWFyY2ggaGlzdG9yeScpfVxuICAgICAgICAgIHNob3dBY3Rpb25CdG5cbiAgICAgICAgLz5cbiAgICAgIDwvUGFnZVdyYXBwZXI+XG5cbiAgICAgIDxIaXN0b3J5RGV0YWlsTW9kYWxcbiAgICAgICAgZGF0YT17c2VsZWN0ZWRJdGVtfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZURldGFpbH1cbiAgICAgIC8+XG5cbiAgICAgIDxGaWx0ZXJNb2RhbFxuICAgICAgICBpZD17RklMVEVSX01PREFMX0lEfVxuICAgICAgICBvbkFwcGx5RmlsdGVyPXtvbkFwcGx5RmlsdGVyfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZUZpbHRlck1vZGFsfVxuICAgICAgICBvbkNoYW5nZU9wdGlvbj17b25DaGFuZ2VGaWx0ZXJPcHRpb259XG4gICAgICAgIG9wdGlvblNlbGVjdGlvbk1hcD17ZmlsdGVyU2VsZWN0aW9uTWFwfVxuICAgICAgICBvcHRpb25zPXtmaWx0ZXJPcHRpb25zfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgSGlzdG9yeSA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAgICcuaGlzdG9yeS1oZWFkZXIuYW50LXN3LXN1Yi1oZWFkZXItY29udGFpbmVyJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgfSxcblxuICAgICcuYW50LXN3LWxpc3Qtc2VjdGlvbic6IHtcbiAgICAgIGZsZXg6IDFcbiAgICB9LFxuICAgICcuYW50LXN3LXN1Yi1oZWFkZXItY29udGFpbmVyJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5YU1xuICAgIH0sXG4gICAgJy5oaXN0b3J5LWl0ZW0gKyAuaGlzdG9yeS1pdGVtLCAuaGlzdG9yeS1pdGVtICsgLl9fX2xpc3Qtc2VwYXJhdG9yJzoge1xuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5YU1xuICAgIH0sXG4gICAgJy5fX19saXN0LXNlcGFyYXRvcic6IHtcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVNNLFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodFNNLFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MyxcbiAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmhlYWRpbmdGb250V2VpZ2h0LFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5YU1xuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeTtcbiJdLCJuYW1lcyI6WyJyZWZvcm1hdEFkZHJlc3MiLCJkZWNvZGVBZGRyZXNzIiwiZW5jb2RlQWRkcmVzcyIsImlzQWRkcmVzcyIsImlzRXRoZXJldW1BZGRyZXNzIiwic2ltcGxlQWRkcmVzcyIsImFkZHJlc3MiLCJxdWlja0Zvcm1hdEFkZHJlc3NUb0NvbXBhcmUiLCJ0b0xvd2VyQ2FzZSIsImNvbnZlcnRTdWJqZWN0SW5mb1RvQWRkcmVzc2VzIiwic3ViamVjdEluZm8iLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpbmZvIiwianNvbiIsInR5cGUiLCJtZXRhIiwiRXh0cmluc2ljVHlwZSIsImdldEV4cGxvcmVyTGluayIsIkhJU1RPUllfREVUQUlMX01PREFMIiwiQnV0dG9uIiwiSWNvbiIsIlN3TW9kYWwiLCJBcnJvd1NxdWFyZVVwUmlnaHQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVRyYW5zbGF0aW9uIiwidXNlU2VsZWN0b3IiLCJzdHlsZWQiLCJIaXN0b3J5RGV0YWlsTGF5b3V0IiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwiZGF0YSIsIm9uQ2FuY2VsIiwiY2hhaW5JbmZvTWFwIiwic3RhdGUiLCJjaGFpblN0b3JlIiwidCIsIm9wZW5CbG9ja0V4cGxvcmVyIiwibGluayIsIndpbmRvdyIsIm9wZW4iLCJtb2RhbEZvb3RlciIsImV4dHJpbnNpY1R5cGUiLCJjaGFpbkluZm8iLCJjaGFpbiIsIm9yaWdpbkNoYWluSW5mbyIsIlRSQU5TRkVSX1hDTSIsImFkZGl0aW9uYWxJbmZvIiwib3JpZ2luYWxDaGFpbiIsImV4dHJpbnNpY0hhc2giLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheURhdGEiLCJ0aXRsZSIsIkhpc3RvcnlEZXRhaWxNb2RhbCIsInRoZW1lIiwidG9rZW4iLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJNZXRhSW5mbyIsImlzVHlwZVN0YWtpbmciLCJwcm9wcyIsImFtb3VudCIsInRyYW5zYWN0aW9uVHlwZSIsImlzU3Rha2luZyIsImlzQ3Jvd2Rsb2FuIiwiQ1JPV0RMT0FOIiwiaXNOZnQiLCJTRU5EX05GVCIsImFtb3VudExhYmVsIiwiU1RBS0lOR19CT05EIiwiU1RBS0lOR19KT0lOX1BPT0wiLCJTVEFLSU5HX1dJVEhEUkFXIiwiU1RBS0lOR19QT09MX1dJVEhEUkFXIiwiU1RBS0lOR19VTkJPTkQiLCJTVEFLSU5HX0NBTkNFTF9VTlNUQUtFIiwiZGVjaW1hbHMiLCJ1bmRlZmluZWQiLCJzeW1ib2wiLCJ2YWx1ZSIsImNvbGxlY3Rpb25OYW1lIiwiSGlzdG9yeURldGFpbEFtb3VudCIsImlzVHlwZVRyYW5zZmVyIiwiZmVlIiwieGNtSW5mbyIsIkhpc3RvcnlEZXRhaWxGZWUiLCJfZ2V0Q2hhaW5OYW1lIiwic2x1ZyIsImRlc3RpbmF0aW9uQ2hhaW4iLCJuYW1lIiwidG8iLCJ0b05hbWUiLCJmcm9tIiwiZnJvbU5hbWUiLCJzdWJzdHJhdGVJbmZvIiwiYWRkcmVzc1ByZWZpeCIsIkhpc3RvcnlEZXRhaWxIZWFkZXIiLCJIaXN0b3J5U3RhdHVzTWFwIiwiVHhUeXBlTmFtZU1hcCIsImZvcm1hdEhpc3RvcnlEYXRlIiwidG9TaG9ydCIsIkNOIiwibGFuZ3VhZ2UiLCJzZXR0aW5ncyIsInN0YXR1cyIsImljb24iLCJzY2hlbWEiLCJzdGFydHNXaXRoIiwidGltZSIsIkV4dHJpbnNpY1N0YXR1cyIsIlRyYW5zYWN0aW9uRGlyZWN0aW9uIiwiaXNBY2NvdW50QWxsIiwiRW1wdHlMaXN0IiwiRmlsdGVyTW9kYWwiLCJIaXN0b3J5SXRlbSIsIlBhZ2VXcmFwcGVyIiwiRGF0YUNvbnRleHQiLCJ1c2VGaWx0ZXJNb2RhbCIsInVzZVNldEN1cnJlbnRQYWdlIiwiY3VzdG9tRm9ybWF0RGF0ZSIsIk1vZGFsQ29udGV4dCIsIlN3TGlzdCIsIlN3U3ViSGVhZGVyIiwiQXBlcnR1cmUiLCJBcnJvd0Rvd25MZWZ0IiwiQXJyb3dVcFJpZ2h0IiwiQ2xvY2siLCJDbG9ja0NvdW50ZXJDbG9ja3dpc2UiLCJEYXRhYmFzZSIsIkZhZGVyc0hvcml6b250YWwiLCJSb2NrZXQiLCJTcGlubmVyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiSWNvbk1hcCIsInNlbmQiLCJyZWNlaXZlIiwiY2xhaW1fcmV3YXJkIiwic3Rha2luZyIsImNyb3dkbG9hbiIsIm5mdCIsInByb2Nlc3NpbmciLCJkZWZhdWx0IiwiZ2V0SWNvbiIsIml0ZW0iLCJQUk9DRVNTSU5HIiwiU1VCTUlUVElORyIsIlNUQUtJTkdfQ0xBSU1fUkVXQVJEIiwiZ2V0RGlzcGxheURhdGEiLCJuYW1lTWFwIiwidGl0bGVNYXAiLCJkaXNwbGF5U3RhdHVzIiwiRkFJTCIsIlRSQU5TRkVSX0JBTEFOQ0UiLCJUUkFOU0ZFUl9UT0tFTiIsIkVWTV9FWEVDVVRFIiwiZGlyZWN0aW9uIiwiUkVDRUlWRUQiLCJyZWNlaXZlZCIsInR5cGVOYW1lIiwic3VibWl0dGluZyIsIkZJTFRFUl9NT0RBTF9JRCIsIkZpbHRlclZhbHVlIiwiZ2V0SGlzdG9yeUl0ZW1LZXkiLCJ0cmFuc2FjdGlvbklkIiwibW9kYWxJZCIsImRhdGFDb250ZXh0IiwiYWN0aXZlTW9kYWwiLCJjaGVja0FjdGl2ZSIsImluYWN0aXZlTW9kYWwiLCJhY2NvdW50cyIsImN1cnJlbnRBY2NvdW50Iiwicm9vdCIsImFjY291bnRTdGF0ZSIsImhpc3RvcnlMaXN0IiwicmF3SGlzdG9yeUxpc3QiLCJ0cmFuc2FjdGlvbkhpc3RvcnkiLCJpc0FjdGl2ZSIsImZpbHRlclNlbGVjdGlvbk1hcCIsIm9uQXBwbHlGaWx0ZXIiLCJvbkNoYW5nZUZpbHRlck9wdGlvbiIsIm9uQ2xvc2VGaWx0ZXJNb2RhbCIsInNlbGVjdGVkRmlsdGVycyIsImZpbHRlckZ1bmN0aW9uIiwibGVuZ3RoIiwiZmlsdGVyIiwiU0VORCIsIk5GVCIsIlNUQUtFIiwiQ0xBSU0iLCJTVUNDRVNTRlVMIiwiU1VDQ0VTUyIsIkZBSUxFRCIsImZpbHRlck9wdGlvbnMiLCJsYWJlbCIsImFjY291bnRNYXAiLCJyZWR1Y2UiLCJhY2NNYXAiLCJjdXIiLCJ0eXBlTmFtZU1hcCIsIlNUQUtJTkdfTEVBVkVfUE9PTCIsInR5cGVUaXRsZU1hcCIsImhpc3RvcnlNYXAiLCJjdXJyZW50QWRkcmVzcyIsImN1cnJlbnRBZGRyZXNzTG93ZXJDYXNlIiwiaXNGaWx0ZXJCeUFkZHJlc3MiLCJmaW5hbEhpc3RvcnlNYXAiLCJmb3JFYWNoIiwia2V5Iiwic29ydCIsImEiLCJiIiwiY3VyQWRyIiwiZXh0cmluc2ljSGFzaE9ySWQiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJvcGVuRGV0YWlsTGluayIsInNldE9wZW5EZXRhaWxMaW5rIiwib25PcGVuRGV0YWlsIiwib25DbG9zZURldGFpbCIsIm9uQ2xpY2tBY3Rpb25CdG4iLCJleGlzdGVkIiwiZmluZCIsInNlbGVjdGVkIiwiZW1wdHlMaXN0IiwicmVuZGVySXRlbSIsInNlYXJjaEZ1bmMiLCJzZWFyY2hUZXh0Iiwic2VhcmNoVGV4dExvd2VyQ2FzZSIsInRpcCIsIm5ldHdvcmsiLCJpbmNsdWRlcyIsImdyb3VwQnkiLCJncm91cFNlcGFyYXRvciIsImdyb3VwIiwiaWR4IiwiZ3JvdXBMYWJlbCIsImF3YWl0U3RvcmVzIiwiSGlzdG9yeSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsIm1hcmdpblhTIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJmb250U2l6ZVNNIiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRTTSIsImNvbG9yIiwiY29sb3JUZXh0TGlnaHQzIiwiZm9udFdlaWdodCIsImhlYWRpbmdGb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==