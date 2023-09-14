import { Link } from "react-router-dom";
import ImagemMain from "../../../assets/img/DesenvolvedorFrontend.svg"
import { StyleDivMainContainer, StyleMainContainer } from "./styleMain";
export const MainHomePage = () => {
  return (
    <StyleMainContainer>
      <StyleDivMainContainer>
        <h1>
          <small>Olá,</small> <br />Eu sou Geraldo Pereira, Desenvolvedor Front-End
        </h1>

        <h2>Seja bem-vindo ao meu portifólio website</h2>

        <Link to="/sobre">Saiba mais sobre mim</Link>
      </StyleDivMainContainer>
      <img src={ImagemMain} alt="Imagem animada Desenvolvedor Front End" />
    </StyleMainContainer>
  );
};
