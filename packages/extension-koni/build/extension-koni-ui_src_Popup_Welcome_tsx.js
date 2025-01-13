"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Welcome_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Welcome.tsx":
/*!**************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Welcome.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlusCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FileArrowDown.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Swatches.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0












function Component({
  className
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__.ModalContext);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const setSelectedAccountTypes = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetSelectedAccountTypes)(false);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => [{
    description: t('Create a new account with AIGENT Wallet'),
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_8__["default"],
    id: _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.CREATE_ACCOUNT_MODAL,
    schema: 'primary',
    title: t('Create a new account')
  }, {
    description: t('Import an existing account'),
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_9__["default"],
    id: _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.IMPORT_ACCOUNT_MODAL,
    schema: 'secondary',
    title: t('Import an account')
  }, {
    description: t('Attach an account without private key'),
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
    id: _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.ATTACH_ACCOUNT_MODAL,
    schema: 'secondary',
    title: t('Attach an account')
  }], [t]);
  const openModal = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(id => {
    return () => {
      if (id === _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.CREATE_ACCOUNT_MODAL) {
        setSelectedAccountTypes(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ACCOUNT_TYPES);
        navigate('/accounts/new-seed-phrase');
      } else {
        inactiveModal(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.SELECT_ACCOUNT_MODAL);
        activeModal(id);
      }
    };
  }, [activeModal, inactiveModal, navigate, setSelectedAccountTypes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "bg-image"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "body-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "logo-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
          src: './images/subwallet/welcome-logo.png',
          width: 139
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wallet-title",
        children: t('AIGENT Wallet')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "sub-title",
        children: t('Choose how you\'d like to set up your wallet')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "buttons-container",
        children: items.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
          block: true,
          className: "welcome-import-button",
          contentAlign: "left",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: "welcome-import-icon",
            phosphorIcon: item.icon,
            size: "md",
            weight: "fill"
          }),
          onClick: openModal(item.id),
          schema: item.schema,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "welcome-import-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "welcome-import-button-title",
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "welcome-import-button-description",
              children: item.description
            })]
          })
        }, item.id))
      })]
    })]
  });
}
const Welcome = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(Component).withConfig({
  displayName: "Welcome",
  componentId: "sc-1dl7z8u-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    position: 'relative',
    '.bg-image': {
      backgroundImage: 'url("./images/subwallet/welcome-background.png")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: 'contain',
      height: '100%',
      position: 'absolute',
      width: '100%',
      left: 0,
      top: 0
    },
    '.body-container': {
      padding: `${token.sizeLG * 3}px ${token.padding}px ${token.sizeXL}px`,
      textAlign: 'center',
      opacity: 0.999,
      // Hot fix show wrong opacity in browser
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeLG,
      '.logo-container': {
        color: token.colorTextBase
      },
      '.title': {
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeHeading1,
        lineHeight: token.lineHeightHeading1,
        color: token.colorTextBase
      },
      '.sub-title': {
        paddingLeft: token.padding - 1,
        paddingRight: token.padding - 1,
        fontSize: token.fontSizeHeading5,
        lineHeight: token.lineHeightHeading5,
        color: token.colorTextLight3,
        flex: 1
      },
      '.wallet-title': {
        fontSize: '30px',
        color: 'white',
        fontWeight: '700'
      }
    },
    '.buttons-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeXS
    },
    '.welcome-import-button': {
      height: 'auto',
      '.welcome-import-icon': {
        height: token.sizeLG,
        width: token.sizeLG,
        marginLeft: token.sizeMD - token.size
      },
      '.welcome-import-button-content': {
        display: 'flex',
        flexDirection: 'column',
        gap: token.sizeXXS,
        fontWeight: token.fontWeightStrong,
        padding: `${token.paddingSM - 1}px ${token.paddingLG}px`,
        textAlign: 'start',
        '.welcome-import-button-title': {
          fontSize: token.fontSizeHeading5,
          lineHeight: token.lineHeightHeading5,
          color: token.colorTextBase
        },
        '.welcome-import-button-description': {
          fontSize: token.fontSizeHeading6,
          lineHeight: token.lineHeightHeading6,
          color: token.colorTextLabel
        }
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1dlbGNvbWVfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWlFO0FBQ3NHO0FBQ3ZFO0FBRVg7QUFDekQ7QUFDeUM7QUFDTDtBQUNqQjtBQUNSO0FBQUE7QUFBQTtBQVl2QyxTQUFTc0IsU0FBUyxDQUFFO0VBQUVDO0FBQWlCLENBQUMsRUFBNkI7RUFDbkUsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR2pCLGtGQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFa0IsV0FBVztJQUFFQztFQUFjLENBQUMsR0FBR1IsaURBQVUsQ0FBQ1AsNkRBQVksQ0FBQztFQUMvRCxNQUFNZ0IsUUFBUSxHQUFHUCw2REFBVyxFQUFFO0VBQzlCLE1BQU1RLHVCQUF1QixHQUFHdEIsOEZBQTBCLENBQUMsS0FBSyxDQUFDO0VBRWpFLE1BQU11QixLQUFLLEdBQUdWLDhDQUFPLENBQUMsTUFBMkIsQ0FDL0M7SUFDRVcsV0FBVyxFQUFFTixDQUFDLENBQUMseUNBQXlDLENBQUM7SUFDekRPLElBQUksRUFBRWpCLHNEQUFVO0lBQ2hCa0IsRUFBRSxFQUFFOUIsd0ZBQW9CO0lBQ3hCK0IsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEtBQUssRUFBRVYsQ0FBQyxDQUFDLHNCQUFzQjtFQUNqQyxDQUFDLEVBQ0Q7SUFDRU0sV0FBVyxFQUFFTixDQUFDLENBQUMsNEJBQTRCLENBQUM7SUFDNUNPLElBQUksRUFBRWxCLHNEQUFhO0lBQ25CbUIsRUFBRSxFQUFFNUIsd0ZBQW9CO0lBQ3hCNkIsTUFBTSxFQUFFLFdBQVc7SUFDbkJDLEtBQUssRUFBRVYsQ0FBQyxDQUFDLG1CQUFtQjtFQUM5QixDQUFDLEVBQ0Q7SUFDRU0sV0FBVyxFQUFFTixDQUFDLENBQUMsdUNBQXVDLENBQUM7SUFDdkRPLElBQUksRUFBRWhCLHVEQUFRO0lBQ2RpQixFQUFFLEVBQUUvQix3RkFBb0I7SUFDeEJnQyxNQUFN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RWQsc0JBQXNCLEVBQUU7UUFDdEJBLE1BQU0sRUFBRU4sS0FBSyxDQUFDVyxNQUFNO1FBQ3BCSixLQUFLLEVBQUVQLEtBQUssQ0FBQ1csTUFBTTtRQUNuQnNCLFVBQVUsRUFBRWpDLEtBQUssQ0FBQ2tDLE1BQU0sR0FBR2xDLEtBQUssQ0FBQ21DO01BQ25DLENBQUM7TUFFRCxnQ0FBZ0MsRUFBRTtRQUNoQ3BCLE9BQU8sRUFBRSxNQUFNO1FBQ2ZDLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCQyxHQUFHLEVBQUVqQixLQUFLLENBQUNvQyxPQUFPO1FBQ2xCaEIsVUFBVSxFQUFFcEIsS0FBSyxDQUFDcUIsZ0JBQWdCO1FBQ2xDWCxPQUFPLEVBQUcsR0FBRVYsS0FBSyxDQUFDcUMsU0FBUyxHQUFHLENBQUUsTUFBS3JDLEtBQUssQ0FBQ3NDLFNBQVUsSUFBRztRQUN4RHpCLFNBQVMsRUFBRSxPQUFPO1FBRWxCLDhCQUE4QixFQUFFO1VBQzlCUyxRQUFRLEVBQUV0QixLQUFLLENBQUM0QixnQkFBZ0I7VUFDaENKLFVBQVUsRUFBRXhCLEtBQUssQ0FBQzZCLGtCQUFrQjtVQUNwQ1gsS0FBSyxFQUFFbEIsS0FBSyxDQUFDbUI7UUFDZixDQUFDO1FBRUQsb0NBQW9DLEVBQUU7VUFDcENHLFFBQVEsRUFBRXRCLEtBQUssQ0FBQ3VDLGdCQUFnQjtVQUNoQ2YsVUFBVSxFQUFFeEIsS0FBSyxDQUFDd0Msa0JBQWtCO1VBQ3BDdEIsS0FBSyxFQUFFbEIsS0FBSyxDQUFDeUM7UUFDZjtNQUNGO0lBQ0Y7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWUzQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvV2VsY29tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAcG9sa2Fkb3QvZXh0ZW5zaW9uLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IExheW91dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBVFRBQ0hfQUNDT1VOVF9NT0RBTCwgQ1JFQVRFX0FDQ09VTlRfTU9EQUwsIERFRkFVTFRfQUNDT1VOVF9UWVBFUywgSU1QT1JUX0FDQ09VTlRfTU9EQUwsIFNFTEVDVF9BQ0NPVU5UX01PREFMIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlU2V0U2VsZWN0ZWRBY2NvdW50VHlwZXMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBQaG9zcGhvckljb24sIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uUHJvcHMsIEljb24sIEltYWdlLCBNb2RhbENvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEZpbGVBcnJvd0Rvd24sIFBsdXNDaXJjbGUsIFN3YXRjaGVzIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuaW50ZXJmYWNlIFdlbGNvbWVCdXR0b25JdGVtIHtcbiAgaWQ6IHN0cmluZztcbiAgaWNvbjogUGhvc3Bob3JJY29uO1xuICBzY2hlbWE6IEJ1dHRvblByb3BzWydzY2hlbWEnXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50ICh7IGNsYXNzTmFtZSB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgYWN0aXZlTW9kYWwsIGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBzZXRTZWxlY3RlZEFjY291bnRUeXBlcyA9IHVzZVNldFNlbGVjdGVkQWNjb3VudFR5cGVzKGZhbHNlKTtcblxuICBjb25zdCBpdGVtcyA9IHVzZU1lbW8oKCk6IFdlbGNvbWVCdXR0b25JdGVtW10gPT4gW1xuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiB0KCdDcmVhdGUgYSBuZXcgYWNjb3VudCB3aXRoIEFJR0VOVCBXYWxsZXQnKSxcbiAgICAgIGljb246IFBsdXNDaXJjbGUsXG4gICAgICBpZDogQ1JFQVRFX0FDQ09VTlRfTU9EQUwsXG4gICAgICBzY2hlbWE6ICdwcmltYXJ5JyxcbiAgICAgIHRpdGxlOiB0KCdDcmVhdGUgYSBuZXcgYWNjb3VudCcpXG4gICAgfSxcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogdCgnSW1wb3J0IGFuIGV4aXN0aW5nIGFjY291bnQnKSxcbiAgICAgIGljb246IEZpbGVBcnJvd0Rvd24sXG4gICAgICBpZDogSU1QT1JUX0FDQ09VTlRfTU9EQUwsXG4gICAgICBzY2hlbWE6ICdzZWNvbmRhcnknLFxuICAgICAgdGl0bGU6IHQoJ0ltcG9ydCBhbiBhY2NvdW50JylcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiB0KCdBdHRhY2ggYW4gYWNjb3VudCB3aXRob3V0IHByaXZhdGUga2V5JyksXG4gICAgICBpY29uOiBTd2F0Y2hlcyxcbiAgICAgIGlkOiBBVFRBQ0hfQUNDT1VOVF9NT0RBTCxcbiAgICAgIHNjaGVtYTogJ3NlY29uZGFyeScsXG4gICAgICB0aXRsZTogdCgnQXR0YWNoIGFuIGFjY291bnQnKVxuICAgIH1cbiAgXSwgW3RdKTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSB1c2VDYWxsYmFjaygoaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoaWQgPT09IENSRUFURV9BQ0NPVU5UX01PREFMKSB7XG4gICAgICAgIHNldFNlbGVjdGVkQWNjb3VudFR5cGVzKERFRkFVTFRfQUNDT1VOVF9UWVBFUyk7XG4gICAgICAgIG5hdmlnYXRlKCcvYWNjb3VudHMvbmV3LXNlZWQtcGhyYXNlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmFjdGl2ZU1vZGFsKFNFTEVDVF9BQ0NPVU5UX01PREFMKTtcbiAgICAgICAgYWN0aXZlTW9kYWwoaWQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFthY3RpdmVNb2RhbCwgaW5hY3RpdmVNb2RhbCwgbmF2aWdhdGUsIHNldFNlbGVjdGVkQWNjb3VudFR5cGVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0LkJhc2VcbiAgICAgIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctaW1hZ2UnIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keS1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nby1jb250YWluZXInPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXsnLi9pbWFnZXMvc3Vid2FsbGV0L3dlbGNvbWUtbG9nby5wbmcnfVxuICAgICAgICAgICAgd2lkdGg9ezEzOX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dhbGxldC10aXRsZSc+XG4gICAgICAgICAge3QoJ0FJR0VOVCBXYWxsZXQnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWItdGl0bGUnPlxuICAgICAgICAgIHt0KCdDaG9vc2UgaG93IHlvdVxcJ2QgbGlrZSB0byBzZXQgdXAgeW91ciB3YWxsZXQnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zLWNvbnRhaW5lcic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBibG9jaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dlbGNvbWUtaW1wb3J0LWJ1dHRvbidcbiAgICAgICAgICAgICAgICBjb250ZW50QWxpZ249J2xlZnQnXG4gICAgICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3ZWxjb21lLWltcG9ydC1pY29uJ1xuICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nbWQnXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIHNjaGVtYT17aXRlbS5zY2hlbWF9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZS1pbXBvcnQtYnV0dG9uLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlbGNvbWUtaW1wb3J0LWJ1dHRvbi10aXRsZSc+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZS1pbXBvcnQtYnV0dG9uLWRlc2NyaXB0aW9uJz57aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dC5CYXNlPlxuICApO1xufVxuXG5jb25zdCBXZWxjb21lID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICcuYmctaW1hZ2UnOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIuL2ltYWdlcy9zdWJ3YWxsZXQvd2VsY29tZS1iYWNrZ3JvdW5kLnBuZ1wiKScsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ3RvcCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwXG4gICAgfSxcblxuICAgICcuYm9keS1jb250YWluZXInOiB7XG4gICAgICBwYWRkaW5nOiBgJHt0b2tlbi5zaXplTEcgKiAzfXB4ICR7dG9rZW4ucGFkZGluZ31weCAke3Rva2VuLnNpemVYTH1weGAsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgb3BhY2l0eTogMC45OTksIC8vIEhvdCBmaXggc2hvdyB3cm9uZyBvcGFjaXR5IGluIGJyb3dzZXJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRva2VuLnNpemVMRyxcblxuICAgICAgJy5sb2dvLWNvbnRhaW5lcic6IHtcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dEJhc2VcbiAgICAgIH0sXG5cbiAgICAgICcudGl0bGUnOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmZvbnRXZWlnaHRTdHJvbmcsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmcxLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzEsXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRCYXNlXG4gICAgICB9LFxuXG4gICAgICAnLnN1Yi10aXRsZSc6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRva2VuLnBhZGRpbmcgLSAxLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmcgLSAxLFxuICAgICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNSxcbiAgICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc1LFxuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQzLFxuICAgICAgICBmbGV4OiAxXG4gICAgICB9LFxuICAgICAgJy53YWxsZXQtdGl0bGUnOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMzBweCcsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBmb250V2VpZ2h0OiAnNzAwJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLmJ1dHRvbnMtY29udGFpbmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRva2VuLnNpemVYU1xuICAgIH0sXG5cbiAgICAnLndlbGNvbWUtaW1wb3J0LWJ1dHRvbic6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuXG4gICAgICAnLndlbGNvbWUtaW1wb3J0LWljb24nOiB7XG4gICAgICAgIGhlaWdodDogdG9rZW4uc2l6ZUxHLFxuICAgICAgICB3aWR0aDogdG9rZW4uc2l6ZUxHLFxuICAgICAgICBtYXJnaW5MZWZ0OiB0b2tlbi5zaXplTUQgLSB0b2tlbi5zaXplXG4gICAgICB9LFxuXG4gICAgICAnLndlbGNvbWUtaW1wb3J0LWJ1dHRvbi1jb250ZW50Jzoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBnYXA6IHRva2VuLnNpemVYWFMsXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmZvbnRXZWlnaHRTdHJvbmcsXG4gICAgICAgIHBhZGRpbmc6IGAke3Rva2VuLnBhZGRpbmdTTSAtIDF9cHggJHt0b2tlbi5wYWRkaW5nTEd9cHhgLFxuICAgICAgICB0ZXh0QWxpZ246ICdzdGFydCcsXG5cbiAgICAgICAgJy53ZWxjb21lLWltcG9ydC1idXR0b24tdGl0bGUnOiB7XG4gICAgICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzUsXG4gICAgICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc1LFxuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRCYXNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgJy53ZWxjb21lLWltcG9ydC1idXR0b24tZGVzY3JpcHRpb24nOiB7XG4gICAgICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMYWJlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWU7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQVRUQUNIX0FDQ09VTlRfTU9EQUwiLCJDUkVBVEVfQUNDT1VOVF9NT0RBTCIsIkRFRkFVTFRfQUNDT1VOVF9UWVBFUyIsIklNUE9SVF9BQ0NPVU5UX01PREFMIiwiU0VMRUNUX0FDQ09VTlRfTU9EQUwiLCJ1c2VTZXRTZWxlY3RlZEFjY291bnRUeXBlcyIsInVzZVRyYW5zbGF0aW9uIiwiQnV0dG9uIiwiSWNvbiIsIkltYWdlIiwiTW9kYWxDb250ZXh0IiwiQ04iLCJGaWxlQXJyb3dEb3duIiwiUGx1c0NpcmNsZSIsIlN3YXRjaGVzIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ0IiwiYWN0aXZlTW9kYWwiLCJpbmFjdGl2ZU1vZGFsIiwibmF2aWdhdGUiLCJzZXRTZWxlY3RlZEFjY291bnRUeXBlcyIsIml0ZW1zIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiaWQiLCJzY2hlbWEiLCJ0aXRsZSIsIm9wZW5Nb2RhbCIsIm1hcCIsIml0ZW0iLCJXZWxjb21lIiwidGhlbWUiLCJ0b2tlbiIsInBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwidG9wIiwicGFkZGluZyIsInNpemVMRyIsInNpemVYTCIsInRleHRBbGlnbiIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsImNvbG9yIiwiY29sb3JUZXh0QmFzZSIsImZvbnRXZWlnaHQiLCJmb250V2VpZ2h0U3Ryb25nIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmcxIiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nMSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZm9udFNpemVIZWFkaW5nNSIsImxpbmVIZWlnaHRIZWFkaW5nNSIsImNvbG9yVGV4dExpZ2h0MyIsImZsZXgiLCJzaXplWFMiLCJtYXJnaW5MZWZ0Iiwic2l6ZU1EIiwic2l6ZSIsInNpemVYWFMiLCJwYWRkaW5nU00iLCJwYWRkaW5nTEciLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodEhlYWRpbmc2IiwiY29sb3JUZXh0TGFiZWwiXSwic291cmNlUm9vdCI6IiJ9