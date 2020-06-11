import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'index.js';
import styles from './mystyle.css';
import PropTypes from 'prop-types';

function App(Props) {

  return
  (<table>
   {productsTable.map((category, name, price) => {

    return (
        <tr>
          <td>{Props.category}</td>
          <td>{Props.name}</td>
          <td>{Props.price}</td>
        </tr>
    )}
      </table>
  })

}

ReactComponent.PropTypes={
  category,name:PropTypes.string,
  price:PropTypes.number

};

export default App;
