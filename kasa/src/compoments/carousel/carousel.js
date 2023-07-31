import { useState } from 'react'
import {PropTypes} from 'prop-types'
import ArrowLeft from '../../assets/ArrowLeft.png'
import ArrowRight from '../../assetsArrowRight.png'

export default function Carousel({imageSlider}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex === imageSlider.lenght - 1)
        setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0)
        setCurrentIndex(imageSlider.lenght - 1)
    }
    return(
        
    )
}