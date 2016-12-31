import React from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import Mosquito from './Mosquito';


var CanvasComponent = React.createClass({
    getInitialState() {
      return {
        showgame: false
      };
    },
    startGame() {
        this.setState({showgame:true})
        setInterval(()=>this.setState({showgame:false}),30000)
    },
    render() {
        console.log(this.state.timer)
        return (
            <div>
            <div>
            <button onClick={this.startGame}>Start Game</button> 
            </div>
            {(this.state.showgame!=false)?
            <div>
            <Stage width={800} height={600}>
                <Layer>
                    <Mosquito/>
                </Layer>
            </Stage>
            </div>:
            <h1>Waiting for player to start game...</h1>}
            </div>
        );
    }
})

module.exports = CanvasComponent;