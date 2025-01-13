"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Account_AttachReadOnly_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/AttachReadOnly.tsx":
/*!*****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/AttachReadOnly.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_AddressInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/AddressInput */ "../extension-koni-ui/src/components/Field/AddressInput.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/CloseIcon */ "../extension-koni-ui/src/components/Icon/CloseIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/modal */ "../extension-koni-ui/src/constants/modal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useCompleteCreateAccount */ "../extension-koni-ui/src/hooks/account/useCompleteCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGetDefaultAccountName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGetDefaultAccountName */ "../extension-koni-ui/src/hooks/account/useGetDefaultAccountName.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGoBackFromCreateAccount */ "../extension-koni-ui/src/hooks/account/useGoBackFromCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_form_useFocusById__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/form/useFocusById */ "../extension-koni-ui/src/hooks/form/useFocusById.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useAutoNavigateToCreatePassword */ "../extension-koni-ui/src/hooks/router/useAutoNavigateToCreatePassword.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/form/form */ "../extension-koni-ui/src/utils/form/form.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/scanner/attach */ "../extension-koni-ui/src/utils/scanner/attach.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Eye.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0























const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"],
  weight: "fill"
});
const modalId = 'attach-read-only-scanner-modal';
const formName = 'attach-read-only-form';
const fieldName = 'address';
const Component = ({
  className
}) => {
  (0,_subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_19__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const accountName = (0,_subwallet_extension_koni_ui_hooks_account_useGetDefaultAccountName__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)(root => root.accountState.accounts);
  const onBack = (0,_subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_6__["default"])(_subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_3__.ATTACH_ACCOUNT_MODAL);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].useForm();
  const [reformatAddress, setReformatAddress] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const [isEthereum, setIsEthereum] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const [isDisable, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(true);
  const handleResult = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(val => {
    const result = (0,_subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_12__.readOnlyScan)(val);
    if (result) {
      setReformatAddress(result.content);
      setIsEthereum(result.isEthereum);
    }
  }, []);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)((changes, allFields) => {
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_11__.simpleCheckForm)(allFields);
    setIsDisable(error || empty);
    const changeMap = (0,_subwallet_extension_koni_ui_utils_form_form__WEBPACK_IMPORTED_MODULE_11__.convertFieldToObject)(changes);
    if (changeMap.address) {
      handleResult(changeMap.address);
    }
  }, [handleResult]);
  const accountAddressValidator = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)((rule, value) => {
    const result = (0,_subwallet_extension_koni_ui_utils_scanner_attach__WEBPACK_IMPORTED_MODULE_12__.readOnlyScan)(value);
    if (result) {
      // For each account, check if the address already exists return promise reject
      for (const account of accounts) {
        if (account.address === result.content) {
          setReformatAddress('');
          return Promise.reject(t('Account already exists'));
        }
      }
    } else {
      setReformatAddress('');
      if (value !== '') {
        return Promise.reject(t('This is not an address'));
      }
    }
    return Promise.resolve();
  }, [accounts, t]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(() => {
    setLoading(true);
    if (reformatAddress) {
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_10__.createAccountExternalV2)({
        name: accountName,
        address: reformatAddress,
        genesisHash: '',
        isEthereum: isEthereum,
        isAllowed: true,
        isReadOnly: true
      }).then(errors => {
        if (errors.length) {
          form.setFields([{
            name: fieldName,
            errors: errors.map(e => e.message)
          }]);
        } else {
          onComplete();
        }
      }).catch(error => {
        form.setFields([{
          name: fieldName,
          errors: [error.message]
        }]);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [form, reformatAddress, accountName, isEthereum, onComplete]);
  (0,_subwallet_extension_koni_ui_hooks_form_useFocusById__WEBPACK_IMPORTED_MODULE_7__["default"])(modalId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      rightFooterButton: {
        children: t('Attach watch-only account'),
        icon: FooterIcon,
        disabled: isDisable,
        onClick: onSubmit,
        loading: loading
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
        onClick: goHome
      }],
      title: t('Attach watch-only account'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()('container'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "description",
          children: t('Track the activity of any wallet without a private key')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "page-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
            color: "var(--page-icon-color)",
            iconProps: {
              weight: 'fill',
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_18__["default"]
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
          form: form,
          initialValues: {
            address: ''
          },
          name: formName,
          onFieldsChange: onFieldsChange,
          onFinish: onSubmit,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
            name: fieldName,
            rules: [{
              message: t('Account address is required'),
              required: true
            }, {
              validator: accountAddressValidator
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_subwallet_extension_koni_ui_components_Field_AddressInput__WEBPACK_IMPORTED_MODULE_1__.AddressInput, {
              id: modalId,
              placeholder: t('Please type or paste account address'),
              showScanner: true
            })
          })
        })]
      })
    })
  });
};
const AttachReadOnly = (0,styled_components__WEBPACK_IMPORTED_MODULE_22__["default"])(Component).withConfig({
  displayName: "AttachReadOnly",
  componentId: "sc-1s88dfq-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.container': {
      padding: token.padding
    },
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
      '--page-icon-color': token.colorSecondary
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachReadOnly);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0FjY291bnRfQXR0YWNoUmVhZE9ubHlfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFOEU7QUFDWTtBQUNYO0FBQ0s7QUFDdUI7QUFDQTtBQUNJO0FBQy9CO0FBQ3dDO0FBQzFCO0FBQ2I7QUFHb0I7QUFDcEI7QUFDdEI7QUFDL0I7QUFDUztBQUVnQjtBQUNOO0FBQ0w7QUFDSDtBQUFBO0FBQUE7QUFRdkMsTUFBTTBCLFVBQVUsZ0JBQ2Qsd0RBQUMsNERBQUk7RUFDSCxZQUFZLEVBQUVQLHVEQUFJO0VBQ2xCLE1BQU0sRUFBQztBQUFNLEVBRWhCO0FBRUQsTUFBTVEsT0FBTyxHQUFHLGdDQUFnQztBQUNoRCxNQUFNQyxRQUFRLEdBQUcsdUJBQXVCO0FBQ3hDLE1BQU1DLFNBQVMsR0FBRyxTQUFTO0FBRTNCLE1BQU1DLFNBQTBCLEdBQUcsQ0FBQztFQUFFQztBQUFpQixDQUFDLEtBQUs7RUFDM0R0QixxSEFBK0IsRUFBRTtFQUVqQyxNQUFNO0lBQUV1QjtFQUFFLENBQUMsR0FBR1QsOERBQWMsRUFBRTtFQUM5QixNQUFNO0lBQUVVO0VBQU8sQ0FBQyxHQUFHdkIsd0dBQWtCLEVBQUU7RUFFdkMsTUFBTXdCLFVBQVUsR0FBRzdCLCtHQUF3QixFQUFFO0VBQzdDLE1BQU04QixXQUFXLEdBQUc3QiwrR0FBd0IsRUFBRTtFQUU5QyxNQUFNOEIsUUFBUSxHQUFHWix5REFBVyxDQUFFYSxJQUFlLElBQUtBLElBQUksQ0FBQ0MsWUFBWSxDQUFDRixRQUFRLENBQUM7RUFFN0UsTUFBTUcsTUFBTSxHQUFHaEMsaUhBQTBCLENBQUNILDhGQUFvQixDQUFDO0VBRS9ELE1BQU0sQ0FBQ29DLElBQUksQ0FBQyxHQUFHekIsb0VBQVksRUFBd0I7RUFFbkQsTUFBTSxDQUFDMkIsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHckIsZ0RBQVEsQ0FBQyxF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Y0FBYyxFQUFFO01BQ2RBLE9BQU8sRUFBRyxLQUFJRCxLQUFLLENBQUNDLE9BQVEsSUFBRztNQUMvQkMsUUFBUSxFQUFFRixLQUFLLENBQUNHLGdCQUFnQjtNQUNoQ0MsVUFBVSxFQUFFSixLQUFLLENBQUNLLGtCQUFrQjtNQUNwQ0MsS0FBSyxFQUFFTixLQUFLLENBQUNPLG9CQUFvQjtNQUNqQ0MsU0FBUyxFQUFFO0lBQ2IsQ0FBQztJQUVELFlBQVksRUFBRTtNQUNaQyxPQUFPLEVBQUUsTUFBTTtNQUNmQyxjQUFjLEVBQUUsUUFBUTtNQUN4QkMsU0FBUyxFQUFFWCxLQUFLLENBQUNZLGVBQWU7TUFDaENDLFlBQVksRUFBRWIsS0FBSyxDQUFDYyxPQUFPO01BQzNCLG1CQUFtQixFQUFFZCxLQUFLLENBQUNlO0lBQzdCO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlakIsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvQXR0YWNoUmVhZE9ubHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IEFkZHJlc3NJbnB1dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9GaWVsZC9BZGRyZXNzSW5wdXQnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvSWNvbi9DbG9zZUljb24nO1xuaW1wb3J0IHsgQVRUQUNIX0FDQ09VTlRfTU9EQUwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cy9tb2RhbCc7XG5pbXBvcnQgdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvYWNjb3VudC91c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR2V0RGVmYXVsdEFjY291bnROYW1lJztcbmltcG9ydCB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZUZvY3VzQnlJZCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2Zvcm0vdXNlRm9jdXNCeUlkJztcbmltcG9ydCB1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQnO1xuaW1wb3J0IHVzZURlZmF1bHROYXZpZ2F0ZSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL3JvdXRlci91c2VEZWZhdWx0TmF2aWdhdGUnO1xuaW1wb3J0IHsgY3JlYXRlQWNjb3VudEV4dGVybmFsVjIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBjb252ZXJ0RmllbGRUb09iamVjdCwgc2ltcGxlQ2hlY2tGb3JtIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9mb3JtL2Zvcm0nO1xuaW1wb3J0IHsgcmVhZE9ubHlTY2FuIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9zY2FubmVyL2F0dGFjaCc7XG5pbXBvcnQgeyBGb3JtLCBJY29uLCBQYWdlSWNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgRXllIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IHsgQ2FsbGJhY2tzLCBGaWVsZERhdGEsIFJ1bGVPYmplY3QgfSBmcm9tICdyYy1maWVsZC1mb3JtL2xpYi9pbnRlcmZhY2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuaW50ZXJmYWNlIFJlYWRPbmx5QWNjb3VudElucHV0IHtcbiAgYWRkcmVzcz86IHN0cmluZztcbn1cblxuY29uc3QgRm9vdGVySWNvbiA9IChcbiAgPEljb25cbiAgICBwaG9zcGhvckljb249e0V5ZX1cbiAgICB3ZWlnaHQ9J2ZpbGwnXG4gIC8+XG4pO1xuXG5jb25zdCBtb2RhbElkID0gJ2F0dGFjaC1yZWFkLW9ubHktc2Nhbm5lci1tb2RhbCc7XG5jb25zdCBmb3JtTmFtZSA9ICdhdHRhY2gtcmVhZC1vbmx5LWZvcm0nO1xuY29uc3QgZmllbGROYW1lID0gJ2FkZHJlc3MnO1xuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSB9OiBQcm9wcykgPT4ge1xuICB1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkKCk7XG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG5cbiAgY29uc3Qgb25Db21wbGV0ZSA9IHVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCgpO1xuICBjb25zdCBhY2NvdW50TmFtZSA9IHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSgpO1xuXG4gIGNvbnN0IGFjY291bnRzID0gdXNlU2VsZWN0b3IoKHJvb3Q6IFJvb3RTdGF0ZSkgPT4gcm9vdC5hY2NvdW50U3RhdGUuYWNjb3VudHMpO1xuXG4gIGNvbnN0IG9uQmFjayA9IHVzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50KEFUVEFDSF9BQ0NPVU5UX01PREFMKTtcblxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm08UmVhZE9ubHlBY2NvdW50SW5wdXQ+KCk7XG5cbiAgY29uc3QgW3JlZm9ybWF0QWRkcmVzcywgc2V0UmVmb3JtYXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFdGhlcmV1bSwgc2V0SXNFdGhlcmV1bV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Rpc2FibGUsIHNldElzRGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVSZXN1bHQgPSB1c2VDYWxsYmFjaygodmFsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSByZWFkT25seVNjYW4odmFsKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHNldFJlZm9ybWF0QWRkcmVzcyhyZXN1bHQuY29udGVudCk7XG4gICAgICBzZXRJc0V0aGVyZXVtKHJlc3VsdC5pc0V0aGVyZXVtKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkZpZWxkc0NoYW5nZTogQ2FsbGJhY2tzPFJlYWRPbmx5QWNjb3VudElucHV0Plsnb25GaWVsZHNDaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKChjaGFuZ2VzOiBGaWVsZERhdGFbXSwgYWxsRmllbGRzOiBGaWVsZERhdGFbXSkgPT4ge1xuICAgIGNvbnN0IHsgZW1wdHksIGVycm9yIH0gPSBzaW1wbGVDaGVja0Zvcm0oYWxsRmllbGRzKTtcblxuICAgIHNldElzRGlzYWJsZShlcnJvciB8fCBlbXB0eSk7XG5cbiAgICBjb25zdCBjaGFuZ2VNYXAgPSBjb252ZXJ0RmllbGRUb09iamVjdDxSZWFkT25seUFjY291bnRJbnB1dD4oY2hhbmdlcyk7XG5cbiAgICBpZiAoY2hhbmdlTWFwLmFkZHJlc3MpIHtcbiAgICAgIGhhbmRsZVJlc3VsdChjaGFuZ2VNYXAuYWRkcmVzcyk7XG4gICAgfVxuICB9LCBbaGFuZGxlUmVzdWx0XSk7XG5cbiAgY29uc3QgYWNjb3VudEFkZHJlc3NWYWxpZGF0b3IgPSB1c2VDYWxsYmFjaygocnVsZTogUnVsZU9iamVjdCwgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHJlYWRPbmx5U2Nhbih2YWx1ZSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICAvLyBGb3IgZWFjaCBhY2NvdW50LCBjaGVjayBpZiB0aGUgYWRkcmVzcyBhbHJlYWR5IGV4aXN0cyByZXR1cm4gcHJvbWlzZSByZWplY3RcbiAgICAgIGZvciAoY29uc3QgYWNjb3VudCBvZiBhY2NvdW50cykge1xuICAgICAgICBpZiAoYWNjb3VudC5hZGRyZXNzID09PSByZXN1bHQuY29udGVudCkge1xuICAgICAgICAgIHNldFJlZm9ybWF0QWRkcmVzcygnJyk7XG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnQWNjb3VudCBhbHJlYWR5IGV4aXN0cycpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRSZWZvcm1hdEFkZHJlc3MoJycpO1xuXG4gICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdUaGlzIGlzIG5vdCBhbiBhZGRyZXNzJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSwgW2FjY291bnRzLCB0XSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGlmIChyZWZvcm1hdEFkZHJlc3MpIHtcbiAgICAgIGNyZWF0ZUFjY291bnRFeHRlcm5hbFYyKHtcbiAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgIGFkZHJlc3M6IHJlZm9ybWF0QWRkcmVzcyxcbiAgICAgICAgZ2VuZXNpc0hhc2g6ICcnLFxuICAgICAgICBpc0V0aGVyZXVtOiBpc0V0aGVyZXVtLFxuICAgICAgICBpc0FsbG93ZWQ6IHRydWUsXG4gICAgICAgIGlzUmVhZE9ubHk6IHRydWVcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChlcnJvcnMpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9ybS5zZXRGaWVsZHMoW3sgbmFtZTogZmllbGROYW1lLCBlcnJvcnM6IGVycm9ycy5tYXAoKGUpID0+IGUubWVzc2FnZSkgfV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgIGZvcm0uc2V0RmllbGRzKFt7IG5hbWU6IGZpZWxkTmFtZSwgZXJyb3JzOiBbZXJyb3IubWVzc2FnZV0gfV0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtmb3JtLCByZWZvcm1hdEFkZHJlc3MsIGFjY291bnROYW1lLCBpc0V0aGVyZXVtLCBvbkNvbXBsZXRlXSk7XG5cbiAgdXNlRm9jdXNCeUlkKG1vZGFsSWQpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX0+XG4gICAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICAgIG9uQmFjaz17b25CYWNrfVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGNoaWxkcmVuOiB0KCdBdHRhY2ggd2F0Y2gtb25seSBhY2NvdW50JyksXG4gICAgICAgICAgaWNvbjogRm9vdGVySWNvbixcbiAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uU3VibWl0LFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgICAgfX1cbiAgICAgICAgc3ViSGVhZGVySWNvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiA8Q2xvc2VJY29uIC8+LFxuICAgICAgICAgICAgb25DbGljazogZ29Ib21lXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgICB0aXRsZT17dDxzdHJpbmc+KCdBdHRhY2ggd2F0Y2gtb25seSBhY2NvdW50Jyl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDTignY29udGFpbmVyJyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+XG4gICAgICAgICAgICB7dCgnVHJhY2sgdGhlIGFjdGl2aXR5IG9mIGFueSB3YWxsZXQgd2l0aG91dCBhIHByaXZhdGUga2V5Jyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtaWNvbic+XG4gICAgICAgICAgICA8UGFnZUljb25cbiAgICAgICAgICAgICAgY29sb3I9J3ZhcigtLXBhZ2UtaWNvbi1jb2xvciknXG4gICAgICAgICAgICAgIGljb25Qcm9wcz17e1xuICAgICAgICAgICAgICAgIHdlaWdodDogJ2ZpbGwnLFxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbjogRXllXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBhZGRyZXNzOiAnJyB9fVxuICAgICAgICAgICAgbmFtZT17Zm9ybU5hbWV9XG4gICAgICAgICAgICBvbkZpZWxkc0NoYW5nZT17b25GaWVsZHNDaGFuZ2V9XG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBuYW1lPXtmaWVsZE5hbWV9XG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnQWNjb3VudCBhZGRyZXNzIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBhY2NvdW50QWRkcmVzc1ZhbGlkYXRvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgc3RhdHVzSGVscEFzVG9vbHRpcD17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFkZHJlc3NJbnB1dFxuICAgICAgICAgICAgICAgIGlkPXttb2RhbElkfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdQbGVhc2UgdHlwZSBvciBwYXN0ZSBhY2NvdW50IGFkZHJlc3MnKX1cbiAgICAgICAgICAgICAgICBzaG93U2Nhbm5lcj17dHJ1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgQXR0YWNoUmVhZE9ubHkgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgICcuY29udGFpbmVyJzoge1xuICAgICAgcGFkZGluZzogdG9rZW4ucGFkZGluZ1xuICAgIH0sXG5cbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLnBhZ2UtaWNvbic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogdG9rZW4uY29udHJvbEhlaWdodExHLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5zaXplWFhMLFxuICAgICAgJy0tcGFnZS1pY29uLWNvbG9yJzogdG9rZW4uY29sb3JTZWNvbmRhcnlcbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0YWNoUmVhZE9ubHk7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJBZGRyZXNzSW5wdXQiLCJDbG9zZUljb24iLCJBVFRBQ0hfQUNDT1VOVF9NT0RBTCIsInVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCIsInVzZUdldERlZmF1bHRBY2NvdW50TmFtZSIsInVzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50IiwidXNlRm9jdXNCeUlkIiwidXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCIsInVzZURlZmF1bHROYXZpZ2F0ZSIsImNyZWF0ZUFjY291bnRFeHRlcm5hbFYyIiwiY29udmVydEZpZWxkVG9PYmplY3QiLCJzaW1wbGVDaGVja0Zvcm0iLCJyZWFkT25seVNjYW4iLCJGb3JtIiwiSWNvbiIsIlBhZ2VJY29uIiwiQ04iLCJFeWUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVNlbGVjdG9yIiwic3R5bGVkIiwiRm9vdGVySWNvbiIsIm1vZGFsSWQiLCJmb3JtTmFtZSIsImZpZWxkTmFtZSIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJnb0hvbWUiLCJvbkNvbXBsZXRlIiwiYWNjb3VudE5hbWUiLCJhY2NvdW50cyIsInJvb3QiLCJhY2NvdW50U3RhdGUiLCJvbkJhY2siLCJmb3JtIiwidXNlRm9ybSIsInJlZm9ybWF0QWRkcmVzcyIsInNldFJlZm9ybWF0QWRkcmVzcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNFdGhlcmV1bSIsInNldElzRXRoZXJldW0iLCJpc0Rpc2FibGUiLCJzZXRJc0Rpc2FibGUiLCJoYW5kbGVSZXN1bHQiLCJ2YWwiLCJyZXN1bHQiLCJjb250ZW50Iiwib25GaWVsZHNDaGFuZ2UiLCJjaGFuZ2VzIiwiYWxsRmllbGRzIiwiZW1wdHkiLCJlcnJvciIsImNoYW5nZU1hcCIsImFkZHJlc3MiLCJhY2NvdW50QWRkcmVzc1ZhbGlkYXRvciIsInJ1bGUiLCJ2YWx1ZSIsImFjY291bnQiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsIm9uU3VibWl0IiwibmFtZSIsImdlbmVzaXNIYXNoIiwiaXNBbGxvd2VkIiwiaXNSZWFkT25seSIsInRoZW4iLCJlcnJvcnMiLCJsZW5ndGgiLCJzZXRGaWVsZHMiLCJtYXAiLCJlIiwibWVzc2FnZSIsImNhdGNoIiwiZmluYWxseSIsImNoaWxkcmVuIiwiaWNvbiIsImRpc2FibGVkIiwib25DbGljayIsIndlaWdodCIsInBob3NwaG9ySWNvbiIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwiQXR0YWNoUmVhZE9ubHkiLCJ0aGVtZSIsInRva2VuIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFNpemVIZWFkaW5nNiIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzYiLCJjb2xvciIsImNvbG9yVGV4dERlc2NyaXB0aW9uIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiY29udHJvbEhlaWdodExHIiwibWFyZ2luQm90dG9tIiwic2l6ZVhYTCIsImNvbG9yU2Vjb25kYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==