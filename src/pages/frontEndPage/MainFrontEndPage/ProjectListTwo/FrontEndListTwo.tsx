import { GrGithub } from "react-icons/gr";
import { RxVercelLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  FrontEndListStyleLiTwo,
  FrontEndListStyleDivTwo,
} from "./FrontEndListStyleTwo";

export const FrontEndsListTwo = ({ FrontEnd }: any) => {
  return (
    <FrontEndListStyleLiTwo>
      <Link target="_blank" title="projeto" to={FrontEnd.urlVercel}>
        <h2>{FrontEnd.title}</h2>
      </Link>
      <Link target="_blank" title="projeto" to={FrontEnd.urlVercel}>
        <img src={FrontEnd.img} alt="Projeto" />
      </Link>
      <Link target="_blank" title="projeto" to={FrontEnd.urlVercel}></Link>
      <FrontEndListStyleDivTwo>
        <Link title="Vercel" target="_blank" to={FrontEnd.urlVercel}>
          <RxVercelLogo size={35} />
        </Link>
        <Link title="Github" target="_blank" to={FrontEnd.github}>
          <GrGithub size={35} />
        </Link>
      </FrontEndListStyleDivTwo>
    </FrontEndListStyleLiTwo>
  );
};
