import { useState } from 'react'
import {PropTypes} from 'prop-types'
import ArrowLeft from '../../assets/arrowLeft.png'
import ArrowRight from '../../assets/arrowRight.png'
import '../carousel/Carousel.scss'

export default function Carousel({ imageSlider }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === imageSlider.length - 1) {
        setCurrentIndex(0);
      }
    };
  
    const prevSlide = () => {
      setCurrentIndex(currentIndex - 1);
      if (currentIndex === 0) {
        setCurrentIndex(imageSlider.length - 1);
      }
    };

    return(
    
            <section style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }} className='carousel'>
                {imageSlider.length > 1 &&
                    <>
                        <img
                            className='carousel-arrows arrow-right'
                            src={ArrowRight}
                            alt="show next slider"
                            onClick={nextSlide}
                        />
                        <img
                            className='carousel-arrows arrow-left'
                            src={ArrowLeft}
                            alt="show previous slider"
                            onClick={prevSlide}
                        />
                        <p className='slide-count'>{currentIndex + 1} / {imageSlider.length}</p>
                    </>
                }
            </section>
        ) 
      }
      
      Carousel.propTypes = {
        pictures: PropTypes.string,
        imageSlider: PropTypes.array,
        }
    
