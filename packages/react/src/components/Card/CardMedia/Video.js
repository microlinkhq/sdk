import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import Wrap from './Wrap'
import Controls from './Controls'
import { GlobalContext } from '../../../context/GlobalState'
import { classNames, imageProxy } from '../../../utils'

const VideoDOM = styled('video')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &::media-controls-start-playback-button {
    display: none;
    appearance: none;
  }
`

const Video = props => {
  const {
    state: { imageUrl, playsInline, videoUrl }
  } = useContext(GlobalContext)

  const mediaProps = useMemo(() => {
    const mediaProps = {
      className: `${classNames.media} ${classNames.video}`,
      src: videoUrl,
      playsInline
    }
    if (imageUrl) mediaProps.poster = imageProxy(imageUrl)
    return mediaProps
  }, [imageUrl, playsInline, videoUrl])

  return (
    <Wrap
      className={`${classNames.mediaWrapper} ${classNames.videoWrapper}`}
      {...props}
    >
      <Controls MediaComponent={VideoDOM} mediaProps={mediaProps} />
    </Wrap>
  )
}

export default Video
