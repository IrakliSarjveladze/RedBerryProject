import WelcomePage from "../pages/welcome/WelcomePage";
import PersonalInformation from "../pages/personalInfo/PersonalInformation";
import SkillsPage from "../pages/skills/SkillsPage";
import CovidPage from "../pages/covid/CovidPage";
import InsightPage from "../pages/insight/InsightPage";
import SubmitPage from "../pages/submit/SubmitPage"
export const routes = [
  {
    path: "/",
    exact: true,
    component: <WelcomePage />,
    displayName: "Welcome",
  },
  {
    path: "/personal-info",
    exact: true,
    component: <PersonalInformation />,
    displayName: "Personal",
  },
  {
    path: "/skills",
    exact: true,
    component: <SkillsPage />,
    displayName: "Skills",
  },
  {
    path: "/covid",
    exact: true,
    component: <CovidPage />,
    displayName: "Covid",
  },
  {
    path: "/insight",
    exact: true,
    component: <InsightPage />,
    displayName: "Insight",
  },
  {
    path: "/submit",
    exact: true,
    component: <SubmitPage />,
    displayName: "submit",
  },
];
