import React from "react";
import "../styles/Requestlist.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Requestlist = () => {
  return (
    <>
    <Navbar />
      <div className="container-fluid bkg ">

      <div className="container"> 
          <div className="request-container">
            <br />
            <br />
          <img className="request-banner" src={require("../Photo/HOMEMA.png")} alt="" />


             <Link to="/mainproblem" className="btn btn-warning btn-lg ts" style={{width:"50%"}}>
              
              <p style={{color:"black"}}>
                  <i className="fa-solid fa-plus"> </i> แจ้งงานซ่อม
              </p>
           
            </Link>

          <br />
          <br />
         
          <h4 className="fa-solid">บริการแนะนำ</h4><br />

          <div className="card-container">
            <div className="card-list">
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/Smart Home.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%" , }}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">Smart Home อุปกรณ์พร้อมติดตั้ง</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿5000</p>
                  </div>
                </div>
              </div>
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/s2.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%"}}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">ฉีดพ่นน้ำยาฆ่าเชื้อ</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿1990</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <h4 className="fa-solid">บริการล้าง ทำความสะอาด</h4><br />

          <div className="card-container">
            <div className="card-list">
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/s3.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%"}}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">ล้างแอร์</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿650</p>
                  </div>
                </div>
              </div>
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/s4.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%"}}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">ล้างเครื่องซักผ้า</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <h4 className="fa-solid">กำจัดไรฝุ่น และฆ่าเชื้อ</h4><br />

          <div className="card-container">
            <div className="card-list">
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/s5.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%"}}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">กำจัดไรฝุ่นบนที่นอน-โซฟา</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿1390</p>
                  </div>
                </div>
              </div>
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/s6.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%"}}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">กำจัดคราบเปื้อน ซักที่นอน-โซฟา</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿1890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <h4 className="fa-solid">อุปกรณ์คอมพิวเตอร์</h4> <br />

          <div className="card-container">
            <div className="card-list">
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/s7.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%"}}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">ติดตั้งและแก้ไขปัญหาเครื่อง MAC</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿1605</p>
                  </div>
                </div>
              </div>
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/s7.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%"}}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">โอนย้ายข้อมูล (Backup) เครื่อง MAC</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿2140</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <h4 className="fa-solid">อุปกรณ์ Smart Home</h4> <br />

          <div className="card-container">
            <div className="card-list">
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={require("../Photo/Smart Home.jpg")}
                  className="card-img-top"
                  alt="..."
                   style={{height:"220px" , width :"100%"}}
                />
                <div className="card-body">
                  <div className="top">
                    <p className="card-text">Smart Home อุปกรณ์พร้อมติดตั้ง</p>
                  </div>
                  <div className="bottom">
                    <p className="card-price"> ฿15000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          </div>

          <br / >
            

      </div>

            {/* <footer className="container">
              helloo
            </footer> */}

    </div>
    </>
    
    
  );
};

export default Requestlist;
