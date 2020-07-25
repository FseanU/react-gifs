import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [ ],
      selectedGifId: "v6aOjy0Qo1fIA"
    };
  }

  search = (query) => {
    giphy('3oRZIiI2kfRptrUyBHSi0cKwZ95rcneB').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} selectGif={this.selectGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
