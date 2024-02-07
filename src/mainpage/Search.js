import React from "react";
import "../styles/Search.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
const Search = () => {
  const [selectedProvince, setSelectedProvince] = useState("กรุงเทพมหานคร"); // สร้าง state เพื่อเก็บค่าจังหวัดที่เลือก
  const [selectedDistrict, setSelectedDistrict] = useState("a"); // สร้าง state เพื่อเก็บค่าเขตที่เลือก
  const [selectedCategory, setSelectedCategory] = useState(""); // State สำหรับเก็บหมวดหมู่งานที่เลือก

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value); // เมื่อมีการเลือกใน select จังหวัด ให้อัปเดตค่าใน state
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value); // เมื่อมีการเลือกใน select เขต ให้อัปเดตค่าใน state
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName); // เมื่อคลิกที่รูปภาพหมวดหมู่งานให้เปลี่ยน state ให้เป็นชื่อหมวดหมู่งาน
  };
  const handleResetClick = () => {
    setSelectedProvince("กรุงเทพมหานคร");
    setSelectedDistrict("");
    setSelectedCategory("");
  };
  return (
    <>
      <Navbar />
      <div className="search container">
        <br/>
        <h2>หมวดหมู่งานซ่อม</h2>
        <br/>
        <div className="search-card-container card-container">

          <a href='#indownpage' style={{textDecoration:"none"}}>
            <button className="card ca"   onClick={() => handleCategoryClick("ระบบน้ำ")}>
              <img
                src={require("../Photo/img2.jpg")}
                className="card-img-top p-2 "
                alt="..."
                style={{ width: "100%" ,borderRadius:"10%" }}
              />
              <div className="card-body">
                <center>
                  <p className="card-text">ระบบน้ำ</p>
                </center>
              </div>
            </button>
          </a>

          <a href='#indownpage' style={{textDecoration:"none"}}>
          <button className="card ca" href='#indownpage' onClick={() => handleCategoryClick("ระบบไฟ")}>
            <img
              src={require("../Photo/img2.jpg")}
              className="card-img-top p-2"
              alt="..."
              style={{ width: "100%" ,borderRadius:"10%" }}
            />
            <div className="card-body">
              <center>
              <p className="card-text">ระบบไฟ</p>
              </center>
            </div>
          </button></a>

          <a href='#indownpage' style={{textDecoration:"none"}}>
          <button className="card ca" href='#indownpage' onClick={() => handleCategoryClick("เครื่องใช้ไฟฟ้า")}>
            <img
              src={require("../Photo/img2.jpg")}
              className="card-img-top p-2"
              alt="..."
              style={{ width: "100%" ,borderRadius:"10%" }}
            />
            <div className="card-body">
              <center>
              <p className="card-text">เครื่องใช้ไฟฟ้า</p>
              </center>
            </div>
          </button></a>

          <a href='#indownpage' style={{textDecoration:"none"}}>
          <button className="card ca" href='#indownpage' onClick={() => handleCategoryClick("โครงสร้าง")}>
            <img
              src={require("../Photo/img2.jpg")}
              className="card-img-top p-2"
              alt="..."
              style={{ width: "100%" ,borderRadius:"10%" }}
            />
            <div className="card-body">
              <center>
              <p className="card-text">โครงสร้าง</p>
              </center>
            </div>
          </button></a>

          <a href='#indownpage' style={{textDecoration:"none"}}>
          <button className="card ca" href='#indownpage' onClick={() => handleCategoryClick("บริการและซ่อมบำรุง")}>
            <img
              src={require("../Photo/img2.jpg")}
              className="card-img-top p-2"
              alt="..."
              style={{ width: "100%" ,borderRadius:"10%" }}
            />
            <div className="card-body">
              <center>
              <p className="card-text">บริการและซ่อมบำรุง</p>
              </center>
            </div>
          </button></a>
          
          <a href='#indownpage' style={{textDecoration:"none"}}>
          <button className="card ca" href='#indownpage' onClick={() => handleCategoryClick("เบ็ดเตล็ด")}>
            <img
              src={require("../Photo/img2.jpg")}
              className="card-img-top p-2"
              alt="..."
              style={{ width: "100%" ,borderRadius:"10%" }}
            />
            <div className="card-body">
              <center>
              <p className="card-text">เบ็ดเตล็ด</p>
              </center>
            </div>
          </button></a>

        </div>
        {/* <hr style={{ width: "100%" ,borderRadius:"10%" }} /> */}

        <br/>
        <br/>

        <h3>รายชื่อช่างทั้งหมด</h3>
        <div className="container">

          <label>เลือกพิ้นที่ให้บริการ</label>

          <div className="row">

            <div className="col">
              <select class="form-select form-select-lg" onChange={handleProvinceChange}>
              <option value="" disabled hidden>
                กรุณาเลือกจังหวัด
              </option>
              <option>&nbsp;&nbsp;กรุงเทพมหานคร</option>
            </select>
            </div>

            <div className="col">
              <select class="form-select form-select-lg" onChange={handleDistrictChange}>
              <option value="" disabled hidden>
                กรุณาเลือกเขต
              </option>
              <option>&nbsp;คลองสาน</option>
              <option>&nbsp;คลองสามวา</option>
              <option>&nbsp;คลองเตย</option>
              <option>&nbsp;คันนายาว</option>
              <option>&nbsp;จตุจักร</option>
              <option>&nbsp;จอมทอง</option>
              <option>&nbsp;ดอนเมือง</option>
              <option>&nbsp;ดินแดง</option>
              <option>&nbsp;ดุสิต</option>
              <option>&nbsp;ตลิ่งชัน</option>
              <option>&nbsp;ทวีวัฒนา</option>
              <option>&nbsp;ทุ่งครุ</option>
              <option>&nbsp;ธนบุรี</option>
              <option>&nbsp;บางกอกน้อย</option>
              <option>&nbsp;บางกอกใหญ๋</option>
              <option>&nbsp;บางกะปิ</option>
              <option>&nbsp;บางขุนเทียน</option>
              <option>&nbsp;บางคอแหลม</option>
              <option>&nbsp;บางซื่อ</option>
              <option>&nbsp;บางนา</option>
              <option>&nbsp;บางบาน</option>
              <option>&nbsp;บางรัก</option>
              <option>&nbsp;บางพลัด</option>
              <option>&nbsp;บางเขน</option>
              <option>&nbsp;บางแค</option>
              <option>&nbsp;บึงทุ่ม</option>
              <option>&nbsp;ปทุมวัน</option>
              <option>&nbsp;ประเวศ</option>
              <option>&nbsp;ป้อมปราบศัตรูพ่าย</option>
              <option>&nbsp;พญาไท</option>
              <option>&nbsp;พระนคร</option>
              <option>&nbsp;พระโขนง</option>
              <option>&nbsp;ภาษีเจริญ</option>
              <option>&nbsp;มีนบุรี</option>
              <option>&nbsp;ยานนาวา</option>
              <option>&nbsp;ราชเทวี</option>
              <option>&nbsp;ราษฎร์บูรณะ</option>
              <option>&nbsp;ลาดกระบัง</option>
              <option>&nbsp;ลาดพร้าว</option>
              <option>&nbsp;วังทองหลาง</option>
              <option>&nbsp;วัฒนา</option>
              <option>&nbsp;สวนหลวง</option>
              <option>&nbsp;สะพานสูง</option>
              <option>&nbsp;สัมพันธวงศ์</option>
              <option>&nbsp;สาทร</option>
              <option>&nbsp;สายไหม</option>
              <option>&nbsp;หนองจอก</option>
              <option>&nbsp;หนองแขม</option>
              <option>&nbsp;หลักสี่</option>
              <option>&nbsp;ห้วยขวาง</option>
            </select>
            </div>
            
          </div>

          <br/>

          <div className="row " id="indownpage">

                <label>บริการและพื้นที่ที่คุณกำลังเลือก:</label>

                <div className="col-10"> 
                    <input
                      className="form-control"
                      type="text"
                      placeholder={`ทั้งหมด| ${selectedCategory}| ${selectedProvince} | ${selectedDistrict}`}
                    />
                </div>

                <div className="col-1"> 
                    <button className="btn btn-success" onClick={handleResetClick}>
                      รีเซ็ต
                    </button>
                </div>
          </div>
        </div>
        <br />

        <div className="container"> 

            <div className="card cas">

              <div className="card-body">
                <center></center>
              
                <div className="row">
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                                  <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    alt="user"
                                    className="profile-photo-lg"
                                    style={{ border: "1px solid black" }}
                                  />
                      </div>

                      <div className="col-md-7 col-sm-7">
                                  <h5>
                                    <a href="a" className="profile-link">
                                      <p>จารย์แดงเจ้าเก่า</p>
                                    </a>
                                  </h5>
                                  <p>
                                    <i className="fa-solid fa-location-dot"></i>กรุงเทพมหานคร
                                  </p>
                                  <p className="text-muted">
                                    รายละเอียดผู้ให้บริการ งานช่างทั่วไป งานตกแต่ง งานพื้น
                                    ผ่านงานรีโนเวท ออฟฟิศ ปรับปรุงงานระบบ
                                    ใส่ใจการบริการหลังซ่อมแซม รับประกันความพึงพอใจของลูกค้า.
                                  </p>
                      </div>

                      <div className="col-md-3 col-sm-3">
                                  <p className="text-muted">
                                    ช่องทางการติดต่อ <br />
                                    <i className="fa-solid fa-phone"></i> 085-020-8678
                                  </p>
                                  <p className="text-muted">
                                    รีวิว
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    (4.5)
                                    <br />
                                    <button
                                      className="btn btn-warning pull-right"
                                      style={{ marginTop: "5px" }}
                                    >
                                      รายละเอียดเพิ่มเติม
                                    </button>
                                  </p>
                      </div>
                    </div>
                </div>
              
              </div>

            </div>

            <br />

            <div className="card cas">

              <div className="card-body">
                <center></center>
              
                <div className="row">
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                                  <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    alt="user"
                                    className="profile-photo-lg"
                                    style={{ border: "1px solid black" }}
                                  />
                      </div>

                      <div className="col-md-7 col-sm-7">
                                  <h5>
                                    <a href="a" className="profile-link">
                                      <p>จารย์แดงเจ้าเก่า</p>
                                    </a>
                                  </h5>
                                  <p>
                                    <i className="fa-solid fa-location-dot"></i>กรุงเทพมหานคร
                                  </p>
                                  <p className="text-muted">
                                    รายละเอียดผู้ให้บริการ งานช่างทั่วไป งานตกแต่ง งานพื้น
                                    ผ่านงานรีโนเวท ออฟฟิศ ปรับปรุงงานระบบ
                                    ใส่ใจการบริการหลังซ่อมแซม รับประกันความพึงพอใจของลูกค้า.
                                  </p>
                      </div>

                      <div className="col-md-3 col-sm-3">
                                  <p className="text-muted">
                                    ช่องทางการติดต่อ <br />
                                    <i className="fa-solid fa-phone"></i> 085-020-8678
                                  </p>
                                  <p className="text-muted">
                                    รีวิว
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    (4.5)
                                    <br />
                                    <button
                                      className="btn btn-warning pull-right"
                                      style={{ marginTop: "5px" }}
                                    >
                                      รายละเอียดเพิ่มเติม
                                    </button>
                                  </p>
                      </div>
                    </div>
                </div>
              
              </div>

            </div>

            <br/>
        
        </div>

      
      
      </div>
    </>
    
  );
};
export default Search;
