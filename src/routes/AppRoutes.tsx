import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/homePage";
import { PageNotFoud } from "../pages/PageNotFound/pageNotFound";
import { AboutPage } from "../pages/aboutPage/aboutPage";
import { PortifolioPage } from "../pages/PortifolioPage/portifolioPage";
import { ToolsPage } from "../pages/ToolsPage/toolsPage";
import { ContactPage } from "../pages/ContactPage/contactPage";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/portifolio" element={<PortifolioPage />} />
        <Route path="/ferramentas" element={<ToolsPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<PageNotFoud />} />
      </Routes>
    </div>
  );
};
