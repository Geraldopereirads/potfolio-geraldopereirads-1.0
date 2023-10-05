import { StyleDivBackGroundDark } from "@/styles/BackGroundDark";
import { StyledContainer } from "@/styles/grid";
import { Header } from "../../components/header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
import { MainPortfolioPage } from "./mainPortfolioPageSlider/mainPortfolioPage";
import { H1PortfolioPage } from "./styleH1PortfolioPage";

register();

export const PortifolioPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundDark>
        <StyledContainer>
          <H1PortfolioPage>Portfólio</H1PortfolioPage>
          <MainPortfolioPage />
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
