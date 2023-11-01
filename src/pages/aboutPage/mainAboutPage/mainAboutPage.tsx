import { StyleH1, StyleSpanH1One, StyleSpanH1Two } from "@/styles/h1StyleOne";
import { StyleDivMain, StyleSobreMain } from "./styleMainAboutPage";
import { ListMainAboutPageOne } from "./listMainAboutPageOne/listMainAboutPageOne";
import { ListMainAboutPageTwo } from "./listMainAboutPageOne/listMainAboutPageTwo";

export const MainAboutPage = () => {
  return (
    <StyleSobreMain>
      <StyleH1>
        <StyleSpanH1One>Geraldo</StyleSpanH1One>
        <StyleSpanH1Two>Pereira</StyleSpanH1Two>
      </StyleH1>
      <StyleDivMain>
        <p title="Desenvolvedor Front-End | Back-End | Full-Stack">
          Olá! Sou um desenvolvedor Full-stack com mais de um ano de experiência
          em desenvolvimento web. Durante minha jornada, concluí diversos
          projetos significativos que demonstram minhas habilidades e expertise
          na área. Um desses projetos é uma aplicação para uma hamburgueria
          fictícia, construída utilizando React. Essa aplicação se destaca por
          sua integração com uma API para obtenção de produtos, funcionalidades
          avançadas como adicionar produtos ao carrinho e exibição do valor
          total da compra. Além disso, a estilização é responsiva, seguindo as
          melhores práticas de mobile first. Outro projeto relevante é uma
          aplicação de listagem de tecnologias desenvolvida em React e
          TypeScript. Essa aplicação inclui recursos como cadastro e login de
          usuários, além da capacidade de cadastrar e remover tecnologias. Para
          garantir a qualidade e segurança, utilizei tecnologias como React Hook
          Form, Yup, React-Toastify e Context API, juntamente com Styled
          Components para a estilização responsiva.
        </p>
        <ListMainAboutPageOne />
        <img
          title="Desenvolvedor Front-End | Back-End | Full-Stack"
          src="https://github.com/Geraldopereirads.png"
          alt="Foto Geraldo Pereira"
        />
        <ListMainAboutPageTwo />

        <p title="Desenvolvedor Front-End | Back-End | Full-Stack">
          Além disso, desenvolvi uma API para uma locadora de filmes fictícios,
          utilizando tecnologias de ponta, como TypeScript, Zod, PostgreSQL,
          TypeORM, PG e PG-Format. Essa API permite realizar operações de CRUD
          completo de filmes, demonstrando minha competência na construção de
          sistemas robustos e escaláveis. Estou sempre em busca de novos
          desafios no desenvolvimento web e estou animado para continuar
          contribuindo com meu conhecimento e habilidades em projetos futuros.
          Se você busca um profissional com paixão pelo desenvolvimento web,
          estou à disposição para colaborar em sua próxima empreitada.
        </p>
      </StyleDivMain>
    </StyleSobreMain>
  );
};
