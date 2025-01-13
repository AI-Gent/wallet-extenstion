"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_Staking_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/Staking/MoreActionModal.tsx":
/*!***********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Staking/MoreActionModal.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MORE_ACTION_MODAL": () => (/* binding */ MORE_ACTION_MODAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/koni/api/staking/bonding/utils */ "../extension-base/src/koni/api/staking/bonding/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/setting-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/activity-indicator/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/MinusCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowCircleDown.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Wallet.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowArcLeft.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlusCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0
















const MORE_ACTION_MODAL = 'more-action-modal';
const Component = props => {
  const {
    chainStakingMetadata,
    className,
    nominatorMetadata,
    reward
  } = props;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
  const {
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__.ModalContext);
  const {
    currentAccount,
    isAllAccount
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountState);
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const [, setStakeStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.STAKE_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_STAKE_PARAMS);
  const [, setUnStakeStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.UN_STAKE_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_UN_STAKE_PARAMS);
  const [, setCancelUnStakeStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.CANCEL_UN_STAKE_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CANCEL_UN_STAKE_PARAMS);
  const [, setWithdrawStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.WITHDRAW_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_WITHDRAW_PARAMS);
  const [, setClaimRewardStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_REWARD_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLAIM_REWARD_PARAMS);
  const onCancel = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    inactiveModal(MORE_ACTION_MODAL);
  }, [inactiveModal]);
  const onDoneTransaction = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(extrinsicHash => {
    if (chainStakingMetadata) {
      navigate(`/transaction-done/substrate/${chainStakingMetadata.chain}/${extrinsicHash}`);
    }
  }, [chainStakingMetadata, navigate]);
  const {
    onError,
    onSuccess
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useHandleSubmitTransaction)(onDoneTransaction);
  const handleWithdrawalAction = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    if (!nominatorMetadata) {
      setSelected(undefined);
      return;
    }
    if (isAllAccount) {
      setSelected(undefined);
      setWithdrawStorage({
        ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_WITHDRAW_PARAMS,
        type: nominatorMetadata.type,
        chain: nominatorMetadata.chain
      });
      navigate('/transaction/withdraw');
      return;
    }
    const unstakingInfo = (0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.getWithdrawalInfo)(nominatorMetadata);
    if (!unstakingInfo) {
      setSelected(undefined);
      return;
    }
    const params = {
      unstakingInfo,
      chain: nominatorMetadata.chain,
      nominatorMetadata
    };
    if ((0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.isActionFromValidator)(nominatorMetadata.type, nominatorMetadata.chain)) {
      params.validatorAddress = unstakingInfo.validatorAddress;
    }
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.submitStakeWithdrawal)(params).then(onSuccess).catch(onError).finally(() => {
      setSelected(undefined);
    });
  }, [isAllAccount, navigate, nominatorMetadata, onError, onSuccess, setWithdrawStorage]);
  const handleClaimRewardAction = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    if (!nominatorMetadata) {
      setSelected(undefined);
      return;
    }
    if (nominatorMetadata.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.StakingType.POOLED || isAllAccount) {
      setSelected(undefined);
      const address = currentAccount ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.isAccountAll)(currentAccount.address) ? '' : currentAccount.address : '';
      setClaimRewardStorage({
        ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLAIM_REWARD_PARAMS,
        from: address,
        type: nominatorMetadata.type,
        chain: nominatorMetadata.chain
      });
      navigate('/transaction/claim-reward');
      return;
    }
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.submitStakeClaimReward)({
      address: nominatorMetadata.address,
      chain: nominatorMetadata.chain,
      stakingType: nominatorMetadata.type,
      unclaimedReward: reward === null || reward === void 0 ? void 0 : reward.unclaimedReward
    }).then(onSuccess).catch(onError).finally(() => {
      setSelected(undefined);
    });
  }, [currentAccount, isAllAccount, navigate, nominatorMetadata, onError, onSuccess, reward === null || reward === void 0 ? void 0 : reward.unclaimedReward, setClaimRewardStorage]);
  const availableActions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    if (!nominatorMetadata) {
      return [];
    }
    return (0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.getStakingAvailableActionsByNominator)(nominatorMetadata, reward === null || reward === void 0 ? void 0 : reward.unclaimedReward);
  }, [nominatorMetadata, reward === null || reward === void 0 ? void 0 : reward.unclaimedReward]);
  const onNavigate = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(url => {
    return () => {
      setSelected(undefined);
      navigate(url);
    };
  }, [navigate]);
  const actionList = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    if (!chainStakingMetadata) {
      return [];
    }
    const actionListByChain = (0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.getStakingAvailableActionsByChain)(chainStakingMetadata.chain, chainStakingMetadata.type);
    const address = currentAccount ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.isAccountAll)(currentAccount.address) ? '' : currentAccount.address : '';
    return actionListByChain.map(action => {
      if (action === _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.UNSTAKE) {
        return {
          action: _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.UNSTAKE,
          backgroundIconColor: 'magenta-6',
          icon: phosphor_react__WEBPACK_IMPORTED_MODULE_14__["default"],
          label: t('Unstake'),
          onClick: () => {
            setUnStakeStorage({
              ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_UN_STAKE_PARAMS,
              from: address,
              type: chainStakingMetadata.type,
              chain: chainStakingMetadata.chain
            });
            onNavigate('/transaction/unstake')();
          }
        };
      } else if (action === _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.WITHDRAW) {
        return {
          action: _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.WITHDRAW,
          backgroundIconColor: 'geekblue-6',
          icon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
          label: t('Withdraw unstaked funds'),
          onClick: handleWithdrawalAction
        };
      } else if (action === _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.CLAIM_REWARD) {
        return {
          action: _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.CLAIM_REWARD,
          backgroundIconColor: 'green-7',
          icon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
          label: t('Claim rewards'),
          onClick: handleClaimRewardAction
        };
      } else if (action === _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.CANCEL_UNSTAKE) {
        return {
          action: _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.CANCEL_UNSTAKE,
          backgroundIconColor: 'purple-8',
          icon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"],
          label: t('Cancel unstaking'),
          onClick: () => {
            setCancelUnStakeStorage({
              ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CANCEL_UN_STAKE_PARAMS,
              from: address,
              type: chainStakingMetadata.type,
              chain: chainStakingMetadata.chain
            });
            onNavigate('/transaction/cancel-unstake')();
          }
        };
      }
      return {
        action: _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.STAKE,
        backgroundIconColor: 'green-6',
        icon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
        label: t('Stake more'),
        onClick: () => {
          setStakeStorage({
            ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_STAKE_PARAMS,
            from: address,
            defaultChain: chainStakingMetadata.chain,
            defaultType: chainStakingMetadata.type,
            type: chainStakingMetadata.type,
            chain: chainStakingMetadata.chain
          });
          onNavigate('/transaction/stake')();
        }
      };
    });
  }, [chainStakingMetadata, currentAccount, handleClaimRewardAction, handleWithdrawalAction, onNavigate, setCancelUnStakeStorage, setStakeStorage, setUnStakeStorage, t]);
  const onPreCheck = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.usePreCheckAction)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, false);
  const convertStakingActionToExtrinsicType = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(action => {
    const isPool = nominatorMetadata.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.StakingType.POOLED;
    switch (action) {
      case _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.STAKE:
        return isPool ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_BOND : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_JOIN_POOL;
      case _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.UNSTAKE:
        return isPool ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_UNBOND : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_LEAVE_POOL;
      case _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.WITHDRAW:
        return isPool ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_WITHDRAW : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_POOL_WITHDRAW;
      case _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.CLAIM_REWARD:
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_CLAIM_REWARD;
      case _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_12__.StakingAction.CANCEL_UNSTAKE:
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_CANCEL_UNSTAKE;
      default:
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.UNKNOWN;
    }
  }, [nominatorMetadata.type]);
  const onClickItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((action, onClick) => {
    const _onClick = () => {
      setSelected(action);
      onClick();
    };
    return () => {
      onPreCheck(_onClick, convertStakingActionToExtrinsicType(action))();
    };
  }, [convertStakingActionToExtrinsicType, onPreCheck]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: className,
    closable: true,
    id: MORE_ACTION_MODAL,
    maskClosable: true,
    onCancel: !selected ? onCancel : undefined,
    title: t('Actions'),
    children: actionList.map(item => {
      const actionDisable = !availableActions.includes(item.action);
      const hasAnAction = !!selected;
      const isSelected = item.action === selected;
      const anotherDisable = hasAnAction && !isSelected;
      const disabled = actionDisable || anotherDisable;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('action-more-item', {
          disabled: disabled
        }),
        leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
          backgroundColor: token[item.backgroundIconColor],
          phosphorIcon: item.icon,
          size: "sm",
          weight: "fill"
        }),
        name: item.label,
        onPressItem: disabled ? undefined : onClickItem(item.action, item.onClick),
        rightItem: isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "loading-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {})
        })
      }, item.label);
    })
  });
};
const MoreActionModal = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(Component).withConfig({
  displayName: "MoreActionModal",
  componentId: "sc-17oe78l-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.action-more-item:not(:last-child)': {
      marginBottom: token.marginXS
    },
    '.ant-web3-block-right-item': {
      marginRight: 0
    },
    '.disabled': {
      cursor: 'not-allowed',
      opacity: token.opacityDisable,
      '.ant-web3-block': {
        cursor: 'not-allowed'
      },
      '.ant-web3-block:hover': {
        cursor: 'not-allowed',
        background: token.colorBgSecondary
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreActionModal);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/Staking/StakingDetailModal.tsx":
/*!**************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Staking/StakingDetailModal.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STAKING_DETAIL_MODAL_ID": () => (/* binding */ STAKING_DETAIL_MODAL_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getUnstakingInfo": () => (/* binding */ getUnstakingInfo)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @subwallet/extension-base/constants */ "../extension-base/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-base/koni/api/staking/bonding/utils */ "../extension-base/src/koni/api/staking/bonding/utils.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/constants */ "../extension-base/src/services/chain-service/constants.ts");
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/MetaInfo/MetaInfo */ "../extension-koni-ui/src/components/MetaInfo/MetaInfo.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_MetaInfo_parts_AccountItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/MetaInfo/parts/AccountItem */ "../extension-koni-ui/src/components/MetaInfo/parts/AccountItem.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants_stakingStatusUi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/stakingStatusUi */ "../extension-koni-ui/src/constants/stakingStatusUi.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useFetchChainInfo */ "../extension-koni-ui/src/hooks/screen/common/useFetchChainInfo.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_staking_useGetAccountsByStaking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/staking/useGetAccountsByStaking */ "../extension-koni-ui/src/hooks/screen/staking/useGetAccountsByStaking.ts");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Home_Staking_MoreActionModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Home/Staking/MoreActionModal */ "../extension-koni-ui/src/Popup/Home/Staking/MoreActionModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Transaction_helper_staking_stakingHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Transaction/helper/staking/stakingHandler */ "../extension-koni-ui/src/Popup/Transaction/helper/staking/stakingHandler.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/number/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bignumber.js */ "../../node_modules/bignumber.js/bignumber.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/DotsThree.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowCircleUpRight.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0





























const STAKING_DETAIL_MODAL_ID = 'staking-detail-modal-id';
const getUnstakingInfo = (unstakings, address) => {
  return unstakings.find(item => item.validatorAddress === address);
};
const Component = ({
  chainStakingMetadata,
  className,
  nominatorMetadata,
  rewardItem,
  staking
}) => {
  const {
    expectedReturn,
    minJoinNominationPool,
    minStake,
    unstakingPeriod
  } = chainStakingMetadata;
  const {
    activeStake,
    address,
    chain,
    nominations,
    type,
    unstakings
  } = nominatorMetadata;
  const showingOption = (0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_15__.isShowNominationByValidator)(chain);
  const isRelayChain = _subwallet_extension_base_services_chain_service_constants__WEBPACK_IMPORTED_MODULE_16__._STAKING_CHAIN_GROUP.relay.includes(chain);
  const modalTitle = type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingType.NOMINATED.valueOf() ? (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__.detectTranslate)('Nomination details') : (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_18__.detectTranslate)('Pooled details');
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__.useTheme)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useNavigate)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)();
  const [seeMore, setSeeMore] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__.ModalContext);
  const {
    currentAccount
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.accountState);
  const onClickFooterButton = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_4__.usePreCheckAction)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, false);
  const chainInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_5__["default"])(staking.chain);
  const {
    decimals
  } = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_23__._getChainNativeTokenBasicInfo)(chainInfo);
  const networkPrefix = (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_23__._getChainSubstrateAddressPrefix)(chainInfo);
  const account = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_4__.useGetAccountByAddress)(staking.address);
  const stakingAccounts = (0,_subwallet_extension_koni_ui_hooks_screen_staking_useGetAccountsByStaking__WEBPACK_IMPORTED_MODULE_6__["default"])(chain, type);
  const [, setStakeStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_13__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.STAKE_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STAKE_PARAMS);
  const [, setUnStakeStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_13__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.UN_STAKE_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_UN_STAKE_PARAMS);
  const stakingTypeNameMap = {
    nominated: t('Nominated'),
    pooled: t('Pooled')
  };
  const onClickStakeMoreBtn = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    inactiveModal(STAKING_DETAIL_MODAL_ID);
    setTimeout(() => {
      const address = currentAccount ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.isAccountAll)(currentAccount.address) ? '' : currentAccount.address : '';
      setStakeStorage({
        ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STAKE_PARAMS,
        from: address,
        defaultChain: nominatorMetadata.chain,
        defaultType: nominatorMetadata.type,
        type: nominatorMetadata.type,
        chain: nominatorMetadata.chain
      });
      navigate('/transaction/stake');
    }, 300);
  }, [currentAccount, inactiveModal, navigate, nominatorMetadata, setStakeStorage]);
  const onClickUnstakeBtn = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    inactiveModal(STAKING_DETAIL_MODAL_ID);
    setTimeout(() => {
      const address = currentAccount ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.isAccountAll)(currentAccount.address) ? '' : currentAccount.address : '';
      setUnStakeStorage({
        ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_UN_STAKE_PARAMS,
        from: address,
        type: nominatorMetadata.type,
        chain: nominatorMetadata.chain
      });
      navigate('/transaction/unstake');
    }, 300);
  }, [currentAccount, inactiveModal, navigate, nominatorMetadata, setUnStakeStorage]);
  const onClickMoreAction = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    activeModal(_subwallet_extension_koni_ui_Popup_Home_Staking_MoreActionModal__WEBPACK_IMPORTED_MODULE_7__.MORE_ACTION_MODAL);
    inactiveModal(STAKING_DETAIL_MODAL_ID);
  }, [activeModal, inactiveModal]);
  const footer = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "staking-detail-modal-footer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_26__["default"]
        }),
        onClick: onClickMoreAction,
        schema: "secondary"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
        className: "__action-btn",
        disabled: new bignumber_js__WEBPACK_IMPORTED_MODULE_10__["default"](activeStake || '0').lte(0),
        onClick: onClickFooterButton(onClickUnstakeBtn, staking.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingType.POOLED ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.ExtrinsicType.STAKING_LEAVE_POOL : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.ExtrinsicType.STAKING_UNBOND),
        schema: "secondary",
        children: t('Unstake')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
        className: "__action-btn",
        onClick: onClickFooterButton(onClickStakeMoreBtn, staking.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingType.POOLED ? _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.ExtrinsicType.STAKING_BOND : _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.ExtrinsicType.STAKING_JOIN_POOL),
        children: t('Stake more')
      })]
    });
  };
  const onClickSeeMoreBtn = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    setSeeMore(true);
  }, []);
  const onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    setSeeMore(false);
    inactiveModal(STAKING_DETAIL_MODAL_ID);
  }, [inactiveModal]);
  const getStakingStatus = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(status => {
    if (status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingStatus.EARNING_REWARD) {
      return _subwallet_extension_koni_ui_constants_stakingStatusUi__WEBPACK_IMPORTED_MODULE_3__.StakingStatusUi.active;
    }
    if (status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingStatus.PARTIALLY_EARNING) {
      return _subwallet_extension_koni_ui_constants_stakingStatusUi__WEBPACK_IMPORTED_MODULE_3__.StakingStatusUi.partialEarning;
    }
    if (status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingStatus.WAITING) {
      return _subwallet_extension_koni_ui_constants_stakingStatusUi__WEBPACK_IMPORTED_MODULE_3__.StakingStatusUi.waiting;
    }
    return _subwallet_extension_koni_ui_constants_stakingStatusUi__WEBPACK_IMPORTED_MODULE_3__.StakingStatusUi.inactive;
  }, []);
  const renderUnstakingInfo = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(item => {
    const unstakingData = getUnstakingInfo(unstakings, item.validatorAddress);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
      hasBackgroundWrapper: true,
      spaceSize: 'sm',
      valueColorScheme: 'light',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Account, {
        address: item.validatorAddress,
        label: t((0,_subwallet_extension_base_koni_api_staking_bonding_utils__WEBPACK_IMPORTED_MODULE_15__.getValidatorLabel)(item.chain)),
        name: item.validatorIdentity || (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.toShort)(item.validatorAddress),
        networkPrefix: networkPrefix
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
        decimals: decimals,
        label: t('Active staked'),
        suffix: staking.nativeToken,
        value: item.activeStake || '',
        valueColorSchema: 'gray'
      }, item.validatorAddress), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
        decimals: decimals,
        label: t('Minimum staked'),
        suffix: staking.nativeToken,
        value: item.validatorMinStake || '0',
        valueColorSchema: 'gray'
      }, item.validatorAddress), !!unstakingData && showingOption === 'showByValidator' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Default, {
        className: '__para',
        label: t('Unstaked'),
        labelAlign: unstakingData.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.UnstakingStatus.UNLOCKING.valueOf() ? 'top' : 'center',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__["default"], {
            className: 'common-text text-light-4 text-right',
            decimal: decimals,
            suffix: staking.nativeToken,
            value: unstakingData.claimable
          }), unstakingData.status === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.UnstakingStatus.UNLOCKING.valueOf() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: 'sm-text text-light-4',
            children: (0,_subwallet_extension_koni_ui_Popup_Transaction_helper_staking_stakingHandler__WEBPACK_IMPORTED_MODULE_8__.getWaitingTime)(unstakingData.waitingTime, unstakingData.status, t)
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Status, {
        label: t('Staking status'),
        statusIcon: getStakingStatus(item.status).icon,
        statusName: t(getStakingStatus(item.status).name),
        valueColorSchema: getStakingStatus(item.status).schema
      })]
    }, item.validatorAddress);
  }, [decimals, getStakingStatus, networkPrefix, showingOption, staking.nativeToken, t, unstakings]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: className,
    closable: true,
    footer: footer(),
    id: STAKING_DETAIL_MODAL_ID,
    maskClosable: true,
    onCancel: onCloseModal,
    title: t(modalTitle),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Account, {
        accounts: (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_9__.isAccountAll)(address) ? stakingAccounts : undefined,
        address: address,
        label: t('Account'),
        name: account === null || account === void 0 ? void 0 : account.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].DisplayType, {
        label: t('Staking type'),
        typeName: stakingTypeNameMap[staking.type]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Status, {
        label: t('Staking status'),
        statusIcon: getStakingStatus(nominatorMetadata.status).icon,
        statusName: t(getStakingStatus(nominatorMetadata.status).name),
        valueColorSchema: getStakingStatus(nominatorMetadata.status).schema
      }), !!(rewardItem !== null && rewardItem !== void 0 && rewardItem.totalReward) && parseFloat(rewardItem === null || rewardItem === void 0 ? void 0 : rewardItem.totalReward) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
        decimals: decimals,
        label: t('Total reward'),
        suffix: staking.nativeToken,
        value: (rewardItem === null || rewardItem === void 0 ? void 0 : rewardItem.totalReward) || '0'
      }), !!(rewardItem !== null && rewardItem !== void 0 && rewardItem.unclaimedReward) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
        decimals: decimals,
        label: t('Unclaimed rewards'),
        suffix: staking.nativeToken,
        value: (rewardItem === null || rewardItem === void 0 ? void 0 : rewardItem.unclaimedReward) || '0'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
        decimals: decimals,
        label: t('Total staked'),
        suffix: staking.nativeToken,
        value: String(parseFloat(activeStake) + parseFloat(staking.unlockingBalance || '0'))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
        decimals: decimals,
        label: t('Active staked'),
        suffix: staking.nativeToken,
        value: activeStake
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
        decimals: decimals,
        label: t('Unstaked'),
        suffix: staking.nativeToken,
        value: staking.unlockingBalance || '0'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Chain, {
        chain: staking.chain,
        label: t('Network')
      })]
    }), !seeMore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
      block: true,
      className: 'see-more-btn',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
        iconColor: token.colorTextLight4,
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_29__["default"],
        size: 'sm'
      }),
      onClick: onClickSeeMoreBtn,
      size: 'xs',
      type: 'ghost',
      children: t('See more')
    }), seeMore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
        hasBackgroundWrapper: true,
        spaceSize: 'xs',
        valueColorScheme: 'light',
        children: [!!expectedReturn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
          className: 'expected-return',
          label: t('Estimated annual earnings'),
          suffix: '%',
          value: expectedReturn,
          valueColorSchema: 'even-odd'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
          decimals: decimals,
          label: t('Minimum active'),
          suffix: staking.nativeToken,
          value: nominatorMetadata.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingType.NOMINATED ? minStake : minJoinNominationPool || '0',
          valueColorSchema: 'gray'
        }), !!unstakingPeriod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Default, {
          label: t('Unstaking period'),
          valueColorSchema: 'gray',
          children: (0,_subwallet_extension_koni_ui_Popup_Transaction_helper_staking_stakingHandler__WEBPACK_IMPORTED_MODULE_8__.getUnstakingPeriod)(t, unstakingPeriod)
        })]
      }), showingOption === 'showByValue' && nominations && nominations.length > 0 && (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) !== _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_30__.ALL_ACCOUNT_KEY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
          valueColorScheme: 'light',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
            decimals: decimals,
            label: t('Active staked'),
            suffix: staking.nativeToken,
            value: activeStake
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
          hasBackgroundWrapper: true,
          spaceSize: 'xs',
          valueColorScheme: 'light',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: nominations.map(item => {
              if (isRelayChain && type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_17__.StakingType.NOMINATED) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Default, {
                  className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('__nomination-field', 'stand-alone'),
                  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_parts_AccountItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    address: item.validatorAddress,
                    className: '__nomination-label',
                    name: item.validatorIdentity
                  })
                }, `${item.validatorAddress}-${item.activeStake}-${item.validatorIdentity || item.validatorMinStake || item.chain}`);
              }
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
                className: '__nomination-field',
                decimals: decimals,
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_parts_AccountItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  address: item.validatorAddress,
                  className: '__nomination-label',
                  name: item.validatorIdentity
                }),
                suffix: staking.nativeToken,
                value: item.activeStake || '',
                valueColorSchema: 'gray'
              }, `${item.validatorAddress}-${item.activeStake}-${item.validatorIdentity || item.validatorMinStake || item.chain}`);
            })
          })
        })]
      }), (showingOption === 'showByValue' || showingOption === 'mixed') && unstakings && unstakings.length > 0 && (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) !== _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_30__.ALL_ACCOUNT_KEY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
          valueColorScheme: 'light',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
            decimals: decimals,
            label: t('Unstaked'),
            suffix: staking.nativeToken,
            value: staking.unlockingBalance || '0'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
          hasBackgroundWrapper: true,
          spaceSize: 'xs',
          valueColorScheme: 'light',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: unstakings.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_MetaInfo_MetaInfo__WEBPACK_IMPORTED_MODULE_0__["default"].Number, {
              decimals: decimals,
              label: (0,_subwallet_extension_koni_ui_Popup_Transaction_helper_staking_stakingHandler__WEBPACK_IMPORTED_MODULE_8__.getWaitingTime)(item.waitingTime, item.status, t) ? t((0,_subwallet_extension_koni_ui_Popup_Transaction_helper_staking_stakingHandler__WEBPACK_IMPORTED_MODULE_8__.getWaitingTime)(item.waitingTime, item.status, t)) : t('Withdraw'),
              suffix: staking.nativeToken,
              value: item.claimable || '',
              valueColorSchema: 'gray'
            }, `${item.validatorAddress || item.chain}-${item.status}-${item.claimable}`))
          })
        })]
      }), (showingOption === 'showByValidator' || showingOption === 'mixed') && nominations && nominations.length > 0 && (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) !== _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_30__.ALL_ACCOUNT_KEY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: nominations && nominations.length && nominations.map(item => renderUnstakingInfo(item))
      })]
    })]
  });
};
const StakingDetailModal = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__["default"])(Component).withConfig({
  displayName: "StakingDetailModal",
  componentId: "sc-1al54tx-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.expected-return div:first-child': {
      flex: 2
    },
    '.staking-detail-modal-footer': {
      display: 'flex',
      alignItems: 'center'
    },
    '.__action-btn': {
      flex: 1
    },
    '.__slash': {
      marginLeft: token.marginXXS,
      marginRight: token.marginXXS
    },
    '.__inflation-text': {
      marginLeft: token.marginXXS,
      color: token.colorTextLight4
    },
    '.__expected-return, .__inflation': {
      display: 'inline-flex'
    },
    '.__inflation': {
      color: token.colorTextLight4
    },
    '.__nomination-field': {
      '> .__col': {
        overflow: 'hidden'
      },
      '&.stand-alone': {
        '.__col.-to-right': {
          flexGrow: 0
        }
      }
    },
    '.__nomination-label > .__col.-to-right': {
      flex: 'initial',
      overflow: 'hidden',
      alignItems: 'flex-start',
      '.__account-item': {
        width: '100%'
      },
      '.__account-name': {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    },
    '.see-more-btn': {
      marginTop: token.margin
    },
    '.ant-sw-modal-body': {
      paddingBottom: 0
    },
    '.ant-sw-modal-footer': {
      border: 'none'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StakingDetailModal);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/Staking/index.tsx":
/*!*************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Staking/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Staking": () => (/* binding */ Staking),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/activity-indicator/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowClockwise.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlusCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Database.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var _MoreActionModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MoreActionModal */ "../extension-koni-ui/src/Popup/Home/Staking/MoreActionModal.tsx");
/* harmony import */ var _StakingDetailModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StakingDetailModal */ "../extension-koni-ui/src/Popup/Home/Staking/StakingDetailModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


















const FILTER_MODAL_ID = 'staking-filter-modal';
var FilterValue;
(function (FilterValue) {
  FilterValue["NOMINATED"] = "nominated";
  FilterValue["POOLED"] = "pooled";
})(FilterValue || (FilterValue = {}));
const rightIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
  size: "sm",
  type: "phosphor"
});
const reloadIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_13__["default"],
  size: "sm",
  type: "phosphor"
});
function Component({
  className = ''
}) {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetCurrentPage)('/home/staking');
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useNavigate)();
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__.ModalContext);
  const {
    data: stakingItems,
    priceMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetStakingList)();
  const {
    currentAccount
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.accountState);
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useFilterModal)(FILTER_MODAL_ID);
  const [address] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address);
  const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(undefined);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
  const notify = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useNotification)();
  const [, setStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_7__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.STAKE_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_STAKE_PARAMS);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    const result = stakingItems.map(item => ({
      ...item,
      price: priceMap[item.staking.chain] || 0
    }));
    return result.sort(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.sortStakingByValue);
  }, [priceMap, stakingItems]);
  const FILTER_OPTIONS = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => [{
    label: t('Nominated'),
    value: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_16__.StakingType.NOMINATED
  }, {
    label: t('Pooled'),
    value: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_16__.StakingType.POOLED
  }], [t]);
  const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    return item => {
      if (!selectedFilters.length) {
        return true;
      }
      for (const filter of selectedFilters) {
        if (filter === FilterValue.NOMINATED) {
          if (item.staking.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_16__.StakingType.NOMINATED) {
            return true;
          }
        } else if (filter === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_16__.StakingType.POOLED) {
          if (item.staking.type === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_16__.StakingType.POOLED) {
            return true;
          }
        }
      }
      return false;
    };
  }, [selectedFilters]);
  const onClickActionBtn = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);
  const onClickRightIcon = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(item => {
    setSelectedItem(item);
    activeModal(_MoreActionModal__WEBPACK_IMPORTED_MODULE_8__.MORE_ACTION_MODAL);
  }, [activeModal]);
  const onClickItem = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(item => {
    setSelectedItem(item);
    setTimeout(() => {
      activeModal(_StakingDetailModal__WEBPACK_IMPORTED_MODULE_9__.STAKING_DETAIL_MODAL_ID);
    }, 100);
  }, [activeModal]);
  const preCheck = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.usePreCheckAction)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, false);
  const onClickStakeMore = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    const address = currentAccount ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.isAccountAll)(currentAccount.address) ? '' : currentAccount.address : '';
    setStorage({
      ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_STAKE_PARAMS,
      from: address
    });
    navigate('/transaction/stake');
  }, [currentAccount, navigate, setStorage]);
  const subHeaderButton = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => [{
    icon: reloadIcon,
    disabled: loading,
    size: 'sm',
    onClick: () => {
      setLoading(true);
      notify({
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
          size: 32
        }),
        style: {
          top: 210
        },
        direction: 'vertical',
        duration: 1.8,
        closable: false,
        message: t('Reloading')
      });
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__.reloadCron)({
        data: 'staking'
      }).then(() => {
        setLoading(false);
      }).catch(console.error);
    }
  }, {
    icon: rightIcon,
    onClick: preCheck(onClickStakeMore, _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_16__.ExtrinsicType.STAKING_BOND)
  }], [loading, preCheck, notify, t, onClickStakeMore]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(item => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.SwStakingItem, {
      className: "staking-item",
      decimals: item.decimals,
      onClickItem: onClickItem,
      onClickRightIcon: onClickRightIcon,
      priceMap: priceMap,
      stakingData: item
    }, `${item.staking.chain}-${item.staking.type}-${item.staking.address}`);
  }, [onClickItem, onClickRightIcon, priceMap]);
  const searchFunction = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((item, searchText) => {
    const searchTextLowerCase = searchText.toLowerCase();
    return item.staking.nativeToken.toLowerCase().includes(searchTextLowerCase);
  }, []);
  const emptyButtonProps = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    return {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
        weight: "fill"
      }),
      children: t('Start staking'),
      shape: 'circle',
      size: 'xs',
      onClick: preCheck(onClickStakeMore, _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_16__.ExtrinsicType.STAKING_BOND)
    };
  }, [onClickStakeMore, preCheck, t]);
  const emptyStakingList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      buttonProps: emptyButtonProps,
      emptyMessage: t('You can stake in-app easily'),
      emptyTitle: t('No staking found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"]
    });
  }, [emptyButtonProps, t]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if ((currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) !== address) {
      inactiveModal(_MoreActionModal__WEBPACK_IMPORTED_MODULE_8__.MORE_ACTION_MODAL);
      inactiveModal(_StakingDetailModal__WEBPACK_IMPORTED_MODULE_9__.STAKING_DETAIL_MODAL_ID);
      setSelectedItem(undefined);
    }
  }, [address, currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, inactiveModal, navigate]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `staking ${className}`,
    resolve: dataContext.awaitStores(['staking', 'price']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: false,
      subHeaderIcons: subHeaderButton,
      subHeaderPaddingVertical: true,
      title: t('Staking'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Section, {
        actionBtnIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"],
          size: "sm"
        }),
        enableSearchInput: true,
        filterBy: filterFunction,
        list: items,
        onClickActionBtn: onClickActionBtn,
        renderItem: renderItem,
        renderWhenEmpty: emptyStakingList,
        searchFunction: searchFunction,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search token'),
        showActionBtn: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.FilterModal, {
        id: FILTER_MODAL_ID,
        onApplyFilter: onApplyFilter,
        onCancel: onCloseFilterModal,
        onChangeOption: onChangeFilterOption,
        optionSelectionMap: filterSelectionMap,
        options: FILTER_OPTIONS
      }), !!(selectedItem && selectedItem.nominatorMetadata && selectedItem.chainStakingMetadata) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StakingDetailModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        chainStakingMetadata: selectedItem.chainStakingMetadata,
        nominatorMetadata: selectedItem.nominatorMetadata,
        rewardItem: selectedItem.reward,
        staking: selectedItem.staking
      }), !!(selectedItem && selectedItem.nominatorMetadata && selectedItem.chainStakingMetadata) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MoreActionModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        chainStakingMetadata: selectedItem.chainStakingMetadata,
        nominatorMetadata: selectedItem.nominatorMetadata,
        reward: selectedItem.reward,
        staking: selectedItem.staking
      })]
    })
  });
}
const Staking = (0,styled_components__WEBPACK_IMPORTED_MODULE_22__["default"])(Component).withConfig({
  displayName: "Staking",
  componentId: "sc-18loehm-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    color: token.colorTextLight1,
    fontSize: token.fontSizeLG,
    '.ant-sw-screen-layout-body': {
      display: 'flex'
    },
    '.ant-sw-list-section': {
      flex: 1
    },
    '.staking__filter_option': {
      width: '100%'
    },
    '.staking__filter_option_wrapper': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.marginLG
    },
    '.staking-item': {
      marginBottom: token.marginXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Staking);

/***/ }),

/***/ "../extension-koni-ui/src/hooks/screen/staking/useGetAccountsByStaking.ts":
/*!********************************************************************************!*\
  !*** ../extension-koni-ui/src/hooks/screen/staking/useGetAccountsByStaking.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGetAccountsByStaking)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




function useGetAccountsByStaking(chain, stakingType) {
  const stakingItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.staking.stakingMap);
  const accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.accountState.accounts);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const accountInfos = [];
    stakingItems.forEach(stakingItem => {
      if (stakingItem.chain === chain && stakingItem.type === stakingType) {
        accountInfos.push({
          address: stakingItem.address
        });
      }
    });
    accountInfos.forEach(accountInfo => {
      const accountJson = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_0__.findAccountByAddress)(accounts, accountInfo.address);
      if (accountJson) {
        accountInfo.name = accountJson.name;
        accountInfo.type = accountJson.type;
      }
    });
    return accountInfos;
  }, [accounts, chain, stakingItems, stakingType]);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9TdGFraW5nX2luZGV4X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUU2TDtBQUNnQjtBQUNzRztBQUNuTTtBQUNUO0FBR3JDO0FBQzBDO0FBQ2hGO0FBQ29FO0FBQ3RCO0FBQzNCO0FBQ0E7QUFDTTtBQUNQO0FBQUE7QUFTdkMsTUFBTTRDLGlCQUFpQixHQUFHLG1CQUFtQjtBQVVwRCxNQUFNQyxTQUEwQixHQUFJQyxLQUFZLElBQUs7RUFDbkQsTUFBTTtJQUFFQyxvQkFBb0I7SUFBRUMsU0FBUztJQUFFQyxpQkFBaUI7SUFBRUM7RUFBTyxDQUFDLEdBQUdKLEtBQUs7RUFFNUUsTUFBTUssUUFBUSxHQUFHWCw2REFBVyxFQUFFO0VBQzlCLE1BQU07SUFBRVk7RUFBTSxDQUFDLEdBQUdWLDJEQUFRLEVBQVc7RUFDckMsTUFBTTtJQUFFVztFQUFFLENBQUMsR0FBR2QsOERBQWMsRUFBRTtFQUU5QixNQUFNO0lBQUVlO0VBQWMsQ0FBQyxHQUFHbEIsaURBQVUsQ0FBQ1gsOERBQVksQ0FBQztFQUVsRCxNQUFNO0lBQUU4QixjQUFjO0lBQUVDO0VBQWEsQ0FBQyxHQUFHckMsK0VBQVcsQ0FBRXNDLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxZQUFZLENBQUM7RUFFbkYsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEIsK0NBQVEsRUFBNkI7RUFDckUsTUFBTSxHQUFHdUIsZUFBZSxDQUFDLEdBQUdsQiw0REFBZSxDQUFDN0IscUZBQWlCLEVBQUVILHdGQUFvQixDQUFDO0VBQ3BGLE1BQU0sR0FBR21ELGlCQUFpQixDQUFDLEdBQUduQiw0REFBZSxDQUFDNUIsd0ZBQW9CLEVBQUVILDJGQUF1QixDQUFDO0VBQzVGLE1BQU0sR0FBR21ELHVCQUF1QixDQUFDLEdBQUdwQiw0REFBZSxDQUFDcEMsK0ZB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O0VBRS9FLE9BQU94Uiw4Q0FBTyxDQUFDLE1BQU07SUFDbkIsTUFBTXlSLFlBQStCLEdBQUcsRUFBRTtJQUUxQ3ZELFlBQVksQ0FBQ3dELE9BQU8sQ0FBRUMsV0FBVyxJQUFLO01BQ3BDLElBQUlBLFdBQVcsQ0FBQzNQLEtBQUssS0FBS0EsS0FBSyxJQUFJMlAsV0FBVyxDQUFDdFAsSUFBSSxLQUFLVyxXQUFXLEVBQUU7UUFDbkV5TyxZQUFZLENBQUNHLElBQUksQ0FBQztVQUFFOU8sT0FBTyxFQUFFNk8sV0FBVyxDQUFDN087UUFBUSxDQUFDLENBQUM7TUFDckQ7SUFDRixDQUFDLENBQUM7SUFFRjJPLFlBQVksQ0FBQ0MsT0FBTyxDQUFFRyxXQUFXLElBQUs7TUFDcEMsTUFBTUMsV0FBVyxHQUFHUix3RkFBb0IsQ0FBQ0UsUUFBUSxFQUFFSyxXQUFXLENBQUMvTyxPQUFPLENBQUM7TUFFdkUsSUFBSWdQLFdBQVcsRUFBRTtRQUNmRCxXQUFXLENBQUMzRyxJQUFJLEdBQUc0RyxXQUFXLENBQUM1RyxJQUFJO1FBQ25DMkcsV0FBVyxDQUFDeFAsSUFBSSxHQUFHeVAsV0FBVyxDQUFDelAsSUFBSTtNQUNyQztJQUNGLENBQUMsQ0FBQztJQUVGLE9BQU9vUCxZQUFZO0VBQ3JCLENBQUMsRUFBRSxDQUFDRCxRQUFRLEVBQUV4UCxLQUFLLEVBQUVrTSxZQUFZLEVBQUVsTCxXQUFXLENBQUMsQ0FBQztBQUNsRCIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvU3Rha2luZy9Nb3JlQWN0aW9uTW9kYWwudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvU3Rha2luZy9TdGFraW5nRGV0YWlsTW9kYWwudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvU3Rha2luZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvaG9va3Mvc2NyZWVuL3N0YWtpbmcvdXNlR2V0QWNjb3VudHNCeVN0YWtpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IENoYWluU3Rha2luZ01ldGFkYXRhLCBFeHRyaW5zaWNUeXBlLCBOb21pbmF0b3JNZXRhZGF0YSwgUmVxdWVzdFN0YWtlV2l0aGRyYXdhbCwgU3Rha2luZ0l0ZW0sIFN0YWtpbmdSZXdhcmRJdGVtLCBTdGFraW5nVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3Rha2luZ0F2YWlsYWJsZUFjdGlvbnNCeUNoYWluLCBnZXRTdGFraW5nQXZhaWxhYmxlQWN0aW9uc0J5Tm9taW5hdG9yLCBnZXRXaXRoZHJhd2FsSW5mbywgaXNBY3Rpb25Gcm9tVmFsaWRhdG9yLCBTdGFraW5nQWN0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9rb25pL2FwaS9zdGFraW5nL2JvbmRpbmcvdXRpbHMnO1xuaW1wb3J0IHsgQ0FOQ0VMX1VOX1NUQUtFX1RSQU5TQUNUSU9OLCBDTEFJTV9SRVdBUkRfVFJBTlNBQ1RJT04sIERFRkFVTFRfQ0FOQ0VMX1VOX1NUQUtFX1BBUkFNUywgREVGQVVMVF9DTEFJTV9SRVdBUkRfUEFSQU1TLCBERUZBVUxUX1NUQUtFX1BBUkFNUywgREVGQVVMVF9VTl9TVEFLRV9QQVJBTVMsIERFRkFVTFRfV0lUSERSQVdfUEFSQU1TLCBTVEFLRV9UUkFOU0FDVElPTiwgVU5fU1RBS0VfVFJBTlNBQ1RJT04sIFdJVEhEUkFXX1RSQU5TQUNUSU9OIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlSGFuZGxlU3VibWl0VHJhbnNhY3Rpb24sIHVzZVByZUNoZWNrQWN0aW9uLCB1c2VTZWxlY3RvciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgc3VibWl0U3Rha2VDbGFpbVJld2FyZCwgc3VibWl0U3Rha2VXaXRoZHJhd2FsIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgR2xvYmFsVG9rZW4gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3RoZW1lcyc7XG5pbXBvcnQgeyBQaG9zcGhvckljb24sIFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBpc0FjY291bnRBbGwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yLCBCYWNrZ3JvdW5kSWNvbiwgTW9kYWxDb250ZXh0LCBTZXR0aW5nSXRlbSwgU3dNb2RhbCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQXJyb3dBcmNMZWZ0LCBBcnJvd0NpcmNsZURvd24sIE1pbnVzQ2lyY2xlLCBQbHVzQ2lyY2xlLCBXYWxsZXQgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAndXNlaG9va3MtdHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcyAmIHtcbiAgc3Rha2luZzogU3Rha2luZ0l0ZW07XG4gIHJld2FyZD86IFN0YWtpbmdSZXdhcmRJdGVtO1xuICBjaGFpblN0YWtpbmdNZXRhZGF0YTogQ2hhaW5TdGFraW5nTWV0YWRhdGE7XG4gIG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IE1PUkVfQUNUSU9OX01PREFMID0gJ21vcmUtYWN0aW9uLW1vZGFsJztcblxudHlwZSBBY3Rpb25MaXN0VHlwZSA9IHtcbiAgYmFja2dyb3VuZEljb25Db2xvcjoga2V5b2YgR2xvYmFsVG9rZW47XG4gIGljb246IFBob3NwaG9ySWNvbjtcbiAgbGFiZWw6IHN0cmluZztcbiAgYWN0aW9uOiBTdGFraW5nQWN0aW9uO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGFpblN0YWtpbmdNZXRhZGF0YSwgY2xhc3NOYW1lLCBub21pbmF0b3JNZXRhZGF0YSwgcmV3YXJkIH0gPSBwcm9wcztcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCB7IGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICBjb25zdCB7IGN1cnJlbnRBY2NvdW50LCBpc0FsbEFjY291bnQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudFN0YXRlKTtcblxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPFN0YWtpbmdBY3Rpb24gfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IFssIHNldFN0YWtlU3RvcmFnZV0gPSB1c2VMb2NhbFN0b3JhZ2UoU1RBS0VfVFJBTlNBQ1RJT04sIERFRkFVTFRfU1RBS0VfUEFSQU1TKTtcbiAgY29uc3QgWywgc2V0VW5TdGFrZVN0b3JhZ2VdID0gdXNlTG9jYWxTdG9yYWdlKFVOX1NUQUtFX1RSQU5TQUNUSU9OLCBERUZBVUxUX1VOX1NUQUtFX1BBUkFNUyk7XG4gIGNvbnN0IFssIHNldENhbmNlbFVuU3Rha2VTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZShDQU5DRUxfVU5fU1RBS0VfVFJBTlNBQ1RJT04sIERFRkFVTFRfQ0FOQ0VMX1VOX1NUQUtFX1BBUkFNUyk7XG4gIGNvbnN0IFssIHNldFdpdGhkcmF3U3RvcmFnZV0gPSB1c2VMb2NhbFN0b3JhZ2UoV0lUSERSQVdfVFJBTlNBQ1RJT04sIERFRkFVTFRfV0lUSERSQVdfUEFSQU1TKTtcbiAgY29uc3QgWywgc2V0Q2xhaW1SZXdhcmRTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZShDTEFJTV9SRVdBUkRfVFJBTlNBQ1RJT04sIERFRkFVTFRfQ0xBSU1fUkVXQVJEX1BBUkFNUyk7XG5cbiAgY29uc3Qgb25DYW5jZWwgPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PiB7XG4gICAgICBpbmFjdGl2ZU1vZGFsKE1PUkVfQUNUSU9OX01PREFMKTtcbiAgICB9LFxuICAgIFtpbmFjdGl2ZU1vZGFsXVxuICApO1xuXG4gIGNvbnN0IG9uRG9uZVRyYW5zYWN0aW9uID0gdXNlQ2FsbGJhY2soKGV4dHJpbnNpY0hhc2g6IHN0cmluZykgPT4ge1xuICAgIGlmIChjaGFpblN0YWtpbmdNZXRhZGF0YSkge1xuICAgICAgbmF2aWdhdGUoYC90cmFuc2FjdGlvbi1kb25lL3N1YnN0cmF0ZS8ke2NoYWluU3Rha2luZ01ldGFkYXRhLmNoYWlufS8ke2V4dHJpbnNpY0hhc2h9YCk7XG4gICAgfVxuICB9LCBbY2hhaW5TdGFraW5nTWV0YWRhdGEsIG5hdmlnYXRlXSk7XG5cbiAgY29uc3QgeyBvbkVycm9yLCBvblN1Y2Nlc3MgfSA9IHVzZUhhbmRsZVN1Ym1pdFRyYW5zYWN0aW9uKG9uRG9uZVRyYW5zYWN0aW9uKTtcblxuICBjb25zdCBoYW5kbGVXaXRoZHJhd2FsQWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghbm9taW5hdG9yTWV0YWRhdGEpIHtcbiAgICAgIHNldFNlbGVjdGVkKHVuZGVmaW5lZCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBbGxBY2NvdW50KSB7XG4gICAgICBzZXRTZWxlY3RlZCh1bmRlZmluZWQpO1xuXG4gICAgICBzZXRXaXRoZHJhd1N0b3JhZ2Uoe1xuICAgICAgICAuLi5ERUZBVUxUX1dJVEhEUkFXX1BBUkFNUyxcbiAgICAgICAgdHlwZTogbm9taW5hdG9yTWV0YWRhdGEudHlwZSxcbiAgICAgICAgY2hhaW46IG5vbWluYXRvck1ldGFkYXRhLmNoYWluXG4gICAgICB9KTtcblxuICAgICAgbmF2aWdhdGUoJy90cmFuc2FjdGlvbi93aXRoZHJhdycpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdW5zdGFraW5nSW5mbyA9IGdldFdpdGhkcmF3YWxJbmZvKG5vbWluYXRvck1ldGFkYXRhKTtcblxuICAgIGlmICghdW5zdGFraW5nSW5mbykge1xuICAgICAgc2V0U2VsZWN0ZWQodW5kZWZpbmVkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtczogUmVxdWVzdFN0YWtlV2l0aGRyYXdhbCA9IHtcbiAgICAgIHVuc3Rha2luZ0luZm8sXG4gICAgICBjaGFpbjogbm9taW5hdG9yTWV0YWRhdGEuY2hhaW4sXG4gICAgICBub21pbmF0b3JNZXRhZGF0YVxuICAgIH07XG5cbiAgICBpZiAoaXNBY3Rpb25Gcm9tVmFsaWRhdG9yKG5vbWluYXRvck1ldGFkYXRhLnR5cGUsIG5vbWluYXRvck1ldGFkYXRhLmNoYWluKSkge1xuICAgICAgcGFyYW1zLnZhbGlkYXRvckFkZHJlc3MgPSB1bnN0YWtpbmdJbmZvLnZhbGlkYXRvckFkZHJlc3M7XG4gICAgfVxuXG4gICAgc3VibWl0U3Rha2VXaXRoZHJhd2FsKHBhcmFtcylcbiAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgIC5jYXRjaChvbkVycm9yKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZCh1bmRlZmluZWQpO1xuICAgICAgfSk7XG4gIH0sIFtpc0FsbEFjY291bnQsIG5hdmlnYXRlLCBub21pbmF0b3JNZXRhZGF0YSwgb25FcnJvciwgb25TdWNjZXNzLCBzZXRXaXRoZHJhd1N0b3JhZ2VdKTtcblxuICBjb25zdCBoYW5kbGVDbGFpbVJld2FyZEFjdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIW5vbWluYXRvck1ldGFkYXRhKSB7XG4gICAgICBzZXRTZWxlY3RlZCh1bmRlZmluZWQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vbWluYXRvck1ldGFkYXRhLnR5cGUgPT09IFN0YWtpbmdUeXBlLlBPT0xFRCB8fCBpc0FsbEFjY291bnQpIHtcbiAgICAgIHNldFNlbGVjdGVkKHVuZGVmaW5lZCk7XG4gICAgICBjb25zdCBhZGRyZXNzID0gY3VycmVudEFjY291bnQgPyBpc0FjY291bnRBbGwoY3VycmVudEFjY291bnQuYWRkcmVzcykgPyAnJyA6IGN1cnJlbnRBY2NvdW50LmFkZHJlc3MgOiAnJztcblxuICAgICAgc2V0Q2xhaW1SZXdhcmRTdG9yYWdlKHtcbiAgICAgICAgLi4uREVGQVVMVF9DTEFJTV9SRVdBUkRfUEFSQU1TLFxuICAgICAgICBmcm9tOiBhZGRyZXNzLFxuICAgICAgICB0eXBlOiBub21pbmF0b3JNZXRhZGF0YS50eXBlLFxuICAgICAgICBjaGFpbjogbm9taW5hdG9yTWV0YWRhdGEuY2hhaW5cbiAgICAgIH0pO1xuICAgICAgbmF2aWdhdGUoJy90cmFuc2FjdGlvbi9jbGFpbS1yZXdhcmQnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN1Ym1pdFN0YWtlQ2xhaW1SZXdhcmQoe1xuICAgICAgYWRkcmVzczogbm9taW5hdG9yTWV0YWRhdGEuYWRkcmVzcyxcbiAgICAgIGNoYWluOiBub21pbmF0b3JNZXRhZGF0YS5jaGFpbixcbiAgICAgIHN0YWtpbmdUeXBlOiBub21pbmF0b3JNZXRhZGF0YS50eXBlLFxuICAgICAgdW5jbGFpbWVkUmV3YXJkOiByZXdhcmQ/LnVuY2xhaW1lZFJld2FyZFxuICAgIH0pXG4gICAgICAudGhlbihvblN1Y2Nlc3MpXG4gICAgICAuY2F0Y2gob25FcnJvcilcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWQodW5kZWZpbmVkKTtcbiAgICAgIH0pO1xuICB9LCBbY3VycmVudEFjY291bnQsIGlzQWxsQWNjb3VudCwgbmF2aWdhdGUsIG5vbWluYXRvck1ldGFkYXRhLCBvbkVycm9yLCBvblN1Y2Nlc3MsIHJld2FyZD8udW5jbGFpbWVkUmV3YXJkLCBzZXRDbGFpbVJld2FyZFN0b3JhZ2VdKTtcblxuICBjb25zdCBhdmFpbGFibGVBY3Rpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFub21pbmF0b3JNZXRhZGF0YSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRTdGFraW5nQXZhaWxhYmxlQWN0aW9uc0J5Tm9taW5hdG9yKG5vbWluYXRvck1ldGFkYXRhLCByZXdhcmQ/LnVuY2xhaW1lZFJld2FyZCk7XG4gIH0sIFtub21pbmF0b3JNZXRhZGF0YSwgcmV3YXJkPy51bmNsYWltZWRSZXdhcmRdKTtcblxuICBjb25zdCBvbk5hdmlnYXRlID0gdXNlQ2FsbGJhY2soKHVybDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldFNlbGVjdGVkKHVuZGVmaW5lZCk7XG4gICAgICBuYXZpZ2F0ZSh1cmwpO1xuICAgIH07XG4gIH0sIFtuYXZpZ2F0ZV0pO1xuXG4gIGNvbnN0IGFjdGlvbkxpc3Q6IEFjdGlvbkxpc3RUeXBlW10gPSB1c2VNZW1vKCgpOiBBY3Rpb25MaXN0VHlwZVtdID0+IHtcbiAgICBpZiAoIWNoYWluU3Rha2luZ01ldGFkYXRhKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uTGlzdEJ5Q2hhaW4gPSBnZXRTdGFraW5nQXZhaWxhYmxlQWN0aW9uc0J5Q2hhaW4oY2hhaW5TdGFraW5nTWV0YWRhdGEuY2hhaW4sIGNoYWluU3Rha2luZ01ldGFkYXRhLnR5cGUpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBjdXJyZW50QWNjb3VudCA/IGlzQWNjb3VudEFsbChjdXJyZW50QWNjb3VudC5hZGRyZXNzKSA/ICcnIDogY3VycmVudEFjY291bnQuYWRkcmVzcyA6ICcnO1xuXG4gICAgcmV0dXJuIGFjdGlvbkxpc3RCeUNoYWluLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICBpZiAoYWN0aW9uID09PSBTdGFraW5nQWN0aW9uLlVOU1RBS0UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3Rpb246IFN0YWtpbmdBY3Rpb24uVU5TVEFLRSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSWNvbkNvbG9yOiAnbWFnZW50YS02JyxcbiAgICAgICAgICBpY29uOiBNaW51c0NpcmNsZSxcbiAgICAgICAgICBsYWJlbDogdCgnVW5zdGFrZScpLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHNldFVuU3Rha2VTdG9yYWdlKHtcbiAgICAgICAgICAgICAgLi4uREVGQVVMVF9VTl9TVEFLRV9QQVJBTVMsXG4gICAgICAgICAgICAgIGZyb206IGFkZHJlc3MsXG4gICAgICAgICAgICAgIHR5cGU6IGNoYWluU3Rha2luZ01ldGFkYXRhLnR5cGUsXG4gICAgICAgICAgICAgIGNoYWluOiBjaGFpblN0YWtpbmdNZXRhZGF0YS5jaGFpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvbk5hdmlnYXRlKCcvdHJhbnNhY3Rpb24vdW5zdGFrZScpKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFN0YWtpbmdBY3Rpb24uV0lUSERSQVcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3Rpb246IFN0YWtpbmdBY3Rpb24uV0lUSERSQVcsXG4gICAgICAgICAgYmFja2dyb3VuZEljb25Db2xvcjogJ2dlZWtibHVlLTYnLFxuICAgICAgICAgIGljb246IEFycm93Q2lyY2xlRG93bixcbiAgICAgICAgICBsYWJlbDogdCgnV2l0aGRyYXcgdW5zdGFrZWQgZnVuZHMnKSxcbiAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVXaXRoZHJhd2FsQWN0aW9uXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gU3Rha2luZ0FjdGlvbi5DTEFJTV9SRVdBUkQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3Rpb246IFN0YWtpbmdBY3Rpb24uQ0xBSU1fUkVXQVJELFxuICAgICAgICAgIGJhY2tncm91bmRJY29uQ29sb3I6ICdncmVlbi03JyxcbiAgICAgICAgICBpY29uOiBXYWxsZXQsXG4gICAgICAgICAgbGFiZWw6IHQoJ0NsYWltIHJld2FyZHMnKSxcbiAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVDbGFpbVJld2FyZEFjdGlvblxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFN0YWtpbmdBY3Rpb24uQ0FOQ0VMX1VOU1RBS0UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3Rpb246IFN0YWtpbmdBY3Rpb24uQ0FOQ0VMX1VOU1RBS0UsXG4gICAgICAgICAgYmFja2dyb3VuZEljb25Db2xvcjogJ3B1cnBsZS04JyxcbiAgICAgICAgICBpY29uOiBBcnJvd0FyY0xlZnQsXG4gICAgICAgICAgbGFiZWw6IHQoJ0NhbmNlbCB1bnN0YWtpbmcnKSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBzZXRDYW5jZWxVblN0YWtlU3RvcmFnZSh7XG4gICAgICAgICAgICAgIC4uLkRFRkFVTFRfQ0FOQ0VMX1VOX1NUQUtFX1BBUkFNUyxcbiAgICAgICAgICAgICAgZnJvbTogYWRkcmVzcyxcbiAgICAgICAgICAgICAgdHlwZTogY2hhaW5TdGFraW5nTWV0YWRhdGEudHlwZSxcbiAgICAgICAgICAgICAgY2hhaW46IGNoYWluU3Rha2luZ01ldGFkYXRhLmNoYWluXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9uTmF2aWdhdGUoJy90cmFuc2FjdGlvbi9jYW5jZWwtdW5zdGFrZScpKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3Rpb246IFN0YWtpbmdBY3Rpb24uU1RBS0UsXG4gICAgICAgIGJhY2tncm91bmRJY29uQ29sb3I6ICdncmVlbi02JyxcbiAgICAgICAgaWNvbjogUGx1c0NpcmNsZSxcbiAgICAgICAgbGFiZWw6IHQoJ1N0YWtlIG1vcmUnKSxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIHNldFN0YWtlU3RvcmFnZSh7XG4gICAgICAgICAgICAuLi5ERUZBVUxUX1NUQUtFX1BBUkFNUyxcbiAgICAgICAgICAgIGZyb206IGFkZHJlc3MsXG4gICAgICAgICAgICBkZWZhdWx0Q2hhaW46IGNoYWluU3Rha2luZ01ldGFkYXRhLmNoYWluLFxuICAgICAgICAgICAgZGVmYXVsdFR5cGU6IGNoYWluU3Rha2luZ01ldGFkYXRhLnR5cGUsXG4gICAgICAgICAgICB0eXBlOiBjaGFpblN0YWtpbmdNZXRhZGF0YS50eXBlLFxuICAgICAgICAgICAgY2hhaW46IGNoYWluU3Rha2luZ01ldGFkYXRhLmNoYWluXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb25OYXZpZ2F0ZSgnL3RyYW5zYWN0aW9uL3N0YWtlJykoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwgW2NoYWluU3Rha2luZ01ldGFkYXRhLCBjdXJyZW50QWNjb3VudCwgaGFuZGxlQ2xhaW1SZXdhcmRBY3Rpb24sIGhhbmRsZVdpdGhkcmF3YWxBY3Rpb24sIG9uTmF2aWdhdGUsIHNldENhbmNlbFVuU3Rha2VTdG9yYWdlLCBzZXRTdGFrZVN0b3JhZ2UsIHNldFVuU3Rha2VTdG9yYWdlLCB0XSk7XG5cbiAgY29uc3Qgb25QcmVDaGVjayA9IHVzZVByZUNoZWNrQWN0aW9uKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzLCBmYWxzZSk7XG5cbiAgY29uc3QgY29udmVydFN0YWtpbmdBY3Rpb25Ub0V4dHJpbnNpY1R5cGUgPSB1c2VDYWxsYmFjaygoYWN0aW9uOiBTdGFraW5nQWN0aW9uKTogRXh0cmluc2ljVHlwZSA9PiB7XG4gICAgY29uc3QgaXNQb29sID0gbm9taW5hdG9yTWV0YWRhdGEudHlwZSA9PT0gU3Rha2luZ1R5cGUuUE9PTEVEO1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgU3Rha2luZ0FjdGlvbi5TVEFLRTpcbiAgICAgICAgcmV0dXJuIGlzUG9vbCA/IEV4dHJpbnNpY1R5cGUuU1RBS0lOR19CT05EIDogRXh0cmluc2ljVHlwZS5TVEFLSU5HX0pPSU5fUE9PTDtcbiAgICAgIGNhc2UgU3Rha2luZ0FjdGlvbi5VTlNUQUtFOlxuICAgICAgICByZXR1cm4gaXNQb29sID8gRXh0cmluc2ljVHlwZS5TVEFLSU5HX1VOQk9ORCA6IEV4dHJpbnNpY1R5cGUuU1RBS0lOR19MRUFWRV9QT09MO1xuICAgICAgY2FzZSBTdGFraW5nQWN0aW9uLldJVEhEUkFXOlxuICAgICAgICByZXR1cm4gaXNQb29sID8gRXh0cmluc2ljVHlwZS5TVEFLSU5HX1dJVEhEUkFXIDogRXh0cmluc2ljVHlwZS5TVEFLSU5HX1BPT0xfV0lUSERSQVc7XG4gICAgICBjYXNlIFN0YWtpbmdBY3Rpb24uQ0xBSU1fUkVXQVJEOlxuICAgICAgICByZXR1cm4gRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NMQUlNX1JFV0FSRDtcbiAgICAgIGNhc2UgU3Rha2luZ0FjdGlvbi5DQU5DRUxfVU5TVEFLRTpcbiAgICAgICAgcmV0dXJuIEV4dHJpbnNpY1R5cGUuU1RBS0lOR19DQU5DRUxfVU5TVEFLRTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBFeHRyaW5zaWNUeXBlLlVOS05PV047XG4gICAgfVxuICB9LCBbbm9taW5hdG9yTWV0YWRhdGEudHlwZV0pO1xuXG4gIGNvbnN0IG9uQ2xpY2tJdGVtID0gdXNlQ2FsbGJhY2soKGFjdGlvbjogU3Rha2luZ0FjdGlvbiwgb25DbGljazogKCkgPT4gdm9pZCkgPT4ge1xuICAgIGNvbnN0IF9vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgc2V0U2VsZWN0ZWQoYWN0aW9uKTtcbiAgICAgIG9uQ2xpY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG9uUHJlQ2hlY2soX29uQ2xpY2ssIGNvbnZlcnRTdGFraW5nQWN0aW9uVG9FeHRyaW5zaWNUeXBlKGFjdGlvbikpKCk7XG4gICAgfTtcbiAgfSwgW2NvbnZlcnRTdGFraW5nQWN0aW9uVG9FeHRyaW5zaWNUeXBlLCBvblByZUNoZWNrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3dNb2RhbFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBjbG9zYWJsZT17dHJ1ZX1cbiAgICAgIGlkPXtNT1JFX0FDVElPTl9NT0RBTH1cbiAgICAgIG1hc2tDbG9zYWJsZT17dHJ1ZX1cbiAgICAgIG9uQ2FuY2VsPXshc2VsZWN0ZWQgPyBvbkNhbmNlbCA6IHVuZGVmaW5lZH1cbiAgICAgIHRpdGxlPXt0KCdBY3Rpb25zJyl9XG4gICAgPlxuICAgICAge2FjdGlvbkxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbkRpc2FibGUgPSAhYXZhaWxhYmxlQWN0aW9ucy5pbmNsdWRlcyhpdGVtLmFjdGlvbik7XG4gICAgICAgIGNvbnN0IGhhc0FuQWN0aW9uID0gISFzZWxlY3RlZDtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGl0ZW0uYWN0aW9uID09PSBzZWxlY3RlZDtcbiAgICAgICAgY29uc3QgYW5vdGhlckRpc2FibGUgPSBoYXNBbkFjdGlvbiAmJiAhaXNTZWxlY3RlZDtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBhY3Rpb25EaXNhYmxlIHx8IGFub3RoZXJEaXNhYmxlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFNldHRpbmdJdGVtXG4gICAgICAgICAgICBjbGFzc05hbWU9e0NOKFxuICAgICAgICAgICAgICAnYWN0aW9uLW1vcmUtaXRlbScsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgIGxlZnRJdGVtSWNvbj17KFxuICAgICAgICAgICAgICA8QmFja2dyb3VuZEljb25cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e3Rva2VuW2l0ZW0uYmFja2dyb3VuZEljb25Db2xvcl0gYXMgc3RyaW5nfVxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBuYW1lPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgb25QcmVzc0l0ZW09e2Rpc2FibGVkID8gdW5kZWZpbmVkIDogb25DbGlja0l0ZW0oaXRlbS5hY3Rpb24sIGl0ZW0ub25DbGljayl9XG4gICAgICAgICAgICByaWdodEl0ZW09e1xuICAgICAgICAgICAgICBpc1NlbGVjdGVkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1pY29uJz5cbiAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvU3dNb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IE1vcmVBY3Rpb25Nb2RhbCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5hY3Rpb24tbW9yZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblhTXG4gICAgfSxcblxuICAgICcuYW50LXdlYjMtYmxvY2stcmlnaHQtaXRlbSc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAwXG4gICAgfSxcblxuICAgICcuZGlzYWJsZWQnOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICBvcGFjaXR5OiB0b2tlbi5vcGFjaXR5RGlzYWJsZSxcblxuICAgICAgJy5hbnQtd2ViMy1ibG9jayc6IHtcbiAgICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnXG4gICAgICB9LFxuXG4gICAgICAnLmFudC13ZWIzLWJsb2NrOmhvdmVyJzoge1xuICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgIGJhY2tncm91bmQ6IHRva2VuLmNvbG9yQmdTZWNvbmRhcnlcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTW9yZUFjdGlvbk1vZGFsO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IENoYWluU3Rha2luZ01ldGFkYXRhLCBFeHRyaW5zaWNUeXBlLCBOb21pbmF0aW9uSW5mbywgTm9taW5hdG9yTWV0YWRhdGEsIFN0YWtpbmdJdGVtLCBTdGFraW5nUmV3YXJkSXRlbSwgU3Rha2luZ1N0YXR1cywgU3Rha2luZ1R5cGUsIFVuc3Rha2luZ0luZm8sIFVuc3Rha2luZ1N0YXR1cyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgQUxMX0FDQ09VTlRfS0VZIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0VmFsaWRhdG9yTGFiZWwsIGlzU2hvd05vbWluYXRpb25CeVZhbGlkYXRvciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uva29uaS9hcGkvc3Rha2luZy9ib25kaW5nL3V0aWxzJztcbmltcG9ydCB7IF9TVEFLSU5HX0NIQUlOX0dST1VQIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9zZXJ2aWNlcy9jaGFpbi1zZXJ2aWNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBfZ2V0Q2hhaW5OYXRpdmVUb2tlbkJhc2ljSW5mbywgX2dldENoYWluU3Vic3RyYXRlQWRkcmVzc1ByZWZpeCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvY2hhaW4tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBkZXRlY3RUcmFuc2xhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCBNZXRhSW5mbyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvTWV0YUluZm8vTWV0YUluZm8nO1xuaW1wb3J0IEFjY291bnRJdGVtIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9NZXRhSW5mby9wYXJ0cy9BY2NvdW50SXRlbSc7XG5pbXBvcnQgeyBERUZBVUxUX1NUQUtFX1BBUkFNUywgREVGQVVMVF9VTl9TVEFLRV9QQVJBTVMsIFNUQUtFX1RSQU5TQUNUSU9OLCBVTl9TVEFLRV9UUkFOU0FDVElPTiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YWtpbmdTdGF0dXNVaSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzL3N0YWtpbmdTdGF0dXNVaSc7XG5pbXBvcnQgeyB1c2VHZXRBY2NvdW50QnlBZGRyZXNzLCB1c2VQcmVDaGVja0FjdGlvbiwgdXNlU2VsZWN0b3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB1c2VGZXRjaENoYWluSW5mbyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3NjcmVlbi9jb21tb24vdXNlRmV0Y2hDaGFpbkluZm8nO1xuaW1wb3J0IHVzZUdldEFjY291bnRzQnlTdGFraW5nIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvc2NyZWVuL3N0YWtpbmcvdXNlR2V0QWNjb3VudHNCeVN0YWtpbmcnO1xuaW1wb3J0IHsgTU9SRV9BQ1RJT05fTU9EQUwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL1BvcHVwL0hvbWUvU3Rha2luZy9Nb3JlQWN0aW9uTW9kYWwnO1xuaW1wb3J0IHsgZ2V0VW5zdGFraW5nUGVyaW9kLCBnZXRXYWl0aW5nVGltZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvUG9wdXAvVHJhbnNhY3Rpb24vaGVscGVyL3N0YWtpbmcvc3Rha2luZ0hhbmRsZXInO1xuaW1wb3J0IHsgVGhlbWUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IGlzQWNjb3VudEFsbCwgdG9TaG9ydCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBNb2RhbENvbnRleHQsIE51bWJlciwgU3dNb2RhbCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IEJpZ04gZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEFycm93Q2lyY2xlVXBSaWdodCwgRG90c1RocmVlIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJ3VzZWhvb2tzLXRzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGhlbWVQcm9wcyB7XG4gIG5vbWluYXRvck1ldGFkYXRhOiBOb21pbmF0b3JNZXRhZGF0YTtcbiAgY2hhaW5TdGFraW5nTWV0YWRhdGE6IENoYWluU3Rha2luZ01ldGFkYXRhO1xuICBzdGFraW5nOiBTdGFraW5nSXRlbTtcbiAgcmV3YXJkSXRlbT86IFN0YWtpbmdSZXdhcmRJdGVtO1xufVxuXG5leHBvcnQgY29uc3QgU1RBS0lOR19ERVRBSUxfTU9EQUxfSUQgPSAnc3Rha2luZy1kZXRhaWwtbW9kYWwtaWQnO1xuXG5leHBvcnQgY29uc3QgZ2V0VW5zdGFraW5nSW5mbyA9ICh1bnN0YWtpbmdzOiBVbnN0YWtpbmdJbmZvW10sIGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICByZXR1cm4gdW5zdGFraW5ncy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbGlkYXRvckFkZHJlc3MgPT09IGFkZHJlc3MpO1xufTtcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGFpblN0YWtpbmdNZXRhZGF0YSwgY2xhc3NOYW1lLCBub21pbmF0b3JNZXRhZGF0YSwgcmV3YXJkSXRlbSwgc3Rha2luZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGV4cGVjdGVkUmV0dXJuLCBtaW5Kb2luTm9taW5hdGlvblBvb2wsIG1pblN0YWtlLCB1bnN0YWtpbmdQZXJpb2QgfSA9IGNoYWluU3Rha2luZ01ldGFkYXRhO1xuICBjb25zdCB7IGFjdGl2ZVN0YWtlLCBhZGRyZXNzLCBjaGFpbiwgbm9taW5hdGlvbnMsIHR5cGUsIHVuc3Rha2luZ3MgfSA9IG5vbWluYXRvck1ldGFkYXRhO1xuICBjb25zdCBzaG93aW5nT3B0aW9uID0gaXNTaG93Tm9taW5hdGlvbkJ5VmFsaWRhdG9yKGNoYWluKTtcbiAgY29uc3QgaXNSZWxheUNoYWluID0gX1NUQUtJTkdfQ0hBSU5fR1JPVVAucmVsYXkuaW5jbHVkZXMoY2hhaW4pO1xuICBjb25zdCBtb2RhbFRpdGxlID0gdHlwZSA9PT0gU3Rha2luZ1R5cGUuTk9NSU5BVEVELnZhbHVlT2YoKSA/IGRldGVjdFRyYW5zbGF0ZSgnTm9taW5hdGlvbiBkZXRhaWxzJykgOiBkZXRlY3RUcmFuc2xhdGUoJ1Bvb2xlZCBkZXRhaWxzJyk7XG5cbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IFtzZWVNb3JlLCBzZXRTZWVNb3JlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgeyBhY3RpdmVNb2RhbCwgaW5hY3RpdmVNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuXG4gIGNvbnN0IHsgY3VycmVudEFjY291bnQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudFN0YXRlKTtcbiAgY29uc3Qgb25DbGlja0Zvb3RlckJ1dHRvbiA9IHVzZVByZUNoZWNrQWN0aW9uKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzLCBmYWxzZSk7XG5cbiAgY29uc3QgY2hhaW5JbmZvID0gdXNlRmV0Y2hDaGFpbkluZm8oc3Rha2luZy5jaGFpbik7XG4gIGNvbnN0IHsgZGVjaW1hbHMgfSA9IF9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvKGNoYWluSW5mbyk7XG4gIGNvbnN0IG5ldHdvcmtQcmVmaXggPSBfZ2V0Q2hhaW5TdWJzdHJhdGVBZGRyZXNzUHJlZml4KGNoYWluSW5mbyk7XG4gIGNvbnN0IGFjY291bnQgPSB1c2VHZXRBY2NvdW50QnlBZGRyZXNzKHN0YWtpbmcuYWRkcmVzcyk7XG5cbiAgY29uc3Qgc3Rha2luZ0FjY291bnRzID0gdXNlR2V0QWNjb3VudHNCeVN0YWtpbmcoY2hhaW4sIHR5cGUpO1xuICBjb25zdCBbLCBzZXRTdGFrZVN0b3JhZ2VdID0gdXNlTG9jYWxTdG9yYWdlKFNUQUtFX1RSQU5TQUNUSU9OLCBERUZBVUxUX1NUQUtFX1BBUkFNUyk7XG4gIGNvbnN0IFssIHNldFVuU3Rha2VTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZShVTl9TVEFLRV9UUkFOU0FDVElPTiwgREVGQVVMVF9VTl9TVEFLRV9QQVJBTVMpO1xuXG4gIGNvbnN0IHN0YWtpbmdUeXBlTmFtZU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBub21pbmF0ZWQ6IHQoJ05vbWluYXRlZCcpLFxuICAgIHBvb2xlZDogdCgnUG9vbGVkJylcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrU3Rha2VNb3JlQnRuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGluYWN0aXZlTW9kYWwoU1RBS0lOR19ERVRBSUxfTU9EQUxfSUQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGN1cnJlbnRBY2NvdW50ID8gaXNBY2NvdW50QWxsKGN1cnJlbnRBY2NvdW50LmFkZHJlc3MpID8gJycgOiBjdXJyZW50QWNjb3VudC5hZGRyZXNzIDogJyc7XG5cbiAgICAgIHNldFN0YWtlU3RvcmFnZSh7XG4gICAgICAgIC4uLkRFRkFVTFRfU1RBS0VfUEFSQU1TLFxuICAgICAgICBmcm9tOiBhZGRyZXNzLFxuICAgICAgICBkZWZhdWx0Q2hhaW46IG5vbWluYXRvck1ldGFkYXRhLmNoYWluLFxuICAgICAgICBkZWZhdWx0VHlwZTogbm9taW5hdG9yTWV0YWRhdGEudHlwZSxcbiAgICAgICAgdHlwZTogbm9taW5hdG9yTWV0YWRhdGEudHlwZSxcbiAgICAgICAgY2hhaW46IG5vbWluYXRvck1ldGFkYXRhLmNoYWluXG4gICAgICB9KTtcbiAgICAgIG5hdmlnYXRlKCcvdHJhbnNhY3Rpb24vc3Rha2UnKTtcbiAgICB9LCAzMDApO1xuICB9LCBbY3VycmVudEFjY291bnQsIGluYWN0aXZlTW9kYWwsIG5hdmlnYXRlLCBub21pbmF0b3JNZXRhZGF0YSwgc2V0U3Rha2VTdG9yYWdlXSk7XG5cbiAgY29uc3Qgb25DbGlja1Vuc3Rha2VCdG4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW5hY3RpdmVNb2RhbChTVEFLSU5HX0RFVEFJTF9NT0RBTF9JRCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBhZGRyZXNzID0gY3VycmVudEFjY291bnQgPyBpc0FjY291bnRBbGwoY3VycmVudEFjY291bnQuYWRkcmVzcykgPyAnJyA6IGN1cnJlbnRBY2NvdW50LmFkZHJlc3MgOiAnJztcblxuICAgICAgc2V0VW5TdGFrZVN0b3JhZ2Uoe1xuICAgICAgICAuLi5ERUZBVUxUX1VOX1NUQUtFX1BBUkFNUyxcbiAgICAgICAgZnJvbTogYWRkcmVzcyxcbiAgICAgICAgdHlwZTogbm9taW5hdG9yTWV0YWRhdGEudHlwZSxcbiAgICAgICAgY2hhaW46IG5vbWluYXRvck1ldGFkYXRhLmNoYWluXG4gICAgICB9KTtcbiAgICAgIG5hdmlnYXRlKCcvdHJhbnNhY3Rpb24vdW5zdGFrZScpO1xuICAgIH0sIDMwMCk7XG4gIH0sIFtjdXJyZW50QWNjb3VudCwgaW5hY3RpdmVNb2RhbCwgbmF2aWdhdGUsIG5vbWluYXRvck1ldGFkYXRhLCBzZXRVblN0YWtlU3RvcmFnZV0pO1xuXG4gIGNvbnN0IG9uQ2xpY2tNb3JlQWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGFjdGl2ZU1vZGFsKE1PUkVfQUNUSU9OX01PREFMKTtcbiAgICBpbmFjdGl2ZU1vZGFsKFNUQUtJTkdfREVUQUlMX01PREFMX0lEKTtcbiAgfSwgW2FjdGl2ZU1vZGFsLCBpbmFjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Rha2luZy1kZXRhaWwtbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249ezxJY29uIHBob3NwaG9ySWNvbj17RG90c1RocmVlfSAvPn1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrTW9yZUFjdGlvbn1cbiAgICAgICAgICBzY2hlbWE9J3NlY29uZGFyeSdcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0nX19hY3Rpb24tYnRuJ1xuICAgICAgICAgIGRpc2FibGVkPXtuZXcgQmlnTihhY3RpdmVTdGFrZSB8fCAnMCcpLmx0ZSgwKSB9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja0Zvb3RlckJ1dHRvbihcbiAgICAgICAgICAgIG9uQ2xpY2tVbnN0YWtlQnRuLFxuICAgICAgICAgICAgc3Rha2luZy50eXBlID09PSBTdGFraW5nVHlwZS5QT09MRUQgPyBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfTEVBVkVfUE9PTCA6IEV4dHJpbnNpY1R5cGUuU1RBS0lOR19VTkJPTkRcbiAgICAgICAgICApfVxuICAgICAgICAgIHNjaGVtYT0nc2Vjb25kYXJ5J1xuICAgICAgICA+e3QoJ1Vuc3Rha2UnKX08L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0nX19hY3Rpb24tYnRuJ1xuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tGb290ZXJCdXR0b24oXG4gICAgICAgICAgICBvbkNsaWNrU3Rha2VNb3JlQnRuLFxuICAgICAgICAgICAgc3Rha2luZy50eXBlID09PSBTdGFraW5nVHlwZS5QT09MRUQgPyBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQk9ORCA6IEV4dHJpbnNpY1R5cGUuU1RBS0lOR19KT0lOX1BPT0xcbiAgICAgICAgICApfVxuICAgICAgICA+e3QoJ1N0YWtlIG1vcmUnKX08L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja1NlZU1vcmVCdG4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2VlTW9yZSh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2xvc2VNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTZWVNb3JlKGZhbHNlKTtcbiAgICBpbmFjdGl2ZU1vZGFsKFNUQUtJTkdfREVUQUlMX01PREFMX0lEKTtcbiAgfSwgW2luYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBnZXRTdGFraW5nU3RhdHVzID0gdXNlQ2FsbGJhY2soKHN0YXR1czogU3Rha2luZ1N0YXR1cykgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IFN0YWtpbmdTdGF0dXMuRUFSTklOR19SRVdBUkQpIHtcbiAgICAgIHJldHVybiBTdGFraW5nU3RhdHVzVWkuYWN0aXZlO1xuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09IFN0YWtpbmdTdGF0dXMuUEFSVElBTExZX0VBUk5JTkcpIHtcbiAgICAgIHJldHVybiBTdGFraW5nU3RhdHVzVWkucGFydGlhbEVhcm5pbmc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gU3Rha2luZ1N0YXR1cy5XQUlUSU5HKSB7XG4gICAgICByZXR1cm4gU3Rha2luZ1N0YXR1c1VpLndhaXRpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0YWtpbmdTdGF0dXNVaS5pbmFjdGl2ZTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlclVuc3Rha2luZ0luZm8gPSB1c2VDYWxsYmFjaygoaXRlbTogTm9taW5hdGlvbkluZm8pID0+IHtcbiAgICBjb25zdCB1bnN0YWtpbmdEYXRhID0gZ2V0VW5zdGFraW5nSW5mbyh1bnN0YWtpbmdzLCBpdGVtLnZhbGlkYXRvckFkZHJlc3MpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNZXRhSW5mb1xuICAgICAgICBoYXNCYWNrZ3JvdW5kV3JhcHBlclxuICAgICAgICBrZXk9e2l0ZW0udmFsaWRhdG9yQWRkcmVzc31cbiAgICAgICAgc3BhY2VTaXplPXsnc20nfVxuICAgICAgICB2YWx1ZUNvbG9yU2NoZW1lPXsnbGlnaHQnfVxuICAgICAgPlxuICAgICAgICA8TWV0YUluZm8uQWNjb3VudFxuICAgICAgICAgIGFkZHJlc3M9e2l0ZW0udmFsaWRhdG9yQWRkcmVzc31cbiAgICAgICAgICBsYWJlbD17dChnZXRWYWxpZGF0b3JMYWJlbChpdGVtLmNoYWluKSl9XG4gICAgICAgICAgbmFtZT17aXRlbS52YWxpZGF0b3JJZGVudGl0eSB8fCB0b1Nob3J0KGl0ZW0udmFsaWRhdG9yQWRkcmVzcyl9XG4gICAgICAgICAgbmV0d29ya1ByZWZpeD17bmV0d29ya1ByZWZpeH1cbiAgICAgICAgLz5cblxuICAgICAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICAgICAgZGVjaW1hbHM9e2RlY2ltYWxzfVxuICAgICAgICAgIGtleT17aXRlbS52YWxpZGF0b3JBZGRyZXNzfVxuICAgICAgICAgIGxhYmVsPXt0KCdBY3RpdmUgc3Rha2VkJyl9XG4gICAgICAgICAgc3VmZml4PXtzdGFraW5nLm5hdGl2ZVRva2VufVxuICAgICAgICAgIHZhbHVlPXtpdGVtLmFjdGl2ZVN0YWtlIHx8ICcnfVxuICAgICAgICAgIHZhbHVlQ29sb3JTY2hlbWE9eydncmF5J31cbiAgICAgICAgLz5cblxuICAgICAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICAgICAgZGVjaW1hbHM9e2RlY2ltYWxzfVxuICAgICAgICAgIGtleT17aXRlbS52YWxpZGF0b3JBZGRyZXNzfVxuICAgICAgICAgIGxhYmVsPXt0KCdNaW5pbXVtIHN0YWtlZCcpfVxuICAgICAgICAgIHN1ZmZpeD17c3Rha2luZy5uYXRpdmVUb2tlbn1cbiAgICAgICAgICB2YWx1ZT17aXRlbS52YWxpZGF0b3JNaW5TdGFrZSB8fCAnMCd9XG4gICAgICAgICAgdmFsdWVDb2xvclNjaGVtYT17J2dyYXknfVxuICAgICAgICAvPlxuXG4gICAgICAgIHshIXVuc3Rha2luZ0RhdGEgJiYgc2hvd2luZ09wdGlvbiA9PT0gJ3Nob3dCeVZhbGlkYXRvcicgJiYgPE1ldGFJbmZvLkRlZmF1bHRcbiAgICAgICAgICBjbGFzc05hbWU9eydfX3BhcmEnfVxuICAgICAgICAgIGxhYmVsPXt0KCdVbnN0YWtlZCcpfVxuICAgICAgICAgIGxhYmVsQWxpZ249e3Vuc3Rha2luZ0RhdGEuc3RhdHVzID09PSBVbnN0YWtpbmdTdGF0dXMuVU5MT0NLSU5HLnZhbHVlT2YoKSA/ICd0b3AnIDogJ2NlbnRlcid9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE51bWJlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydjb21tb24tdGV4dCB0ZXh0LWxpZ2h0LTQgdGV4dC1yaWdodCd9XG4gICAgICAgICAgICAgIGRlY2ltYWw9e2RlY2ltYWxzfVxuICAgICAgICAgICAgICBzdWZmaXg9e3N0YWtpbmcubmF0aXZlVG9rZW59XG4gICAgICAgICAgICAgIHZhbHVlPXt1bnN0YWtpbmdEYXRhLmNsYWltYWJsZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHt1bnN0YWtpbmdEYXRhLnN0YXR1cyA9PT0gVW5zdGFraW5nU3RhdHVzLlVOTE9DS0lORy52YWx1ZU9mKCkgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzbS10ZXh0IHRleHQtbGlnaHQtNCd9PlxuICAgICAgICAgICAgICAgIHtnZXRXYWl0aW5nVGltZSh1bnN0YWtpbmdEYXRhLndhaXRpbmdUaW1lLCB1bnN0YWtpbmdEYXRhLnN0YXR1cywgdCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01ldGFJbmZvLkRlZmF1bHQ+fVxuXG4gICAgICAgIDxNZXRhSW5mby5TdGF0dXNcbiAgICAgICAgICBsYWJlbD17dCgnU3Rha2luZyBzdGF0dXMnKX1cbiAgICAgICAgICBzdGF0dXNJY29uPXtnZXRTdGFraW5nU3RhdHVzKGl0ZW0uc3RhdHVzKS5pY29ufVxuICAgICAgICAgIHN0YXR1c05hbWU9e3QoZ2V0U3Rha2luZ1N0YXR1cyhpdGVtLnN0YXR1cykubmFtZSl9XG4gICAgICAgICAgdmFsdWVDb2xvclNjaGVtYT17Z2V0U3Rha2luZ1N0YXR1cyhpdGVtLnN0YXR1cykuc2NoZW1hfVxuICAgICAgICAvPlxuICAgICAgPC9NZXRhSW5mbz5cbiAgICApO1xuICB9LCBbZGVjaW1hbHMsIGdldFN0YWtpbmdTdGF0dXMsIG5ldHdvcmtQcmVmaXgsIHNob3dpbmdPcHRpb24sIHN0YWtpbmcubmF0aXZlVG9rZW4sIHQsIHVuc3Rha2luZ3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxTd01vZGFsXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgZm9vdGVyPXtmb290ZXIoKX1cbiAgICAgIGlkPXtTVEFLSU5HX0RFVEFJTF9NT0RBTF9JRH1cbiAgICAgIG1hc2tDbG9zYWJsZT17dHJ1ZX1cbiAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlTW9kYWx9XG4gICAgICB0aXRsZT17dChtb2RhbFRpdGxlKX1cbiAgICA+XG4gICAgICA8TWV0YUluZm8+XG4gICAgICAgIDxNZXRhSW5mby5BY2NvdW50XG4gICAgICAgICAgYWNjb3VudHM9e2lzQWNjb3VudEFsbChhZGRyZXNzKSA/IHN0YWtpbmdBY2NvdW50cyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBhZGRyZXNzPXthZGRyZXNzfVxuICAgICAgICAgIGxhYmVsPXt0KCdBY2NvdW50Jyl9XG4gICAgICAgICAgbmFtZT17YWNjb3VudD8ubmFtZX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogY2hhbmdlIHRoaXMgd2hlbiBhbGwgYWNjb3VudCBkYXRhIGlzIGZ1bGwgKi99XG4gICAgICAgIHsvKiA8TWV0YUluZm8uQWNjb3VudEdyb3VwIGxhYmVsPXsnQWNjb3VudCd9IGFjY291bnRzPXthY2NvdW50c30gY29udGVudD17YCR7YWNjb3VudHMubGVuZ3RofSBhY2NvdW50cyBzdGFraW5nYH0gLz4gKi99XG5cbiAgICAgICAgPE1ldGFJbmZvLkRpc3BsYXlUeXBlXG4gICAgICAgICAgbGFiZWw9e3QoJ1N0YWtpbmcgdHlwZScpfVxuICAgICAgICAgIHR5cGVOYW1lPXtzdGFraW5nVHlwZU5hbWVNYXBbc3Rha2luZy50eXBlXX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1ldGFJbmZvLlN0YXR1c1xuICAgICAgICAgIGxhYmVsPXt0KCdTdGFraW5nIHN0YXR1cycpfVxuICAgICAgICAgIHN0YXR1c0ljb249e2dldFN0YWtpbmdTdGF0dXMobm9taW5hdG9yTWV0YWRhdGEuc3RhdHVzKS5pY29ufVxuICAgICAgICAgIHN0YXR1c05hbWU9e3QoZ2V0U3Rha2luZ1N0YXR1cyhub21pbmF0b3JNZXRhZGF0YS5zdGF0dXMpLm5hbWUpfVxuICAgICAgICAgIHZhbHVlQ29sb3JTY2hlbWE9e2dldFN0YWtpbmdTdGF0dXMobm9taW5hdG9yTWV0YWRhdGEuc3RhdHVzKS5zY2hlbWF9XG4gICAgICAgIC8+XG5cbiAgICAgICAgeyEhcmV3YXJkSXRlbT8udG90YWxSZXdhcmQgJiYgcGFyc2VGbG9hdChyZXdhcmRJdGVtPy50b3RhbFJld2FyZCkgPiAwICYmIChcbiAgICAgICAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICAgICAgICBkZWNpbWFscz17ZGVjaW1hbHN9XG4gICAgICAgICAgICBsYWJlbD17dCgnVG90YWwgcmV3YXJkJyl9XG4gICAgICAgICAgICBzdWZmaXg9e3N0YWtpbmcubmF0aXZlVG9rZW59XG4gICAgICAgICAgICB2YWx1ZT17cmV3YXJkSXRlbT8udG90YWxSZXdhcmQgfHwgJzAnfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyEhcmV3YXJkSXRlbT8udW5jbGFpbWVkUmV3YXJkICYmIChcbiAgICAgICAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICAgICAgICBkZWNpbWFscz17ZGVjaW1hbHN9XG4gICAgICAgICAgICBsYWJlbD17dCgnVW5jbGFpbWVkIHJld2FyZHMnKX1cbiAgICAgICAgICAgIHN1ZmZpeD17c3Rha2luZy5uYXRpdmVUb2tlbn1cbiAgICAgICAgICAgIHZhbHVlPXtyZXdhcmRJdGVtPy51bmNsYWltZWRSZXdhcmQgfHwgJzAnfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPE1ldGFJbmZvLk51bWJlclxuICAgICAgICAgIGRlY2ltYWxzPXtkZWNpbWFsc31cbiAgICAgICAgICBsYWJlbD17dCgnVG90YWwgc3Rha2VkJyl9XG4gICAgICAgICAgc3VmZml4PXtzdGFraW5nLm5hdGl2ZVRva2VufVxuICAgICAgICAgIHZhbHVlPXtTdHJpbmcocGFyc2VGbG9hdChhY3RpdmVTdGFrZSkgKyBwYXJzZUZsb2F0KHN0YWtpbmcudW5sb2NraW5nQmFsYW5jZSB8fCAnMCcpKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICAgICAgZGVjaW1hbHM9e2RlY2ltYWxzfVxuICAgICAgICAgIGxhYmVsPXt0KCdBY3RpdmUgc3Rha2VkJyl9XG4gICAgICAgICAgc3VmZml4PXtzdGFraW5nLm5hdGl2ZVRva2VufVxuICAgICAgICAgIHZhbHVlPXthY3RpdmVTdGFrZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICAgICAgZGVjaW1hbHM9e2RlY2ltYWxzfVxuICAgICAgICAgIGxhYmVsPXt0KCdVbnN0YWtlZCcpfVxuICAgICAgICAgIHN1ZmZpeD17c3Rha2luZy5uYXRpdmVUb2tlbn1cbiAgICAgICAgICB2YWx1ZT17c3Rha2luZy51bmxvY2tpbmdCYWxhbmNlIHx8ICcwJ31cbiAgICAgICAgLz5cblxuICAgICAgICA8TWV0YUluZm8uQ2hhaW5cbiAgICAgICAgICBjaGFpbj17c3Rha2luZy5jaGFpbn1cbiAgICAgICAgICBsYWJlbD17dCgnTmV0d29yaycpfVxuICAgICAgICAvPlxuICAgICAgPC9NZXRhSW5mbz5cblxuICAgICAgeyFzZWVNb3JlICYmIDxCdXR0b25cbiAgICAgICAgYmxvY2tcbiAgICAgICAgY2xhc3NOYW1lPXsnc2VlLW1vcmUtYnRuJ31cbiAgICAgICAgaWNvbj17PEljb25cbiAgICAgICAgICBpY29uQ29sb3I9e3Rva2VuLmNvbG9yVGV4dExpZ2h0NH1cbiAgICAgICAgICBwaG9zcGhvckljb249e0Fycm93Q2lyY2xlVXBSaWdodH1cbiAgICAgICAgICBzaXplPXsnc20nfVxuICAgICAgICAvPn1cbiAgICAgICAgb25DbGljaz17b25DbGlja1NlZU1vcmVCdG59XG4gICAgICAgIHNpemU9eyd4cyd9XG4gICAgICAgIHR5cGU9eydnaG9zdCd9XG4gICAgICA+XG4gICAgICAgIHt0KCdTZWUgbW9yZScpfVxuICAgICAgPC9CdXR0b24+fVxuXG4gICAgICB7c2VlTW9yZSAmJiA8PlxuICAgICAgICA8TWV0YUluZm9cbiAgICAgICAgICBoYXNCYWNrZ3JvdW5kV3JhcHBlclxuICAgICAgICAgIHNwYWNlU2l6ZT17J3hzJ31cbiAgICAgICAgICB2YWx1ZUNvbG9yU2NoZW1lPXsnbGlnaHQnfVxuICAgICAgICA+XG4gICAgICAgICAgeyEhZXhwZWN0ZWRSZXR1cm4gJiZcbiAgICAgICAgICAgIDxNZXRhSW5mby5OdW1iZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnZXhwZWN0ZWQtcmV0dXJuJ31cbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ0VzdGltYXRlZCBhbm51YWwgZWFybmluZ3MnKX1cbiAgICAgICAgICAgICAgc3VmZml4PXsnJSd9XG4gICAgICAgICAgICAgIHZhbHVlPXtleHBlY3RlZFJldHVybn1cbiAgICAgICAgICAgICAgdmFsdWVDb2xvclNjaGVtYT17J2V2ZW4tb2RkJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPE1ldGFJbmZvLk51bWJlclxuICAgICAgICAgICAgZGVjaW1hbHM9e2RlY2ltYWxzfVxuICAgICAgICAgICAgbGFiZWw9e3QoJ01pbmltdW0gYWN0aXZlJyl9XG4gICAgICAgICAgICBzdWZmaXg9e3N0YWtpbmcubmF0aXZlVG9rZW59XG4gICAgICAgICAgICB2YWx1ZT17bm9taW5hdG9yTWV0YWRhdGEudHlwZSA9PT0gU3Rha2luZ1R5cGUuTk9NSU5BVEVEID8gbWluU3Rha2UgOiAobWluSm9pbk5vbWluYXRpb25Qb29sIHx8ICcwJyl9XG4gICAgICAgICAgICB2YWx1ZUNvbG9yU2NoZW1hPXsnZ3JheSd9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHshIXVuc3Rha2luZ1BlcmlvZCAmJiA8TWV0YUluZm8uRGVmYXVsdFxuICAgICAgICAgICAgbGFiZWw9e3QoJ1Vuc3Rha2luZyBwZXJpb2QnKX1cbiAgICAgICAgICAgIHZhbHVlQ29sb3JTY2hlbWE9eydncmF5J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0VW5zdGFraW5nUGVyaW9kKHQsIHVuc3Rha2luZ1BlcmlvZCl9XG4gICAgICAgICAgPC9NZXRhSW5mby5EZWZhdWx0Pn1cbiAgICAgICAgPC9NZXRhSW5mbz5cblxuICAgICAgICB7c2hvd2luZ09wdGlvbiA9PT0gJ3Nob3dCeVZhbHVlJyAmJiAobm9taW5hdGlvbnMgJiYgbm9taW5hdGlvbnMubGVuZ3RoID4gMCkgJiYgY3VycmVudEFjY291bnQ/LmFkZHJlc3MgIT09IEFMTF9BQ0NPVU5UX0tFWSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNZXRhSW5mbyB2YWx1ZUNvbG9yU2NoZW1lPXsnbGlnaHQnfT5cbiAgICAgICAgICAgICAgPE1ldGFJbmZvLk51bWJlclxuICAgICAgICAgICAgICAgIGRlY2ltYWxzPXtkZWNpbWFsc31cbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnQWN0aXZlIHN0YWtlZCcpfVxuICAgICAgICAgICAgICAgIHN1ZmZpeD17c3Rha2luZy5uYXRpdmVUb2tlbn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlU3Rha2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01ldGFJbmZvPlxuICAgICAgICAgICAgPE1ldGFJbmZvXG4gICAgICAgICAgICAgIGhhc0JhY2tncm91bmRXcmFwcGVyXG4gICAgICAgICAgICAgIHNwYWNlU2l6ZT17J3hzJ31cbiAgICAgICAgICAgICAgdmFsdWVDb2xvclNjaGVtZT17J2xpZ2h0J31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7bm9taW5hdGlvbnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNSZWxheUNoYWluICYmIHR5cGUgPT09IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxNZXRhSW5mby5EZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e0NOKCdfX25vbWluYXRpb24tZmllbGQnLCAnc3RhbmQtYWxvbmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbS52YWxpZGF0b3JBZGRyZXNzfS0ke2l0ZW0uYWN0aXZlU3Rha2V9LSR7aXRlbS52YWxpZGF0b3JJZGVudGl0eSB8fCBpdGVtLnZhbGlkYXRvck1pblN0YWtlIHx8IGl0ZW0uY2hhaW59YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e2l0ZW0udmFsaWRhdG9yQWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydfX25vbWluYXRpb24tbGFiZWwnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0udmFsaWRhdG9ySWRlbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L01ldGFJbmZvLkRlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZXRhSW5mby5OdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydfX25vbWluYXRpb24tZmllbGQnfVxuICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzPXtkZWNpbWFsc31cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsaWRhdG9yQWRkcmVzc30tJHtpdGVtLmFjdGl2ZVN0YWtlfS0ke2l0ZW0udmFsaWRhdG9ySWRlbnRpdHkgfHwgaXRlbS52YWxpZGF0b3JNaW5TdGFrZSB8fCBpdGVtLmNoYWlufWB9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxBY2NvdW50SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17aXRlbS52YWxpZGF0b3JBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnX19ub21pbmF0aW9uLWxhYmVsJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0udmFsaWRhdG9ySWRlbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICAgICAgc3VmZml4PXtzdGFraW5nLm5hdGl2ZVRva2VufVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmFjdGl2ZVN0YWtlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sb3JTY2hlbWE9eydncmF5J31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9NZXRhSW5mbz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICB7KHNob3dpbmdPcHRpb24gPT09ICdzaG93QnlWYWx1ZScgfHwgc2hvd2luZ09wdGlvbiA9PT0gJ21peGVkJykgJiYgKHVuc3Rha2luZ3MgJiYgdW5zdGFraW5ncy5sZW5ndGggPiAwKSAmJiBjdXJyZW50QWNjb3VudD8uYWRkcmVzcyAhPT0gQUxMX0FDQ09VTlRfS0VZICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1ldGFJbmZvIHZhbHVlQ29sb3JTY2hlbWU9eydsaWdodCd9PlxuICAgICAgICAgICAgICA8TWV0YUluZm8uTnVtYmVyXG4gICAgICAgICAgICAgICAgZGVjaW1hbHM9e2RlY2ltYWxzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdVbnN0YWtlZCcpfVxuICAgICAgICAgICAgICAgIHN1ZmZpeD17c3Rha2luZy5uYXRpdmVUb2tlbn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c3Rha2luZy51bmxvY2tpbmdCYWxhbmNlIHx8ICcwJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTWV0YUluZm8+XG4gICAgICAgICAgICA8TWV0YUluZm9cbiAgICAgICAgICAgICAgaGFzQmFja2dyb3VuZFdyYXBwZXJcbiAgICAgICAgICAgICAgc3BhY2VTaXplPXsneHMnfVxuICAgICAgICAgICAgICB2YWx1ZUNvbG9yU2NoZW1lPXsnbGlnaHQnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHt1bnN0YWtpbmdzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1ldGFJbmZvLk51bWJlclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFscz17ZGVjaW1hbHN9XG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbS52YWxpZGF0b3JBZGRyZXNzIHx8IGl0ZW0uY2hhaW59LSR7aXRlbS5zdGF0dXN9LSR7aXRlbS5jbGFpbWFibGV9YH1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2dldFdhaXRpbmdUaW1lKGl0ZW0ud2FpdGluZ1RpbWUsIGl0ZW0uc3RhdHVzLCB0KSA/IHQoZ2V0V2FpdGluZ1RpbWUoaXRlbS53YWl0aW5nVGltZSwgaXRlbS5zdGF0dXMsIHQpKSA6IHQoJ1dpdGhkcmF3Jyl9XG4gICAgICAgICAgICAgICAgICAgIHN1ZmZpeD17c3Rha2luZy5uYXRpdmVUb2tlbn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uY2xhaW1hYmxlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbG9yU2NoZW1hPXsnZ3JheSd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvTWV0YUluZm8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyhzaG93aW5nT3B0aW9uID09PSAnc2hvd0J5VmFsaWRhdG9yJyB8fCBzaG93aW5nT3B0aW9uID09PSAnbWl4ZWQnKSAmJiAobm9taW5hdGlvbnMgJiYgbm9taW5hdGlvbnMubGVuZ3RoID4gMCkgJiYgY3VycmVudEFjY291bnQ/LmFkZHJlc3MgIT09IEFMTF9BQ0NPVU5UX0tFWSAmJlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7bm9taW5hdGlvbnMgJiYgbm9taW5hdGlvbnMubGVuZ3RoICYmIG5vbWluYXRpb25zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICByZW5kZXJVbnN0YWtpbmdJbmZvKGl0ZW0pXG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPC8+fVxuICAgIDwvU3dNb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IFN0YWtpbmdEZXRhaWxNb2RhbCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5leHBlY3RlZC1yZXR1cm4gZGl2OmZpcnN0LWNoaWxkJzoge1xuICAgICAgZmxleDogMlxuICAgIH0sXG5cbiAgICAnLnN0YWtpbmctZGV0YWlsLW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcuX19hY3Rpb24tYnRuJzoge1xuICAgICAgZmxleDogMVxuICAgIH0sXG5cbiAgICAnLl9fc2xhc2gnOiB7XG4gICAgICBtYXJnaW5MZWZ0OiB0b2tlbi5tYXJnaW5YWFMsXG4gICAgICBtYXJnaW5SaWdodDogdG9rZW4ubWFyZ2luWFhTXG4gICAgfSxcblxuICAgICcuX19pbmZsYXRpb24tdGV4dCc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRva2VuLm1hcmdpblhYUyxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDRcbiAgICB9LFxuXG4gICAgJy5fX2V4cGVjdGVkLXJldHVybiwgLl9faW5mbGF0aW9uJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICAgIH0sXG5cbiAgICAnLl9faW5mbGF0aW9uJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0NFxuICAgIH0sXG5cbiAgICAnLl9fbm9taW5hdGlvbi1maWVsZCc6IHtcbiAgICAgICc+IC5fX2NvbCc6IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9LFxuXG4gICAgICAnJi5zdGFuZC1hbG9uZSc6IHtcbiAgICAgICAgJy5fX2NvbC4tdG8tcmlnaHQnOiB7XG4gICAgICAgICAgZmxleEdyb3c6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLl9fbm9taW5hdGlvbi1sYWJlbCA+IC5fX2NvbC4tdG8tcmlnaHQnOiB7XG4gICAgICBmbGV4OiAnaW5pdGlhbCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG5cbiAgICAgICcuX19hY2NvdW50LWl0ZW0nOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgIH0sXG5cbiAgICAgICcuX19hY2NvdW50LW5hbWUnOiB7XG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLnNlZS1tb3JlLWJ0bic6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luXG4gICAgfSxcblxuICAgICcuYW50LXN3LW1vZGFsLWJvZHknOiB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAwXG4gICAgfSxcblxuICAgICcuYW50LXN3LW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgIGJvcmRlcjogJ25vbmUnXG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWtpbmdEZXRhaWxNb2RhbDtcbiIsIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBFeHRyaW5zaWNUeXBlLCBTdGFraW5nVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgRW1wdHlMaXN0LCBGaWx0ZXJNb2RhbCwgTGF5b3V0LCBQYWdlV3JhcHBlciwgU3dTdGFraW5nSXRlbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBERUZBVUxUX1NUQUtFX1BBUkFNUywgU1RBS0VfVFJBTlNBQ1RJT04gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29udGV4dHMvRGF0YUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlRmlsdGVyTW9kYWwsIHVzZUdldFN0YWtpbmdMaXN0LCB1c2VOb3RpZmljYXRpb24sIHVzZVByZUNoZWNrQWN0aW9uLCB1c2VTZWxlY3RvciwgdXNlU2V0Q3VycmVudFBhZ2UsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyByZWxvYWRDcm9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgU3Rha2luZ0RhdGFUeXBlLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBpc0FjY291bnRBbGwsIHNvcnRTdGFraW5nQnlWYWx1ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IsIEJ1dHRvblByb3BzLCBJY29uLCBNb2RhbENvbnRleHQsIFN3TGlzdCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgQXJyb3dDbG9ja3dpc2UsIERhdGFiYXNlLCBGYWRlcnNIb3Jpem9udGFsLCBQbHVzLCBQbHVzQ2lyY2xlIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAndXNlaG9va3MtdHMnO1xuXG5pbXBvcnQgTW9yZUFjdGlvbk1vZGFsLCB7IE1PUkVfQUNUSU9OX01PREFMIH0gZnJvbSAnLi9Nb3JlQWN0aW9uTW9kYWwnO1xuaW1wb3J0IFN0YWtpbmdEZXRhaWxNb2RhbCwgeyBTVEFLSU5HX0RFVEFJTF9NT0RBTF9JRCB9IGZyb20gJy4vU3Rha2luZ0RldGFpbE1vZGFsJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHNcblxuY29uc3QgRklMVEVSX01PREFMX0lEID0gJ3N0YWtpbmctZmlsdGVyLW1vZGFsJztcblxuZW51bSBGaWx0ZXJWYWx1ZSB7XG4gIE5PTUlOQVRFRCA9ICdub21pbmF0ZWQnLFxuICBQT09MRUQgPSAncG9vbGVkJ1xufVxuXG5jb25zdCByaWdodEljb24gPSAoXG4gIDxJY29uXG4gICAgcGhvc3Bob3JJY29uPXtQbHVzfVxuICAgIHNpemU9J3NtJ1xuICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAvPlxuKTtcblxuY29uc3QgcmVsb2FkSWNvbiA9IChcbiAgPEljb25cbiAgICBwaG9zcGhvckljb249e0Fycm93Q2xvY2t3aXNlfVxuICAgIHNpemU9J3NtJ1xuICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAvPlxuKTtcblxuZnVuY3Rpb24gQ29tcG9uZW50ICh7IGNsYXNzTmFtZSA9ICcnIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PFByb3BzPiB7XG4gIHVzZVNldEN1cnJlbnRQYWdlKCcvaG9tZS9zdGFraW5nJyk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG4gIGNvbnN0IHsgYWN0aXZlTW9kYWwsIGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICBjb25zdCB7IGRhdGE6IHN0YWtpbmdJdGVtcywgcHJpY2VNYXAgfSA9IHVzZUdldFN0YWtpbmdMaXN0KCk7XG5cbiAgY29uc3QgeyBjdXJyZW50QWNjb3VudCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUpO1xuXG4gIGNvbnN0IHsgZmlsdGVyU2VsZWN0aW9uTWFwLCBvbkFwcGx5RmlsdGVyLCBvbkNoYW5nZUZpbHRlck9wdGlvbiwgb25DbG9zZUZpbHRlck1vZGFsLCBzZWxlY3RlZEZpbHRlcnMgfSA9IHVzZUZpbHRlck1vZGFsKEZJTFRFUl9NT0RBTF9JRCk7XG5cbiAgY29uc3QgW2FkZHJlc3NdID0gdXNlU3RhdGUoY3VycmVudEFjY291bnQ/LmFkZHJlc3MpO1xuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGU8U3Rha2luZ0RhdGFUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3Qgbm90aWZ5ID0gdXNlTm90aWZpY2F0aW9uKCk7XG5cbiAgY29uc3QgWywgc2V0U3RvcmFnZV0gPSB1c2VMb2NhbFN0b3JhZ2UoU1RBS0VfVFJBTlNBQ1RJT04sIERFRkFVTFRfU1RBS0VfUEFSQU1TKTtcblxuICBjb25zdCBpdGVtcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN0YWtpbmdJdGVtcy5tYXAoKGl0ZW0pID0+ICh7IC4uLml0ZW0sIHByaWNlOiBwcmljZU1hcFtpdGVtLnN0YWtpbmcuY2hhaW5dIHx8IDAgfSkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdC5zb3J0KHNvcnRTdGFraW5nQnlWYWx1ZSk7XG4gIH0sIFtwcmljZU1hcCwgc3Rha2luZ0l0ZW1zXSk7XG5cbiAgY29uc3QgRklMVEVSX09QVElPTlMgPSB1c2VNZW1vKCgpID0+IChbXG4gICAgeyBsYWJlbDogdCgnTm9taW5hdGVkJyksIHZhbHVlOiBTdGFraW5nVHlwZS5OT01JTkFURUQgfSxcbiAgICB7IGxhYmVsOiB0KCdQb29sZWQnKSwgdmFsdWU6IFN0YWtpbmdUeXBlLlBPT0xFRCB9XG4gIF0pLCBbdF0pO1xuXG4gIGNvbnN0IGZpbHRlckZ1bmN0aW9uID0gdXNlTWVtbzwoaXRlbTogU3Rha2luZ0RhdGFUeXBlKSA9PiBib29sZWFuPigoKSA9PiB7XG4gICAgcmV0dXJuIChpdGVtKSA9PiB7XG4gICAgICBpZiAoIXNlbGVjdGVkRmlsdGVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIHNlbGVjdGVkRmlsdGVycykge1xuICAgICAgICBpZiAoZmlsdGVyID09PSBGaWx0ZXJWYWx1ZS5OT01JTkFURUQpIHtcbiAgICAgICAgICBpZiAoaXRlbS5zdGFraW5nLnR5cGUgPT09IFN0YWtpbmdUeXBlLk5PTUlOQVRFRCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gU3Rha2luZ1R5cGUuUE9PTEVEKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc3Rha2luZy50eXBlID09PSBTdGFraW5nVHlwZS5QT09MRUQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3NlbGVjdGVkRmlsdGVyc10pO1xuXG4gIGNvbnN0IG9uQ2xpY2tBY3Rpb25CdG4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWN0aXZlTW9kYWwoRklMVEVSX01PREFMX0lEKTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3Qgb25DbGlja1JpZ2h0SWNvbiA9IHVzZUNhbGxiYWNrKChpdGVtOiBTdGFraW5nRGF0YVR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgYWN0aXZlTW9kYWwoTU9SRV9BQ1RJT05fTU9EQUwpO1xuICB9LCBbYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBvbkNsaWNrSXRlbSA9IHVzZUNhbGxiYWNrKChpdGVtOiBTdGFraW5nRGF0YVR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEl0ZW0oaXRlbSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFjdGl2ZU1vZGFsKFNUQUtJTkdfREVUQUlMX01PREFMX0lEKTtcbiAgICB9LCAxMDApO1xuICB9LCBbYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBwcmVDaGVjayA9IHVzZVByZUNoZWNrQWN0aW9uKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzLCBmYWxzZSk7XG5cbiAgY29uc3Qgb25DbGlja1N0YWtlTW9yZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBhZGRyZXNzID0gY3VycmVudEFjY291bnQgPyBpc0FjY291bnRBbGwoY3VycmVudEFjY291bnQuYWRkcmVzcykgPyAnJyA6IGN1cnJlbnRBY2NvdW50LmFkZHJlc3MgOiAnJztcblxuICAgIHNldFN0b3JhZ2Uoe1xuICAgICAgLi4uREVGQVVMVF9TVEFLRV9QQVJBTVMsXG4gICAgICBmcm9tOiBhZGRyZXNzXG4gICAgfSk7XG5cbiAgICBuYXZpZ2F0ZSgnL3RyYW5zYWN0aW9uL3N0YWtlJyk7XG4gIH0sIFtjdXJyZW50QWNjb3VudCwgbmF2aWdhdGUsIHNldFN0b3JhZ2VdKTtcblxuICBjb25zdCBzdWJIZWFkZXJCdXR0b246IEJ1dHRvblByb3BzW10gPSB1c2VNZW1vKCgpID0+IChbXG4gICAge1xuICAgICAgaWNvbjogcmVsb2FkSWNvbixcbiAgICAgIGRpc2FibGVkOiBsb2FkaW5nLFxuICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICBpY29uOiA8QWN0aXZpdHlJbmRpY2F0b3Igc2l6ZT17MzJ9IC8+LFxuICAgICAgICAgIHN0eWxlOiB7IHRvcDogMjEwIH0sXG4gICAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxLjgsXG4gICAgICAgICAgY2xvc2FibGU6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6IHQoJ1JlbG9hZGluZycpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlbG9hZENyb24oeyBkYXRhOiAnc3Rha2luZycgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IHJpZ2h0SWNvbixcbiAgICAgIG9uQ2xpY2s6IHByZUNoZWNrKG9uQ2xpY2tTdGFrZU1vcmUsIEV4dHJpbnNpY1R5cGUuU1RBS0lOR19CT05EKVxuICAgIH1cbiAgXSksIFtsb2FkaW5nLCBwcmVDaGVjaywgbm90aWZ5LCB0LCBvbkNsaWNrU3Rha2VNb3JlXSk7XG5cbiAgY29uc3QgcmVuZGVySXRlbSA9IHVzZUNhbGxiYWNrKChpdGVtOiBTdGFraW5nRGF0YVR5cGUpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN3U3Rha2luZ0l0ZW1cbiAgICAgICAgY2xhc3NOYW1lPSdzdGFraW5nLWl0ZW0nXG4gICAgICAgIGRlY2ltYWxzPXtpdGVtLmRlY2ltYWxzfVxuICAgICAgICBrZXk9e2Ake2l0ZW0uc3Rha2luZy5jaGFpbn0tJHtpdGVtLnN0YWtpbmcudHlwZX0tJHtpdGVtLnN0YWtpbmcuYWRkcmVzc31gfVxuICAgICAgICBvbkNsaWNrSXRlbT17b25DbGlja0l0ZW19XG4gICAgICAgIG9uQ2xpY2tSaWdodEljb249e29uQ2xpY2tSaWdodEljb259XG4gICAgICAgIHByaWNlTWFwPXtwcmljZU1hcH1cbiAgICAgICAgc3Rha2luZ0RhdGE9e2l0ZW19XG4gICAgICAvPlxuICAgICk7XG4gIH0sIFtvbkNsaWNrSXRlbSwgb25DbGlja1JpZ2h0SWNvbiwgcHJpY2VNYXBdKTtcblxuICBjb25zdCBzZWFyY2hGdW5jdGlvbiA9IHVzZUNhbGxiYWNrKChpdGVtOiBTdGFraW5nRGF0YVR5cGUsIHNlYXJjaFRleHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFRleHRMb3dlckNhc2UgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgaXRlbS5zdGFraW5nLm5hdGl2ZVRva2VuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZW1wdHlCdXR0b25Qcm9wcyA9IHVzZU1lbW8oKCk6IEJ1dHRvblByb3BzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogKFxuICAgICAgICA8SWNvblxuICAgICAgICAgIHBob3NwaG9ySWNvbj17UGx1c0NpcmNsZX1cbiAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgY2hpbGRyZW46IHQoJ1N0YXJ0IHN0YWtpbmcnKSxcbiAgICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICAgIHNpemU6ICd4cycsXG4gICAgICBvbkNsaWNrOiBwcmVDaGVjayhvbkNsaWNrU3Rha2VNb3JlLCBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQk9ORClcbiAgICB9O1xuICB9LCBbb25DbGlja1N0YWtlTW9yZSwgcHJlQ2hlY2ssIHRdKTtcblxuICBjb25zdCBlbXB0eVN0YWtpbmdMaXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlMaXN0XG4gICAgICAgIGJ1dHRvblByb3BzPXtlbXB0eUJ1dHRvblByb3BzfVxuICAgICAgICBlbXB0eU1lc3NhZ2U9e3QoJ1lvdSBjYW4gc3Rha2UgaW4tYXBwIGVhc2lseScpfVxuICAgICAgICBlbXB0eVRpdGxlPXt0KCdObyBzdGFraW5nIGZvdW5kJyl9XG4gICAgICAgIHBob3NwaG9ySWNvbj17RGF0YWJhc2V9XG4gICAgICAvPlxuICAgICk7XG4gIH0sIFtlbXB0eUJ1dHRvblByb3BzLCB0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VycmVudEFjY291bnQ/LmFkZHJlc3MgIT09IGFkZHJlc3MpIHtcbiAgICAgIGluYWN0aXZlTW9kYWwoTU9SRV9BQ1RJT05fTU9EQUwpO1xuICAgICAgaW5hY3RpdmVNb2RhbChTVEFLSU5HX0RFVEFJTF9NT0RBTF9JRCk7XG4gICAgICBzZXRTZWxlY3RlZEl0ZW0odW5kZWZpbmVkKTtcbiAgICB9XG4gIH0sIFthZGRyZXNzLCBjdXJyZW50QWNjb3VudD8uYWRkcmVzcywgaW5hY3RpdmVNb2RhbCwgbmF2aWdhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtgc3Rha2luZyAke2NsYXNzTmFtZX1gfVxuICAgICAgcmVzb2x2ZT17ZGF0YUNvbnRleHQuYXdhaXRTdG9yZXMoWydzdGFraW5nJywgJ3ByaWNlJ10pfVxuICAgID5cbiAgICAgIDxMYXlvdXQuQmFzZVxuICAgICAgICBzaG93U3ViSGVhZGVyPXt0cnVlfVxuICAgICAgICBzdWJIZWFkZXJCYWNrZ3JvdW5kPXsndHJhbnNwYXJlbnQnfVxuICAgICAgICBzdWJIZWFkZXJDZW50ZXI9e2ZhbHNlfVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17c3ViSGVhZGVyQnV0dG9ufVxuICAgICAgICBzdWJIZWFkZXJQYWRkaW5nVmVydGljYWw9e3RydWV9XG4gICAgICAgIHRpdGxlPXt0KCdTdGFraW5nJyl9XG4gICAgICA+XG4gICAgICAgIDxTd0xpc3QuU2VjdGlvblxuICAgICAgICAgIGFjdGlvbkJ0bkljb249eyhcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17RmFkZXJzSG9yaXpvbnRhbH1cbiAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgZW5hYmxlU2VhcmNoSW5wdXQ9e3RydWV9XG4gICAgICAgICAgZmlsdGVyQnk9e2ZpbHRlckZ1bmN0aW9ufVxuICAgICAgICAgIGxpc3Q9e2l0ZW1zfVxuICAgICAgICAgIG9uQ2xpY2tBY3Rpb25CdG49e29uQ2xpY2tBY3Rpb25CdG59XG4gICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVySXRlbX1cbiAgICAgICAgICByZW5kZXJXaGVuRW1wdHk9e2VtcHR5U3Rha2luZ0xpc3R9XG4gICAgICAgICAgc2VhcmNoRnVuY3Rpb249e3NlYXJjaEZ1bmN0aW9ufVxuICAgICAgICAgIHNlYXJjaE1pbkNoYXJhY3RlcnNDb3VudD17Mn1cbiAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dDxzdHJpbmc+KCdTZWFyY2ggdG9rZW4nKX1cbiAgICAgICAgICBzaG93QWN0aW9uQnRuXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZpbHRlck1vZGFsXG4gICAgICAgICAgaWQ9e0ZJTFRFUl9NT0RBTF9JRH1cbiAgICAgICAgICBvbkFwcGx5RmlsdGVyPXtvbkFwcGx5RmlsdGVyfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlRmlsdGVyTW9kYWx9XG4gICAgICAgICAgb25DaGFuZ2VPcHRpb249e29uQ2hhbmdlRmlsdGVyT3B0aW9ufVxuICAgICAgICAgIG9wdGlvblNlbGVjdGlvbk1hcD17ZmlsdGVyU2VsZWN0aW9uTWFwfVxuICAgICAgICAgIG9wdGlvbnM9e0ZJTFRFUl9PUFRJT05TfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtcbiAgICAgICAgICAhIShzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLm5vbWluYXRvck1ldGFkYXRhICYmIHNlbGVjdGVkSXRlbS5jaGFpblN0YWtpbmdNZXRhZGF0YSkgJiZcbiAgICAgICAgICAoXG4gICAgICAgICAgICA8U3Rha2luZ0RldGFpbE1vZGFsXG4gICAgICAgICAgICAgIGNoYWluU3Rha2luZ01ldGFkYXRhPXtzZWxlY3RlZEl0ZW0uY2hhaW5TdGFraW5nTWV0YWRhdGF9XG4gICAgICAgICAgICAgIG5vbWluYXRvck1ldGFkYXRhPXtzZWxlY3RlZEl0ZW0ubm9taW5hdG9yTWV0YWRhdGF9XG4gICAgICAgICAgICAgIHJld2FyZEl0ZW09e3NlbGVjdGVkSXRlbS5yZXdhcmR9XG4gICAgICAgICAgICAgIHN0YWtpbmc9e3NlbGVjdGVkSXRlbS5zdGFraW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICEhKHNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0ubm9taW5hdG9yTWV0YWRhdGEgJiYgc2VsZWN0ZWRJdGVtLmNoYWluU3Rha2luZ01ldGFkYXRhKSAmJlxuICAgICAgICAgIChcbiAgICAgICAgICAgIDxNb3JlQWN0aW9uTW9kYWxcbiAgICAgICAgICAgICAgY2hhaW5TdGFraW5nTWV0YWRhdGE9e3NlbGVjdGVkSXRlbS5jaGFpblN0YWtpbmdNZXRhZGF0YX1cbiAgICAgICAgICAgICAgbm9taW5hdG9yTWV0YWRhdGE9e3NlbGVjdGVkSXRlbS5ub21pbmF0b3JNZXRhZGF0YX1cbiAgICAgICAgICAgICAgcmV3YXJkPXtzZWxlY3RlZEl0ZW0ucmV3YXJkfVxuICAgICAgICAgICAgICBzdGFraW5nPXtzZWxlY3RlZEl0ZW0uc3Rha2luZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L0xheW91dC5CYXNlPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBTdGFraW5nID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MSxcbiAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVMRyxcblxuICAgICcuYW50LXN3LXNjcmVlbi1sYXlvdXQtYm9keSc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG5cbiAgICAnLmFudC1zdy1saXN0LXNlY3Rpb24nOiB7XG4gICAgICBmbGV4OiAxXG4gICAgfSxcblxuICAgICcuc3Rha2luZ19fZmlsdGVyX29wdGlvbic6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuXG4gICAgJy5zdGFraW5nX19maWx0ZXJfb3B0aW9uX3dyYXBwZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGdhcDogdG9rZW4ubWFyZ2luTEdcbiAgICB9LFxuXG4gICAgJy5zdGFraW5nLWl0ZW0nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblhTXG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFraW5nO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgU3Rha2luZ1R5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IEJhc2VBY2NvdW50SW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9BY2NvdW50L0luZm8vQXZhdGFyR3JvdXAnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgZmluZEFjY291bnRCeUFkZHJlc3MgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR2V0QWNjb3VudHNCeVN0YWtpbmcgKGNoYWluOiBzdHJpbmcsIHN0YWtpbmdUeXBlOiBTdGFraW5nVHlwZSk6IEJhc2VBY2NvdW50SW5mb1tdIHtcbiAgY29uc3Qgc3Rha2luZ0l0ZW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnN0YWtpbmcuc3Rha2luZ01hcCk7XG4gIGNvbnN0IGFjY291bnRzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZS5hY2NvdW50cyk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGFjY291bnRJbmZvczogQmFzZUFjY291bnRJbmZvW10gPSBbXTtcblxuICAgIHN0YWtpbmdJdGVtcy5mb3JFYWNoKChzdGFraW5nSXRlbSkgPT4ge1xuICAgICAgaWYgKHN0YWtpbmdJdGVtLmNoYWluID09PSBjaGFpbiAmJiBzdGFraW5nSXRlbS50eXBlID09PSBzdGFraW5nVHlwZSkge1xuICAgICAgICBhY2NvdW50SW5mb3MucHVzaCh7IGFkZHJlc3M6IHN0YWtpbmdJdGVtLmFkZHJlc3MgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhY2NvdW50SW5mb3MuZm9yRWFjaCgoYWNjb3VudEluZm8pID0+IHtcbiAgICAgIGNvbnN0IGFjY291bnRKc29uID0gZmluZEFjY291bnRCeUFkZHJlc3MoYWNjb3VudHMsIGFjY291bnRJbmZvLmFkZHJlc3MpO1xuXG4gICAgICBpZiAoYWNjb3VudEpzb24pIHtcbiAgICAgICAgYWNjb3VudEluZm8ubmFtZSA9IGFjY291bnRKc29uLm5hbWU7XG4gICAgICAgIGFjY291bnRJbmZvLnR5cGUgPSBhY2NvdW50SnNvbi50eXBlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFjY291bnRJbmZvcztcbiAgfSwgW2FjY291bnRzLCBjaGFpbiwgc3Rha2luZ0l0ZW1zLCBzdGFraW5nVHlwZV0pO1xufVxuIl0sIm5hbWVzIjpbIkV4dHJpbnNpY1R5cGUiLCJTdGFraW5nVHlwZSIsImdldFN0YWtpbmdBdmFpbGFibGVBY3Rpb25zQnlDaGFpbiIsImdldFN0YWtpbmdBdmFpbGFibGVBY3Rpb25zQnlOb21pbmF0b3IiLCJnZXRXaXRoZHJhd2FsSW5mbyIsImlzQWN0aW9uRnJvbVZhbGlkYXRvciIsIlN0YWtpbmdBY3Rpb24iLCJDQU5DRUxfVU5fU1RBS0VfVFJBTlNBQ1RJT04iLCJDTEFJTV9SRVdBUkRfVFJBTlNBQ1RJT04iLCJERUZBVUxUX0NBTkNFTF9VTl9TVEFLRV9QQVJBTVMiLCJERUZBVUxUX0NMQUlNX1JFV0FSRF9QQVJBTVMiLCJERUZBVUxUX1NUQUtFX1BBUkFNUyIsIkRFRkFVTFRfVU5fU1RBS0VfUEFSQU1TIiwiREVGQVVMVF9XSVRIRFJBV19QQVJBTVMiLCJTVEFLRV9UUkFOU0FDVElPTiIsIlVOX1NUQUtFX1RSQU5TQUNUSU9OIiwiV0lUSERSQVdfVFJBTlNBQ1RJT04iLCJ1c2VIYW5kbGVTdWJtaXRUcmFuc2FjdGlvbiIsInVzZVByZUNoZWNrQWN0aW9uIiwidXNlU2VsZWN0b3IiLCJzdWJtaXRTdGFrZUNsYWltUmV3YXJkIiwic3VibWl0U3Rha2VXaXRoZHJhd2FsIiwiaXNBY2NvdW50QWxsIiwiQWN0aXZpdHlJbmRpY2F0b3IiLCJCYWNrZ3JvdW5kSWNvbiIsIk1vZGFsQ29udGV4dCIsIlNldHRpbmdJdGVtIiwiU3dNb2RhbCIsIkNOIiwiQXJyb3dBcmNMZWZ0IiwiQXJyb3dDaXJjbGVEb3duIiwiTWludXNDaXJjbGUiLCJQbHVzQ2lyY2xlIiwiV2FsbGV0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwidXNlVGhlbWUiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJNT1JFX0FDVElPTl9NT0RBTCIsIkNvbXBvbmVudCIsInByb3BzIiwiY2hhaW5TdGFraW5nTWV0YWRhdGEiLCJjbGFzc05hbWUiLCJub21pbmF0b3JNZXRhZGF0YSIsInJld2FyZCIsIm5hdmlnYXRlIiwidG9rZW4iLCJ0IiwiaW5hY3RpdmVNb2RhbCIsImN1cnJlbnRBY2NvdW50IiwiaXNBbGxBY2NvdW50Iiwic3RhdGUiLCJhY2NvdW50U3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2V0U3Rha2VTdG9yYWdlIiwic2V0VW5TdGFrZVN0b3JhZ2UiLCJzZXRDYW5jZWxVblN0YWtlU3RvcmFnZSIsInNldFdpdGhkcmF3U3RvcmFnZSIsInNldENsYWltUmV3YXJkU3RvcmFnZSIsIm9uQ2FuY2VsIiwib25Eb25lVHJhbnNhY3Rpb24iLCJleHRyaW5zaWNIYXNoIiwiY2hhaW4iLCJvbkVycm9yIiwib25TdWNjZXNzIiwiaGFuZGxlV2l0aGRyYXdhbEFjdGlvbiIsInVuZGVmaW5lZCIsInR5cGUiLCJ1bnN0YWtpbmdJbmZvIiwicGFyYW1zIiwidmFsaWRhdG9yQWRkcmVzcyIsInRoZW4iLCJjYXRjaCIsImZpbmFsbHkiLCJoYW5kbGVDbGFpbVJld2FyZEFjdGlvbiIsIlBPT0xFRCIsImFkZHJlc3MiLCJmcm9tIiwic3Rha2luZ1R5cGUiLCJ1bmNsYWltZWRSZXdhcmQiLCJhdmFpbGFibGVBY3Rpb25zIiwib25OYXZpZ2F0ZSIsInVybCIsImFjdGlvbkxpc3QiLCJhY3Rpb25MaXN0QnlDaGFpbiIsIm1hcCIsImFjdGlvbiIsIlVOU1RBS0UiLCJiYWNrZ3JvdW5kSWNvbkNvbG9yIiwiaWNvbiIsImxhYmVsIiwib25DbGljayIsIldJVEhEUkFXIiwiQ0xBSU1fUkVXQVJEIiwiQ0FOQ0VMX1VOU1RBS0UiLCJTVEFLRSIsImRlZmF1bHRDaGFpbiIsImRlZmF1bHRUeXBlIiwib25QcmVDaGVjayIsImNvbnZlcnRTdGFraW5nQWN0aW9uVG9FeHRyaW5zaWNUeXBlIiwiaXNQb29sIiwiU1RBS0lOR19CT05EIiwiU1RBS0lOR19KT0lOX1BPT0wiLCJTVEFLSU5HX1VOQk9ORCIsIlNUQUtJTkdfTEVBVkVfUE9PTCIsIlNUQUtJTkdfV0lUSERSQVciLCJTVEFLSU5HX1BPT0xfV0lUSERSQVciLCJTVEFLSU5HX0NMQUlNX1JFV0FSRCIsIlNUQUtJTkdfQ0FOQ0VMX1VOU1RBS0UiLCJVTktOT1dOIiwib25DbGlja0l0ZW0iLCJfb25DbGljayIsIml0ZW0iLCJhY3Rpb25EaXNhYmxlIiwiaW5jbHVkZXMiLCJoYXNBbkFjdGlvbiIsImlzU2VsZWN0ZWQiLCJhbm90aGVyRGlzYWJsZSIsImRpc2FibGVkIiwiTW9yZUFjdGlvbk1vZGFsIiwidGhlbWUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5YUyIsIm1hcmdpblJpZ2h0IiwiY3Vyc29yIiwib3BhY2l0eSIsIm9wYWNpdHlEaXNhYmxlIiwiYmFja2dyb3VuZCIsImNvbG9yQmdTZWNvbmRhcnkiLCJTdGFraW5nU3RhdHVzIiwiVW5zdGFraW5nU3RhdHVzIiwiQUxMX0FDQ09VTlRfS0VZIiwiZ2V0VmFsaWRhdG9yTGFiZWwiLCJpc1Nob3dOb21pbmF0aW9uQnlWYWxpZGF0b3IiLCJfU1RBS0lOR19DSEFJTl9HUk9VUCIsIl9nZXRDaGFpbk5hdGl2ZVRva2VuQmFzaWNJbmZvIiwiX2dldENoYWluU3Vic3RyYXRlQWRkcmVzc1ByZWZpeCIsImRldGVjdFRyYW5zbGF0ZSIsIk1ldGFJbmZvIiwiQWNjb3VudEl0ZW0iLCJTdGFraW5nU3RhdHVzVWkiLCJ1c2VHZXRBY2NvdW50QnlBZGRyZXNzIiwidXNlRmV0Y2hDaGFpbkluZm8iLCJ1c2VHZXRBY2NvdW50c0J5U3Rha2luZyIsImdldFVuc3Rha2luZ1BlcmlvZCIsImdldFdhaXRpbmdUaW1lIiwidG9TaG9ydCIsIkJ1dHRvbiIsIkljb24iLCJOdW1iZXIiLCJCaWdOIiwiQXJyb3dDaXJjbGVVcFJpZ2h0IiwiRG90c1RocmVlIiwiU1RBS0lOR19ERVRBSUxfTU9EQUxfSUQiLCJnZXRVbnN0YWtpbmdJbmZvIiwidW5zdGFraW5ncyIsImZpbmQiLCJyZXdhcmRJdGVtIiwic3Rha2luZyIsImV4cGVjdGVkUmV0dXJuIiwibWluSm9pbk5vbWluYXRpb25Qb29sIiwibWluU3Rha2UiLCJ1bnN0YWtpbmdQZXJpb2QiLCJhY3RpdmVTdGFrZSIsIm5vbWluYXRpb25zIiwic2hvd2luZ09wdGlvbiIsImlzUmVsYXlDaGFpbiIsInJlbGF5IiwibW9kYWxUaXRsZSIsIk5PTUlOQVRFRCIsInZhbHVlT2YiLCJzZWVNb3JlIiwic2V0U2VlTW9yZSIsImFjdGl2ZU1vZGFsIiwib25DbGlja0Zvb3RlckJ1dHRvbiIsImNoYWluSW5mbyIsImRlY2ltYWxzIiwibmV0d29ya1ByZWZpeCIsImFjY291bnQiLCJzdGFraW5nQWNjb3VudHMiLCJzdGFraW5nVHlwZU5hbWVNYXAiLCJub21pbmF0ZWQiLCJwb29sZWQiLCJvbkNsaWNrU3Rha2VNb3JlQnRuIiwic2V0VGltZW91dCIsIm9uQ2xpY2tVbnN0YWtlQnRuIiwib25DbGlja01vcmVBY3Rpb24iLCJmb290ZXIiLCJsdGUiLCJvbkNsaWNrU2VlTW9yZUJ0biIsIm9uQ2xvc2VNb2RhbCIsImdldFN0YWtpbmdTdGF0dXMiLCJzdGF0dXMiLCJFQVJOSU5HX1JFV0FSRCIsImFjdGl2ZSIsIlBBUlRJQUxMWV9FQVJOSU5HIiwicGFydGlhbEVhcm5pbmciLCJXQUlUSU5HIiwid2FpdGluZyIsImluYWN0aXZlIiwicmVuZGVyVW5zdGFraW5nSW5mbyIsInVuc3Rha2luZ0RhdGEiLCJ2YWxpZGF0b3JJZGVudGl0eSIsIm5hdGl2ZVRva2VuIiwidmFsaWRhdG9yTWluU3Rha2UiLCJVTkxPQ0tJTkciLCJjbGFpbWFibGUiLCJ3YWl0aW5nVGltZSIsIm5hbWUiLCJzY2hlbWEiLCJ0b3RhbFJld2FyZCIsInBhcnNlRmxvYXQiLCJTdHJpbmciLCJ1bmxvY2tpbmdCYWxhbmNlIiwiY29sb3JUZXh0TGlnaHQ0IiwibGVuZ3RoIiwiU3Rha2luZ0RldGFpbE1vZGFsIiwiZmxleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCIsIm1hcmdpblhYUyIsImNvbG9yIiwib3ZlcmZsb3ciLCJmbGV4R3JvdyIsIndpZHRoIiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIm1hcmdpblRvcCIsIm1hcmdpbiIsInBhZGRpbmdCb3R0b20iLCJib3JkZXIiLCJFbXB0eUxpc3QiLCJGaWx0ZXJNb2RhbCIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiU3dTdGFraW5nSXRlbSIsIkRhdGFDb250ZXh0IiwidXNlRmlsdGVyTW9kYWwiLCJ1c2VHZXRTdGFraW5nTGlzdCIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVNldEN1cnJlbnRQYWdlIiwicmVsb2FkQ3JvbiIsInNvcnRTdGFraW5nQnlWYWx1ZSIsIlN3TGlzdCIsIkFycm93Q2xvY2t3aXNlIiwiRGF0YWJhc2UiLCJGYWRlcnNIb3Jpem9udGFsIiwiUGx1cyIsInVzZUVmZmVjdCIsIkZJTFRFUl9NT0RBTF9JRCIsIkZpbHRlclZhbHVlIiwicmlnaHRJY29uIiwicmVsb2FkSWNvbiIsImRhdGFDb250ZXh0IiwiZGF0YSIsInN0YWtpbmdJdGVtcyIsInByaWNlTWFwIiwiZmlsdGVyU2VsZWN0aW9uTWFwIiwib25BcHBseUZpbHRlciIsIm9uQ2hhbmdlRmlsdGVyT3B0aW9uIiwib25DbG9zZUZpbHRlck1vZGFsIiwic2VsZWN0ZWRGaWx0ZXJzIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwibG9hZGluZyIsInNldExvYWRpbmciLCJub3RpZnkiLCJzZXRTdG9yYWdlIiwiaXRlbXMiLCJyZXN1bHQiLCJwcmljZSIsInNvcnQiLCJGSUxURVJfT1BUSU9OUyIsInZhbHVlIiwiZmlsdGVyRnVuY3Rpb24iLCJmaWx0ZXIiLCJvbkNsaWNrQWN0aW9uQnRuIiwib25DbGlja1JpZ2h0SWNvbiIsInByZUNoZWNrIiwib25DbGlja1N0YWtlTW9yZSIsInN1YkhlYWRlckJ1dHRvbiIsInNpemUiLCJzdHlsZSIsInRvcCIsImRpcmVjdGlvbiIsImR1cmF0aW9uIiwiY2xvc2FibGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwicmVuZGVySXRlbSIsInNlYXJjaEZ1bmN0aW9uIiwic2VhcmNoVGV4dCIsInNlYXJjaFRleHRMb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImVtcHR5QnV0dG9uUHJvcHMiLCJjaGlsZHJlbiIsInNoYXBlIiwiZW1wdHlTdGFraW5nTGlzdCIsImF3YWl0U3RvcmVzIiwiU3Rha2luZyIsImNvbG9yVGV4dExpZ2h0MSIsImZvbnRTaXplIiwiZm9udFNpemVMRyIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtYXJnaW5MRyIsImZpbmRBY2NvdW50QnlBZGRyZXNzIiwic3Rha2luZ01hcCIsImFjY291bnRzIiwiYWNjb3VudEluZm9zIiwiZm9yRWFjaCIsInN0YWtpbmdJdGVtIiwicHVzaCIsImFjY291bnRJbmZvIiwiYWNjb3VudEpzb24iXSwic291cmNlUm9vdCI6IiJ9