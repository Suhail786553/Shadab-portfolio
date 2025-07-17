// @flow strict
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0d1224] text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My Portfolio
        </p>
      </div>
    </footer>
  );
}

export default Footer;
