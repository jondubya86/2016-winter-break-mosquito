import React from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import $ from 'jquery';

//components
import Mosquito from './Mosquito';
import GameStart from './GameStart';
import GameOver from './GameOver';
// import KillCount from './KillCount';


var CanvasComponent = React.createClass({
    getInitialState() {
      return {
        showgame: false, gameover: false, buttonshow: true
      };
    },
    startGame() {
        this.setState({buttonshow: false, showgame:true,gameover:false})
        let timer=setInterval(()=>(
            this.setState({showgame:false, buttonshow: true, gameover:true}),
            clearInterval(timer))
            ,30000)
        timer
    },
    // upDateScore() {
    //     $.ajax({
    //         url: '/api/highscore',
    //         type: 'POST',
    //         data: 
    //     })
    // },
    render() {
        return (
            <div>

            {(this.state.buttonshow===true)?
            <div>
            <button onClick={this.startGame}>Start Game</button> 
            </div>:
            <div></div>}

            {(this.state.gameover!=true)?
            (this.state.showgame!=false)?
            <div>
            <Stage width={800} height={600}>
                <Layer>
                    <Mosquito/>
                </Layer>
            </Stage>
            </div>:
            <GameStart/>:
            (alert('game over!'),
            <GameStart/>)}
            </div>
        );
    }
})

module.exports = CanvasComponent;