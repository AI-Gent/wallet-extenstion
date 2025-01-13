"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/index.tsx":
/*!*********************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/common */ "../extension-koni-ui/src/constants/common.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useUILock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useUILock */ "../extension-koni-ui/src/hooks/common/useUILock.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_dom_useIsPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/dom/useIsPopup */ "../extension-koni-ui/src/hooks/dom/useIsPopup.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-header/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/setting-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FrameCorners.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowsOut.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/GlobeHemisphereEast.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CaretRight.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldCheck.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/BookBookmark.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShareNetwork.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Coin.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/TwitterLogo.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowSquareOut.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/TelegramLogo.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/X.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Lock.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


















const isReactNode = element => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().isValidElement(element);
};
function generateLeftIcon(backgroundColor, icon) {
  const isNode = isReactNode(icon);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
    backgroundColor: backgroundColor,
    customIcon: isNode ? icon : undefined,
    phosphorIcon: isNode ? undefined : icon,
    size: "sm",
    type: isNode ? 'customIcon' : 'phosphor',
    weight: "fill"
  });
}
function generateRightIcon(icon) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "__right-icon",
    customSize: '20px',
    phosphorIcon: icon,
    type: "phosphor"
  });
}
function Component({
  className = ''
}) {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__.useTheme)();
  const isPopup = (0,_subwallet_extension_koni_ui_hooks_dom_useIsPopup__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const notify = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [locking, setLocking] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const {
    isUILocked,
    lock,
    unlock
  } = (0,_subwallet_extension_koni_ui_hooks_common_useUILock__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const onLock = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(() => {
    if (isUILocked) {
      unlock();
      goHome();
    } else {
      setLocking(true);
      lock().then(() => {
        goHome();
      }).catch(e => {
        notify({
          message: e.message,
          type: 'error'
        });
      }).finally(() => {
        setLocking(false);
      });
    }
  }, [goHome, isUILocked, lock, notify, unlock]);

  // todo: i18n all titles, labels below
  const SettingGroupItemType = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => [{
    key: 'general',
    items: [{
      key: 'expand-view',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
      leftIconBgColor: token.colorPrimary,
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
      title: t('Expand view'),
      onClick: () => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_7__.windowOpen)({
          allowedPath: '/'
        }).catch(console.error);
      },
      isHidden: !isPopup
    }, {
      key: 'general-settings',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"],
      leftIconBgColor: token['magenta-6'],
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
      title: t('General settings'),
      onClick: () => {
        navigate('/settings/general');
      }
    }, {
      key: 'security-settings',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
      leftIconBgColor: token['green-6'],
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
      title: t('Security settings'),
      onClick: () => {
        navigate('/settings/security', {
          state: true
        });
      }
    }, {
      key: 'manage-address-book',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
      leftIconBgColor: token['blue-6'],
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
      title: t('Manage address book'),
      onClick: () => {
        navigate('/settings/address-book');
      }
    }, {
      key: 'wallet-connect',
      leftIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.WalletConnect, {
        height: "1em",
        width: "1em"
      }),
      leftIconBgColor: token['geekblue-6'],
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
      title: t('WalletConnect'),
      onClick: () => {
        navigate('/wallet-connect/list');
      }
    }]
  }, {
    key: 'networks-&-tokens',
    label: t('Networks & tokens'),
    items: [{
      key: 'manage-networks',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"],
      leftIconBgColor: token['purple-7'],
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
      title: t('Manage networks'),
      onClick: () => {
        navigate('/settings/chains/manage');
      }
    }, {
      key: 'manage-tokens',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_22__["default"],
      leftIconBgColor: token['gold-6'],
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
      title: t('Manage tokens'),
      onClick: () => {
        navigate('/settings/tokens/manage');
      }
    }]
  }, {
    key: 'community-&-support',
    label: t('Community & support'),
    items: [{
      key: 'twitter',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_23__["default"],
      leftIconBgColor: token['blue-6'],
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
      title: t('Twitter'),
      onClick: (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_8__.openInNewTab)(_subwallet_extension_koni_ui_constants_common__WEBPACK_IMPORTED_MODULE_1__.TWITTER_URL)
    },
    // {
    //   key: 'discord',
    //   leftIcon: DiscordLogo,
    //   leftIconBgColor: token['geekblue-8'],
    //   rightIcon: ArrowSquareOut,
    //   title: t('Discord'),
    //   onClick: openInNewTab(DISCORD_URL)
    // },
    {
      key: 'telegram',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_25__["default"],
      leftIconBgColor: token['blue-5'],
      rightIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
      title: t('Telegram'),
      onClick: (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_8__.openInNewTab)(_subwallet_extension_koni_ui_constants_common__WEBPACK_IMPORTED_MODULE_1__.TELEGRAM_URL)
    }]
  }
  // {
  //   key: 'about',
  //   label: t('About AIGENT Wallet'),
  //   items: [
  //     {
  //       key: 'website',
  //       leftIcon: ShieldCheck,
  //       leftIconBgColor: token['red-6'],
  //       rightIcon: ArrowSquareOut,
  //       title: t('Website'),
  //       onClick: openInNewTab(WEBSITE_URL)
  //     },
  //     {
  //       key: 'user-manual',
  //       leftIcon: Book,
  //       leftIconBgColor: token['green-6'],
  //       rightIcon: ArrowSquareOut,
  //       title: t('User guide'),
  //       onClick: openInNewTab(WIKI_URL)
  //     },
  //     {
  //       key: 'term-of-service',
  //       leftIcon: BookOpen,
  //       leftIconBgColor: token['volcano-7'],
  //       rightIcon: ArrowSquareOut,
  //       title: t('Terms of service'),
  //       onClick: openInNewTab(TERMS_OF_SERVICE_URL)
  //     },
  //     {
  //       key: 'privacy-policy',
  //       leftIcon: BookBookmark,
  //       leftIconBgColor: token['geekblue-6'],
  //       rightIcon: ArrowSquareOut,
  //       title: t('Privacy policy'),
  //       onClick: openInNewTab(PRIVACY_AND_POLICY_URL)
  //     }
  //   ]
  // }
  ], [isPopup, navigate, t, token]);
  const headerIcons = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(() => {
    return [{
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
        customSize: '24px',
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_26__["default"],
        type: "phosphor",
        weight: 'bold'
      }),
      onClick: goHome
    }];
  }, [goHome]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `settings ${className}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__["default"], {
        left: "logo",
        onClickLeft: goHome,
        rightButtons: headerIcons,
        showLeftButton: true,
        children: t('Settings')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: '__scroll-container',
        children: [SettingGroupItemType.map(group => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: '__group-container',
            children: [!!group.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "__group-label",
              children: group.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: '__group-content',
              children: group.items.map(item => item.isHidden ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_28__["default"], {
                className: '__setting-item',
                leftItemIcon: generateLeftIcon(item.leftIconBgColor, item.leftIcon),
                name: item.title,
                onPressItem: item.onClick,
                rightItem: generateRightIcon(item.rightIcon)
              }, item.key))
            })]
          }, group.key);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_29__["default"], {
          block: true,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_30__["default"],
            type: "phosphor",
            weight: 'fill'
          }),
          loading: locking,
          onClick: onLock,
          schema: 'secondary',
          children: t('Lock')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: '__version',
          children: ["AIGENT Wallet v ", _subwallet_extension_koni_ui_constants_common__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_VERSION]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Outlet, {})]
    })
  });
}
const Settings = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(Component).withConfig({
  displayName: "Settings",
  componentId: "sc-imytd0-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    height: '100%',
    backgroundColor: token.colorBgDefault,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '.ant-sw-header-container': {
      paddingTop: token.padding,
      paddingBottom: token.padding,
      backgroundColor: token.colorBgDefault
    },
    '.ant-sw-header-center-part': {
      color: token.colorTextLight1,
      fontSize: token.fontSizeHeading4,
      lineHeight: token.lineHeightHeading4,
      fontWeight: token.headingFontWeight
    },
    '.__scroll-container': {
      overflow: 'auto',
      paddingTop: token.padding,
      paddingRight: token.padding,
      paddingLeft: token.padding,
      paddingBottom: token.paddingLG
    },
    '.__group-label': {
      color: token.colorTextLight3,
      fontSize: token.fontSizeSM,
      lineHeight: token.lineHeightSM,
      marginBottom: token.margin,
      textTransform: 'uppercase'
    },
    '.__group-container': {
      paddingBottom: token.paddingLG
    },
    '.__setting-item + .__setting-item': {
      marginTop: token.marginXS
    },
    '.ant-web3-block-right-item': {
      minWidth: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: -token.marginXS,
      color: token['gray-4']
    },
    '.__setting-item:hover .ant-web3-block-right-item': {
      color: token['gray-6']
    },
    '.__version': {
      paddingTop: token.padding,
      textAlign: 'center',
      color: token.colorTextLight3,
      fontSize: token.size,
      lineHeight: token.lineHeight
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVxRjtBQUMwRztBQUN2RztBQUNGO0FBQ1Y7QUFDRDtBQUNtQjtBQUMxQjtBQUVGO0FBQ2tEO0FBQ3NHO0FBQzVKO0FBQ1A7QUFDRjtBQUFBO0FBQUE7QUFBQTtBQW9CckQsTUFBTXNDLFdBQVcsR0FBSUMsT0FBZ0IsSUFBaUM7RUFDcEUsb0JBQU9ULDJEQUFvQixDQUFDUyxPQUFPLENBQUM7QUFDdEMsQ0FBQztBQUVELFNBQVNFLGdCQUFnQixDQUFFQyxlQUF1QixFQUFFQyxJQUFtRCxFQUFtQjtFQUN4SCxNQUFNQyxNQUFNLEdBQUdOLFdBQVcsQ0FBQ0ssSUFBSSxDQUFDO0VBRWhDLG9CQUNFLHdEQUFDLDREQUFjO0lBQ2IsZUFBZSxFQUFFRCxlQUFnQjtJQUNqQyxVQUFVLEVBQUVFLE1BQU0sR0FBR0QsSUFBSSxHQUFHRSxTQUFVO0lBQ3RDLFlBQVksRUFBRUQsTUFBTSxHQUFHQyxTQUFTLEdBQUdGLElBQUs7SUFDeEMsSUFBSSxFQUFDLElBQUk7SUFDVCxJQUFJLEVBQUVDLE1BQU0sR0FBRyxZQUFZLEdBQUcsVUFBVztJQUN6QyxNQUFNLEVBQUM7RUFBTSxFQUNiO0FBRU47QUFFQSxTQUFTRSxpQkFBaUIsQ0FBRUgsSUFBaUMsRUFBbUI7RUFDOUUsb0JBQ0Usd0RBQUMsNERBQUk7SUFDSCxTQUFTLEVBQUMsY0FBYztJQUN4QixVQUFVLEVBQUUsTUFBTztJQUNuQixZQUFZLEVBQUVBLElBQUs7SUFDbkIsSUFBSSxFQUFDO0VBQVUsRUFDZjtBQUVOO0FBRUEsU0FBU0ksU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEUsTUFBTUMsUUFBUSxHQUFHZCw4REFBVyxFQUFFO0VBQzlCLE1BQU07SUFB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QUN2QixDQUFDO0lBRUQsWUFBWSxFQUFFO01BQ1oyQyxVQUFVLEVBQUUzQyxLQUFLLENBQUM0QyxPQUFPO01BQ3pCeUIsU0FBUyxFQUFFLFFBQVE7TUFDbkJ2QixLQUFLLEVBQUU5QyxLQUFLLENBQUN5RCxlQUFlO01BQzVCVCxRQUFRLEVBQUVoRCxLQUFLLENBQUNzRSxJQUFJO01BQ3BCcEIsVUFBVSxFQUFFbEQsS0FBSyxDQUFDa0Q7SUFDcEI7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVkLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9TZXR0aW5ncy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFBhZ2VXcmFwcGVyLCBXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IERJU0NPUkRfVVJMLCBFWFRFTlNJT05fVkVSU0lPTiwgUFJJVkFDWV9BTkRfUE9MSUNZX1VSTCwgVEVMRUdSQU1fVVJMLCBURVJNU19PRl9TRVJWSUNFX1VSTCwgVFdJVFRFUl9VUkwsIFdFQlNJVEVfVVJMLCBXSUtJX1VSTCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzL2NvbW1vbic7XG5pbXBvcnQgdXNlTm90aWZpY2F0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZU5vdGlmaWNhdGlvbic7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZVVJTG9jayBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VVSUxvY2snO1xuaW1wb3J0IHVzZUlzUG9wdXAgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9kb20vdXNlSXNQb3B1cCc7XG5pbXBvcnQgdXNlRGVmYXVsdE5hdmlnYXRlIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZURlZmF1bHROYXZpZ2F0ZSc7XG5pbXBvcnQgeyB3aW5kb3dPcGVuIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgVGhlbWUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IG9wZW5Jbk5ld1RhYiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgQmFja2dyb3VuZEljb24sIEJ1dHRvbiwgQnV0dG9uUHJvcHMsIEljb24sIFNldHRpbmdJdGVtLCBTd0hlYWRlciwgU3dJY29uUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCB7IEFycm93c091dCwgQXJyb3dTcXVhcmVPdXQsIEJvb2ssIEJvb2tCb29rbWFyaywgQm9va09wZW4sIENhcmV0UmlnaHQsIENvaW4sIERpc2NvcmRMb2dvLCBGcmFtZUNvcm5lcnMsIEdsb2JlSGVtaXNwaGVyZUVhc3QsIExvY2ssIFNoYXJlTmV0d29yaywgU2hpZWxkQ2hlY2ssIFRlbGVncmFtTG9nbywgVHdpdHRlckxvZ28sIFggfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT3V0bGV0LCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHNcblxudHlwZSBTZXR0aW5nSXRlbVR5cGUgPSB7XG4gIGtleTogc3RyaW5nLFxuICBsZWZ0SWNvbjogU3dJY29uUHJvcHNbJ3Bob3NwaG9ySWNvbiddIHwgUmVhY3QuUmVhY3ROb2RlLFxuICBsZWZ0SWNvbkJnQ29sb3I6IHN0cmluZyxcbiAgcmlnaHRJY29uOiBTd0ljb25Qcm9wc1sncGhvc3Bob3JJY29uJ10sXG4gIHRpdGxlOiBzdHJpbmcsXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxuICBpc0hpZGRlbj86IGJvb2xlYW4sXG59O1xuXG50eXBlIFNldHRpbmdHcm91cEl0ZW1UeXBlID0ge1xuICBrZXk6IHN0cmluZyxcbiAgbGFiZWw/OiBzdHJpbmcsXG4gIGl0ZW1zOiBTZXR0aW5nSXRlbVR5cGVbXSxcbn07XG5cbmNvbnN0IGlzUmVhY3ROb2RlID0gKGVsZW1lbnQ6IHVua25vd24pOiBlbGVtZW50IGlzIFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gIHJldHVybiBSZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTGVmdEljb24gKGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBpY29uOiBTd0ljb25Qcm9wc1sncGhvc3Bob3JJY29uJ10gfCBSZWFjdC5SZWFjdE5vZGUpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBpc05vZGUgPSBpc1JlYWN0Tm9kZShpY29uKTtcblxuICByZXR1cm4gKFxuICAgIDxCYWNrZ3JvdW5kSWNvblxuICAgICAgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9XG4gICAgICBjdXN0b21JY29uPXtpc05vZGUgPyBpY29uIDogdW5kZWZpbmVkfVxuICAgICAgcGhvc3Bob3JJY29uPXtpc05vZGUgPyB1bmRlZmluZWQgOiBpY29ufVxuICAgICAgc2l6ZT0nc20nXG4gICAgICB0eXBlPXtpc05vZGUgPyAnY3VzdG9tSWNvbicgOiAncGhvc3Bob3InfVxuICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmlnaHRJY29uIChpY29uOiBTd0ljb25Qcm9wc1sncGhvc3Bob3JJY29uJ10pOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxJY29uXG4gICAgICBjbGFzc05hbWU9J19fcmlnaHQtaWNvbidcbiAgICAgIGN1c3RvbVNpemU9eycyMHB4J31cbiAgICAgIHBob3NwaG9ySWNvbj17aWNvbn1cbiAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG4gIGNvbnN0IGlzUG9wdXAgPSB1c2VJc1BvcHVwKCk7XG4gIGNvbnN0IG5vdGlmeSA9IHVzZU5vdGlmaWNhdGlvbigpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW2xvY2tpbmcsIHNldExvY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgaXNVSUxvY2tlZCwgbG9jaywgdW5sb2NrIH0gPSB1c2VVSUxvY2soKTtcblxuICBjb25zdCBvbkxvY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGlzVUlMb2NrZWQpIHtcbiAgICAgIHVubG9jaygpO1xuICAgICAgZ29Ib21lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvY2tpbmcodHJ1ZSk7XG4gICAgICBsb2NrKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdvSG9tZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgc2V0TG9ja2luZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2dvSG9tZSwgaXNVSUxvY2tlZCwgbG9jaywgbm90aWZ5LCB1bmxvY2tdKTtcblxuICAvLyB0b2RvOiBpMThuIGFsbCB0aXRsZXMsIGxhYmVscyBiZWxvd1xuICBjb25zdCBTZXR0aW5nR3JvdXBJdGVtVHlwZSA9IHVzZU1lbW8oKCk6IFNldHRpbmdHcm91cEl0ZW1UeXBlW10gPT4gKFtcbiAgICB7XG4gICAgICBrZXk6ICdnZW5lcmFsJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdleHBhbmQtdmlldycsXG4gICAgICAgICAgbGVmdEljb246IEZyYW1lQ29ybmVycyxcbiAgICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeSxcbiAgICAgICAgICByaWdodEljb246IEFycm93c091dCxcbiAgICAgICAgICB0aXRsZTogdCgnRXhwYW5kIHZpZXcnKSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3dPcGVuKHsgYWxsb3dlZFBhdGg6ICcvJyB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzSGlkZGVuOiAhaXNQb3B1cFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnZ2VuZXJhbC1zZXR0aW5ncycsXG4gICAgICAgICAgbGVmdEljb246IEdsb2JlSGVtaXNwaGVyZUVhc3QsXG4gICAgICAgICAgbGVmdEljb25CZ0NvbG9yOiB0b2tlblsnbWFnZW50YS02J10sXG4gICAgICAgICAgcmlnaHRJY29uOiBDYXJldFJpZ2h0LFxuICAgICAgICAgIHRpdGxlOiB0KCdHZW5lcmFsIHNldHRpbmdzJyksXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGUoJy9zZXR0aW5ncy9nZW5lcmFsJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnc2VjdXJpdHktc2V0dGluZ3MnLFxuICAgICAgICAgIGxlZnRJY29uOiBTaGllbGRDaGVjayxcbiAgICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWydncmVlbi02J10sXG4gICAgICAgICAgcmlnaHRJY29uOiBDYXJldFJpZ2h0LFxuICAgICAgICAgIHRpdGxlOiB0KCdTZWN1cml0eSBzZXR0aW5ncycpLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRlKCcvc2V0dGluZ3Mvc2VjdXJpdHknLCB7IHN0YXRlOiB0cnVlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ21hbmFnZS1hZGRyZXNzLWJvb2snLFxuICAgICAgICAgIGxlZnRJY29uOiBCb29rQm9va21hcmssXG4gICAgICAgICAgbGVmdEljb25CZ0NvbG9yOiB0b2tlblsnYmx1ZS02J10sXG4gICAgICAgICAgcmlnaHRJY29uOiBDYXJldFJpZ2h0LFxuICAgICAgICAgIHRpdGxlOiB0KCdNYW5hZ2UgYWRkcmVzcyBib29rJyksXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGUoJy9zZXR0aW5ncy9hZGRyZXNzLWJvb2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd3YWxsZXQtY29ubmVjdCcsXG4gICAgICAgICAgbGVmdEljb246IChcbiAgICAgICAgICAgIDxXYWxsZXRDb25uZWN0XG4gICAgICAgICAgICAgIGhlaWdodD0nMWVtJ1xuICAgICAgICAgICAgICB3aWR0aD0nMWVtJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICApLFxuICAgICAgICAgIGxlZnRJY29uQmdDb2xvcjogdG9rZW5bJ2dlZWtibHVlLTYnXSxcbiAgICAgICAgICByaWdodEljb246IENhcmV0UmlnaHQsXG4gICAgICAgICAgdGl0bGU6IHQoJ1dhbGxldENvbm5lY3QnKSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0ZSgnL3dhbGxldC1jb25uZWN0L2xpc3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ25ldHdvcmtzLSYtdG9rZW5zJyxcbiAgICAgIGxhYmVsOiB0KCdOZXR3b3JrcyAmIHRva2VucycpLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ21hbmFnZS1uZXR3b3JrcycsXG4gICAgICAgICAgbGVmdEljb246IFNoYXJlTmV0d29yayxcbiAgICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWydwdXJwbGUtNyddLFxuICAgICAgICAgIHJpZ2h0SWNvbjogQ2FyZXRSaWdodCxcbiAgICAgICAgICB0aXRsZTogdCgnTWFuYWdlIG5ldHdvcmtzJyksXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGUoJy9zZXR0aW5ncy9jaGFpbnMvbWFuYWdlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnbWFuYWdlLXRva2VucycsXG4gICAgICAgICAgbGVmdEljb246IENvaW4sXG4gICAgICAgICAgbGVmdEljb25CZ0NvbG9yOiB0b2tlblsnZ29sZC02J10sXG4gICAgICAgICAgcmlnaHRJY29uOiBDYXJldFJpZ2h0LFxuICAgICAgICAgIHRpdGxlOiB0KCdNYW5hZ2UgdG9rZW5zJyksXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGUoJy9zZXR0aW5ncy90b2tlbnMvbWFuYWdlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdjb21tdW5pdHktJi1zdXBwb3J0JyxcbiAgICAgIGxhYmVsOiB0KCdDb21tdW5pdHkgJiBzdXBwb3J0JyksXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndHdpdHRlcicsXG4gICAgICAgICAgbGVmdEljb246IFR3aXR0ZXJMb2dvLFxuICAgICAgICAgIGxlZnRJY29uQmdDb2xvcjogdG9rZW5bJ2JsdWUtNiddLFxuICAgICAgICAgIHJpZ2h0SWNvbjogQXJyb3dTcXVhcmVPdXQsXG4gICAgICAgICAgdGl0bGU6IHQoJ1R3aXR0ZXInKSxcbiAgICAgICAgICBvbkNsaWNrOiBvcGVuSW5OZXdUYWIoVFdJVFRFUl9VUkwpXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBrZXk6ICdkaXNjb3JkJyxcbiAgICAgICAgLy8gICBsZWZ0SWNvbjogRGlzY29yZExvZ28sXG4gICAgICAgIC8vICAgbGVmdEljb25CZ0NvbG9yOiB0b2tlblsnZ2Vla2JsdWUtOCddLFxuICAgICAgICAvLyAgIHJpZ2h0SWNvbjogQXJyb3dTcXVhcmVPdXQsXG4gICAgICAgIC8vICAgdGl0bGU6IHQoJ0Rpc2NvcmQnKSxcbiAgICAgICAgLy8gICBvbkNsaWNrOiBvcGVuSW5OZXdUYWIoRElTQ09SRF9VUkwpXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0ZWxlZ3JhbScsXG4gICAgICAgICAgbGVmdEljb246IFRlbGVncmFtTG9nbyxcbiAgICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWydibHVlLTUnXSxcbiAgICAgICAgICByaWdodEljb246IEFycm93U3F1YXJlT3V0LFxuICAgICAgICAgIHRpdGxlOiB0KCdUZWxlZ3JhbScpLFxuICAgICAgICAgIG9uQ2xpY2s6IG9wZW5Jbk5ld1RhYihURUxFR1JBTV9VUkwpXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGtleTogJ2Fib3V0JyxcbiAgICAvLyAgIGxhYmVsOiB0KCdBYm91dCBBSUdFTlQgV2FsbGV0JyksXG4gICAgLy8gICBpdGVtczogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAga2V5OiAnd2Vic2l0ZScsXG4gICAgLy8gICAgICAgbGVmdEljb246IFNoaWVsZENoZWNrLFxuICAgIC8vICAgICAgIGxlZnRJY29uQmdDb2xvcjogdG9rZW5bJ3JlZC02J10sXG4gICAgLy8gICAgICAgcmlnaHRJY29uOiBBcnJvd1NxdWFyZU91dCxcbiAgICAvLyAgICAgICB0aXRsZTogdCgnV2Vic2l0ZScpLFxuICAgIC8vICAgICAgIG9uQ2xpY2s6IG9wZW5Jbk5ld1RhYihXRUJTSVRFX1VSTClcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGtleTogJ3VzZXItbWFudWFsJyxcbiAgICAvLyAgICAgICBsZWZ0SWNvbjogQm9vayxcbiAgICAvLyAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWydncmVlbi02J10sXG4gICAgLy8gICAgICAgcmlnaHRJY29uOiBBcnJvd1NxdWFyZU91dCxcbiAgICAvLyAgICAgICB0aXRsZTogdCgnVXNlciBndWlkZScpLFxuICAgIC8vICAgICAgIG9uQ2xpY2s6IG9wZW5Jbk5ld1RhYihXSUtJX1VSTClcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGtleTogJ3Rlcm0tb2Ytc2VydmljZScsXG4gICAgLy8gICAgICAgbGVmdEljb246IEJvb2tPcGVuLFxuICAgIC8vICAgICAgIGxlZnRJY29uQmdDb2xvcjogdG9rZW5bJ3ZvbGNhbm8tNyddLFxuICAgIC8vICAgICAgIHJpZ2h0SWNvbjogQXJyb3dTcXVhcmVPdXQsXG4gICAgLy8gICAgICAgdGl0bGU6IHQoJ1Rlcm1zIG9mIHNlcnZpY2UnKSxcbiAgICAvLyAgICAgICBvbkNsaWNrOiBvcGVuSW5OZXdUYWIoVEVSTVNfT0ZfU0VSVklDRV9VUkwpXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBrZXk6ICdwcml2YWN5LXBvbGljeScsXG4gICAgLy8gICAgICAgbGVmdEljb246IEJvb2tCb29rbWFyayxcbiAgICAvLyAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWydnZWVrYmx1ZS02J10sXG4gICAgLy8gICAgICAgcmlnaHRJY29uOiBBcnJvd1NxdWFyZU91dCxcbiAgICAvLyAgICAgICB0aXRsZTogdCgnUHJpdmFjeSBwb2xpY3knKSxcbiAgICAvLyAgICAgICBvbkNsaWNrOiBvcGVuSW5OZXdUYWIoUFJJVkFDWV9BTkRfUE9MSUNZX1VSTClcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXVxuICAgIC8vIH1cbiAgXSksIFtpc1BvcHVwLCBuYXZpZ2F0ZSwgdCwgdG9rZW5dKTtcblxuICBjb25zdCBoZWFkZXJJY29ucyA9IHVzZU1lbW88QnV0dG9uUHJvcHNbXT4oKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGljb246IChcbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgY3VzdG9tU2l6ZT17JzI0cHgnfVxuICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtYfVxuICAgICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgICB3ZWlnaHQ9eydib2xkJ31cbiAgICAgICAgICAvPlxuICAgICAgICApLFxuICAgICAgICBvbkNsaWNrOiBnb0hvbWVcbiAgICAgIH1cbiAgICBdO1xuICB9LCBbZ29Ib21lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtgc2V0dGluZ3MgJHtjbGFzc05hbWV9YH0+XG4gICAgICA8PlxuICAgICAgICA8U3dIZWFkZXJcbiAgICAgICAgICBsZWZ0PSdsb2dvJ1xuICAgICAgICAgIG9uQ2xpY2tMZWZ0PXtnb0hvbWV9XG4gICAgICAgICAgcmlnaHRCdXR0b25zPXtoZWFkZXJJY29uc31cbiAgICAgICAgICBzaG93TGVmdEJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0KCdTZXR0aW5ncycpfVxuICAgICAgICA8L1N3SGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnX19zY3JvbGwtY29udGFpbmVyJ30+XG4gICAgICAgICAge1xuICAgICAgICAgICAgU2V0dGluZ0dyb3VwSXRlbVR5cGUubWFwKChncm91cCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J19fZ3JvdXAtY29udGFpbmVyJ31cbiAgICAgICAgICAgICAgICAgIGtleT17Z3JvdXAua2V5fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHshIWdyb3VwLmxhYmVsICYmICg8ZGl2IGNsYXNzTmFtZT0nX19ncm91cC1sYWJlbCc+e2dyb3VwLmxhYmVsfTwvZGl2Pil9XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnX19ncm91cC1jb250ZW50J30+XG4gICAgICAgICAgICAgICAgICAgIHtncm91cC5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uaXNIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydfX3NldHRpbmctaXRlbSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRJdGVtSWNvbj17Z2VuZXJhdGVMZWZ0SWNvbihpdGVtLmxlZnRJY29uQmdDb2xvciwgaXRlbS5sZWZ0SWNvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJlc3NJdGVtPXtpdGVtLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0SXRlbT17Z2VuZXJhdGVSaWdodEljb24oaXRlbS5yaWdodEljb24pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtMb2NrfVxuICAgICAgICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZz17bG9ja2luZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9ja31cbiAgICAgICAgICAgIHNjaGVtYT17J3NlY29uZGFyeSd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ0xvY2snKX1cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnX192ZXJzaW9uJ30+XG4gICAgICAgICAgQUlHRU5UIFdhbGxldCB2IHtFWFRFTlNJT05fVkVSU0lPTn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC8+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnRGVmYXVsdCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgJy5hbnQtc3ctaGVhZGVyLWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nQm90dG9tOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnRGVmYXVsdFxuICAgIH0sXG5cbiAgICAnLmFudC1zdy1oZWFkZXItY2VudGVyLXBhcnQnOiB7XG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzQsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzQsXG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5oZWFkaW5nRm9udFdlaWdodFxuICAgIH0sXG5cbiAgICAnLl9fc2Nyb2xsLWNvbnRhaW5lcic6IHtcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0b2tlbi5wYWRkaW5nLFxuICAgICAgcGFkZGluZ0xlZnQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nQm90dG9tOiB0b2tlbi5wYWRkaW5nTEdcbiAgICB9LFxuXG4gICAgJy5fX2dyb3VwLWxhYmVsJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MyxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVNNLFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodFNNLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4sXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICAgIH0sXG5cbiAgICAnLl9fZ3JvdXAtY29udGFpbmVyJzoge1xuICAgICAgcGFkZGluZ0JvdHRvbTogdG9rZW4ucGFkZGluZ0xHXG4gICAgfSxcblxuICAgICcuX19zZXR0aW5nLWl0ZW0gKyAuX19zZXR0aW5nLWl0ZW0nOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpblhTXG4gICAgfSxcblxuICAgICcuYW50LXdlYjMtYmxvY2stcmlnaHQtaXRlbSc6IHtcbiAgICAgIG1pbldpZHRoOiA0MCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luUmlnaHQ6IC10b2tlbi5tYXJnaW5YUyxcbiAgICAgIGNvbG9yOiB0b2tlblsnZ3JheS00J11cbiAgICB9LFxuXG4gICAgJy5fX3NldHRpbmctaXRlbTpob3ZlciAuYW50LXdlYjMtYmxvY2stcmlnaHQtaXRlbSc6IHtcbiAgICAgIGNvbG9yOiB0b2tlblsnZ3JheS02J11cbiAgICB9LFxuXG4gICAgJy5fX3ZlcnNpb24nOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDMsXG4gICAgICBmb250U2l6ZTogdG9rZW4uc2l6ZSxcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRcbiAgICB9XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm5hbWVzIjpbIlBhZ2VXcmFwcGVyIiwiV2FsbGV0Q29ubmVjdCIsIkVYVEVOU0lPTl9WRVJTSU9OIiwiVEVMRUdSQU1fVVJMIiwiVFdJVFRFUl9VUkwiLCJ1c2VOb3RpZmljYXRpb24iLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVVJTG9jayIsInVzZUlzUG9wdXAiLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJ3aW5kb3dPcGVuIiwib3BlbkluTmV3VGFiIiwiQmFja2dyb3VuZEljb24iLCJCdXR0b24iLCJJY29uIiwiU2V0dGluZ0l0ZW0iLCJTd0hlYWRlciIsIkFycm93c091dCIsIkFycm93U3F1YXJlT3V0IiwiQm9va0Jvb2ttYXJrIiwiQ2FyZXRSaWdodCIsIkNvaW4iLCJGcmFtZUNvcm5lcnMiLCJHbG9iZUhlbWlzcGhlcmVFYXN0IiwiTG9jayIsIlNoYXJlTmV0d29yayIsIlNoaWVsZENoZWNrIiwiVGVsZWdyYW1Mb2dvIiwiVHdpdHRlckxvZ28iLCJYIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIk91dGxldCIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwidXNlVGhlbWUiLCJpc1JlYWN0Tm9kZSIsImVsZW1lbnQiLCJpc1ZhbGlkRWxlbWVudCIsImdlbmVyYXRlTGVmdEljb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uIiwiaXNOb2RlIiwidW5kZWZpbmVkIiwiZ2VuZXJhdGVSaWdodEljb24iLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJuYXZpZ2F0ZSIsInRva2VuIiwiaXNQb3B1cCIsIm5vdGlmeSIsImdvSG9tZSIsInQiLCJsb2NraW5nIiwic2V0TG9ja2luZyIsImlzVUlMb2NrZWQiLCJsb2NrIiwidW5sb2NrIiwib25Mb2NrIiwidGhlbiIsImNhdGNoIiwiZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiZmluYWxseSIsIlNldHRpbmdHcm91cEl0ZW1UeXBlIiwia2V5IiwiaXRlbXMiLCJsZWZ0SWNvbiIsImxlZnRJY29uQmdDb2xvciIsImNvbG9yUHJpbWFyeSIsInJpZ2h0SWNvbiIsInRpdGxlIiwib25DbGljayIsImFsbG93ZWRQYXRoIiwiY29uc29sZSIsImVycm9yIiwiaXNIaWRkZW4iLCJzdGF0ZSIsImxhYmVsIiwiaGVhZGVySWNvbnMiLCJtYXAiLCJncm91cCIsIml0ZW0iLCJTZXR0aW5ncyIsInRoZW1lIiwiaGVpZ2h0IiwiY29sb3JCZ0RlZmF1bHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwiY29sb3IiLCJjb2xvclRleHRMaWdodDEiLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzQiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmc0IiwiZm9udFdlaWdodCIsImhlYWRpbmdGb250V2VpZ2h0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nTEciLCJjb2xvclRleHRMaWdodDMiLCJmb250U2l6ZVNNIiwibGluZUhlaWdodFNNIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpblRvcCIsIm1hcmdpblhTIiwibWluV2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsInRleHRBbGlnbiIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9