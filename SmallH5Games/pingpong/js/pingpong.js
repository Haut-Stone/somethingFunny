/*
* @Author: Haut-Stone
* @Date:   2018-04-03 16:04:41
* @Last Modified by:   Haut-Stone
* @Last Modified time: 2018-04-03 23:39:13
*/

var KEY = {
	UP: 38,
	DOWN: 40,
	W: 87,
	S: 83
}

var pingpong = {
	scoreA: 0,
	scoreB: 0
}

pingpong.pressdKeys = [];
pingpong.ball = {
	speed: 5,
	x: 150,
	y: 100,
	directionX: 1,
	directionY: 1
}

$(function(){
	pingpong.timer = setInterval(gameloop, 30); //每隔30秒调用一次游戏主循环
	//是否按下
	$(document).keydown(function(e) {
		pingpong.pressdKeys[e.which] = true;
	});
	$(document).keyup(function(e) {
		pingpong.pressdKeys[e.which] = false;
	});
})

function gameloop() {
	moveBall();
	movePaddle();
}

function movePaddle() {
	//按键检测
	if (pingpong.pressdKeys[KEY.UP]) {
		var top = parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top", top-10);
	}
	if (pingpong.pressdKeys[KEY.DOWN]) {
		var down = parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top", down+10);
	}
	if (pingpong.pressdKeys[KEY.W]) {
		var w = parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top", w-10);
	}
	if (pingpong.pressdKeys[KEY.S]) {
		var s = parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top", s+10);
	}
}

function moveBall() {
	var playgroundHeight = parseInt($("#playground").height());
	var playgroundWidth = parseInt($("#playground").width());
	var paddleAX = parseInt($("#paddleA").css("left")) + parseInt($("#paddleA").css("width"));
	var paddleBX = parseInt($("#paddleB").css("left"));
	var paddleAYBottom = parseInt($("#paddleA").css("top")) + parseInt($("#paddleA").css("height"));
	var paddleBYBottom = parseInt($("#paddleB").css("top")) + parseInt($("#paddleB").css("height"));
	var paddleAYTop = parseInt($("#paddleA").css("top"));
	var paddleBYTop = parseInt($("#paddleB").css("top"));
	var ballHeight = parseInt($("#ball").height());
	var ballWidth = parseInt($("#ball").width());
	var ball = pingpong.ball;
	// console.log(playgroundHeight);
	
	//碰撞检测
	//底边
	if (ball.y + ball.speed*ball.directionY > playgroundHeight - ballHeight) {
		ball.directionY = -1;
	}
	//顶
	if (ball.y + ball.speed*ball.directionY < 0) {
		ball.directionY = 1;
	}
	//right
	if (ball.x + ball.speed*ball.directionX > playgroundWidth - ballWidth) {
		pingpong.scoreA++;
		$("#scoreA").html(pingpong.scoreA);
		ball.x = 250;
		ball.y = 100;
		$("#ball").css({
			"left": ball.x,
			"top": ball.y
		})
		ball.directionX = -1;
	}
	//left
	if (ball.x + ball.speed*ball.directionX < 0) {
		pingpong.scoreB++;
		$("#scoreB").html(pingpong.scoreB);
		ball.x = 150;
		ball.y = 100;
		$("#ball").css({
			"left": ball.x,
			"top": ball.y
		})
		ball.directionX = 1;
	}
	//paddle A
	if (ball.x + ball.speed*ball.directionX < paddleAX) {
		if(ball.y + ball.speed*ball.directionY <= paddleAYBottom && ball.y + ball.speed*ball.directionY >= paddleAYTop) {
			ball.directionX = 1;
		}
	}
	//paddle B
	if (ball.x + ball.speed*ball.directionX >= paddleBX - ballWidth + 5) {
		if(ball.y + ball.speed*ball.directionY <= paddleBYBottom && ball.y + ball.speed*ball.directionY >= paddleBYTop) {
			ball.directionX = -1;
		}
	}
	ball.x += ball.speed*ball.directionX;
	ball.y += ball.speed*ball.directionY;
	$("#ball").css({
		"left": ball.x,
		"top": ball.y 
	});
}


