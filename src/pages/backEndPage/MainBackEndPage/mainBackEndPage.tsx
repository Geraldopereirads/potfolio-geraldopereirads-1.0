import { backEndData } from "@/utils/backEndData";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackEndsListOne } from "./BackEndListOne/backEndListOne";
import {
  MainBackEndPageStyleUlOne,
  MainBackEndPageStyleUlTwo,
} from "./mainBackEndPageStyle";
import { BackEndsListTwo } from "./BackEndListTwo/backEndListTwo";

export const MainBackEndPage = () => {
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
        <MainBackEndPageStyleUlOne>
          <Swiper loop={true} slidesPerView={slidePerView} navigation>
            {backEndData.map((backend, index) => (
              <SwiperSlide key={index}>
                <BackEndsListOne backend={backend} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MainBackEndPageStyleUlOne>
      ) : (
        <MainBackEndPageStyleUlTwo>
          {backEndData.map((backend, index) => (
            <BackEndsListTwo key={index} backend={backend} />
          ))}
        </MainBackEndPageStyleUlTwo>
      )}
    </main>
  );
};
