import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import background from './components/background';
import './scss/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
            <h1 className="header__title">Code_Swirls</h1>
            <span className="header__subtitle">Work in progress.</span>
        </header>
        <P5Wrapper sketch={background} />
      </div>
    );
  }
}

export default Header;
