"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Keyring_CreatePassword_tsx"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0tleXJpbmdfQ3JlYXRlUGFzc3dvcmRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUV3RjtBQUNYO0FBQ2dCO0FBQ1Q7QUFDRTtBQUNFO0FBQ0g7QUFHSjtBQUNGO0FBQ3VEO0FBQzdDO0FBQzdEO0FBQ3dDO0FBRWlCO0FBQzNDO0FBQ2tCO0FBQ3JCO0FBQUE7QUFBQTtBQUFBLElBSWxDaUMsYUFBYTtBQUFBLFdBQWJBLGFBQWE7RUFBYkEsYUFBYTtFQUFiQSxhQUFhO0FBQUEsR0FBYkEsYUFBYSxLQUFiQSxhQUFhO0FBVWxCLE1BQU1DLFVBQVUsZ0JBQ2Qsd0RBQUMsNERBQUk7RUFDSCxZQUFZLEVBQUViLHVEQUFZO0VBQzFCLE1BQU0sRUFBQztBQUFNLEVBRWhCO0FBRUQsTUFBTWMsT0FBTyxHQUFHLG1DQUFtQztBQUNuRCxNQUFNQyxRQUFRLEdBQUcsc0JBQXNCO0FBRXZDLE1BQU1DLFNBQTBCLEdBQUcsQ0FBQztFQUFFQztBQUFpQixDQUFDLEtBQUs7RUFDM0QsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR2pDLG9HQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFa0MsV0FBVztJQUFFQyxXQUFXO0lBQUVDO0VBQWMsQ0FBQyxHQUFHakIsa0RBQVUsQ0FBQ1QsOERBQVksQ0FBQztFQUM1RSxNQUFNMkIsUUFBUSxHQUFHWiw4REFBVyxFQUFFO0VBQzlCLE1BQU1hLFlBQVksR0FBR2QsOERBQVcsRUFBRSxDQUFDZSxLQUFpRDtFQUVwRixNQUFNO0lBQUVDO0VBQVMsQ0FBQyxHQUFHakIseURBQVcsQ0FBRWdCLEtBQWdCLElBQUtBLEtBQUssQ0FBQ0UsWUFBWSxDQUFDO0VBRTFFLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLEdBQUdwQixnREFBUSxDQUFDbkIsK0ZBQVcsQ0FBQ3FDLFFBQVEsQ0FBQyxDQUFDO0VBRW5ELE1BQU1HLGFBQWEs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O1FBQ1pDLE9BQU8sRUFBRSxNQUFNO1FBQ2ZDLGNBQWMsRUFBRSxRQUFRO1FBQ3hCQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sTUFBTTtRQUN2QixtQkFBbUIsRUFBRU4sS0FBSyxDQUFDTztNQUM3QixDQUFDO01BRUQsUUFBUSxFQUFFO1FBQ1JGLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxNQUFNO1FBQ3ZCRSxZQUFZLEVBQUVSLEtBQUssQ0FBQ00sTUFBTSxHQUFHLENBQUM7UUFDOUJHLFVBQVUsRUFBRVQsS0FBSyxDQUFDVSxnQkFBZ0I7UUFDbENDLFFBQVEsRUFBRVgsS0FBSyxDQUFDWSxnQkFBZ0I7UUFDaENDLFVBQVUsRUFBRWIsS0FBSyxDQUFDYyxrQkFBa0I7UUFDcENDLEtBQUssRUFBRWYsS0FBSyxDQUFDZ0I7TUFDZjtJQUNGLENBQUM7SUFFRCwyQkFBMkIsRUFBRTtNQUMzQlIsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFFRCx3QkFBd0IsRUFBRTtNQUN4QkwsT0FBTyxFQUFFLE1BQU07TUFDZmMsYUFBYSxFQUFFLFFBQVE7TUFDdkJDLEdBQUcsRUFBRWxCLEtBQUssQ0FBQ21CO0lBQ2I7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVyQixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvS2V5cmluZy9DcmVhdGVQYXNzd29yZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEFsZXJ0Qm94LCBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvSWNvbi9JbmZvSWNvbic7XG5pbXBvcnQgeyBSRVFVRVNUX0NSRUFURV9QQVNTV09SRF9NT0RBTCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzL21vZGFsJztcbmltcG9ydCB7IERFRkFVTFRfUk9VVEVSX1BBVEggfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cy9yb3V0ZXInO1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZVRyYW5zbGF0aW9uJztcbmltcG9ydCB1c2VGb2N1c0Zvcm1JdGVtIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvZm9ybS91c2VGb2N1c0Zvcm1JdGVtJztcbmltcG9ydCB7IGtleXJpbmdDaGFuZ2VNYXN0ZXJQYXNzd29yZCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvc3RvcmVzJztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IGlzTm9BY2NvdW50IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9hY2NvdW50L2FjY291bnQnO1xuaW1wb3J0IHsgc2ltcGxlQ2hlY2tGb3JtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9mb3JtL2Zvcm0nO1xuaW1wb3J0IHsgcmVuZGVyQmFzZUNvbmZpcm1QYXNzd29yZFJ1bGVzLCByZW5kZXJCYXNlUGFzc3dvcmRSdWxlcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvZm9ybS92YWxpZGF0b3JzL3Bhc3N3b3JkJztcbmltcG9ydCB7IEZvcm0sIEljb24sIElucHV0LCBNb2RhbENvbnRleHQsIFBhZ2VJY29uLCBTd01vZGFsIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDYXJldExlZnQsIENoZWNrQ2lyY2xlLCBTaGllbGRQbHVzIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IHsgQ2FsbGJhY2tzLCBGaWVsZERhdGEgfSBmcm9tICdyYy1maWVsZC1mb3JtL2xpYi9pbnRlcmZhY2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wc1xuXG5lbnVtIEZvcm1GaWVsZE5hbWUge1xuICBQQVNTV09SRCA9ICdwYXNzd29yZCcsXG4gIENPTkZJUk1fUEFTU1dPUkQgPSAnY29uZmlybV9wYXNzd29yZCcsXG59XG5cbmludGVyZmFjZSBDcmVhdGVQYXNzd29yZEZvcm1TdGF0ZSB7XG4gIFtGb3JtRmllbGROYW1lLlBBU1NXT1JEXTogc3RyaW5nO1xuICBbRm9ybUZpZWxkTmFtZS5DT05GSVJNX1BBU1NXT1JEXTogc3RyaW5nO1xufVxuXG5jb25zdCBGb290ZXJJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17Q2hlY2tDaXJjbGV9XG4gICAgd2VpZ2h0PSdmaWxsJ1xuICAvPlxuKTtcblxuY29uc3QgbW9kYWxJZCA9ICdjcmVhdGUtcGFzc3dvcmQtaW5zdHJ1Y3Rpb24tbW9kYWwnO1xuY29uc3QgZm9ybU5hbWUgPSAnY3JlYXRlLXBhc3N3b3JkLWZvcm0nO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgYWN0aXZlTW9kYWwsIGNoZWNrQWN0aXZlLCBpbmFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgcHJldmlvdXNJbmZvID0gdXNlTG9jYXRpb24oKS5zdGF0ZSBhcyB7IHByZXZQYXRobmFtZTogc3RyaW5nLCBwcmV2U3RhdGU6IGFueSB9O1xuXG4gIGNvbnN0IHsgYWNjb3VudHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUpO1xuXG4gIGNvbnN0IFtub0FjY291bnRdID0gdXNlU3RhdGUoaXNOb0FjY291bnQoYWNjb3VudHMpKTtcblxuICBjb25zdCBwYXNzd29yZFJ1bGVzID0gdXNlTWVtbygoKSA9PiByZW5kZXJCYXNlUGFzc3dvcmRSdWxlcyh0KCdQYXNzd29yZCcpLCB0KSwgW3RdKTtcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUnVsZXMgPSB1c2VNZW1vKCgpID0+IHJlbmRlckJhc2VDb25maXJtUGFzc3dvcmRSdWxlcyhGb3JtRmllbGROYW1lLlBBU1NXT1JELCB0KSwgW3RdKTtcblxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm08Q3JlYXRlUGFzc3dvcmRGb3JtU3RhdGU+KCk7XG4gIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXRJc0Rpc2FibGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzdWJtaXRFcnJvciwgc2V0U3VibWl0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNvbXBsZXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChwcmV2aW91c0luZm8/LnByZXZQYXRobmFtZSkge1xuICAgICAgbmF2aWdhdGUocHJldmlvdXNJbmZvLnByZXZQYXRobmFtZSwgeyBzdGF0ZTogcHJldmlvdXNJbmZvLnByZXZTdGF0ZSBhcyB1bmtub3duIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZpZ2F0ZShERUZBVUxUX1JPVVRFUl9QQVRIKTtcbiAgICB9XG4gIH0sIFtuYXZpZ2F0ZSwgcHJldmlvdXNJbmZvPy5wcmV2UGF0aG5hbWUsIHByZXZpb3VzSW5mbz8ucHJldlN0YXRlXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQ6IENhbGxiYWNrczxDcmVhdGVQYXNzd29yZEZvcm1TdGF0ZT5bJ29uRmluaXNoJ10gPSB1c2VDYWxsYmFjaygodmFsdWVzOiBDcmVhdGVQYXNzd29yZEZvcm1TdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdmFsdWVzW0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkRdO1xuXG4gICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAga2V5cmluZ0NoYW5nZU1hc3RlclBhc3N3b3JkKHtcbiAgICAgICAgY3JlYXRlTmV3OiB0cnVlLFxuICAgICAgICBuZXdQYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAoIXJlcy5zdGF0dXMpIHtcbiAgICAgICAgICBzZXRTdWJtaXRFcnJvcihyZXMuZXJyb3JzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlOiBFcnJvcikgPT4ge1xuICAgICAgICBzZXRTdWJtaXRFcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbb25Db21wbGV0ZV0pO1xuXG4gIGNvbnN0IG9uVXBkYXRlOiBDYWxsYmFja3M8Q3JlYXRlUGFzc3dvcmRGb3JtU3RhdGU+WydvbkZpZWxkc0NoYW5nZSddID0gdXNlQ2FsbGJhY2soKGNoYW5nZWRGaWVsZHM6IEZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZpZWxkRGF0YVtdKSA9PiB7XG4gICAgY29uc3QgeyBlbXB0eSwgZXJyb3IgfSA9IHNpbXBsZUNoZWNrRm9ybShhbGxGaWVsZHMpO1xuXG4gICAgc2V0U3VibWl0RXJyb3IoJycpO1xuICAgIHNldElzRGlzYWJsZShlcnJvciB8fCBlbXB0eSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGZvcm0ucmVzZXRGaWVsZHMoW0Zvcm1GaWVsZE5hbWUuQ09ORklSTV9QQVNTV09SRF0pO1xuICB9LCBbZm9ybV0pO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBhY3RpdmVNb2RhbChtb2RhbElkKTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpbmFjdGl2ZU1vZGFsKG1vZGFsSWQpO1xuICB9LCBbaW5hY3RpdmVNb2RhbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFub0FjY291bnQpIHtcbiAgICAgIGFjdGl2ZU1vZGFsKFJFUVVFU1RfQ1JFQVRFX1BBU1NXT1JEX01PREFMKTtcbiAgICB9XG4gIH0sIFthY3RpdmVNb2RhbCwgbm9BY2NvdW50XSk7XG5cbiAgdXNlRm9jdXNGb3JtSXRlbShmb3JtLCBGb3JtRmllbGROYW1lLlBBU1NXT1JELCAhY2hlY2tBY3RpdmUoUkVRVUVTVF9DUkVBVEVfUEFTU1dPUkRfTU9EQUwpKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlciBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9PlxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGNoaWxkcmVuOiB0KCdDb250aW51ZScpLFxuICAgICAgICAgIG9uQ2xpY2s6IGZvcm0uc3VibWl0LFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgaWNvbjogRm9vdGVySWNvblxuICAgICAgICB9fVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246IDxJbmZvSWNvbiAvPixcbiAgICAgICAgICAgIG9uQ2xpY2s6IG9wZW5Nb2RhbFxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgdGl0bGU9e3QoJ0NyZWF0ZSBhIHBhc3N3b3JkJyl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5LWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtaWNvbic+XG4gICAgICAgICAgICA8UGFnZUljb25cbiAgICAgICAgICAgICAgY29sb3I9J3ZhcigtLXBhZ2UtaWNvbi1jb2xvciknXG4gICAgICAgICAgICAgIGljb25Qcm9wcz17e1xuICAgICAgICAgICAgICAgIHdlaWdodDogJ2ZpbGwnLFxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbjogU2hpZWxkUGx1c1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICAgICAge3QoJ0NyZWF0ZSBhIHBhc3N3b3JkJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICAgIFtGb3JtRmllbGROYW1lLlBBU1NXT1JEXTogJycsXG4gICAgICAgICAgICAgIFtGb3JtRmllbGROYW1lLkNPTkZJUk1fUEFTU1dPUkRdOiAnJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG5hbWU9e2Zvcm1OYW1lfVxuICAgICAgICAgICAgb25GaWVsZHNDaGFuZ2U9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17Rm9ybUZpZWxkTmFtZS5QQVNTV09SRH1cbiAgICAgICAgICAgICAgcnVsZXM9e3Bhc3N3b3JkUnVsZXN9XG4gICAgICAgICAgICAgIHN0YXR1c0hlbHBBc1Rvb2x0aXA9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdFbnRlciBwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9e0Zvcm1GaWVsZE5hbWUuQ09ORklSTV9QQVNTV09SRH1cbiAgICAgICAgICAgICAgcnVsZXM9e2NvbmZpcm1QYXNzd29yZFJ1bGVzfVxuICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnQ29uZmlybSBwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8QWxlcnRCb3hcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnOCBjaGFyYWN0ZXJzIGF0IGxlYXN0LiBVcHBlcmNhc2UsIG51bWJlcnMsIGFuZCBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIHJlY29tbWVuZGVkLicpfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdBbHdheXMgY2hvb3NlIGEgc3Ryb25nIHBhc3N3b3JkIScpfVxuICAgICAgICAgICAgICAgIHR5cGU9J3dhcm5pbmcnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3VibWl0RXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgIGhlbHA9e3N1Ym1pdEVycm9yfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9J2Vycm9yJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPFN3TW9kYWxcbiAgICAgICAgICAgIGNsb3NlSWNvbj17KFxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17Q2FyZXRMZWZ0fVxuICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGlkPXttb2RhbElkfVxuICAgICAgICAgICAgb25DYW5jZWw9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICByaWdodEljb25Qcm9wcz17e1xuICAgICAgICAgICAgICBpY29uOiA8SW5mb0ljb24gLz5cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0aXRsZT17dCgnSW5zdHJ1Y3Rpb25zJyl9XG4gICAgICAgICAgICB3cmFwQ2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luc3RydWN0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxBbGVydEJveFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdGb3IgeW91ciB3YWxsZXQgcHJvdGVjdGlvbiwgU3ViV2FsbGV0IGxvY2tzIHlvdXIgd2FsbGV0IGFmdGVyIDE1IG1pbnV0ZXMgb2YgaW5hY3Rpdml0eS4gWW91IHdpbGwgbmVlZCB0aGlzIHBhc3N3b3JkIHRvIHVubG9jayBpdC4nKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dCgnV2h5IGRvIEkgbmVlZCB0byBlbnRlciBhIHBhc3N3b3JkPycpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QWxlcnRCb3hcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnVGhlIHBhc3N3b3JkIGlzIHN0b3JlZCBzZWN1cmVseSBvbiB5b3VyIGRldmljZS4gV2Ugd2lsbCBub3QgYmUgYWJsZSB0byByZWNvdmVyIGl0IGZvciB5b3UsIHNvIG1ha2Ugc3VyZSB5b3UgcmVtZW1iZXIgaXQhJyl9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3QoJ0NhbiBJIHJlY292ZXIgYSBwYXNzd29yZD8nKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3dNb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgQ3JlYXRlUGFzc3dvcmQgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgICcuYm9keS1jb250YWluZXInOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3Rva2VuLnBhZGRpbmd9cHhgLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcblxuICAgICAgJy5wYWdlLWljb24nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpbixcbiAgICAgICAgJy0tcGFnZS1pY29uLWNvbG9yJzogdG9rZW4uY29sb3JTZWNvbmRhcnlcbiAgICAgIH0sXG5cbiAgICAgICcudGl0bGUnOiB7XG4gICAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbiAqIDIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmZvbnRXZWlnaHRTdHJvbmcsXG4gICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmczLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzMsXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRCYXNlXG4gICAgICB9XG4gICAgfSxcblxuICAgICcuYW50LWZvcm0taXRlbTpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgfSxcblxuICAgICcuaW5zdHJ1Y3Rpb24tY29udGFpbmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRva2VuLnNpemVYU1xuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQYXNzd29yZDtcbiJdLCJuYW1lcyI6WyJBbGVydEJveCIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiSW5mb0ljb24iLCJSRVFVRVNUX0NSRUFURV9QQVNTV09SRF9NT0RBTCIsIkRFRkFVTFRfUk9VVEVSX1BBVEgiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUZvY3VzRm9ybUl0ZW0iLCJrZXlyaW5nQ2hhbmdlTWFzdGVyUGFzc3dvcmQiLCJpc05vQWNjb3VudCIsInNpbXBsZUNoZWNrRm9ybSIsInJlbmRlckJhc2VDb25maXJtUGFzc3dvcmRSdWxlcyIsInJlbmRlckJhc2VQYXNzd29yZFJ1bGVzIiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIk1vZGFsQ29udGV4dCIsIlBhZ2VJY29uIiwiU3dNb2RhbCIsIkNOIiwiQ2FyZXRMZWZ0IiwiQ2hlY2tDaXJjbGUiLCJTaGllbGRQbHVzIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZUxvY2F0aW9uIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJGb3JtRmllbGROYW1lIiwiRm9vdGVySWNvbiIsIm1vZGFsSWQiLCJmb3JtTmFtZSIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJhY3RpdmVNb2RhbCIsImNoZWNrQWN0aXZlIiwiaW5hY3RpdmVNb2RhbCIsIm5hdmlnYXRlIiwicHJldmlvdXNJbmZvIiwic3RhdGUiLCJhY2NvdW50cyIsImFjY291bnRTdGF0ZSIsIm5vQWNjb3VudCIsInBhc3N3b3JkUnVsZXMiLCJjb25maXJtUGFzc3dvcmRSdWxlcyIsIlBBU1NXT1JEIiwiZm9ybSIsInVzZUZvcm0iLCJpc0Rpc2FibGVkIiwic2V0SXNEaXNhYmxlIiwic3VibWl0RXJyb3IiLCJzZXRTdWJtaXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25Db21wbGV0ZSIsInByZXZQYXRobmFtZSIsInByZXZTdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwicGFzc3dvcmQiLCJjcmVhdGVOZXciLCJuZXdQYXNzd29yZCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJlcnJvcnMiLCJjYXRjaCIsImUiLCJtZXNzYWdlIiwiZmluYWxseSIsIm9uVXBkYXRlIiwiY2hhbmdlZEZpZWxkcyIsImFsbEZpZWxkcyIsImVtcHR5IiwiZXJyb3IiLCJvbkNoYW5nZVBhc3N3b3JkIiwicmVzZXRGaWVsZHMiLCJDT05GSVJNX1BBU1NXT1JEIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImNoaWxkcmVuIiwib25DbGljayIsInN1Ym1pdCIsImRpc2FibGVkIiwiaWNvbiIsIndlaWdodCIsInBob3NwaG9ySWNvbiIsIkNyZWF0ZVBhc3N3b3JkIiwidGhlbWUiLCJ0b2tlbiIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW4iLCJjb2xvclNlY29uZGFyeSIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJmb250V2VpZ2h0U3Ryb25nIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmczIiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nMyIsImNvbG9yIiwiY29sb3JUZXh0QmFzZSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJzaXplWFMiXSwic291cmNlUm9vdCI6IiJ9