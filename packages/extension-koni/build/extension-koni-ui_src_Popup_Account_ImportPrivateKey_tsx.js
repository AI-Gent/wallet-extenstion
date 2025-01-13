"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Account_ImportPrivateKey_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/ImportPrivateKey.tsx":
/*!*******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/ImportPrivateKey.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/account */ "../extension-koni-ui/src/constants/account.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/modal */ "../extension-koni-ui/src/constants/modal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FileArrowDown.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/EyeSlash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Eye.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0













const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_9__["default"],
  weight: "fill"
});
const formName = 'import-private-key-form';
const fieldName = 'private-key';
const Component = ({
  className
}) => {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useAutoNavigateToCreatePassword)();
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useDefaultNavigate)();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useCompleteCreateAccount)();
  const onBack = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGoBackFromCreateAccount)(_subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_2__.IMPORT_ACCOUNT_MODAL);
  const timeOutRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();

  // TODO: Change way validate
  const [validateState, setValidateState] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});
  const [validating, setValidating] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [changed, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].useForm();
  const checkUnlock = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useUnlockChecker)();
  const accountName = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetDefaultAccountName)();

  // Auto-focus field
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useFocusFormItem)(form, fieldName);
  const privateKey = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].useWatch(fieldName, form);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(values => {
    const {
      [fieldName]: privateKey
    } = values;
    checkUnlock().then(() => {
      if (privateKey !== null && privateKey !== void 0 && privateKey.trim()) {
        setLoading(true);
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__.createAccountSuriV2)({
          name: accountName,
          suri: privateKey.trim(),
          isAllowed: true,
          types: [_subwallet_extension_koni_ui_constants_account__WEBPACK_IMPORTED_MODULE_1__.EVM_ACCOUNT_TYPE]
        }).then(() => {
          onComplete();
        }).catch(error => {
          setValidateState({
            status: 'error',
            message: error.message
          });
        }).finally(() => {
          setLoading(false);
        });
      }
    }).catch(() => {
      // User cancel unlock
    });
  }, [accountName, checkUnlock, onComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    let amount = true;
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    if (amount) {
      if (privateKey !== null && privateKey !== void 0 && privateKey.trim()) {
        setValidating(true);
        setValidateState({
          status: 'validating',
          message: ''
        });
        timeOutRef.current = setTimeout(() => {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_4__.validateMetamaskPrivateKeyV2)(privateKey.trim(), [_subwallet_extension_koni_ui_constants_account__WEBPACK_IMPORTED_MODULE_1__.EVM_ACCOUNT_TYPE]).then(({
            autoAddPrefix
          }) => {
            if (amount) {
              if (autoAddPrefix) {
                form.setFieldValue(fieldName, `0x${privateKey}`);
              }
              setValidateState({});
            }
          }).catch(e => {
            if (amount) {
              setValidateState({
                status: 'error',
                message: e.message
              });
            }
          }).finally(() => {
            if (amount) {
              setValidating(false);
            }
          });
        }, 300);
      } else {
        if (changed) {
          setValidateState({
            status: 'error',
            message: t('Private key is required')
          });
        }
      }
    }
    return () => {
      amount = false;
    };
  }, [privateKey, form, changed, t]);
  const onValuesChange = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(changedValues => {
    if (fieldName in changedValues) {
      setChanged(true);
    }
  }, []);
  const toggleShow = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    setShow(value => !value);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      rightFooterButton: {
        children: validating ? t('Validating') : t('Import account'),
        icon: FooterIcon,
        onClick: form.submit,
        disabled: !privateKey || !!validateState.status,
        loading: validating || loading
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
        onClick: goHome
      }],
      title: t('Import by private key'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "description",
          children: t('To import an existing wallet, please enter private key')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "form-container",
          form: form,
          initialValues: {
            [fieldName]: ''
          },
          name: formName,
          onFinish: onSubmit,
          onValuesChange: onValuesChange,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
            name: fieldName,
            validateStatus: validateState.status,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PrivateKeyInput, {
              className: "private-key-input",
              hideText: !show,
              label: t('Private key'),
              placeholder: t('Enter private key'),
              statusHelp: validateState.message
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "button-container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
                phosphorIcon: show ? phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"] : phosphor_react__WEBPACK_IMPORTED_MODULE_13__["default"],
                size: "sm"
              }),
              onClick: toggleShow,
              size: "xs",
              type: "ghost",
              children: show ? t('Hide private key') : t('Show private key')
            })
          })]
        })]
      })
    })
  });
};
const ImportPrivateKey = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(Component).withConfig({
  displayName: "ImportPrivateKey",
  componentId: "sc-1bax2qa-0"
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
    '.form-container': {
      marginTop: token.margin
    },
    '.button-container': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportPrivateKey);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0FjY291bnRfSW1wb3J0UHJpdmF0ZUtleV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFMEc7QUFDeEI7QUFDRTtBQUN5SjtBQUNsSTtBQUVsRDtBQUM3QjtBQUNrQztBQUNVO0FBQ2pDO0FBQUE7QUFBQTtBQUl2QyxNQUFNNkIsVUFBVSxnQkFDZCx1REFBQywyREFBSTtFQUNILFlBQVksRUFBRVAsc0RBQWM7RUFDNUIsTUFBTSxFQUFDO0FBQU0sRUFFaEI7QUFFRCxNQUFNUSxRQUFRLEdBQUcseUJBQXlCO0FBQzFDLE1BQU1DLFNBQVMsR0FBRyxhQUFhO0FBTS9CLE1BQU1DLFNBQTBCLEdBQUcsQ0FBQztFQUFFQztBQUFpQixDQUFDLEtBQUs7RUFDM0QzQixtR0FBK0IsRUFBRTtFQUVqQyxNQUFNO0lBQUU0QjtFQUFFLENBQUMsR0FBR3RCLGtGQUFjLEVBQUU7RUFDOUIsTUFBTTtJQUFFdUI7RUFBTyxDQUFDLEdBQUczQixzRkFBa0IsRUFBRTtFQUN2QyxNQUFNNEIsVUFBVSxHQUFHN0IsNEZBQXdCLEVBQUU7RUFDN0MsTUFBTThCLE1BQU0sR0FBRzFCLDhGQUEwQixDQUFDTiw4RkFBb0IsQ0FBQztFQUUvRCxNQUFNaUMsVUFBVSxHQUFHWiw2Q0FBTSxFQUFnQjs7RUFFekM7RUFDQSxNQUFNLENBQUNhLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR2IsK0NBQVEsQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7RUFDckUsTUFBTSxDQUFDYyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHZiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUNuRCxNQUFNLENBQUNnQixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHakIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDN0MsTUFBTSxDQUFDa0IsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR25CLCtDQUFRLENBQUMsS0FBSyxDQUFDO0VBQ3ZDLE1BQU0sQ0FBQ29CLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdyQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUM3QyxNQUFNLENBQUNzQixJQUFJLENBQUMsR0FBR2hDLG9FQUFZLEVBQWE7RUFDeEMsTUFBTWtDLFdBQVcsR0FBR3RDLG9GQUFnQixFQUFFO0VBRXRDLE1BQU11QyxXQUFXLEdBQUcxQyw0RkFBd0IsRUFBRTs7RUFFOUM7RUFDQUQsb0ZBQWdCLENBQUN3QyxJQUFJLEVBQUVsQixTQUFTLENBQUM7RUFFakMsTUFBTXNCLFVBQVUsR0FBR3BDLHFFQUFhLENBQUNjLFNBQVMsRUFBRWtCLElBQUksQ0FBQztFQUVqRCxNQUFNTSxRQUE4QyxHQUFHL0Isa0RBQVcsQ0FBRWdDLE1BQWlCLElBQUs7SUFDeEYsTUFBTTtNQUFFLENBQUN6QixTQUFTLEdBQUdzQjtJQUFXLENBQUMsR0FBR0csTUFBTTtJQUUxQ0wsV0FBVyxFQUFFLENBQUNNLElBQUksQ0FBQyxNQUFNO01BQ3ZCLElBQUlKLFVBQVUsYUFBVkEsVUFBVSxlQUFWQSxVQUFVLENBQUVLLElBQUksRUFBRSxFQUFFO1FBQ3RCZCxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hCOUIsMkZBQW1CLENBQUM7VUFDbEI2QyxJQUFJLEVBQUVQLFdBQVc7VUFDakJRLElBQUksRUFBRVAsVUFBVSxDQUFDSyxJQUFJLEVBQUU7VUFDdkJHLFNBQVMsRUFBRSxJQUFJO1VBQ2ZDLEtBQUssRUFBRSxDQUFDMUQsNEZBQWdCO1FBQzFCLENBQUMsQ0FBQyxDQUNDcUQsSUFBSSxDQUFDLE1BQU07VUFDVnJCLFVBQVUsRUFBRTtRQUNkLENBQUMsQ0FBQyxDQUNEMkIsS0FBSyxDQUFFQyxLQUFZLElBQVc7VUFDN0J4QixnQkFBZ0IsQ0FBQztZQUNmeUIsTUFBTSxFQUFFLE9BQU87WUFDZkMsT0FBTyxFQUFFRixLQUFLLENBQUNFO1VBQ2pCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNEQyxPQUFPLENBQUMsTUFBTTtVQUNidkIsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDLENBQUM7TUFDTjtJQUNGLENBQUMsQ0FBQyxDQUNDbUIsS0FBSyxDQUFDLE1BQU07TUFDYjtJQUFBLENBQ0MsQ0FBQztFQUNOLENBQUMsRUFBRSxDQUFDWCxXQUFXLEVBQUVELFdBQVcsRUFBRWYsVUFBVSxDQUFDLENBQUM7RUFFMUNYLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUkyQyxNQUFNLEdBQUcsSUFBSTtJQUVqQixJQUFJOUIsVUFBVSxDQUFDK0IsT0FBTyxFQUFFO01BQ3RCQyxZQUFZLENBQUNoQyxVQUFVLENBQUMrQixPQUFPLENBQUM7SUFDbEM7SUFFQSxJQUFJRCxNQUFNLEVBQUU7TUFDVixJQUFJZixVQUFVLGFBQVZBLFVBQVUsZUFBVkEsVUFBVSxDQUFFSyxJQUFJLEVBQUUsRUFBRTtRQUN0QmhCLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkJGLGdCQUFnQixDQUFDO1VBQ2Z5QixNQUFNLEVBQUUsWUFBWTtVQUNwQkMsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxDQUFDO1FBRUY1QixVQUFVLENBQUMrQixPQUFPLEdBQUdFLFVBQVUsQ0FBQyxNQUFNO1VBQ3BDeEQsb0dBQTRCLENBQUNzQyxVQUFVLENBQUNLLElBQUksRUFBRSxFQUFFLENBQUN0RCw0RkFBZ0IsQ0FBQyxDQUFDLENBQ2hFcUQsSUFBSSxDQUFDLENBQUM7WUFBRWU7VUFBYyxDQUFDLEtBQUs7WUFDM0IsSUFBSUosTUFBTSxFQUFFO2NBQ1YsSUFBSUksYUFBYSxFQUFFO2dCQUNqQnZCLElBQUksQ0FBQ3dCLGFBQWEsQ0FBQzFDLFNBQVMsRUFBRyxLQUFJc0IsVUFBVyxFQUFDLENBQUM7Y0FDbEQ7Y0FFQWIsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEI7VUFDRixDQUFDLENBQUMsQ0FDRHVCLEtBQUssQ0FBRVcsQ0FBUSxJQUFLO1lBQ25CLElBQUlOLE1BQU0sRUFBRTtjQUNWNUIsZ0JBQWdCLENBQUM7Z0JBQ2Z5QixNQUFNLEVBQUUsT0FBTztnQkFDZkMsT0FBTyxFQUFFUSxDQUFDLENBQUNSO2NBQ2IsQ0FBQyxDQUFDO1lBQ0o7VUFDRixDQUFDLENBQUMsQ0FDREMsT0FBTyxDQUFDLE1BQU07WUFDYixJQUFJQyxNQUFNLEVBQUU7Y0FDVjFCLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDdEI7VUFDRixDQUFDLENBQUM7UUFDTixDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ1QsQ0FBQyxNQUFNO1FBQ0wsSUFBSUssT0FBTyxFQUFFO1VBQ1hQLGdCQUFnQixDQUFDO1lBQ2Z5QixNQUFNLEVBQUUsT0FBTztZQUNmQyxPQUFPLEVBQUVoQyxDQUFDLENBQUMseUJBQXlCO1VBQ3RDLENBQUMsQ0FBQztRQUNKO01BQ0Y7SUFDRjtJQUVBLE9BQU8sTUFBTTtNQUNYa0MsTUFBTSxHQUFHLEtBQUs7SUFDaEIsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDZixVQUFVLEVBQUVKLElBQUksRUFBRUYsT0FBTyxFQUFFYixDQUFDLENBQUMsQ0FBQztFQUVsQyxNQUFNeUMsY0FBMEQsR0FBR25ELGtEQUFXLENBQUVvRCxhQUFpQyxJQUFLO0lBQ3BILElBQUk3QyxTQUFTLElBQUk2QyxhQUFhLEVBQUU7TUFDOUI1QixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xCO0VBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU02QixVQUFVLEdBQUdyRCxrREFBVyxDQUFDLE1BQU07SUFDbkNzQixPQUFPLENBQUVnQyxLQUFLLElBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQzVCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRSx1REFBQyxnRkFBVztJQUFDLFNBQVMsRUFBRTNELGlEQUFFLENBQUNjLFNBQVMsQ0FBRTtJQUFBLHVCQUNwQyx1REFBQyw2RkFBd0I7TUFDdkIsTUFBTSxFQUFFSSxNQUFPO01BQ2YsaUJBQWlCLEVBQUU7UUFDakIwQyxRQUFRLEVBQUV0QyxVQUFVLEdBQUdQLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBR0EsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQzVEOEMsSUFBSSxFQUFFbkQsVUFBVTtRQUNoQm9ELE9BQU8sRUFBRWhDLElBQUksQ0FBQ2lDLE1BQU07UUFDcEJDLFFBQVEsRUFBRSxDQUFDOUIsVUFBVSxJQUFJLENBQUMsQ0FBQ2QsYUFBYSxDQUFDMEIsTUFBTTtRQUMvQ3RCLE9BQU8sRUFBRUYsVUFBVSxJQUFJRTtNQUN6QixDQUFFO01BQ0YsY0FBYyxFQUFFLENBQ2Q7UUFDRXFDLElBQUksZUFBRSx1REFBQyw4RUFBUyxLQUFHO1FBQ25CQyxPQUFPLEVBQUU5QztNQUNYLENBQUMsQ0FDRDtNQUNGLEtBQUssRUFBRUQsQ0FBQyxDQUFTLHVCQUF1QixDQUFFO01BQUEsdUJBRTFDO1FBQUssU0FBUyxFQUFDLFdBQVc7UUFBQSx3QkFDeEI7VUFBSyxTQUFTLEVBQUMsYUFBYTtVQUFBLFVBQ3pCQSxDQUFDLENBQUMsd0RBQXdEO1FBQUMsRUFDeEQsZUFDTix3REFBQyw0REFBSTtVQUNILFNBQVMsRUFBQyxnQkFBZ0I7VUFDMUIsSUFBSSxFQUFFZSxJQUFLO1VBQ1gsYUFBYSxFQUFFO1lBQUUsQ0FBQ2xCLFNBQVMsR0FBRztVQUFHLENBQUU7VUFDbkMsSUFBSSxFQUFFRCxRQUFTO1VBQ2YsUUFBUSxFQUFFeUIsUUFBUztVQUNuQixjQUFjLEVBQUVvQixjQUFlO1VBQUEsd0JBRS9CLHVEQUFDLGlFQUFTO1lBQ1IsSUFBSSxFQUFFNUMsU0FBVTtZQUNoQixjQUFjLEVBQUVRLGFBQWEsQ0FBQzBCLE1BQU87WUFBQSx1QkFFckMsdURBQUMsb0ZBQWU7Y0FDZCxTQUFTLEVBQUMsbUJBQW1CO2NBQzdCLFFBQVEsRUFBRSxDQUFDcEIsSUFBSztjQUNoQixLQUFLLEVBQUVYLENBQUMsQ0FBQyxhQUFhLENBQUU7Y0FDeEIsV0FBVyxFQUFFQSxDQUFDLENBQUMsbUJBQW1CLENBQUU7Y0FDcEMsVUFBVSxFQUFFSyxhQUFhLENBQUMyQjtZQUFRO1VBQ2xDLEVBQ1EsZUFDWjtZQUFLLFNBQVMsRUFBQyxrQkFBa0I7WUFBQSx1QkFDL0IsdURBQUMsNERBQU07Y0FDTCxJQUFJLGVBQ0YsdURBQUMsMkRBQUk7Z0JBQ0gsWUFBWSxFQUFFckIsSUFBSSxHQUFHeEIsdURBQVEsR0FBR0QsdURBQUk7Z0JBQ3BDLElBQUksRUFBQztjQUFJLEVBRVg7Y0FDRixPQUFPLEVBQUV5RCxVQUFXO2NBQ3BCLElBQUksRUFBQyxJQUFJO2NBQ1QsSUFBSSxFQUFDLE9BQU87Y0FBQSxVQUVYaEMsSUFBSSxHQUFHWCxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBR0EsQ0FBQyxDQUFDLGtCQUFrQjtZQUFDO1VBQzlDLEVBQ0w7UUFBQSxFQUNEO01BQUE7SUFDSDtFQUNtQixFQUNmO0FBRWxCLENBQUM7QUFFRCxNQUFNa0QsZ0JBQWdCLEdBQUd4RCw4REFBTSxDQUFDSSxTQUFTLENBQUM7RUFBQTtFQUFBO0FBQUEsR0FBUSxDQUFDO0VBQUVxRCxLQUFLLEVBQUU7SUFBRUM7RUFBTTtBQUFTLENBQUMsS0FBSztFQUNqRixPQUFPO0lBQ0wsWUFBWSxFQUFFO01BQ1pDLE9BQU8sRUFBRUQsS0FBSyxDQUFDQztJQUNqQixDQUFDO0lBRUQsY0FBYyxFQUFFO01BQ2RBLE9BQU8sRUFBRyxLQUFJRCxLQUFLLENBQUNDLE9BQVEsSUFBRztNQUMvQkMsUUFBUSxFQUFFRixLQUFLLENBQUNHLGdCQUFnQjtNQUNoQ0MsVUFBVSxFQUFFSixLQUFLLENBQUNLLGtCQUFrQjtNQUNwQ0MsS0FBSyxFQUFFTixLQUFLLENBQUNPLG9CQUFvQjtNQUNqQ0MsU0FBUyxFQUFFO0lBQ2IsQ0FBQztJQUVELGlCQUFpQixFQUFFO01BQ2pCQyxTQUFTLEVBQUVULEtBQUssQ0FBQ1U7SUFDbkIsQ0FBQztJQUVELG1CQUFtQixFQUFFO01BQ25CQyxPQUFPLEVBQUUsTUFBTTtNQUNmQyxhQUFhLEVBQUUsS0FBSztNQUNwQkMsVUFBVSxFQUFFLFFBQVE7TUFDcEJDLGNBQWMsRUFBRTtJQUNsQjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZWhCLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvSW1wb3J0UHJpdmF0ZUtleS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IENsb3NlSWNvbiwgTGF5b3V0LCBQYWdlV3JhcHBlciwgUHJpdmF0ZUtleUlucHV0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IEVWTV9BQ0NPVU5UX1RZUEUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cy9hY2NvdW50JztcbmltcG9ydCB7IElNUE9SVF9BQ0NPVU5UX01PREFMIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMvbW9kYWwnO1xuaW1wb3J0IHsgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCwgdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50LCB1c2VEZWZhdWx0TmF2aWdhdGUsIHVzZUZvY3VzRm9ybUl0ZW0sIHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSwgdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQsIHVzZVRyYW5zbGF0aW9uLCB1c2VVbmxvY2tDaGVja2VyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBjcmVhdGVBY2NvdW50U3VyaVYyLCB2YWxpZGF0ZU1ldGFtYXNrUHJpdmF0ZUtleVYyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgRm9ybUNhbGxiYWNrcywgVGhlbWVQcm9wcywgVmFsaWRhdGVTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJY29uIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBFeWUsIEV5ZVNsYXNoLCBGaWxlQXJyb3dEb3duIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHM7XG5cbmNvbnN0IEZvb3Rlckljb24gPSAoXG4gIDxJY29uXG4gICAgcGhvc3Bob3JJY29uPXtGaWxlQXJyb3dEb3dufVxuICAgIHdlaWdodD0nZmlsbCdcbiAgLz5cbik7XG5cbmNvbnN0IGZvcm1OYW1lID0gJ2ltcG9ydC1wcml2YXRlLWtleS1mb3JtJztcbmNvbnN0IGZpZWxkTmFtZSA9ICdwcml2YXRlLWtleSc7XG5cbmludGVyZmFjZSBGb3JtU3RhdGUge1xuICBbZmllbGROYW1lXTogc3RyaW5nO1xufVxuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSB9OiBQcm9wcykgPT4ge1xuICB1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkKCk7XG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGdvSG9tZSB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG4gIGNvbnN0IG9uQ29tcGxldGUgPSB1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQoKTtcbiAgY29uc3Qgb25CYWNrID0gdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQoSU1QT1JUX0FDQ09VTlRfTU9EQUwpO1xuXG4gIGNvbnN0IHRpbWVPdXRSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVyPigpO1xuXG4gIC8vIFRPRE86IENoYW5nZSB3YXkgdmFsaWRhdGVcbiAgY29uc3QgW3ZhbGlkYXRlU3RhdGUsIHNldFZhbGlkYXRlU3RhdGVdID0gdXNlU3RhdGU8VmFsaWRhdGVTdGF0ZT4oe30pO1xuICBjb25zdCBbdmFsaWRhdGluZywgc2V0VmFsaWRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hhbmdlZCwgc2V0Q2hhbmdlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxGb3JtU3RhdGU+KCk7XG4gIGNvbnN0IGNoZWNrVW5sb2NrID0gdXNlVW5sb2NrQ2hlY2tlcigpO1xuXG4gIGNvbnN0IGFjY291bnROYW1lID0gdXNlR2V0RGVmYXVsdEFjY291bnROYW1lKCk7XG5cbiAgLy8gQXV0by1mb2N1cyBmaWVsZFxuICB1c2VGb2N1c0Zvcm1JdGVtKGZvcm0sIGZpZWxkTmFtZSk7XG5cbiAgY29uc3QgcHJpdmF0ZUtleSA9IEZvcm0udXNlV2F0Y2goZmllbGROYW1lLCBmb3JtKTtcblxuICBjb25zdCBvblN1Ym1pdDogRm9ybUNhbGxiYWNrczxGb3JtU3RhdGU+WydvbkZpbmlzaCddID0gdXNlQ2FsbGJhY2soKHZhbHVlczogRm9ybVN0YXRlKSA9PiB7XG4gICAgY29uc3QgeyBbZmllbGROYW1lXTogcHJpdmF0ZUtleSB9ID0gdmFsdWVzO1xuXG4gICAgY2hlY2tVbmxvY2soKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChwcml2YXRlS2V5Py50cmltKCkpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgY3JlYXRlQWNjb3VudFN1cmlWMih7XG4gICAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgc3VyaTogcHJpdmF0ZUtleS50cmltKCksXG4gICAgICAgICAgaXNBbGxvd2VkOiB0cnVlLFxuICAgICAgICAgIHR5cGVzOiBbRVZNX0FDQ09VTlRfVFlQRV1cbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgc2V0VmFsaWRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIC8vIFVzZXIgY2FuY2VsIHVubG9ja1xuICAgICAgfSk7XG4gIH0sIFthY2NvdW50TmFtZSwgY2hlY2tVbmxvY2ssIG9uQ29tcGxldGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBhbW91bnQgPSB0cnVlO1xuXG4gICAgaWYgKHRpbWVPdXRSZWYuY3VycmVudCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVPdXRSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGFtb3VudCkge1xuICAgICAgaWYgKHByaXZhdGVLZXk/LnRyaW0oKSkge1xuICAgICAgICBzZXRWYWxpZGF0aW5nKHRydWUpO1xuICAgICAgICBzZXRWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6ICd2YWxpZGF0aW5nJyxcbiAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICB9KTtcblxuICAgICAgICB0aW1lT3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB2YWxpZGF0ZU1ldGFtYXNrUHJpdmF0ZUtleVYyKHByaXZhdGVLZXkudHJpbSgpLCBbRVZNX0FDQ09VTlRfVFlQRV0pXG4gICAgICAgICAgICAudGhlbigoeyBhdXRvQWRkUHJlZml4IH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFtb3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChhdXRvQWRkUHJlZml4KSB7XG4gICAgICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoZmllbGROYW1lLCBgMHgke3ByaXZhdGVLZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VmFsaWRhdGVTdGF0ZSh7fSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhbW91bnQpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsaWRhdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICBzZXRWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ1ByaXZhdGUga2V5IGlzIHJlcXVpcmVkJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhbW91bnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbcHJpdmF0ZUtleSwgZm9ybSwgY2hhbmdlZCwgdF0pO1xuXG4gIGNvbnN0IG9uVmFsdWVzQ2hhbmdlOiBGb3JtQ2FsbGJhY2tzPEZvcm1TdGF0ZT5bJ29uVmFsdWVzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZFZhbHVlczogUGFydGlhbDxGb3JtU3RhdGU+KSA9PiB7XG4gICAgaWYgKGZpZWxkTmFtZSBpbiBjaGFuZ2VkVmFsdWVzKSB7XG4gICAgICBzZXRDaGFuZ2VkKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRvZ2dsZVNob3cgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvdygodmFsdWUpID0+ICF2YWx1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlciBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9PlxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICBvbkJhY2s9e29uQmFja31cbiAgICAgICAgcmlnaHRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICBjaGlsZHJlbjogdmFsaWRhdGluZyA/IHQoJ1ZhbGlkYXRpbmcnKSA6IHQoJ0ltcG9ydCBhY2NvdW50JyksXG4gICAgICAgICAgaWNvbjogRm9vdGVySWNvbixcbiAgICAgICAgICBvbkNsaWNrOiBmb3JtLnN1Ym1pdCxcbiAgICAgICAgICBkaXNhYmxlZDogIXByaXZhdGVLZXkgfHwgISF2YWxpZGF0ZVN0YXRlLnN0YXR1cyxcbiAgICAgICAgICBsb2FkaW5nOiB2YWxpZGF0aW5nIHx8IGxvYWRpbmdcbiAgICAgICAgfX1cbiAgICAgICAgc3ViSGVhZGVySWNvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiA8Q2xvc2VJY29uIC8+LFxuICAgICAgICAgICAgb25DbGljazogZ29Ib21lXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgICB0aXRsZT17dDxzdHJpbmc+KCdJbXBvcnQgYnkgcHJpdmF0ZSBrZXknKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIHt0KCdUbyBpbXBvcnQgYW4gZXhpc3Rpbmcgd2FsbGV0LCBwbGVhc2UgZW50ZXIgcHJpdmF0ZSBrZXknKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRhaW5lcidcbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IFtmaWVsZE5hbWVdOiAnJyB9fVxuICAgICAgICAgICAgbmFtZT17Zm9ybU5hbWV9XG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgICBvblZhbHVlc0NoYW5nZT17b25WYWx1ZXNDaGFuZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBuYW1lPXtmaWVsZE5hbWV9XG4gICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXt2YWxpZGF0ZVN0YXRlLnN0YXR1c31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFByaXZhdGVLZXlJbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJpdmF0ZS1rZXktaW5wdXQnXG4gICAgICAgICAgICAgICAgaGlkZVRleHQ9eyFzaG93fVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdQcml2YXRlIGtleScpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdFbnRlciBwcml2YXRlIGtleScpfVxuICAgICAgICAgICAgICAgIHN0YXR1c0hlbHA9e3ZhbGlkYXRlU3RhdGUubWVzc2FnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbi1jb250YWluZXInPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtzaG93ID8gRXllU2xhc2ggOiBFeWV9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3d9XG4gICAgICAgICAgICAgICAgc2l6ZT0neHMnXG4gICAgICAgICAgICAgICAgdHlwZT0nZ2hvc3QnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2hvdyA/IHQoJ0hpZGUgcHJpdmF0ZSBrZXknKSA6IHQoJ1Nob3cgcHJpdmF0ZSBrZXknKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQuV2l0aFN1YkhlYWRlck9ubHk+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IEltcG9ydFByaXZhdGVLZXkgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgICcuY29udGFpbmVyJzoge1xuICAgICAgcGFkZGluZzogdG9rZW4ucGFkZGluZ1xuICAgIH0sXG5cbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLmZvcm0tY29udGFpbmVyJzoge1xuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5cbiAgICB9LFxuXG4gICAgJy5idXR0b24tY29udGFpbmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRQcml2YXRlS2V5O1xuIl0sIm5hbWVzIjpbIkNsb3NlSWNvbiIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiUHJpdmF0ZUtleUlucHV0IiwiRVZNX0FDQ09VTlRfVFlQRSIsIklNUE9SVF9BQ0NPVU5UX01PREFMIiwidXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCIsInVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCIsInVzZURlZmF1bHROYXZpZ2F0ZSIsInVzZUZvY3VzRm9ybUl0ZW0iLCJ1c2VHZXREZWZhdWx0QWNjb3VudE5hbWUiLCJ1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCIsInVzZVRyYW5zbGF0aW9uIiwidXNlVW5sb2NrQ2hlY2tlciIsImNyZWF0ZUFjY291bnRTdXJpVjIiLCJ2YWxpZGF0ZU1ldGFtYXNrUHJpdmF0ZUtleVYyIiwiQnV0dG9uIiwiRm9ybSIsIkljb24iLCJDTiIsIkV5ZSIsIkV5ZVNsYXNoIiwiRmlsZUFycm93RG93biIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkZvb3Rlckljb24iLCJmb3JtTmFtZSIsImZpZWxkTmFtZSIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJnb0hvbWUiLCJvbkNvbXBsZXRlIiwib25CYWNrIiwidGltZU91dFJlZiIsInZhbGlkYXRlU3RhdGUiLCJzZXRWYWxpZGF0ZVN0YXRlIiwidmFsaWRhdGluZyIsInNldFZhbGlkYXRpbmciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNob3ciLCJzZXRTaG93IiwiY2hhbmdlZCIsInNldENoYW5nZWQiLCJmb3JtIiwidXNlRm9ybSIsImNoZWNrVW5sb2NrIiwiYWNjb3VudE5hbWUiLCJwcml2YXRlS2V5IiwidXNlV2F0Y2giLCJvblN1Ym1pdCIsInZhbHVlcyIsInRoZW4iLCJ0cmltIiwibmFtZSIsInN1cmkiLCJpc0FsbG93ZWQiLCJ0eXBlcyIsImNhdGNoIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZmluYWxseSIsImFtb3VudCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXV0b0FkZFByZWZpeCIsInNldEZpZWxkVmFsdWUiLCJlIiwib25WYWx1ZXNDaGFuZ2UiLCJjaGFuZ2VkVmFsdWVzIiwidG9nZ2xlU2hvdyIsInZhbHVlIiwiY2hpbGRyZW4iLCJpY29uIiwib25DbGljayIsInN1Ym1pdCIsImRpc2FibGVkIiwiSW1wb3J0UHJpdmF0ZUtleSIsInRoZW1lIiwidG9rZW4iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250U2l6ZUhlYWRpbmc2IiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRIZWFkaW5nNiIsImNvbG9yIiwiY29sb3JUZXh0RGVzY3JpcHRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=