import React, {Component} from 'react'
import Tooltip from 'react-aria-tooltip'

import Card from '../Card'

export default class HoverCard extends Component {
  render () {
    const { is, rel, href, target, children, ...props } = this.props

    return (
      <Tooltip
        message={<Card url={href} />}
        eventType='hover'
        direction='right'
        bgcolor='#333'
        >
        <a
          href={href}
          rel={rel}
          target={target}
          {...props}>
          {children}
        </a>
      </Tooltip>
    )
  }
}

HoverCard.defaultProps = {
  is: 'a',
  rel: 'noopener noreferrer',
  target: '_blank'
}
