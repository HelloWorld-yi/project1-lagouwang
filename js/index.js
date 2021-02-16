let img = document.querySelector(".erweimaApp");
let lis = document.querySelector(".ulLis").querySelectorAll("li");
let as = document.querySelector(".ulLis").querySelectorAll("a");
let spans = document.querySelector(".banner").querySelectorAll("span");
let body = document.body;
let ul = document.querySelector(".lunbo_main_l_ul");
let lblis = ul.children;
let allAs = ul.querySelectorAll("a");
let mores = document.querySelectorAll(".more");
let remen = document.querySelector(".remen");
let zuixin = document.querySelector(".zuixin");
let Lis1 = document.querySelectorAll(".shadow")[0].querySelectorAll("li");
let Lis2 = document.querySelectorAll(".shadow")[1].querySelectorAll("li");
let Lis3 = document.querySelector(".ulLiss").querySelectorAll("li");
let bodyStyle = document.body;
let mask = document.querySelector(".mask");
let login = document.querySelector(".login");
let mask_login = document.querySelector(".mask_login");
let mask_login1 = document.querySelector(".mask_login1");
let mask_content = document.querySelector(".mask_content");
let mask_content_yiyanzheng = mask_content.querySelector(".yiyanzheng");
let mask_content_shurumima = mask_content.querySelector(".shurumima");
let mask_content1 = document.querySelector(".mask_content1");
let inputs = mask_content.querySelectorAll("input");
let ipts1 = document.querySelector(".ipts1");
let ipts2 = document.querySelector(".ipts2");
let spansImg = mask_content.querySelector(".spans").querySelectorAll("span");
let spansImg1 = mask_content1.querySelector(".spans").querySelectorAll("span");
let mask_zhuce = mask_login.querySelector(".mask_zhuce");
let mask_zhuce1 = mask_login1.querySelector(".mask_zhuce1");
let quicklogin = document.querySelector("#quicklogin");
let zhanghaomima = document.querySelector("#zhanghaomima");
let cloce1 = document.querySelector(".cloce1");
let cloce2 = document.querySelector(".cloce2");
let find = document.querySelector(".find");
//job-----------------------------------
let findJob = document.querySelector(".findJob");
let space1Job = findJob.querySelector(".space1");
let space1Span = space1Job.querySelector("span");
let ipts13 = space1Job.querySelector(".ipts3");
let yiyanzhengJob = findJob.querySelector(".yiyanzheng");
let shurumimaJob = findJob.querySelector(".shurumima");
let ipts4Job = findJob.querySelector(".ipts4");
let buttonJob = findJob.querySelector("button");
//---------------------------------------

//people--------------------------------
let findPeople = document.querySelector(".findPeople");
let space3 = findPeople.querySelector(".space3");
let space3Span = space3.querySelector("span");
let ipts33 = space3.querySelector(".ipts3");
let yiyanzhengPeople = findPeople.querySelector(".yiyanzheng");
let shurumimaPeople = findPeople.querySelector(".shurumima");
let ipts4People = findPeople.querySelector(".ipts4");
let buttonPeople = findPeople.querySelector("button");
//--------------------------------------
let rockets = document.querySelector(".rockets");
let htmLL = document.documentElement;
let ulLunbo = document.querySelector(".lunbo_main_r_cont"); //轮播图片的ul
let ol = document.querySelector(".circle"); //ol
let lunbo_main_r = document.querySelector(".lunbo_main_r");
let lengthDiv = document.querySelector(".lunbo_main_r").offsetWidth;
let arrow_l = document.querySelector(".arrow_l");
let arrow_r = document.querySelector(".arrow_r");
let flag = true; //节流阀
//技术信息栏变色-开始
for (let i = 0; i < allAs.length; i++) {
    allAs[i].onmouseover = function () {
        this.id = "aStyle";
    }
    allAs[i].onmouseout = function () {
        this.id = "";
    }
}
//技术信息栏变色-结束

//招聘信息背影-开始
function shadowAll(x) {
    for (let i = 0; i < x.length; i++) {
        x[i].onmouseover = function () {
            for (let j = 0; j < x.length; j++) {
                x[j].style.boxShadow = "";
            }
            this.style.boxShadow = "0 0 4px 2px rgba(0, 0, 0, .09)";
        }

        x[i].onmouseout = function () {
            this.style.boxShadow = "";
        }
    }
}

shadowAll(Lis1);
shadowAll(Lis2);
shadowAll(Lis3);
//招聘信息背影-结束

//下载APP二维码显示与隐藏-开始
function display(x) {
    x.style.display = "none";
    img.style.display = "none";
}
//下载APP二维码显示与隐藏-结束

//首页背景及文字颜色改变-开始
for (let i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        for (let j = 0; j < lis.length; j++) {
            lis[j].className = "";
            as[j].id = "";
        }
        this.className = "changeLi";
        this.querySelector("a").id = "changeA";
    }
}
//首页背景及文字颜色改变-结束

//变换24小时热门和最新职位颜色-开始
for (let i = 0; i < spans.length; i++) {
    spans[i].setAttribute("index", i);
}

function change(x) {
    for (let i = 0; i < spans.length; i++) {
        spans[i].className = "gray";
    }
    x.className = "black";
    let index = x.getAttribute("index");
    if (index == 0) {
        remen.style.display = "block";
        zuixin.style.display = "none";
    } else {
        remen.style.display = "none";
        zuixin.style.display = "block";
    }
}
//变换24小时热门和最新职位颜色-结束

//技术右拉信息详情-开始
for (let i = 0; i < lblis.length; i++) {
    lblis[i].setAttribute("index", i);
    lblis[i].onmouseover = function () {
        let index = this.getAttribute("index");
        for (let j = 0; j < mores.length; j++) {
            mores[j].style.display = "none";
            lblis[j].style.boxShadow = "";
        }
        this.style.boxShadow = "0 0 4px 2px rgba(0, 0, 0, .09)";
        mores[index].style.display = "block";
    }

    lblis[i].onmouseout = function () {
        mores[i].style.display = "none";
        lblis[i].style.boxShadow = "";

    }
}
//技术右拉信息详情-结束

//找工作招人字体-开始
function changeBlod(x) {
    if (/job/g.test(x.className)) {
        x.className = "job blod bLine";
        find.children[1].className = "people";
        findJob.className = "findJob";
        findPeople.className = "findPeople unlook";
    } else if (/people/g.test(x.className)) {
        x.className = "people blod bLine";
        find.children[0].className = "job";
        findJob.className = "findJob unlook";
        findPeople.className = "findPeople";
    }
}
//找工作招人字体-结束

//0086输入框背景颜色变换-开始
function focusBackgroundColor(x) {
    x.parentNode.style.border = "1px solid #00b38a";
    x.style.backgroundColor = "#fff";
    if (/ipts3/g.test(x.className) && /space1/g.test(x.parentNode.className)) {
        space1Span.style.backgroundColor = "#fff"; //0086
        yiyanzhengJob.className = "yiyanzheng"; //警告
    } else if (/fr/g.test(x.className) && /findJob/g.test(x.parentNode.parentNode.className)) {
        shurumimaJob.className = "shurumima"; //警告
        ipts4Job.style.backgroundColor = "#fff";
    } else if (/ipts4/g.test(x.className) && /findJob/g.test(x.parentNode.parentNode.className)) {
        buttonJob.style.backgroundColor = "#fff";
        shurumimaJob.className = "shurumima";
    } else if (/ipts3/g.test(x.className) && /space3/g.test(x.parentNode.className)) {
        space3Span.style.backgroundColor = "#fff"; //0086
        yiyanzhengPeople.className = "yiyanzheng"; //警告
    } else if (/fr/g.test(x.className) && /findPeople/g.test(x.parentNode.parentNode.className)) {
        shurumimaPeople.className = "shurumima"; //警告
        ipts4People.style.backgroundColor = "#fff";
    } else if (/ipts4/g.test(x.className) && /findPeople/g.test(x.parentNode.parentNode.className)) {
        buttonPeople.style.backgroundColor = "#fff";
        shurumimaPeople.className = "shurumima";
    }
}

function blurBackgroundColor(x) {
    x.parentNode.style.border = "";
    x.style.backgroundColor = "#f4f4f4";
    space1Span.style.backgroundColor = "#f4f4f4";
    space3Span.style.backgroundColor = "#f4f4f4";
    buttonJob.style.backgroundColor = "#f4f4f4";
    buttonPeople.style.backgroundColor = "#f4f4f4";
    ipts4Job.style.backgroundColor = "#f4f4f4";
    ipts4People.style.backgroundColor = "#f4f4f4";
    if (/ipts3/g.test(x.className) && /space1/g.test(x.parentNode.className)) {
        if (x.value.length == 0) {
            x.placeholder = "请输入常用手机号";
        } else if (!regexTel.test(x.value)) {
            yiyanzhengJob.className = "yiyanzheng blo";
        } else if (regexTel.test(x.value)) {
            yiyanzhengJob.className = "yiyanzheng";
        }
    } else if (/ipts4/g.test(x.className) && /findJob/g.test(x.parentNode.parentNode.className)) {
        if (x.value.length == 0) {
            x.placeholder = "请输入验证码";
        } else if (!/\d{6}/.test(x.value)) {
            shurumimaJob.className = "shurumima blo";
        } else if (/\d{6}/.test(x.value)) {
            shurumimaJob.className = "shurumima";
        }
    } else if (/fr/.test(x.className) && /findJob/g.test(x.parentNode.parentNode.className)) {
        if (ipts4Job.value.length == 0) {
            ipts4Job.placeholder = "请输入验证码";
        } else if (!/\d{6}/.test(ipts4Job.value)) {
            shurumimaJob.className = "shurumima blo";
        } else if (/\d{6}/.test(ipts4Job.value)) {
            shurumimaJob.className = "shurumima";
        }
    } else if (/ipts3/g.test(x.className) && /space3/g.test(x.parentNode.className)) {
        if (x.value.length == 0) {
            x.placeholder = "请输入常用手机号";
        } else if (!regexTel.test(x.value)) {
            yiyanzhengPeople.className = "yiyanzheng blo";
        } else if (regexTel.test(x.value)) {
            yiyanzhengPeople.className = "yiyanzheng";
        }
    } else if (/ipts4/g.test(x.className) && /findPeople/g.test(x.parentNode.parentNode.className)) {
        if (x.value.length == 0) {
            x.placeholder = "请输入验证码";
        } else if (!/\d{6}/.test(x.value)) {
            shurumimaPeople.className = "shurumima blo";
        } else if (/\d{6}/.test(x.value)) {
            shurumimaPeople.className = "shurumima";
        }
    } else if (/fr/.test(x.className) && /findPeople/g.test(x.parentNode.parentNode.className)) {
        if (ipts4People.value.length == 0) {
            ipts4People.placeholder = "请输入验证码";
        } else if (!/\d{6}/.test(ipts4People.value)) {
            shurumimaPeople.className = "shurumima blo";
        } else if (/\d{6}/.test(ipts4People.value)) {
            shurumimaPeople.className = "shurumima";
        }
    }
}
//0086输入框背景颜色变换-结束

//登录注册弹窗-开始
function logined() {
    mask.style.display = "block";
    mask_login.style.display = "block";
    bodyStyle.style = "overflow:-Scroll;overflow-y:hidden";
}

function regist() {
    mask.style.display = "block";
    mask_login1.style.display = "block";
    bodyStyle.style = "overflow:-Scroll;overflow-y:hidden";
}

cloce1.onclick = function () {
    mask.style.display = "none";
    bodyStyle.style = "";
    mask_login.style.display = "none";
}

cloce2.onclick = function () {
    mask.style.display = "none";
    bodyStyle.style = "";
    mask_login1.style.display = "none";
}
//登录注册弹窗-结束

//主页面登录注册切换-开始
for (let i = 0; i < spansImg.length; i++) {
    function colorGreen() {
        for (let j = 0; j < spansImg.length; j++) {
            spansImg[j].className = "";
            spansImg1[j].className = "";
        }
        this.className = "spans" + i;
    }

    function colorGray() {
        for (let j = 0; j < spansImg.length; j++) {
            spansImg[j].className = "";
            spansImg1[j].className = "";
        }
    }

    spansImg[i].addEventListener("mouseover", colorGreen);
    spansImg[i].addEventListener("mouseout", colorGray);
    spansImg1[i].addEventListener("mouseover", colorGreen);
    spansImg1[i].addEventListener("mouseout", colorGray);
}

function changeImgIndex(x) {
    if (/one/g.test(x.className) && /mask_login/g.test(x.parentNode.className)) {
        mask_zhuce.style.display = "block";
        /* two.id = "look";
        quicklogin.className = "unlook";
        zhanghaomima.className = "look"; */
    } else if (/two/g.test(x.className) && /mask_login/g.test(x.parentNode.parentNode.parentNode.className)) {
        // x.id = "";
        mask_zhuce.style.display = "none";
        /* quicklogin.className = "look bImg";
        zhanghaomima.className = "unlook"; */
    }
}

function changeImgIndex1(x) {
    if (/one/g.test(x.className) && /mask_login1/g.test(x.parentNode.className)) {
        mask_zhuce1.style.display = "block";
    } else if (/two/g.test(x.className) && /mask_login1/g.test(x.parentNode.parentNode.parentNode.className)) {
        // x.id = "";
        mask_zhuce1.style.display = "none";
        /* quicklogin.className = "look bImg";
        zhanghaomima.className = "unlook"; */
    }
}
//主页面登录注册切换-结束

//修改输入框的样式-开始
for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].onfocus = function () {
        this.style.border = "1px solid #00b38a";
        this.style.backgroundColor = "#fff";
        if (/ipts1/g.test(this.className)) {
            mask_content_yiyanzheng.style.display = "none";
        } else if (/ipts2/g.test(this.className)) {
            mask_content_shurumima.style.display = "none";
        }
    }
    inputs[i].onblur = function () {
        inputs[i].style.border = "";
        inputs[i].style.backgroundColor = "#f4f4f4";
        if (/ipts1/g.test(this.className)) {
            if (this.value.length == 0) {
                this.placeholder = "请输入常用手机号/邮箱";
            } else if (regexTel.test(this.value) == false) {
                mask_content_yiyanzheng.className = "yiyanzheng blo";
            } else if (regexTel.test(this.value)) {
                mask_content_yiyanzheng.className = "yiyanzheng";
            }
        } else if (/ipts2/g.test(this.className)) {
            if (this.value.length == 0) {
                this.placeholder = "请输入密码";
            } else if (this.value.length >= 6 && this.value.length <= 16) {
                mask_content_shurumima.className = "shurumima";
            } else {
                mask_content_shurumima.className = "shurumima blo";
            }
        }
    }
}
//修改输入框的样式-结束 

//隐藏显示火箭-开始
document.addEventListener("scroll",function(){
    var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;//获取页面被卷距离
    if(scrolltop > 100){
        rockets.style.display = "block";
    }else{
        rockets.style.display = "none";
    }
});
//隐藏显示火箭-结束

//变换火箭颜色以及返回顶部-开始
rockets.addEventListener("mouseenter",function(){
    this.style.backgroundPositionX = "-38px";
});

rockets.addEventListener("mouseleave",function(){
    this.style.backgroundPositionX = "";
});

rockets.addEventListener("click",function(){
    animateTop(htmLL,0);
});
//变换火箭颜色以及返回顶部-结束


//鼠标上滑轮播暂停和开始-开始
lunbo_main_r.addEventListener("mouseenter", function () {
    clearInterval(timer);
    timer = null;
});

lunbo_main_r.addEventListener("mouseleave", function () {
    timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
});
//鼠标上滑轮播暂停和开始-结束

//自动生成小圆点li
for (let i = 0; i < ulLunbo.children.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("index", i);
    ol.appendChild(li);
    li.addEventListener("click", function () {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        this.className = "current";
        let index = this.getAttribute("index");
        num = index;
        circleNum = index;
        animate(ulLunbo, -index * lengthDiv);
    });
}

//选中第一个小圆圈颜色默认
ol.children[0].className = "current";

//克隆第一张
let first = ulLunbo.children[0].cloneNode(true);
ulLunbo.appendChild(first);

//左右键点击
var num = 0; //控制图片的位置
var circleNum = 0; //控制小圆圈位置
arrow_r.addEventListener("click", function () {
    if (flag) {
        flag = false;
        if (num == ulLunbo.children.length - 1) {
            num = 0;
            ulLunbo.style.left = 0;
        }
        num++;
        animate(ulLunbo, -num * lengthDiv, function () {
            flag = true;
        });
        circleNum++;
        if (circleNum == ol.children.length) {
            circleNum = 0;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        ol.children[circleNum].className = "current";
    }
});

arrow_l.addEventListener("click", function () {
    if (flag) {
        flag = false;
        if (num == 0) {
            num = ulLunbo.children.length - 1;
            ulLunbo.style.left = -num * lengthDiv + "px";
        }
        num--;
        animate(ulLunbo, -num * lengthDiv, function () {
            flag = true;
        });
        circleNum--;
        if (circleNum < 0) {
            circleNum = ol.children.length - 1;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        ol.children[circleNum].className = "current";
    }
});

//设置自动播放
var timer = setInterval(function () {
    arrow_r.click();
}, 2000);