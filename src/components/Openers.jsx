import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Openers = () => {
    return (
        <div className='openers'>
            <div className="title">
                <h2>НАШИ ОТКРЫТКИ</h2>
                </div>
              <div className="swip">
              <div className="container ">
                    <div className="row justify-content-center ">
                    <div className="col-10">

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            // breakpoints={{
                            //     640: {
                            //       slidesPerView: 2,
                            //       spaceBetween: 20,
                            //     },
                            //     768: {
                            //       slidesPerView: 4,
                            //       spaceBetween: 40,
                            //     },
                            //     1024: {
                            //       slidesPerView: 5,
                            //       spaceBetween: 50,
                            //     },
                            //   }}
                            modules={[Navigation]}
                            navigation={true}
                            className="openers-slider">
                            <div className="row">
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className='w-100' src="./img/opener-card.png" alt="" />
                                            <p className="price">20 000 сум</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className='w-100' src="./img/opener-card.png" alt="" />
                                            <p className="price">20 000 сум</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className='w-100' src="./img/opener-card.png" alt="" />
                                            <p className="price">20 000 сум</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className='w-100' src="./img/opener-card.png" alt="" />
                                            <p className="price">20 000 сум</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className='w-100' src="./img/opener-card.png" alt="" />
                                            <p className="price">20 000 сум</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className='w-100' src="./img/opener-card.png" alt="" />
                                            <p className="price">20 000 сум</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </div>
                        </Swiper>
                </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Openers