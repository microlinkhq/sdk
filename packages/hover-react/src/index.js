import Microlink from '@microlink/react'
import styled from 'styled-components'
import React from 'react'

const PopOver = styled.div`
  --microlink-hover-background-color: var(--microlink-background-color, white);

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

  border: 1px solid var(--microlink-border-color, #e1e8ed);
  background-color: var(--microlink-hover-background-color);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px;
    border-color: var(--microlink-hover-border-color, #f5f8fa);
  }
`

const Wrapper = styled.span`
  text-decoration: inherit;
  position: relative;
  display: inline-block;

  &:hover ${PopOver} {
    visibility: visible;
    opacity: 1;
    margin-bottom: 15px;
  }
`

const withHover = ({ LinkComponent, ...props }) => (
  <Wrapper>
    <LinkComponent {...props} />
    <PopOver className='microlink_hover'>
      <Microlink {...props} />
    </PopOver>
  </Wrapper>
)

const MicrolinkHover = (LinkComponent, microlinkProps) => props =>
  withHover({ LinkComponent, ...microlinkProps, ...props })

MicrolinkHover.withHover = withHover

export default MicrolinkHover
