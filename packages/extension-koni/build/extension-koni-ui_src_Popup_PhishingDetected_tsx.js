"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_PhishingDetected_tsx"],{

/***/ "../extension-koni-ui/src/Popup/PhishingDetected.tsx":
/*!***********************************************************!*\
  !*** ../extension-koni-ui/src/Popup/PhishingDetected.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/typography/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/XCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldSlash.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0













function _PhishingDetected({
  className
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useDefaultNavigate)();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
  const website = (0,react_router__WEBPACK_IMPORTED_MODULE_8__.useParams)().website || '';
  const decodedWebsite = decodeURIComponent(website);
  const footerBtn = {
    children: t('Get me out of here'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
      weight: "fill"
    }),
    onClick: goHome
  };
  const onTrustSite = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.passPhishingPage)(decodedWebsite).then(() => {
      location.replace(decodedWebsite);
    }).catch(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.noop);
  }, [decodedWebsite]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className),
    rightFooterButton: footerBtn,
    showBackButton: false,
    subHeaderPaddingVertical: true,
    title: t('Phishing detection'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('__upper-block-wrapper')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: token.colorError,
      iconProps: {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
        weight: 'fill'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "title h3-text text-danger",
      children: t('Phishing detection')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "h4-text text-danger website-url",
      children: decodedWebsite
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "phishing-detection-message",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        children: [t('This domain has been reported as a known phishing site on a community maintained list:'), "\xA0"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Link, {
        href: "https://polkadot.js.org/phishing/#",
        size: "lg",
        children: t('view full list')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "trust-site",
      onClick: onTrustSite,
      children: t('I trust this site')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.BackgroundExpandView, {})]
  });
}
const PhishingDetected = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_PhishingDetected).withConfig({
  displayName: "PhishingDetected",
  componentId: "sc-dx5uzm-0"
})(({
  theme
}) => {
  const {
    extendToken,
    token
  } = theme;
  return {
    position: 'relative',
    border: `1px solid ${token.colorBgInput}`,
    '.ant-sw-screen-layout-body': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 48
    },
    '.ant-sw-sub-header-title-content': {
      zIndex: 1
    },
    '.title': {
      paddingTop: 16,
      paddingBottom: 16
    },
    '.phishing-detection-message': {
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 16,
      textAlign: 'center',
      fontSize: token.fontSizeLG,
      lineHeight: token.lineHeightLG,
      color: token.colorTextLight3,
      marginBottom: token.margin
    },
    '.trust-site': {
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextLight5,
      cursor: 'pointer',
      '&:hover': {
        color: token.colorTextLight2
      }
    },
    '.__upper-block-wrapper': {
      position: 'absolute',
      height: 180,
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      transaction: '0.1s height',
      backgroundImage: extendToken.tokensScreenDangerBackgroundColor
    },
    '.website-url': {
      textAlign: 'center',
      paddingLeft: token.paddingXL,
      paddingRight: token.paddingXL,
      wordBreak: 'break-all'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhishingDetected);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1BoaXNoaW5nRGV0ZWN0ZWRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFdUY7QUFDQztBQUNkO0FBRWhCO0FBQ29CO0FBQ2xEO0FBQzBCO0FBQ1g7QUFDRjtBQUNZO0FBQUE7QUFBQTtBQU1yRCxTQUFTaUIsaUJBQWlCLENBQUU7RUFBRUM7QUFBaUIsQ0FBQyxFQUE2QjtFQUMzRSxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHaEIsa0ZBQWMsRUFBRTtFQUM5QixNQUFNO0lBQUVpQjtFQUFPLENBQUMsR0FBR2xCLHNGQUFrQixFQUFFO0VBQ3ZDLE1BQU07SUFBRW1CO0VBQU0sQ0FBQyxHQUFHTCwyREFBUSxFQUFXO0VBQ3JDLE1BQU1NLE9BQU8sR0FBR1IsdURBQVMsRUFBdUIsQ0FBQ1EsT0FBTyxJQUFJLEVBQUU7RUFDOUQsTUFBTUMsY0FBYyxHQUFHQyxrQkFBa0IsQ0FBQ0YsT0FBTyxDQUFDO0VBRWxELE1BQU1HLFNBQXNCLEdBQUc7SUFDN0JDLFFBQVEsRUFBRVAsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQ2pDUSxJQUFJLGVBQUUsdURBQUMsMkRBQUk7TUFDVCxZQUFZLEVBQUVoQix1REFBUTtNQUN0QixNQUFNLEVBQUM7SUFBTSxFQUNiO0lBQ0ZpQixPQUFPLEVBQUVSO0VBQ1gsQ0FBQztFQUVELE1BQU1TLFdBQVcsR0FBR2hCLGtEQUFXLENBQUMsTUFBTTtJQUNwQ1Qsd0ZBQWdCLENBQUNtQixjQUFjLENBQUMsQ0FDN0JPLElBQUksQ0FBQyxNQUFNO01BQ1ZDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDVCxjQUFjLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQ0RVLEtBQUssQ0FBQzVCLG9FQUFJLENBQUM7RUFDaEIsQ0FBQyxFQUFFLENBQUNrQixjQUFjLENBQUMsQ0FBQztFQUVwQixvQkFDRSx3REFBQyw2RkFBd0I7SUFDdkIsU0FBUyxFQUFF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RSxVQUFVLEVBQUUsUUFBUTtNQUNwQndCLFdBQVcsRUFBRSxhQUFhO01BQzFCQyxlQUFlLEVBQUUvQixXQUFXLENBQUNnQztJQUMvQixDQUFDO0lBRUQsY0FBYyxFQUFFO01BQ2RwQixTQUFTLEVBQUUsUUFBUTtNQUNuQkYsV0FBVyxFQUFFNUIsS0FBSyxDQUFDbUQsU0FBUztNQUM1QnRCLFlBQVksRUFBRTdCLEtBQUssQ0FBQ21ELFNBQVM7TUFDN0JDLFNBQVMsRUFBRTtJQUNiO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlcEMsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvUGhpc2hpbmdEZXRlY3RlZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEJhY2tncm91bmRFeHBhbmRWaWV3LCBMYXlvdXQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlRGVmYXVsdE5hdmlnYXRlLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgcGFzc1BoaXNoaW5nUGFnZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90aGVtZXMnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgQnV0dG9uUHJvcHMsIEljb24sIFBhZ2VJY29uLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBTaGllbGRTbGFzaCwgWENpcmNsZSB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9QaGlzaGluZ0RldGVjdGVkICh7IGNsYXNzTmFtZSB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgZ29Ib21lIH0gPSB1c2VEZWZhdWx0TmF2aWdhdGUoKTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcbiAgY29uc3Qgd2Vic2l0ZSA9IHVzZVBhcmFtczx7IHdlYnNpdGU6IHN0cmluZyB9PigpLndlYnNpdGUgfHwgJyc7XG4gIGNvbnN0IGRlY29kZWRXZWJzaXRlID0gZGVjb2RlVVJJQ29tcG9uZW50KHdlYnNpdGUpO1xuXG4gIGNvbnN0IGZvb3RlckJ0bjogQnV0dG9uUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IHQoJ0dldCBtZSBvdXQgb2YgaGVyZScpLFxuICAgIGljb246IDxJY29uXG4gICAgICBwaG9zcGhvckljb249e1hDaXJjbGV9XG4gICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgLz4sXG4gICAgb25DbGljazogZ29Ib21lXG4gIH07XG5cbiAgY29uc3Qgb25UcnVzdFNpdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcGFzc1BoaXNoaW5nUGFnZShkZWNvZGVkV2Vic2l0ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZShkZWNvZGVkV2Vic2l0ZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKG5vb3ApO1xuICB9LCBbZGVjb2RlZFdlYnNpdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX1cbiAgICAgIHJpZ2h0Rm9vdGVyQnV0dG9uPXtmb290ZXJCdG59XG4gICAgICBzaG93QmFja0J1dHRvbj17ZmFsc2V9XG4gICAgICBzdWJIZWFkZXJQYWRkaW5nVmVydGljYWw9e3RydWV9XG4gICAgICB0aXRsZT17dCgnUGhpc2hpbmcgZGV0ZWN0aW9uJyl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e0NOKCdfX3VwcGVyLWJsb2NrLXdyYXBwZXInKX0gLz5cbiAgICAgIDxQYWdlSWNvblxuICAgICAgICBjb2xvcj17dG9rZW4uY29sb3JFcnJvcn1cbiAgICAgICAgaWNvblByb3BzPXt7IHBob3NwaG9ySWNvbjogU2hpZWxkU2xhc2gsIHdlaWdodDogJ2ZpbGwnIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIGgzLXRleHQgdGV4dC1kYW5nZXInPnt0KCdQaGlzaGluZyBkZXRlY3Rpb24nKX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoNC10ZXh0IHRleHQtZGFuZ2VyIHdlYnNpdGUtdXJsJz57ZGVjb2RlZFdlYnNpdGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGhpc2hpbmctZGV0ZWN0aW9uLW1lc3NhZ2UnPlxuICAgICAgICA8c3Bhbj57dCgnVGhpcyBkb21haW4gaGFzIGJlZW4gcmVwb3J0ZWQgYXMgYSBrbm93biBwaGlzaGluZyBzaXRlIG9uIGEgY29tbXVuaXR5IG1haW50YWluZWQgbGlzdDonKX0mbmJzcDs8L3NwYW4+XG4gICAgICAgIDxUeXBvZ3JhcGh5LkxpbmtcbiAgICAgICAgICBocmVmPSdodHRwczovL3BvbGthZG90LmpzLm9yZy9waGlzaGluZy8jJ1xuICAgICAgICAgIHNpemU9J2xnJ1xuICAgICAgICA+XG4gICAgICAgICAge3QoJ3ZpZXcgZnVsbCBsaXN0Jyl9XG4gICAgICAgIDwvVHlwb2dyYXBoeS5MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0ndHJ1c3Qtc2l0ZSdcbiAgICAgICAgb25DbGljaz17b25UcnVzdFNpdGV9XG4gICAgICA+XG4gICAgICAgIHt0KCdJIHRydXN0IHRoaXMgc2l0ZScpfVxuICAgICAgPC9kaXY+XG4gICAgICA8QmFja2dyb3VuZEV4cGFuZFZpZXcgLz5cbiAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgKTtcbn1cblxuY29uc3QgUGhpc2hpbmdEZXRlY3RlZCA9IHN0eWxlZChfUGhpc2hpbmdEZXRlY3RlZCk8UHJvcHM+KCh7IHRoZW1lIH0pID0+IHtcbiAgY29uc3QgeyBleHRlbmRUb2tlbiwgdG9rZW4gfSA9IHRoZW1lIGFzIFRoZW1lO1xuXG4gIHJldHVybiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3Rva2VuLmNvbG9yQmdJbnB1dH1gLFxuXG4gICAgJy5hbnQtc3ctc2NyZWVuLWxheW91dC1ib2R5Jzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmdUb3A6IDQ4XG4gICAgfSxcblxuICAgICcuYW50LXN3LXN1Yi1oZWFkZXItdGl0bGUtY29udGVudCc6IHtcbiAgICAgIHpJbmRleDogMVxuICAgIH0sXG5cbiAgICAnLnRpdGxlJzoge1xuICAgICAgcGFkZGluZ1RvcDogMTYsXG4gICAgICBwYWRkaW5nQm90dG9tOiAxNlxuICAgIH0sXG5cbiAgICAnLnBoaXNoaW5nLWRldGVjdGlvbi1tZXNzYWdlJzoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDQwLFxuICAgICAgcGFkZGluZ1JpZ2h0OiA0MCxcbiAgICAgIHBhZGRpbmdUb3A6IDE2LFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUxHLFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodExHLFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MyxcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luXG4gICAgfSxcblxuICAgICcudHJ1c3Qtc2l0ZSc6IHtcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0NSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLl9fdXBwZXItYmxvY2std3JhcHBlcic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgaGVpZ2h0OiAxODAsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHRyYW5zYWN0aW9uOiAnMC4xcyBoZWlnaHQnLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBleHRlbmRUb2tlbi50b2tlbnNTY3JlZW5EYW5nZXJCYWNrZ3JvdW5kQ29sb3JcbiAgICB9LFxuXG4gICAgJy53ZWJzaXRlLXVybCc6IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nTGVmdDogdG9rZW4ucGFkZGluZ1hMLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0b2tlbi5wYWRkaW5nWEwsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay1hbGwnXG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQaGlzaGluZ0RldGVjdGVkO1xuIl0sIm5hbWVzIjpbIkJhY2tncm91bmRFeHBhbmRWaWV3IiwiTGF5b3V0IiwidXNlRGVmYXVsdE5hdmlnYXRlIiwidXNlVHJhbnNsYXRpb24iLCJwYXNzUGhpc2hpbmdQYWdlIiwibm9vcCIsIkljb24iLCJQYWdlSWNvbiIsIlR5cG9ncmFwaHkiLCJDTiIsIlNoaWVsZFNsYXNoIiwiWENpcmNsZSIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VQYXJhbXMiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsIl9QaGlzaGluZ0RldGVjdGVkIiwiY2xhc3NOYW1lIiwidCIsImdvSG9tZSIsInRva2VuIiwid2Vic2l0ZSIsImRlY29kZWRXZWJzaXRlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZm9vdGVyQnRuIiwiY2hpbGRyZW4iLCJpY29uIiwib25DbGljayIsIm9uVHJ1c3RTaXRlIiwidGhlbiIsImxvY2F0aW9uIiwicmVwbGFjZSIsImNhdGNoIiwiY29sb3JFcnJvciIsInBob3NwaG9ySWNvbiIsIndlaWdodCIsIlBoaXNoaW5nRGV0ZWN0ZWQiLCJ0aGVtZSIsImV4dGVuZFRva2VuIiwicG9zaXRpb24iLCJib3JkZXIiLCJjb2xvckJnSW5wdXQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nVG9wIiwiekluZGV4IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250U2l6ZUxHIiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRMRyIsImNvbG9yIiwiY29sb3JUZXh0TGlnaHQzIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwiZm9udFNpemVIZWFkaW5nNiIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImNvbG9yVGV4dExpZ2h0NSIsImN1cnNvciIsImNvbG9yVGV4dExpZ2h0MiIsImhlaWdodCIsInRvcCIsImxlZnQiLCJyaWdodCIsInRyYW5zYWN0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwidG9rZW5zU2NyZWVuRGFuZ2VyQmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1hMIiwid29yZEJyZWFrIl0sInNvdXJjZVJvb3QiOiIifQ==