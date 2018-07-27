let sourceData = [{
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
    let len = getChecked();
    if(len===1 && e.target.checked){
        e.preventDefault()
    }else if(len===2 && !e.target.checked){
        checkAll.checked = true;
    }
}
for(let item of checkbox){
    item.addEventListener('click',checkboxHandle,false)
}
checkAll.addEventListener('click',(e)=>{
    let len = getChecked();
    if(len===3 && e.target.checked) return false;
},false)