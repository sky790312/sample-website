import { get } from '@/api'

export const NewsServer = {
  get () {
    return get(`/data.json`)
  }
}
