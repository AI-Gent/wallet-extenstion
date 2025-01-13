"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Keyring_CreatePassword_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Keyring/CreatePassword.tsx":
/*!*****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Keyring/CreatePassword.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_InfoIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/InfoIcon */ "../extension-koni-ui/src/components/Icon/InfoIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/modal */ "../extension-koni-ui/src/constants/modal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/router */ "../extension-koni-ui/src/constants/router.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_form_useFocusFormItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/form/useFocusFormItem */ "../extension-koni-ui/src/hooks/form/useFocusFormItem.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_account_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/account/account */ "../extension-koni-ui/src/utils/account/account.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/form/form */ "../extension-koni-ui/src/utils/form/form.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_form_validators_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/form/validators/password */ "../extension-koni-ui/src/utils/form/validators/password.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldPlus.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CaretLeft.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




















var FormFieldName;
(function (FormFieldName) {
  FormFieldName["PASSWORD"] = "password";
  FormFieldName["CONFIRM_PASSWORD"] = "confirm_password";
})(FormFieldName || (FormFieldName = {}));
const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
  weight: "fill"
});
const modalId = 'create-password-instruction-modal';
const formName = 'create-password-form';
const Component = ({
  className
}) => {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    activeModal,
    checkActive,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__.ModalContext);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useNavigate)();
  const previousInfo = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useLocation)().state;
  const {
    accounts
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.accountState);
  const [noAccount] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)((0,_subwallet_extension_koni_ui_utils_account_account__WEBPACK_IMPORTED_MODULE_7__.isNoAccount)(accounts));
  const passwordRules = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => (0,_subwallet_extension_koni_ui_utils_form_validators_password__WEBPACK_IMPORTED_MODULE_9__.renderBasePasswordRules)(t('Password'), t), [t]);
  const confirmPasswordRules = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => (0,_subwallet_extension_koni_ui_utils_form_validators_password__WEBPACK_IMPORTED_MODULE_9__.renderBaseConfirmPasswordRules)(FormFieldName.PASSWORD, t), [t]);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].useForm();
  const [isDisabled, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(true);
  const [submitError, setSubmitError] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
  const onComplete = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    if (previousInfo !== null && previousInfo !== void 0 && previousInfo.prevPathname) {
      navigate(previousInfo.prevPathname, {
        state: previousInfo.prevState
      });
    } else {
      navigate(_subwallet_extension_koni_ui_constants_router__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ROUTER_PATH);
    }
  }, [navigate, previousInfo === null || previousInfo === void 0 ? void 0 : previousInfo.prevPathname, previousInfo === null || previousInfo === void 0 ? void 0 : previousInfo.prevState]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(values => {
    const password = values[FormFieldName.PASSWORD];
    if (password) {
      setLoading(true);
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_6__.keyringChangeMasterPassword)({
        createNew: true,
        newPassword: password
      }).then(res => {
        if (!res.status) {
          setSubmitError(res.errors[0]);
        } else {
          onComplete();
        }
      }).catch(e => {
        setSubmitError(e.message);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [onComplete]);
  const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((changedFields, allFields) => {
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_8__.simpleCheckForm)(allFields);
    setSubmitError('');
    setIsDisable(error || empty);
  }, []);
  const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    form.resetFields([FormFieldName.CONFIRM_PASSWORD]);
  }, [form]);
  const openModal = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    activeModal(modalId);
  }, [activeModal]);
  const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    inactiveModal(modalId);
  }, [inactiveModal]);
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    if (!noAccount) {
      activeModal(_subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_2__.REQUEST_CREATE_PASSWORD_MODAL);
    }
  }, [activeModal, noAccount]);
  (0,_subwallet_extension_koni_ui_hooks_form_useFocusFormItem__WEBPACK_IMPORTED_MODULE_5__["default"])(form, FormFieldName.PASSWORD, !checkActive(_subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_2__.REQUEST_CREATE_PASSWORD_MODAL));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      rightFooterButton: {
        children: t('Continue'),
        onClick: form.submit,
        loading: loading,
        disabled: isDisabled,
        icon: FooterIcon
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components_Icon_InfoIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
        onClick: openModal
      }],
      title: t('Create a password'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "body-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "page-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
            color: "var(--page-icon-color)",
            iconProps: {
              weight: 'fill',
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_20__["default"]
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "title",
          children: t('Create a password')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
          form: form,
          initialValues: {
            [FormFieldName.PASSWORD]: '',
            [FormFieldName.CONFIRM_PASSWORD]: ''
          },
          name: formName,
          onFieldsChange: onUpdate,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            name: FormFieldName.PASSWORD,
            rules: passwordRules,
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              onChange: onChangePassword,
              placeholder: t('Enter password'),
              type: "password"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            name: FormFieldName.CONFIRM_PASSWORD,
            rules: confirmPasswordRules,
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              placeholder: t('Confirm password'),
              type: "password"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AlertBox, {
              description: t('8 characters at least. Uppercase, numbers, and special characters are recommended.'),
              title: t('Always choose a strong password!'),
              type: "warning"
            })
          }), submitError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            help: submitError,
            validateStatus: "error"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
          closeIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_23__["default"],
            size: "sm"
          }),
          id: modalId,
          onCancel: closeModal,
          rightIconProps: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components_Icon_InfoIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
          },
          title: t('Instructions'),
          wrapClassName: className,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "instruction-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AlertBox, {
              description: t('For your wallet protection, SubWallet locks your wallet after 15 minutes of inactivity. You will need this password to unlock it.'),
              title: t('Why do I need to enter a password?')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AlertBox, {
              description: t('The password is stored securely on your device. We will not be able to recover it for you, so make sure you remember it!'),
              title: t('Can I recover a password?')
            })]
          })
        })]
      })
    })
  });
};
const CreatePassword = (0,styled_components__WEBPACK_IMPORTED_MODULE_24__["default"])(Component).withConfig({
  displayName: "CreatePassword",
  componentId: "sc-y8wcce-0"
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
    },
    '.ant-form-item:last-child': {
      marginBottom: 0
    },
    '.instruction-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeXS
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePassword);

/***/ }),

/***/ "../extension-koni-ui/src/utils/form/form.ts":
/*!***************************************************!*\
  !*** ../extension-koni-ui/src/utils/form/form.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertFieldToError": () => (/* binding */ convertFieldToError),
/* harmony export */   "convertFieldToObject": () => (/* binding */ convertFieldToObject),
/* harmony export */   "simpleCheckForm": () => (/* binding */ simpleCheckForm)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/is/array.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


function convertFieldToObject(fields) {
  const rs = fields.reduce((data, {
    name,
    value
  }) => {
    data[name] = value;
    return data;
  }, {});
  return rs;
}
function convertFieldToError(fields) {
  return fields.reduce((data, {
    errors,
    name
  }) => {
    data[name] = errors || [];
    return data;
  }, {});
}
const simpleCheckForm = (allFields, ignoreFields) => {
  const error = allFields.map(data => data.errors || []).reduce((old, value) => [...old, ...value], []).some(value => !!value);
  const empty = allFields.some(data => {
    const value = data.value;
    const names = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(data.name) ? data.name : [data.name];
    const isIgnore = ignoreFields === null || ignoreFields === void 0 ? void 0 : ignoreFields.some(name => names.includes(name));
    return isIgnore ? false : typeof value === 'boolean' ? false : !value;
  });
  return {
    error,
    empty
  };
};

/***/ }),

/***/ "../extension-koni-ui/src/utils/form/validators/password.ts":
/*!******************************************************************!*\
  !*** ../extension-koni-ui/src/utils/form/validators/password.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinPasswordLength": () => (/* binding */ MinPasswordLength),
/* harmony export */   "renderBaseConfirmPasswordRules": () => (/* binding */ renderBaseConfirmPasswordRules),
/* harmony export */   "renderBasePasswordRules": () => (/* binding */ renderBasePasswordRules)
/* harmony export */ });
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

const MinPasswordLength = 8;

// (?=.*\d): should contain at least one digit
// (?=.*[a-z]): should contain at least one lower case
// (?=.*[A-Z]): should contain at least one upper case
// (?=.*[~!@#$%^&*]): should contain at least one special character in listed
// [A-Za-z\d~!@#$%^&*]{8,}: should contain at least 8 from the mentioned characters

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,}$/;
const renderBasePasswordRules = (fieldName, t) => {
  return [{
    message: t('{{fieldName}} must be at least {{minLen}} characters in length', {
      replace: {
        minLen: MinPasswordLength,
        fieldName: fieldName
      }
    }),
    min: MinPasswordLength
  }, {
    message: t('{{fieldName}} is required', {
      replace: {
        fieldName: fieldName
      }
    }),
    required: true
  }, {
    message: t('{{fieldName}} should be at least 1 uppercase letter, 1 number, and 1 special character', {
      replace: {
        fieldName: fieldName
      }
    }),
    pattern: passwordRegex,
    warningOnly: true
  }];
};
const renderBaseConfirmPasswordRules = (passwordFieldName, t) => {
  return [...renderBasePasswordRules(t('Confirm password'), t), ({
    getFieldValue
  }) => ({
    validator: (_, value) => {
      const password = getFieldValue(passwordFieldName);
      if (!value || password === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(t('Confirm password do not match!')));
    }
  })];
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfS2V5cmluZ19DcmVhdGVQYXNzd29yZF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRXdGO0FBQ1g7QUFDZ0I7QUFDVDtBQUNFO0FBQ0U7QUFDSDtBQUdKO0FBQ0Y7QUFDdUQ7QUFDN0M7QUFDN0Q7QUFDd0M7QUFFaUI7QUFDM0M7QUFDa0I7QUFDckI7QUFBQTtBQUFBO0FBQUEsSUFJbENpQyxhQUFhO0FBQUEsV0FBYkEsYUFBYTtFQUFiQSxhQUFhO0VBQWJBLGFBQWE7QUFBQSxHQUFiQSxhQUFhLEtBQWJBLGFBQWE7QUFVbEIsTUFBTUMsVUFBVSxnQkFDZCx3REFBQyw0REFBSTtFQUNILFlBQVksRUFBRWIsdURBQVk7RUFDMUIsTUFBTSxFQUFDO0FBQU0sRUFFaEI7QUFFRCxNQUFNYyxPQUFPLEdBQUcsbUNBQW1DO0FBQ25ELE1BQU1DLFFBQVEsR0FBRyxzQkFBc0I7QUFFdkMsTUFBTUMsU0FBMEIsR0FBRyxDQUFDO0VBQUVDO0FBQWlCLENBQUMsS0FBSztFQUMzRCxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHakMsb0dBQWMsRUFBRTtFQUM5QixNQUFNO0lBQUVrQyxXQUFXO0lBQUVDLFdBQVc7SUFBRUM7RUFBYyxDQUFDLEdBQUdqQixrREFBVSxDQUFDVCw4REFBWSxDQUFDO0VBQzVFLE1BQU0yQixRQUFRLEdBQUdaLDhEQUFXLEVBQUU7RUFDOUIsTUFBTWEsWUFBWSxHQUFHZCw4REFBVyxFQUFFLENBQUNlLEtBQWlEO0VBRXBGLE1BQU07SUFBRUM7RUFBUyxDQUFDLEdBQUdqQix5REFBVyxDQUFFZ0IsS0FBZ0IsSUFBS0EsS0FBSyxDQUFDRSxZQUFZLENBQUM7RUFFMUUsTUFBTSxDQUFDQyxTQUFTLENBQUMsR0FBR3BCLGdEQUFRLENBQUNuQiwrRkFBVyxDQUFDcUMsUUFBUSxDQUFDLENBQUM7RUFFbkQsTUFB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Q0FBQ2xCLEtBQUssSUFBSXpELFFBQVEsS0FBS3lELEtBQUssRUFBRTtRQUNoQyxPQUFPc0IsT0FBTyxDQUFDQyxPQUFPLEVBQUU7TUFDMUI7TUFFQSxPQUFPRCxPQUFPLENBQUNFLE1BQU0sQ0FBQyxJQUFJQyxLQUFLLENBQUM1RyxDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFO0VBQ0YsQ0FBQyxDQUFDLENBQ0g7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvS2V5cmluZy9DcmVhdGVQYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvdXRpbHMvZm9ybS9mb3JtLnRzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL3V0aWxzL2Zvcm0vdmFsaWRhdG9ycy9wYXNzd29yZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgQWxlcnRCb3gsIExheW91dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9JY29uL0luZm9JY29uJztcbmltcG9ydCB7IFJFUVVFU1RfQ1JFQVRFX1BBU1NXT1JEX01PREFMIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMvbW9kYWwnO1xuaW1wb3J0IHsgREVGQVVMVF9ST1VURVJfUEFUSCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzL3JvdXRlcic7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZUZvY3VzRm9ybUl0ZW0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9mb3JtL3VzZUZvY3VzRm9ybUl0ZW0nO1xuaW1wb3J0IHsga2V5cmluZ0NoYW5nZU1hc3RlclBhc3N3b3JkIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgaXNOb0FjY291bnQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzL2FjY291bnQvYWNjb3VudCc7XG5pbXBvcnQgeyBzaW1wbGVDaGVja0Zvcm0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzL2Zvcm0vZm9ybSc7XG5pbXBvcnQgeyByZW5kZXJCYXNlQ29uZmlybVBhc3N3b3JkUnVsZXMsIHJlbmRlckJhc2VQYXNzd29yZFJ1bGVzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9mb3JtL3ZhbGlkYXRvcnMvcGFzc3dvcmQnO1xuaW1wb3J0IHsgRm9ybSwgSWNvbiwgSW5wdXQsIE1vZGFsQ29udGV4dCwgUGFnZUljb24sIFN3TW9kYWwgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENhcmV0TGVmdCwgQ2hlY2tDaXJjbGUsIFNoaWVsZFBsdXMgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgeyBDYWxsYmFja3MsIEZpZWxkRGF0YSB9IGZyb20gJ3JjLWZpZWxkLWZvcm0vbGliL2ludGVyZmFjZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzXG5cbmVudW0gRm9ybUZpZWxkTmFtZSB7XG4gIFBBU1NXT1JEID0gJ3Bhc3N3b3JkJyxcbiAgQ09ORklSTV9QQVNTV09SRCA9ICdjb25maXJtX3Bhc3N3b3JkJyxcbn1cblxuaW50ZXJmYWNlIENyZWF0ZVBhc3N3b3JkRm9ybVN0YXRlIHtcbiAgW0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkRdOiBzdHJpbmc7XG4gIFtGb3JtRmllbGROYW1lLkNPTkZJUk1fUEFTU1dPUkRdOiBzdHJpbmc7XG59XG5cbmNvbnN0IEZvb3Rlckljb24gPSAoXG4gIDxJY29uXG4gICAgcGhvc3Bob3JJY29uPXtDaGVja0NpcmNsZX1cbiAgICB3ZWlnaHQ9J2ZpbGwnXG4gIC8+XG4pO1xuXG5jb25zdCBtb2RhbElkID0gJ2NyZWF0ZS1wYXNzd29yZC1pbnN0cnVjdGlvbi1tb2RhbCc7XG5jb25zdCBmb3JtTmFtZSA9ICdjcmVhdGUtcGFzc3dvcmQtZm9ybSc7XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBhY3RpdmVNb2RhbCwgY2hlY2tBY3RpdmUsIGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBwcmV2aW91c0luZm8gPSB1c2VMb2NhdGlvbigpLnN0YXRlIGFzIHsgcHJldlBhdGhuYW1lOiBzdHJpbmcsIHByZXZTdGF0ZTogYW55IH07XG5cbiAgY29uc3QgeyBhY2NvdW50cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFjY291bnRTdGF0ZSk7XG5cbiAgY29uc3QgW25vQWNjb3VudF0gPSB1c2VTdGF0ZShpc05vQWNjb3VudChhY2NvdW50cykpO1xuXG4gIGNvbnN0IHBhc3N3b3JkUnVsZXMgPSB1c2VNZW1vKCgpID0+IHJlbmRlckJhc2VQYXNzd29yZFJ1bGVzKHQoJ1Bhc3N3b3JkJyksIHQpLCBbdF0pO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRSdWxlcyA9IHVzZU1lbW8oKCkgPT4gcmVuZGVyQmFzZUNvbmZpcm1QYXNzd29yZFJ1bGVzKEZvcm1GaWVsZE5hbWUuUEFTU1dPUkQsIHQpLCBbdF0pO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxDcmVhdGVQYXNzd29yZEZvcm1TdGF0ZT4oKTtcbiAgY29uc3QgW2lzRGlzYWJsZWQsIHNldElzRGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3N1Ym1pdEVycm9yLCBzZXRTdWJtaXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ29tcGxldGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHByZXZpb3VzSW5mbz8ucHJldlBhdGhuYW1lKSB7XG4gICAgICBuYXZpZ2F0ZShwcmV2aW91c0luZm8ucHJldlBhdGhuYW1lLCB7IHN0YXRlOiBwcmV2aW91c0luZm8ucHJldlN0YXRlIGFzIHVua25vd24gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmlnYXRlKERFRkFVTFRfUk9VVEVSX1BBVEgpO1xuICAgIH1cbiAgfSwgW25hdmlnYXRlLCBwcmV2aW91c0luZm8/LnByZXZQYXRobmFtZSwgcHJldmlvdXNJbmZvPy5wcmV2U3RhdGVdKTtcblxuICBjb25zdCBvblN1Ym1pdDogQ2FsbGJhY2tzPENyZWF0ZVBhc3N3b3JkRm9ybVN0YXRlPlsnb25GaW5pc2gnXSA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IENyZWF0ZVBhc3N3b3JkRm9ybVN0YXRlKSA9PiB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB2YWx1ZXNbRm9ybUZpZWxkTmFtZS5QQVNTV09SRF07XG5cbiAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBrZXlyaW5nQ2hhbmdlTWFzdGVyUGFzc3dvcmQoe1xuICAgICAgICBjcmVhdGVOZXc6IHRydWUsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmICghcmVzLnN0YXR1cykge1xuICAgICAgICAgIHNldFN1Ym1pdEVycm9yKHJlcy5lcnJvcnNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdEVycm9yKGUubWVzc2FnZSk7XG4gICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtvbkNvbXBsZXRlXSk7XG5cbiAgY29uc3Qgb25VcGRhdGU6IENhbGxiYWNrczxDcmVhdGVQYXNzd29yZEZvcm1TdGF0ZT5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRmllbGREYXRhW10sIGFsbEZpZWxkczogRmllbGREYXRhW10pID0+IHtcbiAgICBjb25zdCB7IGVtcHR5LCBlcnJvciB9ID0gc2ltcGxlQ2hlY2tGb3JtKGFsbEZpZWxkcyk7XG5cbiAgICBzZXRTdWJtaXRFcnJvcignJyk7XG4gICAgc2V0SXNEaXNhYmxlKGVycm9yIHx8IGVtcHR5KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZm9ybS5yZXNldEZpZWxkcyhbRm9ybUZpZWxkTmFtZS5DT05GSVJNX1BBU1NXT1JEXSk7XG4gIH0sIFtmb3JtXSk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGFjdGl2ZU1vZGFsKG1vZGFsSWQpO1xuICB9LCBbYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGluYWN0aXZlTW9kYWwobW9kYWxJZCk7XG4gIH0sIFtpbmFjdGl2ZU1vZGFsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW5vQWNjb3VudCkge1xuICAgICAgYWN0aXZlTW9kYWwoUkVRVUVTVF9DUkVBVEVfUEFTU1dPUkRfTU9EQUwpO1xuICAgIH1cbiAgfSwgW2FjdGl2ZU1vZGFsLCBub0FjY291bnRdKTtcblxuICB1c2VGb2N1c0Zvcm1JdGVtKGZvcm0sIEZvcm1GaWVsZE5hbWUuUEFTU1dPUkQsICFjaGVja0FjdGl2ZShSRVFVRVNUX0NSRUFURV9QQVNTV09SRF9NT0RBTCkpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX0+XG4gICAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICAgIHJpZ2h0Rm9vdGVyQnV0dG9uPXt7XG4gICAgICAgICAgY2hpbGRyZW46IHQoJ0NvbnRpbnVlJyksXG4gICAgICAgICAgb25DbGljazogZm9ybS5zdWJtaXQsXG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpY29uOiBGb290ZXJJY29uXG4gICAgICAgIH19XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogPEluZm9JY29uIC8+LFxuICAgICAgICAgICAgb25DbGljazogb3Blbk1vZGFsXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgICB0aXRsZT17dCgnQ3JlYXRlIGEgcGFzc3dvcmQnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHktY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS1pY29uJz5cbiAgICAgICAgICAgIDxQYWdlSWNvblxuICAgICAgICAgICAgICBjb2xvcj0ndmFyKC0tcGFnZS1pY29uLWNvbG9yKSdcbiAgICAgICAgICAgICAgaWNvblByb3BzPXt7XG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAnZmlsbCcsXG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uOiBTaGllbGRQbHVzXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgICAgICB7dCgnQ3JlYXRlIGEgcGFzc3dvcmQnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgW0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkRdOiAnJyxcbiAgICAgICAgICAgICAgW0Zvcm1GaWVsZE5hbWUuQ09ORklSTV9QQVNTV09SRF06ICcnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbmFtZT17Zm9ybU5hbWV9XG4gICAgICAgICAgICBvbkZpZWxkc0NoYW5nZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBuYW1lPXtGb3JtRmllbGROYW1lLlBBU1NXT1JEfVxuICAgICAgICAgICAgICBydWxlcz17cGFzc3dvcmRSdWxlc31cbiAgICAgICAgICAgICAgc3RhdHVzSGVscEFzVG9vbHRpcD17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ0VudGVyIHBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17Rm9ybUZpZWxkTmFtZS5DT05GSVJNX1BBU1NXT1JEfVxuICAgICAgICAgICAgICBydWxlcz17Y29uZmlybVBhc3N3b3JkUnVsZXN9XG4gICAgICAgICAgICAgIHN0YXR1c0hlbHBBc1Rvb2x0aXA9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdDb25maXJtIHBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxBbGVydEJveFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCc4IGNoYXJhY3RlcnMgYXQgbGVhc3QuIFVwcGVyY2FzZSwgbnVtYmVycywgYW5kIHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgcmVjb21tZW5kZWQuJyl9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3QoJ0Fsd2F5cyBjaG9vc2UgYSBzdHJvbmcgcGFzc3dvcmQhJyl9XG4gICAgICAgICAgICAgICAgdHlwZT0nd2FybmluZydcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdWJtaXRFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgaGVscD17c3VibWl0RXJyb3J9XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz0nZXJyb3InXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8U3dNb2RhbFxuICAgICAgICAgICAgY2xvc2VJY29uPXsoXG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtDYXJldExlZnR9XG4gICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgaWQ9e21vZGFsSWR9XG4gICAgICAgICAgICBvbkNhbmNlbD17Y2xvc2VNb2RhbH1cbiAgICAgICAgICAgIHJpZ2h0SWNvblByb3BzPXt7XG4gICAgICAgICAgICAgIGljb246IDxJbmZvSWNvbiAvPlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRpdGxlPXt0KCdJbnN0cnVjdGlvbnMnKX1cbiAgICAgICAgICAgIHdyYXBDbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5zdHJ1Y3Rpb24tY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPEFsZXJ0Qm94XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ0ZvciB5b3VyIHdhbGxldCBwcm90ZWN0aW9uLCBTdWJXYWxsZXQgbG9ja3MgeW91ciB3YWxsZXQgYWZ0ZXIgMTUgbWludXRlcyBvZiBpbmFjdGl2aXR5LiBZb3Ugd2lsbCBuZWVkIHRoaXMgcGFzc3dvcmQgdG8gdW5sb2NrIGl0LicpfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdXaHkgZG8gSSBuZWVkIHRvIGVudGVyIGEgcGFzc3dvcmQ/Jyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxBbGVydEJveFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdUaGUgcGFzc3dvcmQgaXMgc3RvcmVkIHNlY3VyZWx5IG9uIHlvdXIgZGV2aWNlLiBXZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY292ZXIgaXQgZm9yIHlvdSwgc28gbWFrZSBzdXJlIHlvdSByZW1lbWJlciBpdCEnKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dCgnQ2FuIEkgcmVjb3ZlciBhIHBhc3N3b3JkPycpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Td01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBDcmVhdGVQYXNzd29yZCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5ib2R5LWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuXG4gICAgICAnLnBhZ2UtaWNvbic6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgICAnLS1wYWdlLWljb24tY29sb3InOiB0b2tlbi5jb2xvclNlY29uZGFyeVxuICAgICAgfSxcblxuICAgICAgJy50aXRsZSc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW4sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luICogMixcbiAgICAgICAgZm9udFdlaWdodDogdG9rZW4uZm9udFdlaWdodFN0cm9uZyxcbiAgICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzMsXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nMyxcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dEJhc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5hbnQtZm9ybS1pdGVtOmxhc3QtY2hpbGQnOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICB9LFxuXG4gICAgJy5pbnN0cnVjdGlvbi1jb250YWluZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGdhcDogdG9rZW4uc2l6ZVhTXG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBhc3N3b3JkO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEZvcm1GaWVsZERhdGEgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzL2Zvcm0nO1xuaW1wb3J0IHsgRmllbGREYXRhIH0gZnJvbSAncmMtZmllbGQtZm9ybS9saWIvaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGaWVsZFRvT2JqZWN0PFQgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+PiAoZmllbGRzOiBGaWVsZERhdGFbXSkge1xuICBjb25zdCBycyA9IGZpZWxkcy5yZWR1Y2UoKGRhdGEsIHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgIGRhdGFbbmFtZSBhcyBzdHJpbmddID0gdmFsdWU7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pO1xuXG4gIHJldHVybiBycyBhcyBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEZpZWxkVG9FcnJvcjxUID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IChmaWVsZHM6IEZpZWxkRGF0YVtdKTogUmVjb3JkPGtleW9mIFQsIHN0cmluZ1tdPiB7XG4gIHJldHVybiBmaWVsZHMucmVkdWNlKChkYXRhLCB7IGVycm9ycywgbmFtZSB9KSA9PiB7XG4gICAgZGF0YVtuYW1lIGFzIGtleW9mIFRdID0gZXJyb3JzIHx8IFtdO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sIHt9IGFzIFJlY29yZDxrZXlvZiBULCBzdHJpbmdbXT4pO1xufVxuXG5leHBvcnQgY29uc3Qgc2ltcGxlQ2hlY2tGb3JtID0gKGFsbEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBpZ25vcmVGaWVsZHM/OiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBlcnJvciA9IGFsbEZpZWxkcy5tYXAoKGRhdGEpID0+IGRhdGEuZXJyb3JzIHx8IFtdKVxuICAgIC5yZWR1Y2UoKG9sZCwgdmFsdWUpID0+IFsuLi5vbGQsIC4uLnZhbHVlXSwgW10pXG4gICAgLnNvbWUoKHZhbHVlKSA9PiAhIXZhbHVlKTtcblxuICBjb25zdCBlbXB0eSA9IGFsbEZpZWxkcy5zb21lKChkYXRhKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBkYXRhLnZhbHVlIGFzIHVua25vd247XG4gICAgY29uc3QgbmFtZXMgPSBpc0FycmF5KGRhdGEubmFtZSkgPyBkYXRhLm5hbWUgOiBbZGF0YS5uYW1lXTtcblxuICAgIGNvbnN0IGlzSWdub3JlID0gaWdub3JlRmllbGRzPy5zb21lKChuYW1lKSA9PiBuYW1lcy5pbmNsdWRlcyhuYW1lKSk7XG5cbiAgICByZXR1cm4gaXNJZ25vcmUgPyBmYWxzZSA6IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gZmFsc2UgOiAhdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3IsXG4gICAgZW1wdHlcbiAgfTtcbn07XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgRm9ybVJ1bGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IFRGdW5jdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5leHBvcnQgY29uc3QgTWluUGFzc3dvcmRMZW5ndGggPSA4O1xuXG4vLyAoPz0uKlxcZCk6IHNob3VsZCBjb250YWluIGF0IGxlYXN0IG9uZSBkaWdpdFxuLy8gKD89LipbYS16XSk6IHNob3VsZCBjb250YWluIGF0IGxlYXN0IG9uZSBsb3dlciBjYXNlXG4vLyAoPz0uKltBLVpdKTogc2hvdWxkIGNvbnRhaW4gYXQgbGVhc3Qgb25lIHVwcGVyIGNhc2Vcbi8vICg/PS4qW34hQCMkJV4mKl0pOiBzaG91bGQgY29udGFpbiBhdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXIgaW4gbGlzdGVkXG4vLyBbQS1aYS16XFxkfiFAIyQlXiYqXXs4LH06IHNob3VsZCBjb250YWluIGF0IGxlYXN0IDggZnJvbSB0aGUgbWVudGlvbmVkIGNoYXJhY3RlcnNcblxuY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxkKSg/PS4qW34hQCMkJV4mKl0pW0EtWmEtelxcZH4hQCMkJV4mKl17OCx9JC87XG5cbmV4cG9ydCBjb25zdCByZW5kZXJCYXNlUGFzc3dvcmRSdWxlcyA9IChmaWVsZE5hbWU6IHN0cmluZywgdDogVEZ1bmN0aW9uKTogRm9ybVJ1bGVbXSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgbWVzc2FnZTogdCgne3tmaWVsZE5hbWV9fSBtdXN0IGJlIGF0IGxlYXN0IHt7bWluTGVufX0gY2hhcmFjdGVycyBpbiBsZW5ndGgnLCB7IHJlcGxhY2U6IHsgbWluTGVuOiBNaW5QYXNzd29yZExlbmd0aCwgZmllbGROYW1lOiBmaWVsZE5hbWUgfSB9KSxcbiAgICAgIG1pbjogTWluUGFzc3dvcmRMZW5ndGhcbiAgICB9LFxuICAgIHtcbiAgICAgIG1lc3NhZ2U6IHQoJ3t7ZmllbGROYW1lfX0gaXMgcmVxdWlyZWQnLCB7IHJlcGxhY2U6IHsgZmllbGROYW1lOiBmaWVsZE5hbWUgfSB9KSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXNzYWdlOiB0KCd7e2ZpZWxkTmFtZX19IHNob3VsZCBiZSBhdCBsZWFzdCAxIHVwcGVyY2FzZSBsZXR0ZXIsIDEgbnVtYmVyLCBhbmQgMSBzcGVjaWFsIGNoYXJhY3RlcicsIHsgcmVwbGFjZTogeyBmaWVsZE5hbWU6IGZpZWxkTmFtZSB9IH0pLFxuICAgICAgcGF0dGVybjogcGFzc3dvcmRSZWdleCxcbiAgICAgIHdhcm5pbmdPbmx5OiB0cnVlXG4gICAgfVxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlckJhc2VDb25maXJtUGFzc3dvcmRSdWxlcyA9IChwYXNzd29yZEZpZWxkTmFtZTogc3RyaW5nLCB0OiBURnVuY3Rpb24pOiBGb3JtUnVsZVtdID0+IHtcbiAgcmV0dXJuIFtcbiAgICAuLi5yZW5kZXJCYXNlUGFzc3dvcmRSdWxlcyh0KCdDb25maXJtIHBhc3N3b3JkJyksIHQpLFxuICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcbiAgICAgIHZhbGlkYXRvcjogKF8sIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gZ2V0RmllbGRWYWx1ZShwYXNzd29yZEZpZWxkTmFtZSkgYXMgc3RyaW5nO1xuXG4gICAgICAgIGlmICghdmFsdWUgfHwgcGFzc3dvcmQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcih0KCdDb25maXJtIHBhc3N3b3JkIGRvIG5vdCBtYXRjaCEnKSkpO1xuICAgICAgfVxuICAgIH0pXG4gIF07XG59O1xuIl0sIm5hbWVzIjpbIkFsZXJ0Qm94IiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJJbmZvSWNvbiIsIlJFUVVFU1RfQ1JFQVRFX1BBU1NXT1JEX01PREFMIiwiREVGQVVMVF9ST1VURVJfUEFUSCIsInVzZVRyYW5zbGF0aW9uIiwidXNlRm9jdXNGb3JtSXRlbSIsImtleXJpbmdDaGFuZ2VNYXN0ZXJQYXNzd29yZCIsImlzTm9BY2NvdW50Iiwic2ltcGxlQ2hlY2tGb3JtIiwicmVuZGVyQmFzZUNvbmZpcm1QYXNzd29yZFJ1bGVzIiwicmVuZGVyQmFzZVBhc3N3b3JkUnVsZXMiLCJGb3JtIiwiSWNvbiIsIklucHV0IiwiTW9kYWxDb250ZXh0IiwiUGFnZUljb24iLCJTd01vZGFsIiwiQ04iLCJDYXJldExlZnQiLCJDaGVja0NpcmNsZSIsIlNoaWVsZFBsdXMiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlTG9jYXRpb24iLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsIkZvcm1GaWVsZE5hbWUiLCJGb290ZXJJY29uIiwibW9kYWxJZCIsImZvcm1OYW1lIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwidCIsImFjdGl2ZU1vZGFsIiwiY2hlY2tBY3RpdmUiLCJpbmFjdGl2ZU1vZGFsIiwibmF2aWdhdGUiLCJwcmV2aW91c0luZm8iLCJzdGF0ZSIsImFjY291bnRzIiwiYWNjb3VudFN0YXRlIiwibm9BY2NvdW50IiwicGFzc3dvcmRSdWxlcyIsImNvbmZpcm1QYXNzd29yZFJ1bGVzIiwiUEFTU1dPUkQiLCJmb3JtIiwidXNlRm9ybSIsImlzRGlzYWJsZWQiLCJzZXRJc0Rpc2FibGUiLCJzdWJtaXRFcnJvciIsInNldFN1Ym1pdEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbkNvbXBsZXRlIiwicHJldlBhdGhuYW1lIiwicHJldlN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJwYXNzd29yZCIsImNyZWF0ZU5ldyIsIm5ld1Bhc3N3b3JkIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImVycm9ycyIsImNhdGNoIiwiZSIsIm1lc3NhZ2UiLCJmaW5hbGx5Iiwib25VcGRhdGUiLCJjaGFuZ2VkRmllbGRzIiwiYWxsRmllbGRzIiwiZW1wdHkiLCJlcnJvciIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJyZXNldEZpZWxkcyIsIkNPTkZJUk1fUEFTU1dPUkQiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwic3VibWl0IiwiZGlzYWJsZWQiLCJpY29uIiwid2VpZ2h0IiwicGhvc3Bob3JJY29uIiwiQ3JlYXRlUGFzc3dvcmQiLCJ0aGVtZSIsInRva2VuIiwicGFkZGluZyIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsIm1hcmdpbiIsImNvbG9yU2Vjb25kYXJ5IiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsImZvbnRXZWlnaHRTdHJvbmciLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzMiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmczIiwiY29sb3IiLCJjb2xvclRleHRCYXNlIiwiZmxleERpcmVjdGlvbiIsImdhcCIsInNpemVYUyIsImlzQXJyYXkiLCJjb252ZXJ0RmllbGRUb09iamVjdCIsImZpZWxkcyIsInJzIiwicmVkdWNlIiwiZGF0YSIsIm5hbWUiLCJ2YWx1ZSIsImNvbnZlcnRGaWVsZFRvRXJyb3IiLCJpZ25vcmVGaWVsZHMiLCJtYXAiLCJvbGQiLCJzb21lIiwibmFtZXMiLCJpc0lnbm9yZSIsImluY2x1ZGVzIiwiTWluUGFzc3dvcmRMZW5ndGgiLCJwYXNzd29yZFJlZ2V4IiwiZmllbGROYW1lIiwicmVwbGFjZSIsIm1pbkxlbiIsIm1pbiIsInJlcXVpcmVkIiwicGF0dGVybiIsIndhcm5pbmdPbmx5IiwicGFzc3dvcmRGaWVsZE5hbWUiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwiXyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9