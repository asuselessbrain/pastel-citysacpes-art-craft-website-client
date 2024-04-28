// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'
import { Typewriter } from 'react-simple-typewriter'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slider slider1'>
                        <h1 className='text-white font-semibold text-5xl'>
                            Color Your World, {' '}
                            <span style={{ color: 'red' }} className='font-extrabold text-6xl'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Explore Gallery!']}
                                    loop={1000}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider slider2'>
                        <h1 className='text-white font-semibold text-5xl'>
                            Canvas to Creativity, {' '}
                            <span style={{ color: 'red' }} className='font-extrabold text-6xl'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Find Inspiration!']}
                                    loop={1000}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider slider3'>
                        <h1 className='text-white font-semibold text-5xl'>
                            Unleash Your Artistic Potential, {' '}
                            <span style={{ color: 'red' }} className='font-extrabold text-6xl'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Here Where to Start!']}
                                    loop={1000}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider slider4'>
                        <h1 className='text-white font-semibold text-5xl'>
                            Stroke by Stroke, {' '}
                            <span style={{ color: 'red' }} className='font-extrabold text-6xl'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Artistic Haven!']}
                                    loop={1000}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider slider5'>
                        <h1 className='text-white font-semibold text-5xl'>
                            Color Your Imagination, {' '}
                            <span style={{ color: 'red' }} className='font-extrabold text-6xl'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Start Today!']}
                                    loop={1000}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;