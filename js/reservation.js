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

  // con03
  document.querySelectorAll("#con03 .room-card-wrapper").forEach((card) => {
    const img = card.querySelector(".room-image img");
    const viewMore = card.querySelector(".view-more");

    card.addEventListener("mouseenter", () => {
      gsap.to(img, {
        scale: 1.1,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(viewMore, {
        x: 10,
        color: "#85bfc1",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(viewMore, {
        x: 0,
        color: "#999",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
});
