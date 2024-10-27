"use client";

import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from 'next/image';
import Button from "../../Button";
import { MutableRefObject, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { twMerge } from 'tailwind-merge';

interface ImageCarouselProps extends React.HTMLAttributes<HTMLElement> {
  src: Array<string>
}

export default function ImageCarousel({ src, ...props }: ImageCarouselProps) {
  const swiperRef: MutableRefObject<SwiperType | null> = useRef(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className={twMerge("flex", props.className)}>
      <Button icon="material-symbols:chevron-left" onClick={handlePrev} className="rounded-none rounded-s-md" type="secondary"></Button>

      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        navigation={false}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: src.length / 3 > 1 ? 2.2 : 1,
          },
          1024: {
            slidesPerView: src.length / 3 > 1 ? 3.2 : 1,
          }
        }}
        className="max-w-full h-40 flex-1"
      >
        {src.map((img) => (
          <SwiperSlide key={img} className="bg-neutral-300 dark:bg-neutral-700 h-40 rounded-md">
            <Image src={img} alt='Image failed to load' height={1080} width={1920} className='max-w-full h-full max-h-full object-cover rounded-md' />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Button icon="material-symbols:chevron-right" onClick={handleNext} className="rounded-none rounded-e-md" type="secondary"></Button>
    </div>
  );
}
