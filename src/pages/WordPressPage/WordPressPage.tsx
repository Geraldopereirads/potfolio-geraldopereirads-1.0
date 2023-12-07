import { Header } from "@/components/Header/Header";
import { StyleDivBackGroundDark } from "@/styles/BackGroundDark";
import { StyledContainer } from "@/styles/grid";
import { Link } from "react-router-dom";
import {
  H1PortfolioPage,
  DivportfolioPageLinks,
} from "../PortfolioPage/styleH1PortfolioPage";

export const MainWordPressPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundDark>
        <StyledContainer>
          <Link to="/portfolio">
            <H1PortfolioPage>Portfólio</H1PortfolioPage>
          </Link>
          <DivportfolioPageLinks>
            <Link to="/backend">Back-End</Link>
            {/* <Link to="/fullstack">Full-Stack</Link> */}
            <Link to="/frontend">Front-End</Link>
            {/* <Link to="/wordpress">WordPress</Link> */}
          </DivportfolioPageLinks>
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
