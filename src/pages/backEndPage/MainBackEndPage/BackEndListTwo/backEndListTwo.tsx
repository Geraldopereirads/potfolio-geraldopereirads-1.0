import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  BackEndListStyleLiTwo,
  BackEndListStyleDivTwo,
} from "./backEndListStyleTwo";

export const BackEndsListTwo = ({ backend }: any) => {
  return (
    <BackEndListStyleLiTwo>
      <Link target="_blank" title="projeto" to={backend.github}>
        <h2>{backend.title}</h2>
      </Link>

      <Link target="_blank" title="projeto" to={backend.github}>
        <img src={backend.img} alt="Projeto" />
      </Link>

      <BackEndListStyleDivTwo>
        <Link title="Github" target="_blank" to={backend.github}>
          <GrGithub size={35} />
        </Link>
      </BackEndListStyleDivTwo>
    </BackEndListStyleLiTwo>
  );
};
