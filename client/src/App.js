import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="main-content">
          <About />
          <WorkExp />
          <Education />
          <Techstack />
          <Projects />
          <Contact />
        </div>
        <div className="footer pb-5">
          <Tada>
            <h4 className="text-center" style={{color: 'var(--text-dim)', fontWeight: 400}}>
              Designed & Built with ❤️ by Abdul Basit &copy; {new Date().getFullYear()}
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#00f2fe"
        style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: "50%", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
      />
    </>
  );
}

export default App;
