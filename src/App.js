import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'index.js';
import styles from './mystyle.css';
import PropTypes from 'prop-types';

function App(Props) {

  return productsTable.map((category, name, price) => {

    return (
      <table>
        <tr>

          <td>{Props.category}</td>
          <td>{Props.name}</td>
          <td>{Props.price}</td>

        </tr>
        <tr>

          <td>{Props.category}</td>
          <td>{Props.name}</td>
          <td>{Props.price}</td>

        </tr>

        <tr>

          <td>{Props.category}</td>
          <td>{Props.name}</td>
          <td>{Props.price}</td>

        </tr>


      </table>

    )
  })






}


class MyStyle extends React.Component{


  render(){

  return <h1 className={styles.bigblue}>Welcome to my first props page! </h1>
}

}
export default MyStyle;




ReactComponent.PropTypes={


  category,name:PropTypes.string,
  price:PropTypes.number

};

export default App;
