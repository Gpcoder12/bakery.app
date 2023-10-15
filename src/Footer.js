import React from 'react';
import'./footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Sweet Harmony</p>
          </div>
          <div className="col-md-6 text-right">
            <p>Contact: gops@sweetharmonybakery.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
