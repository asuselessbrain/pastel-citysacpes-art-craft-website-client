import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

const CustomerReview = () => {


    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://backend-omega-snowy.vercel.app/customerReview')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);
    return (
        <div className="container mx-auto mt-20">
            <div >
                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <h3 className="mb-6 text-3xl font-bold">Customers Review</h3>
                    <p
                        className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
                        amet numquam iure provident voluptate esse quasi, veritatis totam
                        voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                </div>

            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper"
            >
                <div className="mb-12 md:mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {
                        reviews.map((review) => (
                            <SwiperSlide key={review._id}><div className="mb-6 bg-gray-200 p-6 rounded-lg">
                                <div className="rounded-full">
                                    <img
                                        src={review.customerImage}
                                        className="h-[100px] w-[100px] rounded-full shadow-lg dark:shadow-black/30" />
                                </div>
                                <h5 className="mb-4 text-xl font-semibold mt-2">{review.customerName}</h5>
                                <p className="mb-4 text-neutral-600 dark:text-neutral-300">
                                    <span className="inline-block pe-2 [&>svg]:w-5"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">
                                            <path
                                                d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                        </svg>
                                    </span>
                                    {review.comment}
                                </p>
                                <p><span className="font-bold">Rating:</span> {review.rating}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>


        </div >


    );
};

export default CustomerReview;