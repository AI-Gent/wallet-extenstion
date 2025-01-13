"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_subwallet_extension_koni"] || []).push([["default-extension-koni-ui_src_Popup_Settings_AddressBook_index_tsx"],{

/***/ "../extension-koni-ui/src/Popup/Settings/AddressBook/index.tsx":
/*!*********************************************************************!*\
  !*** ../extension-koni-ui/src/Popup/Settings/AddressBook/index.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @subwallet/extension-koni-ui/components */ "../extension-koni-ui/src/components/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @subwallet/extension-koni-ui/constants */ "../extension-koni-ui/src/constants/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @subwallet/extension-koni-ui/hooks */ "../extension-koni-ui/src/hooks/index.ts");
/* harmony import */ var _subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @subwallet/extension-koni-ui/utils */ "../extension-koni-ui/src/utils/index.ts");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-modal/provider/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/icon/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/sw-list/index.js");
/* harmony import */ var _subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @subwallet/react-ui */ "../../node_modules/@subwallet/react-ui/es/badge/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/Plus.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! phosphor-react */ "../../node_modules/phosphor-react/dist/icons/FadersHorizontal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polkadot/util-crypto */ "../../node_modules/@polkadot/util-crypto/address/is.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0















var AccountGroup;
(function (AccountGroup) {
  AccountGroup["CONTACT"] = "contact";
  AccountGroup["RECENT"] = "recent";
})(AccountGroup || (AccountGroup = {}));
const searchFunction = (item, searchText) => {
  const searchTextLowerCase = searchText.toLowerCase();
  return item.address.toLowerCase().includes(searchTextLowerCase) || (item.name ? item.name.toLowerCase().includes(searchTextLowerCase) : false);
};
const getGroupPriority = item => {
  switch (item.group) {
    case AccountGroup.CONTACT:
      return 1;
    case AccountGroup.RECENT:
    default:
      return 0;
  }
};
const renderEmpty = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.GeneralEmptyList, {});
const FILTER_MODAL_ID = 'manage-address-book-filter-modal';
const Component = props => {
  const {
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const {
    activeModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_9__.ModalContext);
  const {
    contacts,
    recent
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.accountState);
  const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters
  } = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useFilterModal)(FILTER_MODAL_ID);
  const formatAddress = (0,_subwallet_extension_koni_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.useFormatAddress)();
  const items = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    const result = [];
    (!selectedFilters.length || selectedFilters.includes(AccountGroup.CONTACT)) && contacts.forEach(acc => {
      const address = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_10__.isAddress)(acc.address) ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.reformatAddress)(acc.address) : acc.address;
      result.push({
        ...acc,
        address: address,
        group: AccountGroup.CONTACT
      });
    });
    (!selectedFilters.length || selectedFilters.includes(AccountGroup.RECENT)) && recent.forEach(acc => {
      const address = (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_10__.isAddress)(acc.address) ? (0,_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.reformatAddress)(acc.address) : acc.address;
      result.push({
        ...acc,
        address: address,
        group: AccountGroup.RECENT
      });
    });
    return result.sort(_subwallet_extension_koni_ui_utils__WEBPACK_IMPORTED_MODULE_3__.funcSortByName).sort((a, b) => getGroupPriority(b) - getGroupPriority(a));
  }, [contacts, recent, selectedFilters]);
  const filterOptions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => [{
    label: t('Saved contacts'),
    value: AccountGroup.CONTACT
  }, {
    label: t('Recent'),
    value: AccountGroup.RECENT
  }], [t]);
  const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const openAddContact = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    activeModal(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.ADD_ADDRESS_BOOK_MODAL);
  }, [activeModal]);
  const subHeaderIcons = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => [{
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
      phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_12__["default"],
      size: "md"
    }),
    onClick: openAddContact
  }], [openAddContact]);
  const openFilter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);
  const groupSeparator = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((group, idx, groupKey) => {
    const _group = groupKey;
    let groupLabel = '';
    switch (_group) {
      case AccountGroup.CONTACT:
        groupLabel = t('Saved contacts');
        break;
      case AccountGroup.RECENT:
        groupLabel = t('Recent');
        break;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "address-book-group-separator",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: "address-book-group-label",
        children: groupLabel
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        className: "address-book-group-counter",
        children: ["\xA0(", group.length, ")"]
      })]
    });
  }, [t]);
  const onSelectItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(item => {
    return () => {
      setSelectedItem(item);
      setTimeout(() => {
        activeModal(_subwallet_extension_koni_ui_constants__WEBPACK_IMPORTED_MODULE_1__.EDIT_ADDRESS_BOOK_MODAL);
      }, 10);
    };
  }, [activeModal]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(item => {
    const address = formatAddress(item);
    if (item.group === AccountGroup.RECENT) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountItemBase, {
        address: address,
        addressPreLength: 8,
        addressSufLength: 8,
        avatarSize: 24,
        onClick: onSelectItem(item)
      }, item.address);
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AccountItemWithName, {
      accountName: item.name,
      address: address,
      avatarSize: 24,
      onClick: onSelectItem(item)
    }, item.address);
  }, [formatAddress, onSelectItem]);
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    navigate('/settings/list');
  }, [navigate]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.PageWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.Layout.WithSubHeaderOnly, {
      onBack: goBack,
      subHeaderIcons: subHeaderIcons,
      title: t('Manage address book'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_13__["default"].Section, {
        actionBtnIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_14__["default"], {
          dot: !!selectedFilters.length,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_react_ui__WEBPACK_IMPORTED_MODULE_11__["default"], {
            phosphorIcon: phosphor_react__WEBPACK_IMPORTED_MODULE_15__["default"],
            size: "sm",
            type: "phosphor",
            weight: "fill"
          })
        }),
        displayRow: true,
        enableSearchInput: true,
        groupBy: "group",
        groupSeparator: groupSeparator,
        list: items,
        onClickActionBtn: openFilter,
        ref: sectionRef,
        renderItem: renderItem,
        renderWhenEmpty: renderEmpty,
        rowGap: "var(--row-gap)",
        searchFunction: searchFunction,
        searchMinCharactersCount: 2,
        searchPlaceholder: t('Account name'),
        showActionBtn: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.FilterModal, {
        closeIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.BackIcon, {}),
        id: FILTER_MODAL_ID,
        onApplyFilter: onApplyFilter,
        onCancel: onCloseFilterModal,
        onChangeOption: onChangeFilterOption,
        optionSelectionMap: filterSelectionMap,
        options: filterOptions,
        title: t('Filter')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.AddContactModal, {}), selectedItem && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_subwallet_extension_koni_ui_components__WEBPACK_IMPORTED_MODULE_0__.EditContactModal, {
        addressJson: selectedItem
      })]
    })
  });
};
const ManageAddressBook = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__["default"])(Component).withConfig({
  displayName: "AddressBook__ManageAddressBook",
  componentId: "sc-1g9lssa-0"
})(({
  theme: {
    token
  }
}) => {
  return {
    '--row-gap': token.sizeXS,
    '.ant-sw-screen-layout-body': {
      paddingTop: token.padding,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    '.ant-sw-list-section': {
      flex: 1,
      marginBottom: token.margin
    },
    '.ant-account-item-address': {
      fontWeight: token.fontWeightStrong,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextBase
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageAddressBook);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1leHRlbnNpb24ta29uaS11aV9zcmNfUG9wdXBfU2V0dGluZ3NfQWRkcmVzc0Jvb2tfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHZ007QUFDdkY7QUFDTjtBQUVkO0FBQ0E7QUFFekQ7QUFDNEI7QUFDMEI7QUFDbkM7QUFDQTtBQUNSO0FBRVc7QUFBQTtBQUFBO0FBQUEsSUFJN0NpQyxZQUFZO0FBQUEsV0FBWkEsWUFBWTtFQUFaQSxZQUFZO0VBQVpBLFlBQVk7QUFBQSxHQUFaQSxZQUFZLEtBQVpBLFlBQVk7QUFjakIsTUFBTUMsY0FBYyxHQUFHLENBQUNDLElBQWlCLEVBQUVDLFVBQWtCLEtBQUs7RUFDaEUsTUFBTUMsbUJBQW1CLEdBQUdELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFO0VBRXBELE9BQ0VILElBQUksQ0FBQ0ksT0FBTyxDQUFDRCxXQUFXLEVBQUUsQ0FBQ0UsUUFBUSxDQUFDSCxtQkFBbUIsQ0FBQyxLQUN2REYsSUFBSSxDQUFDTSxJQUFJLEdBQ05OLElBQUksQ0FBQ00sSUFBSSxDQUFDSCxXQUFXLEVBQUUsQ0FBQ0UsUUFBUSxDQUFDSCxtQkFBbUIsQ0FBQyxHQUNyRCxLQUFLLENBQUM7QUFFZCxDQUFDO0FBRUQsTUFBTUssZ0JBQWdCLEdBQUlQLElBQWlCLElBQWE7RUFDdEQsUUFBUUEsSUFBSSxDQUFDUSxLQUFLO0lBQ2hCLEtBQUtWLFlBQVksQ0FBQ1csT0FBTztNQUN2QixPQUFPLENBQUM7SUFDVixLQUFLWCxZQUFZLENBQUNZLE1BQU07SUFDeEI7TUFDRSxPQUFPLENBQUM7RUFBQztBQUVmLENBQUM7QUFFRCxNQUFNQyxXQUFXLEdBQUcsbUJBQU0sdURBQUMscUZBQWdCLEtBQUc7QUFFOUMsTUFBTUMsZUFBZSxHQUFHLGtDQUFrQztBQUUxRCxNQUFNQyxTQUEwQixHQUFJQyxLQUFZLElBQUs7RUFDbkQsTUFBTTtJQUFFQztFQUFVLENBQUMsR0FB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QUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBLGlFQUFlLElBQUksRUFBQztBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWtvbmkvLi4vZXh0ZW5zaW9uLWtvbmktdWkvc3JjL1BvcHVwL1NldHRpbmdzL0FkZHJlc3NCb29rL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9Ac3Vid2FsbGV0L2V4dGVuc2lvbi1rb25pLy4uLy4uL25vZGVfbW9kdWxlcy9waG9zcGhvci1yZWFjdC9kaXN0L2ljb25zL1BsdXMuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE5LTIwMjIgQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aSBhdXRob3JzICYgY29udHJpYnV0b3JzXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5pbXBvcnQgeyBBZGRyZXNzSnNvbiB9IGZyb20gJ0BzdWJ3YWxsZXQvZXh0ZW5zaW9uLWJhc2UvYmFja2dyb3VuZC90eXBlcyc7XG5pbXBvcnQgeyBBY2NvdW50SXRlbUJhc2UsIEFjY291bnRJdGVtV2l0aE5hbWUsIEFkZENvbnRhY3RNb2RhbCwgQmFja0ljb24sIEVkaXRDb250YWN0TW9kYWwsIEZpbHRlck1vZGFsLCBHZW5lcmFsRW1wdHlMaXN0LCBMYXlvdXQsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IEFERF9BRERSRVNTX0JPT0tfTU9EQUwsIEVESVRfQUREUkVTU19CT09LX01PREFMIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlRmlsdGVyTW9kYWwsIHVzZUZvcm1hdEFkZHJlc3MsIHVzZVNlbGVjdG9yIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS9ob29rcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS90eXBlcyc7XG5pbXBvcnQgeyBmdW5jU29ydEJ5TmFtZSwgcmVmb3JtYXRBZGRyZXNzIH0gZnJvbSAnQHN1YndhbGxldC9leHRlbnNpb24ta29uaS11aS91dGlscyc7XG5pbXBvcnQgeyBCYWRnZSwgQnV0dG9uUHJvcHMsIEljb24sIE1vZGFsQ29udGV4dCwgU3dMaXN0IH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aSc7XG5pbXBvcnQgeyBTd0xpc3RTZWN0aW9uUmVmIH0gZnJvbSAnQHN1YndhbGxldC9yZWFjdC11aS9lcy9zdy1saXN0JztcbmltcG9ydCBDTiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEZhZGVyc0hvcml6b250YWwsIFBsdXMgfSBmcm9tICdwaG9zcGhvci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBpc0FkZHJlc3MgfSBmcm9tICdAcG9sa2Fkb3QvdXRpbC1jcnlwdG8nO1xuXG50eXBlIFByb3BzID0gVGhlbWVQcm9wcztcblxuZW51bSBBY2NvdW50R3JvdXAge1xuICBDT05UQUNUID0gJ2NvbnRhY3QnLFxuICBSRUNFTlQgPSAncmVjZW50J1xufVxuXG5pbnRlcmZhY2UgRmlsdGVyT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IEFjY291bnRHcm91cDtcbn1cblxuaW50ZXJmYWNlIEFjY291bnRJdGVtIGV4dGVuZHMgQWRkcmVzc0pzb24ge1xuICBncm91cDogQWNjb3VudEdyb3VwO1xufVxuXG5jb25zdCBzZWFyY2hGdW5jdGlvbiA9IChpdGVtOiBBY2NvdW50SXRlbSwgc2VhcmNoVGV4dDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFRleHRMb3dlckNhc2UgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIChcbiAgICBpdGVtLmFkZHJlc3MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0TG93ZXJDYXNlKSB8fFxuICAgIChpdGVtLm5hbWVcbiAgICAgID8gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dExvd2VyQ2FzZSlcbiAgICAgIDogZmFsc2UpXG4gICk7XG59O1xuXG5jb25zdCBnZXRHcm91cFByaW9yaXR5ID0gKGl0ZW06IEFjY291bnRJdGVtKTogbnVtYmVyID0+IHtcbiAgc3dpdGNoIChpdGVtLmdyb3VwKSB7XG4gICAgY2FzZSBBY2NvdW50R3JvdXAuQ09OVEFDVDpcbiAgICAgIHJldHVybiAxO1xuICAgIGNhc2UgQWNjb3VudEdyb3VwLlJFQ0VOVDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlckVtcHR5ID0gKCkgPT4gPEdlbmVyYWxFbXB0eUxpc3QgLz47XG5cbmNvbnN0IEZJTFRFUl9NT0RBTF9JRCA9ICdtYW5hZ2UtYWRkcmVzcy1ib29rLWZpbHRlci1tb2RhbCc7XG5cbmNvbnN0IENvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgY29uc3QgeyBhY3RpdmVNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuXG4gIGNvbnN0IHsgY29udGFjdHMsIHJlY2VudCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50U3RhdGUpO1xuXG4gIGNvbnN0IHNlY3Rpb25SZWYgPSB1c2VSZWY8U3dMaXN0U2VjdGlvblJlZj4obnVsbCk7XG5cbiAgY29uc3QgeyBmaWx0ZXJTZWxlY3Rpb25NYXAsXG4gICAgb25BcHBseUZpbHRlcixcbiAgICBvbkNoYW5nZUZpbHRlck9wdGlvbixcbiAgICBvbkNsb3NlRmlsdGVyTW9kYWwsXG4gICAgc2VsZWN0ZWRGaWx0ZXJzIH0gPSB1c2VGaWx0ZXJNb2RhbChGSUxURVJfTU9EQUxfSUQpO1xuICBjb25zdCBmb3JtYXRBZGRyZXNzID0gdXNlRm9ybWF0QWRkcmVzcygpO1xuXG4gIGNvbnN0IGl0ZW1zID0gdXNlTWVtbygoKTogQWNjb3VudEl0ZW1bXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBBY2NvdW50SXRlbVtdID0gW107XG5cbiAgICAoIXNlbGVjdGVkRmlsdGVycy5sZW5ndGggfHwgc2VsZWN0ZWRGaWx0ZXJzLmluY2x1ZGVzKEFjY291bnRHcm91cC5DT05UQUNUKSkgJiYgY29udGFjdHMuZm9yRWFjaCgoYWNjKSA9PiB7XG4gICAgICBjb25zdCBhZGRyZXNzID0gaXNBZGRyZXNzKGFjYy5hZGRyZXNzKSA/IHJlZm9ybWF0QWRkcmVzcyhhY2MuYWRkcmVzcykgOiBhY2MuYWRkcmVzcztcblxuICAgICAgcmVzdWx0LnB1c2goeyAuLi5hY2MsIGFkZHJlc3M6IGFkZHJlc3MsIGdyb3VwOiBBY2NvdW50R3JvdXAuQ09OVEFDVCB9KTtcbiAgICB9KTtcblxuICAgICghc2VsZWN0ZWRGaWx0ZXJzLmxlbmd0aCB8fCBzZWxlY3RlZEZpbHRlcnMuaW5jbHVkZXMoQWNjb3VudEdyb3VwLlJFQ0VOVCkpICYmIHJlY2VudC5mb3JFYWNoKChhY2MpID0+IHtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBpc0FkZHJlc3MoYWNjLmFkZHJlc3MpID8gcmVmb3JtYXRBZGRyZXNzKGFjYy5hZGRyZXNzKSA6IGFjYy5hZGRyZXNzO1xuXG4gICAgICByZXN1bHQucHVzaCh7IC4uLmFjYywgYWRkcmVzczogYWRkcmVzcywgZ3JvdXA6IEFjY291bnRHcm91cC5SRUNFTlQgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0LnNvcnQoZnVuY1NvcnRCeU5hbWUpLnNvcnQoKGEsIGIpID0+IGdldEdyb3VwUHJpb3JpdHkoYikgLSBnZXRHcm91cFByaW9yaXR5KGEpKTtcbiAgfSwgW2NvbnRhY3RzLCByZWNlbnQsIHNlbGVjdGVkRmlsdGVyc10pO1xuXG4gIGNvbnN0IGZpbHRlck9wdGlvbnM6IEZpbHRlck9wdGlvbltdID0gdXNlTWVtbygoKSA9PiAoW1xuICAgIHtcbiAgICAgIGxhYmVsOiB0KCdTYXZlZCBjb250YWN0cycpLFxuICAgICAgdmFsdWU6IEFjY291bnRHcm91cC5DT05UQUNUXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdCgnUmVjZW50JyksXG4gICAgICB2YWx1ZTogQWNjb3VudEdyb3VwLlJFQ0VOVFxuICAgIH1cbiAgXSksIFt0XSk7XG5cbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlPEFkZHJlc3NKc29uIHwgdW5kZWZpbmVkPigpO1xuXG4gIGNvbnN0IG9wZW5BZGRDb250YWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGFjdGl2ZU1vZGFsKEFERF9BRERSRVNTX0JPT0tfTU9EQUwpO1xuICB9LCBbYWN0aXZlTW9kYWxdKTtcblxuICBjb25zdCBzdWJIZWFkZXJJY29ucyA9IHVzZU1lbW8oKCk6IEJ1dHRvblByb3BzW10gPT4gW1xuICAgIHtcbiAgICAgIGljb246IChcbiAgICAgICAgPEljb25cbiAgICAgICAgICBwaG9zcGhvckljb249e1BsdXN9XG4gICAgICAgICAgc2l6ZT0nbWQnXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgb25DbGljazogb3BlbkFkZENvbnRhY3RcbiAgICB9XG4gIF0sIFtvcGVuQWRkQ29udGFjdF0pO1xuXG4gIGNvbnN0IG9wZW5GaWx0ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWN0aXZlTW9kYWwoRklMVEVSX01PREFMX0lEKTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3QgZ3JvdXBTZXBhcmF0b3IgPSB1c2VDYWxsYmFjaygoZ3JvdXA6IEFjY291bnRJdGVtW10sIGlkeDogbnVtYmVyLCBncm91cEtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgX2dyb3VwID0gZ3JvdXBLZXkgYXMgQWNjb3VudEdyb3VwO1xuXG4gICAgbGV0IGdyb3VwTGFiZWwgPSAnJztcblxuICAgIHN3aXRjaCAoX2dyb3VwKSB7XG4gICAgICBjYXNlIEFjY291bnRHcm91cC5DT05UQUNUOlxuICAgICAgICBncm91cExhYmVsID0gdCgnU2F2ZWQgY29udGFjdHMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFjY291bnRHcm91cC5SRUNFTlQ6XG4gICAgICAgIGdyb3VwTGFiZWwgPSB0KCdSZWNlbnQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGRyZXNzLWJvb2stZ3JvdXAtc2VwYXJhdG9yJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhZGRyZXNzLWJvb2stZ3JvdXAtbGFiZWwnPntncm91cExhYmVsfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhZGRyZXNzLWJvb2stZ3JvdXAtY291bnRlcic+Jm5ic3A7KHtncm91cC5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sIFt0XSk7XG5cbiAgY29uc3Qgb25TZWxlY3RJdGVtID0gdXNlQ2FsbGJhY2soKGl0ZW06IEFjY291bnRJdGVtKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldFNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhY3RpdmVNb2RhbChFRElUX0FERFJFU1NfQk9PS19NT0RBTCk7XG4gICAgICB9LCAxMCk7XG4gICAgfTtcbiAgfSwgW2FjdGl2ZU1vZGFsXSk7XG5cbiAgY29uc3QgcmVuZGVySXRlbSA9IHVzZUNhbGxiYWNrKChpdGVtOiBBY2NvdW50SXRlbSkgPT4ge1xuICAgIGNvbnN0IGFkZHJlc3MgPSBmb3JtYXRBZGRyZXNzKGl0ZW0pO1xuXG4gICAgaWYgKGl0ZW0uZ3JvdXAgPT09IEFjY291bnRHcm91cC5SRUNFTlQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBY2NvdW50SXRlbUJhc2VcbiAgICAgICAgICBhZGRyZXNzPXthZGRyZXNzfVxuICAgICAgICAgIGFkZHJlc3NQcmVMZW5ndGg9ezh9XG4gICAgICAgICAgYWRkcmVzc1N1Zkxlbmd0aD17OH1cbiAgICAgICAgICBhdmF0YXJTaXplPXsyNH1cbiAgICAgICAgICBrZXk9e2l0ZW0uYWRkcmVzc31cbiAgICAgICAgICBvbkNsaWNrPXtvblNlbGVjdEl0ZW0oaXRlbSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QWNjb3VudEl0ZW1XaXRoTmFtZVxuICAgICAgICBhY2NvdW50TmFtZT17aXRlbS5uYW1lfVxuICAgICAgICBhZGRyZXNzPXthZGRyZXNzfVxuICAgICAgICBhdmF0YXJTaXplPXsyNH1cbiAgICAgICAga2V5PXtpdGVtLmFkZHJlc3N9XG4gICAgICAgIG9uQ2xpY2s9e29uU2VsZWN0SXRlbShpdGVtKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW2Zvcm1hdEFkZHJlc3MsIG9uU2VsZWN0SXRlbV0pO1xuXG4gIGNvbnN0IGdvQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZSgnL3NldHRpbmdzL2xpc3QnKTtcbiAgfSwgW25hdmlnYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgY2xhc3NOYW1lPXtDTihjbGFzc05hbWUpfT5cbiAgICAgIDxMYXlvdXQuV2l0aFN1YkhlYWRlck9ubHlcbiAgICAgICAgb25CYWNrPXtnb0JhY2t9XG4gICAgICAgIHN1YkhlYWRlckljb25zPXtzdWJIZWFkZXJJY29uc31cbiAgICAgICAgdGl0bGU9e3QoJ01hbmFnZSBhZGRyZXNzIGJvb2snKX1cbiAgICAgID5cbiAgICAgICAgPFN3TGlzdC5TZWN0aW9uXG4gICAgICAgICAgYWN0aW9uQnRuSWNvbj17KFxuICAgICAgICAgICAgPEJhZGdlIGRvdD17ISFzZWxlY3RlZEZpbHRlcnMubGVuZ3RofT5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBwaG9zcGhvckljb249e0ZhZGVyc0hvcml6b250YWx9XG4gICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgdHlwZT0ncGhvc3Bob3InXG4gICAgICAgICAgICAgICAgd2VpZ2h0PSdmaWxsJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICApfVxuICAgICAgICAgIGRpc3BsYXlSb3c9e3RydWV9XG4gICAgICAgICAgZW5hYmxlU2VhcmNoSW5wdXQ9e3RydWV9XG4gICAgICAgICAgZ3JvdXBCeT0nZ3JvdXAnXG4gICAgICAgICAgZ3JvdXBTZXBhcmF0b3I9e2dyb3VwU2VwYXJhdG9yfVxuICAgICAgICAgIGxpc3Q9e2l0ZW1zfVxuICAgICAgICAgIG9uQ2xpY2tBY3Rpb25CdG49e29wZW5GaWx0ZXJ9XG4gICAgICAgICAgcmVmPXtzZWN0aW9uUmVmfVxuICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckl0ZW19XG4gICAgICAgICAgcmVuZGVyV2hlbkVtcHR5PXtyZW5kZXJFbXB0eX1cbiAgICAgICAgICByb3dHYXA9J3ZhcigtLXJvdy1nYXApJ1xuICAgICAgICAgIHNlYXJjaEZ1bmN0aW9uPXtzZWFyY2hGdW5jdGlvbn1cbiAgICAgICAgICBzZWFyY2hNaW5DaGFyYWN0ZXJzQ291bnQ9ezJ9XG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI9e3Q8c3RyaW5nPignQWNjb3VudCBuYW1lJyl9XG4gICAgICAgICAgc2hvd0FjdGlvbkJ0bj17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEZpbHRlck1vZGFsXG4gICAgICAgICAgY2xvc2VJY29uPXs8QmFja0ljb24gLz59XG4gICAgICAgICAgaWQ9e0ZJTFRFUl9NT0RBTF9JRH1cbiAgICAgICAgICBvbkFwcGx5RmlsdGVyPXtvbkFwcGx5RmlsdGVyfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlRmlsdGVyTW9kYWx9XG4gICAgICAgICAgb25DaGFuZ2VPcHRpb249e29uQ2hhbmdlRmlsdGVyT3B0aW9ufVxuICAgICAgICAgIG9wdGlvblNlbGVjdGlvbk1hcD17ZmlsdGVyU2VsZWN0aW9uTWFwfVxuICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XG4gICAgICAgICAgdGl0bGU9e3QoJ0ZpbHRlcicpfVxuICAgICAgICAvPlxuICAgICAgICA8QWRkQ29udGFjdE1vZGFsIC8+XG4gICAgICAgIHtzZWxlY3RlZEl0ZW0gJiYgPEVkaXRDb250YWN0TW9kYWwgYWRkcmVzc0pzb249e3NlbGVjdGVkSXRlbX0gLz59XG4gICAgICA8L0xheW91dC5XaXRoU3ViSGVhZGVyT25seT5cbiAgICA8L1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgTWFuYWdlQWRkcmVzc0Jvb2sgPSBzdHlsZWQoQ29tcG9uZW50KTxQcm9wcz4oKHsgdGhlbWU6IHsgdG9rZW4gfSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgICctLXJvdy1nYXAnOiB0b2tlbi5zaXplWFMsXG5cbiAgICAnLmFudC1zdy1zY3JlZW4tbGF5b3V0LWJvZHknOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0b2tlbi5wYWRkaW5nLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH0sXG5cbiAgICAnLmFudC1zdy1saXN0LXNlY3Rpb24nOiB7XG4gICAgICBmbGV4OiAxLFxuICAgICAgbWFyZ2luQm90dG9tOiB0b2tlbi5tYXJnaW5cbiAgICB9LFxuXG4gICAgJy5hbnQtYWNjb3VudC1pdGVtLWFkZHJlc3MnOiB7XG4gICAgICBmb250V2VpZ2h0OiB0b2tlbi5mb250V2VpZ2h0U3Ryb25nLFxuICAgICAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplSGVhZGluZzYsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0SGVhZGluZzYsXG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0QmFzZVxuICAgIH1cbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VBZGRyZXNzQm9vaztcbiIsImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyUGF0aEZvcldlaWdodCB9IGZyb20gJy4uL2xpYi9pbmRleC5lc20uanMnO1xuaW1wb3J0IEljb25CYXNlIGZyb20gJy4uL2xpYi9JY29uQmFzZS5lc20uanMnO1xuXG4vKiBHRU5FUkFURUQgRklMRSAqL1xudmFyIHBhdGhzQnlXZWlnaHQgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xucGF0aHNCeVdlaWdodC5zZXQoXCJib2xkXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyNFwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjI0XCJcbiAgfSkpO1xufSk7XG5wYXRoc0J5V2VpZ2h0LnNldChcImR1b3RvbmVcIiwgZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiNDBcIixcbiAgICB5MTogXCIxMjhcIixcbiAgICB4MjogXCIyMTZcIixcbiAgICB5MjogXCIxMjhcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjIxNlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTZcIlxuICB9KSk7XG59KTtcbnBhdGhzQnlXZWlnaHQuc2V0KFwiZmlsbFwiLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjE2LDEyMEgxMzZWNDBhOCw4LDAsMCwwLTE2LDB2ODBINDBhOCw4LDAsMCwwLDAsMTZoODB2ODBhOCw4LDAsMCwwLDE2LDBWMTM2aDgwYTgsOCwwLDAsMCwwLTE2WlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJsaWdodFwiLCBmdW5jdGlvbiAoY29sb3IpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCI0MFwiLFxuICAgIHkxOiBcIjEyOFwiLFxuICAgIHgyOiBcIjIxNlwiLFxuICAgIHkyOiBcIjEyOFwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjEyOFwiLFxuICAgIHkxOiBcIjQwXCIsXG4gICAgeDI6IFwiMTI4XCIsXG4gICAgeTI6IFwiMjE2XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxMlwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJ0aGluXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCI4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHtcbiAgICB4MTogXCIxMjhcIixcbiAgICB5MTogXCI0MFwiLFxuICAgIHgyOiBcIjEyOFwiLFxuICAgIHkyOiBcIjIxNlwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiOFwiXG4gIH0pKTtcbn0pO1xucGF0aHNCeVdlaWdodC5zZXQoXCJyZWd1bGFyXCIsIGZ1bmN0aW9uIChjb2xvcikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwge1xuICAgIHgxOiBcIjQwXCIsXG4gICAgeTE6IFwiMTI4XCIsXG4gICAgeDI6IFwiMjE2XCIsXG4gICAgeTI6IFwiMTI4XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aDogXCIxNlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgeDE6IFwiMTI4XCIsXG4gICAgeTE6IFwiNDBcIixcbiAgICB4MjogXCIxMjhcIixcbiAgICB5MjogXCIyMTZcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjE2XCJcbiAgfSkpO1xufSk7XG5cbnZhciByZW5kZXJQYXRoID0gZnVuY3Rpb24gcmVuZGVyUGF0aCh3ZWlnaHQsIGNvbG9yKSB7XG4gIHJldHVybiByZW5kZXJQYXRoRm9yV2VpZ2h0KHdlaWdodCwgY29sb3IsIHBhdGhzQnlXZWlnaHQpO1xufTtcblxudmFyIFBsdXMgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICByZW5kZXJQYXRoOiByZW5kZXJQYXRoXG4gIH0pKTtcbn0pO1xuUGx1cy5kaXNwbGF5TmFtZSA9IFwiUGx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBQbHVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGx1cy5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiQWNjb3VudEl0ZW1CYXNlIiwiQWNjb3VudEl0ZW1XaXRoTmFtZSIsIkFkZENvbnRhY3RNb2RhbCIsIkJhY2tJY29uIiwiRWRpdENvbnRhY3RNb2RhbCIsIkZpbHRlck1vZGFsIiwiR2VuZXJhbEVtcHR5TGlzdCIsIkxheW91dCIsIlBhZ2VXcmFwcGVyIiwiQUREX0FERFJFU1NfQk9PS19NT0RBTCIsIkVESVRfQUREUkVTU19CT09LX01PREFMIiwidXNlRmlsdGVyTW9kYWwiLCJ1c2VGb3JtYXRBZGRyZXNzIiwidXNlU2VsZWN0b3IiLCJmdW5jU29ydEJ5TmFtZSIsInJlZm9ybWF0QWRkcmVzcyIsIkJhZGdlIiwiSWNvbiIsIk1vZGFsQ29udGV4dCIsIlN3TGlzdCIsIkNOIiwiRmFkZXJzSG9yaXpvbnRhbCIsIlBsdXMiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlTmF2aWdhdGUiLCJzdHlsZWQiLCJpc0FkZHJlc3MiLCJBY2NvdW50R3JvdXAiLCJzZWFyY2hGdW5jdGlvbiIsIml0ZW0iLCJzZWFyY2hUZXh0Iiwic2VhcmNoVGV4dExvd2VyQ2FzZSIsInRvTG93ZXJDYXNlIiwiYWRkcmVzcyIsImluY2x1ZGVzIiwibmFtZSIsImdldEdyb3VwUHJpb3JpdHkiLCJncm91cCIsIkNPTlRBQ1QiLCJSRUNFTlQiLCJyZW5kZXJFbXB0eSIsIkZJTFRFUl9NT0RBTF9JRCIsIkNvbXBvbmVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwidCIsIm5hdmlnYXRlIiwiYWN0aXZlTW9kYWwiLCJjb250YWN0cyIsInJlY2VudCIsInN0YXRlIiwiYWNjb3VudFN0YXRlIiwic2VjdGlvblJlZiIsImZpbHRlclNlbGVjdGlvbk1hcCIsIm9uQXBwbHlGaWx0ZXIiLCJvbkNoYW5nZUZpbHRlck9wdGlvbiIsIm9uQ2xvc2VGaWx0ZXJNb2RhbCIsInNlbGVjdGVkRmlsdGVycyIsImZvcm1hdEFkZHJlc3MiLCJpdGVtcyIsInJlc3VsdCIsImxlbmd0aCIsImZvckVhY2giLCJhY2MiLCJwdXNoIiwic29ydCIsImEiLCJiIiwiZmlsdGVyT3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJvcGVuQWRkQ29udGFjdCIsInN1YkhlYWRlckljb25zIiwiaWNvbiIsIm9uQ2xpY2siLCJvcGVuRmlsdGVyIiwiZ3JvdXBTZXBhcmF0b3IiLCJpZHgiLCJncm91cEtleSIsIl9ncm91cCIsImdyb3VwTGFiZWwiLCJvblNlbGVjdEl0ZW0iLCJzZXRUaW1lb3V0IiwicmVuZGVySXRlbSIsImdvQmFjayIsIk1hbmFnZUFkZHJlc3NCb29rIiwidGhlbWUiLCJ0b2tlbiIsInNpemVYUyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwiZm9udFdlaWdodCIsImZvbnRXZWlnaHRTdHJvbmciLCJmb250U2l6ZSIsImZvbnRTaXplSGVhZGluZzYiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodEhlYWRpbmc2IiwiY29sb3IiLCJjb2xvclRleHRCYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==