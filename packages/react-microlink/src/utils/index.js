export const getUrlPath = data => typeof data === 'object' ? data.url : data

export const uniqArray = array => Array.from(new Set(array))

export const someProp = (data, props) => {
  const prop = props.find(prop => data[prop] !== null)
  return data[prop]
}
