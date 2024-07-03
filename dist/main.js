/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ubuntu-bold-italic {
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-style: italic;
}

:root {
    font-size: 16px;
    --main-black: rgb(59, 59, 59);
    --main-blue: rgb(104, 202, 226);
    --main-red: rgb(230, 115, 115);
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    font-family: "Ubuntu", sans-serif;
}

.header {
    height: 80px;
    background-color: rgb(221, 221, 221);
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgb(192, 192, 192);
}

.title {
    margin-left: 20px;
    color: var(--main-black);
    font-size: 3rem;
}

.container {
    display: flex;
    min-height: 100%;
}

.sidebar {
    width: clamp(200px, 50%, 300px);
    flex-shrink: 0;
    background-color: rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    border-right: 2px solid rgb(192, 192, 192);
}

.sidebar-title {
    color: var(--main-black);
    font-size: 1.2rem;
    padding: 15px;
}

.sidebar-grid {
    display: grid;
    grid-template-columns: 1fr;
}

.projects-buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding-left: 60px;
}

#addProject {
    padding: 8px 15px;
    color: var(--main-blue);
    font-size: 1rem;
    border: 1px solid var(--main-blue);
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    font-family: "Ubuntu", sans-serif;
    margin-right: 20px;
}

#addProject:hover {
    background-color: rgb(248, 248, 248);
}

#deleteProjectsButton {
    border: none;
    border-radius: 6px;
    padding: 5px;
    width: 35px;
    height: 35px;
    background-color: rgb(212, 212, 212);
}

#deleteProjectsButton>svg {
    width: 25px;
    height: 25px;
}

#deleteProjectsButton:hover {
    background-color: rgb(201, 201, 201);
    box-shadow: 0px 0px 4px 2px rgb(219, 219, 219);
}

.projects-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

input[name='deleteProjectItem'] {
    margin-bottom: 15px;
}

#submitDeleteProjects {
    padding: 10px 20px;
    align-self: center;
    font-size: 1rem;
    border: none;
    color: white;
    background-color: var(--main-red);
    border-bottom: 3px solid rgb(199, 76, 76);
    border-radius: 10px;
    font-family: "Ubuntu", sans-serif;
}

#submitDeleteProjects:hover {
    background-color: rgb(218, 90, 90);
}

.project-item {
    padding: 20px;
    text-align: center;
    font-size: 1.3rem;
    color: var(--main-black);
    border-radius: 5px;

}

.add-project {
    align-self: center;
}

.project-input, .item-input, .delete-projects {
    position: fixed;
    top: -50px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    border: none;
    border-radius: 15px;
}

.project-input-container, .item-input-container, .delete-projects-container {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    color: var(--main-black);
}

.close-project-input, .close-item-input, .close-delete-projects {
    align-self: flex-end;
    border-radius: 6px;
    border: none;
    padding: 3px 9px;
    margin-bottom: 15px;
    font-size: 1.2rem;
    background-color: rgb(228, 228, 228);
    color: var(--main-black);
}

.close-project-input:hover, .close-item-input:hover, .close-delete-projects:hover {
    background-color: rgb(206, 206, 206);
}

#projectForm, #itemForm, #deleteProjectsForm {
    display: flex;
    flex-direction: column;
}

#projectInput, #itemTitle, #itemDes, #itemDate {
    font-size: 1.3rem;
    height: 2.5rem;
    border: 1px solid rgb(172, 172, 172);
    border-radius: 10px;
    padding-left: 10px;
    margin: 20px 0px 20px 0px;
    color: var(--main-black);
    outline: none;
}

.priority-options {
    padding-top: 20px;
    padding-bottom: 20px;
}

#projectInput:hover, #projectInput:active,
#itemTitle:hover, #itemTitle:active,
#itemDes:hover, #itemDes:active,
#itemDate:hover, #itemDate:active {
    box-shadow: 0px 0px 4px 2px rgb(226, 226, 226);
}

#submitProject, #submitItem {
    padding: 10px 20px;
    align-self: center;
    font-size: 1rem;
    border: none;
    color: white;
    background-color: var(--main-blue);
    border-bottom: 3px solid rgb(82, 163, 184);
    border-radius: 10px;
    font-family: "Ubuntu", sans-serif;
}

#submitProject:hover, #submitItem:hover, #addItem:hover {
    background-color: rgb(90, 185, 209);
}

.content {
    padding: 20px;
    width: 100%;
    max-height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, 220px);
    gap: 20px;
}

@media (min-width: 1400px) {
    .content {
        grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
    }
}

.item-container {
    display: flex;
    flex-direction: column;
    padding: 15px;
    padding-bottom: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px rgb(190, 190, 190);
    height: 100px;
}

.item-prio, .item-status, .item-buttons-div {
    display: none;
}

.item-title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 5px;
    color: var(--main-black);
}

.item-date {
    color: rgb(97, 97, 97);
    margin-bottom: 5px;
}

.item-des {
  margin-bottom: 5px;
}

.item-prio-container {
    display: flex;
    margin-bottom: 5px;
}

.item-prio-container p {
    margin: 0;
    margin-right: 5px;
}

.item-prio-value {
    align-self: center;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

.item-status-container {
    display: flex;
    align-items: center;
}

.item-status-container p {
    margin: 0;
    margin-right: 5px;
}

.item-status-box {
    display: flex;
    height: 25px;
    width: 50px;
    background-color: rgb(196, 196, 196);
    border-radius: 20px;
}

.item-status-box:hover {
    box-shadow: 0px 0px 5px 1px rgb(199, 199, 199);
}

.item-status-first {
    height: 25px;
    width: 25px;
    background-color: rgb(245, 245, 245);
    box-shadow: 0px 0px 5px 1px rgb(190, 190, 190);
    border-radius: 20px;
}

.item-status-second {
    height: 25px;
    width: 25px;
    border-radius: 20px;
}


.item-buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
}

.item-edit-button {
    border: none;
    border-radius: 25px;
    padding: 5px;
    width: 35px;
    height: 35px;
    background-color: rgb(236, 236, 236);
}

.item-edit-button>svg {
    width: 20px;
    height: 20px;
    color: var(--main-blue);
}

.item-delete-button {
    border: none;
    border-radius: 25px;
    padding: 5px;
    width: 35px;
    height: 35px;
    background-color: rgb(236, 236, 236);
    margin-left: 10px;
}

.item-delete-button>svg {
    width: 20px;
    height: 20px;
    color: var(--main-red);
}

.item-edit-button:hover, .item-delete-button:hover {
    background-color: rgb(221, 221, 221);
    box-shadow: 0px 0px 5px 1px rgb(235, 235, 235);
}

.item-arrow-button {
    border: none;
    border-radius: 35px;
    width: 35px;
    height: 35px;
    padding: 5px;
    background-color: rgb(236, 236, 236);
    box-shadow: 0px 0px 5px 1px rgb(190, 190, 190);
    align-self: center;
    position: relative;
    top: 10%;
}

.item-arrow-button:hover {
    background-color: rgb(221, 221, 221);
    box-shadow: 0px 0px 5px 1px rgb(209, 209, 209);
}

.item-arrow-button>svg {
    width: 25px;
    height: 25px;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#addItem {
    height: 50px;
    width: 50px;
    font-size: 2rem;
    border: none;
    box-shadow: 0px 0px 5px 2px rgb(209, 209, 209);
    color: white;
    padding: 10px;
    border-radius: 35px;
    background-color: var(--main-blue);
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');\n\n.ubuntu-bold-italic {\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 700;\n  font-style: italic;\n}\n\n:root {\n    font-size: 16px;\n    --main-black: rgb(59, 59, 59);\n    --main-blue: rgb(104, 202, 226);\n    --main-red: rgb(230, 115, 115);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    height: 100vh;\n    width: 100%;\n    font-family: \"Ubuntu\", sans-serif;\n}\n\n.header {\n    height: 80px;\n    background-color: rgb(221, 221, 221);\n    display: flex;\n    align-items: center;\n    border-bottom: 2px solid rgb(192, 192, 192);\n}\n\n.title {\n    margin-left: 20px;\n    color: var(--main-black);\n    font-size: 3rem;\n}\n\n.container {\n    display: flex;\n    min-height: 100%;\n}\n\n.sidebar {\n    width: clamp(200px, 50%, 300px);\n    flex-shrink: 0;\n    background-color: rgb(238, 238, 238);\n    display: flex;\n    flex-direction: column;\n    border-right: 2px solid rgb(192, 192, 192);\n}\n\n.sidebar-title {\n    color: var(--main-black);\n    font-size: 1.2rem;\n    padding: 15px;\n}\n\n.sidebar-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n.projects-buttons-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n    padding-left: 60px;\n}\n\n#addProject {\n    padding: 8px 15px;\n    color: var(--main-blue);\n    font-size: 1rem;\n    border: 1px solid var(--main-blue);\n    background-color: rgb(255, 255, 255);\n    border-radius: 5px;\n    font-family: \"Ubuntu\", sans-serif;\n    margin-right: 20px;\n}\n\n#addProject:hover {\n    background-color: rgb(248, 248, 248);\n}\n\n#deleteProjectsButton {\n    border: none;\n    border-radius: 6px;\n    padding: 5px;\n    width: 35px;\n    height: 35px;\n    background-color: rgb(212, 212, 212);\n}\n\n#deleteProjectsButton>svg {\n    width: 25px;\n    height: 25px;\n}\n\n#deleteProjectsButton:hover {\n    background-color: rgb(201, 201, 201);\n    box-shadow: 0px 0px 4px 2px rgb(219, 219, 219);\n}\n\n.projects-list {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 15px;\n}\n\ninput[name='deleteProjectItem'] {\n    margin-bottom: 15px;\n}\n\n#submitDeleteProjects {\n    padding: 10px 20px;\n    align-self: center;\n    font-size: 1rem;\n    border: none;\n    color: white;\n    background-color: var(--main-red);\n    border-bottom: 3px solid rgb(199, 76, 76);\n    border-radius: 10px;\n    font-family: \"Ubuntu\", sans-serif;\n}\n\n#submitDeleteProjects:hover {\n    background-color: rgb(218, 90, 90);\n}\n\n.project-item {\n    padding: 20px;\n    text-align: center;\n    font-size: 1.3rem;\n    color: var(--main-black);\n    border-radius: 5px;\n\n}\n\n.add-project {\n    align-self: center;\n}\n\n.project-input, .item-input, .delete-projects {\n    position: fixed;\n    top: -50px;\n    padding: 20px;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    z-index: 1000;\n    border: none;\n    border-radius: 15px;\n}\n\n.project-input-container, .item-input-container, .delete-projects-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    color: var(--main-black);\n}\n\n.close-project-input, .close-item-input, .close-delete-projects {\n    align-self: flex-end;\n    border-radius: 6px;\n    border: none;\n    padding: 3px 9px;\n    margin-bottom: 15px;\n    font-size: 1.2rem;\n    background-color: rgb(228, 228, 228);\n    color: var(--main-black);\n}\n\n.close-project-input:hover, .close-item-input:hover, .close-delete-projects:hover {\n    background-color: rgb(206, 206, 206);\n}\n\n#projectForm, #itemForm, #deleteProjectsForm {\n    display: flex;\n    flex-direction: column;\n}\n\n#projectInput, #itemTitle, #itemDes, #itemDate {\n    font-size: 1.3rem;\n    height: 2.5rem;\n    border: 1px solid rgb(172, 172, 172);\n    border-radius: 10px;\n    padding-left: 10px;\n    margin: 20px 0px 20px 0px;\n    color: var(--main-black);\n    outline: none;\n}\n\n.priority-options {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n#projectInput:hover, #projectInput:active,\n#itemTitle:hover, #itemTitle:active,\n#itemDes:hover, #itemDes:active,\n#itemDate:hover, #itemDate:active {\n    box-shadow: 0px 0px 4px 2px rgb(226, 226, 226);\n}\n\n#submitProject, #submitItem {\n    padding: 10px 20px;\n    align-self: center;\n    font-size: 1rem;\n    border: none;\n    color: white;\n    background-color: var(--main-blue);\n    border-bottom: 3px solid rgb(82, 163, 184);\n    border-radius: 10px;\n    font-family: \"Ubuntu\", sans-serif;\n}\n\n#submitProject:hover, #submitItem:hover, #addItem:hover {\n    background-color: rgb(90, 185, 209);\n}\n\n.content {\n    padding: 20px;\n    width: 100%;\n    max-height: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-auto-rows: minmax(50px, 220px);\n    gap: 20px;\n}\n\n@media (min-width: 1400px) {\n    .content {\n        grid-template-columns: repeat(auto-fit, minmax(250px, 400px));\n    }\n}\n\n.item-container {\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n    padding-bottom: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 5px 2px rgb(190, 190, 190);\n    height: 100px;\n}\n\n.item-prio, .item-status, .item-buttons-div {\n    display: none;\n}\n\n.item-title {\n    font-size: 1.5rem;\n    font-weight: 500;\n    margin-bottom: 5px;\n    color: var(--main-black);\n}\n\n.item-date {\n    color: rgb(97, 97, 97);\n    margin-bottom: 5px;\n}\n\n.item-des {\n  margin-bottom: 5px;\n}\n\n.item-prio-container {\n    display: flex;\n    margin-bottom: 5px;\n}\n\n.item-prio-container p {\n    margin: 0;\n    margin-right: 5px;\n}\n\n.item-prio-value {\n    align-self: center;\n    padding: 2px 10px 2px 10px;\n    border-radius: 10px;\n}\n\n.item-status-container {\n    display: flex;\n    align-items: center;\n}\n\n.item-status-container p {\n    margin: 0;\n    margin-right: 5px;\n}\n\n.item-status-box {\n    display: flex;\n    height: 25px;\n    width: 50px;\n    background-color: rgb(196, 196, 196);\n    border-radius: 20px;\n}\n\n.item-status-box:hover {\n    box-shadow: 0px 0px 5px 1px rgb(199, 199, 199);\n}\n\n.item-status-first {\n    height: 25px;\n    width: 25px;\n    background-color: rgb(245, 245, 245);\n    box-shadow: 0px 0px 5px 1px rgb(190, 190, 190);\n    border-radius: 20px;\n}\n\n.item-status-second {\n    height: 25px;\n    width: 25px;\n    border-radius: 20px;\n}\n\n\n.item-buttons-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n\n.item-edit-button {\n    border: none;\n    border-radius: 25px;\n    padding: 5px;\n    width: 35px;\n    height: 35px;\n    background-color: rgb(236, 236, 236);\n}\n\n.item-edit-button>svg {\n    width: 20px;\n    height: 20px;\n    color: var(--main-blue);\n}\n\n.item-delete-button {\n    border: none;\n    border-radius: 25px;\n    padding: 5px;\n    width: 35px;\n    height: 35px;\n    background-color: rgb(236, 236, 236);\n    margin-left: 10px;\n}\n\n.item-delete-button>svg {\n    width: 20px;\n    height: 20px;\n    color: var(--main-red);\n}\n\n.item-edit-button:hover, .item-delete-button:hover {\n    background-color: rgb(221, 221, 221);\n    box-shadow: 0px 0px 5px 1px rgb(235, 235, 235);\n}\n\n.item-arrow-button {\n    border: none;\n    border-radius: 35px;\n    width: 35px;\n    height: 35px;\n    padding: 5px;\n    background-color: rgb(236, 236, 236);\n    box-shadow: 0px 0px 5px 1px rgb(190, 190, 190);\n    align-self: center;\n    position: relative;\n    top: 10%;\n}\n\n.item-arrow-button:hover {\n    background-color: rgb(221, 221, 221);\n    box-shadow: 0px 0px 5px 1px rgb(209, 209, 209);\n}\n\n.item-arrow-button>svg {\n    width: 25px;\n    height: 25px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#addItem {\n    height: 50px;\n    width: 50px;\n    font-size: 2rem;\n    border: none;\n    box-shadow: 0px 0px 5px 2px rgb(209, 209, 209);\n    color: white;\n    padding: 10px;\n    border-radius: 35px;\n    background-color: var(--main-blue);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyProjectsBgColor: () => (/* binding */ applyProjectsBgColor),
/* harmony export */   displayContent: () => (/* binding */ displayContent),
/* harmony export */   displayDeleteProjects: () => (/* binding */ displayDeleteProjects),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   formState: () => (/* binding */ formState)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function displayProjects(Projects, setCurrentProject) {
    const sidebarGrid = document.querySelector('.sidebar-grid');
    sidebarGrid.innerHTML = '';
    Object.keys(Projects).forEach((key) => {
        let div = document.createElement('div');
        div.classList.add('project-item');
        div.textContent = key;
        div.id = key;
        sidebarGrid.appendChild(div);

        div.addEventListener('click', () => {
            setCurrentProject(key);
            displayContent(Projects, key);
            applyProjectsBgColor(Projects, key);
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Projects, key);
        })
    });
}

function applyProjectsBgColor(Projects, currentProject) {
    Object.keys(Projects).forEach((key) => {
        let div = document.getElementById(key);
        if (key === currentProject) {
            div.style.backgroundColor = 'rgb(212, 212, 212)';
            div.style.borderLeft = '4px solid var(--main-black)';
            div.style.paddingLeft = '16px';
        } else {
            div.style.backgroundColor = 'rgb(238, 238, 238)';
            div.style.borderLeft = 'none';
            div.style.paddingLeft = '20px';
        }
    })
}

function displayDeleteProjects(Projects) {
    const projectsList = document.querySelector('.projects-list');
    projectsList.innerHTML = '';
    Object.keys(Projects).forEach((key) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'deleteProjectItem');
        input.setAttribute('value', `${key}`);
        const span = document.createElement('span');
        span.textContent = ' ' + key;
        label.appendChild(input);
        label.appendChild(span);
        projectsList.appendChild(label);
    })
}

const formState = {
    itemFormMode: 'add',
    itemEditIndex: null,
};

function displayContent(Projects, project) {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    Projects[project].forEach((item, index) => {
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        let itemTitle = document.createElement('div');
        itemTitle.classList.add('item-title');
        itemTitle.textContent = item.title;

        let itemDes = document.createElement('div');
        itemDes.classList.add('item-des');
        itemDes.textContent = item.description;

        let itemDate = document.createElement('div');
        itemDate.classList.add('item-date');
        itemDate.textContent = item.dueDate;

        let itemPrio = document.createElement('div');
        itemPrio.classList.add('item-prio');
        let itemPrioContainer = document.createElement('div');
        itemPrioContainer.classList.add('item-prio-container');
        const priorityText = document.createElement('p');
        priorityText.textContent = 'Priority: ';
        let itemPrioValue = document.createElement('div');
        itemPrioValue.classList.add('item-prio-value');
        itemPrioValue.textContent = item.priority;

        if (item.priority === 'Low') {
            itemPrioValue.style.backgroundColor = 'rgb(165, 255, 165)';
        } else if (item.priority === 'Mid') {
            itemPrioValue.style.backgroundColor = 'rgb(253, 255, 165)';
        } else if (item.priority === 'High') {
            itemPrioValue.style.backgroundColor = 'rgb(255, 165, 165)';
        }

        let itemButtonsDiv = document.createElement('div');
        itemButtonsDiv.classList.add('item-buttons-div');

        let itemButtonsContainer = document.createElement('div');
        itemButtonsContainer.classList.add('item-buttons-container');

        let itemStatus = document.createElement('div');
        itemStatus.classList.add('item-status');
        let itemStatusContainer = document.createElement('div');
        itemStatusContainer.classList.add('item-status-container');
        let itemStatusText = document.createElement('p');
        itemStatusText.textContent = 'Completed: ';
        let itemStatusBox = document.createElement('div');
        itemStatusBox.classList.add('item-status-box');
        let itemStatusFirst = document.createElement('div');
        itemStatusFirst.classList.add('item-status-first');
        let itemStatusSecond = document.createElement('div');
        itemStatusSecond.classList.add('item-status-second');

        let itemButtonsBox = document.createElement('div');
        itemButtonsBox.classList.add('item-buttons-box');

        let itemEditButton = document.createElement('button');
        itemEditButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>';
        itemEditButton.classList.add('item-edit-button');

        let itemDeleteButton = document.createElement('button');
        itemDeleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
        itemDeleteButton.classList.add('item-delete-button');

        let itemArrowButton = document.createElement('button');
        itemArrowButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
        itemArrowButton.classList.add('item-arrow-button');
        
        let arrowButtonStatus = 'close';

        itemStatusBox.addEventListener('click', () => {
            if (item.completed === false) {
                itemStatusBox.style.backgroundColor = 'var(--main-blue)';
                itemStatusFirst.style.backgroundColor = 'var(--main-blue)';
                itemStatusFirst.style.boxShadow = 'none';
                itemStatusSecond.style.backgroundColor = 'rgb(245, 245, 245)';
                itemStatusSecond.style.boxShadow = '0px 0px 5px 1px rgb(190, 190, 190)';
                
                item.completed = true;
            } else if (item.completed === true) {
                itemStatusBox.style.backgroundColor = 'rgb(196, 196, 196)';
                itemStatusFirst.style.backgroundColor = 'rgb(245, 245, 245)';
                itemStatusFirst.style.boxShadow = '0px 0px 5px 1px rgb(190, 190, 190)';
                itemStatusSecond.style.backgroundColor ='rgb(196, 196, 196)';
                itemStatusSecond.style.boxShadow = 'none';

                item.completed = false;
            }
        });

        itemEditButton.addEventListener('click', () => {
            formState.itemFormMode = 'edit';
            formState.itemEditIndex = index;
            const itemInputDiv = document.querySelector('.item-input');
            const itemTitleInput = document.getElementById('itemTitle');
            itemTitleInput.value = item.title;
            const itemDesInput = document.getElementById('itemDes');
            itemDesInput.value = item.description;
            const itemDateInput = document.getElementById('itemDate');
            itemDateInput.value = item.dueDate;
            const itemPrioInputs = document.querySelectorAll('input[name="itemPrio"]');
            itemPrioInputs.forEach(input => {
                if (input.value === item.priority) {
                    input.checked = true;
                }
            });
            itemInputDiv.showModal();
        });

        itemDeleteButton.addEventListener('click', () => {
            Projects[project].splice(index, 1);
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Projects, project);
            displayContent(Projects, project);
        });

        itemArrowButton.addEventListener('click', () => {
            if (arrowButtonStatus === 'close') {
                itemPrio.style.display = 'block';
                itemStatus.style.display = 'block';
                itemButtonsDiv.style.display = 'block';

                itemContainer.style.height = '180px';

                itemArrowButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>';
                itemArrowButton.style.top = '0%';

                arrowButtonStatus = 'open';

            } else if (arrowButtonStatus === 'open') {
                itemPrio.style.display = 'none';
                itemStatus.style.display = 'none';
                itemButtonsDiv.style.display = 'none';

                itemContainer.style.height = '100px';

                itemArrowButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
                itemArrowButton.style.top = '10%';

                arrowButtonStatus = 'close';
            }
        });

        itemPrioContainer.appendChild(priorityText);
        itemPrioContainer.appendChild(itemPrioValue);
        itemPrio.appendChild(itemPrioContainer);

        itemStatusBox.appendChild(itemStatusFirst);
        itemStatusBox.appendChild(itemStatusSecond);
        itemStatusContainer.appendChild(itemStatusText);
        itemStatusContainer.appendChild(itemStatusBox);
        itemStatus.appendChild(itemStatusContainer);

        itemButtonsBox.appendChild(itemEditButton);
        itemButtonsBox.appendChild(itemDeleteButton);
        itemButtonsContainer.appendChild(itemStatus);
        itemButtonsContainer.appendChild(itemButtonsBox);
        itemButtonsDiv.appendChild(itemButtonsContainer);

        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemDate);
        itemContainer.appendChild(itemDes);
        itemContainer.appendChild(itemPrio);

        itemContainer.appendChild(itemButtonsDiv);

        itemContainer.appendChild(itemArrowButton);

        content.appendChild(itemContainer);
    });
    

    const addItemDiv = document.createElement('div');
    addItemDiv.classList.add('button-container');
    const addItemButton = document.createElement('button');
    addItemButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" /></svg>';
    addItemButton.id = 'addItem';
    addItemButton.addEventListener('click', () => {
        const itemInputDiv = document.querySelector('.item-input');
        itemInputDiv.showModal();
    });
    addItemDiv.appendChild(addItemButton);
    content.appendChild(addItemDiv);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateStorage: () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



function updateStorage(Projects, currentProject) {
    localStorage.setItem('projects', JSON.stringify(Projects));
    localStorage.setItem('currentProject', currentProject);
}

function loadStorage() {
    const projects = localStorage.getItem('projects');
    if (projects) {
        return JSON.parse(projects);
    } else {
        return {};
    }
}

function loadCurrentProject() {
    const currentProject = localStorage.getItem('currentProject');
    if (currentProject) {
        return currentProject;
    } else {
        return '';
    }
}

(function() {
    let Projects = loadStorage();
    let currentProject = loadCurrentProject();

    function createTodoItem(title, description, dueDate, priority) {
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            completed: false
        }
    };

    function setCurrentProject(project) {
        currentProject = project;
    }

    function addProject(projectName) {
        Projects[projectName] = [];
        setCurrentProject(projectName);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(Projects, setCurrentProject);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.applyProjectsBgColor)(Projects, currentProject);
        updateStorage(Projects, currentProject);
    };

    const addProjectButton = document.getElementById('addProject');
    addProjectButton.addEventListener('click', () => {
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.showModal();
    });

    const closeProjectInput = document.querySelector('.close-project-input');
    closeProjectInput.addEventListener('click', () => {
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.close();
    });

    const projectForm = document.getElementById('projectForm');
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectInput = document.getElementById('projectInput');
        const projectValue = projectInput.value;
        projectInput.value = '';
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.close();
        addProject(projectValue);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayContent)(Projects, currentProject);
    });

    const deleteProjectsButton = document.getElementById('deleteProjectsButton');
    deleteProjectsButton.addEventListener('click', () => {
        const deleteProjectsDialog = document.querySelector('.delete-projects');
        deleteProjectsDialog.showModal();
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayDeleteProjects)(Projects);
    });

    const closeDeleteProjects = document.querySelector('.close-delete-projects');
    closeDeleteProjects.addEventListener('click', () => {
        const deleteProjectsDialog = document.querySelector('.delete-projects');
        deleteProjectsDialog.close();
    });

    const deleteProjectsForm = document.getElementById('deleteProjectsForm');
    deleteProjectsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const deleteProjectsDialog = document.querySelector('.delete-projects');
        const projects = document.querySelectorAll('input[name="deleteProjectItem"]:checked');
        projects.forEach((project) => {
            if (Projects[project.value]) {
                delete Projects[project.value];
            }
        });
        deleteProjectsDialog.close();
        setCurrentProject(Object.keys(Projects)[0]);
        updateStorage(Projects, currentProject);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(Projects, setCurrentProject);

        if (Object.keys(Projects).length === 0) {
            const content = document.querySelector('.content');
            content.innerHTML = '';
            return;
        } else {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.applyProjectsBgColor)(Projects, currentProject);
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayContent)(Projects, currentProject);
        }
    });

    const itemForm = document.getElementById('itemForm');
    itemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const itemTitleInput = document.getElementById('itemTitle');
        const itemTitle = itemTitleInput.value;
        itemTitleInput.value = '';

        const itemDesInput = document.getElementById('itemDes');
        const itemDes = itemDesInput.value;
        itemDesInput.value = '';

        const itemDateInput = document.getElementById('itemDate');
        const itemDate = itemDateInput.value;
        itemDateInput.value = '';

        const itemPrio = document.querySelector('input[name="itemPrio"]:checked').value;
        const itemPrioInputs = document.querySelectorAll('input[name="itemPrio"]');
        itemPrioInputs.forEach(input => {
            input.checked = false;
        });

        let item = createTodoItem(itemTitle, itemDes, itemDate, itemPrio);
        
        if (_dom_js__WEBPACK_IMPORTED_MODULE_1__.formState.itemFormMode === 'add') {
            Projects[currentProject].push(item);
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayContent)(Projects, currentProject);
        } else if (_dom_js__WEBPACK_IMPORTED_MODULE_1__.formState.itemFormMode === 'edit') {
            Projects[currentProject][_dom_js__WEBPACK_IMPORTED_MODULE_1__.formState.itemEditIndex] = item;
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayContent)(Projects, currentProject);
            _dom_js__WEBPACK_IMPORTED_MODULE_1__.formState.itemFormMode = 'add';
        }

        const itemInputDiv = document.querySelector('.item-input');
        itemInputDiv.close();

        updateStorage(Projects, currentProject);
    });

    const closeItemInput = document.querySelector('.close-item-input');
    closeItemInput.addEventListener('click', () => {
        const itemInputDiv = document.querySelector('.item-input');
        
        const itemTitleInput = document.getElementById('itemTitle');
        const itemTitle = itemTitleInput.value;        
        itemTitleInput.value = '';

        const itemDesInput = document.getElementById('itemDes');
        itemDesInput.value = '';

        const itemDateInput = document.getElementById('itemDate');
        itemDateInput.value = '';

        const itemPrioInputs = document.querySelectorAll('input[name="itemPrio"]');
        itemPrioInputs.forEach(input => {
            input.checked = false;
        });
        itemInputDiv.close();
    });

    if (!Projects['Todo'] && Object.keys(Projects).length === 0) {
        addProject('Todo');
        Projects.Todo.push(createTodoItem('Read Book', 'Read three chapters', '2024-07-02', 'Low'));
        Projects.Todo.push(createTodoItem('Plan Weekend Trip', 'Research and book activities', '2024-07-06', 'Mid'));
        Projects.Todo.push(createTodoItem('Pay Bills', 'Pay the utility and credit card bills', '2024-07-10', 'High'));
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayContent)(Projects, currentProject);
        updateStorage(Projects, currentProject);
        return;
    }

    
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(Projects, setCurrentProject);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.applyProjectsBgColor)(Projects, currentProject);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayContent)(Projects, currentProject);
    
})();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDOUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FB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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnlDOztBQUVsQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFhO0FBQ3pCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxJQUFJO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsWUFBWSx3REFBYTtBQUN6QjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFBxQjtBQU9IOztBQUVYO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBZTtBQUN2QixRQUFRLDZEQUFvQjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBcUI7QUFDN0IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQWU7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVksNkRBQW9CO0FBQ2hDLFlBQVksdURBQWM7QUFDMUI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsWUFBWSw4Q0FBUztBQUNyQjtBQUNBLFlBQVksdURBQWM7QUFDMUIsVUFBVSxTQUFTLDhDQUFTO0FBQzVCLHFDQUFxQyw4Q0FBUztBQUM5QyxZQUFZLHVEQUFjO0FBQzFCLFlBQVksOENBQVM7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx3REFBZTtBQUNuQixJQUFJLDZEQUFvQjtBQUN4QixJQUFJLHVEQUFjO0FBQ2xCO0FBQ0EsQ0FBQzs7Ozs7OztVQ2xNRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnVidW50dS1ib2xkLWl0YWxpYyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLS1tYWluLWJsYWNrOiByZ2IoNTksIDU5LCA1OSk7XG4gICAgLS1tYWluLWJsdWU6IHJnYigxMDQsIDIwMiwgMjI2KTtcbiAgICAtLW1haW4tcmVkOiByZ2IoMjMwLCAxMTUsIDExNSk7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxOTIsIDE5MiwgMTkyKTtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlYmFyIHtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDUwJSwgMzAwcHgpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDE5MiwgMTkyLCAxOTIpO1xufVxuXG4uc2lkZWJhci10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5zaWRlYmFyLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG5cbi5wcm9qZWN0cy1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuXG4jYWRkUHJvamVjdCB7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmx1ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbiNhZGRQcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG59XG5cbiNkZWxldGVQcm9qZWN0c0J1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcbn1cblxuI2RlbGV0ZVByb2plY3RzQnV0dG9uPnN2ZyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4jZGVsZXRlUHJvamVjdHNCdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiKDIxOSwgMjE5LCAyMTkpO1xufVxuXG4ucHJvamVjdHMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmlucHV0W25hbWU9J2RlbGV0ZVByb2plY3RJdGVtJ10ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNzdWJtaXREZWxldGVQcm9qZWN0cyB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXJlZCk7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigxOTksIDc2LCA3Nik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbn1cblxuI3N1Ym1pdERlbGV0ZVByb2plY3RzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA5MCwgOTApO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG59XG5cbi5hZGQtcHJvamVjdCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucHJvamVjdC1pbnB1dCwgLml0ZW0taW5wdXQsIC5kZWxldGUtcHJvamVjdHMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC01MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnByb2plY3QtaW5wdXQtY29udGFpbmVyLCAuaXRlbS1pbnB1dC1jb250YWluZXIsIC5kZWxldGUtcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xufVxuXG4uY2xvc2UtcHJvamVjdC1pbnB1dCwgLmNsb3NlLWl0ZW0taW5wdXQsIC5jbG9zZS1kZWxldGUtcHJvamVjdHMge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogM3B4IDlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XG59XG5cbi5jbG9zZS1wcm9qZWN0LWlucHV0OmhvdmVyLCAuY2xvc2UtaXRlbS1pbnB1dDpob3ZlciwgLmNsb3NlLWRlbGV0ZS1wcm9qZWN0czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xufVxuXG4jcHJvamVjdEZvcm0sICNpdGVtRm9ybSwgI2RlbGV0ZVByb2plY3RzRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jcHJvamVjdElucHV0LCAjaXRlbVRpdGxlLCAjaXRlbURlcywgI2l0ZW1EYXRlIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTcyLCAxNzIsIDE3Mik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnByaW9yaXR5LW9wdGlvbnMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4jcHJvamVjdElucHV0OmhvdmVyLCAjcHJvamVjdElucHV0OmFjdGl2ZSxcbiNpdGVtVGl0bGU6aG92ZXIsICNpdGVtVGl0bGU6YWN0aXZlLFxuI2l0ZW1EZXM6aG92ZXIsICNpdGVtRGVzOmFjdGl2ZSxcbiNpdGVtRGF0ZTpob3ZlciwgI2l0ZW1EYXRlOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4IHJnYigyMjYsIDIyNiwgMjI2KTtcbn1cblxuI3N1Ym1pdFByb2plY3QsICNzdWJtaXRJdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYig4MiwgMTYzLCAxODQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG59XG5cbiNzdWJtaXRQcm9qZWN0OmhvdmVyLCAjc3VibWl0SXRlbTpob3ZlciwgI2FkZEl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgMTg1LCAyMDkpO1xufVxuXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCAyMjBweCk7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCA0MDBweCkpO1xuICAgIH1cbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYigxOTAsIDE5MCwgMTkwKTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaXRlbS1wcmlvLCAuaXRlbS1zdGF0dXMsIC5pdGVtLWJ1dHRvbnMtZGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaXRlbS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xufVxuXG4uaXRlbS1kYXRlIHtcbiAgICBjb2xvcjogcmdiKDk3LCA5NywgOTcpO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLml0ZW0tZGVzIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaXRlbS1wcmlvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pdGVtLXByaW8tY29udGFpbmVyIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLml0ZW0tcHJpby12YWx1ZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweCAxMHB4IDJweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pdGVtLXN0YXR1cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW0tc3RhdHVzLWNvbnRhaW5lciBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pdGVtLXN0YXR1cy1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaXRlbS1zdGF0dXMtYm94OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDE5OSwgMTk5LCAxOTkpO1xufVxuXG4uaXRlbS1zdGF0dXMtZmlyc3Qge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxOTAsIDE5MCwgMTkwKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaXRlbS1zdGF0dXMtc2Vjb25kIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuXG4uaXRlbS1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLWVkaXQtYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcbn1cblxuLml0ZW0tZWRpdC1idXR0b24+c3ZnIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XG59XG5cbi5pdGVtLWRlbGV0ZS1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaXRlbS1kZWxldGUtYnV0dG9uPnN2ZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXJlZCk7XG59XG5cbi5pdGVtLWVkaXQtYnV0dG9uOmhvdmVyLCAuaXRlbS1kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigyMzUsIDIzNSwgMjM1KTtcbn1cblxuLml0ZW0tYXJyb3ctYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDE5MCwgMTkwLCAxOTApO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMCU7XG59XG5cbi5pdGVtLWFycm93LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjA5LCAyMDksIDIwOSk7XG59XG5cbi5pdGVtLWFycm93LWJ1dHRvbj5zdmcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2FkZEl0ZW0ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2IoMjA5LCAyMDksIDIwOSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJsdWUpO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0JBQXNCO0lB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RUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4udWJ1bnR1LWJvbGQtaXRhbGljIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAtLW1haW4tYmxhY2s6IHJnYig1OSwgNTksIDU5KTtcXG4gICAgLS1tYWluLWJsdWU6IHJnYigxMDQsIDIwMiwgMjI2KTtcXG4gICAgLS1tYWluLXJlZDogcmdiKDIzMCwgMTE1LCAxMTUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTkyLCAxOTIsIDE5Mik7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA1MCUsIDMwMHB4KTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDE5MiwgMTkyLCAxOTIpO1xcbn1cXG5cXG4uc2lkZWJhci10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5zaWRlYmFyLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLnByb2plY3RzLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1ibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcXG59XFxuXFxuI2RlbGV0ZVByb2plY3RzQnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xcbn1cXG5cXG4jZGVsZXRlUHJvamVjdHNCdXR0b24+c3ZnIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuI2RlbGV0ZVByb2plY3RzQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiKDIxOSwgMjE5LCAyMTkpO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmlucHV0W25hbWU9J2RlbGV0ZVByb2plY3RJdGVtJ10ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4jc3VibWl0RGVsZXRlUHJvamVjdHMge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDE5OSwgNzYsIDc2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jc3VibWl0RGVsZXRlUHJvamVjdHM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA5MCwgOTApO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQsIC5pdGVtLWlucHV0LCAuZGVsZXRlLXByb2plY3RzIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IC01MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQtY29udGFpbmVyLCAuaXRlbS1pbnB1dC1jb250YWluZXIsIC5kZWxldGUtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcXG59XFxuXFxuLmNsb3NlLXByb2plY3QtaW5wdXQsIC5jbG9zZS1pdGVtLWlucHV0LCAuY2xvc2UtZGVsZXRlLXByb2plY3RzIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxufVxcblxcbi5jbG9zZS1wcm9qZWN0LWlucHV0OmhvdmVyLCAuY2xvc2UtaXRlbS1pbnB1dDpob3ZlciwgLmNsb3NlLWRlbGV0ZS1wcm9qZWN0czpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcXG59XFxuXFxuI3Byb2plY3RGb3JtLCAjaXRlbUZvcm0sICNkZWxldGVQcm9qZWN0c0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdElucHV0LCAjaXRlbVRpdGxlLCAjaXRlbURlcywgI2l0ZW1EYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTcyLCAxNzIsIDE3Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktb3B0aW9ucyB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Byb2plY3RJbnB1dDpob3ZlciwgI3Byb2plY3RJbnB1dDphY3RpdmUsXFxuI2l0ZW1UaXRsZTpob3ZlciwgI2l0ZW1UaXRsZTphY3RpdmUsXFxuI2l0ZW1EZXM6aG92ZXIsICNpdGVtRGVzOmFjdGl2ZSxcXG4jaXRlbURhdGU6aG92ZXIsICNpdGVtRGF0ZTphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiKDIyNiwgMjI2LCAyMjYpO1xcbn1cXG5cXG4jc3VibWl0UHJvamVjdCwgI3N1Ym1pdEl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ibHVlKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYig4MiwgMTYzLCAxODQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNzdWJtaXRQcm9qZWN0OmhvdmVyLCAjc3VibWl0SXRlbTpob3ZlciwgI2FkZEl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTAsIDE4NSwgMjA5KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNTBweCwgMjIwcHgpO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgNDAwcHgpKTtcXG4gICAgfVxcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uaXRlbS1wcmlvLCAuaXRlbS1zdGF0dXMsIC5pdGVtLWJ1dHRvbnMtZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxufVxcblxcbi5pdGVtLWRhdGUge1xcbiAgICBjb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5pdGVtLWRlcyB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5pdGVtLXByaW8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaXRlbS1wcmlvLWNvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLml0ZW0tcHJpby12YWx1ZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pdGVtLXN0YXR1cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1zdGF0dXMtY29udGFpbmVyIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uaXRlbS1zdGF0dXMtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaXRlbS1zdGF0dXMtYm94OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxOTksIDE5OSwgMTk5KTtcXG59XFxuXFxuLml0ZW0tc3RhdHVzLWZpcnN0IHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaXRlbS1zdGF0dXMtc2Vjb25kIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuXFxuLml0ZW0tYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pdGVtLWVkaXQtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG59XFxuXFxuLml0ZW0tZWRpdC1idXR0b24+c3ZnIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XFxufVxcblxcbi5pdGVtLWRlbGV0ZS1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLml0ZW0tZGVsZXRlLWJ1dHRvbj5zdmcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xcbn1cXG5cXG4uaXRlbS1lZGl0LWJ1dHRvbjpob3ZlciwgLml0ZW0tZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuLml0ZW0tYXJyb3ctYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAlO1xcbn1cXG5cXG4uaXRlbS1hcnJvdy1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjA5LCAyMDksIDIwOSk7XFxufVxcblxcbi5pdGVtLWFycm93LWJ1dHRvbj5zdmcge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkSXRlbSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiKDIwOSwgMjA5LCAyMDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHt1cGRhdGVTdG9yYWdlfSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QpIHtcbiAgICBjb25zdCBzaWRlYmFyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWdyaWQnKTtcbiAgICBzaWRlYmFyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBPYmplY3Qua2V5cyhQcm9qZWN0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBrZXk7XG4gICAgICAgIGRpdi5pZCA9IGtleTtcbiAgICAgICAgc2lkZWJhckdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChrZXkpO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRlbnQoUHJvamVjdHMsIGtleSk7XG4gICAgICAgICAgICBhcHBseVByb2plY3RzQmdDb2xvcihQcm9qZWN0cywga2V5KTtcbiAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoUHJvamVjdHMsIGtleSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVByb2plY3RzQmdDb2xvcihQcm9qZWN0cywgY3VycmVudFByb2plY3QpIHtcbiAgICBPYmplY3Qua2V5cyhQcm9qZWN0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpO1xuICAgICAgICBpZiAoa2V5ID09PSBjdXJyZW50UHJvamVjdCkge1xuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjEyLCAyMTIsIDIxMiknO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmJvcmRlckxlZnQgPSAnNHB4IHNvbGlkIHZhcigtLW1haW4tYmxhY2spJztcbiAgICAgICAgICAgIGRpdi5zdHlsZS5wYWRkaW5nTGVmdCA9ICcxNnB4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDIzOCwgMjM4LCAyMzgpJztcbiAgICAgICAgICAgIGRpdi5zdHlsZS5ib3JkZXJMZWZ0ID0gJ25vbmUnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzIwcHgnO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlEZWxldGVQcm9qZWN0cyhQcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG4gICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIE9iamVjdC5rZXlzKFByb2plY3RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVsZXRlUHJvamVjdEl0ZW0nKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke2tleX1gKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICcgJyArIGtleTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZm9ybVN0YXRlID0ge1xuICAgIGl0ZW1Gb3JtTW9kZTogJ2FkZCcsXG4gICAgaXRlbUVkaXRJbmRleDogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudChQcm9qZWN0cywgcHJvamVjdCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBQcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgbGV0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScpO1xuICAgICAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgIGxldCBpdGVtRGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EZXMuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXMnKTtcbiAgICAgICAgaXRlbURlcy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgbGV0IGl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EYXRlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGF0ZScpO1xuICAgICAgICBpdGVtRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcblxuICAgICAgICBsZXQgaXRlbVByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVByaW8uY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmlvJyk7XG4gICAgICAgIGxldCBpdGVtUHJpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtUHJpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaW8tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuICAgICAgICBsZXQgaXRlbVByaW9WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtUHJpb1ZhbHVlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpby12YWx1ZScpO1xuICAgICAgICBpdGVtUHJpb1ZhbHVlLnRleHRDb250ZW50ID0gaXRlbS5wcmlvcml0eTtcblxuICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ0xvdycpIHtcbiAgICAgICAgICAgIGl0ZW1QcmlvVmFsdWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxNjUsIDI1NSwgMTY1KSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ01pZCcpIHtcbiAgICAgICAgICAgIGl0ZW1QcmlvVmFsdWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTMsIDI1NSwgMTY1KSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ0hpZ2gnKSB7XG4gICAgICAgICAgICBpdGVtUHJpb1ZhbHVlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjU1LCAxNjUsIDE2NSknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGl0ZW1CdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1CdXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tYnV0dG9ucy1kaXYnKTtcblxuICAgICAgICBsZXQgaXRlbUJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1idXR0b25zLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGxldCBpdGVtU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1TdGF0dXMuY2xhc3NMaXN0LmFkZCgnaXRlbS1zdGF0dXMnKTtcbiAgICAgICAgbGV0IGl0ZW1TdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLXN0YXR1cy1jb250YWluZXInKTtcbiAgICAgICAgbGV0IGl0ZW1TdGF0dXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtU3RhdHVzVGV4dC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQ6ICc7XG4gICAgICAgIGxldCBpdGVtU3RhdHVzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1TdGF0dXNCb3guY2xhc3NMaXN0LmFkZCgnaXRlbS1zdGF0dXMtYm94Jyk7XG4gICAgICAgIGxldCBpdGVtU3RhdHVzRmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVN0YXR1c0ZpcnN0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc3RhdHVzLWZpcnN0Jyk7XG4gICAgICAgIGxldCBpdGVtU3RhdHVzU2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1TdGF0dXNTZWNvbmQuY2xhc3NMaXN0LmFkZCgnaXRlbS1zdGF0dXMtc2Vjb25kJyk7XG5cbiAgICAgICAgbGV0IGl0ZW1CdXR0b25zQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1CdXR0b25zQm94LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tYnV0dG9ucy1ib3gnKTtcblxuICAgICAgICBsZXQgaXRlbUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaXRlbUVkaXRCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNC4wNiw5TDE1LDkuOTRMNS45MiwxOUg1VjE4LjA4TDE0LjA2LDlNMTcuNjYsM0MxNy40MSwzIDE3LjE1LDMuMSAxNi45NiwzLjI5TDE1LjEzLDUuMTJMMTguODgsOC44N0wyMC43MSw3LjA0QzIxLjEsNi42NSAyMS4xLDYgMjAuNzEsNS42M0wxOC4zNywzLjI5QzE4LjE3LDMuMDkgMTcuOTIsMyAxNy42NiwzTTE0LjA2LDYuMTlMMywxNy4yNVYyMUg2Ljc1TDE3LjgxLDkuOTRMMTQuMDYsNi4xOVpcIiAvPjwvc3ZnPic7XG4gICAgICAgIGl0ZW1FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZWRpdC1idXR0b24nKTtcblxuICAgICAgICBsZXQgaXRlbURlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBpdGVtRGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNNyw2SDE3VjE5SDdWNk05LDhWMTdIMTFWOEg5TTEzLDhWMTdIMTVWOEgxM1pcIiAvPjwvc3ZnPic7XG4gICAgICAgIGl0ZW1EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZWxldGUtYnV0dG9uJyk7XG5cbiAgICAgICAgbGV0IGl0ZW1BcnJvd0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBpdGVtQXJyb3dCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcIiAvPjwvc3ZnPic7XG4gICAgICAgIGl0ZW1BcnJvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWFycm93LWJ1dHRvbicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGFycm93QnV0dG9uU3RhdHVzID0gJ2Nsb3NlJztcblxuICAgICAgICBpdGVtU3RhdHVzQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLW1haW4tYmx1ZSknO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNGaXJzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tbWFpbi1ibHVlKSc7XG4gICAgICAgICAgICAgICAgaXRlbVN0YXR1c0ZpcnN0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpdGVtU3RhdHVzU2Vjb25kLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjQ1LCAyNDUsIDI0NSknO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNTZWNvbmQuc3R5bGUuYm94U2hhZG93ID0gJzBweCAwcHggNXB4IDFweCByZ2IoMTkwLCAxOTAsIDE5MCknO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGl0ZW0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtU3RhdHVzQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMTk2LCAxOTYsIDE5NiknO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNGaXJzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI0NSwgMjQ1LCAyNDUpJztcbiAgICAgICAgICAgICAgICBpdGVtU3RhdHVzRmlyc3Quc3R5bGUuYm94U2hhZG93ID0gJzBweCAwcHggNXB4IDFweCByZ2IoMTkwLCAxOTAsIDE5MCknO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNTZWNvbmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0ncmdiKDE5NiwgMTk2LCAxOTYpJztcbiAgICAgICAgICAgICAgICBpdGVtU3RhdHVzU2Vjb25kLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcblxuICAgICAgICAgICAgICAgIGl0ZW0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW1FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZm9ybVN0YXRlLml0ZW1Gb3JtTW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgIGZvcm1TdGF0ZS5pdGVtRWRpdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICBjb25zdCBpdGVtSW5wdXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1pbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVRpdGxlJyk7XG4gICAgICAgICAgICBpdGVtVGl0bGVJbnB1dC52YWx1ZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICBjb25zdCBpdGVtRGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbURlcycpO1xuICAgICAgICAgICAgaXRlbURlc0lucHV0LnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbURhdGUnKTtcbiAgICAgICAgICAgIGl0ZW1EYXRlSW5wdXQudmFsdWUgPSBpdGVtLmR1ZURhdGU7XG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJpdGVtUHJpb1wiXScpO1xuICAgICAgICAgICAgaXRlbVByaW9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSBpdGVtLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXRlbUlucHV0RGl2LnNob3dNb2RhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgUHJvamVjdHNbcHJvamVjdF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoUHJvamVjdHMsIHByb2plY3QpO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRlbnQoUHJvamVjdHMsIHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtQXJyb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJyb3dCdXR0b25TdGF0dXMgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICAgICAgICBpdGVtUHJpby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBpdGVtU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGl0ZW1CdXR0b25zRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTgwcHgnO1xuXG4gICAgICAgICAgICAgICAgaXRlbUFycm93QnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcIiAvPjwvc3ZnPic7XG4gICAgICAgICAgICAgICAgaXRlbUFycm93QnV0dG9uLnN0eWxlLnRvcCA9ICcwJSc7XG5cbiAgICAgICAgICAgICAgICBhcnJvd0J1dHRvblN0YXR1cyA9ICdvcGVuJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJvd0J1dHRvblN0YXR1cyA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICAgICAgaXRlbVByaW8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpdGVtU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaXRlbUJ1dHRvbnNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgICAgIGl0ZW1Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcblxuICAgICAgICAgICAgICAgIGl0ZW1BcnJvd0J1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlwiIC8+PC9zdmc+JztcbiAgICAgICAgICAgICAgICBpdGVtQXJyb3dCdXR0b24uc3R5bGUudG9wID0gJzEwJSc7XG5cbiAgICAgICAgICAgICAgICBhcnJvd0J1dHRvblN0YXR1cyA9ICdjbG9zZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW1QcmlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XG4gICAgICAgIGl0ZW1QcmlvQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmlvVmFsdWUpO1xuICAgICAgICBpdGVtUHJpby5hcHBlbmRDaGlsZChpdGVtUHJpb0NvbnRhaW5lcik7XG5cbiAgICAgICAgaXRlbVN0YXR1c0JveC5hcHBlbmRDaGlsZChpdGVtU3RhdHVzRmlyc3QpO1xuICAgICAgICBpdGVtU3RhdHVzQm94LmFwcGVuZENoaWxkKGl0ZW1TdGF0dXNTZWNvbmQpO1xuICAgICAgICBpdGVtU3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1TdGF0dXNUZXh0KTtcbiAgICAgICAgaXRlbVN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtU3RhdHVzQm94KTtcbiAgICAgICAgaXRlbVN0YXR1cy5hcHBlbmRDaGlsZChpdGVtU3RhdHVzQ29udGFpbmVyKTtcblxuICAgICAgICBpdGVtQnV0dG9uc0JveC5hcHBlbmRDaGlsZChpdGVtRWRpdEJ1dHRvbik7XG4gICAgICAgIGl0ZW1CdXR0b25zQm94LmFwcGVuZENoaWxkKGl0ZW1EZWxldGVCdXR0b24pO1xuICAgICAgICBpdGVtQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtU3RhdHVzKTtcbiAgICAgICAgaXRlbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUJ1dHRvbnNCb3gpO1xuICAgICAgICBpdGVtQnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChpdGVtQnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EYXRlKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpbyk7XG5cbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQnV0dG9uc0Rpdik7XG5cbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQXJyb3dCdXR0b24pO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgXG5cbiAgICBjb25zdCBhZGRJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkSXRlbURpdi5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEl0ZW1CdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJ3aGl0ZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTIwIDE0SDE0VjIwSDEwVjE0SDRWMTBIMTBWNEgxNFYxMEgyMFYxNFpcIiAvPjwvc3ZnPic7XG4gICAgYWRkSXRlbUJ1dHRvbi5pZCA9ICdhZGRJdGVtJztcbiAgICBhZGRJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5wdXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1pbnB1dCcpO1xuICAgICAgICBpdGVtSW5wdXREaXYuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgYWRkSXRlbURpdi5hcHBlbmRDaGlsZChhZGRJdGVtQnV0dG9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEl0ZW1EaXYpO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgXG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIGRpc3BsYXlDb250ZW50LFxuICAgIGFwcGx5UHJvamVjdHNCZ0NvbG9yLFxuICAgIGRpc3BsYXlEZWxldGVQcm9qZWN0cyxcbiAgICBmb3JtU3RhdGUsXG59IGZyb20gJy4vZG9tLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2UoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoUHJvamVjdHMpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFByb2plY3QnLCBjdXJyZW50UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgaWYgKHByb2plY3RzKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb2plY3RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkQ3VycmVudFByb2plY3QoKSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFByb2plY3QnKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5cbihmdW5jdGlvbigpIHtcbiAgICBsZXQgUHJvamVjdHMgPSBsb2FkU3RvcmFnZSgpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGxvYWRDdXJyZW50UHJvamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIFByb2plY3RzW3Byb2plY3ROYW1lXSA9IFtdO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyhQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QpO1xuICAgICAgICBhcHBseVByb2plY3RzQmdDb2xvcihQcm9qZWN0cywgY3VycmVudFByb2plY3QpO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dERpdi5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXByb2plY3QtaW5wdXQnKTtcbiAgICBjbG9zZVByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdElucHV0RGl2LmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybScpO1xuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IHByb2plY3RJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dERpdi5jbG9zZSgpO1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RWYWx1ZSk7XG4gICAgICAgIGRpc3BsYXlDb250ZW50KFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVQcm9qZWN0c0J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0c0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdHMnKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdHNEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIGRpc3BsYXlEZWxldGVQcm9qZWN0cyhQcm9qZWN0cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZURlbGV0ZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWRlbGV0ZS1wcm9qZWN0cycpO1xuICAgIGNsb3NlRGVsZXRlUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RzRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1wcm9qZWN0cycpO1xuICAgICAgICBkZWxldGVQcm9qZWN0c0RpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdHNGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVByb2plY3RzRm9ybScpO1xuICAgIGRlbGV0ZVByb2plY3RzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdHNEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXByb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImRlbGV0ZVByb2plY3RJdGVtXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKFByb2plY3RzW3Byb2plY3QudmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIFByb2plY3RzW3Byb2plY3QudmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlUHJvamVjdHNEaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QoT2JqZWN0LmtleXMoUHJvamVjdHMpWzBdKTtcbiAgICAgICAgdXBkYXRlU3RvcmFnZShQcm9qZWN0cywgY3VycmVudFByb2plY3QpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoUHJvamVjdHMsIHNldEN1cnJlbnRQcm9qZWN0KTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoUHJvamVjdHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHlQcm9qZWN0c0JnQ29sb3IoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIGRpc3BsYXlDb250ZW50KFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1Gb3JtJyk7XG4gICAgaXRlbUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1UaXRsZScpO1xuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBpdGVtVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgaXRlbVRpdGxlSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zdCBpdGVtRGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbURlcycpO1xuICAgICAgICBjb25zdCBpdGVtRGVzID0gaXRlbURlc0lucHV0LnZhbHVlO1xuICAgICAgICBpdGVtRGVzSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zdCBpdGVtRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1EYXRlJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EYXRlID0gaXRlbURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgaXRlbURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIml0ZW1QcmlvXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgaXRlbVByaW9JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiaXRlbVByaW9cIl0nKTtcbiAgICAgICAgaXRlbVByaW9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBpdGVtID0gY3JlYXRlVG9kb0l0ZW0oaXRlbVRpdGxlLCBpdGVtRGVzLCBpdGVtRGF0ZSwgaXRlbVByaW8pO1xuICAgICAgICBcbiAgICAgICAgaWYgKGZvcm1TdGF0ZS5pdGVtRm9ybU1vZGUgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICBQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGRpc3BsYXlDb250ZW50KFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybVN0YXRlLml0ZW1Gb3JtTW9kZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICBQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1bZm9ybVN0YXRlLml0ZW1FZGl0SW5kZXhdID0gaXRlbTtcbiAgICAgICAgICAgIGRpc3BsYXlDb250ZW50KFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBmb3JtU3RhdGUuaXRlbUZvcm1Nb2RlID0gJ2FkZCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtSW5wdXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1pbnB1dCcpO1xuICAgICAgICBpdGVtSW5wdXREaXYuY2xvc2UoKTtcblxuICAgICAgICB1cGRhdGVTdG9yYWdlKFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZUl0ZW1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1pdGVtLWlucHV0Jyk7XG4gICAgY2xvc2VJdGVtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbnB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWlucHV0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpdGVtVGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtVGl0bGUnKTtcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbVRpdGxlSW5wdXQudmFsdWU7ICAgICAgICBcbiAgICAgICAgaXRlbVRpdGxlSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zdCBpdGVtRGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbURlcycpO1xuICAgICAgICBpdGVtRGVzSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zdCBpdGVtRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1EYXRlJyk7XG4gICAgICAgIGl0ZW1EYXRlSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zdCBpdGVtUHJpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJpdGVtUHJpb1wiXScpO1xuICAgICAgICBpdGVtUHJpb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW1JbnB1dERpdi5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFQcm9qZWN0c1snVG9kbyddICYmIE9iamVjdC5rZXlzKFByb2plY3RzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWRkUHJvamVjdCgnVG9kbycpO1xuICAgICAgICBQcm9qZWN0cy5Ub2RvLnB1c2goY3JlYXRlVG9kb0l0ZW0oJ1JlYWQgQm9vaycsICdSZWFkIHRocmVlIGNoYXB0ZXJzJywgJzIwMjQtMDctMDInLCAnTG93JykpO1xuICAgICAgICBQcm9qZWN0cy5Ub2RvLnB1c2goY3JlYXRlVG9kb0l0ZW0oJ1BsYW4gV2Vla2VuZCBUcmlwJywgJ1Jlc2VhcmNoIGFuZCBib29rIGFjdGl2aXRpZXMnLCAnMjAyNC0wNy0wNicsICdNaWQnKSk7XG4gICAgICAgIFByb2plY3RzLlRvZG8ucHVzaChjcmVhdGVUb2RvSXRlbSgnUGF5IEJpbGxzJywgJ1BheSB0aGUgdXRpbGl0eSBhbmQgY3JlZGl0IGNhcmQgYmlsbHMnLCAnMjAyNC0wNy0xMCcsICdIaWdoJykpO1xuICAgICAgICBkaXNwbGF5Q29udGVudChQcm9qZWN0cywgY3VycmVudFByb2plY3QpO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBcbiAgICBkaXNwbGF5UHJvamVjdHMoUHJvamVjdHMsIHNldEN1cnJlbnRQcm9qZWN0KTtcbiAgICBhcHBseVByb2plY3RzQmdDb2xvcihQcm9qZWN0cywgY3VycmVudFByb2plY3QpO1xuICAgIGRpc3BsYXlDb250ZW50KFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgXG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=