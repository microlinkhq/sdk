import Microlink from '@microlink/react'
import styled from 'styled-components'
import React from 'react'

const PopOver = styled.div`
  background-color: white;
  position: absolute;
  overflow: hidden;
  visibility: hidden;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
  right: 50%;
  transform: translate(50%, 0);
  bottom: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  width: 500px;
  padding: 0.5rem;
  border-radius: 4px;

  .microlink_card {
    border: 0;
  }

  .microlink_card:hover {
    background: white;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px;
  }
`

const Wrapper = styled.span`
  position: relative;
  display: inline-block;

  &:hover ${PopOver} {
    visibility: visible;
    opacity: 1;
    margin-bottom: 15px;
  }
`

export default (LinkComponent, microlinkProps) => ({ url, ...props }) => {
  return (
    <Wrapper>
      <LinkComponent {...props} />
      <PopOver>
        <Microlink url={url || props.href} {...microlinkProps} {...props} />
      </PopOver>
    </Wrapper>
  )
}
