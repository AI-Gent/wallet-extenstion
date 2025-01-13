"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_TransactionDone_tsx"],{

/***/ "../extension-koni-ui/src/Popup/TransactionDone.tsx":
/*!**********************************************************!*\
  !*** ../extension-koni-ui/src/Popup/TransactionDone.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0












const Component = props => {
  const {
    className
  } = props;
  const {
    chain,
    transactionId
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useParams)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useDefaultNavigate)();
  const viewInHistory = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (chain && transactionId) {
      navigate(`/home/history/${chain}/${transactionId}`);
    } else {
      navigate('/home/history');
    }
  }, [chain, transactionId, navigate]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      leftFooterButton: {
        block: true,
        onClick: viewInHistory,
        children: t('View transaction')
      },
      rightFooterButton: {
        block: true,
        onClick: goHome,
        children: t('Back to home')
      },
      subHeaderLeft: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
      title: t('Successful'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "page-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
            color: "var(--page-icon-color)",
            iconProps: {
              weight: 'fill',
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_7__["default"]
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "title",
          children: t('All done!')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "description",
          children: t('Your request has been sent. You can track its progress in History tab.')
        })]
      })
    })
  });
};
const TransactionDone = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(Component).withConfig({
  displayName: "TransactionDone",
  componentId: "sc-15acnla-0"
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
    },
    '.and-more': {
      fontSize: token.fontSizeHeading5,
      lineHeight: token.lineHeightHeading5,
      color: token.colorTextDescription,
      '.highlight': {
        color: token.colorTextBase
      }
    },
    '.ant-sw-screen-layout-footer-button-container': {
      flexDirection: 'column',
      padding: `0 ${token.padding}px`,
      gap: token.size,
      '.ant-btn': {
        margin: 0
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionDone);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1RyYW5zYWN0aW9uRG9uZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUV5RjtBQUNqQjtBQUV6QjtBQUNGO0FBQ0Y7QUFDSTtBQUNOO0FBQ007QUFDUjtBQUFBO0FBQUE7QUFJdkMsTUFBTVksU0FBMEIsR0FBSUMsS0FBWSxJQUFLO0VBQ25ELE1BQU07SUFBRUM7RUFBVSxDQUFDLEdBQUdELEtBQUs7RUFDM0IsTUFBTTtJQUFFRSxLQUFLO0lBQUVDO0VBQWMsQ0FBQyxHQUFHUCx1REFBUyxFQUEwQztFQUVwRixNQUFNO0lBQUVRO0VBQUUsQ0FBQyxHQUFHVCw2REFBYyxFQUFFO0VBQzlCLE1BQU1VLFFBQVEsR0FBR1IseURBQVcsRUFBRTtFQUM5QixNQUFNO0lBQUVTO0VBQU8sQ0FBQyxHQUFHaEIsc0ZBQWtCLEVBQUU7RUFFdkMsTUFBTWlCLGFBQWEsR0FBR2Isa0RBQVcsQ0FDL0IsTUFBTTtJQUNKLElBQUlRLEtBQUssSUFBSUMsYUFBYSxFQUFFO01BQzFCRSxRQUFRLENBQUUsaUJBQWdCSCxLQUFNLElBQUdDLGFBQWMsRUFBQyxDQUFDO0lBQ3JELENBQUMsTUFBTTtNQUNMRSxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQzNCO0VBQ0YsQ0FBQyxFQUNELENBQUNILEtBQUssRUFBRUMsYUFBYSxFQUFFRSxRQUFRLENBQUMsQ0FDakM7RUFFRCxvQkFDRSx1REFBQyxnRkFBVztJQUFDLFNBQVMsRUFBRUosU0FBVTtJQUFBLHVCQUNoQyx1REFBQyw2RkFBd0I7TUFDdkIsZ0JBQWdCLEVBQUU7UUFDaEJPLEtBQUssRUFBRSxJQUFJO1FBQ1hDLE9BQU8sRUFBRUYsYUFBYTtRQUN0QkcsUUFBUSxFQUFFTixDQUFDLENBQUMsa0JBQWtCO01BQ2hDLENBQUU7TUFDRixpQkFBaUIsRUFBRTtRQUNqQkksS0FBSyxFQUFFLElBQUk7UUFDWEMsT0FBTyxFQUFFSCxNQUFNO1FBQ2ZJLFFBQVEsRUFBRU4sQ0FBQyxDQUFDLGNBQWM7TUFDNUIsQ0FBRTtNQUNGLGFBQWEsZUFBRSx1REFBQyw4RUFBUyxLQUFJO01BQzdCLEtBQUssRUFBRUEsQ0FBQyxDQUFDLFlBQVksQ0FBRTtNQUFBLHVCQUV2QjtRQUFLLFNBQVMsRUFBQyxXQUFXO1FBQUEsd0JBQ3hCO1VBQUssU0FBUyxFQUFDLFdBQVc7VUFBQSx1QkFDeEIsdURBQUMsMkRBQVE7WUFDUCxLQUFLLEVBQUMsd0JBQXdCO1lBQzlCLFNBQVMsRUFBRTtjQUNUTyxNQUFNLEVBQUUsTUFBTTtjQUNkQyxZQUFZLEVBQUVwQixzREFBV0E7WUFDM0I7VUFBRTtRQUNGLEVBQ0UsZUFDTjtVQUFLLFNBQVMsRUFBQyxPQUFPO1VBQUEsVUFDbkJZLENBQUMsQ0FBQyxXQUFXO1FBQUMsRUFDWCxlQUNOO1VBQUssU0FBUyxFQUFDLGFBQWE7VUFBQSxVQUN6QkEsQ0FBQyxDQUFDLHdFQUF3RTtRQUFDLEVBQ3hFO01BQUE7SUFDRjtFQUNtQixFQUNmO0FBRWxCLENBQUM7QUFFRCxNQUFNUyxlQUFlLEdBQUdmLDZEQUFNLENBQUNDLFNBQVMsQ0FBQztFQUFBO0VBQUE7QUFBQSxHQUFRLENBQUM7RUFBRWUsS0FBSyxFQUFFO0lBQUVDO0VBQU07QUFBUyxDQUFDLEtBQUs7RUFDaEYsT0FBTztJQUNMQyxTQUFTLEVBQUUsUUFBUTtJQUVuQixZQUFZLEVBQUU7TUFDWkMsT0FBTyxFQUFFLE1BQU07TUFDZkMsY0FBYyxFQUFFLFFBQVE7TUFDeEJDLFNBQVMsRUFBRUosS0FBSyxDQUFDSyxlQUFlO01BQ2hDQyxZQUFZLEVBQUVOLEtBQUssQ0FBQ08sTUFBTTtNQUMxQixtQkFBbUIsRUFBRVAsS0FBSyxDQUFDUTtJQUM3QixDQUFDO0lBRUQsUUFBUSxFQUFFO01BQ1JKLFNBQVMsRUFBRUosS0FBSyxDQUFDTyxNQUFNO01BQ3ZCRCxZQUFZLEVBQUVOLEtBQUssQ0FBQ08sTUFBTTtNQUMxQkUsVUFBVSxFQUFFVCxLQUFLLENBQUNVLGdCQUFnQjtNQUNsQ0MsUUFBUSxFQUFFWCxLQUFLLENBQUNZLGdCQUFnQjtNQUNoQ0MsVUFBVSxFQUFFYixLQUFLLENBQUNjLGtCQUFrQjtNQUNwQ0MsS0FBSyxFQUFFZixLQUFLLENBQUNnQjtJQUNmLENBQUM7SUFFRCxjQUFjLEVBQUU7TUFDZEMsT0FBTyxFQUFHLEtBQUlqQixLQUFLLENBQUNLLGVBQWUsR0FBR0wsS0FBSyxDQUFDaUIsT0FBUSxJQUFHO01BQ3ZEYixTQUFTLEVBQUVKLEtBQUssQ0FBQ08sTUFBTTtNQUN2QkQsWUFBWSxFQUFFTixLQUFLLENBQUNPLE1BQU0sR0FBRyxDQUFDO01BQzlCSSxRQUFRLEVBQUVYLEtBQUssQ0FBQ2tCLGdCQUFnQjtNQUNoQ0wsVUFBVSxFQUFFYixLQUFLLENBQUNtQixrQkFBa0I7TUFDcENKLEtBQUssRUFBRWYsS0FBSyxDQUFDb0Isb0JBQW9CO01BQ2pDbkIsU0FBUyxFQUFFO0lBQ2IsQ0FBQztJQUVELFdBQVcsRUFBRTtNQUNYVSxRQUFRLEVBQUVYLEtBQUssQ0FBQ2tCLGdCQUFnQjtNQUNoQ0wsVUFBVSxFQUFFYixLQUFLLENBQUNtQixrQkFBa0I7TUFDcENKLEtBQUssRUFBRWYsS0FBSyxDQUFDb0Isb0JBQW9CO01BRWpDLFlBQVksRUFBRTtRQUNaTCxLQUFLLEVBQUVmLEtBQUssQ0FBQ2dCO01BQ2Y7SUFDRixDQUFDO0lBRUQsK0NBQStDLEVBQUU7TUFDL0NLLGFBQWEsRUFBRSxRQUFRO01BQ3ZCSixPQUFPLEVBQUcsS0FBSWpCLEtBQUssQ0FBQ2lCLE9BQVEsSUFBRztNQUMvQkssR0FBRyxFQUFFdEIsS0FBSyxDQUFDdUIsSUFBSTtNQUVmLFVBQVUsRUFBRTtRQUNWaEIsTUFBTSxFQUFFO01BQ1Y7SUFDRjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZVQsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1RyYW5zYWN0aW9uRG9uZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IENsb3NlSWNvbiwgTGF5b3V0LCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VEZWZhdWx0TmF2aWdhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IFBhZ2VJY29uIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgeyBDaGVja0NpcmNsZSB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcbiAgY29uc3QgeyBjaGFpbiwgdHJhbnNhY3Rpb25JZCB9ID0gdXNlUGFyYW1zPHtjaGFpbjogc3RyaW5nLCB0cmFuc2FjdGlvbklkOiBzdHJpbmd9PigpO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG5cbiAgY29uc3Qgdmlld0luSGlzdG9yeSA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IHtcbiAgICAgIGlmIChjaGFpbiAmJiB0cmFuc2FjdGlvbklkKSB7XG4gICAgICAgIG5hdmlnYXRlKGAvaG9tZS9oaXN0b3J5LyR7Y2hhaW59LyR7dHJhbnNhY3Rpb25JZH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdmlnYXRlKCcvaG9tZS9oaXN0b3J5Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hhaW4sIHRyYW5zYWN0aW9uSWQsIG5hdmlnYXRlXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgICAgbGVmdEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGJsb2NrOiB0cnVlLFxuICAgICAgICAgIG9uQ2xpY2s6IHZpZXdJbkhpc3RvcnksXG4gICAgICAgICAgY2hpbGRyZW46IHQoJ1ZpZXcgdHJhbnNhY3Rpb24nKVxuICAgICAgICB9fVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGJsb2NrOiB0cnVlLFxuICAgICAgICAgIG9uQ2xpY2s6IGdvSG9tZSxcbiAgICAgICAgICBjaGlsZHJlbjogdCgnQmFjayB0byBob21lJylcbiAgICAgICAgfX1cbiAgICAgICAgc3ViSGVhZGVyTGVmdD17PENsb3NlSWNvbiAvPn1cbiAgICAgICAgdGl0bGU9e3QoJ1N1Y2Nlc3NmdWwnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtaWNvbic+XG4gICAgICAgICAgICA8UGFnZUljb25cbiAgICAgICAgICAgICAgY29sb3I9J3ZhcigtLXBhZ2UtaWNvbi1jb2xvciknXG4gICAgICAgICAgICAgIGljb25Qcm9wcz17e1xuICAgICAgICAgICAgICAgIHdlaWdodDogJ2ZpbGwnLFxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbjogQ2hlY2tDaXJjbGVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAgICAgIHt0KCdBbGwgZG9uZSEnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAge3QoJ1lvdXIgcmVxdWVzdCBoYXMgYmVlbiBzZW50LiBZb3UgY2FuIHRyYWNrIGl0cyBwcm9ncmVzcyBpbiBIaXN0b3J5IHRhYi4nKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgVHJhbnNhY3Rpb25Eb25lID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuXG4gICAgJy5wYWdlLWljb24nOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLmNvbnRyb2xIZWlnaHRMRyxcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luLFxuICAgICAgJy0tcGFnZS1pY29uLWNvbG9yJzogdG9rZW4uY29sb3JTZWNvbmRhcnlcbiAgICB9LFxuXG4gICAgJy50aXRsZSc6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4sXG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5mb250V2VpZ2h0U3Ryb25nLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzMsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzMsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0QmFzZVxuICAgIH0sXG5cbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5jb250cm9sSGVpZ2h0TEcgLSB0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4gKiAyLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzUsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzUsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcuYW5kLW1vcmUnOiB7XG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNSxcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNSxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcblxuICAgICAgJy5oaWdobGlnaHQnOiB7XG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRCYXNlXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuYW50LXN3LXNjcmVlbi1sYXlvdXQtZm9vdGVyLWJ1dHRvbi1jb250YWluZXInOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICBnYXA6IHRva2VuLnNpemUsXG5cbiAgICAgICcuYW50LWJ0bic6IHtcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uRG9uZTtcbiJdLCJuYW1lcyI6WyJDbG9zZUljb24iLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsInVzZURlZmF1bHROYXZpZ2F0ZSIsIlBhZ2VJY29uIiwiQ2hlY2tDaXJjbGUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VQYXJhbXMiLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hhaW4iLCJ0cmFuc2FjdGlvbklkIiwidCIsIm5hdmlnYXRlIiwiZ29Ib21lIiwidmlld0luSGlzdG9yeSIsImJsb2NrIiwib25DbGljayIsImNoaWxkcmVuIiwid2VpZ2h0IiwicGhvc3Bob3JJY29uIiwiVHJhbnNhY3Rpb25Eb25lIiwidGhlbWUiLCJ0b2tlbiIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImNvbnRyb2xIZWlnaHRMRyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsImNvbG9yU2Vjb25kYXJ5IiwiZm9udFdlaWdodCIsImZvbnRXZWlnaHRTdHJvbmciLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzMiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmczIiwiY29sb3IiLCJjb2xvclRleHRCYXNlIiwicGFkZGluZyIsImZvbnRTaXplSGVhZGluZzUiLCJsaW5lSGVpZ2h0SGVhZGluZzUiLCJjb2xvclRleHREZXNjcmlwdGlvbiIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==