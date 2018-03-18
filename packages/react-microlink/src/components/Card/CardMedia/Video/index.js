import {Motion, spring} from 'react-motion'
import React, {Component} from 'react'
import styled from 'styled-components'

import {PlayButton, ProgressBar} from './controls'
import MediaWrap from '../wrap'
import {getUrlPath} from '../../../../utils'

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
    super(props)
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
        this.video[action]()
        return {playing: !playing}
      })
    }
  }

  updateProgress = () => {
    const progress = this.video.currentTime / this.video.duration * 100
    this.setState({progress})
  }

  renderProgressBar () {
    const { playing, progress } = this.state
    const { cardSize } = this.props

    const config = progress < 1
      ? {stiffness: 390, damping: 20}
      : {stiffness: 60, damping: 40}

    return (
      <Motion
        style={{ smoothWidth: spring(progress, config) }}
      >
        {values => (
          <ProgressBar
            cardSize={cardSize}
            progress={progress < 2 ? progress : values.smoothWidth}
            playing={playing}
          />
        )}
      </Motion>
    )
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
      video
    } = this.props
    const {playing} = this.state

    return (
      <MediaWrap
        className='microlink_card__media_video_wrapper'
        cardSize={cardSize}
        loading={loading}
        onClick={this.togglePlayback}
      >
        <Video
          className='microlink_card__media_video'
          src={getUrlPath(video)}
          poster={image}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          playsInline={playsInline}
          innerRef={node => (this.video = node)}
          {...(controls ? {onTimeUpdate: this.updateProgress} : {})}
        />
        <PlayButton cardSize={cardSize} visible={controls && !playing} />
        {controls && this.renderProgressBar()}
      </MediaWrap>
    )
  }
}

export default CardVideo
