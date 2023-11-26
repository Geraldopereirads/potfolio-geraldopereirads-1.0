import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  BackEndListStyleLiOne,
  BackEndListStyleDivOne,
} from "./backEndListStyleOne";

export const BackEndsListOne = ({ backend }: any) => {
  return (
    <BackEndListStyleLiOne>
      <Link target="_blank" title="projeto" to={backend.github}>
        <img src={backend.img} alt="Projeto" />
      </Link>
      <BackEndListStyleDivOne>
        <Link title="Github" target="_blank" to={backend.github}>
          <GrGithub size={35} />
        </Link>
      </BackEndListStyleDivOne>
    </BackEndListStyleLiOne>
  );
};
