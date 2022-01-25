import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectCards, Navigation
} from 'swiper';
import './ads.css'
SwiperCore.use([EffectCards, Navigation]);

export default function Ads() {
    const images = [
        'images/ads/1.jpg',
        'images/ads/2.jpg',
        'images/ads/3.jpg',
        'images/ads/4.jpg',
        'images/ads/5.jpg',
        'images/ads/6.jpg',
        'images/ads/16.jpg',
        'images/ads/17.jpg',
        'images/ads/18.jpg',
        'images/ads/19.jpg',
        'images/ads/7.jpg',
        'images/ads/8.jpg',
        'images/ads/9.jpg',
        'images/ads/10.jpg',
        'images/ads/11.jpg',
        'images/ads/12.jpg',
        'images/ads/13.jpg',
        'images/ads/14.jpg',
        'images/ads/15.jpg',
    ]
    return (
        <Container className='ads'>
            <Swiper effect={'cards'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">
                {
                    images.map(i => (
                        <SwiperSlide className="swiperSlide" key={i}>
                            <div>
                                <img src={i} alt={i} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    )
}
