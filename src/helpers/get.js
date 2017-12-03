import getValue from 'get-value'

export default DEFAULT => (props, name, defaultName = name) => (
  getValue(props, name) || DEFAULT[defaultName]
)
