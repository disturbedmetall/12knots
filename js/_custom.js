;
jQuery(document).ready(function($) {
  feather.replace()

  $('.reviews_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 552,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  var ourOfficeIcon = L.icon({
    iconUrl: '../images/location.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  var ourOffice = L.marker([55.7646756, 37.5951047], {icon: ourOfficeIcon});

  var map = L.map('map', {
    center: [55.7646756, 37.5951047],
    zoom: 15,
      layers: [ourOffice]
  });

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  }).addTo(map);

})(jQuery);
