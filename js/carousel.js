$(document).ready(function () {
  const $slider = $('.product_ugc-container');
  if (!$slider.length || $slider.hasClass('slick-initialized')) return;

  $slider.slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    accessibility: false,
  });

  $('.product_carousel-prev').on('click', () => $slider.slick('slickPrev'));
  $('.product_carousel-next').on('click', () => $slider.slick('slickNext'));
});
