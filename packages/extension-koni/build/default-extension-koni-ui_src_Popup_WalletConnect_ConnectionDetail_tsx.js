"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_WalletConnect_ConnectionDetail_tsx"],{

/***/ "../extension-koni-ui/src/Popup/WalletConnect/ConnectionDetail.tsx":
/*!*************************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/WalletConnect/ConnectionDetail.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/messaging */ "../extension-koni-ui/src/messaging/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_stores_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @subwallet/extension-koni-ui/stores/types */ "../extension-koni-ui/src/stores/types.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/network-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/image/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plugs.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/MagnifyingGlass.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Info.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0


















const renderNetworkEmpty = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.GeneralEmptyList, {});
const disconnectModalId = 'disconnect-connection-modal';
const networkModalId = 'connection-detail-networks-modal';
const Component = props => {
  const {
    className,
    session
  } = props;
  const {
    namespaces,
    peer: {
      metadata: dAppInfo
    },
    topic
  } = session;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
  const notification = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useNotification)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const {
    token
  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.useTheme)();
  const domain = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    try {
      return (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_12__.stripUrl)(dAppInfo.url);
    } catch (e) {
      return dAppInfo.url;
    }
  }, [dAppInfo.url]);
  const img = `https://icons.duckduckgo.com/ip2/${domain}.ico`;
  const {
    activeModal,
    inactiveModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__.ModalContext);
  const {
    chainInfoMap
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.chainStore);
  const {
    accounts
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.accountState);
  const chains = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    const chains = Object.values(namespaces).map(namespace => namespace.chains || []).flat();
    return (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainsToWalletConnectChainInfos)(chainInfoMap, chains);
  }, [namespaces, chainInfoMap]);
  const accountItems = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.getWCAccountList)(accounts, namespaces), [accounts, namespaces]);
  const modalProps = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => ({
    id: disconnectModalId,
    okText: t('Disconnect'),
    okButtonProps: {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
        weight: "fill"
      })
    },
    content: t('Once you disconnect, you will no longer see this connection on SubWallet and on your DApp.'),
    subTitle: t('Are you sure you want to disconnect?'),
    title: t('Disconnect'),
    type: 'error',
    closable: true
  }), [t]);
  const {
    handleSimpleConfirmModal
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useConfirmModal)(modalProps);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    handleSimpleConfirmModal().then(() => {
      setLoading(true);
      (0,_subwallet_extension_koni_ui_messaging__WEBPACK_IMPORTED_MODULE_3__.disconnectWalletConnectConnection)(topic).catch(e => {
        console.log(e);
        notification({
          type: 'error',
          message: t('Fail to disconnect')
        });
      });
    }).catch(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_5__.noop).finally(() => {
      setLoading(false);
    });
  }, [handleSimpleConfirmModal, notification, t, topic]);
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    navigate('/wallet-connect/list');
  }, [navigate]);
  const renderAccountItem = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(item => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountItemWithName, {
      accountName: item.name,
      address: item.address,
      avatarSize: token.sizeLG
    }, item.address);
  }, [token.sizeLG]);
  const renderChainItem = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(item => {
    var _item$chainInfo;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: ((_item$chainInfo = item.chainInfo) === null || _item$chainInfo === void 0 ? void 0 : _item$chainInfo.name) || t('Unknown network ({{slug}})', {
        replace: {
          slug: item.slug
        }
      }),
      networkKey: item.slug,
      networkMainLogoShape: "squircle",
      networkMainLogoSize: 28
    }, item.slug);
  }, [t]);
  const renderAccountEmpty = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      emptyMessage: t('Your accounts will appear here.'),
      emptyTitle: t('No account found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_17__["default"]
    });
  }, [t]);
  const openNetworkModal = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    activeModal(networkModalId);
  }, [activeModal]);
  const closeNetworkModal = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(() => {
    inactiveModal(networkModalId);
  }, [inactiveModal]);
  const searchFunction = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((item, searchText) => {
    var _item$chainInfo2;
    const searchTextLowerCase = searchText.toLowerCase();
    return (_item$chainInfo2 = item.chainInfo) === null || _item$chainInfo2 === void 0 ? void 0 : _item$chainInfo2.name.toLowerCase().includes(searchTextLowerCase);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
    onBack: goBack,
    rightFooterButton: {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
        phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
        weight: "fill"
      }),
      children: t('Disconnect'),
      schema: 'danger',
      loading: loading,
      onClick: onDisconnect
    },
    title: t('WalletConnect'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "body-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo, {
        hasBackgroundWrapper: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Default, {
          className: "dapp-info-container",
          label: t('DApp'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "dapp-info-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: "dapp-info-img",
              height: "var(--img-height)",
              src: img,
              width: "var(--img-width)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "dapp-info-domain",
              children: domain
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.MetaInfo.Default, {
          className: "network-container",
          label: t('Network'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "network-content",
            onClick: openNetworkModal,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.WCNetworkAvatarGroup, {
              networks: chains
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "network-name",
              children: t('{{number}} network(s)', {
                replace: {
                  number: chains.length
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
              phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_19__["default"],
              size: "sm",
              weight: "fill"
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "total-account",
        children: t('{{number}} account connected', {
          replace: {
            number: accountItems.length
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Section, {
        className: "account-list",
        displayRow: true,
        list: accountItems,
        renderItem: renderAccountItem,
        renderWhenEmpty: renderAccountEmpty,
        rowGap: "var(--row-gap)"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, 'network-modal'),
        id: networkModalId,
        onCancel: closeNetworkModal,
        title: t('Connected network'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_20__["default"].Section, {
          className: "network-list",
          displayRow: true,
          enableSearchInput: true,
          list: chains,
          renderItem: renderChainItem,
          renderWhenEmpty: renderNetworkEmpty,
          rowGap: "var(--row-gap)",
          searchFunction: searchFunction,
          searchPlaceholder: t('Network name')
        })
      })]
    })
  });
};
const Wrapper = props => {
  const {
    className
  } = props;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const {
    reduxStatus,
    sessions
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.walletConnect);
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const topic = params.topic;
  const session = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => sessions[topic], [sessions, topic]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (!session && reduxStatus === _subwallet_extension_koni_ui_stores_types__WEBPACK_IMPORTED_MODULE_4__.ReduxStatus.READY) {
      navigate('/wallet-connect/list');
    }
  }, [session, reduxStatus, navigate]);
  if (!session && reduxStatus === _subwallet_extension_koni_ui_stores_types__WEBPACK_IMPORTED_MODULE_4__.ReduxStatus.READY) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className),
    resolve: dataContext.awaitStores(['walletConnect']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Component, {
      className: className,
      session: session
    })
  });
};
const ConnectionDetail = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(Wrapper).withConfig({
  displayName: "ConnectionDetail",
  componentId: "sc-gicx43-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '.body-container': {
      padding: token.padding
    },
    '--row-gap': token.sizeXS,
    '.dapp-info-container': {
      '.__col.-to-right': {
        flex: 3,
        '.__value': {
          overflow: 'hidden',
          maxWidth: '100%'
        }
      },
      '.dapp-info-content': {
        display: 'flex',
        flexDirection: 'row',
        gap: token.sizeXS,
        alignItems: 'center',
        '.dapp-info-img': {
          '--img-height': token.sizeLG,
          '--img-width': token.sizeLG
        },
        '.dapp-info-domain': {
          overflow: 'hidden',
          textWrap: 'nowrap',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }
    },
    '.network-container': {
      '.__col.-to-right': {
        flex: 3,
        '.__value': {
          overflow: 'hidden',
          maxWidth: '100%'
        }
      },
      '.network-content': {
        display: 'flex',
        flexDirection: 'row',
        gap: token.sizeXS,
        alignItems: 'center',
        cursor: 'pointer'
      }
    },
    '.account-list': {
      margin: `0 -${token.margin}px`,
      '.ant-sw-list-wrapper': {
        flexBasis: 'auto'
      }
    },
    '.total-account': {
      marginTop: token.margin,
      marginBottom: token.marginXXS,
      color: token.colorTextTertiary,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6
    },
    '&.network-modal': {
      '.ant-sw-modal-body': {
        padding: `${token.padding}px 0 ${token.padding}px`,
        flexDirection: 'column',
        display: 'flex'
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionDetail);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfV2FsbGV0Q29ubmVjdF9Db25uZWN0aW9uRGV0YWlsX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHMkQ7QUFDcUc7QUFDaEY7QUFDbUI7QUFDUjtBQUNuQjtBQUVxQztBQUNHO0FBRXBGO0FBQ2tDO0FBQ3VCO0FBQ3RDO0FBQ047QUFDTTtBQUNNO0FBQUE7QUFBQTtBQU9yRCxNQUFNc0Msa0JBQWtCLEdBQUcsbUJBQU0sdURBQUMscUZBQWdCLEtBQUc7QUFFckQsTUFBTUMsaUJBQWlCLEdBQUcsNkJBQTZCO0FBQ3ZELE1BQU1DLGNBQWMsR0FBRyxrQ0FBa0M7QUFFekQsTUFBTUMsU0FBbUMsR0FBSUMsS0FBSyxJQUFLO0VBQ3JELE1BQU07SUFBRUMsU0FBUztJQUFFQztFQUFRLENBQUMsR0FBR0YsS0FBSztFQUNwQyxNQUFNO0lBQUVHLFVBQVU7SUFBRUMsSUFBSSxFQUFFO01BQUVDLFFBQVEsRUFBRUM7SUFBUyxDQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFHTCxPQUFPO0VBRW5FLE1BQU07SUFBRU07RUFBRSxDQUFDLEdBQUdqQiw2REFBYyxFQUFFO0VBQzlCLE1BQU1rQixZQUFZLEdBQUd6QyxtRkFBZSxFQUFFO0VBQ3RDLE1BQU0wQyxRQUFRLEdBQUdqQiw4REFBVyxFQUFFO0VBQzlCLE1BQU07SUFBRWtCO0VBQU0sQ0FBQyxHQUFHaEIsNERBQVEsRUFBVztFQUVyQyxNQUFNaUIsTUFBTSxHQUFHdkIsOENBQU8sQ0FBQyxNQUFNO0lBQzNCLElBQUk7TUFDRixPQUFPL0IsMEVBQVEsQ0FBQ2dELFFBQVEsQ0FBQ08sR0FBRyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7TUFDVixPQUFPUixRQUFRLENBQUNPLEdBQUc7SUFDckI7RUFDRixDQUFDLEVBQUUsQ0FBQ1AsUUFBUSxDQUFDTyxHQUFHLENB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RCxPQUFPLEVBQUU7TUFDWDtJQUNGO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLGlFQUFlUCxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9XYWxsZXRDb25uZWN0L0Nvbm5lY3Rpb25EZXRhaWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBBYnN0cmFjdEFkZHJlc3NKc29uLCBBY2NvdW50SnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBzdHJpcFVybCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvdXRpbHMnO1xuaW1wb3J0IHsgQWNjb3VudEl0ZW1XaXRoTmFtZSwgRW1wdHlMaXN0LCBHZW5lcmFsRW1wdHlMaXN0LCBMYXlvdXQsIE1ldGFJbmZvLCBQYWdlV3JhcHBlciwgV0NOZXR3b3JrQXZhdGFyR3JvdXAgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpcm1Nb2RhbCwgdXNlTm90aWZpY2F0aW9uLCB1c2VTZWxlY3RvciB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvaG9va3MnO1xuaW1wb3J0IHsgZGlzY29ubmVjdFdhbGxldENvbm5lY3RDb25uZWN0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgUmVkdXhTdGF0dXMgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL3N0b3Jlcy90eXBlcyc7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVQcm9wcywgV2FsbGV0Q29ubmVjdENoYWluSW5mbyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgY2hhaW5zVG9XYWxsZXRDb25uZWN0Q2hhaW5JbmZvcywgZ2V0V0NBY2NvdW50TGlzdCwgbm9vcCB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdXRpbHMnO1xuaW1wb3J0IHsgSWNvbiwgSW1hZ2UsIE1vZGFsQ29udGV4dCwgTmV0d29ya0l0ZW0sIFN3TGlzdCwgU3dNb2RhbCwgU3dNb2RhbEZ1bmNQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgU2Vzc2lvblR5cGVzIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvdHlwZXMnO1xuaW1wb3J0IENOIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgSW5mbywgTWFnbmlmeWluZ0dsYXNzLCBQbHVncyB9IGZyb20gJ3Bob3NwaG9yLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBDb21wb25lbnRQcm9wcyB7XG4gIHNlc3Npb246IFNlc3Npb25UeXBlcy5TdHJ1Y3Q7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgcmVuZGVyTmV0d29ya0VtcHR5ID0gKCkgPT4gPEdlbmVyYWxFbXB0eUxpc3QgLz47XG5cbmNvbnN0IGRpc2Nvbm5lY3RNb2RhbElkID0gJ2Rpc2Nvbm5lY3QtY29ubmVjdGlvbi1tb2RhbCc7XG5jb25zdCBuZXR3b3JrTW9kYWxJZCA9ICdjb25uZWN0aW9uLWRldGFpbC1uZXR3b3Jrcy1tb2RhbCc7XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8Q29tcG9uZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzZXNzaW9uIH0gPSBwcm9wcztcbiAgY29uc3QgeyBuYW1lc3BhY2VzLCBwZWVyOiB7IG1ldGFkYXRhOiBkQXBwSW5mbyB9LCB0b3BpYyB9ID0gc2Vzc2lvbjtcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHVzZU5vdGlmaWNhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVRoZW1lKCkgYXMgVGhlbWU7XG5cbiAgY29uc3QgZG9tYWluID0gdXNlTWVtbygoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBzdHJpcFVybChkQXBwSW5mby51cmwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBkQXBwSW5mby51cmw7XG4gICAgfVxuICB9LCBbZEFwcEluZm8udXJsXSk7XG5cbiAgY29uc3QgaW1nID0gYGh0dHBzOi8vaWNvbnMuZHVja2R1Y2tnby5jb20vaXAyLyR7ZG9tYWlufS5pY29gO1xuXG4gIGNvbnN0IHsgYWN0aXZlTW9kYWwsIGluYWN0aXZlTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICBjb25zdCB7IGNoYWluSW5mb01hcCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jaGFpblN0b3JlKTtcbiAgY29uc3QgeyBhY2NvdW50cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUpO1xuXG4gIGNvbnN0IGNoYWlucyA9IHVzZU1lbW8oKCk6IFdhbGxldENvbm5lY3RDaGFpbkluZm9bXSA9PiB7XG4gICAgY29uc3QgY2hhaW5zID0gT2JqZWN0LnZhbHVlcyhuYW1lc3BhY2VzKS5tYXAoKG5hbWVzcGFjZSkgPT4gbmFtZXNwYWNlLmNoYWlucyB8fCBbXSkuZmxhdCgpO1xuXG4gICAgcmV0dXJuIGNoYWluc1RvV2FsbGV0Q29ubmVjdENoYWluSW5mb3MoY2hhaW5JbmZvTWFwLCBjaGFpbnMpO1xuICB9LCBbbmFtZXNwYWNlcywgY2hhaW5JbmZvTWFwXSk7XG5cbiAgY29uc3QgYWNjb3VudEl0ZW1zID0gdXNlTWVtbygoKTogQWJzdHJhY3RBZGRyZXNzSnNvbltdID0+IGdldFdDQWNjb3VudExpc3QoYWNjb3VudHMsIG5hbWVzcGFjZXMpLCBbYWNjb3VudHMsIG5hbWVzcGFjZXNdKTtcblxuICBjb25zdCBtb2RhbFByb3BzID0gdXNlTWVtbygoKTogUGFydGlhbDxTd01vZGFsRnVuY1Byb3BzPiA9PiAoe1xuICAgIGlkOiBkaXNjb25uZWN0TW9kYWxJZCxcbiAgICBva1RleHQ6IHQoJ0Rpc2Nvbm5lY3QnKSxcbiAgICBva0J1dHRvblByb3BzOiB7XG4gICAgICBpY29uOiAoXG4gICAgICAgIDxJY29uXG4gICAgICAgICAgcGhvc3Bob3JJY29uPXtQbHVnc31cbiAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSxcbiAgICBjb250ZW50OiB0KCdPbmNlIHlvdSBkaXNjb25uZWN0LCB5b3Ugd2lsbCBubyBsb25nZXIgc2VlIHRoaXMgY29ubmVjdGlvbiBvbiBTdWJXYWxsZXQgYW5kIG9uIHlvdXIgREFwcC4nKSxcbiAgICBzdWJUaXRsZTogdCgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRpc2Nvbm5lY3Q/JyksXG4gICAgdGl0bGU6IHQoJ0Rpc2Nvbm5lY3QnKSxcbiAgICB0eXBlOiAnZXJyb3InLFxuICAgIGNsb3NhYmxlOiB0cnVlXG4gIH0pLCBbdF0pO1xuXG4gIGNvbnN0IHsgaGFuZGxlU2ltcGxlQ29uZmlybU1vZGFsIH0gPSB1c2VDb25maXJtTW9kYWwobW9kYWxQcm9wcyk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uRGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBoYW5kbGVTaW1wbGVDb25maXJtTW9kYWwoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBkaXNjb25uZWN0V2FsbGV0Q29ubmVjdENvbm5lY3Rpb24odG9waWMpXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0ZhaWwgdG8gZGlzY29ubmVjdCcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2gobm9vcClcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW2hhbmRsZVNpbXBsZUNvbmZpcm1Nb2RhbCwgbm90aWZpY2F0aW9uLCB0LCB0b3BpY10pO1xuXG4gIGNvbnN0IGdvQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgnL3dhbGxldC1jb25uZWN0L2xpc3QnKTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgY29uc3QgcmVuZGVyQWNjb3VudEl0ZW0gPSB1c2VDYWxsYmFjaygoaXRlbTogQWNjb3VudEpzb24pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFjY291bnRJdGVtV2l0aE5hbWVcbiAgICAgICAgYWNjb3VudE5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgYWRkcmVzcz17aXRlbS5hZGRyZXNzfVxuICAgICAgICBhdmF0YXJTaXplPXt0b2tlbi5zaXplTEd9XG4gICAgICAgIGtleT17aXRlbS5hZGRyZXNzfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbdG9rZW4uc2l6ZUxHXSk7XG5cbiAgY29uc3QgcmVuZGVyQ2hhaW5JdGVtID0gdXNlQ2FsbGJhY2soKGl0ZW06IFdhbGxldENvbm5lY3RDaGFpbkluZm8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5ldHdvcmtJdGVtXG4gICAgICAgIGtleT17aXRlbS5zbHVnfVxuICAgICAgICBuYW1lPXtpdGVtLmNoYWluSW5mbz8ubmFtZSB8fCB0KCdVbmtub3duIG5ldHdvcmsgKHt7c2x1Z319KScsIHsgcmVwbGFjZTogeyBzbHVnOiBpdGVtLnNsdWcgfSB9KX1cbiAgICAgICAgbmV0d29ya0tleT17aXRlbS5zbHVnfVxuICAgICAgICBuZXR3b3JrTWFpbkxvZ29TaGFwZT0nc3F1aXJjbGUnXG4gICAgICAgIG5ldHdvcmtNYWluTG9nb1NpemU9ezI4fVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IHJlbmRlckFjY291bnRFbXB0eSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVtcHR5TGlzdFxuICAgICAgICBlbXB0eU1lc3NhZ2U9e3QoJ1lvdXIgYWNjb3VudHMgd2lsbCBhcHBlYXIgaGVyZS4nKX1cbiAgICAgICAgZW1wdHlUaXRsZT17dCgnTm8gYWNjb3VudCBmb3VuZCcpfVxuICAgICAgICBwaG9zcGhvckljb249e01hZ25pZnlpbmdHbGFzc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW3RdKTtcblxuICBjb25zdCBvcGVuTmV0d29ya01vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGFjdGl2ZU1vZGFsKG5ldHdvcmtNb2RhbElkKTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3QgY2xvc2VOZXR3b3JrTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW5hY3RpdmVNb2RhbChuZXR3b3JrTW9kYWxJZCk7XG4gIH0sIFtpbmFjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3Qgc2VhcmNoRnVuY3Rpb24gPSB1c2VDYWxsYmFjaygoaXRlbTogV2FsbGV0Q29ubmVjdENoYWluSW5mbywgc2VhcmNoVGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dExvd2VyQ2FzZSA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiAoXG4gICAgICBpdGVtLmNoYWluSW5mbz8ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHRMb3dlckNhc2UpXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgb25CYWNrPXtnb0JhY2t9XG4gICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICBpY29uOiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIHBob3NwaG9ySWNvbj17UGx1Z3N9XG4gICAgICAgICAgICB3ZWlnaHQ9J2ZpbGwnXG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgICAgY2hpbGRyZW46IHQoJ0Rpc2Nvbm5lY3QnKSxcbiAgICAgICAgc2NoZW1hOiAnZGFuZ2VyJyxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgb25DbGljazogb25EaXNjb25uZWN0XG4gICAgICB9fVxuICAgICAgdGl0bGU9e3QoJ1dhbGxldENvbm5lY3QnKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keS1jb250YWluZXInPlxuICAgICAgICA8TWV0YUluZm9cbiAgICAgICAgICBoYXNCYWNrZ3JvdW5kV3JhcHBlclxuICAgICAgICA+XG4gICAgICAgICAgPE1ldGFJbmZvLkRlZmF1bHRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZGFwcC1pbmZvLWNvbnRhaW5lcidcbiAgICAgICAgICAgIGxhYmVsPXt0KCdEQXBwJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhcHAtaW5mby1jb250ZW50Jz5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkYXBwLWluZm8taW1nJ1xuICAgICAgICAgICAgICAgIGhlaWdodD0ndmFyKC0taW1nLWhlaWdodCknXG4gICAgICAgICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgICAgICAgd2lkdGg9J3ZhcigtLWltZy13aWR0aCknXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXBwLWluZm8tZG9tYWluJz57ZG9tYWlufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9NZXRhSW5mby5EZWZhdWx0PlxuICAgICAgICAgIDxNZXRhSW5mby5EZWZhdWx0XG4gICAgICAgICAgICBjbGFzc05hbWU9J25ldHdvcmstY29udGFpbmVyJ1xuICAgICAgICAgICAgbGFiZWw9e3QoJ05ldHdvcmsnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nbmV0d29yay1jb250ZW50J1xuICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTmV0d29ya01vZGFsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8V0NOZXR3b3JrQXZhdGFyR3JvdXAgbmV0d29ya3M9e2NoYWluc30gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldHdvcmstbmFtZSc+XG4gICAgICAgICAgICAgICAge3QoJ3t7bnVtYmVyfX0gbmV0d29yayhzKScsIHsgcmVwbGFjZTogeyBudW1iZXI6IGNoYWlucy5sZW5ndGggfSB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgcGhvc3Bob3JJY29uPXtJbmZvfVxuICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgIHdlaWdodD0nZmlsbCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWV0YUluZm8uRGVmYXVsdD5cbiAgICAgICAgPC9NZXRhSW5mbz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvdGFsLWFjY291bnQnPlxuICAgICAgICAgIHt0KCd7e251bWJlcn19IGFjY291bnQgY29ubmVjdGVkJywgeyByZXBsYWNlOiB7IG51bWJlcjogYWNjb3VudEl0ZW1zLmxlbmd0aCB9IH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFN3TGlzdC5TZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdhY2NvdW50LWxpc3QnXG4gICAgICAgICAgZGlzcGxheVJvd1xuICAgICAgICAgIGxpc3Q9e2FjY291bnRJdGVtc31cbiAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJBY2NvdW50SXRlbX1cbiAgICAgICAgICByZW5kZXJXaGVuRW1wdHk9e3JlbmRlckFjY291bnRFbXB0eX1cbiAgICAgICAgICByb3dHYXA9J3ZhcigtLXJvdy1nYXApJ1xuICAgICAgICAvPlxuICAgICAgICA8U3dNb2RhbFxuICAgICAgICAgIGNsYXNzTmFtZT17Q04oY2xhc3NOYW1lLCAnbmV0d29yay1tb2RhbCcpfVxuICAgICAgICAgIGlkPXtuZXR3b3JrTW9kYWxJZH1cbiAgICAgICAgICBvbkNhbmNlbD17Y2xvc2VOZXR3b3JrTW9kYWx9XG4gICAgICAgICAgdGl0bGU9e3QoJ0Nvbm5lY3RlZCBuZXR3b3JrJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8U3dMaXN0LlNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbmV0d29yay1saXN0J1xuICAgICAgICAgICAgZGlzcGxheVJvd1xuICAgICAgICAgICAgZW5hYmxlU2VhcmNoSW5wdXQ9e3RydWV9XG4gICAgICAgICAgICBsaXN0PXtjaGFpbnN9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJDaGFpbkl0ZW19XG4gICAgICAgICAgICByZW5kZXJXaGVuRW1wdHk9e3JlbmRlck5ldHdvcmtFbXB0eX1cbiAgICAgICAgICAgIHJvd0dhcD0ndmFyKC0tcm93LWdhcCknXG4gICAgICAgICAgICBzZWFyY2hGdW5jdGlvbj17c2VhcmNoRnVuY3Rpb259XG4gICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dDxzdHJpbmc+KCdOZXR3b3JrIG5hbWUnKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N3TW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgKTtcbn07XG5cbnR5cGUgUHJvcHMgPSBUaGVtZVByb3BzO1xuXG5jb25zdCBXcmFwcGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgY29uc3QgZGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcblxuICBjb25zdCB7IHJlZHV4U3RhdHVzLCBzZXNzaW9ucyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53YWxsZXRDb25uZWN0KTtcblxuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcblxuICBjb25zdCB0b3BpYyA9IHBhcmFtcy50b3BpYyBhcyBzdHJpbmc7XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZU1lbW8oKCkgPT4gc2Vzc2lvbnNbdG9waWNdLCBbc2Vzc2lvbnMsIHRvcGljXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNlc3Npb24gJiYgcmVkdXhTdGF0dXMgPT09IFJlZHV4U3RhdHVzLlJFQURZKSB7XG4gICAgICBuYXZpZ2F0ZSgnL3dhbGxldC1jb25uZWN0L2xpc3QnKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uLCByZWR1eFN0YXR1cywgbmF2aWdhdGVdKTtcblxuICBpZiAoIXNlc3Npb24gJiYgcmVkdXhTdGF0dXMgPT09IFJlZHV4U3RhdHVzLlJFQURZKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfVxuICAgICAgcmVzb2x2ZT17ZGF0YUNvbnRleHQuYXdhaXRTdG9yZXMoWyd3YWxsZXRDb25uZWN0J10pfVxuICAgID5cbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHNlc3Npb249e3Nlc3Npb259XG4gICAgICAvPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBDb25uZWN0aW9uRGV0YWlsID0gc3R5bGVkKFdyYXBwZXIpPFByb3BzPigoeyB0aGVtZTogeyB0b2tlbiB9IH06IFByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5ib2R5LWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmdcbiAgICB9LFxuICAgICctLXJvdy1nYXAnOiB0b2tlbi5zaXplWFMsXG5cbiAgICAnLmRhcHAtaW5mby1jb250YWluZXInOiB7XG4gICAgICAnLl9fY29sLi10by1yaWdodCc6IHtcbiAgICAgICAgZmxleDogMyxcblxuICAgICAgICAnLl9fdmFsdWUnOiB7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJy5kYXBwLWluZm8tY29udGVudCc6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgZ2FwOiB0b2tlbi5zaXplWFMsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXG4gICAgICAgICcuZGFwcC1pbmZvLWltZyc6IHtcbiAgICAgICAgICAnLS1pbWctaGVpZ2h0JzogdG9rZW4uc2l6ZUxHLFxuICAgICAgICAgICctLWltZy13aWR0aCc6IHRva2VuLnNpemVMR1xuICAgICAgICB9LFxuXG4gICAgICAgICcuZGFwcC1pbmZvLWRvbWFpbic6IHtcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgdGV4dFdyYXA6ICdub3dyYXAnLFxuICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgICcubmV0d29yay1jb250YWluZXInOiB7XG4gICAgICAnLl9fY29sLi10by1yaWdodCc6IHtcbiAgICAgICAgZmxleDogMyxcblxuICAgICAgICAnLl9fdmFsdWUnOiB7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJy5uZXR3b3JrLWNvbnRlbnQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGdhcDogdG9rZW4uc2l6ZVhTLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5hY2NvdW50LWxpc3QnOiB7XG4gICAgICBtYXJnaW46IGAwIC0ke3Rva2VuLm1hcmdpbn1weGAsXG5cbiAgICAgICcuYW50LXN3LWxpc3Qtd3JhcHBlcic6IHtcbiAgICAgICAgZmxleEJhc2lzOiAnYXV0bydcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgJy50b3RhbC1hY2NvdW50Jzoge1xuICAgICAgbWFyZ2luVG9wOiB0b2tlbi5tYXJnaW4sXG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblhYUyxcbiAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHRUZXJ0aWFyeSxcbiAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc2LFxuICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodEhlYWRpbmc2XG4gICAgfSxcblxuICAgICcmLm5ldHdvcmstbW9kYWwnOiB7XG4gICAgICAnLmFudC1zdy1tb2RhbC1ib2R5Jzoge1xuICAgICAgICBwYWRkaW5nOiBgJHt0b2tlbi5wYWRkaW5nfXB4IDAgJHt0b2tlbi5wYWRkaW5nfXB4YCxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uRGV0YWlsO1xuIl0sIm5hbWVzIjpbInN0cmlwVXJsIiwiQWNjb3VudEl0ZW1XaXRoTmFtZSIsIkVtcHR5TGlzdCIsIkdlbmVyYWxFbXB0eUxpc3QiLCJMYXlvdXQiLCJNZXRhSW5mbyIsIlBhZ2VXcmFwcGVyIiwiV0NOZXR3b3JrQXZhdGFyR3JvdXAiLCJEYXRhQ29udGV4dCIsInVzZUNvbmZpcm1Nb2RhbCIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVNlbGVjdG9yIiwiZGlzY29ubmVjdFdhbGxldENvbm5lY3RDb25uZWN0aW9uIiwiUmVkdXhTdGF0dXMiLCJjaGFpbnNUb1dhbGxldENvbm5lY3RDaGFpbkluZm9zIiwiZ2V0V0NBY2NvdW50TGlzdCIsIm5vb3AiLCJJY29uIiwiSW1hZ2UiLCJNb2RhbENvbnRleHQiLCJOZXR3b3JrSXRlbSIsIlN3TGlzdCIsIlN3TW9kYWwiLCJDTiIsIkluZm8iLCJNYWduaWZ5aW5nR2xhc3MiLCJQbHVncyIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VQYXJhbXMiLCJ1c2VOYXZpZ2F0ZSIsInN0eWxlZCIsInVzZVRoZW1lIiwicmVuZGVyTmV0d29ya0VtcHR5IiwiZGlzY29ubmVjdE1vZGFsSWQiLCJuZXR3b3JrTW9kYWxJZCIsIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwic2Vzc2lvbiIsIm5hbWVzcGFjZXMiLCJwZWVyIiwibWV0YWRhdGEiLCJkQXBwSW5mbyIsInRvcGljIiwidCIsIm5vdGlmaWNhdGlvbiIsIm5hdmlnYXRlIiwidG9rZW4iLCJkb21haW4iLCJ1cmwiLCJlIiwiaW1nIiwiYWN0aXZlTW9kYWwiLCJpbmFjdGl2ZU1vZGFsIiwiY2hhaW5JbmZvTWFwIiwic3RhdGUiLCJjaGFpblN0b3JlIiwiYWNjb3VudHMiLCJhY2NvdW50U3RhdGUiLCJjaGFpbnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJuYW1lc3BhY2UiLCJmbGF0IiwiYWNjb3VudEl0ZW1zIiwibW9kYWxQcm9wcyIsImlkIiwib2tUZXh0Iiwib2tCdXR0b25Qcm9wcyIsImljb24iLCJjb250ZW50Iiwic3ViVGl0bGUiLCJ0aXRsZSIsInR5cGUiLCJjbG9zYWJsZSIsImhhbmRsZVNpbXBsZUNvbmZpcm1Nb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25EaXNjb25uZWN0IiwidGhlbiIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwiZ29CYWNrIiwicmVuZGVyQWNjb3VudEl0ZW0iLCJpdGVtIiwibmFtZSIsImFkZHJlc3MiLCJzaXplTEciLCJyZW5kZXJDaGFpbkl0ZW0iLCJjaGFpbkluZm8iLCJyZXBsYWNlIiwic2x1ZyIsInJlbmRlckFjY291bnRFbXB0eSIsIm9wZW5OZXR3b3JrTW9kYWwiLCJjbG9zZU5ldHdvcmtNb2RhbCIsInNlYXJjaEZ1bmN0aW9uIiwic2VhcmNoVGV4dCIsInNlYXJjaFRleHRMb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2hpbGRyZW4iLCJzY2hlbWEiLCJvbkNsaWNrIiwibnVtYmVyIiwibGVuZ3RoIiwiV3JhcHBlciIsImRhdGFDb250ZXh0IiwicmVkdXhTdGF0dXMiLCJzZXNzaW9ucyIsIndhbGxldENvbm5lY3QiLCJwYXJhbXMiLCJSRUFEWSIsImF3YWl0U3RvcmVzIiwiQ29ubmVjdGlvbkRldGFpbCIsInRoZW1lIiwicGFkZGluZyIsInNpemVYUyIsImZsZXgiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJhbGlnbkl0ZW1zIiwidGV4dFdyYXAiLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwiY3Vyc29yIiwibWFyZ2luIiwiZmxleEJhc2lzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luWFhTIiwiY29sb3IiLCJjb2xvclRleHRUZXJ0aWFyeSIsImZvbnRTaXplIiwiZm9udFNpemVIZWFkaW5nNiIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SGVhZGluZzYiXSwic291cmNlUm9vdCI6IiJ9