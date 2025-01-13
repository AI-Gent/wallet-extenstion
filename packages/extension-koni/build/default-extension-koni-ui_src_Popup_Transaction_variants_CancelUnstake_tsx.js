"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Transaction_variants_CancelUnstake_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Transaction/variants/CancelUnstake.tsx":
/*!*****************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/variants/CancelUnstake.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/XCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper */ "../extension-koni-ui/src/Popup/Transaction/helper/index.ts");
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts */ "../extension-koni-ui/src/Popup/Transaction/parts/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0



















const hideFields = ['type', 'chain', 'asset'];
const validateFields = ['from'];
const Component = props => {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetCurrentPage)('/transaction/cancel-unstake');
  const {
    className = ''
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
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
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => ({
    ...defaultData
  }), [defaultData]);
  const {
    isAllAccount
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.accountState);
  const {
    chainInfoMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.chainStore);
  const from = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useWatchTransaction)('from', form, defaultData);
  const allNominatorInfo = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetNominatorInfo)(chain, type);
  const nominatorInfo = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetNominatorInfo)(chain, type, from);
  const nominatorMetadata = nominatorInfo[0];
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [isBalanceReady, setIsBalanceReady] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const [isChangeData, setIsChangeData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const goHome = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    navigate('/home/staking');
  }, [navigate]);
  const persistUnstake = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    if (from === defaultData.from && !isChangeData) {
      return defaultData.unstake;
    } else {
      return '';
    }
  }, [defaultData.from, defaultData.unstake, from, isChangeData]);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((changedFields, allFields) => {
    // TODO: field change
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.simpleCheckForm)(allFields, ['asset']);
    const values = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.convertFieldToObject)(allFields);
    const changes = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.convertFieldToObject)(changedFields);
    if (changes.from) {
      setIsChangeData(true);
    }
    setIsDisable(empty || error);
    persistData(values);
  }, [persistData]);
  const {
    onError,
    onSuccess
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useHandleSubmitTransaction)(onDone);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(values => {
    setLoading(true);
    const {
      chain,
      from,
      unstake: unstakeIndex
    } = values;
    setTimeout(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.submitStakeCancelWithdrawal)({
        address: from,
        chain: chain,
        selectedUnstaking: nominatorMetadata.unstakings[parseInt(unstakeIndex)]
      }).then(onSuccess).catch(onError).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [nominatorMetadata.unstakings, onError, onSuccess]);
  const filterAccount = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(account => {
    const nomination = allNominatorInfo.find(data => (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.isSameAddress)(data.address, account.address));
    return (nomination ? nomination.unstakings.length > 0 : false) && (0,_helper__WEBPACK_IMPORTED_MODULE_6__.accountFilterFunc)(chainInfoMap, type, chain)(account);
  }, [chainInfoMap, allNominatorInfo, chain, type]);
  const onPreCheck = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.usePreCheckAction)(from);
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
            name: 'unstake',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CancelUnstakeSelector, {
              chain: chain,
              defaultValue: persistUnstake,
              disabled: !from,
              label: t('Select an unstake request'),
              nominators: from ? (nominatorMetadata === null || nominatorMetadata === void 0 ? void 0 : nominatorMetadata.unstakings) || [] : []
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_parts__WEBPACK_IMPORTED_MODULE_7__.TransactionFooter, {
      errors: [],
      warnings: [],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
        disabled: loading,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
          weight: "fill"
        }),
        onClick: goHome,
        schema: 'secondary',
        children: t('Cancel')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
        disabled: isDisable || !isBalanceReady,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
          weight: "fill"
        }),
        loading: loading,
        onClick: onPreCheck(form.submit, _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.ExtrinsicType.STAKING_CANCEL_UNSTAKE),
        children: t('Approve')
      })]
    })]
  });
};
const CancelUnstake = (0,styled_components__WEBPACK_IMPORTED_MODULE_18__["default"])(Component).withConfig({
  displayName: "CancelUnstake",
  componentId: "sc-vxybj1-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.unstaked-field, .free-balance': {
      marginBottom: token.marginXS
    },
    '.meta-info': {
      marginTop: token.paddingSM
    },
    '.cancel-unstake-info-item > .__col': {
      flex: 'initial',
      paddingRight: token.paddingXXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelUnstake);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfVHJhbnNhY3Rpb25fdmFyaWFudHNfQ2FuY2VsVW5zdGFrZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFK0U7QUFFZjtBQUMyRDtBQUMzQztBQUN1SztBQUNsSztBQUVNO0FBQ2xDO0FBQ0U7QUFDZTtBQUMzQjtBQUNBO0FBQ1I7QUFFTztBQUNnQztBQUFBO0FBQUE7QUFBQTtBQUk5RSxNQUFNb0MsVUFBNEMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0FBQy9FLE1BQU1DLGNBQWdELEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFFakUsTUFBTUMsU0FBMEIsR0FBSUMsS0FBWSxJQUFLO0VBQ25EMUIscUZBQWlCLENBQUMsNkJBQTZCLENBQUM7RUFDaEQsTUFBTTtJQUFFMkIsU0FBUyxHQUFHO0VBQUcsQ0FBQyxHQUFHRCxLQUFLO0VBRWhDLE1BQU07SUFBRUU7RUFBRSxDQUFDLEdBQUdaLDZEQUFjLEVBQUU7RUFDOUIsTUFBTWEsUUFBUSxHQUFHWiw4REFBVyxFQUFFO0VBRTlCLE1BQU1hLFdBQVcsR0FBR2pCLGlEQUFVLENBQUNwQiwwRkFBVyxDQUFDO0VBQzNDLE1BQU07SUFBRXNDLFdBQVc7SUFBRUMsTUFBTTtJQUFFQztFQUFZLENBQUMsR0FBR2hDLHlGQUFxQixFQUF1QjtFQUN6RixNQUFNO0lBQUVpQyxLQUFLO0lBQUVDO0VBQUssQ0FBQyxHQUFHSixXQUFXO0VBRW5DLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLEdBQUc3QixvRUFBWSxFQUF1QjtFQUNsRCxNQUFNK0IsV0FBVyxHQUFHeEIsOENBQU8sQ0FBQyxPQUE0QjtJQUFFLEdBQUdpQjtFQUFZLENBQUMsQ0FBQyxFQUFFLENBQUNBLFdBQVcsQ0FBQyxDQUFDO0VBRTNGLE1BQU07SUFBRVE7RUFBYSxDQUFDLEdBQUd4QywrRUFBVyxDQUFFeUMs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QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSxTQUFTLHNFQUFtQjtBQUM1Qjs7QUFFQSxvQ0FBb0MsaURBQVU7QUFDOUMsU0FBUywwREFBbUIsQ0FBQyw0REFBUTtBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9UcmFuc2FjdGlvbi92YXJpYW50cy9DYW5jZWxVbnN0YWtlLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9waG9zcGhvci1yZWFjdC9kaXN0L2ljb25zL0Fycm93Q2lyY2xlUmlnaHQuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFeHRyaW5zaWNUeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5pbXBvcnQgeyBBY2NvdW50SnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBpc1NhbWVBZGRyZXNzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBBY2NvdW50U2VsZWN0b3IsIENhbmNlbFVuc3Rha2VTZWxlY3RvciwgSGlkZGVuSW5wdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VHZXROb21pbmF0b3JJbmZvLCB1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiwgdXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24sIHVzZVByZUNoZWNrQWN0aW9uLCB1c2VSZXN0b3JlVHJhbnNhY3Rpb24sIHVzZVNlbGVjdG9yLCB1c2VTZXRDdXJyZW50UGFnZSwgdXNlVHJhbnNhY3Rpb25Db250ZXh0LCB1c2VXYXRjaFRyYW5zYWN0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBzdWJtaXRTdGFrZUNhbmNlbFdpdGhkcmF3YWwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBDYW5jZWxVblN0YWtlUGFyYW1zLCBGb3JtQ2FsbGJhY2tzLCBGb3JtRmllbGREYXRhLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBjb252ZXJ0RmllbGRUb09iamVjdCwgc2ltcGxlQ2hlY2tGb3JtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscyc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEljb24gfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCB7IEFycm93Q2lyY2xlUmlnaHQsIFhDaXJjbGUgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgYWNjb3VudEZpbHRlckZ1bmMgfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgRnJlZUJhbGFuY2UsIFRyYW5zYWN0aW9uQ29udGVudCwgVHJhbnNhY3Rpb25Gb290ZXIgfSBmcm9tICcuLi9wYXJ0cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBoaWRlRmllbGRzOiBBcnJheTxrZXlvZiBDYW5jZWxVblN0YWtlUGFyYW1zPiA9IFsndHlwZScsICdjaGFpbicsICdhc3NldCddO1xuY29uc3QgdmFsaWRhdGVGaWVsZHM6IEFycmF5PGtleW9mIENhbmNlbFVuU3Rha2VQYXJhbXM+ID0gWydmcm9tJ107XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICB1c2VTZXRDdXJyZW50UGFnZSgnL3RyYW5zYWN0aW9uL2NhbmNlbC11bnN0YWtlJyk7XG4gIGNvbnN0IHsgY2xhc3NOYW1lID0gJycgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG4gIGNvbnN0IHsgZGVmYXVsdERhdGEsIG9uRG9uZSwgcGVyc2lzdERhdGEgfSA9IHVzZVRyYW5zYWN0aW9uQ29udGV4dDxDYW5jZWxVblN0YWtlUGFyYW1zPigpO1xuICBjb25zdCB7IGNoYWluLCB0eXBlIH0gPSBkZWZhdWx0RGF0YTtcblxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm08Q2FuY2VsVW5TdGFrZVBhcmFtcz4oKTtcbiAgY29uc3QgZm9ybURlZmF1bHQgPSB1c2VNZW1vKCgpOiBDYW5jZWxVblN0YWtlUGFyYW1zID0+ICh7IC4uLmRlZmF1bHREYXRhIH0pLCBbZGVmYXVsdERhdGFdKTtcblxuICBjb25zdCB7IGlzQWxsQWNjb3VudCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUpO1xuICBjb25zdCB7IGNoYWluSW5mb01hcCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jaGFpblN0b3JlKTtcblxuICBjb25zdCBmcm9tID0gdXNlV2F0Y2hUcmFuc2FjdGlvbignZnJvbScsIGZvcm0sIGRlZmF1bHREYXRhKTtcblxuICBjb25zdCBhbGxOb21pbmF0b3JJbmZvID0gdXNlR2V0Tm9taW5hdG9ySW5mbyhjaGFpbiwgdHlwZSk7XG4gIGNvbnN0IG5vbWluYXRvckluZm8gPSB1c2VHZXROb21pbmF0b3JJbmZvKGNoYWluLCB0eXBlLCBmcm9tKTtcbiAgY29uc3Qgbm9taW5hdG9yTWV0YWRhdGEgPSBub21pbmF0b3JJbmZvWzBdO1xuXG4gIGNvbnN0IFtpc0Rpc2FibGUsIHNldElzRGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNCYWxhbmNlUmVhZHksIHNldElzQmFsYW5jZVJlYWR5XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNDaGFuZ2VEYXRhLCBzZXRJc0NoYW5nZURhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdvSG9tZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgnL2hvbWUvc3Rha2luZycpO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCBwZXJzaXN0VW5zdGFrZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChmcm9tID09PSBkZWZhdWx0RGF0YS5mcm9tICYmICFpc0NoYW5nZURhdGEpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0RGF0YS51bnN0YWtlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCBbZGVmYXVsdERhdGEuZnJvbSwgZGVmYXVsdERhdGEudW5zdGFrZSwgZnJvbSwgaXNDaGFuZ2VEYXRhXSk7XG5cbiAgY29uc3Qgb25GaWVsZHNDaGFuZ2U6IEZvcm1DYWxsYmFja3M8Q2FuY2VsVW5TdGFrZVBhcmFtcz5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSkgPT4ge1xuICAgIC8vIFRPRE86IGZpZWxkIGNoYW5nZVxuICAgIGNvbnN0IHsgZW1wdHksIGVycm9yIH0gPSBzaW1wbGVDaGVja0Zvcm0oYWxsRmllbGRzLCBbJ2Fzc2V0J10pO1xuXG4gICAgY29uc3QgdmFsdWVzID0gY29udmVydEZpZWxkVG9PYmplY3Q8Q2FuY2VsVW5TdGFrZVBhcmFtcz4oYWxsRmllbGRzKTtcbiAgICBjb25zdCBjaGFuZ2VzID0gY29udmVydEZpZWxkVG9PYmplY3Q8Q2FuY2VsVW5TdGFrZVBhcmFtcz4oY2hhbmdlZEZpZWxkcyk7XG5cbiAgICBpZiAoY2hhbmdlcy5mcm9tKSB7XG4gICAgICBzZXRJc0NoYW5nZURhdGEodHJ1ZSk7XG4gICAgfVxuXG4gICAgc2V0SXNEaXNhYmxlKGVtcHR5IHx8IGVycm9yKTtcbiAgICBwZXJzaXN0RGF0YSh2YWx1ZXMpO1xuICB9LCBbcGVyc2lzdERhdGFdKTtcblxuICBjb25zdCB7IG9uRXJyb3IsIG9uU3VjY2VzcyB9ID0gdXNlSGFuZGxlU3VibWl0VHJhbnNhY3Rpb24ob25Eb25lKTtcblxuICBjb25zdCBvblN1Ym1pdDogRm9ybUNhbGxiYWNrczxDYW5jZWxVblN0YWtlUGFyYW1zPlsnb25GaW5pc2gnXSA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IENhbmNlbFVuU3Rha2VQYXJhbXMpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgeyBjaGFpbiwgZnJvbSwgdW5zdGFrZTogdW5zdGFrZUluZGV4IH0gPSB2YWx1ZXM7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHN1Ym1pdFN0YWtlQ2FuY2VsV2l0aGRyYXdhbCh7XG4gICAgICAgIGFkZHJlc3M6IGZyb20sXG4gICAgICAgIGNoYWluOiBjaGFpbixcbiAgICAgICAgc2VsZWN0ZWRVbnN0YWtpbmc6IG5vbWluYXRvck1ldGFkYXRhLnVuc3Rha2luZ3NbcGFyc2VJbnQodW5zdGFrZUluZGV4KV1cbiAgICAgIH0pXG4gICAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMzAwKTtcbiAgfSwgW25vbWluYXRvck1ldGFkYXRhLnVuc3Rha2luZ3MsIG9uRXJyb3IsIG9uU3VjY2Vzc10pO1xuXG4gIGNvbnN0IGZpbHRlckFjY291bnQgPSB1c2VDYWxsYmFjaygoYWNjb3VudDogQWNjb3VudEpzb24pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBub21pbmF0aW9uID0gYWxsTm9taW5hdG9ySW5mby5maW5kKChkYXRhKSA9PiBpc1NhbWVBZGRyZXNzKGRhdGEuYWRkcmVzcywgYWNjb3VudC5hZGRyZXNzKSk7XG5cbiAgICByZXR1cm4gKG5vbWluYXRpb24gPyBub21pbmF0aW9uLnVuc3Rha2luZ3MubGVuZ3RoID4gMCA6IGZhbHNlKSAmJiBhY2NvdW50RmlsdGVyRnVuYyhjaGFpbkluZm9NYXAsIHR5cGUsIGNoYWluKShhY2NvdW50KTtcbiAgfSwgW2NoYWluSW5mb01hcCwgYWxsTm9taW5hdG9ySW5mbywgY2hhaW4sIHR5cGVdKTtcblxuICBjb25zdCBvblByZUNoZWNrID0gdXNlUHJlQ2hlY2tBY3Rpb24oZnJvbSk7XG5cbiAgdXNlUmVzdG9yZVRyYW5zYWN0aW9uKGZvcm0pO1xuICB1c2VJbml0VmFsaWRhdGVUcmFuc2FjdGlvbih2YWxpZGF0ZUZpZWxkcywgZm9ybSwgZGVmYXVsdERhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUcmFuc2FjdGlvbkNvbnRlbnQ+XG4gICAgICAgIDxQYWdlV3JhcHBlciByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ3N0YWtpbmcnXSl9PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZm9ybS1jb250YWluZXIgZm9ybS1zcGFjZS1zbWB9XG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Zm9ybURlZmF1bHR9XG4gICAgICAgICAgICBvbkZpZWxkc0NoYW5nZT17b25GaWVsZHNDaGFuZ2V9XG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhpZGRlbklucHV0IGZpZWxkcz17aGlkZUZpZWxkc30gLz5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgaGlkZGVuPXshaXNBbGxBY2NvdW50fVxuICAgICAgICAgICAgICBuYW1lPXsnZnJvbSd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3IgZmlsdGVyPXtmaWx0ZXJBY2NvdW50fSAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8RnJlZUJhbGFuY2VcbiAgICAgICAgICAgICAgYWRkcmVzcz17ZnJvbX1cbiAgICAgICAgICAgICAgY2hhaW49e2NoYWlufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydmcmVlLWJhbGFuY2UnfVxuICAgICAgICAgICAgICBsYWJlbD17dCgnQXZhaWxhYmxlIGJhbGFuY2U6Jyl9XG4gICAgICAgICAgICAgIG9uQmFsYW5jZVJlYWR5PXtzZXRJc0JhbGFuY2VSZWFkeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9eyd1bnN0YWtlJ30+XG4gICAgICAgICAgICAgIDxDYW5jZWxVbnN0YWtlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFpbj17Y2hhaW59XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwZXJzaXN0VW5zdGFrZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWZyb219XG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ1NlbGVjdCBhbiB1bnN0YWtlIHJlcXVlc3QnKX1cbiAgICAgICAgICAgICAgICBub21pbmF0b3JzPXtmcm9tID8gbm9taW5hdG9yTWV0YWRhdGE/LnVuc3Rha2luZ3MgfHwgW10gOiBbXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9QYWdlV3JhcHBlcj5cbiAgICAgIDwvVHJhbnNhY3Rpb25Db250ZW50PlxuICAgICAgPFRyYW5zYWN0aW9uRm9vdGVyXG4gICAgICAgIGVycm9ycz17W119XG4gICAgICAgIHdhcm5pbmdzPXtbXX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgIGljb249eyhcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17WENpcmNsZX1cbiAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIG9uQ2xpY2s9e2dvSG9tZX1cbiAgICAgICAgICBzY2hlbWE9eydzZWNvbmRhcnknfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ0NhbmNlbCcpfVxuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZSB8fCAhaXNCYWxhbmNlUmVhZHl9XG4gICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtBcnJvd0NpcmNsZVJpZ2h0fVxuICAgICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICBvbkNsaWNrPXtvblByZUNoZWNrKGZvcm0uc3VibWl0LCBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0UpfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ0FwcHJvdmUnKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1RyYW5zYWN0aW9uRm9vdGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgQ2FuY2VsVW5zdGFrZSA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy51bnN0YWtlZC1maWVsZCwgLmZyZWUtYmFsYW5jZSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luWFNcbiAgICB9LFxuXG4gICAgJy5tZXRhLWluZm8nOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLnBhZGRpbmdTTVxuICAgIH0sXG5cbiAgICAnLmNhbmNlbC11bnN0YWtlLWluZm8taXRlbSA+IC5fX2NvbCc6IHtcbiAgICAgIGZsZXg6ICdpbml0aWFsJyxcbiAgICAgIHBhZGRpbmdSaWdodDogdG9rZW4ucGFkZGluZ1hYU1xuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxVbnN0YWtlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJQYXRoRm9yV2VpZ2h0IH0gZnJvbSAnLi4vbGliL2luZGV4LmVzbS5qcyc7XG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vbGliL0ljb25CYXNlLmVzbS5qcyc7XG5cbi8qIEdFTkVSQVRFRCBGSUxFICovXG52YXIgcGF0aHNCeVdlaWdodCA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImJvbGRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZHVvdG9uZVwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBvcGFjaXR5OiBcIjAuMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjIsMTA0LjIsMCwwLDAsMTI4LDI0Wm00Ny40LDEwNy4xYTguNyw4LjcsMCwwLDEtMS44LDIuNmwtMzMuOSwzMy45YTcuNiw3LjYsMCwwLDEtNS42LDIuMyw3LjgsNy44LDAsMCwxLTUuNy0yLjMsOCw4LDAsMCwxLDAtMTEuM0wxNDguNywxMzZIODhhOCw4LDAsMCwxLDAtMTZoNjAuN0wxMjguNCw5OS43YTgsOCwwLDAsMSwxMS4zLTExLjNsMzMuOSwzMy45YTguNyw4LjcsMCwwLDEsMS44LDIuNkE4LjMsOC4zLDAsMCwxLDE3NS40LDEzMS4xWlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEzNC4xIDE2MS45IDE2OCAxMjggMTM0LjEgOTQuMVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInJlZ3VsYXJcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5cbnZhciByZW5kZXJQYXRoID0gZnVuY3Rpb24gcmVuZGVyUGF0aCh3ZWlnaHQsIGNvbG9yKSB7XG4gIHJldHVybiByZW5kZXJQYXRoRm9yV2VpZ2h0KHdlaWdodCwgY29sb3IsIHBhdGhzQnlXZWlnaHQpO1xufTtcblxudmFyIEFycm93Q2lyY2xlUmlnaHQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuQXJyb3dDaXJjbGVSaWdodC5kaXNwbGF5TmFtZSA9IFwiQXJyb3dDaXJjbGVSaWdodFwiO1xuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0NpcmNsZVJpZ2h0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyb3dDaXJjbGVSaWdodC5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiRXh0cmluc2ljVHlwZSIsImlzU2FtZUFkZHJlc3MiLCJBY2NvdW50U2VsZWN0b3IiLCJDYW5jZWxVbnN0YWtlU2VsZWN0b3IiLCJIaWRkZW5JbnB1dCIsIlBhZ2VXcmFwcGVyIiwiRGF0YUNvbnRleHQiLCJ1c2VHZXROb21pbmF0b3JJbmZvIiwidXNlSGFuZGxlU3VibWl0VHJhbnNhY3Rpb24iLCJ1c2VJbml0VmFsaWRhdGVUcmFuc2FjdGlvbiIsInVzZVByZUNoZWNrQWN0aW9uIiwidXNlUmVzdG9yZVRyYW5zYWN0aW9uIiwidXNlU2VsZWN0b3IiLCJ1c2VTZXRDdXJyZW50UGFnZSIsInVzZVRyYW5zYWN0aW9uQ29udGV4dCIsInVzZVdhdGNoVHJhbnNhY3Rpb24iLCJzdWJtaXRTdGFrZUNhbmNlbFdpdGhkcmF3YWwiLCJjb252ZXJ0RmllbGRUb09iamVjdCIsInNpbXBsZUNoZWNrRm9ybSIsIkJ1dHRvbiIsIkZvcm0iLCJJY29uIiwiQXJyb3dDaXJjbGVSaWdodCIsIlhDaXJjbGUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJhY2NvdW50RmlsdGVyRnVuYyIsIkZyZWVCYWxhbmNlIiwiVHJhbnNhY3Rpb25Db250ZW50IiwiVHJhbnNhY3Rpb25Gb290ZXIiLCJoaWRlRmllbGRzIiwidmFsaWRhdGVGaWVsZHMiLCJDb21wb25lbnQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInQiLCJuYXZpZ2F0ZSIsImRhdGFDb250ZXh0IiwiZGVmYXVsdERhdGEiLCJvbkRvbmUiLCJwZXJzaXN0RGF0YSIsImNoYWluIiwidHlwZSIsImZvcm0iLCJ1c2VGb3JtIiwiZm9ybURlZmF1bHQiLCJpc0FsbEFjY291bnQiLCJzdGF0ZSIsImFjY291bnRTdGF0ZSIsImNoYWluSW5mb01hcCIsImNoYWluU3RvcmUiLCJmcm9tIiwiYWxsTm9taW5hdG9ySW5mbyIsIm5vbWluYXRvckluZm8iLCJub21pbmF0b3JNZXRhZGF0YSIsImlzRGlzYWJsZSIsInNldElzRGlzYWJsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNCYWxhbmNlUmVhZHkiLCJzZXRJc0JhbGFuY2VSZWFkeSIsImlzQ2hhbmdlRGF0YSIsInNldElzQ2hhbmdlRGF0YSIsImdvSG9tZSIsInBlcnNpc3RVbnN0YWtlIiwidW5zdGFrZSIsIm9uRmllbGRzQ2hhbmdlIiwiY2hhbmdlZEZpZWxkcyIsImFsbEZpZWxkcyIsImVtcHR5IiwiZXJyb3IiLCJ2YWx1ZXMiLCJjaGFuZ2VzIiwib25FcnJvciIsIm9uU3VjY2VzcyIsIm9uU3VibWl0IiwidW5zdGFrZUluZGV4Iiwic2V0VGltZW91dCIsImFkZHJlc3MiLCJzZWxlY3RlZFVuc3Rha2luZyIsInVuc3Rha2luZ3MiLCJwYXJzZUludCIsInRoZW4iLCJjYXRjaCIsImZpbmFsbHkiLCJmaWx0ZXJBY2NvdW50IiwiYWNjb3VudCIsIm5vbWluYXRpb24iLCJmaW5kIiwiZGF0YSIsImxlbmd0aCIsIm9uUHJlQ2hlY2siLCJhd2FpdFN0b3JlcyIsInN1Ym1pdCIsIlNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0UiLCJDYW5jZWxVbnN0YWtlIiwidGhlbWUiLCJ0b2tlbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblhTIiwibWFyZ2luVG9wIiwicGFkZGluZ1NNIiwiZmxleCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdYWFMiXSwic291cmNlUm9vdCI6IiJ9