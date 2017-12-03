export const getUrlPath = (data: Object | string): string =>
  typeof data === 'object' ? data.url : data
