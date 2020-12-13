import React from 'react'

function VideoDetail(props) {
    // console.log(props.selectedVideo)
    if (!props.selectedVideo) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {props.selectedVideo.snippet.title}
                </h4>
                <p>
                    {props.selectedVideo.snippet.description}
                </p>
            </div>
        </div>
    )
}

export default VideoDetail
