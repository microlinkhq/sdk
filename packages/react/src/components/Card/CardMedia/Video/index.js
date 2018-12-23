import React, { Component } from 'react'
import styled from 'styled-components'

import { PlayButton, ProgressBar } from './controls'
import MediaWrap from '../wrap'
import { getUrlPath, imageProxy } from '../../../../utils'

const Video = styled('video')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${({ autoPlay }) =>
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
    super(props)
    this.state = {
      playing: props.autoPlay,
      progress: 0
    }
  }

  togglePlayback = event => {
    if (this.props.controls) {
      event.preventDefault()
      this.setState(({ playing }) => {
        const action = !playing ? 'play' : 'pause'
        this.video[action]()
        return { playing: !playing }
      })
    }
  }

  updateProgress = () => {
    const progress = this.video.currentTime / this.video.duration * 100
    this.setState({ progress })
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
      ...props
    } = this.props
    const { playing, progress } = this.state

    return (
      <MediaWrap
        className='microlink_card__media_video_wrapper'
        cardSize={cardSize}
        loading={loading}
        onClick={this.togglePlayback}
        {...props}
      >
        <Video
          className='microlink_card__media microlink_card__media_video'
          src={getUrlPath(video)}
          poster={imageProxy(image)}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          playsInline={playsInline}
          ref={node => (this.video = node)}
          {...(controls ? { onTimeUpdate: this.updateProgress } : {})}
        />
        <PlayButton cardSize={cardSize} visible={controls && !playing} />
        {controls && (
          <ProgressBar
            cardSize={cardSize}
            progress={progress}
            playing={playing}
          />
        )}
      </MediaWrap>
    )
  }
}

export default CardVideo
