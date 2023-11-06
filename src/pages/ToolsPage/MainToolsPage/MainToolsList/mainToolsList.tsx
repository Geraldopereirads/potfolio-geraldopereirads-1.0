import { stackEmUso } from "@/utils/stackDataUso";
import { MainListToolsOne } from "./MainListTools/mainListToolsOne";
import { stackStudyng } from "@/utils/stackStudyingData";
import {
  StyleDivListMain,
  StyleDivListMainTittle1,
  StyleDivListMainTittle2,
} from "./mainToolsListStyle";

export const MainTitleList = () => {
  return (
    <>
      <StyleDivListMain>
        <div>
          <StyleDivListMainTittle1>
            <h2 title="JavaScript, TypeScript, ReactJS, CSS, HTML, SQl, Python, Django, NextJS, NestJS">
              Tecnologias
            </h2>
            <small>Atualmente Desenvolvendo</small>
          </StyleDivListMainTittle1>

          <ul>
            {stackEmUso.map((tech, index) => (
              <MainListToolsOne key={index} tech={tech} />
            ))}
          </ul>
        </div>

        <div>
          <StyleDivListMainTittle2>
            <h2>Tecnologias</h2>
            <small>Atualmente Estudando</small>
          </StyleDivListMainTittle2>

          <ul>
            {stackStudyng.map((tech, index) => (
              <MainListToolsOne key={index} tech={tech} />
            ))}
          </ul>
        </div>
      </StyleDivListMain>
    </>
  );
};
