import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { ListMainContactStyle } from "./listMainContactPageStyle";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";

export const ListMainContactPage = () => {
  return (
    <>
      <ListMainContactStyle>
        <li>E-mail</li>
        <li>
          <Link target="_blank" to={"mailto:geraldo.pereirads@hotmail.com"}>
            <MdOutlineAttachEmail size={50} />
          </Link>
        </li>
        <li>geraldo.pereirads@hotmail.com</li>
        <br />

        <li>Telefone</li>
        <li>
          <Link target="_blank" to={"https://wa.me/5522997773136"}>
            <BsWhatsapp size={50} />
          </Link>
        </li>
        <li>22 9 9777 - 3136</li>
        <br />

        <li>LinkedIn</li>
        <li>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/geraldo-pereira/"}
          >
            <GrLinkedinOption size={50} />
          </Link>
        </li>
        <li>/geraldo-pereira</li>
        <br />

        <li>GitHub</li>
        <li>
          {" "}
          <Link target="_blank" to={"https://github.com/Geraldopereirads"}>
            <GrGithub size={50} />
          </Link>
        </li>
        <li>/Geraldopereirads</li>
      </ListMainContactStyle>
    </>
  );
};
