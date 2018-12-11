import React from 'react';
import Assets from './Assets.jsx';
import { CompanyName, Share, Cost } from '../../../css/styles.jsx';

const Investment = ({ investment }) => (
  <div>
    <CompanyName>
      {investment.name} 
      <Share>{investment.quantity}</Share>
      <Cost>{`$  ${investment.cost.$}`}</Cost>
    </CompanyName>
    <Assets assets={investment.issued_assets} /> 
  </div>
);

export default Investment;
