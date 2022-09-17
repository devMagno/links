import qs from 'qs'

export function getStrapiURL(path = ''): string {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'

  return `${url}${path}`
}

export async function fetchAPI(
  path: string,
  urlParamsObject: object = {},
  options: object = {},
) {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }

  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`,
  )}`

  const response = await fetch(requestUrl, mergedOptions)

  if (!response.ok) throw new Error(`An error occured please try again`)

  const data = await response.json()
  return data
}
