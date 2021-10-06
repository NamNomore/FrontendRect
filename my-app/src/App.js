import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Nav from './component/nav.js';
import Carousel from './component/carousel.js';
import Content from './component/content.js';
import Footer from './component/footer.js';
import DieuHuongURl from './router/DieuHuongURl.js';
function App() {
  return (
    <Router>
    <div>
      <Nav></Nav>
      <Carousel></Carousel>
      <DieuHuongURl></DieuHuongURl>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
