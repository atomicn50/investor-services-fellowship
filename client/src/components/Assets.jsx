import React from 'react';
import Asset from './Asset.jsx';

const Assets = ({ assets }) => (
  <div>
    {assets.map(asset => <Asset asset={asset} />)}
  </div>
)

export default Assets;