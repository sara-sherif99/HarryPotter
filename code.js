$("header .nav-link").click(function () {
  $("header .active").toggleClass("active");
  $(this).toggleClass("active");
});

$(".schools .nav-link").click(function (e) {
  $(".schools .active").toggleClass("active");
  $(".schools .show").toggleClass("show");
  var id = "#" + $(this).text();
  $(".schools " + id).toggleClass("active");
  $(".schools " + id).toggleClass("show");
  $(this).toggleClass("active");
});

$("#portfolio-flters li").click(function (e) {
  $("#portfolio-flters li.filter-active").toggleClass("filter-active");
  $(this).toggleClass("filter-active");
  var cat = $(this).text();
  $(".portfolio img").parent().hide();
  if (cat == "All") {
    $(".portfolio img").parent().show();
  }
  else {
    $(".portfolio ." + cat).parent().show();
  }

});

$(function () {
  $('.portfolio img').on('click', function () {
    $('.imagepreview').attr('src', $(this).attr('src'));
    $('#imagemodal').modal('show');
  });
});

$(".client-area .carousel-container").slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
});

$('.characters  .slider').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  dots: true,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
});

window.onscroll = function () {
  scrollFunction();
};
$(window).on('load', function(){
  scrollFunction();
});
function scrollFunction() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    $(".back-to-top").addClass("active");
    $("header").css('box-shadow', '0px 0 5px rgb(1 41 112 / 10%)');

  } else {
    $(".back-to-top").removeClass("active");
    $("header").css('box-shadow', 'none');
    $(".bottomf col-lg").addClass("aos-animate");
  }

  var scrollPos = $(document).scrollTop();
  if (scrollPos === 0) {
    $("header .nav-link.active").removeClass("active");
    $('a[href^="#home"]').addClass('active');
  }
  $('header .nav-link').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position()) {
      if (refElement.position().top - 130 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('header .nav-link.active').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    }

  });
}

