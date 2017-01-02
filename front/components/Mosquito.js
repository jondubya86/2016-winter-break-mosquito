import React from 'react';
import {Layer, Stage, Image} from 'react-konva';
// import KillCount from './KillCount';

var Mosquito = React.createClass({
    getInitialState() {
      return {
        image: null, score: 0
      };
    },
    handleClick() {
      this.setState({
        score: this.state.score+=1
      });
    },
    componentDidMount() {
      const image = new window.Image();
      image.src = 'http://i.imgur.com/NDjimYP.png';
      image.onload = () => {
        this.setState({
          image: image
        })
      }
    },
    render() {
        return (
            <Image 
              x={Math.floor(Math.random() * (745 - 1) + 1)} 
              y={Math.floor(Math.random() * (545 - 1) + 1)} 
              width={50} 
              height={50}
              shadowBlur={5}
              image={this.state.image}
              onClick={this.handleClick} />
        );
    }
})

module.exports = Mosquito;