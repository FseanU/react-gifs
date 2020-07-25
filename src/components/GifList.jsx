import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map((gif) => {
      return (
        <Gif
          id={gif.id}
          key={gif.id}
          selectGif={this.props.selectGif}
        />
      );
    });
  }

  render () {
    console.log(this.props.selectGif);
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
