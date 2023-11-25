import { ProjectsListOne } from "@/pages/PortifolioPage/mainPortfolioPageSlider/ProjectListOne/projectListOne";
import { ProjectsListTwo } from "@/pages/PortifolioPage/mainPortfolioPageSlider/ProjectListTwo/projectListTwo";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MainFrontEndPageStyleUlOne,
  MainFrontEndPageStyleUlTwo,
} from "./mainFrontEndPageStyle";
import { frontEndData } from "@/utils/projectsData";

export const MainFrontEndPage = () => {
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
        <MainFrontEndPageStyleUlOne>
          <Swiper
            loop={true}
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
          >
            {frontEndData.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectsListOne project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MainFrontEndPageStyleUlOne>
      ) : (
        <MainFrontEndPageStyleUlTwo>
          {frontEndData.map((project, index) => (
            <ProjectsListTwo key={index} project={project} />
          ))}
        </MainFrontEndPageStyleUlTwo>
      )}
    </main>
  );
};
