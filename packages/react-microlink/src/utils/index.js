export const getUrlPath = data => typeof data === 'object' ? data.url : data

export const uniqArray = array => Array.from(new Set(array))

export const someProp = (data, props) =>
  data[props.find(prop => data[prop] !== null && data[prop] !== undefined)]
