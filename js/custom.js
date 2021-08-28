
$(function(){

// Top To Botom Button


/// Bottom-Top-btn

$('.top-bottom').click(function(){

  $('body,html').animate({scrollTop:0},1000);

});

//Add New Navbar

$(window).scroll(function(){

      var scroll =$(this).scrollTop();
      if(scroll>200){
          $('.navbar').addClass('new-nav');
      }else{
          $('.navbar').removeClass('new-nav');
      };
      if(scroll>200){
          $('.top-bottom').fadeIn(500);
      }else{
          $('.top-bottom').fadeOut(500);
      };
  });


// Prouduct Slider 

$('.prouduct-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed:800,
    arrows:true,
    speed:800,
    dots:false,
    prevArrow:'.pArrow',
    nextArrow:'.nArrow',
    
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3
        }
      },
     
    ]

  });

// Testomonial Slider 

$('.iteam-main-testo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed:800,
    arrows:true,
    speed:800,
    dots:false,
    prevArrow:'.cArrow',
    nextArrow:'.cArrow2',

  });

  //Smoth Scroll 

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-40
        }, 1000);
        return false;
      }
    }
  });

})