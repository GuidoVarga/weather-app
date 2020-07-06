import React from "react";
import './footer.scss';
const Footer = ({nombre, apellido}) => (
    <footer>
        <div className="footer">
            <label>{nombre}</label>
            <label>{apellido}</label>
        </div>
    </footer>
);
export default Footer;