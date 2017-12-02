// @flow
import React from 'react'

import CardImage from './CardImage'
import CardContent from './CardContent'

const CardEmptyState = () => {
  return [<CardImage />, <CardContent empty />]
}

export default CardEmptyState
