import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const ScrollComponent = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-[100%] bg-gray-200"
      >
        {data.map((image) => (
          <SwiperSlide
            key={image.id}
            itemID={image.id}
            className="w-[1200px] overflow-hidden snap-x"
          >
            <Image
              placeholder="blur"
              blurDataURL={image.url}
              src={image.url}
              width={1200}
              height={400}
              alt="property"
              sizes="(max-width:500px) 100px,(max-width:1023px) 400px, 1000px,100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ScrollComponent;
