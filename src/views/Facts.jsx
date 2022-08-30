import React, { useState } from 'react'
import './Facts.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Facts() {
  const facts = [
    { first: 'Was first released', second: 'in 2013' },
    { first: 'Was originally created by', second: 'Jordan Walke' },
    { first: 'Has well over 100K stars', second: 'on GitHub' },
    { first: 'Is maintained by', second: 'Facebook' },
    { first: 'Powers thousands of enterprise apps,', second: 'including mobile apps' }
  ]
  const [carousel, setCarousel] = useState({
    autoplay: true,
    current: 0,
  })

  return (
    <div className="carousel-wrapper">
      <Carousel
        renderIndicator={ false }
        showStatus={ false }
        showThumbs={ false }
        infiniteLoop={ true }
        autoPlay={ carousel.autoplay }
        selectedItem={ carousel.current }
        className="carousel-wrapper__carousel"
      >
        { facts.map((fact, index) =>
          <div key={`fact-${index}`}>
            <p>{ fact.first }<br /><strong>{ fact.second }</strong></p>
          </div>
        ) }
      </Carousel>
    </div>
  )
}
