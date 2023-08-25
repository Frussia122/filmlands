import React from 'react';
import ReactPlayer from 'react-player';
import {Video, VideoWrapper} from './styled';

type MovieVideoProps = {
    url?: string;
}

const MovieVideo:React.FC<MovieVideoProps> = ({ url }) => {
  return (
    <VideoWrapper>
      <Video>
        <ReactPlayer
          url={url}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ 
            position: 'absolute', 
            top: '0', 
            left: '0',
            zIndex: '-1',
          }}
        />
      </Video>
  </VideoWrapper>
  );
};

export default MovieVideo;