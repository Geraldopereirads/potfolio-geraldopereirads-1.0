import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { RxVercelLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  ProjectListStyleLiOne,
  ProjectListStyleDivOne,
} from "./projectListStyleOne";

export const ProjectsListOne = ({ project }: any) => {
  return (
    <ProjectListStyleLiOne>
      <Link target="_blank" title="projeto" to={project.urlVercel}>
        <img src={project.img} alt="Projeto" />
      </Link>
      <ProjectListStyleDivOne>
        <Link title="Vercel" target="_blank" to={project.urlVercel}>
          <RxVercelLogo size={35} />
        </Link>
        <Link title="Github" target="_blank" to={project.github}>
          <GrGithub size={35} />
        </Link>
      </ProjectListStyleDivOne>
    </ProjectListStyleLiOne>
  );
};
