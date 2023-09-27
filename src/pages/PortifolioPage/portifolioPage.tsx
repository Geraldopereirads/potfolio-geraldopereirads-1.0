import { StyleDivBackGroundDark } from "@/styles/BackGroundDark";
import { Header } from "../../components/header/Header";
import { StyledContainer } from "@/styles/grid";
import { StyleH1Two } from "@/styles/h1StyleTwo";
import { MainPortfolioPage } from "./mainPortfolioPageSlider/MainPortfolioPage";

export const PortifolioPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundDark>
        <StyledContainer>
          <StyleH1Two>Portfólio</StyleH1Two>
          <MainPortfolioPage />
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
