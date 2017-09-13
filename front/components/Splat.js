import React from 'react';
import Sound from 'react-sound';

const Splat = React.createClass({
	render() {
  		return <Sound
    		url={'https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/fly-swatter-hit_zJdMWnNu.mp3'}
    		playStatus={Sound.status.PLAYING}
    		playFromPosition={0 /* in milliseconds */}
    		onLoading={this.handleSongLoading}
    		onPlaying={this.handleSongPlaying}
    		onFinishedPlaying={this.handleSongFinishedPlaying} />
	}
});

export default Splat;