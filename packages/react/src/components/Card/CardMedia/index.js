import React, { useState, Fragment } from 'react'

import { getUrlPath } from '../../../utils'
import { ImageLoadCatcher } from './loader'
import Image from './Image'
import Video from './Video'

const isUrl = url => getUrlPath(url) !== null

const MEDIA_COMPONENT = {
  video: Video,
  image: Image
}

function CardMedia (props) {
  const { videoUrl, imageUrl, isVideo } = props
  const mediaUrl = isVideo ? videoUrl : imageUrl
  const [loading, setLoading] = useState(!isUrl(mediaUrl))
  const mediaType = isVideo ? 'video' : 'image'
  const MediaComponent = MEDIA_COMPONENT[mediaType]
  const key = `${mediaType}__${mediaUrl}`

  return (
    <Fragment>
      <MediaComponent {...props} loading={loading} key={key} />
      {loading && (
        <ImageLoadCatcher src={mediaUrl} onLoad={() => setLoading(false)} />
      )}
    </Fragment>
  )
}

export default CardMedia
