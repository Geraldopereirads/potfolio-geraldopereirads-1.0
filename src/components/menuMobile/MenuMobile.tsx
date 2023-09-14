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
    document.body.style.overflowY = menuVisible ? 'hidden' : 'auto';
  }, [menuVisible])

  return (
    <>
      <ContainerMenuMobile menuVisible={menuVisible}>
        
        <IoClose color="#DAD7D0" cursor="pointer" size={30} onClick={() => setMenuVisible(false)}/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/portifolio">Portifólio</Link>
          <Link to="/ferramentas">Ferramentas</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </ContainerMenuMobile>
    </>
  );
};
