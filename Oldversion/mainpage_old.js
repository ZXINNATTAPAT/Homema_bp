import React from "react";
import "../styles/Mainpages.css";

export default function Mainpages() {
  return (
    <> 
      
    
        <header class="jumbotron blockcode" >{/* header content */}
        
              <div class="container py-4">

                <h1 >YOURSPACE</h1>

                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </div>

              <div className="border-top border-bottom blockcode  border-secondary-subtle border-1" >
                <div className="container">

                  <span className="text-bc ">

                  <i class="fa-solid fa-right-to-bracket" ></i> หน้าแรก</span>
                </div>

              </div>
        </header>

          <main className="container py-4">{/* content in main page by.NTP  */}
           
            <div className="card"> {/* ###### Highlight block  ###### */}
              <div className="card-header">เลือกห้อง</div>

              <div className="container-fluid ">
                <div className="card-body">
                  <div className="hstack gap-3">
                    <center>
                      <button className="btn btn-secondary m-4 p-4">
                        <i className="fa-solid fa-house"></i> <br />
                        Gadget
                      </button>

                      <button className="btn btn-secondary m-4 p-4">
                        <i className="fa-solid fa-house"></i> <br />
                        Gadget
                      </button>

                      <button className="btn btn-secondary m-4 p-4">
                        <i className="fa-solid fa-house"></i> <br />
                        Gadget
                      </button>

                      <button className="btn btn-secondary m-4 p-4">
                        <i className="fa-solid fa-house"></i> <br />
                        Gadget
                      </button>

                      <button className="btn btn-secondary m-4 p-4">
                        <i className="fa-solid fa-house"></i> <br />
                        Gadget
                      </button>

                      <button className="btn btn-secondary m-4 p-4">
                        <i className="fa-solid fa-house"></i> <br />
                        Gadget
                      </button>

                      <button className="btn btn-secondary m-4 p-4">
                        <i className="fa-solid fa-house"></i> <br />
                        Gadget
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            
            <br />
           
            <div className="card"> {/* ######  block  ###### */}
              <div className="card-header">Highlight</div>

              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide card-body"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>

                </div>

                <div className="carousel-inner">
                  {/* set 1 */}

                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ... more cards */}
                    </div>
                  </div>

                  {/* set 2 */}

                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ... more cards */}
                    </div>
                  </div>

                  {/* set 3 */}

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="card mb-4">
                          <div className="card-div">
                            <img
                              src={require("../Photo/img2.jpg")}
                              className="card-img-top"
                              alt="sdas"
                            ></img>
                            <div className="card-body">
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ... more cards */}
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>
            </div>

            
            <div className="p-4 mb-4 bg-div-tertiary rounded-3">{/* main board */}
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                <p className="col-md-8 fs-4">
                  Using a series of utilities, you can create this jumbotron,
                  just like the one in previous versions of Bootstrap. Check out
                  the examples below for how you can remix and restyle it to
                  your liking.
                </p>
                <button className="btn btn-secondary btn-lg" type="button">
                  Example button
                </button>
              </div>
            </div>


            <div className="row align-items-md-stretch">
              <div className="col-md-6">
                <div className="h-100 p-4 text-bg-dark rounded-3">
                  <h2>Change the background</h2>
                  <p>
                    Swap the background-color utility and add a `.text-*` color
                    utility to mix up the jumbotron look. Then, mix and match
                    with additional component themes and more.
                  </p>
                  <button className="btn btn-outline-light" type="button">
                    Example button
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 p-4 bg-div-tertiary border rounded-3">
                  <h2>Add borders</h2>
                  <p>
                    Or, keep it light and add a border for some added definition
                    to the boundaries of your content. Be sure to look under the
                    hood at the source HTML here as we've adjusted the alignment
                    and sizing of both column's content for equal-height.
                  </p>
                  <button className="btn btn-outline-secondary" type="button">
                    Example button
                  </button>
                </div>
              </div>
            </div>

            {/* ????coming soon */}
            <br></br>
          </main>

            <footer className="pt-3 mt-4 text-div-secondary border-top">
              © 2023
            </footer>
        
       
    </>
  );
}
