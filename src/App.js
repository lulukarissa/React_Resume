import React, { Component } from 'react';
import Nav from './Komponen/Nav'
import Resume from './Komponen/Resume'

class App extends Component {
  render() {
    return (
     <div id="page-top">
       <Nav/>
       <Resume/>
     </div>
    );
  }
}

export default App;
