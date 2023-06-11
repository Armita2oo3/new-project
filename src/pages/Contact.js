import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "./Toggle";
import "./Day.css";
import "./Night.css";
import "./Homepage.css";

export default function Contact() {
  return (
    <div>
      <Toggle />
      <div className="contact">
        <div>
          <h1 className="text-center mb-5">Contact Me</h1>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-4 mt-5 columns">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/789/original/pngwing.com_%282%29.png?1682412209"
                alt=""
                className="img-fluid icon-img"
              />
              <h4 className="text-center mt-2 mb-5">
                <a
                  href="https://www.instagram.com/"
                  className="instagram-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram link"
                >
                  Instagram
                </a>
              </h4>
            </div>
            <div className="col-4 mt-5  columns">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/788/original/pngwing.com_%281%29.png?1682412184"
                alt=""
                className="img-fluid email icon-img"
              />
              <h4 className="text-center mt-2 mb-5">
                <a
                  href="mailto:mir.armita13@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="email-link"
                  title="Email link"
                >
                  Email
                </a>
              </h4>
            </div>
            <div className="col-4 mt-5  columns">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/787/original/pngwing.com.png?1682412172"
                alt=""
                className="img-fluid icon-img"
              />
              <h4 className="text-center mt-2 mb-5">
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="telegram-link"
                  title="Telegram link"
                >
                  Telegram
                </a>
              </h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center mt-5">
          <h5>Coded by Armita Mir</h5>
          <a
            href="https://github.com/Armita2oo3/new-portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            Open-Source code
          </a>
        </div>
      </div>
    </div>
  );
}
