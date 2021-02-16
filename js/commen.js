let regexTel = /^1[3578]\d{9}$/;
let two = document.querySelector(".two");
let one = document.querySelector(".one");
let divOne = document.querySelector(".divOne");
let divTwo = document.querySelector(".divTwo");

// 输入框placeholder隐藏与显示-开始
function fnUnShow(x) { //获得焦点
    if (x.className == "tel") {
        x.placeholder = "";
    } else if (x.className == "sear") {
        x.placeholder = "";
    } else if (x.className == "pho") {
        x.placeholder = "";
    } else if (x.className == "yanzheng") {
        x.placeholder = "";
    } else if (x.className == "pwd") {
        x.placeholder = "";
    } else if (x.className == "palceTel") {
        x.placeholder = "";
    } else if (x.className == "inputYZM") {
        x.placeholder = "";
    }
}

function fnShow(x) { //失去焦点
    if (x.className == "tel") {
        x.placeholder = "输入手机号";
    } else if (x.className == "sear") {
        x.placeholder = "搜索职位、公司或地点";
    } else if (x.className == "pho") {
        if (x.value.length == 0) {
            x.placeholder = "请输入常用手机号或邮箱";
        } else if ((regexTel.test(x.value) == false) && (regexEmail.test(x.value) == false)) {
            phow.className = "warnOne phow";
            eyes.style.top = "162px";
        } else if ((regexTel.test(x.value) == true) || (regexEmail.test(x.value) == true)) {
            phow.className = "warnOne warnTwo phow"; //警告隐藏
            eyes.style.top = "144px";
        }
    } else if (x.className == "pwd") {
        if (x.value.length == 0) {
            x.placeholder = "请输入密码";
        } else if (x.value.length >= 6 && x.value.length <= 16) {
            pwdw.className = "warnOne warnTwo pwdw";
        } else {
            pwdw.className = "warnOne pwdw";
        }
    } else if (x.className == "yanzheng") {
        x.placeholder = "验证码";
    } else if (x.className == "palceTel") {
        if (x.value.length == 0) {
            x.placeholder = "请输入常用手机号";
        } else if (regexTel.test(x.value) == false) {
            palceTelw.className = "warnOne palceTelw";
        } else if (regexTel.test(x.value) == true) {
            palceTelw.className = "warnOne warnTwo palceTelw"; //警告隐藏
        }
    } else if (x.className == "inputYZM") {
        if (x.value.length == 0) {
            x.placeholder = "请输入验证码";
        } else if (x.value.length == 6 && /\d{6}/.test(x.value)) {
            inputYZMw.className = "warnOne warnTwo inputYZMw";
        } else {
            inputYZMw.className = "warnOne inputYZMw";
        }
    }
}
// 输入框placeholder隐藏与显示-结束

//登录界面二维码颜色变换-开始
function grayErweima(x) {
    x.className = "erweima one erweimaOne";
}

function colorErweima(x) {
    x.className = "erweima one erweimaColor";
}

function grayDiannao(x) {
    x.className = "erweima two diannao";
}

function colorDiannao(x) {
    x.className = "erweima two diannaoColor";
}
//登录界面二维码颜色变换-结束

//修改密码和验证码登录背景颜色-开始
function changeColor(x) {
    if (x.className == "gray") {
        x.className = "greenColor";
        mima.className = "gray mima yzlfb yzlfa";
        wayOne.className = "wayOne unShow";
        wayTwo.className = "wayTwo show";
    } else {
        x.className = "greenColor mima";
        gray.className = "gray";
        wayOne.className = "wayOne show";
        wayTwo.className = "wayTwo unShow";
    }
}
//修改密码和验证码登录背景颜色-结束