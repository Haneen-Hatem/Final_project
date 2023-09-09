var mswiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

var swiper = new Swiper(".mySwiper-select", {
  slidesPerView: 4,
  spaceBetween: 50,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1314: {
      slidesPerView: 4,
      spaceBetween: 35,
    }
  },
});

var incrementPlus;
var incrementMinus;

var buttonPlus = $(".plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this)
    .parent(".button-container")
    .parent(".contain")
    .find(".qty");
  $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this)
    .parent(".button-container")
    .parent(".contain")
    .find(".qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 1);
  }
});

$(document).ready(function () {
  $('.nav-image').click(function () {
    $('.navbar-nav ').toggleClass('hide');
  })

  $('.close').click(function () {
    $('.modal').remove();
  })

  $('.close1').click(function () {
    $('.product1').remove();
  })

  $('.close2').click(function () {
    $('.product2').remove();
  })

  $('.passward').click(function () {
    $('.log_in').remove();
  })

  $('.sign_up').click(function () {
    $('.log_in').remove();
  })

  $(".image-type").click(function () {
    $(".options").hide('hide');
  });

  $(".image-type").click(function () {
    $(".options").show();
  });

  $(".image-price").click(function () {
    $(".form-price").hide('hide');
  });

  $(".image-price").click(function () {
    $(".form-price").show();
  });

  $(".image-collection").click(function () {
    $(".collection").hide('hide');
  });

  $(".image-collection").click(function () {
    $(".collection").show();
  });

  $(".image-size").click(function () {
    $(".size").hide('hide');
  });

  $(".image-size").click(function () {
    $(".size").show();
  });

  $(".image-color").click(function () {
    $(".color").hide('hide');
  });

  $(".image-color").click(function () {
    $(".color").show();
  });

})

let price1 = document.getElementById("price1").innerText;
let price2 = document.getElementById("price2").innerText;
var price = parseInt(price1) + parseInt(price2);
document.getElementById("price").innerText = price;