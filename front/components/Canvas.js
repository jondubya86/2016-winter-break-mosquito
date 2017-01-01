import React from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import $ from 'jquery';
import Popup from 'react-popup'

//components
import Mosquito from './Mosquito';
import GameStart from './GameStart';
import GameOver from './GameOver';
import Form from './Form';



var CanvasComponent = React.createClass({
    getInitialState() {
      return {
        showgame: false, gameover: false, buttonshow: true, score: null
      };
    },
    startGame() {
        this.setState({buttonshow: false, showgame:true,gameover:false, score:0})
        let timer=setInterval(()=>(
            this.setState({showgame:false, buttonshow: true, gameover:true, score:null}),
            clearInterval(timer))
            ,3000)
        timer
    },
    countKill() {
        this.setState({score:this.state.score+=1})
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
            <div><h2>{this.state.score}</h2></div>}

            {(this.state.gameover!=true)?
            (this.state.showgame!=false)?
            <div>
            <Stage width={800} height={600}>
                <Layer onClick={this.countKill}>
                    <Mosquito />
                </Layer>
            </Stage>
            </div>:
            <GameStart />:
            (<GameStart />,
            <Form/>)}
            </div>
        );
    }
})

module.exports = CanvasComponent;