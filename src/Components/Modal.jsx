import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let des=this.props.desc;
    return (
      <div>
        <div className="modal fade" id="exampleModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-dark w-full ">
                <div className=" d-flex">
                  <div className="rounded" style={{ width: "2rem", height:"2rem", cursor: "pointer"}}>
                    <img className="overflow-hidden rounded" src={this.props.userImg} alt="" style={{ width: "2rem", height:"2rem", cursor: "pointer"}}/>
                  </div>
                  
                    <p className="text-white font-monospace mx-3 my-auto">{this.props.userName}</p>
                  
                </div>
                <button
                  type="button"
                  className="btn-close bg-white "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <img
                className="bg-dark"
                src={this.props.img}
                alt=""
              />
              <div className="modal-footer bg-dark d-flex flex-row">
                <p className="text-success fw-bold fs-6">Likes: <span className=" text-white fw-lighter fs-6">{this.props.likes}</span> </p>
                <div className="modal-body text-white w-50 fw-light" >{des?des.slice(0,1).toUpperCase() + des.slice(1, des.length):""}</div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <a className="col" href={this.props.full} target=" _blank">
                    <button type="button" className="btn btn-outline-primary">
                      Full
                    </button>
                  </a>
                  <a className="col" href={this.props.raw} target=" _blank">
                    <button type="button" className="btn btn-outline-primary">
                      Raw
                    </button>
                  </a>
                  <a className="col" href={this.props.img} target=" _blank">
                    <button type="button" className="btn btn-outline-primary">
                      1080
                    </button>
                  </a>
                  <a className="col" href={this.props.small} target=" _blank">
                    <button type="button" className="btn btn-outline-primary">
                      Small
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
