import React from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import $ from 'jquery';

//components
import Mosquito from './Mosquito';
import GameStart from './GameStart';
// import GameOver from './GameOver';
import Form from './Form';
import TopScore from './TopScore';



var CanvasComponent = React.createClass({
    getInitialState() {
      return {
        showgame: false, gameover: false, buttonshow: true, score: null
      };
    },
    componentDidMount() {
        $.ajax({
            url: '/api/highscore',
            type: 'GET'
        }).done((score)=>this.setState({topscore: score}))
    },
    startGame() {
        this.setState({buttonshow: false, showgame:true,gameover:false, score:0})
        let timer=setInterval(()=>(
            this.setState({showgame:false, buttonshow: true, gameover:true}),
            clearInterval(timer))
            ,30000)
        timer
    },
    countKill() {
        this.setState({score:this.state.score+=1})
    },
    gameOver() {
    debugger
    let topTen=this.state.topscore, scores=[], x
    for(x in topTen){
        scores.push(topTen[x].score)}
        if(this.state.score>scores[scores.length-1]){
            return <Form score={this.state.score} />
        }else{
            return <GameStart />
        }
    },
    render() {
        return (
            <div>

            {/*new game loads and shows button, if pressed shows current score while game is playing*/
            (this.state.buttonshow===true)?
            <div>
            <button onClick={this.startGame}>Start Game</button> 
            </div>:
            <div><h2>{this.state.score}</h2></div>}

            {(this.state.gameover!=true)?/*new game*/
            (this.state.showgame!=false)? /*button pressed starts game*/
            <div>
            <Stage width={800} height={600}>
                <Layer onClick={this.countKill}>
                    <Mosquito />
                </Layer>
            </Stage>
            </div>:
            <GameStart />:
            (this.state.topscore)?
            this.gameOver():'Loading Topscore...'}
            </div>
        );
    }
});

module.exports = CanvasComponent;