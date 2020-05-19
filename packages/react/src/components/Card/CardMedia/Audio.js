import React, { useContext, useMemo } from 'react'

import Image from './Image'
import Controls from './Controls'
import { GlobalContext } from '../../../context/GlobalState'
import { classNames } from '../../../utils'

const Audio = ({ onTogglePlayback, ...restProps }) => {
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
      {...restProps}
    >
      <Controls
        MediaComponent='audio'
        mediaProps={mediaProps}
        onTogglePlayback={onTogglePlayback}
      />
    </Image>
  )
}

export default Audio
