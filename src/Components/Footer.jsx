import React from "react";
import {BsFacebook, BsLinkedin, BsInstagram, BsYoutube, BsGithub, BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <>
        <footer className=" bg-dark text-light py-5">
          <div className="container text-center">
            <div className="row text-center d-flex justify-content-between">
              <div className="col-md-4 col-lg-3 fs-6 fw-lighter text mt-md-4">Copyright <sup>&copy;</sup><br /> <span className="fw-lighter">Warlock Inc. {(new Date().getFullYear())}</span></div>
              <div className="col-md-4 col-lg-3 fs-6 lead mt-5 mt-md-0">
                <ul className="font-monospace list-unstyled d-flex flex-row justify-content-center align-content-center">
                  <li className="mx-auto navRes"><a className=" text-decoration-none text-white" href="/">Home</a></li>
                  <li className="mx-auto navRes"><a className=" text-decoration-none text-white" href="/about">About</a></li>
                  <li className="mx-auto navRes"><a className=" text-decoration-none text-white" href="/contact">Contact</a></li>
                </ul>
                <hr />
                <p className="mt-4">All rights reserved by <br /> Sahil Verma</p>
              </div>
              <div className="col-md-4 col-lg-3 fs-2 lead">
                <div>
                  <ul className="d-flex justify-content-center mt-4 align-content-center flex-wrap">
                    <li className="list-unstyled navRes mx-md-2 mx-auto mx-lg-3"><a className="text-white" href="https://bit.ly/3yL5fYY" target="_blank"><BsFacebook /></a></li>
                    <li className="list-unstyled navRes mx-md-2 mx-auto mx-lg-3"><a className="text-white" href="https://www.linkedin.com/in/sahil-verma-6963bb229" target="_blank"><BsLinkedin /></a></li>
                    <li className="list-unstyled navRes mx-md-2 mx-auto mx-lg-3"><a className="text-white" href="https://bit.ly/2WGjIs9" target="_blank"><BsYoutube /></a></li>
                    <li className="list-unstyled navRes mx-md-2 mx-auto mx-lg-3"><a className="text-white" href="https://www.instagram.com/not_sahil_19" target="_blank"><BsInstagram /></a></li>
                    <li className="list-unstyled navRes mx-md-2 mx-auto mx-lg-3"><a className="text-white" href="https://github.com/notSahilVerma" target="_blank"><BsGithub /></a></li>
                    <li className="list-unstyled navRes mx-md-2 mx-auto mx-lg-3"><a className="text-white" href="https://bit.ly/2WSKhKx" target="_blank"><BsTwitter /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </>
    </div>
  );
};

export default Footer;
