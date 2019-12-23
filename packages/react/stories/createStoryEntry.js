import React from 'react'
import styled from 'styled-components'

import Microlink from '../src'

const StoryEntry = styled('div')`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  margin-bottom: 32px;

  &:not(:last-child):not(:only-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`

const StoryLink = styled('a')`
  color: #0366d6;
  margin-bottom: 32px;
`

const CodeBlock = styled('pre')`
  display: inline-block;
  padding: 18px 14px;
  margin: 0 0 32px;
  background: #2b2b2b;
  color: #e8417d;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter,
    monospace;
  border-radius: 5px;
  min-width: 300px;
  max-width: 100%;
  overflow: scroll;
`

const StyledMicrolink = styled(Microlink)`
  &:not(:last-child):not(:only-child) {
    margin-bottom: 32px;
  }
`

const VisualProps = ({ children }) => (
  <div>
    <CodeBlock>{children}</CodeBlock>
  </div>
)

const createStoryEntry = (storyProps = {}, showProps = false) => {
  const {
    url = 'https://microlink.io',
    sizes = ['normal', 'small', 'large'],
    ...props
  } = storyProps

  return (
    <StoryEntry key={JSON.stringify({ ...storyProps, url, sizes })}>
      <StoryLink href={url}>{url}</StoryLink>
      {showProps && (
        <VisualProps>{JSON.stringify(storyProps, null, 2)}</VisualProps>
      )}
      {sizes.map(size => (
        <StyledMicrolink key={url + size} url={url} size={size} {...props} />
      ))}
    </StoryEntry>
  )
}

export default createStoryEntry
