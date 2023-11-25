import { Header } from "../../components/header/Header";
import { StyleDivBackGroundDark } from "../../styles/BackGroundDark";
import { StyledContainer } from "../../styles/grid";
import { MainHomePage } from "./mainHomePage/mainHomePage";

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
