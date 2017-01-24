/*
* @Author: Haut-Stone
* @Date:   2017-01-18 19:31:39
* @Last Modified by:   Haut-Stone
* @Last Modified time: 2017-01-23 17:44:34
*/

function fun0(){
    alert('你是怎么知道这个网站的？');
    alert('难道你和作者有py交易？');
    var q1 = confirm("有没有？");
    if(q1 == true){
        alert("纳尼！！我就是作者啊");
        alert("你真可怕。");
    }else{
        var q2 = confirm("那你就是暗恋作者喽？");
        if(q2 == true){
            alert("快洗干净在床上等我23333");
        }else{
            alert("那你就是被作者穿女装诱惑了啊！！");
        }
    }
    alert("准备好接受制裁吧");
    var ans = prompt("输入金手指可以逃过一劫","");
    if(ans == "123"){
        alert("哈哈，你绝对不是一般人");
        alert("快去补番吧，不要在这里浪费时间了233");
        window.close(); 
    }else if(ans == "金手指"){
        alert("你以为我傻吗。。。");
    }else{
        alert("接受制裁吧!");
    }
}

function fun1() {
    var name = prompt("快输入，我是笨蛋", "");
    if(name == "我是笨蛋"){
        alert('真自觉');
    }else{
        alert('不听话的小孩子会被鬼吃掉欧');
        fun1();
    }
}

function fun2() {
    var r = confirm("你觉得你很笨吗？");
    var x;
    if(r == true){
        x = confirm("再问一遍真的吗？");
        if(x == true){
            alert("好吧，你还真是无可救药呢");
        }else{
            alert("不肯说实话？只好再问一遍了");
            fun2();
        }
    }else{
        alert("你既然点开了链接，快重新选择");
        fun2();
    }
}



fun0();
alert('你是笨蛋');
alert('什么？');
alert('我说你是笨蛋啊,笨蛋');

fun1();
fun2();
for (var a=1;a<=10;a++) {
    alert('笨蛋');
}
var q3 = confirm("知道自己笨了吗？")
if(q3 == true){
    alert(".....");
    alert("就算你笨我也喜欢你啊");
    window.close();
}else{  
    alert(".......");
    for (var a=1;a<=10;a++) {
        alert('笨蛋');
    }
}
alert('可是就算笨我也喜欢你啊');