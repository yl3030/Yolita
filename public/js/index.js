// 下拉式選單
$(".main-menu").mouseenter(function(){
	$(this).children(".sm-box").slideDown(200);
});
$(".main-menu").mouseleave(function(){
	$(this).children(".sm-box").hide();
});

// 漢堡鍵
$(".menu").click(function () {
	if ($(this).hasClass("menu-active")) {
		$(this).removeClass("menu-active");
		$("#rwd-nav-title").animate({ right: "-110%" }, 300);
	} else {
		$(this).addClass("menu-active");
		$("#rwd-nav-title").animate({ right: "0" }, 300);
	}
});

// rwd手風琴
$(".fold-box").click(function () {
	if ($(this).children(".fold-icon").hasClass("active")) {
		$(this).children(".fold-icon").removeClass("active");
		$(this).closest(".card").children(".collapse").slideUp(300);
		$(this).children(".rwd-title-name").css("font-weight", "normal");
		if (!$(this).closest(".card").hasClass("nav-active")) {
			$(this).children(".rwd-title-name").css("color", "#333333");
			$(this)
				.children(".fold-icon")
				.children(".fi")
				.css("background-color", "#333333");
		}
	} else {
		$(this).children(".fold-icon").addClass("active");
		$(this).closest(".card").children(".collapse").slideDown(300);
		$(this).children(".rwd-title-name").css("font-weight", "900");
		if (!$(this).closest(".card").hasClass("nav-active")) {
			$(this).children(".rwd-title-name").css("color", "#ff6262");
			$(this)
				.children(".fold-icon")
				.children(".fi")
				.css("background-color", "#ff6262");
		}
	}
});

// 搜尋鍵
$("#search").click(function () {
	$(".search-form").slideToggle(300);
});

// 購物車
$("#cart").click(function () {
	$("#check-list").animate({ right: "0" }, 300);
});

$("#cart-leave").click(function () {
	$("#check-list").animate({ right: "-100%" }, 300);
});

$(".d-check").click(function(){
	$(this).parents(".check-product").slideUp(300);
})

// 確認已加入購物車
$(".pb-btn").click(function(){
	$(".buy-message").slideDown(300);
	$("#bm-cross").click(function(){
		$(this).parents(".buy-message").slideUp(300);
	})
})

// 收藏鍵
$(".save-btn").click(function () {
	if($(this).children(".fa-heart").hasClass("far")){
		$(this).children(".fa-heart").removeClass("far");
		$(this).children(".fa-heart").addClass("fas");
	}else if($(this).children(".fa-heart").hasClass("fas")){
		$(this).children(".fa-heart").removeClass("fas");
		$(this).children(".fa-heart").addClass("far");
	};
});

$(".rwd-save-btn").click(function () {
	var opa = $(this).children(".fas").css("opacity");
	if (opa == 0) {
		$(this).children(".fas").css("opacity", 1);
		$(this).children(".far").css("opacity", 0);
	} else if (opa == 1) {
		$(this).children(".fas").css("opacity", 0);
		$(this).children(".far").css("opacity", 1);
	}
});

$("#prod-save").click(function () {
	var opa = $(this).children(".fas").css("opacity");
	if (opa == 0) {
		$(this).children(".fas").css("opacity", 1);
		$(this).children(".far").css("opacity", 0);
	} else if (opa == 1) {
		$(this).children(".fas").css("opacity", 0);
		$(this).children(".far").css("opacity", 1);
	}
});


// 輪播圖
var Rswiper = new Swiper('.home-slider', {
	loop:true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
	  el: '.hs-sp',
	  clickable: true,
	},
	navigation: {
		nextEl: ".Snext", // 上一頁按鈕物件
		prevEl: ".Sprev", // 下一頁按鈕物件
	},
  });
  // 滑鼠滑入後停止輪播
$(".home-slider").mouseenter(function () {
	Rswiper.autoplay.stop();
});
$(".home-slider").mouseleave(function () {
	Rswiper.autoplay.start();
});

