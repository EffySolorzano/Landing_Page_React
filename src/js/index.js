//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle

import "../styles/index.css";



//import your own components
import Home from "./component/home.jsx";

function App(props) {
    return(

		<>
         <div>
      <Navbar />
      // Rest of your code here
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>  
        <div className="card m-5" style={{ width: "300px" }}>
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonURL} className="btn btn-primary">
                    {props.buttonLabel}
                </a>
            </div>
        </div> 
    
        </>
	);

}

//render your react application
ReactDOM.render(
    <div>
     <myNavbar />
        <div className="d-flex justify-content-between">
        <App
            title="Top Things To Do In Okinawa"
            description="Okinawa is a prefecture that consists of several small islands in the southernmost part of Japan. It is renowned for its beautiful waters and rich marine life, and is consistently ranked highly when it comes to the best Japanese destinations for scuba diving and snorkeling."
            buttonURL="https://www.japanrailpass.com.au/top-things-to-do-in-okinawa/"
            imageUrl="https://www.japanrailpass.com.au/wp-content/uploads/2016/05/1000x668xOkinawa.jpg.pagespeed.ic.ma2m2qtxbo.jpg"
            buttonLabel="Go to Japan Rail Pass" />
        
        <App
            title="The best 5 Beaches in Los Roques National Park"
            description="One of the most memorable experiences you will ever have in Venezuela is a visit to Los Roques."
            buttonURL="https://www.tripadvisor.com/Attractions-g316063-Activities-c61-t52-Los_Roques_National_Park_Coastal_Islands_Insular_Region.html"
            imageUrl="https://guaramotours.com/wp-content/uploads/2021/06/los-roques.jpg"
            buttonLabel="Go to Osprey Express" />

        <App
            title="Its Always Spring on This Enchanted European Island"
            description="Take a piece of a sweet European village—specifically a terracotta-tiled-roof, Lisbon-esque piece—and put it on a tropical island between Portugal and Morocco, and you get Madeira."
            buttonURL="https://www.thrillist.com/travel/nation/things-to-do-madeira-portugal"
            imageUrl="https://assets3.thrillist.com/v1/image/3073092/2880x1620/crop;webp=auto;jpeg_quality=60;progressive.jpg"
            buttonLabel="Go to Thrillist"/>
        </div>
        </div>,
        document.querySelector("#app"));



Home.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

