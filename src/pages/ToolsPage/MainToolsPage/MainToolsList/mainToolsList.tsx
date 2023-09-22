import { stackEmUso } from "@/utils/stackDataUso";
import { MainListTools } from "./MainListTools/mainListTools";
import {
  MainTitleListStyleOne,
  MainTitleListStyleTwo,
} from "./mainTitleListStyle";

export const MainTitleList = () => {
  return (
    <div>
      <MainTitleListStyleOne>
        <MainTitleListStyleTwo>
          <h2>Tecnologias</h2>
          <small>Atualmente Desenvolvendo</small>
        </MainTitleListStyleTwo>
        <MainTitleListStyleTwo>
          <h2>Tecnologias</h2>
          <small>Atualmente Estudando</small>
        </MainTitleListStyleTwo>
      </MainTitleListStyleOne>
      <div>
        <ul>
          {stackEmUso.map((tech, index) => (
            <MainListTools key={index} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};
