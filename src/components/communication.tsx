import { AddressBook, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import React from "react";

const Communication: React.FC = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <div className="communication">
        <h2>BİZİMLE İLETİŞİME GEÇİN</h2>
        <div className="line"> 
        <div className="icons">
        <Phone size={32} />
        <EnvelopeSimple size={32} />
        <AddressBook size={32} />
        </div>
        <div className="contact">
        <p>0 554 139 25 82</p>
        <p>berna.kocalar@gmail.com</p>
        <p>Merkezefendi/Denizli</p>
        </div>
        </div>  
        <p></p>
        </div>
      </div>
      <div className="rightContainer">
      <img className="teamImage" src="https://picsum.photos/200/300"></img>
      </div>
    </div>
  );
};

export default Communication;
