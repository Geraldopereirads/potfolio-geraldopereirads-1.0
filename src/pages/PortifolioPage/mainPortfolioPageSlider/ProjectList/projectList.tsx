import { Link } from "react-router-dom";

export const ProjectsList = ({ project }: any) => {
  return (
    <Link target="_blank" title="projeto" to={project.urlVercel}>
      <img src={project.img} alt="Projeto" />
    </Link>
  );
};
