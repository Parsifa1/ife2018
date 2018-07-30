/*
 * @Author: GXC 
 * @Date: 2018-07-30 15:40:41 
 * @Last Modified by: GXC
 * @Last Modified time: 2018-07-30 19:12:53
 */
function Restaurant(options) {
    this.cash = options.cash || 0
    this.seats = options.seats || 0
    this.staff = options.staff || []
}
Restaurant.prototype.hire = function (obj) {
    this.staff.push(obj)
}
Restaurant.prototype.fire = function (name) {
    let i = null
    this.staff.forEach((item, index) => {
        if (item.name === name) i = index;
    })
    i ? this.staff.splice(i, 1) : alert('员工列表无此人')
}

function Staff(name, salary) {
    this.id = ''
    this.name = name
    this.salary = salary
}
Staff.prototype.finishOnceWork = function () {
    console.log("finish once job!")
}


function Cook(name, salary) {
    Staff.apply(this, arguments)
}
Cook.prototype.finishOnceWork = function () {
    console.log("finish once Cook!")
}

function Waiter(name, salary) {
    Staff.apply(this, arguments)
}
Waiter.prototype.finishOnceWork = function (arr) {
    if (Array.isArray(arr)) {
        console.log("finish once record guest orders!")
    } else {
        console.log("Send once food!")
    }
}

function Customer() {}
Customer.prototype.orderFood = function () {
    console.log("the customer order foot!")
}
Customer.prototype.eat = function () {
    console.log("the customer eatting!")
}

function Food(name, cost, price) {
    this.name = name
    this.cost = cost
    this.price = price
}