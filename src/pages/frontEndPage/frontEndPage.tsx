import { Header } from "@/components/header/Header";
import { StyleDivBackGroundDark } from "@/styles/BackGroundDark";
import { StyledContainer } from "@/styles/grid";
import { Link } from "react-router-dom";
import {
  H1PortfolioPage,
  DivportfolioPageLinks,
} from "../PortifolioPage/styleH1PortfolioPage";
import { MainFrontEndPage } from "./MainFrontEndPage/mainFrontEndpage";

export const FrontEndPage = () => {
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

          <MainFrontEndPage />
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
