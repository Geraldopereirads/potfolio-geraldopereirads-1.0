import { projectsData } from "@/utils/projectsData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ProjectsList } from "./ProjectList/projectList";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import { useState } from "react";
import "../../PortifolioPage/mainPortfolioPageSlider/ProjectList/projectList.scss";

export const MainPortfolioPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          width: "800px",
          height: "600px",
          backgroundColor: "#CCCBC7",
          padding: "20px",
        }}
      >
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectsList project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectsList project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </main>
  );
};
