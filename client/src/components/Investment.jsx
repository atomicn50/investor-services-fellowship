import React from 'react';
import { CompanyName, Share, Cost } from '../../../css/styles.jsx';

const Investment = ({ investment }) => (
  <div>
    <CompanyName>
      {investment.name} 
      <Share>{investment.quantity}</Share>
      <Cost>{`$  ${investment.cost.$}`}</Cost>
    </CompanyName>  
  </div>
);

export default Investment;
