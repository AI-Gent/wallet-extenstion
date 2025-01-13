"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Transaction_variants_Withdraw_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Transaction/variants/Withdraw.tsx":
/*!************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/variants/Withdraw.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_koni_api_staking_bonding_astar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-base/koni/api/staking/bonding/astar */ "../extension-base/src/koni/api/staking/bonding/astar.ts");
/* harmony import */ var _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-base/koni/api/staking/bonding/utils */ "../extension-base/src/koni/api/staking/bonding/utils.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/constants */ "../extension-base/src/services/chain-service/constants.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Transaction_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Transaction/helper */ "../extension-koni-ui/src/Popup/Transaction/helper/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/XCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts */ "../extension-koni-ui/src/Popup/Transaction/parts/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0






















const hideFields = ['chain', 'asset', 'type'];
const validateFields = ['from'];
const Component = props => {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetCurrentPage)('/transaction/withdraw');
  const {
    className = ''
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const {
    defaultData,
    onDone,
    persistData
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTransactionContext)();
  const {
    chain,
    type
  } = defaultData;
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].useForm();
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => ({
    ...defaultData
  }), [defaultData]);
  const {
    isAllAccount
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.accountState);
  const {
    chainInfoMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.chainStore);
  const [isBalanceReady, setIsBalanceReady] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const from = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useWatchTransaction)('from', form, defaultData);
  const allNominatorInfo = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetNominatorInfo)(chain, type);
  const nominatorInfo = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetNominatorInfo)(chain, type, from);
  const nominatorMetadata = nominatorInfo[0];
  const unstakingInfo = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    if (from && !(0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.isAccountAll)(from)) {
      if (_subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_12__._STAKING_CHAIN_GROUP.astar.includes(nominatorMetadata.chain)) {
        return (0,_subwallet_extension_base_koni_api_staking_bonding_astar__WEBPACK_IMPORTED_MODULE_13__.getAstarWithdrawable)(nominatorMetadata);
      }
      return nominatorMetadata.unstakings.filter(data => data.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_14__.UnstakingStatus.CLAIMABLE)[0];
    }
    return undefined;
  }, [from, nominatorMetadata]);
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    decimals,
    symbol
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetNativeTokenBasicInfo)(chain);
  const goHome = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    navigate('/home/staking');
  }, [navigate]);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((changedFields, allFields) => {
    // TODO: field change
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.simpleCheckForm)(allFields, ['asset']);
    const values = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.convertFieldToObject)(allFields);
    setIsDisable(empty || error);
    persistData(values);
  }, [persistData]);
  const {
    onError,
    onSuccess
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useHandleSubmitTransaction)(onDone);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(values => {
    setLoading(true);
    if (!unstakingInfo) {
      setLoading(false);
      return;
    }
    const params = {
      unstakingInfo: unstakingInfo,
      chain: nominatorMetadata.chain,
      nominatorMetadata
    };
    if ((0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_15__.isActionFromValidator)(type, chain)) {
      params.validatorAddress = unstakingInfo.validatorAddress;
    }
    setTimeout(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.submitStakeWithdrawal)(params).then(onSuccess).catch(onError).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [chain, nominatorMetadata, onError, onSuccess, type, unstakingInfo]);
  const onPreCheck = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.usePreCheckAction)(from);
  const filterAccount = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(account => {
    const nomination = allNominatorInfo.find(data => (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_16__.isSameAddress)(data.address, account.address));
    return (nomination ? nomination.unstakings.filter(data => data.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_14__.UnstakingStatus.CLAIMABLE).length > 0 : false) && (0,_subwallet_extension_koni_ui_Popup_Transaction_helper__WEBPACK_IMPORTED_MODULE_4__.accountFilterFunc)(chainInfoMap, type, chain)(account);
  }, [chainInfoMap, allNominatorInfo, chain, type]);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useRestoreTransaction)(form);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useInitValidateTransaction)(validateFields, form, defaultData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_7__.TransactionContent, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
        resolve: dataContext.awaitStores(['staking']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: `${className} form-container form-space-sm`,
          form: form,
          initialValues: formDefault,
          onFieldsChange: onFieldsChange,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.HiddenInput, {
            fields: hideFields
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
            hidden: !isAllAccount,
            name: 'from',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountSelector, {
              filter: filterAccount
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_7__.FreeBalance, {
            address: from,
            chain: chain,
            className: 'free-balance',
            label: t('Available balance:'),
            onBalanceReady: setIsBalanceReady
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo, {
              className: "withdraw-meta-info",
              hasBackgroundWrapper: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Chain, {
                chain: chain,
                label: t('Network')
              }), unstakingInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Number, {
                decimals: decimals,
                label: t('Amount'),
                suffix: symbol,
                value: unstakingInfo.claimable
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_parts__WEBPACK_IMPORTED_MODULE_7__.TransactionFooter, {
      errors: [],
      warnings: [],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
        disabled: loading,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
          weight: "fill"
        }),
        onClick: goHome,
        schema: 'secondary',
        children: t('Cancel')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
        disabled: isDisable || !isBalanceReady,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
          weight: "fill"
        }),
        loading: loading,
        onClick: onPreCheck(form.submit, type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_14__.StakingType.POOLED ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_14__.ExtrinsicType.STAKING_POOL_WITHDRAW : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_14__.ExtrinsicType.STAKING_WITHDRAW),
        children: t('Continue')
      })]
    })]
  });
};
const Withdraw = (0,styled_components__WEBPACK_IMPORTED_MODULE_21__["default"])(Component).withConfig({
  displayName: "Withdraw",
  componentId: "sc-hdv9qi-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.free-balance': {
      marginBottom: token.marginXS
    },
    '.meta-info': {
      marginTop: token.paddingSM
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Withdraw);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfVHJhbnNhY3Rpb25fdmFyaWFudHNfV2l0aGRyYXdfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRW9KO0FBRXBEO0FBQ0M7QUFDQztBQUNsQztBQUM4QztBQUM5QjtBQUNtTTtBQUNwTTtBQUNXO0FBRWU7QUFDaEQ7QUFDRTtBQUNlO0FBQzNCO0FBQ0E7QUFDUjtBQUV1QztBQUFBO0FBQUE7QUFBQTtBQUk5RSxNQUFNMkMsVUFBdUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0FBQzFFLE1BQU1DLGNBQTJDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFFNUQsTUFBTUMsU0FBMEIsR0FBSUMsS0FBWSxJQUFLO0VBQ25EM0IscUZBQWlCLENBQUMsdUJBQXVCLENBQUM7RUFDMUMsTUFBTTtJQUFFNEIsU0FBUyxHQUFHO0VBQUcsQ0FBQyxHQUFHRCxLQUFLO0VBRWhDLE1BQU07SUFBRUU7RUFBRSxDQUFDLEdBQUdYLDZEQUFjLEVBQUU7RUFDOUIsTUFBTVksUUFBUSxHQUFHWCw4REFBVyxFQUFFO0VBRTlCLE1BQU1ZLFdBQVcsR0FBR2hCLGlEQUFVLENBQUN2QiwwRkFBVyxDQUFDO0VBQzNDLE1BQU07SUFBRXdDLFdBQVc7SUFBRUMsTUFBTTtJQUFFQztFQUFZLENBQUMsR0FBR2pDLHlGQUFxQixFQUFrQjtFQUNwRixNQUFNO0lBQUVrQyxLQUFLO0lBQUVDO0VBQUssQ0FBQyxHQUFHSixXQUFXO0VBRW5DLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLEdBQUc1QixvRUFBWSxFQUFrQjtFQUM3QyxNQUFNOEIsV0FBVyxHQUFHdkIsOENBQU8sQ0FBQyxPQUF1QjtJQUFFLEdBQUdnQjtFQUFZLENBQUMsQ0FBQyxFQUFFLENBQUNBLFdBQVcsQ0FBQyxDQUFDO0VBRXRGLE1BQU07SUFBRVE7RUFBYSxDQUFDLEdBQUd6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RDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLFNBQVMsc0VBQW1CO0FBQzVCOztBQUVBLG9DQUFvQyxpREFBVTtBQUM5QyxTQUFTLDBEQUFtQixDQUFDLDREQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQztBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL3ZhcmlhbnRzL1dpdGhkcmF3LnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9waG9zcGhvci1yZWFjdC9kaXN0L2ljb25zL0Fycm93Q2lyY2xlUmlnaHQuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFeHRyaW5zaWNUeXBlLCBSZXF1ZXN0U3Rha2VXaXRoZHJhd2FsLCBTdGFraW5nVHlwZSwgVW5zdGFraW5nSW5mbywgVW5zdGFraW5nU3RhdHVzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBBY2NvdW50SnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBnZXRBc3RhcldpdGhkcmF3YWJsZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uva29uaS9hcGkvc3Rha2luZy9ib25kaW5nL2FzdGFyJztcbmltcG9ydCB7IGlzQWN0aW9uRnJvbVZhbGlkYXRvciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uva29uaS9hcGkvc3Rha2luZy9ib25kaW5nL3V0aWxzJztcbmltcG9ydCB7IF9TVEFLSU5HX0NIQUlOX0dST1VQIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpc1NhbWVBZGRyZXNzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBBY2NvdW50U2VsZWN0b3IsIEhpZGRlbklucHV0LCBNZXRhSW5mbywgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IHVzZUdldE5hdGl2ZVRva2VuQmFzaWNJbmZvLCB1c2VHZXROb21pbmF0b3JJbmZvLCB1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiwgdXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24sIHVzZVByZUNoZWNrQWN0aW9uLCB1c2VSZXN0b3JlVHJhbnNhY3Rpb24sIHVzZVNlbGVjdG9yLCB1c2VTZXRDdXJyZW50UGFnZSwgdXNlVHJhbnNhY3Rpb25Db250ZXh0LCB1c2VXYXRjaFRyYW5zYWN0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBzdWJtaXRTdGFrZVdpdGhkcmF3YWwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBhY2NvdW50RmlsdGVyRnVuYyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvUG9wdXAvVHJhbnNhY3Rpb24vaGVscGVyJztcbmltcG9ydCB7IEZvcm1DYWxsYmFja3MsIEZvcm1GaWVsZERhdGEsIFRoZW1lUHJvcHMsIFdpdGhkcmF3UGFyYW1zIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBjb252ZXJ0RmllbGRUb09iamVjdCwgaXNBY2NvdW50QWxsLCBzaW1wbGVDaGVja0Zvcm0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSWNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgQXJyb3dDaXJjbGVSaWdodCwgWENpcmNsZSB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGcmVlQmFsYW5jZSwgVHJhbnNhY3Rpb25Db250ZW50LCBUcmFuc2FjdGlvbkZvb3RlciB9IGZyb20gJy4uL3BhcnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHM7XG5cbmNvbnN0IGhpZGVGaWVsZHM6IEFycmF5PGtleW9mIFdpdGhkcmF3UGFyYW1zPiA9IFsnY2hhaW4nLCAnYXNzZXQnLCAndHlwZSddO1xuY29uc3QgdmFsaWRhdGVGaWVsZHM6IEFycmF5PGtleW9mIFdpdGhkcmF3UGFyYW1zPiA9IFsnZnJvbSddO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgdXNlU2V0Q3VycmVudFBhZ2UoJy90cmFuc2FjdGlvbi93aXRoZHJhdycpO1xuICBjb25zdCB7IGNsYXNzTmFtZSA9ICcnIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuICBjb25zdCB7IGRlZmF1bHREYXRhLCBvbkRvbmUsIHBlcnNpc3REYXRhIH0gPSB1c2VUcmFuc2FjdGlvbkNvbnRleHQ8V2l0aGRyYXdQYXJhbXM+KCk7XG4gIGNvbnN0IHsgY2hhaW4sIHR5cGUgfSA9IGRlZmF1bHREYXRhO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxXaXRoZHJhd1BhcmFtcz4oKTtcbiAgY29uc3QgZm9ybURlZmF1bHQgPSB1c2VNZW1vKCgpOiBXaXRoZHJhd1BhcmFtcyA9PiAoeyAuLi5kZWZhdWx0RGF0YSB9KSwgW2RlZmF1bHREYXRhXSk7XG5cbiAgY29uc3QgeyBpc0FsbEFjY291bnQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudFN0YXRlKTtcbiAgY29uc3QgeyBjaGFpbkluZm9NYXAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2hhaW5TdG9yZSk7XG4gIGNvbnN0IFtpc0JhbGFuY2VSZWFkeSwgc2V0SXNCYWxhbmNlUmVhZHldID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZnJvbSA9IHVzZVdhdGNoVHJhbnNhY3Rpb24oJ2Zyb20nLCBmb3JtLCBkZWZhdWx0RGF0YSk7XG5cbiAgY29uc3QgYWxsTm9taW5hdG9ySW5mbyA9IHVzZUdldE5vbWluYXRvckluZm8oY2hhaW4sIHR5cGUpO1xuICBjb25zdCBub21pbmF0b3JJbmZvID0gdXNlR2V0Tm9taW5hdG9ySW5mbyhjaGFpbiwgdHlwZSwgZnJvbSk7XG4gIGNvbnN0IG5vbWluYXRvck1ldGFkYXRhID0gbm9taW5hdG9ySW5mb1swXTtcblxuICBjb25zdCB1bnN0YWtpbmdJbmZvID0gdXNlTWVtbygoKTogVW5zdGFraW5nSW5mbyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgaWYgKGZyb20gJiYgIWlzQWNjb3VudEFsbChmcm9tKSkge1xuICAgICAgaWYgKF9TVEFLSU5HX0NIQUlOX0dST1VQLmFzdGFyLmluY2x1ZGVzKG5vbWluYXRvck1ldGFkYXRhLmNoYWluKSkge1xuICAgICAgICByZXR1cm4gZ2V0QXN0YXJXaXRoZHJhd2FibGUobm9taW5hdG9yTWV0YWRhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9taW5hdG9yTWV0YWRhdGEudW5zdGFraW5ncy5maWx0ZXIoKGRhdGEpID0+IGRhdGEuc3RhdHVzID09PSBVbnN0YWtpbmdTdGF0dXMuQ0xBSU1BQkxFKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LCBbZnJvbSwgbm9taW5hdG9yTWV0YWRhdGFdKTtcblxuICBjb25zdCBbaXNEaXNhYmxlLCBzZXRJc0Rpc2FibGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IGRlY2ltYWxzLCBzeW1ib2wgfSA9IHVzZUdldE5hdGl2ZVRva2VuQmFzaWNJbmZvKGNoYWluKTtcblxuICBjb25zdCBnb0hvbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoJy9ob21lL3N0YWtpbmcnKTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3Qgb25GaWVsZHNDaGFuZ2U6IEZvcm1DYWxsYmFja3M8V2l0aGRyYXdQYXJhbXM+WydvbkZpZWxkc0NoYW5nZSddID0gdXNlQ2FsbGJhY2soKGNoYW5nZWRGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSwgYWxsRmllbGRzOiBGb3JtRmllbGREYXRhW10pID0+IHtcbiAgICAvLyBUT0RPOiBmaWVsZCBjaGFuZ2VcbiAgICBjb25zdCB7IGVtcHR5LCBlcnJvciB9ID0gc2ltcGxlQ2hlY2tGb3JtKGFsbEZpZWxkcywgWydhc3NldCddKTtcblxuICAgIGNvbnN0IHZhbHVlcyA9IGNvbnZlcnRGaWVsZFRvT2JqZWN0PFdpdGhkcmF3UGFyYW1zPihhbGxGaWVsZHMpO1xuXG4gICAgc2V0SXNEaXNhYmxlKGVtcHR5IHx8IGVycm9yKTtcbiAgICBwZXJzaXN0RGF0YSh2YWx1ZXMpO1xuICB9LCBbcGVyc2lzdERhdGFdKTtcblxuICBjb25zdCB7IG9uRXJyb3IsIG9uU3VjY2VzcyB9ID0gdXNlSGFuZGxlU3VibWl0VHJhbnNhY3Rpb24ob25Eb25lKTtcblxuICBjb25zdCBvblN1Ym1pdDogRm9ybUNhbGxiYWNrczxXaXRoZHJhd1BhcmFtcz5bJ29uRmluaXNoJ10gPSB1c2VDYWxsYmFjaygodmFsdWVzOiBXaXRoZHJhd1BhcmFtcykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBpZiAoIXVuc3Rha2luZ0luZm8pIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zOiBSZXF1ZXN0U3Rha2VXaXRoZHJhd2FsID0ge1xuICAgICAgdW5zdGFraW5nSW5mbzogdW5zdGFraW5nSW5mbyxcbiAgICAgIGNoYWluOiBub21pbmF0b3JNZXRhZGF0YS5jaGFpbixcbiAgICAgIG5vbWluYXRvck1ldGFkYXRhXG4gICAgfTtcblxuICAgIGlmIChpc0FjdGlvbkZyb21WYWxpZGF0b3IodHlwZSwgY2hhaW4pKSB7XG4gICAgICBwYXJhbXMudmFsaWRhdG9yQWRkcmVzcyA9IHVuc3Rha2luZ0luZm8udmFsaWRhdG9yQWRkcmVzcztcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHN1Ym1pdFN0YWtlV2l0aGRyYXdhbChwYXJhbXMpXG4gICAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMzAwKTtcbiAgfSwgW2NoYWluLCBub21pbmF0b3JNZXRhZGF0YSwgb25FcnJvciwgb25TdWNjZXNzLCB0eXBlLCB1bnN0YWtpbmdJbmZvXSk7XG5cbiAgY29uc3Qgb25QcmVDaGVjayA9IHVzZVByZUNoZWNrQWN0aW9uKGZyb20pO1xuXG4gIGNvbnN0IGZpbHRlckFjY291bnQgPSB1c2VDYWxsYmFjaygoYWNjb3VudDogQWNjb3VudEpzb24pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBub21pbmF0aW9uID0gYWxsTm9taW5hdG9ySW5mby5maW5kKChkYXRhKSA9PiBpc1NhbWVBZGRyZXNzKGRhdGEuYWRkcmVzcywgYWNjb3VudC5hZGRyZXNzKSk7XG5cbiAgICByZXR1cm4gKG5vbWluYXRpb24gPyBub21pbmF0aW9uLnVuc3Rha2luZ3MuZmlsdGVyKChkYXRhKSA9PiBkYXRhLnN0YXR1cyA9PT0gVW5zdGFraW5nU3RhdHVzLkNMQUlNQUJMRSkubGVuZ3RoID4gMCA6IGZhbHNlKSAmJiBhY2NvdW50RmlsdGVyRnVuYyhjaGFpbkluZm9NYXAsIHR5cGUsIGNoYWluKShhY2NvdW50KTtcbiAgfSwgW2NoYWluSW5mb01hcCwgYWxsTm9taW5hdG9ySW5mbywgY2hhaW4sIHR5cGVdKTtcblxuICB1c2VSZXN0b3JlVHJhbnNhY3Rpb24oZm9ybSk7XG4gIHVzZUluaXRWYWxpZGF0ZVRyYW5zYWN0aW9uKHZhbGlkYXRlRmllbGRzLCBmb3JtLCBkZWZhdWx0RGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRyYW5zYWN0aW9uQ29udGVudD5cbiAgICAgICAgPFBhZ2VXcmFwcGVyIHJlc29sdmU9e2RhdGFDb250ZXh0LmF3YWl0U3RvcmVzKFsnc3Rha2luZyddKX0+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBmb3JtLWNvbnRhaW5lciBmb3JtLXNwYWNlLXNtYH1cbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtmb3JtRGVmYXVsdH1cbiAgICAgICAgICAgIG9uRmllbGRzQ2hhbmdlPXtvbkZpZWxkc0NoYW5nZX1cbiAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGlkZGVuSW5wdXQgZmllbGRzPXtoaWRlRmllbGRzfSAvPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBoaWRkZW49eyFpc0FsbEFjY291bnR9XG4gICAgICAgICAgICAgIG5hbWU9eydmcm9tJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvciBmaWx0ZXI9e2ZpbHRlckFjY291bnR9IC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGcmVlQmFsYW5jZVxuICAgICAgICAgICAgICBhZGRyZXNzPXtmcm9tfVxuICAgICAgICAgICAgICBjaGFpbj17Y2hhaW59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J2ZyZWUtYmFsYW5jZSd9XG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdBdmFpbGFibGUgYmFsYW5jZTonKX1cbiAgICAgICAgICAgICAgb25CYWxhbmNlUmVhZHk9e3NldElzQmFsYW5jZVJlYWR5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxNZXRhSW5mb1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nd2l0aGRyYXctbWV0YS1pbmZvJ1xuICAgICAgICAgICAgICAgIGhhc0JhY2tncm91bmRXcmFwcGVyPXt0cnVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1ldGFJbmZvLkNoYWluXG4gICAgICAgICAgICAgICAgICBjaGFpbj17Y2hhaW59XG4gICAgICAgICAgICAgICAgICBsYWJlbD17dCgnTmV0d29yaycpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdW5zdGFraW5nSW5mbyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZXRhSW5mby5OdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFscz17ZGVjaW1hbHN9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ0Ftb3VudCcpfVxuICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeD17c3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1bnN0YWtpbmdJbmZvLmNsYWltYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvTWV0YUluZm8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XG4gICAgICA8L1RyYW5zYWN0aW9uQ29udGVudD5cbiAgICAgIDxUcmFuc2FjdGlvbkZvb3RlclxuICAgICAgICBlcnJvcnM9e1tdfVxuICAgICAgICB3YXJuaW5ncz17W119XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBwaG9zcGhvckljb249e1hDaXJjbGV9XG4gICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBvbkNsaWNrPXtnb0hvbWV9XG4gICAgICAgICAgc2NoZW1hPXsnc2Vjb25kYXJ5J31cbiAgICAgICAgPlxuICAgICAgICAgIHt0KCdDYW5jZWwnKX1cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGUgfHwgIWlzQmFsYW5jZVJlYWR5fVxuICAgICAgICAgIGljb249eyhcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17QXJyb3dDaXJjbGVSaWdodH1cbiAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgb25DbGljaz17b25QcmVDaGVjayhmb3JtLnN1Ym1pdCwgdHlwZSA9PT0gU3Rha2luZ1R5cGUuUE9PTEVEID8gRXh0cmluc2ljVHlwZS5TVEFLSU5HX1BPT0xfV0lUSERSQVcgOiBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfV0lUSERSQVcpfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ0NvbnRpbnVlJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9UcmFuc2FjdGlvbkZvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFdpdGhkcmF3ID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLmZyZWUtYmFsYW5jZSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luWFNcbiAgICB9LFxuXG4gICAgJy5tZXRhLWluZm8nOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLnBhZGRpbmdTTVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBXaXRoZHJhdztcbiIsImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyUGF0aEZvcldlaWdodCB9IGZyb20gJy4uL2xpYi9pbmRleC5lc20uanMnO1xuaW1wb3J0IEljb25CYXNlIGZyb20gJy4uL2xpYi9JY29uQmFzZS5lc20uanMnO1xuXG4vKiBHRU5FUkFURUQgRklMRSAqL1xudmFyIHBhdGhzQnlXZWlnaHQgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xucGF0aHNCeVdlaWdodC5zZXQoXCJib2xkXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImR1b3RvbmVcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgb3BhY2l0eTogXCIwLjJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEzNC4xIDE2MS45IDE2OCAxMjggMTM0LjEgOTQuMVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJmaWxsXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4yLDEwNC4yLDAsMCwwLDEyOCwyNFptNDcuNCwxMDcuMWE4LjcsOC43LDAsMCwxLTEuOCwyLjZsLTMzLjksMzMuOWE3LjYsNy42LDAsMCwxLTUuNiwyLjMsNy44LDcuOCwwLDAsMS01LjctMi4zLDgsOCwwLDAsMSwwLTExLjNMMTQ4LjcsMTM2SDg4YTgsOCwwLDAsMSwwLTE2aDYwLjdMMTI4LjQsOTkuN2E4LDgsMCwwLDEsMTEuMy0xMS4zbDMzLjksMzMuOWE4LjcsOC43LDAsMCwxLDEuOCwyLjZBOC4zLDguMywwLDAsMSwxNzUuNCwxMzEuMVpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJyZWd1bGFyXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEzNC4xIDE2MS45IDE2OCAxMjggMTM0LjEgOTQuMVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBBcnJvd0NpcmNsZVJpZ2h0ID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgcmVuZGVyUGF0aDogcmVuZGVyUGF0aFxuICB9KSk7XG59KTtcbkFycm93Q2lyY2xlUmlnaHQuZGlzcGxheU5hbWUgPSBcIkFycm93Q2lyY2xlUmlnaHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dDaXJjbGVSaWdodDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycm93Q2lyY2xlUmlnaHQuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbIkV4dHJpbnNpY1R5cGUiLCJTdGFraW5nVHlwZSIsIlVuc3Rha2luZ1N0YXR1cyIsImdldEFzdGFyV2l0aGRyYXdhYmxlIiwiaXNBY3Rpb25Gcm9tVmFsaWRhdG9yIiwiX1NUQUtJTkdfQ0hBSU5fR1JPVVAiLCJpc1NhbWVBZGRyZXNzIiwiQWNjb3VudFNlbGVjdG9yIiwiSGlkZGVuSW5wdXQiLCJNZXRhSW5mbyIsIlBhZ2VXcmFwcGVyIiwiRGF0YUNvbnRleHQiLCJ1c2VHZXROYXRpdmVUb2tlbkJhc2ljSW5mbyIsInVzZUdldE5vbWluYXRvckluZm8iLCJ1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiIsInVzZUluaXRWYWxpZGF0ZVRyYW5zYWN0aW9uIiwidXNlUHJlQ2hlY2tBY3Rpb24iLCJ1c2VSZXN0b3JlVHJhbnNhY3Rpb24iLCJ1c2VTZWxlY3RvciIsInVzZVNldEN1cnJlbnRQYWdlIiwidXNlVHJhbnNhY3Rpb25Db250ZXh0IiwidXNlV2F0Y2hUcmFuc2FjdGlvbiIsInN1Ym1pdFN0YWtlV2l0aGRyYXdhbCIsImFjY291bnRGaWx0ZXJGdW5jIiwiY29udmVydEZpZWxkVG9PYmplY3QiLCJpc0FjY291bnRBbGwiLCJzaW1wbGVDaGVja0Zvcm0iLCJCdXR0b24iLCJGb3JtIiwiSWNvbiIsIkFycm93Q2lyY2xlUmlnaHQiLCJYQ2lyY2xlIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwiRnJlZUJhbGFuY2UiLCJUcmFuc2FjdGlvbkNvbnRlbnQiLCJUcmFuc2FjdGlvbkZvb3RlciIsImhpZGVGaWVsZHMiLCJ2YWxpZGF0ZUZpZWxkcyIsIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwidCIsIm5hdmlnYXRlIiwiZGF0YUNvbnRleHQiLCJkZWZhdWx0RGF0YSIsIm9uRG9uZSIsInBlcnNpc3REYXRhIiwiY2hhaW4iLCJ0eXBlIiwiZm9ybSIsInVzZUZvcm0iLCJmb3JtRGVmYXVsdCIsImlzQWxsQWNjb3VudCIsInN0YXRlIiwiYWNjb3VudFN0YXRlIiwiY2hhaW5JbmZvTWFwIiwiY2hhaW5TdG9yZSIsImlzQmFsYW5jZVJlYWR5Iiwic2V0SXNCYWxhbmNlUmVhZHkiLCJmcm9tIiwiYWxsTm9taW5hdG9ySW5mbyIsIm5vbWluYXRvckluZm8iLCJub21pbmF0b3JNZXRhZGF0YSIsInVuc3Rha2luZ0luZm8iLCJhc3RhciIsImluY2x1ZGVzIiwidW5zdGFraW5ncyIsImZpbHRlciIsImRhdGEiLCJzdGF0dXMiLCJDTEFJTUFCTEUiLCJ1bmRlZmluZWQiLCJpc0Rpc2FibGUiLCJzZXRJc0Rpc2FibGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRlY2ltYWxzIiwic3ltYm9sIiwiZ29Ib21lIiwib25GaWVsZHNDaGFuZ2UiLCJjaGFuZ2VkRmllbGRzIiwiYWxsRmllbGRzIiwiZW1wdHkiLCJlcnJvciIsInZhbHVlcyIsIm9uRXJyb3IiLCJvblN1Y2Nlc3MiLCJvblN1Ym1pdCIsInBhcmFtcyIsInZhbGlkYXRvckFkZHJlc3MiLCJzZXRUaW1lb3V0IiwidGhlbiIsImNhdGNoIiwiZmluYWxseSIsIm9uUHJlQ2hlY2siLCJmaWx0ZXJBY2NvdW50IiwiYWNjb3VudCIsIm5vbWluYXRpb24iLCJmaW5kIiwiYWRkcmVzcyIsImxlbmd0aCIsImF3YWl0U3RvcmVzIiwiY2xhaW1hYmxlIiwic3VibWl0IiwiUE9PTEVEIiwiU1RBS0lOR19QT09MX1dJVEhEUkFXIiwiU1RBS0lOR19XSVRIRFJBVyIsIldpdGhkcmF3IiwidGhlbWUiLCJ0b2tlbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblhTIiwibWFyZ2luVG9wIiwicGFkZGluZ1NNIl0sInNvdXJjZVJvb3QiOiIifQ==