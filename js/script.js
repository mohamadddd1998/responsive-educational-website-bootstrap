$(document).ready(function () {
  $(window).scroll(function () {
    if (window.scrollY > 300) {
      $(".top-header-largeScreen .menu").slideUp();
    } else {
      $(".top-header-largeScreen .menu").slideDown();
    }
  });
  $(".top-header-largeScreen .course").hover(
    function () {
      $(".top-header-largeScreen .course .subCourse").slideDown().css({
        display: "flex",
      });
    },
    function () {
      $(".top-header-largeScreen .course .subCourse").slideUp();
    }
  );
});
