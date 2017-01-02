import React from 'react';
import {Layer, Stage, Image} from 'react-konva';

var CanvasBg = React.createClass({
    getInitialState() {
      return {
        image: null
      };
    },
    componentDidMount() {
      const image = new window.Image();
      image.src = 'http://i.imgur.com/DJ0WfDN.jpg';
      image.onload = () => {
        this.setState({
          image: image
        })
      }
    },
    render() {
        return (
            <Image 
              width={1260} 
              height={570}
              image={this.state.image}
            />
        );
    }
})

module.exports = CanvasBg;