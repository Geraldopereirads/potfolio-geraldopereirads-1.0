import { Header } from "../../components/header/Header";
import { StyleDivBackGroundLight } from "../../styles/BackGroundLight";
import { MainAboutPage } from "./mainAboutPage/mainAboutPage";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundLight>
      <MainAboutPage/>
      </StyleDivBackGroundLight>
    </>
  );
};
