import React from 'react';
import Table from '../Table/Table';
import './Main.css'

function Main() {
  return (
  <>
  <div className="flipper" id="target">

    <div className="front">
      {/* <a href="#target" className="home-button">START</a> */}
    </div>

    <div className="back">
      {/* <a href="#close" className="close-button">RESTART</a> */}
        <div className="inner">
          <Table/>
        </div>
    </div>

  </div>
  </>
  );
}

export default Main;