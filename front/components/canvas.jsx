import React from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import $ from 'jquery';

//components
import Mosquito from './mosquito.js';
import GameStart from './gamestart.js';
import Form from './form.js';
import TopScore from './topscore.jsx';
import CanvasBg from './canvasbg.js';

//sound effects
import Buzz from './buzz.js';
import Splat from './splat.js';

const CanvasComponent = React.createClass({
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
        let timer=setInterval(()=>(
            this.setState({showgame:false, gameover:true, buttonshow: true}),
            clearInterval(timer))
            ,30000)
        this.setState({showgame:true, gameover: false, buttonshow: false, score:0})
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
            this.setState({buttonshow:false})
            return <div id='form-id'><Form score={this.state.score} /></div>
        }else{
            return <GameStart />
        }
    },
    splat(){
        ()=>{return <Splat />}
    },
    render() {
        return (
            <div id='canvas' >
            {
            (this.state.gameover!=true)?/*new game*/
                (this.state.showgame!=false)? /*button pressed starts game*/
                    <div id='canvas-stage' onClick={this.splat}>
                        <Buzz />
                        <Splat />
                        <Stage width={1255} height={800}>
                            <Layer>
                                <CanvasBg />
                            </Layer>
                            <Layer id='layer-id' onClick={this.countKill}>
                                <Mosquito />
                            </Layer>
                        </Stage>
                    </div>:
                <GameStart />:
            this.gameOver()
            }

            {/*new game loads and shows button, if pressed shows current score while game is playing*/
            (this.state.buttonshow===true)?
            <div id='start-button'>
            <button onClick={this.startGame}>Start Game</button> 
            </div>:
            <div id='scoreboard'>
            <p>Kill Count: {this.state.score}</p>
            </div>}
            </div>
        );
    }
});

export default CanvasComponent;