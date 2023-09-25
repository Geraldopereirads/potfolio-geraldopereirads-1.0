import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StyleProjectsList, StyleProjectsListDiv } from "./projectsListStyle";

export const ProjectsList = ({ project }: any) => {
  return (
    <StyleProjectsList>
      <h2>{project.title}</h2>
      <Link target="_blank" title="projeto" to={project.urlVercel}>
        <img src={project.img} alt="Projeto" />
      </Link>
      <StyleProjectsListDiv>
        <Link target="_blank" title="projeto" to={project.urlVercel}>
          <AiOutlineLink size={25} />
        </Link>
        <Link target="_blank" title="Github" to={project.github}>
          <GrGithub size={25} />
        </Link>
        <Link target="_blank" title="linkedin" to={project.linkeDin}>
          <GrLinkedinOption size={25} />
        </Link>
      </StyleProjectsListDiv>
    </StyleProjectsList>
  );
};
