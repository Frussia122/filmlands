import { SampleNextArrow } from 'components/SlidesArrow/index';

export const settings = (scroll, show) => (
  {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: show,
    slidesToScroll: scroll,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1353,
        settings: {
          dots: false,
          slidesToShow: show-2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 539,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  }
);