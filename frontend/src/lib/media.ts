import Media from '../types/Media'
import { getStrapiURL } from './api'

export default function getStrapiMedia(media: Media) {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return imageUrl
}
