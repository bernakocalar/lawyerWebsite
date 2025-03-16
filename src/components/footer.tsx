import { AddressBook, EnvelopeSimple, Phone } from "@phosphor-icons/react";

const Footer: React.FC = () => {
    return (
        <div className="footer-content">
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
          <div className="footerNav">
            <li><a href="/about.tsx">Hakkımızda</a></li>
            <li><a href="/team.tsx">Ekibimiz</a></li>
            <li><a href="/services.tsx">Hizmetlerimiz</a></li>
            <li><a href="/communication.tsx">İletişim</a></li>
          </div>
          </div>
    
    );
  };
  
  export default Footer;
  