"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Keyring_ChangePassword_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Keyring/ChangePassword.tsx":
/*!*****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Keyring/ChangePassword.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FloppyDiskBack.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldCheck.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0













var FormFieldName;
(function (FormFieldName) {
  FormFieldName["PASSWORD"] = "password";
  FormFieldName["OLD_PASSWORD"] = "old_password";
  FormFieldName["CONFIRM_PASSWORD"] = "confirm_password";
})(FormFieldName || (FormFieldName = {}));
const formName = 'change-password-form';
const Component = ({
  className
}) => {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useDefaultNavigate)();
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"].useForm();
  const [isDisabled, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const [submitError, setSubmitError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const newPasswordRules = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.renderBasePasswordRules)(t('New password'), t), [t]);
  const confirmPasswordRules = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.renderBaseConfirmPasswordRules)(FormFieldName.PASSWORD, t), [t]);
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    navigate('/settings/security');
  }, [navigate]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(values => {
    const password = values[FormFieldName.PASSWORD];
    const oldPassword = values[FormFieldName.OLD_PASSWORD];
    if (password && oldPassword) {
      setLoading(true);
      setTimeout(() => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_2__.keyringChangeMasterPassword)({
          createNew: false,
          newPassword: password,
          oldPassword: oldPassword
        }).then(res => {
          if (!res.status) {
            form.setFields([{
              name: FormFieldName.OLD_PASSWORD,
              errors: res.errors
            }]);
          } else {
            goHome();
          }
        }).catch(e => {
          form.setFields([{
            name: FormFieldName.OLD_PASSWORD,
            errors: [e.message]
          }]);
        }).finally(() => {
          setLoading(false);
        });
      }, 1000);
    }
  }, [form, goHome]);
  const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((changedFields, allFields) => {
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.simpleCheckForm)(allFields);
    setSubmitError('');
    setIsDisable(error || empty);
  }, []);
  const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    form.resetFields([FormFieldName.CONFIRM_PASSWORD]);
  }, [form]);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useFocusFormItem)(form, FormFieldName.OLD_PASSWORD);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: goBack,
      rightFooterButton: {
        children: t('Save'),
        onClick: form.submit,
        loading: loading,
        disabled: isDisabled,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
          weight: "fill"
        })
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
        onClick: goHome
      }],
      title: t('Change password'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "body-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "page-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
            color: "var(--page-icon-color)",
            iconProps: {
              weight: 'fill',
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"]
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "title",
          children: t('Change your password')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
          form: form,
          initialValues: {
            [FormFieldName.OLD_PASSWORD]: '',
            [FormFieldName.PASSWORD]: '',
            [FormFieldName.CONFIRM_PASSWORD]: ''
          },
          name: formName,
          onFieldsChange: onUpdate,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
            name: FormFieldName.OLD_PASSWORD,
            rules: [{
              message: t('Password is required'),
              required: true
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
              disabled: loading,
              placeholder: t('Current password'),
              type: "password"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
            name: FormFieldName.PASSWORD,
            rules: newPasswordRules,
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
              disabled: loading,
              onChange: onChangePassword,
              placeholder: t('New password'),
              type: "password"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
            name: FormFieldName.CONFIRM_PASSWORD,
            rules: confirmPasswordRules,
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {
              disabled: loading,
              placeholder: t('Confirm new password'),
              type: "password"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
            help: submitError,
            validateStatus: submitError && 'error'
          })]
        })]
      })
    })
  });
};
const ChangePassword = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(Component).withConfig({
  displayName: "ChangePassword",
  componentId: "sc-ge77kh-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.body-container': {
      padding: `0 ${token.padding}px`,
      textAlign: 'center',
      '.page-icon': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: token.margin,
        '--page-icon-color': token.colorSecondary
      },
      '.title': {
        marginTop: token.margin,
        marginBottom: token.margin * 2,
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeHeading3,
        lineHeight: token.lineHeightHeading3,
        color: token.colorTextBase
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePassword);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/FloppyDiskBack.esm.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/FloppyDiskBack.esm.js ***!
  \**************************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "104 80 160 80 160 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M208,40H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM128,176a28,28,0,1,1,28-28A28,28,0,0,1,128,176Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "96 80 160 80 160 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M208,32H172a4,4,0,0,0-4,4V80a8,8,0,0,1-8,8H96.3A8.2,8.2,0,0,1,88,80.5,8,8,0,0,1,96,72h56V36a4,4,0,0,0-4-4H91.3A15.9,15.9,0,0,0,80,36.7L36.7,80A15.9,15.9,0,0,0,32,91.3V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,176a28,28,0,1,1,28-28A28.1,28.1,0,0,1,128,176Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "96 80 160 80 160 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "96 80 160 80 160 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M40,91.3V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.3a7.9,7.9,0,0,0-5.6,2.3L42.3,85.7A7.9,7.9,0,0,0,40,91.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "128",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "96 80 160 80 160 40",
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

var FloppyDiskBack = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
FloppyDiskBack.displayName = "FloppyDiskBack";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloppyDiskBack);
//# sourceMappingURL=FloppyDiskBack.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfS2V5cmluZ19DaGFuZ2VQYXNzd29yZF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFeUY7QUFDaUI7QUFDckI7QUFFeUM7QUFDNUQ7QUFDdEM7QUFDaUM7QUFDQztBQUNmO0FBQ1I7QUFBQTtBQUFBO0FBQUEsSUFJbEN1QixhQUFhO0FBQUEsV0FBYkEsYUFBYTtFQUFiQSxhQUFhO0VBQWJBLGFBQWE7RUFBYkEsYUFBYTtBQUFBLEdBQWJBLGFBQWEsS0FBYkEsYUFBYTtBQVlsQixNQUFNQyxRQUFRLEdBQUcsc0JBQXNCO0FBRXZDLE1BQU1DLFNBQTBCLEdBQUcsQ0FBQztFQUFFQztBQUFpQixDQUFDLEtBQUs7RUFDM0QsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR3RCLGtGQUFjLEVBQUU7RUFDOUIsTUFBTXVCLFFBQVEsR0FBR1AsNkRBQVcsRUFBRTtFQUM5QixNQUFNO0lBQUVRO0VBQU8sQ0FBQyxHQUFHMUIsc0ZBQWtCLEVBQUU7RUFFdkMsTUFBTSxDQUFDMkIsSUFBSSxDQUFDLEdBQUdwQixtRUFBWSxFQUEyQjtFQUN0RCxNQUFNLENBQUNzQixVQUFVLEVBQUVDLFlBQVksQ0FBQyxHQUFHYiwrQ0FBUSxDQUFDLElBQUksQ0FBQztFQUNqRCxNQUFNLENBQUNjLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdmLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBRWxELE1BQU0sQ0FBQ2dCLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdqQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUU3QyxNQUFNa0IsZ0JBQWdCLEdBQUduQiw4Q0FBTyxDQUFDLE1BQU1YLDJGQUF1QixDQUFDbUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsRUFBRSxDQUFDQSxDQUFDLENBQUMsQ0FBQztFQUMxRixNQUFNWSxvQkFBb0IsR0FBR3BCLDhD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UUFBUSwwREFBbUI7QUFDdEU7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLFNBQVMsc0VBQW1CO0FBQzVCOztBQUVBLGtDQUFrQyxpREFBVTtBQUM1QyxTQUFTLDBEQUFtQixDQUFDLDREQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9LZXlyaW5nL0NoYW5nZVBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9waG9zcGhvci1yZWFjdC9kaXN0L2ljb25zL0Zsb3BweURpc2tCYWNrLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgQ2xvc2VJY29uLCBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURlZmF1bHROYXZpZ2F0ZSwgdXNlRm9jdXNGb3JtSXRlbSwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB7IGtleXJpbmdDaGFuZ2VNYXN0ZXJQYXNzd29yZCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IEZvcm1DYWxsYmFja3MsIEZvcm1GaWVsZERhdGEsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IHJlbmRlckJhc2VDb25maXJtUGFzc3dvcmRSdWxlcywgcmVuZGVyQmFzZVBhc3N3b3JkUnVsZXMsIHNpbXBsZUNoZWNrRm9ybSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgRm9ybSwgSWNvbiwgSW5wdXQsIFBhZ2VJY29uIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGbG9wcHlEaXNrQmFjaywgU2hpZWxkQ2hlY2sgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wc1xuXG5lbnVtIEZvcm1GaWVsZE5hbWUge1xuICBQQVNTV09SRCA9ICdwYXNzd29yZCcsXG4gIE9MRF9QQVNTV09SRCA9ICdvbGRfcGFzc3dvcmQnLFxuICBDT05GSVJNX1BBU1NXT1JEID0gJ2NvbmZpcm1fcGFzc3dvcmQnLFxufVxuXG5pbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtU3RhdGUge1xuICBbRm9ybUZpZWxkTmFtZS5QQVNTV09SRF06IHN0cmluZztcbiAgW0Zvcm1GaWVsZE5hbWUuT0xEX1BBU1NXT1JEXTogc3RyaW5nO1xuICBbRm9ybUZpZWxkTmFtZS5DT05GSVJNX1BBU1NXT1JEXTogc3RyaW5nO1xufVxuXG5jb25zdCBmb3JtTmFtZSA9ICdjaGFuZ2UtcGFzc3dvcmQtZm9ybSc7XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG5cbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtPENoYW5nZVBhc3N3b3JkRm9ybVN0YXRlPigpO1xuICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0SXNEaXNhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3VibWl0RXJyb3IsIHNldFN1Ym1pdEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbmV3UGFzc3dvcmRSdWxlcyA9IHVzZU1lbW8oKCkgPT4gcmVuZGVyQmFzZVBhc3N3b3JkUnVsZXModCgnTmV3IHBhc3N3b3JkJyksIHQpLCBbdF0pO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRSdWxlcyA9IHVzZU1lbW8oKCkgPT4gcmVuZGVyQmFzZUNvbmZpcm1QYXNzd29yZFJ1bGVzKEZvcm1GaWVsZE5hbWUuUEFTU1dPUkQsIHQpLCBbdF0pO1xuXG4gIGNvbnN0IGdvQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgnL3NldHRpbmdzL3NlY3VyaXR5Jyk7XG4gIH0sIFtuYXZpZ2F0ZV0pO1xuXG4gIGNvbnN0IG9uU3VibWl0OiBGb3JtQ2FsbGJhY2tzPENoYW5nZVBhc3N3b3JkRm9ybVN0YXRlPlsnb25GaW5pc2gnXSA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IENoYW5nZVBhc3N3b3JkRm9ybVN0YXRlKSA9PiB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB2YWx1ZXNbRm9ybUZpZWxkTmFtZS5QQVNTV09SRF07XG4gICAgY29uc3Qgb2xkUGFzc3dvcmQgPSB2YWx1ZXNbRm9ybUZpZWxkTmFtZS5PTERfUEFTU1dPUkRdO1xuXG4gICAgaWYgKHBhc3N3b3JkICYmIG9sZFBhc3N3b3JkKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGtleXJpbmdDaGFuZ2VNYXN0ZXJQYXNzd29yZCh7XG4gICAgICAgICAgY3JlYXRlTmV3OiBmYWxzZSxcbiAgICAgICAgICBuZXdQYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLnN0YXR1cykge1xuICAgICAgICAgICAgZm9ybS5zZXRGaWVsZHMoW3sgbmFtZTogRm9ybUZpZWxkTmFtZS5PTERfUEFTU1dPUkQsIGVycm9yczogcmVzLmVycm9ycyB9XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdvSG9tZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgZm9ybS5zZXRGaWVsZHMoW3sgbmFtZTogRm9ybUZpZWxkTmFtZS5PTERfUEFTU1dPUkQsIGVycm9yczogW2UubWVzc2FnZV0gfV0pO1xuICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH0sIFtmb3JtLCBnb0hvbWVdKTtcblxuICBjb25zdCBvblVwZGF0ZTogRm9ybUNhbGxiYWNrczxDaGFuZ2VQYXNzd29yZEZvcm1TdGF0ZT5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSkgPT4ge1xuICAgIGNvbnN0IHsgZW1wdHksIGVycm9yIH0gPSBzaW1wbGVDaGVja0Zvcm0oYWxsRmllbGRzKTtcblxuICAgIHNldFN1Ym1pdEVycm9yKCcnKTtcbiAgICBzZXRJc0Rpc2FibGUoZXJyb3IgfHwgZW1wdHkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBmb3JtLnJlc2V0RmllbGRzKFtGb3JtRmllbGROYW1lLkNPTkZJUk1fUEFTU1dPUkRdKTtcbiAgfSwgW2Zvcm1dKTtcblxuICB1c2VGb2N1c0Zvcm1JdGVtKGZvcm0sIEZvcm1GaWVsZE5hbWUuT0xEX1BBU1NXT1JEKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlciBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9PlxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICBvbkJhY2s9e2dvQmFja31cbiAgICAgICAgcmlnaHRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICBjaGlsZHJlbjogdCgnU2F2ZScpLFxuICAgICAgICAgIG9uQ2xpY2s6IGZvcm0uc3VibWl0LFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgaWNvbjogKFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtGbG9wcHlEaXNrQmFja31cbiAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogPENsb3NlSWNvbiAvPixcbiAgICAgICAgICAgIG9uQ2xpY2s6IGdvSG9tZVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgdGl0bGU9e3QoJ0NoYW5nZSBwYXNzd29yZCcpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keS1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLWljb24nPlxuICAgICAgICAgICAgPFBhZ2VJY29uXG4gICAgICAgICAgICAgIGNvbG9yPSd2YXIoLS1wYWdlLWljb24tY29sb3IpJ1xuICAgICAgICAgICAgICBpY29uUHJvcHM9e3tcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdmaWxsJyxcbiAgICAgICAgICAgICAgICBwaG9zcGhvckljb246IFNoaWVsZENoZWNrXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgICAgICB7dCgnQ2hhbmdlIHlvdXIgcGFzc3dvcmQnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgW0Zvcm1GaWVsZE5hbWUuT0xEX1BBU1NXT1JEXTogJycsXG4gICAgICAgICAgICAgIFtGb3JtRmllbGROYW1lLlBBU1NXT1JEXTogJycsXG4gICAgICAgICAgICAgIFtGb3JtRmllbGROYW1lLkNPTkZJUk1fUEFTU1dPUkRdOiAnJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG5hbWU9e2Zvcm1OYW1lfVxuICAgICAgICAgICAgb25GaWVsZHNDaGFuZ2U9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17Rm9ybUZpZWxkTmFtZS5PTERfUEFTU1dPUkR9XG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnQ3VycmVudCBwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9e0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkR9XG4gICAgICAgICAgICAgIHJ1bGVzPXtuZXdQYXNzd29yZFJ1bGVzfVxuICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnTmV3IHBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17Rm9ybUZpZWxkTmFtZS5DT05GSVJNX1BBU1NXT1JEfVxuICAgICAgICAgICAgICBydWxlcz17Y29uZmlybVBhc3N3b3JkUnVsZXN9XG4gICAgICAgICAgICAgIHN0YXR1c0hlbHBBc1Rvb2x0aXA9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdDb25maXJtIG5ldyBwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIGhlbHA9e3N1Ym1pdEVycm9yfVxuICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17c3VibWl0RXJyb3IgJiYgJ2Vycm9yJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBDaGFuZ2VQYXNzd29yZCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5ib2R5LWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuXG4gICAgICAnLnBhZ2UtaWNvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgICAnLS1wYWdlLWljb24tY29sb3InOiB0b2tlbi5jb2xvclNlY29uZGFyeVxuICAgICAgfSxcblxuICAgICAgJy50aXRsZSc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW4sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luICogMixcbiAgICAgICAgZm9udFdlaWdodDogdG9rZW4uZm9udFdlaWdodFN0cm9uZyxcbiAgICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzMsXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nMyxcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dEJhc2VcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlUGFzc3dvcmQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MCw5MS4zVjIwOGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjQ4YTgsOCwwLDAsMC04LThIOTEuM2E3LjksNy45LDAsMCwwLTUuNiwyLjNMNDIuMyw4NS43QTcuOSw3LjksMCwwLDAsNDAsOTEuM1pcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjE0OFwiLFxuICAgIHI6IFwiMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEwNCA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJkdW90b25lXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIwOCw0MEg5MS4zYTcuOSw3LjksMCwwLDAtNS42LDIuM0w0Mi4zLDg1LjdBNy45LDcuOSwwLDAsMCw0MCw5MS4zVjIwOGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjQ4QTgsOCwwLDAsMCwyMDgsNDBaTTEyOCwxNzZhMjgsMjgsMCwxLDEsMjgtMjhBMjgsMjgsMCwwLDEsMTI4LDE3NlpcIixcbiAgICBvcGFjaXR5OiBcIjAuMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDAsOTEuM1YyMDhhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY0OGE4LDgsMCwwLDAtOC04SDkxLjNhNy45LDcuOSwwLDAsMC01LjYsMi4zTDQyLjMsODUuN0E3LjksNy45LDAsMCwwLDQwLDkxLjNaXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxNDhcIixcbiAgICByOiBcIjI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI5NiA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJmaWxsXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMDgsMzJIMTcyYTQsNCwwLDAsMC00LDRWODBhOCw4LDAsMCwxLTgsOEg5Ni4zQTguMiw4LjIsMCwwLDEsODgsODAuNSw4LDgsMCwwLDEsOTYsNzJoNTZWMzZhNCw0LDAsMCwwLTQtNEg5MS4zQTE1LjksMTUuOSwwLDAsMCw4MCwzNi43TDM2LjcsODBBMTUuOSwxNS45LDAsMCwwLDMyLDkxLjNWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEyOCwxNzZhMjgsMjgsMCwxLDEsMjgtMjhBMjguMSwyOC4xLDAsMCwxLDEyOCwxNzZaXCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImxpZ2h0XCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQwLDkxLjNWMjA4YTgsOCwwLDAsMCw4LDhIMjA4YTgsOCwwLDAsMCw4LThWNDhhOCw4LDAsMCwwLTgtOEg5MS4zYTcuOSw3LjksMCwwLDAtNS42LDIuM0w0Mi4zLDg1LjdBNy45LDcuOSwwLDAsMCw0MCw5MS4zWlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTQ4XCIsXG4gICAgcjogXCIyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiOTYgODAgMTYwIDgwIDE2MCA0MFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MCw5MS4zVjIwOGE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjQ4YTgsOCwwLDAsMC04LThIOTEuM2E3LjksNy45LDAsMCwwLTUuNiwyLjNMNDIuMyw4NS43QTcuOSw3LjksMCwwLDAsNDAsOTEuM1pcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTQ4XCIsXG4gICAgcjogXCIyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI5NiA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInJlZ3VsYXJcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDAsOTEuM1YyMDhhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY0OGE4LDgsMCwwLDAtOC04SDkxLjNhNy45LDcuOSwwLDAsMC01LjYsMi4zTDQyLjMsODUuN0E3LjksNy45LDAsMCwwLDQwLDkxLjNaXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxNDhcIixcbiAgICByOiBcIjI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCI5NiA4MCAxNjAgODAgMTYwIDQwXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBGbG9wcHlEaXNrQmFjayA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CYXNlLCBPYmplY3QuYXNzaWduKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIHJlbmRlclBhdGg6IHJlbmRlclBhdGhcbiAgfSkpO1xufSk7XG5GbG9wcHlEaXNrQmFjay5kaXNwbGF5TmFtZSA9IFwiRmxvcHB5RGlza0JhY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgRmxvcHB5RGlza0JhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GbG9wcHlEaXNrQmFjay5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiQ2xvc2VJY29uIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJ1c2VGb2N1c0Zvcm1JdGVtIiwidXNlVHJhbnNsYXRpb24iLCJrZXlyaW5nQ2hhbmdlTWFzdGVyUGFzc3dvcmQiLCJyZW5kZXJCYXNlQ29uZmlybVBhc3N3b3JkUnVsZXMiLCJyZW5kZXJCYXNlUGFzc3dvcmRSdWxlcyIsInNpbXBsZUNoZWNrRm9ybSIsIkZvcm0iLCJJY29uIiwiSW5wdXQiLCJQYWdlSWNvbiIsIkNOIiwiRmxvcHB5RGlza0JhY2siLCJTaGllbGRDaGVjayIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsIkZvcm1GaWVsZE5hbWUiLCJmb3JtTmFtZSIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJuYXZpZ2F0ZSIsImdvSG9tZSIsImZvcm0iLCJ1c2VGb3JtIiwiaXNEaXNhYmxlZCIsInNldElzRGlzYWJsZSIsInN1Ym1pdEVycm9yIiwic2V0U3VibWl0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm5ld1Bhc3N3b3JkUnVsZXMiLCJjb25maXJtUGFzc3dvcmRSdWxlcyIsIlBBU1NXT1JEIiwiZ29CYWNrIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJwYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiT0xEX1BBU1NXT1JEIiwic2V0VGltZW91dCIsImNyZWF0ZU5ldyIsIm5ld1Bhc3N3b3JkIiwidGhlbiIsInJlcyIsInN0YXR1cyIsInNldEZpZWxkcyIsIm5hbWUiLCJlcnJvcnMiLCJjYXRjaCIsImUiLCJtZXNzYWdlIiwiZmluYWxseSIsIm9uVXBkYXRlIiwiY2hhbmdlZEZpZWxkcyIsImFsbEZpZWxkcyIsImVtcHR5IiwiZXJyb3IiLCJvbkNoYW5nZVBhc3N3b3JkIiwicmVzZXRGaWVsZHMiLCJDT05GSVJNX1BBU1NXT1JEIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwic3VibWl0IiwiZGlzYWJsZWQiLCJpY29uIiwid2VpZ2h0IiwicGhvc3Bob3JJY29uIiwicmVxdWlyZWQiLCJDaGFuZ2VQYXNzd29yZCIsInRoZW1lIiwidG9rZW4iLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwibWFyZ2luIiwiY29sb3JTZWNvbmRhcnkiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwiZm9udFdlaWdodFN0cm9uZyIsImZvbnRTaXplIiwiZm9udFNpemVIZWFkaW5nMyIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzMiLCJjb2xvciIsImNvbG9yVGV4dEJhc2UiXSwic291cmNlUm9vdCI6IiJ9