import {useState } from 'react';
import SliderStyle from './Slider.module.css';
import {appStrings} from '../../content/strings.tsx';
import review from '../../fake_data/Review.tsx';


const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const isLastSlide = currentIndex === review.length - 1;

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex < review.length - 1 ? prevIndex + 1 : prevIndex);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    };

    return <>
        <div className = {SliderStyle.container}>
            <img src={appStrings.dec2} className={SliderStyle.twoPoints}/>
            <div className = {SliderStyle.wrapper}>
            <div className = {SliderStyle.content}>
            <img src={appStrings.dec1} className={SliderStyle.threePoints}/>
            <div id={SliderStyle.servicesTitle}>
            <div className = {SliderStyle.title}>{appStrings.Review}</div>
                <div className = {SliderStyle.divider}>
                    <div className={`${SliderStyle.line} ${SliderStyle.light}`}></div>
                </div>
                <div className = {SliderStyle.reviewBlock}>
                    <div className={SliderStyle.imageUser}>
                        <img className={SliderStyle.img} src={review[currentIndex].image}></img>
                    </div>
                    <div className={SliderStyle.userInfo}> 
                        <div className={SliderStyle.name}>{review[currentIndex].name}</div>
                        <div className={SliderStyle.role}>{review[currentIndex].description}</div>
                    </div>
                    <div className={SliderStyle.review}>{review[currentIndex].review}</div>
                </div>
            </div>
            <div className={SliderStyle.controls}>
                <img src="/src/assets/images/slider/arrow_left.png" onClick={handlePrev} className={`${SliderStyle.arrow} ${currentIndex === 0 ? SliderStyle.disabled : ''}`}/>
                <div className={SliderStyle.dots}>
                {review.map((_, index) => (
                    <div key={index} className={`${SliderStyle.dot} ${index === currentIndex ? SliderStyle.active : ''}`}></div>
                ))}
                </div>
                <img src="/src/assets/images/slider/arrow_right.png" onClick={handleNext} className={`${SliderStyle.arrow} ${isLastSlide ? SliderStyle.disabled : ''}`}/>
            </div>
            </div>
        </div>
        </div>
    </>
}

export default Slider;
