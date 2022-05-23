/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_themes_rubick_dist_css_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/themes/rubick/dist/css/app.css */ \"./styles/themes/rubick/dist/css/app.css\");\n/* harmony import */ var _styles_themes_rubick_dist_css_app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_themes_rubick_dist_css_app_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Backdrop */ \"@mui/material/Backdrop\");\n/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"@mui/material/CircularProgress\");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"@fortawesome/fontawesome-svg-core\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faBookOpen, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCalendarDay, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPlus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faMinus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTrash, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faUserMd, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAlignRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faInfoCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEnvelope, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleDown, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faFilePdf, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faFileAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPrint, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faUserPlus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faUsers, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faHome, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTeethOpen, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faExclamationTriangle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faUnlockAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faUserCog, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEllipsisH, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faSpinner, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleDoubleRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleLeft, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faBell, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleDoubleLeft, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faChartLine, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEye);\nfunction App({ Component , pageProps  }) {\n    // Use the layout defined at the page level, if available\n    const getLayout = Component.getLayout || ((page)=>page\n    );\n    const store = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__.useStore)(pageProps.initialReduxState);\n    const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistStore)(store, {}, function() {\n        persistor.persist();\n    });\n    return getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__.PersistGate, {\n            loading: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_6___default()), {\n                sx: {\n                    color: \"#fff\",\n                    zIndex: (theme)=>theme.zIndex.drawer + 1\n                },\n                open: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    color: \"inherit\"\n                }, void 0, false, void 0, void 0)\n            }, void 0, false, void 0, void 0),\n            persistor: persistor,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ashikmahmud/MyDocuments/Personal/ase-0.1/pages/_app.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ashikmahmud/MyDocuments/Personal/ase-0.1/pages/_app.js\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ashikmahmud/MyDocuments/Personal/ase-0.1/pages/_app.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFDWDtBQUNNO0FBQ2lCO0FBQ3BCO0FBQ0k7QUFDZ0I7QUFDRjtBQVVqQjtBQUNxQjtBQUNGO0FBQ0U7QUFDRjtBQUNRO0FBQ047QUFDQTtBQUNPO0FBQ047QUFDTjtBQUNBO0FBQ0s7QUFDRDtBQUNIO0FBQ0E7QUFDRTtBQUNBO0FBQ0M7QUFDRTtBQUNBO0FBQ0M7QUFFbEVNLDBFQUFXLENBQ1RRLHlFQUFVLEVBQ1ZxQiw0RUFBYSxFQUNidkIscUVBQU0sRUFDTkMsc0VBQU8sRUFDUEgsc0VBQU8sRUFDUEMsdUVBQVEsRUFDUnVCLDJFQUFZLEVBQ1pELDJFQUFZLEVBQ1pELHlFQUFVLEVBQ1ZYLDBFQUFXLEVBQ1hVLHdFQUFTLEVBQ1RELHdFQUFTLEVBQ1RELHNFQUFPLEVBQ1BGLHlFQUFVLEVBQ1ZDLHNFQUFPLEVBQ1BILHFFQUFNLEVBQ05DLDBFQUFXLEVBQ1hsQixvRkFBcUIsRUFDckJPLDBFQUFXLEVBQ1hDLHdFQUFTLEVBQ1RDLDBFQUFXLEVBQ1hDLHdFQUFTLEVBQ1RJLGlGQUFrQixFQUNsQkYsMEVBQVcsRUFDWEcsMkVBQVksRUFDWkMscUVBQU0sRUFDTkwsZ0ZBQWlCLEVBQ2pCWiwwRUFBVyxFQUNYRSxvRUFBSyxDQUNOLENBQUM7QUFFYSxTQUFTNEIsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQseURBQXlEO0lBQ3pELE1BQU1DLFNBQVMsR0FBR0YsU0FBUyxDQUFDRSxTQUFTLElBQUksQ0FBQyxDQUFDQyxJQUFJLEdBQUtBLElBQUk7SUFBQSxDQUFDO0lBQ3pELE1BQU1DLEtBQUssR0FBR3ZDLHNEQUFRLENBQUNvQyxTQUFTLENBQUNJLGlCQUFpQixDQUFDO0lBQ25ELE1BQU1DLFNBQVMsR0FBRzNDLDJEQUFZLENBQUN5QyxLQUFLLEVBQUUsRUFBRSxFQUFFLFdBQVk7UUFDcERFLFNBQVMsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7S0FDckIsQ0FBQztJQUNGLE9BQU9MLFNBQVMsZUFDZCw4REFBQ3hDLGlEQUFRO1FBQUMwQyxLQUFLLEVBQUVBLEtBQUs7a0JBQ3BCLDRFQUFDeEMsd0VBQVc7WUFDVjRDLE9BQU8sZ0JBQ0wsOERBQUMxQywrREFBUTtnQkFDUDJDLEVBQUUsRUFBRTtvQkFBRUMsS0FBSyxFQUFFLE1BQU07b0JBQUVDLE1BQU0sRUFBRSxDQUFDQyxLQUFLLEdBQUtBLEtBQUssQ0FBQ0QsTUFBTSxDQUFDRSxNQUFNLEdBQUcsQ0FBQztpQkFBRTtnQkFDakVDLElBQUk7MEJBRUosNEVBQUMvQyx1RUFBZ0I7b0JBQUMyQyxLQUFLLEVBQUMsU0FBUztpREFBRzs2Q0FDM0I7WUFFYkosU0FBUyxFQUFFQSxTQUFTO3NCQUVwQiw0RUFBQ04sU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ2hCOzs7OztZQUNMLENBQ1osQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VudGltZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy90aGVtZXMvcnViaWNrL2Rpc3QvY3NzL2FwcC5jc3NcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9CYWNrZHJvcFwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcbmltcG9ydCB7XG4gIGZhQ2hhcnRMaW5lLFxuICBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gIGZhRXllLFxuICBmYVRyYXNoLFxuICBmYVVzZXJNZCxcbiAgZmFQbHVzLFxuICBmYU1pbnVzLFxuICBmYUJvb2tPcGVuLFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYVVubG9ja0FsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhVXNlckNvZyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhRWxsaXBzaXNIIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFBbmdsZURvdWJsZUxlZnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUFuZ2xlTGVmdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhQW5nbGVEb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFBbmdsZURvdWJsZVJpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFBbmdsZVJpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFCZWxsIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFUZWV0aE9wZW4gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYVVzZXJQbHVzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFVc2VycyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhUHJpbnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUZpbGVBbHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUZpbGVQZGYgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUVudmVsb3BlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFBbGlnblJpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFDYWxlbmRhckRheSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxubGlicmFyeS5hZGQoXG4gIGZhQm9va09wZW4sXG4gIGZhQ2FsZW5kYXJEYXksXG4gIGZhUGx1cyxcbiAgZmFNaW51cyxcbiAgZmFUcmFzaCxcbiAgZmFVc2VyTWQsXG4gIGZhQWxpZ25SaWdodCxcbiAgZmFJbmZvQ2lyY2xlLFxuICBmYUVudmVsb3BlLFxuICBmYUFuZ2xlRG93bixcbiAgZmFGaWxlUGRmLFxuICBmYUZpbGVBbHQsXG4gIGZhUHJpbnQsXG4gIGZhVXNlclBsdXMsXG4gIGZhVXNlcnMsXG4gIGZhSG9tZSxcbiAgZmFUZWV0aE9wZW4sXG4gIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgZmFVbmxvY2tBbHQsXG4gIGZhVXNlckNvZyxcbiAgZmFFbGxpcHNpc0gsXG4gIGZhU3Bpbm5lcixcbiAgZmFBbmdsZURvdWJsZVJpZ2h0LFxuICBmYUFuZ2xlTGVmdCxcbiAgZmFBbmdsZVJpZ2h0LFxuICBmYUJlbGwsXG4gIGZhQW5nbGVEb3VibGVMZWZ0LFxuICBmYUNoYXJ0TGluZSxcbiAgZmFFeWVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gVXNlIHRoZSBsYXlvdXQgZGVmaW5lZCBhdCB0aGUgcGFnZSBsZXZlbCwgaWYgYXZhaWxhYmxlXG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgfHwgKChwYWdlKSA9PiBwYWdlKTtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpO1xuICBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUsIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgcGVyc2lzdG9yLnBlcnNpc3QoKTtcbiAgfSk7XG4gIHJldHVybiBnZXRMYXlvdXQoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8UGVyc2lzdEdhdGVcbiAgICAgICAgbG9hZGluZz17XG4gICAgICAgICAgPEJhY2tkcm9wXG4gICAgICAgICAgICBzeD17eyBjb2xvcjogXCIjZmZmXCIsIHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSB9fVxuICAgICAgICAgICAgb3BlblxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgPC9CYWNrZHJvcD5cbiAgICAgICAgfVxuICAgICAgICBwZXJzaXN0b3I9e3BlcnNpc3Rvcn1cbiAgICAgID5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwicGVyc2lzdFN0b3JlIiwiUGVyc2lzdEdhdGUiLCJ1c2VTdG9yZSIsIkJhY2tkcm9wIiwiQ2lyY3VsYXJQcm9ncmVzcyIsImxpYnJhcnkiLCJmYUNoYXJ0TGluZSIsImZhRXhjbGFtYXRpb25UcmlhbmdsZSIsImZhRXllIiwiZmFUcmFzaCIsImZhVXNlck1kIiwiZmFQbHVzIiwiZmFNaW51cyIsImZhQm9va09wZW4iLCJmYVVubG9ja0FsdCIsImZhVXNlckNvZyIsImZhRWxsaXBzaXNIIiwiZmFTcGlubmVyIiwiZmFBbmdsZURvdWJsZUxlZnQiLCJmYUFuZ2xlTGVmdCIsImZhQW5nbGVEb3duIiwiZmFBbmdsZURvdWJsZVJpZ2h0IiwiZmFBbmdsZVJpZ2h0IiwiZmFCZWxsIiwiZmFIb21lIiwiZmFUZWV0aE9wZW4iLCJmYVVzZXJQbHVzIiwiZmFVc2VycyIsImZhUHJpbnQiLCJmYUZpbGVBbHQiLCJmYUZpbGVQZGYiLCJmYUVudmVsb3BlIiwiZmFJbmZvQ2lyY2xlIiwiZmFBbGlnblJpZ2h0IiwiZmFDYWxlbmRhckRheSIsImFkZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiLCJzdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwicGVyc2lzdG9yIiwicGVyc2lzdCIsImxvYWRpbmciLCJzeCIsImNvbG9yIiwiekluZGV4IiwidGhlbWUiLCJkcmF3ZXIiLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/reducers/accountReducer.js":
/*!******************************************!*\
  !*** ./store/reducers/accountReducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {};\nconst accountReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            state = action.payload.authData;\n            return state;\n        case \"LOGOUT\":\n            return {};\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accountReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9hY2NvdW50UmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLEVBQUU7QUFFdkIsTUFBTUMsY0FBYyxHQUFHLENBQUNDLEtBQUssR0FBR0YsWUFBWSxFQUFFRyxNQUFNLEdBQUs7SUFDdkQsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLEtBQUssT0FBTztZQUNWRixLQUFLLEdBQUdDLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDQyxRQUFRLENBQUM7WUFDaEMsT0FBT0osS0FBSyxDQUFDO1FBQ2YsS0FBSyxRQUFRO1lBQ1gsT0FBTyxFQUFFLENBQUM7UUFDWjtZQUNFLE9BQU9BLEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRUQsaUVBQWVELGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbnRpbWVudC8uL3N0b3JlL3JlZHVjZXJzL2FjY291bnRSZWR1Y2VyLmpzPzRlM2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmNvbnN0IGFjY291bnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJMT0dJTlwiOlxuICAgICAgc3RhdGUgPSBhY3Rpb24ucGF5bG9hZC5hdXRoRGF0YTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICBjYXNlIFwiTE9HT1VUXCI6XG4gICAgICByZXR1cm4ge307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudFJlZHVjZXI7XG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYWNjb3VudFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiYXV0aERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/accountReducer.js\n");

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _accountReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountReducer */ \"./store/reducers/accountReducer.js\");\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersReducer */ \"./store/reducers/usersReducer.js\");\n/* harmony import */ var _rolesReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rolesReducer */ \"./store/reducers/rolesReducer.js\");\n/* harmony import */ var _loadingReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadingReducer */ \"./store/reducers/loadingReducer.js\");\n\n\n\n\n\nconst reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    account: _accountReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    users: _usersReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    roles: _rolesReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    loadingStatus: _loadingReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducers);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ007QUFDSjtBQUNBO0FBQ0k7QUFDOUMsTUFBTUssUUFBUSxHQUFHTCxzREFBZSxDQUFDO0lBQy9CTSxPQUFPLEVBQUVMLHVEQUFjO0lBQ3ZCTSxLQUFLLEVBQUVMLHFEQUFZO0lBQ25CTSxLQUFLLEVBQUVMLHFEQUFZO0lBQ25CTSxhQUFhLEVBQUVMLHVEQUFjO0NBQzlCLENBQUM7QUFFRixpRUFBZUMsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VudGltZW50Ly4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanM/YjI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBhY2NvdW50UmVkdWNlciBmcm9tIFwiLi9hY2NvdW50UmVkdWNlclwiO1xuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tIFwiLi91c2Vyc1JlZHVjZXJcIjtcbmltcG9ydCByb2xlc1JlZHVjZXIgZnJvbSBcIi4vcm9sZXNSZWR1Y2VyXCI7XG5pbXBvcnQgbG9hZGluZ1JlZHVjZXIgZnJvbSBcIi4vbG9hZGluZ1JlZHVjZXJcIjtcbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudDogYWNjb3VudFJlZHVjZXIsXG4gIHVzZXJzOiB1c2Vyc1JlZHVjZXIsXG4gIHJvbGVzOiByb2xlc1JlZHVjZXIsXG4gIGxvYWRpbmdTdGF0dXM6IGxvYWRpbmdSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzO1xuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImFjY291bnRSZWR1Y2VyIiwidXNlcnNSZWR1Y2VyIiwicm9sZXNSZWR1Y2VyIiwibG9hZGluZ1JlZHVjZXIiLCJyZWR1Y2VycyIsImFjY291bnQiLCJ1c2VycyIsInJvbGVzIiwibG9hZGluZ1N0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/index.js\n");

/***/ }),

/***/ "./store/reducers/loadingReducer.js":
/*!******************************************!*\
  !*** ./store/reducers/loadingReducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadingReducer = (state = false, action)=>{\n    switch(action.type){\n        case \"SET_LOADING\":\n            return state = true;\n        case \"RESET_LOADING\":\n            return state = false;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsY0FBYyxHQUFHLENBQUNDLEtBQUssR0FBRyxLQUFLLEVBQUVDLE1BQU0sR0FBSztJQUNoRCxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBSyxhQUFhO1lBQ2hCLE9BQVFGLEtBQUssR0FBRyxJQUFJLENBQUU7UUFDeEIsS0FBSyxlQUFlO1lBQ2xCLE9BQVFBLEtBQUssR0FBRyxLQUFLLENBQUU7UUFDekI7WUFDRSxPQUFPQSxLQUFLLENBQUM7S0FDaEI7Q0FDRjtBQUVELGlFQUFlRCxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW50aW1lbnQvLi9zdG9yZS9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlci5qcz9lM2FmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRpbmdSZWR1Y2VyID0gKHN0YXRlID0gZmFsc2UsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVF9MT0FESU5HXCI6XG4gICAgICByZXR1cm4gKHN0YXRlID0gdHJ1ZSk7XG4gICAgY2FzZSBcIlJFU0VUX0xPQURJTkdcIjpcbiAgICAgIHJldHVybiAoc3RhdGUgPSBmYWxzZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1JlZHVjZXI7XG4iXSwibmFtZXMiOlsibG9hZGluZ1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/loadingReducer.js\n");

/***/ }),

/***/ "./store/reducers/rolesReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/rolesReducer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = [];\nconst rolesReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"SET_ROLES\":\n            state = action.payload.roles;\n            return state;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rolesReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9yb2xlc1JlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyxFQUFFO0FBRXZCLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUdGLFlBQVksRUFBRUcsTUFBTSxHQUFLO0lBQ3JELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLLFdBQVc7WUFDZEYsS0FBSyxHQUFHQyxNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO1lBQzdCLE9BQU9KLEtBQUssQ0FBQztRQUNmO1lBQ0UsT0FBT0EsS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7QUFFRCxpRUFBZUQsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VudGltZW50Ly4vc3RvcmUvcmVkdWNlcnMvcm9sZXNSZWR1Y2VyLmpzPzU2YzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmNvbnN0IHJvbGVzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUX1JPTEVTXCI6XG4gICAgICBzdGF0ZSA9IGFjdGlvbi5wYXlsb2FkLnJvbGVzO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvbGVzUmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJyb2xlc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwicm9sZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/rolesReducer.js\n");

/***/ }),

/***/ "./store/reducers/usersReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/usersReducer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {};\nconst usersReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"SET_USERS\":\n            state = action.payload.users;\n            return state;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyxFQUFFO0FBRXZCLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUdGLFlBQVksRUFBRUcsTUFBTSxHQUFLO0lBQ3JELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLLFdBQVc7WUFDZEYsS0FBSyxHQUFHQyxNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO1lBQzdCLE9BQU9KLEtBQUssQ0FBQztRQUNmO1lBQ0UsT0FBT0EsS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7QUFFRCxpRUFBZUQsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VudGltZW50Ly4vc3RvcmUvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzP2IyYWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmNvbnN0IHVzZXJzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUX1VTRVJTXCI6XG4gICAgICBzdGF0ZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJzO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJzUmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/usersReducer.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeStore\": () => (/* binding */ initializeStore),\n/* harmony export */   \"useStore\": () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/index */ \"./store/reducers/index.js\");\n\n\n\n\n // defaults to localStorage for web\n\n\nlet store;\nconst persistConfig = {\n    key: \"_clx\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default()),\n    whitelist: [\n        \"account\"\n    ]\n};\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, _reducers_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nfunction makeStore(initialState = {}) {\n    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(persistedReducer, initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_5___default()))));\n}\nconst initializeStore = (preloadedState)=>{\n    let _store = store ?? makeStore(preloadedState);\n    // After navigating to a page with an initial Redux state, merge that state\n    // with the current state in the store, and create a new store\n    if (preloadedState && store) {\n        _store = makeStore({\n            ...store.getState(),\n            ...preloadedState\n        });\n        // Reset the current store\n        store = undefined;\n    }\n    // For SSG and SSR always create a new store\n    if (true) return _store;\n    // Create the store once in the client\n    if (!store) store = _store;\n    return _store;\n};\nfunction useStore(initialState) {\n    const store1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeStore(initialState)\n    , [\n        initialState\n    ]);\n    return store1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDcUI7QUFDVTtBQUNGO0FBQ2IsQ0FBQyxtQ0FBbUM7QUFDcEQ7QUFDUTtBQUV4QyxJQUFJUyxLQUFLO0FBQ1QsTUFBTUMsYUFBYSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUUsTUFBTTtJQUNYTCxPQUFPO0lBQ1BNLFNBQVMsRUFBRTtRQUFDLFNBQVM7S0FBQztDQUN2QjtBQUVELE1BQU1DLGdCQUFnQixHQUFHUiw2REFBYyxDQUFDSyxhQUFhLEVBQUVGLHVEQUFRLENBQUM7QUFFaEUsU0FBU00sU0FBUyxDQUFDQyxZQUFZLEdBQUcsRUFBRSxFQUFFO0lBQ3BDLE9BQU9kLGtEQUFXLENBQ2hCWSxnQkFBZ0IsRUFDaEJFLFlBQVksRUFDWlosNkVBQW1CLENBQUNELHNEQUFlLENBQUNLLG9EQUFLLENBQUMsQ0FBQyxDQUM1QyxDQUFDO0NBQ0g7QUFFTSxNQUFNUyxlQUFlLEdBQUcsQ0FBQ0MsY0FBYyxHQUFLO0lBQ2pELElBQUlDLE1BQU0sR0FBR1QsS0FBSyxJQUFJSyxTQUFTLENBQUNHLGNBQWMsQ0FBQztJQUUvQywyRUFBMkU7SUFDM0UsOERBQThEO0lBQzlELElBQUlBLGNBQWMsSUFBSVIsS0FBSyxFQUFFO1FBQzNCUyxNQUFNLEdBQUdKLFNBQVMsQ0FBQztZQUNqQixHQUFHTCxLQUFLLENBQUNVLFFBQVEsRUFBRTtZQUNuQixHQUFHRixjQUFjO1NBQ2xCLENBQUMsQ0FBQztRQUNILDBCQUEwQjtRQUMxQlIsS0FBSyxHQUFHVyxTQUFTLENBQUM7S0FDbkI7SUFFRCw0Q0FBNEM7SUFDNUMsSUFBSSxJQUE2QixFQUFFLE9BQU9GLE1BQU0sQ0FBQztJQUNqRCxzQ0FBc0M7SUFDdEMsSUFBSSxDQUFDVCxLQUFLLEVBQUVBLEtBQUssR0FBR1MsTUFBTSxDQUFDO0lBRTNCLE9BQU9BLE1BQU0sQ0FBQztDQUNmLENBQUM7QUFFSyxTQUFTRyxRQUFRLENBQUNOLFlBQVksRUFBRTtJQUNyQyxNQUFNTixNQUFLLEdBQUdULDhDQUFPLENBQUMsSUFBTWdCLGVBQWUsQ0FBQ0QsWUFBWSxDQUFDO0lBQUEsRUFBRTtRQUFDQSxZQUFZO0tBQUMsQ0FBQztJQUMxRSxPQUFPTixNQUFLLENBQUM7Q0FDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbnRpbWVudC8uL3N0b3JlL3N0b3JlLmpzPzM2NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjsgLy8gZGVmYXVsdHMgdG8gbG9jYWxTdG9yYWdlIGZvciB3ZWJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xuXG5sZXQgc3RvcmU7XG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICBrZXk6IFwiX2NseFwiLFxuICBzdG9yYWdlLFxuICB3aGl0ZWxpc3Q6IFtcImFjY291bnRcIl0sXG59O1xuXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcnMpO1xuXG5mdW5jdGlvbiBtYWtlU3RvcmUoaW5pdGlhbFN0YXRlID0ge30pIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHBlcnNpc3RlZFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gbWFrZVN0b3JlKHByZWxvYWRlZFN0YXRlKTtcblxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XG4gICAgX3N0b3JlID0gbWFrZVN0b3JlKHtcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcbiAgICB9KTtcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxuICAgIHN0b3JlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfc3RvcmU7XG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlO1xuXG4gIHJldHVybiBfc3RvcmU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsInRodW5rIiwicmVkdWNlcnMiLCJzdG9yZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "./styles/themes/rubick/dist/css/app.css":
/*!***********************************************!*\
  !*** ./styles/themes/rubick/dist/css/app.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@mui/material/Backdrop":
/*!*****************************************!*\
  !*** external "@mui/material/Backdrop" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Backdrop");

/***/ }),

/***/ "@mui/material/CircularProgress":
/*!*************************************************!*\
  !*** external "@mui/material/CircularProgress" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();