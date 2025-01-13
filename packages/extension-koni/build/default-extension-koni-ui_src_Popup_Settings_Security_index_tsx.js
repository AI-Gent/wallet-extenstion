"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_Security_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/Security/index.tsx":
/*!******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/Security/index.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/router */ "../extension-koni-ui/src/constants/router.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_dom_useIsPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/dom/useIsPopup */ "../extension-koni-ui/src/hooks/dom/useIsPopup.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_account_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/account/account */ "../extension-koni-ui/src/utils/account/account.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/setting-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/switch/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Key.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/LockLaminated.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/LockKeyOpen.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/GlobeHemisphereEast.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CaretRight.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldStar.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Camera.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




















var SecurityType;
(function (SecurityType) {
  SecurityType["WALLET_PASSWORD"] = "wallet-password";
  SecurityType["WEBSITE_ACCESS"] = "website-access";
  SecurityType["CAMERA_ACCESS"] = "camera-access";
  SecurityType["AUTO_LOCK"] = "auto-lock";
  SecurityType["UNLOCK_TYPE"] = "unlock-type";
  SecurityType["CHAIN_PATROL_SERVICE"] = "chain-patrol-service";
})(SecurityType || (SecurityType = {}));
const editAutoLockTimeModalId = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.EDIT_AUTO_LOCK_TIME_MODAL;
const editUnlockTypeModalId = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.EDIT_UNLOCK_TYPE_MODAL;
const timeOptions = [5, 10, 15, 30, 60];
const Component = props => {
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)();
  const {
    goBack
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useLocation)();
  const canGoBack = !!location.state;
  const isPopup = (0,_subwallet_extension_koni_ui_hooks_dom_useIsPopup__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__.ModalContext);
  const {
    accounts
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state.accountState);
  const {
    camera,
    enableChainPatrol,
    timeAutoLock,
    unlockType
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state.settings);
  const noAccount = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => (0,_subwallet_extension_koni_ui_utils_account_account__WEBPACK_IMPORTED_MODULE_7__.isNoAccount)(accounts), [accounts]);
  const autoLockOptions = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => timeOptions.map(value => {
    if (value > 0) {
      return {
        value: value,
        label: t('{{time}} minutes', {
          replace: {
            time: value
          }
        })
      };
    } else if (value < 0) {
      return {
        value: value,
        label: t('Required once')
      };
    } else {
      return {
        value: value,
        label: t('Always require')
      };
    }
  }), [t]);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => [{
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
    key: SecurityType.WALLET_PASSWORD,
    title: t('Change wallet password'),
    url: '/keyring/change-password',
    disabled: noAccount
  }, {
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
    key: SecurityType.AUTO_LOCK,
    title: t('Wallet auto-lock'),
    url: '',
    disabled: false
  }, {
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"],
    key: SecurityType.UNLOCK_TYPE,
    title: t('Authenticate with password'),
    url: '',
    disabled: false
  }], [noAccount, t]);
  const websiteAccessItem = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => ({
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
    key: SecurityType.WEBSITE_ACCESS,
    title: t('Manage website access'),
    url: '/settings/dapp-access',
    disabled: noAccount
  }), [noAccount, t]);
  const [loadingCamera, setLoadingCamera] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const [loadingChainPatrol, setLoadingChainPatrol] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    if (canGoBack) {
      goBack();
    } else {
      if (noAccount) {
        navigate(_subwallet_extension_koni_ui_constants_router__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ROUTER_PATH);
      } else {
        navigate('/settings/list');
      }
    }
  }, [canGoBack, goBack, navigate, noAccount]);
  const updateCamera = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(currentValue => {
    return () => {
      setLoadingCamera(true);
      let openNewTab = false;
      if (!currentValue) {
        if (isPopup) {
          openNewTab = true;
        }
      }
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.saveCameraSetting)(!currentValue).then(() => {
        if (openNewTab) {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.windowOpen)({
            allowedPath: '/settings/security'
          }).catch(e => {
            console.log(e);
          });
        }
      }).catch(console.error).finally(() => {
        setLoadingCamera(false);
      });
    };
  }, [isPopup]);
  const updateChainPatrolEnable = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(currentValue => {
    return () => {
      setLoadingChainPatrol(true);
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.saveEnableChainPatrol)(!currentValue).catch(console.error).finally(() => {
        setLoadingChainPatrol(false);
      });
    };
  }, []);
  const onOpenAutoLockTimeModal = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    activeModal(editAutoLockTimeModalId);
  }, [activeModal]);
  const onOpenUnlockTypeModal = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    activeModal(editUnlockTypeModalId);
  }, [activeModal]);
  const onCloseAutoLockTimeModal = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    inactiveModal(editAutoLockTimeModalId);
  }, [inactiveModal]);
  const onCloseUnlockTypeModal = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    inactiveModal(editUnlockTypeModalId);
  }, [inactiveModal]);
  const onClickItem = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(item => {
    return () => {
      switch (item.key) {
        case SecurityType.AUTO_LOCK:
          onOpenAutoLockTimeModal();
          break;
        case SecurityType.UNLOCK_TYPE:
          onOpenUnlockTypeModal();
          break;
        default:
          navigate(item.url);
      }
    };
  }, [navigate, onOpenAutoLockTimeModal, onOpenUnlockTypeModal]);
  const onSelectTime = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(item => {
    return () => {
      inactiveModal(editAutoLockTimeModalId);
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.saveAutoLockTime)(item.value).finally(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.noop);
    };
  }, [inactiveModal]);
  const onSetUnlockType = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(value => {
    return () => {
      inactiveModal(editAutoLockTimeModalId);
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.saveUnlockType)(value).finally(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.noop);
    };
  }, [inactiveModal]);
  const onRenderItem = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(item => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('security-item', `security-type-${item.key}`, {
        disabled: item.disabled
      }),
      leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
        backgroundColor: 'var(--icon-bg-color)',
        phosphorIcon: item.icon,
        size: "sm",
        type: "phosphor",
        weight: "fill"
      }),
      name: item.title,
      onPressItem: item.disabled ? undefined : onClickItem(item),
      rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: "security-item-right-icon",
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_22__["default"],
        size: "sm",
        type: "phosphor"
      })
    }, item.key);
  }, [onClickItem]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    if (camera) {
      window.navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        // Close video
        stream.getTracks().forEach(track => {
          track.stop();
        });
      }).catch(console.error);
    }
  }, [camera]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      title: t('Security settings'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "body-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "items-container",
          children: items.map(onRenderItem)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "setting-config-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "label",
            children: t('Website access')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "items-container",
            children: [onRenderItem(websiteAccessItem), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
              className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('security-item', `security-type-${SecurityType.CHAIN_PATROL_SERVICE}`),
              leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
                backgroundColor: 'var(--icon-bg-color)',
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_23__["default"],
                size: "sm",
                type: "phosphor",
                weight: "fill"
              }),
              name: t('Advanced phishing detection'),
              rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
                checked: enableChainPatrol,
                loading: loadingChainPatrol,
                onClick: updateChainPatrolEnable(enableChainPatrol)
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "setting-config-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "label",
            children: t('Camera access')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('security-item', `security-type-${SecurityType.CAMERA_ACCESS}`),
            leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
              backgroundColor: 'var(--icon-bg-color)',
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_25__["default"],
              size: "sm",
              type: "phosphor",
              weight: "fill"
            }),
            name: t('Camera access for QR'),
            rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_24__["default"], {
              checked: camera,
              loading: loadingCamera,
              onClick: updateCamera(camera)
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
        className: className,
        id: editAutoLockTimeModalId,
        onCancel: onCloseAutoLockTimeModal,
        title: t('Wallet auto-lock'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "modal-body-container",
          children: autoLockOptions.map(item => {
            const _selected = timeAutoLock === item.value;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
              className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('__selection-item'),
              name: item.label,
              onPressItem: onSelectTime(item),
              rightItem: _selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
                className: "__right-icon",
                iconColor: "var(--icon-color)",
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_27__["default"],
                size: "sm",
                type: "phosphor",
                weight: "fill"
              }) : null
            }, item.value);
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
        className: className,
        id: editUnlockTypeModalId,
        onCancel: onCloseUnlockTypeModal,
        title: t('Authenticate with password'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "modal-body-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('__selection-item'),
            name: t('Always required'),
            onPressItem: onSetUnlockType(_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_28__.WalletUnlockType.ALWAYS_REQUIRED),
            rightItem: unlockType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_28__.WalletUnlockType.ALWAYS_REQUIRED ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              className: "__right-icon",
              iconColor: "var(--icon-color)",
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_27__["default"],
              size: "sm",
              type: "phosphor",
              weight: "fill"
            }) : null
          }, _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_28__.WalletUnlockType.ALWAYS_REQUIRED), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('__selection-item'),
            name: t('When needed'),
            onPressItem: onSetUnlockType(_subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_28__.WalletUnlockType.WHEN_NEEDED),
            rightItem: unlockType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_28__.WalletUnlockType.WHEN_NEEDED ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              className: "__right-icon",
              iconColor: "var(--icon-color)",
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_27__["default"],
              size: "sm",
              type: "phosphor",
              weight: "fill"
            }) : null
          }, _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_28__.WalletUnlockType.WHEN_NEEDED)]
        })
      })]
    })
  });
};
const SecurityList = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__["default"])(Component).withConfig({
  displayName: "Security__SecurityList",
  componentId: "sc-1od7reo-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.body-container': {
      padding: `${token.padding}px ${token.padding}px`
    },
    '.items-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeXS
    },
    [`.security-type-${SecurityType.WALLET_PASSWORD}`]: {
      '--icon-bg-color': token['geekblue-6'],
      '&:hover': {
        '--icon-bg-color': token['geekblue-7']
      }
    },
    [`.security-type-${SecurityType.WEBSITE_ACCESS}`]: {
      '--icon-bg-color': token['blue-7'],
      '&:hover': {
        '--icon-bg-color': token['blue-8']
      }
    },
    [`.security-type-${SecurityType.CAMERA_ACCESS}`]: {
      '--icon-bg-color': token['green-6'],
      '&:hover': {
        '--icon-bg-color': token['green-7']
      }
    },
    [`.security-type-${SecurityType.CHAIN_PATROL_SERVICE}`]: {
      '--icon-bg-color': token['magenta-6'],
      '&:hover': {
        '--icon-bg-color': token['magenta-7']
      }
    },
    [`.security-type-${SecurityType.AUTO_LOCK}`]: {
      '--icon-bg-color': token['green-6'],
      '&:hover': {
        '--icon-bg-color': token['green-7']
      }
    },
    [`.security-type-${SecurityType.UNLOCK_TYPE}`]: {
      '--icon-bg-color': token['purple-8'],
      '&:hover': {
        '--icon-bg-color': token['purple-9']
      }
    },
    '.security-item': {
      '.ant-web3-block-right-item': {
        marginRight: token.sizeXXS,
        color: token['gray-4']
      },
      '&:hover': {
        '.ant-web3-block-right-item': {
          color: token['gray-6']
        }
      },
      '&.disabled': {
        opacity: 0.4,
        '.ant-setting-item-content': {
          cursor: 'not-allowed'
        }
      }
    },
    '.setting-config-container': {
      marginTop: token.margin,
      display: 'flex',
      flexDirection: 'column',
      gap: token.size,
      '.label': {
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeSM,
        lineHeight: token.lineHeightSM,
        color: token.colorTextLabel,
        textTransform: 'uppercase'
      }
    },
    '.modal-body-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeXS
    },
    '.__selection-item': {
      '--icon-color': token.colorSuccess
    },
    '.__right-icon': {
      marginRight: token.marginXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecurityList);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfU2VjdXJpdHlfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWtGO0FBQ0o7QUFDNkI7QUFDdkI7QUFDVDtBQUNtQjtBQUNrRDtBQUd0RjtBQUN1QjtBQUNzQjtBQUMzRTtBQUN1RztBQUM5QztBQUN0QztBQUNMO0FBQ2tCO0FBQ3JCO0FBQUE7QUFBQTtBQUFBLElBSWxDeUMsWUFBWTtBQUFBLFdBQVpBLFlBQVk7RUFBWkEsWUFBWTtFQUFaQSxZQUFZO0VBQVpBLFlBQVk7RUFBWkEsWUFBWTtFQUFaQSxZQUFZO0VBQVpBLFlBQVk7QUFBQSxHQUFaQSxZQUFZLEtBQVpBLFlBQVk7QUFzQmpCLE1BQU1DLHVCQUF1QixHQUFHdkMsNkZBQXlCO0FBQ3pELE1BQU13QyxxQkFBcUIsR0FBR3ZDLDBGQUFzQjtBQUVwRCxNQUFNd0MsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUV2QyxNQUFNQyxTQUEwQixHQUFJQyxLQUFZLElBQUs7RUFDbkQsTUFBTTtJQUFFQztFQUFVLENBQUMsR0FBR0QsS0FBSztFQUUzQixNQUFNO0lBQUVFO0VBQUUsQ0FBQyxHQUFHWiw4REFBYyxFQUFFO0VBQzlCLE1BQU07SUFBRWE7RUFBTyxDQUFDLEdBQUcxQyx3R0FBa0IsRUFBRTtFQUN2QyxNQUFNMkMsUUFBUSxHQUFHWCw4REFBVyxFQUFFO0VBQzlCLE1BQU1ZLFFBQVEsR0FBR2IsOERBQVcsRUFBRTtFQUM5QixNQUFNYyxTQUFTLEdBQUcsQ0FBQyxDQUFDRCxRQUFRLENBQUNFLEtBQUs7RUFDbEMsTUFBTUMsT0FBTyxHQUFHaEQsNkZBQVUsRUFBRTtFQUU1QixNQUFNO0lBQUVpRCxXQUFXO0lBQUVDO0VBQWMsQ0FBQyxHQUFHeEIs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QyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0s7SUFDYixDQUFDO0lBRUQsbUJBQW1CLEVBQUU7TUFDbkIsY0FBYyxFQUFFTCxLQUFLLENBQUNzQjtJQUN4QixDQUFDO0lBRUQsZUFBZSxFQUFFO01BQ2ZoQixXQUFXLEVBQUVOLEtBQUssQ0FBQ3VCO0lBQ3JCO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlekIsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1NldHRpbmdzL1NlY3VyaXR5L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgV2FsbGV0VW5sb2NrVHlwZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgTGF5b3V0LCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBFRElUX0FVVE9fTE9DS19USU1FX01PREFMLCBFRElUX1VOTE9DS19UWVBFX01PREFMIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgREVGQVVMVF9ST1VURVJfUEFUSCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzL3JvdXRlcic7XG5pbXBvcnQgdXNlSXNQb3B1cCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2RvbS91c2VJc1BvcHVwJztcbmltcG9ydCB1c2VEZWZhdWx0TmF2aWdhdGUgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9yb3V0ZXIvdXNlRGVmYXVsdE5hdmlnYXRlJztcbmltcG9ydCB7IHNhdmVBdXRvTG9ja1RpbWUsIHNhdmVDYW1lcmFTZXR0aW5nLCBzYXZlRW5hYmxlQ2hhaW5QYXRyb2wsIHNhdmVVbmxvY2tUeXBlLCB3aW5kb3dPcGVuIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgUGhvc3Bob3JJY29uLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscyc7XG5pbXBvcnQgeyBpc05vQWNjb3VudCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvYWNjb3VudC9hY2NvdW50JztcbmltcG9ydCB7IEJhY2tncm91bmRJY29uLCBJY29uLCBNb2RhbENvbnRleHQsIFNldHRpbmdJdGVtLCBTd2l0Y2gsIFN3TW9kYWwgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENhbWVyYSwgQ2FyZXRSaWdodCwgQ2hlY2tDaXJjbGUsIEdsb2JlSGVtaXNwaGVyZUVhc3QsIEtleSwgTG9ja0tleU9wZW4sIExvY2tMYW1pbmF0ZWQsIFNoaWVsZFN0YXIgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuZW51bSBTZWN1cml0eVR5cGUge1xuICBXQUxMRVRfUEFTU1dPUkQgPSAnd2FsbGV0LXBhc3N3b3JkJyxcbiAgV0VCU0lURV9BQ0NFU1MgPSAnd2Vic2l0ZS1hY2Nlc3MnLFxuICBDQU1FUkFfQUNDRVNTID0gJ2NhbWVyYS1hY2Nlc3MnLFxuICBBVVRPX0xPQ0sgPSAnYXV0by1sb2NrJyxcbiAgVU5MT0NLX1RZUEUgPSAndW5sb2NrLXR5cGUnLFxuICBDSEFJTl9QQVRST0xfU0VSVklDRSA9ICdjaGFpbi1wYXRyb2wtc2VydmljZSdcbn1cblxuaW50ZXJmYWNlIFNlY3VyaXR5SXRlbSB7XG4gIGljb246IFBob3NwaG9ySWNvbjtcbiAga2V5OiBTZWN1cml0eVR5cGU7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEF1dG9Mb2NrT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuY29uc3QgZWRpdEF1dG9Mb2NrVGltZU1vZGFsSWQgPSBFRElUX0FVVE9fTE9DS19USU1FX01PREFMO1xuY29uc3QgZWRpdFVubG9ja1R5cGVNb2RhbElkID0gRURJVF9VTkxPQ0tfVFlQRV9NT0RBTDtcblxuY29uc3QgdGltZU9wdGlvbnMgPSBbNSwgMTAsIDE1LCAzMCwgNjBdO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBnb0JhY2sgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgY2FuR29CYWNrID0gISFsb2NhdGlvbi5zdGF0ZTtcbiAgY29uc3QgaXNQb3B1cCA9IHVzZUlzUG9wdXAoKTtcblxuICBjb25zdCB7IGFjdGl2ZU1vZGFsLCBpbmFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBhY2NvdW50cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZSk7XG4gIGNvbnN0IHsgY2FtZXJhLCBlbmFibGVDaGFpblBhdHJvbCwgdGltZUF1dG9Mb2NrLCB1bmxvY2tUeXBlIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MpO1xuXG4gIGNvbnN0IG5vQWNjb3VudCA9IHVzZU1lbW8oKCkgPT4gaXNOb0FjY291bnQoYWNjb3VudHMpLCBbYWNjb3VudHNdKTtcblxuICBjb25zdCBhdXRvTG9ja09wdGlvbnMgPSB1c2VNZW1vKCgpOiBBdXRvTG9ja09wdGlvbltdID0+IHRpbWVPcHRpb25zLm1hcCgodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiB0KCd7e3RpbWV9fSBtaW51dGVzJywgeyByZXBsYWNlOiB7IHRpbWU6IHZhbHVlIH0gfSlcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IHQoJ1JlcXVpcmVkIG9uY2UnKVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBsYWJlbDogdCgnQWx3YXlzIHJlcXVpcmUnKVxuICAgICAgfTtcbiAgICB9XG4gIH0pLCBbdF0pO1xuXG4gIGNvbnN0IGl0ZW1zID0gdXNlTWVtbygoKTogU2VjdXJpdHlJdGVtW10gPT4gW1xuICAgIHtcbiAgICAgIGljb246IEtleSxcbiAgICAgIGtleTogU2VjdXJpdHlUeXBlLldBTExFVF9QQVNTV09SRCxcbiAgICAgIHRpdGxlOiB0KCdDaGFuZ2Ugd2FsbGV0IHBhc3N3b3JkJyksXG4gICAgICB1cmw6ICcva2V5cmluZy9jaGFuZ2UtcGFzc3dvcmQnLFxuICAgICAgZGlzYWJsZWQ6IG5vQWNjb3VudFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogTG9ja0xhbWluYXRlZCxcbiAgICAgIGtleTogU2VjdXJpdHlUeXBlLkFVVE9fTE9DSyxcbiAgICAgIHRpdGxlOiB0KCdXYWxsZXQgYXV0by1sb2NrJyksXG4gICAgICB1cmw6ICcnLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBMb2NrS2V5T3BlbixcbiAgICAgIGtleTogU2VjdXJpdHlUeXBlLlVOTE9DS19UWVBFLFxuICAgICAgdGl0bGU6IHQoJ0F1dGhlbnRpY2F0ZSB3aXRoIHBhc3N3b3JkJyksXG4gICAgICB1cmw6ICcnLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfVxuICBdLCBbbm9BY2NvdW50LCB0XSk7XG5cbiAgY29uc3Qgd2Vic2l0ZUFjY2Vzc0l0ZW0gPSB1c2VNZW1vKCgpOiBTZWN1cml0eUl0ZW0gPT4gKHtcbiAgICBpY29uOiBHbG9iZUhlbWlzcGhlcmVFYXN0LFxuICAgIGtleTogU2VjdXJpdHlUeXBlLldFQlNJVEVfQUNDRVNTLFxuICAgIHRpdGxlOiB0KCdNYW5hZ2Ugd2Vic2l0ZSBhY2Nlc3MnKSxcbiAgICB1cmw6ICcvc2V0dGluZ3MvZGFwcC1hY2Nlc3MnLFxuICAgIGRpc2FibGVkOiBub0FjY291bnRcbiAgfSksIFtub0FjY291bnQsIHRdKTtcblxuICBjb25zdCBbbG9hZGluZ0NhbWVyYSwgc2V0TG9hZGluZ0NhbWVyYV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nQ2hhaW5QYXRyb2wsIHNldExvYWRpbmdDaGFpblBhdHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChjYW5Hb0JhY2spIHtcbiAgICAgIGdvQmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobm9BY2NvdW50KSB7XG4gICAgICAgIG5hdmlnYXRlKERFRkFVTFRfUk9VVEVSX1BBVEgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2aWdhdGUoJy9zZXR0aW5ncy9saXN0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbY2FuR29CYWNrLCBnb0JhY2ssIG5hdmlnYXRlLCBub0FjY291bnRdKTtcblxuICBjb25zdCB1cGRhdGVDYW1lcmEgPSB1c2VDYWxsYmFjaygoY3VycmVudFZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldExvYWRpbmdDYW1lcmEodHJ1ZSk7XG5cbiAgICAgIGxldCBvcGVuTmV3VGFiID0gZmFsc2U7XG5cbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGlmIChpc1BvcHVwKSB7XG4gICAgICAgICAgb3Blbk5ld1RhYiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2F2ZUNhbWVyYVNldHRpbmcoIWN1cnJlbnRWYWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChvcGVuTmV3VGFiKSB7XG4gICAgICAgICAgICB3aW5kb3dPcGVuKHsgYWxsb3dlZFBhdGg6ICcvc2V0dGluZ3Mvc2VjdXJpdHknIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmdDYW1lcmEoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9LCBbaXNQb3B1cF0pO1xuXG4gIGNvbnN0IHVwZGF0ZUNoYWluUGF0cm9sRW5hYmxlID0gdXNlQ2FsbGJhY2soKGN1cnJlbnRWYWx1ZTogYm9vbGVhbikgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nQ2hhaW5QYXRyb2wodHJ1ZSk7XG5cbiAgICAgIHNhdmVFbmFibGVDaGFpblBhdHJvbCghY3VycmVudFZhbHVlKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmdDaGFpblBhdHJvbChmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbk9wZW5BdXRvTG9ja1RpbWVNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBhY3RpdmVNb2RhbChlZGl0QXV0b0xvY2tUaW1lTW9kYWxJZCk7XG4gIH0sIFthY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IG9uT3BlblVubG9ja1R5cGVNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBhY3RpdmVNb2RhbChlZGl0VW5sb2NrVHlwZU1vZGFsSWQpO1xuICB9LCBbYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBvbkNsb3NlQXV0b0xvY2tUaW1lTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW5hY3RpdmVNb2RhbChlZGl0QXV0b0xvY2tUaW1lTW9kYWxJZCk7XG4gIH0sIFtpbmFjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3Qgb25DbG9zZVVubG9ja1R5cGVNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpbmFjdGl2ZU1vZGFsKGVkaXRVbmxvY2tUeXBlTW9kYWxJZCk7XG4gIH0sIFtpbmFjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3Qgb25DbGlja0l0ZW0gPSB1c2VDYWxsYmFjaygoaXRlbTogU2VjdXJpdHlJdGVtKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN3aXRjaCAoaXRlbS5rZXkpIHtcbiAgICAgICAgY2FzZSBTZWN1cml0eVR5cGUuQVVUT19MT0NLOlxuICAgICAgICAgIG9uT3BlbkF1dG9Mb2NrVGltZU1vZGFsKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2VjdXJpdHlUeXBlLlVOTE9DS19UWVBFOlxuICAgICAgICAgIG9uT3BlblVubG9ja1R5cGVNb2RhbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG5hdmlnYXRlKGl0ZW0udXJsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbbmF2aWdhdGUsIG9uT3BlbkF1dG9Mb2NrVGltZU1vZGFsLCBvbk9wZW5VbmxvY2tUeXBlTW9kYWxdKTtcblxuICBjb25zdCBvblNlbGVjdFRpbWUgPSB1c2VDYWxsYmFjaygoaXRlbTogQXV0b0xvY2tPcHRpb24pID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaW5hY3RpdmVNb2RhbChlZGl0QXV0b0xvY2tUaW1lTW9kYWxJZCk7XG4gICAgICBzYXZlQXV0b0xvY2tUaW1lKGl0ZW0udmFsdWUpLmZpbmFsbHkobm9vcCk7XG4gICAgfTtcbiAgfSwgW2luYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBvblNldFVubG9ja1R5cGUgPSB1c2VDYWxsYmFjaygodmFsdWU6IFdhbGxldFVubG9ja1R5cGUpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaW5hY3RpdmVNb2RhbChlZGl0QXV0b0xvY2tUaW1lTW9kYWxJZCk7XG4gICAgICBzYXZlVW5sb2NrVHlwZSh2YWx1ZSkuZmluYWxseShub29wKTtcbiAgICB9O1xuICB9LCBbaW5hY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IG9uUmVuZGVySXRlbSA9IHVzZUNhbGxiYWNrKChpdGVtOiBTZWN1cml0eUl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNldHRpbmdJdGVtXG4gICAgICAgIGNsYXNzTmFtZT17Q04oXG4gICAgICAgICAgJ3NlY3VyaXR5LWl0ZW0nLFxuICAgICAgICAgIGBzZWN1cml0eS10eXBlLSR7aXRlbS5rZXl9YCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZFxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgICAga2V5PXtpdGVtLmtleX1cbiAgICAgICAgbGVmdEl0ZW1JY29uPXsoXG4gICAgICAgICAgPEJhY2tncm91bmRJY29uXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eyd2YXIoLS1pY29uLWJnLWNvbG9yKSd9XG4gICAgICAgICAgICBwaG9zcGhvckljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgbmFtZT17aXRlbS50aXRsZX1cbiAgICAgICAgb25QcmVzc0l0ZW09e2l0ZW0uZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBvbkNsaWNrSXRlbShpdGVtKX1cbiAgICAgICAgcmlnaHRJdGVtPXsoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdXJpdHktaXRlbS1yaWdodC1pY29uJ1xuICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtDYXJldFJpZ2h0fVxuICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICB0eXBlPSdwaG9zcGhvcidcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbb25DbGlja0l0ZW1dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW1lcmEpIHtcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IHZpZGVvOiB0cnVlIH0pXG4gICAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgICAvLyBDbG9zZSB2aWRlb1xuICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgfVxuICB9LCBbY2FtZXJhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfT5cbiAgICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgICAgb25CYWNrPXtvbkJhY2t9XG4gICAgICAgIHRpdGxlPXt0KCdTZWN1cml0eSBzZXR0aW5ncycpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keS1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtcy1jb250YWluZXInPlxuICAgICAgICAgICAge2l0ZW1zLm1hcChvblJlbmRlckl0ZW0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXR0aW5nLWNvbmZpZy1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsJz5cbiAgICAgICAgICAgICAge3QoJ1dlYnNpdGUgYWNjZXNzJyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtcy1jb250YWluZXInPlxuICAgICAgICAgICAgICB7b25SZW5kZXJJdGVtKHdlYnNpdGVBY2Nlc3NJdGVtKX1cbiAgICAgICAgICAgICAgPFNldHRpbmdJdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtDTignc2VjdXJpdHktaXRlbScsIGBzZWN1cml0eS10eXBlLSR7U2VjdXJpdHlUeXBlLkNIQUlOX1BBVFJPTF9TRVJWSUNFfWApfVxuICAgICAgICAgICAgICAgIGxlZnRJdGVtSWNvbj17KFxuICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmRJY29uXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17J3ZhcigtLWljb24tYmctY29sb3IpJ31cbiAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtTaGllbGRTdGFyfVxuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBuYW1lPXt0KCdBZHZhbmNlZCBwaGlzaGluZyBkZXRlY3Rpb24nKX1cbiAgICAgICAgICAgICAgICByaWdodEl0ZW09eyhcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZW5hYmxlQ2hhaW5QYXRyb2x9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmdDaGFpblBhdHJvbH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dXBkYXRlQ2hhaW5QYXRyb2xFbmFibGUoZW5hYmxlQ2hhaW5QYXRyb2wpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmctY29uZmlnLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFiZWwnPlxuICAgICAgICAgICAgICB7dCgnQ2FtZXJhIGFjY2VzcycpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2V0dGluZ0l0ZW1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtDTignc2VjdXJpdHktaXRlbScsIGBzZWN1cml0eS10eXBlLSR7U2VjdXJpdHlUeXBlLkNBTUVSQV9BQ0NFU1N9YCl9XG4gICAgICAgICAgICAgIGxlZnRJdGVtSWNvbj17KFxuICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSWNvblxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXsndmFyKC0taWNvbi1iZy1jb2xvciknfVxuICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtDYW1lcmF9XG4gICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIG5hbWU9e3QoJ0NhbWVyYSBhY2Nlc3MgZm9yIFFSJyl9XG4gICAgICAgICAgICAgIHJpZ2h0SXRlbT17KFxuICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NhbWVyYX1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmdDYW1lcmF9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVDYW1lcmEoY2FtZXJhKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTd01vZGFsXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e2VkaXRBdXRvTG9ja1RpbWVNb2RhbElkfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlQXV0b0xvY2tUaW1lTW9kYWx9XG4gICAgICAgICAgdGl0bGU9e3QoJ1dhbGxldCBhdXRvLWxvY2snKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5LWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF1dG9Mb2NrT3B0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBfc2VsZWN0ZWQgPSB0aW1lQXV0b0xvY2sgPT09IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNldHRpbmdJdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Q04oJ19fc2VsZWN0aW9uLWl0ZW0nKX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBvblByZXNzSXRlbT17b25TZWxlY3RUaW1lKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICByaWdodEl0ZW09e1xuICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdfX3JpZ2h0LWljb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPSd2YXIoLS1pY29uLWNvbG9yKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e0NoZWNrQ2lyY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3dNb2RhbD5cbiAgICAgICAgPFN3TW9kYWxcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBpZD17ZWRpdFVubG9ja1R5cGVNb2RhbElkfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlVW5sb2NrVHlwZU1vZGFsfVxuICAgICAgICAgIHRpdGxlPXt0KCdBdXRoZW50aWNhdGUgd2l0aCBwYXNzd29yZCcpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHktY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxTZXR0aW5nSXRlbVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e0NOKCdfX3NlbGVjdGlvbi1pdGVtJyl9XG4gICAgICAgICAgICAgIGtleT17V2FsbGV0VW5sb2NrVHlwZS5BTFdBWVNfUkVRVUlSRUR9XG4gICAgICAgICAgICAgIG5hbWU9e3QoJ0Fsd2F5cyByZXF1aXJlZCcpfVxuICAgICAgICAgICAgICBvblByZXNzSXRlbT17b25TZXRVbmxvY2tUeXBlKFdhbGxldFVubG9ja1R5cGUuQUxXQVlTX1JFUVVJUkVEKX1cbiAgICAgICAgICAgICAgcmlnaHRJdGVtPXtcbiAgICAgICAgICAgICAgICB1bmxvY2tUeXBlID09PSBXYWxsZXRVbmxvY2tUeXBlLkFMV0FZU19SRVFVSVJFRFxuICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdfX3JpZ2h0LWljb24nXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPSd2YXIoLS1pY29uLWNvbG9yKSdcbiAgICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e0NoZWNrQ2lyY2xlfVxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNldHRpbmdJdGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Q04oJ19fc2VsZWN0aW9uLWl0ZW0nKX1cbiAgICAgICAgICAgICAga2V5PXtXYWxsZXRVbmxvY2tUeXBlLldIRU5fTkVFREVEfVxuICAgICAgICAgICAgICBuYW1lPXt0KCdXaGVuIG5lZWRlZCcpfVxuICAgICAgICAgICAgICBvblByZXNzSXRlbT17b25TZXRVbmxvY2tUeXBlKFdhbGxldFVubG9ja1R5cGUuV0hFTl9ORUVERUQpfVxuICAgICAgICAgICAgICByaWdodEl0ZW09e1xuICAgICAgICAgICAgICAgIHVubG9ja1R5cGUgPT09IFdhbGxldFVubG9ja1R5cGUuV0hFTl9ORUVERURcbiAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nX19yaWdodC1pY29uJ1xuICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj0ndmFyKC0taWNvbi1jb2xvciknXG4gICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtDaGVja0NpcmNsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwaG9zcGhvcidcbiAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Td01vZGFsPlxuICAgICAgPC9MYXlvdXQuV2l0aFN1YkhlYWRlck9ubHk+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlY3VyaXR5TGlzdCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5ib2R5LWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IGAke3Rva2VuLnBhZGRpbmd9cHggJHt0b2tlbi5wYWRkaW5nfXB4YFxuICAgIH0sXG5cbiAgICAnLml0ZW1zLWNvbnRhaW5lcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0b2tlbi5zaXplWFNcbiAgICB9LFxuXG4gICAgW2Auc2VjdXJpdHktdHlwZS0ke1NlY3VyaXR5VHlwZS5XQUxMRVRfUEFTU1dPUkR9YF06IHtcbiAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnZ2Vla2JsdWUtNiddLFxuXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgJy0taWNvbi1iZy1jb2xvcic6IHRva2VuWydnZWVrYmx1ZS03J11cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW2Auc2VjdXJpdHktdHlwZS0ke1NlY3VyaXR5VHlwZS5XRUJTSVRFX0FDQ0VTU31gXToge1xuICAgICAgJy0taWNvbi1iZy1jb2xvcic6IHRva2VuWydibHVlLTcnXSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnYmx1ZS04J11cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW2Auc2VjdXJpdHktdHlwZS0ke1NlY3VyaXR5VHlwZS5DQU1FUkFfQUNDRVNTfWBdOiB7XG4gICAgICAnLS1pY29uLWJnLWNvbG9yJzogdG9rZW5bJ2dyZWVuLTYnXSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnZ3JlZW4tNyddXG4gICAgICB9XG4gICAgfSxcblxuICAgIFtgLnNlY3VyaXR5LXR5cGUtJHtTZWN1cml0eVR5cGUuQ0hBSU5fUEFUUk9MX1NFUlZJQ0V9YF06IHtcbiAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnbWFnZW50YS02J10sXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAnLS1pY29uLWJnLWNvbG9yJzogdG9rZW5bJ21hZ2VudGEtNyddXG4gICAgICB9XG4gICAgfSxcblxuICAgIFtgLnNlY3VyaXR5LXR5cGUtJHtTZWN1cml0eVR5cGUuQVVUT19MT0NLfWBdOiB7XG4gICAgICAnLS1pY29uLWJnLWNvbG9yJzogdG9rZW5bJ2dyZWVuLTYnXSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsnZ3JlZW4tNyddXG4gICAgICB9XG4gICAgfSxcblxuICAgIFtgLnNlY3VyaXR5LXR5cGUtJHtTZWN1cml0eVR5cGUuVU5MT0NLX1RZUEV9YF06IHtcbiAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsncHVycGxlLTgnXSxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICctLWljb24tYmctY29sb3InOiB0b2tlblsncHVycGxlLTknXVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLnNlY3VyaXR5LWl0ZW0nOiB7XG4gICAgICAnLmFudC13ZWIzLWJsb2NrLXJpZ2h0LWl0ZW0nOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiB0b2tlbi5zaXplWFhTLFxuICAgICAgICBjb2xvcjogdG9rZW5bJ2dyYXktNCddXG4gICAgICB9LFxuXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgJy5hbnQtd2ViMy1ibG9jay1yaWdodC1pdGVtJzoge1xuICAgICAgICAgIGNvbG9yOiB0b2tlblsnZ3JheS02J11cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJyYuZGlzYWJsZWQnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNCxcblxuICAgICAgICAnLmFudC1zZXR0aW5nLWl0ZW0tY29udGVudCc6IHtcbiAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLnNldHRpbmctY29uZmlnLWNvbnRhaW5lcic6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRva2VuLnNpemUsXG5cbiAgICAgICcubGFiZWwnOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmZvbnRXZWlnaHRTdHJvbmcsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVNNLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0U00sXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMYWJlbCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5tb2RhbC1ib2R5LWNvbnRhaW5lcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0b2tlbi5zaXplWFNcbiAgICB9LFxuXG4gICAgJy5fX3NlbGVjdGlvbi1pdGVtJzoge1xuICAgICAgJy0taWNvbi1jb2xvcic6IHRva2VuLmNvbG9yU3VjY2Vzc1xuICAgIH0sXG5cbiAgICAnLl9fcmlnaHQtaWNvbic6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0b2tlbi5tYXJnaW5YU1xuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN1cml0eUxpc3Q7XG4iXSwibmFtZXMiOlsiV2FsbGV0VW5sb2NrVHlwZSIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiRURJVF9BVVRPX0xPQ0tfVElNRV9NT0RBTCIsIkVESVRfVU5MT0NLX1RZUEVfTU9EQUwiLCJERUZBVUxUX1JPVVRFUl9QQVRIIiwidXNlSXNQb3B1cCIsInVzZURlZmF1bHROYXZpZ2F0ZSIsInNhdmVBdXRvTG9ja1RpbWUiLCJzYXZlQ2FtZXJhU2V0dGluZyIsInNhdmVFbmFibGVDaGFpblBhdHJvbCIsInNhdmVVbmxvY2tUeXBlIiwid2luZG93T3BlbiIsIm5vb3AiLCJpc05vQWNjb3VudCIsIkJhY2tncm91bmRJY29uIiwiSWNvbiIsIk1vZGFsQ29udGV4dCIsIlNldHRpbmdJdGVtIiwiU3dpdGNoIiwiU3dNb2RhbCIsIkNOIiwiQ2FtZXJhIiwiQ2FyZXRSaWdodCIsIkNoZWNrQ2lyY2xlIiwiR2xvYmVIZW1pc3BoZXJlRWFzdCIsIktleSIsIkxvY2tLZXlPcGVuIiwiTG9ja0xhbWluYXRlZCIsIlNoaWVsZFN0YXIiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlU2VsZWN0b3IiLCJ1c2VMb2NhdGlvbiIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwiU2VjdXJpdHlUeXBlIiwiZWRpdEF1dG9Mb2NrVGltZU1vZGFsSWQiLCJlZGl0VW5sb2NrVHlwZU1vZGFsSWQiLCJ0aW1lT3B0aW9ucyIsIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwidCIsImdvQmFjayIsIm5hdmlnYXRlIiwibG9jYXRpb24iLCJjYW5Hb0JhY2siLCJzdGF0ZSIsImlzUG9wdXAiLCJhY3RpdmVNb2RhbCIsImluYWN0aXZlTW9kYWwiLCJhY2NvdW50cyIsImFjY291bnRTdGF0ZSIsImNhbWVyYSIsImVuYWJsZUNoYWluUGF0cm9sIiwidGltZUF1dG9Mb2NrIiwidW5sb2NrVHlwZSIsInNldHRpbmdzIiwibm9BY2NvdW50IiwiYXV0b0xvY2tPcHRpb25zIiwibWFwIiwidmFsdWUiLCJsYWJlbCIsInJlcGxhY2UiLCJ0aW1lIiwiaXRlbXMiLCJpY29uIiwia2V5IiwiV0FMTEVUX1BBU1NXT1JEIiwidGl0bGUiLCJ1cmwiLCJkaXNhYmxlZCIsIkFVVE9fTE9DSyIsIlVOTE9DS19UWVBFIiwid2Vic2l0ZUFjY2Vzc0l0ZW0iLCJXRUJTSVRFX0FDQ0VTUyIsImxvYWRpbmdDYW1lcmEiLCJzZXRMb2FkaW5nQ2FtZXJhIiwibG9hZGluZ0NoYWluUGF0cm9sIiwic2V0TG9hZGluZ0NoYWluUGF0cm9sIiwib25CYWNrIiwidXBkYXRlQ2FtZXJhIiwiY3VycmVudFZhbHVlIiwib3Blbk5ld1RhYiIsInRoZW4iLCJhbGxvd2VkUGF0aCIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZpbmFsbHkiLCJ1cGRhdGVDaGFpblBhdHJvbEVuYWJsZSIsIm9uT3BlbkF1dG9Mb2NrVGltZU1vZGFsIiwib25PcGVuVW5sb2NrVHlwZU1vZGFsIiwib25DbG9zZUF1dG9Mb2NrVGltZU1vZGFsIiwib25DbG9zZVVubG9ja1R5cGVNb2RhbCIsIm9uQ2xpY2tJdGVtIiwiaXRlbSIsIm9uU2VsZWN0VGltZSIsIm9uU2V0VW5sb2NrVHlwZSIsIm9uUmVuZGVySXRlbSIsInVuZGVmaW5lZCIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwic3RyZWFtIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsIkNIQUlOX1BBVFJPTF9TRVJWSUNFIiwiQ0FNRVJBX0FDQ0VTUyIsIl9zZWxlY3RlZCIsIkFMV0FZU19SRVFVSVJFRCIsIldIRU5fTkVFREVEIiwiU2VjdXJpdHlMaXN0IiwidGhlbWUiLCJ0b2tlbiIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsInNpemVYUyIsIm1hcmdpblJpZ2h0Iiwic2l6ZVhYUyIsImNvbG9yIiwib3BhY2l0eSIsImN1cnNvciIsIm1hcmdpblRvcCIsIm1hcmdpbiIsInNpemUiLCJmb250V2VpZ2h0IiwiZm9udFdlaWdodFN0cm9uZyIsImZvbnRTaXplIiwiZm9udFNpemVTTSIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0U00iLCJjb2xvclRleHRMYWJlbCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvclN1Y2Nlc3MiLCJtYXJnaW5YUyJdLCJzb3VyY2VSb290IjoiIn0=