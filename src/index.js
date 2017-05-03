import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDa7pnDrMACi1TyqscWN0VHxr3UJq8kiP4';

// Create a new Component. This Component should produce some HTML
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectVideo : null
    };

    this.videoSearch('BigBang');
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) => {
      this.setState({
        videos : videos,
        selectVideo : videos[0]
      });
    });
  }

  render(){
    const dvideoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
       <div>
        <SearchBar onSearchTermChange = {dvideoSearch} />
        <VideoDetail video = {this.state.selectVideo} />
        <VideoList
          onVideoSelcet = {selectVideo => this.setState({selectVideo})}
          videos = {this.state.videos} />
       </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
