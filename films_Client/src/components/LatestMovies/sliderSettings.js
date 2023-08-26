import { SampleNextArrow } from 'components/SlidesArrow/index'

export const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1353,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };