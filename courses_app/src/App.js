import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import About from './components/About';
import {BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";




function App() {
  const btnHandle = () =>{
    toast.success("Kyu be Kaisa Hai",
  {
    theme:'dark',
    position: toast.POSITION.BOTTOM_RIGHT
  });
};

  return (
    <div>
      <Router>
      <ToastContainer />
      <Header />
      <Container>
        <Row>
          <Col md={4}>
            <Menus />
          </Col>

          <Col md={8}>
             
             <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/view-courses" element={<AllCourses />} />
                  <Route path="/add-course" element={<AddCourse />} />
                  <Route path="/update-course" element={<UpdateCourse/>} />
                  <Route path="/about" element={<About/>} />
             </Routes> 
              
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
