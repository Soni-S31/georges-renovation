import React from 'react'
import { useState, useEffect } from 'react'
import './carousel_reno.css'

const Carousel_reno = (props) => {
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
    <div className="carousel_reno-wrapper">
      <button onClick={prev} className="left-arrow">
        &lt;
      </button>
      <div className="carousel_reno-content-wrapper">
        <div
          className="carousel_reno-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <button onClick={next} className="right-arrow">
        &gt;
      </button>
    </div>
  )
}

export default Carousel_reno
