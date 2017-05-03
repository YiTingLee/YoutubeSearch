import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>;
  }
  const videoID = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoID}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>
      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
