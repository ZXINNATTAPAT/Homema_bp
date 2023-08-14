import React from "react";
import "../styles/Postcategories.css";


const Postcategories = () => {
  return (
    <div className="post-categories-container text-content">
      <br></br>

      <h1>เลือกประเภทกระทู้</h1>
      <br/>
      <div className="post-type">
          <div className="post-content card">
            <div className="card-body">
              <br />
              <a class="nav-link text-content " href="/forum/new_topic">
                <h2>คำถาม</h2>
              </a>
            </div>
          </div>

          <div className="post-content card">
            <div className="card-body">
              <br />
              <a class="nav-link text-content " href="/forum/new_topic">
                <h2>สนทนา</h2>
              </a>
            </div>
          </div>

          <div className="post-content card">
            <div className="card-body">
              <br />
              <a class="nav-link text-content " href="/forum/new_topic">
                <h2>โพล</h2>
              </a>
            </div>
          </div>

          <div className="post-content card">
            <div className="card-body">
              <br />
              <a class="nav-link text-content " href="/forum/new_topic">
                <h2>รีวิว</h2>
              </a>
            </div>
          </div>

          <div className="post-content card">
            <div className="card-body">
              <br />
              <a class="nav-link text-content " href="/forum/new_topic">
                <h2>ข่าว</h2>
              </a>
            </div>
          </div>

          <div className="post-content card">
            <div className="card-body">
              <br />
              <a class="nav-link text-content " href="/forum/new_topic">
                <h2>ขายของ</h2>
              </a>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Postcategories;
