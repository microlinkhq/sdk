import React, { useState } from 'react'

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

function CardMedia (props) {
  const { imageUrl, isAudio, isVideo } = props
  const [isLoading, setIsLoading] = useState(!isUrl(imageUrl))
  const mediaType = getMediaType(isAudio, isVideo)
  const MediaComponent = MEDIA_COMPONENT[mediaType]

  return (
    <>
      <MediaComponent {...props} isLoading={isLoading} />
      {isLoading && (
        <ImageLoadCatcher src={imageUrl} onLoad={() => setIsLoading(false)} />
      )}
    </>
  )
}

export default CardMedia
