'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";

const listForDesktop = [
  {
    src: "/img/banner1.jpg",
    alt: "Banner 1",
  },
  {
    src: "/img/banner2.jpg",
    alt: "Banner 2",
  },
  {
    src: "/img/imgSliderHome1.jpg",
    alt: "Banner 2",
  },
  {
    src: "/img/imgSliderHome2.jpg",
    alt: "Banner 2",
  }
];

const listForMobile = [
  {
    src: "/img/banner1_800.jpg",
    alt: "Banner 1",
  },
  {
    src: "/img/banner2_800.jpg",
    alt: "Banner 2",
  },
]

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: `slick-dots ${styles.dots}`
};

export default function SlickCarrousel() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(()=> {
    if (window.outerWidth >= 990) {
      setIsMobile(false);
    }
    if (window.outerWidth <= 990) {
      setIsMobile(true);
    }
  }, []);
  
  const renderImgList = (isMobile: boolean) => {
    if(isMobile) {
      return (
        listForMobile.map((image, index) => (
          <div className={styles.SliderItem} key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
            />
          </div>
        ))
      )
    }

    return (
      listForDesktop.map((image, index) => (
        <div className={styles.SliderItem} key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
          />
        </div>
      ))
    )
  }

  return (
    <div className={styles.SliderContainer}>
      <Slider {...settings} >
        {renderImgList(isMobile)}
      </Slider>
    </div>
  );
}