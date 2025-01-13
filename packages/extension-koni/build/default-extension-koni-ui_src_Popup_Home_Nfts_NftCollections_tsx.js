"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Home_Nfts_NftCollections_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/Nfts/NftCollections.tsx":
/*!*******************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Nfts/NftCollections.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_Popup_Home_Nfts_component_NftGalleryWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/Popup/Home/Nfts/component/NftGalleryWrapper */ "../extension-koni-ui/src/Popup/Home/Nfts/component/NftGalleryWrapper.tsx");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/activity-indicator/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/ArrowClockwise.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/PlusCircle.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Image.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0













const reloadIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_9__["default"],
  size: "sm",
  type: "phosphor"
});
const rightIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
  phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_10__["default"],
  size: "sm",
  type: "phosphor"
});
function Component({
  className = ''
}) {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetCurrentPage)('/home/nfts/collections');
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const {
    nftCollections,
    nftItems
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetNftByAccount)();
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
  const notify = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useNotification)();
  const subHeaderButton = [{
    icon: reloadIcon,
    disabled: loading,
    size: 'sm',
    onClick: () => {
      setLoading(true);
      notify({
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_12__["default"], {
          size: 32
        }),
        style: {
          top: 210
        },
        direction: 'vertical',
        duration: 1.8,
        closable: false,
        message: t('Reloading')
      });
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.reloadCron)({
        data: 'nft'
      }).then(() => {
        setLoading(false);
      }).catch(console.error);
    }
  }, {
    icon: rightIcon,
    onClick: () => {
      navigate('/settings/tokens/import-nft', {
        state: {
          isExternalRequest: false
        }
      });
    }
  }];
  const searchCollection = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((collection, searchText) => {
    var _collection$collectio;
    const searchTextLowerCase = searchText.toLowerCase();
    return ((_collection$collectio = collection.collectionName) === null || _collection$collectio === void 0 ? void 0 : _collection$collectio.toLowerCase().includes(searchTextLowerCase)) || collection.collectionId.toLowerCase().includes(searchTextLowerCase);
  }, []);
  const getNftsByCollection = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(nftCollection => {
    const nftList = [];
    nftItems.forEach(nftItem => {
      if (nftItem.collectionId === nftCollection.collectionId && nftItem.chain === nftCollection.chain) {
        nftList.push(nftItem);
      }
    });
    return nftList;
  }, [nftItems]);
  const handleOnClickCollection = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(state => {
    navigate('/home/nfts/collection-detail', {
      state
    });
  }, [navigate]);
  const renderNftCollection = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(nftCollection => {
    const nftList = getNftsByCollection(nftCollection);
    let fallbackImage;
    for (const nft of nftList) {
      // fallback to any nft image
      if (nft.image) {
        fallbackImage = nft.image;
        break;
      }
    }
    const state = {
      collectionInfo: nftCollection,
      nftList
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_Popup_Home_Nfts_component_NftGalleryWrapper__WEBPACK_IMPORTED_MODULE_4__.NftGalleryWrapper, {
      fallbackImage: fallbackImage,
      handleOnClick: handleOnClickCollection,
      image: nftCollection.image,
      itemCount: nftList.length,
      routingParams: state,
      title: nftCollection.collectionName || nftCollection.collectionId
    }, `${nftCollection.collectionId}_${nftCollection.chain}`);
  }, [getNftsByCollection, handleOnClickCollection]);
  const emptyButtonProps = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    return {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_13__["default"],
        weight: "fill"
      }),
      children: t('Add NFT'),
      shape: 'circle',
      size: 'xs',
      onClick: () => {
        navigate('/settings/tokens/import-nft', {
          state: {
            isExternalRequest: false
          }
        });
      }
    };
  }, [navigate, t]);
  const emptyNft = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      buttonProps: emptyButtonProps,
      emptyMessage: t('Try adding one manually'),
      emptyTitle: t('No NFTs found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_14__["default"]
    });
  }, [emptyButtonProps, t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `nft_container ${className}`,
    resolve: dataContext.awaitStores(['nft']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: false,
      subHeaderIcons: subHeaderButton,
      subHeaderPaddingVertical: true,
      title: t('Your collections'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_15__["default"].Section, {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('nft_collection_list__container'),
        displayGrid: true,
        enableSearchInput: true,
        gridGap: '14px',
        list: nftCollections,
        minColumnWidth: '160px',
        renderItem: renderNftCollection,
        renderOnScroll: true,
        renderWhenEmpty: emptyNft,
        searchFunction: searchCollection,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search collection name')
      })
    })
  });
}
const NftCollections = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__["default"])(Component).withConfig({
  displayName: "NftCollections",
  componentId: "sc-3r07z1-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    color: token.colorTextLight1,
    fontSize: token.fontSizeLG,
    '&__inner': {
      display: 'flex',
      flexDirection: 'column'
    },
    '.nft_collection_list__container': {
      height: '100%',
      flex: 1,
      '.ant-sw-list': {
        paddingBottom: 1,
        marginBottom: -1
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NftCollections);

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

/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/ArrowClockwise.esm.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/ArrowClockwise.esm.js ***!
  \**************************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176.2 99.7 224.2 99.7 224.2 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176.2 99.7 224.2 99.7 224.2 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1-5.7-13.6l18.4-18.4-4.3-4.3a80,80,0,1,0,0,113.2,7.9,7.9,0,0,1,11.3,0,8,8,0,0,1,0,11.3,96,96,0,1,1,0-135.8l4.3,4.3,18.3-18.3a8,8,0,0,1,8.7-1.8A8.2,8.2,0,0,1,232.2,51.7Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176.2 99.7 224.2 99.7 224.2 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176.2 99.7 224.2 99.7 224.2 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176.2 99.7 224.2 99.7 224.2 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",
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

var ArrowClockwise = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ArrowClockwise.displayName = "ArrowClockwise";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowClockwise);
//# sourceMappingURL=ArrowClockwise.esm.js.map


/***/ }),

/***/ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js":
/*!****************************************************************!*\
  !*** ../../node_modules/phosphor-react/dist/icons/Plus.esm.js ***!
  \****************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
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

var Plus = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Plus.displayName = "Plus";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plus);
//# sourceMappingURL=Plus.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfSG9tZV9OZnRzX05mdENvbGxlY3Rpb25zX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR3lGO0FBQ1Q7QUFDNEM7QUFDeEQ7QUFDeUM7QUFHMUI7QUFDdkQ7QUFDNkM7QUFDVDtBQUNqQjtBQUNSO0FBQUE7QUFJdkMsTUFBTXdCLFVBQVUsZ0JBQUcsdURBQUMsMkRBQUk7RUFDdEIsWUFBWSxFQUFFVixzREFBZTtFQUM3QixJQUFJLEVBQUMsSUFBSTtFQUNULElBQUksRUFBQztBQUFVLEVBQ2Y7QUFFRixNQUFNVyxTQUFTLGdCQUFHLHVEQUFDLDJEQUFJO0VBQ3JCLFlBQVksRUFBRVQsdURBQUs7RUFDbkIsSUFBSSxFQUFDLElBQUk7RUFDVCxJQUFJLEVBQUM7QUFBVSxFQUNmO0FBRUYsU0FBU1UsU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEVyQixxRkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQztFQUMzQyxNQUFNO0lBQUVzQjtFQUFFLENBQUMsR0FBR3JCLGtGQUFjLEVBQUU7RUFDOUIsTUFBTXNCLFFBQVEsR0FBR1AsOERBQVcsRUFBRTtFQUM5QixNQUFNUSxXQUFXLEdBQUdWLGlEQUFVLENBQUNqQiwwRkFBVyxDQUFDO0VBQzNDLE1BQU07SUFBRTRCLGNBQWM7SUFBRUM7RUFBUyxDQUFDLEdBQUc1QixzRkFBa0IsRUFBRTtFQUN6RCxNQUFNLENBQUM2QixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHaEIscURBQWMsQ0FBVSxLQUFLLENBQUM7RUFDNUQsTUFBTWtCLE1BQU0sR0FBRy9CLG1GQUFlLEVBQUU7RUFFaEMsTUFBTWdDLGVBQThCLEdBQUcsQ0FDckM7SUFDRUMsSUFBSSxFQUFFZCxVQUFVO0lBQ2hCZSxRQUFRLEVBQUVOLE9BQU87SUFDakJPLElBQUksRUFBRSxJQUFJO0lBQ1ZDLE9B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UUFBUSwwREFBbUI7QUFDdEU7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUywwREFBbUIsQ0FBQyx1REFBYyxRQUFRLDBEQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsMERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLDBEQUFtQixDQUFDLHVEQUFjLFFBQVEsMERBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRywwREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsMERBQW1CLENBQUMsdURBQWMsUUFBUSwwREFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLFNBQVMsc0VBQW1CO0FBQzVCOztBQUVBLHdCQUF3QixpREFBVTtBQUNsQyxTQUFTLDBEQUFtQixDQUFDLDREQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9Ib21lL05mdHMvTmZ0Q29sbGVjdGlvbnMudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL0hvbWUvTmZ0cy9jb21wb25lbnQvTmZ0R2FsbGVyeVdyYXBwZXIudHN4Iiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXJlYWN0L2Rpc3QvaWNvbnMvQXJyb3dDbG9ja3dpc2UuZXNtLmpzIiwid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vLi4vbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXJlYWN0L2Rpc3QvaWNvbnMvUGx1cy5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IE5mdENvbGxlY3Rpb24sIE5mdEl0ZW0gfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IEVtcHR5TGlzdCwgTGF5b3V0LCBQYWdlV3JhcHBlciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvY29udGV4dHMvRGF0YUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlR2V0TmZ0QnlBY2NvdW50LCB1c2VOb3RpZmljYXRpb24sIHVzZVNldEN1cnJlbnRQYWdlLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgcmVsb2FkQ3JvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvbWVzc2FnaW5nJztcbmltcG9ydCB7IE5mdEdhbGxlcnlXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9Qb3B1cC9Ib21lL05mdHMvY29tcG9uZW50L05mdEdhbGxlcnlXcmFwcGVyJztcbmltcG9ydCB7IElOZnRDb2xsZWN0aW9uRGV0YWlsIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9Qb3B1cC9Ib21lL05mdHMvdXRpbHMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IsIEJ1dHRvblByb3BzLCBJY29uLCBTd0xpc3QgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEFycm93Q2xvY2t3aXNlLCBJbWFnZSwgUGx1cywgUGx1c0NpcmNsZSB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBQcm9wcyA9IFRoZW1lUHJvcHNcblxuY29uc3QgcmVsb2FkSWNvbiA9IDxJY29uXG4gIHBob3NwaG9ySWNvbj17QXJyb3dDbG9ja3dpc2V9XG4gIHNpemU9J3NtJ1xuICB0eXBlPSdwaG9zcGhvcidcbi8+O1xuXG5jb25zdCByaWdodEljb24gPSA8SWNvblxuICBwaG9zcGhvckljb249e1BsdXN9XG4gIHNpemU9J3NtJ1xuICB0eXBlPSdwaG9zcGhvcidcbi8+O1xuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UHJvcHM+IHtcbiAgdXNlU2V0Q3VycmVudFBhZ2UoJy9ob21lL25mdHMvY29sbGVjdGlvbnMnKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGRhdGFDb250ZXh0ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XG4gIGNvbnN0IHsgbmZ0Q29sbGVjdGlvbnMsIG5mdEl0ZW1zIH0gPSB1c2VHZXROZnRCeUFjY291bnQoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBub3RpZnkgPSB1c2VOb3RpZmljYXRpb24oKTtcblxuICBjb25zdCBzdWJIZWFkZXJCdXR0b246IEJ1dHRvblByb3BzW10gPSBbXG4gICAge1xuICAgICAgaWNvbjogcmVsb2FkSWNvbixcbiAgICAgIGRpc2FibGVkOiBsb2FkaW5nLFxuICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgbm90aWZ5KHtcbiAgICAgICAgICBpY29uOiA8QWN0aXZpdHlJbmRpY2F0b3Igc2l6ZT17MzJ9IC8+LFxuICAgICAgICAgIHN0eWxlOiB7IHRvcDogMjEwIH0sXG4gICAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxLjgsXG4gICAgICAgICAgY2xvc2FibGU6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6IHQoJ1JlbG9hZGluZycpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlbG9hZENyb24oeyBkYXRhOiAnbmZ0JyB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogcmlnaHRJY29uLFxuICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZSgnL3NldHRpbmdzL3Rva2Vucy9pbXBvcnQtbmZ0JywgeyBzdGF0ZTogeyBpc0V4dGVybmFsUmVxdWVzdDogZmFsc2UgfSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIF07XG5cbiAgY29uc3Qgc2VhcmNoQ29sbGVjdGlvbiA9IHVzZUNhbGxiYWNrKChjb2xsZWN0aW9uOiBOZnRDb2xsZWN0aW9uLCBzZWFyY2hUZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0TG93ZXJDYXNlID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGNvbGxlY3Rpb24uY29sbGVjdGlvbk5hbWU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSkgfHxcbiAgICAgIGNvbGxlY3Rpb24uY29sbGVjdGlvbklkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0TmZ0c0J5Q29sbGVjdGlvbiA9IHVzZUNhbGxiYWNrKChuZnRDb2xsZWN0aW9uOiBOZnRDb2xsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbmZ0TGlzdDogTmZ0SXRlbVtdID0gW107XG5cbiAgICBuZnRJdGVtcy5mb3JFYWNoKChuZnRJdGVtKSA9PiB7XG4gICAgICBpZiAobmZ0SXRlbS5jb2xsZWN0aW9uSWQgPT09IG5mdENvbGxlY3Rpb24uY29sbGVjdGlvbklkICYmIG5mdEl0ZW0uY2hhaW4gPT09IG5mdENvbGxlY3Rpb24uY2hhaW4pIHtcbiAgICAgICAgbmZ0TGlzdC5wdXNoKG5mdEl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5mdExpc3Q7XG4gIH0sIFtuZnRJdGVtc10pO1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2tDb2xsZWN0aW9uID0gdXNlQ2FsbGJhY2soKHN0YXRlOiBJTmZ0Q29sbGVjdGlvbkRldGFpbCkgPT4ge1xuICAgIG5hdmlnYXRlKCcvaG9tZS9uZnRzL2NvbGxlY3Rpb24tZGV0YWlsJywgeyBzdGF0ZSB9KTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3QgcmVuZGVyTmZ0Q29sbGVjdGlvbiA9IHVzZUNhbGxiYWNrKChuZnRDb2xsZWN0aW9uOiBOZnRDb2xsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbmZ0TGlzdCA9IGdldE5mdHNCeUNvbGxlY3Rpb24obmZ0Q29sbGVjdGlvbik7XG5cbiAgICBsZXQgZmFsbGJhY2tJbWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgZm9yIChjb25zdCBuZnQgb2YgbmZ0TGlzdCkgeyAvLyBmYWxsYmFjayB0byBhbnkgbmZ0IGltYWdlXG4gICAgICBpZiAobmZ0LmltYWdlKSB7XG4gICAgICAgIGZhbGxiYWNrSW1hZ2UgPSBuZnQuaW1hZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlOiBJTmZ0Q29sbGVjdGlvbkRldGFpbCA9IHsgY29sbGVjdGlvbkluZm86IG5mdENvbGxlY3Rpb24sIG5mdExpc3QgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TmZ0R2FsbGVyeVdyYXBwZXJcbiAgICAgICAgZmFsbGJhY2tJbWFnZT17ZmFsbGJhY2tJbWFnZX1cbiAgICAgICAgaGFuZGxlT25DbGljaz17aGFuZGxlT25DbGlja0NvbGxlY3Rpb259XG4gICAgICAgIGltYWdlPXtuZnRDb2xsZWN0aW9uLmltYWdlfVxuICAgICAgICBpdGVtQ291bnQ9e25mdExpc3QubGVuZ3RofVxuICAgICAgICBrZXk9e2Ake25mdENvbGxlY3Rpb24uY29sbGVjdGlvbklkfV8ke25mdENvbGxlY3Rpb24uY2hhaW59YH1cbiAgICAgICAgcm91dGluZ1BhcmFtcz17c3RhdGV9XG4gICAgICAgIHRpdGxlPXtuZnRDb2xsZWN0aW9uLmNvbGxlY3Rpb25OYW1lIHx8IG5mdENvbGxlY3Rpb24uY29sbGVjdGlvbklkfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbZ2V0TmZ0c0J5Q29sbGVjdGlvbiwgaGFuZGxlT25DbGlja0NvbGxlY3Rpb25dKTtcblxuICBjb25zdCBlbXB0eUJ1dHRvblByb3BzID0gdXNlTWVtbygoKTogQnV0dG9uUHJvcHMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiAoXG4gICAgICAgIDxJY29uXG4gICAgICAgICAgcGhvc3Bob3JJY29uPXtQbHVzQ2lyY2xlfVxuICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgICBjaGlsZHJlbjogdCgnQWRkIE5GVCcpLFxuICAgICAgc2hhcGU6ICdjaXJjbGUnLFxuICAgICAgc2l6ZTogJ3hzJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdGUoJy9zZXR0aW5ncy90b2tlbnMvaW1wb3J0LW5mdCcsIHsgc3RhdGU6IHsgaXNFeHRlcm5hbFJlcXVlc3Q6IGZhbHNlIH0gfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW25hdmlnYXRlLCB0XSk7XG5cbiAgY29uc3QgZW1wdHlOZnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFbXB0eUxpc3RcbiAgICAgICAgYnV0dG9uUHJvcHM9e2VtcHR5QnV0dG9uUHJvcHN9XG4gICAgICAgIGVtcHR5TWVzc2FnZT17dCgnVHJ5IGFkZGluZyBvbmUgbWFudWFsbHknKX1cbiAgICAgICAgZW1wdHlUaXRsZT17dCgnTm8gTkZUcyBmb3VuZCcpfVxuICAgICAgICBwaG9zcGhvckljb249e0ltYWdlfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbZW1wdHlCdXR0b25Qcm9wcywgdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2BuZnRfY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ25mdCddKX1cbiAgICA+XG4gICAgICA8TGF5b3V0LkJhc2VcbiAgICAgICAgc2hvd1N1YkhlYWRlcj17dHJ1ZX1cbiAgICAgICAgc3ViSGVhZGVyQmFja2dyb3VuZD17J3RyYW5zcGFyZW50J31cbiAgICAgICAgc3ViSGVhZGVyQ2VudGVyPXtmYWxzZX1cbiAgICAgICAgc3ViSGVhZGVySWNvbnM9e3N1YkhlYWRlckJ1dHRvbn1cbiAgICAgICAgc3ViSGVhZGVyUGFkZGluZ1ZlcnRpY2FsPXt0cnVlfVxuICAgICAgICB0aXRsZT17dDxzdHJpbmc+KCdZb3VyIGNvbGxlY3Rpb25zJyl9XG4gICAgICA+XG4gICAgICAgIDxTd0xpc3QuU2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT17Q04oJ25mdF9jb2xsZWN0aW9uX2xpc3RfX2NvbnRhaW5lcicpfVxuICAgICAgICAgIGRpc3BsYXlHcmlkPXt0cnVlfVxuICAgICAgICAgIGVuYWJsZVNlYXJjaElucHV0PXt0cnVlfVxuICAgICAgICAgIGdyaWRHYXA9eycxNHB4J31cbiAgICAgICAgICBsaXN0PXtuZnRDb2xsZWN0aW9uc31cbiAgICAgICAgICBtaW5Db2x1bW5XaWR0aD17JzE2MHB4J31cbiAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJOZnRDb2xsZWN0aW9ufVxuICAgICAgICAgIHJlbmRlck9uU2Nyb2xsPXt0cnVlfVxuICAgICAgICAgIHJlbmRlcldoZW5FbXB0eT17ZW1wdHlOZnR9XG4gICAgICAgICAgc2VhcmNoRnVuY3Rpb249e3NlYXJjaENvbGxlY3Rpb259XG4gICAgICAgICAgc2VhcmNoTWluQ2hhcmFjdGVyc0NvdW50PXsyfVxuICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyPXt0PHN0cmluZz4oJ1NlYXJjaCBjb2xsZWN0aW9uIG5hbWUnKX1cbiAgICAgICAgLz5cbiAgICAgIDwvTGF5b3V0LkJhc2U+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgTmZ0Q29sbGVjdGlvbnMgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxLFxuICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUxHLFxuXG4gICAgJyZfX2lubmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgJy5uZnRfY29sbGVjdGlvbl9saXN0X19jb250YWluZXInOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGZsZXg6IDEsXG5cbiAgICAgICcuYW50LXN3LWxpc3QnOiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IDEsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogLTFcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5mdENvbGxlY3Rpb25zO1xuIiwiLy8gQ29weXJpZ2h0IDIwMTktMjAyMiBAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpIGF1dGhvcnMgJiBjb250cmlidXRvcnNcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IERFRkFVTFRfTU9ERUxfVklFV0VSX1BST1BTIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgVGhlbWUsIFRoZW1lUHJvcHMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3R5cGVzJztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yLCBOZnRJdGVtIGFzIE5mdEl0ZW1fIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgTGF6eUxvYWRDb21wb25lbnQsIExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRoZW1lUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBmYWxsYmFja0ltYWdlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpdGVtQ291bnQ/OiBudW1iZXI7XG4gIGhhbmRsZU9uQ2xpY2s/OiAocGFyYW1zPzogYW55KSA9PiB2b2lkO1xuICByb3V0aW5nUGFyYW1zPzogYW55O1xuICBoYXZlM2RWaWV3ZXI/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycsIGZhbGxiYWNrSW1hZ2UsIGhhbmRsZU9uQ2xpY2ssIGhhdmUzZFZpZXdlciwgaW1hZ2UsIGl0ZW1Db3VudCwgcm91dGluZ1BhcmFtcywgdGl0bGUgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UHJvcHM+IHtcbiAgY29uc3QgeyBleHRlbmRUb2tlbiB9ID0gdXNlVGhlbWUoKSBhcyBUaGVtZTtcblxuICBjb25zdCBbc2hvd0ltYWdlLCBzZXRTaG93SW1hZ2VdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzaG93VmlkZW8sIHNldFNob3dWaWRlb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93M2RWaWV3ZXIsIHNldFNob3czZFZpZXdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBoYW5kbGVPbkNsaWNrICYmIGhhbmRsZU9uQ2xpY2socm91dGluZ1BhcmFtcyk7XG4gIH0sIFtoYW5kbGVPbkNsaWNrLCByb3V0aW5nUGFyYW1zXSk7XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW1hZ2UoZmFsc2UpO1xuICAgIHNldFNob3dWaWRlbyh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVZpZGVvRXJyb3IgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd1ZpZGVvKGZhbHNlKTtcbiAgICBzZXRTaG93M2RWaWV3ZXIodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRDb2xsZWN0aW9uSW1hZ2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGltYWdlKSB7XG4gICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfSBlbHNlIGlmIChmYWxsYmFja0ltYWdlKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2tJbWFnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0ZW5kVG9rZW4uZGVmYXVsdEltYWdlUGxhY2Vob2xkZXI7XG4gIH0sIFtleHRlbmRUb2tlbi5kZWZhdWx0SW1hZ2VQbGFjZWhvbGRlciwgZmFsbGJhY2tJbWFnZSwgaW1hZ2VdKTtcblxuICBjb25zdCBsb2FkaW5nUGxhY2Vob2xkZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmZ0X2dhbGxlcnlfd3JhcHBlcl9fbG9hZGluZyd9PlxuICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgICAgICBleGlzdEljb249e3RydWV9XG4gICAgICAgICAgcHJlZml4Q2xzPXsnJ31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRDb2xsZWN0aW9uSW1hZ2VOb2RlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChzaG93SW1hZ2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgZGVsYXlUaW1lPXsxMDAwMH1cbiAgICAgICAgICBoZWlnaHQ9eycxMDAlJ31cbiAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWFnZUVycm9yfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtsb2FkaW5nUGxhY2Vob2xkZXIoKX1cbiAgICAgICAgICBzcmM9e2dldENvbGxlY3Rpb25JbWFnZSgpfVxuICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzaG93VmlkZW8pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXp5TG9hZENvbXBvbmVudD5cbiAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICBoZWlnaHQ9eycxMDAlJ31cbiAgICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgb25FcnJvcj17aGFuZGxlVmlkZW9FcnJvcn1cbiAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAgICBzcmM9e2dldENvbGxlY3Rpb25JbWFnZSgpfVxuICAgICAgICAgICAgICB0eXBlPSd2aWRlby9tcDQnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgIDwvTGF6eUxvYWRDb21wb25lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChoYXZlM2RWaWV3ZXIgJiYgc2hvdzNkVmlld2VyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGF6eUxvYWRDb21wb25lbnQ+XG4gICAgICAgICAgey8qIEB0cy1pZ25vcmUgKi99XG4gICAgICAgICAgPG1vZGVsLXZpZXdlclxuICAgICAgICAgICAgYWx0PXsnbW9kZWwtdmlld2VyJ31cbiAgICAgICAgICAgIGFyLXN0YXR1cz17J25vdC1wcmVzZW50aW5nJ31cbiAgICAgICAgICAgIGF1dG8tcm90YXRlPXt0cnVlfVxuICAgICAgICAgICAgYXV0by1yb3RhdGUtZGVsYXk9ezEwMH1cbiAgICAgICAgICAgIGJvdW5kcz17J3RpZ2h0J31cbiAgICAgICAgICAgIGRpc2FibGUtcGFuPXt0cnVlfVxuICAgICAgICAgICAgZGlzYWJsZS1zY3JvbGw9e3RydWV9XG4gICAgICAgICAgICBkaXNhYmxlLXRhcD17dHJ1ZX1cbiAgICAgICAgICAgIGRpc2FibGUtem9vbT17dHJ1ZX1cbiAgICAgICAgICAgIGVudmlyb25tZW50LWltYWdlPXsnbmV1dHJhbCd9XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi1wcm9tcHQ9eydub25lJ31cbiAgICAgICAgICAgIGxvYWRpbmc9eydlYWdlcid9XG4gICAgICAgICAgICBzcmM9e2dldENvbGxlY3Rpb25JbWFnZSgpfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgICAgICAgIHRvdWNoLWFjdGlvbj17J25vbmUnfVxuICAgICAgICAgICAgey4uLkRFRkFVTFRfTU9ERUxfVklFV0VSX1BST1BTfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGF6eUxvYWRDb21wb25lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TGF6eUxvYWRJbWFnZVxuICAgICAgICBzcmM9e2V4dGVuZFRva2VuLmRlZmF1bHRJbWFnZVBsYWNlaG9sZGVyfVxuICAgICAgICB2aXNpYmxlQnlEZWZhdWx0PXt0cnVlfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbc2hvd0ltYWdlLCBzaG93VmlkZW8sIGhhdmUzZFZpZXdlciwgc2hvdzNkVmlld2VyLCBleHRlbmRUb2tlbi5kZWZhdWx0SW1hZ2VQbGFjZWhvbGRlciwgaGFuZGxlSW1hZ2VFcnJvciwgbG9hZGluZ1BsYWNlaG9sZGVyLCBnZXRDb2xsZWN0aW9uSW1hZ2UsIGhhbmRsZVZpZGVvRXJyb3JdKTtcblxuICByZXR1cm4gKFxuICAgIDxOZnRJdGVtX1xuICAgICAgY2xhc3NOYW1lPXtgbmZ0X2dhbGxlcnlfd3JhcHBlciAke2NsYXNzTmFtZX1gfVxuICAgICAgY291bnQ9e2l0ZW1Db3VudH1cbiAgICAgIGN1c3RvbUltYWdlTm9kZT17Z2V0Q29sbGVjdGlvbkltYWdlTm9kZSgpfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgTmZ0R2FsbGVyeVdyYXBwZXIgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKHtcbiAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHQxLFxuICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUxHLFxuXG4gICAgJy5fX2ltYWdlLXdyYXBwZXInOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgJy5uZnRfZ2FsbGVyeV93cmFwcGVyX19sb2FkaW5nJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjE3Ni4yIDk5LjcgMjI0LjIgOTkuNyAyMjQuMiA1MS43XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTkwLjIsMTkwLjJhODgsODgsMCwxLDEsMC0xMjQuNGwzNCwzMy45XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJkdW90b25lXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlsaW5lXCIsIHtcbiAgICBwb2ludHM6IFwiMTc2LjIgOTkuNyAyMjQuMiA5OS43IDIyNC4yIDUxLjdcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xOTAuMiwxOTAuMmE4OCw4OCwwLDEsMSwwLTEyNC40bDM0LDMzLjlcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIzMi4yLDUxLjd2NDhhOCw4LDAsMCwxLTgsOGgtNDhhOCw4LDAsMCwxLTUuNy0xMy42bDE4LjQtMTguNC00LjMtNC4zYTgwLDgwLDAsMSwwLDAsMTEzLjIsNy45LDcuOSwwLDAsMSwxMS4zLDAsOCw4LDAsMCwxLDAsMTEuMyw5Niw5NiwwLDEsMSwwLTEzNS44bDQuMyw0LjMsMTguMy0xOC4zYTgsOCwwLDAsMSw4LjctMS44QTguMiw4LjIsMCwwLDEsMjMyLjIsNTEuN1pcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicG9seWxpbmVcIiwge1xuICAgIHBvaW50czogXCIxNzYuMiA5OS43IDIyNC4yIDk5LjcgMjI0LjIgNTEuN1wiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE5MC4yLDE5MC4yYTg4LDg4LDAsMSwxLDAtMTI0LjRsMzQsMzMuOVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjE3Ni4yIDk5LjcgMjI0LjIgOTkuNyAyMjQuMiA1MS43XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xOTAuMiwxOTAuMmE4OCw4OCwwLDEsMSwwLTEyNC40bDM0LDMzLjlcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwicmVndWxhclwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5bGluZVwiLCB7XG4gICAgcG9pbnRzOiBcIjE3Ni4yIDk5LjcgMjI0LjIgOTkuNyAyMjQuMiA1MS43XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTkwLjIsMTkwLjJhODgsODgsMCwxLDEsMC0xMjQuNGwzNCwzMy45XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBBcnJvd0Nsb2Nrd2lzZSA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CYXNlLCBPYmplY3QuYXNzaWduKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIHJlbmRlclBhdGg6IHJlbmRlclBhdGhcbiAgfSkpO1xufSk7XG5BcnJvd0Nsb2Nrd2lzZS5kaXNwbGF5TmFtZSA9IFwiQXJyb3dDbG9ja3dpc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dDbG9ja3dpc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcnJvd0Nsb2Nrd2lzZS5lc20uanMubWFwXG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclBhdGhGb3JXZWlnaHQgfSBmcm9tICcuLi9saWIvaW5kZXguZXNtLmpzJztcbmltcG9ydCBJY29uQmFzZSBmcm9tICcuLi9saWIvSWNvbkJhc2UuZXNtLmpzJztcblxuLyogR0VORVJBVEVEIEZJTEUgKi9cbnZhciBwYXRoc0J5V2VpZ2h0ID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiYm9sZFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMjRcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMjE2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJkdW90b25lXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImZpbGxcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxNiwxMjBIMTM2VjQwYTgsOCwwLDAsMC0xNiwwdjgwSDQwYTgsOCwwLDAsMCwwLDE2aDgwdjgwYTgsOCwwLDAsMCwxNiwwVjEzNmg4MGE4LDgsMCwwLDAsMC0xNlpcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwibGlnaHRcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiNDBcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIyMTZcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjEyXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjIxNlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwidGhpblwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjhcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwicmVndWxhclwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMjE2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pKTtcbn0pO1xuXG52YXIgcmVuZGVyUGF0aCA9IGZ1bmN0aW9uIHJlbmRlclBhdGgod2VpZ2h0LCBjb2xvcikge1xuICByZXR1cm4gcmVuZGVyUGF0aEZvcldlaWdodCh3ZWlnaHQsIGNvbG9yLCBwYXRoc0J5V2VpZ2h0KTtcbn07XG5cbnZhciBQbHVzID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgcmVuZGVyUGF0aDogcmVuZGVyUGF0aFxuICB9KSk7XG59KTtcblBsdXMuZGlzcGxheU5hbWUgPSBcIlBsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGx1cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBsdXMuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbIkVtcHR5TGlzdCIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiRGF0YUNvbnRleHQiLCJ1c2VHZXROZnRCeUFjY291bnQiLCJ1c2VOb3RpZmljYXRpb24iLCJ1c2VTZXRDdXJyZW50UGFnZSIsInVzZVRyYW5zbGF0aW9uIiwicmVsb2FkQ3JvbiIsIk5mdEdhbGxlcnlXcmFwcGVyIiwiQWN0aXZpdHlJbmRpY2F0b3IiLCJJY29uIiwiU3dMaXN0IiwiQ04iLCJBcnJvd0Nsb2Nrd2lzZSIsIkltYWdlIiwiUGx1cyIsIlBsdXNDaXJjbGUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsInJlbG9hZEljb24iLCJyaWdodEljb24iLCJDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ0IiwibmF2aWdhdGUiLCJkYXRhQ29udGV4dCIsIm5mdENvbGxlY3Rpb25zIiwibmZ0SXRlbXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwibm90aWZ5Iiwic3ViSGVhZGVyQnV0dG9uIiwiaWNvbiIsImRpc2FibGVkIiwic2l6ZSIsIm9uQ2xpY2siLCJzdHlsZSIsInRvcCIsImRpcmVjdGlvbiIsImR1cmF0aW9uIiwiY2xvc2FibGUiLCJtZXNzYWdlIiwiZGF0YSIsInRoZW4iLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsInN0YXRlIiwiaXNFeHRlcm5hbFJlcXVlc3QiLCJzZWFyY2hDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInNlYXJjaFRleHQiLCJzZWFyY2hUZXh0TG93ZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJjb2xsZWN0aW9uTmFtZSIsImluY2x1ZGVzIiwiY29sbGVjdGlvbklkIiwiZ2V0TmZ0c0J5Q29sbGVjdGlvbiIsIm5mdENvbGxlY3Rpb24iLCJuZnRMaXN0IiwiZm9yRWFjaCIsIm5mdEl0ZW0iLCJjaGFpbiIsInB1c2giLCJoYW5kbGVPbkNsaWNrQ29sbGVjdGlvbiIsInJlbmRlck5mdENvbGxlY3Rpb24iLCJmYWxsYmFja0ltYWdlIiwibmZ0IiwiaW1hZ2UiLCJjb2xsZWN0aW9uSW5mbyIsImxlbmd0aCIsImVtcHR5QnV0dG9uUHJvcHMiLCJjaGlsZHJlbiIsInNoYXBlIiwiZW1wdHlOZnQiLCJhd2FpdFN0b3JlcyIsIk5mdENvbGxlY3Rpb25zIiwidGhlbWUiLCJ0b2tlbiIsImNvbG9yIiwiY29sb3JUZXh0TGlnaHQxIiwiZm9udFNpemUiLCJmb250U2l6ZUxHIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJmbGV4IiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkJvdHRvbSIsIkRFRkFVTFRfTU9ERUxfVklFV0VSX1BST1BTIiwiTmZ0SXRlbSIsIk5mdEl0ZW1fIiwiTGF6eUxvYWRDb21wb25lbnQiLCJMYXp5TG9hZEltYWdlIiwidXNlVGhlbWUiLCJoYW5kbGVPbkNsaWNrIiwiaGF2ZTNkVmlld2VyIiwiaXRlbUNvdW50Iiwicm91dGluZ1BhcmFtcyIsInRpdGxlIiwiZXh0ZW5kVG9rZW4iLCJzaG93SW1hZ2UiLCJzZXRTaG93SW1hZ2UiLCJzaG93VmlkZW8iLCJzZXRTaG93VmlkZW8iLCJzaG93M2RWaWV3ZXIiLCJzZXRTaG93M2RWaWV3ZXIiLCJoYW5kbGVJbWFnZUVycm9yIiwiaGFuZGxlVmlkZW9FcnJvciIsImdldENvbGxlY3Rpb25JbWFnZSIsImRlZmF1bHRJbWFnZVBsYWNlaG9sZGVyIiwibG9hZGluZ1BsYWNlaG9sZGVyIiwiZ2V0Q29sbGVjdGlvbkltYWdlTm9kZSIsIndpZHRoIiwib3ZlcmZsb3ciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9