import React from 'react';

import i1 from './images/image1.jpg'
import i2 from './images/image2.jpg'
import i3 from './images/image3.jpg'
import i4 from './images/image4.jpg'
import i5 from './images/image5.jpg'


function User() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="content-row">
          <div className="content">
         <img src={i1} className="picture"/>
          </div>
          <div className="content">
            <img src={i2} className="picture"/>
          </div>
          <div className="content">
            <img src={i3} className="picture"/>
          </div>
          <div className="content">
            <img src={i4} className="picture"/>
          </div>
          <div className="content">
            <img src={i5} className="picture"/>
          </div>
            

        </div>
      </div>
    </div>
  );
}

export default User;