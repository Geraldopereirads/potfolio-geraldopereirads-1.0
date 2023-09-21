import { Header } from "../../components/header/Header";
import { StyleDivBackGroundDark } from "../../styles/BackGroundDark";
import { StyledContainer } from "../../styles/grid";
import { MainHomePage } from "./MainHomePage/mainHomePage";

export const HomePage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundDark>
        <StyledContainer>
          <MainHomePage />
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
