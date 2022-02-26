import './App.css'
import Navbar from "./components/Homepage/Navbar";
import MainLocation from "./components/Homepage/MainLocation";
import Gallery from "./components/Homepage/Gallery";
import PopularLocation from './components/Homepage/PopularLocation';
import Footer from './components/Homepage/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainLocation />
      <Gallery/>
      <PopularLocation/>
      <Footer/>
    </div>
  );
}

export default App;
