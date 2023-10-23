import { TImageCarrousel } from '../types/components'

export const cards = [
  {
    text: 'Image of a refreshing Gin Tonic with ice, lemon wedge and a sprig of mint',
    image: '/img/img1.jpg',
  },
  {
    text: 'Image of Travelers who enjoy modern luxury tourism are changing their preferences about what constitutes a perfect vacation experience.',
    image: '/img/img2.jpg',
  },
  {
    text: 'Image of a bar where your senses delight with the best cocktails',
    image: '/img/img3.jpg',
  },
  {
    text: 'Person Preparing Rum Drink',
    image: '/img/img4.jpg',
  },
  {
    title: '',
    text: 'It is increasingly popular to drink the classic gin and tonic at meetings or in vintage bars.',
    image: '/img/img5.jpg',
  },
  {
    text: 'Image of a delicious Spritz, a refreshing drink with white wine, soda, orange slice and ice',
    image: '/img/img6.jpg',
  },
  {
    text: 'Image of a Salty Dog, a cocktail with vodka, grapefruit juice and salt rim',
    image: '/img/img7.jpg',
  },
  {
    text: 'grapefruit juice',
    image: '/img/img8.jpg',
  },
] as TImageCarrousel[]

export const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
