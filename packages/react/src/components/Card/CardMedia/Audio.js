import React, { useMemo } from 'react'
import styled from 'styled-components'

import Image from './Image'
import Controls from './Controls'

const AudioDOM = styled('audio')``

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
      className: 'microlink_card__media microlink_card__media_audio',
      src: audioUrl
    }),
    [audioUrl]
  )

  return (
    <Image
      imageUrl={imageUrl}
      cardSize={cardSize}
      className='microlink_card__media_wrapper microlink_card__media_audio_wrapper'
    >
      <Controls
        autoPlay={autoPlay}
        cardSize={cardSize}
        loop={loop}
        MediaComponent={AudioDOM}
        mediaProps={mediaProps}
        muted={muted}
        showControls={hasControls}
      />
    </Image>
  )
}

export default Audio
