import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyC2B0DluJ5diaUQjWpyBpq3CcTGuclxXHQ';

// Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch(
      { key: YOUTUBE_API_KEY, term }, (videos) => {
        this.setState({videos, selectedVideo: videos[0]})
      },
    );
  }

  render() {
    const videos = this.state.videos;
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
