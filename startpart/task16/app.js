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

import data from './data'
import table from './table'
import CheckBox from './checkbox'

const checkboxWrapper = document.querySelector('.check-box');
const tableWrapper = document.getElementById('table-wrapper');

new CheckBox(checkboxWrapper,[{
    text: "华北",
    value: "华北"
},{
    text: "华南",
    value: "华南"
},{
    text: "华东",
    value: "华东"
}])

tableWrapper.appendChild(table(data,{
    thead: ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
}))