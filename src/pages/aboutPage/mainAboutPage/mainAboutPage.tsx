import { StyleH1, StyleSpanH1One, StyleSpanH1Two } from "@/styles/h1Style";
import { DivListMainAboutPage } from "./divListMainAboutPage/divListMainAboutPage";

export const MainAboutPage = () => {
  return (
    <main>
      <StyleH1>
        <StyleSpanH1One>Geraldo</StyleSpanH1One><StyleSpanH1Two>Pereira</StyleSpanH1Two>
      </StyleH1>
      <p>
      Olá! Sou técnico em mecânica industrial em transição de carreira para me tornar um Desenvolvedor Fullstack, e com isso desenvolvi vários projetos:</p>
      <DivListMainAboutPage />
      <p>
      uma plataforma de jogos, gestão educacional, site hambúrgueres, adquiri também habilidades como trabalho em equipe, criação de sites totalmente responsivo, consumação e criação de API's,  leitura e utilização de documentação,  bibliotecas e utilizar tecnologias como HTML, CSS, JavaScript, TypeScript, ReactJS e outras. Estou aberto a novos desafios</p>
    </main>
  );
};
