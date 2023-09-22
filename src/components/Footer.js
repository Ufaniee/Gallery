import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your App Name</p>
      <p>
        Designed by <a href="https://github.com/ufaniee">Anietie Joseph</a>
      </p>
    </footer>
  );
};;

export default Footer;
