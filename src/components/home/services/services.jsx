import { Container } from 'react-bootstrap'
import './services.css'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay
} from 'swiper';
SwiperCore.use([Autoplay]);

export default function Services() {
    const images = [
        { image: 'images/services/1.jpg', title: "سباحة" },
        { image: 'images/services/2.jpg', title: "ايروبيك" },
        { image: 'images/services/3.jpg', title: "زومبا" },
        { image: 'images/services/4.jpg', title: "هييت" },
        { image: 'images/services/5.jpg', title: "آلات" },
        { image: 'images/services/6.jpg', title: "بوكس" },
        { image: 'images/services/7.jpg', title: "رقص شرقي" },
    ];
    return (
        <Container className="services">
            <h1>
                خدماتنا
            </h1>
            <div>
                <Swiper breakpoints={{
                    "430": {
                        "slidesPerView": 1,
                        "spaceBetween": 30
                    },
                    "970": {
                        "slidesPerView": 2,
                        "spaceBetween": 30
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 30
                    }
                }} centeredSlides={true} loop={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} className="mySwiper">
                    {images.map(i => (
                        <SwiperSlide key={i.image}>
                            <div className='img-cont'>
                                <h1>{i.title}</h1>
                                <img src={i.image} alt={i.image} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    )
}
