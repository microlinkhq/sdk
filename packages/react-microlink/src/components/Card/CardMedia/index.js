import React, {Component, Fragment} from 'react'

import {getUrlPath} from '../../../utils'

import Image from './image'
import Video from './Video'
import {ImageLoadCatcher} from './loader'

const isVideo = ({video}) => getUrlPath(video) !== null

export default class CardMedia extends Component {
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
