$('#Slider').slick({
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: `
    <button type="button" class="slider-prev"><i class="fa-solid fa-angle-left"></i></button>
  `,
  nextArrow: `
    <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
  `,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.product-slider').slick({
  dots: false,
  infinite: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: `
    <button type="button" class="slider-prev"><i class="fa-solid fa-angle-left"></i></button>
  `,
  nextArrow: `
    <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
  `,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
let topImage = $('.top-img');

function setSlickTopImage() {
  return topImage.slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

let sliderItems = $(".slider-item");

sliderItems.find("img").each((index, sliderItem) => {
  topImage.append(`<img src="${sliderItem.src}"/>`)
});

let detailSlider = setSlickTopImage();

$(".slider-item").click(function() {
  let sliderIndex = (sliderItems.index(this));
  detailSlider.slick('slickGoTo', sliderIndex);
})

$('.also-slider').slick({
  dots: false,
  infinite: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.category-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
