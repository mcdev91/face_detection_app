import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '12ad7e15d6e542b889f75d650c185154'
});

const ParticlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputCHange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function (err) {
          // there was an error
        }
      );
  }

  render() {
    return (
      <div className='App'>
        <Particles className="particles"
          params={ParticlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputCHange={this.onInputCHange}
          onButtonSubmit={this.onButtonSubmit}

        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;