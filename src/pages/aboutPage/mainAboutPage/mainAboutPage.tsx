import { DivListMainAboutPage } from "./divListMainAboutPage/divListMainAboutPage";
import { SpanAboutPageTittle1, SpanAboutPageTittle2, StyleDivListMainAboutPage } from "./divListMainAboutPage/styleDivListMainAboutPage";

export const MainAboutPage = () => {
  return (
    <StyleDivListMainAboutPage>
      <h1>
        <SpanAboutPageTittle1>Geraldo</SpanAboutPageTittle1><SpanAboutPageTittle2>Pereira</SpanAboutPageTittle2>
      </h1>
      <p>
        Olá! Sou técnico em mecânica industrial em transição de carreira para me
        tornar um desenvolvedor full-stack. Atualmente, sou formado em frontend
        pela Kenzie Academy Brasil e estou dedicando meus estudos para me tornar
        um desenvolvedor backend/full-stack. Tenho oito projetos frontend
        concluídos, nos quais utilizei tecnologias como HTML, CSS, JavaScript,
        TypeScript e outras.
      </p>
      <DivListMainAboutPage />
      <p>
        Além disso, também desenvolvi cinco projetos backend, utilizando SQL
        como linguagem e PostgreSQL como ferramenta. No momento, estou
        aprofundando meus conhecimentos em Python e estou aberto a oportunidades
        no mercado de trabalho, com o objetivo de me tornar um desenvolvedor
        full-stack.
      </p>
    </StyleDivListMainAboutPage>
  );
};
