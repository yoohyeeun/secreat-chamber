var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


$(document).ready(function(){

  let card1 = $(".swiper-slide div.forword")
  let card2 = $(".swiper-slide div.back")

  $(".swiper-slide").hover(function(){
    $(this).find(card1).toggleClass('active');
    $(this).find(card2).toggleClass('active');
  });

  quick=true;
  $(".arrow_btn").click(function(){
    $(this).toggleClass("active");

    //상하간격을 고려하여 위치를 잡아줌
    if(quick){
			$(".quick_icon .icon3").stop().animate({"bottom":"24rem"},500,"easeOutBack");
			$(".quick_icon .icon2").stop().animate({"bottom":"30rem"},500,"easeOutBack");
			$(".quick_icon .icon1").stop().animate({"bottom":"36rem"},500,"easeOutBack");
      quick = false;
    }else{
      $(".quick_icon li").stop(true,true).animate({"bottom":"0"},200);
      quick = true;
    };
  });

});