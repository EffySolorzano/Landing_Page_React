import React from "react";

const Jumbotron = () => {
    return (
      <>
        <section className="py-3 container mt-2">
          <div className="row py-lg-5 bg-light" id="row">
            <div className="col-12 mx-auto ms-3">
              <h1>Love to travel?</h1>
              <p className="lead me-2">
              Discover, plan and book your perfect trip with expert advice, 
              travel guides, destination information and inspiration from Kiki's Travel Services.
              </p>
              <p className="lead">
                <a href="#" className="btn btn-warning my-2">
                  More destinations.
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };
export default Jumbotron;  