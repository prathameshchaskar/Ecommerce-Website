import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    350: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };
  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data?.slice(0, 12).map((item) => (
    <div className="">
      {" "}
      <HomeSectionCard product={item} sectionName={sectionName} />
    </div>
  ));

  return (
    <div className="relative border">
      <h2 className="text-2xl font-bold text-gray-700 p-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          ref={carouselRef}
          onSlideChanged={syncActiveIndex}
        />
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            aria-label="prev"
            sx={{
              color: "black",
              position: "absolute",
              top: "8rem",
              backgroundColor: "white",
              left: "0rem",
              "&:hover": {
                backgroundColor: "lightgray",
              },
              transform: "translateX(-50%) rotate(90deg)",
            }}
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}

        {activeIndex < items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            aria-label="next"
            sx={{
              color: "black",
              position: "absolute",
              top: "8rem",
              backgroundColor: "white",
              right: "0rem",
              "&:hover": {
                backgroundColor: "lightgray",
              },
              transform: "translateX(50%) rotate(90deg)",
            }}
          >
            <KeyboardArrowRightIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
