import { ProjectsListOne } from "@/pages/PortfolioPage/mainPortfolioPageSlider/ProjectListOne/projectListOne";
import { ProjectsListTwo } from "@/pages/PortfolioPage/mainPortfolioPageSlider/ProjectListTwo/projectListTwo";
import { frontEndData } from "@/utils/frontEndData";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MainFrontEndPageStyleUlOne,
  MainFrontEndPageStyleUlTwo,
} from "./mainFrontEndPageStyle";

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
          <Swiper loop={true} slidesPerView={slidePerView} navigation>
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
