import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EventDetails from "../subComponents/EventDetails";
import { useSelector } from "react-redux";

function Events() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let events = useSelector((state) => state.eventDetails);
  return (
    <div className="flex flex-col items-center justify-center text-center  pt-32 dark:bg-[radial-gradient(circle_at_center,#fff_1%,#ffedde_20%,#ffd4b3_50%)]">
      <h1 className="text-5xl font-black mb-8 text-textColor1 ">
        UPCOMING EVENTS
      </h1>
      <Slider
        {...settings}
        className="flex items-center justify-center w-[90%] px-0"
      >
        {events.map((el) => (
          <div className="w-full flex flex-wrap-reverse items-start justify-evenly">
            <EventDetails eventInfo={el} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Events;
