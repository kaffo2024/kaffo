"use client";
import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Box, Container, IconButton } from "@mui/joy";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
function CategorySlider() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Container>
        <IconButton
          size="sm"
          color="primary"
          variant="plain"
          sx={{
            position: "absolute",
            textAlign: "center",
            top: "50%",
            right: "1%",
            zIndex: "1000",
            color: "primary.solidBg",
            display: { md: "flex", xs: "none" },
          }}
        >
          <BsArrowLeftCircleFill
            fontSize="1.7em"
            className="services-btn-next"
          />
        </IconButton>
        <SwiperComponent
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, EffectCreative]}
          navigation={{
            nextEl: ".services-btn-next",
            prevEl: ".services-btn-prev",
          }}
          slidesPerView={1}
          spaceBetween={0}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: false,

              translate: ["120%", 0, -500],
            },
          }}
        >
          <SwiperSlide>س</SwiperSlide>
          <SwiperSlide>س</SwiperSlide>
          <SwiperSlide>س</SwiperSlide>
        </SwiperComponent>
        <IconButton
          size="sm"
          color="primary"
          variant="plain"
          sx={{
            position: "absolute",
            textAlign: "center",
            top: "50%",
            left: "1%",
            zIndex: "1000",
            color: "primary.solidBg",
            display: { md: "flex", xs: "none" },
          }}
        >
          <BsArrowRightCircleFill
            fontSize="1.7em"
            className="services-btn-prev"
          />
        </IconButton>
      </Container>
    </Box>
  );
}

export default CategorySlider;
