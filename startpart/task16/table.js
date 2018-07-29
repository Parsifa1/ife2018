import {
    EventUtil,
    createEl
} from './utils'
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
    let table = createEl('table', null, 'user-table');
    let thead = "";
    let tbody = createEl('tbody');
    //如果没有过滤代表输出所有内容
    option.filter ? null : option.filter = Object.getOwnPropertyNames(data[0])
    let d = data.map(item => {
        let list = []
        option.filter.forEach(i => {
            list.push(item[i])
        })
        // 合并数组
        return list.toString().split(",")
    })
    option.thead ? thead = createEl('thead') : null
    if (thead) {
        let tr = createEl("tr");
        option.thead.forEach(item => {
            let td = createEl('td', item);
            tr.appendChild(td)
        })
        thead.appendChild(tr)
    }

    //tbody
    d.forEach(item => {
        let tr = createEl('tr');
        item.forEach(i => {
            let td = createEl("td", i);
            tr.appendChild(td);
        })
        tbody.appendChild(tr)
    })
    table.appendChild(thead)
    table.appendChild(tbody)
    return table;
}
export default createTable;