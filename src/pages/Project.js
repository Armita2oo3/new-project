import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "./Toggle";
import "./Day.css";
import "./Night.css";
import "./Homepage.css";
export default function Homepage() {
  return (
    <div style={{ marginLeft: "200px", marginRight: "100px" }}>
      <div className="project">
        <Toggle />
        <h1 className="text-center">Latest Projects</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/095/original/weather_2023-04-23_100439.jpg?1686416446"
                alt=""
                style={{
                  border: "1px solid black",
                  width: "310px",
                }}
                className="img-fluid pictures weather"
              />
              <a
                href="https://mellow-jalebi-fa1668.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="pic-link mt-2 mb-5"
              >
                Weather App
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/096/original/Animal_2023-04-23_100500.jpg?1686416793"
                alt=""
                style={{
                  border: "1px solid black",
                  width: "310px",
                }}
                className="img-fluid pictures pet"
              />
              <a
                href="https://www.shecodes.io/workshops/shecodes-basics-159929af-30e6-4958-bd3b-91990c61966b/projects/1413381"
                target="_blank"
                rel="noreferrer"
                className="pic-link mt-2 mb-5"
              >
                Pet App
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/097/original/Screenshot_2023-06-10_214447.jpg?1686417351"
                alt=""
                style={{ border: "1px solid black", width: "310px" }}
                className="img-fluid pictures weather"
              />
              <a
                href="https://sweet-tulumba-ee73d6.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="pic-link mt-2 mb-5"
              >
                #2 Weather App
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/173/original/Calculator_2023-06-11_135839.jpg?1686476015"
                alt=""
                style={{ border: "1px solid black", width: "310px" }}
                className="img-fluid pictures weather"
              />
              <a
                href="https://calculator-react-new.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="pic-link mt-2 mb-5"
              >
                Calculator App
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/090/178/original/todo2.jpg?1689507386"
                alt=""
                style={{ border: "1px solid black", width: "310px" }}
                className="img-fluid pictures weather"
              />
              <a
                href="https://gentle-griffin-1a6def.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="pic-link mt-2 mb-5"
              >
                Todo App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
