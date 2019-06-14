// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../../constants/routes';
import styles from './style.scss';

const imgSrc = require("../../../../imgs/3.jpg");

export default class Home extends Component {

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <img src={imgSrc} style={{width:'100px',height:'100px'}}/>
        <i className="iconfont icon-xiuli" style={{fontSize:'50px'}}/>  
      </div>
    ); 
  }
}
