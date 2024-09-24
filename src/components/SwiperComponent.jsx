import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

const SwiperComponent = ({ children }) => {
    const isMobile = window.innerWidth < 768;

    return (
        <Swiper className='mb-3'
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={isMobile ? 1 : 3}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
            {children}
        </Swiper>
    );
};

export default SwiperComponent;
