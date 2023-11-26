import { ProjectsListOne } from "./ProjectListOne/projectListOne";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import {
  MainPortfolioPageStyleUlOne,
  MainPortfolioPageStyleUlTwo,
} from "./mainPortfolioPageStyle";
import { ProjectsListTwo } from "./ProjectListTwo/projectListTwo";
import { projectsData } from "@/utils/projectsData";

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
      {window.innerWidth < 700 ? (
        <MainPortfolioPageStyleUlOne>
          <Swiper
            loop={true}
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectsListOne project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MainPortfolioPageStyleUlOne>
      ) : (
        <MainPortfolioPageStyleUlTwo>
          {projectsData.map((project, index) => (
            <ProjectsListTwo key={index} project={project} />
          ))}
        </MainPortfolioPageStyleUlTwo>
      )}
    </main>
  );
};
