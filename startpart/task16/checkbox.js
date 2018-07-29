/*
 * @Author: GXC 
 * @Date: 2018-07-29 11:27:32 
 * @Last Modified by: GXC
 * @Last Modified time: 2018-07-29 11:31:49
 */
import {EventUtil,createEl} from './utils';

export default class CheckBox {
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
        let label = createEl('label',name)
        let input = createEl('input')
        input.type = 'checkbox'
        input.value = value
        label.appendChild(input)
        return label
    }
    addEvent(){
        const self = this
        EventUtil.addEvent(this.$selector,'click',function(e){
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