import React from 'react';
import { AssetClass, InvestmentDate, Quantity, AssetCost } from '../../../css/styles.jsx';

const Asset = ({ asset }) => (
  <div>
    <AssetClass>
      {asset.asset_class} 
      <InvestmentDate>{asset.investment_date}</InvestmentDate>
      <Quantity>{asset.quantity}</Quantity>
      <AssetCost>{asset.cost.$}</AssetCost>
    </AssetClass>
  </div>
)

export default Asset;
