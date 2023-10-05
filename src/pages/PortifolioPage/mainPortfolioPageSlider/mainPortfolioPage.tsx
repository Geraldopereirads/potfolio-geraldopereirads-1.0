import { projectsData } from "@/utils/projectsData";
import { ProjectsList } from "./ProjectList/projectList";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { MainPortfolioPageStyleUl } from "./mainPortfolioPageStyle";

export const MainPortfolioPage = () => {
  const [slidePerView, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <MainPortfolioPageStyleUl>
        <Swiper
          loop={true}
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectsList project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </MainPortfolioPageStyleUl>
    </main>
  );
};
