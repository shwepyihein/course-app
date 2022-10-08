import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation } from "swiper"
import BookCard from "../cards/bookcard"

interface BookCardSlideProps {
  cardCount: number
  title?: string
  book: any
  seeAll: () => void
}
export default function BookCardSlide({
  cardCount,
  title,
  book,
  seeAll,
}: BookCardSlideProps) {
  return (
    <div className="mx-auto max-w-7xl py-10 px-2 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {title}
        </h2>
        <p
          className="text-sky-800 text-lg cursor-pointer"
          onClick={() => {
            seeAll()
          }}
        >
          see all
        </p>
      </div>
      <div className="pt-6 pb-12 mx-auto max-w-7xl">
        <Swiper
          slidesPerView={cardCount}
          spaceBetween={5}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper  bg-white py-2"
        >
          {book.map((item: any, i: number) => {
            return (
              <SwiperSlide key={i}>
                <BookCard key={i} post={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
