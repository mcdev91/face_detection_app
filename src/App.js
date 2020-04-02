import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
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
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  calculateFaceLocation = (data, i) => {
    const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width - 20,
      topRow: clarifaiFace.top_row * height - 20,
      rightCol: width - (clarifaiFace.right_col * width + 20),
      bottomRow: height - (clarifaiFace.bottom_row * height + 20)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box })
  }

  onInputCHange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => {
        for (let i = 0; i < response.outputs[0].data.regions.length; i++) {
          this.displayFaceBox(this.calculateFaceLocation(response, i))
        }
      }
      )
      .catch(err => console.log(err));
  }

  onRouteChange = () => {
    this.setState({ route: 'home' });
  }

  render() {
    return (
      <div className='App'>
        <Particles className="particles"
          params={ParticlesOptions}
        />
        <Navigation />
        {this.state.route === 'signin' ?
          <SignIn onRouteChange={this.onRouteChange} />
          : <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputCHange={this.onInputCHange}
              onButtonSubmit={this.onButtonSubmit}

            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
        }
      </div>
    );
  }
}

export default App;
