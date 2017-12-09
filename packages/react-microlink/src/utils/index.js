// @flow
export const getUrlPath = (data: {url: string} | string): string =>
  typeof data === 'object' ? data.url : data
