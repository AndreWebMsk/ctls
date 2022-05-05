
$(".how-to__form-input").click(function () {

    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500, function () {
        $header.text(function () {
            return $content.is(":visible") ? "Collapse" : "Expand";
        });
    });


$('.customers-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2200
  });
});

if (typeof foo !== 'undefined') {
    // Теперь мы знаем, что foo определено.
  }