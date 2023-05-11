import React from 'react'
import { useState, useEffect } from 'react'
import './carousel.css'


const Carousel = (props) => {
  const { children } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)
  

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (length > 0) {
      if (currentIndex === length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }
  }
  const prev = () => {
    if (length > 0) {
      if (currentIndex === 0) {
        setCurrentIndex(length - 1)
      } else {
        setCurrentIndex(currentIndex - 1)
      }
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
      </div>
    </div>
  )
}

export default Carousel
