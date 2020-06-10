import React from 'react';
import ReactDOM from 'react-dom';
import MyStyle from './App.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



  productsTable = [{category: "Electronics",name:"imprimante",price:"120"},
  {category: "Electronics",name:"PC",price:"1200"},
  {category: "Clothes",name:"Jacket",price:"180"}];
 

 







ReactDOM.render(
  <React.StrictMode>
    <App productstable={productsTable} />
  </React.StrictMode>,
 

 ReactDOM.render(<MyStyle />, document.getElementById('root')),
ReactDom.render(productsTable,document.getElementById('root')),

  
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
