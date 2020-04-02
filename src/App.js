import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '12ad7e15d6e542b889f75d650c185154'
});

const particleprams = {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 700
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
      box: [],
      route: 'signin',
      isSignedIn: false,
      showImage: false
    }
  }

  calculateFaceLocation = (data, i) => {
    let clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
    let image = document.getElementById('inputimage');
    let width = Number(image.width);
    let height = Number(image.height);
    return {
      leftcol: clarifaiFace.left_col * width -10,
      toprow: clarifaiFace.top_row * height -10,
      rightcol: width - (clarifaiFace.right_col * width +10),
      bottomrow: height - (clarifaiFace.bottom_row * height +10)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({
      box: [...this.state.box, box]
    });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({
      box: [],
      imageUrl: this.state.input,
      showImage: true
    });
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

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particleprams} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {
          this.state.route === "home"
            ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} showImage={this.state.showImage} />
            </div>
            : (
              this.state.route === "signin"
                ? <SignIn onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} />
            )

        }
      </div>
    );
  }
}

export default App;