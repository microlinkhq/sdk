import React, { useMemo } from 'react'

import Image from './Image'
import Controls from './Controls'
import { classNames } from '../../../utils'

const Audio = ({
  audioUrl,
  autoPlay,
  cardSize,
  controls: hasControls,
  imageUrl,
  loop,
  muted
}) => {
  const mediaProps = useMemo(
    () => ({
      className: `${classNames.media} ${classNames.audio}`,
      src: audioUrl
    }),
    [audioUrl]
  )

  return (
    <Image
      imageUrl={imageUrl}
      cardSize={cardSize}
      className={`${classNames.mediaWrapper} ${classNames.audioWrapper}`}
    >
      <Controls
        autoPlay={autoPlay}
        cardSize={cardSize}
        loop={loop}
        MediaComponent='audio'
        mediaProps={mediaProps}
        muted={muted}
        showControls={hasControls}
      />
    </Image>
  )
}

export default Audio
