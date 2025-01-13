"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Keyring_Login_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Keyring/Login.tsx":
/*!********************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Keyring/Login.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useUILock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useUILock */ "../extension-koni-ui/src/hooks/common/useUILock.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_form_useFocusById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/form/useFocusById */ "../extension-koni-ui/src/hooks/form/useFocusById.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/form/form */ "../extension-koni-ui/src/utils/form/form.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0














var FormFieldName;
(function (FormFieldName) {
  FormFieldName["PASSWORD"] = "password";
})(FormFieldName || (FormFieldName = {}));
const passwordInputId = 'login-password';
const Component = ({
  className
}) => {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    activeModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__.ModalContext);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].useForm();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);
  const {
    unlock
  } = (0,_subwallet_extension_koni_ui_hooks_common_useUILock__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((changedFields, allFields) => {
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_6__.simpleCheckForm)(allFields);
    setIsDisable(error || empty);
  }, []);
  const onError = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(error => {
    var _document$getElementB;
    form.setFields([{
      name: FormFieldName.PASSWORD,
      errors: [error]
    }]);
    (_document$getElementB = document.getElementById(passwordInputId)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.select();
  }, [form]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(values => {
    setLoading(true);
    setTimeout(() => {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_5__.keyringUnlock)({
        password: values[FormFieldName.PASSWORD]
      }).then(data => {
        if (!data.status) {
          onError(t(data.errors[0]));
        } else {
          unlock();
        }
      }).catch(e => {
        onError(e.message);
      }).finally(() => {
        setLoading(false);
      });
    }, 500);
  }, [onError, unlock, t]);
  const onReset = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(() => {
    activeModal(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.RESET_WALLET_MODAL);
  }, [activeModal]);
  (0,_subwallet_extension_koni_ui_hooks_form_useFocusById__WEBPACK_IMPORTED_MODULE_4__["default"])(passwordInputId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "bg-image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "body-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "logo-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
            src: "./images/subwallet/gradient-logo.png",
            width: 80
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "title",
          children: t('Welcome back!')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "sub-title",
          children: t('Enter your password to unlock wallet')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
          form: form,
          initialValues: {
            [FormFieldName.PASSWORD]: ''
          },
          onFieldsChange: onUpdate,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
            name: FormFieldName.PASSWORD,
            rules: [{
              message: t('Password is required'),
              required: true
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Password, {
              containerClassName: "password-input",
              id: passwordInputId,
              placeholder: t('Password')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
              block: true,
              disabled: isDisable,
              htmlType: "submit",
              loading: loading,
              children: t('Unlock')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "forgot-password",
              onClick: onReset,
              children: t('Don’t remember your password?')
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.ResetWalletModal, {})]
      })]
    })
  });
};
const Login = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(Component).withConfig({
  displayName: "Login",
  componentId: "sc-1e5t0rs-0"
})(({
  theme
}) => {
  const {
    token
  } = theme;
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
      padding: `0 ${token.padding}px`,
      textAlign: 'center',
      opacity: 0.999,
      '.logo-container': {
        marginTop: 100,
        color: token.colorTextBase
      },
      '.title': {
        marginTop: token.margin,
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeHeading3,
        lineHeight: token.lineHeightHeading3,
        color: token.colorTextBase
      },
      '.sub-title': {
        marginTop: token.marginXS,
        fontSize: token.fontSizeHeading5,
        lineHeight: token.lineHeightHeading5,
        color: token.colorTextLight3
      },
      '.password-input': {
        marginTop: 62
      },
      '.forgot-password': {
        cursor: 'pointer',
        fontSize: token.fontSizeHeading5,
        lineHeight: token.lineHeightHeading5,
        color: token.colorTextLight4,
        marginTop: 27
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0tleXJpbmdfTG9naW5fdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVnRztBQUNwQjtBQUNVO0FBQ1Y7QUFDSTtBQUNUO0FBR1E7QUFDQTtBQUNuRDtBQUNxQztBQUMxQjtBQUFBO0FBQUE7QUFBQSxJQUlsQ29CLGFBQWE7QUFBQSxXQUFiQSxhQUFhO0VBQWJBLGFBQWE7QUFBQSxHQUFiQSxhQUFhLEtBQWJBLGFBQWE7QUFRbEIsTUFBTUMsZUFBZSxHQUFHLGdCQUFnQjtBQUV4QyxNQUFNQyxTQUEwQixHQUFHLENBQUM7RUFBRUM7QUFBaUIsQ0FBQyxLQUFLO0VBQzNELE1BQU07SUFBRUM7RUFBRSxDQUFDLEdBQUdwQixvR0FBYyxFQUFFO0VBQzlCLE1BQU07SUFBRXFCO0VBQVksQ0FBQyxHQUFHUixpREFBVSxDQUFDSiw4REFBWSxDQUFDO0VBRWhELE1BQU0sQ0FBQ2EsSUFBSSxDQUFDLEdBQUdoQixvRUFBWSxFQUFrQjtFQUU3QyxNQUFNLENBQUNrQixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHWCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUM3QyxNQUFNLENBQUNZLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdiLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQ2hELE1BQU07SUFBRWM7RUFBTyxDQUFDLEdBQUczQiwrRkFBUyxFQUFFO0VBRTlCLE1BQU00QixRQUF5RCxHQUFHakIsa0RBQVcsQ0FBQyxDQUFDa0IsYUFBOEIsRUFBRUMsU0FBMEIsS0FBSztJQUM1SSxNQUFNO01BQUVDLEtBQUs7TUFBRUM7SUFBTSxDQUFDLEdBQUc3Qiw2RkFBZSxDQUFDMkIsU0FBUyxDQUFDO0lBRW5ESixZQUFZLENBQUNNLEtBQUssSUFBSUQsS0FBSyxDQUFDO0VBQzlCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixNQUFNRSxPQUFPLEdBQUd0QixrREFBVyxDQUFFcUIsS0FBYSxJQUFLO0lBQUE7SUFDN0NYLElBQUksQ0FBQ2EsU0FBUyxDQUFDLENBQUM7TUFBRUMsSUFBSSxFQUFFcEIsYUFBYSxDQUFDcUIsUUFBUTtNQUFFQyxNQUFNLEVBQUUsQ0FBQ0wsS0FBSztJQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25FLHlCQUFDTSxRQUFRLENBQUNDLGNBQWMsQ0FBQ3ZCLGVBQWUsQ0FBQywwREFBekMsc0JBQWdFd0IsTUFBTSxFQUFFO0VBQzFFLENBQUMsRUFBRSxDQUFDbkIsSUFBSSxDQUFDLENBQUM7RUFFVixNQUFNb0IsUUFBbUQsR0FBRzlCLGtEQUFXLENBQUUrQixNQUFzQixJQUFLO0lBQ2xHbEIsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQm1CLFVBQVUsQ0FBQyxNQUFNO01BQ2Z6QyxxRkFBYSxDQUFDO1FBQ1owQyxRQUFRLEVBQUVGLE1BQU0sQ0FBQzNCLGFBQWEsQ0FBQ3FCLFFBQVE7TUFDekMsQ0FBQyxDQUFDLENBQ0NTLElBQUksQ0FBRUMsSUFBSSxJQUFLO1FBQ2QsSUFBSSxDQUFDQSxJQUFJLENBQUNDLE1BQU0sRUFBRTtVQUNoQmQsT0FBTyxDQUFDZCxDQUFDLENBQUMyQixJQUFJLENBQUNULE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsTUFBTTtVQUNMVixNQUFNLEVBQUU7UUFDVjtNQUNGLENBQUMsQ0FBQyxDQUNEcUIsS0FBSyxDQUFFQyxDQUFRLElBQUs7UUFDbkJoQixPQUFPLENBQUNnQixDQUFDLENBQUNDLE9BQU8sQ0FBQztNQUNwQixDQUFDLENBQUMsQ0FDREMsT0FBTyxDQUFDLE1BQU07UUFDYjNCLFVBQVUsQ0FBQyxLQUFLLENBQUM7TUFDbkIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUMsRUFBRSxDQUFDUyxPQUFPLEVBQUVOLE1BQU0sRUFBRVIsQ0FBQyxDQUFDLENBQUM7RUFFeEIsTUFBTWlDLE9BQU8sR0FBR3pDLGtEQUFXLENBQUMsTUFBTTtJQUNoQ1MsV0FBVyxDQUFDdEIsc0ZBQWtCLENBQUM7RUFDakMsQ0FBQyxFQUFFLENBQUNzQixXQUFXLENBQUMsQ0FBQztFQUVqQm5CLGdHQUFZLENBQUNlLGVBQWUsQ0FBQztFQUU3QixvQkFDRSx1REFBQyxnRkFBVztJQUFDLFNBQVMsRUFBRVAsaURBQUUsQ0FBQ1MsU0FBUyxDQUFFO0lBQUEsdUJBQ3BDLHdEQUFDLGdGQUFXO01BQUEsd0JBQ1Y7UUFBSyxTQUFTLEVBQUM7TUFBVSxFQUFHLGVBQzVCO1FBQUssU0FBUyxFQUFDLGdCQUFnQjtRQUFBLHdCQUM3QjtVQUFLLFNBQVMsRUFBQyxnQkFBZ0I7VUFBQSx1QkFDN0IsdURBQUMsNERBQUs7WUFDSixHQUFHLEVBQUMsc0NBQXNDO1lBQzFDLEtBQUssRUFBRTtVQUFHO1FBQ1YsRUFDRSxlQUNOO1VBQUssU0FBUyxFQUFDLE9BQU87VUFBQSxVQUNuQkMsQ0FBQyxDQUFDLGVBQWU7UUFBQyxFQUNmLGVBQ047VUFBSyxTQUFTLEVBQUMsV0FBVztVQUFBLFVBQ3ZCQSxDQUFDLENBQUMsc0NBQXNDO1FBQUMsRUFDdEMsZUFDTix3REFBQyw0REFBSTtVQUNILElBQUksRUFBRUUsSUFBSztVQUNYLGFBQWEsRUFBRTtZQUFFLENBQUNOLGFBQWEsQ0FBQ3FCLFFBQVEsR0FBRztVQUFHLENBQUU7VUFDaEQsY0FBYyxFQUFFUixRQUFTO1VBQ3pCLFFBQVEsRUFBRWEsUUFBUztVQUFBLHdCQUVuQix1REFBQyxpRUFBUztZQUNSLElBQUksRUFBRTFCLGFBQWEsQ0FBQ3FCLFFBQVM7WUFDN0IsS0FBSyxFQUFFLENBQ0w7Y0FDRWMsT0FBTyxFQUFFL0IsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO2NBQ2xDa0MsUUFBUSxFQUFFO1lBQ1osQ0FBQyxDQUNEO1lBQ0YsbUJBQW1CLEVBQUUsSUFBSztZQUFBLHVCQUUxQix1REFBQyxxRUFBYztjQUNiLGtCQUFrQixFQUFDLGdCQUFnQjtjQUNuQyxFQUFFLEVBQUVyQyxlQUFnQjtjQUNwQixXQUFXLEVBQUVHLENBQUMsQ0FBQyxVQUFVO1lBQUU7VUFDM0IsRUFDUSxlQUNaLHVEQUFDLGlFQUFTO1lBQUEsdUJBQ1IsdURBQUMsNERBQU07Y0FDTCxLQUFLLEVBQUUsSUFBSztjQUNaLFFBQVEsRUFBRU0sU0FBVTtjQUNwQixRQUFRLEVBQUMsUUFBUTtjQUNqQixPQUFPLEVBQUVGLE9BQVE7Y0FBQSxVQUVoQkosQ0FBQyxDQUFDLFFBQVE7WUFBQztVQUNMLEVBQ0MsZUFDWix1REFBQyxpRUFBUztZQUFBLHVCQUNSO2NBQ0UsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQixPQUFPLEVBQUVpQyxPQUFRO2NBQUEsVUFFaEJqQyxDQUFDLENBQUMsK0JBQStCO1lBQUM7VUFDL0IsRUFDSTtRQUFBLEVBQ1AsZUFDUCx1REFBQyxxRkFBZ0IsS0FBRztNQUFBLEVBQ2hCO0lBQUE7RUFDTSxFQUNGO0FBRWxCLENBQUM7QUFFRCxNQUFNbUMsS0FBSyxHQUFHeEMsOERBQU0sQ0FBQ0csU0FBUyxDQUFDO0VBQUE7RUFBQTtBQUFBLEdBQVEsQ0FBQztFQUFFc0M7QUFBYSxDQUFDLEtBQUs7RUFDM0QsTUFBTTtJQUFFQztFQUFNLENBQUMsR0FBR0QsS0FBSztFQUV2QixPQUFPO0lBQ0xFLFFBQVEsRUFBRSxVQUFVO0lBRXBCLFdBQVcsRUFBRTtNQUNYQyxlQUFlLEVBQUUsa0RBQWtEO01BQ25FQyxnQkFBZ0IsRUFBRSxXQUFXO01BQzdCQyxrQkFBa0IsRUFBRSxLQUFLO01BQ3pCQyxjQUFjLEVBQUUsU0FBUztNQUN6QkMsTUFBTSxFQUFFLE1BQU07TUFDZEwsUUFBUSxFQUFFLFVBQVU7TUFDcEJNLEtBQUssRUFBRSxNQUFNO01BQ2JDLElBQUksRUFBRSxDQUFDO01BQ1BDLEdBQUcsRUFBRTtJQUNQLENBQUM7SUFFRCxpQkFBaUIsRUFBRTtNQUNqQkMsT0FBTyxFQUFHLEtBQUlWLEtBQUssQ0FBQ1UsT0FBUSxJQUFHO01BQy9CQyxTQUFTLEVBQUUsUUFBUTtNQUNuQkMsT0FBTyxFQUFFLEtBQUs7TUFFZCxpQkFBaUIsRUFBRTtRQUNqQkMsU0FBUyxFQUFFLEdBQUc7UUFDZEMsS0FBSyxFQUFFZCxLQUFLLENBQUNlO01BQ2YsQ0FBQztNQUVELFFBQVEsRUFBRTtRQUNSRixTQUFTLEVBQUViLEtBQUssQ0FBQ2dCLE1BQU07UUFDdkJDLFVBQVUsRUFBRWpCLEtBQUssQ0FBQ2tCLGdCQUFnQjtRQUNsQ0MsUUFBUSxFQUFFbkIsS0FBSyxDQUFDb0IsZ0JBQWdCO1FBQ2hDQyxVQUFVLEVBQUVyQixLQUFLLENBQUNzQixrQkFBa0I7UUFDcENSLEtBQUssRUFBRWQsS0FBSyxDQUFDZTtNQUNmLENBQUM7TUFFRCxZQUFZLEVBQUU7UUFDWkYsU0FBUyxFQUFFYixLQUFLLENBQUN1QixRQUFRO1FBQ3pCSixRQUFRLEVBQUVuQixLQUFLLENBQUN3QixnQkFBZ0I7UUFDaENILFVBQVUsRUFBRXJCLEtBQUssQ0FBQ3lCLGtCQUFrQjtRQUNwQ1gsS0FBSyxFQUFFZCxLQUFLLENBQUMwQjtNQUNmLENBQUM7TUFFRCxpQkFBaUIsRUFBRTtRQUNqQmIsU0FBUyxFQUFFO01BQ2IsQ0FBQztNQUVELGtCQUFrQixFQUFFO1FBQ2xCYyxNQUFNLEVBQUUsU0FBUztRQUNqQlIsUUFBUSxFQUFFbkIsS0FBSyxDQUFDd0IsZ0JBQWdCO1FBQ2hDSCxVQUFVLEVBQUVyQixLQUFLLENBQUN5QixrQkFBa0I7UUFDcENYLEtBQUssRUFBRWQsS0FBSyxDQUFDNEIsZUFBZTtRQUM1QmYsU0FBUyxFQUFFO01BQ2I7SUFDRjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZWYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0tleXJpbmcvTG9naW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyLCBSZXNldFdhbGxldE1vZGFsIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IFJFU0VUX1dBTExFVF9NT0RBTCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgdXNlVUlMb2NrIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZVVJTG9jayc7XG5pbXBvcnQgdXNlRm9jdXNCeUlkIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvZm9ybS91c2VGb2N1c0J5SWQnO1xuaW1wb3J0IHsga2V5cmluZ1VubG9jayB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEZvcm1DYWxsYmFja3MsIEZvcm1GaWVsZERhdGEgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL2Zvcm0nO1xuaW1wb3J0IHsgc2ltcGxlQ2hlY2tGb3JtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9mb3JtL2Zvcm0nO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbWFnZSwgSW5wdXQsIE1vZGFsQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wc1xuXG5lbnVtIEZvcm1GaWVsZE5hbWUge1xuICBQQVNTV09SRCA9ICdwYXNzd29yZCdcbn1cblxuaW50ZXJmYWNlIExvZ2luRm9ybVN0YXRlIHtcbiAgW0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkRdOiBzdHJpbmc7XG59XG5cbmNvbnN0IHBhc3N3b3JkSW5wdXRJZCA9ICdsb2dpbi1wYXNzd29yZCc7XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBhY3RpdmVNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxMb2dpbkZvcm1TdGF0ZT4oKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Rpc2FibGUsIHNldElzRGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyB1bmxvY2sgfSA9IHVzZVVJTG9jaygpO1xuXG4gIGNvbnN0IG9uVXBkYXRlOiBGb3JtQ2FsbGJhY2tzPExvZ2luRm9ybVN0YXRlPlsnb25GaWVsZHNDaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKChjaGFuZ2VkRmllbGRzOiBGb3JtRmllbGREYXRhW10sIGFsbEZpZWxkczogRm9ybUZpZWxkRGF0YVtdKSA9PiB7XG4gICAgY29uc3QgeyBlbXB0eSwgZXJyb3IgfSA9IHNpbXBsZUNoZWNrRm9ybShhbGxGaWVsZHMpO1xuXG4gICAgc2V0SXNEaXNhYmxlKGVycm9yIHx8IGVtcHR5KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uRXJyb3IgPSB1c2VDYWxsYmFjaygoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgIGZvcm0uc2V0RmllbGRzKFt7IG5hbWU6IEZvcm1GaWVsZE5hbWUuUEFTU1dPUkQsIGVycm9yczogW2Vycm9yXSB9XSk7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhc3N3b3JkSW5wdXRJZCkgYXMgSFRNTElucHV0RWxlbWVudCk/LnNlbGVjdCgpO1xuICB9LCBbZm9ybV0pO1xuXG4gIGNvbnN0IG9uU3VibWl0OiBGb3JtQ2FsbGJhY2tzPExvZ2luRm9ybVN0YXRlPlsnb25GaW5pc2gnXSA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IExvZ2luRm9ybVN0YXRlKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGtleXJpbmdVbmxvY2soe1xuICAgICAgICBwYXNzd29yZDogdmFsdWVzW0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkRdXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIG9uRXJyb3IodChkYXRhLmVycm9yc1swXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bmxvY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICBvbkVycm9yKGUubWVzc2FnZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgNTAwKTtcbiAgfSwgW29uRXJyb3IsIHVubG9jaywgdF0pO1xuXG4gIGNvbnN0IG9uUmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWN0aXZlTW9kYWwoUkVTRVRfV0FMTEVUX01PREFMKTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgdXNlRm9jdXNCeUlkKHBhc3N3b3JkSW5wdXRJZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfT5cbiAgICAgIDxMYXlvdXQuQmFzZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWltYWdlJyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keS1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9zdWJ3YWxsZXQvZ3JhZGllbnQtbG9nby5wbmcnXG4gICAgICAgICAgICAgIHdpZHRoPXs4MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAgICAgIHt0KCdXZWxjb21lIGJhY2shJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Yi10aXRsZSc+XG4gICAgICAgICAgICB7dCgnRW50ZXIgeW91ciBwYXNzd29yZCB0byB1bmxvY2sgd2FsbGV0Jyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IFtGb3JtRmllbGROYW1lLlBBU1NXT1JEXTogJycgfX1cbiAgICAgICAgICAgIG9uRmllbGRzQ2hhbmdlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9e0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkR9XG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9J3Bhc3N3b3JkLWlucHV0J1xuICAgICAgICAgICAgICAgIGlkPXtwYXNzd29yZElucHV0SWR9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBibG9jaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlfVxuICAgICAgICAgICAgICAgIGh0bWxUeXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdVbmxvY2snKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZvcmdvdC1wYXNzd29yZCdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3QoJ0RvbuKAmXQgcmVtZW1iZXIgeW91ciBwYXNzd29yZD8nKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPFJlc2V0V2FsbGV0TW9kYWwgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5CYXNlPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBMb2dpbiA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHRva2VuIH0gPSB0aGVtZTtcblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgJy5iZy1pbWFnZSc6IHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIi4vaW1hZ2VzL3N1YndhbGxldC93ZWxjb21lLWJhY2tncm91bmQucG5nXCIpJyxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wJyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDBcbiAgICB9LFxuXG4gICAgJy5ib2R5LWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgb3BhY2l0eTogMC45OTksXG5cbiAgICAgICcubG9nby1jb250YWluZXInOiB7XG4gICAgICAgIG1hcmdpblRvcDogMTAwLFxuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0QmFzZVxuICAgICAgfSxcblxuICAgICAgJy50aXRsZSc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW4sXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmZvbnRXZWlnaHRTdHJvbmcsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmczLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzMsXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRCYXNlXG4gICAgICB9LFxuXG4gICAgICAnLnN1Yi10aXRsZSc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5YUyxcbiAgICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzUsXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNSxcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0M1xuICAgICAgfSxcblxuICAgICAgJy5wYXNzd29yZC1pbnB1dCc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiA2MlxuICAgICAgfSxcblxuICAgICAgJy5mb3Jnb3QtcGFzc3dvcmQnOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNSxcbiAgICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc1LFxuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQ0LFxuICAgICAgICBtYXJnaW5Ub3A6IDI3XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiUmVzZXRXYWxsZXRNb2RhbCIsIlJFU0VUX1dBTExFVF9NT0RBTCIsInVzZVRyYW5zbGF0aW9uIiwidXNlVUlMb2NrIiwidXNlRm9jdXNCeUlkIiwia2V5cmluZ1VubG9jayIsInNpbXBsZUNoZWNrRm9ybSIsIkJ1dHRvbiIsIkZvcm0iLCJJbWFnZSIsIklucHV0IiwiTW9kYWxDb250ZXh0IiwiQ04iLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwic3R5bGVkIiwiRm9ybUZpZWxkTmFtZSIsInBhc3N3b3JkSW5wdXRJZCIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJhY3RpdmVNb2RhbCIsImZvcm0iLCJ1c2VGb3JtIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0Rpc2FibGUiLCJzZXRJc0Rpc2FibGUiLCJ1bmxvY2siLCJvblVwZGF0ZSIsImNoYW5nZWRGaWVsZHMiLCJhbGxGaWVsZHMiLCJlbXB0eSIsImVycm9yIiwib25FcnJvciIsInNldEZpZWxkcyIsIm5hbWUiLCJQQVNTV09SRCIsImVycm9ycyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3QiLCJvblN1Ym1pdCIsInZhbHVlcyIsInNldFRpbWVvdXQiLCJwYXNzd29yZCIsInRoZW4iLCJkYXRhIiwic3RhdHVzIiwiY2F0Y2giLCJlIiwibWVzc2FnZSIsImZpbmFsbHkiLCJvblJlc2V0IiwicmVxdWlyZWQiLCJMb2dpbiIsInRoZW1lIiwidG9rZW4iLCJwb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImhlaWdodCIsIndpZHRoIiwibGVmdCIsInRvcCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJvcGFjaXR5IiwibWFyZ2luVG9wIiwiY29sb3IiLCJjb2xvclRleHRCYXNlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsImZvbnRXZWlnaHRTdHJvbmciLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzMiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmczIiwibWFyZ2luWFMiLCJmb250U2l6ZUhlYWRpbmc1IiwibGluZUhlaWdodEhlYWRpbmc1IiwiY29sb3JUZXh0TGlnaHQzIiwiY3Vyc29yIiwiY29sb3JUZXh0TGlnaHQ0Il0sInNvdXJjZVJvb3QiOiIifQ==