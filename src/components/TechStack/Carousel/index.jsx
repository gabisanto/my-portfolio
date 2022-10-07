import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./Buttons";
import useEmblaCarousel from "embla-carousel-react";
import data from "../../../data/technologies.json";
import styles from "./Carousel.module.css";

const TechCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={styles.emblatech}>
      <div className={styles.emblatech__viewport} ref={viewportRef}>
        <div className={styles.emblatech__container}>
          {data.map((item, index) => (
            <div className={styles.emblatech__slide} key={index}>
              <div className={styles.emblatech__slide__inner}>
                <img
                  className={styles.emblatech__slide__img}
                  src={item.url}
                  alt={item.name}
                />
              </div>
              <p className={styles.techname}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default TechCarousel;
