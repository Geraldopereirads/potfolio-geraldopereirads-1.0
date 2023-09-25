import { projectsData } from "@/utils/projectsData";
import { ProjectsList } from "./ProjectsList/projectsList";
import { MainPortfolioPageStyle } from "./mainPortfolioPageStyle";

export const MainPortfolioPage = () => {
  return (
    <MainPortfolioPageStyle>
      <ul>
        {projectsData.map((project, index) => (
          <ProjectsList key={index} project={project} />
        ))}
      </ul>
    </MainPortfolioPageStyle>
  );
};
