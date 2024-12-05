import "./App.css";
import Artifacts from "./components/Artifacts/Artifacts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form.jsx";
import Header from "./components/Header/Header.jsx";
import Present from "./components/Present/Present.jsx";
import Slider from "./components/Slider/Slider.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Present />
        <Slider />
        <Artifacts/>
        <Form/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
