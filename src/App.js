import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Testimonails from "./components/Testimonails";
import MouseParticles from "react-mouse-particles";

function App() {
  return (
    <div>
      <MouseParticles
        g={2}
        num={12}
        color="blue"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={8}
      />
      <NavBar />
      <Header />

      <Testimonails />
      <Footer />
    </div>
  );
}

export default App;
