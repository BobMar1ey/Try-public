
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Present from "./components/Present/Present.jsx";
function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Present/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
