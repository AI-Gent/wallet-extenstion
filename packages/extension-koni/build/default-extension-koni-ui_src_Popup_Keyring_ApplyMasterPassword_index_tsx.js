"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Keyring_ApplyMasterPassword_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Keyring/ApplyMasterPassword/Done.tsx":
/*!***************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Keyring/ApplyMasterPassword/Done.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Account_Item_AccountItemWithName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Account/Item/AccountItemWithName */ "../extension-koni-ui/src/components/Account/Item/AccountItemWithName.tsx");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0











const Component = props => {
  const {
    accounts,
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "page-icon",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "var(--page-icon-color)",
        iconProps: {
          weight: 'fill',
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_6__["default"]
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "title",
      children: t('All done!')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "description",
      children: t('You have successfully updated master password to all accounts')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "account-container",
      children: [accounts.slice(0, 2).map(account => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_extension_koni_ui_components_Account_Item_AccountItemWithName__WEBPACK_IMPORTED_MODULE_0__["default"], {
        accountName: account.name,
        address: account.address,
        avatarSize: 24,
        genesisHash: account.genesisHash,
        isSelected: true
      }, account.address)), accounts.length > 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "and-more",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_7__.Trans, {
          components: {
            highlight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "highlight"
            })
          },
          i18nKey: (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_8__.detectTranslate)('And other <highlight>{{number}}</highlight> accounts'),
          values: {
            number: String(accounts.length - 2).padStart(2, '0')
          }
        })
      })]
    })]
  });
};
const MigrateDone = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(Component).withConfig({
  displayName: "Done__MigrateDone",
  componentId: "sc-1spq2zl-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    padding: `0 ${token.padding}px`,
    textAlign: 'center',
    '.page-icon': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: token.margin,
      marginBottom: token.margin,
      '--page-icon-color': token.colorSecondary
    },
    '.title': {
      marginTop: token.margin,
      marginBottom: token.margin,
      fontWeight: token.fontWeightStrong,
      fontSize: token.fontSizeHeading3,
      lineHeight: token.lineHeightHeading3,
      color: token.colorText
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
    '.account-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeXS
    },
    '.and-more': {
      fontSize: token.fontSizeHeading5,
      lineHeight: token.lineHeightHeading5,
      color: token.colorTextDescription,
      '.highlight': {
        color: token.colorTextBase
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MigrateDone);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Keyring/ApplyMasterPassword/Introduction.tsx":
/*!***********************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Keyring/ApplyMasterPassword/Introduction.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/page-icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShieldStar.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0









const Component = props => {
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "page-icon",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: "var(--page-icon-color)",
        iconProps: {
          weight: 'fill',
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_5__["default"]
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "title",
      children: t('Apply master password')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "description",
      children: t('Master password created successfully. Please apply the master password to your existing accounts')
    })]
  });
};
const IntroductionMigratePassword = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(Component).withConfig({
  displayName: "Introduction__IntroductionMigratePassword",
  componentId: "sc-1tlgtpi-0"
})(({
  theme: {
    token
  }
}) => {
  return {
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
      marginBottom: token.margin,
      fontWeight: token.fontWeightStrong,
      fontSize: token.fontSizeHeading3,
      lineHeight: token.lineHeightHeading3,
      color: token.colorText
    },
    '.description': {
      padding: `0 ${token.controlHeightLG - token.padding}px`,
      fontSize: token.fontSizeHeading5,
      lineHeight: token.lineHeightHeading5,
      color: token.colorTextDescription,
      textAlign: 'center'
    },
    '.form-item-no-error': {
      '.ant-form-item-explain': {
        display: 'none'
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroductionMigratePassword);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Keyring/ApplyMasterPassword/index.tsx":
/*!****************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Keyring/ApplyMasterPassword/index.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/extension-base/constants */ "../extension-base/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useUnlockChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useUnlockChecker */ "../extension-koni-ui/src/hooks/common/useUnlockChecker.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/field/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui_es_sw_avatar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui/es/sw-avatar */ "../../node_modules/@subwallet/react-ui/es/sw-avatar/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowCircleRight.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Trash.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Done */ "../extension-koni-ui/src/Popup/Keyring/ApplyMasterPassword/Done.tsx");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Introduction */ "../extension-koni-ui/src/Popup/Keyring/ApplyMasterPassword/Introduction.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0



















var FormFieldName;
(function (FormFieldName) {
  FormFieldName["PASSWORD"] = "password";
})(FormFieldName || (FormFieldName = {}));
const nextIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
  weight: "fill"
});
const finishIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_13__["default"],
  weight: "fill"
});
const removeIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_14__["default"]
});
const formName = 'migrate-password-form';
const passwordInputId = `${formName}_${FormFieldName.PASSWORD}`;
const focusPassword = () => {
  setTimeout(() => {
    const element = document.getElementById(passwordInputId);
    if (element) {
      element.focus();
    }
  }, 10);
};
const selectPassword = () => {
  setTimeout(() => {
    const element = document.getElementById(passwordInputId);
    if (element) {
      element.select();
    }
  }, 10);
};
const intersectionArray = (array1, array2) => {
  return array1.filter(account => array2.find(acc => acc.address === account.address));
};
const Component = props => {
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useDefaultNavigate)();
  const notify = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.useTheme)();
  const deleteAccountAction = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_1__.useDeleteAccount)();
  const {
    accounts
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.accountState);
  const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('Introduction');
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"].useForm();
  const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(undefined);
  const [isDisabled, setIsDisable] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [deleting, setDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const checkUnlock = (0,_subwallet_extension_koni_ui_hooks_common_useUnlockChecker__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const migratedRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(accounts.filter(acc => acc.address !== _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_18__.ALL_ACCOUNT_KEY && !acc.isExternal && acc.isMasterPassword));
  const migrated = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    const oldVal = migratedRef.current;
    const newVal = accounts.filter(acc => acc.address !== _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_18__.ALL_ACCOUNT_KEY && !acc.isExternal && acc.isMasterPassword);
    const result = intersectionArray(oldVal, newVal);
    migratedRef.current = result;
    return result;
  }, [accounts]);
  const canMigrate = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => accounts.filter(acc => acc.address !== _subwallet_extension_base_constants__WEBPACK_IMPORTED_MODULE_18__.ALL_ACCOUNT_KEY && !acc.isExternal).filter(acc => !migrated.find(item => item.address === acc.address)), [accounts, migrated]);
  const needMigrate = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => canMigrate.filter(acc => !acc.isMasterPassword), [canMigrate]);
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    if (step === 'Migrate') {
      setStep('Introduction');
    } else {
      goHome();
    }
  }, [goHome, step]);
  const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((changedFields, allFields) => {
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.simpleCheckForm)(allFields);
    setIsDisable(error || empty);
  }, []);
  const convertError = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(error => {
    if (error === 'Unable to decode using the supplied passphrase') {
      return t('Wrong password');
    } else {
      return t(error);
    }
  }, [t]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(values => {
    const password = values[FormFieldName.PASSWORD];
    if (currentAccount !== null && currentAccount !== void 0 && currentAccount.address && password) {
      setLoading(true);
      setTimeout(() => {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.keyringMigrateMasterPassword)({
          address: currentAccount.address,
          password: password
        }).then(res => {
          if (!res.status) {
            form.setFields([{
              name: FormFieldName.PASSWORD,
              errors: [convertError(res.errors[0])]
            }]);
            selectPassword();
            setIsError(true);
          } else {
            setIsError(false);
          }
        }).catch(e => {
          setIsError(true);
          form.setFields([{
            name: FormFieldName.PASSWORD,
            errors: [convertError(e.message)]
          }]);
          selectPassword();
        }).finally(() => {
          setLoading(false);
        });
      }, 500);
    }
  }, [currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, form, convertError]);
  const title = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    const migrated = canMigrate.length - needMigrate.length;
    switch (step) {
      case 'Introduction':
        return t('Apply master password');
      case 'Done':
        return t('Successful');
      case 'Migrate':
        return `${String(migrated + 1).padStart(2, '0')}/${String(canMigrate.length).padStart(2, '0')}`;
      default:
        return '';
    }
  }, [t, step, needMigrate.length, canMigrate.length]);
  const footerButton = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    switch (step) {
      case 'Introduction':
        return {
          children: t('Apply master password now'),
          onClick: () => {
            checkUnlock().then(() => {
              setStep(needMigrate.length ? 'Migrate' : 'Done');
            }).catch(() => {
              // User cancel unlock
            });
          },
          icon: nextIcon
        };
      case 'Done':
        return {
          children: t('Finish'),
          onClick: () => {
            goHome();
          },
          icon: finishIcon
        };
      case 'Migrate':
        return {
          children: t('Next'),
          onClick: () => {
            form.submit();
          },
          icon: nextIcon
        };
    }
  }, [checkUnlock, form, goHome, needMigrate.length, step, t]);
  const onDelete = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    if (currentAccount !== null && currentAccount !== void 0 && currentAccount.address) {
      deleteAccountAction().then(() => {
        setDeleting(true);
        setTimeout(() => {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.forgetAccount)(currentAccount.address, true).then(() => {
            setIsError(false);
          }).catch(e => {
            notify({
              message: e.message,
              type: 'error'
            });
          }).finally(() => {
            setDeleting(false);
          });
        }, 500);
      }).catch(e => {
        if (e) {
          notify({
            message: e.message,
            type: 'error'
          });
        }
      });
    }
  }, [currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, deleteAccountAction, notify]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setStep(prevState => {
      if (prevState !== 'Introduction') {
        return needMigrate.length ? 'Migrate' : 'Done';
      } else {
        return 'Introduction';
      }
    });
  }, [needMigrate.length, deleting]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (step === 'Migrate') {
      setCurrentAccount(prevState => {
        if (deleting) {
          return prevState;
        }
        if (!prevState) {
          form.resetFields();
          setIsDisable(true);
          return needMigrate[0];
        } else {
          const exists = needMigrate.find(acc => acc.address === prevState.address);
          form.resetFields();
          setIsDisable(true);
          if (exists) {
            return prevState;
          } else {
            return needMigrate[0];
          }
        }
      });
      focusPassword();
    } else {
      setIsError(false);
      form.resetFields();
      setIsDisable(true);
    }
  }, [form, needMigrate, deleting, step]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    animateOnce: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      disableBack: loading,
      onBack: onBack,
      rightFooterButton: {
        ...footerButton,
        disabled: step === 'Migrate' && (isDisabled || deleting),
        loading: step === 'Migrate' && loading
      },
      showBackButton: step !== 'Introduction',
      subHeaderLeft: step === 'Done' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
      title: title,
      children: [step === 'Introduction' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Introduction__WEBPACK_IMPORTED_MODULE_9__["default"], {}), step === 'Done' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Done__WEBPACK_IMPORTED_MODULE_8__["default"], {
        accounts: canMigrate
      }), step === 'Migrate' && currentAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "body-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "account-avatar",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui_es_sw_avatar__WEBPACK_IMPORTED_MODULE_19__["default"], {
            size: token.sizeLG * 4,
            theme: currentAccount.type === 'ethereum' ? 'ethereum' : 'polkadot',
            value: currentAccount.address
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"], {
          form: form,
          initialValues: {
            [FormFieldName.PASSWORD]: ''
          },
          name: formName,
          onFieldsChange: onUpdate,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
              content: currentAccount.name || '',
              label: t('Account name'),
              placeholder: t('Account name')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
              content: (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.toShort)(currentAccount.address || '', 15, 17),
              label: t('Account address'),
              placeholder: t('Account address')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
            name: FormFieldName.PASSWORD,
            rules: [{
              message: t('Current password is required'),
              required: true
            }],
            statusHelpAsTooltip: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
              label: t('Current password'),
              type: "password"
            })
          }), isError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
            className: "form-item-button",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
              icon: removeIcon,
              loading: deleting,
              onClick: onDelete,
              size: "xs",
              type: "ghost",
              children: t('Remove this account')
            })
          })]
        })]
      })]
    })
  });
};
const ApplyMasterPassword = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__["default"])(Component).withConfig({
  displayName: "ApplyMasterPassword",
  componentId: "sc-dm26e8-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.body-container': {
      padding: `0 ${token.padding}px`,
      '.account-avatar': {
        marginTop: token.margin,
        marginBottom: token.margin * 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      '.ant-field-content-wrapper': {
        '.ant-field-content': {
          color: token.colorTextDescription
        }
      },
      '.ant-form-item': {
        marginBottom: token.marginXS
      },
      '.form-item-no-error': {
        '.ant-form-item-explain': {
          display: 'none'
        }
      },
      '.form-item-button': {
        paddingTop: token.marginXXS,
        marginBottom: 0,
        '.ant-form-item-control-input-content': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplyMasterPassword);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfS2V5cmluZ19BcHBseU1hc3RlclBhc3N3b3JkX2luZGV4X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHa0U7QUFDeUM7QUFFNUQ7QUFDbkI7QUFDaUI7QUFDbkI7QUFDNEI7QUFDZjtBQUFBO0FBQUE7QUFNdkMsTUFBTVMsU0FBMEIsR0FBSUMsS0FBWSxJQUFLO0VBQ25ELE1BQU07SUFBRUMsUUFBUTtJQUFFQztFQUFVLENBQUMsR0FBR0YsS0FBSztFQUVyQyxNQUFNO0lBQUVHO0VBQUUsQ0FBQyxHQUFHTiw2REFBYyxFQUFFO0VBRTlCLG9CQUNFO0lBQUssU0FBUyxFQUFFSixpREFBRSxDQUFDUyxTQUFTLENBQUU7SUFBQSx3QkFDNUI7TUFBSyxTQUFTLEVBQUMsV0FBVztNQUFBLHVCQUN4Qix1REFBQywyREFBUTtRQUNQLEtBQUssRUFBQyx3QkFBd0I7UUFDOUIsU0FBUyxFQUFFO1VBQ1RFLE1BQU0sRUFBRSxNQUFNO1VBQ2RDLFlBQVksRUFBRVgsc0RBQVdBO1FBQzNCO01BQUU7SUFDRixFQUNFLGVBQ047TUFBSyxTQUFTLEVBQUMsT0FBTztNQUFBLFVBQ25CUyxDQUFDLENBQUMsV0FBVztJQUFDLEVBQ1gsZUFDTjtNQUFLLFNBQVMsRUFBQyxhQUFhO01BQUEsVUFDekJBLENBQUMsQ0FBQywrREFBK0Q7SUFBQyxFQUMvRCxlQUNOO01BQUssU0FBUyxFQUFDLG1CQUFtQjtNQUFBLFdBQy9CRixRQUFRLENBQUNLLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBRUMsT0FBTyxpQkFDaEMsdURBQUMsZ0hBQW1CO1FBQ2xCLFdBQVcsRUFBRUEsT0FBTyxDQUFDQyxJQUFLO1FBQzFCLE9BQU8sRUFBRUQsT0FBTyxDQUFDRSxPQUFRO1FBQ3pCLFVBQVUsRUFBRSxFQUFHO1FBQ2YsV0FBVyxFQUFFRixPQUFPLENB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QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSxTQUFTLHNFQUFtQjtBQUM1Qjs7QUFFQSxvQ0FBb0MsaURBQVU7QUFDOUMsU0FBUywwREFBbUIsQ0FBQyw0REFBUTtBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9LZXlyaW5nL0FwcGx5TWFzdGVyUGFzc3dvcmQvRG9uZS50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvS2V5cmluZy9BcHBseU1hc3RlclBhc3N3b3JkL0ludHJvZHVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvS2V5cmluZy9BcHBseU1hc3RlclBhc3N3b3JkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9waG9zcGhvci1yZWFjdC9kaXN0L2ljb25zL0Fycm93Q2lyY2xlUmlnaHQuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBBY2NvdW50SnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBkZXRlY3RUcmFuc2xhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCBBY2NvdW50SXRlbVdpdGhOYW1lIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9BY2NvdW50L0l0ZW0vQWNjb3VudEl0ZW1XaXRoTmFtZSc7XG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBQYWdlSWNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ2hlY2tDaXJjbGUgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGhlbWVQcm9wcyB7XG4gIGFjY291bnRzOiBBY2NvdW50SnNvbltdO1xufVxuXG5jb25zdCBDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY2NvdW50cywgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS1pY29uJz5cbiAgICAgICAgPFBhZ2VJY29uXG4gICAgICAgICAgY29sb3I9J3ZhcigtLXBhZ2UtaWNvbi1jb2xvciknXG4gICAgICAgICAgaWNvblByb3BzPXt7XG4gICAgICAgICAgICB3ZWlnaHQ6ICdmaWxsJyxcbiAgICAgICAgICAgIHBob3NwaG9ySWNvbjogQ2hlY2tDaXJjbGVcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICB7dCgnQWxsIGRvbmUhJyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+XG4gICAgICAgIHt0KCdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgdXBkYXRlZCBtYXN0ZXIgcGFzc3dvcmQgdG8gYWxsIGFjY291bnRzJyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2NvdW50LWNvbnRhaW5lcic+XG4gICAgICAgIHthY2NvdW50cy5zbGljZSgwLCAyKS5tYXAoKGFjY291bnQpID0+IChcbiAgICAgICAgICA8QWNjb3VudEl0ZW1XaXRoTmFtZVxuICAgICAgICAgICAgYWNjb3VudE5hbWU9e2FjY291bnQubmFtZX1cbiAgICAgICAgICAgIGFkZHJlc3M9e2FjY291bnQuYWRkcmVzc31cbiAgICAgICAgICAgIGF2YXRhclNpemU9ezI0fVxuICAgICAgICAgICAgZ2VuZXNpc0hhc2g9e2FjY291bnQuZ2VuZXNpc0hhc2h9XG4gICAgICAgICAgICBpc1NlbGVjdGVkPXt0cnVlfVxuICAgICAgICAgICAga2V5PXthY2NvdW50LmFkZHJlc3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIHthY2NvdW50cy5sZW5ndGggPiAyICYmXG4gICAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuZC1tb3JlJz5cbiAgICAgICAgICAgICAgPFRyYW5zXG4gICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBoaWdobGlnaHQ6IDxzcGFuIGNsYXNzTmFtZT0naGlnaGxpZ2h0JyAvPiB9fVxuICAgICAgICAgICAgICAgIGkxOG5LZXk9e2RldGVjdFRyYW5zbGF0ZSgnQW5kIG90aGVyIDxoaWdobGlnaHQ+e3tudW1iZXJ9fTwvaGlnaGxpZ2h0PiBhY2NvdW50cycpfVxuICAgICAgICAgICAgICAgIHZhbHVlcz17eyBudW1iZXI6IFN0cmluZyhhY2NvdW50cy5sZW5ndGggLSAyKS5wYWRTdGFydCgyLCAnMCcpIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTWlncmF0ZURvbmUgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcblxuICAgICcucGFnZS1pY29uJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW4sXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbixcbiAgICAgICctLXBhZ2UtaWNvbi1jb2xvcic6IHRva2VuLmNvbG9yU2Vjb25kYXJ5XG4gICAgfSxcblxuICAgICcudGl0bGUnOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpbixcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luLFxuICAgICAgZm9udFdlaWdodDogdG9rZW4uZm9udFdlaWdodFN0cm9uZyxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmczLFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmczLFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dFxuICAgIH0sXG5cbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5jb250cm9sSGVpZ2h0TEcgLSB0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4gKiAyLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzUsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzUsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcuYWNjb3VudC1jb250YWluZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGdhcDogdG9rZW4uc2l6ZVhTXG4gICAgfSxcblxuICAgICcuYW5kLW1vcmUnOiB7XG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNSxcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNSxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcblxuICAgICAgJy5oaWdobGlnaHQnOiB7XG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRCYXNlXG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1pZ3JhdGVEb25lO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IFBhZ2VJY29uIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBTaGllbGRTdGFyIH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHNcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtaWNvbic+XG4gICAgICAgIDxQYWdlSWNvblxuICAgICAgICAgIGNvbG9yPSd2YXIoLS1wYWdlLWljb24tY29sb3IpJ1xuICAgICAgICAgIGljb25Qcm9wcz17e1xuICAgICAgICAgICAgd2VpZ2h0OiAnZmlsbCcsXG4gICAgICAgICAgICBwaG9zcGhvckljb246IFNoaWVsZFN0YXJcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICB7dCgnQXBwbHkgbWFzdGVyIHBhc3N3b3JkJyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+XG4gICAgICAgIHt0KCdNYXN0ZXIgcGFzc3dvcmQgY3JlYXRlZCBzdWNjZXNzZnVsbHkuIFBsZWFzZSBhcHBseSB0aGUgbWFzdGVyIHBhc3N3b3JkIHRvIHlvdXIgZXhpc3RpbmcgYWNjb3VudHMnKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgSW50cm9kdWN0aW9uTWlncmF0ZVBhc3N3b3JkID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYWRkaW5nOiBgMCAke3Rva2VuLnBhZGRpbmd9cHhgLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG5cbiAgICAnLnBhZ2UtaWNvbic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgJy0tcGFnZS1pY29uLWNvbG9yJzogdG9rZW4uY29sb3JTZWNvbmRhcnlcbiAgICB9LFxuXG4gICAgJy50aXRsZSc6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW4sXG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5mb250V2VpZ2h0U3Ryb25nLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzMsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzMsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0XG4gICAgfSxcblxuICAgICcuZGVzY3JpcHRpb24nOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3Rva2VuLmNvbnRyb2xIZWlnaHRMRyAtIHRva2VuLnBhZGRpbmd9cHhgLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzUsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzUsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcblxuICAgICcuZm9ybS1pdGVtLW5vLWVycm9yJzoge1xuICAgICAgJy5hbnQtZm9ybS1pdGVtLWV4cGxhaW4nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbnRyb2R1Y3Rpb25NaWdyYXRlUGFzc3dvcmQ7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgQWNjb3VudEpzb24gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvdHlwZXMnO1xuaW1wb3J0IHsgQUxMX0FDQ09VTlRfS0VZIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24tYmFzZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ2xvc2VJY29uLCBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURlZmF1bHROYXZpZ2F0ZSwgdXNlRGVsZXRlQWNjb3VudCwgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgdXNlVW5sb2NrQ2hlY2tlciBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VVbmxvY2tDaGVja2VyJztcbmltcG9ydCB7IGZvcmdldEFjY291bnQsIGtleXJpbmdNaWdyYXRlTWFzdGVyUGFzc3dvcmQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcyc7XG5pbXBvcnQgeyBGb3JtQ2FsbGJhY2tzLCBGb3JtRmllbGREYXRhLCBUaGVtZSwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgc2ltcGxlQ2hlY2tGb3JtLCB0b1Nob3J0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscyc7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblByb3BzLCBGaWVsZCwgRm9ybSwgSWNvbiwgSW5wdXQgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBTd0F2YXRhciBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpL2VzL3N3LWF2YXRhcic7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBBcnJvd0NpcmNsZVJpZ2h0LCBDaGVja0NpcmNsZSwgVHJhc2ggfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBNaWdyYXRlRG9uZSBmcm9tICcuL0RvbmUnO1xuaW1wb3J0IEludHJvZHVjdGlvbk1pZ3JhdGVQYXNzd29yZCBmcm9tICcuL0ludHJvZHVjdGlvbic7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG50eXBlIFBhZ2VTdGVwID0gJ0ludHJvZHVjdGlvbicgfCAnTWlncmF0ZScgfCAnRG9uZSdcblxuZW51bSBGb3JtRmllbGROYW1lIHtcbiAgUEFTU1dPUkQgPSAncGFzc3dvcmQnLFxufVxuXG5pbnRlcmZhY2UgTWlncmF0ZVBhc3N3b3JkRm9ybVN0YXRlIHtcbiAgW0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkRdOiBzdHJpbmc7XG59XG5cbmNvbnN0IG5leHRJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17QXJyb3dDaXJjbGVSaWdodH1cbiAgICB3ZWlnaHQ9J2ZpbGwnXG4gIC8+XG4pO1xuXG5jb25zdCBmaW5pc2hJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17Q2hlY2tDaXJjbGV9XG4gICAgd2VpZ2h0PSdmaWxsJ1xuICAvPlxuKTtcblxuY29uc3QgcmVtb3ZlSWNvbiA9IChcbiAgPEljb25cbiAgICBwaG9zcGhvckljb249e1RyYXNofVxuICAvPlxuKTtcblxuY29uc3QgZm9ybU5hbWUgPSAnbWlncmF0ZS1wYXNzd29yZC1mb3JtJztcbmNvbnN0IHBhc3N3b3JkSW5wdXRJZCA9IGAke2Zvcm1OYW1lfV8ke0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkR9YDtcblxuY29uc3QgZm9jdXNQYXNzd29yZCA9ICgpID0+IHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhc3N3b3JkSW5wdXRJZCk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgMTApO1xufTtcblxuY29uc3Qgc2VsZWN0UGFzc3dvcmQgPSAoKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXNzd29yZElucHV0SWQpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIChlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNlbGVjdCgpO1xuICAgIH1cbiAgfSwgMTApO1xufTtcblxuY29uc3QgaW50ZXJzZWN0aW9uQXJyYXkgPSAoYXJyYXkxOiBBY2NvdW50SnNvbltdLCBhcnJheTI6IEFjY291bnRKc29uW10pOiBBY2NvdW50SnNvbltdID0+IHtcbiAgcmV0dXJuIGFycmF5MS5maWx0ZXIoKGFjY291bnQpID0+IGFycmF5Mi5maW5kKChhY2MpID0+IGFjYy5hZGRyZXNzID09PSBhY2NvdW50LmFkZHJlc3MpKTtcbn07XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBnb0hvbWUgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuICBjb25zdCBub3RpZnkgPSB1c2VOb3RpZmljYXRpb24oKTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcblxuICBjb25zdCBkZWxldGVBY2NvdW50QWN0aW9uID0gdXNlRGVsZXRlQWNjb3VudCgpO1xuXG4gIGNvbnN0IHsgYWNjb3VudHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUpO1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZTxQYWdlU3RlcD4oJ0ludHJvZHVjdGlvbicpO1xuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm08TWlncmF0ZVBhc3N3b3JkRm9ybVN0YXRlPigpO1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlPEFjY291bnRKc29uIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0SXNEaXNhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hlY2tVbmxvY2sgPSB1c2VVbmxvY2tDaGVja2VyKCk7XG5cbiAgY29uc3QgbWlncmF0ZWRSZWYgPSB1c2VSZWY8QWNjb3VudEpzb25bXT4oYWNjb3VudHMuZmlsdGVyKChhY2MpID0+IGFjYy5hZGRyZXNzICE9PSBBTExfQUNDT1VOVF9LRVkgJiYgIWFjYy5pc0V4dGVybmFsICYmIGFjYy5pc01hc3RlclBhc3N3b3JkKSk7XG5cbiAgY29uc3QgbWlncmF0ZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBvbGRWYWwgPSBtaWdyYXRlZFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IG5ld1ZhbCA9IGFjY291bnRzLmZpbHRlcigoYWNjKSA9PiBhY2MuYWRkcmVzcyAhPT0gQUxMX0FDQ09VTlRfS0VZICYmICFhY2MuaXNFeHRlcm5hbCAmJiBhY2MuaXNNYXN0ZXJQYXNzd29yZCk7XG4gICAgY29uc3QgcmVzdWx0ID0gaW50ZXJzZWN0aW9uQXJyYXkob2xkVmFsLCBuZXdWYWwpO1xuXG4gICAgbWlncmF0ZWRSZWYuY3VycmVudCA9IHJlc3VsdDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFthY2NvdW50c10pO1xuXG4gIGNvbnN0IGNhbk1pZ3JhdGUgPSB1c2VNZW1vKFxuICAgICgpID0+IGFjY291bnRzXG4gICAgICAuZmlsdGVyKChhY2MpID0+IGFjYy5hZGRyZXNzICE9PSBBTExfQUNDT1VOVF9LRVkgJiYgIWFjYy5pc0V4dGVybmFsKVxuICAgICAgLmZpbHRlcigoYWNjKSA9PiAhbWlncmF0ZWQuZmluZCgoaXRlbSkgPT4gaXRlbS5hZGRyZXNzID09PSBhY2MuYWRkcmVzcykpXG4gICAgLCBbYWNjb3VudHMsIG1pZ3JhdGVkXVxuICApO1xuXG4gIGNvbnN0IG5lZWRNaWdyYXRlID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjYW5NaWdyYXRlLmZpbHRlcigoYWNjKSA9PiAhYWNjLmlzTWFzdGVyUGFzc3dvcmQpXG4gICAgLCBbY2FuTWlncmF0ZV1cbiAgKTtcblxuICBjb25zdCBvbkJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHN0ZXAgPT09ICdNaWdyYXRlJykge1xuICAgICAgc2V0U3RlcCgnSW50cm9kdWN0aW9uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdvSG9tZSgpO1xuICAgIH1cbiAgfSwgW2dvSG9tZSwgc3RlcF0pO1xuXG4gIGNvbnN0IG9uVXBkYXRlOiBGb3JtQ2FsbGJhY2tzPE1pZ3JhdGVQYXNzd29yZEZvcm1TdGF0ZT5bJ29uRmllbGRzQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygoY2hhbmdlZEZpZWxkczogRm9ybUZpZWxkRGF0YVtdLCBhbGxGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSkgPT4ge1xuICAgIGNvbnN0IHsgZW1wdHksIGVycm9yIH0gPSBzaW1wbGVDaGVja0Zvcm0oYWxsRmllbGRzKTtcblxuICAgIHNldElzRGlzYWJsZShlcnJvciB8fCBlbXB0eSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb252ZXJ0RXJyb3IgPSB1c2VDYWxsYmFjaygoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgIGlmIChlcnJvciA9PT0gJ1VuYWJsZSB0byBkZWNvZGUgdXNpbmcgdGhlIHN1cHBsaWVkIHBhc3NwaHJhc2UnKSB7XG4gICAgICByZXR1cm4gdCgnV3JvbmcgcGFzc3dvcmQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHQoZXJyb3IpO1xuICAgIH1cbiAgfSwgW3RdKTtcblxuICBjb25zdCBvblN1Ym1pdDogRm9ybUNhbGxiYWNrczxNaWdyYXRlUGFzc3dvcmRGb3JtU3RhdGU+WydvbkZpbmlzaCddID0gdXNlQ2FsbGJhY2soKHZhbHVlczogTWlncmF0ZVBhc3N3b3JkRm9ybVN0YXRlKSA9PiB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB2YWx1ZXNbRm9ybUZpZWxkTmFtZS5QQVNTV09SRF07XG5cbiAgICBpZiAoY3VycmVudEFjY291bnQ/LmFkZHJlc3MgJiYgcGFzc3dvcmQpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAga2V5cmluZ01pZ3JhdGVNYXN0ZXJQYXNzd29yZCh7XG4gICAgICAgICAgYWRkcmVzczogY3VycmVudEFjY291bnQuYWRkcmVzcyxcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICBmb3JtLnNldEZpZWxkcyhbeyBuYW1lOiBGb3JtRmllbGROYW1lLlBBU1NXT1JELCBlcnJvcnM6IFtjb252ZXJ0RXJyb3IocmVzLmVycm9yc1swXSldIH1dKTtcbiAgICAgICAgICAgIHNlbGVjdFBhc3N3b3JkKCk7XG4gICAgICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0Vycm9yKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlOiBFcnJvcikgPT4ge1xuICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgICAgICAgZm9ybS5zZXRGaWVsZHMoW3sgbmFtZTogRm9ybUZpZWxkTmFtZS5QQVNTV09SRCwgZXJyb3JzOiBbY29udmVydEVycm9yKGUubWVzc2FnZSldIH1dKTtcbiAgICAgICAgICBzZWxlY3RQYXNzd29yZCgpO1xuICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRBY2NvdW50Py5hZGRyZXNzLCBmb3JtLCBjb252ZXJ0RXJyb3JdKTtcblxuICBjb25zdCB0aXRsZSA9IHVzZU1lbW8oKCk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgbWlncmF0ZWQgPSBjYW5NaWdyYXRlLmxlbmd0aCAtIG5lZWRNaWdyYXRlLmxlbmd0aDtcblxuICAgIHN3aXRjaCAoc3RlcCkge1xuICAgICAgY2FzZSAnSW50cm9kdWN0aW9uJzpcbiAgICAgICAgcmV0dXJuIHQ8c3RyaW5nPignQXBwbHkgbWFzdGVyIHBhc3N3b3JkJyk7XG4gICAgICBjYXNlICdEb25lJzpcbiAgICAgICAgcmV0dXJuIHQ8c3RyaW5nPignU3VjY2Vzc2Z1bCcpO1xuICAgICAgY2FzZSAnTWlncmF0ZSc6XG4gICAgICAgIHJldHVybiBgJHtTdHJpbmcobWlncmF0ZWQgKyAxKS5wYWRTdGFydCgyLCAnMCcpfS8ke1N0cmluZyhjYW5NaWdyYXRlLmxlbmd0aCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwgW3QsIHN0ZXAsIG5lZWRNaWdyYXRlLmxlbmd0aCwgY2FuTWlncmF0ZS5sZW5ndGhdKTtcblxuICBjb25zdCBmb290ZXJCdXR0b24gPSB1c2VNZW1vKCgpOiBCdXR0b25Qcm9wcyA9PiB7XG4gICAgc3dpdGNoIChzdGVwKSB7XG4gICAgICBjYXNlICdJbnRyb2R1Y3Rpb24nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiB0KCdBcHBseSBtYXN0ZXIgcGFzc3dvcmQgbm93JyksXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tVbmxvY2soKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgc2V0U3RlcChuZWVkTWlncmF0ZS5sZW5ndGggPyAnTWlncmF0ZScgOiAnRG9uZScpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBVc2VyIGNhbmNlbCB1bmxvY2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogbmV4dEljb25cbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ0RvbmUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiB0KCdGaW5pc2gnKSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBnb0hvbWUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246IGZpbmlzaEljb25cbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ01pZ3JhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiB0KCdOZXh0JyksXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246IG5leHRJY29uXG4gICAgICAgIH07XG4gICAgfVxuICB9LCBbY2hlY2tVbmxvY2ssIGZvcm0sIGdvSG9tZSwgbmVlZE1pZ3JhdGUubGVuZ3RoLCBzdGVwLCB0XSk7XG5cbiAgY29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzKSB7XG4gICAgICBkZWxldGVBY2NvdW50QWN0aW9uKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNldERlbGV0aW5nKHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZm9yZ2V0QWNjb3VudChjdXJyZW50QWNjb3VudC5hZGRyZXNzLCB0cnVlKVxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNFcnJvcihmYWxzZSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RGVsZXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIG5vdGlmeSh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFtjdXJyZW50QWNjb3VudD8uYWRkcmVzcywgZGVsZXRlQWNjb3VudEFjdGlvbiwgbm90aWZ5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGVwKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIGlmIChwcmV2U3RhdGUgIT09ICdJbnRyb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZWVkTWlncmF0ZS5sZW5ndGggPyAnTWlncmF0ZScgOiAnRG9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ0ludHJvZHVjdGlvbic7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtuZWVkTWlncmF0ZS5sZW5ndGgsIGRlbGV0aW5nXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RlcCA9PT0gJ01pZ3JhdGUnKSB7XG4gICAgICBzZXRDdXJyZW50QWNjb3VudCgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgIGlmIChkZWxldGluZykge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByZXZTdGF0ZSkge1xuICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICBzZXRJc0Rpc2FibGUodHJ1ZSk7XG5cbiAgICAgICAgICByZXR1cm4gbmVlZE1pZ3JhdGVbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RzID0gbmVlZE1pZ3JhdGUuZmluZCgoYWNjKSA9PiBhY2MuYWRkcmVzcyA9PT0gcHJldlN0YXRlLmFkZHJlc3MpO1xuXG4gICAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgIHNldElzRGlzYWJsZSh0cnVlKTtcblxuICAgICAgICAgIGlmIChleGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZWVkTWlncmF0ZVswXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmb2N1c1Bhc3N3b3JkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzRXJyb3IoZmFsc2UpO1xuICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgc2V0SXNEaXNhYmxlKHRydWUpO1xuICAgIH1cbiAgfSwgW2Zvcm0sIG5lZWRNaWdyYXRlLCBkZWxldGluZywgc3RlcF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyXG4gICAgICBhbmltYXRlT25jZT17dHJ1ZX1cbiAgICAgIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX1cbiAgICA+XG4gICAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICAgIGRpc2FibGVCYWNrPXtsb2FkaW5nfVxuICAgICAgICBvbkJhY2s9e29uQmFja31cbiAgICAgICAgcmlnaHRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICAuLi5mb290ZXJCdXR0b24sXG4gICAgICAgICAgZGlzYWJsZWQ6IHN0ZXAgPT09ICdNaWdyYXRlJyAmJiAoaXNEaXNhYmxlZCB8fCBkZWxldGluZyksXG4gICAgICAgICAgbG9hZGluZzogc3RlcCA9PT0gJ01pZ3JhdGUnICYmIGxvYWRpbmdcbiAgICAgICAgfX1cbiAgICAgICAgc2hvd0JhY2tCdXR0b249e3N0ZXAgIT09ICdJbnRyb2R1Y3Rpb24nfVxuICAgICAgICBzdWJIZWFkZXJMZWZ0PXtzdGVwID09PSAnRG9uZScgJiYgPENsb3NlSWNvbiAvPn1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgPlxuICAgICAgICB7c3RlcCA9PT0gJ0ludHJvZHVjdGlvbicgJiYgPEludHJvZHVjdGlvbk1pZ3JhdGVQYXNzd29yZCAvPn1cbiAgICAgICAge3N0ZXAgPT09ICdEb25lJyAmJiA8TWlncmF0ZURvbmUgYWNjb3VudHM9e2Nhbk1pZ3JhdGV9IC8+fVxuICAgICAgICB7c3RlcCA9PT0gJ01pZ3JhdGUnICYmIGN1cnJlbnRBY2NvdW50ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keS1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjY291bnQtYXZhdGFyJz5cbiAgICAgICAgICAgICAgPFN3QXZhdGFyXG4gICAgICAgICAgICAgICAgc2l6ZT17dG9rZW4uc2l6ZUxHICogNH1cbiAgICAgICAgICAgICAgICB0aGVtZT17Y3VycmVudEFjY291bnQudHlwZSA9PT0gJ2V0aGVyZXVtJyA/ICdldGhlcmV1bScgOiAncG9sa2Fkb3QnfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50QWNjb3VudC5hZGRyZXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgW0Zvcm1GaWVsZE5hbWUuUEFTU1dPUkRdOiAnJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBuYW1lPXtmb3JtTmFtZX1cbiAgICAgICAgICAgICAgb25GaWVsZHNDaGFuZ2U9e29uVXBkYXRlfVxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtjdXJyZW50QWNjb3VudC5uYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ0FjY291bnQgbmFtZScpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ0FjY291bnQgbmFtZScpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgY29udGVudD17dG9TaG9ydChjdXJyZW50QWNjb3VudC5hZGRyZXNzIHx8ICcnLCAxNSwgMTcpfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ0FjY291bnQgYWRkcmVzcycpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ0FjY291bnQgYWRkcmVzcycpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgbmFtZT17Rm9ybUZpZWxkTmFtZS5QQVNTV09SRH1cbiAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdDdXJyZW50IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBsYWJlbD17dCgnQ3VycmVudCBwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc0Vycm9yICYmIChcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWl0ZW0tYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17cmVtb3ZlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtkZWxldGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPSd4cydcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdnaG9zdCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdSZW1vdmUgdGhpcyBhY2NvdW50Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgQXBwbHlNYXN0ZXJQYXNzd29yZCA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5ib2R5LWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG5cbiAgICAgICcuYWNjb3VudC1hdmF0YXInOiB7XG4gICAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpbiAqIDIsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgfSxcblxuICAgICAgJy5hbnQtZmllbGQtY29udGVudC13cmFwcGVyJzoge1xuICAgICAgICAnLmFudC1maWVsZC1jb250ZW50Jzoge1xuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAnLmFudC1mb3JtLWl0ZW0nOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luWFNcbiAgICAgIH0sXG5cbiAgICAgICcuZm9ybS1pdGVtLW5vLWVycm9yJzoge1xuICAgICAgICAnLmFudC1mb3JtLWl0ZW0tZXhwbGFpbic6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJy5mb3JtLWl0ZW0tYnV0dG9uJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiB0b2tlbi5tYXJnaW5YWFMsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMCxcblxuICAgICAgICAnLmFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50Jzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBseU1hc3RlclBhc3N3b3JkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJQYXRoRm9yV2VpZ2h0IH0gZnJvbSAnLi4vbGliL2luZGV4LmVzbS5qcyc7XG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vbGliL0ljb25CYXNlLmVzbS5qcyc7XG5cbi8qIEdFTkVSQVRFRCBGSUxFICovXG52YXIgcGF0aHNCeVdlaWdodCA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImJvbGRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI4OFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjE2OFwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZHVvdG9uZVwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBvcGFjaXR5OiBcIjAuMlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjIsMTA0LjIsMCwwLDAsMTI4LDI0Wm00Ny40LDEwNy4xYTguNyw4LjcsMCwwLDEtMS44LDIuNmwtMzMuOSwzMy45YTcuNiw3LjYsMCwwLDEtNS42LDIuMyw3LjgsNy44LDAsMCwxLTUuNy0yLjMsOCw4LDAsMCwxLDAtMTEuM0wxNDguNywxMzZIODhhOCw4LDAsMCwxLDAtMTZoNjAuN0wxMjguNCw5OS43YTgsOCwwLDAsMSwxMS4zLTExLjNsMzMuOSwzMy45YTguNyw4LjcsMCwwLDEsMS44LDIuNkE4LjMsOC4zLDAsMCwxLDE3NS40LDEzMS4xWlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjEyOFwiLFxuICAgIGN5OiBcIjEyOFwiLFxuICAgIHI6IFwiOTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjEzNC4xIDE2MS45IDE2OCAxMjggMTM0LjEgOTQuMVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTI4XCIsXG4gICAgY3k6IFwiMTI4XCIsXG4gICAgcjogXCI5NlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxMzQuMSAxNjEuOSAxNjggMTI4IDEzNC4xIDk0LjFcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjg4XCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMTY4XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcInJlZ3VsYXJcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMjhcIixcbiAgICBjeTogXCIxMjhcIixcbiAgICByOiBcIjk2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTM0LjEgMTYxLjkgMTY4IDEyOCAxMzQuMSA5NC4xXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiODhcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIxNjhcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5cbnZhciByZW5kZXJQYXRoID0gZnVuY3Rpb24gcmVuZGVyUGF0aCh3ZWlnaHQsIGNvbG9yKSB7XG4gIHJldHVybiByZW5kZXJQYXRoRm9yV2VpZ2h0KHdlaWdodCwgY29sb3IsIHBhdGhzQnlXZWlnaHQpO1xufTtcblxudmFyIEFycm93Q2lyY2xlUmlnaHQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuQXJyb3dDaXJjbGVSaWdodC5kaXNwbGF5TmFtZSA9IFwiQXJyb3dDaXJjbGVSaWdodFwiO1xuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0NpcmNsZVJpZ2h0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyb3dDaXJjbGVSaWdodC5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiZGV0ZWN0VHJhbnNsYXRlIiwiQWNjb3VudEl0ZW1XaXRoTmFtZSIsIlBhZ2VJY29uIiwiQ04iLCJDaGVja0NpcmNsZSIsIlJlYWN0IiwiVHJhbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInN0eWxlZCIsIkNvbXBvbmVudCIsInByb3BzIiwiYWNjb3VudHMiLCJjbGFzc05hbWUiLCJ0Iiwid2VpZ2h0IiwicGhvc3Bob3JJY29uIiwic2xpY2UiLCJtYXAiLCJhY2NvdW50IiwibmFtZSIsImFkZHJlc3MiLCJnZW5lc2lzSGFzaCIsImxlbmd0aCIsImhpZ2hsaWdodCIsIm51bWJlciIsIlN0cmluZyIsInBhZFN0YXJ0IiwiTWlncmF0ZURvbmUiLCJ0aGVtZSIsInRva2VuIiwicGFkZGluZyIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsImNvbG9yU2Vjb25kYXJ5IiwiZm9udFdlaWdodCIsImZvbnRXZWlnaHRTdHJvbmciLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzMiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmczIiwiY29sb3IiLCJjb2xvclRleHQiLCJjb250cm9sSGVpZ2h0TEciLCJmb250U2l6ZUhlYWRpbmc1IiwibGluZUhlaWdodEhlYWRpbmc1IiwiY29sb3JUZXh0RGVzY3JpcHRpb24iLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwic2l6ZVhTIiwiY29sb3JUZXh0QmFzZSIsIlNoaWVsZFN0YXIiLCJJbnRyb2R1Y3Rpb25NaWdyYXRlUGFzc3dvcmQiLCJBTExfQUNDT1VOVF9LRVkiLCJDbG9zZUljb24iLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsInVzZURlZmF1bHROYXZpZ2F0ZSIsInVzZURlbGV0ZUFjY291bnQiLCJ1c2VOb3RpZmljYXRpb24iLCJ1c2VVbmxvY2tDaGVja2VyIiwiZm9yZ2V0QWNjb3VudCIsImtleXJpbmdNaWdyYXRlTWFzdGVyUGFzc3dvcmQiLCJzaW1wbGVDaGVja0Zvcm0iLCJ0b1Nob3J0IiwiQnV0dG9uIiwiRmllbGQiLCJGb3JtIiwiSWNvbiIsIklucHV0IiwiU3dBdmF0YXIiLCJBcnJvd0NpcmNsZVJpZ2h0IiwiVHJhc2giLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlVGhlbWUiLCJGb3JtRmllbGROYW1lIiwibmV4dEljb24iLCJmaW5pc2hJY29uIiwicmVtb3ZlSWNvbiIsImZvcm1OYW1lIiwicGFzc3dvcmRJbnB1dElkIiwiUEFTU1dPUkQiLCJmb2N1c1Bhc3N3b3JkIiwic2V0VGltZW91dCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJzZWxlY3RQYXNzd29yZCIsInNlbGVjdCIsImludGVyc2VjdGlvbkFycmF5IiwiYXJyYXkxIiwiYXJyYXkyIiwiZmlsdGVyIiwiZmluZCIsImFjYyIsImdvSG9tZSIsIm5vdGlmeSIsImRlbGV0ZUFjY291bnRBY3Rpb24iLCJzdGF0ZSIsImFjY291bnRTdGF0ZSIsInN0ZXAiLCJzZXRTdGVwIiwiZm9ybSIsInVzZUZvcm0iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwidW5kZWZpbmVkIiwiaXNEaXNhYmxlZCIsInNldElzRGlzYWJsZSIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwiY2hlY2tVbmxvY2siLCJtaWdyYXRlZFJlZiIsImlzRXh0ZXJuYWwiLCJpc01hc3RlclBhc3N3b3JkIiwibWlncmF0ZWQiLCJvbGRWYWwiLCJjdXJyZW50IiwibmV3VmFsIiwicmVzdWx0IiwiY2FuTWlncmF0ZSIsIml0ZW0iLCJuZWVkTWlncmF0ZSIsIm9uQmFjayIsIm9uVXBkYXRlIiwiY2hhbmdlZEZpZWxkcyIsImFsbEZpZWxkcyIsImVtcHR5IiwiZXJyb3IiLCJjb252ZXJ0RXJyb3IiLCJvblN1Ym1pdCIsInZhbHVlcyIsInBhc3N3b3JkIiwidGhlbiIsInJlcyIsInN0YXR1cyIsInNldEZpZWxkcyIsImVycm9ycyIsImNhdGNoIiwiZSIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwidGl0bGUiLCJmb290ZXJCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJpY29uIiwic3VibWl0Iiwib25EZWxldGUiLCJ0eXBlIiwicHJldlN0YXRlIiwicmVzZXRGaWVsZHMiLCJleGlzdHMiLCJkaXNhYmxlZCIsInNpemVMRyIsInJlcXVpcmVkIiwiQXBwbHlNYXN0ZXJQYXNzd29yZCIsIm1hcmdpblhTIiwicGFkZGluZ1RvcCIsIm1hcmdpblhYUyJdLCJzb3VyY2VSb290IjoiIn0=