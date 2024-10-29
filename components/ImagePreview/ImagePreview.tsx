"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import Button from "../Button";

import { MutableRefObject, useRef } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ImagePreviewProps {
  src: Array<string>;
}

export default function ImagePreview({ src }: ImagePreviewProps) {
  const swiperRef: MutableRefObject<SwiperType | null> = useRef(null);
  const [preview, setPreview] = useState(src[0]);

  const handlePreviewChange = (image: string) => {
    setPreview(image);
    console.log(preview, image)
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <>
      <Image
        src={preview}
        alt="No Image available"
        width={1920}
        height={1080}
        className="w-full h-[38rem] object-cover aspect-video rounded-md"
      />

      <div className="flex">
        <Button
          icon="material-symbols:chevron-left"
          onClick={handlePrev}
          className="rounded-none rounded-s-md border-0"
          type="secondary"
        >
        </Button>

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
            },
          }}
          className="max-w-full h-56 flex-1"
        >
          {src.map((img) => (
            <SwiperSlide
              key={img}
              className="bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 h-full rounded"
              onClick={() => {handlePreviewChange(img)}}
            >
              <Image
                src={img}
                alt="Image failed to load"
                height={1080}
                width={1920}
                className={twMerge("max-w-full h-full max-h-full object-cover rounded-md hover:opacity-50 active:opacity-50 active:scale-95 transition-all duration-250 ease-in-out", preview === img ? "opacity-20" : '')}
              />

              <div className={twMerge("absolute z-10 top-0 left-0 w-full h-full place-items-center", preview === img ? "grid" : "hidden")}>
                <span className="font-bold text-2xl">Currently selected</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          icon="material-symbols:chevron-right"
          onClick={handleNext}
          className="rounded-none rounded-e-md border-0"
          type="secondary"
        >
        </Button>
      </div>
    </>
  );
}