import React, { Component } from 'react';
import getData from '../utils/data';
import dummyData from '../../../data/dummyData';
import DatePicker from './DatePicker.jsx';
import Header from './Header.jsx';
import Investments from './Investments.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '09',
      day: '18',
      year: '2018',
      data: dummyData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { month, day, year } = this.state;
    getData(month, day, year, (err, response) => {
      if (err) {console.log(err);}
      this.setState({data: response.data})
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick() {
    const {month, day, year} = this.state;
    getData(month, day, year, (err, response) => {
      if (err) {console.log(err);}
      this.setState({data: response.data})
    })
  }

  render() {
    return (
      <div>
        <DatePicker 
          handleChange={this.handleChange} 
          handleClick={this.handleClick} 
        />
        <br />
        <Header />
        <br />
        <br />
        <Investments investmentData={this.state.data} />
      </div>
    );
  }
}

export default App;
