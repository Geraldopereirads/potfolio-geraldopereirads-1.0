import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import {
  InputContactPageStyle,
  ListMainContactStyle,
} from "./formContactPageStyle";

export const FormContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || whatsapp === "") {
      toast.error("Preencha todos os campos");
    } else {
      const templateParams = {
        from_name: name,
        contato: whatsapp,
        message: message,
        email: email,
      };

      emailjs
        .send(
          "service_goyy0pn",
          "template_lfmi10o",
          templateParams,
          "bL3i2klCcpK676Raf"
        )
        .then(
          () => {
            toast.success("Menssagem enviada com sucesso");
            setName("");
            setEmail("");
            setMessage("");
            setWhatsapp("");
          },
          (err) => {
            toast.error("ERROR:", err);
          }
        );
    }
  };

  return (
    <ListMainContactStyle onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Digite seu WhatsApp"
        onChange={(e) => setWhatsapp(e.target.value)}
        value={whatsapp}
      />

      <input
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <textarea
        placeholder="Digite sua mensagem..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <InputContactPageStyle type="submit" value={"Enviar"} />
    </ListMainContactStyle>
  );
};
