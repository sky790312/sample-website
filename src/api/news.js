import { get } from '@/api'

export const NewsServer = {
  get (payload) {
    return get(`/data${payload}.json`)
  }
}
