// test1
const test1Input = document.querySelector('#name');
const submitBtn = document.getElementById("submit-btn");
test1Input.addEventListener('keydown',function(e){
	if(e.keyCode===27){
		this.value = ''
	}else if(e.keyCode===13){
		console.log(this.value)
		this.value = ''
	}
},false)
submitBtn.addEventListener('click',(e)=>{
	console.log(test1Input.value)
	test1Input.value = ''
},false)

// test2
const school = document.getElementById("school");
const company = document.getElementById("company");
school.addEventListener('focus',()=>{
    document.getElementById("school-select").style.display = 'block';
    document.getElementById("company-select").style.display = 'none';
},false)
company.addEventListener('focus',()=>{
    document.getElementById("company-select").style.display = 'block';
    document.getElementById("school-select").style.display = 'none';
},false)

// test3

const ul = document.querySelector("ul.palette");
const p = document.querySelector("p.color-picker");
ul.addEventListener("click",function(e){
    let bg = e.target.style.backgroundColor;
    p.innerHTML = bg;
    p.style.color = bg;
})

// test4
const fadeBtn = document.getElementById('fade-btn');
const fadeObj = document.getElementById('fade-obj');

fadeBtn.addEventListener('click',function(e){
	if(fadeObj.style.opacity === '1' || fadeObj.style.opacity === ''){
		e.target.disabled = true
		let i = 1000;
		var timer = setInterval(()=>{
			fadeObj.style.opacity = i/1000
			if(i === 0){
				e.target.disabled = false
				e.target.innerHTML = "恢复"
				clearInterval(timer)
			}else{
				i--
			}
		},17)
	}else{
		e.target.disabled = true
		let i = 0;
		var timer = setInterval(()=>{
			fadeObj.style.opacity = i/1000
			if(i === 1000){
				e.target.disabled = false
				e.target.innerHTML = "淡出"
				clearInterval(timer)
			}else{
				i++
			}
		},17)
	}
})

// test5
const test = document.querySelector(".test5");
var flag = true;
var position = 0;

setInterval(function(){
	if(position===0) flag = true
	if(position===7680) flag = false

	if(flag){
		position+=480
	}else{
		position-=480
	}
	test.style.backgroundPositionY = `-${position}px`
},100)