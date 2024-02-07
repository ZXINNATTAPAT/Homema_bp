import React, { useState } from 'react';
import Navbar from './Navbar';

function Forum() {
  const [elements, setElements] = useState([]);
  
  const addElement = () => {
    // สร้างอิลิเมนต์ <div> ใหม่
    const newDiv = document.createElement("div");
    
    // กำหนดข้อความในอิลิเมนต์
    newDiv.innerHTML = "<br> Tel = 006-123-12593 <br> Homema@gmail.com ";
    
    // เพิ่มอิลิเมนต์ใหม่ลงใน DOM
    document.getElementById("containerforum").appendChild(newDiv);
    
    // เพิ่มอิลิเมนต์ใหม่ลงใน state ของ React
    setElements([...elements, newDiv]);

    //เปลี่ยนสี
    document.getElementById('id1').style.color = 'orange' ;
    

  }
  
  return (
    <>
    <Navbar />
    <div  className='container-fluid'>
        <div className='position-absolute top-50 start-50 translate-middle'>

            <center>
                <h1 id='id1' className="fw-bold">
                    <strong>Homema.company</strong>
                </h1>

                <button className='btn btn-warning fw-bold' 
                    onClick={addElement}>
                        <strong>Show Contact</strong>
                </button>
                

                <div id="containerforum" className='fw-bold'>

                </div>
            </center>

            

        </div>
    </div>
    </>
    
  );
}

export default Forum;
