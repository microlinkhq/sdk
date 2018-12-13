import React, { Fragment } from 'react'
import { getUrlPath } from '../../../utils'

import Image from './Image'
import Video from './Video'
import { ImageLoadCatcher } from './loader'

const isUrl = url => getUrlPath(url) !== null

export default function CardMedia (props) {
  const [loading, setLoading] = React.useState(() => isUrl(props.image))
  const { image, video } = props
  const Element = !isUrl(video) && isUrl(image) ? Image : Video
  return (
    <Fragment>
      <Element {...props} loading={loading} />
      {loading &&
        isUrl(image) && (
        <ImageLoadCatcher src={image} onLoad={() => setLoading(false)} />
      )}
    </Fragment>
  )
}
