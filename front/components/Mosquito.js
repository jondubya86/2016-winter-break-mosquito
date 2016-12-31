import React from 'react';
import {Layer, Stage, Image} from 'react-konva';

var Mosquito = React.createClass({
    getInitialState() {
      return {
        image: null, score: 0
      };
      this.handleClick = this.handleClick.bind(this);
    },
    handleClick() {
      this.setState({
        score: this.state.score+=1
      });
    },
    componentDidMount() {
      const image = new window.Image();
      image.src = 'http://rincondelecturas.com/lecturas/30063-por-que-dan-comezon-los-piquetes-de-mosquito/images/por-que-dan-comezon-los-piquetes-de-mosquito.png';
      image.onload = () => {
        this.setState({
          image: image
        })
      }
    },
    render() {
      console.log(this.state.score)
        return (
            <Image
              x={Math.ceil(Math.random() * (745 - 1) + 1)} 
              y={Math.ceil(Math.random() * (545 - 1) + 1)} 
              width={50} 
              height={50}
              shadowBlur={15}
              image={this.state.image}
              onClick={this.handleClick}
            />
        );
    }
})

module.exports = Mosquito;