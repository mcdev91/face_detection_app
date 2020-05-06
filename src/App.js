import React, { Component } from 'react';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

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

const initialState = {
  input: '',
  imageUrl: '',
  box: [],
  route: 'signin',
  isSignedIn: false,
  showImage: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data, i) => {
    let clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
    let image = document.getElementById('inputimage');
    let width = Number(image.width);
    let height = Number(image.height);
    return {
      leftcol: clarifaiFace.left_col * width - 10,
      toprow: clarifaiFace.top_row * height - 10,
      rightcol: width - (clarifaiFace.right_col * width + 10),
      bottomrow: height - (clarifaiFace.bottom_row * height + 10)
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

  pressEnter = (event) => {
    if (event.keyCode === 13) {
      this.submitForm();
    }
  }

  onButtonSubmit = () => {
    this.submitForm();
  }


  submitForm = () => {
    this.setState({
      box: [],
      imageUrl: this.state.input,
      showImage: true
    });
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
      .then(response => {
        for (let i = 0; i < response.outputs[0].data.regions.length; i++) {
          this.displayFaceBox(this.calculateFaceLocation(response, i))
        }
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {
                entries: count
              }))
            })
            .catch(console.log)
        }
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
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
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                pressEnter={this.pressEnter}
              />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} showImage={this.state.showImage} />
            </div>
            : (
              this.state.route === "signin"
                ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;