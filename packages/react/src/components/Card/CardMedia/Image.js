import React, { useContext } from 'react'
import styled from 'styled-components'

import Wrap from './Wrap'
import { GlobalContext } from '../../../context/GlobalState'
import { classNames, imageProxy } from '../../../utils'

const ImageWrap = styled(Wrap).attrs({
  className: `${classNames.media} ${classNames.image}`
})`
  background-image: ${({ url }) => (url ? `url('${imageProxy(url)}')` : '')};
`

const ImageComponent = props => {
  const {
    state: { imageUrl }
  } = useContext(GlobalContext)

  return <ImageWrap url={imageUrl} {...props} />
}

export default ImageComponent
