import React, {Component} from 'react'
import styled from 'styled-components'

import {getUrlPath} from '../../../../utils'

import {PlayButton} from './controls'
import MediaWrap from '../wrap'

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${({autoPlay}) =>
    autoPlay &&
    `
    &::media-controls-start-playback-button {
      display: none;
      appearance: none;
    }
  `};
`

class CardVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: props.autoPlay
    }
  }

  toggleVideoPlayback() {
    if (!this.state.playing) {
      this.videoEl.play()
    } else {
      this.videoEl.pause()
    }
  }

  render() {
    const {cardSize, controls, video, image, muted, autoPlay, loading, loop} = this.props
    const {playing} = this.state

    return (
      <MediaWrap
        className="microlink_card__media_video_wrapper"
        cardSize={cardSize}
        loading={loading}
        onClick={e => {
          if (this.props.controls) {
            e.preventDefault()
            this.setState(prevState => ({playing: !prevState.playing}), this.toggleVideoPlayback())
          }
        }}
      >
        <Video
          className="microlink_card__media_video"
          src={getUrlPath(video)}
          poster={image}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          playsinline
          innerRef={video => {
            this.videoEl = video
          }}
        />
        <PlayButton visible={controls && !playing} />
      </MediaWrap>
    )
  }
}

CardVideo.defaultProps = {
  controls: true,
  muted: true,
  loop: true,
  autoPlay: true
}

export default CardVideo
