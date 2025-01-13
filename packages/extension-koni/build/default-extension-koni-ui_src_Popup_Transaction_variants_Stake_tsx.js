"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Transaction_variants_Stake_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Transaction/variants/Stake.tsx":
/*!*********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/variants/Stake.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/constants */ "../extension-base/src/services/chain-service/constants.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useFetchChainAssetInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useFetchChainAssetInfo */ "../extension-koni-ui/src/hooks/screen/common/useFetchChainAssetInfo.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/divider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "../../node_modules/bignumber.js/bignumber.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlusCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/consts.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/bn.js/lib/bn.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_polkadot_util__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper */ "../extension-koni-ui/src/Popup/Transaction/helper/index.ts");
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parts */ "../extension-koni-ui/src/Popup/Transaction/parts/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


























const hiddenFields = ['chain', 'defaultChain', 'defaultType'];
const validateFields = ['value'];
const Component = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
  const {
    defaultData,
    onDone,
    persistData,
    setDisabledRightBtn,
    setShowRightBtn
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useTransactionContext)();
  const {
    defaultChain: stakingChain,
    defaultType: _stakingType
  } = defaultData;
  const currentAccount = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.accountState.currentAccount);
  const isEthAdr = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_14__.isEthereumAddress)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address);
  const defaultPoolTokenList = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetSupportedStakingTokens)(_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED, (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) || '', stakingChain);
  const disablePool = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    if (isEthAdr) {
      return true;
    } else {
      if (currentAccount !== null && currentAccount !== void 0 && currentAccount.address) {
        return !defaultPoolTokenList.length;
      } else {
        return false;
      }
    }
  }, [currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, defaultPoolTokenList.length, isEthAdr]);
  const defaultStakingType = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    if (disablePool) {
      return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED;
    }
    if (defaultData.type) {
      return defaultData.type;
    }
    switch (_stakingType) {
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED:
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED;
      case _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED:
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED;
      default:
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED;
    }
  }, [_stakingType, disablePool, defaultData.type]);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].useForm();
  const from = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('from', form, defaultData);
  const chain = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('chain', form, defaultData);
  const asset = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('asset', form, defaultData);
  const stakingType = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('type', form, defaultData);
  const nominate = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useWatchTransaction)('nominate', form, defaultData);

  // TODO: should do better to get validators info
  const {
    nominationPoolInfoMap,
    validatorInfoMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.bonding);
  const chainInfoMap = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.chainStore.chainInfoMap);
  const chainState = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useFetchChainState)(chain);
  const assetInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useFetchChainAssetInfo__WEBPACK_IMPORTED_MODULE_4__["default"])(asset);
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(true);
  const chainStakingMetadata = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetChainStakingMetadata)(chain);
  const nominatorMetadataList = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetNominatorInfo)(chain, stakingType, from);
  const nominatorMetadata = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => nominatorMetadataList[0], [nominatorMetadataList]);
  const {
    nativeTokenBalance
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetBalance)(chain, from);
  const tokenList = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetSupportedStakingTokens)(stakingType, from, stakingChain);
  const isRelayChain = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_17__._STAKING_CHAIN_GROUP.relay.includes(chain), [chain]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const [poolLoading, setPoolLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const [validatorLoading, setValidatorLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const [isBalanceReady, setIsBalanceReady] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(true);
  const [valueChange, setValueChange] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const [, update] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({});
  const [forceFetchValidator, setForceFetchValidator] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const existentialDeposit = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    if (assetInfo) {
      return assetInfo.minAmount || '0';
    }
    return '0';
  }, [assetInfo]);
  const maxValue = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    const balance = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["default"](nativeTokenBalance.value);
    const ed = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["default"](existentialDeposit);
    if (ed.gte(balance)) {
      return '0';
    } else {
      return balance.minus(ed).toString();
    }
  }, [existentialDeposit, nativeTokenBalance.value]);
  const {
    decimals,
    symbol
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetNativeTokenBasicInfo)(chain);
  const isAllAccount = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.isAccountAll)((currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) || '');
  const defaultSlug = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetNativeTokenSlug)(stakingChain || '');
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return {
      ...defaultData,
      type: defaultStakingType,
      asset: defaultData.asset || defaultSlug
    };
  }, [defaultData, defaultStakingType, defaultSlug]);
  const [isChangeData, setIsChangeData] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const getSelectedValidators = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(nominations => {
    const validatorList = validatorInfoMap[chain];
    if (!validatorList) {
      return [];
    }
    const result = [];
    validatorList.forEach(validator => {
      if (nominations.some(nomination => (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__.isSameAddress)(nomination, validator.address))) {
        // remember the format of the address
        result.push(validator);
      }
    });
    return result;
  }, [chain, validatorInfoMap]);
  const getValidatorMinStake = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(validatorInfos => {
    let minStake = _polkadot_util__WEBPACK_IMPORTED_MODULE_19__.BN_ZERO;
    validatorInfos.forEach(validatorInfo => {
      const bnMinBond = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_20___default())(validatorInfo === null || validatorInfo === void 0 ? void 0 : validatorInfo.minBond);
      if (bnMinBond.gt(minStake)) {
        minStake = bnMinBond;
      }
    });
    return minStake.toString();
  }, []);
  const minStake = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    if (stakingType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED) {
      const validatorInfos = getSelectedValidators((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.parseNominations)(nominate));
      const validatorMinStake = getValidatorMinStake(validatorInfos);
      const nominatedMinStake = _polkadot_util__WEBPACK_IMPORTED_MODULE_20___default().max(new (_polkadot_util__WEBPACK_IMPORTED_MODULE_20___default())(validatorMinStake), new (_polkadot_util__WEBPACK_IMPORTED_MODULE_20___default())((chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minStake) || '0'));
      return nominatedMinStake.toString();
    }
    return (chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minJoinNominationPool) || '0';
  }, [chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minJoinNominationPool, chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minStake, getSelectedValidators, getValidatorMinStake, nominate, stakingType]);
  const chainMinStake = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return stakingType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED ? (chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minStake) || '0' : (chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minJoinNominationPool) || '0';
  }, [chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minJoinNominationPool, chainStakingMetadata === null || chainStakingMetadata === void 0 ? void 0 : chainStakingMetadata.minStake, stakingType]);
  const persistValidator = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    if (chain === defaultData.chain && from === defaultData.from && !isChangeData) {
      return defaultData.nominate;
    } else {
      return '';
    }
  }, [chain, defaultData.chain, defaultData.from, defaultData.nominate, from, isChangeData]);
  const persistPool = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    if (chain === defaultData.chain && from === defaultData.from && !isChangeData) {
      return defaultData.pool;
    } else {
      return '';
    }
  }, [chain, defaultData.chain, defaultData.from, defaultData.pool, from, isChangeData]);
  const {
    onError,
    onSuccess
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useHandleSubmitTransaction)(onDone);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((changedFields, allFields) => {
    const {
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.simpleCheckForm)(allFields);
    const allMap = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.convertFieldToObject)(allFields);
    const changesMap = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.convertFieldToObject)(changedFields);
    const {
      asset,
      from,
      value
    } = changesMap;
    if (value) {
      setValueChange(true);
    }
    if (asset || from) {
      setIsChangeData(true);
    }
    if (asset) {
      const chain = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_21__._getOriginChainOfAsset)(asset);
      form.setFieldValue('chain', chain);
      form.resetFields(['nominate', 'pool']);
    }
    const checkEmpty = {};
    const {
      type: stakingType
    } = allMap;
    for (const [key, value] of Object.entries(allMap)) {
      checkEmpty[key] = !!value;
    }
    if (stakingType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED) {
      checkEmpty.pool = true;
    } else if (stakingType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED) {
      checkEmpty.nominate = true;
    }
    setIsDisable(error || Object.values(checkEmpty).some(value => !value));
    persistData(form.getFieldsValue());
  }, [form, persistData]);
  const getSelectedPool = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(poolId => {
    const nominationPoolList = nominationPoolInfoMap[chain];
    for (const pool of nominationPoolList) {
      if (String(pool.id) === poolId) {
        return pool;
      }
    }
    return undefined;
  }, [nominationPoolInfoMap, chain]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(values => {
    setLoading(true);
    const {
      chain,
      from,
      nominate,
      pool,
      type,
      value
    } = values;
    let bondingPromise;
    if (pool && type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED) {
      const selectedPool = getSelectedPool(pool);
      bondingPromise = (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.submitPoolBonding)({
        amount: value,
        chain: chain,
        nominatorMetadata: nominatorMetadata,
        selectedPool: selectedPool,
        address: from
      });
    } else {
      const selectedValidators = getSelectedValidators((0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.parseNominations)(nominate));
      bondingPromise = (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.submitBonding)({
        amount: value,
        chain: chain,
        nominatorMetadata: nominatorMetadata,
        selectedValidators,
        address: from,
        type: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED
      });
    }
    setTimeout(() => {
      bondingPromise.then(onSuccess).catch(onError).finally(() => {
        setLoading(false);
      });
    }, 300);
  }, [getSelectedPool, nominatorMetadata, getSelectedValidators, onSuccess, onError]);
  const getMetaInfo = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    if (chainStakingMetadata) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo, {
        className: 'meta-info',
        labelColorScheme: 'gray',
        spaceSize: 'xs',
        valueColorScheme: 'light',
        children: [chainStakingMetadata.expectedReturn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Number, {
          label: t('Estimated earnings:'),
          suffix: '% / year',
          value: chainStakingMetadata.expectedReturn
        }), chainStakingMetadata.minStake && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Number, {
          decimals: decimals,
          label: t('Minimum active:'),
          suffix: symbol,
          value: minStake,
          valueColorSchema: 'success'
        })]
      });
    }
    return null;
  }, [chainStakingMetadata, decimals, symbol, t, minStake]);
  const checkAction = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.usePreCheckAction)(from);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    setShowRightBtn(true);
  }, [setShowRightBtn]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    setDisabledRightBtn(!chainStakingMetadata);
  }, [chainStakingMetadata, setDisabledRightBtn]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    let unmount = false;

    // fetch validators when change chain
    // _stakingType is predefined form start
    if (!!chain && !!from && chainState !== null && chainState !== void 0 && chainState.active || forceFetchValidator) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_10__.fetchChainValidators)(chain, _stakingType || _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.ALL_KEY, unmount, setPoolLoading, setValidatorLoading, setForceFetchValidator);
    }
    return () => {
      unmount = true;
    };
  }, [from, _stakingType, chain, chainState === null || chainState === void 0 ? void 0 : chainState.active, forceFetchValidator]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    let cancel = false;
    if (valueChange) {
      if (!cancel) {
        setTimeout(() => {
          form.validateFields(['value']).finally(() => update({}));
        }, 100);
      }
    }
    return () => {
      cancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, nativeTokenBalance.value]);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useRestoreTransaction)(form);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useInitValidateTransaction)(validateFields, form, defaultData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_parts__WEBPACK_IMPORTED_MODULE_11__.TransactionContent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: 'form-container form-space-sm',
        form: form,
        initialValues: formDefault,
        onFieldsChange: onFieldsChange,
        onFinish: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.HiddenInput, {
          fields: hiddenFields
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
          className: "staking-type",
          hidden: _stakingType !== _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.ALL_KEY,
          name: 'type',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.RadioGroup, {
            optionType: "button",
            options: [{
              label: t('Pools'),
              value: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED,
              disabled: disablePool
            }, {
              label: t('Nominate'),
              value: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
          hidden: !isAllAccount,
          name: 'from',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountSelector, {
            filter: (0,_helper__WEBPACK_IMPORTED_MODULE_10__.accountFilterFunc)(chainInfoMap, stakingType, stakingChain)
          })
        }), !isAllAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
          name: 'asset',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.TokenSelector, {
            disabled: stakingChain !== _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.ALL_KEY || !from,
            items: tokenList,
            prefixShape: "circle"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_11__.FreeBalance, {
          address: from,
          chain: chain,
          className: 'account-free-balance',
          label: t('Available balance:'),
          onBalanceReady: setIsBalanceReady
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: 'form-row',
          children: [isAllAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
            name: 'asset',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.TokenSelector, {
              disabled: stakingChain !== _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.ALL_KEY || !from,
              items: tokenList,
              prefixShape: "circle"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
            name: 'value',
            rules: [{
              required: true,
              message: t('Amount is required')
            }, ({
              getFieldValue
            }) => ({
              validator: (_, value) => {
                const type = getFieldValue('type');
                const val = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["default"](value);
                if (type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED) {
                  if (val.lte(0)) {
                    return Promise.reject(new Error(t('Amount must be greater than 0')));
                  }
                } else {
                  if (!(nominatorMetadata !== null && nominatorMetadata !== void 0 && nominatorMetadata.isBondedBefore) || !isRelayChain) {
                    if (val.lte(0)) {
                      return Promise.reject(new Error(t('Amount must be greater than 0')));
                    }
                  }
                }
                if (val.gt(nativeTokenBalance.value)) {
                  return Promise.reject(t('Amount cannot exceed your balance'));
                }
                return Promise.resolve();
              }
            })],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AmountInput, {
              decimals: chain && from ? decimals : -1,
              maxValue: maxValue,
              showMaxButton: false
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
          hidden: stakingType !== _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED,
          name: 'pool',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PoolSelector, {
            chain: chain
            // Not use initialValues of Form, because some state changes by hook, it will be delayed
            ,
            defaultValue: persistPool,
            from: from,
            label: t('Select pool'),
            loading: poolLoading,
            setForceFetchValidator: setForceFetchValidator
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
          hidden: stakingType !== _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.NOMINATED,
          name: 'nominate',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MultiValidatorSelector, {
            chain: asset ? chain : ''
            // Not use initialValues of Form, because some state changes by hook, it will be delayed
            ,
            defaultValue: persistValidator,
            from: asset ? from : '',
            loading: validatorLoading,
            setForceFetchValidator: setForceFetchValidator
          })
        })]
      }), chainStakingMetadata && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
          className: "staking-divider"
        }), getMetaInfo()]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_parts__WEBPACK_IMPORTED_MODULE_11__.TransactionFooter, {
      errors: [],
      warnings: [],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
        disabled: isDisable || !isBalanceReady,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_25__["default"],
          weight: 'fill'
        }),
        loading: loading,
        onClick: checkAction(form.submit, stakingType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.StakingType.POOLED ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_JOIN_POOL : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ExtrinsicType.STAKING_BOND),
        children: t('Stake')
      })
    }), chainStakingMetadata && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.StakingNetworkDetailModal, {
      activeNominators: chainStakingMetadata.nominatorCount,
      estimatedEarning: chainStakingMetadata.expectedReturn,
      inflation: chainStakingMetadata.inflation,
      maxValidatorPerNominator: chainStakingMetadata.maxValidatorPerNominator,
      minimumActive: {
        decimals,
        value: chainMinStake,
        symbol
      },
      stakingType: stakingType,
      unstakingPeriod: chainStakingMetadata.unstakingPeriod
    })]
  });
};
const Wrapper = props => {
  const {
    className
  } = props;
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetCurrentPage)('/transaction/stake');
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, 'page-wrapper'),
    resolve: dataContext.awaitStores(['staking']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Component, {})
  });
};
const Stake = (0,styled_components__WEBPACK_IMPORTED_MODULE_26__["default"])(Wrapper).withConfig({
  displayName: "Stake",
  componentId: "sc-abqz0v-0"
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
    '.staking-type': {
      marginBottom: token.margin
    },
    '.account-free-balance': {
      marginBottom: token.marginXS
    },
    '.meta-info': {
      marginTop: token.paddingSM
    },
    '.react-tabs__tab-list': {
      marginLeft: 0,
      marginRight: 0
    },
    '.staking-divider': {
      marginTop: token.margin + 2,
      marginBottom: token.marginSM
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stake);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfVHJhbnNhY3Rpb25fdmFyaWFudHNfU3Rha2VfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVrSjtBQUNoRDtBQUNGO0FBRWhDO0FBQ3VKO0FBQ3RKO0FBQ2U7QUFDdVQ7QUFDMVI7QUFDbkI7QUFFaUM7QUFDekQ7QUFDbEM7QUFDSjtBQUNnQjtBQUN5QztBQUN0QztBQUNSO0FBRU07QUFDYTtBQUVVO0FBQ1U7QUFBQTtBQUFBO0FBQUE7QUFJOUUsTUFBTThELFlBQXNDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQztBQUN2RixNQUFNQyxjQUF3QyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRTFELE1BQU1DLFNBQW1CLEdBQUcsTUFBTTtFQUNoQyxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHYiw4REFBYyxFQUFFO0VBRTlCLE1BQU07SUFBRWMsV0FBVztJQUFFQyxNQUFNO0lBQUVDLFdBQVc7SUFBRUMsbUJBQW1CO0lBQUVDO0VBQWdCLENBQUMsR0FBR3hDLHlGQUFxQixFQUFlO0VBQ3ZILE1BQU07SUFBRXlDLFlBQVksRUFBRUMsWUFBWTtJQUFFQyxXQUFXLEVBQUVDO0VBQWEsQ0FBQyxHQUFHUixXQUFXO0VBRTdFLE1BQU1TLGNBQWMsR0FBRy9DLCtFQUFXLENBQUVnRCxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsWUFBWSxDQUFDRixjQUFjLENBQUM7RUFDaEYsTUFBTUcsUUFBUSxHQUFHdEIseUVBQWlCLENBQUNtQixjQUFjLGFBQWRBLGNBQWMsdUJBQWRBLGNBQWMsQ0FBRUksT0FBTyxDQUFDO0VBRTNELE1BQU1DLG9CQUFvQixHQUFHekQsZ0dBQTRCLENBQUN0QiwrRkFBa0IsRUFBRSxDQUFBMEUsY0FBYyxhQUFkQSxjQUFjLHVCQUFkQSxjQUFjLENBQUVJLE9BQU8sS0FBSSxFQUFF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QUFPLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBUSxDQUFDO0VBQUVNLEtBQUssRUFBRTtJQUFFQztFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQ3BFLE9BQU87SUFDTCxnQkFBZ0IsRUFBRTtNQUNoQkMsT0FBTyxFQUFFLE1BQU07TUFDZkMsYUFBYSxFQUFFO0lBQ2pCLENBQUM7SUFFRCxlQUFlLEVBQUU7TUFDZkMsWUFBWSxFQUFFSCxLQUFLLENBQUNJO0lBQ3RCLENBQUM7SUFFRCx1QkFBdUIsRUFBRTtNQUN2QkQsWUFBWSxFQUFFSCxLQUFLLENBQUNLO0lBQ3RCLENBQUM7SUFFRCxZQUFZLEVBQUU7TUFDWkMsU0FBUyxFQUFFTixLQUFLLENBQUNPO0lBQ25CLENBQUM7SUFFRCx1QkFBdUIsRUFBRTtNQUN2QkMsVUFBVSxFQUFFLENBQUM7TUFDYkMsV0FBVyxFQUFFO0lBQ2YsQ0FBQztJQUVELGtCQUFrQixFQUFFO01BQ2xCSCxTQUFTLEVBQUVOLEtBQUssQ0FBQ0ksTUFBTSxHQUFHLENBQUM7TUFDM0JELFlBQVksRUFBRUgsS0FBSyxDQUFDVTtJQUN0QjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZVosS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uL3ZhcmlhbnRzL1N0YWtlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgRXh0cmluc2ljVHlwZSwgTm9taW5hdGlvblBvb2xJbmZvLCBOb21pbmF0b3JNZXRhZGF0YSwgU3Rha2luZ1R5cGUsIFZhbGlkYXRvckluZm8gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IF9TVEFLSU5HX0NIQUlOX0dST1VQIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBfZ2V0T3JpZ2luQ2hhaW5PZkFzc2V0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL3V0aWxzJztcbmltcG9ydCB7IFNXVHJhbnNhY3Rpb25SZXNwb25zZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS90eXBlcyc7XG5pbXBvcnQgeyBpc1NhbWVBZGRyZXNzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBBY2NvdW50U2VsZWN0b3IsIEFtb3VudElucHV0LCBIaWRkZW5JbnB1dCwgTWV0YUluZm8sIE11bHRpVmFsaWRhdG9yU2VsZWN0b3IsIFBhZ2VXcmFwcGVyLCBQb29sU2VsZWN0b3IsIFJhZGlvR3JvdXAsIFN0YWtpbmdOZXR3b3JrRGV0YWlsTW9kYWwsIFRva2VuU2VsZWN0b3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQUxMX0tFWSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VGZXRjaENoYWluU3RhdGUsIHVzZUdldEJhbGFuY2UsIHVzZUdldENoYWluU3Rha2luZ01ldGFkYXRhLCB1c2VHZXROYXRpdmVUb2tlbkJhc2ljSW5mbywgdXNlR2V0TmF0aXZlVG9rZW5TbHVnLCB1c2VHZXROb21pbmF0b3JJbmZvLCB1c2VHZXRTdXBwb3J0ZWRTdGFraW5nVG9rZW5zLCB1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiwgdXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24sIHVzZVByZUNoZWNrQWN0aW9uLCB1c2VSZXN0b3JlVHJhbnNhY3Rpb24sIHVzZVNlbGVjdG9yLCB1c2VTZXRDdXJyZW50UGFnZSwgdXNlVHJhbnNhY3Rpb25Db250ZXh0LCB1c2VXYXRjaFRyYW5zYWN0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgdXNlRmV0Y2hDaGFpbkFzc2V0SW5mbyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3NjcmVlbi9jb21tb24vdXNlRmV0Y2hDaGFpbkFzc2V0SW5mbyc7XG5pbXBvcnQgeyBzdWJtaXRCb25kaW5nLCBzdWJtaXRQb29sQm9uZGluZyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IEZvcm1DYWxsYmFja3MsIEZvcm1GaWVsZERhdGEsIFN0YWtlUGFyYW1zLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBjb252ZXJ0RmllbGRUb09iamVjdCwgaXNBY2NvdW50QWxsLCBwYXJzZU5vbWluYXRpb25zLCBzaW1wbGVDaGVja0Zvcm0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IEJ1dHRvbiwgRGl2aWRlciwgRm9ybSwgSWNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IEJpZ04gZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IFBsdXNDaXJjbGUgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJOLCBCTl9aRVJPIH0gZnJvbSAnQHBvbGthZG90L3V0aWwnO1xuaW1wb3J0IHsgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG5pbXBvcnQgeyBhY2NvdW50RmlsdGVyRnVuYywgZmV0Y2hDaGFpblZhbGlkYXRvcnMgfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgRnJlZUJhbGFuY2UsIFRyYW5zYWN0aW9uQ29udGVudCwgVHJhbnNhY3Rpb25Gb290ZXIgfSBmcm9tICcuLi9wYXJ0cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBoaWRkZW5GaWVsZHM6IEFycmF5PGtleW9mIFN0YWtlUGFyYW1zPiA9IFsnY2hhaW4nLCAnZGVmYXVsdENoYWluJywgJ2RlZmF1bHRUeXBlJ107XG5jb25zdCB2YWxpZGF0ZUZpZWxkczogQXJyYXk8a2V5b2YgU3Rha2VQYXJhbXM+ID0gWyd2YWx1ZSddO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgeyBkZWZhdWx0RGF0YSwgb25Eb25lLCBwZXJzaXN0RGF0YSwgc2V0RGlzYWJsZWRSaWdodEJ0biwgc2V0U2hvd1JpZ2h0QnRuIH0gPSB1c2VUcmFuc2FjdGlvbkNvbnRleHQ8U3Rha2VQYXJhbXM+KCk7XG4gIGNvbnN0IHsgZGVmYXVsdENoYWluOiBzdGFraW5nQ2hhaW4sIGRlZmF1bHRUeXBlOiBfc3Rha2luZ1R5cGUgfSA9IGRlZmF1bHREYXRhO1xuXG4gIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUuY3VycmVudEFjY291bnQpO1xuICBjb25zdCBpc0V0aEFkciA9IGlzRXRoZXJldW1BZGRyZXNzKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzKTtcblxuICBjb25zdCBkZWZhdWx0UG9vbFRva2VuTGlzdCA9IHVzZUdldFN1cHBvcnRlZFN0YWtpbmdUb2tlbnMoU3Rha2luZ1R5cGUuUE9PTEVELCBjdXJyZW50QWNjb3VudD8uYWRkcmVzcyB8fCAnJywgc3Rha2luZ0NoYWluKTtcblxuICBjb25zdCBkaXNhYmxlUG9vbCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpc0V0aEFkcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50QWNjb3VudD8uYWRkcmVzcykge1xuICAgICAgICByZXR1cm4gIWRlZmF1bHRQb29sVG9rZW5MaXN0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjdXJyZW50QWNjb3VudD8uYWRkcmVzcywgZGVmYXVsdFBvb2xUb2tlbkxpc3QubGVuZ3RoLCBpc0V0aEFkcl0pO1xuXG4gIGNvbnN0IGRlZmF1bHRTdGFraW5nVHlwZTogU3Rha2luZ1R5cGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoZGlzYWJsZVBvb2wpIHtcbiAgICAgIHJldHVybiBTdGFraW5nVHlwZS5OT01JTkFURUQ7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHREYXRhLnR5cGUpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0RGF0YS50eXBlO1xuICAgIH1cblxuICAgIHN3aXRjaCAoX3N0YWtpbmdUeXBlKSB7XG4gICAgICBjYXNlIFN0YWtpbmdUeXBlLlBPT0xFRDpcbiAgICAgICAgcmV0dXJuIFN0YWtpbmdUeXBlLlBPT0xFRDtcbiAgICAgIGNhc2UgU3Rha2luZ1R5cGUuTk9NSU5BVEVEOlxuICAgICAgICByZXR1cm4gU3Rha2luZ1R5cGUuTk9NSU5BVEVEO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFN0YWtpbmdUeXBlLlBPT0xFRDtcbiAgICB9XG4gIH0sIFtfc3Rha2luZ1R5cGUsIGRpc2FibGVQb29sLCBkZWZhdWx0RGF0YS50eXBlXSk7XG5cbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtPFN0YWtlUGFyYW1zPigpO1xuXG4gIGNvbnN0IGZyb20gPSB1c2VXYXRjaFRyYW5zYWN0aW9uKCdmcm9tJywgZm9ybSwgZGVmYXVsdERhdGEpO1xuICBjb25zdCBjaGFpbiA9IHVzZVdhdGNoVHJhbnNhY3Rpb24oJ2NoYWluJywgZm9ybSwgZGVmYXVsdERhdGEpO1xuICBjb25zdCBhc3NldCA9IHVzZVdhdGNoVHJhbnNhY3Rpb24oJ2Fzc2V0JywgZm9ybSwgZGVmYXVsdERhdGEpO1xuICBjb25zdCBzdGFraW5nVHlwZSA9IHVzZVdhdGNoVHJhbnNhY3Rpb24oJ3R5cGUnLCBmb3JtLCBkZWZhdWx0RGF0YSk7XG4gIGNvbnN0IG5vbWluYXRlID0gdXNlV2F0Y2hUcmFuc2FjdGlvbignbm9taW5hdGUnLCBmb3JtLCBkZWZhdWx0RGF0YSk7XG5cbiAgLy8gVE9ETzogc2hvdWxkIGRvIGJldHRlciB0byBnZXQgdmFsaWRhdG9ycyBpbmZvXG4gIGNvbnN0IHsgbm9taW5hdGlvblBvb2xJbmZvTWFwLCB2YWxpZGF0b3JJbmZvTWFwIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmJvbmRpbmcpO1xuXG4gIGNvbnN0IGNoYWluSW5mb01hcCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2hhaW5TdG9yZS5jaGFpbkluZm9NYXApO1xuICBjb25zdCBjaGFpblN0YXRlID0gdXNlRmV0Y2hDaGFpblN0YXRlKGNoYWluKTtcbiAgY29uc3QgYXNzZXRJbmZvID0gdXNlRmV0Y2hDaGFpbkFzc2V0SW5mbyhhc3NldCk7XG5cbiAgY29uc3QgW2lzRGlzYWJsZSwgc2V0SXNEaXNhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNoYWluU3Rha2luZ01ldGFkYXRhID0gdXNlR2V0Q2hhaW5TdGFraW5nTWV0YWRhdGEoY2hhaW4pO1xuICBjb25zdCBub21pbmF0b3JNZXRhZGF0YUxpc3QgPSB1c2VHZXROb21pbmF0b3JJbmZvKGNoYWluLCBzdGFraW5nVHlwZSwgZnJvbSk7XG5cbiAgY29uc3Qgbm9taW5hdG9yTWV0YWRhdGE6IE5vbWluYXRvck1ldGFkYXRhIHwgdW5kZWZpbmVkID0gdXNlTWVtbygoKSA9PiBub21pbmF0b3JNZXRhZGF0YUxpc3RbMF0sIFtub21pbmF0b3JNZXRhZGF0YUxpc3RdKTtcblxuICBjb25zdCB7IG5hdGl2ZVRva2VuQmFsYW5jZSB9ID0gdXNlR2V0QmFsYW5jZShjaGFpbiwgZnJvbSk7XG4gIGNvbnN0IHRva2VuTGlzdCA9IHVzZUdldFN1cHBvcnRlZFN0YWtpbmdUb2tlbnMoc3Rha2luZ1R5cGUsIGZyb20sIHN0YWtpbmdDaGFpbik7XG5cbiAgY29uc3QgaXNSZWxheUNoYWluID0gdXNlTWVtbygoKSA9PiBfU1RBS0lOR19DSEFJTl9HUk9VUC5yZWxheS5pbmNsdWRlcyhjaGFpbiksIFtjaGFpbl0pO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bvb2xMb2FkaW5nLCBzZXRQb29sTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2YWxpZGF0b3JMb2FkaW5nLCBzZXRWYWxpZGF0b3JMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQmFsYW5jZVJlYWR5LCBzZXRJc0JhbGFuY2VSZWFkeV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3ZhbHVlQ2hhbmdlLCBzZXRWYWx1ZUNoYW5nZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFssIHVwZGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtmb3JjZUZldGNoVmFsaWRhdG9yLCBzZXRGb3JjZUZldGNoVmFsaWRhdG9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBleGlzdGVudGlhbERlcG9zaXQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoYXNzZXRJbmZvKSB7XG4gICAgICByZXR1cm4gYXNzZXRJbmZvLm1pbkFtb3VudCB8fCAnMCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcwJztcbiAgfSwgW2Fzc2V0SW5mb10pO1xuXG4gIGNvbnN0IG1heFZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgYmFsYW5jZSA9IG5ldyBCaWdOKG5hdGl2ZVRva2VuQmFsYW5jZS52YWx1ZSk7XG4gICAgY29uc3QgZWQgPSBuZXcgQmlnTihleGlzdGVudGlhbERlcG9zaXQpO1xuXG4gICAgaWYgKGVkLmd0ZShiYWxhbmNlKSkge1xuICAgICAgcmV0dXJuICcwJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJhbGFuY2UubWludXMoZWQpLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9LCBbZXhpc3RlbnRpYWxEZXBvc2l0LCBuYXRpdmVUb2tlbkJhbGFuY2UudmFsdWVdKTtcblxuICBjb25zdCB7IGRlY2ltYWxzLCBzeW1ib2wgfSA9IHVzZUdldE5hdGl2ZVRva2VuQmFzaWNJbmZvKGNoYWluKTtcblxuICBjb25zdCBpc0FsbEFjY291bnQgPSBpc0FjY291bnRBbGwoY3VycmVudEFjY291bnQ/LmFkZHJlc3MgfHwgJycpO1xuXG4gIGNvbnN0IGRlZmF1bHRTbHVnID0gdXNlR2V0TmF0aXZlVG9rZW5TbHVnKHN0YWtpbmdDaGFpbiB8fCAnJyk7XG5cbiAgY29uc3QgZm9ybURlZmF1bHQ6IFN0YWtlUGFyYW1zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHREYXRhLFxuICAgICAgdHlwZTogZGVmYXVsdFN0YWtpbmdUeXBlLFxuICAgICAgYXNzZXQ6IGRlZmF1bHREYXRhLmFzc2V0IHx8IGRlZmF1bHRTbHVnXG4gICAgfTtcbiAgfSwgW2RlZmF1bHREYXRhLCBkZWZhdWx0U3Rha2luZ1R5cGUsIGRlZmF1bHRTbHVnXSk7XG5cbiAgY29uc3QgW2lzQ2hhbmdlRGF0YSwgc2V0SXNDaGFuZ2VEYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXRTZWxlY3RlZFZhbGlkYXRvcnMgPSB1c2VDYWxsYmFjaygobm9taW5hdGlvbnM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgdmFsaWRhdG9yTGlzdCA9IHZhbGlkYXRvckluZm9NYXBbY2hhaW5dO1xuXG4gICAgaWYgKCF2YWxpZGF0b3JMaXN0KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBWYWxpZGF0b3JJbmZvW10gPSBbXTtcblxuICAgIHZhbGlkYXRvckxpc3QuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAobm9taW5hdGlvbnMuc29tZSgobm9taW5hdGlvbikgPT4gaXNTYW1lQWRkcmVzcyhub21pbmF0aW9uLCB2YWxpZGF0b3IuYWRkcmVzcykpKSB7IC8vIHJlbWVtYmVyIHRoZSBmb3JtYXQgb2YgdGhlIGFkZHJlc3NcbiAgICAgICAgcmVzdWx0LnB1c2godmFsaWRhdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFtjaGFpbiwgdmFsaWRhdG9ySW5mb01hcF0pO1xuXG4gIGNvbnN0IGdldFZhbGlkYXRvck1pblN0YWtlID0gdXNlQ2FsbGJhY2soKHZhbGlkYXRvckluZm9zOiBWYWxpZGF0b3JJbmZvW10pID0+IHtcbiAgICBsZXQgbWluU3Rha2UgPSBCTl9aRVJPO1xuXG4gICAgdmFsaWRhdG9ySW5mb3MuZm9yRWFjaCgodmFsaWRhdG9ySW5mbykgPT4ge1xuICAgICAgY29uc3QgYm5NaW5Cb25kID0gbmV3IEJOKHZhbGlkYXRvckluZm8/Lm1pbkJvbmQpO1xuXG4gICAgICBpZiAoYm5NaW5Cb25kLmd0KG1pblN0YWtlKSkge1xuICAgICAgICBtaW5TdGFrZSA9IGJuTWluQm9uZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtaW5TdGFrZS50b1N0cmluZygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbWluU3Rha2UgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoc3Rha2luZ1R5cGUgPT09IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCkge1xuICAgICAgY29uc3QgdmFsaWRhdG9ySW5mb3MgPSBnZXRTZWxlY3RlZFZhbGlkYXRvcnMocGFyc2VOb21pbmF0aW9ucyhub21pbmF0ZSkpO1xuICAgICAgY29uc3QgdmFsaWRhdG9yTWluU3Rha2UgPSBnZXRWYWxpZGF0b3JNaW5TdGFrZSh2YWxpZGF0b3JJbmZvcyk7XG5cbiAgICAgIGNvbnN0IG5vbWluYXRlZE1pblN0YWtlID0gQk4ubWF4KG5ldyBCTih2YWxpZGF0b3JNaW5TdGFrZSksIG5ldyBCTihjaGFpblN0YWtpbmdNZXRhZGF0YT8ubWluU3Rha2UgfHwgJzAnKSk7XG5cbiAgICAgIHJldHVybiBub21pbmF0ZWRNaW5TdGFrZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFpblN0YWtpbmdNZXRhZGF0YT8ubWluSm9pbk5vbWluYXRpb25Qb29sIHx8ICcwJztcbiAgfSwgW2NoYWluU3Rha2luZ01ldGFkYXRhPy5taW5Kb2luTm9taW5hdGlvblBvb2wsIGNoYWluU3Rha2luZ01ldGFkYXRhPy5taW5TdGFrZSwgZ2V0U2VsZWN0ZWRWYWxpZGF0b3JzLCBnZXRWYWxpZGF0b3JNaW5TdGFrZSwgbm9taW5hdGUsIHN0YWtpbmdUeXBlXSk7XG5cbiAgY29uc3QgY2hhaW5NaW5TdGFrZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBzdGFraW5nVHlwZSA9PT0gU3Rha2luZ1R5cGUuTk9NSU5BVEVEID8gKGNoYWluU3Rha2luZ01ldGFkYXRhPy5taW5TdGFrZSB8fCAnMCcpIDogKGNoYWluU3Rha2luZ01ldGFkYXRhPy5taW5Kb2luTm9taW5hdGlvblBvb2wgfHwgJzAnKTtcbiAgfSwgW2NoYWluU3Rha2luZ01ldGFkYXRhPy5taW5Kb2luTm9taW5hdGlvblBvb2wsIGNoYWluU3Rha2luZ01ldGFkYXRhPy5taW5TdGFrZSwgc3Rha2luZ1R5cGVdKTtcblxuICBjb25zdCBwZXJzaXN0VmFsaWRhdG9yID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGNoYWluID09PSBkZWZhdWx0RGF0YS5jaGFpbiAmJiBmcm9tID09PSBkZWZhdWx0RGF0YS5mcm9tICYmICFpc0NoYW5nZURhdGEpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0RGF0YS5ub21pbmF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwgW2NoYWluLCBkZWZhdWx0RGF0YS5jaGFpbiwgZGVmYXVsdERhdGEuZnJvbSwgZGVmYXVsdERhdGEubm9taW5hdGUsIGZyb20sIGlzQ2hhbmdlRGF0YV0pO1xuXG4gIGNvbnN0IHBlcnNpc3RQb29sID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGNoYWluID09PSBkZWZhdWx0RGF0YS5jaGFpbiAmJiBmcm9tID09PSBkZWZhdWx0RGF0YS5mcm9tICYmICFpc0NoYW5nZURhdGEpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0RGF0YS5wb29sO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCBbY2hhaW4sIGRlZmF1bHREYXRhLmNoYWluLCBkZWZhdWx0RGF0YS5mcm9tLCBkZWZhdWx0RGF0YS5wb29sLCBmcm9tLCBpc0NoYW5nZURhdGFdKTtcblxuICBjb25zdCB7IG9uRXJyb3IsIG9uU3VjY2VzcyB9ID0gdXNlSGFuZGxlU3VibWl0VHJhbnNhY3Rpb24ob25Eb25lKTtcblxuICBjb25zdCBvbkZpZWxkc0NoYW5nZTogRm9ybUNhbGxiYWNrczxTdGFrZVBhcmFtcz5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSkgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3IgfSA9IHNpbXBsZUNoZWNrRm9ybShhbGxGaWVsZHMpO1xuXG4gICAgY29uc3QgYWxsTWFwID0gY29udmVydEZpZWxkVG9PYmplY3Q8U3Rha2VQYXJhbXM+KGFsbEZpZWxkcyk7XG4gICAgY29uc3QgY2hhbmdlc01hcCA9IGNvbnZlcnRGaWVsZFRvT2JqZWN0PFN0YWtlUGFyYW1zPihjaGFuZ2VkRmllbGRzKTtcblxuICAgIGNvbnN0IHsgYXNzZXQsIGZyb20sIHZhbHVlIH0gPSBjaGFuZ2VzTWFwO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZUNoYW5nZSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoYXNzZXQgfHwgZnJvbSkge1xuICAgICAgc2V0SXNDaGFuZ2VEYXRhKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChhc3NldCkge1xuICAgICAgY29uc3QgY2hhaW4gPSBfZ2V0T3JpZ2luQ2hhaW5PZkFzc2V0KGFzc2V0KTtcblxuICAgICAgZm9ybS5zZXRGaWVsZFZhbHVlKCdjaGFpbicsIGNoYWluKTtcbiAgICAgIGZvcm0ucmVzZXRGaWVsZHMoWydub21pbmF0ZScsICdwb29sJ10pO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRW1wdHk6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG5cbiAgICBjb25zdCB7IHR5cGU6IHN0YWtpbmdUeXBlIH0gPSBhbGxNYXA7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhbGxNYXApKSB7XG4gICAgICBjaGVja0VtcHR5W2tleV0gPSAhIXZhbHVlO1xuICAgIH1cblxuICAgIGlmIChzdGFraW5nVHlwZSA9PT0gU3Rha2luZ1R5cGUuTk9NSU5BVEVEKSB7XG4gICAgICBjaGVja0VtcHR5LnBvb2wgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3Rha2luZ1R5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCkge1xuICAgICAgY2hlY2tFbXB0eS5ub21pbmF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0SXNEaXNhYmxlKGVycm9yIHx8IE9iamVjdC52YWx1ZXMoY2hlY2tFbXB0eSkuc29tZSgodmFsdWUpID0+ICF2YWx1ZSkpO1xuICAgIHBlcnNpc3REYXRhKGZvcm0uZ2V0RmllbGRzVmFsdWUoKSk7XG4gIH0sIFtmb3JtLCBwZXJzaXN0RGF0YV0pO1xuXG4gIGNvbnN0IGdldFNlbGVjdGVkUG9vbCA9IHVzZUNhbGxiYWNrKChwb29sSWQ/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBub21pbmF0aW9uUG9vbExpc3QgPSBub21pbmF0aW9uUG9vbEluZm9NYXBbY2hhaW5dO1xuXG4gICAgZm9yIChjb25zdCBwb29sIG9mIG5vbWluYXRpb25Qb29sTGlzdCkge1xuICAgICAgaWYgKFN0cmluZyhwb29sLmlkKSA9PT0gcG9vbElkKSB7XG4gICAgICAgIHJldHVybiBwb29sO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFtub21pbmF0aW9uUG9vbEluZm9NYXAsIGNoYWluXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQ6IEZvcm1DYWxsYmFja3M8U3Rha2VQYXJhbXM+WydvbkZpbmlzaCddID0gdXNlQ2FsbGJhY2soKHZhbHVlczogU3Rha2VQYXJhbXMpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHsgY2hhaW4sIGZyb20sIG5vbWluYXRlLCBwb29sLCB0eXBlLCB2YWx1ZSB9ID0gdmFsdWVzO1xuICAgIGxldCBib25kaW5nUHJvbWlzZTogUHJvbWlzZTxTV1RyYW5zYWN0aW9uUmVzcG9uc2U+O1xuXG4gICAgaWYgKHBvb2wgJiYgdHlwZSA9PT0gU3Rha2luZ1R5cGUuUE9PTEVEKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFBvb2wgPSBnZXRTZWxlY3RlZFBvb2wocG9vbCk7XG5cbiAgICAgIGJvbmRpbmdQcm9taXNlID0gc3VibWl0UG9vbEJvbmRpbmcoe1xuICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICBjaGFpbjogY2hhaW4sXG4gICAgICAgIG5vbWluYXRvck1ldGFkYXRhOiBub21pbmF0b3JNZXRhZGF0YSxcbiAgICAgICAgc2VsZWN0ZWRQb29sOiBzZWxlY3RlZFBvb2wgYXMgTm9taW5hdGlvblBvb2xJbmZvLFxuICAgICAgICBhZGRyZXNzOiBmcm9tXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWxpZGF0b3JzID0gZ2V0U2VsZWN0ZWRWYWxpZGF0b3JzKHBhcnNlTm9taW5hdGlvbnMobm9taW5hdGUpKTtcblxuICAgICAgYm9uZGluZ1Byb21pc2UgPSBzdWJtaXRCb25kaW5nKHtcbiAgICAgICAgYW1vdW50OiB2YWx1ZSxcbiAgICAgICAgY2hhaW46IGNoYWluLFxuICAgICAgICBub21pbmF0b3JNZXRhZGF0YTogbm9taW5hdG9yTWV0YWRhdGEsXG4gICAgICAgIHNlbGVjdGVkVmFsaWRhdG9ycyxcbiAgICAgICAgYWRkcmVzczogZnJvbSxcbiAgICAgICAgdHlwZTogU3Rha2luZ1R5cGUuTk9NSU5BVEVEXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJvbmRpbmdQcm9taXNlXG4gICAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMzAwKTtcbiAgfSwgW2dldFNlbGVjdGVkUG9vbCwgbm9taW5hdG9yTWV0YWRhdGEsIGdldFNlbGVjdGVkVmFsaWRhdG9ycywgb25TdWNjZXNzLCBvbkVycm9yXSk7XG5cbiAgY29uc3QgZ2V0TWV0YUluZm8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGNoYWluU3Rha2luZ01ldGFkYXRhKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TWV0YUluZm9cbiAgICAgICAgICBjbGFzc05hbWU9eydtZXRhLWluZm8nfVxuICAgICAgICAgIGxhYmVsQ29sb3JTY2hlbWU9eydncmF5J31cbiAgICAgICAgICBzcGFjZVNpemU9eyd4cyd9XG4gICAgICAgICAgdmFsdWVDb2xvclNjaGVtZT17J2xpZ2h0J31cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoYWluU3Rha2luZ01ldGFkYXRhLmV4cGVjdGVkUmV0dXJuICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIDxNZXRhSW5mby5OdW1iZXJcbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnRXN0aW1hdGVkIGVhcm5pbmdzOicpfVxuICAgICAgICAgICAgICAgIHN1ZmZpeD17JyUgLyB5ZWFyJ31cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhaW5TdGFraW5nTWV0YWRhdGEuZXhwZWN0ZWRSZXR1cm59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hhaW5TdGFraW5nTWV0YWRhdGEubWluU3Rha2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPE1ldGFJbmZvLk51bWJlclxuICAgICAgICAgICAgICAgIGRlY2ltYWxzPXtkZWNpbWFsc31cbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnTWluaW11bSBhY3RpdmU6Jyl9XG4gICAgICAgICAgICAgICAgc3VmZml4PXtzeW1ib2x9XG4gICAgICAgICAgICAgICAgdmFsdWU9e21pblN0YWtlfVxuICAgICAgICAgICAgICAgIHZhbHVlQ29sb3JTY2hlbWE9eydzdWNjZXNzJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvTWV0YUluZm8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LCBbY2hhaW5TdGFraW5nTWV0YWRhdGEsIGRlY2ltYWxzLCBzeW1ib2wsIHQsIG1pblN0YWtlXSk7XG5cbiAgY29uc3QgY2hlY2tBY3Rpb24gPSB1c2VQcmVDaGVja0FjdGlvbihmcm9tKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNob3dSaWdodEJ0bih0cnVlKTtcbiAgfSwgW3NldFNob3dSaWdodEJ0bl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGlzYWJsZWRSaWdodEJ0bighY2hhaW5TdGFraW5nTWV0YWRhdGEpO1xuICB9LCBbY2hhaW5TdGFraW5nTWV0YWRhdGEsIHNldERpc2FibGVkUmlnaHRCdG5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB1bm1vdW50ID0gZmFsc2U7XG5cbiAgICAvLyBmZXRjaCB2YWxpZGF0b3JzIHdoZW4gY2hhbmdlIGNoYWluXG4gICAgLy8gX3N0YWtpbmdUeXBlIGlzIHByZWRlZmluZWQgZm9ybSBzdGFydFxuICAgIGlmICgoISFjaGFpbiAmJiAhIWZyb20gJiYgY2hhaW5TdGF0ZT8uYWN0aXZlKSB8fCBmb3JjZUZldGNoVmFsaWRhdG9yKSB7XG4gICAgICBmZXRjaENoYWluVmFsaWRhdG9ycyhjaGFpbiwgX3N0YWtpbmdUeXBlIHx8IEFMTF9LRVksIHVubW91bnQsIHNldFBvb2xMb2FkaW5nLCBzZXRWYWxpZGF0b3JMb2FkaW5nLCBzZXRGb3JjZUZldGNoVmFsaWRhdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdW5tb3VudCA9IHRydWU7XG4gICAgfTtcbiAgfSwgW2Zyb20sIF9zdGFraW5nVHlwZSwgY2hhaW4sIGNoYWluU3RhdGU/LmFjdGl2ZSwgZm9yY2VGZXRjaFZhbGlkYXRvcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbCA9IGZhbHNlO1xuXG4gICAgaWYgKHZhbHVlQ2hhbmdlKSB7XG4gICAgICBpZiAoIWNhbmNlbCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmb3JtLnZhbGlkYXRlRmllbGRzKFsndmFsdWUnXSkuZmluYWxseSgoKSA9PiB1cGRhdGUoe30pKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2Zvcm0sIG5hdGl2ZVRva2VuQmFsYW5jZS52YWx1ZV0pO1xuXG4gIHVzZVJlc3RvcmVUcmFuc2FjdGlvbihmb3JtKTtcbiAgdXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24odmFsaWRhdGVGaWVsZHMsIGZvcm0sIGRlZmF1bHREYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VHJhbnNhY3Rpb25Db250ZW50PlxuXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPXsnZm9ybS1jb250YWluZXIgZm9ybS1zcGFjZS1zbSd9XG4gICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXtmb3JtRGVmYXVsdH1cbiAgICAgICAgICBvbkZpZWxkc0NoYW5nZT17b25GaWVsZHNDaGFuZ2V9XG4gICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgICAgICA+XG4gICAgICAgICAgPEhpZGRlbklucHV0IGZpZWxkcz17aGlkZGVuRmllbGRzfSAvPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc3Rha2luZy10eXBlJ1xuICAgICAgICAgICAgaGlkZGVuPXtfc3Rha2luZ1R5cGUgIT09IEFMTF9LRVl9XG4gICAgICAgICAgICBuYW1lPXsndHlwZSd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IHQoJ1Bvb2xzJyksXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogU3Rha2luZ1R5cGUuUE9PTEVELFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVQb29sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogdCgnTm9taW5hdGUnKSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBTdGFraW5nVHlwZS5OT01JTkFURURcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIGhpZGRlbj17IWlzQWxsQWNjb3VudH1cbiAgICAgICAgICAgIG5hbWU9eydmcm9tJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yIGZpbHRlcj17YWNjb3VudEZpbHRlckZ1bmMoY2hhaW5JbmZvTWFwLCBzdGFraW5nVHlwZSwgc3Rha2luZ0NoYWluKX0gLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgICFpc0FsbEFjY291bnQgJiZcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT17J2Fzc2V0J30+XG4gICAgICAgICAgICAgICAgICA8VG9rZW5TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3Rha2luZ0NoYWluICE9PSBBTExfS0VZIHx8ICFmcm9tfVxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17dG9rZW5MaXN0fVxuICAgICAgICAgICAgICAgICAgICBwcmVmaXhTaGFwZT0nY2lyY2xlJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDxGcmVlQmFsYW5jZVxuICAgICAgICAgICAgYWRkcmVzcz17ZnJvbX1cbiAgICAgICAgICAgIGNoYWluPXtjaGFpbn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2FjY291bnQtZnJlZS1iYWxhbmNlJ31cbiAgICAgICAgICAgIGxhYmVsPXt0KCdBdmFpbGFibGUgYmFsYW5jZTonKX1cbiAgICAgICAgICAgIG9uQmFsYW5jZVJlYWR5PXtzZXRJc0JhbGFuY2VSZWFkeX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtLXJvdyd9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpc0FsbEFjY291bnQgJiZcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9eydhc3NldCd9PlxuICAgICAgICAgICAgICAgICAgICA8VG9rZW5TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdGFraW5nQ2hhaW4gIT09IEFMTF9LRVkgfHwgIWZyb219XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Rva2VuTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICBwcmVmaXhTaGFwZT0nY2lyY2xlJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9eyd2YWx1ZSd9XG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnQW1vdW50IGlzIHJlcXVpcmVkJykgfSxcbiAgICAgICAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IChfLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBnZXRGaWVsZFZhbHVlKCd0eXBlJykgYXMgU3Rha2luZ1R5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IG5ldyBCaWdOKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gU3Rha2luZ1R5cGUuUE9PTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbC5sdGUoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IodCgnQW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vbWluYXRvck1ldGFkYXRhPy5pc0JvbmRlZEJlZm9yZSB8fCAhaXNSZWxheUNoYWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsLmx0ZSgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHQoJ0Ftb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsLmd0KG5hdGl2ZVRva2VuQmFsYW5jZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnQW1vdW50IGNhbm5vdCBleGNlZWQgeW91ciBiYWxhbmNlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIHN0YXR1c0hlbHBBc1Rvb2x0aXA9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBbW91bnRJbnB1dFxuICAgICAgICAgICAgICAgIGRlY2ltYWxzPXsoY2hhaW4gJiYgZnJvbSkgPyBkZWNpbWFscyA6IC0xfVxuICAgICAgICAgICAgICAgIG1heFZhbHVlPXttYXhWYWx1ZX1cbiAgICAgICAgICAgICAgICBzaG93TWF4QnV0dG9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgaGlkZGVuPXtzdGFraW5nVHlwZSAhPT0gU3Rha2luZ1R5cGUuUE9PTEVEfVxuICAgICAgICAgICAgbmFtZT17J3Bvb2wnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQb29sU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhaW49e2NoYWlufVxuICAgICAgICAgICAgICAvLyBOb3QgdXNlIGluaXRpYWxWYWx1ZXMgb2YgRm9ybSwgYmVjYXVzZSBzb21lIHN0YXRlIGNoYW5nZXMgYnkgaG9vaywgaXQgd2lsbCBiZSBkZWxheWVkXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGVyc2lzdFBvb2x9XG4gICAgICAgICAgICAgIGZyb209e2Zyb219XG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdTZWxlY3QgcG9vbCcpfVxuICAgICAgICAgICAgICBsb2FkaW5nPXtwb29sTG9hZGluZ31cbiAgICAgICAgICAgICAgc2V0Rm9yY2VGZXRjaFZhbGlkYXRvcj17c2V0Rm9yY2VGZXRjaFZhbGlkYXRvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBoaWRkZW49e3N0YWtpbmdUeXBlICE9PSBTdGFraW5nVHlwZS5OT01JTkFURUR9XG4gICAgICAgICAgICBuYW1lPXsnbm9taW5hdGUnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNdWx0aVZhbGlkYXRvclNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYWluPXthc3NldCA/IGNoYWluIDogJyd9XG4gICAgICAgICAgICAgIC8vIE5vdCB1c2UgaW5pdGlhbFZhbHVlcyBvZiBGb3JtLCBiZWNhdXNlIHNvbWUgc3RhdGUgY2hhbmdlcyBieSBob29rLCBpdCB3aWxsIGJlIGRlbGF5ZWRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwZXJzaXN0VmFsaWRhdG9yfVxuICAgICAgICAgICAgICBmcm9tPXthc3NldCA/IGZyb20gOiAnJ31cbiAgICAgICAgICAgICAgbG9hZGluZz17dmFsaWRhdG9yTG9hZGluZ31cbiAgICAgICAgICAgICAgc2V0Rm9yY2VGZXRjaFZhbGlkYXRvcj17c2V0Rm9yY2VGZXRjaFZhbGlkYXRvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAge1xuICAgICAgICAgIGNoYWluU3Rha2luZ01ldGFkYXRhICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT0nc3Rha2luZy1kaXZpZGVyJyAvPlxuICAgICAgICAgICAgICB7Z2V0TWV0YUluZm8oKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9UcmFuc2FjdGlvbkNvbnRlbnQ+XG5cbiAgICAgIDxUcmFuc2FjdGlvbkZvb3RlclxuICAgICAgICBlcnJvcnM9e1tdfVxuICAgICAgICB3YXJuaW5ncz17W119XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlIHx8ICFpc0JhbGFuY2VSZWFkeX1cbiAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBwaG9zcGhvckljb249e1BsdXNDaXJjbGV9XG4gICAgICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgb25DbGljaz17Y2hlY2tBY3Rpb24oZm9ybS5zdWJtaXQsIHN0YWtpbmdUeXBlID09PSBTdGFraW5nVHlwZS5QT09MRUQgPyBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfSk9JTl9QT09MIDogRXh0cmluc2ljVHlwZS5TVEFLSU5HX0JPTkQpfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ1N0YWtlJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9UcmFuc2FjdGlvbkZvb3Rlcj5cblxuICAgICAge1xuICAgICAgICBjaGFpblN0YWtpbmdNZXRhZGF0YSAmJlxuICAgICAgICAoXG4gICAgICAgICAgPFN0YWtpbmdOZXR3b3JrRGV0YWlsTW9kYWxcbiAgICAgICAgICAgIGFjdGl2ZU5vbWluYXRvcnM9e2NoYWluU3Rha2luZ01ldGFkYXRhLm5vbWluYXRvckNvdW50fVxuICAgICAgICAgICAgZXN0aW1hdGVkRWFybmluZz17Y2hhaW5TdGFraW5nTWV0YWRhdGEuZXhwZWN0ZWRSZXR1cm59XG4gICAgICAgICAgICBpbmZsYXRpb249e2NoYWluU3Rha2luZ01ldGFkYXRhLmluZmxhdGlvbn1cbiAgICAgICAgICAgIG1heFZhbGlkYXRvclBlck5vbWluYXRvcj17Y2hhaW5TdGFraW5nTWV0YWRhdGEubWF4VmFsaWRhdG9yUGVyTm9taW5hdG9yfVxuICAgICAgICAgICAgbWluaW11bUFjdGl2ZT17eyBkZWNpbWFscywgdmFsdWU6IGNoYWluTWluU3Rha2UsIHN5bWJvbCB9fVxuICAgICAgICAgICAgc3Rha2luZ1R5cGU9e3N0YWtpbmdUeXBlfVxuICAgICAgICAgICAgdW5zdGFraW5nUGVyaW9kPXtjaGFpblN0YWtpbmdNZXRhZGF0YS51bnN0YWtpbmdQZXJpb2R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgV3JhcHBlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgdXNlU2V0Q3VycmVudFBhZ2UoJy90cmFuc2FjdGlvbi9zdGFrZScpO1xuXG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lLCAncGFnZS13cmFwcGVyJyl9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ3N0YWtpbmcnXSl9XG4gICAgPlxuICAgICAgPENvbXBvbmVudCAvPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBTdGFrZSA9IHN0eWxlZChXcmFwcGVyKTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgICcmLnBhZ2Utd3JhcHBlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfSxcblxuICAgICcuc3Rha2luZy10eXBlJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5cbiAgICB9LFxuXG4gICAgJy5hY2NvdW50LWZyZWUtYmFsYW5jZSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luWFNcbiAgICB9LFxuXG4gICAgJy5tZXRhLWluZm8nOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLnBhZGRpbmdTTVxuICAgIH0sXG5cbiAgICAnLnJlYWN0LXRhYnNfX3RhYi1saXN0Jzoge1xuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiAwXG4gICAgfSxcblxuICAgICcuc3Rha2luZy1kaXZpZGVyJzoge1xuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW4gKyAyLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5TTVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFrZTtcbiJdLCJuYW1lcyI6WyJFeHRyaW5zaWNUeXBlIiwiU3Rha2luZ1R5cGUiLCJfU1RBS0lOR19DSEFJTl9HUk9VUCIsIl9nZXRPcmlnaW5DaGFpbk9mQXNzZXQiLCJpc1NhbWVBZGRyZXNzIiwiQWNjb3VudFNlbGVjdG9yIiwiQW1vdW50SW5wdXQiLCJIaWRkZW5JbnB1dCIsIk1ldGFJbmZvIiwiTXVsdGlWYWxpZGF0b3JTZWxlY3RvciIsIlBhZ2VXcmFwcGVyIiwiUG9vbFNlbGVjdG9yIiwiUmFkaW9Hcm91cCIsIlN0YWtpbmdOZXR3b3JrRGV0YWlsTW9kYWwiLCJUb2tlblNlbGVjdG9yIiwiQUxMX0tFWSIsIkRhdGFDb250ZXh0IiwidXNlRmV0Y2hDaGFpblN0YXRlIiwidXNlR2V0QmFsYW5jZSIsInVzZUdldENoYWluU3Rha2luZ01ldGFkYXRhIiwidXNlR2V0TmF0aXZlVG9rZW5CYXNpY0luZm8iLCJ1c2VHZXROYXRpdmVUb2tlblNsdWciLCJ1c2VHZXROb21pbmF0b3JJbmZvIiwidXNlR2V0U3VwcG9ydGVkU3Rha2luZ1Rva2VucyIsInVzZUhhbmRsZVN1Ym1pdFRyYW5zYWN0aW9uIiwidXNlSW5pdFZhbGlkYXRlVHJhbnNhY3Rpb24iLCJ1c2VQcmVDaGVja0FjdGlvbiIsInVzZVJlc3RvcmVUcmFuc2FjdGlvbiIsInVzZVNlbGVjdG9yIiwidXNlU2V0Q3VycmVudFBhZ2UiLCJ1c2VUcmFuc2FjdGlvbkNvbnRleHQiLCJ1c2VXYXRjaFRyYW5zYWN0aW9uIiwidXNlRmV0Y2hDaGFpbkFzc2V0SW5mbyIsInN1Ym1pdEJvbmRpbmciLCJzdWJtaXRQb29sQm9uZGluZyIsImNvbnZlcnRGaWVsZFRvT2JqZWN0IiwiaXNBY2NvdW50QWxsIiwicGFyc2VOb21pbmF0aW9ucyIsInNpbXBsZUNoZWNrRm9ybSIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJGb3JtIiwiSWNvbiIsIkJpZ04iLCJDTiIsIlBsdXNDaXJjbGUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwic3R5bGVkIiwiQk4iLCJCTl9aRVJPIiwiaXNFdGhlcmV1bUFkZHJlc3MiLCJhY2NvdW50RmlsdGVyRnVuYyIsImZldGNoQ2hhaW5WYWxpZGF0b3JzIiwiRnJlZUJhbGFuY2UiLCJUcmFuc2FjdGlvbkNvbnRlbnQiLCJUcmFuc2FjdGlvbkZvb3RlciIsImhpZGRlbkZpZWxkcyIsInZhbGlkYXRlRmllbGRzIiwiQ29tcG9uZW50IiwidCIsImRlZmF1bHREYXRhIiwib25Eb25lIiwicGVyc2lzdERhdGEiLCJzZXREaXNhYmxlZFJpZ2h0QnRuIiwic2V0U2hvd1JpZ2h0QnRuIiwiZGVmYXVsdENoYWluIiwic3Rha2luZ0NoYWluIiwiZGVmYXVsdFR5cGUiLCJfc3Rha2luZ1R5cGUiLCJjdXJyZW50QWNjb3VudCIsInN0YXRlIiwiYWNjb3VudFN0YXRlIiwiaXNFdGhBZHIiLCJhZGRyZXNzIiwiZGVmYXVsdFBvb2xUb2tlbkxpc3QiLCJQT09MRUQiLCJkaXNhYmxlUG9vbCIsImxlbmd0aCIsImRlZmF1bHRTdGFraW5nVHlwZSIsIk5PTUlOQVRFRCIsInR5cGUiLCJmb3JtIiwidXNlRm9ybSIsImZyb20iLCJjaGFpbiIsImFzc2V0Iiwic3Rha2luZ1R5cGUiLCJub21pbmF0ZSIsIm5vbWluYXRpb25Qb29sSW5mb01hcCIsInZhbGlkYXRvckluZm9NYXAiLCJib25kaW5nIiwiY2hhaW5JbmZvTWFwIiwiY2hhaW5TdG9yZSIsImNoYWluU3RhdGUiLCJhc3NldEluZm8iLCJpc0Rpc2FibGUiLCJzZXRJc0Rpc2FibGUiLCJjaGFpblN0YWtpbmdNZXRhZGF0YSIsIm5vbWluYXRvck1ldGFkYXRhTGlzdCIsIm5vbWluYXRvck1ldGFkYXRhIiwibmF0aXZlVG9rZW5CYWxhbmNlIiwidG9rZW5MaXN0IiwiaXNSZWxheUNoYWluIiwicmVsYXkiLCJpbmNsdWRlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicG9vbExvYWRpbmciLCJzZXRQb29sTG9hZGluZyIsInZhbGlkYXRvckxvYWRpbmciLCJzZXRWYWxpZGF0b3JMb2FkaW5nIiwiaXNCYWxhbmNlUmVhZHkiLCJzZXRJc0JhbGFuY2VSZWFkeSIsInZhbHVlQ2hhbmdlIiwic2V0VmFsdWVDaGFuZ2UiLCJ1cGRhdGUiLCJmb3JjZUZldGNoVmFsaWRhdG9yIiwic2V0Rm9yY2VGZXRjaFZhbGlkYXRvciIsImV4aXN0ZW50aWFsRGVwb3NpdCIsIm1pbkFtb3VudCIsIm1heFZhbHVlIiwiYmFsYW5jZSIsInZhbHVlIiwiZWQiLCJndGUiLCJtaW51cyIsInRvU3RyaW5nIiwiZGVjaW1hbHMiLCJzeW1ib2wiLCJpc0FsbEFjY291bnQiLCJkZWZhdWx0U2x1ZyIsImZvcm1EZWZhdWx0IiwiaXNDaGFuZ2VEYXRhIiwic2V0SXNDaGFuZ2VEYXRhIiwiZ2V0U2VsZWN0ZWRWYWxpZGF0b3JzIiwibm9taW5hdGlvbnMiLCJ2YWxpZGF0b3JMaXN0IiwicmVzdWx0IiwiZm9yRWFjaCIsInZhbGlkYXRvciIsInNvbWUiLCJub21pbmF0aW9uIiwicHVzaCIsImdldFZhbGlkYXRvck1pblN0YWtlIiwidmFsaWRhdG9ySW5mb3MiLCJtaW5TdGFrZSIsInZhbGlkYXRvckluZm8iLCJibk1pbkJvbmQiLCJtaW5Cb25kIiwiZ3QiLCJ2YWxpZGF0b3JNaW5TdGFrZSIsIm5vbWluYXRlZE1pblN0YWtlIiwibWF4IiwibWluSm9pbk5vbWluYXRpb25Qb29sIiwiY2hhaW5NaW5TdGFrZSIsInBlcnNpc3RWYWxpZGF0b3IiLCJwZXJzaXN0UG9vbCIsInBvb2wiLCJvbkVycm9yIiwib25TdWNjZXNzIiwib25GaWVsZHNDaGFuZ2UiLCJjaGFuZ2VkRmllbGRzIiwiYWxsRmllbGRzIiwiZXJyb3IiLCJhbGxNYXAiLCJjaGFuZ2VzTWFwIiwic2V0RmllbGRWYWx1ZSIsInJlc2V0RmllbGRzIiwiY2hlY2tFbXB0eSIsImtleSIsIk9iamVjdCIsImVudHJpZXMiLCJ2YWx1ZXMiLCJnZXRGaWVsZHNWYWx1ZSIsImdldFNlbGVjdGVkUG9vbCIsInBvb2xJZCIsIm5vbWluYXRpb25Qb29sTGlzdCIsIlN0cmluZyIsImlkIiwidW5kZWZpbmVkIiwib25TdWJtaXQiLCJib25kaW5nUHJvbWlzZSIsInNlbGVjdGVkUG9vbCIsImFtb3VudCIsInNlbGVjdGVkVmFsaWRhdG9ycyIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY2F0Y2giLCJmaW5hbGx5IiwiZ2V0TWV0YUluZm8iLCJleHBlY3RlZFJldHVybiIsImNoZWNrQWN0aW9uIiwidW5tb3VudCIsImFjdGl2ZSIsImNhbmNlbCIsImxhYmVsIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJnZXRGaWVsZFZhbHVlIiwiXyIsInZhbCIsImx0ZSIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsImlzQm9uZGVkQmVmb3JlIiwicmVzb2x2ZSIsInN1Ym1pdCIsIlNUQUtJTkdfSk9JTl9QT09MIiwiU1RBS0lOR19CT05EIiwibm9taW5hdG9yQ291bnQiLCJpbmZsYXRpb24iLCJtYXhWYWxpZGF0b3JQZXJOb21pbmF0b3IiLCJ1bnN0YWtpbmdQZXJpb2QiLCJXcmFwcGVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJkYXRhQ29udGV4dCIsImF3YWl0U3RvcmVzIiwiU3Rha2UiLCJ0aGVtZSIsInRva2VuIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJtYXJnaW5YUyIsIm1hcmdpblRvcCIsInBhZGRpbmdTTSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblNNIl0sInNvdXJjZVJvb3QiOiIifQ==