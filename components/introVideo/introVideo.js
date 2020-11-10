import React from 'react';
import ReactPlayer from 'react-player/lazy';

import styles from './IntroVideo.module.css';

class IntroVideo extends React.Component {
    render() {
        return (
            <div className={styles.introVideoWrapper}>
                {/*<div className={styles.overlay}></div>*/}
                <ReactPlayer
                    url='/video/videoplayback.mp4'
                    playing={true}
                    loop={true}
                    volume={1}
                    muted={false}
                    width="100%"
                    height="100%"
                    style={{
                        objectFit: "cover"
                    }}
                />
            </div>
        )
    }
}

export default IntroVideo