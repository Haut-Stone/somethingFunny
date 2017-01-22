/*
* @Author: Haut-Stone
* @Date:   2017-01-18 19:31:39
* @Last Modified by:   Haut-Stone
* @Last Modified time: 2017-01-20 20:09:13
*/


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

function fun0(){
	var ans = prompt("输入金手指跳过","");
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

fun0();
alert("来玩个游戏吧");
alert('你是笨蛋');
alert('什么？');
alert('我说你是笨蛋啊');

fun1();
fun2();
for (var a=1;a<=19;a++) {
    alert('笨蛋');
}
alert('好吧，你真的很傻，饶了你了~');