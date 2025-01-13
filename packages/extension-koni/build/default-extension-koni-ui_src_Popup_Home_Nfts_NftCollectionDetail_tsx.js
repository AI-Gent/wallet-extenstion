"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_Nfts_NftCollectionDetail_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/Nfts/NftCollectionDetail.tsx":
/*!************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Nfts/NftCollectionDetail.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/extension-base/services/chain-service/utils */ "../extension-base/src/services/chain-service/utils.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useNotification */ "../extension-koni-ui/src/hooks/common/useNotification.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/common/useTranslation */ "../extension-koni-ui/src/hooks/common/useTranslation.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_modal_useConfirmModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/modal/useConfirmModal */ "../extension-koni-ui/src/hooks/modal/useConfirmModal.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/router/useDefaultNavigate */ "../extension-koni-ui/src/hooks/router/useDefaultNavigate.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks_screen_common_useGetChainAssetInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks/screen/common/useGetChainAssetInfo */ "../extension-koni-ui/src/hooks/screen/common/useGetChainAssetInfo.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Home_Nfts_component_NftGalleryWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Home/Nfts/component/NftGalleryWrapper */ "../extension-koni-ui/src/Popup/Home/Nfts/component/NftGalleryWrapper.tsx");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Trash.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Image.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0





















const subHeaderRightButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
  customSize: '24px',
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
  type: "phosphor",
  weight: 'light'
});
function Component({
  className = ''
}) {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useLocation)();
  const {
    collectionInfo,
    nftList
  } = location.state;
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks_common_useTranslation__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  const {
    goBack
  } = (0,_subwallet_extension_koni_ui_hooks_router_useDefaultNavigate__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const showNotification = (0,_subwallet_extension_koni_ui_hooks_common_useNotification__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_12__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.useNavigateOnChangeAccount)('/home/nfts/collections');
  const originAssetInfo = (0,_subwallet_extension_koni_ui_hooks_screen_common_useGetChainAssetInfo__WEBPACK_IMPORTED_MODULE_8__["default"])(collectionInfo.originAsset);
  const {
    handleSimpleConfirmModal
  } = (0,_subwallet_extension_koni_ui_hooks_modal_useConfirmModal__WEBPACK_IMPORTED_MODULE_6__["default"])({
    title: t('Delete NFT'),
    maskClosable: true,
    closable: true,
    type: 'error',
    subTitle: t('You are about to delete this NFT collection'),
    content: t('Confirm delete this NFT collection'),
    okText: t('Remove')
  });
  const searchNft = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((nftItem, searchText) => {
    var _nftItem$name;
    const searchTextLowerCase = searchText.toLowerCase();
    return ((_nftItem$name = nftItem.name) === null || _nftItem$name === void 0 ? void 0 : _nftItem$name.toLowerCase().includes(searchTextLowerCase)) || nftItem.id.toLowerCase().includes(searchTextLowerCase);
  }, []);
  const handleOnClickNft = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(state => {
    navigate('/home/nfts/item-detail', {
      state
    });
  }, [navigate]);
  const renderNft = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(nftItem => {
    const routingParams = {
      collectionInfo,
      nftItem
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_Popup_Home_Nfts_component_NftGalleryWrapper__WEBPACK_IMPORTED_MODULE_10__.NftGalleryWrapper, {
      fallbackImage: collectionInfo.image,
      handleOnClick: handleOnClickNft,
      have3dViewer: _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.SHOW_3D_MODELS_CHAIN.includes(nftItem.chain),
      image: nftItem.image,
      routingParams: routingParams,
      title: nftItem.name || nftItem.id
    }, `${nftItem.chain}_${nftItem.collectionId}_${nftItem.id}`);
  }, [collectionInfo, handleOnClickNft]);
  const onBack = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    navigate('/home/nfts/collections');
  }, [navigate]);
  const emptyNft = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      emptyMessage: t('Your NFT collectible will appear here!'),
      emptyTitle: t('No NFT collectible'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"]
    });
  }, [t]);
  const handleDeleteNftCollection = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(() => {
    handleSimpleConfirmModal().then(() => {
      if (collectionInfo.originAsset) {
        (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_9__.deleteCustomAssets)(collectionInfo.originAsset).then(result => {
          if (result) {
            goBack();
            showNotification({
              message: t('Deleted NFT collection successfully')
            });
          } else {
            showNotification({
              message: t('Deleted NFT collection unsuccessfully')
            });
          }
        }).catch(console.log);
      }
    }).catch(console.log);
  }, [collectionInfo.originAsset, goBack, handleSimpleConfirmModal, showNotification, t]);
  const subHeaderButton = [{
    icon: subHeaderRightButton,
    onClick: handleDeleteNftCollection,
    disabled: !(originAssetInfo && (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_18__._isSmartContractToken)(originAssetInfo) && (0,_subwallet_extension_base_services_chain_service_utils__WEBPACK_IMPORTED_MODULE_18__._isCustomAsset)(originAssetInfo.slug))
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `${className}`,
    resolve: dataContext.awaitStores(['nft']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      onBack: onBack,
      showBackButton: true,
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: false,
      subHeaderIcons: subHeaderButton,
      subHeaderPaddingVertical: true,
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('header-content'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('collection-name'),
          children: collectionInfo.collectionName || collectionInfo.collectionId
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('collection-count'),
          children: ["\xA0(", nftList.length, ")"]
        })]
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_19__["default"].Section, {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('nft_item_list__container'),
        displayGrid: true,
        enableSearchInput: true,
        gridGap: '14px',
        list: nftList,
        minColumnWidth: '160px',
        renderItem: renderNft,
        renderOnScroll: true,
        renderWhenEmpty: emptyNft,
        searchFunction: searchNft,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search NFT name or ID')
      })
    })
  });
}
const NftCollectionDetail = (0,styled_components__WEBPACK_IMPORTED_MODULE_20__["default"])(Component).withConfig({
  displayName: "NftCollectionDetail",
  componentId: "sc-eeaz1w-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    color: token.colorTextLight1,
    fontSize: token.fontSizeLG,
    '.header-content': {
      color: token.colorTextBase,
      fontWeight: token.fontWeightStrong,
      fontSize: token.fontSizeHeading4,
      lineHeight: token.lineHeightHeading4,
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden'
    },
    '.collection-name': {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '.nft_item_list__container': {
      paddingTop: 14,
      flex: 1,
      height: '100%',
      '.ant-sw-list': {
        paddingBottom: 1,
        marginBottom: -1
      }
    },
    '&__inner': {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NftCollectionDetail);

/***/ }),

/***/ "../extension-koni-ui/src/Popup/Home/Nfts/component/NftGalleryWrapper.tsx":
/*!********************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Nfts/component/NftGalleryWrapper.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NftGalleryWrapper": () => (/* binding */ NftGalleryWrapper)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/activity-indicator/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-gallery/nft-item/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-load-image-component */ "../../node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0




// @ts-ignore



function Component({
  className = '',
  fallbackImage,
  handleOnClick,
  have3dViewer,
  image,
  itemCount,
  routingParams,
  title
}) {
  const {
    extendToken
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  const [showImage, setShowImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [showVideo, setShowVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [show3dViewer, setShow3dViewer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    handleOnClick && handleOnClick(routingParams);
  }, [handleOnClick, routingParams]);
  const handleImageError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setShowImage(false);
    setShowVideo(true);
  }, []);
  const handleVideoError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setShowVideo(false);
    setShow3dViewer(true);
  }, []);
  const getCollectionImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (image) {
      return image;
    } else if (fallbackImage) {
      return fallbackImage;
    }
    return extendToken.defaultImagePlaceholder;
  }, [extendToken.defaultImagePlaceholder, fallbackImage, image]);
  const loadingPlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: 'nft_gallery_wrapper__loading',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
        existIcon: true,
        prefixCls: ''
      })
    });
  }, []);
  const getCollectionImageNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (showImage) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
        delayTime: 10000,
        height: '100%',
        onError: handleImageError,
        placeholder: loadingPlaceholder(),
        src: getCollectionImage(),
        width: '100%'
      });
    }
    if (showVideo) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadComponent, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("video", {
          autoPlay: true,
          height: '100%',
          loop: true,
          muted: true,
          onError: handleVideoError,
          width: '100%',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("source", {
            src: getCollectionImage(),
            type: "video/mp4"
          })
        })
      });
    }
    if (have3dViewer && show3dViewer) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadComponent, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("model-viewer", {
          alt: 'model-viewer',
          "ar-status": 'not-presenting',
          "auto-rotate": true,
          "auto-rotate-delay": 100,
          bounds: 'tight',
          "disable-pan": true,
          "disable-scroll": true,
          "disable-tap": true,
          "disable-zoom": true,
          "environment-image": 'neutral',
          "interaction-prompt": 'none',
          loading: 'eager',
          src: getCollectionImage(),
          style: {
            width: '100%',
            height: '100%'
          },
          "touch-action": 'none',
          ..._subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MODEL_VIEWER_PROPS
        })
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
      src: extendToken.defaultImagePlaceholder,
      visibleByDefault: true
    });
  }, [showImage, showVideo, have3dViewer, show3dViewer, extendToken.defaultImagePlaceholder, handleImageError, loadingPlaceholder, getCollectionImage, handleVideoError]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: `nft_gallery_wrapper ${className}`,
    count: itemCount,
    customImageNode: getCollectionImageNode(),
    onClick: onClick,
    title: title
  });
}
const NftGalleryWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(Component).withConfig({
  displayName: "NftGalleryWrapper",
  componentId: "sc-o2t73q-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    color: token.colorTextLight1,
    fontSize: token.fontSizeLG,
    '.__image-wrapper': {
      overflow: 'hidden'
    },
    '.nft_gallery_wrapper__loading': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9OZnRzX05mdENvbGxlY3Rpb25EZXRhaWxfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRytHO0FBQ3RCO0FBQ1g7QUFDRTtBQUNBO0FBQ1E7QUFDRjtBQUNDO0FBQ087QUFDVztBQUM3QjtBQUNpQztBQUc3QztBQUNwQztBQUNrQjtBQUNTO0FBQ0s7QUFDckI7QUFBQTtBQUFBO0FBSXZDLE1BQU0wQixvQkFBb0IsZ0JBQUcsd0RBQUMsNERBQUk7RUFDaEMsVUFBVSxFQUFFLE1BQU87RUFDbkIsWUFBWSxFQUFFUCx1REFBTTtFQUNwQixJQUFJLEVBQUMsVUFBVTtFQUNmLE1BQU0sRUFBRTtBQUFRLEVBQ2hCO0FBRUYsU0FBU1EsU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEUsTUFBTUMsUUFBUSxHQUFHTiw4REFBVyxFQUFFO0VBQzlCLE1BQU07SUFBRU8sY0FBYztJQUFFQztFQUFRLENBQUMsR0FBR0YsUUFBUSxDQUFDRyxLQUE2QjtFQUUxRSxNQUFNO0lBQUVDO0VBQUUsQ0FBQyxHQUFHeEIsb0dBQWMsRUFBRTtFQUM5QixNQUFNeUIsUUFBUSxHQUFHViw4REFBVyxFQUFFO0VBQzlCLE1BQU07SUFBRVc7RUFBTyxDQUFDLEdBQUd4Qix3R0FBa0IsRUFBRTtFQUN2QyxNQUFNeUIsZ0JBQWdCLEdBQUc1QixxR0FBZSxFQUFFO0VBRTFDLE1BQU02QixXQUFXLEdBQUdmLGtEQUFVLENBQUNoQiwwRkFBVyxDQUFDO0VBRTNDQyw4RkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQztFQUVwRCxNQUFNK0IsZUFBZSxHQUFHMUIsaUhBQW9CLENBQUNrQixjQUFjLENBQUNTLFdBQVcsQ0FBQztFQUV4RSxNQUFNO0lBQUVDO0VBQXlCLENBQUMsR0FBRzlCLG9HQUFlLENBQUM7SUFDbkQrQixLQUFL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LENBQUMsQ0FBQztFQUV2SyxvQkFDRSx1REFBQywyREFBUTtJQUNQLFNBQVMsRUFBRyx1QkFBc0I3RixTQUFVLEVBQUU7SUFDOUMsS0FBSyxFQUFFb0YsU0FBVTtJQUNqQixlQUFlLEVBQUVhLHNCQUFzQixFQUFHO0lBQzFDLE9BQU8sRUFBRXBELE9BQVE7SUFDakIsS0FBSyxFQUFFaEM7RUFBTSxFQUNiO0FBRU47QUFFTyxNQUFNM0IsaUJBQWlCLEdBQUdXLDZEQUFNLENBQUNFLFNBQVMsQ0FBQztFQUFBO0VBQUE7QUFBQSxHQUFRLENBQUM7RUFBRXFELEtBQUssRUFBRTtJQUFFQztFQUFNO0FBQVMsQ0FBQyxLQUFLO0VBQ3pGLE9BQVE7SUFDTkMsS0FBSyxFQUFFRCxLQUFLLENBQUNFLGVBQWU7SUFDNUJDLFFBQVEsRUFBRUgsS0FBSyxDQUFDSSxVQUFVO0lBRTFCLGtCQUFrQixFQUFFO01BQ2xCUyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBRUQsK0JBQStCLEVBQUU7TUFDL0JnQyxLQUFLLEVBQUUsTUFBTTtNQUNiNUIsTUFBTSxFQUFFLE1BQU07TUFDZE4sT0FBTyxFQUFFLE1BQU07TUFDZm1DLGNBQWMsRUFBRSxRQUFRO01BQ3hCQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9Ib21lL05mdHMvTmZ0Q29sbGVjdGlvbkRldGFpbC50c3giLCJ3ZWJwYWNrOi8vQHN1YndhbGxldC9leHRlbnNpb24ta29uaS8uLi9leHRlbnNpb24ta29uaS11aS9zcmMvUG9wdXAvSG9tZS9OZnRzL2NvbXBvbmVudC9OZnRHYWxsZXJ5V3JhcHBlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IE5mdEl0ZW0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IF9pc0N1c3RvbUFzc2V0LCBfaXNTbWFydENvbnRyYWN0VG9rZW4gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3NlcnZpY2VzL2NoYWluLXNlcnZpY2UvdXRpbHMnO1xuaW1wb3J0IHsgRW1wdHlMaXN0LCBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IFNIT1dfM0RfTU9ERUxTX0NIQUlOIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlT25DaGFuZ2VBY2NvdW50IH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgdXNlTm90aWZpY2F0aW9uIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MvY29tbW9uL3VzZU5vdGlmaWNhdGlvbic7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9jb21tb24vdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZUNvbmZpcm1Nb2RhbCBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2hvb2tzL21vZGFsL3VzZUNvbmZpcm1Nb2RhbCc7XG5pbXBvcnQgdXNlRGVmYXVsdE5hdmlnYXRlIGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3Mvcm91dGVyL3VzZURlZmF1bHROYXZpZ2F0ZSc7XG5pbXBvcnQgdXNlR2V0Q2hhaW5Bc3NldEluZm8gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcy9zY3JlZW4vY29tbW9uL3VzZUdldENoYWluQXNzZXRJbmZvJztcbmltcG9ydCB7IGRlbGV0ZUN1c3RvbUFzc2V0cyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IE5mdEdhbGxlcnlXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9Qb3B1cC9Ib21lL05mdHMvY29tcG9uZW50L05mdEdhbGxlcnlXcmFwcGVyJztcbmltcG9ydCB7IElOZnRDb2xsZWN0aW9uRGV0YWlsLCBJTmZ0SXRlbURldGFpbCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvUG9wdXAvSG9tZS9OZnRzL3V0aWxzJztcbmltcG9ydCB7IFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEJ1dHRvblByb3BzLCBJY29uLCBTd0xpc3QgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEltYWdlLCBUcmFzaCB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzXG5cbmNvbnN0IHN1YkhlYWRlclJpZ2h0QnV0dG9uID0gPEljb25cbiAgY3VzdG9tU2l6ZT17JzI0cHgnfVxuICBwaG9zcGhvckljb249e1RyYXNofVxuICB0eXBlPSdwaG9zcGhvcidcbiAgd2VpZ2h0PXsnbGlnaHQnfVxuLz47XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHsgY29sbGVjdGlvbkluZm8sIG5mdExpc3QgfSA9IGxvY2F0aW9uLnN0YXRlIGFzIElOZnRDb2xsZWN0aW9uRGV0YWlsO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB7IGdvQmFjayB9ID0gdXNlRGVmYXVsdE5hdmlnYXRlKCk7XG4gIGNvbnN0IHNob3dOb3RpZmljYXRpb24gPSB1c2VOb3RpZmljYXRpb24oKTtcblxuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuXG4gIHVzZU5hdmlnYXRlT25DaGFuZ2VBY2NvdW50KCcvaG9tZS9uZnRzL2NvbGxlY3Rpb25zJyk7XG5cbiAgY29uc3Qgb3JpZ2luQXNzZXRJbmZvID0gdXNlR2V0Q2hhaW5Bc3NldEluZm8oY29sbGVjdGlvbkluZm8ub3JpZ2luQXNzZXQpO1xuXG4gIGNvbnN0IHsgaGFuZGxlU2ltcGxlQ29uZmlybU1vZGFsIH0gPSB1c2VDb25maXJtTW9kYWwoe1xuICAgIHRpdGxlOiB0PHN0cmluZz4oJ0RlbGV0ZSBORlQnKSxcbiAgICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gICAgY2xvc2FibGU6IHRydWUsXG4gICAgdHlwZTogJ2Vycm9yJyxcbiAgICBzdWJUaXRsZTogdDxzdHJpbmc+KCdZb3UgYXJlIGFib3V0IHRvIGRlbGV0ZSB0aGlzIE5GVCBjb2xsZWN0aW9uJyksXG4gICAgY29udGVudDogdDxzdHJpbmc+KCdDb25maXJtIGRlbGV0ZSB0aGlzIE5GVCBjb2xsZWN0aW9uJyksXG4gICAgb2tUZXh0OiB0PHN0cmluZz4oJ1JlbW92ZScpXG4gIH0pO1xuXG4gIGNvbnN0IHNlYXJjaE5mdCA9IHVzZUNhbGxiYWNrKChuZnRJdGVtOiBOZnRJdGVtLCBzZWFyY2hUZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0TG93ZXJDYXNlID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIG5mdEl0ZW0ubmFtZT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKSB8fFxuICAgICAgbmZ0SXRlbS5pZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHRMb3dlckNhc2UpXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2tOZnQgPSB1c2VDYWxsYmFjaygoc3RhdGU6IElOZnRJdGVtRGV0YWlsKSA9PiB7XG4gICAgbmF2aWdhdGUoJy9ob21lL25mdHMvaXRlbS1kZXRhaWwnLCB7IHN0YXRlIH0pO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCByZW5kZXJOZnQgPSB1c2VDYWxsYmFjaygobmZ0SXRlbTogTmZ0SXRlbSkgPT4ge1xuICAgIGNvbnN0IHJvdXRpbmdQYXJhbXMgPSB7IGNvbGxlY3Rpb25JbmZvLCBuZnRJdGVtIH0gYXMgSU5mdEl0ZW1EZXRhaWw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE5mdEdhbGxlcnlXcmFwcGVyXG4gICAgICAgIGZhbGxiYWNrSW1hZ2U9e2NvbGxlY3Rpb25JbmZvLmltYWdlfVxuICAgICAgICBoYW5kbGVPbkNsaWNrPXtoYW5kbGVPbkNsaWNrTmZ0fVxuICAgICAgICBoYXZlM2RWaWV3ZXI9e1NIT1dfM0RfTU9ERUxTX0NIQUlOLmluY2x1ZGVzKG5mdEl0ZW0uY2hhaW4pfVxuICAgICAgICBpbWFnZT17bmZ0SXRlbS5pbWFnZX1cbiAgICAgICAga2V5PXtgJHtuZnRJdGVtLmNoYWlufV8ke25mdEl0ZW0uY29sbGVjdGlvbklkfV8ke25mdEl0ZW0uaWR9YH1cbiAgICAgICAgcm91dGluZ1BhcmFtcz17cm91dGluZ1BhcmFtc31cbiAgICAgICAgdGl0bGU9e25mdEl0ZW0ubmFtZSB8fCBuZnRJdGVtLmlkfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbY29sbGVjdGlvbkluZm8sIGhhbmRsZU9uQ2xpY2tOZnRdKTtcblxuICBjb25zdCBvbkJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoJy9ob21lL25mdHMvY29sbGVjdGlvbnMnKTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3QgZW1wdHlOZnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFbXB0eUxpc3RcbiAgICAgICAgZW1wdHlNZXNzYWdlPXt0KCdZb3VyIE5GVCBjb2xsZWN0aWJsZSB3aWxsIGFwcGVhciBoZXJlIScpfVxuICAgICAgICBlbXB0eVRpdGxlPXt0KCdObyBORlQgY29sbGVjdGlibGUnKX1cbiAgICAgICAgcGhvc3Bob3JJY29uPXtJbWFnZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW3RdKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVOZnRDb2xsZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGhhbmRsZVNpbXBsZUNvbmZpcm1Nb2RhbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKGNvbGxlY3Rpb25JbmZvLm9yaWdpbkFzc2V0KSB7XG4gICAgICAgIGRlbGV0ZUN1c3RvbUFzc2V0cyhjb2xsZWN0aW9uSW5mby5vcmlnaW5Bc3NldClcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGdvQmFjaygpO1xuICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdEZWxldGVkIE5GVCBjb2xsZWN0aW9uIHN1Y2Nlc3NmdWxseScpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnRGVsZXRlZCBORlQgY29sbGVjdGlvbiB1bnN1Y2Nlc3NmdWxseScpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChjb25zb2xlLmxvZyk7XG4gIH0sIFtjb2xsZWN0aW9uSW5mby5vcmlnaW5Bc3NldCwgZ29CYWNrLCBoYW5kbGVTaW1wbGVDb25maXJtTW9kYWwsIHNob3dOb3RpZmljYXRpb24sIHRdKTtcblxuICBjb25zdCBzdWJIZWFkZXJCdXR0b246IEJ1dHRvblByb3BzW10gPSBbXG4gICAge1xuICAgICAgaWNvbjogc3ViSGVhZGVyUmlnaHRCdXR0b24sXG4gICAgICBvbkNsaWNrOiBoYW5kbGVEZWxldGVOZnRDb2xsZWN0aW9uLFxuICAgICAgZGlzYWJsZWQ6ICEob3JpZ2luQXNzZXRJbmZvICYmIF9pc1NtYXJ0Q29udHJhY3RUb2tlbihvcmlnaW5Bc3NldEluZm8pICYmIF9pc0N1c3RvbUFzc2V0KG9yaWdpbkFzc2V0SW5mby5zbHVnKSlcbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfWB9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ25mdCddKX1cbiAgICA+XG4gICAgICA8TGF5b3V0LkJhc2VcbiAgICAgICAgb25CYWNrPXtvbkJhY2t9XG4gICAgICAgIHNob3dCYWNrQnV0dG9uPXt0cnVlfVxuICAgICAgICBzaG93U3ViSGVhZGVyPXt0cnVlfVxuICAgICAgICBzdWJIZWFkZXJCYWNrZ3JvdW5kPXsndHJhbnNwYXJlbnQnfVxuICAgICAgICBzdWJIZWFkZXJDZW50ZXI9e2ZhbHNlfVxuICAgICAgICBzdWJIZWFkZXJJY29ucz17c3ViSGVhZGVyQnV0dG9ufVxuICAgICAgICBzdWJIZWFkZXJQYWRkaW5nVmVydGljYWw9e3RydWV9XG4gICAgICAgIHRpdGxlPXsoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NOKCdoZWFkZXItY29udGVudCcpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDTignY29sbGVjdGlvbi1uYW1lJyl9PlxuICAgICAgICAgICAgICB7Y29sbGVjdGlvbkluZm8uY29sbGVjdGlvbk5hbWUgfHwgY29sbGVjdGlvbkluZm8uY29sbGVjdGlvbklkfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q04oJ2NvbGxlY3Rpb24tY291bnQnKX0+XG4gICAgICAgICAgICAgICZuYnNwOyh7bmZ0TGlzdC5sZW5ndGh9KVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxTd0xpc3QuU2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT17Q04oJ25mdF9pdGVtX2xpc3RfX2NvbnRhaW5lcicpfVxuICAgICAgICAgIGRpc3BsYXlHcmlkPXt0cnVlfVxuICAgICAgICAgIGVuYWJsZVNlYXJjaElucHV0PXt0cnVlfVxuICAgICAgICAgIGdyaWRHYXA9eycxNHB4J31cbiAgICAgICAgICBsaXN0PXtuZnRMaXN0fVxuICAgICAgICAgIG1pbkNvbHVtbldpZHRoPXsnMTYwcHgnfVxuICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlck5mdH1cbiAgICAgICAgICByZW5kZXJPblNjcm9sbD17dHJ1ZX1cbiAgICAgICAgICByZW5kZXJXaGVuRW1wdHk9e2VtcHR5TmZ0fVxuICAgICAgICAgIHNlYXJjaEZ1bmN0aW9uPXtzZWFyY2hOZnR9XG4gICAgICAgICAgc2VhcmNoTWluQ2hhcmFjdGVyc0NvdW50PXsyfVxuICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyPXt0PHN0cmluZz4oJ1NlYXJjaCBORlQgbmFtZSBvciBJRCcpfVxuICAgICAgICAvPlxuICAgICAgPC9MYXlvdXQuQmFzZT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBOZnRDb2xsZWN0aW9uRGV0YWlsID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MSxcbiAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVMRyxcblxuICAgICcuaGVhZGVyLWNvbnRlbnQnOiB7XG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0QmFzZSxcbiAgICAgIGZvbnRXZWlnaHQ6IHRva2VuLmZvbnRXZWlnaHRTdHJvbmcsXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVIZWFkaW5nNCxcbiAgICAgIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHRIZWFkaW5nNCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcblxuICAgICcuY29sbGVjdGlvbi1uYW1lJzoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG4gICAgfSxcblxuICAgICcubmZ0X2l0ZW1fbGlzdF9fY29udGFpbmVyJzoge1xuICAgICAgcGFkZGluZ1RvcDogMTQsXG4gICAgICBmbGV4OiAxLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG5cbiAgICAgICcuYW50LXN3LWxpc3QnOiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IDEsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogLTFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJyZfX2lubmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5mdENvbGxlY3Rpb25EZXRhaWw7XG4iLCIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgREVGQVVMVF9NT0RFTF9WSUVXRVJfUFJPUFMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IsIE5mdEl0ZW0gYXMgTmZ0SXRlbV8gfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBMYXp5TG9hZENvbXBvbmVudCwgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGhlbWVQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGZhbGxiYWNrSW1hZ2U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGl0ZW1Db3VudD86IG51bWJlcjtcbiAgaGFuZGxlT25DbGljaz86IChwYXJhbXM/OiBhbnkpID0+IHZvaWQ7XG4gIHJvdXRpbmdQYXJhbXM/OiBhbnk7XG4gIGhhdmUzZFZpZXdlcj86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudCAoeyBjbGFzc05hbWUgPSAnJywgZmFsbGJhY2tJbWFnZSwgaGFuZGxlT25DbGljaywgaGF2ZTNkVmlld2VyLCBpbWFnZSwgaXRlbUNvdW50LCByb3V0aW5nUGFyYW1zLCB0aXRsZSB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxQcm9wcz4ge1xuICBjb25zdCB7IGV4dGVuZFRva2VuIH0gPSB1c2VUaGVtZSgpIGFzIFRoZW1lO1xuXG4gIGNvbnN0IFtzaG93SW1hZ2UsIHNldFNob3dJbWFnZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dWaWRlbywgc2V0U2hvd1ZpZGVvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3czZFZpZXdlciwgc2V0U2hvdzNkVmlld2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGhhbmRsZU9uQ2xpY2sgJiYgaGFuZGxlT25DbGljayhyb3V0aW5nUGFyYW1zKTtcbiAgfSwgW2hhbmRsZU9uQ2xpY2ssIHJvdXRpbmdQYXJhbXNdKTtcblxuICBjb25zdCBoYW5kbGVJbWFnZUVycm9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dJbWFnZShmYWxzZSk7XG4gICAgc2V0U2hvd1ZpZGVvKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlVmlkZW9FcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93VmlkZW8oZmFsc2UpO1xuICAgIHNldFNob3czZFZpZXdlcih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldENvbGxlY3Rpb25JbWFnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9IGVsc2UgaWYgKGZhbGxiYWNrSW1hZ2UpIHtcbiAgICAgIHJldHVybiBmYWxsYmFja0ltYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBleHRlbmRUb2tlbi5kZWZhdWx0SW1hZ2VQbGFjZWhvbGRlcjtcbiAgfSwgW2V4dGVuZFRva2VuLmRlZmF1bHRJbWFnZVBsYWNlaG9sZGVyLCBmYWxsYmFja0ltYWdlLCBpbWFnZV0pO1xuXG4gIGNvbnN0IGxvYWRpbmdQbGFjZWhvbGRlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyduZnRfZ2FsbGVyeV93cmFwcGVyX19sb2FkaW5nJ30+XG4gICAgICAgIDxBY3Rpdml0eUluZGljYXRvclxuICAgICAgICAgIGV4aXN0SWNvbj17dHJ1ZX1cbiAgICAgICAgICBwcmVmaXhDbHM9eycnfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldENvbGxlY3Rpb25JbWFnZU5vZGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHNob3dJbWFnZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICBkZWxheVRpbWU9ezEwMDAwfVxuICAgICAgICAgIGhlaWdodD17JzEwMCUnfVxuICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZUltYWdlRXJyb3J9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2xvYWRpbmdQbGFjZWhvbGRlcigpfVxuICAgICAgICAgIHNyYz17Z2V0Q29sbGVjdGlvbkltYWdlKCl9XG4gICAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNob3dWaWRlbykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExhenlMb2FkQ29tcG9uZW50PlxuICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgIGhlaWdodD17JzEwMCUnfVxuICAgICAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVWaWRlb0Vycm9yfVxuICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c291cmNlXG4gICAgICAgICAgICAgIHNyYz17Z2V0Q29sbGVjdGlvbkltYWdlKCl9XG4gICAgICAgICAgICAgIHR5cGU9J3ZpZGVvL21wNCdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgPC9MYXp5TG9hZENvbXBvbmVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGhhdmUzZFZpZXdlciAmJiBzaG93M2RWaWV3ZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXp5TG9hZENvbXBvbmVudD5cbiAgICAgICAgICB7LyogQHRzLWlnbm9yZSAqL31cbiAgICAgICAgICA8bW9kZWwtdmlld2VyXG4gICAgICAgICAgICBhbHQ9eydtb2RlbC12aWV3ZXInfVxuICAgICAgICAgICAgYXItc3RhdHVzPXsnbm90LXByZXNlbnRpbmcnfVxuICAgICAgICAgICAgYXV0by1yb3RhdGU9e3RydWV9XG4gICAgICAgICAgICBhdXRvLXJvdGF0ZS1kZWxheT17MTAwfVxuICAgICAgICAgICAgYm91bmRzPXsndGlnaHQnfVxuICAgICAgICAgICAgZGlzYWJsZS1wYW49e3RydWV9XG4gICAgICAgICAgICBkaXNhYmxlLXNjcm9sbD17dHJ1ZX1cbiAgICAgICAgICAgIGRpc2FibGUtdGFwPXt0cnVlfVxuICAgICAgICAgICAgZGlzYWJsZS16b29tPXt0cnVlfVxuICAgICAgICAgICAgZW52aXJvbm1lbnQtaW1hZ2U9eyduZXV0cmFsJ31cbiAgICAgICAgICAgIGludGVyYWN0aW9uLXByb21wdD17J25vbmUnfVxuICAgICAgICAgICAgbG9hZGluZz17J2VhZ2VyJ31cbiAgICAgICAgICAgIHNyYz17Z2V0Q29sbGVjdGlvbkltYWdlKCl9XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgdG91Y2gtYWN0aW9uPXsnbm9uZSd9XG4gICAgICAgICAgICB7Li4uREVGQVVMVF9NT0RFTF9WSUVXRVJfUFJPUFN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXp5TG9hZENvbXBvbmVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgIHNyYz17ZXh0ZW5kVG9rZW4uZGVmYXVsdEltYWdlUGxhY2Vob2xkZXJ9XG4gICAgICAgIHZpc2libGVCeURlZmF1bHQ9e3RydWV9XG4gICAgICAvPlxuICAgICk7XG4gIH0sIFtzaG93SW1hZ2UsIHNob3dWaWRlbywgaGF2ZTNkVmlld2VyLCBzaG93M2RWaWV3ZXIsIGV4dGVuZFRva2VuLmRlZmF1bHRJbWFnZVBsYWNlaG9sZGVyLCBoYW5kbGVJbWFnZUVycm9yLCBsb2FkaW5nUGxhY2Vob2xkZXIsIGdldENvbGxlY3Rpb25JbWFnZSwgaGFuZGxlVmlkZW9FcnJvcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5mdEl0ZW1fXG4gICAgICBjbGFzc05hbWU9e2BuZnRfZ2FsbGVyeV93cmFwcGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICBjb3VudD17aXRlbUNvdW50fVxuICAgICAgY3VzdG9tSW1hZ2VOb2RlPXtnZXRDb2xsZWN0aW9uSW1hZ2VOb2RlKCl9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBOZnRHYWxsZXJ5V3JhcHBlciA9IHN0eWxlZChDb21wb25lbnQpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoe1xuICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRMaWdodDEsXG4gICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplTEcsXG5cbiAgICAnLl9faW1hZ2Utd3JhcHBlcic6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAnLm5mdF9nYWxsZXJ5X3dyYXBwZXJfX2xvYWRpbmcnOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJfaXNDdXN0b21Bc3NldCIsIl9pc1NtYXJ0Q29udHJhY3RUb2tlbiIsIkVtcHR5TGlzdCIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiU0hPV18zRF9NT0RFTFNfQ0hBSU4iLCJEYXRhQ29udGV4dCIsInVzZU5hdmlnYXRlT25DaGFuZ2VBY2NvdW50IiwidXNlTm90aWZpY2F0aW9uIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maXJtTW9kYWwiLCJ1c2VEZWZhdWx0TmF2aWdhdGUiLCJ1c2VHZXRDaGFpbkFzc2V0SW5mbyIsImRlbGV0ZUN1c3RvbUFzc2V0cyIsIk5mdEdhbGxlcnlXcmFwcGVyIiwiSWNvbiIsIlN3TGlzdCIsIkNOIiwiSW1hZ2UiLCJUcmFzaCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlTG9jYXRpb24iLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsInN1YkhlYWRlclJpZ2h0QnV0dG9uIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwibG9jYXRpb24iLCJjb2xsZWN0aW9uSW5mbyIsIm5mdExpc3QiLCJzdGF0ZSIsInQiLCJuYXZpZ2F0ZSIsImdvQmFjayIsInNob3dOb3RpZmljYXRpb24iLCJkYXRhQ29udGV4dCIsIm9yaWdpbkFzc2V0SW5mbyIsIm9yaWdpbkFzc2V0IiwiaGFuZGxlU2ltcGxlQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtYXNrQ2xvc2FibGUiLCJjbG9zYWJsZSIsInR5cGUiLCJzdWJUaXRsZSIsImNvbnRlbnQiLCJva1RleHQiLCJzZWFyY2hOZnQiLCJuZnRJdGVtIiwic2VhcmNoVGV4dCIsInNlYXJjaFRleHRMb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm5hbWUiLCJpbmNsdWRlcyIsImlkIiwiaGFuZGxlT25DbGlja05mdCIsInJlbmRlck5mdCIsInJvdXRpbmdQYXJhbXMiLCJpbWFnZSIsImNoYWluIiwiY29sbGVjdGlvbklkIiwib25CYWNrIiwiZW1wdHlOZnQiLCJoYW5kbGVEZWxldGVOZnRDb2xsZWN0aW9uIiwidGhlbiIsInJlc3VsdCIsIm1lc3NhZ2UiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJzdWJIZWFkZXJCdXR0b24iLCJpY29uIiwib25DbGljayIsImRpc2FibGVkIiwic2x1ZyIsImF3YWl0U3RvcmVzIiwiY29sbGVjdGlvbk5hbWUiLCJsZW5ndGgiLCJOZnRDb2xsZWN0aW9uRGV0YWlsIiwidGhlbWUiLCJ0b2tlbiIsImNvbG9yIiwiY29sb3JUZXh0TGlnaHQxIiwiZm9udFNpemUiLCJmb250U2l6ZUxHIiwiY29sb3JUZXh0QmFzZSIsImZvbnRXZWlnaHQiLCJmb250V2VpZ2h0U3Ryb25nIiwiZm9udFNpemVIZWFkaW5nNCIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93IiwicGFkZGluZ1RvcCIsImZsZXgiLCJoZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luQm90dG9tIiwiREVGQVVMVF9NT0RFTF9WSUVXRVJfUFJPUFMiLCJBY3Rpdml0eUluZGljYXRvciIsIk5mdEl0ZW0iLCJOZnRJdGVtXyIsInVzZVN0YXRlIiwiTGF6eUxvYWRDb21wb25lbnQiLCJMYXp5TG9hZEltYWdlIiwidXNlVGhlbWUiLCJmYWxsYmFja0ltYWdlIiwiaGFuZGxlT25DbGljayIsImhhdmUzZFZpZXdlciIsIml0ZW1Db3VudCIsImV4dGVuZFRva2VuIiwic2hvd0ltYWdlIiwic2V0U2hvd0ltYWdlIiwic2hvd1ZpZGVvIiwic2V0U2hvd1ZpZGVvIiwic2hvdzNkVmlld2VyIiwic2V0U2hvdzNkVmlld2VyIiwiaGFuZGxlSW1hZ2VFcnJvciIsImhhbmRsZVZpZGVvRXJyb3IiLCJnZXRDb2xsZWN0aW9uSW1hZ2UiLCJkZWZhdWx0SW1hZ2VQbGFjZWhvbGRlciIsImxvYWRpbmdQbGFjZWhvbGRlciIsImdldENvbGxlY3Rpb25JbWFnZU5vZGUiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=