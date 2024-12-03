import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
