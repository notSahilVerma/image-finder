import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Modal from './Modal';

const Home = () => {
  const [value, setValue] = useState("");
  const [term, setTerm] = useState("");
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const detectKeyDown = (e) => {
    if (e.code === "Enter") {
      onSearch(value);
    }
  };

  const [tempData, setTempData] = useState([]);

  const getData=(img, desc, full, raw, small, userImg, userName, likes)=>{
    let tempData=[img, desc, full, raw, small, userImg, userName, likes];
    setTempData(()=>[1,...tempData]);
  }
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setImage([]);
    setTerm(searchTerm);
    setPage(1);
  };
  // const location = useLocation();
  useEffect(() => {
    setLoading(true);
    // console.log(location.pathname.split("/")[1]);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${term}&client_id=${process.env.REACT_APP_SECRET_KEY}`;
    axios.get(url).then((response) => {
      // console.log(response);
      setImage(response.data.results);
      setLoading(false);
    });
  }, [page, term]);

  return (
    <>
    
      <section id="header" className=" d-flex align-items-center pt-4" style={{minHeight: "80vh"}}>
        
        <div className="container-fluid color-overlay">
          <div className="row justify-content-center ">
            <div className="col-10 text-center">
              <div className="bgImage p-2 mx-auto rounded" style={{backgroundImage: `url('./images/bg4.jpg')`}}>
              <div className=" col-4 mx-auto mt-4 color-overlay">
                <img className="w-50 img-fluid mx-auto d-block" src="./images/logo.png" alt="loading" style={{filter: `blur("150px")`}}/>
              </div>
              <div className=" color-overlay rounded mx-auto d-block d-flex justify-content-center align-items-center w-100">
              <h1 className="h1 lead fs-1">
                IMAGE FINDER
              </h1>
              </div>
              <div
                className="container d-flex col-10 col-xs-12 col-md-7 col-lg-5 my-5"
                onKeyDown={(e) => {
                  detectKeyDown(e);
                }}
                >
                <input
                  className="form-control me-2 font-monospace"
                  type="search"
                  placeholder="Search"
                  value={value}
                  onChange={onChange}
                  />
                <button
                  className="btn btn-outline-light fw-lighter"
                  onClick={() => onSearch(value)}
                  >
                  Search
                </button>
              </div>
                  </div>
              {image.length?<hr />:''}
              <div className="my-5">
                <div className="row row-cols-auto d-flex justify-content-center">
                  
                  {loading?
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                  </div>
                  : image.map((value, index) => {
                    return (
                      
                      <div
                      key={index}
                        onClick={()=>{getData(value.urls.regular, value.alt_description, value.urls.full, value.urls.raw, value.urls.small, value.user.profile_image.small, value.user.first_name, value.likes)}}
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        className="res my-1 col overflow-visible"
                        style={{ width: "18rem", height:"12rem", cursor: "pointer"}}
                        // onClick={()=>{giveDetails(value, index)}}
                        >
                        
                        <img
                          src={value.urls.regular}
                          className=" img-fluid rounded h-100"
                          
                          alt="Can't load"
                          />
                      </div>
                      
                      );
                    })}
                </div>
                    <Modal img={tempData[1]} desc={tempData[2]} full={tempData[3]} raw={tempData[4]} small={tempData[5]} userImg={tempData[6]} userName={tempData[7]} likes={tempData[8]}/>
                    
              </div>
              {/* </div> */}
              {image.length?<hr />:''}
              {image.length?<div className="container col-1 lead">
                <p>{page}</p>
              </div>:''}
              
              {image.length?
              <div className="container d-flex col-2 my-4 justify-content-center">
                <div
                  className="btn btn-small btn-secondary mx-1 col fw-lighter"
                  onClick={() => {
                    // console.log("clicked");
                    setPage((prev) => (prev <= 1 ? 1 : prev - 1));
                  }}
                  >
                  Previous
                </div>
                <div
                  className="btn btn-small btn-dark mx-1 col fw-lighter "
                  onClick={() => {
                    setPage((prev) => prev + 1);
                  }}
                  >
                  Next
                </div>
              </div>:''}
            </div>
          </div>
        </div>
      </section>
    </>
              
  );
};

export default Home;
