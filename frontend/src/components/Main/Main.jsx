import React from 'react';
import Table from '../Table/Table';
import './Main.css'
import img from "../../slide2-l.jpg";
import img2 from "../../main2.jpg";


function Main() {
  return (
  <>
  <div className='main-img' style={{background: `center/cover url(${img2}) no-repeat`}}></div>
  {/* <div className='main-img'>
    <img src={img2}/>
  </div> */}
  </>
  );
}

export default Main;
