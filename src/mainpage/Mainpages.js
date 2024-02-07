import React from "react";
import "../styles/Mainpages.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Mainpages() {
  return (
    <> 
      <Navbar />
      {/* for moblie App */}
        <header className="bgs-head">

        </header>
      {/* ################## */}
        <header className="jumbotron bgs text-content">
            {/* display in desktop and tablet */}
            <section className="container pts">
                <section className=" card-pages">
                              <article className="col " >
                                <h3 className="card-title">บริการช่างมืออาชีพจาก HOMEMA<br/>
                                 ผลงานดี สะดวก ไร้ปัญหาการทิ้งงาน</h3>
                                <div className=" text-p " >
                                  <i className="fa-solid fa-check text-success" ></i> ช่างมืออาชีพ
                                  <br/>
                                  <i className="fa-solid fa-check text-success" ></i> ไม่มีประวัติอาชญากรรม
                                  <br/>
                                  <i className="fa-solid fa-check text-success" ></i> ยืนยันด้วยรีวิวจากลูกค้าจริง
                                  <br/>
                                </div>
                              </article>
                          <article className="col " >
                                  <br />
                                  <center>
                                      <Link to="/request">
                                        <button className="btn  btn-warning btnsize">
                                          <br />
                                            <h3><i className="fa-solid fa-magnifying-glass "></i> จ้างช่าง</h3>
                                          <br />
                                        </button>
                                      </Link>
                                  </center>
                                </article>
                            <br />
                </section>    
            </section>
        </header>

        <br / >

        <main className="container  text-content">
          {/* content in main page by.NTP  */}
          <br />
           <section>
              <header style={{textAlign:"center"}}> 
                <h3>บริการแนะนำ</h3> 
              </header>

              <br />
              <center>
                {/* block2 : บริการแนะนำ  */}
                <section className="container cardpage2">
                    <section className="card "
                    style={{ width: "100%", height: "220px" ,overflowX:"auto",overflowY:"hidden" ,border:"none"}}>

                      <center>
                         <section className="card-body">
                        
                        <div className="d-flex flex-nowrap justify-content-center">
                          <p>
                             <img className="rounded-circle bgs-r1" src={require("../Photo/s2.jpg")} alt="..." /> 
                             <br />ทำความสะอาด
                          </p>
                          <p>
                             <img className="rounded-circle bgs-r1" src={require("../Photo/s3.jpg")} alt="..." /> 
                             <br />ล้างแอร์
                          </p>
                          <p>
                             <img className="rounded-circle bgs-r1" src={require("../Photo/s4.jpg")} alt="..." /> 
                             <br />ซ่อมเครื่องใช้ไฟฟ้า
                          </p>
                          <p>
                             <img className="rounded-circle bgs-r1" src={require("../Photo/s5.jpg")} alt="..." /> 
                             <br />ดูดฝุ่น
                          </p>
                          <p>
                             <img className="rounded-circle bgs-r1" src={require("../Photo/s6.jpg")} alt="..." /> 
                             <br />ฆ่าเชื้อ
                          </p>
                          <p>
                             <img className="rounded-circle bgs-r1" src={require("../Photo/s7.jpg")} alt="..." /> 
                             <br />ไอที
                          </p>
                        </div>
                      </section>
                      </center>
                    </section>
                </section>
                
              </center>
           </section>
            <br />

        </main>

        <br />

        <main>
            {/* block3 : */}
            <section className="container-fluid bgs2 text-content"  >
                    <br / >
                    <section className="container">
                       {/* Banner A : for use in desktop
                      <article className="card banner-a ">
                      </article> */}
                      {/* ############################# */}

                      <article className="row align-items-md-stretch">
                              <div className="col-md-5">
                                <div className="h-100 p-4 text-bg-dark ">
                                  <h3>4 ขั้นตอนง่ายๆ ใช้บริการช่างผ่าน HOMEMA</h3>
                                  <br />

                                  <h3>1. เลือกบริการ</h3>
                                    <p>เลือกใช้บริการงานช่างที่ต้องการได้</p>

                                  <h3>2. เลือกช่างมืออาชีพ</h3>
                                    <p>เราคัดสรรช่างที่มีประสบการณ์มากกว่า 5 ปีพร้อมรีวิวจากลูกค้าจริง เพื่อให้คุณมั่นใจได้สูงสุด</p>

                                  <h3>3. ปรึกษาและนัดหมาย</h3>
                                    <p>พูดคุยรายละเอียดงาน ค่าบริการ และนัดหมายกับช่างได้โดยตรง</p>
                                    
                                  <h3>4. รับประกันจาก HOMEMA</h3>
                                    <p>ปลอดภัยและวางใจได้ว่างานเสร็จ 100% หากพบปัญหา เราพร้อมช่วยเหลือคุณเสมอ</p>
                                </div>
                              </div>
                              <div className="col-md-7">
                                <center>
                                  <br/>
                                  <br/>
                                  <div className=" card banner">
                                  </div>

                                </center>
                                
                              </div>
                              
                      </article>
                      {/* ############################# */}
                      <br/>
                    </section>
            </section>
            <br />
            {/* block4 :  */}
            <section className="container-fluid"  >
                  <section className="container">
                    <article className="p-4 mb-4 bg-div-tertiary rounded-3">
                          <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">About us</h1>
                              <p className="col-md-8 fs-4">
                              บริษัทนี้มีคณะงานช่างที่มีความชำนาญในการซ่อมแซมและบำรุงรักษาทรัพย์สินของลูกค้า 
                              เช่น งานประปา, งานไฟฟ้า, งานบ้านและสวน, การซ่อมแซมอุปกรณ์หรือเครื่องมือ, 
                              งานสี, งานไม้, และงานหลายอย่างอื่น ๆ ที่เกี่ยวข้องกับการบำรุงรักษาและซ่อมแซม.
                              </p>
                            <button className="btn btn-warning btn-lg fw-bold" type="button">
                              Contact us
                            </button>
                            </div>
                    </article>
                    <br/>
                  </section>
            </section>
            <br />
             <footer className="pt-3 mt-4 text-div-secondary border-top container">
              Homma.company © 2023
            </footer>
            <br/>

        </main>
          
           
        
       
    </>
  );
}
