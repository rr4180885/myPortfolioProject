"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderBtnProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles?: string; // Optional prop for icon styles
}

const WorkSliderBtn: React.FC<WorkSliderBtnProps> = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  console.log("current swiper instance:", swiper);

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}

export default WorkSliderBtn;
