/**
 * @Author: tony
 * @Date:   2018-06-10T21:42:33+08:00
 * @Last modified by:   tony
 * @Last modified time: 2018-06-11T12:16:53+08:00
 */

// 邮箱后缀List参考
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var emailInputEl = document.getElementById("email-input");
var emailSugWrapper = document.getElementById('email-sug-wrapper');
//inputDom的输入监听
emailInputEl.oninput = function() {
  // 获取用户输入，生成提示框中的提示内容，将提示内容添加到email - sug - wrapper中
  // 控制email - sug - wrapper的显示 / 隐藏状态
  judgeEmailSugWrapperDisplay();
}
emailInputEl.onblur = emailSugWrapperHide;
emailSugWrapper.onclick = function(e){
  console.log(e)
}
function getEmailVal() {
  //拿到input输入框的输入内容trim后返回
  console.log("getEmailVal",emailInputEl.value.replace(/(^\s*)|(\s*$)/g,""))
  return emailInputEl.value.replace(/(^\s*)|(\s*$)/g,"");
}

function produceEmailPostfixList() {
  let val = getEmailVal();
  let atIndex = val.indexOf("@");
  let listContent = '';
  if(atIndex !== -1 && atIndex === val.length-1){
    postfixList.forEach(item=>{listContent+=`<li>${val + item}</li>`})
  }else if(atIndex!==-1){
    let postfixFilterList = postfixList.filter(value=>value.indexOf(val.substring(atIndex+1)) !== -1);
    if(val.indexOf(postfixFilterList[0])===-1){
      postfixFilterList.forEach(item=>{listContent+=`<li>${val.substr(0,atIndex+1) + item}</li>`})
    }
  }else{
    postfixList.forEach(item=>{listContent+=`<li>${val + '@' + item}</li>`})
  }
  return listContent;
  // 遍历postfixList {
  //   把用户输入和每一个postfix进行结合成为每一个Li
  // }
  // 返回生成的提示内容
}

function renderEmailSugHtml() {
  // 获取生成提示框中的提示内容
  // 将内容添加到email - sug - wrapper中
  emailSugWrapper.innerHTML = produceEmailPostfixList()

}

function judgeEmailSugWrapperDisplay() {
  if (getEmailVal()) {
    renderEmailSugHtml();
    emailSugWrapperShow();
  } else {
    emailSugWrapperHide();
  }
}

//显示隐藏是直接控制css  还是提前定义好CSS，控制Class的改变
function emailSugWrapperHide() {
  //做具体隐藏提示框的操作
  emailSugWrapper.style.display = "none";
}

function emailSugWrapperShow() {
  //做具体显示提示框的操作
  emailSugWrapper.style.display = "block";
}
