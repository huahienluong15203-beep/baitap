$(function () {
  $(".navbar-collapse a.nav-link, .navbar-collapse a.nav-cta").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
