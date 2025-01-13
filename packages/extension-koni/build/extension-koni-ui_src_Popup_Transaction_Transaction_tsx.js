"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Transaction_Transaction_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Transaction/Transaction.tsx":
/*!******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Transaction/Transaction.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Modal_Staking_StakingNetworkDetailModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Modal/Staking/StakingNetworkDetailModal */ "../extension-koni-ui/src/components/Modal/Staking/StakingNetworkDetailModal.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_TransactionContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/TransactionContext */ "../extension-koni-ui/src/contexts/TransactionContext.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-sub-header/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


















function Component({
  className
}) {
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  const {
    activeModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__.ModalContext);
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__.DataContext);
  const transactionType = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    const pathName = location.pathname;
    const action = pathName.split('/')[2] || '';
    switch (action) {
      case 'stake':
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_JOIN_POOL;
      case 'unstake':
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_LEAVE_POOL;
      case 'cancel-unstake':
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_CANCEL_UNSTAKE;
      case 'claim-reward':
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_CLAIM_REWARD;
      case 'withdraw':
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_WITHDRAW;
      case 'compound':
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_COMPOUNDING;
      case 'send-nft':
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.SEND_NFT;
      case 'send-fund':
      default:
        return _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.TRANSFER_BALANCE;
    }
  }, [location.pathname]);
  const storageKey = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.detectTransactionPersistKey)(transactionType), [transactionType]);
  const [storage, setStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage)(storageKey, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_TRANSACTION_PARAMS);
  const cacheStorage = (0,react__WEBPACK_IMPORTED_MODULE_8__.useDeferredValue)(storage);
  const needPersistData = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    return JSON.stringify(cacheStorage) === JSON.stringify(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_TRANSACTION_PARAMS);
  }, [cacheStorage]);
  const [defaultData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(storage);
  const {
    chain,
    from
  } = storage;
  const homePath = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    const pathName = location.pathname;
    const action = pathName.split('/')[2] || '';
    switch (action) {
      case 'stake':
      case 'unstake':
      case 'cancel-unstake':
      case 'claim-reward':
      case 'withdraw':
      case 'compound':
        return '/home/staking';
      case 'send-nft':
        return '/home/nfts/collections';
      case 'send-fund':
      default:
        return '/home/tokens';
    }
  }, [location.pathname]);
  const titleMap = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    const result = {};
    for (const [key, value] of Object.entries(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_2__.TRANSACTION_TITLE_MAP)) {
      result[key] = t(value);
    }
    return result;
  }, [t]);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useNavigateOnChangeAccount)(homePath);
  const [showRightBtn, setShowRightBtn] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const [disabledRightBtn, setDisabledRightBtn] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const chainChecker = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useChainChecker)();
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(() => {
    navigate(homePath);
  }, [homePath, navigate]);
  const persistData = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(value => {
    setStorage(value);
  }, [setStorage]);

  // Navigate to finish page
  const onDone = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(extrinsicHash => {
    const chainType = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_14__.isEthereumAddress)(from) ? 'ethereum' : 'substrate';
    navigate(`/transaction-done/${chainType}/${chain}/${extrinsicHash}`, {
      replace: true
    });
  }, [from, chain, navigate]);
  const onClickRightBtn = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(() => {
    if (transactionType === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_13__.ExtrinsicType.STAKING_JOIN_POOL) {
      activeModal(_subwallet_extension_koni_ui_components_Modal_Staking_StakingNetworkDetailModal__WEBPACK_IMPORTED_MODULE_1__.StakingNetworkDetailModalId);
    }
  }, [activeModal, transactionType]);
  const subHeaderButton = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(() => {
    return showRightBtn ? [{
      disabled: disabledRightBtn,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.InfoIcon, {}),
      onClick: () => onClickRightBtn()
    }] : [];
  }, [disabledRightBtn, onClickRightBtn, showRightBtn]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    chain !== '' && chainChecker(chain);
  }, [chain, chainChecker]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Home, {
    showFilterIcon: true,
    showTabBar: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_contexts_TransactionContext__WEBPACK_IMPORTED_MODULE_4__.TransactionContext.Provider, {
      value: {
        defaultData,
        needPersistData,
        persistData,
        onDone,
        onClickRightBtn,
        setShowRightBtn,
        setDisabledRightBtn
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
        resolve: dataContext.awaitStores(['chainStore', 'assetRegistry', 'balance']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, 'transaction-wrapper'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
            background: 'transparent',
            center: true,
            className: 'transaction-header',
            onBack: goBack,
            rightButtons: subHeaderButton,
            showBackButton: true,
            title: titleMap[transactionType]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Outlet, {})]
        })
      })
    })
  });
}
const Transaction = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__["default"])(Component).withConfig({
  displayName: "Transaction",
  componentId: "sc-1qz55vb-0"
})(({
  theme
}) => {
  const token = theme.token;
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '.transaction-header': {
      paddingTop: token.paddingSM,
      paddingBottom: token.paddingSM,
      flexShrink: 0
    },
    '.transaction-content': {
      flex: '1 1 370px',
      paddingLeft: token.padding,
      paddingRight: token.padding,
      overflow: 'auto'
    },
    '.transaction-footer': {
      display: 'flex',
      flexWrap: 'wrap',
      padding: `${token.paddingMD}px ${token.padding}px ${token.padding}px`,
      marginBottom: token.padding,
      gap: token.paddingXS,
      '.error-messages': {
        width: '100%',
        color: token.colorError
      },
      '.warning-messages': {
        width: '100%',
        color: token.colorWarning
      },
      '.ant-btn': {
        flex: 1
      },
      '.full-width': {
        minWidth: '100%'
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transaction);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1RyYW5zYWN0aW9uX1RyYW5zYWN0aW9uX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRStFO0FBQ1M7QUFDc0M7QUFDbkI7QUFDM0I7QUFDYztBQUNtQjtBQUVoQztBQUNKO0FBQ2pEO0FBQzJFO0FBQ25DO0FBQzdCO0FBQ087QUFFWTtBQUFBO0FBQUE7QUFRMUQsU0FBUzZCLFNBQVMsQ0FBRTtFQUFFQztBQUFpQixDQUFDLEVBQUU7RUFDeEMsTUFBTTtJQUFFQztFQUFFLENBQUMsR0FBR3BCLGtGQUFjLEVBQUU7RUFDOUIsTUFBTXFCLFFBQVEsR0FBR1IsOERBQVcsRUFBRTtFQUM5QixNQUFNUyxRQUFRLEdBQUdSLDhEQUFXLEVBQUU7RUFFOUIsTUFBTTtJQUFFUztFQUFZLENBQUMsR0FBR2hCLGlEQUFVLENBQUNMLDhEQUFZLENBQUM7RUFDaEQsTUFBTXNCLFdBQVcsR0FBR2pCLGlEQUFVLENBQUNYLDBGQUFXLENBQUM7RUFFM0MsTUFBTTZCLGVBQWUsR0FBR2YsOENBQU8sQ0FBQyxNQUFxQjtJQUNuRCxNQUFNZ0IsUUFBUSxHQUFHTCxRQUFRLENBQUNNLFFBQVE7SUFDbEMsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0lBRTNDLFFBQVFELE1BQU07TUFDWixLQUFLLE9BQU87UUFDVixPQUFPdkMsNEdBQStCO01BQ3hDLEtBQUssU0FBUztRQUNaLE9BQU9BLDZHQUFnQztNQUN6QyxLQUFLLGdCQUFnQjtRQUNuQixPQUFPQSxpSEFBb0M7TUFDN0MsS0FBSyxjQUFjO1FBQ2pCLE9BQU9BLCtHQUFrQztNQUMzQyxLQUFLLFVBQVU7UUFDYixPQUFPQSwyR0FBOEI7TUFDdkMsS0FBSyxVQUFVO1FBQ2IsT0FBT0EsOEdBQWlDO01BQzFDLEtBQUssVUFBVTtRQUNi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LE1BQU07TUFDZlcsUUFBUSxFQUFFLE1BQU07TUFDaEJILE9BQU8sRUFBRyxHQUFFVixLQUFLLENBQUNjLFNBQVUsTUFBS2QsS0FBSyxDQUFDVSxPQUFRLE1BQUtWLEtBQUssQ0FBQ1UsT0FBUSxJQUFHO01BQ3JFSyxZQUFZLEVBQUVmLEtBQUssQ0FBQ1UsT0FBTztNQUMzQk0sR0FBRyxFQUFFaEIsS0FBSyxDQUFDaUIsU0FBUztNQUVwQixpQkFBaUIsRUFBRTtRQUNqQkMsS0FBSyxFQUFFLE1BQU07UUFDYkMsS0FBSyxFQUFFbkIsS0FBSyxDQUFDb0I7TUFDZixDQUFDO01BRUQsbUJBQW1CLEVBQUU7UUFDbkJGLEtBQUssRUFBRSxNQUFNO1FBQ2JDLEtBQUssRUFBRW5CLEtBQUssQ0FBQ3FCO01BQ2YsQ0FBQztNQUVELFVBQVUsRUFBRTtRQUNWYixJQUFJLEVBQUU7TUFDUixDQUFDO01BRUQsYUFBYSxFQUFFO1FBQ2JjLFFBQVEsRUFBRTtNQUNaO0lBQ0Y7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWV4QixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvVHJhbnNhY3Rpb24vVHJhbnNhY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEV4dHJpbnNpY1R5cGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IEluZm9JY29uLCBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IFN0YWtpbmdOZXR3b3JrRGV0YWlsTW9kYWxJZCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cy9Nb2RhbC9TdGFraW5nL1N0YWtpbmdOZXR3b3JrRGV0YWlsTW9kYWwnO1xuaW1wb3J0IHsgREVGQVVMVF9UUkFOU0FDVElPTl9QQVJBTVMsIFRSQU5TQUNUSU9OX1RJVExFX01BUCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb250ZXh0cy9EYXRhQ29udGV4dCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbkNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL1RyYW5zYWN0aW9uQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VDaGFpbkNoZWNrZXIsIHVzZU5hdmlnYXRlT25DaGFuZ2VBY2NvdW50LCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgVGhlbWUsIFRoZW1lUHJvcHMsIFRyYW5zYWN0aW9uRm9ybUJhc2VQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgZGV0ZWN0VHJhbnNhY3Rpb25QZXJzaXN0S2V5IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscyc7XG5pbXBvcnQgeyBCdXR0b25Qcm9wcywgTW9kYWxDb250ZXh0LCBTd1N1YkhlYWRlciB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VEZWZlcnJlZFZhbHVlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAndXNlaG9va3MtdHMnO1xuXG5pbXBvcnQgeyBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICB0aXRsZTogc3RyaW5nLFxuXG4gIHRyYW5zYWN0aW9uVHlwZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgfTogUHJvcHMpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCB7IGFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG5cbiAgY29uc3QgdHJhbnNhY3Rpb25UeXBlID0gdXNlTWVtbygoKTogRXh0cmluc2ljVHlwZSA9PiB7XG4gICAgY29uc3QgcGF0aE5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICBjb25zdCBhY3Rpb24gPSBwYXRoTmFtZS5zcGxpdCgnLycpWzJdIHx8ICcnO1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3N0YWtlJzpcbiAgICAgICAgcmV0dXJuIEV4dHJpbnNpY1R5cGUuU1RBS0lOR19KT0lOX1BPT0w7XG4gICAgICBjYXNlICd1bnN0YWtlJzpcbiAgICAgICAgcmV0dXJuIEV4dHJpbnNpY1R5cGUuU1RBS0lOR19MRUFWRV9QT09MO1xuICAgICAgY2FzZSAnY2FuY2VsLXVuc3Rha2UnOlxuICAgICAgICByZXR1cm4gRXh0cmluc2ljVHlwZS5TVEFLSU5HX0NBTkNFTF9VTlNUQUtFO1xuICAgICAgY2FzZSAnY2xhaW0tcmV3YXJkJzpcbiAgICAgICAgcmV0dXJuIEV4dHJpbnNpY1R5cGUuU1RBS0lOR19DTEFJTV9SRVdBUkQ7XG4gICAgICBjYXNlICd3aXRoZHJhdyc6XG4gICAgICAgIHJldHVybiBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfV0lUSERSQVc7XG4gICAgICBjYXNlICdjb21wb3VuZCc6XG4gICAgICAgIHJldHVybiBFeHRyaW5zaWNUeXBlLlNUQUtJTkdfQ09NUE9VTkRJTkc7XG4gICAgICBjYXNlICdzZW5kLW5mdCc6XG4gICAgICAgIHJldHVybiBFeHRyaW5zaWNUeXBlLlNFTkRfTkZUO1xuICAgICAgY2FzZSAnc2VuZC1mdW5kJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBFeHRyaW5zaWNUeXBlLlRSQU5TRkVSX0JBTEFOQ0U7XG4gICAgfVxuICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcblxuICBjb25zdCBzdG9yYWdlS2V5ID0gdXNlTWVtbygoKTogc3RyaW5nID0+IGRldGVjdFRyYW5zYWN0aW9uUGVyc2lzdEtleSh0cmFuc2FjdGlvblR5cGUpLCBbdHJhbnNhY3Rpb25UeXBlXSk7XG5cbiAgY29uc3QgW3N0b3JhZ2UsIHNldFN0b3JhZ2VdID0gdXNlTG9jYWxTdG9yYWdlPFRyYW5zYWN0aW9uRm9ybUJhc2VQcm9wcz4oc3RvcmFnZUtleSwgREVGQVVMVF9UUkFOU0FDVElPTl9QQVJBTVMpO1xuXG4gIGNvbnN0IGNhY2hlU3RvcmFnZSA9IHVzZURlZmVycmVkVmFsdWUoc3RvcmFnZSk7XG5cbiAgY29uc3QgbmVlZFBlcnNpc3REYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNhY2hlU3RvcmFnZSkgPT09IEpTT04uc3RyaW5naWZ5KERFRkFVTFRfVFJBTlNBQ1RJT05fUEFSQU1TKTtcbiAgfSwgW2NhY2hlU3RvcmFnZV0pO1xuXG4gIGNvbnN0IFtkZWZhdWx0RGF0YV0gPSB1c2VTdGF0ZShzdG9yYWdlKTtcbiAgY29uc3QgeyBjaGFpbiwgZnJvbSB9ID0gc3RvcmFnZTtcblxuICBjb25zdCBob21lUGF0aCA9IHVzZU1lbW8oKCk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgcGF0aE5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICBjb25zdCBhY3Rpb24gPSBwYXRoTmFtZS5zcGxpdCgnLycpWzJdIHx8ICcnO1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3N0YWtlJzpcbiAgICAgIGNhc2UgJ3Vuc3Rha2UnOlxuICAgICAgY2FzZSAnY2FuY2VsLXVuc3Rha2UnOlxuICAgICAgY2FzZSAnY2xhaW0tcmV3YXJkJzpcbiAgICAgIGNhc2UgJ3dpdGhkcmF3JzpcbiAgICAgIGNhc2UgJ2NvbXBvdW5kJzpcbiAgICAgICAgcmV0dXJuICcvaG9tZS9zdGFraW5nJztcbiAgICAgIGNhc2UgJ3NlbmQtbmZ0JzpcbiAgICAgICAgcmV0dXJuICcvaG9tZS9uZnRzL2NvbGxlY3Rpb25zJztcbiAgICAgIGNhc2UgJ3NlbmQtZnVuZCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJy9ob21lL3Rva2Vucyc7XG4gICAgfVxuICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcblxuICBjb25zdCB0aXRsZU1hcCA9IHVzZU1lbW88UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoVFJBTlNBQ1RJT05fVElUTEVfTUFQKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB0KHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCBbdF0pO1xuXG4gIHVzZU5hdmlnYXRlT25DaGFuZ2VBY2NvdW50KGhvbWVQYXRoKTtcblxuICBjb25zdCBbc2hvd1JpZ2h0QnRuLCBzZXRTaG93UmlnaHRCdG5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZWRSaWdodEJ0biwgc2V0RGlzYWJsZWRSaWdodEJ0bl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2hhaW5DaGVja2VyID0gdXNlQ2hhaW5DaGVja2VyKCk7XG5cbiAgY29uc3QgZ29CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRlKGhvbWVQYXRoKTtcbiAgfSwgW2hvbWVQYXRoLCBuYXZpZ2F0ZV0pO1xuXG4gIGNvbnN0IHBlcnNpc3REYXRhID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBUcmFuc2FjdGlvbkZvcm1CYXNlUHJvcHMpID0+IHtcbiAgICBzZXRTdG9yYWdlKHZhbHVlKTtcbiAgfSwgW3NldFN0b3JhZ2VdKTtcblxuICAvLyBOYXZpZ2F0ZSB0byBmaW5pc2ggcGFnZVxuICBjb25zdCBvbkRvbmUgPSB1c2VDYWxsYmFjayhcbiAgICAoZXh0cmluc2ljSGFzaDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBjaGFpblR5cGUgPSBpc0V0aGVyZXVtQWRkcmVzcyhmcm9tKSA/ICdldGhlcmV1bScgOiAnc3Vic3RyYXRlJztcblxuICAgICAgbmF2aWdhdGUoYC90cmFuc2FjdGlvbi1kb25lLyR7Y2hhaW5UeXBlfS8ke2NoYWlufS8ke2V4dHJpbnNpY0hhc2h9YCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH0sXG4gICAgW2Zyb20sIGNoYWluLCBuYXZpZ2F0ZV1cbiAgKTtcblxuICBjb25zdCBvbkNsaWNrUmlnaHRCdG4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHRyYW5zYWN0aW9uVHlwZSA9PT0gRXh0cmluc2ljVHlwZS5TVEFLSU5HX0pPSU5fUE9PTCkge1xuICAgICAgYWN0aXZlTW9kYWwoU3Rha2luZ05ldHdvcmtEZXRhaWxNb2RhbElkKTtcbiAgICB9XG4gIH0sIFthY3RpdmVNb2RhbCwgdHJhbnNhY3Rpb25UeXBlXSk7XG5cbiAgY29uc3Qgc3ViSGVhZGVyQnV0dG9uOiBCdXR0b25Qcm9wc1tdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHNob3dSaWdodEJ0blxuICAgICAgPyBbXG4gICAgICAgIHtcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRSaWdodEJ0bixcbiAgICAgICAgICBpY29uOiA8SW5mb0ljb24gLz4sXG4gICAgICAgICAgb25DbGljazogKCkgPT4gb25DbGlja1JpZ2h0QnRuKClcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgOiBbXTtcbiAgfSwgW2Rpc2FibGVkUmlnaHRCdG4sIG9uQ2xpY2tSaWdodEJ0biwgc2hvd1JpZ2h0QnRuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGFpbiAhPT0gJycgJiYgY2hhaW5DaGVja2VyKGNoYWluKTtcbiAgfSwgW2NoYWluLCBjaGFpbkNoZWNrZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQuSG9tZVxuICAgICAgc2hvd0ZpbHRlckljb25cbiAgICAgIHNob3dUYWJCYXI9e2ZhbHNlfVxuICAgID5cbiAgICAgIDxUcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZGVmYXVsdERhdGEsIG5lZWRQZXJzaXN0RGF0YSwgcGVyc2lzdERhdGEsIG9uRG9uZSwgb25DbGlja1JpZ2h0QnRuLCBzZXRTaG93UmlnaHRCdG4sIHNldERpc2FibGVkUmlnaHRCdG4gfX0+XG4gICAgICAgIDxQYWdlV3JhcHBlciByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ2NoYWluU3RvcmUnLCAnYXNzZXRSZWdpc3RyeScsICdiYWxhbmNlJ10pfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lLCAndHJhbnNhY3Rpb24td3JhcHBlcicpfT5cbiAgICAgICAgICAgIDxTd1N1YkhlYWRlclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsndHJhbnNwYXJlbnQnfVxuICAgICAgICAgICAgICBjZW50ZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsndHJhbnNhY3Rpb24taGVhZGVyJ31cbiAgICAgICAgICAgICAgb25CYWNrPXtnb0JhY2t9XG4gICAgICAgICAgICAgIHJpZ2h0QnV0dG9ucz17c3ViSGVhZGVyQnV0dG9ufVxuICAgICAgICAgICAgICBzaG93QmFja0J1dHRvblxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGVNYXBbdHJhbnNhY3Rpb25UeXBlXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XG4gICAgICA8L1RyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0xheW91dC5Ib21lPlxuICApO1xufVxuXG5jb25zdCBUcmFuc2FjdGlvbiA9IHN0eWxlZChDb21wb25lbnQpKCh7IHRoZW1lIH0pID0+IHtcbiAgY29uc3QgdG9rZW4gPSAodGhlbWUgYXMgVGhlbWUpLnRva2VuO1xuXG4gIHJldHVybiAoe1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAgICcudHJhbnNhY3Rpb24taGVhZGVyJzoge1xuICAgICAgcGFkZGluZ1RvcDogdG9rZW4ucGFkZGluZ1NNLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdG9rZW4ucGFkZGluZ1NNLFxuICAgICAgZmxleFNocmluazogMFxuICAgIH0sXG5cbiAgICAnLnRyYW5zYWN0aW9uLWNvbnRlbnQnOiB7XG4gICAgICBmbGV4OiAnMSAxIDM3MHB4JyxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0b2tlbi5wYWRkaW5nLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0b2tlbi5wYWRkaW5nLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgIH0sXG5cbiAgICAnLnRyYW5zYWN0aW9uLWZvb3Rlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICBwYWRkaW5nOiBgJHt0b2tlbi5wYWRkaW5nTUR9cHggJHt0b2tlbi5wYWRkaW5nfXB4ICR7dG9rZW4ucGFkZGluZ31weGAsXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLnBhZGRpbmcsXG4gICAgICBnYXA6IHRva2VuLnBhZGRpbmdYUyxcblxuICAgICAgJy5lcnJvci1tZXNzYWdlcyc6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JcbiAgICAgIH0sXG5cbiAgICAgICcud2FybmluZy1tZXNzYWdlcyc6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yV2FybmluZ1xuICAgICAgfSxcblxuICAgICAgJy5hbnQtYnRuJzoge1xuICAgICAgICBmbGV4OiAxXG4gICAgICB9LFxuXG4gICAgICAnLmZ1bGwtd2lkdGgnOiB7XG4gICAgICAgIG1pbldpZHRoOiAnMTAwJSdcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uO1xuIl0sIm5hbWVzIjpbIkV4dHJpbnNpY1R5cGUiLCJJbmZvSWNvbiIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiU3Rha2luZ05ldHdvcmtEZXRhaWxNb2RhbElkIiwiREVGQVVMVF9UUkFOU0FDVElPTl9QQVJBTVMiLCJUUkFOU0FDVElPTl9USVRMRV9NQVAiLCJEYXRhQ29udGV4dCIsIlRyYW5zYWN0aW9uQ29udGV4dCIsInVzZUNoYWluQ2hlY2tlciIsInVzZU5hdmlnYXRlT25DaGFuZ2VBY2NvdW50IiwidXNlVHJhbnNsYXRpb24iLCJkZXRlY3RUcmFuc2FjdGlvblBlcnNpc3RLZXkiLCJNb2RhbENvbnRleHQiLCJTd1N1YkhlYWRlciIsIkNOIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VEZWZlcnJlZFZhbHVlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiT3V0bGV0IiwidXNlTG9jYXRpb24iLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsInVzZUxvY2FsU3RvcmFnZSIsImlzRXRoZXJldW1BZGRyZXNzIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwidCIsImxvY2F0aW9uIiwibmF2aWdhdGUiLCJhY3RpdmVNb2RhbCIsImRhdGFDb250ZXh0IiwidHJhbnNhY3Rpb25UeXBlIiwicGF0aE5hbWUiLCJwYXRobmFtZSIsImFjdGlvbiIsInNwbGl0IiwiU1RBS0lOR19KT0lOX1BPT0wiLCJTVEFLSU5HX0xFQVZFX1BPT0wiLCJTVEFLSU5HX0NBTkNFTF9VTlNUQUtFIiwiU1RBS0lOR19DTEFJTV9SRVdBUkQiLCJTVEFLSU5HX1dJVEhEUkFXIiwiU1RBS0lOR19DT01QT1VORElORyIsIlNFTkRfTkZUIiwiVFJBTlNGRVJfQkFMQU5DRSIsInN0b3JhZ2VLZXkiLCJzdG9yYWdlIiwic2V0U3RvcmFnZSIsImNhY2hlU3RvcmFnZSIsIm5lZWRQZXJzaXN0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWZhdWx0RGF0YSIsImNoYWluIiwiZnJvbSIsImhvbWVQYXRoIiwidGl0bGVNYXAiLCJyZXN1bHQiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJzaG93UmlnaHRCdG4iLCJzZXRTaG93UmlnaHRCdG4iLCJkaXNhYmxlZFJpZ2h0QnRuIiwic2V0RGlzYWJsZWRSaWdodEJ0biIsImNoYWluQ2hlY2tlciIsImdvQmFjayIsInBlcnNpc3REYXRhIiwib25Eb25lIiwiZXh0cmluc2ljSGFzaCIsImNoYWluVHlwZSIsInJlcGxhY2UiLCJvbkNsaWNrUmlnaHRCdG4iLCJzdWJIZWFkZXJCdXR0b24iLCJkaXNhYmxlZCIsImljb24iLCJvbkNsaWNrIiwiYXdhaXRTdG9yZXMiLCJUcmFuc2FjdGlvbiIsInRoZW1lIiwidG9rZW4iLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nU00iLCJwYWRkaW5nQm90dG9tIiwiZmxleFNocmluayIsImZsZXgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJwYWRkaW5nUmlnaHQiLCJvdmVyZmxvdyIsImZsZXhXcmFwIiwicGFkZGluZ01EIiwibWFyZ2luQm90dG9tIiwiZ2FwIiwicGFkZGluZ1hTIiwid2lkdGgiLCJjb2xvciIsImNvbG9yRXJyb3IiLCJjb2xvcldhcm5pbmciLCJtaW5XaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=