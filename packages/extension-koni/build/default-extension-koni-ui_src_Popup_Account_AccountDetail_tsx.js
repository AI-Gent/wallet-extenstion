"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Account_AccountDetail_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/AccountDetail.tsx":
/*!****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/AccountDetail.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MantaPayReducerActionType": () => (/* binding */ MantaPayReducerActionType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mantaPayReducer": () => (/* binding */ mantaPayReducer)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Account_AccountAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Account/AccountAvatar */ "../extension-koni-ui/src/components/Account/AccountAvatar.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useDeleteAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useDeleteAccount */ "../extension-koni-ui/src/hooks/account/useDeleteAccount.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetAccountByAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetAccountByAddress */ "../extension-koni-ui/src/hooks/account/useGetAccountByAddress.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetAccountSignModeByAddress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetAccountSignModeByAddress */ "../extension-koni-ui/src/hooks/account/useGetAccountSignModeByAddress.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetMantaPayConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetMantaPayConfig */ "../extension-koni-ui/src/hooks/account/useGetMantaPayConfig.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useIsMantaPayAvailable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useIsMantaPayAvailable */ "../extension-koni-ui/src/hooks/account/useIsMantaPayAvailable.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useUnlockChecker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useUnlockChecker */ "../extension-koni-ui/src/hooks/common/useUnlockChecker.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_types_account__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-koni-ui/types/account */ "../extension-koni-ui/src/types/account.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_common_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/common/dom */ "../extension-koni-ui/src/utils/common/dom.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/form/form */ "../extension-koni-ui/src/utils/form/form.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/field/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-alert/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/setting-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/switch/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Swatches.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/QrCode.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Eye.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Wallet.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/User.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CircleNotch.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FloppyDiskBack.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CopySimple.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldCheck.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Trash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/GitMerge.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Export.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Warning.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_dom_useIsPopup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/dom/useIsPopup */ "../extension-koni-ui/src/hooks/dom/useIsPopup.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0






























var FormFieldName;
(function (FormFieldName) {
  FormFieldName["NAME"] = "name";
})(FormFieldName || (FormFieldName = {}));
var ActionType;
(function (ActionType) {
  ActionType["EXPORT"] = "export";
  ActionType["DERIVE"] = "derive";
  ActionType["DELETE"] = "delete";
})(ActionType || (ActionType = {}));
const DEFAULT_MANTA_PAY_STATE = {
  shouldShowConfirmation: true,
  loading: false
};
let MantaPayReducerActionType;
(function (MantaPayReducerActionType) {
  MantaPayReducerActionType["INIT"] = "INIT";
  MantaPayReducerActionType["SET_SHOULD_SHOW_CONFIRMATION"] = "SET_SHOULD_SHOW_CONFIRMATION";
  MantaPayReducerActionType["CONFIRM_ENABLE"] = "CONFIRM_ENABLE";
  MantaPayReducerActionType["REJECT_ENABLE"] = "REJECT_ENABLE";
  MantaPayReducerActionType["SYNC_FAIL"] = "SYNC_FAIL";
  MantaPayReducerActionType["SET_LOADING"] = "SET_LOADING";
  MantaPayReducerActionType["SET_ERROR_MESSAGE"] = "SET_ERROR_MESSAGE";
})(MantaPayReducerActionType || (MantaPayReducerActionType = {}));
const mantaPayReducer = (state, action) => {
  const {
    payload,
    type
  } = action;
  switch (type) {
    case MantaPayReducerActionType.INIT:
      return DEFAULT_MANTA_PAY_STATE;
    case MantaPayReducerActionType.SET_SHOULD_SHOW_CONFIRMATION:
      return {
        ...state,
        shouldShowConfirmation: payload
      };
    case MantaPayReducerActionType.CONFIRM_ENABLE:
      return {
        ...state,
        shouldShowConfirmation: false,
        loading: false
      };
    case MantaPayReducerActionType.REJECT_ENABLE:
      return {
        ...state,
        shouldShowConfirmation: false
      };
    case MantaPayReducerActionType.SYNC_FAIL:
      return {
        ...state,
        shouldShowConfirmation: false
      };
    case MantaPayReducerActionType.SET_LOADING:
      return {
        ...state,
        loading: payload
      };
    case MantaPayReducerActionType.SET_ERROR_MESSAGE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      throw new Error("Can't handle action");
  }
};
const zkModeConfirmationId = 'zkModeConfirmation';
function getZkErrorMessage(error) {
  if (error === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_21__.MantaPayEnableMessage.WRONG_PASSWORD) {
    return (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_22__.detectTranslate)('Wrong password');
  } else if (error === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_21__.MantaPayEnableMessage.CHAIN_DISCONNECTED) {
    return (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_22__.detectTranslate)('Network is disconnected');
  }
  return (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_22__.detectTranslate)('Some errors occurred. Please try again later');
}
const Component = props => {
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_23__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useNavigate)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useSearchParams)();
  const notify = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_26__.useTheme)();
  const {
    accountAddress
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)();
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__.ModalContext);
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  const enableMantaPayConfirm = searchParams.get('enableMantaPayConfirm') === 'true';
  const isPopup = (0,_hooks_dom_useIsPopup__WEBPACK_IMPORTED_MODULE_19__["default"])();
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__["default"].useForm();
  const account = (0,_subwallet_extension_koni_ui_hooks_account_useGetAccountByAddress__WEBPACK_IMPORTED_MODULE_4__["default"])(accountAddress);
  const deleteAccountAction = (0,_subwallet_extension_koni_ui_hooks_account_useDeleteAccount__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const saveTimeOutRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)();
  const [deleting, setDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
  const [deriving, setDeriving] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
  const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
  const checkUnlock = (0,_subwallet_extension_koni_ui_hooks_common_useUnlockChecker__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const signMode = (0,_subwallet_extension_koni_ui_hooks_account_useGetAccountSignModeByAddress__WEBPACK_IMPORTED_MODULE_5__["default"])(accountAddress);
  const mantaPayConfig = (0,_subwallet_extension_koni_ui_hooks_account_useGetMantaPayConfig__WEBPACK_IMPORTED_MODULE_6__.useGetMantaPayConfig)(accountAddress || '');
  const isZkModeEnabled = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(() => {
    return !!mantaPayConfig && mantaPayConfig.enabled;
  }, [mantaPayConfig]);
  const zkModeSyncState = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useSelector)(state => state.mantaPay);
  const [mantaPayState, dispatchMantaPayState] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useReducer)(mantaPayReducer, DEFAULT_MANTA_PAY_STATE);
  const handleEnableMantaPay = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(() => {
    activeModal(zkModeConfirmationId);
  }, [activeModal]);
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(() => {
    if (enableMantaPayConfirm && !isZkModeEnabled && !zkModeSyncState.isSyncing) {
      handleEnableMantaPay();
    }
  }, [enableMantaPayConfirm, handleEnableMantaPay, isZkModeEnabled, zkModeSyncState.isSyncing]);
  const canDerive = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(() => {
    if (account) {
      if (account.isExternal) {
        return false;
      } else {
        if (account.type === 'ethereum') {
          return !!account.isMasterAccount;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  }, [account]);
  const isZkModeAvailable = (0,_subwallet_extension_koni_ui_hooks_account_useIsMantaPayAvailable__WEBPACK_IMPORTED_MODULE_7__.useIsMantaPayAvailable)(account);
  const walletNamePrefixIcon = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(() => {
    switch (signMode) {
      case _subwallet_extension_koni_ui_types_account__WEBPACK_IMPORTED_MODULE_12__.AccountSignMode.LEDGER:
        return phosphor_react__WEBPACK_IMPORTED_MODULE_29__["default"];
      case _subwallet_extension_koni_ui_types_account__WEBPACK_IMPORTED_MODULE_12__.AccountSignMode.QR:
        return phosphor_react__WEBPACK_IMPORTED_MODULE_30__["default"];
      case _subwallet_extension_koni_ui_types_account__WEBPACK_IMPORTED_MODULE_12__.AccountSignMode.READ_ONLY:
        return phosphor_react__WEBPACK_IMPORTED_MODULE_31__["default"];
      case _subwallet_extension_koni_ui_types_account__WEBPACK_IMPORTED_MODULE_12__.AccountSignMode.INJECTED:
        return phosphor_react__WEBPACK_IMPORTED_MODULE_32__["default"];
      default:
        return phosphor_react__WEBPACK_IMPORTED_MODULE_33__["default"];
    }
  }, [signMode]);
  const onDelete = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(() => {
    if (account !== null && account !== void 0 && account.address) {
      deleteAccountAction().then(() => {
        setDeleting(true);
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__.forgetAccount)(account.address).then(() => {
          goHome();
        }).catch(e => {
          notify({
            message: e.message,
            type: 'error'
          });
        }).finally(() => {
          setDeleting(false);
        });
      }).catch(e => {
        if (e) {
          notify({
            message: e.message,
            type: 'error'
          });
        }
      });
    }
  }, [account === null || account === void 0 ? void 0 : account.address, deleteAccountAction, notify, goHome]);
  const onDerive = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(() => {
    if (!(account !== null && account !== void 0 && account.address)) {
      return;
    }
    checkUnlock().then(() => {
      setDeriving(true);
      setTimeout(() => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__.deriveAccountV3)({
          address: account.address
        }).then(() => {
          goHome();
        }).catch(e => {
          notify({
            message: e.message,
            type: 'error'
          });
        }).finally(() => {
          setDeriving(false);
        });
      }, 500);
    }).catch(() => {
      // User cancel unlock
    });
  }, [account === null || account === void 0 ? void 0 : account.address, checkUnlock, goHome, notify]);
  const onExport = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(() => {
    if (account !== null && account !== void 0 && account.address) {
      navigate(`/accounts/export/${account.address}`);
    }
  }, [account === null || account === void 0 ? void 0 : account.address, navigate]);
  const onCopyAddress = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(() => {
    (0,_subwallet_extension_koni_ui_utils_common_dom__WEBPACK_IMPORTED_MODULE_14__.copyToClipboard)((account === null || account === void 0 ? void 0 : account.address) || '');
    notify({
      message: t('Copied to clipboard')
    });
  }, [account === null || account === void 0 ? void 0 : account.address, notify, t]);
  const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)((changedFields, allFields) => {
    const changeMap = (0,_subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_15__.convertFieldToObject)(changedFields);
    if (changeMap[FormFieldName.NAME]) {
      clearTimeout(saveTimeOutRef.current);
      setSaving(true);
      saveTimeOutRef.current = setTimeout(() => {
        form.submit();
      }, 1000);
    }
  }, [form]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(values => {
    clearTimeout(saveTimeOutRef.current);
    const name = values[FormFieldName.NAME];
    if (!account || name === account.name) {
      setSaving(false);
      return;
    }
    const address = account.address;
    if (!address) {
      setSaving(false);
      return;
    }
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__.editAccount)(account.address, name.trim()).catch(console.error).finally(() => {
      setSaving(false);
    });
  }, [account]);
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(() => {
    if (!account) {
      goHome();
    }
  }, [account, goHome, navigate]);
  const onSwitchMantaPay = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)((checked, event) => {
    if (checked) {
      if (isPopup) {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__.windowOpen)({
          allowedPath: '/accounts/detail',
          subPath: account ? `/${account.address}` : undefined,
          params: {
            enableMantaPayConfirm: 'true'
          }
        }).catch(console.warn);
      } else {
        handleEnableMantaPay();
      }
    } else {
      if (!zkModeSyncState.isSyncing) {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__.disableMantaPay)(account === null || account === void 0 ? void 0 : account.address).then(result => {
          if (result) {
            dispatchMantaPayState({
              type: MantaPayReducerActionType.INIT,
              payload: undefined
            });
            notify({
              message: t('ZK assets are hidden as ZK mode is disabled'),
              type: 'success',
              duration: 3
            });
          } else {
            notify({
              message: t('Something went wrong'),
              type: 'error'
            });
          }
        }).catch(() => {
          notify({
            message: t('Something went wrong'),
            type: 'error'
          });
        });
      } else {
        notify({
          message: t('ZK mode is syncing'),
          type: 'warning'
        });
      }
    }
  }, [account, handleEnableMantaPay, isPopup, notify, t, zkModeSyncState.isSyncing]);
  const onCloseZkModeConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(() => {
    if (!mantaPayState.loading) {
      dispatchMantaPayState({
        type: MantaPayReducerActionType.REJECT_ENABLE,
        payload: undefined
      });
      inactiveModal(zkModeConfirmationId);
    }
  }, [inactiveModal, mantaPayState.loading]);
  const onOkZkModeConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(password => {
    dispatchMantaPayState({
      type: MantaPayReducerActionType.SET_LOADING,
      payload: true
    });
    setTimeout(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_11__.enableMantaPay)({
        address: account === null || account === void 0 ? void 0 : account.address,
        password
      }).then(result => {
        if (result.success) {
          inactiveModal(zkModeConfirmationId);
          dispatchMantaPayState({
            type: MantaPayReducerActionType.CONFIRM_ENABLE,
            payload: undefined
          });
        } else {
          if (result.message !== _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_21__.MantaPayEnableMessage.WRONG_PASSWORD) {
            notify({
              type: 'error',
              message: t(getZkErrorMessage(result.message))
            });
          }
          dispatchMantaPayState({
            type: MantaPayReducerActionType.SET_ERROR_MESSAGE,
            payload: t(getZkErrorMessage(result.message))
          });
        }
      }).catch(e => {
        console.error(e);
        dispatchMantaPayState({
          type: MantaPayReducerActionType.SYNC_FAIL,
          payload: undefined
        });
      });
    }, 1000);
  }, [account === null || account === void 0 ? void 0 : account.address, inactiveModal, notify, t]);
  if (!account) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(className),
    resolve: dataContext.awaitStores(['mantaPay']),
    children: [zkModeSyncState.isSyncing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: 'zk-mask'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      disableBack: deriving || zkModeSyncState.isSyncing,
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
        onClick: goHome,
        disabled: deriving || zkModeSyncState.isSyncing
      }],
      title: t('Account details'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
        className: "body-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__["default"], {
          className: 'account-detail-form',
          form: form,
          initialValues: {
            [FormFieldName.NAME]: account.name || ''
          },
          name: "account-detail-form",
          onFieldsChange: onUpdate,
          onFinish: onSubmit,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__["default"].Item, {
            className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('account-field'),
            name: FormFieldName.NAME,
            rules: [{
              message: t('Account name is required'),
              transform: value => value.trim(),
              required: true
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_34__["default"], {
              className: "account-name-input",
              disabled: deriving || zkModeSyncState.isSyncing || account.isInjected,
              label: t('Account name'),
              onBlur: form.submit,
              placeholder: t('Account name'),
              prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_35__["default"], {
                backgroundColor: "var(--wallet-name-icon-bg-color)",
                className: 'user-name-icon',
                iconColor: "var(--wallet-name-icon-color)",
                phosphorIcon: walletNamePrefixIcon
              }),
              suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_36__["default"], {
                className: classnames__WEBPACK_IMPORTED_MODULE_16___default()({
                  loading: saving
                }),
                phosphorIcon: saving ? phosphor_react__WEBPACK_IMPORTED_MODULE_37__["default"] : phosphor_react__WEBPACK_IMPORTED_MODULE_38__["default"],
                size: "sm"
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('account-field'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_39__["default"], {
            content: (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_13__.toShort)(account.address, 11, 13),
            label: t('Wallet address'),
            placeholder: t('Wallet address'),
            prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_extension_koni_ui_components_Account_AccountAvatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
              size: token.sizeMD,
              value: account.address
            }),
            suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_40__["default"], {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_36__["default"], {
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_41__["default"],
                size: "sm"
              }),
              onClick: onCopyAddress,
              size: "xs",
              type: "ghost"
            })
          })
        }), zkModeSyncState.isSyncing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_42__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('zk-alert-area'),
          description: zkModeSyncState.progress === 100 ? t('All done, you can go back home') : t('This may take a few minutes. Please keep the app open'),
          title: zkModeSyncState.progress === 100 ? t('Zk mode is ready') : t('Zk mode is syncing: {{percent}}%', {
            replace: {
              percent: zkModeSyncState.progress || '0'
            }
          }),
          type: zkModeSyncState.progress === 100 ? 'success' : 'warning'
        }), isZkModeAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_43__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(`zk-setting ${!zkModeSyncState.isSyncing ? 'zk-sync-margin' : ''}`),
          leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_35__["default"], {
            backgroundColor: token['green-7'],
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_44__["default"],
            size: "sm",
            weight: "fill"
          }),
          name: t('Zk mode'),
          rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_45__["default"], {
            checked: isZkModeEnabled,
            disabled: zkModeSyncState.isSyncing,
            onClick: onSwitchMantaPay
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('account-detail___action-footer'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_40__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('account-button'),
          disabled: deriving || zkModeSyncState.isSyncing || account.isInjected,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_36__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_46__["default"],
            weight: "fill"
          }),
          loading: deleting,
          onClick: onDelete,
          schema: "error"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_40__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('account-button'),
          disabled: !canDerive || zkModeSyncState.isSyncing || account.isInjected,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_36__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_47__["default"],
            weight: "fill"
          }),
          loading: deriving,
          onClick: onDerive,
          schema: "secondary",
          children: t('Derive')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_40__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('account-button'),
          disabled: account.isExternal || deriving || zkModeSyncState.isSyncing || account.isInjected,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_36__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_48__["default"],
            weight: "fill"
          }),
          onClick: onExport,
          schema: "secondary",
          children: t('Export')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_49__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('account-detail__zk-mode-confirmation'),
        closable: false,
        footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.ZkModeFooter, {
          error: mantaPayState.error,
          loading: mantaPayState.loading,
          onCancel: onCloseZkModeConfirmation,
          onOk: onOkZkModeConfirmation
        }),
        id: zkModeConfirmationId,
        maskClosable: false,
        title: t('Enable ZK mode?'),
        wrapClassName: className,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: 'zk-warning__container',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: 'zk-warning__title',
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_36__["default"], {
              customSize: '20px',
              iconColor: token.colorWarning,
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_50__["default"],
              weight: 'bold'
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
              className: 'zk-warning__title-text',
              children: t('ZK mode requires data synchronization')
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
            className: 'zk-warning__subtitle',
            children: t('Using the app is not advised until synchronization finishes. First-time synchronization can take up to 45 minutes or longer. Proceed?')
          })]
        })
      })]
    })]
  });
};
const AccountDetail = (0,styled_components__WEBPACK_IMPORTED_MODULE_26__["default"])(Component).withConfig({
  displayName: "AccountDetail",
  componentId: "sc-12smu7y-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.account-detail-form': {
      marginTop: token.margin
    },
    '.ant-sw-screen-layout-body': {
      display: 'flex',
      flexDirection: 'column'
    },
    '.zk-mask': {
      width: '100%',
      height: '100%',
      zIndex: 3,
      position: 'absolute',
      backgroundColor: token.colorBgMask
    },
    '.body-container': {
      overflow: 'scroll',
      flex: 1,
      padding: `0 ${token.padding}px`,
      '--wallet-name-icon-bg-color': token['geekblue-6'],
      '--wallet-name-icon-color': token.colorWhite,
      '.ant-background-icon': {
        width: token.sizeMD,
        height: token.sizeMD,
        '.user-name-icon': {
          span: {
            height: token.sizeSM,
            width: token.sizeSM
          }
        }
      },
      '.account-qr': {
        marginTop: token.margin,
        marginBottom: token.marginLG,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      '.account-field': {
        marginBottom: token.marginXS,
        '.single-icon-only': {
          color: token['gray-4']
        },
        '.ant-input-label': {
          marginBottom: token.marginXS - 2
        },
        '.ant-input-suffix': {
          marginRight: 0,
          marginLeft: token.marginXS
        },
        '.ant-btn': {
          height: 'auto',
          marginRight: -(token.marginSM - 2)
        }
      },
      '.mb-lg': {
        marginBottom: token.marginLG
      },
      '.account-button': {
        marginBottom: token.marginXS,
        gap: token.sizeXS,
        color: token.colorTextLight1,
        '&:disabled': {
          color: token.colorTextLight1,
          opacity: 0.4
        }
      },
      [`.action-type-${ActionType.DERIVE}`]: {
        '--icon-bg-color': token['magenta-7']
      },
      [`.action-type-${ActionType.EXPORT}`]: {
        '--icon-bg-color': token['green-6']
      },
      [`.action-type-${ActionType.DELETE}`]: {
        '--icon-bg-color': token['colorError-6'],
        color: token['colorError-6'],
        '.ant-background-icon': {
          color: token.colorTextLight1
        },
        '&:disabled': {
          color: token['colorError-6'],
          '.ant-background-icon': {
            color: token.colorTextLight1
          }
        }
      }
    },
    '.account-name-input': {
      '.loading': {
        color: token['gray-5'],
        animation: 'spinner-loading 1s infinite linear'
      }
    },
    '.zk-alert-area': {
      position: 'relative',
      zIndex: 4,
      marginTop: token.margin,
      marginBottom: token.marginXS
    },
    '.zk-setting': {
      position: 'relative',
      zIndex: 4,
      marginBottom: token.marginXS,
      gap: token.sizeXS,
      color: token.colorTextLight1,
      '.ant-web3-block .ant-web3-block-right-item': {
        marginRight: 0
      }
    },
    '.zk-sync-margin': {
      marginTop: token.margin
    },
    '.zk_confirmation_modal__footer': {
      display: 'flex',
      justifyContent: 'center'
    },
    '.footer__button': {
      flexGrow: 1
    },
    '.zk-warning__title': {
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      justifyContent: 'center',
      fontSize: token.size,
      lineHeight: token.lineHeight
    },
    '.zk-warning__title-text': {
      color: token.colorWarning,
      fontWeight: token.headingFontWeight
    },
    '.zk-warning__subtitle': {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'justify',
      marginTop: token.marginMD,
      paddingLeft: token.padding,
      paddingRight: token.padding,
      fontWeight: token.bodyFontWeight,
      color: token.colorTextTertiary
    },
    '.account-detail___action-footer': {
      backgroundColor: token.colorBgDefault,
      position: 'sticky',
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      gap: token.marginSM,
      padding: token.padding,
      paddingBottom: '33px',
      button: {
        flex: 2
      },
      'button:nth-child(1)': {
        flex: 1
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountDetail);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfQWNjb3VudF9BY2NvdW50RGV0YWlsX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRXVGO0FBQ3JCO0FBQ3FDO0FBQ2I7QUFDVjtBQUNXO0FBQ1k7QUFDZ0I7QUFDaEI7QUFDSTtBQUNuQjtBQUNFO0FBQ0k7QUFDb0Q7QUFHckU7QUFFaEI7QUFDbUI7QUFDSTtBQUN3RDtBQUNoSDtBQUNpSTtBQUNwRDtBQUMxRDtBQUNMO0FBQ2lDO0FBQ3RCO0FBRUQ7QUFBQTtBQUFBO0FBQUEsSUFJL0NtRSxhQUFhO0FBQUEsV0FBYkEsYUFBYTtFQUFiQSxhQUFhO0FBQUEsR0FBYkEsYUFBYSxLQUFiQSxhQUFhO0FBQUEsSUFJYkMsVUFBVTtBQUFBLFdBQVZBLFVBQVU7RUFBVkEsVUFBVTtFQUFWQSxVQUFVO0VBQVZBLFVBQVU7QUFBQSxHQUFWQSxVQUFVLEtBQVZBLFVBQVU7QUFnQmYsTUFBTUMsdUJBQXNDLEdBQUc7RUFDN0NDLHNCQUFzQixFQUFFLElBQUk7RUFDNUJDLE9BQU8sRUFBRTtBQUNYLENBQUM7QUFFTSxJQUFLQyx5QkFBeUI7QUFRcEMsV0FSV0EseUJBQXlCO0VBQXpCQSx5QkFBeUI7RUFBekJBLHlCQUF5QjtFQUF6QkEseUJBQXlCO0VBQXpCQSx5QkFBeUI7RUFBekJBLHlCQUF5QjtFQUF6QkEseUJBQXlCO0VBQXpCQSx5QkFBeUI7QUFBQSxHQUF6QkEseUJBQXlCLEtBQXpCQSx5QkFBeUI7QUFlOUIsTUFBTUMsZUFBZSxHQUFHLENBQUNDLEtBQW9CLEVBQUVDLE1BQTZCLEtBQW9CO0VBQ3JHLE1BQU07SUFBRUMsT0FBTztJQUFFQztFQUFLLENBQUMsR0FBR0YsTUFBTTtFQUVoQyxRQUFRRSxJQUFJO0lBQ1YsS0FBS0wseUJBQXlCLENBQUNNLElBQUk7TUFDakMs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YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvQWNjb3VudERldGFpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IE1hbnRhUGF5RW5hYmxlTWVzc2FnZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgZGV0ZWN0VHJhbnNsYXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS91dGlscyc7XG5pbXBvcnQgeyBDbG9zZUljb24sIExheW91dCwgUGFnZVdyYXBwZXIsIFprTW9kZUZvb3RlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgQWNjb3VudEF2YXRhciBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50QXZhdGFyJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgdXNlRGVsZXRlQWNjb3VudCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlRGVsZXRlQWNjb3VudCc7XG5pbXBvcnQgdXNlR2V0QWNjb3VudEJ5QWRkcmVzcyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR2V0QWNjb3VudEJ5QWRkcmVzcyc7XG5pbXBvcnQgdXNlR2V0QWNjb3VudFNpZ25Nb2RlQnlBZGRyZXNzIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VHZXRBY2NvdW50U2lnbk1vZGVCeUFkZHJlc3MnO1xuaW1wb3J0IHsgdXNlR2V0TWFudGFQYXlDb25maWcgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR2V0TWFudGFQYXlDb25maWcnO1xuaW1wb3J0IHsgdXNlSXNNYW50YVBheUF2YWlsYWJsZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VJc01hbnRhUGF5QXZhaWxhYmxlJztcbmltcG9ydCB1c2VOb3RpZmljYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlTm90aWZpY2F0aW9uJztcbmltcG9ydCB1c2VVbmxvY2tDaGVja2VyIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZVVubG9ja0NoZWNrZXInO1xuaW1wb3J0IHVzZURlZmF1bHROYXZpZ2F0ZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3JvdXRlci91c2VEZWZhdWx0TmF2aWdhdGUnO1xuaW1wb3J0IHsgZGVyaXZlQWNjb3VudFYzLCBkaXNhYmxlTWFudGFQYXksIGVkaXRBY2NvdW50LCBlbmFibGVNYW50YVBheSwgZm9yZ2V0QWNjb3VudCwgd2luZG93T3BlbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvc3RvcmVzJztcbmltcG9ydCB7IFBob3NwaG9ySWNvbiwgVGhlbWUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEFjY291bnRTaWduTW9kZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMvYWNjb3VudCc7XG5pbXBvcnQgeyBGb3JtQ2FsbGJhY2tzLCBGb3JtRmllbGREYXRhIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcy9mb3JtJztcbmltcG9ydCB7IHRvU2hvcnQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IGNvcHlUb0NsaXBib2FyZCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvY29tbW9uL2RvbSc7XG5pbXBvcnQgeyBjb252ZXJ0RmllbGRUb09iamVjdCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvZm9ybS9mb3JtJztcbmltcG9ydCB7IEJhY2tncm91bmRJY29uLCBCdXR0b24sIEZpZWxkLCBGb3JtLCBJY29uLCBJbnB1dCwgTW9kYWxDb250ZXh0LCBTZXR0aW5nSXRlbSwgU3dBbGVydCwgU3dpdGNoLCBTd01vZGFsIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDaXJjbGVOb3RjaCwgQ29weVNpbXBsZSwgRXhwb3J0LCBFeWUsIEZsb3BweURpc2tCYWNrLCBHaXRNZXJnZSwgUXJDb2RlLCBTaGllbGRDaGVjaywgU3dhdGNoZXMsIFRyYXNoLCBVc2VyLCBXYWxsZXQsIFdhcm5pbmcgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVkdWNlciwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHVzZUlzUG9wdXAgZnJvbSAnLi4vLi4vaG9va3MvZG9tL3VzZUlzUG9wdXAnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuZW51bSBGb3JtRmllbGROYW1lIHtcbiAgTkFNRSA9ICduYW1lJ1xufVxuXG5lbnVtIEFjdGlvblR5cGUge1xuICBFWFBPUlQgPSAnZXhwb3J0JyxcbiAgREVSSVZFID0gJ2Rlcml2ZScsXG4gIERFTEVURSA9ICdkZWxldGUnXG59XG5cbmludGVyZmFjZSBEZXRhaWxGb3JtU3RhdGUge1xuICBbRm9ybUZpZWxkTmFtZS5OQU1FXTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgTWFudGFQYXlTdGF0ZSB7XG4gIHNob3VsZFNob3dDb25maXJtYXRpb246IGJvb2xlYW4sXG4gIGxvYWRpbmc6IGJvb2xlYW4sXG4gIGVycm9yPzogc3RyaW5nXG59XG5cbmNvbnN0IERFRkFVTFRfTUFOVEFfUEFZX1NUQVRFOiBNYW50YVBheVN0YXRlID0ge1xuICBzaG91bGRTaG93Q29uZmlybWF0aW9uOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZVxufTtcblxuZXhwb3J0IGVudW0gTWFudGFQYXlSZWR1Y2VyQWN0aW9uVHlwZSB7XG4gIElOSVQgPSAnSU5JVCcsXG4gIFNFVF9TSE9VTERfU0hPV19DT05GSVJNQVRJT04gPSAnU0VUX1NIT1VMRF9TSE9XX0NPTkZJUk1BVElPTicsXG4gIENPTkZJUk1fRU5BQkxFID0gJ0NPTkZJUk1fRU5BQkxFJyxcbiAgUkVKRUNUX0VOQUJMRSA9ICdSRUpFQ1RfRU5BQkxFJyxcbiAgU1lOQ19GQUlMID0gJ1NZTkNfRkFJTCcsXG4gIFNFVF9MT0FESU5HID0gJ1NFVF9MT0FESU5HJyxcbiAgU0VUX0VSUk9SX01FU1NBR0UgPSAnU0VUX0VSUk9SX01FU1NBR0UnXG59XG5cbmludGVyZmFjZSBNYW50YVBheVJlZHVjZXJBY3Rpb24ge1xuICB0eXBlOiBNYW50YVBheVJlZHVjZXJBY3Rpb25UeXBlLFxuICBwYXlsb2FkOiB1bmtub3duXG59XG5cbmV4cG9ydCBjb25zdCBtYW50YVBheVJlZHVjZXIgPSAoc3RhdGU6IE1hbnRhUGF5U3RhdGUsIGFjdGlvbjogTWFudGFQYXlSZWR1Y2VyQWN0aW9uKTogTWFudGFQYXlTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGF5bG9hZCwgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgTWFudGFQYXlSZWR1Y2VyQWN0aW9uVHlwZS5JTklUOlxuICAgICAgcmV0dXJuIERFRkFVTFRfTUFOVEFfUEFZX1NUQVRFO1xuICAgIGNhc2UgTWFudGFQYXlSZWR1Y2VyQWN0aW9uVHlwZS5TRVRfU0hPVUxEX1NIT1dfQ09ORklSTUFUSU9OOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3VsZFNob3dDb25maXJtYXRpb246IHBheWxvYWQgYXMgYm9vbGVhblxuICAgICAgfTtcbiAgICBjYXNlIE1hbnRhUGF5UmVkdWNlckFjdGlvblR5cGUuQ09ORklSTV9FTkFCTEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvdWxkU2hvd0NvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgTWFudGFQYXlSZWR1Y2VyQWN0aW9uVHlwZS5SRUpFQ1RfRU5BQkxFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3VsZFNob3dDb25maXJtYXRpb246IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgTWFudGFQYXlSZWR1Y2VyQWN0aW9uVHlwZS5TWU5DX0ZBSUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvdWxkU2hvd0NvbmZpcm1hdGlvbjogZmFsc2VcbiAgICAgIH07XG4gICAgY2FzZSBNYW50YVBheVJlZHVjZXJBY3Rpb25UeXBlLlNFVF9MT0FESU5HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHBheWxvYWQgYXMgYm9vbGVhblxuICAgICAgfTtcbiAgICBjYXNlIE1hbnRhUGF5UmVkdWNlckFjdGlvblR5cGUuU0VUX0VSUk9SX01FU1NBR0U6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IHBheWxvYWQgYXMgc3RyaW5nLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaGFuZGxlIGFjdGlvblwiKTtcbiAgfVxufTtcblxuY29uc3QgemtNb2RlQ29uZmlybWF0aW9uSWQgPSAnemtNb2RlQ29uZmlybWF0aW9uJztcblxuZnVuY3Rpb24gZ2V0WmtFcnJvck1lc3NhZ2UgKGVycm9yOiBNYW50YVBheUVuYWJsZU1lc3NhZ2UpIHtcbiAgaWYgKGVycm9yID09PSBNYW50YVBheUVuYWJsZU1lc3NhZ2UuV1JPTkdfUEFTU1dPUkQpIHtcbiAgICByZXR1cm4gZGV0ZWN0VHJhbnNsYXRlKCdXcm9uZyBwYXNzd29yZCcpO1xuICB9IGVsc2UgaWYgKGVycm9yID09PSBNYW50YVBheUVuYWJsZU1lc3NhZ2UuQ0hBSU5fRElTQ09OTkVDVEVEKSB7XG4gICAgcmV0dXJuIGRldGVjdFRyYW5zbGF0ZSgnTmV0d29yayBpcyBkaXNjb25uZWN0ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBkZXRlY3RUcmFuc2xhdGUoJ1NvbWUgZXJyb3JzIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyk7XG59XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgZ29Ib21lIH0gPSB1c2VEZWZhdWx0TmF2aWdhdGUoKTtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3Qgbm90aWZ5ID0gdXNlTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG4gIGNvbnN0IHsgYWNjb3VudEFkZHJlc3MgfSA9IHVzZVBhcmFtcygpO1xuICBjb25zdCB7IGFjdGl2ZU1vZGFsLCBpbmFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG5cbiAgY29uc3QgZW5hYmxlTWFudGFQYXlDb25maXJtID0gc2VhcmNoUGFyYW1zLmdldCgnZW5hYmxlTWFudGFQYXlDb25maXJtJykgPT09ICd0cnVlJztcbiAgY29uc3QgaXNQb3B1cCA9IHVzZUlzUG9wdXAoKTtcblxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm08RGV0YWlsRm9ybVN0YXRlPigpO1xuXG4gIGNvbnN0IGFjY291bnQgPSB1c2VHZXRBY2NvdW50QnlBZGRyZXNzKGFjY291bnRBZGRyZXNzKTtcbiAgY29uc3QgZGVsZXRlQWNjb3VudEFjdGlvbiA9IHVzZURlbGV0ZUFjY291bnQoKTtcblxuICBjb25zdCBzYXZlVGltZU91dFJlZiA9IHVzZVJlZjxOb2RlSlMuVGltZXI+KCk7XG5cbiAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkZXJpdmluZywgc2V0RGVyaXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjaGVja1VubG9jayA9IHVzZVVubG9ja0NoZWNrZXIoKTtcblxuICBjb25zdCBzaWduTW9kZSA9IHVzZUdldEFjY291bnRTaWduTW9kZUJ5QWRkcmVzcyhhY2NvdW50QWRkcmVzcyk7XG5cbiAgY29uc3QgbWFudGFQYXlDb25maWcgPSB1c2VHZXRNYW50YVBheUNvbmZpZyhhY2NvdW50QWRkcmVzcyB8fCAnJyk7XG4gIGNvbnN0IGlzWmtNb2RlRW5hYmxlZCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiAhIW1hbnRhUGF5Q29uZmlnICYmIG1hbnRhUGF5Q29uZmlnLmVuYWJsZWQ7XG4gIH0sIFttYW50YVBheUNvbmZpZ10pO1xuICBjb25zdCB6a01vZGVTeW5jU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubWFudGFQYXkpO1xuICBjb25zdCBbbWFudGFQYXlTdGF0ZSwgZGlzcGF0Y2hNYW50YVBheVN0YXRlXSA9IHVzZVJlZHVjZXIobWFudGFQYXlSZWR1Y2VyLCBERUZBVUxUX01BTlRBX1BBWV9TVEFURSk7XG5cbiAgY29uc3QgaGFuZGxlRW5hYmxlTWFudGFQYXkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWN0aXZlTW9kYWwoemtNb2RlQ29uZmlybWF0aW9uSWQpO1xuICB9LCBbYWN0aXZlTW9kYWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlbmFibGVNYW50YVBheUNvbmZpcm0gJiYgIWlzWmtNb2RlRW5hYmxlZCAmJiAhemtNb2RlU3luY1N0YXRlLmlzU3luY2luZykge1xuICAgICAgaGFuZGxlRW5hYmxlTWFudGFQYXkoKTtcbiAgICB9XG4gIH0sIFtlbmFibGVNYW50YVBheUNvbmZpcm0sIGhhbmRsZUVuYWJsZU1hbnRhUGF5LCBpc1prTW9kZUVuYWJsZWQsIHprTW9kZVN5bmNTdGF0ZS5pc1N5bmNpbmddKTtcblxuICBjb25zdCBjYW5EZXJpdmUgPSB1c2VNZW1vKCgpOiBib29sZWFuID0+IHtcbiAgICBpZiAoYWNjb3VudCkge1xuICAgICAgaWYgKGFjY291bnQuaXNFeHRlcm5hbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYWNjb3VudC50eXBlID09PSAnZXRoZXJldW0nKSB7XG4gICAgICAgICAgcmV0dXJuICEhYWNjb3VudC5pc01hc3RlckFjY291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwgW2FjY291bnRdKTtcblxuICBjb25zdCBpc1prTW9kZUF2YWlsYWJsZSA9IHVzZUlzTWFudGFQYXlBdmFpbGFibGUoYWNjb3VudCk7XG5cbiAgY29uc3Qgd2FsbGV0TmFtZVByZWZpeEljb24gPSB1c2VNZW1vKCgpOiBQaG9zcGhvckljb24gPT4ge1xuICAgIHN3aXRjaCAoc2lnbk1vZGUpIHtcbiAgICAgIGNhc2UgQWNjb3VudFNpZ25Nb2RlLkxFREdFUjpcbiAgICAgICAgcmV0dXJuIFN3YXRjaGVzO1xuICAgICAgY2FzZSBBY2NvdW50U2lnbk1vZGUuUVI6XG4gICAgICAgIHJldHVybiBRckNvZGU7XG4gICAgICBjYXNlIEFjY291bnRTaWduTW9kZS5SRUFEX09OTFk6XG4gICAgICAgIHJldHVybiBFeWU7XG4gICAgICBjYXNlIEFjY291bnRTaWduTW9kZS5JTkpFQ1RFRDpcbiAgICAgICAgcmV0dXJuIFdhbGxldDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBVc2VyO1xuICAgIH1cbiAgfSwgW3NpZ25Nb2RlXSk7XG5cbiAgY29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGFjY291bnQ/LmFkZHJlc3MpIHtcbiAgICAgIGRlbGV0ZUFjY291bnRBY3Rpb24oKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2V0RGVsZXRpbmcodHJ1ZSk7XG4gICAgICAgICAgZm9yZ2V0QWNjb3VudChhY2NvdW50LmFkZHJlc3MpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGdvSG9tZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgIHNldERlbGV0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIG5vdGlmeSh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFthY2NvdW50Py5hZGRyZXNzLCBkZWxldGVBY2NvdW50QWN0aW9uLCBub3RpZnksIGdvSG9tZV0pO1xuXG4gIGNvbnN0IG9uRGVyaXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghYWNjb3VudD8uYWRkcmVzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNoZWNrVW5sb2NrKCkudGhlbigoKSA9PiB7XG4gICAgICBzZXREZXJpdmluZyh0cnVlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlcml2ZUFjY291bnRWMyh7XG4gICAgICAgICAgYWRkcmVzczogYWNjb3VudC5hZGRyZXNzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdvSG9tZSgpO1xuICAgICAgICB9KS5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICBub3RpZnkoe1xuICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXREZXJpdmluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBVc2VyIGNhbmNlbCB1bmxvY2tcbiAgICB9KTtcbiAgfSwgW2FjY291bnQ/LmFkZHJlc3MsIGNoZWNrVW5sb2NrLCBnb0hvbWUsIG5vdGlmeV0pO1xuXG4gIGNvbnN0IG9uRXhwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChhY2NvdW50Py5hZGRyZXNzKSB7XG4gICAgICBuYXZpZ2F0ZShgL2FjY291bnRzL2V4cG9ydC8ke2FjY291bnQuYWRkcmVzc31gKTtcbiAgICB9XG4gIH0sIFthY2NvdW50Py5hZGRyZXNzLCBuYXZpZ2F0ZV0pO1xuXG4gIGNvbnN0IG9uQ29weUFkZHJlc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29weVRvQ2xpcGJvYXJkKGFjY291bnQ/LmFkZHJlc3MgfHwgJycpO1xuICAgIG5vdGlmeSh7XG4gICAgICBtZXNzYWdlOiB0KCdDb3BpZWQgdG8gY2xpcGJvYXJkJylcbiAgICB9KTtcbiAgfSwgW2FjY291bnQ/LmFkZHJlc3MsIG5vdGlmeSwgdF0pO1xuXG4gIGNvbnN0IG9uVXBkYXRlOiBGb3JtQ2FsbGJhY2tzPERldGFpbEZvcm1TdGF0ZT5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSkgPT4ge1xuICAgIGNvbnN0IGNoYW5nZU1hcCA9IGNvbnZlcnRGaWVsZFRvT2JqZWN0PERldGFpbEZvcm1TdGF0ZT4oY2hhbmdlZEZpZWxkcyk7XG5cbiAgICBpZiAoY2hhbmdlTWFwW0Zvcm1GaWVsZE5hbWUuTkFNRV0pIHtcbiAgICAgIGNsZWFyVGltZW91dChzYXZlVGltZU91dFJlZi5jdXJyZW50KTtcbiAgICAgIHNldFNhdmluZyh0cnVlKTtcbiAgICAgIHNhdmVUaW1lT3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfSwgW2Zvcm1dKTtcblxuICBjb25zdCBvblN1Ym1pdDogRm9ybUNhbGxiYWNrczxEZXRhaWxGb3JtU3RhdGU+WydvbkZpbmlzaCddID0gdXNlQ2FsbGJhY2soKHZhbHVlczogRGV0YWlsRm9ybVN0YXRlKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHNhdmVUaW1lT3V0UmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IG5hbWUgPSB2YWx1ZXNbRm9ybUZpZWxkTmFtZS5OQU1FXTtcblxuICAgIGlmICghYWNjb3VudCB8fCBuYW1lID09PSBhY2NvdW50Lm5hbWUpIHtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRyZXNzID0gYWNjb3VudC5hZGRyZXNzO1xuXG4gICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWRpdEFjY291bnQoYWNjb3VudC5hZGRyZXNzLCBuYW1lLnRyaW0oKSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFthY2NvdW50XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgIGdvSG9tZSgpO1xuICAgIH1cbiAgfSwgW2FjY291bnQsIGdvSG9tZSwgbmF2aWdhdGVdKTtcblxuICBjb25zdCBvblN3aXRjaE1hbnRhUGF5ID0gdXNlQ2FsbGJhY2soKGNoZWNrZWQ6IGJvb2xlYW4sIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBpZiAoaXNQb3B1cCkge1xuICAgICAgICB3aW5kb3dPcGVuKHtcbiAgICAgICAgICBhbGxvd2VkUGF0aDogJy9hY2NvdW50cy9kZXRhaWwnLFxuICAgICAgICAgIHN1YlBhdGg6IGFjY291bnQgPyBgLyR7YWNjb3VudC5hZGRyZXNzfWAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBlbmFibGVNYW50YVBheUNvbmZpcm06ICd0cnVlJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZUVuYWJsZU1hbnRhUGF5KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghemtNb2RlU3luY1N0YXRlLmlzU3luY2luZykge1xuICAgICAgICBkaXNhYmxlTWFudGFQYXkoYWNjb3VudD8uYWRkcmVzcyBhcyBzdHJpbmcpXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICBkaXNwYXRjaE1hbnRhUGF5U3RhdGUoeyB0eXBlOiBNYW50YVBheVJlZHVjZXJBY3Rpb25UeXBlLklOSVQsIHBheWxvYWQ6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdaSyBhc3NldHMgYXJlIGhpZGRlbiBhcyBaSyBtb2RlIGlzIGRpc2FibGVkJyksXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdTb21ldGhpbmcgd2VudCB3cm9uZycpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogdCgnU29tZXRoaW5nIHdlbnQgd3JvbmcnKSxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZnkoe1xuICAgICAgICAgIG1lc3NhZ2U6IHQoJ1pLIG1vZGUgaXMgc3luY2luZycpLFxuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthY2NvdW50LCBoYW5kbGVFbmFibGVNYW50YVBheSwgaXNQb3B1cCwgbm90aWZ5LCB0LCB6a01vZGVTeW5jU3RhdGUuaXNTeW5jaW5nXSk7XG5cbiAgY29uc3Qgb25DbG9zZVprTW9kZUNvbmZpcm1hdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIW1hbnRhUGF5U3RhdGUubG9hZGluZykge1xuICAgICAgZGlzcGF0Y2hNYW50YVBheVN0YXRlKHsgdHlwZTogTWFudGFQYXlSZWR1Y2VyQWN0aW9uVHlwZS5SRUpFQ1RfRU5BQkxFLCBwYXlsb2FkOiB1bmRlZmluZWQgfSk7XG4gICAgICBpbmFjdGl2ZU1vZGFsKHprTW9kZUNvbmZpcm1hdGlvbklkKTtcbiAgICB9XG4gIH0sIFtpbmFjdGl2ZU1vZGFsLCBtYW50YVBheVN0YXRlLmxvYWRpbmddKTtcblxuICBjb25zdCBvbk9rWmtNb2RlQ29uZmlybWF0aW9uID0gdXNlQ2FsbGJhY2soKHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaE1hbnRhUGF5U3RhdGUoeyB0eXBlOiBNYW50YVBheVJlZHVjZXJBY3Rpb25UeXBlLlNFVF9MT0FESU5HLCBwYXlsb2FkOiB0cnVlIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZW5hYmxlTWFudGFQYXkoeyBhZGRyZXNzOiBhY2NvdW50Py5hZGRyZXNzIGFzIHN0cmluZywgcGFzc3dvcmQgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgaW5hY3RpdmVNb2RhbCh6a01vZGVDb25maXJtYXRpb25JZCk7XG4gICAgICAgICAgICBkaXNwYXRjaE1hbnRhUGF5U3RhdGUoeyB0eXBlOiBNYW50YVBheVJlZHVjZXJBY3Rpb25UeXBlLkNPTkZJUk1fRU5BQkxFLCBwYXlsb2FkOiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubWVzc2FnZSAhPT0gTWFudGFQYXlFbmFibGVNZXNzYWdlLldST05HX1BBU1NXT1JEKSB7XG4gICAgICAgICAgICAgIG5vdGlmeSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KGdldFprRXJyb3JNZXNzYWdlKHJlc3VsdC5tZXNzYWdlKSlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BhdGNoTWFudGFQYXlTdGF0ZSh7IHR5cGU6IE1hbnRhUGF5UmVkdWNlckFjdGlvblR5cGUuU0VUX0VSUk9SX01FU1NBR0UsIHBheWxvYWQ6IHQoZ2V0WmtFcnJvck1lc3NhZ2UocmVzdWx0Lm1lc3NhZ2UpKSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG5cbiAgICAgICAgICBkaXNwYXRjaE1hbnRhUGF5U3RhdGUoeyB0eXBlOiBNYW50YVBheVJlZHVjZXJBY3Rpb25UeXBlLlNZTkNfRkFJTCwgcGF5bG9hZDogdW5kZWZpbmVkIH0pO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDAwKTtcbiAgfSwgW2FjY291bnQ/LmFkZHJlc3MsIGluYWN0aXZlTW9kYWwsIG5vdGlmeSwgdF0pO1xuXG4gIGlmICghYWNjb3VudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX1cbiAgICAgIHJlc29sdmU9e2RhdGFDb250ZXh0LmF3YWl0U3RvcmVzKFsnbWFudGFQYXknXSl9XG4gICAgPlxuICAgICAgeyB6a01vZGVTeW5jU3RhdGUuaXNTeW5jaW5nICYmIDxkaXYgY2xhc3NOYW1lPXsnemstbWFzayd9IC8+IH1cblxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICBkaXNhYmxlQmFjaz17ZGVyaXZpbmcgfHwgemtNb2RlU3luY1N0YXRlLmlzU3luY2luZ31cbiAgICAgICAgc3ViSGVhZGVySWNvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiA8Q2xvc2VJY29uIC8+LFxuICAgICAgICAgICAgb25DbGljazogZ29Ib21lLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRlcml2aW5nIHx8IHprTW9kZVN5bmNTdGF0ZS5pc1N5bmNpbmdcbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAgIHRpdGxlPXt0KCdBY2NvdW50IGRldGFpbHMnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHktY29udGFpbmVyJz5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2FjY291bnQtcXInPiAqL31cbiAgICAgICAgICB7LyogICA8U3dRUkNvZGUgKi99XG4gICAgICAgICAgey8qICAgICBlcnJvckxldmVsPSdNJyAqL31cbiAgICAgICAgICB7LyogICAgIGljb249JycgKi99XG4gICAgICAgICAgey8qICAgICAvLyBpY29uU2l6ZT17dG9rZW4uc2l6ZUxHICogMS41fSAqL31cbiAgICAgICAgICB7LyogICAgIHNpemU9e3Rva2VuLnNpemVYTCAqIDMuNX0gKi99XG4gICAgICAgICAgey8qICAgICB2YWx1ZT17YWNjb3VudC5hZGRyZXNzfSAqL31cbiAgICAgICAgICB7LyogICAvPiAqL31cbiAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9eydhY2NvdW50LWRldGFpbC1mb3JtJ31cbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICAgIFtGb3JtRmllbGROYW1lLk5BTUVdOiBhY2NvdW50Lm5hbWUgfHwgJydcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBuYW1lPSdhY2NvdW50LWRldGFpbC1mb3JtJ1xuICAgICAgICAgICAgb25GaWVsZHNDaGFuZ2U9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtDTignYWNjb3VudC1maWVsZCcpfVxuICAgICAgICAgICAgICBuYW1lPXtGb3JtRmllbGROYW1lLk5BTUV9XG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnQWNjb3VudCBuYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgc3RhdHVzSGVscEFzVG9vbHRpcD17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhY2NvdW50LW5hbWUtaW5wdXQnXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rlcml2aW5nIHx8IHprTW9kZVN5bmNTdGF0ZS5pc1N5bmNpbmcgfHwgYWNjb3VudC5pc0luamVjdGVkfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdBY2NvdW50IG5hbWUnKX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm0uc3VibWl0fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdBY2NvdW50IG5hbWUnKX1cbiAgICAgICAgICAgICAgICBwcmVmaXg9eyhcbiAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSWNvblxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9J3ZhcigtLXdhbGxldC1uYW1lLWljb24tYmctY29sb3IpJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyd1c2VyLW5hbWUtaWNvbid9XG4gICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj0ndmFyKC0td2FsbGV0LW5hbWUtaWNvbi1jb2xvciknXG4gICAgICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17d2FsbGV0TmFtZVByZWZpeEljb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgc3VmZml4PXsoXG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e0NOKHsgbG9hZGluZzogc2F2aW5nIH0pfVxuICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e3NhdmluZyA/IENpcmNsZU5vdGNoIDogRmxvcHB5RGlza0JhY2t9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDTignYWNjb3VudC1maWVsZCcpfT5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBjb250ZW50PXt0b1Nob3J0KGFjY291bnQuYWRkcmVzcywgMTEsIDEzKX1cbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ1dhbGxldCBhZGRyZXNzJyl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdXYWxsZXQgYWRkcmVzcycpfVxuICAgICAgICAgICAgICBwcmVmaXg9eyhcbiAgICAgICAgICAgICAgICA8QWNjb3VudEF2YXRhclxuICAgICAgICAgICAgICAgICAgc2l6ZT17dG9rZW4uc2l6ZU1EfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnQuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdWZmaXg9eyhcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtDb3B5U2ltcGxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29weUFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICBzaXplPSd4cydcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2dob3N0J1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgemtNb2RlU3luY1N0YXRlLmlzU3luY2luZyAmJiAoXG4gICAgICAgICAgICAgIDxTd0FsZXJ0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtDTignemstYWxlcnQtYXJlYScpfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt6a01vZGVTeW5jU3RhdGUucHJvZ3Jlc3MgPT09IDEwMCA/IHQoJ0FsbCBkb25lLCB5b3UgY2FuIGdvIGJhY2sgaG9tZScpIDogdCgnVGhpcyBtYXkgdGFrZSBhIGZldyBtaW51dGVzLiBQbGVhc2Uga2VlcCB0aGUgYXBwIG9wZW4nKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17emtNb2RlU3luY1N0YXRlLnByb2dyZXNzID09PSAxMDAgPyB0KCdaayBtb2RlIGlzIHJlYWR5JykgOiB0KCdaayBtb2RlIGlzIHN5bmNpbmc6IHt7cGVyY2VudH19JScsIHsgcmVwbGFjZTogeyBwZXJjZW50OiB6a01vZGVTeW5jU3RhdGUucHJvZ3Jlc3MgfHwgJzAnIH0gfSl9XG4gICAgICAgICAgICAgICAgdHlwZT17emtNb2RlU3luY1N0YXRlLnByb2dyZXNzID09PSAxMDAgPyAnc3VjY2VzcycgOiAnd2FybmluZyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNaa01vZGVBdmFpbGFibGUgJiYgKFxuICAgICAgICAgICAgICA8U2V0dGluZ0l0ZW1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e0NOKGB6ay1zZXR0aW5nICR7IXprTW9kZVN5bmNTdGF0ZS5pc1N5bmNpbmcgPyAnemstc3luYy1tYXJnaW4nIDogJyd9YCl9XG4gICAgICAgICAgICAgICAgbGVmdEl0ZW1JY29uPXsoXG4gICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZEljb25cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXt0b2tlblsnZ3JlZW4tNyddfVxuICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e1NoaWVsZENoZWNrfVxuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG5hbWU9e3QoJ1prIG1vZGUnKX1cbiAgICAgICAgICAgICAgICByaWdodEl0ZW09eyhcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNaa01vZGVFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17emtNb2RlU3luY1N0YXRlLmlzU3luY2luZ31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Td2l0Y2hNYW50YVBheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLz4pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q04oJ2FjY291bnQtZGV0YWlsX19fYWN0aW9uLWZvb3RlcicpfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e0NOKCdhY2NvdW50LWJ1dHRvbicpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rlcml2aW5nIHx8IHprTW9kZVN5bmNTdGF0ZS5pc1N5bmNpbmcgfHwgYWNjb3VudC5pc0luamVjdGVkfVxuICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17VHJhc2h9XG4gICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGxvYWRpbmc9e2RlbGV0aW5nfVxuICAgICAgICAgICAgb25DbGljaz17b25EZWxldGV9XG4gICAgICAgICAgICBzY2hlbWE9J2Vycm9yJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtDTignYWNjb3VudC1idXR0b24nKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshY2FuRGVyaXZlIHx8IHprTW9kZVN5bmNTdGF0ZS5pc1N5bmNpbmcgfHwgYWNjb3VudC5pc0luamVjdGVkfVxuICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17R2l0TWVyZ2V9XG4gICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGxvYWRpbmc9e2Rlcml2aW5nfVxuICAgICAgICAgICAgb25DbGljaz17b25EZXJpdmV9XG4gICAgICAgICAgICBzY2hlbWE9J3NlY29uZGFyeSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnRGVyaXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtDTignYWNjb3VudC1idXR0b24nKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXthY2NvdW50LmlzRXh0ZXJuYWwgfHwgZGVyaXZpbmcgfHwgemtNb2RlU3luY1N0YXRlLmlzU3luY2luZyB8fCBhY2NvdW50LmlzSW5qZWN0ZWR9XG4gICAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtFeHBvcnR9XG4gICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uRXhwb3J0fVxuICAgICAgICAgICAgc2NoZW1hPSdzZWNvbmRhcnknXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ0V4cG9ydCcpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U3dNb2RhbFxuICAgICAgICAgIGNsYXNzTmFtZT17Q04oJ2FjY291bnQtZGV0YWlsX196ay1tb2RlLWNvbmZpcm1hdGlvbicpfVxuICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgICBmb290ZXI9eyhcbiAgICAgICAgICAgIDxaa01vZGVGb290ZXJcbiAgICAgICAgICAgICAgZXJyb3I9e21hbnRhUGF5U3RhdGUuZXJyb3J9XG4gICAgICAgICAgICAgIGxvYWRpbmc9e21hbnRhUGF5U3RhdGUubG9hZGluZ31cbiAgICAgICAgICAgICAgb25DYW5jZWw9e29uQ2xvc2Vaa01vZGVDb25maXJtYXRpb259XG4gICAgICAgICAgICAgIG9uT2s9e29uT2taa01vZGVDb25maXJtYXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgaWQ9e3prTW9kZUNvbmZpcm1hdGlvbklkfVxuICAgICAgICAgIG1hc2tDbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgdGl0bGU9e3Q8c3RyaW5nPignRW5hYmxlIFpLIG1vZGU/Jyl9XG4gICAgICAgICAgd3JhcENsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd6ay13YXJuaW5nX19jb250YWluZXInfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnemstd2FybmluZ19fdGl0bGUnfT5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBjdXN0b21TaXplPXsnMjBweCd9XG4gICAgICAgICAgICAgICAgaWNvbkNvbG9yPXt0b2tlbi5jb2xvcldhcm5pbmd9XG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtXYXJuaW5nfVxuICAgICAgICAgICAgICAgIHdlaWdodD17J2JvbGQnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3prLXdhcm5pbmdfX3RpdGxlLXRleHQnfT57dCgnWksgbW9kZSByZXF1aXJlcyBkYXRhIHN5bmNocm9uaXphdGlvbicpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnemstd2FybmluZ19fc3VidGl0bGUnfT5cbiAgICAgICAgICAgICAge3QoJ1VzaW5nIHRoZSBhcHAgaXMgbm90IGFkdmlzZWQgdW50aWwgc3luY2hyb25pemF0aW9uIGZpbmlzaGVzLiBGaXJzdC10aW1lIHN5bmNocm9uaXphdGlvbiBjYW4gdGFrZSB1cCB0byA0NSBtaW51dGVzIG9yIGxvbmdlci4gUHJvY2VlZD8nKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1N3TW9kYWw+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgQWNjb3VudERldGFpbCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5hY2NvdW50LWRldGFpbC1mb3JtJzoge1xuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5cbiAgICB9LFxuXG4gICAgJy5hbnQtc3ctc2NyZWVuLWxheW91dC1ib2R5Jzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgJy56ay1tYXNrJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgekluZGV4OiAzLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdNYXNrXG4gICAgfSxcblxuICAgICcuYm9keS1jb250YWluZXInOiB7XG4gICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gICAgICBmbGV4OiAxLFxuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgICctLXdhbGxldC1uYW1lLWljb24tYmctY29sb3InOiB0b2tlblsnZ2Vla2JsdWUtNiddLFxuICAgICAgJy0td2FsbGV0LW5hbWUtaWNvbi1jb2xvcic6IHRva2VuLmNvbG9yV2hpdGUsXG5cbiAgICAgICcuYW50LWJhY2tncm91bmQtaWNvbic6IHtcbiAgICAgICAgd2lkdGg6IHRva2VuLnNpemVNRCxcbiAgICAgICAgaGVpZ2h0OiB0b2tlbi5zaXplTUQsXG5cbiAgICAgICAgJy51c2VyLW5hbWUtaWNvbic6IHtcbiAgICAgICAgICBzcGFuOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IHRva2VuLnNpemVTTSxcbiAgICAgICAgICAgIHdpZHRoOiB0b2tlbi5zaXplU01cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICcuYWNjb3VudC1xcic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW4sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luTEcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgfSxcblxuICAgICAgJy5hY2NvdW50LWZpZWxkJzoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblhTLFxuXG4gICAgICAgICcuc2luZ2xlLWljb24tb25seSc6IHtcbiAgICAgICAgICBjb2xvcjogdG9rZW5bJ2dyYXktNCddXG4gICAgICAgIH0sXG5cbiAgICAgICAgJy5hbnQtaW5wdXQtbGFiZWwnOiB7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5YUyAtIDJcbiAgICAgICAgfSxcblxuICAgICAgICAnLmFudC1pbnB1dC1zdWZmaXgnOiB7XG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgICAgICAgbWFyZ2luTGVmdDogdG9rZW4ubWFyZ2luWFNcbiAgICAgICAgfSxcblxuICAgICAgICAnLmFudC1idG4nOiB7XG4gICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IC0odG9rZW4ubWFyZ2luU00gLSAyKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAnLm1iLWxnJzoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbkxHXG4gICAgICB9LFxuXG4gICAgICAnLmFjY291bnQtYnV0dG9uJzoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblhTLFxuICAgICAgICBnYXA6IHRva2VuLnNpemVYUyxcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MSxcblxuICAgICAgICAnJjpkaXNhYmxlZCc6IHtcbiAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxLFxuICAgICAgICAgIG9wYWNpdHk6IDAuNFxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBbYC5hY3Rpb24tdHlwZS0ke0FjdGlvblR5cGUuREVSSVZFfWBdOiB7XG4gICAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnbWFnZW50YS03J11cbiAgICAgIH0sXG5cbiAgICAgIFtgLmFjdGlvbi10eXBlLSR7QWN0aW9uVHlwZS5FWFBPUlR9YF06IHtcbiAgICAgICAgJy0taWNvbi1iZy1jb2xvcic6IHRva2VuWydncmVlbi02J11cbiAgICAgIH0sXG5cbiAgICAgIFtgLmFjdGlvbi10eXBlLSR7QWN0aW9uVHlwZS5ERUxFVEV9YF06IHtcbiAgICAgICAgJy0taWNvbi1iZy1jb2xvcic6IHRva2VuWydjb2xvckVycm9yLTYnXSxcbiAgICAgICAgY29sb3I6IHRva2VuWydjb2xvckVycm9yLTYnXSxcblxuICAgICAgICAnLmFudC1iYWNrZ3JvdW5kLWljb24nOiB7XG4gICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MVxuICAgICAgICB9LFxuXG4gICAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICAgIGNvbG9yOiB0b2tlblsnY29sb3JFcnJvci02J10sXG5cbiAgICAgICAgICAnLmFudC1iYWNrZ3JvdW5kLWljb24nOiB7XG4gICAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgICcuYWNjb3VudC1uYW1lLWlucHV0Jzoge1xuICAgICAgJy5sb2FkaW5nJzoge1xuICAgICAgICBjb2xvcjogdG9rZW5bJ2dyYXktNSddLFxuICAgICAgICBhbmltYXRpb246ICdzcGlubmVyLWxvYWRpbmcgMXMgaW5maW5pdGUgbGluZWFyJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLnprLWFsZXJ0LWFyZWEnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogNCxcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5YU1xuICAgIH0sXG5cbiAgICAnLnprLXNldHRpbmcnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogNCxcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luWFMsXG4gICAgICBnYXA6IHRva2VuLnNpemVYUyxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDEsXG5cbiAgICAgICcuYW50LXdlYjMtYmxvY2sgLmFudC13ZWIzLWJsb2NrLXJpZ2h0LWl0ZW0nOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuemstc3luYy1tYXJnaW4nOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpblxuICAgIH0sXG5cbiAgICAnLnprX2NvbmZpcm1hdGlvbl9tb2RhbF9fZm9vdGVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcuZm9vdGVyX19idXR0b24nOiB7XG4gICAgICBmbGV4R3JvdzogMVxuICAgIH0sXG5cbiAgICAnLnprLXdhcm5pbmdfX3RpdGxlJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBnYXA6ICc4cHgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZm9udFNpemU6IHRva2VuLnNpemUsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0XG4gICAgfSxcblxuICAgICcuemstd2FybmluZ19fdGl0bGUtdGV4dCc6IHtcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvcldhcm5pbmcsXG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5oZWFkaW5nRm9udFdlaWdodFxuICAgIH0sXG5cbiAgICAnLnprLXdhcm5pbmdfX3N1YnRpdGxlJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpbk1ELFxuICAgICAgcGFkZGluZ0xlZnQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5ib2R5Rm9udFdlaWdodCxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRUZXJ0aWFyeVxuICAgIH0sXG5cbiAgICAnLmFjY291bnQtZGV0YWlsX19fYWN0aW9uLWZvb3Rlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JCZ0RlZmF1bHQsXG4gICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGdhcDogdG9rZW4ubWFyZ2luU00sXG4gICAgICBwYWRkaW5nOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzMzcHgnLFxuXG4gICAgICBidXR0b246IHtcbiAgICAgICAgZmxleDogMlxuICAgICAgfSxcblxuICAgICAgJ2J1dHRvbjpudGgtY2hpbGQoMSknOiB7XG4gICAgICAgIGZsZXg6IDFcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudERldGFpbDtcbiJdLCJuYW1lcyI6WyJNYW50YVBheUVuYWJsZU1lc3NhZ2UiLCJkZXRlY3RUcmFuc2xhdGUiLCJDbG9zZUljb24iLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIlprTW9kZUZvb3RlciIsIkFjY291bnRBdmF0YXIiLCJEYXRhQ29udGV4dCIsInVzZURlbGV0ZUFjY291bnQiLCJ1c2VHZXRBY2NvdW50QnlBZGRyZXNzIiwidXNlR2V0QWNjb3VudFNpZ25Nb2RlQnlBZGRyZXNzIiwidXNlR2V0TWFudGFQYXlDb25maWciLCJ1c2VJc01hbnRhUGF5QXZhaWxhYmxlIiwidXNlTm90aWZpY2F0aW9uIiwidXNlVW5sb2NrQ2hlY2tlciIsInVzZURlZmF1bHROYXZpZ2F0ZSIsImRlcml2ZUFjY291bnRWMyIsImRpc2FibGVNYW50YVBheSIsImVkaXRBY2NvdW50IiwiZW5hYmxlTWFudGFQYXkiLCJmb3JnZXRBY2NvdW50Iiwid2luZG93T3BlbiIsIkFjY291bnRTaWduTW9kZSIsInRvU2hvcnQiLCJjb3B5VG9DbGlwYm9hcmQiLCJjb252ZXJ0RmllbGRUb09iamVjdCIsIkJhY2tncm91bmRJY29uIiwiQnV0dG9uIiwiRmllbGQiLCJGb3JtIiwiSWNvbiIsIklucHV0IiwiTW9kYWxDb250ZXh0IiwiU2V0dGluZ0l0ZW0iLCJTd0FsZXJ0IiwiU3dpdGNoIiwiU3dNb2RhbCIsIkNOIiwiQ2lyY2xlTm90Y2giLCJDb3B5U2ltcGxlIiwiRXhwb3J0IiwiRXllIiwiRmxvcHB5RGlza0JhY2siLCJHaXRNZXJnZSIsIlFyQ29kZSIsIlNoaWVsZENoZWNrIiwiU3dhdGNoZXMiLCJUcmFzaCIsIlVzZXIiLCJXYWxsZXQiLCJXYXJuaW5nIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVkdWNlciIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTZWxlY3RvciIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwic3R5bGVkIiwidXNlVGhlbWUiLCJ1c2VJc1BvcHVwIiwiRm9ybUZpZWxkTmFtZSIsIkFjdGlvblR5cGUiLCJERUZBVUxUX01BTlRBX1BBWV9TVEFURSIsInNob3VsZFNob3dDb25maXJtYXRpb24iLCJsb2FkaW5nIiwiTWFudGFQYXlSZWR1Y2VyQWN0aW9uVHlwZSIsIm1hbnRhUGF5UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInR5cGUiLCJJTklUIiwiU0VUX1NIT1VMRF9TSE9XX0NPTkZJUk1BVElPTiIsIkNPTkZJUk1fRU5BQkxFIiwiUkVKRUNUX0VOQUJMRSIsIlNZTkNfRkFJTCIsIlNFVF9MT0FESU5HIiwiU0VUX0VSUk9SX01FU1NBR0UiLCJlcnJvciIsIkVycm9yIiwiemtNb2RlQ29uZmlybWF0aW9uSWQiLCJnZXRaa0Vycm9yTWVzc2FnZSIsIldST05HX1BBU1NXT1JEIiwiQ0hBSU5fRElTQ09OTkVDVEVEIiwiQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0IiwibmF2aWdhdGUiLCJnb0hvbWUiLCJzZWFyY2hQYXJhbXMiLCJub3RpZnkiLCJ0b2tlbiIsImFjY291bnRBZGRyZXNzIiwiYWN0aXZlTW9kYWwiLCJpbmFjdGl2ZU1vZGFsIiwiZGF0YUNvbnRleHQiLCJlbmFibGVNYW50YVBheUNvbmZpcm0iLCJnZXQiLCJpc1BvcHVwIiwiZm9ybSIsInVzZUZvcm0iLCJhY2NvdW50IiwiZGVsZXRlQWNjb3VudEFjdGlvbiIsInNhdmVUaW1lT3V0UmVmIiwiZGVsZXRpbmciLCJzZXREZWxldGluZyIsImRlcml2aW5nIiwic2V0RGVyaXZpbmciLCJzYXZpbmciLCJzZXRTYXZpbmciLCJjaGVja1VubG9jayIsInNpZ25Nb2RlIiwibWFudGFQYXlDb25maWciLCJpc1prTW9kZUVuYWJsZWQiLCJlbmFibGVkIiwiemtNb2RlU3luY1N0YXRlIiwibWFudGFQYXkiLCJtYW50YVBheVN0YXRlIiwiZGlzcGF0Y2hNYW50YVBheVN0YXRlIiwiaGFuZGxlRW5hYmxlTWFudGFQYXkiLCJpc1N5bmNpbmciLCJjYW5EZXJpdmUiLCJpc0V4dGVybmFsIiwiaXNNYXN0ZXJBY2NvdW50IiwiaXNaa01vZGVBdmFpbGFibGUiLCJ3YWxsZXROYW1lUHJlZml4SWNvbiIsIkxFREdFUiIsIlFSIiwiUkVBRF9PTkxZIiwiSU5KRUNURUQiLCJvbkRlbGV0ZSIsImFkZHJlc3MiLCJ0aGVuIiwiY2F0Y2giLCJlIiwibWVzc2FnZSIsImZpbmFsbHkiLCJvbkRlcml2ZSIsInNldFRpbWVvdXQiLCJvbkV4cG9ydCIsIm9uQ29weUFkZHJlc3MiLCJvblVwZGF0ZSIsImNoYW5nZWRGaWVsZHMiLCJhbGxGaWVsZHMiLCJjaGFuZ2VNYXAiLCJOQU1FIiwiY2xlYXJUaW1lb3V0IiwiY3VycmVudCIsInN1Ym1pdCIsIm9uU3VibWl0IiwidmFsdWVzIiwibmFtZSIsInRyaW0iLCJjb25zb2xlIiwib25Td2l0Y2hNYW50YVBheSIsImNoZWNrZWQiLCJldmVudCIsImFsbG93ZWRQYXRoIiwic3ViUGF0aCIsInVuZGVmaW5lZCIsInBhcmFtcyIsIndhcm4iLCJyZXN1bHQiLCJkdXJhdGlvbiIsIm9uQ2xvc2Vaa01vZGVDb25maXJtYXRpb24iLCJvbk9rWmtNb2RlQ29uZmlybWF0aW9uIiwicGFzc3dvcmQiLCJzdWNjZXNzIiwiYXdhaXRTdG9yZXMiLCJpY29uIiwib25DbGljayIsImRpc2FibGVkIiwidHJhbnNmb3JtIiwidmFsdWUiLCJyZXF1aXJlZCIsImlzSW5qZWN0ZWQiLCJzaXplTUQiLCJwcm9ncmVzcyIsInJlcGxhY2UiLCJwZXJjZW50IiwiY29sb3JXYXJuaW5nIiwiQWNjb3VudERldGFpbCIsInRoZW1lIiwibWFyZ2luVG9wIiwibWFyZ2luIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JCZ01hc2siLCJvdmVyZmxvdyIsImZsZXgiLCJwYWRkaW5nIiwiY29sb3JXaGl0ZSIsInNwYW4iLCJzaXplU00iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MRyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luWFMiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblNNIiwiZ2FwIiwic2l6ZVhTIiwiY29sb3JUZXh0TGlnaHQxIiwib3BhY2l0eSIsIkRFUklWRSIsIkVYUE9SVCIsIkRFTEVURSIsImFuaW1hdGlvbiIsImZsZXhHcm93IiwiZm9udFNpemUiLCJzaXplIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJoZWFkaW5nRm9udFdlaWdodCIsInRleHRBbGlnbiIsIm1hcmdpbk1EIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib2R5Rm9udFdlaWdodCIsImNvbG9yVGV4dFRlcnRpYXJ5IiwiY29sb3JCZ0RlZmF1bHQiLCJib3R0b20iLCJsZWZ0IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=