import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Volume, Volume2 } from 'react-feather'

import MediaButton from '../controls/MediaButton'
import { isLarge, media } from '../../../../utils'

const BottomControls = styled('div')`
  z-index: 2;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const VolumeIcon = styled('svg')`
  stroke: #fff;
  width: 20px;
  height: 20px;

  ${({ cardSize }) =>
    !isLarge(cardSize) &&
    media.mobile`
    width: 15px;
    height: 15px;
  `}
`

const PlaybackRateButton = styled(MediaButton)`
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 9999px;
  padding: 1px 5px;
  min-width: 26px;
  text-align: center;
  color: #fff;
  margin-left: 10px;

  ${({ cardSize }) =>
    !isLarge(cardSize) &&
    media.mobile`
    font-size: 10px;
    min-width: 22px;
    margin-left: 6px;
    padding: 1 3px;
  `}
`

const TimeLabel = styled('span')`
  margin: ${({ right }) => (!right ? '0 auto 0 0' : '0 0 0 auto')};
  font-size: 14px;
  padding: 0 10px;
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
  const VolumeComponent = useMemo(() => (isMuted ? Volume : Volume2), [isMuted])
  const isLargeCard = useMemo(() => isLarge(cardSize), [cardSize])

  return (
    <BottomControls cardSize={cardSize}>
      {isLargeCard && <TimeLabel>{currentTime}</TimeLabel>}

      <MediaButton onClick={onMuteClick}>
        <VolumeIcon cardSize={cardSize} as={VolumeComponent} />
      </MediaButton>

      <PlaybackRateButton cardSize={cardSize} onClick={onPlaybackRateClick}>
        {playbackRate}x
      </PlaybackRateButton>

      {isLargeCard && <TimeLabel right>{endTime}</TimeLabel>}
    </BottomControls>
  )
}

export default FooterControls
