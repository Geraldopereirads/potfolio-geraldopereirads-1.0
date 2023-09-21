import { Header } from "../../components/header/Header";
import { StyledContainer } from "@/styles/grid";
import { MainToolsPage } from "./MainToolsPage/mainToolsPage";
import { StyleDivBackGroundLight } from "@/styles/BackGroundLight";

export const ToolsPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundLight>
        <StyledContainer>
          <MainToolsPage />
        </StyledContainer>
      </StyleDivBackGroundLight>
    </>
  );
};
