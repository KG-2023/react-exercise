// import React from 'react'
/* Arrow function syntax
const Header = () => {
  return (
    <div>
        <header>
            <h1 style={{textAlign:'center'}}>To-Do-App</h1>
        </header>
    </div>
  )
}
*/

/* Function declaration syntax*/
/*
function Header() {
  return (
    <div>
      <header>
      <h1 style={{ textAlign: 'center' }}>RBSL To-Do-App</h1>
    </header></div>
  )
}

*/


/* Class Based Component Syntax*/

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 style={{ textAlign: 'center' }}>RBSL To-Do-App</h1>
        </header>
      </div>
    )
  }
}



// export default Header