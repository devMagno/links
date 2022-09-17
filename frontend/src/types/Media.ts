export interface MediaFormat {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  path: string
  size: number
  url: string
  width: number
}

export default interface Media {
  data: {
    id: number
    attributes: {
      name: string
      mime: string
      provider: string
      previewUrl: string
      updatedAt: Date
      createdAt: Date
      alternativeText: string
      caption: string
      formats: {
        small: MediaFormat
        thumbnail: MediaFormat
      }
      url: string
      ext: string
      size: number
      width: number
      height: number
    }
  }
}
