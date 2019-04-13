import React, { useState, Fragment } from 'react'

import { getUrlPath } from '../../../utils'
import { ImageLoadCatcher } from './loader'
import Image from './Image'
import Video from './Video'

const isUrl = url => getUrlPath(url) !== null

function CardMedia (props) {
  const { videoUrl, imageUrl, isVideo } = props
  const mediaUrl = isVideo ? videoUrl : imageUrl
  const [loading, setLoading] = useState(!isUrl(mediaUrl))
  const MediaComponent = isVideo ? Video : Image

  return (
    <Fragment>
      <MediaComponent {...props} loading={loading} />
      {loading && (
        <ImageLoadCatcher src={mediaUrl} onLoad={() => setLoading(false)} />
      )}
    </Fragment>
  )
}

export default CardMedia
