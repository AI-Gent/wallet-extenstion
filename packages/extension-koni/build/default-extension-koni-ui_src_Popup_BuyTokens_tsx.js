"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_BuyTokens_tsx"],{

/***/ "../extension-koni-ui/src/Popup/BuyTokens.tsx":
/*!****************************************************!*\
  !*** ../extension-koni-ui/src/Popup/BuyTokens.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/translate.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/AccountSelector */ "../extension-koni-ui/src/components/Field/AccountSelector.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_BuyTokens_ServiceSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/BuyTokens/ServiceSelector */ "../extension-koni-ui/src/components/Field/BuyTokens/ServiceSelector.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_components_Field_TokenSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components/Field/TokenSelector */ "../extension-koni-ui/src/components/Field/TokenSelector.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_account_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/account/account */ "../extension-koni-ui/src/utils/account/account.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_account_reformatAddress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/account/reformatAddress */ "../extension-koni-ui/src/utils/account/reformatAddress.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_chain_getNetworkJsonByGenesisHash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/chain/getNetworkJsonByGenesisHash */ "../extension-koni-ui/src/utils/chain/getNetworkJsonByGenesisHash.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/form/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-sub-header/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ShoppingCartSimple.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/XCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CheckCircle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0
























const getServiceItems = tokenSlug => {
  const buyInfo = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_4__.MAP_PREDEFINED_BUY_TOKEN[tokenSlug];
  const result = [];
  for (const serviceItem of _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.baseServiceItems) {
    const temp = {
      ...serviceItem,
      disabled: buyInfo ? !buyInfo.services.includes(serviceItem.key) : true
    };
    result.push(temp);
  }
  return result;
};
const LinkUrl = props => {
  if (props.url) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("a", {
      href: props.url,
      target: "__blank",
      children: props.content
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
      children: props.content
    });
  }
};
const modalId = 'disclaimer-modal';
function Component({
  className
}) {
  const locationState = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useLocation)().state;
  const [currentSymbol] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(locationState === null || locationState === void 0 ? void 0 : locationState.symbol);
  const fixedTokenKey = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => {
    if (currentSymbol) {
      var _LIST_PREDEFINED_BUY_;
      return (_LIST_PREDEFINED_BUY_ = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_4__.LIST_PREDEFINED_BUY_TOKEN.filter(value => value.slug === currentSymbol || value.symbol === currentSymbol)[0]) === null || _LIST_PREDEFINED_BUY_ === void 0 ? void 0 : _LIST_PREDEFINED_BUY_.slug;
    } else {
      return undefined;
    }
  }, [currentSymbol]);
  const notify = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useNotification)();
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__.ModalContext);
  const {
    accounts,
    currentAccount,
    isAllAccount
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.accountState);
  const {
    chainInfoMap
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.chainStore);
  const {
    walletReference
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.settings);
  const checkAsset = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useAssetChecker)();
  const [currentAddress] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address);
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const {
    goBack
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useDefaultNavigate)();
  const [form] = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].useForm();
  const formDefault = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => ({
    address: isAllAccount ? '' : (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address) || '',
    tokenKey: fixedTokenKey || '',
    service: ''
  }), [currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, fixedTokenKey, isAllAccount]);
  const promiseRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)({
    resolve: _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.noop,
    reject: _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.noop
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
  const [disclaimerAgree, setDisclaimerAgree] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
    transak: false,
    banxa: false,
    onramper: false,
    moonpay: false,
    coinbase: false
  });
  const selectedAddress = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].useWatch('address', form);
  const selectedTokenKey = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].useWatch('tokenKey', form);
  const selectedService = _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].useWatch('service', form);
  const {
    contactUrl,
    name: serviceName,
    policyUrl,
    termUrl,
    url
  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => {
    return _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_4__.BUY_SERVICE_CONTACTS[selectedService] || {
      name: '',
      url: '',
      contactUrl: '',
      policyUrl: '',
      termUrl: ''
    };
  }, [selectedService]);
  const onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    activeModal(modalId);
    return new Promise((resolve, reject) => {
      promiseRef.current = {
        resolve: () => {
          inactiveModal(modalId);
          resolve();
        },
        reject: e => {
          inactiveModal(modalId);
          reject(e);
        }
      };
    });
  }, [activeModal, inactiveModal]);
  const onApprove = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    promiseRef.current.resolve();
  }, []);
  const onReject = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    promiseRef.current.reject(new Error('User reject'));
  }, []);
  const accountType = selectedAddress ? (0,_subwallet_extension_koni_ui_utils_account_account__WEBPACK_IMPORTED_MODULE_7__.getAccountType)(selectedAddress) : '';
  const ledgerNetwork = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => {
    const account = (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.findAccountByAddress)(accounts, selectedAddress);
    if (account !== null && account !== void 0 && account.originGenesisHash) {
      var _findNetworkJsonByGen;
      return (_findNetworkJsonByGen = (0,_subwallet_extension_koni_ui_utils_chain_getNetworkJsonByGenesisHash__WEBPACK_IMPORTED_MODULE_9__.findNetworkJsonByGenesisHash)(chainInfoMap, account.originGenesisHash)) === null || _findNetworkJsonByGen === void 0 ? void 0 : _findNetworkJsonByGen.slug;
    }
    return undefined;
  }, [accounts, chainInfoMap, selectedAddress]);
  const tokenItems = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => {
    const result = [];
    const list = [..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_4__.LIST_PREDEFINED_BUY_TOKEN];
    const filtered = currentSymbol ? list.filter(value => value.slug === currentSymbol || value.symbol === currentSymbol) : list;
    filtered.forEach(info => {
      if (ledgerNetwork) {
        if (info.network === ledgerNetwork) {
          result.push({
            name: info.symbol,
            slug: info.slug,
            symbol: info.symbol,
            originChain: info.network
          });
        }
      } else {
        if (accountType === 'ALL' || accountType === info.support) {
          result.push({
            name: info.symbol,
            slug: info.slug,
            symbol: info.symbol,
            originChain: info.network
          });
        }
      }
    });
    return result;
  }, [accountType, currentSymbol, ledgerNetwork]);
  const serviceItems = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => getServiceItems(selectedTokenKey), [selectedTokenKey]);
  const isSupportBuyTokens = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => {
    if (selectedService && selectedAddress && selectedTokenKey) {
      const buyInfo = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_4__.MAP_PREDEFINED_BUY_TOKEN[selectedTokenKey];
      const accountType = (0,_subwallet_extension_koni_ui_utils_account_account__WEBPACK_IMPORTED_MODULE_7__.getAccountType)(selectedAddress);
      return buyInfo && buyInfo.support === accountType && buyInfo.services.includes(selectedService) && tokenItems.find(item => item.slug === selectedTokenKey);
    }
    return false;
  }, [selectedService, selectedAddress, selectedTokenKey, tokenItems]);
  const onClickNext = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    var _chainInfoMap$network;
    setLoading(true);
    const {
      address,
      service,
      tokenKey
    } = form.getFieldsValue();
    let urlPromise;
    const buyInfo = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_4__.MAP_PREDEFINED_BUY_TOKEN[tokenKey];
    const {
      network
    } = buyInfo;
    const serviceInfo = buyInfo.serviceInfo[service];
    const networkPrefix = (_chainInfoMap$network = chainInfoMap[network].substrateInfo) === null || _chainInfoMap$network === void 0 ? void 0 : _chainInfoMap$network.addressPrefix;
    const walletAddress = (0,_subwallet_extension_koni_ui_utils_account_reformatAddress__WEBPACK_IMPORTED_MODULE_8__["default"])(address, networkPrefix === undefined ? -1 : networkPrefix);
    switch (service) {
      case 'transak':
        urlPromise = _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.createTransakOrder;
        break;
      case 'banxa':
        urlPromise = _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.createBanxaOrder;
        break;
      case 'coinbase':
        urlPromise = _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.createCoinbaseOrder;
        break;
    }
    if (urlPromise && serviceInfo && buyInfo.services.includes(service)) {
      const {
        network: serviceNetwork,
        symbol
      } = serviceInfo;
      const disclaimerPromise = new Promise((resolve, reject) => {
        if (!disclaimerAgree[service]) {
          onConfirm().then(() => {
            setDisclaimerAgree(oldState => ({
              ...oldState,
              [service]: true
            }));
            resolve();
          }).catch(e => {
            reject(e);
          });
        } else {
          resolve();
        }
      });
      disclaimerPromise.then(() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return urlPromise(symbol, walletAddress, serviceNetwork, walletReference);
      }).then(url => {
        (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_6__.openInNewTab)(url)();
      }).catch(e => {
        if (e.message !== 'User reject') {
          console.error(e);
          notify({
            message: t('Create buy order fail')
          });
        }
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [form, chainInfoMap, disclaimerAgree, onConfirm, walletReference, notify, t]);
  const filterAccountType = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(() => {
    if (currentSymbol) {
      let result = '';
      const list = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_4__.LIST_PREDEFINED_BUY_TOKEN.filter(value => value.slug === currentSymbol || value.symbol === currentSymbol);
      list.forEach(info => {
        if (result) {
          if (result !== info.support) {
            if (result === 'SUBSTRATE' || result === 'ETHEREUM') {
              result = 'ALL';
            }
          }
        } else {
          result = info.support;
        }
      });
      return result;
    } else {
      return 'ALL';
    }
  }, [currentSymbol]);
  const accountsFilter = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(account => {
    if ((0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_17__.isAccountAll)(account.address)) {
      return false;
    }
    if (filterAccountType !== 'ALL') {
      if (filterAccountType === 'ETHEREUM') {
        return (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(account.address);
      } else {
        return !(0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_18__.isEthereumAddress)(account.address);
      }
    }
    return true;
  }, [filterAccountType]);
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    if (currentAddress !== (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address)) {
      goBack();
    }
  }, [currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address, currentAddress, goBack]);
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    if (!fixedTokenKey && tokenItems.length) {
      const {
        tokenKey
      } = form.getFieldsValue();
      if (!tokenKey) {
        form.setFieldsValue({
          tokenKey: tokenItems[0].slug
        });
      } else {
        const isSelectedTokenInList = tokenItems.some(i => i.slug === tokenKey);
        if (!isSelectedTokenInList) {
          form.setFieldsValue({
            tokenKey: tokenItems[0].slug
          });
        }
      }
    } else if (fixedTokenKey) {
      setTimeout(() => {
        form.setFieldsValue({
          tokenKey: fixedTokenKey
        });
      }, 100);
    }
  }, [tokenItems, fixedTokenKey, form]);
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    selectedTokenKey && checkAsset(selectedTokenKey);
  }, [checkAsset, selectedTokenKey]);
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    if (selectedTokenKey) {
      const services = getServiceItems(selectedTokenKey);
      const filtered = services.filter(service => !service.disabled);
      if (filtered.length > 1) {
        form.setFieldValue('service', '');
      } else {
        var _filtered$;
        form.setFieldValue('service', ((_filtered$ = filtered[0]) === null || _filtered$ === void 0 ? void 0 : _filtered$.key) || '');
      }
    }
  }, [selectedTokenKey, form]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Home, {
    showFilterIcon: true,
    showTabBar: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(className, 'transaction-wrapper'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"], {
        background: 'transparent',
        center: true,
        className: 'transaction-header',
        onBack: goBack,
        paddingVertical: true,
        showBackButton: true,
        title: t('Buy token')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: '__scroll-container',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "__buy-icon-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
            className: '__buy-icon',
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"],
            weight: 'fill'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
          className: "__form-container form-space-sm",
          form: form,
          initialValues: formDefault,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
            className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
              hidden: !isAllAccount
            }),
            name: 'address',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components_Field_AccountSelector__WEBPACK_IMPORTED_MODULE_1__.AccountSelector, {
              disabled: !isAllAccount,
              filter: accountsFilter,
              label: t('Select account')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "form-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
              name: 'tokenKey',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components_Field_TokenSelector__WEBPACK_IMPORTED_MODULE_3__.TokenSelector, {
                disabled: tokenItems.length < 2,
                items: tokenItems,
                showChainInSelected: false
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
              name: 'service',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components_Field_BuyTokens_ServiceSelector__WEBPACK_IMPORTED_MODULE_2__.ServiceSelector, {
                disabled: !selectedTokenKey,
                items: serviceItems,
                placeholder: t('Select supplier'),
                title: t('Select supplier')
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: 'common-text __note',
          children: t('You will be directed to the chosen supplier to complete this transaction')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: '__layout-footer',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
          disabled: !isSupportBuyTokens,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_21__["default"],
            weight: 'fill'
          }),
          loading: loading,
          onClick: onClickNext,
          children: t('Buy now')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(className),
        footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
            block: true,
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
              weight: "fill"
            }),
            onClick: onReject,
            schema: 'secondary',
            children: t('Cancel')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
            block: true,
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"], {
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_25__["default"],
              weight: "fill"
            }),
            onClick: onApprove,
            children: t('Agree')
          })]
        }),
        id: modalId,
        onCancel: onReject,
        title: t('Disclaimer'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_26__.Trans, {
          components: {
            mainUrl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(LinkUrl, {
              content: serviceName,
              url: url
            }),
            termUrl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(LinkUrl, {
              content: t('Terms of Service'),
              url: termUrl
            }),
            policyUrl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(LinkUrl, {
              content: t('Privacy Policy'),
              url: policyUrl
            }),
            contactUrl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(LinkUrl, {
              content: t('support site'),
              url: contactUrl
            })
          },
          i18nKey: (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_27__.detectTranslate)('You are now leaving SubWallet for <mainUrl/>. Services related to card payments are provided by {{service}}, a separate third-party platform. By proceeding and procuring services from {{service}}, you acknowledge that you have read and agreed to {{service}}\'s <termUrl/> and <policyUrl/>. For any question related to {{service}}\'s services, please visit {{service}}\'s <contactUrl/>.'),
          values: {
            service: serviceName
          }
        })
      })]
    })
  });
}
const BuyTokens = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__["default"])(Component).withConfig({
  displayName: "BuyTokens",
  componentId: "sc-mzp0st-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    '.ant-sw-modal-footer': {
      display: 'flex'
    },
    '.ant-sw-modal-body': {
      color: token.colorTextSecondary
    },
    '.__scroll-container': {
      flex: 1,
      overflow: 'auto',
      paddingLeft: token.padding,
      paddingRight: token.padding
    },
    '.__buy-icon-wrapper': {
      position: 'relative',
      width: 112,
      height: 112,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: token.margin,
      marginBottom: token.marginLG,
      '&:before': {
        content: '""',
        backgroundColor: token.colorSuccess,
        inset: 0,
        position: 'absolute',
        display: 'block',
        borderRadius: '100%',
        opacity: '0.1'
      }
    },
    '.__buy-icon': {
      fontSize: 64,
      color: token.colorSuccess
    },
    '.__note': {
      paddingTop: token.paddingXXS,
      paddingBottom: token.padding,
      color: token.colorTextLight5,
      textAlign: 'center'
    },
    '.__layout-footer': {
      display: 'flex',
      padding: token.paddingMD,
      paddingBottom: token.paddingLG,
      gap: token.paddingXS,
      '.ant-btn': {
        flex: 1
      },
      '.full-width': {
        minWidth: '100%'
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyTokens);

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/ShoppingCartSimple.esm.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/ShoppingCartSimple.esm.js ***!
  \******************************************************************************/
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
    cx: "80",
    cy: "216",
    r: "20"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "20"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-24.1,84.4A16,16,0,0,1,182.2,168H81.8a16,16,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "216",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM228.1,67.2a8.1,8.1,0,0,0-6.4-3.2H48.3L40.2,35.6A16.1,16.1,0,0,0,24.8,24H8A8,8,0,0,0,8,40H24.8l9.8,34.1v.2L61,166.6A24.1,24.1,0,0,0,84.1,184h95.8A24.1,24.1,0,0,0,203,166.6l26.4-92.4A8,8,0,0,0,228.1,67.2Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "216",
    r: "14"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "14"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "216",
    r: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "80",
    cy: "216",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "184",
    cy: "216",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
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

var ShoppingCartSimple = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ShoppingCartSimple.displayName = "ShoppingCartSimple";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCartSimple);
//# sourceMappingURL=ShoppingCartSimple.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfQnV5VG9rZW5zX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR2dGO0FBQzZCO0FBQ2I7QUFDVTtBQUNDO0FBQ3dCO0FBQ1Q7QUFJK0I7QUFDckU7QUFDSztBQUMyQjtBQUN2QjtBQUNqRTtBQUM4QztBQUNtQjtBQUN2RDtBQUNJO0FBQ0s7QUFDUjtBQUVtQjtBQUFBO0FBQUE7QUFBQTtBQWUxRCxNQUFNOEMsZUFBZSxHQUFJQyxTQUFpQixJQUFvQjtFQUM1RCxNQUFNQyxPQUFPLEdBQUd0Qyw0RkFBd0IsQ0FBQ3FDLFNBQVMsQ0FBQztFQUNuRCxNQUFNRSxNQUFxQixHQUFHLEVBQUU7RUFFaEMsS0FBSyxNQUFNQyxXQUFXLElBQUloRCxxRkFBZ0IsRUFBRTtJQUMxQyxNQUFNaUQsSUFBaUIsR0FBRztNQUN4QixHQUFHRCxXQUFXO01BQ2RFLFFBQVEsRUFBRUosT0FBTyxHQUFHLENBQUNBLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDQyxRQUFRLENBQUNKLFdBQVcsQ0FBQ0ssR0FBRyxDQUFDLEdBQUc7SUFDcEUsQ0FBQztJQUVETixNQUFNLENBQUNPLElBQUksQ0FBQ0wsSUFBSSxDQUFDO0VBQ25CO0VBRUEsT0FBT0YsTUFBTTtBQUNmLENBQUM7QUFFRCxNQUFNUSxPQUErQixHQUFJQyxLQUFtQixJQUFLO0VBQy9ELElBQUlBLEtBQUssQ0FBQ0MsR0FBRyxFQUFFO0lBQ2Isb0JBQ0U7TUFDRSxJQUFJLEVBQUVELEtBQUssQ0FBQ0MsR0FBSTtNQUNoQixNQUFNLEVBQUMsU0FBUztNQUFBLFVBRWZELEtBQUssQ0FBQ0U7SUFBTyxFQUNaO0VBRVIsQ0FBQyxNQUFNO0lBQ0wsb0JBQU87TUFBQSxVQUFPRixLQUFLLENBQUNFO0lBQU8sRUFBUTtFQUNyQztBQUNGLENBQUM7QUFFRCxNQUFNQyxPQUFPLEdBQUcsa0JBQWtC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Q3pCO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLFNBQVMsc0VBQW1CO0FBQzVCOztBQUVBLHNDQUFzQyxpREFBVTtBQUNoRCxTQUFTLDBEQUFtQixDQUFDLDREQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQztBQUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0J1eVRva2Vucy50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi8uLi9ub2RlX21vZHVsZXMvcGhvc3Bob3ItcmVhY3QvZGlzdC9pY29ucy9TaG9wcGluZ0NhcnRTaW1wbGUuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IEFjY291bnRKc29uLCBSZXNvbHZlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBkZXRlY3RUcmFuc2xhdGUsIGlzQWNjb3VudEFsbCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuaW1wb3J0IHsgYmFzZVNlcnZpY2VJdGVtcywgTGF5b3V0LCBQYWdlV3JhcHBlciwgU2VydmljZUl0ZW0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWNjb3VudFNlbGVjdG9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ZpZWxkL0FjY291bnRTZWxlY3Rvcic7XG5pbXBvcnQgeyBTZXJ2aWNlU2VsZWN0b3IgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMvRmllbGQvQnV5VG9rZW5zL1NlcnZpY2VTZWxlY3Rvcic7XG5pbXBvcnQgeyBUb2tlbkl0ZW1UeXBlLCBUb2tlblNlbGVjdG9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzL0ZpZWxkL1Rva2VuU2VsZWN0b3InO1xuaW1wb3J0IHsgQlVZX1NFUlZJQ0VfQ09OVEFDVFMsIExJU1RfUFJFREVGSU5FRF9CVVlfVE9LRU4sIE1BUF9QUkVERUZJTkVEX0JVWV9UT0tFTiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZUFzc2V0Q2hlY2tlciwgdXNlRGVmYXVsdE5hdmlnYXRlLCB1c2VOb3RpZmljYXRpb24sIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcyc7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSwgQnV5U2VydmljZUluZm8sIENyZWF0ZUJ1eU9yZGVyRnVuY3Rpb24sIFN1cHBvcnRTZXJ2aWNlLCBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBCdXlUb2tlbnNQYXJhbSB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVCYW54YU9yZGVyLCBjcmVhdGVDb2luYmFzZU9yZGVyLCBjcmVhdGVUcmFuc2FrT3JkZXIsIGZpbmRBY2NvdW50QnlBZGRyZXNzLCBub29wLCBvcGVuSW5OZXdUYWIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzJztcbmltcG9ydCB7IGdldEFjY291bnRUeXBlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9hY2NvdW50L2FjY291bnQnO1xuaW1wb3J0IHJlZm9ybWF0QWRkcmVzcyBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzL2FjY291bnQvcmVmb3JtYXRBZGRyZXNzJztcbmltcG9ydCB7IGZpbmROZXR3b3JrSnNvbkJ5R2VuZXNpc0hhc2ggfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3V0aWxzL2NoYWluL2dldE5ldHdvcmtKc29uQnlHZW5lc2lzSGFzaCc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEljb24sIE1vZGFsQ29udGV4dCwgU3dNb2RhbCwgU3dTdWJIZWFkZXIgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENoZWNrQ2lyY2xlLCBTaG9wcGluZ0NhcnRTaW1wbGUsIFhDaXJjbGUgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgaXNFdGhlcmV1bUFkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxudHlwZSBCdXlUb2tlbnNGb3JtUHJvcHMgPSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgdG9rZW5LZXk6IHN0cmluZztcbiAgc2VydmljZTogU3VwcG9ydFNlcnZpY2U7XG59XG5cbmludGVyZmFjZSBMaW5rVXJsUHJvcHMge1xuICB1cmw6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRTZXJ2aWNlSXRlbXMgPSAodG9rZW5TbHVnOiBzdHJpbmcpOiBTZXJ2aWNlSXRlbVtdID0+IHtcbiAgY29uc3QgYnV5SW5mbyA9IE1BUF9QUkVERUZJTkVEX0JVWV9UT0tFTlt0b2tlblNsdWddO1xuICBjb25zdCByZXN1bHQ6IFNlcnZpY2VJdGVtW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IHNlcnZpY2VJdGVtIG9mIGJhc2VTZXJ2aWNlSXRlbXMpIHtcbiAgICBjb25zdCB0ZW1wOiBTZXJ2aWNlSXRlbSA9IHtcbiAgICAgIC4uLnNlcnZpY2VJdGVtLFxuICAgICAgZGlzYWJsZWQ6IGJ1eUluZm8gPyAhYnV5SW5mby5zZXJ2aWNlcy5pbmNsdWRlcyhzZXJ2aWNlSXRlbS5rZXkpIDogdHJ1ZVxuICAgIH07XG5cbiAgICByZXN1bHQucHVzaCh0ZW1wKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBMaW5rVXJsOiBSZWFjdC5GQzxMaW5rVXJsUHJvcHM+ID0gKHByb3BzOiBMaW5rVXJsUHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLnVybCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBocmVmPXtwcm9wcy51cmx9XG4gICAgICAgIHRhcmdldD0nX19ibGFuaydcbiAgICAgID5cbiAgICAgICAge3Byb3BzLmNvbnRlbnR9XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNvbnRlbnR9PC9zcGFuPjtcbiAgfVxufTtcblxuY29uc3QgbW9kYWxJZCA9ICdkaXNjbGFpbWVyLW1vZGFsJztcblxuZnVuY3Rpb24gQ29tcG9uZW50ICh7IGNsYXNzTmFtZSB9OiBQcm9wcykge1xuICBjb25zdCBsb2NhdGlvblN0YXRlID0gdXNlTG9jYXRpb24oKS5zdGF0ZSBhcyBCdXlUb2tlbnNQYXJhbTtcbiAgY29uc3QgW2N1cnJlbnRTeW1ib2xdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihsb2NhdGlvblN0YXRlPy5zeW1ib2wpO1xuXG4gIGNvbnN0IGZpeGVkVG9rZW5LZXkgPSB1c2VNZW1vKCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIGlmIChjdXJyZW50U3ltYm9sKSB7XG4gICAgICByZXR1cm4gTElTVF9QUkVERUZJTkVEX0JVWV9UT0tFTi5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5zbHVnID09PSBjdXJyZW50U3ltYm9sIHx8IHZhbHVlLnN5bWJvbCA9PT0gY3VycmVudFN5bWJvbClbMF0/LnNsdWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCBbY3VycmVudFN5bWJvbF0pO1xuXG4gIGNvbnN0IG5vdGlmeSA9IHVzZU5vdGlmaWNhdGlvbigpO1xuXG4gIGNvbnN0IHsgYWN0aXZlTW9kYWwsIGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICBjb25zdCB7IGFjY291bnRzLCBjdXJyZW50QWNjb3VudCwgaXNBbGxBY2NvdW50IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYWNjb3VudFN0YXRlKTtcbiAgY29uc3QgeyBjaGFpbkluZm9NYXAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jaGFpblN0b3JlKTtcbiAgY29uc3QgeyB3YWxsZXRSZWZlcmVuY2UgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXR0aW5ncyk7XG4gIGNvbnN0IGNoZWNrQXNzZXQgPSB1c2VBc3NldENoZWNrZXIoKTtcblxuICBjb25zdCBbY3VycmVudEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihjdXJyZW50QWNjb3VudD8uYWRkcmVzcyk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBnb0JhY2sgfSA9IHVzZURlZmF1bHROYXZpZ2F0ZSgpO1xuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm08QnV5VG9rZW5zRm9ybVByb3BzPigpO1xuICBjb25zdCBmb3JtRGVmYXVsdCA9IHVzZU1lbW8oKCk6IEJ1eVRva2Vuc0Zvcm1Qcm9wcyA9PiAoe1xuICAgIGFkZHJlc3M6IGlzQWxsQWNjb3VudCA/ICcnIDogKGN1cnJlbnRBY2NvdW50Py5hZGRyZXNzIHx8ICcnKSxcbiAgICB0b2tlbktleTogZml4ZWRUb2tlbktleSB8fCAnJyxcbiAgICBzZXJ2aWNlOiAnJyBhcyBTdXBwb3J0U2VydmljZVxuICB9KSwgW2N1cnJlbnRBY2NvdW50Py5hZGRyZXNzLCBmaXhlZFRva2VuS2V5LCBpc0FsbEFjY291bnRdKTtcblxuICBjb25zdCBwcm9taXNlUmVmID0gdXNlUmVmPFJlc29sdmVyPHZvaWQ+Pih7IHJlc29sdmU6IG5vb3AsIHJlamVjdDogbm9vcCB9KTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNjbGFpbWVyQWdyZWUsIHNldERpc2NsYWltZXJBZ3JlZV0gPSB1c2VTdGF0ZTxSZWNvcmQ8U3VwcG9ydFNlcnZpY2UsIGJvb2xlYW4+Pih7XG4gICAgdHJhbnNhazogZmFsc2UsXG4gICAgYmFueGE6IGZhbHNlLFxuICAgIG9ucmFtcGVyOiBmYWxzZSxcbiAgICBtb29ucGF5OiBmYWxzZSxcbiAgICBjb2luYmFzZTogZmFsc2VcbiAgfSk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRBZGRyZXNzID0gRm9ybS51c2VXYXRjaCgnYWRkcmVzcycsIGZvcm0pO1xuICBjb25zdCBzZWxlY3RlZFRva2VuS2V5ID0gRm9ybS51c2VXYXRjaCgndG9rZW5LZXknLCBmb3JtKTtcbiAgY29uc3Qgc2VsZWN0ZWRTZXJ2aWNlID0gRm9ybS51c2VXYXRjaCgnc2VydmljZScsIGZvcm0pO1xuXG4gIGNvbnN0IHsgY29udGFjdFVybCwgbmFtZTogc2VydmljZU5hbWUsIHBvbGljeVVybCwgdGVybVVybCwgdXJsIH0gPSB1c2VNZW1vKCgpOiBCdXlTZXJ2aWNlSW5mbyA9PiB7XG4gICAgcmV0dXJuIEJVWV9TRVJWSUNFX0NPTlRBQ1RTW3NlbGVjdGVkU2VydmljZV0gfHwgeyBuYW1lOiAnJywgdXJsOiAnJywgY29udGFjdFVybDogJycsIHBvbGljeVVybDogJycsIHRlcm1Vcmw6ICcnIH07XG4gIH0sIFtzZWxlY3RlZFNlcnZpY2VdKTtcblxuICBjb25zdCBvbkNvbmZpcm0gPSB1c2VDYWxsYmFjaygoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYWN0aXZlTW9kYWwobW9kYWxJZCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcHJvbWlzZVJlZi5jdXJyZW50ID0ge1xuICAgICAgICByZXNvbHZlOiAoKSA9PiB7XG4gICAgICAgICAgaW5hY3RpdmVNb2RhbChtb2RhbElkKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdDogKGUpID0+IHtcbiAgICAgICAgICBpbmFjdGl2ZU1vZGFsKG1vZGFsSWQpO1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwgW2FjdGl2ZU1vZGFsLCBpbmFjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3Qgb25BcHByb3ZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHByb21pc2VSZWYuY3VycmVudC5yZXNvbHZlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblJlamVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBwcm9taXNlUmVmLmN1cnJlbnQucmVqZWN0KG5ldyBFcnJvcignVXNlciByZWplY3QnKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBhY2NvdW50VHlwZSA9IHNlbGVjdGVkQWRkcmVzcyA/IGdldEFjY291bnRUeXBlKHNlbGVjdGVkQWRkcmVzcykgOiAnJztcbiAgY29uc3QgbGVkZ2VyTmV0d29yayA9IHVzZU1lbW8oKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgYWNjb3VudCA9IGZpbmRBY2NvdW50QnlBZGRyZXNzKGFjY291bnRzLCBzZWxlY3RlZEFkZHJlc3MpO1xuXG4gICAgaWYgKGFjY291bnQ/Lm9yaWdpbkdlbmVzaXNIYXNoKSB7XG4gICAgICByZXR1cm4gZmluZE5ldHdvcmtKc29uQnlHZW5lc2lzSGFzaChjaGFpbkluZm9NYXAsIGFjY291bnQub3JpZ2luR2VuZXNpc0hhc2gpPy5zbHVnO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFthY2NvdW50cywgY2hhaW5JbmZvTWFwLCBzZWxlY3RlZEFkZHJlc3NdKTtcblxuICBjb25zdCB0b2tlbkl0ZW1zID0gdXNlTWVtbzxUb2tlbkl0ZW1UeXBlW10+KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQ6IFRva2VuSXRlbVR5cGVbXSA9IFtdO1xuXG4gICAgY29uc3QgbGlzdCA9IFsuLi5MSVNUX1BSRURFRklORURfQlVZX1RPS0VOXTtcblxuICAgIGNvbnN0IGZpbHRlcmVkID0gY3VycmVudFN5bWJvbCA/IGxpc3QuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuc2x1ZyA9PT0gY3VycmVudFN5bWJvbCB8fCB2YWx1ZS5zeW1ib2wgPT09IGN1cnJlbnRTeW1ib2wpIDogbGlzdDtcblxuICAgIGZpbHRlcmVkLmZvckVhY2goKGluZm8pID0+IHtcbiAgICAgIGlmIChsZWRnZXJOZXR3b3JrKSB7XG4gICAgICAgIGlmIChpbmZvLm5ldHdvcmsgPT09IGxlZGdlck5ldHdvcmspIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBpbmZvLnN5bWJvbCxcbiAgICAgICAgICAgIHNsdWc6IGluZm8uc2x1ZyxcbiAgICAgICAgICAgIHN5bWJvbDogaW5mby5zeW1ib2wsXG4gICAgICAgICAgICBvcmlnaW5DaGFpbjogaW5mby5uZXR3b3JrXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhY2NvdW50VHlwZSA9PT0gJ0FMTCcgfHwgYWNjb3VudFR5cGUgPT09IGluZm8uc3VwcG9ydCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGluZm8uc3ltYm9sLFxuICAgICAgICAgICAgc2x1ZzogaW5mby5zbHVnLFxuICAgICAgICAgICAgc3ltYm9sOiBpbmZvLnN5bWJvbCxcbiAgICAgICAgICAgIG9yaWdpbkNoYWluOiBpbmZvLm5ldHdvcmtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgW2FjY291bnRUeXBlLCBjdXJyZW50U3ltYm9sLCBsZWRnZXJOZXR3b3JrXSk7XG5cbiAgY29uc3Qgc2VydmljZUl0ZW1zID0gdXNlTWVtbygoKSA9PiBnZXRTZXJ2aWNlSXRlbXMoc2VsZWN0ZWRUb2tlbktleSksIFtzZWxlY3RlZFRva2VuS2V5XSk7XG5cbiAgY29uc3QgaXNTdXBwb3J0QnV5VG9rZW5zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkU2VydmljZSAmJiBzZWxlY3RlZEFkZHJlc3MgJiYgc2VsZWN0ZWRUb2tlbktleSkge1xuICAgICAgY29uc3QgYnV5SW5mbyA9IE1BUF9QUkVERUZJTkVEX0JVWV9UT0tFTltzZWxlY3RlZFRva2VuS2V5XTtcbiAgICAgIGNvbnN0IGFjY291bnRUeXBlID0gZ2V0QWNjb3VudFR5cGUoc2VsZWN0ZWRBZGRyZXNzKTtcblxuICAgICAgcmV0dXJuIGJ1eUluZm8gJiYgYnV5SW5mby5zdXBwb3J0ID09PSBhY2NvdW50VHlwZSAmJiBidXlJbmZvLnNlcnZpY2VzLmluY2x1ZGVzKHNlbGVjdGVkU2VydmljZSkgJiYgdG9rZW5JdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IHNlbGVjdGVkVG9rZW5LZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSwgW3NlbGVjdGVkU2VydmljZSwgc2VsZWN0ZWRBZGRyZXNzLCBzZWxlY3RlZFRva2VuS2V5LCB0b2tlbkl0ZW1zXSk7XG5cbiAgY29uc3Qgb25DbGlja05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IHsgYWRkcmVzcywgc2VydmljZSwgdG9rZW5LZXkgfSA9IGZvcm0uZ2V0RmllbGRzVmFsdWUoKTtcblxuICAgIGxldCB1cmxQcm9taXNlOiBDcmVhdGVCdXlPcmRlckZ1bmN0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgYnV5SW5mbyA9IE1BUF9QUkVERUZJTkVEX0JVWV9UT0tFTlt0b2tlbktleV07XG4gICAgY29uc3QgeyBuZXR3b3JrIH0gPSBidXlJbmZvO1xuXG4gICAgY29uc3Qgc2VydmljZUluZm8gPSBidXlJbmZvLnNlcnZpY2VJbmZvW3NlcnZpY2VdO1xuICAgIGNvbnN0IG5ldHdvcmtQcmVmaXggPSBjaGFpbkluZm9NYXBbbmV0d29ya10uc3Vic3RyYXRlSW5mbz8uYWRkcmVzc1ByZWZpeDtcblxuICAgIGNvbnN0IHdhbGxldEFkZHJlc3MgPSByZWZvcm1hdEFkZHJlc3MoYWRkcmVzcywgbmV0d29ya1ByZWZpeCA9PT0gdW5kZWZpbmVkID8gLTEgOiBuZXR3b3JrUHJlZml4KTtcblxuICAgIHN3aXRjaCAoc2VydmljZSkge1xuICAgICAgY2FzZSAndHJhbnNhayc6XG4gICAgICAgIHVybFByb21pc2UgPSBjcmVhdGVUcmFuc2FrT3JkZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmFueGEnOlxuICAgICAgICB1cmxQcm9taXNlID0gY3JlYXRlQmFueGFPcmRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb2luYmFzZSc6XG4gICAgICAgIHVybFByb21pc2UgPSBjcmVhdGVDb2luYmFzZU9yZGVyO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodXJsUHJvbWlzZSAmJiBzZXJ2aWNlSW5mbyAmJiBidXlJbmZvLnNlcnZpY2VzLmluY2x1ZGVzKHNlcnZpY2UpKSB7XG4gICAgICBjb25zdCB7IG5ldHdvcms6IHNlcnZpY2VOZXR3b3JrLCBzeW1ib2wgfSA9IHNlcnZpY2VJbmZvO1xuXG4gICAgICBjb25zdCBkaXNjbGFpbWVyUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKCFkaXNjbGFpbWVyQWdyZWVbc2VydmljZV0pIHtcbiAgICAgICAgICBvbkNvbmZpcm0oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldERpc2NsYWltZXJBZ3JlZSgob2xkU3RhdGUpID0+ICh7IC4uLm9sZFN0YXRlLCBbc2VydmljZV06IHRydWUgfSkpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZGlzY2xhaW1lclByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgIHJldHVybiB1cmxQcm9taXNlIShzeW1ib2wsIHdhbGxldEFkZHJlc3MsIHNlcnZpY2VOZXR3b3JrLCB3YWxsZXRSZWZlcmVuY2UpO1xuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgIG9wZW5Jbk5ld1RhYih1cmwpKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAoZS5tZXNzYWdlICE9PSAnVXNlciByZWplY3QnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXG4gICAgICAgICAgICBub3RpZnkoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdDcmVhdGUgYnV5IG9yZGVyIGZhaWwnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtmb3JtLCBjaGFpbkluZm9NYXAsIGRpc2NsYWltZXJBZ3JlZSwgb25Db25maXJtLCB3YWxsZXRSZWZlcmVuY2UsIG5vdGlmeSwgdF0pO1xuXG4gIGNvbnN0IGZpbHRlckFjY291bnRUeXBlID0gdXNlTWVtbygoKTogQWNjb3VudFR5cGUgPT4ge1xuICAgIGlmIChjdXJyZW50U3ltYm9sKSB7XG4gICAgICBsZXQgcmVzdWx0OiBBY2NvdW50VHlwZSA9ICcnIGFzIEFjY291bnRUeXBlO1xuXG4gICAgICBjb25zdCBsaXN0ID0gTElTVF9QUkVERUZJTkVEX0JVWV9UT0tFTi5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5zbHVnID09PSBjdXJyZW50U3ltYm9sIHx8IHZhbHVlLnN5bWJvbCA9PT0gY3VycmVudFN5bWJvbCk7XG5cbiAgICAgIGxpc3QuZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gaW5mby5zdXBwb3J0KSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnU1VCU1RSQVRFJyB8fCByZXN1bHQgPT09ICdFVEhFUkVVTScpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gJ0FMTCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGluZm8uc3VwcG9ydDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnQUxMJztcbiAgICB9XG4gIH0sIFtjdXJyZW50U3ltYm9sXSk7XG5cbiAgY29uc3QgYWNjb3VudHNGaWx0ZXIgPSB1c2VDYWxsYmFjaygoYWNjb3VudDogQWNjb3VudEpzb24pID0+IHtcbiAgICBpZiAoaXNBY2NvdW50QWxsKGFjY291bnQuYWRkcmVzcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyQWNjb3VudFR5cGUgIT09ICdBTEwnKSB7XG4gICAgICBpZiAoZmlsdGVyQWNjb3VudFR5cGUgPT09ICdFVEhFUkVVTScpIHtcbiAgICAgICAgcmV0dXJuIGlzRXRoZXJldW1BZGRyZXNzKGFjY291bnQuYWRkcmVzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gIWlzRXRoZXJldW1BZGRyZXNzKGFjY291bnQuYWRkcmVzcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sIFtmaWx0ZXJBY2NvdW50VHlwZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRBZGRyZXNzICE9PSBjdXJyZW50QWNjb3VudD8uYWRkcmVzcykge1xuICAgICAgZ29CYWNrKCk7XG4gICAgfVxuICB9LCBbY3VycmVudEFjY291bnQ/LmFkZHJlc3MsIGN1cnJlbnRBZGRyZXNzLCBnb0JhY2tdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZml4ZWRUb2tlbktleSAmJiB0b2tlbkl0ZW1zLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyB0b2tlbktleSB9ID0gZm9ybS5nZXRGaWVsZHNWYWx1ZSgpO1xuXG4gICAgICBpZiAoIXRva2VuS2V5KSB7XG4gICAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyB0b2tlbktleTogdG9rZW5JdGVtc1swXS5zbHVnIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRva2VuSW5MaXN0ID0gdG9rZW5JdGVtcy5zb21lKChpKSA9PiBpLnNsdWcgPT09IHRva2VuS2V5KTtcblxuICAgICAgICBpZiAoIWlzU2VsZWN0ZWRUb2tlbkluTGlzdCkge1xuICAgICAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyB0b2tlbktleTogdG9rZW5JdGVtc1swXS5zbHVnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaXhlZFRva2VuS2V5KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHRva2VuS2V5OiBmaXhlZFRva2VuS2V5IH0pO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH0sIFt0b2tlbkl0ZW1zLCBmaXhlZFRva2VuS2V5LCBmb3JtXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWxlY3RlZFRva2VuS2V5ICYmIGNoZWNrQXNzZXQoc2VsZWN0ZWRUb2tlbktleSk7XG4gIH0sIFtjaGVja0Fzc2V0LCBzZWxlY3RlZFRva2VuS2V5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRUb2tlbktleSkge1xuICAgICAgY29uc3Qgc2VydmljZXMgPSBnZXRTZXJ2aWNlSXRlbXMoc2VsZWN0ZWRUb2tlbktleSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHNlcnZpY2VzLmZpbHRlcigoc2VydmljZSkgPT4gIXNlcnZpY2UuZGlzYWJsZWQpO1xuXG4gICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3NlcnZpY2UnLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3NlcnZpY2UnLCBmaWx0ZXJlZFswXT8ua2V5IHx8ICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzZWxlY3RlZFRva2VuS2V5LCBmb3JtXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0LkhvbWVcbiAgICAgIHNob3dGaWx0ZXJJY29uXG4gICAgICBzaG93VGFiQmFyPXtmYWxzZX1cbiAgICA+XG4gICAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUsICd0cmFuc2FjdGlvbi13cmFwcGVyJyl9PlxuICAgICAgICA8U3dTdWJIZWFkZXJcbiAgICAgICAgICBiYWNrZ3JvdW5kPXsndHJhbnNwYXJlbnQnfVxuICAgICAgICAgIGNlbnRlclxuICAgICAgICAgIGNsYXNzTmFtZT17J3RyYW5zYWN0aW9uLWhlYWRlcid9XG4gICAgICAgICAgb25CYWNrPXtnb0JhY2t9XG4gICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsXG4gICAgICAgICAgc2hvd0JhY2tCdXR0b25cbiAgICAgICAgICB0aXRsZT17dCgnQnV5IHRva2VuJyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnX19zY3JvbGwtY29udGFpbmVyJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J19fYnV5LWljb24td3JhcHBlcic+XG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydfX2J1eS1pY29uJ31cbiAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtTaG9wcGluZ0NhcnRTaW1wbGV9XG4gICAgICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9J19fZm9ybS1jb250YWluZXIgZm9ybS1zcGFjZS1zbSdcbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtmb3JtRGVmYXVsdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Q04oe1xuICAgICAgICAgICAgICAgIGhpZGRlbjogIWlzQWxsQWNjb3VudFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgbmFtZT17J2FkZHJlc3MnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0FsbEFjY291bnR9XG4gICAgICAgICAgICAgICAgZmlsdGVyPXthY2NvdW50c0ZpbHRlcn1cbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnU2VsZWN0IGFjY291bnQnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1yb3cnPlxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9eyd0b2tlbktleSd9PlxuICAgICAgICAgICAgICAgIDxUb2tlblNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dG9rZW5JdGVtcy5sZW5ndGggPCAyfVxuICAgICAgICAgICAgICAgICAgaXRlbXM9e3Rva2VuSXRlbXN9XG4gICAgICAgICAgICAgICAgICBzaG93Q2hhaW5JblNlbGVjdGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9eydzZXJ2aWNlJ30+XG4gICAgICAgICAgICAgICAgPFNlcnZpY2VTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZFRva2VuS2V5fVxuICAgICAgICAgICAgICAgICAgaXRlbXM9e3NlcnZpY2VJdGVtc31cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdTZWxlY3Qgc3VwcGxpZXInKX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdTZWxlY3Qgc3VwcGxpZXInKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29tbW9uLXRleHQgX19ub3RlJ30+XG4gICAgICAgICAgICB7dCgnWW91IHdpbGwgYmUgZGlyZWN0ZWQgdG8gdGhlIGNob3NlbiBzdXBwbGllciB0byBjb21wbGV0ZSB0aGlzIHRyYW5zYWN0aW9uJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnX19sYXlvdXQtZm9vdGVyJ30+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1N1cHBvcnRCdXlUb2tlbnN9XG4gICAgICAgICAgICBpY29uPXsgKFxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17U2hvcHBpbmdDYXJ0U2ltcGxlfVxuICAgICAgICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrTmV4dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnQnV5IG5vdycpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFN3TW9kYWxcbiAgICAgICAgICBjbGFzc05hbWU9e0NOKGNsYXNzTmFtZSl9XG4gICAgICAgICAgZm9vdGVyPXsoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYmxvY2s9e3RydWV9XG4gICAgICAgICAgICAgICAgaWNvbj17KFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtYQ2lyY2xlfVxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25SZWplY3R9XG4gICAgICAgICAgICAgICAgc2NoZW1hPXsnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdDYW5jZWwnKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBibG9jaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBpY29uPXsoXG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e0NoZWNrQ2lyY2xlfVxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25BcHByb3ZlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3QoJ0FncmVlJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBpZD17bW9kYWxJZH1cbiAgICAgICAgICBvbkNhbmNlbD17b25SZWplY3R9XG4gICAgICAgICAgdGl0bGU9e3QoJ0Rpc2NsYWltZXInKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICBtYWluVXJsOiAoXG4gICAgICAgICAgICAgICAgPExpbmtVcmxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3NlcnZpY2VOYW1lfVxuICAgICAgICAgICAgICAgICAgdXJsPXt1cmx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgdGVybVVybDogKFxuICAgICAgICAgICAgICAgIDxMaW5rVXJsXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdUZXJtcyBvZiBTZXJ2aWNlJyl9XG4gICAgICAgICAgICAgICAgICB1cmw9e3Rlcm1Vcmx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgcG9saWN5VXJsOiAoXG4gICAgICAgICAgICAgICAgPExpbmtVcmxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ1ByaXZhY3kgUG9saWN5Jyl9XG4gICAgICAgICAgICAgICAgICB1cmw9e3BvbGljeVVybH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBjb250YWN0VXJsOiAoXG4gICAgICAgICAgICAgICAgPExpbmtVcmxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ3N1cHBvcnQgc2l0ZScpfVxuICAgICAgICAgICAgICAgICAgdXJsPXtjb250YWN0VXJsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpMThuS2V5PXtkZXRlY3RUcmFuc2xhdGUoJ1lvdSBhcmUgbm93IGxlYXZpbmcgU3ViV2FsbGV0IGZvciA8bWFpblVybC8+LiBTZXJ2aWNlcyByZWxhdGVkIHRvIGNhcmQgcGF5bWVudHMgYXJlIHByb3ZpZGVkIGJ5IHt7c2VydmljZX19LCBhIHNlcGFyYXRlIHRoaXJkLXBhcnR5IHBsYXRmb3JtLiBCeSBwcm9jZWVkaW5nIGFuZCBwcm9jdXJpbmcgc2VydmljZXMgZnJvbSB7e3NlcnZpY2V9fSwgeW91IGFja25vd2xlZGdlIHRoYXQgeW91IGhhdmUgcmVhZCBhbmQgYWdyZWVkIHRvIHt7c2VydmljZX19XFwncyA8dGVybVVybC8+IGFuZCA8cG9saWN5VXJsLz4uIEZvciBhbnkgcXVlc3Rpb24gcmVsYXRlZCB0byB7e3NlcnZpY2V9fVxcJ3Mgc2VydmljZXMsIHBsZWFzZSB2aXNpdCB7e3NlcnZpY2V9fVxcJ3MgPGNvbnRhY3RVcmwvPi4nKX1cbiAgICAgICAgICAgIHZhbHVlcz17e1xuICAgICAgICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlTmFtZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N3TW9kYWw+XG4gICAgICA8L1BhZ2VXcmFwcGVyPlxuICAgIDwvTGF5b3V0LkhvbWU+XG4gICk7XG59XG5cbmNvbnN0IEJ1eVRva2VucyA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAgICcuYW50LXN3LW1vZGFsLWZvb3Rlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG5cbiAgICAnLmFudC1zdy1tb2RhbC1ib2R5Jzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dFNlY29uZGFyeVxuICAgIH0sXG5cbiAgICAnLl9fc2Nyb2xsLWNvbnRhaW5lcic6IHtcbiAgICAgIGZsZXg6IDEsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgcGFkZGluZ0xlZnQ6IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLnBhZGRpbmdcbiAgICB9LFxuXG4gICAgJy5fX2J1eS1pY29uLXdyYXBwZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAxMTIsXG4gICAgICBoZWlnaHQ6IDExMixcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5MRyxcblxuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JTdWNjZXNzLFxuICAgICAgICBpbnNldDogMCxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgICAgICBvcGFjaXR5OiAnMC4xJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLl9fYnV5LWljb24nOiB7XG4gICAgICBmb250U2l6ZTogNjQsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JTdWNjZXNzXG4gICAgfSxcblxuICAgICcuX19ub3RlJzoge1xuICAgICAgcGFkZGluZ1RvcDogdG9rZW4ucGFkZGluZ1hYUyxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRva2VuLnBhZGRpbmcsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQ1LFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAnLl9fbGF5b3V0LWZvb3Rlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmdNRCxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRva2VuLnBhZGRpbmdMRyxcbiAgICAgIGdhcDogdG9rZW4ucGFkZGluZ1hTLFxuXG4gICAgICAnLmFudC1idG4nOiB7XG4gICAgICAgIGZsZXg6IDFcbiAgICAgIH0sXG5cbiAgICAgICcuZnVsbC13aWR0aCc6IHtcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQnV5VG9rZW5zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJQYXRoRm9yV2VpZ2h0IH0gZnJvbSAnLi4vbGliL2luZGV4LmVzbS5qcyc7XG5pbXBvcnQgSWNvbkJhc2UgZnJvbSAnLi4vbGliL0ljb25CYXNlLmVzbS5qcyc7XG5cbi8qIEdFTkVSQVRFRCBGSUxFICovXG52YXIgcGF0aHNCeVdlaWdodCA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImJvbGRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI4MFwiLFxuICAgIGN5OiBcIjIxNlwiLFxuICAgIHI6IFwiMjBcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTg0XCIsXG4gICAgY3k6IFwiMjE2XCIsXG4gICAgcjogXCIyMFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDIuMyw3MkgyMjEuN2wtMjQuMSw4NC40QTE2LDE2LDAsMCwxLDE4Mi4yLDE2OEg4MS44YTE2LDE2LDAsMCwxLTE1LjQtMTEuNkwzMi41LDM3LjhBOCw4LDAsMCwwLDI0LjgsMzJIMTJcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImR1b3RvbmVcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDIuMyw3MkgyMjEuN2wtMjYuNCw5Mi40QTE1LjksMTUuOSwwLDAsMSwxNzkuOSwxNzZIODQuMWExNS45LDE1LjksMCwwLDEtMTUuNC0xMS42WlwiLFxuICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjgwXCIsXG4gICAgY3k6IFwiMjE2XCIsXG4gICAgcjogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxODRcIixcbiAgICBjeTogXCIyMTZcIixcbiAgICByOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00Mi4zLDcySDIyMS43bC0yNi40LDkyLjRBMTUuOSwxNS45LDAsMCwxLDE3OS45LDE3Nkg4NC4xYTE1LjksMTUuOSwwLDAsMS0xNS40LTExLjZMMzIuNSwzNy44QTgsOCwwLDAsMCwyNC44LDMySDhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTk2LDIxNmExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSw5NiwyMTZabTg4LTE2YTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDE4NCwyMDBaTTIyOC4xLDY3LjJhOC4xLDguMSwwLDAsMC02LjQtMy4ySDQ4LjNMNDAuMiwzNS42QTE2LjEsMTYuMSwwLDAsMCwyNC44LDI0SDhBOCw4LDAsMCwwLDgsNDBIMjQuOGw5LjgsMzQuMXYuMkw2MSwxNjYuNkEyNC4xLDI0LjEsMCwwLDAsODQuMSwxODRoOTUuOEEyNC4xLDI0LjEsMCwwLDAsMjAzLDE2Ni42bDI2LjQtOTIuNEE4LDgsMCwwLDAsMjI4LjEsNjcuMlpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI4MFwiLFxuICAgIGN5OiBcIjIxNlwiLFxuICAgIHI6IFwiMTRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMTg0XCIsXG4gICAgY3k6IFwiMjE2XCIsXG4gICAgcjogXCIxNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDIuMyw3MkgyMjEuN2wtMjYuNCw5Mi40QTE1LjksMTUuOSwwLDAsMSwxNzkuOSwxNzZIODQuMWExNS45LDE1LjksMCwwLDEtMTUuNC0xMS42TDMyLjUsMzcuOEE4LDgsMCwwLDAsMjQuOCwzMkg4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiODBcIixcbiAgICBjeTogXCIyMTZcIixcbiAgICByOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjE4NFwiLFxuICAgIGN5OiBcIjIxNlwiLFxuICAgIHI6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQyLjMsNzJIMjIxLjdsLTI2LjQsOTIuNEExNS45LDE1LjksMCwwLDEsMTc5LjksMTc2SDg0LjFhMTUuOSwxNS45LDAsMCwxLTE1LjQtMTEuNkwzMi41LDM3LjhBOCw4LDAsMCwwLDI0LjgsMzJIOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJyZWd1bGFyXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiODBcIixcbiAgICBjeTogXCIyMTZcIixcbiAgICByOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjE4NFwiLFxuICAgIGN5OiBcIjIxNlwiLFxuICAgIHI6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQyLjMsNzJIMjIxLjdsLTI2LjQsOTIuNEExNS45LDE1LjksMCwwLDEsMTc5LjksMTc2SDg0LjFhMTUuOSwxNS45LDAsMCwxLTE1LjQtMTEuNkwzMi41LDM3LjhBOCw4LDAsMCwwLDI0LjgsMzJIOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSk7XG59KTtcblxudmFyIHJlbmRlclBhdGggPSBmdW5jdGlvbiByZW5kZXJQYXRoKHdlaWdodCwgY29sb3IpIHtcbiAgcmV0dXJuIHJlbmRlclBhdGhGb3JXZWlnaHQod2VpZ2h0LCBjb2xvciwgcGF0aHNCeVdlaWdodCk7XG59O1xuXG52YXIgU2hvcHBpbmdDYXJ0U2ltcGxlID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgcmVuZGVyUGF0aDogcmVuZGVyUGF0aFxuICB9KSk7XG59KTtcblNob3BwaW5nQ2FydFNpbXBsZS5kaXNwbGF5TmFtZSA9IFwiU2hvcHBpbmdDYXJ0U2ltcGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nQ2FydFNpbXBsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNob3BwaW5nQ2FydFNpbXBsZS5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiZGV0ZWN0VHJhbnNsYXRlIiwiaXNBY2NvdW50QWxsIiwiYmFzZVNlcnZpY2VJdGVtcyIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiQWNjb3VudFNlbGVjdG9yIiwiU2VydmljZVNlbGVjdG9yIiwiVG9rZW5TZWxlY3RvciIsIkJVWV9TRVJWSUNFX0NPTlRBQ1RTIiwiTElTVF9QUkVERUZJTkVEX0JVWV9UT0tFTiIsIk1BUF9QUkVERUZJTkVEX0JVWV9UT0tFTiIsInVzZUFzc2V0Q2hlY2tlciIsInVzZURlZmF1bHROYXZpZ2F0ZSIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVRyYW5zbGF0aW9uIiwiY3JlYXRlQmFueGFPcmRlciIsImNyZWF0ZUNvaW5iYXNlT3JkZXIiLCJjcmVhdGVUcmFuc2FrT3JkZXIiLCJmaW5kQWNjb3VudEJ5QWRkcmVzcyIsIm5vb3AiLCJvcGVuSW5OZXdUYWIiLCJnZXRBY2NvdW50VHlwZSIsInJlZm9ybWF0QWRkcmVzcyIsImZpbmROZXR3b3JrSnNvbkJ5R2VuZXNpc0hhc2giLCJCdXR0b24iLCJGb3JtIiwiSWNvbiIsIk1vZGFsQ29udGV4dCIsIlN3TW9kYWwiLCJTd1N1YkhlYWRlciIsIkNOIiwiQ2hlY2tDaXJjbGUiLCJTaG9wcGluZ0NhcnRTaW1wbGUiLCJYQ2lyY2xlIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJUcmFucyIsInVzZVNlbGVjdG9yIiwidXNlTG9jYXRpb24iLCJzdHlsZWQiLCJpc0V0aGVyZXVtQWRkcmVzcyIsImdldFNlcnZpY2VJdGVtcyIsInRva2VuU2x1ZyIsImJ1eUluZm8iLCJyZXN1bHQiLCJzZXJ2aWNlSXRlbSIsInRlbXAiLCJkaXNhYmxlZCIsInNlcnZpY2VzIiwiaW5jbHVkZXMiLCJrZXkiLCJwdXNoIiwiTGlua1VybCIsInByb3BzIiwidXJsIiwiY29udGVudCIsIm1vZGFsSWQiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJsb2NhdGlvblN0YXRlIiwic3RhdGUiLCJjdXJyZW50U3ltYm9sIiwic3ltYm9sIiwiZml4ZWRUb2tlbktleSIsImZpbHRlciIsInZhbHVlIiwic2x1ZyIsInVuZGVmaW5lZCIsIm5vdGlmeSIsImFjdGl2ZU1vZGFsIiwiaW5hY3RpdmVNb2RhbCIsImFjY291bnRzIiwiY3VycmVudEFjY291bnQiLCJpc0FsbEFjY291bnQiLCJhY2NvdW50U3RhdGUiLCJjaGFpbkluZm9NYXAiLCJjaGFpblN0b3JlIiwid2FsbGV0UmVmZXJlbmNlIiwic2V0dGluZ3MiLCJjaGVja0Fzc2V0IiwiY3VycmVudEFkZHJlc3MiLCJhZGRyZXNzIiwidCIsImdvQmFjayIsImZvcm0iLCJ1c2VGb3JtIiwiZm9ybURlZmF1bHQiLCJ0b2tlbktleSIsInNlcnZpY2UiLCJwcm9taXNlUmVmIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGlzY2xhaW1lckFncmVlIiwic2V0RGlzY2xhaW1lckFncmVlIiwidHJhbnNhayIsImJhbnhhIiwib25yYW1wZXIiLCJtb29ucGF5IiwiY29pbmJhc2UiLCJzZWxlY3RlZEFkZHJlc3MiLCJ1c2VXYXRjaCIsInNlbGVjdGVkVG9rZW5LZXkiLCJzZWxlY3RlZFNlcnZpY2UiLCJjb250YWN0VXJsIiwibmFtZSIsInNlcnZpY2VOYW1lIiwicG9saWN5VXJsIiwidGVybVVybCIsIm9uQ29uZmlybSIsIlByb21pc2UiLCJjdXJyZW50IiwiZSIsIm9uQXBwcm92ZSIsIm9uUmVqZWN0IiwiRXJyb3IiLCJhY2NvdW50VHlwZSIsImxlZGdlck5ldHdvcmsiLCJhY2NvdW50Iiwib3JpZ2luR2VuZXNpc0hhc2giLCJ0b2tlbkl0ZW1zIiwibGlzdCIsImZpbHRlcmVkIiwiZm9yRWFjaCIsImluZm8iLCJuZXR3b3JrIiwib3JpZ2luQ2hhaW4iLCJzdXBwb3J0Iiwic2VydmljZUl0ZW1zIiwiaXNTdXBwb3J0QnV5VG9rZW5zIiwiZmluZCIsIml0ZW0iLCJvbkNsaWNrTmV4dCIsImdldEZpZWxkc1ZhbHVlIiwidXJsUHJvbWlzZSIsInNlcnZpY2VJbmZvIiwibmV0d29ya1ByZWZpeCIsInN1YnN0cmF0ZUluZm8iLCJhZGRyZXNzUHJlZml4Iiwid2FsbGV0QWRkcmVzcyIsInNlcnZpY2VOZXR3b3JrIiwiZGlzY2xhaW1lclByb21pc2UiLCJ0aGVuIiwib2xkU3RhdGUiLCJjYXRjaCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJmaW5hbGx5IiwiZmlsdGVyQWNjb3VudFR5cGUiLCJhY2NvdW50c0ZpbHRlciIsImxlbmd0aCIsInNldEZpZWxkc1ZhbHVlIiwiaXNTZWxlY3RlZFRva2VuSW5MaXN0Iiwic29tZSIsImkiLCJzZXRUaW1lb3V0Iiwic2V0RmllbGRWYWx1ZSIsImhpZGRlbiIsIm1haW5VcmwiLCJCdXlUb2tlbnMiLCJ0aGVtZSIsInRva2VuIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsImNvbG9yVGV4dFNlY29uZGFyeSIsImZsZXgiLCJvdmVyZmxvdyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZyIsInBhZGRpbmdSaWdodCIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MRyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yU3VjY2VzcyIsImluc2V0IiwiYm9yZGVyUmFkaXVzIiwib3BhY2l0eSIsImZvbnRTaXplIiwicGFkZGluZ1RvcCIsInBhZGRpbmdYWFMiLCJwYWRkaW5nQm90dG9tIiwiY29sb3JUZXh0TGlnaHQ1IiwidGV4dEFsaWduIiwicGFkZGluZ01EIiwicGFkZGluZ0xHIiwiZ2FwIiwicGFkZGluZ1hTIiwibWluV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9