// @flow
export default (data: Object | string): string => (typeof data === 'object' ? data.url : data)
