export const speed = {
  short: '0.1s',
  medium: '0.15s',
  long: '0.3s'
}

export const animation = {
  short: 'cubic-bezier(.25,.8,.25,1)',
  medium: 'cubic-bezier(.25,.8,.25,1)',
  long: 'cubic-bezier(.4, 0, .2, 1)'
}

export const transition = {
  short: `${speed.short} ${animation.short}`,
  medium: `${speed.medium} ${animation.medium}`,
  long: `${speed.long} ${animation.long}`
}

// https://primer.style/design/foundations/typography
export const font = {
  mono: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
}
