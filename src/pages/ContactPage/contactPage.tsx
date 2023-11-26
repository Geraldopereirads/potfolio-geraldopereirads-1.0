import { StyleDivBackGroundDark } from "@/styles/BackGroundDark";
import { Header } from "../../components/Header/Header";
import { StyledContainer } from "@/styles/grid";
import { MainContactPage } from "./MainContactPage/mainContactPage";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundDark>
        <StyledContainer>
          <MainContactPage />
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
