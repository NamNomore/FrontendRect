import logo from './logo.svg';
import './App.css';
import Nav from './component/nav.js';
import Carousel from './component/carousel.js';
import Content from './component/content.js';
import Footer from './component/content.js';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Carousel></Carousel>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
