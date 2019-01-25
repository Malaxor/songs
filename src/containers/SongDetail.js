
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) {
        return <div>Please select a song</div>
    }
    return (
        <div>
            <h2>Details:</h2>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
}

const mapStateToProps = state => ({ song: state.selectedSong });

export default connect(mapStateToProps)(SongDetail);