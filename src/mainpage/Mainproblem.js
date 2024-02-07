import React,{useState} from "react";
import "../styles/Mainproblem.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SubproblemList1 from "./Subproblem/SubproblemList1";
import SubproblemList2 from "./Subproblem/SubproblemList2";
import SubproblemList3 from "./Subproblem/SubproblemList3";
import SubproblemList5 from "./Subproblem/SubproblemList5";
import SubproblemList4 from "./Subproblem/SubproblemList4";
import SubproblemList6 from "./Subproblem/SubproblemList6";
// import ProtectedData from "../ProtectedData";

const Mainproblem = () => {

  const [x, setX] = useState(0);

  function addcase(newx){
    setX(x + newx);
  }

  switch (x) {
    case 1:
      return <SubproblemList1 />;
    case 2:
      return  <SubproblemList2 />;
    case 3:
      return (
        <SubproblemList3 />
      );
    case 4:
      return (
        <SubproblemList4 />
      );
    case 5:
      return (
        <SubproblemList5 />
      );
    case 6:
      return (
        <SubproblemList6 />
      );
    default:
      return (
        <>
        <Navbar />
          <br/>
            <main className="container card cardwidthscope">
              <div className="text-content card-body">
                <center>
                   <h3 >
                      &nbsp; &nbsp; &nbsp; &nbsp; แจ้งงานซ่อม
                  </h3>
                </center>
               
              <br/>
                <div className="col" >
                  <Link
                    className="btn btn-warning  btn-lg"
                    style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%"  }}
                    onClick={() => addcase(1)}
                  >
                    <h5 className="text-light" style={{fontSize:"22.5px"}}>
                      <i
                        className="problem-text2 fas fa-faucet"
                        style={{ color: "white", fontSize: "28.5px" }}
                      ></i>
                      &nbsp; &nbsp; ระบบน้ำ
                    </h5>
                    </Link>
                </div>
      
              <br />
      
              <div className="col" >
                
                <Link
                className="btn btn-warning  btn-lg"
                  onClick={() => addcase(2)}
                  style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}>
      
                           <h5 className="text-light" style={{fontSize:"22.5px"}}>
                    <i className="problem-text2 fa-solid fa-lightbulb" style={{ color: "white", fontSize: "28.5px" }}></i>
                    &nbsp; &nbsp; ระบบไฟ
                  </h5>
                  </Link>
              </div>
      
              <br />
      
              <div className="col" >
                
                <Link
                className="btn btn-warning  btn-lg"
                  onClick={() => addcase(3)}
                  style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}
                >
              
                  <h5 className="text-light" style={{fontSize:"22.5px"}}>
                    <i
                      className="problem-text2 fa-solid fa-plug "
                      style={{ color: "white", fontSize: "28.5px" }}
                    ></i>
                     &nbsp; &nbsp; เครื่องใช้ไฟฟ้า
                  </h5>
                </Link>
              </div>
      
              <br />
      
              <div className="col" >
                <Link
                className="btn btn-warning  btn-lg"
                  onClick={() => addcase(4)}
                  style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}
                >
              
                  <h5 className="text-light" style={{fontSize:"22.5px"}}>
                    <i
                      className="problem-text2 fa-solid fa-house "
                      style={{ color: "white", fontSize: "28.5px" }}
                    ></i>
                     &nbsp; &nbsp; โครงสร้าง
                  </h5>
                </Link>
              </div>
      
              <br />
      
              <div className="col" >
                
                <Link
                  className="btn btn-warning  btn-lg"
                  onClick={() => addcase(5)}
                  style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}
                >
              
                  <h5 className="text-light" style={{fontSize:"22.5px"}}>
                    <i
                      className="problem-text2 fa-solid fa-screwdriver-wrench"
                      style={{ color: "white", fontSize: "28.5px" }}
                    ></i>
                     &nbsp; &nbsp; บริการและซ่อมบำรุง
                  </h5>
                </Link>
              </div>
      
              <br />
              <div className="col" >
                <Link
                  className="btn btn-warning  btn-lg"
                  onClick={() => addcase(6)}
                  style={{ textDecoration: "none" ,width:"100%" ,height:"100%" ,padding:"1.5%" }}
                >
                  <h5 className="text-light" style={{fontSize:"22.5px"}}>
                    <i
                      className="problem-text2 fa-solid fa-wrench"
                      style={{ color: "white", fontSize: "28.5px" }}
                    ></i>
                     &nbsp; &nbsp; เบ็ดเตล็ด
                  </h5>
                </Link>
              </div><br /><br /><br />
            </div>
            </main>
            <br />
            
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="logo"></div>
                    <p>Email: info@HOMEMA.net</p>
                    <p>เลขที่ 5** ชั้น 1 ถนน - แขวง - เขต - กรุงเทพมหานคร 10232.5</p>
                  </div>
                  <div className="col-md-3">
                    <h5>HOMEMA</h5>
                    <p>Some content here.</p>
                  </div>
                  <div className="col-md-3">
                    <h5>ช่วยเหลิอ</h5>
                    <p>Some content here.</p>
                  </div>
                  <div className="col-md-3">
                    <h5>ช่วยเหลิอ</h5>
                    <h5>ช่วยเหลิอ</h5>
                    <p>Some content here.</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <p>&copy; Copyright 2015</p>
              </div>
            </footer>
      
            
        </>
      );
      
  }

};

export default Mainproblem;
