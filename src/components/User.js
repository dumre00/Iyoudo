import React from 'react';

import i1 from './images/image1-square.png'
import i2 from './images/image2-square.png'
import i4 from './images/image4-square.png'
import i5 from './images/image5-square.png'
import sc from './images/carrito-de-compras.png';
import cl from './images/cleaning.png';
import car from './images/coche.png';
import pt from './images/pata.png';
import wk from './images/viejo.png';
import star from './images/estrella.png'
import hstar from './images/estrella-half.png'


function User() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="content-row">
          <div className="content">
            <img src={i1} className="picture"/>
            <p> <b>Nombre:</b> Ana<br/> <b>Edad:</b> 19<br/> <b>Distancia: </b>5km<br/> <b>Servicios: </b></p>
            <img src={sc} className="icon"/>
            <span> Compra <br/> </span>
            <img src={cl} className="icon"/>
            <span> Limpieza del hogar <br/> </span>
            <span> <br/> <b>Valoración:</b> </span>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <div className="bluebox">
              <p className="overtext">Contacta: +34 123456789</p>
            </div>
          </div>
          <div className="content">
          <img src={i2} className="picture"/>
            <p> <b>Nombre:</b> Jordi<br/> <b>Edad:</b> 22<br/> <b>Distancia: </b>15km<br/> <b>Servicios: </b></p>
            <img src={car} className="icon"/>
            <span> Transporte <br/> </span>
            <img src={pt} className="icon"/>
            <span> Cuidado de mascotas <br/> </span>
            <span> <br/> <b>Valoración:</b> </span>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={hstar} className="hstar"/>
            <div className="bluebox">
              <p className="overtext">Contacta: +34 123456789</p>
            </div>
          </div>
          <div className="content">
          <img src={i4} className="picture"/>
            <p> <b>Nombre:</b> Zhang Wei<br/> <b>Edad:</b> 27<br/> <b>Distancia: </b>20km<br/> <b>Servicios: </b></p>
            <img src={wk} className="icon"/>
            <span> Paseo <br/> </span>
            <img src={sc} className="icon"/>
            <span> Compra <br/> </span>
            <span> <br/> <b>Valoración:</b> </span>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={hstar} className="hstar"/>
            <div className="bluebox">
              <p className="overtext">Contacta: +34 123456789</p>
            </div>
          </div>
          <div className="content">
          <img src={i5} className="picture"/>
            <p> <b>Nombre:</b> Javier<br/> <b>Edad:</b> 24<br/> <b>Distancia: </b>35km<br/> <b>Servicios: </b></p>
            <img src={pt} className="icon"/>
            <span> Cuidado de mascotas <br/> </span>
            <img src={wk} className="icon"/>
            <span> Paseo <br/> </span>
            <img src={sc} className="icon"/>
            <span> Compra <br/> </span>
            <span> <br/> <b>Valoración:</b> </span>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <img src={star} className="star"/>
            <div className="bluebox">
              <p className="overtext">Contacta: +34 123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;