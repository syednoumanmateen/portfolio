import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { memo } from 'react';

const SwiperComponent = ({ children, slidesPerView }) => {
    return (
        <Swiper className='mb-3'
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
            {children}
        </Swiper>
    );
};

export default memo(SwiperComponent);
