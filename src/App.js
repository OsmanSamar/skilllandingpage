import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Testimonails from "./components/Testimonails";
import MouseParticles from "react-mouse-particles";

function App() {
  return (
    <div>
      <MouseParticles
        g={2} //Gravity of particles (default: 1).
        num={12} //Number of particles (default: 10).
        color="blue" //
        cull="MuiSvgIcon-root,MuiButton-root" //Comma-separated class names of elements that should not trigger particles.
        level={8} //Level of particle complexity (default: 5).
      />
      <NavBar />
      <Header />

      <Testimonails />
      <Footer />
    </div>
  );
}

export default App;
