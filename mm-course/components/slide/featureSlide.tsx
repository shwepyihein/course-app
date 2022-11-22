import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation } from "swiper"
import moment from "moment"
import { createMarkup, IMAGE_PATH } from "../../utils"
import { useRouter } from "next/router"

interface FeatureSliderProps {
  list: any
}

export default function FeatureSlider({ list }: FeatureSliderProps) {
  const router = useRouter()
  // const route = (item: any) => {}
  return (
    <>
      <div className="pt-6 pb-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="">
          <h3 className="text-xl mb-3 font-bold leading-6 text-gray-900">
            Lasted Updated
          </h3>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {list?.map((item: any, i: any) => {
            return (
              <SwiperSlide
                key={i}
                onClick={() => {
                  router.push(`/course/${item.slug}+${item.id}`)
                }}
                className="w-full cursor-pointer shadow-xl bg-white border py-2 px-2 rounded-lg "
              >
                <div
                  v-for="card in cards"
                  className="flex flex-col  md:flex-row overflow-hidden
                                         w-100 "
                >
                  <div className="h-64 w-auto md:w-1/2">
                    <img
                      className="inset-0 h-full w-full rounded object-cover object-center"
                      src={`${IMAGE_PATH}${item.preivew_image}`}
                    />
                  </div>

                  <div className="w-full py-4 px-6 text-gray-800">
                    <h3 className="font-semibold text-lg leading-tight truncate">
                      {item.name}
                    </h3>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={createMarkup(
                        router.locale === "mm"
                          ? item.description_mm.slice(0, 120)
                          : item.description.slice(0, 120)
                      )}
                    />
                    <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                      {item.author} &bull;
                      {moment(item?.publishedAt).format("MM/DD/YYYY")}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}
