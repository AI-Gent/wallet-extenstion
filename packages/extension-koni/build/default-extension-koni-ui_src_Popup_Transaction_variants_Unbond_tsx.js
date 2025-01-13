"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Transaction_variants_Unbond_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Transaction/variants/Unbond.tsx":
/*!**********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/variants/Unbond.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/extension-base/koni/api/staking/bonding/utils */ "../extension-base/src/koni/api/staking/bonding/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "../../node_modules/bignumber.js/bignumber.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/MinusCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper */ "../extension-koni-ui/src/Popup/Transaction/helper/index.ts");
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts */ "../extension-koni-ui/src/Popup/Transaction/parts/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0





















const _accountFilterFunc = (allNominator, chainInfoMap, stakingType, stakingChain) => {
  return account => {
    const nominator = allNominator.find(item => item.address.toLowerCase() === account.address.toLowerCase());
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"]((nominator === null || nominator === void 0 ? void 0 : nominator.activeStake) || _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.BN_ZERO).gt(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.BN_ZERO) && (0,_helper__WEBPACK_IMPORTED_MODULE_9__.accountFilterFunc)(chainInfoMap, stakingType, stakingChain)(account);
  };
};
const hideFields = ['chain', 'asset', 'type'];
const validateFields = ['value'];
const Component = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)();
  const {
    defaultData,
    onDone,
    persistData
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useTransactionContext)();
  const {
    chain,
    type
  } = defaultData;
  const currentAccount = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.accountState.currentAccount);
  const chainInfoMap = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.chainStore.chainInfoMap);
  const isAll = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.isAccountAll)((currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) || '');
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].useForm();
  const [isBalanceReady, setIsBalanceReady] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);
  const [amountChange, setAmountChange] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => ({
    ...defaultData
  }), [defaultData]);
  const from = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('from', form, defaultData);
  const currentValidator = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('validator', form, defaultData);
  const {
    decimals,
    symbol
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetNativeTokenBasicInfo)(chain || '');
  const chainStakingMetadata = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetChainStakingMetadata)(chain);
  const allNominatorInfo = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetNominatorInfo)(chain, type);
  const nominatorInfo = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetNominatorInfo)(chain, type, from);
  const nominatorMetadata = nominatorInfo[0];
  const selectedValidator = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    if (nominatorMetadata) {
      return nominatorMetadata.nominations.find(item => item.validatorAddress === currentValidator);
    } else {
      return undefined;
    }
  }, [currentValidator, nominatorMetadata]);
  const mustChooseValidator = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    return (0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_14__.isActionFromValidator)(type, chain || '');
  }, [chain, type]);
  const bondedValue = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    if (!mustChooseValidator) {
      return (nominatorMetadata === null || nominatorMetadata === void 0 ? void 0 : nominatorMetadata.activeStake) || '0';
    } else {
      return (selectedValidator === null || selectedValidator === void 0 ? void 0 : selectedValidator.activeStake) || '0';
    }
  }, [mustChooseValidator, nominatorMetadata === null || nominatorMetadata === void 0 ? void 0 : nominatorMetadata.activeStake, selectedValidator === null || selectedValidator === void 0 ? void 0 : selectedValidator.activeStake]);
  const [isChangeData, setIsChangeData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const persistValidator = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    if (from === defaultData.from && !isChangeData) {
      return defaultData.validator;
    } else {
      return '';
    }
  }, [defaultData.from, defaultData.validator, from, isChangeData]);
  const minValue = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    if (type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED) {
      return (chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minJoinNominationPool) || '0';
    } else {
      const minChain = new bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"]((chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minStake) || '0');
      const minValidator = new bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"]((selectedValidator === null || selectedValidator === void 0 ? void 0 : selectedValidator.validatorMinStake) || '0');
      return minChain.gt(minValidator) ? minChain.toString() : minValidator.toString();
    }
  }, [chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minJoinNominationPool, chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minStake, selectedValidator === null || selectedValidator === void 0 ? void 0 : selectedValidator.validatorMinStake, type]);
  const unBondedTime = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    if (chainStakingMetadata) {
      const time = chainStakingMetadata.unstakingPeriod;
      if (time >= 24) {
        const days = Math.floor(time / 24);
        const hours = time - days * 24;
        return `${days} ${t('days')}${hours ? ` ${hours} ${t('hours')}` : ''}`;
      } else {
        return `${time} ${t('hours')}`;
      }
    } else {
      return t('unknown time');
    }
  }, [chainStakingMetadata, t]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);
  const {
    onError,
    onSuccess
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useHandleSubmitTransaction)(onDone);
  const onValuesChange = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((changes, values) => {
    const {
      from,
      validator,
      value
    } = changes;
    if (from) {
      setIsChangeData(true);
    }
    if ((from || validator) && (amountChange || defaultData.value)) {
      form.validateFields(['value']).finally(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
    }
    if (value !== undefined) {
      setAmountChange(true);
    }
  }, [amountChange, form, defaultData.value]);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((changedFields, allFields) => {
    // TODO: field change
    const {
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.simpleCheckForm)(allFields);
    const allMap = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.convertFieldToObject)(allFields);
    const checkEmpty = {};
    for (const [key, value] of Object.entries(allMap)) {
      checkEmpty[key] = !!value;
    }
    checkEmpty.asset = true;
    if (!mustChooseValidator) {
      checkEmpty.validator = true;
    }
    setIsDisable(error || Object.values(checkEmpty).some(value => !value));
    persistData(form.getFieldsValue());
  }, [form, mustChooseValidator, persistData]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(values => {
    const {
      validator: selectedValidator,
      value
    } = values;
    // const selectedValidator = nominatorMetadata.nominations[0].validatorAddress;

    let unbondingPromise;
    if (nominatorMetadata.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED) {
      const params = {
        amount: value,
        chain: nominatorMetadata.chain,
        nominatorMetadata
      };
      unbondingPromise = (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__.submitPoolUnbonding)(params);
    } else {
      const params = {
        amount: value,
        chain: nominatorMetadata.chain,
        nominatorMetadata
      };
      if (mustChooseValidator) {
        params.validatorAddress = selectedValidator || '';
      }
      unbondingPromise = (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__.submitUnbonding)(params);
    }
    setLoading(true);
    setTimeout(() => {
      unbondingPromise.then(onSuccess).catch(onError).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [mustChooseValidator, nominatorMetadata, onError, onSuccess]);
  const renderBounded = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_10__.BondedBalance, {
      bondedBalance: bondedValue,
      className: 'bonded-balance',
      decimals: decimals,
      symbol: symbol
    });
  }, [bondedValue, decimals, symbol]);
  const onPreCheck = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.usePreCheckAction)(from);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (amountChange) {
      form.validateFields(['value']).finally(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
    }
  }, [form, amountChange, minValue, bondedValue, decimals]);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useRestoreTransaction)(form);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useInitValidateTransaction)(validateFields, form, defaultData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_10__.TransactionContent, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('form-container', 'form-space-xxs'),
        form: form,
        initialValues: formDefault,
        name: "unstake-form",
        onFieldsChange: onFieldsChange,
        onFinish: onSubmit,
        onValuesChange: onValuesChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.HiddenInput, {
          fields: hideFields
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Item, {
          hidden: !isAll,
          name: 'from',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountSelector, {
            filter: _accountFilterFunc(allNominatorInfo, chainInfoMap, type, chain),
            label: t('Unstake from account')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_10__.FreeBalance, {
          address: from,
          chain: chain,
          className: 'free-balance',
          label: t('Available balance:'),
          onBalanceReady: setIsBalanceReady
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Item, {
          hidden: !mustChooseValidator,
          name: 'validator',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.NominationSelector, {
            chain: chain,
            defaultValue: persistValidator,
            disabled: !from,
            label: t(`Select ${(0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_14__.getValidatorLabel)(chain)}`),
            nominators: from ? (nominatorMetadata === null || nominatorMetadata === void 0 ? void 0 : nominatorMetadata.nominations) || [] : []
          })
        }), mustChooseValidator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
          children: renderBounded()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Item, {
          name: 'value',
          rules: [{
            required: true,
            message: t('Amount is required')
          }, (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.validateUnStakeValue)(minValue, bondedValue, decimals, t)],
          statusHelpAsTooltip: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AmountInput, {
            decimals: decimals,
            maxValue: bondedValue,
            showMaxButton: true
          })
        }), !mustChooseValidator && renderBounded(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('text-light-4', {
            mt: mustChooseValidator
          }),
          children: t('Once unbonded, your funds would be available for withdrawal after {{time}}.', {
            replace: {
              time: unBondedTime
            }
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_10__.TransactionFooter, {
      errors: [],
      warnings: [],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
        disabled: isDisable || !isBalanceReady,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
          weight: 'fill'
        }),
        loading: loading,
        onClick: onPreCheck(form.submit, type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_LEAVE_POOL : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_UNBOND),
        children: t('Unbond')
      })
    })]
  });
};
const Wrapper = props => {
  const {
    className
  } = props;
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetCurrentPage)('/transaction/unstake');
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, 'page-wrapper'),
    resolve: dataContext.awaitStores(['staking']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Component, {})
  });
};
const Unbond = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__["default"])(Wrapper).withConfig({
  displayName: "Unbond",
  componentId: "sc-1wm67x9-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '&.page-wrapper': {
      display: 'flex',
      flexDirection: 'column'
    },
    '.bonded-balance, .free-balance': {
      marginBottom: token.margin
    },
    '.meta-info': {
      marginTop: token.paddingSM
    },
    '.mt': {
      marginTop: token.marginSM
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unbond);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/MinusCircle.esm.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/MinusCircle.esm.js ***!
  \***********************************************************************/
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
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z"
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

var MinusCircle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
MinusCircle.displayName = "MinusCircle";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinusCircle);
//# sourceMappingURL=MinusCircle.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfVHJhbnNhY3Rpb25fdmFyaWFudHNfVW5ib25kX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR3FMO0FBRWpFO0FBRWlCO0FBQ3BFO0FBQ2U7QUFDK047QUFDak47QUFFdUM7QUFDNUU7QUFDekI7QUFDSjtBQUNpQjtBQUN3QztBQUN0QztBQUNSO0FBRU87QUFDK0M7QUFBQTtBQUFBO0FBQUE7QUFJN0YsTUFBTWdELGtCQUFrQixHQUFHLENBQ3pCQyxZQUFpQyxFQUNqQ0MsWUFBd0MsRUFDeENDLFdBQXdCLEVBQ3hCQyxZQUFxQixLQUNpQjtFQUN0QyxPQUFRQyxPQUFvQixJQUFjO0lBQ3hDLE1BQU1DLFNBQVMsR0FBR0wsWUFBWSxDQUFDTSxJQUFJLENBQUVDLElBQUksSUFBS0EsSUFBSSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsRUFBRSxLQUFLTCxPQUFPLENBQUNJLE9BQU8sQ0FBQ0MsV0FBVyxFQUFFLENBQUM7SUFFM0csT0FBTyxJQUFJMUIsb0RBQUksQ0FBQyxDQUFBc0IsU0FBUyxhQUFUQSxTQUFTLHVCQUFUQSxTQUFTLENBQUVLLFdBQVcsS0FBSWxELDJFQUFPLENBQUMsQ0FBQ21ELEVBQUUsQ0FBQ25ELDJFQUFPLENBQUMsSUFBSWtDLDBEQUFpQixDQUFDTyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQztFQUN2SSxDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU1RLFVBQXNDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztBQUN6RSxNQUFNQyxjQUEwQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRTVELE1BQU1DLFNBQW1CLEdBQUcsTUFBTTtFQUNoQyxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHdkIsOERBQWMsRUFBRTtFQUU5QixNQUFNO0lBQUV3QixX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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLFNBQVMsc0VBQW1CO0FBQzVCOztBQUVBLCtCQUErQixpREFBVTtBQUN6QyxTQUFTLDBEQUFtQixDQUFDLDREQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9UcmFuc2FjdGlvbi92YXJpYW50cy9VbmJvbmQudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXJlYWN0L2Rpc3QvaWNvbnMvTWludXNDaXJjbGUuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBfQ2hhaW5JbmZvIH0gZnJvbSAnQHN1YndhbGxldC9jaGFpbi1saXN0L3R5cGVzJztcbmltcG9ydCB7IEV4dHJpbnNpY1R5cGUsIE5vbWluYXRpb25JbmZvLCBOb21pbmF0b3JNZXRhZGF0YSwgUmVxdWVzdFN0YWtlUG9vbGluZ1VuYm9uZGluZywgUmVxdWVzdFVuYm9uZGluZ1N1Ym1pdCwgU3Rha2luZ1R5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IEFjY291bnRKc29uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL3R5cGVzJztcbmltcG9ydCB7IGdldFZhbGlkYXRvckxhYmVsLCBpc0FjdGlvbkZyb21WYWxpZGF0b3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2tvbmkvYXBpL3N0YWtpbmcvYm9uZGluZy91dGlscyc7XG5pbXBvcnQgeyBTV1RyYW5zYWN0aW9uUmVzcG9uc2UgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UvdHlwZXMnO1xuaW1wb3J0IHsgQWNjb3VudFNlbGVjdG9yLCBBbW91bnRJbnB1dCwgSGlkZGVuSW5wdXQsIE5vbWluYXRpb25TZWxlY3RvciwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQk5fWkVSTyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VHZXRDaGFpblN0YWtpbmdNZXRhZGF0YSwgdXNlR2V0TmF0aXZlVG9rZW5CYXNpY0luZm8sIHVzZUdldE5vbWluYXRvckluZm8sIHVzZUhhbmRsZVN1Ym1pdFRyYW5zYWN0aW9uLCB1c2VJbml0VmFsaWRhdGVUcmFuc2FjdGlvbiwgdXNlUHJlQ2hlY2tBY3Rpb24sIHVzZVJlc3RvcmVUcmFuc2FjdGlvbiwgdXNlU2VsZWN0b3IsIHVzZVNldEN1cnJlbnRQYWdlLCB1c2VUcmFuc2FjdGlvbkNvbnRleHQsIHVzZVdhdGNoVHJhbnNhY3Rpb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB7IHN1Ym1pdFBvb2xVbmJvbmRpbmcsIHN1Ym1pdFVuYm9uZGluZyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IEZvcm1DYWxsYmFja3MsIEZvcm1GaWVsZERhdGEsIFRoZW1lUHJvcHMsIFVuU3Rha2VQYXJhbXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IGNvbnZlcnRGaWVsZFRvT2JqZWN0LCBpc0FjY291bnRBbGwsIG5vb3AsIHNpbXBsZUNoZWNrRm9ybSwgdmFsaWRhdGVVblN0YWtlVmFsdWUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSWNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IEJpZ04gZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IE1pbnVzQ2lyY2xlIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBhY2NvdW50RmlsdGVyRnVuYyB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBCb25kZWRCYWxhbmNlLCBGcmVlQmFsYW5jZSwgVHJhbnNhY3Rpb25Db250ZW50LCBUcmFuc2FjdGlvbkZvb3RlciB9IGZyb20gJy4uL3BhcnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHM7XG5cbmNvbnN0IF9hY2NvdW50RmlsdGVyRnVuYyA9IChcbiAgYWxsTm9taW5hdG9yOiBOb21pbmF0b3JNZXRhZGF0YVtdLFxuICBjaGFpbkluZm9NYXA6IFJlY29yZDxzdHJpbmcsIF9DaGFpbkluZm8+LFxuICBzdGFraW5nVHlwZTogU3Rha2luZ1R5cGUsXG4gIHN0YWtpbmdDaGFpbj86IHN0cmluZ1xuKTogKGFjY291bnQ6IEFjY291bnRKc29uKSA9PiBib29sZWFuID0+IHtcbiAgcmV0dXJuIChhY2NvdW50OiBBY2NvdW50SnNvbik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IG5vbWluYXRvciA9IGFsbE5vbWluYXRvci5maW5kKChpdGVtKSA9PiBpdGVtLmFkZHJlc3MudG9Mb3dlckNhc2UoKSA9PT0gYWNjb3VudC5hZGRyZXNzLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgcmV0dXJuIG5ldyBCaWdOKG5vbWluYXRvcj8uYWN0aXZlU3Rha2UgfHwgQk5fWkVSTykuZ3QoQk5fWkVSTykgJiYgYWNjb3VudEZpbHRlckZ1bmMoY2hhaW5JbmZvTWFwLCBzdGFraW5nVHlwZSwgc3Rha2luZ0NoYWluKShhY2NvdW50KTtcbiAgfTtcbn07XG5cbmNvbnN0IGhpZGVGaWVsZHM6IEFycmF5PGtleW9mIFVuU3Rha2VQYXJhbXM+ID0gWydjaGFpbicsICdhc3NldCcsICd0eXBlJ107XG5jb25zdCB2YWxpZGF0ZUZpZWxkczogQXJyYXk8a2V5b2YgVW5TdGFrZVBhcmFtcz4gPSBbJ3ZhbHVlJ107XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCB7IGRlZmF1bHREYXRhLCBvbkRvbmUsIHBlcnNpc3REYXRhIH0gPSB1c2VUcmFuc2FjdGlvbkNvbnRleHQ8VW5TdGFrZVBhcmFtcz4oKTtcbiAgY29uc3QgeyBjaGFpbiwgdHlwZSB9ID0gZGVmYXVsdERhdGE7XG5cbiAgY29uc3QgY3VycmVudEFjY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZS5jdXJyZW50QWNjb3VudCk7XG4gIGNvbnN0IGNoYWluSW5mb01hcCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2hhaW5TdG9yZS5jaGFpbkluZm9NYXApO1xuICBjb25zdCBpc0FsbCA9IGlzQWNjb3VudEFsbChjdXJyZW50QWNjb3VudD8uYWRkcmVzcyB8fCAnJyk7XG5cbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtPFVuU3Rha2VQYXJhbXM+KCk7XG4gIGNvbnN0IFtpc0JhbGFuY2VSZWFkeSwgc2V0SXNCYWxhbmNlUmVhZHldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFthbW91bnRDaGFuZ2UsIHNldEFtb3VudENoYW5nZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZm9ybURlZmF1bHQgPSB1c2VNZW1vKCgpOiBVblN0YWtlUGFyYW1zID0+ICh7XG4gICAgLi4uZGVmYXVsdERhdGFcbiAgfSksIFtkZWZhdWx0RGF0YV0pO1xuXG4gIGNvbnN0IGZyb20gPSB1c2VXYXRjaFRyYW5zYWN0aW9uKCdmcm9tJywgZm9ybSwgZGVmYXVsdERhdGEpO1xuICBjb25zdCBjdXJyZW50VmFsaWRhdG9yID0gdXNlV2F0Y2hUcmFuc2FjdGlvbigndmFsaWRhdG9yJywgZm9ybSwgZGVmYXVsdERhdGEpO1xuXG4gIGNvbnN0IHsgZGVjaW1hbHMsIHN5bWJvbCB9ID0gdXNlR2V0TmF0aXZlVG9rZW5CYXNpY0luZm8oY2hhaW4gfHwgJycpO1xuICBjb25zdCBjaGFpblN0YWtpbmdNZXRhZGF0YSA9IHVzZUdldENoYWluU3Rha2luZ01ldGFkYXRhKGNoYWluKTtcbiAgY29uc3QgYWxsTm9taW5hdG9ySW5mbyA9IHVzZUdldE5vbWluYXRvckluZm8oY2hhaW4sIHR5cGUpO1xuICBjb25zdCBub21pbmF0b3JJbmZvID0gdXNlR2V0Tm9taW5hdG9ySW5mbyhjaGFpbiwgdHlwZSwgZnJvbSk7XG4gIGNvbnN0IG5vbWluYXRvck1ldGFkYXRhID0gbm9taW5hdG9ySW5mb1swXTtcblxuICBjb25zdCBzZWxlY3RlZFZhbGlkYXRvciA9IHVzZU1lbW8oKCk6IE5vbWluYXRpb25JbmZvIHwgdW5kZWZpbmVkID0+IHtcbiAgICBpZiAobm9taW5hdG9yTWV0YWRhdGEpIHtcbiAgICAgIHJldHVybiBub21pbmF0b3JNZXRhZGF0YS5ub21pbmF0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbGlkYXRvckFkZHJlc3MgPT09IGN1cnJlbnRWYWxpZGF0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRWYWxpZGF0b3IsIG5vbWluYXRvck1ldGFkYXRhXSk7XG5cbiAgY29uc3QgbXVzdENob29zZVZhbGlkYXRvciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBpc0FjdGlvbkZyb21WYWxpZGF0b3IodHlwZSwgY2hhaW4gfHwgJycpO1xuICB9LCBbY2hhaW4sIHR5cGVdKTtcblxuICBjb25zdCBib25kZWRWYWx1ZSA9IHVzZU1lbW8oKCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFtdXN0Q2hvb3NlVmFsaWRhdG9yKSB7XG4gICAgICByZXR1cm4gbm9taW5hdG9yTWV0YWRhdGE/LmFjdGl2ZVN0YWtlIHx8ICcwJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkVmFsaWRhdG9yPy5hY3RpdmVTdGFrZSB8fCAnMCc7XG4gICAgfVxuICB9LCBbbXVzdENob29zZVZhbGlkYXRvciwgbm9taW5hdG9yTWV0YWRhdGE/LmFjdGl2ZVN0YWtlLCBzZWxlY3RlZFZhbGlkYXRvcj8uYWN0aXZlU3Rha2VdKTtcblxuICBjb25zdCBbaXNDaGFuZ2VEYXRhLCBzZXRJc0NoYW5nZURhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHBlcnNpc3RWYWxpZGF0b3IgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoZnJvbSA9PT0gZGVmYXVsdERhdGEuZnJvbSAmJiAhaXNDaGFuZ2VEYXRhKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdERhdGEudmFsaWRhdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCBbZGVmYXVsdERhdGEuZnJvbSwgZGVmYXVsdERhdGEudmFsaWRhdG9yLCBmcm9tLCBpc0NoYW5nZURhdGFdKTtcblxuICBjb25zdCBtaW5WYWx1ZSA9IHVzZU1lbW8oKCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHR5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCkge1xuICAgICAgcmV0dXJuIGNoYWluU3Rha2luZ01ldGFkYXRhPy5taW5Kb2luTm9taW5hdGlvblBvb2wgfHwgJzAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtaW5DaGFpbiA9IG5ldyBCaWdOKGNoYWluU3Rha2luZ01ldGFkYXRhPy5taW5TdGFrZSB8fCAnMCcpO1xuICAgICAgY29uc3QgbWluVmFsaWRhdG9yID0gbmV3IEJpZ04oc2VsZWN0ZWRWYWxpZGF0b3I/LnZhbGlkYXRvck1pblN0YWtlIHx8ICcwJyk7XG5cbiAgICAgIHJldHVybiBtaW5DaGFpbi5ndChtaW5WYWxpZGF0b3IpID8gbWluQ2hhaW4udG9TdHJpbmcoKSA6IG1pblZhbGlkYXRvci50b1N0cmluZygpO1xuICAgIH1cbiAgfSwgW2NoYWluU3Rha2luZ01ldGFkYXRhPy5taW5Kb2luTm9taW5hdGlvblBvb2wsIGNoYWluU3Rha2luZ01ldGFkYXRhPy5taW5TdGFrZSwgc2VsZWN0ZWRWYWxpZGF0b3I/LnZhbGlkYXRvck1pblN0YWtlLCB0eXBlXSk7XG5cbiAgY29uc3QgdW5Cb25kZWRUaW1lID0gdXNlTWVtbygoKTogc3RyaW5nID0+IHtcbiAgICBpZiAoY2hhaW5TdGFraW5nTWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IHRpbWUgPSBjaGFpblN0YWtpbmdNZXRhZGF0YS51bnN0YWtpbmdQZXJpb2Q7XG5cbiAgICAgIGlmICh0aW1lID49IDI0KSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRpbWUgLyAyNCk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gdGltZSAtIGRheXMgKiAyNDtcblxuICAgICAgICByZXR1cm4gYCR7ZGF5c30gJHt0KCdkYXlzJyl9JHtob3VycyA/IGAgJHtob3Vyc30gJHt0KCdob3VycycpfWAgOiAnJ31gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke3RpbWV9ICR7dCgnaG91cnMnKX1gO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdCgndW5rbm93biB0aW1lJyk7XG4gICAgfVxuICB9LCBbY2hhaW5TdGFraW5nTWV0YWRhdGEsIHRdKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Rpc2FibGUsIHNldElzRGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBvbkVycm9yLCBvblN1Y2Nlc3MgfSA9IHVzZUhhbmRsZVN1Ym1pdFRyYW5zYWN0aW9uKG9uRG9uZSk7XG5cbiAgY29uc3Qgb25WYWx1ZXNDaGFuZ2U6IEZvcm1DYWxsYmFja3M8VW5TdGFrZVBhcmFtcz5bJ29uVmFsdWVzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlczogUGFydGlhbDxVblN0YWtlUGFyYW1zPiwgdmFsdWVzOiBVblN0YWtlUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBmcm9tLCB2YWxpZGF0b3IsIHZhbHVlIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKGZyb20pIHtcbiAgICAgIHNldElzQ2hhbmdlRGF0YSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoKGZyb20gfHwgdmFsaWRhdG9yKSAmJiAoYW1vdW50Q2hhbmdlIHx8IGRlZmF1bHREYXRhLnZhbHVlKSkge1xuICAgICAgZm9ybS52YWxpZGF0ZUZpZWxkcyhbJ3ZhbHVlJ10pLmZpbmFsbHkobm9vcCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEFtb3VudENoYW5nZSh0cnVlKTtcbiAgICB9XG4gIH0sIFthbW91bnRDaGFuZ2UsIGZvcm0sIGRlZmF1bHREYXRhLnZhbHVlXSk7XG5cbiAgY29uc3Qgb25GaWVsZHNDaGFuZ2U6IEZvcm1DYWxsYmFja3M8VW5TdGFrZVBhcmFtcz5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSkgPT4ge1xuICAgIC8vIFRPRE86IGZpZWxkIGNoYW5nZVxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IHNpbXBsZUNoZWNrRm9ybShhbGxGaWVsZHMpO1xuXG4gICAgY29uc3QgYWxsTWFwID0gY29udmVydEZpZWxkVG9PYmplY3Q8VW5TdGFrZVBhcmFtcz4oYWxsRmllbGRzKTtcblxuICAgIGNvbnN0IGNoZWNrRW1wdHk6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhbGxNYXApKSB7XG4gICAgICBjaGVja0VtcHR5W2tleV0gPSAhIXZhbHVlO1xuICAgIH1cblxuICAgIGNoZWNrRW1wdHkuYXNzZXQgPSB0cnVlO1xuXG4gICAgaWYgKCFtdXN0Q2hvb3NlVmFsaWRhdG9yKSB7XG4gICAgICBjaGVja0VtcHR5LnZhbGlkYXRvciA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0SXNEaXNhYmxlKGVycm9yIHx8IE9iamVjdC52YWx1ZXMoY2hlY2tFbXB0eSkuc29tZSgodmFsdWUpID0+ICF2YWx1ZSkpO1xuICAgIHBlcnNpc3REYXRhKGZvcm0uZ2V0RmllbGRzVmFsdWUoKSk7XG4gIH0sIFtmb3JtLCBtdXN0Q2hvb3NlVmFsaWRhdG9yLCBwZXJzaXN0RGF0YV0pO1xuXG4gIGNvbnN0IG9uU3VibWl0OiBGb3JtQ2FsbGJhY2tzPFVuU3Rha2VQYXJhbXM+WydvbkZpbmlzaCddID0gdXNlQ2FsbGJhY2soKHZhbHVlczogVW5TdGFrZVBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdG9yOiBzZWxlY3RlZFZhbGlkYXRvciwgdmFsdWUgfSA9IHZhbHVlcztcbiAgICAvLyBjb25zdCBzZWxlY3RlZFZhbGlkYXRvciA9IG5vbWluYXRvck1ldGFkYXRhLm5vbWluYXRpb25zWzBdLnZhbGlkYXRvckFkZHJlc3M7XG5cbiAgICBsZXQgdW5ib25kaW5nUHJvbWlzZTogUHJvbWlzZTxTV1RyYW5zYWN0aW9uUmVzcG9uc2U+O1xuXG4gICAgaWYgKG5vbWluYXRvck1ldGFkYXRhLnR5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCkge1xuICAgICAgY29uc3QgcGFyYW1zOiBSZXF1ZXN0U3Rha2VQb29saW5nVW5ib25kaW5nID0ge1xuICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICBjaGFpbjogbm9taW5hdG9yTWV0YWRhdGEuY2hhaW4sXG4gICAgICAgIG5vbWluYXRvck1ldGFkYXRhXG4gICAgICB9O1xuXG4gICAgICB1bmJvbmRpbmdQcm9taXNlID0gc3VibWl0UG9vbFVuYm9uZGluZyhwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJhbXM6IFJlcXVlc3RVbmJvbmRpbmdTdWJtaXQgPSB7XG4gICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgIGNoYWluOiBub21pbmF0b3JNZXRhZGF0YS5jaGFpbixcbiAgICAgICAgbm9taW5hdG9yTWV0YWRhdGFcbiAgICAgIH07XG5cbiAgICAgIGlmIChtdXN0Q2hvb3NlVmFsaWRhdG9yKSB7XG4gICAgICAgIHBhcmFtcy52YWxpZGF0b3JBZGRyZXNzID0gc2VsZWN0ZWRWYWxpZGF0b3IgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHVuYm9uZGluZ1Byb21pc2UgPSBzdWJtaXRVbmJvbmRpbmcocGFyYW1zKTtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1bmJvbmRpbmdQcm9taXNlXG4gICAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMzAwKTtcbiAgfSwgW211c3RDaG9vc2VWYWxpZGF0b3IsIG5vbWluYXRvck1ldGFkYXRhLCBvbkVycm9yLCBvblN1Y2Nlc3NdKTtcblxuICBjb25zdCByZW5kZXJCb3VuZGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm9uZGVkQmFsYW5jZVxuICAgICAgICBib25kZWRCYWxhbmNlPXtib25kZWRWYWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXsnYm9uZGVkLWJhbGFuY2UnfVxuICAgICAgICBkZWNpbWFscz17ZGVjaW1hbHN9XG4gICAgICAgIHN5bWJvbD17c3ltYm9sfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbYm9uZGVkVmFsdWUsIGRlY2ltYWxzLCBzeW1ib2xdKTtcblxuICBjb25zdCBvblByZUNoZWNrID0gdXNlUHJlQ2hlY2tBY3Rpb24oZnJvbSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYW1vdW50Q2hhbmdlKSB7XG4gICAgICBmb3JtLnZhbGlkYXRlRmllbGRzKFsndmFsdWUnXSkuZmluYWxseShub29wKTtcbiAgICB9XG4gIH0sIFtmb3JtLCBhbW91bnRDaGFuZ2UsIG1pblZhbHVlLCBib25kZWRWYWx1ZSwgZGVjaW1hbHNdKTtcblxuICB1c2VSZXN0b3JlVHJhbnNhY3Rpb24oZm9ybSk7XG4gIHVzZUluaXRWYWxpZGF0ZVRyYW5zYWN0aW9uKHZhbGlkYXRlRmllbGRzLCBmb3JtLCBkZWZhdWx0RGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRyYW5zYWN0aW9uQ29udGVudD5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9e0NOKCdmb3JtLWNvbnRhaW5lcicsICdmb3JtLXNwYWNlLXh4cycpfVxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17Zm9ybURlZmF1bHR9XG4gICAgICAgICAgbmFtZT0ndW5zdGFrZS1mb3JtJ1xuICAgICAgICAgIG9uRmllbGRzQ2hhbmdlPXtvbkZpZWxkc0NoYW5nZX1cbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e29uVmFsdWVzQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPEhpZGRlbklucHV0IGZpZWxkcz17aGlkZUZpZWxkc30gLz5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBoaWRkZW49eyFpc0FsbH1cbiAgICAgICAgICAgIG5hbWU9eydmcm9tJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgIGZpbHRlcj17X2FjY291bnRGaWx0ZXJGdW5jKGFsbE5vbWluYXRvckluZm8sIGNoYWluSW5mb01hcCwgdHlwZSwgY2hhaW4pfVxuICAgICAgICAgICAgICBsYWJlbD17dCgnVW5zdGFrZSBmcm9tIGFjY291bnQnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZyZWVCYWxhbmNlXG4gICAgICAgICAgICBhZGRyZXNzPXtmcm9tfVxuICAgICAgICAgICAgY2hhaW49e2NoYWlufVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnZnJlZS1iYWxhbmNlJ31cbiAgICAgICAgICAgIGxhYmVsPXt0KCdBdmFpbGFibGUgYmFsYW5jZTonKX1cbiAgICAgICAgICAgIG9uQmFsYW5jZVJlYWR5PXtzZXRJc0JhbGFuY2VSZWFkeX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgaGlkZGVuPXshbXVzdENob29zZVZhbGlkYXRvcn1cbiAgICAgICAgICAgIG5hbWU9eyd2YWxpZGF0b3InfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOb21pbmF0aW9uU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhaW49e2NoYWlufVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BlcnNpc3RWYWxpZGF0b3J9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZnJvbX1cbiAgICAgICAgICAgICAgbGFiZWw9e3QoYFNlbGVjdCAke2dldFZhbGlkYXRvckxhYmVsKGNoYWluKX1gKX1cbiAgICAgICAgICAgICAgbm9taW5hdG9ycz17IGZyb20gPyBub21pbmF0b3JNZXRhZGF0YT8ubm9taW5hdGlvbnMgfHwgW10gOiBbXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtdXN0Q2hvb3NlVmFsaWRhdG9yICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7cmVuZGVyQm91bmRlZCgpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBuYW1lPXsndmFsdWUnfVxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnQW1vdW50IGlzIHJlcXVpcmVkJykgfSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVVblN0YWtlVmFsdWUobWluVmFsdWUsIGJvbmRlZFZhbHVlLCBkZWNpbWFscywgdClcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBbW91bnRJbnB1dFxuICAgICAgICAgICAgICBkZWNpbWFscz17ZGVjaW1hbHN9XG4gICAgICAgICAgICAgIG1heFZhbHVlPXtib25kZWRWYWx1ZX1cbiAgICAgICAgICAgICAgc2hvd01heEJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICB7IW11c3RDaG9vc2VWYWxpZGF0b3IgJiYgcmVuZGVyQm91bmRlZCgpfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NOKCd0ZXh0LWxpZ2h0LTQnLCB7IG10OiBtdXN0Q2hvb3NlVmFsaWRhdG9yIH0pfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdChcbiAgICAgICAgICAgICAgICAnT25jZSB1bmJvbmRlZCwgeW91ciBmdW5kcyB3b3VsZCBiZSBhdmFpbGFibGUgZm9yIHdpdGhkcmF3YWwgYWZ0ZXIge3t0aW1lfX0uJyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXBsYWNlOlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHVuQm9uZGVkVGltZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9UcmFuc2FjdGlvbkNvbnRlbnQ+XG4gICAgICA8VHJhbnNhY3Rpb25Gb290ZXJcbiAgICAgICAgZXJyb3JzPXtbXX1cbiAgICAgICAgd2FybmluZ3M9e1tdfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZSB8fCAhaXNCYWxhbmNlUmVhZHl9XG4gICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtNaW51c0NpcmNsZX1cbiAgICAgICAgICAgICAgd2VpZ2h0PXsnZmlsbCd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICBvbkNsaWNrPXtvblByZUNoZWNrKGZvcm0uc3VibWl0LCB0eXBlID09PSBTdGFraW5nVHlwZS5QT09MRUQgPyBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfTEVBVkVfUE9PTCA6IEV4dHJpbnNpY1R5cGUuU1RBS0lOR19VTkJPTkQpfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ1VuYm9uZCcpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvVHJhbnNhY3Rpb25Gb290ZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBXcmFwcGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICB1c2VTZXRDdXJyZW50UGFnZSgnL3RyYW5zYWN0aW9uL3Vuc3Rha2UnKTtcblxuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSwgJ3BhZ2Utd3JhcHBlcicpfVxuICAgICAgcmVzb2x2ZT17ZGF0YUNvbnRleHQuYXdhaXRTdG9yZXMoWydzdGFraW5nJ10pfVxuICAgID5cbiAgICAgIDxDb21wb25lbnQgLz5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgVW5ib25kID0gc3R5bGVkKFdyYXBwZXIpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJyYucGFnZS13cmFwcGVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgJy5ib25kZWQtYmFsYW5jZSwgLmZyZWUtYmFsYW5jZSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luXG4gICAgfSxcblxuICAgICcubWV0YS1pbmZvJzoge1xuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5wYWRkaW5nU01cbiAgICB9LFxuXG4gICAgJy5tdCc6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luU01cbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVW5ib25kO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJQYXRoRm9yV2VpZ2h0IH0gZnJvbSAnLi4vbGliL2luZGV4LmVzbS5qcyc7XG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vbGliL0ljb25CYXNlLmVzbS5qcyc7XG5cbi8qIEdFTkVSQVRFRCBGSUxFICovXG52YXIgcGF0aHNCeVdlaWdodCA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImJvbGRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImR1b3RvbmVcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgb3BhY2l0eTogXCIwLjJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZmlsbFwiLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMiwxMDQuMiwwLDAsMCwxMjgsMjRabTQwLDExMkg4OGE4LDgsMCwwLDEsMC0xNmg4MGE4LDgsMCwwLDEsMCwxNlpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInRoaW5cIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJyZWd1bGFyXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSk7XG59KTtcblxudmFyIHJlbmRlclBhdGggPSBmdW5jdGlvbiByZW5kZXJQYXRoKHdlaWdodCwgY29sb3IpIHtcbiAgcmV0dXJuIHJlbmRlclBhdGhGb3JXZWlnaHQod2VpZ2h0LCBjb2xvciwgcGF0aHNCeVdlaWdodCk7XG59O1xuXG52YXIgTWludXNDaXJjbGUgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuTWludXNDaXJjbGUuZGlzcGxheU5hbWUgPSBcIk1pbnVzQ2lyY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE1pbnVzQ2lyY2xlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWludXNDaXJjbGUuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbIkV4dHJpbnNpY1R5cGUiLCJTdGFraW5nVHlwZSIsImdldFZhbGlkYXRvckxhYmVsIiwiaXNBY3Rpb25Gcm9tVmFsaWRhdG9yIiwiQWNjb3VudFNlbGVjdG9yIiwiQW1vdW50SW5wdXQiLCJIaWRkZW5JbnB1dCIsIk5vbWluYXRpb25TZWxlY3RvciIsIlBhZ2VXcmFwcGVyIiwiQk5fWkVSTyIsIkRhdGFDb250ZXh0IiwidXNlR2V0Q2hhaW5TdGFraW5nTWV0YWRhdGEiLCJ1c2VHZXROYXRpdmVUb2tlbkJhc2ljSW5mbyIsInVzZUdldE5vbWluYXRvckluZm8iLCJ1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiIsInVzZUluaXRWYWxpZGF0ZVRyYW5zYWN0aW9uIiwidXNlUHJlQ2hlY2tBY3Rpb24iLCJ1c2VSZXN0b3JlVHJhbnNhY3Rpb24iLCJ1c2VTZWxlY3RvciIsInVzZVNldEN1cnJlbnRQYWdlIiwidXNlVHJhbnNhY3Rpb25Db250ZXh0IiwidXNlV2F0Y2hUcmFuc2FjdGlvbiIsInN1Ym1pdFBvb2xVbmJvbmRpbmciLCJzdWJtaXRVbmJvbmRpbmciLCJjb252ZXJ0RmllbGRUb09iamVjdCIsImlzQWNjb3VudEFsbCIsIm5vb3AiLCJzaW1wbGVDaGVja0Zvcm0iLCJ2YWxpZGF0ZVVuU3Rha2VWYWx1ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJY29uIiwiQmlnTiIsIkNOIiwiTWludXNDaXJjbGUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwic3R5bGVkIiwiYWNjb3VudEZpbHRlckZ1bmMiLCJCb25kZWRCYWxhbmNlIiwiRnJlZUJhbGFuY2UiLCJUcmFuc2FjdGlvbkNvbnRlbnQiLCJUcmFuc2FjdGlvbkZvb3RlciIsIl9hY2NvdW50RmlsdGVyRnVuYyIsImFsbE5vbWluYXRvciIsImNoYWluSW5mb01hcCIsInN0YWtpbmdUeXBlIiwic3Rha2luZ0NoYWluIiwiYWNjb3VudCIsIm5vbWluYXRvciIsImZpbmQiLCJpdGVtIiwiYWRkcmVzcyIsInRvTG93ZXJDYXNlIiwiYWN0aXZlU3Rha2UiLCJndCIsImhpZGVGaWVsZHMiLCJ2YWxpZGF0ZUZpZWxkcyIsIkNvbXBvbmVudCIsInQiLCJkZWZhdWx0RGF0YSIsIm9uRG9uZSIsInBlcnNpc3REYXRhIiwiY2hhaW4iLCJ0eXBlIiwiY3VycmVudEFjY291bnQiLCJzdGF0ZSIsImFjY291bnRTdGF0ZSIsImNoYWluU3RvcmUiLCJpc0FsbCIsImZvcm0iLCJ1c2VGb3JtIiwiaXNCYWxhbmNlUmVhZHkiLCJzZXRJc0JhbGFuY2VSZWFkeSIsImFtb3VudENoYW5nZSIsInNldEFtb3VudENoYW5nZSIsImZvcm1EZWZhdWx0IiwiZnJvbSIsImN1cnJlbnRWYWxpZGF0b3IiLCJkZWNpbWFscyIsInN5bWJvbCIsImNoYWluU3Rha2luZ01ldGFkYXRhIiwiYWxsTm9taW5hdG9ySW5mbyIsIm5vbWluYXRvckluZm8iLCJub21pbmF0b3JNZXRhZGF0YSIsInNlbGVjdGVkVmFsaWRhdG9yIiwibm9taW5hdGlvbnMiLCJ2YWxpZGF0b3JBZGRyZXNzIiwidW5kZWZpbmVkIiwibXVzdENob29zZVZhbGlkYXRvciIsImJvbmRlZFZhbHVlIiwiaXNDaGFuZ2VEYXRhIiwic2V0SXNDaGFuZ2VEYXRhIiwicGVyc2lzdFZhbGlkYXRvciIsInZhbGlkYXRvciIsIm1pblZhbHVlIiwiUE9PTEVEIiwibWluSm9pbk5vbWluYXRpb25Qb29sIiwibWluQ2hhaW4iLCJtaW5TdGFrZSIsIm1pblZhbGlkYXRvciIsInZhbGlkYXRvck1pblN0YWtlIiwidG9TdHJpbmciLCJ1bkJvbmRlZFRpbWUiLCJ0aW1lIiwidW5zdGFraW5nUGVyaW9kIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0Rpc2FibGUiLCJzZXRJc0Rpc2FibGUiLCJvbkVycm9yIiwib25TdWNjZXNzIiwib25WYWx1ZXNDaGFuZ2UiLCJjaGFuZ2VzIiwidmFsdWVzIiwidmFsdWUiLCJmaW5hbGx5Iiwib25GaWVsZHNDaGFuZ2UiLCJjaGFuZ2VkRmllbGRzIiwiYWxsRmllbGRzIiwiZXJyb3IiLCJhbGxNYXAiLCJjaGVja0VtcHR5Iiwia2V5IiwiT2JqZWN0IiwiZW50cmllcyIsImFzc2V0Iiwic29tZSIsImdldEZpZWxkc1ZhbHVlIiwib25TdWJtaXQiLCJ1bmJvbmRpbmdQcm9taXNlIiwicGFyYW1zIiwiYW1vdW50Iiwic2V0VGltZW91dCIsInRoZW4iLCJjYXRjaCIsInJlbmRlckJvdW5kZWQiLCJvblByZUNoZWNrIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibXQiLCJyZXBsYWNlIiwic3VibWl0IiwiU1RBS0lOR19MRUFWRV9QT09MIiwiU1RBS0lOR19VTkJPTkQiLCJXcmFwcGVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJkYXRhQ29udGV4dCIsImF3YWl0U3RvcmVzIiwiVW5ib25kIiwidGhlbWUiLCJ0b2tlbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwibWFyZ2luVG9wIiwicGFkZGluZ1NNIiwibWFyZ2luU00iXSwic291cmNlUm9vdCI6IiJ9