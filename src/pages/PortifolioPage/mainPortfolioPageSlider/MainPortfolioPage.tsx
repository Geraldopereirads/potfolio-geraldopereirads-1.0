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
import { ProjectListDown } from "./ProjectList/projectListDown";

export const MainPortfolioPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "30px",
      }}
    >
      <ul
        style={{
          width: "800px",
          height: "528px",
          backgroundColor: "#1B1B1B",
          padding: "20px",
          marginTop: "50px",
          borderRadius: "10px",
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
              <ProjectListDown project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </main>
  );
};
