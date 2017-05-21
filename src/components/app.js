import React, { Component } from 'react';
<<<<<<< HEAD
import styles from './app.css';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem';

=======
>>>>>>> 7a1bbbc1dce8be133e4cc95730e57520815a09f5

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
<<<<<<< HEAD
      song: '',
      tracks: [],
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks } = this.state;
    console.log('tracks', tracks);
    return (
      <div className={styles.root}>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {tracks.items && <SongItem songData={tracks.items[0]} />}
=======
    };
  }

  render() {
    const { initialMessage } = this.state;
    return (
      <div>
        {initialMessage}
>>>>>>> 7a1bbbc1dce8be133e4cc95730e57520815a09f5
      </div>
    );
  }
}
