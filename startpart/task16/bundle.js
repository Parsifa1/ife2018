/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventUtil; });
var EventUtil = {
    addEvent(el, type, handler) {
        if (el.addEventListener) {
            el.addEventListener(type, handler, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, handler);
        } else {
            el['on' + type] = handler
        }
    },
    removeEvent(el, type, handler) {
        if (el.removeEventListener) {
            el.removeEventListener(type, handler, false)
        } else if (el.detachEvent) {
            el.detachEvent('on' + type, handler);
        } else {
            el['on' + type] = null
        }
    },
    getEvent(event) {
        return event ? event : window.event;
    },
    getRelatedTarget(event) {
        return event.relatedTarget || event.toElement || event.fromElement || null
    },
    getTarget(event) {
        return event.target || event.srcElement
    },
    preventDefault(event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false
    },
    stopPropagation(event) {
        event.stopPropagation ? event.stopPropagation() : event.canceBubble = false
    }
};
function createEl(tagName,text,className){
    let el = document.createElement(tagName)
    className ? el.className=className : null
    text ? el.innerText=text : null
    return el
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox__ = __webpack_require__(4);
/* let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];
const regionSelect = document.getElementById('region-select');
const productSelect = document.getElementById("product-select");
const tbody = document.getElementsByTagName('tbody')[0];


function handle (e){
    let region = regionSelect.value;
    let product = productSelect.value;
    let data = filterDate(sourceData,{region,product});
    render(data);
}
function filterDate(data,condition){
    return data.filter(item=>{
        return (item.region === condition.region || !condition.region) && (item.product === condition.product || !condition.product)
    })
}
function render(data){
    tbody.innerHTML = "";
    data.forEach(item=>{
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.product}</td><td>${item.region}</td><td>${item.sale.join("</td><td>")}</td>`;
        tbody.appendChild(tr);
    })
}

regionSelect.addEventListener("change",handle,false)
productSelect.addEventListener("change",handle,false)
window.onload = render(sourceData);

// checkbox

const checkbox = document.querySelectorAll(".checkbox");
const checkAll = document.getElementById("check-all");

function getChecked(){
    return [...checkbox].filter(item=>item.checked).map(i=>i.value)
}
function checkboxHandle(e){
    let len = getChecked().length;
    console.log(len)
    if(len === 0){
        this.checked = true
    }else if(len!==3){
        checkAll.checked=false
    }
}
for(let item of checkbox){
    item.addEventListener('change',checkboxHandle,false)
}
checkAll.addEventListener('change',function(e){
    let len = getChecked();
    if(this.checked){
        [...checkbox].forEach(item=>item.checked = true)
    }else if(len.length===3)(
        this.checked = true
    )
},false)

/**
 * @class {CheckBox} 根据要求封装的类
 * @param {selector} 容器元素(CSS Selector)
 * @param {userOptions} 需传入的数据
 */
/**
class CheckBox{
    constructor(selector,data){
        this.$selector = selector
        this.data = data
        this.checkAll = null
        this.child = null
        this.render()
        this.addEvent()
    }
    render(){
        this.data.forEach(item=>{
            this.$selector.appendChild(this.createCheckBox(item.text,item.value))
        })
        let checkAll = this.createCheckBox("全选","all")
        this.$selector.appendChild(checkAll)
        this.setChild()
        this.checkAll = document.querySelector('input[value=all]')
        this.checkAll.dataset.checkboxType = 'all'
    }
    setChild(){
        this.child = [...this.$selector.querySelectorAll('input')].slice(0,-1)
    }
    createCheckBox(name,value){
        let label = document.createElement('label')
        label.innerText = name
        let input = document.createElement('input')
        input.type = 'checkbox'
        input.value = value
        label.appendChild(input)
        return label
    }
    addEvent(){
        const self = this
        this.$selector.addEventListener('click',function(e){
            let el = e.target;
            let len = self.getChecked()
            if(el.nodeName.toLowerCase()!=='input') return false;
            if(el === self.checkAll){
                if(len === self.child.length){
                    el.checked = true
                }else{
                    self.child.forEach(item=>item.checked=true)
                }
            }else{
                if(len===self.child.length){
                    self.checkAll.checked = true
                }else if(len===0){
                    el.checked = true
                }else{
                    self.checkAll.checked = false
                }
            }
        },false)
    }
    getChecked(){
        return this.child.filter(item=>item.checked).length
    }
} */





const checkboxWrapper = document.querySelector('.check-box');
const tableWrapper = document.getElementById('table-wrapper');

new __WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* default */](checkboxWrapper,[{
    text: "华北",
    value: "华北"
},{
    text: "华南",
    value: "华南"
},{
    text: "华东",
    value: "华东"
}])

tableWrapper.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__table__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */],{
    thead: ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
}))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/**
 * 
 * @param { Array } 需要生成表格的数据
 * @param { Object } 是否使用全部data中的数据以及表头的信息 
 * {
 *      thead: ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
 *      filter: ["product","region","sale"]
 * }
 */
function createTable(data, option) {
    let table = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])('table', null, 'user-table');
    let thead = "";
    let tbody = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])('tbody');
    option.filter ? null : option.filter = Object.getOwnPropertyNames(data[0])
    let d = data.map(item => {
        let list = []
        option.filter.forEach(i => {
            list.push(item[i])
        })
        console.log(list)
        return list.toString().split(",")
    })
    option.thead ? thead = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])('thead') : null
    if (thead) {
        let tr = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])("tr");
        option.thead.forEach(item => {
            let td = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])('td', item);
            tr.appendChild(td)
        })
        thead.appendChild(tr)
    }

    //tbody
    d.forEach(item => {
        let tr = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])('tr');
        item.forEach(i => {
            let td = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])("td", i);
            tr.appendChild(td);
        })
        tbody.appendChild(tr)
    })
    table.appendChild(thead)
    table.appendChild(tbody)
    console.log(d)
    return table;
}
/* harmony default export */ __webpack_exports__["a"] = (createTable);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/*
 * @Author: GXC 
 * @Date: 2018-07-29 11:27:32 
 * @Last Modified by: GXC
 * @Last Modified time: 2018-07-29 11:31:49
 */


class CheckBox {
    constructor(selector,data){
        this.$selector = selector
        this.data = data
        this.checkAll = null
        this.child = null
        this.render()
        this.addEvent()
    }
    render(){
        this.data.forEach(item=>{
            this.$selector.appendChild(this.createCheckBox(item.text,item.value))
        })
        let checkAll = this.createCheckBox("全选","all")
        this.$selector.appendChild(checkAll)
        this.setChild()
        this.checkAll = document.querySelector('input[value=all]')
        this.checkAll.dataset.checkboxType = 'all'
    }
    setChild(){
        this.child = [...this.$selector.querySelectorAll('input')].slice(0,-1)
    }
    createCheckBox(name,value){
        let label = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])('label',name)
        let input = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createEl */])('input')
        input.type = 'checkbox'
        input.value = value
        label.appendChild(input)
        return label
    }
    addEvent(){
        const self = this
        __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* EventUtil */].addEvent(this.$selector,'click',function(e){
            let el = e.target;
            let len = self.getChecked()
            if(el.nodeName.toLowerCase()!=='input') return false;
            if(el === self.checkAll){
                if(len === self.child.length){
                    el.checked = true
                }else{
                    self.child.forEach(item=>item.checked=true)
                }
            }else{
                if(len===self.child.length){
                    self.checkAll.checked = true
                }else if(len===0){
                    el.checked = true
                }else{
                    self.checkAll.checked = false
                }
            }
        })
    }
    getChecked(){
        return this.child.filter(item=>item.checked).length
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CheckBox;


/***/ })
/******/ ]);