"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Settings_GeneralSetting_tsx"],{

/***/ "../extension-base/src/constants/i18n.ts":
/*!***********************************************!*\
  !*** ../extension-base/src/constants/i18n.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENABLE_LANGUAGES": () => (/* binding */ ENABLE_LANGUAGES),
/* harmony export */   "languageOptions": () => (/* binding */ languageOptions)
/* harmony export */ });
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

const languageOptions = [{
  text: 'English',
  value: 'en'
}, {
  text: 'Tiếng Việt',
  value: 'vi'
}, {
  text: '汉语',
  value: 'zh'
}, {
  text: '日本語',
  value: 'ja'
}, {
  text: 'Русский',
  value: 'ru'
}, {
  text: 'Français',
  value: 'fr'
}, {
  text: 'Türkce',
  value: 'tr'
}, {
  text: 'Polski',
  value: 'pl'
}, {
  text: 'ภาษาไทย',
  value: 'th'
}, {
  text: 'اردو',
  value: 'ur'
}];
const ENABLE_LANGUAGES = ['en', 'vi', 'zh', 'ja', 'ru'];

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Settings/GeneralSetting.tsx":
/*!******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/GeneralSetting.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralSetting": () => (/* binding */ GeneralSetting),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_base_constants_i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/extension-base/constants/i18n */ "../extension-base/src/constants/i18n.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/setting-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/select-modal/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CaretRight.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/MoonStars.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Sun.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/GlobeHemisphereEast.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Layout.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowSquareUpRight.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CornersOut.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Image.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/BellSimpleRinging.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0
















function renderSelectionItem(item, _selected) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('__selection-item', {
      'item-disabled': item.disabled
    }),
    leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
      backgroundColor: item.leftIconBgColor,
      phosphorIcon: item.leftIcon,
      size: "sm",
      type: "phosphor",
      weight: "fill"
    }),
    name: item.title,
    rightItem: _selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "__right-icon",
      customSize: '20px',
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_11__["default"],
      type: "phosphor",
      weight: "fill"
    }) : null
  }, item.key);
}
function renderModalTrigger(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: '__trigger-item',
    leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
      backgroundColor: item.leftIconBgColor,
      phosphorIcon: item.leftIcon,
      size: "sm",
      type: "phosphor",
      weight: "fill"
    }),
    name: item.title,
    rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "__right-icon",
      customSize: '20px',
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
      type: "phosphor"
    })
  }, item.key);
}
function Component({
  className = ''
}) {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
  const theme = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.settings.theme);
  const _language = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.settings.language);
  const _browserConfirmationType = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.settings.browserConfirmationType);
  const [loadingMap, setLoadingMap] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    browserConfirmationType: false,
    language: false
  });
  const goBack = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_1__["default"])().goBack;
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__.useTheme)();
  const themeItems = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return [{
      key: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ThemeNames.DARK,
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
      leftIconBgColor: token.colorPrimary,
      title: t('Dark theme')
    }, {
      key: _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_15__.ThemeNames.LIGHT,
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"],
      leftIconBgColor: token.colorPrimary,
      title: t('Light theme'),
      disabled: true
    }];
  }, [t, token]);
  const languageItems = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return _subwallet_extension_base_constants_i18n__WEBPACK_IMPORTED_MODULE_18__.languageOptions.map(item => ({
      key: item.value,
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
      leftIconBgColor: token['green-6'],
      title: item.text,
      disabled: !_subwallet_extension_base_constants_i18n__WEBPACK_IMPORTED_MODULE_18__.ENABLE_LANGUAGES.includes(item.value)
    }));
  }, [token]);
  const browserConfirmationItems = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return [{
      key: 'extension',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"],
      leftIconBgColor: token['volcano-6'],
      title: t('Extension')
    }, {
      key: 'popup',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"],
      leftIconBgColor: token['volcano-6'],
      title: t('Popup')
    }, {
      key: 'window',
      leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_22__["default"],
      leftIconBgColor: token['volcano-6'],
      title: t('Window')
    }];
  }, [t, token]);
  const onSelectLanguage = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(value => {
    setLoadingMap(prev => ({
      ...prev,
      language: true
    }));
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.saveLanguage)(value).finally(() => {
      setLoadingMap(prev => ({
        ...prev,
        language: false
      }));
    });
  }, []);
  const onSelectBrowserConfirmationType = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(value => {
    setLoadingMap(prev => ({
      ...prev,
      browserConfirmationType: true
    }));
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.saveBrowserConfirmationType)(value).catch(e => {
      console.log('saveBrowserConfirmationType error', e);
    }).finally(() => {
      setLoadingMap(prev => ({
        ...prev,
        browserConfirmationType: false
      }));
    });
  }, []);
  const onSelectTheme = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(value => {
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.saveTheme)(value).finally(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.noop);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `general-setting ${className}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: goBack,
      title: t('General settings'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: '__scroll-container',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
          background: 'default',
          className: `__modal ${className}`,
          customInput: renderModalTrigger({
            key: 'wallet-theme-trigger',
            leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
            leftIconBgColor: token.colorPrimary,
            title: t('Wallet theme')
          }),
          id: "wallet-theme-select-modal",
          inputWidth: '100%',
          itemKey: "key",
          items: themeItems,
          onSelect: onSelectTheme,
          renderItem: renderSelectionItem,
          selected: theme,
          shape: "round",
          title: t('Wallet theme')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
          background: 'default',
          className: `__modal ${className}`,
          customInput: renderModalTrigger({
            key: 'languages-trigger',
            leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
            leftIconBgColor: token['green-6'],
            title: t('Language')
          }),
          disabled: loadingMap.language,
          id: "languages-select-modal",
          inputWidth: '100%',
          itemKey: "key",
          items: languageItems,
          onSelect: onSelectLanguage,
          renderItem: renderSelectionItem,
          selected: _language,
          shape: "round",
          size: "small",
          title: t('Language')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
          background: 'default',
          className: `__modal ${className}`,
          customInput: renderModalTrigger({
            key: 'browser-confirmation-type-trigger',
            leftIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_25__["default"],
            leftIconBgColor: token['volcano-6'],
            title: t('Browser notification type')
          }),
          disabled: loadingMap.browserConfirmationType,
          id: "browser-confirmation-type-select-modal",
          inputWidth: '100%',
          itemKey: "key",
          items: browserConfirmationItems,
          onSelect: onSelectBrowserConfirmationType,
          renderItem: renderSelectionItem,
          selected: _browserConfirmationType,
          shape: "round",
          size: "small",
          title: t('Browser notification type')
        })]
      })
    })
  });
}
const GeneralSetting = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(Component).withConfig({
  displayName: "GeneralSetting",
  componentId: "sc-1r7u3lt-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.ant-web3-block-right-item': {
      minWidth: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: -token.marginXS
    },
    '.item-disabled': {
      '.ant-setting-item-content': {
        cursor: 'not-allowed',
        backgroundColor: `${token.colorBgSecondary} !important`
      }
    },
    '&.general-setting': {
      height: '100%',
      backgroundColor: token.colorBgDefault,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      '.ant-sw-header-bg-default': {
        // backgroundColor: 'transparent'
      },
      '.ant-select-modal-input-custom + .ant-select-modal-input-custom': {
        marginTop: token.marginXS
      },
      '.ant-select-modal-input-custom': {
        width: 'unset'
      },
      '.__trigger-item .ant-web3-block-right-item': {
        color: token.colorTextLight4
      },
      '.__trigger-item:hover .ant-web3-block-right-item': {
        color: token.colorTextLight2
      },
      '.__scroll-container': {
        overflow: 'auto',
        paddingTop: token.padding,
        paddingRight: token.padding,
        paddingLeft: token.padding,
        paddingBottom: token.paddingLG
      }
    },
    '&.__modal': {
      '.__selection-item .ant-web3-block-right-item': {
        color: token.colorSuccess
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSetting);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1NldHRpbmdzX0dlbmVyYWxTZXR0aW5nX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSU8sTUFBTUEsZUFBcUMsR0FBRyxDQUNuRDtFQUNFQyxJQUFJLEVBQUUsU0FBUztFQUNmQyxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRUQsSUFBSSxFQUFFLFlBQVk7RUFDbEJDLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFRCxJQUFJLEVBQUUsSUFBSTtFQUNWQyxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRUQsSUFBSSxFQUFFLEtBQUs7RUFDWEMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VELElBQUksRUFBRSxTQUFTO0VBQ2ZDLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFRCxJQUFJLEVBQUUsVUFBVTtFQUNoQkMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VELElBQUksRUFBRSxRQUFRO0VBQ2RDLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFRCxJQUFJLEVBQUUsUUFBUTtFQUNkQyxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRUQsSUFBSSxFQUFFLFNBQVM7RUFDZkMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VELElBQUksRUFBRSxNQUFNO0VBQ1pDLEtBQUssRUFBRTtBQUNULENBQUMsQ0FDRjtBQUVNLE1BQU1DLGdCQUFnQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEOUU7QUFDQTs7QUFFbUg7QUFDdEI7QUFDZjtBQUNnQjtBQUNnQjtBQUdwRDtBQUN3QztBQUN0RTtBQUNrSjtBQUNoSDtBQUNmO0FBQ0w7QUFDVztBQUFBO0FBQUE7QUFZckQsU0FBU2dDLG1C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LEtBQUssQ0FBQzJDO01BQ2Y7SUFDRjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZXpCLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1iYXNlL3NyYy9jb25zdGFudHMvaTE4bi50cyIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9TZXR0aW5ncy9HZW5lcmFsU2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IExhbmd1YWdlT3B0aW9uVHlwZSwgTGFuZ3VhZ2VUeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9iYWNrZ3JvdW5kL0tvbmlUeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZU9wdGlvbnM6IExhbmd1YWdlT3B0aW9uVHlwZVtdID0gW1xuICB7XG4gICAgdGV4dDogJ0VuZ2xpc2gnLFxuICAgIHZhbHVlOiAnZW4nXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnVGnhur9uZyBWaeG7h3QnLFxuICAgIHZhbHVlOiAndmknXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAn5rGJ6K+tJyxcbiAgICB2YWx1ZTogJ3poJ1xuICB9LFxuICB7XG4gICAgdGV4dDogJ+aXpeacrOiqnicsXG4gICAgdmFsdWU6ICdqYSdcbiAgfSxcbiAge1xuICAgIHRleHQ6ICfQoNGD0YHRgdC60LjQuScsXG4gICAgdmFsdWU6ICdydSdcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdGcmFuw6dhaXMnLFxuICAgIHZhbHVlOiAnZnInXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnVMO8cmtjZScsXG4gICAgdmFsdWU6ICd0cidcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdQb2xza2knLFxuICAgIHZhbHVlOiAncGwnXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAn4Lig4Liy4Lip4Liy4LmE4LiX4LiiJyxcbiAgICB2YWx1ZTogJ3RoJ1xuICB9LFxuICB7XG4gICAgdGV4dDogJ9in2LHYr9mIJyxcbiAgICB2YWx1ZTogJ3VyJ1xuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgRU5BQkxFX0xBTkdVQUdFUzogTGFuZ3VhZ2VUeXBlW10gPSBbJ2VuJywgJ3ZpJywgJ3poJywgJ2phJywgJ3J1J107XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBwb2xrYWRvdC9leHRlbnNpb24tdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgQnJvd3NlckNvbmZpcm1hdGlvblR5cGUsIExhbmd1YWdlVHlwZSwgVGhlbWVOYW1lcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC9Lb25pVHlwZXMnO1xuaW1wb3J0IHsgRU5BQkxFX0xBTkdVQUdFUywgbGFuZ3VhZ2VPcHRpb25zIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9jb25zdGFudHMvaTE4bic7XG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB1c2VEZWZhdWx0TmF2aWdhdGUgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9yb3V0ZXIvdXNlRGVmYXVsdE5hdmlnYXRlJztcbmltcG9ydCB7IHNhdmVCcm93c2VyQ29uZmlybWF0aW9uVHlwZSwgc2F2ZUxhbmd1YWdlLCBzYXZlVGhlbWUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcyc7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgQmFja2dyb3VuZEljb24sIEljb24sIFNlbGVjdE1vZGFsLCBTZXR0aW5nSXRlbSwgU3dJY29uUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEFycm93U3F1YXJlVXBSaWdodCwgQmVsbFNpbXBsZVJpbmdpbmcsIENhcmV0UmlnaHQsIENoZWNrQ2lyY2xlLCBDb3JuZXJzT3V0LCBHbG9iZUhlbWlzcGhlcmVFYXN0LCBJbWFnZSwgTGF5b3V0IGFzIExheW91dEljb24sIE1vb25TdGFycywgU3VuIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG50eXBlIFNlbGVjdGlvbkl0ZW1UeXBlID0ge1xuICBrZXk6IHN0cmluZyxcbiAgbGVmdEljb246IFN3SWNvblByb3BzWydwaG9zcGhvckljb24nXSxcbiAgbGVmdEljb25CZ0NvbG9yOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGRpc2FibGVkPzogYm9vbGVhbixcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbkl0ZW0gKGl0ZW06IFNlbGVjdGlvbkl0ZW1UeXBlLCBfc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIChcbiAgICA8U2V0dGluZ0l0ZW1cbiAgICAgIGNsYXNzTmFtZT17Q04oJ19fc2VsZWN0aW9uLWl0ZW0nLCB7ICdpdGVtLWRpc2FibGVkJzogaXRlbS5kaXNhYmxlZCB9KX1cbiAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICBsZWZ0SXRlbUljb249e1xuICAgICAgICA8QmFja2dyb3VuZEljb25cbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2l0ZW0ubGVmdEljb25CZ0NvbG9yfVxuICAgICAgICAgIHBob3NwaG9ySWNvbj17aXRlbS5sZWZ0SWNvbn1cbiAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICB0eXBlPSdwaG9zcGhvcidcbiAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBuYW1lPXtpdGVtLnRpdGxlfVxuICAgICAgcmlnaHRJdGVtPXtcbiAgICAgICAgX3NlbGVjdGVkXG4gICAgICAgICAgPyA8SWNvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdfX3JpZ2h0LWljb24nXG4gICAgICAgICAgICBjdXN0b21TaXplPXsnMjBweCd9XG4gICAgICAgICAgICBwaG9zcGhvckljb249e0NoZWNrQ2lyY2xlfVxuICAgICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJNb2RhbFRyaWdnZXIgKGl0ZW06IFNlbGVjdGlvbkl0ZW1UeXBlKSB7XG4gIHJldHVybiAoXG4gICAgPFNldHRpbmdJdGVtXG4gICAgICBjbGFzc05hbWU9eydfX3RyaWdnZXItaXRlbSd9XG4gICAgICBrZXk9e2l0ZW0ua2V5fVxuICAgICAgbGVmdEl0ZW1JY29uPXtcbiAgICAgICAgPEJhY2tncm91bmRJY29uXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtpdGVtLmxlZnRJY29uQmdDb2xvcn1cbiAgICAgICAgICBwaG9zcGhvckljb249e2l0ZW0ubGVmdEljb259XG4gICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgbmFtZT17aXRlbS50aXRsZX1cbiAgICAgIHJpZ2h0SXRlbT17XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPSdfX3JpZ2h0LWljb24nXG4gICAgICAgICAgY3VzdG9tU2l6ZT17JzIwcHgnfVxuICAgICAgICAgIHBob3NwaG9ySWNvbj17Q2FyZXRSaWdodH1cbiAgICAgICAgICB0eXBlPSdwaG9zcGhvcidcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufVxuXG50eXBlIExvYWRpbmdNYXAgPSB7XG4gIGxhbmd1YWdlOiBib29sZWFuO1xuICBicm93c2VyQ29uZmlybWF0aW9uVHlwZTogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MudGhlbWUpO1xuICBjb25zdCBfbGFuZ3VhZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MubGFuZ3VhZ2UpO1xuICBjb25zdCBfYnJvd3NlckNvbmZpcm1hdGlvblR5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MuYnJvd3NlckNvbmZpcm1hdGlvblR5cGUpO1xuICBjb25zdCBbbG9hZGluZ01hcCwgc2V0TG9hZGluZ01hcF0gPSB1c2VTdGF0ZTxMb2FkaW5nTWFwPih7XG4gICAgYnJvd3NlckNvbmZpcm1hdGlvblR5cGU6IGZhbHNlLFxuICAgIGxhbmd1YWdlOiBmYWxzZVxuICB9KTtcblxuICBjb25zdCBnb0JhY2sgPSB1c2VEZWZhdWx0TmF2aWdhdGUoKS5nb0JhY2s7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG5cbiAgY29uc3QgdGhlbWVJdGVtcyA9IHVzZU1lbW88U2VsZWN0aW9uSXRlbVR5cGVbXT4oKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGtleTogVGhlbWVOYW1lcy5EQVJLLFxuICAgICAgICBsZWZ0SWNvbjogTW9vblN0YXJzLFxuICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeSxcbiAgICAgICAgdGl0bGU6IHQoJ0RhcmsgdGhlbWUnKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBUaGVtZU5hbWVzLkxJR0hULFxuICAgICAgICBsZWZ0SWNvbjogU3VuLFxuICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeSxcbiAgICAgICAgdGl0bGU6IHQoJ0xpZ2h0IHRoZW1lJyksXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9XG4gICAgXTtcbiAgfSwgW3QsIHRva2VuXSk7XG5cbiAgY29uc3QgbGFuZ3VhZ2VJdGVtcyA9IHVzZU1lbW88U2VsZWN0aW9uSXRlbVR5cGVbXT4oKCkgPT4ge1xuICAgIHJldHVybiBsYW5ndWFnZU9wdGlvbnMubWFwKChpdGVtKSA9PiAoe1xuICAgICAga2V5OiBpdGVtLnZhbHVlLFxuICAgICAgbGVmdEljb246IEdsb2JlSGVtaXNwaGVyZUVhc3QsXG4gICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWydncmVlbi02J10sXG4gICAgICB0aXRsZTogaXRlbS50ZXh0LFxuICAgICAgZGlzYWJsZWQ6ICFFTkFCTEVfTEFOR1VBR0VTLmluY2x1ZGVzKGl0ZW0udmFsdWUpXG4gICAgfSkpO1xuICB9LCBbdG9rZW5dKTtcblxuICBjb25zdCBicm93c2VyQ29uZmlybWF0aW9uSXRlbXMgPSB1c2VNZW1vPFNlbGVjdGlvbkl0ZW1UeXBlW10+KCgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdleHRlbnNpb24nLFxuICAgICAgICBsZWZ0SWNvbjogTGF5b3V0SWNvbixcbiAgICAgICAgbGVmdEljb25CZ0NvbG9yOiB0b2tlblsndm9sY2Fuby02J10sXG4gICAgICAgIHRpdGxlOiB0KCdFeHRlbnNpb24nKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICBsZWZ0SWNvbjogQXJyb3dTcXVhcmVVcFJpZ2h0LFxuICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWyd2b2xjYW5vLTYnXSxcbiAgICAgICAgdGl0bGU6IHQoJ1BvcHVwJylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3dpbmRvdycsXG4gICAgICAgIGxlZnRJY29uOiBDb3JuZXJzT3V0LFxuICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWyd2b2xjYW5vLTYnXSxcbiAgICAgICAgdGl0bGU6IHQoJ1dpbmRvdycpXG4gICAgICB9XG4gICAgXTtcbiAgfSwgW3QsIHRva2VuXSk7XG5cbiAgY29uc3Qgb25TZWxlY3RMYW5ndWFnZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZ01hcCgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBsYW5ndWFnZTogdHJ1ZVxuICAgIH0pKTtcbiAgICBzYXZlTGFuZ3VhZ2UodmFsdWUgYXMgTGFuZ3VhZ2VUeXBlKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nTWFwKChwcmV2KSA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgbGFuZ3VhZ2U6IGZhbHNlXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25TZWxlY3RCcm93c2VyQ29uZmlybWF0aW9uVHlwZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZ01hcCgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBicm93c2VyQ29uZmlybWF0aW9uVHlwZTogdHJ1ZVxuICAgIH0pKTtcbiAgICBzYXZlQnJvd3NlckNvbmZpcm1hdGlvblR5cGUodmFsdWUgYXMgQnJvd3NlckNvbmZpcm1hdGlvblR5cGUpXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmVCcm93c2VyQ29uZmlybWF0aW9uVHlwZSBlcnJvcicsIGUpO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZ01hcCgocHJldikgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIGJyb3dzZXJDb25maXJtYXRpb25UeXBlOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU2VsZWN0VGhlbWUgPSB1c2VDYWxsYmFjaygodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNhdmVUaGVtZSh2YWx1ZSBhcyBUaGVtZU5hbWVzKS5maW5hbGx5KG5vb3ApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtgZ2VuZXJhbC1zZXR0aW5nICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICBvbkJhY2s9e2dvQmFja31cbiAgICAgICAgdGl0bGU9e3QoJ0dlbmVyYWwgc2V0dGluZ3MnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydfX3Njcm9sbC1jb250YWluZXInfT5cbiAgICAgICAgICA8U2VsZWN0TW9kYWxcbiAgICAgICAgICAgIGJhY2tncm91bmQ9eydkZWZhdWx0J31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YF9fbW9kYWwgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgIGN1c3RvbUlucHV0PXtyZW5kZXJNb2RhbFRyaWdnZXIoe1xuICAgICAgICAgICAgICBrZXk6ICd3YWxsZXQtdGhlbWUtdHJpZ2dlcicsXG4gICAgICAgICAgICAgIGxlZnRJY29uOiBJbWFnZSxcbiAgICAgICAgICAgICAgbGVmdEljb25CZ0NvbG9yOiB0b2tlbi5jb2xvclByaW1hcnksXG4gICAgICAgICAgICAgIHRpdGxlOiB0KCdXYWxsZXQgdGhlbWUnKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBpZD0nd2FsbGV0LXRoZW1lLXNlbGVjdC1tb2RhbCdcbiAgICAgICAgICAgIGlucHV0V2lkdGg9eycxMDAlJ31cbiAgICAgICAgICAgIGl0ZW1LZXk9J2tleSdcbiAgICAgICAgICAgIGl0ZW1zPXt0aGVtZUl0ZW1zfVxuICAgICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0VGhlbWV9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJTZWxlY3Rpb25JdGVtfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoZW1lfVxuICAgICAgICAgICAgc2hhcGU9J3JvdW5kJ1xuICAgICAgICAgICAgdGl0bGU9e3QoJ1dhbGxldCB0aGVtZScpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8U2VsZWN0TW9kYWxcbiAgICAgICAgICAgIGJhY2tncm91bmQ9eydkZWZhdWx0J31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YF9fbW9kYWwgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgIGN1c3RvbUlucHV0PXtyZW5kZXJNb2RhbFRyaWdnZXIoe1xuICAgICAgICAgICAgICBrZXk6ICdsYW5ndWFnZXMtdHJpZ2dlcicsXG4gICAgICAgICAgICAgIGxlZnRJY29uOiBHbG9iZUhlbWlzcGhlcmVFYXN0LFxuICAgICAgICAgICAgICBsZWZ0SWNvbkJnQ29sb3I6IHRva2VuWydncmVlbi02J10sXG4gICAgICAgICAgICAgIHRpdGxlOiB0KCdMYW5ndWFnZScpXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nTWFwLmxhbmd1YWdlfVxuICAgICAgICAgICAgaWQ9J2xhbmd1YWdlcy1zZWxlY3QtbW9kYWwnXG4gICAgICAgICAgICBpbnB1dFdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgICBpdGVtS2V5PSdrZXknXG4gICAgICAgICAgICBpdGVtcz17bGFuZ3VhZ2VJdGVtc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdExhbmd1YWdlfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVyU2VsZWN0aW9uSXRlbX1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtfbGFuZ3VhZ2V9XG4gICAgICAgICAgICBzaGFwZT0ncm91bmQnXG4gICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgIHRpdGxlPXt0KCdMYW5ndWFnZScpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8U2VsZWN0TW9kYWxcbiAgICAgICAgICAgIGJhY2tncm91bmQ9eydkZWZhdWx0J31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YF9fbW9kYWwgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgIGN1c3RvbUlucHV0PXtyZW5kZXJNb2RhbFRyaWdnZXIoe1xuICAgICAgICAgICAgICBrZXk6ICdicm93c2VyLWNvbmZpcm1hdGlvbi10eXBlLXRyaWdnZXInLFxuICAgICAgICAgICAgICBsZWZ0SWNvbjogQmVsbFNpbXBsZVJpbmdpbmcsXG4gICAgICAgICAgICAgIGxlZnRJY29uQmdDb2xvcjogdG9rZW5bJ3ZvbGNhbm8tNiddLFxuICAgICAgICAgICAgICB0aXRsZTogdCgnQnJvd3NlciBub3RpZmljYXRpb24gdHlwZScpXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nTWFwLmJyb3dzZXJDb25maXJtYXRpb25UeXBlfVxuICAgICAgICAgICAgaWQ9J2Jyb3dzZXItY29uZmlybWF0aW9uLXR5cGUtc2VsZWN0LW1vZGFsJ1xuICAgICAgICAgICAgaW5wdXRXaWR0aD17JzEwMCUnfVxuICAgICAgICAgICAgaXRlbUtleT0na2V5J1xuICAgICAgICAgICAgaXRlbXM9e2Jyb3dzZXJDb25maXJtYXRpb25JdGVtc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdEJyb3dzZXJDb25maXJtYXRpb25UeXBlfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVyU2VsZWN0aW9uSXRlbX1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtfYnJvd3NlckNvbmZpcm1hdGlvblR5cGV9XG4gICAgICAgICAgICBzaGFwZT0ncm91bmQnXG4gICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgIHRpdGxlPXt0KCdCcm93c2VyIG5vdGlmaWNhdGlvbiB0eXBlJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgR2VuZXJhbFNldHRpbmcgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICAnLmFudC13ZWIzLWJsb2NrLXJpZ2h0LWl0ZW0nOiB7XG4gICAgICBtaW5XaWR0aDogNDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAtdG9rZW4ubWFyZ2luWFNcbiAgICB9LFxuXG4gICAgJy5pdGVtLWRpc2FibGVkJzoge1xuICAgICAgJy5hbnQtc2V0dGluZy1pdGVtLWNvbnRlbnQnOiB7XG4gICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0b2tlbi5jb2xvckJnU2Vjb25kYXJ5fSAhaW1wb3J0YW50YFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnJi5nZW5lcmFsLXNldHRpbmcnOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JCZ0RlZmF1bHQsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgJy5hbnQtc3ctaGVhZGVyLWJnLWRlZmF1bHQnOiB7XG4gICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcblxuICAgICAgJy5hbnQtc2VsZWN0LW1vZGFsLWlucHV0LWN1c3RvbSArIC5hbnQtc2VsZWN0LW1vZGFsLWlucHV0LWN1c3RvbSc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5YU1xuICAgICAgfSxcblxuICAgICAgJy5hbnQtc2VsZWN0LW1vZGFsLWlucHV0LWN1c3RvbSc6IHtcbiAgICAgICAgd2lkdGg6ICd1bnNldCdcbiAgICAgIH0sXG5cbiAgICAgICcuX190cmlnZ2VyLWl0ZW0gLmFudC13ZWIzLWJsb2NrLXJpZ2h0LWl0ZW0nOiB7XG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDRcbiAgICAgIH0sXG5cbiAgICAgICcuX190cmlnZ2VyLWl0ZW06aG92ZXIgLmFudC13ZWIzLWJsb2NrLXJpZ2h0LWl0ZW0nOiB7XG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDJcbiAgICAgIH0sXG5cbiAgICAgICcuX19zY3JvbGwtY29udGFpbmVyJzoge1xuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiB0b2tlbi5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiB0b2tlbi5wYWRkaW5nTEdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJyYuX19tb2RhbCc6IHtcbiAgICAgICcuX19zZWxlY3Rpb24taXRlbSAuYW50LXdlYjMtYmxvY2stcmlnaHQtaXRlbSc6IHtcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yU3VjY2Vzc1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhbFNldHRpbmc7XG4iXSwibmFtZXMiOlsibGFuZ3VhZ2VPcHRpb25zIiwidGV4dCIsInZhbHVlIiwiRU5BQkxFX0xBTkdVQUdFUyIsIlRoZW1lTmFtZXMiLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsInVzZURlZmF1bHROYXZpZ2F0ZSIsInNhdmVCcm93c2VyQ29uZmlybWF0aW9uVHlwZSIsInNhdmVMYW5ndWFnZSIsInNhdmVUaGVtZSIsIm5vb3AiLCJCYWNrZ3JvdW5kSWNvbiIsIkljb24iLCJTZWxlY3RNb2RhbCIsIlNldHRpbmdJdGVtIiwiQ04iLCJBcnJvd1NxdWFyZVVwUmlnaHQiLCJCZWxsU2ltcGxlUmluZ2luZyIsIkNhcmV0UmlnaHQiLCJDaGVja0NpcmNsZSIsIkNvcm5lcnNPdXQiLCJHbG9iZUhlbWlzcGhlcmVFYXN0IiwiSW1hZ2UiLCJMYXlvdXRJY29uIiwiTW9vblN0YXJzIiwiU3VuIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlU2VsZWN0b3IiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsInJlbmRlclNlbGVjdGlvbkl0ZW0iLCJpdGVtIiwiX3NlbGVjdGVkIiwiZGlzYWJsZWQiLCJsZWZ0SWNvbkJnQ29sb3IiLCJsZWZ0SWNvbiIsInRpdGxlIiwia2V5IiwicmVuZGVyTW9kYWxUcmlnZ2VyIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwidCIsInRoZW1lIiwic3RhdGUiLCJzZXR0aW5ncyIsIl9sYW5ndWFnZSIsImxhbmd1YWdlIiwiX2Jyb3dzZXJDb25maXJtYXRpb25UeXBlIiwiYnJvd3NlckNvbmZpcm1hdGlvblR5cGUiLCJsb2FkaW5nTWFwIiwic2V0TG9hZGluZ01hcCIsImdvQmFjayIsInRva2VuIiwidGhlbWVJdGVtcyIsIkRBUksiLCJjb2xvclByaW1hcnkiLCJMSUdIVCIsImxhbmd1YWdlSXRlbXMiLCJtYXAiLCJpbmNsdWRlcyIsImJyb3dzZXJDb25maXJtYXRpb25JdGVtcyIsIm9uU2VsZWN0TGFuZ3VhZ2UiLCJwcmV2IiwiZmluYWxseSIsIm9uU2VsZWN0QnJvd3NlckNvbmZpcm1hdGlvblR5cGUiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwib25TZWxlY3RUaGVtZSIsIkdlbmVyYWxTZXR0aW5nIiwibWluV2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5YUyIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQmdTZWNvbmRhcnkiLCJoZWlnaHQiLCJjb2xvckJnRGVmYXVsdCIsImZsZXhEaXJlY3Rpb24iLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsIndpZHRoIiwiY29sb3IiLCJjb2xvclRleHRMaWdodDQiLCJjb2xvclRleHRMaWdodDIiLCJwYWRkaW5nVG9wIiwicGFkZGluZyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMRyIsImNvbG9yU3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=