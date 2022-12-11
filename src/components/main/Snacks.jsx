import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import SnacksCard from "./SnacksCard";
import { SearchContext } from "../Main"

function Snacks() {
  const { item } = React.useContext(SearchContext);

  return (
    <>
      <section className="snacks meat">
        <div className="container">
          <div className="snacks-name">
            <span className="snacks-name_rectangle"></span>
            <h2>Меню</h2>
          </div>
        </div>
        <div id="snacks" className="swiper mySwiper block-swiper">
          <Swiper
            slidesPerView={1.25}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              350: {
                slidesPerView: 1.4,
              },
              500: {
                slidesPerView: 1.5,
              },
              625: {
                slidesPerView: 1.9,
              },
              808: {
                slidesPerView: 2.5,
              },
              1200: {
                slidesPerView: 3.5,
              },
            }}
          >
            {item.map((obj) => (
              <SwiperSlide key={obj.id}>
                <SnacksCard {...obj} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
    </>
  );
}

export default Snacks;
