"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_WalletConnect_ConnectWalletConnect_tsx"],{

/***/ "../extension-koni-ui/src/Popup/WalletConnect/ConnectWalletConnect.tsx":
/*!*****************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/WalletConnect/ConnectWalletConnect.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-qr-scanner/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Scan.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0















const DEFAULT_FORM_VALUES = {
  uri: ''
};
const scannerId = 'connect-connection-scanner-modal';
const showScanner = true;
const Component = props => {
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const notification = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useDefaultNavigate)();
  const {
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__.ModalContext);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].useForm();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [scanError, setScanError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(uri => {
    setLoading(true);
    (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.addConnection)({
      uri
    }).then(() => {
      setLoading(false);
      navigate('/wallet-connect/list');
    }).catch(e => {
      console.error(e);
      const errMessage = e.message;
      const message = errMessage.includes('Pairing already exists') ? t('Connection already exists') : t('Fail to add connection');
      notification({
        type: 'error',
        message: message
      });
      setLoading(false);
    }).finally(() => {
      setLoading(false);
    });
  }, [navigate, notification, t]);
  const onFinish = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(values => {
    const {
      uri
    } = values;
    onConnect(uri);
  }, [onConnect]);
  const onSuccess = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(result => {
    const uri = result.text;
    const error = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.validWalletConnectUri)(uri, t);
    if (!error && !loading) {
      setScanError('');
      inactiveModal(scannerId);
      form.setFieldValue('uri', result.text);
    } else {
      if (error) {
        setScanError(error);
      }
    }
  }, [loading, inactiveModal, form, t]);
  const openScanner = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useOpenQrScanner)(scannerId);
  const onOpenScan = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(e => {
    e && e.stopPropagation();
    openScanner();
  }, [openScanner]);
  const onCloseScan = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    setScanError('');
  }, []);
  const onScanError = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(error => {
    console.log(error);
    setScanError(error);
  }, []);
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    navigate('/wallet-connect/list');
  }, [navigate]);
  const uriValidator = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((rule, uri) => {
    return new Promise((resolve, reject) => {
      const error = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.validWalletConnectUri)(uri, t);
      if (!error) {
        resolve();
      } else {
        reject(new Error(error));
      }
    });
  }, [t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className),
    onBack: goBack,
    rightFooterButton: {
      children: t('Connect'),
      onClick: form.submit,
      loading: loading,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
        customIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.WalletConnect, {
          height: "1em",
          width: "1em"
        }),
        type: "customIcon"
      })
    },
    subHeaderIcons: [{
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
      onClick: goHome
    }],
    title: t('WalletConnect'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "body-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "description",
        children: t('By clicking "Connect", you allow this dapp to view your public address')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "page-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
          color: "var(--page-icon-color)",
          iconProps: {
            customIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.WalletConnect, {
              height: "1em",
              width: "1em"
            }),
            type: 'customIcon'
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
        form: form,
        initialValues: DEFAULT_FORM_VALUES,
        onFinish: onFinish,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
          name: 'uri',
          rules: [{
            required: true,
            message: t('URI is required')
          }, {
            validator: uriValidator
          }],
          statusHelpAsTooltip: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
            disabled: loading,
            label: t('URI'),
            placeholder: t('Please type or paste or scan URI'),
            suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: showScanner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                disabled: loading,
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
                  size: "sm"
                }),
                onClick: onOpenScan,
                size: "xs",
                type: "ghost"
              })
            })
          })
        })
      }), showScanner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: className,
        id: scannerId,
        isError: !!scanError,
        onClose: onCloseScan,
        onError: onScanError,
        onSuccess: onSuccess,
        overlay: scanError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.QrScannerErrorNotice, {
          message: scanError
        })
      })]
    })
  });
};
const ConnectWalletConnect = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__["default"])(Component).withConfig({
  displayName: "ConnectWalletConnect",
  componentId: "sc-129uyga-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.body-container': {
      padding: `0 ${token.padding}px`,
      '.description': {
        padding: `0 ${token.padding}px`,
        fontSize: token.fontSizeHeading6,
        lineHeight: token.lineHeightHeading6,
        color: token.colorTextDescription,
        textAlign: 'center'
      },
      '.page-icon': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: token.controlHeightLG,
        marginBottom: token.sizeXXL,
        '--page-icon-color': token.colorPrimary
      },
      '.ant-input-suffix': {
        minWidth: token.sizeXS
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWalletConnect);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1dhbGxldENvbm5lY3RfQ29ubmVjdFdhbGxldENvbm5lY3RfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWlIO0FBQ047QUFDcEM7QUFHSTtBQUMwQjtBQUN6RTtBQUNVO0FBRTJDO0FBQ2xDO0FBQ0E7QUFDUjtBQUFBO0FBQUE7QUFBQTtBQVF2QyxNQUFNeUIsbUJBQTJDLEdBQUc7RUFDbERDLEdBQUcsRUFBRTtBQUNQLENBQUM7QUFFRCxNQUFNQyxTQUFTLEdBQUcsa0NBQWtDO0FBQ3BELE1BQU1DLFdBQVcsR0FBRyxJQUFJO0FBRXhCLE1BQU1DLFNBQTBCLEdBQUlDLEtBQVksSUFBSztFQUNuRCxNQUFNO0lBQUVDO0VBQVUsQ0FBQyxHQUFHRCxLQUFLO0VBRTNCLE1BQU07SUFBRUU7RUFBRSxDQUFDLEdBQUdWLDZEQUFjLEVBQUU7RUFDOUIsTUFBTVcsUUFBUSxHQUFHViw2REFBVyxFQUFFO0VBQzlCLE1BQU1XLFlBQVksR0FBRzdCLG1GQUFlLEVBQUU7RUFDdEMsTUFBTTtJQUFFOEI7RUFBTyxDQUFDLEdBQUcvQixzRkFBa0IsRUFBRTtFQUV2QyxNQUFNO0lBQUVnQztFQUFjLENBQUMsR0FBR2hCLGlEQUFVLENBQUNQLDZEQUFZLENBQUM7RUFFbEQsTUFBTSxDQUFDd0IsSUFBSSxDQUFDLEdBQUczQixvRUFBWSxFQUEwQjtFQUVyRCxNQUFNLENBQUM2QixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHbkIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDN0MsTUFBTSxDQUFDb0IsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3JCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBRTlDLE1BQU1zQixTQUFTLEdBQUd4QixrREFBVyxDQUFFTyxHQUFXLElBQUs7SUFDN0NjLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFaEJqQyxxRkFBYSxDQUFDO01BQ1pt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LFdBQVk7UUFDckIsU0FBUyxFQUFFUixTQUFVO1FBQ3JCLE9BQU8sRUFBRWYsU0FBUyxpQkFBSSx1REFBQyx5RkFBb0I7VUFBQyxPQUFPLEVBQUVBO1FBQVU7TUFBSSxFQUV0RTtJQUFBO0VBRUMsRUFDbUI7QUFFL0IsQ0FBQztBQUVELE1BQU11QyxvQkFBb0IsR0FBR3hELDhEQUFNLENBQUNLLFNBQVMsQ0FBQztFQUFBO0VBQUE7QUFBQSxHQUFRLENBQUM7RUFBRW9ELEtBQUssRUFBRTtJQUFFQztFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQ3JGLE9BQU87SUFDTCxpQkFBaUIsRUFBRTtNQUNqQkMsT0FBTyxFQUFHLEtBQUlELEtBQUssQ0FBQ0MsT0FBUSxJQUFHO01BRS9CLGNBQWMsRUFBRTtRQUNkQSxPQUFPLEVBQUcsS0FBSUQsS0FBSyxDQUFDQyxPQUFRLElBQUc7UUFDL0JDLFFBQVEsRUFBRUYsS0FBSyxDQUFDRyxnQkFBZ0I7UUFDaENDLFVBQVUsRUFBRUosS0FBSyxDQUFDSyxrQkFBa0I7UUFDcENDLEtBQUssRUFBRU4sS0FBSyxDQUFDTyxvQkFBb0I7UUFDakNDLFNBQVMsRUFBRTtNQUNiLENBQUM7TUFFRCxZQUFZLEVBQUU7UUFDWkMsT0FBTyxFQUFFLE1BQU07UUFDZkMsY0FBYyxFQUFFLFFBQVE7UUFDeEJDLFNBQVMsRUFBRVgsS0FBSyxDQUFDWSxlQUFlO1FBQ2hDQyxZQUFZLEVBQUViLEtBQUssQ0FBQ2MsT0FBTztRQUMzQixtQkFBbUIsRUFBRWQsS0FBSyxDQUFDZTtNQUM3QixDQUFDO01BRUQsbUJBQW1CLEVBQUU7UUFDbkJDLFFBQVEsRUFBRWhCLEtBQUssQ0FBQ2lCO01BQ2xCO0lBQ0Y7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVuQixvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9XYWxsZXRDb25uZWN0L0Nvbm5lY3RXYWxsZXRDb25uZWN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgQ2xvc2VJY29uLCBMYXlvdXQsIFFyU2Nhbm5lckVycm9yTm90aWNlLCBXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURlZmF1bHROYXZpZ2F0ZSwgdXNlTm90aWZpY2F0aW9uLCB1c2VPcGVuUXJTY2FubmVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBhZGRDb25uZWN0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgRm9ybUNhbGxiYWNrcywgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgU2Nhbm5lclJlc3VsdCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMvc2Nhbm5lcic7XG5pbXBvcnQgeyB2YWxpZFdhbGxldENvbm5lY3RVcmkgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSWNvbiwgSW5wdXQsIE1vZGFsQ29udGV4dCwgUGFnZUljb24sIFN3UXJTY2FubmVyIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBTY2FuIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IHsgUnVsZU9iamVjdCB9IGZyb20gJ3JjLWZpZWxkLWZvcm0vbGliL2ludGVyZmFjZSc7XG5pbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5pbnRlcmZhY2UgQWRkQ29ubmVjdGlvbkZvcm1TdGF0ZSB7XG4gIHVyaTogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX0ZPUk1fVkFMVUVTOiBBZGRDb25uZWN0aW9uRm9ybVN0YXRlID0ge1xuICB1cmk6ICcnXG59O1xuXG5jb25zdCBzY2FubmVySWQgPSAnY29ubmVjdC1jb25uZWN0aW9uLXNjYW5uZXItbW9kYWwnO1xuY29uc3Qgc2hvd1NjYW5uZXIgPSB0cnVlO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBub3RpZmljYXRpb24gPSB1c2VOb3RpZmljYXRpb24oKTtcbiAgY29uc3QgeyBnb0hvbWUgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IHsgaW5hY3RpdmVNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxBZGRDb25uZWN0aW9uRm9ybVN0YXRlPigpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NjYW5FcnJvciwgc2V0U2NhbkVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjaygodXJpOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgYWRkQ29ubmVjdGlvbih7XG4gICAgICB1cmlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgbmF2aWdhdGUoJy93YWxsZXQtY29ubmVjdC9saXN0Jyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIGNvbnN0IGVyck1lc3NhZ2UgPSAoZSBhcyBFcnJvcikubWVzc2FnZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVyck1lc3NhZ2UuaW5jbHVkZXMoJ1BhaXJpbmcgYWxyZWFkeSBleGlzdHMnKSA/IHQoJ0Nvbm5lY3Rpb24gYWxyZWFkeSBleGlzdHMnKSA6IHQoJ0ZhaWwgdG8gYWRkIGNvbm5lY3Rpb24nKTtcblxuICAgICAgICBub3RpZmljYXRpb24oe1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbbmF2aWdhdGUsIG5vdGlmaWNhdGlvbiwgdF0pO1xuXG4gIGNvbnN0IG9uRmluaXNoOiBGb3JtQ2FsbGJhY2tzPEFkZENvbm5lY3Rpb25Gb3JtU3RhdGU+WydvbkZpbmlzaCddID0gdXNlQ2FsbGJhY2soKHZhbHVlczogQWRkQ29ubmVjdGlvbkZvcm1TdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdXJpIH0gPSB2YWx1ZXM7XG5cbiAgICBvbkNvbm5lY3QodXJpKTtcbiAgfSwgW29uQ29ubmVjdF0pO1xuXG4gIGNvbnN0IG9uU3VjY2VzcyA9IHVzZUNhbGxiYWNrKChyZXN1bHQ6IFNjYW5uZXJSZXN1bHQpID0+IHtcbiAgICBjb25zdCB1cmkgPSByZXN1bHQudGV4dDtcbiAgICBjb25zdCBlcnJvciA9IHZhbGlkV2FsbGV0Q29ubmVjdFVyaSh1cmksIHQpO1xuXG4gICAgaWYgKCFlcnJvciAmJiAhbG9hZGluZykge1xuICAgICAgc2V0U2NhbkVycm9yKCcnKTtcbiAgICAgIGluYWN0aXZlTW9kYWwoc2Nhbm5lcklkKTtcbiAgICAgIGZvcm0uc2V0RmllbGRWYWx1ZSgndXJpJywgcmVzdWx0LnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgc2V0U2NhbkVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtsb2FkaW5nLCBpbmFjdGl2ZU1vZGFsLCBmb3JtLCB0XSk7XG5cbiAgY29uc3Qgb3BlblNjYW5uZXIgPSB1c2VPcGVuUXJTY2FubmVyKHNjYW5uZXJJZCk7XG5cbiAgY29uc3Qgb25PcGVuU2NhbiA9IHVzZUNhbGxiYWNrKChlPzogU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb3BlblNjYW5uZXIoKTtcbiAgfSwgW29wZW5TY2FubmVyXSk7XG5cbiAgY29uc3Qgb25DbG9zZVNjYW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2NhbkVycm9yKCcnKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU2NhbkVycm9yID0gdXNlQ2FsbGJhY2soKGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgc2V0U2NhbkVycm9yKGVycm9yKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdvQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgnL3dhbGxldC1jb25uZWN0L2xpc3QnKTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3QgdXJpVmFsaWRhdG9yID0gdXNlQ2FsbGJhY2soKHJ1bGU6IFJ1bGVPYmplY3QsIHVyaTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRXYWxsZXRDb25uZWN0VXJpKHVyaSwgdCk7XG5cbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfVxuICAgICAgb25CYWNrPXtnb0JhY2t9XG4gICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICBjaGlsZHJlbjogdCgnQ29ubmVjdCcpLFxuICAgICAgICBvbkNsaWNrOiBmb3JtLnN1Ym1pdCxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgaWNvbjogKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjdXN0b21JY29uPXsoXG4gICAgICAgICAgICAgIDxXYWxsZXRDb25uZWN0XG4gICAgICAgICAgICAgICAgaGVpZ2h0PScxZW0nXG4gICAgICAgICAgICAgICAgd2lkdGg9JzFlbSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB0eXBlPSdjdXN0b21JY29uJ1xuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgICBzdWJIZWFkZXJJY29ucz17W3tcbiAgICAgICAgaWNvbjogPENsb3NlSWNvbiAvPixcbiAgICAgICAgb25DbGljazogZ29Ib21lXG4gICAgICB9XX1cbiAgICAgIHRpdGxlPXt0KCdXYWxsZXRDb25uZWN0Jyl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHktY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICB7dCgnQnkgY2xpY2tpbmcgXCJDb25uZWN0XCIsIHlvdSBhbGxvdyB0aGlzIGRhcHAgdG8gdmlldyB5b3VyIHB1YmxpYyBhZGRyZXNzJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS1pY29uJz5cbiAgICAgICAgICA8UGFnZUljb25cbiAgICAgICAgICAgIGNvbG9yPSd2YXIoLS1wYWdlLWljb24tY29sb3IpJ1xuICAgICAgICAgICAgaWNvblByb3BzPXt7XG4gICAgICAgICAgICAgIGN1c3RvbUljb246IChcbiAgICAgICAgICAgICAgICA8V2FsbGV0Q29ubmVjdFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxZW0nXG4gICAgICAgICAgICAgICAgICB3aWR0aD0nMWVtJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHR5cGU6ICdjdXN0b21JY29uJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e0RFRkFVTFRfRk9STV9WQUxVRVN9XG4gICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT17J3VyaSd9XG4gICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnVVJJIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogdXJpVmFsaWRhdG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgbGFiZWw9e3QoJ1VSSScpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnUGxlYXNlIHR5cGUgb3IgcGFzdGUgb3Igc2NhbiBVUkknKX1cbiAgICAgICAgICAgICAgc3VmZml4PXsoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NjYW5uZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17U2Nhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5TY2FufVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0neHMnXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdnaG9zdCdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIHtcbiAgICAgICAgICBzaG93U2Nhbm5lciAmJiAoXG4gICAgICAgICAgICA8U3dRclNjYW5uZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgIGlkPXtzY2FubmVySWR9XG4gICAgICAgICAgICAgIGlzRXJyb3I9eyEhc2NhbkVycm9yfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlU2Nhbn1cbiAgICAgICAgICAgICAgb25FcnJvcj17b25TY2FuRXJyb3J9XG4gICAgICAgICAgICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxuICAgICAgICAgICAgICBvdmVybGF5PXtzY2FuRXJyb3IgJiYgPFFyU2Nhbm5lckVycm9yTm90aWNlIG1lc3NhZ2U9e3NjYW5FcnJvcn0gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQuV2l0aFN1YkhlYWRlck9ubHk+XG4gICk7XG59O1xuXG5jb25zdCBDb25uZWN0V2FsbGV0Q29ubmVjdCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5ib2R5LWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG5cbiAgICAgICcuZGVzY3JpcHRpb24nOiB7XG4gICAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgICAgfSxcblxuICAgICAgJy5wYWdlLWljb24nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBtYXJnaW5Ub3A6IHRva2VuLmNvbnRyb2xIZWlnaHRMRyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5zaXplWFhMLFxuICAgICAgICAnLS1wYWdlLWljb24tY29sb3InOiB0b2tlbi5jb2xvclByaW1hcnlcbiAgICAgIH0sXG5cbiAgICAgICcuYW50LWlucHV0LXN1ZmZpeCc6IHtcbiAgICAgICAgbWluV2lkdGg6IHRva2VuLnNpemVYU1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0V2FsbGV0Q29ubmVjdDtcbiJdLCJuYW1lcyI6WyJDbG9zZUljb24iLCJMYXlvdXQiLCJRclNjYW5uZXJFcnJvck5vdGljZSIsIldhbGxldENvbm5lY3QiLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJ1c2VOb3RpZmljYXRpb24iLCJ1c2VPcGVuUXJTY2FubmVyIiwiYWRkQ29ubmVjdGlvbiIsInZhbGlkV2FsbGV0Q29ubmVjdFVyaSIsIkJ1dHRvbiIsIkZvcm0iLCJJY29uIiwiSW5wdXQiLCJNb2RhbENvbnRleHQiLCJQYWdlSWNvbiIsIlN3UXJTY2FubmVyIiwiQ04iLCJTY2FuIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJERUZBVUxUX0ZPUk1fVkFMVUVTIiwidXJpIiwic2Nhbm5lcklkIiwic2hvd1NjYW5uZXIiLCJDb21wb25lbnQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInQiLCJuYXZpZ2F0ZSIsIm5vdGlmaWNhdGlvbiIsImdvSG9tZSIsImluYWN0aXZlTW9kYWwiLCJmb3JtIiwidXNlRm9ybSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2NhbkVycm9yIiwic2V0U2NhbkVycm9yIiwib25Db25uZWN0IiwidGhlbiIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImVyck1lc3NhZ2UiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZmluYWxseSIsIm9uRmluaXNoIiwidmFsdWVzIiwib25TdWNjZXNzIiwicmVzdWx0IiwidGV4dCIsInNldEZpZWxkVmFsdWUiLCJvcGVuU2Nhbm5lciIsIm9uT3BlblNjYW4iLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsb3NlU2NhbiIsIm9uU2NhbkVycm9yIiwibG9nIiwiZ29CYWNrIiwidXJpVmFsaWRhdG9yIiwicnVsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJzdWJtaXQiLCJpY29uIiwiY3VzdG9tSWNvbiIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwiQ29ubmVjdFdhbGxldENvbm5lY3QiLCJ0aGVtZSIsInRva2VuIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFNpemVIZWFkaW5nNiIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzYiLCJjb2xvciIsImNvbG9yVGV4dERlc2NyaXB0aW9uIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiY29udHJvbEhlaWdodExHIiwibWFyZ2luQm90dG9tIiwic2l6ZVhYTCIsImNvbG9yUHJpbWFyeSIsIm1pbldpZHRoIiwic2l6ZVhTIl0sInNvdXJjZVJvb3QiOiIifQ==