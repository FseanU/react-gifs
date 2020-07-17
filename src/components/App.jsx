import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  render () {
    const gifs = [
      { id: "v6aOjy0Qo1fIA" },
      { id: "vFKqnCdLPNOKc" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="v6aOjy0Qo1fIA" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
