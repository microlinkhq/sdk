// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { MicrolinkCard } from '../src/'

storiesOf('Card', module).add('small', () => (
  <MicrolinkCard url="http://bbc.com" />
))
