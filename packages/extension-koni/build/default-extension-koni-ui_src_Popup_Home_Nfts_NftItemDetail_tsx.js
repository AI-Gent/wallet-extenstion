"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_Nfts_NftItemDetail_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/Nfts/NftItemDetail.tsx":
/*!******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Nfts/NftItemDetail.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_transaction_service_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/extension-base/services/transaction-service/utils */ "../extension-base/src/services/transaction-service/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useFetchChainInfo */ "../extension-koni-ui/src/hooks/screen/common/useFetchChainInfo.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useGetAccountInfoByAddress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useGetAccountInfoByAddress */ "../extension-koni-ui/src/hooks/screen/common/useGetAccountInfoByAddress.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils_account_reformatAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils/account/reformatAddress */ "../extension-koni-ui/src/utils/account/reformatAddress.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/logo/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/field/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/button/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/background-icon/index.js");
/* harmony import */ var _subwallet_react_ui_es_sw_avatar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @subwallet/react-ui/es/sw-avatar */ "../../node_modules/@subwallet/react-ui/es/sw-avatar/index.js");
/* harmony import */ var _subwallet_react_ui_lib_theme_themes_default_colorAlgorithm__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @subwallet/react-ui/lib/theme/themes/default/colorAlgorithm */ "../../node_modules/@subwallet/react-ui/lib/theme/themes/default/colorAlgorithm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/CaretLeft.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Info.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PaperPlaneTilt.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! usehooks-ts */ "../../node_modules/usehooks-ts/dist/esm/index.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/ethereum/isAddress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

























const NFT_DESCRIPTION_MAX_LENGTH = 70;
const modalCloseButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
  customSize: '24px',
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_16__["default"],
  type: "phosphor",
  weight: 'light'
});
function Component({
  className = ''
}) {
  var _originChainInfo$subs2;
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useLocation)();
  const {
    collectionInfo,
    nftItem
  } = location.state;
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const notify = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useNavigate)();
  const {
    goBack
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_18__.useTheme)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__.ModalContext);
  const accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(root => root.accountState.accounts);
  const originChainInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useFetchChainInfo__WEBPACK_IMPORTED_MODULE_7__["default"])(nftItem.chain);
  const ownerAccountInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useGetAccountInfoByAddress__WEBPACK_IMPORTED_MODULE_8__["default"])(nftItem.owner || '');
  const accountExternalUrl = (0,_subwallet_extension_base_services_transaction_service_utils__WEBPACK_IMPORTED_MODULE_20__.getExplorerLink)(originChainInfo, nftItem.owner, 'account');
  const [, setStorage] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_13__.useLocalStorage)(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.NFT_TRANSACTION, _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_NFT_PARAMS);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useNavigateOnChangeAccount)('/home/nfts/collections');
  const onClickSend = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    if (nftItem && nftItem.owner) {
      const ownerAddress = (0,_subwallet_extension_koni_ui_utils_account_reformatAddress__WEBPACK_IMPORTED_MODULE_9__["default"])(nftItem.owner, 42);
      const owner = accounts.find(a => a.address === ownerAddress);
      if (owner !== null && owner !== void 0 && owner.isReadOnly) {
        notify({
          message: t('The NFT owner is a watch-only account, you cannot send the NFT with it'),
          type: 'info',
          duration: 3
        });
        return;
      }
    }
    setStorage({
      asset: '',
      collectionId: nftItem.collectionId,
      from: nftItem.owner,
      itemId: nftItem.id,
      to: '',
      chain: nftItem.chain
    });
    navigate('/transaction/send-nft');
  }, [accounts, navigate, nftItem, notify, setStorage, t]);
  const subHeaderRightButton = [{
    children: t('Send'),
    onClick: onClickSend
  }];
  const ownerPrefix = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    if (nftItem.owner) {
      var _originChainInfo$subs;
      const theme = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_21__.isEthereumAddress)(nftItem.owner) ? 'ethereum' : 'polkadot';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui_es_sw_avatar__WEBPACK_IMPORTED_MODULE_22__["default"], {
        identPrefix: (_originChainInfo$subs = originChainInfo.substrateInfo) === null || _originChainInfo$subs === void 0 ? void 0 : _originChainInfo$subs.addressPrefix,
        size: token.fontSizeXL,
        theme: theme,
        value: nftItem.owner
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {});
  }, [nftItem.owner, (_originChainInfo$subs2 = originChainInfo.substrateInfo) === null || _originChainInfo$subs2 === void 0 ? void 0 : _originChainInfo$subs2.addressPrefix, token.fontSizeXL]);
  const originChainLogo = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_23__["default"], {
      network: originChainInfo.slug,
      shape: 'circle',
      size: token.fontSizeXL
    });
  }, [originChainInfo.slug, token.fontSizeXL]);
  const ownerInfo = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
        children: ownerAccountInfo === null || ownerAccountInfo === void 0 ? void 0 : ownerAccountInfo.name
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
        className: 'nft_item_detail__owner_address',
        children: ["(", `${nftItem === null || nftItem === void 0 ? void 0 : nftItem.owner.slice(0, 4)}...${nftItem === null || nftItem === void 0 ? void 0 : nftItem.owner.slice(-4)}`, ")"]
      })]
    });
  }, [nftItem === null || nftItem === void 0 ? void 0 : nftItem.owner, ownerAccountInfo === null || ownerAccountInfo === void 0 ? void 0 : ownerAccountInfo.name]);
  const handleClickExternalAccountInfo = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    try {
      // eslint-disable-next-line no-void
      void chrome.tabs.create({
        url: accountExternalUrl,
        active: true
      }).then(() => console.log('redirecting'));
    } catch (e) {
      console.log('error redirecting to a new tab');
    }
  }, [accountExternalUrl]);
  const handleClickExternalCollectionInfo = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    try {
      // eslint-disable-next-line no-void
      void chrome.tabs.create({
        url: nftItem.externalUrl,
        active: true
      }).then(() => console.log('redirecting'));
    } catch (e) {
      console.log('error redirecting to a new tab');
    }
  }, [nftItem.externalUrl]);
  const externalInfoIcon = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(type => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: 'nft_item_detail__external_icon',
      onClick: type === 'account' ? handleClickExternalAccountInfo : handleClickExternalCollectionInfo,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
        customSize: '20px',
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
        type: "phosphor",
        weight: 'light'
      })
    });
  }, [handleClickExternalAccountInfo, handleClickExternalCollectionInfo]);
  const handleShowNftDescription = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    if (nftItem !== null && nftItem !== void 0 && nftItem.description && nftItem.description.length > NFT_DESCRIPTION_MAX_LENGTH) {
      activeModal('nftItemDescription');
    }
  }, [activeModal, nftItem.description]);
  const onCloseNftDescriptionModal = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    inactiveModal('nftItemDescription');
  }, [inactiveModal]);
  const onImageClick = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(() => {
    if (nftItem.externalUrl) {
      chrome.tabs.create({
        url: nftItem.externalUrl,
        active: true
      }).then(() => console.log('redirecting')).catch(console.error);
    }
  }, [nftItem.externalUrl]);
  const show3DModel = _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.SHOW_3D_MODELS_CHAIN.includes(nftItem.chain);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `${className}`,
    resolve: dataContext.awaitStores(['nft', 'accountState', 'chainStore']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      onBack: goBack,
      showBackButton: true,
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: false,
      subHeaderIcons: subHeaderRightButton,
      subHeaderPaddingVertical: true,
      title: nftItem.name || nftItem.id,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: 'nft_item_detail__container',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: 'nft_item_detail__nft_image',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_25__["default"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
              clickable: nftItem.externalUrl
            }),
            height: 358,
            modelViewerProps: show3DModel ? {
              ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MODEL_VIEWER_PROPS,
              ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.CAMERA_CONTROLS_MODEL_VIEWER_PROPS
            } : undefined,
            onClick: onImageClick,
            src: nftItem.image,
            width: show3DModel ? 358 : undefined
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: 'nft_item_detail__info_container',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: 'nft_item_detail__section_title',
            children: t('NFT details')
          }), nftItem.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: 'nft_item_detail__description_container',
            onClick: handleShowNftDescription,
            style: {
              cursor: nftItem.description.length > NFT_DESCRIPTION_MAX_LENGTH ? 'pointer' : 'auto'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: 'nft_item_detail__description_content',
              children: nftItem.description.length > NFT_DESCRIPTION_MAX_LENGTH ? `${nftItem.description.slice(0, NFT_DESCRIPTION_MAX_LENGTH)}...` : nftItem.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: 'nft_item_detail__description_title',
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
                iconColor: token.colorIcon,
                phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
                type: "phosphor",
                weight: 'fill'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                children: t('Description')
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
            content: collectionInfo.collectionName || collectionInfo.collectionId,
            label: t('NFT collection name'),
            suffix: nftItem.externalUrl && externalInfoIcon('collection')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
            content: ownerInfo(),
            label: t('Owned by'),
            prefix: nftItem.owner && ownerPrefix(),
            suffix: externalInfoIcon('account')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
            content: originChainInfo.name,
            label: t('Network'),
            prefix: originChainLogo()
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: 'nft_item_detail__prop_section',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: 'nft_item_detail__section_title',
            children: t('Properties')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: 'nft_item_detail__atts_container',
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
              className: 'nft_item_detail__id_field',
              content: nftItem.id,
              label: 'NFT ID',
              width: 'fit-content'
            }, 'NFT ID'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
              className: 'nft_item_detail__id_field',
              content: nftItem.collectionId,
              label: 'Collection ID',
              width: 'fit-content'
            }, 'Collection ID'), nftItem.properties && Object.entries(nftItem.properties).map(([attName, attValueObj], index) => {
              const {
                value: attValue
              } = attValueObj;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_26__["default"], {
                content: attValue.toString(),
                label: attName,
                width: 'fit-content'
              }, index);
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_27__["default"], {
          block: true,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_28__["default"],
            type: "phosphor",
            weight: 'fill'
          }),
          onClick: onClickSend,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
            className: 'nft_item_detail__send_text',
            children: t('Send')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_29__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('nft_item_detail__description_modal'),
        closeIcon: modalCloseButton,
        id: 'nftItemDescription',
        onCancel: onCloseNftDescriptionModal,
        title: t('Description'),
        wrapClassName: className,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: 'nft_item_detail__description_modal_content',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: 'nft_item_detail__description_modal_left_icon',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_30__["default"], {
              backgroundColor: (0,_subwallet_react_ui_lib_theme_themes_default_colorAlgorithm__WEBPACK_IMPORTED_MODULE_31__.getAlphaColor)(token.colorLink, 0.1),
              iconColor: token.colorLink,
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_24__["default"],
              size: 'lg',
              type: "phosphor",
              weight: 'fill'
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: 'nft_item_detail_description_modal_container',
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: 'nft_item_detail__description_modal_title',
              children: nftItem.name || nftItem.id
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: 'nft_item_detail__description_modal_detail',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("pre", {
                children: nftItem.description
              })
            })]
          })]
        })
      })]
    })
  });
}
const NftItemDetail = (0,styled_components__WEBPACK_IMPORTED_MODULE_18__["default"])(Component).withConfig({
  displayName: "NftItemDetail",
  componentId: "sc-1ffl3tk-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.nft_item_detail__container': {
      marginTop: token.marginSM,
      paddingRight: token.margin,
      paddingLeft: token.margin,
      paddingBottom: token.margin
    },
    '.clickable': {
      cursor: 'pointer'
    },
    '.nft_item_detail__info_container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.marginXS,
      marginTop: token.margin,
      marginBottom: token.margin
    },
    '.nft_item_detail__atts_container': {
      marginTop: token.margin,
      display: 'flex',
      flexWrap: 'wrap',
      gap: token.marginXS,
      overflow: 'hidden'
    },
    '.ant-field-container': {
      overflow: 'hidden'
    },
    '.nft_item_detail__section_title': {
      fontSize: token.fontSizeLG,
      color: token.colorTextHeading,
      lineHeight: token.lineHeightLG
    },
    '.nft_item_detail__send_text': {
      fontSize: token.fontSizeLG,
      lineHeight: token.lineHeightLG,
      color: token.colorTextLight1
    },
    '.nft_item_detail__prop_section': {
      marginBottom: token.margin
    },
    '.nft_item_detail__owner_address': {
      color: token.colorTextDescription
    },
    '.nft_item_detail__external_icon': {
      cursor: 'pointer'
    },
    '.nft_item_detail__description_container': {
      padding: token.paddingSM,
      backgroundColor: token.colorBgSecondary,
      borderRadius: token.borderRadiusLG
    },
    '.nft_item_detail__description_content': {
      color: token.colorTextDescription,
      fontSize: token.fontSize,
      fontWeight: token.bodyFontWeight,
      lineHeight: token.lineHeight,
      wordBreak: 'break-all'
    },
    '.nft_item_detail__description_title': {
      marginTop: token.margin,
      display: 'flex',
      alignItems: 'center',
      gap: token.marginXXS,
      color: token.colorTextLabel,
      fontSize: token.fontSize,
      fontWeight: token.headingFontWeight,
      lineHeight: token.lineHeight
    },
    '.nft_item_detail__description_modal_content': {
      display: 'flex',
      gap: token.marginXS,
      padding: token.paddingSM,
      backgroundColor: token.colorBgSecondary,
      borderRadius: token.borderRadiusLG
    },
    '.nft_item_detail__description_modal_left_icon': {
      display: 'flex',
      alignItems: 'center'
    },
    '.nft_item_detail__description_modal_title': {
      textAlign: 'left',
      fontSize: token.fontSizeLG,
      lineHeight: token.lineHeightLG,
      fontWeight: token.bodyFontWeight,
      color: token.colorTextLight1,
      wordBreak: 'break-all'
    },
    '.nft_item_detail__description_modal_detail': {
      textAlign: 'justify',
      fontWeight: token.bodyFontWeight,
      fontSize: token.fontSizeHeading6,
      color: token.colorTextTertiary,
      wordBreak: 'break-word'
    },
    '.nft_item_detail__nft_image': {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      '.ant-image-img': {
        maxWidth: '100%',
        objectFit: 'cover'
      }
    },
    '.nft_item_detail__id_field .ant-field-wrapper .ant-field-content-wrapper .ant-field-content': {
      overflow: 'scroll',
      textOverflow: 'initial'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NftItemDetail);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9OZnRzX05mdEl0ZW1EZXRhaWxfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFK0Y7QUFDakI7QUFDcUc7QUFDbkc7QUFDQTtBQUNRO0FBQ0Y7QUFDUTtBQUNHO0FBQ29CO0FBSTVCO0FBQ2tDO0FBQ25FO0FBQ29DO0FBQ2hFO0FBQ3FDO0FBQ1Y7QUFDYjtBQUNrQjtBQUNQO0FBQ1A7QUFFWTtBQUFBO0FBQUE7QUFJMUQsTUFBTXdDLDBCQUEwQixHQUFHLEVBQUU7QUFFckMsTUFBTUMsZ0JBQWdCLGdCQUFHLHdEQUFDLDREQUFJO0VBQzVCLFVBQVUsRUFBRSxNQUFPO0VBQ25CLFlBQVksRUFBRWQsdURBQVU7RUFDeEIsSUFBSSxFQUFDLFVBQVU7RUFDZixNQUFNLEVBQUU7QUFBUSxFQUNoQjtBQUVGLFNBQVNlLFNBQVMsQ0FBRTtFQUFFQyxTQUFTLEdBQUc7QUFBVSxDQUFDLEVBQTZCO0VBQUE7RUFDeEUsTUFBTUMsUUFBUSxHQUFHViw4REFBVyxFQUFFO0VBQzlCLE1BQU07SUFBRVcsY0FBYztJQUFFQztFQUFRLENBQUMsR0FBR0YsUUFBUSxDQUFDRyxLQUF1QjtFQUVwRSxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHckMsb0dBQWMsRUFBRTtFQUM5QixNQUFNc0MsTUFBTSxHQUFHdkMscUdBQWUsRUFBRTtFQUVoQyxNQUFNd0MsUUFBUSxHQUFHZiw4REFBVyxFQUFFO0VBQzlCLE1BQU07SUFBRWdCO0VBQU8sQ0FBQyxHQUFHdkMsd0dBQWtCLEVBQUU7RUFDdkMsTUFBTTtJQUFFd0M7RUFBTSxDQUFDLEdBQUdmLDREQUFRLEVBQVc7RUFFckMsTUFBTWdCLFdBQVcsR0FBR3JCLGtEQUFVLENBQUN4QiwwRkFBVyxDQUFDO0VBQzNDLE1BQU07SUFBRThDLFdBQVc7SUFBRUM7RUFBYyxDQUFDLEdB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TUFBTTtNQUNqQnJCLFFBQVEsRUFBRS9GLEtBQUssQ0FBQ2dHLFVBQVU7TUFDMUJHLFVBQVUsRUFBRW5HLEtBQUssQ0FBQ29HLFlBQVk7TUFDOUJTLFVBQVUsRUFBRTdHLEtBQUssQ0FBQzhHLGNBQWM7TUFDaENiLEtBQUssRUFBRWpHLEtBQUssQ0FBQ3FHLGVBQWU7TUFDNUJVLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFFRCw0Q0FBNEMsRUFBRTtNQUM1Q0ssU0FBUyxFQUFFLFNBQVM7TUFDcEJQLFVBQVUsRUFBRTdHLEtBQUssQ0FBQzhHLGNBQWM7TUFDaENmLFFBQVEsRUFBRS9GLEtBQUssQ0FBQ3FILGdCQUFnQjtNQUNoQ3BCLEtBQUssRUFBRWpHLEtBQUssQ0FBQ3NILGlCQUFpQjtNQUM5QlAsU0FBUyxFQUFFO0lBQ2IsQ0FBQztJQUVELDZCQUE2QixFQUFFO01BQzdCdkIsT0FBTyxFQUFFLE1BQU07TUFDZitCLGNBQWMsRUFBRSxRQUFRO01BQ3hCQyxLQUFLLEVBQUUsTUFBTTtNQUViLGdCQUFnQixFQUFFO1FBQ2hCQyxRQUFRLEVBQUUsTUFBTTtRQUNoQkMsU0FBUyxFQUFFO01BQ2I7SUFDRixDQUFDO0lBRUQsNkZBQTZGLEVBQUU7TUFDN0Y1QixRQUFRLEVBQUUsUUFBUTtNQUNsQjZCLFlBQVksRUFBRTtJQUNoQjtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpRUFBZTFDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9Ib21lL05mdHMvTmZ0SXRlbURldGFpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IGdldEV4cGxvcmVyTGluayB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2Uvc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS91dGlscyc7XG5pbXBvcnQgeyBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IENBTUVSQV9DT05UUk9MU19NT0RFTF9WSUVXRVJfUFJPUFMsIERFRkFVTFRfTU9ERUxfVklFV0VSX1BST1BTLCBERUZBVUxUX05GVF9QQVJBTVMsIE5GVF9UUkFOU0FDVElPTiwgU0hPV18zRF9NT0RFTFNfQ0hBSU4gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29udGV4dHMvRGF0YUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGVPbkNoYW5nZUFjY291bnQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzJztcbmltcG9ydCB1c2VOb3RpZmljYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlTm90aWZpY2F0aW9uJztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL2NvbW1vbi91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgdXNlRGVmYXVsdE5hdmlnYXRlIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZURlZmF1bHROYXZpZ2F0ZSc7XG5pbXBvcnQgdXNlR2V0Q2hhaW5JbmZvIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvc2NyZWVuL2NvbW1vbi91c2VGZXRjaENoYWluSW5mbyc7XG5pbXBvcnQgdXNlR2V0QWNjb3VudEluZm9CeUFkZHJlc3MgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9zY3JlZW4vY29tbW9uL3VzZUdldEFjY291bnRJbmZvQnlBZGRyZXNzJztcbmltcG9ydCB7IElOZnRJdGVtRGV0YWlsIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9Qb3B1cC9Ib21lL05mdHMvdXRpbHMnO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9zdG9yZXMnO1xuaW1wb3J0IHsgU2VuZE5mdFBhcmFtcywgVGhlbWUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCByZWZvcm1hdEFkZHJlc3MgZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscy9hY2NvdW50L3JlZm9ybWF0QWRkcmVzcyc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kSWNvbiwgQnV0dG9uLCBCdXR0b25Qcm9wcywgRmllbGQsIEljb24sIEltYWdlLCBMb2dvLCBNb2RhbENvbnRleHQsIFN3TW9kYWwgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBTd0F2YXRhciBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpL2VzL3N3LWF2YXRhcic7XG5pbXBvcnQgeyBnZXRBbHBoYUNvbG9yIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aS9saWIvdGhlbWUvdGhlbWVzL2RlZmF1bHQvY29sb3JBbGdvcml0aG0nO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ2FyZXRMZWZ0LCBJbmZvLCBQYXBlclBsYW5lVGlsdCB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAndXNlaG9va3MtdHMnO1xuXG5pbXBvcnQgeyBpc0V0aGVyZXVtQWRkcmVzcyB9IGZyb20gJ0Bwb2xrYWRvdC91dGlsLWNyeXB0byc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzXG5cbmNvbnN0IE5GVF9ERVNDUklQVElPTl9NQVhfTEVOR1RIID0gNzA7XG5cbmNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSA8SWNvblxuICBjdXN0b21TaXplPXsnMjRweCd9XG4gIHBob3NwaG9ySWNvbj17Q2FyZXRMZWZ0fVxuICB0eXBlPSdwaG9zcGhvcidcbiAgd2VpZ2h0PXsnbGlnaHQnfVxuLz47XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHsgY29sbGVjdGlvbkluZm8sIG5mdEl0ZW0gfSA9IGxvY2F0aW9uLnN0YXRlIGFzIElOZnRJdGVtRGV0YWlsO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3Qgbm90aWZ5ID0gdXNlTm90aWZpY2F0aW9uKCk7XG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB7IGdvQmFjayB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG5cbiAgY29uc3QgZGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcbiAgY29uc3QgeyBhY3RpdmVNb2RhbCwgaW5hY3RpdmVNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuXG4gIGNvbnN0IGFjY291bnRzID0gdXNlU2VsZWN0b3IoKHJvb3Q6IFJvb3RTdGF0ZSkgPT4gcm9vdC5hY2NvdW50U3RhdGUuYWNjb3VudHMpO1xuXG4gIGNvbnN0IG9yaWdpbkNoYWluSW5mbyA9IHVzZUdldENoYWluSW5mbyhuZnRJdGVtLmNoYWluKTtcbiAgY29uc3Qgb3duZXJBY2NvdW50SW5mbyA9IHVzZUdldEFjY291bnRJbmZvQnlBZGRyZXNzKG5mdEl0ZW0ub3duZXIgfHwgJycpO1xuICBjb25zdCBhY2NvdW50RXh0ZXJuYWxVcmwgPSBnZXRFeHBsb3Jlckxpbmsob3JpZ2luQ2hhaW5JbmZvLCBuZnRJdGVtLm93bmVyLCAnYWNjb3VudCcpO1xuICBjb25zdCBbLCBzZXRTdG9yYWdlXSA9IHVzZUxvY2FsU3RvcmFnZTxTZW5kTmZ0UGFyYW1zPihORlRfVFJBTlNBQ1RJT04sIERFRkFVTFRfTkZUX1BBUkFNUyk7XG5cbiAgdXNlTmF2aWdhdGVPbkNoYW5nZUFjY291bnQoJy9ob21lL25mdHMvY29sbGVjdGlvbnMnKTtcblxuICBjb25zdCBvbkNsaWNrU2VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobmZ0SXRlbSAmJiBuZnRJdGVtLm93bmVyKSB7XG4gICAgICBjb25zdCBvd25lckFkZHJlc3MgPSByZWZvcm1hdEFkZHJlc3MobmZ0SXRlbS5vd25lciwgNDIpO1xuICAgICAgY29uc3Qgb3duZXIgPSBhY2NvdW50cy5maW5kKChhKSA9PiBhLmFkZHJlc3MgPT09IG93bmVyQWRkcmVzcyk7XG5cbiAgICAgIGlmIChvd25lcj8uaXNSZWFkT25seSkge1xuICAgICAgICBub3RpZnkoe1xuICAgICAgICAgIG1lc3NhZ2U6IHQoJ1RoZSBORlQgb3duZXIgaXMgYSB3YXRjaC1vbmx5IGFjY291bnQsIHlvdSBjYW5ub3Qgc2VuZCB0aGUgTkZUIHdpdGggaXQnKSxcbiAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgZHVyYXRpb246IDNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0b3JhZ2Uoe1xuICAgICAgYXNzZXQ6ICcnLFxuICAgICAgY29sbGVjdGlvbklkOiBuZnRJdGVtLmNvbGxlY3Rpb25JZCxcbiAgICAgIGZyb206IG5mdEl0ZW0ub3duZXIsXG4gICAgICBpdGVtSWQ6IG5mdEl0ZW0uaWQsXG4gICAgICB0bzogJycsXG4gICAgICBjaGFpbjogbmZ0SXRlbS5jaGFpblxuICAgIH0pO1xuICAgIG5hdmlnYXRlKCcvdHJhbnNhY3Rpb24vc2VuZC1uZnQnKTtcbiAgfSwgW2FjY291bnRzLCBuYXZpZ2F0ZSwgbmZ0SXRlbSwgbm90aWZ5LCBzZXRTdG9yYWdlLCB0XSk7XG5cbiAgY29uc3Qgc3ViSGVhZGVyUmlnaHRCdXR0b246IEJ1dHRvblByb3BzW10gPSBbXG4gICAge1xuICAgICAgY2hpbGRyZW46IHQ8c3RyaW5nPignU2VuZCcpLFxuICAgICAgb25DbGljazogb25DbGlja1NlbmRcbiAgICB9XG4gIF07XG5cbiAgY29uc3Qgb3duZXJQcmVmaXggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG5mdEl0ZW0ub3duZXIpIHtcbiAgICAgIGNvbnN0IHRoZW1lID0gaXNFdGhlcmV1bUFkZHJlc3MobmZ0SXRlbS5vd25lcikgPyAnZXRoZXJldW0nIDogJ3BvbGthZG90JztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN3QXZhdGFyXG4gICAgICAgICAgaWRlbnRQcmVmaXg9e29yaWdpbkNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5hZGRyZXNzUHJlZml4fVxuICAgICAgICAgIHNpemU9e3Rva2VuLmZvbnRTaXplWEx9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIHZhbHVlPXtuZnRJdGVtLm93bmVyfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfSwgW25mdEl0ZW0ub3duZXIsIG9yaWdpbkNoYWluSW5mby5zdWJzdHJhdGVJbmZvPy5hZGRyZXNzUHJlZml4LCB0b2tlbi5mb250U2l6ZVhMXSk7XG5cbiAgY29uc3Qgb3JpZ2luQ2hhaW5Mb2dvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TG9nb1xuICAgICAgICBuZXR3b3JrPXtvcmlnaW5DaGFpbkluZm8uc2x1Z31cbiAgICAgICAgc2hhcGU9eydjaXJjbGUnfVxuICAgICAgICBzaXplPXt0b2tlbi5mb250U2l6ZVhMfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbb3JpZ2luQ2hhaW5JbmZvLnNsdWcsIHRva2VuLmZvbnRTaXplWExdKTtcblxuICBjb25zdCBvd25lckluZm8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8c3Bhbj57b3duZXJBY2NvdW50SW5mbz8ubmFtZX08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9fb3duZXJfYWRkcmVzcyd9Pih7YCR7bmZ0SXRlbT8ub3duZXIuc2xpY2UoMCwgNCl9Li4uJHtuZnRJdGVtPy5vd25lci5zbGljZSgtNCl9YH0pPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH0sIFtuZnRJdGVtPy5vd25lciwgb3duZXJBY2NvdW50SW5mbz8ubmFtZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrRXh0ZXJuYWxBY2NvdW50SW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZvaWRcbiAgICAgIHZvaWQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBhY2NvdW50RXh0ZXJuYWxVcmwsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdyZWRpcmVjdGluZycpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgcmVkaXJlY3RpbmcgdG8gYSBuZXcgdGFiJyk7XG4gICAgfVxuICB9LCBbYWNjb3VudEV4dGVybmFsVXJsXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tFeHRlcm5hbENvbGxlY3Rpb25JbmZvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdm9pZFxuICAgICAgdm9pZCBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IG5mdEl0ZW0uZXh0ZXJuYWxVcmwsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdyZWRpcmVjdGluZycpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgcmVkaXJlY3RpbmcgdG8gYSBuZXcgdGFiJyk7XG4gICAgfVxuICB9LCBbbmZ0SXRlbS5leHRlcm5hbFVybF0pO1xuXG4gIGNvbnN0IGV4dGVybmFsSW5mb0ljb24gPSB1c2VDYWxsYmFjaygodHlwZTogJ2FjY291bnQnIHwgJ2NvbGxlY3Rpb24nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsnbmZ0X2l0ZW1fZGV0YWlsX19leHRlcm5hbF9pY29uJ31cbiAgICAgICAgb25DbGljaz17dHlwZSA9PT0gJ2FjY291bnQnID8gaGFuZGxlQ2xpY2tFeHRlcm5hbEFjY291bnRJbmZvIDogaGFuZGxlQ2xpY2tFeHRlcm5hbENvbGxlY3Rpb25JbmZvfVxuICAgICAgPlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGN1c3RvbVNpemU9eycyMHB4J31cbiAgICAgICAgICBwaG9zcGhvckljb249e0luZm99XG4gICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgd2VpZ2h0PXsnbGlnaHQnfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSwgW2hhbmRsZUNsaWNrRXh0ZXJuYWxBY2NvdW50SW5mbywgaGFuZGxlQ2xpY2tFeHRlcm5hbENvbGxlY3Rpb25JbmZvXSk7XG5cbiAgY29uc3QgaGFuZGxlU2hvd05mdERlc2NyaXB0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChuZnRJdGVtPy5kZXNjcmlwdGlvbiAmJiBuZnRJdGVtLmRlc2NyaXB0aW9uLmxlbmd0aCA+IE5GVF9ERVNDUklQVElPTl9NQVhfTEVOR1RIKSB7XG4gICAgICBhY3RpdmVNb2RhbCgnbmZ0SXRlbURlc2NyaXB0aW9uJyk7XG4gICAgfVxuICB9LCBbYWN0aXZlTW9kYWwsIG5mdEl0ZW0uZGVzY3JpcHRpb25dKTtcblxuICBjb25zdCBvbkNsb3NlTmZ0RGVzY3JpcHRpb25Nb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpbmFjdGl2ZU1vZGFsKCduZnRJdGVtRGVzY3JpcHRpb24nKTtcbiAgfSwgW2luYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBvbkltYWdlQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG5mdEl0ZW0uZXh0ZXJuYWxVcmwpIHtcbiAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogbmZ0SXRlbS5leHRlcm5hbFVybCwgYWN0aXZlOiB0cnVlIH0pXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdyZWRpcmVjdGluZycpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgfVxuICB9LCBbbmZ0SXRlbS5leHRlcm5hbFVybF0pO1xuXG4gIGNvbnN0IHNob3czRE1vZGVsID0gU0hPV18zRF9NT0RFTFNfQ0hBSU4uaW5jbHVkZXMobmZ0SXRlbS5jaGFpbik7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfWB9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ25mdCcsICdhY2NvdW50U3RhdGUnLCAnY2hhaW5TdG9yZSddKX1cbiAgICA+XG4gICAgICA8TGF5b3V0LkJhc2VcbiAgICAgICAgb25CYWNrPXtnb0JhY2t9XG4gICAgICAgIHNob3dCYWNrQnV0dG9uPXt0cnVlfVxuICAgICAgICBzaG93U3ViSGVhZGVyPXt0cnVlfVxuICAgICAgICBzdWJIZWFkZXJCYWNrZ3JvdW5kPXsndHJhbnNwYXJlbnQnfVxuICAgICAgICBzdWJIZWFkZXJDZW50ZXI9e2ZhbHNlfVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17c3ViSGVhZGVyUmlnaHRCdXR0b259XG4gICAgICAgIHN1YkhlYWRlclBhZGRpbmdWZXJ0aWNhbD17dHJ1ZX1cbiAgICAgICAgdGl0bGU9e25mdEl0ZW0ubmFtZSB8fCBuZnRJdGVtLmlkfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9fY29udGFpbmVyJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduZnRfaXRlbV9kZXRhaWxfX25mdF9pbWFnZSd9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Q04oeyBjbGlja2FibGU6IG5mdEl0ZW0uZXh0ZXJuYWxVcmwgfSl9XG4gICAgICAgICAgICAgIGhlaWdodD17MzU4fVxuICAgICAgICAgICAgICBtb2RlbFZpZXdlclByb3BzPXtzaG93M0RNb2RlbCA/IHsgLi4uREVGQVVMVF9NT0RFTF9WSUVXRVJfUFJPUFMsIC4uLkNBTUVSQV9DT05UUk9MU19NT0RFTF9WSUVXRVJfUFJPUFMgfSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgb25DbGljaz17b25JbWFnZUNsaWNrfVxuICAgICAgICAgICAgICBzcmM9e25mdEl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgIHdpZHRoPXsgc2hvdzNETW9kZWwgPyAzNTggOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduZnRfaXRlbV9kZXRhaWxfX2luZm9fY29udGFpbmVyJ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9fc2VjdGlvbl90aXRsZSd9Pnt0PHN0cmluZz4oJ05GVCBkZXRhaWxzJyl9PC9kaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5mdEl0ZW0uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9fZGVzY3JpcHRpb25fY29udGFpbmVyJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dOZnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogbmZ0SXRlbS5kZXNjcmlwdGlvbi5sZW5ndGggPiBORlRfREVTQ1JJUFRJT05fTUFYX0xFTkdUSCA/ICdwb2ludGVyJyA6ICdhdXRvJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmZ0X2l0ZW1fZGV0YWlsX19kZXNjcmlwdGlvbl9jb250ZW50J30+XG4gICAgICAgICAgICAgICAgICAgIHtuZnRJdGVtLmRlc2NyaXB0aW9uLmxlbmd0aCA+IE5GVF9ERVNDUklQVElPTl9NQVhfTEVOR1RIID8gYCR7bmZ0SXRlbS5kZXNjcmlwdGlvbi5zbGljZSgwLCBORlRfREVTQ1JJUFRJT05fTUFYX0xFTkdUSCl9Li4uYCA6IG5mdEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmZ0X2l0ZW1fZGV0YWlsX19kZXNjcmlwdGlvbl90aXRsZSd9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17dG9rZW4uY29sb3JJY29ufVxuICAgICAgICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwaG9zcGhvcidcbiAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ9eydmaWxsJ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dDxzdHJpbmc+KCdEZXNjcmlwdGlvbicpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2NvbGxlY3Rpb25JbmZvLmNvbGxlY3Rpb25OYW1lIHx8IGNvbGxlY3Rpb25JbmZvLmNvbGxlY3Rpb25JZH1cbiAgICAgICAgICAgICAgbGFiZWw9e3Q8c3RyaW5nPignTkZUIGNvbGxlY3Rpb24gbmFtZScpfVxuICAgICAgICAgICAgICBzdWZmaXg9e25mdEl0ZW0uZXh0ZXJuYWxVcmwgJiYgZXh0ZXJuYWxJbmZvSWNvbignY29sbGVjdGlvbicpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e293bmVySW5mbygpfVxuICAgICAgICAgICAgICBsYWJlbD17dDxzdHJpbmc+KCdPd25lZCBieScpfVxuICAgICAgICAgICAgICBwcmVmaXg9e25mdEl0ZW0ub3duZXIgJiYgb3duZXJQcmVmaXgoKX1cbiAgICAgICAgICAgICAgc3VmZml4PXtleHRlcm5hbEluZm9JY29uKCdhY2NvdW50Jyl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgY29udGVudD17b3JpZ2luQ2hhaW5JbmZvLm5hbWV9XG4gICAgICAgICAgICAgIGxhYmVsPXt0PHN0cmluZz4oJ05ldHdvcmsnKX1cbiAgICAgICAgICAgICAgcHJlZml4PXtvcmlnaW5DaGFpbkxvZ28oKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9fcHJvcF9zZWN0aW9uJ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9fc2VjdGlvbl90aXRsZSd9Pnt0PHN0cmluZz4oJ1Byb3BlcnRpZXMnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmZ0X2l0ZW1fZGV0YWlsX19hdHRzX2NvbnRhaW5lcid9PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyduZnRfaXRlbV9kZXRhaWxfX2lkX2ZpZWxkJ31cbiAgICAgICAgICAgICAgICBjb250ZW50PXtuZnRJdGVtLmlkfVxuICAgICAgICAgICAgICAgIGtleT17J05GVCBJRCd9XG4gICAgICAgICAgICAgICAgbGFiZWw9eydORlQgSUQnfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsnZml0LWNvbnRlbnQnfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9faWRfZmllbGQnfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e25mdEl0ZW0uY29sbGVjdGlvbklkfVxuICAgICAgICAgICAgICAgIGtleT17J0NvbGxlY3Rpb24gSUQnfVxuICAgICAgICAgICAgICAgIGxhYmVsPXsnQ29sbGVjdGlvbiBJRCd9XG4gICAgICAgICAgICAgICAgd2lkdGg9eydmaXQtY29udGVudCd9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5mdEl0ZW0ucHJvcGVydGllcyAmJiBPYmplY3QuZW50cmllcyhuZnRJdGVtLnByb3BlcnRpZXMpLm1hcCgoW2F0dE5hbWUsIGF0dFZhbHVlT2JqXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IGF0dFZhbHVlIH0gPSBhdHRWYWx1ZU9iaiBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXthdHRWYWx1ZS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2F0dE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9eydmaXQtY29udGVudCd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgIGljb249ezxJY29uXG4gICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17UGFwZXJQbGFuZVRpbHR9XG4gICAgICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgICAgICB3ZWlnaHQ9eydmaWxsJ31cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja1NlbmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnbmZ0X2l0ZW1fZGV0YWlsX19zZW5kX3RleHQnfT57dCgnU2VuZCcpfTwvc3Bhbj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFN3TW9kYWxcbiAgICAgICAgICBjbGFzc05hbWU9e0NOKCduZnRfaXRlbV9kZXRhaWxfX2Rlc2NyaXB0aW9uX21vZGFsJyl9XG4gICAgICAgICAgY2xvc2VJY29uPXttb2RhbENsb3NlQnV0dG9ufVxuICAgICAgICAgIGlkPXsnbmZ0SXRlbURlc2NyaXB0aW9uJ31cbiAgICAgICAgICBvbkNhbmNlbD17b25DbG9zZU5mdERlc2NyaXB0aW9uTW9kYWx9XG4gICAgICAgICAgdGl0bGU9e3Q8c3RyaW5nPignRGVzY3JpcHRpb24nKX1cbiAgICAgICAgICB3cmFwQ2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9fZGVzY3JpcHRpb25fbW9kYWxfY29udGVudCd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduZnRfaXRlbV9kZXRhaWxfX2Rlc2NyaXB0aW9uX21vZGFsX2xlZnRfaWNvbid9PlxuICAgICAgICAgICAgICA8QmFja2dyb3VuZEljb25cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2dldEFscGhhQ29sb3IodG9rZW4uY29sb3JMaW5rLCAwLjEpfVxuICAgICAgICAgICAgICAgIGljb25Db2xvcj17dG9rZW4uY29sb3JMaW5rfVxuICAgICAgICAgICAgICAgIHBob3NwaG9ySWNvbj17SW5mb31cbiAgICAgICAgICAgICAgICBzaXplPXsnbGcnfVxuICAgICAgICAgICAgICAgIHR5cGU9J3Bob3NwaG9yJ1xuICAgICAgICAgICAgICAgIHdlaWdodD17J2ZpbGwnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9kZXNjcmlwdGlvbl9tb2RhbF9jb250YWluZXInfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduZnRfaXRlbV9kZXRhaWxfX2Rlc2NyaXB0aW9uX21vZGFsX3RpdGxlJ30+e25mdEl0ZW0ubmFtZSB8fCBuZnRJdGVtLmlkfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25mdF9pdGVtX2RldGFpbF9fZGVzY3JpcHRpb25fbW9kYWxfZGV0YWlsJ30+XG4gICAgICAgICAgICAgICAgPHByZT57bmZ0SXRlbS5kZXNjcmlwdGlvbn08L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Td01vZGFsPlxuICAgICAgPC9MYXlvdXQuQmFzZT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBOZnRJdGVtRGV0YWlsID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgJy5uZnRfaXRlbV9kZXRhaWxfX2NvbnRhaW5lcic6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luU00sXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRva2VuLm1hcmdpbixcbiAgICAgIHBhZGRpbmdMZWZ0OiB0b2tlbi5tYXJnaW4sXG4gICAgICBwYWRkaW5nQm90dG9tOiB0b2tlbi5tYXJnaW5cbiAgICB9LFxuXG4gICAgJy5jbGlja2FibGUnOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH0sXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbF9faW5mb19jb250YWluZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGdhcDogdG9rZW4ubWFyZ2luWFMsXG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpbixcbiAgICAgIG1hcmdpbkJvdHRvbTogdG9rZW4ubWFyZ2luXG4gICAgfSxcblxuICAgICcubmZ0X2l0ZW1fZGV0YWlsX19hdHRzX2NvbnRhaW5lcic6IHtcbiAgICAgIG1hcmdpblRvcDogdG9rZW4ubWFyZ2luLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIGdhcDogdG9rZW4ubWFyZ2luWFMsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgJy5hbnQtZmllbGQtY29udGFpbmVyJzoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcblxuICAgICcubmZ0X2l0ZW1fZGV0YWlsX19zZWN0aW9uX3RpdGxlJzoge1xuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplTEcsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0SGVhZGluZyxcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRMR1xuICAgIH0sXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbF9fc2VuZF90ZXh0Jzoge1xuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplTEcsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0TEcsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxXG4gICAgfSxcblxuICAgICcubmZ0X2l0ZW1fZGV0YWlsX19wcm9wX3NlY3Rpb24nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblxuICAgIH0sXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbF9fb3duZXJfYWRkcmVzcyc6IHtcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvblxuICAgIH0sXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbF9fZXh0ZXJuYWxfaWNvbic6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfSxcblxuICAgICcubmZ0X2l0ZW1fZGV0YWlsX19kZXNjcmlwdGlvbl9jb250YWluZXInOiB7XG4gICAgICBwYWRkaW5nOiB0b2tlbi5wYWRkaW5nU00sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdTZWNvbmRhcnksXG4gICAgICBib3JkZXJSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1c0xHXG4gICAgfSxcblxuICAgICcubmZ0X2l0ZW1fZGV0YWlsX19kZXNjcmlwdGlvbl9jb250ZW50Jzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplLFxuICAgICAgZm9udFdlaWdodDogdG9rZW4uYm9keUZvbnRXZWlnaHQsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0LFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstYWxsJ1xuICAgIH0sXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbF9fZGVzY3JpcHRpb25fdGl0bGUnOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRva2VuLm1hcmdpbixcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZ2FwOiB0b2tlbi5tYXJnaW5YWFMsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGFiZWwsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemUsXG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5oZWFkaW5nRm9udFdlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRcbiAgICB9LFxuXG4gICAgJy5uZnRfaXRlbV9kZXRhaWxfX2Rlc2NyaXB0aW9uX21vZGFsX2NvbnRlbnQnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBnYXA6IHRva2VuLm1hcmdpblhTLFxuICAgICAgcGFkZGluZzogdG9rZW4ucGFkZGluZ1NNLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnU2Vjb25kYXJ5LFxuICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNMR1xuICAgIH0sXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbF9fZGVzY3JpcHRpb25fbW9kYWxfbGVmdF9pY29uJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgJy5uZnRfaXRlbV9kZXRhaWxfX2Rlc2NyaXB0aW9uX21vZGFsX3RpdGxlJzoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVMRyxcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRMRyxcbiAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmJvZHlGb250V2VpZ2h0LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MSxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLWFsbCdcbiAgICB9LFxuXG4gICAgJy5uZnRfaXRlbV9kZXRhaWxfX2Rlc2NyaXB0aW9uX21vZGFsX2RldGFpbCc6IHtcbiAgICAgIHRleHRBbGlnbjogJ2p1c3RpZnknLFxuICAgICAgZm9udFdlaWdodDogdG9rZW4uYm9keUZvbnRXZWlnaHQsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNixcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRUZXJ0aWFyeSxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnXG4gICAgfSxcblxuICAgICcubmZ0X2l0ZW1fZGV0YWlsX19uZnRfaW1hZ2UnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuXG4gICAgICAnLmFudC1pbWFnZS1pbWcnOiB7XG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAnLm5mdF9pdGVtX2RldGFpbF9faWRfZmllbGQgLmFudC1maWVsZC13cmFwcGVyIC5hbnQtZmllbGQtY29udGVudC13cmFwcGVyIC5hbnQtZmllbGQtY29udGVudCc6IHtcbiAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2luaXRpYWwnXG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBOZnRJdGVtRGV0YWlsO1xuIl0sIm5hbWVzIjpbImdldEV4cGxvcmVyTGluayIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiQ0FNRVJBX0NPTlRST0xTX01PREVMX1ZJRVdFUl9QUk9QUyIsIkRFRkFVTFRfTU9ERUxfVklFV0VSX1BST1BTIiwiREVGQVVMVF9ORlRfUEFSQU1TIiwiTkZUX1RSQU5TQUNUSU9OIiwiU0hPV18zRF9NT0RFTFNfQ0hBSU4iLCJEYXRhQ29udGV4dCIsInVzZU5hdmlnYXRlT25DaGFuZ2VBY2NvdW50IiwidXNlTm90aWZpY2F0aW9uIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJ1c2VHZXRDaGFpbkluZm8iLCJ1c2VHZXRBY2NvdW50SW5mb0J5QWRkcmVzcyIsInJlZm9ybWF0QWRkcmVzcyIsIkJhY2tncm91bmRJY29uIiwiQnV0dG9uIiwiRmllbGQiLCJJY29uIiwiSW1hZ2UiLCJMb2dvIiwiTW9kYWxDb250ZXh0IiwiU3dNb2RhbCIsIlN3QXZhdGFyIiwiZ2V0QWxwaGFDb2xvciIsIkNOIiwiQ2FyZXRMZWZ0IiwiSW5mbyIsIlBhcGVyUGxhbmVUaWx0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VTZWxlY3RvciIsInVzZUxvY2F0aW9uIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsInVzZUxvY2FsU3RvcmFnZSIsImlzRXRoZXJldW1BZGRyZXNzIiwiTkZUX0RFU0NSSVBUSU9OX01BWF9MRU5HVEgiLCJtb2RhbENsb3NlQnV0dG9uIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwibG9jYXRpb24iLCJjb2xsZWN0aW9uSW5mbyIsIm5mdEl0ZW0iLCJzdGF0ZSIsInQiLCJub3RpZnkiLCJuYXZpZ2F0ZSIsImdvQmFjayIsInRva2VuIiwiZGF0YUNvbnRleHQiLCJhY3RpdmVNb2RhbCIsImluYWN0aXZlTW9kYWwiLCJhY2NvdW50cyIsInJvb3QiLCJhY2NvdW50U3RhdGUiLCJvcmlnaW5DaGFpbkluZm8iLCJjaGFpbiIsIm93bmVyQWNjb3VudEluZm8iLCJvd25lciIsImFjY291bnRFeHRlcm5hbFVybCIsInNldFN0b3JhZ2UiLCJvbkNsaWNrU2VuZCIsIm93bmVyQWRkcmVzcyIsImZpbmQiLCJhIiwiYWRkcmVzcyIsImlzUmVhZE9ubHkiLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwiYXNzZXQiLCJjb2xsZWN0aW9uSWQiLCJmcm9tIiwiaXRlbUlkIiwiaWQiLCJ0byIsInN1YkhlYWRlclJpZ2h0QnV0dG9uIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwib3duZXJQcmVmaXgiLCJ0aGVtZSIsInN1YnN0cmF0ZUluZm8iLCJhZGRyZXNzUHJlZml4IiwiZm9udFNpemVYTCIsIm9yaWdpbkNoYWluTG9nbyIsInNsdWciLCJvd25lckluZm8iLCJuYW1lIiwic2xpY2UiLCJoYW5kbGVDbGlja0V4dGVybmFsQWNjb3VudEluZm8iLCJjaHJvbWUiLCJ0YWJzIiwiY3JlYXRlIiwidXJsIiwiYWN0aXZlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlIiwiaGFuZGxlQ2xpY2tFeHRlcm5hbENvbGxlY3Rpb25JbmZvIiwiZXh0ZXJuYWxVcmwiLCJleHRlcm5hbEluZm9JY29uIiwiaGFuZGxlU2hvd05mdERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJvbkNsb3NlTmZ0RGVzY3JpcHRpb25Nb2RhbCIsIm9uSW1hZ2VDbGljayIsImNhdGNoIiwiZXJyb3IiLCJzaG93M0RNb2RlbCIsImluY2x1ZGVzIiwiYXdhaXRTdG9yZXMiLCJjbGlja2FibGUiLCJ1bmRlZmluZWQiLCJpbWFnZSIsImN1cnNvciIsImNvbG9ySWNvbiIsImNvbGxlY3Rpb25OYW1lIiwicHJvcGVydGllcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJhdHROYW1lIiwiYXR0VmFsdWVPYmoiLCJpbmRleCIsInZhbHVlIiwiYXR0VmFsdWUiLCJ0b1N0cmluZyIsImNvbG9yTGluayIsIk5mdEl0ZW1EZXRhaWwiLCJtYXJnaW5Ub3AiLCJtYXJnaW5TTSIsInBhZGRpbmdSaWdodCIsIm1hcmdpbiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ0JvdHRvbSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwibWFyZ2luWFMiLCJtYXJnaW5Cb3R0b20iLCJmbGV4V3JhcCIsIm92ZXJmbG93IiwiZm9udFNpemUiLCJmb250U2l6ZUxHIiwiY29sb3IiLCJjb2xvclRleHRIZWFkaW5nIiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRMRyIsImNvbG9yVGV4dExpZ2h0MSIsImNvbG9yVGV4dERlc2NyaXB0aW9uIiwicGFkZGluZyIsInBhZGRpbmdTTSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQmdTZWNvbmRhcnkiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJSYWRpdXNMRyIsImZvbnRXZWlnaHQiLCJib2R5Rm9udFdlaWdodCIsIndvcmRCcmVhayIsImFsaWduSXRlbXMiLCJtYXJnaW5YWFMiLCJjb2xvclRleHRMYWJlbCIsImhlYWRpbmdGb250V2VpZ2h0IiwidGV4dEFsaWduIiwiZm9udFNpemVIZWFkaW5nNiIsImNvbG9yVGV4dFRlcnRpYXJ5IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsIm1heFdpZHRoIiwib2JqZWN0Rml0IiwidGV4dE92ZXJmbG93Il0sInNvdXJjZVJvb3QiOiIifQ==