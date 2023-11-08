import { MdOutlineAttachEmail, MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import { ListMainContactStyle } from "./listMainContactPageStyle";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";

export const ListMainContactPage = () => {
  return (
    <>
      <ListMainContactStyle>
        <li>
          <Link target="_blank" to={"mailto:geraldo.pereirads@hotmail.com"}>
            <h2>E-mail</h2>
          </Link>
          <Link target="_blank" to={"mailto:geraldo.pereirads@hotmail.com"}>
            <MdOutlineAttachEmail size={35} />
          </Link>
          <Link target="_blank" to={"mailto:geraldo.pereirads@hotmail.com"}>
            <span>geraldo.pereirads@hotmail.com</span>
          </Link>
        </li>

        <li>
          <Link target="_blank" to={"https://wa.me/5522997773136"}>
            <h2>Telefone</h2>
          </Link>
          <Link target="_blank" to={"https://wa.me/5522997773136"}>
            <BsWhatsapp size={35} />
          </Link>
          <Link target="_blank" to={"https://wa.me/5522997773136"}>
            <span>22 9 9777 - 3136</span>
          </Link>
        </li>

        <li>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/geraldo-pereira/"}
          >
            <h2>LinkedIn</h2>
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/geraldo-pereira/"}
          >
            <GrLinkedinOption size={35} />
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/geraldo-pereira/"}
          >
            <span>/geraldo-pereira</span>
          </Link>
        </li>

        <li>
          <Link target="_blank" to={"https://github.com/Geraldopereirads"}>
            <h2>GitHub</h2>
          </Link>
          <Link target="_blank" to={"https://github.com/Geraldopereirads"}>
            <GrGithub size={35} />
          </Link>
          <Link target="_blank" to={"https://github.com/Geraldopereirads"}>
            <span>/Geraldopereirads</span>
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            to={
              "https://docs.google.com/document/d/1RuY9K2i9rQIZCorUadjX_VIELbHQhU19/edit"
            }
          >
            <h2>Currículo</h2>
          </Link>
          <Link
            target="_blank"
            to={
              "https://docs.google.com/document/d/1RuY9K2i9rQIZCorUadjX_VIELbHQhU19/edit"
            }
          >
            <MdOutlineMarkEmailRead size={35} />
          </Link>
        </li>
      </ListMainContactStyle>
    </>
  );
};
