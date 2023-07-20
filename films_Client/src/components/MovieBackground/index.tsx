import React from 'react';
import ReactPlayer from 'react-player';
import {Video} from './styled';

type MovieVideoProps = {
    url?: string;
}

const MovieVideo:React.FC<MovieVideoProps> = ({ url }) => {
  return (
    <Video>
        <ReactPlayer
            url={url}
            playing
            loop
            muted
            width="100%"
            height="100%"
        />
    </Video>
  );
};

export default MovieVideo;