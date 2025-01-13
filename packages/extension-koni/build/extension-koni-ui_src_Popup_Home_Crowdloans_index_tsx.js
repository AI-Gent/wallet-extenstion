"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["extension-koni-ui_src_Popup_Home_Crowdloans_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Home/Crowdloans/index.tsx":
/*!****************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Home/Crowdloans/index.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @subwallet/extension-base/background/KoniTypes */ "../extension-base/src/background/KoniTypes.ts");
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/contexts/DataContext */ "../extension-koni-ui/src/contexts/DataContext.tsx");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/web3-block/crowdloan-item/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/tag/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Rocket.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0











var FilterValue;
(function (FilterValue) {
  FilterValue["POLKADOT_PARACHAIN"] = "Polkadot parachain";
  FilterValue["KUSAMA_PARACHAIN"] = "Kusama parachain";
  FilterValue["WINNER"] = "completed";
  FilterValue["FAIL"] = "failed";
})(FilterValue || (FilterValue = {}));
function getTagColor(paraState) {
  if (!paraState) {
    return 'default';
  }
  if (paraState.valueOf() === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.COMPLETED.valueOf()) {
    return 'success';
  }
  if (paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.FAILED.valueOf()) {
    return 'error';
  }
  if (paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.ONGOING.valueOf()) {
    return 'warning';
  }
  return 'default';
}
function getRelayParentKey(groupDisplayName) {
  if (groupDisplayName === 'Polkadot parachain') {
    return 'polkadot';
  } else {
    return 'kusama';
  }
}
const FILTER_MODAL_ID = 'crowdloan-filter-modal';
function Component({
  className = ''
}) {
  (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetCurrentPage)('/home/crowdloans');
  const {
    t
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const dataContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_subwallet_extension_koni_ui_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataContext);
  const items = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetCrowdloanList)();
  const {
    activeModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_6__.ModalContext);
  const {
    isShowBalance
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.settings);
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useFilterModal)(FILTER_MODAL_ID);
  const filterOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [{
    label: t('Polkadot parachain'),
    value: FilterValue.POLKADOT_PARACHAIN
  }, {
    label: t('Kusama parachain'),
    value: FilterValue.KUSAMA_PARACHAIN
  }, {
    label: t('Win'),
    value: FilterValue.WINNER
  }, {
    label: t('Fail'),
    value: FilterValue.FAIL
  }], [t]);
  const filterFunction = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return item => {
      if (!selectedFilters.length) {
        return true;
      }
      for (const filter of selectedFilters) {
        if (filter === FilterValue.POLKADOT_PARACHAIN) {
          if (item.relayParentDisplayName === 'Polkadot parachain') {
            return true;
          }
        } else if (filter === FilterValue.KUSAMA_PARACHAIN) {
          if (item.relayParentDisplayName === 'Kusama parachain') {
            return true;
          }
        } else if (filter === FilterValue.WINNER) {
          if (item.paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.COMPLETED) {
            return true;
          }
        } else if (filter === FilterValue.FAIL) {
          if (item.paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.FAILED) {
            return true;
          }
        }
      }
      return false;
    };
  }, [selectedFilters]);

  // filter
  const onClickActionBtn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(e => {
    e && e.stopPropagation();
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);
  const searchFunction = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((item, searchText) => {
    const searchTextLowerCase = searchText.toLowerCase();
    return item.chainDisplayName.toLowerCase().includes(searchTextLowerCase);
  }, []);

  // render item
  const getParaStateLabel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(paraState => {
    if (!paraState) {
      return '';
    }
    if (paraState.valueOf() === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.COMPLETED.valueOf()) {
      return t('Win');
    }
    if (paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.FAILED.valueOf()) {
      return t('Fail');
    }
    if (paraState === _subwallet_extension_base_background_KoniTypes__WEBPACK_IMPORTED_MODULE_5__.CrowdloanParaState.ONGOING.valueOf()) {
      return t('Active');
    }
    return '';
  }, [t]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(item => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_7__["default"], {
      balanceValue: item.contribute,
      className: 'crowdloan-item',
      convertedBalanceValue: item.convertedContribute,
      crowdloanStatusTag: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: getTagColor(item.paraState),
        children: getParaStateLabel(item.paraState)
      }),
      decimal: 0,
      displayNetwork: item.chainDisplayName,
      displayToken: item.symbol,
      hideBalance: !isShowBalance,
      isShowSubLogo: true,
      networkKey: item.slug,
      paraChain: item.relayParentDisplayName,
      subNetworkKey: getRelayParentKey(item.relayParentDisplayName)
    }, `${item.symbol}_${item.slug}`);
  }, [getParaStateLabel, isShowBalance]);

  // empty list
  const emptyCrowdloanList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EmptyList, {
      emptyMessage: t('Your crowdloans will show up here'),
      emptyTitle: t('No crowdloans found'),
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_9__["default"]
    });
  }, [t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: `crowdloans ${className}`,
    resolve: dataContext.awaitStores(['crowdloan', 'price', 'chainStore']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.Base, {
      showSubHeader: true,
      subHeaderBackground: 'transparent',
      subHeaderCenter: false,
      subHeaderPaddingVertical: true,
      title: t('Crowdloans'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_10__["default"].Section, {
        actionBtnIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
          phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"]
        }),
        enableSearchInput: true,
        filterBy: filterFunction,
        list: items,
        onClickActionBtn: onClickActionBtn,
        renderItem: renderItem,
        renderWhenEmpty: emptyCrowdloanList,
        searchFunction: searchFunction,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Search project'),
        showActionBtn: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.FilterModal, {
        applyFilterButtonTitle: t('Apply filter'),
        id: FILTER_MODAL_ID,
        onApplyFilter: onApplyFilter,
        onCancel: onCloseFilterModal,
        onChangeOption: onChangeFilterOption,
        optionSelectionMap: filterSelectionMap,
        options: filterOptions,
        title: t('Filter')
      })]
    })
  });
}
const Crowdloans = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(Component).withConfig({
  displayName: "Crowdloans",
  componentId: "sc-14oyusp-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    color: token.colorTextLight1,
    fontSize: token.fontSizeLG,
    '.crowdloan-item': {
      marginBottom: token.marginXS
    },
    '.crowdloan__filter_option': {
      width: '100%'
    },
    '.crowdloan__filter_option_wrapper': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.marginLG
    },
    '.ant-sw-list-section': {
      height: '100%'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Crowdloans);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWtvbmktdWlfc3JjX1BvcHVwX0hvbWVfQ3Jvd2Rsb2Fuc19pbmRleF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRW9GO0FBQ2tCO0FBQ3RCO0FBQ3lEO0FBRXBEO0FBQzNCO0FBQ3NCO0FBQ3pDO0FBQUE7QUFBQTtBQUFBLElBSWxDdUIsV0FBVztBQUFBLFdBQVhBLFdBQVc7RUFBWEEsV0FBVztFQUFYQSxXQUFXO0VBQVhBLFdBQVc7RUFBWEEsV0FBVztBQUFBLEdBQVhBLFdBQVcsS0FBWEEsV0FBVztBQU9oQixTQUFTQyxXQUFXLENBQUVDLFNBQThCLEVBQUU7RUFDcEQsSUFBSSxDQUFDQSxTQUFTLEVBQUU7SUFDZCxPQUFPLFNBQVM7RUFDbEI7RUFFQSxJQUFJQSxTQUFTLENBQUNDLE9BQU8sRUFBRSxLQUFLMUIsZ0hBQW9DLEVBQUUsRUFBRTtJQUNsRSxPQUFPLFNBQVM7RUFDbEI7RUFFQSxJQUFJeUIsU0FBUyxLQUFLekIsNkdBQWlDLEVBQUUsRUFBRTtJQUNyRCxPQUFPLE9BQU87RUFDaEI7RUFFQSxJQUFJeUIsU0FBUyxLQUFLekIsOEdBQWtDLEVBQUUsRUFBRTtJQUN0RCxPQUFPLFNBQVM7RUFDbEI7RUFFQSxPQUFPLFNBQVM7QUFDbEI7QUFFQSxTQUFTOEIsaUJBQWlCLENBQUVDLGdCQUF3QixFQUFFO0VBQ3BELElBQUlBLGdCQUFnQixLQUFLLG9CQUFvQixFQUFFO0lBQzdDLE9BQU8sVUFBVTtFQUNuQixDQUFDLE1BQU07SUFDTCxPQUFPLFFBQVE7RUFDakI7QUFDRjtBQUVBLE1BQU1DLGVBQWUsR0FBRyx3QkFBd0I7QUFFaEQsU0FBU0MsU0FBUyxDQUFFO0VBQUVDLFNBQVMsR0FBRztBQUFVLENBQUMsRUFBNkI7RUFDeEV6QixxRkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztFQUNyQyxNQUFNO0lBQUUwQjtFQUFFLENBQUMsR0FBR3pCLGtGQUFjLEVBQUU7RUFDOUIsTUFB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Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uL2V4dGVuc2lvbi1rb25pLXVpL3NyYy9Qb3B1cC9Ib21lL0Nyb3dkbG9hbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHBvbGthZG90L2V4dGVuc2lvbi11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBDcm93ZGxvYW5QYXJhU3RhdGUgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1iYXNlL2JhY2tncm91bmQvS29uaVR5cGVzJztcbmltcG9ydCB7IEVtcHR5TGlzdCwgRmlsdGVyTW9kYWwsIExheW91dCwgUGFnZVdyYXBwZXIgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICdAc3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLXVpL2NvbnRleHRzL0RhdGFDb250ZXh0JztcbmltcG9ydCB7IHVzZUZpbHRlck1vZGFsLCB1c2VHZXRDcm93ZGxvYW5MaXN0LCB1c2VTZWxlY3RvciwgdXNlU2V0Q3VycmVudFBhZ2UsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBDcm93ZGxvYW5JdGVtVHlwZSwgVGhlbWVQcm9wcyB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmktdWkvdHlwZXMnO1xuaW1wb3J0IHsgQ3Jvd2Rsb2FuSXRlbSwgSWNvbiwgTW9kYWxDb250ZXh0LCBTd0xpc3QsIFRhZyB9IGZyb20gJ0BzdWJ3YWxsZXQvcmVhY3QtdWknO1xuaW1wb3J0IHsgRmFkZXJzSG9yaXpvbnRhbCwgUm9ja2V0IH0gZnJvbSAncGhvc3Bob3ItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuZW51bSBGaWx0ZXJWYWx1ZSB7XG4gIFBPTEtBRE9UX1BBUkFDSEFJTiA9ICdQb2xrYWRvdCBwYXJhY2hhaW4nLFxuICBLVVNBTUFfUEFSQUNIQUlOID0gJ0t1c2FtYSBwYXJhY2hhaW4nLFxuICBXSU5ORVIgPSAnY29tcGxldGVkJyxcbiAgRkFJTCA9ICdmYWlsZWQnXG59XG5cbmZ1bmN0aW9uIGdldFRhZ0NvbG9yIChwYXJhU3RhdGU/OiBDcm93ZGxvYW5QYXJhU3RhdGUpIHtcbiAgaWYgKCFwYXJhU3RhdGUpIHtcbiAgICByZXR1cm4gJ2RlZmF1bHQnO1xuICB9XG5cbiAgaWYgKHBhcmFTdGF0ZS52YWx1ZU9mKCkgPT09IENyb3dkbG9hblBhcmFTdGF0ZS5DT01QTEVURUQudmFsdWVPZigpKSB7XG4gICAgcmV0dXJuICdzdWNjZXNzJztcbiAgfVxuXG4gIGlmIChwYXJhU3RhdGUgPT09IENyb3dkbG9hblBhcmFTdGF0ZS5GQUlMRUQudmFsdWVPZigpKSB7XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICBpZiAocGFyYVN0YXRlID09PSBDcm93ZGxvYW5QYXJhU3RhdGUuT05HT0lORy52YWx1ZU9mKCkpIHtcbiAgICByZXR1cm4gJ3dhcm5pbmcnO1xuICB9XG5cbiAgcmV0dXJuICdkZWZhdWx0Jztcbn1cblxuZnVuY3Rpb24gZ2V0UmVsYXlQYXJlbnRLZXkgKGdyb3VwRGlzcGxheU5hbWU6IHN0cmluZykge1xuICBpZiAoZ3JvdXBEaXNwbGF5TmFtZSA9PT0gJ1BvbGthZG90IHBhcmFjaGFpbicpIHtcbiAgICByZXR1cm4gJ3BvbGthZG90JztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2t1c2FtYSc7XG4gIH1cbn1cblxuY29uc3QgRklMVEVSX01PREFMX0lEID0gJ2Nyb3dkbG9hbi1maWx0ZXItbW9kYWwnO1xuXG5mdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lID0gJycgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UHJvcHM+IHtcbiAgdXNlU2V0Q3VycmVudFBhZ2UoJy9ob21lL2Nyb3dkbG9hbnMnKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBkYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xuICBjb25zdCBpdGVtczogQ3Jvd2Rsb2FuSXRlbVR5cGVbXSA9IHVzZUdldENyb3dkbG9hbkxpc3QoKTtcblxuICBjb25zdCB7IGFjdGl2ZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBpc1Nob3dCYWxhbmNlIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNldHRpbmdzKTtcblxuICBjb25zdCB7IGZpbHRlclNlbGVjdGlvbk1hcCwgb25BcHBseUZpbHRlciwgb25DaGFuZ2VGaWx0ZXJPcHRpb24sIG9uQ2xvc2VGaWx0ZXJNb2RhbCwgc2VsZWN0ZWRGaWx0ZXJzIH0gPSB1c2VGaWx0ZXJNb2RhbChGSUxURVJfTU9EQUxfSUQpO1xuXG4gIGNvbnN0IGZpbHRlck9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IFtcbiAgICB7IGxhYmVsOiB0KCdQb2xrYWRvdCBwYXJhY2hhaW4nKSwgdmFsdWU6IEZpbHRlclZhbHVlLlBPTEtBRE9UX1BBUkFDSEFJTiB9LFxuICAgIHsgbGFiZWw6IHQoJ0t1c2FtYSBwYXJhY2hhaW4nKSwgdmFsdWU6IEZpbHRlclZhbHVlLktVU0FNQV9QQVJBQ0hBSU4gfSxcbiAgICB7IGxhYmVsOiB0KCdXaW4nKSwgdmFsdWU6IEZpbHRlclZhbHVlLldJTk5FUiB9LFxuICAgIHsgbGFiZWw6IHQoJ0ZhaWwnKSwgdmFsdWU6IEZpbHRlclZhbHVlLkZBSUwgfVxuICBdLCBbdF0pO1xuXG4gIGNvbnN0IGZpbHRlckZ1bmN0aW9uID0gdXNlTWVtbzwoaXRlbTogQ3Jvd2Rsb2FuSXRlbVR5cGUpID0+IGJvb2xlYW4+KCgpID0+IHtcbiAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgIGlmICghc2VsZWN0ZWRGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2Ygc2VsZWN0ZWRGaWx0ZXJzKSB7XG4gICAgICAgIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLlBPTEtBRE9UX1BBUkFDSEFJTikge1xuICAgICAgICAgIGlmIChpdGVtLnJlbGF5UGFyZW50RGlzcGxheU5hbWUgPT09ICdQb2xrYWRvdCBwYXJhY2hhaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSBGaWx0ZXJWYWx1ZS5LVVNBTUFfUEFSQUNIQUlOKSB7XG4gICAgICAgICAgaWYgKGl0ZW0ucmVsYXlQYXJlbnREaXNwbGF5TmFtZSA9PT0gJ0t1c2FtYSBwYXJhY2hhaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSBGaWx0ZXJWYWx1ZS5XSU5ORVIpIHtcbiAgICAgICAgICBpZiAoaXRlbS5wYXJhU3RhdGUgPT09IENyb3dkbG9hblBhcmFTdGF0ZS5DT01QTEVURUQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IEZpbHRlclZhbHVlLkZBSUwpIHtcbiAgICAgICAgICBpZiAoaXRlbS5wYXJhU3RhdGUgPT09IENyb3dkbG9hblBhcmFTdGF0ZS5GQUlMRUQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3NlbGVjdGVkRmlsdGVyc10pO1xuXG4gIC8vIGZpbHRlclxuICBjb25zdCBvbkNsaWNrQWN0aW9uQnRuID0gdXNlQ2FsbGJhY2soXG4gICAgKGU/OiBTeW50aGV0aWNFdmVudCkgPT4ge1xuICAgICAgZSAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgYWN0aXZlTW9kYWwoRklMVEVSX01PREFMX0lEKTtcbiAgICB9LFxuICAgIFthY3RpdmVNb2RhbF1cbiAgKTtcblxuICBjb25zdCBzZWFyY2hGdW5jdGlvbiA9IHVzZUNhbGxiYWNrKChpdGVtOiBDcm93ZGxvYW5JdGVtVHlwZSwgc2VhcmNoVGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dExvd2VyQ2FzZSA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiAoXG4gICAgICBpdGVtLmNoYWluRGlzcGxheU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKVxuICAgICk7XG4gIH0sIFtdKTtcblxuICAvLyByZW5kZXIgaXRlbVxuICBjb25zdCBnZXRQYXJhU3RhdGVMYWJlbCA9IHVzZUNhbGxiYWNrKChwYXJhU3RhdGU/OiBDcm93ZGxvYW5QYXJhU3RhdGUpID0+IHtcbiAgICBpZiAoIXBhcmFTdGF0ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlmIChwYXJhU3RhdGUudmFsdWVPZigpID09PSBDcm93ZGxvYW5QYXJhU3RhdGUuQ09NUExFVEVELnZhbHVlT2YoKSkge1xuICAgICAgcmV0dXJuIHQoJ1dpbicpO1xuICAgIH1cblxuICAgIGlmIChwYXJhU3RhdGUgPT09IENyb3dkbG9hblBhcmFTdGF0ZS5GQUlMRUQudmFsdWVPZigpKSB7XG4gICAgICByZXR1cm4gdCgnRmFpbCcpO1xuICAgIH1cblxuICAgIGlmIChwYXJhU3RhdGUgPT09IENyb3dkbG9hblBhcmFTdGF0ZS5PTkdPSU5HLnZhbHVlT2YoKSkge1xuICAgICAgcmV0dXJuIHQoJ0FjdGl2ZScpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfSwgW3RdKTtcblxuICBjb25zdCByZW5kZXJJdGVtID0gdXNlQ2FsbGJhY2soXG4gICAgKGl0ZW06IENyb3dkbG9hbkl0ZW1UeXBlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q3Jvd2Rsb2FuSXRlbVxuICAgICAgICAgIGJhbGFuY2VWYWx1ZT17aXRlbS5jb250cmlidXRlfVxuICAgICAgICAgIGNsYXNzTmFtZT17J2Nyb3dkbG9hbi1pdGVtJ31cbiAgICAgICAgICBjb252ZXJ0ZWRCYWxhbmNlVmFsdWU9e2l0ZW0uY29udmVydGVkQ29udHJpYnV0ZX1cbiAgICAgICAgICBjcm93ZGxvYW5TdGF0dXNUYWc9e1xuICAgICAgICAgICAgPFRhZyBjb2xvcj17Z2V0VGFnQ29sb3IoaXRlbS5wYXJhU3RhdGUpfT57Z2V0UGFyYVN0YXRlTGFiZWwoaXRlbS5wYXJhU3RhdGUpfTwvVGFnPlxuICAgICAgICAgIH1cbiAgICAgICAgICBkZWNpbWFsPXswfVxuICAgICAgICAgIGRpc3BsYXlOZXR3b3JrPXtpdGVtLmNoYWluRGlzcGxheU5hbWV9XG4gICAgICAgICAgZGlzcGxheVRva2VuPXtpdGVtLnN5bWJvbH1cbiAgICAgICAgICBoaWRlQmFsYW5jZT17IWlzU2hvd0JhbGFuY2V9XG4gICAgICAgICAgaXNTaG93U3ViTG9nbz17dHJ1ZX1cbiAgICAgICAgICBrZXk9e2Ake2l0ZW0uc3ltYm9sfV8ke2l0ZW0uc2x1Z31gfVxuICAgICAgICAgIG5ldHdvcmtLZXk9e2l0ZW0uc2x1Z31cbiAgICAgICAgICBwYXJhQ2hhaW49e2l0ZW0ucmVsYXlQYXJlbnREaXNwbGF5TmFtZX1cbiAgICAgICAgICBzdWJOZXR3b3JrS2V5PXtnZXRSZWxheVBhcmVudEtleShpdGVtLnJlbGF5UGFyZW50RGlzcGxheU5hbWUpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuICAgIFtnZXRQYXJhU3RhdGVMYWJlbCwgaXNTaG93QmFsYW5jZV1cbiAgKTtcblxuICAvLyBlbXB0eSBsaXN0XG4gIGNvbnN0IGVtcHR5Q3Jvd2Rsb2FuTGlzdCA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFbXB0eUxpc3RcbiAgICAgICAgICBlbXB0eU1lc3NhZ2U9e3QoJ1lvdXIgY3Jvd2Rsb2FucyB3aWxsIHNob3cgdXAgaGVyZScpfVxuICAgICAgICAgIGVtcHR5VGl0bGU9e3QoJ05vIGNyb3dkbG9hbnMgZm91bmQnKX1cbiAgICAgICAgICBwaG9zcGhvckljb249e1JvY2tldH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSxcbiAgICBbdF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtgY3Jvd2Rsb2FucyAke2NsYXNzTmFtZX1gfVxuICAgICAgcmVzb2x2ZT17ZGF0YUNvbnRleHQuYXdhaXRTdG9yZXMoWydjcm93ZGxvYW4nLCAncHJpY2UnLCAnY2hhaW5TdG9yZSddKX1cbiAgICA+XG4gICAgICA8TGF5b3V0LkJhc2VcbiAgICAgICAgc2hvd1N1YkhlYWRlcj17dHJ1ZX1cbiAgICAgICAgc3ViSGVhZGVyQmFja2dyb3VuZD17J3RyYW5zcGFyZW50J31cbiAgICAgICAgc3ViSGVhZGVyQ2VudGVyPXtmYWxzZX1cbiAgICAgICAgc3ViSGVhZGVyUGFkZGluZ1ZlcnRpY2FsPXt0cnVlfVxuICAgICAgICB0aXRsZT17dDxzdHJpbmc+KCdDcm93ZGxvYW5zJyl9XG4gICAgICA+XG4gICAgICAgIDxTd0xpc3QuU2VjdGlvblxuICAgICAgICAgIGFjdGlvbkJ0bkljb249ezxJY29uIHBob3NwaG9ySWNvbj17RmFkZXJzSG9yaXpvbnRhbH0gLz59XG4gICAgICAgICAgZW5hYmxlU2VhcmNoSW5wdXRcbiAgICAgICAgICBmaWx0ZXJCeT17ZmlsdGVyRnVuY3Rpb259XG4gICAgICAgICAgbGlzdD17aXRlbXN9XG4gICAgICAgICAgb25DbGlja0FjdGlvbkJ0bj17b25DbGlja0FjdGlvbkJ0bn1cbiAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJJdGVtfVxuICAgICAgICAgIHJlbmRlcldoZW5FbXB0eT17ZW1wdHlDcm93ZGxvYW5MaXN0fVxuICAgICAgICAgIHNlYXJjaEZ1bmN0aW9uPXtzZWFyY2hGdW5jdGlvbn1cbiAgICAgICAgICBzZWFyY2hNaW5DaGFyYWN0ZXJzQ291bnQ9ezJ9XG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI9e3Q8c3RyaW5nPignU2VhcmNoIHByb2plY3QnKX1cbiAgICAgICAgICBzaG93QWN0aW9uQnRuXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZpbHRlck1vZGFsXG4gICAgICAgICAgYXBwbHlGaWx0ZXJCdXR0b25UaXRsZT17dCgnQXBwbHkgZmlsdGVyJyl9XG4gICAgICAgICAgaWQ9e0ZJTFRFUl9NT0RBTF9JRH1cbiAgICAgICAgICBvbkFwcGx5RmlsdGVyPXtvbkFwcGx5RmlsdGVyfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlRmlsdGVyTW9kYWx9XG4gICAgICAgICAgb25DaGFuZ2VPcHRpb249e29uQ2hhbmdlRmlsdGVyT3B0aW9ufVxuICAgICAgICAgIG9wdGlvblNlbGVjdGlvbk1hcD17ZmlsdGVyU2VsZWN0aW9uTWFwfVxuICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XG4gICAgICAgICAgdGl0bGU9e3QoJ0ZpbHRlcicpfVxuICAgICAgICAvPlxuICAgICAgPC9MYXlvdXQuQmFzZT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBDcm93ZGxvYW5zID0gc3R5bGVkKENvbXBvbmVudCk8UHJvcHM+KCh7IHRoZW1lOiB7IHRva2VuIH0gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0MSxcbiAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVMRyxcblxuICAgICcuY3Jvd2Rsb2FuLWl0ZW0nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRva2VuLm1hcmdpblhTXG4gICAgfSxcblxuICAgICcuY3Jvd2Rsb2FuX19maWx0ZXJfb3B0aW9uJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG5cbiAgICAnLmNyb3dkbG9hbl9fZmlsdGVyX29wdGlvbl93cmFwcGVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRva2VuLm1hcmdpbkxHXG4gICAgfSxcblxuICAgICcuYW50LXN3LWxpc3Qtc2VjdGlvbic6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDcm93ZGxvYW5zO1xuIl0sIm5hbWVzIjpbIkNyb3dkbG9hblBhcmFTdGF0ZSIsIkVtcHR5TGlzdCIsIkZpbHRlck1vZGFsIiwiTGF5b3V0IiwiUGFnZVdyYXBwZXIiLCJEYXRhQ29udGV4dCIsInVzZUZpbHRlck1vZGFsIiwidXNlR2V0Q3Jvd2Rsb2FuTGlzdCIsInVzZVNlbGVjdG9yIiwidXNlU2V0Q3VycmVudFBhZ2UiLCJ1c2VUcmFuc2xhdGlvbiIsIkNyb3dkbG9hbkl0ZW0iLCJJY29uIiwiTW9kYWxDb250ZXh0IiwiU3dMaXN0IiwiVGFnIiwiRmFkZXJzSG9yaXpvbnRhbCIsIlJvY2tldCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlTWVtbyIsInN0eWxlZCIsIkZpbHRlclZhbHVlIiwiZ2V0VGFnQ29sb3IiLCJwYXJhU3RhdGUiLCJ2YWx1ZU9mIiwiQ09NUExFVEVEIiwiRkFJTEVEIiwiT05HT0lORyIsImdldFJlbGF5UGFyZW50S2V5IiwiZ3JvdXBEaXNwbGF5TmFtZSIsIkZJTFRFUl9NT0RBTF9JRCIsIkNvbXBvbmVudCIsImNsYXNzTmFtZSIsInQiLCJkYXRhQ29udGV4dCIsIml0ZW1zIiwiYWN0aXZlTW9kYWwiLCJpc1Nob3dCYWxhbmNlIiwic3RhdGUiLCJzZXR0aW5ncyIsImZpbHRlclNlbGVjdGlvbk1hcCIsIm9uQXBwbHlGaWx0ZXIiLCJvbkNoYW5nZUZpbHRlck9wdGlvbiIsIm9uQ2xvc2VGaWx0ZXJNb2RhbCIsInNlbGVjdGVkRmlsdGVycyIsImZpbHRlck9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiUE9MS0FET1RfUEFSQUNIQUlOIiwiS1VTQU1BX1BBUkFDSEFJTiIsIldJTk5FUiIsIkZBSUwiLCJmaWx0ZXJGdW5jdGlvbiIsIml0ZW0iLCJsZW5ndGgiLCJmaWx0ZXIiLCJyZWxheVBhcmVudERpc3BsYXlOYW1lIiwib25DbGlja0FjdGlvbkJ0biIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWFyY2hGdW5jdGlvbiIsInNlYXJjaFRleHQiLCJzZWFyY2hUZXh0TG93ZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJjaGFpbkRpc3BsYXlOYW1lIiwiaW5jbHVkZXMiLCJnZXRQYXJhU3RhdGVMYWJlbCIsInJlbmRlckl0ZW0iLCJjb250cmlidXRlIiwiY29udmVydGVkQ29udHJpYnV0ZSIsInN5bWJvbCIsInNsdWciLCJlbXB0eUNyb3dkbG9hbkxpc3QiLCJhd2FpdFN0b3JlcyIsIkNyb3dkbG9hbnMiLCJ0aGVtZSIsInRva2VuIiwiY29sb3IiLCJjb2xvclRleHRMaWdodDEiLCJmb250U2l6ZSIsImZvbnRTaXplTEciLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5YUyIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtYXJnaW5MRyIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=