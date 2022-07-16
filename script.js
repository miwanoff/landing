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

    // Если проскроллировали больще,чем на 200px
    if ($(window).scrollTop() > 200) {
      $("#totop").css("opacity", "0.8"); // непрозрачность восстанавливается
    } else {
      $("#totop").css("opacity", "0"); // элемент прозрачный
    }

    /* Скроллировать фоновые слои с разной скоростью */
    $(".jumbotron").css(
      "background-position",
      "center " + -($(window).scrollTop() * 0.5 + 120) + "px"
    );
  });
});
