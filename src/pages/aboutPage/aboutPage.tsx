import { StyleDivBackGroundLight } from "@/styles/BackGroundLight";
import { Header } from "../../components/Header/Header";
import { MainAboutPage } from "./mainAboutPage/mainAboutPage";
import { StyledContainer } from "@/styles/grid";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundLight>
        <StyledContainer>
          <MainAboutPage />
        </StyledContainer>
      </StyleDivBackGroundLight>
    </>
  );
};
