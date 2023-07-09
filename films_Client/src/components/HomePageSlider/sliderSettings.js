import { SampleNextArrow } from 'components/SlidesArrow/index'

export const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1353,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };