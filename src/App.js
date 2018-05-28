import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div name="body" class="w3-light-grey">
          <div class="jumbotron text-center">
            <h1>My First Bootstrap Page</h1>
            <p>Resize this responsive page to see the effect!</p>
          </div>
          
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor..</p>
                <p>Ut enim ad..</p>
              </div>
              <div class="col-sm-4">
                <h3>Column 2</h3>
                <p>Lorem ipsum dolor..</p>
                <p>Ut enim ad..</p>
              </div>
              <div class="col-sm-4">
                <h3>Column 3</h3>
                <p>Lorem ipsum dolor..</p>
                <p>Ut enim ad..</p>
              </div>
            </div>
          </div>


          <footer class="w3-container w3-pale-green w3-center w3-margin-top">
            <p>Social media</p>
            <p>Alejandro Gálvez</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
