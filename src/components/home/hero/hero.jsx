
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    EffectCreative, Autoplay
} from 'swiper';
import './hero.css'
SwiperCore.use([EffectCreative, Autoplay]);

export default function Hero() {

    return (
        <div className="back-grad">
            <div className='hero'>
                <Swiper grabCursor={true} loop={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} effect={'creative'} creativeEffect={{
                    "prev": {
                        "shadow": true,
                        "translate": [
                            0,
                            0,
                            -800
                        ],
                        "rotate": [
                            180,
                            0,
                            0
                        ]
                    },
                    "next": {
                        "shadow": true,
                        "translate": [
                            0,
                            0,
                            -800
                        ],
                        "rotate": [
                            -180,
                            0,
                            0
                        ]
                    }
                }} className="mySwiper">
                    <SwiperSlide>
                        <div className='d-flex'>
                            <div className='slider-img'>
                                <img src="images/yoga4.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex'>
                            <div className='slider-img'>
                                <img src="images/yoga.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex'>
                            <div className='slider-img'>
                                <img src="images/yoga3.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

    )
}
