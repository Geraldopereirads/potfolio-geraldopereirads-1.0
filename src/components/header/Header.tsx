import { useState } from "react";
import { Link } from "react-router-dom";
import { GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MenuMobile } from "../menuMobile/MenuMobile";
import {
  StyleButtonMenu,
  StyleDivSociaisHeader,
  StyleHeader,
  StyleNavHeader,
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
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/portfolio">Portfólio</Link>
        <Link to="/ferramentas">Ferramentas</Link>
        <Link to="/contato">Contato</Link>
      </StyleNavHeader>
      <StyleDivSociaisHeader>
        <Link
          target="_blank"
          title="WhatsApp"
          to={"https://wa.me/5522997773136"}
        >
          <BsWhatsapp size={25} />
        </Link>
        <Link
          title="Linkedin dev fullstack"
          target="_blank"
          to={"https://www.linkedin.com/in/geraldo-pereira/"}
        >
          <GrLinkedinOption size={25} />
        </Link>
        <Link
          title="github dev fullstack"
          target="_blank"
          to={"https://github.com/Geraldopereirads"}
        >
          <GrGithub size={25} />
        </Link>
        <Link
          title="instagram dev fullstack"
          target="_blank"
          to={"https://www.instagram.com/geraldopereiradsj/"}
        >
          <GrInstagram size={25} />
        </Link>

        <Link
          title="Curriculo dev fullstack"
          target="_blank"
          to={
            "https://docs.google.com/document/d/1RuY9K2i9rQIZCorUadjX_VIELbHQhU19/edit?usp=sharing&ouid=110327685685232973062&rtpof=true&sd=true"
          }
        >
          <MdOutlineMarkEmailRead size={30} />
        </Link>
      </StyleDivSociaisHeader>
    </StyleHeader>
  );
};
