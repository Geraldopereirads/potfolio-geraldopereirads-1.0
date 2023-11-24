import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/homePage";
import { PageNotFoud } from "../pages/PageNotFound/pageNotFound";
import { AboutPage } from "../pages/aboutPage/aboutPage";
import { PortfolioPage } from "../pages/PortifolioPage/portfolioPage";
import { ToolsPage } from "../pages/ToolsPage/toolsPage";
import { ContactPage } from "../pages/ContactPage/contactPage";
import { BackEndPage } from "@/pages/backEndPage/backEndPage";
import { FrontEndPage } from "@/pages/frontEndPage/frontEndPage";
import { FullStackPage } from "@/pages/fullStackPage/fullStackPage";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/ferramentas" element={<ToolsPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/frontend" element={<FrontEndPage />} />
        <Route path="/backend" element={<BackEndPage />} />
        <Route path="/fullstack" element={<FullStackPage />} />
        <Route path="*" element={<PageNotFoud />} />
      </Routes>
    </div>
  );
};
