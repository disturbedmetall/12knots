;
(function() {

  feather.replace()

  $('.popular_slider').slick({
    slidesToShow: 4,
    arrows: true,
    autoplay: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews_slider').slick({
    centerMode: true,
    slidesToShow: 4,
    arrows: true,
    autoplay: true,
    responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

  var kLang = document.getElementById("k-lang");
  kLang.addEventListener("click", toggleIcon, false);

  function toggleIcon() {
    if (this.classList.contains('flag--russia')) {
      this.classList.remove("flag--russia");
      this.classList.add("flag--usa");
    } else if (this.classList.contains('flag--usa')) {
      this.classList.remove("flag--usa");
      this.classList.add("flag--russia");
    } else {
      console.log("Error in lang switcher");
    }
  }

  //
  // var ourOfficeIcon = L.icon({
  //   iconUrl: '../images/location.svg',
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  //   popupAnchor: [0, -40]
  // });
  //
  // var ourOffice = L.marker([55.7646756, 37.5951047], {
  //   icon: ourOfficeIcon
  // });
  //
  // var map = L.map('map', {
  //   center: [55.7646756, 37.5951047],
  //   zoom: 15,
  //   layers: [ourOffice]
  // });
  //
  // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  //   maxZoom: 18
  // }).addTo(map);

})();
