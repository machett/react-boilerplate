import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
    }
 ShouldComponentUpdate(nextProps, nextstate) {

    return this.props.id !==  nextProps.id;
  }

  render() {
    console.log("render gif" + this.props.id)
    if (!this.props.id){
      return null;
    }
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
