import React from "react";
import "../styles/Postcategories.css";
import { Link } from "react-router-dom";
const Postcategories = () => {
  return (
    <div className="post-categories-container">
      <h2>เลือกประเภทกระทู้</h2>
      <div className="post-type">
        <div className="post-content">
          <Link to="new_topic">กระทู้คำถาม</Link>
        </div>
        <div className="post-content">กระทู้สนทนา</div>
        <div className="post-content">กระทู้โพล</div>
        <div className="post-content">กระทู้รีวิว</div>
        <div className="post-content">กระทู้ข่าว</div>
        <div className="post-content">กระทู้ขายของ</div>
      </div>
    </div>
  );
};

export default Postcategories;
