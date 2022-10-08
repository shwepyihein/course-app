import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation } from "swiper"

export default function FeatureSlider() {
  const [cardList, setCardList] = useState([
    {
      title: "Dr. Perry Williams Joins UNR as Assistant Professor",
      excerpt:
        "Dr. Perry Williams recently joined the faculty in the Department of Natural Resources and Environmental Science at the University of Nevada, Reno, and was kind enough to provide his biography to help us get to know him. Welcome to Nevada, Dr. Williams!",
      date: "2021-12-01",
      author: "Perry Williams",
      img: "https://source.unsplash.com/l3Jdvs1Qui4/800x600",
    },
    {
      title: "Good News for a Change: Secretarial Order 3362",
      excerpt:
        "in Feburary 2019, the U.S. Secretary of the Interior signed Secretarial Order 3362, a framework designed to improve habitat quality and protect crucial migration corridors for several species of wildlife including pronghorn, elk, and mule deer.",
      date: "2021-12-01",
      author: "Cody Schroeder",
      img: "https://source.unsplash.com/dG_p9P6aroQ/800x600",
    },
    {
      title: "Pygmy Rabbits, an Understudied Icon of the West",
      excerpt:
        "Pygmy rabbits are the world’s smallest, and undoubtedly the cutest, leporid, and one of only two North American rabbits to dig their own burrows.",
      date: "2021-12-01",
      author: "Miranda Crowell",
      img: "https://source.unsplash.com/mstHiGp2U6A/800x600",
    },
    {
      title: "A Wonderful Life: Career Retrospective",
      excerpt:
        "I can’t imagine a better way to have spent my professional life than as a professor of Wildlife Ecology. Kurt Pregitzer, our Chair for several years before 2010 used to say that being a professor was the best job in the world; he was right.",
      date: "2021-12-01",
      author: "Jim Sedinger",
      img: "https://source.unsplash.com/3NI9aJGOl-4/800x600",
    },
  ])
  return (
    <>
      <div className="pt-6 pb-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Lasted Updated
          </h3>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {cardList.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                className="w-full shadow-xl bg-white border py-2 rounded-lg "
              >
                <div
                  v-for="card in cards"
                  className="flex flex-col  md:flex-row overflow-hidden
                                         w-100 "
                >
                  <div className="h-64 w-auto md:w-1/2">
                    <img
                      className="inset-0 h-full w-full rounded object-cover object-center"
                      src={item.img}
                    />
                  </div>

                  <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h3 className="font-semibold text-lg leading-tight truncate">
                      {item.title}
                    </h3>
                    <p className="mt-2">{item.excerpt}</p>
                    <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                      {item.author} &bull; {item.date}
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
