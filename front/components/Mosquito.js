import React from 'react';
import {Layer, Stage, Image} from 'react-konva';

var Mosquito = React.createClass({
    getInitialState() {
      return {
        image: null, score: 0
      };
    },
    handleClick() {
      this.setState({score: this.state.score+=1
      });
    },
    componentDidMount() {
      const image = new window.Image();
      image.src = 'http://i.imgur.com/NDjimYP.png';
      image.onload = () => {
        this.setState({image: image
        })
      }
    },
    render() {
        return (
            <Image id='mosquito'
              x={Math.floor(Math.random() * (1200 - 1) + 1)} 
              y={Math.floor(Math.random() * (500 - 1) + 1)} 
              width={60} 
              height={60}
              shadowBlur={7}
              image={this.state.image}
              onClick={this.handleClick} />
        );
    }
})

export default Mosquito;