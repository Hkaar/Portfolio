"use client";

import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Button from "../../Button";
import { MutableRefObject, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

interface ImageCarouselProps {
  src: Array<string>
}

export default function ImageCarousel({ src }: ImageCarouselProps) {
  const swiperRef: MutableRefObject<SwiperType | null> = useRef(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="flex">
      <Button icon="material-symbols:chevron-left" onClick={handlePrev} className="rounded-none rounded-s-md"></Button>

      <Swiper
        slidesPerView={src.length / 3 > 1 ? 3.2 : 1 }
        spaceBetween={8}
        navigation={false}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Navigation]}
        className="max-w-full h-40 flex-1"
      >
        {src.map((img) => (
          <SwiperSlide key={img} className="bg-primary h-40">
            <Image src={img} alt='Image failed to load' height={1080} width={1920} className='max-w-full max-h-full object-cover' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button icon="material-symbols:chevron-right" onClick={handleNext} className="rounded-none rounded-e-md"></Button>
    </div>
  );
}
