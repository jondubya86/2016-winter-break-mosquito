import React from 'react';
import Sound from 'react-sound';

const Buzz = React.createClass({
	render() {
  		return <Sound
    		url={'http://www.freesound.org/data/previews/188/188708_3504966-lq.mp3'}
    		playStatus={Sound.status.PLAYING}
    		playFromPosition={300 /* in milliseconds */}
    		onLoading={this.handleSongLoading}
    		onPlaying={this.handleSongPlaying}
    		onFinishedPlaying={this.handleSongFinishedPlaying} />
	}
});

module.exports = Buzz;