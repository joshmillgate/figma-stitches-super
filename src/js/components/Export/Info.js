import React from 'reactn';
import { Link } from 'react-router-dom';

const Info = () => {
  const theme = `'./theme'`;
  const overWrite = `module.exports = {
  theme: {
    colors: {
      theme.colors
    }`;
  const extend = `module.exports = {
  theme: {
    colors: {
      gray: {
        100: #f7fafc',
        200: '#edf2f7',
      },
      ...theme.colors
    }
  `;
  return (
    <div className="row">
      <div className="col flex">
        <div className="w-full border-b border-gray-200 py-4">
          <h2 className="t-beta">Usage</h2>
          <p className="intro">
            Everything you need to know to get you started
          </p>
        </div>
      </div>
      <div className="col flex justify-between mt-8">
        <Link to="/export" className="button button--green">
          Previous
        </Link>
      </div>
    </div>
  );
};

export default Info;
