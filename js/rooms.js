$(function () {
  const total = $("#visual .panel li").length;
  let i = 0;
  let interval;

  // 초기 화면
  $("#visual .panel li").hide().eq(0).show();
  $("#visual .navi li:nth-child(2) span:first").text(i + 1);
  $("#visual .navi li:nth-child(2) span:last").text(total);
  $(".bar > div").css("width", ((i + 1) / total) * 100 + "%");

  function fadeSlide() {
    $("#visual .panel li").fadeOut(600);
    $("#visual .panel li").eq(i).fadeIn(600);
    $("#visual .navi li:nth-child(2) span:first").text(i + 1);
    $(".bar > div").animate({ width: ((i + 1) / total) * 100 + "%" }, 500);
  }

  function startSlide() {
    interval = setInterval(function () {
      i = (i + 1) % total;
      fadeSlide();
    }, 3000); // 3초마다 전환
  }

  startSlide();

  // 다음 버튼
  $("#visual .next a").click(function (e) {
    e.preventDefault();
    clearInterval(interval);
    i = (i + 1) % total;
    fadeSlide();
    startSlide();
  });

  // 이전 버튼
  $("#visual .prev a").click(function (e) {
    e.preventDefault();
    clearInterval(interval);
    i = (i - 1 + total) % total;
    fadeSlide();
    startSlide();
  });

  //  con03
  $(function () {
    const items = $(".con03 .accordion-item");

    items.click(function () {
      items.removeClass("active");

      // 2. 클릭된 아이템에만 'active' 클래스 추가
      $(this).addClass("active");
    });
    // ... (별도의 초기화 함수 없이 끝)
  });
  clearInterval(visual_interval);
  visual_i = (visual_i - 1 + visual_total) % visual_total;
  visual_fadeSlide();
  visual_startSlide();
});
