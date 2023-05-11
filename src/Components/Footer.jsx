import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <>
        <footer className=" bg-dark text-light py-5">
          <div className="container text-center">
            <div className="row text-center d-flex justify-content-between">
              <div className="col-md-4 col-lg-3 fs-6 fw-lighter text mt-md-4">
                Copyright <sup>&copy;</sup>
                <br />{" "}
                <span className="fw-lighter">
                  Warlock Inc. {new Date().getFullYear()}
                </span>
              </div>
              <div className="col-md-4 col-lg-3 fs-6 lead mt-5 mt-md-0">
                <ul className="font-monospace list-unstyled d-flex flex-row justify-content-center align-content-center">
                  <li className="nav-item mx-auto navRes">
                    <NavLink
                      className="nav-link navLinks lastNavlink text-white"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mx-auto navRes">
                    <NavLink
                      className="nav-link navLinks secondNavlink text-white"
                      to="./about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item mx-auto navRes">
                    <NavLink
                      className="nav-link navLinks thirdNavlink text-white"
                      to="./contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <p className="mt-4">
                  All rights reserved by <br /> Sahil Verma
                </p>
              </div>
              <div className="col-md-4 col-lg-3 fs-2 col-11">
                <ul className="d-flex justify-content-center mt-4 align-content-center flex-wrap mx-auto">
                  <li className="list-unstyled navRes mx-auto mx-md-2 mx-lg-3">
                    <a
                      className="text-white"
                      href="https://www.facebook.com/harshwarlock"
                    >
                      <BsFacebook />
                    </a>
                  </li>
                  <li className="list-unstyled navRes mx-auto mx-md-2 mx-lg-3">
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/sahil-verma-6963bb229"
                    >
                      <BsLinkedin />
                    </a>
                  </li>
                  <li className="list-unstyled navRes mx-auto mx-md-2 mx-lg-3">
                    <a
                      className="text-white"
                      href="https://www.youtube.com/channel/UCTpymGhlXHvgKnykQOEFusw"
                    >
                      <BsYoutube />
                    </a>
                  </li>
                  <li className="list-unstyled navRes mx-auto mx-md-2 mx-lg-3">
                    <a
                      className="text-white"
                      href="https://www.instagram.com/not_sahil_19"
                    >
                      <BsInstagram />
                    </a>
                  </li>
                  <li className="list-unstyled navRes mx-auto mx-md-2 mx-lg-3">
                    <a
                      className="text-white"
                      href="https://github.com/notSahilVerma"
                    >
                      <BsGithub />
                    </a>
                  </li>
                  <li className="list-unstyled navRes mx-auto mx-md-2 mx-lg-3">
                    <a
                      className="text-white"
                      href="https://twitter.com/HarshWarlock"
                    >
                      <BsTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;
