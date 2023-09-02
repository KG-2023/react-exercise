import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// const myElement = React.createElement('h1', {} , 'I do not use JSX!');

// const mySecondElement = <h1>Hello React!</h1>;

// const myFirstJSX = <h1>React is {5+5} times better with JSX!</h1>;

/*
const largeBlock = ( 
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
*/

const twoParagraphs = (
  <div class="card w-25 d-flex "  >
    <div class="card-body justify-content-between">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  </div>

    <p>I am a test 1 paragraph</p>
    <p>I am a test 2 paragraph</p>
    <button class="btn btn-primary">Test Button</button>
     
  </div>
  
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(twoParagraphs);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
