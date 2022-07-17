$(document).ready(function () {
  $(window).scroll(function () {
    // если происходит скроллинг
    $(".slideanim").each(function () {
      // для каждого блока с классом slideanim
      let pos = $(this).offset().top; // считываем его координату по оси Y в окне браузера
      if (pos < $(window).scrollTop() + 400) {
        //если до верха страницы остается 400px,
        $(this).addClass("slide"); //добавляем к блоку класс slide с анимацией
      }
    });

    $(".mov_slideInRight").each(function () {
      // для каждого блока с классом mov_slideInRight
      pos = $(this).offset().top; // считываем его координату по оси Y в окне браузера
      if (pos < $(window).scrollTop() + 600) {
        //если до верха страницы остается 600px,
        $(this).addClass("animate__slideInRight"); // добавляем к блоку класс с анимацией slideInRight
      }
    });

    // Если проскроллировали больще,чем на 200px
    if ($(window).scrollTop() > 200) {
      $("#totop").css("opacity", "0.8"); // непрозрачность восстанавливается
      $(".navbar").css("opacity", "0.6");
      $(".logo").css("font-size", "0").css("transform", "translate(-100%,70%)");
      $(".logo-nav")
        .css("font-size", "30px")
        .css("transform", "translate(0%,0%)");
    } else {
      $("#totop").css("opacity", "0"); // элемент прозрачный
      $(".navbar").css("opacity", "1");
      $(".logo").css("font-size", "120px").css("transform", "translate(0%,0%)");
      $(".logo-nav")
        .css("font-size", "0")
        .css("transform", "translate(-100%,70%)");
    }

    /* Скроллировать фоновые слои с разной скоростью */
    $(".jumbotron").css(
      "background-position",
      "center " + -($(window).scrollTop() * 0.5 + 120) + "px"
    );
  });
});
