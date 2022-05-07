/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-13 10:02:33
 * @version $Id$
 */
// var k=0;
//标题切换
var buttonlist=document.querySelectorAll("button.m-btn");
var boxlist=document.querySelectorAll("div.m-box1")
 for(i=0;i<buttonlist.length;i++){
    buttonlist[i].addEventListener('click', function(){
        this.style.borderButtom="none";
        console.log(this.style.borderRight);
        for(i=0;i<boxlist.length;i++){
            if(boxlist[i].classList.contains(this.classList.item(0))){
                boxlist[i].classList.add("cansee");
                buttonlist[i].classList.add("cansee");
            }
            else{
                boxlist[i].classList.remove("cansee");
                buttonlist[i].classList.remove("cansee");
            }
        }
    });
 };
// console.log(document.querySelectorAll("div.m-box1")[1])
// console.log(buttonlist[1])
//图片加载
var WIDTH = 800,HEIGHT = 400,I_WIDTH=300,I_HEIGHT=400;
var lastdate;
var num=0.1;
var run=true;//flag
var imglist=document.querySelectorAll("img.m-img1");
var bigbox=document.querySelector("div.m-big");
for(i=0;i<imglist.length-1;i++){
    imglist[i].setAttribute('src','img/p'+(i+1)+'.png');
    imglist[i].addEventListener('click',function(){
        newsrc=this.getAttribute('src');
        // imglist[imglist.length-1].setAttribute('src',newsrc);
        document.querySelectorAll("div.m-big > img")[0].setAttribute('src',newsrc);
        console.log(document.querySelectorAll("div.m-big > img")[0].getAttribute('src'));
        bigbox.classList.add("cansee");
        lastdate = new Date;
        num=0.1;
        bigbox.style.width=WIDTH*num+'px';
        bigbox.style.height=HEIGHT*num+'px';
        imglist[10].style.width = I_WIDTH*num+'px';
        imglist[10].style.height = I_HEIGHT*num+'px';
        if(run){
        setInterval(animate,10);
        }
        else{
            clearInterval(animate);
        }

    })
}
document.querySelectorAll("div.m-big > img")[0].addEventListener('click',function(){
    bigbox.classList.remove("cansee");
    run=true;
})

function  animate(){
    var nowdate = new Date;
    if(nowdate-lastdate>300){
        run=false;
        clearInterval(animate);
        bigbox.style.width=WIDTH+'px';
        bigbox.style.height=HEIGHT+'px';
        imglist[10].style.width = I_WIDTH+'px';
        imglist[10].style.height = I_HEIGHT+'px';
        num=0.1;
    }
    else{
        num+=0.9/(30);
        bigbox.style.width=WIDTH*num+'px';
        bigbox.style.height=HEIGHT*num+'px';
        imglist[10].style.width = I_WIDTH*num+'px';
        imglist[10].style.height = I_HEIGHT*num+'px';
    }
}

//js滑块
var btnlist2=document.querySelectorAll("button.m-btn-3");
var boxlist2=document.querySelectorAll("div.m-box333");
for(i=0;i<btnlist2.length;i++){
    btnlist2[i].addEventListener('click',function(){
        for(j=0;j<boxlist2.length;j++){
            if(boxlist2[j].classList.contains(this.classList.item(0))){
                boxlist2[j].classList.add("cansee");
                btnlist2[j].classList.add("cansee");
            }
            else{
                boxlist2[j].classList.remove("cansee");
                btnlist2[j].classList.remove("cansee");
            }
        }
    })
}


var addbtn = document.querySelectorAll("button.m-btn33")[0];
var ullist = document.querySelectorAll("ul.m-list")[0];
addbtn.addEventListener('click',function(){
    var newli = document.createElement("li");
    var newspan = document.createElement("span");
    var newlabel = document.createElement("input");
    var newbutton = document.createElement("button");
    newli.classList.add("m-li");
    newspan.classList.add("m-span");
    newlabel.classList.add("m-label");
    newbutton.classList.add("m-inbtn");
    newli.append(newspan,newlabel,newbutton);
    ullist.appendChild(newli);
    upnumber();
});

function upnumber(){
    var lilist = document.querySelectorAll("li.m-li");
    for(i=0;i<lilist.length;i++){
        lilist[i].childNodes[0].innerHTML=i+1;
        lilist[i].childNodes[2].innerHTML="Delete";
        lilist[i].childNodes[2].addEventListener('click',move);
    }
}
function move(e){
    target = e.target||window.event;
    target.parentNode.parentNode.removeChild(target.parentNode);
    upnumber();
}

// jquery放大
for(i=0;i<$("img.m-img2").length;i++){
    $("img.m-img2").eq(i).attr('src','img/p'+(i+1)+'.png');
    $("img.m-img2").eq(i).click(function (e) {
        $("div.m-box3").show("10",function(){
            console.log("bigimg.ok");
        })
        $("img.m-img3").attr('src',this.src);
        if(run){//区分js原生代码
            $("img.m-img3").click(function (e) {
                $("div.m-box3").hide("10",function(){
                    console.log("close");
                })
            });
        }
    });
}
console.log($("img.m-img2").length);

//jquery滑块
$("button.m-btn-33").click(function (e) {
    for(i=0;i<$("div.m-box3333").length;i++){
        if($("div.m-box3333").eq(i).hasClass(this.classList.item(0))){
            $("div.m-box3333").eq(i).addClass("cansee");
            $("button.m-btn-33").eq(i).addClass("cansee");
        }
        else{
            $("div.m-box3333").eq(i).removeClass("cansee");
            $("button.m-btn-33").eq(i).removeClass("cansee");
        }
    }
});

//jquery数据管理
$("button.m-btn331").click(function (e) {
    var temp=$("li.m-fuzhi").clone();
    temp.find("button").click(function (e) {
        $(this).parent().remove();
        paixu()
    });
    temp.removeClass("m-fuzhi");
    $("ul.m-list1").append(temp);
    paixu();
});
function paixu(){
    for(i=0;i<$("li.m-li1").length;i++){
        $("li.m-li1").eq(i).find("span").text(i+1);
    }
}