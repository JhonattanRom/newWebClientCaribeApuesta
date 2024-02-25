"use client"
import Slider from "react-slick";
import FeaturedGame from "../FeaturedGame";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `slick-dots ${styles.dots}`,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
};

export default function FeaturedGames() {
    return (
        <div className={styles.featuredGames}>
            <Slider {...settings}>
                <FeaturedGame />
                <FeaturedGame />
                <FeaturedGame />
                <FeaturedGame />
                <FeaturedGame />
                <FeaturedGame />
            </Slider>
        </div>
    );
}