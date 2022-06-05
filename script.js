const from = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//未成功提交用户名
function showError(input, message) {
  const formControl = input.parentElement; //获取username的父级元素，即fromControl
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message; //将small的文本元素改为message传来的字符
}

//成功提交用户名
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//检查格式
function checkRequired(arr) {
  arr.forEach((input) => {
    //相同句式function(input){}
    if (input.value.trim() === "")
      //trim()删除字符串两边的空格
      showError(input, `${input.id}未提交成功`);
    else showSuccess(input);
  });
}

//检查长度
function checkLength(input, min, max) {
  if (input.value.length < min || input.value.length > max) {
    showError(input, `${input.id}的长度必须在${min}和${max}之间`);
  } else showSuccess();
}

//检查两次密码是否一样
function checkPasswordsMatch(input1, input2) {
  if (input1.value === input2.value) {
    showSuccess();
  } else showError(input2, "密码不一致");
}

//监听事件
from.addEventListener("submit", function (e) {
  e.preventDefault(); //阻止submit提交

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 10);
  checkPasswordsMatch(password, password2);
});
