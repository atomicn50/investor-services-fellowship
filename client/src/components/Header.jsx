import React from 'react';
import { HeaderStyle, ColumnOne, ColumnTwo, ColumnThree, ColumnFour, ColumnFive } from '../../../css/styles.jsx';

const Header = () => (
  <HeaderStyle>
    <ColumnOne>Investment</ColumnOne> 
    <ColumnTwo>Asset</ColumnTwo>
    <ColumnThree>Investment Date</ColumnThree>
    <ColumnFour>Shares</ColumnFour>
    <ColumnFive>Cost</ColumnFive>
  </HeaderStyle>
);

export default Header;