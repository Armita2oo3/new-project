import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "./Toggle";
import "./Day.css";
import "./Night.css";
import "./Homepage.css";
export default function Homepage() {
  return (
    <div>
      <div className="project" id="latest-project">
        <Toggle />
        <h1 className="text-center">Latest Projects</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/095/original/weather_2023-04-23_100439.jpg?1686416446"
                alt=""
                className="img-fluid weather"
              />
              <h2 className="text-center mt-2 mb-5">Weather App</h2>
            </div>
            <div className="col-lg-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/096/original/Animal_2023-04-23_100500.jpg?1686416793"
                alt=""
                className="img-fluid pet"
              />
              <h2 className="text-center mt-2 mb-5">Pet App</h2>
            </div>
            <div className="col-lg-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/097/original/Screenshot_2023-06-10_214447.jpg?1686417351"
                alt=""
                className="img-fluid weather"
              />
              <h2 className="text-center mt-2 mb-5">#2 Weather App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
