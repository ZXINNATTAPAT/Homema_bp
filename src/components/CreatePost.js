import React from "react";

import "../styles/CreatePost.css";
const CreatePost = () => {
  return (
    <div className="container">
        <div className="create-post-container">
        <br />
        
        <br />

        <div className="create-post-content card">
          
          <div className="card-header">
              <h1>Create a post</h1>
          </div>

          <div className="card-body">

                  {/* botton dropdown  */}

                <div class="dropdown">

                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Room
                    </button>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                </div>

                  
                <div className="create-post-mid">

                  <input type="text" className="form-control" placeholder="Title" />
                  <br />

                  <textarea rows="5" className="form-control" cols="50" placeholder="Text(optional)"></textarea>
                  
                </div>

                <div div className="create-post-bottom">
                  <div className="post-option">
                    <div className="post-top-item">
                      <i class="fa-solid fa-bold"></i>
                    </div>
                    <div className="post-top-item">
                      <i class="fa-solid fa-italic"></i>
                    </div>
                    <div className="post-top-item">
                      <i class="fa-solid fa-image"></i>
                    </div>
                    <div className="post-top-item">
                      <i class="fa-solid fa-link"></i>
                    </div>
                    <div className="post-top-item">
                      <i class="fa-solid fa-square-poll-vertical"></i>
                    </div>
                    <div className="post-top-item">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="post-top-item">
                      <i class="fa-solid fa-square-poll-vertical"></i>
                    </div>
                  </div>

                  <button type="button" class="btn btn-primary">
                    Post
                  </button>
                </div>

                
          </div>
         
        </div>

    </div>
    </div>
  
  );
};

export default CreatePost;
