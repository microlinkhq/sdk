export const speed = {
  short: '100ms',
  medium: '150ms',
  long: '300ms'
}

export const animation = {
  short: 'cubic-bezier(.25,.8,.25,1)',
  medium: 'cubic-bezier(.25,.8,.25,1)',
  long: 'cubic-bezier(.4, 0, .2, 1)'
}

const createTransition = (properties, s) => {
  const suffix = `${speed[s]} ${animation[s]}`
  return properties.map(property => `${property} ${suffix}`).join(', ')
}

export const transition = {
  short: (...properties) => createTransition(properties, 'short'),
  medium: (...properties) => createTransition(properties, 'medium'),
  long: (...properties) => createTransition(properties, 'long')
}

// https://primer.style/design/foundations/typography
export const font = {
  sans: "InterUI, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
  mono: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
}
