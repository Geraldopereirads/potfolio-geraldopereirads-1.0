import { StyleH1, StyleSpanH1One, StyleSpanH1Two } from "@/styles/h1StyleOne";
import { MainToolsList } from "./MainToolsList/mainToolsList";

export const MainToolsPage = () => {
  return (
    <main>
      <StyleH1>
        <StyleSpanH1One>Minhas</StyleSpanH1One>
        <StyleSpanH1Two>Techs</StyleSpanH1Two>
      </StyleH1>
      <MainToolsList />
    </main>
  );
};
