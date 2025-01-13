"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Account_RestoreJson_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/RestoreJson.tsx":
/*!**************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/RestoreJson.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Account_Info_AvatarGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Account/Info/AvatarGroup */ "../extension-koni-ui/src/components/Account/Info/AvatarGroup.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Icon/CloseIcon */ "../extension-koni-ui/src/components/Icon/CloseIcon.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants/modal */ "../extension-koni-ui/src/constants/modal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useCompleteCreateAccount */ "../extension-koni-ui/src/hooks/account/useCompleteCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/account/useGoBackFromCreateAccount */ "../extension-koni-ui/src/hooks/account/useGoBackFromCreateAccount.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useUnlockChecker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useUnlockChecker */ "../extension-koni-ui/src/hooks/common/useUnlockChecker.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useAutoNavigateToCreatePassword */ "../extension-koni-ui/src/hooks/router/useAutoNavigateToCreatePassword.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_account_typeGuards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/account/typeGuards */ "../extension-koni-ui/src/utils/account/typeGuards.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/upload/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/setting-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var _subwallet_react_ui_es_web3_block_account_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui/es/web3-block/account-card */ "../../node_modules/@subwallet/react-ui/es/web3-block/account-card/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FileArrowDown.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/DotsThree.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/u8a/toString.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")["Buffer"];
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0























const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
  weight: "fill"
});
const modalId = 'account-json-modal';
const formName = 'restore-json-file-form';
const passwordField = 'password';
const focusPassword = () => {
  setTimeout(() => {
    const element = document.getElementById(`${formName}_${passwordField}`);
    if (element) {
      element.focus();
    }
  }, 10);
};
const selectPassword = () => {
  setTimeout(() => {
    const element = document.getElementById(`${formName}_${passwordField}`);
    if (element) {
      element.select();
    }
  }, 10);
};
const Component = ({
  className
}) => {
  (0,_subwallet_extension_koni_ui_hooks_router_useAutoNavigateToCreatePassword__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks_account_useCompleteCreateAccount__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useNavigate)();
  const onBack = (0,_subwallet_extension_koni_ui_hooks_account_useGoBackFromCreateAccount__WEBPACK_IMPORTED_MODULE_5__["default"])(_subwallet_extension_koni_ui_constants_modal__WEBPACK_IMPORTED_MODULE_3__.IMPORT_ACCOUNT_MODAL);
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__.ModalContext);
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"].useForm();
  const [fileValidateState, setFileValidateState] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)({});
  const [submitValidateState, setSubmitValidateState] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)({});
  const [validating, setValidating] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
  const [requirePassword, setRequirePassword] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)('');
  const [jsonFile, setJsonFile] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(undefined);
  const [accountsInfo, setAccountsInfo] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]);
  const checkUnlock = (0,_subwallet_extension_koni_ui_hooks_common_useUnlockChecker__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(() => {
    inactiveModal(modalId);
  }, [inactiveModal]);
  const openModal = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(() => {
    activeModal(modalId);
  }, [activeModal]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(info => {
    var _uploadFile$originFil;
    if (validating) {
      return;
    }
    setValidating(true);
    const uploadFile = info.file;
    (_uploadFile$originFil = uploadFile.originFileObj) === null || _uploadFile$originFil === void 0 ? void 0 : _uploadFile$originFil.arrayBuffer().then(bytes => {
      let json;
      try {
        json = JSON.parse((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_20__.u8aToString)(Uint8Array.from(Buffer.from(bytes))));
        if (JSON.stringify(jsonFile) === JSON.stringify(json)) {
          setValidating(false);
          return;
        } else {
          setAccountsInfo([]);
          setPassword('');
          setJsonFile(json);
        }
      } catch (e) {
        const error = e;
        setFileValidateState({
          status: 'error',
          message: error.message
        });
        setValidating(false);
        setRequirePassword(false);
        return;
      }
      try {
        setSubmitValidateState({});
        if ((0,_subwallet_extension_koni_ui_utils_account_typeGuards__WEBPACK_IMPORTED_MODULE_11__.isKeyringPairs$Json)(json)) {
          const accounts = json.accounts.map(account => {
            return {
              address: account.address,
              genesisHash: account.meta.genesisHash,
              name: account.meta.name
            };
          });
          setRequirePassword(true);
          setAccountsInfo(accounts);
          setFileValidateState({});
          setValidating(false);
        } else {
          (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_10__.jsonGetAccountInfo)(json).then(accountInfo => {
            setRequirePassword(true);
            setAccountsInfo([accountInfo]);
            setFileValidateState({});
            setValidating(false);
          }).catch(e => {
            setRequirePassword(false);
            setFileValidateState({
              status: 'error',
              message: e.message
            });
            setValidating(false);
          });
        }
      } catch (e) {
        setFileValidateState({
          status: 'error',
          message: t('Invalid JSON file')
        });
        setValidating(false);
        setRequirePassword(false);
      }
    }).catch(e => {
      setFileValidateState({
        status: 'error',
        message: e.message
      });
      setValidating(false);
    });
  }, [t, jsonFile, validating]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(() => {
    if (!jsonFile) {
      return;
    }
    if (requirePassword && !password) {
      return;
    }
    checkUnlock().then(() => {
      setLoading(true);
      setTimeout(() => {
        const isMultiple = (0,_subwallet_extension_koni_ui_utils_account_typeGuards__WEBPACK_IMPORTED_MODULE_11__.isKeyringPairs$Json)(jsonFile);
        (isMultiple ? (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_10__.batchRestoreV2)(jsonFile, password, accountsInfo, true) : (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_10__.jsonRestoreV2)({
          file: jsonFile,
          password: password,
          address: accountsInfo[0].address,
          isAllowed: true,
          withMasterPassword: true
        })).then(() => {
          setTimeout(() => {
            if (isMultiple) {
              navigate('/keyring/migrate-password');
            } else {
              onComplete();
            }
          }, 1000);
        }).catch(e => {
          setSubmitValidateState({
            message: e.message,
            status: 'error'
          });
          selectPassword();
        }).finally(() => {
          setLoading(false);
        });
      }, 500);
    }).catch(() => {
      // User cancel unlock
    });
  }, [jsonFile, requirePassword, password, checkUnlock, accountsInfo, navigate, onComplete]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(account => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui_es_web3_block_account_card__WEBPACK_IMPORTED_MODULE_21__["default"], {
      accountName: account.name,
      address: account.address,
      addressPreLength: 4,
      addressSufLength: 5,
      avatarIdentPrefix: 42,
      avatarTheme: account.type === 'ethereum' ? 'ethereum' : 'polkadot',
      className: "account-item"
    }, account.address);
  }, []);
  const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(event => {
    const value = event.target.value;
    if (!value) {
      setSubmitValidateState({
        message: t('Password is required'),
        status: 'error'
      });
    } else {
      setSubmitValidateState({});
    }
    setPassword(value);
  }, [t]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    if (requirePassword) {
      focusPassword();
    }
  }, [requirePassword]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      rightFooterButton: {
        children: t('Import by JSON file'),
        icon: FooterIcon,
        onClick: form.submit,
        disabled: !!fileValidateState.status || !!submitValidateState.status || !password,
        loading: validating || loading
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
        onClick: goHome
      }]
      // title={t<string>('Import from Polkadot.{js}')}
      ,
      title: t('Import from AIGENT'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('container'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "description",
          children: t('Drag and drop the JSON file you exported from AIGENT')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
          className: "form-container",
          form: form,
          name: formName,
          onFinish: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"].Item, {
            validateStatus: fileValidateState.status,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"].SingleFileDragger, {
              accept: 'application/json',
              className: "file-selector",
              disabled: validating,
              hint: t('Drag and drop the JSON file you exported from AIGENT'),
              onChange: onChange,
              statusHelp: fileValidateState.message,
              title: t('Import by JSON file')
            })
          }), !!accountsInfo.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"].Item, {
            children: accountsInfo.length > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
              className: "account-list-item",
              leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_Account_Info_AvatarGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
                accounts: accountsInfo
              }),
              name: t('Import {{number}} accounts', {
                replace: {
                  number: String(accountsInfo.length).padStart(2, '0')
                }
              }),
              onPressItem: openModal,
              rightItem: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
                size: "sm"
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
              className: "account-list-item",
              leftItemIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components_Account_Info_AvatarGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
                accounts: accountsInfo
              }),
              name: accountsInfo[0].name
            })
          }), requirePassword && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"].Item, {
            validateStatus: submitValidateState.status,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "input-label",
              children: t('Please enter the password you have used when creating your AIGENT account')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
              id: `${formName}_${passwordField}`,
              onChange: onChangePassword,
              placeholder: t('Password'),
              statusHelp: submitValidateState.message,
              type: "password",
              value: password
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
          className: className,
          id: modalId,
          onCancel: closeModal,
          title: t('Accounts'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__["default"].Section, {
            displayRow: true,
            list: accountsInfo,
            renderItem: renderItem,
            rowGap: "var(--row-gap)"
          })
        })]
      })
    })
  });
};
const ImportJson = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__["default"])(Component).withConfig({
  displayName: "RestoreJson__ImportJson",
  componentId: "sc-owdwlk-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '--row-gap': token.sizeXS,
    '.container': {
      padding: token.padding,
      paddingBottom: 0
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
    '.ant-form-item:last-child': {
      marginBottom: 0
    },
    '.input-label': {
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      marginBottom: token.margin
    },
    '.account-list-item': {
      marginTop: -token.marginXS,
      '.account-item': {
        cursor: 'default'
      },
      '.ant-web3-block-right-item': {
        marginRight: 0
      }
    },
    '.ant-web3-block': {
      display: 'flex !important'
    },
    '.ant-sw-modal-body': {
      padding: `${token.padding}px 0 ${token.padding}px`,
      flexDirection: 'column',
      display: 'flex'
    },
    '.ant-sw-list-wrapper': {
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    '.file-selector': {
      '.ant-upload-drag-single': {
        height: 168
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportJson);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfQWNjb3VudF9SZXN0b3JlSnNvbl90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHOEU7QUFDYTtBQUNaO0FBQ0s7QUFDdUI7QUFDSTtBQUN6QjtBQUNJO0FBQzhCO0FBQzFCO0FBQ2E7QUFFZjtBQUVnQjtBQUVuQztBQUU3QztBQUM4QjtBQUNzQztBQUNqRDtBQUNSO0FBRU07QUFBQTtBQUFBO0FBSTdDLE1BQU1tQyxVQUFVLGdCQUNkLHdEQUFDLDREQUFJO0VBQ0gsWUFBWSxFQUFFVCx1REFBYztFQUM1QixNQUFNLEVBQUM7QUFBTSxFQUVoQjtBQUVELE1BQU1VLE9BQU8sR0FBRyxvQkFBb0I7QUFFcEMsTUFBTUMsUUFBUSxHQUFHLHdCQUF3QjtBQUN6QyxNQUFNQyxhQUFhLEdBQUcsVUFBVTtBQUVoQyxNQUFNQyxhQUFhLEdBQUcsTUFBTTtFQUMxQkMsVUFBVSxDQUFDLE1BQU07SUFDZixNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFFLEdBQUVOLFFBQVMsSUFBR0MsYUFBYyxFQUFDLENBQUM7SUFFdkUsSUFBSUcsT0FBTyxFQUFFO01BQ1hBLE9BQU8sQ0FBQ0csS0FBSyxFQUFFO0lBQ2pCO0VBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNSLENBQUM7QUFFRCxNQUFNQyxjQUFjLEdBQUcsTUFBTTtFQUMzQkwsVUFBVSxDQUFDLE1BQU07SUFDZixNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFFLEdBQUVOLFFBQVMsSUFBR0MsYUFBYyxFQUFDLENBQUM7SUFFdkUsSUFBSUcsT0FBTyxFQUFFO01BQ1ZBLE9BQU8sQ0FBc0JLLE1BQU0sRUFBRTtJQUN4QztFQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDUixDQUFDO0FBRUQsTUFBTUMsU0FBMEIsR0FBRyxDQUFDO0VB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RWIsS0FBSyxDQUFDWTtJQUN0QixDQUFDO0lBRUQsb0JBQW9CLEVBQUU7TUFDcEJELFNBQVMsRUFBRSxDQUFDWCxLQUFLLENBQUNjLFFBQVE7TUFFMUIsZUFBZSxFQUFFO1FBQ2ZDLE1BQU0sRUFBRTtNQUNWLENBQUM7TUFFRCw0QkFBNEIsRUFBRTtRQUM1QkMsV0FBVyxFQUFFO01BQ2Y7SUFDRixDQUFDO0lBRUQsaUJBQWlCLEVBQUU7TUFDakJDLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFFRCxvQkFBb0IsRUFBRTtNQUNwQmYsT0FBTyxFQUFHLEdBQUVGLEtBQUssQ0FBQ0UsT0FBUSxRQUFPRixLQUFLLENBQUNFLE9BQVEsSUFBRztNQUNsRGdCLGFBQWEsRUFBRSxRQUFRO01BQ3ZCRCxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBRUQsc0JBQXNCLEVBQUU7TUFDdEJFLFFBQVEsRUFBRSxRQUFRO01BQ2xCQyxNQUFNLEVBQUUsTUFBTTtNQUNkSCxPQUFPLEVBQUUsTUFBTTtNQUNmQyxhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUVELGdCQUFnQixFQUFFO01BQ2hCLHlCQUF5QixFQUFFO1FBQ3pCRSxNQUFNLEVBQUU7TUFDVjtJQUNGO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFldEIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0FjY291bnQvUmVzdG9yZUpzb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBSZXNwb25zZUpzb25HZXRBY2NvdW50SW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCBBdmF0YXJHcm91cCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvQWNjb3VudC9JbmZvL0F2YXRhckdyb3VwJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ljb24vQ2xvc2VJY29uJztcbmltcG9ydCB7IElNUE9SVF9BQ0NPVU5UX01PREFMIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMvbW9kYWwnO1xuaW1wb3J0IHVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50JztcbmltcG9ydCB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2FjY291bnQvdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQnO1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZVRyYW5zbGF0aW9uJztcbmltcG9ydCB1c2VVbmxvY2tDaGVja2VyIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZVVubG9ja0NoZWNrZXInO1xuaW1wb3J0IHVzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9yb3V0ZXIvdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCc7XG5pbXBvcnQgdXNlRGVmYXVsdE5hdmlnYXRlIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZURlZmF1bHROYXZpZ2F0ZSc7XG5pbXBvcnQgeyBiYXRjaFJlc3RvcmVWMiwganNvbkdldEFjY291bnRJbmZvLCBqc29uUmVzdG9yZVYyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgVGhlbWVQcm9wcywgVmFsaWRhdGVTdGF0ZSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgaXNLZXlyaW5nUGFpcnMkSnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMvYWNjb3VudC90eXBlR3VhcmRzJztcbmltcG9ydCB7IEtleXJpbmdQYWlyJEpzb24gfSBmcm9tICdAc3Vid2FsbGV0L2tleXJpbmcvdHlwZXMnO1xuaW1wb3J0IHsgRm9ybSwgSWNvbiwgSW5wdXQsIE1vZGFsQ29udGV4dCwgU2V0dGluZ0l0ZW0sIFN3TGlzdCwgU3dNb2RhbCwgVXBsb2FkIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgeyBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkRmlsZSB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWkvZXMvdXBsb2FkL2ludGVyZmFjZSc7XG5pbXBvcnQgQWNjb3VudENhcmQgZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aS9lcy93ZWIzLWJsb2NrL2FjY291bnQtY2FyZCc7XG5pbXBvcnQgeyBLZXlyaW5nUGFpcnMkSnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvdWkta2V5cmluZy90eXBlcyc7XG5pbXBvcnQgQ04gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBEb3RzVGhyZWUsIEZpbGVBcnJvd0Rvd24gfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnRIYW5kbGVyLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgdThhVG9TdHJpbmcgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbCc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBGb290ZXJJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17RmlsZUFycm93RG93bn1cbiAgICB3ZWlnaHQ9J2ZpbGwnXG4gIC8+XG4pO1xuXG5jb25zdCBtb2RhbElkID0gJ2FjY291bnQtanNvbi1tb2RhbCc7XG5cbmNvbnN0IGZvcm1OYW1lID0gJ3Jlc3RvcmUtanNvbi1maWxlLWZvcm0nO1xuY29uc3QgcGFzc3dvcmRGaWVsZCA9ICdwYXNzd29yZCc7XG5cbmNvbnN0IGZvY3VzUGFzc3dvcmQgPSAoKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmb3JtTmFtZX1fJHtwYXNzd29yZEZpZWxkfWApO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIDEwKTtcbn07XG5cbmNvbnN0IHNlbGVjdFBhc3N3b3JkID0gKCkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Zm9ybU5hbWV9XyR7cGFzc3dvcmRGaWVsZH1gKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zZWxlY3QoKTtcbiAgICB9XG4gIH0sIDEwKTtcbn07XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lIH06IFByb3BzKSA9PiB7XG4gIHVzZUF1dG9OYXZpZ2F0ZVRvQ3JlYXRlUGFzc3dvcmQoKTtcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IG9uQ29tcGxldGUgPSB1c2VDb21wbGV0ZUNyZWF0ZUFjY291bnQoKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBvbkJhY2sgPSB1c2VHb0JhY2tGcm9tQ3JlYXRlQWNjb3VudChJTVBPUlRfQUNDT1VOVF9NT0RBTCk7XG4gIGNvbnN0IHsgZ29Ib21lIH0gPSB1c2VEZWZhdWx0TmF2aWdhdGUoKTtcbiAgY29uc3QgeyBhY3RpdmVNb2RhbCwgaW5hY3RpdmVNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xuXG4gIGNvbnN0IFtmaWxlVmFsaWRhdGVTdGF0ZSwgc2V0RmlsZVZhbGlkYXRlU3RhdGVdID0gdXNlU3RhdGU8VmFsaWRhdGVTdGF0ZT4oe30pO1xuICBjb25zdCBbc3VibWl0VmFsaWRhdGVTdGF0ZSwgc2V0U3VibWl0VmFsaWRhdGVTdGF0ZV0gPSB1c2VTdGF0ZTxWYWxpZGF0ZVN0YXRlPih7fSk7XG4gIGNvbnN0IFt2YWxpZGF0aW5nLCBzZXRWYWxpZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVxdWlyZVBhc3N3b3JkLCBzZXRSZXF1aXJlUGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2pzb25GaWxlLCBzZXRKc29uRmlsZV0gPSB1c2VTdGF0ZTxLZXlyaW5nUGFpciRKc29uIHwgS2V5cmluZ1BhaXJzJEpzb24gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFthY2NvdW50c0luZm8sIHNldEFjY291bnRzSW5mb10gPSB1c2VTdGF0ZTxSZXNwb25zZUpzb25HZXRBY2NvdW50SW5mb1tdPihbXSk7XG4gIGNvbnN0IGNoZWNrVW5sb2NrID0gdXNlVW5sb2NrQ2hlY2tlcigpO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW5hY3RpdmVNb2RhbChtb2RhbElkKTtcbiAgfSwgW2luYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWN0aXZlTW9kYWwobW9kYWxJZCk7XG4gIH0sIFthY3RpdmVNb2RhbF0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGluZm86IFVwbG9hZENoYW5nZVBhcmFtPFVwbG9hZEZpbGU8dW5rbm93bj4+KSA9PiB7XG4gICAgaWYgKHZhbGlkYXRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRWYWxpZGF0aW5nKHRydWUpO1xuICAgIGNvbnN0IHVwbG9hZEZpbGUgPSBpbmZvLmZpbGU7XG5cbiAgICB1cGxvYWRGaWxlLm9yaWdpbkZpbGVPYmo/LmFycmF5QnVmZmVyKClcbiAgICAgIC50aGVuKChieXRlcykgPT4ge1xuICAgICAgICBsZXQganNvbjogS2V5cmluZ1BhaXIkSnNvbiB8IEtleXJpbmdQYWlycyRKc29uIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UodThhVG9TdHJpbmcoVWludDhBcnJheS5mcm9tKEJ1ZmZlci5mcm9tKGJ5dGVzKSkpKSBhcyBLZXlyaW5nUGFpciRKc29uIHwgS2V5cmluZ1BhaXJzJEpzb247XG5cbiAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoanNvbkZpbGUpID09PSBKU09OLnN0cmluZ2lmeShqc29uKSkge1xuICAgICAgICAgICAgc2V0VmFsaWRhdGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0QWNjb3VudHNJbmZvKFtdKTtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcbiAgICAgICAgICAgIHNldEpzb25GaWxlKGpzb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gZSBhcyBFcnJvcjtcblxuICAgICAgICAgIHNldEZpbGVWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRWYWxpZGF0aW5nKGZhbHNlKTtcbiAgICAgICAgICBzZXRSZXF1aXJlUGFzc3dvcmQoZmFsc2UpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzZXRTdWJtaXRWYWxpZGF0ZVN0YXRlKHt9KTtcblxuICAgICAgICAgIGlmIChpc0tleXJpbmdQYWlycyRKc29uKGpzb24pKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50czogUmVzcG9uc2VKc29uR2V0QWNjb3VudEluZm9bXSA9IGpzb24uYWNjb3VudHMubWFwKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWNjb3VudC5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGdlbmVzaXNIYXNoOiBhY2NvdW50Lm1ldGEuZ2VuZXNpc0hhc2gsXG4gICAgICAgICAgICAgICAgbmFtZTogYWNjb3VudC5tZXRhLm5hbWVcbiAgICAgICAgICAgICAgfSBhcyBSZXNwb25zZUpzb25HZXRBY2NvdW50SW5mbztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRSZXF1aXJlUGFzc3dvcmQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRBY2NvdW50c0luZm8oYWNjb3VudHMpO1xuICAgICAgICAgICAgc2V0RmlsZVZhbGlkYXRlU3RhdGUoe30pO1xuICAgICAgICAgICAgc2V0VmFsaWRhdGluZyhmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGpzb25HZXRBY2NvdW50SW5mbyhqc29uKVxuICAgICAgICAgICAgICAudGhlbigoYWNjb3VudEluZm8pID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSZXF1aXJlUGFzc3dvcmQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0QWNjb3VudHNJbmZvKFthY2NvdW50SW5mb10pO1xuICAgICAgICAgICAgICAgIHNldEZpbGVWYWxpZGF0ZVN0YXRlKHt9KTtcbiAgICAgICAgICAgICAgICBzZXRWYWxpZGF0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJlcXVpcmVQYXNzd29yZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0RmlsZVZhbGlkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VmFsaWRhdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNldEZpbGVWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHQ8c3RyaW5nPignSW52YWxpZCBKU09OIGZpbGUnKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFZhbGlkYXRpbmcoZmFsc2UpO1xuICAgICAgICAgIHNldFJlcXVpcmVQYXNzd29yZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgIHNldEZpbGVWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRWYWxpZGF0aW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbdCwganNvbkZpbGUsIHZhbGlkYXRpbmddKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWpzb25GaWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlcXVpcmVQYXNzd29yZCAmJiAhcGFzc3dvcmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaGVja1VubG9jaygpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTXVsdGlwbGUgPSBpc0tleXJpbmdQYWlycyRKc29uKGpzb25GaWxlKTtcblxuICAgICAgICAoaXNNdWx0aXBsZVxuICAgICAgICAgID8gYmF0Y2hSZXN0b3JlVjIoanNvbkZpbGUsIHBhc3N3b3JkLCBhY2NvdW50c0luZm8sIHRydWUpXG4gICAgICAgICAgOiBqc29uUmVzdG9yZVYyKHtcbiAgICAgICAgICAgIGZpbGU6IGpzb25GaWxlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgYWRkcmVzczogYWNjb3VudHNJbmZvWzBdLmFkZHJlc3MsXG4gICAgICAgICAgICBpc0FsbG93ZWQ6IHRydWUsXG4gICAgICAgICAgICB3aXRoTWFzdGVyUGFzc3dvcmQ6IHRydWVcbiAgICAgICAgICB9KSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnL2tleXJpbmcvbWlncmF0ZS1wYXNzd29yZCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWJtaXRWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZWN0UGFzc3dvcmQoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBVc2VyIGNhbmNlbCB1bmxvY2tcbiAgICB9KTtcbiAgfSwgW2pzb25GaWxlLCByZXF1aXJlUGFzc3dvcmQsIHBhc3N3b3JkLCBjaGVja1VubG9jaywgYWNjb3VudHNJbmZvLCBuYXZpZ2F0ZSwgb25Db21wbGV0ZV0pO1xuXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSB1c2VDYWxsYmFjaygoYWNjb3VudDogUmVzcG9uc2VKc29uR2V0QWNjb3VudEluZm8pOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8QWNjb3VudENhcmRcbiAgICAgICAgYWNjb3VudE5hbWU9e2FjY291bnQubmFtZX1cbiAgICAgICAgYWRkcmVzcz17YWNjb3VudC5hZGRyZXNzfVxuICAgICAgICBhZGRyZXNzUHJlTGVuZ3RoPXs0fVxuICAgICAgICBhZGRyZXNzU3VmTGVuZ3RoPXs1fVxuICAgICAgICBhdmF0YXJJZGVudFByZWZpeD17NDJ9XG4gICAgICAgIGF2YXRhclRoZW1lPXthY2NvdW50LnR5cGUgPT09ICdldGhlcmV1bScgPyAnZXRoZXJldW0nIDogJ3BvbGthZG90J31cbiAgICAgICAgY2xhc3NOYW1lPSdhY2NvdW50LWl0ZW0nXG4gICAgICAgIGtleT17YWNjb3VudC5hZGRyZXNzfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZDogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICBzZXRTdWJtaXRWYWxpZGF0ZVN0YXRlKHtcbiAgICAgICAgbWVzc2FnZTogdCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3VibWl0VmFsaWRhdGVTdGF0ZSh7fSk7XG4gICAgfVxuXG4gICAgc2V0UGFzc3dvcmQodmFsdWUpO1xuICB9LCBbdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlcXVpcmVQYXNzd29yZCkge1xuICAgICAgZm9jdXNQYXNzd29yZCgpO1xuICAgIH1cbiAgfSwgW3JlcXVpcmVQYXNzd29yZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lKX0+XG4gICAgICA8TGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5XG4gICAgICAgIG9uQmFjaz17b25CYWNrfVxuICAgICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICAgIGNoaWxkcmVuOiB0KCdJbXBvcnQgYnkgSlNPTiBmaWxlJyksXG4gICAgICAgICAgaWNvbjogRm9vdGVySWNvbixcbiAgICAgICAgICBvbkNsaWNrOiBmb3JtLnN1Ym1pdCxcbiAgICAgICAgICBkaXNhYmxlZDogISFmaWxlVmFsaWRhdGVTdGF0ZS5zdGF0dXMgfHwgISFzdWJtaXRWYWxpZGF0ZVN0YXRlLnN0YXR1cyB8fCAhcGFzc3dvcmQsXG4gICAgICAgICAgbG9hZGluZzogdmFsaWRhdGluZyB8fCBsb2FkaW5nXG4gICAgICAgIH19XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogPENsb3NlSWNvbiAvPixcbiAgICAgICAgICAgIG9uQ2xpY2s6IGdvSG9tZVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgLy8gdGl0bGU9e3Q8c3RyaW5nPignSW1wb3J0IGZyb20gUG9sa2Fkb3Que2pzfScpfVxuICAgICAgICB0aXRsZT17dDxzdHJpbmc+KCdJbXBvcnQgZnJvbSBBSUdFTlQnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NOKCdjb250YWluZXInKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIHt0KCdEcmFnIGFuZCBkcm9wIHRoZSBKU09OIGZpbGUgeW91IGV4cG9ydGVkIGZyb20gQUlHRU5UJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250YWluZXInXG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgbmFtZT17Zm9ybU5hbWV9XG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17ZmlsZVZhbGlkYXRlU3RhdGUuc3RhdHVzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VXBsb2FkLlNpbmdsZUZpbGVEcmFnZ2VyXG4gICAgICAgICAgICAgICAgYWNjZXB0PXsnYXBwbGljYXRpb24vanNvbid9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaWxlLXNlbGVjdG9yJ1xuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt2YWxpZGF0aW5nfVxuICAgICAgICAgICAgICAgIGhpbnQ9e3QoJ0RyYWcgYW5kIGRyb3AgdGhlIEpTT04gZmlsZSB5b3UgZXhwb3J0ZWQgZnJvbSBBSUdFTlQnKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgc3RhdHVzSGVscD17ZmlsZVZhbGlkYXRlU3RhdGUubWVzc2FnZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dCgnSW1wb3J0IGJ5IEpTT04gZmlsZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICEhYWNjb3VudHNJbmZvLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNJbmZvLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FjY291bnQtbGlzdC1pdGVtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0SXRlbUljb249ezxBdmF0YXJHcm91cCBhY2NvdW50cz17YWNjb3VudHNJbmZvfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dCgnSW1wb3J0IHt7bnVtYmVyfX0gYWNjb3VudHMnLCB7IHJlcGxhY2U6IHsgbnVtYmVyOiBTdHJpbmcoYWNjb3VudHNJbmZvLmxlbmd0aCkucGFkU3RhcnQoMiwgJzAnKSB9IH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblByZXNzSXRlbT17b3Blbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodEl0ZW09eyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtEb3RzVGhyZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0l0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhY2NvdW50LWxpc3QtaXRlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEl0ZW1JY29uPXs8QXZhdGFyR3JvdXAgYWNjb3VudHM9e2FjY291bnRzSW5mb30gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2FjY291bnRzSW5mb1swXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVxdWlyZVBhc3N3b3JkICYmIChcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17c3VibWl0VmFsaWRhdGVTdGF0ZS5zdGF0dXN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAge3QoJ1BsZWFzZSBlbnRlciB0aGUgcGFzc3dvcmQgeW91IGhhdmUgdXNlZCB3aGVuIGNyZWF0aW5nIHlvdXIgQUlHRU5UIGFjY291bnQnKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgJHtmb3JtTmFtZX1fJHtwYXNzd29yZEZpZWxkfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnUGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzSGVscD17c3VibWl0VmFsaWRhdGVTdGF0ZS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8U3dNb2RhbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBpZD17bW9kYWxJZH1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXtjbG9zZU1vZGFsfVxuICAgICAgICAgICAgdGl0bGU9e3QoJ0FjY291bnRzJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN3TGlzdC5TZWN0aW9uXG4gICAgICAgICAgICAgIGRpc3BsYXlSb3c9e3RydWV9XG4gICAgICAgICAgICAgIGxpc3Q9e2FjY291bnRzSW5mb31cbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVySXRlbX1cbiAgICAgICAgICAgICAgcm93R2FwPSd2YXIoLS1yb3ctZ2FwKSdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Td01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBJbXBvcnRKc29uID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLS1yb3ctZ2FwJzogdG9rZW4uc2l6ZVhTLFxuXG4gICAgJy5jb250YWluZXInOiB7XG4gICAgICBwYWRkaW5nOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgcGFkZGluZ0JvdHRvbTogMFxuICAgIH0sXG5cbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLmZvcm0tY29udGFpbmVyJzoge1xuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW5cbiAgICB9LFxuXG4gICAgJy5hbnQtZm9ybS1pdGVtOmxhc3QtY2hpbGQnOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICB9LFxuXG4gICAgJy5pbnB1dC1sYWJlbCc6IHtcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5cbiAgICB9LFxuXG4gICAgJy5hY2NvdW50LWxpc3QtaXRlbSc6IHtcbiAgICAgIG1hcmdpblRvcDogLXRva2VuLm1hcmdpblhTLFxuXG4gICAgICAnLmFjY291bnQtaXRlbSc6IHtcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgIH0sXG5cbiAgICAgICcuYW50LXdlYjMtYmxvY2stcmlnaHQtaXRlbSc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5hbnQtd2ViMy1ibG9jayc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4ICFpbXBvcnRhbnQnXG4gICAgfSxcblxuICAgICcuYW50LXN3LW1vZGFsLWJvZHknOiB7XG4gICAgICBwYWRkaW5nOiBgJHt0b2tlbi5wYWRkaW5nfXB4IDAgJHt0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcblxuICAgICcuYW50LXN3LWxpc3Qtd3JhcHBlcic6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgJy5maWxlLXNlbGVjdG9yJzoge1xuICAgICAgJy5hbnQtdXBsb2FkLWRyYWctc2luZ2xlJzoge1xuICAgICAgICBoZWlnaHQ6IDE2OFxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRKc29uO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiQXZhdGFyR3JvdXAiLCJDbG9zZUljb24iLCJJTVBPUlRfQUNDT1VOVF9NT0RBTCIsInVzZUNvbXBsZXRlQ3JlYXRlQWNjb3VudCIsInVzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VVbmxvY2tDaGVja2VyIiwidXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCIsInVzZURlZmF1bHROYXZpZ2F0ZSIsImJhdGNoUmVzdG9yZVYyIiwianNvbkdldEFjY291bnRJbmZvIiwianNvblJlc3RvcmVWMiIsImlzS2V5cmluZ1BhaXJzJEpzb24iLCJGb3JtIiwiSWNvbiIsIklucHV0IiwiTW9kYWxDb250ZXh0IiwiU2V0dGluZ0l0ZW0iLCJTd0xpc3QiLCJTd01vZGFsIiwiVXBsb2FkIiwiQWNjb3VudENhcmQiLCJDTiIsIkRvdHNUaHJlZSIsIkZpbGVBcnJvd0Rvd24iLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJ1OGFUb1N0cmluZyIsIkZvb3Rlckljb24iLCJtb2RhbElkIiwiZm9ybU5hbWUiLCJwYXNzd29yZEZpZWxkIiwiZm9jdXNQYXNzd29yZCIsInNldFRpbWVvdXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvY3VzIiwic2VsZWN0UGFzc3dvcmQiLCJzZWxlY3QiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ0Iiwib25Db21wbGV0ZSIsIm5hdmlnYXRlIiwib25CYWNrIiwiZ29Ib21lIiwiYWN0aXZlTW9kYWwiLCJpbmFjdGl2ZU1vZGFsIiwiZm9ybSIsInVzZUZvcm0iLCJmaWxlVmFsaWRhdGVTdGF0ZSIsInNldEZpbGVWYWxpZGF0ZVN0YXRlIiwic3VibWl0VmFsaWRhdGVTdGF0ZSIsInNldFN1Ym1pdFZhbGlkYXRlU3RhdGUiLCJ2YWxpZGF0aW5nIiwic2V0VmFsaWRhdGluZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVxdWlyZVBhc3N3b3JkIiwic2V0UmVxdWlyZVBhc3N3b3JkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImpzb25GaWxlIiwic2V0SnNvbkZpbGUiLCJ1bmRlZmluZWQiLCJhY2NvdW50c0luZm8iLCJzZXRBY2NvdW50c0luZm8iLCJjaGVja1VubG9jayIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJvbkNoYW5nZSIsImluZm8iLCJ1cGxvYWRGaWxlIiwiZmlsZSIsIm9yaWdpbkZpbGVPYmoiLCJhcnJheUJ1ZmZlciIsInRoZW4iLCJieXRlcyIsImpzb24iLCJKU09OIiwicGFyc2UiLCJVaW50OEFycmF5IiwiZnJvbSIsIkJ1ZmZlciIsInN0cmluZ2lmeSIsImUiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJhY2NvdW50cyIsIm1hcCIsImFjY291bnQiLCJhZGRyZXNzIiwiZ2VuZXNpc0hhc2giLCJtZXRhIiwibmFtZSIsImFjY291bnRJbmZvIiwiY2F0Y2giLCJvblN1Ym1pdCIsImlzTXVsdGlwbGUiLCJpc0FsbG93ZWQiLCJ3aXRoTWFzdGVyUGFzc3dvcmQiLCJmaW5hbGx5IiwicmVuZGVySXRlbSIsInR5cGUiLCJvbkNoYW5nZVBhc3N3b3JkIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImNoaWxkcmVuIiwiaWNvbiIsIm9uQ2xpY2siLCJzdWJtaXQiLCJkaXNhYmxlZCIsImxlbmd0aCIsInJlcGxhY2UiLCJudW1iZXIiLCJTdHJpbmciLCJwYWRTdGFydCIsIkltcG9ydEpzb24iLCJ0aGVtZSIsInRva2VuIiwic2l6ZVhTIiwicGFkZGluZyIsInBhZGRpbmdCb3R0b20iLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzYiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmc2IiwiY29sb3IiLCJjb2xvclRleHREZXNjcmlwdGlvbiIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblhTIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93IiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==