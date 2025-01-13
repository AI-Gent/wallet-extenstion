"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Account_ImportSeedPhrase_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Account/ImportSeedPhrase.tsx":
/*!*******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Account/ImportSeedPhrase.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/input/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bip39 */ "../../node_modules/bip39/src/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FileArrowDown.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/EyeSlash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Eye.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0















const FooterIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_11__["default"],
  weight: "fill"
});
const formName = 'import-seed-phrase-form';
const fieldNamePrefix = 'seed-phrase-';
const words = bip39__WEBPACK_IMPORTED_MODULE_5__.wordlists.english;
const Component = ({
  className
}) => {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useAutoNavigateToCreatePassword)();
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const {
    goHome
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useDefaultNavigate)();
  const notification = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useNotification)();
  const onComplete = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useCompleteCreateAccount)();
  const onBack = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGoBackFromCreateAccount)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.IMPORT_SEED_MODAL);
  const accountName = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetDefaultAccountName)();
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].useForm();
  const phraseNumber = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].useWatch('phraseNumber', form);
  const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [storage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTED_ACCOUNT_TYPE, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ACCOUNT_TYPES);
  const [keyTypes] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(storage);
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
  const [showSeed, setShowSeed] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const checkUnlock = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useUnlockChecker)();
  const phraseNumberItems = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => [12, 24].map(value => ({
    label: t('{{number}} words', {
      replace: {
        number: value
      }
    }),
    value: String(value)
  })), [t]);
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => ({
    phraseNumber: '12',
    trigger: 'trigger'
  }), []);
  const onFieldsChange = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((changedFields, allFields) => {
    const {
      empty,
      error
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.simpleCheckForm)(allFields);
    const {
      phraseNumber
    } = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.convertFieldToObject)(changedFields);
    if (phraseNumber) {
      form.validateFields(['trigger']).finally(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_4__.noop);
    }
    setDisabled(empty || error);
  }, [form]);
  const onFinish = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(values => {
    const {
      phraseNumber: _phraseNumber
    } = values;
    const seedKeys = Object.keys(values).filter(key => key.startsWith(fieldNamePrefix));
    const phraseNumber = parseInt(_phraseNumber);
    if (![12, 15, 18, 21, 24].includes(seedKeys.length)) {
      throw Error(t('Mnemonic needs to contain 12, 15, 18, 21, 24 words'));
    }
    const seeds = [];
    for (let i = 0; i < phraseNumber; i++) {
      seeds.push(values[`${fieldNamePrefix}${i}`]);
    }
    if (seeds.some(value => !value)) {
      throw Error(t('Mnemonic needs to contain 12, 15, 18, 21, 24 words'));
    }
    const seed = seeds.join(' ');
    if (seed) {
      checkUnlock().then(() => {
        setSubmitting(true);
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.validateSeedV2)(seed, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ACCOUNT_TYPES).then(() => {
          return (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.createAccountSuriV2)({
            name: accountName,
            suri: seed,
            isAllowed: true,
            types: keyTypes
          });
        }).then(() => {
          onComplete();
        }).catch(error => {
          notification({
            type: 'error',
            message: error.message
          });
        }).finally(() => {
          setSubmitting(false);
        });
      }).catch(() => {
        // Unlock is cancelled
      });
    }
  }, [t, checkUnlock, accountName, keyTypes, onComplete, notification]);
  const seedValidator = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((rule, value) => {
    return new Promise((resolve, reject) => {
      if (!value) {
        reject(new Error(t('This field is required')));
      }
      if (!words.includes(value)) {
        reject(new Error(t('Invalid word')));
      }
      resolve();
    });
  }, [t]);
  const toggleShow = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    setShowSeed(value => !value);
  }, []);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useFocusFormItem)(form, `${fieldNamePrefix}0`);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: onBack,
      rightFooterButton: {
        children: t('Import account'),
        icon: FooterIcon,
        onClick: form.submit,
        disabled: disabled,
        loading: submitting
      },
      subHeaderIcons: [{
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {}),
        onClick: goHome
      }],
      title: t('Import from seed phrase'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "description",
          children: t('To import an existing account, please enter seed phrase.')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "form-container form-space-xs",
          form: form,
          initialValues: formDefault,
          name: formName,
          onFieldsChange: onFieldsChange,
          onFinish: onFinish,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].Item, {
            name: 'phraseNumber',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PhraseNumberSelector, {
              items: phraseNumberItems
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].Item, {
            hidden: true,
            name: "trigger",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "content-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "button-container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  phosphorIcon: showSeed ? phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"] : phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
                  size: "sm"
                }),
                onClick: toggleShow,
                size: "xs",
                type: "ghost",
                children: showSeed ? t('Hide seed phrase') : t('Show seed phrase')
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "seed-container",
              children: new Array(parseInt(phraseNumber || '12')).fill(null).map((value, index) => {
                const name = fieldNamePrefix + String(index);
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"].Item, {
                  name: name,
                  rules: [{
                    validator: seedValidator
                  }],
                  statusHelpAsTooltip: true,
                  validateTrigger: ['onChange'],
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.SeedPhraseInput, {
                    form: form,
                    formName: formName,
                    hideText: !showSeed,
                    index: index,
                    prefix: fieldNamePrefix
                  })
                }, index);
              })
            })]
          })]
        })]
      })
    })
  });
};
const ImportSeedPhrase = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__["default"])(Component).withConfig({
  displayName: "ImportSeedPhrase",
  componentId: "sc-30xyr2-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.container': {
      padding: token.padding
    },
    '.ant-form-item:last-child': {
      marginBottom: 0
    },
    '.description': {
      padding: `0 ${token.padding}px`,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      textAlign: 'center',
      whiteSpaceCollapse: 'break-spaces'
    },
    '.form-container': {
      marginTop: token.margin
    },
    '.content-container': {
      padding: token.paddingXS,
      display: 'flex',
      flexDirection: 'column',
      gap: token.sizeXS,
      backgroundColor: token.colorBgSecondary,
      borderRadius: token.borderRadiusLG
    },
    '.button-container': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '.seed-container': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: token.sizeXS,
      '.ant-form-item': {
        minWidth: 0,
        marginBottom: 0
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportSeedPhrase);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0FjY291bnRfSW1wb3J0U2VlZFBocmFzZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZ0k7QUFDUDtBQUNxSTtBQUNqSztBQUVJO0FBQ2pDO0FBQzlCO0FBQ047QUFDa0M7QUFDQTtBQUN2QjtBQUNPO0FBQUE7QUFBQTtBQUk5QyxNQUFNcUMsVUFBVSxnQkFDZCx1REFBQyw0REFBSTtFQUNILFlBQVksRUFBRVAsdURBQWM7RUFDNUIsTUFBTSxFQUFDO0FBQU0sRUFFaEI7QUFFRCxNQUFNUSxRQUFRLEdBQUcseUJBQXlCO0FBQzFDLE1BQU1DLGVBQWUsR0FBRyxjQUFjO0FBT3RDLE1BQU1DLEtBQUssR0FBR2Qsb0RBQWlCO0FBRS9CLE1BQU1nQixTQUEwQixHQUFHLENBQUM7RUFBRUM7QUFBaUIsQ0FBQyxLQUFLO0VBQzNEbkMsbUdBQStCLEVBQUU7RUFFakMsTUFBTTtJQUFFb0M7RUFBRSxDQUFDLEdBQUc3QixrRkFBYyxFQUFFO0VBQzlCLE1BQU07SUFBRThCO0VBQU8sQ0FBQyxHQUFHbkMsc0ZBQWtCLEVBQUU7RUFDdkMsTUFBTW9DLFlBQVksR0FBR2hDLG1GQUFlLEVBQUU7RUFFdEMsTUFBTWlDLFVBQVUsR0FBR3RDLDRGQUF3QixFQUFFO0VBQzdDLE1BQU11QyxNQUFNLEdBQUduQyw4RkFBMEIsQ0FBQ1AscUZBQWlCLENBQUM7RUFFNUQsTUFBTTJDLFdBQVcsR0FBR3JDLDRGQUF3QixFQUFFO0VBRTlDLE1BQU0sQ0FBQ3NDLElBQUksQ0FBQyxHQUFHM0Isb0VBQVksRUFBYTtFQUV4QyxNQUFNNkIsWUFBWSxHQUFHN0IscUVBQWEsQ0FBQyxjQUFjLEVBQUUyQixJQUFJLENBQUM7RUFFeEQsTUFBTSxDQUFDSSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHckIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDbkQsTUFBTSxDQUFDc0IsT0FB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QztJQUVELGlCQUFpQixFQUFFO01BQ2pCQyxTQUFTLEVBQUVYLEtBQUssQ0FBQ1k7SUFDbkIsQ0FBQztJQUVELG9CQUFvQixFQUFFO01BQ3BCWCxPQUFPLEVBQUVELEtBQUssQ0FBQ2EsU0FBUztNQUN4QkMsT0FBTyxFQUFFLE1BQU07TUFDZkMsYUFBYSxFQUFFLFFBQVE7TUFDdkJDLEdBQUcsRUFBRWhCLEtBQUssQ0FBQ2lCLE1BQU07TUFDakJDLGVBQWUsRUFBRWxCLEtBQUssQ0FBQ21CLGdCQUFnQjtNQUN2Q0MsWUFBWSxFQUFFcEIsS0FBSyxDQUFDcUI7SUFDdEIsQ0FBQztJQUVELG1CQUFtQixFQUFFO01BQ25CUCxPQUFPLEVBQUUsTUFBTTtNQUNmQyxhQUFhLEVBQUUsS0FBSztNQUNwQk8sVUFBVSxFQUFFLFFBQVE7TUFDcEJDLGNBQWMsRUFBRTtJQUNsQixDQUFDO0lBRUQsaUJBQWlCLEVBQUU7TUFDakJULE9BQU8sRUFBRSxNQUFNO01BQ2ZVLG1CQUFtQixFQUFFLGdCQUFnQjtNQUNyQ1IsR0FBRyxFQUFFaEIsS0FBSyxDQUFDaUIsTUFBTTtNQUVqQixnQkFBZ0IsRUFBRTtRQUNoQlEsUUFBUSxFQUFFLENBQUM7UUFDWHZCLFlBQVksRUFBRTtNQUNoQjtJQUNGO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlSixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9BY2NvdW50L0ltcG9ydFNlZWRQaHJhc2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBDbG9zZUljb24sIExheW91dCwgUGFnZVdyYXBwZXIsIFBocmFzZU51bWJlclNlbGVjdG9yLCBTZWVkUGhyYXNlSW5wdXQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgREVGQVVMVF9BQ0NPVU5UX1RZUEVTLCBJTVBPUlRfU0VFRF9NT0RBTCwgU0VMRUNURURfQUNDT1VOVF9UWVBFIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCwgdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50LCB1c2VEZWZhdWx0TmF2aWdhdGUsIHVzZUZvY3VzRm9ybUl0ZW0sIHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSwgdXNlR29CYWNrRnJvbUNyZWF0ZUFjY291bnQsIHVzZU5vdGlmaWNhdGlvbiwgdXNlVHJhbnNsYXRpb24sIHVzZVVubG9ja0NoZWNrZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB7IGNyZWF0ZUFjY291bnRTdXJpVjIsIHZhbGlkYXRlU2VlZFYyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgRm9ybUNhbGxiYWNrcywgRm9ybUZpZWxkRGF0YSwgRm9ybVJ1bGUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IGNvbnZlcnRGaWVsZFRvT2JqZWN0LCBub29wLCBzaW1wbGVDaGVja0Zvcm0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSWNvbiwgSW5wdXQgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCB7IHdvcmRsaXN0cyB9IGZyb20gJ2JpcDM5JztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEV5ZSwgRXllU2xhc2gsIEZpbGVBcnJvd0Rvd24gfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICd1c2Vob29rcy10cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBGb290ZXJJY29uID0gKFxuICA8SWNvblxuICAgIHBob3NwaG9ySWNvbj17RmlsZUFycm93RG93bn1cbiAgICB3ZWlnaHQ9J2ZpbGwnXG4gIC8+XG4pO1xuXG5jb25zdCBmb3JtTmFtZSA9ICdpbXBvcnQtc2VlZC1waHJhc2UtZm9ybSc7XG5jb25zdCBmaWVsZE5hbWVQcmVmaXggPSAnc2VlZC1waHJhc2UtJztcblxuaW50ZXJmYWNlIEZvcm1TdGF0ZSBleHRlbmRzIFJlY29yZDxgc2VlZC1waHJhc2UtJHtudW1iZXJ9YCwgc3RyaW5nPiB7XG4gIHBocmFzZU51bWJlcjogc3RyaW5nO1xuICB0cmlnZ2VyOiBzdHJpbmc7IC8vIFVzZSBmb3IgdHJpZ2dlciB2YWxpZGF0ZSB3aGVuIGNoYW5nZSBwaHJhc2VOdW1iZXJcbn1cblxuY29uc3Qgd29yZHMgPSB3b3JkbGlzdHMuZW5nbGlzaDtcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUgfTogUHJvcHMpID0+IHtcbiAgdXNlQXV0b05hdmlnYXRlVG9DcmVhdGVQYXNzd29yZCgpO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBnb0hvbWUgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuICBjb25zdCBub3RpZmljYXRpb24gPSB1c2VOb3RpZmljYXRpb24oKTtcblxuICBjb25zdCBvbkNvbXBsZXRlID0gdXNlQ29tcGxldGVDcmVhdGVBY2NvdW50KCk7XG4gIGNvbnN0IG9uQmFjayA9IHVzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50KElNUE9SVF9TRUVEX01PREFMKTtcblxuICBjb25zdCBhY2NvdW50TmFtZSA9IHVzZUdldERlZmF1bHRBY2NvdW50TmFtZSgpO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybTxGb3JtU3RhdGU+KCk7XG5cbiAgY29uc3QgcGhyYXNlTnVtYmVyID0gRm9ybS51c2VXYXRjaCgncGhyYXNlTnVtYmVyJywgZm9ybSk7XG5cbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RvcmFnZV0gPSB1c2VMb2NhbFN0b3JhZ2UoU0VMRUNURURfQUNDT1VOVF9UWVBFLCBERUZBVUxUX0FDQ09VTlRfVFlQRVMpO1xuXG4gIGNvbnN0IFtrZXlUeXBlc10gPSB1c2VTdGF0ZShzdG9yYWdlKTtcblxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2hvd1NlZWQsIHNldFNob3dTZWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2hlY2tVbmxvY2sgPSB1c2VVbmxvY2tDaGVja2VyKCk7XG5cbiAgY29uc3QgcGhyYXNlTnVtYmVySXRlbXMgPSB1c2VNZW1vKCgpID0+IFsxMiwgMjRdLm1hcCgodmFsdWUpID0+ICh7XG4gICAgbGFiZWw6IHQoJ3t7bnVtYmVyfX0gd29yZHMnLCB7IHJlcGxhY2U6IHsgbnVtYmVyOiB2YWx1ZSB9IH0pLFxuICAgIHZhbHVlOiBTdHJpbmcodmFsdWUpXG4gIH0pKSwgW3RdKTtcblxuICBjb25zdCBmb3JtRGVmYXVsdDogRm9ybVN0YXRlID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIHBocmFzZU51bWJlcjogJzEyJyxcbiAgICB0cmlnZ2VyOiAndHJpZ2dlcidcbiAgfSksIFtdKTtcblxuICBjb25zdCBvbkZpZWxkc0NoYW5nZTogRm9ybUNhbGxiYWNrczxGb3JtU3RhdGU+WydvbkZpZWxkc0NoYW5nZSddID0gdXNlQ2FsbGJhY2soKGNoYW5nZWRGaWVsZHM6IEZvcm1GaWVsZERhdGFbXSwgYWxsRmllbGRzOiBGb3JtRmllbGREYXRhW10pID0+IHtcbiAgICBjb25zdCB7IGVtcHR5LCBlcnJvciB9ID0gc2ltcGxlQ2hlY2tGb3JtKGFsbEZpZWxkcyk7XG5cbiAgICBjb25zdCB7IHBocmFzZU51bWJlciB9ID0gY29udmVydEZpZWxkVG9PYmplY3Q8Rm9ybVN0YXRlPihjaGFuZ2VkRmllbGRzKTtcblxuICAgIGlmIChwaHJhc2VOdW1iZXIpIHtcbiAgICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoWyd0cmlnZ2VyJ10pLmZpbmFsbHkobm9vcCk7XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWQoZW1wdHkgfHwgZXJyb3IpO1xuICB9LCBbZm9ybV0pO1xuXG4gIGNvbnN0IG9uRmluaXNoOiBGb3JtQ2FsbGJhY2tzPEZvcm1TdGF0ZT5bJ29uRmluaXNoJ10gPSB1c2VDYWxsYmFjaygodmFsdWVzOiBGb3JtU3RhdGUpID0+IHtcbiAgICBjb25zdCB7IHBocmFzZU51bWJlcjogX3BocmFzZU51bWJlciB9ID0gdmFsdWVzO1xuICAgIGNvbnN0IHNlZWRLZXlzID0gT2JqZWN0LmtleXModmFsdWVzKS5maWx0ZXIoKGtleSkgPT4ga2V5LnN0YXJ0c1dpdGgoZmllbGROYW1lUHJlZml4KSk7XG4gICAgY29uc3QgcGhyYXNlTnVtYmVyID0gcGFyc2VJbnQoX3BocmFzZU51bWJlcik7XG5cbiAgICBpZiAoIVsxMiwgMTUsIDE4LCAyMSwgMjRdLmluY2x1ZGVzKHNlZWRLZXlzLmxlbmd0aCkpIHtcbiAgICAgIHRocm93IEVycm9yKHQoJ01uZW1vbmljIG5lZWRzIHRvIGNvbnRhaW4gMTIsIDE1LCAxOCwgMjEsIDI0IHdvcmRzJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlZWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaHJhc2VOdW1iZXI7IGkrKykge1xuICAgICAgc2VlZHMucHVzaCh2YWx1ZXNbYCR7ZmllbGROYW1lUHJlZml4fSR7aX1gXSk7XG4gICAgfVxuXG4gICAgaWYgKHNlZWRzLnNvbWUoKHZhbHVlKSA9PiAhdmFsdWUpKSB7XG4gICAgICB0aHJvdyBFcnJvcih0KCdNbmVtb25pYyBuZWVkcyB0byBjb250YWluIDEyLCAxNSwgMTgsIDIxLCAyNCB3b3JkcycpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWVkID0gc2VlZHMuam9pbignICcpO1xuXG4gICAgaWYgKHNlZWQpIHtcbiAgICAgIGNoZWNrVW5sb2NrKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgICAgdmFsaWRhdGVTZWVkVjIoc2VlZCwgREVGQVVMVF9BQ0NPVU5UX1RZUEVTKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQWNjb3VudFN1cmlWMih7XG4gICAgICAgICAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgc3VyaTogc2VlZCxcbiAgICAgICAgICAgICAgICBpc0FsbG93ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZXM6IGtleVR5cGVzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyBVbmxvY2sgaXMgY2FuY2VsbGVkXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3QsIGNoZWNrVW5sb2NrLCBhY2NvdW50TmFtZSwga2V5VHlwZXMsIG9uQ29tcGxldGUsIG5vdGlmaWNhdGlvbl0pO1xuXG4gIGNvbnN0IHNlZWRWYWxpZGF0b3IgPSB1c2VDYWxsYmFjaygocnVsZTogRm9ybVJ1bGUsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKHQoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdvcmRzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKHQoJ0ludmFsaWQgd29yZCcpKSk7XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSwgW3RdKTtcblxuICBjb25zdCB0b2dnbGVTaG93ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dTZWVkKCh2YWx1ZSkgPT4gIXZhbHVlKTtcbiAgfSwgW10pO1xuXG4gIHVzZUZvY3VzRm9ybUl0ZW0oZm9ybSwgYCR7ZmllbGROYW1lUHJlZml4fTBgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlciBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9PlxuICAgICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgICBvbkJhY2s9e29uQmFja31cbiAgICAgICAgcmlnaHRGb290ZXJCdXR0b249e3tcbiAgICAgICAgICBjaGlsZHJlbjogdCgnSW1wb3J0IGFjY291bnQnKSxcbiAgICAgICAgICBpY29uOiBGb290ZXJJY29uLFxuICAgICAgICAgIG9uQ2xpY2s6IGZvcm0uc3VibWl0LFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBsb2FkaW5nOiBzdWJtaXR0aW5nXG4gICAgICAgIH19XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogPENsb3NlSWNvbiAvPixcbiAgICAgICAgICAgIG9uQ2xpY2s6IGdvSG9tZVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgdGl0bGU9e3Q8c3RyaW5nPignSW1wb3J0IGZyb20gc2VlZCBwaHJhc2UnKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIHt0KCdUbyBpbXBvcnQgYW4gZXhpc3RpbmcgYWNjb3VudCwgcGxlYXNlIGVudGVyIHNlZWQgcGhyYXNlLicpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyIGZvcm0tc3BhY2UteHMnXG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Zm9ybURlZmF1bHR9XG4gICAgICAgICAgICBuYW1lPXtmb3JtTmFtZX1cbiAgICAgICAgICAgIG9uRmllbGRzQ2hhbmdlPXtvbkZpZWxkc0NoYW5nZX1cbiAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9eydwaHJhc2VOdW1iZXInfT5cbiAgICAgICAgICAgICAgPFBocmFzZU51bWJlclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgaXRlbXM9e3BocmFzZU51bWJlckl0ZW1zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIGhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgbmFtZT0ndHJpZ2dlcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24tY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtzaG93U2VlZCA/IEV5ZVNsYXNoIDogRXllfVxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3d9XG4gICAgICAgICAgICAgICAgICBzaXplPSd4cydcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2dob3N0J1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzaG93U2VlZCA/IHQoJ0hpZGUgc2VlZCBwaHJhc2UnKSA6IHQoJ1Nob3cgc2VlZCBwaHJhc2UnKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWVkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmV3IEFycmF5KHBhcnNlSW50KHBocmFzZU51bWJlciB8fCAnMTInKSkuZmlsbChudWxsKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZmllbGROYW1lUHJlZml4ICsgU3RyaW5nKGluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogc2VlZFZhbGlkYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgfV19XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNIZWxwQXNUb29sdGlwPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyPXtbJ29uQ2hhbmdlJ119XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZWRQaHJhc2VJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtTmFtZT17Zm9ybU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVUZXh0PXshc2hvd1NlZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXtmaWVsZE5hbWVQcmVmaXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBJbXBvcnRTZWVkUGhyYXNlID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnLmNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmdcbiAgICB9LFxuXG4gICAgJy5hbnQtZm9ybS1pdGVtOmxhc3QtY2hpbGQnOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICB9LFxuXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcbiAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNixcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNixcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aGl0ZVNwYWNlQ29sbGFwc2U6ICdicmVhay1zcGFjZXMnXG4gICAgfSxcblxuICAgICcuZm9ybS1jb250YWluZXInOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpblxuICAgIH0sXG5cbiAgICAnLmNvbnRlbnQtY29udGFpbmVyJzoge1xuICAgICAgcGFkZGluZzogdG9rZW4ucGFkZGluZ1hTLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRva2VuLnNpemVYUyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JCZ1NlY29uZGFyeSxcbiAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzTEdcbiAgICB9LFxuXG4gICAgJy5idXR0b24tY29udGFpbmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLnNlZWQtY29udGFpbmVyJzoge1xuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgzLCAxZnIpJyxcbiAgICAgIGdhcDogdG9rZW4uc2l6ZVhTLFxuXG4gICAgICAnLmFudC1mb3JtLWl0ZW0nOiB7XG4gICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0U2VlZFBocmFzZTtcbiJdLCJuYW1lcyI6WyJDbG9zZUljb24iLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIlBocmFzZU51bWJlclNlbGVjdG9yIiwiU2VlZFBocmFzZUlucHV0IiwiREVGQVVMVF9BQ0NPVU5UX1RZUEVTIiwiSU1QT1JUX1NFRURfTU9EQUwiLCJTRUxFQ1RFRF9BQ0NPVU5UX1RZUEUiLCJ1c2VBdXRvTmF2aWdhdGVUb0NyZWF0ZVBhc3N3b3JkIiwidXNlQ29tcGxldGVDcmVhdGVBY2NvdW50IiwidXNlRGVmYXVsdE5hdmlnYXRlIiwidXNlRm9jdXNGb3JtSXRlbSIsInVzZUdldERlZmF1bHRBY2NvdW50TmFtZSIsInVzZUdvQmFja0Zyb21DcmVhdGVBY2NvdW50IiwidXNlTm90aWZpY2F0aW9uIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VVbmxvY2tDaGVja2VyIiwiY3JlYXRlQWNjb3VudFN1cmlWMiIsInZhbGlkYXRlU2VlZFYyIiwiY29udmVydEZpZWxkVG9PYmplY3QiLCJub29wIiwic2ltcGxlQ2hlY2tGb3JtIiwiQnV0dG9uIiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIndvcmRsaXN0cyIsIkNOIiwiRXllIiwiRXllU2xhc2giLCJGaWxlQXJyb3dEb3duIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInN0eWxlZCIsInVzZUxvY2FsU3RvcmFnZSIsIkZvb3Rlckljb24iLCJmb3JtTmFtZSIsImZpZWxkTmFtZVByZWZpeCIsIndvcmRzIiwiZW5nbGlzaCIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJnb0hvbWUiLCJub3RpZmljYXRpb24iLCJvbkNvbXBsZXRlIiwib25CYWNrIiwiYWNjb3VudE5hbWUiLCJmb3JtIiwidXNlRm9ybSIsInBocmFzZU51bWJlciIsInVzZVdhdGNoIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJzdG9yYWdlIiwia2V5VHlwZXMiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwic2hvd1NlZWQiLCJzZXRTaG93U2VlZCIsImNoZWNrVW5sb2NrIiwicGhyYXNlTnVtYmVySXRlbXMiLCJtYXAiLCJ2YWx1ZSIsImxhYmVsIiwicmVwbGFjZSIsIm51bWJlciIsIlN0cmluZyIsImZvcm1EZWZhdWx0IiwidHJpZ2dlciIsIm9uRmllbGRzQ2hhbmdlIiwiY2hhbmdlZEZpZWxkcyIsImFsbEZpZWxkcyIsImVtcHR5IiwiZXJyb3IiLCJ2YWxpZGF0ZUZpZWxkcyIsImZpbmFsbHkiLCJvbkZpbmlzaCIsInZhbHVlcyIsIl9waHJhc2VOdW1iZXIiLCJzZWVkS2V5cyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJzdGFydHNXaXRoIiwicGFyc2VJbnQiLCJpbmNsdWRlcyIsImxlbmd0aCIsIkVycm9yIiwic2VlZHMiLCJpIiwicHVzaCIsInNvbWUiLCJzZWVkIiwiam9pbiIsInRoZW4iLCJuYW1lIiwic3VyaSIsImlzQWxsb3dlZCIsInR5cGVzIiwiY2F0Y2giLCJ0eXBlIiwibWVzc2FnZSIsInNlZWRWYWxpZGF0b3IiLCJydWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0b2dnbGVTaG93IiwiY2hpbGRyZW4iLCJpY29uIiwib25DbGljayIsInN1Ym1pdCIsImxvYWRpbmciLCJBcnJheSIsImZpbGwiLCJpbmRleCIsInZhbGlkYXRvciIsIkltcG9ydFNlZWRQaHJhc2UiLCJ0aGVtZSIsInRva2VuIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiZm9udFNpemVIZWFkaW5nNiIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzYiLCJjb2xvciIsImNvbG9yVGV4dERlc2NyaXB0aW9uIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZUNvbGxhcHNlIiwibWFyZ2luVG9wIiwibWFyZ2luIiwicGFkZGluZ1hTIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJzaXplWFMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvckJnU2Vjb25kYXJ5IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyUmFkaXVzTEciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWluV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9