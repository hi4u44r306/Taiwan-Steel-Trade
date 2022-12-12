import { Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { InspectionServices } from './pages/InspectionServices';
import { About } from './pages/About';
import { Navigation } from './components/Navigation';
import Carousel from 'react-bootstrap/Carousel';
import { SetStateAction, useState } from 'react';
import a1 from '../public/imgs/a1.jpg';
import a2 from '../public/imgs/a2.jpg';
import a3 from '../public/imgs/a3.jpg';
import a4 from '../public/imgs/a4.jpg';
import { Primary01 } from './pages/Primary01';
import { Primary02 } from './pages/Primary02';
import { Primary03 } from './pages/Primary03';
import { Primary04 } from './pages/Primary04';
import { Primary05 } from './pages/Primary05';
import { Primary06 } from './pages/Primary06';
import { Primary07 } from './pages/Primary07';
import { Secondary01 } from './pages/Secondary01';
import { Secondary02 } from './pages/Secondary02';
import { Secondary03 } from './pages/Secondary03';
import { Secondary04 } from './pages/Secondary04';
import './assets/css/app.css'
import { Contact } from './pages/Contact';
function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  return( 
    <>
      <Navigation/>
      <Container style={{height:"100%"}}>
        <div className="w-100">
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={a1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={a2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={a3}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={a4}
              alt="Forth slide"
            />
          </Carousel.Item>
          </Carousel>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/InspectionServices" element={<InspectionServices/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

          <Route path="/Primaryproduct01" element={<Primary01/>}/>
          <Route path="/Primaryproduct02" element={<Primary02/>}/>
          <Route path="/Primaryproduct03" element={<Primary03/>}/>
          <Route path="/Primaryproduct04" element={<Primary04/>}/>
          <Route path="/Primaryproduct05" element={<Primary05/>}/>
          <Route path="/Primaryproduct06" element={<Primary06/>}/>
          <Route path="/Primaryproduct07" element={<Primary07/>}/>

          <Route path="/Secondaryproduct01" element={<Secondary01/>}/>
          <Route path="/Secondaryproduct02" element={<Secondary02/>}/>
          <Route path="/Secondaryproduct03" element={<Secondary03/>}/>
          <Route path="/Secondaryproduct04" element={<Secondary04/>}/>

        </Routes>  
      </Container>
        <div className='copyright'>
          <span className='copyrightspan'>
            K Glory Industrial Corporation Limited All Rights Reserved
          </span>
          <span className='design'>
            Web Design By Victor
          </span>
        </div>
    </>
  )
}

export default App
