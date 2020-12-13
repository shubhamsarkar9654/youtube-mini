import React from 'react';

import './VideoItem.css'

function VideoItem(props) {

    return (
        <div onClick={() => {props.handleSelectedVideo(props.video)}} className="video-item item">
            <img 
                alt={props.video.snippet.title} 
                className="ui image" 
                src={props.video.snippet.thumbnails.medium.url}           
            />
            <div className="content">
                <div className="description">
                    {props.video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;
