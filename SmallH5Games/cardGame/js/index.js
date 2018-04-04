/*
* @Author: Haut-Stone
* @Date:   2018-04-03 17:52:49
* @Last Modified by:   Haut-Stone
* @Last Modified time: 2018-04-04 13:42:33
*/

var matchingGame = {};
matchingGame.deck = [
	'card101', 'card101',
	'card102', 'card102',
	'card103', 'card103',
	'card104', 'card104',
	'card111', 'card111',
	'card112', 'card112',
]

$(function(){
	//打乱牌的顺序
	matchingGame.deck.sort(shuffle);
	for(var i=0;i<11;i++) {
		$('.card:first-child').clone().appendTo("#cards");
	}
	$("#cards").children().each(function(index) {
		$(this).css({
			"left": ($(this).width() + 20) * (index %4),
			"top": ($(this).height() + 20) * Math.floor(index / 4)
		});
		//直接给值
		var pattern = matchingGame.deck.pop();
		//给女武神面加类
		$(this).find(".back").addClass(pattern);
		//把数据信息给card
		$(this).attr("data-pattern", pattern);
		console.log("被点击");
		$(this).click(selectCard);
		});
});

function shuffle() {
	//这里返回的是一个 (-0.5->0.5)的随机值，根据正负来确定是否交换
	return 0.5 - Math.random();
}

function selectCard() {
	//如果已经翻开两张牌
	if($(".card-flipped").size() > 1) {
		console.log("card more then one");
		return;
	}
	console.log("addclass flipped");
	$(this).addClass("card-flipped");
	//0.7秒后，检测两张已翻开的牌的图案
	if($(".card-flipped").size() == 2) {
		setTimeout(checkPattern, 700);
	}
}

function isMatchPattern() {
	var cards = $(".card-flipped");
	//比较了两张牌的数据信息是否相同
	var pattern = $(cards[0]).data("pattern");
	var anotherPattern = $(cards[1]).data("pattern");
	return (pattern == anotherPattern);
}

function checkPattern() {
	if(isMatchPattern()) {
		$(".card-flipped").removeClass("card-flipped").addClass("card-removed");
		//动画结束时进行remove函数
		$(".card-removed").bind("webkitTransitionEnd", removeTookCards);
	} else {
		$(".card-flipped").removeClass("card-flipped");
	}
}

function removeTookCards() {
	$(".card-removed").remove();
}