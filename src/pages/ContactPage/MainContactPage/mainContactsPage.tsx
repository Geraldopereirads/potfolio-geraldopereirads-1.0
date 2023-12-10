import { FormContactPage } from "@/components/Form/formContactPage";
import {
  DivMainContactPageIconsStyle,
  DivMainContactPageStyle,
  MainContactPageStyle,
} from "./mainContactPageStyle";
import { StyleH1Two } from "@/styles/h1StyleTwo";
import { BsWhatsapp } from "react-icons/bs";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";

export const MainContactsPage = () => {
  return (
    <MainContactPageStyle>
      <StyleH1Two>Contato</StyleH1Two>
      <p>
        Desperte sua próxima ideia incrível e transforme projetos em realidade!
        Contrate meus serviços{" "}
      </p>
      <FormContactPage />
      <DivMainContactPageStyle>
        <DivMainContactPageIconsStyle>
          <Link target="_blank" to={"https://wa.me/5522997773136"}>
            <BsWhatsapp size={25} />
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/geraldo-pereira/"}
          >
            <GrLinkedinOption size={25} />
          </Link>
          <Link target="_blank" to={"https://github.com/Geraldopereirads"}>
            <GrGithub size={25} />
          </Link>
        </DivMainContactPageIconsStyle>

        <p>
          “Aprender é a unica coisa que a mente não se cansa, nunca tem medo e
          nunca se arrepende”
        </p>
        <span>~Leonardo da Vinci</span>
      </DivMainContactPageStyle>
    </MainContactPageStyle>
  );
};
