//密码开闭眼-开始
function openOrClose(x) {
    if (pwdValue.type == "password") {
        pwdValue.type = "text";
        x.style.backgroundImage = 'url(mainimg/open.png)';
    } else {
        pwdValue.type = "password";
        x.style.backgroundImage = 'url(mainimg/close.png)';
    }
}
//密码开闭眼-结束

//登录界面二维码颜色变换-开始
function changeImg(x) {
    if (/one/g.test(x.className)) {
        x.id = "unlook";
        two.id = "";
        divOne.className = "login_bottom_l fl unlook divOne";
        divTwo.className = "login_bottom_l fl divTwo";
        quicklogin.className = "quicklogin unlook";
        zhanghaomima.className = "zhanghaomima";
    } else if (/two/g.test(x.className)) {
        x.id = "unlook";
        one.id = "";
        divOne.className = "login_bottom_l fl divOne";
        divTwo.className = "login_bottom_l fl divTwo unlook";
        quicklogin.className = "quicklogin";
        zhanghaomima.className = "zhanghaomima unlook";
    }
}
//登录界面二维码颜色变换-结束