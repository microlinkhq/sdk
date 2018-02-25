import React, {Fragment} from 'react'
import styled from 'styled-components'

import {getUrlPath} from '../../../utils'

import Image from './image'
import Video from './video'

const isVideo = ({video}) => getUrlPath(video) !== null

const ImageLoadCatcher = styled.img`
  height: 1px;
  width: 1px;
  position: absolute;
  z-index: -1;
`

export default class CardMedia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingImage: this.props.image ? true : false
    }
  }

  render() {
    const {loadingImage} = this.state
    return (
      <Fragment>
        {!isVideo(this.props) ? (
          <Image className="microlink_card__media_image" loading={loadingImage} {...this.props} />
        ) : (
          <Video {...this.props} loading={loadingImage} />
        )}
        {this.props.image && (
          <ImageLoadCatcher
            src={this.props.image}
            onLoad={() => this.setState({loadingImage: false})}
          />
        )}
      </Fragment>
    )
  }
}
