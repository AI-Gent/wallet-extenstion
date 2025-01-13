"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_WalletConnect_ConnectionList_tsx"],{

/***/ "../extension-koni-ui/src/Popup/WalletConnect/ConnectionList.tsx":
/*!***********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/WalletConnect/ConnectionList.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/extension-base/utils */ "../extension-base/src/utils/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/GlobeHemisphereWest.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0













const Component = props => {
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const {
    sessions
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.walletConnect);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => Object.values(sessions), [sessions]);
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    navigate('/settings/list');
  }, [navigate]);
  const onClickItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(topic => {
    navigate(`/wallet-connect/detail/${topic}`);
  }, [navigate]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(session => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.ConnectionItem, {
      onClick: onClickItem,
      session: session
    }, session.topic);
  }, [onClickItem]);
  const onAdd = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    navigate('/wallet-connect/connect');
  }, [navigate]);
  const renderEmptyList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      emptyMessage: t('Your dApps will show up here'),
      emptyTitle: t('No dApps found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_8__["default"]
    });
  }, [t]);
  const searchFunc = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((item, searchText) => {
    const searchTextLowerCase = searchText.toLowerCase();
    const metadata = item.peer.metadata;
    let id;
    try {
      id = (0,_subwallet_extension_base_utils__WEBPACK_IMPORTED_MODULE_9__.stripUrl)(metadata.url);
    } catch (e) {
      id = metadata.url;
    }
    const name = metadata.name;
    return id.toLowerCase().includes(searchTextLowerCase) || name.toLowerCase().includes(searchTextLowerCase);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
    onBack: goBack,
    rightFooterButton: {
      children: t('New connection'),
      onClick: onAdd,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
        customIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.WalletConnect, {
          height: "1em",
          width: "1em"
        }),
        type: "customIcon"
      })
    },
    title: t('WalletConnect'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className),
      resolve: dataContext.awaitStores(['walletConnect']),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"].Section, {
        className: "sessions-list",
        displayRow: true,
        enableSearchInput: true,
        list: items,
        renderItem: renderItem,
        renderWhenEmpty: renderEmptyList,
        rowGap: "var(--row-gap)",
        searchFunction: searchFunc,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search or enter a website')
      })
    })
  });
};
const ConnectionList = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])(Component).withConfig({
  displayName: "ConnectionList",
  componentId: "sc-1ewef21-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    padding: token.padding,
    display: 'flex',
    flexDirection: 'column',
    '.sessions-list': {
      '--row-gap': token.sizeXS,
      margin: `0 -${token.margin}px`
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionList);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX1dhbGxldENvbm5lY3RfQ29ubmVjdGlvbkxpc3RfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUUyRDtBQUM2RDtBQUN4QztBQUNmO0FBRWQ7QUFFdkI7QUFDeUI7QUFDVztBQUNqQjtBQUNBO0FBQ1I7QUFBQTtBQUl2QyxNQUFNbUIsU0FBMEIsR0FBSUMsS0FBWSxJQUFLO0VBQ25ELE1BQU07SUFBRUM7RUFBVSxDQUFDLEdBQUdELEtBQUs7RUFFM0IsTUFBTTtJQUFFRTtFQUFFLENBQUMsR0FBR04sNkRBQWMsRUFBRTtFQUM5QixNQUFNTyxRQUFRLEdBQUdOLDZEQUFXLEVBQUU7RUFFOUIsTUFBTU8sV0FBVyxHQUFHVixpREFBVSxDQUFDUiwwRkFBVyxDQUFDO0VBRTNDLE1BQU07SUFBRW1CO0VBQVMsQ0FBQyxHQUFHbEIsK0VBQVcsQ0FBRW1CLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxhQUFhLENBQUM7RUFFaEUsTUFBTUMsS0FBSyxHQUFHYiw4Q0FBTyxDQUFDLE1BQU1jLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDTCxRQUFRLENBQUMsRUFBRSxDQUFDQSxRQUFRLENBQUMsQ0FBQztFQUVoRSxNQUFNTSxNQUFNLEdBQUdsQixrREFBVyxDQUFDLE1BQU07SUFDL0JVLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM1QixDQUFDLEVBQUUsQ0FBQ0EsUUFBUSxDQUFDLENBQUM7RUFFZCxNQUFNUyxXQUFXLEdBQUduQixrREFBVyxDQUFFb0IsS0FBYSxJQUFLO0lBQ2pEVixRQUFRLENBQUUsMEJBQXlCVSxLQUFNLEVBQUMsQ0FBQztFQUM3QyxDQUFDLEVBQUUsQ0FBQ1YsUUFBUSxDQUFDLENBQUM7RUFFZCxNQUFNVyxVQUFVLEdBQUdyQixrREFBVyxDQUFFc0IsT0FBNEIsSUFBc0I7SUFDaEYsb0JBQ0UsdURBQUMsbUZBQWM7TUFFYixPQUFPLEVBQUVILFdBQVk7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SUFFdkIsZ0JBQWdCLEVBQUU7TUFDaEIsV0FBVyxFQUFFSCxLQUFLLENBQUNJLE1BQU07TUFDekJDLE1BQU0sRUFBRyxNQUFLTCxLQUFLLENBQUNLLE1BQU87SUFDN0I7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVQLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9XYWxsZXRDb25uZWN0L0Nvbm5lY3Rpb25MaXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOS0yMDIyIEBzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkgYXV0aG9ycyAmIGNvbnRyaWJ1dG9yc1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgc3RyaXBVcmwgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL3V0aWxzJztcbmltcG9ydCB7IENvbm5lY3Rpb25JdGVtLCBFbXB0eUxpc3QsIExheW91dCwgUGFnZVdyYXBwZXIsIFdhbGxldENvbm5lY3QgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBJY29uLCBTd0xpc3QgfSBmcm9tICdAc3Vid2FsbGV0L3JlYWN0LXVpJztcbmltcG9ydCB7IFNlc3Npb25UeXBlcyB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L3R5cGVzJztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEdsb2JlSGVtaXNwaGVyZVdlc3QgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuY29uc3QgQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuXG4gIGNvbnN0IHsgc2Vzc2lvbnMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUud2FsbGV0Q29ubmVjdCk7XG5cbiAgY29uc3QgaXRlbXMgPSB1c2VNZW1vKCgpID0+IE9iamVjdC52YWx1ZXMoc2Vzc2lvbnMpLCBbc2Vzc2lvbnNdKTtcblxuICBjb25zdCBnb0JhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoJy9zZXR0aW5ncy9saXN0Jyk7XG4gIH0sIFtuYXZpZ2F0ZV0pO1xuXG4gIGNvbnN0IG9uQ2xpY2tJdGVtID0gdXNlQ2FsbGJhY2soKHRvcGljOiBzdHJpbmcpID0+IHtcbiAgICBuYXZpZ2F0ZShgL3dhbGxldC1jb25uZWN0L2RldGFpbC8ke3RvcGljfWApO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICBjb25zdCByZW5kZXJJdGVtID0gdXNlQ2FsbGJhY2soKHNlc3Npb246IFNlc3Npb25UeXBlcy5TdHJ1Y3QpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29ubmVjdGlvbkl0ZW1cbiAgICAgICAga2V5PXtzZXNzaW9uLnRvcGljfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSXRlbX1cbiAgICAgICAgc2Vzc2lvbj17c2Vzc2lvbn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW29uQ2xpY2tJdGVtXSk7XG5cbiAgY29uc3Qgb25BZGQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoJy93YWxsZXQtY29ubmVjdC9jb25uZWN0Jyk7XG4gIH0sIFtuYXZpZ2F0ZV0pO1xuXG4gIGNvbnN0IHJlbmRlckVtcHR5TGlzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVtcHR5TGlzdFxuICAgICAgICBlbXB0eU1lc3NhZ2U9e3QoJ1lvdXIgZEFwcHMgd2lsbCBzaG93IHVwIGhlcmUnKX1cbiAgICAgICAgZW1wdHlUaXRsZT17dCgnTm8gZEFwcHMgZm91bmQnKX1cbiAgICAgICAgcGhvc3Bob3JJY29uPXtHbG9iZUhlbWlzcGhlcmVXZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IHNlYXJjaEZ1bmMgPSB1c2VDYWxsYmFjaygoaXRlbTogU2Vzc2lvblR5cGVzLlN0cnVjdCwgc2VhcmNoVGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dExvd2VyQ2FzZSA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBtZXRhZGF0YSA9IGl0ZW0ucGVlci5tZXRhZGF0YTtcbiAgICBsZXQgaWQ6IHN0cmluZztcblxuICAgIHRyeSB7XG4gICAgICBpZCA9IHN0cmlwVXJsKG1ldGFkYXRhLnVybCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWQgPSBtZXRhZGF0YS51cmw7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IG1ldGFkYXRhLm5hbWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKSB8fFxuICAgICAgbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHRMb3dlckNhc2UpXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dC5XaXRoU3ViSGVhZGVyT25seVxuICAgICAgb25CYWNrPXtnb0JhY2t9XG4gICAgICByaWdodEZvb3RlckJ1dHRvbj17e1xuICAgICAgICBjaGlsZHJlbjogdCgnTmV3IGNvbm5lY3Rpb24nKSxcbiAgICAgICAgb25DbGljazogb25BZGQsXG4gICAgICAgIGljb246IChcbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgY3VzdG9tSWNvbj17KFxuICAgICAgICAgICAgICA8V2FsbGV0Q29ubmVjdFxuICAgICAgICAgICAgICAgIGhlaWdodD0nMWVtJ1xuICAgICAgICAgICAgICAgIHdpZHRoPScxZW0nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgdHlwZT0nY3VzdG9tSWNvbidcbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9fVxuICAgICAgdGl0bGU9e3QoJ1dhbGxldENvbm5lY3QnKX1cbiAgICA+XG4gICAgICA8UGFnZVdyYXBwZXJcbiAgICAgICAgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfVxuICAgICAgICByZXNvbHZlPXtkYXRhQ29udGV4dC5hd2FpdFN0b3JlcyhbJ3dhbGxldENvbm5lY3QnXSl9XG4gICAgICA+XG4gICAgICAgIDxTd0xpc3QuU2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT0nc2Vzc2lvbnMtbGlzdCdcbiAgICAgICAgICBkaXNwbGF5Um93PXt0cnVlfVxuICAgICAgICAgIGVuYWJsZVNlYXJjaElucHV0XG4gICAgICAgICAgbGlzdD17aXRlbXN9XG4gICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVySXRlbX1cbiAgICAgICAgICByZW5kZXJXaGVuRW1wdHk9e3JlbmRlckVtcHR5TGlzdH1cbiAgICAgICAgICByb3dHYXA9J3ZhcigtLXJvdy1nYXApJ1xuICAgICAgICAgIHNlYXJjaEZ1bmN0aW9uPXtzZWFyY2hGdW5jfVxuICAgICAgICAgIHNlYXJjaE1pbkNoYXJhY3RlcnNDb3VudD17Mn1cbiAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dDxzdHJpbmc+KCdTZWFyY2ggb3IgZW50ZXIgYSB3ZWJzaXRlJyl9XG4gICAgICAgIC8+XG4gICAgICA8L1BhZ2VXcmFwcGVyPlxuICAgIDwvTGF5b3V0LldpdGhTdWJIZWFkZXJPbmx5PlxuICApO1xufTtcblxuY29uc3QgQ29ubmVjdGlvbkxpc3QgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhZGRpbmc6IHRva2VuLnBhZGRpbmcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXG4gICAgJy5zZXNzaW9ucy1saXN0Jzoge1xuICAgICAgJy0tcm93LWdhcCc6IHRva2VuLnNpemVYUyxcbiAgICAgIG1hcmdpbjogYDAgLSR7dG9rZW4ubWFyZ2lufXB4YFxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uTGlzdDtcbiJdLCJuYW1lcyI6WyJzdHJpcFVybCIsIkNvbm5lY3Rpb25JdGVtIiwiRW1wdHlMaXN0IiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJXYWxsZXRDb25uZWN0IiwiRGF0YUNvbnRleHQiLCJ1c2VTZWxlY3RvciIsIkljb24iLCJTd0xpc3QiLCJDTiIsIkdsb2JlSGVtaXNwaGVyZVdlc3QiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VUcmFuc2xhdGlvbiIsInVzZU5hdmlnYXRlIiwic3R5bGVkIiwiQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0IiwibmF2aWdhdGUiLCJkYXRhQ29udGV4dCIsInNlc3Npb25zIiwic3RhdGUiLCJ3YWxsZXRDb25uZWN0IiwiaXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJnb0JhY2siLCJvbkNsaWNrSXRlbSIsInRvcGljIiwicmVuZGVySXRlbSIsInNlc3Npb24iLCJvbkFkZCIsInJlbmRlckVtcHR5TGlzdCIsInNlYXJjaEZ1bmMiLCJpdGVtIiwic2VhcmNoVGV4dCIsInNlYXJjaFRleHRMb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm1ldGFkYXRhIiwicGVlciIsImlkIiwidXJsIiwiZSIsIm5hbWUiLCJpbmNsdWRlcyIsImNoaWxkcmVuIiwib25DbGljayIsImljb24iLCJhd2FpdFN0b3JlcyIsIkNvbm5lY3Rpb25MaXN0IiwidGhlbWUiLCJ0b2tlbiIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInNpemVYUyIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=