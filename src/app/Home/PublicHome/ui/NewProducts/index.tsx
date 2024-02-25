import React from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import Image from "next/image";
import ProductsSlider from "./ProductsSlider";


export default function NewProducts() {

    return (
        <section className={styles.container}>
            <article className={styles.headerNewProductsContainer} lang="es">
                <h2>NUEVOS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam facere obcaecati accusamus itaque adipisci illum nihil quibusdam sed repellat molestias recusandae vel officiis dignissimos sunt inventore
                    porro pariatur, ratione at?</p>
            </article>
            <section className={styles.SliderContainer}>
                <ProductsSlider />
            </section>
        </section>
    );
}
