import { StyleDivBackGroundDark } from "@/styles/BackGroundDark";
import { StyledContainer } from "@/styles/grid";
import { Header } from "../../components/Header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
import { MainPortfolioPage } from "./mainPortfolioPageSlider/mainPortfolioPage";
import { DivportfolioPageLinks, H1PortfolioPage } from "./styleH1PortfolioPage";
import { Link } from "react-router-dom";

register();

export const PortfolioPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundDark>
        <StyledContainer>
          <H1PortfolioPage>Portfólio</H1PortfolioPage>
          <DivportfolioPageLinks>
            <Link to="/backend">Back-End</Link>
            <Link to="/fullstack">Full-Stack</Link>
            <Link to="/frontend">Front-End</Link>
          </DivportfolioPageLinks>

          <MainPortfolioPage />
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
