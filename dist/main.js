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
    background: linear-gradient(to right, rgb(255, 255, 255) -10%, rgb(206, 206, 206));
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
    border-top: 1px solid rgb(224, 224, 224);
    padding-top: 15px;
}

.projects-list > label {
    margin-bottom: 15px;
    border-bottom: 1px solid rgb(224, 224, 224);
}

input[name='deleteProjectItem'] {
    margin-bottom: 15px;
}

.delete-projects {
    width: 200px;
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
    border: 1px solid rgb(199, 199, 199);
    border-radius: 6px;
    padding-left: 10px;
    margin: 10px 0px 25px 0px;
    color: var(--main-black);
    outline: none;
}

.priority-options {
    padding-top: 10px;
    padding-bottom: 25px;
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
    background-color: rgb(245, 254, 255);
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
    display: flex;
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
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

.item-buttons-box {
    display: flex;
    flex-shrink: 0;
}

.item-edit-button {
    border: none;
    border-radius: 25px;
    padding: 5px;
    margin-left: 10px;
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
    color: var(--main-black);
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

@media (min-width: 1400px) {
    .content {
        grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
    }
}

@media screen and (max-width: 580px) {

    .container {
        overflow-x: scroll;
    }

    .sidebar {
        width: clamp(150px, 40vw, 250px);
        flex-shrink: 1;
    }

    .projects-buttons-container {
        flex-direction: column;
        padding-left: 0px;
    }

    #addProject {
        font-size: 0.7rem;
        margin-right: 10px;
        margin-right: 0;
        margin-bottom: 10px;
        padding: 8px 10px;
    }

    #deleteProjectsButton {
        margin-right: 0;
    }

    .content {
        padding: 20px 10px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');\n\n.ubuntu-bold-italic {\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 700;\n  font-style: italic;\n}\n\n:root {\n    font-size: 16px;\n    --main-black: rgb(59, 59, 59);\n    --main-blue: rgb(104, 202, 226);\n    --main-red: rgb(230, 115, 115);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    height: 100vh;\n    width: 100%;\n    font-family: \"Ubuntu\", sans-serif;\n}\n\n.header {\n    height: 80px;\n    background: linear-gradient(to right, rgb(255, 255, 255) -10%, rgb(206, 206, 206));\n    display: flex;\n    align-items: center;\n    border-bottom: 2px solid rgb(192, 192, 192);\n}\n\n.title {\n    margin-left: 20px;\n    color: var(--main-black);\n    font-size: 3rem;\n}\n\n.container {\n    display: flex;\n    min-height: 100%;\n}\n\n.sidebar {\n    width: clamp(200px, 50%, 300px);\n    flex-shrink: 0;\n    background-color: rgb(238, 238, 238);\n    display: flex;\n    flex-direction: column;\n    border-right: 2px solid rgb(192, 192, 192);\n}\n\n.sidebar-title {\n    color: var(--main-black);\n    font-size: 1.2rem;\n    padding: 15px;\n}\n\n.sidebar-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n.projects-buttons-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n    padding-left: 60px;\n}\n\n#addProject {\n    padding: 8px 15px;\n    color: var(--main-blue);\n    font-size: 1rem;\n    border: 1px solid var(--main-blue);\n    background-color: rgb(255, 255, 255);\n    border-radius: 5px;\n    font-family: \"Ubuntu\", sans-serif;\n    margin-right: 20px;\n}\n\n#addProject:hover {\n    background-color: rgb(248, 248, 248);\n}\n\n#deleteProjectsButton {\n    border: none;\n    border-radius: 6px;\n    padding: 5px;\n    width: 35px;\n    height: 35px;\n    background-color: rgb(212, 212, 212);\n}\n\n#deleteProjectsButton>svg {\n    width: 25px;\n    height: 25px;\n}\n\n#deleteProjectsButton:hover {\n    background-color: rgb(201, 201, 201);\n    box-shadow: 0px 0px 4px 2px rgb(219, 219, 219);\n}\n\n.projects-list {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid rgb(224, 224, 224);\n    padding-top: 15px;\n}\n\n.projects-list > label {\n    margin-bottom: 15px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n}\n\ninput[name='deleteProjectItem'] {\n    margin-bottom: 15px;\n}\n\n.delete-projects {\n    width: 200px;\n}\n\n#submitDeleteProjects {\n    padding: 10px 20px;\n    align-self: center;\n    font-size: 1rem;\n    border: none;\n    color: white;\n    background-color: var(--main-red);\n    border-bottom: 3px solid rgb(199, 76, 76);\n    border-radius: 10px;\n    font-family: \"Ubuntu\", sans-serif;\n}\n\n#submitDeleteProjects:hover {\n    background-color: rgb(218, 90, 90);\n}\n\n.project-item {\n    padding: 20px;\n    text-align: center;\n    font-size: 1.3rem;\n    color: var(--main-black);\n    border-radius: 5px;\n\n}\n\n.project-input, .item-input, .delete-projects {\n    position: fixed;\n    top: -50px;\n    padding: 20px;\n    background-color: rgb(255, 255, 255);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    z-index: 1000;\n    border: none;\n    border-radius: 15px;\n}\n\n.project-input-container, .item-input-container, .delete-projects-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    color: var(--main-black);\n}\n\n.close-project-input, .close-item-input, .close-delete-projects {\n    align-self: flex-end;\n    border-radius: 6px;\n    border: none;\n    padding: 3px 9px;\n    margin-bottom: 15px;\n    font-size: 1.2rem;\n    background-color: rgb(228, 228, 228);\n    color: var(--main-black);\n}\n\n.close-project-input:hover, .close-item-input:hover, .close-delete-projects:hover {\n    background-color: rgb(206, 206, 206);\n}\n\n#projectForm, #itemForm, #deleteProjectsForm {\n    display: flex;\n    flex-direction: column;\n}\n\n#projectInput, #itemTitle, #itemDes, #itemDate {\n    font-size: 1.3rem;\n    height: 2.5rem;\n    border: 1px solid rgb(199, 199, 199);\n    border-radius: 6px;\n    padding-left: 10px;\n    margin: 10px 0px 25px 0px;\n    color: var(--main-black);\n    outline: none;\n}\n\n.priority-options {\n    padding-top: 10px;\n    padding-bottom: 25px;\n}\n\n#projectInput:hover, #projectInput:active,\n#itemTitle:hover, #itemTitle:active,\n#itemDes:hover, #itemDes:active,\n#itemDate:hover, #itemDate:active {\n    box-shadow: 0px 0px 4px 2px rgb(226, 226, 226);\n}\n\n#submitProject, #submitItem {\n    padding: 10px 20px;\n    align-self: center;\n    font-size: 1rem;\n    border: none;\n    color: white;\n    background-color: var(--main-blue);\n    border-bottom: 3px solid rgb(82, 163, 184);\n    border-radius: 10px;\n    font-family: \"Ubuntu\", sans-serif;\n}\n\n#submitProject:hover, #submitItem:hover, #addItem:hover {\n    background-color: rgb(90, 185, 209);\n}\n\n.content {\n    padding: 20px;\n    width: 100%;\n    max-height: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-auto-rows: minmax(50px, 220px);\n    gap: 20px;\n    background-color: rgb(245, 254, 255);\n}\n\n.item-container {\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n    padding-bottom: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 5px 2px rgb(190, 190, 190);\n    height: 100px;\n}\n\n.item-prio, .item-status, .item-buttons-div {\n    display: none;\n}\n\n.item-title {\n    font-size: 1.5rem;\n    font-weight: 500;\n    margin-bottom: 5px;\n    color: var(--main-black);\n}\n\n.item-date {\n    color: rgb(97, 97, 97);\n    margin-bottom: 5px;\n}\n\n.item-des {\n    margin-bottom: 5px;\n    display: flex;\n    flex-shrink: 0;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.item-prio-container {\n    display: flex;\n    margin-bottom: 5px;\n}\n\n.item-prio-container p {\n    margin: 0;\n    margin-right: 5px;\n}\n\n.item-prio-value {\n    align-self: center;\n    padding: 2px 10px 2px 10px;\n    border-radius: 10px;\n}\n\n.item-status-container {\n    display: flex;\n    align-items: center;\n}\n\n.item-status-container p {\n    margin: 0;\n    margin-right: 5px;\n}\n\n.item-status-box {\n    display: flex;\n    height: 25px;\n    width: 50px;\n    background-color: rgb(196, 196, 196);\n    border-radius: 20px;\n}\n\n.item-status-box:hover {\n    box-shadow: 0px 0px 5px 1px rgb(199, 199, 199);\n}\n\n.item-status-first {\n    height: 25px;\n    width: 25px;\n    background-color: rgb(245, 245, 245);\n    box-shadow: 0px 0px 5px 1px rgb(190, 190, 190);\n    border-radius: 20px;\n}\n\n.item-status-second {\n    height: 25px;\n    width: 25px;\n    border-radius: 20px;\n}\n\n\n.item-buttons-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n\n.item-buttons-box {\n    display: flex;\n    flex-shrink: 0;\n}\n\n.item-edit-button {\n    border: none;\n    border-radius: 25px;\n    padding: 5px;\n    margin-left: 10px;\n    width: 35px;\n    height: 35px;\n    background-color: rgb(236, 236, 236);\n}\n\n.item-edit-button>svg {\n    width: 20px;\n    height: 20px;\n    color: var(--main-blue);\n}\n\n.item-delete-button {\n    border: none;\n    border-radius: 25px;\n    padding: 5px;\n    width: 35px;\n    height: 35px;\n    background-color: rgb(236, 236, 236);\n    margin-left: 10px;\n}\n\n.item-delete-button>svg {\n    width: 20px;\n    height: 20px;\n    color: var(--main-red);\n}\n\n.item-edit-button:hover, .item-delete-button:hover {\n    background-color: rgb(221, 221, 221);\n    box-shadow: 0px 0px 5px 1px rgb(235, 235, 235);\n}\n\n.item-arrow-button {\n    border: none;\n    border-radius: 35px;\n    width: 35px;\n    height: 35px;\n    padding: 5px;\n    color: var(--main-black);\n    background-color: rgb(236, 236, 236);\n    box-shadow: 0px 0px 5px 1px rgb(190, 190, 190);\n    align-self: center;\n    position: relative;\n    top: 10%;\n}\n\n.item-arrow-button:hover {\n    background-color: rgb(221, 221, 221);\n    box-shadow: 0px 0px 5px 1px rgb(209, 209, 209);\n}\n\n.item-arrow-button>svg {\n    width: 25px;\n    height: 25px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#addItem {\n    height: 50px;\n    width: 50px;\n    font-size: 2rem;\n    border: none;\n    box-shadow: 0px 0px 5px 2px rgb(209, 209, 209);\n    color: white;\n    padding: 10px;\n    border-radius: 35px;\n    background-color: var(--main-blue);\n}\n\n@media (min-width: 1400px) {\n    .content {\n        grid-template-columns: repeat(auto-fit, minmax(250px, 400px));\n    }\n}\n\n@media screen and (max-width: 580px) {\n\n    .container {\n        overflow-x: scroll;\n    }\n\n    .sidebar {\n        width: clamp(150px, 40vw, 250px);\n        flex-shrink: 1;\n    }\n\n    .projects-buttons-container {\n        flex-direction: column;\n        padding-left: 0px;\n    }\n\n    #addProject {\n        font-size: 0.7rem;\n        margin-right: 10px;\n        margin-right: 0;\n        margin-bottom: 10px;\n        padding: 8px 10px;\n    }\n\n    #deleteProjectsButton {\n        margin-right: 0;\n    }\n\n    .content {\n        padding: 20px 10px;\n    }\n}"],"sourceRoot":""}]);
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
            itemContainer.style.background = 'linear-gradient(to right, rgb(255, 255, 255) 20%, rgb(232, 255, 233))';
        } else if (item.priority === 'Mid') {
            itemPrioValue.style.backgroundColor = 'rgb(253, 255, 165)';
            itemContainer.style.background = 'linear-gradient(to right, rgb(255, 255, 255) 20%, rgb(255, 255, 232))';
        } else if (item.priority === 'High') {
            itemPrioValue.style.backgroundColor = 'rgb(255, 165, 165)';
            itemContainer.style.background = 'linear-gradient(to right, rgb(255, 255, 255) 20%, rgb(255, 235, 232))';
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

        if (item.completed === true) {
            itemStatusBox.style.backgroundColor = 'var(--main-blue)';
            itemStatusFirst.style.backgroundColor = 'var(--main-blue)';
            itemStatusFirst.style.boxShadow = 'none';
            itemStatusSecond.style.backgroundColor = 'rgb(245, 245, 245)';
            itemStatusSecond.style.boxShadow = '0px 0px 5px 1px rgb(190, 190, 190)';
            
        } else if (item.completed === false) {
            itemStatusBox.style.backgroundColor = 'rgb(196, 196, 196)';
            itemStatusFirst.style.backgroundColor = 'rgb(245, 245, 245)';
            itemStatusFirst.style.boxShadow = '0px 0px 5px 1px rgb(190, 190, 190)';
            itemStatusSecond.style.backgroundColor ='rgb(196, 196, 196)';
            itemStatusSecond.style.boxShadow = 'none';
        }

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

        if (item.container === 'open') {
            itemPrio.style.display = 'block';
            itemStatus.style.display = 'block';
            itemButtonsDiv.style.display = 'block';

            itemContainer.style.height = '180px';

            itemArrowButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>';
            itemArrowButton.style.top = '0%';

        } else if (item.container === 'close') {
            itemPrio.style.display = 'none';
            itemStatus.style.display = 'none';
            itemButtonsDiv.style.display = 'none';

            itemContainer.style.height = '100px';

            itemArrowButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
            itemArrowButton.style.top = '10%';
        }

        itemStatusBox.addEventListener('click', () => {
            if (item.completed === false) {
                itemStatusBox.style.backgroundColor = 'var(--main-blue)';
                itemStatusFirst.style.backgroundColor = 'var(--main-blue)';
                itemStatusFirst.style.boxShadow = 'none';
                itemStatusSecond.style.backgroundColor = 'rgb(245, 245, 245)';
                itemStatusSecond.style.boxShadow = '0px 0px 5px 1px rgb(190, 190, 190)';
                
                item.completed = true;
                (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Projects, project);

            } else if (item.completed === true) {
                itemStatusBox.style.backgroundColor = 'rgb(196, 196, 196)';
                itemStatusFirst.style.backgroundColor = 'rgb(245, 245, 245)';
                itemStatusFirst.style.boxShadow = '0px 0px 5px 1px rgb(190, 190, 190)';
                itemStatusSecond.style.backgroundColor ='rgb(196, 196, 196)';
                itemStatusSecond.style.boxShadow = 'none';

                item.completed = false;
                (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Projects, project);
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
            if (item.container === 'close') {
                itemPrio.style.display = 'block';
                itemStatus.style.display = 'block';
                itemButtonsDiv.style.display = 'block';

                itemContainer.style.height = '180px';

                itemArrowButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>';
                itemArrowButton.style.top = '0%';

                item.container = 'open';
                (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Projects, project);

            } else if (item.container === 'open') {
                itemPrio.style.display = 'none';
                itemStatus.style.display = 'none';
                itemButtonsDiv.style.display = 'none';

                itemContainer.style.height = '100px';

                itemArrowButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
                itemArrowButton.style.top = '10%';

                item.container = 'close';
                (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Projects, project);
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

function loadCurrentProject(Projects) {
    const currentProject = localStorage.getItem('currentProject');
    if (currentProject) {
        return currentProject;
    } else {
        return Object.keys(Projects)[0];
    }
}

(function() {
    let Projects = loadStorage();
    let currentProject = loadCurrentProject(Projects);

    function createTodoItem(title, description, dueDate, priority) {
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            completed: false,
            container: 'close',
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
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.formState.itemFormMode = 'add';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDOUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcs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QUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWE7QUFDekIsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLElBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQWE7O0FBRTdCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHdEQUFhO0FBQzdCO0FBQ0EsU0FBUzs7QUFFVDtBQUNB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudWJ1bnR1LWJvbGQtaXRhbGljIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtLW1haW4tYmxhY2s6IHJnYig1OSwgNTksIDU5KTtcbiAgICAtLW1haW4tYmx1ZTogcmdiKDEwNCwgMjAyLCAyMjYpO1xuICAgIC0tbWFpbi1yZWQ6IHJnYigyMzAsIDExNSwgMTE1KTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCAyNTUsIDI1NSkgLTEwJSwgcmdiKDIwNiwgMjA2LCAyMDYpKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxOTIsIDE5MiwgMTkyKTtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlYmFyIHtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDUwJSwgMzAwcHgpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDE5MiwgMTkyLCAxOTIpO1xufVxuXG4uc2lkZWJhci10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5zaWRlYmFyLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG5cbi5wcm9qZWN0cy1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuXG4jYWRkUHJvamVjdCB7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmx1ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbiNhZGRQcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG59XG5cbiNkZWxldGVQcm9qZWN0c0J1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcbn1cblxuI2RlbGV0ZVByb2plY3RzQnV0dG9uPnN2ZyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4jZGVsZXRlUHJvamVjdHNCdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiKDIxOSwgMjE5LCAyMTkpO1xufVxuXG4ucHJvamVjdHMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjI0LCAyMjQsIDIyNCk7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5wcm9qZWN0cy1saXN0ID4gbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcbn1cblxuaW5wdXRbbmFtZT0nZGVsZXRlUHJvamVjdEl0ZW0nXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0cyB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4jc3VibWl0RGVsZXRlUHJvamVjdHMge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMTk5LCA3NiwgNzYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG59XG5cbiNzdWJtaXREZWxldGVQcm9qZWN0czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgOTAsIDkwKTtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuXG4ucHJvamVjdC1pbnB1dCwgLml0ZW0taW5wdXQsIC5kZWxldGUtcHJvamVjdHMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC01MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnByb2plY3QtaW5wdXQtY29udGFpbmVyLCAuaXRlbS1pbnB1dC1jb250YWluZXIsIC5kZWxldGUtcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xufVxuXG4uY2xvc2UtcHJvamVjdC1pbnB1dCwgLmNsb3NlLWl0ZW0taW5wdXQsIC5jbG9zZS1kZWxldGUtcHJvamVjdHMge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogM3B4IDlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XG59XG5cbi5jbG9zZS1wcm9qZWN0LWlucHV0OmhvdmVyLCAuY2xvc2UtaXRlbS1pbnB1dDpob3ZlciwgLmNsb3NlLWRlbGV0ZS1wcm9qZWN0czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xufVxuXG4jcHJvamVjdEZvcm0sICNpdGVtRm9ybSwgI2RlbGV0ZVByb2plY3RzRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jcHJvamVjdElucHV0LCAjaXRlbVRpdGxlLCAjaXRlbURlcywgI2l0ZW1EYXRlIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk5LCAxOTksIDE5OSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDEwcHggMHB4IDI1cHggMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJpb3JpdHktb3B0aW9ucyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbiNwcm9qZWN0SW5wdXQ6aG92ZXIsICNwcm9qZWN0SW5wdXQ6YWN0aXZlLFxuI2l0ZW1UaXRsZTpob3ZlciwgI2l0ZW1UaXRsZTphY3RpdmUsXG4jaXRlbURlczpob3ZlciwgI2l0ZW1EZXM6YWN0aXZlLFxuI2l0ZW1EYXRlOmhvdmVyLCAjaXRlbURhdGU6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiKDIyNiwgMjI2LCAyMjYpO1xufVxuXG4jc3VibWl0UHJvamVjdCwgI3N1Ym1pdEl0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ibHVlKTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDgyLCAxNjMsIDE4NCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbn1cblxuI3N1Ym1pdFByb2plY3Q6aG92ZXIsICNzdWJtaXRJdGVtOmhvdmVyLCAjYWRkSXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCAxODUsIDIwOSk7XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDUwcHgsIDIyMHB4KTtcbiAgICBnYXA6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjU0LCAyNTUpO1xufVxuXG4uaXRlbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiKDE5MCwgMTkwLCAxOTApO1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5pdGVtLXByaW8sIC5pdGVtLXN0YXR1cywgLml0ZW0tYnV0dG9ucy1kaXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XG59XG5cbi5pdGVtLWRhdGUge1xuICAgIGNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaXRlbS1kZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLml0ZW0tcHJpby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaXRlbS1wcmlvLWNvbnRhaW5lciBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pdGVtLXByaW8tdmFsdWUge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycHggMTBweCAycHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaXRlbS1zdGF0dXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXR1cy1jb250YWluZXIgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaXRlbS1zdGF0dXMtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLml0ZW0tc3RhdHVzLWJveDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxOTksIDE5OSwgMTk5KTtcbn1cblxuLml0ZW0tc3RhdHVzLWZpcnN0IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLml0ZW0tc3RhdHVzLXNlY29uZCB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cblxuLml0ZW0tYnV0dG9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1idXR0b25zLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLml0ZW0tZWRpdC1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xufVxuXG4uaXRlbS1lZGl0LWJ1dHRvbj5zdmcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibHVlKTtcbn1cblxuLml0ZW0tZGVsZXRlLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5pdGVtLWRlbGV0ZS1idXR0b24+c3ZnIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tcmVkKTtcbn1cblxuLml0ZW0tZWRpdC1idXR0b246aG92ZXIsIC5pdGVtLWRlbGV0ZS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDIzNSwgMjM1LCAyMzUpO1xufVxuXG4uaXRlbS1hcnJvdy1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDE5MCwgMTkwLCAxOTApO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMCU7XG59XG5cbi5pdGVtLWFycm93LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjA5LCAyMDksIDIwOSk7XG59XG5cbi5pdGVtLWFycm93LWJ1dHRvbj5zdmcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2FkZEl0ZW0ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2IoMjA5LCAyMDksIDIwOSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJsdWUpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCA0MDBweCkpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgfVxuXG4gICAgLnNpZGViYXIge1xuICAgICAgICB3aWR0aDogY2xhbXAoMTUwcHgsIDQwdncsIDI1MHB4KTtcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgfVxuXG4gICAgLnByb2plY3RzLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgfVxuXG4gICAgI2FkZFByb2plY3Qge1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIH1cblxuICAgICNkZWxldGVQcm9qZWN0c0J1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztJQUNYLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrRkFBa0Y7SUFDbEYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7OztJQUlJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxtQ0FBbUM7SUFDbkMsU0FBUztJQUNULG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsb0NBQW9DO0lBQ3BDLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSTtRQUNJLDZEQUE2RDtJQUNqRTtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0NBQWdDO1FBQ2hDLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi51YnVudHUtYm9sZC1pdGFsaWMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC0tbWFpbi1ibGFjazogcmdiKDU5LCA1OSwgNTkpO1xcbiAgICAtLW1haW4tYmx1ZTogcmdiKDEwNCwgMjAyLCAyMjYpO1xcbiAgICAtLW1haW4tcmVkOiByZ2IoMjMwLCAxMTUsIDExNSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDI1NSwgMjU1LCAyNTUpIC0xMCUsIHJnYigyMDYsIDIwNiwgMjA2KSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTkyLCAxOTIsIDE5Mik7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA1MCUsIDMwMHB4KTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDE5MiwgMTkyLCAxOTIpO1xcbn1cXG5cXG4uc2lkZWJhci10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5zaWRlYmFyLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLnByb2plY3RzLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1ibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcXG59XFxuXFxuI2RlbGV0ZVByb2plY3RzQnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xcbn1cXG5cXG4jZGVsZXRlUHJvamVjdHNCdXR0b24+c3ZnIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuI2RlbGV0ZVByb2plY3RzQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiKDIxOSwgMjE5LCAyMTkpO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjI0LCAyMjQsIDIyNCk7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcXG59XFxuXFxuaW5wdXRbbmFtZT0nZGVsZXRlUHJvamVjdEl0ZW0nXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdHMge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbiNzdWJtaXREZWxldGVQcm9qZWN0cyB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXJlZCk7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMTk5LCA3NiwgNzYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNzdWJtaXREZWxldGVQcm9qZWN0czpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDkwLCA5MCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuLnByb2plY3QtaW5wdXQsIC5pdGVtLWlucHV0LCAuZGVsZXRlLXByb2plY3RzIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IC01MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQtY29udGFpbmVyLCAuaXRlbS1pbnB1dC1jb250YWluZXIsIC5kZWxldGUtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcXG59XFxuXFxuLmNsb3NlLXByb2plY3QtaW5wdXQsIC5jbG9zZS1pdGVtLWlucHV0LCAuY2xvc2UtZGVsZXRlLXByb2plY3RzIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxufVxcblxcbi5jbG9zZS1wcm9qZWN0LWlucHV0OmhvdmVyLCAuY2xvc2UtaXRlbS1pbnB1dDpob3ZlciwgLmNsb3NlLWRlbGV0ZS1wcm9qZWN0czpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcXG59XFxuXFxuI3Byb2plY3RGb3JtLCAjaXRlbUZvcm0sICNkZWxldGVQcm9qZWN0c0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdElucHV0LCAjaXRlbVRpdGxlLCAjaXRlbURlcywgI2l0ZW1EYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk5LCAxOTksIDE5OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMHB4IDI1cHggMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1vcHRpb25zIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4jcHJvamVjdElucHV0OmhvdmVyLCAjcHJvamVjdElucHV0OmFjdGl2ZSxcXG4jaXRlbVRpdGxlOmhvdmVyLCAjaXRlbVRpdGxlOmFjdGl2ZSxcXG4jaXRlbURlczpob3ZlciwgI2l0ZW1EZXM6YWN0aXZlLFxcbiNpdGVtRGF0ZTpob3ZlciwgI2l0ZW1EYXRlOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCByZ2IoMjI2LCAyMjYsIDIyNik7XFxufVxcblxcbiNzdWJtaXRQcm9qZWN0LCAjc3VibWl0SXRlbSB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJsdWUpO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDgyLCAxNjMsIDE4NCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3N1Ym1pdFByb2plY3Q6aG92ZXIsICNzdWJtaXRJdGVtOmhvdmVyLCAjYWRkSXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgMTg1LCAyMDkpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCAyMjBweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjU0LCAyNTUpO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uaXRlbS1wcmlvLCAuaXRlbS1zdGF0dXMsIC5pdGVtLWJ1dHRvbnMtZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxufVxcblxcbi5pdGVtLWRhdGUge1xcbiAgICBjb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5pdGVtLWRlcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pdGVtLXByaW8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaXRlbS1wcmlvLWNvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLml0ZW0tcHJpby12YWx1ZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pdGVtLXN0YXR1cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1zdGF0dXMtY29udGFpbmVyIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uaXRlbS1zdGF0dXMtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaXRlbS1zdGF0dXMtYm94OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxOTksIDE5OSwgMTk5KTtcXG59XFxuXFxuLml0ZW0tc3RhdHVzLWZpcnN0IHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaXRlbS1zdGF0dXMtc2Vjb25kIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuXFxuLml0ZW0tYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pdGVtLWJ1dHRvbnMtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5pdGVtLWVkaXQtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxufVxcblxcbi5pdGVtLWVkaXQtYnV0dG9uPnN2ZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsdWUpO1xcbn1cXG5cXG4uaXRlbS1kZWxldGUtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5pdGVtLWRlbGV0ZS1idXR0b24+c3ZnIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tcmVkKTtcXG59XFxuXFxuLml0ZW0tZWRpdC1idXR0b246aG92ZXIsIC5pdGVtLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjM1LCAyMzUsIDIzNSk7XFxufVxcblxcbi5pdGVtLWFycm93LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAlO1xcbn1cXG5cXG4uaXRlbS1hcnJvdy1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjA5LCAyMDksIDIwOSk7XFxufVxcblxcbi5pdGVtLWFycm93LWJ1dHRvbj5zdmcge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkSXRlbSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiKDIwOSwgMjA5LCAyMDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgNDAwcHgpKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICB3aWR0aDogY2xhbXAoMTUwcHgsIDQwdncsIDI1MHB4KTtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy1idXR0b25zLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIH1cXG5cXG4gICAgI2FkZFByb2plY3Qge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI2RlbGV0ZVByb2plY3RzQnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3VwZGF0ZVN0b3JhZ2V9IGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKFByb2plY3RzLCBzZXRDdXJyZW50UHJvamVjdCkge1xuICAgIGNvbnN0IHNpZGViYXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItZ3JpZCcpO1xuICAgIHNpZGViYXJHcmlkLmlubmVySFRNTCA9ICcnO1xuICAgIE9iamVjdC5rZXlzKFByb2plY3RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGtleTtcbiAgICAgICAgZGl2LmlkID0ga2V5O1xuICAgICAgICBzaWRlYmFyR3JpZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KGtleSk7XG4gICAgICAgICAgICBkaXNwbGF5Q29udGVudChQcm9qZWN0cywga2V5KTtcbiAgICAgICAgICAgIGFwcGx5UHJvamVjdHNCZ0NvbG9yKFByb2plY3RzLCBrZXkpO1xuICAgICAgICAgICAgdXBkYXRlU3RvcmFnZShQcm9qZWN0cywga2V5KTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UHJvamVjdHNCZ0NvbG9yKFByb2plY3RzLCBjdXJyZW50UHJvamVjdCkge1xuICAgIE9iamVjdC5rZXlzKFByb2plY3RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSk7XG4gICAgICAgIGlmIChrZXkgPT09IGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyMTIsIDIxMiwgMjEyKSc7XG4gICAgICAgICAgICBkaXYuc3R5bGUuYm9yZGVyTGVmdCA9ICc0cHggc29saWQgdmFyKC0tbWFpbi1ibGFjayknO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzE2cHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjM4LCAyMzgsIDIzOCknO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmJvcmRlckxlZnQgPSAnbm9uZSc7XG4gICAgICAgICAgICBkaXYuc3R5bGUucGFkZGluZ0xlZnQgPSAnMjBweCc7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheURlbGV0ZVByb2plY3RzKFByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcbiAgICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgT2JqZWN0LmtleXMoUHJvamVjdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZWxldGVQcm9qZWN0SXRlbScpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7a2V5fWApO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJyAnICsga2V5O1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtU3RhdGUgPSB7XG4gICAgaXRlbUZvcm1Nb2RlOiAnYWRkJyxcbiAgICBpdGVtRWRpdEluZGV4OiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KFByb2plY3RzLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIFByb2plY3RzW3Byb2plY3RdLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250YWluZXInKTtcblxuICAgICAgICBsZXQgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG5cbiAgICAgICAgbGV0IGl0ZW1EZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbURlcy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlcycpO1xuICAgICAgICBpdGVtRGVzLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgICAgICBsZXQgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbURhdGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1kYXRlJyk7XG4gICAgICAgIGl0ZW1EYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuXG4gICAgICAgIGxldCBpdGVtUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtUHJpby5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaW8nKTtcbiAgICAgICAgbGV0IGl0ZW1QcmlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1QcmlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpby1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XG4gICAgICAgIGxldCBpdGVtUHJpb1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1QcmlvVmFsdWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmlvLXZhbHVlJyk7XG4gICAgICAgIGl0ZW1QcmlvVmFsdWUudGV4dENvbnRlbnQgPSBpdGVtLnByaW9yaXR5O1xuXG4gICAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSAnTG93Jykge1xuICAgICAgICAgICAgaXRlbVByaW9WYWx1ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE2NSwgMjU1LCAxNjUpJztcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDI1NSwgMjU1KSAyMCUsIHJnYigyMzIsIDI1NSwgMjMzKSknO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdNaWQnKSB7XG4gICAgICAgICAgICBpdGVtUHJpb1ZhbHVlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjUzLCAyNTUsIDE2NSknO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDI1NSwgMjU1LCAyNTUpIDIwJSwgcmdiKDI1NSwgMjU1LCAyMzIpKSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ0hpZ2gnKSB7XG4gICAgICAgICAgICBpdGVtUHJpb1ZhbHVlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjU1LCAxNjUsIDE2NSknO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDI1NSwgMjU1LCAyNTUpIDIwJSwgcmdiKDI1NSwgMjM1LCAyMzIpKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXRlbUJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS1idXR0b25zLWRpdicpO1xuXG4gICAgICAgIGxldCBpdGVtQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWJ1dHRvbnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgbGV0IGl0ZW1TdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdpdGVtLXN0YXR1cycpO1xuICAgICAgICBsZXQgaXRlbVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtU3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc3RhdHVzLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgaXRlbVN0YXR1c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1TdGF0dXNUZXh0LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZDogJztcbiAgICAgICAgbGV0IGl0ZW1TdGF0dXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVN0YXR1c0JveC5jbGFzc0xpc3QuYWRkKCdpdGVtLXN0YXR1cy1ib3gnKTtcblxuICAgICAgICBsZXQgaXRlbVN0YXR1c0ZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1TdGF0dXNGaXJzdC5jbGFzc0xpc3QuYWRkKCdpdGVtLXN0YXR1cy1maXJzdCcpO1xuICAgICAgICBsZXQgaXRlbVN0YXR1c1NlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtU3RhdHVzU2Vjb25kLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc3RhdHVzLXNlY29uZCcpO1xuXG4gICAgICAgIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaXRlbVN0YXR1c0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tbWFpbi1ibHVlKSc7XG4gICAgICAgICAgICBpdGVtU3RhdHVzRmlyc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLW1haW4tYmx1ZSknO1xuICAgICAgICAgICAgaXRlbVN0YXR1c0ZpcnN0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgIGl0ZW1TdGF0dXNTZWNvbmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNDUsIDI0NSwgMjQ1KSc7XG4gICAgICAgICAgICBpdGVtU3RhdHVzU2Vjb25kLnN0eWxlLmJveFNoYWRvdyA9ICcwcHggMHB4IDVweCAxcHggcmdiKDE5MCwgMTkwLCAxOTApJztcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaXRlbVN0YXR1c0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE5NiwgMTk2LCAxOTYpJztcbiAgICAgICAgICAgIGl0ZW1TdGF0dXNGaXJzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI0NSwgMjQ1LCAyNDUpJztcbiAgICAgICAgICAgIGl0ZW1TdGF0dXNGaXJzdC5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCA1cHggMXB4IHJnYigxOTAsIDE5MCwgMTkwKSc7XG4gICAgICAgICAgICBpdGVtU3RhdHVzU2Vjb25kLnN0eWxlLmJhY2tncm91bmRDb2xvciA9J3JnYigxOTYsIDE5NiwgMTk2KSc7XG4gICAgICAgICAgICBpdGVtU3RhdHVzU2Vjb25kLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpdGVtQnV0dG9uc0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtQnV0dG9uc0JveC5jbGFzc0xpc3QuYWRkKCdpdGVtLWJ1dHRvbnMtYm94Jyk7XG5cbiAgICAgICAgbGV0IGl0ZW1FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGl0ZW1FZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTQuMDYsOUwxNSw5Ljk0TDUuOTIsMTlINVYxOC4wOEwxNC4wNiw5TTE3LjY2LDNDMTcuNDEsMyAxNy4xNSwzLjEgMTYuOTYsMy4yOUwxNS4xMyw1LjEyTDE4Ljg4LDguODdMMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOC4xNywzLjA5IDE3LjkyLDMgMTcuNjYsM00xNC4wNiw2LjE5TDMsMTcuMjVWMjFINi43NUwxNy44MSw5Ljk0TDE0LjA2LDYuMTlaXCIgLz48L3N2Zz4nO1xuICAgICAgICBpdGVtRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWVkaXQtYnV0dG9uJyk7XG5cbiAgICAgICAgbGV0IGl0ZW1EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaXRlbURlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaXCIgLz48L3N2Zz4nO1xuICAgICAgICBpdGVtRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGxldCBpdGVtQXJyb3dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaXRlbUFycm93QnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXCIgLz48L3N2Zz4nO1xuICAgICAgICBpdGVtQXJyb3dCdXR0b24uY2xhc3NMaXN0LmFkZCgnaXRlbS1hcnJvdy1idXR0b24nKTtcblxuICAgICAgICBpZiAoaXRlbS5jb250YWluZXIgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgaXRlbVByaW8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBpdGVtU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgaXRlbUJ1dHRvbnNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzE4MHB4JztcblxuICAgICAgICAgICAgaXRlbUFycm93QnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcIiAvPjwvc3ZnPic7XG4gICAgICAgICAgICBpdGVtQXJyb3dCdXR0b24uc3R5bGUudG9wID0gJzAlJztcblxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY29udGFpbmVyID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICBpdGVtUHJpby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaXRlbVN0YXR1cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaXRlbUJ1dHRvbnNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuXG4gICAgICAgICAgICBpdGVtQXJyb3dCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcIiAvPjwvc3ZnPic7XG4gICAgICAgICAgICBpdGVtQXJyb3dCdXR0b24uc3R5bGUudG9wID0gJzEwJSc7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtU3RhdHVzQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLW1haW4tYmx1ZSknO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNGaXJzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tbWFpbi1ibHVlKSc7XG4gICAgICAgICAgICAgICAgaXRlbVN0YXR1c0ZpcnN0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpdGVtU3RhdHVzU2Vjb25kLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjQ1LCAyNDUsIDI0NSknO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNTZWNvbmQuc3R5bGUuYm94U2hhZG93ID0gJzBweCAwcHggNXB4IDFweCByZ2IoMTkwLCAxOTAsIDE5MCknO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGl0ZW0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB1cGRhdGVTdG9yYWdlKFByb2plY3RzLCBwcm9qZWN0KTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxOTYsIDE5NiwgMTk2KSc7XG4gICAgICAgICAgICAgICAgaXRlbVN0YXR1c0ZpcnN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjQ1LCAyNDUsIDI0NSknO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNGaXJzdC5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCA1cHggMXB4IHJnYigxOTAsIDE5MCwgMTkwKSc7XG4gICAgICAgICAgICAgICAgaXRlbVN0YXR1c1NlY29uZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSdyZ2IoMTk2LCAxOTYsIDE5NiknO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXNTZWNvbmQuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB1cGRhdGVTdG9yYWdlKFByb2plY3RzLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBmb3JtU3RhdGUuaXRlbUZvcm1Nb2RlID0gJ2VkaXQnO1xuICAgICAgICAgICAgZm9ybVN0YXRlLml0ZW1FZGl0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JbnB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWlucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtVGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtVGl0bGUnKTtcbiAgICAgICAgICAgIGl0ZW1UaXRsZUlucHV0LnZhbHVlID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtRGVzJyk7XG4gICAgICAgICAgICBpdGVtRGVzSW5wdXQudmFsdWUgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3QgaXRlbURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtRGF0ZScpO1xuICAgICAgICAgICAgaXRlbURhdGVJbnB1dC52YWx1ZSA9IGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1QcmlvSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIml0ZW1QcmlvXCJdJyk7XG4gICAgICAgICAgICBpdGVtUHJpb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09IGl0ZW0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdGVtSW5wdXREaXYuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW1EZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBQcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlU3RvcmFnZShQcm9qZWN0cywgcHJvamVjdCk7XG4gICAgICAgICAgICBkaXNwbGF5Q29udGVudChQcm9qZWN0cywgcHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW1BcnJvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbnRhaW5lciA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgICAgIGl0ZW1QcmlvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgaXRlbUJ1dHRvbnNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgICAgICBpdGVtQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcxODBweCc7XG5cbiAgICAgICAgICAgICAgICBpdGVtQXJyb3dCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlwiIC8+PC9zdmc+JztcbiAgICAgICAgICAgICAgICBpdGVtQXJyb3dCdXR0b24uc3R5bGUudG9wID0gJzAlJztcblxuICAgICAgICAgICAgICAgIGl0ZW0uY29udGFpbmVyID0gJ29wZW4nO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoUHJvamVjdHMsIHByb2plY3QpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY29udGFpbmVyID09PSAnb3BlbicpIHtcbiAgICAgICAgICAgICAgICBpdGVtUHJpby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGl0ZW1TdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpdGVtQnV0dG9uc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuXG4gICAgICAgICAgICAgICAgaXRlbUFycm93QnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXCIgLz48L3N2Zz4nO1xuICAgICAgICAgICAgICAgIGl0ZW1BcnJvd0J1dHRvbi5zdHlsZS50b3AgPSAnMTAlJztcblxuICAgICAgICAgICAgICAgIGl0ZW0uY29udGFpbmVyID0gJ2Nsb3NlJztcbiAgICAgICAgICAgICAgICB1cGRhdGVTdG9yYWdlKFByb2plY3RzLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbVByaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcbiAgICAgICAgaXRlbVByaW9Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaW9WYWx1ZSk7XG4gICAgICAgIGl0ZW1QcmlvLmFwcGVuZENoaWxkKGl0ZW1QcmlvQ29udGFpbmVyKTtcblxuICAgICAgICBpdGVtU3RhdHVzQm94LmFwcGVuZENoaWxkKGl0ZW1TdGF0dXNGaXJzdCk7XG4gICAgICAgIGl0ZW1TdGF0dXNCb3guYXBwZW5kQ2hpbGQoaXRlbVN0YXR1c1NlY29uZCk7XG4gICAgICAgIGl0ZW1TdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVN0YXR1c1RleHQpO1xuICAgICAgICBpdGVtU3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1TdGF0dXNCb3gpO1xuICAgICAgICBpdGVtU3RhdHVzLmFwcGVuZENoaWxkKGl0ZW1TdGF0dXNDb250YWluZXIpO1xuXG4gICAgICAgIGl0ZW1CdXR0b25zQm94LmFwcGVuZENoaWxkKGl0ZW1FZGl0QnV0dG9uKTtcbiAgICAgICAgaXRlbUJ1dHRvbnNCb3guYXBwZW5kQ2hpbGQoaXRlbURlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGl0ZW1CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1TdGF0dXMpO1xuICAgICAgICBpdGVtQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQnV0dG9uc0JveCk7XG4gICAgICAgIGl0ZW1CdXR0b25zRGl2LmFwcGVuZENoaWxkKGl0ZW1CdXR0b25zQ29udGFpbmVyKTtcblxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EZXMpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmlvKTtcblxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1CdXR0b25zRGl2KTtcblxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1BcnJvd0J1dHRvbik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBcblxuICAgIGNvbnN0IGFkZEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXInKTtcbiAgICBjb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkSXRlbUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIndoaXRlXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMjAgMTRIMTRWMjBIMTBWMTRINFYxMEgxMFY0SDE0VjEwSDIwVjE0WlwiIC8+PC9zdmc+JztcbiAgICBhZGRJdGVtQnV0dG9uLmlkID0gJ2FkZEl0ZW0nO1xuICAgIGFkZEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbnB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWlucHV0Jyk7XG4gICAgICAgIGl0ZW1JbnB1dERpdi5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBhZGRJdGVtRGl2LmFwcGVuZENoaWxkKGFkZEl0ZW1CdXR0b24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkSXRlbURpdik7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheUNvbnRlbnQsXG4gICAgYXBwbHlQcm9qZWN0c0JnQ29sb3IsXG4gICAgZGlzcGxheURlbGV0ZVByb2plY3RzLFxuICAgIGZvcm1TdGF0ZSxcbn0gZnJvbSAnLi9kb20uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmFnZShQcm9qZWN0cywgY3VycmVudFByb2plY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdCcsIGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gbG9hZFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICBpZiAocHJvamVjdHMpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJvamVjdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRDdXJyZW50UHJvamVjdChQcm9qZWN0cykge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0Jyk7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoUHJvamVjdHMpWzBdO1xuICAgIH1cbn1cblxuKGZ1bmN0aW9uKCkge1xuICAgIGxldCBQcm9qZWN0cyA9IGxvYWRTdG9yYWdlKCk7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbG9hZEN1cnJlbnRQcm9qZWN0KFByb2plY3RzKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29udGFpbmVyOiAnY2xvc2UnLFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgUHJvamVjdHNbcHJvamVjdE5hbWVdID0gW107XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKFByb2plY3RzLCBzZXRDdXJyZW50UHJvamVjdCk7XG4gICAgICAgIGFwcGx5UHJvamVjdHNCZ0NvbG9yKFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdElucHV0RGl2LnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcHJvamVjdC1pbnB1dCcpO1xuICAgIGNsb3NlUHJvamVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBwcm9qZWN0SW5wdXREaXYuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RGb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFZhbHVlID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdElucHV0RGl2LmNsb3NlKCk7XG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdFZhbHVlKTtcbiAgICAgICAgZGlzcGxheUNvbnRlbnQoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVByb2plY3RzQnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RzRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1wcm9qZWN0cycpO1xuICAgICAgICBkZWxldGVQcm9qZWN0c0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgZGlzcGxheURlbGV0ZVByb2plY3RzKFByb2plY3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlRGVsZXRlUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZGVsZXRlLXByb2plY3RzJyk7XG4gICAgY2xvc2VEZWxldGVQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdHNEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXByb2plY3RzJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RzRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0c0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlUHJvamVjdHNGb3JtJyk7XG4gICAgZGVsZXRlUHJvamVjdHNGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0c0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiZGVsZXRlUHJvamVjdEl0ZW1cIl06Y2hlY2tlZCcpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoUHJvamVjdHNbcHJvamVjdC52YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgUHJvamVjdHNbcHJvamVjdC52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGVQcm9qZWN0c0RpYWxvZy5jbG9zZSgpO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChPYmplY3Qua2V5cyhQcm9qZWN0cylbMF0pO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyhQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QpO1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhQcm9qZWN0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseVByb2plY3RzQmdDb2xvcihQcm9qZWN0cywgY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRlbnQoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaXRlbUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUZvcm0nKTtcbiAgICBpdGVtRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGl0ZW1UaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICBpdGVtVGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtRGVzJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EZXMgPSBpdGVtRGVzSW5wdXQudmFsdWU7XG4gICAgICAgIGl0ZW1EZXNJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbURhdGUnKTtcbiAgICAgICAgY29uc3QgaXRlbURhdGUgPSBpdGVtRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBpdGVtRGF0ZUlucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgY29uc3QgaXRlbVByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaXRlbVByaW9cIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBpdGVtUHJpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJpdGVtUHJpb1wiXScpO1xuICAgICAgICBpdGVtUHJpb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGl0ZW0gPSBjcmVhdGVUb2RvSXRlbShpdGVtVGl0bGUsIGl0ZW1EZXMsIGl0ZW1EYXRlLCBpdGVtUHJpbyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZm9ybVN0YXRlLml0ZW1Gb3JtTW9kZSA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgIFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRlbnQoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtU3RhdGUuaXRlbUZvcm1Nb2RlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgIFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVtmb3JtU3RhdGUuaXRlbUVkaXRJbmRleF0gPSBpdGVtO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRlbnQoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIGZvcm1TdGF0ZS5pdGVtRm9ybU1vZGUgPSAnYWRkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW1JbnB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWlucHV0Jyk7XG4gICAgICAgIGl0ZW1JbnB1dERpdi5jbG9zZSgpO1xuXG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlSXRlbUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWl0ZW0taW5wdXQnKTtcbiAgICBjbG9zZUl0ZW1JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUlucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0taW5wdXQnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1UaXRsZScpOyAgICAgICBcbiAgICAgICAgaXRlbVRpdGxlSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zdCBpdGVtRGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbURlcycpO1xuICAgICAgICBpdGVtRGVzSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zdCBpdGVtRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1EYXRlJyk7XG4gICAgICAgIGl0ZW1EYXRlSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBjb25zdCBpdGVtUHJpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJpdGVtUHJpb1wiXScpO1xuICAgICAgICBpdGVtUHJpb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW1JbnB1dERpdi5jbG9zZSgpO1xuICAgICAgICBmb3JtU3RhdGUuaXRlbUZvcm1Nb2RlID0gJ2FkZCc7XG4gICAgfSk7XG5cbiAgICBpZiAoIVByb2plY3RzWydUb2RvJ10gJiYgT2JqZWN0LmtleXMoUHJvamVjdHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhZGRQcm9qZWN0KCdUb2RvJyk7XG4gICAgICAgIFByb2plY3RzLlRvZG8ucHVzaChjcmVhdGVUb2RvSXRlbSgnUmVhZCBCb29rJywgJ1JlYWQgdGhyZWUgY2hhcHRlcnMnLCAnMjAyNC0wNy0wMicsICdMb3cnKSk7XG4gICAgICAgIFByb2plY3RzLlRvZG8ucHVzaChjcmVhdGVUb2RvSXRlbSgnUGxhbiBXZWVrZW5kIFRyaXAnLCAnUmVzZWFyY2ggYW5kIGJvb2sgYWN0aXZpdGllcycsICcyMDI0LTA3LTA2JywgJ01pZCcpKTtcbiAgICAgICAgUHJvamVjdHMuVG9kby5wdXNoKGNyZWF0ZVRvZG9JdGVtKCdQYXkgQmlsbHMnLCAnUGF5IHRoZSB1dGlsaXR5IGFuZCBjcmVkaXQgY2FyZCBiaWxscycsICcyMDI0LTA3LTEwJywgJ0hpZ2gnKSk7XG4gICAgICAgIGRpc3BsYXlDb250ZW50KFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcm9qZWN0cyhQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QpO1xuICAgIGFwcGx5UHJvamVjdHNCZ0NvbG9yKFByb2plY3RzLCBjdXJyZW50UHJvamVjdCk7XG4gICAgZGlzcGxheUNvbnRlbnQoUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==