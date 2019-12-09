import React, { useContext, useMemo } from 'react'

import Image from './Image'
import Controls from './Controls'
import { GlobalContext } from '../../../context/GlobalState'
import { classNames } from '../../../utils'

const Audio = props => {
  const {
    state: { audioUrl }
  } = useContext(GlobalContext)

  const mediaProps = useMemo(
    () => ({
      className: `${classNames.media} ${classNames.audio}`,
      src: audioUrl
    }),
    [audioUrl]
  )

  return (
    <Image
      className={`${classNames.mediaWrapper} ${classNames.audioWrapper}`}
      {...props}
    >
      <Controls MediaComponent='audio' mediaProps={mediaProps} />
    </Image>
  )
}

export default Audio
