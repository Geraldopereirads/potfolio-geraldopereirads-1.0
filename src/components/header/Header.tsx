import { useState } from "react";
import { Link } from "react-router-dom";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { LiaFileCode } from "react-icons/lia";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import {
  StyleHeader,
  StyleButtonMenu,
  StyleNavHeader,
  StyleDivSociaisHeader,
} from "./styleHeader";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  return (
    <StyleHeader>
      <StyleButtonMenu>
        <HiMenuAlt2
          color="#DAD7D0"
          cursor="pointer"
          size={30}
          onClick={() => setMenuVisible(true)}
        />
      </StyleButtonMenu>

      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <StyleNavHeader>
        <Link title="Início" to="/">
          Início
        </Link>
        <Link title="Sobre" to="/sobre">
          Sobre
        </Link>
        <Link title="Portfólio" to="/portfolio">
          Portfólio
        </Link>
        <Link title="Ferramentas" to="/ferramentas">
          Ferramentas
        </Link>
        <Link title="Contato" to="/contato">
          Contato
        </Link>
      </StyleNavHeader>
      <StyleDivSociaisHeader>
        <Link
          className="icons-header"
          title="WhatsApp"
          target="_blank"
          to={"https://wa.me/5522997773136"}
        >
          <BsWhatsapp size={25} />
        </Link>
        <Link
          className="icons-header"
          title="Linkedin"
          target="_blank"
          to={"https://www.linkedin.com/in/geraldo-pereira/"}
        >
          <GrLinkedinOption size={25} />
        </Link>
        <Link
          className="icons-header"
          title="github"
          target="_blank"
          to={"https://github.com/Geraldopereirads"}
        >
          <GrGithub size={25} />
        </Link>

        <Link
          className="icons-header"
          title="Curriculo"
          target="_blank"
          to={
            "https://docs.google.com/document/d/1RuY9K2i9rQIZCorUadjX_VIELbHQhU19/edit?usp=sharing&ouid=110327685685232973062&rtpof=true&sd=true"
          }
        >
          <LiaFileCode size={30} />
        </Link>
      </StyleDivSociaisHeader>
    </StyleHeader>
  );
};
