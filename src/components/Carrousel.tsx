import React from 'react'
import { IconButton, useBreakpointValue, Box } from '@chakra-ui/react'

import Slider from 'react-slick'
import { cards, settings } from '../utils/carousel'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

export default function Carousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null)

  const top = useBreakpointValue({ base: '50%' })
  const side = useBreakpointValue({ base: '3rem' })

  return (
    <Box
      position={'relative'}
      h={{ base: 'xs', md: 'md' }}
      w={{ base: 'xs', md: '3xl', lg: '4xl' }}
      overflow={'hidden'}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            w={'full'}
            height={{ base: '300px', sm: '450px', md: '600px' }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <img
              src={card.image}
              alt={card.text}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
