import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: studentList,
    index: 0
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({
        arr: studentList
      })
    }, 3000)
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    this.state.arr = this.state.arr.sort(function(){
      return Math.random() - 0.5
    })
  }

 


  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            <li>{this.state.arr}</li>
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
