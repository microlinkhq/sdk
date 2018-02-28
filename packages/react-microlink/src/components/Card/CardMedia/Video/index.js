import React, {Component} from 'react'
import styled from 'styled-components'

import {getUrlPath} from '../../../../utils'

import {PlayButton, ProgressBar} from './controls'
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
  constructor (props) {
    super (props)
    this.state = {
      playing: props.autoPlay,
      progress: 0
    }
  }

  togglePlayback = event => {
    if (this.props.controls) {
      event.preventDefault()
      this.setState(({playing}) => {
        const action = !playing ? 'play' : 'pause'
        this.videoEl[action]()
        return {playing: !playing}
      })
    }
  }

  videoPlaying = () => {
    const progress = this.videoEl.currentTime / this.videoEl.duration * 100
    this.setState({progress})
  }

  render () {
    const {
      autoPlay,
      cardSize,
      controls,
      image,
      loading,
      loop,
      muted,
      playsInline,
      video,
    } = this.props
    const {playing, progress} = this.state

    return (
      <MediaWrap
        className="microlink_card__media_video_wrapper"
        cardSize={cardSize}
        loading={loading}
        onClick={this.togglePlayback}
      >
        <Video
          className="microlink_card__media_video"
          src={getUrlPath(video)}
          poster={image}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          playsInline={playsInline}
          innerRef={video => (this.videoEl = video)}
          onTimeUpdate={this.videoPlaying}
        />
        <PlayButton visible={controls && !playing} />
        {controls && <ProgressBar progress={progress} playing={playing} />}
      </MediaWrap>
    )
  }
}

CardVideo.defaultProps = {
  autoPlay: true,
  controls: true,
  loop: true,
  playsInline: true,
  muted: true
}

export default CardVideo
