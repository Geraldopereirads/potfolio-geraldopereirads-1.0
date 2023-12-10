import { StyleDivBackGroundDark } from "@/styles/BackGroundDark";
import { Header } from "../../components/Header/Header";
import { StyledContainer } from "@/styles/grid";
import { MainContactsPage } from "./MainContactPage/mainContactsPage";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundDark>
        <StyledContainer>
          <MainContactsPage />
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
