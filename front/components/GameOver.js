import React from 'react';

function GameOver() {
    let topscore = this.state.topscore
    let scores = []
    let x
    for(x in topscore){
        scores.push(topscore[x].score)}
        if(this.state.score>scores[9]){
            return 
                (<GameStart />,
                 <Form score={this.state.score} />
            )
        }else{
            return <GameStart />
        }
};

module.exports = GameOver;

