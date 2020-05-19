import React, { useContext, useState } from 'react'

import { GlobalContext } from '../../../context/GlobalState'
import { getUrlPath } from '../../../utils'
import { ImageLoadCatcher } from './loader'
import Image from './Image'
import Video from './Video'
import Audio from './Audio'

const isUrl = url => getUrlPath(url) !== null

const MEDIA_COMPONENT = {
  video: Video,
  image: Image,
  audio: Audio
}

const getMediaType = (isAudio, isVideo) => {
  if (isAudio) return 'audio'
  if (isVideo) return 'video'
  return 'image'
}

const CardMedia = ({ onTogglePlayback }) => {
  const {
    state: { imageUrl, isAudio, isVideo }
  } = useContext(GlobalContext)
  const [isLoading, setIsLoading] = useState(isUrl(imageUrl))
  const mediaType = getMediaType(isAudio, isVideo)
  const MediaComponent = MEDIA_COMPONENT[mediaType]
  const additionalMediaProps = ['audio', 'video'].includes(mediaType) ? { onTogglePlayback } : {}

  return (
    <>
      <MediaComponent
        isLoading={isLoading}
        {...additionalMediaProps}
      />
      {isLoading && (
        <ImageLoadCatcher src={imageUrl} onLoad={() => setIsLoading(false)} />
      )}
    </>
  )
}

export default CardMedia
