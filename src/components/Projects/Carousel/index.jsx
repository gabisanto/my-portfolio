import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./Buttons";
import useEmblaCarousel from "embla-carousel-react";
import data from "../../../data/projects.json";
import styles from "./Carousel.module.css";
import Card from "./Card";

const ProjectsCarousel = () => {
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
    <div className={styles.emblaprojects}>
      <div className={styles.emblaprojects__viewport} ref={viewportRef}>
        <div className={styles.emblaprojects__container}>
          {data.map((item, index) => (
            <Card data={item} />
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default ProjectsCarousel;
