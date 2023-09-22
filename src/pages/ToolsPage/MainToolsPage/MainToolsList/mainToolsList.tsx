import { stackEmUso } from "@/utils/stackDataUso";
import { MainListToolsOne } from "./MainListTools/mainListToolsOne";
import { MainTitleListStyleOne, StyleListMain } from "./mainTitleListStyle";
import { stackStudyng } from "@/utils/stackStudyingData";

export const MainTitleList = () => {
  return (
    <div>
      <MainTitleListStyleOne>
        <div>
          <h2>Tecnologias</h2>
          <small>Atualmente Desenvolvendo</small>
        </div>
        <div>
          <h2>Tecnologias</h2>
          <small>Atualmente Estudando</small>
        </div>
      </MainTitleListStyleOne>
      <StyleListMain>
        <ul>
          {stackEmUso.map((tech, index) => (
            <MainListToolsOne key={index} tech={tech} />
          ))}
        </ul>
        <ul>
          {stackStudyng.map((tech, index) => (
            <MainListToolsOne key={index} tech={tech} />
          ))}
        </ul>
      </StyleListMain>
    </div>
  );
};
