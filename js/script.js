$(document).ready(function () {
  // Инициализация slick-slider для всех слайдеров
  function initializeSlickSlider(sliderElement) {
    sliderElement.slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      appendDots: sliderElement.closest(".slider-wrap").find(".custom-dots"),
      prevArrow: sliderElement.closest(".slider-wrap").find(".custom-prev"),
      nextArrow: sliderElement.closest(".slider-wrap").find(".custom-next"),
      customPaging: function (slider, i) {
        return "<button>" + ("0" + (i + 1)).slice(-2) + "</button>";
      },
      responsive: [
        {
          breakpoint: 1401,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1101,
          settings: {
            slidesToShow: 3,
            variableWidth: true,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
          },
        },
      ],
    });
  }

  // Инициализация слайдера в первой вкладке
  initializeSlickSlider($("#tab-1 .slider"));

  // Переключение вкладок
  $(".tabs .tab").on("click", function () {
    const tabId = $(this).data("tab");

    // Активируем выбранную вкладку
    $(".tabs .tab").removeClass("active");
    $(this).addClass("active");

    // Показываем контент выбранной вкладки
    $(".tab-content").removeClass("active");
    $("#tab-" + tabId).addClass("active");

    // Проверяем, инициализирован ли слайдер, и если нет — инициализируем его
    const sliderElement = $("#tab-" + tabId + " .slider");
    if (!sliderElement.hasClass("slick-initialized")) {
      initializeSlickSlider(sliderElement);
    } else {
      // Перезапуск слайдера, если он уже инициализирован
      sliderElement.slick("setPosition");
    }
  });

  // Активируем первую вкладку по умолчанию
  $(".tabs .tab:first").click();

  $(".info-buttons button").on("click", function () {
    $(this).toggleClass("active");
  });

  // Дополнительная логика для линии прогресса
  $(".info-slider").on("afterChange", function (event, slick, currentSlide) {
    var totalSlides = slick.slideCount;
    var progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
    $(".info-slider-wrap .custom-pagination-info::after").css(
      "width",
      progressPercentage + "%"
    );
  });

  function initSlickSlider() {
    if ($(window).width() < 1025) {
      // Условие для мобильных устройств
      if (!$(".info-slider").hasClass("slick-initialized")) {
        // Проверка, не инициализирован ли уже слайдер
        $(".info-slider").slick({
          dots: true,
          slidesToShow: 2,
          slideToScroll: 1,
          appendDots: $(".custom-pagination-info .custom-dots"),
          prevArrow: $(".custom-pagination-info .custom-prev"),
          nextArrow: $(".custom-pagination-info .custom-next"),
          customPaging: function (slider, i) {
            return "<button>" + ("0" + (i + 1)).slice(-2) + "</button>";
          },
          responsive: [
            {
              breakpoint: 681,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    } else {
      if ($(".info-slider").hasClass("slick-initialized")) {
        $(".info-slider").slick("unslick"); // Отключаем слайдер на десктопах
      }
    }
  }

  // Инициализация при загрузке страницы
  initSlickSlider();

  // Повторная проверка при изменении размера окна
  $(window).resize(function () {
    initSlickSlider();
  });

  // Дополнительная логика для линии прогресса
  $(".slider-nav").on("afterChange", function (event, slick, currentSlide2) {
    var totalSlides2 = slick.slideCount;
    var progressPercentage2 = ((currentSlide2 + 1) / totalSlides2) * 100;
    $(".custom-pagination-review::after").css(
      "width",
      progressPercentage2 + "%"
    );
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    asNavFor: ".slider-for",
    focusOnSelect: true,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    slidesToShow: 5,
    slideToScroll: 1,
    appendDots: $(".custom-pagination-review .custom-dots"),
    prevArrow: $(".custom-pagination-review .custom-prev"),
    nextArrow: $(".custom-pagination-review .custom-next"),
    customPaging: function (slider, i) {
      return "<button>" + ("0" + (i + 1)).slice(-2) + "</button>";
    },
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".brands-slider").slick({
    dots: true,
    slidesToShow: 4,
    slideToScroll: 1,
    prevArrow: $(".brands-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".brands-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1,
          arrows: true,
          variableWidth: true,
          infinite: false,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          adaptiveHeight: true,
        },
      },
    ],
  });

  $(".news-info-slider").slick({
    dots: true,
    slidesToShow: 1,
    slideToScroll: 1,
    appendDots: $(".custom-pagination-news-info .custom-dots"),
    prevArrow: $(".custom-pagination-news-info .custom-prev"),
    nextArrow: $(".custom-pagination-news-info .custom-next"),
    customPaging: function (slider, i) {
      return "<button>" + ("0" + (i + 1)).slice(-2) + "</button>";
    },
  });

  $(".news-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slideToScroll: 1,
    prevArrow: $(".news-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".news-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  // Дополнительная логика для линии прогресса
  $(".slider-nav-banner").on(
    "afterChange",
    function (event, slick, currentSlide4) {
      var totalSlides4 = slick.slideCount;
      var progressPercentage4 = ((currentSlide4 + 1) / totalSlides4) * 100;
      $(".home-banner .custom-pagination-banner::after").css(
        "width",
        progressPercentage4 + "%"
      );
    }
  );

  $(".slider-nav-banner").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {
      $(".progress-bar").addClass("animated");
    }
  );

  $(".slider-for-banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav-banner",
  });
  $(".slider-nav-banner").slick({
    asNavFor: ".slider-for-banner",
    focusOnSelect: true,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    slidesToShow: 3,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: $(".home-banner .custom-pagination-banner .custom-dots"),
    prevArrow: $(".home-banner .custom-pagination-banner .custom-prev"),
    nextArrow: $(".home-banner .custom-pagination-banner .custom-next"),
    customPaging: function (slider, i) {
      return "<button>" + ("0" + (i + 1)).slice(-2) + "</button>";
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".lang-btns button").on("click", function () {
    $(".lang-btns button").removeClass("active");
    $(this).addClass("active");
  });

  $(".lang-btns .en").on("click", function () {
    $(".lang .line").addClass("en");
    $(".lang .line").removeClass("ru");
  });

  $(".lang-btns .ru").on("click", function () {
    $(".lang .line").addClass("ru");
    $(".lang .line").removeClass("en");
  });

  $(".slider-nav-banner").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      const active = nextSlide + 1;

      $(".active-res-left").text(`0${active - 1}`);
      $(".active-res-right").text(`0${active + 1}`);

      $(".progress-bar").removeClass("animated");

      $(".pagination-numbers li")
        .removeClass("active")
        .eq(nextSlide)
        .addClass("active");
    }
  );

  $(".slider-nav-banner").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".progress-bar").addClass("animated");
    }
  );

  $(".icon-click").on("click", function (e) {
    e.stopPropagation();
    $(".search-form").addClass("show");
  });

  $(document).on("click", function () {
    $(".search-form").removeClass("show");
  });

  // $(".search-form").on("click", function () {
  //   $(".search-form").removeClass("show");
  // });

  $(".search-form").on("click", function (e) {
    e.stopPropagation();
  });
});
