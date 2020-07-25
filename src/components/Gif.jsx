import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id);
  };

  render () {
    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    console.log(this.props.id);
    return (
      <img
        src={src}
        alt=""
        className="gif"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
