import React from 'react';
import Github from '../../icons/github';
import Stitches from '../../icons/stitches';

const Footer = () => {
  return (
    <div className="w-full bg-gray-300 py-4 mt-12">
      <div className="container flex text-sm text-tailwind font-medium">
        <div className="w-1/2 text-left">
          <a
            href="https://stitches.dev/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center"
          >
            <Stitches />
            <span className="ml-2">Stitches</span>
          </a>
        </div>
        <div className="w-1/2 text-right">
          <a
            href="https://github.com/michalhonc/figma-stitches"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center"
          >
            <Github />
            <span className="ml-2">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
