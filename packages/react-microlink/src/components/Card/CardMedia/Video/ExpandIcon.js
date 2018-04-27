import { createElement } from 'react'
import { Maximize2, Minimize2 } from 'react-feather'

export default ({isExpanded, ...props}) => createElement(
  isExpanded ? Minimize2 : Maximize2,
  {size: 'inherit', ...props}
)
