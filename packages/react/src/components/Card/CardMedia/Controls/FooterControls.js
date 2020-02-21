import React, { useMemo } from 'react'
import styled from 'styled-components'

import MediaButton from './MediaButton'
import { classNames, media, isLarge } from '../../../../utils'
import { font, transition } from '../../../../theme'

const VolumeMute = props => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' {...props}>
    <path
      fill='#FFF'
      fillRule='evenodd'
      stroke='none'
      strokeWidth='1'
      d='M15.5 6.205l-.705-.705L13 7.295 11.205 5.5l-.705.705L12.295 8 10.5 9.795l.705.705L13 8.705l1.795 1.795.705-.705L13.705 8 15.5 6.205zM9 15a.5.5 0 01-.355-.15L4.835 11H1.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h3.335l3.81-3.85a.5.5 0 01.705 0 .5.5 0 01.15.35v13a.5.5 0 01-.5.5z'
      transform='translate(-1 -1)'
    />
  </svg>
)

const VolumeUp = props => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' {...props}>
    <path
      fill='#FFF'
      fillRule='evenodd'
      stroke='none'
      strokeWidth='1'
      d='M13.58 4.04l-.765.645a5 5 0 01-.145 6.615l.735.7a6 6 0 00.175-7.94v-.02zM10.79 6a3 3 0 01-.09 3.97l.735.68a4 4 0 00.115-5.295L10.79 6zM9 15a.5.5 0 01-.355-.15L4.835 11H1.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h3.335l3.81-3.85a.5.5 0 01.705 0 .5.5 0 01.15.35v13a.5.5 0 01-.5.5z'
      transform='translate(-1 -1)'
    />
  </svg>
)

const BottomControls = styled('div')`
  z-index: 2;
  position: absolute;
  bottom: ${({ cardSize }) => (isLarge(cardSize) ? 18 : 14)}px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${transition.medium('opacity')};
  will-change: opacity;
`

const VolumeIcon = styled('svg')`
  stroke: #fff;
`

const VolumeButton = styled(MediaButton).attrs({
  className: classNames.volumeControl
})`
  ${VolumeIcon} {
    width: ${({ cardSize }) => (isLarge(cardSize) ? 16 : 14)}px;
    height: ${({ cardSize }) => (isLarge(cardSize) ? 16 : 14)}px;

    ${({ cardSize }) =>
    !isLarge(cardSize) &&
      media.mobile`
      width: 12px;
      height: 12px;
    `}
  }
`

const PlaybackRateButton = styled(MediaButton).attrs({
  className: classNames.rateControl
})`
  font-size: ${({ cardSize }) => (isLarge(cardSize) ? 12 : 10)}px;
  min-width: ${({ cardSize }) => (isLarge(cardSize) ? 33 : 28)}px;
  line-height: 1;
  font-weight: bold;
  border: 1.5px solid #fff;
  border-radius: 9999px;
  padding: 1px 5px;
  text-align: center;
  color: #fff;
  margin-left: 10px;

  ${({ cardSize }) =>
    !isLarge(cardSize) &&
    media.mobile`
    font-size: 8px;
    margin-left: 8px;
    min-width: 23px;
  `}
`

const TimeLabel = styled('span').attrs({ className: classNames.progressTime })`
  margin: ${({ right }) => (!right ? '0 auto 0 0' : '0 0 0 auto')};
  font-family: ${font.mono};
  font-size: 12px;
  padding: 0 16px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

const FooterControls = ({
  cardSize,
  currentTime,
  endTime,
  isMuted,
  onMuteClick,
  onPlaybackRateClick,
  playbackRate
}) => {
  const VolumeComponent = useMemo(() => (isMuted ? VolumeMute : VolumeUp), [
    isMuted
  ])
  const isLargeCard = useMemo(() => isLarge(cardSize), [cardSize])

  return (
    <BottomControls cardSize={cardSize}>
      {isLargeCard && <TimeLabel>{currentTime}</TimeLabel>}

      <VolumeButton
        title={isMuted ? 'Unmute' : 'Mute'}
        cardSize={cardSize}
        onClick={onMuteClick}
      >
        <VolumeIcon as={VolumeComponent} />
      </VolumeButton>

      <PlaybackRateButton
        title='Playback Rate'
        cardSize={cardSize}
        onClick={onPlaybackRateClick}
      >
        <span>{playbackRate}x</span>
      </PlaybackRateButton>

      {isLargeCard && <TimeLabel right>{endTime}</TimeLabel>}
    </BottomControls>
  )
}

export default FooterControls
