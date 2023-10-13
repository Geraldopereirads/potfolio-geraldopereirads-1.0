import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { RxVercelLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ProjectListStyleLi, ProjectListStyleDiv } from "./projectListStyle";

export const ProjectsList = ({ project }: any) => {
  return (
    <ProjectListStyleLi>
      <Link target="_blank" title="projeto" to={project.urlVercel}>
        <img src={project.img} alt="Projeto" />
      </Link>
      <ProjectListStyleDiv>
        <Link title="github" target="_blank" to={project.urlVercel}>
          <RxVercelLogo size={35} />
        </Link>
        <Link title="github" target="_blank" to={project.github}>
          <GrGithub size={35} />
        </Link>
      </ProjectListStyleDiv>
    </ProjectListStyleLi>
  );
};
