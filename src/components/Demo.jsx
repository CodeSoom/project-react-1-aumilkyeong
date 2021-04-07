import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

export default function Demo({ source }) {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination
    >
      {source
        .map((url) => (
          <SwiperSlide key={url}>
            <iframe
              title={`demo-${url}`}
              src={url}
              frameBorder="0"
              allowFullScreen
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
