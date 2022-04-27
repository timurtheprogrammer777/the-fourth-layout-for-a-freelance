$(function () {


    $('.team__inner-content').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    //   autoplay: true,
    //   autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        }
      },
      // {
      //   breakpoint: 940,
      //   settings: {
      //     slidesToShow: 2,
      //   }
      // },
      // {
      //   breakpoint: 680,
      //   settings: {
      //     slidesToShow: 1,
      //   }
      // },
    ]
      
  
    });

    $('.review__inner').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    });

    
//     $('.team__inner-content').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: true,
//       dots: true,
//       autoplay: true,
//       autoplaySpeed: 1500,
      
  
//     });

//     $('.clients__inner-content').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: true,
//       dots: true,
//       autoplay: true,
//       autoplaySpeed: 1500,
      
  
//     });


    $('.burger-btn').on('click', function(){
      $('.header__ul').slideToggle(); 
  });
  
  
  
  
  });