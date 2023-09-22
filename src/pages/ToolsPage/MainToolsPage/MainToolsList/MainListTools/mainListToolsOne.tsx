import { MainListStyle } from "./mainListToolsStyle";

export const MainListToolsOne = ({ tech }: any) => {
  return (
    <MainListStyle>
      <img src={tech.title} alt="Ferramentas" />
    </MainListStyle>
  );
};
