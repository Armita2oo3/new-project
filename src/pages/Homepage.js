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
      <div className="home">
        <Toggle />
        <div>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/209/original/profile.jpg?1682093562"
            alt=""
            className="img-fluid profile"
          />
        </div>
        <div>
          <h5 className="mb-4">Front-end Developer</h5>
          <h1 className="name">Armita Mir</h1>
          <p className="mt-4 mb-3">I am a freelance Software developer.</p>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-4">Working Tools</h2>
          <div className="col-lg-6  ">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/210/original/Screenshot_2023-04-21_182909.jpg?1682093674"
              alt="working tools"
              className="img-fluid apps "
            />
          </div>
          <div className="col-lg-6">
            <p className="  mt-5 text-center ">
              dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam
              felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
