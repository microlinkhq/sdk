/* global expect */

import initStoryshots from '@storybook/addon-storyshots'
import { createSerializer } from '@emotion/jest'

expect.addSnapshotSerializer(createSerializer())

initStoryshots()
