import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StyleProjectsList, StyleProjectsListDiv } from "./projectsListStyle";

export const ProjectsList = ({ project }: any) => {
  return (
    <StyleProjectsList>
      <h2>{project.title}</h2>
      <img src={project.img} alt="Projects" />
      <StyleProjectsListDiv>
        <Link target="_blank" to={project.urlVercel}>
          <AiOutlineLink size={25} />
        </Link>
        <Link target="_blank" to={project.github}>
          <GrGithub size={25} />
        </Link>
        <Link target="_blank" to={project.linkeDin}>
          <GrLinkedinOption size={25} />
        </Link>
      </StyleProjectsListDiv>
    </StyleProjectsList>
  );
};
