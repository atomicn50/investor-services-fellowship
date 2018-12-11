import React from 'react';
import Investment from './Investment.jsx';

const Investments = ({ investmentData }) => {
  return (
    <div>
      {investmentData.map(investment => <Investment investment={investment} />)}
    </div>
  );
}

export default Investments;
