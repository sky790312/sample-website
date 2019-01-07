import { get } from '@/src/api'

export const newsServer = {
  get (param) {
    return get(`./${param}`)
  }
}
