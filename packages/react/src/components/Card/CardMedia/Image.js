import React, { useContext } from 'react'
import styled from '@emotion/styled'

import Wrap from './Wrap'
import { GlobalContext } from '../../../context/GlobalState'
import { classNames, imageProxy } from '../../../utils'

const ImageWrap = styled(Wrap)`
  background-image: ${({ url }) => (url ? `url('${imageProxy(url)}')` : '')};
`

ImageWrap.defaultProps = { className: `${classNames.media} ${classNames.image}` }

const ImageComponent = props => {
  const {
    state: { imageUrl }
  } = useContext(GlobalContext)

  return <ImageWrap url={imageUrl} {...props} />
}

export default ImageComponent
