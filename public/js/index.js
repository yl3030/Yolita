// 漢堡鍵
$("#menu").click(function () {
	$("#rwd-nav-title").animate({ right: "0" }, 300);
});

$("#rwd-nav-cross").click(function () {
	$("#rwd-nav-title").animate({ right: "-110%" }, 300);
});

// 搜尋鍵
$("#search").click(function () {
	$("#search-form").slideToggle(300);
});

// 購物車
$("#cart").click(function () {
	$("#check-list").animate({ right: "0" }, 300);
});

$("#leave").click(function () {
	$("#check-list").animate({ right: "-550px" }, 300);
});

// 確認已加入購物車

$(".rwd-cart").click(function () {
	$("#buy-alert").animate({ right: "0" }, 300);
	$("#buy-alert").delay(1000).animate({ right: "-300px" }, 300);
});

$(".buy-btn").click(function () {
	$("#buy-alert").animate({ right: "0" }, 300);
	$("#buy-alert").delay(1000).animate({ right: "-300px" }, 300);
});

$("#buy-alert-btn").click(function () {
	$("#buy-alert").animate({ right: "-300px" }, 300);
});




// 收藏鍵

$(".save-btn").click(function () {
	var opa = $(this).children(".fas").css("opacity");
	if (opa == 0) {
		$(this).children(".fas").css("opacity", 1);
		$(this).children(".far").css("opacity", 0);
	} else if (opa == 1) {
		$(this).children(".fas").css("opacity", 0);
		$(this).children(".far").css("opacity", 1);
	}
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
	autoplay:1000,
	autoplayDisableOnInteraction:false,
	pagination: {
	  el: '.reco-sp',
	  clickable: true,
	},
	navigation: {
		nextEl: ".Rnext", // 上一頁按鈕物件
		prevEl: ".Rprev", // 下一頁按鈕物件
	},
  });
