import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { InputForm } from './components/InputForm.js'
import { JobDetails } from './components/JobDetails.js'
import { Preview } from './components/Preview.js'

class App extends Component {
  state = {listing: [],
    message: "hi"
  }

  setMessage = (event) => {
    event.preventDefault()
    console.log('setting message')
    this.setState({message: "Your application was submitted!"})
  }

  updatePreview() {
    console.log('preview function')
    const previewBox = document.querySelector('#application-preview');
    const text = document.querySelector('#application-text').value;
    previewBox.textContent = text;
  }

  componentDidMount() {
    console.log('mounting')
    fetch('./listing.json')
      .then(response => response.json())
      .then(data => {
        this.setState({listing: data})
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails listing={this.state.listing}/>
          <InputForm updatePreview={this.updatePreview} setMessage={this.setMessage} message={this.state.message}/>
          <Preview />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
