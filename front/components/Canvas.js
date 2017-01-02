import React from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import $ from 'jquery';

//components
import Mosquito from './Mosquito';
import GameStart from './GameStart';
import Form from './Form';
import TopScore from './TopScore';
import CanvasBg from './CanvasBg';



const CanvasComponent = React.createClass({
    getInitialState() {
      return {
        showgame: false, gameover: false, buttonshow: true, score: null, timer: 0
      };
    },
    componentDidMount() {
        $.ajax({
            url: '/api/highscore',
            type: 'GET'
        }).done((score)=>this.setState({topscore: score}))
    },
    startGame() {
        let timer=setInterval(()=>(
                    this.setState({showgame:false, gameover:true, buttonshow: true}),
                    clearInterval(timer))
                    ,30000)
        this.setState({showgame:true, gameover: false, buttonshow: false, score:0, timer:30})
        timer
    },
    countKill() {
        this.setState({score:this.state.score+=1})
    },
    gameOver() {
        let topTen=this.state.topscore, scores=[], x
        for(x in topTen){
            scores.push(topTen[x].score)
        }
        if(this.state.score>scores[scores.length-1]){
            return <Form score={this.state.score} />
        }else{
            return <GameStart />
        }
    },
    render() {
        return (
            <div id='canvas'>

            {(this.state.gameover!=true)?/*new game*/
            (this.state.showgame!=false)? /*button pressed starts game*/
            <div>
            <Stage width={1260} height={570}>
                <Layer>
                    <CanvasBg />
                </Layer>
                <Layer onClick={this.countKill}>
                    <Mosquito />
                </Layer>
            </Stage>
            </div>:
            <GameStart />:
            (this.state.topscore)?
            this.gameOver():'Loading Topscore...'}

            {/*new game loads and shows button, if pressed shows current score while game is playing*/
            (this.state.buttonshow===true)?
            <span>
            <button onClick={this.startGame}>Start Game</button> 
            </span>:
            <div id='scoreboard'>
            <p>Kill Count: {this.state.score}</p>
            </div>}
            </div>
        );
    }
});

module.exports = CanvasComponent;