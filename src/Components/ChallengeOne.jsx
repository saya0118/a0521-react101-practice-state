import React, { Component } from 'react';
import imgLeft from '../Assets/look-left.jpeg';
import imgRight from '../Assets/look-right.jpeg';
//import images

class ChallengeOne extends Component {
  //declare the state here
  state = {
    img: imgLeft,
    status: true
  };

  //click left/right button handler goes here
  btnClick = () => {
    this.state.status ?
     this.setState({
      img: imgRight,
      status: false
     }) : this.setState({
      img: imgLeft,
      status: true
     })
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.img}
            alt=""
          />
        </div>
        <button className="btn" onClick={this.btnClick}>⭠</button>
        <button className="btn" onClick={this.btnClick}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;