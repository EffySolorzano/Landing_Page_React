import React from 'react';
import ReactDOM from "react-dom";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx"
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx"
// include your styles into the webpack bundle

//import your own components

const Home =()=>{
    
  let cards = [
    {
      title: 'Top Things to do in Okinawa',
      description: "Okinawa is a prefecture that consists of several small islands in the southernmost part of Japan. It is renowned for its beautiful waters and rich marine life, and is consistently ranked highly when it comes to the best Japanese destinations for scuba diving and snorkeling.",
      buttonURL: 'https://www.japanrailpass.com.au/top-things-to-do-in-okinawa/',
      buttonLabel: 'Go to Japan Rail Pass',
      imageUrl: 'https://www.japanrailpass.com.au/wp-content/uploads/2016/05/1000x668xOkinawa.jpg.pagespeed.ic.ma2m2qtxbo.jpg',
    },
    {
      title:'The 5 Best beaches in Los Roques National Park',
      description:"One of the most memorable experiences you will ever have in Venezuela is a visit to Los Roques. One of the most affordable and well-liked activities on Los Roques is taking a trip to the cays and islets around the island. Cheaper day tours could be availed from small boats, also called a “Peñero”, at the main docks for only $20 to $100 per passenger.",
      buttonURL: 'https://www.tripadvisor.com/Attractions-g316063-Activities-c61-t52-Los_Roques_National_Park_Coastal_Islands_Insular_Region.html',
      buttonLabel: 'Go to Osprey Express',
      imageUrl: 'https://guaramotours.com/wp-content/uploads/2021/06/los-roques.jpg',
    },
    {
      title: "Its Always Spring on This Enchanted European Island",
      description: "Take a piece of a sweet European village—specifically a terracotta-tiled-roof, Lisbon-esque piece—and put it on a tropical island between Portugal and Morocco, and you get Madeira. All earthy orange shingles against the green trees and fronds, each building sits on its own level on tiered hills, while waterfalls crash down the lush valleys between so that no single view blocks another.",
      buttonURL: 'https://www.thrillist.com/travel/nation/things-to-do-madeira-portugal',
      buttonLabel: 'Go to Thrillist',
      imageUrl: 'https://assets3.thrillist.com/v1/image/3073092/2880x1620/crop;webp=auto;jpeg_quality=60;progressive.jpg',
    },
  
  ];

return(
  <>
  <Navbar />
  <Jumbotron />
  <div className="album">
        <div className="container">
          <div className="row card-container">
            {cards.map((item, index) => {
              return (
                <Card
                title={item.title}
                  description={item.description}
                  buttonURL={item.buttonURL}
                  buttonLabel={item.buttonLabel}
                  imageUrl={item.imageUrl}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    <Footer />
  </>
);
};

export default Home;