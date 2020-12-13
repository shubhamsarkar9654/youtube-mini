import React, { Component } from 'react';

import youtube from './api/youtube';
import SearchBar from './components/SearchBar.jsx';
import VideoDetail from './components/VideoDetail.jsx';
import VideoList from './components/VideoList/VideoList.jsx';

class App extends Component {
    state = {
        videoList: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleTermSubmit('ben 10')
    }


    handleTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term //officially q is query in youtube api
            }
        })
        .then(response => {
            this.setState({
                videoList: response.data.items,
                selectedVideo: response.data.items[0]
            })
        })
    }

    handleSelectedVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:"5vh"}}>
                <SearchBar handleTermSubmit={this.handleTermSubmit} />
                <div className="ui grid " style={{marginTop:"3vh"}}>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videoList={this.state.videoList}
                                handleSelectedVideo={this.handleSelectedVideo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
