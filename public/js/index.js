// swiper
var hHeight = $("header").height();
$("#banner").css("margin-top", hHeight);
console.log("HH");
$(window).on("resize scroll", function () {
	$("#banner").css("margin-top", hHeight);
	if ($(window).scrollTop() > hHeight) {
		$("header")
			.children(".main-bar")
			.children("nav")
			.css("left", "50%")
			.css("transform", "translateX(-50%)");
		$("header")
			.children(".main-bar")
			.children("nav")
			.children("ul")
			.css("text-align", "center");
		$("header").children(".logo").slideUp(100);
		$("header")
			.children(".main-bar")
			.children(".dd-logo")
			.children("#dropdown-logo")
			.show();
	} else {
		$("header")
			.children(".main-bar")
			.children("nav")
			.css("left", "0")
			.css("transform", "translateX(0)");
		$("header")
			.children(".main-bar")
			.children("nav")
			.children("ul")
			.css("text-align", "left");
		$("header").children(".logo").slideDown(100);
		$("header")
			.children(".main-bar")
			.children(".dd-logo")
			.children("#dropdown-logo")
			.hide();
	}
});

// 輪播圖
var Rswiper = new Swiper("#banner", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: "#banner-pag",
		clickable: true,
	},
	navigation: {
		nextEl: ".Snext", // 上一頁按鈕物件
		prevEl: ".Sprev", // 下一頁按鈕物件
	},
});
// 滑鼠滑入後停止輪播
$("#banner").mouseenter(function () {
	Rswiper.autoplay.stop();
});
$("#banner").mouseleave(function () {
	Rswiper.autoplay.start();
});

// 選規格
$(".spec")
	.children("ul")
	.children("li")
	.click(function () {
		$(".spec").children("ul").children("li").removeClass("active");
		$(this).addClass("active");
	});

// 加入購物車
$(".add").click(function () {
	if (
		$(this)
			.parents(".text-box")
			.children(".spec")
			.children("ul")
			.children("li")
			.hasClass("active")
	) {
		$(this).parents(".add-modal").modal("hide");
		$(".modal-backdrop").hide();
		$(this)
			.parents(".text-box")
			.children(".spec")
			.children("ul")
			.children("li")
			.removeClass("active");
		$(".alert-success").children("p").empty();
		$(".alert-success").children("p").append("已加入購物車");
		$(".alert-success").fadeIn(300);
		$(".alert-success").delay(1500).fadeOut(300);
	} else {
		$(".alert-error").children("p").empty();
		$(".alert-error").children("p").append("您未選擇規格");
		$(".alert-error").fadeIn(300);
		$(".alert-error").delay(1500).fadeOut(300);
	}
});

// 收藏商品
$(".save").click(function () {
	if ($(this).hasClass("saved")) {
		$(this).removeClass("saved");
		$(".alert-success").children("p").empty();
		$(".alert-success").children("p").append("已取消收藏商品");
		$(".alert-success").fadeIn(300);
		$(".alert-success").delay(1500).fadeOut(300);
	} else {
		$(this).addClass("saved");
		$(".alert-success").children("p").empty();
		$(".alert-success").children("p").append("已收藏商品");
		$(".alert-success").fadeIn(300);
		$(".alert-success").delay(1500).fadeOut(300);
	}
});

// menu
$(".mb-header")
	.children(".header-box")
	.children(".menu")
	.click(function () {
		$(this).parents(".mb-header").children(".menu-box").slideToggle(100);
	});

if ($(window).width() > 1024) {
	var storyHeight = $("#story").children(".bg-color").children("img").height();
	var stHeight = $("#story").children(".container").children(".text").height();
	var stMT = (storyHeight - stHeight) / 2;
	$("#story").children(".container").css("height", storyHeight);
	$("#story").children(".container").children(".text").css("padding-top", stMT);
	var contactHeight = $("#contact").children(".pic-box").width() * 0.6;
	var cfHeight = $("#contact").children(".container").children("form").height();
	var cfMT = (contactHeight - cfHeight) / 2;
	$("#contact").css("height", contactHeight);
	$("#contact").children(".container").children("form").css("margin-top", cfMT);
}else{
	var fH = $("#contact").children(".container").children("form").height();
	$("#contact").children(".container").css("height",fH);
}

$(window).on("resize scroll", function () {
	if ($(window).width() > 1024) {
		var storyHeight = $("#story")
			.children(".bg-color")
			.children("img")
			.height();
		var stHeight = $("#story")
			.children(".container")
			.children(".text")
			.height();
		var stMT = (storyHeight - stHeight) / 2;
		$("#story").children(".container").css("height", storyHeight);
		$("#story")
			.children(".container")
			.children(".text")
			.css("padding-top", stMT);
		var contactHeight = $("#contact").children(".pic-box").width() * 0.6;
		var cfHeight = $("#contact")
			.children(".container")
			.children("form")
			.height();
		var cfMT = (contactHeight - cfHeight) / 2;
		$("#contact").css("height", contactHeight);
		$("#contact")
			.children(".container")
			.children("form")
			.css("margin-top", cfMT);
	}else{
		var fH = $("#contact").children(".container").children("form").height();
		$("#contact").children(".container").css("height",fH);
	}
});
