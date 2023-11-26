import { GrGithub } from "react-icons/gr";
import { RxVercelLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  FrontendListStyleLiOne,
  FrontendListStyleDivOne,
} from "./FrontEndListStyleOne";

export const frontendsListOne = ({ frontend }: any) => {
  return (
    <FrontendListStyleLiOne>
      <Link target="_blank" title="projeto" to={frontend.urlVercel}>
        <img src={frontend.img} alt="Projeto" />
      </Link>
      <FrontendListStyleDivOne>
        <Link title="Vercel" target="_blank" to={frontend.urlVercel}>
          <RxVercelLogo size={35} />
        </Link>
        <Link title="Github" target="_blank" to={frontend.github}>
          <GrGithub size={35} />
        </Link>
      </FrontendListStyleDivOne>
    </FrontendListStyleLiOne>
  );
};
