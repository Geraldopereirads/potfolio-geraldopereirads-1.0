import { StyleH1, StyleSpanH1One, StyleSpanH1Two } from "@/styles/h1Style";
import { StyleSobreMain } from "./styleMainAboutPage";
import { ListMainAboutPageOne } from "./listMainAboutPageOne/listMainAboutPageOne";
import { ListMainAboutPageTwo } from "./listMainAboutPageOne/listMainAboutPageTwo";

export const MainAboutPage = () => {
  return (
    <StyleSobreMain>
      <StyleH1>
        <StyleSpanH1One>Geraldo</StyleSpanH1One>
        <StyleSpanH1Two>Pereira</StyleSpanH1Two>
      </StyleH1>

      <p>
        Olá! Sou técnico em mecânica industrial em transição de carreira para me
        tornar um Desenvolvedor Fullstack, e com isso desenvolvi vários
        projetos: um e-commerce de jogos, gestão educacional, site hambúrgueres
        e muitos outros,
      </p>
      <ListMainAboutPageOne />
      <img
        src="https://github.com/Geraldopereirads.png"
        alt="Foto Geraldo Pereira"
      />
      <ListMainAboutPageTwo />

      <p>
        adquiri também habilidades como trabalho em equipe, criação de sites
        totalmente responsivo, consumir e criar API's, leitura e utilização de
        documentação, bibliotecas e utilizar tecnologias como HTML, CSS,
        JavaScript, TypeScript, ReactJS e outras. Estou aberto a novos desafios
        para Desenvolvimento Web.
      </p>
    </StyleSobreMain>
  );
};
