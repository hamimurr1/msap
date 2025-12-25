import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-6 text-center">
      <p>
        © {new Date().getFullYear()} MSAP. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;