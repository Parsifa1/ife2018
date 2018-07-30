/*
 * @Author: GXC 
 * @Date: 2018-07-30 15:40:31 
 * @Last Modified by: GXC
 * @Last Modified time: 2018-07-30 15:52:46
 */

class Restaurant{
    constructor(options){
        this.cash = options.cash || 0
        this.seats = options.seats || 0
        this.staff = options.staff || []
    }
    hire(obj){
        this.staff.push(obj)
    }
    fire(name){
        let i = null
        this.staff.forEach((item,index) => {
            if(item.name === name) i = index;
        })
        i ? this.staff.splice(i,1) : alert('员工列表无此人')
    }
}

class Staff{
    constructor(name,salary){
        this.id = ''
        this.name = name
        this.salary = salary
    }
    finishOnceWork(){
        console.log("finish once job!")
    }
}
class Cook extends Staff {
    constructor(name,salary){
        super(name,salary)
    }
    finishOnceWork(){
        console.log("finish once Cook!")
    }
}
class Waiter extends Staff {
    constructor(name,salary){
        super(name,salary)
    }
    finishOnceWork(arr){
        if(Array.isArray(arr)){
            console.log("finish once record guest orders!")
        }else{
            console.log("Send once food!")
        }        
    }
}
class Customer{
    constructor(){}
    orderFood(){
        console.log("the customer order foot!")
    }
    eat(){
        console.log("the customer eatting!")
    }
}
class Food{
    constructor(name,cost,price){
        this.name = name
        this.cost = cost
        this.price = price
    }
}