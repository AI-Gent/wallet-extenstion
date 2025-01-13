"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_CreateDone_tsx"],{

/***/ "../extension-koni-ui/src/Popup/CreateDone.tsx":
/*!*****************************************************!*\
  !*** ../extension-koni-ui/src/Popup/CreateDone.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/X.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0











const Component = props => {
  const {
    className
  } = props;
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.Layout.WithSubHeaderOnly, {
    rightFooterButton: {
      children: t('Go to home'),
      onClick: goHome,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_7__["default"],
        weight: 'fill'
      })
    },
    showBackButton: true,
    subHeaderLeft: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_8__["default"],
      size: "md"
    }),
    title: t('Successful'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "page-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
          color: "var(--page-icon-color)",
          iconProps: {
            weight: 'fill',
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"]
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "title",
        children: t('All done!')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "description",
        children: t('Follow along with product updates or reach out if you have any questions.')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.SocialButtonGroup, {})]
    })
  });
};
const CreateDone = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(Component).withConfig({
  displayName: "CreateDone",
  componentId: "sc-84srrr-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    textAlign: 'center',
    '.page-icon': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: token.controlHeightLG,
      marginBottom: token.margin,
      '--page-icon-color': token.colorSecondary
    },
    '.title': {
      marginTop: token.margin,
      marginBottom: token.margin,
      fontWeight: token.fontWeightStrong,
      fontSize: token.fontSizeHeading3,
      lineHeight: token.lineHeightHeading3,
      color: token.colorTextBase
    },
    '.description': {
      padding: `0 ${token.controlHeightLG - token.padding}px`,
      marginTop: token.margin,
      marginBottom: token.margin * 2,
      fontSize: token.fontSizeHeading5,
      lineHeight: token.lineHeightHeading5,
      color: token.colorTextDescription,
      textAlign: 'center'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateDone);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0NyZWF0ZURvbmVfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRThGO0FBRXpDO0FBQ3pCO0FBQ3NDO0FBQ3hDO0FBQ3FCO0FBQ1I7QUFFbUI7QUFBQTtBQUFBO0FBSTFELE1BQU1ZLFNBQTBCLEdBQUlDLEtBQVksSUFBSztFQUNuRCxNQUFNO0lBQUVDO0VBQVUsQ0FBQyxHQUFHRCxLQUFLO0VBRTNCLE1BQU07SUFBRUU7RUFBTyxDQUFDLEdBQUdmLHdHQUFrQixFQUFFO0VBRXZDLE1BQU07SUFBRWdCO0VBQUUsQ0FBQyxHQUFHUiw2REFBYyxFQUFFO0VBRTlCLG9CQUNFLHVEQUFDLGlFQUF3QjtJQUN2QixpQkFBaUIsRUFBRTtNQUNqQlMsUUFBUSxFQUFFRCxDQUFDLENBQUMsWUFBWSxDQUFDO01BQ3pCRSxPQUFPLEVBQUVILE1BQU07TUFDZkksSUFBSSxlQUFFLHVEQUFDLDJEQUFJO1FBQ1QsWUFBWSxFQUFFZixzREFBaUI7UUFDL0IsTUFBTSxFQUFFO01BQU87SUFFbkIsQ0FBRTtJQUNGLGNBQWMsRUFBRSxJQUFLO0lBQ3JCLGFBQWEsZUFDWCx1REFBQywyREFBSTtNQUNILFlBQVksRUFBRUUsc0RBQUU7TUFDaEIsSUFBSSxFQUFDO0lBQUksRUFFWDtJQUNGLEtBQUssRUFBRVUsQ0FBQyxDQUFDLFlBQVksQ0FBRTtJQUFBLHVCQUV2QjtNQUFLLFNBQVMsRUFBRWIsaURBQUUsQ0FBQ1csU0FBUyxDQUFFO01BQUEsd0JBQzVCO1FBQUssU0FBUyxFQUFDLFdBQVc7UUFBQSx1QkFDeEIsdURBQUMsMkRBQVE7VUFDUCxLQUFLLEVBQUMsd0JBQXdCO1VBQzlCLFNBQVMsRUFBRTtZQUNUTSxNQUFNLEVBQUUsTUFBTTtZQUNkQyxZQUFZLEVBQUVoQix1REFBV0E7VUFDM0I7UUFBRTtNQUNGLEVBQ0UsZUFDTjtRQUFLLFNBQVMsRUFBQyxPQUFPO1FBQUEsVUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSxTQUFTLHNFQUFtQjtBQUM1Qjs7QUFFQSxvQ0FBb0MsaURBQVU7QUFDOUMsU0FBUywwREFBbUIsQ0FBQyw0REFBUTtBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9DcmVhdGVEb25lLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9waG9zcGhvci1yZWFjdC9kaXN0L2ljb25zL0Fycm93Q2lyY2xlUmlnaHQuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgdXNlRGVmYXVsdE5hdmlnYXRlIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZURlZmF1bHROYXZpZ2F0ZSc7XG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBJY29uLCBQYWdlSWNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQXJyb3dDaXJjbGVSaWdodCwgQ2hlY2tDaXJjbGUsIFggfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBMYXlvdXQsIFNvY2lhbEJ1dHRvbkdyb3VwIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgZ29Ib21lIH0gPSB1c2VEZWZhdWx0TmF2aWdhdGUoKTtcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICBjaGlsZHJlbjogdCgnR28gdG8gaG9tZScpLFxuICAgICAgICBvbkNsaWNrOiBnb0hvbWUsXG4gICAgICAgIGljb246IDxJY29uXG4gICAgICAgICAgcGhvc3Bob3JJY29uPXtBcnJvd0NpcmNsZVJpZ2h0fVxuICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAvPlxuICAgICAgfX1cbiAgICAgIHNob3dCYWNrQnV0dG9uPXt0cnVlfVxuICAgICAgc3ViSGVhZGVyTGVmdD17KFxuICAgICAgICA8SWNvblxuICAgICAgICAgIHBob3NwaG9ySWNvbj17WH1cbiAgICAgICAgICBzaXplPSdtZCdcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB0aXRsZT17dCgnU3VjY2Vzc2Z1bCcpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtaWNvbic+XG4gICAgICAgICAgPFBhZ2VJY29uXG4gICAgICAgICAgICBjb2xvcj0ndmFyKC0tcGFnZS1pY29uLWNvbG9yKSdcbiAgICAgICAgICAgIGljb25Qcm9wcz17e1xuICAgICAgICAgICAgICB3ZWlnaHQ6ICdmaWxsJyxcbiAgICAgICAgICAgICAgcGhvc3Bob3JJY29uOiBDaGVja0NpcmNsZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAgICB7dCgnQWxsIGRvbmUhJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICAgIHt0KCdGb2xsb3cgYWxvbmcgd2l0aCBwcm9kdWN0IHVwZGF0ZXMgb3IgcmVhY2ggb3V0IGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMuJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U29jaWFsQnV0dG9uR3JvdXAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICApO1xufTtcblxuY29uc3QgQ3JlYXRlRG9uZSA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcblxuICAgICcucGFnZS1pY29uJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5jb250cm9sSGVpZ2h0TEcsXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbixcbiAgICAgICctLXBhZ2UtaWNvbi1jb2xvcic6IHRva2VuLmNvbG9yU2Vjb25kYXJ5XG4gICAgfSxcblxuICAgICcudGl0bGUnOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpbixcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luLFxuICAgICAgZm9udFdlaWdodDogdG9rZW4uZm9udFdlaWdodFN0cm9uZyxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmczLFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmczLFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dEJhc2VcbiAgICB9LFxuXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4uY29udHJvbEhlaWdodExHIC0gdG9rZW4ucGFkZGluZ31weGAsXG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpbixcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luICogMixcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc1LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc1LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVEb25lO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJQYXRoRm9yV2VpZ2h0IH0gZnJvbSAnLi4vbGliL2luZGV4LmVzbS5qcyc7XG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vbGliL0ljb25CYXNlLmVzbS5qcyc7XG5cbi8qIEdFTkVSQVRFRCBGSUxFICovXG52YXIgcGF0aHNCeVdlaWdodCA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImJvbGRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZHVvdG9uZVwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBvcGFjaXR5OiBcIjAuMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjIsMTA0LjIsMCwwLDAsMTI4LDI0Wm00Ny40LDEwNy4xYTguNyw4LjcsMCwwLDEtMS44LDIuNmwtMzMuOSwzMy45YTcuNiw3LjYsMCwwLDEtNS42LDIuMyw3LjgsNy44LDAsMCwxLTUuNy0yLjMsOCw4LDAsMCwxLDAtMTEuM0wxNDguNywxMzZIODhhOCw4LDAsMCwxLDAtMTZoNjAuN0wxMjguNCw5OS43YTgsOCwwLDAsMSwxMS4zLTExLjNsMzMuOSwzMy45YTguNyw4LjcsMCwwLDEsMS44LDIuNkE4LjMsOC4zLDAsMCwxLDE3NS40LDEzMS4xWlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEzNC4xIDE2MS45IDE2OCAxMjggMTM0LjEgOTQuMVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInJlZ3VsYXJcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5cbnZhciByZW5kZXJQYXRoID0gZnVuY3Rpb24gcmVuZGVyUGF0aCh3ZWlnaHQsIGNvbG9yKSB7XG4gIHJldHVybiByZW5kZXJQYXRoRm9yV2VpZ2h0KHdlaWdodCwgY29sb3IsIHBhdGhzQnlXZWlnaHQpO1xufTtcblxudmFyIEFycm93Q2lyY2xlUmlnaHQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuQXJyb3dDaXJjbGVSaWdodC5kaXNwbGF5TmFtZSA9IFwiQXJyb3dDaXJjbGVSaWdodFwiO1xuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0NpcmNsZVJpZ2h0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyb3dDaXJjbGVSaWdodC5lc20uanMubWFwXG4iXSwibmFtZXMiOlsidXNlRGVmYXVsdE5hdmlnYXRlIiwiSWNvbiIsIlBhZ2VJY29uIiwiQ04iLCJBcnJvd0NpcmNsZVJpZ2h0IiwiQ2hlY2tDaXJjbGUiLCJYIiwiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsInN0eWxlZCIsIkxheW91dCIsIlNvY2lhbEJ1dHRvbkdyb3VwIiwiQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJnb0hvbWUiLCJ0IiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiaWNvbiIsIndlaWdodCIsInBob3NwaG9ySWNvbiIsIkNyZWF0ZURvbmUiLCJ0aGVtZSIsInRva2VuIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiY29udHJvbEhlaWdodExHIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwiY29sb3JTZWNvbmRhcnkiLCJmb250V2VpZ2h0IiwiZm9udFdlaWdodFN0cm9uZyIsImZvbnRTaXplIiwiZm9udFNpemVIZWFkaW5nMyIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzMiLCJjb2xvciIsImNvbG9yVGV4dEJhc2UiLCJwYWRkaW5nIiwiZm9udFNpemVIZWFkaW5nNSIsImxpbmVIZWlnaHRIZWFkaW5nNSIsImNvbG9yVGV4dERlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==