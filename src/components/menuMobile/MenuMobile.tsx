import { IoClose } from "react-icons/io5";
import { ContainerMenuMobile } from "./styleMenuMobile";
import { Link } from "react-router-dom";
import { IMenuMobile } from "./@types";
import { useEffect } from "react";

export const MenuMobile: React.FC<IMenuMobile> = ({
  menuVisible,
  setMenuVisible,
}) => {
  useEffect(() => {
    document.body.style.overflowY = menuVisible ? "hidden" : "auto";
  }, [menuVisible]);

  return (
    <>
      <ContainerMenuMobile menuVisible={menuVisible}>
        <IoClose
          color="#DAD7D0"
          cursor="pointer"
          size={30}
          onClick={() => setMenuVisible(false)}
        />
        <nav>
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
        </nav>
      </ContainerMenuMobile>
    </>
  );
};
